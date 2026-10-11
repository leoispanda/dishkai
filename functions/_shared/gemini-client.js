import { aiError, requestAiJson } from "./ai-http.js";

export const DEFAULT_GEMINI_MODEL = "gemini-3.8-flash";
const GENERATE_CONTENT_URL = "https://generativelanguage.googleapis.com/v1beta/models/";
const IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);
const REFUSAL_REASONS = new Set([
  "SAFETY", "RECITATION", "BLOCKLIST", "PROHIBITED_CONTENT", "SPII",
  "IMAGE_SAFETY", "IMAGE_PROHIBITED_CONTENT", "IMAGE_RECITATION",
  "ESCALATION", "PUP_LIMITED_DISABLED",
]);

function errorDetails(payload, name) {
  const details = payload?.error?.details;
  if (!Array.isArray(details)) return [];
  return details.filter((detail) => String(detail?.["@type"] || "").endsWith(`/${name}`));
}

function hasPermanentQuotaFailure(payload) {
  const billingReasons = new Set(["BILLING_DISABLED", "BILLING_NOT_ACTIVE", "INSUFFICIENT_QUOTA"]);
  if (errorDetails(payload, "google.rpc.ErrorInfo").some((detail) => billingReasons.has(detail.reason))) return true;
  for (const detail of errorDetails(payload, "google.rpc.QuotaFailure")) {
    if (!Array.isArray(detail.violations)) continue;
    for (const violation of detail.violations) {
      const metric = `${violation?.quotaMetric || ""} ${violation?.quotaId || ""} ${violation?.subject || ""} ${violation?.description || ""}`;
      if (/per[\s_-]*day|daily/i.test(metric)) return true;
      if (violation?.quotaValue !== undefined && violation.quotaValue !== null && violation.quotaValue !== "" && Number(violation.quotaValue) === 0) return true;
    }
  }
  // Some REST errors omit structured QuotaFailure details. Inspect, never expose, their text.
  return /per[\s_-]*day|daily|limit\s*[:=]\s*0(?:\D|$)|billing.*(?:disabled|inactive)/i.test(String(payload?.error?.message || ""));
}

function retryInfoDelay(payload) {
  let delay;
  for (const detail of errorDetails(payload, "google.rpc.RetryInfo")) {
    const value = detail.retryDelay;
    const seconds = typeof value === "string" && /^\d+(?:\.\d+)?s$/.test(value)
      ? Number(value.slice(0, -1))
      : value && typeof value === "object"
        ? Number(value.seconds || 0) + Number(value.nanos || 0) / 1e9
        : NaN;
    if (Number.isFinite(seconds) && seconds >= 0) delay = Math.max(delay || 0, seconds * 1000);
  }
  return delay;
}

function providerError(response, payload) {
  const invalidAccess = errorDetails(payload, "google.rpc.ErrorInfo").some((detail) => /^(?:API_KEY_|CREDENTIALS_|ACCESS_TOKEN_)/.test(String(detail.reason || "")));
  let error;
  if ((response.status === 429 || payload?.error?.status === "RESOURCE_EXHAUSTED") && hasPermanentQuotaFailure(payload)) {
    error = aiError("AI_QUOTA_EXCEEDED", "Menu reading is unavailable because the AI service usage limit was reached. Please paste menu text instead.", 503);
  } else if (invalidAccess || response.status === 401 || response.status === 403) {
    error = aiError("AI_AUTH_ERROR", "The menu reading service needs its API access checked. Please paste menu text instead.", 503);
  } else if (response.status === 404) {
    error = aiError("AI_MODEL_UNAVAILABLE", "The configured menu reading model is unavailable. Please paste menu text instead.", 503);
  } else if (response.status === 429) {
    error = aiError("AI_RATE_LIMITED", "Menu reading is busy. Please wait a moment and try again.", 429);
    error.retryable = true;
  } else if (response.status >= 500) {
    error = aiError("AI_SERVICE_UNAVAILABLE", "The menu reading service is temporarily unavailable. Please try again or paste menu text.", 503);
    error.retryable = true;
  } else {
    error = aiError("AI_INVALID_REQUEST", "The menu reading service could not process this request. Please try another photo or paste menu text.");
  }
  error.providerStatus = response.status;
  error.providerRequestId = String(response.headers.get("x-request-id") || response.headers.get("x-goog-request-id") || "").replace(/[^\w-]/g, "").slice(0, 128);
  error.retryAfter = response.headers.get("retry-after");
  error.retryAfterMs = retryInfoDelay(payload);
  return error;
}

