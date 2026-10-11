const CHAT_COMPLETIONS_URL = "https://api.openai.com/v1/chat/completions";
const ATTEMPT_TIMEOUT_MS = 45_000;
const REQUEST_BUDGET_MS = 60_000;
const MAX_RETRY_DELAY_MS = 2_000;
const QUOTA_CODES = new Set([
  "insufficient_quota", "billing_hard_limit_reached", "billing_not_active",
  "organization_spend_limit_exceeded", "project_spend_limit_exceeded",
  "organization_usage_limit_exceeded", "project_usage_limit_exceeded",
]);

export function aiError(code, message, statusCode = 502) {
  return Object.assign(new Error(message), { code, statusCode });
}

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

function retryDelay(value) {
  if (value) {
    const seconds = Number(value);
    const delay = Number.isFinite(seconds)
      ? Math.max(0, seconds * 1000)
      : Date.parse(value) - Date.now();
    if (Number.isFinite(delay)) return Math.max(0, delay) + Math.random() * 100;
  }
  return 500 + Math.random() * 250;
}

async function requestAttempt(body, apiKey, timeoutMs) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(CHAT_COMPLETIONS_URL, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body,
      signal: controller.signal,
    });
    // The deadline includes reading the body, not just receiving HTTP headers.
    const text = await response.text();
    let payload;
    try {
      payload = JSON.parse(text);
    } catch {
      if (response.ok) throw aiError("AI_INVALID_RESPONSE", "Menu reading returned an incomplete response. Please try again or paste menu text.");
    }
    if (!response.ok) throw providerError(response, payload);
    return payload;
  } catch (error) {
    if (controller.signal.aborted || error?.name === "AbortError") {
      throw aiError("AI_REQUEST_TIMEOUT", "Menu reading took too long. Please try a cropped photo of one menu section or paste menu text.", 504);
    }
    if (typeof error?.code === "string" && error.code.startsWith("AI_")) throw error;
    throw Object.assign(aiError("AI_SERVICE_UNAVAILABLE", "The menu reading service could not be reached. Please try again or paste menu text.", 503), { retryable: true });
  } finally {
    clearTimeout(timeout);
  }
}

export async function requestOpenAiJson(body, apiKey) {
  const serializedBody = JSON.stringify(body);
  const deadline = Date.now() + REQUEST_BUDGET_MS;
  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      return await requestAttempt(serializedBody, apiKey, Math.min(ATTEMPT_TIMEOUT_MS, deadline - Date.now()));
    } catch (error) {
      const delay = retryDelay(error.retryAfter);
      const retry = Boolean(attempt === 0 && error.retryable && delay <= MAX_RETRY_DELAY_MS && Date.now() + delay < deadline);
      console.warn("DishKAI AI request failed", {
        code: error.code,
        status: error.providerStatus,
        requestId: error.providerRequestId,
        model: body.model,
        retry,
      });
      if (!retry) throw error;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}
