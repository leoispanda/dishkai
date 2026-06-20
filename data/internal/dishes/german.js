import { starterDish } from "./starter-dish.js";

export const germanDishes = [
  starterDish({
    "id": "schnitzel",
    "metadataCode": "106001",
    "cuisineId": "german",
    "names": {
      "en": "Schnitzel",
      "zh": "德式炸肉排",
      "nl": "Schnitzel",
      "local": "Schnitzel"
    },
    "category": "meat",
    "cookingMethods": [
      "fried"
    ],
    "shortDescription": {
      "en": "Breaded pork or veal cutlet fried until crisp, often served with potato or salad.",
      "zh": "猪肉或小牛肉裹面包糠煎炸至酥脆，常配土豆或沙拉。",
      "nl": "Gepaneerde varkens- of kalfsschnitzel krokant gebakken, vaak met aardappel of salade."
    },
    "cookingProfile": {
      "en": "The cutlet is pounded thin and fried, so it is crisp outside and relatively quick to eat.",
      "zh": "肉排拍薄后煎炸，外层酥脆，吃起来直接、饱腹。",
      "nl": "De kotelet wordt dun geslagen en gebakken, krokant buiten en makkelijk te eten."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "internationally-known"
      ],
      "description": {
        "en": "A broadly recognized German dish; useful for judging weight, richness, preparation style, and main ingredients.",
        "zh": "这是一道辨识度高的德国菜，适合判断分量、厚重感、做法风格和主要食材。",
        "nl": "Een herkenbaar Duits gerecht voor zwaarte, rijkheid, bereidingsstijl en hoofdingrediënten."
      }
    },
    "composition": [
      [
        "pork-cutlet",
        55,
        "protein"
      ],
      [
        "bread",
        20,
        "coating"
      ],
      [
        "egg",
        10,
        "coating"
      ],
      [
        "potato",
        15,
        "side"
      ]
    ],
    "distinctiveFlavorSources": [
      "mustard",
      "lemon"
    ],
    "basicTaste": [
      "savory",
      "salty",
      "oily"
    ],
    "textureProfile": [
      "crisp coating",
      "tender meat"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-pork"
    ],
    "orderVerdict": {
      "en": "A familiar crispy meat choice; heavier than grilled or steamed dishes.",
      "zh": "想吃酥脆肉排很稳；比烤制或蒸制菜更厚重。",
      "nl": "Een bekende krokante vleeskeuze; zwaarder dan gegrild of gestoomd."
    },
    "weightLevel": 4,
    "confidenceTag": "audited-core-batch-001",
    "metadataConfidence": 0.82
  }),
  starterDish({
    "id": "bratwurst",
    "metadataCode": "106002",
    "cuisineId": "german",
    "names": {
      "en": "Bratwurst",
      "zh": "德式煎香肠",
      "nl": "Braadworst",
      "local": "Bratwurst"
    },
    "category": "meat",
    "cookingMethods": [
      "grilled",
      "fried"
    ],
    "shortDescription": {
      "en": "German sausage usually grilled or pan-fried, often served with mustard, bread, or potato.",
      "zh": "德式香肠通常煎或烤，常配芥末、面包或土豆。",
      "nl": "Duitse worst meestal gegrild of gebakken, vaak met mosterd, brood of aardappel."
    },
    "cookingProfile": {
      "en": "The sausage is browned outside and juicy inside, with a salty, meaty profile.",
      "zh": "香肠外层煎烤上色，内部多汁，咸香肉味明显。",
      "nl": "De worst is bruin buiten en sappig binnen, zout en vlezig."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "street-food"
      ],
      "description": {
        "en": "A broadly recognized German dish; useful for judging weight, richness, preparation style, and main ingredients.",
        "zh": "这是一道辨识度高的德国菜，适合判断分量、厚重感、做法风格和主要食材。",
        "nl": "Een herkenbaar Duits gerecht voor zwaarte, rijkheid, bereidingsstijl en hoofdingrediënten."
      }
    },
    "composition": [
      [
        "sausage",
        65,
        "protein"
      ],
      [
        "mustard",
        10,
        "condiment",
        "seasoning"
      ],
      [
        "bread",
        15,
        "side"
      ],
      [
        "cabbage",
        10,
        "side"
      ]
    ],
    "distinctiveFlavorSources": [
      "mustard"
    ],
    "basicTaste": [
      "salty",
      "savory",
      "rich"
    ],
    "textureProfile": [
      "snappy sausage",
      "juicy center"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-gluten"
    ],
    "orderVerdict": {
      "en": "A simple savory choice if you want sausage; ask sides if you want a full meal.",
      "zh": "想吃香肠时简单直接；想吃饱要注意配菜。",
      "nl": "Een simpele hartige keuze als je worst wilt; vraag naar bijgerechten voor een volledige maaltijd."
    },
    "weightLevel": 3,
    "confidenceTag": "audited-core-batch-001",
    "metadataConfidence": 0.82
  }),
  starterDish({
    "id": "sauerbraten",
    "metadataCode": "106003",
    "cuisineId": "german",
    "names": {
      "en": "Sauerbraten",
      "zh": "德式酸味炖牛肉",
      "nl": "Sauerbraten",
      "local": "Sauerbraten"
    },
    "category": "meat",
    "cookingMethods": [
      "braised"
    ],
    "shortDescription": {
      "en": "German pot roast with tangy, savory sauce, usually beef and often served with potatoes or noodles.",
      "zh": "德式酸香炖肉，通常是牛肉，常配土豆或面条类主食。",
      "nl": "Duitse stoofbraad met zurige hartige saus, meestal rund, vaak met aardappel of noedels."
    },
    "cookingProfile": {
      "en": "The meat is marinated and braised, so it becomes tender with a tangy sauce.",
      "zh": "肉经过腌制和慢炖，口感软烂，酱汁带酸香。",
      "nl": "Het vlees wordt gemarineerd en gestoofd, mals met zurige saus."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic"
      ],
      "description": {
        "en": "A broadly recognized German dish; useful for judging weight, richness, preparation style, and main ingredients.",
        "zh": "这是一道辨识度高的德国菜，适合判断分量、厚重感、做法风格和主要食材。",
        "nl": "Een herkenbaar Duits gerecht voor zwaarte, rijkheid, bereidingsstijl en hoofdingrediënten."
      }
    },
    "composition": [
      [
        "beef",
        55,
        "protein"
      ],
      [
        "vinegar",
        15,
        "tang",
        "seasoning"
      ],
      [
        "broth",
        15,
        "sauce-base"
      ],
      [
        "onion",
        10,
        "aroma"
      ],
      [
        "potato",
        5,
        "side"
      ]
    ],
    "distinctiveFlavorSources": [
      "vinegar",
      "black-pepper"
    ],
    "basicTaste": [
      "savory",
      "tangy",
      "rich"
    ],
    "textureProfile": [
      "tender meat",
      "tangy sauce"
    ],
    "riskFlags": [],
    "orderVerdict": {
      "en": "Good if you want tender beef with a tangy sauce rather than a crisp fried dish.",
      "zh": "想吃软烂牛肉和酸香酱汁时适合，不是酥脆型。",
      "nl": "Goed als je mals rund met zurige saus wilt, niet iets krokants."
    },
    "weightLevel": 4,
    "confidenceTag": "audited-core-batch-001",
    "metadataConfidence": 0.82
  }),
  starterDish({
    "id": "spaetzle",
    "metadataCode": "106004",
    "cuisineId": "german",
    "names": {
      "en": "Spaetzle",
      "zh": "德式鸡蛋面疙瘩",
      "nl": "Spätzle",
      "local": "Spätzle"
    },
    "category": "noodle",
    "cookingMethods": [
      "boiled"
    ],
    "shortDescription": {
      "en": "Soft German egg noodles or dumpling-like pasta, often served with sauce, cheese, or meat dishes.",
      "zh": "柔软的德式鸡蛋面疙瘩，常配酱汁、奶酪或肉类主菜。",
      "nl": "Zachte Duitse eiernoedels of dumplingachtige pasta, vaak met saus, kaas of vlees."
    },
    "cookingProfile": {
      "en": "The noodles are boiled, so they are soft, mild, and good at carrying sauce.",
      "zh": "水煮后口感柔软温和，很适合吸附酱汁。",
      "nl": "De noedels worden gekookt, zacht, mild en goed met saus."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional"
      ],
      "description": {
        "en": "A broadly recognized German dish; useful for judging weight, richness, preparation style, and main ingredients.",
        "zh": "这是一道辨识度高的德国菜，适合判断分量、厚重感、做法风格和主要食材。",
        "nl": "Een herkenbaar Duits gerecht voor zwaarte, rijkheid, bereidingsstijl en hoofdingrediënten."
      }
    },
    "composition": [
      [
        "egg-noodles",
        65,
        "base"
      ],
      [
        "butter",
        15,
        "finish"
      ],
      [
        "cheese",
        10,
        "topping"
      ],
      [
        "onion",
        10,
        "aroma"
      ]
    ],
    "distinctiveFlavorSources": [
      "butter"
    ],
    "basicTaste": [
      "mild",
      "savory",
      "creamy"
    ],
    "textureProfile": [
      "soft noodles",
      "buttery coating"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-gluten",
      "contains-dairy"
    ],
    "orderVerdict": {
      "en": "A soft, comforting side or main if you like mild noodles and sauce.",
      "zh": "喜欢柔软主食和酱汁时很舒服，可作配菜或主食。",
      "nl": "Een zacht comfortabel bijgerecht of hoofdgerecht als je milde noedels en saus wilt."
    },
    "weightLevel": 3,
    "confidenceTag": "audited-core-batch-001",
    "metadataConfidence": 0.82
  }),
  starterDish({
    "id": "pretzel",
    "metadataCode": "106005",
    "cuisineId": "german",
    "names": {
      "en": "Pretzel",
      "zh": "德式碱水结",
      "nl": "Pretzel",
      "local": "Brezel"
    },
    "category": "bread",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Chewy baked bread with a browned alkaline crust and coarse salt.",
      "zh": "有嚼劲的烘烤面包，表面是深色碱水皮，常撒粗盐。",
      "nl": "Kauwig gebakken brood met bruine loogkorst en grof zout."
    },
    "cookingProfile": {
      "en": "The dough is baked into a chewy bread with a distinct browned crust.",
      "zh": "面团烘烤后有嚼劲，外皮颜色深、咸香明显。",
      "nl": "Het deeg wordt gebakken tot kauwig brood met duidelijke bruine korst."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "street-food"
      ],
      "description": {
        "en": "A broadly recognized German dish; useful for judging weight, richness, preparation style, and main ingredients.",
        "zh": "这是一道辨识度高的德国菜，适合判断分量、厚重感、做法风格和主要食材。",
        "nl": "Een herkenbaar Duits gerecht voor zwaarte, rijkheid, bereidingsstijl en hoofdingrediënten."
      }
    },
    "composition": [
      [
        "pretzel-dough",
        80,
        "base"
      ],
      [
        "sea-salt",
        10,
        "finish",
        "seasoning"
      ],
      [
        "mustard",
        10,
        "dip",
        "seasoning",
        "high",
        true
      ]
    ],
    "distinctiveFlavorSources": [
      "sea-salt",
      "mustard"
    ],
    "basicTaste": [
      "salty",
      "mild",
      "bready"
    ],
    "textureProfile": [
      "chewy bread",
      "salty crust"
    ],
    "riskFlags": [
      "contains-gluten"
    ],
    "orderVerdict": {
      "en": "A good snack or side, especially with beer or mustard; not a full meal alone.",
      "zh": "适合作为小吃或配菜，配啤酒/芥末很常见，单独不算完整正餐。",
      "nl": "Goed als snack of bijgerecht, vooral met bier of mosterd; alleen geen volledige maaltijd."
    },
    "weightLevel": 2,
    "confidenceTag": "audited-core-batch-001",
    "metadataConfidence": 0.82
  })
];
