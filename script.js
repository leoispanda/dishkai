const APP_VERSION = "DishKAI v0.2.20-public-beta";
const VISIT_COUNT_KEY = "dishkai-local-visit-count";
const LEGAL_ACCEPTED_KEY = "dishkai-legal-disclaimer-accepted-v1";
const MENU_IMAGE_MAX_EDGE = 1800;
const MENU_IMAGE_JPEG_QUALITY = 0.82;

const translations = {
  en: {
    legalGateTitle: "Before using DishKAI",
    legalGateSubtitle: "Please confirm the safety and privacy limits first. Then you can enter the menu tool.",
    legalLanguageLabel: "Choose your language",
    heroTitle: "Know the dish before you order.",
    heroSubtitle: "Upload a menu photo or paste menu text. DishKAI turns it into a clear dish list you can tap for ingredients, taste, watch-outs, and ordering guidance.",
    privateAccessEyebrow: "Private tools", privateAccessTitle: "Leo & Cindy internal tools.", unauthorizedNotice: "Menu recognition is public. PDC and internal actions stay private.", privateAccessLabel: "Private access code", privateAccessPlaceholder: "Enter private access code", unlockPrivate: "Unlock private tools", privateUnlocked: "Private tools unlocked.", privateLocked: "Private tools are locked. Menu recognition is open.", privateDenied: "Private tools are locked.", clearRecentScans: "Clear recent scans", clearScansDone: "Recent scans cleared.", privateLogout: "Lock",
    textMode: "Paste menu text", imageMode: "Upload menu image", menuTextLabel: "Paste or type menu text", menuTextPlaceholder: "Carbonara\nPad Thai\nChef Special Pasta", menuImageLabel: "Upload menu image", imageHelper: "If image analysis is unavailable, paste the menu text instead.", uploadWarning: "Please do not upload images containing faces, payment details, addresses, phone numbers, or other personal/sensitive information.",
    outputLanguage: "Output language", generate: "Generate menu list", loading: "Analyzing menu...", compressionStatus: "Compressed {from} to {to}. Analyzing menu...", noItems: "No menu items were found. Please paste clearer menu text.", imageUnavailable: "Image analysis is not available yet. Please paste menu text instead.",
    menuListEyebrow: "Menu list", menuListTitle: "Tap a dish to understand it.", emptyCard: "Tap a menu item to open its Dish Knowledge Card.",
    footerText: "Fast menu understanding for ordering decisions.",
    footerLegal: "Public beta reference. Verify critical food information with the restaurant.",
    footerAbout: "DishKAI helps people quickly understand menu names, dish context, and ordering risks before choosing what to eat.",
    footerCostNote: "AI menu analysis usually costs a small API fee, often under a few cents per scan depending on menu length and image size.",
    legalEyebrow: "Important disclaimer",
    legalTitle: "Use DishKAI as an experimental menu reference only.",
    legalPrivate: "DishKAI is a public beta menu helper. It is not a professional, medical, nutritional, allergy, legal, or restaurant advisory service.",
    legalAccuracy: "Dish names, ingredients, allergens, dietary flags, translations, images, AI estimates, and ordering advice may be incomplete, outdated, mistranslated, or wrong.",
    legalAllergy: "Do not rely on DishKAI for allergies, pregnancy, medical conditions, religious restrictions, food safety, alcohol, raw food, or other high-risk decisions. Ask the restaurant directly.",
    legalPrivacy: "Do not upload images containing faces, payment details, addresses, phone numbers, private conversations, or other personal/sensitive information unless you have permission and accept the risk.",
    legalResponsibility: "You are solely responsible for what you upload and what you choose to order. DishKAI is provided without warranties and the maintainers accept no liability for decisions made from its output.",
    legalAccept: "I understand and accept these limits before using DishKAI.",
    legalRequired: "Please accept the disclaimer before using DishKAI.",
    enterApp: "Enter DishKAI",
    visitCountLabel: "Local visits",
    matched: "matched", unmatched: "Not in starter database yet", aiEstimated: "AI estimate", tapForDetails: "Tap for details", tapForEstimate: "Tap for note", aiGenerated: "AI-generated estimate. Not yet verified in DishKAI database.", aiImageLabel: "AI-generated preview. For inspiration only. Actual dish may look different.", original: "Original", familiar: "Familiar", verdict: "Order verdict", description: "What it is", preparation: "How it is usually prepared", composition: "Estimated composition", taste: "Basic taste", flavor: "Distinctive flavor", texture: "Texture", watchOut: "Watch out", variations: "Common variations", disclaimer: "Visual note", summary: "items", unknownNote: "This dish is not in the starter database yet."
  },
  zh: {
    legalGateTitle: "使用 DishKAI 之前",
    legalGateSubtitle: "请先确认安全和隐私限制。确认后再进入菜单识别工具。",
    legalLanguageLabel: "选择语言",
    heroTitle: "点餐前，先看懂这道菜。",
    heroSubtitle: "上传菜单照片或粘贴菜单文字。DishKAI 会生成一份清晰菜品列表，点击即可查看成分、味道、注意事项和点餐建议。",
    privateAccessEyebrow: "私有工具", privateAccessTitle: "Leo 和 Cindy 的内部工具。", unauthorizedNotice: "菜单识别已公开开放。PDC 和内部操作仍然保持私有。", privateAccessLabel: "私有访问码", privateAccessPlaceholder: "输入私有访问码", unlockPrivate: "解锁私有工具", privateUnlocked: "私有工具已解锁。", privateLocked: "私有工具已锁定。菜单识别已开放。", privateDenied: "私有工具已锁定。", clearRecentScans: "清除最近扫描", clearScansDone: "最近扫描已清除。", privateLogout: "锁定",
    textMode: "粘贴菜单文字", imageMode: "上传菜单图片", menuTextLabel: "粘贴或输入菜单文字", menuTextPlaceholder: "Carbonara\nPad Thai\nChef Special Pasta", menuImageLabel: "上传菜单图片", imageHelper: "如果图片分析暂不可用，请改用粘贴菜单文字。", uploadWarning: "Please do not upload images containing faces, payment details, addresses, phone numbers, or other personal/sensitive information.",
    outputLanguage: "输出语言", generate: "生成菜单列表", loading: "正在分析菜单...", compressionStatus: "已将图片从 {from} 压缩到 {to}，正在分析菜单...", noItems: "没有找到菜单项。请粘贴更清晰的菜单文字。", imageUnavailable: "图片分析暂不可用。请粘贴菜单文字。",
    menuListEyebrow: "菜单列表", menuListTitle: "点击一道菜，快速看懂它。", emptyCard: "点击菜单项以打开菜品知识卡。",
    footerText: "为点餐决策而生的快速菜单理解工具。",
    footerLegal: "公开 beta 参考工具。关键饮食信息请直接向餐厅确认。",
    footerAbout: "DishKAI 帮助你在点餐前快速理解菜名、菜品背景和需要注意的风险。",
    footerCostNote: "AI 菜单识别会产生少量 API 成本，通常每次几美分以内，具体取决于菜单长度和图片大小。",
    legalEyebrow: "重要免责声明",
    legalTitle: "DishKAI 仅作为实验性的菜单参考工具使用。",
    legalPrivate: "DishKAI 是公开 beta 菜单辅助工具，不是专业、医疗、营养、过敏、法律或餐厅顾问服务。",
    legalAccuracy: "菜名、成分、过敏原、饮食标签、翻译、图片、AI 估算和点餐建议都可能不完整、过时、误译或错误。",
    legalAllergy: "不要把 DishKAI 用于过敏、怀孕、疾病、宗教饮食限制、食品安全、酒精、生食或其他高风险决策。请直接向餐厅确认。",
    legalPrivacy: "请勿上传包含人脸、支付信息、地址、电话号码、私人对话或其他个人/敏感信息的图片，除非你有权限并愿意自行承担风险。",
    legalResponsibility: "你需要自行负责上传内容和点餐选择。DishKAI 不提供任何保证，维护者不对基于输出作出的决定承担责任。",
    legalAccept: "我理解并接受以上限制，然后再使用 DishKAI。",
    legalRequired: "使用 DishKAI 前请先确认免责声明。",
    enterApp: "进入 DishKAI",
    visitCountLabel: "本机访问次数",
    matched: "已匹配", unmatched: "暂未收录", aiEstimated: "AI 估算", tapForDetails: "点击查看详情", tapForEstimate: "点击查看未收录提示", aiGenerated: "AI 估算结果，尚未进入 DishKAI 已验证数据库。", aiImageLabel: "AI-generated preview. For inspiration only. Actual dish may look different.", original: "原始菜名", familiar: "熟悉名称", verdict: "点餐建议", description: "这是什么", preparation: "常见做法风格", composition: "估算成分", taste: "基础味道", flavor: "特色风味", texture: "口感", watchOut: "注意事项", variations: "常见变体", disclaimer: "图片说明", summary: "项", unknownNote: "这道菜暂时还不在 DishKAI 初始数据库中。"
  },
  nl: {
    legalGateTitle: "Voordat je DishKAI gebruikt",
    legalGateSubtitle: "Bevestig eerst de veiligheids- en privacygrenzen. Daarna kun je de menutool openen.",
    legalLanguageLabel: "Kies je taal",
    heroTitle: "Ken het gerecht voordat je bestelt.",
    heroSubtitle: "Upload een menufoto of plak menutekst. DishKAI maakt er een heldere gerechtenlijst van die je kunt aantikken voor ingredienten, smaak, aandachtspunten en besteladvies.",
    privateAccessEyebrow: "Private tools", privateAccessTitle: "Interne tools voor Leo & Cindy.", unauthorizedNotice: "Menuherkenning is publiek. PDC en interne acties blijven privaat.", privateAccessLabel: "Private toegangscode", privateAccessPlaceholder: "Voer private toegangscode in", unlockPrivate: "Ontgrendel private tools", privateUnlocked: "Private tools ontgrendeld.", privateLocked: "Private tools zijn vergrendeld. Menuherkenning is open.", privateDenied: "Private tools zijn vergrendeld.", clearRecentScans: "Wis recente scans", clearScansDone: "Recente scans gewist.", privateLogout: "Vergrendel",
    textMode: "Menutekst plakken", imageMode: "Menufoto uploaden", menuTextLabel: "Plak of typ menutekst", menuTextPlaceholder: "Carbonara\nPad Thai\nChef Special Pasta", menuImageLabel: "Menufoto uploaden", imageHelper: "Als beeldanalyse niet beschikbaar is, plak dan de menutekst.", uploadWarning: "Please do not upload images containing faces, payment details, addresses, phone numbers, or other personal/sensitive information.",
    outputLanguage: "Uitvoertaal", generate: "Genereer menulijst", loading: "Menu analyseren...", compressionStatus: "Afbeelding verkleind van {from} naar {to}. Menu analyseren...", noItems: "Geen menu-items gevonden. Plak duidelijkere menutekst.", imageUnavailable: "Beeldanalyse is nog niet beschikbaar. Plak menutekst.",
    menuListEyebrow: "Menulijst", menuListTitle: "Tik op een gerecht om het te begrijpen.", emptyCard: "Tik op een menu-item om de Dish Knowledge Card te openen.",
    footerText: "Snelle menubegrip voor bestelbeslissingen.",
    footerLegal: "Publieke beta-referentie. Controleer kritieke voedselinformatie bij het restaurant.",
    footerAbout: "DishKAI helpt je snel menunamen, gerechtcontext en bestelrisico's te begrijpen voordat je kiest wat je eet.",
    footerCostNote: "AI-menuanalyse kost meestal een kleine API-fee, vaak minder dan een paar cent per scan afhankelijk van menulengte en afbeeldingsgrootte.",
    legalEyebrow: "Belangrijke disclaimer",
    legalTitle: "Gebruik DishKAI alleen als experimentele menureferentie.",
    legalPrivate: "DishKAI is een publieke beta-menuhelper. Het is geen professionele, medische, voedingskundige, allergie-, juridische of restaurantadviesdienst.",
    legalAccuracy: "Gerechtnamen, ingredienten, allergenen, dieetlabels, vertalingen, afbeeldingen, AI-schattingen en besteladvies kunnen onvolledig, verouderd, verkeerd vertaald of onjuist zijn.",
    legalAllergy: "Vertrouw niet op DishKAI voor allergieen, zwangerschap, medische aandoeningen, religieuze dieetregels, voedselveiligheid, alcohol, rauw eten of andere risicovolle beslissingen. Vraag het restaurant rechtstreeks.",
    legalPrivacy: "Upload geen afbeeldingen met gezichten, betaalgegevens, adressen, telefoonnummers, privegesprekken of andere persoonlijke/gevoelige informatie tenzij je toestemming hebt en het risico accepteert.",
    legalResponsibility: "Je bent zelf verantwoordelijk voor wat je uploadt en bestelt. DishKAI wordt zonder garanties aangeboden en de beheerders aanvaarden geen aansprakelijkheid voor beslissingen op basis van de output.",
    legalAccept: "Ik begrijp en accepteer deze beperkingen voordat ik DishKAI gebruik.",
    legalRequired: "Accepteer de disclaimer voordat je DishKAI gebruikt.",
    enterApp: "Open DishKAI",
    visitCountLabel: "Lokale bezoeken",
    matched: "gekoppeld", unmatched: "nog niet in database", aiEstimated: "AI-schatting", tapForDetails: "Tik voor details", tapForEstimate: "Tik voor notitie", aiGenerated: "AI-schatting. Nog niet geverifieerd in de DishKAI-database.", aiImageLabel: "AI-generated preview. For inspiration only. Actual dish may look different.", original: "Origineel", familiar: "Vertrouwd", verdict: "Besteladvies", description: "Wat het is", preparation: "Hoe het meestal wordt bereid", composition: "Geschatte samenstelling", taste: "Basissmaak", flavor: "Kenmerkende smaak", texture: "Textuur", watchOut: "Let op", variations: "Veelvoorkomende variaties", disclaimer: "Visuele noot", summary: "items", unknownNote: "Dit gerecht staat nog niet in de startdatabase."
  }
};

