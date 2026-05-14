const translations = {
  en: {
    navCuisines: "Cuisines", navProfile: "Profile", navUpload: "Upload", navHistory: "History", navAbout: "About",
    heroEyebrow: "Dish Knowledge AI / Dish Know AI", heroTagline: "Know before you order.", heroSubtitle: "Build your dining profile, upload a menu photo, and get calm, personalized recommendations before you order.", startProfile: "Start profile", scanMenu: "Mock menu upload", todayPick: "Tonight's gentle pick", previewDish: "Spanakopita", previewReason: "Comforting, savory, herb-forward, and easy to share.",
    cuisinesEyebrow: "Cuisines", cuisinesTitle: "Explore flavor worlds without guessing.", profileEyebrow: "Dining Profile", profileTitle: "Tell DishKAI what your taste already knows.", likesLabel: "Likes", dislikesLabel: "Dislikes", allergiesLabel: "Allergies", dietLabel: "Diet type", spiceLabel: "Spice level", exploreLabel: "Exploration level", saveProfile: "Save mock profile", likesPlaceholder: "Crispy textures, herbs, noodles", dislikesPlaceholder: "Very sour food, organ meats", allergiesPlaceholder: "Peanuts, shellfish, dairy",
    menuEyebrow: "Upload Menu", menuTitle: "A quiet place for the menu photo.", menuUploadText: "Mock upload only. Future endpoint: POST /api/analyze-menu.", analyzeMenu: "Show recommendations",
    recommendEyebrow: "Recommendations", recommendTitle: "Three dishes that fit your profile.", receiptEyebrow: "Upload Receipt", receiptTitle: "Turn dinner into better future recommendations.", receiptUploadText: "Mock recognition only. Future endpoint: POST /api/analyze-receipt.", historyEyebrow: "Dining History", historyTitle: "A memory of what worked for you.", aboutEyebrow: "About", aboutTitle: "DishKAI is built for people who cross cultures through food.", aboutBody: "It starts with preference, explains unfamiliar dishes in familiar language, and learns from what you actually ate.", footerText: "Know before you order.", saved: "Mock profile saved for this session.", receiptFound: "Mock receipt recognized these dishes:", viewCuisine: "View classics", flavor: "Flavor profile", ingredients: "Common ingredients", classics: "Classic dishes", reason: "Why it fits", commonIngredients: "Common ingredients", allergens: "Possible allergens", similar: "Similar to", ask: "Ask the waiter", rating: "Rate this dish", loved: "Loved it", good: "Good", neutral: "Neutral", notForMe: "Not for me"
  },
  zh: {
    navCuisines: "菜系", navProfile: "偏好", navUpload: "上传", navHistory: "记录", navAbout: "关于",
    heroEyebrow: "Dish Knowledge AI / Dish Know AI", heroTagline: "点餐前，先真正了解你要吃什么。", heroSubtitle: "先建立饮食偏好，上传菜单照片，再获得安静、清晰、适合你的点餐建议。", startProfile: "建立偏好", scanMenu: "模拟上传菜单", todayPick: "今晚温和推荐", previewDish: "希腊菠菜派", previewReason: "咸香、草本感明显、适合分享，也不太冒险。",
    cuisinesEyebrow: "菜系", cuisinesTitle: "不用猜，也能进入陌生风味。", profileEyebrow: "饮食偏好", profileTitle: "把你已经知道的口味告诉 DishKAI。", likesLabel: "喜欢", dislikesLabel: "不喜欢", allergiesLabel: "过敏", dietLabel: "饮食方式", spiceLabel: "辣度", exploreLabel: "探索程度", saveProfile: "保存模拟偏好", likesPlaceholder: "酥脆口感、香草、面食", dislikesPlaceholder: "很酸、内脏类", allergiesPlaceholder: "花生、贝类、乳制品",
    menuEyebrow: "上传菜单", menuTitle: "给菜单照片一个安静的位置。", menuUploadText: "当前仅为模拟上传。未来接口：POST /api/analyze-menu。", analyzeMenu: "查看推荐",
    recommendEyebrow: "推荐结果", recommendTitle: "三道适合你偏好的菜。", receiptEyebrow: "上传小票", receiptTitle: "把这顿饭变成下一次更准的推荐。", receiptUploadText: "当前仅为模拟识别。未来接口：POST /api/analyze-receipt。", historyEyebrow: "用餐记录", historyTitle: "记住哪些味道真正适合你。", aboutEyebrow: "关于", aboutTitle: "DishKAI 为通过食物跨越文化的人而建。", aboutBody: "它从个人偏好开始，用熟悉的语言解释陌生菜品，并从你真实吃过的菜里学习。", footerText: "Know before you order.", saved: "已为本次会话保存模拟偏好。", receiptFound: "模拟小票识别出以下菜品：", viewCuisine: "查看经典菜", flavor: "风味特点", ingredients: "常见食材", classics: "经典菜", reason: "推荐理由", commonIngredients: "常见成分", allergens: "可能过敏原", similar: "类似什么", ask: "向服务员确认", rating: "给这道菜评分", loved: "非常喜欢", good: "不错", neutral: "一般", notForMe: "不适合我"
  }
};

