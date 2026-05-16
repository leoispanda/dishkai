const cookingProfiles = {
  "carbonara": {
    en: "Boiled pasta is tossed with egg, cheese, cured pork, and black pepper into a silky, rich sauce.",
    zh: "煮熟的意面会和鸡蛋、奶酪、腌猪肉、黑胡椒拌成顺滑浓郁的酱感。",
    nl: "Gekookte pasta wordt gemengd met ei, kaas, gezouten varkensvlees en zwarte peper tot een zijdezachte, rijke saus.",
  },
  "margherita-pizza": {
    en: "Dough is baked with tomato, mozzarella, basil, and olive oil until the crust is airy and the cheese melts.",
    zh: "面团与番茄、马苏里拉、罗勒和橄榄油一起烘烤，形成蓬松饼底和融化奶酪。",
    nl: "Deeg wordt gebakken met tomaat, mozzarella, basilicum en olijfolie tot de korst luchtig is en de kaas smelt.",
  },
  "lasagna": {
    en: "Pasta sheets, sauce, bechamel, and cheese are layered and baked into a soft, rich dish.",
    zh: "面片、酱汁、白酱和奶酪层层叠放后烘烤，形成柔软浓郁的口感。",
    nl: "Pastavellen, saus, bechamel en kaas worden in lagen opgebouwd en gebakken tot een zacht en rijk gerecht.",
  },
  "risotto": {
    en: "Rice is slowly cooked with broth and finished with butter or cheese for a creamy, flowing texture.",
    zh: "米饭用高汤慢慢煮出淀粉感，再用黄油或奶酪收尾，形成浓稠顺滑的质地。",
    nl: "Rijst wordt langzaam gegaard met bouillon en afgewerkt met boter of kaas voor een romige, vloeiende textuur.",
  },
  "gnocchi": {
    en: "Soft dumplings are boiled and then served with sauce, giving a pillowy and comforting texture.",
    zh: "柔软团子煮熟后搭配酱汁，口感偏软糯、舒适。",
    nl: "Zachte deegkussentjes worden gekookt en met saus geserveerd, wat een zachte en comfortabele textuur geeft.",
  },
  "tiramisu": {
    en: "Coffee-soaked ladyfingers and mascarpone cream are layered, then chilled into a soft creamy dessert.",
    zh: "咖啡浸泡的手指饼和马斯卡彭奶油层层叠放，冷藏后形成柔软奶油质地。",
    nl: "In koffie gedoopte lange vingers en mascarponeroom worden in lagen opgebouwd en gekoeld tot een zacht romig dessert.",
  },
  "caprese-salad": {
    en: "Fresh tomato, mozzarella, basil, and olive oil are served raw and assembled for a cool, light dish.",
    zh: "新鲜番茄、马苏里拉、罗勒和橄榄油以冷食方式组合，整体清爽轻盈。",
    nl: "Verse tomaat, mozzarella, basilicum en olijfolie worden rauw samengesteld tot een koel en licht gerecht.",
  },
  "bruschetta": {
    en: "Bread is toasted until crisp, then topped with fresh tomato, garlic, basil, and olive oil.",
    zh: "面包烤至酥脆后，搭配新鲜番茄、蒜、罗勒和橄榄油。",
    nl: "Brood wordt knapperig geroosterd en daarna belegd met verse tomaat, knoflook, basilicum en olijfolie.",
  },
  "pesto-pasta": {
    en: "Boiled pasta is tossed with basil pesto, giving it a glossy, herbal, and nutty coating.",
    zh: "煮熟的意面与罗勒青酱拌合，形成油润、草本、带坚果香的包裹感。",
    nl: "Gekookte pasta wordt gemengd met basilicumpesto, waardoor een glanzende, kruidige en nootachtige laag ontstaat.",
  },
  "osso-buco": {
    en: "Veal shank is braised until tender, creating a rich, saucy, slow-cooked meat dish.",
    zh: "小牛膝经过慢炖变得软烂，形成浓郁带酱汁感的肉类主菜。",
    nl: "Kalfsschenkel wordt gestoofd tot hij mals is, waardoor een rijk en sauzig langzaam gegaard vleesgerecht ontstaat.",
  },
  "ravioli": {
    en: "Filled pasta parcels are boiled and served with sauce, so the experience depends strongly on the filling.",
    zh: "夹心面皮煮熟后搭配酱汁，整体体验很大程度取决于馅料。",
    nl: "Gevulde pastakussentjes worden gekookt en met saus geserveerd, waardoor de ervaring sterk afhangt van de vulling.",
  },
  "parmigiana-di-melanzane": {
    en: "Eggplant, tomato sauce, and cheese are layered and baked into a soft, saucy, cheesy dish.",
    zh: "茄子、番茄酱和奶酪层层叠放后烘烤，形成柔软、多汁、奶酪感明显的菜。",
    nl: "Aubergine, tomatensaus en kaas worden in lagen gebakken tot een zacht, sauzig en kazig gerecht.",
  },
  "minestrone": {
    en: "Vegetables, beans, and sometimes pasta or rice are simmered into a warm, brothy soup.",
    zh: "蔬菜、豆类，有时还有意面或米饭，会一起慢煮成温热的汤菜。",
    nl: "Groenten, bonen en soms pasta of rijst worden gesudderd tot een warme, bouillonachtige soep.",
  },
  "focaccia": {
    en: "Flat bread is baked with olive oil and herbs, giving it an airy center and lightly crisp surface.",
    zh: "扁面包与橄榄油和香草一起烘烤，形成内部蓬松、表面微脆的口感。",
    nl: "Plat brood wordt gebakken met olijfolie en kruiden, met een luchtige binnenkant en licht krokante bovenkant.",
  },
  "panna-cotta": {
    en: "Cream is gently set and chilled into a smooth, soft dessert, often served with fruit sauce or caramel.",
    zh: "奶油凝固定型后冷藏，形成顺滑柔软的甜点，常配水果酱或焦糖。",
    nl: "Room wordt zachtjes opgesteven en gekoeld tot een glad, zacht dessert, vaak met fruitensaus of karamel.",
  },
};

