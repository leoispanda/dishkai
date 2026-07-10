import { metadata } from "../../data/internal/index.js";
import { universalMenuItems } from "./universal-menu-items.js";

export const TEXT_MODEL = "@cf/meta/llama-3.1-8b-instruct";
export const DEFAULT_OPENAI_MODEL = "gpt-5.4-mini";

const MAX_MENU_TEXT_LENGTH = 12000;
export const MAX_MENU_IMAGE_BYTES = 8 * 1024 * 1024;
export const MAX_MENU_IMAGE_REQUEST_BYTES = MAX_MENU_IMAGE_BYTES + 32 * 1024;
const AI_FALLBACK_MAX_ITEMS = 30;
const OPENAI_REQUEST_TIMEOUT_MS = 45_000;
const OPENAI_CHAT_COMPLETIONS_URL = "https://api.openai.com/v1/chat/completions";
const SUPPORTED_IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
const CHEF_SPECIAL_IMAGE_PATH = "/assets/dishes/fallback/chef-special-pasta.webp";
const CHEF_SPECIAL_THUMB_PATH = "/assets/dishes/fallback/chef-special-pasta-thumb.webp";
const MENU_EXTRACTION_RESPONSE_FORMAT = {
  type: "json_schema",
  json_schema: {
    name: "dishkai_menu_extraction",
    strict: true,
    schema: {
      type: "object",
      additionalProperties: false,
      properties: {
        menuText: {
          type: "string",
          description: "One visible dish/menu line per line, preserving menu order when available.",
        },
        items: {
          type: "array",
          items: {
            type: "object",
            additionalProperties: false,
            properties: {
              orderIndex: { type: "integer" },
              originalName: { type: "string" },
              cleanName: { type: "string" },
              canonicalCandidate: {
                type: "string",
                description: "Best short real dish name to match against DishKAI metadata, without toppings or sauces.",
              },
              matchCandidates: {
                type: "array",
                items: { type: "string" },
                description: "Short dish-name candidates from most specific to broadest, excluding pure ingredient lists.",
              },
              detectedLanguage: { type: "string" },
              possibleCategory: { type: "string" },
              notes: { type: "string" },
            },
            required: [
              "orderIndex",
              "originalName",
              "cleanName",
              "canonicalCandidate",
              "matchCandidates",
              "detectedLanguage",
              "possibleCategory",
              "notes",
            ],
          },
        },
      },
      required: ["menuText", "items"],
    },
  },
};
const AI_FALLBACK_RESPONSE_FORMAT = {
  type: "json_schema",
  json_schema: {
    name: "dishkai_ai_fallback_cards",
    strict: true,
    schema: {
      type: "object",
      additionalProperties: false,
      properties: {
        cards: {
          type: "array",
          items: {
            type: "object",
            additionalProperties: false,
            properties: {
              orderIndex: { type: "integer" },
              familiarName: { type: "string" },
              cuisineName: { type: "string" },
              orderVerdict: { type: "string" },
              shortDescription: { type: "string" },
              cooking: {
                type: "object",
                additionalProperties: false,
                properties: {
                  methods: { type: "array", items: { type: "string" } },
                  profile: { type: "string" },
                },
                required: ["methods", "profile"],
              },
              composition: {
                type: "array",
                items: {
                  type: "object",
                  additionalProperties: false,
                  properties: {
                    name: { type: "string" },
                    estimatedPercent: { type: "integer" },
                    role: { type: "string" },
                    optional: { type: "boolean" },
                  },
                  required: ["name", "estimatedPercent", "role", "optional"],
                },
              },
              basicTaste: { type: "array", items: { type: "string" } },
              distinctiveFlavorSources: { type: "array", items: { type: "string" } },
              texture: { type: "array", items: { type: "string" } },
              watchOuts: { type: "array", items: { type: "string" } },
              visualDisclaimer: { type: "string" },
            },
            required: [
              "orderIndex", "familiarName", "cuisineName", "orderVerdict", "shortDescription",
              "cooking", "composition", "basicTaste", "distinctiveFlavorSources", "texture",
              "watchOuts", "visualDisclaimer",
            ],
          },
        },
      },
      required: ["cards"],
    },
  },
};

export const iconTags = {
  "signature-dish": { icon: "⭐", en: "Signature", zh: "代表菜", nl: "Signatuur" },
  "classic-dish": { icon: "🏛️", en: "Classic", zh: "经典", nl: "Klassieker" },
  "street-food": { icon: "🛵", en: "Street food", zh: "街头小吃", nl: "Streetfood" },
  "regional-dish": { icon: "📍", en: "Regional", zh: "地区特色", nl: "Regionaal" },
  "first-timer-friendly": { icon: "✅", en: "First-timer friendly", zh: "新手友好", nl: "Geschikt voor beginners" },
  "internationally-known": { icon: "🌍", en: "Well-known", zh: "知名度高", nl: "Bekend" },
  "safe-choice": { icon: "✅", en: "Safe", zh: "安全", nl: "Veilig" },
  "chef-special": { icon: "★", en: "Chef special", zh: "主厨特别", nl: "Chefsspecial" },
  "ask-staff": { icon: "?", en: "Ask the staff", zh: "询问服务员", nl: "Vraag personeel" },
  noodle: { icon: "🍜", en: "Noodles", zh: "面/粉", nl: "Noedels" },
  pasta: { icon: "🍝", en: "Pasta", zh: "意面", nl: "Pasta" },
  pizza: { icon: "🍕", en: "Pizza", zh: "披萨", nl: "Pizza" },
  rice: { icon: "🍚", en: "Rice", zh: "米饭", nl: "Rijst" },
  soup: { icon: "🥣", en: "Soup", zh: "汤", nl: "Soep" },
  curry: { icon: "🥘", en: "Curry", zh: "咖喱", nl: "Curry" },
  dessert: { icon: "🍮", en: "Dessert", zh: "甜点", nl: "Dessert" },
  salad: { icon: "🥗", en: "Salad", zh: "沙拉", nl: "Salade" },
  starter: { icon: "🍅", en: "Starter", zh: "前菜", nl: "Voorgerecht" },
  bread: { icon: "🥖", en: "Bread", zh: "面包", nl: "Brood" },
  meat: { icon: "🍖", en: "Meat", zh: "肉类", nl: "Vlees" },
  main: { icon: "🍽️", en: "Main", zh: "主菜", nl: "Hoofdgerecht" },
  seafood: { icon: "🦪", en: "Seafood", zh: "海鲜", nl: "Zeevruchten" },
  dumpling: { icon: "🥟", en: "Dumpling", zh: "点心/饺子", nl: "Dumpling" },
  "fried-snack": { icon: "🍤", en: "Fried snack", zh: "炸物小吃", nl: "Gefrituurde snack" },
  "vegetable-main": { icon: "🥬", en: "Vegetable main", zh: "蔬菜主菜", nl: "Groentehoofdgerecht" },
  "raw-seafood": { icon: "🐟", en: "Raw seafood", zh: "生食海鲜", nl: "Rauwe zeevruchten" },
  "contains-peanut": { icon: "🥜", en: "Peanut", zh: "花生", nl: "Pinda" },
  "contains-egg": { icon: "🥚", en: "Egg", zh: "鸡蛋", nl: "Ei" },
  "contains-shellfish": { icon: "🦐", en: "Shellfish", zh: "甲壳类", nl: "Schaaldieren" },
  "contains-dairy": { icon: "🥛", en: "Dairy", zh: "乳制品", nl: "Zuivel" },
  "contains-gluten": { icon: "🌾", en: "Gluten", zh: "麸质", nl: "Gluten" },
  "contains-soy": { icon: "🫘", en: "Soy", zh: "大豆", nl: "Soja" },
  "contains-fish": { icon: "🐟", en: "Fish", zh: "鱼类", nl: "Vis" },
  "contains-sesame": { icon: "⚪", en: "Sesame", zh: "芝麻", nl: "Sesam" },
  "contains-pork": { icon: "🥓", en: "Pork", zh: "猪肉", nl: "Varkensvlees" },
  "contains-raw-fish": { icon: "🐟", en: "Raw fish", zh: "生鱼", nl: "Rauwe vis" },
  "contains-tree-nut": { icon: "◦", en: "Tree nut", zh: "坚果", nl: "Noten" },
  spicy: { icon: "🌶️", en: "Spicy", zh: "辣", nl: "Pittig" },
  tangy: { icon: "🍋", en: "Tangy", zh: "酸香", nl: "Friszuur" },
  sweet: { icon: "🍯", en: "Sweet", zh: "甜", nl: "Zoet" },
  creamy: { icon: "🧈", en: "Creamy", zh: "奶香厚重", nl: "Romig" },
};