let uiLang = localStorage.getItem("dishkai-ui-lang") || "en";
let inputMode = "text";
let latestResult = null;
let pdcState = loadPdcState();
let privateAccessGranted = false;

const $ = (selector) => document.querySelector(selector);

function t(key) {
  return translations[uiLang][key] || translations.en[key] || key;
}

function template(key, values) {
  return Object.entries(values).reduce((text, [name, value]) => text.replaceAll(`{${name}}`, value), t(key));
}

function applyLanguage() {
  document.documentElement.lang = uiLang === "zh" ? "zh-CN" : uiLang;
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  document.querySelectorAll("[data-ui-lang]").forEach((button) => button.classList.toggle("active", button.dataset.uiLang === uiLang));
  if ($("#targetLanguage")) $("#targetLanguage").value = uiLang;
  renderAppMeta();
  if (latestResult) renderAnalysis(latestResult);
}

function incrementVisitCount() {
  const current = Number(localStorage.getItem(VISIT_COUNT_KEY) || 0);
  const next = Number.isFinite(current) ? current + 1 : 1;
  localStorage.setItem(VISIT_COUNT_KEY, String(next));
  renderAppMeta();
}

function renderAppMeta() {
  const count = Number(localStorage.getItem(VISIT_COUNT_KEY) || 0);
  if ($("#appVersion")) $("#appVersion").textContent = APP_VERSION;
  if ($("#footerVersion")) $("#footerVersion").textContent = APP_VERSION;
  if ($("#visitCount")) $("#visitCount").textContent = `${t("visitCountLabel")}: ${count}`;
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

function focusMenuEntry() {
  $("#menuForm")?.scrollIntoView({ behavior: "smooth", block: "start" });
  window.setTimeout(() => {
    const target = inputMode === "image" ? $("#menuImage") : $("#menuText");
    target?.focus({ preventScroll: true });
  }, 420);
}

async function fetchJson(url, options = {}) {
  const response = await fetch(url, options);
  const text = await response.text();
  let result = {};
  if (text) {
    try {
      result = JSON.parse(text);
    } catch {
      const looksLikeHtml = /^\s*</.test(text);
      result = {
        error: "INVALID_JSON",
        message: looksLikeHtml
          ? "Server returned an HTML error page instead of JSON. Please try again after the latest deploy finishes."
          : text.slice(0, 180) || "Unexpected server response.",
      };
    }
  }
  return { response, result };
}

function apiErrorMessage(result, fallback) {
  return result?.message || result?.error || fallback;
}

function setPrivateStatus(message, tone = "") {
  const el = $("#privateAccessStatus");
  if (!el) return;
  el.textContent = message;
  el.className = `status ${tone}`.trim();
}

function shouldShowPrivateAccessPanel() {
  const params = new URLSearchParams(window.location.search);
  return params.has("internal") || window.location.hash === "#internal" || window.location.hash === "#personal-pdc" || privateAccessGranted;
}

function updatePrivateAccessVisibility() {
  const panel = $("#privateAccess");
  if (!panel) return;
  const shouldHide = privateAccessGranted || !shouldShowPrivateAccessPanel();
  panel.hidden = shouldHide;
  panel.querySelectorAll("input, button").forEach((element) => {
    element.disabled = shouldHide;
  });
}

function setPrivateAccess(granted) {
  const wasGranted = privateAccessGranted;
  privateAccessGranted = Boolean(granted);
  document.body.classList.toggle("private-unlocked", privateAccessGranted);
  document.body.classList.toggle("private-locked", !privateAccessGranted);
  updatePrivateAccessVisibility();
  document.querySelectorAll("#privateLogoutTop").forEach((element) => {
    element.hidden = !privateAccessGranted;
  });
  document.querySelectorAll("#pdcForm input, #pdcForm textarea, #pdcForm select, #pdcForm button, #pdcInterventionForm textarea, #pdcInterventionForm button").forEach((element) => {
    element.disabled = !privateAccessGranted;
  });
  setStatus("");
  updateLegalGate();
  if (wasGranted && !privateAccessGranted) clearPrivateLocalData();
}

function legalAccepted() {
  return $("#legalAccepted")?.checked === true;
}

function storedLegalAccepted() {
  return localStorage.getItem(LEGAL_ACCEPTED_KEY) === "true";
}

function setLegalGateStatus(message, tone = "") {
  const el = $("#legalGateStatus");
  if (!el) return;
  el.textContent = message;
  el.className = `status ${tone}`.trim();
}

function renderLegalStep() {
  const accepted = storedLegalAccepted();
  document.body.classList.toggle("legal-step-complete", accepted);
  if ($("#legalGate")) $("#legalGate").hidden = accepted;
  if ($("#appShell")) $("#appShell").hidden = !accepted;
  if ($("#generateButton")) $("#generateButton").disabled = !accepted;
  if ($("#enterAppButton")) $("#enterAppButton").disabled = !legalAccepted();
}

function updateLegalGate() {
  if ($("#enterAppButton")) $("#enterAppButton").disabled = !legalAccepted();
  if ($("#generateButton")) $("#generateButton").disabled = !storedLegalAccepted();
}

function requireLegalAcceptance() {
  if (storedLegalAccepted()) return true;
  setStatus(t("legalRequired"), "error");
  setLegalGateStatus(t("legalRequired"), "error");
  renderLegalStep();
  $("#legalAccepted")?.focus();
  return false;
}

function enterApp() {
  if (!legalAccepted()) {
    setLegalGateStatus(t("legalRequired"), "error");
    $("#legalAccepted")?.focus();
    return;
  }
  localStorage.setItem(LEGAL_ACCEPTED_KEY, "true");
  setLegalGateStatus("");
  renderLegalStep();
  focusMenuEntry();
}

function formatBytes(bytes) {
  const value = Number(bytes || 0);
  if (!Number.isFinite(value) || value <= 0) return "0 KB";
  if (value < 1024 * 1024) return `${Math.max(1, Math.round(value / 1024))} KB`;
  return `${(value / (1024 * 1024)).toFixed(1)} MB`;
}

async function compressMenuImage(file) {
  if (!file || !file.type?.startsWith("image/")) return { file, changed: false };
  if (file.type === "image/gif") return { file, changed: false };

  try {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, MENU_IMAGE_MAX_EDGE / Math.max(bitmap.width, bitmap.height));
    const width = Math.max(1, Math.round(bitmap.width * scale));
    const height = Math.max(1, Math.round(bitmap.height * scale));
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d", { alpha: false });
    context.drawImage(bitmap, 0, 0, width, height);
    bitmap.close?.();

    const blob = await new Promise((resolve) => {
      canvas.toBlob(resolve, "image/jpeg", MENU_IMAGE_JPEG_QUALITY);
    });
    if (!blob || blob.size >= file.size) return { file, changed: false };

    const compressed = new File([blob], file.name.replace(/\.[^.]+$/, "") + "-dishkai-compressed.jpg", {
      type: "image/jpeg",
      lastModified: Date.now(),
    });
    return { file: compressed, changed: true, originalSize: file.size, compressedSize: compressed.size, width, height };
  } catch (error) {
    console.warn("DishKAI image compression failed; uploading original image.", error);
    return { file, changed: false };
  }
}

