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
let pdcState = loadPdcState();

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

const pdcAgents = [
  ["rex-velocity", "Rex Velocity"],
  ["vera-flow", "Vera Flow"],
  ["max-build", "Max Build"],
  ["nina-ember", "Nina Ember"],
  ["wang-zhibai", "Wang Zhibai / 王之白"],
  ["owen-insight", "Owen Insight"],
  ["adrian-north", "Adrian North"],
  ["orion-zhuge", "Orion Zhuge / 诸葛观辰"],
  ["mira-ethos", "Mira Ethos"],
];

const presetCustomGroups = [
  {
    group_id: "activation-team",
    group_name: "激活组",
    group_purpose: "论证这件事能不能马上动起来，并形成第一批真实行动。",
    member_ids: ["rex-velocity", "nina-ember", "max-build"],
  },
  {
    group_id: "experience-team",
    group_name: "体验组",
    group_purpose: "判断用户能否看懂、相信，并产生一点感觉。",
    member_ids: ["vera-flow", "wang-zhibai", "mira-ethos"],
  },
  {
    group_id: "judgment-team",
    group_name: "判断组",
    group_purpose: "判断这是否真是正确方向，而不是只看起来合理。",
    member_ids: ["owen-insight", "adrian-north", "orion-zhuge"],
  },
];

const pdcModeNotes = {
  quick_mode: "快速三人模式适合日常快速判断，会调用 Rex、Vera、Max。",
  individual_debate: "个人独立作战会按参会人数消耗 AI 调用。可减少参会人或使用小组模式。",
  preset_team_debate: "默认三组对抗调用 3 个小组，覆盖激活、体验、判断三个核心视角。",
  custom_team_debate: "自定义分组对抗按小组数量调用。每个小组至少需要 1 位成员。",
  hybrid_debate: "混合模式按小组数量 + 独立参会人数调用，可让未分组成员独立发言。",
};

const pdcLoadingText = {
  quick_mode: "快速小组正在形成初步判断……",
  individual_debate: "独立参会人正在形成各自判断……",
  preset_team_debate: "三个小组正在准备对抗观点……",
  custom_team_debate: "自定义小组正在准备对抗观点……",
  hybrid_debate: "小组与独立参会人正在进入会议室……",
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
    meeting_mode: $("#pdcMeetingMode")?.value || "preset_team_debate",
    selected_agents: selectedPdcAgents(),
    custom_groups: readCustomGroups({ allowEmpty: true }),
    include_ungrouped_as_individuals: Boolean($("#pdcIncludeUngrouped")?.checked),
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
  renderPdcRounds();
  section.scrollIntoView({ behavior: "smooth", block: "start" });
}

function updatePdcModeUi() {
  const mode = $("#pdcMeetingMode").value;
  const showsAgents = mode === "individual_debate" || mode === "hybrid_debate";
  const showsGroups = mode === "custom_team_debate" || mode === "hybrid_debate";
  $("#pdcAgentPicker").hidden = !showsAgents;
  $("#pdcCustomGroupTools").hidden = !showsGroups;
  $("#pdcCustomGroups").hidden = !showsGroups;
  $("#pdcHybridToggle").hidden = mode !== "hybrid_debate";
  if (showsGroups && !readCustomGroups({ allowEmpty: true }).length) addCustomGroup();
  $("#pdcModeNote").textContent = pdcModeNotes[mode] || pdcModeNotes.preset_team_debate;
  updatePdcCallEstimate();
  savePdcGroupingSettings();
}

function selectedPdcAgents() {
  return Array.from(document.querySelectorAll("#pdcAgentPicker input:checked")).map((input) => input.value);
}

function restorePdcGroupingSettings() {
  const settings = loadPdcGroupingSettings();
  if (settings.meeting_mode && $("#pdcMeetingMode")) $("#pdcMeetingMode").value = normalizePdcUiMode(settings.meeting_mode);
  document.querySelectorAll("#pdcAgentPicker input").forEach((input) => {
    input.checked = (settings.selected_agents || []).includes(input.value);
  });
  renderCustomGroups(settings.custom_groups || []);
  if ($("#pdcIncludeUngrouped")) $("#pdcIncludeUngrouped").checked = settings.include_ungrouped_as_individuals !== false;
  updatePdcModeUi();
}