function jsonSafeText(value, maxLength = 400) {
  return String(value || "").trim().slice(0, maxLength);
}

export function normalizeName(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFKC")
    .replace(/[()[\]{}.,;:!?'"]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function localize(value, language = "en") {
  if (!value || typeof value !== "object") return value || "";
  return value[language] || value.en || value.zh || value.nl || "";
}

function byId(items) {
  return new Map(items.map((item) => [item.id, item]));
}

const ingredientById = byId(metadata.ingredients);
const seasoningById = byId(metadata.seasonings);
const cuisineById = byId(metadata.cuisines);
const cookingMethodById = byId(metadata.cookingMethods);
const riskById = byId(metadata.riskFlags);
const dishById = byId(metadata.dishes);

const aliasIndex = metadata.dishAliases.map((alias) => ({
  ...alias,
  normalizedAlias: normalizeName(alias.alias),
}));
const partialAliasIndex = aliasIndex
  .filter((alias) => alias.normalizedAlias.length >= 6)
  .sort((left, right) => (
    right.normalizedAlias.length - left.normalizedAlias.length
    || Number(right.confidence || 0) - Number(left.confidence || 0)
  ));
const universalAliasIndex = universalMenuItems.flatMap((item) =>
  item.aliases.map((alias) => ({
    item,
    normalizedAlias: normalizeName(alias),
  })),
);

function splitMenuText(menuText) {
  return String(menuText || "")
    .slice(0, MAX_MENU_TEXT_LENGTH)
    .split(/\r?\n/)
    .map((line) => line.replace(/^\s*[-*•\d.)]+\s*/, "").trim())
    .filter(Boolean)
    .map((line, index) => ({
      orderIndex: index + 1,
      originalName: line,
      cleanName: line,
      canonicalCandidate: "",
      matchCandidates: [],
      detectedLanguage: "unknown",
      possibleCategory: "",
      notes: "",
    }));
}

function buildExtractionPrompt(menuText, sourceLanguage, targetLanguage) {
  return `You are DishKAI's menu item extraction step.
Return valid JSON only. No markdown.
Preserve the original menu order. Do not invent dishes. Do not add house-special claims unless the text says so.
Extract likely dish names from this menu text.
This is for restaurant ordering, not recipes or encyclopedia content.
Rules:
- Output one item per orderable dish, drink, dessert, bread, brunch item, or side dish.
- Keep menu sections in the same visible order, but do not output section headers as dishes.
- Remove prices, currency symbols, calorie counts, item numbers, and decorative labels from cleanName.
- Keep useful dish modifiers in cleanName, such as "smoked salmon bagel", "ham and cheese omelette", or "spicy tuna roll".
- Add canonicalCandidate as the shortest real dish name a diner would recognize or a database should match, for example "Caprese", "Tuna tataki", "Caesar salad", "Goat cheese salad", or "Garlic scampi".
- Add matchCandidates from most specific to broadest. For "Caprese | pomodori | buffalo mozzarella | pesto", use ["Caprese", "Caprese salad"].
- If a line contains a dish name plus a description, originalName should be the visible dish name or shortest dish line, and notes can summarize the description.
- Do not output sauce-choice or option-only lines as dishes, such as "Choice pesto mayonnaise or chili mayonnaise".
- For European café/brunch menus, include items like scrambled eggs, omelette, shakshuka, french toast, eggs benedict, avocado toast, granola bowl, tosti, broodje gezond, croissant, and pain au chocolat.
Use this exact shape:
{
  "menuText": "one dish or menu line per line, preserving the source order",
  "items": [
    {
      "orderIndex": 1,
      "originalName": "Pad Thai",
      "cleanName": "Pad Thai",
      "canonicalCandidate": "Pad Thai",
      "matchCandidates": ["Pad Thai"],
      "detectedLanguage": "en",
      "possibleCategory": "noodle",
      "notes": ""
    }
  ]
}
sourceLanguage: ${sourceLanguage}
targetLanguage: ${targetLanguage}
menuText:
${menuText}`;
}

function openAiModel(env) {
  return String(env?.DISHKAI_AI_MODEL || env?.OPENAI_MODEL || DEFAULT_OPENAI_MODEL).trim() || DEFAULT_OPENAI_MODEL;
}

function openAiVisionModel(env) {
  return String(env?.DISHKAI_AI_VISION_MODEL || env?.DISHKAI_AI_MODEL || env?.OPENAI_MODEL || DEFAULT_OPENAI_MODEL).trim() || DEFAULT_OPENAI_MODEL;
}

function openAiImageDetail(env) {
  const detail = String(env?.DISHKAI_AI_IMAGE_DETAIL || "original").trim().toLowerCase();
  return ["low", "high", "original", "auto"].includes(detail) ? detail : "original";
}

function hasOpenAiApiKey(env) {
  return Boolean(String(env?.DISHKAI_AI_API_KEY || "").trim());
}

async function runOpenAiJson(prompt, env, { maxTokens = 1200, temperature = 0.1, responseFormat } = {}) {
  const response = await fetchWithTimeout(OPENAI_CHAT_COMPLETIONS_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.DISHKAI_AI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: openAiModel(env),
      messages: [
        { role: "system", content: "Return valid JSON only. Do not include markdown." },
        { role: "user", content: prompt },
      ],
      response_format: responseFormat || { type: "json_object" },
      max_completion_tokens: maxTokens,
      temperature,
    }),
  }, OPENAI_REQUEST_TIMEOUT_MS);

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    throw new Error(`OpenAI request failed: ${response.status} ${errorText.slice(0, 220)}`);
  }

  return response.json();
}

