import assert from "node:assert/strict";
import {
  collectUnmatchedDishEntries,
  readUnmatchedDishBacklog,
  recordUnmatchedDishes,
  UNMATCHED_DISH_AGGREGATE_KEY,
  UNMATCHED_DISH_RETENTION_SECONDS,
} from "../functions/_shared/unmatched-dishes.js";
import { onRequestPost as analyzeText } from "../functions/api/analyze-menu-text.js";
import { onRequestPost as analyzeLegacyText } from "../functions/api/analyze-menu.js";
import { onRequestPost as analyzeImage } from "../functions/api/analyze-menu-image.js";
import { analyzeMenuText } from "../functions/_shared/menu-analysis.js";
import { createSessionCookie } from "../functions/_shared/security.js";

// Exercise the actual menu collectors and endpoints with synthetic data only.
// No credentials, live AI calls, file storage, or new dependencies are needed.
const cases = [];
function check(name, run) { cases.push({ name, run }); }
const authEnv = { DISHKAI_PRIVATE_ACCESS_CODE: "synthetic-access-code", DISHKAI_SESSION_SECRET: "synthetic-session-secret" };
const authCookie = (await createSessionCookie(authEnv)).split(";")[0];

function unknownItem(name, originalName = name) {
  return {
    orderIndex: 1,
    originalName,
    cleanName: name,
    canonicalCandidate: name,
    detectedLanguage: "en",
    possibleCategory: "dish",
    matchStatus: "unmatched",
  };
}

check("menu cards preserve order and distinguish knowledge, guidance, missing content and illustrations", async () => {
  for (const targetLanguage of ["en", "zh", "nl"]) {
    const result = await analyzeMenuText({
      menuText: "Pad Thai\nFries\nZorble Fantasia\nChef Special Pasta", targetLanguage, env: {},
    });
    assert.deepEqual(result.items.map((item) => item.originalName), ["Pad Thai", "Fries", "Zorble Fantasia", "Chef Special Pasta"]);
    assert.deepEqual(result.items.map((item) => item.card.contentOrigin), ["stored-knowledge", "stored-guidance", "missing-metadata", "stored-guidance"]);
    assert.deepEqual(result.items.map((item) => item.card.imageOrigin), ["ai-generated", "none", "none", "ai-generated"]);
    assert.equal(result.transparency.marking, "declared-provenance-only");
    assert.equal(result.transparency.generatedTextCount, 0);
    for (const { card } of result.items) {
      assert.equal(card.restaurantConfirmed, false);
      assert.equal(card.allergenStatus, "not-restaurant-confirmed");
      assert.ok(card.compositionDisclaimer);
    }
    const label = result.items[0].card.iconTags.find((tag) => tag.id === "safe-choice");
    assert.ok(label);
    assert.notEqual(label.label, { en: "Safe", zh: "安全", nl: "Veilig" }[targetLanguage]);
    assert.equal(result.items[2].card.aiImageLabel, undefined, "Unknown text without an image must not claim to be an AI preview.");
  }
});

check("live generated estimates stay unverified and declare text rather than image generation", async () => {
  const result = await analyzeMenuText({
    menuText: "Zorble Fantasia", targetLanguage: "en",
    env: {
      DISHKAI_ENABLE_AI_FALLBACK: "true",
      AI: { run: async (_model, options) => ({ response: JSON.stringify(options.prompt.includes("temporary dish estimate step")
        ? { cards: [{ orderIndex: 1, familiarName: "Zorble Fantasia", shortDescription: "A synthetic estimate." }] }
        : { items: [unknownItem("Zorble Fantasia")] }) }) },
    },
  });
  assert.equal(result.aiGeneratedItems.length, 1);
  const card = result.aiGeneratedItems[0].card;
  assert.equal(card.contentOrigin, "ai-generated");
  assert.equal(card.imageOrigin, "none");
  assert.equal(card.verified, false);
  assert.equal(card.metadataSource, "ai-fallback");
  assert.equal(card.aiImageLabel, undefined);
  assert.equal(result.transparency.generatedTextCount, 1);
  assert.equal(result.transparency.estimates.source, "workers-ai");
});

function fakeStore() {
  const data = new Map();
  let clock = 0;
  const store = {
    writes: [],
    async get(key) {
      const entry = data.get(key);
      return entry && entry.expiresAt > clock ? entry.value : null;
    },
    async put(key, value, options = {}) {
      store.writes.push({ key, value, options });
      data.set(key, { value, expiresAt: clock + options.expirationTtl * 1000 });
    },
    advance(milliseconds) { clock += milliseconds; },
  };
  store.list = async () => ({
    keys: [...data].filter(([, entry]) => entry.expiresAt > clock).map(([name]) => ({ name })),
    list_complete: true,
  });
  return store;
}

