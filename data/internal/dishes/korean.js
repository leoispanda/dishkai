import { starterDish } from "./starter-dish.js";

export const koreanDishes = [
  starterDish({
    "id": "bibimbap",
    "metadataCode": "110001",
    "cuisineId": "korean",
    "names": {
      "en": "Bibimbap",
      "zh": "韩式拌饭",
      "nl": "Bibimbap",
      "local": "비빔밥"
    },
    "category": "rice",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Rice bowl with vegetables, egg, gochujang, and often beef, mixed before eating.",
      "zh": "米饭搭配蔬菜、鸡蛋、韩式辣酱，常有牛肉，吃前拌匀。",
      "nl": "Rijstkom met groenten, ei, gochujang en vaak rundvlees, gemengd voor het eten."
    },
    "cookingProfile": {
      "en": "Warm rice and toppings are mixed at the table, so each bite becomes saucy and varied.",
      "zh": "温热米饭和配料上桌后拌开，每口都有酱感和丰富口感。",
      "nl": "Warme rijst en toppings worden aan tafel gemengd, waardoor elke hap sauzig en gevarieerd is."
    },
    "cuisineRole": {
      "level": "signature",
      "tags": [
        "classic",
        "first-timer-friendly",
        "internationally-known"
      ],
      "description": {
        "en": "A broadly recognized Korean dish; useful for judging heat level, fermentation, texture, and common ordering risks.",
        "zh": "这是一道辨识度高的韩餐，适合判断辣度、发酵风味、口感和常见点餐风险。",
        "nl": "Een herkenbaar Koreaans gerecht voor pittigheid, fermentatie, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "steamed-rice",
        40,
        "base"
      ],
      [
        "mixed-vegetables",
        25,
        "topping"
      ],
      [
        "beef",
        15,
        "protein"
      ],
      [
        "egg",
        10,
        "topping"
      ],
      [
        "gochujang",
        10,
        "sauce",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "gochujang",
      "sesame-oil"
    ],
    "basicTaste": [
      "savory",
      "spicy",
      "umami",
      "mildly-sweet"
    ],
    "textureProfile": [
      "soft rice",
      "mixed vegetables",
      "saucy finish"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-soy",
      "contains-sesame",
      "can-be-spicy"
    ],
    "goodForTags": [
      "first-timer-friendly",
      "safe-choice"
    ],
    "orderVerdict": {
      "en": "A strong first Korean order if you like rice bowls and can handle a little spicy sauce.",
      "zh": "如果你喜欢拌饭类、能接受一点辣酱，这是很稳的韩餐第一选择。",
      "nl": "Een sterke eerste Koreaanse keuze als je rijstkommen en een beetje pittige saus prettig vindt."
    },
    "spiceLevel": 2,
    "weightLevel": 3,
    "confidenceTag": "audited-core-batch-001",
    "metadataConfidence": 0.82
  }),
  starterDish({
    "id": "kimchi-jjigae",
    "metadataCode": "110002",
    "cuisineId": "korean",
    "names": {
      "en": "Kimchi Jjigae",
      "zh": "泡菜汤",
      "nl": "Kimchi jjigae",
      "local": "김치찌개"
    },
    "category": "soup",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Hot Korean stew built around kimchi, broth, tofu, and often pork.",
      "zh": "以泡菜、汤底、豆腐为核心的韩式热锅汤，常加入猪肉。",
      "nl": "Hete Koreaanse stoofsoep rond kimchi, bouillon, tofu en vaak varkensvlees."
    },
    "cookingProfile": {
      "en": "Kimchi is simmered into the broth, so it tastes sour, spicy, warm, and comforting.",
      "zh": "泡菜煮进汤里，整体酸辣、热乎、很下饭。",
      "nl": "Kimchi wordt in de bouillon gesudderd, zuur, pittig, warm en comfortabel."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic"
      ],
      "description": {
        "en": "A broadly recognized Korean dish; useful for judging heat level, fermentation, texture, and common ordering risks.",
        "zh": "这是一道辨识度高的韩餐，适合判断辣度、发酵风味、口感和常见点餐风险。",
        "nl": "Een herkenbaar Koreaans gerecht voor pittigheid, fermentatie, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "kimchi",
        30,
        "base"
      ],
      [
        "broth",
        30,
        "soup-base"
      ],
      [
        "tofu",
        20,
        "body"
      ],
      [
        "pork",
        15,
        "protein"
      ],
      [
        "gochujang",
        5,
        "heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "gochujang",
      "sesame-oil"
    ],
    "basicTaste": [
      "sour",
      "spicy",
      "umami",
      "salty"
    ],
    "textureProfile": [
      "hot broth",
      "soft tofu",
      "crunchy-soft kimchi"
    ],
    "riskFlags": [
      "can-be-spicy",
      "contains-soy",
      "contains-pork"
    ],
    "orderVerdict": {
      "en": "Good if you want a hot sour-spicy stew; less ideal if you want mild food.",
      "zh": "想吃热乎酸辣汤锅很适合；如果想吃清淡就不太适合。",
      "nl": "Goed als je een hete zuur-pittige stoofsoep wilt; minder ideaal voor mild eten."
    },
    "spiceLevel": 3,
    "weightLevel": 3,
    "confidenceTag": "audited-core-batch-001",
    "metadataConfidence": 0.82
  }),
  starterDish({
    "id": "bulgogi",
    "metadataCode": "110003",
    "cuisineId": "korean",
    "names": {
      "en": "Bulgogi",
      "zh": "韩式烤牛肉",
      "nl": "Bulgogi",
      "local": "불고기"
    },
    "category": "meat",
    "cookingMethods": [
      "grilled",
      "stir-fried"
    ],
    "shortDescription": {
      "en": "Thin beef marinated in sweet-savory soy-based seasoning, grilled or stir-fried.",
      "zh": "薄切牛肉用甜咸酱油风味腌制后烤或炒，口感软嫩。",
      "nl": "Dun rundvlees gemarineerd in zoet-hartige soja-kruiding, gegrild of geroerbakt."
    },
    "cookingProfile": {
      "en": "Thin slices cook quickly, so the meat is tender, glossy, and sweet-savory.",
      "zh": "薄肉片快速加热，通常软嫩油润，甜咸鲜明显。",
      "nl": "Dunne plakjes garen snel, dus mals, glanzend en zoet-hartig."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A broadly recognized Korean dish; useful for judging heat level, fermentation, texture, and common ordering risks.",
        "zh": "这是一道辨识度高的韩餐，适合判断辣度、发酵风味、口感和常见点餐风险。",
        "nl": "Een herkenbaar Koreaans gerecht voor pittigheid, fermentatie, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "beef",
        60,
        "protein"
      ],
      [
        "soy-sauce",
        15,
        "marinade",
        "seasoning"
      ],
      [
        "sesame-oil",
        10,
        "aroma",
        "seasoning"
      ],
      [
        "onion",
        10,
        "aroma"
      ],
      [
        "steamed-rice",
        5,
        "side"
      ]
    ],
    "distinctiveFlavorSources": [
      "soy-sauce",
      "sesame-oil"
    ],
    "basicTaste": [
      "sweet",
      "savory",
      "umami",
      "mild"
    ],
    "textureProfile": [
      "tender beef",
      "glossy sauce"
    ],
    "riskFlags": [
      "contains-soy",
      "contains-sesame",
      "contains-gluten"
    ],
    "goodForTags": [
      "first-timer-friendly",
      "safe-choice"
    ],
    "orderVerdict": {
      "en": "A friendly Korean meat choice if you want sweet-savory beef without much heat.",
      "zh": "想吃甜咸嫩牛肉、又不想太辣时很友好。",
      "nl": "Een toegankelijke Koreaanse vleeskeuze als je zoet-hartig rund zonder veel pit wilt."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "confidenceTag": "audited-core-batch-001",
    "metadataConfidence": 0.82
  }),
  starterDish({
    "id": "tteokbokki",
    "metadataCode": "110004",
    "cuisineId": "korean",
    "names": {
      "en": "Tteokbokki",
      "zh": "韩式辣炒年糕",
      "nl": "Tteokbokki",
      "local": "떡볶이"
    },
    "category": "street-food",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Chewy rice cakes simmered in a sweet-spicy gochujang sauce.",
      "zh": "年糕在甜辣韩式辣酱里煮到软糯有嚼劲，是常见街头小吃。",
      "nl": "Kauwige rijstcakes gesudderd in een zoet-pittige gochujangsaus."
    },
    "cookingProfile": {
      "en": "The sauce thickens around the rice cakes, making the dish chewy, sticky, sweet, and spicy.",
      "zh": "酱汁会裹住年糕，口感糯、黏、甜辣明显。",
      "nl": "De saus wordt dik rond de rijstcakes, kauwig, kleverig, zoet en pittig."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food"
      ],
      "description": {
        "en": "A broadly recognized Korean dish; useful for judging heat level, fermentation, texture, and common ordering risks.",
        "zh": "这是一道辨识度高的韩餐，适合判断辣度、发酵风味、口感和常见点餐风险。",
        "nl": "Een herkenbaar Koreaans gerecht voor pittigheid, fermentatie, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "rice-cakes",
        60,
        "base"
      ],
      [
        "gochujang",
        25,
        "sauce",
        "seasoning"
      ],
      [
        "fish-cake",
        10,
        "protein"
      ],
      [
        "green-onion",
        5,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "gochujang"
    ],
    "basicTaste": [
      "sweet",
      "spicy",
      "salty"
    ],
    "textureProfile": [
      "chewy rice cakes",
      "sticky sauce"
    ],
    "riskFlags": [
      "can-be-spicy",
      "contains-soy",
      "contains-fish"
    ],
    "orderVerdict": {
      "en": "Order for chewy sweet-spicy comfort; skip if sticky texture or heat is not your thing.",
      "zh": "喜欢软糯甜辣就很适合；不喜欢黏糯口感或辣味就谨慎。",
      "nl": "Bestel voor kauwig zoet-pittig comfort; overslaan als kleverige textuur of pit niet jouw ding is."
    },
    "spiceLevel": 3,
    "weightLevel": 3,
    "acquiredTasteLevel": 2,
    "confidenceTag": "audited-core-batch-001",
    "metadataConfidence": 0.82
  }),
  starterDish({
    "id": "korean-fried-chicken",
    "metadataCode": "110005",
    "cuisineId": "korean",
    "names": {
      "en": "Korean Fried Chicken",
      "zh": "韩式炸鸡",
      "nl": "Koreaanse gefrituurde kip",
      "local": "치킨"
    },
    "category": "fried-snack",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "Crisp fried chicken, often glazed with sweet-spicy or soy-garlic sauce.",
      "zh": "酥脆炸鸡，常裹甜辣酱或酱油蒜香酱。",
      "nl": "Krokante gefrituurde kip, vaak geglazuurd met zoet-pittige of soja-knoflooksaus."
    },
    "cookingProfile": {
      "en": "The chicken is fried very crisp and sauced, so it is crunchy, sticky, and rich.",
      "zh": "炸鸡外层很脆，再裹酱后会酥脆、黏甜、比较厚重。",
      "nl": "De kip wordt heel krokant gefrituurd en gesaust, dus crunchy, kleverig en rijk."
    },
    "cuisineRole": {
      "level": "modern",
      "tags": [
        "internationally-known"
      ],
      "description": {
        "en": "A broadly recognized Korean dish; useful for judging heat level, fermentation, texture, and common ordering risks.",
        "zh": "这是一道辨识度高的韩餐，适合判断辣度、发酵风味、口感和常见点餐风险。",
        "nl": "Een herkenbaar Koreaans gerecht voor pittigheid, fermentatie, textuur en bestelrisico's."
      }
    },
    "composition": [
      [
        "fried-chicken",
        70,
        "base"
      ],
      [
        "gochujang",
        15,
        "glaze",
        "seasoning"
      ],
      [
        "soy-sauce",
        10,
        "glaze",
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
      "gochujang",
      "soy-sauce",
      "sesame-oil"
    ],
    "basicTaste": [
      "sweet",
      "spicy",
      "savory",
      "oily"
    ],
    "textureProfile": [
      "crisp coating",
      "juicy chicken",
      "sticky glaze"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-soy",
      "contains-sesame",
      "can-be-spicy"
    ],
    "orderVerdict": {
      "en": "A fun sharing choice if you want crunch and sauce; heavier than grilled dishes.",
      "zh": "适合分享、想吃酥脆裹酱时点；比烤物更厚重。",
      "nl": "Leuk om te delen als je crunch en saus wilt; zwaarder dan gegrilde gerechten."
    },
    "spiceLevel": 2,
    "weightLevel": 4,
    "confidenceTag": "audited-core-batch-001",
    "metadataConfidence": 0.82
  })
];