async function runOpenAiVisionJson(prompt, imageDataUrl, env, { maxTokens = 1400, temperature = 0.1, responseFormat } = {}) {
  const response = await fetchWithTimeout(OPENAI_CHAT_COMPLETIONS_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.DISHKAI_AI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: openAiVisionModel(env),
      messages: [
        { role: "system", content: "Return valid JSON only. Do not include markdown." },
        {
          role: "user",
          content: [
            { type: "text", text: prompt },
            { type: "image_url", image_url: { url: imageDataUrl, detail: openAiImageDetail(env) } },
          ],
        },
      ],
      response_format: responseFormat || { type: "json_object" },
      max_completion_tokens: maxTokens,
      temperature,
    }),
  }, OPENAI_REQUEST_TIMEOUT_MS);

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    throw new Error(`OpenAI vision request failed: ${response.status} ${errorText.slice(0, 220)}`);
  }

  return response.json();
}

function extractJsonObject(value) {
  const text = typeof value === "string"
    ? value
    : String(
      value?.choices?.[0]?.message?.content
        || value?.output_text
        || value?.response
        || value?.result
        || "",
    );
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) throw new Error("AI did not return JSON.");
  return JSON.parse(match[0]);
}

function cleanExtractedItems(value, fallbackItems) {
  const rawItems = Array.isArray(value?.items) && value.items.length ? value.items : fallbackItems;
  return rawItems
    .map((item, index) => {
      const originalName = jsonSafeText(item.originalName || item.cleanName || fallbackItems[index]?.originalName);
      const cleanName = jsonSafeText(item.cleanName || item.originalName || fallbackItems[index]?.cleanName);
      return {
        orderIndex: Number.isFinite(Number(item.orderIndex)) ? Number(item.orderIndex) : index + 1,
        originalName,
        cleanName,
        canonicalCandidate: jsonSafeText(item.canonicalCandidate || "", 120),
        matchCandidates: cleanMatchCandidates(item.matchCandidates),
        detectedLanguage: jsonSafeText(item.detectedLanguage || "unknown", 24),
        possibleCategory: jsonSafeText(item.possibleCategory || "", 60),
        notes: jsonSafeText(item.notes || "", 160),
      };
    })
    .filter((item) => item.originalName || item.cleanName)
    .filter((item) => !isOptionOnlyLine(item.cleanName || item.originalName))
    .sort((a, b) => a.orderIndex - b.orderIndex)
    .map((item, index) => ({ ...item, orderIndex: index + 1 }));
}

function cleanMatchCandidates(value) {
  if (!Array.isArray(value)) return [];
  return [...new Set(value.map((item) => jsonSafeText(item, 120)).filter(Boolean))].slice(0, 8);
}

function isOptionOnlyLine(value) {
  const normalized = normalizeName(value);
  if (!normalized) return false;
  if (!/\b(choice|choose|keuze|kies)\b/.test(normalized)) return false;
  return /\b(or|of|oder|ofwel)\b/.test(normalized)
    && /\b(mayonnaise|mayo|sauce|dressing|dip|vinaigrette|aioli)\b/.test(normalized);
}

async function extractItems(menuText, sourceLanguage, targetLanguage, env) {
  const fallbackItems = splitMenuText(menuText);
  if (!fallbackItems.length) return { items: fallbackItems, extractionSource: "local-fallback" };

  if (hasOpenAiApiKey(env)) {
    try {
      const aiResult = await runOpenAiJson(
        buildExtractionPrompt(menuText, sourceLanguage, targetLanguage),
        env,
        { maxTokens: 1200, temperature: 0.1, responseFormat: MENU_EXTRACTION_RESPONSE_FORMAT },
      );
      return {
        items: cleanExtractedItems(extractJsonObject(aiResult), fallbackItems),
        extractionSource: "openai",
        model: openAiModel(env),
      };
    } catch (error) {
      console.error("DishKAI OpenAI text extraction failed, trying next fallback:", error);
    }
  }

  if (!env?.AI) {
    return {
      items: cleanExtractedItems({ items: fallbackItems }, fallbackItems),
      extractionSource: "local-fallback",
    };
  }

  try {
    const aiResult = await env.AI.run(TEXT_MODEL, {
      prompt: buildExtractionPrompt(menuText, sourceLanguage, targetLanguage),
      max_tokens: 900,
      temperature: 0.1,
    });
    return {
      items: cleanExtractedItems(extractJsonObject(aiResult), fallbackItems),
      extractionSource: "workers-ai",
      model: TEXT_MODEL,
    };
  } catch (error) {
    console.error("DishKAI Workers AI text extraction failed, using local fallback:", error);
    return {
      items: cleanExtractedItems({ items: fallbackItems }, fallbackItems),
      extractionSource: "local-fallback",
    };
  }
}

function buildImageExtractionPrompt(sourceLanguage, targetLanguage) {
  return `You are DishKAI's menu photo OCR and item extraction step.
Return valid JSON only. No markdown.
Read the visible menu text from the image and extract likely dish names.
Preserve the visible menu order. Do not invent dishes. Do not add house-special claims unless the image says so.
Ignore decorative text, addresses, phone numbers, opening hours, allergen legends, and prices unless needed to distinguish a dish.
This image may be a café, brunch, bistro, tapas, bakery, hotel breakfast, or European restaurant menu.
Rules:
- First transcribe dish-like menu lines into menuText, one line per visible item, preserving order.
- Then create items from menuText. If menuText has readable dish lines, items must not be empty.
- Include orderable foods even when they are simple: scrambled eggs, omelette, shakshuka, french toast, eggs benedict, avocado toast, granola bowl, croissant, pain au chocolat, tosti, broodje gezond, quiche, cakes, salads, soups, sides, and desserts.
- Do not output section headers like "Breakfast", "Mains", "Desserts", "Drinks", or "Extras" as dishes.
- Remove prices, currency symbols, calories, and item numbers from cleanName.
- Keep useful modifiers in cleanName, such as protein, sauce, filling, or cooking style.
- Add canonicalCandidate as the shortest real dish name a diner would recognize or DishKAI should match.
- Add matchCandidates from most specific to broadest, excluding pure toppings and sauce-only choices.
- If a dish line wraps across two visual lines, combine it into one item.
- If confidence is low but the text is readable, include the dish and write the uncertainty in notes instead of dropping it.
- Do not output sauce-choice or option-only lines as dishes, such as "Choice pesto mayonnaise or chili mayonnaise".
Use this exact shape:
{
  "menuText": "one dish or menu line per line, preserving the image order",
  "items": [
    {
      "orderIndex": 1,
      "originalName": "visible dish name as written",
      "cleanName": "normalized dish name without price",
      "canonicalCandidate": "short real dish name for database matching",
      "matchCandidates": ["specific candidate", "broader candidate"],
      "detectedLanguage": "en",
      "possibleCategory": "noodle",
      "notes": ""
    }
  ]
}
sourceLanguage: ${sourceLanguage}
targetLanguage: ${targetLanguage}`;
}