async function withFetch(mock, run) {
  const previous = globalThis.fetch;
  globalThis.fetch = mock;
  try { return await run(); } finally { globalThis.fetch = previous; }
}

check("contributed examples retain only cleaned dish names", () => {
  const entries = collectUnmatchedDishEntries({
    items: [unknownItem("Zorble Fantasia", "Zorble Fantasia — an original menu note")],
  });
  assert.equal(entries.length, 1);
  assert.deepEqual(entries[0].examples, ["Zorble Fantasia"]);
  assert.equal(entries[0].name, "Zorble Fantasia");
  assert.equal(JSON.stringify(entries).includes("an original menu note"), false);
  assert.equal(collectUnmatchedDishEntries({ items: [{ originalName: "Unprocessed menu note", matchStatus: "unmatched" }] }).length, 0);
});

check("obvious contact information and addresses are excluded from contributions", () => {
  const sensitive = [
    "order@example.com", "https://example.com/menu", "www.example.org",
    "+31 20 123 4567", "Tel:12345", "123 Main Street", "Keizersgracht 123",
    "1234 AB", "地址：北京", "Address: 123 Avenue",
  ];
  for (const text of sensitive) {
    assert.equal(collectUnmatchedDishEntries({ items: [unknownItem(text)] }).length, 0, text);
  }
  assert.equal(collectUnmatchedDishEntries({
    items: [unknownItem("Safe Curry", "Safe Curry — contact order@example.com")],
  }).length, 0);
  assert.equal(collectUnmatchedDishEntries({
    items: [{ ...unknownItem("Safe Curry"), possibleCategory: "https://example.com" }],
  }).length, 0);
  assert.equal(collectUnmatchedDishEntries({ items: [unknownItem("麻婆豆腐")] }).length, 1);
});

check("new event storage expires after 90 days", async () => {
  const store = fakeStore();
  const result = await recordUnmatchedDishes({
    result: { items: [unknownItem("Zorble Fantasia")] },
    env: { DISHKAI_UNMATCHED_DISHES: store },
    sourceType: "text",
  });
  assert.equal(result.stored, true);
  assert.equal(store.writes.length, 1);
  assert.equal(UNMATCHED_DISH_RETENTION_SECONDS, 90 * 24 * 60 * 60);
  const write = store.writes[0];
  assert.equal(write.options.expirationTtl, 90 * 24 * 60 * 60);
  assert.equal(JSON.parse(await store.get(write.key)).version, 1);
  store.advance(90 * 24 * 60 * 60 * 1000 - 1);
  assert.ok(await store.get(write.key));
  store.advance(1);
  assert.equal(await store.get(write.key), null);
});

check("aggregate-only stores reject new contributions and leave existing records untouched", async () => {
  const original = JSON.stringify({ version: 1, items: [{
    id: "legacy-example", name: "Legacy Example", examples: ["Legacy Example"], seenCount: 1,
    firstSeenAt: "2026-01-01T00:00:00Z", lastSeenAt: "2026-01-01T00:00:00Z",
  }] });
  const writes = [];
  const store = {
    get: async (key) => key === UNMATCHED_DISH_AGGREGATE_KEY ? original : null,
    put: async (...args) => writes.push(args),
  };
  const result = await recordUnmatchedDishes({
    result: { items: [unknownItem("Zorble Fantasia")] },
    env: { DISHKAI_UNMATCHED_DISHES: store },
  });
  assert.equal(result.configured, true);
  assert.equal(result.stored, false);
  assert.equal(result.error, "UNMATCHED_DISH_EVENT_STORE_REQUIRED");
  assert.equal(writes.length, 0);
  assert.equal(await store.get(UNMATCHED_DISH_AGGREGATE_KEY), original);
  const backlog = await readUnmatchedDishBacklog({ DISHKAI_UNMATCHED_DISHES: store });
  assert.equal(backlog.storage, "aggregate");
  assert.equal(backlog.items.length, 1);
  assert.equal(backlog.items[0].name, "Legacy Example");
});

