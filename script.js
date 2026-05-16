const translations = {
  en: {
    navAnalyze: "Analyze", navVisualMenu: "Visual menu", navMetadata: "Metadata", navAbout: "About",
    heroTitle: "Know the dish before you order.",
    heroSubtitle: "Upload a menu photo or paste menu text. DishKAI turns unfamiliar dishes into visual cards with ingredients, taste, distinctive flavors, watch-outs, and ordering guidance.",
    textMode: "Paste menu text", imageMode: "Upload menu image", menuTextLabel: "Paste or type menu text", menuTextPlaceholder: "Pad Thai\nTom Yum Goong\nSom Tam", menuImageLabel: "Upload menu image", imageHelper: "Image analysis calls the backend endpoint. If vision support is unavailable, paste menu text instead.",
    sourceLanguage: "Original menu language", targetLanguage: "Familiar target language", generate: "Generate visual menu", loading: "Analyzing menu...", noItems: "No menu items were found. Please paste clearer menu text.", imageUnavailable: "Image analysis is not available yet. Please paste menu text instead.",
    visualMenuEyebrow: "Visual clickable menu", visualMenuTitle: "Menu order stays exactly as entered.", visualMenuBody: "Matched dishes use verified DishKAI metadata. Unknown dishes remain in place and are clearly marked.",
    cardEyebrow: "Dish Knowledge Card", cardTitle: "Fast verdict first, deeper knowledge when opened.", emptyCard: "Generate a visual menu, then open a dish card.",
    metadataEyebrow: "Internal metadata", metadataTitle: "AI extracts names. Metadata explains dishes.", metadataBody: "DishKAI keeps dish aliases separate from reusable ingredient, seasoning, taste, method, and risk metadata.", metadataAlias: "Menu names map to stable dish IDs.", metadataDish: "Dishes reference reusable ingredients and seasonings.", metadataCard: "Cards show clean decision-making output, not raw schema.",
    aboutEyebrow: "About", aboutTitle: "DishKAI is for ordering across languages and food cultures.", aboutBody: "It is not a recipe site or review app. It is a calm menu understanding tool for deciding what is worth ordering.", footerText: "Know before you order.",
    matched: "matched", unmatched: "not in starter database", aiGenerated: "AI-generated estimate. Not yet verified in DishKAI database.", original: "Original", familiar: "Familiar", verdict: "Order verdict", description: "What it is", composition: "Estimated composition", taste: "Basic taste", flavor: "Distinctive flavor", texture: "Texture", watchOut: "Watch out", disclaimer: "Visual note", openCard: "Open card", summary: "items analyzed", unknownNote: "This dish is not in the starter database yet."
  },
  zh: {
    navAnalyze: "分析", navVisualMenu: "视觉菜单", navMetadata: "元数据", navAbout: "关于",
    heroTitle: "点餐前，先看懂这道菜。",
    heroSubtitle: "上传菜单照片或粘贴菜单文字。DishKAI 会把陌生菜名变成视觉卡片，说明成分、味道、特色风味、注意事项和点餐建议。",
    textMode: "粘贴菜单文字", imageMode: "上传菜单图片", menuTextLabel: "粘贴或输入菜单文字", menuTextPlaceholder: "Pad Thai\nTom Yum Goong\nSom Tam", menuImageLabel: "上传菜单图片", imageHelper: "图片分析会调用后端接口。如果视觉模型暂不可用，请改用粘贴菜单文字。",
    sourceLanguage: "原始菜单语言", targetLanguage: "熟悉的目标语言", generate: "生成视觉菜单", loading: "正在分析菜单...", noItems: "没有找到菜单项。请粘贴更清晰的菜单文字。", imageUnavailable: "图片分析暂不可用。请粘贴菜单文字。",
    visualMenuEyebrow: "可点击视觉菜单", visualMenuTitle: "菜单顺序会严格保持原样。", visualMenuBody: "匹配菜品使用 DishKAI 已验证元数据。未知菜品会保留在原位并明确标记。",
    cardEyebrow: "菜品知识卡", cardTitle: "先给点餐结论，打开后再看更深的食物知识。", emptyCard: "先生成视觉菜单，然后打开一道菜。",
    metadataEyebrow: "内部元数据", metadataTitle: "AI 负责提取菜名，元数据负责解释菜品。", metadataBody: "DishKAI 将菜名别名与可复用的食材、调味、口味、做法和风险元数据分开维护。", metadataAlias: "菜单名称映射到稳定 dish ID。", metadataDish: "菜品引用可复用食材和调味料。", metadataCard: "卡片展示清晰的点餐信息，而不是原始 schema。", 
    aboutEyebrow: "关于", aboutTitle: "DishKAI 面向跨语言、跨饮食文化的点餐场景。", aboutBody: "它不是菜谱网站或点评应用，而是一个帮助你判断是否值得点的安静菜单理解工具。", footerText: "Know before you order.",
    matched: "已匹配", unmatched: "暂未收录", aiGenerated: "AI 估算结果，尚未进入 DishKAI 已验证数据库。", original: "原始菜名", familiar: "熟悉名称", verdict: "点餐建议", description: "这是什么", composition: "估算成分", taste: "基础味道", flavor: "特色风味", texture: "口感", watchOut: "注意事项", disclaimer: "图片说明", openCard: "打开卡片", summary: "项已分析", unknownNote: "这道菜暂时还不在 DishKAI 初始数据库中。"
  },
  nl: {
    navAnalyze: "Analyseren", navVisualMenu: "Visueel menu", navMetadata: "Metadata", navAbout: "Over",
    heroTitle: "Ken het gerecht voordat je bestelt.",
    heroSubtitle: "Upload een menufoto of plak menutekst. DishKAI maakt van onbekende gerechten visuele kaarten met ingredienten, smaak, kenmerkende smaken, aandachtspunten en besteladvies.",
    textMode: "Menutekst plakken", imageMode: "Menufoto uploaden", menuTextLabel: "Plak of typ menutekst", menuTextPlaceholder: "Pad Thai\nTom Yum Goong\nSom Tam", menuImageLabel: "Menufoto uploaden", imageHelper: "Beeldanalyse gebruikt het backend-endpoint. Als vision nog niet beschikbaar is, plak dan menutekst.",
    sourceLanguage: "Originele menutaal", targetLanguage: "Vertrouwde doeltaal", generate: "Genereer visueel menu", loading: "Menu analyseren...", noItems: "Geen menu-items gevonden. Plak duidelijkere menutekst.", imageUnavailable: "Beeldanalyse is nog niet beschikbaar. Plak menutekst.",
    visualMenuEyebrow: "Klikbaar visueel menu", visualMenuTitle: "De menuvolgorde blijft exact gelijk.", visualMenuBody: "Gekoppelde gerechten gebruiken geverifieerde DishKAI-metadata. Onbekende gerechten blijven op hun plek.",
    cardEyebrow: "Dish Knowledge Card", cardTitle: "Eerst een snel oordeel, daarna meer kennis wanneer je opent.", emptyCard: "Genereer een visueel menu en open daarna een gerechtkaart.",
    metadataEyebrow: "Interne metadata", metadataTitle: "AI haalt namen eruit. Metadata legt gerechten uit.", metadataBody: "DishKAI houdt aliassen gescheiden van herbruikbare ingredient-, seasoning-, smaak-, methode- en risicometadata.", metadataAlias: "Menunamen verwijzen naar stabiele dish IDs.", metadataDish: "Gerechten verwijzen naar herbruikbare ingredienten en seasonings.", metadataCard: "Kaarten tonen heldere beslisinformatie, geen ruwe schema's.",
    aboutEyebrow: "Over", aboutTitle: "DishKAI is voor bestellen over talen en eetculturen heen.", aboutBody: "Het is geen receptensite of reviewapp, maar een rustige tool om menus te begrijpen.", footerText: "Know before you order.",
    matched: "gekoppeld", unmatched: "nog niet in database", aiGenerated: "AI-schatting. Nog niet geverifieerd in de DishKAI-database.", original: "Origineel", familiar: "Vertrouwd", verdict: "Besteladvies", description: "Wat het is", composition: "Geschatte samenstelling", taste: "Basissmaak", flavor: "Kenmerkende smaak", texture: "Textuur", watchOut: "Let op", disclaimer: "Visuele noot", openCard: "Open kaart", summary: "items geanalyseerd", unknownNote: "Dit gerecht staat nog niet in de startdatabase."
  }
};