const cuisines = [
  cuisine("indian", "Indian", "印度菜", "Layered spices, warm sauces, breads, rice, and vegetarian depth.", "香料层次丰富，有暖感酱汁、饼、米饭和很多素食选择。", ["warm spice", "creamy", "aromatic"], ["cumin", "coriander", "lentils", "yogurt"], ["Butter Chicken", "Palak Paneer", "Masala Dosa", "Biryani"]),
  cuisine("greek", "Greek", "希腊菜", "Bright herbs, olive oil, grilled meats, seafood, cheese, and lemon.", "香草、橄榄油、烤肉、海鲜、奶酪和柠檬构成明亮风味。", ["herby", "lemony", "grilled"], ["olive oil", "feta", "oregano", "lamb"], ["Spanakopita", "Moussaka", "Souvlaki", "Greek Salad"]),
  cuisine("spanish", "Spanish", "西班牙菜", "Shareable plates, smoky paprika, seafood rice, cured meats, and slow comfort.", "适合分享，有烟熏红椒粉、海鲜饭、腌肉和慢炖 comfort food。", ["smoky", "savory", "shareable"], ["paprika", "rice", "olive oil", "seafood"], ["Paella", "Tortilla Espanola", "Patatas Bravas", "Gazpacho"]),
  cuisine("japanese", "Japanese", "日本菜", "Clean balance, umami, rice, noodles, seafood, pickles, and careful texture.", "讲究清爽平衡、鲜味、米饭面条、海鲜、渍物和细致口感。", ["umami", "clean", "precise"], ["soy", "miso", "rice", "dashi"], ["Ramen", "Sushi", "Katsu Curry", "Okonomiyaki"]),
  cuisine("thai", "Thai", "泰国菜", "A lively balance of sweet, sour, spicy, salty, herbs, coconut, and lime.", "甜、酸、辣、咸、香草、椰奶和青柠之间的活泼平衡。", ["bright", "spicy", "herbal"], ["lime", "fish sauce", "basil", "coconut milk"], ["Pad Thai", "Green Curry", "Tom Yum", "Som Tum"]),
  cuisine("french", "French", "法餐", "Technique-led comfort, butter, sauces, roasted meats, pastry, and seasonal produce.", "以技法和舒适感见长，有黄油、酱汁、烤肉、酥皮和时令食材。", ["buttery", "saucy", "elegant"], ["butter", "wine", "cream", "mushrooms"], ["Coq au Vin", "Ratatouille", "Quiche Lorraine", "Duck Confit"]),
  cuisine("middle-eastern", "Middle Eastern", "中东菜", "Grilled meats, chickpeas, tahini, herbs, warm spices, flatbreads, and dips.", "烤肉、鹰嘴豆、芝麻酱、香草、暖香料、薄饼和蘸酱。", ["nutty", "grilled", "spiced"], ["tahini", "chickpeas", "parsley", "sumac"], ["Hummus", "Shakshuka", "Falafel", "Kebab"])
];