export const italianDishes = [
  dish("carbonara", "101001", "Carbonara", "卡邦尼意面", "Carbonara", "pasta", ["boiled", "sauce-tossed"], [["spaghetti", 55, "base"], ["egg", 15, "sauce-base"], ["guanciale-or-pancetta", 15, "protein"], ["pecorino", 10, "sauce-base"], ["black-pepper", 5, "seasoning", "seasoning"]], ["pecorino", "black-pepper"], ["salty", "umami", "creamy"], ["silky sauce", "firm pasta", "chewy cured pork"], ["contains-egg", "contains-dairy"], "A rich, salty pasta choice for diners who like cheese, egg, black pepper, and cured pork."),
  dish("margherita-pizza", "101002", "Margherita Pizza", "玛格丽特披萨", "Pizza margherita", "pizza", ["baked"], [["pizza-dough", 55, "base"], ["tomato-sauce", 20, "sauce-base"], ["mozzarella", 20, "topping"], ["basil", 3, "finish"], ["olive-oil", 2, "finish", "seasoning"]], ["basil", "olive-oil"], ["mild", "savory", "creamy"], ["airy crust", "melted cheese"], ["contains-dairy"], "A simple classic if you want tomato, melted mozzarella, and a lighter pizza profile."),
  dish("lasagna", "101003", "Lasagna", "意式千层面", "Lasagne", "pasta", ["layered", "baked"], [["pasta-sheets", 30, "base"], ["meat-ragu", 30, "sauce-base"], ["cream", 15, "sauce-base"], ["cheese", 15, "topping"], ["tomato-sauce", 10, "sauce-base", "seasoning"]], ["tomato-sauce", "parmesan"], ["savory", "creamy", "umami"], ["soft layers", "saucy center"], ["contains-dairy"], "A hearty baked choice when you want soft layers, meat sauce, and cheese."),
  dish("risotto", "101004", "Risotto", "意式烩饭", "Risotto", "rice", ["simmered", "stirred"], [["arborio-rice", 55, "base"], ["broth", 25, "sauce-base"], ["butter", 10, "finish"], ["parmesan", 8, "finish"], ["wine", 2, "aroma"]], ["parmesan", "olive-oil"], ["creamy", "umami", "mild"], ["creamy rice", "flowing texture"], ["contains-dairy"], "A creamy rice dish that feels softer and richer than plain rice."),
  dish("gnocchi", "101005", "Gnocchi", "意式土豆团子", "Gnocchi", "pasta", ["boiled", "sauce-tossed"], [["potato-gnocchi", 65, "base"], ["tomato-sauce", 20, "sauce"], ["parmesan", 10, "finish"], ["butter", 5, "finish"]], ["tomato-sauce", "parmesan"], ["mild", "savory", "creamy"], ["pillowy", "soft"], ["contains-dairy"], "A soft, comforting choice if you like dumpling-like textures with sauce."),
  dish("tiramisu", "101006", "Tiramisu", "提拉米苏", "Tiramisu", "dessert", ["layered", "chilled"], [["ladyfingers", 35, "base"], ["mascarpone", 35, "cream"], ["coffee", 15, "soak"], ["cocoa", 5, "finish"], ["egg", 5, "cream"], ["sugar", 5, "sweetener"]], ["coffee", "cocoa"], ["sweet", "creamy", "bitter"], ["soft layers", "creamy"], ["contains-dairy", "contains-egg"], "A soft creamy dessert with coffee and cocoa notes rather than bright fruitiness."),
  dish("caprese-salad", "101007", "Caprese Salad", "卡普雷塞沙拉", "Caprese salade", "salad", ["raw", "assembled"], [["tomato", 40, "base"], ["mozzarella", 35, "base"], ["basil", 10, "aroma"], ["olive-oil", 10, "finish", "seasoning"], ["balsamic-vinegar", 5, "finish", "seasoning"]], ["basil", "olive-oil", "balsamic-vinegar"], ["mild", "fresh", "creamy"], ["juicy tomato", "soft cheese"], ["contains-dairy"], "A cool, light option built around tomato, mozzarella, basil, and olive oil."),
  dish("bruschetta", "101008", "Bruschetta", "番茄烤面包", "Bruschetta", "starter", ["toasted", "assembled"], [["bread", 45, "base"], ["tomato", 30, "topping"], ["garlic", 10, "aroma"], ["basil", 10, "aroma"], ["olive-oil", 5, "finish", "seasoning"]], ["garlic", "basil", "olive-oil"], ["fresh", "savory", "tangy"], ["crisp bread", "juicy topping"], [], "A crisp starter if you want fresh tomato and garlic on toasted bread."),
  dish("pesto-pasta", "101009", "Pesto Pasta", "罗勒青酱意面", "Pestopasta", "pasta", ["boiled", "sauce-tossed"], [["pasta", 65, "base"], ["pesto", 25, "sauce", "seasoning"], ["parmesan", 5, "finish"], ["pine-nuts", 5, "aroma"]], ["pesto", "basil", "parmesan"], ["herbal", "umami", "oily"], ["glossy coating", "springy pasta"], ["contains-dairy"], "A herbal, nutty pasta choice with a glossy basil sauce."),
  dish("osso-buco", "101010", "Osso Buco", "炖小牛膝", "Osso buco", "meat", ["braised"], [["veal-shank", 65, "base"], ["broth", 15, "sauce-base"], ["wine", 10, "sauce-base"], ["vegetables", 5, "aroma"], ["lemon", 5, "finish"]], ["rosemary", "garlic"], ["savory", "rich", "umami"], ["tender meat", "saucy"], [], "A slow-cooked meat dish for diners who want tender veal and a rich sauce."),
  dish("ravioli", "101011", "Ravioli", "意式夹心面", "Ravioli", "pasta", ["boiled", "sauce-tossed"], [["ravioli-dough", 45, "base"], ["cheese", 25, "filling"], ["vegetables", 15, "filling"], ["tomato-sauce", 10, "sauce"], ["parmesan", 5, "finish"]], ["tomato-sauce", "parmesan"], ["savory", "mild", "creamy"], ["soft parcels", "filled center"], ["contains-dairy", "contains-egg"], "A filled pasta where the filling matters; good if you like soft pasta parcels."),
  dish("parmigiana-di-melanzane", "101012", "Parmigiana di Melanzane", "帕玛森烤茄子", "Parmigiana di melanzane", "vegetable-main", ["layered", "baked"], [["eggplant", 45, "base"], ["tomato-sauce", 25, "sauce"], ["mozzarella", 15, "layer"], ["parmesan", 10, "finish"], ["basil", 5, "aroma"]], ["tomato-sauce", "basil", "parmesan"], ["savory", "creamy", "umami"], ["soft eggplant", "saucy layers"], ["contains-dairy"], "A soft, saucy vegetarian-style baked dish with tomato and cheese."),
  dish("minestrone", "101013", "Minestrone", "意式蔬菜汤", "Minestrone", "soup", ["simmered"], [["vegetables", 40, "base"], ["beans", 20, "body"], ["broth", 20, "soup-base"], ["pasta", 10, "starch"], ["tomato", 10, "base"]], ["tomato-sauce", "sea-salt"], ["mild", "savory", "brothy"], ["soft vegetables", "warm broth"], [], "A warm vegetable soup that is usually lighter than creamy or meaty dishes."),
  dish("focaccia", "101014", "Focaccia", "佛卡夏", "Focaccia", "bread", ["baked"], [["wheat-flour", 55, "base"], ["olive-oil", 20, "richness", "seasoning"], ["herbs", 10, "aroma"], ["rosemary", 10, "aroma"], ["sea-salt", 5, "finish", "seasoning"]], ["olive-oil", "rosemary", "sea-salt"], ["salty", "oily", "herbal"], ["airy center", "lightly crisp surface"], [], "A bready, olive-oil-rich choice that works well for sharing or starting a meal."),
  dish("panna-cotta", "101015", "Panna Cotta", "意式奶冻", "Panna cotta", "dessert", ["set", "chilled"], [["cream", 55, "base"], ["sugar", 20, "sweetener"], ["gelatin", 10, "set"], ["vanilla", 5, "aroma", "seasoning"], ["fruit-sauce-or-caramel", 10, "topping"]], ["vanilla"], ["sweet", "creamy", "mild"], ["smooth", "soft set"], ["contains-dairy"], "A smooth chilled dessert for diners who want gentle creaminess rather than cake."),
];

