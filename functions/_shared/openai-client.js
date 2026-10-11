import { aiError, requestAiJson } from "./ai-http.js";

export { aiError } from "./ai-http.js";

const CHAT_COMPLETIONS_URL = "https://api.openai.com/v1/chat/completions";
const QUOTA_CODES = new Set([
  "insufficient_quota", "billing_hard_limit_reached", "billing_not_active",
  "organization_spend_limit_exceeded", "project_spend_limit_exceeded",
  "organization_usage_limit_exceeded", "project_usage_limit_exceeded",
]);

// Keep provider error bodies out of public responses and never retry billing errors.
function providerError(response, payload) {
  const code = String(payload?.error?.code || "");
  const type = String(payload?.error?.type || "");
  let error;
  if (QUOTA_CODES.has(code) || type === "insufficient_quota") {
    error = aiError("AI_QUOTA_EXCEEDED", "Menu reading is unavailable because the AI service usage limit was reached. Please paste menu text instead.", 503);
  } else if (response.status === 429) {
    error = aiError("AI_RATE_LIMITED", "Menu reading is busy. Please wait a moment and try again.", 429);
    error.retryable = true;
  } else if (response.status === 401) {
    error = aiError("AI_AUTH_ERROR", "The menu reading service needs its API access checked. Please paste menu text instead.", 503);
  } else if ([403, 404].includes(response.status) || code === "model_not_found") {
    error = aiError("AI_MODEL_UNAVAILABLE", "The configured menu reading model is unavailable. Please paste menu text instead.", 503);
  } else if (response.status >= 500) {
    error = aiError("AI_SERVICE_UNAVAILABLE", "The menu reading service is temporarily unavailable. Please try again or paste menu text.", 503);
    error.retryable = true;
  } else {
    error = aiError("AI_INVALID_REQUEST", "The menu reading service could not process this request. Please try another photo or paste menu text.");
  }
  error.providerStatus = response.status;
  error.providerRequestId = String(response.headers.get("x-request-id") || "").replace(/[^\w-]/g, "").slice(0, 128);
  error.retryAfter = response.headers.get("retry-after");
  return error;
}

export async function requestOpenAiJson(body, apiKey, { budgetMs = 60_000 } = {}) {
  return requestAiJson({
    url: CHAT_COMPLETIONS_URL,
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body,
    model: body.model,
    provider: "openai",
    providerError,
    budgetMs,
  });
}
