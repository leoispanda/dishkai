import assert from "node:assert/strict";
import { analyzeMenuImage, analyzeMenuText } from "../functions/_shared/menu-analysis.js";

// Real analyzers, fake provider keys, mocked fetch, and no external API calls.
const geminiKey = "dishkai-test-gemini-key-not-a-real-secret";
const openAiKey = "dishkai-test-openai-key-not-a-real-secret";
const geminiEnv = { DISHKAI_GEMINI_API_KEY: geminiKey };
const dualEnv = { ...geminiEnv, DISHKAI_AI_API_KEY: openAiKey };
const image = new Blob([new Uint8Array([1, 2, 3])], { type: "image/jpeg" });
const cases = [];

function check(name, run) {
  cases.push({ name, run });
}

function item(orderIndex, originalName, canonicalCandidate = originalName) {
  return {
    orderIndex, originalName, cleanName: canonicalCandidate, canonicalCandidate,
    matchCandidates: [canonicalCandidate], detectedLanguage: "en", possibleCategory: "", notes: "",
  };
}

function extracted(items = [item(1, "Pad Thai")]) {
  return { menuText: items.map((dish) => dish.originalName).join("\n"), items };
}

function geminiCompletion(value = extracted(), candidateOverrides = {}) {
  return new Response(JSON.stringify({ candidates: [{
    finishReason: "STOP",
    content: { role: "model", parts: [{ text: JSON.stringify(value) }] },
    ...candidateOverrides,
  }] }), { status: 200, headers: { "Content-Type": "application/json" } });
}

function openAiCompletion(value = extracted()) {
  return new Response(JSON.stringify({ choices: [{
    finish_reason: "stop", message: { content: JSON.stringify(value) },
  }] }), { status: 200, headers: { "Content-Type": "application/json" } });
}

function geminiError(status, statusName, details = []) {
  return new Response(JSON.stringify({ error: {
    code: status, status: statusName,
    message: `Private provider diagnostic ${geminiKey}`, details,
  } }), { status, headers: { "Content-Type": "application/json", "Retry-After": "0" } });
}

function dailyQuotaError() {
  return geminiError(429, "RESOURCE_EXHAUSTED", [{
    "@type": "type.googleapis.com/google.rpc.QuotaFailure",
    violations: [{
      quotaMetric: "generativelanguage.googleapis.com/generate_content_free_tier_requests",
      quotaId: "GenerateRequestsPerDayPerProjectPerModel-FreeTier",
      quotaValue: "20",
    }],
  }]);
}

function estimateCard() {
  return {
    orderIndex: 1, familiarName: "Chef surprise", cuisineName: "Mixed", orderVerdict: "Ask the staff",
    shortDescription: "An uncertain menu item.", cooking: { methods: [], profile: "Ask the staff." },
    composition: [], basicTaste: [], distinctiveFlavorSources: [], texture: [], watchOuts: [],
    visualDisclaimer: "AI-generated estimate. Actual dish may vary.",
  };
}

async function withFetch(responses, run) {
  const originalFetch = globalThis.fetch;
  const originalError = console.error;
  const originalWarn = console.warn;
  const calls = [];
  const logs = [];
  globalThis.fetch = async (url, options = {}) => {
    calls.push({ url: String(url), options, body: JSON.parse(options.body || "{}") });
    assert.ok(responses.length, "Unexpected external request or unbounded retry");
    const response = responses.shift();
    return typeof response === "function" ? response(url, options) : response;
  };
  console.error = (...args) => logs.push(args);
  console.warn = (...args) => logs.push(args);
  try {
    await run(calls);
    assert.equal(responses.length, 0, "An expected provider request was skipped");
    const diagnostics = logs.map((line) => line.map((value) => value instanceof Error
      ? `${value.message} ${JSON.stringify(value)}` : JSON.stringify(value)).join(" ")).join("\n");
    for (const key of [geminiKey, openAiKey]) assert.ok(!diagnostics.includes(key), "Provider key leaked into diagnostics");
  } finally {
    globalThis.fetch = originalFetch;
    console.error = originalError;
    console.warn = originalWarn;
  }
}

