export const UNMATCHED_DISH_EVENT_PREFIX = "dishkai:unmatched-dishes:v1:event:";
export const UNMATCHED_DISH_AGGREGATE_KEY = "dishkai:unmatched-dishes:v1:aggregate";

const MAX_EXAMPLES = 5;
const MAX_ITEMS = 2000;
const MAX_EVENT_ITEMS = 80;
const MAX_EVENT_READS = 2000;

export function collectUnmatchedDishEntries(result, now = new Date().toISOString()) {
  const missingMetadataItems = [
    ...(result?.unmatchedItems || []),
    ...(result?.aiGeneratedItems || []),
  ];
  const sourceItems = missingMetadataItems.length
    ? missingMetadataItems
    : (result?.items || []).filter((item) => ["unmatched", "ai-generated"].includes(item?.matchStatus));

  return sourceItems
    .filter((item) => item?.originalName || item?.cleanName || item?.canonicalCandidate)
    .map((item) => {
      const name = cleanText(item.cleanName || item.originalName || item.canonicalCandidate, 160);
      const canonicalCandidate = cleanText(item.canonicalCandidate, 160);
      const id = backlogKey(canonicalCandidate || name);
      if (!id) return null;

      return {
        id,
        name,
        canonicalCandidate,
        possibleCategory: cleanText(item.possibleCategory, 80),
        detectedLanguage: item.detectedLanguage && item.detectedLanguage !== "unknown"
          ? cleanText(item.detectedLanguage, 32)
          : "",
        matchStatus: cleanText(item.matchStatus, 32) || "unmatched",
        firstSeenAt: now,
        lastSeenAt: now,
        seenCount: 1,
        examples: cleanText(item.originalName || name, 180) ? [cleanText(item.originalName || name, 180)] : [],
      };
    })
    .filter(Boolean)
    .slice(0, MAX_EVENT_ITEMS);
}

export async function recordUnmatchedDishes({ result, env, sourceType = "unknown" } = {}) {
  const now = new Date().toISOString();
  const entries = collectUnmatchedDishEntries(result, now);
  if (!entries.length) return { ok: true, configured: true, stored: false, count: 0 };

  const store = unmatchedDishStore(env);
  if (!store) {
    return { ok: false, configured: false, stored: false, count: entries.length, error: "UNMATCHED_DISH_STORE_NOT_CONFIGURED" };
  }

  try {
    if (typeof store.list === "function") {
      const key = `${UNMATCHED_DISH_EVENT_PREFIX}${now}:${randomId()}`;
      await store.put(key, JSON.stringify({
        version: 1,
        createdAt: now,
        sourceType,
        sourceLanguage: cleanText(result?.sourceLanguage, 32),
        targetLanguage: cleanText(result?.targetLanguage, 32),
        extractionSource: cleanText(result?.extractionSource, 48),
        model: cleanText(result?.model, 80),
        aiFallbackSource: cleanText(result?.aiFallbackSource, 48),
        aiFallbackModel: cleanText(result?.aiFallbackModel, 80),
        items: entries,
      }));
      return { ok: true, configured: true, stored: true, count: entries.length, storage: "kv-events" };
    }

    const current = await readAggregate(store);
    const nextItems = mergeUnmatchedDishEntries(current.items, entries);
    await store.put(UNMATCHED_DISH_AGGREGATE_KEY, JSON.stringify({
      version: 1,
      updatedAt: now,
      items: nextItems,
    }));
    return { ok: true, configured: true, stored: true, count: entries.length, storage: "aggregate" };
  } catch (error) {
    console.error("DishKAI unmatched dish cloud collection failed:", error);
    return { ok: false, configured: true, stored: false, count: entries.length, error: "UNMATCHED_DISH_STORE_FAILED" };
  }
}

export async function readUnmatchedDishBacklog(env) {
  const store = unmatchedDishStore(env);
  if (!store) return { ok: false, configured: false, storage: "none", items: [], eventCount: 0 };

  if (typeof store.list === "function") {
    const events = await readKvEvents(store);
    const items = mergeUnmatchedDishEntries([], events.flatMap((event) => event.items || []));
    return {
      ok: true,
      configured: true,
      storage: "kv-events",
      eventCount: events.length,
      items,
    };
  }

  const aggregate = await readAggregate(store);
  return {
    ok: true,
    configured: true,
    storage: "aggregate",
    eventCount: 0,
    items: aggregate.items,
  };
}