async function extractItemsFromImage(image, sourceLanguage, targetLanguage, env) {
  if (!hasOpenAiApiKey(env)) {
    return {
      ok: false,
      statusCode: 503,
      error: "IMAGE_AI_NOT_CONFIGURED",
      message: "Menu photo reading needs DISHKAI_AI_API_KEY configured on the backend.",
    };
  }

  const imageDataUrl = await imageToDataUrl(image);
  const aiResult = await runOpenAiVisionJson(
    buildImageExtractionPrompt(sourceLanguage, targetLanguage),
    imageDataUrl,
    env,
    { maxTokens: 2200, temperature: 0.1, responseFormat: MENU_EXTRACTION_RESPONSE_FORMAT },
  );
  const parsed = extractJsonObject(aiResult);
  const fallbackItems = splitMenuText(parsed.menuText || "");
  return {
    ok: true,
    items: cleanExtractedItems(parsed, fallbackItems),
    menuText: jsonSafeText(parsed.menuText || fallbackItems.map((item) => item.originalName).join("\n"), MAX_MENU_TEXT_LENGTH),
    extractionSource: "openai-vision",
    model: openAiVisionModel(env),
  };
}

async function imageToDataUrl(image) {
  if (!image || typeof image.arrayBuffer !== "function") {
    const error = new Error("No image file was uploaded.");
    error.code = "IMAGE_REQUIRED";
    throw error;
  }

  const type = String(image.type || "image/jpeg").toLowerCase();
  if (!SUPPORTED_IMAGE_TYPES.has(type)) {
    const error = new Error("Unsupported image type. Please upload a JPEG, PNG, WebP, or GIF menu photo.");
    error.code = "UNSUPPORTED_IMAGE_TYPE";
    throw error;
  }

  const size = Number(image.size || 0);
  if (Number.isFinite(size) && size > MAX_MENU_IMAGE_BYTES) {
    const error = new Error("Image is too large. Please upload a smaller menu photo.");
    error.code = "IMAGE_TOO_LARGE";
    throw error;
  }

  const buffer = await image.arrayBuffer();
  if (buffer.byteLength > MAX_MENU_IMAGE_BYTES) {
    const error = new Error("Image is too large. Please upload a smaller menu photo.");
    error.code = "IMAGE_TOO_LARGE";
    throw error;
  }

  return `data:${type};base64,${base64EncodeBytes(new Uint8Array(buffer))}`;
}

function base64EncodeBytes(bytes) {
  if (typeof Buffer !== "undefined") return Buffer.from(bytes).toString("base64");
  let binary = "";
  bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
  return btoa(binary);
}

function findAliasMatch(cleanName, { exactOnly = false } = {}) {
  const normalizedName = normalizeName(cleanName);
  if (!normalizedName) return { alias: null, normalizedName, confidence: 0 };
  const exact = aliasIndex.find((alias) => alias.normalizedAlias === normalizedName);
  if (exact) return { alias: exact, normalizedName, confidence: exact.confidence || 1 };
  if (exactOnly) return { alias: null, normalizedName, confidence: 0 };

  const includes = partialAliasIndex.find((alias) => {
    return normalizedName.includes(alias.normalizedAlias);
  });
  if (includes) {
    return { alias: includes, normalizedName, confidence: Math.min(includes.confidence || 0.82, 0.86) };
  }

  return { alias: null, normalizedName, confidence: 0 };
}