function photo(env = geminiEnv, overrides = {}) {
  return analyzeMenuImage({ image, env, ...overrides });
}

function assertGemini(call, model = "gemini-3.8-flash") {
  assert.equal(new URL(call.url).origin, "https://generativelanguage.googleapis.com");
  assert.ok(new URL(call.url).pathname.endsWith(`/models/${model}:generateContent`));
  assert.equal(new URL(call.url).searchParams.has("key"), false);
  assert.equal(new Headers(call.options.headers).get("x-goog-api-key"), geminiKey);
  assert.ok(!call.url.includes(geminiKey), "Gemini key must never appear in the URL");
}

function assertOpenAi(call) {
  assert.equal(call.url, "https://api.openai.com/v1/chat/completions");
  assert.equal(new Headers(call.options.headers).get("Authorization"), `Bearer ${openAiKey}`);
}

function assertFailure(result, code, statusCode) {
  assert.equal(result.ok, false);
  assert.equal(result.error, code);
  assert.equal(result.statusCode, statusCode);
  assert.deepEqual(result.items, []);
  assert.equal(result.privacy.uploadedImagesStored, false);
  for (const key of [geminiKey, openAiKey]) assert.ok(!JSON.stringify(result).includes(key), "Provider details leaked into public output");
}

check("Gemini is primary and preserves image menu order and verified aliases", async () => {
  const menu = [item(3, "Pad Thai with shrimp", "Pad Thai"), item(1, "Nasi goreng €14", "nasi goreng"), item(2, "Meteor chef surprise")];
  await withFetch([geminiCompletion(extracted(menu))], async (calls) => {
    const result = await photo(dualEnv, { targetLanguage: "zh" });
    assert.equal(result.ok, true);
    assert.equal(result.extractionSource, "gemini-vision");
    assert.equal(result.model, "gemini-3.8-flash");
    assert.deepEqual(result.items.map((dish) => dish.orderIndex), [1, 2, 3]);
    assert.deepEqual(result.items.map((dish) => dish.originalName), ["Nasi goreng €14", "Meteor chef surprise", "Pad Thai with shrimp"]);
    assert.deepEqual(result.items.map((dish) => dish.matchedDishId), ["nasi-goreng", null, "pad-thai"]);
    assert.equal(result.items[0].card.metadataSource, "dishkai-database");
    assert.equal(result.items[0].card.verified, true);
    assert.equal(result.items[1].card.verified, false);
    assert.equal(calls.length, 1);
    assertGemini(calls[0]);
    const format = calls[0].body.generationConfig.responseFormat.text;
    assert.equal(format.mimeType, "APPLICATION_JSON");
    assert.equal(format.schema.type, "object");
    assert.ok(format.schema.properties.items);
    assert.ok(calls[0].body.generationConfig.maxOutputTokens >= 10_000, "Gemini menu OCR has a small output budget");
    const parts = calls[0].body.contents.flatMap((content) => content.parts);
    const inline = parts.find((part) => part.inlineData)?.inlineData;
    assert.equal(inline.mimeType, "image/jpeg");
    assert.equal(inline.data, "AQID");
    assert.ok(!JSON.stringify(calls[0].body).includes("data:image/"));
  });
});

check("Gemini text extraction uses the verified database pipeline", async () => {
  await withFetch([geminiCompletion(extracted([item(1, "Nasi goreng")]))], async (calls) => {
    const result = await analyzeMenuText({ menuText: "Nasi goreng", env: geminiEnv });
    assert.equal(result.ok, true);
    assert.equal(result.extractionSource, "gemini");
    assert.equal(result.items[0].matchedDishId, "nasi-goreng");
    assert.equal(result.items[0].card.verified, true);
    assertGemini(calls[0]);
    assert.ok(calls[0].body.contents.flatMap((content) => content.parts).every((part) => !part.inlineData));
  });
});

check("The standard GEMINI_API_KEY alias selects Gemini", async () => {
  await withFetch([geminiCompletion()], async (calls) => {
    assert.equal((await photo({ GEMINI_API_KEY: geminiKey })).extractionSource, "gemini-vision");
    assertGemini(calls[0]);
  });
});

