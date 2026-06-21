import { starterDish } from "./starter-dish.js";

export const cafeBrunchDepthDishes = [
  cafeDish({
    id: "scrambled-eggs",
    metadataCode: "123013",
    cuisineId: "british-irish",
    names: { en: "Scrambled Eggs", zh: "炒蛋", nl: "Roerei", local: "scrambled eggs" },
    category: "main",
    cookingMethods: ["stirred"],
    shortDescription: {
      en: "Soft stirred eggs, often served on toast or as part of breakfast.",
      zh: "柔软顺滑的炒蛋，常配吐司或作为早餐盘的一部分。",
      nl: "Zacht geroerde eieren, vaak op toast of als onderdeel van ontbijt.",
    },
    cookingProfile: {
      en: "Eggs are gently stirred so the texture is creamy and soft rather than browned.",
      zh: "鸡蛋低温搅拌成柔软奶油感，不是煎到焦香的蛋。",
      nl: "Eieren worden rustig geroerd; romig en zacht, niet bruin gebakken.",
    },
    composition: [["egg", 75, "base"], ["butter", 10, "richness"], ["bread", 10, "toast-side"], ["black-pepper", 5, "seasoning", "seasoning"]],
    distinctiveFlavorSources: ["black-pepper", "sea-salt"],
    basicTaste: ["mild", "savory", "creamy"],
    textureProfile: ["soft curds", "creamy", "warm"],
    riskFlags: ["contains-egg", "contains-dairy", "contains-gluten"],
    dietaryFlags: ["vegetarian"],
    goodForTags: ["breakfast", "safe-choice", "first-timer-friendly"],
    orderVerdict: {
      en: "A safe breakfast order if you want something mild; add salmon, bacon, or toast if you need more substance.",
      zh: "想吃温和早餐很稳；如果想更饱，可以搭配三文鱼、培根或吐司。",
      nl: "Veilige ontbijtkeuze als je iets milds wilt; voeg zalm, spek of toast toe voor meer vulling.",
    },
    weightLevel: 2,
  }),
  cafeDish({
    id: "omelette",
    metadataCode: "103018",
    cuisineId: "french",
    names: { en: "Omelette", zh: "煎蛋卷", nl: "Omelet", local: "omelette" },
    category: "main",
    cookingMethods: ["fried"],
    shortDescription: {
      en: "Folded egg dish, plain or filled with cheese, ham, mushrooms, spinach, or vegetables.",
      zh: "折叠煎蛋，可做原味，也常加奶酪、火腿、蘑菇、菠菜或蔬菜。",
      nl: "Gevouwen eiergerecht, naturel of gevuld met kaas, ham, champignons, spinazie of groenten.",
    },
    cookingProfile: {
      en: "Usually pan-cooked until just set; French versions are softer, café versions may be firmer.",
      zh: "通常平底锅煎到凝固；法式更嫩，咖啡馆版本可能更扎实。",
      nl: "In de pan gegaard; Franse stijl zachter, caféstijl vaak steviger.",
    },
    composition: [["egg", 65, "base"], ["cheese", 15, "optional-filling"], ["ham", 10, "optional-filling"], ["mixed-vegetables", 5, "filling"], ["butter", 5, "cooking-fat"]],
    distinctiveFlavorSources: ["black-pepper", "sea-salt"],
    basicTaste: ["savory", "mild", "eggy"],
    textureProfile: ["soft set", "folded", "can be creamy"],
    riskFlags: ["contains-egg", "contains-dairy", "contains-pork"],
    dietaryFlags: ["can-be-vegetarian"],
    goodForTags: ["breakfast", "brunch", "safe-choice"],
    avoidIfTags: ["egg-allergy"],
    orderVerdict: {
      en: "A reliable brunch choice; check fillings if you avoid pork, dairy, or mushrooms.",
      zh: "很稳的早午餐选择；避猪肉、乳制品或蘑菇时要看馅料。",
      nl: "Betrouwbare brunchkeuze; check vulling bij varken, zuivel of champignons.",
    },
    weightLevel: 2,
    confidenceTag: "audited-core-batch-002",
    metadataConfidence: 0.82
  }),
  cafeDish({
    "id": "shakshuka",
    "metadataCode": "120013",
    "cuisineId": "middle-eastern",
    "names": {
      "en": "Shakshuka",
      "zh": "番茄炖蛋",
      "nl": "Shakshuka",
      "local": "shakshuka"
    },
    "category": "main",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Shakshuka is eggs poached in spiced tomato and pepper sauce, often served with bread.",
      "zh": "番茄炖蛋通常是鸡蛋卧在香料番茄甜椒酱里炖煮，常配面包蘸酱。",
      "nl": "Shakshuka is meestal eieren gepocheerd in gekruide tomaat-paprikasaus, vaak met brood."
    },
    "cookingProfile": {
      "en": "Expect saucy tomato base, soft eggs, and bread for dipping.",
      "zh": "点餐时可预期番茄酱汁多，鸡蛋柔软，适合蘸面包。",
      "nl": "Verwacht sauzige tomatenbasis, zachte eieren en brood om te dippen."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "Shakshuka is recognized by eggs poached in spiced tomato and pepper sauce, often served with bread.",
        "zh": "番茄炖蛋的识别重点是鸡蛋卧在香料番茄甜椒酱里炖煮，常配面包蘸酱。",
        "nl": "Shakshuka herken je aan eieren gepocheerd in gekruide tomaat-paprikasaus, vaak met brood."
      }
    },
    "composition": [
      [
        "tomato-sauce",
        45,
        "sauce",
        "seasoning"
      ],
      [
        "egg",
        25,
        "poached-eggs"
      ],
      [
        "bell-pepper",
        15,
        "pepper-onion-base"
      ],
      [
        "bread",
        10,
        "dipping-side"
      ],
      [
        "cumin",
        5,
        "warm-spice",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "tomato-sauce",
      "egg",
      "cumin",
      "garlic"
    ],
    "basicTaste": [
      "savory",
      "tangy",
      "warm-spiced"
    ],
    "textureProfile": [
      "saucy tomato base",
      "soft eggs",
      "bread-dipping"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-gluten"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "brunch",
      "vegetarian-friendly"
    ],
    "avoidIfTags": [
      "egg-allergy",
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Choose it when you want savory, tangy, warm-spiced Shakshuka; avoid if the listed allergens, main ingredients, or texture do not fit you.",
      "zh": "想要咸香、酸爽、温暖香料的番茄炖蛋时可以点；如有过敏、忌口，或不喜欢主要食材与口感，请谨慎。",
      "nl": "Kies dit als je hartige, friszure, warm gekruide Shakshuka wilt; vermijd bij allergenen, dieetwensen of als de hoofdstructuur je niet aanspreekt."
    },
    "confidenceTag": "audited-world-depth-batch-031",
    "spiceLevel": 1,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  }),
  cafeDish({
    "id": "french-toast",
    "metadataCode": "122013",
    "imageCode": "122013",
    "cuisineId": "american",
    "names": {
      "en": "French Toast",
      "zh": "法式吐司",
      "nl": "Wentelteefjes",
      "local": "French toast"
    },
    "category": "dessert",
    "mealRole": "dessert",
    "portionType": "individual",
    "goodForSharing": true,
    "cookingMethods": [
      "fried",
      "toasted"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "French Toast is bread soaked in egg and dairy, pan-browned and served sweet with syrup or fruit.",
      "zh": "法式吐司通常是浸过蛋奶的面包煎香后配糖浆或水果，整体偏甜。",
      "nl": "Wentelteefjes is meestal in ei en zuivel geweekt brood, goudbruin gebakken en zoet geserveerd met siroop of fruit."
    },
    "cookingProfile": {
      "en": "Expect a soft custardy middle, browned edges, and a sweet brunch feel.",
      "zh": "点餐时可预期内里柔软像蛋奶布丁，边缘煎香，适合甜口早午餐。",
      "nl": "Verwacht een zachte custardkern, bruine randjes en een zoete brunchstijl."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "dessert"
      ],
      "description": {
        "en": "The ordering cue is a soft custardy middle, browned edges, and a sweet brunch feel.",
        "zh": "点餐识别重点是内里柔软像蛋奶布丁，边缘煎香，适合甜口早午餐。",
        "nl": "Het herkenningspunt is een zachte custardkern, bruine randjes en een zoete brunchstijl."
      }
    },
    "composition": [
      [
        "bread",
        45,
        "base"
      ],
      [
        "egg",
        20,
        "component"
      ],
      [
        "cream",
        15,
        "richness"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "maple-syrup",
        10,
        "distinctive-seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "maple-syrup",
      "cinnamon",
      "vanilla"
    ],
    "basicTaste": [
      "sweet",
      "creamy",
      "buttery"
    ],
    "textureProfile": [
      "custardy center",
      "browned edges",
      "syrupy finish"
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
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-allergy",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Choose it when you want sweet, soft brunch with syrup; skip if you want a light or savory breakfast.",
      "zh": "想吃带糖浆的柔软甜早午餐时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je zoete, zachte brunch met siroop wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-034",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/122013-french-toast.webp",
    "thumbPath": "/assets/dishes/thumb/122013-french-toast.webp"
  }),
  cafeDish({
    "id": "eggs-benedict",
    "metadataCode": "122014",
    "imageCode": "122014",
    "cuisineId": "american",
    "names": {
      "en": "Eggs Benedict",
      "zh": "班尼迪克蛋",
      "nl": "Eggs Benedict",
      "local": "eggs benedict"
    },
    "category": "main",
    "mealRole": "main",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "assembled"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Eggs Benedict is poached eggs on a muffin or toast with ham and hollandaise sauce.",
      "zh": "班尼迪克蛋通常是英式松饼或吐司上放火腿、水波蛋和荷兰酱。",
      "nl": "Eggs Benedict is meestal gepocheerde eieren op muffin of toast met ham en hollandaisesaus."
    },
    "cookingProfile": {
      "en": "Expect runny egg yolk, buttery sauce, and a fairly rich plate.",
      "zh": "点餐时可预期流心水波蛋配黄油感荷兰酱，整体比较浓郁。",
      "nl": "Verwacht lopende eidooier, botersaus en een vrij rijk bord."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "The ordering cue is runny egg yolk, buttery sauce, and a fairly rich plate.",
        "zh": "点餐识别重点是流心水波蛋配黄油感荷兰酱，整体比较浓郁。",
        "nl": "Het herkenningspunt is lopende eidooier, botersaus en een vrij rijk bord."
      }
    },
    "composition": [
      [
        "egg",
        30,
        "component"
      ],
      [
        "bread",
        25,
        "base"
      ],
      [
        "ham",
        20,
        "protein"
      ],
      [
        "hollandaise-sauce",
        20,
        "richness"
      ],
      [
        "black-pepper",
        5,
        "distinctive-seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "hollandaise-sauce",
      "egg",
      "ham"
    ],
    "basicTaste": [
      "rich",
      "savory",
      "buttery"
    ],
    "textureProfile": [
      "runny egg",
      "creamy sauce",
      "soft bread"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-dairy",
      "contains-gluten",
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [],
    "avoidIfTags": [
      "egg-allergy",
      "dairy-free",
      "gluten-free",
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a classic rich brunch plate; skip if you dislike hollandaise, ham, or runny eggs.",
      "zh": "想吃经典浓郁早午餐时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een klassieke rijke brunch wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-034",
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/122014-eggs-benedict.webp",
    "thumbPath": "/assets/dishes/thumb/122014-eggs-benedict.webp"
  }),
  cafeDish({
    "id": "avocado-toast",
    "metadataCode": "122015",
    "imageCode": "122015",
    "cuisineId": "american",
    "names": {
      "en": "Avocado Toast",
      "zh": "牛油果吐司",
      "nl": "Avocadotoast",
      "local": "avocado toast"
    },
    "category": "bread",
    "mealRole": "starter-or-side",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "assembled",
      "toasted"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Avocado Toast is crisp toast topped with mashed or sliced avocado and optional egg, cheese, chili, or seeds.",
      "zh": "牛油果吐司通常是脆吐司上铺牛油果泥或切片，可加鸡蛋、奶酪或辣椒。",
      "nl": "Avocadotoast is meestal krokante toast met geprakte of gesneden avocado en soms ei, kaas of chili."
    },
    "cookingProfile": {
      "en": "Expect creamy avocado on toast; toppings decide whether it is light or filling.",
      "zh": "点餐时可预期酥脆吐司配奶油感牛油果，是否饱腹主要看配料。",
      "nl": "Verwacht romige avocado op toast; toppings bepalen hoe vullend het wordt."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "The ordering cue is creamy avocado on toast; toppings decide whether it is light or filling.",
        "zh": "点餐识别重点是酥脆吐司配奶油感牛油果，是否饱腹主要看配料。",
        "nl": "Het herkenningspunt is romige avocado op toast; toppings bepalen hoe vullend het wordt."
      }
    },
    "composition": [
      [
        "bread",
        40,
        "base"
      ],
      [
        "avocado",
        35,
        "component"
      ],
      [
        "egg",
        15,
        "component"
      ],
      [
        "feta",
        5,
        "richness"
      ],
      [
        "chili",
        5,
        "distinctive-seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "avocado",
      "chili",
      "olive-oil"
    ],
    "basicTaste": [
      "mild",
      "creamy",
      "fresh"
    ],
    "textureProfile": [
      "crisp toast",
      "creamy avocado",
      "optional runny egg"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [
      "can-be-vegetarian"
    ],
    "goodForTags": [
      "sandwich-or-bread"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-allergy",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Choose it when you want fresh creamy toast with flexible toppings; skip if you need guaranteed vegan or gluten-free food.",
      "zh": "想吃清爽奶油感吐司时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je frisse romige toast met flexibele toppings wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-034",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/122015-avocado-toast.webp",
    "thumbPath": "/assets/dishes/thumb/122015-avocado-toast.webp"
  }),
  cafeDish({
    "id": "granola-bowl",
    "metadataCode": "122016",
    "imageCode": "122016",
    "cuisineId": "american",
    "names": {
      "en": "Granola Bowl",
      "zh": "格兰诺拉酸奶碗",
      "nl": "Granolabowl",
      "local": "granola bowl"
    },
    "category": "dessert",
    "mealRole": "dessert",
    "portionType": "individual",
    "goodForSharing": true,
    "cookingMethods": [
      "assembled",
      "chilled"
    ],
    "servingTemperature": "cold-or-cool",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Granola Bowl is a chilled yogurt bowl with granola, fruit, and a sweet drizzle.",
      "zh": "格兰诺拉酸奶碗通常是冷酸奶碗配格兰诺拉麦片、水果和少量甜味淋酱。",
      "nl": "Granolabowl is meestal een koude yoghurtkom met granola, fruit en iets zoets."
    },
    "cookingProfile": {
      "en": "Expect creamy yogurt, crunchy oats, and fresh fruit rather than a hot breakfast.",
      "zh": "点餐时可预期酸奶顺滑、麦片酥脆、水果清新，不是热早餐。",
      "nl": "Verwacht romige yoghurt, krokante granola en vers fruit in plaats van warm ontbijt."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "dessert"
      ],
      "description": {
        "en": "The ordering cue is creamy yogurt, crunchy oats, and fresh fruit rather than a hot breakfast.",
        "zh": "点餐识别重点是酸奶顺滑、麦片酥脆、水果清新，不是热早餐。",
        "nl": "Het herkenningspunt is romige yoghurt, krokante granola en vers fruit in plaats van warm ontbijt."
      }
    },
    "composition": [
      [
        "yogurt",
        40,
        "richness"
      ],
      [
        "granola",
        25,
        "component"
      ],
      [
        "berries",
        20,
        "fruit-or-sweetness"
      ],
      [
        "banana",
        10,
        "fruit-or-sweetness"
      ],
      [
        "honey",
        5,
        "distinctive-seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "yogurt",
      "berries",
      "honey"
    ],
    "basicTaste": [
      "sweet",
      "tangy",
      "fresh"
    ],
    "textureProfile": [
      "creamy yogurt",
      "crunchy granola",
      "juicy fruit"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-gluten",
      "contains-tree-nut"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert"
    ],
    "avoidIfTags": [
      "dairy-free",
      "gluten-free",
      "tree-nut-allergy"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a lighter sweet breakfast bowl; skip if you avoid dairy, nuts, or hidden sugar.",
      "zh": "想吃较轻的甜口早餐碗时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een lichtere zoete ontbijtkom wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-034",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/122016-granola-bowl.webp",
    "thumbPath": "/assets/dishes/thumb/122016-granola-bowl.webp"
  }),
  cafeDish({
    "id": "acai-bowl",
    "metadataCode": "130013",
    "imageCode": "130013",
    "cuisineId": "brazilian",
    "names": {
      "en": "Açaí Bowl",
      "zh": "巴西莓碗",
      "nl": "Açaíbowl",
      "local": "açaí bowl"
    },
    "category": "dessert",
    "mealRole": "dessert",
    "portionType": "individual",
    "goodForSharing": true,
    "cookingMethods": [
      "assembled",
      "chilled"
    ],
    "servingTemperature": "cold-or-cool",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Açaí Bowl is a cold blended açaí fruit bowl topped with banana, granola, and sweet extras.",
      "zh": "巴西莓碗通常是冷打巴西莓果泥碗，上面常放香蕉、麦片和甜配料。",
      "nl": "Açaíbowl is meestal een koude gemixte acaikom met banaan, granola en zoete toppings."
    },
    "cookingProfile": {
      "en": "Expect a thick cold fruit base with crunchy toppings.",
      "zh": "点餐时可预期冷果泥厚实，上面配酥脆配料。",
      "nl": "Verwacht een dikke koude fruitbasis met krokante toppings."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "dessert"
      ],
      "description": {
        "en": "The ordering cue is a thick cold fruit base with crunchy toppings.",
        "zh": "点餐识别重点是冷果泥厚实，上面配酥脆配料。",
        "nl": "Het herkenningspunt is een dikke koude fruitbasis met krokante toppings."
      }
    },
    "composition": [
      [
        "acai-puree",
        45,
        "fruit-or-sweetness"
      ],
      [
        "banana",
        25,
        "fruit-or-sweetness"
      ],
      [
        "granola",
        20,
        "component"
      ],
      [
        "honey",
        5,
        "distinctive-seasoning"
      ],
      [
        "grated-coconut",
        5,
        "component"
      ]
    ],
    "distinctiveFlavorSources": [
      "acai-puree",
      "banana",
      "granola"
    ],
    "basicTaste": [
      "sweet-tart",
      "fruity",
      "cold"
    ],
    "textureProfile": [
      "smooth frozen base",
      "crunchy topping",
      "fruit bowl"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-tree-nut"
    ],
    "dietaryFlags": [
      "can-be-vegan"
    ],
    "goodForTags": [
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free",
      "tree-nut-allergy"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a cold fruity breakfast bowl; skip if you avoid cold sweet bowls or hidden sugar.",
      "zh": "想吃冷的水果早餐碗时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een koude fruitige ontbijtkom wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-035",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/130013-acai-bowl.webp",
    "thumbPath": "/assets/dishes/thumb/130013-acai-bowl.webp"
  }),
  cafeDish({
    id: "croissant",
    metadataCode: "103019",
    cuisineId: "french",
    names: { en: "Croissant", zh: "可颂", nl: "Croissant", local: "croissant" },
    category: "bread",
    cookingMethods: ["baked"],
    shortDescription: {
      en: "Buttery laminated pastry with flaky layers, eaten plain or with jam, butter, cheese, or ham.",
      zh: "黄油层叠酥皮面包，外酥内软，可原味或配果酱、黄油、奶酪、火腿。",
      nl: "Boterig gelamineerd gebak met vlokken, naturel of met jam, kaas of ham.",
    },
    cookingProfile: {
      en: "Best when fresh and flaky; more pastry than bread.",
      zh: "新鲜时层次酥脆，严格说更像点心而不是普通面包。",
      nl: "Het best vers en vlokkig; meer gebak dan brood.",
    },
    composition: [["croissant-pastry", 80, "base"], ["butter", 15, "richness"], ["sea-salt", 5, "seasoning", "seasoning"]],
    distinctiveFlavorSources: ["sea-salt"],
    basicTaste: ["buttery", "mild", "slightly-sweet"],
    textureProfile: ["flaky", "airy", "buttery"],
    riskFlags: ["contains-gluten", "contains-dairy"],
    dietaryFlags: ["vegetarian"],
    goodForTags: ["breakfast", "bakery"],
    orderVerdict: {
      en: "A safe bakery choice; freshness matters more than toppings.",
      zh: "很稳的烘焙早餐选择；新鲜度比配料更重要。",
      nl: "Veilige bakkerskeuze; versheid is belangrijker dan topping.",
    },
    weightLevel: 2,
    confidenceTag: "audited-core-batch-002",
    metadataConfidence: 0.82
  }),
  cafeDish({
    id: "pain-au-chocolat",
    metadataCode: "103020",
    cuisineId: "french",
    names: { en: "Pain au Chocolat", zh: "巧克力可颂", nl: "Chocoladebroodje", local: "pain au chocolat" },
    category: "dessert",
    cookingMethods: ["baked"],
    shortDescription: {
      en: "Flaky laminated pastry filled with chocolate batons.",
      zh: "层叠酥皮包巧克力条，甜度适中，偏早餐甜点。",
      nl: "Vlokkig gelamineerd gebak met chocoladevulling.",
    },
    cookingProfile: {
      en: "Flaky pastry plus melty chocolate; good as a sweet bakery item, not a full meal.",
      zh: "酥皮加融化巧克力，适合甜口烘焙，不是正餐。",
      nl: "Vlokkig deeg met smeltende chocolade; zoet bakkersitem, geen maaltijd.",
    },
    composition: [["croissant-pastry", 70, "pastry"], ["chocolate", 25, "filling"], ["butter", 5, "richness"]],
    distinctiveFlavorSources: ["cocoa", "vanilla"],
    basicTaste: ["sweet", "buttery", "chocolatey"],
    textureProfile: ["flaky", "melty chocolate", "buttery"],
    riskFlags: ["contains-gluten", "contains-dairy"],
    dietaryFlags: ["vegetarian"],
    goodForTags: ["breakfast", "bakery", "sweet-choice"],
    orderVerdict: {
      en: "Choose it for a sweet bakery bite; pair with coffee rather than treating it as a main.",
      zh: "适合想吃甜口烘焙时点，最好配咖啡，不算正餐。",
      nl: "Kies voor een zoete bakkershap; beter met koffie dan als hoofdmaaltijd.",
    },
    weightLevel: 2,
    confidenceTag: "audited-core-batch-002",
    metadataConfidence: 0.82
  }),
  cafeDish({
    "id": "club-sandwich",
    "metadataCode": "122017",
    "imageCode": "122017",
    "cuisineId": "american",
    "names": {
      "en": "Club Sandwich",
      "zh": "总汇三明治",
      "nl": "Club Sandwich",
      "local": "club sandwich"
    },
    "category": "bread",
    "mealRole": "starter-or-side",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "assembled",
      "toasted"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Club Sandwich is a layered toasted sandwich with chicken or turkey, bacon, egg, lettuce-style vegetables, and mayonnaise.",
      "zh": "总汇三明治通常是多层烤三明治，常有鸡肉或火鸡、培根、鸡蛋、蔬菜和蛋黄酱。",
      "nl": "Club Sandwich is meestal een gelaagde tosti-achtige sandwich met kip of kalkoen, spek, ei, groente en mayonaise."
    },
    "cookingProfile": {
      "en": "Expect a filling stacked sandwich with salty bacon and creamy sauce.",
      "zh": "点餐时可预期分量较足，培根咸香，酱感明显。",
      "nl": "Verwacht een vullende gestapelde sandwich met zout spek en romige saus."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "The ordering cue is a filling stacked sandwich with salty bacon and creamy sauce.",
        "zh": "点餐识别重点是分量较足，培根咸香，酱感明显。",
        "nl": "Het herkenningspunt is een vullende gestapelde sandwich met zout spek en romige saus."
      }
    },
    "composition": [
      [
        "bread",
        35,
        "base"
      ],
      [
        "chicken",
        25,
        "protein"
      ],
      [
        "bacon",
        15,
        "protein"
      ],
      [
        "egg",
        10,
        "component"
      ],
      [
        "mayonnaise",
        10,
        "richness"
      ],
      [
        "tomato",
        5,
        "component"
      ]
    ],
    "distinctiveFlavorSources": [
      "bacon",
      "mayonnaise",
      "black-pepper"
    ],
    "basicTaste": [
      "savory",
      "creamy",
      "salty"
    ],
    "textureProfile": [
      "layered toast",
      "crisp bacon",
      "creamy sauce"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "sandwich-or-bread"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-allergy",
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a substantial cafe sandwich; skip if you avoid pork, egg, or mayonnaise.",
      "zh": "想吃分量足的咖啡馆三明治时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een stevige cafésandwich wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-034",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/122017-club-sandwich.webp",
    "thumbPath": "/assets/dishes/thumb/122017-club-sandwich.webp"
  }),
  cafeDish({
    "id": "bagel-cream-cheese",
    "metadataCode": "122018",
    "imageCode": "122018",
    "cuisineId": "american",
    "names": {
      "en": "Bagel with Cream Cheese",
      "zh": "奶油奶酪贝果",
      "nl": "Bagel met Roomkaas",
      "local": "bagel with cream cheese"
    },
    "category": "bread",
    "mealRole": "starter-or-side",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "assembled",
      "toasted"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Bagel with Cream Cheese is a chewy bagel served with a thick cream cheese spread.",
      "zh": "奶油奶酪贝果通常是有嚼劲的贝果配厚厚奶油奶酪。",
      "nl": "Bagel met Roomkaas is meestal een taaie bagel met een dikke laag roomkaas."
    },
    "cookingProfile": {
      "en": "Expect dense bread and cool tangy dairy, usually simple and filling.",
      "zh": "点餐时可预期面包体扎实，奶油奶酪清凉微酸，通常简单但顶饱。",
      "nl": "Verwacht compact brood met koele friszure zuivel, meestal eenvoudig en vullend."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "The ordering cue is dense bread and cool tangy dairy, usually simple and filling.",
        "zh": "点餐识别重点是面包体扎实，奶油奶酪清凉微酸，通常简单但顶饱。",
        "nl": "Het herkenningspunt is compact brood met koele friszure zuivel, meestal eenvoudig en vullend."
      }
    },
    "composition": [
      [
        "bagel",
        65,
        "base"
      ],
      [
        "cream-cheese",
        30,
        "richness"
      ],
      [
        "cucumber",
        5,
        "component"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream-cheese",
      "sea-salt"
    ],
    "basicTaste": [
      "mild",
      "creamy",
      "tangy"
    ],
    "textureProfile": [
      "chewy bagel",
      "thick spread",
      "cool bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "sandwich-or-bread"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a mild filling bagel; skip if you avoid dairy or dense bread.",
      "zh": "想吃温和顶饱的贝果时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een milde vullende bagel wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-034",
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/122018-bagel-cream-cheese.webp",
    "thumbPath": "/assets/dishes/thumb/122018-bagel-cream-cheese.webp"
  }),
  cafeDish({
    "id": "smoked-salmon-bagel",
    "metadataCode": "122019",
    "imageCode": "122019",
    "cuisineId": "american",
    "names": {
      "en": "Smoked Salmon Bagel",
      "zh": "烟熏三文鱼贝果",
      "nl": "Bagel met Gerookte Zalm",
      "local": "smoked salmon bagel"
    },
    "category": "bread",
    "mealRole": "starter-or-side",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "assembled",
      "toasted"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Smoked Salmon Bagel is a bagel layered with smoked salmon, cream cheese, and often capers or cucumber.",
      "zh": "烟熏三文鱼贝果通常是贝果夹烟熏三文鱼、奶油奶酪，常配酸豆或黄瓜。",
      "nl": "Bagel met Gerookte Zalm is meestal een bagel met gerookte zalm, roomkaas en vaak kappertjes of komkommer."
    },
    "cookingProfile": {
      "en": "Expect salty silky fish, tangy dairy, and a chewy bread base.",
      "zh": "点餐时可预期烟熏鱼咸鲜滑嫩，配微酸奶油奶酪和有嚼劲贝果。",
      "nl": "Verwacht zoute zachte vis, frisse zuivel en een taaie broodbasis."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "The ordering cue is salty silky fish, tangy dairy, and a chewy bread base.",
        "zh": "点餐识别重点是烟熏鱼咸鲜滑嫩，配微酸奶油奶酪和有嚼劲贝果。",
        "nl": "Het herkenningspunt is zoute zachte vis, frisse zuivel en een taaie broodbasis."
      }
    },
    "composition": [
      [
        "bagel",
        40,
        "base"
      ],
      [
        "smoked-salmon",
        30,
        "component"
      ],
      [
        "cream-cheese",
        20,
        "richness"
      ],
      [
        "cucumber",
        5,
        "component"
      ],
      [
        "capers",
        5,
        "component"
      ]
    ],
    "distinctiveFlavorSources": [
      "smoked-salmon",
      "cream-cheese",
      "capers"
    ],
    "basicTaste": [
      "salty",
      "creamy",
      "briny"
    ],
    "textureProfile": [
      "chewy bagel",
      "silky salmon",
      "cool cream cheese"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "contains-fish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "sandwich-or-bread"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free",
      "fish-allergy"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a briny creamy salmon bagel; skip if you avoid fish, dairy, or capers.",
      "zh": "想吃咸鲜奶油感三文鱼贝果时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een zilte romige zalmbagel wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-034",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/122019-smoked-salmon-bagel.webp",
    "thumbPath": "/assets/dishes/thumb/122019-smoked-salmon-bagel.webp"
  }),
  cafeDish({
    id: "tosti",
    metadataCode: "102018",
    cuisineId: "dutch",
    names: { en: "Tosti", zh: "荷式烤火腿奶酪三明治", nl: "Tosti", local: "tosti" },
    category: "bread",
    cookingMethods: ["toasted"],
    shortDescription: {
      en: "Dutch toasted sandwich, usually cheese or ham-and-cheese, often served with ketchup or curry sauce.",
      zh: "荷兰常见热压三明治，通常是奶酪或火腿奶酪，常配番茄酱或咖喱酱。",
      nl: "Nederlandse gegrilde boterham, meestal kaas of ham-kaas, vaak met ketchup of curry.",
    },
    cookingProfile: {
      en: "A simple hot café snack: crisp bread, melted cheese, and sometimes ham.",
      zh: "简单热 café 小吃：面包烤脆、奶酪融化，有时加火腿。",
      nl: "Simpele warme cafésnack: krokant brood, gesmolten kaas en soms ham.",
    },
    composition: [["bread", 55, "base"], ["cheese", 30, "melted-filling"], ["ham", 10, "optional-filling"], ["butter", 5, "toast-fat"]],
    distinctiveFlavorSources: ["sea-salt"],
    basicTaste: ["savory", "cheesy", "mild"],
    textureProfile: ["crisp bread", "melted cheese", "simple"],
    riskFlags: ["contains-gluten", "contains-dairy", "contains-pork"],
    dietaryFlags: ["can-be-vegetarian"],
    goodForTags: ["quick-bite", "safe-choice"],
    orderVerdict: {
      en: "Very safe Dutch café snack; ask for kaas only if you want vegetarian.",
      zh: "非常稳的荷兰 café 小食；想素食就点纯奶酪版。",
      nl: "Heel veilige Nederlandse cafésnack; vraag kaas-only voor vegetarisch.",
    },
    weightLevel: 2,
    confidenceTag: "audited-core-batch-002",
    metadataConfidence: 0.82
  }),
  cafeDish({
    id: "broodje-gezond",
    metadataCode: "102020",
    cuisineId: "dutch",
    names: { en: "Broodje Gezond", zh: "荷式健康三明治", nl: "Broodje Gezond", local: "broodje gezond" },
    category: "bread",
    cookingMethods: ["assembled"],
    shortDescription: {
      en: "Dutch sandwich with cheese, ham, egg, lettuce, tomato, cucumber, and sometimes mayo.",
      zh: "荷兰常见三明治，含奶酪、火腿、鸡蛋、生菜、番茄、黄瓜，有时加蛋黄酱。",
      nl: "Nederlandse sandwich met kaas, ham, ei, sla, tomaat, komkommer en soms mayo.",
    },
    cookingProfile: {
      en: "Cold assembled sandwich; despite the name, it can still include ham, cheese, egg, and mayo.",
      zh: "冷组装三明治；虽然叫 gezond，但常含火腿、奶酪、鸡蛋和蛋黄酱。",
      nl: "Koude sandwich; ondanks de naam vaak met ham, kaas, ei en mayo.",
    },
    composition: [["bread", 40, "base"], ["cheese", 15, "filling"], ["ham", 15, "filling"], ["egg", 10, "filling"], ["tomato", 10, "freshness"], ["cucumber", 10, "freshness"]],
    distinctiveFlavorSources: ["mustard", "black-pepper"],
    basicTaste: ["savory", "fresh", "mild"],
    textureProfile: ["cold sandwich", "fresh vegetables", "soft bread"],
    riskFlags: ["contains-gluten", "contains-dairy", "contains-egg", "contains-pork"],
    dietaryFlags: [],
    goodForTags: ["dutch-cafe", "lunch"],
    orderVerdict: {
      en: "A common Dutch lunch sandwich; not automatically vegetarian or light despite the name.",
      zh: "荷兰常见午餐三明治；虽然名字健康，但不一定素，也不一定很轻。",
      nl: "Veelvoorkomende Nederlandse lunch; niet automatisch vegetarisch of licht ondanks de naam.",
    },
    weightLevel: 3,
    confidenceTag: "audited-core-batch-002",
    metadataConfidence: 0.82
  }),
  cafeDish({
    id: "croque-madame",
    metadataCode: "103021",
    cuisineId: "french",
    names: { en: "Croque Madame", zh: "法式火腿奶酪煎蛋三明治", nl: "Croque Madame", local: "croque madame" },
    category: "bread",
    cookingMethods: ["baked", "fried"],
    shortDescription: {
      en: "Croque monsieur-style ham and cheese sandwich topped with a fried egg.",
      zh: "在法式火腿奶酪三明治上加煎蛋，较浓郁、很饱。",
      nl: "Croque monsieur met ham en kaas, afgewerkt met een gebakken ei.",
    },
    cookingProfile: {
      en: "Toasted or baked sandwich with melted cheese and egg; richer than a regular toastie.",
      zh: "烤三明治加融化奶酪和煎蛋，比普通烤三明治更厚重。",
      nl: "Geroosterde sandwich met gesmolten kaas en ei; rijker dan gewone tosti.",
    },
    composition: [["bread", 35, "base"], ["ham", 20, "filling"], ["cheese", 20, "melted-cheese"], ["egg", 15, "fried-egg"], ["butter", 10, "richness"]],
    distinctiveFlavorSources: ["black-pepper", "sea-salt"],
    basicTaste: ["savory", "cheesy", "rich"],
    textureProfile: ["melted cheese", "fried egg", "toasted bread"],
    riskFlags: ["contains-gluten", "contains-dairy", "contains-egg", "contains-pork"],
    dietaryFlags: [],
    goodForTags: ["brunch", "filling-lunch"],
    orderVerdict: {
      en: "Order if you want a rich hot sandwich; too heavy if you only want a small snack.",
      zh: "想吃浓郁热三明治可以点；只想小吃会偏重。",
      nl: "Bestel voor een rijke warme sandwich; zwaar als kleine snack.",
    },
    weightLevel: 4,
    confidenceTag: "audited-core-batch-002",
    metadataConfidence: 0.82
  }),
  cafeDish({
    id: "quiche",
    metadataCode: "103022",
    cuisineId: "french",
    names: { en: "Quiche", zh: "法式咸派", nl: "Quiche", local: "quiche" },
    category: "starter",
    cookingMethods: ["baked"],
    shortDescription: {
      en: "Savory tart with egg and cream custard, often filled with cheese, vegetables, bacon, or salmon.",
      zh: "蛋奶馅咸派，常加奶酪、蔬菜、培根或三文鱼。",
      nl: "Hartige taart met ei-roomvulling, vaak met kaas, groenten, spek of zalm.",
    },
    cookingProfile: {
      en: "Baked custard in pastry; creamy and filling even when served as a small slice.",
      zh: "酥皮里是烤蛋奶馅，即使一小块也比较有饱腹感。",
      nl: "Gebakken custard in deeg; romig en vullend, ook als klein puntje.",
    },
    composition: [["pastry-crust", 35, "crust"], ["egg", 25, "custard"], ["cream", 20, "custard"], ["cheese", 10, "filling"], ["mixed-vegetables", 10, "optional-filling"]],
    distinctiveFlavorSources: ["black-pepper", "sea-salt"],
    basicTaste: ["savory", "creamy", "mild"],
    textureProfile: ["crumbly crust", "set custard", "creamy"],
    riskFlags: ["contains-gluten", "contains-dairy", "contains-egg"],
    dietaryFlags: ["can-be-vegetarian"],
    goodForTags: ["cafe-lunch", "brunch"],
    orderVerdict: {
      en: "Useful café lunch item; check filling because bacon, salmon, and vegetarian versions vary.",
      zh: "很实用的 café 午餐；馅料差异大，要看是培根、三文鱼还是素食。",
      nl: "Nuttig café-lunchitem; check vulling want spek, zalm en vegetarisch verschillen.",
    },
    weightLevel: 3,
    confidenceTag: "audited-core-batch-002",
    metadataConfidence: 0.82
  }),
  cafeDish({
    "id": "banana-bread",
    "metadataCode": "122020",
    "imageCode": "122020",
    "cuisineId": "american",
    "names": {
      "en": "Banana Bread",
      "zh": "香蕉蛋糕",
      "nl": "Bananenbrood",
      "local": "banana bread"
    },
    "category": "dessert",
    "mealRole": "dessert",
    "portionType": "individual",
    "goodForSharing": true,
    "cookingMethods": [
      "baked"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Banana Bread is a moist banana loaf cake often sold as a cafe snack.",
      "zh": "香蕉蛋糕通常是湿润的香蕉蛋糕条，常作为咖啡馆小点。",
      "nl": "Bananenbrood is meestal een vochtige bananencake, vaak als cafésnack."
    },
    "cookingProfile": {
      "en": "Expect soft cake texture and banana sweetness rather than savory bread.",
      "zh": "点餐时可预期口感更像软蛋糕，香蕉甜味明显，不是咸面包。",
      "nl": "Verwacht zachte cake en bananenzachtheid, geen hartig brood."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "dessert"
      ],
      "description": {
        "en": "The ordering cue is soft cake texture and banana sweetness rather than savory bread.",
        "zh": "点餐识别重点是口感更像软蛋糕，香蕉甜味明显，不是咸面包。",
        "nl": "Het herkenningspunt is zachte cake en bananenzachtheid, geen hartig brood."
      }
    },
    "composition": [
      [
        "banana",
        35,
        "fruit-or-sweetness"
      ],
      [
        "wheat-flour",
        30,
        "base"
      ],
      [
        "egg",
        15,
        "component"
      ],
      [
        "sugar",
        10,
        "component"
      ],
      [
        "butter",
        10,
        "richness"
      ]
    ],
    "distinctiveFlavorSources": [
      "banana",
      "vanilla",
      "cinnamon"
    ],
    "basicTaste": [
      "sweet",
      "banana",
      "soft"
    ],
    "textureProfile": [
      "moist cake",
      "soft crumb",
      "sweet loaf"
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
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-allergy",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a sweet snack with coffee; skip if you want a savory or very light breakfast.",
      "zh": "想配咖啡吃一份小甜点时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een zoete snack bij koffie wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-034",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/122020-banana-bread.webp",
    "thumbPath": "/assets/dishes/thumb/122020-banana-bread.webp"
  }),
];

function cafeDish(config) {
  return starterDish({
    cuisineRole: {
      level: config.cuisineRoleLevel || "common",
      tags: ["cafe-menu-common", ...(config.cuisineRoleTags || [])],
      description: {
        en: "A practical café or brunch item where fillings, toppings, richness, and allergens drive the ordering decision.",
        zh: "常见咖啡馆或早午餐菜品，点餐重点通常是馅料、配料、浓郁度和过敏风险。",
        nl: "Een praktisch café- of brunchgerecht waarbij vulling, toppings, rijkheid en allergenen de bestelkeuze bepalen.",
      },
    },
    confidenceTag: "verified-cafe-brunch-depth-v1",
    metadataConfidence: config.metadataConfidence ?? 0.78,
    restaurantVariationLevel: config.restaurantVariationLevel || "high",
    ...config,
  });
}