const dishes = [
  dish("spanakopita", "greek", "Spanakopita", "希腊菠菜派", "Flaky pastry filled with spinach, herbs, and feta.", "酥皮里包着菠菜、香草和菲达奶酪。", ["spinach", "feta", "phyllo"], ["dairy", "gluten"], ["herby", "savory", "vegetarian"], "vegetarian comfort seekers", "gluten-free or dairy-free diners", "a lighter savory pie", "Is the filling mostly spinach, and does it contain egg?"),
  dish("paella", "spanish", "Paella", "西班牙海鲜饭", "Saffron rice cooked with seafood, vegetables, and deep savory edges.", "藏红花米饭配海鲜和蔬菜，锅边有浓郁焦香。", ["rice", "saffron", "seafood"], ["shellfish"], ["savory", "shareable", "seafood"], "people who like rice dishes", "shellfish allergies", "fried rice with a deeper seafood base", "Which seafood is included today?"),
  dish("green-curry", "thai", "Green Curry", "泰式绿咖喱", "Coconut curry with green chiles, basil, vegetables, and your choice of protein.", "椰奶咖喱配绿辣椒、罗勒、蔬菜和蛋白质。", ["coconut milk", "green chile", "basil"], ["fish sauce", "shellfish possible"], ["spicy", "creamy", "herbal"], "curious diners who like gentle heat", "very low spice tolerance", "a brighter coconut stew", "Can the spice level be made mild, and is shrimp paste used?")
];

const history = [
  { place: "Athena Taverna", date: "2026-05-10", dish: "Spanakopita", rating: "Loved it" },
  { place: "Casa Alba", date: "2026-05-03", dish: "Patatas Bravas", rating: "Good" },
  { place: "Bangkok Table", date: "2026-04-25", dish: "Tom Yum", rating: "Neutral" }
];

let lang = localStorage.getItem("dishkai-lang") || "en";

function cuisine(id, en, zh, enIntro, zhIntro, flavor, ingredients, classics) {
  return { id, name: { en, zh }, intro: { en: enIntro, zh: zhIntro }, coverImage: `/images/cuisines/${id}.jpg`, flavorProfile: flavor, commonIngredients: ingredients, classicDishes: classics };
}

function dish(id, cuisineId, en, zh, enDesc, zhDesc, ingredients, allergens, tags, suitableFor, avoidIf, similarTo, askWaiter) {
  return { id, cuisine: cuisineId, name: { en, zh }, image: `/images/dishes/${id}.jpg`, description: { en: enDesc, zh: zhDesc }, ingredients, allergens, tasteTags: tags, suitableFor, avoidIf, similarTo, askWaiter };
}

function t(key) { return translations[lang][key] || translations.en[key] || key; }
function local(value) { return typeof value === "object" ? value[lang] : value; }

function applyLanguage() {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  document.querySelectorAll("[data-lang]").forEach((button) => button.classList.toggle("active", button.dataset.lang === lang));
  renderCuisines();
  renderCuisineDetail(cuisines[1]);
  renderRecommendations();
  renderReceiptResults();
  renderHistory();
}

function renderCuisines() {
  const grid = document.querySelector("#cuisineGrid");
  grid.innerHTML = cuisines.map((item) => `<article class="cuisine-card" data-cuisine="${item.id}" tabindex="0"><div class="card-image" role="img" aria-label="${local(item.name)}"></div><h3>${local(item.name)}</h3><p class="card-meta">${local(item.intro)}</p><div class="tag-row">${item.flavorProfile.map(tag => `<span>${tag}</span>`).join("")}</div><p class="card-meta"><strong>${t("viewCuisine")}</strong></p></article>`).join("");
  grid.querySelectorAll(".cuisine-card").forEach((card) => {
    card.addEventListener("click", () => selectCuisine(card.dataset.cuisine));
    card.addEventListener("keydown", (event) => { if (event.key === "Enter") selectCuisine(card.dataset.cuisine); });
  });
}