async function fetchWithTimeout(url, options, timeoutMs) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } catch (error) {
    if (error?.name === "AbortError") {
      const timeoutError = new Error("AI request timed out. Please try again.");
      timeoutError.code = "AI_REQUEST_TIMEOUT";
      throw timeoutError;
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

function candidateDishNames(item) {
  const names = [
    item.cleanName,
    item.canonicalCandidate,
    ...(Array.isArray(item.matchCandidates) ? item.matchCandidates : []),
    item.originalName,
  ];

  for (const name of [item.cleanName, item.originalName]) {
    names.push(...heuristicDishNameCandidates(name));
  }

  return [...new Set(names.map((name) => jsonSafeText(name, 120)).filter(Boolean))];
}

function heuristicDishNameCandidates(value) {
  const text = jsonSafeText(value, 160);
  if (!text || isOptionOnlyLine(text)) return [];

  const candidates = [];
  const pipeBase = text.split("|")[0]?.trim();
  if (pipeBase && pipeBase !== text) candidates.push(pipeBase);

  const withBase = text.split(/\s+(?:with|met|served with|geserveerd met)\s+/i)[0]?.trim();
  if (withBase && withBase !== text) candidates.push(withBase);

  const normalized = normalizeName(pipeBase || withBase || text);
  if (normalized === "caprese") candidates.push("caprese salad");
  if (normalized === "carpaccio" || normalized === "beef carpaccio") candidates.push("beef carpaccio");
  if (normalized === "caesar salad") candidates.push("caesar salad");
  if (normalized === "tuna tataki") candidates.push("tuna tataki");
  if (normalized === "scampi") candidates.push("scampi", "garlic scampi");

  return candidates;
}

function findBestAliasMatch(item) {
  const candidates = candidateDishNames(item);
  for (const candidate of candidates) {
    const match = findAliasMatch(candidate, { exactOnly: true });
    if (match.alias) {
      return {
        ...match,
        matchedCandidate: candidate,
        candidateNames: candidates,
      };
    }
  }

  for (const candidate of candidates) {
    const match = findAliasMatch(candidate);
    if (match.alias) {
      return {
        ...match,
        matchedCandidate: candidate,
        candidateNames: candidates,
      };
    }
  }
  const fallbackName = item.cleanName || item.originalName;
  return {
    ...findAliasMatch(fallbackName),
    matchedCandidate: "",
    candidateNames: candidates,
  };
}

function findUniversalMenuItem(item) {
  const candidates = candidateDishNames(item);
  for (const candidate of candidates) {
    const normalizedName = normalizeName(candidate);
    if (!normalizedName) continue;
    const match = universalAliasIndex.find((entry) => entry.normalizedAlias === normalizedName);
    if (match) {
      return {
        item: match.item,
        normalizedName,
        matchedCandidate: candidate,
        candidateNames: candidates,
        confidence: match.item.confidence || 0.74,
      };
    }
  }

  return {
    item: null,
    normalizedName: normalizeName(item.cleanName || item.originalName),
    matchedCandidate: "",
    candidateNames: candidates,
    confidence: 0,
  };
}

function itemDisplayName(item, language) {
  return localize(item.names, language);
}

function componentDisplay(component, targetLanguage) {
  const source = component.itemType === "seasoning"
    ? seasoningById.get(component.itemId)
    : ingredientById.get(component.itemId);
  return {
    name: localize(source?.names, targetLanguage),
    estimatedPercent: component.estimatedPercent,
    role: component.role,
    optional: Boolean(component.optional),
  };
}

function flavorSourceDisplay(id, targetLanguage) {
  const source = seasoningById.get(id) || ingredientById.get(id);
  return localize(source?.names, targetLanguage) || id;
}

const allergenRiskMap = {
  peanut: "contains-peanut",
  egg: "contains-egg",
  shellfish: "contains-shellfish",
  fish: "contains-fish",
  dairy: "contains-dairy",
  gluten: "contains-gluten",
  soy: "contains-soy",
  sesame: "contains-sesame",
  "tree-nut": "contains-tree-nut",
};

const porkIngredientIds = new Set([
  "pork", "bacon", "pork-cutlet", "sausage", "smoked-sausage", "minced-pork", "guanciale-or-pancetta",
  "mortadella",
]);
const glutenIngredientIds = new Set([
  "pasta", "spaghetti", "pasta-sheets", "pizza-dough", "wheat-flour", "bread", "ladyfingers",
  "potato-gnocchi", "ravioli-dough", "ramen-noodles", "tempura-batter", "dumpling-wrapper",
  "wheat-noodles", "egg-noodles", "pretzel-dough", "pastry-crust", "pancake-batter", "waffle-batter",
  "tortilla", "pita", "couscous", "brioche-bun", "naan-bread",
]);
const rawFishIngredientIds = new Set(["raw-fish", "raw-herring", "raw-white-fish"]);

function riskFlagsForDish(dish) {
  const riskIds = new Set(dish.riskFlags || []);
  (dish.composition || []).forEach((component) => {
    const source = component.itemType === "seasoning"
      ? seasoningById.get(component.itemId)
      : ingredientById.get(component.itemId);
    (source?.allergens || []).forEach((allergen) => {
      const riskId = allergenRiskMap[allergen];
      if (riskId) riskIds.add(riskId);
    });
    if (porkIngredientIds.has(component.itemId)) riskIds.add("contains-pork");
    if (glutenIngredientIds.has(component.itemId)) riskIds.add("contains-gluten");
    if (rawFishIngredientIds.has(component.itemId)) riskIds.add("contains-raw-fish");
  });
  return [...riskIds];
}

function riskDisplay(id, targetLanguage) {
  const risk = riskById.get(id);
  return localize(risk?.names, targetLanguage) || id;
}

function cookingMethodDisplay(id, targetLanguage) {
  const method = cookingMethodById.get(id);
  return localize(method?.names, targetLanguage) || id;
}

function tagLabel(tagId, targetLanguage) {
  const tag = iconTags[tagId];
  if (!tag) return { id: tagId, icon: "", label: tagId };
  return { id: tagId, icon: tag.icon, label: tag[targetLanguage] || tag.en };
}

function localizedVariations(dish, targetLanguage) {
  return (dish.commonVariations || []).map((variation) => ({
    label: localize(variation.label, targetLanguage),
    note: localize(variation.note, targetLanguage),
  })).filter((variation) => variation.label || variation.note);
}

function verifiedVisualNote(targetLanguage) {
  return localize({
    en: "Visual reference only. Actual dish may vary by restaurant.",
    zh: "图片仅供参考。实际出品会因餐厅而异。",
    nl: "Alleen visuele referentie. Het gerecht kan per restaurant verschillen.",
  }, targetLanguage);
}

export function deriveIconTagIds(dish) {
  const tagIds = [];
  const riskFlags = riskFlagsForDish(dish);
  if (dish.cuisineRole?.level === "signature") tagIds.push("signature-dish");
  if (dish.cuisineRole?.level === "classic") tagIds.push("classic-dish");
  if (dish.cuisineRole?.level === "regional") tagIds.push("regional-dish");
  if (dish.cuisineRole?.level === "street-food") tagIds.push("street-food");
  if (dish.cuisineRole?.tags?.includes("first-timer-friendly")) tagIds.push("first-timer-friendly");
  if (dish.cuisineRole?.tags?.includes("internationally-known")) tagIds.push("internationally-known");
  if (dish.goodForTags?.includes("safe-choice")) tagIds.push("safe-choice");
  if (dish.category) tagIds.push(dish.category);
  if (riskFlags.includes("contains-peanut")) tagIds.push("contains-peanut");
  if (riskFlags.includes("contains-egg")) tagIds.push("contains-egg");
  if (riskFlags.includes("contains-shellfish")) tagIds.push("contains-shellfish");
  if (riskFlags.includes("contains-gluten")) tagIds.push("contains-gluten");
  if (riskFlags.includes("contains-soy")) tagIds.push("contains-soy");
  if (riskFlags.includes("contains-fish")) tagIds.push("contains-fish");
  if (riskFlags.includes("contains-sesame")) tagIds.push("contains-sesame");
  if (riskFlags.includes("contains-pork")) tagIds.push("contains-pork");
  if (riskFlags.includes("contains-raw-fish")) tagIds.push("contains-raw-fish");
  if (riskFlags.includes("contains-tree-nut")) tagIds.push("contains-tree-nut");
  if (dish.tasteProfile?.basic?.some((taste) => String(taste).includes("spicy"))) tagIds.push("spicy");
  if (dish.tasteProfile?.basic?.some((taste) => ["sour", "tangy"].includes(taste))) tagIds.push("tangy");
  if (dish.tasteProfile?.basic?.includes("sweet")) tagIds.push("sweet");
  return [...new Set(tagIds)].slice(0, 7);
}

function buildCard(dish, originalName, targetLanguage) {
  const cuisine = cuisineById.get(dish.cuisineId);
  const riskFlags = riskFlagsForDish(dish);
  return {
    originalName,
    familiarName: itemDisplayName(dish, targetLanguage),
    imagePath: dish.imagePath,
    thumbPath: dish.thumbPath,
    orderVerdict: localize(dish.orderVerdict, targetLanguage),
    cuisineName: localize(cuisine?.names, targetLanguage),
    cuisineRole: {
      level: dish.cuisineRole?.level || "",
      note: localize(dish.cuisineRole?.description, targetLanguage),
    },
    cooking: {
      methods: (dish.cookingMethods || []).map((id) => cookingMethodDisplay(id, targetLanguage)),
      profile: localize(dish.cookingProfile, targetLanguage),
    },
    shortDescription: localize(dish.shortDescription, targetLanguage),
    composition: (dish.composition || [])
      .slice()
      .sort((a, b) => (a.displayPriority || 0) - (b.displayPriority || 0))
      .map((component) => componentDisplay(component, targetLanguage)),
    basicTaste: dish.tasteProfile?.basic || [],
    distinctiveFlavorSources: (dish.distinctiveFlavorSources || []).map((id) => flavorSourceDisplay(id, targetLanguage)),
    texture: dish.textureProfile || [],
    watchOuts: riskFlags.map((id) => riskDisplay(id, targetLanguage)),
    dietaryNotes: dish.dietaryFlags || [],
    commonVariations: localizedVariations(dish, targetLanguage),
    visualDisclaimer: localize(dish.visualDisclaimer, targetLanguage),
    aiImageLabel: verifiedVisualNote(targetLanguage),
    iconTags: deriveIconTagIds(dish).map((id) => tagLabel(id, targetLanguage)),
    metadataSource: "dishkai-database",
    verified: true,
  };
}

function universalMenuCard(universalItem, item, targetLanguage) {
  const copy = universalItem.copy[targetLanguage] || universalItem.copy.en;
  return {
    originalName: item.originalName,
    familiarName: copy.familiarName,
    orderVerdict: copy.orderVerdict,
    cuisineName: localize({
      en: "Universal menu item",
      zh: "通用菜单项",
      nl: "Algemeen menu-item",
    }, targetLanguage),
    cuisineRole: {
      level: "universal",
      note: localize({
        en: "This is broad ordering guidance for common menu items, not a verified fixed dish recipe.",
        zh: "这是常见菜单项的通用点餐参考，不是某一道固定菜的已验证做法。",
        nl: "Dit is brede bestelrichtlijn voor veelvoorkomende menu-items, geen geverifieerd vast gerecht.",
      }, targetLanguage),
    },
    cooking: {
      methods: [],
      profile: copy.cookingProfile,
    },
    shortDescription: copy.shortDescription,
    composition: copy.composition.map(([name, estimatedPercent, role, optional]) => ({
      name,
      estimatedPercent,
      role,
      optional: Boolean(optional),
    })),
    basicTaste: copy.basicTaste,
    distinctiveFlavorSources: copy.distinctiveFlavorSources,
    texture: copy.texture,
    watchOuts: copy.watchOuts,
    visualDisclaimer: copy.visualDisclaimer,
    aiImageLabel: localize({
      en: "Universal guidance. Ask the restaurant for exact ingredients, allergens, and preparation.",
      zh: "通用参考。具体配料、过敏原和做法请向餐厅确认。",
      nl: "Algemene richtlijn. Vraag het restaurant naar exacte ingredienten, allergenen en bereiding.",
    }, targetLanguage),
    iconTags: (universalItem.iconTags || ["ask-staff"]).map((id) => tagLabel(id, targetLanguage)),
    metadataSource: "universal-generic",
    verified: false,
  };
}

function unmatchedCard(item, targetLanguage) {
  if (isChefSpecialItem(item)) return chefSpecialCard(item, targetLanguage);

  const message = {
    en: "This dish is not in the starter database yet.",
    zh: "这道菜暂时还不在 DishKAI 初始数据库中。",
    nl: "Dit gerecht staat nog niet in de startdatabase.",
  };
  return {
    originalName: item.originalName,
    familiarName: item.cleanName,
    orderVerdict: message[targetLanguage] || message.en,
    shortDescription: message[targetLanguage] || message.en,
    aiImageLabel: "AI-generated preview. For inspiration only. Actual dish may look different.",
    iconTags: [],
    metadataSource: "unmatched",
    verified: false,
  };
}

function isChefSpecialItem(item) {
  const names = [
    item.originalName,
    item.cleanName,
    item.normalizedName,
    item.canonicalCandidate,
    ...(item.matchCandidates || []),
  ].map(normalizeName).filter(Boolean);
  return names.some((name) => (
    name.includes("chef special")
    || name.includes("chefs special")
    || name.includes("chef s special")
    || name.includes("chef special pasta")
    || name.includes("special pasta")
    || name.includes("pasta of the chef")
    || name.includes("pasta van de chef")
    || name.includes("pasta del chef")
    || name.includes("pasta dello chef")
    || name.includes("daily special")
    || name.includes("special of the day")
    || name.includes("主厨")
    || name.includes("厨师推荐")
  ));
}

function chefSpecialCard(item, targetLanguage) {
  const content = {
    en: {
      familiarName: "Chef Special Pasta",
      cuisineName: "Ask the staff",
      orderVerdict: "Potentially worth asking about. Confirm today's sauce, main ingredients, allergens, and portion before ordering.",
      shortDescription: "A restaurant-defined pasta special, often based on the chef's current sauce, seasonal ingredients, or daily recommendation rather than a fixed recipe.",
      cookingProfile: "Usually served in the restaurant's current chef style; the exact sauce and toppings vary by place and day.",
      composition: [
        "pasta base",
        "today's sauce",
        "chef's chosen topping",
        "cheese, herbs, or finish",
      ],
      basicTaste: ["ask staff", "restaurant-specific"],
      distinctiveFlavorSources: ["today's sauce", "seasonal ingredients", "chef's style"],
      texture: ["depends on sauce", "pasta bite varies"],
      watchOuts: ["Ask whether it contains dairy, gluten, seafood, nuts, pork, or alcohol."],
      visualDisclaimer: "Surprise reference only. Actual dish depends on the restaurant.",
      aiImageLabel: "Visual prompt to ask the staff. Not a verified DishKAI recipe or fixed dish photo.",
    },
    zh: {
      familiarName: "主厨特别意面",
      cuisineName: "请询问服务员",
      orderVerdict: "这通常是餐厅自定义菜，可能值得点；下单前建议确认今日酱汁、主要配料、过敏原和份量。",
      shortDescription: "这不是固定标准菜名，通常代表当天推荐、季节食材或主厨风格的意面。",
      cookingProfile: "通常按餐厅当天的主厨风格出餐，具体酱汁和配料会随店家变化。",
      composition: [
        "意面基底",
        "今日酱汁",
        "主厨选择的配料",
        "奶酪、香草或收尾",
      ],
      basicTaste: ["需要询问", "随餐厅而变"],
      distinctiveFlavorSources: ["今日酱汁", "季节食材", "主厨风格"],
      texture: ["取决于酱汁", "意面口感可能不同"],
      watchOuts: ["建议询问是否含乳制品、麸质、海鲜、坚果、猪肉或酒精。"],
      visualDisclaimer: "惊喜参考图。实际出品取决于餐厅。",
      aiImageLabel: "这是提醒顾客询问服务员的视觉参考，不是 DishKAI 已验证菜谱或固定实物图。",
    },
    nl: {
      familiarName: "Pasta van de chef",
      cuisineName: "Vraag het personeel",
      orderVerdict: "Mogelijk interessant om naar te vragen. Check voor het bestellen de saus van vandaag, hoofdingredienten, allergenen en portie.",
      shortDescription: "Een restaurantspecifieke pastaspecial, vaak gebaseerd op de saus van de chef, seizoensproducten of dagaanbeveling in plaats van een vast recept.",
      cookingProfile: "Meestal geserveerd in de actuele stijl van de chef; saus en toppings verschillen per restaurant en dag.",
      composition: [
        "pastabasis",
        "saus van vandaag",
        "topping gekozen door de chef",
        "kaas, kruiden of afwerking",
      ],
      basicTaste: ["vraag personeel", "restaurantspecifiek"],
      distinctiveFlavorSources: ["saus van vandaag", "seizoensproducten", "stijl van de chef"],
      texture: ["hangt af van de saus", "pastabite kan verschillen"],
      watchOuts: ["Vraag of het zuivel, gluten, zeevruchten, noten, varkensvlees of alcohol bevat."],
      visualDisclaimer: "Verrassingsreferentie. Het echte gerecht hangt af van het restaurant.",
      aiImageLabel: "Visuele hint om het personeel te vragen. Geen geverifieerd DishKAI-recept of vaste gerechtfoto.",
    },
  };
  const copy = content[targetLanguage] || content.en;
  return {
    originalName: item.originalName,
    familiarName: copy.familiarName,
    imagePath: CHEF_SPECIAL_IMAGE_PATH,
    thumbPath: CHEF_SPECIAL_THUMB_PATH,
    orderVerdict: copy.orderVerdict,
    cuisineName: copy.cuisineName,
    cooking: {
      methods: [],
      profile: copy.cookingProfile,
    },
    shortDescription: copy.shortDescription,
    composition: copy.composition.map((name, index) => ({
      name,
      estimatedPercent: [40, 30, 20, 10][index],
      role: "ask-staff",
      optional: index > 1,
    })),
    basicTaste: copy.basicTaste,
    distinctiveFlavorSources: copy.distinctiveFlavorSources,
    texture: copy.texture,
    watchOuts: copy.watchOuts,
    visualDisclaimer: copy.visualDisclaimer,
    aiImageLabel: copy.aiImageLabel,
    iconTags: ["chef-special", "ask-staff", "pasta"].map((id) => tagLabel(id, targetLanguage)),
    metadataSource: "unmatched",
    verified: false,
  };
}


function buildAiFallbackPrompt(items, targetLanguage) {
  const compactItems = items.map((item) => ({
    orderIndex: item.orderIndex,
    originalName: item.originalName,
    cleanName: item.cleanName,
    possibleCategory: item.possibleCategory,
  }));
  return `You are DishKAI's temporary dish estimate step.
Return valid JSON only. No markdown.
These dishes were not found in DishKAI's verified metadata.
Generate concise diner-facing estimates for ordering decisions.
Do not write recipes, cooking steps, exact measurements, or claim verification.
Preserve orderIndex exactly.
Use ${targetLanguage} for user-facing text when possible.
Use this exact shape:
{
  "cards": [
    {
      "orderIndex": 1,
      "familiarName": "translated or familiar dish name",
      "cuisineName": "likely cuisine or broad region",
      "orderVerdict": "one short ordering recommendation",
      "shortDescription": "one short sentence explaining what it usually is",
      "cooking": {
        "methods": ["grilled"],
        "profile": "one short diner's-perspective preparation sentence"
      },
      "composition": [
        { "name": "main ingredient", "estimatedPercent": 45, "role": "base" }
      ],
      "basicTaste": ["savory", "mild"],
      "distinctiveFlavorSources": ["garlic", "soy sauce"],
      "texture": ["soft", "crisp"],
      "watchOuts": ["May contain gluten"],
      "visualDisclaimer": "AI-generated estimate. Actual dish may vary by restaurant."
    }
  ]
}
Items:
${JSON.stringify(compactItems)}`;
}

function cleanPercent(value, fallback) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.max(0, Math.min(100, Math.round(number / 5) * 5));
}

function shortArray(value, max = 5) {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => jsonSafeText(item, 80))
    .filter(Boolean)
    .slice(0, max);
}

