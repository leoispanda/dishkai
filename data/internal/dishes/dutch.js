import { starterDish } from "./starter-dish.js";

export const dutchDishes = [
  starterDish({
    "id": "bitterballen",
    "metadataCode": "102001",
    "cuisineId": "dutch",
    "names": {
      "en": "Bitterballen",
      "zh": "荷兰炸肉丸",
      "nl": "Bitterballen",
      "local": "Bitterballen"
    },
    "category": "fried-snack",
    "cookingMethods": [
      "deep-fried"
    ],
    "portionType": "shareable",
    "goodForSharing": true,
    "shortDescription": {
      "en": "Small deep-fried Dutch ragout balls, usually served as a snack with mustard.",
      "zh": "荷兰小炸肉丸，内馅是浓稠肉酱，常作为小吃配芥末。",
      "nl": "Kleine gefrituurde ragoutballen, meestal als snack met mosterd."
    },
    "cookingProfile": {
      "en": "The outside is crisp while the inside is hot and creamy, so bite carefully.",
      "zh": "外层酥脆，内部热而浓稠，吃的时候小心烫。",
      "nl": "Buiten krokant en binnen heet en romig, dus voorzichtig happen."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "street-food"
      ],
      "description": {
        "en": "A recognizable Dutch dish in the starter database, focused on practical ordering expectations.",
        "zh": "这是 DishKAI 初始数据库中的典型荷兰菜，重点说明实际点餐预期。",
        "nl": "Een herkenbaar Nederlands gerecht in de startdatabase, gericht op praktische bestelverwachtingen."
      }
    },
    "composition": [
      [
        "beef-ragout",
        55,
        "filling"
      ],
      [
        "bread",
        25,
        "coating"
      ],
      [
        "egg",
        10,
        "coating"
      ],
      [
        "mustard",
        10,
        "dip",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "mustard"
    ],
    "basicTaste": [
      "savory",
      "creamy",
      "salty"
    ],
    "textureProfile": [
      "crisp shell",
      "hot creamy center"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "orderVerdict": {
      "en": "A classic Dutch sharing snack; tasty but hot and heavier than it looks.",
      "zh": "经典荷兰分享小吃，好吃但里面很烫，也比看起来更厚重。",
      "nl": "Een klassieke Nederlandse deelsnack; lekker maar heet en zwaarder dan hij lijkt."
    },
    "weightLevel": 3
  }),
  starterDish({
    "id": "stamppot",
    "metadataCode": "102002",
    "cuisineId": "dutch",
    "names": {
      "en": "Stamppot",
      "zh": "荷兰土豆蔬菜泥",
      "nl": "Stamppot",
      "local": "Stamppot"
    },
    "category": "main",
    "cookingMethods": [
      "boiled"
    ],
    "shortDescription": {
      "en": "Mashed potatoes mixed with vegetables, often served with smoked sausage or gravy.",
      "zh": "土豆泥混合蔬菜，常配烟熏香肠或肉汁。",
      "nl": "Aardappelpuree gemengd met groenten, vaak met rookworst of jus."
    },
    "cookingProfile": {
      "en": "Potatoes and greens are mashed together, making the dish soft, warm, and very filling.",
      "zh": "土豆和蔬菜压成泥，整体柔软、温热、很顶饱。",
      "nl": "Aardappel en groente worden samen gestampt, zacht, warm en erg vullend."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic"
      ],
      "description": {
        "en": "A recognizable Dutch dish in the starter database, focused on practical ordering expectations.",
        "zh": "这是 DishKAI 初始数据库中的典型荷兰菜，重点说明实际点餐预期。",
        "nl": "Een herkenbaar Nederlands gerecht in de startdatabase, gericht op praktische bestelverwachtingen."
      }
    },
    "composition": [
      [
        "potato",
        55,
        "base"
      ],
      [
        "kale",
        20,
        "vegetable"
      ],
      [
        "smoked-sausage",
        20,
        "protein"
      ],
      [
        "butter",
        5,
        "richness"
      ]
    ],
    "distinctiveFlavorSources": [
      "mustard"
    ],
    "basicTaste": [
      "mild",
      "savory",
      "hearty"
    ],
    "textureProfile": [
      "soft mash",
      "snappy sausage"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-pork"
    ],
    "orderVerdict": {
      "en": "Good cold-weather comfort food if you want something soft and filling.",
      "zh": "想吃柔软顶饱、冬天感很强的舒适主食时适合。",
      "nl": "Goed wintercomfort als je iets zachts en vullends wilt."
    },
    "weightLevel": 4
  }),
  starterDish({
    "id": "poffertjes",
    "metadataCode": "102003",
    "cuisineId": "dutch",
    "names": {
      "en": "Poffertjes",
      "zh": "荷兰小松饼",
      "nl": "Poffertjes",
      "local": "Poffertjes"
    },
    "category": "dessert",
    "cookingMethods": [
      "fried"
    ],
    "shortDescription": {
      "en": "Small fluffy Dutch pancakes usually served with butter and powdered sugar.",
      "zh": "荷兰小松饼，通常配黄油和糖粉，口感蓬松偏甜。",
      "nl": "Kleine luchtige Nederlandse pannenkoekjes, meestal met boter en poedersuiker."
    },
    "cookingProfile": {
      "en": "The batter is cooked in small rounds, so they are soft, warm, buttery, and sweet.",
      "zh": "面糊烤成小圆饼，温热、柔软、黄油和甜味明显。",
      "nl": "Het beslag wordt in kleine rondjes gebakken, zacht, warm, boterig en zoet."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "classic"
      ],
      "description": {
        "en": "A recognizable Dutch dish in the starter database, focused on practical ordering expectations.",
        "zh": "这是 DishKAI 初始数据库中的典型荷兰菜，重点说明实际点餐预期。",
        "nl": "Een herkenbaar Nederlands gerecht in de startdatabase, gericht op praktische bestelverwachtingen."
      }
    },
    "composition": [
      [
        "pancake-batter",
        65,
        "base"
      ],
      [
        "butter",
        15,
        "finish"
      ],
      [
        "sugar",
        20,
        "sweetener"
      ]
    ],
    "distinctiveFlavorSources": [
      "butter"
    ],
    "basicTaste": [
      "sweet",
      "mild",
      "creamy"
    ],
    "textureProfile": [
      "fluffy center",
      "buttery surface"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "orderVerdict": {
      "en": "A sweet snack or dessert, especially if you want something soft and buttery.",
      "zh": "适合当甜点或小吃，尤其是想吃柔软黄油甜味时。",
      "nl": "Een zoete snack of dessert, vooral als je iets zachts en boterigs wilt."
    },
    "weightLevel": 2
  }),
  starterDish({
    "id": "haring",
    "metadataCode": "102004",
    "cuisineId": "dutch",
    "names": {
      "en": "Haring",
      "zh": "荷兰生鲱鱼",
      "nl": "Haring",
      "local": "Haring"
    },
    "category": "raw-seafood",
    "cookingMethods": [
      "raw"
    ],
    "servingTemperature": "cold-or-cool",
    "rawnessLevel": "raw-cured",
    "shortDescription": {
      "en": "Dutch raw-cured herring, often served with onion and pickles or in a soft bun.",
      "zh": "荷兰生腌鲱鱼，常配洋葱、酸黄瓜，或夹在软面包里。",
      "nl": "Nederlandse rauw gezouten haring, vaak met ui en zuur of in een zacht broodje."
    },
    "cookingProfile": {
      "en": "It is served cold and not cooked, so expect briny, silky fish flavor.",
      "zh": "冷食且不加热，鱼味咸鲜、口感滑，接受度因人而异。",
      "nl": "Koud en ongekookt geserveerd, dus ziltige, zachte vissmaak."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "regional"
      ],
      "description": {
        "en": "A recognizable Dutch dish in the starter database, focused on practical ordering expectations.",
        "zh": "这是 DishKAI 初始数据库中的典型荷兰菜，重点说明实际点餐预期。",
        "nl": "Een herkenbaar Nederlands gerecht in de startdatabase, gericht op praktische bestelverwachtingen."
      }
    },
    "composition": [
      [
        "raw-herring",
        70,
        "base"
      ],
      [
        "onion",
        15,
        "topping"
      ],
      [
        "bread",
        15,
        "optional-bun"
      ]
    ],
    "distinctiveFlavorSources": [
      "sea-salt"
    ],
    "basicTaste": [
      "salty",
      "umami",
      "briny"
    ],
    "textureProfile": [
      "silky fish",
      "sharp onion"
    ],
    "riskFlags": [
      "contains-raw-fish",
      "contains-fish",
      "contains-gluten"
    ],
    "orderVerdict": {
      "en": "Very Dutch and memorable, but skip if raw fish or strong fish flavor is uncomfortable.",
      "zh": "非常荷兰、很有记忆点；不接受生鱼或明显鱼味就谨慎。",
      "nl": "Heel Nederlands en memorabel, maar overslaan als rauwe vis of sterke vissmaak lastig is."
    },
    "weightLevel": 1,
    "acquiredTasteLevel": 3
  }),
  starterDish({
    "id": "erwtensoep",
    "metadataCode": "102005",
    "cuisineId": "dutch",
    "names": {
      "en": "Erwtensoep",
      "zh": "荷兰豌豆浓汤",
      "nl": "Erwtensoep",
      "local": "Erwtensoep"
    },
    "category": "soup",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Thick Dutch split pea soup, often with smoked sausage and vegetables.",
      "zh": "浓稠的荷兰豌豆汤，常有烟熏香肠和蔬菜。",
      "nl": "Dikke Nederlandse spliterwtensoep, vaak met rookworst en groenten."
    },
    "cookingProfile": {
      "en": "Peas simmer until thick, making the soup hearty enough to feel like a meal.",
      "zh": "豌豆煮到浓稠，汤本身就很有饱腹感。",
      "nl": "Erwten sudderen tot dik, waardoor de soep als maaltijd voelt."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic"
      ],
      "description": {
        "en": "A recognizable Dutch dish in the starter database, focused on practical ordering expectations.",
        "zh": "这是 DishKAI 初始数据库中的典型荷兰菜，重点说明实际点餐预期。",
        "nl": "Een herkenbaar Nederlands gerecht in de startdatabase, gericht op praktische bestelverwachtingen."
      }
    },
    "composition": [
      [
        "peas",
        45,
        "base"
      ],
      [
        "broth",
        20,
        "soup-base"
      ],
      [
        "smoked-sausage",
        20,
        "protein"
      ],
      [
        "mixed-vegetables",
        15,
        "body"
      ]
    ],
    "distinctiveFlavorSources": [
      "sea-salt",
      "black-pepper"
    ],
    "basicTaste": [
      "savory",
      "hearty",
      "mild"
    ],
    "textureProfile": [
      "thick soup",
      "soft peas",
      "smoky sausage"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "orderVerdict": {
      "en": "A thick winter soup that can work as a meal, not a light starter.",
      "zh": "很浓的冬季汤，能当一餐，不是清爽前菜。",
      "nl": "Een dikke wintersoep die als maaltijd werkt, geen licht voorgerecht."
    },
    "weightLevel": 4
  })
];
