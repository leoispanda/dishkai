export const seasonings = [
  { id: "fish-sauce", names: { en: "fish sauce", zh: "鱼露", nl: "vissaus" }, basicTaste: ["salty", "umami"], distinctiveFlavor: "fish-sauce-umami", allergens: ["fish"] },
  { id: "tamarind", names: { en: "tamarind", zh: "罗望子", nl: "tamarinde" }, basicTaste: ["sour", "sweet"], distinctiveFlavor: "tamarind-sweet-sour-tang", allergens: [] },
  { id: "palm-sugar", names: { en: "palm sugar", zh: "棕榈糖", nl: "palmsuiker" }, basicTaste: ["sweet"], distinctiveFlavor: "warm-caramel-sweetness", allergens: [] },
  { id: "chili", names: { en: "chili", zh: "辣椒", nl: "chili" }, basicTaste: ["spicy"], distinctiveFlavor: "fresh-chili-heat", allergens: [] },
  seasoning("olive-oil", "301001", "olive oil", "橄榄油", "olijfolie", ["oily", "mild"], "green-fruity-olive-oil", []),
  seasoning("black-pepper", "301002", "black pepper", "黑胡椒", "zwarte peper", ["spicy", "warm"], "peppery-warm-bite", []),
  seasoning("basil", "301003", "basil", "罗勒", "basilicum", ["herbal", "fresh"], "basil-fresh-herbal-aroma", []),
  seasoning("oregano", "301004", "oregano", "牛至", "oregano", ["herbal"], "oregano-dry-mediterranean-aroma", []),
  seasoning("rosemary", "301005", "rosemary", "迷迭香", "rozemarijn", ["herbal", "piney"], "rosemary-woody-pine-aroma", []),
  seasoning("balsamic-vinegar", "301006", "balsamic vinegar", "意大利黑醋", "balsamicoazijn", ["sweet", "sour"], "balsamic-sweet-sour-depth", []),
  seasoning("parmesan", "301007", "parmesan", "帕玛森奶酪", "Parmezaan", ["salty", "umami"], "parmesan-aged-cheese-umami", ["dairy"]),
  seasoning("pecorino", "301008", "pecorino", "佩科里诺奶酪", "pecorino", ["salty", "umami"], "pecorino-salty-sheep-cheese", ["dairy"]),
  seasoning("pesto", "301009", "pesto", "罗勒青酱", "pesto", ["herbal", "oily", "umami"], "pesto-basil-nut-cheese-aroma", ["dairy", "tree-nut"]),
  seasoning("tomato-sauce", "301010", "tomato sauce", "番茄酱汁", "tomatensaus", ["sweet", "sour", "umami"], "tomato-sauce-sweet-sour-savory", []),
  seasoning("garlic", "301011", "garlic", "蒜", "knoflook", ["pungent", "savory"], "garlic-pungent-aroma", []),
  seasoning("sea-salt", "301012", "sea salt", "海盐", "zeezout", ["salty"], "clean-salinity", []),
  seasoning("vanilla", "301013", "vanilla", "香草", "vanille", ["sweet", "aromatic"], "vanilla-soft-dessert-aroma", []),
  seasoning("cocoa", "301014", "cocoa", "可可", "cacao", ["bitter"], "cocoa-dry-bittersweet", []),
  seasoning("coffee", "301015", "coffee", "咖啡", "koffie", ["bitter", "roasty"], "coffee-roasted-bitterness", []),
];

function seasoning(id, metadataCode, en, zh, nl, basicTaste, distinctiveFlavor, allergens) {
  return { id, metadataCode, names: { en, zh, nl }, basicTaste, distinctiveFlavor, allergens };
}