function cleanAiFallbackCard(rawCard, item, targetLanguage) {
  const fallbackMessage = {
    en: "AI-generated estimate. Not yet verified in DishKAI database.",
    zh: "AI 估算结果，尚未进入 DishKAI 已验证数据库。",
    nl: "AI-schatting. Nog niet geverifieerd in de DishKAI-database.",
  };
  const composition = Array.isArray(rawCard?.composition) ? rawCard.composition : [];
  return {
    originalName: item.originalName,
    familiarName: jsonSafeText(rawCard?.familiarName || item.cleanName || item.originalName, 120),
    cuisineName: jsonSafeText(rawCard?.cuisineName || "AI estimate", 80),
    orderVerdict: jsonSafeText(rawCard?.orderVerdict || fallbackMessage[targetLanguage] || fallbackMessage.en, 260),
    shortDescription: jsonSafeText(rawCard?.shortDescription || fallbackMessage[targetLanguage] || fallbackMessage.en, 260),
    cooking: {
      methods: shortArray(rawCard?.cooking?.methods, 4),
      profile: jsonSafeText(rawCard?.cooking?.profile || "", 220),
    },
    composition: composition.slice(0, 7).map((part, index) => ({
      name: jsonSafeText(part?.name || part?.role || "ingredient", 80),
      estimatedPercent: cleanPercent(part?.estimatedPercent, index === 0 ? 50 : 10),
      role: jsonSafeText(part?.role || "component", 40),
      optional: Boolean(part?.optional),
    })),
    basicTaste: shortArray(rawCard?.basicTaste),
    distinctiveFlavorSources: shortArray(rawCard?.distinctiveFlavorSources),
    texture: shortArray(rawCard?.texture),
    watchOuts: shortArray(rawCard?.watchOuts),
    visualDisclaimer: jsonSafeText(rawCard?.visualDisclaimer || fallbackMessage[targetLanguage] || fallbackMessage.en, 180),
    aiImageLabel: "AI-generated preview. For inspiration only. Actual dish may look different.",
    iconTags: [{ id: "ai-generated", icon: "AI", label: fallbackMessage[targetLanguage] || fallbackMessage.en }],
    metadataSource: "ai-fallback",
    verified: false,
  };
}

