const translations = {
  en: {
    heroTitle: "Know the dish before you order.",
    heroSubtitle: "Upload a menu photo or paste menu text. DishKAI turns it into a clear dish list you can tap for ingredients, taste, watch-outs, and ordering guidance.",
    textMode: "Paste menu text", imageMode: "Upload menu image", menuTextLabel: "Paste or type menu text", menuTextPlaceholder: "Carbonara\nPad Thai\nChef Special Pasta", menuImageLabel: "Upload menu image", imageHelper: "If image analysis is unavailable, paste the menu text instead.",
    outputLanguage: "Output language", generate: "Generate menu list", loading: "Analyzing menu...", noItems: "No menu items were found. Please paste clearer menu text.", imageUnavailable: "Image analysis is not available yet. Please paste menu text instead.",
    menuListEyebrow: "Menu list", menuListTitle: "Tap a dish to understand it.", emptyCard: "Tap a menu item to open its Dish Knowledge Card.",
    footerText: "Fast menu understanding for ordering decisions.",
    matched: "matched", unmatched: "Not in starter database yet", tapForDetails: "Tap for details", tapForEstimate: "Tap for AI estimate if available", aiGenerated: "AI-generated estimate. Not yet verified in DishKAI database.", original: "Original", familiar: "Familiar", verdict: "Order verdict", description: "What it is", preparation: "How it is usually prepared", composition: "Estimated composition", taste: "Basic taste", flavor: "Distinctive flavor", texture: "Texture", watchOut: "Watch out", disclaimer: "Visual note", summary: "items", unknownNote: "This dish is not in the starter database yet."
  },
  zh: {
    heroTitle: "点餐前，先看懂这道菜。",
    heroSubtitle: "上传菜单照片或粘贴菜单文字。DishKAI 会生成一份清晰菜品列表，点击即可查看成分、味道、注意事项和点餐建议。",
    textMode: "粘贴菜单文字", imageMode: "上传菜单图片", menuTextLabel: "粘贴或输入菜单文字", menuTextPlaceholder: "Carbonara\nPad Thai\nChef Special Pasta", menuImageLabel: "上传菜单图片", imageHelper: "如果图片分析暂不可用，请改用粘贴菜单文字。",
    outputLanguage: "输出语言", generate: "生成菜单列表", loading: "正在分析菜单...", noItems: "没有找到菜单项。请粘贴更清晰的菜单文字。", imageUnavailable: "图片分析暂不可用。请粘贴菜单文字。",
    menuListEyebrow: "菜单列表", menuListTitle: "点击一道菜，快速看懂它。", emptyCard: "点击菜单项以打开菜品知识卡。",
    footerText: "为点餐决策而生的快速菜单理解工具。",
    matched: "已匹配", unmatched: "暂未收录", tapForDetails: "点击查看详情", tapForEstimate: "如可用，可点击查看 AI 估算", aiGenerated: "AI 估算结果，尚未进入 DishKAI 已验证数据库。", original: "原始菜名", familiar: "熟悉名称", verdict: "点餐建议", description: "这是什么", preparation: "常见做法风格", composition: "估算成分", taste: "基础味道", flavor: "特色风味", texture: "口感", watchOut: "注意事项", disclaimer: "图片说明", summary: "项", unknownNote: "这道菜暂时还不在 DishKAI 初始数据库中。"
  },
  nl: {
    heroTitle: "Ken het gerecht voordat je bestelt.",
    heroSubtitle: "Upload een menufoto of plak menutekst. DishKAI maakt er een heldere gerechtenlijst van die je kunt aantikken voor ingredienten, smaak, aandachtspunten en besteladvies.",
    textMode: "Menutekst plakken", imageMode: "Menufoto uploaden", menuTextLabel: "Plak of typ menutekst", menuTextPlaceholder: "Carbonara\nPad Thai\nChef Special Pasta", menuImageLabel: "Menufoto uploaden", imageHelper: "Als beeldanalyse niet beschikbaar is, plak dan de menutekst.",
    outputLanguage: "Uitvoertaal", generate: "Genereer menulijst", loading: "Menu analyseren...", noItems: "Geen menu-items gevonden. Plak duidelijkere menutekst.", imageUnavailable: "Beeldanalyse is nog niet beschikbaar. Plak menutekst.",
    menuListEyebrow: "Menulijst", menuListTitle: "Tik op een gerecht om het te begrijpen.", emptyCard: "Tik op een menu-item om de Dish Knowledge Card te openen.",
    footerText: "Snelle menubegrip voor bestelbeslissingen.",
    matched: "gekoppeld", unmatched: "nog niet in database", tapForDetails: "Tik voor details", tapForEstimate: "Tik voor AI-schatting indien beschikbaar", aiGenerated: "AI-schatting. Nog niet geverifieerd in de DishKAI-database.", original: "Origineel", familiar: "Vertrouwd", verdict: "Besteladvies", description: "Wat het is", preparation: "Hoe het meestal wordt bereid", composition: "Geschatte samenstelling", taste: "Basissmaak", flavor: "Kenmerkende smaak", texture: "Textuur", watchOut: "Let op", disclaimer: "Visuele noot", summary: "items", unknownNote: "Dit gerecht staat nog niet in de startdatabase."
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
      sourceLanguage: "auto",
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
  formData.append("sourceLanguage", "auto");
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
  resetKnowledgeCard();
}

function renderSummary(result) {
  const matched = result.items.filter((item) => item.matchStatus === "matched").length;
  const unmatched = result.items.length - matched;
  $("#menuSummary").innerHTML = `
    <span>${result.items.length} ${t("summary")}</span>
    <span>${matched} ${t("matched")}</span>
    <span>${unmatched} ${t("unmatched")}</span>
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
    const tags = (card.iconTags || []).slice(0, 5).map((tag) => `<span class="icon-tag" title="${escapeHtml(tag.label)}">${tag.icon ? `${tag.icon} ` : ""}${escapeHtml(tag.label)}</span>`).join("");
    const statusLabel = item.matchStatus === "matched" ? t("tapForDetails") : item.matchStatus === "ai-generated" ? t("aiGenerated") : t("tapForEstimate");
    return `
      <article class="menu-card ${item.matchStatus}" data-order-index="${item.orderIndex}">
        <button class="menu-card-button" type="button" data-open-card="${item.orderIndex}">
          <span class="order-index">${item.orderIndex}</span>
          <div class="menu-card-copy">
            <h3>${escapeHtml(item.originalName)}</h3>
            <p>${escapeHtml(card.familiarName || item.cleanName || item.originalName)}</p>
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

function resetKnowledgeCard() {
  $("#dishCard").className = "knowledge-card empty";
  $("#dishCard").innerHTML = `<p>${t("emptyCard")}</p>`;
}

function renderKnowledgeCard(item) {
  const card = item.card || {};
  const composition = (card.composition || []).map((part) => `
    <li><span>${escapeHtml(part.name || part.role)}</span><strong>${Number(part.estimatedPercent || 0)}%</strong></li>
  `).join("") || `<li><span>—</span><strong></strong></li>`;
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
        <div><dt>${t("preparation")}</dt><dd>${renderCooking(card.cooking)}</dd></div>
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

function renderCooking(cooking) {
  if (!cooking?.profile && !cooking?.methods?.length) return "—";
  const methods = (cooking.methods || []).map((method) => `<span class="method-tag">${escapeHtml(method)}</span>`).join("");
  return `<div class="method-row">${methods}</div>${cooking.profile ? `<p class="cooking-profile">${escapeHtml(cooking.profile)}</p>` : ""}`;
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
