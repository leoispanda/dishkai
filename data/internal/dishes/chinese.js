import { starterDish } from "./starter-dish.js";

export const chineseDishes = [
  starterDish({
    "id": "mapo-tofu",
    "metadataCode": "111001",
    "cuisineId": "chinese",
    "names": {
      "en": "Mapo Tofu",
      "zh": "麻婆豆腐",
      "nl": "Mapo tofu",
      "local": "麻婆豆腐"
    },
    "category": "main",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Sichuan tofu dish with chili bean paste, minced meat, and numbing pepper aroma.",
      "zh": "川菜豆腐菜，常有豆瓣酱、肉末和花椒麻香。",
      "nl": "Sichuan-tofugerecht met chilibonenpasta, gehakt en verdovende peperaroma."
    },
    "cookingProfile": {
      "en": "Soft tofu is simmered in a spicy sauce, so the dish is saucy, hot, and very rice-friendly.",
      "zh": "嫩豆腐在辣酱汁中烧制，入口软滑、麻辣、有酱汁感，很下饭。",
      "nl": "Zachte tofu wordt in pittige saus gesudderd, sauzig, heet en goed met rijst."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "regional",
        "internationally-known"
      ],
      "description": {
        "en": "A broadly recognized Chinese dish; useful for ordering expectations, with regional and restaurant variation often high.",
        "zh": "这是一道辨识度高的中餐，适合判断点餐预期；地区和餐厅差异通常较大。",
        "nl": "Een herkenbaar Chinees gerecht voor bestelverwachtingen, vaak met grote regionale en restaurantvariatie."
      }
    },
    "composition": [
      [
        "tofu",
        45,
        "base"
      ],
      [
        "minced-pork",
        20,
        "protein"
      ],
      [
        "doubanjiang",
        15,
        "sauce-base",
        "seasoning"
      ],
      [
        "sichuan-pepper",
        10,
        "aroma",
        "seasoning"
      ],
      [
        "steamed-rice",
        10,
        "side"
      ]
    ],
    "distinctiveFlavorSources": [
      "doubanjiang",
      "sichuan-pepper",
      "chili"
    ],
    "basicTaste": [
      "spicy",
      "umami",
      "salty"
    ],
    "textureProfile": [
      "soft tofu",
      "saucy meat",
      "numbing finish"
    ],
    "riskFlags": [
      "can-be-spicy",
      "contains-soy",
      "contains-pork"
    ],
    "orderVerdict": {
      "en": "Great with rice if you like spicy, numbing Sichuan flavors; not a mild tofu dish.",
      "zh": "喜欢川味麻辣、想配饭很适合；它不是清淡豆腐。",
      "nl": "Erg goed met rijst als je pittige, verdovende Sichuan-smaken wilt; geen mild tofugerecht."
    },
    "spiceLevel": 4,
    "weightLevel": 3,
    "acquiredTasteLevel": 2,
    "confidenceTag": "audited-core-batch-001",
    "metadataConfidence": 0.82
  }),
  starterDish({
    "id": "peking-duck",
    "metadataCode": "111002",
    "cuisineId": "chinese",
    "names": {
      "en": "Peking Duck",
      "zh": "北京烤鸭",
      "nl": "Peking eend",
      "local": "北京烤鸭"
    },
    "category": "meat",
    "cookingMethods": [
      "grilled"
    ],
    "portionType": "shareable",
    "goodForSharing": true,
    "shortDescription": {
      "en": "Roast duck served with thin pancakes, cucumber, and sweet bean-style sauce.",
      "zh": "烤鸭常配薄饼、黄瓜和甜面酱，适合分享。",
      "nl": "Geroosterde eend met dunne pannenkoekjes, komkommer en zoete bonensaus."
    },
    "cookingProfile": {
      "en": "Roasted duck is sliced and wrapped at the table, so it feels rich, crisp, and interactive.",
      "zh": "烤鸭切片后卷饼吃，油香、皮脆，也很适合多人分享。",
      "nl": "Geroosterde eend wordt gesneden en aan tafel gewikkeld, rijk, krokant en interactief."
    },
    "cuisineRole": {
      "level": "signature",
      "tags": [
        "classic",
        "internationally-known"
      ],
      "description": {
        "en": "A broadly recognized Chinese dish; useful for ordering expectations, with regional and restaurant variation often high.",
        "zh": "这是一道辨识度高的中餐，适合判断点餐预期；地区和餐厅差异通常较大。",
        "nl": "Een herkenbaar Chinees gerecht voor bestelverwachtingen, vaak met grote regionale en restaurantvariatie."
      }
    },
    "composition": [
      [
        "duck",
        45,
        "protein"
      ],
      [
        "thin-pancakes",
        25,
        "wrap"
      ],
      [
        "cucumber",
        10,
        "freshness"
      ],
      [
        "hoisin-sauce",
        15,
        "sauce",
        "seasoning"
      ],
      [
        "green-onion",
        5,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "hoisin-sauce"
    ],
    "basicTaste": [
      "savory",
      "sweet",
      "rich"
    ],
    "textureProfile": [
      "crisp skin",
      "soft pancake",
      "fresh cucumber"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-soy"
    ],
    "orderVerdict": {
      "en": "A shareable special-feeling order if you want rich duck and table assembly.",
      "zh": "想吃有仪式感、适合分享的肉菜时很合适。",
      "nl": "Een deelbaar, bijzonder aanvoelend gerecht als je rijke eend en tafelassemblage wilt."
    },
    "weightLevel": 4,
    "confidenceTag": "audited-core-batch-001",
    "metadataConfidence": 0.82
  }),
  starterDish({
    "id": "xiao-long-bao",
    "metadataCode": "111003",
    "cuisineId": "chinese",
    "names": {
      "en": "Xiao Long Bao",
      "zh": "小笼包",
      "nl": "Xiao long bao",
      "local": "小笼包"
    },
    "category": "dumpling",
    "cookingMethods": [
      "steamed"
    ],
    "shortDescription": {
      "en": "Steamed soup dumplings with a thin wrapper, pork filling, and hot broth inside.",
      "zh": "薄皮蒸汤包，通常有猪肉馅和热汤汁。",
      "nl": "Gestoomde soepdumplings met dun vel, varkensvulling en hete bouillon binnenin."
    },
    "cookingProfile": {
      "en": "The dumplings are steamed, keeping the wrapper soft and the inside juicy and hot.",
      "zh": "蒸制让外皮柔软，内部汤汁热而多汁，吃时要小心烫。",
      "nl": "Gestoomd, met zacht vel en sappige hete binnenkant."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "classic",
        "internationally-known"
      ],
      "description": {
        "en": "A broadly recognized Chinese dish; useful for ordering expectations, with regional and restaurant variation often high.",
        "zh": "这是一道辨识度高的中餐，适合判断点餐预期；地区和餐厅差异通常较大。",
        "nl": "Een herkenbaar Chinees gerecht voor bestelverwachtingen, vaak met grote regionale en restaurantvariatie."
      }
    },
    "composition": [
      [
        "dumpling-wrapper",
        35,
        "wrapper"
      ],
      [
        "pork",
        35,
        "filling"
      ],
      [
        "soup-gelatin",
        20,
        "broth-center"
      ],
      [
        "soy-sauce",
        5,
        "dip",
        "seasoning"
      ],
      [
        "vinegar",
        5,
        "dip",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "soy-sauce"
    ],
    "basicTaste": [
      "savory",
      "umami",
      "mild"
    ],
    "textureProfile": [
      "soft wrapper",
      "juicy center",
      "hot broth"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-pork",
      "contains-soy"
    ],
    "orderVerdict": {
      "en": "A good dumpling order if you like juicy fillings; bite carefully because the soup can be hot.",
      "zh": "喜欢多汁点心很适合；里面汤汁很烫，吃的时候要小心。",
      "nl": "Goed als je sappige dumplings wilt; voorzichtig bijten omdat de soep heet kan zijn."
    },
    "weightLevel": 2,
    "confidenceTag": "audited-core-batch-001",
    "metadataConfidence": 0.82
  }),
  starterDish({
    "id": "chow-mein",
    "metadataCode": "111004",
    "cuisineId": "chinese",
    "names": {
      "en": "Chow Mein",
      "zh": "炒面",
      "nl": "Chow mein",
      "local": "炒面"
    },
    "category": "noodle",
    "cookingMethods": [
      "stir-fried"
    ],
    "shortDescription": {
      "en": "Stir-fried wheat noodles with vegetables, soy-based seasoning, and optional meat or seafood.",
      "zh": "小麦面条与蔬菜、酱油风味调味和肉/海鲜等快速炒制。",
      "nl": "Roergebakken tarwenoedels met groenten, sojakruiding en eventueel vlees of zeevruchten."
    },
    "cookingProfile": {
      "en": "Noodles are tossed in a hot pan, so they feel savory, glossy, and lightly oily.",
      "zh": "面条热锅快炒，整体咸香、油润，有时带锅气。",
      "nl": "Noedels worden in hete pan gemengd, hartig, glanzend en licht olieachtig."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "internationally-known"
      ],
      "description": {
        "en": "A broadly recognized Chinese dish; useful for ordering expectations, with regional and restaurant variation often high.",
        "zh": "这是一道辨识度高的中餐，适合判断点餐预期；地区和餐厅差异通常较大。",
        "nl": "Een herkenbaar Chinees gerecht voor bestelverwachtingen, vaak met grote regionale en restaurantvariatie."
      }
    },
    "composition": [
      [
        "wheat-noodles",
        55,
        "base"
      ],
      [
        "mixed-vegetables",
        20,
        "vegetable"
      ],
      [
        "chicken",
        15,
        "protein"
      ],
      [
        "soy-sauce",
        10,
        "seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "soy-sauce"
    ],
    "basicTaste": [
      "savory",
      "salty",
      "umami",
      "oily"
    ],
    "textureProfile": [
      "springy noodles",
      "glossy sauce",
      "soft-crisp vegetables"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-soy"
    ],
    "orderVerdict": {
      "en": "A familiar noodle choice if you want something savory and filling rather than soupy.",
      "zh": "想吃咸香饱腹、不带汤的面食时很稳。",
      "nl": "Een bekende noedelkeuze als je iets hartigs en vullends wilt, niet soepig."
    },
    "weightLevel": 3,
    "confidenceTag": "audited-core-batch-001",
    "metadataConfidence": 0.82
  }),
  starterDish({
    "id": "hot-pot",
    "metadataCode": "111005",
    "cuisineId": "chinese",
    "names": {
      "en": "Hot Pot",
      "zh": "火锅",
      "nl": "Hotpot",
      "local": "火锅"
    },
    "category": "soup",
    "cookingMethods": [
      "simmered"
    ],
    "portionType": "shareable",
    "goodForSharing": true,
    "shortDescription": {
      "en": "Shared simmering broth where sliced meat, seafood, tofu, and vegetables are cooked at the table.",
      "zh": "共享锅底中涮煮肉片、海鲜、豆腐和蔬菜，通常多人分享。",
      "nl": "Gedeelde sudderende bouillon waarin vlees, zeevruchten, tofu en groenten aan tafel garen."
    },
    "cookingProfile": {
      "en": "Ingredients cook in the broth at the table, so heat level and richness depend heavily on the soup base.",
      "zh": "食材在锅底里现涮，辣度和厚重感很取决于汤底。",
      "nl": "Ingredienten garen aan tafel in bouillon; pit en rijkheid hangen sterk af van de basis."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "regional",
        "classic"
      ],
      "description": {
        "en": "A broadly recognized Chinese dish; useful for ordering expectations, with regional and restaurant variation often high.",
        "zh": "这是一道辨识度高的中餐，适合判断点餐预期；地区和餐厅差异通常较大。",
        "nl": "Een herkenbaar Chinees gerecht voor bestelverwachtingen, vaak met grote regionale en restaurantvariatie."
      }
    },
    "composition": [
      [
        "hot-pot-broth",
        35,
        "soup-base"
      ],
      [
        "sliced-meat",
        25,
        "protein"
      ],
      [
        "tofu",
        15,
        "body"
      ],
      [
        "mixed-vegetables",
        15,
        "vegetable"
      ],
      [
        "chili",
        10,
        "heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "chili",
      "sichuan-pepper"
    ],
    "basicTaste": [
      "savory",
      "spicy",
      "umami"
    ],
    "textureProfile": [
      "hot broth",
      "fresh-cooked items",
      "variable dips"
    ],
    "riskFlags": [
      "can-be-spicy",
      "contains-soy"
    ],
    "orderVerdict": {
      "en": "Best for sharing and exploring; ask about spicy broth if you want a gentler meal.",
      "zh": "最适合多人分享和慢慢涮；不想太辣要主动问清锅底。",
      "nl": "Het beste om te delen en te ontdekken; vraag naar pittige bouillon als je milder wilt."
    },
    "spiceLevel": 3,
    "weightLevel": 4,
    "confidenceTag": "audited-core-batch-001",
    "metadataConfidence": 0.82
  })
];