let uiLang = localStorage.getItem("dishkai-ui-lang") || "en";
let inputMode = "text";
let latestResult = null;

const $ = (selector) => document.querySelector(selector);

function t(key) {
  return translations[uiLang][key] || translations.en[key] || key;
}

function applyLanguage() {
  document.documentElement.lang = uiLang === "zh" ? "zh-CN" : uiLang;
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  document.querySelectorAll("[data-ui-lang]").forEach((button) => button.classList.toggle("active", button.dataset.uiLang === uiLang));
  if ($("#targetLanguage")) $("#targetLanguage").value = uiLang;
  if (latestResult) renderAnalysis(latestResult);
}

function setMode(mode) {
  inputMode = mode;
  document.querySelectorAll("[data-mode]").forEach((button) => button.classList.toggle("active", button.dataset.mode === mode));
  document.querySelectorAll("[data-input-panel]").forEach((panel) => panel.classList.toggle("active", panel.dataset.inputPanel === mode));
}

function setStatus(message, tone = "") {
  const el = $("#statusMessage");
  el.textContent = message;
  el.className = `status ${tone}`.trim();
}

async function analyzeText() {
  const menuText = $("#menuText").value.trim();
  if (!menuText) {
    setStatus(t("noItems"), "error");
    return;
  }
  setStatus(t("loading"));
  const response = await fetch("/api/analyze-menu-text", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      menuText,
      sourceLanguage: $("#sourceLanguage").value,
      targetLanguage: $("#targetLanguage").value,
    }),
  });
  const result = await response.json();
  if (!result.ok) {
    setStatus(result.error || t("noItems"), "error");
    return;
  }
  latestResult = result;
  renderAnalysis(result);
  setStatus(`${result.items.length} ${t("summary")}.`);
  $("#visual-menu").scrollIntoView({ behavior: "smooth", block: "start" });
}

