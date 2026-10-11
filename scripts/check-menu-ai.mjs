import assert from "node:assert/strict";
import {
  MAX_MENU_IMAGE_BYTES,
  analyzeMenuImage,
  analyzeMenuText,
} from "../functions/_shared/menu-analysis.js";

// Exercise the real menu pipeline without credentials, network calls, or new dependencies.
const fakeKey = "dishkai-test-key-not-a-real-secret";
const env = { DISHKAI_AI_API_KEY: fakeKey };
const image = new Blob([new Uint8Array([1, 2, 3])], { type: "image/jpeg" });
const cases = [];

function check(name, run) {
  cases.push({ name, run });
}

function extractedItem(orderIndex, originalName, canonicalCandidate = originalName) {
  return {
    orderIndex,
    originalName,
    cleanName: canonicalCandidate,
    canonicalCandidate,
    matchCandidates: [canonicalCandidate],
    detectedLanguage: "en",
    possibleCategory: "",
    notes: "",
  };
}

function completion(items = [extractedItem(1, "Pad Thai")], overrides = {}) {
  return new Response(JSON.stringify({
    choices: [{
      finish_reason: "stop",
      message: {
        content: JSON.stringify({
          menuText: items.map((item) => item.originalName).join("\n"),
          items,
        }),
      },
      ...overrides,
    }],
  }), { status: 200, headers: { "Content-Type": "application/json" } });
}

function upstreamError(status, code, type = "api_error") {
  return new Response(JSON.stringify({
    error: {
      code,
      type,
      message: `Upstream account details must stay private: ${fakeKey}`,
    },
  }), {
    status,
    headers: { "Content-Type": "application/json", "Retry-After": "0" },
  });
}

async function withFetch(responses, run) {
  const originalFetch = globalThis.fetch;
  const originalConsoleError = console.error;
  const originalConsoleWarn = console.warn;
  const calls = [];
  const logs = [];
  globalThis.fetch = async (url, options = {}) => {
    calls.push({ url, options, body: JSON.parse(options.body || "{}") });
    assert.ok(responses.length, "Unexpected extra request or unbounded retry");
    const next = responses.shift();
    if (typeof next === "function") return next(url, options);
    return next;
  };
  console.error = (...args) => logs.push(args);
  console.warn = (...args) => logs.push(args);
  try {
    await run(calls, logs);
  } finally {
    globalThis.fetch = originalFetch;
    console.error = originalConsoleError;
    console.warn = originalConsoleWarn;
  }
}

async function imageAnalysis(overrides = {}) {
  return analyzeMenuImage({ image, env, ...overrides });
}

function assertFailure(result, code, statusCode) {
  assert.equal(result.ok, false);
  assert.equal(result.error, code);
  assert.equal(result.statusCode, statusCode);
  assert.deepEqual(result.items, []);
  assert.equal(result.privacy.uploadedImagesStored, false);
  assert.ok(!JSON.stringify(result).includes(fakeKey), "Provider details leaked into a public response");
}

check("Photo extraction preserves menu order, original names, and verified aliases", async () => {
  const menu = [
    extractedItem(3, "Pad Thai with shrimp", "Pad Thai"),
    extractedItem(1, "Nasi goreng €14", "nasi goreng"),
    extractedItem(2, "Meteor chef surprise"),
  ];
  await withFetch([completion(menu)], async (calls) => {
    const result = await imageAnalysis({ targetLanguage: "zh" });
    assert.equal(result.ok, true);
    assert.equal(result.extractionSource, "openai-vision");
    assert.deepEqual(result.items.map((item) => item.orderIndex), [1, 2, 3]);
    assert.deepEqual(result.items.map((item) => item.originalName), [
      "Nasi goreng €14", "Meteor chef surprise", "Pad Thai with shrimp",
    ]);
    assert.deepEqual(result.items.map((item) => item.matchedDishId), ["nasi-goreng", null, "pad-thai"]);
    assert.deepEqual(result.items.map((item) => item.matchStatus), ["matched", "unmatched", "matched"]);
    assert.equal(result.items[0].card.metadataSource, "dishkai-database");
    assert.equal(result.items[0].card.verified, true);
    assert.equal(result.items[1].card.verified, false);
    assert.equal(result.privacy.uploadedImagesStored, false);
    assert.equal(calls.length, 1);
    assert.equal(calls[0].url, "https://api.openai.com/v1/chat/completions");
    assert.equal(calls[0].body.response_format.json_schema.strict, true);
    assert.ok(calls[0].body.messages[1].content[1].image_url.url.startsWith("data:image/jpeg;base64,"));
  });
});

check("Text extraction uses the same metadata pipeline", async () => {
  await withFetch([completion([extractedItem(1, "Nasi goreng")])], async (calls) => {
    const result = await analyzeMenuText({ menuText: "Nasi goreng", env });
    assert.equal(result.ok, true);
    assert.equal(result.extractionSource, "openai");
    assert.equal(result.items[0].matchedDishId, "nasi-goreng");
    assert.equal(result.items[0].card.verified, true);
    assert.equal(calls.length, 1);
  });
});