check("menu analysis still succeeds when contributions cannot be stored with independent expiry", async () => {
  const pending = [];
  let writes = 0;
  const response = await analyzeText({
    request: new Request("https://dishkai.test/api/menu", {
      method: "POST",
      headers: { "Content-Type": "application/json", Cookie: authCookie },
      body: JSON.stringify({ menuText: "Zorble Fantasia", contributeUnknownDishes: true }),
    }),
    env: { ...authEnv, DISHKAI_UNMATCHED_DISHES: {
      get: async () => null,
      put: async () => { writes += 1; },
    } },
    waitUntil: (promise) => pending.push(promise),
  });
  assert.equal(response.status, 200);
  assert.equal((await response.json()).ok, true);
  const outcomes = await Promise.all(pending);
  assert.equal(outcomes[0].error, "UNMATCHED_DISH_EVENT_STORE_REQUIRED");
  assert.equal(writes, 0);
});

check("rejected contribution content never reaches the storage binding", async () => {
  const store = fakeStore();
  const result = await recordUnmatchedDishes({
    result: { items: [unknownItem("order@example.com")] },
    env: { DISHKAI_UNMATCHED_DISHES: store },
  });
  assert.equal(result.stored, false);
  assert.equal(store.writes.length, 0);
});

check("storage failures do not log raw provider messages or contributed content", async () => {
  const messages = [];
  const previous = console.error;
  console.error = (...args) => messages.push(args);
  try {
    const result = await recordUnmatchedDishes({
      result: { items: [unknownItem("Zorble Fantasia")] },
      env: { DISHKAI_UNMATCHED_DISHES: {
        get: async () => null,
        list: async () => ({ keys: [], list_complete: true }),
        put: async () => { throw new Error("Synthetic private payload order@example.com"); },
      } },
    });
    assert.equal(result.error, "UNMATCHED_DISH_STORE_FAILED");
    assert.equal(JSON.stringify(messages).includes("order@example.com"), false);
    assert.equal(JSON.stringify(messages).includes("Zorble Fantasia"), false);
  } finally { console.error = previous; }
});

for (const [label, endpoint] of [["text", analyzeText], ["legacy text", analyzeLegacyText]]) {
  check(`${label} API requires an explicit boolean opt-in`, async () => {
    const store = fakeStore();
    await withFetch(() => { throw new Error("Network must not be used"); }, async () => {
      for (const flag of [undefined, false, "true", 1, true]) {
        const pending = [];
        const before = store.writes.length;
        const response = await endpoint({
          request: new Request("https://dishkai.test/api/menu", {
            method: "POST",
            headers: { "Content-Type": "application/json", Cookie: authCookie },
            body: JSON.stringify({ menuText: "Zorble Fantasia", contributeUnknownDishes: flag }),
          }),
          env: { ...authEnv, DISHKAI_UNMATCHED_DISHES: store },
          waitUntil: (promise) => pending.push(promise),
        });
        assert.equal(response.status, 200);
        assert.equal((await response.json()).items.length, 1);
        assert.equal(pending.length, flag === true ? 1 : 0);
        await Promise.all(pending);
        assert.equal(store.writes.length - before, flag === true ? 1 : 0);
      }
    });
  });
}

check("photo API requires the exact multipart opt-in value", async () => {
  const store = fakeStore();
  let calls = 0;
  await withFetch(async () => {
    calls += 1;
    return new Response(JSON.stringify({ choices: [{
      finish_reason: "stop",
      message: { content: JSON.stringify({ menuText: "Zorble Fantasia", items: [unknownItem("Zorble Fantasia")] }) },
    }] }), { status: 200 });
  }, async () => {
    for (const flag of [undefined, "false", "TRUE", "1", "true"]) {
      const form = new FormData();
      form.append("image", new Blob(["synthetic image"], { type: "image/jpeg" }), "menu.jpg");
      if (flag !== undefined) form.append("contributeUnknownDishes", flag);
      const pending = [];
      const before = store.writes.length;
      const response = await analyzeImage({
        request: new Request("https://dishkai.test/api/photo", { method: "POST", body: form, headers: { Cookie: authCookie } }),
        env: { ...authEnv, DISHKAI_AI_API_KEY: "fake-not-a-real-key", DISHKAI_UNMATCHED_DISHES: store },
        waitUntil: (promise) => pending.push(promise),
      });
      assert.equal(response.status, 200);
      assert.equal((await response.json()).items.length, 1);
      assert.equal(pending.length, flag === "true" ? 1 : 0);
      await Promise.all(pending);
      assert.equal(store.writes.length - before, flag === "true" ? 1 : 0);
    }
  });
  assert.equal(calls, 5);
});

for (const { name, run } of cases) {
  await run();
  console.log(`PASS ${name}`);
}
console.log(`AI transparency checks passed (${cases.length} cases, no network).`);
