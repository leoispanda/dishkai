import { starterDish } from "./starter-dish.js";

export const belgianDishes = [
  starterDish({
    "id": "moules-frites",
    "metadataCode": "107001",
    "cuisineId": "belgian",
    "names": {
      "en": "Moules-Frites",
      "zh": "比利时贻贝配薯条",
      "nl": "Mosselen met friet",
      "local": "Moules-frites"
    },
    "category": "seafood",
    "cookingMethods": [
      "simmered",
      "deep-fried"
    ],
    "shortDescription": {
      "en": "Steamed or simmered mussels served with fries, often with white wine, herbs, or cream sauce.",
      "zh": "贻贝蒸/煮后配薯条，常见白酒、香草或奶油酱汁。",
      "nl": "Gestoomde of gesudderde mosselen met friet, vaak met witte wijn, kruiden of roomsaus."
    },
    "cookingProfile": {
      "en": "Mussels are cooked in a pot and served with fries, so it is briny, juicy, and shareable-feeling.",
      "zh": "贻贝一锅煮后配薯条，咸鲜多汁，很有分享感。",
      "nl": "Mosselen worden in een pot gegaard en met friet geserveerd, ziltig, sappig en deelbaar."
    },
    "cuisineRole": {
      "level": "signature",
      "tags": [
        "classic",
        "internationally-known"
      ],
      "description": {
        "en": "A broadly recognized Belgian dish; useful for judging texture, richness, common pairings, and ordering risks.",
        "zh": "这是一道辨识度高的比利时菜，适合判断口感、厚重感、常见搭配和点餐风险。",
        "nl": "Een herkenbaar Belgisch gerecht voor textuur, rijkheid, gewone combinaties en bestelrisico's."
      }
    },
    "composition": [
      [
        "mussels",
        55,
        "seafood"
      ],
      [
        "fries",
        25,
        "side"
      ],
      [
        "wine",
        10,
        "sauce-base"
      ],
      [
        "herbs",
        5,
        "aroma"
      ],
      [
        "cream",
        5,
        "optional-sauce"
      ]
    ],
    "distinctiveFlavorSources": [
      "herbs",
      "beer"
    ],
    "basicTaste": [
      "briny",
      "savory",
      "rich"
    ],
    "textureProfile": [
      "tender mussels",
      "crisp fries",
      "brothy sauce"
    ],
    "riskFlags": [
      "contains-shellfish",
      "contains-alcohol",
      "contains-dairy"
    ],
    "orderVerdict": {
      "en": "A classic Belgian order if you like mussels; check shellfish and sauce style first.",
      "zh": "喜欢贻贝的话是很经典的比利时选择；先确认甲壳类/贝类和酱汁类型。",
      "nl": "Een klassieke Belgische keuze als je mosselen lust; check schelpdieren en saus eerst."
    },
    "weightLevel": 3,
    confidenceTag: "audited-core-batch-002",
    metadataConfidence: 0.82
  }),
  starterDish({
    "id": "belgian-waffle",
    "metadataCode": "107002",
    "cuisineId": "belgian",
    "names": {
      "en": "Belgian Waffle",
      "zh": "比利时华夫饼",
      "nl": "Belgische wafel",
      "local": "Gaufre belge"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Airy waffle with crisp edges, often served plain, with sugar, cream, fruit, or chocolate.",
      "zh": "外缘微脆、内部蓬松的华夫饼，常配糖、奶油、水果或巧克力。",
      "nl": "Luchtige wafel met krokante rand, vaak naturel of met suiker, room, fruit of chocolade."
    },
    "cookingProfile": {
      "en": "The batter is cooked in a waffle iron, giving a crisp outside and soft airy center.",
      "zh": "面糊在华夫机中烤制，外层微脆、内部蓬松。",
      "nl": "Het beslag gaart in een wafelijzer, krokant buiten en zacht luchtig binnen."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "internationally-known"
      ],
      "description": {
        "en": "A broadly recognized Belgian dish; useful for judging texture, richness, common pairings, and ordering risks.",
        "zh": "这是一道辨识度高的比利时菜，适合判断口感、厚重感、常见搭配和点餐风险。",
        "nl": "Een herkenbaar Belgisch gerecht voor textuur, rijkheid, gewone combinaties en bestelrisico's."
      }
    },
    "composition": [
      [
        "waffle-batter",
        70,
        "base"
      ],
      [
        "sugar",
        15,
        "sweetener"
      ],
      [
        "cream",
        10,
        "topping"
      ],
      [
        "fruit-sauce-or-caramel",
        5,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "vanilla"
    ],
    "basicTaste": [
      "sweet",
      "mild",
      "creamy"
    ],
    "textureProfile": [
      "crisp edge",
      "airy center"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "orderVerdict": {
      "en": "A safe dessert or snack if you want something sweet, soft, and familiar.",
      "zh": "想吃甜的、柔软熟悉的小吃或甜点时很稳。",
      "nl": "Een veilige dessert- of snackkeuze als je iets zoets, zachts en bekends wilt."
    },
    "weightLevel": 2,
    confidenceTag: "audited-core-batch-002",
    metadataConfidence: 0.82
  }),
  starterDish({
    "id": "carbonnade-flamande",
    "metadataCode": "107003",
    "cuisineId": "belgian",
    "names": {
      "en": "Carbonnade Flamande",
      "zh": "佛兰德啤酒炖牛肉",
      "nl": "Vlaamse stoverij",
      "local": "Carbonnade flamande"
    },
    "category": "meat",
    "cookingMethods": [
      "braised"
    ],
    "shortDescription": {
      "en": "Belgian beef stew braised with beer, onion, and sweet-savory sauce, often served with fries.",
      "zh": "比利时啤酒炖牛肉，常有洋葱和甜咸酱汁，通常配薯条。",
      "nl": "Belgische runderstoof met bier, ui en zoet-hartige saus, vaak met friet."
    },
    "cookingProfile": {
      "en": "Beef is slowly braised in beer sauce, making it tender, dark, and rich.",
      "zh": "牛肉在啤酒酱汁里慢炖，软烂、颜色深、味道浓郁。",
      "nl": "Rund wordt langzaam in biersaus gestoofd, mals, donker en rijk."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "regional"
      ],
      "description": {
        "en": "A broadly recognized Belgian dish; useful for judging texture, richness, common pairings, and ordering risks.",
        "zh": "这是一道辨识度高的比利时菜，适合判断口感、厚重感、常见搭配和点餐风险。",
        "nl": "Een herkenbaar Belgisch gerecht voor textuur, rijkheid, gewone combinaties en bestelrisico's."
      }
    },
    "composition": [
      [
        "beef",
        50,
        "protein"
      ],
      [
        "beer",
        20,
        "sauce-base",
        "seasoning"
      ],
      [
        "onion",
        15,
        "aroma"
      ],
      [
        "fries",
        10,
        "side"
      ],
      [
        "mustard",
        5,
        "depth",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "beer",
      "mustard"
    ],
    "basicTaste": [
      "savory",
      "sweet",
      "rich"
    ],
    "textureProfile": [
      "tender beef",
      "dark sauce",
      "crisp fries"
    ],
    "riskFlags": [
      "contains-alcohol",
      "contains-gluten"
    ],
    "orderVerdict": {
      "en": "A rich Belgian comfort dish if you want tender beef and beer-based sauce.",
      "zh": "想吃软烂牛肉和啤酒酱汁时很适合，整体偏厚重。",
      "nl": "Een rijk Belgisch comfortgerecht als je mals rund en biersaus wilt."
    },
    "weightLevel": 4,
    confidenceTag: "audited-core-batch-002",
    metadataConfidence: 0.82
  }),
  starterDish({
    "id": "waterzooi",
    "metadataCode": "107004",
    "cuisineId": "belgian",
    "names": {
      "en": "Waterzooi",
      "zh": "比利时奶油炖鸡/鱼",
      "nl": "Waterzooi",
      "local": "Waterzooi"
    },
    "category": "soup",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Gent-style creamy stew or soup, often with chicken or fish, vegetables, broth, and cream.",
      "zh": "根特风格奶油炖汤，常用鸡肉或鱼、蔬菜、高汤和奶油。",
      "nl": "Gentse romige stoofsoep, vaak met kip of vis, groenten, bouillon en room."
    },
    "cookingProfile": {
      "en": "Protein and vegetables simmer in a creamy broth, making it gentle, warm, and spoonable.",
      "zh": "肉/鱼和蔬菜在奶油汤底中慢煮，温和、热乎、适合用勺吃。",
      "nl": "Eiwit en groenten sudderen in romige bouillon, zacht, warm en lepelbaar."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional",
        "classic"
      ],
      "description": {
        "en": "A broadly recognized Belgian dish; useful for judging texture, richness, common pairings, and ordering risks.",
        "zh": "这是一道辨识度高的比利时菜，适合判断口感、厚重感、常见搭配和点餐风险。",
        "nl": "Een herkenbaar Belgisch gerecht voor textuur, rijkheid, gewone combinaties en bestelrisico's."
      }
    },
    "composition": [
      [
        "chicken",
        35,
        "protein"
      ],
      [
        "broth",
        25,
        "soup-base"
      ],
      [
        "mixed-vegetables",
        20,
        "body"
      ],
      [
        "cream",
        15,
        "richness"
      ],
      [
        "herbs",
        5,
        "aroma"
      ]
    ],
    "distinctiveFlavorSources": [
      "herbs"
    ],
    "basicTaste": [
      "creamy",
      "mild",
      "savory"
    ],
    "textureProfile": [
      "creamy broth",
      "tender chicken",
      "soft vegetables"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "orderVerdict": {
      "en": "A gentler Belgian stew if you want creaminess without a heavy fried profile.",
      "zh": "想吃温和奶油炖汤、但不想吃炸物时很适合。",
      "nl": "Een zachtere Belgische stoofsoep als je romigheid wilt zonder zwaar gefrituurd profiel."
    },
    "weightLevel": 3,
    confidenceTag: "audited-core-batch-002",
    metadataConfidence: 0.82
  }),
  starterDish({
    "id": "chicon-au-gratin",
    "metadataCode": "107005",
    "cuisineId": "belgian",
    "names": {
      "en": "Chicon au Gratin",
      "zh": "比利时菊苣火腿奶酪焗",
      "nl": "Witloof met ham en kaas",
      "local": "Chicon au gratin"
    },
    "category": "vegetable-main",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Belgian endive wrapped with ham and baked in creamy cheese sauce.",
      "zh": "比利时菊苣卷火腿后加奶油奶酪酱焗烤。",
      "nl": "Witloof met ham, gebakken in romige kaassaus."
    },
    "cookingProfile": {
      "en": "Endive is baked in cheese sauce, so it is creamy, soft, and slightly bitter underneath.",
      "zh": "菊苣在奶酪酱中焗烤，奶香柔软，但底味带一点苦。",
      "nl": "Witloof wordt in kaassaus gebakken, romig, zacht en licht bitter eronder."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "regional"
      ],
      "description": {
        "en": "A broadly recognized Belgian dish; useful for judging texture, richness, common pairings, and ordering risks.",
        "zh": "这是一道辨识度高的比利时菜，适合判断口感、厚重感、常见搭配和点餐风险。",
        "nl": "Een herkenbaar Belgisch gerecht voor textuur, rijkheid, gewone combinaties en bestelrisico's."
      }
    },
    "composition": [
      [
        "endive",
        40,
        "vegetable"
      ],
      [
        "cheese",
        25,
        "sauce"
      ],
      [
        "cream",
        20,
        "sauce-base"
      ],
      [
        "bacon",
        15,
        "wrap"
      ]
    ],
    "distinctiveFlavorSources": [
      "cheese"
    ],
    "basicTaste": [
      "creamy",
      "savory",
      "mildly-bitter"
    ],
    "textureProfile": [
      "soft endive",
      "creamy cheese sauce"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-pork"
    ],
    "orderVerdict": {
      "en": "Good if you like creamy baked vegetables; the endive can taste slightly bitter.",
      "zh": "喜欢奶酪焗蔬菜会适合；菊苣可能有轻微苦味。",
      "nl": "Goed als je romige ovengroenten wilt; witloof kan licht bitter smaken."
    },
    "weightLevel": 3,
    "acquiredTasteLevel": 2,
    confidenceTag: "audited-core-batch-002",
    metadataConfidence: 0.82
  })
];
