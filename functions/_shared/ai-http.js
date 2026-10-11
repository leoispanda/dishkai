const ATTEMPT_TIMEOUT_MS = 45_000;
const REQUEST_BUDGET_MS = 60_000;
const MAX_RETRY_DELAY_MS = 2_000;

export function aiError(code, message, statusCode = 502) {
  return Object.assign(new Error(message), { code, statusCode });
}

function timeoutError() {
  return aiError("AI_REQUEST_TIMEOUT", "Menu reading took too long. Please try a cropped photo of one menu section or paste menu text.", 504);
}

function retryDelay(value, retryAfterMs) {
  let delay;
  if (value) {
    const seconds = Number(value);
    const headerDelay = Number.isFinite(seconds)
      ? Math.max(0, seconds * 1000)
      : Date.parse(value) - Date.now();
    if (Number.isFinite(headerDelay)) delay = Math.max(0, headerDelay);
  }
  if (Number.isFinite(retryAfterMs) && retryAfterMs >= 0) {
    delay = Math.max(delay || 0, retryAfterMs);
  }
  return delay !== undefined ? delay + Math.random() * 100 : 500 + Math.random() * 250;
}

async function requestAttempt({ url, headers, body, providerError }, timeoutMs) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body,
      signal: controller.signal,
    });
    // Include reading the response body in the deadline, not just HTTP headers.
    const text = await response.text();
    if (controller.signal.aborted) throw timeoutError();
    let payload;
    try {
      payload = JSON.parse(text);
    } catch {
      if (response.ok) throw aiError("AI_INVALID_RESPONSE", "Menu reading returned an incomplete response. Please try again or paste menu text.");
    }
    if (!response.ok) throw providerError(response, payload);
    return payload;
  } catch (error) {
    if (controller.signal.aborted || error?.name === "AbortError") throw timeoutError();
    if (typeof error?.code === "string" && error.code.startsWith("AI_")) throw error;
    throw Object.assign(aiError("AI_SERVICE_UNAVAILABLE", "The menu reading service could not be reached. Please try again or paste menu text.", 503), { retryable: true });
  } finally {
    clearTimeout(timeout);
  }
}

// Shared provider transport: one bounded retry, with no request body or key in logs.
export async function requestAiJson({ url, headers, body, providerError, model, provider, budgetMs = REQUEST_BUDGET_MS }) {
  const serializedBody = JSON.stringify(body);
  const requestedBudget = Number(budgetMs);
  const boundedBudget = Number.isFinite(requestedBudget)
    ? Math.min(REQUEST_BUDGET_MS, Math.max(0, requestedBudget))
    : REQUEST_BUDGET_MS;
  const deadline = Date.now() + boundedBudget;
  for (let attempt = 0; attempt < 2; attempt += 1) {
    const remainingMs = deadline - Date.now();
    if (remainingMs <= 0) throw timeoutError();
    try {
      return await requestAttempt({ url, headers, body: serializedBody, providerError }, Math.min(ATTEMPT_TIMEOUT_MS, remainingMs));
    } catch (error) {
      const delay = retryDelay(error.retryAfter, error.retryAfterMs);
      const retry = Boolean(attempt === 0 && error.retryable && delay <= MAX_RETRY_DELAY_MS && Date.now() + delay < deadline);
      console.warn("DishKAI AI request failed", {
        code: error.code,
        status: error.providerStatus,
        requestId: error.providerRequestId,
        model: String(model || "").replace(/[^\w.-]/g, "").slice(0, 128),
        provider,
        retry,
      });
      if (!retry) throw error;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}
