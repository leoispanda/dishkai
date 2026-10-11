import assert from "node:assert/strict";
import fs from "node:fs/promises";
import vm from "node:vm";

const script = await fs.readFile(new URL("../script.js", import.meta.url), "utf8");
const html = await fs.readFile(new URL("../index.html", import.meta.url), "utf8");
const publicScript = await fs.readFile(new URL("../public/script.js", import.meta.url), "utf8");
const publicHtml = await fs.readFile(new URL("../public/index.html", import.meta.url), "utf8");
assert.equal(publicScript, script, "The deployed script must match the root copy.");
assert.equal(publicHtml, html, "The deployed HTML must match the root copy.");
const bindingsStart = script.indexOf('\ndocument.querySelectorAll("[data-ui-lang]")');
assert.ok(bindingsStart > 0);

// Exercise the actual frontend functions without unrelated page event bindings.
const storage = new Map([["dishkai-legal-disclaimer-accepted-v1", "true"]]);
const elements = new Map();
function element(selector, properties = {}) {
  const node = {
    value: "", checked: false, innerHTML: "", textContent: "",
    querySelectorAll: () => [], setAttribute() {}, scrollIntoView() {},
    ...properties,
  };
  elements.set(selector, node);
  return node;
}
const grid = element("#visualMenuGrid");
const summary = element("#menuSummary");
element("#menuText", { value: "Pad Thai" });
element("#targetLanguage", { value: "en" });
element("#statusMessage");
element("#visual-menu");
const transparencyPage = element("#aiTransparencyPage", { hidden: true });
const legalGate = element("#legalGate", { hidden: false });
const appShell = element("#appShell", { hidden: false });
element("#privateAccessStatus");
const contribution = element("#contributeUnknownDishes");
element("#menuImage", { files: [{ type: "image/png", size: 1024, name: "synthetic-menu.png" }] });

const now = 1_900_000_000_000;
class TestDate extends Date {
  static now() { return now; }
}
const requests = [];
const context = vm.createContext({
  console: { warn() {} },
  Date: TestDate, AbortController,
  FormData: class {
    values = [];
    append(...entry) { this.values.push(entry); }
  },
  localStorage: {
    getItem: (key) => storage.get(key),
    setItem: (key, value) => storage.set(key, value),
    removeItem: (key) => storage.delete(key),
  },
  window: { setTimeout, clearTimeout, location: { pathname: "/ai-transparency", hash: "#data" } },
  document: {
    querySelector: (selector) => elements.get(selector),
    body: { classList: { toggle() {}, remove() {} } },
  },
  createImageBitmap: async () => { throw new Error("Image decoding is unavailable in this offline fixture."); },
  fetch: async (url, options) => {
    requests.push({ url, options });
    return { ok: true, status: 200, text: async () => JSON.stringify({ ok: true, items: [] }) };
  },
});
vm.runInContext(script.slice(0, bindingsStart), context);
vm.runInContext(`
  sessionVerified = true;
  privateAccessGranted = true;
  globalThis.frontend = {
    translations, renderVisualMenu, renderKnowledgeCardMarkup,
    renderSummary, isAiGeneratedImage,
    analyzeText, analyzeImage, isTransparencyPage, renderPageRoute,
    setLanguage: (language) => { uiLang = language; },
  };
  renderAnalysis = () => {};
  incrementUsageCount = () => {};
`, context);
const app = context.frontend;

for (const match of html.matchAll(/data-i18n="([^"]+)"/g)) {
  for (const language of ["en", "zh", "nl"]) {
    assert.ok(app.translations[language][match[1]], `${match[1]} must exist in ${language}.`);
  }
}
assert.ok(html.includes('id="data"'), "The data notice must have a direct anchor.");
assert.ok(html.includes('href="/ai-transparency#data"'));
assert.equal(app.isTransparencyPage(), true, "A data anchor must remain on the authenticated transparency route.");
storage.delete("dishkai-legal-disclaimer-accepted-v1");
app.renderPageRoute();
assert.equal(transparencyPage.hidden, false, "An authenticated user must be able to read the data notice before the safety acknowledgment.");
assert.equal(legalGate.hidden, true);
assert.equal(appShell.hidden, true);
storage.set("dishkai-legal-disclaimer-accepted-v1", "true");
assert.ok(!/<input[^>]*id="contributeUnknownDishes"[^>]*\bchecked\b/.test(html), "Contributions must not be preselected.");
assert.ok(!/aiLabelHumanReviewed|estimatedNutrition/.test(script), "Unused review and nutrition claims must not remain in the UI glossary.");

