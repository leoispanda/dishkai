import { starterDish } from "./starter-dish.js";

export const frenchDishes = [
  starterDish({
    "id": "boeuf-bourguignon",
    "metadataCode": "103001",
    "cuisineId": "french",
    "names": {
      "en": "Boeuf Bourguignon",
      "zh": "勃艮第红酒炖牛肉",
      "nl": "Boeuf bourguignon",
      "local": "Boeuf bourguignon"
    },
    "category": "meat",
    "cookingMethods": [
      "braised"
    ],
    "shortDescription": {
      "en": "French beef stew braised with red wine, mushrooms, onion, and herbs.",
      "zh": "用红酒、蘑菇、洋葱和香草慢炖的法式牛肉。",
      "nl": "Franse runderstoof met rode wijn, champignons, ui en kruiden."
    },
    "cookingProfile": {
      "en": "Beef is slowly braised until tender, so it is rich, saucy, and warming.",
      "zh": "牛肉慢炖到软烂，整体浓郁、有酱汁感、很暖胃。",
      "nl": "Rund wordt langzaam gestoofd tot mals, rijk, sauzig en verwarmend."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "internationally-known"
      ],
      "description": {
        "en": "A recognizable French dish in the starter database, focused on what to expect when ordering.",
        "zh": "这是 DishKAI 初始数据库中的典型法餐，重点是点餐时会遇到什么。",
        "nl": "Een herkenbaar Frans gerecht in de startdatabase, gericht op wat je kunt verwachten bij het bestellen."
      }
    },
    "composition": [
      [
        "beef",
        45,
        "protein"
      ],
      [
        "red-wine",
        20,
        "sauce-base",
        "seasoning"
      ],
      [
        "mushrooms",
        15,
        "body"
      ],
      [
        "onion",
        10,
        "aroma"
      ],
      [
        "herbs",
        10,
        "aroma"
      ]
    ],
    "distinctiveFlavorSources": [
      "red-wine",
      "herbs"
    ],
    "basicTaste": [
      "savory",
      "umami",
      "rich"
    ],
    "textureProfile": [
      "tender beef",
      "deep sauce",
      "soft vegetables"
    ],
    "riskFlags": [
      "contains-alcohol"
    ],
    "orderVerdict": {
      "en": "A rich slow-cooked choice if you want tender beef and winey sauce.",
      "zh": "想吃软烂牛肉和红酒酱汁时很适合，整体偏厚重。",
      "nl": "Een rijke langzaam gegaarde keuze als je mals rund en wijnsaus wilt."
    },
    "weightLevel": 4,
    "confidenceTag": "audited-core-batch-001",
    "metadataConfidence": 0.82
  }),
  starterDish({
    "id": "coq-au-vin",
    "metadataCode": "103002",
    "cuisineId": "french",
    "names": {
      "en": "Coq au Vin",
      "zh": "红酒炖鸡",
      "nl": "Coq au vin",
      "local": "Coq au vin"
    },
    "category": "meat",
    "cookingMethods": [
      "braised"
    ],
    "shortDescription": {
      "en": "Chicken braised with wine, mushrooms, onion, and herbs into a rustic sauce.",
      "zh": "鸡肉与红酒、蘑菇、洋葱和香草一起慢炖成乡村风味酱汁。",
      "nl": "Kip gestoofd met wijn, champignons, ui en kruiden tot een rustieke saus."
    },
    "cookingProfile": {
      "en": "Chicken is cooked slowly in sauce, so it becomes tender and savory rather than crisp.",
      "zh": "鸡肉在酱汁中慢炖，口感软嫩咸香，不是酥脆型。",
      "nl": "Kip gaart langzaam in saus, mals en hartig in plaats van krokant."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic"
      ],
      "description": {
        "en": "A recognizable French dish in the starter database, focused on what to expect when ordering.",
        "zh": "这是 DishKAI 初始数据库中的典型法餐，重点是点餐时会遇到什么。",
        "nl": "Een herkenbaar Frans gerecht in de startdatabase, gericht op wat je kunt verwachten bij het bestellen."
      }
    },
    "composition": [
      [
        "chicken",
        45,
        "protein"
      ],
      [
        "red-wine",
        20,
        "sauce-base",
        "seasoning"
      ],
      [
        "mushrooms",
        15,
        "body"
      ],
      [
        "onion",
        10,
        "aroma"
      ],
      [
        "herbs",
        10,
        "aroma"
      ]
    ],
    "distinctiveFlavorSources": [
      "red-wine",
      "herbs"
    ],
    "basicTaste": [
      "savory",
      "umami",
      "rich"
    ],
    "textureProfile": [
      "tender chicken",
      "saucy vegetables"
    ],
    "riskFlags": [
      "contains-alcohol"
    ],
    "orderVerdict": {
      "en": "Good if you want a saucy chicken dish with wine depth, not a light grilled plate.",
      "zh": "想吃带红酒深度的酱汁鸡肉很适合，不是清淡烤鸡。",
      "nl": "Goed als je kip met saus en wijndiepte wilt, niet een lichte gegrilde schotel."
    },
    "weightLevel": 3,
    "confidenceTag": "audited-core-batch-001",
    "metadataConfidence": 0.82
  }),
  starterDish({
    "id": "ratatouille",
    "metadataCode": "103003",
    "cuisineId": "french",
    "names": {
      "en": "Ratatouille",
      "zh": "普罗旺斯炖菜",
      "nl": "Ratatouille",
      "local": "Ratatouille"
    },
    "category": "vegetable-main",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Vegetable stew from southern France with tomato, eggplant, zucchini-style vegetables, herbs, and olive oil.",
      "zh": "南法蔬菜炖菜，常有番茄、茄子、瓜类蔬菜、香草和橄榄油。",
      "nl": "Groentestoof uit Zuid-Frankrijk met tomaat, aubergine, courgetteachtige groenten, kruiden en olijfolie."
    },
    "cookingProfile": {
      "en": "Vegetables are gently cooked together, so the dish feels soft, saucy, and herbal.",
      "zh": "蔬菜一起慢煮，整体柔软、多汁、有香草感。",
      "nl": "Groenten worden zacht samen gegaard, zacht, sauzig en kruidig."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional",
        "classic"
      ],
      "description": {
        "en": "A recognizable French dish in the starter database, focused on what to expect when ordering.",
        "zh": "这是 DishKAI 初始数据库中的典型法餐，重点是点餐时会遇到什么。",
        "nl": "Een herkenbaar Frans gerecht in de startdatabase, gericht op wat je kunt verwachten bij het bestellen."
      }
    },
    "composition": [
      [
        "eggplant",
        25,
        "vegetable"
      ],
      [
        "tomato",
        25,
        "sauce-base"
      ],
      [
        "mixed-vegetables",
        25,
        "body"
      ],
      [
        "olive-oil",
        15,
        "richness",
        "seasoning"
      ],
      [
        "herbs",
        10,
        "aroma"
      ]
    ],
    "distinctiveFlavorSources": [
      "olive-oil",
      "herbs"
    ],
    "basicTaste": [
      "savory",
      "mild",
      "herbal"
    ],
    "textureProfile": [
      "soft vegetables",
      "saucy body"
    ],
    "riskFlags": [],
    "dietaryFlags": [
      "often-vegetarian"
    ],
    "orderVerdict": {
      "en": "A lighter vegetable-forward choice, especially good if you want something saucy but not meaty.",
      "zh": "想吃蔬菜为主、有酱汁但不想吃肉时很合适。",
      "nl": "Een lichtere groentekeuze als je iets sauzigs maar niet vlezig wilt."
    },
    "weightLevel": 2,
    "confidenceTag": "audited-core-batch-001",
    "metadataConfidence": 0.82
  }),
  starterDish({
    "id": "quiche-lorraine",
    "metadataCode": "103004",
    "cuisineId": "french",
    "names": {
      "en": "Quiche Lorraine",
      "zh": "洛林咸派",
      "nl": "Quiche Lorraine",
      "local": "Quiche Lorraine"
    },
    "category": "starter",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Savory baked tart with egg, cream, bacon, and pastry crust.",
      "zh": "鸡蛋、奶油、培根和酥皮烘烤成的法式咸派。",
      "nl": "Hartige gebakken taart met ei, room, spek en deegbodem."
    },
    "cookingProfile": {
      "en": "The custard filling is baked until set, giving a creamy center and crisp crust.",
      "zh": "蛋奶馅烤到凝固，中心奶香柔软，外壳酥脆。",
      "nl": "De custardvulling wordt gebakken tot stevig, met romige kern en krokante korst."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic"
      ],
      "description": {
        "en": "A recognizable French dish in the starter database, focused on what to expect when ordering.",
        "zh": "这是 DishKAI 初始数据库中的典型法餐，重点是点餐时会遇到什么。",
        "nl": "Een herkenbaar Frans gerecht in de startdatabase, gericht op wat je kunt verwachten bij het bestellen."
      }
    },
    "composition": [
      [
        "pastry-crust",
        35,
        "base"
      ],
      [
        "egg",
        25,
        "custard"
      ],
      [
        "cream",
        20,
        "custard"
      ],
      [
        "bacon",
        15,
        "filling"
      ],
      [
        "cheese",
        5,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "black-pepper"
    ],
    "basicTaste": [
      "savory",
      "creamy",
      "salty"
    ],
    "textureProfile": [
      "crisp crust",
      "creamy set filling"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-dairy",
      "contains-gluten",
      "contains-pork"
    ],
    "orderVerdict": {
      "en": "A creamy savory tart; good as lunch or starter but not light if you avoid dairy or egg.",
      "zh": "奶香咸派，适合午餐或前菜；避开奶蛋的人不适合。",
      "nl": "Een romige hartige taart; goed als lunch of voorgerecht, niet licht bij zuivel of ei vermijden."
    },
    "weightLevel": 3,
    "confidenceTag": "audited-core-batch-001",
    "metadataConfidence": 0.82
  }),
  starterDish({
    "id": "creme-brulee",
    "metadataCode": "103005",
    "cuisineId": "french",
    "names": {
      "en": "Creme Brulee",
      "zh": "法式焦糖布丁",
      "nl": "Creme brulee",
      "local": "Creme brulee"
    },
    "category": "dessert",
    "cookingMethods": [
      "set",
      "chilled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "Creamy custard dessert with a thin caramelized sugar crust on top.",
      "zh": "顺滑蛋奶布丁，上面有一层焦糖脆壳。",
      "nl": "Romig custarddessert met een dun gekaramelliseerd suikerlaagje bovenop."
    },
    "cookingProfile": {
      "en": "The custard is set smooth and chilled, then topped with a brittle caramel crust.",
      "zh": "蛋奶布丁凝固定型后冷食，上层焦糖壳脆。",
      "nl": "De custard wordt glad opgesteven en gekoeld, met broze karamelkorst."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "internationally-known"
      ],
      "description": {
        "en": "A recognizable French dish in the starter database, focused on what to expect when ordering.",
        "zh": "这是 DishKAI 初始数据库中的典型法餐，重点是点餐时会遇到什么。",
        "nl": "Een herkenbaar Frans gerecht in de startdatabase, gericht op wat je kunt verwachten bij het bestellen."
      }
    },
    "composition": [
      [
        "cream",
        45,
        "base"
      ],
      [
        "egg",
        25,
        "custard"
      ],
      [
        "sugar",
        20,
        "sweetener"
      ],
      [
        "vanilla",
        10,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "vanilla"
    ],
    "basicTaste": [
      "sweet",
      "creamy",
      "mild"
    ],
    "textureProfile": [
      "smooth custard",
      "crisp sugar top"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-dairy"
    ],
    "orderVerdict": {
      "en": "A safe dessert if you want creamy vanilla custard with a crisp sugar top.",
      "zh": "想吃奶香顺滑、上面有脆糖壳的甜点时很稳。",
      "nl": "Een veilige dessertkeuze als je romige vanillecustard met krokant suikerlaagje wilt."
    },
    "weightLevel": 2,
    "confidenceTag": "audited-core-batch-001",
    "metadataConfidence": 0.82
  })
];
