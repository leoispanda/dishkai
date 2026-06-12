const PLACEHOLDER_IMAGE = "/assets/dishes/placeholders/dish-placeholder.svg";

export function starterDish(config) {
  const category = config.category || "main";
  const metadataCode = config.metadataCode;
  return {
    id: config.id,
    metadataCode,
    imageCode: config.imageCode || metadataCode,
    cuisineId: config.cuisineId,
    names: {
      canonical: config.names.en,
      local: config.names.local || config.names.en,
      en: config.names.en,
      zh: config.names.zh,
      nl: config.names.nl,
    },
    category,
    mealRole: config.mealRole || mealRoleFor(category),
    portionType: config.portionType || (["pizza", "bread", "fried-snack"].includes(category) ? "shareable" : "individual"),
    goodForSharing: Boolean(config.goodForSharing ?? ["pizza", "bread", "fried-snack", "starter"].includes(category)),
    cookingMethods: config.cookingMethods || [],
    servingTemperature: config.servingTemperature || servingTemperatureFor(category),
    rawnessLevel: config.rawnessLevel || "fully-cooked",
    shortDescription: config.shortDescription,
    cookingProfile: config.cookingProfile,
    cuisineRole: {
      level: config.cuisineRole?.level || "common",
      tags: config.cuisineRole?.tags || [],
      description: config.cuisineRole?.description || {
        en: "A useful starter-database reference dish for recognizing this cuisine on menus.",
        zh: "这是 DishKAI 初始数据库中用于识别该菜系菜单的参考菜。",
        nl: "Een nuttig referentiegerecht in de startdatabase voor het herkennen van deze keuken op menu's.",
      },
    },
    commonVariations: config.commonVariations || [],
    composition: (config.composition || []).map((component, index) => ({
      itemId: component[0],
      estimatedPercent: component[1],
      role: component[2],
      itemType: component[3] || "ingredient",
      amountLevel: amountLevel(component[1]),
      flavorImpact: component[4] || flavorImpact(component[1], component[3]),
      optional: Boolean(component[5]),
      displayPriority: index + 1,
    })),
    distinctiveFlavorSources: config.distinctiveFlavorSources || [],
    tasteProfile: {
      basic: config.basicTaste || [],
      intensity: config.tasteIntensity || "medium",
    },
    textureProfile: config.textureProfile || [],
    riskFlags: config.riskFlags || [],
    dietaryFlags: config.dietaryFlags || [],
    goodForTags: config.goodForTags || [],
    avoidIfTags: config.avoidIfTags || (config.riskFlags || []).map((flag) => flag.replace("contains-", "") + "-allergy"),
    orderVerdict: config.orderVerdict,
    confidenceTag: config.confidenceTag || "starter-metadata",
    spiceLevel: config.spiceLevel ?? 0,
    weightLevel: config.weightLevel ?? 2,
    acquiredTasteLevel: config.acquiredTasteLevel ?? 1,
    metadataConfidence: config.metadataConfidence ?? 0.76,
    restaurantVariationLevel: config.restaurantVariationLevel || "medium",
    imagePath: config.imagePath || PLACEHOLDER_IMAGE,
    thumbPath: config.thumbPath || PLACEHOLDER_IMAGE,
    visualDisclaimer: {
      en: "Visual reference only. Actual dish may vary by restaurant. Estimated composition.",
      zh: "图片仅供参考。实际出品会因餐厅而异。成分比例为估算。",
      nl: "Alleen visuele referentie. Het gerecht kan per restaurant verschillen. Samenstelling is geschat.",
    },
  };
}

function amountLevel(percent) {
  if (percent >= 30) return "high";
  if (percent >= 10) return "medium";
  return "low";
}

function flavorImpact(percent, itemType) {
  if (itemType === "seasoning" || percent <= 10) return "high";
  return "medium";
}

function mealRoleFor(category) {
  if (category === "dessert") return "dessert";
  if (["starter", "salad", "bread", "fried-snack"].includes(category)) return "starter-or-side";
  return "main";
}

function servingTemperatureFor(category) {
  if (["dessert", "salad", "raw-seafood"].includes(category)) return "cold-or-cool";
  return "hot";
}