function selectCuisine(id) {
  const item = cuisines.find((c) => c.id === id) || cuisines[0];
  renderCuisineDetail(item);
  document.querySelector("#cuisine-detail").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderCuisineDetail(item) {
  document.querySelector("#cuisineDetail").innerHTML = `<div class="detail-layout"><div class="detail-panel"><p class="eyebrow">${t("flavor")}</p><h2>${local(item.name)}</h2><p class="card-meta">${local(item.intro)}</p><div class="tag-row">${item.flavorProfile.map(tag => `<span>${tag}</span>`).join("")}</div><p class="card-meta"><strong>${t("ingredients")}:</strong> ${item.commonIngredients.join(", ")}</p></div><div><p class="eyebrow">${t("classics")}</p><div class="classic-list">${item.classicDishes.map((name) => `<div class="classic-item"><h3>${name}</h3><p class="card-meta">${classicNote()}</p></div>`).join("")}</div></div></div>`;
}

function classicNote() {
  return lang === "zh" ? "第一版 mock 经典菜，后续可扩展成完整 Dish Card。" : "MVP mock classic dish, ready to become a full Dish Card later.";
}

function renderRecommendations() {
  const grid = document.querySelector("#recommendationGrid");
  grid.innerHTML = dishes.map((item) => `<article class="dish-card"><div class="card-image" role="img" aria-label="${local(item.name)}"></div><h3>${local(item.name)}</h3><p class="card-meta">${local(item.description)}</p><div class="tag-row">${item.tasteTags.map(tag => `<span>${tag}</span>`).join("")}</div><dl><div><dt>${t("reason")}</dt><dd>${item.suitableFor}</dd></div><div><dt>${t("commonIngredients")}</dt><dd>${item.ingredients.join(", ")}</dd></div><div><dt>${t("allergens")}</dt><dd>${item.allergens.join(", ")}</dd></div><div><dt>${t("similar")}</dt><dd>${item.similarTo}</dd></div><div><dt>${t("ask")}</dt><dd>${item.askWaiter}</dd></div></dl><div class="rating-row" aria-label="${t("rating")}">${ratingButtons(item.id)}</div></article>`).join("");
  bindRatings();
}

function ratingButtons(id) {
  return [["love", t("loved")], ["good", t("good")], ["neutral", t("neutral")], ["no", t("notForMe")]].map(([value, label]) => `<button data-dish="${id}" data-rating="${value}" type="button">${label}</button>`).join("");
}

function bindRatings() {
  document.querySelectorAll("[data-rating]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(`[data-dish="${button.dataset.dish}"]`).forEach((peer) => peer.classList.remove("selected"));
      button.classList.add("selected");
    });
  });
}

function renderReceiptResults() {
  const target = document.querySelector("#receiptResults");
  target.innerHTML = `<p class="card-meta"><strong>${t("receiptFound")}</strong></p><div class="rating-row"><button>${t("loved")}: Spanakopita</button><button>${t("good")}: Paella</button><button>${t("neutral")}: Green Curry</button></div>`;
}

function renderHistory() {
  document.querySelector("#historyList").innerHTML = history.map((item) => `<article class="history-card"><strong>${item.dish}</strong><span class="card-meta">${item.place} · ${item.date}</span><span>${item.rating}</span></article>`).join("");
}

document.querySelectorAll("[data-lang]").forEach((button) => button.addEventListener("click", () => {
  lang = button.dataset.lang;
  localStorage.setItem("dishkai-lang", lang);
  applyLanguage();
}));
document.querySelector("#profileForm").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#profileStatus").textContent = t("saved");
});
document.querySelector("#mockAnalyzeMenu").addEventListener("click", () => document.querySelector("#recommendations").scrollIntoView({ behavior: "smooth" }));
applyLanguage();