async function checkPrivateAccess() {
  try {
    const { result } = await fetchJson("/api/private-status", { cache: "no-store" });
    setPrivateAccess(Boolean(result.authenticated));
    setPrivateStatus(result.authenticated ? t("privateUnlocked") : t("privateLocked"), result.authenticated ? "" : "error");
  } catch {
    setPrivateAccess(false);
    setPrivateStatus(t("privateLocked"), "error");
  }
  updatePrivateAccessVisibility();
}

async function submitPrivateAccess(event) {
  event.preventDefault();
  const accessCode = $("#privateAccessCode").value;
  const { response, result } = await fetchJson("/api/private-login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ accessCode }),
  });
  if (!response.ok || !result.ok) {
    setPrivateAccess(false);
    setPrivateStatus(apiErrorMessage(result, t("privateDenied")), "error");
    return;
  }
  $("#privateAccessCode").value = "";
  setPrivateAccess(true);
  setPrivateStatus(t("privateUnlocked"));
  focusMenuEntry();
}

async function clearRecentScans() {
  const { response, result } = await fetchJson("/api/clear-recent-scans", { method: "POST" });
  if (!response.ok || result.error) {
    setPrivateStatus(apiErrorMessage(result, t("privateDenied")), "error");
    return;
  }
  setPrivateStatus(result.message || t("clearScansDone"));
}

