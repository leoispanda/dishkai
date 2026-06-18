import { starterDish } from "./starter-dish.js";

export const thaiDishes = [
  starterDish({
    "id": "pad-thai",
    "metadataCode": "108001",
    "cuisineId": "thai",
    "names": {
      "en": "Pad Thai",
      "zh": "泰式炒河粉",
      "nl": "Pad Thai",
      "local": "ผัดไทย"
    },
    "category": "noodle",
    "cookingMethods": [
      "stir-fried"
    ],
    "shortDescription": {
      "en": "Stir-fried rice noodles with sweet-sour tamarind sauce, egg, sprouts, peanuts, and often shrimp or tofu.",
      "zh": "用罗望子酸甜酱快炒的河粉，常配鸡蛋、豆芽、花生，以及虾或豆腐。",
      "nl": "Roergebakken rijstnoedels met zoetzure tamarindesaus, ei, taugé, pinda en vaak garnaal of tofu."
    },
    "cookingProfile": {
      "en": "Rice noodles are quickly stir-fried so the dish feels glossy, tangy, and lightly smoky.",
      "zh": "河粉会快速翻炒，整体油润、酸甜，并可能带一点锅气。",
      "nl": "Rijstnoedels worden snel geroerbakt, waardoor het gerecht glanzend, friszuur en licht rokerig voelt."
    },
    "cuisineRole": {
      "level": "signature",
      "tags": [
        "classic",
        "first-timer-friendly",
        "internationally-known"
      ],
      "description": {
        "en": "A recognizable Thai dish in the starter database, useful for fast ordering decisions rather than exhaustive regional coverage.",
        "zh": "这是 DishKAI 初始数据库中的典型泰餐，用于快速点餐判断，不代表完整地区覆盖。",
        "nl": "Een herkenbaar Thais gerecht in de startdatabase, bedoeld voor snelle bestelkeuzes en niet voor volledige regionale dekking."
      }
    },
    "composition": [
      [
        "rice-noodles",
        45,
        "base"
      ],
      [
        "shrimp",
        15,
        "protein"
      ],
      [
        "egg",
        10,
        "main"
      ],
      [
        "bean-sprouts",
        10,
        "vegetable"
      ],
      [
        "tamarind",
        10,
        "sauce-base",
        "seasoning"
      ],
      [
        "peanuts",
        5,
        "topping"
      ],
      [
        "lime",
        5,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "fish-sauce",
      "tamarind",
      "lime",
      "chili"
    ],
    "basicTaste": [
      "sweet",
      "sour",
      "umami",
      "salty",
      "mildly-spicy"
    ],
    "textureProfile": [
      "soft noodles",
      "crunchy peanuts",
      "fresh bean sprouts"
    ],
    "riskFlags": [
      "contains-peanut",
      "contains-egg",
      "contains-shellfish",
      "contains-fish-sauce"
    ],
    "dietaryFlags": [
      "can-be-made-vegetarian",
      "contains-animal-seasoning-by-default"
    ],
    "goodForTags": [
      "first-timer-friendly",
      "safe-choice",
      "noodle-lover"
    ],
    "orderVerdict": {
      "en": "A good first Thai order if you like sweet-sour noodles and can eat peanuts and egg.",
      "zh": "如果你能吃花生和鸡蛋，又喜欢酸甜咸香的面食，这是很稳的泰餐第一选择。",
      "nl": "Een veilige eerste Thaise keuze als je van zoetzure noedels houdt en pinda en ei kunt eten."
    },
    "spiceLevel": 1,
    "weightLevel": 2,
    "metadataConfidence": 0.88
  }),
  starterDish({
    "id": "tom-yum-goong",
    "metadataCode": "108002",
    "cuisineId": "thai",
    "names": {
      "en": "Tom Yum Goong",
      "zh": "冬阴功虾汤",
      "nl": "Tom yum goong",
      "local": "ต้มยำกุ้ง"
    },
    "category": "soup",
    "cookingMethods": [
      "simmered"
    ],
    "servingTemperature": "hot",
    "shortDescription": {
      "en": "Hot-and-sour Thai shrimp soup with lemongrass-style aroma, chili heat, lime, and fish sauce.",
      "zh": "酸辣鲜明的泰式虾汤，常有香茅感、辣椒、青柠和鱼露鲜味。",
      "nl": "Hete, zuur-pittige Thaise garnalensoep met frisse kruiden, chili, limoen en vissaus."
    },
    "cookingProfile": {
      "en": "Aromatic broth is simmered and served hot, so the experience is sharp, soupy, and fragrant.",
      "zh": "香料汤底热煮后上桌，喝起来酸辣、带汤感且香气明显。",
      "nl": "Aromatische bouillon wordt gesudderd en heet geserveerd, dus scherp, soepachtig en geurig."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic"
      ],
      "description": {
        "en": "A recognizable Thai dish in the starter database, useful for fast ordering decisions rather than exhaustive regional coverage.",
        "zh": "这是 DishKAI 初始数据库中的典型泰餐，用于快速点餐判断，不代表完整地区覆盖。",
        "nl": "Een herkenbaar Thais gerecht in de startdatabase, bedoeld voor snelle bestelkeuzes en niet voor volledige regionale dekking."
      }
    },
    "composition": [
      [
        "shrimp",
        20,
        "protein"
      ],
      [
        "broth",
        35,
        "soup-base"
      ],
      [
        "mixed-vegetables",
        15,
        "body"
      ],
      [
        "lime",
        10,
        "sour-finish"
      ],
      [
        "fish-sauce",
        10,
        "seasoning",
        "seasoning"
      ],
      [
        "chili",
        10,
        "heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "fish-sauce",
      "lime",
      "chili"
    ],
    "basicTaste": [
      "sour",
      "spicy",
      "umami",
      "salty"
    ],
    "textureProfile": [
      "hot broth",
      "firm shrimp",
      "aromatic finish"
    ],
    "riskFlags": [
      "contains-shellfish",
      "contains-fish-sauce",
      "can-be-spicy"
    ],
    "goodForTags": [
      "soup"
    ],
    "orderVerdict": {
      "en": "Order this if you want a bright, sour, spicy soup and are fine with shrimp and fish sauce.",
      "zh": "想喝酸辣开胃汤、能吃虾和鱼露的话很适合。",
      "nl": "Bestel dit als je een frisse, zure, pittige soep wilt en garnaal en vissaus oké vindt."
    },
    "spiceLevel": 3,
    "weightLevel": 1,
    "acquiredTasteLevel": 2,
    "confidenceTag": "audited-core-batch-001",
    "metadataConfidence": 0.82
  }),
  starterDish({
    "id": "green-curry",
    "metadataCode": "108003",
    "cuisineId": "thai",
    "names": {
      "en": "Green Curry",
      "zh": "泰式绿咖喱",
      "nl": "Groene curry",
      "local": "แกงเขียวหวาน"
    },
    "category": "curry",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Creamy Thai curry with coconut milk, green curry paste, vegetables, and usually chicken or another protein.",
      "zh": "以椰奶和绿咖喱酱为核心的泰式咖喱，常配蔬菜和鸡肉等蛋白。",
      "nl": "Romige Thaise curry met kokosmelk, groene currypasta, groenten en vaak kip of een ander eiwit."
    },
    "cookingProfile": {
      "en": "The curry is simmered into a creamy sauce, usually served hot with rice.",
      "zh": "咖喱会煮成浓郁椰奶酱汁，通常热食并配米饭。",
      "nl": "De curry wordt gesudderd tot een romige saus en meestal heet met rijst geserveerd."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic"
      ],
      "description": {
        "en": "A recognizable Thai dish in the starter database, useful for fast ordering decisions rather than exhaustive regional coverage.",
        "zh": "这是 DishKAI 初始数据库中的典型泰餐，用于快速点餐判断，不代表完整地区覆盖。",
        "nl": "Een herkenbaar Thais gerecht in de startdatabase, bedoeld voor snelle bestelkeuzes en niet voor volledige regionale dekking."
      }
    },
    "composition": [
      [
        "coconut-milk",
        30,
        "sauce-base",
        "seasoning"
      ],
      [
        "chicken",
        25,
        "protein"
      ],
      [
        "mixed-vegetables",
        20,
        "vegetable"
      ],
      [
        "green-curry-paste",
        15,
        "seasoning-base",
        "seasoning"
      ],
      [
        "steamed-rice",
        10,
        "side"
      ]
    ],
    "distinctiveFlavorSources": [
      "green-curry-paste",
      "coconut-milk",
      "fish-sauce"
    ],
    "basicTaste": [
      "creamy",
      "spicy",
      "sweet",
      "umami"
    ],
    "textureProfile": [
      "creamy sauce",
      "tender protein",
      "soft vegetables"
    ],
    "riskFlags": [
      "can-be-spicy",
      "contains-fish-sauce"
    ],
    "goodForTags": [
      "curry"
    ],
    "orderVerdict": {
      "en": "A richer Thai choice if you like coconut curry and some heat.",
      "zh": "如果你喜欢椰奶咖喱和一定辣度，这是比较稳的浓郁选择。",
      "nl": "Een rijkere Thaise keuze als je van kokos curry en wat pit houdt."
    },
    "spiceLevel": 3,
    "weightLevel": 3,
    "confidenceTag": "audited-core-batch-001",
    "metadataConfidence": 0.82
  }),
  starterDish({
    "id": "som-tam",
    "metadataCode": "108004",
    "cuisineId": "thai",
    "names": {
      "en": "Som Tam",
      "zh": "青木瓜沙拉",
      "nl": "Som tam",
      "local": "ส้มตำ"
    },
    "category": "salad",
    "cookingMethods": [
      "assembled"
    ],
    "servingTemperature": "cold-or-cool",
    "rawnessLevel": "raw-assembled",
    "shortDescription": {
      "en": "Crunchy green papaya-style salad with lime, chili, fish sauce, and often peanuts.",
      "zh": "爽脆的青木瓜风格沙拉，常用青柠、辣椒、鱼露和花生调味。",
      "nl": "Knapperige groene-papajasalade met limoen, chili, vissaus en vaak pinda."
    },
    "cookingProfile": {
      "en": "Fresh ingredients are pounded and assembled, so the dish feels crisp, juicy, sour, and spicy.",
      "zh": "新鲜食材捣拌组合，口感爽脆多汁，酸辣明显。",
      "nl": "Verse ingredienten worden gestampt en samengesteld, dus knapperig, sappig, zuur en pittig."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "regional"
      ],
      "description": {
        "en": "A recognizable Thai dish in the starter database, useful for fast ordering decisions rather than exhaustive regional coverage.",
        "zh": "这是 DishKAI 初始数据库中的典型泰餐，用于快速点餐判断，不代表完整地区覆盖。",
        "nl": "Een herkenbaar Thais gerecht in de startdatabase, bedoeld voor snelle bestelkeuzes en niet voor volledige regionale dekking."
      }
    },
    "composition": [
      [
        "mixed-vegetables",
        45,
        "base"
      ],
      [
        "lime",
        15,
        "sour-finish"
      ],
      [
        "fish-sauce",
        15,
        "seasoning",
        "seasoning"
      ],
      [
        "chili",
        10,
        "heat",
        "seasoning"
      ],
      [
        "peanuts",
        10,
        "topping"
      ],
      [
        "tomato",
        5,
        "juicy-body"
      ]
    ],
    "distinctiveFlavorSources": [
      "fish-sauce",
      "lime",
      "chili"
    ],
    "basicTaste": [
      "sour",
      "spicy",
      "salty",
      "sweet"
    ],
    "textureProfile": [
      "crunchy vegetables",
      "juicy dressing"
    ],
    "riskFlags": [
      "contains-peanut",
      "contains-fish-sauce",
      "can-be-spicy"
    ],
    "goodForTags": [
      "street-food"
    ],
    "orderVerdict": {
      "en": "Great if you want something fresh, sour, and spicy; avoid if peanuts or fish sauce are a problem.",
      "zh": "想吃清爽酸辣很适合；花生或鱼露不能吃就要避开。",
      "nl": "Goed als je iets fris, zuur en pittig wilt; vermijden bij pinda- of vissausproblemen."
    },
    "spiceLevel": 4,
    "weightLevel": 1,
    "confidenceTag": "audited-core-batch-001",
    "metadataConfidence": 0.82
  }),
  starterDish({
    "id": "massaman-curry",
    "metadataCode": "108005",
    "cuisineId": "thai",
    "names": {
      "en": "Massaman Curry",
      "zh": "玛莎曼咖喱",
      "nl": "Massaman curry",
      "local": "มัสมั่น"
    },
    "category": "curry",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Mild-to-medium Thai curry with coconut richness, potato, peanuts, warm spices, and often beef or chicken.",
      "zh": "带椰奶、土豆、花生和暖香料的泰式咖喱，通常配牛肉或鸡肉，辣度相对温和。",
      "nl": "Milde tot medium Thaise curry met kokos, aardappel, pinda, warme specerijen en vaak rund of kip."
    },
    "cookingProfile": {
      "en": "Meat and potato are simmered in a creamy curry, making it softer, sweeter, and heavier than sharp soups.",
      "zh": "肉和土豆在浓郁咖喱里慢煮，比酸辣汤更柔和、偏甜也更有饱腹感。",
      "nl": "Vlees en aardappel worden in romige curry gesudderd, zachter, zoeter en zwaarder dan scherpe soepen."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A recognizable Thai dish in the starter database, useful for fast ordering decisions rather than exhaustive regional coverage.",
        "zh": "这是 DishKAI 初始数据库中的典型泰餐，用于快速点餐判断，不代表完整地区覆盖。",
        "nl": "Een herkenbaar Thais gerecht in de startdatabase, bedoeld voor snelle bestelkeuzes en niet voor volledige regionale dekking."
      }
    },
    "composition": [
      [
        "coconut-milk",
        30,
        "sauce-base",
        "seasoning"
      ],
      [
        "beef",
        25,
        "protein"
      ],
      [
        "potato",
        20,
        "body"
      ],
      [
        "peanuts",
        10,
        "topping"
      ],
      [
        "chili",
        5,
        "warmth",
        "seasoning"
      ],
      [
        "steamed-rice",
        10,
        "side"
      ]
    ],
    "distinctiveFlavorSources": [
      "coconut-milk",
      "chili",
      "fish-sauce"
    ],
    "basicTaste": [
      "creamy",
      "sweet",
      "umami",
      "mildly-spicy"
    ],
    "textureProfile": [
      "creamy sauce",
      "soft potato",
      "tender meat"
    ],
    "riskFlags": [
      "contains-peanut",
      "contains-fish-sauce"
    ],
    "goodForTags": [
      "first-timer-friendly",
      "curry"
    ],
    "orderVerdict": {
      "en": "A good curry for diners who want Thai flavor with less sharp heat than green curry.",
      "zh": "想吃泰式咖喱但不想太冲太辣时，玛莎曼通常更友好。",
      "nl": "Een goede curry als je Thaise smaak wilt met minder scherpe hitte dan groene curry."
    },
    "spiceLevel": 2,
    "weightLevel": 4,
    "confidenceTag": "audited-core-batch-001",
    "metadataConfidence": 0.82
  })
];