const matched = {
  orderIndex: 1, originalName: "Pad Thai", matchStatus: "matched",
  card: {
    metadataSource: "dishkai-database", imageOrigin: "ai-generated",
    imagePath: "/assets/dishes/thai/pad-thai.webp",
    thumbPath: "/assets/dishes/thai/pad-thai-thumb.webp", watchOuts: [],
  },
};
for (const language of ["en", "zh", "nl"]) {
  app.setLanguage(language);
  app.renderVisualMenu([matched]);
  assert.ok(grid.innerHTML.includes("thumbnail-provenance-label"));
  assert.ok(grid.innerHTML.includes(app.translations[language].aiGeneratedImageLabel));
  assert.ok(grid.innerHTML.includes('role="img"'), "The compact AI badge needs an accessible name.");
  assert.ok(!grid.innerHTML.includes('menu-card-thumb" aria-hidden'), "The badge must not be hidden from assistive technology.");
  const card = app.renderKnowledgeCardMarkup(matched);
  assert.ok(card.includes(app.translations[language].preparedContentLabel));
  assert.ok(card.includes(app.translations[language].compositionEstimateNote));
  assert.ok(card.includes(app.translations[language].allergensNotConfirmed));
  assert.ok(card.includes(app.translations[language].safetyNote));
  assert.ok(card.includes(app.translations[language].aiImageLabel));
  app.renderSummary({ items: [matched], extractionSource: "gemini-vision" });
  assert.ok(summary.innerHTML.includes("Google Gemini"));
  app.renderSummary({ items: [matched], extractionSource: "local-fallback" });
  assert.ok(summary.innerHTML.includes(app.translations[language].localMenuReading));
}

app.setLanguage("en");
for (const [source, provider] of [["openai-vision", "OpenAI"], ["workers-ai", "Cloudflare Workers AI"]]) {
  app.renderSummary({ items: [matched], extractionSource: source });
  assert.ok(summary.innerHTML.includes(provider), "Reading provenance must reflect the actual provider.");
}
const absent = {
  orderIndex: 2, originalName: "Mystery", matchStatus: "unmatched",
  card: { metadataSource: "unmatched", imageOrigin: "none", aiImageLabel: "AI-generated preview" },
};
app.renderVisualMenu([absent]);
assert.ok(!grid.innerHTML.includes("thumbnail-provenance-label"));
const absentCard = app.renderKnowledgeCardMarkup(absent);
assert.ok(!absentCard.includes("AI-generated preview"), "A missing image must not be called an AI preview.");
assert.ok(!absentCard.includes("image-provenance-label"));
assert.ok(!absentCard.includes("knowledge-image"));
const photograph = {
  ...matched, card: { ...matched.card, imageOrigin: "restaurant-photo" },
};
app.renderVisualMenu([photograph]);
assert.ok(!grid.innerHTML.includes("thumbnail-provenance-label"), "An explicitly non-AI image must not get an AI badge.");
assert.ok(!app.renderKnowledgeCardMarkup(photograph).includes("image-provenance-label"));
assert.equal(app.isAiGeneratedImage(matched.card, "/assets/dishes/placeholders/unknown.webp"), false);

await app.analyzeText();
assert.equal(JSON.parse(requests.at(-1).options.body).contributeUnknownDishes, false, "Text analysis must work without a contribution.");
contribution.checked = true;
await app.analyzeText();
assert.equal(JSON.parse(requests.at(-1).options.body).contributeUnknownDishes, true);
await app.analyzeImage();
assert.equal(requests.at(-1).options.body.values.find(([key]) => key === "contributeUnknownDishes")[1], "true");
contribution.checked = false;
await app.analyzeImage();
assert.equal(requests.at(-1).options.body.values.find(([key]) => key === "contributeUnknownDishes")[1], "false");

console.log("AI transparency frontend checks passed: three-language notices, truthful menu image and source labels, optional contributions, and synchronized copies.");