function dish(id, metadataCode, en, zh, nl, category, cookingMethods, composition, distinctiveFlavorSources, basicTaste, textureProfile, riskFlags, verdict) {
  return {
    id,
    metadataCode,
    imageCode: metadataCode,
    cuisineId: "italian",
    names: { canonical: en, en, zh, nl },
    category,
    mealRole: category === "dessert" ? "dessert" : category === "starter" || category === "salad" || category === "bread" ? "starter-or-side" : "main",
    portionType: category === "pizza" || category === "bread" ? "shareable" : "individual",
    goodForSharing: ["pizza", "starter", "bread"].includes(category),
    cookingMethods,
    servingTemperature: category === "dessert" || category === "salad" ? "cold-or-cool" : "hot",
    rawnessLevel: category === "salad" ? "raw-assembled" : "fully-cooked",
    shortDescription: {
      en: `${en} is a classic Italian ${category.replace("-", " ")} with a familiar, ordering-focused profile.`,
      zh: `${zh} 是一道经典意大利${categoryLabelZh(category)}，这里用点餐视角说明口感和风险。`,
      nl: `${nl} is een klassiek Italiaans gerecht met een helder bestelprofiel.`,
    },
    cookingProfile: cookingProfiles[id],
    cuisineRole: {
      level: ["carbonara", "margherita-pizza", "lasagna", "risotto", "tiramisu"].includes(id) ? "classic" : "common",
      tags: ["classic", "internationally-known"],
      description: {
        en: "A recognizable Italian dish, but not automatically a restaurant house special unless the menu says so.",
        zh: "这是有代表性的意大利菜，但只有菜单明确标注时才算餐厅招牌或推荐。",
        nl: "Een herkenbaar Italiaans gerecht, maar geen huisspecialiteit tenzij het menu dat vermeldt.",
      },
    },
    composition: composition.map(([itemId, estimatedPercent, role, itemType = "ingredient"], index) => ({
      itemId,
      itemType,
      role,
      estimatedPercent,
      amountLevel: estimatedPercent >= 30 ? "high" : estimatedPercent >= 10 ? "medium" : "low",
      flavorImpact: itemType === "seasoning" || estimatedPercent <= 10 ? "high" : "medium",
      optional: false,
      displayPriority: index + 1,
    })),
    distinctiveFlavorSources,
    tasteProfile: { basic: basicTaste, intensity: "medium" },
    textureProfile,
    riskFlags,
    dietaryFlags: [],
    goodForTags: ["classic-dish"],
    avoidIfTags: riskFlags.map((flag) => flag.replace("contains-", "") + "-allergy"),
    orderVerdict: {
      en: verdict,
      zh: `${zh}适合想要${shortExpectationZh(category)}的点餐场景；点之前留意过敏和奶酪/鸡蛋等成分。`,
      nl: verdict,
    },
    confidenceTag: "starter-metadata",
    spiceLevel: 0,
    weightLevel: ["lasagna", "osso-buco", "carbonara"].includes(id) ? 4 : 2,
    acquiredTasteLevel: ["osso-buco"].includes(id) ? 2 : 1,
    metadataConfidence: 0.78,
    restaurantVariationLevel: "medium",
    imagePath: `/assets/dishes/main/${metadataCode}-${id}.webp`,
    thumbPath: `/assets/dishes/thumb/${metadataCode}-${id}.webp`,
    visualDisclaimer: {
      en: "Visual reference only. Actual dish may vary by restaurant. Estimated composition.",
      zh: "图片仅供参考。实际出品会因餐厅而异。成分比例为估算。",
      nl: "Alleen visuele referentie. Het gerecht kan per restaurant verschillen. Samenstelling is geschat.",
    },
  };
}

function categoryLabelZh(category) {
  const labels = { pasta: "意面", pizza: "披萨", rice: "米饭类", dessert: "甜点", salad: "沙拉", starter: "前菜", meat: "肉类主菜", soup: "汤", bread: "面包" };
  return labels[category] || "菜品";
}

function shortExpectationZh(category) {
  const labels = { dessert: "甜点", salad: "清爽冷食", soup: "温热汤感", meat: "浓郁肉类主菜", bread: "面包和分享", pizza: "披萨", pasta: "意面" };
  return labels[category] || "经典意大利风味";
}