check("Gemini text and vision models can be configured separately", async () => {
  const env = { ...geminiEnv, DISHKAI_GEMINI_MODEL: "configured-text-model", DISHKAI_GEMINI_VISION_MODEL: "configured-vision-model", DISHKAI_AI_MODEL: "existing-openai-model" };
  await withFetch([geminiCompletion(), geminiCompletion()], async (calls) => {
    assert.equal((await analyzeMenuText({ menuText: "Pad Thai", env })).model, "configured-text-model");
    assert.equal((await photo(env)).model, "configured-vision-model");
    assertGemini(calls[0], "configured-text-model");
    assertGemini(calls[1], "configured-vision-model");
  });
});

check("Gemini joins non-thought text parts and ignores thought content", async () => {
  const json = JSON.stringify(extracted());
  await withFetch([geminiCompletion(undefined, { content: { role: "model", parts: [
    { thought: true, text: "private reasoning which is not JSON" },
    { text: json.slice(0, 20) }, { text: json.slice(20) },
  ] } })], async () => {
    const result = await photo();
    assert.equal(result.ok, true);
    assert.equal(result.items[0].matchedDishId, "pad-thai");
  });
});

check("Explicit OpenAI selection ignores the available Gemini key", async () => {
  await withFetch([openAiCompletion()], async (calls) => {
    const result = await photo({ ...dualEnv, DISHKAI_AI_PROVIDER: "openai" });
    assert.equal(result.ok, true);
    assert.equal(result.extractionSource, "openai-vision");
    assertOpenAi(calls[0]);
  });
});

check("Explicit Gemini without its key returns a controlled configuration error", async () => {
  await withFetch([], async (calls) => {
    assertFailure(await photo({ DISHKAI_AI_PROVIDER: "gemini", DISHKAI_AI_API_KEY: openAiKey }), "AI_PROVIDER_NOT_CONFIGURED", 503);
    assert.equal(calls.length, 0);
  });
});

check("Explicit missing Gemini configuration still allows local pasted-text aliases", async () => {
  await withFetch([], async () => {
    const result = await analyzeMenuText({ menuText: "Nasi goreng\nPad Thai", env: { DISHKAI_AI_PROVIDER: "gemini", DISHKAI_AI_API_KEY: openAiKey } });
    assert.equal(result.ok, true);
    assert.equal(result.extractionSource, "local-fallback");
    assert.deepEqual(result.items.map((dish) => dish.matchedDishId), ["nasi-goreng", "pad-thai"]);
  });
});

check("Gemini transient failure retries once then uses OpenAI backup", async () => {
  await withFetch([geminiError(500, "INTERNAL"), geminiError(500, "INTERNAL"), openAiCompletion()], async (calls) => {
    const result = await photo(dualEnv);
    assert.equal(result.ok, true);
    assert.equal(result.extractionSource, "openai-vision");
    assert.equal(result.model, "gpt-5.4-mini");
    assert.equal(result.items[0].matchedDishId, "pad-thai");
    assert.equal(calls.length, 3);
    assertGemini(calls[0]);
    assertGemini(calls[1]);
    assertOpenAi(calls[2]);
  });
});

check("Disabled provider fallback retains the Gemini error", async () => {
  await withFetch([geminiError(500, "INTERNAL"), geminiError(500, "INTERNAL")], async (calls) => {
    assertFailure(await photo({ ...dualEnv, DISHKAI_AI_PROVIDER_FALLBACK: "false" }), "AI_SERVICE_UNAVAILABLE", 503);
    assert.equal(calls.length, 2);
    calls.forEach((call) => assertGemini(call));
  });
});

check("Gemini-only GIF upload fails before any provider request", async () => {
  await withFetch([], async (calls) => {
    const gif = new Blob([new Uint8Array([1, 2, 3])], { type: "image/gif" });
    assertFailure(await photo(geminiEnv, { image: gif }), "UNSUPPORTED_IMAGE_TYPE", 415);
    assert.equal(calls.length, 0);
  });
});