export async function clearUnmatchedDishBacklog(env) {
  const store = unmatchedDishStore(env);
  if (!store) return { ok: false, configured: false, deleted: 0 };

  if (typeof store.list === "function") {
    let deleted = 0;
    let cursor;
    do {
      const page = await store.list({ prefix: UNMATCHED_DISH_EVENT_PREFIX, cursor, limit: 1000 });
      await Promise.all((page.keys || []).map(async (key) => {
        await store.delete(key.name);
        deleted += 1;
      }));
      cursor = page.list_complete ? undefined : page.cursor;
    } while (cursor);
    return { ok: true, configured: true, deleted };
  }

  await store.delete?.(UNMATCHED_DISH_AGGREGATE_KEY);
  return { ok: true, configured: true, deleted: 1 };
}

export function mergeUnmatchedDishEntries(existingItems = [], newItems = []) {
  const byId = new Map();
  [...existingItems, ...newItems].forEach((item) => {
    const id = backlogKey(item?.id || item?.canonicalCandidate || item?.name);
    if (!id) return;

    const existing = byId.get(id);
    if (!existing) {
      byId.set(id, {
        id,
        name: cleanText(item.name || item.canonicalCandidate || id, 160),
        canonicalCandidate: cleanText(item.canonicalCandidate, 160),
        possibleCategory: cleanText(item.possibleCategory, 80),
        detectedLanguage: cleanText(item.detectedLanguage, 32),
        matchStatus: cleanText(item.matchStatus, 32) || "unmatched",
        firstSeenAt: cleanText(item.firstSeenAt, 40) || cleanText(item.lastSeenAt, 40) || new Date().toISOString(),
        lastSeenAt: cleanText(item.lastSeenAt, 40) || cleanText(item.firstSeenAt, 40) || new Date().toISOString(),
        seenCount: Number(item.seenCount || 1),
        examples: cleanExamples(item.examples),
      });
      return;
    }

    existing.lastSeenAt = latestDate(existing.lastSeenAt, item.lastSeenAt || item.firstSeenAt);
    existing.firstSeenAt = earliestDate(existing.firstSeenAt, item.firstSeenAt || item.lastSeenAt);
    existing.seenCount = Number(existing.seenCount || 0) + Number(item.seenCount || 1);
    existing.examples = cleanExamples([...(existing.examples || []), ...(item.examples || [])]);
    if (!existing.canonicalCandidate && item.canonicalCandidate) existing.canonicalCandidate = cleanText(item.canonicalCandidate, 160);
    if (!existing.possibleCategory && item.possibleCategory) existing.possibleCategory = cleanText(item.possibleCategory, 80);
    if (!existing.detectedLanguage && item.detectedLanguage) existing.detectedLanguage = cleanText(item.detectedLanguage, 32);
    if (item.matchStatus === "ai-generated") existing.matchStatus = "ai-generated";
  });

  return [...byId.values()]
    .sort((a, b) => String(b.lastSeenAt).localeCompare(String(a.lastSeenAt)))
    .slice(0, MAX_ITEMS);
}

function unmatchedDishStore(env) {
  const candidate = env?.DISHKAI_UNMATCHED_DISHES
    || env?.DISHKAI_UNMATCHED_DISH_BACKLOG
    || env?.UNMATCHED_DISH_BACKLOG;
  if (!candidate || typeof candidate.get !== "function" || typeof candidate.put !== "function") return null;
  return candidate;
}

async function readKvEvents(store) {
  const events = [];
  let cursor;
  do {
    const page = await store.list({ prefix: UNMATCHED_DISH_EVENT_PREFIX, cursor, limit: 1000 });
    for (const key of page.keys || []) {
      if (events.length >= MAX_EVENT_READS) break;
      const raw = await store.get(key.name);
      const parsed = parseJson(raw);
      if (parsed?.items?.length) events.push(parsed);
    }
    if (events.length >= MAX_EVENT_READS) break;
    cursor = page.list_complete ? undefined : page.cursor;
  } while (cursor);

  return events.sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
}

async function readAggregate(store) {
  const raw = await store.get(UNMATCHED_DISH_AGGREGATE_KEY);
  const parsed = parseJson(raw);
  if (Array.isArray(parsed)) return { items: mergeUnmatchedDishEntries([], parsed) };
  return { items: mergeUnmatchedDishEntries([], parsed?.items || []) };
}

function parseJson(raw) {
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function cleanText(value, maxLength = 400) {
  return String(value || "").trim().slice(0, maxLength);
}

function cleanExamples(value) {
  return [...new Set((Array.isArray(value) ? value : [value]).map((item) => cleanText(item, 180)).filter(Boolean))]
    .slice(0, MAX_EXAMPLES);
}

function backlogKey(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFKC")
    .replace(/[()[\]{}.,;:!?'"]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function latestDate(left, right) {
  return String(right || "").localeCompare(String(left || "")) > 0 ? right : left;
}

function earliestDate(left, right) {
  if (!left) return right;
  if (!right) return left;
  return String(right).localeCompare(String(left)) < 0 ? right : left;
}

function randomId() {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
  return Math.random().toString(36).slice(2);
}