check("Whole-menu image and text extraction have larger output budgets", async () => {
  const menu = Array.from({ length: 40 }, (_, index) => extractedItem(index + 1, `Pad Thai ${index + 1}`, "Pad Thai"));
  await withFetch([completion(menu), completion(menu)], async (calls) => {
    assert.equal((await imageAnalysis()).items.length, 40);
    assert.equal((await analyzeMenuText({ menuText: menu.map((item) => item.originalName).join("\n"), env })).items.length, 40);
    assert.ok(calls[0].body.max_completion_tokens >= 10_000, "Image OCR still has a small single-response budget");
    assert.ok(calls[1].body.max_completion_tokens >= 6_000, "Long text menus still have a small single-response budget");
    assert.ok(calls[1].body.max_completion_tokens <= 12_000, "Text output budget has no upper bound");
  });
});

check("A length-limited response fails clearly even when its JSON parses", async () => {
  await withFetch([completion(undefined, { finish_reason: "length" })], async (calls) => {
    assertFailure(await imageAnalysis(), "AI_OUTPUT_TRUNCATED", 502);
    assert.equal(calls.length, 1);
  });
});

check("Malformed model JSON fails clearly", async () => {
  await withFetch([completion(undefined, { message: { content: '{"items":[' } })], async (calls) => {
    assertFailure(await imageAnalysis(), "AI_INVALID_RESPONSE", 502);
    assert.equal(calls.length, 1);
  });
});

check("Invalid upstream HTTP JSON fails clearly", async () => {
  await withFetch([new Response("not-json", { status: 200 })], async (calls) => {
    assertFailure(await imageAnalysis(), "AI_INVALID_RESPONSE", 502);
    assert.equal(calls.length, 1);
  });
});

check("Model refusal returns its own safe error", async () => {
  await withFetch([completion(undefined, { message: { content: null, refusal: `Private upstream refusal: ${fakeKey}` } })], async (calls) => {
    assertFailure(await imageAnalysis(), "AI_RESPONSE_REFUSED", 422);
    assert.equal(calls.length, 1);
  });
});

check("Content filtering returns a refusal error", async () => {
  await withFetch([completion(undefined, { finish_reason: "content_filter" })], async (calls) => {
    assertFailure(await imageAnalysis(), "AI_RESPONSE_REFUSED", 422);
    assert.equal(calls.length, 1);
  });
});

for (const quotaCode of ["insufficient_quota", "billing_hard_limit_reached"]) {
  check(`Quota error ${quotaCode} is not retried or exposed`, async () => {
    await withFetch([upstreamError(429, quotaCode)], async (calls) => {
      assertFailure(await imageAnalysis(), "AI_QUOTA_EXCEEDED", 503);
      assert.equal(calls.length, 1);
    });
  });
}

for (const [status, providerCode, expectedCode, expectedStatus] of [
  [401, "invalid_api_key", "AI_AUTH_ERROR", 503],
  [404, "model_not_found", "AI_MODEL_UNAVAILABLE", 503],
  [400, "invalid_request_error", "AI_INVALID_REQUEST", 502],
]) {
  check(`HTTP ${status} classifies ${expectedCode} without retry`, async () => {
    await withFetch([upstreamError(status, providerCode, "invalid_request_error")], async (calls) => {
      assertFailure(await imageAnalysis(), expectedCode, expectedStatus);
      assert.equal(calls.length, 1);
    });
  });
}

for (const status of [429, 500]) {
  check(`Transient HTTP ${status} retries once and recovers`, async () => {
    await withFetch([upstreamError(status, status === 429 ? "rate_limit_exceeded" : "server_error"), completion()], async (calls) => {
      const result = await imageAnalysis();
      assert.equal(result.ok, true);
      assert.equal(result.items[0].matchedDishId, "pad-thai");
      assert.equal(calls.length, 2);
    });
  });

  check(`Repeated HTTP ${status} stops after two attempts`, async () => {
    const providerCode = status === 429 ? "rate_limit_exceeded" : "server_error";
    await withFetch([upstreamError(status, providerCode), upstreamError(status, providerCode)], async (calls) => {
      assertFailure(await imageAnalysis(), status === 429 ? "AI_RATE_LIMITED" : "AI_SERVICE_UNAVAILABLE", status === 429 ? 429 : 503);
      assert.equal(calls.length, 2);
    });
  });
}

check("Long provider retry delays return promptly instead of waiting", async () => {
  const response = upstreamError(429, "rate_limit_exceeded");
  response.headers.set("Retry-After", "120");
  await withFetch([response], async (calls) => {
    assertFailure(await imageAnalysis(), "AI_RATE_LIMITED", 429);
    assert.equal(calls.length, 1);
  });
});