function aiFallbackEnabled(env) {
  return env?.DISHKAI_ENABLE_AI_FALLBACK === "true";
}

async function buildAiFallbackCards(unmatchedItems, targetLanguage, env) {
  if (!aiFallbackEnabled(env) || !unmatchedItems.length) return { cards: new Map(), source: "none" };
  const targetItems = unmatchedItems.slice(0, AI_FALLBACK_MAX_ITEMS);
  const prompt = buildAiFallbackPrompt(targetItems, targetLanguage);
  const maxTokens = Math.min(3500, 650 + targetItems.length * 260);

  try {
    let aiResult;
    let source;
    let model;

    if (hasOpenAiApiKey(env)) {
      aiResult = await runOpenAiJson(prompt, env, {
        maxTokens,
        temperature: 0.25,
        responseFormat: AI_FALLBACK_RESPONSE_FORMAT,
      });
      source = "openai";
      model = openAiModel(env);
    } else if (env?.AI) {
      aiResult = await env.AI.run(TEXT_MODEL, {
        prompt,
        max_tokens: maxTokens,
        temperature: 0.25,
      });
      source = "workers-ai";
      model = TEXT_MODEL;
    } else {
      return { cards: new Map(), source: "none" };
    }

    const parsed = extractJsonObject(aiResult);
    const rawCards = Array.isArray(parsed.cards) ? parsed.cards : [];
    const cards = new Map(rawCards.map((card) => {
      const orderIndex = Number(card.orderIndex);
      const item = targetItems.find((candidate) => candidate.orderIndex === orderIndex);
      if (!item) return null;
      return [orderIndex, cleanAiFallbackCard(card, item, targetLanguage)];
    }).filter(Boolean));
    return { cards, source: cards.size ? source : "none", model: cards.size ? model : undefined };
  } catch (error) {
    console.error("DishKAI AI fallback failed, keeping unmatched cards:", error);
    return { cards: new Map(), source: "none" };
  }
}