async function analyzeImage() {
  const image = $("#menuImage").files[0];
  if (!image) {
    setStatus(t("imageUnavailable"), "error");
    return;
  }
  setStatus(t("loading"));
  const formData = new FormData();
  formData.append("image", image);
  formData.append("sourceLanguage", $("#sourceLanguage").value);
  formData.append("targetLanguage", $("#targetLanguage").value);
  const response = await fetch("/api/analyze-menu-image", { method: "POST", body: formData });
  const result = await response.json();
  if (!result.ok) {
    setStatus(result.error || t("imageUnavailable"), "error");
    return;
  }
  latestResult = result;
  renderAnalysis(result);
  setStatus(`${result.items.length} ${t("summary")}.`);
}

function renderAnalysis(result) {
  renderSummary(result);
  renderVisualMenu(result.items || []);
  const firstMatched = result.items?.find((item) => item.card);
  if (firstMatched) renderKnowledgeCard(firstMatched);
}

function renderSummary(result) {
  const matched = result.items.filter((item) => item.matchStatus === "matched").length;
  const unmatched = result.items.length - matched;
  $("#menuSummary").innerHTML = `
    <span>${result.items.length} ${t("summary")}</span>
    <span>${matched} ${t("matched")}</span>
    <span>${unmatched} ${t("unmatched")}</span>
    <span>${result.extractionSource || "local-fallback"}</span>
  `;
}