async function logoutPrivateAccess() {
  await fetch("/api/private-logout", { method: "POST" }).catch(() => {});
  clearPrivateLocalData();
  setPrivateAccess(false);
  setPrivateStatus(t("privateLocked"), "error");
}

function clearPrivateLocalData() {
  localStorage.removeItem("dishkai-pdc-state");
  pdcState = { rounds: [] };
  renderPdcRounds();
}

async function analyzeText() {
  if (!requireLegalAcceptance()) return;
  const menuText = $("#menuText").value.trim();
  if (!menuText) {
    setStatus(t("noItems"), "error");
    return;
  }
  setStatus(t("loading"));
  const { response, result } = await fetchJson("/api/analyze-menu-text", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      menuText,
      sourceLanguage: "auto",
      targetLanguage: $("#targetLanguage").value,
    }),
  });
  if (!response.ok || !result.ok) {
    if (response.status === 401) setPrivateAccess(false);
    setStatus(apiErrorMessage(result, t("noItems")), "error");
    return;
  }
  latestResult = result;
  renderAnalysis(result);
  setStatus(`${result.items.length} ${t("summary")}.`);
  $("#visual-menu").scrollIntoView({ behavior: "smooth", block: "start" });
}

async function analyzeImage() {
  if (!requireLegalAcceptance()) return;
  const image = $("#menuImage").files[0];
  if (!image) {
    setStatus(t("imageUnavailable"), "error");
    return;
  }
  setStatus(t("loading"));
  const uploadImage = await compressMenuImage(image);
  if (uploadImage.changed) {
    setStatus(template("compressionStatus", {
      from: formatBytes(uploadImage.originalSize),
      to: formatBytes(uploadImage.compressedSize),
    }));
  }
  const formData = new FormData();
  formData.append("image", uploadImage.file);
  formData.append("sourceLanguage", "auto");
  formData.append("targetLanguage", $("#targetLanguage").value);
  const { response, result } = await fetchJson("/api/analyze-menu-image", { method: "POST", body: formData });
  if (!response.ok || !result.ok) {
    if (response.status === 401) setPrivateAccess(false);
    setStatus(apiErrorMessage(result, t("imageUnavailable")), "error");
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
  const aiGenerated = result.items.filter((item) => item.matchStatus === "ai-generated").length;
  const unmatched = result.items.filter((item) => item.matchStatus === "unmatched").length;
  const aiSummary = aiGenerated ? `<span>${aiGenerated} ${t("aiEstimated")}</span>` : "";
  $("#menuSummary").innerHTML = `
    <span>${result.items.length} ${t("summary")}</span>
    <span>${matched} ${t("matched")}</span>
    ${aiSummary}
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
    const thumbPath = safeImagePath(card.thumbPath || card.imagePath);
    const thumbMarkup = thumbPath ? `<span class="menu-card-thumb" aria-hidden="true"><img src="${escapeAttribute(thumbPath)}" alt="" loading="lazy"></span>` : "";
    const tags = (card.iconTags || []).slice(0, 5).map((tag) => `<span class="icon-tag" title="${escapeHtml(tag.label)}">${tag.icon ? `${tag.icon} ` : ""}${escapeHtml(tag.label)}</span>`).join("");
    const statusLabel = item.matchStatus === "matched" ? t("tapForDetails") : item.matchStatus === "ai-generated" ? t("aiGenerated") : t("tapForEstimate");
    return `
      <article class="menu-card ${item.matchStatus}" data-order-index="${item.orderIndex}">
        <button class="menu-card-button ${thumbPath ? "has-thumb" : "no-thumb"}" type="button" data-open-card="${item.orderIndex}">
          <span class="order-index">${item.orderIndex}</span>
          ${thumbMarkup}
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
  const imagePath = safeImagePath(card.imagePath);
  const composition = (card.composition || []).map((part) => `
    <li><span>${escapeHtml(part.name || part.role)}</span><strong>${Number(part.estimatedPercent || 0)}%</strong></li>
  `).join("") || `<li><span>—</span><strong></strong></li>`;
  const tags = (card.iconTags || []).map((tag) => `<span class="icon-tag">${tag.icon} ${escapeHtml(tag.label)}</span>`).join("");
  const variations = renderVariations(card.commonVariations);
  const unverified = card.verified === false && card.metadataSource === "ai-fallback" ? `<p class="notice">${t("aiGenerated")}</p>` : "";
  $("#dishCard").className = "knowledge-card";
  $("#dishCard").innerHTML = `
    <div class="knowledge-image">${imagePath ? `<img src="${escapeAttribute(imagePath)}" alt="" loading="lazy">` : ""}</div>
    <div class="knowledge-copy">
      <p class="eyebrow">${escapeHtml(card.cuisineName || item.matchStatus)}</p>
      <h3>${escapeHtml(card.familiarName || item.cleanName || item.originalName)}</h3>
      <p class="original-name"><strong>${t("original")}:</strong> ${escapeHtml(item.originalName)}</p>
      <p class="verdict">${escapeHtml(card.orderVerdict || t("unknownNote"))}</p>
      <p class="notice">${escapeHtml(card.aiImageLabel || t("aiImageLabel"))}</p>
      ${unverified}
      ${card.cuisineRole?.note ? `<p>${escapeHtml(card.cuisineRole.note)}</p>` : ""}
      <dl>
        <div><dt>${t("description")}</dt><dd>${escapeHtml(card.shortDescription || t("unknownNote"))}</dd></div>
        <div><dt>${t("preparation")}</dt><dd>${renderCooking(card.cooking)}</dd></div>
        <div><dt>${t("composition")}</dt><dd><ul class="composition-list">${composition}</ul></dd></div>
        <div><dt>${t("taste")}</dt><dd>${listText(card.basicTaste)}</dd></div>
        <div><dt>${t("flavor")}</dt><dd>${listText(card.distinctiveFlavorSources)}</dd></div>
        <div><dt>${t("texture")}</dt><dd>${listText(card.texture)}</dd></div>
        ${variations ? `<div><dt>${t("variations")}</dt><dd>${variations}</dd></div>` : ""}
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

function renderVariations(variations) {
  if (!Array.isArray(variations) || !variations.length) return "";
  return `<ul class="variation-list">${variations.map((variation) => `
    <li><strong>${escapeHtml(variation.label || "")}</strong><span>${escapeHtml(variation.note || "")}</span></li>
  `).join("")}</ul>`;
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

const pdcCouncils = {
  product: [
    role("rex-velocity", "Rex Velocity", "雷克斯", "产品增长合伙人", "让用户现在行动", ["点击理由", "增长", "行动速度"], "判断用户为什么会点开、开始、完成、继续、分享。", "激进、直接、急性子、结果导向。", "用户行动、第一眼吸引力、完成率、继续率、分享欲。", "很美但没人用的产品、过度解释、慢吞吞的验证。", "可能过度追求短期钩子。", ["用户为什么要现在行动？", "30秒内用户能得到什么？", "这个入口有没有点击理由？"], "增长、冷启动、首屏转化、行动钩子。", "短、狠、直接。"),
    role("vera-flow", "Vera Flow", "维拉", "UX 合伙人", "让用户第一秒看懂", ["UX", "清晰度", "路径"], "降低理解成本，清理用户路径，让用户知道下一步。", "冷静、精准、极简。", "首屏理解、按钮清楚、路径顺畅、认知负担。", "信息过载、抽象概念堆砌、按钮混乱。", "可能过度简化，削弱情绪价值。", ["用户第一秒知道该做什么吗？", "哪一步会让用户想关闭？", "这个文案是不是太长？"], "页面体验、流程设计、入口优化。", "简短、精准、像手术刀。"),
    role("max-build", "Max Build", "马克斯", "执行合伙人", "把想法变成行动", ["执行", "时间盒", "交付"], "把讨论转化为任务、时间线、负责人和验证标准。", "务实、自律、强推进。", "明天做什么、怎么验证、交付顺序。", "没有行动的讨论、没有负责人、没有时间表。", "可能太任务化，忽略人味。", ["明天到底做哪三件事？", "这个方案如何验证？", "谁负责，什么时候完成？"], "行动计划、MVP、复盘。", "清单式、推进式。"),
    role("nina-ember", "Nina Ember", "妮娜", "社群冷启动合伙人", "找到第一批火种人", ["冷启动", "关系", "种子用户"], "找到第一批真实回应者，设计私聊邀请和内测关系链。", "温暖、现实、社交敏感。", "种子用户、真实反馈、私聊、转介绍。", "公开撒网、把人当流量。", "可能比强增长打法慢。", ["谁会认真回应你？", "第一批火种人在哪里？", "这个邀请像推广还是像邀请？"], "冷启动、社群、内测。", "温暖但现实。"),
    role("wang-zhibai", "Wang Zhibai / 王之白", "王之白", "视觉设计合伙人", "定义视觉语言和留白", ["视觉", "留白", "品牌感"], "塑造视觉语言、版式、留白、节奏和品牌记忆点。", "克制、安静、有审美。", "视觉一致性、留白、字体、色彩、结果卡。", "颜色太多、普通 AI 工具感。", "可能过度打磨。", ["这看起来像 MapKAI 吗？", "视觉是否清晰、有记忆点？", "颜色和留白是否克制？"], "品牌视觉、界面质感、结果卡。", "安静、挑剔、审美精准。"),
    role("owen-insight", "Owen Insight", "欧文", "用户洞察合伙人", "听懂礼貌反馈背后的真话", ["用户洞察", "反馈", "反自嗨"], "分辨真实反馈和礼貌性好评，识别用户犹豫点。", "共情、敏锐、怀疑表面好评。", "用户原话、真实动机、犹豫、但是。", "创始人自嗨、把朋友鼓励当市场信号。", "可能过度分析。", ["用户是真的理解，还是只是在客气？", "用户原话里的“但是”是什么？", "如果不是你发给他，他还会点吗？"], "用户反馈、内测复盘、定位验证。", "温和但刺痛。"),
    role("adrian-north", "Adrian North", "阿德里安", "战略合伙人", "守住长期方向", ["战略", "长期", "定位"], "判断短期动作是否符合长期方向和产品主线。", "冷静、宏观、长期主义。", "产品定位、长期复利、战略一致性。", "追热点、短期诱惑、频繁转向。", "可能太抽象。", ["这会不会带偏长期主线？", "三年后这件事还重要吗？", "这是否增强你的战略位置？"], "长期定位、职业方向、资源选择。", "冷静、高位。"),
    role("orion-zhuge", "Orion Zhuge / 诸葛观辰", "诸葛观辰", "象征时机合伙人", "观察时机、象和隐藏势能", ["时机", "象征", "隐喻"], "提供象征性、隐喻性、非线性的时机判断。", "神秘、冷静、幽默。", "气口、时机、门是否打开、火是否点燃。", "纯机械判断、没有人味。", "可能太玄。", ["从象征视角看，这件事的势在哪里？", "现在是点火、蓄势还是转向？", "门开了吗，火点了吗？"], "时机判断、直觉补充。", "有画面感，但说明不是预测。"),
    role("mira-ethos", "Mira Ethos", "米拉", "镜像完整性合伙人", "守住语言边界和镜子感", ["边界", "伦理", "镜子感"], "防止产品语言过度定义用户，守住可信度和心理边界。", "优雅、克制、敏感。", "语言边界、命中感、可信度。", "伪心理学、人格标签、过度营销。", "可能太谨慎。", ["这句话是否过度定义用户？", "它是镜子，还是标签？", "是否有命中感但保留边界？"], "结果页文案、自我探索、心理边界。", "克制、优雅、精准。"),
  ],
  personal: [
    role("strategist", "The Strategist", "长线战略者", "长线战略者", "判断三年后的长期价值", ["长期", "职业", "复利"], "判断选择是否符合长期职业价值、人生主线和身份变化。", "冷静、长期主义、系统化。", "长期复利、职业主线、身份升级。", "短期兴奋、随机转向。", "可能过度理性。", ["这个选择三年后还重要吗？", "它会增强我的长期位置吗？", "它让我更接近什么身份？"], "EMBA、职业转型、创业投入。", "冷静、高位、长期视角。"),
    role("builder", "The Builder", "现实建造者", "现实建造者", "把人生选择变成现实动作", ["执行", "资源", "行动"], "判断选择如何落地，需要多少时间、钱、精力和下一步行动。", "务实、具体、清单化。", "时间、资源、行动路径、可验证结果。", "没有行动的宏大愿景。", "可能低估精神价值。", ["这件事明天怎么落地？", "每周要投入多少小时？", "30天后怎么判断？"], "行动计划、时间管理、决策实验。", "现实、直接、清单式。"),
    role("learner", "The Learner", "终身学习者", "终身学习者", "判断学习是否真正有效", ["学习", "认知", "知识结构"], "判断选择是否带来真实知识、认知升级和可迁移能力。", "好奇、系统化、重视输入质量。", "学习效率、知识结构、反馈循环。", "为了安全感而学习。", "可能把学习当成逃避行动。", ["这个选择让我学到什么真实能力？", "是系统学习，还是买安全感？", "学到的东西能不能马上实践？"], "EMBA、课程、学习路径、AI 能力建设。", "理性、好奇、结构化。"),
    role("creator", "The Creator", "创造者", "创造者", "逼你把想法变成作品", ["创造", "作品", "表达"], "判断选择是否增加作品、创造力、公开表达和真实输出。", "有想象力、冲动、热爱作品。", "产品、文章、视频、公开表达。", "只学习不输出。", "可能过度追求输出。", ["一年后这个选择会留下什么作品？", "它会增加我的创造力吗？", "我是在创造，还是在准备创造？"], "创业项目、个人品牌、内容输出。", "有热情、有画面感。"),
    role("guardian", "The Guardian", "守护者", "守护者", "守住健康、家庭和基本稳定", ["家庭", "健康", "精力"], "判断选择是否伤害身体、家庭、睡眠、财务和情绪稳定。", "稳重、保护性强、现实。", "健康、家庭、睡眠、金钱、情绪。", "用燃烧自己证明成长。", "可能过度保守。", ["这个选择会伤害家庭节奏吗？", "我的身体和精力承受得了吗？", "我是不是在用透支换成长？"], "高负荷选择、家庭平衡。", "温和、坚定、保护你。"),
    role("challenger", "The Challenger", "反对者", "反对者", "拆穿自我欺骗", ["反驳", "真相", "自欺检测"], "挑战最舒服的答案，拆穿虚荣、逃避、从众和伪战略。", "尖锐、直接、不讨好。", "真实动机、隐藏恐惧、自我欺骗。", "自我感动、虚荣包装。", "可能过度尖锐。", ["我是不是在骗自己？", "这是战略，还是害怕承认浪费？", "我真正不敢面对的是什么？"], "重大选择、纠结、反复合理化。", "尖锐、像审问。"),
    role("connector", "The Connector", "关系连接者", "关系连接者", "判断关系、人脉和圈层价值", ["人脉", "关系", "圈层"], "判断选择会带来哪些人、关系、导师、合作和社交资本。", "社交敏感、现实、懂关系价值。", "人脉质量、同伴、导师、合作机会。", "高估空泛人脉、低估真实关系。", "可能高估圈层价值。", ["这个选择会让我遇见什么人？", "这些关系是真资源，还是名片？", "家人和重要关系如何受影响？"], "EMBA、人脉、职业圈层。", "现实、细腻、关系导向。"),
    role("inner-compass", "The Inner Compass", "内在罗盘", "内在罗盘", "判断是否接近真正想成为的人", ["意义", "身份", "价值观"], "判断选择是否符合价值观、身份一致性和后悔最小化。", "安静、深刻、关注意义。", "价值观、意义感、身份、自我一致性。", "看起来合理但内在不对的选择。", "可能太抽象。", ["这个选择让我更接近想成为的人吗？", "如果五年后回看，我会后悔什么？", "这个决定和我的人生原则一致吗？"], "人生方向、身份变化、价值观冲突。", "安静、深刻。"),
    role("wild-oracle", "The Wild Oracle", "野性预言者", "野性预言者", "用象征和直觉看时机", ["直觉", "时机", "象征"], "从隐喻、直觉、时机和势能角度提供非线性提醒。", "野性、诗意、神秘。", "气口、门、火、风向、时机。", "过度理性、完全忽视直觉。", "可能太玄。", ["从象征看，现在是出手、蓄势还是转向？", "这件事的气口在哪里？", "我的直觉在提醒什么？"], "直觉校准、时机判断、人生转折。", "诗意、有画面感，但说明不是预测。"),
  ],
};

function role(id, name, cnName, cnRole, shortTrait, tags, core, personality, cares, hates, blind, questions, bestFor, style) {
  return { id, name, cn_name: cnName, cn_role: cnRole, short_trait: shortTrait, tags, core_responsibility: core, personality, cares_about: cares, hates, blind_spot: blind, typical_questions: questions, best_for: bestFor, speaking_style: style };
}

const quickSelections = {
  product: ["rex-velocity", "vera-flow", "max-build"],
  personal: ["strategist", "builder", "challenger"],
};

const pdcLoadingText = {
  individual_debate: "独立参会人正在形成各自判断……",
  auto_group_debate: "自动分组正在融合各自立场……",
};

function loadPdcState() {
  try {
    return JSON.parse(localStorage.getItem("dishkai-pdc-state")) || { rounds: [] };
  } catch {
    return { rounds: [] };
  }
}

function savePdcState() {
  localStorage.setItem("dishkai-pdc-state", JSON.stringify(pdcState));
}

function loadPdcGroupingSettings() {
  try {
    return JSON.parse(localStorage.getItem("personalPdcCustomGroups")) || {};
  } catch {
    return {};
  }
}

function savePdcGroupingSettings() {
  const settings = {
    council_type: currentCouncilType(),
    discussion_style: currentDiscussionStyle(),
    group_count: currentGroupCount(),
    selected_agents: selectedPdcAgents(),
  };
  localStorage.setItem("personalPdcCustomGroups", JSON.stringify(settings));
}

function setPdcStatus(message, tone = "") {
  const el = $("#pdcStatus");
  if (!el) return;
  el.textContent = message;
  el.className = `status ${tone}`.trim();
}

function openPdcRoom() {
  const section = $("#personal-pdc");
  section.hidden = false;
  restorePdcGroupingSettings();
  renderPdcRoleCards();
  updatePdcDiscussionUi();
  renderPdcRounds();
  section.scrollIntoView({ behavior: "smooth", block: "start" });
}

function currentCouncilType() {
  return $("#pdcCouncilType")?.value || "product";
}

function currentCouncilAgents() {
  return pdcCouncils[currentCouncilType()] || pdcCouncils.product;
}

function currentDiscussionStyle() {
  return $("#pdcDiscussionStyle")?.value || "individual_debate";
}

function currentGroupCount() {
  return Math.max(1, Number($("#pdcGroupCount")?.value || 1));
}

function selectedPdcAgents() {
  return Array.from(document.querySelectorAll(".role-card.selected")).map((card) => card.dataset.agentId);
}

function restorePdcGroupingSettings() {
  const settings = loadPdcGroupingSettings();
  if (settings.council_type && $("#pdcCouncilType")) $("#pdcCouncilType").value = settings.council_type;
  if (settings.discussion_style && $("#pdcDiscussionStyle")) $("#pdcDiscussionStyle").value = settings.discussion_style;
  if (settings.group_count && $("#pdcGroupCount")) $("#pdcGroupCount").value = settings.group_count;
}

function renderPdcRoleCards(selectedIds = loadPdcGroupingSettings().selected_agents || []) {
  const container = $("#pdcRoleGrid");
  if (!container) return;
  const selected = new Set(selectedIds.filter((id) => currentCouncilAgents().some((agent) => agent.id === id)));
  container.innerHTML = currentCouncilAgents().map((agent) => `
    <article class="role-card ${selected.has(agent.id) ? "selected" : ""}" data-agent-id="${agent.id}">
      <div class="role-card-head">
        <div>
          <h4>${escapeHtml(agent.name)} / ${escapeHtml(agent.cn_name)}</h4>
          <p>${escapeHtml(agent.cn_role)}</p>
        </div>
        <button class="role-check" type="button" aria-label="选择 ${escapeHtml(agent.cn_name)}">✓</button>
      </div>
      <p>${escapeHtml(agent.short_trait)}</p>
      <div class="role-tags">${agent.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
      <details class="role-detail">
        <summary>查看详情</summary>
        <dl>
          <div><dt>核心职责</dt><dd>${escapeHtml(agent.core_responsibility)}</dd></div>
          <div><dt>性格特点</dt><dd>${escapeHtml(agent.personality)}</dd></div>
          <div><dt>最在乎什么</dt><dd>${escapeHtml(agent.cares_about)}</dd></div>
          <div><dt>最讨厌什么</dt><dd>${escapeHtml(agent.hates)}</dd></div>
          <div><dt>典型盲点</dt><dd>${escapeHtml(agent.blind_spot)}</dd></div>
          <div><dt>常问的问题</dt><dd>${escapeHtml(agent.typical_questions.join(" / "))}</dd></div>
          <div><dt>适合参与什么决策</dt><dd>${escapeHtml(agent.best_for)}</dd></div>
          <div><dt>典型发言风格</dt><dd>${escapeHtml(agent.speaking_style)}</dd></div>
        </dl>
      </details>
    </article>
  `).join("");
  container.querySelectorAll(".role-card").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("details")) return;
      card.classList.toggle("selected");
      updatePdcDiscussionUi();
      savePdcGroupingSettings();
    });
  });
  updatePdcDiscussionUi();
}

function selectPdcAgents(ids) {
  const selected = new Set(ids);
  document.querySelectorAll(".role-card").forEach((card) => {
    card.classList.toggle("selected", selected.has(card.dataset.agentId));
  });
  updatePdcDiscussionUi();
  savePdcGroupingSettings();
}

function selectedOrDefaultAgents() {
  const selected = selectedPdcAgents();
  return selected.length ? selected : currentCouncilAgents().map((agent) => agent.id);
}

function updatePdcDiscussionUi() {
  const grouped = currentDiscussionStyle() === "auto_group_debate";
  $("#pdcGroupCountWrap").hidden = !grouped;
  updatePdcCallEstimate();
  renderAutoGroupPreview();
}

function autoAssignGroups(selectedIds, groupCount) {
  const ids = [...new Set(selectedIds)];
  if (!ids.length) return [];
  const count = Math.max(1, Math.min(Number(groupCount) || 1, ids.length));
  const groups = Array.from({ length: count }, () => []);
  ids.forEach((id, index) => groups[index % count].push(id));
  return groups;
}

function buildAutoGroups() {
  return autoAssignGroups(selectedOrDefaultAgents(), currentGroupCount()).map((memberIds, index) => ({
    group_id: `group_${index + 1}`,
    group_name: `第 ${index + 1} 组`,
    group_purpose: "融合组内成员特征，对当前决策形成一个小组立场。",
    member_ids: memberIds,
  }));
}

function renderAutoGroupPreview() {
  const container = $("#pdcAutoGroupPreview");
  if (!container) return;
  if (currentDiscussionStyle() !== "auto_group_debate") {
    container.innerHTML = "";
    return;
  }
  const agentById = new Map(currentCouncilAgents().map((agent) => [agent.id, agent]));
  container.innerHTML = buildAutoGroups().map((group) => `
    <section class="auto-group-card">
      <h4>${escapeHtml(group.group_name)}</h4>
      <ul>
        ${group.member_ids.map((id) => {
          const agent = agentById.get(id);
          return `<li>${escapeHtml(agent?.name || id)} / ${escapeHtml(agent?.cn_name || "")}：${escapeHtml(agent?.short_trait || "")}</li>`;
        }).join("")}
      </ul>
    </section>
  `).join("");
  updatePdcCallEstimate();
}

function estimatePdcCalls() {
  const selectedCount = selectedOrDefaultAgents().length;
  if (currentDiscussionStyle() === "individual_debate") return selectedCount;
  return Math.min(currentGroupCount(), selectedCount);
}

function updatePdcCallEstimate() {
  const el = $("#pdcCallEstimate");
  if (el) el.textContent = `预计 AI 调用次数：${estimatePdcCalls()}`;
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/"/g, "&quot;");
}

function safeImagePath(value) {
  const path = String(value || "").trim();
  if (!path) return "";
  if (path.startsWith("/assets/dishes/")) return path;
  if (path.startsWith("assets/dishes/")) return `/${path}`;
  return "";
}

async function startPdcRound(event) {
  event.preventDefault();
  if (!privateAccessGranted) {
    setPdcStatus(t("privateDenied"), "error");
    return;
  }
  const topic = $("#pdcTopic").value.trim();
  const context = $("#pdcContext").value.trim();
  const discussionStyle = currentDiscussionStyle();
  if (!topic) {
    setPdcStatus("请输入决策议题。", "error");
    return;
  }

  pdcState = {
    topic,
    context,
    council_type: currentCouncilType(),
    meeting_mode: discussionStyle,
    selected_agents: selectedOrDefaultAgents(),
    group_count: currentGroupCount(),
    custom_groups: discussionStyle === "auto_group_debate" ? buildAutoGroups() : [],
    previous_summary: "",
    rounds: [],
  };
  savePdcState();
  savePdcGroupingSettings();
  setPdcStatus(pdcLoadingText[discussionStyle] || "合伙人正在进入会议室……");
  await callPdcRound({ mode: "round_1a" });
}

async function continuePdcRound(event) {
  event.preventDefault();
  if (!privateAccessGranted) {
    setPdcStatus(t("privateDenied"), "error");
    return;
  }
  const intervention = $("#pdcIntervention").value.trim();
  if (!intervention) {
    setPdcStatus("请先写下你想补充、追问或纠正的内容。", "error");
    return;
  }
  setPdcStatus("委员会正在根据你的补充继续讨论……");
  await callPdcRound({ mode: "user_intervention", user_intervention: intervention });
  $("#pdcIntervention").value = "";
}

async function callPdcRound({ mode, user_intervention = "" }) {
  try {
    const { response, result } = await fetchJson("/api/pdc-round", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        topic: pdcState.topic,
        context: pdcState.context,
        mode,
        council_type: pdcState.council_type || "product",
        meeting_mode: pdcState.meeting_mode || "individual_debate",
        selected_agents: pdcState.selected_agents || [],
        group_count: pdcState.group_count || 1,
        custom_groups: pdcState.custom_groups || [],
        previous_summary: typeof pdcState.previous_summary === "string" ? pdcState.previous_summary : JSON.stringify(pdcState.previous_summary || {}),
        user_intervention,
      }),
    });
    if (!response.ok || result.error) {
      if (response.status === 401) setPrivateAccess(false);
      throw new Error(apiErrorMessage(result, "PDC 暂时无法启动。请检查 Cloudflare Workers AI binding 是否配置为 AI。"));
    }

    pdcState.previous_summary = result.summary || pdcState.previous_summary || "";
    pdcState.rounds.push({
      mode,
      user_intervention,
      result,
      created_at: new Date().toISOString(),
    });
    savePdcState();
    renderPdcRounds();
    $("#pdcInterventionForm").hidden = false;
    setPdcStatus("PDC 本轮讨论完成。");
  } catch (error) {
    setPdcStatus(error.message || "PDC 暂时无法启动。请检查 Cloudflare Workers AI binding 是否配置为 AI。", "error");
  }
}

function renderPdcRounds() {
  const container = $("#pdcRounds");
  if (!container) return;
  const rounds = pdcState.rounds || [];
  container.innerHTML = rounds.map((round, index) => renderPdcRound(round, index)).join("");
  $("#pdcInterventionForm").hidden = !rounds.length;
  if (pdcState.topic && $("#pdcTopic") && !$("#pdcTopic").value) {
    $("#pdcTopic").value = pdcState.topic;
    $("#pdcContext").value = pdcState.context || "";
    if ($("#pdcCouncilType")) $("#pdcCouncilType").value = pdcState.council_type || "product";
    if ($("#pdcDiscussionStyle")) $("#pdcDiscussionStyle").value = normalizePdcUiMode(pdcState.meeting_mode);
    if ($("#pdcGroupCount")) $("#pdcGroupCount").value = pdcState.group_count || 3;
    renderPdcRoleCards(pdcState.selected_agents || []);
    updatePdcDiscussionUi();
  }
}

function normalizePdcUiMode(mode) {
  if (["team_debate", "preset_team_debate", "custom_team_debate", "hybrid_debate"].includes(mode)) return "auto_group_debate";
  if (mode === "quick_mode" || mode === "select_agents" || mode === "full_council") return "individual_debate";
  return mode || "individual_debate";
}

function renderPdcRound(round, index) {
  const result = round.result || {};
  const userCard = round.user_intervention ? `
    <article class="pdc-user-card">
      <h3>我的补充：</h3>
      <p>${escapeHtml(round.user_intervention)}</p>
    </article>
  ` : "";
  const cards = (result.participants || []).map(renderPdcParticipantCard).join("");
  return `
    <section class="pdc-round">
      <div class="pdc-round-title">
        <span>第 ${index + 1} 轮 · ${result.meeting_mode || round.mode}</span>
        <span>${round.mode === "user_intervention" ? "继续讨论" : "开场陈述"}</span>
      </div>
      ${userCard}
      ${cards}
      ${result.next_step ? `<p class="helper">${escapeHtml(result.next_step)}</p>` : ""}
    </section>
  `;
}

function renderPdcParticipantCard(participant) {
  const isTeam = participant.participant_type === "team";
  const members = isTeam ? `
    <ul class="member-list">
      ${(participant.members || []).map((member) => `<li>${escapeHtml(member.name)} · ${escapeHtml(member.role || member.responsibility || "")}</li>`).join("")}
    </ul>
  ` : "";
  const memberTraits = isTeam && participant.member_traits?.length
    ? `<div><dt>成员特征：</dt><dd>${escapeHtml(participant.member_traits.join("；"))}</dd></div>`
    : "";
  return `
    <article class="pdc-card ${isTeam ? "team-participant" : "agent-participant"}">
      <span class="participant-kind">${isTeam ? "小组发言" : "个人发言"}</span>
      <h3>${escapeHtml(participant.name)}</h3>
      <p class="pdc-role">${escapeHtml(participant.role_or_purpose)}</p>
      ${members}
      <dl>
        <div><dt>立场标签：</dt><dd>${escapeHtml(participant.decision_bias)}</dd></div>
        <div><dt>立场：</dt><dd>${escapeHtml(participant.position)}</dd></div>
        <div><dt>回应用户：</dt><dd>${escapeHtml(participant.response_to_user)}</dd></div>
        ${memberTraits}
        ${isTeam ? `<div><dt>组内张力：</dt><dd>${escapeHtml(participant.internal_tension)}</dd></div>` : ""}
        <div><dt>最强反驳：</dt><dd>${escapeHtml(participant.strongest_counterargument)}</dd></div>
        <div><dt>建议：</dt><dd>${escapeHtml(participant.recommendation)}</dd></div>
        <div><dt>风险：</dt><dd>${escapeHtml(participant.risk)}</dd></div>
        <div><dt>挑战：</dt><dd>${escapeHtml(participant.challenge)}</dd></div>
      </dl>
    </article>
  `;
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

$("#openPdcButton")?.addEventListener("click", openPdcRoom);
$("#pdcCouncilType")?.addEventListener("change", () => {
  renderPdcRoleCards([]);
  savePdcGroupingSettings();
});
$("#pdcDiscussionStyle")?.addEventListener("change", () => {
  updatePdcDiscussionUi();
  savePdcGroupingSettings();
});
$("#pdcGroupCount")?.addEventListener("input", () => {
  updatePdcDiscussionUi();
  savePdcGroupingSettings();
});
$("#pdcSelectAll")?.addEventListener("click", () => selectPdcAgents(currentCouncilAgents().map((agent) => agent.id)));
$("#pdcSelectProductQuick")?.addEventListener("click", () => {
  if ($("#pdcCouncilType")) $("#pdcCouncilType").value = "product";
  renderPdcRoleCards(quickSelections.product);
});
$("#pdcSelectPersonalQuick")?.addEventListener("click", () => {
  if ($("#pdcCouncilType")) $("#pdcCouncilType").value = "personal";
  renderPdcRoleCards(quickSelections.personal);
});
$("#pdcClearSelection")?.addEventListener("click", () => selectPdcAgents([]));
$("#pdcForm")?.addEventListener("submit", startPdcRound);
$("#pdcInterventionForm")?.addEventListener("submit", continuePdcRound);
$("#privateAccessForm")?.addEventListener("submit", submitPrivateAccess);
$("#clearRecentScans")?.addEventListener("click", clearRecentScans);
$("#privateLogout")?.addEventListener("click", logoutPrivateAccess);
$("#privateLogoutTop")?.addEventListener("click", logoutPrivateAccess);
window.addEventListener("hashchange", updatePrivateAccessVisibility);
$("#enterAppButton")?.addEventListener("click", enterApp);
if ($("#legalAccepted")) {
  $("#legalAccepted").checked = localStorage.getItem(LEGAL_ACCEPTED_KEY) === "true";
  $("#legalAccepted").addEventListener("change", updateLegalGate);
}
renderPdcRoleCards();
updatePdcDiscussionUi();
renderLegalStep();

incrementVisitCount();
applyLanguage();
checkPrivateAccess();