export async function analyzeMenuText({ menuText, sourceLanguage = "auto", targetLanguage = "en", env }) {
  const cleanMenuText = String(menuText || "").trim().slice(0, MAX_MENU_TEXT_LENGTH);
  if (!cleanMenuText) {
    return {
      ok: false,
      error: "No menu items were found. Please paste clearer menu text.",
      sourceLanguage,
      targetLanguage,
      items: [],
      unmatchedItems: [],
    };
  }

  const extraction = await extractItems(cleanMenuText, sourceLanguage, targetLanguage, env);
  return buildMenuAnalysis({
    sourceLanguage,
    targetLanguage,
    extraction,
    env,
  });
}

async function buildMenuAnalysis({ sourceLanguage, targetLanguage, extraction, env }) {
  const matchedItems = extraction.items.map((item) => {
    const match = findBestAliasMatch(item);
    const dish = match.alias ? dishById.get(match.alias.dishId) : null;
    if (!dish) {
      const universalMatch = findUniversalMenuItem(item);
      if (universalMatch.item) {
        return {
          ...item,
          normalizedName: universalMatch.normalizedName,
          matchedCandidate: universalMatch.matchedCandidate,
          matchCandidates: universalMatch.candidateNames,
          matchedDishId: null,
          matchedUniversalId: universalMatch.item.id,
          matchStatus: "universal",
          matchConfidence: universalMatch.confidence,
          card: universalMenuCard(universalMatch.item, item, targetLanguage),
        };
      }
      return {
        ...item,
        normalizedName: match.normalizedName,
        matchedCandidate: match.matchedCandidate,
        matchCandidates: match.candidateNames,
        matchedDishId: null,
        matchStatus: "unmatched",
        matchConfidence: 0,
        card: unmatchedCard(item, targetLanguage),
      };
    }
    return {
      ...item,
      normalizedName: match.normalizedName,
      matchedCandidate: match.matchedCandidate,
      matchCandidates: match.candidateNames,
      matchedDishId: dish.id,
      matchStatus: "matched",
      matchConfidence: match.confidence,
      card: buildCard(dish, item.originalName, targetLanguage),
    };
  });
  const aiFallback = await buildAiFallbackCards(
    matchedItems.filter((item) => item.matchStatus === "unmatched"),
    targetLanguage,
    env,
  );
  const items = matchedItems.map((item) => {
    const aiCard = aiFallback.cards.get(item.orderIndex);
    if (!aiCard) return item;
    return {
      ...item,
      matchStatus: "ai-generated",
      matchConfidence: 0.35,
      card: aiCard,
    };
  });

  return {
    ok: true,
    sourceLanguage,
    targetLanguage,
    extractionSource: extraction.extractionSource,
    model: extraction.model,
    aiFallbackSource: aiFallback.source,
    aiFallbackModel: aiFallback.model,
    privacy: {
      uploadedImagesStored: false,
      note: "DishKAI does not permanently store uploaded menu images by default. Store only structured dish data after Leo/Cindy manually confirms.",
    },
    items,
    unmatchedItems: items.filter((item) => item.matchStatus === "unmatched"),
    aiGeneratedItems: items.filter((item) => item.matchStatus === "ai-generated"),
    universalItems: items.filter((item) => item.matchStatus === "universal"),
  };
}

export async function analyzeMenuImage({ image, sourceLanguage = "auto", targetLanguage = "en", env } = {}) {
  try {
    const extraction = await extractItemsFromImage(image, sourceLanguage, targetLanguage, env);
    if (!extraction.ok) {
      return {
        ok: false,
        statusCode: extraction.statusCode || 503,
        error: extraction.error,
        message: extraction.message,
        sourceLanguage,
        targetLanguage,
        items: [],
        unmatchedItems: [],
        privacy: {
          uploadedImagesStored: false,
          note: "Uploaded menu images are processed temporarily and are not permanently stored by default.",
        },
      };
    }

    if (!extraction.items.length) {
      return {
        ok: false,
        statusCode: 400,
        error: "NO_MENU_ITEMS_FOUND",
        message: "No menu items were found in the image. Please try a clearer photo or paste menu text.",
        sourceLanguage,
        targetLanguage,
        items: [],
        unmatchedItems: [],
        privacy: {
          uploadedImagesStored: false,
          note: "Uploaded menu images are processed temporarily and are not permanently stored by default.",
        },
      };
    }

    return buildMenuAnalysis({
      sourceLanguage,
      targetLanguage,
      extraction,
      env,
    });
  } catch (error) {
    const statusByCode = {
      IMAGE_REQUIRED: 400,
      IMAGE_TOO_LARGE: 413,
      UNSUPPORTED_IMAGE_TYPE: 415,
    };
    return {
      ok: false,
      statusCode: statusByCode[error?.code] || 502,
      error: error?.code || "IMAGE_ANALYSIS_FAILED",
      message: error?.message || "Image analysis failed. Please try a clearer photo or paste menu text.",
      sourceLanguage,
      targetLanguage,
      items: [],
      unmatchedItems: [],
      privacy: {
        uploadedImagesStored: false,
        note: "Uploaded menu images are processed temporarily and are not permanently stored by default.",
      },
    };
  }
}