function inlineImage(imageDataUrl) {
  const match = /^data:([^;,]+);base64,([A-Za-z0-9+/]+={0,2})$/.exec(String(imageDataUrl || ""));
  if (!match) throw aiError("AI_INVALID_REQUEST", "The menu photo could not be processed. Please upload another JPEG, PNG, or WebP photo.");
  const mimeType = match[1].toLowerCase();
  if (!IMAGE_TYPES.has(mimeType)) {
    throw aiError("UNSUPPORTED_IMAGE_TYPE", "This menu reading service accepts JPEG, PNG, and WebP photos. Please convert the photo to JPEG or paste menu text.", 415);
  }
  return { inlineData: { mimeType, data: match[2] } };
}

function parsedResult(payload) {
  const blocked = payload?.promptFeedback?.blockReason;
  const candidate = Array.isArray(payload?.candidates) ? payload.candidates[0] : null;
  if ((blocked && blocked !== "BLOCK_REASON_UNSPECIFIED") || REFUSAL_REASONS.has(candidate?.finishReason)
    || (Array.isArray(candidate?.safetyRatings) && candidate.safetyRatings.some((rating) => rating?.blocked))) {
    throw aiError("AI_RESPONSE_REFUSED", "The photo could not be read. Please upload a menu-only photo or paste menu text.", 422);
  }
  if (candidate?.finishReason === "MAX_TOKENS") {
    throw aiError("AI_OUTPUT_TRUNCATED", "This menu is too long to read in one scan. Please crop it into smaller sections or paste menu text.");
  }
  // This is a complete, non-streaming response. A missing finish reason is unfinished output.
  if (candidate?.finishReason !== "STOP") {
    throw aiError("AI_INVALID_RESPONSE", "Menu reading returned an incomplete response. Please try again or paste menu text.");
  }
  const parts = candidate?.content?.parts;
  const text = Array.isArray(parts)
    ? parts.filter((part) => !part?.thought && typeof part?.text === "string").map((part) => part.text).join("")
    : "";
  let result;
  try {
    result = JSON.parse(text);
  } catch {
    throw aiError("AI_INVALID_RESPONSE", "Menu reading returned an incomplete response. Please try again or paste menu text.");
  }
  if (!result || typeof result !== "object" || Array.isArray(result)) {
    throw aiError("AI_INVALID_RESPONSE", "Menu reading returned an incomplete response. Please try again or paste menu text.");
  }
  return result;
}

export async function requestGeminiJson({ prompt, imageDataUrl, model = DEFAULT_GEMINI_MODEL, apiKey, maxTokens = 8000, temperature = 1, schema, budgetMs = 60_000 }) {
  const modelId = String(model || DEFAULT_GEMINI_MODEL).trim().replace(/^models\//, "");
  if (!/^[\w.-]+$/.test(modelId)) {
    throw aiError("AI_MODEL_UNAVAILABLE", "The configured menu reading model is unavailable. Please paste menu text instead.", 503);
  }
  const parts = [{ text: String(prompt || "") }];
  if (imageDataUrl) parts.push(inlineImage(imageDataUrl));
  const generationConfig = {
    maxOutputTokens: maxTokens,
    temperature,
    responseFormat: { text: { mimeType: "APPLICATION_JSON", ...(schema ? { schema } : {}) } },
  };
  if (/^gemini-3(?:[.-]|$)/.test(modelId)) generationConfig.thinkingConfig = { thinkingLevel: "LOW" };
  const payload = await requestAiJson({
    url: `${GENERATE_CONTENT_URL}${encodeURIComponent(modelId)}:generateContent`,
    headers: { "x-goog-api-key": apiKey, "Content-Type": "application/json" },
    body: {
      systemInstruction: { parts: [{ text: "Return valid JSON only. Do not include markdown." }] },
      contents: [{ role: "user", parts }],
      generationConfig,
    },
    model: modelId,
    provider: "gemini",
    providerError,
    budgetMs,
  });
  return parsedResult(payload);
}