check("Dual-provider GIF upload falls back to OpenAI", async () => {
  await withFetch([openAiCompletion()], async (calls) => {
    const gif = new Blob([new Uint8Array([1, 2, 3])], { type: "image/gif" });
    const result = await photo(dualEnv, { image: gif });
    assert.equal(result.ok, true);
    assert.equal(result.extractionSource, "openai-vision");
    assert.equal(calls.length, 1);
    assertOpenAi(calls[0]);
    assert.ok(calls[0].body.messages[1].content[1].image_url.url.startsWith("data:image/gif;base64,"));
  });
});

check("Disabling provider fallback prevents GIF routing to OpenAI", async () => {
  await withFetch([], async (calls) => {
    const gif = new Blob([new Uint8Array([1, 2, 3])], { type: "image/gif" });
    assertFailure(await photo({ ...dualEnv, DISHKAI_AI_PROVIDER_FALLBACK: "false" }, { image: gif }), "UNSUPPORTED_IMAGE_TYPE", 415);
    assert.equal(calls.length, 0);
  });
});

check("Gemini rate limiting retries once and recovers", async () => {
  await withFetch([geminiError(429, "RESOURCE_EXHAUSTED"), geminiCompletion()], async (calls) => {
    const result = await photo();
    assert.equal(result.ok, true);
    assert.equal(result.extractionSource, "gemini-vision");
    assert.equal(calls.length, 2);
  });
});

check("Gemini daily quota exhaustion is not retried", async () => {
  await withFetch([dailyQuotaError()], async (calls) => {
    assertFailure(await photo(), "AI_QUOTA_EXCEEDED", 503);
    assert.equal(calls.length, 1);
  });
});

check("Gemini long RetryInfo delays are respected without an early retry", async () => {
  await withFetch([geminiError(429, "RESOURCE_EXHAUSTED", [{
    "@type": "type.googleapis.com/google.rpc.RetryInfo", retryDelay: "30s",
  }])], async (calls) => {
    assertFailure(await photo(), "AI_RATE_LIMITED", 429);
    assert.equal(calls.length, 1);
  });
});

check("Gemini invalid-key details classify HTTP400 as an authentication error", async () => {
  await withFetch([geminiError(400, "INVALID_ARGUMENT", [{
    "@type": "type.googleapis.com/google.rpc.ErrorInfo", reason: "API_KEY_INVALID",
  }])], async (calls) => {
    assertFailure(await photo(), "AI_AUTH_ERROR", 503);
    assert.equal(calls.length, 1);
  });
});

for (const [status, providerStatus, code, responseStatus] of [
  [401, "UNAUTHENTICATED", "AI_AUTH_ERROR", 503],
  [404, "NOT_FOUND", "AI_MODEL_UNAVAILABLE", 503],
  [400, "INVALID_ARGUMENT", "AI_INVALID_REQUEST", 502],
]) {
  check(`Gemini HTTP ${status} produces safe ${code}`, async () => {
    await withFetch([geminiError(status, providerStatus)], async (calls) => {
      assertFailure(await photo(), code, responseStatus);
      assert.equal(calls.length, 1);
    });
  });
}

check("Gemini truncation is rejected even when returned JSON parses", async () => {
  await withFetch([geminiCompletion(undefined, { finishReason: "MAX_TOKENS" })], async (calls) => {
    assertFailure(await photo(), "AI_OUTPUT_TRUNCATED", 502);
    assert.equal(calls.length, 1);
  });
});

for (const finishReason of [undefined, "OTHER"]) {
  check(`Gemini ${finishReason === undefined ? "missing" : finishReason} finish reason rejects parseable incomplete output`, async () => {
    await withFetch([geminiCompletion(undefined, { finishReason })], async (calls) => {
      assertFailure(await photo(), "AI_INVALID_RESPONSE", 502);
      assert.equal(calls.length, 1);
    });
  });
}