function renderVisualMenu(items) {
  const grid = $("#visualMenuGrid");
  if (!items.length) {
    grid.innerHTML = `<p class="empty-state">${t("noItems")}</p>`;
    return;
  }
  grid.innerHTML = items.map((item) => {
    const card = item.card || {};
    const tags = (card.iconTags || []).map((tag) => `<span class="icon-tag" title="${escapeHtml(tag.label)}">${tag.icon} ${escapeHtml(tag.label)}</span>`).join("");
    const statusLabel = item.matchStatus === "matched" ? t("matched") : item.matchStatus === "ai-generated" ? t("aiGenerated") : t("unmatched");
    return `
      <article class="menu-card ${item.matchStatus}" data-order-index="${item.orderIndex}">
        <button class="menu-card-button" type="button" data-open-card="${item.orderIndex}">
          <div class="thumb" aria-hidden="true">${card.thumbPath ? `<img src="${card.thumbPath}" alt="" loading="lazy">` : ""}</div>
          <div class="menu-card-copy">
            <span class="order-index">${item.orderIndex}</span>
            <h3>${escapeHtml(item.originalName)}</h3>
            <p>${escapeHtml(card.familiarName || item.cleanName || item.originalName)}</p>
            <strong>${escapeHtml(card.orderVerdict || t("unknownNote"))}</strong>
            <div class="icon-row">${tags}</div>
            <small>${statusLabel}</small>
          </div>
        </button>
      </article>
    `;
  }).join("");
  grid.querySelectorAll("[data-open-card]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = items.find((entry) => String(entry.orderIndex) === button.dataset.openCard);
      if (item) renderKnowledgeCard(item);
      $("#knowledge-card").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderKnowledgeCard(item) {
  const card = item.card || {};
  const composition = (card.composition || []).map((part) => `
    <li><span>${escapeHtml(part.name || part.role)}</span><strong>${Number(part.estimatedPercent || 0)}%</strong></li>
  `).join("");
  const tags = (card.iconTags || []).map((tag) => `<span class="icon-tag">${tag.icon} ${escapeHtml(tag.label)}</span>`).join("");
  const unverified = card.verified === false && card.metadataSource === "ai-fallback" ? `<p class="notice">${t("aiGenerated")}</p>` : "";
  $("#dishCard").className = "knowledge-card";
  $("#dishCard").innerHTML = `
    <div class="knowledge-image">${card.imagePath ? `<img src="${card.imagePath}" alt="" loading="lazy">` : ""}</div>
    <div class="knowledge-copy">
      <p class="eyebrow">${escapeHtml(card.cuisineName || item.matchStatus)}</p>
      <h3>${escapeHtml(card.familiarName || item.cleanName || item.originalName)}</h3>
      <p class="original-name"><strong>${t("original")}:</strong> ${escapeHtml(item.originalName)}</p>
      <p class="verdict">${escapeHtml(card.orderVerdict || t("unknownNote"))}</p>
      ${unverified}
      ${card.cuisineRole?.note ? `<p>${escapeHtml(card.cuisineRole.note)}</p>` : ""}
      <dl>
        <div><dt>${t("description")}</dt><dd>${escapeHtml(card.shortDescription || t("unknownNote"))}</dd></div>
        <div><dt>${t("composition")}</dt><dd><ul class="composition-list">${composition}</ul></dd></div>
        <div><dt>${t("taste")}</dt><dd>${listText(card.basicTaste)}</dd></div>
        <div><dt>${t("flavor")}</dt><dd>${listText(card.distinctiveFlavorSources)}</dd></div>
        <div><dt>${t("texture")}</dt><dd>${listText(card.texture)}</dd></div>
        <div><dt>${t("watchOut")}</dt><dd>${listText(card.watchOuts)}</dd></div>
        <div><dt>${t("disclaimer")}</dt><dd>${escapeHtml(card.visualDisclaimer || "")}</dd></div>
      </dl>
      <div class="icon-row">${tags}</div>
    </div>
  `;
}

function listText(value) {
  return escapeHtml(Array.isArray(value) && value.length ? value.join(", ") : "—");
}

function escapeHtml(value) {
  return String(value || "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }[char]));
}

document.querySelectorAll("[data-ui-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    uiLang = button.dataset.uiLang;
    localStorage.setItem("dishkai-ui-lang", uiLang);
    applyLanguage();
  });
});

document.querySelectorAll("[data-mode]").forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

$("#menuForm").addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputMode === "image") analyzeImage();
  else analyzeText();
});

$("#targetLanguage").addEventListener("change", () => {
  uiLang = $("#targetLanguage").value;
  localStorage.setItem("dishkai-ui-lang", uiLang);
  applyLanguage();
});

applyLanguage();
