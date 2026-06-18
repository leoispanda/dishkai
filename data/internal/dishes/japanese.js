import { starterDish } from "./starter-dish.js";

export const japaneseDishes = [
  starterDish({
    "id": "sushi",
    "metadataCode": "109001",
    "cuisineId": "japanese",
    "names": {
      "en": "Sushi",
      "zh": "寿司",
      "nl": "Sushi",
      "local": "寿司"
    },
    "category": "rice",
    "cookingMethods": [
      "assembled",
      "raw"
    ],
    "servingTemperature": "cold-or-cool",
    "rawnessLevel": "raw-or-cooked-variant",
    "shortDescription": {
      "en": "Seasoned rice paired with fish, seafood, egg, or vegetables; many versions include raw fish.",
      "zh": "调味寿司饭搭配鱼、海鲜、鸡蛋或蔬菜；很多版本含生鱼。",
      "nl": "Gekruide rijst met vis, zeevruchten, ei of groenten; veel versies bevatten rauwe vis."
    },
    "cookingProfile": {
      "en": "Rice and toppings are assembled cold or cool, so freshness and texture matter more than heat.",
      "zh": "寿司饭和配料通常冷食组合，重点是新鲜度和口感，不是热度。",
      "nl": "Rijst en toppings worden koel samengesteld, dus versheid en textuur zijn belangrijker dan warmte."
    },
    "cuisineRole": {
      "level": "signature",
      "tags": [
        "classic",
        "internationally-known"
      ],
      "description": {
        "en": "A recognizable Japanese dish in the starter database, useful for menu matching and ordering expectations.",
        "zh": "这是 DishKAI 初始数据库中的典型日料，用于菜单匹配和点餐预期判断。",
        "nl": "Een herkenbaar Japans gerecht in de startdatabase voor menumatching en bestelverwachtingen."
      }
    },
    "composition": [
      [
        "sushi-rice",
        45,
        "base"
      ],
      [
        "raw-fish",
        30,
        "topping"
      ],
      [
        "seaweed",
        10,
        "wrap"
      ],
      [
        "soy-sauce",
        10,
        "dip",
        "seasoning"
      ],
      [
        "wasabi",
        5,
        "heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "soy-sauce",
      "wasabi"
    ],
    "basicTaste": [
      "mild",
      "umami",
      "salty"
    ],
    "textureProfile": [
      "sticky rice",
      "silky fish",
      "crisp seaweed"
    ],
    "riskFlags": [
      "contains-raw-fish",
      "contains-fish",
      "contains-soy"
    ],
    "goodForTags": [
      "internationally-known"
    ],
    "orderVerdict": {
      "en": "Best if you like clean, cool flavors and are comfortable with raw fish or can choose cooked pieces.",
      "zh": "适合喜欢清爽冷食、能接受生鱼，或会选择熟食寿司的人。",
      "nl": "Goed als je van schone, koele smaken houdt en rauwe vis oké vindt of gekookte stukken kiest."
    },
    "spiceLevel": 0,
    "weightLevel": 1,
    "confidenceTag": "audited-core-batch-001",
    "metadataConfidence": 0.82
  }),
  starterDish({
    "id": "ramen",
    "metadataCode": "109002",
    "cuisineId": "japanese",
    "names": {
      "en": "Ramen",
      "zh": "拉面",
      "nl": "Ramen",
      "local": "ラーメン"
    },
    "category": "noodle",
    "cookingMethods": [
      "boiled",
      "simmered"
    ],
    "shortDescription": {
      "en": "Hot noodle soup with springy ramen noodles, savory broth, and toppings such as pork, egg, or vegetables.",
      "zh": "热汤面，包含弹性拉面、咸鲜汤底，以及叉烧、鸡蛋或蔬菜等配料。",
      "nl": "Hete noedelsoep met veerkrachtige ramennoedels, hartige bouillon en toppings zoals varkensvlees, ei of groenten."
    },
    "cookingProfile": {
      "en": "Noodles are served in hot broth, so the dish is warm, slurpable, and often filling.",
      "zh": "面条泡在热汤里上桌，整体温热、适合嗦面，也比较有饱腹感。",
      "nl": "Noedels worden in hete bouillon geserveerd, warm, slurpbaar en vaak vullend."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "internationally-known"
      ],
      "description": {
        "en": "A recognizable Japanese dish in the starter database, useful for menu matching and ordering expectations.",
        "zh": "这是 DishKAI 初始数据库中的典型日料，用于菜单匹配和点餐预期判断。",
        "nl": "Een herkenbaar Japans gerecht in de startdatabase voor menumatching en bestelverwachtingen."
      }
    },
    "composition": [
      [
        "ramen-noodles",
        40,
        "base"
      ],
      [
        "dashi-broth",
        35,
        "soup-base"
      ],
      [
        "pork",
        10,
        "protein"
      ],
      [
        "egg",
        10,
        "topping"
      ],
      [
        "green-onion",
        5,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "miso",
      "soy-sauce"
    ],
    "basicTaste": [
      "salty",
      "umami",
      "mild"
    ],
    "textureProfile": [
      "springy noodles",
      "hot broth",
      "soft toppings"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-soy"
    ],
    "goodForTags": [
      "noodle-lover"
    ],
    "orderVerdict": {
      "en": "A filling, comforting choice if you want hot noodles and savory broth.",
      "zh": "想吃热汤面和咸鲜汤底时很稳，饱腹感也强。",
      "nl": "Een vullende, comfortabele keuze als je hete noedels en hartige bouillon wilt."
    },
    "weightLevel": 3,
    "confidenceTag": "audited-core-batch-001",
    "metadataConfidence": 0.82
  }),
  starterDish({
    "id": "tempura",
    "metadataCode": "109003",
    "cuisineId": "japanese",
    "names": {
      "en": "Tempura",
      "zh": "天妇罗",
      "nl": "Tempura",
      "local": "天ぷら"
    },
    "category": "fried-snack",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "Lightly battered seafood or vegetables fried until crisp, usually served with dipping sauce.",
      "zh": "海鲜或蔬菜裹薄面衣油炸，口感轻脆，常配蘸汁。",
      "nl": "Zeevruchten of groenten in dun beslag, knapperig gefrituurd en vaak met dipsaus."
    },
    "cookingProfile": {
      "en": "The batter is fried crisp, so it feels lighter than many heavy fried dishes but still oily.",
      "zh": "薄面衣炸得酥脆，通常比厚炸物轻一些，但仍有油感。",
      "nl": "Het beslag wordt knapperig gefrituurd, lichter dan veel zware frituur maar nog steeds olieachtig."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic"
      ],
      "description": {
        "en": "A recognizable Japanese dish in the starter database, useful for menu matching and ordering expectations.",
        "zh": "这是 DishKAI 初始数据库中的典型日料，用于菜单匹配和点餐预期判断。",
        "nl": "Een herkenbaar Japans gerecht in de startdatabase voor menumatching en bestelverwachtingen."
      }
    },
    "composition": [
      [
        "tempura-batter",
        35,
        "coating"
      ],
      [
        "shrimp",
        25,
        "protein"
      ],
      [
        "mixed-vegetables",
        25,
        "vegetable"
      ],
      [
        "soy-sauce",
        10,
        "dip",
        "seasoning"
      ],
      [
        "dashi-broth",
        5,
        "dip-base"
      ]
    ],
    "distinctiveFlavorSources": [
      "soy-sauce"
    ],
    "basicTaste": [
      "mild",
      "savory",
      "oily"
    ],
    "textureProfile": [
      "crisp coating",
      "tender inside"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-shellfish",
      "contains-soy"
    ],
    "orderVerdict": {
      "en": "Good for a crisp starter or side, but check shellfish and gluten.",
      "zh": "想吃酥脆前菜或配菜很合适，但要留意虾和麸质。",
      "nl": "Goed als knapperig voorgerecht of bijgerecht, maar let op schaal- en gluten."
    },
    "weightLevel": 2,
    "confidenceTag": "audited-core-batch-001",
    "metadataConfidence": 0.82
  }),
  starterDish({
    "id": "katsu-curry",
    "metadataCode": "109004",
    "cuisineId": "japanese",
    "names": {
      "en": "Katsu Curry",
      "zh": "日式炸猪排咖喱饭",
      "nl": "Katsu curry",
      "local": "カツカレー"
    },
    "category": "rice",
    "cookingMethods": [
      "deep-fried",
      "simmered"
    ],
    "shortDescription": {
      "en": "Japanese curry rice topped with a breaded fried cutlet, usually pork or chicken.",
      "zh": "日式咖喱饭上放炸猪排或炸鸡排，整体偏甜咸、浓稠、饱腹。",
      "nl": "Japanse curryrijst met een gepaneerde gefrituurde kotelet, meestal varken of kip."
    },
    "cookingProfile": {
      "en": "A crisp cutlet sits on rice with thick curry sauce, making it warm, heavy, and comforting.",
      "zh": "酥脆炸排盖在米饭和浓咖喱上，温热、厚重、很有饱腹感。",
      "nl": "Een krokante kotelet ligt op rijst met dikke currysaus, warm, zwaar en comfortabel."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "internationally-known"
      ],
      "description": {
        "en": "A recognizable Japanese dish in the starter database, useful for menu matching and ordering expectations.",
        "zh": "这是 DishKAI 初始数据库中的典型日料，用于菜单匹配和点餐预期判断。",
        "nl": "Een herkenbaar Japans gerecht in de startdatabase voor menumatching en bestelverwachtingen."
      }
    },
    "composition": [
      [
        "steamed-rice",
        40,
        "base"
      ],
      [
        "pork-cutlet",
        25,
        "protein"
      ],
      [
        "japanese-curry",
        25,
        "sauce",
        "seasoning"
      ],
      [
        "mixed-vegetables",
        10,
        "body"
      ]
    ],
    "distinctiveFlavorSources": [
      "japanese-curry"
    ],
    "basicTaste": [
      "sweet",
      "savory",
      "mild"
    ],
    "textureProfile": [
      "crisp cutlet",
      "soft rice",
      "thick sauce"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-pork"
    ],
    "orderVerdict": {
      "en": "Choose this when you want a heavy, comforting rice plate rather than something delicate.",
      "zh": "想吃厚重下饭、偏舒适的日式饭类时很适合。",
      "nl": "Kies dit als je een zware, comfortabele rijstschotel wilt in plaats van iets delicaats."
    },
    "weightLevel": 4,
    "confidenceTag": "audited-core-batch-001",
    "metadataConfidence": 0.82
  }),
  starterDish({
    "id": "miso-soup",
    "metadataCode": "109005",
    "cuisineId": "japanese",
    "names": {
      "en": "Miso Soup",
      "zh": "味噌汤",
      "nl": "Misosoep",
      "local": "味噌汁"
    },
    "category": "soup",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Light soup based on miso and dashi, often with tofu, seaweed, and green onion.",
      "zh": "以味噌和日式高汤为基础的清淡汤，常有豆腐、海藻和葱。",
      "nl": "Lichte soep op basis van miso en dashi, vaak met tofu, zeewier en lente-ui."
    },
    "cookingProfile": {
      "en": "Served warm in a small bowl, it is usually a light side rather than a main dish.",
      "zh": "通常以小碗温热上桌，更像清淡配汤，不是主菜。",
      "nl": "Warm in een kleine kom geserveerd, meestal een licht bijgerecht en geen hoofdgerecht."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic"
      ],
      "description": {
        "en": "A recognizable Japanese dish in the starter database, useful for menu matching and ordering expectations.",
        "zh": "这是 DishKAI 初始数据库中的典型日料，用于菜单匹配和点餐预期判断。",
        "nl": "Een herkenbaar Japans gerecht in de startdatabase voor menumatching en bestelverwachtingen."
      }
    },
    "composition": [
      [
        "dashi-broth",
        45,
        "soup-base"
      ],
      [
        "miso",
        25,
        "seasoning-base",
        "seasoning"
      ],
      [
        "tofu",
        15,
        "body"
      ],
      [
        "seaweed",
        10,
        "body"
      ],
      [
        "green-onion",
        5,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "miso"
    ],
    "basicTaste": [
      "salty",
      "umami",
      "mild"
    ],
    "textureProfile": [
      "light broth",
      "soft tofu"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-soy"
    ],
    "orderVerdict": {
      "en": "A light, savory side soup; not filling by itself.",
      "zh": "清淡咸鲜的配汤，单独吃饱腹感不强。",
      "nl": "Een lichte, hartige bijsoep; op zichzelf niet vullend."
    },
    "weightLevel": 1,
    "confidenceTag": "audited-core-batch-001",
    "metadataConfidence": 0.82
  })
];