for (const finishReason of ["SAFETY", "ESCALATION", "PUP_LIMITED_DISABLED"]) {
  check(`Gemini ${finishReason} refusal never crosses to another provider`, async () => {
    await withFetch([geminiCompletion(undefined, { finishReason })], async (calls) => {
      assertFailure(await photo(dualEnv), "AI_RESPONSE_REFUSED", 422);
      assert.equal(calls.length, 1);
    });
  });
}

check("Gemini prompt safety blocking never crosses to another provider", async () => {
  await withFetch([new Response(JSON.stringify({ promptFeedback: { blockReason: "SAFETY" } }), { status: 200 })], async (calls) => {
    assertFailure(await photo(dualEnv), "AI_RESPONSE_REFUSED", 422);
    assert.equal(calls.length, 1);
  });
});

check("Malformed Gemini JSON returns a safe response error", async () => {
  await withFetch([geminiCompletion(undefined, { content: { parts: [{ text: '{"items":[' }] } })], async (calls) => {
    assertFailure(await photo(), "AI_INVALID_RESPONSE", 502);
    assert.equal(calls.length, 1);
  });
});

check("Empty Gemini candidates return a safe response error", async () => {
  await withFetch([new Response(JSON.stringify({ candidates: [] }), { status: 200 })], async (calls) => {
    assertFailure(await photo(), "AI_INVALID_RESPONSE", 502);
    assert.equal(calls.length, 1);
  });
});

check("Gemini response-body timeout is classified without a retry", async () => {
  await withFetch([{ ok: true, status: 200, headers: new Headers(), text: async () => { throw new DOMException("Body timeout", "AbortError"); } }], async (calls) => {
    assertFailure(await photo(), "AI_REQUEST_TIMEOUT", 504);
    assert.equal(calls.length, 1);
  });
});

check("Failed Gemini text extraction preserves local ordering and verified aliases", async () => {
  await withFetch([dailyQuotaError()], async (calls) => {
    const result = await analyzeMenuText({ menuText: "Nasi goreng\nPad Thai\nMeteor chef surprise", env: geminiEnv });
    assert.equal(result.ok, true);
    assert.equal(result.extractionSource, "local-fallback");
    assert.deepEqual(result.items.map((dish) => dish.matchedDishId), ["nasi-goreng", "pad-thai", null]);
    assert.equal(result.items[2].card.verified, false);
    assert.equal(calls.length, 1);
  });
});

check("Text refusal preserves local metadata and prevents every other AI phase", async () => {
  let workersCalls = 0;
  await withFetch([geminiCompletion(undefined, { finishReason: "SAFETY" })], async (calls) => {
    const result = await analyzeMenuText({
      menuText: "Nasi goreng\nMeteor chef surprise",
      env: { ...dualEnv, DISHKAI_ENABLE_AI_FALLBACK: "true", AI: { run: async () => { workersCalls += 1; throw new Error("Workers AI must not run after a refusal"); } } },
    });
    assert.equal(result.ok, true);
    assert.equal(result.extractionSource, "local-fallback");
    assert.equal(result.aiFallbackSource, "none");
    assert.deepEqual(result.items.map((dish) => dish.matchedDishId), ["nasi-goreng", null]);
    assert.equal(result.items[0].card.verified, true);
    assert.equal(result.items[1].matchStatus, "unmatched");
    assert.equal(workersCalls, 0);
    assert.equal(calls.length, 1);
  });
});

check("Optional Gemini estimate cards remain unverified", async () => {
  const unknown = item(1, "Meteor chef surprise");
  const card = estimateCard();
  await withFetch([geminiCompletion(extracted([unknown])), geminiCompletion({ cards: [card] })], async (calls) => {
    const result = await photo({ ...geminiEnv, DISHKAI_ENABLE_AI_FALLBACK: "true" });
    assert.equal(result.ok, true);
    assert.equal(result.extractionSource, "gemini-vision");
    assert.equal(result.aiFallbackSource, "gemini");
    assert.equal(result.aiFallbackModel, "gemini-3.8-flash");
    assert.equal(result.items[0].matchStatus, "ai-generated");
    assert.equal(result.items[0].card.metadataSource, "ai-fallback");
    assert.equal(result.items[0].card.verified, false);
    assert.equal(calls.length, 2);
    calls.forEach((call) => assertGemini(call));
  });
});

