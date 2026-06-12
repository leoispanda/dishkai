import { metadata } from "../../data/internal/index.js";

export const TEXT_MODEL = "@cf/meta/llama-3.1-8b-instruct";
export const DEFAULT_OPENAI_MODEL = "gpt-5.4-mini";
export const VISION_MODEL = "";

const MAX_MENU_TEXT_LENGTH = 12000;
const AI_FALLBACK_MAX_ITEMS = 30;
const OPENAI_CHAT_COMPLETIONS_URL = "https://api.openai.com/v1/chat/completions";

export const iconTags = {
  "signature-dish": { icon: "⭐", en: "Signature", zh: "代表菜", nl: "Signatuur" },
  "classic-dish": { icon: "🏛️", en: "Classic", zh: "经典", nl: "Klassieker" },
  "street-food": { icon: "🛵", en: "Street food", zh: "街头小吃", nl: "Streetfood" },
  "regional-dish": { icon: "📍", en: "Regional", zh: "地区特色", nl: "Regionaal" },
  "first-timer-friendly": { icon: "✅", en: "First-timer friendly", zh: "新手友好", nl: "Geschikt voor beginners" },
  "internationally-known": { icon: "🌍", en: "Well-known", zh: "知名度高", nl: "Bekend" },
  "safe-choice": { icon: "✅", en: "Safe", zh: "安全", nl: "Veilig" },
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

export function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...headers },
  });
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
Use this exact shape:
{
  "items": [
    {
      "orderIndex": 1,
      "originalName": "Pad Thai",
      "cleanName": "Pad Thai",
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

function hasOpenAiApiKey(env) {
  return Boolean(String(env?.DISHKAI_AI_API_KEY || "").trim());
}

async function runOpenAiJson(prompt, env, { maxTokens = 1200, temperature = 0.1 } = {}) {
  const response = await fetch(OPENAI_CHAT_COMPLETIONS_URL, {
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
      response_format: { type: "json_object" },
      max_tokens: maxTokens,
      temperature,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    throw new Error(`OpenAI request failed: ${response.status} ${errorText.slice(0, 220)}`);
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
  const rawItems = Array.isArray(value?.items) ? value.items : fallbackItems;
  return rawItems
    .map((item, index) => ({
      orderIndex: Number.isFinite(Number(item.orderIndex)) ? Number(item.orderIndex) : index + 1,
      originalName: jsonSafeText(item.originalName || item.cleanName || fallbackItems[index]?.originalName),
      cleanName: jsonSafeText(item.cleanName || item.originalName || fallbackItems[index]?.cleanName),
      detectedLanguage: jsonSafeText(item.detectedLanguage || "unknown", 24),
      possibleCategory: jsonSafeText(item.possibleCategory || "", 60),
      notes: jsonSafeText(item.notes || "", 160),
    }))
    .filter((item) => item.originalName || item.cleanName)
    .sort((a, b) => a.orderIndex - b.orderIndex)
    .map((item, index) => ({ ...item, orderIndex: index + 1 }));
}

async function extractItems(menuText, sourceLanguage, targetLanguage, env) {
  const fallbackItems = splitMenuText(menuText);
  if (!fallbackItems.length) return { items: fallbackItems, extractionSource: "local-fallback" };

  if (hasOpenAiApiKey(env)) {
    try {
      const aiResult = await runOpenAiJson(
        buildExtractionPrompt(menuText, sourceLanguage, targetLanguage),
        env,
        { maxTokens: 900, temperature: 0.1 },
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

  if (!env?.AI) return { items: fallbackItems, extractionSource: "local-fallback" };

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
    return { items: fallbackItems, extractionSource: "local-fallback" };
  }
}

function findAliasMatch(cleanName) {
  const normalizedName = normalizeName(cleanName);
  const exact = aliasIndex.find((alias) => alias.normalizedAlias === normalizedName);
  if (exact) return { alias: exact, normalizedName, confidence: exact.confidence || 1 };

  const includes = aliasIndex.find((alias) => {
    return normalizedName.includes(alias.normalizedAlias) || alias.normalizedAlias.includes(normalizedName);
  });
  if (includes && Math.min(normalizedName.length, includes.normalizedAlias.length) >= 6) {
    return { alias: includes, normalizedName, confidence: Math.min(includes.confidence || 0.82, 0.86) };
  }

  return { alias: null, normalizedName, confidence: 0 };
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
]);
const glutenIngredientIds = new Set([
  "pasta", "spaghetti", "pasta-sheets", "pizza-dough", "wheat-flour", "bread", "ladyfingers",
  "potato-gnocchi", "ravioli-dough", "ramen-noodles", "tempura-batter", "dumpling-wrapper",
  "wheat-noodles", "egg-noodles", "pretzel-dough", "pastry-crust", "pancake-batter", "waffle-batter",
  "tortilla", "pita", "couscous", "brioche-bun",
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

function unmatchedCard(item, targetLanguage) {
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
      aiResult = await runOpenAiJson(prompt, env, { maxTokens, temperature: 0.25 });
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
  const matchedItems = extraction.items.map((item) => {
    const match = findAliasMatch(item.cleanName || item.originalName);
    const dish = match.alias ? dishById.get(match.alias.dishId) : null;
    if (!dish) {
      return {
        ...item,
        normalizedName: match.normalizedName,
        matchedDishId: null,
        matchStatus: "unmatched",
        matchConfidence: 0,
        card: unmatchedCard(item, targetLanguage),
      };
    }
    return {
      ...item,
      normalizedName: match.normalizedName,
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
  };
}

export async function analyzeMenuImage() {
  // TODO: Wire this to a Workers AI vision/OCR model when the target Cloudflare account supports one.
  return {
    ok: false,
    error: "Image analysis is not available yet. Please paste menu text instead.",
    privacy: {
      uploadedImagesStored: false,
      note: "Uploaded menu images should be processed temporarily and not permanently stored by default.",
    },
  };
}