check("Transient transport failure retries once and recovers", async () => {
  await withFetch([() => { throw new TypeError(`Private connection failure ${fakeKey}`); }, completion()], async (calls) => {
    const result = await imageAnalysis();
    assert.equal(result.ok, true);
    assert.equal(calls.length, 2);
  });
});

check("Numeric DOMException network codes retry without leaking a TypeError", async () => {
  await withFetch([() => { throw new DOMException(`Private network failure ${fakeKey}`, "NetworkError"); }, completion()], async (calls) => {
    const result = await imageAnalysis();
    assert.equal(result.ok, true);
    assert.equal(result.items[0].matchedDishId, "pad-thai");
    assert.equal(calls.length, 2);
    assert.ok(!JSON.stringify(result).includes("startsWith"));
    assert.ok(!JSON.stringify(result).includes(fakeKey));
  });
});

check("Fetch timeout is not retried", async () => {
  await withFetch([() => { throw new DOMException("Timeout", "AbortError"); }], async (calls) => {
    assertFailure(await imageAnalysis(), "AI_REQUEST_TIMEOUT", 504);
    assert.equal(calls.length, 1);
  });
});

check("Response-body timeout is classified and not retried", async () => {
  await withFetch([{
    ok: true,
    status: 200,
    headers: new Headers(),
    text: async () => { throw new DOMException("Body timeout", "AbortError"); },
    json: async () => { throw new DOMException("Body timeout", "AbortError"); },
  }], async (calls) => {
    assertFailure(await imageAnalysis(), "AI_REQUEST_TIMEOUT", 504);
    assert.equal(calls.length, 1);
  });
});

check("The request deadline remains active while reading its response body", async () => {
  const originalSetTimeout = globalThis.setTimeout;
  // Shorten only long request deadlines. A separate guard lets the old bug fail promptly.
  globalThis.setTimeout = (callback, delay, ...args) => originalSetTimeout(callback, delay >= 10_000 ? 10 : delay, ...args);
  try {
    await withFetch([(_url, options) => {
      const readBody = () => new Promise((resolve, reject) => {
        const guard = originalSetTimeout(() => resolve(JSON.stringify({ choices: [{
          finish_reason: "stop",
          message: { content: JSON.stringify({ menuText: "Pad Thai", items: [extractedItem(1, "Pad Thai")] }) },
        }] })), 100);
        options.signal.addEventListener("abort", () => {
          clearTimeout(guard);
          reject(new DOMException("Response-body deadline", "AbortError"));
        }, { once: true });
      });
      return { ok: true, status: 200, headers: new Headers(), text: readBody, json: async () => JSON.parse(await readBody()) };
    }], async (calls) => {
      assertFailure(await imageAnalysis(), "AI_REQUEST_TIMEOUT", 504);
      assert.equal(calls.length, 1);
    });
  } finally {
    globalThis.setTimeout = originalSetTimeout;
  }
});

check("Pasted text retains local aliases and order when the account has no quota", async () => {
  await withFetch([upstreamError(429, "insufficient_quota")], async (calls) => {
    const result = await analyzeMenuText({ menuText: "Nasi goreng\nPad Thai\nMeteor chef surprise", env });
    assert.equal(result.ok, true);
    assert.equal(result.extractionSource, "local-fallback");
    assert.deepEqual(result.items.map((item) => item.originalName), ["Nasi goreng", "Pad Thai", "Meteor chef surprise"]);
    assert.deepEqual(result.items.map((item) => item.matchedDishId), ["nasi-goreng", "pad-thai", null]);
    assert.equal(result.items[2].card.verified, false);
    assert.equal(calls.length, 1);
  });
});

check("Oversized upload fails before reading the file or calling OpenAI", async () => {
  await withFetch([], async (calls) => {
    assertFailure(await imageAnalysis({ image: {
      type: "image/jpeg",
      size: MAX_MENU_IMAGE_BYTES + 1,
      arrayBuffer: async () => { throw new Error("Oversized image must not be read"); },
    } }), "IMAGE_TOO_LARGE", 413);
    assert.equal(calls.length, 0);
  });
});

check("Unsupported upload fails before calling OpenAI", async () => {
  await withFetch([], async (calls) => {
    assertFailure(await imageAnalysis({ image: new Blob(["fake-heic"], { type: "image/heic" }) }), "UNSUPPORTED_IMAGE_TYPE", 415);
    assert.equal(calls.length, 0);
  });
});

check("Missing upload fails before calling OpenAI", async () => {
  await withFetch([], async (calls) => {
    assertFailure(await imageAnalysis({ image: undefined }), "IMAGE_REQUIRED", 400);
    assert.equal(calls.length, 0);
  });
});

check("Missing backend key returns configuration error without an external call", async () => {
  await withFetch([], async (calls) => {
    assertFailure(await imageAnalysis({ env: {} }), "IMAGE_AI_NOT_CONFIGURED", 503);
    assert.equal(calls.length, 0);
  });
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
  console.error("\nMenu AI regressions:");
  for (const failure of failures) console.error(`- ${failure.name}: ${failure.message}`);
  process.exitCode = 1;
}