check("Optional estimate cards can fail over independently while remaining unverified", async () => {
  await withFetch([
    geminiCompletion(extracted([item(1, "Meteor chef surprise")])),
    geminiError(500, "INTERNAL"), geminiError(500, "INTERNAL"),
    openAiCompletion({ cards: [estimateCard()] }),
  ], async (calls) => {
    const result = await photo({ ...dualEnv, DISHKAI_ENABLE_AI_FALLBACK: "true" });
    assert.equal(result.ok, true);
    assert.equal(result.extractionSource, "gemini-vision");
    assert.equal(result.aiFallbackSource, "openai");
    assert.equal(result.items[0].matchStatus, "ai-generated");
    assert.equal(result.items[0].card.metadataSource, "ai-fallback");
    assert.equal(result.items[0].card.verified, false);
    assert.equal(calls.length, 4);
    calls.slice(0, 3).forEach((call) => assertGemini(call));
    assertOpenAi(calls[3]);
  });
});

check("Optional estimate cards obey the disabled provider fallback setting", async () => {
  await withFetch([
    geminiCompletion(extracted([item(1, "Meteor chef surprise")])),
    geminiError(500, "INTERNAL"), geminiError(500, "INTERNAL"),
  ], async (calls) => {
    const result = await photo({ ...dualEnv, DISHKAI_ENABLE_AI_FALLBACK: "true", DISHKAI_AI_PROVIDER_FALLBACK: "false" });
    assert.equal(result.ok, true);
    assert.equal(result.aiFallbackSource, "none");
    assert.equal(result.items[0].matchStatus, "unmatched");
    assert.equal(result.items[0].card.verified, false);
    assert.equal(calls.length, 3);
    calls.forEach((call) => assertGemini(call));
  });
});

check("An optional-card refusal remains terminal across providers", async () => {
  await withFetch([
    geminiCompletion(extracted([item(1, "Meteor chef surprise")])),
    geminiCompletion({ cards: [estimateCard()] }, { finishReason: "SAFETY" }),
  ], async (calls) => {
    const result = await photo({ ...dualEnv, DISHKAI_ENABLE_AI_FALLBACK: "true" });
    assert.equal(result.ok, true);
    assert.equal(result.aiFallbackSource, "none");
    assert.equal(result.items[0].matchStatus, "unmatched");
    assert.equal(calls.length, 2);
    calls.forEach((call) => assertGemini(call));
  });
});

check("OpenAI backup receives only the remaining shared extraction budget", async () => {
  const originalNow = Date.now;
  const originalSetTimeout = globalThis.setTimeout;
  let now = originalNow();
  let lastTimerDelay;
  Date.now = () => now;
  globalThis.setTimeout = (callback, delay, ...args) => {
    lastTimerDelay = delay;
    return originalSetTimeout(callback, delay, ...args);
  };
  try {
    await withFetch([
      () => { now += 50_000; return geminiError(500, "INTERNAL"); },
      geminiError(500, "INTERNAL"),
      () => {
        assert.ok(lastTimerDelay > 0 && lastTimerDelay <= 10_000, "OpenAI backup restarted a fresh deadline after Gemini used50seconds");
        return openAiCompletion();
      },
    ], async (calls) => {
      const result = await photo(dualEnv);
      assert.equal(result.ok, true);
      assert.equal(result.extractionSource, "openai-vision");
      assert.equal(calls.length, 3);
    });
  } finally {
    Date.now = originalNow;
    globalThis.setTimeout = originalSetTimeout;
  }
});

const failures = [];
for (const { name, run } of cases) {
  try {
    await run();
  } catch (error) {
    failures.push({ name, message: error.message });
  }
}
console.log(JSON.stringify({ casesChecked: cases.length, failures: failures.length }, null, 2));
if (failures.length) {
  console.error("\nGemini menu regressions:");
  for (const failure of failures) console.error(`- ${failure.name}: ${failure.message}`);
  process.exitCode = 1;
}
