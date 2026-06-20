import { starterDish } from "./starter-dish.js";

export const worldDishes = [
  starterDish({
    "id": "moussaka",
    "metadataCode": "104001",
    "cuisineId": "greek",
    "names": {
      "en": "Moussaka",
      "zh": "希腊肉酱茄子烤菜",
      "nl": "Moussaka",
      "local": "μουσακάς"
    },
    "category": "meat",
    "cookingMethods": [
      "baked",
      "layered"
    ],
    "shortDescription": {
      "en": "Layered baked eggplant, spiced minced meat, and bechamel-style sauce; rich and casserole-like.",
      "zh": "希腊肉酱茄子烤菜：烤茄子、香料肉末和白酱层层叠起，浓郁柔软，像希腊风味焗菜。",
      "nl": "Moussaka: gelaagde ovenschotel met aubergine, gekruid gehakt en bechamelsaus; rijk en zacht."
    },
    "cookingProfile": {
      "en": "baked and built in layers; expect soft layered eggplant, creamy top and meaty sauce.",
      "zh": "通常烘烤并层叠制作后上桌，点餐时可预期：烤茄子、香料肉末和白酱层层叠起，浓郁柔软，像希腊风味焗菜。",
      "nl": "Meestal gebakken in de oven en in lagen opgebouwd; verwacht vooral: gelaagde ovenschotel met aubergine, gekruid gehakt en bechamelsaus; rijk en zacht."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "classic-dish",
        "comfort-food"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "eggplant-global",
        30,
        "vegetable layer"
      ],
      [
        "ground-meat",
        30,
        "spiced meat layer"
      ],
      [
        "bechamel-sauce",
        20,
        "creamy top"
      ],
      [
        "tomato-sauce",
        10,
        "sauce base",
        "seasoning"
      ],
      [
        "feta",
        5,
        "salty accent"
      ],
      [
        "cinnamon",
        5,
        "warm spice",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "bechamel richness",
      "warm cinnamon",
      "oregano"
    ],
    "basicTaste": [
      "savory",
      "rich",
      "mildly spiced"
    ],
    "textureProfile": [
      "soft layered eggplant",
      "creamy top",
      "meaty sauce"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "classic-dish",
      "comfort-food"
    ],
    "avoidIfTags": [
      "wants-light-food",
      "avoids-dairy"
    ],
    "orderVerdict": {
      "en": "Order if you want a hearty baked main with eggplant, meat, and dairy richness; avoid if you want something light or dairy-free.",
      "zh": "想要烤茄子、香料肉末和白酱层层叠起，浓郁柔软，像希腊风味焗菜时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je gelaagde ovenschotel met aubergine, gekruid gehakt en bechamelsaus; rijk en zacht wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "souvlaki",
    "metadataCode": "104002",
    "cuisineId": "greek",
    "names": {
      "en": "Souvlaki",
      "zh": "希腊烤肉串",
      "nl": "Souvlaki",
      "local": "σουβλάκι"
    },
    "category": "meat",
    "cookingMethods": [
      "grilled",
      "assembled"
    ],
    "shortDescription": {
      "en": "Grilled meat skewers, often pork or chicken, served with pita, salad, lemon, and yogurt sauce.",
      "zh": "希腊烤肉串：烤肉串常配皮塔、沙拉、柠檬和酸奶酱，重点是炭烤肉香。",
      "nl": "Souvlaki: gegrilde vleesspiesjes met pita, salade, citroen en yoghurtsaus; vooral rokerig en hartig."
    },
    "cookingProfile": {
      "en": "grilled over high heat and assembled to order; expect grilled meat, soft pita and cool sauce.",
      "zh": "通常高温烤制并现拌或组合后上桌，点餐时可预期：烤肉串常配皮塔、沙拉、柠檬和酸奶酱，重点是炭烤肉香。",
      "nl": "Meestal op hoge hitte gegrild en samengesteld; verwacht vooral: gegrilde vleesspiesjes met pita, salade, citroen en yoghurtsaus; vooral rokerig en hartig."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "street-food",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A street-food style menu reference; the verified card explains the usual handheld or casual format and common risks.",
        "zh": "街头小吃风格的菜单项；已审核卡片说明常见食用形式和风险。",
        "nl": "Een streetfoodachtig menu-item; de geverifieerde kaart legt vorm en risico's uit."
      }
    },
    "composition": [
      [
        "pork",
        35,
        "usual skewer meat"
      ],
      [
        "pita",
        25,
        "wrap or side"
      ],
      [
        "mixed-vegetables",
        15,
        "salad garnish"
      ],
      [
        "yogurt",
        10,
        "cool sauce"
      ],
      [
        "olive-oil",
        5,
        "grilling gloss",
        "seasoning"
      ],
      [
        "oregano",
        5,
        "herbal aroma",
        "seasoning"
      ],
      [
        "lemon",
        5,
        "bright finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "oregano",
      "lemon",
      "charred meat"
    ],
    "basicTaste": [
      "savory",
      "herbal",
      "lightly tangy"
    ],
    "textureProfile": [
      "grilled meat",
      "soft pita",
      "cool sauce"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "street-food",
      "first-timer-friendly"
    ],
    "avoidIfTags": [
      "avoids-pork",
      "avoids-gluten"
    ],
    "orderVerdict": {
      "en": "Order if you want char-grilled meat in a simple pita-and-salad format; avoid if pork, gluten, or yogurt sauce are a problem.",
      "zh": "想要烤肉串常配皮塔、沙拉、柠檬和酸奶酱，重点是炭烤肉香时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je gegrilde vleesspiesjes met pita, salade, citroen en yoghurtsaus; vooral rokerig en hartig wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "gyros",
    "metadataCode": "104003",
    "cuisineId": "greek",
    "names": {
      "en": "Gyros",
      "zh": "希腊旋转烤肉卷",
      "nl": "Gyros",
      "local": "γύρος"
    },
    "category": "meat",
    "cookingMethods": [
      "grilled",
      "assembled"
    ],
    "shortDescription": {
      "en": "Shaved rotisserie-style meat in or beside pita, usually with tomato, onion, fries, and tzatziki.",
      "zh": "希腊旋转烤肉卷：旋转烤肉片配皮塔、蔬菜、薯条和酸奶黄瓜酱，咸香又有饱腹感。",
      "nl": "Gyros: geschaafd geroosterd vlees met pita, groente, friet en tzatziki; hartig en vullend."
    },
    "cookingProfile": {
      "en": "grilled over high heat and assembled to order; expect juicy shaved meat, soft pita and crisp fries.",
      "zh": "通常高温烤制并现拌或组合后上桌，点餐时可预期：旋转烤肉片配皮塔、蔬菜、薯条和酸奶黄瓜酱，咸香又有饱腹感。",
      "nl": "Meestal op hoge hitte gegrild en samengesteld; verwacht vooral: geschaafd geroosterd vlees met pita, groente, friet en tzatziki; hartig en vullend."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "street-food",
        "safe-choice"
      ],
      "description": {
        "en": "A street-food style menu reference; the verified card explains the usual handheld or casual format and common risks.",
        "zh": "街头小吃风格的菜单项；已审核卡片说明常见食用形式和风险。",
        "nl": "Een streetfoodachtig menu-item; de geverifieerde kaart legt vorm en risico's uit."
      }
    },
    "composition": [
      [
        "shawarma-meat",
        35,
        "rotisserie-style meat"
      ],
      [
        "pita",
        25,
        "wrap base"
      ],
      [
        "fries",
        15,
        "filling or side"
      ],
      [
        "mixed-vegetables",
        10,
        "fresh garnish"
      ],
      [
        "yogurt",
        10,
        "tzatziki-style sauce"
      ],
      [
        "oregano",
        5,
        "herbal aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "rotisserie meat",
      "garlic yogurt",
      "oregano"
    ],
    "basicTaste": [
      "savory",
      "creamy",
      "herbal"
    ],
    "textureProfile": [
      "juicy shaved meat",
      "soft pita",
      "crisp fries"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "street-food",
      "safe-choice"
    ],
    "avoidIfTags": [
      "wants-light-food",
      "avoids-dairy"
    ],
    "orderVerdict": {
      "en": "Order if you want a filling street-food wrap with shaved meat and cool sauce; avoid if you want a light plate or need to avoid gluten and dairy.",
      "zh": "想要旋转烤肉片配皮塔、蔬菜、薯条和酸奶黄瓜酱，咸香又有饱腹感时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je geschaafd geroosterd vlees met pita, groente, friet en tzatziki; hartig en vullend wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "greek-salad",
    "metadataCode": "104004",
    "cuisineId": "greek",
    "names": {
      "en": "Greek Salad",
      "zh": "希腊沙拉",
      "nl": "Griekse salade",
      "local": "χωριάτικη σαλάτα"
    },
    "category": "salad",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "A fresh salad of tomato, cucumber, olives, and feta; salty, juicy, and usually not leafy.",
      "zh": "希腊沙拉：番茄、黄瓜、橄榄和菲达奶酪组成的清爽沙拉，咸鲜多汁，通常不是叶菜沙拉。",
      "nl": "Griekse salade: frisse salade van tomaat, komkommer, olijven en feta; zoutig, sappig en meestal niet bladgroen."
    },
    "cookingProfile": {
      "en": "assembled to order; expect crisp vegetables, crumbly feta and juicy tomato.",
      "zh": "通常现拌或组合后上桌，点餐时可预期：番茄、黄瓜、橄榄和菲达奶酪组成的清爽沙拉，咸鲜多汁，通常不是叶菜沙拉。",
      "nl": "Meestal samengesteld; verwacht vooral: frisse salade van tomaat, komkommer, olijven en feta; zoutig, sappig en meestal niet bladgroen."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "vegetarian-friendly",
        "fresh"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "cucumber",
        25,
        "crisp base"
      ],
      [
        "tomato",
        25,
        "juicy base"
      ],
      [
        "feta",
        20,
        "salty cheese"
      ],
      [
        "olives",
        15,
        "briny accent"
      ],
      [
        "olive-oil",
        10,
        "dressing",
        "seasoning"
      ],
      [
        "oregano",
        5,
        "herbal finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "feta saltiness",
      "olive oil",
      "oregano"
    ],
    "basicTaste": [
      "fresh",
      "salty",
      "tangy"
    ],
    "textureProfile": [
      "crisp vegetables",
      "crumbly feta",
      "juicy tomato"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "vegetarian-friendly",
      "fresh"
    ],
    "avoidIfTags": [
      "avoids-dairy",
      "dislikes-raw-onion"
    ],
    "orderVerdict": {
      "en": "Order if you want a fresh salty side with feta and olives; avoid if you dislike briny olives or dairy cheese.",
      "zh": "想要番茄、黄瓜、橄榄和菲达奶酪组成的清爽沙拉，咸鲜多汁，通常不是叶菜沙拉时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je frisse salade van tomaat, komkommer, olijven en feta; zoutig, sappig en meestal niet bladgroen wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "spanakopita",
    "metadataCode": "104005",
    "cuisineId": "greek",
    "names": {
      "en": "Spanakopita",
      "zh": "希腊菠菜奶酪派",
      "nl": "Spanakopita",
      "local": "σπανακόπιτα"
    },
    "category": "starter",
    "cookingMethods": [
      "baked",
      "layered"
    ],
    "shortDescription": {
      "en": "Flaky phyllo pastry filled with spinach, feta, egg, and herbs; usually a savory pie or triangle.",
      "zh": "希腊菠菜奶酪派：酥脆菲洛皮包着菠菜、菲达和香草，像咸味派或小三角。",
      "nl": "Spanakopita: filodeeg met spinazie, feta, ei en kruiden; hartig, kruimelig en bladerig."
    },
    "cookingProfile": {
      "en": "baked and built in layers; expect flaky pastry, soft spinach filling and crumbly cheese.",
      "zh": "通常烘烤并层叠制作后上桌，点餐时可预期：酥脆菲洛皮包着菠菜、菲达和香草，像咸味派或小三角。",
      "nl": "Meestal gebakken in de oven en in lagen opgebouwd; verwacht vooral: filodeeg met spinazie, feta, ei en kruiden; hartig, kruimelig en bladerig."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "vegetarian-friendly",
        "starter"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "phyllo-pastry",
        35,
        "flaky pastry"
      ],
      [
        "spinach",
        30,
        "leafy filling"
      ],
      [
        "feta",
        20,
        "salty cheese filling"
      ],
      [
        "egg",
        5,
        "binder"
      ],
      [
        "dill",
        5,
        "herbal lift",
        "seasoning"
      ],
      [
        "olive-oil",
        5,
        "pastry gloss",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "feta",
      "dill",
      "buttery pastry"
    ],
    "basicTaste": [
      "savory",
      "salty",
      "herbal"
    ],
    "textureProfile": [
      "flaky pastry",
      "soft spinach filling",
      "crumbly cheese"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "contains-egg"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "vegetarian-friendly",
      "starter"
    ],
    "avoidIfTags": [
      "avoids-gluten",
      "avoids-dairy"
    ],
    "orderVerdict": {
      "en": "Order if you want a flaky vegetarian pastry with salty cheese and spinach; avoid if gluten, egg, or feta are off-limits.",
      "zh": "想要酥脆菲洛皮包着菠菜、菲达和香草，像咸味派或小三角时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je filodeeg met spinazie, feta, ei en kruiden; hartig, kruimelig en bladerig wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "tzatziki",
    "metadataCode": "104006",
    "cuisineId": "greek",
    "names": {
      "en": "Tzatziki",
      "zh": "希腊酸奶黄瓜酱",
      "nl": "Tzatziki",
      "local": "τζατζίκι"
    },
    "category": "starter",
    "cookingMethods": [
      "assembled",
      "chilled"
    ],
    "shortDescription": {
      "en": "Cold yogurt cucumber dip with garlic, olive oil, and herbs; cooling but often quite garlicky.",
      "zh": "希腊酸奶黄瓜酱：冷酸奶黄瓜酱，带蒜香和香草，清凉但蒜味可能明显。",
      "nl": "Tzatziki: koude yoghurtdip met komkommer, knoflook, olijfolie en kruiden; fris maar vaak knoflookrijk."
    },
    "cookingProfile": {
      "en": "assembled to order and served cold; expect cool creamy dip and fine cucumber crunch.",
      "zh": "通常现拌或组合并冷食后上桌，点餐时可预期：冷酸奶黄瓜酱，带蒜香和香草，清凉但蒜味可能明显。",
      "nl": "Meestal samengesteld en koud geserveerd; verwacht vooral: koude yoghurtdip met komkommer, knoflook, olijfolie en kruiden; fris maar vaak knoflookrijk."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "dip",
        "cooling"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "yogurt",
        55,
        "creamy base"
      ],
      [
        "cucumber",
        25,
        "fresh crunch"
      ],
      [
        "garlic",
        8,
        "sharp aroma",
        "seasoning"
      ],
      [
        "olive-oil",
        5,
        "roundness",
        "seasoning"
      ],
      [
        "dill",
        4,
        "herbal freshness",
        "seasoning"
      ],
      [
        "lemon",
        3,
        "acid finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "garlic",
      "dill",
      "strained yogurt tang"
    ],
    "basicTaste": [
      "tangy",
      "creamy",
      "garlicky"
    ],
    "textureProfile": [
      "cool creamy dip",
      "fine cucumber crunch"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dip",
      "cooling"
    ],
    "avoidIfTags": [
      "avoids-dairy",
      "dislikes-garlic"
    ],
    "orderVerdict": {
      "en": "Order if you want a cooling dip for grilled meat or bread; avoid if raw garlic or dairy yogurt would bother you.",
      "zh": "想要冷酸奶黄瓜酱，带蒜香和香草，清凉但蒜味可能明显时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je koude yoghurtdip met komkommer, knoflook, olijfolie en kruiden; fris maar vaak knoflookrijk wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "dolmades",
    "metadataCode": "104007",
    "cuisineId": "greek",
    "names": {
      "en": "Dolmades",
      "zh": "葡萄叶米卷",
      "nl": "Dolmades",
      "local": "ντολμάδες"
    },
    "category": "starter",
    "cookingMethods": [
      "simmered",
      "assembled"
    ],
    "shortDescription": {
      "en": "Grape leaves wrapped around rice and herbs, sometimes with meat; tender, lemony, and usually served as small rolls.",
      "zh": "葡萄叶米卷：葡萄叶包米饭和香草，有时加肉，口感柔软，柠檬和橄榄油风味明显。",
      "nl": "Dolmades: druivenbladeren gevuld met rijst en kruiden, soms met vlees; zacht, citroenachtig en klein van formaat."
    },
    "cookingProfile": {
      "en": "simmered and assembled to order; expect tender grape leaves and soft rice filling.",
      "zh": "通常慢煮并现拌或组合后上桌，点餐时可预期：葡萄叶包米饭和香草，有时加肉，口感柔软，柠檬和橄榄油风味明显。",
      "nl": "Meestal zacht gestoofd en samengesteld; verwacht vooral: druivenbladeren gevuld met rijst en kruiden, soms met vlees; zacht, citroenachtig en klein van formaat."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "starter",
        "shareable"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "grape-leaves",
        30,
        "wrapper"
      ],
      [
        "short-grain-rice",
        30,
        "filling"
      ],
      [
        "ground-meat",
        15,
        "optional meat filling"
      ],
      [
        "olive-oil",
        10,
        "soft richness",
        "seasoning"
      ],
      [
        "lemon",
        8,
        "bright finish"
      ],
      [
        "mint",
        4,
        "herbal note",
        "seasoning"
      ],
      [
        "dill",
        3,
        "herbal note",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "lemon",
      "olive oil",
      "mint and dill"
    ],
    "basicTaste": [
      "tangy",
      "herbal",
      "savory"
    ],
    "textureProfile": [
      "tender grape leaves",
      "soft rice filling"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "starter",
      "shareable"
    ],
    "avoidIfTags": [
      "dislikes-herbal-sour-food"
    ],
    "orderVerdict": {
      "en": "Order if you want small lemony rolls rather than a heavy hot main; avoid if you dislike sour herbal flavors.",
      "zh": "想要葡萄叶包米饭和香草，有时加肉，口感柔软，柠檬和橄榄油风味明显时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je druivenbladeren gevuld met rijst en kruiden, soms met vlees; zacht, citroenachtig en klein van formaat wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "pastitsio",
    "metadataCode": "104008",
    "cuisineId": "greek",
    "names": {
      "en": "Pastitsio",
      "zh": "希腊烤通心粉",
      "nl": "Pastitsio",
      "local": "παστίτσιο"
    },
    "category": "meat",
    "cookingMethods": [
      "baked",
      "layered"
    ],
    "shortDescription": {
      "en": "Greek baked pasta layered with spiced meat sauce and creamy bechamel; heavier than a simple pasta dish.",
      "zh": "希腊烤通心粉：希腊烤通心粉层叠肉酱和白酱，比普通意面更厚实浓郁。",
      "nl": "Pastitsio: Griekse ovenschotel met pasta, gekruide vleessaus en bechamel; zwaarder dan eenvoudige pasta."
    },
    "cookingProfile": {
      "en": "baked and built in layers; expect soft pasta layers, creamy top and meaty sauce.",
      "zh": "通常烘烤并层叠制作后上桌，点餐时可预期：希腊烤通心粉层叠肉酱和白酱，比普通意面更厚实浓郁。",
      "nl": "Meestal gebakken in de oven en in lagen opgebouwd; verwacht vooral: Griekse ovenschotel met pasta, gekruide vleessaus en bechamel; zwaarder dan eenvoudige pasta."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "comfort-food",
        "classic-dish"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "pasta",
        35,
        "pasta layer"
      ],
      [
        "ground-meat",
        30,
        "meat sauce"
      ],
      [
        "bechamel-sauce",
        20,
        "creamy top"
      ],
      [
        "tomato-sauce",
        8,
        "sauce base",
        "seasoning"
      ],
      [
        "cinnamon",
        4,
        "warm spice",
        "seasoning"
      ],
      [
        "feta",
        3,
        "salty dairy accent"
      ]
    ],
    "distinctiveFlavorSources": [
      "bechamel",
      "warm spice",
      "tomato meat sauce"
    ],
    "basicTaste": [
      "savory",
      "rich",
      "mildly sweet-spiced"
    ],
    "textureProfile": [
      "soft pasta layers",
      "creamy top",
      "meaty sauce"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food",
      "classic-dish"
    ],
    "avoidIfTags": [
      "wants-light-food",
      "avoids-dairy"
    ],
    "orderVerdict": {
      "en": "Order if you want a rich baked pasta-meat main; avoid if you want a light tomato pasta or avoid dairy.",
      "zh": "想要希腊烤通心粉层叠肉酱和白酱，比普通意面更厚实浓郁时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je Griekse ovenschotel met pasta, gekruide vleessaus en bechamel; zwaarder dan eenvoudige pasta wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "kleftiko",
    "metadataCode": "104009",
    "cuisineId": "greek",
    "names": {
      "en": "Kleftiko",
      "zh": "希腊慢烤羊肉",
      "nl": "Kleftiko",
      "local": "κλέφτικο"
    },
    "category": "meat",
    "cookingMethods": [
      "braised",
      "baked"
    ],
    "shortDescription": {
      "en": "Slow-cooked lamb with potatoes, lemon, herbs, and olive oil; tender, rustic, and meat-forward.",
      "zh": "希腊慢烤羊肉：羊肉与土豆、柠檬和香草慢烤或慢炖，肉质软烂，风味厚实。",
      "nl": "Kleftiko: langzaam gegaard lamsvlees met aardappel, citroen, kruiden en olijfolie; mals en stevig."
    },
    "cookingProfile": {
      "en": "slow-braised and baked; expect tender lamb, soft potatoes and roasted edges.",
      "zh": "通常慢炖并烘烤后上桌，点餐时可预期：羊肉与土豆、柠檬和香草慢烤或慢炖，肉质软烂，风味厚实。",
      "nl": "Meestal langzaam gestoofd en gebakken in de oven; verwacht vooral: langzaam gegaard lamsvlees met aardappel, citroen, kruiden en olijfolie; mals en stevig."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "meat-lover",
        "classic-dish"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "lamb",
        45,
        "slow-cooked meat"
      ],
      [
        "potato",
        25,
        "roasted side"
      ],
      [
        "mixed-vegetables",
        10,
        "vegetable base"
      ],
      [
        "lemon",
        8,
        "brightness"
      ],
      [
        "olive-oil",
        7,
        "roasting fat",
        "seasoning"
      ],
      [
        "oregano",
        5,
        "herbal aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "slow-roasted lamb",
      "lemon",
      "oregano"
    ],
    "basicTaste": [
      "savory",
      "herbal",
      "rich"
    ],
    "textureProfile": [
      "tender lamb",
      "soft potatoes",
      "roasted edges"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "meat-lover",
      "classic-dish"
    ],
    "avoidIfTags": [
      "avoids-lamb",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Order if you want tender lamb with lemon-herb depth; avoid if lamb flavor feels too strong.",
      "zh": "想要羊肉与土豆、柠檬和香草慢烤或慢炖，肉质软烂，风味厚实时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je langzaam gegaard lamsvlees met aardappel, citroen, kruiden en olijfolie; mals en stevig wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "saganaki",
    "metadataCode": "104010",
    "cuisineId": "greek",
    "names": {
      "en": "Saganaki",
      "zh": "煎奶酪",
      "nl": "Saganaki",
      "local": "σαγανάκι"
    },
    "category": "starter",
    "cookingMethods": [
      "fried"
    ],
    "shortDescription": {
      "en": "Pan-fried Greek cheese served hot with lemon; salty, rich, and best shared.",
      "zh": "煎奶酪：煎烤希腊奶酪配柠檬，咸香浓郁，边缘焦脆，适合分享。",
      "nl": "Saganaki: warm gebakken Griekse kaas met citroen; zoutig, rijk en goed om te delen."
    },
    "cookingProfile": {
      "en": "fried; expect crisp browned edges and squeaky melted cheese.",
      "zh": "通常煎炸后上桌，点餐时可预期：煎烤希腊奶酪配柠檬，咸香浓郁，边缘焦脆，适合分享。",
      "nl": "Meestal gebakken in vet; verwacht vooral: warm gebakken Griekse kaas met citroen; zoutig, rijk en goed om te delen."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "shareable",
        "cheese-lover"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "halloumi",
        65,
        "fried cheese"
      ],
      [
        "wheat-flour",
        10,
        "light coating"
      ],
      [
        "olive-oil",
        10,
        "frying fat",
        "seasoning"
      ],
      [
        "lemon",
        10,
        "finish"
      ],
      [
        "oregano",
        5,
        "herbal aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "fried salty cheese",
      "lemon",
      "olive oil"
    ],
    "basicTaste": [
      "salty",
      "rich",
      "tangy"
    ],
    "textureProfile": [
      "crisp browned edges",
      "squeaky melted cheese"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-gluten"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "shareable",
      "cheese-lover"
    ],
    "avoidIfTags": [
      "avoids-dairy",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Order if you want hot salty fried cheese as a starter; avoid if you want a light or dairy-free appetizer.",
      "zh": "想要煎烤希腊奶酪配柠檬，咸香浓郁，边缘焦脆，适合分享时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je warm gebakken Griekse kaas met citroen; zoutig, rijk en goed om te delen wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "baklava",
    "metadataCode": "104011",
    "cuisineId": "greek",
    "names": {
      "en": "Baklava",
      "zh": "果仁蜜酥",
      "nl": "Baklava",
      "local": "μπακλαβάς"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked",
      "layered"
    ],
    "shortDescription": {
      "en": "Layered phyllo pastry with chopped nuts and honey syrup; very sweet, sticky, and crunchy.",
      "zh": "果仁蜜酥：菲洛酥皮夹坚果并浇蜂蜜糖浆，非常甜，口感酥脆又黏润。",
      "nl": "Baklava: laagjes filodeeg met noten en honingsiroop; heel zoet, kleverig en krokant."
    },
    "cookingProfile": {
      "en": "baked and built in layers; expect flaky pastry, sticky syrup and crunchy nuts.",
      "zh": "通常烘烤并层叠制作后上桌，点餐时可预期：菲洛酥皮夹坚果并浇蜂蜜糖浆，非常甜，口感酥脆又黏润。",
      "nl": "Meestal gebakken in de oven en in lagen opgebouwd; verwacht vooral: laagjes filodeeg met noten en honingsiroop; heel zoet, kleverig en krokant."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "dessert",
        "sweet-tooth"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "phyllo-pastry",
        35,
        "flaky layers"
      ],
      [
        "walnuts",
        25,
        "nut filling"
      ],
      [
        "honey",
        20,
        "syrup"
      ],
      [
        "sugar",
        10,
        "sweet syrup"
      ],
      [
        "cinnamon",
        5,
        "warm spice",
        "seasoning"
      ],
      [
        "olive-oil",
        5,
        "pastry richness",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "honey syrup",
      "walnuts",
      "cinnamon"
    ],
    "basicTaste": [
      "very sweet",
      "nutty",
      "buttery"
    ],
    "textureProfile": [
      "flaky pastry",
      "sticky syrup",
      "crunchy nuts"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-tree-nut"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert",
      "sweet-tooth"
    ],
    "avoidIfTags": [
      "avoids-nuts",
      "dislikes-very-sweet-desserts"
    ],
    "orderVerdict": {
      "en": "Order if you want a small intensely sweet nut pastry; avoid if tree nuts or syrupy desserts are not for you.",
      "zh": "想要菲洛酥皮夹坚果并浇蜂蜜糖浆，非常甜，口感酥脆又黏润时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je laagjes filodeeg met noten en honingsiroop; heel zoet, kleverig en krokant wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "loukoumades",
    "metadataCode": "104012",
    "cuisineId": "greek",
    "names": {
      "en": "Loukoumades",
      "zh": "希腊蜂蜜小炸球",
      "nl": "Loukoumades",
      "local": "λουκουμάδες"
    },
    "category": "dessert",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "Small fried dough balls usually drenched with honey and cinnamon; crisp, soft, and sticky-sweet.",
      "zh": "希腊蜂蜜小炸球：小炸面团球常浇蜂蜜和肉桂，外脆内软，甜度很高。",
      "nl": "Loukoumades: kleine gefrituurde deegballetjes met honing en kaneel; krokant, zacht en kleverig zoet."
    },
    "cookingProfile": {
      "en": "deep-fried; expect crisp outside, soft dough center and sticky syrup.",
      "zh": "通常油炸后上桌，点餐时可预期：小炸面团球常浇蜂蜜和肉桂，外脆内软，甜度很高。",
      "nl": "Meestal gefrituurd; verwacht vooral: kleine gefrituurde deegballetjes met honing en kaneel; krokant, zacht en kleverig zoet."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "dessert",
        "shareable"
      ],
      "description": {
        "en": "A street-food style menu reference; the verified card explains the usual handheld or casual format and common risks.",
        "zh": "街头小吃风格的菜单项；已审核卡片说明常见食用形式和风险。",
        "nl": "Een streetfoodachtig menu-item; de geverifieerde kaart legt vorm en risico's uit."
      }
    },
    "composition": [
      [
        "wheat-flour",
        45,
        "fried dough"
      ],
      [
        "honey",
        25,
        "syrup coating"
      ],
      [
        "sugar",
        15,
        "sweet coating"
      ],
      [
        "cinnamon",
        8,
        "warm topping",
        "seasoning"
      ],
      [
        "walnuts",
        7,
        "optional crunch"
      ]
    ],
    "distinctiveFlavorSources": [
      "honey",
      "cinnamon",
      "fried dough"
    ],
    "basicTaste": [
      "sweet",
      "fried",
      "warm-spiced"
    ],
    "textureProfile": [
      "crisp outside",
      "soft dough center",
      "sticky syrup"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-tree-nut"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert",
      "shareable"
    ],
    "avoidIfTags": [
      "avoids-fried-food",
      "avoids-nuts"
    ],
    "orderVerdict": {
      "en": "Order if you want warm fried dough with honey syrup; avoid if you dislike very sweet fried desserts.",
      "zh": "想要小炸面团球常浇蜂蜜和肉桂，外脆内软，甜度很高时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je kleine gefrituurde deegballetjes met honing en kaneel; krokant, zacht en kleverig zoet wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "paella",
    "metadataCode": "105001",
    "cuisineId": "spanish",
    "names": {
      "en": "Paella",
      "zh": "西班牙海鲜饭",
      "nl": "Paella",
      "local": "Paella"
    },
    "category": "rice",
    "cookingMethods": [
      "simmered"
    ],
    "goodForSharing": true,
    "shortDescription": {
      "en": "Saffron short-grain rice cooked in a wide pan with seafood, meat, or vegetables.",
      "zh": "藏红花短粒米在浅锅中与海鲜、肉类或蔬菜一起煮成。",
      "nl": "Kortkorrelige saffraanrijst uit een brede pan met zeevruchten, vlees of groenten."
    },
    "cookingProfile": {
      "en": "Expect a shared rice pan with separate grains, toasted bottom notes, and seafood or meat toppings.",
      "zh": "通常是适合分享的米饭浅锅，米粒分明，可能有锅底焦香和海鲜或肉类配料。",
      "nl": "Verwacht een deelbare rijstpan met losse korrels, geroosterde bodemtonen en zeevruchten of vlees."
    },
    "cuisineRole": {
      "level": "signature",
      "tags": [
        "signature-dish",
        "sharing"
      ],
      "description": {
        "en": "A signature Spanish menu item with strong ordering recognition value.",
        "zh": "西班牙代表性菜单菜，点餐识别价值很高。",
        "nl": "Een kenmerkend Spaans menugerecht met hoge herkenningswaarde."
      }
    },
    "composition": [
      [
        "short-grain-rice",
        45,
        "rice base"
      ],
      [
        "shrimp",
        15,
        "seafood"
      ],
      [
        "mussels",
        10,
        "seafood"
      ],
      [
        "squid",
        10,
        "seafood"
      ],
      [
        "saffron",
        10,
        "aroma",
        "seasoning"
      ],
      [
        "olive-oil",
        10,
        "cooking fat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "saffron",
      "olive-oil",
      "seafood stock"
    ],
    "basicTaste": [
      "savory",
      "briny",
      "aromatic"
    ],
    "textureProfile": [
      "separate rice grains",
      "mixed seafood",
      "possible crisp bottom"
    ],
    "riskFlags": [
      "contains-shellfish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "sharing",
      "signature-dish"
    ],
    "avoidIfTags": [
      "shellfish-allergy"
    ],
    "orderVerdict": {
      "en": "Order for a classic shared Spanish dish; ask about seafood, rabbit, or chicken if the menu is vague.",
      "zh": "经典适合分享；菜单不清楚时先问是否含海鲜、兔肉或鸡肉。",
      "nl": "Klassiek om te delen; vraag naar zeevruchten, konijn of kip als het menu vaag is."
    },
    "confidenceTag": "audited-spanish-batch-010",
    "spiceLevel": 1,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "high"
  }),
  starterDish({
    "id": "tortilla-espanola",
    "metadataCode": "105002",
    "cuisineId": "spanish",
    "names": {
      "en": "Tortilla Española",
      "zh": "西班牙土豆蛋饼",
      "nl": "Spaanse tortilla",
      "local": "Tortilla española"
    },
    "category": "starter",
    "cookingMethods": [
      "fried"
    ],
    "shortDescription": {
      "en": "A thick Spanish omelette made with potato and egg, often served in wedges at room temperature.",
      "zh": "厚切西班牙蛋饼，以土豆和鸡蛋为主，常切块常温上桌。",
      "nl": "Dikke Spaanse omelet van aardappel en ei, vaak in punten op kamertemperatuur."
    },
    "cookingProfile": {
      "en": "It is mild, dense, and filling, more like a potato-egg cake than a fluffy omelette.",
      "zh": "口味温和、质地紧实顶饱，更像土豆鸡蛋饼而不是蓬松煎蛋。",
      "nl": "Mild, stevig en vullend; eerder aardappel-eitaart dan luchtige omelet."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "tapas"
      ],
      "description": {
        "en": "A classic Spanish menu item common in bars or restaurants.",
        "zh": "经典西班牙菜单菜，常见于酒吧或餐厅。",
        "nl": "Een klassiek Spaans menugerecht in bars of restaurants."
      }
    },
    "composition": [
      [
        "potato",
        50,
        "base"
      ],
      [
        "egg",
        35,
        "set and protein"
      ],
      [
        "onion",
        10,
        "optional sweetness",
        "ingredient",
        "medium",
        true
      ],
      [
        "olive-oil",
        5,
        "cooking fat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "egg",
      "potato",
      "olive-oil"
    ],
    "basicTaste": [
      "mild",
      "savory",
      "eggy"
    ],
    "textureProfile": [
      "dense wedge",
      "soft potato",
      "set egg"
    ],
    "riskFlags": [
      "contains-egg"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "tapas",
      "first-timer-friendly"
    ],
    "avoidIfTags": [
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "A safe mild tapas order; confirm onion if you have strong preferences.",
      "zh": "温和稳妥的小盘菜；介意洋葱时先确认。",
      "nl": "Een veilige milde tapas; vraag naar ui als dat uitmaakt."
    },
    "confidenceTag": "audited-spanish-batch-010",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "patatas-bravas",
    "metadataCode": "105003",
    "cuisineId": "spanish",
    "names": {
      "en": "Patatas Bravas",
      "zh": "西班牙辣酱土豆",
      "nl": "Patatas bravas",
      "local": "Patatas bravas"
    },
    "category": "starter",
    "cookingMethods": [
      "fried"
    ],
    "shortDescription": {
      "en": "Fried potato cubes served with spicy tomato bravas sauce and often aioli.",
      "zh": "炸土豆块配微辣番茄勇士酱，常再加蒜味蛋黄酱。",
      "nl": "Gebakken aardappelblokjes met pittige tomatensaus en vaak aioli."
    },
    "cookingProfile": {
      "en": "The potatoes are crisp-edged and the sauce decides whether it feels spicy, creamy, or both.",
      "zh": "土豆边缘酥脆，酱料决定它偏辣、偏奶滑，或两者都有。",
      "nl": "Krokante aardappelranden; de saus bepaalt pittigheid en romigheid."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "tapas",
        "classic-dish"
      ],
      "description": {
        "en": "A classic Spanish menu item common in bars or restaurants.",
        "zh": "经典西班牙菜单菜，常见于酒吧或餐厅。",
        "nl": "Een klassiek Spaans menugerecht in bars of restaurants."
      }
    },
    "composition": [
      [
        "potato",
        70,
        "fried potato"
      ],
      [
        "tomato-sauce",
        15,
        "bravas sauce"
      ],
      [
        "mayonnaise",
        10,
        "aioli-style sauce",
        "ingredient",
        "medium",
        true
      ],
      [
        "smoked-paprika",
        5,
        "smoky heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "bravas sauce",
      "aioli",
      "smoked-paprika"
    ],
    "basicTaste": [
      "savory",
      "spicy",
      "creamy"
    ],
    "textureProfile": [
      "crisp potato",
      "saucy coating",
      "creamy dip"
    ],
    "riskFlags": [
      "contains-egg",
      "can-be-spicy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "tapas",
      "first-timer-friendly"
    ],
    "avoidIfTags": [
      "egg-allergy",
      "avoids-spicy"
    ],
    "orderVerdict": {
      "en": "Easy tapas order; sauce heat and aioli vary by bar.",
      "zh": "很容易点的小盘菜；辣度和蒜味蛋黄酱用量因店而异。",
      "nl": "Makkelijke tapas; pittigheid en aioli verschillen per bar."
    },
    "confidenceTag": "audited-spanish-batch-010",
    "spiceLevel": 2,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "high"
  }),
  starterDish({
    "id": "croquetas",
    "metadataCode": "105004",
    "cuisineId": "spanish",
    "names": {
      "en": "Croquetas",
      "zh": "西班牙可乐饼",
      "nl": "Croquetas",
      "local": "Croquetas"
    },
    "category": "fried-snack",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "Small fried croquettes with creamy béchamel filling, commonly ham, chicken, cheese, or salt cod.",
      "zh": "小个炸可乐饼，内馅是浓稠白酱，常见火腿、鸡肉、奶酪或盐鳕鱼口味。",
      "nl": "Kleine gefrituurde kroketjes met romige bechamel, vaak ham, kip, kaas of bakkeljauw."
    },
    "cookingProfile": {
      "en": "They are crisp outside and very soft inside, so the filling flavor matters more than the crust.",
      "zh": "外壳酥脆、内里非常柔软，关键差异在馅料风味。",
      "nl": "Krokant buiten en heel zacht vanbinnen; de vulling bepaalt de smaak."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "tapas",
        "classic-dish"
      ],
      "description": {
        "en": "A classic Spanish menu item common in bars or restaurants.",
        "zh": "经典西班牙菜单菜，常见于酒吧或餐厅。",
        "nl": "Een klassiek Spaans menugerecht in bars of restaurants."
      }
    },
    "composition": [
      [
        "bechamel-sauce",
        35,
        "creamy filling"
      ],
      [
        "bread",
        25,
        "crumb coating"
      ],
      [
        "ham",
        15,
        "common filling",
        "ingredient",
        "medium",
        true
      ],
      [
        "egg",
        10,
        "coating"
      ],
      [
        "cheese",
        10,
        "optional filling",
        "ingredient",
        "medium",
        true
      ],
      [
        "salt-cod",
        5,
        "optional fish filling",
        "ingredient",
        "medium",
        true
      ]
    ],
    "distinctiveFlavorSources": [
      "bechamel-sauce",
      "ham or cod filling",
      "fried crumb"
    ],
    "basicTaste": [
      "savory",
      "creamy",
      "salty"
    ],
    "textureProfile": [
      "crisp crust",
      "molten creamy center"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy",
      "contains-pork",
      "contains-fish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "tapas",
      "first-timer-friendly"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-allergy",
      "dairy-free",
      "no-pork",
      "fish-allergy"
    ],
    "orderVerdict": {
      "en": "Good tapas bite, but ask the filling if you avoid pork, fish, or dairy.",
      "zh": "好点的小盘炸物；避猪肉、鱼类或乳制品时要问清馅料。",
      "nl": "Goede tapas, maar vraag naar de vulling bij varkensvlees, vis of zuivel."
    },
    "confidenceTag": "audited-spanish-batch-010",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "high"
  }),
  starterDish({
    "id": "jamon-iberico",
    "metadataCode": "105005",
    "cuisineId": "spanish",
    "names": {
      "en": "Jamón Ibérico",
      "zh": "伊比利亚火腿",
      "nl": "Jamón ibérico",
      "local": "Jamón ibérico"
    },
    "category": "starter",
    "cookingMethods": [
      "assembled"
    ],
    "servingTemperature": "cold-or-cool",
    "rawnessLevel": "cured",
    "shortDescription": {
      "en": "Thin slices of premium Spanish cured Ibérico ham, served cold and eaten on its own or with bread.",
      "zh": "高级西班牙伊比利亚风干火腿薄片，冷食，可单吃或配面包。",
      "nl": "Dunne plakjes Spaanse Ibericoham, koud geserveerd los of met brood."
    },
    "cookingProfile": {
      "en": "It is uncooked cured pork: silky, salty, nutty, and portioned like a cold plate.",
      "zh": "这是未加热的风干猪肉，口感柔滑咸香，通常像冷盘一样上桌。",
      "nl": "Gedroogd varkensvlees: zijdezacht, zout, nootachtig en als koude schotel."
    },
    "cuisineRole": {
      "level": "signature",
      "tags": [
        "classic-dish",
        "starter"
      ],
      "description": {
        "en": "A signature Spanish menu item with strong ordering recognition value.",
        "zh": "西班牙代表性菜单菜，点餐识别价值很高。",
        "nl": "Een kenmerkend Spaans menugerecht met hoge herkenningswaarde."
      }
    },
    "composition": [
      [
        "iberico-ham",
        90,
        "cured ham"
      ],
      [
        "bread",
        10,
        "optional side",
        "ingredient",
        "medium",
        true
      ]
    ],
    "distinctiveFlavorSources": [
      "iberico-ham",
      "cured pork fat"
    ],
    "basicTaste": [
      "salty",
      "savory",
      "nutty"
    ],
    "textureProfile": [
      "silky slices",
      "fatty edges",
      "cool serving"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "starter",
      "classic-dish"
    ],
    "avoidIfTags": [
      "no-pork",
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if cured pork is welcome; it is about ham quality, not sauce or cooking.",
      "zh": "能吃风干猪肉时可点；重点是火腿品质，不是酱汁或烹调。",
      "nl": "Bestel als gedroogd varkensvlees welkom is; het draait om hamkwaliteit."
    },
    "confidenceTag": "audited-spanish-batch-010",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "gambas-al-ajillo",
    "metadataCode": "105006",
    "cuisineId": "spanish",
    "names": {
      "en": "Gambas al Ajillo",
      "zh": "蒜香虾",
      "nl": "Gambas al ajillo",
      "local": "Gambas al ajillo"
    },
    "category": "seafood",
    "cookingMethods": [
      "fried"
    ],
    "shortDescription": {
      "en": "Shrimp cooked in hot olive oil with garlic, parsley, and sometimes chili.",
      "zh": "虾用热橄榄油、蒜、欧芹烹制，有时带一点辣椒。",
      "nl": "Garnalen in hete olijfolie met knoflook, peterselie en soms chili."
    },
    "cookingProfile": {
      "en": "It arrives glossy or sizzling, with garlicky oil that is often eaten with bread.",
      "zh": "通常油亮或热滋滋上桌，蒜香橄榄油常用面包蘸着吃。",
      "nl": "Komt vaak glanzend of sissend, met knoflookolie om brood in te dippen."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "tapas",
        "seafood"
      ],
      "description": {
        "en": "A classic Spanish menu item common in bars or restaurants.",
        "zh": "经典西班牙菜单菜，常见于酒吧或餐厅。",
        "nl": "Een klassiek Spaans menugerecht in bars of restaurants."
      }
    },
    "composition": [
      [
        "shrimp",
        65,
        "seafood"
      ],
      [
        "olive-oil",
        20,
        "garlic oil",
        "seasoning"
      ],
      [
        "garlic",
        10,
        "aroma",
        "seasoning"
      ],
      [
        "chili",
        5,
        "optional heat",
        "seasoning",
        "high",
        true
      ]
    ],
    "distinctiveFlavorSources": [
      "garlic",
      "olive-oil",
      "shrimp"
    ],
    "basicTaste": [
      "garlicky",
      "briny",
      "savory"
    ],
    "textureProfile": [
      "firm shrimp",
      "glossy oil",
      "juicy bite"
    ],
    "riskFlags": [
      "contains-shellfish",
      "can-be-spicy"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "tapas",
      "seafood"
    ],
    "avoidIfTags": [
      "shellfish-allergy",
      "avoids-garlic",
      "avoids-spicy"
    ],
    "orderVerdict": {
      "en": "Great if you like garlic and shrimp; keep bread nearby for the oil.",
      "zh": "喜欢蒜香和虾时很适合；蒜油很适合蘸面包。",
      "nl": "Sterk als je knoflook en garnalen lust; brood past goed bij de olie."
    },
    "confidenceTag": "audited-spanish-batch-010",
    "spiceLevel": 1,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "gazpacho",
    "metadataCode": "105007",
    "cuisineId": "spanish",
    "names": {
      "en": "Gazpacho",
      "zh": "西班牙冷番茄汤",
      "nl": "Gazpacho",
      "local": "Gazpacho"
    },
    "category": "soup",
    "cookingMethods": [
      "assembled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "Cold Andalusian tomato soup blended with cucumber, pepper, olive oil, vinegar, and bread.",
      "zh": "安达卢西亚冷番茄汤，混合黄瓜、甜椒、橄榄油、醋和面包打成。",
      "nl": "Koude Andalusische tomatensoep met komkommer, paprika, olijfolie, azijn en brood."
    },
    "cookingProfile": {
      "en": "It is served cold and refreshing, more drinkable and lighter than salmorejo.",
      "zh": "冷食清爽，比萨尔莫雷霍更轻、更接近可饮用冷汤。",
      "nl": "Koud en verfrissend, lichter en drinkbaarder dan salmorejo."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "lighter-choice"
      ],
      "description": {
        "en": "A classic Spanish menu item common in bars or restaurants.",
        "zh": "经典西班牙菜单菜，常见于酒吧或餐厅。",
        "nl": "Een klassiek Spaans menugerecht in bars of restaurants."
      }
    },
    "composition": [
      [
        "tomato",
        45,
        "soup base"
      ],
      [
        "cucumber",
        15,
        "freshness"
      ],
      [
        "mixed-vegetables",
        15,
        "pepper and vegetable body"
      ],
      [
        "bread",
        10,
        "body"
      ],
      [
        "olive-oil",
        10,
        "smoothness",
        "seasoning"
      ],
      [
        "vinegar",
        5,
        "acidity",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "tomato",
      "olive-oil",
      "vinegar"
    ],
    "basicTaste": [
      "fresh",
      "tangy",
      "vegetal"
    ],
    "textureProfile": [
      "smooth cold soup",
      "light body",
      "small garnish"
    ],
    "riskFlags": [
      "contains-gluten"
    ],
    "dietaryFlags": [
      "vegan"
    ],
    "goodForTags": [
      "lighter-choice",
      "starter"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Refreshing in warm weather; choose salmorejo if you want thicker and richer.",
      "zh": "天气热时很清爽；想要更浓稠厚实可选萨尔莫雷霍。",
      "nl": "Verfrissend bij warm weer; kies salmorejo voor dikker en rijker."
    },
    "confidenceTag": "audited-spanish-batch-010",
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "pulpo-a-la-gallega",
    "metadataCode": "105008",
    "cuisineId": "spanish",
    "names": {
      "en": "Pulpo a la Gallega",
      "zh": "加利西亚章鱼",
      "nl": "Pulpo a la gallega",
      "local": "Pulpo a la gallega"
    },
    "category": "seafood",
    "cookingMethods": [
      "boiled",
      "assembled"
    ],
    "shortDescription": {
      "en": "Tender octopus slices served with potato, olive oil, sea salt, and smoked paprika.",
      "zh": "柔嫩章鱼切片配土豆、橄榄油、海盐和烟熏红椒粉。",
      "nl": "Malse plakjes octopus met aardappel, olijfolie, zeezout en gerookt paprikapoeder."
    },
    "cookingProfile": {
      "en": "The octopus should be tender and lightly chewy, with smoky paprika rather than heavy sauce.",
      "zh": "章鱼应柔嫩略有嚼劲，重点是烟熏红椒粉而不是厚酱。",
      "nl": "Octopus hoort mals en licht taai te zijn, met gerookte paprika in plaats van zware saus."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "regional-dish",
        "seafood"
      ],
      "description": {
        "en": "A classic Spanish menu item common in bars or restaurants.",
        "zh": "经典西班牙菜单菜，常见于酒吧或餐厅。",
        "nl": "Een klassiek Spaans menugerecht in bars of restaurants."
      }
    },
    "composition": [
      [
        "octopus",
        50,
        "seafood"
      ],
      [
        "potato",
        30,
        "base"
      ],
      [
        "olive-oil",
        10,
        "finish",
        "seasoning"
      ],
      [
        "smoked-paprika",
        5,
        "smoky seasoning",
        "seasoning"
      ],
      [
        "sea-salt",
        5,
        "seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "octopus",
      "smoked-paprika",
      "olive-oil"
    ],
    "basicTaste": [
      "briny",
      "smoky",
      "savory"
    ],
    "textureProfile": [
      "tender octopus",
      "soft potato",
      "oil-slick finish"
    ],
    "riskFlags": [
      "contains-shellfish"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "seafood",
      "regional-dish"
    ],
    "avoidIfTags": [
      "shellfish-allergy",
      "dislikes-chewy-seafood"
    ],
    "orderVerdict": {
      "en": "Order if you like octopus; it is simple, smoky, and not saucy.",
      "zh": "喜欢章鱼可点；它简单、带烟熏香，不是厚酱菜。",
      "nl": "Bestel als je octopus lust; simpel, rokerig en niet sauzig."
    },
    "confidenceTag": "audited-spanish-batch-010",
    "spiceLevel": 1,
    "weightLevel": 2,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "pan-con-tomate",
    "metadataCode": "105009",
    "cuisineId": "spanish",
    "names": {
      "en": "Pan con Tomate",
      "zh": "番茄面包",
      "nl": "Pan con tomate",
      "local": "Pan con tomate"
    },
    "category": "bread",
    "cookingMethods": [
      "toasted",
      "assembled"
    ],
    "shortDescription": {
      "en": "Toasted bread rubbed with ripe tomato, garlic, olive oil, and salt.",
      "zh": "烤脆面包抹熟番茄、蒜、橄榄油和盐。",
      "nl": "Geroosterd brood ingewreven met rijpe tomaat, knoflook, olijfolie en zout."
    },
    "cookingProfile": {
      "en": "It is crisp, juicy on top, and light enough to start a meal or accompany ham.",
      "zh": "面包酥脆、表面多汁清香，适合开胃或配火腿。",
      "nl": "Krokant brood met sappige tomaat, licht genoeg als start of bij ham."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "tapas",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A classic Spanish menu item common in bars or restaurants.",
        "zh": "经典西班牙菜单菜，常见于酒吧或餐厅。",
        "nl": "Een klassiek Spaans menugerecht in bars of restaurants."
      }
    },
    "composition": [
      [
        "bread",
        60,
        "toasted base"
      ],
      [
        "tomato",
        25,
        "rubbed topping"
      ],
      [
        "olive-oil",
        10,
        "finish",
        "seasoning"
      ],
      [
        "garlic",
        5,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "tomato",
      "olive-oil",
      "garlic"
    ],
    "basicTaste": [
      "fresh",
      "savory",
      "garlicky"
    ],
    "textureProfile": [
      "crisp bread",
      "juicy tomato top"
    ],
    "riskFlags": [
      "contains-gluten"
    ],
    "dietaryFlags": [
      "vegan"
    ],
    "goodForTags": [
      "starter",
      "first-timer-friendly"
    ],
    "avoidIfTags": [
      "gluten-free",
      "avoids-garlic"
    ],
    "orderVerdict": {
      "en": "A safe light starter; add jamón if you want it richer.",
      "zh": "很稳的清爽前菜；想更丰盛可搭配火腿。",
      "nl": "Veilige lichte starter; neem ham erbij voor rijker."
    },
    "confidenceTag": "audited-spanish-batch-010",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "churros",
    "metadataCode": "105010",
    "cuisineId": "spanish",
    "names": {
      "en": "Churros",
      "zh": "西班牙油条",
      "nl": "Churros",
      "local": "Churros"
    },
    "category": "dessert",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "Fried ridged dough sticks, commonly served with thick hot chocolate for dipping.",
      "zh": "带棱的炸面条，常配浓热巧克力蘸着吃。",
      "nl": "Geribbelde gefrituurde deegstaven, vaak met dikke warme chocolade."
    },
    "cookingProfile": {
      "en": "They are crisp outside and soft inside; the chocolate makes the snack heavier and sweeter.",
      "zh": "外脆内软，蘸热巧克力后更甜也更厚重。",
      "nl": "Krokant buiten en zacht binnen; chocolade maakt het zoeter en zwaarder."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "dessert",
        "street-food"
      ],
      "description": {
        "en": "A classic Spanish menu item common in bars or restaurants.",
        "zh": "经典西班牙菜单菜，常见于酒吧或餐厅。",
        "nl": "Een klassiek Spaans menugerecht in bars of restaurants."
      }
    },
    "composition": [
      [
        "churro-dough",
        65,
        "fried dough"
      ],
      [
        "chocolate",
        20,
        "dip"
      ],
      [
        "sugar",
        10,
        "coating"
      ],
      [
        "cinnamon",
        5,
        "optional aroma",
        "seasoning",
        "high",
        true
      ]
    ],
    "distinctiveFlavorSources": [
      "fried dough",
      "hot chocolate",
      "sugar"
    ],
    "basicTaste": [
      "sweet",
      "fried",
      "chocolatey"
    ],
    "textureProfile": [
      "crisp ridges",
      "soft center",
      "thick dip"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert",
      "street-food"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Good for a sweet fried snack; heavier if served with thick chocolate.",
      "zh": "想吃甜炸点心时适合；配浓巧克力会更厚重。",
      "nl": "Goed voor zoet gefrituurd; zwaarder met dikke chocolade."
    },
    "confidenceTag": "audited-spanish-batch-010",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "crema-catalana",
    "metadataCode": "105011",
    "cuisineId": "spanish",
    "names": {
      "en": "Crema Catalana",
      "zh": "加泰罗尼亚焦糖奶冻",
      "nl": "Crema catalana",
      "local": "Crema catalana"
    },
    "category": "dessert",
    "cookingMethods": [
      "set"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "Catalan custard dessert with a caramelized sugar crust, often scented with citrus and cinnamon.",
      "zh": "加泰罗尼亚奶冻甜点，表面有焦糖脆层，常带柑橘和肉桂香。",
      "nl": "Catalaanse custard met gekaramelliseerde suikerlaag, vaak met citrus en kaneel."
    },
    "cookingProfile": {
      "en": "It is cool and creamy under a brittle sugar top, similar in decision feel to crème brûlée.",
      "zh": "冷滑奶冻配脆焦糖顶，点餐感受接近法式焦糖布丁。",
      "nl": "Koel en romig onder een breekbare suikerlaag, vergelijkbaar met crème brûlée."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "dessert",
        "classic-dish"
      ],
      "description": {
        "en": "A classic Spanish menu item common in bars or restaurants.",
        "zh": "经典西班牙菜单菜，常见于酒吧或餐厅。",
        "nl": "Een klassiek Spaans menugerecht in bars of restaurants."
      }
    },
    "composition": [
      [
        "cream",
        40,
        "custard base"
      ],
      [
        "egg",
        25,
        "set"
      ],
      [
        "sugar",
        20,
        "caramel top"
      ],
      [
        "cinnamon",
        10,
        "warm aroma",
        "seasoning"
      ],
      [
        "lemon",
        5,
        "citrus aroma"
      ]
    ],
    "distinctiveFlavorSources": [
      "caramelized sugar",
      "cinnamon",
      "citrus"
    ],
    "basicTaste": [
      "sweet",
      "creamy",
      "caramelized"
    ],
    "textureProfile": [
      "smooth custard",
      "crisp sugar crust"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-egg"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert",
      "first-timer-friendly"
    ],
    "avoidIfTags": [
      "dairy-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "Choose it for creamy custard and burnt sugar crunch.",
      "zh": "想吃奶滑布丁和焦糖脆壳时选它。",
      "nl": "Kies dit voor romige custard en krokante karamelsuiker."
    },
    "confidenceTag": "audited-spanish-batch-010",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "low"
  }),
  starterDish({
    "id": "fabada",
    "metadataCode": "105012",
    "cuisineId": "spanish",
    "names": {
      "en": "Fabada",
      "zh": "阿斯图里亚斯豆肉炖菜",
      "nl": "Fabada",
      "local": "Fabada"
    },
    "category": "meat",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Asturian white bean stew with chorizo, morcilla, and pork, served hearty and hot.",
      "zh": "阿斯图里亚斯白豆炖菜，加入西班牙辣香肠、血肠和猪肉，热食厚实。",
      "nl": "Asturische wittebonenstoof met chorizo, morcilla en varkensvlees."
    },
    "cookingProfile": {
      "en": "It is thick, porky, smoky, and very filling, closer to a meal than a light soup.",
      "zh": "浓稠、猪肉味和烟熏味明显，非常顶饱，更像正餐不是清汤。",
      "nl": "Dik, varkensrijk, rokerig en zeer vullend; meer maaltijd dan lichte soep."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "comfort-food"
      ],
      "description": {
        "en": "A regional Spanish dish with a clear local identity.",
        "zh": "地区性西班牙菜，有明确地方特色。",
        "nl": "Een regionaal Spaans gerecht met duidelijke lokale identiteit."
      }
    },
    "composition": [
      [
        "white-beans",
        40,
        "bean base"
      ],
      [
        "chorizo",
        20,
        "smoky sausage"
      ],
      [
        "morcilla",
        15,
        "blood sausage"
      ],
      [
        "pork",
        15,
        "meat"
      ],
      [
        "smoked-paprika",
        10,
        "smoky seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "chorizo",
      "morcilla",
      "smoked-paprika"
    ],
    "basicTaste": [
      "savory",
      "smoky",
      "rich"
    ],
    "textureProfile": [
      "creamy beans",
      "soft pork",
      "thick broth"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food",
      "regional-dish"
    ],
    "avoidIfTags": [
      "no-pork",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Very filling and pork-heavy; avoid if you want a light lunch.",
      "zh": "非常顶饱且猪肉感强；想吃轻午餐就避开。",
      "nl": "Zeer vullend en varkensrijk; niet voor lichte lunch."
    },
    "confidenceTag": "audited-spanish-batch-010",
    "spiceLevel": 1,
    "weightLevel": 5,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "albondigas",
    "metadataCode": "105013",
    "cuisineId": "spanish",
    "names": {
      "en": "Albóndigas",
      "zh": "西班牙肉丸",
      "nl": "Spaanse gehaktballetjes",
      "local": "Albóndigas"
    },
    "category": "meat",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Spanish meatballs usually served in tomato, almond, or wine-based sauce.",
      "zh": "西班牙肉丸，通常配番茄、杏仁或葡萄酒风味酱汁。",
      "nl": "Spaanse gehaktballetjes, meestal in tomaten-, amandel- of wijnsaus."
    },
    "cookingProfile": {
      "en": "They are tender and saucy, often served as tapas or a casual main.",
      "zh": "肉丸柔软多汁，常作为小盘菜或休闲主菜。",
      "nl": "Mals en sauzig, vaak als tapas of informeel hoofdgerecht."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "tapas",
        "comfort-food"
      ],
      "description": {
        "en": "A bar-tapas meatball option where the sauce style matters more than the exact meat blend.",
        "zh": "酒吧小盘里的肉丸选择，点餐时酱汁风格比具体肉类配比更关键。",
        "nl": "Een tapasballetje waarbij de sausstijl belangrijker is dan de exacte vleesmix."
      }
    },
    "composition": [
      [
        "ground-meat",
        45,
        "meatballs"
      ],
      [
        "tomato-sauce",
        25,
        "sauce"
      ],
      [
        "bread",
        10,
        "binder"
      ],
      [
        "egg",
        10,
        "binder"
      ],
      [
        "onion",
        5,
        "sauce aroma"
      ],
      [
        "parsley",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "tomato-sauce",
      "garlic",
      "parsley"
    ],
    "basicTaste": [
      "savory",
      "saucy",
      "mild"
    ],
    "textureProfile": [
      "tender meatballs",
      "warm sauce"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "tapas",
      "comfort-food"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-allergy",
      "no-pork"
    ],
    "orderVerdict": {
      "en": "A familiar saucy meat option; ask if the meat mix includes pork.",
      "zh": "熟悉的酱汁肉菜；介意猪肉时问清肉馅。",
      "nl": "Herkenbare sauzige vleeskeuze; vraag of er varkensvlees in zit."
    },
    "confidenceTag": "audited-spanish-batch-010",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "pimientos-de-padron",
    "metadataCode": "105014",
    "cuisineId": "spanish",
    "names": {
      "en": "Pimientos de Padrón",
      "zh": "帕德龙小青椒",
      "nl": "Pimientos de Padrón",
      "local": "Pimientos de Padrón"
    },
    "category": "starter",
    "cookingMethods": [
      "fried"
    ],
    "shortDescription": {
      "en": "Small green Padrón peppers blistered in olive oil and finished with flaky salt.",
      "zh": "小个帕德龙青椒用橄榄油煎到起泡，撒片状海盐。",
      "nl": "Kleine groene Padrónpepers gebakken in olijfolie met grof zout."
    },
    "cookingProfile": {
      "en": "Most peppers are mild, but an occasional one can be surprisingly spicy.",
      "zh": "大多数不辣，但偶尔会有一颗明显偏辣。",
      "nl": "Meestal mild, maar soms zit er verrassend pittige peper tussen."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "tapas",
        "vegetarian"
      ],
      "description": {
        "en": "A classic Spanish menu item common in bars or restaurants.",
        "zh": "经典西班牙菜单菜，常见于酒吧或餐厅。",
        "nl": "Een klassiek Spaans menugerecht in bars of restaurants."
      }
    },
    "composition": [
      [
        "padron-peppers",
        80,
        "peppers"
      ],
      [
        "olive-oil",
        15,
        "frying oil",
        "seasoning"
      ],
      [
        "sea-salt",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "padron-peppers",
      "olive-oil",
      "sea-salt"
    ],
    "basicTaste": [
      "salty",
      "green",
      "sometimes spicy"
    ],
    "textureProfile": [
      "blistered skin",
      "soft pepper flesh"
    ],
    "riskFlags": [
      "can-be-spicy"
    ],
    "dietaryFlags": [
      "vegan"
    ],
    "goodForTags": [
      "tapas",
      "vegetarian",
      "sharing"
    ],
    "avoidIfTags": [
      "avoids-spicy"
    ],
    "orderVerdict": {
      "en": "Great light tapas; know that one pepper may be hot.",
      "zh": "很好的清淡小盘菜；要知道偶尔会吃到辣的。",
      "nl": "Goede lichte tapas; soms is er eentje pittig."
    },
    "confidenceTag": "audited-spanish-batch-010",
    "spiceLevel": 1,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "low"
  }),
  starterDish({
    "id": "boquerones-en-vinagre",
    "metadataCode": "105015",
    "cuisineId": "spanish",
    "names": {
      "en": "Boquerones en Vinagre",
      "zh": "醋渍凤尾鱼",
      "nl": "Boquerones en vinagre",
      "local": "Boquerones en vinagre"
    },
    "category": "seafood",
    "cookingMethods": [
      "assembled"
    ],
    "servingTemperature": "cold-or-cool",
    "rawnessLevel": "marinated",
    "shortDescription": {
      "en": "White anchovy fillets marinated in vinegar, olive oil, garlic, and parsley, served cold.",
      "zh": "白色凤尾鱼片用醋、橄榄油、蒜和欧芹腌制，冷食。",
      "nl": "Witte ansjovisfilets gemarineerd in azijn, olijfolie, knoflook en peterselie, koud geserveerd."
    },
    "cookingProfile": {
      "en": "They are tangy, briny, and cool, with a sharper bite than cooked fish tapas.",
      "zh": "酸香、咸鲜、冷食，比熟鱼小盘菜更有锋利感。",
      "nl": "Friszuur, zilt en koud, scherper dan gegaarde vistapas."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "tapas",
        "seafood"
      ],
      "description": {
        "en": "A classic Spanish menu item common in bars or restaurants.",
        "zh": "经典西班牙菜单菜，常见于酒吧或餐厅。",
        "nl": "Een klassiek Spaans menugerecht in bars of restaurants."
      }
    },
    "composition": [
      [
        "anchovies",
        70,
        "marinated fish"
      ],
      [
        "vinegar",
        15,
        "marinade",
        "seasoning"
      ],
      [
        "olive-oil",
        10,
        "finish",
        "seasoning"
      ],
      [
        "garlic",
        5,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "anchovies",
      "vinegar",
      "garlic"
    ],
    "basicTaste": [
      "briny",
      "sour",
      "garlicky"
    ],
    "textureProfile": [
      "firm fillets",
      "cool oily finish"
    ],
    "riskFlags": [
      "contains-fish"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "tapas",
      "seafood"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "dislikes-vinegar"
    ],
    "orderVerdict": {
      "en": "Order if you like sharp cold seafood; avoid if vinegar-heavy fish sounds too strong.",
      "zh": "喜欢酸香冷海鲜可点；不爱重醋味鱼就避开。",
      "nl": "Bestel bij scherpe koude vis; vermijd als azijnvis te sterk klinkt."
    },
    "confidenceTag": "audited-spanish-batch-010",
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "ensaladilla-rusa",
    "metadataCode": "105016",
    "cuisineId": "spanish",
    "names": {
      "en": "Ensaladilla Rusa",
      "zh": "西班牙俄式土豆沙拉",
      "nl": "Ensaladilla rusa",
      "local": "Ensaladilla rusa"
    },
    "category": "salad",
    "cookingMethods": [
      "boiled",
      "assembled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "Spanish-style potato salad with mayonnaise, tuna, egg, vegetables, and often olives or peppers.",
      "zh": "西班牙式土豆沙拉，拌蛋黄酱、金枪鱼、鸡蛋、蔬菜，常加橄榄或甜椒。",
      "nl": "Spaanse aardappelsalade met mayonaise, tonijn, ei, groenten en vaak olijf of paprika."
    },
    "cookingProfile": {
      "en": "It is cold, creamy, and filling, more like a composed mayo salad than a leafy salad.",
      "zh": "冷食、奶滑、顶饱，更像蛋黄酱拌沙拉而不是叶菜沙拉。",
      "nl": "Koud, romig en vullend, meer mayo-salade dan bladsalade."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "tapas",
        "salad"
      ],
      "description": {
        "en": "A cold tapas-counter salad where mayo, tuna, and egg are the main ordering signals.",
        "zh": "冷食小盘沙拉，点餐重点是蛋黄酱、金枪鱼和鸡蛋。",
        "nl": "Een koude tapas-toonbanksalade waarbij mayo, tonijn en ei de belangrijkste signalen zijn."
      }
    },
    "composition": [
      [
        "potato",
        35,
        "base"
      ],
      [
        "tuna",
        20,
        "fish"
      ],
      [
        "egg",
        15,
        "protein"
      ],
      [
        "mayonnaise",
        15,
        "binder"
      ],
      [
        "mixed-vegetables",
        15,
        "vegetables"
      ]
    ],
    "distinctiveFlavorSources": [
      "mayonnaise",
      "tuna",
      "egg"
    ],
    "basicTaste": [
      "creamy",
      "savory",
      "mild"
    ],
    "textureProfile": [
      "soft potato",
      "creamy coating",
      "small vegetable pieces"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-egg"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "tapas",
      "cold-starter"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "egg-allergy",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Good cold tapas if mayo and tuna are welcome; heavier than it looks.",
      "zh": "能接受蛋黄酱和金枪鱼时适合；比看起来更顶饱。",
      "nl": "Goed als mayo en tonijn welkom zijn; zwaarder dan het lijkt."
    },
    "confidenceTag": "audited-spanish-batch-010",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "high"
  }),
  starterDish({
    "id": "salmorejo",
    "metadataCode": "105017",
    "cuisineId": "spanish",
    "names": {
      "en": "Salmorejo",
      "zh": "安达卢西亚浓番茄冷汤",
      "nl": "Salmorejo",
      "local": "Salmorejo"
    },
    "category": "soup",
    "cookingMethods": [
      "assembled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "Thick Andalusian cold tomato-and-bread soup topped with chopped egg and jamón.",
      "zh": "安达卢西亚浓番茄面包冷汤，常撒碎鸡蛋和火腿。",
      "nl": "Dikke Andalusische koude tomaat-broodsoep met gehakt ei en ham."
    },
    "cookingProfile": {
      "en": "It is thicker and richer than gazpacho, with bread and olive oil giving body.",
      "zh": "比西班牙冷番茄汤更浓稠厚实，面包和橄榄油带来饱满口感。",
      "nl": "Dikker en rijker dan gazpacho door brood en olijfolie."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "soup"
      ],
      "description": {
        "en": "A regional Spanish dish with a clear local identity.",
        "zh": "地区性西班牙菜，有明确地方特色。",
        "nl": "Een regionaal Spaans gerecht met duidelijke lokale identiteit."
      }
    },
    "composition": [
      [
        "tomato",
        45,
        "soup base"
      ],
      [
        "bread",
        20,
        "thickener"
      ],
      [
        "olive-oil",
        15,
        "body",
        "seasoning"
      ],
      [
        "egg",
        10,
        "garnish"
      ],
      [
        "iberico-ham",
        10,
        "garnish"
      ]
    ],
    "distinctiveFlavorSources": [
      "tomato",
      "olive-oil",
      "jamón garnish"
    ],
    "basicTaste": [
      "fresh",
      "savory",
      "rich"
    ],
    "textureProfile": [
      "thick smooth soup",
      "small egg pieces",
      "ham garnish"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "starter",
      "regional-dish"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-allergy",
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Choose it over gazpacho if you want a thicker, more filling cold soup.",
      "zh": "想要比西班牙冷番茄汤更浓、更顶饱时选它。",
      "nl": "Kies dit boven gazpacho voor dikkere, vullendere koude soep."
    },
    "confidenceTag": "audited-spanish-batch-010",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "calamares-a-la-romana",
    "metadataCode": "105018",
    "cuisineId": "spanish",
    "names": {
      "en": "Calamares a la Romana",
      "zh": "西班牙炸鱿鱼圈",
      "nl": "Calamares a la romana",
      "local": "Calamares a la romana"
    },
    "category": "seafood",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "Battered fried squid rings, usually served with lemon and sometimes aioli.",
      "zh": "裹面糊炸鱿鱼圈，通常配柠檬，有时配蒜味蛋黄酱。",
      "nl": "Gefrituurde inktvisringen in beslag, meestal met citroen en soms aioli."
    },
    "cookingProfile": {
      "en": "They are crisp outside and springy inside; best eaten hot before the coating softens.",
      "zh": "外层酥脆、内里弹嫩，趁热吃最好，放久外壳会软。",
      "nl": "Krokant buiten en veerkrachtig binnen; warm het best."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "tapas",
        "seafood"
      ],
      "description": {
        "en": "A classic Spanish menu item common in bars or restaurants.",
        "zh": "经典西班牙菜单菜，常见于酒吧或餐厅。",
        "nl": "Een klassiek Spaans menugerecht in bars of restaurants."
      }
    },
    "composition": [
      [
        "squid",
        55,
        "seafood"
      ],
      [
        "wheat-flour",
        25,
        "batter"
      ],
      [
        "egg",
        10,
        "batter binder"
      ],
      [
        "lemon",
        5,
        "finish"
      ],
      [
        "olive-oil",
        5,
        "frying oil",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "squid",
      "fried batter",
      "lemon"
    ],
    "basicTaste": [
      "savory",
      "briny",
      "fried"
    ],
    "textureProfile": [
      "crisp batter",
      "springy squid"
    ],
    "riskFlags": [
      "contains-shellfish",
      "contains-gluten",
      "contains-egg"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "tapas",
      "seafood"
    ],
    "avoidIfTags": [
      "shellfish-allergy",
      "gluten-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "A safe fried seafood order if squid texture is okay.",
      "zh": "能接受鱿鱼弹性口感时，这是稳妥炸海鲜选择。",
      "nl": "Veilige gefrituurde zeevruchtenkeuze als inktvistextuur oké is."
    },
    "confidenceTag": "audited-spanish-batch-010",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "fideua",
    "metadataCode": "105019",
    "cuisineId": "spanish",
    "names": {
      "en": "Fideuà",
      "zh": "西班牙海鲜短面",
      "nl": "Fideuà",
      "local": "Fideuà"
    },
    "category": "noodle",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Valencian seafood noodle dish made like paella but with short toasted noodles instead of rice.",
      "zh": "瓦伦西亚海鲜短面，做法像海鲜饭，但用短面条代替米。",
      "nl": "Valenciaans zeevruchtennoedelgerecht zoals paella, maar met korte noedels."
    },
    "cookingProfile": {
      "en": "The key is toasted short noodles with seafood and often aioli on the side.",
      "zh": "关键是烤香短面条配海鲜，常另配蒜味蛋黄酱。",
      "nl": "Kern is geroosterde korte noedels met zeevruchten en vaak aioli."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "seafood"
      ],
      "description": {
        "en": "A regional Spanish dish with a clear local identity.",
        "zh": "地区性西班牙菜，有明确地方特色。",
        "nl": "Een regionaal Spaans gerecht met duidelijke lokale identiteit."
      }
    },
    "composition": [
      [
        "wheat-noodles",
        45,
        "short noodles"
      ],
      [
        "shrimp",
        15,
        "seafood"
      ],
      [
        "mussels",
        10,
        "seafood"
      ],
      [
        "squid",
        10,
        "seafood"
      ],
      [
        "olive-oil",
        10,
        "cooking fat",
        "seasoning"
      ],
      [
        "saffron",
        5,
        "aroma",
        "seasoning"
      ],
      [
        "mayonnaise",
        5,
        "aioli side",
        "ingredient",
        "medium",
        true
      ]
    ],
    "distinctiveFlavorSources": [
      "toasted noodles",
      "seafood stock",
      "aioli"
    ],
    "basicTaste": [
      "savory",
      "briny",
      "garlicky"
    ],
    "textureProfile": [
      "short noodles",
      "mixed seafood",
      "creamy dip"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-shellfish",
      "contains-egg"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "regional-dish",
      "seafood"
    ],
    "avoidIfTags": [
      "gluten-free",
      "shellfish-allergy",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "Choose it if you want paella flavors but noodle texture.",
      "zh": "想要海鲜饭风味但更喜欢面条口感时选它。",
      "nl": "Kies dit voor paellasmaak met noedeltextuur."
    },
    "confidenceTag": "audited-spanish-batch-010",
    "spiceLevel": 1,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "arroz-negro",
    "metadataCode": "105020",
    "cuisineId": "spanish",
    "names": {
      "en": "Arroz Negro",
      "zh": "西班牙墨鱼汁黑饭",
      "nl": "Arroz negro",
      "local": "Arroz negro"
    },
    "category": "rice",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Spanish black rice cooked with squid ink, seafood, and often served with aioli.",
      "zh": "西班牙黑米饭，用墨鱼汁和海鲜煮成，常配蒜味蛋黄酱。",
      "nl": "Spaanse zwarte rijst met inktvisinkt en zeevruchten, vaak met aioli."
    },
    "cookingProfile": {
      "en": "It is briny, dark, and seafood-forward; the black color comes from squid ink.",
      "zh": "咸鲜、颜色深、海鲜感强，黑色来自墨鱼汁。",
      "nl": "Zilt, donker en zeevruchtenrijk; de zwarte kleur komt van inktvisinkt."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "seafood"
      ],
      "description": {
        "en": "A regional Spanish dish with a clear local identity.",
        "zh": "地区性西班牙菜，有明确地方特色。",
        "nl": "Een regionaal Spaans gerecht met duidelijke lokale identiteit."
      }
    },
    "composition": [
      [
        "short-grain-rice",
        45,
        "rice base"
      ],
      [
        "squid",
        20,
        "seafood"
      ],
      [
        "shrimp",
        10,
        "seafood"
      ],
      [
        "tomato",
        10,
        "sofrito"
      ],
      [
        "olive-oil",
        10,
        "cooking fat",
        "seasoning"
      ],
      [
        "squid-ink",
        5,
        "black seafood flavor",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "squid-ink",
      "seafood stock",
      "olive-oil"
    ],
    "basicTaste": [
      "briny",
      "savory",
      "umami"
    ],
    "textureProfile": [
      "tender rice",
      "inky sauce",
      "seafood pieces"
    ],
    "riskFlags": [
      "contains-shellfish"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "seafood",
      "regional-dish"
    ],
    "avoidIfTags": [
      "shellfish-allergy",
      "dislikes-squid-ink"
    ],
    "orderVerdict": {
      "en": "Order if squid ink sounds appealing; avoid if black seafood rice feels too intense.",
      "zh": "喜欢墨鱼汁可点；不接受黑色海鲜饭就避开。",
      "nl": "Bestel als inktvisinkt aantrekkelijk klinkt; vermijd als zwarte zeevruchtenrijst te intens is."
    },
    "confidenceTag": "audited-spanish-batch-010",
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "bacalao-al-pil-pil",
    "metadataCode": "105021",
    "cuisineId": "spanish",
    "names": {
      "en": "Bacalao al Pil Pil",
      "zh": "盐鳕鱼橄榄油乳化酱",
      "nl": "Bacalao al pil pil",
      "local": "Bacalao al pil pil"
    },
    "category": "seafood",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Salt cod served in a glossy emulsified olive oil, garlic, and chili sauce.",
      "zh": "盐鳕鱼配橄榄油、蒜和辣椒乳化成的亮面酱汁。",
      "nl": "Gezouten kabeljauw in glanzende emulsie van olijfolie, knoflook en chili."
    },
    "cookingProfile": {
      "en": "The fish is firm and flaky, while the sauce is rich without cream.",
      "zh": "鱼肉紧实片状，酱汁浓润但不是奶油酱。",
      "nl": "Stevige vlokkige vis met rijke saus zonder room."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "seafood"
      ],
      "description": {
        "en": "A regional Spanish dish with a clear local identity.",
        "zh": "地区性西班牙菜，有明确地方特色。",
        "nl": "Een regionaal Spaans gerecht met duidelijke lokale identiteit."
      }
    },
    "composition": [
      [
        "salt-cod",
        65,
        "fish"
      ],
      [
        "olive-oil",
        20,
        "emulsified sauce",
        "seasoning"
      ],
      [
        "garlic",
        10,
        "aroma",
        "seasoning"
      ],
      [
        "chili",
        5,
        "gentle heat",
        "seasoning",
        "high",
        true
      ]
    ],
    "distinctiveFlavorSources": [
      "salt-cod",
      "olive-oil emulsion",
      "garlic"
    ],
    "basicTaste": [
      "salty",
      "garlicky",
      "rich"
    ],
    "textureProfile": [
      "flaky fish",
      "glossy sauce"
    ],
    "riskFlags": [
      "contains-fish",
      "can-be-spicy"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "seafood",
      "regional-dish"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "avoids-salty-food",
      "avoids-spicy"
    ],
    "orderVerdict": {
      "en": "Great for salt-cod fans; it can taste saltier and richer than grilled fish.",
      "zh": "喜欢盐鳕鱼会适合；比烤鱼更咸也更浓润。",
      "nl": "Goed voor liefhebbers van bakkeljauw; zouter en rijker dan gegrilde vis."
    },
    "confidenceTag": "audited-spanish-batch-010",
    "spiceLevel": 1,
    "weightLevel": 3,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "merluza-a-la-vasca",
    "metadataCode": "105022",
    "cuisineId": "spanish",
    "names": {
      "en": "Merluza a la Vasca",
      "zh": "巴斯克绿酱无须鳕",
      "nl": "Merluza a la vasca",
      "local": "Merluza a la vasca"
    },
    "category": "seafood",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Hake in Basque green sauce with parsley, garlic, peas, and often clams or asparagus.",
      "zh": "无须鳕配巴斯克绿酱，常有欧芹、蒜、豌豆，也可能加蛤蜊或芦笋。",
      "nl": "Heek in Baskische groene saus met peterselie, knoflook, erwten en vaak schelpen of asperges."
    },
    "cookingProfile": {
      "en": "It is a gentle fish dish with a light green sauce rather than heavy frying.",
      "zh": "这是温和鱼类菜，配清爽绿酱，不是厚重炸物。",
      "nl": "Mild visgerecht met lichte groene saus in plaats van zwaar frituur."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "seafood"
      ],
      "description": {
        "en": "A regional Spanish dish with a clear local identity.",
        "zh": "地区性西班牙菜，有明确地方特色。",
        "nl": "Een regionaal Spaans gerecht met duidelijke lokale identiteit."
      }
    },
    "composition": [
      [
        "hake",
        55,
        "fish"
      ],
      [
        "clams",
        15,
        "optional shellfish",
        "ingredient",
        "medium",
        true
      ],
      [
        "peas",
        10,
        "green garnish"
      ],
      [
        "broth",
        10,
        "sauce base"
      ],
      [
        "parsley",
        10,
        "green sauce",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "hake",
      "parsley green sauce",
      "clams"
    ],
    "basicTaste": [
      "mild",
      "fresh",
      "savory"
    ],
    "textureProfile": [
      "flaky fish",
      "light sauce",
      "soft peas"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-shellfish"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "seafood",
      "lighter-choice"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "shellfish-allergy"
    ],
    "orderVerdict": {
      "en": "A lighter fish order; ask about clams if shellfish is an issue.",
      "zh": "较清爽的鱼类选择；介意贝类时问是否加蛤蜊。",
      "nl": "Lichtere viskeuze; vraag naar schelpen bij allergie."
    },
    "confidenceTag": "audited-spanish-batch-010",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "pollo-al-ajillo",
    "metadataCode": "105023",
    "cuisineId": "spanish",
    "names": {
      "en": "Pollo al Ajillo",
      "zh": "西班牙蒜香鸡",
      "nl": "Pollo al ajillo",
      "local": "Pollo al ajillo"
    },
    "category": "meat",
    "cookingMethods": [
      "fried",
      "simmered"
    ],
    "shortDescription": {
      "en": "Chicken pieces cooked with lots of garlic, olive oil, white wine, parsley, and lemon.",
      "zh": "鸡肉块用大量蒜、橄榄油、白葡萄酒、欧芹和柠檬烹制。",
      "nl": "Kipstukken met veel knoflook, olijfolie, witte wijn, peterselie en citroen."
    },
    "cookingProfile": {
      "en": "It is garlicky and savory, with pan juices rather than a thick sweet sauce.",
      "zh": "蒜香咸鲜，带锅汁，不是浓甜酱汁。",
      "nl": "Knoflookrijk en hartig, met pannensap in plaats van dikke zoete saus."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A garlic-forward chicken plate found on many Spanish bar and casual restaurant menus.",
        "zh": "西班牙酒吧和休闲餐厅常见的蒜香鸡肉盘，重点是蒜香和锅汁。",
        "nl": "Een knoflookrijke kipschotel op veel Spaanse bar- en informele restaurantmenu's."
      }
    },
    "composition": [
      [
        "chicken",
        65,
        "protein"
      ],
      [
        "garlic",
        15,
        "main aroma",
        "seasoning"
      ],
      [
        "olive-oil",
        10,
        "cooking fat",
        "seasoning"
      ],
      [
        "wine",
        5,
        "pan juices"
      ],
      [
        "parsley",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "garlic",
      "olive-oil",
      "white wine"
    ],
    "basicTaste": [
      "garlicky",
      "savory",
      "bright"
    ],
    "textureProfile": [
      "tender chicken",
      "glossy pan juices"
    ],
    "riskFlags": [
      "contains-alcohol"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "first-timer-friendly",
      "classic-dish"
    ],
    "avoidIfTags": [
      "avoids-garlic",
      "avoids-alcohol"
    ],
    "orderVerdict": {
      "en": "Good safe main if garlic chicken sounds appealing; not usually spicy.",
      "zh": "想吃蒜香鸡时很稳，通常不辣。",
      "nl": "Veilige keuze als knoflookkip goed klinkt; meestal niet pittig."
    },
    "confidenceTag": "audited-spanish-batch-010",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "rabo-de-toro",
    "metadataCode": "105024",
    "cuisineId": "spanish",
    "names": {
      "en": "Rabo de Toro",
      "zh": "西班牙炖牛尾",
      "nl": "Rabo de toro",
      "local": "Rabo de toro"
    },
    "category": "meat",
    "cookingMethods": [
      "braised"
    ],
    "shortDescription": {
      "en": "Slow-braised oxtail in a dark wine-based sauce, often served with potatoes or fries.",
      "zh": "牛尾用葡萄酒风味深色酱汁慢炖，常配土豆或薯条。",
      "nl": "Langzaam gestoofde ossenstaart in donkere wijnsaus, vaak met aardappel of friet."
    },
    "cookingProfile": {
      "en": "The meat is gelatinous and tender, with a rich sauce that feels heavier than steak.",
      "zh": "牛尾胶质感明显、软烂，酱汁浓厚，比牛排更厚重。",
      "nl": "Gelatineus en mals vlees met rijke saus, zwaarder dan steak."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "comfort-food"
      ],
      "description": {
        "en": "A regional Spanish dish with a clear local identity.",
        "zh": "地区性西班牙菜，有明确地方特色。",
        "nl": "Een regionaal Spaans gerecht met duidelijke lokale identiteit."
      }
    },
    "composition": [
      [
        "oxtail",
        60,
        "braised meat"
      ],
      [
        "red-wine",
        20,
        "sauce depth",
        "seasoning"
      ],
      [
        "onion",
        10,
        "sauce body"
      ],
      [
        "carrot",
        5,
        "sweetness"
      ],
      [
        "broth",
        5,
        "braising liquid"
      ]
    ],
    "distinctiveFlavorSources": [
      "oxtail",
      "red-wine",
      "braising sauce"
    ],
    "basicTaste": [
      "savory",
      "rich",
      "winey"
    ],
    "textureProfile": [
      "fall-apart meat",
      "gelatinous sauce"
    ],
    "riskFlags": [
      "contains-alcohol"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food",
      "regional-dish"
    ],
    "avoidIfTags": [
      "avoids-alcohol",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Order if you want a rich slow-braised meat dish, not a quick grilled steak.",
      "zh": "想吃浓厚慢炖肉时选它，不是快烤牛排。",
      "nl": "Kies voor rijk gestoofd vlees, niet voor snelle gegrilde steak."
    },
    "confidenceTag": "audited-spanish-batch-010",
    "spiceLevel": 0,
    "weightLevel": 5,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "carrillada",
    "metadataCode": "105025",
    "cuisineId": "spanish",
    "names": {
      "en": "Carrillada",
      "zh": "西班牙炖猪颊肉",
      "nl": "Carrillada",
      "local": "Carrillada"
    },
    "category": "meat",
    "cookingMethods": [
      "braised"
    ],
    "shortDescription": {
      "en": "Pork cheek slowly braised until very tender, usually in wine or sherry-style sauce.",
      "zh": "猪颊肉慢炖到非常软烂，通常用葡萄酒或雪莉风格酱汁。",
      "nl": "Varkenswang langzaam gestoofd tot zeer mals, vaak in wijn- of sherrysaus."
    },
    "cookingProfile": {
      "en": "It is soft, rich, and sauce-heavy, with more collagen than a lean pork cut.",
      "zh": "肉质柔软浓厚、酱汁多，比瘦猪肉更有胶质感。",
      "nl": "Zacht, rijk en sauzig, met meer collageen dan mager varkensvlees."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "comfort-food",
        "regional-dish"
      ],
      "description": {
        "en": "A slow-braised pork-cheek dish to choose when tender, collagen-rich meat sounds appealing.",
        "zh": "慢炖猪颊肉，适合想吃软烂、胶质感强的肉类时选择。",
        "nl": "Een langzaam gestoofde varkenswang voor wie mals, collageenrijk vlees zoekt."
      }
    },
    "composition": [
      [
        "pork-cheek",
        60,
        "braised pork"
      ],
      [
        "red-wine",
        15,
        "sauce depth",
        "seasoning"
      ],
      [
        "onion",
        10,
        "sauce body"
      ],
      [
        "carrot",
        10,
        "sweetness"
      ],
      [
        "broth",
        5,
        "braising liquid"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork-cheek",
      "wine sauce",
      "slow braise"
    ],
    "basicTaste": [
      "savory",
      "rich",
      "slightly sweet"
    ],
    "textureProfile": [
      "very tender meat",
      "glossy sauce"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-alcohol"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food"
    ],
    "avoidIfTags": [
      "no-pork",
      "avoids-alcohol",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "A rich pork option; good if you like soft slow-braised meat.",
      "zh": "浓厚猪肉选择；喜欢软烂慢炖肉会适合。",
      "nl": "Rijke varkenskeuze; goed bij zacht gestoofd vlees."
    },
    "confidenceTag": "audited-spanish-batch-010",
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "cocido-madrileno",
    "metadataCode": "105026",
    "cuisineId": "spanish",
    "names": {
      "en": "Cocido Madrileño",
      "zh": "马德里鹰嘴豆炖肉",
      "nl": "Cocido madrileño",
      "local": "Cocido madrileño"
    },
    "category": "meat",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Madrid chickpea stew with meats, chorizo, morcilla, potato, cabbage, and broth.",
      "zh": "马德里鹰嘴豆炖菜，含多种肉、辣香肠、血肠、土豆、卷心菜和汤。",
      "nl": "Madrileense kikkererwtenstoof met vlees, chorizo, morcilla, aardappel, kool en bouillon."
    },
    "cookingProfile": {
      "en": "It is a very filling stew, often served in parts or as a large mixed plate.",
      "zh": "这是非常顶饱的炖菜，可能分步骤上桌，也可能混合成大盘。",
      "nl": "Zeer vullende stoof, soms in gangen of als grote gemengde schotel."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "comfort-food"
      ],
      "description": {
        "en": "A regional Spanish dish with a clear local identity.",
        "zh": "地区性西班牙菜，有明确地方特色。",
        "nl": "Een regionaal Spaans gerecht met duidelijke lokale identiteit."
      }
    },
    "composition": [
      [
        "chickpeas",
        35,
        "base"
      ],
      [
        "pork",
        20,
        "meat"
      ],
      [
        "chorizo",
        15,
        "sausage"
      ],
      [
        "morcilla",
        10,
        "blood sausage"
      ],
      [
        "potato",
        10,
        "starch"
      ],
      [
        "cabbage",
        10,
        "vegetable"
      ]
    ],
    "distinctiveFlavorSources": [
      "chickpeas",
      "chorizo",
      "morcilla"
    ],
    "basicTaste": [
      "savory",
      "hearty",
      "smoky"
    ],
    "textureProfile": [
      "soft chickpeas",
      "mixed meats",
      "brothy stew"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food",
      "regional-dish"
    ],
    "avoidIfTags": [
      "no-pork",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Very hearty and meat-heavy; best when you want a full meal, not tapas.",
      "zh": "非常厚重且肉类多；适合想吃完整正餐，不适合当轻小盘。",
      "nl": "Zeer stevig en vleesrijk; eerder volledige maaltijd dan tapas."
    },
    "confidenceTag": "audited-spanish-batch-010",
    "spiceLevel": 0,
    "weightLevel": 5,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "high"
  }),
  starterDish({
    "id": "huevos-rotos",
    "metadataCode": "105027",
    "cuisineId": "spanish",
    "names": {
      "en": "Huevos Rotos",
      "zh": "碎蛋薯条火腿",
      "nl": "Huevos rotos",
      "local": "Huevos rotos"
    },
    "category": "starter",
    "cookingMethods": [
      "fried",
      "assembled"
    ],
    "shortDescription": {
      "en": "Fried eggs broken over fried potatoes, often topped with jamón or chorizo.",
      "zh": "煎蛋打散盖在炸土豆上，常加火腿或西班牙辣香肠。",
      "nl": "Gebakken eieren gebroken over gebakken aardappelen, vaak met ham of chorizo."
    },
    "cookingProfile": {
      "en": "Runny yolk becomes the sauce for the potatoes, making it richer than plain fries.",
      "zh": "流心蛋黄会变成土豆的酱汁，比普通炸土豆更浓厚。",
      "nl": "Lopende dooier wordt saus voor aardappel, rijker dan gewone friet."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "tapas",
        "comfort-food"
      ],
      "description": {
        "en": "A potato-and-egg sharing plate where runny yolk and fried potatoes define the experience.",
        "zh": "土豆和鸡蛋的小盘菜，流心蛋黄拌炸土豆是核心体验。",
        "nl": "Een deelgerecht met aardappel en ei, gedragen door lopende dooier en gebakken aardappel."
      }
    },
    "composition": [
      [
        "potato",
        50,
        "fried potatoes"
      ],
      [
        "egg",
        25,
        "runny eggs"
      ],
      [
        "iberico-ham",
        15,
        "ham topping"
      ],
      [
        "olive-oil",
        10,
        "cooking fat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "runny egg yolk",
      "fried potatoes",
      "jamón"
    ],
    "basicTaste": [
      "savory",
      "eggy",
      "salty"
    ],
    "textureProfile": [
      "crisp potatoes",
      "runny yolk",
      "silky ham"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "tapas",
      "comfort-food"
    ],
    "avoidIfTags": [
      "egg-allergy",
      "no-pork",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Great if eggs over potatoes sound good; ask for no ham if avoiding pork.",
      "zh": "喜欢鸡蛋盖土豆会很适合；避猪肉时要求不加火腿。",
      "nl": "Goed als ei op aardappel goed klinkt; vraag zonder ham bij geen varkensvlees."
    },
    "confidenceTag": "audited-spanish-batch-010",
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "tarta-de-santiago",
    "metadataCode": "105028",
    "cuisineId": "spanish",
    "names": {
      "en": "Tarta de Santiago",
      "zh": "圣地亚哥杏仁蛋糕",
      "nl": "Tarta de Santiago",
      "local": "Tarta de Santiago"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Galician almond cake dusted with powdered sugar, often marked with the Santiago cross.",
      "zh": "加利西亚杏仁蛋糕，表面撒糖粉，常有圣地亚哥十字图案。",
      "nl": "Galicische amandelcake met poedersuiker, vaak met Santiago-kruis."
    },
    "cookingProfile": {
      "en": "It is nutty, dense, and usually not creamy, with almond as the main flavor.",
      "zh": "坚果香明显、质地紧实，通常不带奶油，主味是杏仁。",
      "nl": "Nootachtig en stevig, meestal niet romig, met amandel als hoofdtoon."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "dessert",
        "regional-dish"
      ],
      "description": {
        "en": "A regional Spanish dish with a clear local identity.",
        "zh": "地区性西班牙菜，有明确地方特色。",
        "nl": "Een regionaal Spaans gerecht met duidelijke lokale identiteit."
      }
    },
    "composition": [
      [
        "almonds",
        45,
        "almond base"
      ],
      [
        "egg",
        25,
        "structure"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "lemon",
        5,
        "zest aroma"
      ],
      [
        "cinnamon",
        5,
        "warm aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "almonds",
      "lemon zest",
      "powdered sugar"
    ],
    "basicTaste": [
      "sweet",
      "nutty",
      "mildly spiced"
    ],
    "textureProfile": [
      "dense crumb",
      "powdered top"
    ],
    "riskFlags": [
      "contains-tree-nut",
      "contains-egg"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert",
      "regional-dish"
    ],
    "avoidIfTags": [
      "tree-nut-allergy",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "Choose it for almond cake; avoid with nut allergy or if you want a creamy dessert.",
      "zh": "想吃杏仁蛋糕时选它；坚果过敏或想吃奶油甜点就避开。",
      "nl": "Kies voor amandelcake; vermijd bij notenallergie of zin in romig dessert."
    },
    "confidenceTag": "audited-spanish-batch-010",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "spanish-flan",
    "metadataCode": "105029",
    "cuisineId": "spanish",
    "names": {
      "en": "Flan",
      "zh": "西班牙焦糖布丁",
      "nl": "Flan",
      "local": "Flan"
    },
    "category": "dessert",
    "cookingMethods": [
      "set"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "Spanish caramel custard with a smooth egg-and-milk base and amber caramel sauce.",
      "zh": "西班牙焦糖布丁，鸡蛋牛奶基底顺滑，配琥珀色焦糖酱。",
      "nl": "Spaanse karamelcustard met gladde ei-melkbasis en karamelsaus."
    },
    "cookingProfile": {
      "en": "It is cool, soft, and slippery, sweeter but lighter than cake.",
      "zh": "冷食、柔软顺滑，比蛋糕更甜润但更轻。",
      "nl": "Koel, zacht en glad, zoeter maar lichter dan cake."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "dessert",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A chilled caramel custard dessert for users choosing something softer and lighter than cake.",
        "zh": "冷食焦糖布丁，适合想要比蛋糕更柔软、更轻的甜点时选择。",
        "nl": "Een gekoelde karamelcustard voor wie iets zachters en lichters dan cake wil."
      }
    },
    "composition": [
      [
        "egg",
        40,
        "custard set"
      ],
      [
        "cream",
        30,
        "dairy base"
      ],
      [
        "sugar",
        25,
        "caramel"
      ],
      [
        "vanilla",
        5,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "caramel",
      "egg custard",
      "vanilla"
    ],
    "basicTaste": [
      "sweet",
      "creamy",
      "caramelized"
    ],
    "textureProfile": [
      "smooth custard",
      "soft set",
      "syrupy caramel"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert",
      "first-timer-friendly"
    ],
    "avoidIfTags": [
      "egg-allergy",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "A safe dessert if you like caramel custard.",
      "zh": "喜欢顺滑焦糖蛋奶布丁时很稳；不能吃鸡蛋或乳制品就避开。",
      "nl": "Veilige dessertkeuze als je karamelcustard lust."
    },
    "confidenceTag": "audited-spanish-batch-010",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "low"
  }),
  starterDish({
    "id": "bocadillo-de-calamares",
    "metadataCode": "105030",
    "cuisineId": "spanish",
    "names": {
      "en": "Bocadillo de Calamares",
      "zh": "炸鱿鱼圈长棍三明治",
      "nl": "Bocadillo de calamares",
      "local": "Bocadillo de calamares"
    },
    "category": "bread",
    "cookingMethods": [
      "deep-fried",
      "assembled"
    ],
    "shortDescription": {
      "en": "Spanish baguette sandwich filled with fried calamari rings, especially associated with Madrid.",
      "zh": "西班牙长棍三明治，夹炸鱿鱼圈，尤其常与马德里联系在一起。",
      "nl": "Spaans stokbroodje met gefrituurde calamares, vooral bekend uit Madrid."
    },
    "cookingProfile": {
      "en": "It is simple, bready, and fried, with lemon or aioli sometimes added for moisture.",
      "zh": "简单、面包感强、带炸物口感，有时加柠檬或蒜味蛋黄酱增加湿润度。",
      "nl": "Simpel, broodachtig en gefrituurd, soms met citroen of aioli."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "seafood"
      ],
      "description": {
        "en": "A Spanish street-food or casual bar item.",
        "zh": "西班牙街头或休闲酒吧常见小吃。",
        "nl": "Een Spaans streetfood- of informeel bargerecht."
      }
    },
    "composition": [
      [
        "bread",
        45,
        "baguette"
      ],
      [
        "squid",
        30,
        "fried calamari"
      ],
      [
        "wheat-flour",
        10,
        "batter"
      ],
      [
        "egg",
        5,
        "batter binder",
        "ingredient",
        "medium",
        true
      ],
      [
        "mayonnaise",
        5,
        "aioli side",
        "ingredient",
        "medium",
        true
      ],
      [
        "lemon",
        5,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "fried calamari",
      "bread",
      "lemon or aioli"
    ],
    "basicTaste": [
      "savory",
      "fried",
      "briny"
    ],
    "textureProfile": [
      "crusty bread",
      "crisp squid rings",
      "chewy seafood"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-shellfish",
      "contains-egg"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "street-food",
      "seafood"
    ],
    "avoidIfTags": [
      "gluten-free",
      "shellfish-allergy",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "Order for a simple Madrid fried-seafood sandwich; not a saucy lobster roll.",
      "zh": "想吃马德里炸海鲜三明治时选它；它不是多酱龙虾卷。",
      "nl": "Kies voor eenvoudig Madrileens gefrituurd zeevruchtenbroodje; geen sauzige lobster roll."
    },
    "confidenceTag": "audited-spanish-batch-010",
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "butter-chicken",
    "metadataCode": "115001",
    "cuisineId": "indian",
    "names": {
      "en": "Butter Chicken",
      "zh": "黄油鸡",
      "nl": "Butter chicken",
      "local": "murgh makhani"
    },
    "category": "curry",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Tandoori-style chicken in a buttery tomato-cream gravy; usually mild, rich, and very saucy.",
      "zh": "黄油鸡：烤鸡块配黄油番茄奶油酱，通常不太辣，酱汁浓厚。",
      "nl": "Butter chicken: tandoori-achtige kip in boterige tomaat-roomsaus; meestal mild, rijk en zeer sauzig."
    },
    "cookingProfile": {
      "en": "simmered; expect tender chicken and smooth thick sauce.",
      "zh": "通常慢煮后上桌，点餐时可预期：烤鸡块配黄油番茄奶油酱，通常不太辣，酱汁浓厚。",
      "nl": "Meestal zacht gestoofd; verwacht vooral: tandoori-achtige kip in boterige tomaat-roomsaus; meestal mild, rijk en zeer sauzig."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "internationally-known",
        "first-timer-friendly",
        "comfort-food"
      ],
      "description": {
        "en": "A widely recognized restaurant menu item; the verified card keeps the expected format and common risks concrete.",
        "zh": "国际餐厅菜单中常见的菜品；已审核卡片明确其常见形态和风险。",
        "nl": "Een breed herkenbaar restaurantgerecht; de geverifieerde kaart houdt vorm en risico's concreet."
      }
    },
    "composition": [
      [
        "chicken",
        35,
        "tandoori-style meat"
      ],
      [
        "tomato-sauce",
        25,
        "sauce base",
        "seasoning"
      ],
      [
        "cream",
        15,
        "creaminess"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "garam-masala",
        8,
        "warm spice",
        "seasoning"
      ],
      [
        "fenugreek",
        4,
        "signature aroma",
        "seasoning"
      ],
      [
        "chili",
        3,
        "mild heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "buttery tomato gravy",
      "fenugreek",
      "garam masala"
    ],
    "basicTaste": [
      "creamy",
      "savory",
      "mildly sweet"
    ],
    "textureProfile": [
      "tender chicken",
      "smooth thick sauce"
    ],
    "riskFlags": [
      "contains-dairy",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "first-timer-friendly",
      "comfort-food"
    ],
    "avoidIfTags": [
      "avoids-dairy",
      "wants-dry-grilled-food"
    ],
    "orderVerdict": {
      "en": "Order if you want a creamy mild curry with plenty of sauce for rice or naan; avoid if dairy-rich sauce feels too heavy.",
      "zh": "想要烤鸡块配黄油番茄奶油酱，通常不太辣，酱汁浓厚时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je tandoori-achtige kip in boterige tomaat-roomsaus; meestal mild, rijk en zeer sauzig wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "chicken-tikka-masala",
    "metadataCode": "115002",
    "cuisineId": "indian",
    "names": {
      "en": "Chicken Tikka Masala",
      "zh": "马萨拉烤鸡咖喱",
      "nl": "Chicken tikka masala",
      "local": "chicken tikka masala"
    },
    "category": "curry",
    "cookingMethods": [
      "grilled",
      "simmered"
    ],
    "shortDescription": {
      "en": "Grilled chicken pieces in a tomato-based masala sauce; saucy, warmly spiced, and often medium-mild.",
      "zh": "马萨拉烤鸡咖喱：烤鸡块浸在番茄香料酱里，酱多、香料温暖，辣度多为中低。",
      "nl": "Chicken tikka masala: gegrilde kipstukjes in tomaten-masalasaus; sauzig, warm gekruid en vaak mild tot medium."
    },
    "cookingProfile": {
      "en": "grilled over high heat and simmered; expect tender chicken chunks and thick sauce.",
      "zh": "通常高温烤制并慢煮后上桌，点餐时可预期：烤鸡块浸在番茄香料酱里，酱多、香料温暖，辣度多为中低。",
      "nl": "Meestal op hoge hitte gegrild en zacht gestoofd; verwacht vooral: gegrilde kipstukjes in tomaten-masalasaus; sauzig, warm gekruid en vaak mild tot medium."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "internationally-known",
        "first-timer-friendly",
        "saucy"
      ],
      "description": {
        "en": "A widely recognized restaurant menu item; the verified card keeps the expected format and common risks concrete.",
        "zh": "国际餐厅菜单中常见的菜品；已审核卡片明确其常见形态和风险。",
        "nl": "Een breed herkenbaar restaurantgerecht; de geverifieerde kaart houdt vorm en risico's concreet."
      }
    },
    "composition": [
      [
        "chicken",
        40,
        "grilled tikka pieces"
      ],
      [
        "tomato-sauce",
        25,
        "masala sauce",
        "seasoning"
      ],
      [
        "yogurt",
        10,
        "marinade tang"
      ],
      [
        "cream",
        10,
        "sauce body"
      ],
      [
        "garam-masala",
        7,
        "spice blend",
        "seasoning"
      ],
      [
        "cumin",
        4,
        "earthy spice",
        "seasoning"
      ],
      [
        "chili",
        4,
        "heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "tomato masala",
      "grilled chicken",
      "warm spices"
    ],
    "basicTaste": [
      "savory",
      "spiced",
      "creamy"
    ],
    "textureProfile": [
      "tender chicken chunks",
      "thick sauce"
    ],
    "riskFlags": [
      "contains-dairy",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "first-timer-friendly",
      "saucy"
    ],
    "avoidIfTags": [
      "avoids-dairy",
      "wants-very-hot-curry"
    ],
    "orderVerdict": {
      "en": "Order if you want a familiar saucy chicken curry; avoid if you want a dry tandoori plate or no dairy.",
      "zh": "想要烤鸡块浸在番茄香料酱里，酱多、香料温暖，辣度多为中低时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je gegrilde kipstukjes in tomaten-masalasaus; sauzig, warm gekruid en vaak mild tot medium wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 2,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "biryani",
    "metadataCode": "115003",
    "cuisineId": "indian",
    "names": {
      "en": "Biryani",
      "zh": "印度香料饭",
      "nl": "Biryani",
      "local": "biryani"
    },
    "category": "rice",
    "cookingMethods": [
      "steamed",
      "layered"
    ],
    "shortDescription": {
      "en": "Layered aromatic rice with spiced meat or vegetables; fragrant, filling, and often served as a full meal.",
      "zh": "印度香料饭：香料米饭与肉或蔬菜层叠焖制，香气强、分量足，常作为完整主食。",
      "nl": "Biryani: gelaagde aromatische rijst met gekruid vlees of groente; geurig, vullend en vaak een volledige maaltijd."
    },
    "cookingProfile": {
      "en": "steamed and built in layers; expect separate rice grains and tender protein.",
      "zh": "通常蒸制并层叠制作后上桌，点餐时可预期：香料米饭与肉或蔬菜层叠焖制，香气强、分量足，常作为完整主食。",
      "nl": "Meestal gestoomd en in lagen opgebouwd; verwacht vooral: gelaagde aromatische rijst met gekruid vlees of groente; geurig, vullend en vaak een volledige maaltijd."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "rice",
        "filling"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "steamed-rice",
        45,
        "spiced rice"
      ],
      [
        "chicken",
        25,
        "common protein"
      ],
      [
        "yogurt",
        8,
        "marinade"
      ],
      [
        "garam-masala",
        8,
        "spice aroma",
        "seasoning"
      ],
      [
        "cumin",
        5,
        "earthy spice",
        "seasoning"
      ],
      [
        "cardamom",
        4,
        "sweet aroma",
        "seasoning"
      ],
      [
        "chili",
        5,
        "heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "cardamom",
      "garam masala",
      "spiced rice"
    ],
    "basicTaste": [
      "aromatic",
      "savory",
      "spiced"
    ],
    "textureProfile": [
      "separate rice grains",
      "tender protein"
    ],
    "riskFlags": [
      "contains-dairy",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "rice",
      "filling"
    ],
    "avoidIfTags": [
      "wants-mild-plain-rice",
      "avoids-spices"
    ],
    "orderVerdict": {
      "en": "Order if you want a fragrant rice main with warm spice aroma; avoid if you prefer plain rice or very mild food.",
      "zh": "想要香料米饭与肉或蔬菜层叠焖制，香气强、分量足，常作为完整主食时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je gelaagde aromatische rijst met gekruid vlees of groente; geurig, vullend en vaak een volledige maaltijd wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 2,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "palak-paneer",
    "metadataCode": "115004",
    "cuisineId": "indian",
    "names": {
      "en": "Palak Paneer",
      "zh": "菠菜奶酪咖喱",
      "nl": "Palak paneer",
      "local": "palak paneer"
    },
    "category": "vegetarian-main",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Paneer cheese cubes in a thick spinach-based sauce; earthy, creamy, and usually mild to medium.",
      "zh": "菠菜奶酪咖喱：奶酪块配浓稠菠菜酱，草本土香和奶香明显，辣度通常不高。",
      "nl": "Palak paneer: paneerblokjes in dikke spinaziesaus; aards, romig en meestal mild tot medium."
    },
    "cookingProfile": {
      "en": "simmered; expect soft paneer cubes and thick spinach sauce.",
      "zh": "通常慢煮后上桌，点餐时可预期：奶酪块配浓稠菠菜酱，草本土香和奶香明显，辣度通常不高。",
      "nl": "Meestal zacht gestoofd; verwacht vooral: paneerblokjes in dikke spinaziesaus; aards, romig en meestal mild tot medium."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "vegetarian-friendly",
        "saucy"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "spinach",
        45,
        "green sauce"
      ],
      [
        "cheese",
        30,
        "paneer cubes"
      ],
      [
        "cream",
        8,
        "roundness"
      ],
      [
        "garam-masala",
        6,
        "spice blend",
        "seasoning"
      ],
      [
        "cumin",
        5,
        "earthy aroma",
        "seasoning"
      ],
      [
        "garlic",
        4,
        "savory base",
        "seasoning"
      ],
      [
        "chili",
        2,
        "mild heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "spinach puree",
      "paneer",
      "cumin"
    ],
    "basicTaste": [
      "savory",
      "earthy",
      "creamy"
    ],
    "textureProfile": [
      "soft paneer cubes",
      "thick spinach sauce"
    ],
    "riskFlags": [
      "contains-dairy",
      "can-be-spicy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "vegetarian-friendly",
      "saucy"
    ],
    "avoidIfTags": [
      "avoids-dairy",
      "dislikes-spinach"
    ],
    "orderVerdict": {
      "en": "Order if you want a vegetarian curry with spinach and soft cheese; avoid if dairy cheese or spinach puree is not appealing.",
      "zh": "想要奶酪块配浓稠菠菜酱，草本土香和奶香明显，辣度通常不高时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je paneerblokjes in dikke spinaziesaus; aards, romig en meestal mild tot medium wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "dal-makhani",
    "metadataCode": "115005",
    "cuisineId": "indian",
    "names": {
      "en": "Dal Makhani",
      "zh": "奶油黑扁豆咖喱",
      "nl": "Dal makhani",
      "local": "dal makhani"
    },
    "category": "vegetarian-main",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Slow-simmered black lentils and beans enriched with butter and cream; deep, earthy, and heavy.",
      "zh": "奶油黑扁豆咖喱：黑扁豆和豆类慢炖后加入黄油和奶油，浓稠厚重，豆香明显。",
      "nl": "Dal makhani: lang gestoofde zwarte linzen en bonen met boter en room; diep, aards en stevig."
    },
    "cookingProfile": {
      "en": "simmered; expect thick lentil stew and soft beans.",
      "zh": "通常慢煮后上桌，点餐时可预期：黑扁豆和豆类慢炖后加入黄油和奶油，浓稠厚重，豆香明显。",
      "nl": "Meestal zacht gestoofd; verwacht vooral: lang gestoofde zwarte linzen en bonen met boter en room; diep, aards en stevig."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "comfort-food",
        "vegetarian-friendly"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "lentils",
        45,
        "black lentil base"
      ],
      [
        "beans",
        20,
        "bean body"
      ],
      [
        "butter",
        12,
        "richness"
      ],
      [
        "cream",
        10,
        "creamy finish"
      ],
      [
        "garam-masala",
        5,
        "spice warmth",
        "seasoning"
      ],
      [
        "cumin",
        4,
        "earthy aroma",
        "seasoning"
      ],
      [
        "chili",
        4,
        "gentle heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "slow-cooked lentils",
      "butter",
      "warm spices"
    ],
    "basicTaste": [
      "creamy",
      "earthy",
      "savory"
    ],
    "textureProfile": [
      "thick lentil stew",
      "soft beans"
    ],
    "riskFlags": [
      "contains-dairy",
      "can-be-spicy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "comfort-food",
      "vegetarian-friendly"
    ],
    "avoidIfTags": [
      "avoids-dairy",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Order if you want a rich lentil curry that feels comforting and filling; avoid if you want a light or dairy-free dish.",
      "zh": "想要黑扁豆和豆类慢炖后加入黄油和奶油，浓稠厚重，豆香明显时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je lang gestoofde zwarte linzen en bonen met boter en room; diep, aards en stevig wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "chana-masala",
    "metadataCode": "115006",
    "cuisineId": "indian",
    "names": {
      "en": "Chana Masala",
      "zh": "鹰嘴豆马萨拉",
      "nl": "Chana masala",
      "local": "chana masala"
    },
    "category": "vegetarian-main",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Chickpeas in a tomato-onion masala; hearty, tangy, and often naturally vegan.",
      "zh": "鹰嘴豆马萨拉：鹰嘴豆配番茄洋葱香料酱，厚实微酸，常见做法本身偏素食友好。",
      "nl": "Chana masala: kikkererwten in tomaat-ui-masala; stevig, licht zuur en vaak van nature vegan."
    },
    "cookingProfile": {
      "en": "simmered; expect soft chickpeas and thick sauce.",
      "zh": "通常慢煮后上桌，点餐时可预期：鹰嘴豆配番茄洋葱香料酱，厚实微酸，常见做法本身偏素食友好。",
      "nl": "Meestal zacht gestoofd; verwacht vooral: kikkererwten in tomaat-ui-masala; stevig, licht zuur en vaak van nature vegan."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "vegan-friendly",
        "filling"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "chickpeas",
        50,
        "main body"
      ],
      [
        "tomato-sauce",
        20,
        "sauce base",
        "seasoning"
      ],
      [
        "garam-masala",
        8,
        "spice blend",
        "seasoning"
      ],
      [
        "cumin",
        7,
        "earthy aroma",
        "seasoning"
      ],
      [
        "coriander",
        5,
        "citrus spice",
        "seasoning"
      ],
      [
        "chili",
        5,
        "heat",
        "seasoning"
      ],
      [
        "lime",
        5,
        "bright finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "chickpeas",
      "tomato masala",
      "cumin"
    ],
    "basicTaste": [
      "savory",
      "tangy",
      "spiced"
    ],
    "textureProfile": [
      "soft chickpeas",
      "thick sauce"
    ],
    "riskFlags": [
      "can-be-spicy"
    ],
    "dietaryFlags": [
      "vegan"
    ],
    "goodForTags": [
      "vegan-friendly",
      "filling"
    ],
    "avoidIfTags": [
      "dislikes-chickpeas",
      "avoids-spice"
    ],
    "orderVerdict": {
      "en": "Order if you want a hearty chickpea curry without cream; avoid if legumes or medium spice are not appealing.",
      "zh": "想要鹰嘴豆配番茄洋葱香料酱，厚实微酸，常见做法本身偏素食友好时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je kikkererwten in tomaat-ui-masala; stevig, licht zuur en vaak van nature vegan wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 2,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "samosa",
    "metadataCode": "115007",
    "cuisineId": "indian",
    "names": {
      "en": "Samosa",
      "zh": "印度咖喱角",
      "nl": "Samosa",
      "local": "samosa"
    },
    "category": "fried-snack",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "Deep-fried pastry filled with spiced potato and peas; crisp outside, soft and aromatic inside.",
      "zh": "印度咖喱角：油炸酥皮包香料土豆和豌豆，外壳脆，内馅绵软带香料。",
      "nl": "Samosa: gefrituurd deeg met gekruide aardappel en erwtjes; krokant buiten, zacht en aromatisch binnen."
    },
    "cookingProfile": {
      "en": "Deep-fried pastry gives a crisp shell around soft spiced potato and pea filling.",
      "zh": "薄面皮油炸后外壳酥脆，里面是绵软的香料土豆和豌豆。",
      "nl": "Gefrituurd deeg vormt een krokante schaal rond zachte gekruide aardappel en erwtjes."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "snack",
        "shareable"
      ],
      "description": {
        "en": "A street-food style menu reference; the verified card explains the usual handheld or casual format and common risks.",
        "zh": "街头小吃风格的菜单项；已审核卡片说明常见食用形式和风险。",
        "nl": "Een streetfoodachtig menu-item; de geverifieerde kaart legt vorm en risico's uit."
      }
    },
    "composition": [
      [
        "samosa-pastry",
        35,
        "crisp shell"
      ],
      [
        "potato",
        35,
        "spiced filling"
      ],
      [
        "peas",
        10,
        "filling"
      ],
      [
        "cumin",
        6,
        "earthy spice",
        "seasoning"
      ],
      [
        "coriander",
        5,
        "citrus spice",
        "seasoning"
      ],
      [
        "garam-masala",
        5,
        "warm spice",
        "seasoning"
      ],
      [
        "chili",
        4,
        "heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "fried pastry",
      "spiced potato",
      "cumin"
    ],
    "basicTaste": [
      "savory",
      "spiced",
      "starchy"
    ],
    "textureProfile": [
      "crisp shell",
      "soft potato filling"
    ],
    "riskFlags": [
      "contains-gluten",
      "can-be-spicy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "snack",
      "shareable"
    ],
    "avoidIfTags": [
      "avoids-fried-food",
      "avoids-gluten"
    ],
    "orderVerdict": {
      "en": "Order if you want a crisp vegetarian snack with spiced potato; avoid if fried pastry or gluten is a concern.",
      "zh": "想吃酥脆素食小吃和香料土豆馅时适合；介意油炸或麸质就谨慎。",
      "nl": "Neem dit voor een krokante vegetarische snack met gekruide aardappel; vermijd bij frituur- of glutenbezwaren."
    },
    "spiceLevel": 2,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "naan",
    "metadataCode": "115008",
    "cuisineId": "indian",
    "names": {
      "en": "Naan",
      "zh": "印度烤饼",
      "nl": "Naan",
      "local": "naan"
    },
    "category": "bread",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Soft leavened flatbread from a tandoor, often brushed with butter or garlic; best with saucy dishes.",
      "zh": "印度烤饼：炉烤发酵扁面包，常刷黄油或蒜香，适合蘸咖喱酱汁。",
      "nl": "Naan: zacht gerezen platbrood uit de tandoor, vaak met boter of knoflook; goed bij sauzige gerechten."
    },
    "cookingProfile": {
      "en": "baked; expect soft chewy bread and charred spots.",
      "zh": "通常烘烤后上桌，点餐时可预期：炉烤发酵扁面包，常刷黄油或蒜香，适合蘸咖喱酱汁。",
      "nl": "Meestal gebakken in de oven; verwacht vooral: zacht gerezen platbrood uit de tandoor, vaak met boter of knoflook; goed bij sauzige gerechten."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "bread",
        "sauce-scooping"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "bread",
        65,
        "flatbread base"
      ],
      [
        "yogurt",
        12,
        "softness"
      ],
      [
        "butter",
        10,
        "finish"
      ],
      [
        "garlic",
        8,
        "optional aroma",
        "seasoning"
      ],
      [
        "sea-salt",
        5,
        "seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "tandoor char",
      "butter",
      "optional garlic"
    ],
    "basicTaste": [
      "bready",
      "savory",
      "buttery"
    ],
    "textureProfile": [
      "soft chewy bread",
      "charred spots"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "bread",
      "sauce-scooping"
    ],
    "avoidIfTags": [
      "avoids-gluten",
      "avoids-dairy"
    ],
    "orderVerdict": {
      "en": "Order if you want soft bread for scooping curry sauces; avoid if gluten or dairy butter is off-limits.",
      "zh": "想要炉烤发酵扁面包，常刷黄油或蒜香，适合蘸咖喱酱汁时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je zacht gerezen platbrood uit de tandoor, vaak met boter of knoflook; goed bij sauzige gerechten wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "tandoori-chicken",
    "metadataCode": "115009",
    "cuisineId": "indian",
    "names": {
      "en": "Tandoori Chicken",
      "zh": "印度泥炉烤鸡",
      "nl": "Tandoori chicken",
      "local": "tandoori chicken"
    },
    "category": "meat",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Yogurt-spice marinated chicken roasted in high heat; smoky, red-orange, and usually served drier than curry.",
      "zh": "印度泥炉烤鸡：酸奶香料腌鸡高温烤制，颜色红橙，烟熏感强，比咖喱更干爽。",
      "nl": "Tandoori chicken: kip gemarineerd in yoghurt en specerijen, heet geroosterd; rokerig, rood-oranje en droger dan curry."
    },
    "cookingProfile": {
      "en": "grilled over high heat; expect charred edges and juicy chicken.",
      "zh": "通常高温烤制后上桌，点餐时可预期：酸奶香料腌鸡高温烤制，颜色红橙，烟熏感强，比咖喱更干爽。",
      "nl": "Meestal op hoge hitte gegrild; verwacht vooral: kip gemarineerd in yoghurt en specerijen, heet geroosterd; rokerig, rood-oranje en droger dan curry."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "grilled",
        "protein-forward"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "chicken",
        65,
        "marinated meat"
      ],
      [
        "yogurt",
        12,
        "marinade"
      ],
      [
        "garam-masala",
        8,
        "spice blend",
        "seasoning"
      ],
      [
        "cumin",
        5,
        "earthy aroma",
        "seasoning"
      ],
      [
        "chili",
        5,
        "heat",
        "seasoning"
      ],
      [
        "lime",
        5,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "tandoor char",
      "yogurt marinade",
      "warm spices"
    ],
    "basicTaste": [
      "savory",
      "smoky",
      "spiced"
    ],
    "textureProfile": [
      "charred edges",
      "juicy chicken"
    ],
    "riskFlags": [
      "contains-dairy",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "grilled",
      "protein-forward"
    ],
    "avoidIfTags": [
      "wants-saucy-curry",
      "avoids-dairy"
    ],
    "orderVerdict": {
      "en": "Order if you want grilled spiced chicken rather than a saucy dish; avoid if you want lots of sauce or no dairy marinade.",
      "zh": "想要酸奶香料腌鸡高温烤制，颜色红橙，烟熏感强，比咖喱更干爽时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je kip gemarineerd in yoghurt en specerijen, heet geroosterd; rokerig, rood-oranje en droger dan curry wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 2,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "vindaloo",
    "metadataCode": "115010",
    "cuisineId": "indian",
    "names": {
      "en": "Vindaloo",
      "zh": "辛辣酸香咖喱",
      "nl": "Vindaloo",
      "local": "vindaloo"
    },
    "category": "curry",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "A Goan-style hot and tangy curry, traditionally pork with vinegar and chili; often one of the spiciest menu choices.",
      "zh": "辛辣酸香咖喱：果阿风格酸辣咖喱，传统常用猪肉、醋和辣椒，通常是菜单里较辣的选择。",
      "nl": "Vindaloo: Goaanse hete en zurige curry, traditioneel met varkensvlees, azijn en chili; vaak een van de pittigste opties."
    },
    "cookingProfile": {
      "en": "simmered; expect tender meat and sharp saucy curry.",
      "zh": "通常慢煮后上桌，点餐时可预期：果阿风格酸辣咖喱，传统常用猪肉、醋和辣椒，通常是菜单里较辣的选择。",
      "nl": "Meestal zacht gestoofd; verwacht vooral: Goaanse hete en zurige curry, traditioneel met varkensvlees, azijn en chili; vaak een van de pittigste opties."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional",
        "spicy",
        "regional-dish"
      ],
      "description": {
        "en": "A regional menu reference; the verified card captures the expected preparation style and common ordering risks.",
        "zh": "带地区特点的菜单项；已审核卡片说明常见做法和点餐风险。",
        "nl": "Een regionaal menu-item; de geverifieerde kaart beschrijft bereidingsstijl en bestelrisico's."
      }
    },
    "composition": [
      [
        "pork",
        35,
        "traditional meat"
      ],
      [
        "potato",
        20,
        "restaurant variation"
      ],
      [
        "vinegar",
        15,
        "sharp tang",
        "seasoning"
      ],
      [
        "chili",
        12,
        "main heat",
        "seasoning"
      ],
      [
        "garlic",
        7,
        "savory base",
        "seasoning"
      ],
      [
        "cumin",
        6,
        "earthy spice",
        "seasoning"
      ],
      [
        "turmeric",
        5,
        "warm color",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "vinegar tang",
      "chili heat",
      "garlic"
    ],
    "basicTaste": [
      "spicy",
      "sour",
      "savory"
    ],
    "textureProfile": [
      "tender meat",
      "sharp saucy curry"
    ],
    "riskFlags": [
      "can-be-spicy",
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "spicy",
      "regional-dish"
    ],
    "avoidIfTags": [
      "avoids-heat",
      "avoids-pork"
    ],
    "orderVerdict": {
      "en": "Order if you want a sharp, hot curry with vinegar bite; avoid if strong heat, sourness, or pork is a problem.",
      "zh": "想要果阿风格酸辣咖喱，传统常用猪肉、醋和辣椒，通常是菜单里较辣的选择时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je Goaanse hete en zurige curry, traditioneel met varkensvlees, azijn en chili; vaak een van de pittigste opties wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 4,
    "weightLevel": 4,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "rogan-josh",
    "metadataCode": "115011",
    "cuisineId": "indian",
    "names": {
      "en": "Rogan Josh",
      "zh": "克什米尔羊肉咖喱",
      "nl": "Rogan josh",
      "local": "rogan josh"
    },
    "category": "curry",
    "cookingMethods": [
      "braised",
      "simmered"
    ],
    "shortDescription": {
      "en": "Aromatic lamb curry with warm red spices and a yogurt-tomato body; rich but usually not as hot as vindaloo.",
      "zh": "克什米尔羊肉咖喱：羊肉香料咖喱，红色温香料和酸奶番茄酱体明显，浓郁但通常不是最辣。",
      "nl": "Rogan josh: aromatische lamscurry met warme rode specerijen en yoghurt-tomatensaus; rijk maar meestal niet zo heet als vindaloo."
    },
    "cookingProfile": {
      "en": "slow-braised and simmered; expect tender lamb and smooth sauce.",
      "zh": "通常慢炖并慢煮后上桌，点餐时可预期：羊肉香料咖喱，红色温香料和酸奶番茄酱体明显，浓郁但通常不是最辣。",
      "nl": "Meestal langzaam gestoofd en zacht gestoofd; verwacht vooral: aromatische lamscurry met warme rode specerijen en yoghurt-tomatensaus; rijk maar meestal niet zo heet als vindaloo."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional",
        "lamb-lover",
        "regional-dish"
      ],
      "description": {
        "en": "A regional menu reference; the verified card captures the expected preparation style and common ordering risks.",
        "zh": "带地区特点的菜单项；已审核卡片说明常见做法和点餐风险。",
        "nl": "Een regionaal menu-item; de geverifieerde kaart beschrijft bereidingsstijl en bestelrisico's."
      }
    },
    "composition": [
      [
        "lamb",
        45,
        "braised meat"
      ],
      [
        "tomato-sauce",
        18,
        "sauce base",
        "seasoning"
      ],
      [
        "yogurt",
        10,
        "tangy body"
      ],
      [
        "garam-masala",
        8,
        "warm spice",
        "seasoning"
      ],
      [
        "paprika",
        7,
        "red color",
        "seasoning"
      ],
      [
        "cumin",
        5,
        "earthy aroma",
        "seasoning"
      ],
      [
        "cardamom",
        4,
        "sweet aroma",
        "seasoning"
      ],
      [
        "chili",
        3,
        "heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "braised lamb",
      "Kashmiri-style warm spices",
      "yogurt tang"
    ],
    "basicTaste": [
      "savory",
      "aromatic",
      "medium-spiced"
    ],
    "textureProfile": [
      "tender lamb",
      "smooth sauce"
    ],
    "riskFlags": [
      "contains-dairy",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "lamb-lover",
      "regional-dish"
    ],
    "avoidIfTags": [
      "avoids-lamb",
      "avoids-dairy"
    ],
    "orderVerdict": {
      "en": "Order if you want a rich lamb curry with warm spice depth; avoid if lamb flavor or dairy sauce is not welcome.",
      "zh": "想要羊肉香料咖喱，红色温香料和酸奶番茄酱体明显，浓郁但通常不是最辣时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je aromatische lamscurry met warme rode specerijen en yoghurt-tomatensaus; rijk maar meestal niet zo heet als vindaloo wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 2,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "gulab-jamun",
    "metadataCode": "115012",
    "cuisineId": "indian",
    "names": {
      "en": "Gulab Jamun",
      "zh": "玫瑰糖浆奶球",
      "nl": "Gulab jamun",
      "local": "gulab jamun"
    },
    "category": "dessert",
    "cookingMethods": [
      "deep-fried",
      "simmered"
    ],
    "shortDescription": {
      "en": "Soft fried milk-solid dumplings soaked in cardamom-scented sugar syrup; very sweet and syrupy.",
      "zh": "玫瑰糖浆奶球：炸奶香小球浸在小豆蔻糖浆里，质地柔软，甜度很高。",
      "nl": "Gulab jamun: zachte gefrituurde melkdeegballetjes in kardemomsiroop; heel zoet en sirooprijk."
    },
    "cookingProfile": {
      "en": "deep-fried and simmered; expect soft syrup-soaked balls and dense tender center.",
      "zh": "通常油炸并慢煮后上桌，点餐时可预期：炸奶香小球浸在小豆蔻糖浆里，质地柔软，甜度很高。",
      "nl": "Meestal gefrituurd en zacht gestoofd; verwacht vooral: zachte gefrituurde melkdeegballetjes in kardemomsiroop; heel zoet en sirooprijk."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "dessert",
        "sweet-tooth"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "milk-solids",
        30,
        "milk-solid body"
      ],
      [
        "wheat-flour",
        20,
        "dumpling structure"
      ],
      [
        "sugar",
        30,
        "syrup"
      ],
      [
        "butter",
        8,
        "fried richness"
      ],
      [
        "cardamom",
        7,
        "syrup aroma",
        "seasoning"
      ],
      [
        "sea-salt",
        5,
        "balance",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "cardamom syrup",
      "fried milk dough"
    ],
    "basicTaste": [
      "very sweet",
      "milky",
      "aromatic"
    ],
    "textureProfile": [
      "soft syrup-soaked balls",
      "dense tender center"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-gluten"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert",
      "sweet-tooth"
    ],
    "avoidIfTags": [
      "dislikes-very-sweet-desserts",
      "avoids-dairy"
    ],
    "orderVerdict": {
      "en": "Order if you want a warm syrupy dessert in small portions; avoid if you dislike very sweet dairy desserts.",
      "zh": "想要炸奶香小球浸在小豆蔻糖浆里，质地柔软，甜度很高时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je zachte gefrituurde melkdeegballetjes in kardemomsiroop; heel zoet en sirooprijk wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "pho-bo",
    "metadataCode": "116001",
    "cuisineId": "vietnamese",
    "names": {
      "en": "Phở Bò",
      "zh": "越南牛肉粉",
      "nl": "Phở bò",
      "local": "phở bò"
    },
    "category": "noodle-soup",
    "cookingMethods": [
      "simmered",
      "assembled"
    ],
    "shortDescription": {
      "en": "Vietnamese beef noodle soup with clear aromatic broth, rice noodles, herbs, lime, and sliced beef.",
      "zh": "越南牛肉粉：越南牛肉粉，清澈牛骨香料汤配河粉、香草、青柠和牛肉片。",
      "nl": "Phở bò: Vietnamese rundernoedelsoep met heldere aromatische bouillon, rijstnoedels, kruiden, limoen en rundvlees."
    },
    "cookingProfile": {
      "en": "simmered and assembled to order; expect slippery rice noodles, tender beef and clear broth.",
      "zh": "通常慢煮并现拌或组合后上桌，点餐时可预期：越南牛肉粉，清澈牛骨香料汤配河粉、香草、青柠和牛肉片。",
      "nl": "Meestal zacht gestoofd en samengesteld; verwacht vooral: Vietnamese rundernoedelsoep met heldere aromatische bouillon, rijstnoedels, kruiden, limoen en rundvlees."
    },
    "cuisineRole": {
      "level": "signature",
      "tags": [
        "signature",
        "noodle",
        "soup",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A signature menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的代表性菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een kenmerkend menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "rice-noodles",
        35,
        "noodle base"
      ],
      [
        "beef",
        25,
        "sliced beef"
      ],
      [
        "broth",
        25,
        "clear beef broth"
      ],
      [
        "bean-sprouts",
        5,
        "fresh garnish"
      ],
      [
        "lime",
        4,
        "fresh acid"
      ],
      [
        "coriander",
        3,
        "herbal note",
        "seasoning"
      ],
      [
        "cinnamon",
        3,
        "broth spice",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "beef broth",
      "warm pho spices",
      "fresh herbs"
    ],
    "basicTaste": [
      "savory",
      "aromatic",
      "fresh"
    ],
    "textureProfile": [
      "slippery rice noodles",
      "tender beef",
      "clear broth"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "noodle",
      "soup",
      "first-timer-friendly"
    ],
    "avoidIfTags": [
      "wants-dry-noodles"
    ],
    "orderVerdict": {
      "en": "Order if you want a fragrant beef noodle soup that is lighter than creamy ramen; avoid if you want dry noodles or dislike herb garnishes.",
      "zh": "想要越南牛肉粉，清澈牛骨香料汤配河粉、香草、青柠和牛肉片时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je Vietnamese rundernoedelsoep met heldere aromatische bouillon, rijstnoedels, kruiden, limoen en rundvlees wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "pho-ga",
    "metadataCode": "116002",
    "cuisineId": "vietnamese",
    "names": {
      "en": "Phở Gà",
      "zh": "越南鸡肉粉",
      "nl": "Phở gà",
      "local": "phở gà"
    },
    "category": "noodle-soup",
    "cookingMethods": [
      "simmered",
      "assembled"
    ],
    "shortDescription": {
      "en": "Chicken pho with rice noodles, clear broth, herbs, and lime; lighter and gentler than beef pho.",
      "zh": "越南鸡肉粉：鸡肉越南粉，清汤河粉配鸡肉、香草和青柠，比牛肉粉更清淡。",
      "nl": "Phở gà: kip-pho met rijstnoedels, heldere bouillon, kruiden en limoen; lichter dan rund-pho."
    },
    "cookingProfile": {
      "en": "simmered and assembled to order; expect slippery rice noodles, soft chicken and brothy.",
      "zh": "通常慢煮并现拌或组合后上桌，点餐时可预期：鸡肉越南粉，清汤河粉配鸡肉、香草和青柠，比牛肉粉更清淡。",
      "nl": "Meestal zacht gestoofd en samengesteld; verwacht vooral: kip-pho met rijstnoedels, heldere bouillon, kruiden en limoen; lichter dan rund-pho."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "soup",
        "safe-choice"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "rice-noodles",
        38,
        "noodle base"
      ],
      [
        "chicken",
        25,
        "poached chicken"
      ],
      [
        "broth",
        25,
        "clear chicken broth"
      ],
      [
        "bean-sprouts",
        5,
        "fresh garnish"
      ],
      [
        "lime",
        4,
        "fresh acid"
      ],
      [
        "coriander",
        3,
        "herbal note",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "clear chicken broth",
      "fresh herbs",
      "lime"
    ],
    "basicTaste": [
      "savory",
      "light",
      "aromatic"
    ],
    "textureProfile": [
      "slippery rice noodles",
      "soft chicken",
      "brothy"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "soup",
      "safe-choice"
    ],
    "avoidIfTags": [
      "wants-rich-heavy-food"
    ],
    "orderVerdict": {
      "en": "Order if you want a gentle clear chicken noodle soup; avoid if you want a heavy creamy noodle bowl.",
      "zh": "想要鸡肉越南粉，清汤河粉配鸡肉、香草和青柠，比牛肉粉更清淡时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je kip-pho met rijstnoedels, heldere bouillon, kruiden en limoen; lichter dan rund-pho wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "banh-mi",
    "metadataCode": "116003",
    "cuisineId": "vietnamese",
    "names": {
      "en": "Bánh Mì",
      "zh": "越南法棍三明治",
      "nl": "Bánh mì",
      "local": "bánh mì"
    },
    "category": "sandwich",
    "cookingMethods": [
      "assembled",
      "toasted"
    ],
    "shortDescription": {
      "en": "Vietnamese baguette sandwich with savory filling, pickled vegetables, herbs, chili, and mayo.",
      "zh": "越南法棍三明治：越南法棍三明治，夹肉、腌菜、香草、辣椒和蛋黄酱，酸爽又有脆感。",
      "nl": "Bánh mì: Vietnamese baguettesandwich met hartige vulling, pickles, kruiden, chili en mayo."
    },
    "cookingProfile": {
      "en": "assembled to order and toasted; expect crisp baguette, juicy filling and crunchy pickles.",
      "zh": "通常现拌或组合并烤脆后上桌，点餐时可预期：越南法棍三明治，夹肉、腌菜、香草、辣椒和蛋黄酱，酸爽又有脆感。",
      "nl": "Meestal samengesteld en geroosterd; verwacht vooral: Vietnamese baguettesandwich met hartige vulling, pickles, kruiden, chili en mayo."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "street-food",
        "sandwich"
      ],
      "description": {
        "en": "A street-food style menu reference; the verified card explains the usual handheld or casual format and common risks.",
        "zh": "街头小吃风格的菜单项；已审核卡片说明常见食用形式和风险。",
        "nl": "Een streetfoodachtig menu-item; de geverifieerde kaart legt vorm en risico's uit."
      }
    },
    "composition": [
      [
        "bread",
        35,
        "baguette"
      ],
      [
        "pork",
        25,
        "common filling"
      ],
      [
        "pickles",
        15,
        "pickled vegetables"
      ],
      [
        "cucumber",
        8,
        "fresh crunch"
      ],
      [
        "mayonnaise",
        7,
        "rich spread"
      ],
      [
        "chili",
        5,
        "optional heat",
        "seasoning"
      ],
      [
        "soy-sauce",
        5,
        "savory seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "crusty bread",
      "pickled vegetables",
      "savory meat"
    ],
    "basicTaste": [
      "savory",
      "tangy",
      "fresh"
    ],
    "textureProfile": [
      "crisp baguette",
      "juicy filling",
      "crunchy pickles"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-pork",
      "contains-soy",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "street-food",
      "sandwich"
    ],
    "avoidIfTags": [
      "avoids-pork",
      "avoids-gluten"
    ],
    "orderVerdict": {
      "en": "Order if you want a crisp, tangy, filling sandwich; avoid if pork, gluten, or mayo are concerns.",
      "zh": "想要越南法棍三明治，夹肉、腌菜、香草、辣椒和蛋黄酱，酸爽又有脆感时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je Vietnamese baguettesandwich met hartige vulling, pickles, kruiden, chili en mayo wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "goi-cuon",
    "metadataCode": "116004",
    "cuisineId": "vietnamese",
    "names": {
      "en": "Gỏi Cuốn",
      "zh": "越南鲜春卷",
      "nl": "Verse loempia",
      "local": "gỏi cuốn"
    },
    "category": "starter",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Fresh rice paper rolls with noodles, herbs, shrimp and/or pork, usually served with hoisin-peanut dip.",
      "zh": "越南鲜春卷：越南鲜春卷，米纸包粉、香草、虾或猪肉，常配海鲜酱花生蘸酱。",
      "nl": "Verse loempia: verse rijstvellen met noedels, kruiden, garnaal en/of varkensvlees, vaak met hoisin-pindadip."
    },
    "cookingProfile": {
      "en": "assembled to order; expect soft rice paper, crisp herbs and springy noodles.",
      "zh": "通常现拌或组合后上桌，点餐时可预期：越南鲜春卷，米纸包粉、香草、虾或猪肉，常配海鲜酱花生蘸酱。",
      "nl": "Meestal samengesteld; verwacht vooral: verse rijstvellen met noedels, kruiden, garnaal en/of varkensvlees, vaak met hoisin-pindadip."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "fresh",
        "starter"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "rice-noodles",
        25,
        "soft filling"
      ],
      [
        "shrimp",
        20,
        "common protein"
      ],
      [
        "pork",
        15,
        "common protein"
      ],
      [
        "mixed-vegetables",
        15,
        "fresh herbs and lettuce"
      ],
      [
        "rice-flour-batter",
        15,
        "rice paper wrapper"
      ],
      [
        "hoisin-sauce",
        5,
        "dip",
        "seasoning"
      ],
      [
        "satay-sauce",
        5,
        "peanut dip",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "fresh herbs",
      "hoisin-peanut dip",
      "shrimp"
    ],
    "basicTaste": [
      "fresh",
      "mild",
      "sweet-savory"
    ],
    "textureProfile": [
      "soft rice paper",
      "crisp herbs",
      "springy noodles"
    ],
    "riskFlags": [
      "contains-shellfish",
      "contains-pork",
      "contains-peanut",
      "contains-soy",
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "fresh",
      "starter"
    ],
    "avoidIfTags": [
      "shellfish-allergy",
      "pork-avoidant",
      "peanut-allergy",
      "soy-allergy",
      "gluten-allergy"
    ],
    "orderVerdict": {
      "en": "Order if you want a fresh light starter with dipping sauce; avoid if shellfish, pork, or peanut sauce is unsafe.",
      "zh": "想要清爽鲜春卷和蘸酱时适合；虾、猪肉、花生、海鲜酱或麸质不适合你就谨慎。",
      "nl": "Neem dit voor een frisse lichte starter met dipsaus; vermijd bij schaaldieren, varken, pinda, soja of gluten."
    },
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "cha-gio",
    "metadataCode": "116005",
    "cuisineId": "vietnamese",
    "names": {
      "en": "Chả Giò",
      "zh": "越南炸春卷",
      "nl": "Gefrituurde loempia",
      "local": "chả giò"
    },
    "category": "fried-snack",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "Vietnamese fried spring rolls, often with pork, shrimp, glass noodles, and fish sauce seasoning.",
      "zh": "越南炸春卷：越南炸春卷，常包猪肉、虾和粉丝，外壳酥脆，鱼露鲜味明显。",
      "nl": "Gefrituurde loempia: Vietnamese gefrituurde loempia's, vaak met varkensvlees, garnaal, glasnoedels en vissaus."
    },
    "cookingProfile": {
      "en": "deep-fried; expect crisp shell, juicy filling and springy noodles.",
      "zh": "通常油炸后上桌，点餐时可预期：越南炸春卷，常包猪肉、虾和粉丝，外壳酥脆，鱼露鲜味明显。",
      "nl": "Meestal gefrituurd; verwacht vooral: Vietnamese gefrituurde loempia's, vaak met varkensvlees, garnaal, glasnoedels en vissaus."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "starter",
        "shareable"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "rice-flour-batter",
        30,
        "rice paper wrapper"
      ],
      [
        "pork",
        25,
        "minced filling"
      ],
      [
        "shrimp",
        15,
        "seafood filling"
      ],
      [
        "glass-noodles",
        10,
        "filling"
      ],
      [
        "mixed-vegetables",
        10,
        "filling crunch"
      ],
      [
        "fish-sauce",
        5,
        "seasoning",
        "seasoning"
      ],
      [
        "black-pepper",
        5,
        "warm bite",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "fried rice paper",
      "fish sauce",
      "pork-shrimp filling"
    ],
    "basicTaste": [
      "savory",
      "fried",
      "umami"
    ],
    "textureProfile": [
      "crisp shell",
      "juicy filling",
      "springy noodles"
    ],
    "riskFlags": [
      "contains-shellfish",
      "contains-pork",
      "contains-fish-sauce"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "starter",
      "shareable"
    ],
    "avoidIfTags": [
      "avoids-fried-food",
      "shellfish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if you want a crisp fried starter with savory filling; avoid if fried food, pork, or shellfish is a problem.",
      "zh": "想要越南炸春卷，常包猪肉、虾和粉丝，外壳酥脆，鱼露鲜味明显时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je Vietnamese gefrituurde loempia's, vaak met varkensvlees, garnaal, glasnoedels en vissaus wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "bun-cha",
    "metadataCode": "116006",
    "cuisineId": "vietnamese",
    "names": {
      "en": "Bún Chả",
      "zh": "越南烤肉米粉",
      "nl": "Bún chả",
      "local": "bún chả"
    },
    "category": "noodle",
    "cookingMethods": [
      "grilled",
      "assembled"
    ],
    "shortDescription": {
      "en": "Hanoi-style grilled pork with rice noodles, herbs, and sweet-sour fish sauce dipping broth.",
      "zh": "越南烤肉米粉：河内风味烤猪肉米粉，配香草和酸甜鱼露蘸汤，清爽但肉香明显。",
      "nl": "Bún chả: Hanoi-stijl gegrild varkensvlees met rijstnoedels, kruiden en zoetzure vissausdip."
    },
    "cookingProfile": {
      "en": "grilled over high heat and assembled to order; expect cool noodles, grilled pork and crisp herbs.",
      "zh": "通常高温烤制并现拌或组合后上桌，点餐时可预期：河内风味烤猪肉米粉，配香草和酸甜鱼露蘸汤，清爽但肉香明显。",
      "nl": "Meestal op hoge hitte gegrild en samengesteld; verwacht vooral: Hanoi-stijl gegrild varkensvlees met rijstnoedels, kruiden en zoetzure vissausdip."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional",
        "regional-dish",
        "noodle"
      ],
      "description": {
        "en": "A regional menu reference; the verified card captures the expected preparation style and common ordering risks.",
        "zh": "带地区特点的菜单项；已审核卡片说明常见做法和点餐风险。",
        "nl": "Een regionaal menu-item; de geverifieerde kaart beschrijft bereidingsstijl en bestelrisico's."
      }
    },
    "composition": [
      [
        "rice-noodles",
        35,
        "noodle base"
      ],
      [
        "pork",
        30,
        "grilled pork"
      ],
      [
        "mixed-vegetables",
        15,
        "herbs and lettuce"
      ],
      [
        "fish-sauce",
        10,
        "dipping sauce",
        "seasoning"
      ],
      [
        "lime",
        5,
        "brightness"
      ],
      [
        "chili",
        3,
        "optional heat",
        "seasoning"
      ],
      [
        "palm-sugar",
        2,
        "sweet balance",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "charred pork",
      "fish sauce dipping broth",
      "fresh herbs"
    ],
    "basicTaste": [
      "savory",
      "sweet-sour",
      "fresh"
    ],
    "textureProfile": [
      "cool noodles",
      "grilled pork",
      "crisp herbs"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-fish-sauce",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "regional-dish",
      "noodle"
    ],
    "avoidIfTags": [
      "avoids-pork",
      "dislikes-fish-sauce"
    ],
    "orderVerdict": {
      "en": "Order if you want grilled pork with cool noodles and bright dipping sauce; avoid if pork or fish sauce is unwanted.",
      "zh": "想要河内风味烤猪肉米粉，配香草和酸甜鱼露蘸汤，清爽但肉香明显时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je Hanoi-stijl gegrild varkensvlees met rijstnoedels, kruiden en zoetzure vissausdip wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "bun-bo-hue",
    "metadataCode": "116007",
    "cuisineId": "vietnamese",
    "names": {
      "en": "Bún Bò Huế",
      "zh": "顺化牛肉粉",
      "nl": "Bún bò Huế",
      "local": "bún bò Huế"
    },
    "category": "noodle-soup",
    "cookingMethods": [
      "simmered",
      "assembled"
    ],
    "shortDescription": {
      "en": "Hue-style spicy beef noodle soup with lemongrass broth, chili oil, and thicker rice noodles.",
      "zh": "顺化牛肉粉：顺化风味辣牛肉米粉，香茅汤底和红油明显，河粉更粗更有弹性。",
      "nl": "Bún bò Huế: pittige rundernoedelsoep uit Hue met citroengrasbouillon, chiliolie en dikkere rijstnoedels."
    },
    "cookingProfile": {
      "en": "simmered and assembled to order; expect springy rice noodles, meaty broth and tender slices.",
      "zh": "通常慢煮并现拌或组合后上桌，点餐时可预期：顺化风味辣牛肉米粉，香茅汤底和红油明显，河粉更粗更有弹性。",
      "nl": "Meestal zacht gestoofd en samengesteld; verwacht vooral: pittige rundernoedelsoep uit Hue met citroengrasbouillon, chiliolie en dikkere rijstnoedels."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional",
        "spicy",
        "regional-dish"
      ],
      "description": {
        "en": "A regional menu reference; the verified card captures the expected preparation style and common ordering risks.",
        "zh": "带地区特点的菜单项；已审核卡片说明常见做法和点餐风险。",
        "nl": "Een regionaal menu-item; de geverifieerde kaart beschrijft bereidingsstijl en bestelrisico's."
      }
    },
    "composition": [
      [
        "rice-noodles",
        35,
        "thick rice noodles"
      ],
      [
        "beef",
        25,
        "sliced beef"
      ],
      [
        "pork",
        10,
        "pork variation"
      ],
      [
        "broth",
        18,
        "lemongrass broth"
      ],
      [
        "lemongrass",
        5,
        "signature aroma",
        "seasoning"
      ],
      [
        "chili",
        5,
        "red heat",
        "seasoning"
      ],
      [
        "fish-sauce",
        2,
        "umami",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "lemongrass",
      "chili oil",
      "beef-pork broth"
    ],
    "basicTaste": [
      "spicy",
      "savory",
      "aromatic"
    ],
    "textureProfile": [
      "springy rice noodles",
      "meaty broth",
      "tender slices"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-fish-sauce",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "spicy",
      "regional-dish"
    ],
    "avoidIfTags": [
      "avoids-heat",
      "avoids-pork"
    ],
    "orderVerdict": {
      "en": "Order if you want a spicier, deeper pho-like noodle soup; avoid if you need mild broth or avoid pork-based variations.",
      "zh": "想要顺化风味辣牛肉米粉，香茅汤底和红油明显，河粉更粗更有弹性时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je pittige rundernoedelsoep uit Hue met citroengrasbouillon, chiliolie en dikkere rijstnoedels wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 3,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "com-tam",
    "metadataCode": "116008",
    "cuisineId": "vietnamese",
    "names": {
      "en": "Cơm Tấm",
      "zh": "越南碎米饭",
      "nl": "Cơm tấm",
      "local": "cơm tấm"
    },
    "category": "rice",
    "cookingMethods": [
      "grilled",
      "assembled"
    ],
    "shortDescription": {
      "en": "Broken rice plate with grilled pork, egg, pickles, and fish sauce dressing; a filling Vietnamese rice meal.",
      "zh": "越南碎米饭：碎米饭配烤猪排、鸡蛋、腌菜和鱼露酱汁，是饱足的越南饭盘。",
      "nl": "Cơm tấm: gebroken rijst met gegrild varkensvlees, ei, pickles en vissausdressing; een vullende Vietnamese rijstmaaltijd."
    },
    "cookingProfile": {
      "en": "grilled over high heat and assembled to order; expect soft broken rice, charred pork and fresh garnish.",
      "zh": "通常高温烤制并现拌或组合后上桌，点餐时可预期：碎米饭配烤猪排、鸡蛋、腌菜和鱼露酱汁，是饱足的越南饭盘。",
      "nl": "Meestal op hoge hitte gegrild en samengesteld; verwacht vooral: gebroken rijst met gegrild varkensvlees, ei, pickles en vissausdressing; een vullende Vietnamese rijstmaaltijd."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "rice",
        "street-food"
      ],
      "description": {
        "en": "A street-food style menu reference; the verified card explains the usual handheld or casual format and common risks.",
        "zh": "街头小吃风格的菜单项；已审核卡片说明常见食用形式和风险。",
        "nl": "Een streetfoodachtig menu-item; de geverifieerde kaart legt vorm en risico's uit."
      }
    },
    "composition": [
      [
        "steamed-rice",
        40,
        "broken rice base"
      ],
      [
        "pork",
        30,
        "grilled pork chop"
      ],
      [
        "egg",
        10,
        "fried egg or egg meatloaf"
      ],
      [
        "cucumber",
        8,
        "fresh garnish"
      ],
      [
        "fish-sauce",
        7,
        "dressing",
        "seasoning"
      ],
      [
        "chili",
        3,
        "optional heat",
        "seasoning"
      ],
      [
        "palm-sugar",
        2,
        "sweet balance",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "grilled pork",
      "fish sauce dressing",
      "pickled freshness"
    ],
    "basicTaste": [
      "savory",
      "sweet-salty",
      "grilled"
    ],
    "textureProfile": [
      "soft broken rice",
      "charred pork",
      "fresh garnish"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-egg",
      "contains-fish-sauce",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "rice",
      "street-food"
    ],
    "avoidIfTags": [
      "avoids-pork",
      "avoids-fish-sauce"
    ],
    "orderVerdict": {
      "en": "Order if you want a full rice plate with grilled pork; avoid if pork, egg, or fish sauce is an issue.",
      "zh": "想要碎米饭配烤猪排、鸡蛋、腌菜和鱼露酱汁，是饱足的越南饭盘时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je gebroken rijst met gegrild varkensvlees, ei, pickles en vissausdressing; een vullende Vietnamese rijstmaaltijd wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "banh-xeo",
    "metadataCode": "116009",
    "cuisineId": "vietnamese",
    "names": {
      "en": "Bánh Xèo",
      "zh": "越南煎饼",
      "nl": "Bánh xèo",
      "local": "bánh xèo"
    },
    "category": "pancake",
    "cookingMethods": [
      "fried",
      "assembled"
    ],
    "shortDescription": {
      "en": "Crisp turmeric rice pancake filled with shrimp, pork, and bean sprouts, eaten with herbs and dipping sauce.",
      "zh": "越南煎饼：姜黄米浆煎成薄脆饼，包虾、猪肉和豆芽，配香草与鱼露蘸汁。",
      "nl": "Bánh xèo: krokante rijstpannenkoek met kurkuma, garnaal, varkensvlees en taugé, gegeten met kruiden en dipsaus."
    },
    "cookingProfile": {
      "en": "fried and assembled to order; expect crisp pancake edge, juicy filling and fresh herbs.",
      "zh": "通常煎炸并现拌或组合后上桌，点餐时可预期：姜黄米浆煎成薄脆饼，包虾、猪肉和豆芽，配香草与鱼露蘸汁。",
      "nl": "Meestal gebakken in vet en samengesteld; verwacht vooral: krokante rijstpannenkoek met kurkuma, garnaal, varkensvlees en taugé, gegeten met kruiden en dipsaus."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional",
        "shareable",
        "regional-dish"
      ],
      "description": {
        "en": "A regional menu reference; the verified card captures the expected preparation style and common ordering risks.",
        "zh": "带地区特点的菜单项；已审核卡片说明常见做法和点餐风险。",
        "nl": "Een regionaal menu-item; de geverifieerde kaart beschrijft bereidingsstijl en bestelrisico's."
      }
    },
    "composition": [
      [
        "rice-flour-batter",
        35,
        "crisp turmeric pancake"
      ],
      [
        "shrimp",
        20,
        "seafood filling"
      ],
      [
        "pork",
        15,
        "meat filling"
      ],
      [
        "bean-sprouts",
        15,
        "crunch"
      ],
      [
        "mixed-vegetables",
        8,
        "lettuce and herbs"
      ],
      [
        "turmeric",
        4,
        "golden color",
        "seasoning"
      ],
      [
        "fish-sauce",
        3,
        "dip",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "crispy rice batter",
      "turmeric",
      "fish sauce dip"
    ],
    "basicTaste": [
      "savory",
      "fresh",
      "lightly oily"
    ],
    "textureProfile": [
      "crisp pancake edge",
      "juicy filling",
      "fresh herbs"
    ],
    "riskFlags": [
      "contains-shellfish",
      "contains-pork",
      "contains-fish-sauce"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "shareable",
      "regional-dish"
    ],
    "avoidIfTags": [
      "shellfish-allergy",
      "avoids-pork"
    ],
    "orderVerdict": {
      "en": "Order if you want a crisp savory pancake with fresh herbs; avoid if shellfish, pork, or fish sauce is unsafe.",
      "zh": "想要姜黄米浆煎成薄脆饼，包虾、猪肉和豆芽，配香草与鱼露蘸汁时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je krokante rijstpannenkoek met kurkuma, garnaal, varkensvlees en taugé, gegeten met kruiden en dipsaus wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "cao-lau",
    "metadataCode": "116010",
    "cuisineId": "vietnamese",
    "names": {
      "en": "Cao Lầu",
      "zh": "会安高楼面",
      "nl": "Cao lầu",
      "local": "cao lầu"
    },
    "category": "noodle",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Hoi An-style chewy noodles with pork, herbs, a little sauce, and crisp crackers; less brothy than pho.",
      "zh": "会安高楼面：会安风味韧性面条配猪肉、香草、少量酱汁和脆片，比越南粉更干拌。",
      "nl": "Cao lầu: Hoi An-noedels met stevige beet, varkensvlees, kruiden, weinig saus en krokante crackers; droger dan pho."
    },
    "cookingProfile": {
      "en": "Assembled with only a little sauce, so it feels chewy, herbal, porky, and much drier than pho.",
      "zh": "通常只拌少量酱汁，面条有嚼劲，带猪肉和香草感，比越南粉干很多。",
      "nl": "Met weinig saus samengesteld: stevig, kruidig, met varkensvlees en veel droger dan pho."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional",
        "regional-dish",
        "noodle"
      ],
      "description": {
        "en": "A regional menu reference; the verified card captures the expected preparation style and common ordering risks.",
        "zh": "带地区特点的菜单项；已审核卡片说明常见做法和点餐风险。",
        "nl": "Een regionaal menu-item; de geverifieerde kaart beschrijft bereidingsstijl en bestelrisico's."
      }
    },
    "composition": [
      [
        "wheat-noodles",
        35,
        "chewy noodles"
      ],
      [
        "pork",
        25,
        "char siu-style pork"
      ],
      [
        "mixed-vegetables",
        15,
        "herbs and greens"
      ],
      [
        "prawn-crackers",
        10,
        "crisp topping"
      ],
      [
        "soy-sauce",
        7,
        "savory sauce",
        "seasoning"
      ],
      [
        "chili",
        4,
        "optional heat",
        "seasoning"
      ],
      [
        "garlic",
        4,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "chewy noodles",
      "roasted pork",
      "soy-garlic sauce"
    ],
    "basicTaste": [
      "savory",
      "herbal",
      "lightly sweet"
    ],
    "textureProfile": [
      "chewy noodles",
      "crisp crackers",
      "tender pork"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-pork",
      "contains-soy",
      "contains-shellfish",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "regional-dish",
      "noodle"
    ],
    "avoidIfTags": [
      "avoids-pork",
      "avoids-gluten",
      "shellfish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if you want a regional dry noodle bowl with pork and herbs; avoid if you need gluten-free noodles or no pork.",
      "zh": "想要会安风味韧性面条配猪肉、香草、少量酱汁和脆片，比越南粉更干拌时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je Hoi An-noedels met stevige beet, varkensvlees, kruiden, weinig saus en krokante crackers; droger dan pho wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "bo-luc-lac",
    "metadataCode": "116011",
    "cuisineId": "vietnamese",
    "names": {
      "en": "Bò Lúc Lắc",
      "zh": "越式摇牛肉",
      "nl": "Bò lúc lắc",
      "local": "bò lúc lắc"
    },
    "category": "meat",
    "cookingMethods": [
      "stir-fried"
    ],
    "shortDescription": {
      "en": "Vietnamese shaking beef: seared beef cubes tossed with garlic, pepper, and soy-style seasoning.",
      "zh": "越式摇牛肉：越南摇牛肉，牛肉块快炒至外焦内嫩，蒜香、黑胡椒和酱油鲜味明显。",
      "nl": "Bò lúc lắc: Vietnamese shaking beef: kort gebakken rundblokjes met knoflook, peper en sojachtige marinade."
    },
    "cookingProfile": {
      "en": "Quick stir-frying sears the beef cubes, leaving a juicy center and peppery garlic-soy glaze.",
      "zh": "牛肉块快速爆炒到外层焦香、内部多汁，蒜香黑胡椒和酱油味明显。",
      "nl": "Kort roerbakken schroeit rundblokjes dicht, met sappige kern en peperige knoflook-sojaglans."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "beef",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "beef",
        45,
        "seared cubes"
      ],
      [
        "steamed-rice",
        25,
        "rice or side"
      ],
      [
        "mixed-vegetables",
        15,
        "salad bed"
      ],
      [
        "soy-sauce",
        6,
        "savory marinade",
        "seasoning"
      ],
      [
        "garlic",
        5,
        "aroma",
        "seasoning"
      ],
      [
        "black-pepper",
        4,
        "pepper bite",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "garlic beef",
      "black pepper",
      "soy marinade"
    ],
    "basicTaste": [
      "savory",
      "peppery",
      "slightly sweet"
    ],
    "textureProfile": [
      "seared beef cubes",
      "juicy center",
      "fresh salad"
    ],
    "riskFlags": [
      "contains-soy",
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "beef",
      "first-timer-friendly"
    ],
    "avoidIfTags": [
      "avoids-red-meat",
      "soy-allergy",
      "gluten-allergy"
    ],
    "orderVerdict": {
      "en": "Order if you want tender seared beef with peppery garlic flavor; avoid if you do not want red meat.",
      "zh": "想吃黑椒蒜香、外焦内嫩的牛肉块时适合；不吃红肉、酱油或麸质就避开。",
      "nl": "Neem dit voor mals gebakken rund met peperige knoflooksmaak; vermijd bij rood vlees, soja of gluten."
    },
    "spiceLevel": 1,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "che",
    "metadataCode": "116012",
    "cuisineId": "vietnamese",
    "names": {
      "en": "Chè",
      "zh": "越南甜品羹",
      "nl": "Chè",
      "local": "chè"
    },
    "category": "dessert",
    "cookingMethods": [
      "assembled",
      "chilled"
    ],
    "shortDescription": {
      "en": "Vietnamese sweet dessert soup or cup with beans, jellies, fruit, coconut milk, and ice; textures vary a lot.",
      "zh": "越南甜品羹：越南甜品杯或甜汤，常有豆类、冻、果料、椰奶和冰，口感层次很多。",
      "nl": "Chè: Vietnamese zoete dessertsoep of beker met bonen, jelly, fruit, kokosmelk en ijs; veel textuurvariatie."
    },
    "cookingProfile": {
      "en": "assembled to order and served cold; expect icy, chewy bits and soft beans.",
      "zh": "通常现拌或组合并冷食后上桌，点餐时可预期：越南甜品杯或甜汤，常有豆类、冻、果料、椰奶和冰，口感层次很多。",
      "nl": "Meestal samengesteld en koud geserveerd; verwacht vooral: Vietnamese zoete dessertsoep of beker met bonen, jelly, fruit, kokosmelk en ijs; veel textuurvariatie."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "dessert",
        "refreshing"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "beans",
        25,
        "sweet beans or jelly mix"
      ],
      [
        "shaved-ice",
        20,
        "cold base"
      ],
      [
        "coconut-milk",
        20,
        "creamy liquid",
        "seasoning"
      ],
      [
        "fruit-sauce-or-caramel",
        15,
        "sweet syrup"
      ],
      [
        "sticky-rice",
        10,
        "chewy element"
      ],
      [
        "toasted-coconut",
        5,
        "topping"
      ],
      [
        "palm-sugar",
        5,
        "sweetness",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "coconut milk",
      "sweet beans",
      "palm sugar"
    ],
    "basicTaste": [
      "sweet",
      "creamy",
      "refreshing"
    ],
    "textureProfile": [
      "icy",
      "chewy bits",
      "soft beans"
    ],
    "riskFlags": [],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert",
      "refreshing"
    ],
    "avoidIfTags": [
      "dislikes-mixed-texture-desserts"
    ],
    "orderVerdict": {
      "en": "Order if you want a cold sweet dessert with mixed chewy and creamy textures; avoid if mixed jelly-bean textures are not appealing.",
      "zh": "想要越南甜品杯或甜汤，常有豆类、冻、果料、椰奶和冰，口感层次很多时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je Vietnamese zoete dessertsoep of beker met bonen, jelly, fruit, kokosmelk en ijs; veel textuurvariatie wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "nasi-goreng",
    "metadataCode": "117001",
    "cuisineId": "indonesian",
    "names": {
      "en": "Nasi Goreng",
      "zh": "印尼炒饭",
      "nl": "Nasi goreng",
      "local": "nasi goreng"
    },
    "category": "rice",
    "cookingMethods": [
      "stir-fried"
    ],
    "shortDescription": {
      "en": "Indonesian fried rice with sweet soy, sambal, egg, and often chicken or shrimp; darker and sweeter than plain fried rice.",
      "zh": "印尼炒饭：印尼炒饭用甜酱油和参巴调味，常配蛋和肉，颜色较深，甜咸微辣。",
      "nl": "Nasi goreng: Indonesische gebakken rijst met ketjap, sambal, ei en vaak kip of garnaal; donkerder en zoeter dan gewone fried rice."
    },
    "cookingProfile": {
      "en": "stir-fried; expect separate fried rice, soft egg and lightly oily grains.",
      "zh": "通常快炒后上桌，点餐时可预期：印尼炒饭用甜酱油和参巴调味，常配蛋和肉，颜色较深，甜咸微辣。",
      "nl": "Meestal geroerbakt; verwacht vooral: Indonesische gebakken rijst met ketjap, sambal, ei en vaak kip of garnaal; donkerder en zoeter dan gewone fried rice."
    },
    "cuisineRole": {
      "level": "signature",
      "tags": [
        "signature",
        "rice",
        "signature-dish"
      ],
      "description": {
        "en": "A signature menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的代表性菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een kenmerkend menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "steamed-rice",
        45,
        "fried rice base"
      ],
      [
        "egg",
        15,
        "topping or mix-in"
      ],
      [
        "chicken",
        15,
        "common protein"
      ],
      [
        "mixed-vegetables",
        10,
        "vegetable mix"
      ],
      [
        "ketjap-manis",
        8,
        "sweet soy depth",
        "seasoning"
      ],
      [
        "sambal",
        4,
        "chili heat",
        "seasoning"
      ],
      [
        "garlic",
        3,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "sweet soy",
      "sambal",
      "wok-fried rice"
    ],
    "basicTaste": [
      "savory",
      "sweet",
      "spicy"
    ],
    "textureProfile": [
      "separate fried rice",
      "soft egg",
      "lightly oily grains"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-soy",
      "contains-gluten",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "rice",
      "signature-dish"
    ],
    "avoidIfTags": [
      "avoids-egg",
      "avoids-sweet-soy"
    ],
    "orderVerdict": {
      "en": "Order if you want fried rice with sweet soy and chili aroma; avoid if egg, soy, or mild sweetness is unwanted.",
      "zh": "想要印尼炒饭用甜酱油和参巴调味，常配蛋和肉，颜色较深，甜咸微辣时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je Indonesische gebakken rijst met ketjap, sambal, ei en vaak kip of garnaal; donkerder en zoeter dan gewone fried rice wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 2,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "mie-goreng",
    "metadataCode": "117002",
    "cuisineId": "indonesian",
    "names": {
      "en": "Mie Goreng",
      "zh": "印尼炒面",
      "nl": "Mie goreng",
      "local": "mie goreng"
    },
    "category": "noodle",
    "cookingMethods": [
      "stir-fried"
    ],
    "shortDescription": {
      "en": "Indonesian stir-fried noodles with sweet soy, sambal, egg, vegetables, and often chicken.",
      "zh": "印尼炒面：印尼炒面用甜酱油、参巴、鸡蛋和蔬菜快炒，面条油润带甜辣。",
      "nl": "Mie goreng: Indonesische gebakken noedels met ketjap, sambal, ei, groente en vaak kip."
    },
    "cookingProfile": {
      "en": "stir-fried; expect springy noodles, glossy sauce and soft egg.",
      "zh": "通常快炒后上桌，点餐时可预期：印尼炒面用甜酱油、参巴、鸡蛋和蔬菜快炒，面条油润带甜辣。",
      "nl": "Meestal geroerbakt; verwacht vooral: Indonesische gebakken noedels met ketjap, sambal, ei, groente en vaak kip."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "noodle",
        "street-food"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "wheat-noodles",
        45,
        "fried noodle base"
      ],
      [
        "egg",
        15,
        "mix-in"
      ],
      [
        "chicken",
        15,
        "common protein"
      ],
      [
        "mixed-vegetables",
        10,
        "vegetables"
      ],
      [
        "ketjap-manis",
        8,
        "sweet soy sauce",
        "seasoning"
      ],
      [
        "sambal",
        4,
        "heat",
        "seasoning"
      ],
      [
        "garlic",
        3,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "sweet soy",
      "sambal",
      "fried noodles"
    ],
    "basicTaste": [
      "savory",
      "sweet",
      "spicy"
    ],
    "textureProfile": [
      "springy noodles",
      "glossy sauce",
      "soft egg"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-soy",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "noodle",
      "street-food"
    ],
    "avoidIfTags": [
      "avoids-gluten",
      "avoids-sweet-soy"
    ],
    "orderVerdict": {
      "en": "Order if you want glossy sweet-spicy fried noodles; avoid if wheat noodles, egg, or soy are a problem.",
      "zh": "想要印尼炒面用甜酱油、参巴、鸡蛋和蔬菜快炒，面条油润带甜辣时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je Indonesische gebakken noedels met ketjap, sambal, ei, groente en vaak kip wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 2,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "rendang",
    "metadataCode": "117003",
    "cuisineId": "indonesian",
    "names": {
      "en": "Rendang",
      "zh": "仁当牛肉",
      "nl": "Rendang",
      "local": "rendang"
    },
    "category": "meat",
    "cookingMethods": [
      "braised",
      "simmered"
    ],
    "shortDescription": {
      "en": "Slow-cooked beef in coconut and spice paste reduced until dark, rich, and intensely aromatic.",
      "zh": "仁当牛肉：牛肉在椰奶和香料酱中慢炖收浓，颜色深，香气厚重，通常不是水汤咖喱。",
      "nl": "Rendang: rundvlees langzaam gestoofd in kokos en specerijenpasta tot donker, rijk en zeer aromatisch."
    },
    "cookingProfile": {
      "en": "slow-braised and simmered; expect tender beef, dry-ish thick coating and fibrous sauce.",
      "zh": "通常慢炖并慢煮后上桌，点餐时可预期：牛肉在椰奶和香料酱中慢炖收浓，颜色深，香气厚重，通常不是水汤咖喱。",
      "nl": "Meestal langzaam gestoofd en zacht gestoofd; verwacht vooral: rundvlees langzaam gestoofd in kokos en specerijenpasta tot donker, rijk en zeer aromatisch."
    },
    "cuisineRole": {
      "level": "signature",
      "tags": [
        "signature",
        "signature-dish",
        "meat-lover"
      ],
      "description": {
        "en": "A signature menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的代表性菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een kenmerkend menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "beef",
        45,
        "slow-cooked meat"
      ],
      [
        "coconut-milk",
        20,
        "reduced sauce",
        "seasoning"
      ],
      [
        "coconut-curry",
        12,
        "spice paste",
        "seasoning"
      ],
      [
        "lemongrass",
        6,
        "aroma",
        "seasoning"
      ],
      [
        "chili",
        6,
        "heat",
        "seasoning"
      ],
      [
        "turmeric",
        5,
        "earthy color",
        "seasoning"
      ],
      [
        "toasted-coconut",
        6,
        "toasty body"
      ]
    ],
    "distinctiveFlavorSources": [
      "reduced coconut spice paste",
      "lemongrass",
      "toasted coconut"
    ],
    "basicTaste": [
      "rich",
      "spicy",
      "aromatic"
    ],
    "textureProfile": [
      "tender beef",
      "dry-ish thick coating",
      "fibrous sauce"
    ],
    "riskFlags": [
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "signature-dish",
      "meat-lover"
    ],
    "avoidIfTags": [
      "wants-light-food",
      "avoids-heat"
    ],
    "orderVerdict": {
      "en": "Order if you want deeply spiced tender beef with reduced coconut richness; avoid if you want a light or very saucy curry.",
      "zh": "想要牛肉在椰奶和香料酱中慢炖收浓，颜色深，香气厚重，通常不是水汤咖喱时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je rundvlees langzaam gestoofd in kokos en specerijenpasta tot donker, rijk en zeer aromatisch wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 3,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "gado-gado",
    "metadataCode": "117004",
    "cuisineId": "indonesian",
    "names": {
      "en": "Gado-Gado",
      "zh": "印尼花生酱沙拉",
      "nl": "Gado-gado",
      "local": "gado-gado"
    },
    "category": "salad",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Indonesian vegetable salad with tofu, egg, potatoes, and thick peanut dressing; filling for a salad.",
      "zh": "印尼花生酱沙拉：印尼蔬菜沙拉，配豆腐、鸡蛋、土豆和浓花生酱，作为沙拉也很有饱腹感。",
      "nl": "Gado-gado: Indonesische groentesalade met tofu, ei, aardappel en dikke pindasaus; vullend voor een salade."
    },
    "cookingProfile": {
      "en": "assembled to order; expect crisp-soft vegetables, creamy peanut dressing and crunchy crackers.",
      "zh": "通常现拌或组合后上桌，点餐时可预期：印尼蔬菜沙拉，配豆腐、鸡蛋、土豆和浓花生酱，作为沙拉也很有饱腹感。",
      "nl": "Meestal samengesteld; verwacht vooral: Indonesische groentesalade met tofu, ei, aardappel en dikke pindasaus; vullend voor een salade."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "vegetarian-friendly",
        "salad"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "mixed-vegetables",
        35,
        "blanched vegetables"
      ],
      [
        "tofu",
        15,
        "protein"
      ],
      [
        "egg",
        15,
        "boiled egg"
      ],
      [
        "potato",
        10,
        "starchy bite"
      ],
      [
        "satay-sauce",
        20,
        "peanut dressing",
        "seasoning"
      ],
      [
        "prawn-crackers",
        5,
        "crisp garnish"
      ]
    ],
    "distinctiveFlavorSources": [
      "peanut sauce",
      "blanched vegetables",
      "crackers"
    ],
    "basicTaste": [
      "nutty",
      "savory",
      "mildly sweet"
    ],
    "textureProfile": [
      "crisp-soft vegetables",
      "creamy peanut dressing",
      "crunchy crackers"
    ],
    "riskFlags": [
      "contains-peanut",
      "contains-egg",
      "contains-soy",
      "contains-shellfish"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "vegetarian-friendly",
      "salad"
    ],
    "avoidIfTags": [
      "peanut-allergy",
      "avoids-egg"
    ],
    "orderVerdict": {
      "en": "Order if you want a peanut-sauced vegetable plate; avoid if peanut sauce or egg is unsafe.",
      "zh": "想要印尼蔬菜沙拉，配豆腐、鸡蛋、土豆和浓花生酱，作为沙拉也很有饱腹感时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je Indonesische groentesalade met tofu, ei, aardappel en dikke pindasaus; vullend voor een salade wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "satay-ayam",
    "metadataCode": "117005",
    "cuisineId": "indonesian",
    "names": {
      "en": "Satay Ayam",
      "zh": "印尼鸡肉沙爹",
      "nl": "Saté ayam",
      "local": "sate ayam"
    },
    "category": "meat",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Chicken skewers grilled and served with peanut sauce and sweet soy; nutty, smoky, and easy to share.",
      "zh": "印尼鸡肉沙爹：鸡肉串炭烤后配花生酱和甜酱油，坚果香、烟熏感和甜咸味明显。",
      "nl": "Saté ayam: kipspiesjes gegrild en geserveerd met pindasaus en ketjap; nootachtig, rokerig en deelbaar."
    },
    "cookingProfile": {
      "en": "grilled over high heat; expect grilled chicken and creamy sauce.",
      "zh": "通常高温烤制后上桌，点餐时可预期：鸡肉串炭烤后配花生酱和甜酱油，坚果香、烟熏感和甜咸味明显。",
      "nl": "Meestal op hoge hitte gegrild; verwacht vooral: kipspiesjes gegrild en geserveerd met pindasaus en ketjap; nootachtig, rokerig en deelbaar."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "street-food",
        "shareable"
      ],
      "description": {
        "en": "A street-food style menu reference; the verified card explains the usual handheld or casual format and common risks.",
        "zh": "街头小吃风格的菜单项；已审核卡片说明常见食用形式和风险。",
        "nl": "Een streetfoodachtig menu-item; de geverifieerde kaart legt vorm en risico's uit."
      }
    },
    "composition": [
      [
        "chicken",
        55,
        "skewered meat"
      ],
      [
        "satay-sauce",
        25,
        "peanut sauce",
        "seasoning"
      ],
      [
        "ketjap-manis",
        8,
        "sweet soy glaze",
        "seasoning"
      ],
      [
        "sambal",
        4,
        "chili accent",
        "seasoning"
      ],
      [
        "cucumber",
        4,
        "fresh side"
      ],
      [
        "steamed-rice",
        4,
        "optional side"
      ]
    ],
    "distinctiveFlavorSources": [
      "charred chicken",
      "peanut sauce",
      "sweet soy"
    ],
    "basicTaste": [
      "savory",
      "nutty",
      "sweet"
    ],
    "textureProfile": [
      "grilled chicken",
      "creamy sauce"
    ],
    "riskFlags": [
      "contains-peanut",
      "contains-soy",
      "contains-gluten",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "street-food",
      "shareable"
    ],
    "avoidIfTags": [
      "peanut-allergy",
      "avoids-sweet-sauces"
    ],
    "orderVerdict": {
      "en": "Order if you want grilled chicken with creamy peanut sauce; avoid if peanuts or sweet soy sauce are a problem.",
      "zh": "想要鸡肉串炭烤后配花生酱和甜酱油，坚果香、烟熏感和甜咸味明显时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je kipspiesjes gegrild en geserveerd met pindasaus en ketjap; nootachtig, rokerig en deelbaar wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "soto-ayam",
    "metadataCode": "117006",
    "cuisineId": "indonesian",
    "names": {
      "en": "Soto Ayam",
      "zh": "印尼鸡汤",
      "nl": "Soto ayam",
      "local": "soto ayam"
    },
    "category": "soup",
    "cookingMethods": [
      "simmered",
      "assembled"
    ],
    "shortDescription": {
      "en": "Indonesian chicken soup with turmeric-yellow broth, noodles, egg, and herbs; lighter than curry.",
      "zh": "印尼鸡汤：印尼鸡汤，姜黄色清汤配鸡肉、粉丝、鸡蛋和香草，比咖喱更清爽。",
      "nl": "Soto ayam: Indonesische kippensoep met kurkuma-gele bouillon, noedels, ei en kruiden; lichter dan curry."
    },
    "cookingProfile": {
      "en": "simmered and assembled to order; expect clear yellow broth, soft chicken and springy noodles.",
      "zh": "通常慢煮并现拌或组合后上桌，点餐时可预期：印尼鸡汤，姜黄色清汤配鸡肉、粉丝、鸡蛋和香草，比咖喱更清爽。",
      "nl": "Meestal zacht gestoofd en samengesteld; verwacht vooral: Indonesische kippensoep met kurkuma-gele bouillon, noedels, ei en kruiden; lichter dan curry."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "soup",
        "comfort-food"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "chicken",
        25,
        "shredded meat"
      ],
      [
        "glass-noodles",
        20,
        "noodle element"
      ],
      [
        "broth",
        25,
        "yellow broth"
      ],
      [
        "egg",
        10,
        "boiled egg"
      ],
      [
        "turmeric",
        7,
        "golden aroma",
        "seasoning"
      ],
      [
        "lemongrass",
        5,
        "citrus aroma",
        "seasoning"
      ],
      [
        "coriander",
        4,
        "spice",
        "seasoning"
      ],
      [
        "chili",
        4,
        "optional heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "turmeric broth",
      "lemongrass",
      "chicken"
    ],
    "basicTaste": [
      "savory",
      "aromatic",
      "lightly spiced"
    ],
    "textureProfile": [
      "clear yellow broth",
      "soft chicken",
      "springy noodles"
    ],
    "riskFlags": [
      "contains-egg",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "soup",
      "comfort-food"
    ],
    "avoidIfTags": [
      "avoids-egg",
      "wants-creamy-soup"
    ],
    "orderVerdict": {
      "en": "Order if you want a fragrant yellow chicken soup; avoid if you dislike egg garnish or want a thick creamy soup.",
      "zh": "想要印尼鸡汤，姜黄色清汤配鸡肉、粉丝、鸡蛋和香草，比咖喱更清爽时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je Indonesische kippensoep met kurkuma-gele bouillon, noedels, ei en kruiden; lichter dan curry wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "bakso",
    "metadataCode": "117007",
    "cuisineId": "indonesian",
    "names": {
      "en": "Bakso",
      "zh": "印尼肉丸汤",
      "nl": "Bakso",
      "local": "bakso"
    },
    "category": "soup",
    "cookingMethods": [
      "boiled",
      "assembled"
    ],
    "shortDescription": {
      "en": "Indonesian meatball soup with bouncy beef balls, broth, noodles, and optional sambal.",
      "zh": "印尼肉丸汤：印尼牛肉丸汤，肉丸弹牙，配清汤、面条和可选参巴辣酱。",
      "nl": "Bakso: Indonesische gehaktballensoep met veerkrachtige rundvleesballetjes, bouillon, noedels en eventueel sambal."
    },
    "cookingProfile": {
      "en": "boiled or poached and assembled to order; expect bouncy meatballs, soft noodles and clear soup.",
      "zh": "通常水煮或汆熟并现拌或组合后上桌，点餐时可预期：印尼牛肉丸汤，肉丸弹牙，配清汤、面条和可选参巴辣酱。",
      "nl": "Meestal gekookt of gepocheerd en samengesteld; verwacht vooral: Indonesische gehaktballensoep met veerkrachtige rundvleesballetjes, bouillon, noedels en eventueel sambal."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "street-food",
        "soup"
      ],
      "description": {
        "en": "A street-food style menu reference; the verified card explains the usual handheld or casual format and common risks.",
        "zh": "街头小吃风格的菜单项；已审核卡片说明常见食用形式和风险。",
        "nl": "Een streetfoodachtig menu-item; de geverifieerde kaart legt vorm en risico's uit."
      }
    },
    "composition": [
      [
        "beef",
        35,
        "bouncy meatballs"
      ],
      [
        "broth",
        30,
        "clear soup"
      ],
      [
        "wheat-noodles",
        15,
        "noodle side"
      ],
      [
        "mixed-vegetables",
        8,
        "greens"
      ],
      [
        "soy-sauce",
        5,
        "seasoning",
        "seasoning"
      ],
      [
        "garlic",
        4,
        "aroma",
        "seasoning"
      ],
      [
        "sambal",
        3,
        "optional heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "beef meatballs",
      "clear broth",
      "garlic"
    ],
    "basicTaste": [
      "savory",
      "mild",
      "brothy"
    ],
    "textureProfile": [
      "bouncy meatballs",
      "soft noodles",
      "clear soup"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-soy",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "street-food",
      "soup"
    ],
    "avoidIfTags": [
      "avoids-beef",
      "wants-rich-curry"
    ],
    "orderVerdict": {
      "en": "Order if you want a mild brothy bowl with bouncy meatballs; avoid if you do not want beef or wheat noodles.",
      "zh": "想要印尼牛肉丸汤，肉丸弹牙，配清汤、面条和可选参巴辣酱时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je Indonesische gehaktballensoep met veerkrachtige rundvleesballetjes, bouillon, noedels en eventueel sambal wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "nasi-padang",
    "metadataCode": "117008",
    "cuisineId": "indonesian",
    "names": {
      "en": "Nasi Padang",
      "zh": "巴东饭",
      "nl": "Nasi Padang",
      "local": "nasi Padang"
    },
    "category": "rice",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Rice served with several Padang-style side dishes such as rendang, curries, vegetables, and sambal.",
      "zh": "巴东饭：米饭配多种巴东风味小菜，如仁当、咖喱、蔬菜和参巴，口味浓且选择多。",
      "nl": "Nasi Padang: rijst met meerdere Padang-bijgerechten zoals rendang, curry's, groente en sambal."
    },
    "cookingProfile": {
      "en": "assembled to order; expect rice with multiple saucy sides and varied textures.",
      "zh": "通常现拌或组合后上桌，点餐时可预期：米饭配多种巴东风味小菜，如仁当、咖喱、蔬菜和参巴，口味浓且选择多。",
      "nl": "Meestal samengesteld; verwacht vooral: rijst met meerdere Padang-bijgerechten zoals rendang, curry's, groente en sambal."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional",
        "rice",
        "variety"
      ],
      "description": {
        "en": "A regional menu reference; the verified card captures the expected preparation style and common ordering risks.",
        "zh": "带地区特点的菜单项；已审核卡片说明常见做法和点餐风险。",
        "nl": "Een regionaal menu-item; de geverifieerde kaart beschrijft bereidingsstijl en bestelrisico's."
      }
    },
    "composition": [
      [
        "steamed-rice",
        35,
        "rice base"
      ],
      [
        "beef",
        20,
        "rendang or curry meat"
      ],
      [
        "chicken",
        15,
        "side dish option"
      ],
      [
        "mixed-vegetables",
        12,
        "vegetable side"
      ],
      [
        "coconut-curry",
        10,
        "sauces",
        "seasoning"
      ],
      [
        "sambal",
        5,
        "heat",
        "seasoning"
      ],
      [
        "egg",
        3,
        "side option"
      ]
    ],
    "distinctiveFlavorSources": [
      "Padang spice sauces",
      "coconut curry",
      "sambal"
    ],
    "basicTaste": [
      "spicy",
      "savory",
      "rich"
    ],
    "textureProfile": [
      "rice with multiple saucy sides",
      "varied textures"
    ],
    "riskFlags": [
      "contains-egg",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "rice",
      "variety"
    ],
    "avoidIfTags": [
      "avoids-heat",
      "wants-one-simple-dish"
    ],
    "orderVerdict": {
      "en": "Order if you want a varied rice plate with bold spicy sides; avoid if you want a single mild dish.",
      "zh": "想要米饭配多种巴东风味小菜，如仁当、咖喱、蔬菜和参巴，口味浓且选择多时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je rijst met meerdere Padang-bijgerechten zoals rendang, curry's, groente en sambal wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 3,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "ayam-penyet",
    "metadataCode": "117009",
    "cuisineId": "indonesian",
    "names": {
      "en": "Ayam Penyet",
      "zh": "印尼捶鸡饭",
      "nl": "Ayam penyet",
      "local": "ayam penyet"
    },
    "category": "meat",
    "cookingMethods": [
      "fried"
    ],
    "shortDescription": {
      "en": "Indonesian smashed fried chicken served with rice, raw vegetables, and punchy sambal.",
      "zh": "印尼捶鸡饭：印尼压扁炸鸡配米饭、生菜和浓烈参巴，外皮香脆，辣味常明显。",
      "nl": "Ayam penyet: Indonesische platgeslagen gefrituurde kip met rijst, rauwe groente en pittige sambal."
    },
    "cookingProfile": {
      "en": "fried; expect crisp chicken skin, juicy meat and soft rice.",
      "zh": "通常煎炸后上桌，点餐时可预期：印尼压扁炸鸡配米饭、生菜和浓烈参巴，外皮香脆，辣味常明显。",
      "nl": "Meestal gebakken in vet; verwacht vooral: Indonesische platgeslagen gefrituurde kip met rijst, rauwe groente en pittige sambal."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "fried-chicken",
        "street-food"
      ],
      "description": {
        "en": "A street-food style menu reference; the verified card explains the usual handheld or casual format and common risks.",
        "zh": "街头小吃风格的菜单项；已审核卡片说明常见食用形式和风险。",
        "nl": "Een streetfoodachtig menu-item; de geverifieerde kaart legt vorm en risico's uit."
      }
    },
    "composition": [
      [
        "chicken",
        45,
        "smashed fried chicken"
      ],
      [
        "steamed-rice",
        25,
        "rice side"
      ],
      [
        "mixed-vegetables",
        10,
        "fresh sides"
      ],
      [
        "sambal",
        10,
        "chili relish",
        "seasoning"
      ],
      [
        "garlic",
        5,
        "marinade aroma",
        "seasoning"
      ],
      [
        "turmeric",
        5,
        "golden seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "fried chicken",
      "sambal",
      "garlic-turmeric marinade"
    ],
    "basicTaste": [
      "savory",
      "spicy",
      "fried"
    ],
    "textureProfile": [
      "crisp chicken skin",
      "juicy meat",
      "soft rice"
    ],
    "riskFlags": [
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "fried-chicken",
      "street-food"
    ],
    "avoidIfTags": [
      "avoids-heat",
      "avoids-fried-food"
    ],
    "orderVerdict": {
      "en": "Order if you want fried chicken with serious sambal heat; avoid if fried food or chili paste is not wanted.",
      "zh": "想要印尼压扁炸鸡配米饭、生菜和浓烈参巴，外皮香脆，辣味常明显时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je Indonesische platgeslagen gefrituurde kip met rijst, rauwe groente en pittige sambal wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 3,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "tempeh",
    "metadataCode": "117010",
    "cuisineId": "indonesian",
    "names": {
      "en": "Tempeh",
      "zh": "天贝",
      "nl": "Tempeh",
      "local": "tempe"
    },
    "category": "vegetarian-main",
    "cookingMethods": [
      "fried",
      "stir-fried"
    ],
    "shortDescription": {
      "en": "Fermented soy cake served fried or sauced; nutty, firm, and often paired with sweet soy or sambal.",
      "zh": "天贝：天贝是发酵豆制品，常炸或裹酱，坚果香明显，质地结实。",
      "nl": "Tempeh: gefermenteerde sojakoek, gebakken of in saus; nootachtig, stevig en vaak met ketjap of sambal."
    },
    "cookingProfile": {
      "en": "fried and stir-fried; expect firm soy cake, crisp edges and chewy center.",
      "zh": "通常煎炸并快炒后上桌，点餐时可预期：天贝是发酵豆制品，常炸或裹酱，坚果香明显，质地结实。",
      "nl": "Meestal gebakken in vet en geroerbakt; verwacht vooral: gefermenteerde sojakoek, gebakken of in saus; nootachtig, stevig en vaak met ketjap of sambal."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "vegetarian-friendly",
        "protein"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "tempeh",
        45,
        "fermented soy cake"
      ],
      [
        "ketjap-manis",
        15,
        "sweet soy glaze",
        "seasoning"
      ],
      [
        "sambal",
        10,
        "chili paste",
        "seasoning"
      ],
      [
        "garlic",
        8,
        "aroma",
        "seasoning"
      ],
      [
        "coriander",
        5,
        "spice",
        "seasoning"
      ],
      [
        "steamed-rice",
        12,
        "serving base"
      ],
      [
        "sea-salt",
        5,
        "seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "nutty fermented soy",
      "sweet soy",
      "sambal"
    ],
    "basicTaste": [
      "savory",
      "nutty",
      "sweet-spicy"
    ],
    "textureProfile": [
      "firm soy cake",
      "crisp edges",
      "chewy center"
    ],
    "riskFlags": [
      "contains-soy",
      "contains-gluten",
      "can-be-spicy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "vegetarian-friendly",
      "protein"
    ],
    "avoidIfTags": [
      "soy-allergy",
      "dislikes-fermented-soy"
    ],
    "orderVerdict": {
      "en": "Order if you want a firm vegetarian soy protein with nutty flavor; avoid if soy or fermented flavors are a concern.",
      "zh": "想要天贝是发酵豆制品，常炸或裹酱，坚果香明显，质地结实时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je gefermenteerde sojakoek, gebakken of in saus; nootachtig, stevig en vaak met ketjap of sambal wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 2,
    "weightLevel": 3,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "ikan-bakar",
    "metadataCode": "117011",
    "cuisineId": "indonesian",
    "names": {
      "en": "Ikan Bakar",
      "zh": "印尼烤鱼",
      "nl": "Ikan bakar",
      "local": "ikan bakar"
    },
    "category": "seafood",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Grilled fish with Indonesian spice paste, sweet soy, sambal, and lime; smoky and often spicy.",
      "zh": "印尼烤鱼：印尼烤鱼刷香料、甜酱油和参巴，带烟熏焦香，常有辣味。",
      "nl": "Ikan bakar: gegrilde vis met Indonesische kruidenpasta, ketjap, sambal en limoen; rokerig en vaak pittig."
    },
    "cookingProfile": {
      "en": "grilled over high heat; expect flaky fish, charred edges and sticky glaze.",
      "zh": "通常高温烤制后上桌，点餐时可预期：印尼烤鱼刷香料、甜酱油和参巴，带烟熏焦香，常有辣味。",
      "nl": "Meestal op hoge hitte gegrild; verwacht vooral: gegrilde vis met Indonesische kruidenpasta, ketjap, sambal en limoen; rokerig en vaak pittig."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "seafood",
        "grilled"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "fish-fillet",
        55,
        "grilled fish"
      ],
      [
        "sambal",
        12,
        "chili glaze",
        "seasoning"
      ],
      [
        "ketjap-manis",
        10,
        "sweet soy glaze",
        "seasoning"
      ],
      [
        "lime",
        8,
        "finish"
      ],
      [
        "garlic",
        5,
        "aroma",
        "seasoning"
      ],
      [
        "turmeric",
        5,
        "marinade color",
        "seasoning"
      ],
      [
        "coriander",
        5,
        "spice",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "grilled fish",
      "sweet soy chili glaze",
      "lime"
    ],
    "basicTaste": [
      "savory",
      "smoky",
      "spicy-sweet"
    ],
    "textureProfile": [
      "flaky fish",
      "charred edges",
      "sticky glaze"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-soy",
      "contains-gluten",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "seafood",
      "grilled"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "avoids-heat"
    ],
    "orderVerdict": {
      "en": "Order if you want smoky grilled fish with chili-sweet glaze; avoid if fish or chili heat is a problem.",
      "zh": "想要印尼烤鱼刷香料、甜酱油和参巴，带烟熏焦香，常有辣味时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je gegrilde vis met Indonesische kruidenpasta, ketjap, sambal en limoen; rokerig en vaak pittig wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 3,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "pisang-goreng",
    "metadataCode": "117012",
    "cuisineId": "indonesian",
    "names": {
      "en": "Pisang Goreng",
      "zh": "炸香蕉",
      "nl": "Pisang goreng",
      "local": "pisang goreng"
    },
    "category": "dessert",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "Indonesian fried banana fritter with crisp batter and soft sweet fruit inside.",
      "zh": "炸香蕉：印尼炸香蕉，外层面衣酥脆，里面香蕉热软香甜。",
      "nl": "Pisang goreng: Indonesische gebakken banaanbeignet met krokant beslag en zachte zoete banaan erin."
    },
    "cookingProfile": {
      "en": "deep-fried; expect crisp batter and soft hot banana.",
      "zh": "通常油炸后上桌，点餐时可预期：印尼炸香蕉，外层面衣酥脆，里面香蕉热软香甜。",
      "nl": "Meestal gefrituurd; verwacht vooral: Indonesische gebakken banaanbeignet met krokant beslag en zachte zoete banaan erin."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "dessert",
        "street-food"
      ],
      "description": {
        "en": "A street-food style menu reference; the verified card explains the usual handheld or casual format and common risks.",
        "zh": "街头小吃风格的菜单项；已审核卡片说明常见食用形式和风险。",
        "nl": "Een streetfoodachtig menu-item; de geverifieerde kaart legt vorm en risico's uit."
      }
    },
    "composition": [
      [
        "banana",
        50,
        "sweet banana"
      ],
      [
        "wheat-flour",
        25,
        "batter"
      ],
      [
        "rice-flour-batter",
        10,
        "crispness"
      ],
      [
        "sugar",
        8,
        "sweetness"
      ],
      [
        "cinnamon",
        4,
        "optional warmth",
        "seasoning"
      ],
      [
        "sea-salt",
        3,
        "balance",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "fried banana",
      "caramelized sugar",
      "light batter"
    ],
    "basicTaste": [
      "sweet",
      "fried",
      "fruity"
    ],
    "textureProfile": [
      "crisp batter",
      "soft hot banana"
    ],
    "riskFlags": [
      "contains-gluten"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert",
      "street-food"
    ],
    "avoidIfTags": [
      "avoids-fried-food",
      "avoids-gluten"
    ],
    "orderVerdict": {
      "en": "Order if you want a simple warm fried fruit dessert; avoid if fried batter or gluten is unwanted.",
      "zh": "想要印尼炸香蕉，外层面衣酥脆，里面香蕉热软香甜时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je Indonesische gebakken banaanbeignet met krokant beslag en zachte zoete banaan erin wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "laksa",
    "metadataCode": "118001",
    "cuisineId": "malaysian-singaporean",
    "names": {
      "en": "Laksa",
      "zh": "叻沙",
      "nl": "Laksa",
      "local": "laksa"
    },
    "category": "noodle-soup",
    "cookingMethods": [
      "simmered",
      "assembled"
    ],
    "shortDescription": {
      "en": "Spicy coconut curry noodle soup with rice noodles, seafood or chicken, tofu puffs, and herbs.",
      "zh": "叻沙：椰香咖喱辣汤面，常配河粉、海鲜或鸡肉、豆腐泡和香草，汤底浓厚。",
      "nl": "Laksa: pittige kokos-curry noedelsoep met rijstnoedels, zeevruchten of kip, tofu en kruiden."
    },
    "cookingProfile": {
      "en": "simmered and assembled to order; expect slippery noodles, creamy broth and crunchy sprouts.",
      "zh": "通常慢煮并现拌或组合后上桌，点餐时可预期：椰香咖喱辣汤面，常配河粉、海鲜或鸡肉、豆腐泡和香草，汤底浓厚。",
      "nl": "Meestal zacht gestoofd en samengesteld; verwacht vooral: pittige kokos-curry noedelsoep met rijstnoedels, zeevruchten of kip, tofu en kruiden."
    },
    "cuisineRole": {
      "level": "signature",
      "tags": [
        "signature",
        "noodle",
        "signature-dish"
      ],
      "description": {
        "en": "A signature menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的代表性菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een kenmerkend menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "rice-noodles",
        35,
        "noodle base"
      ],
      [
        "coconut-milk",
        25,
        "creamy broth",
        "seasoning"
      ],
      [
        "shrimp",
        15,
        "seafood topping"
      ],
      [
        "tofu",
        8,
        "puff or cubes"
      ],
      [
        "bean-sprouts",
        7,
        "fresh crunch"
      ],
      [
        "coconut-curry",
        6,
        "spice paste",
        "seasoning"
      ],
      [
        "chili",
        4,
        "heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "coconut curry broth",
      "shrimp",
      "chili paste"
    ],
    "basicTaste": [
      "creamy",
      "spicy",
      "savory"
    ],
    "textureProfile": [
      "slippery noodles",
      "creamy broth",
      "crunchy sprouts"
    ],
    "riskFlags": [
      "contains-shellfish",
      "contains-soy",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "noodle",
      "signature-dish"
    ],
    "avoidIfTags": [
      "shellfish-allergy",
      "wants-clear-broth"
    ],
    "orderVerdict": {
      "en": "Order if you want a creamy spicy noodle soup; avoid if you prefer clear broth or cannot eat shellfish.",
      "zh": "想要椰香咖喱辣汤面，常配河粉、海鲜或鸡肉、豆腐泡和香草，汤底浓厚时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je pittige kokos-curry noedelsoep met rijstnoedels, zeevruchten of kip, tofu en kruiden wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 3,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "hainanese-chicken-rice",
    "metadataCode": "118002",
    "cuisineId": "malaysian-singaporean",
    "names": {
      "en": "Hainanese Chicken Rice",
      "zh": "海南鸡饭",
      "nl": "Hainanese chicken rice",
      "local": "海南鸡饭"
    },
    "category": "rice",
    "cookingMethods": [
      "boiled",
      "assembled"
    ],
    "shortDescription": {
      "en": "Poached chicken with fragrant chicken rice, cucumber, broth, and ginger-chili sauces; gentle but deeply savory.",
      "zh": "海南鸡饭：白切鸡配鸡油香饭、黄瓜、清汤和姜葱辣椒酱，口味温和但很鲜。",
      "nl": "Hainanese chicken rice: gepocheerde kip met geurige kiprijst, komkommer, bouillon en gember-chilisaus; mild maar hartig."
    },
    "cookingProfile": {
      "en": "boiled or poached and assembled to order; expect silky poached chicken, fragrant rice and cool cucumber.",
      "zh": "通常水煮或汆熟并现拌或组合后上桌，点餐时可预期：白切鸡配鸡油香饭、黄瓜、清汤和姜葱辣椒酱，口味温和但很鲜。",
      "nl": "Meestal gekookt of gepocheerd en samengesteld; verwacht vooral: gepocheerde kip met geurige kiprijst, komkommer, bouillon en gember-chilisaus; mild maar hartig."
    },
    "cuisineRole": {
      "level": "signature",
      "tags": [
        "signature",
        "signature-dish",
        "safe-choice"
      ],
      "description": {
        "en": "A signature menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的代表性菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een kenmerkend menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "poached-chicken",
        35,
        "silky chicken"
      ],
      [
        "steamed-rice",
        35,
        "chicken-fat rice"
      ],
      [
        "cucumber",
        8,
        "fresh garnish"
      ],
      [
        "ginger-scallion-sauce",
        8,
        "ginger sauce",
        "seasoning"
      ],
      [
        "soy-sauce",
        7,
        "savory sauce",
        "seasoning"
      ],
      [
        "chili",
        4,
        "chili dip",
        "seasoning"
      ],
      [
        "broth",
        3,
        "side soup"
      ]
    ],
    "distinctiveFlavorSources": [
      "chicken rice",
      "ginger-scallion sauce",
      "chili dip"
    ],
    "basicTaste": [
      "savory",
      "mild",
      "gingery"
    ],
    "textureProfile": [
      "silky poached chicken",
      "fragrant rice",
      "cool cucumber"
    ],
    "riskFlags": [
      "contains-soy",
      "contains-gluten",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "signature-dish",
      "safe-choice"
    ],
    "avoidIfTags": [
      "wants-bold-spicy-main"
    ],
    "orderVerdict": {
      "en": "Order if you want a gentle rice-and-chicken plate with aromatic sauces; avoid if you want heavy spices or crispy fried texture.",
      "zh": "想要白切鸡配鸡油香饭、黄瓜、清汤和姜葱辣椒酱，口味温和但很鲜时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je gepocheerde kip met geurige kiprijst, komkommer, bouillon en gember-chilisaus; mild maar hartig wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "char-kway-teow",
    "metadataCode": "118003",
    "cuisineId": "malaysian-singaporean",
    "names": {
      "en": "Char Kway Teow",
      "zh": "炒粿条",
      "nl": "Char kway teow",
      "local": "炒粿条"
    },
    "category": "noodle",
    "cookingMethods": [
      "stir-fried"
    ],
    "shortDescription": {
      "en": "Smoky stir-fried flat rice noodles with egg, shrimp, bean sprouts, and dark soy; oily and wok-charred.",
      "zh": "炒粿条：镬气炒粿条，宽河粉配蛋、虾、豆芽和黑酱油，油润烟香。",
      "nl": "Char kway teow: rokerig geroerbakte platte rijstnoedels met ei, garnaal, taugé en donkere soja; vettig en wokgeblakerd."
    },
    "cookingProfile": {
      "en": "stir-fried; expect soft wide noodles, crisp sprouts and juicy shrimp.",
      "zh": "通常快炒后上桌，点餐时可预期：镬气炒粿条，宽河粉配蛋、虾、豆芽和黑酱油，油润烟香。",
      "nl": "Meestal geroerbakt; verwacht vooral: rokerig geroerbakte platte rijstnoedels met ei, garnaal, taugé en donkere soja; vettig en wokgeblakerd."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "noodle",
        "street-food"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "wide-rice-noodles",
        45,
        "flat noodles"
      ],
      [
        "shrimp",
        15,
        "seafood"
      ],
      [
        "egg",
        12,
        "scrambled egg"
      ],
      [
        "bean-sprouts",
        10,
        "crunch"
      ],
      [
        "sausage-global",
        8,
        "Chinese sausage"
      ],
      [
        "soy-sauce",
        5,
        "dark seasoning",
        "seasoning"
      ],
      [
        "chili",
        5,
        "optional heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "wok hei",
      "dark soy",
      "seafood and sausage"
    ],
    "basicTaste": [
      "savory",
      "smoky",
      "slightly sweet"
    ],
    "textureProfile": [
      "soft wide noodles",
      "crisp sprouts",
      "juicy shrimp"
    ],
    "riskFlags": [
      "contains-shellfish",
      "contains-egg",
      "contains-soy",
      "contains-gluten",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "noodle",
      "street-food"
    ],
    "avoidIfTags": [
      "shellfish-allergy",
      "avoids-oily-noodles"
    ],
    "orderVerdict": {
      "en": "Order if you want smoky wok-fried noodles; avoid if shellfish, egg, or oily noodles are an issue.",
      "zh": "想要镬气炒粿条，宽河粉配蛋、虾、豆芽和黑酱油，油润烟香时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je rokerig geroerbakte platte rijstnoedels met ei, garnaal, taugé en donkere soja; vettig en wokgeblakerd wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "nasi-lemak",
    "metadataCode": "118004",
    "cuisineId": "malaysian-singaporean",
    "names": {
      "en": "Nasi Lemak",
      "zh": "椰浆饭",
      "nl": "Nasi lemak",
      "local": "nasi lemak"
    },
    "category": "rice",
    "cookingMethods": [
      "steamed",
      "assembled"
    ],
    "shortDescription": {
      "en": "Coconut rice with sambal, egg, peanuts, anchovies, and cucumber; fragrant, spicy-sweet, and salty.",
      "zh": "椰浆饭：椰浆饭配参巴、鸡蛋、花生、小鱼干和黄瓜，椰香、辣甜和咸鲜并重。",
      "nl": "Nasi lemak: kokosrijst met sambal, ei, pinda's, ansjovis en komkommer; geurig, pittig-zoet en zoutig."
    },
    "cookingProfile": {
      "en": "steamed and assembled to order; expect soft fragrant rice, crunchy peanuts and crisp anchovies.",
      "zh": "通常蒸制并现拌或组合后上桌，点餐时可预期：椰浆饭配参巴、鸡蛋、花生、小鱼干和黄瓜，椰香、辣甜和咸鲜并重。",
      "nl": "Meestal gestoomd en samengesteld; verwacht vooral: kokosrijst met sambal, ei, pinda's, ansjovis en komkommer; geurig, pittig-zoet en zoutig."
    },
    "cuisineRole": {
      "level": "signature",
      "tags": [
        "signature",
        "signature-dish",
        "rice"
      ],
      "description": {
        "en": "A signature menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的代表性菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een kenmerkend menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "steamed-rice",
        40,
        "coconut rice"
      ],
      [
        "coconut-milk",
        15,
        "rice aroma",
        "seasoning"
      ],
      [
        "egg",
        12,
        "boiled egg"
      ],
      [
        "peanuts",
        10,
        "crunch"
      ],
      [
        "anchovies",
        10,
        "salty ikan bilis"
      ],
      [
        "sambal",
        8,
        "chili relish",
        "seasoning"
      ],
      [
        "cucumber",
        5,
        "fresh side"
      ]
    ],
    "distinctiveFlavorSources": [
      "coconut rice",
      "sambal",
      "fried anchovies"
    ],
    "basicTaste": [
      "savory",
      "spicy",
      "coconut-sweet"
    ],
    "textureProfile": [
      "soft fragrant rice",
      "crunchy peanuts",
      "crisp anchovies"
    ],
    "riskFlags": [
      "contains-peanut",
      "contains-egg",
      "contains-fish",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "signature-dish",
      "rice"
    ],
    "avoidIfTags": [
      "peanut-allergy",
      "fish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if you want a fragrant coconut rice plate with sambal; avoid if peanuts, egg, or dried fish are unsafe.",
      "zh": "想要椰浆饭配参巴、鸡蛋、花生、小鱼干和黄瓜，椰香、辣甜和咸鲜并重时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je kokosrijst met sambal, ei, pinda's, ansjovis en komkommer; geurig, pittig-zoet en zoutig wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 3,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "roti-canai",
    "metadataCode": "118005",
    "cuisineId": "malaysian-singaporean",
    "names": {
      "en": "Roti Canai",
      "zh": "印度煎饼配咖喱",
      "nl": "Roti canai",
      "local": "roti canai"
    },
    "category": "bread",
    "cookingMethods": [
      "fried"
    ],
    "shortDescription": {
      "en": "Flaky pan-fried flatbread served with curry sauce; crisp, chewy, buttery, and great for dipping.",
      "zh": "印度煎饼配咖喱：煎制多层扁面饼配咖喱蘸汁，边缘酥、中心韧，黄油香明显。",
      "nl": "Roti canai: vlokkig gebakken platbrood met currysaus; krokant, taai, boterig en goed om te dippen."
    },
    "cookingProfile": {
      "en": "fried; expect flaky crisp edges, chewy center and saucy dip.",
      "zh": "通常煎炸后上桌，点餐时可预期：煎制多层扁面饼配咖喱蘸汁，边缘酥、中心韧，黄油香明显。",
      "nl": "Meestal gebakken in vet; verwacht vooral: vlokkig gebakken platbrood met currysaus; krokant, taai, boterig en goed om te dippen."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "bread",
        "snack"
      ],
      "description": {
        "en": "A street-food style menu reference; the verified card explains the usual handheld or casual format and common risks.",
        "zh": "街头小吃风格的菜单项；已审核卡片说明常见食用形式和风险。",
        "nl": "Een streetfoodachtig menu-item; de geverifieerde kaart legt vorm en risico's uit."
      }
    },
    "composition": [
      [
        "bread",
        55,
        "flaky flatbread"
      ],
      [
        "butter",
        15,
        "rich layers"
      ],
      [
        "coconut-curry",
        15,
        "curry dip",
        "seasoning"
      ],
      [
        "sea-salt",
        5,
        "seasoning",
        "seasoning"
      ],
      [
        "garam-masala",
        5,
        "dip spice",
        "seasoning"
      ],
      [
        "chili",
        5,
        "optional heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "flaky flatbread",
      "buttery layers",
      "curry dip"
    ],
    "basicTaste": [
      "savory",
      "buttery",
      "mildly spiced"
    ],
    "textureProfile": [
      "flaky crisp edges",
      "chewy center",
      "saucy dip"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "can-be-spicy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "bread",
      "snack"
    ],
    "avoidIfTags": [
      "avoids-gluten",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Order if you want flaky bread with curry dip; avoid if gluten, dairy, or oily bread is unwanted.",
      "zh": "想要煎制多层扁面饼配咖喱蘸汁，边缘酥、中心韧，黄油香明显时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je vlokkig gebakken platbrood met currysaus; krokant, taai, boterig en goed om te dippen wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "satay",
    "metadataCode": "118006",
    "cuisineId": "malaysian-singaporean",
    "names": {
      "en": "Satay",
      "zh": "沙爹串",
      "nl": "Saté",
      "local": "satay"
    },
    "category": "meat",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Grilled meat skewers with peanut sauce and sweet soy; common as a snack, starter, or rice-plate protein.",
      "zh": "沙爹串：烤肉串配花生酱和甜酱油，可作小吃、前菜或饭盘配肉。",
      "nl": "Saté: gegrilde vleesspiesjes met pindasaus en ketjap; vaak snack, voorgerecht of rijstbord-eiwit."
    },
    "cookingProfile": {
      "en": "grilled over high heat; expect charred meat and creamy sauce.",
      "zh": "通常高温烤制后上桌，点餐时可预期：烤肉串配花生酱和甜酱油，可作小吃、前菜或饭盘配肉。",
      "nl": "Meestal op hoge hitte gegrild; verwacht vooral: gegrilde vleesspiesjes met pindasaus en ketjap; vaak snack, voorgerecht of rijstbord-eiwit."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "shareable",
        "street-food"
      ],
      "description": {
        "en": "A street-food style menu reference; the verified card explains the usual handheld or casual format and common risks.",
        "zh": "街头小吃风格的菜单项；已审核卡片说明常见食用形式和风险。",
        "nl": "Een streetfoodachtig menu-item; de geverifieerde kaart legt vorm en risico's uit."
      }
    },
    "composition": [
      [
        "chicken",
        45,
        "skewered meat"
      ],
      [
        "beef",
        15,
        "alternate skewer meat"
      ],
      [
        "satay-sauce",
        25,
        "peanut sauce",
        "seasoning"
      ],
      [
        "ketjap-manis",
        7,
        "sweet soy glaze",
        "seasoning"
      ],
      [
        "cucumber",
        5,
        "fresh side"
      ],
      [
        "sambal",
        3,
        "heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "grilled skewers",
      "peanut sauce",
      "sweet soy"
    ],
    "basicTaste": [
      "savory",
      "nutty",
      "sweet"
    ],
    "textureProfile": [
      "charred meat",
      "creamy sauce"
    ],
    "riskFlags": [
      "contains-peanut",
      "contains-soy",
      "contains-gluten",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "shareable",
      "street-food"
    ],
    "avoidIfTags": [
      "peanut-allergy",
      "avoids-sweet-sauce"
    ],
    "orderVerdict": {
      "en": "Order if you want grilled skewers with peanut sauce; avoid if peanuts or sweet soy sauce are a concern.",
      "zh": "想要烤肉串配花生酱和甜酱油，可作小吃、前菜或饭盘配肉时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je gegrilde vleesspiesjes met pindasaus en ketjap; vaak snack, voorgerecht of rijstbord-eiwit wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "bak-kut-teh",
    "metadataCode": "118007",
    "cuisineId": "malaysian-singaporean",
    "names": {
      "en": "Bak Kut Teh",
      "zh": "肉骨茶",
      "nl": "Bak kut teh",
      "local": "肉骨茶"
    },
    "category": "soup",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Peppery herbal pork rib soup, usually served with rice and soy-chili dips; brothy rather than creamy.",
      "zh": "肉骨茶：胡椒药材猪骨汤，常配米饭和酱油辣椒蘸料，是清汤型而非奶油汤。",
      "nl": "Bak kut teh: peperige kruidige varkensribsoep, meestal met rijst en soja-chilidips; bouillonachtig, niet romig."
    },
    "cookingProfile": {
      "en": "simmered; expect tender pork ribs and clear hot broth.",
      "zh": "通常慢煮后上桌，点餐时可预期：胡椒药材猪骨汤，常配米饭和酱油辣椒蘸料，是清汤型而非奶油汤。",
      "nl": "Meestal zacht gestoofd; verwacht vooral: peperige kruidige varkensribsoep, meestal met rijst en soja-chilidips; bouillonachtig, niet romig."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional",
        "soup",
        "pork-lover"
      ],
      "description": {
        "en": "A regional menu reference; the verified card captures the expected preparation style and common ordering risks.",
        "zh": "带地区特点的菜单项；已审核卡片说明常见做法和点餐风险。",
        "nl": "Een regionaal menu-item; de geverifieerde kaart beschrijft bereidingsstijl en bestelrisico's."
      }
    },
    "composition": [
      [
        "pork",
        45,
        "pork ribs"
      ],
      [
        "broth",
        35,
        "pepper-herb broth"
      ],
      [
        "mushrooms",
        8,
        "optional side"
      ],
      [
        "garlic",
        5,
        "broth aroma",
        "seasoning"
      ],
      [
        "black-pepper",
        4,
        "pepper heat",
        "seasoning"
      ],
      [
        "soy-sauce",
        3,
        "savory dip",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "peppery pork broth",
      "garlic",
      "herbal soup"
    ],
    "basicTaste": [
      "savory",
      "peppery",
      "brothy"
    ],
    "textureProfile": [
      "tender pork ribs",
      "clear hot broth"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-soy",
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "soup",
      "pork-lover"
    ],
    "avoidIfTags": [
      "avoids-pork",
      "wants-vegetarian"
    ],
    "orderVerdict": {
      "en": "Order if you want a hot peppery pork rib soup; avoid if pork broth is not acceptable.",
      "zh": "想要胡椒药材猪骨汤，常配米饭和酱油辣椒蘸料，是清汤型而非奶油汤时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je peperige kruidige varkensribsoep, meestal met rijst en soja-chilidips; bouillonachtig, niet romig wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "chili-crab",
    "metadataCode": "118008",
    "cuisineId": "malaysian-singaporean",
    "names": {
      "en": "Chili Crab",
      "zh": "辣椒蟹",
      "nl": "Chili crab",
      "local": "辣椒蟹"
    },
    "category": "seafood",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Singapore-style crab in thick sweet-spicy tomato chili sauce, often eaten messily with fried buns.",
      "zh": "辣椒蟹：新加坡辣椒蟹，蟹裹浓稠甜辣番茄酱，常配馒头蘸酱，吃法比较“动手”。",
      "nl": "Chili crab: Singaporese krab in dikke zoet-pittige tomaten-chilisaus, vaak rommelig gegeten met broodjes."
    },
    "cookingProfile": {
      "en": "simmered; expect messy shellfish, thick glossy sauce and soft egg ribbons.",
      "zh": "通常慢煮后上桌，点餐时可预期：新加坡辣椒蟹，蟹裹浓稠甜辣番茄酱，常配馒头蘸酱，吃法比较“动手”。",
      "nl": "Meestal zacht gestoofd; verwacht vooral: Singaporese krab in dikke zoet-pittige tomaten-chilisaus, vaak rommelig gegeten met broodjes."
    },
    "cuisineRole": {
      "level": "signature",
      "tags": [
        "signature",
        "signature-dish",
        "shareable"
      ],
      "description": {
        "en": "A signature menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的代表性菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een kenmerkend menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "crab",
        45,
        "crab meat"
      ],
      [
        "tomato-sauce",
        20,
        "sweet chili tomato sauce",
        "seasoning"
      ],
      [
        "egg",
        10,
        "sauce ribbons"
      ],
      [
        "chili",
        10,
        "heat",
        "seasoning"
      ],
      [
        "garlic",
        5,
        "aroma",
        "seasoning"
      ],
      [
        "soy-sauce",
        5,
        "umami",
        "seasoning"
      ],
      [
        "bread",
        5,
        "mantou or dipping bread"
      ]
    ],
    "distinctiveFlavorSources": [
      "sweet chili tomato sauce",
      "shellfish",
      "garlic"
    ],
    "basicTaste": [
      "sweet",
      "spicy",
      "savory"
    ],
    "textureProfile": [
      "messy shellfish",
      "thick glossy sauce",
      "soft egg ribbons"
    ],
    "riskFlags": [
      "contains-shellfish",
      "contains-egg",
      "contains-soy",
      "contains-gluten",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "signature-dish",
      "shareable"
    ],
    "avoidIfTags": [
      "shellfish-allergy",
      "wants-neat-eating"
    ],
    "orderVerdict": {
      "en": "Order if you want a shareable saucy shellfish centerpiece; avoid if shellfish or messy hands-on eating is a problem.",
      "zh": "想要新加坡辣椒蟹，蟹裹浓稠甜辣番茄酱，常配馒头蘸酱，吃法比较“动手”时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je Singaporese krab in dikke zoet-pittige tomaten-chilisaus, vaak rommelig gegeten met broodjes wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 2,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "hokkien-mee",
    "metadataCode": "118009",
    "cuisineId": "malaysian-singaporean",
    "names": {
      "en": "Hokkien Mee",
      "zh": "福建面",
      "nl": "Hokkien mee",
      "local": "福建面"
    },
    "category": "noodle",
    "cookingMethods": [
      "stir-fried",
      "simmered"
    ],
    "shortDescription": {
      "en": "Singapore/Malaysian fried prawn noodles braised with seafood stock, usually moist rather than dry.",
      "zh": "福建面：福建虾面以海鲜高汤焖炒黄面和米粉，通常湿润带汤汁，不是干炒面。",
      "nl": "Hokkien mee: Singaporese/Maleisische garnalenoedels met zeevruchtenbouillon, meestal vochtig in plaats van droog."
    },
    "cookingProfile": {
      "en": "stir-fried and simmered; expect moist fried noodles, springy seafood and saucy gloss.",
      "zh": "通常快炒并慢煮后上桌，点餐时可预期：福建虾面以海鲜高汤焖炒黄面和米粉，通常湿润带汤汁，不是干炒面。",
      "nl": "Meestal geroerbakt en zacht gestoofd; verwacht vooral: Singaporese/Maleisische garnalenoedels met zeevruchtenbouillon, meestal vochtig in plaats van droog."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "noodle",
        "street-food"
      ],
      "description": {
        "en": "A street-food style menu reference; the verified card explains the usual handheld or casual format and common risks.",
        "zh": "街头小吃风格的菜单项；已审核卡片说明常见食用形式和风险。",
        "nl": "Een streetfoodachtig menu-item; de geverifieerde kaart legt vorm en risico's uit."
      }
    },
    "composition": [
      [
        "wheat-noodles",
        35,
        "yellow noodles"
      ],
      [
        "rice-noodles",
        20,
        "rice vermicelli"
      ],
      [
        "shrimp",
        15,
        "seafood"
      ],
      [
        "squid",
        10,
        "seafood"
      ],
      [
        "pork",
        8,
        "pork lard or slices"
      ],
      [
        "broth",
        7,
        "seafood stock"
      ],
      [
        "chili",
        3,
        "side chili",
        "seasoning"
      ],
      [
        "lime",
        2,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "seafood stock",
      "wok noodles",
      "lime chili"
    ],
    "basicTaste": [
      "savory",
      "seafood-umami",
      "lightly smoky"
    ],
    "textureProfile": [
      "moist fried noodles",
      "springy seafood",
      "saucy gloss"
    ],
    "riskFlags": [
      "contains-shellfish",
      "contains-pork",
      "contains-gluten",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "noodle",
      "street-food"
    ],
    "avoidIfTags": [
      "shellfish-allergy",
      "avoids-pork"
    ],
    "orderVerdict": {
      "en": "Order if you want moist seafood-rich fried noodles; avoid if shellfish, pork, or wheat noodles are unsafe.",
      "zh": "想要福建虾面以海鲜高汤焖炒黄面和米粉，通常湿润带汤汁，不是干炒面时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je Singaporese/Maleisische garnalenoedels met zeevruchtenbouillon, meestal vochtig in plaats van droog wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "rendang-chicken",
    "metadataCode": "118010",
    "cuisineId": "malaysian-singaporean",
    "names": {
      "en": "Chicken Rendang",
      "zh": "鸡肉仁当",
      "nl": "Kip rendang",
      "local": "rendang ayam"
    },
    "category": "meat",
    "cookingMethods": [
      "braised",
      "simmered"
    ],
    "shortDescription": {
      "en": "Chicken cooked in rendang-style coconut spice paste until rich, aromatic, and thickly coated.",
      "zh": "鸡肉仁当：鸡肉以仁当风格椰香香料酱慢煮收浓，香气厚，酱汁包裹感强。",
      "nl": "Kip rendang: kip in rendang-achtige kokos-specerijenpasta, rijk, aromatisch en dik omhuld."
    },
    "cookingProfile": {
      "en": "slow-braised and simmered; expect tender chicken and thick reduced coating.",
      "zh": "通常慢炖并慢煮后上桌，点餐时可预期：鸡肉以仁当风格椰香香料酱慢煮收浓，香气厚，酱汁包裹感强。",
      "nl": "Meestal langzaam gestoofd en zacht gestoofd; verwacht vooral: kip in rendang-achtige kokos-specerijenpasta, rijk, aromatisch en dik omhuld."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "meat",
        "saucy"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "chicken",
        45,
        "braised chicken"
      ],
      [
        "coconut-milk",
        22,
        "reduced sauce",
        "seasoning"
      ],
      [
        "coconut-curry",
        12,
        "spice paste",
        "seasoning"
      ],
      [
        "lemongrass",
        6,
        "aroma",
        "seasoning"
      ],
      [
        "chili",
        6,
        "heat",
        "seasoning"
      ],
      [
        "turmeric",
        5,
        "earthy color",
        "seasoning"
      ],
      [
        "toasted-coconut",
        4,
        "toasty body"
      ]
    ],
    "distinctiveFlavorSources": [
      "coconut spice paste",
      "lemongrass",
      "chicken"
    ],
    "basicTaste": [
      "rich",
      "spicy",
      "aromatic"
    ],
    "textureProfile": [
      "tender chicken",
      "thick reduced coating"
    ],
    "riskFlags": [
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "meat",
      "saucy"
    ],
    "avoidIfTags": [
      "avoids-heat",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Order if you want rendang flavor with chicken instead of beef; avoid if you want a thin mild curry.",
      "zh": "想要鸡肉以仁当风格椰香香料酱慢煮收浓，香气厚，酱汁包裹感强时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je kip in rendang-achtige kokos-specerijenpasta, rijk, aromatisch en dik omhuld wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 3,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "kaya-toast",
    "metadataCode": "118011",
    "cuisineId": "malaysian-singaporean",
    "names": {
      "en": "Kaya Toast",
      "zh": "咖椰吐司",
      "nl": "Kaya toast",
      "local": "kaya toast"
    },
    "category": "bread",
    "cookingMethods": [
      "toasted",
      "assembled"
    ],
    "shortDescription": {
      "en": "Singapore/Malaysian toast with kaya coconut-egg jam and butter, often served with soft eggs.",
      "zh": "咖椰吐司：咖椰吐司夹椰香鸡蛋酱和黄油，常配半熟蛋，甜咸早餐感明显。",
      "nl": "Kaya toast: Singaporese/Maleisische toast met kaya kokos-eijam en boter, vaak met zachte eieren."
    },
    "cookingProfile": {
      "en": "toasted and assembled to order; expect crisp toast, melting butter and sticky kaya.",
      "zh": "通常烤脆并现拌或组合后上桌，点餐时可预期：咖椰吐司夹椰香鸡蛋酱和黄油，常配半熟蛋，甜咸早餐感明显。",
      "nl": "Meestal geroosterd en samengesteld; verwacht vooral: Singaporese/Maleisische toast met kaya kokos-eijam en boter, vaak met zachte eieren."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "breakfast",
        "snack"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "bread",
        45,
        "toast"
      ],
      [
        "butter",
        20,
        "cold butter slices"
      ],
      [
        "egg",
        15,
        "kaya coconut egg jam"
      ],
      [
        "coconut-milk",
        10,
        "jam richness",
        "seasoning"
      ],
      [
        "sugar",
        7,
        "sweetness"
      ],
      [
        "soy-sauce",
        3,
        "soft-boiled egg side seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "coconut egg jam",
      "butter",
      "toast"
    ],
    "basicTaste": [
      "sweet",
      "buttery",
      "toasty"
    ],
    "textureProfile": [
      "crisp toast",
      "melting butter",
      "sticky kaya"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "contains-egg",
      "contains-soy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "breakfast",
      "snack"
    ],
    "avoidIfTags": [
      "avoids-sweet-breakfast",
      "avoids-egg"
    ],
    "orderVerdict": {
      "en": "Order if you want a sweet buttery toast snack or breakfast; avoid if egg, dairy, gluten, or sweet toast is not wanted.",
      "zh": "想要咖椰吐司夹椰香鸡蛋酱和黄油，常配半熟蛋，甜咸早餐感明显时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je Singaporese/Maleisische toast met kaya kokos-eijam en boter, vaak met zachte eieren wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "ice-kacang",
    "metadataCode": "118012",
    "cuisineId": "malaysian-singaporean",
    "names": {
      "en": "Ice Kacang",
      "zh": "红豆刨冰",
      "nl": "Ice kacang",
      "local": "ais kacang"
    },
    "category": "dessert",
    "cookingMethods": [
      "assembled",
      "chilled"
    ],
    "shortDescription": {
      "en": "Shaved ice dessert with syrups, beans, corn, jelly-like toppings, and condensed milk; colorful and very sweet.",
      "zh": "红豆刨冰：红豆冰刨冰甜品，配糖浆、豆类、玉米、冻类和炼乳，颜色鲜艳且很甜。",
      "nl": "Ice kacang: geschaafd ijs met siropen, bonen, mais, jelly-achtige toppings en gecondenseerde melk; kleurrijk en heel zoet."
    },
    "cookingProfile": {
      "en": "assembled to order and served cold; expect icy, soft beans and chewy mixed toppings.",
      "zh": "通常现拌或组合并冷食后上桌，点餐时可预期：红豆冰刨冰甜品，配糖浆、豆类、玉米、冻类和炼乳，颜色鲜艳且很甜。",
      "nl": "Meestal samengesteld en koud geserveerd; verwacht vooral: geschaafd ijs met siropen, bonen, mais, jelly-achtige toppings en gecondenseerde melk; kleurrijk en heel zoet."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "dessert",
        "cooling"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "shaved-ice",
        40,
        "ice base"
      ],
      [
        "beans",
        18,
        "sweet beans"
      ],
      [
        "corn",
        10,
        "sweet corn"
      ],
      [
        "fruit-sauce-or-caramel",
        15,
        "colored syrups"
      ],
      [
        "condensed-milk",
        10,
        "milky sweetness",
        "seasoning"
      ],
      [
        "peanuts",
        4,
        "optional crunch"
      ],
      [
        "palm-sugar",
        3,
        "syrup depth",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "shaved ice",
      "sweet syrups",
      "condensed milk"
    ],
    "basicTaste": [
      "very sweet",
      "milky",
      "refreshing"
    ],
    "textureProfile": [
      "icy",
      "soft beans",
      "chewy mixed toppings"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-peanut"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert",
      "cooling"
    ],
    "avoidIfTags": [
      "peanut-allergy",
      "dislikes-mixed-texture-desserts"
    ],
    "orderVerdict": {
      "en": "Order if you want a cold colorful dessert with many textures; avoid if beans, peanuts, dairy, or mixed textures are not appealing.",
      "zh": "想要红豆冰刨冰甜品，配糖浆、豆类、玉米、冻类和炼乳，颜色鲜艳且很甜时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je geschaafd ijs met siropen, bonen, mais, jelly-achtige toppings en gecondenseerde melk; kleurrijk en heel zoet wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "doner-kebab",
    "metadataCode": "119001",
    "cuisineId": "turkish",
    "names": {
      "en": "Döner Kebab",
      "zh": "土耳其旋转烤肉",
      "nl": "Döner kebab",
      "local": "döner kebab"
    },
    "category": "meat",
    "cookingMethods": [
      "grilled",
      "assembled"
    ],
    "shortDescription": {
      "en": "Thinly shaved rotisserie meat in bread or on a plate with salad and sauces; filling and street-food friendly.",
      "zh": "土耳其旋转烤肉：旋转烤肉薄片配面包、沙拉和酱汁，饱腹感强，是常见街头餐。",
      "nl": "Döner kebab: dun geschaafd spitvlees in brood of op bord met salade en sauzen; vullend streetfood."
    },
    "cookingProfile": {
      "en": "grilled over high heat and assembled to order; expect shaved meat, soft bread and crisp salad.",
      "zh": "通常高温烤制并现拌或组合后上桌，点餐时可预期：旋转烤肉薄片配面包、沙拉和酱汁，饱腹感强，是常见街头餐。",
      "nl": "Meestal op hoge hitte gegrild en samengesteld; verwacht vooral: dun geschaafd spitvlees in brood of op bord met salade en sauzen; vullend streetfood."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "street-food",
        "filling"
      ],
      "description": {
        "en": "A street-food style menu reference; the verified card explains the usual handheld or casual format and common risks.",
        "zh": "街头小吃风格的菜单项；已审核卡片说明常见食用形式和风险。",
        "nl": "Een streetfoodachtig menu-item; de geverifieerde kaart legt vorm en risico's uit."
      }
    },
    "composition": [
      [
        "lamb",
        30,
        "rotisserie meat"
      ],
      [
        "beef",
        20,
        "rotisserie meat blend"
      ],
      [
        "pita",
        20,
        "bread or wrap"
      ],
      [
        "mixed-vegetables",
        12,
        "salad filling"
      ],
      [
        "garlic-sauce",
        10,
        "sauce"
      ],
      [
        "chili",
        5,
        "optional sauce",
        "seasoning"
      ],
      [
        "cumin",
        3,
        "warm aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "rotisserie meat",
      "garlic sauce",
      "warm spices"
    ],
    "basicTaste": [
      "savory",
      "garlicky",
      "spiced"
    ],
    "textureProfile": [
      "shaved meat",
      "soft bread",
      "crisp salad"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "street-food",
      "filling"
    ],
    "avoidIfTags": [
      "wants-light-food",
      "avoids-gluten"
    ],
    "orderVerdict": {
      "en": "Order if you want a filling meat wrap or plate with sauces; avoid if garlic sauce, bread, or heavy meat is not wanted.",
      "zh": "想要旋转烤肉薄片配面包、沙拉和酱汁，饱腹感强，是常见街头餐时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je dun geschaafd spitvlees in brood of op bord met salade en sauzen; vullend streetfood wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "adana-kebab",
    "metadataCode": "119002",
    "cuisineId": "turkish",
    "names": {
      "en": "Adana Kebab",
      "zh": "阿达纳辣肉串",
      "nl": "Adana kebab",
      "local": "Adana kebabı"
    },
    "category": "meat",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Spicy minced lamb kebab grilled on a flat skewer, usually served with bread, onion, and grilled vegetables.",
      "zh": "阿达纳辣肉串：辣味羊肉末扁签烤串，常配面包、洋葱和烤蔬菜，肉香和辣椒香明显。",
      "nl": "Adana kebab: pittige gehakte lamskebab aan platte spies, met brood, ui en gegrilde groente."
    },
    "cookingProfile": {
      "en": "grilled over high heat; expect juicy minced skewer and charred edges.",
      "zh": "通常高温烤制后上桌，点餐时可预期：辣味羊肉末扁签烤串，常配面包、洋葱和烤蔬菜，肉香和辣椒香明显。",
      "nl": "Meestal op hoge hitte gegrild; verwacht vooral: pittige gehakte lamskebab aan platte spies, met brood, ui en gegrilde groente."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional",
        "spicy",
        "meat-lover"
      ],
      "description": {
        "en": "A regional menu reference; the verified card captures the expected preparation style and common ordering risks.",
        "zh": "带地区特点的菜单项；已审核卡片说明常见做法和点餐风险。",
        "nl": "Een regionaal menu-item; de geverifieerde kaart beschrijft bereidingsstijl en bestelrisico's."
      }
    },
    "composition": [
      [
        "lamb",
        60,
        "minced lamb skewer"
      ],
      [
        "pita",
        15,
        "serving bread"
      ],
      [
        "mixed-vegetables",
        10,
        "grilled vegetables"
      ],
      [
        "chili",
        7,
        "signature heat",
        "seasoning"
      ],
      [
        "cumin",
        4,
        "earthy spice",
        "seasoning"
      ],
      [
        "paprika",
        4,
        "red warmth",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "charred minced lamb",
      "red pepper",
      "cumin"
    ],
    "basicTaste": [
      "savory",
      "spicy",
      "smoky"
    ],
    "textureProfile": [
      "juicy minced skewer",
      "charred edges"
    ],
    "riskFlags": [
      "contains-gluten",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "spicy",
      "meat-lover"
    ],
    "avoidIfTags": [
      "avoids-lamb",
      "avoids-heat"
    ],
    "orderVerdict": {
      "en": "Order if you want a spicy char-grilled lamb skewer; avoid if lamb flavor or chili heat is too strong.",
      "zh": "想要辣味羊肉末扁签烤串，常配面包、洋葱和烤蔬菜，肉香和辣椒香明显时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je pittige gehakte lamskebab aan platte spies, met brood, ui en gegrilde groente wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 3,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "lahmacun",
    "metadataCode": "119003",
    "cuisineId": "turkish",
    "names": {
      "en": "Lahmacun",
      "zh": "土耳其薄肉饼",
      "nl": "Lahmacun",
      "local": "lahmacun"
    },
    "category": "bread",
    "cookingMethods": [
      "baked",
      "assembled"
    ],
    "shortDescription": {
      "en": "Thin Turkish flatbread spread with spiced minced meat and vegetables, often rolled with lemon and parsley.",
      "zh": "土耳其薄肉饼：土耳其薄饼抹香料肉末和蔬菜，常加柠檬香草卷起吃，不是奶酪披萨。",
      "nl": "Lahmacun: dun Turks platbrood met gekruid gehakt en groente, vaak opgerold met citroen en peterselie."
    },
    "cookingProfile": {
      "en": "baked and assembled to order; expect thin crisp-chewy base, fine meat topping and fresh garnish.",
      "zh": "通常烘烤并现拌或组合后上桌，点餐时可预期：土耳其薄饼抹香料肉末和蔬菜，常加柠檬香草卷起吃，不是奶酪披萨。",
      "nl": "Meestal gebakken in de oven en samengesteld; verwacht vooral: dun Turks platbrood met gekruid gehakt en groente, vaak opgerold met citroen en peterselie."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "street-food",
        "shareable"
      ],
      "description": {
        "en": "A street-food style menu reference; the verified card explains the usual handheld or casual format and common risks.",
        "zh": "街头小吃风格的菜单项；已审核卡片说明常见食用形式和风险。",
        "nl": "Een streetfoodachtig menu-item; de geverifieerde kaart legt vorm en risico's uit."
      }
    },
    "composition": [
      [
        "bread",
        45,
        "thin flatbread"
      ],
      [
        "ground-meat",
        25,
        "spiced meat topping"
      ],
      [
        "tomato",
        10,
        "topping base"
      ],
      [
        "mixed-vegetables",
        8,
        "fresh garnish"
      ],
      [
        "paprika",
        5,
        "red pepper warmth",
        "seasoning"
      ],
      [
        "cumin",
        4,
        "earthy spice",
        "seasoning"
      ],
      [
        "lemon",
        3,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "thin crisp bread",
      "spiced meat",
      "lemon parsley garnish"
    ],
    "basicTaste": [
      "savory",
      "lightly spicy",
      "fresh"
    ],
    "textureProfile": [
      "thin crisp-chewy base",
      "fine meat topping",
      "fresh garnish"
    ],
    "riskFlags": [
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "street-food",
      "shareable"
    ],
    "avoidIfTags": [
      "avoids-gluten",
      "wants-cheesy-pizza"
    ],
    "orderVerdict": {
      "en": "Order if you want a thin meat-topped flatbread; avoid if you expect a cheesy pizza or need gluten-free food.",
      "zh": "想要土耳其薄饼抹香料肉末和蔬菜，常加柠檬香草卷起吃，不是奶酪披萨时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je dun Turks platbrood met gekruid gehakt en groente, vaak opgerold met citroen en peterselie wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 2,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "pide",
    "metadataCode": "119004",
    "cuisineId": "turkish",
    "names": {
      "en": "Pide",
      "zh": "土耳其船形披萨",
      "nl": "Pide",
      "local": "pide"
    },
    "category": "bread",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Boat-shaped Turkish baked flatbread filled with cheese, minced meat, vegetables, or egg.",
      "zh": "土耳其船形披萨：船形土耳其烤饼，常填奶酪、肉末、蔬菜或鸡蛋，面包边有嚼劲。",
      "nl": "Pide: bootvormig Turks platbrood uit de oven met kaas, gehakt, groente of ei."
    },
    "cookingProfile": {
      "en": "baked; expect chewy bread edges, soft filling and browned top.",
      "zh": "通常烘烤后上桌，点餐时可预期：船形土耳其烤饼，常填奶酪、肉末、蔬菜或鸡蛋，面包边有嚼劲。",
      "nl": "Meestal gebakken in de oven; verwacht vooral: bootvormig Turks platbrood uit de oven met kaas, gehakt, groente of ei."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "shareable",
        "comfort-food"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "bread",
        45,
        "boat-shaped dough"
      ],
      [
        "cheese",
        20,
        "filling"
      ],
      [
        "ground-meat",
        20,
        "meat topping"
      ],
      [
        "egg",
        5,
        "optional topping"
      ],
      [
        "paprika",
        5,
        "warm spice",
        "seasoning"
      ],
      [
        "cumin",
        3,
        "earthy note",
        "seasoning"
      ],
      [
        "sea-salt",
        2,
        "seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "baked bread",
      "cheese or minced meat",
      "warm spices"
    ],
    "basicTaste": [
      "savory",
      "bready",
      "rich"
    ],
    "textureProfile": [
      "chewy bread edges",
      "soft filling",
      "browned top"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "contains-egg"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "shareable",
      "comfort-food"
    ],
    "avoidIfTags": [
      "avoids-gluten",
      "avoids-dairy"
    ],
    "orderVerdict": {
      "en": "Order if you want a shareable baked bread with savory filling; avoid if gluten or dairy filling is a problem.",
      "zh": "想要船形土耳其烤饼，常填奶酪、肉末、蔬菜或鸡蛋，面包边有嚼劲时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je bootvormig Turks platbrood uit de oven met kaas, gehakt, groente of ei wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "menemen",
    "metadataCode": "119005",
    "cuisineId": "turkish",
    "names": {
      "en": "Menemen",
      "zh": "土耳其番茄炒蛋",
      "nl": "Menemen",
      "local": "menemen"
    },
    "category": "egg",
    "cookingMethods": [
      "stirred",
      "simmered"
    ],
    "shortDescription": {
      "en": "Soft Turkish eggs cooked with tomato, peppers, and olive oil; saucy and scoopable, not a firm omelette.",
      "zh": "土耳其番茄炒蛋：土耳其番茄青椒炒软蛋，带酱汁感，适合蘸面包，不是成型煎蛋。",
      "nl": "Menemen: zachte Turkse eieren met tomaat, paprika en olijfolie; sauzig en lepelbaar, geen stevige omelet."
    },
    "cookingProfile": {
      "en": "soft-stirred and simmered; expect soft eggs, juicy tomato and scoopable sauce.",
      "zh": "通常搅拌成柔软状态并慢煮后上桌，点餐时可预期：土耳其番茄青椒炒软蛋，带酱汁感，适合蘸面包，不是成型煎蛋。",
      "nl": "Meestal zacht geroerd en zacht gestoofd; verwacht vooral: zachte Turkse eieren met tomaat, paprika en olijfolie; sauzig en lepelbaar, geen stevige omelet."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "breakfast",
        "vegetarian-friendly"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "egg",
        40,
        "soft scrambled base"
      ],
      [
        "tomato",
        25,
        "sauce base"
      ],
      [
        "bell-pepper",
        15,
        "pepper body"
      ],
      [
        "olive-oil",
        8,
        "richness",
        "seasoning"
      ],
      [
        "paprika",
        5,
        "warmth",
        "seasoning"
      ],
      [
        "chili",
        4,
        "optional heat",
        "seasoning"
      ],
      [
        "black-pepper",
        3,
        "pepper bite",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "tomato pepper sauce",
      "soft eggs",
      "olive oil"
    ],
    "basicTaste": [
      "savory",
      "tomato-rich",
      "mildly spicy"
    ],
    "textureProfile": [
      "soft eggs",
      "juicy tomato",
      "scoopable sauce"
    ],
    "riskFlags": [
      "contains-egg",
      "can-be-spicy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "breakfast",
      "vegetarian-friendly"
    ],
    "avoidIfTags": [
      "avoids-egg",
      "wants-firm-omelette"
    ],
    "orderVerdict": {
      "en": "Order if you want soft saucy eggs with tomato and peppers; avoid if runny-soft eggs are not appealing.",
      "zh": "想要土耳其番茄青椒炒软蛋，带酱汁感，适合蘸面包，不是成型煎蛋时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je zachte Turkse eieren met tomaat, paprika en olijfolie; sauzig en lepelbaar, geen stevige omelet wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "manti",
    "metadataCode": "119006",
    "cuisineId": "turkish",
    "names": {
      "en": "Manti",
      "zh": "土耳其小饺子",
      "nl": "Manti",
      "local": "mantı"
    },
    "category": "dumpling",
    "cookingMethods": [
      "boiled",
      "assembled"
    ],
    "shortDescription": {
      "en": "Small Turkish meat dumplings topped with garlic yogurt and spiced butter; tangy, rich, and filling.",
      "zh": "土耳其小饺子：土耳其小肉饺配蒜味酸奶和香料黄油，酸香浓郁，很有饱腹感。",
      "nl": "Manti: kleine Turkse vleesdumplings met knoflookyoghurt en gekruide boter; friszuur, rijk en vullend."
    },
    "cookingProfile": {
      "en": "boiled or poached and assembled to order; expect small soft dumplings, creamy sauce and meaty filling.",
      "zh": "通常水煮或汆熟并现拌或组合后上桌，点餐时可预期：土耳其小肉饺配蒜味酸奶和香料黄油，酸香浓郁，很有饱腹感。",
      "nl": "Meestal gekookt of gepocheerd en samengesteld; verwacht vooral: kleine Turkse vleesdumplings met knoflookyoghurt en gekruide boter; friszuur, rijk en vullend."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "comfort-food",
        "dumpling"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "dumpling-wrapper",
        35,
        "small wrappers"
      ],
      [
        "ground-meat",
        30,
        "meat filling"
      ],
      [
        "yogurt",
        20,
        "garlic yogurt sauce"
      ],
      [
        "paprika",
        5,
        "butter-chili topping",
        "seasoning"
      ],
      [
        "butter",
        5,
        "sauce richness"
      ],
      [
        "mint",
        3,
        "dried herb",
        "seasoning"
      ],
      [
        "garlic",
        2,
        "sauce aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "garlic yogurt",
      "butter paprika",
      "meat dumplings"
    ],
    "basicTaste": [
      "savory",
      "tangy",
      "rich"
    ],
    "textureProfile": [
      "small soft dumplings",
      "creamy sauce",
      "meaty filling"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food",
      "dumpling"
    ],
    "avoidIfTags": [
      "avoids-dairy",
      "avoids-gluten"
    ],
    "orderVerdict": {
      "en": "Order if you want tiny meat dumplings with garlic yogurt; avoid if dairy sauce or wheat wrappers are an issue.",
      "zh": "想要土耳其小肉饺配蒜味酸奶和香料黄油，酸香浓郁，很有饱腹感时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je kleine Turkse vleesdumplings met knoflookyoghurt en gekruide boter; friszuur, rijk en vullend wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "imam-bayildi",
    "metadataCode": "119007",
    "cuisineId": "turkish",
    "names": {
      "en": "Imam Bayildi",
      "zh": "橄榄油炖茄子",
      "nl": "Imam bayıldı",
      "local": "imam bayıldı"
    },
    "category": "vegetarian-main",
    "cookingMethods": [
      "braised",
      "baked"
    ],
    "shortDescription": {
      "en": "Olive-oil-braised eggplant stuffed with onion and tomato; silky, vegetable-forward, and often served cool or warm.",
      "zh": "橄榄油炖茄子：橄榄油焖茄子填洋葱番茄，质地丝滑，蔬菜感强，可温食或凉食。",
      "nl": "Imam bayıldı: aubergine gestoofd in olijfolie, gevuld met ui en tomaat; zijdezacht en groenterijk."
    },
    "cookingProfile": {
      "en": "slow-braised and baked; expect silky eggplant and soft vegetable filling.",
      "zh": "通常慢炖并烘烤后上桌，点餐时可预期：橄榄油焖茄子填洋葱番茄，质地丝滑，蔬菜感强，可温食或凉食。",
      "nl": "Meestal langzaam gestoofd en gebakken in de oven; verwacht vooral: aubergine gestoofd in olijfolie, gevuld met ui en tomaat; zijdezacht en groenterijk."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "vegetarian-friendly",
        "vegan-friendly"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "eggplant-global",
        45,
        "soft eggplant"
      ],
      [
        "tomato",
        20,
        "filling"
      ],
      [
        "onion",
        15,
        "sweet filling"
      ],
      [
        "olive-oil",
        12,
        "signature richness",
        "seasoning"
      ],
      [
        "garlic",
        4,
        "aroma",
        "seasoning"
      ],
      [
        "parsley",
        2,
        "freshness",
        "seasoning"
      ],
      [
        "sea-salt",
        2,
        "seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "olive oil",
      "sweet onion tomato",
      "soft eggplant"
    ],
    "basicTaste": [
      "savory",
      "sweet",
      "olive-oil-rich"
    ],
    "textureProfile": [
      "silky eggplant",
      "soft vegetable filling"
    ],
    "riskFlags": [],
    "dietaryFlags": [
      "vegan"
    ],
    "goodForTags": [
      "vegetarian-friendly",
      "vegan-friendly"
    ],
    "avoidIfTags": [
      "dislikes-soft-eggplant",
      "wants-high-protein-main"
    ],
    "orderVerdict": {
      "en": "Order if you want silky olive-oil eggplant rather than a meat main; avoid if soft eggplant texture is not appealing.",
      "zh": "想要橄榄油焖茄子填洋葱番茄，质地丝滑，蔬菜感强，可温食或凉食时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je aubergine gestoofd in olijfolie, gevuld met ui en tomaat; zijdezacht en groenterijk wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "mercimek-corbasi",
    "metadataCode": "119008",
    "cuisineId": "turkish",
    "names": {
      "en": "Mercimek Çorbası",
      "zh": "土耳其红扁豆汤",
      "nl": "Linzensoep",
      "local": "mercimek çorbası"
    },
    "category": "soup",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Turkish red lentil soup, usually smooth and finished with lemon and cumin; mild, warm, and comforting.",
      "zh": "土耳其红扁豆汤：土耳其红扁豆汤，多为顺滑浓汤，配柠檬和孜然，温和暖胃。",
      "nl": "Linzensoep: Turkse rode-linzensoep, meestal glad, met citroen en komijn; mild, warm en troostend."
    },
    "cookingProfile": {
      "en": "simmered; expect smooth thick soup and soft lentil body.",
      "zh": "通常慢煮后上桌，点餐时可预期：土耳其红扁豆汤，多为顺滑浓汤，配柠檬和孜然，温和暖胃。",
      "nl": "Meestal zacht gestoofd; verwacht vooral: Turkse rode-linzensoep, meestal glad, met citroen en komijn; mild, warm en troostend."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "soup",
        "vegetarian-friendly"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "lentils",
        50,
        "red lentil base"
      ],
      [
        "carrot",
        15,
        "sweet body"
      ],
      [
        "potato",
        12,
        "thickness"
      ],
      [
        "cumin",
        7,
        "earthy aroma",
        "seasoning"
      ],
      [
        "paprika",
        5,
        "warm topping",
        "seasoning"
      ],
      [
        "olive-oil",
        6,
        "finish",
        "seasoning"
      ],
      [
        "lemon",
        5,
        "brightness"
      ]
    ],
    "distinctiveFlavorSources": [
      "red lentils",
      "cumin",
      "lemon"
    ],
    "basicTaste": [
      "savory",
      "earthy",
      "mild"
    ],
    "textureProfile": [
      "smooth thick soup",
      "soft lentil body"
    ],
    "riskFlags": [],
    "dietaryFlags": [
      "vegan"
    ],
    "goodForTags": [
      "soup",
      "vegetarian-friendly"
    ],
    "avoidIfTags": [
      "wants-chunky-soup"
    ],
    "orderVerdict": {
      "en": "Order if you want a mild smooth lentil soup; avoid if you want a chunky or meaty soup.",
      "zh": "想要土耳其红扁豆汤，多为顺滑浓汤，配柠檬和孜然，温和暖胃时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je Turkse rode-linzensoep, meestal glad, met citroen en komijn; mild, warm en troostend wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "borek",
    "metadataCode": "119009",
    "cuisineId": "turkish",
    "names": {
      "en": "Börek",
      "zh": "土耳其酥皮馅饼",
      "nl": "Börek",
      "local": "börek"
    },
    "category": "starter",
    "cookingMethods": [
      "baked",
      "layered"
    ],
    "shortDescription": {
      "en": "Layered or rolled pastry filled with cheese, spinach, or meat; flaky, salty, and often eaten as a snack.",
      "zh": "土耳其酥皮馅饼：层叠或卷起的酥皮点心，常填奶酪、菠菜或肉，咸香酥脆。",
      "nl": "Börek: gelaagd of gerold deeg met kaas, spinazie of vlees; vlokkig, zoutig en vaak snackachtig."
    },
    "cookingProfile": {
      "en": "baked and built in layers; expect flaky layers and soft filling.",
      "zh": "通常烘烤并层叠制作后上桌，点餐时可预期：层叠或卷起的酥皮点心，常填奶酪、菠菜或肉，咸香酥脆。",
      "nl": "Meestal gebakken in de oven en in lagen opgebouwd; verwacht vooral: gelaagd of gerold deeg met kaas, spinazie of vlees; vlokkig, zoutig en vaak snackachtig."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "starter",
        "shareable"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "phyllo-pastry",
        45,
        "flaky pastry"
      ],
      [
        "feta",
        20,
        "cheese filling"
      ],
      [
        "spinach",
        15,
        "common filling"
      ],
      [
        "egg",
        8,
        "binder and glaze"
      ],
      [
        "butter",
        7,
        "rich layers"
      ],
      [
        "dill",
        5,
        "herbal note",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "flaky pastry",
      "salty cheese",
      "herbs"
    ],
    "basicTaste": [
      "savory",
      "salty",
      "buttery"
    ],
    "textureProfile": [
      "flaky layers",
      "soft filling"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "contains-egg"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "starter",
      "shareable"
    ],
    "avoidIfTags": [
      "avoids-gluten",
      "avoids-dairy"
    ],
    "orderVerdict": {
      "en": "Order if you want a flaky savory pastry; avoid if gluten, dairy, or egg is off-limits.",
      "zh": "想要层叠或卷起的酥皮点心，常填奶酪、菠菜或肉，咸香酥脆时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je gelaagd of gerold deeg met kaas, spinazie of vlees; vlokkig, zoutig en vaak snackachtig wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "kofte",
    "metadataCode": "119010",
    "cuisineId": "turkish",
    "names": {
      "en": "Köfte",
      "zh": "土耳其肉丸",
      "nl": "Köfte",
      "local": "köfte"
    },
    "category": "meat",
    "cookingMethods": [
      "grilled",
      "fried"
    ],
    "shortDescription": {
      "en": "Turkish spiced meatballs or patties, grilled or fried and served with bread, salad, or rice.",
      "zh": "土耳其肉丸：土耳其香料肉丸或肉饼，可烤可煎，常配面包、沙拉或米饭。",
      "nl": "Köfte: Turkse gekruide gehaktballen of burgers, gegrild of gebakken met brood, salade of rijst."
    },
    "cookingProfile": {
      "en": "grilled over high heat and fried; expect juicy patties and browned edges.",
      "zh": "通常高温烤制并煎炸后上桌，点餐时可预期：土耳其香料肉丸或肉饼，可烤可煎，常配面包、沙拉或米饭。",
      "nl": "Meestal op hoge hitte gegrild en gebakken in vet; verwacht vooral: Turkse gekruide gehaktballen of burgers, gegrild of gebakken met brood, salade of rijst."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "meat-lover",
        "classic-dish"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "ground-meat",
        55,
        "meatballs or patties"
      ],
      [
        "pita",
        15,
        "bread side"
      ],
      [
        "mixed-vegetables",
        10,
        "salad side"
      ],
      [
        "cumin",
        7,
        "earthy spice",
        "seasoning"
      ],
      [
        "paprika",
        5,
        "warm spice",
        "seasoning"
      ],
      [
        "parsley",
        5,
        "fresh herb",
        "seasoning"
      ],
      [
        "black-pepper",
        3,
        "pepper bite",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "spiced minced meat",
      "cumin",
      "parsley"
    ],
    "basicTaste": [
      "savory",
      "herbal",
      "warm-spiced"
    ],
    "textureProfile": [
      "juicy patties",
      "browned edges"
    ],
    "riskFlags": [
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "meat-lover",
      "classic-dish"
    ],
    "avoidIfTags": [
      "avoids-red-meat"
    ],
    "orderVerdict": {
      "en": "Order if you want spiced grilled meat patties; avoid if you do not want minced red meat.",
      "zh": "想要土耳其香料肉丸或肉饼，可烤可煎，常配面包、沙拉或米饭时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je Turkse gekruide gehaktballen of burgers, gegrild of gebakken met brood, salade of rijst wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "baklava-turkish",
    "metadataCode": "119011",
    "cuisineId": "turkish",
    "names": {
      "en": "Baklava",
      "zh": "土耳其果仁蜜酥",
      "nl": "Baklava",
      "local": "baklava"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked",
      "layered"
    ],
    "shortDescription": {
      "en": "Turkish-style layered phyllo pastry with nuts and syrup; intensely sweet, crisp, and sticky.",
      "zh": "土耳其果仁蜜酥：土耳其风格果仁糖浆酥皮，甜度很高，层次酥脆且带黏润感。",
      "nl": "Baklava: Turkse filodeeglaagjes met noten en siroop; intens zoet, krokant en kleverig."
    },
    "cookingProfile": {
      "en": "baked and built in layers; expect flaky pastry, sticky syrup and crunchy nuts.",
      "zh": "通常烘烤并层叠制作后上桌，点餐时可预期：土耳其风格果仁糖浆酥皮，甜度很高，层次酥脆且带黏润感。",
      "nl": "Meestal gebakken in de oven en in lagen opgebouwd; verwacht vooral: Turkse filodeeglaagjes met noten en siroop; intens zoet, krokant en kleverig."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "dessert",
        "sweet-tooth"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "phyllo-pastry",
        35,
        "flaky layers"
      ],
      [
        "walnuts",
        22,
        "nut filling"
      ],
      [
        "honey",
        18,
        "syrup"
      ],
      [
        "sugar",
        12,
        "sweet syrup"
      ],
      [
        "butter",
        8,
        "pastry richness"
      ],
      [
        "cinnamon",
        5,
        "warm aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "syrup",
      "nuts",
      "buttered pastry"
    ],
    "basicTaste": [
      "very sweet",
      "nutty",
      "buttery"
    ],
    "textureProfile": [
      "flaky pastry",
      "sticky syrup",
      "crunchy nuts"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "contains-tree-nut"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert",
      "sweet-tooth"
    ],
    "avoidIfTags": [
      "avoids-nuts",
      "dislikes-very-sweet-desserts"
    ],
    "orderVerdict": {
      "en": "Order if you want a small intensely sweet nut pastry; avoid if nuts or syrupy desserts are a problem.",
      "zh": "想要土耳其风格果仁糖浆酥皮，甜度很高，层次酥脆且带黏润感时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je Turkse filodeeglaagjes met noten en siroop; intens zoet, krokant en kleverig wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "kunefe",
    "metadataCode": "119012",
    "cuisineId": "turkish",
    "names": {
      "en": "Künefe",
      "zh": "土耳其奶酪甜点",
      "nl": "Künefe",
      "local": "künefe"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Hot shredded pastry dessert filled with stretchy cheese and soaked in syrup; sweet, buttery, and dramatic.",
      "zh": "土耳其奶酪甜点：热食细丝酥皮甜点，中间是可拉丝奶酪并浇糖浆，甜咸奶香明显。",
      "nl": "Künefe: warm dessert van draadjesdeeg met rekbare kaas en siroop; zoet, boterig en opvallend."
    },
    "cookingProfile": {
      "en": "baked; expect crisp shredded pastry, stretchy cheese and sticky syrup.",
      "zh": "通常烘烤后上桌，点餐时可预期：热食细丝酥皮甜点，中间是可拉丝奶酪并浇糖浆，甜咸奶香明显。",
      "nl": "Meestal gebakken in de oven; verwacht vooral: warm dessert van draadjesdeeg met rekbare kaas en siroop; zoet, boterig en opvallend."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "dessert",
        "cheese-lover"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "wheat-flour",
        35,
        "shredded pastry"
      ],
      [
        "cheese",
        25,
        "melty filling"
      ],
      [
        "sugar",
        20,
        "syrup"
      ],
      [
        "butter",
        10,
        "browned richness"
      ],
      [
        "honey",
        5,
        "syrup depth"
      ],
      [
        "walnuts",
        5,
        "optional nut topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "toasted pastry",
      "melted cheese",
      "sugar syrup"
    ],
    "basicTaste": [
      "sweet",
      "buttery",
      "mildly salty"
    ],
    "textureProfile": [
      "crisp shredded pastry",
      "stretchy cheese",
      "sticky syrup"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "contains-tree-nut"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert",
      "cheese-lover"
    ],
    "avoidIfTags": [
      "avoids-dairy",
      "dislikes-sweet-cheese"
    ],
    "orderVerdict": {
      "en": "Order if you want a hot sweet cheese pastry; avoid if sweet melted cheese or dairy is not appealing.",
      "zh": "想要热食细丝酥皮甜点，中间是可拉丝奶酪并浇糖浆，甜咸奶香明显时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je warm dessert van draadjesdeeg met rekbare kaas en siroop; zoet, boterig en opvallend wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "hummus",
    "metadataCode": "120001",
    "cuisineId": "middle-eastern",
    "names": {
      "en": "Hummus",
      "zh": "鹰嘴豆泥",
      "nl": "Hummus",
      "local": "hummus"
    },
    "category": "starter",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Chickpea and tahini dip with lemon, garlic, and olive oil; creamy, nutty, and usually served with bread.",
      "zh": "鹰嘴豆泥：鹰嘴豆芝麻酱蘸酱，带柠檬、蒜和橄榄油，绵密坚果香明显。",
      "nl": "Hummus: kikkererwten-tahinidip met citroen, knoflook en olijfolie; romig, nootachtig en vaak met brood."
    },
    "cookingProfile": {
      "en": "assembled to order; expect smooth thick dip and creamy spread.",
      "zh": "通常现拌或组合后上桌，点餐时可预期：鹰嘴豆芝麻酱蘸酱，带柠檬、蒜和橄榄油，绵密坚果香明显。",
      "nl": "Meestal samengesteld; verwacht vooral: kikkererwten-tahinidip met citroen, knoflook en olijfolie; romig, nootachtig en vaak met brood."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "dip",
        "vegan-friendly"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "chickpeas",
        55,
        "puree base"
      ],
      [
        "tahini",
        18,
        "sesame richness",
        "seasoning"
      ],
      [
        "olive-oil",
        10,
        "finish",
        "seasoning"
      ],
      [
        "lemon",
        7,
        "brightness"
      ],
      [
        "garlic",
        5,
        "aroma",
        "seasoning"
      ],
      [
        "cumin",
        3,
        "earthy spice",
        "seasoning"
      ],
      [
        "sea-salt",
        2,
        "seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "tahini",
      "lemon",
      "olive oil"
    ],
    "basicTaste": [
      "nutty",
      "tangy",
      "savory"
    ],
    "textureProfile": [
      "smooth thick dip",
      "creamy spread"
    ],
    "riskFlags": [
      "contains-sesame"
    ],
    "dietaryFlags": [
      "vegan"
    ],
    "goodForTags": [
      "dip",
      "vegan-friendly"
    ],
    "avoidIfTags": [
      "sesame-allergy",
      "dislikes-garlic"
    ],
    "orderVerdict": {
      "en": "Order if you want a creamy sesame-chickpea dip; avoid if sesame or garlic is a problem.",
      "zh": "想要鹰嘴豆芝麻酱蘸酱，带柠檬、蒜和橄榄油，绵密坚果香明显时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je kikkererwten-tahinidip met citroen, knoflook en olijfolie; romig, nootachtig en vaak met brood wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "falafel",
    "metadataCode": "120002",
    "cuisineId": "middle-eastern",
    "names": {
      "en": "Falafel",
      "zh": "炸鹰嘴豆丸",
      "nl": "Falafel",
      "local": "falafel"
    },
    "category": "fried-snack",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "Fried chickpea or fava patties with herbs and spices, often served in pita with tahini sauce.",
      "zh": "炸鹰嘴豆丸：鹰嘴豆或蚕豆香草丸子炸至外脆内松，常夹皮塔配芝麻酱。",
      "nl": "Falafel: gefrituurde kikkererwten- of favaballetjes met kruiden en specerijen, vaak in pita met tahini."
    },
    "cookingProfile": {
      "en": "deep-fried; expect crisp crust, crumbly soft center and creamy sauce.",
      "zh": "通常油炸后上桌，点餐时可预期：鹰嘴豆或蚕豆香草丸子炸至外脆内松，常夹皮塔配芝麻酱。",
      "nl": "Meestal gefrituurd; verwacht vooral: gefrituurde kikkererwten- of favaballetjes met kruiden en specerijen, vaak in pita met tahini."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "vegan-friendly",
        "street-food"
      ],
      "description": {
        "en": "A street-food style menu reference; the verified card explains the usual handheld or casual format and common risks.",
        "zh": "街头小吃风格的菜单项；已审核卡片说明常见食用形式和风险。",
        "nl": "Een streetfoodachtig menu-item; de geverifieerde kaart legt vorm en risico's uit."
      }
    },
    "composition": [
      [
        "chickpeas",
        50,
        "ground legume base"
      ],
      [
        "mixed-vegetables",
        12,
        "herb mix"
      ],
      [
        "cumin",
        8,
        "earthy spice",
        "seasoning"
      ],
      [
        "coriander",
        8,
        "citrus spice",
        "seasoning"
      ],
      [
        "garlic",
        7,
        "aroma",
        "seasoning"
      ],
      [
        "tahini",
        10,
        "sauce",
        "seasoning"
      ],
      [
        "pita",
        5,
        "serving bread"
      ]
    ],
    "distinctiveFlavorSources": [
      "fried chickpeas",
      "cumin coriander",
      "tahini"
    ],
    "basicTaste": [
      "savory",
      "herbal",
      "nutty"
    ],
    "textureProfile": [
      "crisp crust",
      "crumbly soft center",
      "creamy sauce"
    ],
    "riskFlags": [
      "contains-sesame",
      "contains-gluten"
    ],
    "dietaryFlags": [
      "vegan"
    ],
    "goodForTags": [
      "vegan-friendly",
      "street-food"
    ],
    "avoidIfTags": [
      "avoids-fried-food",
      "sesame-allergy"
    ],
    "orderVerdict": {
      "en": "Order if you want crisp vegetarian patties with tahini; avoid if fried food, sesame, or pita bread is an issue.",
      "zh": "想要鹰嘴豆或蚕豆香草丸子炸至外脆内松，常夹皮塔配芝麻酱时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je gefrituurde kikkererwten- of favaballetjes met kruiden en specerijen, vaak in pita met tahini wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "shawarma",
    "metadataCode": "120003",
    "cuisineId": "middle-eastern",
    "names": {
      "en": "Shawarma",
      "zh": "中东烤肉卷",
      "nl": "Shoarma",
      "local": "shawarma"
    },
    "category": "meat",
    "cookingMethods": [
      "grilled",
      "assembled"
    ],
    "shortDescription": {
      "en": "Spiced rotisserie-style shaved meat in pita or on a plate with vegetables and garlic-tahini sauces.",
      "zh": "中东烤肉卷：香料旋转烤肉薄片，夹皮塔或做饭盘，常配蔬菜和蒜香芝麻酱。",
      "nl": "Shoarma: gekruid geschaafd spitvlees in pita of op bord met groente en knoflook-tahinisaus."
    },
    "cookingProfile": {
      "en": "grilled over high heat and assembled to order; expect juicy meat, soft pita and fresh salad.",
      "zh": "通常高温烤制并现拌或组合后上桌，点餐时可预期：香料旋转烤肉薄片，夹皮塔或做饭盘，常配蔬菜和蒜香芝麻酱。",
      "nl": "Meestal op hoge hitte gegrild en samengesteld; verwacht vooral: gekruid geschaafd spitvlees in pita of op bord met groente en knoflook-tahinisaus."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "street-food",
        "filling"
      ],
      "description": {
        "en": "A street-food style menu reference; the verified card explains the usual handheld or casual format and common risks.",
        "zh": "街头小吃风格的菜单项；已审核卡片说明常见食用形式和风险。",
        "nl": "Een streetfoodachtig menu-item; de geverifieerde kaart legt vorm en risico's uit."
      }
    },
    "composition": [
      [
        "shawarma-meat",
        45,
        "spiced shaved meat"
      ],
      [
        "pita",
        22,
        "wrap bread"
      ],
      [
        "mixed-vegetables",
        12,
        "salad filling"
      ],
      [
        "tahini",
        8,
        "sauce",
        "seasoning"
      ],
      [
        "garlic",
        5,
        "sauce aroma",
        "seasoning"
      ],
      [
        "cumin",
        4,
        "warm spice",
        "seasoning"
      ],
      [
        "chili",
        4,
        "optional heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "spiced shaved meat",
      "garlic sauce",
      "tahini"
    ],
    "basicTaste": [
      "savory",
      "garlicky",
      "spiced"
    ],
    "textureProfile": [
      "juicy meat",
      "soft pita",
      "fresh salad"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-sesame",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "street-food",
      "filling"
    ],
    "avoidIfTags": [
      "sesame-allergy",
      "avoids-garlic"
    ],
    "orderVerdict": {
      "en": "Order if you want a filling wrap or plate of spiced shaved meat; avoid if garlic, sesame sauce, or bread is a concern.",
      "zh": "想要香料旋转烤肉薄片，夹皮塔或做饭盘，常配蔬菜和蒜香芝麻酱时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je gekruid geschaafd spitvlees in pita of op bord met groente en knoflook-tahinisaus wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "tabbouleh",
    "metadataCode": "120004",
    "cuisineId": "middle-eastern",
    "names": {
      "en": "Tabbouleh",
      "zh": "塔布勒沙拉",
      "nl": "Tabouleh",
      "local": "tabbouleh"
    },
    "category": "salad",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Parsley-heavy salad with tomato, bulgur, lemon, mint, and olive oil; bright and herb-forward.",
      "zh": "塔布勒沙拉：以欧芹为主的酸香沙拉，配番茄、碎麦、柠檬、薄荷和橄榄油，草本感强。",
      "nl": "Tabouleh: peterselierijke salade met tomaat, bulgur, citroen, munt en olijfolie; fris en kruidig."
    },
    "cookingProfile": {
      "en": "assembled to order; expect finely chopped herbs, juicy tomato and tiny grain chew.",
      "zh": "通常现拌或组合后上桌，点餐时可预期：以欧芹为主的酸香沙拉，配番茄、碎麦、柠檬、薄荷和橄榄油，草本感强。",
      "nl": "Meestal samengesteld; verwacht vooral: peterselierijke salade met tomaat, bulgur, citroen, munt en olijfolie; fris en kruidig."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "fresh",
        "vegan-friendly"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "parsley",
        35,
        "main herb",
        "seasoning"
      ],
      [
        "tomato",
        20,
        "juicy vegetable"
      ],
      [
        "couscous",
        15,
        "bulgur-style grain"
      ],
      [
        "lemon",
        12,
        "acid"
      ],
      [
        "olive-oil",
        10,
        "dressing",
        "seasoning"
      ],
      [
        "mint",
        5,
        "fresh herb",
        "seasoning"
      ],
      [
        "sea-salt",
        3,
        "seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "parsley",
      "lemon",
      "olive oil"
    ],
    "basicTaste": [
      "fresh",
      "tangy",
      "herbal"
    ],
    "textureProfile": [
      "finely chopped herbs",
      "juicy tomato",
      "tiny grain chew"
    ],
    "riskFlags": [
      "contains-gluten"
    ],
    "dietaryFlags": [
      "vegan"
    ],
    "goodForTags": [
      "fresh",
      "vegan-friendly"
    ],
    "avoidIfTags": [
      "avoids-parsley",
      "avoids-gluten"
    ],
    "orderVerdict": {
      "en": "Order if you want a very fresh lemon-herb salad; avoid if parsley-heavy salads or gluten grains are not wanted.",
      "zh": "想要以欧芹为主的酸香沙拉，配番茄、碎麦、柠檬、薄荷和橄榄油，草本感强时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je peterselierijke salade met tomaat, bulgur, citroen, munt en olijfolie; fris en kruidig wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "fattoush",
    "metadataCode": "120005",
    "cuisineId": "middle-eastern",
    "names": {
      "en": "Fattoush",
      "zh": "炸面包蔬菜沙拉",
      "nl": "Fattoush",
      "local": "fattoush"
    },
    "category": "salad",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Levantine chopped salad with toasted or fried pita chips and lemony dressing; fresher than it is heavy.",
      "zh": "炸面包蔬菜沙拉：黎凡特碎蔬菜沙拉配烤或炸皮塔脆片和柠檬酱汁，清爽且有脆感。",
      "nl": "Fattoush: Levantijnse gehakte salade met geroosterde of gefrituurde pitachips en citroendressing."
    },
    "cookingProfile": {
      "en": "assembled to order; expect crisp vegetables and crunchy pita chips.",
      "zh": "通常现拌或组合后上桌，点餐时可预期：黎凡特碎蔬菜沙拉配烤或炸皮塔脆片和柠檬酱汁，清爽且有脆感。",
      "nl": "Meestal samengesteld; verwacht vooral: Levantijnse gehakte salade met geroosterde of gefrituurde pitachips en citroendressing."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "fresh",
        "salad"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "mixed-vegetables",
        35,
        "fresh vegetable base"
      ],
      [
        "pita",
        20,
        "toasted bread chips"
      ],
      [
        "tomato",
        15,
        "juicy vegetable"
      ],
      [
        "cucumber",
        12,
        "crunch"
      ],
      [
        "lemon",
        8,
        "dressing acid"
      ],
      [
        "olive-oil",
        7,
        "dressing",
        "seasoning"
      ],
      [
        "mint",
        3,
        "fresh herb",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "lemon dressing",
      "toasted pita",
      "fresh herbs"
    ],
    "basicTaste": [
      "tangy",
      "fresh",
      "toasty"
    ],
    "textureProfile": [
      "crisp vegetables",
      "crunchy pita chips"
    ],
    "riskFlags": [
      "contains-gluten"
    ],
    "dietaryFlags": [
      "vegan"
    ],
    "goodForTags": [
      "fresh",
      "salad"
    ],
    "avoidIfTags": [
      "avoids-gluten",
      "dislikes-sour-dressing"
    ],
    "orderVerdict": {
      "en": "Order if you want a crunchy lemony salad with pita chips; avoid if bread chips or sour dressing are not wanted.",
      "zh": "想要黎凡特碎蔬菜沙拉配烤或炸皮塔脆片和柠檬酱汁，清爽且有脆感时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je Levantijnse gehakte salade met geroosterde of gefrituurde pitachips en citroendressing wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "baba-ganoush",
    "metadataCode": "120006",
    "cuisineId": "middle-eastern",
    "names": {
      "en": "Baba Ganoush",
      "zh": "烤茄子芝麻酱泥",
      "nl": "Baba ganoush",
      "local": "baba ganoush"
    },
    "category": "starter",
    "cookingMethods": [
      "grilled",
      "assembled"
    ],
    "shortDescription": {
      "en": "Smoky roasted eggplant dip with tahini, lemon, garlic, and olive oil; softer and smokier than hummus.",
      "zh": "烤茄子芝麻酱泥：烟熏烤茄子芝麻酱蘸酱，配柠檬、蒜和橄榄油，比鹰嘴豆泥更柔软烟熏。",
      "nl": "Baba ganoush: rokerige geroosterde-auberginedip met tahini, citroen, knoflook en olijfolie; zachter en rokeriger dan hummus."
    },
    "cookingProfile": {
      "en": "grilled over high heat and assembled to order; expect creamy dip and soft smoky eggplant.",
      "zh": "通常高温烤制并现拌或组合后上桌，点餐时可预期：烟熏烤茄子芝麻酱蘸酱，配柠檬、蒜和橄榄油，比鹰嘴豆泥更柔软烟熏。",
      "nl": "Meestal op hoge hitte gegrild en samengesteld; verwacht vooral: rokerige geroosterde-auberginedip met tahini, citroen, knoflook en olijfolie; zachter en rokeriger dan hummus."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "dip",
        "vegan-friendly"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "eggplant-global",
        50,
        "smoked eggplant puree"
      ],
      [
        "tahini",
        18,
        "sesame richness",
        "seasoning"
      ],
      [
        "olive-oil",
        12,
        "finish",
        "seasoning"
      ],
      [
        "lemon",
        8,
        "brightness"
      ],
      [
        "garlic",
        6,
        "aroma",
        "seasoning"
      ],
      [
        "cumin",
        3,
        "earthy note",
        "seasoning"
      ],
      [
        "sea-salt",
        3,
        "seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "smoky eggplant",
      "tahini",
      "lemon garlic"
    ],
    "basicTaste": [
      "smoky",
      "nutty",
      "tangy"
    ],
    "textureProfile": [
      "creamy dip",
      "soft smoky eggplant"
    ],
    "riskFlags": [
      "contains-sesame"
    ],
    "dietaryFlags": [
      "vegan"
    ],
    "goodForTags": [
      "dip",
      "vegan-friendly"
    ],
    "avoidIfTags": [
      "sesame-allergy",
      "dislikes-smoky-eggplant"
    ],
    "orderVerdict": {
      "en": "Order if you want a smoky eggplant dip; avoid if sesame or soft smoky eggplant is not appealing.",
      "zh": "想要烟熏烤茄子芝麻酱蘸酱，配柠檬、蒜和橄榄油，比鹰嘴豆泥更柔软烟熏时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je rokerige geroosterde-auberginedip met tahini, citroen, knoflook en olijfolie; zachter en rokeriger dan hummus wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "kibbeh",
    "metadataCode": "120007",
    "cuisineId": "middle-eastern",
    "names": {
      "en": "Kibbeh",
      "zh": "中东炸肉麦丸",
      "nl": "Kibbeh",
      "local": "kibbeh"
    },
    "category": "meat",
    "cookingMethods": [
      "fried",
      "baked"
    ],
    "shortDescription": {
      "en": "Spiced meat and bulgur croquettes or baked layers, often with lamb or beef; meaty and warmly spiced.",
      "zh": "中东炸肉麦丸：香料肉和碎麦做成炸球或烤层，常用羊肉或牛肉，肉香和温香料明显。",
      "nl": "Kibbeh: gekruid vlees met bulgur als kroketten of ovenschotel, vaak met lam of rund; vlezig en warm gekruid."
    },
    "cookingProfile": {
      "en": "fried and baked; expect crisp shell, tender meat filling and grainy bite.",
      "zh": "通常煎炸并烘烤后上桌，点餐时可预期：香料肉和碎麦做成炸球或烤层，常用羊肉或牛肉，肉香和温香料明显。",
      "nl": "Meestal gebakken in vet en gebakken in de oven; verwacht vooral: gekruid vlees met bulgur als kroketten of ovenschotel, vaak met lam of rund; vlezig en warm gekruid."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "meat-lover",
        "starter"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "ground-meat",
        45,
        "meat shell and filling"
      ],
      [
        "couscous",
        20,
        "bulgur-style grain shell"
      ],
      [
        "onion",
        10,
        "filling sweetness"
      ],
      [
        "cumin",
        7,
        "warm spice",
        "seasoning"
      ],
      [
        "cinnamon",
        5,
        "warm aroma",
        "seasoning"
      ],
      [
        "mint",
        5,
        "herbal lift",
        "seasoning"
      ],
      [
        "pita",
        8,
        "serving bread"
      ]
    ],
    "distinctiveFlavorSources": [
      "spiced lamb or beef",
      "bulgur",
      "warm spices"
    ],
    "basicTaste": [
      "savory",
      "warm-spiced",
      "meaty"
    ],
    "textureProfile": [
      "crisp shell",
      "tender meat filling",
      "grainy bite"
    ],
    "riskFlags": [
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "meat-lover",
      "starter"
    ],
    "avoidIfTags": [
      "avoids-red-meat",
      "avoids-gluten"
    ],
    "orderVerdict": {
      "en": "Order if you want spiced meat croquettes or baked meat-grain layers; avoid if red meat or gluten grains are not wanted.",
      "zh": "想要香料肉和碎麦做成炸球或烤层，常用羊肉或牛肉，肉香和温香料明显时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je gekruid vlees met bulgur als kroketten of ovenschotel, vaak met lam of rund; vlezig en warm gekruid wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "kofta",
    "metadataCode": "120008",
    "cuisineId": "middle-eastern",
    "names": {
      "en": "Kofta",
      "zh": "中东香料肉丸",
      "nl": "Kofta",
      "local": "kofta"
    },
    "category": "meat",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Middle Eastern minced meat skewers or patties seasoned with herbs and warm spices.",
      "zh": "中东香料肉丸：中东香草香料肉末串或肉饼，通常烤制，肉汁和炭烤边缘明显。",
      "nl": "Kofta: Midden-Oosterse gehaktspiesen of burgers met kruiden en warme specerijen."
    },
    "cookingProfile": {
      "en": "grilled over high heat; expect juicy minced meat and charred edges.",
      "zh": "通常高温烤制后上桌，点餐时可预期：中东香草香料肉末串或肉饼，通常烤制，肉汁和炭烤边缘明显。",
      "nl": "Meestal op hoge hitte gegrild; verwacht vooral: Midden-Oosterse gehaktspiesen of burgers met kruiden en warme specerijen."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "meat-lover",
        "grilled"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "ground-meat",
        60,
        "minced meat skewer"
      ],
      [
        "pita",
        15,
        "serving bread"
      ],
      [
        "mixed-vegetables",
        10,
        "salad side"
      ],
      [
        "cumin",
        5,
        "earthy spice",
        "seasoning"
      ],
      [
        "coriander",
        4,
        "warm spice",
        "seasoning"
      ],
      [
        "parsley",
        3,
        "fresh herb",
        "seasoning"
      ],
      [
        "black-pepper",
        3,
        "pepper bite",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "grilled minced meat",
      "cumin coriander",
      "parsley"
    ],
    "basicTaste": [
      "savory",
      "herbal",
      "warm-spiced"
    ],
    "textureProfile": [
      "juicy minced meat",
      "charred edges"
    ],
    "riskFlags": [
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "meat-lover",
      "grilled"
    ],
    "avoidIfTags": [
      "avoids-red-meat"
    ],
    "orderVerdict": {
      "en": "Order if you want juicy grilled minced meat with warm spices; avoid if red meat or grilled meat is not desired.",
      "zh": "想要中东香草香料肉末串或肉饼，通常烤制，肉汁和炭烤边缘明显时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je Midden-Oosterse gehaktspiesen of burgers met kruiden en warme specerijen wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "mansaf",
    "metadataCode": "120009",
    "cuisineId": "middle-eastern",
    "names": {
      "en": "Mansaf",
      "zh": "约旦酸奶羊肉饭",
      "nl": "Mansaf",
      "local": "mansaf"
    },
    "category": "rice",
    "cookingMethods": [
      "braised",
      "assembled"
    ],
    "shortDescription": {
      "en": "Jordanian lamb and rice with tangy dried-yogurt sauce, often served as a generous platter.",
      "zh": "约旦酸奶羊肉饭：约旦羊肉米饭配酸香干酸奶酱，常以大盘形式上桌，分量感强。",
      "nl": "Mansaf: Jordaanse lamsrijst met zurige gedroogde-yoghurtsaus, vaak als royale schaal geserveerd."
    },
    "cookingProfile": {
      "en": "slow-braised and assembled to order; expect tender lamb, sauced rice and nut garnish.",
      "zh": "通常慢炖并现拌或组合后上桌，点餐时可预期：约旦羊肉米饭配酸香干酸奶酱，常以大盘形式上桌，分量感强。",
      "nl": "Meestal langzaam gestoofd en samengesteld; verwacht vooral: Jordaanse lamsrijst met zurige gedroogde-yoghurtsaus, vaak als royale schaal geserveerd."
    },
    "cuisineRole": {
      "level": "signature",
      "tags": [
        "signature",
        "signature-dish",
        "sharing"
      ],
      "description": {
        "en": "A signature menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的代表性菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een kenmerkend menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "lamb",
        40,
        "braised meat"
      ],
      [
        "steamed-rice",
        35,
        "rice base"
      ],
      [
        "yogurt",
        15,
        "jameed-style sauce"
      ],
      [
        "almonds",
        5,
        "nut garnish"
      ],
      [
        "cardamom",
        3,
        "aroma",
        "seasoning"
      ],
      [
        "black-pepper",
        2,
        "warmth",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "lamb",
      "tangy yogurt sauce",
      "cardamom"
    ],
    "basicTaste": [
      "savory",
      "tangy",
      "rich"
    ],
    "textureProfile": [
      "tender lamb",
      "sauced rice",
      "nut garnish"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-tree-nut"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "signature-dish",
      "sharing"
    ],
    "avoidIfTags": [
      "avoids-lamb",
      "avoids-dairy"
    ],
    "orderVerdict": {
      "en": "Order if you want a generous lamb-and-rice platter with tangy dairy sauce; avoid if lamb or dairy sauce is not wanted.",
      "zh": "想要约旦羊肉米饭配酸香干酸奶酱，常以大盘形式上桌，分量感强时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je Jordaanse lamsrijst met zurige gedroogde-yoghurtsaus, vaak als royale schaal geserveerd wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "mujadara",
    "metadataCode": "120010",
    "cuisineId": "middle-eastern",
    "names": {
      "en": "Mujadara",
      "zh": "扁豆洋葱饭",
      "nl": "Mujadara",
      "local": "mujadara"
    },
    "category": "vegetarian-main",
    "cookingMethods": [
      "simmered",
      "fried"
    ],
    "shortDescription": {
      "en": "Lentils and rice topped with fried onions; simple, earthy, and more comforting than flashy.",
      "zh": "扁豆洋葱饭：扁豆米饭配炸洋葱，朴实、土香、饱腹，不是重酱菜。",
      "nl": "Mujadara: linzen en rijst met gebakken uien; eenvoudig, aards en troostend."
    },
    "cookingProfile": {
      "en": "simmered and fried; expect soft lentils and rice and crisp onions.",
      "zh": "通常慢煮并煎炸后上桌，点餐时可预期：扁豆米饭配炸洋葱，朴实、土香、饱腹，不是重酱菜。",
      "nl": "Meestal zacht gestoofd en gebakken in vet; verwacht vooral: linzen en rijst met gebakken uien; eenvoudig, aards en troostend."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "vegan-friendly",
        "comfort-food"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "lentils",
        40,
        "lentil base"
      ],
      [
        "steamed-rice",
        30,
        "grain base"
      ],
      [
        "onion",
        18,
        "fried onion topping"
      ],
      [
        "cumin",
        5,
        "earthy spice",
        "seasoning"
      ],
      [
        "olive-oil",
        5,
        "richness",
        "seasoning"
      ],
      [
        "black-pepper",
        2,
        "warm bite",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "lentils",
      "caramelized onions",
      "cumin"
    ],
    "basicTaste": [
      "savory",
      "earthy",
      "slightly sweet"
    ],
    "textureProfile": [
      "soft lentils and rice",
      "crisp onions"
    ],
    "riskFlags": [],
    "dietaryFlags": [
      "vegan"
    ],
    "goodForTags": [
      "vegan-friendly",
      "comfort-food"
    ],
    "avoidIfTags": [
      "wants-meat-main"
    ],
    "orderVerdict": {
      "en": "Order if you want a simple vegan lentil-rice dish; avoid if you are looking for meat or bold sauce.",
      "zh": "想要扁豆米饭配炸洋葱，朴实、土香、饱腹，不是重酱菜时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je linzen en rijst met gebakken uien; eenvoudig, aards en troostend wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "baklava-middle-eastern",
    "metadataCode": "120011",
    "cuisineId": "middle-eastern",
    "names": {
      "en": "Baklava",
      "zh": "中东果仁蜜酥",
      "nl": "Baklava",
      "local": "baklava"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked",
      "layered"
    ],
    "shortDescription": {
      "en": "Layered phyllo pastry with nuts and syrup; intensely sweet and usually served in small pieces.",
      "zh": "中东果仁蜜酥：中东果仁糖浆酥皮，层次酥脆，糖浆黏润，通常小块食用。",
      "nl": "Baklava: filodeeglaagjes met noten en siroop; intens zoet en meestal in kleine stukken."
    },
    "cookingProfile": {
      "en": "baked and built in layers; expect flaky layers, sticky syrup and crunchy nuts.",
      "zh": "通常烘烤并层叠制作后上桌，点餐时可预期：中东果仁糖浆酥皮，层次酥脆，糖浆黏润，通常小块食用。",
      "nl": "Meestal gebakken in de oven en in lagen opgebouwd; verwacht vooral: filodeeglaagjes met noten en siroop; intens zoet en meestal in kleine stukken."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "dessert",
        "sweet-tooth"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "phyllo-pastry",
        35,
        "flaky layers"
      ],
      [
        "walnuts",
        20,
        "nut filling"
      ],
      [
        "almonds",
        12,
        "nut filling"
      ],
      [
        "honey",
        18,
        "syrup"
      ],
      [
        "sugar",
        10,
        "sweetness"
      ],
      [
        "cinnamon",
        5,
        "warm spice",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "syrup",
      "mixed nuts",
      "flaky pastry"
    ],
    "basicTaste": [
      "very sweet",
      "nutty",
      "aromatic"
    ],
    "textureProfile": [
      "flaky layers",
      "sticky syrup",
      "crunchy nuts"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-tree-nut"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert",
      "sweet-tooth"
    ],
    "avoidIfTags": [
      "avoids-nuts",
      "dislikes-syrup"
    ],
    "orderVerdict": {
      "en": "Order if you want a small syrupy nut pastry; avoid if nuts or very sweet syrup are not wanted.",
      "zh": "想要中东果仁糖浆酥皮，层次酥脆，糖浆黏润，通常小块食用时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je filodeeglaagjes met noten en siroop; intens zoet en meestal in kleine stukken wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "labneh",
    "metadataCode": "120012",
    "cuisineId": "middle-eastern",
    "names": {
      "en": "Labneh",
      "zh": "浓缩酸奶酱",
      "nl": "Labneh",
      "local": "labneh"
    },
    "category": "starter",
    "cookingMethods": [
      "chilled",
      "assembled"
    ],
    "shortDescription": {
      "en": "Thick strained yogurt served as a dip with olive oil and herbs; tangy, cool, and creamy.",
      "zh": "浓缩酸奶酱：浓缩酸奶蘸酱，配橄榄油和香草，酸香、冷食、口感绵密。",
      "nl": "Labneh: dikke uitgelekte yoghurt als dip met olijfolie en kruiden; friszuur, koel en romig."
    },
    "cookingProfile": {
      "en": "served cold and assembled to order; expect thick creamy spread and cool temperature.",
      "zh": "通常冷食并现拌或组合后上桌，点餐时可预期：浓缩酸奶蘸酱，配橄榄油和香草，酸香、冷食、口感绵密。",
      "nl": "Meestal koud geserveerd en samengesteld; verwacht vooral: dikke uitgelekte yoghurt als dip met olijfolie en kruiden; friszuur, koel en romig."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "dip",
        "cooling"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "yogurt",
        70,
        "strained yogurt base"
      ],
      [
        "olive-oil",
        12,
        "finish",
        "seasoning"
      ],
      [
        "pita",
        8,
        "serving bread"
      ],
      [
        "mint",
        4,
        "herbal topping",
        "seasoning"
      ],
      [
        "sea-salt",
        3,
        "seasoning",
        "seasoning"
      ],
      [
        "black-pepper",
        3,
        "warm bite",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "strained yogurt tang",
      "olive oil",
      "mint"
    ],
    "basicTaste": [
      "tangy",
      "creamy",
      "salty"
    ],
    "textureProfile": [
      "thick creamy spread",
      "cool temperature"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-gluten"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dip",
      "cooling"
    ],
    "avoidIfTags": [
      "avoids-dairy",
      "wants-hot-food"
    ],
    "orderVerdict": {
      "en": "Order if you want a cool tangy dairy dip; avoid if dairy or cold dips are not wanted.",
      "zh": "想要浓缩酸奶蘸酱，配橄榄油和香草，酸香、冷食、口感绵密时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je dikke uitgelekte yoghurt als dip met olijfolie en kruiden; friszuur, koel en romig wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "tacos",
    "metadataCode": "121001",
    "cuisineId": "mexican",
    "names": {
      "en": "Tacos",
      "zh": "墨西哥玉米卷",
      "nl": "Taco’s",
      "local": "tacos"
    },
    "category": "street-food",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Small tortillas filled with meat, vegetables, salsa, and lime; handheld, fresh, and highly variable by filling.",
      "zh": "墨西哥玉米卷：小玉米或小麦饼夹肉、蔬菜、莎莎和青柠，手持食用，馅料变化很大。",
      "nl": "Taco’s: kleine tortilla's gevuld met vlees, groente, salsa en limoen; handzaam, fris en sterk afhankelijk van vulling."
    },
    "cookingProfile": {
      "en": "assembled to order; expect soft tortilla, juicy filling and crisp garnish.",
      "zh": "通常现拌或组合后上桌，点餐时可预期：小玉米或小麦饼夹肉、蔬菜、莎莎和青柠，手持食用，馅料变化很大。",
      "nl": "Meestal samengesteld; verwacht vooral: kleine tortilla's gevuld met vlees, groente, salsa en limoen; handzaam, fris en sterk afhankelijk van vulling."
    },
    "cuisineRole": {
      "level": "signature",
      "tags": [
        "signature",
        "street-food",
        "shareable"
      ],
      "description": {
        "en": "A signature menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的代表性菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een kenmerkend menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "tortilla",
        35,
        "small tortilla"
      ],
      [
        "beef",
        25,
        "common filling"
      ],
      [
        "mixed-vegetables",
        12,
        "onion cilantro garnish"
      ],
      [
        "salsa",
        10,
        "fresh sauce",
        "seasoning"
      ],
      [
        "lime",
        8,
        "finish"
      ],
      [
        "avocado",
        5,
        "optional creaminess"
      ],
      [
        "chili",
        5,
        "heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "corn tortilla",
      "salsa",
      "lime"
    ],
    "basicTaste": [
      "savory",
      "fresh",
      "spicy"
    ],
    "textureProfile": [
      "soft tortilla",
      "juicy filling",
      "crisp garnish"
    ],
    "riskFlags": [
      "contains-gluten",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "street-food",
      "shareable"
    ],
    "avoidIfTags": [
      "avoids-heat",
      "wants-knife-and-fork"
    ],
    "orderVerdict": {
      "en": "Order if you want handheld tortillas with bright salsa and lime; avoid if messy hand food or chili salsa is not welcome.",
      "zh": "想要小玉米或小麦饼夹肉、蔬菜、莎莎和青柠，手持食用，馅料变化很大时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je kleine tortilla's gevuld met vlees, groente, salsa en limoen; handzaam, fris en sterk afhankelijk van vulling wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 2,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "quesadilla",
    "metadataCode": "121002",
    "cuisineId": "mexican",
    "names": {
      "en": "Quesadilla",
      "zh": "墨西哥奶酪饼",
      "nl": "Quesadilla",
      "local": "quesadilla"
    },
    "category": "bread",
    "cookingMethods": [
      "fried",
      "assembled"
    ],
    "shortDescription": {
      "en": "Toasted tortilla filled with melted cheese, sometimes meat or vegetables; mild, melty, and easy to share.",
      "zh": "墨西哥奶酪饼：烤煎玉米饼夹融化奶酪，可加肉或蔬菜，口味温和，奶酪拉丝明显。",
      "nl": "Quesadilla: getoaste tortilla met gesmolten kaas, soms vlees of groente; mild, smeuig en deelbaar."
    },
    "cookingProfile": {
      "en": "fried and assembled to order; expect crisp tortilla and melted cheese pull.",
      "zh": "通常煎炸并现拌或组合后上桌，点餐时可预期：烤煎玉米饼夹融化奶酪，可加肉或蔬菜，口味温和，奶酪拉丝明显。",
      "nl": "Meestal gebakken in vet en samengesteld; verwacht vooral: getoaste tortilla met gesmolten kaas, soms vlees of groente; mild, smeuig en deelbaar."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "first-timer-friendly",
        "cheese-lover"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "tortilla",
        45,
        "folded tortilla"
      ],
      [
        "cheese",
        35,
        "melted filling"
      ],
      [
        "chicken",
        10,
        "optional protein"
      ],
      [
        "salsa",
        5,
        "dip",
        "seasoning"
      ],
      [
        "avocado",
        3,
        "side"
      ],
      [
        "chili",
        2,
        "optional heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "toasted tortilla",
      "melted cheese",
      "salsa"
    ],
    "basicTaste": [
      "savory",
      "cheesy",
      "mild"
    ],
    "textureProfile": [
      "crisp tortilla",
      "melted cheese pull"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "first-timer-friendly",
      "cheese-lover"
    ],
    "avoidIfTags": [
      "avoids-dairy",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Order if you want a melty cheese-filled tortilla; avoid if dairy or gluten is a problem.",
      "zh": "想要烤煎玉米饼夹融化奶酪，可加肉或蔬菜，口味温和，奶酪拉丝明显时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je getoaste tortilla met gesmolten kaas, soms vlees of groente; mild, smeuig en deelbaar wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "enchiladas",
    "metadataCode": "121003",
    "cuisineId": "mexican",
    "names": {
      "en": "Enchiladas",
      "zh": "墨西哥酱焗卷饼",
      "nl": "Enchiladas",
      "local": "enchiladas"
    },
    "category": "main",
    "cookingMethods": [
      "baked",
      "sauce-tossed"
    ],
    "shortDescription": {
      "en": "Rolled tortillas filled with meat, cheese, or beans and baked under chili sauce; soft, saucy, and filling.",
      "zh": "墨西哥酱焗卷饼：卷起的玉米饼填肉、奶酪或豆类，再淋辣椒酱烘烤，柔软多酱且饱腹。",
      "nl": "Enchiladas: opgerolde tortilla's met vlees, kaas of bonen, gebakken onder chilisaus; zacht, sauzig en vullend."
    },
    "cookingProfile": {
      "en": "baked and coated in sauce; expect soft sauced tortillas, melted cheese and tender filling.",
      "zh": "通常烘烤并裹酱后上桌，点餐时可预期：卷起的玉米饼填肉、奶酪或豆类，再淋辣椒酱烘烤，柔软多酱且饱腹。",
      "nl": "Meestal gebakken in de oven en met saus omhuld; verwacht vooral: opgerolde tortilla's met vlees, kaas of bonen, gebakken onder chilisaus; zacht, sauzig en vullend."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "comfort-food",
        "saucy"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "tortilla",
        35,
        "rolled tortillas"
      ],
      [
        "chicken",
        25,
        "common filling"
      ],
      [
        "salsa",
        15,
        "chili tomato sauce",
        "seasoning"
      ],
      [
        "cheese",
        15,
        "melted topping"
      ],
      [
        "black-beans",
        5,
        "side or filling"
      ],
      [
        "chili",
        5,
        "heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "chili sauce",
      "corn tortilla",
      "melted cheese"
    ],
    "basicTaste": [
      "savory",
      "saucy",
      "spicy"
    ],
    "textureProfile": [
      "soft sauced tortillas",
      "melted cheese",
      "tender filling"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-gluten",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food",
      "saucy"
    ],
    "avoidIfTags": [
      "wants-crisp-tacos",
      "avoids-dairy"
    ],
    "orderVerdict": {
      "en": "Order if you want soft sauced tortilla rolls; avoid if you want crisp tacos or avoid cheese.",
      "zh": "想要卷起的玉米饼填肉、奶酪或豆类，再淋辣椒酱烘烤，柔软多酱且饱腹时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je opgerolde tortilla's met vlees, kaas of bonen, gebakken onder chilisaus; zacht, sauzig en vullend wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 2,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "burrito",
    "metadataCode": "121004",
    "cuisineId": "mexican",
    "names": {
      "en": "Burrito",
      "zh": "墨西哥大卷饼",
      "nl": "Burrito",
      "local": "burrito"
    },
    "category": "main",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Large tortilla wrap packed with rice, beans, meat or vegetables, salsa, and often cheese; dense and filling.",
      "zh": "墨西哥大卷饼：大号卷饼包米饭、豆类、肉或蔬菜、莎莎和常见奶酪，分量密实。",
      "nl": "Burrito: grote tortilla gevuld met rijst, bonen, vlees of groente, salsa en vaak kaas; stevig en vullend."
    },
    "cookingProfile": {
      "en": "assembled to order; expect soft wrap, dense filling and creamy beans.",
      "zh": "通常现拌或组合后上桌，点餐时可预期：大号卷饼包米饭、豆类、肉或蔬菜、莎莎和常见奶酪，分量密实。",
      "nl": "Meestal samengesteld; verwacht vooral: grote tortilla gevuld met rijst, bonen, vlees of groente, salsa en vaak kaas; stevig en vullend."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "internationally-known",
        "filling",
        "portable"
      ],
      "description": {
        "en": "A widely recognized restaurant menu item; the verified card keeps the expected format and common risks concrete.",
        "zh": "国际餐厅菜单中常见的菜品；已审核卡片明确其常见形态和风险。",
        "nl": "Een breed herkenbaar restaurantgerecht; de geverifieerde kaart houdt vorm en risico's concreet."
      }
    },
    "composition": [
      [
        "tortilla",
        35,
        "large wrap"
      ],
      [
        "steamed-rice",
        20,
        "rice filling"
      ],
      [
        "black-beans",
        15,
        "bean filling"
      ],
      [
        "beef",
        15,
        "common protein"
      ],
      [
        "cheese",
        8,
        "richness"
      ],
      [
        "salsa",
        5,
        "sauce",
        "seasoning"
      ],
      [
        "chili",
        2,
        "optional heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "large tortilla",
      "beans and rice",
      "salsa"
    ],
    "basicTaste": [
      "savory",
      "hearty",
      "mildly spicy"
    ],
    "textureProfile": [
      "soft wrap",
      "dense filling",
      "creamy beans"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "filling",
      "portable"
    ],
    "avoidIfTags": [
      "wants-light-food",
      "avoids-gluten"
    ],
    "orderVerdict": {
      "en": "Order if you want a dense all-in-one wrap; avoid if you want a light snack or gluten-free option.",
      "zh": "想要大号卷饼包米饭、豆类、肉或蔬菜、莎莎和常见奶酪，分量密实时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je grote tortilla gevuld met rijst, bonen, vlees of groente, salsa en vaak kaas; stevig en vullend wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "guacamole",
    "metadataCode": "121005",
    "cuisineId": "mexican",
    "names": {
      "en": "Guacamole",
      "zh": "鳄梨酱",
      "nl": "Guacamole",
      "local": "guacamole"
    },
    "category": "starter",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Mashed avocado dip with lime, onion, cilantro, tomato, and chili; creamy and fresh.",
      "zh": "鳄梨酱：牛油果泥蘸酱，加入青柠、洋葱、香菜、番茄和辣椒，绵密清爽。",
      "nl": "Guacamole: geprakte avocadodip met limoen, ui, koriander, tomaat en chili; romig en fris."
    },
    "cookingProfile": {
      "en": "assembled to order; expect chunky creamy dip and fresh dice.",
      "zh": "通常现拌或组合后上桌，点餐时可预期：牛油果泥蘸酱，加入青柠、洋葱、香菜、番茄和辣椒，绵密清爽。",
      "nl": "Meestal samengesteld; verwacht vooral: geprakte avocadodip met limoen, ui, koriander, tomaat en chili; romig en fris."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "dip",
        "vegan-friendly"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "avocado",
        65,
        "mashed base"
      ],
      [
        "lime",
        12,
        "acid"
      ],
      [
        "tomato",
        8,
        "fresh dice"
      ],
      [
        "onion",
        6,
        "sharpness"
      ],
      [
        "coriander",
        4,
        "herb",
        "seasoning"
      ],
      [
        "chili",
        3,
        "optional heat",
        "seasoning"
      ],
      [
        "sea-salt",
        2,
        "seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "avocado",
      "lime",
      "cilantro"
    ],
    "basicTaste": [
      "creamy",
      "fresh",
      "tangy"
    ],
    "textureProfile": [
      "chunky creamy dip",
      "fresh dice"
    ],
    "riskFlags": [
      "can-be-spicy"
    ],
    "dietaryFlags": [
      "vegan"
    ],
    "goodForTags": [
      "dip",
      "vegan-friendly"
    ],
    "avoidIfTags": [
      "dislikes-avocado",
      "dislikes-cilantro"
    ],
    "orderVerdict": {
      "en": "Order if you want a creamy fresh avocado dip; avoid if avocado or cilantro is not appealing.",
      "zh": "想要牛油果泥蘸酱，加入青柠、洋葱、香菜、番茄和辣椒，绵密清爽时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je geprakte avocadodip met limoen, ui, koriander, tomaat en chili; romig en fris wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "nachos",
    "metadataCode": "121006",
    "cuisineId": "mexican",
    "names": {
      "en": "Nachos",
      "zh": "玉米片配料盘",
      "nl": "Nachos",
      "local": "nachos"
    },
    "category": "starter",
    "cookingMethods": [
      "assembled",
      "baked"
    ],
    "shortDescription": {
      "en": "Tortilla chips topped with melted cheese, salsa, beans, jalapenos, sour cream, or guacamole; best shared.",
      "zh": "玉米片配料盘：玉米片铺奶酪、莎莎、豆类、辣椒、酸奶油或牛油果酱，适合分享。",
      "nl": "Nachos: tortillachips met gesmolten kaas, salsa, bonen, jalapeno, zure room of guacamole; ideaal om te delen."
    },
    "cookingProfile": {
      "en": "Usually assembled and briefly heated, so the contrast is crunchy chips, melted cheese, and cool creamy toppings.",
      "zh": "通常组合后短暂加热，重点是脆玉米片、融化奶酪和清凉绵滑配料的对比。",
      "nl": "Meestal samengesteld en kort verwarmd: krokante chips, gesmolten kaas en koele romige toppings."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "internationally-known",
        "shareable",
        "snack"
      ],
      "description": {
        "en": "A widely recognized restaurant menu item; the verified card keeps the expected format and common risks concrete.",
        "zh": "国际餐厅菜单中常见的菜品；已审核卡片明确其常见形态和风险。",
        "nl": "Een breed herkenbaar restaurantgerecht; de geverifieerde kaart houdt vorm en risico's concreet."
      }
    },
    "composition": [
      [
        "corn-tortilla-chips",
        40,
        "corn chips"
      ],
      [
        "cheese",
        20,
        "melted topping"
      ],
      [
        "black-beans",
        10,
        "topping"
      ],
      [
        "salsa",
        10,
        "sauce",
        "seasoning"
      ],
      [
        "avocado",
        8,
        "guacamole"
      ],
      [
        "chili",
        5,
        "jalapeno heat",
        "seasoning"
      ],
      [
        "sour-cream",
        7,
        "cool topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "corn chips",
      "melted cheese",
      "salsa"
    ],
    "basicTaste": [
      "salty",
      "cheesy",
      "spicy"
    ],
    "textureProfile": [
      "crunchy chips",
      "melty cheese",
      "creamy toppings"
    ],
    "riskFlags": [
      "contains-dairy",
      "can-be-spicy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "shareable",
      "snack"
    ],
    "avoidIfTags": [
      "wants-main-course",
      "avoids-dairy"
    ],
    "orderVerdict": {
      "en": "Order if you want a crunchy shared snack with cheese and salsa; avoid if you need a neat main course or avoid dairy.",
      "zh": "想要奶酪莎莎玉米片分享小吃时适合；如果要整洁主菜或避开乳制品就不适合。",
      "nl": "Neem dit als gedeelde snack met kaas en salsa; minder geschikt als nette hoofdmaaltijd of bij zuivel vermijden."
    },
    "spiceLevel": 2,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "chiles-rellenos",
    "metadataCode": "121007",
    "cuisineId": "mexican",
    "names": {
      "en": "Chiles Rellenos",
      "zh": "酿辣椒",
      "nl": "Chiles rellenos",
      "local": "chiles rellenos"
    },
    "category": "vegetarian-main",
    "cookingMethods": [
      "fried",
      "simmered"
    ],
    "shortDescription": {
      "en": "Stuffed poblano-style chiles, often cheese-filled, battered, fried, and served in tomato sauce.",
      "zh": "酿辣椒：填馅辣椒常包奶酪，裹蛋糊煎炸后配番茄酱，椒香和奶酪感明显。",
      "nl": "Chiles rellenos: gevulde poblano-achtige pepers, vaak met kaas, in beslag gebakken en geserveerd in tomatensaus."
    },
    "cookingProfile": {
      "en": "fried and simmered; expect soft pepper, melty filling and light batter.",
      "zh": "通常煎炸并慢煮后上桌，点餐时可预期：填馅辣椒常包奶酪，裹蛋糊煎炸后配番茄酱，椒香和奶酪感明显。",
      "nl": "Meestal gebakken in vet en zacht gestoofd; verwacht vooral: gevulde poblano-achtige pepers, vaak met kaas, in beslag gebakken en geserveerd in tomatensaus."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "vegetarian-friendly",
        "comfort-food"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "bell-pepper",
        35,
        "stuffed chile"
      ],
      [
        "cheese",
        25,
        "melty filling"
      ],
      [
        "egg",
        15,
        "batter"
      ],
      [
        "tomato-sauce",
        15,
        "sauce",
        "seasoning"
      ],
      [
        "wheat-flour",
        5,
        "coating"
      ],
      [
        "chili",
        5,
        "pepper heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "roasted chile",
      "melted cheese",
      "tomato sauce"
    ],
    "basicTaste": [
      "savory",
      "mildly spicy",
      "cheesy"
    ],
    "textureProfile": [
      "soft pepper",
      "melty filling",
      "light batter"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-egg",
      "contains-gluten",
      "can-be-spicy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "vegetarian-friendly",
      "comfort-food"
    ],
    "avoidIfTags": [
      "avoids-dairy",
      "avoids-peppers"
    ],
    "orderVerdict": {
      "en": "Order if you want a saucy stuffed pepper with melted cheese; avoid if pepper flavor or dairy filling is not wanted.",
      "zh": "想要填馅辣椒常包奶酪，裹蛋糊煎炸后配番茄酱，椒香和奶酪感明显时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je gevulde poblano-achtige pepers, vaak met kaas, in beslag gebakken en geserveerd in tomatensaus wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 2,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "pozole",
    "metadataCode": "121008",
    "cuisineId": "mexican",
    "names": {
      "en": "Pozole",
      "zh": "墨西哥玉米肉汤",
      "nl": "Pozole",
      "local": "pozole"
    },
    "category": "soup",
    "cookingMethods": [
      "simmered",
      "assembled"
    ],
    "shortDescription": {
      "en": "Mexican hominy corn soup with pork or chicken, chile broth, lime, cabbage, and radish-style garnishes.",
      "zh": "墨西哥玉米肉汤：墨西哥玉米粒汤，常配猪肉或鸡肉、辣椒汤底、青柠和卷心菜，温暖饱足。",
      "nl": "Pozole: Mexicaanse hominy-maissoep met varken of kip, chilibouillon, limoen en koolachtige garnituren."
    },
    "cookingProfile": {
      "en": "simmered and assembled to order; expect chewy hominy, tender pork and brothy.",
      "zh": "通常慢煮并现拌或组合后上桌，点餐时可预期：墨西哥玉米粒汤，常配猪肉或鸡肉、辣椒汤底、青柠和卷心菜，温暖饱足。",
      "nl": "Meestal zacht gestoofd en samengesteld; verwacht vooral: Mexicaanse hominy-maissoep met varken of kip, chilibouillon, limoen en koolachtige garnituren."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "soup",
        "comfort-food"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "pork",
        30,
        "meat"
      ],
      [
        "corn",
        30,
        "hominy base"
      ],
      [
        "broth",
        25,
        "soup"
      ],
      [
        "cabbage",
        5,
        "fresh topping"
      ],
      [
        "lime",
        4,
        "finish"
      ],
      [
        "chili",
        4,
        "red or green sauce",
        "seasoning"
      ],
      [
        "oregano",
        2,
        "herbal finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "hominy corn",
      "pork broth",
      "chile oregano"
    ],
    "basicTaste": [
      "savory",
      "corny",
      "spiced"
    ],
    "textureProfile": [
      "chewy hominy",
      "tender pork",
      "brothy"
    ],
    "riskFlags": [
      "contains-pork",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "soup",
      "comfort-food"
    ],
    "avoidIfTags": [
      "avoids-pork",
      "wants-light-salad"
    ],
    "orderVerdict": {
      "en": "Order if you want a hearty corn-and-meat soup; avoid if pork broth or chile heat is unwanted.",
      "zh": "想要墨西哥玉米粒汤，常配猪肉或鸡肉、辣椒汤底、青柠和卷心菜，温暖饱足时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je Mexicaanse hominy-maissoep met varken of kip, chilibouillon, limoen en koolachtige garnituren wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 2,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "tamales",
    "metadataCode": "121009",
    "cuisineId": "mexican",
    "names": {
      "en": "Tamales",
      "zh": "墨西哥玉米粽",
      "nl": "Tamales",
      "local": "tamales"
    },
    "category": "main",
    "cookingMethods": [
      "steamed"
    ],
    "shortDescription": {
      "en": "Steamed corn masa parcels filled with meat, sauce, cheese, or vegetables; soft, dense, and filling.",
      "zh": "墨西哥玉米粽：玉米面团包肉、酱、奶酪或蔬菜后蒸熟，质地柔软密实，很有饱腹感。",
      "nl": "Tamales: gestoomde maismasa-pakketjes met vlees, saus, kaas of groente; zacht, compact en vullend."
    },
    "cookingProfile": {
      "en": "steamed; expect soft steamed masa and moist filling.",
      "zh": "通常蒸制后上桌，点餐时可预期：玉米面团包肉、酱、奶酪或蔬菜后蒸熟，质地柔软密实，很有饱腹感。",
      "nl": "Meestal gestoomd; verwacht vooral: gestoomde maismasa-pakketjes met vlees, saus, kaas of groente; zacht, compact en vullend."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "comfort-food",
        "regional-dish"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "corn",
        45,
        "masa dough"
      ],
      [
        "pork",
        25,
        "common filling"
      ],
      [
        "salsa",
        12,
        "sauce or filling",
        "seasoning"
      ],
      [
        "chicken",
        8,
        "alternate filling"
      ],
      [
        "chili",
        5,
        "heat",
        "seasoning"
      ],
      [
        "cheese",
        5,
        "optional filling"
      ]
    ],
    "distinctiveFlavorSources": [
      "corn masa",
      "saucy filling",
      "chile"
    ],
    "basicTaste": [
      "savory",
      "corny",
      "spiced"
    ],
    "textureProfile": [
      "soft steamed masa",
      "moist filling"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-dairy",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food",
      "regional-dish"
    ],
    "avoidIfTags": [
      "wants-crisp-food",
      "avoids-pork"
    ],
    "orderVerdict": {
      "en": "Order if you want soft steamed corn parcels with savory filling; avoid if you want crisp texture or avoid pork variations.",
      "zh": "想要玉米面团包肉、酱、奶酪或蔬菜后蒸熟，质地柔软密实，很有饱腹感时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je gestoomde maismasa-pakketjes met vlees, saus, kaas of groente; zacht, compact en vullend wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 2,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "mole-poblano",
    "metadataCode": "121010",
    "cuisineId": "mexican",
    "names": {
      "en": "Mole Poblano",
      "zh": "摩雷鸡肉",
      "nl": "Mole poblano",
      "local": "mole poblano"
    },
    "category": "meat",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Chicken or turkey with dark mole sauce made from dried chiles, spices, nuts, seeds, and a hint of cocoa.",
      "zh": "摩雷鸡肉：鸡肉或火鸡配深色摩雷酱，含干辣椒、香料、坚果、籽类和少量可可，味道复杂厚重。",
      "nl": "Mole poblano: kip of kalkoen met donkere molesaus van gedroogde chili, specerijen, noten, zaden en een hint cacao."
    },
    "cookingProfile": {
      "en": "The poultry is served with a thick simmered sauce, so the plate feels rich, earthy, and sauce-led.",
      "zh": "鸡肉或火鸡配浓稠慢煮摩雷酱上桌，整体厚重、泥土香明显，重点在酱汁。",
      "nl": "Het gevogelte komt met dikke gestoofde saus; rijk, aards en duidelijk sausgericht."
    },
    "cuisineRole": {
      "level": "signature",
      "tags": [
        "signature",
        "signature-dish",
        "sauce-lover"
      ],
      "description": {
        "en": "A signature menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的代表性菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een kenmerkend menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "chicken",
        35,
        "served protein"
      ],
      [
        "mole",
        45,
        "complex sauce",
        "seasoning"
      ],
      [
        "chili",
        8,
        "dried chile base",
        "seasoning"
      ],
      [
        "cocoa",
        7,
        "bitter depth",
        "seasoning"
      ],
      [
        "almonds",
        5,
        "nut body"
      ],
    ],
    "distinctiveFlavorSources": [
      "dried chile",
      "cocoa",
      "nuts and sesame"
    ],
    "basicTaste": [
      "earthy",
      "savory",
      "mildly sweet"
    ],
    "textureProfile": [
      "tender chicken",
      "thick smooth sauce"
    ],
    "riskFlags": [
      "contains-tree-nut",
      "contains-sesame",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "signature-dish",
      "sauce-lover"
    ],
    "avoidIfTags": [
      "nut-allergy",
      "sesame-allergy",
      "dislikes-earthy-sauces"
    ],
    "orderVerdict": {
      "en": "Order if you want a complex earthy sauce rather than a simple salsa dish; avoid if nuts, sesame, or bittersweet earthy sauces are a concern.",
      "zh": "想吃复杂、厚重、带坚果和可可苦香的酱汁时适合；坚果、芝麻过敏或不喜欢微苦泥土香就谨慎。",
      "nl": "Neem dit voor een complexe aardse saus; vermijd bij noten, sesam of afkeer van bitterzoete aardse sauzen."
    },
    "spiceLevel": 2,
    "weightLevel": 4,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "ceviche-mexican",
    "metadataCode": "121011",
    "cuisineId": "mexican",
    "names": {
      "en": "Ceviche",
      "zh": "墨西哥酸橘汁腌鱼",
      "nl": "Ceviche",
      "local": "ceviche"
    },
    "category": "seafood",
    "cookingMethods": [
      "raw",
      "chilled"
    ],
    "servingTemperature": "cold-or-cool",
    "rawnessLevel": "raw-or-cured",
    "shortDescription": {
      "en": "Cold citrus-cured seafood with lime, tomato, onion, cilantro, and chili; fresh and sharp, not cooked by heat.",
      "zh": "墨西哥酸橘汁腌鱼：冷食青柠腌海鲜，配番茄、洋葱、香菜和辣椒，酸爽清新，不经过加热烹熟。",
      "nl": "Ceviche: koude citrusgegaarde zeevruchten met limoen, tomaat, ui, koriander en chili; fris en scherp, niet verhit."
    },
    "cookingProfile": {
      "en": "served raw or citrus-cured and served cold; expect firm citrus-cured fish, crisp vegetables and cold serving.",
      "zh": "通常生食或酸汁腌制并冷食后上桌，点餐时可预期：冷食青柠腌海鲜，配番茄、洋葱、香菜和辣椒，酸爽清新，不经过加热烹熟。",
      "nl": "Meestal rauw of citrusgegaard geserveerd en koud geserveerd; verwacht vooral: koude citrusgegaarde zeevruchten met limoen, tomaat, ui, koriander en chili; fris en scherp, niet verhit."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "coastal",
        "seafood",
        "refreshing"
      ],
      "description": {
        "en": "A coastal seafood reference; the verified card highlights rawness, acidity, and seafood risks.",
        "zh": "沿海海鲜类参考菜；已审核卡片强调生食、酸度和海鲜风险。",
        "nl": "Een kust- en zeevruchtenreferentie; de geverifieerde kaart benadrukt rauwheid, zuur en zeevruchtenrisico's."
      }
    },
    "composition": [
      [
        "raw-white-fish",
        40,
        "citrus-cured seafood"
      ],
      [
        "lime",
        20,
        "citrus cure"
      ],
      [
        "tomato",
        12,
        "fresh mix"
      ],
      [
        "onion",
        8,
        "sharpness"
      ],
      [
        "cucumber",
        8,
        "crunch"
      ],
      [
        "coriander",
        5,
        "fresh herb",
        "seasoning"
      ],
      [
        "chili",
        5,
        "heat",
        "seasoning"
      ],
      [
        "avocado",
        2,
        "optional creaminess"
      ]
    ],
    "distinctiveFlavorSources": [
      "lime",
      "fresh fish",
      "cilantro chili"
    ],
    "basicTaste": [
      "sour",
      "fresh",
      "spicy"
    ],
    "textureProfile": [
      "firm citrus-cured fish",
      "crisp vegetables",
      "cold serving"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-raw-fish",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "seafood",
      "refreshing"
    ],
    "avoidIfTags": [
      "pregnant-or-raw-fish-avoidance",
      "fish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if you want a cold bright seafood dish with raw-cured texture; avoid if raw fish risk or strong lime acidity is a concern.",
      "zh": "想要冷食青柠腌海鲜，配番茄、洋葱、香菜和辣椒，酸爽清新，不经过加热烹熟时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je koude citrusgegaarde zeevruchten met limoen, tomaat, ui, koriander en chili; fris en scherp, niet verhit wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 2,
    "weightLevel": 2,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "flan",
    "metadataCode": "121012",
    "cuisineId": "mexican",
    "names": {
      "en": "Flan",
      "zh": "焦糖布丁",
      "nl": "Flan",
      "local": "flan"
    },
    "category": "dessert",
    "cookingMethods": [
      "set",
      "chilled"
    ],
    "shortDescription": {
      "en": "Chilled caramel custard made with egg and dairy; smooth, sweet, and soft-set.",
      "zh": "焦糖布丁：冷食焦糖蛋奶布丁，质地顺滑凝固，甜度中高，蛋奶香明显。",
      "nl": "Flan: koude karamelcustard van ei en zuivel; glad, zoet en zacht opgesteven."
    },
    "cookingProfile": {
      "en": "set into a custard-like texture and served cold; expect smooth set custard and soft caramel sauce.",
      "zh": "通常凝固定型并冷食后上桌，点餐时可预期：冷食焦糖蛋奶布丁，质地顺滑凝固，甜度中高，蛋奶香明显。",
      "nl": "Meestal opgesteven en koud geserveerd; verwacht vooral: koude karamelcustard van ei en zuivel; glad, zoet en zacht opgesteven."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "dessert",
        "mild"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "egg",
        35,
        "custard set"
      ],
      [
        "cream",
        25,
        "custard dairy"
      ],
      [
        "sugar",
        20,
        "custard sweetness"
      ],
      [
        "fruit-sauce-or-caramel",
        15,
        "caramel sauce"
      ],
      [
        "vanilla",
        5,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "caramel",
      "vanilla custard",
      "egg"
    ],
    "basicTaste": [
      "sweet",
      "creamy",
      "caramel"
    ],
    "textureProfile": [
      "smooth set custard",
      "soft caramel sauce"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert",
      "mild"
    ],
    "avoidIfTags": [
      "avoids-egg",
      "dislikes-custard"
    ],
    "orderVerdict": {
      "en": "Order if you want a smooth caramel custard dessert; avoid if egg-dairy custard is not appealing.",
      "zh": "想要冷食焦糖蛋奶布丁，质地顺滑凝固，甜度中高，蛋奶香明显时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je koude karamelcustard van ei en zuivel; glad, zoet en zacht opgesteven wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "burger",
    "metadataCode": "122001",
    "cuisineId": "american",
    "names": {
      "en": "Burger",
      "zh": "汉堡",
      "nl": "Burger",
      "local": "burger"
    },
    "category": "sandwich",
    "cookingMethods": [
      "grilled",
      "assembled"
    ],
    "shortDescription": {
      "en": "Grilled beef patty in a bun with sauce, pickles, vegetables, and often cheese; familiar but heavy.",
      "zh": "汉堡：牛肉饼夹面包，配酱、酸黄瓜、蔬菜和常见奶酪，熟悉但偏厚重。",
      "nl": "Burger: gegrilde rundvleesburger in broodje met saus, pickles, groente en vaak kaas; vertrouwd maar stevig."
    },
    "cookingProfile": {
      "en": "grilled over high heat and assembled to order; expect juicy patty, soft bun and crisp pickles.",
      "zh": "通常高温烤制并现拌或组合后上桌，点餐时可预期：牛肉饼夹面包，配酱、酸黄瓜、蔬菜和常见奶酪，熟悉但偏厚重。",
      "nl": "Meestal op hoge hitte gegrild en samengesteld; verwacht vooral: gegrilde rundvleesburger in broodje met saus, pickles, groente en vaak kaas; vertrouwd maar stevig."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common",
        "safe-choice",
        "filling"
      ],
      "description": {
        "en": "A common menu reference; the verified card keeps the format, texture, and common risks concrete.",
        "zh": "常见菜单项；已审核卡片明确其形态、口感和常见风险。",
        "nl": "Een vaak voorkomend menu-item; de geverifieerde kaart houdt vorm, textuur en risico's concreet."
      }
    },
    "composition": [
      [
        "beef",
        35,
        "patty"
      ],
      [
        "brioche-bun",
        25,
        "bun"
      ],
      [
        "cheese",
        12,
        "optional cheese"
      ],
      [
        "mixed-vegetables",
        10,
        "lettuce tomato onion"
      ],
      [
        "pickles",
        6,
        "pickle"
      ],
      [
        "mustard",
        4,
        "condiment",
        "seasoning"
      ],
      [
        "mayonnaise",
        4,
        "sauce"
      ],
      [
        "black-pepper",
        4,
        "seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "grilled beef",
      "bun",
      "pickles and sauces"
    ],
    "basicTaste": [
      "savory",
      "rich",
      "tangy"
    ],
    "textureProfile": [
      "juicy patty",
      "soft bun",
      "crisp pickles"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "contains-egg"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "safe-choice",
      "filling"
    ],
    "avoidIfTags": [
      "avoids-red-meat",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Order if you want a familiar filling sandwich; avoid if red meat, gluten, or heavy food is not wanted.",
      "zh": "想要牛肉饼夹面包，配酱、酸黄瓜、蔬菜和常见奶酪，熟悉但偏厚重时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je gegrilde rundvleesburger in broodje met saus, pickles, groente en vaak kaas; vertrouwd maar stevig wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "bbq-ribs",
    "metadataCode": "122002",
    "cuisineId": "american",
    "names": {
      "en": "BBQ Ribs",
      "zh": "美式烤肋排",
      "nl": "BBQ ribs",
      "local": "bbq ribs"
    },
    "category": "meat",
    "cookingMethods": [
      "grilled",
      "braised"
    ],
    "shortDescription": {
      "en": "Pork ribs cooked until tender and coated in sweet-smoky barbecue sauce; sticky and hands-on.",
      "zh": "美式烤肋排：猪肋排慢烤或慢炖后裹甜烟熏烧烤酱，软嫩黏手，吃法较豪放。",
      "nl": "BBQ ribs: varkensribben mals gegaard en bedekt met zoet-rokerige barbecuesaus; kleverig en handmatig eten."
    },
    "cookingProfile": {
      "en": "grilled over high heat and slow-braised; expect tender meat, sticky glaze and charred edges.",
      "zh": "通常高温烤制并慢炖后上桌，点餐时可预期：猪肋排慢烤或慢炖后裹甜烟熏烧烤酱，软嫩黏手，吃法较豪放。",
      "nl": "Meestal op hoge hitte gegrild en langzaam gestoofd; verwacht vooral: varkensribben mals gegaard en bedekt met zoet-rokerige barbecuesaus; kleverig en handmatig eten."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "meat-lover",
        "shareable"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "pork",
        55,
        "ribs"
      ],
      [
        "tomato-sauce",
        15,
        "barbecue sauce base",
        "seasoning"
      ],
      [
        "paprika",
        8,
        "smoke spice",
        "seasoning"
      ],
      [
        "smoked-paprika",
        7,
        "smoky aroma",
        "seasoning"
      ],
      [
        "sugar",
        7,
        "sweet glaze"
      ],
      [
        "black-pepper",
        5,
        "pepper",
        "seasoning"
      ],
      [
        "mustard",
        3,
        "tang",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "smoky barbecue",
      "sweet glaze",
      "pork ribs"
    ],
    "basicTaste": [
      "sweet",
      "smoky",
      "savory"
    ],
    "textureProfile": [
      "tender meat",
      "sticky glaze",
      "charred edges"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "meat-lover",
      "shareable"
    ],
    "avoidIfTags": [
      "avoids-pork",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Order if you want sweet-smoky tender pork ribs; avoid if pork or sticky hands-on eating is a problem.",
      "zh": "想要猪肋排慢烤或慢炖后裹甜烟熏烧烤酱，软嫩黏手，吃法较豪放时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je varkensribben mals gegaard en bedekt met zoet-rokerige barbecuesaus; kleverig en handmatig eten wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "mac-and-cheese",
    "metadataCode": "122003",
    "cuisineId": "american",
    "names": {
      "en": "Mac and Cheese",
      "zh": "奶酪通心粉",
      "nl": "Mac and cheese",
      "local": "mac and cheese"
    },
    "category": "pasta",
    "cookingMethods": [
      "baked",
      "sauce-tossed"
    ],
    "shortDescription": {
      "en": "Pasta in thick cheese sauce, sometimes baked with breadcrumbs; very creamy, rich, and familiar.",
      "zh": "奶酪通心粉：通心粉裹浓厚奶酪酱，有时烤上面包糠，奶香重、质地软糯。",
      "nl": "Mac and cheese: pasta in dikke kaassaus, soms gebakken met paneermeel; heel romig, rijk en vertrouwd."
    },
    "cookingProfile": {
      "en": "baked and coated in sauce; expect soft pasta, thick cheese sauce and optional crisp top.",
      "zh": "通常烘烤并裹酱后上桌，点餐时可预期：通心粉裹浓厚奶酪酱，有时烤上面包糠，奶香重、质地软糯。",
      "nl": "Meestal gebakken in de oven en met saus omhuld; verwacht vooral: pasta in dikke kaassaus, soms gebakken met paneermeel; heel romig, rijk en vertrouwd."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "comfort-food",
        "comfort-food",
        "cheese-lover"
      ],
      "description": {
        "en": "A comfort-food style menu reference; the verified card highlights richness, texture, and common allergens.",
        "zh": "偏安慰食物风格的菜单项；已审核卡片强调厚重度、口感和过敏风险。",
        "nl": "Een comfortfoodachtig menu-item; de geverifieerde kaart benadrukt rijkdom, textuur en allergenen."
      }
    },
    "composition": [
      [
        "pasta",
        45,
        "macaroni"
      ],
      [
        "cheddar",
        30,
        "cheese sauce"
      ],
      [
        "cream",
        10,
        "sauce body"
      ],
      [
        "butter",
        6,
        "richness"
      ],
      [
        "panko-breadcrumbs",
        5,
        "optional topping"
      ],
      [
        "mustard",
        2,
        "tang",
        "seasoning"
      ],
      [
        "black-pepper",
        2,
        "seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "cheddar",
      "butter",
      "baked topping"
    ],
    "basicTaste": [
      "cheesy",
      "creamy",
      "savory"
    ],
    "textureProfile": [
      "soft pasta",
      "thick cheese sauce",
      "optional crisp top"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "comfort-food",
      "cheese-lover"
    ],
    "avoidIfTags": [
      "avoids-dairy",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Order if you want a rich cheesy comfort dish; avoid if dairy-heavy pasta feels too much.",
      "zh": "想要通心粉裹浓厚奶酪酱，有时烤上面包糠，奶香重、质地软糯时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je pasta in dikke kaassaus, soms gebakken met paneermeel; heel romig, rijk en vertrouwd wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "fried-chicken-american",
    "metadataCode": "122004",
    "cuisineId": "american",
    "names": {
      "en": "Fried Chicken",
      "zh": "美式炸鸡",
      "nl": "Fried chicken",
      "local": "fried chicken"
    },
    "category": "meat",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "Seasoned flour-coated chicken fried until crisp outside and juicy inside; heavier than grilled chicken.",
      "zh": "美式炸鸡：裹调味面粉炸鸡，外壳酥脆、里面多汁，比烤鸡更厚重。",
      "nl": "Fried chicken: kip met gekruide bloemkorst gefrituurd tot krokant buiten en sappig binnen; zwaarder dan gegrilde kip."
    },
    "cookingProfile": {
      "en": "deep-fried; expect crisp crust and juicy meat.",
      "zh": "通常油炸后上桌，点餐时可预期：裹调味面粉炸鸡，外壳酥脆、里面多汁，比烤鸡更厚重。",
      "nl": "Meestal gefrituurd; verwacht vooral: kip met gekruide bloemkorst gefrituurd tot krokant buiten en sappig binnen; zwaarder dan gegrilde kip."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "fried-chicken",
        "comfort-food"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "chicken",
        60,
        "bone-in or pieces"
      ],
      [
        "wheat-flour",
        20,
        "seasoned crust"
      ],
      [
        "egg",
        5,
        "batter binder"
      ],
      [
        "paprika",
        5,
        "seasoning",
        "seasoning"
      ],
      [
        "black-pepper",
        5,
        "pepper",
        "seasoning"
      ],
      [
        "garlic",
        3,
        "aroma",
        "seasoning"
      ],
      [
        "sea-salt",
        2,
        "seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "seasoned crust",
      "juicy chicken",
      "pepper"
    ],
    "basicTaste": [
      "savory",
      "fried",
      "peppery"
    ],
    "textureProfile": [
      "crisp crust",
      "juicy meat"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "fried-chicken",
      "comfort-food"
    ],
    "avoidIfTags": [
      "avoids-fried-food",
      "avoids-gluten"
    ],
    "orderVerdict": {
      "en": "Order if you want crisp juicy fried chicken; avoid if fried food or wheat coating is not wanted.",
      "zh": "想要裹调味面粉炸鸡，外壳酥脆、里面多汁，比烤鸡更厚重时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je kip met gekruide bloemkorst gefrituurd tot krokant buiten en sappig binnen; zwaarder dan gegrilde kip wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "caesar-salad",
    "metadataCode": "122005",
    "cuisineId": "american",
    "names": {
      "en": "Caesar Salad",
      "zh": "凯撒沙拉",
      "nl": "Caesarsalade",
      "local": "Caesar salad"
    },
    "category": "salad",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Romaine-style salad with creamy anchovy-garlic dressing, parmesan, and croutons; not a light vinaigrette salad.",
      "zh": "凯撒沙拉：凯撒沙拉配奶油质地鳀鱼蒜香酱、帕玛森和面包丁，不是清爽油醋沙拉。",
      "nl": "Caesarsalade: salade met romige ansjovis-knoflookdressing, Parmezaan en croutons; geen lichte vinaigrettesalade."
    },
    "cookingProfile": {
      "en": "assembled to order; expect crisp lettuce, crunchy croutons and creamy dressing.",
      "zh": "通常现拌或组合后上桌，点餐时可预期：凯撒沙拉配奶油质地鳀鱼蒜香酱、帕玛森和面包丁，不是清爽油醋沙拉。",
      "nl": "Meestal samengesteld; verwacht vooral: salade met romige ansjovis-knoflookdressing, Parmezaan en croutons; geen lichte vinaigrettesalade."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "salad",
        "safe-choice"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "mixed-vegetables",
        35,
        "romaine-style lettuce"
      ],
      [
        "bread",
        15,
        "croutons"
      ],
      [
        "parmesan",
        12,
        "cheese"
      ],
      [
        "anchovies",
        8,
        "dressing umami"
      ],
      [
        "egg",
        8,
        "dressing body"
      ],
      [
        "olive-oil",
        8,
        "dressing",
        "seasoning"
      ],
      [
        "chicken",
        10,
        "optional protein"
      ],
      [
        "lemon",
        4,
        "acid"
      ]
    ],
    "distinctiveFlavorSources": [
      "garlicky anchovy dressing",
      "parmesan",
      "croutons"
    ],
    "basicTaste": [
      "savory",
      "salty",
      "tangy"
    ],
    "textureProfile": [
      "crisp lettuce",
      "crunchy croutons",
      "creamy dressing"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-egg",
      "contains-dairy",
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "salad",
      "safe-choice"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "avoids-creamy-dressing"
    ],
    "orderVerdict": {
      "en": "Order if you want a crunchy salad with creamy savory dressing; avoid if fish, egg, dairy, or croutons are a concern.",
      "zh": "想要凯撒沙拉配奶油质地鳀鱼蒜香酱、帕玛森和面包丁，不是清爽油醋沙拉时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je salade met romige ansjovis-knoflookdressing, Parmezaan en croutons; geen lichte vinaigrettesalade wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "clam-chowder",
    "metadataCode": "122006",
    "cuisineId": "american",
    "names": {
      "en": "Clam Chowder",
      "zh": "蛤蜊浓汤",
      "nl": "Clam chowder",
      "local": "clam chowder"
    },
    "category": "soup",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Creamy clam and potato soup, often with bacon; thick, briny, and richer than clear seafood soup.",
      "zh": "蛤蜊浓汤：奶油蛤蜊土豆浓汤，常带培根，浓稠、海味鲜咸，比清汤更厚重。",
      "nl": "Clam chowder: romige soep met kokkels, aardappel en vaak bacon; dik, zilting en rijker dan heldere zeevruchtensoep."
    },
    "cookingProfile": {
      "en": "simmered; expect thick soup, soft potato and chewy clam pieces.",
      "zh": "通常慢煮后上桌，点餐时可预期：奶油蛤蜊土豆浓汤，常带培根，浓稠、海味鲜咸，比清汤更厚重。",
      "nl": "Meestal zacht gestoofd; verwacht vooral: romige soep met kokkels, aardappel en vaak bacon; dik, zilting en rijker dan heldere zeevruchtensoep."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional",
        "soup",
        "comfort-food"
      ],
      "description": {
        "en": "A regional menu reference; the verified card captures the expected preparation style and common ordering risks.",
        "zh": "带地区特点的菜单项；已审核卡片说明常见做法和点餐风险。",
        "nl": "Een regionaal menu-item; de geverifieerde kaart beschrijft bereidingsstijl en bestelrisico's."
      }
    },
    "composition": [
      [
        "clams",
        30,
        "shellfish"
      ],
      [
        "cream",
        25,
        "soup base"
      ],
      [
        "potato",
        20,
        "body"
      ],
      [
        "bacon",
        8,
        "smoky accent"
      ],
      [
        "onion",
        7,
        "aroma"
      ],
      [
        "butter",
        5,
        "richness"
      ],
      [
        "black-pepper",
        5,
        "seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "clams",
      "cream",
      "bacon"
    ],
    "basicTaste": [
      "creamy",
      "briny",
      "savory"
    ],
    "textureProfile": [
      "thick soup",
      "soft potato",
      "chewy clam pieces"
    ],
    "riskFlags": [
      "contains-shellfish",
      "contains-dairy",
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "soup",
      "comfort-food"
    ],
    "avoidIfTags": [
      "shellfish-allergy",
      "avoids-dairy"
    ],
    "orderVerdict": {
      "en": "Order if you want a creamy briny seafood soup; avoid if shellfish, dairy, or pork bacon are unsafe.",
      "zh": "想要奶油蛤蜊土豆浓汤，常带培根，浓稠、海味鲜咸，比清汤更厚重时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je romige soep met kokkels, aardappel en vaak bacon; dik, zilting en rijker dan heldere zeevruchtensoep wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "buffalo-wings",
    "metadataCode": "122007",
    "cuisineId": "american",
    "names": {
      "en": "Buffalo Wings",
      "zh": "水牛城鸡翅",
      "nl": "Buffalo wings",
      "local": "buffalo wings"
    },
    "category": "meat",
    "cookingMethods": [
      "deep-fried",
      "sauce-tossed"
    ],
    "shortDescription": {
      "en": "Chicken wings tossed in tangy hot sauce and butter, usually served with celery and blue cheese or ranch dip.",
      "zh": "水牛城鸡翅：鸡翅裹酸辣黄油辣酱，常配芹菜和蓝纹奶酪或牧场蘸酱，辣酸明显。",
      "nl": "Buffalo wings: kippenvleugels in zurige hete saus met boter, meestal met bleekselderij en blue-cheese- of ranchdip."
    },
    "cookingProfile": {
      "en": "deep-fried and coated in sauce; expect crisp skin, saucy coating and juicy meat.",
      "zh": "通常油炸并裹酱后上桌，点餐时可预期：鸡翅裹酸辣黄油辣酱，常配芹菜和蓝纹奶酪或牧场蘸酱，辣酸明显。",
      "nl": "Meestal gefrituurd en met saus omhuld; verwacht vooral: kippenvleugels in zurige hete saus met boter, meestal met bleekselderij en blue-cheese- of ranchdip."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "bar-food",
        "shareable",
        "spicy"
      ],
      "description": {
        "en": "A casual bar-food reference; the verified card highlights heat, sharing format, and common allergens.",
        "zh": "休闲酒吧食物风格；已审核卡片强调辣度、分享方式和常见过敏源。",
        "nl": "Een casual barfood-item; de geverifieerde kaart benadrukt hitte, delen en allergenen."
      }
    },
    "composition": [
      [
        "chicken",
        60,
        "wings"
      ],
      [
        "chili",
        15,
        "hot sauce",
        "seasoning"
      ],
      [
        "butter",
        10,
        "sauce richness"
      ],
      [
        "yogurt",
        8,
        "blue-cheese/ranch-style dip"
      ],
      [
        "vinegar",
        4,
        "hot sauce tang",
        "seasoning"
      ],
      [
        "garlic",
        3,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "vinegary hot sauce",
      "butter",
      "cool dip"
    ],
    "basicTaste": [
      "spicy",
      "tangy",
      "savory"
    ],
    "textureProfile": [
      "crisp skin",
      "saucy coating",
      "juicy meat"
    ],
    "riskFlags": [
      "contains-dairy",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "shareable",
      "spicy"
    ],
    "avoidIfTags": [
      "avoids-heat",
      "wants-boneless-neat-food"
    ],
    "orderVerdict": {
      "en": "Order if you want tangy spicy wings for sharing; avoid if hot sauce, bones, or dairy dip are a problem.",
      "zh": "想要鸡翅裹酸辣黄油辣酱，常配芹菜和蓝纹奶酪或牧场蘸酱，辣酸明显时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je kippenvleugels in zurige hete saus met boter, meestal met bleekselderij en blue-cheese- of ranchdip wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 3,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "pancakes",
    "metadataCode": "122008",
    "cuisineId": "american",
    "names": {
      "en": "Pancakes",
      "zh": "美式松饼",
      "nl": "Pannenkoeken",
      "local": "pancakes"
    },
    "category": "breakfast",
    "cookingMethods": [
      "fried"
    ],
    "shortDescription": {
      "en": "Soft griddle cakes usually served with butter and maple syrup; sweet breakfast rather than dessert cake.",
      "zh": "美式松饼：煎松饼常配黄油和枫糖浆，质地松软，是甜口早餐而非蛋糕甜点。",
      "nl": "Pannenkoeken: zachte bakplaatpannenkoekjes met boter en ahornsiroop; zoet ontbijt, geen taartdessert."
    },
    "cookingProfile": {
      "en": "fried; expect soft fluffy cakes and syrupy top.",
      "zh": "通常煎炸后上桌，点餐时可预期：煎松饼常配黄油和枫糖浆，质地松软，是甜口早餐而非蛋糕甜点。",
      "nl": "Meestal gebakken in vet; verwacht vooral: zachte bakplaatpannenkoekjes met boter en ahornsiroop; zoet ontbijt, geen taartdessert."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "breakfast",
        "sweet"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "pancake-batter",
        60,
        "pancake base"
      ],
      [
        "egg",
        10,
        "batter"
      ],
      [
        "butter",
        10,
        "cooking and topping"
      ],
      [
        "maple-syrup",
        12,
        "sweet topping",
        "seasoning"
      ],
      [
        "berries",
        5,
        "optional fruit"
      ],
      [
        "vanilla",
        3,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "buttery pancakes",
      "maple syrup",
      "vanilla"
    ],
    "basicTaste": [
      "sweet",
      "buttery",
      "mild"
    ],
    "textureProfile": [
      "soft fluffy cakes",
      "syrupy top"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "breakfast",
      "sweet"
    ],
    "avoidIfTags": [
      "wants-savory-main",
      "avoids-gluten"
    ],
    "orderVerdict": {
      "en": "Order if you want a soft sweet breakfast plate; avoid if you want savory food or avoid gluten, egg, and dairy.",
      "zh": "想要煎松饼常配黄油和枫糖浆，质地松软，是甜口早餐而非蛋糕甜点时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je zachte bakplaatpannenkoekjes met boter en ahornsiroop; zoet ontbijt, geen taartdessert wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "hot-dog",
    "metadataCode": "122009",
    "cuisineId": "american",
    "names": {
      "en": "Hot Dog",
      "zh": "热狗",
      "nl": "Hotdog",
      "local": "hot dog"
    },
    "category": "sandwich",
    "cookingMethods": [
      "boiled",
      "assembled"
    ],
    "shortDescription": {
      "en": "Sausage in a soft bun with mustard, ketchup, onions, or relish; simple, salty, and processed-meat forward.",
      "zh": "热狗：香肠夹软面包，配芥末、番茄酱、洋葱或酸黄瓜酱，简单咸香。",
      "nl": "Hotdog: worst in zacht broodje met mosterd, ketchup, ui of relish; simpel, zoutig en duidelijk bewerkt vlees."
    },
    "cookingProfile": {
      "en": "boiled or poached and assembled to order; expect snappy sausage, soft bun and crisp relish.",
      "zh": "通常水煮或汆熟并现拌或组合后上桌，点餐时可预期：香肠夹软面包，配芥末、番茄酱、洋葱或酸黄瓜酱，简单咸香。",
      "nl": "Meestal gekookt of gepocheerd en samengesteld; verwacht vooral: worst in zacht broodje met mosterd, ketchup, ui of relish; simpel, zoutig en duidelijk bewerkt vlees."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "street-food",
        "quick"
      ],
      "description": {
        "en": "A street-food style menu reference; the verified card explains the usual handheld or casual format and common risks.",
        "zh": "街头小吃风格的菜单项；已审核卡片说明常见食用形式和风险。",
        "nl": "Een streetfoodachtig menu-item; de geverifieerde kaart legt vorm en risico's uit."
      }
    },
    "composition": [
      [
        "sausage-global",
        45,
        "sausage"
      ],
      [
        "bread",
        35,
        "bun"
      ],
      [
        "mustard",
        7,
        "condiment",
        "seasoning"
      ],
      [
        "tomato-sauce",
        5,
        "ketchup",
        "seasoning"
      ],
      [
        "pickles",
        5,
        "relish"
      ],
      [
        "black-pepper",
        3,
        "seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "savory sausage",
      "soft bun",
      "mustard relish"
    ],
    "basicTaste": [
      "salty",
      "tangy",
      "savory"
    ],
    "textureProfile": [
      "snappy sausage",
      "soft bun",
      "crisp relish"
    ],
    "riskFlags": [
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "street-food",
      "quick"
    ],
    "avoidIfTags": [
      "avoids-processed-meat",
      "avoids-gluten"
    ],
    "orderVerdict": {
      "en": "Order if you want a quick salty sausage bun; avoid if processed meat or gluten bread is not wanted.",
      "zh": "想要香肠夹软面包，配芥末、番茄酱、洋葱或酸黄瓜酱，简单咸香时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je worst in zacht broodje met mosterd, ketchup, ui of relish; simpel, zoutig en duidelijk bewerkt vlees wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "apple-pie",
    "metadataCode": "122010",
    "cuisineId": "american",
    "names": {
      "en": "Apple Pie",
      "zh": "苹果派",
      "nl": "Appeltaart",
      "local": "apple pie"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Baked pastry pie filled with cinnamon apples, often served warm with cream or ice cream.",
      "zh": "苹果派：酥皮烤苹果派，内馅有肉桂苹果，常温热上桌并可配奶油或冰淇淋。",
      "nl": "Appeltaart: gebakken taart met kaneelappels in deegkorst, vaak warm met room of ijs."
    },
    "cookingProfile": {
      "en": "baked; expect flaky crust, soft apples and syrupy filling.",
      "zh": "通常烘烤后上桌，点餐时可预期：酥皮烤苹果派，内馅有肉桂苹果，常温热上桌并可配奶油或冰淇淋。",
      "nl": "Meestal gebakken in de oven; verwacht vooral: gebakken taart met kaneelappels in deegkorst, vaak warm met room of ijs."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "dessert",
        "classic-dish"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "pastry-crust",
        35,
        "pie crust"
      ],
      [
        "apple",
        40,
        "fruit filling"
      ],
      [
        "sugar",
        10,
        "sweet filling"
      ],
      [
        "butter",
        5,
        "richness"
      ],
      [
        "cinnamon",
        7,
        "warm spice",
        "seasoning"
      ],
      [
        "cream",
        3,
        "optional topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "baked apple",
      "cinnamon",
      "buttery crust"
    ],
    "basicTaste": [
      "sweet",
      "fruity",
      "warm-spiced"
    ],
    "textureProfile": [
      "flaky crust",
      "soft apples",
      "syrupy filling"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert",
      "classic-dish"
    ],
    "avoidIfTags": [
      "avoids-gluten",
      "dislikes-cinnamon"
    ],
    "orderVerdict": {
      "en": "Order if you want a warm cinnamon-apple dessert; avoid if gluten pastry or cinnamon is not wanted.",
      "zh": "想要酥皮烤苹果派，内馅有肉桂苹果，常温热上桌并可配奶油或冰淇淋时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je gebakken taart met kaneelappels in deegkorst, vaak warm met room of ijs wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "cobb-salad",
    "metadataCode": "122011",
    "cuisineId": "american",
    "names": {
      "en": "Cobb Salad",
      "zh": "科布沙拉",
      "nl": "Cobb salade",
      "local": "Cobb salad"
    },
    "category": "salad",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Composed American salad with chicken, bacon, egg, avocado, tomato, and blue cheese; more a meal than a side.",
      "zh": "科布沙拉：美式组合沙拉，含鸡肉、培根、鸡蛋、牛油果、番茄和蓝纹奶酪，更像一餐。",
      "nl": "Cobb salade: Amerikaanse samengestelde salade met kip, bacon, ei, avocado, tomaat en blauwe kaas; eerder maaltijd dan bijgerecht."
    },
    "cookingProfile": {
      "en": "assembled to order; expect crisp lettuce, creamy avocado and chunky toppings.",
      "zh": "通常现拌或组合后上桌，点餐时可预期：美式组合沙拉，含鸡肉、培根、鸡蛋、牛油果、番茄和蓝纹奶酪，更像一餐。",
      "nl": "Meestal samengesteld; verwacht vooral: Amerikaanse samengestelde salade met kip, bacon, ei, avocado, tomaat en blauwe kaas; eerder maaltijd dan bijgerecht."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "salad",
        "protein-rich"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "mixed-vegetables",
        25,
        "lettuce base"
      ],
      [
        "chicken",
        18,
        "protein"
      ],
      [
        "bacon",
        12,
        "smoky topping"
      ],
      [
        "egg",
        12,
        "boiled egg"
      ],
      [
        "avocado",
        12,
        "creaminess"
      ],
      [
        "cheese",
        10,
        "blue cheese or similar"
      ],
      [
        "tomato",
        6,
        "freshness"
      ],
      [
        "vinegar",
        5,
        "dressing tang",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "bacon",
      "blue cheese",
      "avocado"
    ],
    "basicTaste": [
      "savory",
      "rich",
      "tangy"
    ],
    "textureProfile": [
      "crisp lettuce",
      "creamy avocado",
      "chunky toppings"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-dairy",
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "salad",
      "protein-rich"
    ],
    "avoidIfTags": [
      "wants-light-salad",
      "avoids-pork"
    ],
    "orderVerdict": {
      "en": "Order if you want a protein-heavy salad with rich toppings; avoid if pork, egg, or blue cheese is not wanted.",
      "zh": "想要美式组合沙拉，含鸡肉、培根、鸡蛋、牛油果、番茄和蓝纹奶酪，更像一餐时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je Amerikaanse samengestelde salade met kip, bacon, ei, avocado, tomaat en blauwe kaas; eerder maaltijd dan bijgerecht wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "lobster-roll",
    "metadataCode": "122012",
    "cuisineId": "american",
    "names": {
      "en": "Lobster Roll",
      "zh": "龙虾卷",
      "nl": "Lobster roll",
      "local": "lobster roll"
    },
    "category": "sandwich",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "New England-style roll filled with lobster meat, either lightly dressed with mayo or warm buttered.",
      "zh": "龙虾卷：新英格兰风格龙虾卷，面包里夹龙虾肉，可拌蛋黄酱或热黄油，海鲜甜味突出。",
      "nl": "Lobster roll: New England-broodje gevuld met kreeft, licht met mayo of warm met boter."
    },
    "cookingProfile": {
      "en": "assembled to order; expect tender shellfish chunks, soft toasted bun and creamy dressing.",
      "zh": "通常现拌或组合后上桌，点餐时可预期：新英格兰风格龙虾卷，面包里夹龙虾肉，可拌蛋黄酱或热黄油，海鲜甜味突出。",
      "nl": "Meestal samengesteld; verwacht vooral: New England-broodje gevuld met kreeft, licht met mayo of warm met boter."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional",
        "seafood",
        "regional-dish"
      ],
      "description": {
        "en": "A regional menu reference; the verified card captures the expected preparation style and common ordering risks.",
        "zh": "带地区特点的菜单项；已审核卡片说明常见做法和点餐风险。",
        "nl": "Een regionaal menu-item; de geverifieerde kaart beschrijft bereidingsstijl en bestelrisico's."
      }
    },
    "composition": [
      [
        "lobster",
        45,
        "lobster meat"
      ],
      [
        "bread",
        25,
        "split-top roll"
      ],
      [
        "mayonnaise",
        12,
        "cold dressing"
      ],
      [
        "butter",
        8,
        "toasted roll or warm style"
      ],
      [
        "lemon",
        5,
        "brightness"
      ],
      [
        "dill",
        3,
        "herb",
        "seasoning"
      ],
      [
        "black-pepper",
        2,
        "seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "sweet shellfish",
      "buttered roll",
      "lemon mayo"
    ],
    "basicTaste": [
      "sweet-seafood",
      "buttery",
      "creamy"
    ],
    "textureProfile": [
      "tender shellfish chunks",
      "soft toasted bun",
      "creamy dressing"
    ],
    "riskFlags": [
      "contains-shellfish",
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "seafood",
      "regional-dish"
    ],
    "avoidIfTags": [
      "shellfish-allergy",
      "avoids-mayo"
    ],
    "orderVerdict": {
      "en": "Order if you want a rich shellfish sandwich; avoid if shellfish, mayo, or buttery bread is a problem.",
      "zh": "想要新英格兰风格龙虾卷，面包里夹龙虾肉，可拌蛋黄酱或热黄油，海鲜甜味突出时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je New England-broodje gevuld met kreeft, licht met mayo of warm met boter wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "cuisineId": "british-irish",
    "confidenceTag": "audited-british-irish-batch-011",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 1,
    "id": "fish-and-chips",
    "metadataCode": "123001",
    "names": {
      "en": "Fish and Chips",
      "zh": "炸鱼薯条",
      "nl": "Fish and chips",
      "local": "Fish and chips"
    },
    "category": "seafood",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "Battered white fish served with thick-cut fries, usually with tartar sauce, lemon, or malt vinegar.",
      "zh": "裹浆油炸白鱼配粗薯条，常搭配塔塔酱、柠檬或麦芽醋。",
      "nl": "Gefrituurde witvis in beslag met dikke friet, vaak met tartaarsaus, citroen of moutazijn."
    },
    "cookingProfile": {
      "en": "Expect a crisp fried coating, flaky fish, and a heavy potato side.",
      "zh": "外层酥脆，鱼肉片状柔嫩，薯条分量通常很足。",
      "nl": "Verwacht krokant beslag, vlokkige vis en een stevige portie friet."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "first-timer-friendly",
        "street-food"
      ],
      "description": {
        "en": "A defining British chippy and pub order where batter quality and freshness matter.",
        "zh": "英国炸鱼店和酒吧代表菜，关键看面衣酥度和鱼的新鲜度。",
        "nl": "Een kenmerkende Britse chippy- en pubbestelling waarbij beslag en versheid tellen."
      }
    },
    "composition": [
      [
        "fish-fillet",
        35,
        "fried fish"
      ],
      [
        "fries",
        40,
        "potato side"
      ],
      [
        "wheat-flour",
        10,
        "batter"
      ],
      [
        "egg",
        5,
        "batter binder"
      ],
      [
        "remoulade-sauce",
        5,
        "tartar-style sauce",
        "seasoning"
      ],
      [
        "vinegar",
        5,
        "malt vinegar tang",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "fried batter",
      "malt vinegar",
      "tartar sauce"
    ],
    "basicTaste": [
      "salty",
      "savory",
      "tangy"
    ],
    "textureProfile": [
      "crisp batter",
      "flaky fish",
      "fluffy fries"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-gluten",
      "contains-egg"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "classic-dish",
      "safe-choice"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "gluten-free",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "A safe classic if you want something filling and familiar; avoid if you want a light meal.",
      "zh": "想吃熟悉、顶饱的经典选择可以点；想吃清淡就不太适合。",
      "nl": "Een veilige klassieker als je iets vullends en herkenbaars wilt; minder geschikt als je licht wilt eten."
    },
    "weightLevel": 4,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "cuisineId": "british-irish",
    "confidenceTag": "audited-british-irish-batch-011",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 1,
    "id": "shepherds-pie",
    "metadataCode": "123002",
    "names": {
      "en": "Shepherd's Pie",
      "zh": "牧羊人派",
      "nl": "Shepherd's pie",
      "local": "Shepherd's pie"
    },
    "category": "meat",
    "cookingMethods": [
      "baked",
      "layered"
    ],
    "shortDescription": {
      "en": "Minced lamb and vegetables under a browned mashed-potato topping.",
      "zh": "羊肉末和蔬菜铺底，上面覆盖烤到微焦的土豆泥。",
      "nl": "Lamsgehakt en groenten onder een gebruinde laag aardappelpuree."
    },
    "cookingProfile": {
      "en": "It is soft, saucy, and very filling, with browned potato rather than pastry.",
      "zh": "整体柔软多汁、很顶饱，顶部是烤土豆泥而不是酥皮。",
      "nl": "Zacht, sauzig en erg vullend, met gebruinde puree in plaats van deeg."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "comfort-food"
      ],
      "description": {
        "en": "A home-style British and Irish comfort dish often chosen for meat-and-potato richness.",
        "zh": "英式和爱尔兰家常舒适菜，适合想吃肉和土豆的浓厚口感。",
        "nl": "Een huiselijk Brits-Iers comfortgerecht voor wie vlees en aardappelrijkdom zoekt."
      }
    },
    "composition": [
      [
        "lamb",
        40,
        "minced lamb filling"
      ],
      [
        "potato",
        35,
        "mashed topping"
      ],
      [
        "carrot",
        10,
        "vegetable filling"
      ],
      [
        "peas",
        5,
        "vegetable filling"
      ],
      [
        "onion",
        5,
        "aromatic base"
      ],
      [
        "broth",
        5,
        "sauce base"
      ]
    ],
    "distinctiveFlavorSources": [
      "lamb",
      "gravy-style filling",
      "browned potato"
    ],
    "basicTaste": [
      "savory",
      "rich",
      "mild"
    ],
    "textureProfile": [
      "soft mash",
      "saucy minced meat",
      "small vegetables"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food",
      "cold-weather"
    ],
    "avoidIfTags": [
      "wants-light-food",
      "no-lamb"
    ],
    "orderVerdict": {
      "en": "Order when you want a mild, hearty meat-and-potato plate.",
      "zh": "想吃温和、厚实的肉和土豆类主菜时很合适。",
      "nl": "Kies dit voor een milde, stevige vlees-en-aardappelschotel."
    },
    "weightLevel": 4,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "cuisineId": "british-irish",
    "confidenceTag": "audited-british-irish-batch-011",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 1,
    "id": "bangers-and-mash",
    "metadataCode": "123003",
    "names": {
      "en": "Bangers and Mash",
      "zh": "香肠土豆泥",
      "nl": "Worst met puree",
      "local": "Bangers and mash"
    },
    "category": "meat",
    "cookingMethods": [
      "grilled",
      "simmered"
    ],
    "shortDescription": {
      "en": "British sausages served over mashed potatoes with onion gravy.",
      "zh": "英式香肠配土豆泥和洋葱肉汁。",
      "nl": "Britse worsten met aardappelpuree en uienjus."
    },
    "cookingProfile": {
      "en": "The sausages are browned, the mash is soft, and the gravy makes it heavier.",
      "zh": "香肠煎烤上色，土豆泥柔软，肉汁让整体更厚重。",
      "nl": "De worst is bruin gebakken, de puree zacht en de jus maakt het zwaarder."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "pub-food",
        "comfort-food"
      ],
      "description": {
        "en": "A pub staple where sausage quality and gravy decide the experience.",
        "zh": "酒吧常见主菜，体验主要取决于香肠品质和肉汁。",
        "nl": "Een pubklassieker waarbij worstkwaliteit en jus de ervaring bepalen."
      }
    },
    "composition": [
      [
        "sausage-global",
        45,
        "sausages"
      ],
      [
        "potato",
        35,
        "mash"
      ],
      [
        "onion",
        10,
        "onion gravy"
      ],
      [
        "broth",
        5,
        "gravy base"
      ],
      [
        "mustard",
        5,
        "sharp condiment",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork sausage",
      "onion gravy",
      "mustard"
    ],
    "basicTaste": [
      "savory",
      "salty",
      "rich"
    ],
    "textureProfile": [
      "snappy sausage",
      "soft mash",
      "glossy gravy"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "pub-food",
      "comfort-food"
    ],
    "avoidIfTags": [
      "no-pork",
      "gluten-free",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Good pub comfort food; ask if the sausage is pork if that matters.",
      "zh": "适合想吃酒吧舒适菜；介意猪肉时先问香肠成分。",
      "nl": "Goed pub-comfortfood; vraag naar varkensvlees als dat belangrijk is."
    },
    "weightLevel": 4,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "cuisineId": "british-irish",
    "confidenceTag": "audited-british-irish-batch-011",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 1,
    "id": "full-english-breakfast",
    "metadataCode": "123004",
    "names": {
      "en": "Full English Breakfast",
      "zh": "英式早餐",
      "nl": "Full English breakfast",
      "local": "Full English breakfast"
    },
    "category": "breakfast",
    "cookingMethods": [
      "fried",
      "grilled",
      "assembled"
    ],
    "shortDescription": {
      "en": "A cooked breakfast plate with eggs, bacon, sausage, beans, tomato, mushrooms, toast, and sometimes black pudding.",
      "zh": "熟食早餐拼盘，常有鸡蛋、培根、香肠、焗豆、番茄、蘑菇、吐司，有时加血肠。",
      "nl": "Een warm ontbijtbord met ei, bacon, worst, bonen, tomaat, champignons, toast en soms black pudding."
    },
    "cookingProfile": {
      "en": "It is salty, oily, and very filling, more like a full meal than a light breakfast.",
      "zh": "咸香油润、分量很大，更像完整一餐而不是轻早餐。",
      "nl": "Zout, vet en zeer vullend; eerder een volledige maaltijd dan een licht ontbijt."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "breakfast",
        "classic-dish"
      ],
      "description": {
        "en": "A recognizable British breakfast plate with many pork, egg, and bread components.",
        "zh": "辨识度很高的英式早餐盘，常同时包含猪肉、鸡蛋和面包。",
        "nl": "Een herkenbaar Brits ontbijtbord met vaak varkensvlees, ei en brood."
      }
    },
    "composition": [
      [
        "baked-beans",
        20,
        "bean side"
      ],
      [
        "egg",
        15,
        "fried egg"
      ],
      [
        "bacon",
        15,
        "pork component"
      ],
      [
        "sausage-global",
        15,
        "sausage"
      ],
      [
        "mushrooms",
        10,
        "vegetable side"
      ],
      [
        "tomato",
        10,
        "grilled tomato"
      ],
      [
        "black-pudding",
        10,
        "optional blood sausage"
      ],
      [
        "bread",
        5,
        "toast"
      ]
    ],
    "distinctiveFlavorSources": [
      "fried egg",
      "bacon",
      "baked beans"
    ],
    "basicTaste": [
      "salty",
      "savory",
      "rich"
    ],
    "textureProfile": [
      "mixed fried items",
      "soft beans",
      "crisp toast"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-egg",
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "breakfast",
      "very-filling"
    ],
    "avoidIfTags": [
      "no-pork",
      "egg-allergy",
      "gluten-free",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Order only when you want a heavy breakfast or brunch plate.",
      "zh": "只有想吃厚重早餐或早午餐拼盘时才推荐。",
      "nl": "Bestel dit vooral als je een zwaar ontbijt- of brunchbord wilt."
    },
    "weightLevel": 5,
    "restaurantVariationLevel": "high"
  }),
  starterDish({
    "cuisineId": "british-irish",
    "confidenceTag": "audited-british-irish-batch-011",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 1,
    "id": "steak-and-ale-pie",
    "metadataCode": "123005",
    "names": {
      "en": "Steak and Ale Pie",
      "zh": "啤酒牛肉派",
      "nl": "Steak and ale pie",
      "local": "Steak and ale pie"
    },
    "category": "meat",
    "cookingMethods": [
      "baked",
      "braised"
    ],
    "shortDescription": {
      "en": "Pastry pie filled with slow-cooked beef in ale gravy.",
      "zh": "酥皮派里包慢炖牛肉和啤酒肉汁。",
      "nl": "Pastei met deegkorst en langzaam gegaard rundvlees in bierjus."
    },
    "cookingProfile": {
      "en": "Expect a flaky crust and rich beef filling; it is usually heavy.",
      "zh": "外层酥皮松脆，内馅是浓郁牛肉，通常很厚重。",
      "nl": "Verwacht een bladerige korst en rijke rundvulling; meestal zwaar."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "pub-food",
        "comfort-food"
      ],
      "description": {
        "en": "A classic pub pie where ale gravy and pastry are the key ordering signals.",
        "zh": "经典酒吧派，点餐重点是啤酒肉汁和酥皮。",
        "nl": "Een klassieke pubpastei waarbij bierjus en deeg de kern zijn."
      }
    },
    "composition": [
      [
        "beef",
        45,
        "braised steak"
      ],
      [
        "pastry-crust",
        30,
        "pie crust"
      ],
      [
        "mushrooms",
        10,
        "filling body"
      ],
      [
        "onion",
        5,
        "aromatic base"
      ],
      [
        "beer",
        5,
        "ale gravy",
        "seasoning"
      ],
      [
        "black-pepper",
        5,
        "peppery seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "ale gravy",
      "beef",
      "pastry crust"
    ],
    "basicTaste": [
      "savory",
      "malty",
      "rich"
    ],
    "textureProfile": [
      "flaky crust",
      "tender beef",
      "thick gravy"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "contains-alcohol"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "pub-food",
      "comfort-food"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free",
      "no-alcohol",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "A good cold-weather pub choice if you are comfortable with pastry and ale gravy.",
      "zh": "适合冷天或酒吧场景；不介意酥皮和啤酒肉汁时可选。",
      "nl": "Een goede pubkeuze bij koud weer als deeg en bierjus welkom zijn."
    },
    "weightLevel": 5,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "cuisineId": "british-irish",
    "confidenceTag": "audited-british-irish-batch-011",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 1,
    "id": "irish-stew",
    "metadataCode": "123006",
    "names": {
      "en": "Irish Stew",
      "zh": "爱尔兰炖肉",
      "nl": "Ierse stoofpot",
      "local": "Irish stew"
    },
    "category": "meat",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Mild lamb or mutton stew with potatoes, onions, carrots, and broth.",
      "zh": "温和的羊肉炖菜，配土豆、洋葱、胡萝卜和汤汁。",
      "nl": "Milde stoofpot van lam of schaap met aardappel, ui, wortel en bouillon."
    },
    "cookingProfile": {
      "en": "It is brothy and warming rather than spicy or heavily sauced.",
      "zh": "偏汤感和暖胃，不是辛辣或重酱汁风格。",
      "nl": "Bouillonachtig en verwarmend, niet pittig of zwaar met saus."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "comfort-food"
      ],
      "description": {
        "en": "A simple Irish classic where lamb, potato, and broth define the plate.",
        "zh": "爱尔兰经典炖菜，核心是羊肉、土豆和清炖汤汁。",
        "nl": "Een eenvoudige Ierse klassieker met lam, aardappel en bouillon."
      }
    },
    "composition": [
      [
        "lamb",
        40,
        "stew meat"
      ],
      [
        "potato",
        30,
        "starchy body"
      ],
      [
        "carrot",
        15,
        "vegetable sweetness"
      ],
      [
        "onion",
        10,
        "aromatic base"
      ],
      [
        "broth",
        5,
        "brothy base"
      ]
    ],
    "distinctiveFlavorSources": [
      "lamb broth",
      "potato",
      "onion"
    ],
    "basicTaste": [
      "savory",
      "mild",
      "brothy"
    ],
    "textureProfile": [
      "tender meat",
      "soft potato",
      "light broth"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food",
      "mild-choice"
    ],
    "avoidIfTags": [
      "no-lamb",
      "wants-crisp-food"
    ],
    "orderVerdict": {
      "en": "Choose it for a mild, warming stew rather than a flashy dish.",
      "zh": "想吃温和暖胃的炖菜时可选；它不是重口味菜。",
      "nl": "Kies dit voor een milde, verwarmende stoof, niet voor iets uitgesproken pittigs."
    },
    "weightLevel": 4,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "cuisineId": "british-irish",
    "confidenceTag": "audited-british-irish-batch-011",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 1,
    "id": "cornish-pasty",
    "metadataCode": "123007",
    "names": {
      "en": "Cornish Pasty",
      "zh": "康沃尔馅饼",
      "nl": "Cornish pasty",
      "local": "Cornish pasty"
    },
    "category": "bread",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Crimped hand pie filled with beef, potato, onion, and swede or turnip.",
      "zh": "带卷边的手持馅饼，内馅常是牛肉、土豆、洋葱和芜菁。",
      "nl": "Handpastei met geribbelde rand, gevuld met rundvlees, aardappel, ui en koolraap of raap."
    },
    "cookingProfile": {
      "en": "It is portable, pastry-heavy, and more filling than it looks.",
      "zh": "方便手拿，酥皮比例高，比看起来更顶饱。",
      "nl": "Makkelijk uit de hand, deegzwaar en vullender dan het lijkt."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "street-food"
      ],
      "description": {
        "en": "A Cornish regional staple often seen as a portable lunch item.",
        "zh": "康沃尔地区代表性小吃，常作为便携午餐。",
        "nl": "Een Cornish streekklassieker, vaak als draagbare lunch."
      }
    },
    "composition": [
      [
        "pastry-crust",
        40,
        "crimped crust"
      ],
      [
        "beef",
        25,
        "meat filling"
      ],
      [
        "potato",
        20,
        "starchy filling"
      ],
      [
        "onion",
        10,
        "aromatic filling"
      ],
      [
        "turnip",
        5,
        "swede or turnip"
      ]
    ],
    "distinctiveFlavorSources": [
      "pastry crust",
      "beef filling",
      "pepper"
    ],
    "basicTaste": [
      "savory",
      "mild",
      "buttery"
    ],
    "textureProfile": [
      "firm pastry",
      "soft filling",
      "crimped edge"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "regional-dish",
      "portable-food"
    ],
    "avoidIfTags": [
      "gluten-free",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "A filling handheld option; less saucy than a pie.",
      "zh": "适合想要顶饱的手持食物；比肉派更干爽。",
      "nl": "Een vullende handhap; minder sauzig dan een pastei."
    },
    "weightLevel": 3,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "cuisineId": "british-irish",
    "confidenceTag": "audited-british-irish-batch-011",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 1,
    "id": "scotch-egg",
    "metadataCode": "123008",
    "names": {
      "en": "Scotch Egg",
      "zh": "苏格兰蛋",
      "nl": "Scotch egg",
      "local": "Scotch egg"
    },
    "category": "fried-snack",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "Boiled egg wrapped in sausage meat and breadcrumbs, often served with mustard.",
      "zh": "水煮蛋外包香肠肉和面包屑，常搭配芥末酱。",
      "nl": "Gekookt ei omwikkeld met worstvlees en paneermeel, vaak met mosterd."
    },
    "cookingProfile": {
      "en": "Expect a crisp shell, savory meat layer, and a firm or runny egg center.",
      "zh": "外层酥脆，中间是咸香肉层，蛋心可能全熟或流心。",
      "nl": "Verwacht een krokante buitenkant, hartige vleeslaag en stevig of lopend eicentrum."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "pub-food",
        "snack"
      ],
      "description": {
        "en": "A pub and picnic snack where egg doneness changes the appeal.",
        "zh": "酒吧和野餐常见小吃，蛋心熟度会影响口感。",
        "nl": "Een pub- en picknicksnack waarbij de gaarheid van het ei veel uitmaakt."
      }
    },
    "composition": [
      [
        "egg",
        35,
        "center"
      ],
      [
        "sausage-global",
        35,
        "sausage meat layer"
      ],
      [
        "bread",
        20,
        "breadcrumb coating"
      ],
      [
        "wheat-flour",
        5,
        "coating support"
      ],
      [
        "mustard",
        5,
        "dip",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "sausage meat",
      "fried breadcrumb",
      "mustard"
    ],
    "basicTaste": [
      "savory",
      "salty",
      "rich"
    ],
    "textureProfile": [
      "crisp crumb",
      "firm meat layer",
      "soft egg"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "pub-food",
      "snack"
    ],
    "avoidIfTags": [
      "egg-allergy",
      "no-pork",
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Good as a snack or starter, but richer than a plain egg.",
      "zh": "适合作小吃或前菜，但比普通鸡蛋厚重很多。",
      "nl": "Goed als snack of voorgerecht, maar rijker dan een gewoon ei."
    },
    "weightLevel": 3,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "cuisineId": "british-irish",
    "confidenceTag": "audited-british-irish-batch-011",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 1,
    "id": "ploughmans-lunch",
    "metadataCode": "123009",
    "names": {
      "en": "Ploughman's Lunch",
      "zh": "农夫冷盘",
      "nl": "Ploughman's lunch",
      "local": "Ploughman's lunch"
    },
    "category": "starter",
    "cookingMethods": [
      "assembled"
    ],
    "servingTemperature": "cold-or-cool",
    "goodForSharing": true,
    "shortDescription": {
      "en": "Cold pub plate of cheese, bread, pickles, chutney, fruit, and sometimes ham.",
      "zh": "酒吧冷盘，通常有奶酪、面包、腌菜、酸甜酱、水果，有时加火腿。",
      "nl": "Koud pubbord met kaas, brood, pickles, chutney, fruit en soms ham."
    },
    "cookingProfile": {
      "en": "It is assembled cold and depends on cheese sharpness, bread, and pickles.",
      "zh": "冷食组合盘，体验取决于奶酪咸香度、面包和腌菜。",
      "nl": "Koud samengesteld; kaas, brood en pickles bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "pub-food",
        "sharing"
      ],
      "description": {
        "en": "A traditional pub lunch plate for grazing rather than a hot main.",
        "zh": "传统酒吧午餐冷盘，适合慢慢吃，不是热主菜。",
        "nl": "Een traditioneel pub-lunchbord om te grazen, geen warm hoofdgerecht."
      }
    },
    "composition": [
      [
        "cheddar",
        30,
        "cheese"
      ],
      [
        "bread",
        25,
        "bread"
      ],
      [
        "pickles",
        20,
        "pickle and chutney side"
      ],
      [
        "apple",
        10,
        "fresh fruit"
      ],
      [
        "ham",
        10,
        "optional cold meat"
      ],
      [
        "mustard",
        5,
        "sharp condiment",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "cheddar",
      "pickles",
      "chutney"
    ],
    "basicTaste": [
      "savory",
      "tangy",
      "mildly sweet"
    ],
    "textureProfile": [
      "firm cheese",
      "crusty bread",
      "crisp pickles"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-gluten",
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "pub-food",
      "sharing"
    ],
    "avoidIfTags": [
      "dairy-free",
      "gluten-free",
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Good if you want a cold grazing plate; not a hot cooked meal.",
      "zh": "想吃冷盘慢慢分享时适合；它不是热菜主餐。",
      "nl": "Goed voor een koud deelbord; geen warme bereide maaltijd."
    },
    "weightLevel": 2,
    "restaurantVariationLevel": "high"
  }),
  starterDish({
    "cuisineId": "british-irish",
    "confidenceTag": "audited-british-irish-batch-011",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 1,
    "id": "beef-wellington",
    "metadataCode": "123010",
    "names": {
      "en": "Beef Wellington",
      "zh": "威灵顿牛排",
      "nl": "Beef Wellington",
      "local": "Beef Wellington"
    },
    "category": "meat",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Beef fillet wrapped with mushroom duxelles and pastry, usually sliced to show the center.",
      "zh": "牛柳包裹蘑菇馅和酥皮烘烤，通常切片露出中心。",
      "nl": "Runderfilet met paddenstoelenvulling en deegkorst, meestal in plakken geserveerd."
    },
    "cookingProfile": {
      "en": "It is rich and pastry-heavy, with doneness of the beef as the main risk.",
      "zh": "口感浓厚且酥皮感重，主要风险是牛肉熟度是否合口味。",
      "nl": "Rijk en deegzwaar, waarbij de garing van het rundvlees het belangrijkste risico is."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "special-occasion",
        "classic-dish"
      ],
      "description": {
        "en": "A British special-occasion dish often priced higher because of beef fillet and pastry work.",
        "zh": "英式宴席感菜品，因牛柳和酥皮工序通常价格更高。",
        "nl": "Een Brits gerecht voor speciale gelegenheden, vaak duurder door filet en deegwerk."
      }
    },
    "composition": [
      [
        "beef",
        45,
        "beef fillet"
      ],
      [
        "pastry-crust",
        30,
        "pastry wrap"
      ],
      [
        "mushrooms",
        15,
        "duxelles layer"
      ],
      [
        "mustard",
        5,
        "thin sharp layer",
        "seasoning"
      ],
      [
        "egg",
        5,
        "pastry glaze"
      ]
    ],
    "distinctiveFlavorSources": [
      "beef fillet",
      "mushroom duxelles",
      "buttery pastry"
    ],
    "basicTaste": [
      "savory",
      "rich",
      "earthy"
    ],
    "textureProfile": [
      "tender beef",
      "flaky pastry",
      "soft mushroom layer"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "contains-egg"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "special-occasion",
      "rich-main"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-allergy",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Choose it for a rich centerpiece dish; ask about beef doneness if you care.",
      "zh": "想吃浓厚、有仪式感的主菜时可选；在意熟度要先问。",
      "nl": "Kies dit als rijk hoofdgerecht; vraag naar de garing als dat belangrijk is."
    },
    "weightLevel": 5,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "cuisineId": "british-irish",
    "confidenceTag": "audited-british-irish-batch-011",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 1,
    "id": "sticky-toffee-pudding",
    "metadataCode": "123011",
    "names": {
      "en": "Sticky Toffee Pudding",
      "zh": "太妃糖布丁蛋糕",
      "nl": "Sticky toffee pudding",
      "local": "Sticky toffee pudding"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Warm date sponge cake served with sticky toffee sauce, often with cream or ice cream.",
      "zh": "温热枣香海绵蛋糕配黏稠太妃糖酱，常加奶油或冰淇淋。",
      "nl": "Warme dadelsponscake met kleverige toffeesaus, vaak met room of ijs."
    },
    "cookingProfile": {
      "en": "It is soft, very sweet, and sauce-heavy rather than pudding in the custard sense.",
      "zh": "质地柔软、很甜、酱汁多，不是卡仕达布丁那类甜点。",
      "nl": "Zacht, erg zoet en sausachtig; geen pudding zoals custard."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "dessert",
        "comfort-food"
      ],
      "description": {
        "en": "A beloved British dessert where warm sauce and sponge texture define the order.",
        "zh": "受欢迎的英式甜点，温热酱汁和蛋糕质地是核心。",
        "nl": "Een geliefd Brits dessert waarin warme saus en cake-textuur centraal staan."
      }
    },
    "composition": [
      [
        "sponge-cake",
        45,
        "date sponge"
      ],
      [
        "toffee-sauce",
        30,
        "warm sauce"
      ],
      [
        "vanilla-custard",
        15,
        "custard or ice cream side"
      ],
      [
        "cream",
        5,
        "richness"
      ],
      [
        "sugar",
        5,
        "sweetness"
      ]
    ],
    "distinctiveFlavorSources": [
      "toffee sauce",
      "date sponge",
      "vanilla custard"
    ],
    "basicTaste": [
      "sweet",
      "caramel",
      "rich"
    ],
    "textureProfile": [
      "soft sponge",
      "sticky sauce",
      "creamy side"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert",
      "sweet-tooth"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free",
      "wants-light-dessert"
    ],
    "orderVerdict": {
      "en": "Great if you want a warm, very sweet dessert; heavy after a big main.",
      "zh": "想吃温热、很甜的甜点很合适；大餐后会偏厚重。",
      "nl": "Heerlijk voor een warm, erg zoet dessert; zwaar na een groot hoofdgerecht."
    },
    "weightLevel": 4,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "cuisineId": "british-irish",
    "confidenceTag": "audited-british-irish-batch-011",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 1,
    "id": "scones",
    "metadataCode": "123012",
    "names": {
      "en": "Scones",
      "zh": "英式司康",
      "nl": "Scones",
      "local": "Scones"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked",
      "assembled"
    ],
    "shortDescription": {
      "en": "Small baked scones usually served with clotted cream and jam.",
      "zh": "小份烘烤司康，通常配凝脂奶油和果酱。",
      "nl": "Kleine gebakken scones, meestal met clotted cream en jam."
    },
    "cookingProfile": {
      "en": "They are crumbly and mildly sweet; the cream and jam make them richer.",
      "zh": "质地松散微甜，奶油和果酱会让整体更浓厚。",
      "nl": "Kruimelig en licht zoet; room en jam maken ze rijker."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "tea-time",
        "dessert"
      ],
      "description": {
        "en": "A tea-time classic where the cream-and-jam topping is part of the identity.",
        "zh": "下午茶经典，凝脂奶油和果酱是标志搭配。",
        "nl": "Een teatimeklassieker waarbij room en jam bij de identiteit horen."
      }
    },
    "composition": [
      [
        "wheat-flour",
        40,
        "scone base"
      ],
      [
        "butter",
        20,
        "buttery crumb"
      ],
      [
        "clotted-cream",
        20,
        "topping"
      ],
      [
        "fruit-sauce-or-caramel",
        10,
        "jam"
      ],
      [
        "sugar",
        10,
        "mild sweetness"
      ]
    ],
    "distinctiveFlavorSources": [
      "clotted cream",
      "jam",
      "buttery crumb"
    ],
    "basicTaste": [
      "sweet",
      "buttery",
      "mild"
    ],
    "textureProfile": [
      "crumbly scone",
      "thick cream",
      "jammy topping"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "tea-time",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Good with tea or coffee; not as sweet as cake unless loaded with jam.",
      "zh": "适合配茶或咖啡；不加很多果酱时没有蛋糕那么甜。",
      "nl": "Goed bij thee of koffie; minder zoet dan cake tenzij er veel jam op zit."
    },
    "weightLevel": 3,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "tagine-lamb",
    "metadataCode": "124001",
    "cuisineId": "moroccan",
    "names": {
      "en": "Lamb Tagine",
      "zh": "摩洛哥塔吉锅羊肉",
      "nl": "Lamstajine",
      "local": "طاجين"
    },
    "category": "meat",
    "cookingMethods": [
      "braised"
    ],
    "shortDescription": {
      "en": "Moroccan slow-braised lamb with warm spices, vegetables, and often dried fruit or nuts.",
      "zh": "摩洛哥塔吉锅羊肉：摩洛哥塔吉锅慢炖羊肉，配温香料、蔬菜，并常有干果或坚果，甜咸交织。",
      "nl": "Lamstajine: Marokkaanse langzaam gestoofde lamsstoof met warme specerijen, groente en vaak gedroogd fruit of noten."
    },
    "cookingProfile": {
      "en": "slow-braised; expect tender lamb, saucy vegetables and soft fruit.",
      "zh": "通常慢炖后上桌，点餐时可预期：摩洛哥塔吉锅慢炖羊肉，配温香料、蔬菜，并常有干果或坚果，甜咸交织。",
      "nl": "Meestal langzaam gestoofd; verwacht vooral: Marokkaanse langzaam gestoofde lamsstoof met warme specerijen, groente en vaak gedroogd fruit of noten."
    },
    "cuisineRole": {
      "level": "signature",
      "tags": [
        "signature",
        "signature-dish",
        "meat-lover"
      ],
      "description": {
        "en": "A signature menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的代表性菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een kenmerkend menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "lamb",
        45,
        "braised meat"
      ],
      [
        "mixed-vegetables",
        15,
        "vegetable base"
      ],
      [
        "almonds",
        8,
        "nut garnish"
      ],
      [
        "raisins",
        8,
        "sweet fruit"
      ],
      [
        "cinnamon",
        7,
        "warm spice",
        "seasoning"
      ],
      [
        "cumin",
        6,
        "earthy spice",
        "seasoning"
      ],
      [
        "coriander",
        5,
        "citrus spice",
        "seasoning"
      ],
      [
        "olive-oil",
        6,
        "richness",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "braised lamb",
      "cinnamon",
      "sweet dried fruit"
    ],
    "basicTaste": [
      "savory",
      "sweet-spiced",
      "rich"
    ],
    "textureProfile": [
      "tender lamb",
      "saucy vegetables",
      "soft fruit"
    ],
    "riskFlags": [
      "contains-tree-nut"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "signature-dish",
      "meat-lover"
    ],
    "avoidIfTags": [
      "avoids-lamb",
      "dislikes-sweet-savory"
    ],
    "orderVerdict": {
      "en": "Order if you want tender lamb with sweet-warm spice notes; avoid if lamb or sweet-savory stews are not appealing.",
      "zh": "想要摩洛哥塔吉锅慢炖羊肉，配温香料、蔬菜，并常有干果或坚果，甜咸交织时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je Marokkaanse langzaam gestoofde lamsstoof met warme specerijen, groente en vaak gedroogd fruit of noten wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "chicken-tagine",
    "metadataCode": "124002",
    "cuisineId": "moroccan",
    "names": {
      "en": "Chicken Tagine",
      "zh": "摩洛哥塔吉锅鸡",
      "nl": "Kiptajine",
      "local": "طاجين الدجاج"
    },
    "category": "meat",
    "cookingMethods": [
      "braised"
    ],
    "shortDescription": {
      "en": "Moroccan braised chicken with preserved lemon, olives, and warm spices; tangy and savory rather than creamy.",
      "zh": "摩洛哥塔吉锅鸡：摩洛哥炖鸡配腌柠檬、橄榄和温香料，酸咸鲜明，不是奶油酱。",
      "nl": "Kiptajine: Marokkaanse gestoofde kip met ingelegde citroen, olijven en warme specerijen; zurig en hartig, niet romig."
    },
    "cookingProfile": {
      "en": "slow-braised; expect tender chicken, soft vegetables and saucy braise.",
      "zh": "通常慢炖后上桌，点餐时可预期：摩洛哥炖鸡配腌柠檬、橄榄和温香料，酸咸鲜明，不是奶油酱。",
      "nl": "Meestal langzaam gestoofd; verwacht vooral: Marokkaanse gestoofde kip met ingelegde citroen, olijven en warme specerijen; zurig en hartig, niet romig."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "classic-dish",
        "saucy"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "chicken",
        45,
        "braised meat"
      ],
      [
        "olives",
        12,
        "briny accent"
      ],
      [
        "lemon",
        12,
        "preserved lemon style"
      ],
      [
        "mixed-vegetables",
        12,
        "vegetable base"
      ],
      [
        "cumin",
        6,
        "earthy spice",
        "seasoning"
      ],
      [
        "coriander",
        5,
        "warm spice",
        "seasoning"
      ],
      [
        "olive-oil",
        5,
        "richness",
        "seasoning"
      ],
      [
        "turmeric",
        3,
        "golden color",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "preserved lemon",
      "olives",
      "braised chicken"
    ],
    "basicTaste": [
      "savory",
      "briny",
      "tangy"
    ],
    "textureProfile": [
      "tender chicken",
      "soft vegetables",
      "saucy braise"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "classic-dish",
      "saucy"
    ],
    "avoidIfTags": [
      "dislikes-olives",
      "wants-crisp-chicken"
    ],
    "orderVerdict": {
      "en": "Order if you want tender chicken with lemon-olive tang; avoid if olives or preserved lemon flavors are not wanted.",
      "zh": "想要摩洛哥炖鸡配腌柠檬、橄榄和温香料，酸咸鲜明，不是奶油酱时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je Marokkaanse gestoofde kip met ingelegde citroen, olijven en warme specerijen; zurig en hartig, niet romig wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "couscous-royal",
    "metadataCode": "124003",
    "cuisineId": "moroccan",
    "names": {
      "en": "Couscous Royal",
      "zh": "摩洛哥库斯库斯拼盘",
      "nl": "Couscous royal",
      "local": "couscous royal"
    },
    "category": "main",
    "cookingMethods": [
      "steamed",
      "braised"
    ],
    "shortDescription": {
      "en": "Couscous with a generous mix of meats, vegetables, broth, and often harissa on the side.",
      "zh": "摩洛哥库斯库斯拼盘：库斯库斯配多种肉、蔬菜和汤汁，常另配哈里萨辣酱，分量丰盛。",
      "nl": "Couscous royal: couscous met royale mix van vlees, groente, bouillon en vaak harissa apart."
    },
    "cookingProfile": {
      "en": "steamed and slow-braised; expect fluffy grains, tender meats and soft vegetables.",
      "zh": "通常蒸制并慢炖后上桌，点餐时可预期：库斯库斯配多种肉、蔬菜和汤汁，常另配哈里萨辣酱，分量丰盛。",
      "nl": "Meestal gestoomd en langzaam gestoofd; verwacht vooral: couscous met royale mix van vlees, groente, bouillon en vaak harissa apart."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "sharing",
        "filling"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "couscous",
        35,
        "grain base"
      ],
      [
        "lamb",
        20,
        "meat"
      ],
      [
        "chicken",
        15,
        "meat"
      ],
      [
        "sausage-global",
        10,
        "merguez-style sausage"
      ],
      [
        "mixed-vegetables",
        15,
        "vegetable stew"
      ],
      [
        "harissa",
        3,
        "optional heat",
        "seasoning"
      ],
      [
        "cumin",
        2,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "steamed couscous",
      "brothy vegetables",
      "mixed meats"
    ],
    "basicTaste": [
      "savory",
      "warm-spiced",
      "hearty"
    ],
    "textureProfile": [
      "fluffy grains",
      "tender meats",
      "soft vegetables"
    ],
    "riskFlags": [
      "contains-gluten",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "sharing",
      "filling"
    ],
    "avoidIfTags": [
      "avoids-gluten",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Order if you want a generous grain platter with mixed meats; avoid if gluten grains or large mixed platters are not wanted.",
      "zh": "想要库斯库斯配多种肉、蔬菜和汤汁，常另配哈里萨辣酱，分量丰盛时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je couscous met royale mix van vlees, groente, bouillon en vaak harissa apart wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "harira",
    "metadataCode": "124004",
    "cuisineId": "moroccan",
    "names": {
      "en": "Harira",
      "zh": "摩洛哥番茄豆汤",
      "nl": "Harira",
      "local": "حريرة"
    },
    "category": "soup",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Moroccan tomato-based soup with lentils, chickpeas, herbs, spices, and sometimes meat or vermicelli.",
      "zh": "摩洛哥番茄豆汤：摩洛哥番茄汤，含扁豆、鹰嘴豆、香草香料，有时加肉或细面，汤体较厚。",
      "nl": "Harira: Marokkaanse tomatensoep met linzen, kikkererwten, kruiden, specerijen en soms vlees of vermicelli."
    },
    "cookingProfile": {
      "en": "simmered; expect thick soup, soft legumes and small pasta.",
      "zh": "通常慢煮后上桌，点餐时可预期：摩洛哥番茄汤，含扁豆、鹰嘴豆、香草香料，有时加肉或细面，汤体较厚。",
      "nl": "Meestal zacht gestoofd; verwacht vooral: Marokkaanse tomatensoep met linzen, kikkererwten, kruiden, specerijen en soms vlees of vermicelli."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "soup",
        "comfort-food"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "lentils",
        25,
        "legume base"
      ],
      [
        "chickpeas",
        20,
        "legume body"
      ],
      [
        "tomato-sauce",
        20,
        "tomato broth",
        "seasoning"
      ],
      [
        "lamb",
        12,
        "optional meat"
      ],
      [
        "wheat-noodles",
        8,
        "thin pasta"
      ],
      [
        "cinnamon",
        5,
        "warm spice",
        "seasoning"
      ],
      [
        "coriander",
        5,
        "fresh spice",
        "seasoning"
      ],
      [
        "turmeric",
        5,
        "color",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "tomato",
      "lentils chickpeas",
      "warm spices"
    ],
    "basicTaste": [
      "savory",
      "tangy",
      "warm-spiced"
    ],
    "textureProfile": [
      "thick soup",
      "soft legumes",
      "small pasta"
    ],
    "riskFlags": [
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "soup",
      "comfort-food"
    ],
    "avoidIfTags": [
      "avoids-legumes",
      "avoids-gluten"
    ],
    "orderVerdict": {
      "en": "Order if you want a thick legume-tomato soup with warm spices; avoid if legumes or wheat noodles are not wanted.",
      "zh": "想要摩洛哥番茄汤，含扁豆、鹰嘴豆、香草香料，有时加肉或细面，汤体较厚时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je Marokkaanse tomatensoep met linzen, kikkererwten, kruiden, specerijen en soms vlees of vermicelli wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "pastilla",
    "metadataCode": "124005",
    "cuisineId": "moroccan",
    "names": {
      "en": "Pastilla",
      "zh": "摩洛哥甜咸酥皮派",
      "nl": "Pastilla",
      "local": "بسطيلة"
    },
    "category": "meat",
    "cookingMethods": [
      "baked",
      "layered"
    ],
    "shortDescription": {
      "en": "Moroccan sweet-savory pie with crisp pastry, spiced poultry, almonds, cinnamon, and powdered sugar.",
      "zh": "摩洛哥甜咸酥皮派：摩洛哥甜咸酥皮派，内有香料禽肉、杏仁和肉桂，表面常撒糖粉。",
      "nl": "Pastilla: Marokkaanse zoet-hartige pastei met krokant deeg, gekruide kip/duif, amandelen, kaneel en poedersuiker."
    },
    "cookingProfile": {
      "en": "baked and built in layers; expect crisp pastry, soft shredded filling and nut crunch.",
      "zh": "通常烘烤并层叠制作后上桌，点餐时可预期：摩洛哥甜咸酥皮派，内有香料禽肉、杏仁和肉桂，表面常撒糖粉。",
      "nl": "Meestal gebakken in de oven en in lagen opgebouwd; verwacht vooral: Marokkaanse zoet-hartige pastei met krokant deeg, gekruide kip/duif, amandelen, kaneel en poedersuiker."
    },
    "cuisineRole": {
      "level": "festival",
      "tags": [
        "festival",
        "festival",
        "adventurous"
      ],
      "description": {
        "en": "A festival or special-occasion reference; the verified card highlights its distinctive format and stronger ordering cues.",
        "zh": "节庆或特殊场合常见菜；已审核卡片强调其特殊形态和点餐判断点。",
        "nl": "Een feestelijk of speciaal menu-item; de geverifieerde kaart benadrukt vorm en bestelkeuzes."
      }
    },
    "composition": [
      [
        "phyllo-pastry",
        35,
        "crisp pastry"
      ],
      [
        "chicken",
        25,
        "spiced filling"
      ],
      [
        "almonds",
        15,
        "nut layer"
      ],
      [
        "egg",
        10,
        "binder"
      ],
      [
        "cinnamon",
        8,
        "sweet spice",
        "seasoning"
      ],
      [
        "sugar",
        5,
        "dusting"
      ],
      [
        "coriander",
        2,
        "warm spice",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "sweet-savory pastry",
      "almonds",
      "cinnamon"
    ],
    "basicTaste": [
      "savory",
      "sweet-spiced",
      "nutty"
    ],
    "textureProfile": [
      "crisp pastry",
      "soft shredded filling",
      "nut crunch"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-tree-nut"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "festival",
      "adventurous"
    ],
    "avoidIfTags": [
      "dislikes-sweet-savory",
      "nut-allergy"
    ],
    "orderVerdict": {
      "en": "Order if you want a festive sweet-savory pastry; avoid if nuts, egg, or sweet meat dishes are not appealing.",
      "zh": "想要摩洛哥甜咸酥皮派，内有香料禽肉、杏仁和肉桂，表面常撒糖粉时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je Marokkaanse zoet-hartige pastei met krokant deeg, gekruide kip/duif, amandelen, kaneel en poedersuiker wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 3,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "zaalouk",
    "metadataCode": "124006",
    "cuisineId": "moroccan",
    "names": {
      "en": "Zaalouk",
      "zh": "摩洛哥茄子番茄泥",
      "nl": "Zaalouk",
      "local": "zaalouk"
    },
    "category": "starter",
    "cookingMethods": [
      "simmered",
      "assembled"
    ],
    "shortDescription": {
      "en": "Moroccan cooked eggplant and tomato salad or dip with cumin, garlic, olive oil, and herbs.",
      "zh": "摩洛哥茄子番茄泥：摩洛哥熟茄子番茄蘸菜，配孜然、蒜、橄榄油和香草，质地柔软可抹。",
      "nl": "Zaalouk: Marokkaanse gekookte aubergine-tomatensalade of dip met komijn, knoflook, olijfolie en kruiden."
    },
    "cookingProfile": {
      "en": "simmered and assembled to order; expect soft mashed vegetables and spreadable dip.",
      "zh": "通常慢煮并现拌或组合后上桌，点餐时可预期：摩洛哥熟茄子番茄蘸菜，配孜然、蒜、橄榄油和香草，质地柔软可抹。",
      "nl": "Meestal zacht gestoofd en samengesteld; verwacht vooral: Marokkaanse gekookte aubergine-tomatensalade of dip met komijn, knoflook, olijfolie en kruiden."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "dip",
        "vegan-friendly"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "eggplant-global",
        45,
        "cooked eggplant"
      ],
      [
        "tomato",
        25,
        "tomato base"
      ],
      [
        "olive-oil",
        10,
        "richness",
        "seasoning"
      ],
      [
        "cumin",
        7,
        "earthy spice",
        "seasoning"
      ],
      [
        "paprika",
        5,
        "warm color",
        "seasoning"
      ],
      [
        "garlic",
        5,
        "aroma",
        "seasoning"
      ],
      [
        "coriander",
        3,
        "fresh finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "eggplant tomato",
      "cumin",
      "olive oil"
    ],
    "basicTaste": [
      "savory",
      "smoky-earthy",
      "tangy"
    ],
    "textureProfile": [
      "soft mashed vegetables",
      "spreadable dip"
    ],
    "riskFlags": [],
    "dietaryFlags": [
      "vegan"
    ],
    "goodForTags": [
      "dip",
      "vegan-friendly"
    ],
    "avoidIfTags": [
      "dislikes-soft-eggplant"
    ],
    "orderVerdict": {
      "en": "Order if you want a soft eggplant-tomato dip; avoid if mashed eggplant texture is not appealing.",
      "zh": "想要摩洛哥熟茄子番茄蘸菜，配孜然、蒜、橄榄油和香草，质地柔软可抹时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je Marokkaanse gekookte aubergine-tomatensalade of dip met komijn, knoflook, olijfolie en kruiden wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "kefta-tagine",
    "metadataCode": "124007",
    "cuisineId": "moroccan",
    "names": {
      "en": "Kefta Tagine",
      "zh": "摩洛哥肉丸塔吉锅",
      "nl": "Kefta tajine",
      "local": "kefta tajine"
    },
    "category": "meat",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Moroccan spiced meatballs simmered in tomato sauce, often with eggs poached on top.",
      "zh": "摩洛哥肉丸塔吉锅：摩洛哥香料肉丸在番茄酱中炖煮，常在上面打入鸡蛋，酱汁浓厚。",
      "nl": "Kefta tajine: Marokkaanse gekruide gehaktballetjes gestoofd in tomatensaus, vaak met eieren erop gepocheerd."
    },
    "cookingProfile": {
      "en": "simmered; expect tender meatballs, saucy tomato and soft egg if included.",
      "zh": "通常慢煮后上桌，点餐时可预期：摩洛哥香料肉丸在番茄酱中炖煮，常在上面打入鸡蛋，酱汁浓厚。",
      "nl": "Meestal zacht gestoofd; verwacht vooral: Marokkaanse gekruide gehaktballetjes gestoofd in tomatensaus, vaak met eieren erop gepocheerd."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "comfort-food",
        "meat-lover"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "ground-meat",
        45,
        "meatballs"
      ],
      [
        "tomato-sauce",
        25,
        "sauce",
        "seasoning"
      ],
      [
        "egg",
        10,
        "optional poached egg"
      ],
      [
        "cumin",
        7,
        "earthy spice",
        "seasoning"
      ],
      [
        "paprika",
        5,
        "warm spice",
        "seasoning"
      ],
      [
        "coriander",
        5,
        "herb",
        "seasoning"
      ],
      [
        "chili",
        3,
        "optional heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "spiced meatballs",
      "tomato sauce",
      "cumin paprika"
    ],
    "basicTaste": [
      "savory",
      "tomato-rich",
      "warm-spiced"
    ],
    "textureProfile": [
      "tender meatballs",
      "saucy tomato",
      "soft egg if included"
    ],
    "riskFlags": [
      "contains-egg",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food",
      "meat-lover"
    ],
    "avoidIfTags": [
      "avoids-red-meat",
      "avoids-egg"
    ],
    "orderVerdict": {
      "en": "Order if you want saucy spiced meatballs with tomato; avoid if red meat or egg topping is unwanted.",
      "zh": "想要摩洛哥香料肉丸在番茄酱中炖煮，常在上面打入鸡蛋，酱汁浓厚时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je Marokkaanse gekruide gehaktballetjes gestoofd in tomatensaus, vaak met eieren erop gepocheerd wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "moroccan-briouat",
    "metadataCode": "124008",
    "cuisineId": "moroccan",
    "names": {
      "en": "Briouat",
      "zh": "摩洛哥小酥角",
      "nl": "Briouat",
      "local": "briouat"
    },
    "category": "starter",
    "cookingMethods": [
      "fried",
      "baked"
    ],
    "shortDescription": {
      "en": "Small Moroccan pastry triangles filled with spiced meat, cheese, or almond paste; can be savory or sweet.",
      "zh": "摩洛哥小酥角：摩洛哥小三角酥皮，可填香料肉、奶酪或杏仁馅，可能是咸口也可能偏甜。",
      "nl": "Briouat: kleine Marokkaanse deegdriehoekjes met gekruid vlees, kaas of amandelvulling; hartig of zoet."
    },
    "cookingProfile": {
      "en": "fried and baked; expect crisp triangle pastry and soft filling.",
      "zh": "通常煎炸并烘烤后上桌，点餐时可预期：摩洛哥小三角酥皮，可填香料肉、奶酪或杏仁馅，可能是咸口也可能偏甜。",
      "nl": "Meestal gebakken in vet en gebakken in de oven; verwacht vooral: kleine Marokkaanse deegdriehoekjes met gekruid vlees, kaas of amandelvulling; hartig of zoet."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "starter",
        "shareable"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "phyllo-pastry",
        40,
        "thin pastry"
      ],
      [
        "ground-meat",
        25,
        "savory filling"
      ],
      [
        "cheese",
        12,
        "alternate filling"
      ],
      [
        "almonds",
        8,
        "sweet filling option"
      ],
      [
        "cinnamon",
        5,
        "sweet spice",
        "seasoning"
      ],
      [
        "cumin",
        5,
        "savory spice",
        "seasoning"
      ],
      [
        "honey",
        5,
        "sweet glaze option"
      ]
    ],
    "distinctiveFlavorSources": [
      "crisp pastry",
      "spiced filling",
      "sweet or savory finish"
    ],
    "basicTaste": [
      "savory",
      "sweet-spiced",
      "crisp"
    ],
    "textureProfile": [
      "crisp triangle pastry",
      "soft filling"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "contains-tree-nut"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "starter",
      "shareable"
    ],
    "avoidIfTags": [
      "avoids-gluten",
      "nut-allergy"
    ],
    "orderVerdict": {
      "en": "Order if you want crisp little pastries with spiced filling; avoid if you need to avoid gluten, dairy, or nuts.",
      "zh": "想要摩洛哥小三角酥皮，可填香料肉、奶酪或杏仁馅，可能是咸口也可能偏甜时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je kleine Marokkaanse deegdriehoekjes met gekruid vlees, kaas of amandelvulling; hartig of zoet wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 1,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "mechoui",
    "metadataCode": "124009",
    "cuisineId": "moroccan",
    "names": {
      "en": "Mechoui",
      "zh": "摩洛哥烤羊肉",
      "nl": "Mechoui",
      "local": "mechoui"
    },
    "category": "meat",
    "cookingMethods": [
      "grilled",
      "braised"
    ],
    "shortDescription": {
      "en": "Moroccan roasted lamb, often simply seasoned with cumin and salt; meat-focused and usually very rich.",
      "zh": "摩洛哥烤羊肉：摩洛哥烤羊肉，常以孜然和盐简单调味，肉味集中，油脂感较强。",
      "nl": "Mechoui: Marokkaans geroosterd lamsvlees, vaak eenvoudig met komijn en zout; vlezig en meestal rijk."
    },
    "cookingProfile": {
      "en": "grilled over high heat and slow-braised; expect tender lamb and crisp fatty edges.",
      "zh": "通常高温烤制并慢炖后上桌，点餐时可预期：摩洛哥烤羊肉，常以孜然和盐简单调味，肉味集中，油脂感较强。",
      "nl": "Meestal op hoge hitte gegrild en langzaam gestoofd; verwacht vooral: Marokkaans geroosterd lamsvlees, vaak eenvoudig met komijn en zout; vlezig en meestal rijk."
    },
    "cuisineRole": {
      "level": "festival",
      "tags": [
        "festival",
        "meat-lover",
        "festival"
      ],
      "description": {
        "en": "A festival or special-occasion reference; the verified card highlights its distinctive format and stronger ordering cues.",
        "zh": "节庆或特殊场合常见菜；已审核卡片强调其特殊形态和点餐判断点。",
        "nl": "Een feestelijk of speciaal menu-item; de geverifieerde kaart benadrukt vorm en bestelkeuzes."
      }
    },
    "composition": [
      [
        "lamb",
        70,
        "roasted lamb"
      ],
      [
        "cumin",
        8,
        "serving spice",
        "seasoning"
      ],
      [
        "sea-salt",
        6,
        "seasoning",
        "seasoning"
      ],
      [
        "black-pepper",
        5,
        "pepper",
        "seasoning"
      ],
      [
        "olive-oil",
        5,
        "roasting richness",
        "seasoning"
      ],
      [
        "paprika",
        4,
        "warm color",
        "seasoning"
      ],
      [
        "coriander",
        2,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "roast lamb",
      "cumin salt",
      "charred fat"
    ],
    "basicTaste": [
      "savory",
      "meaty",
      "warm-spiced"
    ],
    "textureProfile": [
      "tender lamb",
      "crisp fatty edges"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "meat-lover",
      "festival"
    ],
    "avoidIfTags": [
      "avoids-lamb",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Order if you want roast lamb where the meat is the main event; avoid if lamb flavor or fatty meat is not wanted.",
      "zh": "想要摩洛哥烤羊肉，常以孜然和盐简单调味，肉味集中，油脂感较强时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je Marokkaans geroosterd lamsvlees, vaak eenvoudig met komijn en zout; vlezig en meestal rijk wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "moroccan-salad",
    "metadataCode": "124010",
    "cuisineId": "moroccan",
    "names": {
      "en": "Moroccan Salad",
      "zh": "摩洛哥沙拉",
      "nl": "Marokkaanse salade",
      "local": "salade marocaine"
    },
    "category": "salad",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Chopped fresh salad of tomato, cucumber, pepper, herbs, lemon, and olive oil; light and refreshing.",
      "zh": "摩洛哥沙拉：番茄、黄瓜、甜椒、香草、柠檬和橄榄油拌成的碎蔬菜沙拉，清爽轻盈。",
      "nl": "Marokkaanse salade: gehakte frisse salade van tomaat, komkommer, paprika, kruiden, citroen en olijfolie; licht en verfrissend."
    },
    "cookingProfile": {
      "en": "assembled to order; expect crisp chopped vegetables and juicy tomato.",
      "zh": "通常现拌或组合后上桌，点餐时可预期：番茄、黄瓜、甜椒、香草、柠檬和橄榄油拌成的碎蔬菜沙拉，清爽轻盈。",
      "nl": "Meestal samengesteld; verwacht vooral: gehakte frisse salade van tomaat, komkommer, paprika, kruiden, citroen en olijfolie; licht en verfrissend."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common",
        "fresh",
        "vegan-friendly"
      ],
      "description": {
        "en": "A common menu reference; the verified card keeps the format, texture, and common risks concrete.",
        "zh": "常见菜单项；已审核卡片明确其形态、口感和常见风险。",
        "nl": "Een vaak voorkomend menu-item; de geverifieerde kaart houdt vorm, textuur en risico's concreet."
      }
    },
    "composition": [
      [
        "tomato",
        30,
        "fresh base"
      ],
      [
        "cucumber",
        25,
        "crisp base"
      ],
      [
        "bell-pepper",
        15,
        "fresh crunch"
      ],
      [
        "olive-oil",
        10,
        "dressing",
        "seasoning"
      ],
      [
        "lemon",
        8,
        "acid"
      ],
      [
        "cumin",
        5,
        "earthy aroma",
        "seasoning"
      ],
      [
        "parsley",
        5,
        "herb",
        "seasoning"
      ],
      [
        "sea-salt",
        2,
        "seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "fresh tomato cucumber",
      "lemon",
      "cumin"
    ],
    "basicTaste": [
      "fresh",
      "tangy",
      "herbal"
    ],
    "textureProfile": [
      "crisp chopped vegetables",
      "juicy tomato"
    ],
    "riskFlags": [],
    "dietaryFlags": [
      "vegan"
    ],
    "goodForTags": [
      "fresh",
      "vegan-friendly"
    ],
    "avoidIfTags": [
      "dislikes-raw-vegetables"
    ],
    "orderVerdict": {
      "en": "Order if you want a light chopped vegetable salad; avoid if raw vegetables are not appealing.",
      "zh": "想要番茄、黄瓜、甜椒、香草、柠檬和橄榄油拌成的碎蔬菜沙拉，清爽轻盈时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je gehakte frisse salade van tomaat, komkommer, paprika, kruiden, citroen en olijfolie; licht en verfrissend wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "seffa",
    "metadataCode": "124011",
    "cuisineId": "moroccan",
    "names": {
      "en": "Seffa",
      "zh": "摩洛哥甜库斯库斯",
      "nl": "Seffa",
      "local": "seffa"
    },
    "category": "dessert",
    "cookingMethods": [
      "steamed",
      "assembled"
    ],
    "shortDescription": {
      "en": "Sweet steamed couscous or vermicelli with cinnamon, sugar, raisins, almonds, and butter.",
      "zh": "摩洛哥甜库斯库斯：甜口蒸库斯库斯或细面，配肉桂糖、葡萄干、杏仁和黄油，颗粒松散。",
      "nl": "Seffa: zoete gestoomde couscous of vermicelli met kaneel, suiker, rozijnen, amandelen en boter."
    },
    "cookingProfile": {
      "en": "steamed and assembled to order; expect fluffy grains, chewy raisins and crunchy almonds.",
      "zh": "通常蒸制并现拌或组合后上桌，点餐时可预期：甜口蒸库斯库斯或细面，配肉桂糖、葡萄干、杏仁和黄油，颗粒松散。",
      "nl": "Meestal gestoomd en samengesteld; verwacht vooral: zoete gestoomde couscous of vermicelli met kaneel, suiker, rozijnen, amandelen en boter."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "dessert",
        "adventurous"
      ],
      "description": {
        "en": "A classic menu reference for this cuisine; the verified card focuses on its usual format, texture, and ordering risks.",
        "zh": "该菜系的经典菜单项；已审核卡片聚焦常见形态、口感和点餐风险。",
        "nl": "Een klassiek menu-item voor deze keuken; de geverifieerde kaart focust op vorm, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "couscous",
        45,
        "steamed grains or vermicelli"
      ],
      [
        "raisins",
        15,
        "sweet fruit"
      ],
      [
        "almonds",
        12,
        "nut topping"
      ],
      [
        "sugar",
        12,
        "sweet dusting"
      ],
      [
        "butter",
        8,
        "richness"
      ],
      [
        "cinnamon",
        6,
        "warm spice",
        "seasoning"
      ],
      [
        "cardamom",
        2,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "cinnamon sugar",
      "butter",
      "almonds raisins"
    ],
    "basicTaste": [
      "sweet",
      "warm-spiced",
      "nutty"
    ],
    "textureProfile": [
      "fluffy grains",
      "chewy raisins",
      "crunchy almonds"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "contains-tree-nut"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert",
      "adventurous"
    ],
    "avoidIfTags": [
      "nut-allergy",
      "wants-creamy-dessert"
    ],
    "orderVerdict": {
      "en": "Order if you want a sweet grain dessert with cinnamon and nuts; avoid if gluten grains or nuts are a problem.",
      "zh": "想要甜口蒸库斯库斯或细面，配肉桂糖、葡萄干、杏仁和黄油，颗粒松散时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je zoete gestoomde couscous of vermicelli met kaneel, suiker, rozijnen, amandelen en boter wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "mint-tea-dessert",
    "metadataCode": "124012",
    "cuisineId": "moroccan",
    "names": {
      "en": "Mint Tea Sweets",
      "zh": "薄荷茶甜点拼盘",
      "nl": "Muntthee zoetigheden",
      "local": "حلويات مغربية"
    },
    "category": "dessert",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Moroccan mint tea service often paired with small sweets; very sweet, aromatic, and more beverage-led than plated dessert.",
      "zh": "薄荷茶甜点拼盘：摩洛哥薄荷茶常配小甜点，茶味清香但甜度高，更像餐后茶点组合。",
      "nl": "Muntthee zoetigheden: Marokkaanse muntthee, vaak met kleine zoetigheden; heel zoet, aromatisch en meer thee-service dan borddessert."
    },
    "cookingProfile": {
      "en": "assembled to order; expect hot tea and crisp or nutty sweets on the side.",
      "zh": "通常现拌或组合后上桌，点餐时可预期：摩洛哥薄荷茶常配小甜点，茶味清香但甜度高，更像餐后茶点组合。",
      "nl": "Meestal samengesteld; verwacht vooral: Marokkaanse muntthee, vaak met kleine zoetigheden; heel zoet, aromatisch en meer thee-service dan borddessert."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common",
        "dessert",
        "after-meal"
      ],
      "description": {
        "en": "A common menu reference; the verified card keeps the format, texture, and common risks concrete.",
        "zh": "常见菜单项；已审核卡片明确其形态、口感和常见风险。",
        "nl": "Een vaak voorkomend menu-item; de geverifieerde kaart houdt vorm, textuur en risico's concreet."
      }
    },
    "composition": [
      [
        "mint",
        35,
        "tea aroma",
        "seasoning"
      ],
      [
        "sugar",
        25,
        "sweetness"
      ],
      [
        "almonds",
        15,
        "pastry or nut pairing"
      ],
      [
        "honey",
        10,
        "sweet pastry pairing"
      ],
      [
        "phyllo-pastry",
        10,
        "small pastry pairing"
      ],
      [
        "cardamom",
        5,
        "optional aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "fresh mint tea",
      "strong sweetness",
      "small pastry pairing"
    ],
    "basicTaste": [
      "sweet",
      "minty",
      "aromatic"
    ],
    "textureProfile": [
      "hot tea",
      "crisp or nutty sweets on the side"
    ],
    "riskFlags": [
      "contains-tree-nut",
      "contains-gluten"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert",
      "after-meal"
    ],
    "avoidIfTags": [
      "dislikes-sweet-tea",
      "avoids-nuts"
    ],
    "orderVerdict": {
      "en": "Order if you want a sweet aromatic mint-tea finish; avoid if very sweet tea or nut pastries are unwanted.",
      "zh": "想要摩洛哥薄荷茶常配小甜点，茶味清香但甜度高，更像餐后茶点组合时适合点；如果相关过敏源或这种口感不适合你，就谨慎选择。",
      "nl": "Neem dit als je Marokkaanse muntthee, vaak met kleine zoetigheden; heel zoet, aromatisch en meer thee-service dan borddessert wilt; wees voorzichtig als allergenen of deze textuur niet passen."
    },
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "cuisineId": "portuguese",
    "confidenceTag": "audited-portuguese-batch-012",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 1,
    "id": "bacalhau-a-bras",
    "metadataCode": "125001",
    "names": {
      "en": "Bacalhau a Bras",
      "zh": "金丝土豆炒盐鳕鱼",
      "nl": "Bacalhau a Bras",
      "local": "Bacalhau à Brás"
    },
    "category": "seafood",
    "cookingMethods": [
      "stirred",
      "fried"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Shredded salt cod mixed with matchstick potatoes, egg, onion, olives, and parsley.",
      "zh": "盐鳕鱼丝拌炒细土豆丝、鸡蛋、洋葱、橄榄和欧芹。",
      "nl": "Gezouten kabeljauw met dunne aardappelreepjes, ei, ui, olijven en peterselie."
    },
    "cookingProfile": {
      "en": "Expect a warm, soft cod-and-egg scramble with little crisp potato edges.",
      "zh": "通常是温热柔软的鳕鱼鸡蛋拌炒，夹着细土豆的轻微脆感。",
      "nl": "Verwacht warme, zachte kabeljauw met ei en kleine krokante aardappelrandjes."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A widely recognized Lisbon-style cod dish and a useful first Portuguese order.",
        "zh": "很有代表性的里斯本风格盐鳕鱼菜，适合作为第一次点葡萄牙菜的选择。",
        "nl": "Een herkenbaar kabeljauwgerecht uit Lissabon en een toegankelijke Portugese eerste keuze."
      }
    },
    "composition": [
      [
        "salt-cod",
        30,
        "shredded fish"
      ],
      [
        "potato",
        30,
        "matchstick potatoes"
      ],
      [
        "egg",
        20,
        "soft binder"
      ],
      [
        "onion",
        10,
        "aromatic base"
      ],
      [
        "olives",
        5,
        "briny garnish"
      ],
      [
        "parsley",
        5,
        "fresh finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "salt-cod",
      "olive-oil",
      "black olives",
      "parsley"
    ],
    "basicTaste": [
      "salty",
      "savory",
      "briny"
    ],
    "textureProfile": [
      "soft cod shreds",
      "tender egg",
      "light crisp potato"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-egg"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "classic-dish",
      "first-timer-friendly"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "egg-free"
    ],
    "orderVerdict": {
      "en": "A safe Portuguese classic if you like salty cod and a comforting egg-potato texture.",
      "zh": "喜欢咸香鳕鱼和鸡蛋土豆口感的话，这是很稳的葡萄牙经典菜。",
      "nl": "Een veilige Portugese klassieker als je zoute kabeljauw en ei-aardappelstructuur prettig vindt."
    },
    "weightLevel": 3,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "cuisineId": "portuguese",
    "confidenceTag": "audited-portuguese-batch-012",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 1,
    "id": "pastel-de-nata",
    "metadataCode": "125002",
    "names": {
      "en": "Pastel de Nata",
      "zh": "葡式蛋挞",
      "nl": "Pastel de nata",
      "local": "Pastel de nata"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "servingTemperature": "warm-or-room-temperature",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Portuguese custard tart with crisp pastry and a blistered creamy egg-custard center.",
      "zh": "葡萄牙蛋挞，酥皮外壳里是带焦斑的柔滑蛋奶馅。",
      "nl": "Portugees custardtaartje met krokant deeg en romige, geblakerde eivulling."
    },
    "cookingProfile": {
      "en": "It is usually eaten warm or at room temperature, with flaky pastry and soft custard.",
      "zh": "通常温热或常温吃，外层酥脆，内馅柔滑。",
      "nl": "Meestal warm of op kamertemperatuur, met bladerig deeg en zachte custard."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "dessert",
        "first-timer-friendly"
      ],
      "description": {
        "en": "Portugal's best-known pastry and an easy dessert or snack order.",
        "zh": "最知名的葡萄牙点心之一，适合作为甜点或小食。",
        "nl": "Het bekendste Portugese gebakje en een makkelijke dessert- of snackkeuze."
      }
    },
    "composition": [
      [
        "pastry-crust",
        40,
        "flaky shell"
      ],
      [
        "vanilla-custard",
        40,
        "custard filling"
      ],
      [
        "egg",
        10,
        "custard body"
      ],
      [
        "sugar",
        5,
        "sweetness"
      ],
      [
        "cinnamon",
        5,
        "warm topping",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "egg custard",
      "caramelized top",
      "cinnamon"
    ],
    "basicTaste": [
      "sweet",
      "creamy",
      "buttery"
    ],
    "textureProfile": [
      "flaky pastry",
      "soft custard",
      "lightly blistered top"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert",
      "first-timer-friendly"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-free",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "An easy yes for a small sweet bite; best if you enjoy custard and crisp pastry.",
      "zh": "想吃小份甜点很适合；喜欢蛋奶馅和酥皮会更对味。",
      "nl": "Een makkelijke keuze voor iets kleins en zoets, vooral als je custard en krokant deeg lekker vindt."
    },
    "weightLevel": 2,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "cuisineId": "portuguese",
    "confidenceTag": "audited-portuguese-batch-012",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 2,
    "id": "francesinha",
    "metadataCode": "125003",
    "names": {
      "en": "Francesinha",
      "zh": "波尔图肉酱三明治",
      "nl": "Francesinha",
      "local": "Francesinha"
    },
    "category": "sandwich",
    "cookingMethods": [
      "assembled",
      "baked"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Porto-style meat sandwich covered with melted cheese and a warm tomato-beer sauce.",
      "zh": "波尔图风格夹肉三明治，外层盖融化奶酪，再淋热番茄啤酒酱。",
      "nl": "Vleessandwich uit Porto met gesmolten kaas en warme tomaat-biersaus."
    },
    "cookingProfile": {
      "en": "It arrives saucy, cheesy, and very heavy, often with fries on the side.",
      "zh": "上桌时酱汁和奶酪很多，分量厚重，旁边常配薯条。",
      "nl": "Komt sauzig, kazig en erg machtig op tafel, vaak met friet erbij."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "regional-dish",
        "comfort-food"
      ],
      "description": {
        "en": "A famous Porto comfort dish where the sauce defines the experience.",
        "zh": "波尔图代表性舒适菜，关键是外层酱汁的浓度和风味。",
        "nl": "Een bekende comfortklassieker uit Porto waarbij de saus de ervaring bepaalt."
      }
    },
    "composition": [
      [
        "portuguese-roll",
        25,
        "bread base"
      ],
      [
        "beef",
        20,
        "steak layer"
      ],
      [
        "chourico",
        15,
        "sausage layer"
      ],
      [
        "ham",
        10,
        "meat layer"
      ],
      [
        "cheese",
        15,
        "melted cover"
      ],
      [
        "tomato-sauce",
        10,
        "beer-style sauce",
        "seasoning"
      ],
      [
        "fries",
        5,
        "common side"
      ]
    ],
    "distinctiveFlavorSources": [
      "tomato-beer sauce",
      "melted cheese",
      "chourico"
    ],
    "basicTaste": [
      "savory",
      "rich",
      "tangy"
    ],
    "textureProfile": [
      "saucy bread",
      "melted cheese",
      "layered meats"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "contains-pork",
      "contains-alcohol"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food",
      "regional-dish"
    ],
    "avoidIfTags": [
      "wants-light-food",
      "gluten-free",
      "dairy-free",
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a heavy, saucy Porto signature rather than a light sandwich.",
      "zh": "想吃厚重多酱的波尔图代表菜可以点；它不是清爽三明治。",
      "nl": "Kies dit voor een zware, sauzige Porto-signature, niet voor een lichte sandwich."
    },
    "weightLevel": 5,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "cuisineId": "portuguese",
    "confidenceTag": "audited-portuguese-batch-012",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 1,
    "id": "caldo-verde",
    "metadataCode": "125004",
    "names": {
      "en": "Caldo Verde",
      "zh": "葡式青菜土豆汤",
      "nl": "Caldo verde",
      "local": "Caldo verde"
    },
    "category": "soup",
    "cookingMethods": [
      "simmered"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Green Portuguese soup of potato, finely sliced kale or greens, olive oil, and chourico.",
      "zh": "葡萄牙青菜土豆汤，常有切细的绿叶菜、橄榄油和烟熏香肠片。",
      "nl": "Groene Portugese soep met aardappel, fijngesneden kool, olijfolie en chourico."
    },
    "cookingProfile": {
      "en": "The bowl is warm and smooth, with greens and a smoky sausage accent.",
      "zh": "汤体温热顺滑，青菜带清香，香肠提供烟熏咸味。",
      "nl": "Warm en glad, met groene kool en een rokerig accent van worst."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "soup"
      ],
      "description": {
        "en": "A classic Portuguese soup often used as a light starter before a heavier main.",
        "zh": "葡萄牙经典汤品，常作为较轻的开胃汤。",
        "nl": "Een klassieke Portugese soep, vaak als lichte starter voor een zwaarder hoofdgerecht."
      }
    },
    "composition": [
      [
        "potato",
        45,
        "soup body"
      ],
      [
        "kale",
        25,
        "green ribbons"
      ],
      [
        "chourico",
        15,
        "smoky garnish"
      ],
      [
        "onion",
        5,
        "aromatic base"
      ],
      [
        "olive-oil",
        5,
        "roundness",
        "seasoning"
      ],
      [
        "garlic",
        5,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "olive-oil",
      "chourico",
      "greens"
    ],
    "basicTaste": [
      "savory",
      "mild",
      "smoky"
    ],
    "textureProfile": [
      "smooth broth",
      "soft greens",
      "thin sausage slices"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "soup",
      "classic-dish"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "A good starter if you want something warm and gentle with a little smoky sausage.",
      "zh": "想要温和热汤并接受少量烟熏香肠时很合适。",
      "nl": "Een fijne starter als je iets warms en milds wilt met wat rokerige worst."
    },
    "weightLevel": 2,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "cuisineId": "portuguese",
    "confidenceTag": "audited-portuguese-batch-012",
    "metadataConfidence": 0.82,
    "spiceLevel": 3,
    "acquiredTasteLevel": 1,
    "id": "piri-piri-chicken",
    "metadataCode": "125005",
    "names": {
      "en": "Piri-Piri Chicken",
      "zh": "霹雳辣椒烤鸡",
      "nl": "Piri-pirikip",
      "local": "Frango piri-piri"
    },
    "category": "chicken",
    "cookingMethods": [
      "grilled"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Grilled chicken brushed with bright chili-garlic piri-piri sauce.",
      "zh": "炭烤或烤制鸡肉，表面刷有明亮辛香的霹雳辣椒蒜味酱。",
      "nl": "Gegrilde kip met frisse chili-knoflook piri-pirisaus."
    },
    "cookingProfile": {
      "en": "Expect charred skin, juicy meat, and a chili heat that can vary by restaurant.",
      "zh": "通常有焦香鸡皮和多汁鸡肉，辣度会因餐厅而变化。",
      "nl": "Verwacht geroosterde huid, sappig vlees en pittigheid die per zaak verschilt."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "grilled"
      ],
      "description": {
        "en": "A common Portuguese grill order where sauce heat and chicken juiciness matter.",
        "zh": "常见葡萄牙烤鸡菜，重点看酱汁辣度和鸡肉是否多汁。",
        "nl": "Een veelvoorkomende Portugese grillkeuze waarbij sauspit en sappigheid tellen."
      }
    },
    "composition": [
      [
        "chicken",
        75,
        "grilled chicken"
      ],
      [
        "peri-peri",
        10,
        "chili sauce",
        "seasoning"
      ],
      [
        "garlic",
        5,
        "aroma",
        "seasoning"
      ],
      [
        "lemon",
        5,
        "brightness"
      ],
      [
        "olive-oil",
        5,
        "gloss",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "peri-peri",
      "garlic",
      "charred chicken skin"
    ],
    "basicTaste": [
      "spicy",
      "savory",
      "tangy"
    ],
    "textureProfile": [
      "charred skin",
      "juicy chicken",
      "glossy sauce"
    ],
    "riskFlags": [
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "grilled",
      "first-timer-friendly"
    ],
    "avoidIfTags": [
      "avoids-spicy-food"
    ],
    "orderVerdict": {
      "en": "A strong choice if you want grilled chicken with real chili brightness; ask about heat level.",
      "zh": "想吃带鲜明辣味的烤鸡很适合；不耐辣要先问辣度。",
      "nl": "Een goede keuze voor gegrilde kip met frisse chilihitte; vraag naar de pittigheid."
    },
    "weightLevel": 3,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "cuisineId": "portuguese",
    "confidenceTag": "audited-portuguese-batch-012",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 1,
    "id": "ameijoas-a-bulhao-pato",
    "metadataCode": "125006",
    "names": {
      "en": "Clams Bulhao Pato",
      "zh": "蒜香白酒蛤蜊",
      "nl": "Ameijoas a Bulhao Pato",
      "local": "Amêijoas à Bulhão Pato"
    },
    "category": "seafood",
    "cookingMethods": [
      "simmered"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Clams opened in olive oil, garlic, coriander or parsley, lemon, and often white wine.",
      "zh": "蛤蜊用橄榄油、蒜、香草、柠檬和常见白酒汁烹出。",
      "nl": "Venusschelpen met olijfolie, knoflook, kruiden, citroen en vaak witte wijn."
    },
    "cookingProfile": {
      "en": "It is light, briny, and meant for dipping bread into the garlicky cooking juices.",
      "zh": "口感清爽带海味，蒜香汤汁常适合蘸面包。",
      "nl": "Licht en ziltes, met knoflookjus waar brood goed bij past."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "seafood"
      ],
      "description": {
        "en": "A classic Portuguese clam starter where freshness and garlic-lemon juices are the point.",
        "zh": "经典葡萄牙蛤蜊前菜，重点是新鲜度和蒜香柠檬汁。",
        "nl": "Een klassieke Portugese schelpenstarter waarin versheid en knoflook-citroenjus centraal staan."
      }
    },
    "composition": [
      [
        "clams",
        75,
        "main shellfish"
      ],
      [
        "olive-oil",
        10,
        "cooking juices",
        "seasoning"
      ],
      [
        "garlic",
        5,
        "aroma",
        "seasoning"
      ],
      [
        "lemon",
        5,
        "brightness"
      ],
      [
        "parsley",
        5,
        "herbal finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "clams",
      "garlic",
      "lemon",
      "olive-oil"
    ],
    "basicTaste": [
      "briny",
      "garlicky",
      "fresh"
    ],
    "textureProfile": [
      "tender clams",
      "light broth",
      "herbal finish"
    ],
    "riskFlags": [
      "contains-shellfish",
      "contains-alcohol"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "seafood",
      "sharing"
    ],
    "avoidIfTags": [
      "shellfish-allergy",
      "no-alcohol"
    ],
    "orderVerdict": {
      "en": "Great for seafood lovers who want a light garlicky starter; avoid with shellfish allergy.",
      "zh": "喜欢海鲜和蒜香清爽前菜可以点；贝类过敏不要点。",
      "nl": "Mooi voor liefhebbers van lichte knoflookzeevruchten; vermijden bij schelpdierallergie."
    },
    "weightLevel": 2,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "cuisineId": "portuguese",
    "confidenceTag": "audited-portuguese-batch-012",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 1,
    "id": "arroz-de-marisco",
    "metadataCode": "125007",
    "names": {
      "en": "Arroz de Marisco",
      "zh": "葡式海鲜饭",
      "nl": "Arroz de marisco",
      "local": "Arroz de marisco"
    },
    "category": "rice",
    "cookingMethods": [
      "simmered"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Brothy Portuguese seafood rice with shellfish, fish, tomato, herbs, and olive oil.",
      "zh": "带汤汁的葡萄牙海鲜饭，常有贝类、鱼、番茄、香草和橄榄油。",
      "nl": "Smeuige Portugese zeevruchtenrijst met schelpdieren, vis, tomaat, kruiden en olijfolie."
    },
    "cookingProfile": {
      "en": "This is looser and wetter than paella, with rice carrying seafood broth.",
      "zh": "它比西班牙海鲜饭更湿润，米饭吸收海鲜汤汁。",
      "nl": "Losser en natter dan paella, met rijst die zeevruchtenbouillon draagt."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "seafood"
      ],
      "description": {
        "en": "A common seafood main for people who want shellfish flavor in a rice dish.",
        "zh": "常见海鲜主菜，适合想在米饭里吃到贝类鲜味的人。",
        "nl": "Een veelvoorkomend zeevruchtenhoofdgerecht voor wie schelpensmaak in rijst wil."
      }
    },
    "composition": [
      [
        "short-grain-rice",
        40,
        "rice base"
      ],
      [
        "shrimp",
        20,
        "shellfish"
      ],
      [
        "clams",
        15,
        "shellfish"
      ],
      [
        "mussels",
        10,
        "shellfish"
      ],
      [
        "fish-fillet",
        5,
        "fish pieces"
      ],
      [
        "tomato-sauce",
        5,
        "broth base",
        "seasoning"
      ],
      [
        "parsley",
        5,
        "fresh finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "shellfish broth",
      "tomato",
      "olive-oil",
      "parsley"
    ],
    "basicTaste": [
      "briny",
      "savory",
      "tomato-rich"
    ],
    "textureProfile": [
      "wet rice",
      "tender seafood",
      "brothy sauce"
    ],
    "riskFlags": [
      "contains-shellfish",
      "contains-fish",
      "contains-alcohol"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "seafood",
      "rice"
    ],
    "avoidIfTags": [
      "shellfish-allergy",
      "fish-allergy",
      "wants-dry-rice"
    ],
    "orderVerdict": {
      "en": "Pick this for a saucy seafood rice, not for crisp-bottom paella-style rice.",
      "zh": "想吃带汤汁的海鲜米饭适合点；它不是锅巴型干爽海鲜饭。",
      "nl": "Kies dit voor sauzige zeevruchtenrijst, niet voor knapperige paella-achtige rijst."
    },
    "weightLevel": 3,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "cuisineId": "portuguese",
    "confidenceTag": "audited-portuguese-batch-012",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 1,
    "id": "bitoque",
    "metadataCode": "125008",
    "names": {
      "en": "Bitoque",
      "zh": "葡式煎牛排配蛋",
      "nl": "Bitoque",
      "local": "Bitoque"
    },
    "category": "meat",
    "cookingMethods": [
      "fried"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Portuguese steak plate with a fried egg, fries or rice, and a garlicky pan sauce.",
      "zh": "葡式煎牛排，常配煎蛋、薯条或米饭和蒜香锅汁。",
      "nl": "Portugese steak met gebakken ei, friet of rijst en knoflookjus."
    },
    "cookingProfile": {
      "en": "Expect a straightforward steak-and-egg plate rather than a saucy stew.",
      "zh": "更像直接的牛排煎蛋套餐，不是炖菜或浓汤。",
      "nl": "Verwacht een rechttoe rechtaan steak-met-ei bord, geen stoofpot."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common",
        "safe-choice"
      ],
      "description": {
        "en": "A common everyday Portuguese restaurant plate for a familiar meat order.",
        "zh": "葡萄牙餐厅常见日常肉类套餐，熟悉度高。",
        "nl": "Een alledaags Portugees restaurantbord voor een herkenbare vleeskeuze."
      }
    },
    "composition": [
      [
        "beef",
        45,
        "steak"
      ],
      [
        "fries",
        25,
        "side"
      ],
      [
        "egg",
        15,
        "fried topping"
      ],
      [
        "steamed-rice",
        10,
        "optional side"
      ],
      [
        "garlic",
        5,
        "pan sauce",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "garlic pan sauce",
      "fried egg",
      "steak juices"
    ],
    "basicTaste": [
      "savory",
      "garlicky",
      "mild"
    ],
    "textureProfile": [
      "pan-fried steak",
      "runny or set egg",
      "crisp fries"
    ],
    "riskFlags": [
      "contains-egg"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "safe-choice",
      "meat"
    ],
    "avoidIfTags": [
      "egg-free",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "A familiar, practical choice if you want steak with egg and sides.",
      "zh": "想吃熟悉的牛排、鸡蛋和配菜组合时很实用。",
      "nl": "Een vertrouwde, praktische keuze als je steak met ei en bijgerechten wilt."
    },
    "weightLevel": 4,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "cuisineId": "portuguese",
    "confidenceTag": "audited-portuguese-batch-012",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 2,
    "id": "polvo-a-lagareiro",
    "metadataCode": "125009",
    "names": {
      "en": "Polvo a Lagareiro",
      "zh": "橄榄油烤章鱼",
      "nl": "Polvo a lagareiro",
      "local": "Polvo à lagareiro"
    },
    "category": "seafood",
    "cookingMethods": [
      "baked"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Tender octopus with smashed potatoes, garlic, olive oil, and herbs.",
      "zh": "软嫩章鱼配压扁土豆、蒜、橄榄油和香草。",
      "nl": "Malse octopus met geplette aardappels, knoflook, olijfolie en kruiden."
    },
    "cookingProfile": {
      "en": "The dish is olive-oil rich, with tender tentacles and rustic potatoes.",
      "zh": "整体橄榄油香浓，章鱼须柔韧，土豆质朴厚实。",
      "nl": "Rijk aan olijfolie, met malse tentakels en rustieke aardappels."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "seafood"
      ],
      "description": {
        "en": "A classic Portuguese octopus order where tenderness and olive oil are key.",
        "zh": "经典葡萄牙章鱼菜，关键看章鱼软嫩度和橄榄油香气。",
        "nl": "Een klassieke Portugese octopuskeuze waarbij malsheid en olijfolie tellen."
      }
    },
    "composition": [
      [
        "octopus",
        45,
        "main seafood"
      ],
      [
        "potato",
        35,
        "smashed potatoes"
      ],
      [
        "olive-oil",
        10,
        "rich finish",
        "seasoning"
      ],
      [
        "garlic",
        5,
        "aroma",
        "seasoning"
      ],
      [
        "parsley",
        5,
        "fresh finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "octopus",
      "olive-oil",
      "garlic"
    ],
    "basicTaste": [
      "briny",
      "garlicky",
      "rich"
    ],
    "textureProfile": [
      "tender octopus",
      "soft potatoes",
      "oily finish"
    ],
    "riskFlags": [
      "contains-shellfish"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "seafood",
      "classic-dish"
    ],
    "avoidIfTags": [
      "shellfish-allergy",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "A strong order if you enjoy octopus and do not mind an olive-oil-rich plate.",
      "zh": "喜欢章鱼并接受橄榄油较重的菜时很值得点。",
      "nl": "Een sterke keuze als je octopus lekker vindt en olijfolierijk eten geen probleem is."
    },
    "weightLevel": 3,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "cuisineId": "portuguese",
    "confidenceTag": "audited-portuguese-batch-012",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 1,
    "id": "bifana",
    "metadataCode": "125010",
    "names": {
      "en": "Bifana",
      "zh": "葡式猪扒小面包",
      "nl": "Bifana",
      "local": "Bifana"
    },
    "category": "sandwich",
    "cookingMethods": [
      "fried",
      "assembled"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Thin pork cutlet sandwich in a crusty roll, usually with garlicy marinade or mustard.",
      "zh": "薄猪肉片夹在脆皮小面包里，常有蒜香腌汁或芥末。",
      "nl": "Broodje met dun varkensvlees, vaak met knoflookmarinade of mosterd."
    },
    "cookingProfile": {
      "en": "It is a quick, savory sandwich with juicy pork rather than a large plated meal.",
      "zh": "这是咸香多汁的快手小面包，不是大份正餐盘。",
      "nl": "Een snel, hartig broodje met sappig varkensvlees, geen groot bordgerecht."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "street-food",
        "common"
      ],
      "description": {
        "en": "A very common Portuguese snack-bar and casual lunch order.",
        "zh": "葡萄牙小吃店和午餐菜单很常见的选择。",
        "nl": "Een zeer veelvoorkomende Portugese snackbar- en lunchkeuze."
      }
    },
    "composition": [
      [
        "portuguese-roll",
        40,
        "bread"
      ],
      [
        "pork",
        45,
        "thin cutlet"
      ],
      [
        "garlic",
        5,
        "marinade",
        "seasoning"
      ],
      [
        "mustard",
        5,
        "optional sharpness",
        "seasoning"
      ],
      [
        "wine",
        5,
        "marinade depth"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork juices",
      "garlic marinade",
      "mustard"
    ],
    "basicTaste": [
      "savory",
      "garlicky",
      "mild"
    ],
    "textureProfile": [
      "crusty roll",
      "thin juicy pork",
      "simple sandwich"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-pork",
      "contains-alcohol"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "street-food",
      "quick-meal"
    ],
    "avoidIfTags": [
      "gluten-free",
      "no-pork",
      "no-alcohol"
    ],
    "orderVerdict": {
      "en": "A good casual pick when you want a simple pork sandwich with Portuguese flavor.",
      "zh": "想吃简单、有葡萄牙风味的猪肉小面包时很合适。",
      "nl": "Een goede informele keuze voor een simpel broodje varkensvlees met Portugese smaak."
    },
    "weightLevel": 3,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
      "id": "cataplana",
      "metadataCode": "125011",
      "cuisineId": "portuguese",
      "names": {
        "en": "Cataplana",
        "zh": "葡式铜锅海鲜炖菜",
        "nl": "Cataplana",
        "local": "cataplana"
      },
      "category": "seafood",
      "cookingMethods": [
        "assembled"
      ],
      "shortDescription": {
        "en": "Seafood stew cooked in a lidded copper pan with tomato and herbs.",
        "zh": "葡式铜锅海鲜炖菜 是常见葡萄牙菜菜单菜品，重点用于判断口味、分量和点餐风险。",
        "nl": "Cataplana is een veelvoorkomend gerecht in de portugees keuken, beschreven voor snelle bestelkeuzes."
      },
      "cookingProfile": {
        "en": "Usually served with tender seafood, fresh finish, so the ordering experience depends on sauce, filling, and portion size.",
        "zh": "通常呈现为tender seafood，点餐时主要看酱汁、馅料和分量。",
        "nl": "Meestal met tender seafood; saus, vulling en portiegrootte bepalen de ervaring."
      },
      "cuisineRole": {
        "level": "common",
        "tags": [
          "common-menu-item",
          "restaurant-coverage"
        ],
        "description": {
          "en": "A high-frequency Portuguese menu item added for broad DishKAI restaurant coverage.",
          "zh": "为提升 DishKAI 餐厅菜单覆盖率加入的高频葡萄牙菜菜品。",
          "nl": "Een vaak voorkomend portugees menu-item voor brede DishKAI restaurantdekking."
        }
      },
      "composition": [
        [
          "fish-fillet",
          50,
          "main"
        ],
        [
          "steamed-rice",
          20,
          "base"
        ],
        [
          "mixed-vegetables",
          15,
          "side"
        ],
        [
          "lime",
          10,
          "finish"
        ],
        [
          "parsley",
          5,
          "aroma",
          "seasoning"
        ]
      ],
      "distinctiveFlavorSources": [
        "peri-peri",
        "olive-oil",
        "paprika"
      ],
      "basicTaste": [
        "fresh",
        "briny"
      ],
      "textureProfile": [
        "tender seafood",
        "fresh finish"
      ],
      "riskFlags": [
        "contains-fish",
        "contains-shellfish"
      ],
      "dietaryFlags": [],
      "goodForTags": [
        "restaurant-coverage",
        "first-timer-friendly"
      ],
      "avoidIfTags": [],
      "orderVerdict": {
        "en": "Great seafood stew; shellfish likely.",
        "zh": "如果你接受这类口味和风险，葡式铜锅海鲜炖菜 是可以考虑的选择。",
        "nl": "Een goede keuze als je deze smaak en risico’s prima vindt."
      },
      "spiceLevel": 1,
      "weightLevel": 3,
      "acquiredTasteLevel": 1,
      "metadataConfidence": 0.72,
      "restaurantVariationLevel": "medium"
    }),
  starterDish({
    "cuisineId": "portuguese",
    "confidenceTag": "audited-portuguese-batch-012",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 1,
    "id": "queijadas",
    "metadataCode": "125012",
    "names": {
      "en": "Queijadas",
      "zh": "葡式乳酪小塔",
      "nl": "Queijadas",
      "local": "Queijadas"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "servingTemperature": "room-temperature",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Small Portuguese cheese or curd tartlets with a soft sweet filling.",
      "zh": "小份葡萄牙乳酪或凝乳小塔，内馅柔软清甜。",
      "nl": "Kleine Portugese kaas- of wrongeltaartjes met zachte zoete vulling."
    },
    "cookingProfile": {
      "en": "Less flaky and less blistered than pastel de nata, with a denser cheese-custard bite.",
      "zh": "比葡式蛋挞更少焦斑和酥层，口感更像紧实的乳酪蛋奶馅。",
      "nl": "Minder bladerig en geblakerd dan pastel de nata, met een dichtere kaas-custardbeet."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "dessert",
        "regional-dish"
      ],
      "description": {
        "en": "A family of Portuguese regional sweets useful to distinguish from custard tarts.",
        "zh": "葡萄牙地区甜点家族，适合和葡式蛋挞区分。",
        "nl": "Een familie Portugese regionale zoetigheden, handig te onderscheiden van nata-taartjes."
      }
    },
    "composition": [
      [
        "pastry-crust",
        35,
        "small tart shell"
      ],
      [
        "curd-cheese",
        30,
        "cheese filling"
      ],
      [
        "egg",
        20,
        "custard body"
      ],
      [
        "sugar",
        10,
        "sweetness"
      ],
      [
        "cinnamon",
        5,
        "warm accent",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "fresh cheese",
      "egg custard",
      "cinnamon"
    ],
    "basicTaste": [
      "sweet",
      "creamy",
      "mild"
    ],
    "textureProfile": [
      "soft filling",
      "small pastry edge",
      "dense custard"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "contains-egg"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free",
      "egg-free"
    ],
    "orderVerdict": {
      "en": "Choose these for a small regional sweet that is gentler than a caramelized custard tart.",
      "zh": "想吃小份地区甜点、又想比蛋挞更温和时可以点。",
      "nl": "Kies dit voor een klein regionaal zoet hapje dat zachter is dan een gekaramelliseerd custardtaartje."
    },
    "weightLevel": 2,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "roti-roll",
    "metadataCode": "126001",
    "cuisineId": "surinamese",
    "names": {
      "en": "Surinamese Roti",
      "zh": "苏里南咖喱 roti",
      "nl": "Surinaamse roti",
      "local": "roti"
    },
    "category": "bread",
    "cookingMethods": [
      "simmered",
      "assembled"
    ],
    "shortDescription": {
      "en": "Surinamese curry plate or wrap with roti flatbread, potato, long beans, and often chicken and boiled egg.",
      "zh": "苏里南咖喱 roti，常见组合是面饼配咖喱鸡、土豆、长豇豆和水煮蛋，可卷起也可盘装。",
      "nl": "Surinaamse roti met rotiplaat, aardappel, kousenband en vaak kip kerrie met gekookt ei."
    },
    "cookingProfile": {
      "en": "The curry filling is saucy and warm while the roti stays soft enough to tear or wrap.",
      "zh": "咖喱馅料温热多汁，roti 面饼柔软，适合撕着蘸或卷着吃。",
      "nl": "De kerrievulling is warm en sauzig; de rotiplaat blijft zacht genoeg om te scheuren of te rollen."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "comfort-food"
      ],
      "description": {
        "en": "A classic Dutch-Surinamese order where bread and curry are the key decision points.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "roti-flatbread",
        30,
        "bread base"
      ],
      [
        "chicken",
        25,
        "curry protein"
      ],
      [
        "potato",
        20,
        "starchy curry body"
      ],
      [
        "yardlong-beans",
        10,
        "green vegetable"
      ],
      [
        "egg",
        10,
        "boiled topping"
      ],
      [
        "curry-masala",
        5,
        "curry spice",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "Surinamese curry masala",
      "Madame Jeanette chili",
      "soft roti flatbread"
    ],
    "basicTaste": [
      "savory",
      "warm-spiced",
      "mildly spicy",
      "starchy"
    ],
    "textureProfile": [
      "soft flatbread",
      "saucy potato",
      "tender chicken"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food",
      "first-timer-friendly"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-free",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "A filling, approachable Dutch-Surinamese choice if you want curry and bread rather than rice.",
      "zh": "想吃咖喱和面饼、又要有饱腹感时很适合；不想吃重主食则慎选。",
      "nl": "Een vullende, toegankelijke keuze als je kerrie met brood wilt in plaats van rijst."
    },
    "spiceLevel": 2,
    "weightLevel": 4,
    "restaurantVariationLevel": "high",
    "confidenceTag": "audited-world-truth-batch-022",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1
  }),
  starterDish({
      "id": "pom",
      "metadataCode": "126002",
      "cuisineId": "surinamese",
      "names": {
        "en": "Pom",
        "zh": "苏里南波姆烤鸡木薯",
        "nl": "Pom",
        "local": "pom"
      },
      "category": "meat",
      "cookingMethods": [
        "grilled"
      ],
      "shortDescription": {
        "en": "Baked tayer/cassava-style casserole with chicken and citrusy savoriness.",
        "zh": "苏里南波姆烤鸡木薯 是常见苏里南菜菜单菜品，重点用于判断口味、分量和点餐风险。",
        "nl": "Pom is een veelvoorkomend gerecht in de surinaams keuken, beschreven voor snelle bestelkeuzes."
      },
      "cookingProfile": {
        "en": "Usually served with tender meat, charred or saucy edges, so the ordering experience depends on sauce, filling, and portion size.",
        "zh": "通常呈现为tender meat，点餐时主要看酱汁、馅料和分量。",
        "nl": "Meestal met tender meat; saus, vulling en portiegrootte bepalen de ervaring."
      },
      "cuisineRole": {
        "level": "classic",
        "tags": [
          "common-menu-item",
          "restaurant-coverage"
        ],
        "description": {
          "en": "A high-frequency Surinamese menu item added for broad DishKAI restaurant coverage.",
          "zh": "为提升 DishKAI 餐厅菜单覆盖率加入的高频苏里南菜菜品。",
          "nl": "Een vaak voorkomend surinaams menu-item voor brede DishKAI restaurantdekking."
        }
      },
      "composition": [
        [
          "lamb",
          45,
          "main"
        ],
        [
          "steamed-rice",
          25,
          "base"
        ],
        [
          "mixed-vegetables",
          20,
          "side"
        ],
        [
          "cumin",
          5,
          "aroma",
          "seasoning"
        ],
        [
          "black-pepper",
          5,
          "seasoning",
          "seasoning"
        ]
      ],
      "distinctiveFlavorSources": [
        "cumin",
        "chili",
        "coconut-curry"
      ],
      "basicTaste": [
        "savory",
        "rich"
      ],
      "textureProfile": [
        "tender meat",
        "charred or saucy edges"
      ],
      "riskFlags": [],
      "dietaryFlags": [],
      "goodForTags": [
        "restaurant-coverage",
        "first-timer-friendly"
      ],
      "avoidIfTags": [
        "wants-light-food"
      ],
      "orderVerdict": {
        "en": "Distinctive Surinamese comfort dish; filling and rich.",
        "zh": "如果你接受这类口味和风险，苏里南波姆烤鸡木薯 是可以考虑的选择。",
        "nl": "Een goede keuze als je deze smaak en risico’s prima vindt."
      },
      "spiceLevel": 1,
      "weightLevel": 4,
      "acquiredTasteLevel": 1,
      "metadataConfidence": 0.72,
      "restaurantVariationLevel": "medium"
    }),
  starterDish({
    "id": "saoto-soep",
    "metadataCode": "126003",
    "cuisineId": "surinamese",
    "names": {
      "en": "Saoto Soup",
      "zh": "苏里南 Saoto 鸡汤",
      "nl": "Saoto soep",
      "local": "saoto soep"
    },
    "category": "soup",
    "cookingMethods": [
      "simmered",
      "assembled"
    ],
    "shortDescription": {
      "en": "Javanese-Surinamese chicken soup with rice, bean sprouts, egg, fried potato sticks, and condiments.",
      "zh": "爪哇裔苏里南鸡汤，常有米饭、豆芽、鸡蛋和炸土豆丝，靠配料带来层次。",
      "nl": "Javaans-Surinaamse kippensoep met rijst, taugé, ei, gebakken aardappelreepjes en smaakmakers."
    },
    "cookingProfile": {
      "en": "Clear hot broth is assembled with crisp toppings, so it eats lighter than creamy soups but still feels complete.",
      "zh": "清汤热上桌，再加入脆配料，整体比奶油汤轻，但很有饱腹感。",
      "nl": "Heldere hete bouillon wordt met krokante toppings opgebouwd; lichter dan roomsoep maar toch compleet."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "soup"
      ],
      "description": {
        "en": "A core Surinamese soup order with Indonesian-Javanese roots.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "broth",
        35,
        "chicken broth"
      ],
      [
        "chicken",
        20,
        "shredded meat"
      ],
      [
        "steamed-rice",
        15,
        "starch"
      ],
      [
        "bean-sprouts",
        10,
        "fresh crunch"
      ],
      [
        "potato",
        10,
        "fried sticks"
      ],
      [
        "egg",
        5,
        "boiled garnish"
      ],
      [
        "sambal",
        5,
        "optional heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "chicken broth",
      "fried potato crunch",
      "sambal and soy-style condiments"
    ],
    "basicTaste": [
      "brothy",
      "savory",
      "lightly spicy",
      "aromatic"
    ],
    "textureProfile": [
      "clear broth",
      "shredded chicken",
      "crisp toppings"
    ],
    "riskFlags": [
      "contains-egg",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "soup",
      "first-timer-friendly"
    ],
    "avoidIfTags": [
      "egg-free"
    ],
    "orderVerdict": {
      "en": "Good when you want a warm but not heavy soup with lots of toppings and optional heat.",
      "zh": "想喝热汤又不想太厚重时适合；配料多，辣度通常可由 sambal 调整。",
      "nl": "Goed als je warme maar niet zware soep wilt met veel toppings en optionele pit."
    },
    "spiceLevel": 1,
    "weightLevel": 3,
    "confidenceTag": "audited-world-truth-batch-022",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "broodje-kip-kerrie",
    "metadataCode": "126004",
    "cuisineId": "surinamese",
    "names": {
      "en": "Broodje Kip Kerrie",
      "zh": "苏里南咖喱鸡三明治",
      "nl": "Broodje kip kerrie",
      "local": "broodje kip kerrie"
    },
    "category": "bread",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Surinamese soft roll filled with yellow curry chicken, often with cucumber or pickled vegetables.",
      "zh": "苏里南软面包夹黄咖喱鸡，常配黄瓜或酸菜，适合快速点单。",
      "nl": "Surinaams zacht broodje met gele kip kerrie, vaak met komkommer of zuur."
    },
    "cookingProfile": {
      "en": "Served as a soft filled roll: the filling is the flavor, the bread is the carrier.",
      "zh": "以软面包夹馅上桌，风味主要来自内馅，面包负责承托。",
      "nl": "Als zacht gevuld broodje geserveerd: de vulling draagt de smaak, het brood draagt mee."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "sandwich",
        "street-food"
      ],
      "description": {
        "en": "A Dutch-Surinamese lunch-counter sandwich where filling choice drives the order.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "bread",
        40,
        "soft roll"
      ],
      [
        "chicken",
        45,
        "main filling"
      ],
      [
        "mixed-vegetables",
        10,
        "fresh or pickled garnish"
      ],
      [
        "curry-masala",
        5,
        "warm spice",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "curry masala",
      "soft roll",
      "optional Madame Jeanette heat"
    ],
    "basicTaste": [
      "savory",
      "bready",
      "warm-spiced"
    ],
    "textureProfile": [
      "soft roll",
      "moist filling",
      "small crisp garnish"
    ],
    "riskFlags": [
      "contains-gluten",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "street-food",
      "quick-lunch"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "A strong quick lunch choice if you want warm curry chicken in bread.",
      "zh": "想要热咖喱鸡和面包的快速午餐时很稳。",
      "nl": "Een sterke snelle lunchkeuze als je warme kip kerrie op brood wilt."
    },
    "spiceLevel": 2,
    "weightLevel": 3,
    "restaurantVariationLevel": "high",
    "confidenceTag": "audited-world-truth-batch-022",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1
  }),
  starterDish({
    "id": "broodje-bakkeljauw",
    "metadataCode": "126005",
    "cuisineId": "surinamese",
    "names": {
      "en": "Broodje Bakkeljauw",
      "zh": "苏里南咸鳕鱼三明治",
      "nl": "Broodje bakkeljauw",
      "local": "broodje bakkeljauw"
    },
    "category": "bread",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Surinamese soft roll with flaked salt cod, peppery seasoning, and often pickled cucumber.",
      "zh": "苏里南软面包夹炒散的咸鳕鱼，咸鲜明显，常带辣椒和酸爽配菜。",
      "nl": "Surinaams zacht broodje met geplukte bakkeljauw, pittige kruiding en vaak zuur."
    },
    "cookingProfile": {
      "en": "Served as a soft filled roll: the filling is the flavor, the bread is the carrier.",
      "zh": "以软面包夹馅上桌，风味主要来自内馅，面包负责承托。",
      "nl": "Als zacht gevuld broodje geserveerd: de vulling draagt de smaak, het brood draagt mee."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "sandwich",
        "street-food"
      ],
      "description": {
        "en": "A Dutch-Surinamese lunch-counter sandwich where filling choice drives the order.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "bread",
        40,
        "soft roll"
      ],
      [
        "salt-cod",
        45,
        "main filling"
      ],
      [
        "mixed-vegetables",
        10,
        "fresh or pickled garnish"
      ],
      [
        "curry-masala",
        5,
        "warm spice",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "salt cod",
      "Madame Jeanette chili",
      "pickled freshness"
    ],
    "basicTaste": [
      "savory",
      "bready",
      "warm-spiced"
    ],
    "textureProfile": [
      "soft roll",
      "moist filling",
      "small crisp garnish"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-fish",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "street-food",
      "quick-lunch"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Pick it if you like salty fish and pepper heat; avoid if you want a mild sandwich.",
      "zh": "喜欢咸鲜鱼味和一点辣可以点；想要温和三明治则不一定合适。",
      "nl": "Neem dit als je zoute vis en peperige pit lekker vindt; minder geschikt voor een mild broodje."
    },
    "spiceLevel": 2,
    "weightLevel": 3,
    "restaurantVariationLevel": "high",
    "confidenceTag": "audited-world-truth-batch-022",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1
  }),
  starterDish({
    "id": "bara",
    "metadataCode": "126006",
    "cuisineId": "surinamese",
    "names": {
      "en": "Bara",
      "zh": "苏里南炸豆饼",
      "nl": "Bara",
      "local": "bara"
    },
    "category": "fried-snack",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "Spiced fried split-pea or lentil dough snack, often eaten with chutney or filled as a street-food sandwich.",
      "zh": "苏里南炸豆面团小吃，带香料和绿色叶菜，常蘸 chutney 或剖开夹馅。",
      "nl": "Gekruid gefrituurd erwten- of linzendeeg, vaak met chutney of gevuld als streetfoodbroodje."
    },
    "cookingProfile": {
      "en": "Deep-fried until crisp outside and soft inside, with warm curry-like spice in the dough.",
      "zh": "外层炸到酥，里面松软，面团本身有温暖咖喱香料味。",
      "nl": "Gefrituurd tot krokant buiten en zacht binnen, met warme kerrieachtige kruiding in het deeg."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "fried-snack"
      ],
      "description": {
        "en": "A recognizable Surinamese snack where frying and spice level matter more than a saucy filling.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "lentils",
        40,
        "pulse dough"
      ],
      [
        "wheat-flour",
        25,
        "dough structure"
      ],
      [
        "spinach",
        10,
        "green flecks"
      ],
      [
        "chili",
        10,
        "heat",
        "seasoning"
      ],
      [
        "cumin",
        10,
        "warm spice",
        "seasoning"
      ],
      [
        "coriander",
        5,
        "spice lift",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "cumin-coriander dough",
      "chili heat",
      "fried pulse aroma"
    ],
    "basicTaste": [
      "savory",
      "spiced",
      "fried",
      "mildly earthy"
    ],
    "textureProfile": [
      "crisp outside",
      "soft dense center",
      "oily edges"
    ],
    "riskFlags": [
      "contains-gluten",
      "can-be-spicy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "street-food",
      "fried-snack"
    ],
    "avoidIfTags": [
      "gluten-free",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Great as a fried snack or carrier for fillings; heavier than it looks.",
      "zh": "适合当炸小吃或夹馅底座；看着小，但油炸感和饱腹感都明显。",
      "nl": "Sterk als gefrituurde snack of drager voor vulling; zwaarder dan hij lijkt."
    },
    "spiceLevel": 2,
    "weightLevel": 3,
    "confidenceTag": "audited-world-truth-batch-022",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "teloh",
    "metadataCode": "126007",
    "cuisineId": "surinamese",
    "names": {
      "en": "Teloh",
      "zh": "炸木薯配咸鳕鱼",
      "nl": "Teloh",
      "local": "teloh"
    },
    "category": "fried-snack",
    "cookingMethods": [
      "deep-fried",
      "assembled"
    ],
    "shortDescription": {
      "en": "Fried cassava served with salty bakkeljauw, often with pepper sauce or pickled vegetables.",
      "zh": "炸木薯搭配咸鳕鱼碎，常加辣椒酱或酸菜，主打淀粉和咸鲜鱼味。",
      "nl": "Gefrituurde cassave met zoute bakkeljauw, vaak met pepersaus of zuur."
    },
    "cookingProfile": {
      "en": "The cassava is crisp-edged and starchy while the salt cod adds concentrated savory bite.",
      "zh": "木薯边缘微酥、内部粉糯，咸鳕鱼提供很集中的咸鲜味。",
      "nl": "De cassave is krokant aan de rand en zetmeelrijk; bakkeljauw geeft geconcentreerde hartigheid."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "fried-snack"
      ],
      "description": {
        "en": "A common Surinamese snack plate where fish salinity is the main watch-out.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "cassava",
        55,
        "fried base"
      ],
      [
        "salt-cod",
        25,
        "fish topping"
      ],
      [
        "mixed-vegetables",
        10,
        "pickled garnish"
      ],
      [
        "madame-jeanette-chili",
        5,
        "pepper heat",
        "seasoning"
      ],
      [
        "lime",
        5,
        "freshness"
      ]
    ],
    "distinctiveFlavorSources": [
      "fried cassava",
      "salt cod",
      "pepper sauce"
    ],
    "basicTaste": [
      "salty",
      "starchy",
      "savory",
      "spicy"
    ],
    "textureProfile": [
      "crisp edges",
      "dense cassava",
      "flaky fish"
    ],
    "riskFlags": [
      "contains-fish",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "street-food",
      "fried-snack"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "low-salt"
    ],
    "orderVerdict": {
      "en": "Choose it for a filling salty snack; not ideal if you dislike salt cod.",
      "zh": "想吃咸香、很有饱腹感的小吃可以点；不喜欢咸鳕鱼则避开。",
      "nl": "Kies dit voor een vullende zoute snack; minder geschikt als je bakkeljauw niet lekker vindt."
    },
    "spiceLevel": 2,
    "weightLevel": 4,
    "confidenceTag": "audited-world-truth-batch-022",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "mokshire-meti",
    "metadataCode": "126008",
    "cuisineId": "surinamese",
    "names": {
      "en": "Moksi Meti",
      "zh": "苏里南混合烤肉",
      "nl": "Moksi meti",
      "local": "moksi meti"
    },
    "category": "meat",
    "cookingMethods": [
      "grilled",
      "assembled"
    ],
    "shortDescription": {
      "en": "Surinamese mixed roasted meats, commonly chicken, pork, and sausage served with rice, noodles, or vegetables.",
      "zh": "苏里南混合烤肉，常见鸡肉、猪肉和香肠组合，可配饭、面或蔬菜。",
      "nl": "Surinaamse mix van geroosterd vlees, vaak kip, varkensvlees en worst met rijst, bami of groente."
    },
    "cookingProfile": {
      "en": "Expect sliced roasted meats with sweet-salty glaze and fatty edges rather than one single cut.",
      "zh": "通常是多种切片烤肉，带甜咸酱香和脂香，不是一整块单一肉排。",
      "nl": "Verwacht plakjes geroosterd vlees met zoet-zoute glans en vette randjes, geen enkel stuk vlees."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "meat"
      ],
      "description": {
        "en": "A Dutch-Surinamese meat-counter classic where pork presence must be visible to users.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "chicken",
        30,
        "roast meat"
      ],
      [
        "pork",
        30,
        "roast meat"
      ],
      [
        "sausage-global",
        15,
        "sausage slices"
      ],
      [
        "steamed-rice",
        15,
        "common base"
      ],
      [
        "ketjap-manis",
        5,
        "sweet soy glaze",
        "seasoning"
      ],
      [
        "sambal",
        5,
        "optional heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "sweet soy glaze",
      "roasted mixed meats",
      "sambal heat"
    ],
    "basicTaste": [
      "savory",
      "sweet-salty",
      "meaty",
      "smoky"
    ],
    "textureProfile": [
      "mixed meat textures",
      "glazed edges",
      "fatty bites"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-soy",
      "contains-gluten",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "meat-lover",
      "comfort-food"
    ],
    "avoidIfTags": [
      "no-pork",
      "soy-free",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Best for meat lovers; ask before ordering if you avoid pork.",
      "zh": "适合喜欢多种烤肉的人；不吃猪肉一定要先确认。",
      "nl": "Vooral goed voor vleesliefhebbers; vraag na als je geen varkensvlees eet."
    },
    "spiceLevel": 1,
    "weightLevel": 5,
    "restaurantVariationLevel": "high",
    "confidenceTag": "audited-world-truth-batch-022",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1
  }),
  starterDish({
    "id": "nasi-surinamese",
    "metadataCode": "126009",
    "cuisineId": "surinamese",
    "names": {
      "en": "Surinamese Nasi",
      "zh": "苏里南炒饭",
      "nl": "Surinaamse nasi",
      "local": "nasi"
    },
    "category": "rice",
    "cookingMethods": [
      "stir-fried"
    ],
    "shortDescription": {
      "en": "Dutch-Surinamese fried rice seasoned with soy, masala-like spices, sambal, vegetables, egg, and often chicken.",
      "zh": "荷兰苏里南风格炒饭，常用酱油、香料、sambal、蔬菜、鸡蛋和鸡肉调味。",
      "nl": "Dutch-Surinaamse gebakken rijst met soja, kruiding, sambal, groente, ei en vaak kip."
    },
    "cookingProfile": {
      "en": "Stir-fried with soy-style seasoning and sambal, so it is glossy, savory, and lightly oily.",
      "zh": "用酱油式调味和 sambal 快炒，整体油润咸香。",
      "nl": "Gebakken met soja-achtige kruiding en sambal; glanzend, hartig en licht olieachtig."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "comfort-food",
        "rice"
      ],
      "description": {
        "en": "A Dutch-Surinamese takeaway staple where soy, egg, and heat are the main checks.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "steamed-rice",
        55,
        "stir-fried base"
      ],
      [
        "chicken",
        15,
        "common protein"
      ],
      [
        "egg",
        10,
        "scrambled egg"
      ],
      [
        "mixed-vegetables",
        10,
        "vegetables"
      ],
      [
        "ketjap-manis",
        5,
        "sweet soy seasoning",
        "seasoning"
      ],
      [
        "sambal",
        5,
        "chili heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "ketjap manis",
      "sambal",
      "Dutch-Surinamese wok seasoning"
    ],
    "basicTaste": [
      "savory",
      "sweet-salty",
      "mildly spicy"
    ],
    "textureProfile": [
      "separate fried rice",
      "small vegetable bits",
      "light oily gloss"
    ],
    "riskFlags": [
      "contains-soy",
      "contains-gluten",
      "contains-egg",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food",
      "quick-meal"
    ],
    "avoidIfTags": [
      "soy-free",
      "egg-free",
      "spice-sensitive"
    ],
    "orderVerdict": {
      "en": "A filling, familiar choice; choose nasi for rice texture or bami for springy noodles.",
      "zh": "这是饱腹且熟悉的选择；想吃米粒选 nasi，想吃弹性面条选 bami。",
      "nl": "Een vullende vertrouwde keuze; kies nasi voor rijsttextuur of bami voor veerkrachtige noedels."
    },
    "spiceLevel": 2,
    "weightLevel": 4,
    "restaurantVariationLevel": "high",
    "confidenceTag": "audited-world-truth-batch-022",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1
  }),
  starterDish({
    "id": "bami-surinamese",
    "metadataCode": "126010",
    "cuisineId": "surinamese",
    "names": {
      "en": "Surinamese Bami",
      "zh": "苏里南炒面",
      "nl": "Surinaamse bami",
      "local": "bami"
    },
    "category": "noodle",
    "cookingMethods": [
      "stir-fried"
    ],
    "shortDescription": {
      "en": "Dutch-Surinamese fried wheat noodles with soy-style seasoning, sambal, vegetables, egg, and often chicken.",
      "zh": "荷兰苏里南风格炒小麦面，常有酱油式调味、sambal、蔬菜、鸡蛋和鸡肉。",
      "nl": "Dutch-Surinaamse gebakken tarwenoedels met soja-achtige kruiding, sambal, groente, ei en vaak kip."
    },
    "cookingProfile": {
      "en": "Stir-fried with soy-style seasoning and sambal, so it is glossy, savory, and lightly oily.",
      "zh": "用酱油式调味和 sambal 快炒，整体油润咸香。",
      "nl": "Gebakken met soja-achtige kruiding en sambal; glanzend, hartig en licht olieachtig."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "comfort-food",
        "noodle"
      ],
      "description": {
        "en": "A Dutch-Surinamese takeaway staple where soy, egg, and heat are the main checks.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "wheat-noodles",
        55,
        "stir-fried base"
      ],
      [
        "chicken",
        15,
        "common protein"
      ],
      [
        "egg",
        10,
        "scrambled egg"
      ],
      [
        "mixed-vegetables",
        10,
        "vegetables"
      ],
      [
        "ketjap-manis",
        5,
        "sweet soy seasoning",
        "seasoning"
      ],
      [
        "sambal",
        5,
        "chili heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "ketjap manis",
      "sambal",
      "Dutch-Surinamese wok seasoning"
    ],
    "basicTaste": [
      "savory",
      "sweet-salty",
      "mildly spicy"
    ],
    "textureProfile": [
      "springy fried noodles",
      "glossy seasoning",
      "small vegetable bits"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-soy",
      "contains-egg",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food",
      "quick-meal"
    ],
    "avoidIfTags": [
      "soy-free",
      "egg-free",
      "spice-sensitive"
    ],
    "orderVerdict": {
      "en": "A filling, familiar choice; choose nasi for rice texture or bami for springy noodles.",
      "zh": "这是饱腹且熟悉的选择；想吃米粒选 nasi，想吃弹性面条选 bami。",
      "nl": "Een vullende vertrouwde keuze; kies nasi voor rijsttextuur of bami voor veerkrachtige noedels."
    },
    "spiceLevel": 2,
    "weightLevel": 4,
    "restaurantVariationLevel": "high",
    "confidenceTag": "audited-world-truth-batch-022",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1
  }),
  starterDish({
    "id": "peanut-soup-surinamese",
    "metadataCode": "126011",
    "cuisineId": "surinamese",
    "names": {
      "en": "Surinamese Peanut Soup",
      "zh": "苏里南花生汤",
      "nl": "Surinaamse pindasoep",
      "local": "pindasoep"
    },
    "category": "soup",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Thick Surinamese peanut soup, often with chicken, rice or plantain, and sometimes salted meat.",
      "zh": "浓稠苏里南花生汤，常配鸡肉、米饭或大蕉，有些版本会加入咸肉。",
      "nl": "Dikke Surinaamse pindasoep, vaak met kip, rijst of bakbanaan en soms zout vlees."
    },
    "cookingProfile": {
      "en": "Simmered into a creamy, nutty soup that feels closer to a meal than a light starter.",
      "zh": "慢煮成浓厚花生汤，坚果香明显，更像一餐而不是清淡前菜。",
      "nl": "Langzaam gekookt tot een romige, nootachtige soep die meer maaltijd dan licht voorgerecht is."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "soup",
        "comfort-food"
      ],
      "description": {
        "en": "A Surinamese comfort soup where peanut allergy is the decisive ordering risk.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "peanuts",
        35,
        "peanut base"
      ],
      [
        "broth",
        25,
        "soup liquid"
      ],
      [
        "chicken",
        15,
        "protein"
      ],
      [
        "steamed-rice",
        10,
        "starch"
      ],
      [
        "plantain",
        10,
        "sweet starchy side"
      ],
      [
        "chili",
        5,
        "optional heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "ground peanuts",
      "chicken broth",
      "optional chili"
    ],
    "basicTaste": [
      "nutty",
      "creamy",
      "savory",
      "slightly sweet"
    ],
    "textureProfile": [
      "thick soup",
      "soft starch",
      "tender chicken"
    ],
    "riskFlags": [
      "contains-peanut",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food",
      "soup"
    ],
    "avoidIfTags": [
      "peanut-allergy",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Very good if you want a rich soup, but it is a clear no for peanut allergy.",
      "zh": "想喝浓厚、有饱腹感的汤很适合；花生过敏者不要点。",
      "nl": "Heel goed als je rijke soep wilt; absoluut vermijden bij pinda-allergie."
    },
    "spiceLevel": 1,
    "weightLevel": 4,
    "confidenceTag": "audited-world-truth-batch-022",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "bojo",
    "metadataCode": "126012",
    "cuisineId": "surinamese",
    "names": {
      "en": "Bojo",
      "zh": "苏里南椰香木薯糕",
      "nl": "Bojo",
      "local": "bojo"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Dense Surinamese cassava-coconut cake, usually sweet, moist, and gently spiced.",
      "zh": "苏里南木薯椰子糕，质地湿润紧实，甜味和椰香明显。",
      "nl": "Dichte Surinaamse cassave-kokoscake, meestal zoet, vochtig en licht gekruid."
    },
    "cookingProfile": {
      "en": "Baked into a chewy, moist slab rather than a fluffy sponge cake.",
      "zh": "烤成湿润有嚼感的糕块，不是蓬松海绵蛋糕。",
      "nl": "Gebakken tot een vochtige, kauwbare plak, niet tot luchtige cake."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "dessert",
        "comfort-food"
      ],
      "description": {
        "en": "A common Surinamese dessert whose cassava texture should be explained clearly.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "cassava",
        45,
        "grated starch base"
      ],
      [
        "toasted-coconut",
        20,
        "coconut body"
      ],
      [
        "sugar",
        15,
        "sweetness"
      ],
      [
        "coconut-milk",
        10,
        "moisture",
        "seasoning"
      ],
      [
        "cinnamon",
        5,
        "warm spice",
        "seasoning"
      ],
      [
        "butter",
        5,
        "richness"
      ]
    ],
    "distinctiveFlavorSources": [
      "cassava chew",
      "coconut milk",
      "cinnamon"
    ],
    "basicTaste": [
      "sweet",
      "coconutty",
      "mildly spiced"
    ],
    "textureProfile": [
      "dense",
      "moist",
      "chewy"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert"
    ],
    "avoidIfTags": [
      "wants-light-dessert",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Order if you like dense coconut-cassava desserts; skip if you expect airy cake.",
      "zh": "喜欢湿润紧实的木薯椰子甜点可以点；期待松软蛋糕就不一定合适。",
      "nl": "Neem dit als je dichte kokos-cassavedesserts lekker vindt; niet ideaal als je luchtige cake verwacht."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "confidenceTag": "audited-world-truth-batch-022",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "doro-wat",
    "metadataCode": "127001",
    "cuisineId": "ethiopian",
    "names": {
      "en": "Doro Wat",
      "zh": "埃塞俄比亚辣鸡炖菜",
      "nl": "Doro wat",
      "local": "doro wat"
    },
    "category": "meat",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Ethiopian chicken stew with berbere, onions, spiced butter, and boiled egg, usually eaten with injera.",
      "zh": "埃塞俄比亚辣鸡炖菜，用 berbere、洋葱和香料黄油炖鸡，常配水煮蛋和英吉拉。",
      "nl": "Ethiopische kipstoof met berbere, ui, gekruide boter en gekookt ei, meestal met injera."
    },
    "cookingProfile": {
      "en": "Served as a thick stew for scooping with injera; the sauce is central, not a side condiment.",
      "zh": "作为浓稠炖菜配英吉拉上桌，酱汁本身就是主体，不只是蘸酱。",
      "nl": "Als dikke stoof voor injera geserveerd; de saus is hoofdzaak, geen losse dip."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "stew"
      ],
      "description": {
        "en": "A verified Ethiopian stew entry focused on sauce texture, injera, and spice risk.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "chicken",
        35,
        "main stew body"
      ],
      [
        "injera",
        20,
        "serving bread"
      ],
      [
        "egg",
        15,
        "boiled egg"
      ],
      [
        "onion",
        10,
        "aromatic"
      ],
      [
        "berbere",
        10,
        "spice base",
        "seasoning"
      ],
      [
        "garlic",
        5,
        "aroma",
        "seasoning"
      ],
      [
        "niter-kibbeh",
        5,
        "spiced butter",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "berbere",
      "injera sourness",
      "slow stew body"
    ],
    "basicTaste": [
      "savory",
      "spiced",
      "earthy"
    ],
    "textureProfile": [
      "thick chile sauce",
      "tender chicken",
      "spongy injera"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-dairy",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "classic-dish",
      "stew"
    ],
    "avoidIfTags": [
      "spice-sensitive"
    ],
    "orderVerdict": {
      "en": "A signature choice if you want deep berbere heat and rich stew; avoid if spicy food or egg is an issue.",
      "zh": "想体验代表性的 berbere 辣炖鸡很适合；怕辣或不能吃蛋要谨慎。",
      "nl": "Een signatuurgerecht voor diepe berbere-pit en rijke stoof; minder geschikt bij pittig eten of ei."
    },
    "spiceLevel": 3,
    "weightLevel": 4,
    "confidenceTag": "audited-world-truth-batch-022",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "tibs",
    "metadataCode": "127002",
    "cuisineId": "ethiopian",
    "names": {
      "en": "Tibs",
      "zh": "埃塞炒烤肉",
      "nl": "Tibs",
      "local": "tibs"
    },
    "category": "meat",
    "cookingMethods": [
      "stir-fried",
      "grilled"
    ],
    "shortDescription": {
      "en": "Ethiopian sautéed or grilled meat, often beef or lamb, cooked with onions, peppers, rosemary, and chili spice.",
      "zh": "埃塞俄比亚炒烤肉，常用牛肉或羊肉配洋葱、甜椒、香草和辣椒香料。",
      "nl": "Ethiopisch gebakken of gegrild vlees, vaak rund of lam, met ui, paprika, kruiden en chili."
    },
    "cookingProfile": {
      "en": "Usually served as browned meat pieces with aromatic vegetables; drier and meatier than wat stews.",
      "zh": "通常是带焦香的肉块和香蔬，比 wat 炖菜更干、更突出肉感。",
      "nl": "Meestal gebruinde stukjes vlees met aromatische groenten; droger en vleziger dan wat-stoof."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "meat"
      ],
      "description": {
        "en": "A flexible Ethiopian meat order where diners should expect browned pieces rather than a soup.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "beef",
        45,
        "meat pieces"
      ],
      [
        "bell-pepper",
        15,
        "vegetable"
      ],
      [
        "onion",
        15,
        "aromatic vegetable"
      ],
      [
        "injera",
        15,
        "serving bread"
      ],
      [
        "berbere",
        5,
        "spice",
        "seasoning"
      ],
      [
        "niter-kibbeh",
        5,
        "spiced fat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "berbere",
      "browned meat",
      "spiced butter"
    ],
    "basicTaste": [
      "savory",
      "spicy",
      "meaty",
      "aromatic"
    ],
    "textureProfile": [
      "browned meat pieces",
      "soft onions",
      "spongy injera"
    ],
    "riskFlags": [
      "contains-dairy",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "meat-lover",
      "classic-dish"
    ],
    "avoidIfTags": [
      "wants-soup",
      "spice-sensitive"
    ],
    "orderVerdict": {
      "en": "Good for meat lovers who want Ethiopian spice without a very saucy stew.",
      "zh": "适合想吃埃塞香料肉、但不想要很多酱汁炖菜的人。",
      "nl": "Goed voor vleesliefhebbers die Ethiopische kruiding willen zonder heel sauzige stoof."
    },
    "spiceLevel": 2,
    "weightLevel": 4,
    "restaurantVariationLevel": "high",
    "confidenceTag": "audited-world-truth-batch-022",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1
  }),
  starterDish({
    "id": "injera-platter",
    "metadataCode": "127003",
    "cuisineId": "ethiopian",
    "names": {
      "en": "Injera Platter",
      "zh": "英吉拉拼盘",
      "nl": "Injera-schotel",
      "local": "injera platter"
    },
    "category": "starter",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Large sour injera flatbread topped with several Ethiopian stews, usually lentils, chickpeas, greens, and sometimes meat.",
      "zh": "大张酸味英吉拉上放多种埃塞炖菜，常见扁豆、鹰嘴豆、绿叶菜，也可能有肉。",
      "nl": "Grote zure injera met meerdere Ethiopische stoofgerechten, vaak linzen, kikkererwten, bladgroen en soms vlees."
    },
    "cookingProfile": {
      "en": "Served as a shared surface: the injera soaks sauces while diners tear pieces by hand.",
      "zh": "通常共食，英吉拉会吸收酱汁，用手撕取搭配炖菜吃。",
      "nl": "Geserveerd als deelgerecht: injera neemt sauzen op en wordt met de hand afgescheurd."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "shareable"
      ],
      "description": {
        "en": "A representative Ethiopian format that explains how the meal is eaten.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "injera",
        45,
        "sour flatbread base"
      ],
      [
        "lentils",
        20,
        "lentil stew"
      ],
      [
        "chickpeas",
        15,
        "shiro or chickpea stew"
      ],
      [
        "collard-greens",
        10,
        "greens"
      ],
      [
        "beef",
        5,
        "optional meat stew",
        "ingredient",
        "medium",
        true
      ],
      [
        "berbere",
        5,
        "spice across stews",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "sour teff injera",
      "berbere stews",
      "shared platter format"
    ],
    "basicTaste": [
      "sour",
      "savory",
      "spiced",
      "earthy"
    ],
    "textureProfile": [
      "spongy injera",
      "soft stews",
      "sauce-soaked bites"
    ],
    "riskFlags": [
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "shareable",
      "classic-dish"
    ],
    "avoidIfTags": [
      "wants-separate-plates",
      "spice-sensitive"
    ],
    "orderVerdict": {
      "en": "Excellent for sharing and tasting several dishes; ask whether the platter is vegetarian or mixed meat.",
      "zh": "很适合分享并一次尝多种炖菜；点前确认是素拼还是含肉拼盘。",
      "nl": "Uitstekend om te delen en meerdere stoofjes te proeven; vraag of het vegetarisch of met vlees is."
    },
    "spiceLevel": 2,
    "weightLevel": 4,
    "restaurantVariationLevel": "high",
    "confidenceTag": "audited-world-truth-batch-022",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1
  }),
  starterDish({
    "id": "shiro",
    "metadataCode": "127004",
    "cuisineId": "ethiopian",
    "names": {
      "en": "Shiro",
      "zh": "埃塞鹰嘴豆粉炖酱",
      "nl": "Shiro",
      "local": "shiro"
    },
    "category": "main",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Smooth Ethiopian chickpea or broad-bean flour stew seasoned with berbere and aromatics.",
      "zh": "埃塞鹰嘴豆粉或豆粉炖酱，质地细滑，常用 berbere 和香料调味。",
      "nl": "Gladde Ethiopische stoof van kikkererwten- of bonenmeel met berbere en aromaten."
    },
    "cookingProfile": {
      "en": "Served as a thick stew for scooping with injera; the sauce is central, not a side condiment.",
      "zh": "作为浓稠炖菜配英吉拉上桌，酱汁本身就是主体，不只是蘸酱。",
      "nl": "Als dikke stoof voor injera geserveerd; de saus is hoofdzaak, geen losse dip."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "stew"
      ],
      "description": {
        "en": "A verified Ethiopian stew entry focused on sauce texture, injera, and spice risk.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "chickpeas",
        50,
        "main stew body"
      ],
      [
        "injera",
        20,
        "serving bread"
      ],
      [
        "onion",
        10,
        "aromatic"
      ],
      [
        "berbere",
        10,
        "spice base",
        "seasoning"
      ],
      [
        "garlic",
        5,
        "aroma",
        "seasoning"
      ],
      [
        "olive-oil",
        5,
        "cooking oil",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "berbere",
      "injera sourness",
      "slow stew body"
    ],
    "basicTaste": [
      "savory",
      "spiced",
      "earthy"
    ],
    "textureProfile": [
      "smooth sauce",
      "spongy injera",
      "soft spoonable body"
    ],
    "riskFlags": [
      "can-be-spicy"
    ],
    "dietaryFlags": [
      "vegan"
    ],
    "goodForTags": [
      "classic-dish",
      "stew"
    ],
    "avoidIfTags": [
      "spice-sensitive"
    ],
    "orderVerdict": {
      "en": "A good vegetarian-friendly choice if you want a smooth, saucy stew with injera.",
      "zh": "想吃顺滑酱感、偏素食友好的埃塞炖菜时可以点。",
      "nl": "Een goede vegetarische keuze als je een gladde, sauzige stoof met injera wilt."
    },
    "spiceLevel": 2,
    "weightLevel": 4,
    "confidenceTag": "audited-world-truth-batch-022",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "misir-wat",
    "metadataCode": "127005",
    "cuisineId": "ethiopian",
    "names": {
      "en": "Misir Wat",
      "zh": "埃塞辣红扁豆炖菜",
      "nl": "Misir wat",
      "local": "misir wat"
    },
    "category": "main",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Ethiopian red lentil stew with berbere, onion, garlic, and warm chili depth.",
      "zh": "埃塞红扁豆炖菜，以 berbere、洋葱和蒜带出温暖辣味。",
      "nl": "Ethiopische rode-linzenstoof met berbere, ui, knoflook en warme chilidiepte."
    },
    "cookingProfile": {
      "en": "Served as a thick stew for scooping with injera; the sauce is central, not a side condiment.",
      "zh": "作为浓稠炖菜配英吉拉上桌，酱汁本身就是主体，不只是蘸酱。",
      "nl": "Als dikke stoof voor injera geserveerd; de saus is hoofdzaak, geen losse dip."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "stew"
      ],
      "description": {
        "en": "A verified Ethiopian stew entry focused on sauce texture, injera, and spice risk.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "lentils",
        50,
        "main stew body"
      ],
      [
        "injera",
        20,
        "serving bread"
      ],
      [
        "onion",
        10,
        "aromatic"
      ],
      [
        "berbere",
        10,
        "spice base",
        "seasoning"
      ],
      [
        "garlic",
        5,
        "aroma",
        "seasoning"
      ],
      [
        "olive-oil",
        5,
        "cooking oil",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "berbere",
      "injera sourness",
      "slow stew body"
    ],
    "basicTaste": [
      "savory",
      "spiced",
      "earthy"
    ],
    "textureProfile": [
      "soft lentils",
      "thick sauce",
      "spongy injera"
    ],
    "riskFlags": [
      "can-be-spicy"
    ],
    "dietaryFlags": [
      "vegan"
    ],
    "goodForTags": [
      "classic-dish",
      "stew"
    ],
    "avoidIfTags": [
      "spice-sensitive"
    ],
    "orderVerdict": {
      "en": "Strong vegetarian pick for lentil depth and berbere heat; not the mildest stew.",
      "zh": "喜欢扁豆厚度和 berbere 辣味时很适合；它不是最温和的炖菜。",
      "nl": "Sterke vegetarische keuze voor linzendiepte en berbere-pit; niet de mildste stoof."
    },
    "spiceLevel": 3,
    "weightLevel": 4,
    "confidenceTag": "audited-world-truth-batch-022",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "gomen",
    "metadataCode": "127006",
    "cuisineId": "ethiopian",
    "names": {
      "en": "Gomen",
      "zh": "埃塞炖绿叶菜",
      "nl": "Gomen",
      "local": "gomen"
    },
    "category": "side",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Ethiopian collard greens or leafy greens gently cooked with onion, garlic, and sometimes spiced butter.",
      "zh": "埃塞炖绿叶菜，常用羽衣甘蓝类叶菜配洋葱、蒜，有些版本加香料黄油。",
      "nl": "Ethiopische bladgroente, zacht gestoofd met ui, knoflook en soms gekruide boter."
    },
    "cookingProfile": {
      "en": "Soft greens with aromatic seasoning; usually milder and lighter than berbere-heavy stews.",
      "zh": "绿叶菜炖到柔软，香味来自洋葱蒜和油脂，通常比重辣炖菜温和。",
      "nl": "Zachte bladgroente met aromatische kruiding; meestal milder en lichter dan berbere-zware stoof."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "side",
        "vegetable"
      ],
      "description": {
        "en": "A useful Ethiopian side for diners looking for greens on a shared platter.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "collard-greens",
        65,
        "greens"
      ],
      [
        "onion",
        15,
        "aromatic"
      ],
      [
        "garlic",
        10,
        "aroma",
        "seasoning"
      ],
      [
        "niter-kibbeh",
        5,
        "spiced butter",
        "seasoning"
      ],
      [
        "injera",
        5,
        "serving bread"
      ]
    ],
    "distinctiveFlavorSources": [
      "soft greens",
      "garlic",
      "spiced butter or oil"
    ],
    "basicTaste": [
      "savory",
      "green",
      "mild",
      "aromatic"
    ],
    "textureProfile": [
      "soft greens",
      "lightly oily",
      "leafy"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "vegetable",
      "side"
    ],
    "avoidIfTags": [
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Good as a lighter side; ask about butter if you need it vegan.",
      "zh": "适合作为较清爽的配菜；如果需要纯素，要确认是否用了香料黄油。",
      "nl": "Goed als lichtere bijgerecht; vraag naar boter als het vegan moet zijn."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "confidenceTag": "audited-world-truth-batch-022",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "kitfo",
    "metadataCode": "127007",
    "cuisineId": "ethiopian",
    "names": {
      "en": "Kitfo",
      "zh": "埃塞生拌牛肉碎",
      "nl": "Kitfo",
      "local": "kitfo"
    },
    "category": "meat",
    "cookingMethods": [
      "raw",
      "assembled"
    ],
    "rawnessLevel": "raw-or-rare",
    "shortDescription": {
      "en": "Ethiopian minced raw or lightly warmed beef mixed with mitmita chili and spiced clarified butter, often with ayib cheese.",
      "zh": "埃塞生或半生牛肉碎，拌 mitmita 辣椒粉和香料澄清黄油，常配 ayib 鲜奶酪。",
      "nl": "Ethiopisch rauw of licht verwarmd gehakt rundvlees met mitmita en gekruide geklaarde boter, vaak met ayib."
    },
    "cookingProfile": {
      "en": "Usually served raw or rare; texture is soft and rich rather than browned.",
      "zh": "通常生食或半生，口感柔软浓郁，不是煎烤焦香路线。",
      "nl": "Meestal rauw of rood geserveerd; de textuur is zacht en rijk, niet gebruind."
    },
    "cuisineRole": {
      "level": "signature",
      "tags": [
        "signature-dish",
        "acquired-taste"
      ],
      "description": {
        "en": "A high-identity Ethiopian dish that must clearly show raw-meat risk.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "beef",
        60,
        "minced raw or rare beef"
      ],
      [
        "niter-kibbeh",
        15,
        "spiced butter",
        "seasoning"
      ],
      [
        "ayib-cheese",
        10,
        "fresh cheese side"
      ],
      [
        "injera",
        10,
        "serving bread"
      ],
      [
        "mitmita",
        5,
        "sharp chili spice",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "raw beef",
      "mitmita",
      "niter kibbeh",
      "ayib cheese"
    ],
    "basicTaste": [
      "meaty",
      "buttery",
      "spicy",
      "rich"
    ],
    "textureProfile": [
      "soft minced beef",
      "buttery coating",
      "crumbly cheese"
    ],
    "riskFlags": [
      "contains-raw-meat",
      "contains-dairy",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "signature-dish",
      "acquired-taste"
    ],
    "avoidIfTags": [
      "pregnant",
      "raw-meat-avoidance",
      "spice-sensitive"
    ],
    "orderVerdict": {
      "en": "Only order if you are comfortable with raw or rare beef and strong chili-butter richness.",
      "zh": "只有能接受生或半生牛肉、辣椒和黄油浓郁感时才建议点。",
      "nl": "Alleen bestellen als je rauw of rood rundvlees en stevige chili-boterrijkdom prettig vindt."
    },
    "spiceLevel": 3,
    "weightLevel": 4,
    "acquiredTasteLevel": 4,
    "confidenceTag": "audited-world-truth-batch-022",
    "metadataConfidence": 0.86,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "firfir",
    "metadataCode": "127008",
    "cuisineId": "ethiopian",
    "names": {
      "en": "Firfir",
      "zh": "英吉拉拌辣炖菜",
      "nl": "Firfir",
      "local": "firfir"
    },
    "category": "main",
    "cookingMethods": [
      "sauce-tossed"
    ],
    "shortDescription": {
      "en": "Torn injera mixed into spicy sauce or leftover stew, sometimes with beef, creating a soft sour-spiced dish.",
      "zh": "撕碎英吉拉拌入辣酱或炖菜，有时加牛肉，形成酸香、柔软、吸满酱汁的主食。",
      "nl": "Gescheurde injera gemengd met pittige saus of stoof, soms met rundvlees, zacht zuur en kruidig."
    },
    "cookingProfile": {
      "en": "The bread is already soaked in sauce, so it arrives soft and integrated rather than separate.",
      "zh": "英吉拉已经吸满酱汁，上桌时是柔软融合的口感，不是面饼和酱分开。",
      "nl": "Het brood is al met saus doordrenkt, dus het komt zacht en gemengd op tafel."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "comfort-food",
        "spicy"
      ],
      "description": {
        "en": "A common Ethiopian comfort format that helps explain sauce-soaked injera.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "injera",
        50,
        "torn bread base"
      ],
      [
        "berbere",
        15,
        "spicy sauce",
        "seasoning"
      ],
      [
        "beef",
        15,
        "optional meat"
      ],
      [
        "tomato",
        10,
        "sauce body"
      ],
      [
        "onion",
        5,
        "aromatic"
      ],
      [
        "niter-kibbeh",
        5,
        "richness",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "sour injera",
      "berbere sauce",
      "spiced butter"
    ],
    "basicTaste": [
      "sour",
      "spicy",
      "savory",
      "saucy"
    ],
    "textureProfile": [
      "soft soaked injera",
      "thick sauce",
      "occasional meat pieces"
    ],
    "riskFlags": [
      "contains-dairy",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food"
    ],
    "avoidIfTags": [
      "wants-crisp-texture",
      "spice-sensitive"
    ],
    "orderVerdict": {
      "en": "Choose it if you like sauce-soaked bread textures; skip if you want distinct crisp elements.",
      "zh": "喜欢面饼吸满酱汁的柔软口感可以点；想要清爽或酥脆就不适合。",
      "nl": "Kies dit als je brood dat saus opneemt lekker vindt; minder geschikt voor frisse of krokante textuur."
    },
    "spiceLevel": 3,
    "weightLevel": 4,
    "restaurantVariationLevel": "high",
    "confidenceTag": "audited-world-truth-batch-022",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1
  }),
  starterDish({
    "id": "bayenetu",
    "metadataCode": "127009",
    "cuisineId": "ethiopian",
    "names": {
      "en": "Beyaynetu",
      "zh": "埃塞素食拼盘",
      "nl": "Beyaynetu",
      "local": "beyaynetu"
    },
    "category": "main",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Ethiopian mixed vegetarian platter on injera, commonly with lentils, shiro, greens, cabbage, and salad-like sides.",
      "zh": "埃塞素食拼盘，在英吉拉上放多种豆类炖菜、绿叶菜、卷心菜和清爽小配菜。",
      "nl": "Ethiopische vegetarische gemengde schotel op injera met linzen, shiro, bladgroente, kool en frisse bijgerechten."
    },
    "cookingProfile": {
      "en": "Served as several soft stews on one injera base, with different spice levels in each portion.",
      "zh": "多种柔软炖菜铺在同一张英吉拉上，每一份辣度和口味略有不同。",
      "nl": "Meerdere zachte stoofjes op een injera, met per onderdeel een ander kruidenniveau."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "vegetarian-friendly"
      ],
      "description": {
        "en": "A representative Ethiopian vegetarian order and a safer entry point than raw meat dishes.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "injera",
        40,
        "base"
      ],
      [
        "lentils",
        20,
        "misir or lentil stew"
      ],
      [
        "chickpeas",
        15,
        "shiro or chickpea stew"
      ],
      [
        "collard-greens",
        10,
        "greens"
      ],
      [
        "cabbage",
        10,
        "vegetable side"
      ],
      [
        "berbere",
        5,
        "spice",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "sour injera",
      "lentil stews",
      "varied vegetarian sauces"
    ],
    "basicTaste": [
      "sour",
      "savory",
      "earthy",
      "spiced"
    ],
    "textureProfile": [
      "spongy injera",
      "soft stews",
      "varied vegetable textures"
    ],
    "riskFlags": [
      "can-be-spicy"
    ],
    "dietaryFlags": [
      "vegan"
    ],
    "goodForTags": [
      "vegetarian-friendly",
      "shareable"
    ],
    "avoidIfTags": [
      "spice-sensitive"
    ],
    "orderVerdict": {
      "en": "One of the best first Ethiopian orders if you want variety without committing to one stew.",
      "zh": "想第一次尝埃塞菜又想多样化时很适合，不必只押一个炖菜。",
      "nl": "Een van de beste eerste Ethiopische keuzes als je variatie wilt zonder één stoof te kiezen."
    },
    "spiceLevel": 2,
    "weightLevel": 4,
    "confidenceTag": "audited-world-truth-batch-022",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "asa-tibs",
    "metadataCode": "127010",
    "cuisineId": "ethiopian",
    "names": {
      "en": "Asa Tibs",
      "zh": "埃塞煎鱼块",
      "nl": "Asa tibs",
      "local": "asa tibs"
    },
    "category": "seafood",
    "cookingMethods": [
      "fried",
      "grilled"
    ],
    "shortDescription": {
      "en": "Ethiopian fish tibs: fried or sautéed fish pieces with onions, peppers, chili, and lemon or lime.",
      "zh": "埃塞鱼版 tibs，鱼块煎炸或快炒，配洋葱、甜椒、辣椒和柠檬酸香。",
      "nl": "Ethiopische vis-tibs: gebakken visstukken met ui, paprika, chili en citroen of limoen."
    },
    "cookingProfile": {
      "en": "Fish pieces are browned at the edges and served with aromatic vegetables rather than a heavy sauce.",
      "zh": "鱼块边缘有煎香，配香蔬上桌，不是厚重酱汁炖鱼。",
      "nl": "Visstukken zijn aan de rand gebakken en komen met aromatische groente, niet in zware saus."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "seafood",
        "classic-dish"
      ],
      "description": {
        "en": "A useful fish option within Ethiopian restaurants for diners avoiding red meat.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "fish-fillet",
        55,
        "fish pieces"
      ],
      [
        "bell-pepper",
        15,
        "vegetable"
      ],
      [
        "onion",
        10,
        "aromatic"
      ],
      [
        "injera",
        10,
        "serving bread"
      ],
      [
        "berbere",
        5,
        "spice",
        "seasoning"
      ],
      [
        "lime",
        5,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "fried fish edges",
      "berbere",
      "lime"
    ],
    "basicTaste": [
      "savory",
      "fishy",
      "spicy",
      "citrusy"
    ],
    "textureProfile": [
      "flaky fish",
      "browned edges",
      "soft vegetables"
    ],
    "riskFlags": [
      "contains-fish",
      "can-be-spicy"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "seafood"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "spice-sensitive"
    ],
    "orderVerdict": {
      "en": "Good if you want Ethiopian flavors in a fish format; expect spice and bones depending on the restaurant.",
      "zh": "想用鱼来体验埃塞香料可以点；不同餐厅可能有鱼刺和辣度差异。",
      "nl": "Goed als je Ethiopische smaken met vis wilt; reken op pit en soms graat afhankelijk van restaurant."
    },
    "spiceLevel": 2,
    "weightLevel": 3,
    "restaurantVariationLevel": "medium",
    "confidenceTag": "audited-world-truth-batch-022",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1
  }),
  starterDish({
    "id": "sambusa",
    "metadataCode": "127011",
    "cuisineId": "ethiopian",
    "names": {
      "en": "Sambusa",
      "zh": "埃塞炸三角饺",
      "nl": "Sambusa",
      "local": "sambusa"
    },
    "category": "fried-snack",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "Crisp triangular Ethiopian pastry filled with lentils, onions, spices, or sometimes minced meat.",
      "zh": "埃塞炸三角酥皮，常夹扁豆、洋葱和香料，也可能有肉末版本。",
      "nl": "Krokant Ethiopisch driehoekig deegpakketje met linzen, ui, kruiden of soms gehakt."
    },
    "cookingProfile": {
      "en": "Fried until crisp and light, with a dry spiced filling rather than a saucy center.",
      "zh": "炸到外壳酥脆，内馅偏干香，不是会流汁的馅料。",
      "nl": "Gefrituurd tot krokant en licht, met droge kruidige vulling in plaats van saus."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "fried-snack",
        "starter"
      ],
      "description": {
        "en": "A familiar appetizer where gluten and frying are the main ordering cues.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "wheat-flour",
        45,
        "pastry wrapper"
      ],
      [
        "lentils",
        30,
        "common filling"
      ],
      [
        "onion",
        10,
        "aromatic"
      ],
      [
        "beef",
        5,
        "optional meat filling",
        "ingredient",
        "medium",
        true
      ],
      [
        "cumin",
        5,
        "spice",
        "seasoning"
      ],
      [
        "berbere",
        5,
        "heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "fried pastry",
      "lentil filling",
      "warm spice"
    ],
    "basicTaste": [
      "savory",
      "spiced",
      "fried"
    ],
    "textureProfile": [
      "crisp shell",
      "soft dry filling"
    ],
    "riskFlags": [
      "contains-gluten",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "starter",
      "fried-snack"
    ],
    "avoidIfTags": [
      "gluten-free",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Easy starter if you like fried pastry; ask about meat filling if vegetarian.",
      "zh": "喜欢炸酥皮前菜可以点；素食者要确认是不是肉馅。",
      "nl": "Makkelijke starter als je gefrituurd deeg lekker vindt; vraag naar vleesvulling als je vegetarisch eet."
    },
    "spiceLevel": 1,
    "weightLevel": 2,
    "restaurantVariationLevel": "medium",
    "confidenceTag": "audited-world-truth-batch-022",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1
  }),
  starterDish({
    "id": "ethiopian-coffee-snacks",
    "metadataCode": "127012",
    "cuisineId": "ethiopian",
    "names": {
      "en": "Ethiopian Coffee Sweets",
      "zh": "埃塞咖啡小甜点",
      "nl": "Ethiopische koffiesnacks",
      "local": "buna snacks"
    },
    "category": "dessert",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Small snacks served around Ethiopian coffee, often popcorn, roasted grains, sweet breads, or simple sweets.",
      "zh": "埃塞咖啡仪式或咖啡旁的小食，可能是爆米花、烤谷物、甜面包或简单甜点。",
      "nl": "Kleine snacks rond Ethiopische koffie, vaak popcorn, geroosterde granen, zoet brood of eenvoudige zoetigheden."
    },
    "cookingProfile": {
      "en": "Usually light finger snacks alongside strong coffee, not one fixed plated dessert.",
      "zh": "通常是配浓咖啡的小食组合，不是固定的一道盘装甜点。",
      "nl": "Meestal lichte hapjes naast sterke koffie, geen vast borddessert."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "coffee",
        "dessert"
      ],
      "description": {
        "en": "A coffee-service reference where the card should warn that the exact snack set varies widely.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "corn",
        35,
        "popcorn or roasted grain"
      ],
      [
        "bread",
        25,
        "sweet bread or biscuit"
      ],
      [
        "sugar",
        15,
        "sweetness"
      ],
      [
        "peanuts",
        10,
        "roasted snack",
        "ingredient",
        "high",
        true
      ],
      [
        "coffee",
        10,
        "coffee pairing",
        "seasoning"
      ],
      [
        "cinnamon",
        5,
        "optional warmth",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "strong coffee",
      "roasted grain",
      "simple sweet snacks"
    ],
    "basicTaste": [
      "sweet",
      "roasty",
      "mild",
      "snack-like"
    ],
    "textureProfile": [
      "crisp popcorn",
      "small sweets",
      "variable bite sizes"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-peanut"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "coffee",
      "dessert"
    ],
    "avoidIfTags": [
      "peanut-allergy",
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Good with coffee, but treat it as a variable snack assortment and ask about nuts.",
      "zh": "适合配咖啡，但应理解为变化很大的小食组合，坚果过敏要先问。",
      "nl": "Goed bij koffie, maar zie het als wisselende snackmix en vraag naar noten."
    },
    "spiceLevel": 0,
    "weightLevel": 1,
    "restaurantVariationLevel": "high",
    "confidenceTag": "audited-world-truth-batch-022",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1
  }),
  starterDish({
    "cuisineId": "scandinavian",
    "confidenceTag": "audited-scandinavian-batch-013",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 2,
    "id": "gravlax",
    "metadataCode": "128001",
    "names": {
      "en": "Gravlax",
      "zh": "莳萝腌三文鱼",
      "nl": "Gravlax",
      "local": "Gravlax"
    },
    "category": "seafood",
    "cookingMethods": [
      "raw",
      "chilled"
    ],
    "servingTemperature": "cold-or-cool",
    "rawnessLevel": "cured-raw",
    "shortDescription": {
      "en": "Cured salmon served cold with dill, mustard sauce, bread, or potatoes.",
      "zh": "冷食腌三文鱼，常配莳萝、芥末酱、面包或土豆。",
      "nl": "Koud gepekelde zalm met dille, mosterdsaus, brood of aardappel."
    },
    "cookingProfile": {
      "en": "Expect silky cold salmon with a sweet-salty cure rather than cooked fish.",
      "zh": "口感是冷的丝滑三文鱼，带甜咸腌制味，不是熟鱼。",
      "nl": "Verwacht koude zijdezachte zalm met zoet-zoute pekel, geen gegaarde vis."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "seafood"
      ],
      "description": {
        "en": "A classic Nordic starter where salmon texture and dill are central.",
        "zh": "经典北欧前菜，重点是三文鱼质地和莳萝香气。",
        "nl": "Een klassieke Noordse starter waarin zalmtextuur en dille centraal staan."
      }
    },
    "composition": [
      [
        "salmon",
        75,
        "cured salmon"
      ],
      [
        "rye-bread",
        10,
        "bread side"
      ],
      [
        "mustard",
        5,
        "sauce",
        "seasoning"
      ],
      [
        "dill",
        5,
        "herb",
        "seasoning"
      ],
      [
        "lemon",
        5,
        "brightness"
      ]
    ],
    "distinctiveFlavorSources": [
      "cured salmon",
      "dill",
      "mustard sauce"
    ],
    "basicTaste": [
      "salty",
      "fresh",
      "sweet-savory"
    ],
    "textureProfile": [
      "silky salmon",
      "cool slices",
      "soft bread side"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-raw-fish",
      "contains-gluten"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "seafood",
      "starter"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "avoids-raw-fish",
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "A strong cold starter if you enjoy cured salmon and dill.",
      "zh": "喜欢冷食腌三文鱼和莳萝香时很适合。",
      "nl": "Een sterke koude starter als je gepekelde zalm en dille lekker vindt."
    },
    "weightLevel": 2,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "cuisineId": "scandinavian",
    "confidenceTag": "audited-scandinavian-batch-013",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 1,
    "id": "swedish-meatballs",
    "metadataCode": "128002",
    "names": {
      "en": "Swedish Meatballs",
      "zh": "瑞典肉丸",
      "nl": "Zweedse gehaktballetjes",
      "local": "Köttbullar"
    },
    "category": "meat",
    "cookingMethods": [
      "fried",
      "simmered"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Small meatballs with cream gravy, potatoes, lingonberry jam, and often pickled cucumber.",
      "zh": "小肉丸配奶油肉汁、土豆、越橘果酱，常有腌黄瓜。",
      "nl": "Kleine gehaktballetjes met roomjus, aardappel, vossenbessenjam en vaak augurk."
    },
    "cookingProfile": {
      "en": "The plate is mild, creamy, and comforting, with sweet-tart jam on the side.",
      "zh": "整体温和、有奶油肉汁的舒适感，旁边果酱带酸甜。",
      "nl": "Mild, romig en troostend, met zoetzure jam ernaast."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A widely recognized Swedish classic and safe first-time Nordic order.",
        "zh": "很有辨识度的瑞典经典菜，也是第一次点北欧菜的安全选择。",
        "nl": "Een herkenbare Zweedse klassieker en veilige eerste Noordse keuze."
      }
    },
    "composition": [
      [
        "ground-meat",
        40,
        "meatballs"
      ],
      [
        "potato",
        25,
        "side"
      ],
      [
        "cream",
        15,
        "gravy"
      ],
      [
        "lingonberry-jam",
        10,
        "sweet-tart side"
      ],
      [
        "pickles",
        5,
        "sharp side"
      ],
      [
        "allspice",
        5,
        "warm spice",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream gravy",
      "lingonberry jam",
      "warm spice"
    ],
    "basicTaste": [
      "savory",
      "creamy",
      "sweet-tart"
    ],
    "textureProfile": [
      "soft meatballs",
      "smooth gravy",
      "soft potatoes"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "safe-choice",
      "comfort-food"
    ],
    "avoidIfTags": [
      "dairy-free",
      "gluten-free",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "A safe, filling choice if you want mild meat, gravy, and potatoes.",
      "zh": "想吃温和、顶饱的肉丸肉汁土豆组合时很稳。",
      "nl": "Een veilige, vullende keuze voor mild vlees, jus en aardappels."
    },
    "weightLevel": 4,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "cuisineId": "scandinavian",
    "confidenceTag": "audited-scandinavian-batch-013",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 1,
    "id": "smorrebrod",
    "metadataCode": "128003",
    "names": {
      "en": "Smorrebrod",
      "zh": "丹麦开放三明治",
      "nl": "Smorrebrod",
      "local": "Smørrebrød"
    },
    "category": "open-sandwich",
    "cookingMethods": [
      "assembled"
    ],
    "servingTemperature": "cold-or-cool",
    "rawnessLevel": "assembled",
    "shortDescription": {
      "en": "Danish open-faced rye sandwich with layered toppings such as shrimp, egg, herring, roast meat, or vegetables.",
      "zh": "丹麦开放式黑麦三明治，上面可放虾、鸡蛋、鲱鱼、冷肉或蔬菜。",
      "nl": "Deense open roggebroodsnede met toppings zoals garnalen, ei, haring, vlees of groenten."
    },
    "cookingProfile": {
      "en": "It is compact but topping-heavy; check the topping because allergens vary a lot.",
      "zh": "分量不一定大但配料很集中；过敏风险取决于具体配料。",
      "nl": "Compact maar rijk belegd; controleer de topping omdat allergenen sterk wisselen."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "lunch"
      ],
      "description": {
        "en": "A defining Danish lunch format rather than one single topping.",
        "zh": "丹麦午餐代表形式，本身是一类开放三明治。",
        "nl": "Een bepalend Deens lunchformat, geen enkele vaste topping."
      }
    },
    "composition": [
      [
        "rye-bread",
        40,
        "base"
      ],
      [
        "shrimp",
        20,
        "common topping"
      ],
      [
        "egg",
        15,
        "common topping"
      ],
      [
        "herring",
        10,
        "common fish topping"
      ],
      [
        "mayonnaise",
        10,
        "creamy dressing"
      ],
      [
        "dill",
        5,
        "herb",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "dense rye bread",
      "cold toppings",
      "dill",
      "creamy dressing"
    ],
    "basicTaste": [
      "savory",
      "fresh",
      "briny"
    ],
    "textureProfile": [
      "dense bread",
      "cold toppings",
      "creamy garnish"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-shellfish",
      "contains-fish",
      "contains-egg"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "lunch",
      "classic-dish"
    ],
    "avoidIfTags": [
      "gluten-free",
      "shellfish-allergy",
      "fish-allergy",
      "egg-free"
    ],
    "orderVerdict": {
      "en": "Great for a Danish lunch, but choose the topping carefully.",
      "zh": "想吃丹麦午餐很适合，但要仔细看上面的配料。",
      "nl": "Goed voor een Deense lunch, maar kies de topping zorgvuldig."
    },
    "weightLevel": 2,
    "restaurantVariationLevel": "high"
  }),
  starterDish({
    "cuisineId": "scandinavian",
    "confidenceTag": "audited-scandinavian-batch-013",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 4,
    "id": "pickled-herring",
    "metadataCode": "128004",
    "names": {
      "en": "Pickled Herring",
      "zh": "腌鲱鱼",
      "nl": "Ingelegde haring",
      "local": "Sill"
    },
    "category": "seafood",
    "cookingMethods": [
      "chilled"
    ],
    "servingTemperature": "cold-or-cool",
    "rawnessLevel": "cured-raw",
    "shortDescription": {
      "en": "Cold pickled herring with onion, potatoes, capers, dill, or sour cream.",
      "zh": "冷食腌鲱鱼，常配洋葱、土豆、酸豆、莳萝或酸奶油。",
      "nl": "Koude ingelegde haring met ui, aardappel, kappertjes, dille of zure room."
    },
    "cookingProfile": {
      "en": "Expect a tangy, briny cold fish bite with a pronounced cured flavor.",
      "zh": "口感是冷的酸咸鱼味，腌制感明显。",
      "nl": "Verwacht een zure, zilte koude visbeet met duidelijke pekelsmaak."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "acquired-taste"
      ],
      "description": {
        "en": "A classic Nordic cold fish item, common in herring plates and buffets.",
        "zh": "经典北欧冷鱼菜，常见于鲱鱼拼盘和自助餐。",
        "nl": "Een klassieke Noordse koude vis, vaak op haringborden en buffetten."
      }
    },
    "composition": [
      [
        "herring",
        70,
        "pickled fish"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "onion",
        5,
        "sharp garnish"
      ],
      [
        "vinegar",
        5,
        "pickling tang",
        "seasoning"
      ],
      [
        "dill",
        5,
        "herb",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "herring",
      "vinegar pickle",
      "dill"
    ],
    "basicTaste": [
      "briny",
      "sour",
      "sharp"
    ],
    "textureProfile": [
      "silky fish",
      "cold slices",
      "firm potato side"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-raw-fish"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "classic-dish"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "avoids-raw-fish",
      "dislikes-vinegar"
    ],
    "orderVerdict": {
      "en": "Worth ordering if you like cold cured fish; not a neutral first bite.",
      "zh": "喜欢冷腌鱼可以点；它不是中性温和的第一口。",
      "nl": "Interessant als je koude gepekelde vis lekker vindt; geen neutrale eerste hap."
    },
    "weightLevel": 2,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "cuisineId": "scandinavian",
    "confidenceTag": "audited-scandinavian-batch-013",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 1,
    "id": "fiskesuppe",
    "metadataCode": "128005",
    "names": {
      "en": "Fiskesuppe",
      "zh": "北欧奶油鱼汤",
      "nl": "Fiskesuppe",
      "local": "Fiskesuppe"
    },
    "category": "soup",
    "cookingMethods": [
      "simmered"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Creamy Nordic fish soup with salmon or white fish, vegetables, dill, and sometimes shellfish.",
      "zh": "北欧奶油鱼汤，常有三文鱼或白鱼、蔬菜、莳萝，有时加贝类。",
      "nl": "Romige Noordse vissoep met zalm of witte vis, groenten, dille en soms schelpdieren."
    },
    "cookingProfile": {
      "en": "The bowl is warming and creamy, with tender fish chunks rather than a clear broth.",
      "zh": "汤体温热奶油感明显，有嫩鱼块，不是清汤。",
      "nl": "Warm en romig, met malse visstukken in plaats van heldere bouillon."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "soup"
      ],
      "description": {
        "en": "A common Nordic fish-house soup where cream and dill soften the seafood flavor.",
        "zh": "北欧鱼餐厅常见汤，奶油和莳萝会柔化海鲜味。",
        "nl": "Een veelvoorkomende Noordse vissoep waarin room en dille de vissmaak verzachten."
      }
    },
    "composition": [
      [
        "salmon",
        30,
        "fish"
      ],
      [
        "fish-fillet",
        20,
        "white fish"
      ],
      [
        "potato",
        20,
        "body"
      ],
      [
        "carrot",
        10,
        "vegetable"
      ],
      [
        "cream",
        15,
        "broth"
      ],
      [
        "dill",
        5,
        "herb",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "fish broth",
      "cream",
      "dill"
    ],
    "basicTaste": [
      "creamy",
      "savory",
      "mild"
    ],
    "textureProfile": [
      "creamy broth",
      "tender fish",
      "soft vegetables"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-dairy"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "soup",
      "seafood"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "A comforting seafood soup if you want something warm and not too sharp.",
      "zh": "想吃温暖、柔和的海鲜汤时很合适。",
      "nl": "Een troostende vissoep als je iets warms en niet te scherps wilt."
    },
    "weightLevel": 3,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "cuisineId": "scandinavian",
    "confidenceTag": "audited-scandinavian-batch-013",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 3,
    "id": "reindeer-stew",
    "metadataCode": "128006",
    "names": {
      "en": "Reindeer Stew",
      "zh": "驯鹿肉炖菜",
      "nl": "Rendierstoof",
      "local": "Renskav"
    },
    "category": "meat",
    "cookingMethods": [
      "braised"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Nordic reindeer stew with potatoes or mash, root vegetables, and lingonberry jam.",
      "zh": "北欧驯鹿肉炖菜，常配土豆或土豆泥、根茎蔬菜和越橘果酱。",
      "nl": "Noordse rendierstoof met aardappel of puree, wortelgroenten en vossenbessenjam."
    },
    "cookingProfile": {
      "en": "Expect lean game meat softened by gravy, with tart jam balancing the richness.",
      "zh": "驯鹿肉较瘦，靠肉汁变柔和，越橘果酱带酸甜平衡。",
      "nl": "Verwacht mager wildvlees in jus, met zure jam als balans."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "regional-dish",
        "acquired-taste"
      ],
      "description": {
        "en": "A northern Nordic and Sami-associated game dish with a distinctive meat flavor.",
        "zh": "北欧北部和萨米文化相关的野味菜，肉味有辨识度。",
        "nl": "Een noordelijk Noordse en Sami-geassocieerde wildschotel met uitgesproken vleessmaak."
      }
    },
    "composition": [
      [
        "reindeer",
        45,
        "meat"
      ],
      [
        "potato",
        30,
        "mash or side"
      ],
      [
        "mixed-vegetables",
        10,
        "root vegetables"
      ],
      [
        "lingonberry-jam",
        10,
        "tart side"
      ],
      [
        "cream",
        5,
        "gravy richness"
      ]
    ],
    "distinctiveFlavorSources": [
      "reindeer",
      "cream gravy",
      "lingonberry jam"
    ],
    "basicTaste": [
      "savory",
      "gamey",
      "sweet-tart"
    ],
    "textureProfile": [
      "tender meat",
      "soft mash",
      "jam contrast"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "regional-dish",
      "cold-weather"
    ],
    "avoidIfTags": [
      "dairy-free",
      "dislikes-game-meat"
    ],
    "orderVerdict": {
      "en": "Choose this if you want a northern game dish with lingonberry contrast.",
      "zh": "想尝北欧北部野味和越橘酸甜搭配时可以点。",
      "nl": "Kies dit voor noordelijk wild met vossenbessencontrast."
    },
    "weightLevel": 4,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "cuisineId": "scandinavian",
    "confidenceTag": "audited-scandinavian-batch-013",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 1,
    "id": "pyttipanna",
    "metadataCode": "128007",
    "names": {
      "en": "Pyttipanna",
      "zh": "北欧土豆肉丁煎锅",
      "nl": "Pyttipanna",
      "local": "Pyttipanna"
    },
    "category": "hash",
    "cookingMethods": [
      "fried"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Pan-fried diced potatoes, meat, and onions, often served with a fried egg and pickled beet.",
      "zh": "土豆丁、肉丁和洋葱煎炒，常配煎蛋和腌甜菜。",
      "nl": "Gebakken blokjes aardappel, vlees en ui, vaak met ei en ingelegde biet."
    },
    "cookingProfile": {
      "en": "It is a browned hash: simple, salty, filling, and practical.",
      "zh": "这是煎香的土豆肉丁，简单咸香、很顶饱。",
      "nl": "Een gebakken hash: simpel, zoutig, vullend en praktisch."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common",
        "comfort-food"
      ],
      "description": {
        "en": "A common Swedish-style casual plate for using meat and potatoes together.",
        "zh": "瑞典风格常见家常盘，把肉和土豆放在一起煎。",
        "nl": "Een veelvoorkomend Zweeds huiselijk bord met vlees en aardappel."
      }
    },
    "composition": [
      [
        "potato",
        45,
        "fried cubes"
      ],
      [
        "beef",
        20,
        "meat cubes"
      ],
      [
        "pork",
        15,
        "meat cubes"
      ],
      [
        "onion",
        10,
        "aroma"
      ],
      [
        "egg",
        10,
        "fried topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "browned potato",
      "fried onion",
      "egg"
    ],
    "basicTaste": [
      "savory",
      "salty",
      "simple"
    ],
    "textureProfile": [
      "crisp potato edges",
      "small meat cubes",
      "fried egg"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food",
      "safe-choice"
    ],
    "avoidIfTags": [
      "egg-free",
      "no-pork",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "A practical comfort choice if hash, egg, and potatoes sound good.",
      "zh": "想吃土豆肉丁煎锅和煎蛋时是实用选择。",
      "nl": "Een praktische comfortkeuze als hash, ei en aardappel goed klinken."
    },
    "weightLevel": 4,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "cuisineId": "scandinavian",
    "confidenceTag": "audited-scandinavian-batch-013",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 5,
    "id": "rakfisk",
    "metadataCode": "128008",
    "names": {
      "en": "Rakfisk",
      "zh": "发酵鳟鱼",
      "nl": "Rakfisk",
      "local": "Rakfisk"
    },
    "category": "seafood",
    "cookingMethods": [
      "raw",
      "chilled"
    ],
    "servingTemperature": "cold-or-cool",
    "rawnessLevel": "fermented-raw",
    "shortDescription": {
      "en": "Norwegian fermented trout served cold with flatbread, onion, sour cream, and potatoes.",
      "zh": "挪威发酵鳟鱼，冷食，常配薄饼、洋葱、酸奶油和土豆。",
      "nl": "Noorse gefermenteerde forel, koud geserveerd met platbrood, ui, zure room en aardappel."
    },
    "cookingProfile": {
      "en": "This is pungent, cold, and fermented; the flavor is intentionally strong.",
      "zh": "这是冷食发酵鱼，气味和风味都很强。",
      "nl": "Koud en gefermenteerd, met bewust krachtige geur en smaak."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "regional-dish",
        "acquired-taste"
      ],
      "description": {
        "en": "A traditional Norwegian fermented fish for adventurous diners.",
        "zh": "传统挪威发酵鱼，适合愿意尝试强风味的人。",
        "nl": "Een traditionele Noorse gefermenteerde vis voor avontuurlijke eters."
      }
    },
    "composition": [
      [
        "raw-fish",
        60,
        "fermented trout"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "rye-bread",
        10,
        "flatbread or bread"
      ],
      [
        "sour-cream",
        10,
        "cool side"
      ],
      [
        "onion",
        5,
        "sharp garnish"
      ]
    ],
    "distinctiveFlavorSources": [
      "fermented fish",
      "onion",
      "sour cream"
    ],
    "basicTaste": [
      "briny",
      "sour",
      "pungent"
    ],
    "textureProfile": [
      "silky fish",
      "cold serving",
      "soft potato"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-raw-fish",
      "contains-dairy",
      "contains-gluten"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "regional-dish",
      "adventurous"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "avoids-raw-fish",
      "dislikes-fermented-food",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Only choose this if fermented fish sounds exciting rather than intimidating.",
      "zh": "只有在你愿意尝试发酵鱼强风味时才建议点。",
      "nl": "Kies dit alleen als gefermenteerde vis spannend klinkt in plaats van afschrikwekkend."
    },
    "weightLevel": 2,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "cuisineId": "scandinavian",
    "confidenceTag": "audited-scandinavian-batch-013",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 1,
    "id": "kanelbullar",
    "metadataCode": "128009",
    "names": {
      "en": "Kanelbullar",
      "zh": "瑞典肉桂卷",
      "nl": "Kaneelbroodjes",
      "local": "Kanelbullar"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "servingTemperature": "room-temperature",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Swedish cinnamon-cardamom buns with a soft spiral crumb and pearl sugar.",
      "zh": "瑞典肉桂小豆蔻甜面包卷，面包柔软，常撒珍珠糖。",
      "nl": "Zweedse kaneel-kardemombroodjes met zachte spiraal en parelsuiker."
    },
    "cookingProfile": {
      "en": "It is bready and aromatic, less sticky than many American cinnamon rolls.",
      "zh": "口感偏面包和香料香，不像美式肉桂卷那么黏甜。",
      "nl": "Broodachtig en aromatisch, minder plakkerig dan veel Amerikaanse cinnamon rolls."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "dessert"
      ],
      "description": {
        "en": "A Swedish fika staple and one of the most recognizable Nordic sweets.",
        "zh": "瑞典 fika 代表点心，也是最有辨识度的北欧甜点之一。",
        "nl": "Een Zweedse fika-klassieker en een van de herkenbaarste Noordse zoetigheden."
      }
    },
    "composition": [
      [
        "cardamom-bun",
        70,
        "sweet bun"
      ],
      [
        "cinnamon",
        15,
        "spiced swirl",
        "seasoning"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "sugar",
        5,
        "sweetness"
      ]
    ],
    "distinctiveFlavorSources": [
      "cinnamon",
      "cardamom",
      "butter"
    ],
    "basicTaste": [
      "sweet",
      "warm-spiced",
      "bready"
    ],
    "textureProfile": [
      "soft bun",
      "spiced spiral",
      "pearl sugar crunch"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert",
      "coffee-pairing"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-free",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "A good pastry choice if you want warm spice without a very creamy dessert.",
      "zh": "想吃香料面包甜点、不想要厚奶油时很合适。",
      "nl": "Een goede keuze als je warme specerijen wilt zonder heel romig dessert."
    },
    "weightLevel": 2,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "cuisineId": "scandinavian",
    "confidenceTag": "audited-scandinavian-batch-013",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 1,
    "id": "skagen-toast",
    "metadataCode": "128010",
    "names": {
      "en": "Toast Skagen",
      "zh": "瑞典虾仁吐司",
      "nl": "Toast Skagen",
      "local": "Toast Skagen"
    },
    "category": "starter",
    "cookingMethods": [
      "assembled",
      "toasted"
    ],
    "servingTemperature": "cold-or-cool",
    "rawnessLevel": "assembled",
    "shortDescription": {
      "en": "Toast topped with shrimp salad, mayonnaise or creme fraiche, dill, lemon, and sometimes roe.",
      "zh": "吐司上放虾仁沙拉、蛋黄酱或酸奶油、莳萝、柠檬，有时加鱼籽。",
      "nl": "Toast met garnalensalade, mayonaise of creme fraiche, dille, citroen en soms kuit."
    },
    "cookingProfile": {
      "en": "Expect a cool creamy shrimp topping on crisp toast.",
      "zh": "上层是冷的奶油感虾仁，底部吐司酥脆。",
      "nl": "Verwacht koele romige garnalentopping op krokante toast."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "starter"
      ],
      "description": {
        "en": "A classic Swedish starter where shrimp freshness and dill matter.",
        "zh": "经典瑞典前菜，重点是虾仁新鲜度和莳萝香气。",
        "nl": "Een klassieke Zweedse starter waarin garnalenversheid en dille tellen."
      }
    },
    "composition": [
      [
        "shrimp",
        45,
        "shrimp salad"
      ],
      [
        "rye-bread",
        25,
        "toast"
      ],
      [
        "mayonnaise",
        15,
        "creamy dressing"
      ],
      [
        "lemon",
        5,
        "brightness"
      ],
      [
        "dill",
        5,
        "herb",
        "seasoning"
      ],
      [
        "fish-roe",
        5,
        "optional garnish"
      ]
    ],
    "distinctiveFlavorSources": [
      "shrimp",
      "dill",
      "lemon",
      "creamy dressing"
    ],
    "basicTaste": [
      "briny",
      "creamy",
      "fresh"
    ],
    "textureProfile": [
      "cool shrimp",
      "crisp toast",
      "creamy topping"
    ],
    "riskFlags": [
      "contains-shellfish",
      "contains-egg",
      "contains-gluten",
      "contains-fish"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "starter",
      "seafood"
    ],
    "avoidIfTags": [
      "shellfish-allergy",
      "egg-free",
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "A reliable seafood starter if shrimp and creamy dressing sound appealing.",
      "zh": "喜欢虾仁和奶油沙拉口感时，这是稳妥前菜。",
      "nl": "Een betrouwbare zeevruchtenstarter als garnalen en romige dressing goed klinken."
    },
    "weightLevel": 2,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "cuisineId": "scandinavian",
    "confidenceTag": "audited-scandinavian-batch-013",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 5,
    "id": "lutefisk",
    "metadataCode": "128011",
    "names": {
      "en": "Lutefisk",
      "zh": "碱水鳕鱼",
      "nl": "Lutefisk",
      "local": "Lutefisk"
    },
    "category": "seafood",
    "cookingMethods": [
      "boiled"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Traditional lye-treated white fish, often served with potatoes, peas, bacon, or sauce.",
      "zh": "传统碱处理白鱼，常配土豆、豌豆、培根或酱汁。",
      "nl": "Traditionele met loog behandelde witte vis, vaak met aardappel, erwten, spek of saus."
    },
    "cookingProfile": {
      "en": "The texture is soft and gelatinous, which is the main watch-out.",
      "zh": "质地非常柔软甚至胶质感，这是主要需要注意的点。",
      "nl": "De structuur is zacht en gelatineus; dat is de belangrijkste waarschuwing."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "festival",
        "acquired-taste"
      ],
      "description": {
        "en": "A traditional Nordic holiday fish with a famously divisive texture.",
        "zh": "传统北欧节庆鱼菜，质地很有争议。",
        "nl": "Een traditionele Noordse feestvis met bekend polariserende textuur."
      }
    },
    "composition": [
      [
        "fish-fillet",
        60,
        "treated white fish"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "peas",
        10,
        "side"
      ],
      [
        "bacon",
        5,
        "salty topping"
      ],
      [
        "butter",
        5,
        "richness"
      ]
    ],
    "distinctiveFlavorSources": [
      "treated white fish",
      "butter",
      "bacon"
    ],
    "basicTaste": [
      "mild",
      "salty",
      "buttery"
    ],
    "textureProfile": [
      "very soft fish",
      "gelatinous bite",
      "simple sides"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-pork",
      "contains-dairy"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "festival",
      "adventurous"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "no-pork",
      "dislikes-soft-textures"
    ],
    "orderVerdict": {
      "en": "A cultural experience more than a safe crowd-pleaser; order only if the texture sounds okay.",
      "zh": "更像文化体验，不是大众安全牌；能接受胶质软鱼再点。",
      "nl": "Meer culturele ervaring dan veilige publiekslieveling; bestel alleen als de textuur oké klinkt."
    },
    "weightLevel": 2,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "cloudberry-dessert",
    "metadataCode": "128012",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Cloudberry Dessert",
      "zh": "北欧云莓甜点",
      "nl": "Bergbraamdessert",
      "local": "molte dessert"
    },
    "category": "dessert",
    "cookingMethods": [
      "assembled",
      "chilled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "Nordic dessert built around tart golden cloudberries, often with cream, yogurt, ice cream, or a simple sweet sauce.",
      "zh": "北欧云莓甜点，以金黄色酸甜云莓为主，常配奶油、酸奶、冰淇淋或糖渍果酱。",
      "nl": "Noords dessert rond friszure bergbramen, vaak met room, yoghurt, ijs of een eenvoudige zoete saus."
    },
    "cookingProfile": {
      "en": "Usually served cool with creamy dairy to soften the berry's tartness.",
      "zh": "通常冷吃，乳制品会柔化云莓的酸味。",
      "nl": "Meestal koel geserveerd, met zuivel die de zurigheid van de bes verzacht."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "dessert"
      ],
      "description": {
        "en": "A Nordic berry dessert reference distinct from generic mixed-berry sweets.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "berries",
        45,
        "cloudberry or berry component"
      ],
      [
        "cream",
        25,
        "creamy base"
      ],
      [
        "sugar",
        15,
        "sweetness"
      ],
      [
        "yogurt",
        10,
        "tangy dairy"
      ],
      [
        "vanilla",
        5,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "cloudberry tartness",
      "cream",
      "vanilla"
    ],
    "basicTaste": [
      "sweet",
      "tart",
      "creamy",
      "fruity"
    ],
    "textureProfile": [
      "cool cream",
      "soft berries",
      "jammy sauce"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert",
      "regional-dish"
    ],
    "avoidIfTags": [
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "A good pick if you want a Nordic fruit dessert that is tangier than a standard berry cream.",
      "zh": "想吃北欧特色果味甜点可以点；它通常比普通莓果奶油更酸香。",
      "nl": "Goed als je een Noords fruitdessert wilt dat frisser is dan gewone bessenroom."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "confidenceTag": "audited-world-truth-batch-022",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "ceviche-peruvian",
    "metadataCode": "129001",
    "cuisineId": "peruvian",
    "names": {
      "en": "Peruvian Ceviche",
      "zh": "秘鲁酸橘汁腌鱼",
      "nl": "Peruaanse ceviche",
      "local": "ceviche peruano"
    },
    "category": "raw-seafood",
    "cookingMethods": [
      "raw",
      "assembled"
    ],
    "rawnessLevel": "raw",
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "Peruvian raw white fish cured briefly in lime juice with onion, chili, cilantro, corn, and sweet potato.",
      "zh": "秘鲁酸橘汁腌生白鱼，常配洋葱、辣椒、香菜、玉米和红薯。",
      "nl": "Peruaanse rauwe witte vis kort gegaard in limoensap met ui, chili, koriander, mais en zoete aardappel."
    },
    "cookingProfile": {
      "en": "Served cold and raw with citrus-chili dressing; the acid brightens the fish but does not make it fully cooked.",
      "zh": "冷食生鱼配柑橘辣椒汁，酸汁会提亮鱼味，但不等于完全熟制。",
      "nl": "Koud en rauw geserveerd met citrus-chilidressing; zuur frist op maar gaart niet volledig."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "raw-seafood"
      ],
      "description": {
        "en": "A Peruvian raw-fish reference where rawness must be explicit.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "raw-white-fish",
        45,
        "raw fish"
      ],
      [
        "lime",
        20,
        "citrus cure"
      ],
      [
        "onion",
        10,
        "sharpness"
      ],
      [
        "corn",
        10,
        "side"
      ],
      [
        "sweet-potato",
        10,
        "sweet side"
      ],
      [
        "aji-amarillo",
        5,
        "chili",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "lime leche de tigre",
      "ají amarillo",
      "raw fish"
    ],
    "basicTaste": [
      "bright",
      "sour",
      "fresh",
      "spicy"
    ],
    "textureProfile": [
      "firm raw fish",
      "sharp citrus",
      "soft sweet potato"
    ],
    "riskFlags": [
      "contains-raw-fish",
      "contains-fish",
      "can-be-spicy"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "raw-seafood",
      "classic-dish"
    ],
    "avoidIfTags": [
      "raw-fish-avoidance",
      "fish-allergy",
      "spice-sensitive"
    ],
    "orderVerdict": {
      "en": "Choose it for bright citrus and raw fish freshness; avoid if raw seafood is uncomfortable.",
      "zh": "想吃清亮酸香和生鱼鲜味时适合；不能接受生海鲜就不要点。",
      "nl": "Kies dit voor frisse citrus en rauwe vis; vermijd als rauwe zeevruchten niet prettig zijn."
    },
    "spiceLevel": 2,
    "weightLevel": 2,
    "acquiredTasteLevel": 2,
    "confidenceTag": "audited-world-truth-batch-022",
    "metadataConfidence": 0.86,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "lomo-saltado",
    "metadataCode": "129002",
    "cuisineId": "peruvian",
    "names": {
      "en": "Lomo Saltado",
      "zh": "秘鲁牛肉薯条炒饭",
      "nl": "Lomo saltado",
      "local": "lomo saltado"
    },
    "category": "meat",
    "cookingMethods": [
      "stir-fried"
    ],
    "shortDescription": {
      "en": "Peruvian-Chinese beef stir-fry with onions, tomatoes, soy-vinegar sauce, fries, and rice.",
      "zh": "秘鲁中式影响牛肉快炒，配洋葱、番茄、酱油醋汁、薯条和米饭。",
      "nl": "Peruaans-Chinese rundvleesroerbak met ui, tomaat, soja-azijnsaus, friet en rijst."
    },
    "cookingProfile": {
      "en": "Hot wok-seared beef meets fries and rice, so it is saucy, hearty, and carb-heavy.",
      "zh": "热锅牛肉和薯条、米饭一起上桌，酱香足、分量重、主食感强。",
      "nl": "Heet gewokt rundvlees komt met friet en rijst; sauzig, stevig en koolhydraatrijk."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "comfort-food"
      ],
      "description": {
        "en": "A Peruvian chifa classic where fries plus rice are central to the eating experience.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "beef",
        35,
        "stir-fried meat"
      ],
      [
        "fries",
        25,
        "potato side"
      ],
      [
        "steamed-rice",
        20,
        "rice side"
      ],
      [
        "tomato",
        10,
        "juicy vegetable"
      ],
      [
        "onion",
        5,
        "aromatic"
      ],
      [
        "soy-sauce",
        5,
        "soy-vinegar seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "soy-vinegar wok sauce",
      "beef juices",
      "fries soaking sauce"
    ],
    "basicTaste": [
      "savory",
      "tangy",
      "meaty",
      "slightly sweet"
    ],
    "textureProfile": [
      "tender beef strips",
      "softened fries",
      "separate rice"
    ],
    "riskFlags": [
      "contains-soy",
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food",
      "classic-dish"
    ],
    "avoidIfTags": [
      "soy-free",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "A very satisfying main if you want beef, fries, rice, and wok sauce in one plate.",
      "zh": "想要牛肉、薯条、米饭和锅气酱汁一盘满足时很适合。",
      "nl": "Heel bevredigend als je rund, friet, rijst en woksaus op één bord wilt."
    },
    "spiceLevel": 1,
    "weightLevel": 5,
    "confidenceTag": "audited-world-truth-batch-022",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "aji-de-gallina",
    "metadataCode": "129003",
    "cuisineId": "peruvian",
    "names": {
      "en": "Ají de Gallina",
      "zh": "秘鲁黄辣椒奶油鸡",
      "nl": "Ají de gallina",
      "local": "ají de gallina"
    },
    "category": "meat",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Shredded chicken in creamy ají amarillo sauce thickened with bread and nuts, served with rice, potato, egg, and olives.",
      "zh": "手撕鸡配秘鲁黄辣椒奶油酱，常用面包和坚果增稠，配米饭、土豆、蛋和橄榄。",
      "nl": "Geplukte kip in romige ají amarillo-saus, gebonden met brood en noten, met rijst, aardappel, ei en olijven."
    },
    "cookingProfile": {
      "en": "Creamy, spoonable chicken sauce; the chili is fruity and mild-to-medium rather than sharply hot.",
      "zh": "鸡肉酱顺滑浓稠，黄辣椒偏果香，通常不是尖锐重辣。",
      "nl": "Romige, lepelbare kipsaus; de chili is fruitig en mild tot medium, niet scherp heet."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "comfort-food"
      ],
      "description": {
        "en": "A Peruvian comfort classic where dairy, bread, nut, and egg risks are important.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "chicken",
        35,
        "shredded meat"
      ],
      [
        "steamed-rice",
        20,
        "base"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "bread",
        10,
        "sauce thickener"
      ],
      [
        "egg",
        10,
        "garnish"
      ],
      [
        "aji-amarillo",
        5,
        "yellow chili",
        "seasoning"
      ],
      [
        "cream",
        5,
        "creamy body"
      ]
    ],
    "distinctiveFlavorSources": [
      "ají amarillo",
      "creamy bread-thickened sauce",
      "walnut-like richness"
    ],
    "basicTaste": [
      "creamy",
      "savory",
      "mildly spicy",
      "rich"
    ],
    "textureProfile": [
      "shredded chicken",
      "smooth sauce",
      "soft potato"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-gluten",
      "contains-egg",
      "contains-tree-nut",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food",
      "classic-dish"
    ],
    "avoidIfTags": [
      "dairy-free",
      "gluten-free",
      "egg-free",
      "tree-nut-allergy"
    ],
    "orderVerdict": {
      "en": "Comforting and creamy; check allergens if dairy, gluten, egg, or nuts matter.",
      "zh": "浓郁顺滑、很有安慰感；乳制品、麸质、鸡蛋或坚果过敏者要谨慎。",
      "nl": "Romig comfortfood; controleer allergenen bij zuivel, gluten, ei of noten."
    },
    "spiceLevel": 1,
    "weightLevel": 4,
    "confidenceTag": "audited-world-truth-batch-022",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "causa",
    "metadataCode": "129004",
    "cuisineId": "peruvian",
    "names": {
      "en": "Causa",
      "zh": "秘鲁土豆冷盘",
      "nl": "Causa",
      "local": "causa"
    },
    "category": "starter",
    "cookingMethods": [
      "chilled",
      "assembled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "Chilled Peruvian layered mashed potato seasoned with lime and ají amarillo, filled with tuna, chicken, avocado, or egg salad.",
      "zh": "秘鲁冷土豆泥层叠小盘，用青柠和黄辣椒调味，夹金枪鱼、鸡肉、牛油果或蛋黄酱馅。",
      "nl": "Koude Peruaanse laagjespuree met limoen en ají amarillo, gevuld met tonijn, kip, avocado of eisalade."
    },
    "cookingProfile": {
      "en": "Served cool and shaped, with soft potato layers and creamy filling rather than a hot main.",
      "zh": "冷食且成型，口感是柔软土豆层和奶油感内馅，不是热主菜。",
      "nl": "Koel en gevormd geserveerd, met zachte aardappellagen en romige vulling, geen warme hoofdmaaltijd."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "starter",
        "classic-dish"
      ],
      "description": {
        "en": "A classic Peruvian starter where cold temperature and filling choice shape the decision.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "potato",
        45,
        "seasoned mashed potato"
      ],
      [
        "tuna",
        15,
        "common filling",
        "ingredient",
        "medium",
        true
      ],
      [
        "chicken",
        15,
        "alternate filling",
        "ingredient",
        "medium",
        true
      ],
      [
        "avocado",
        10,
        "creamy layer"
      ],
      [
        "egg",
        5,
        "garnish"
      ],
      [
        "lime",
        5,
        "acid"
      ],
      [
        "aji-amarillo",
        5,
        "yellow chili",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "lime-seasoned potato",
      "ají amarillo",
      "mayonnaise-style filling"
    ],
    "basicTaste": [
      "tangy",
      "creamy",
      "mildly spicy",
      "starchy"
    ],
    "textureProfile": [
      "cold soft potato",
      "creamy filling",
      "neat layers"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-fish",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "starter",
      "classic-dish"
    ],
    "avoidIfTags": [
      "wants-hot-food",
      "egg-free",
      "fish-allergy"
    ],
    "orderVerdict": {
      "en": "Good as a cool starter; ask about the filling if you avoid fish or egg.",
      "zh": "适合作为冷前菜；不吃鱼或蛋要先问内馅。",
      "nl": "Goed als koud voorgerecht; vraag naar de vulling als je vis of ei vermijdt."
    },
    "spiceLevel": 1,
    "weightLevel": 3,
    "restaurantVariationLevel": "high",
    "confidenceTag": "audited-world-truth-batch-022",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1
  }),
  starterDish({
    "id": "anticuchos",
    "metadataCode": "129005",
    "cuisineId": "peruvian",
    "names": {
      "en": "Anticuchos",
      "zh": "秘鲁烤牛心串",
      "nl": "Anticuchos",
      "local": "anticuchos"
    },
    "category": "meat",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Peruvian grilled skewers, classically beef heart marinated with ají, garlic, cumin, and vinegar, often with potato or corn.",
      "zh": "秘鲁烤串，经典版本是牛心，用黄辣椒、蒜、孜然和醋腌制，常配土豆或玉米。",
      "nl": "Peruaanse spiesjes, klassiek van runderhart gemarineerd met ají, knoflook, komijn en azijn, vaak met aardappel of mais."
    },
    "cookingProfile": {
      "en": "Grilled over high heat, giving firm, smoky meat with a tangy chili marinade.",
      "zh": "高温烤制，肉质偏紧实有烟熏感，腌料带酸辣香。",
      "nl": "Heet gegrild, met stevig rokerig vlees en friszure chilimarinade."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "regional-dish"
      ],
      "description": {
        "en": "A signature Peruvian street-food skewered meat with offal identity that should be transparent.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "beef-heart",
        60,
        "classic skewer meat"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "corn",
        10,
        "side"
      ],
      [
        "aji-amarillo",
        5,
        "chili marinade",
        "seasoning"
      ],
      [
        "vinegar",
        5,
        "marinade acid",
        "seasoning"
      ],
      [
        "cumin",
        5,
        "warm spice",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "beef heart",
      "ají marinade",
      "charcoal grill"
    ],
    "basicTaste": [
      "meaty",
      "smoky",
      "tangy",
      "mildly spicy"
    ],
    "textureProfile": [
      "firm meat",
      "charred edges",
      "starchy sides"
    ],
    "riskFlags": [
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "street-food",
      "meat-lover"
    ],
    "avoidIfTags": [
      "offal-avoidance",
      "spice-sensitive"
    ],
    "orderVerdict": {
      "en": "Great for adventurous meat eaters; classic versions are beef heart, not ordinary steak.",
      "zh": "适合愿意尝试内脏部位的肉食爱好者；经典版本是牛心，不是普通牛排。",
      "nl": "Sterk voor avontuurlijke vleeseters; klassiek is runderhart, geen gewone biefstuk."
    },
    "spiceLevel": 2,
    "weightLevel": 3,
    "acquiredTasteLevel": 3,
    "confidenceTag": "audited-world-truth-batch-023",
    "metadataConfidence": 0.86,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "papa-a-la-huancaina",
    "metadataCode": "129006",
    "cuisineId": "peruvian",
    "names": {
      "en": "Papa a la Huancaína",
      "zh": "秘鲁黄辣椒奶酪土豆",
      "nl": "Papa a la Huancaína",
      "local": "papa a la huancaína"
    },
    "category": "starter",
    "cookingMethods": [
      "boiled",
      "assembled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "Boiled potatoes covered in creamy ají amarillo cheese sauce, usually served cool with egg, olive, and lettuce.",
      "zh": "水煮土豆淋秘鲁黄辣椒奶酪酱，通常冷或常温上桌，配鸡蛋、橄榄和生菜。",
      "nl": "Gekookte aardappel met romige ají amarillo-kaassaus, meestal koel met ei, olijf en sla."
    },
    "cookingProfile": {
      "en": "Cool potatoes and thick sauce make it creamy and gentle, with fruity chili more than sharp heat.",
      "zh": "冷土豆和浓酱带来奶油感，黄辣椒偏果香，辣度通常温和。",
      "nl": "Koele aardappel en dikke saus maken het romig en mild; de chili is fruitig, niet fel heet."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "starter",
        "classic-dish"
      ],
      "description": {
        "en": "A classic Peruvian starter where dairy and egg are central.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "potato",
        45,
        "boiled potato"
      ],
      [
        "cheese",
        20,
        "sauce body"
      ],
      [
        "cream",
        10,
        "creamy sauce"
      ],
      [
        "egg",
        10,
        "garnish"
      ],
      [
        "olives",
        5,
        "briny garnish"
      ],
      [
        "aji-amarillo",
        5,
        "yellow chili",
        "seasoning"
      ],
      [
        "bread",
        5,
        "sauce thickener"
      ]
    ],
    "distinctiveFlavorSources": [
      "ají amarillo",
      "fresh cheese sauce",
      "cool potato"
    ],
    "basicTaste": [
      "creamy",
      "mildly spicy",
      "salty",
      "starchy"
    ],
    "textureProfile": [
      "cool soft potato",
      "thick sauce",
      "firm egg"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-egg",
      "contains-gluten",
      "can-be-spicy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "starter",
      "classic-dish"
    ],
    "avoidIfTags": [
      "dairy-free",
      "egg-free",
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "A gentle but rich starter; avoid if dairy or egg is a problem.",
      "zh": "这是温和但浓郁的前菜；不能吃奶制品或鸡蛋就谨慎。",
      "nl": "Een milde maar rijke starter; vermijden bij zuivel- of eiproblemen."
    },
    "spiceLevel": 1,
    "weightLevel": 3,
    "confidenceTag": "audited-world-truth-batch-023",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "arroz-chaufa",
    "metadataCode": "129007",
    "cuisineId": "peruvian",
    "names": {
      "en": "Arroz Chaufa",
      "zh": "秘鲁中式炒饭",
      "nl": "Arroz chaufa",
      "local": "arroz chaufa"
    },
    "category": "rice",
    "cookingMethods": [
      "stir-fried"
    ],
    "shortDescription": {
      "en": "Peruvian chifa fried rice with soy sauce, egg, scallions, and chicken, pork, beef, or seafood variants.",
      "zh": "秘鲁中餐 chifa 风格炒饭，常有酱油、鸡蛋、葱，以及鸡肉、猪肉、牛肉或海鲜变化。",
      "nl": "Peruaanse chifa-gebakken rijst met sojasaus, ei, lente-ui en varianten met kip, varkensvlees, rund of zeevruchten."
    },
    "cookingProfile": {
      "en": "Wok-fried and savory, closer to fried rice than a saucy Latin rice dish.",
      "zh": "热锅快炒、咸香带锅气，更接近中式炒饭，不是湿润炖饭。",
      "nl": "Gewokt en hartig, dichter bij gebakken rijst dan bij een sauzige Latijnse rijstschotel."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "comfort-food",
        "rice"
      ],
      "description": {
        "en": "A Peruvian chifa fried-rice reference where protein choice and soy/gluten risk vary by version.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "steamed-rice",
        55,
        "fried rice base"
      ],
      [
        "egg",
        15,
        "scrambled egg"
      ],
      [
        "chicken",
        10,
        "common protein"
      ],
      [
        "green-onion",
        10,
        "aromatic"
      ],
      [
        "soy-sauce",
        5,
        "seasoning",
        "seasoning"
      ],
      [
        "sesame-oil",
        5,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "soy sauce",
      "wok heat",
      "scallion"
    ],
    "basicTaste": [
      "savory",
      "salty",
      "eggy",
      "aromatic"
    ],
    "textureProfile": [
      "separate rice grains",
      "small egg pieces",
      "light oil gloss"
    ],
    "riskFlags": [
      "contains-soy",
      "contains-gluten",
      "contains-egg",
      "contains-sesame"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "rice",
      "comfort-food"
    ],
    "avoidIfTags": [
      "soy-free",
      "gluten-free",
      "egg-free",
      "sesame-free"
    ],
    "orderVerdict": {
      "en": "A familiar, filling option; check the protein if you avoid pork or shellfish.",
      "zh": "熟悉又有饱腹感；不吃猪肉或海鲜时要确认具体蛋白。",
      "nl": "Een vertrouwde, vullende keuze; check de eiwitvariant bij varkensvlees of schaaldieren."
    },
    "spiceLevel": 0,
    "weightLevel": 4,
    "restaurantVariationLevel": "high",
    "confidenceTag": "audited-world-truth-batch-023",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1
  }),
  starterDish({
    "id": "pollo-a-la-brasa",
    "metadataCode": "129008",
    "cuisineId": "peruvian",
    "names": {
      "en": "Pollo a la Brasa",
      "zh": "秘鲁炭烤鸡",
      "nl": "Pollo a la brasa",
      "local": "pollo a la brasa"
    },
    "category": "meat",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Peruvian rotisserie or charcoal chicken marinated with garlic, cumin, soy-like savoriness, and served with fries and spicy green sauces.",
      "zh": "秘鲁炭烤或旋转烤鸡，用蒜、孜然和咸香腌料调味，常配薯条和辣绿酱。",
      "nl": "Peruaanse houtskool- of spitkip met knoflook, komijn en hartige marinade, vaak met friet en pittige groene sauzen."
    },
    "cookingProfile": {
      "en": "Roasted until the skin is browned and the meat stays juicy; sauces decide the heat.",
      "zh": "鸡皮烤到焦香，肉保持多汁；辣度多由蘸酱决定。",
      "nl": "Geroosterd tot bruine huid en sappig vlees; sauzen bepalen de pit."
    },
    "cuisineRole": {
      "level": "signature",
      "tags": [
        "signature-dish",
        "safe-choice"
      ],
      "description": {
        "en": "A widely recognized Peruvian main that is accessible but still sauce-dependent.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "chicken",
        55,
        "roasted chicken"
      ],
      [
        "fries",
        25,
        "common side"
      ],
      [
        "mixed-vegetables",
        10,
        "salad side"
      ],
      [
        "cumin",
        5,
        "marinade spice",
        "seasoning"
      ],
      [
        "garlic",
        5,
        "marinade aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "charcoal roast",
      "garlic-cumin marinade",
      "ají dipping sauces"
    ],
    "basicTaste": [
      "savory",
      "smoky",
      "garlicky",
      "mildly spicy"
    ],
    "textureProfile": [
      "browned skin",
      "juicy chicken",
      "crisp fries"
    ],
    "riskFlags": [
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "safe-choice",
      "first-timer-friendly"
    ],
    "avoidIfTags": [
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "A strong first-timer choice if you want roast chicken; keep sauces separate if spice-sensitive.",
      "zh": "第一次吃秘鲁菜想要稳妥主菜可以点；怕辣就让酱单放。",
      "nl": "Sterke eerste keuze als je geroosterde kip wilt; vraag saus apart bij gevoeligheid voor pit."
    },
    "spiceLevel": 1,
    "weightLevel": 4,
    "confidenceTag": "audited-world-truth-batch-023",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "rocoto-relleno",
    "metadataCode": "129009",
    "cuisineId": "peruvian",
    "names": {
      "en": "Rocoto Relleno",
      "zh": "秘鲁酿辣椒",
      "nl": "Rocoto relleno",
      "local": "rocoto relleno"
    },
    "category": "meat",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Peruvian stuffed rocoto pepper with seasoned beef, onion, raisins or olives, and melted cheese, often served with potato gratin.",
      "zh": "秘鲁酿 rocoto 辣椒，内馅多为牛肉、洋葱、葡萄干或橄榄，上面有融化奶酪，常配土豆。",
      "nl": "Peruaanse gevulde rocotopeper met gekruid rundvlees, ui, rozijnen of olijven en gesmolten kaas, vaak met aardappel."
    },
    "cookingProfile": {
      "en": "Baked until the pepper softens but keeps a real chili bite; richer versions include cheese and potato.",
      "zh": "烤到辣椒变软但仍有明显辣味，奶酪和土豆版本更厚重。",
      "nl": "Gebakken tot de peper zacht is maar nog echte pit heeft; rijke versies hebben kaas en aardappel."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "spicy"
      ],
      "description": {
        "en": "An Arequipa-linked dish where chili heat is not just a garnish.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "bell-pepper",
        35,
        "rocoto pepper shell"
      ],
      [
        "ground-meat",
        30,
        "beef filling"
      ],
      [
        "cheese",
        15,
        "melted topping"
      ],
      [
        "potato",
        10,
        "side"
      ],
      [
        "olives",
        5,
        "briny accent"
      ],
      [
        "aji-amarillo",
        5,
        "chili heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "rocoto pepper heat",
      "beef filling",
      "melted cheese"
    ],
    "basicTaste": [
      "spicy",
      "savory",
      "rich",
      "slightly sweet"
    ],
    "textureProfile": [
      "soft pepper",
      "crumbly meat filling",
      "melted cheese"
    ],
    "riskFlags": [
      "contains-dairy",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "regional-dish",
      "spicy"
    ],
    "avoidIfTags": [
      "spice-sensitive",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Order if you want a spicy stuffed pepper; avoid if you only tolerate mild chili.",
      "zh": "想吃真正有辣度的酿椒可以点；只能接受微辣就慎选。",
      "nl": "Bestel als je een pittige gevulde peper wilt; vermijd als je alleen milde chili verdraagt."
    },
    "spiceLevel": 3,
    "weightLevel": 4,
    "confidenceTag": "audited-world-truth-batch-023",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "tiradito",
    "metadataCode": "129010",
    "cuisineId": "peruvian",
    "names": {
      "en": "Tiradito",
      "zh": "秘鲁生鱼薄片",
      "nl": "Tiradito",
      "local": "tiradito"
    },
    "category": "raw-seafood",
    "cookingMethods": [
      "raw",
      "assembled"
    ],
    "rawnessLevel": "raw",
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "Peruvian raw fish slices dressed with citrus and ají sauce, closer to sashimi in shape than chopped ceviche.",
      "zh": "秘鲁生鱼薄片，淋青柠和黄辣椒酱，形态更像生鱼片而不是切块 ceviche。",
      "nl": "Peruaanse rauwe visplakjes met citrus en ají-saus, qua vorm dichter bij sashimi dan gehakte ceviche."
    },
    "cookingProfile": {
      "en": "Served cold and raw with citrus-chili dressing; the acid brightens the fish but does not make it fully cooked.",
      "zh": "冷食生鱼配柑橘辣椒汁，酸汁会提亮鱼味，但不等于完全熟制。",
      "nl": "Koud en rauw geserveerd met citrus-chilidressing; zuur frist op maar gaart niet volledig."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "raw-seafood"
      ],
      "description": {
        "en": "A Peruvian raw-fish reference where rawness must be explicit.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "raw-white-fish",
        60,
        "raw sliced fish"
      ],
      [
        "lime",
        20,
        "citrus dressing"
      ],
      [
        "aji-amarillo",
        10,
        "chili sauce",
        "seasoning"
      ],
      [
        "corn",
        5,
        "side"
      ],
      [
        "sweet-potato",
        5,
        "side"
      ]
    ],
    "distinctiveFlavorSources": [
      "raw fish slices",
      "ají amarillo sauce",
      "lime"
    ],
    "basicTaste": [
      "bright",
      "sour",
      "fresh",
      "spicy"
    ],
    "textureProfile": [
      "silky raw fish",
      "smooth chili sauce",
      "clean citrus finish"
    ],
    "riskFlags": [
      "contains-raw-fish",
      "contains-fish",
      "can-be-spicy"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "raw-seafood",
      "classic-dish"
    ],
    "avoidIfTags": [
      "raw-fish-avoidance",
      "fish-allergy",
      "spice-sensitive"
    ],
    "orderVerdict": {
      "en": "Pick it for a cleaner raw-fish experience than ceviche; avoid if raw fish is not comfortable.",
      "zh": "想要比 ceviche 更清爽、更像生鱼片的体验可以点；不吃生鱼就避开。",
      "nl": "Kies dit voor een schonere rauwe-viservaring dan ceviche; vermijd als rauwe vis niet past."
    },
    "spiceLevel": 2,
    "weightLevel": 2,
    "acquiredTasteLevel": 2,
    "confidenceTag": "audited-world-truth-batch-023",
    "metadataConfidence": 0.86,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "picarones",
    "metadataCode": "129011",
    "cuisineId": "peruvian",
    "names": {
      "en": "Picarones",
      "zh": "秘鲁南瓜红薯甜甜圈",
      "nl": "Picarones",
      "local": "picarones"
    },
    "category": "dessert",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "Peruvian fried rings made with squash and sweet potato dough, served with spiced syrup.",
      "zh": "秘鲁炸环状甜点，面团含南瓜和红薯，常淋香料糖浆。",
      "nl": "Peruaanse gefrituurde ringen van pompoen- en zoete-aardappeldeeg met gekruide siroop."
    },
    "cookingProfile": {
      "en": "Fried to a chewy-crisp ring, then finished with sticky syrup rather than powdered sugar.",
      "zh": "炸成外缘微酥、内部有嚼感的圈，再淋黏稠糖浆。",
      "nl": "Gefrituurd tot een kauwbaar-krokante ring en afgewerkt met kleverige siroop."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "dessert"
      ],
      "description": {
        "en": "A classic Peruvian street dessert distinct from plain doughnuts.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "wheat-flour",
        35,
        "dough"
      ],
      [
        "squash",
        20,
        "dough sweetness"
      ],
      [
        "sweet-potato",
        20,
        "dough body"
      ],
      [
        "sugar",
        15,
        "syrup"
      ],
      [
        "cinnamon",
        5,
        "spice",
        "seasoning"
      ],
      [
        "maple-syrup",
        5,
        "syrup note",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "squash-sweet potato dough",
      "spiced syrup",
      "fried aroma"
    ],
    "basicTaste": [
      "sweet",
      "fried",
      "warm-spiced"
    ],
    "textureProfile": [
      "crisp edge",
      "chewy center",
      "sticky syrup"
    ],
    "riskFlags": [
      "contains-gluten"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert",
      "street-food"
    ],
    "avoidIfTags": [
      "gluten-free",
      "wants-light-dessert"
    ],
    "orderVerdict": {
      "en": "Great warm dessert if you want something syrupy and fried, not a light pastry.",
      "zh": "想吃热的、糖浆感强的炸甜点很适合；它不是轻盈糕点。",
      "nl": "Sterk warm dessert als je iets stroperigs en gefrituurds wilt, geen licht gebak."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "confidenceTag": "audited-world-truth-batch-023",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "suspiro-limeno",
    "metadataCode": "129012",
    "cuisineId": "peruvian",
    "names": {
      "en": "Suspiro Limeño",
      "zh": "秘鲁焦糖蛋奶甜点",
      "nl": "Suspiro limeño",
      "local": "suspiro limeño"
    },
    "category": "dessert",
    "cookingMethods": [
      "set",
      "chilled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "Very sweet Peruvian dulce de leche-style custard topped with port or cinnamon meringue.",
      "zh": "非常甜的秘鲁焦糖奶蛋甜点，上层常是蛋白霜，可能有波特酒或肉桂香。",
      "nl": "Zeer zoet Peruaans dulce-de-leche-achtig custarddessert met port- of kaneelmeringue."
    },
    "cookingProfile": {
      "en": "Served cool in small portions because the custard is dense and very sweet.",
      "zh": "通常小份冷食，因为蛋奶焦糖层很浓稠、甜度高。",
      "nl": "Koel en klein geserveerd omdat de custard dicht en heel zoet is."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "dessert",
        "classic-dish"
      ],
      "description": {
        "en": "A classic Peruvian dessert where sweetness and egg/dairy risks are the main signals.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "milk-solids",
        30,
        "milk caramel base"
      ],
      [
        "sugar",
        25,
        "sweetness"
      ],
      [
        "egg",
        20,
        "custard and meringue"
      ],
      [
        "meringue",
        15,
        "topping"
      ],
      [
        "condensed-milk",
        5,
        "milky sweetness",
        "seasoning"
      ],
      [
        "cinnamon",
        5,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "dulce de leche custard",
      "meringue",
      "cinnamon"
    ],
    "basicTaste": [
      "very sweet",
      "creamy",
      "caramel",
      "eggy"
    ],
    "textureProfile": [
      "dense custard",
      "airy meringue",
      "smooth spoon dessert"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-egg"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert"
    ],
    "avoidIfTags": [
      "dairy-free",
      "egg-free",
      "low-sugar"
    ],
    "orderVerdict": {
      "en": "Best for serious sweet-tooth diners; it is richer and sweeter than most custards.",
      "zh": "适合非常爱甜的人；它比多数蛋奶甜点更浓、更甜。",
      "nl": "Voor echte zoetekauwen; rijker en zoeter dan de meeste custards."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "confidenceTag": "audited-world-truth-batch-023",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "feijoada",
    "metadataCode": "130001",
    "cuisineId": "brazilian",
    "names": {
      "en": "Feijoada",
      "zh": "巴西黑豆猪肉炖菜",
      "nl": "Feijoada",
      "local": "feijoada"
    },
    "category": "meat",
    "cookingMethods": [
      "braised"
    ],
    "shortDescription": {
      "en": "Brazilian black bean stew with pork cuts and sausage, usually served with rice, farofa, greens, and orange.",
      "zh": "巴西黑豆炖猪肉和香肠，常配米饭、farofa、绿叶菜和橙子。",
      "nl": "Braziliaanse zwartebonenstoof met varkensvlees en worst, meestal met rijst, farofa, groen en sinaasappel."
    },
    "cookingProfile": {
      "en": "Slow-braised and hearty, with beans absorbing smoky pork flavor.",
      "zh": "长时间炖煮，黑豆吸收烟熏猪肉香，整体厚重。",
      "nl": "Lang gestoofd en stevig, met bonen die rokerige varkenssmaak opnemen."
    },
    "cuisineRole": {
      "level": "signature",
      "tags": [
        "signature-dish",
        "comfort-food"
      ],
      "description": {
        "en": "A national-reference Brazilian dish where pork must be clearly flagged.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "black-beans",
        35,
        "bean stew"
      ],
      [
        "pork",
        25,
        "pork cuts"
      ],
      [
        "sausage-global",
        15,
        "smoked sausage"
      ],
      [
        "steamed-rice",
        15,
        "side"
      ],
      [
        "cassava-flour",
        5,
        "farofa side"
      ],
      [
        "orange",
        5,
        "fresh side"
      ]
    ],
    "distinctiveFlavorSources": [
      "black beans",
      "smoked pork",
      "farofa"
    ],
    "basicTaste": [
      "savory",
      "smoky",
      "earthy",
      "rich"
    ],
    "textureProfile": [
      "soft beans",
      "tender pork",
      "crumbly farofa"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "signature-dish",
      "comfort-food"
    ],
    "avoidIfTags": [
      "no-pork",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "A defining Brazilian comfort dish, but it is pork-heavy and filling.",
      "zh": "这是很有代表性的巴西舒适菜，但猪肉多、分量重。",
      "nl": "Een bepalend Braziliaans comfortgerecht, maar varkensvleesrijk en vullend."
    },
    "spiceLevel": 0,
    "weightLevel": 5,
    "confidenceTag": "audited-world-truth-batch-023",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "pao-de-queijo",
    "metadataCode": "130002",
    "cuisineId": "brazilian",
    "names": {
      "en": "Pão de Queijo",
      "zh": "巴西芝士面包球",
      "nl": "Pão de queijo",
      "local": "pão de queijo"
    },
    "category": "bread",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Brazilian cheese bread made with tapioca starch, cheese, egg, and milk, giving a chewy gluten-free-style center.",
      "zh": "巴西芝士面包球，用木薯淀粉、奶酪、蛋和奶做成，中心有弹性和奶香。",
      "nl": "Braziliaans kaasbroodje van tapiocazetmeel, kaas, ei en melk, met een elastische kern."
    },
    "cookingProfile": {
      "en": "Baked as small puffs: crisp outside when fresh, stretchy-chewy inside.",
      "zh": "烤成小圆球，刚出炉外层微脆，内部拉伸有嚼劲。",
      "nl": "Gebakken als kleine bolletjes: vers licht krokant buiten, rekbaar-kauwend binnen."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "snack"
      ],
      "description": {
        "en": "A Brazilian snack where dairy and egg matter despite the tapioca base.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "tapioca-starch",
        40,
        "chewy starch"
      ],
      [
        "cheese",
        30,
        "cheese body"
      ],
      [
        "egg",
        15,
        "binder"
      ],
      [
        "milk-solids",
        10,
        "dairy body"
      ],
      [
        "sea-salt",
        5,
        "seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "tapioca chew",
      "cheese",
      "fresh baked crust"
    ],
    "basicTaste": [
      "cheesy",
      "salty",
      "mild",
      "savory"
    ],
    "textureProfile": [
      "crisp shell",
      "chewy center",
      "stretchy cheese"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-egg"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "snack",
      "first-timer-friendly"
    ],
    "avoidIfTags": [
      "dairy-free",
      "egg-free"
    ],
    "orderVerdict": {
      "en": "Very approachable snack if you like cheesy chewy bread; best eaten warm.",
      "zh": "喜欢奶酪香和弹牙面包的人会很容易接受；热吃最好。",
      "nl": "Zeer toegankelijke snack als je kaasachtig kauwbrood lekker vindt; warm het best."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "confidenceTag": "audited-world-truth-batch-023",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "coxinha",
    "metadataCode": "130003",
    "cuisineId": "brazilian",
    "names": {
      "en": "Coxinha",
      "zh": "巴西炸鸡肉酥球",
      "nl": "Coxinha",
      "local": "coxinha"
    },
    "category": "fried-snack",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "Teardrop-shaped Brazilian fried snack with shredded chicken filling inside a soft dough and crisp coating.",
      "zh": "泪滴形巴西炸小吃，软面团包手撕鸡馅，外层裹粉炸脆。",
      "nl": "Traanvormige Braziliaanse gefrituurde snack met geplukte kip in zacht deeg en krokante korst."
    },
    "cookingProfile": {
      "en": "Deep-fried so the shell is crisp while the chicken filling stays creamy or soft.",
      "zh": "油炸后外壳酥，里面鸡肉馅柔软，有些版本带奶油感。",
      "nl": "Gefrituurd met krokante buitenkant en zachte, soms romige kipvulling."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "fried-snack"
      ],
      "description": {
        "en": "A Brazilian snack-counter staple where frying and chicken filling define the order.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "chicken",
        35,
        "shredded filling"
      ],
      [
        "wheat-flour",
        30,
        "dough and coating"
      ],
      [
        "cream-cheese",
        15,
        "creamy filling",
        "ingredient",
        "medium",
        true
      ],
      [
        "egg",
        10,
        "coating binder"
      ],
      [
        "garlic",
        5,
        "aroma",
        "seasoning"
      ],
      [
        "parsley",
        5,
        "herb",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "shredded chicken",
      "fried dough",
      "optional cream cheese"
    ],
    "basicTaste": [
      "savory",
      "fried",
      "chickeny",
      "mild"
    ],
    "textureProfile": [
      "crisp shell",
      "soft dough layer",
      "moist chicken filling"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "street-food",
      "fried-snack"
    ],
    "avoidIfTags": [
      "gluten-free",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Good as a filling fried snack; dairy varies, so ask if needed.",
      "zh": "适合作为有饱腹感的炸小吃；是否含奶制品因版本而异。",
      "nl": "Goed als vullende gefrituurde snack; zuivel wisselt per versie."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "restaurantVariationLevel": "medium",
    "confidenceTag": "audited-world-truth-batch-023",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1
  }),
  starterDish({
    "id": "moqueca",
    "metadataCode": "130004",
    "cuisineId": "brazilian",
    "names": {
      "en": "Moqueca",
      "zh": "巴西椰奶海鲜炖菜",
      "nl": "Moqueca",
      "local": "moqueca"
    },
    "category": "seafood",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Brazilian fish or seafood stew with tomato, peppers, coconut milk, cilantro, and in Bahia often dendê palm oil.",
      "zh": "巴西鱼或海鲜炖菜，常有番茄、甜椒、椰奶、香菜，巴伊亚版本常加 dendê 红棕榈油。",
      "nl": "Braziliaanse vis- of zeevruchtenstoof met tomaat, paprika, kokosmelk, koriander en in Bahia vaak dendê-palmolie."
    },
    "cookingProfile": {
      "en": "Simmered into a bright, saucy stew; coconut and dendê make it richer than a plain tomato fish soup.",
      "zh": "炖成明亮多汁的海鲜锅，椰奶和 dendê 油让它比普通番茄鱼汤更浓。",
      "nl": "Gestoofd tot een heldere, sauzige stoof; kokos en dendê maken hem rijker dan gewone tomatenvissoep."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "seafood"
      ],
      "description": {
        "en": "A Brazilian seafood classic where fish/shellfish and coconut richness should be explicit.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "fish-fillet",
        35,
        "fish"
      ],
      [
        "shrimp",
        20,
        "seafood"
      ],
      [
        "tomato",
        15,
        "sauce body"
      ],
      [
        "bell-pepper",
        10,
        "vegetable"
      ],
      [
        "coconut-milk",
        10,
        "creamy broth",
        "seasoning"
      ],
      [
        "dende-oil",
        5,
        "Bahian depth",
        "seasoning"
      ],
      [
        "lime",
        5,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "coconut milk",
      "dendê palm oil",
      "tomato-pepper seafood broth"
    ],
    "basicTaste": [
      "savory",
      "briny",
      "creamy",
      "slightly sweet"
    ],
    "textureProfile": [
      "tender fish",
      "juicy shrimp",
      "saucy broth"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-shellfish"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "seafood",
      "classic-dish"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "shellfish-allergy",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Excellent if you want a rich Brazilian seafood stew; confirm shellfish if allergic.",
      "zh": "想吃巴西椰香海鲜炖菜很适合；贝类过敏要先确认。",
      "nl": "Uitstekend voor rijke Braziliaanse zeevruchtenstoof; check schaaldieren bij allergie."
    },
    "spiceLevel": 1,
    "weightLevel": 4,
    "restaurantVariationLevel": "medium",
    "confidenceTag": "audited-world-truth-batch-023",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1
  }),
  starterDish({
    "id": "churrasco",
    "metadataCode": "130005",
    "cuisineId": "brazilian",
    "names": {
      "en": "Churrasco",
      "zh": "巴西烤肉",
      "nl": "Churrasco",
      "local": "churrasco"
    },
    "category": "meat",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Brazilian-style grilled meats, often beef cuts such as picanha plus sausage, chicken, or pork in churrascaria service.",
      "zh": "巴西烤肉，常见牛肉部位如 picanha，也可能有香肠、鸡肉或猪肉轮番上桌。",
      "nl": "Braziliaans gegrild vlees, vaak rund zoals picanha plus worst, kip of varkensvlees in churrascaria-stijl."
    },
    "cookingProfile": {
      "en": "Grilled over high heat with salt-forward seasoning, emphasizing char, fat, and meat texture.",
      "zh": "高温烤制，调味多以盐突出肉香，重点是焦香、脂香和肉质。",
      "nl": "Heet gegrild met zoutgerichte kruiding; de nadruk ligt op korst, vet en vleestextuur."
    },
    "cuisineRole": {
      "level": "signature",
      "tags": [
        "signature-dish",
        "meat-lover"
      ],
      "description": {
        "en": "A Brazilian meat-service format where mixed meats and possible pork should be expected.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "beef",
        55,
        "primary grilled meat"
      ],
      [
        "sausage-global",
        15,
        "sausage option"
      ],
      [
        "chicken",
        10,
        "alternate meat"
      ],
      [
        "pork",
        10,
        "possible meat"
      ],
      [
        "sea-salt",
        5,
        "seasoning",
        "seasoning"
      ],
      [
        "garlic",
        5,
        "optional marinade",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "charcoal grill",
      "salted beef fat",
      "mixed meats"
    ],
    "basicTaste": [
      "meaty",
      "smoky",
      "salty",
      "rich"
    ],
    "textureProfile": [
      "charred edges",
      "juicy slices",
      "fatty bites"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "meat-lover",
      "signature-dish"
    ],
    "avoidIfTags": [
      "no-pork",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Best for meat-focused meals; ask for specific cuts if you avoid pork or sausage.",
      "zh": "适合以肉为主的一餐；不吃猪肉或香肠要先说明想要的部位。",
      "nl": "Het beste voor vleesgerichte maaltijden; vraag naar specifieke stukken als je varkensvlees of worst vermijdt."
    },
    "spiceLevel": 0,
    "weightLevel": 5,
    "restaurantVariationLevel": "high",
    "confidenceTag": "audited-world-truth-batch-023",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1
  }),
  starterDish({
    "id": "acaraje",
    "metadataCode": "130006",
    "cuisineId": "brazilian",
    "names": {
      "en": "Acarajé",
      "zh": "巴西炸黑眼豆虾馅",
      "nl": "Acarajé",
      "local": "acarajé"
    },
    "category": "fried-snack",
    "cookingMethods": [
      "deep-fried",
      "assembled"
    ],
    "shortDescription": {
      "en": "Bahian black-eyed pea fritter fried in dendê oil and split open with vatapá, dried shrimp, salad, and pepper sauce.",
      "zh": "巴伊亚黑眼豆炸饼，用 dendê 红棕榈油炸后剖开，夹 vatapá、虾、沙拉和辣酱。",
      "nl": "Bahiaans zwartogenbonenbeignet gefrituurd in dendê, gevuld met vatapá, gedroogde garnaal, salade en pepersaus."
    },
    "cookingProfile": {
      "en": "Crisp bean fritter outside with rich shrimp-nut filling; dendê gives a distinctive red oil aroma.",
      "zh": "外层是豆香炸壳，内里浓郁带虾和坚果感，dendê 油有明显红油香。",
      "nl": "Krokante bonenbeignet met rijke garnaal-notenvulling; dendê geeft rode olie-aroma."
    },
    "cuisineRole": {
      "level": "signature",
      "tags": [
        "signature-dish",
        "street-food"
      ],
      "description": {
        "en": "An Afro-Brazilian street-food icon where shellfish and peanut risks are central.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "black-eyed-peas",
        40,
        "fritter base"
      ],
      [
        "shrimp",
        20,
        "filling"
      ],
      [
        "coconut-milk",
        10,
        "vatapa filling",
        "seasoning"
      ],
      [
        "peanuts",
        10,
        "nutty filling"
      ],
      [
        "dende-oil",
        10,
        "frying oil",
        "seasoning"
      ],
      [
        "mixed-vegetables",
        5,
        "salad"
      ],
      [
        "chili",
        5,
        "pepper sauce",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "dendê oil",
      "black-eyed pea fritter",
      "shrimp-vatapá filling"
    ],
    "basicTaste": [
      "fried",
      "savory",
      "nutty",
      "spicy"
    ],
    "textureProfile": [
      "crisp fritter",
      "creamy filling",
      "juicy shrimp"
    ],
    "riskFlags": [
      "contains-shellfish",
      "contains-peanut",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "signature-dish",
      "street-food"
    ],
    "avoidIfTags": [
      "shellfish-allergy",
      "peanut-allergy",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "A distinctive must-try if you can eat shellfish and peanuts; otherwise avoid.",
      "zh": "能吃虾和花生时很值得尝试；贝类或花生过敏者应避开。",
      "nl": "Een uitgesproken aanrader als je schaal- en pindaproducten kunt eten; anders vermijden."
    },
    "spiceLevel": 3,
    "weightLevel": 4,
    "confidenceTag": "audited-world-truth-batch-023",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "farofa",
    "metadataCode": "130007",
    "cuisineId": "brazilian",
    "names": {
      "en": "Farofa",
      "zh": "巴西炒木薯粉配菜",
      "nl": "Farofa",
      "local": "farofa"
    },
    "category": "side",
    "cookingMethods": [
      "toasted"
    ],
    "shortDescription": {
      "en": "Toasted cassava flour side, often cooked with butter, onion, bacon, egg, herbs, or banana depending on the version.",
      "zh": "炒香的木薯粉配菜，可加黄油、洋葱、培根、鸡蛋、香草或香蕉，版本很多。",
      "nl": "Geroosterd cassavemeel als bijgerecht, vaak met boter, ui, spek, ei, kruiden of banaan."
    },
    "cookingProfile": {
      "en": "Dry, crumbly, and toasty; it is sprinkled beside stews or grilled meats rather than eaten as a sauce.",
      "zh": "口感干松、颗粒感和烘香明显，通常撒在炖菜或烤肉旁边，不是酱汁。",
      "nl": "Droog, kruimelig en geroosterd; naast stoof of gegrild vlees, niet als saus."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "side",
        "classic-dish"
      ],
      "description": {
        "en": "A Brazilian side where dry crumbly texture is the key ordering clue.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "cassava-flour",
        65,
        "toasted flour"
      ],
      [
        "butter",
        10,
        "fat"
      ],
      [
        "bacon",
        10,
        "common savory add-in",
        "ingredient",
        "medium",
        true
      ],
      [
        "egg",
        10,
        "common add-in",
        "ingredient",
        "medium",
        true
      ],
      [
        "parsley",
        5,
        "herb",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "toasted cassava flour",
      "butter",
      "bacon or egg variants"
    ],
    "basicTaste": [
      "toasty",
      "savory",
      "dry",
      "crumbly"
    ],
    "textureProfile": [
      "dry crumbs",
      "grainy crunch",
      "oily toastiness"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "side"
    ],
    "avoidIfTags": [
      "no-pork",
      "egg-free",
      "dairy-free",
      "wants-saucy-food"
    ],
    "orderVerdict": {
      "en": "Good with stews or grilled meat, but it is intentionally dry and crumbly.",
      "zh": "很适合配炖菜或烤肉，但它本来就是干松颗粒感。",
      "nl": "Goed bij stoof of gegrild vlees, maar bewust droog en kruimelig."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "restaurantVariationLevel": "high",
    "confidenceTag": "audited-world-truth-batch-023",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1
  }),
  starterDish({
    "id": "brigadeiro",
    "metadataCode": "130008",
    "cuisineId": "brazilian",
    "names": {
      "en": "Brigadeiro",
      "zh": "巴西巧克力炼乳糖球",
      "nl": "Brigadeiro",
      "local": "brigadeiro"
    },
    "category": "dessert",
    "cookingMethods": [
      "stirred",
      "set"
    ],
    "shortDescription": {
      "en": "Brazilian chocolate sweet made from condensed milk, cocoa, and butter, rolled in chocolate sprinkles.",
      "zh": "巴西巧克力甜点，用炼乳、可可和黄油搅煮成软糖，再滚上巧克力屑。",
      "nl": "Braziliaanse chocoladesnoep van gecondenseerde melk, cacao en boter, gerold in hagelslag."
    },
    "cookingProfile": {
      "en": "Cooked down into a dense, fudgy bite; very sweet and dairy-forward.",
      "zh": "煮到浓缩成柔软软糖状，一口很甜，奶香明显。",
      "nl": "Ingekookt tot een dichte fudgeachtige hap; heel zoet en zuivelrijk."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "dessert",
        "classic-dish"
      ],
      "description": {
        "en": "A Brazilian party sweet where dairy and intense sweetness should be clear.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "milk-solids",
        35,
        "condensed milk base"
      ],
      [
        "sugar",
        25,
        "sweetness"
      ],
      [
        "chocolate",
        20,
        "chocolate body"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "cocoa",
        10,
        "cocoa flavor",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "condensed milk",
      "cocoa",
      "buttery fudge texture"
    ],
    "basicTaste": [
      "very sweet",
      "chocolatey",
      "creamy"
    ],
    "textureProfile": [
      "soft fudge",
      "sticky center",
      "sprinkle coating"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert"
    ],
    "avoidIfTags": [
      "dairy-free",
      "low-sugar"
    ],
    "orderVerdict": {
      "en": "Great for a small intense sweet; too sugary if you prefer light desserts.",
      "zh": "适合想吃小颗但甜度集中的甜点；不爱高甜就慎选。",
      "nl": "Goed voor een kleine intense zoetigheid; te zoet als je lichte desserts wilt."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "confidenceTag": "audited-world-truth-batch-023",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "pastel-brazilian",
    "metadataCode": "130009",
    "cuisineId": "brazilian",
    "names": {
      "en": "Brazilian Pastel",
      "zh": "巴西炸馅饼",
      "nl": "Braziliaanse pastel",
      "local": "pastel"
    },
    "category": "fried-snack",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "Thin, crisp Brazilian fried pastry filled with cheese, ground meat, chicken, shrimp, or heart of palm.",
      "zh": "巴西薄皮炸馅饼，常见奶酪、肉末、鸡肉、虾或棕榈芯馅。",
      "nl": "Dunne krokante Braziliaanse gefrituurde pastei met kaas, gehakt, kip, garnaal of palmhart."
    },
    "cookingProfile": {
      "en": "Fried quickly so the shell blisters and shatters, while the filling stays hot and savory.",
      "zh": "快速油炸，外皮起泡酥脆，内馅热而咸香。",
      "nl": "Snel gefrituurd zodat de korst blaast en kraakt, met hete hartige vulling."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "fried-snack"
      ],
      "description": {
        "en": "A Brazilian snack-market item where filling decides allergen risk.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "wheat-flour",
        45,
        "thin pastry"
      ],
      [
        "ground-meat",
        20,
        "common filling",
        "ingredient",
        "medium",
        true
      ],
      [
        "cheese",
        15,
        "common filling",
        "ingredient",
        "medium",
        true
      ],
      [
        "chicken",
        10,
        "alternate filling",
        "ingredient",
        "medium",
        true
      ],
      [
        "shrimp",
        5,
        "alternate filling",
        "ingredient",
        "high",
        true
      ],
      [
        "chili",
        5,
        "dip or sauce",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "blistered fried pastry",
      "hot savory filling",
      "market-style dipping sauce"
    ],
    "basicTaste": [
      "fried",
      "savory",
      "salty"
    ],
    "textureProfile": [
      "thin crisp shell",
      "hot filling",
      "airy pockets"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "contains-shellfish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "street-food",
      "fried-snack"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free",
      "shellfish-allergy"
    ],
    "orderVerdict": {
      "en": "A crowd-pleasing fried snack; choose the filling carefully for allergens.",
      "zh": "很容易接受的炸小吃；过敏源主要取决于具体馅料。",
      "nl": "Een publieksvriendelijke gefrituurde snack; kies de vulling zorgvuldig bij allergenen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "restaurantVariationLevel": "high",
    "confidenceTag": "audited-world-truth-batch-023",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1
  }),
  starterDish({
    "id": "vatapa",
    "metadataCode": "130010",
    "cuisineId": "brazilian",
    "names": {
      "en": "Vatapá",
      "zh": "巴西虾椰奶花生浓酱",
      "nl": "Vatapá",
      "local": "vatapá"
    },
    "category": "seafood",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Afro-Brazilian creamy paste or stew made with bread, shrimp, coconut milk, peanuts or cashews, and dendê oil.",
      "zh": "非裔巴西浓酱或炖菜，用面包、虾、椰奶、花生或腰果和 dendê 红棕榈油制成。",
      "nl": "Afro-Braziliaanse romige pasta of stoof van brood, garnaal, kokosmelk, pinda of cashew en dendê."
    },
    "cookingProfile": {
      "en": "Thick, smooth, and rich, often used as a filling for acarajé or served with rice.",
      "zh": "质地浓稠顺滑、很厚重，常作 acarajé 内馅或配米饭。",
      "nl": "Dik, glad en rijk, vaak als vulling voor acarajé of met rijst."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "seafood"
      ],
      "description": {
        "en": "An Afro-Brazilian dish where shellfish and nut risks are unavoidable signals.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "shrimp",
        25,
        "seafood"
      ],
      [
        "bread",
        20,
        "thickener"
      ],
      [
        "coconut-milk",
        20,
        "creamy body",
        "seasoning"
      ],
      [
        "peanuts",
        15,
        "nut thickener"
      ],
      [
        "dende-oil",
        10,
        "red palm depth",
        "seasoning"
      ],
      [
        "chili",
        5,
        "heat",
        "seasoning"
      ],
      [
        "garlic",
        5,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "dendê oil",
      "shrimp",
      "coconut-peanut thickness"
    ],
    "basicTaste": [
      "rich",
      "nutty",
      "briny",
      "creamy"
    ],
    "textureProfile": [
      "thick paste",
      "smooth sauce",
      "small shrimp pieces"
    ],
    "riskFlags": [
      "contains-shellfish",
      "contains-peanut",
      "contains-gluten",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "classic-dish",
      "seafood"
    ],
    "avoidIfTags": [
      "shellfish-allergy",
      "peanut-allergy",
      "gluten-free",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Very distinctive and rich; avoid with shellfish, peanut, or gluten concerns.",
      "zh": "风味很有辨识度且浓厚；贝类、花生或麸质过敏者要避开。",
      "nl": "Heel uitgesproken en rijk; vermijden bij schaal-, pinda- of glutenproblemen."
    },
    "spiceLevel": 2,
    "weightLevel": 4,
    "confidenceTag": "audited-world-truth-batch-023",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "bobó-de-camarão",
    "imageSlug": "bobo-de-camarao",
    "metadataCode": "130011",
    "cuisineId": "brazilian",
    "names": {
      "en": "Bobó de Camarão",
      "zh": "巴西木薯椰奶虾浓汤",
      "nl": "Bobó de camarão",
      "local": "bobó de camarão"
    },
    "category": "seafood",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Brazilian shrimp stew in a creamy cassava purée with coconut milk, tomato, peppers, and dendê oil.",
      "zh": "巴西虾和木薯泥炖菜，加入椰奶、番茄、甜椒和 dendê 红棕榈油，口感浓滑。",
      "nl": "Braziliaanse garnalenstoof in romige cassavepuree met kokosmelk, tomaat, paprika en dendê."
    },
    "cookingProfile": {
      "en": "Cassava thickens the stew into a soft purée around juicy shrimp.",
      "zh": "木薯让汤汁变成柔滑泥状，包住多汁的虾。",
      "nl": "Cassave bindt de stoof tot zachte puree rond sappige garnalen."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "seafood"
      ],
      "description": {
        "en": "A Brazilian shrimp dish where cassava texture differentiates it from moqueca.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "shrimp",
        35,
        "seafood"
      ],
      [
        "cassava",
        30,
        "creamy purée"
      ],
      [
        "coconut-milk",
        15,
        "creamy broth",
        "seasoning"
      ],
      [
        "tomato",
        10,
        "sauce body"
      ],
      [
        "bell-pepper",
        5,
        "vegetable"
      ],
      [
        "dende-oil",
        5,
        "red palm depth",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "cassava purée",
      "shrimp",
      "coconut milk",
      "dendê oil"
    ],
    "basicTaste": [
      "creamy",
      "briny",
      "savory",
      "slightly sweet"
    ],
    "textureProfile": [
      "smooth cassava sauce",
      "juicy shrimp",
      "soft vegetables"
    ],
    "riskFlags": [
      "contains-shellfish"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "seafood",
      "comfort-food"
    ],
    "avoidIfTags": [
      "shellfish-allergy",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Choose it for creamy shrimp comfort; avoid if shellfish is a concern.",
      "zh": "想吃浓滑虾类炖菜很适合；贝类过敏者不要点。",
      "nl": "Kies dit voor romige garnalencomfort; vermijden bij schaaldierallergie."
    },
    "spiceLevel": 1,
    "weightLevel": 4,
    "confidenceTag": "audited-world-truth-batch-023",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "quindim",
    "metadataCode": "130012",
    "cuisineId": "brazilian",
    "names": {
      "en": "Quindim",
      "zh": "巴西椰香蛋黄布丁",
      "nl": "Quindim",
      "local": "quindim"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked",
      "set"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "Glossy Brazilian baked custard made mainly with egg yolks, sugar, and coconut.",
      "zh": "巴西亮面烤蛋黄布丁，主要由蛋黄、糖和椰子制成，甜度高。",
      "nl": "Glanzende Braziliaanse gebakken custard van vooral eidooier, suiker en kokos."
    },
    "cookingProfile": {
      "en": "Set into a small shiny custard with a dense eggy body and coconut base.",
      "zh": "凝固定型成小份亮面布丁，蛋黄感浓，底部常有椰蓉层。",
      "nl": "Gestold tot kleine glanzende custard met dichte eierbody en kokoslaag."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "dessert",
        "classic-dish"
      ],
      "description": {
        "en": "A Brazilian-Portuguese heritage dessert where egg is the defining risk.",
        "zh": "已按真实菜品形态、常见配料、口感和点餐风险人工重写。",
        "nl": "Handmatig herschreven op echte vorm, gangbare ingredienten, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "egg",
        40,
        "egg-yolk custard"
      ],
      [
        "sugar",
        30,
        "sweetness"
      ],
      [
        "toasted-coconut",
        20,
        "coconut body"
      ],
      [
        "butter",
        5,
        "richness"
      ],
      [
        "vanilla",
        5,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "egg yolk custard",
      "coconut",
      "glossy caramel-like sweetness"
    ],
    "basicTaste": [
      "very sweet",
      "eggy",
      "coconutty",
      "rich"
    ],
    "textureProfile": [
      "smooth custard",
      "dense bite",
      "coconut layer"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert"
    ],
    "avoidIfTags": [
      "egg-free",
      "dairy-free",
      "low-sugar"
    ],
    "orderVerdict": {
      "en": "Best if you like eggy custards and coconut; skip if you dislike very sweet desserts.",
      "zh": "喜欢蛋黄布丁和椰香时很适合；不爱高甜甜点就跳过。",
      "nl": "Goed als je eiercustard en kokos lekker vindt; overslaan als je heel zoet niet prettig vindt."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "confidenceTag": "audited-world-truth-batch-023",
    "metadataConfidence": 0.86,
    "acquiredTasteLevel": 1,
    "restaurantVariationLevel": "medium"
  }),
];