function renderCustomGroups(groups) {
  const container = $("#pdcCustomGroups");
  if (!container) return;
  container.innerHTML = "";
  groups.forEach((group) => addCustomGroup(group));
  updatePdcCallEstimate();
}

function addCustomGroup(group = {}) {
  const container = $("#pdcCustomGroups");
  const index = container.children.length + 1;
  const groupId = group.group_id || `custom_group_${Date.now()}_${index}`;
  const selected = new Set(group.member_ids || []);
  const card = document.createElement("section");
  card.className = "custom-group-card";
  card.dataset.groupId = groupId;
  card.innerHTML = `
    <header>
      <h4>小组 ${index}</h4>
      <button class="remove-group" type="button">删除小组</button>
    </header>
    <label>
      <span>小组名称</span>
      <input class="group-name" type="text" value="${escapeAttribute(group.group_name || "")}" placeholder="例如：支持继续组 / 反对继续组 / 验证组">
    </label>
    <label>
      <span>小组任务 / 小组立场</span>
      <textarea class="group-purpose" rows="3" placeholder="例如：专门论证为什么应该继续读 EMBA">${escapeHtml(group.group_purpose || "")}</textarea>
    </label>
    <div class="group-member-grid">
      ${pdcAgents.map(([id, name]) => `
        <label><input type="checkbox" value="${id}" ${selected.has(id) ? "checked" : ""}> ${escapeHtml(name)}</label>
      `).join("")}
    </div>
  `;
  card.querySelector(".remove-group").addEventListener("click", () => {
    card.remove();
    renumberCustomGroups();
    updatePdcCallEstimate();
    savePdcGroupingSettings();
  });
  card.querySelectorAll("input, textarea").forEach((el) => {
    el.addEventListener("input", () => {
      validateCustomGroups();
      updatePdcCallEstimate();
      savePdcGroupingSettings();
    });
    el.addEventListener("change", () => {
      validateCustomGroups();
      updatePdcCallEstimate();
      savePdcGroupingSettings();
    });
  });
  container.appendChild(card);
  validateCustomGroups();
  updatePdcCallEstimate();
}

function renumberCustomGroups() {
  document.querySelectorAll(".custom-group-card h4").forEach((title, index) => {
    title.textContent = `小组 ${index + 1}`;
  });
}

function readCustomGroups({ allowEmpty = false } = {}) {
  return Array.from(document.querySelectorAll(".custom-group-card")).map((card, index) => ({
    group_id: card.dataset.groupId || `custom_group_${index + 1}`,
    group_name: card.querySelector(".group-name").value.trim() || `自定义小组 ${index + 1}`,
    group_purpose: card.querySelector(".group-purpose").value.trim(),
    member_ids: Array.from(card.querySelectorAll(".group-member-grid input:checked")).map((input) => input.value),
  })).filter((group) => allowEmpty || group.member_ids.length);
}

function validateCustomGroups() {
  const groups = readCustomGroups({ allowEmpty: true });
  const seen = new Map();
  const duplicates = [];
  groups.forEach((group) => {
    group.member_ids.forEach((id) => {
      if (seen.has(id)) duplicates.push(id);
      seen.set(id, group.group_id);
    });
  });
  if (duplicates.length) {
    setPdcStatus("同一位 agent 原则上只能加入一个小组，请调整重复成员。", "error");
    return false;
  }
  return true;
}

function estimatePdcCalls() {
  const mode = $("#pdcMeetingMode")?.value || "preset_team_debate";
  if (mode === "quick_mode") return 3;
  if (mode === "preset_team_debate") return 3;
  if (mode === "individual_debate") return selectedPdcAgents().length || 9;
  const groups = readCustomGroups({ allowEmpty: false });
  if (mode === "custom_team_debate") return Math.max(groups.length, 1);
  const selected = selectedPdcAgents().length ? selectedPdcAgents() : pdcAgents.map(([id]) => id);
  const grouped = new Set(groups.flatMap((group) => group.member_ids));
  const individualCount = $("#pdcIncludeUngrouped")?.checked ? selected.filter((id) => !grouped.has(id)).length : 0;
  return groups.length + individualCount;
}

function updatePdcCallEstimate() {
  const el = $("#pdcCallEstimate");
  if (el) el.textContent = `预计 AI 调用次数：${estimatePdcCalls()}`;
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/"/g, "&quot;");
}

async function startPdcRound(event) {
  event.preventDefault();
  const topic = $("#pdcTopic").value.trim();
  const context = $("#pdcContext").value.trim();
  const meetingMode = $("#pdcMeetingMode").value;
  if (!topic) {
    setPdcStatus("请输入决策议题。", "error");
    return;
  }

  pdcState = {
    topic,
    context,
    meeting_mode: meetingMode,
    selected_agents: selectedPdcAgents(),
    custom_groups: readCustomGroups(),
    include_ungrouped_as_individuals: Boolean($("#pdcIncludeUngrouped")?.checked),
    previous_summary: "",
    rounds: [],
  };
  if ((meetingMode === "custom_team_debate" || meetingMode === "hybrid_debate") && !pdcState.custom_groups.length) {
    setPdcStatus("请至少创建一个小组，并为每个小组选择成员。", "error");
    return;
  }
  if ((meetingMode === "custom_team_debate" || meetingMode === "hybrid_debate") && readCustomGroups({ allowEmpty: true }).some((group) => !group.member_ids.length)) {
    setPdcStatus("每个自定义小组至少需要一位成员；允许单人小组。", "error");
    return;
  }
  if (!validateCustomGroups()) return;
  savePdcState();
  savePdcGroupingSettings();
  setPdcStatus(pdcLoadingText[meetingMode] || "9 位合伙人正在进入会议室……");
  await callPdcRound({ mode: "round_1a" });
}

async function continuePdcRound(event) {
  event.preventDefault();
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
    const response = await fetch("/api/pdc-round", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        topic: pdcState.topic,
        context: pdcState.context,
        mode,
        meeting_mode: pdcState.meeting_mode || "preset_team_debate",
        selected_agents: pdcState.selected_agents || [],
        custom_groups: pdcState.custom_groups || [],
        include_ungrouped_as_individuals: Boolean(pdcState.include_ungrouped_as_individuals),
        previous_summary: typeof pdcState.previous_summary === "string" ? pdcState.previous_summary : JSON.stringify(pdcState.previous_summary || {}),
        user_intervention,
      }),
    });
    const result = await response.json();
    if (!response.ok || result.error) {
      throw new Error(result.message || "PDC 暂时无法启动。请检查 Cloudflare Workers AI binding 是否配置为 AI。");
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
    $("#pdcMeetingMode").value = normalizePdcUiMode(pdcState.meeting_mode);
    updatePdcModeUi();
  }
}

function normalizePdcUiMode(mode) {
  if (mode === "team_debate") return "preset_team_debate";
  if (mode === "select_agents" || mode === "full_council") return "individual_debate";
  return mode || "preset_team_debate";
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
$("#pdcMeetingMode")?.addEventListener("change", updatePdcModeUi);
document.querySelectorAll("#pdcAgentPicker input").forEach((input) => {
  input.addEventListener("change", () => {
    updatePdcCallEstimate();
    savePdcGroupingSettings();
  });
});
$("#pdcIncludeUngrouped")?.addEventListener("change", () => {
  updatePdcCallEstimate();
  savePdcGroupingSettings();
});
$("#pdcAddGroup")?.addEventListener("click", () => {
  addCustomGroup();
  savePdcGroupingSettings();
});
$("#pdcUsePresetGroups")?.addEventListener("click", () => {
  renderCustomGroups(presetCustomGroups);
  savePdcGroupingSettings();
});
$("#pdcClearGroups")?.addEventListener("click", () => {
  renderCustomGroups([]);
  updatePdcCallEstimate();
  savePdcGroupingSettings();
});
$("#pdcForm")?.addEventListener("submit", startPdcRound);
$("#pdcInterventionForm")?.addEventListener("submit", continuePdcRound);
updatePdcModeUi();

applyLanguage();
