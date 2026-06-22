import { starterDish } from "./starter-dish.js";

const europeDepthDishConfigs = [
  {
    "id": "tagliatelle-al-ragu",
    "metadataCode": "101031",
    "cuisineId": "italian",
    "names": {
      "en": "Tagliatelle al Ragu",
      "zh": "塔利亚泰莱肉酱面",
      "nl": "Tagliatelle al ragu",
      "local": "Tagliatelle al ragù"
    },
    "category": "pasta",
    "cookingMethods": [
      "sauce-tossed"
    ],
    "shortDescription": {
      "en": "Wide egg pasta ribbons tossed with a slow-cooked meat ragu, usually richer and more meat-forward than a simple tomato pasta.",
      "zh": "宽扁蛋面拌慢炖肉酱，通常比普通番茄意面更浓郁、更有肉香。",
      "nl": "Brede eierpasta met langzaam gestoofde vleessaus, rijker en vlezig dan gewone tomatenpasta."
    },
    "cookingProfile": {
      "en": "Served hot with the sauce clinging to broad ribbons, so it feels hearty but still pasta-focused.",
      "zh": "热食上桌，肉酱裹住宽面，口感扎实但仍以面条为主。",
      "nl": "Warm geserveerd met saus rond brede linten; stevig, maar nog duidelijk een pastagerecht."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "italian-depth",
        "classic-dish"
      ],
      "description": {
        "en": "A classic northern Italian pasta format for diners who want a reliable meat-sauce main.",
        "zh": "典型的意大利北部肉酱宽面，适合想点稳妥肉酱主食的人。",
        "nl": "Een klassiek Noord-Italiaans pastagerecht voor wie een betrouwbare vleessaus wil."
      }
    },
    "composition": [
      [
        "pasta",
        45,
        "wide egg pasta"
      ],
      [
        "meat-ragu",
        30,
        "slow-cooked sauce"
      ],
      [
        "tomato-sauce",
        10,
        "sauce base",
        "seasoning"
      ],
      [
        "parmesan",
        5,
        "finish",
        "seasoning"
      ],
      [
        "wine",
        5,
        "braise depth"
      ],
      [
        "olive-oil",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "slow-cooked meat ragu",
      "Parmigiano finish",
      "wine-braised depth"
    ],
    "basicTaste": [
      "savory",
      "rich",
      "umami"
    ],
    "textureProfile": [
      "wide tender ribbons",
      "meaty sauce",
      "cheese finish"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "contains-alcohol"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "classic-dish",
      "pasta",
      "meat-sauce"
    ],
    "orderVerdict": {
      "en": "A strong order if you want a comforting meat-sauce pasta rather than a light tomato dish.",
      "zh": "想吃扎实肉酱意面时很稳；如果想要清爽番茄面则可能偏厚重。",
      "nl": "Een sterke keuze voor stevige vleessauspasta, minder geschikt als je iets lichts zoekt."
    },
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.86,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "pappardelle-al-cinghiale",
    "metadataCode": "101032",
    "cuisineId": "italian",
    "names": {
      "en": "Pappardelle al Cinghiale",
      "zh": "野猪肉宽面",
      "nl": "Pappardelle al cinghiale",
      "local": "Pappardelle al cinghiale"
    },
    "category": "pasta",
    "cookingMethods": [
      "sauce-tossed",
      "braised"
    ],
    "shortDescription": {
      "en": "Very broad pasta ribbons with wild boar ragu, a rustic dish with a deeper, slightly gamey meat flavor.",
      "zh": "很宽的意面拌野猪肉酱，风味更深，带一点野味肉香。",
      "nl": "Zeer brede pasta met wildzwijnragù, rustiek en dieper van smaak dan gewone vleessaus."
    },
    "cookingProfile": {
      "en": "The ragu is usually braised and dense, so the plate feels rich, earthy, and filling.",
      "zh": "肉酱通常慢炖得浓厚，上桌感觉浓郁、厚实、分量感强。",
      "nl": "De ragù is meestal langzaam gestoofd en compact, waardoor het rijk en vullend eet."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "italian-depth",
        "regional-dish"
      ],
      "description": {
        "en": "A Tuscan-style regional pasta for diners comfortable with game meat.",
        "zh": "偏托斯卡纳风格的地区菜，适合能接受野味肉香的人。",
        "nl": "Een regionaal Toscaans pastagerecht voor wie wildsmaak prettig vindt."
      }
    },
    "composition": [
      [
        "pasta",
        45,
        "wide pasta"
      ],
      [
        "wild-boar",
        30,
        "ragu meat"
      ],
      [
        "tomato-sauce",
        10,
        "sauce base",
        "seasoning"
      ],
      [
        "red-wine",
        5,
        "braise depth",
        "seasoning"
      ],
      [
        "parmesan",
        5,
        "finish",
        "seasoning"
      ],
      [
        "rosemary",
        5,
        "herbal depth",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "wild boar ragu",
      "red wine",
      "rosemary"
    ],
    "basicTaste": [
      "savory",
      "rich",
      "earthy"
    ],
    "textureProfile": [
      "broad silky pasta",
      "dense ragu",
      "small meat shreds"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "contains-alcohol"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "regional-dish",
      "pasta",
      "game-meat"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free",
      "avoid-game-meat"
    ],
    "orderVerdict": {
      "en": "Order if you like hearty ragu and are open to a lightly gamey meat flavor.",
      "zh": "喜欢厚重肉酱、也能接受一点野味香时很值得点。",
      "nl": "Bestel dit als je stevige ragù wilt en een lichte wildsmaak geen probleem vindt."
    },
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.86,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "linguine-allo-scoglio",
    "metadataCode": "101033",
    "cuisineId": "italian",
    "names": {
      "en": "Linguine allo Scoglio",
      "zh": "意式海鲜扁面",
      "nl": "Linguine allo scoglio",
      "local": "Linguine allo scoglio"
    },
    "category": "seafood-pasta",
    "cookingMethods": [
      "sauce-tossed"
    ],
    "shortDescription": {
      "en": "Linguine with mixed shellfish and seafood, usually garlicky, briny, and lighter than a creamy seafood pasta.",
      "zh": "扁面配多种贝类和海鲜，通常有蒜香和海味，比奶油海鲜面清爽。",
      "nl": "Linguine met schaal- en zeevruchten, meestal knoflookachtig, zilt en lichter dan roompasta."
    },
    "cookingProfile": {
      "en": "Served hot with shells often still on the plate; expect hands-on seafood rather than a tidy pasta bowl.",
      "zh": "热食上桌，常带贝壳和虾壳，吃起来比普通意面更需要处理海鲜。",
      "nl": "Warm geserveerd, vaak met schelpen; meer zeevruchtenwerk dan een nette pastakom."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "italian-depth",
        "classic-dish"
      ],
      "description": {
        "en": "A coastal Italian restaurant classic for seafood-focused pasta orders.",
        "zh": "意大利沿海餐厅常见海鲜意面，适合想吃海鲜主食的人。",
        "nl": "Een klassieke Italiaanse kustpasta voor wie zeevruchten centraal wil."
      }
    },
    "composition": [
      [
        "pasta",
        40,
        "linguine base"
      ],
      [
        "seafood-mix",
        25,
        "mixed seafood"
      ],
      [
        "clams",
        10,
        "shellfish"
      ],
      [
        "mussels",
        10,
        "shellfish"
      ],
      [
        "tomato-sauce",
        5,
        "light sauce",
        "seasoning"
      ],
      [
        "olive-oil",
        5,
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
      "shellfish brine",
      "garlic olive oil",
      "parsley and lemon"
    ],
    "basicTaste": [
      "savory",
      "briny",
      "garlicky"
    ],
    "textureProfile": [
      "slippery pasta",
      "tender seafood",
      "shell-on bites"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-shellfish",
      "contains-fish"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "seafood",
      "pasta",
      "coastal"
    ],
    "orderVerdict": {
      "en": "A good pick if you want seafood flavor first and do not mind shells on the plate.",
      "zh": "想吃海鲜味明显的意面可以点；不喜欢处理贝壳或虾壳的人要谨慎。",
      "nl": "Een goede keuze als zeevruchtensmaak voorop staat en schelpen geen bezwaar zijn."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.86,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "spaghetti-alla-puttanesca",
    "metadataCode": "101034",
    "cuisineId": "italian",
    "names": {
      "en": "Spaghetti alla Puttanesca",
      "zh": "普塔内斯卡意面",
      "nl": "Spaghetti alla puttanesca",
      "local": "Spaghetti alla puttanesca"
    },
    "category": "pasta",
    "cookingMethods": [
      "sauce-tossed"
    ],
    "shortDescription": {
      "en": "Spaghetti in a bold tomato sauce with olives, capers, anchovies, garlic, and chili.",
      "zh": "番茄酱意面加入橄榄、酸豆、鳀鱼、蒜和辣椒，味道咸鲜有冲击力。",
      "nl": "Spaghetti met krachtige tomatensaus, olijven, kappertjes, ansjovis, knoflook en chili."
    },
    "cookingProfile": {
      "en": "The sauce is punchy and briny, so it tastes more intense than a basic tomato pasta.",
      "zh": "酱汁咸鲜、酸香、存在感强，比普通番茄意面更重口。",
      "nl": "De saus is zilt en uitgesproken, krachtiger dan gewone tomatenpasta."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "italian-depth",
        "classic-dish"
      ],
      "description": {
        "en": "A classic southern Italian pasta for diners who like briny, salty, bold sauces.",
        "zh": "经典南意风味意面，适合喜欢咸鲜、酸香、重口酱汁的人。",
        "nl": "Een klassieke Zuid-Italiaanse pasta voor liefhebbers van zilte, uitgesproken sauzen."
      }
    },
    "composition": [
      [
        "spaghetti",
        50,
        "pasta base"
      ],
      [
        "tomato-sauce",
        25,
        "sauce",
        "seasoning"
      ],
      [
        "olives",
        10,
        "briny body"
      ],
      [
        "capers",
        5,
        "briny bite"
      ],
      [
        "anchovies",
        5,
        "umami"
      ],
      [
        "garlic",
        3,
        "aroma",
        "seasoning"
      ],
      [
        "chili",
        2,
        "heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "olives and capers",
      "anchovy umami",
      "garlic chili tomato sauce"
    ],
    "basicTaste": [
      "savory",
      "salty",
      "tangy",
      "mildly spicy"
    ],
    "textureProfile": [
      "long pasta",
      "glossy sauce",
      "briny small bites"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-fish",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "bold-flavor",
      "pasta"
    ],
    "orderVerdict": {
      "en": "Order if you want a salty, briny tomato pasta with a little heat.",
      "zh": "想吃咸鲜、酸香、微辣的番茄意面时可以点；怕鳀鱼味的人谨慎。",
      "nl": "Bestel dit voor ziltige tomatenpasta met wat pit; minder geschikt als je ansjovis vermijdt."
    },
    "spiceLevel": 1,
    "weightLevel": 3,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.86,
    "restaurantVariationLevel": "low"
  },
  {
    "id": "penne-arrabbiata",
    "metadataCode": "101035",
    "cuisineId": "italian",
    "names": {
      "en": "Penne all'Arrabbiata",
      "zh": "辣番茄笔管面",
      "nl": "Penne all'arrabbiata",
      "local": "Penne all'arrabbiata"
    },
    "category": "pasta",
    "cookingMethods": [
      "sauce-tossed"
    ],
    "shortDescription": {
      "en": "Penne in a spicy tomato-garlic sauce, a simple pasta where chili is the point.",
      "zh": "笔管面拌辣番茄蒜香酱，重点就是番茄酸甜和辣椒热度。",
      "nl": "Penne met pittige tomaten-knoflooksaus; een simpele pasta waarin chili centraal staat."
    },
    "cookingProfile": {
      "en": "Usually saucy and hot, with short pasta tubes catching the spicy tomato sauce.",
      "zh": "通常热食且酱汁充足，短管面会挂住辣番茄酱。",
      "nl": "Meestal warm en sauzig, met korte buisjes die de pittige saus vasthouden."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "italian-depth",
        "classic-dish"
      ],
      "description": {
        "en": "A classic Roman-style spicy tomato pasta that is easy to recognize on menus.",
        "zh": "经典罗马风格辣番茄意面，菜单上辨识度很高。",
        "nl": "Een klassieke Romeinse pittige tomatenpasta die op menu’s herkenbaar is."
      }
    },
    "composition": [
      [
        "pasta",
        55,
        "penne base"
      ],
      [
        "tomato-sauce",
        30,
        "spicy sauce",
        "seasoning"
      ],
      [
        "garlic",
        5,
        "aroma",
        "seasoning"
      ],
      [
        "chili",
        5,
        "heat",
        "seasoning"
      ],
      [
        "olive-oil",
        3,
        "finish",
        "seasoning"
      ],
      [
        "pecorino",
        2,
        "optional cheese",
        "seasoning",
        "high",
        true
      ]
    ],
    "distinctiveFlavorSources": [
      "chili heat",
      "garlic tomato sauce",
      "olive oil"
    ],
    "basicTaste": [
      "savory",
      "tomato-tangy",
      "spicy"
    ],
    "textureProfile": [
      "short firm pasta",
      "coating sauce",
      "light chili warmth"
    ],
    "riskFlags": [
      "contains-gluten",
      "can-be-spicy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "spicy",
      "pasta",
      "vegetarian-option"
    ],
    "avoidIfTags": [
      "gluten-free",
      "avoid-spicy"
    ],
    "orderVerdict": {
      "en": "A safe pick for spicy tomato pasta; ask about cheese if you need it vegan.",
      "zh": "想吃辣番茄意面时很稳；需要纯素时先确认是否撒奶酪。",
      "nl": "Een veilige keuze voor pittige tomatenpasta; vraag naar kaas als je vegan eet."
    },
    "spiceLevel": 2,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.86,
    "restaurantVariationLevel": "low"
  },
  {
    "id": "pasta-alla-norma",
    "metadataCode": "101036",
    "cuisineId": "italian",
    "names": {
      "en": "Pasta alla Norma",
      "zh": "诺尔玛茄子番茄意面",
      "nl": "Pasta alla Norma",
      "local": "Pasta alla Norma"
    },
    "category": "pasta",
    "cookingMethods": [
      "sauce-tossed"
    ],
    "shortDescription": {
      "en": "Sicilian pasta with tomato, fried or roasted eggplant, basil, and salty ricotta-style cheese.",
      "zh": "西西里茄子番茄意面，常配罗勒和咸香乳清奶酪碎。",
      "nl": "Siciliaanse pasta met tomaat, aubergine, basilicum en zoute ricotta-achtige kaas."
    },
    "cookingProfile": {
      "en": "The eggplant makes the dish soft and savory, with cheese adding salty richness.",
      "zh": "茄子让口感更软润，奶酪带来咸香和厚度。",
      "nl": "Aubergine maakt het zacht en hartig; kaas geeft zoutigheid en rijkdom."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "italian-depth",
        "regional-dish",
        "vegetarian-option"
      ],
      "description": {
        "en": "A Sicilian classic that is especially useful for vegetarian pasta ordering.",
        "zh": "西西里经典菜，也是素食者点意面时很实用的选择。",
        "nl": "Een Siciliaanse klassieker en nuttige vegetarische pastakeuze."
      }
    },
    "composition": [
      [
        "pasta",
        45,
        "pasta base"
      ],
      [
        "eggplant",
        25,
        "soft vegetable"
      ],
      [
        "tomato-sauce",
        20,
        "sauce",
        "seasoning"
      ],
      [
        "ricotta",
        5,
        "salty cheese"
      ],
      [
        "basil",
        3,
        "aroma",
        "seasoning"
      ],
      [
        "olive-oil",
        2,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "eggplant",
      "tomato sauce",
      "ricotta salata-style cheese"
    ],
    "basicTaste": [
      "savory",
      "tomato-tangy",
      "lightly creamy"
    ],
    "textureProfile": [
      "soft eggplant",
      "firm pasta",
      "crumbly cheese"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "vegetarian-option",
      "regional-dish",
      "pasta"
    ],
    "orderVerdict": {
      "en": "A good vegetarian pasta if you like soft eggplant and salty cheese.",
      "zh": "喜欢软糯茄子和咸香奶酪的人会很适合；不爱茄子则不建议。",
      "nl": "Een goede vegetarische pasta als je zachte aubergine en zoute kaas lekker vindt."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.86,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "ribollita",
    "metadataCode": "101037",
    "cuisineId": "italian",
    "names": {
      "en": "Ribollita",
      "zh": "托斯卡纳蔬菜面包汤",
      "nl": "Ribollita",
      "local": "Ribollita"
    },
    "category": "soup",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "A thick Tuscan bread, bean, and vegetable soup; more like a hearty stew than a light broth.",
      "zh": "托斯卡纳面包、豆类和蔬菜浓汤，比清汤更像一碗厚实炖菜。",
      "nl": "Dikke Toscaanse soep met brood, bonen en groenten; eerder stoofachtig dan licht."
    },
    "cookingProfile": {
      "en": "Served hot and dense, with bread softening into the soup and beans giving weight.",
      "zh": "热食上桌，面包吸汤变软，豆类让整体更有饱腹感。",
      "nl": "Warm en dik geserveerd, met brood dat zacht wordt en bonen die vullen."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "italian-depth",
        "regional-dish"
      ],
      "description": {
        "en": "A Tuscan comfort dish for diners who want vegetables but still want a filling bowl.",
        "zh": "托斯卡纳家常舒适菜，适合想吃蔬菜但也要有饱腹感的人。",
        "nl": "Toscaanse comfortfood voor wie groente wil maar ook goed gevuld wil raken."
      }
    },
    "composition": [
      [
        "beans",
        25,
        "bean body"
      ],
      [
        "bread",
        20,
        "thickener"
      ],
      [
        "vegetables",
        20,
        "vegetable base"
      ],
      [
        "kale",
        15,
        "leafy greens"
      ],
      [
        "tomato-sauce",
        10,
        "broth depth",
        "seasoning"
      ],
      [
        "olive-oil",
        5,
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
      "white beans",
      "Tuscan bread",
      "olive oil and greens"
    ],
    "basicTaste": [
      "savory",
      "earthy",
      "mild"
    ],
    "textureProfile": [
      "thick soup",
      "soft bread",
      "creamy beans"
    ],
    "riskFlags": [
      "contains-gluten"
    ],
    "dietaryFlags": [
      "vegan"
    ],
    "goodForTags": [
      "vegetable-forward",
      "comfort-food",
      "vegan-option"
    ],
    "orderVerdict": {
      "en": "Order when you want a filling vegetable-heavy bowl, not a light starter soup.",
      "zh": "想要一碗有饱腹感的蔬菜豆汤时适合；不是清淡开胃汤。",
      "nl": "Bestel dit voor een vullende groenterijke kom, niet als lichte voorgerechtsoep."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.85,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "pappa-al-pomodoro",
    "metadataCode": "101038",
    "cuisineId": "italian",
    "names": {
      "en": "Pappa al Pomodoro",
      "zh": "番茄面包浓汤",
      "nl": "Pappa al pomodoro",
      "local": "Pappa al pomodoro"
    },
    "category": "soup",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "A thick Tuscan tomato and bread soup, soft, rustic, and focused on tomato, basil, garlic, and olive oil.",
      "zh": "托斯卡纳番茄面包浓汤，软糯、朴实，重点是番茄、罗勒、蒜和橄榄油。",
      "nl": "Dikke Toscaanse tomaat-broodsoep, zacht en rustiek met basilicum, knoflook en olijfolie."
    },
    "cookingProfile": {
      "en": "The bread breaks down into the tomato, creating a spoonable, almost porridge-like texture.",
      "zh": "面包融进番茄汤里，形成接近粥状的软稠口感。",
      "nl": "Brood valt uiteen in tomaat, waardoor een lepelbare, bijna papachtige structuur ontstaat."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "italian-depth",
        "regional-dish"
      ],
      "description": {
        "en": "A Tuscan rustic dish for diners who like tomato-forward comfort food.",
        "zh": "托斯卡纳朴实菜，适合喜欢番茄味舒适食物的人。",
        "nl": "Een rustiek Toscaans gerecht voor liefhebbers van tomatenrijke comfortfood."
      }
    },
    "composition": [
      [
        "tomato",
        35,
        "tomato body"
      ],
      [
        "bread",
        30,
        "thickener"
      ],
      [
        "tomato-sauce",
        15,
        "sauce base",
        "seasoning"
      ],
      [
        "olive-oil",
        10,
        "finish",
        "seasoning"
      ],
      [
        "basil",
        5,
        "fresh aroma",
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
      "ripe tomato",
      "bread-thickened soup",
      "basil olive oil"
    ],
    "basicTaste": [
      "tomato-sweet",
      "savory",
      "mild"
    ],
    "textureProfile": [
      "thick spoonable soup",
      "soft bread",
      "olive-oil gloss"
    ],
    "riskFlags": [
      "contains-gluten"
    ],
    "dietaryFlags": [
      "vegan"
    ],
    "goodForTags": [
      "comfort-food",
      "vegan-option",
      "tomato-forward"
    ],
    "orderVerdict": {
      "en": "A cozy choice if you like thick tomato soup; skip if you want a clear or light soup.",
      "zh": "喜欢浓稠番茄汤时很合适；想喝清汤或轻汤则不适合。",
      "nl": "Gezellig als je dikke tomatensoep wilt; minder geschikt voor een heldere lichte soep."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.85,
    "restaurantVariationLevel": "low"
  },
  {
    "id": "panzanella",
    "metadataCode": "101039",
    "cuisineId": "italian",
    "names": {
      "en": "Panzanella",
      "zh": "托斯卡纳面包沙拉",
      "nl": "Panzanella",
      "local": "Panzanella"
    },
    "category": "salad",
    "cookingMethods": [
      "assembled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "A Tuscan bread salad with tomato, cucumber, onion, basil, olive oil, and vinegar.",
      "zh": "托斯卡纳面包沙拉，配番茄、黄瓜、洋葱、罗勒、橄榄油和醋。",
      "nl": "Toscaanse broodsalade met tomaat, komkommer, ui, basilicum, olijfolie en azijn."
    },
    "cookingProfile": {
      "en": "Usually served cool or room temperature, with bread soaking up tomato juices and dressing.",
      "zh": "通常冷食或常温，面包会吸收番茄汁和油醋汁。",
      "nl": "Meestal koel of op kamertemperatuur, met brood dat tomatensap en dressing opneemt."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "italian-depth",
        "regional-dish"
      ],
      "description": {
        "en": "A Tuscan summer salad that is more filling than a leafy side salad.",
        "zh": "托斯卡纳夏季沙拉，比普通叶菜沙拉更有饱腹感。",
        "nl": "Een Toscaanse zomersalade die vullender is dan een groene salade."
      }
    },
    "composition": [
      [
        "bread",
        35,
        "bread base"
      ],
      [
        "tomato",
        25,
        "juicy vegetable"
      ],
      [
        "cucumber",
        15,
        "fresh crunch"
      ],
      [
        "onion",
        10,
        "sharpness"
      ],
      [
        "olive-oil",
        10,
        "dressing",
        "seasoning"
      ],
      [
        "vinegar",
        5,
        "tang",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "tomato juice-soaked bread",
      "olive oil vinegar dressing",
      "fresh basil"
    ],
    "basicTaste": [
      "fresh",
      "tangy",
      "savory"
    ],
    "textureProfile": [
      "soaked bread",
      "juicy tomato",
      "crisp cucumber"
    ],
    "riskFlags": [
      "contains-gluten"
    ],
    "dietaryFlags": [
      "vegan"
    ],
    "goodForTags": [
      "salad",
      "vegan-option",
      "summer-dish"
    ],
    "orderVerdict": {
      "en": "Good when you want a refreshing but filling salad; not ideal if you dislike soaked bread.",
      "zh": "想要清爽但有饱腹感的沙拉时适合；不喜欢湿润面包的人慎点。",
      "nl": "Goed voor een frisse maar vullende salade; minder fijn als je geweekt brood niet lekker vindt."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "insalata-di-mare",
    "metadataCode": "101040",
    "cuisineId": "italian",
    "names": {
      "en": "Insalata di Mare",
      "zh": "意式海鲜沙拉",
      "nl": "Insalata di mare",
      "local": "Insalata di mare"
    },
    "category": "seafood-salad",
    "cookingMethods": [
      "assembled",
      "chilled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "A chilled Italian seafood salad with octopus, squid, shrimp, mussels, lemon, parsley, and olive oil.",
      "zh": "冷食意式海鲜沙拉，常见章鱼、鱿鱼、虾、贻贝、柠檬、欧芹和橄榄油。",
      "nl": "Koude Italiaanse zeevruchtensalade met octopus, inktvis, garnalen, mosselen, citroen en olijfolie."
    },
    "cookingProfile": {
      "en": "Seafood is usually cooked first and served cool, so the texture is firm, clean, and lightly dressed.",
      "zh": "海鲜通常先熟制再冷食，口感紧实清爽，调味较轻。",
      "nl": "Zeevruchten worden eerst gegaard en koel geserveerd, stevig en licht aangemaakt."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "italian-depth",
        "classic-dish"
      ],
      "description": {
        "en": "A coastal Italian antipasto for diners who want seafood without pasta or heavy sauce.",
        "zh": "意大利沿海常见前菜，适合想吃海鲜但不想要意面或重酱的人。",
        "nl": "Een Italiaanse kust-antipasto voor wie zeevruchten zonder pasta of zware saus wil."
      }
    },
    "composition": [
      [
        "seafood-mix",
        35,
        "mixed seafood"
      ],
      [
        "octopus",
        20,
        "firm seafood"
      ],
      [
        "squid",
        15,
        "springy seafood"
      ],
      [
        "shrimp",
        10,
        "sweet seafood"
      ],
      [
        "mussels",
        10,
        "shellfish"
      ],
      [
        "lemon",
        5,
        "citrus"
      ],
      [
        "olive-oil",
        5,
        "dressing",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "lemon olive oil",
      "parsley",
      "mixed seafood brine"
    ],
    "basicTaste": [
      "briny",
      "fresh",
      "citrusy"
    ],
    "textureProfile": [
      "firm seafood",
      "springy squid",
      "light dressing"
    ],
    "riskFlags": [
      "contains-shellfish",
      "contains-fish"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "seafood",
      "starter",
      "low-carb"
    ],
    "orderVerdict": {
      "en": "A good starter if you want clean seafood flavor; skip if cold seafood or chewy squid bothers you.",
      "zh": "想吃清爽海鲜前菜时适合；不爱冷海鲜或弹韧鱿鱼的人慎点。",
      "nl": "Goed als frisse zeevruchtenstarter; minder geschikt bij bezwaar tegen koude of taaie zeevruchten."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.85,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "fritto-misto",
    "metadataCode": "101041",
    "cuisineId": "italian",
    "names": {
      "en": "Fritto Misto",
      "zh": "意式炸海鲜拼盘",
      "nl": "Fritto misto",
      "local": "Fritto misto di mare"
    },
    "category": "fried-seafood",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "A mixed fried seafood plate, often with squid, shrimp, small fish, and lemon.",
      "zh": "混合炸海鲜拼盘，常见鱿鱼、虾、小鱼和柠檬。",
      "nl": "Gemengde gefrituurde zeevruchten, vaak met inktvis, garnalen, kleine vis en citroen."
    },
    "cookingProfile": {
      "en": "Served hot and crisp; the best versions are light, but it is still a fried sharing dish.",
      "zh": "热食上桌，外层酥脆；做得好会轻盈，但本质仍是油炸分享盘。",
      "nl": "Warm en krokant geserveerd; goede versies zijn licht, maar het blijft een gefrituurd deelgerecht."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "italian-depth",
        "classic-dish"
      ],
      "description": {
        "en": "A common Italian seafood starter or sharing plate on coastal menus.",
        "zh": "意大利沿海菜单常见海鲜前菜或分享盘。",
        "nl": "Een gangbare Italiaanse zeevruchtenstarter of deelgerecht aan de kust."
      }
    },
    "composition": [
      [
        "seafood-mix",
        35,
        "mixed seafood"
      ],
      [
        "squid",
        20,
        "rings"
      ],
      [
        "shrimp",
        15,
        "shellfish"
      ],
      [
        "fish-fillet",
        10,
        "small fish pieces"
      ],
      [
        "wheat-flour",
        10,
        "light coating"
      ],
      [
        "neutral-frying-oil",
        5,
        "fried texture"
      ],
      [
        "lemon",
        5,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "fresh fried seafood",
      "lemon",
      "light flour coating"
    ],
    "basicTaste": [
      "savory",
      "briny",
      "fried"
    ],
    "textureProfile": [
      "crisp coating",
      "springy squid",
      "juicy seafood"
    ],
    "riskFlags": [
      "contains-shellfish",
      "contains-fish",
      "contains-gluten"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "sharing",
      "seafood",
      "fried-snack"
    ],
    "orderVerdict": {
      "en": "Best as a sharing starter if you want crisp seafood and do not mind fried food.",
      "zh": "适合想分享酥炸海鲜时点；介意油炸或海鲜过敏则避开。",
      "nl": "Het best als gedeelde starter voor krokante zeevruchten; niet ideaal als je gefrituurd vermijdt."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.85,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "baccala-mantecato",
    "metadataCode": "101042",
    "cuisineId": "italian",
    "names": {
      "en": "Baccalà Mantecato",
      "zh": "威尼斯奶油鳕鱼泥",
      "nl": "Baccalà mantecato",
      "local": "Baccalà mantecato"
    },
    "category": "seafood-starter",
    "cookingMethods": [
      "stirred",
      "assembled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "Venetian whipped salt cod spread, usually creamy with olive oil and served on toast, crostini, or polenta.",
      "zh": "威尼斯风味盐鳕鱼泥，通常用橄榄油打得绵滑，配烤面包或玉米糕。",
      "nl": "Venetiaanse opgeklopte stokviscrème, romig met olijfolie en vaak op toast of polenta."
    },
    "cookingProfile": {
      "en": "Served as a cool or room-temperature spread, so expect creamy fish flavor rather than a hot fillet.",
      "zh": "多作为冷食或常温抹酱上桌，重点是绵滑鱼香，不是热鱼排。",
      "nl": "Koel of op kamertemperatuur als spread; romige vissmaak, geen warme filet."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "italian-depth",
        "regional-dish"
      ],
      "description": {
        "en": "A Venetian cicchetti-style dish for diners who like salty fish spreads.",
        "zh": "威尼斯小食风格菜，适合喜欢咸鲜鱼泥和面包搭配的人。",
        "nl": "Een Venetiaans cicchetti-gerecht voor wie zoute visspreads lekker vindt."
      }
    },
    "composition": [
      [
        "salt-cod",
        45,
        "whipped fish"
      ],
      [
        "olive-oil",
        25,
        "creaminess",
        "seasoning"
      ],
      [
        "bread",
        15,
        "serving base"
      ],
      [
        "lemon",
        5,
        "brightness"
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
      "salt cod",
      "olive oil emulsion",
      "lemon parsley"
    ],
    "basicTaste": [
      "salty",
      "savory",
      "creamy"
    ],
    "textureProfile": [
      "smooth spread",
      "salty fish flakes",
      "crisp toast contrast"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-gluten"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "starter",
      "regional-dish",
      "seafood"
    ],
    "orderVerdict": {
      "en": "Order as a small seafood starter if salty creamy fish spread sounds appealing.",
      "zh": "想吃小份咸鲜海鲜前菜时可以点；不喜欢鱼泥或咸味重的人慎点。",
      "nl": "Bestel als kleine zeevruchtenstarter als romige zoute visspread aanspreekt."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 3,
    "metadataConfidence": 0.85,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "porchetta",
    "metadataCode": "101043",
    "cuisineId": "italian",
    "names": {
      "en": "Porchetta",
      "zh": "意式香草烤猪肉卷",
      "nl": "Porchetta",
      "local": "Porchetta"
    },
    "category": "roast-meat",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Herb-roasted rolled pork with fatty layers and crisp skin, often sliced and served warm or in a sandwich.",
      "zh": "香草烤猪肉卷，肥瘦层次明显，常切片热食或夹面包。",
      "nl": "Italiaans kruidengebraad van opgerold varkensvlees met vetlaag en krokante huid."
    },
    "cookingProfile": {
      "en": "Expect juicy fatty pork, crisp edges, and rosemary-garlic aroma rather than a lean meat plate.",
      "zh": "会有多汁肥润的猪肉、脆边和迷迭香蒜香，不是清瘦肉排。",
      "nl": "Verwacht sappig vet varkensvlees, krokante randen en rozemarijn-knoflookaroma."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "italian-depth",
        "street-food",
        "regional-dish"
      ],
      "description": {
        "en": "A central Italian roast also common as market or sandwich food.",
        "zh": "意大利中部代表性烤肉，也常见于市集和三明治。",
        "nl": "Een Midden-Italiaans gebraad dat ook vaak als markt- of broodjesgerecht voorkomt."
      }
    },
    "composition": [
      [
        "pork-belly",
        55,
        "rolled pork"
      ],
      [
        "pork",
        20,
        "lean meat"
      ],
      [
        "rosemary",
        10,
        "herb aroma",
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
        "roast finish",
        "seasoning"
      ],
      [
        "bread",
        5,
        "optional serving base",
        "ingredient",
        "medium",
        true
      ]
    ],
    "distinctiveFlavorSources": [
      "rosemary and garlic",
      "crisp pork skin",
      "fatty roast pork"
    ],
    "basicTaste": [
      "savory",
      "herbal",
      "rich"
    ],
    "textureProfile": [
      "juicy pork",
      "crisp skin",
      "fatty layers"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "street-food",
      "sharing",
      "meat-heavy"
    ],
    "avoidIfTags": [
      "no-pork",
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "A great order if you want juicy herb-roasted pork; skip if you want lean or pork-free food.",
      "zh": "想吃香草烤猪肉时很值得点；不吃猪肉或想要清淡瘦肉则避开。",
      "nl": "Sterk als je sappig kruidengebraad wilt; sla over bij varkensvrij of mager eten."
    },
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.86,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "bistecca-fiorentina",
    "metadataCode": "101044",
    "cuisineId": "italian",
    "names": {
      "en": "Bistecca alla Fiorentina",
      "zh": "佛罗伦萨T骨牛排",
      "nl": "Bistecca alla Fiorentina",
      "local": "Bistecca alla Fiorentina"
    },
    "category": "steak",
    "cookingMethods": [
      "grilled"
    ],
    "rawnessLevel": "often-rare-or-medium-rare",
    "shortDescription": {
      "en": "A thick Tuscan T-bone or porterhouse steak, grilled hard outside and commonly served rare inside.",
      "zh": "托斯卡纳厚切T骨或 porterhouse 牛排，外层炭烤，内部常偏生。",
      "nl": "Dikke Toscaanse T-bone of porterhouse, stevig gegrild en vaak rood van binnen."
    },
    "cookingProfile": {
      "en": "Usually simple and meat-focused, with salt, olive oil, lemon, and a rare center.",
      "zh": "通常调味简单，突出牛肉本身，常配海盐、橄榄油和柠檬。",
      "nl": "Meestal eenvoudig en vleesgericht, met zout, olijfolie, citroen en een rode kern."
    },
    "cuisineRole": {
      "level": "signature",
      "tags": [
        "italian-depth",
        "signature-dish"
      ],
      "description": {
        "en": "A signature Tuscan steak dish, often priced and portioned for sharing.",
        "zh": "托斯卡纳标志性牛排，常常分量大、价格高，适合分享。",
        "nl": "Een iconische Toscaanse steak, vaak groot en geschikt om te delen."
      }
    },
    "composition": [
      [
        "beef",
        80,
        "thick steak"
      ],
      [
        "olive-oil",
        5,
        "finish",
        "seasoning"
      ],
      [
        "sea-salt",
        5,
        "seasoning",
        "seasoning"
      ],
      [
        "rosemary",
        5,
        "herb aroma",
        "seasoning"
      ],
      [
        "lemon",
        5,
        "brightness"
      ]
    ],
    "distinctiveFlavorSources": [
      "charred beef",
      "coarse salt",
      "rare steak juices"
    ],
    "basicTaste": [
      "savory",
      "meaty",
      "smoky"
    ],
    "textureProfile": [
      "charred crust",
      "rare center",
      "thick chew"
    ],
    "riskFlags": [
      "contains-raw-meat"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "signature-dish",
      "sharing",
      "steak"
    ],
    "avoidIfTags": [
      "avoid-rare-meat"
    ],
    "orderVerdict": {
      "en": "Order if you want a serious steak and are comfortable with rare meat; confirm doneness before ordering.",
      "zh": "想吃厚切牛排且能接受偏生熟度时适合；下单前最好确认熟度。",
      "nl": "Bestel voor een serieuze steak als rood vlees oké is; bevestig de garing vooraf."
    },
    "spiceLevel": 0,
    "weightLevel": 5,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.88,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "cotoletta-alla-milanese",
    "metadataCode": "101045",
    "cuisineId": "italian",
    "names": {
      "en": "Cotoletta alla Milanese",
      "zh": "米兰炸小牛排",
      "nl": "Cotoletta alla Milanese",
      "local": "Cotoletta alla Milanese"
    },
    "category": "fried-meat",
    "cookingMethods": [
      "fried"
    ],
    "shortDescription": {
      "en": "A breaded veal cutlet fried until golden, similar in idea to schnitzel but Milanese in style.",
      "zh": "裹面包糠煎炸的小牛排，金黄酥脆，类似炸肉排但属于米兰风格。",
      "nl": "Gepaneerde kalfskotelet goudbruin gebakken, verwant aan schnitzel maar Milanees."
    },
    "cookingProfile": {
      "en": "Served hot with a crisp crust and tender veal; lemon is usually the main brightness.",
      "zh": "热食上桌，外壳酥脆、肉质较嫩，柠檬常用来解腻。",
      "nl": "Warm geserveerd met krokante korst en mals kalfsvlees; citroen maakt het frisser."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "italian-depth",
        "classic-dish"
      ],
      "description": {
        "en": "A classic Milanese meat dish for diners who want crisp, mild, familiar comfort.",
        "zh": "经典米兰肉类菜，适合想吃酥脆、温和、熟悉口感的人。",
        "nl": "Een Milanese klassieker voor wie krokant, mild comfortfood wil."
      }
    },
    "composition": [
      [
        "veal-cutlet",
        55,
        "meat cutlet"
      ],
      [
        "panko-breadcrumbs",
        20,
        "crumb coating"
      ],
      [
        "egg",
        10,
        "coating binder"
      ],
      [
        "butter",
        5,
        "frying richness"
      ],
      [
        "lemon",
        5,
        "finish"
      ],
      [
        "wheat-flour",
        5,
        "coating"
      ]
    ],
    "distinctiveFlavorSources": [
      "golden breadcrumb crust",
      "veal",
      "lemon"
    ],
    "basicTaste": [
      "savory",
      "fried",
      "mild"
    ],
    "textureProfile": [
      "crisp crust",
      "tender meat",
      "light lemon finish"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "safe-choice",
      "fried-food",
      "meat-main"
    ],
    "orderVerdict": {
      "en": "A safe, familiar meat main if you like crisp breaded cutlets.",
      "zh": "喜欢酥脆炸肉排时很稳；介意油炸、麸质或鸡蛋则不适合。",
      "nl": "Een vertrouwde vleeskeuze als je krokante gepaneerde kotelet lekker vindt."
    },
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.86,
    "restaurantVariationLevel": "low"
  },
  {
    "id": "brasato-al-barolo",
    "metadataCode": "101046",
    "cuisineId": "italian",
    "names": {
      "en": "Brasato al Barolo",
      "zh": "巴罗洛红酒炖牛肉",
      "nl": "Brasato al Barolo",
      "local": "Brasato al Barolo"
    },
    "category": "braised-meat",
    "cookingMethods": [
      "braised"
    ],
    "shortDescription": {
      "en": "Beef braised in Barolo-style red wine until tender, usually served with a dark glossy sauce.",
      "zh": "用巴罗洛风格红酒慢炖牛肉，肉质软烂，酱汁深色浓郁。",
      "nl": "Rundvlees gestoofd in Barolo-achtige rode wijn tot mals, met donkere glanzende saus."
    },
    "cookingProfile": {
      "en": "It arrives as a rich slow-braised meat plate, often better for a hearty dinner than a quick light meal.",
      "zh": "上桌是浓郁慢炖肉类主菜，更适合正式晚餐，不算轻食。",
      "nl": "Een rijk langzaam gestoofd vleesgerecht, eerder voor een stevig diner dan een lichte maaltijd."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "italian-depth",
        "regional-dish"
      ],
      "description": {
        "en": "A Piedmontese braised beef dish for diners who want wine-rich depth.",
        "zh": "皮埃蒙特红酒炖牛肉，适合想要浓厚酒香炖肉的人。",
        "nl": "Een Piëmontees stoofgerecht voor wie rijke wijnsaus zoekt."
      }
    },
    "composition": [
      [
        "beef",
        60,
        "braised meat"
      ],
      [
        "red-wine",
        15,
        "braise sauce",
        "seasoning"
      ],
      [
        "carrot",
        10,
        "aromatic vegetable"
      ],
      [
        "onion",
        5,
        "aromatic base"
      ],
      [
        "olive-oil",
        5,
        "finish",
        "seasoning"
      ],
      [
        "rosemary",
        5,
        "herb depth",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "Barolo-style red wine",
      "slow-braised beef",
      "herbs and vegetables"
    ],
    "basicTaste": [
      "savory",
      "wine-rich",
      "deep"
    ],
    "textureProfile": [
      "tender beef",
      "glossy sauce",
      "soft vegetables"
    ],
    "riskFlags": [
      "contains-alcohol"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food",
      "meat-main",
      "regional-dish"
    ],
    "orderVerdict": {
      "en": "Order if you want a rich braised beef dish with wine depth.",
      "zh": "想吃浓厚红酒炖牛肉时很适合；不想要酒香或厚重主菜则避开。",
      "nl": "Bestel dit voor rijk gestoofd rundvlees met wijn diepte."
    },
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.86,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "trippa-alla-romana",
    "metadataCode": "101047",
    "cuisineId": "italian",
    "names": {
      "en": "Trippa alla Romana",
      "zh": "罗马番茄炖牛肚",
      "nl": "Trippa alla Romana",
      "local": "Trippa alla Romana"
    },
    "category": "offal",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Roman-style tripe simmered in tomato sauce, often finished with mint or parsley and pecorino.",
      "zh": "罗马风格番茄炖牛肚，常用薄荷或欧芹、佩科里诺奶酪收尾。",
      "nl": "Romeinse pens in tomatensaus, vaak met munt of peterselie en pecorino."
    },
    "cookingProfile": {
      "en": "The texture is soft but chewy, and the tomato-cheese sauce makes it richer than it looks.",
      "zh": "口感软中带韧，番茄和奶酪让味道比外观看起来更浓。",
      "nl": "De structuur is zacht maar taai; tomaat en kaas maken het rijker dan het oogt."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "italian-depth",
        "regional-dish",
        "acquired-taste"
      ],
      "description": {
        "en": "A Roman offal classic for adventurous diners who like chewy textures.",
        "zh": "罗马内脏经典菜，适合愿意尝试牛肚和弹韧口感的人。",
        "nl": "Een Romeinse orgaanvleesklassieker voor avontuurlijke eters die taaie texturen waarderen."
      }
    },
    "composition": [
      [
        "tripe",
        60,
        "main ingredient"
      ],
      [
        "tomato-sauce",
        20,
        "sauce",
        "seasoning"
      ],
      [
        "pecorino",
        8,
        "cheese finish",
        "seasoning"
      ],
      [
        "onion",
        5,
        "aromatic base"
      ],
      [
        "garlic",
        4,
        "aroma",
        "seasoning"
      ],
      [
        "olive-oil",
        3,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "tripe texture",
      "tomato sauce",
      "pecorino and herbs"
    ],
    "basicTaste": [
      "savory",
      "tomato-rich",
      "slightly funky"
    ],
    "textureProfile": [
      "soft-chewy tripe",
      "saucy tomato base",
      "grated cheese finish"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "regional-dish",
      "adventurous"
    ],
    "avoidIfTags": [
      "dairy-free",
      "avoid-offal"
    ],
    "orderVerdict": {
      "en": "Order only if you are comfortable with tripe; it is flavorful but clearly an offal dish.",
      "zh": "能接受牛肚和内脏菜再点；味道不错，但口感和食材都很明确。",
      "nl": "Bestel alleen als pens oké is; smaakvol, maar duidelijk orgaanvlees."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 4,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "suppli",
    "metadataCode": "101048",
    "cuisineId": "italian",
    "names": {
      "en": "Supplì",
      "zh": "罗马炸米饭芝士球",
      "nl": "Supplì",
      "local": "Supplì"
    },
    "category": "fried-snack",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "Roman fried rice croquettes, usually tomato rice with a melted mozzarella center.",
      "zh": "罗马炸米饭小食，通常是番茄米饭包融化马苏里拉奶酪。",
      "nl": "Romeinse gefrituurde rijstkroketten, meestal tomatenrijst met gesmolten mozzarella."
    },
    "cookingProfile": {
      "en": "Served hot and crisp, with a soft rice interior and stretchy cheese when freshly fried.",
      "zh": "热食外脆内软，刚炸好时内部奶酪会拉丝。",
      "nl": "Warm en krokant, met zachte rijst en rekbare kaas wanneer vers gebakken."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "italian-depth",
        "street-food"
      ],
      "description": {
        "en": "A Roman street-food snack and pizzeria starter.",
        "zh": "罗马街头小食和披萨店常见前菜。",
        "nl": "Een Romeinse streetfoodsnack en pizzeriavoorgerecht."
      }
    },
    "composition": [
      [
        "arborio-rice",
        40,
        "rice base"
      ],
      [
        "tomato-sauce",
        20,
        "rice sauce",
        "seasoning"
      ],
      [
        "mozzarella",
        15,
        "melty center"
      ],
      [
        "panko-breadcrumbs",
        10,
        "crisp coating"
      ],
      [
        "egg",
        5,
        "binder"
      ],
      [
        "neutral-frying-oil",
        5,
        "fried texture"
      ],
      [
        "parmesan",
        5,
        "savory finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "tomato rice",
      "melted mozzarella",
      "crisp fried coating"
    ],
    "basicTaste": [
      "savory",
      "tomato-rich",
      "cheesy"
    ],
    "textureProfile": [
      "crisp outside",
      "soft rice",
      "stretchy cheese"
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
      "street-food",
      "starter",
      "sharing"
    ],
    "orderVerdict": {
      "en": "A fun starter if you want a hot, cheesy fried snack.",
      "zh": "想吃热乎、拉丝、酥脆的小食时很适合；介意油炸或奶酪则不适合。",
      "nl": "Leuk als warme kaasachtige gefrituurde snack; minder geschikt bij frituur of zuivel vermijden."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.86,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "panzerotti",
    "metadataCode": "101049",
    "cuisineId": "italian",
    "names": {
      "en": "Panzerotti",
      "zh": "意式炸半月馅饼",
      "nl": "Panzerotti",
      "local": "Panzerotti"
    },
    "category": "fried-snack",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "Small fried half-moon turnovers, commonly filled with tomato and mozzarella.",
      "zh": "小个半月形炸馅饼，常见馅料是番茄酱和马苏里拉奶酪。",
      "nl": "Kleine gefrituurde halvemaanflapjes, vaak gevuld met tomaat en mozzarella."
    },
    "cookingProfile": {
      "en": "Hot, puffy, and crisp outside, with a molten saucy filling inside.",
      "zh": "热食外层鼓起酥脆，里面是热的酱汁和融化奶酪。",
      "nl": "Warm, luchtig en krokant van buiten, met gesmolten saus-kaasvulling."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "italian-depth",
        "street-food"
      ],
      "description": {
        "en": "A southern Italian street-food snack related to calzone but usually smaller and fried.",
        "zh": "南意街头小食，和 calzone 相近但通常更小且油炸。",
        "nl": "Zuid-Italiaanse streetfood, verwant aan calzone maar kleiner en meestal gefrituurd."
      }
    },
    "composition": [
      [
        "pizza-dough",
        45,
        "turnover dough"
      ],
      [
        "mozzarella",
        20,
        "melty filling"
      ],
      [
        "tomato-sauce",
        20,
        "filling sauce",
        "seasoning"
      ],
      [
        "neutral-frying-oil",
        10,
        "fried texture"
      ],
      [
        "basil",
        5,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "fried dough",
      "tomato mozzarella filling",
      "basil"
    ],
    "basicTaste": [
      "savory",
      "cheesy",
      "tomato-rich"
    ],
    "textureProfile": [
      "crisp puffy dough",
      "molten filling",
      "soft center"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "street-food",
      "fried-snack",
      "sharing"
    ],
    "orderVerdict": {
      "en": "Order as a snack if you want something crisp, cheesy, and filling.",
      "zh": "想吃酥脆、热奶酪、分量感强的小食时可以点。",
      "nl": "Bestel als snack wanneer je iets krokants, kazigs en vullends wilt."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "piadina",
    "metadataCode": "101050",
    "cuisineId": "italian",
    "names": {
      "en": "Piadina",
      "zh": "意式薄饼夹馅",
      "nl": "Piadina",
      "local": "Piadina romagnola"
    },
    "category": "flatbread",
    "cookingMethods": [
      "toasted",
      "assembled"
    ],
    "shortDescription": {
      "en": "A thin Italian flatbread, often folded around prosciutto, cheese, arugula, or other fillings.",
      "zh": "意式薄饼夹馅，常见火腿、奶酪、芝麻菜等组合。",
      "nl": "Dun Italiaans platbrood, vaak gevouwen met prosciutto, kaas, rucola of andere vulling."
    },
    "cookingProfile": {
      "en": "Usually griddled and served warm, lighter than pizza but still bread-based and filling.",
      "zh": "通常煎烤后温热上桌，比披萨轻一些，但仍是以面饼为主的饱腹选择。",
      "nl": "Meestal warm van de plaat, lichter dan pizza maar nog steeds broodig en vullend."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "italian-depth",
        "street-food"
      ],
      "description": {
        "en": "A Romagna-style casual flatbread useful for quick lunch ordering.",
        "zh": "罗马涅地区常见休闲薄饼，适合快速午餐点单。",
        "nl": "Een casual platbrood uit Romagna, handig voor een snelle lunch."
      }
    },
    "composition": [
      [
        "wheat-flour",
        45,
        "flatbread base"
      ],
      [
        "prosciutto",
        20,
        "salty filling"
      ],
      [
        "cheese",
        15,
        "creamy filling"
      ],
      [
        "arugula",
        10,
        "peppery greens"
      ],
      [
        "tomato",
        5,
        "freshness"
      ],
      [
        "olive-oil",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "warm flatbread",
      "prosciutto",
      "arugula and cheese"
    ],
    "basicTaste": [
      "savory",
      "salty",
      "fresh"
    ],
    "textureProfile": [
      "soft toasted flatbread",
      "silky ham",
      "leafy crunch"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "lunch",
      "street-food",
      "quick-meal"
    ],
    "orderVerdict": {
      "en": "Good for a casual light meal, but check the filling if you avoid pork or dairy.",
      "zh": "适合轻便午餐；不吃猪肉或奶制品时要先确认馅料。",
      "nl": "Goed als lichte lunch; check de vulling bij varkensvlees of zuivel vermijden."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high"
  },
  {
    "id": "pinsa-romana",
    "metadataCode": "101051",
    "cuisineId": "italian",
    "names": {
      "en": "Pinsa Romana",
      "zh": "罗马风格椭圆披萨饼",
      "nl": "Pinsa Romana",
      "local": "Pinsa romana"
    },
    "category": "pizza",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "An oval Roman-style flatbread pizza with an airy crust, often lighter and crispier than standard pizza.",
      "zh": "椭圆形罗马风格披萨饼，饼底通常更蓬松、边缘更酥。",
      "nl": "Ovale Romeinse flatbread-pizza met luchtige bodem, vaak lichter en krokanter dan gewone pizza."
    },
    "cookingProfile": {
      "en": "Baked hot with an airy base; toppings vary, but the crust texture is the main cue.",
      "zh": "高温烘烤，重点是空气感饼底；浇头会因餐厅变化。",
      "nl": "Heet gebakken met luchtige bodem; toppings wisselen, maar de korst is belangrijk."
    },
    "cuisineRole": {
      "level": "modern",
      "tags": [
        "italian-depth",
        "modern"
      ],
      "description": {
        "en": "A modern Roman pizzeria item for diners comparing pizza-like options.",
        "zh": "现代罗马披萨店常见项目，适合在披萨类选择中比较。",
        "nl": "Een modern Romeins pizzeria-item voor wie pizza-achtige opties vergelijkt."
      }
    },
    "composition": [
      [
        "pizza-dough",
        55,
        "airy base"
      ],
      [
        "tomato-sauce",
        20,
        "sauce",
        "seasoning"
      ],
      [
        "mozzarella",
        15,
        "cheese"
      ],
      [
        "olive-oil",
        5,
        "finish",
        "seasoning"
      ],
      [
        "basil",
        5,
        "fresh aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "airy oval crust",
      "tomato mozzarella topping",
      "olive oil"
    ],
    "basicTaste": [
      "savory",
      "tomato-rich",
      "cheesy"
    ],
    "textureProfile": [
      "airy crisp crust",
      "soft center",
      "melty topping"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "pizza-like",
      "sharing",
      "modern"
    ],
    "orderVerdict": {
      "en": "Order if you want something pizza-like with a lighter, airy crust.",
      "zh": "想吃接近披萨但饼底更轻、更有空气感的选择时适合。",
      "nl": "Bestel als je iets pizza-achtigs wilt met een lichtere luchtige bodem."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high"
  },
  {
    "id": "calzone",
    "metadataCode": "101052",
    "cuisineId": "italian",
    "names": {
      "en": "Calzone",
      "zh": "意式烤半月披萨包",
      "nl": "Calzone",
      "local": "Calzone"
    },
    "category": "pizza",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "A folded baked pizza pocket, usually filled with mozzarella, tomato, and cured meat or ricotta.",
      "zh": "烤制折叠披萨包，常见馅料有马苏里拉、番茄、腌肉或乳清奶酪。",
      "nl": "Gevouwen gebakken pizzapakket, vaak gevuld met mozzarella, tomaat en vleeswaar of ricotta."
    },
    "cookingProfile": {
      "en": "The filling is enclosed, so it arrives hotter and wetter inside than a flat pizza.",
      "zh": "馅料被包在里面，上桌内部通常更烫、更湿润。",
      "nl": "De vulling zit dichtgevouwen, dus binnenin is het heter en sappiger dan platte pizza."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "italian-depth",
        "classic-dish"
      ],
      "description": {
        "en": "A familiar pizzeria item for diners who want a stuffed pizza experience.",
        "zh": "披萨店常见选择，适合想吃有馅料包裹感的人。",
        "nl": "Een bekende pizzeria-keuze voor wie gevulde pizza wil."
      }
    },
    "composition": [
      [
        "pizza-dough",
        45,
        "folded dough"
      ],
      [
        "mozzarella",
        20,
        "melty filling"
      ],
      [
        "tomato-sauce",
        15,
        "sauce",
        "seasoning"
      ],
      [
        "ham",
        10,
        "savory filling"
      ],
      [
        "ricotta",
        5,
        "creamy filling"
      ],
      [
        "olive-oil",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "folded pizza dough",
      "molten cheese",
      "hot enclosed filling"
    ],
    "basicTaste": [
      "savory",
      "cheesy",
      "tomato-rich"
    ],
    "textureProfile": [
      "chewy crust",
      "steamy filling",
      "melty cheese"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "pizzeria",
      "filling-meal"
    ],
    "orderVerdict": {
      "en": "A filling pizzeria choice if you want melted cheese and a stuffed center.",
      "zh": "想吃热奶酪和有馅料的披萨包时适合；分量通常不轻。",
      "nl": "Een vullende pizzeria-keuze met gesmolten kaas en gevulde kern."
    },
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.85,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "sarde-a-beccafico",
    "metadataCode": "101053",
    "cuisineId": "italian",
    "names": {
      "en": "Sarde a Beccafico",
      "zh": "西西里夹馅沙丁鱼卷",
      "nl": "Sarde a beccafico",
      "local": "Sarde a beccafico"
    },
    "category": "seafood",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Sicilian stuffed sardines baked with breadcrumbs, raisins, pine nuts, citrus, and herbs.",
      "zh": "西西里夹馅沙丁鱼，常用面包屑、葡萄干、松子、柑橘和香草烘烤。",
      "nl": "Siciliaanse gevulde sardines met broodkruim, rozijnen, pijnboompitten, citrus en kruiden."
    },
    "cookingProfile": {
      "en": "Expect small oily fish with sweet-savory stuffing rather than a neutral white-fish fillet.",
      "zh": "这是小型油脂感鱼配甜咸馅料，不是清淡白鱼排。",
      "nl": "Verwacht kleine vette vis met zoet-hartige vulling, geen neutrale witvisfilet."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "italian-depth",
        "regional-dish"
      ],
      "description": {
        "en": "A Sicilian seafood dish with a distinctive sweet-savory profile.",
        "zh": "西西里特色海鲜菜，有明显甜咸交织的风味。",
        "nl": "Een Siciliaans zeevruchtengerecht met herkenbaar zoet-hartig profiel."
      }
    },
    "composition": [
      [
        "sardines",
        45,
        "main fish"
      ],
      [
        "bread",
        20,
        "breadcrumb filling"
      ],
      [
        "raisins",
        10,
        "sweet filling"
      ],
      [
        "pine-nuts",
        10,
        "nutty filling"
      ],
      [
        "lemon",
        5,
        "citrus"
      ],
      [
        "olive-oil",
        5,
        "bake finish",
        "seasoning"
      ],
      [
        "parsley",
        5,
        "herb finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "sardines",
      "raisin pine-nut stuffing",
      "citrus"
    ],
    "basicTaste": [
      "savory",
      "briny",
      "sweet-savory"
    ],
    "textureProfile": [
      "oily fish",
      "crumbly stuffing",
      "soft baked roll"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-gluten",
      "contains-tree-nut"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "regional-dish",
      "seafood",
      "adventurous"
    ],
    "orderVerdict": {
      "en": "Order if you enjoy oily fish and sweet-savory Sicilian flavors.",
      "zh": "喜欢油脂感小鱼和甜咸风味时值得点；怕鱼腥或坚果过敏则避开。",
      "nl": "Bestel als je vette vis en Siciliaans zoet-hartig lekker vindt."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 3,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "involtini",
    "metadataCode": "101054",
    "cuisineId": "italian",
    "names": {
      "en": "Involtini",
      "zh": "意式夹馅卷",
      "nl": "Involtini",
      "local": "Involtini"
    },
    "category": "stuffed-rolls",
    "cookingMethods": [
      "simmered",
      "baked"
    ],
    "shortDescription": {
      "en": "Italian stuffed rolls, often veal, beef, or eggplant wrapped around cheese, herbs, or breadcrumbs.",
      "zh": "意式夹馅卷，常见小牛肉、牛肉或茄子包入奶酪、香草或面包屑。",
      "nl": "Italiaanse gevulde rolletjes, vaak kalf, rund of aubergine met kaas, kruiden of broodkruim."
    },
    "cookingProfile": {
      "en": "Because fillings vary, order it for the rolled stuffed format and check the menu line for the exact filling.",
      "zh": "馅料变化很大，点它主要是为了夹馅卷形式，具体馅料要看菜单说明。",
      "nl": "De vulling wisselt sterk; bestel voor het gevulde rolletjesconcept en check de exacte vulling."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "italian-depth",
        "common-menu-item"
      ],
      "description": {
        "en": "A common Italian rolled preparation, useful only when the menu or server clarifies the filling.",
        "zh": "常见意式卷制菜型，只有菜单或服务员说明馅料时最可靠。",
        "nl": "Een gangbare Italiaanse rolbereiding, het nuttigst wanneer de vulling duidelijk is."
      }
    },
    "commonVariations": [
      "veal rolls",
      "eggplant rolls",
      "beef rolls",
      "cheese-herb filling"
    ],
    "composition": [
      [
        "veal",
        30,
        "possible wrapper"
      ],
      [
        "eggplant",
        20,
        "possible wrapper"
      ],
      [
        "cheese",
        15,
        "filling"
      ],
      [
        "bread",
        10,
        "breadcrumb filling"
      ],
      [
        "tomato-sauce",
        15,
        "sauce",
        "seasoning"
      ],
      [
        "olive-oil",
        5,
        "finish",
        "seasoning"
      ],
      [
        "herbs",
        5,
        "aroma"
      ]
    ],
    "distinctiveFlavorSources": [
      "rolled stuffed format",
      "tomato sauce",
      "cheese and herbs"
    ],
    "basicTaste": [
      "savory",
      "saucy",
      "herbal"
    ],
    "textureProfile": [
      "rolled pieces",
      "soft filling",
      "saucy finish"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "stuffed-rolls",
      "check-filling"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free",
      "needs-exact-protein"
    ],
    "orderVerdict": {
      "en": "Order only after checking the filling; the name alone does not tell you meat versus vegetable.",
      "zh": "建议先确认馅料再点；单看名字无法判断是肉卷还是蔬菜卷。",
      "nl": "Bestel pas na check van de vulling; de naam zegt niet of het vlees of groente is."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.8,
    "restaurantVariationLevel": "high"
  },
  {
    "id": "sfogliatelle",
    "metadataCode": "101055",
    "cuisineId": "italian",
    "names": {
      "en": "Sfogliatelle",
      "zh": "意式贝壳酥",
      "nl": "Sfogliatelle",
      "local": "Sfogliatelle"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Crisp shell-shaped Neapolitan pastries with many flaky layers and a sweet ricotta-style filling.",
      "zh": "那不勒斯贝壳形酥点，层次很多，内馅常带甜乳清奶酪感。",
      "nl": "Knapperige Napolitaanse schelpvormige gebakjes met veel laagjes en zoete ricottavulling."
    },
    "cookingProfile": {
      "en": "Best when the shell is crisp and the filling is dense, creamy, and lightly citrusy.",
      "zh": "好的版本外壳酥脆，内馅厚实绵密，常带一点柑橘香。",
      "nl": "Het best met krokante schelp en dichte romige, licht citrusachtige vulling."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "italian-depth",
        "regional-dish"
      ],
      "description": {
        "en": "A Neapolitan pastry classic for diners choosing a crisp dessert rather than a soft cake.",
        "zh": "那不勒斯经典点心，适合想吃酥皮甜点而不是软蛋糕的人。",
        "nl": "Een Napolitaanse klassieker voor wie een krokant dessert wil in plaats van zachte cake."
      }
    },
    "composition": [
      [
        "pastry-crust",
        45,
        "layered shell"
      ],
      [
        "ricotta",
        25,
        "sweet filling"
      ],
      [
        "sugar",
        15,
        "sweetness"
      ],
      [
        "orange",
        5,
        "citrus aroma"
      ],
      [
        "butter",
        5,
        "richness"
      ],
      [
        "wheat-flour",
        5,
        "structure"
      ]
    ],
    "distinctiveFlavorSources": [
      "many flaky layers",
      "sweet ricotta filling",
      "citrus aroma"
    ],
    "basicTaste": [
      "sweet",
      "buttery",
      "creamy"
    ],
    "textureProfile": [
      "very flaky shell",
      "dense filling",
      "powdered sugar finish"
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
      "dessert",
      "pastry"
    ],
    "orderVerdict": {
      "en": "Choose this for a crisp layered pastry; it is richer and drier than creamy spoon desserts.",
      "zh": "想吃酥皮层次甜点时适合；比勺子甜品更干、更有嚼感。",
      "nl": "Kies dit voor krokant bladerig gebak; rijker en droger dan lepeldesserts."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.86,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "zabaglione",
    "metadataCode": "101056",
    "cuisineId": "italian",
    "names": {
      "en": "Zabaglione",
      "zh": "意式蛋酒奶泡甜品",
      "nl": "Zabaglione",
      "local": "Zabaglione"
    },
    "category": "dessert",
    "cookingMethods": [
      "stirred"
    ],
    "servingTemperature": "warm-or-cool",
    "rawnessLevel": "egg-based",
    "shortDescription": {
      "en": "A light foamy Italian custard made from egg yolks, sugar, and sweet wine such as Marsala.",
      "zh": "用蛋黄、糖和甜酒打出的轻盈泡沫状意式蛋奶甜品。",
      "nl": "Luchtige Italiaanse custard van eidooier, suiker en zoete wijn zoals Marsala."
    },
    "cookingProfile": {
      "en": "Usually spoonable and airy, with a clear egg-wine aroma rather than a set pudding texture.",
      "zh": "通常轻盈可舀，带明显蛋香和酒香，不是凝固布丁口感。",
      "nl": "Meestal luchtig en lepelbaar, met ei-wijnaroma in plaats van vaste pudding."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "italian-depth",
        "classic-dish"
      ],
      "description": {
        "en": "A classic Italian dessert for diners who like soft custards and wine aroma.",
        "zh": "经典意式甜点，适合喜欢柔软蛋奶和酒香的人。",
        "nl": "Een klassiek Italiaans dessert voor wie zachte custard en wijnaroma waardeert."
      }
    },
    "composition": [
      [
        "egg",
        40,
        "custard base"
      ],
      [
        "sugar",
        25,
        "sweetness"
      ],
      [
        "wine",
        20,
        "Marsala-style aroma"
      ],
      [
        "berries",
        10,
        "optional garnish"
      ],
      [
        "bread",
        5,
        "biscotti or biscuit side",
        "ingredient",
        "medium",
        true
      ]
    ],
    "distinctiveFlavorSources": [
      "egg yolk foam",
      "Marsala-style wine",
      "light sweetness"
    ],
    "basicTaste": [
      "sweet",
      "eggy",
      "wine-aromatic"
    ],
    "textureProfile": [
      "airy foam",
      "spoonable custard",
      "soft finish"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-alcohol",
      "contains-gluten"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert",
      "custard"
    ],
    "avoidIfTags": [
      "egg-allergy",
      "avoid-alcohol"
    ],
    "orderVerdict": {
      "en": "Order if you like airy custards and do not mind egg and wine flavor.",
      "zh": "喜欢轻盈蛋奶甜品且能接受酒香时适合；不吃蛋或避酒则不建议。",
      "nl": "Bestel als je luchtige custard en wijnaroma lekker vindt; vermijd bij ei of alcohol vermijden."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "semifreddo",
    "metadataCode": "101057",
    "cuisineId": "italian",
    "names": {
      "en": "Semifreddo",
      "zh": "意式半冻甜品",
      "nl": "Semifreddo",
      "local": "Semifreddo"
    },
    "category": "dessert",
    "cookingMethods": [
      "chilled",
      "set"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "A semi-frozen Italian dessert, softer than ice cream and often sliced like a chilled mousse loaf.",
      "zh": "意式半冻甜品，比冰淇淋更软，常像冷冻慕斯一样切片上桌。",
      "nl": "Halfbevroren Italiaans dessert, zachter dan ijs en vaak als mousseplak geserveerd."
    },
    "cookingProfile": {
      "en": "Served cold but not rock-hard, with a creamy mousse-like texture that melts quickly.",
      "zh": "冷食但不会像冰块一样硬，质地接近奶油慕斯，融化较快。",
      "nl": "Koud maar niet keihard, romig mousseachtig en snel smeltend."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "italian-depth",
        "classic-dish"
      ],
      "description": {
        "en": "A flexible Italian restaurant dessert for diners who want something cold and creamy.",
        "zh": "意大利餐厅常见冷甜点，适合想吃冰凉奶油感甜品的人。",
        "nl": "Een flexibel Italiaans restaurantdessert voor wie koud en romig wil."
      }
    },
    "composition": [
      [
        "cream",
        35,
        "creamy base"
      ],
      [
        "egg",
        20,
        "structure"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "fruit-sauce-or-caramel",
        15,
        "sauce or swirl"
      ],
      [
        "chocolate",
        5,
        "variation garnish"
      ],
      [
        "berries",
        5,
        "fresh garnish"
      ]
    ],
    "distinctiveFlavorSources": [
      "semi-frozen cream",
      "egg mousse base",
      "fruit or chocolate sauce"
    ],
    "basicTaste": [
      "sweet",
      "creamy",
      "cold"
    ],
    "textureProfile": [
      "soft frozen slice",
      "creamy melt",
      "sauce contrast"
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
      "cold-dessert"
    ],
    "orderVerdict": {
      "en": "A good cold dessert if you want creamy texture without dense ice cream.",
      "zh": "想吃冰凉奶油感但又不想要太硬冰淇淋时适合。",
      "nl": "Goed koud dessert als je romigheid wilt zonder compact ijs."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high"
  },
  {
    "id": "granita",
    "metadataCode": "101058",
    "cuisineId": "italian",
    "names": {
      "en": "Granita",
      "zh": "意式冰沙",
      "nl": "Granita",
      "local": "Granita"
    },
    "category": "dessert",
    "cookingMethods": [
      "chilled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "A Sicilian-style icy dessert with fine crystals, commonly lemon, coffee, almond, or fruit flavored.",
      "zh": "西西里风格细碎冰晶甜品，常见柠檬、咖啡、杏仁或水果味。",
      "nl": "Siciliaans ijskristaldessert, vaak met citroen, koffie, amandel of fruitsmaak."
    },
    "cookingProfile": {
      "en": "Served very cold and spoonable, lighter and icier than gelato.",
      "zh": "冷食可舀，比意式冰淇淋更清爽、更有冰晶感。",
      "nl": "Zeer koud en lepelbaar, lichter en ijziger dan gelato."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "italian-depth",
        "regional-dish"
      ],
      "description": {
        "en": "A Sicilian refreshment often eaten as dessert or with brioche.",
        "zh": "西西里常见清爽甜品，也常配 brioche 一起吃。",
        "nl": "Een Siciliaanse verfrissing, als dessert of met brioche gegeten."
      }
    },
    "composition": [
      [
        "shaved-ice",
        45,
        "ice crystals"
      ],
      [
        "sugar",
        25,
        "sweetness"
      ],
      [
        "lemon",
        15,
        "common flavor"
      ],
      [
        "coffee",
        10,
        "possible flavor"
      ],
      [
        "bread",
        5,
        "optional brioche side",
        "ingredient",
        "medium",
        true
      ]
    ],
    "distinctiveFlavorSources": [
      "fine ice crystals",
      "lemon or coffee flavor",
      "light syrup sweetness"
    ],
    "basicTaste": [
      "sweet",
      "refreshing",
      "cold"
    ],
    "textureProfile": [
      "icy crystals",
      "spoonable slush",
      "quick melt"
    ],
    "riskFlags": [
      "contains-gluten"
    ],
    "dietaryFlags": [
      "vegan"
    ],
    "goodForTags": [
      "dessert",
      "refreshing",
      "vegan-option"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a light icy finish instead of a creamy dessert.",
      "zh": "想用清爽冰感甜品收尾时适合；想要奶油甜点则选别的。",
      "nl": "Kies dit voor een lichte ijzige afsluiter in plaats van een romig dessert."
    },
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high"
  },
  {
    "id": "bresaola-rucola-parmesan",
    "metadataCode": "101059",
    "cuisineId": "italian",
    "names": {
      "en": "Bresaola Rucola Parmesan",
      "zh": "风干牛肉芝麻菜帕玛森",
      "nl": "Bresaola met rucola en Parmezaan",
      "local": "Bresaola, rucola e Parmigiano"
    },
    "category": "antipasto",
    "cookingMethods": [
      "assembled"
    ],
    "servingTemperature": "cold-or-cool",
    "rawnessLevel": "cured-meat",
    "shortDescription": {
      "en": "Thin slices of cured beef with arugula, shaved Parmigiano, lemon, olive oil, and black pepper.",
      "zh": "薄切风干牛肉配芝麻菜、帕玛森片、柠檬、橄榄油和黑胡椒。",
      "nl": "Dunne plakjes gedroogd rundvlees met rucola, Parmezaan, citroen, olijfolie en zwarte peper."
    },
    "cookingProfile": {
      "en": "Served cold as an antipasto, lean and salty rather than cooked or saucy.",
      "zh": "作为冷前菜上桌，瘦、咸香，不是熟牛排或带酱主菜。",
      "nl": "Koud als antipasto, mager en zoutig, niet gebakken of sauzig."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "italian-depth",
        "classic-dish"
      ],
      "description": {
        "en": "A common Italian antipasto for diners who want cured meat without pork.",
        "zh": "常见意式冷前菜，适合想吃风干肉但不想吃猪肉的人。",
        "nl": "Een gangbare Italiaanse antipasto voor wie gedroogd vlees zonder varkensvlees wil."
      }
    },
    "composition": [
      [
        "bresaola",
        50,
        "cured beef"
      ],
      [
        "arugula",
        20,
        "peppery greens"
      ],
      [
        "parmesan",
        15,
        "cheese",
        "seasoning"
      ],
      [
        "olive-oil",
        5,
        "dressing",
        "seasoning"
      ],
      [
        "lemon",
        5,
        "brightness"
      ],
      [
        "black-pepper",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "cured beef",
      "arugula pepperiness",
      "Parmigiano shavings"
    ],
    "basicTaste": [
      "salty",
      "savory",
      "fresh"
    ],
    "textureProfile": [
      "silky cured beef",
      "leafy greens",
      "hard cheese shavings"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "starter",
      "low-carb",
      "no-pork-cured-meat"
    ],
    "orderVerdict": {
      "en": "A clean antipasto if you want salty cured beef and peppery greens.",
      "zh": "想吃咸香风干牛肉和清爽芝麻菜时很适合；不吃奶酪则要说明。",
      "nl": "Een heldere antipasto voor zoute bresaola en peperige rucola; meld zuivel vermijden."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.85,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "zuppa-di-cozze",
    "metadataCode": "101060",
    "cuisineId": "italian",
    "names": {
      "en": "Zuppa di Cozze",
      "zh": "意式贻贝番茄汤",
      "nl": "Zuppa di cozze",
      "local": "Zuppa di cozze"
    },
    "category": "seafood-soup",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Italian mussel soup, often with tomato, garlic, parsley, olive oil, and toasted bread.",
      "zh": "意式贻贝汤，常有番茄、蒜、欧芹、橄榄油和烤面包。",
      "nl": "Italiaanse mosselsoep, vaak met tomaat, knoflook, peterselie, olijfolie en toast."
    },
    "cookingProfile": {
      "en": "Served hot with open mussels in broth; it is more shellfish-forward than a smooth soup.",
      "zh": "热食上桌，汤里有开壳贻贝，重点是贝类鲜味，不是顺滑浓汤。",
      "nl": "Warm met geopende mosselen in bouillon; meer schelpdiergericht dan gladde soep."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "italian-depth",
        "classic-dish"
      ],
      "description": {
        "en": "A coastal Italian mussel dish that works as a starter or light main.",
        "zh": "意大利沿海常见贻贝菜，可当前菜或较轻主菜。",
        "nl": "Een Italiaans kustgerecht met mosselen, als starter of lichte hoofdgang."
      }
    },
    "composition": [
      [
        "mussels",
        55,
        "main shellfish"
      ],
      [
        "tomato-sauce",
        15,
        "broth base",
        "seasoning"
      ],
      [
        "bread",
        10,
        "toasted side"
      ],
      [
        "garlic",
        8,
        "aroma",
        "seasoning"
      ],
      [
        "olive-oil",
        5,
        "finish",
        "seasoning"
      ],
      [
        "parsley",
        4,
        "fresh finish",
        "seasoning"
      ],
      [
        "chili",
        3,
        "optional warmth",
        "seasoning",
        "high",
        true
      ]
    ],
    "distinctiveFlavorSources": [
      "mussel broth",
      "garlic tomato base",
      "toasted bread"
    ],
    "basicTaste": [
      "briny",
      "savory",
      "garlicky"
    ],
    "textureProfile": [
      "tender mussels",
      "brothy sauce",
      "crisp bread side"
    ],
    "riskFlags": [
      "contains-shellfish",
      "contains-gluten",
      "can-be-spicy"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "seafood",
      "starter",
      "light-main"
    ],
    "orderVerdict": {
      "en": "Order if you want a shellfish-heavy bowl with broth to mop up with bread.",
      "zh": "想吃贝类鲜味、还能用面包蘸汤时很适合；贝类过敏要避开。",
      "nl": "Bestel als je een mosselrijke kom wilt met bouillon om met brood op te nemen."
    },
    "spiceLevel": 1,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.86,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "boerenkoolstamppot",
    "metadataCode": "102032",
    "imageCode": "102032",
    "cuisineId": "dutch",
    "names": {
      "en": "Boerenkoolstamppot",
      "zh": "荷兰羽衣甘蓝土豆泥",
      "nl": "Boerenkoolstamppot",
      "local": "Boerenkoolstamppot"
    },
    "category": "main",
    "cookingMethods": [
      "boiled",
      "assembled"
    ],
    "shortDescription": {
      "en": "Mashed potatoes mixed with chopped kale, usually topped with smoked sausage.",
      "zh": "土豆泥拌切碎羽衣甘蓝，通常配烟熏香肠。",
      "nl": "Aardappelpuree gemengd met boerenkool, meestal met rookworst erbovenop."
    },
    "cookingProfile": {
      "en": "Expect soft green-flecked mash with salty smoked sausage richness.",
      "zh": "入口是柔软土豆泥和菜叶感，烟熏香肠带来咸香油脂。",
      "nl": "Verwacht zachte puree met boerenkool en zoute, rokerige rookworst."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "A winter Dutch stamppot where kale-mashed potatoes and smoked sausage are the ordering cues.",
        "zh": "典型荷兰冬季土豆泥菜，识别重点是羽衣甘蓝土豆泥和烟熏香肠。",
        "nl": "Een klassieke winterse stamppot waarbij boerenkoolpuree en rookworst de herkenningspunten zijn."
      }
    },
    "composition": [
      [
        "potato",
        55,
        "mashed base"
      ],
      [
        "kale",
        25,
        "greens"
      ],
      [
        "smoked-sausage",
        15,
        "smoked topping"
      ],
      [
        "butter",
        5,
        "richness"
      ]
    ],
    "distinctiveFlavorSources": [
      "kale stamppot",
      "smoked sausage",
      "butter"
    ],
    "basicTaste": [
      "savory",
      "smoky",
      "hearty"
    ],
    "textureProfile": [
      "soft mash",
      "leafy bits",
      "firm sausage slices"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "classic-dish",
      "comfort-food"
    ],
    "avoidIfTags": [
      "no-pork",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Choose it for a hearty Dutch comfort plate; skip if you avoid pork or want something light.",
      "zh": "想吃荷兰家常厚实主食时很稳；不吃猪肉或想要清淡菜时不适合。",
      "nl": "Kies dit voor stevige Nederlandse comfortkost; sla over bij geen varken of als je iets lichts wilt."
    },
    "confidenceTag": "audited-remaining-batch-039",
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/102032-boerenkoolstamppot.webp",
    "thumbPath": "/assets/dishes/thumb/102032-boerenkoolstamppot.webp"
  },
  {
    "id": "hete-bliksem",
    "metadataCode": "102033",
    "imageCode": "102033",
    "cuisineId": "dutch",
    "names": {
      "en": "Hete Bliksem",
      "zh": "苹果土豆泥配培根",
      "nl": "Hete bliksem",
      "local": "Hete bliksem"
    },
    "category": "main",
    "cookingMethods": [
      "boiled",
      "assembled"
    ],
    "shortDescription": {
      "en": "A mash of potato and apple with bacon or smoked sausage for a sweet-salty comfort flavor.",
      "zh": "土豆和苹果压成泥，配培根或烟熏香肠，带甜咸对比。",
      "nl": "Een puree van aardappel en appel met spek of rookworst voor een zoet-zoute smaak."
    },
    "cookingProfile": {
      "en": "The apple makes the mash softer and lightly sweet, while bacon adds salt and smoke.",
      "zh": "苹果让土豆泥更柔软微甜，培根增加咸香和烟熏感。",
      "nl": "Appel maakt de puree zachter en licht zoet, terwijl spek zout en rook geeft."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "A traditional Dutch mash recognized by potato, apple, and bacon or sausage.",
        "zh": "传统荷兰土豆泥菜，重点是土豆、苹果和培根或香肠的甜咸组合。",
        "nl": "Een traditionele stamppot herkenbaar aan aardappel, appel en spek of worst."
      }
    },
    "composition": [
      [
        "potato",
        50,
        "mash base"
      ],
      [
        "apple",
        25,
        "sweet fruit"
      ],
      [
        "bacon",
        15,
        "salty pork"
      ],
      [
        "onion",
        5,
        "savory base"
      ],
      [
        "butter",
        5,
        "richness"
      ]
    ],
    "distinctiveFlavorSources": [
      "apple sweetness",
      "bacon",
      "butter"
    ],
    "basicTaste": [
      "sweet-savory",
      "salty",
      "mild"
    ],
    "textureProfile": [
      "soft mash",
      "small apple pieces",
      "crisp bacon bits"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food"
    ],
    "avoidIfTags": [
      "no-pork",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Good if sweet apple in a savory mash sounds appealing; skip if you dislike sweet-salty mains.",
      "zh": "喜欢咸味土豆泥里带苹果甜味时可以点；不爱甜咸主菜则谨慎。",
      "nl": "Goed als appel in hartige puree je aanspreekt; sla over als zoet-zout niet past."
    },
    "confidenceTag": "audited-remaining-batch-039",
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/102033-hete-bliksem.webp",
    "thumbPath": "/assets/dishes/thumb/102033-hete-bliksem.webp"
  },
  {
    "id": "kapucijners-met-spek",
    "metadataCode": "102034",
    "imageCode": "102034",
    "cuisineId": "dutch",
    "names": {
      "en": "Kapucijners met Spek",
      "zh": "荷兰褐豌豆配培根",
      "nl": "Kapucijners met spek",
      "local": "Kapucijners met spek"
    },
    "category": "main",
    "cookingMethods": [
      "simmered",
      "assembled"
    ],
    "shortDescription": {
      "en": "Brown capuchin peas served with bacon, onions, and often pickles or mustard.",
      "zh": "褐豌豆配培根、洋葱，常搭配酸黄瓜或芥末。",
      "nl": "Kapucijners met spek, ui en vaak augurk of mosterd."
    },
    "cookingProfile": {
      "en": "Expect earthy beans with salty bacon and sharp pickled accents.",
      "zh": "入口是豆香和培根咸香，酸黄瓜带一点清爽酸味。",
      "nl": "Verwacht aardse bonen met zout spek en frisse zuren."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "A Dutch brown-pea plate where bacon, pickles, and onions make it a hearty cafe dish.",
        "zh": "荷兰褐豌豆家常菜，培根、酸黄瓜和洋葱让它更像厚实小餐馆主食。",
        "nl": "Een bord met kapucijners waarbij spek, zuur en ui het stevig maken."
      }
    },
    "composition": [
      [
        "beans",
        55,
        "brown peas"
      ],
      [
        "bacon",
        20,
        "salty pork"
      ],
      [
        "onion",
        10,
        "aromatic"
      ],
      [
        "pickles",
        10,
        "acidic side"
      ],
      [
        "mustard",
        5,
        "sharp condiment",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "brown peas",
      "bacon",
      "pickles"
    ],
    "basicTaste": [
      "savory",
      "salty",
      "earthy"
    ],
    "textureProfile": [
      "soft beans",
      "crisp bacon",
      "pickle crunch"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Choose it for an old-school Dutch bean plate; skip if beans or bacon-heavy dishes are not your thing.",
      "zh": "想吃老派荷兰豆类主食时可点；不爱豆子或培根重口味则不适合。",
      "nl": "Kies dit voor een ouderwets bonengerecht; sla over als bonen of spek niet passen."
    },
    "confidenceTag": "audited-remaining-batch-039",
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/102034-kapucijners-met-spek.webp",
    "thumbPath": "/assets/dishes/thumb/102034-kapucijners-met-spek.webp"
  },
  {
    "id": "draadjesvlees",
    "metadataCode": "102035",
    "imageCode": "102035",
    "cuisineId": "dutch",
    "names": {
      "en": "Draadjesvlees",
      "zh": "荷兰慢炖手撕牛肉",
      "nl": "Draadjesvlees",
      "local": "Draadjesvlees"
    },
    "category": "main",
    "cookingMethods": [
      "braised"
    ],
    "shortDescription": {
      "en": "Slow-braised beef that falls into strands, usually served with potatoes and gravy.",
      "zh": "慢炖到能拉成肉丝的牛肉，常配土豆和肉汁。",
      "nl": "Lang gestoofd rundvlees dat in draadjes uit elkaar valt, vaak met aardappelen en jus."
    },
    "cookingProfile": {
      "en": "The meat should feel tender, saucy, and deeper than a quick grilled beef dish.",
      "zh": "牛肉应当软烂多汁，比快煎牛肉更深、更家常。",
      "nl": "Het vlees is mals en sauzig, dieper van smaak dan snel gebakken rundvlees."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "A Dutch braised beef classic known for soft strands and dark gravy.",
        "zh": "经典荷兰炖牛肉，识别重点是软烂肉丝和深色肉汁。",
        "nl": "Een klassieker van gestoofd rundvlees met draadjes en donkere jus."
      }
    },
    "composition": [
      [
        "beef",
        55,
        "braised meat"
      ],
      [
        "broth",
        20,
        "gravy"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "onion",
        5,
        "braise base"
      ],
      [
        "red-wine",
        5,
        "braise depth",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "braised beef",
      "dark gravy",
      "onion"
    ],
    "basicTaste": [
      "savory",
      "rich",
      "meaty"
    ],
    "textureProfile": [
      "shredded tender beef",
      "glossy gravy",
      "soft potatoes"
    ],
    "riskFlags": [
      "contains-alcohol"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food",
      "meat-main"
    ],
    "avoidIfTags": [
      "avoid-heavy-food"
    ],
    "orderVerdict": {
      "en": "A strong choice for tender beef and gravy; skip if you want a lighter or crisp dish.",
      "zh": "想吃软烂牛肉和肉汁时很适合；想要清爽或酥脆口感则不推荐。",
      "nl": "Een goede keuze voor mals rundvlees met jus; sla over als je licht of krokant wilt."
    },
    "confidenceTag": "audited-remaining-batch-039",
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/102035-draadjesvlees.webp",
    "thumbPath": "/assets/dishes/thumb/102035-draadjesvlees.webp"
  },
  {
    "id": "gehaktbal",
    "metadataCode": "102036",
    "imageCode": "102036",
    "cuisineId": "dutch",
    "names": {
      "en": "Gehaktbal",
      "zh": "荷兰肉丸",
      "nl": "Gehaktbal",
      "local": "Gehaktbal"
    },
    "category": "main",
    "cookingMethods": [
      "fried",
      "braised"
    ],
    "shortDescription": {
      "en": "A large browned meatball, often served with gravy, potatoes, and vegetables.",
      "zh": "煎至上色的大颗肉丸，常配肉汁、土豆和蔬菜。",
      "nl": "Een grote gebraden gehaktbal, vaak met jus, aardappelen en groente."
    },
    "cookingProfile": {
      "en": "Expect a firm but juicy meatball with mild seasoning and brown gravy.",
      "zh": "肉丸通常紧实多汁，调味温和，配棕色肉汁。",
      "nl": "Verwacht een stevige maar sappige bal met milde kruiden en bruine jus."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "A common Dutch meatball order, usually valued for gravy and comfort rather than spice.",
        "zh": "常见荷兰肉丸，重点是肉汁和家常感，不是辛辣风味。",
        "nl": "Een veelvoorkomende gehaktbal waarbij jus en comfort belangrijker zijn dan pit."
      }
    },
    "composition": [
      [
        "ground-meat",
        55,
        "meatball"
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
        "broth",
        15,
        "gravy"
      ],
      [
        "onion",
        5,
        "aromatic"
      ],
      [
        "black-pepper",
        5,
        "seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "brown gravy",
      "ground meat",
      "black pepper"
    ],
    "basicTaste": [
      "savory",
      "meaty",
      "mild"
    ],
    "textureProfile": [
      "firm meatball",
      "juicy center",
      "saucy gravy"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food",
      "safe-choice"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "Reliable if you want a mild meat-and-gravy plate; skip if you need gluten-free or very light food.",
      "zh": "想要温和肉丸配肉汁时很稳；需要无麸质或很清淡时不适合。",
      "nl": "Betrouwbaar voor vlees met jus; minder geschikt bij glutenvrij of heel licht eten."
    },
    "confidenceTag": "audited-remaining-batch-039",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/102036-gehaktbal.webp",
    "thumbPath": "/assets/dishes/thumb/102036-gehaktbal.webp"
  },
  {
    "id": "slavink",
    "metadataCode": "102037",
    "imageCode": "102037",
    "cuisineId": "dutch",
    "names": {
      "en": "Slavink",
      "zh": "培根包肉卷",
      "nl": "Slavink",
      "local": "Slavink"
    },
    "category": "main",
    "cookingMethods": [
      "fried"
    ],
    "shortDescription": {
      "en": "A minced meat roll wrapped in bacon and pan-browned, usually served with potatoes.",
      "zh": "肉馅卷外包培根后煎香，通常配土豆。",
      "nl": "Een gehaktrol omwikkeld met spek en gebakken, meestal met aardappelen."
    },
    "cookingProfile": {
      "en": "It eats salty and meaty, with bacon giving the outside a firmer browned bite.",
      "zh": "入口咸香肉感明显，外层培根带来更紧实的焦香口感。",
      "nl": "Zout en vlezig, met spek dat de buitenkant steviger en bruiner maakt."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "A Dutch butcher-style meat roll recognized by minced meat wrapped in bacon.",
        "zh": "荷兰肉店风格肉卷，重点是肉馅外包培根。",
        "nl": "Een slagersklassieker van gehakt omwikkeld met spek."
      }
    },
    "composition": [
      [
        "ground-meat",
        55,
        "meat filling"
      ],
      [
        "bacon",
        25,
        "wrapped outside"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "mustard",
        5,
        "condiment",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "bacon wrap",
      "pan-browned meat",
      "mustard"
    ],
    "basicTaste": [
      "savory",
      "salty",
      "meaty"
    ],
    "textureProfile": [
      "firm bacon outside",
      "soft minced center",
      "pan-browned edges"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "meat-main",
      "comfort-food"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Good for a simple salty meat main; skip if pork or bacon is a problem.",
      "zh": "想吃简单咸香肉类主菜时可点；不吃猪肉或培根则避开。",
      "nl": "Goed voor een eenvoudige zoute vleesschotel; sla over bij geen varken of spek."
    },
    "confidenceTag": "audited-remaining-batch-039",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/102037-slavink.webp",
    "thumbPath": "/assets/dishes/thumb/102037-slavink.webp"
  },
  {
    "id": "rookworst",
    "metadataCode": "102038",
    "imageCode": "102038",
    "cuisineId": "dutch",
    "names": {
      "en": "Rookworst",
      "zh": "荷兰烟熏香肠",
      "nl": "Rookworst",
      "local": "Rookworst"
    },
    "category": "main",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "A smoky, juicy Dutch sausage often served sliced with mash or mustard.",
      "zh": "多汁烟熏香肠，常切片配土豆泥或芥末。",
      "nl": "Een rokerige, sappige worst, vaak in plakken met puree of mosterd."
    },
    "cookingProfile": {
      "en": "The main cue is salty smoke and a snappy sausage bite rather than a complex sauce.",
      "zh": "重点是咸香烟熏味和香肠弹性，不是复杂酱汁。",
      "nl": "Het draait om zoute rook en een stevige worstbeet, niet om complexe saus."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "A Dutch smoked sausage commonly served with stamppot or pea soup.",
        "zh": "荷兰烟熏香肠，常配土豆泥菜或豌豆汤。",
        "nl": "Een Nederlandse rookworst die vaak bij stamppot of erwtensoep hoort."
      }
    },
    "composition": [
      [
        "smoked-sausage",
        65,
        "sausage"
      ],
      [
        "potato",
        20,
        "side mash"
      ],
      [
        "kale",
        10,
        "stamppot side"
      ],
      [
        "mustard",
        5,
        "condiment",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "smoked sausage",
      "mustard",
      "stamppot side"
    ],
    "basicTaste": [
      "smoky",
      "salty",
      "savory"
    ],
    "textureProfile": [
      "snappy casing",
      "juicy sausage",
      "soft mash"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "classic-dish",
      "comfort-food"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a smoky sausage-centered plate; skip if you avoid pork or salty cured meat.",
      "zh": "想吃烟熏香肠为主的盘子时适合；不吃猪肉或怕咸则不推荐。",
      "nl": "Kies dit voor een bord rond rookworst; sla over bij geen varken of zout vlees."
    },
    "confidenceTag": "audited-remaining-batch-039",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/102038-rookworst.webp",
    "thumbPath": "/assets/dishes/thumb/102038-rookworst.webp"
  },
  {
    "id": "lekkerbekje",
    "metadataCode": "102039",
    "cuisineId": "dutch",
    "names": {
      "en": "Lekkerbekje",
      "zh": "荷兰炸鱼排",
      "nl": "Lekkerbekje",
      "local": "Lekkerbekje"
    },
    "category": "seafood",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "A large battered fried white fish fillet, often served with fries, lemon, and sauce.",
      "zh": "整块裹面糊炸白鱼排，常配薯条、柠檬和酱料。",
      "nl": "Een grote gefrituurde witte visfilet in beslag, vaak met friet, citroen en saus."
    },
    "cookingProfile": {
      "en": "Unlike kibbeling pieces, this is one larger fillet with crisp batter and flaky fish inside.",
      "zh": "不同于炸鱼块，这是整块大鱼排，外皮酥脆，里面鱼肉细嫩。",
      "nl": "Anders dan kibbelingstukjes: één grotere filet met krokant beslag en zachte vis."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "seafood",
        "street-food"
      ],
      "description": {
        "en": "A common Dutch fish-shop item and casual fish meal.",
        "zh": "荷兰鱼店常见单品，也可作为休闲鱼类餐。",
        "nl": "Een bekend vishandelgerecht en informele vismaaltijd."
      }
    },
    "composition": [
      [
        "fish-fillet",
        65,
        "main"
      ],
      [
        "tempura-batter",
        20,
        "batter"
      ],
      [
        "fries",
        10,
        "side"
      ],
      [
        "remoulade-sauce",
        5,
        "dip",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "fried white fish",
      "remoulade-sauce",
      "lemon"
    ],
    "basicTaste": [
      "savory",
      "briny",
      "fried"
    ],
    "textureProfile": [
      "crisp batter",
      "flaky fish",
      "creamy sauce"
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
      "seafood",
      "main-or-snack"
    ],
    "avoidIfTags": [
      "avoids-fish",
      "gluten-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "Good if you want a bigger fried fish portion; choose kibbeling for smaller snackable pieces.",
      "zh": "想吃较大份炸鱼时适合；想要小块零食感则选 kibbeling。",
      "nl": "Goed voor een grotere portie gebakken vis; kies kibbeling voor kleinere snackstukjes."
    },
    "confidenceTag": "audited-dutch-batch-008",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "mosselen-naturel",
    "metadataCode": "102040",
    "imageCode": "102040",
    "cuisineId": "dutch",
    "names": {
      "en": "Mosselen Naturel",
      "zh": "原味清蒸贻贝",
      "nl": "Mosselen naturel",
      "local": "Mosselen naturel"
    },
    "category": "seafood",
    "cookingMethods": [
      "steamed"
    ],
    "shortDescription": {
      "en": "Steamed mussels served simply with aromatics and a light broth.",
      "zh": "贻贝用香料蔬菜清蒸，配清淡汤汁。",
      "nl": "Gestoomde mosselen met aromaten en lichte bouillon."
    },
    "cookingProfile": {
      "en": "Expect briny shellfish, light broth, and a hands-on eating style from the shells.",
      "zh": "可预期贝类咸鲜、汤汁清淡，需要从壳里取肉吃。",
      "nl": "Verwacht zilte mosselen, lichte bouillon en eten uit de schelp."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "seafood"
      ],
      "description": {
        "en": "A Dutch-Belgian mussel order where the shellfish and light broth are the main cues.",
        "zh": "荷比常见贻贝菜，识别重点是贝类本味和清淡汤汁。",
        "nl": "Een Nederlands-Belgische mosselpan waarbij mosselen en lichte bouillon centraal staan."
      }
    },
    "composition": [
      [
        "mussels",
        75,
        "shellfish"
      ],
      [
        "broth",
        10,
        "steaming liquid"
      ],
      [
        "onion",
        5,
        "aromatic"
      ],
      [
        "garlic",
        5,
        "aromatic"
      ],
      [
        "parsley",
        5,
        "fresh finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "mussels",
      "light broth",
      "parsley"
    ],
    "basicTaste": [
      "briny",
      "savory",
      "light"
    ],
    "textureProfile": [
      "tender mussels",
      "brothy shells",
      "fresh herbs"
    ],
    "riskFlags": [
      "contains-shellfish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "seafood",
      "lighter-choice"
    ],
    "avoidIfTags": [
      "shellfish-allergy"
    ],
    "orderVerdict": {
      "en": "A good pick for shellfish lovers wanting a lighter pot; avoid with shellfish allergy.",
      "zh": "喜欢贝类且想吃较清淡一锅时适合；甲壳或贝类过敏者避开。",
      "nl": "Goed voor liefhebbers van schelpdieren die iets lichts willen; vermijd bij schelpdierallergie."
    },
    "confidenceTag": "audited-remaining-batch-039",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/102040-mosselen-naturel.webp",
    "thumbPath": "/assets/dishes/thumb/102040-mosselen-naturel.webp"
  },
  {
    "id": "asperges-met-ham-en-ei",
    "metadataCode": "102041",
    "imageCode": "102041",
    "cuisineId": "dutch",
    "names": {
      "en": "Asperges met Ham en Ei",
      "zh": "白芦笋配火腿和鸡蛋",
      "nl": "Asperges met ham en ei",
      "local": "Asperges met ham en ei"
    },
    "category": "main",
    "cookingMethods": [
      "boiled",
      "assembled"
    ],
    "shortDescription": {
      "en": "White asparagus served with ham, boiled egg, and melted butter or hollandaise-style sauce.",
      "zh": "白芦笋配火腿、煮鸡蛋和融化黄油或类似荷兰汁。",
      "nl": "Witte asperges met ham, gekookt ei en gesmolten boter of hollandaisesaus."
    },
    "cookingProfile": {
      "en": "It is gentle and buttery, with soft asparagus and salty ham accents.",
      "zh": "整体温和带黄油香，芦笋柔软，火腿增加咸香。",
      "nl": "Zacht en boterig, met malse asperges en zoute ham."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish"
      ],
      "description": {
        "en": "A spring asparagus plate where white asparagus, ham, egg, and butter sauce define the order.",
        "zh": "春季白芦笋盘，白芦笋、火腿、鸡蛋和黄油汁是关键。",
        "nl": "Een lentegerecht waarbij witte asperges, ham, ei en botersaus herkenbaar zijn."
      }
    },
    "composition": [
      [
        "white-asparagus",
        50,
        "vegetable base"
      ],
      [
        "ham",
        20,
        "salty meat"
      ],
      [
        "egg",
        15,
        "boiled egg"
      ],
      [
        "butter",
        10,
        "sauce richness"
      ],
      [
        "parsley",
        5,
        "fresh finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "white asparagus",
      "butter",
      "ham"
    ],
    "basicTaste": [
      "mild",
      "buttery",
      "savory"
    ],
    "textureProfile": [
      "soft asparagus",
      "silky butter",
      "crumbled egg"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "seasonal-dish",
      "classic-dish"
    ],
    "avoidIfTags": [
      "no-pork",
      "egg-allergy",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Choose it for a mild seasonal asparagus plate; skip if ham, egg, or butter sauce is an issue.",
      "zh": "想吃温和春季白芦笋时可点；不吃火腿、鸡蛋或奶制黄油时不适合。",
      "nl": "Kies dit voor een mild seizoensbord met asperges; sla over bij ham, ei of botersaus."
    },
    "confidenceTag": "audited-remaining-batch-039",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/102041-asperges-met-ham-en-ei.webp",
    "thumbPath": "/assets/dishes/thumb/102041-asperges-met-ham-en-ei.webp"
  },
  {
    "id": "broodje-bal",
    "metadataCode": "102042",
    "imageCode": "102042",
    "cuisineId": "dutch",
    "names": {
      "en": "Broodje Bal",
      "zh": "荷兰肉丸面包",
      "nl": "Broodje bal",
      "local": "Broodje bal"
    },
    "category": "sandwich",
    "cookingMethods": [
      "fried",
      "assembled"
    ],
    "shortDescription": {
      "en": "A soft roll filled with a large meatball, often with gravy or mustard.",
      "zh": "软面包夹大肉丸，常有肉汁或芥末。",
      "nl": "Een zacht broodje met een grote gehaktbal, vaak met jus of mosterd."
    },
    "cookingProfile": {
      "en": "Expect a filling meatball sandwich that is saucy rather than crisp.",
      "zh": "它是饱腹肉丸三明治，重点是肉汁感，不是酥脆。",
      "nl": "Verwacht een vullend broodje gehaktbal met saus, niet iets krokants."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "street-food"
      ],
      "description": {
        "en": "A Dutch lunch-counter sandwich recognized by a meatball in a soft roll.",
        "zh": "荷兰午餐柜台常见面包，重点是一颗肉丸夹在软面包里。",
        "nl": "Een lunchbroodje herkenbaar aan een gehaktbal in een zacht broodje."
      }
    },
    "composition": [
      [
        "bread",
        40,
        "roll"
      ],
      [
        "ground-meat",
        40,
        "meatball"
      ],
      [
        "broth",
        10,
        "gravy"
      ],
      [
        "mustard",
        5,
        "condiment",
        "seasoning"
      ],
      [
        "onion",
        5,
        "aromatic"
      ]
    ],
    "distinctiveFlavorSources": [
      "meatball",
      "brown gravy",
      "mustard"
    ],
    "basicTaste": [
      "savory",
      "meaty",
      "mild"
    ],
    "textureProfile": [
      "soft roll",
      "juicy meatball",
      "saucy filling"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "street-food",
      "quick-lunch"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "Good for a quick filling lunch; skip if you want a lighter sandwich.",
      "zh": "想快速吃饱时合适；想要清爽轻食三明治则不推荐。",
      "nl": "Goed voor een snelle vullende lunch; sla over als je iets lichts wilt."
    },
    "confidenceTag": "audited-remaining-batch-039",
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/102042-broodje-bal.webp",
    "thumbPath": "/assets/dishes/thumb/102042-broodje-bal.webp"
  },
  {
    "id": "broodje-haring",
    "metadataCode": "102043",
    "imageCode": "102043",
    "cuisineId": "dutch",
    "names": {
      "en": "Broodje Haring",
      "zh": "荷兰鲱鱼面包",
      "nl": "Broodje haring",
      "local": "Broodje haring"
    },
    "category": "sandwich",
    "cookingMethods": [
      "assembled",
      "raw"
    ],
    "servingTemperature": "cold-or-cool",
    "rawnessLevel": "raw-seafood",
    "shortDescription": {
      "en": "A soft roll with Dutch cured herring, chopped onion, and often pickles.",
      "zh": "软面包夹荷兰腌鲱鱼、洋葱碎，常配酸黄瓜。",
      "nl": "Een zacht broodje met Hollandse haring, gesnipperde ui en vaak augurk."
    },
    "cookingProfile": {
      "en": "It tastes briny and fish-forward, served cool rather than cooked hot.",
      "zh": "冷食，咸鲜鱼味明显，不是热熟鱼。",
      "nl": "Koel geserveerd, zilt en duidelijk visachtig, niet warm gegaard."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "street-food",
        "classic-dish"
      ],
      "description": {
        "en": "A Dutch herring sandwich where raw cured herring, onion, and pickle are the defining cues.",
        "zh": "经典荷兰鲱鱼面包，重点是腌生鲱鱼、洋葱和酸黄瓜。",
        "nl": "Een klassiek broodje met rauwe gezouten haring, ui en zuur."
      }
    },
    "composition": [
      [
        "raw-herring",
        55,
        "cured fish"
      ],
      [
        "bread",
        30,
        "roll"
      ],
      [
        "onion",
        10,
        "sharp topping"
      ],
      [
        "pickles",
        5,
        "acidic crunch"
      ]
    ],
    "distinctiveFlavorSources": [
      "cured herring",
      "raw onion",
      "pickle"
    ],
    "basicTaste": [
      "briny",
      "savory",
      "sharp"
    ],
    "textureProfile": [
      "soft fish",
      "soft roll",
      "crunchy onion"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-raw-fish",
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "street-food",
      "classic-dish"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "pregnancy-raw-fish",
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if you like briny cured fish; skip if raw fish texture or strong herring aroma is difficult for you.",
      "zh": "喜欢咸鲜腌鱼时很值得；不接受生冷鱼口感或鲱鱼气味则避开。",
      "nl": "Bestel dit als je zoute haring lekker vindt; sla over bij moeite met rauwe vis of sterke haringgeur."
    },
    "confidenceTag": "audited-remaining-batch-039",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 3,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/102043-broodje-haring.webp",
    "thumbPath": "/assets/dishes/thumb/102043-broodje-haring.webp"
  },
  {
    "id": "broodje-kroket",
    "metadataCode": "102044",
    "imageCode": "102044",
    "cuisineId": "dutch",
    "names": {
      "en": "Broodje Kroket",
      "zh": "荷兰可乐饼面包",
      "nl": "Broodje kroket",
      "local": "Broodje kroket"
    },
    "category": "sandwich",
    "cookingMethods": [
      "deep-fried",
      "assembled"
    ],
    "shortDescription": {
      "en": "A soft roll filled with a deep-fried beef ragout croquette, usually with mustard.",
      "zh": "软面包夹油炸牛肉酱可乐饼，通常配芥末。",
      "nl": "Een zacht broodje met gefrituurde rundvleesragoutkroket, meestal met mosterd."
    },
    "cookingProfile": {
      "en": "The contrast is soft bread around a hot crisp shell and creamy ragout center.",
      "zh": "软面包包住热的酥壳和浓稠肉酱内馅，对比明显。",
      "nl": "Zacht brood rond een hete krokante korst en romige ragoutvulling."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "street-food",
        "classic-dish"
      ],
      "description": {
        "en": "A Dutch snack-bar classic: crisp ragout croquette inside a soft roll.",
        "zh": "荷兰小吃店经典，软面包里夹酥脆肉酱可乐饼。",
        "nl": "Een snackbarclassic: krokante ragoutkroket in een zacht broodje."
      }
    },
    "composition": [
      [
        "bread",
        35,
        "roll"
      ],
      [
        "beef-ragout",
        35,
        "croquette filling"
      ],
      [
        "panko-breadcrumbs",
        15,
        "crisp coating"
      ],
      [
        "neutral-frying-oil",
        10,
        "fried exterior"
      ],
      [
        "mustard",
        5,
        "condiment",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "beef ragout",
      "fried crumb",
      "mustard"
    ],
    "basicTaste": [
      "savory",
      "fried",
      "creamy"
    ],
    "textureProfile": [
      "soft roll",
      "crisp croquette",
      "creamy filling"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "street-food",
      "quick-lunch"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free",
      "avoid-fried-food"
    ],
    "orderVerdict": {
      "en": "A strong snack choice if you want hot crispy comfort; skip if fried food or gluten is a concern.",
      "zh": "想吃热乎酥脆小吃时很稳；介意油炸或麸质时不适合。",
      "nl": "Sterk als warme krokante snack; minder geschikt bij frituur of gluten."
    },
    "confidenceTag": "audited-remaining-batch-039",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/102044-broodje-kroket.webp",
    "thumbPath": "/assets/dishes/thumb/102044-broodje-kroket.webp"
  },
  {
    "id": "broodje-shoarma",
    "metadataCode": "102045",
    "imageCode": "102045",
    "cuisineId": "dutch",
    "names": {
      "en": "Broodje Shoarma",
      "zh": "荷兰沙威玛面包",
      "nl": "Broodje shoarma",
      "local": "Broodje shoarma"
    },
    "category": "sandwich",
    "cookingMethods": [
      "grilled",
      "assembled"
    ],
    "shortDescription": {
      "en": "A pita or roll filled with browned shoarma meat, salad, and garlic sauce.",
      "zh": "皮塔或软面包夹焦香沙威玛肉、蔬菜和蒜味酱。",
      "nl": "Een pita of broodje met gebakken shoarmavlees, salade en knoflooksaus."
    },
    "cookingProfile": {
      "en": "Expect warm spiced meat, cool salad crunch, and creamy garlic sauce.",
      "zh": "可预期热香料肉、清爽蔬菜脆感和蒜味奶油感酱汁。",
      "nl": "Verwacht warm gekruid vlees, frisse salade en romige knoflooksaus."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "street-food"
      ],
      "description": {
        "en": "A Dutch late-night sandwich built around spiced shoarma meat and garlic sauce.",
        "zh": "荷兰常见夜宵面包，重点是香料烤肉和蒜味白酱。",
        "nl": "Een veelvoorkomend broodje met gekruid shoarmavlees en knoflooksaus."
      }
    },
    "composition": [
      [
        "shawarma-meat",
        50,
        "spiced meat"
      ],
      [
        "bread",
        25,
        "pita or roll"
      ],
      [
        "cucumber",
        10,
        "fresh crunch"
      ],
      [
        "tomato",
        10,
        "fresh topping"
      ],
      [
        "garlic-sauce",
        5,
        "sauce"
      ]
    ],
    "distinctiveFlavorSources": [
      "shoarma spices",
      "garlic sauce",
      "grilled meat"
    ],
    "basicTaste": [
      "savory",
      "garlicky",
      "spiced"
    ],
    "textureProfile": [
      "soft bread",
      "browned meat",
      "creamy sauce"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "street-food",
      "late-night-food"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free",
      "avoid-garlic"
    ],
    "orderVerdict": {
      "en": "Good for a filling spiced sandwich; skip if garlic sauce or heavy meat is not appealing.",
      "zh": "想吃有香料感的饱腹肉夹馍时合适；不爱蒜酱或厚重肉食则谨慎。",
      "nl": "Goed voor een vullend gekruid broodje; sla over als knoflooksaus of zwaar vlees niet past."
    },
    "confidenceTag": "audited-remaining-batch-039",
    "spiceLevel": 1,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/102045-broodje-shoarma.webp",
    "thumbPath": "/assets/dishes/thumb/102045-broodje-shoarma.webp"
  },
  {
    "id": "uitsmijter-ham-kaas",
    "metadataCode": "102046",
    "imageCode": "102046",
    "cuisineId": "dutch",
    "names": {
      "en": "Uitsmijter Ham Kaas",
      "zh": "火腿奶酪煎蛋开放三明治",
      "nl": "Uitsmijter ham kaas",
      "local": "Uitsmijter ham kaas"
    },
    "category": "brunch",
    "cookingMethods": [
      "fried",
      "assembled"
    ],
    "shortDescription": {
      "en": "Open-faced bread topped with ham, cheese, and fried eggs.",
      "zh": "开放式面包上放火腿、奶酪和煎蛋。",
      "nl": "Open brood met ham, kaas en gebakken eieren."
    },
    "cookingProfile": {
      "en": "It is warm, eggy, and familiar, with richness from yolk and cheese.",
      "zh": "热食，鸡蛋感明显，蛋黄和奶酪带来浓郁感。",
      "nl": "Warm, eierig en vertrouwd, met rijkdom van dooier en kaas."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "safe-choice"
      ],
      "description": {
        "en": "A Dutch cafe lunch recognized by fried eggs on bread with ham and cheese.",
        "zh": "荷兰咖啡馆午餐，重点是面包上铺煎蛋、火腿和奶酪。",
        "nl": "Een cafelunch met gebakken eieren op brood met ham en kaas."
      }
    },
    "composition": [
      [
        "bread",
        35,
        "toast base"
      ],
      [
        "egg",
        30,
        "fried eggs"
      ],
      [
        "ham",
        15,
        "meat layer"
      ],
      [
        "cheese",
        15,
        "melted topping"
      ],
      [
        "butter",
        5,
        "frying richness"
      ]
    ],
    "distinctiveFlavorSources": [
      "fried egg",
      "ham",
      "melted cheese"
    ],
    "basicTaste": [
      "savory",
      "eggy",
      "cheesy"
    ],
    "textureProfile": [
      "runny or set yolk",
      "soft bread",
      "melted cheese"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-pork",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "safe-choice",
      "brunch"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-allergy",
      "no-pork",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "A safe cafe choice for eggs, ham, and cheese; skip if you need something lighter or allergen-free.",
      "zh": "想吃熟悉的鸡蛋火腿奶酪午餐时很稳；想要清淡或避开过敏原则不适合。",
      "nl": "Een veilige cafekeuze voor ei, ham en kaas; sla over als je licht of allergeenvrij wilt."
    },
    "confidenceTag": "audited-remaining-batch-039",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/102046-uitsmijter-ham-kaas.webp",
    "thumbPath": "/assets/dishes/thumb/102046-uitsmijter-ham-kaas.webp"
  },
  {
    "id": "huzarensalade",
    "metadataCode": "102047",
    "imageCode": "102047",
    "cuisineId": "dutch",
    "names": {
      "en": "Huzarensalade",
      "zh": "荷兰土豆肉丁沙拉",
      "nl": "Huzarensalade",
      "local": "Huzarensalade"
    },
    "category": "salad",
    "cookingMethods": [
      "boiled",
      "chilled",
      "assembled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "Cold potato-based salad mixed with diced meat, vegetables, mayonnaise, and pickles.",
      "zh": "以土豆为主的冷沙拉，拌肉丁、蔬菜、蛋黄酱和酸黄瓜。",
      "nl": "Koude aardappelsalade met vleesblokjes, groente, mayonaise en augurk."
    },
    "cookingProfile": {
      "en": "Expect creamy cold salad with small diced textures and a mild tang.",
      "zh": "入口是冷的奶油感沙拉，小丁口感明显，带轻微酸味。",
      "nl": "Verwacht romige koude salade met blokjesstructuur en lichte zuren."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "A cold Dutch composed salad where potato, mayo, meat, and pickles define the plate.",
        "zh": "荷兰冷拌组合沙拉，重点是土豆、蛋黄酱、肉丁和酸味配料。",
        "nl": "Een koude samengestelde salade met aardappel, mayo, vlees en zuur."
      }
    },
    "composition": [
      [
        "potato",
        35,
        "salad base"
      ],
      [
        "mayonnaise",
        25,
        "creamy binder"
      ],
      [
        "mixed-vegetables",
        15,
        "dice"
      ],
      [
        "ham",
        10,
        "meat dice"
      ],
      [
        "pickles",
        10,
        "acidic crunch"
      ],
      [
        "egg",
        5,
        "garnish"
      ]
    ],
    "distinctiveFlavorSources": [
      "mayonnaise",
      "pickles",
      "potato salad"
    ],
    "basicTaste": [
      "creamy",
      "mild",
      "tangy"
    ],
    "textureProfile": [
      "cold diced salad",
      "creamy binder",
      "pickle crunch"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "cold-starter",
      "classic-dish"
    ],
    "avoidIfTags": [
      "egg-allergy",
      "no-pork",
      "avoid-mayonnaise"
    ],
    "orderVerdict": {
      "en": "Good as a cold creamy side or starter; skip if mayonnaise-heavy salads are not for you.",
      "zh": "适合作为冷的奶油感配菜或前菜；不喜欢蛋黄酱沙拉则避开。",
      "nl": "Goed als koude romige bijlage of starter; sla over als mayo-salades niet passen."
    },
    "confidenceTag": "audited-remaining-batch-039",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/102047-huzarensalade.webp",
    "thumbPath": "/assets/dishes/thumb/102047-huzarensalade.webp"
  },
  {
    "id": "zalmsalade",
    "metadataCode": "102048",
    "imageCode": "102048",
    "cuisineId": "dutch",
    "names": {
      "en": "Zalmsalade",
      "zh": "荷兰三文鱼土豆沙拉",
      "nl": "Zalmsalade",
      "local": "Zalmsalade"
    },
    "category": "salad",
    "cookingMethods": [
      "boiled",
      "chilled",
      "assembled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "Cold salmon salad with potato, mayonnaise, egg, and fresh garnish.",
      "zh": "冷三文鱼沙拉，拌土豆、蛋黄酱、鸡蛋和清爽配料。",
      "nl": "Koude zalmsalade met aardappel, mayonaise, ei en frisse garnering."
    },
    "cookingProfile": {
      "en": "It is creamy and fish-forward but milder than raw fish dishes.",
      "zh": "口感奶油感明显，有鱼香，但比生鱼菜温和。",
      "nl": "Romig en duidelijk visachtig, maar milder dan rauwe visgerechten."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "seafood"
      ],
      "description": {
        "en": "A cold Dutch salmon salad where fish, potato, egg, and mayonnaise are the key cues.",
        "zh": "荷兰冷三文鱼沙拉，重点是鱼肉、土豆、鸡蛋和蛋黄酱。",
        "nl": "Een koude zalmsalade waarin vis, aardappel, ei en mayonaise centraal staan."
      }
    },
    "composition": [
      [
        "salmon",
        35,
        "fish"
      ],
      [
        "potato",
        25,
        "salad base"
      ],
      [
        "mayonnaise",
        20,
        "creamy binder"
      ],
      [
        "egg",
        10,
        "garnish"
      ],
      [
        "cucumber",
        5,
        "fresh crunch"
      ],
      [
        "dill",
        5,
        "herbal finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "salmon",
      "mayonnaise",
      "dill"
    ],
    "basicTaste": [
      "creamy",
      "savory",
      "mildly-briny"
    ],
    "textureProfile": [
      "cold creamy salad",
      "soft salmon flakes",
      "egg garnish"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-egg"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "seafood",
      "cold-starter"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "egg-allergy",
      "avoid-mayonnaise"
    ],
    "orderVerdict": {
      "en": "Choose it for a mild cold salmon salad; skip if fish or mayonnaise is a problem.",
      "zh": "想吃温和冷三文鱼沙拉时可以点；鱼类或蛋黄酱不适合则避开。",
      "nl": "Kies dit voor een milde koude zalmsalade; sla over bij vis of mayo."
    },
    "confidenceTag": "audited-remaining-batch-039",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/102048-zalmsalade.webp",
    "thumbPath": "/assets/dishes/thumb/102048-zalmsalade.webp"
  },
  {
    "id": "eierbal",
    "metadataCode": "102049",
    "imageCode": "102049",
    "cuisineId": "dutch",
    "names": {
      "en": "Eierbal",
      "zh": "荷兰炸鸡蛋球",
      "nl": "Eierbal",
      "local": "Eierbal"
    },
    "category": "fried-snack",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "A breaded deep-fried ball with a boiled egg inside creamy ragout.",
      "zh": "裹粉油炸的圆球，里面是煮鸡蛋和浓稠肉酱。",
      "nl": "Een gepaneerde gefrituurde bal met gekookt ei in romige ragout."
    },
    "cookingProfile": {
      "en": "Expect a crisp shell, creamy ragout, and a firm boiled egg center.",
      "zh": "外壳酥脆，内层是浓稠肉酱，中心是煮鸡蛋。",
      "nl": "Verwacht een krokante korst, romige ragout en stevig gekookt ei."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "street-food"
      ],
      "description": {
        "en": "A Groningen snack recognized by a whole egg inside a fried ragout ball.",
        "zh": "格罗宁根地区小吃，重点是整颗鸡蛋包在炸肉酱球里。",
        "nl": "Een Groningse snack met een heel ei in een gefrituurde ragoutbal."
      }
    },
    "composition": [
      [
        "egg",
        40,
        "whole center"
      ],
      [
        "beef-ragout",
        30,
        "ragout layer"
      ],
      [
        "panko-breadcrumbs",
        15,
        "crisp coating"
      ],
      [
        "neutral-frying-oil",
        10,
        "fried exterior"
      ],
      [
        "mustard",
        5,
        "condiment",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "fried crumb",
      "boiled egg",
      "mustard"
    ],
    "basicTaste": [
      "savory",
      "fried",
      "creamy"
    ],
    "textureProfile": [
      "crisp shell",
      "soft ragout",
      "firm egg center"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "street-food",
      "regional-dish"
    ],
    "avoidIfTags": [
      "egg-allergy",
      "gluten-free",
      "dairy-free",
      "avoid-fried-food"
    ],
    "orderVerdict": {
      "en": "Worth trying if you like Dutch fried snacks and boiled egg; skip if the egg center sounds too heavy.",
      "zh": "喜欢荷兰油炸小吃和煮鸡蛋时值得尝；觉得整颗蛋太厚重则不推荐。",
      "nl": "Leuk als je gefrituurde snacks en ei lust; sla over als een heel ei te zwaar klinkt."
    },
    "confidenceTag": "audited-remaining-batch-039",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/102049-eierbal.webp",
    "thumbPath": "/assets/dishes/thumb/102049-eierbal.webp"
  },
  {
    "id": "saucijzenbroodje",
    "metadataCode": "102050",
    "cuisineId": "dutch",
    "names": {
      "en": "Saucijzenbroodje",
      "zh": "荷兰酥皮香肠卷",
      "nl": "Saucijzenbroodje",
      "local": "Saucijzenbroodje"
    },
    "category": "pastry",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Dutch sausage roll made with flaky puff pastry around seasoned minced meat.",
      "zh": "荷兰酥皮香肠卷，用酥皮包住调味肉馅烤成。",
      "nl": "Nederlandse saucijzenbroodje van bladerdeeg rond gekruid gehakt."
    },
    "cookingProfile": {
      "en": "It is baked, so expect flaky pastry outside and warm savory meat filling inside.",
      "zh": "烘烤后外层酥皮松脆，里面是温热咸香肉馅。",
      "nl": "Gebakken: bladerig deeg buiten en warme hartige gehaktvulling binnenin."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "bakery",
        "quick-meal"
      ],
      "description": {
        "en": "A common Dutch bakery and train-station snack.",
        "zh": "荷兰面包店和车站常见小吃。",
        "nl": "Een bekende snack bij bakker en station."
      }
    },
    "composition": [
      [
        "pastry-crust",
        45,
        "wrapper"
      ],
      [
        "ground-meat",
        40,
        "filling"
      ],
      [
        "egg",
        10,
        "glaze and binder"
      ],
      [
        "black-pepper",
        5,
        "seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "puff pastry",
      "seasoned minced meat",
      "black-pepper"
    ],
    "basicTaste": [
      "savory",
      "buttery",
      "salty"
    ],
    "textureProfile": [
      "flaky pastry",
      "soft meat filling",
      "warm center"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "quick-meal",
      "bakery"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-allergy",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "A filling bakery snack; ask meat type if pork matters.",
      "zh": "很顶饱的烘焙小吃；介意猪肉时确认肉馅类型。",
      "nl": "Een vullende bakkerssnack; vraag naar vleessoort als varkensvlees uitmaakt."
    },
    "confidenceTag": "audited-dutch-batch-008",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "kaassouffle",
    "metadataCode": "102051",
    "cuisineId": "dutch",
    "names": {
      "en": "Kaassoufflé",
      "zh": "荷兰炸奶酪酥",
      "nl": "Kaassoufflé",
      "local": "Kaassoufflé"
    },
    "category": "fried-snack",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "A deep-fried Dutch cheese pastry with a crisp outside and molten cheese inside.",
      "zh": "荷兰炸奶酪酥，外壳酥脆，里面是融化奶酪。",
      "nl": "Een gefrituurde kaassnack met krokante buitenkant en gesmolten kaas binnenin."
    },
    "cookingProfile": {
      "en": "It is a hot fried snack, so the cheese can be stretchy and very hot.",
      "zh": "这是热的炸小吃，里面奶酪会拉丝且很烫。",
      "nl": "Een hete gefrituurde snack, met rekbare en zeer hete kaas."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "vegetarian"
      ],
      "description": {
        "en": "A Dutch snack-bar vegetarian-leaning alternative to meat snacks.",
        "zh": "荷兰小吃店里常见的偏素奶酪炸物，常替代肉类炸物。",
        "nl": "Een snackbaralternatief zonder vlees, gericht op kaas."
      }
    },
    "composition": [
      [
        "cheese",
        55,
        "filling"
      ],
      [
        "pastry-crust",
        25,
        "wrapper"
      ],
      [
        "bread",
        10,
        "coating"
      ],
      [
        "egg",
        5,
        "coating"
      ],
      [
        "mustard",
        5,
        "dip",
        "seasoning",
        "high",
        true
      ]
    ],
    "distinctiveFlavorSources": [
      "melted cheese",
      "fried pastry",
      "mustard"
    ],
    "basicTaste": [
      "salty",
      "creamy",
      "fried"
    ],
    "textureProfile": [
      "crisp shell",
      "molten cheese",
      "hot center"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-gluten",
      "contains-egg"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "street-food",
      "vegetarian"
    ],
    "avoidIfTags": [
      "dairy-free",
      "gluten-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "Good if you want a vegetarian fried snack; not light and the filling is hot.",
      "zh": "想吃素向炸小吃时适合；不清淡，而且内馅很烫。",
      "nl": "Goed voor een vegetarische gefrituurde snack; niet licht en de vulling is heet."
    },
    "confidenceTag": "audited-dutch-batch-008",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "appelflap",
    "metadataCode": "102052",
    "imageCode": "102052",
    "cuisineId": "dutch",
    "names": {
      "en": "Appelflap",
      "zh": "荷兰苹果酥角",
      "nl": "Appelflap",
      "local": "Appelflap"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Triangular puff pastry filled with apple, cinnamon, and sugar.",
      "zh": "三角酥皮包苹果、肉桂和糖馅。",
      "nl": "Driehoekig bladerdeeg gevuld met appel, kaneel en suiker."
    },
    "cookingProfile": {
      "en": "It should be flaky outside with soft sweet-tart apple inside.",
      "zh": "外层酥松，里面是柔软甜酸苹果馅。",
      "nl": "Krokant en bladerig buiten, zacht zoetzuur appelvulling binnenin."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "sweet"
      ],
      "description": {
        "en": "A Dutch bakery sweet recognized by flaky pastry and warm apple filling.",
        "zh": "荷兰常见甜点，识别重点是酥皮和苹果内馅。",
        "nl": "Een bakkerijzoetigheid herkenbaar aan bladerdeeg en appelvulling."
      }
    },
    "composition": [
      [
        "puff-pastry",
        45,
        "flaky pastry"
      ],
      [
        "apple",
        35,
        "fruit filling"
      ],
      [
        "sugar",
        10,
        "sweetness"
      ],
      [
        "butter",
        5,
        "pastry richness"
      ],
      [
        "cinnamon",
        5,
        "spice",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "apple",
      "cinnamon",
      "buttery pastry"
    ],
    "basicTaste": [
      "sweet",
      "buttery",
      "warm-spiced"
    ],
    "textureProfile": [
      "flaky pastry",
      "soft apple filling",
      "sugar crust"
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
      "bakery"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "A safe sweet pastry if you like apple and cinnamon; skip if you want a creamy dessert instead.",
      "zh": "喜欢苹果和肉桂酥点时很稳；想要奶油类甜点则可换别的。",
      "nl": "Een veilige zoete keuze bij appel en kaneel; sla over als je iets romigs wilt."
    },
    "confidenceTag": "audited-remaining-batch-039",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/102052-appelflap.webp",
    "thumbPath": "/assets/dishes/thumb/102052-appelflap.webp"
  },
  {
    "id": "tompouce",
    "metadataCode": "102053",
    "cuisineId": "dutch",
    "names": {
      "en": "Tompouce",
      "zh": "粉色糖霜奶油酥皮",
      "nl": "Tompouce",
      "local": "Tompouce"
    },
    "category": "dessert",
    "cookingMethods": [
      "layered"
    ],
    "shortDescription": {
      "en": "Dutch rectangular pastry with puff pastry layers, thick vanilla custard, and pink icing.",
      "zh": "荷兰长方形酥皮甜点，夹厚厚香草卡仕达，上面是粉色糖霜。",
      "nl": "Rechthoekig gebak met bladerdeeg, dikke banketbakkersroom en roze glazuur."
    },
    "cookingProfile": {
      "en": "It is messy, creamy, and sweet, with crisp pastry layers around a thick custard center.",
      "zh": "吃起来容易散，奶油感强且很甜，酥皮夹着厚卡仕达。",
      "nl": "Romig, zoet en rommelig, met krokant deeg rond dikke room."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "dessert",
        "classic-dish"
      ],
      "description": {
        "en": "A Dutch bakery and supermarket pastry classic, especially recognizable by pink icing.",
        "zh": "荷兰烘焙店和超市经典甜点，粉色糖霜很有辨识度。",
        "nl": "Een klassieker bij bakker en supermarkt, herkenbaar aan roze glazuur."
      }
    },
    "composition": [
      [
        "pastry-crust",
        35,
        "puff pastry"
      ],
      [
        "vanilla-custard",
        40,
        "filling"
      ],
      [
        "pink-icing",
        15,
        "top"
      ],
      [
        "sugar",
        10,
        "sweetness"
      ]
    ],
    "distinctiveFlavorSources": [
      "vanilla-custard",
      "pink-icing",
      "puff pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy",
      "vanilla"
    ],
    "textureProfile": [
      "crisp pastry",
      "thick custard",
      "sticky icing"
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
      "dessert",
      "classic-dish"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "Choose it for a very Dutch cream pastry; expect sweetness and a messy bite.",
      "zh": "想吃很荷兰的奶油酥皮甜点时选它；会很甜，也不太好优雅地吃。",
      "nl": "Kies dit voor heel Nederlands roomgebak; verwacht zoet en morsig eten."
    },
    "confidenceTag": "audited-dutch-batch-008",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "low"
  },
  {
    "id": "boterkoek",
    "metadataCode": "102054",
    "imageCode": "102054",
    "cuisineId": "dutch",
    "names": {
      "en": "Boterkoek",
      "zh": "荷兰黄油蛋糕",
      "nl": "Boterkoek",
      "local": "Boterkoek"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "A dense, flat butter cake cut into small rich slices.",
      "zh": "扁平扎实的黄油蛋糕，通常切小块食用。",
      "nl": "Een dichte, platte boterkoek in kleine rijke stukken."
    },
    "cookingProfile": {
      "en": "Expect a chewy-dense bite and strong butter sweetness, not a fluffy sponge.",
      "zh": "口感紧实略有嚼劲，黄油甜香明显，不是松软海绵蛋糕。",
      "nl": "Verwacht dicht en boterig, niet luchtig als cake."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "sweet",
        "classic-dish"
      ],
      "description": {
        "en": "A Dutch butter cake where dense crumb and butter richness are the point.",
        "zh": "荷兰黄油蛋糕，重点是扎实糕体和浓黄油香。",
        "nl": "Een Nederlandse boterkoek waarbij dicht kruim en boterrijkdom centraal staan."
      }
    },
    "composition": [
      [
        "butter",
        35,
        "richness"
      ],
      [
        "wheat-flour",
        30,
        "cake base"
      ],
      [
        "sugar",
        25,
        "sweetness"
      ],
      [
        "egg",
        5,
        "glaze binder"
      ],
      [
        "almonds",
        5,
        "optional garnish"
      ]
    ],
    "distinctiveFlavorSources": [
      "butter",
      "sugar",
      "almond"
    ],
    "basicTaste": [
      "sweet",
      "buttery",
      "rich"
    ],
    "textureProfile": [
      "dense cake",
      "soft chew",
      "glossy top"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "contains-egg",
      "contains-tree-nut"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert",
      "bakery"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free",
      "egg-allergy",
      "tree-nut-allergy"
    ],
    "orderVerdict": {
      "en": "Choose it for a small rich butter sweet; skip if you prefer light cakes.",
      "zh": "想吃小块浓黄油甜点时适合；喜欢轻盈蛋糕则不推荐。",
      "nl": "Kies dit voor een klein rijk botergebak; sla over als je luchtige cake wilt."
    },
    "confidenceTag": "audited-remaining-batch-039",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/102054-boterkoek.webp",
    "thumbPath": "/assets/dishes/thumb/102054-boterkoek.webp"
  },
  {
    "id": "speculaas",
    "metadataCode": "102055",
    "imageCode": "102055",
    "cuisineId": "dutch",
    "names": {
      "en": "Speculaas",
      "zh": "荷兰香料饼干",
      "nl": "Speculaas",
      "local": "Speculaas"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Crisp brown spiced biscuits, often molded with decorative patterns.",
      "zh": "棕色酥脆香料饼干，常有压模花纹。",
      "nl": "Krokante bruine kruidkoekjes, vaak met reliëfpatronen."
    },
    "cookingProfile": {
      "en": "The bite is crisp and dry, with warm spice rather than creaminess.",
      "zh": "口感酥脆偏干，重点是温暖香料，不是奶油感。",
      "nl": "Krokant en droog, met warme kruiden in plaats van romigheid."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "sweet",
        "classic-dish"
      ],
      "description": {
        "en": "A Dutch spiced biscuit recognized by cinnamon-heavy speculaas spice.",
        "zh": "荷兰香料饼干，重点是肉桂等香料气味。",
        "nl": "Een Nederlands kruidkoekje herkenbaar aan speculaaskruiden."
      }
    },
    "composition": [
      [
        "wheat-flour",
        45,
        "biscuit base"
      ],
      [
        "sugar",
        25,
        "sweetness"
      ],
      [
        "butter",
        15,
        "richness"
      ],
      [
        "speculaas-spice",
        10,
        "spice blend",
        "seasoning"
      ],
      [
        "almonds",
        5,
        "optional garnish"
      ]
    ],
    "distinctiveFlavorSources": [
      "speculaas spice",
      "brown sugar",
      "butter"
    ],
    "basicTaste": [
      "sweet",
      "warm-spiced",
      "toasty"
    ],
    "textureProfile": [
      "crisp biscuit",
      "dry snap",
      "crumbly edge"
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
      "bakery"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free",
      "tree-nut-allergy"
    ],
    "orderVerdict": {
      "en": "Good with coffee if you like cinnamon-spice cookies; skip if you want a soft dessert.",
      "zh": "喜欢肉桂香料饼干配咖啡时可点；想吃柔软甜点则不合适。",
      "nl": "Goed bij koffie als je kruidige koekjes wilt; sla over als je zacht dessert zoekt."
    },
    "confidenceTag": "audited-remaining-batch-039",
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/102055-speculaas.webp",
    "thumbPath": "/assets/dishes/thumb/102055-speculaas.webp"
  },
  {
    "id": "ontbijtkoek",
    "metadataCode": "102056",
    "imageCode": "102056",
    "cuisineId": "dutch",
    "names": {
      "en": "Ontbijtkoek",
      "zh": "荷兰香料早餐蛋糕",
      "nl": "Ontbijtkoek",
      "local": "Ontbijtkoek"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "A dark spiced loaf cake, usually sliced and sometimes spread with butter.",
      "zh": "深色香料长条糕，常切片，有时抹黄油。",
      "nl": "Een donkere kruidkoek in plakken, soms met boter."
    },
    "cookingProfile": {
      "en": "It is soft-sticky and spiced, lighter than butter cake but still sweet.",
      "zh": "口感柔软微黏、有香料味，比黄油蛋糕轻一些但仍偏甜。",
      "nl": "Zacht en licht kleverig met kruiden, lichter dan boterkoek maar zoet."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "sweet"
      ],
      "description": {
        "en": "A Dutch spiced loaf often eaten as breakfast or snack slices.",
        "zh": "荷兰香料长条糕，常作为早餐或点心切片吃。",
        "nl": "Een kruidige ontbijtkoek die vaak in plakken wordt gegeten."
      }
    },
    "composition": [
      [
        "wheat-flour",
        45,
        "loaf base"
      ],
      [
        "sugar",
        25,
        "sweetness"
      ],
      [
        "honey",
        15,
        "sticky sweetness"
      ],
      [
        "cinnamon",
        10,
        "warm spice",
        "seasoning"
      ],
      [
        "butter",
        5,
        "optional spread"
      ]
    ],
    "distinctiveFlavorSources": [
      "honey",
      "spices",
      "butter spread"
    ],
    "basicTaste": [
      "sweet",
      "warm-spiced",
      "mild"
    ],
    "textureProfile": [
      "soft slice",
      "slightly sticky crumb",
      "dense loaf"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "breakfast",
      "sweet-snack"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Choose it for a simple spiced sweet slice; skip if you want a fresh pastry.",
      "zh": "想吃简单香料甜切片时合适；想要新鲜酥皮点心则不推荐。",
      "nl": "Kies dit voor een eenvoudige kruidige plak; sla over als je vers bladerdeeg wilt."
    },
    "confidenceTag": "audited-remaining-batch-039",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/102056-ontbijtkoek.webp",
    "thumbPath": "/assets/dishes/thumb/102056-ontbijtkoek.webp"
  },
  {
    "id": "beschuit-met-muisjes",
    "metadataCode": "102057",
    "imageCode": "102057",
    "cuisineId": "dutch",
    "names": {
      "en": "Beschuit met Muisjes",
      "zh": "荷兰脆圆饼配彩色茴香糖粒",
      "nl": "Beschuit met muisjes",
      "local": "Beschuit met muisjes"
    },
    "category": "dessert",
    "cookingMethods": [
      "assembled"
    ],
    "servingTemperature": "room-temperature",
    "shortDescription": {
      "en": "Crisp round rusks spread with butter and covered in anise sugar sprinkles.",
      "zh": "圆形脆饼抹黄油，撒满茴香糖粒。",
      "nl": "Ronde beschuiten met boter en anijssuikertjes."
    },
    "cookingProfile": {
      "en": "Expect a dry crisp base, buttery layer, and crunchy sweet anise topping.",
      "zh": "底部干脆，黄油一层带润感，糖粒有甜脆和茴香香气。",
      "nl": "Droog krokant beschuit, boter en knapperige zoete anijs."
    },
    "cuisineRole": {
      "level": "festival",
      "tags": [
        "regional-dish",
        "sweet"
      ],
      "description": {
        "en": "A Dutch celebratory rusk recognized by butter and pink or blue anise sprinkles.",
        "zh": "荷兰庆生传统点心，重点是黄油和粉色或蓝色茴香糖粒。",
        "nl": "Een Nederlandse geboortetraditie met beschuit, boter en roze of blauwe muisjes."
      }
    },
    "composition": [
      [
        "bread",
        45,
        "rusk base"
      ],
      [
        "butter",
        25,
        "spread"
      ],
      [
        "sugar",
        25,
        "sprinkle sweetness"
      ],
      [
        "herbs",
        5,
        "anise-like aroma"
      ]
    ],
    "distinctiveFlavorSources": [
      "anise sprinkles",
      "butter",
      "crisp rusk"
    ],
    "basicTaste": [
      "sweet",
      "buttery",
      "aromatic"
    ],
    "textureProfile": [
      "dry crisp rusk",
      "butter layer",
      "crunchy sprinkles"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "sweet-snack",
      "festival"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free",
      "avoid-anise"
    ],
    "orderVerdict": {
      "en": "Try it as a light sweet cultural snack; skip if dry crisp textures or anise notes are not appealing.",
      "zh": "想体验轻甜荷兰传统点心时可试；不爱干脆口感或茴香味则谨慎。",
      "nl": "Probeer dit als lichte culturele zoetigheid; sla over bij droge textuur of anijs."
    },
    "confidenceTag": "audited-remaining-batch-039",
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/102057-beschuit-met-muisjes.webp",
    "thumbPath": "/assets/dishes/thumb/102057-beschuit-met-muisjes.webp"
  },
  {
    "id": "vlaflip",
    "metadataCode": "102058",
    "imageCode": "102058",
    "cuisineId": "dutch",
    "names": {
      "en": "Vlaflip",
      "zh": "荷兰奶黄酸奶分层甜品",
      "nl": "Vlaflip",
      "local": "Vlaflip"
    },
    "category": "dessert",
    "cookingMethods": [
      "assembled",
      "chilled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "A cold layered dessert of vanilla custard, yogurt, and red fruit syrup.",
      "zh": "冷的分层甜品，由香草奶黄、酸奶和红色果酱糖浆组成。",
      "nl": "Een koud laagjesdessert van vanillevla, yoghurt en rode vruchtensiroop."
    },
    "cookingProfile": {
      "en": "It is creamy, cool, sweet-tart, and usually eaten by the spoon.",
      "zh": "入口冷、顺滑，甜中带一点酸，通常用勺吃。",
      "nl": "Koel, romig en zoetzuur, meestal met een lepel gegeten."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "sweet"
      ],
      "description": {
        "en": "A Dutch layered dairy dessert with custard, yogurt, and fruit syrup.",
        "zh": "荷兰分层乳制甜品，重点是奶黄、酸奶和果酱糖浆。",
        "nl": "Een Nederlands laagjesdessert met vla, yoghurt en vruchtensiroop."
      }
    },
    "composition": [
      [
        "vanilla-custard",
        45,
        "custard layer"
      ],
      [
        "yogurt",
        30,
        "tangy dairy"
      ],
      [
        "berries",
        15,
        "fruit layer"
      ],
      [
        "sugar",
        10,
        "sweetness"
      ]
    ],
    "distinctiveFlavorSources": [
      "vanilla custard",
      "yogurt tang",
      "berry syrup"
    ],
    "basicTaste": [
      "sweet",
      "creamy",
      "tangy"
    ],
    "textureProfile": [
      "smooth layers",
      "cool spoon dessert",
      "soft fruit syrup"
    ],
    "riskFlags": [
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
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Good for a light creamy dessert; skip if you avoid dairy or prefer baked sweets.",
      "zh": "想要清爽奶香甜品时适合；不吃奶制品或想吃烘焙点心则避开。",
      "nl": "Goed voor een licht romig dessert; sla over bij zuivelvrij of als je gebak wilt."
    },
    "confidenceTag": "audited-remaining-batch-039",
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/102058-vlaflip.webp",
    "thumbPath": "/assets/dishes/thumb/102058-vlaflip.webp"
  },
  {
    "id": "griesmeelpudding",
    "metadataCode": "102059",
    "imageCode": "102059",
    "cuisineId": "dutch",
    "names": {
      "en": "Griesmeelpudding",
      "zh": "荷兰粗麦粉布丁",
      "nl": "Griesmeelpudding",
      "local": "Griesmeelpudding"
    },
    "category": "dessert",
    "cookingMethods": [
      "simmered",
      "set",
      "chilled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "Soft semolina pudding, often served cold with red berry sauce.",
      "zh": "柔软粗麦粉布丁，常冷食并配红果酱汁。",
      "nl": "Zachte griesmeelpudding, vaak koud met rode bessensaus."
    },
    "cookingProfile": {
      "en": "Expect a smooth grain-soft pudding rather than a baked cake.",
      "zh": "它是顺滑略有谷物感的布丁，不是烘焙蛋糕。",
      "nl": "Verwacht gladde pudding met zachte korrel, geen gebakken cake."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "sweet"
      ],
      "description": {
        "en": "A Dutch semolina pudding where a soft set texture and berry sauce are common cues.",
        "zh": "荷兰粗麦粉布丁，常见特点是柔软定型和红果酱汁。",
        "nl": "Een griesmeelpudding met zachte structuur en vaak bessensaus."
      }
    },
    "composition": [
      [
        "semolina",
        35,
        "pudding base"
      ],
      [
        "milk-solids",
        35,
        "dairy body"
      ],
      [
        "sugar",
        15,
        "sweetness"
      ],
      [
        "berries",
        10,
        "sauce"
      ],
      [
        "vanilla",
        5,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "semolina pudding",
      "vanilla",
      "berry sauce"
    ],
    "basicTaste": [
      "sweet",
      "milky",
      "mild"
    ],
    "textureProfile": [
      "soft set pudding",
      "smooth spoonfuls",
      "fruit sauce"
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
      "mild"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Choose it for a mild spoon dessert; skip if you want crisp pastry or chocolate intensity.",
      "zh": "想吃温和勺食甜品时可点；想要酥皮或浓巧克力则不合适。",
      "nl": "Kies dit voor een mild lepeldessert; sla over als je krokant gebak of chocolade zoekt."
    },
    "confidenceTag": "audited-remaining-batch-039",
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/102059-griesmeelpudding.webp",
    "thumbPath": "/assets/dishes/thumb/102059-griesmeelpudding.webp"
  },
  {
    "id": "hangop",
    "metadataCode": "102060",
    "imageCode": "102060",
    "cuisineId": "dutch",
    "names": {
      "en": "Hangop",
      "zh": "荷兰滤酸奶甜品",
      "nl": "Hangop",
      "local": "Hangop"
    },
    "category": "dessert",
    "cookingMethods": [
      "chilled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "Thick strained yogurt served cold with fruit, berry sauce, or sugar.",
      "zh": "浓稠滤酸奶冷食，常配水果、莓果酱或糖。",
      "nl": "Dikke uitgelekte yoghurt, koud geserveerd met fruit of saus."
    },
    "cookingProfile": {
      "en": "It is tangy and creamy but lighter than custard or butter cake.",
      "zh": "酸奶感和奶油感明显，但比奶黄或黄油蛋糕更轻。",
      "nl": "Friszuur en romig, maar lichter dan vla of boterkoek."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "sweet"
      ],
      "description": {
        "en": "A Dutch strained yogurt dessert known for thick dairy texture and fruit topping.",
        "zh": "荷兰滤酸奶甜品，重点是浓厚乳制口感和水果配料。",
        "nl": "Een Nederlands dessert van uitgelekte yoghurt met fruit."
      }
    },
    "composition": [
      [
        "yogurt",
        65,
        "strained dairy"
      ],
      [
        "berries",
        20,
        "fruit topping"
      ],
      [
        "sugar",
        10,
        "sweetness"
      ],
      [
        "cream",
        5,
        "optional richness"
      ]
    ],
    "distinctiveFlavorSources": [
      "strained yogurt",
      "berries",
      "light sugar"
    ],
    "basicTaste": [
      "tangy",
      "creamy",
      "fresh"
    ],
    "textureProfile": [
      "thick yogurt",
      "cool spoon dessert",
      "soft fruit"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert",
      "lighter-choice"
    ],
    "avoidIfTags": [
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "A good pick for a cool tangy dessert; skip if dairy tang is not appealing.",
      "zh": "想要冷的微酸奶香甜品时适合；不喜欢酸奶味则不推荐。",
      "nl": "Goed voor een koel friszuur dessert; sla over als yoghurtzuur niet aanspreekt."
    },
    "confidenceTag": "audited-remaining-batch-039",
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/102060-hangop.webp",
    "thumbPath": "/assets/dishes/thumb/102060-hangop.webp"
  },
  {
    "id": "jodenkoek",
    "metadataCode": "102061",
    "imageCode": "102061",
    "cuisineId": "dutch",
    "names": {
      "en": "Jodenkoek",
      "zh": "荷兰大圆黄油饼干",
      "nl": "Jodenkoek",
      "local": "Jodenkoek"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Large, thin, round butter cookies with a crisp snap.",
      "zh": "大而薄的圆形黄油饼干，口感酥脆。",
      "nl": "Grote dunne ronde boterkoeken met krokante beet."
    },
    "cookingProfile": {
      "en": "Expect a simple crisp cookie, not a filled or creamy pastry.",
      "zh": "它是简单酥脆饼干，不是夹馅或奶油点心。",
      "nl": "Verwacht een simpel krokant koekje, geen gevuld of romig gebak."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "sweet"
      ],
      "description": {
        "en": "A large round Dutch butter cookie valued for crisp simplicity.",
        "zh": "荷兰大圆黄油饼干，特点是简单酥脆。",
        "nl": "Een grote ronde Nederlandse boterkoek, vooral krokant en eenvoudig."
      }
    },
    "composition": [
      [
        "wheat-flour",
        45,
        "cookie base"
      ],
      [
        "butter",
        25,
        "richness"
      ],
      [
        "sugar",
        25,
        "sweetness"
      ],
      [
        "vanilla",
        5,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "butter cookie",
      "vanilla",
      "toasted sugar"
    ],
    "basicTaste": [
      "sweet",
      "buttery",
      "mild"
    ],
    "textureProfile": [
      "large crisp cookie",
      "crumbly edge",
      "dry snap"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "sweet-snack",
      "coffee-pairing"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Good as a simple coffee cookie; skip if you want a moist dessert.",
      "zh": "适合配咖啡的简单饼干；想吃湿润甜品时不推荐。",
      "nl": "Goed als simpel koekje bij koffie; sla over als je een sappig dessert wilt."
    },
    "confidenceTag": "audited-remaining-batch-039",
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/102061-jodenkoek.webp",
    "thumbPath": "/assets/dishes/thumb/102061-jodenkoek.webp"
  },
  {
    "id": "salade-lyonnaise",
    "metadataCode": "103031",
    "cuisineId": "french",
    "names": {
      "en": "Salade Lyonnaise",
      "zh": "里昂培根荷包蛋沙拉",
      "nl": "Salade Lyonnaise",
      "local": "Salade lyonnaise"
    },
    "category": "salad",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "A bistro salad of frisée, warm bacon lardons, croutons, and a poached egg, usually more savory and filling than a simple green salad.",
      "zh": "以菊苣生菜、温热培根丁、面包丁和水波蛋组成的里昂小馆沙拉，比普通绿叶沙拉更咸香、更有饱足感。",
      "nl": "Een bistrosalade met frisée, warme spekjes, croutons en gepocheerd ei; hartiger en vullender dan een simpele groene salade."
    },
    "cookingProfile": {
      "en": "Served cool-to-warm, with crisp greens softened by egg yolk, bacon fat, and sharp vinaigrette.",
      "zh": "冷热交错上桌，脆生菜会被蛋黄、培根油脂和酸香油醋汁包裹。",
      "nl": "Koel tot lauwwarm geserveerd, met knapperige sla, eidooier, spekvet en frisse vinaigrette."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "french-depth",
        "classic-dish"
      ],
      "description": {
        "en": "A classic Lyon bistro salad that works as a substantial starter or light lunch.",
        "zh": "里昂小馆经典沙拉，适合作为较有分量的前菜或轻午餐。",
        "nl": "Een klassieke Lyonnaise bistrosalade, geschikt als stevige starter of lichte lunch."
      }
    },
    "composition": [
      [
        "frisee-lettuce",
        35,
        "leafy base"
      ],
      [
        "bacon",
        20,
        "warm salty topping"
      ],
      [
        "egg",
        15,
        "runny yolk"
      ],
      [
        "bread",
        15,
        "croutons"
      ],
      [
        "vinegar",
        10,
        "vinaigrette",
        "seasoning"
      ],
      [
        "mustard",
        5,
        "sharpness",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "bacon lardons",
      "runny egg yolk",
      "mustard vinaigrette"
    ],
    "basicTaste": [
      "savory",
      "tangy",
      "rich"
    ],
    "textureProfile": [
      "crisp frisée",
      "chewy bacon",
      "soft egg yolk",
      "crouton crunch"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-gluten",
      "contains-pork"
    ],
    "goodForTags": [
      "classic-dish",
      "salad",
      "bistro"
    ],
    "orderVerdict": {
      "en": "A good pick if you want a salad that still feels satisfying and salty-rich.",
      "zh": "想点沙拉但又希望有咸香和饱足感时很稳。",
      "nl": "Een goede keuze als je een salade wilt die toch stevig en hartig aanvoelt."
    },
    "weightLevel": 2,
    "metadataConfidence": 0.87
  },
  {
    "id": "galette-complete",
    "metadataCode": "103032",
    "cuisineId": "french",
    "names": {
      "en": "Galette Complète",
      "zh": "布列塔尼荞麦咸可丽饼",
      "nl": "Galette complète",
      "local": "Galette complète"
    },
    "category": "crepe",
    "cookingMethods": [
      "fried",
      "assembled"
    ],
    "shortDescription": {
      "en": "A Breton buckwheat galette folded around ham, cheese, and egg, usually savory, nutty, and meal-like.",
      "zh": "布列塔尼荞麦咸薄饼，常包火腿、奶酪和鸡蛋，吃起来咸香、带坚果感，像一份轻主食。",
      "nl": "Een Bretonse boekweitgalette met ham, kaas en ei; hartig, nootachtig en geschikt als lichte maaltijd."
    },
    "cookingProfile": {
      "en": "Usually griddled thin and folded, with a soft center and lightly crisp buckwheat edges.",
      "zh": "薄饼通常煎得很薄后折起，中间柔软，边缘带一点脆。",
      "nl": "Dun gebakken en gevouwen, met een zachte vulling en licht krokante boekweitranden."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "french-depth",
        "regional-dish"
      ],
      "description": {
        "en": "A Brittany staple and one of the clearest savory crêpe orders on French menus.",
        "zh": "布列塔尼代表性咸薄饼，也是法餐菜单中很典型的咸可丽饼选择。",
        "nl": "Een Bretons basisgerecht en een herkenbare hartige crêpe op Franse menu's."
      }
    },
    "composition": [
      [
        "buckwheat-galette",
        45,
        "base"
      ],
      [
        "ham",
        20,
        "salty filling"
      ],
      [
        "cheese",
        15,
        "melty filling"
      ],
      [
        "egg",
        15,
        "center"
      ],
      [
        "butter",
        5,
        "pan richness"
      ]
    ],
    "distinctiveFlavorSources": [
      "buckwheat galette",
      "ham and melted cheese",
      "egg yolk"
    ],
    "basicTaste": [
      "savory",
      "nutty",
      "mild"
    ],
    "textureProfile": [
      "thin folded pancake",
      "soft egg center",
      "melted cheese"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-dairy",
      "contains-pork"
    ],
    "goodForTags": [
      "regional-dish",
      "first-timer-friendly",
      "crepe"
    ],
    "orderVerdict": {
      "en": "A safe savory order if you want a crêpe-like main without a heavy sauce.",
      "zh": "想吃咸口薄饼主食、又不想要厚重酱汁时很合适。",
      "nl": "Een veilige hartige keuze als je een crêpe-achtig hoofdgerecht zonder zware saus wilt."
    },
    "weightLevel": 2,
    "metadataConfidence": 0.88
  },
  {
    "id": "pissaladiere",
    "metadataCode": "103033",
    "cuisineId": "french",
    "names": {
      "en": "Pissaladière",
      "zh": "普罗旺斯洋葱鳀鱼塔",
      "nl": "Pissaladière",
      "local": "Pissaladière"
    },
    "category": "bread",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "A Provençal onion flatbread topped with caramelized onions, anchovies, and black olives, more briny and onion-sweet than cheesy.",
      "zh": "普罗旺斯风味洋葱扁面包，铺焦糖化洋葱、鳀鱼和黑橄榄，重点是洋葱甜香和咸鲜，不是奶酪披萨。",
      "nl": "Een Provençaalse uienflatbread met gekaramelliseerde ui, ansjovis en zwarte olijven; zilt en uiig, niet kaasachtig."
    },
    "cookingProfile": {
      "en": "Served warm or room temperature, with a soft bread base and concentrated salty-sweet topping.",
      "zh": "常温或温热上桌，面包底柔软，上层咸甜浓缩。",
      "nl": "Warm of op kamertemperatuur, met een zachte broodbodem en geconcentreerde zout-zoete topping."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "french-depth",
        "regional-dish"
      ],
      "description": {
        "en": "A Niçoise/Provençal regional classic for diners who like anchovies and olives.",
        "zh": "尼斯和普罗旺斯一带的地区经典，适合喜欢鳀鱼和橄榄的人。",
        "nl": "Een regionale klassieker uit Nice/Provence voor liefhebbers van ansjovis en olijven."
      }
    },
    "composition": [
      [
        "bread",
        45,
        "flatbread base"
      ],
      [
        "onion",
        25,
        "caramelized topping"
      ],
      [
        "anchovies",
        15,
        "salty topping"
      ],
      [
        "olives",
        10,
        "briny topping"
      ],
      [
        "olive-oil",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "caramelized onions",
      "anchovies",
      "black olives"
    ],
    "basicTaste": [
      "savory",
      "briny",
      "sweet"
    ],
    "textureProfile": [
      "soft flatbread",
      "jammy onion topping",
      "salty anchovy bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-fish"
    ],
    "goodForTags": [
      "regional-dish",
      "bread",
      "anchovy-forward"
    ],
    "orderVerdict": {
      "en": "Order if you enjoy olives and anchovy saltiness; skip if you want a tomato-and-cheese pizza style.",
      "zh": "喜欢橄榄和鳀鱼咸鲜时值得点；想吃番茄奶酪披萨口感则不太像。",
      "nl": "Bestel dit als je olijven en zoute ansjovis waardeert; minder geschikt als je pizza met tomaat en kaas verwacht."
    },
    "weightLevel": 2,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.87
  },
  {
    "id": "socca",
    "metadataCode": "103034",
    "cuisineId": "french",
    "names": {
      "en": "Socca",
      "zh": "尼斯鹰嘴豆煎饼",
      "nl": "Socca",
      "local": "Socca"
    },
    "category": "bread",
    "cookingMethods": [
      "fried",
      "baked"
    ],
    "shortDescription": {
      "en": "A thin Niçoise chickpea pancake, usually cut into wedges and eaten hot with olive oil, salt, and black pepper.",
      "zh": "尼斯鹰嘴豆薄饼，常切成小块热食，只需橄榄油、盐和黑胡椒，口味朴素咸香。",
      "nl": "Een dunne kikkererwtenpannenkoek uit Nice, warm in stukken gegeten met olijfolie, zout en zwarte peper."
    },
    "cookingProfile": {
      "en": "Usually cooked very thin, giving soft centers, browned edges, and a simple street-snack feel.",
      "zh": "通常做得很薄，中间柔软、边缘微焦，像简单的街头小吃。",
      "nl": "Meestal heel dun gebakken, met zachte stukken, gebruinde randjes en een eenvoudige snackachtige indruk."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "french-depth",
        "street-food"
      ],
      "description": {
        "en": "A Niçoise street-food classic and a useful gluten-free-leaning French reference.",
        "zh": "尼斯街头经典，也是法餐里相对偏无麸质印象的参考菜。",
        "nl": "Een klassieker uit de straatkeuken van Nice en een relatief glutenvriendelijke Franse referentie."
      }
    },
    "composition": [
      [
        "chickpea-pancake",
        80,
        "base"
      ],
      [
        "olive-oil",
        10,
        "cooking fat",
        "seasoning"
      ],
      [
        "black-pepper",
        5,
        "finish",
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
      "chickpea batter",
      "olive oil",
      "black pepper"
    ],
    "basicTaste": [
      "savory",
      "nutty",
      "mild"
    ],
    "textureProfile": [
      "thin wedges",
      "soft center",
      "lightly crisp edges"
    ],
    "riskFlags": [],
    "dietaryFlags": [
      "vegan"
    ],
    "goodForTags": [
      "street-food",
      "bread",
      "vegan-friendly"
    ],
    "orderVerdict": {
      "en": "A good small order if you want something simple, salty, and chickpea-nutty.",
      "zh": "想要简单咸香、带鹰嘴豆坚果味的小食时可以点。",
      "nl": "Een goede kleine keuze als je iets eenvoudigs, hartigs en kikkererwtenachtig zoekt."
    },
    "weightLevel": 1,
    "metadataConfidence": 0.88
  },
  {
    "id": "brandade-de-morue",
    "metadataCode": "103035",
    "cuisineId": "french",
    "names": {
      "en": "Brandade de Morue",
      "zh": "法式奶油盐鳕鱼泥",
      "nl": "Brandade de morue",
      "local": "Brandade de morue"
    },
    "category": "fish",
    "cookingMethods": [
      "baked",
      "stirred"
    ],
    "shortDescription": {
      "en": "A creamy salt-cod and potato spread or gratin, mild-looking but distinctly fishy-salty and rich.",
      "zh": "盐鳕鱼和土豆做成的奶油感鱼泥或焗菜，外观看起来温和，但鱼鲜和咸味明显。",
      "nl": "Een romige spread of gratin van gezouten kabeljauw en aardappel; mild van uiterlijk, maar duidelijk zilt en visachtig."
    },
    "cookingProfile": {
      "en": "Often served warm and creamy, sometimes lightly browned on top with bread or toast alongside.",
      "zh": "常温热上桌，质地绵密，有时表面焗到微焦，并配面包。",
      "nl": "Vaak warm en romig geserveerd, soms licht gegratineerd met brood of toast erbij."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "french-depth",
        "classic-dish"
      ],
      "description": {
        "en": "A southern French salt-cod classic, useful for explaining creamy fish dishes on menus.",
        "zh": "法国南部盐鳕鱼经典菜，适合理解菜单上的奶油感鱼泥类菜品。",
        "nl": "Een Zuid-Franse klassieker met gezouten kabeljauw, herkenbaar als romig visgerecht."
      }
    },
    "composition": [
      [
        "salt-cod",
        45,
        "main fish"
      ],
      [
        "potato",
        25,
        "body"
      ],
      [
        "cream",
        10,
        "richness"
      ],
      [
        "olive-oil",
        10,
        "emulsion",
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
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "salt cod",
      "garlic",
      "olive-oil creaminess"
    ],
    "basicTaste": [
      "savory",
      "salty",
      "creamy"
    ],
    "textureProfile": [
      "soft fish mash",
      "creamy body",
      "possible browned top"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-dairy"
    ],
    "goodForTags": [
      "classic-dish",
      "fish",
      "creamy"
    ],
    "orderVerdict": {
      "en": "Best if you like salty fish and creamy textures; it is not a light fresh-fish plate.",
      "zh": "喜欢咸鲜鱼味和奶油绵密口感时适合；它不是清爽鱼排。",
      "nl": "Geschikt als je zoute vis en romigheid prettig vindt; dit is geen lichte verse visfilet."
    },
    "weightLevel": 3,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.86
  },
  {
    "id": "aligot",
    "metadataCode": "103036",
    "cuisineId": "french",
    "names": {
      "en": "Aligot",
      "zh": "奶酪拉丝土豆泥",
      "nl": "Aligot",
      "local": "Aligot"
    },
    "category": "potato",
    "cookingMethods": [
      "boiled",
      "stirred"
    ],
    "shortDescription": {
      "en": "An intensely cheesy mashed potato dish from Auvergne, famous for its stretchy, elastic texture.",
      "zh": "奥弗涅地区的浓郁奶酪土豆泥，以明显拉丝、弹性强的口感出名。",
      "nl": "Een zeer kazige aardappelpuree uit de Auvergne, bekend om zijn rekbare, elastische textuur."
    },
    "cookingProfile": {
      "en": "Served hot and spoonable, with cheese blended through the potato until it pulls in long strands.",
      "zh": "热食上桌，奶酪与土豆泥融合，舀起时会拉出长丝。",
      "nl": "Heet en lepelbaar geserveerd, met kaas door de aardappel tot het lange draden trekt."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "french-depth",
        "regional-dish"
      ],
      "description": {
        "en": "A regional Auvergne comfort dish and a clear example of cheese-heavy French mountain food.",
        "zh": "奥弗涅地区的舒适菜，也是法国山地奶酪重口菜的代表。",
        "nl": "Een regionaal comfortgerecht uit de Auvergne en een duidelijk voorbeeld van kazige Franse bergkost."
      }
    },
    "composition": [
      [
        "potato",
        55,
        "base"
      ],
      [
        "alpine-cheese-blend",
        30,
        "stretchy cheese"
      ],
      [
        "cream",
        5,
        "richness"
      ],
      [
        "butter",
        5,
        "richness"
      ],
      [
        "garlic",
        5,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "melted mountain cheese",
      "buttery potato",
      "garlic"
    ],
    "basicTaste": [
      "savory",
      "creamy",
      "rich"
    ],
    "textureProfile": [
      "very stretchy",
      "smooth potato",
      "elastic cheese pull"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "goodForTags": [
      "regional-dish",
      "comfort-food",
      "cheese"
    ],
    "orderVerdict": {
      "en": "Order when you want a rich cheese-and-potato side or comfort plate; it is heavy.",
      "zh": "想吃浓郁奶酪土豆类配菜或舒适主食时很合适，但会偏厚重。",
      "nl": "Bestel dit als je een rijke kaas-aardappelbijlage of comfortgerecht wilt; het is zwaar."
    },
    "weightLevel": 4,
    "metadataConfidence": 0.88
  },
  {
    "id": "raclette",
    "metadataCode": "103037",
    "cuisineId": "french",
    "names": {
      "en": "Raclette",
      "zh": "融化奶酪配土豆腌肉",
      "nl": "Raclette",
      "local": "Raclette"
    },
    "category": "cheese",
    "cookingMethods": [
      "assembled",
      "grilled"
    ],
    "shortDescription": {
      "en": "Melted raclette cheese served over potatoes, pickles, and often cured meats, usually salty, creamy, and very filling.",
      "zh": "融化的拉克莱特奶酪浇在土豆、酸黄瓜和冷切肉上，通常咸香、奶油感强、很有饱足感。",
      "nl": "Gesmolten raclettekaas over aardappels, augurken en vaak vleeswaren; zout, romig en erg vullend."
    },
    "cookingProfile": {
      "en": "The cheese is melted or scraped hot over simple sides, so the plate revolves around warm dairy richness.",
      "zh": "奶酪热融后刮到配菜上，整盘重点是温热奶香和浓郁度。",
      "nl": "De kaas wordt heet gesmolten of geschraapt over eenvoudige bijgerechten; warme kaasaroma's staan centraal."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "french-depth",
        "regional-dish"
      ],
      "description": {
        "en": "A French-Swiss Alpine cheese dish often seen in winter or mountain-style restaurants.",
        "zh": "法国和瑞士阿尔卑斯地区常见的奶酪菜，冬季或山地风格餐厅很常见。",
        "nl": "Een Frans-Zwitsers Alpenkaasgerecht, vaak in winterse of bergachtige restaurants."
      }
    },
    "composition": [
      [
        "raclette-cheese",
        40,
        "melted main"
      ],
      [
        "potato",
        30,
        "base"
      ],
      [
        "charcuterie",
        15,
        "salty side"
      ],
      [
        "pickles",
        10,
        "sharp side"
      ],
      [
        "bread",
        5,
        "side"
      ]
    ],
    "distinctiveFlavorSources": [
      "melted raclette cheese",
      "cornichons",
      "cured meats"
    ],
    "basicTaste": [
      "savory",
      "salty",
      "creamy"
    ],
    "textureProfile": [
      "molten cheese",
      "soft potato",
      "crisp pickles"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-pork",
      "contains-gluten"
    ],
    "goodForTags": [
      "regional-dish",
      "cheese",
      "sharing"
    ],
    "orderVerdict": {
      "en": "Great for melted-cheese cravings; skip if you want something light or dairy-free.",
      "zh": "想吃融化奶酪时很满足；想要清淡或避奶制品则不适合。",
      "nl": "Sterk bij zin in gesmolten kaas; minder geschikt als je iets lichts of zuivelvrij zoekt."
    },
    "portionType": "shareable",
    "goodForSharing": true,
    "weightLevel": 4,
    "metadataConfidence": 0.88
  },
  {
    "id": "fondue-savoyarde",
    "metadataCode": "103038",
    "cuisineId": "french",
    "names": {
      "en": "Fondue Savoyarde",
      "zh": "萨瓦奶酪火锅",
      "nl": "Fondue Savoyarde",
      "local": "Fondue savoyarde"
    },
    "category": "cheese",
    "cookingMethods": [
      "stirred",
      "assembled"
    ],
    "shortDescription": {
      "en": "A communal pot of melted Alpine cheeses, usually dipped with bread cubes and flavored with wine and garlic.",
      "zh": "一锅共享的阿尔卑斯融化奶酪，常用面包块蘸着吃，带葡萄酒和蒜香。",
      "nl": "Een gedeelde pot gesmolten Alpenkazen, meestal met broodblokjes en tonen van wijn en knoflook."
    },
    "cookingProfile": {
      "en": "Served hot in a pot at the table, so it feels interactive, rich, and strongly cheese-centered.",
      "zh": "热锅上桌，边蘸边吃，互动感强，也非常奶酪浓郁。",
      "nl": "Heet aan tafel in een pot geserveerd; interactief, rijk en volledig kaasgericht."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "french-depth",
        "regional-dish"
      ],
      "description": {
        "en": "A Savoy Alpine classic and one of the most recognizable French cheese-sharing dishes.",
        "zh": "萨瓦地区阿尔卑斯经典菜，也是最有辨识度的法式共享奶酪菜之一。",
        "nl": "Een Savoyaardse Alpenklassieker en een herkenbaar Frans deelgerecht met kaas."
      }
    },
    "composition": [
      [
        "alpine-cheese-blend",
        60,
        "melted base"
      ],
      [
        "bread",
        25,
        "dipper"
      ],
      [
        "red-wine",
        5,
        "wine depth",
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
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "melted Alpine cheese",
      "wine",
      "garlic"
    ],
    "basicTaste": [
      "savory",
      "creamy",
      "rich"
    ],
    "textureProfile": [
      "molten cheese",
      "chewy bread cubes",
      "glossy sauce"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-gluten",
      "contains-alcohol"
    ],
    "goodForTags": [
      "regional-dish",
      "sharing",
      "cheese"
    ],
    "orderVerdict": {
      "en": "Best as a shared order for serious cheese lovers; it is very filling.",
      "zh": "适合奶酪爱好者共享点；分量感和厚重度都很高。",
      "nl": "Het beste als deelgerecht voor echte kaasliefhebbers; het vult sterk."
    },
    "portionType": "shareable",
    "goodForSharing": true,
    "weightLevel": 4,
    "metadataConfidence": 0.88
  },
  {
    "id": "tartare-de-saumon",
    "metadataCode": "103039",
    "cuisineId": "french",
    "names": {
      "en": "Tartare de Saumon",
      "zh": "三文鱼塔塔",
      "nl": "Zalmtartaar",
      "local": "Tartare de saumon"
    },
    "category": "raw-seafood",
    "cookingMethods": [
      "raw",
      "assembled",
      "chilled"
    ],
    "shortDescription": {
      "en": "Finely diced raw salmon dressed with citrus, herbs, and seasoning, usually cool, fresh, and lightly oily.",
      "zh": "切成小丁的生三文鱼，拌柑橘、香草和调味，通常冰凉清爽并带鱼油脂感。",
      "nl": "Fijn gesneden rauwe zalm met citrus, kruiden en dressing; koel, fris en licht vettig."
    },
    "cookingProfile": {
      "en": "Served cold and uncooked, so freshness, seasoning, and raw-fish texture matter most.",
      "zh": "冷食且不加热，重点是新鲜度、调味和生鱼口感。",
      "nl": "Koud en rauw geserveerd, waardoor versheid, kruiding en rauwe vistextuur centraal staan."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "french-depth",
        "modern-bistro"
      ],
      "description": {
        "en": "A common modern French starter for diners comfortable with raw fish.",
        "zh": "现代法式小馆常见前菜，适合能接受生鱼的人。",
        "nl": "Een veelvoorkomende moderne Franse starter voor wie rauwe vis prettig vindt."
      }
    },
    "composition": [
      [
        "salmon",
        65,
        "raw fish"
      ],
      [
        "cucumber",
        10,
        "fresh crunch"
      ],
      [
        "avocado",
        10,
        "creamy optional body"
      ],
      [
        "lemon",
        5,
        "brightness"
      ],
      [
        "olive-oil",
        5,
        "dressing",
        "seasoning"
      ],
      [
        "black-pepper",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "raw salmon",
      "lemon",
      "olive oil"
    ],
    "basicTaste": [
      "fresh",
      "savory",
      "citrusy"
    ],
    "textureProfile": [
      "soft diced salmon",
      "cool dressing",
      "light crunch"
    ],
    "riskFlags": [
      "contains-raw-fish",
      "contains-fish"
    ],
    "goodForTags": [
      "starter",
      "raw-seafood",
      "fresh"
    ],
    "orderVerdict": {
      "en": "A good cold starter if you like raw salmon; avoid if raw fish is a concern.",
      "zh": "喜欢生三文鱼时是清爽前菜；介意生食就避开。",
      "nl": "Een goede koude starter als je rauwe zalm lust; vermijd dit bij zorgen over rauwe vis."
    },
    "weightLevel": 1,
    "metadataConfidence": 0.87
  },
  {
    "id": "magret-de-canard",
    "metadataCode": "103040",
    "cuisineId": "french",
    "names": {
      "en": "Magret de Canard",
      "zh": "煎鸭胸",
      "nl": "Magret de canard",
      "local": "Magret de canard"
    },
    "category": "meat",
    "cookingMethods": [
      "fried",
      "grilled"
    ],
    "shortDescription": {
      "en": "Sliced duck breast with a seared fat cap, usually served pink and richer than chicken but leaner than duck confit.",
      "zh": "带焦香鸭皮脂层的切片鸭胸，通常中心偏粉，比鸡肉浓郁，但比油封鸭腿更清爽。",
      "nl": "Gesneden eendenborst met aangebakken vetlaag, vaak rosé; rijker dan kip maar lichter dan gekonfijte eend."
    },
    "cookingProfile": {
      "en": "Usually pan-seared or grilled, with crisp fat, tender pink meat, and a light sauce or garnish.",
      "zh": "常见为煎或烤，鸭皮脂层香脆，肉心粉嫩，配少量酱汁或配菜。",
      "nl": "Meestal gebakken of gegrild, met krokant vet, rosé vlees en een lichte saus of garnituur."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "french-depth",
        "classic-dish"
      ],
      "description": {
        "en": "A classic French duck main for diners who want a richer poultry dish.",
        "zh": "法餐经典鸭肉主菜，适合想要比鸡肉更浓郁禽肉的人。",
        "nl": "Een klassiek Frans eendenhoofdgerecht voor wie rijker gevogelte zoekt."
      }
    },
    "composition": [
      [
        "duck-breast",
        70,
        "main"
      ],
      [
        "potato",
        10,
        "side"
      ],
      [
        "mixed-vegetables",
        10,
        "side"
      ],
      [
        "red-wine",
        5,
        "sauce depth",
        "seasoning"
      ],
      [
        "black-pepper",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "seared duck fat",
      "pink duck breast",
      "wine sauce"
    ],
    "basicTaste": [
      "savory",
      "rich",
      "meaty"
    ],
    "textureProfile": [
      "crisp fat cap",
      "tender pink meat",
      "light sauce"
    ],
    "riskFlags": [
      "contains-alcohol"
    ],
    "goodForTags": [
      "classic-dish",
      "duck",
      "meat-main"
    ],
    "orderVerdict": {
      "en": "A strong main if you want duck flavor without the heaviness of confit.",
      "zh": "想吃鸭肉香但不想要油封鸭腿那种厚重感时很适合。",
      "nl": "Een sterke keuze als je eend wilt zonder de zwaarte van confit."
    },
    "weightLevel": 3,
    "metadataConfidence": 0.88
  },
  {
    "id": "entrecote-bordelaise",
    "metadataCode": "103041",
    "cuisineId": "french",
    "names": {
      "en": "Entrecôte Bordelaise",
      "zh": "波尔多酱肋眼牛排",
      "nl": "Entrecôte Bordelaise",
      "local": "Entrecôte à la bordelaise"
    },
    "category": "meat",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "A grilled beef entrecôte served with a Bordeaux-style red-wine and shallot sauce, usually richer and more sauce-driven than plain steak frites.",
      "zh": "烤肋眼牛排配波尔多风格红酒葱香酱，比普通牛排薯条更重酱汁和酒香。",
      "nl": "Gegrilde entrecôte met Bordelaise saus van rode wijn en sjalot; rijker en sausgerichter dan gewone steak-frites."
    },
    "cookingProfile": {
      "en": "The steak is grilled or seared, then paired with a glossy wine sauce that adds depth and richness.",
      "zh": "牛排煎烤后配光亮红酒酱，增加浓度和深度。",
      "nl": "De steak wordt gegrild of gebakken en krijgt een glanzende wijnsaus voor diepte en rijkdom."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "french-depth",
        "classic-dish"
      ],
      "description": {
        "en": "A classic French steak order for diners who want a wine-sauce beef main.",
        "zh": "法餐经典牛排选择，适合想要红酒酱牛肉主菜的人。",
        "nl": "Een klassieke Franse steakkeuze voor wie rundvlees met wijnsaus wil."
      }
    },
    "composition": [
      [
        "beef-entrecote",
        65,
        "main"
      ],
      [
        "fries",
        15,
        "side"
      ],
      [
        "red-wine",
        10,
        "Bordelaise sauce",
        "seasoning"
      ],
      [
        "butter",
        5,
        "sauce richness"
      ],
      [
        "onion",
        5,
        "shallot-like aroma"
      ]
    ],
    "distinctiveFlavorSources": [
      "beef entrecôte",
      "red-wine Bordelaise sauce",
      "shallot aroma"
    ],
    "basicTaste": [
      "savory",
      "rich",
      "winey"
    ],
    "textureProfile": [
      "juicy steak",
      "glossy sauce",
      "crisp side"
    ],
    "riskFlags": [
      "contains-alcohol",
      "contains-dairy"
    ],
    "goodForTags": [
      "classic-dish",
      "steak",
      "meat-main"
    ],
    "orderVerdict": {
      "en": "Order if you want a steak with a deeper French sauce rather than a plain grilled plate.",
      "zh": "想要有法式红酒酱深度的牛排时很合适；不是单纯清烤口味。",
      "nl": "Bestel dit als je steak met een diepere Franse saus wilt in plaats van puur gegrild."
    },
    "weightLevel": 4,
    "metadataConfidence": 0.87
  },
  {
    "id": "poulet-basquaise",
    "metadataCode": "103042",
    "cuisineId": "french",
    "names": {
      "en": "Poulet Basquaise",
      "zh": "巴斯克番椒炖鸡",
      "nl": "Poulet Basquaise",
      "local": "Poulet basquaise"
    },
    "category": "meat",
    "cookingMethods": [
      "braised",
      "simmered"
    ],
    "shortDescription": {
      "en": "Chicken braised with peppers, tomatoes, onions, and paprika, giving a colorful, gently sweet-savory Basque-style sauce.",
      "zh": "鸡肉与甜椒、番茄、洋葱和红椒粉一起炖，酱汁颜色鲜明，咸香中带一点蔬菜甜味。",
      "nl": "Kip gestoofd met paprika, tomaat, ui en paprikapoeder, met een kleurrijke zacht zoet-hartige Baskische saus."
    },
    "cookingProfile": {
      "en": "Served hot and saucy, with tender chicken pieces and soft peppers rather than a crisp roast texture.",
      "zh": "热食带酱上桌，鸡肉软嫩、甜椒柔软，不是脆皮烤鸡。",
      "nl": "Warm en sauzig geserveerd, met malse kip en zachte paprika in plaats van krokant gebraad."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "french-depth",
        "regional-dish"
      ],
      "description": {
        "en": "A Basque-influenced French chicken dish for diners who want a saucy but not very heavy main.",
        "zh": "受巴斯克风味影响的法国鸡肉菜，适合想要有酱汁但不过分厚重的主菜。",
        "nl": "Een Baskisch geïnspireerd Frans kipgerecht voor wie een sauzig maar niet te zwaar hoofdgerecht zoekt."
      }
    },
    "composition": [
      [
        "chicken",
        45,
        "main"
      ],
      [
        "bell-pepper",
        25,
        "pepper body"
      ],
      [
        "tomato-sauce",
        15,
        "sauce base",
        "seasoning"
      ],
      [
        "onion",
        10,
        "aroma"
      ],
      [
        "paprika",
        5,
        "pepper warmth",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "sweet peppers",
      "tomato sauce",
      "paprika"
    ],
    "basicTaste": [
      "savory",
      "mildly-sweet",
      "warm"
    ],
    "textureProfile": [
      "tender chicken",
      "soft peppers",
      "saucy base"
    ],
    "riskFlags": [],
    "goodForTags": [
      "regional-dish",
      "chicken",
      "saucy-main"
    ],
    "orderVerdict": {
      "en": "A friendly chicken main if you want something saucy and vegetable-forward without much heat.",
      "zh": "想点有酱汁、有蔬菜甜椒香、但不太辣的鸡肉主菜时很稳。",
      "nl": "Een toegankelijke kipkeuze als je iets sauzigs en paprika-achtigs wilt zonder veel pit."
    },
    "weightLevel": 3,
    "metadataConfidence": 0.87
  },
  {
    "id": "pot-au-feu",
    "metadataCode": "103043",
    "cuisineId": "french",
    "names": {
      "en": "Pot-au-Feu",
      "zh": "法式清炖牛肉蔬菜锅",
      "nl": "Pot-au-feu",
      "local": "Pot-au-feu"
    },
    "category": "stew",
    "cookingMethods": [
      "simmered",
      "boiled"
    ],
    "shortDescription": {
      "en": "A traditional French boiled beef and vegetable dish with broth, carrots, leeks, potatoes, and often mustard on the side.",
      "zh": "传统法式清炖牛肉蔬菜锅，有牛肉、胡萝卜、韭葱、土豆和清汤，常配芥末。",
      "nl": "Een traditioneel Frans gerecht van gekookt rundvlees, bouillon, wortel, prei, aardappel en vaak mosterd erbij."
    },
    "cookingProfile": {
      "en": "Served hot and brothy, with tender beef and soft vegetables rather than a thick stew sauce.",
      "zh": "热汤感上桌，牛肉软、蔬菜软，不是浓稠红酒炖肉那种酱汁。",
      "nl": "Warm en bouillonachtig, met mals rundvlees en zachte groenten in plaats van een dikke stoofsaus."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "french-depth",
        "classic-dish"
      ],
      "description": {
        "en": "A foundational French comfort dish and a useful reference for lighter boiled beef mains.",
        "zh": "法国家常舒适菜基础款，也适合理解较清汤感的牛肉主菜。",
        "nl": "Een basisgerecht uit de Franse comfortkeuken en herkenbaar als lichtere gekookte rundvleesmaaltijd."
      }
    },
    "composition": [
      [
        "beef",
        45,
        "main"
      ],
      [
        "carrot",
        15,
        "vegetable"
      ],
      [
        "leek",
        15,
        "vegetable"
      ],
      [
        "potato",
        15,
        "starch"
      ],
      [
        "broth",
        5,
        "clear broth"
      ],
      [
        "mustard",
        5,
        "side condiment",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "beef broth",
      "root vegetables",
      "mustard side"
    ],
    "basicTaste": [
      "savory",
      "brothy",
      "mild"
    ],
    "textureProfile": [
      "tender beef",
      "soft vegetables",
      "clear broth"
    ],
    "riskFlags": [],
    "goodForTags": [
      "classic-dish",
      "stew",
      "comfort-food"
    ],
    "orderVerdict": {
      "en": "Choose it for gentle, brothy comfort food; not for crispy or strongly sauced meat.",
      "zh": "想要温和清汤感舒适菜时适合；不是脆皮或重酱肉菜。",
      "nl": "Kies dit voor zachte bouillonachtige comfortfood; niet voor krokant of sterk gesausd vlees."
    },
    "weightLevel": 3,
    "metadataConfidence": 0.88
  },
  {
    "id": "navarin-dagneau",
    "metadataCode": "103044",
    "cuisineId": "french",
    "names": {
      "en": "Navarin d'Agneau",
      "zh": "法式羊肉蔬菜炖锅",
      "nl": "Navarin d'agneau",
      "local": "Navarin d'agneau"
    },
    "category": "stew",
    "cookingMethods": [
      "braised",
      "simmered"
    ],
    "shortDescription": {
      "en": "A lamb stew with spring vegetables such as carrots, turnips, peas, and potatoes, usually lighter than a dark red-wine braise.",
      "zh": "羊肉配胡萝卜、芜菁、豌豆和土豆等蔬菜炖成，通常比深色红酒炖菜更清亮。",
      "nl": "Een lamsstoof met lentegroenten zoals wortel, raap, erwten en aardappel; lichter dan een donkere wijnstoof."
    },
    "cookingProfile": {
      "en": "Served warm and saucy with tender lamb and soft vegetables in a medium-bodied stew.",
      "zh": "温热带酱汁上桌，羊肉软嫩，蔬菜柔软，整体中等厚重。",
      "nl": "Warm en sauzig, met mals lamsvlees en zachte groenten in een middelzware stoof."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "french-depth",
        "classic-dish"
      ],
      "description": {
        "en": "A classic French lamb stew, often associated with spring vegetables.",
        "zh": "法式经典羊肉炖菜，常与春季蔬菜搭配。",
        "nl": "Een klassieke Franse lamsstoof, vaak met lentegroenten."
      }
    },
    "composition": [
      [
        "lamb",
        45,
        "main"
      ],
      [
        "carrot",
        15,
        "vegetable"
      ],
      [
        "turnip",
        15,
        "vegetable"
      ],
      [
        "peas",
        10,
        "green vegetable"
      ],
      [
        "potato",
        10,
        "starch"
      ],
      [
        "parsley",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "braised lamb",
      "spring vegetables",
      "herb finish"
    ],
    "basicTaste": [
      "savory",
      "meaty",
      "mild"
    ],
    "textureProfile": [
      "tender lamb",
      "soft vegetables",
      "light stew sauce"
    ],
    "riskFlags": [],
    "goodForTags": [
      "classic-dish",
      "lamb",
      "stew"
    ],
    "orderVerdict": {
      "en": "A good lamb choice if you want stew comfort without a very dark or heavy sauce.",
      "zh": "想吃羊肉炖菜但不想要特别深色厚重酱汁时很合适。",
      "nl": "Een goede lamskeuze als je stoofcomfort wilt zonder heel donkere of zware saus."
    },
    "weightLevel": 3,
    "metadataConfidence": 0.86
  },
  {
    "id": "quenelles",
    "metadataCode": "103045",
    "cuisineId": "french",
    "names": {
      "en": "Quenelles",
      "zh": "里昂鱼肉丸配奶油酱",
      "nl": "Quenelles",
      "local": "Quenelles"
    },
    "category": "fish",
    "cookingMethods": [
      "boiled",
      "baked"
    ],
    "shortDescription": {
      "en": "Soft oval dumplings, often made with pike or fish mousse, served in a creamy sauce such as Nantua sauce.",
      "zh": "椭圆形软鱼肉丸，常用梭子鱼或鱼慕斯制成，配奶油感酱汁，例如南图阿酱。",
      "nl": "Zachte ovale dumplings, vaak van snoek of vismousse, geserveerd in een romige saus zoals Nantua."
    },
    "cookingProfile": {
      "en": "Usually poached then sauced or baked briefly, so expect a soft, airy dumpling in rich sauce.",
      "zh": "通常先汆熟再配酱或短暂焗烤，口感是柔软轻盈的鱼肉丸加浓郁酱汁。",
      "nl": "Meestal gepocheerd en daarna gesausd of kort gebakken; zacht en luchtig in rijke saus."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "french-depth",
        "regional-dish"
      ],
      "description": {
        "en": "A Lyon-style regional dish with a distinctive soft fish-dumpling texture.",
        "zh": "里昂风格地区菜，特点是柔软鱼肉丸口感。",
        "nl": "Een Lyonnaise regionale specialiteit met een opvallend zachte visdumplingtextuur."
      }
    },
    "composition": [
      [
        "pike-quenelle",
        60,
        "main dumpling"
      ],
      [
        "cream",
        20,
        "sauce"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "tomato-sauce",
        5,
        "sauce color",
        "seasoning"
      ],
      [
        "black-pepper",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pike quenelle",
      "cream sauce",
      "butter"
    ],
    "basicTaste": [
      "savory",
      "creamy",
      "mild"
    ],
    "textureProfile": [
      "soft oval dumpling",
      "airy fish mousse",
      "rich sauce"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-dairy",
      "contains-egg",
      "contains-gluten"
    ],
    "goodForTags": [
      "regional-dish",
      "fish",
      "creamy"
    ],
    "orderVerdict": {
      "en": "Order if soft dumpling texture and creamy fish sauce sound appealing; avoid if you dislike mousse-like textures.",
      "zh": "喜欢柔软丸子和奶油鱼酱时可以点；不喜欢慕斯感口感则慎选。",
      "nl": "Bestel dit als zachte dumplingstructuur en romige vissaus je aanspreken; minder geschikt bij afkeer van mousseachtige textuur."
    },
    "weightLevel": 3,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.86
  },
  {
    "id": "cuisses-de-grenouille",
    "metadataCode": "103046",
    "cuisineId": "french",
    "names": {
      "en": "Cuisses de Grenouille",
      "zh": "法式田鸡腿",
      "nl": "Kikkerbillen",
      "local": "Cuisses de grenouille"
    },
    "category": "meat",
    "cookingMethods": [
      "fried"
    ],
    "shortDescription": {
      "en": "Frog legs sautéed in garlic, parsley, and butter, with a delicate chicken-like texture and small bones.",
      "zh": "田鸡腿常用蒜、欧芹和黄油煎香，肉质细嫩接近鸡肉，但有小骨头。",
      "nl": "Kikkerbillen gebakken met knoflook, peterselie en boter; delicaat kipachtig vlees met kleine botjes."
    },
    "cookingProfile": {
      "en": "Served hot with garlic-parsley butter, so the bite is tender, lightly crisped, and aromatic.",
      "zh": "热食配蒜香欧芹黄油，外层微香，肉质细嫩。",
      "nl": "Warm geserveerd met knoflook-peterselieboter; mals, licht aangebakken en aromatisch."
    },
    "cuisineRole": {
      "level": "niche",
      "tags": [
        "french-depth",
        "acquired-taste"
      ],
      "description": {
        "en": "A famous but niche French order, best for diners comfortable with small-boned meats.",
        "zh": "有名但偏小众的法餐选择，适合能接受小骨肉类的人。",
        "nl": "Een bekende maar niche Franse keuze, vooral voor wie klein botvlees prettig vindt."
      }
    },
    "composition": [
      [
        "frog-legs",
        75,
        "main"
      ],
      [
        "butter",
        10,
        "sauté richness"
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
      "frog legs",
      "garlic-parsley butter",
      "lemon"
    ],
    "basicTaste": [
      "savory",
      "buttery",
      "garlicky"
    ],
    "textureProfile": [
      "small-boned pieces",
      "tender white meat",
      "buttery surface"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "goodForTags": [
      "regional-dish",
      "adventurous",
      "small-plate"
    ],
    "orderVerdict": {
      "en": "Try it if you are curious and comfortable with small bones; the flavor is milder than the idea sounds.",
      "zh": "好奇且能接受小骨头时可以尝试；实际味道通常比名字听起来温和。",
      "nl": "Probeer het als je nieuwsgierig bent en kleine botjes oké vindt; de smaak is milder dan het klinkt."
    },
    "weightLevel": 2,
    "acquiredTasteLevel": 3,
    "metadataConfidence": 0.86
  },
  {
    "id": "pate-de-campagne",
    "metadataCode": "103047",
    "cuisineId": "french",
    "names": {
      "en": "Pâté de Campagne",
      "zh": "乡村肉酱冻",
      "nl": "Pâté de campagne",
      "local": "Pâté de campagne"
    },
    "category": "starter",
    "cookingMethods": [
      "set",
      "chilled"
    ],
    "shortDescription": {
      "en": "A rustic country pâté sliced cold and served with bread, cornichons, and mustard, usually porky, peppery, and dense.",
      "zh": "冷切乡村肉酱冻，常配面包、酸黄瓜和芥末，猪肉香、胡椒感和密实口感明显。",
      "nl": "Een rustieke koude paté met brood, cornichons en mosterd; varkensachtig, peperig en stevig."
    },
    "cookingProfile": {
      "en": "Served cold in slices, so it eats like a dense charcuterie starter rather than a warm meat dish.",
      "zh": "冷切片上桌，吃起来像密实冷肉前菜，不是热肉主菜。",
      "nl": "Koud in plakken geserveerd; meer een stevige charcuteriestarter dan warm vlees."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "french-depth",
        "classic-dish"
      ],
      "description": {
        "en": "A classic French charcuterie starter often found on bistro boards.",
        "zh": "法式冷肉前菜经典，常见于小馆拼盘。",
        "nl": "Een klassieke Franse charcuteriestarter, vaak op bistroplanken."
      }
    },
    "composition": [
      [
        "country-pate",
        65,
        "main slice"
      ],
      [
        "bread",
        15,
        "side"
      ],
      [
        "pickles",
        10,
        "cornichons"
      ],
      [
        "mustard",
        5,
        "sharp side",
        "seasoning"
      ],
      [
        "black-pepper",
        5,
        "pepper note",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "country pâté",
      "cornichons",
      "mustard"
    ],
    "basicTaste": [
      "savory",
      "salty",
      "peppery"
    ],
    "textureProfile": [
      "dense slice",
      "coarse meat texture",
      "crisp pickles"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-gluten"
    ],
    "goodForTags": [
      "classic-dish",
      "charcuterie",
      "starter"
    ],
    "orderVerdict": {
      "en": "Good if you like rustic charcuterie; skip if cold dense meat is not your thing.",
      "zh": "喜欢乡村风冷肉前菜时适合；不喜欢冷的密实肉酱则慎选。",
      "nl": "Goed als je rustieke charcuterie lust; minder geschikt als koude stevige vleespaté je niet aanspreekt."
    },
    "weightLevel": 3,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.87
  },
  {
    "id": "rillettes",
    "metadataCode": "103048",
    "cuisineId": "french",
    "names": {
      "en": "Rillettes",
      "zh": "法式猪肉丝抹酱",
      "nl": "Rillettes",
      "local": "Rillettes"
    },
    "category": "starter",
    "cookingMethods": [
      "set",
      "chilled"
    ],
    "shortDescription": {
      "en": "A shredded meat spread, usually pork, served cool with bread and pickles; rich, salty, and softer than pâté.",
      "zh": "肉丝状冷抹酱，通常以猪肉为主，配面包和酸黄瓜，比肉酱冻更松软、更油润。",
      "nl": "Een draadjesvleesspread, meestal van varken, koel met brood en augurk; rijk, zout en zachter dan paté."
    },
    "cookingProfile": {
      "en": "Served as a cool spread, so expect a rich, shreddy texture rather than slices of meat.",
      "zh": "作为冷抹酱上桌，重点是油润肉丝感，不是肉片。",
      "nl": "Als koele spread geserveerd; verwacht rijke draadjesstructuur in plaats van plakjes vlees."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "french-depth",
        "classic-dish"
      ],
      "description": {
        "en": "A classic French charcuterie item, often ordered with bread before the main course.",
        "zh": "法式冷肉经典，常作为主菜前配面包的小前菜。",
        "nl": "Een klassiek Frans charcuterie-item, vaak met brood voor het hoofdgerecht."
      }
    },
    "composition": [
      [
        "pork-rillettes",
        70,
        "spread"
      ],
      [
        "bread",
        15,
        "side"
      ],
      [
        "pickles",
        10,
        "sharp side"
      ],
      [
        "mustard",
        5,
        "optional side",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "slow-cooked pork",
      "fat-rich spread",
      "cornichons"
    ],
    "basicTaste": [
      "savory",
      "salty",
      "rich"
    ],
    "textureProfile": [
      "shredded spread",
      "soft fat-rich texture",
      "crisp pickles"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-gluten"
    ],
    "goodForTags": [
      "classic-dish",
      "charcuterie",
      "starter"
    ],
    "orderVerdict": {
      "en": "A strong starter if you like rich pork spread on bread; it is small but not light.",
      "zh": "喜欢把浓郁猪肉抹酱配面包吃时很适合；分量小但不清淡。",
      "nl": "Een sterke starter als je rijke varkensspread op brood lust; klein maar niet licht."
    },
    "weightLevel": 3,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.87
  },
  {
    "id": "terrine",
    "metadataCode": "103049",
    "cuisineId": "french",
    "names": {
      "en": "Terrine",
      "zh": "法式冷肉冻或蔬菜冻",
      "nl": "Terrine",
      "local": "Terrine"
    },
    "category": "starter",
    "cookingMethods": [
      "set",
      "chilled",
      "layered"
    ],
    "shortDescription": {
      "en": "A chilled molded slice, often meat, fish, or vegetable layers, served as a starter with pickles or salad.",
      "zh": "冷藏定型后切片的前菜，可是肉、鱼或蔬菜层，常配酸黄瓜或小沙拉。",
      "nl": "Een gekoelde vormplak, vaak vlees-, vis- of groentelagen, als starter met augurk of salade."
    },
    "cookingProfile": {
      "en": "Served cold in neat slices, so the main experience is firm, set, and lightly savory.",
      "zh": "冷切片上桌，核心体验是定型、紧实、轻咸。",
      "nl": "Koud in nette plakken geserveerd; de ervaring is stevig, gezet en licht hartig."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "french-depth",
        "bistro-starter"
      ],
      "description": {
        "en": "A flexible French starter format that signals a cold composed slice rather than a hot stew.",
        "zh": "法式前菜中很常见的冷切定型形式，提示它不是热炖菜。",
        "nl": "Een flexibel Frans starterformat dat een koude samengestelde plak aanduidt, geen warme stoof."
      }
    },
    "composition": [
      [
        "terrine-slice",
        70,
        "main slice"
      ],
      [
        "pickles",
        10,
        "sharp side"
      ],
      [
        "bread",
        10,
        "side"
      ],
      [
        "mustard",
        5,
        "condiment",
        "seasoning"
      ],
      [
        "mixed-vegetables",
        5,
        "garnish"
      ]
    ],
    "distinctiveFlavorSources": [
      "set terrine slice",
      "pickles",
      "mustard"
    ],
    "basicTaste": [
      "savory",
      "mild",
      "tangy"
    ],
    "textureProfile": [
      "firm chilled slice",
      "layered or coarse interior",
      "crisp pickles"
    ],
    "riskFlags": [
      "contains-gluten"
    ],
    "goodForTags": [
      "starter",
      "bistro",
      "cold-plate"
    ],
    "orderVerdict": {
      "en": "Order if a cold composed starter sounds appealing; ask what type if you avoid pork, fish, or gelatin.",
      "zh": "想点冷盘式前菜时可以；如果避猪肉、鱼或明胶，最好确认具体种类。",
      "nl": "Bestel dit als een koude samengestelde starter je aanspreekt; vraag naar de soort bij vermijden van varken, vis of gelatine."
    },
    "weightLevel": 2,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.84
  },
  {
    "id": "plateau-de-fromages",
    "metadataCode": "103050",
    "cuisineId": "french",
    "names": {
      "en": "Plateau de Fromages",
      "zh": "法式奶酪拼盘",
      "nl": "Franse kaasplank",
      "local": "Plateau de fromages"
    },
    "category": "cheese",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "A French cheese board with several cheeses, often served after the main course or as a sharing plate with bread and fruit.",
      "zh": "多种法国奶酪组成的拼盘，常在主菜后或作为共享冷盘，配面包和水果。",
      "nl": "Een Franse kaasplank met meerdere kazen, vaak na het hoofdgerecht of als deelplank met brood en fruit."
    },
    "cookingProfile": {
      "en": "Served at room temperature or cool, so aromas and texture vary from creamy to firm and pungent.",
      "zh": "常温或微凉上桌，奶酪香气和质地会从柔软奶油感到硬质浓烈都有。",
      "nl": "Op kamertemperatuur of koel; aroma en structuur lopen van romig tot stevig en uitgesproken."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "french-depth",
        "classic-dish"
      ],
      "description": {
        "en": "A classic French end-of-meal option and a useful signal for diners who want cheese rather than dessert.",
        "zh": "法餐经典餐末选择，适合想用奶酪替代甜点的人。",
        "nl": "Een klassieke Franse afsluiter voor wie kaas in plaats van dessert wil."
      }
    },
    "composition": [
      [
        "cheese",
        65,
        "assorted cheeses"
      ],
      [
        "bread",
        20,
        "side"
      ],
      [
        "almonds",
        5,
        "nut side"
      ],
      [
        "olives",
        5,
        "briny side"
      ],
      [
        "fruit-sauce-or-caramel",
        5,
        "sweet accent"
      ]
    ],
    "distinctiveFlavorSources": [
      "assorted French cheeses",
      "bread",
      "sweet or nut side"
    ],
    "basicTaste": [
      "savory",
      "creamy",
      "salty"
    ],
    "textureProfile": [
      "mixed cheese textures",
      "crusty bread",
      "small sweet accents"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-gluten",
      "contains-tree-nut"
    ],
    "goodForTags": [
      "classic-dish",
      "sharing",
      "cheese"
    ],
    "orderVerdict": {
      "en": "A good shared or after-main order for cheese lovers; check if strong cheeses are included.",
      "zh": "适合奶酪爱好者共享或餐后点；如果怕重口奶酪，先看拼盘内容。",
      "nl": "Goed om te delen of na het hoofdgerecht voor kaasliefhebbers; check of er sterke kazen bij zitten."
    },
    "portionType": "shareable",
    "goodForSharing": true,
    "weightLevel": 3,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.86
  },
  {
    "id": "charcuterie-board-french",
    "metadataCode": "103051",
    "cuisineId": "french",
    "names": {
      "en": "French Charcuterie Board",
      "zh": "法式熟肉拼盘",
      "nl": "Franse charcuterieplank",
      "local": "Planche de charcuterie"
    },
    "category": "starter",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "A board of cured meats, pâté or rillettes, pickles, mustard, and bread, built for sharing and salty snacking.",
      "zh": "由冷切肉、肉酱冻或肉丝抹酱、酸黄瓜、芥末和面包组成的共享熟肉拼盘，咸香开胃。",
      "nl": "Een plank met vleeswaren, paté of rillettes, augurk, mosterd en brood; bedoeld om zoutig te delen."
    },
    "cookingProfile": {
      "en": "Served cold or room temperature as a grazing plate, so it is more about cured flavors than hot cooking.",
      "zh": "冷盘或常温上桌，重点是腌制熟肉风味，不是热菜烹调感。",
      "nl": "Koud of op kamertemperatuur als plank; draait om gepekelde vleessmaken, niet om warme bereiding."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "french-depth",
        "bistro-starter"
      ],
      "description": {
        "en": "A common French bistro sharing board and a useful alias target for planche de charcuterie menus.",
        "zh": "法式小馆常见共享冷肉盘，也适合匹配菜单里的熟肉拼盘类写法。",
        "nl": "Een veelvoorkomende Franse bistrodeelplank en bruikbaar voor planche de charcuterie op menu's."
      }
    },
    "composition": [
      [
        "charcuterie",
        45,
        "cured meats"
      ],
      [
        "country-pate",
        15,
        "pâté portion"
      ],
      [
        "pork-rillettes",
        15,
        "spread"
      ],
      [
        "bread",
        15,
        "side"
      ],
      [
        "pickles",
        5,
        "sharp side"
      ],
      [
        "mustard",
        5,
        "condiment",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "cured meats",
      "pâté and rillettes",
      "mustard and cornichons"
    ],
    "basicTaste": [
      "savory",
      "salty",
      "rich"
    ],
    "textureProfile": [
      "silky cured meat",
      "spreadable pâté",
      "crisp pickles"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-gluten"
    ],
    "goodForTags": [
      "sharing",
      "charcuterie",
      "starter"
    ],
    "orderVerdict": {
      "en": "Best for sharing before mains or with drinks; not a light vegetarian starter.",
      "zh": "适合主菜前或配酒共享；不是清淡素食前菜。",
      "nl": "Het best om te delen voor het hoofdgerecht of bij drankjes; geen lichte vegetarische starter."
    },
    "portionType": "shareable",
    "goodForSharing": true,
    "weightLevel": 3,
    "metadataConfidence": 0.86
  },
  {
    "id": "ile-flottante",
    "metadataCode": "103052",
    "cuisineId": "french",
    "names": {
      "en": "Île Flottante",
      "zh": "漂浮岛蛋白甜点",
      "nl": "Île flottante",
      "local": "Île flottante"
    },
    "category": "dessert",
    "cookingMethods": [
      "set",
      "chilled"
    ],
    "shortDescription": {
      "en": "A poached meringue island floating on vanilla custard, often finished with caramel and almonds.",
      "zh": "水煮蛋白霜漂在香草蛋奶酱上的甜点，常加焦糖和杏仁片。",
      "nl": "Een gepocheerd meringue-eiland op vanillecustard, vaak met karamel en amandel."
    },
    "cookingProfile": {
      "en": "Served cool and soft, with airy meringue over smooth custard rather than cake or pastry.",
      "zh": "冷食或微凉上桌，轻盈蛋白霜配顺滑蛋奶酱，不是蛋糕或酥皮。",
      "nl": "Koel en zacht geserveerd, met luchtige meringue op gladde custard in plaats van cake of deeg."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "french-depth",
        "classic-dessert"
      ],
      "description": {
        "en": "A classic French custard dessert for diners who want something light-textured but creamy.",
        "zh": "法式经典蛋奶甜点，适合想要轻盈口感但仍有奶油感的人。",
        "nl": "Een klassiek Frans custarddessert voor wie iets luchtigs maar romigs zoekt."
      }
    },
    "composition": [
      [
        "meringue",
        40,
        "floating island"
      ],
      [
        "creme-anglaise",
        40,
        "custard base"
      ],
      [
        "fruit-sauce-or-caramel",
        10,
        "caramel finish"
      ],
      [
        "almonds",
        10,
        "crunch"
      ]
    ],
    "distinctiveFlavorSources": [
      "airy meringue",
      "vanilla custard",
      "caramel"
    ],
    "basicTaste": [
      "sweet",
      "creamy",
      "vanilla"
    ],
    "textureProfile": [
      "airy meringue",
      "smooth custard",
      "light almond crunch"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-dairy",
      "contains-tree-nut"
    ],
    "goodForTags": [
      "classic-dessert",
      "light-dessert",
      "custard"
    ],
    "orderVerdict": {
      "en": "A nice dessert if you want soft custard and meringue without pastry heaviness.",
      "zh": "想吃蛋奶酱和蛋白霜、但不想要酥皮厚重感时适合。",
      "nl": "Een fijn dessert als je zachte custard en meringue wilt zonder zwaar deeg."
    },
    "weightLevel": 2,
    "metadataConfidence": 0.87
  },
  {
    "id": "clafoutis",
    "metadataCode": "103053",
    "cuisineId": "french",
    "names": {
      "en": "Clafoutis",
      "zh": "法式樱桃蛋奶烤布丁",
      "nl": "Clafoutis",
      "local": "Clafoutis"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked",
      "set"
    ],
    "shortDescription": {
      "en": "A baked French custard dessert, classically with cherries, sitting between flan, pancake, and soft cake.",
      "zh": "法式烤蛋奶甜点，经典款放樱桃，口感介于布丁、薄饼和软蛋糕之间。",
      "nl": "Een gebakken Frans custarddessert, klassiek met kersen, tussen flan, pannenkoek en zachte cake in."
    },
    "cookingProfile": {
      "en": "Served warm or room temperature, softly set with fruit embedded throughout.",
      "zh": "可温热或常温上桌，蛋奶体柔软定型，水果嵌在其中。",
      "nl": "Warm of op kamertemperatuur, zacht gezet met fruit door het beslag."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "french-depth",
        "classic-dessert"
      ],
      "description": {
        "en": "A classic rustic French dessert, especially associated with cherries.",
        "zh": "法式乡村经典甜点，尤其常与樱桃相关。",
        "nl": "Een klassiek rustiek Frans dessert, vooral bekend met kersen."
      }
    },
    "composition": [
      [
        "cherries",
        35,
        "fruit"
      ],
      [
        "egg",
        20,
        "custard set"
      ],
      [
        "cream",
        15,
        "custard richness"
      ],
      [
        "wheat-flour",
        15,
        "body"
      ],
      [
        "sugar",
        10,
        "sweetness"
      ],
      [
        "butter",
        5,
        "richness"
      ]
    ],
    "distinctiveFlavorSources": [
      "cherries",
      "egg custard",
      "light batter"
    ],
    "basicTaste": [
      "sweet",
      "fruity",
      "creamy"
    ],
    "textureProfile": [
      "soft set custard",
      "juicy fruit",
      "tender cake-like bite"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-dairy",
      "contains-gluten"
    ],
    "goodForTags": [
      "classic-dessert",
      "fruit-dessert",
      "custard"
    ],
    "orderVerdict": {
      "en": "Order if you like soft baked custard and fruit rather than a crisp pastry.",
      "zh": "喜欢柔软烤蛋奶和水果感时适合；它不是酥脆塔皮甜点。",
      "nl": "Bestel dit als je zachte gebakken custard met fruit wilt, niet iets krokants."
    },
    "weightLevel": 2,
    "metadataConfidence": 0.87
  },
  {
    "id": "mille-feuille",
    "metadataCode": "103054",
    "cuisineId": "french",
    "names": {
      "en": "Mille-Feuille",
      "zh": "法式拿破仑千层酥",
      "nl": "Millefeuille",
      "local": "Mille-feuille"
    },
    "category": "dessert",
    "cookingMethods": [
      "layered",
      "baked"
    ],
    "shortDescription": {
      "en": "A layered pastry of crisp puff pastry and vanilla pastry cream, often finished with icing or powdered sugar.",
      "zh": "酥脆千层酥皮夹香草卡仕达奶油，表面常有糖霜或糖粉。",
      "nl": "Een gelaagd gebak van krokant bladerdeeg en vanilleroom, vaak met glazuur of poedersuiker."
    },
    "cookingProfile": {
      "en": "Served cool or room temperature, with crisp flaky layers that crack into soft cream.",
      "zh": "冷食或常温上桌，酥皮层会碎裂进柔软奶油里。",
      "nl": "Koel of op kamertemperatuur, met krokante lagen die breken in zachte room."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "french-depth",
        "classic-dessert"
      ],
      "description": {
        "en": "A classic French pâtisserie dessert and a strong signal for flaky pastry texture.",
        "zh": "法式甜点店经典，重点是千层酥皮口感。",
        "nl": "Een klassiek Frans patisseriedessert met duidelijke bladerdeegstructuur."
      }
    },
    "composition": [
      [
        "puff-pastry",
        45,
        "flaky layers"
      ],
      [
        "vanilla-custard",
        35,
        "cream filling"
      ],
      [
        "sugar",
        10,
        "sweet finish"
      ],
      [
        "butter",
        10,
        "pastry richness"
      ]
    ],
    "distinctiveFlavorSources": [
      "puff pastry",
      "vanilla pastry cream",
      "powdered sugar or glaze"
    ],
    "basicTaste": [
      "sweet",
      "creamy",
      "buttery"
    ],
    "textureProfile": [
      "crisp flaky layers",
      "soft cream",
      "delicate shatter"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "contains-egg"
    ],
    "goodForTags": [
      "classic-dessert",
      "pastry",
      "patisserie"
    ],
    "orderVerdict": {
      "en": "Great if you want crisp pastry plus cream; it can be messy but rewarding.",
      "zh": "想吃酥皮和奶油组合时很适合；吃起来可能会碎但很满足。",
      "nl": "Sterk als je krokant deeg met room wilt; wat rommelig maar de moeite waard."
    },
    "weightLevel": 3,
    "metadataConfidence": 0.88
  },
  {
    "id": "eclair",
    "metadataCode": "103055",
    "cuisineId": "french",
    "names": {
      "en": "Éclair",
      "zh": "法式闪电泡芙",
      "nl": "Éclair",
      "local": "Éclair"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "An oblong choux pastry filled with cream or custard and topped with chocolate or flavored glaze.",
      "zh": "长条泡芙，内部填奶油或卡仕达，表面常有巧克力或风味糖霜。",
      "nl": "Een langwerpige soes gevuld met room of custard en afgewerkt met chocolade of glazuur."
    },
    "cookingProfile": {
      "en": "Served cool, with a soft airy shell, creamy filling, and a glossy sweet top.",
      "zh": "冷食或微凉上桌，外壳轻软，中间奶油感，表面甜润光亮。",
      "nl": "Koel geserveerd, met een luchtige zachte schaal, romige vulling en glanzende zoete bovenkant."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "french-depth",
        "classic-dessert"
      ],
      "description": {
        "en": "A classic French pâtisserie item and a familiar cream-filled dessert choice.",
        "zh": "法式甜点店经典，也是常见的奶油夹心甜点。",
        "nl": "Een klassiek Frans patisseriegebak en herkenbaar roomgevuld dessert."
      }
    },
    "composition": [
      [
        "choux-pastry",
        40,
        "shell"
      ],
      [
        "cream",
        30,
        "filling"
      ],
      [
        "chocolate",
        15,
        "glaze"
      ],
      [
        "sugar",
        10,
        "sweetness"
      ],
      [
        "butter",
        5,
        "pastry richness"
      ]
    ],
    "distinctiveFlavorSources": [
      "choux pastry",
      "cream filling",
      "chocolate glaze"
    ],
    "basicTaste": [
      "sweet",
      "creamy",
      "chocolatey"
    ],
    "textureProfile": [
      "soft pastry shell",
      "creamy filling",
      "glossy glaze"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "goodForTags": [
      "classic-dessert",
      "patisserie",
      "cream-filled"
    ],
    "orderVerdict": {
      "en": "A reliable pastry pick if you want cream and chocolate without a large cake portion.",
      "zh": "想吃奶油和巧克力、又不想点大块蛋糕时很稳。",
      "nl": "Een betrouwbare keuze voor room en chocolade zonder groot stuk cake."
    },
    "weightLevel": 2,
    "metadataConfidence": 0.88
  },
  {
    "id": "macaron",
    "metadataCode": "103056",
    "cuisineId": "french",
    "names": {
      "en": "Macaron",
      "zh": "法式马卡龙",
      "nl": "Macaron",
      "local": "Macaron"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "A delicate almond meringue sandwich cookie with a creamy filling, known for crisp shells and chewy centers.",
      "zh": "以杏仁蛋白霜壳夹奶油馅的小甜点，外壳轻脆，中间略有嚼劲。",
      "nl": "Een delicate amandel-meringue sandwichkoek met romige vulling, krokant van buiten en chewy binnenin."
    },
    "cookingProfile": {
      "en": "Served cool or room temperature, with small, sweet, fragile shells rather than a soft cake texture.",
      "zh": "冷食或常温，小巧、甜度高、外壳脆弱，不是柔软蛋糕口感。",
      "nl": "Koel of op kamertemperatuur, klein, zoet en breekbaar; geen zachte cake."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "french-depth",
        "classic-dessert"
      ],
      "description": {
        "en": "A globally recognized French pâtisserie sweet, useful for dessert matching and allergen warnings.",
        "zh": "全球熟知的法式甜点，适合做甜点匹配和过敏提醒。",
        "nl": "Een wereldwijd herkenbaar Frans patisseriesnoepje, nuttig voor dessertmatching en allergenen."
      }
    },
    "composition": [
      [
        "almonds",
        35,
        "almond shell"
      ],
      [
        "sugar",
        30,
        "shell sweetness"
      ],
      [
        "egg",
        20,
        "meringue structure"
      ],
      [
        "cream",
        10,
        "filling"
      ],
      [
        "butter",
        5,
        "filling richness"
      ]
    ],
    "distinctiveFlavorSources": [
      "almond meringue",
      "buttercream or ganache",
      "flavored filling"
    ],
    "basicTaste": [
      "sweet",
      "nutty",
      "creamy"
    ],
    "textureProfile": [
      "crisp shell",
      "chewy center",
      "smooth filling"
    ],
    "riskFlags": [
      "contains-tree-nut",
      "contains-egg",
      "contains-dairy"
    ],
    "goodForTags": [
      "classic-dessert",
      "patisserie",
      "small-sweet"
    ],
    "orderVerdict": {
      "en": "Good as a small sweet bite; avoid with almond or egg allergies.",
      "zh": "适合作为小甜点；杏仁或鸡蛋过敏者应避开。",
      "nl": "Goed als kleine zoete hap; vermijden bij amandel- of ei-allergie."
    },
    "weightLevel": 1,
    "metadataConfidence": 0.89
  },
  {
    "id": "tarte-au-citron",
    "metadataCode": "103057",
    "cuisineId": "french",
    "names": {
      "en": "Tarte au Citron",
      "zh": "柠檬塔",
      "nl": "Citroentaart",
      "local": "Tarte au citron"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked",
      "set"
    ],
    "shortDescription": {
      "en": "A lemon tart with crisp pastry and bright lemon curd, sometimes topped with meringue.",
      "zh": "酥皮柠檬塔，内馅是明亮酸甜的柠檬凝乳，有时加蛋白霜。",
      "nl": "Een citroentaart met krokante bodem en frisse lemon curd, soms met meringue."
    },
    "cookingProfile": {
      "en": "Served cool, with a firm tart shell and smooth filling that tastes sharper than most creamy desserts.",
      "zh": "冷食上桌，塔壳酥脆，馅料顺滑，酸度比多数奶油甜点更突出。",
      "nl": "Koel geserveerd, met stevige bodem en gladde vulling die frisser en zuurder is dan veel romige desserts."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "french-depth",
        "classic-dessert"
      ],
      "description": {
        "en": "A classic French tart for diners who prefer citrus brightness over chocolate or heavy cream.",
        "zh": "法式经典塔类甜点，适合偏好柑橘酸香而不是巧克力或厚奶油的人。",
        "nl": "Een klassieke Franse taart voor wie citrusfrisheid boven chocolade of zware room verkiest."
      }
    },
    "composition": [
      [
        "pastry-crust",
        35,
        "tart shell"
      ],
      [
        "lemon-curd",
        35,
        "lemon filling"
      ],
      [
        "egg",
        10,
        "set"
      ],
      [
        "sugar",
        10,
        "sweetness"
      ],
      [
        "butter",
        10,
        "richness"
      ]
    ],
    "distinctiveFlavorSources": [
      "lemon curd",
      "buttery tart shell",
      "optional meringue"
    ],
    "basicTaste": [
      "sweet",
      "sour",
      "buttery"
    ],
    "textureProfile": [
      "crisp tart shell",
      "smooth lemon filling",
      "clean tart finish"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "goodForTags": [
      "classic-dessert",
      "citrus",
      "tart"
    ],
    "orderVerdict": {
      "en": "A strong dessert if you want bright acidity and pastry rather than deep richness.",
      "zh": "想要明亮酸香和酥皮感，而不是特别厚重甜点时很适合。",
      "nl": "Een sterke dessertkeuze als je frisse zuren en deeg wilt in plaats van diepe rijkdom."
    },
    "weightLevel": 2,
    "metadataConfidence": 0.88
  },
  {
    "id": "mousse-au-chocolat",
    "metadataCode": "103058",
    "cuisineId": "french",
    "names": {
      "en": "Mousse au Chocolat",
      "zh": "巧克力慕斯",
      "nl": "Chocolademousse",
      "local": "Mousse au chocolat"
    },
    "category": "dessert",
    "cookingMethods": [
      "chilled",
      "set"
    ],
    "shortDescription": {
      "en": "A chilled chocolate mousse, usually airy but rich, with bittersweet chocolate and cream or egg-based texture.",
      "zh": "冷藏巧克力慕斯，口感轻盈但味道浓郁，常有黑巧克力和奶油或鸡蛋带来的质地。",
      "nl": "Een gekoelde chocolademousse, luchtig maar rijk, met bitterzoete chocolade en room- of eistructuur."
    },
    "cookingProfile": {
      "en": "Served cold and spoonable, with a light whipped texture rather than cake or pastry.",
      "zh": "冷食可用勺舀，质地打发轻盈，不是蛋糕或酥皮。",
      "nl": "Koud en lepelbaar, met opgeklopte luchtige structuur in plaats van cake of deeg."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "french-depth",
        "classic-dessert"
      ],
      "description": {
        "en": "A classic French dessert and a familiar chocolate choice on bistro menus.",
        "zh": "法式经典甜点，也是小馆菜单上熟悉的巧克力选择。",
        "nl": "Een klassiek Frans dessert en herkenbare chocoladekeuze op bistromenu's."
      }
    },
    "composition": [
      [
        "chocolate",
        40,
        "chocolate base"
      ],
      [
        "cream",
        30,
        "airy body"
      ],
      [
        "egg",
        15,
        "mousse structure"
      ],
      [
        "sugar",
        10,
        "sweetness"
      ],
      [
        "cocoa",
        5,
        "chocolate depth",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "dark chocolate",
      "whipped cream texture",
      "cocoa depth"
    ],
    "basicTaste": [
      "sweet",
      "chocolatey",
      "creamy"
    ],
    "textureProfile": [
      "airy mousse",
      "smooth spoonful",
      "rich chocolate finish"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-egg"
    ],
    "goodForTags": [
      "classic-dessert",
      "chocolate",
      "spoon-dessert"
    ],
    "orderVerdict": {
      "en": "A safe dessert if you want chocolate richness without pastry; check egg or dairy concerns.",
      "zh": "想要巧克力浓郁但不想吃酥皮蛋糕时很稳；需注意鸡蛋和奶制品。",
      "nl": "Een veilige keuze voor chocoladerijkdom zonder deeg; let op ei en zuivel."
    },
    "weightLevel": 2,
    "metadataConfidence": 0.88
  },
  {
    "id": "souffle-au-fromage",
    "metadataCode": "103059",
    "cuisineId": "french",
    "names": {
      "en": "Soufflé au Fromage",
      "zh": "奶酪舒芙蕾",
      "nl": "Kaassoufflé",
      "local": "Soufflé au fromage"
    },
    "category": "cheese",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "A savory baked cheese soufflé, puffed and airy on top with a warm egg-and-cheese center.",
      "zh": "咸口奶酪舒芙蕾，烘烤后膨起，内部是温热鸡蛋和奶酪的轻盈中心。",
      "nl": "Een hartige gebakken kaassoufflé, hoog en luchtig met een warme ei-kaaskern."
    },
    "cookingProfile": {
      "en": "Served hot soon after baking, so it is airy, delicate, and can settle quickly at the table.",
      "zh": "烤好后趁热上桌，质地轻盈脆弱，放久会回落。",
      "nl": "Heet kort na het bakken geserveerd; luchtig, delicaat en zakt snel in."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "french-depth",
        "classic-dish"
      ],
      "description": {
        "en": "A classic French technique-driven dish, useful for identifying airy baked cheese mains or starters.",
        "zh": "法式经典技法菜，适合理解轻盈烘烤奶酪类前菜或主菜。",
        "nl": "Een klassieke Franse techniekgedreven bereiding voor luchtige gebakken kaasgerechten."
      }
    },
    "composition": [
      [
        "egg",
        35,
        "lift and structure"
      ],
      [
        "alpine-cheese-blend",
        25,
        "cheese flavor"
      ],
      [
        "bechamel-sauce",
        20,
        "base"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "wheat-flour",
        5,
        "structure"
      ],
      [
        "black-pepper",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "baked cheese",
      "egg lift",
      "béchamel base"
    ],
    "basicTaste": [
      "savory",
      "cheesy",
      "creamy"
    ],
    "textureProfile": [
      "airy puffed top",
      "soft warm center",
      "delicate structure"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-dairy",
      "contains-gluten"
    ],
    "goodForTags": [
      "classic-dish",
      "cheese",
      "airy-texture"
    ],
    "orderVerdict": {
      "en": "Order if you want a warm, delicate cheese dish; it is more airy than heavy.",
      "zh": "想要温热、细腻、轻盈的奶酪菜时适合；它不是厚重奶酪锅。",
      "nl": "Bestel dit als je een warm en delicaat kaasgerecht wilt; luchtiger dan zwaar."
    },
    "weightLevel": 2,
    "metadataConfidence": 0.87
  },
  {
    "id": "crepes-suzette",
    "metadataCode": "103060",
    "cuisineId": "french",
    "names": {
      "en": "Crêpes Suzette",
      "zh": "橙酒可丽饼",
      "nl": "Crêpes Suzette",
      "local": "Crêpes Suzette"
    },
    "category": "dessert",
    "cookingMethods": [
      "fried",
      "sauce-tossed"
    ],
    "shortDescription": {
      "en": "Thin crêpes served in a glossy orange-butter caramel sauce, often with orange liqueur or tableside flambé style.",
      "zh": "薄可丽饼配橙香黄油焦糖酱，常带橙酒风味，有些餐厅会做桌边点火仪式。",
      "nl": "Dunne crêpes in glanzende sinaasappel-boterkaramelsaus, vaak met sinaasappellikeur of flambéstijl."
    },
    "cookingProfile": {
      "en": "Served warm with sauce coating folded crêpes, so it feels silky, citrusy, and buttery rather than cake-like.",
      "zh": "温热上桌，酱汁包裹折叠薄饼，口感丝滑、橙香、黄油感强，不像蛋糕。",
      "nl": "Warm geserveerd met saus rond gevouwen crêpes; zijdeachtig, citrusachtig en boterig, niet cakeachtig."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "french-depth",
        "classic-dessert"
      ],
      "description": {
        "en": "A classic French crêpe dessert, especially useful for identifying orange-butter sauce and alcohol watch-outs.",
        "zh": "法式经典可丽饼甜点，重点是橙香黄油酱和酒精提醒。",
        "nl": "Een klassiek Frans crêpedessert, vooral herkenbaar aan sinaasappelbotersaus en alcoholwaarschuwing."
      }
    },
    "composition": [
      [
        "crepe-batter",
        45,
        "thin crêpes"
      ],
      [
        "orange-caramel-sauce",
        30,
        "sauce"
      ],
      [
        "butter",
        10,
        "sauce richness"
      ],
      [
        "sugar",
        10,
        "caramel sweetness"
      ],
      [
        "orange",
        5,
        "citrus finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "orange-butter sauce",
      "caramel",
      "orange liqueur aroma"
    ],
    "basicTaste": [
      "sweet",
      "citrusy",
      "buttery"
    ],
    "textureProfile": [
      "soft folded crêpes",
      "glossy sauce",
      "warm citrus finish"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy",
      "contains-alcohol"
    ],
    "goodForTags": [
      "classic-dessert",
      "crepe",
      "citrus"
    ],
    "orderVerdict": {
      "en": "A strong dessert if you like warm citrus caramel and buttery crêpes; check alcohol if needed.",
      "zh": "喜欢温热橙香焦糖和黄油薄饼时很适合；介意酒精需确认。",
      "nl": "Sterk als je warme citruskaramel en boterige crêpes wilt; check alcohol indien nodig."
    },
    "weightLevel": 2,
    "metadataConfidence": 0.88
  },
  {
    "id": "tiropita",
    "metadataCode": "104059",
    "cuisineId": "greek",
    "names": {
      "en": "Tiropita",
      "zh": "希腊奶酪派",
      "nl": "Griekse kaasfilotaart",
      "local": "Τυρόπιτα"
    },
    "category": "bread",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Greek flaky phyllo cheese pie filled with feta or mixed cheeses, served as a snack or light meal.",
      "zh": "希腊酥皮奶酪派，内馅多为菲达或混合奶酪，可作小食或轻餐。",
      "nl": "Griekse filodeeg-kaastaart met feta of gemengde kazen, als snack of lichte maaltijd."
    },
    "cookingProfile": {
      "en": "Expect crisp flaky pastry around a salty creamy cheese filling.",
      "zh": "预期是酥脆层状外皮包住咸香奶酪馅。",
      "nl": "Krokant schilferig deeg rond zoute romige kaasvulling."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "street-food"
      ],
      "description": {
        "en": "A classic Greek bakery and cafe item, easy to order as a snack.",
        "zh": "经典希腊烘焙店和咖啡馆小食，点起来很容易。",
        "nl": "Een klassieke Griekse bakkerij- en cafésnack."
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
        35,
        "cheese filling"
      ],
      [
        "egg",
        10,
        "binder"
      ],
      [
        "butter",
        5,
        "pastry richness"
      ],
      [
        "olive-oil",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "feta cheese",
      "buttery phyllo",
      "olive oil"
    ],
    "basicTaste": [
      "salty",
      "creamy",
      "buttery"
    ],
    "textureProfile": [
      "crisp layers",
      "soft cheese filling",
      "flaky edges"
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
      "snack",
      "first-timer-friendly"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "A safe savory pastry if you like salty cheese and crisp phyllo.",
      "zh": "喜欢咸奶酪和酥皮时，这是稳妥咸点心。",
      "nl": "Een veilige hartige snack als je zoute kaas en filodeeg lust."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "imageCode": "104059",
    "imagePath": "/assets/dishes/main/104059-tiropita.webp",
    "thumbPath": "/assets/dishes/thumb/104059-tiropita.webp",
    "confidenceTag": "audited-remaining-batch-043",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "gigantes-plaki",
    "metadataCode": "104060",
    "cuisineId": "greek",
    "names": {
      "en": "Gigantes Plaki",
      "zh": "希腊番茄烤大豆",
      "nl": "Gigantes plaki",
      "local": "Γίγαντες πλακί"
    },
    "category": "vegetable",
    "cookingMethods": [
      "baked",
      "simmered"
    ],
    "shortDescription": {
      "en": "Greek baked giant beans in tomato, olive oil, onion, and herbs, served as a meze or vegetarian main.",
      "zh": "希腊大白豆用番茄、橄榄油、洋葱和香草烤/焖，可作小菜或素主菜。",
      "nl": "Griekse reuzenbonen in tomaat, olijfolie, ui en kruiden, als meze of vegetarisch hoofdgerecht."
    },
    "cookingProfile": {
      "en": "Expect soft creamy beans in a rich tomato-olive oil sauce, not a soup.",
      "zh": "预期是软糯大豆裹浓番茄橄榄油酱，不是汤。",
      "nl": "Zachte romige bonen in rijke tomaat-olijfoliesaus, geen soep."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "vegetarian"
      ],
      "description": {
        "en": "A classic Greek bean dish and useful vegetarian menu anchor.",
        "zh": "经典希腊豆类菜，也是素食点餐的实用锚点。",
        "nl": "Een klassieke Griekse bonenschotel en nuttige vegetarische keuze."
      }
    },
    "composition": [
      [
        "white-beans",
        55,
        "giant beans"
      ],
      [
        "tomato-sauce",
        25,
        "sauce base",
        "seasoning"
      ],
      [
        "onion",
        10,
        "aromatic"
      ],
      [
        "olive-oil",
        5,
        "richness",
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
      "tomato sauce",
      "olive oil",
      "soft giant beans"
    ],
    "basicTaste": [
      "savory",
      "tomatoey",
      "mild"
    ],
    "textureProfile": [
      "creamy beans",
      "thick sauce",
      "soft onions"
    ],
    "riskFlags": [],
    "dietaryFlags": [
      "vegan",
      "vegetarian"
    ],
    "goodForTags": [
      "vegetarian",
      "meze"
    ],
    "avoidIfTags": [
      "dislikes-beans"
    ],
    "orderVerdict": {
      "en": "A strong vegetarian choice if baked beans in tomato sauce sound appealing.",
      "zh": "如果喜欢番茄酱焖烤豆类，这是很稳的素食选择。",
      "nl": "Een sterke vegetarische keuze als bonen in tomatensaus goed klinken."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "imageCode": "104060",
    "imagePath": "/assets/dishes/main/104060-gigantes-plaki.webp",
    "thumbPath": "/assets/dishes/thumb/104060-gigantes-plaki.webp",
    "confidenceTag": "audited-remaining-batch-044",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "escalivada",
    "metadataCode": "105031",
    "imageCode": "105031",
    "cuisineId": "spanish",
    "names": {
      "en": "Escalivada",
      "zh": "加泰罗尼亚烤蔬菜",
      "nl": "Escalivada",
      "local": "Escalivada"
    },
    "category": "starter",
    "cookingMethods": [
      "grilled",
      "assembled"
    ],
    "shortDescription": {
      "en": "Roasted eggplant, peppers, and onions served cool or warm with olive oil.",
      "zh": "烤茄子、甜椒和洋葱，冷食或温食，淋橄榄油。",
      "nl": "Geroosterde aubergine, paprika en ui, koud of lauw met olijfolie."
    },
    "cookingProfile": {
      "en": "Expect soft smoky vegetables rather than a saucy stew.",
      "zh": "入口是柔软带烟熏感的蔬菜，不是浓酱炖菜。",
      "nl": "Verwacht zachte rokerige groente, geen sauzige stoof."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "vegetarian"
      ],
      "description": {
        "en": "A Catalan roasted vegetable plate recognized by eggplant, peppers, onion, and olive oil.",
        "zh": "加泰罗尼亚烤蔬菜盘，重点是茄子、甜椒、洋葱和橄榄油。",
        "nl": "Een Catalaans groentegerecht met aubergine, paprika, ui en olijfolie."
      }
    },
    "composition": [
      [
        "eggplant",
        35,
        "roasted vegetable"
      ],
      [
        "bell-pepper",
        30,
        "roasted vegetable"
      ],
      [
        "onion",
        15,
        "sweet aromatic"
      ],
      [
        "tomato",
        10,
        "juicy accent"
      ],
      [
        "olive-oil",
        10,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "roasted pepper",
      "eggplant",
      "olive oil"
    ],
    "basicTaste": [
      "smoky",
      "savory",
      "sweet"
    ],
    "textureProfile": [
      "soft roasted strips",
      "silky olive oil",
      "tender vegetables"
    ],
    "riskFlags": [],
    "dietaryFlags": [
      "vegan"
    ],
    "goodForTags": [
      "vegetarian",
      "lighter-choice"
    ],
    "avoidIfTags": [
      "wants-protein-main"
    ],
    "orderVerdict": {
      "en": "Choose it for smoky vegetables and a light tapas plate; skip if you want a filling protein main.",
      "zh": "想吃烟熏感蔬菜和轻 tapas 时适合；想要饱腹肉类主菜则不够。",
      "nl": "Kies dit voor rokerige groente en lichte tapas; sla over als je een vullende eiwitmaaltijd wilt."
    },
    "confidenceTag": "audited-remaining-batch-040",
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/105031-escalivada.webp",
    "thumbPath": "/assets/dishes/thumb/105031-escalivada.webp"
  },
  {
    "id": "esqueixada",
    "metadataCode": "105032",
    "imageCode": "105032",
    "cuisineId": "spanish",
    "names": {
      "en": "Esqueixada",
      "zh": "加泰罗尼亚盐鳕鱼沙拉",
      "nl": "Esqueixada",
      "local": "Esqueixada"
    },
    "category": "salad",
    "cookingMethods": [
      "assembled",
      "chilled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "Shredded salt cod served cold with tomato, onion, olives, and olive oil.",
      "zh": "手撕盐鳕鱼冷拌番茄、洋葱、橄榄和橄榄油。",
      "nl": "Koude stukjes gezouten kabeljauw met tomaat, ui, olijven en olijfolie."
    },
    "cookingProfile": {
      "en": "It is briny and fresh, closer to a seafood salad than a cooked fish main.",
      "zh": "咸鲜清爽，更像海鲜冷沙拉，不是热熟鱼主菜。",
      "nl": "Zilt en fris, meer zeevruchtensalade dan warme vismaaltijd."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "seafood"
      ],
      "description": {
        "en": "A Catalan cold salt-cod salad with tomato, onion, olives, and olive oil.",
        "zh": "加泰罗尼亚冷盐鳕鱼沙拉，重点是盐鳕鱼、番茄、洋葱和橄榄。",
        "nl": "Een Catalaanse koude salade met gezouten kabeljauw, tomaat, ui en olijven."
      }
    },
    "composition": [
      [
        "salt-cod",
        45,
        "salted fish"
      ],
      [
        "tomato",
        20,
        "fresh vegetable"
      ],
      [
        "onion",
        10,
        "sharp aromatic"
      ],
      [
        "olives",
        10,
        "briny garnish"
      ],
      [
        "olive-oil",
        10,
        "dressing",
        "seasoning"
      ],
      [
        "parsley",
        5,
        "fresh herb",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "salt cod",
      "olive oil",
      "olives"
    ],
    "basicTaste": [
      "briny",
      "fresh",
      "savory"
    ],
    "textureProfile": [
      "firm fish flakes",
      "juicy tomato",
      "crisp onion"
    ],
    "riskFlags": [
      "contains-fish"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "seafood",
      "cold-starter"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "avoid-salty-food"
    ],
    "orderVerdict": {
      "en": "Good if you like cold briny seafood; skip if salt cod or raw-salad texture is not appealing.",
      "zh": "喜欢咸鲜冷海鲜时可点；不爱盐鳕鱼或冷拌口感则避开。",
      "nl": "Goed als je koude zilte zeevruchten lust; sla over als gezouten kabeljauw niet past."
    },
    "confidenceTag": "audited-remaining-batch-040",
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/105032-esqueixada.webp",
    "thumbPath": "/assets/dishes/thumb/105032-esqueixada.webp"
  },
  {
    "id": "pisto",
    "metadataCode": "105033",
    "imageCode": "105033",
    "cuisineId": "spanish",
    "names": {
      "en": "Pisto",
      "zh": "西班牙蔬菜番茄炖菜",
      "nl": "Pisto",
      "local": "Pisto"
    },
    "category": "main",
    "cookingMethods": [
      "simmered",
      "fried"
    ],
    "shortDescription": {
      "en": "A tomato-based vegetable stew, often served with a fried egg on top.",
      "zh": "番茄底的蔬菜炖菜，常在上面放煎蛋。",
      "nl": "Een groentestoof op tomatenbasis, vaak met gebakken ei erbovenop."
    },
    "cookingProfile": {
      "en": "Expect soft saucy vegetables with egg richness rather than a crisp salad.",
      "zh": "入口是柔软多汁蔬菜和鸡蛋浓郁感，不是爽脆沙拉。",
      "nl": "Verwacht zachte sauzige groente met ei, geen knapperige salade."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "vegetarian",
        "classic-dish"
      ],
      "description": {
        "en": "A Spanish vegetable stew often recognized by tomato, peppers, zucchini-like vegetables, and fried egg.",
        "zh": "西班牙蔬菜番茄炖菜，常见识别点是番茄、甜椒、瓜类蔬菜和煎蛋。",
        "nl": "Een Spaanse groentestoof met tomaat, paprika, courgette-achtige groente en vaak ei."
      }
    },
    "composition": [
      [
        "tomato-sauce",
        30,
        "sauce base",
        "seasoning"
      ],
      [
        "bell-pepper",
        20,
        "vegetable"
      ],
      [
        "eggplant",
        15,
        "soft vegetable"
      ],
      [
        "onion",
        10,
        "aromatic"
      ],
      [
        "egg",
        15,
        "fried topping"
      ],
      [
        "olive-oil",
        10,
        "cooking fat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "tomato",
      "olive oil",
      "fried egg"
    ],
    "basicTaste": [
      "savory",
      "sweet",
      "mild"
    ],
    "textureProfile": [
      "soft vegetables",
      "saucy base",
      "fried egg"
    ],
    "riskFlags": [
      "contains-egg"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "vegetarian",
      "comfort-food"
    ],
    "avoidIfTags": [
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "A good vegetarian-friendly plate if you like soft tomato vegetables; skip if you want grilled meat.",
      "zh": "喜欢柔软番茄蔬菜时很适合；想吃烤肉则不合适。",
      "nl": "Goed vegetarisch als je zachte tomatengroente wilt; sla over als je gegrild vlees zoekt."
    },
    "confidenceTag": "audited-remaining-batch-040",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/105033-pisto.webp",
    "thumbPath": "/assets/dishes/thumb/105033-pisto.webp"
  },
  {
    "id": "pipirrana",
    "metadataCode": "105034",
    "imageCode": "105034",
    "cuisineId": "spanish",
    "names": {
      "en": "Pipirrana",
      "zh": "安达卢西亚碎蔬菜沙拉",
      "nl": "Pipirrana",
      "local": "Pipirrana"
    },
    "category": "salad",
    "cookingMethods": [
      "assembled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "Cold chopped tomato, cucumber, pepper, and onion salad, often with tuna and egg.",
      "zh": "冷拌番茄、黄瓜、甜椒和洋葱碎，常加金枪鱼和鸡蛋。",
      "nl": "Koude salade van tomaat, komkommer, paprika en ui, vaak met tonijn en ei."
    },
    "cookingProfile": {
      "en": "It is crunchy, cool, and bright, with tuna making it more filling.",
      "zh": "口感清凉爽脆，金枪鱼让它更有饱腹感。",
      "nl": "Knapperig, koel en fris, met tonijn voor meer vulling."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "seafood"
      ],
      "description": {
        "en": "An Andalusian chopped salad often served with tuna and egg.",
        "zh": "安达卢西亚碎蔬菜沙拉，常配金枪鱼和鸡蛋。",
        "nl": "Een Andalusische fijngesneden salade, vaak met tonijn en ei."
      }
    },
    "composition": [
      [
        "tomato",
        25,
        "fresh base"
      ],
      [
        "cucumber",
        20,
        "crunch"
      ],
      [
        "bell-pepper",
        15,
        "crunch"
      ],
      [
        "onion",
        10,
        "sharp aromatic"
      ],
      [
        "tuna",
        15,
        "fish topping"
      ],
      [
        "egg",
        10,
        "boiled egg"
      ],
      [
        "olive-oil",
        5,
        "dressing",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "fresh vegetables",
      "tuna",
      "olive oil"
    ],
    "basicTaste": [
      "fresh",
      "savory",
      "light"
    ],
    "textureProfile": [
      "small diced vegetables",
      "tuna flakes",
      "egg pieces"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-egg"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "lighter-choice",
      "salad"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "Choose it for a cool chopped salad with protein; skip if raw onion or tuna is not appealing.",
      "zh": "想吃清爽碎蔬菜沙拉并带一点蛋白质时适合；不爱生洋葱或金枪鱼则避开。",
      "nl": "Kies dit voor koele salade met wat eiwit; sla over bij rauwe ui of tonijn."
    },
    "confidenceTag": "audited-remaining-batch-040",
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/105034-pipirrana.webp",
    "thumbPath": "/assets/dishes/thumb/105034-pipirrana.webp"
  },
  {
    "id": "migas",
    "metadataCode": "105035",
    "imageCode": "105035",
    "cuisineId": "spanish",
    "names": {
      "en": "Migas",
      "zh": "西班牙炒面包屑",
      "nl": "Migas",
      "local": "Migas"
    },
    "category": "main",
    "cookingMethods": [
      "fried"
    ],
    "shortDescription": {
      "en": "Golden fried breadcrumbs mixed with chorizo, pork, garlic, peppers, and sometimes egg.",
      "zh": "金黄面包屑炒香肠、猪肉、蒜、青椒，有时配鸡蛋。",
      "nl": "Goudgebakken broodkruim met chorizo, varken, knoflook, paprika en soms ei."
    },
    "cookingProfile": {
      "en": "Expect crumbly, oily, salty bites, more rustic and heavy than a rice dish.",
      "zh": "口感松散带油香和咸香，比米饭菜更乡土厚重。",
      "nl": "Kruimelig, olieachtig en zout, rustieker en zwaarder dan rijst."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish"
      ],
      "description": {
        "en": "A rustic Spanish fried breadcrumb dish with pork, garlic, peppers, or egg.",
        "zh": "西班牙乡土炒面包屑，常配猪肉、蒜、青椒或鸡蛋。",
        "nl": "Een rustiek Spaans gerecht van gebakken broodkruim met varken, knoflook, paprika of ei."
      }
    },
    "composition": [
      [
        "bread",
        45,
        "fried crumbs"
      ],
      [
        "chorizo",
        20,
        "sausage"
      ],
      [
        "pork-belly",
        15,
        "pork pieces"
      ],
      [
        "garlic",
        5,
        "aromatic"
      ],
      [
        "bell-pepper",
        10,
        "pepper"
      ],
      [
        "olive-oil",
        5,
        "frying fat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "fried breadcrumbs",
      "chorizo",
      "garlic"
    ],
    "basicTaste": [
      "savory",
      "salty",
      "smoky"
    ],
    "textureProfile": [
      "crumbly bread",
      "chewy pork",
      "crisp edges"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "regional-dish",
      "comfort-food"
    ],
    "avoidIfTags": [
      "gluten-free",
      "no-pork",
      "avoid-oily-food"
    ],
    "orderVerdict": {
      "en": "Good for a rustic salty plate; skip if bread-heavy or oily dishes are not your style.",
      "zh": "想吃乡土咸香主食时适合；不爱面包屑重或油感则避开。",
      "nl": "Goed voor een rustiek zout bord; sla over bij broodrijk of olieachtig eten."
    },
    "confidenceTag": "audited-remaining-batch-040",
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/105035-migas.webp",
    "thumbPath": "/assets/dishes/thumb/105035-migas.webp"
  },
  {
    "id": "callos-a-la-madrilena",
    "metadataCode": "105036",
    "imageCode": "105036",
    "cuisineId": "spanish",
    "names": {
      "en": "Callos a la Madrilena",
      "zh": "马德里牛肚炖菜",
      "nl": "Callos a la Madrilena",
      "local": "Callos a la madrileña"
    },
    "category": "main",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "A rich tripe stew with chorizo, morcilla, chickpeas, and paprika sauce.",
      "zh": "浓郁牛肚炖菜，配西班牙辣香肠、血肠、鹰嘴豆和红椒酱汁。",
      "nl": "Een rijke stoof van pens met chorizo, morcilla, kikkererwten en paprikasaus."
    },
    "cookingProfile": {
      "en": "Expect gelatinous tripe, smoky sausage, and a heavy stew texture.",
      "zh": "可预期牛肚胶质口感、烟熏香肠味和厚重炖菜质地。",
      "nl": "Verwacht gelatineuze pens, rokerige worst en een zware stoofstructuur."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "regional-dish",
        "classic-dish"
      ],
      "description": {
        "en": "A Madrid tripe stew with chorizo, morcilla, and paprika-rich sauce.",
        "zh": "马德里经典牛肚炖菜，常有辣香肠、血肠和红椒香料酱汁。",
        "nl": "Een Madrileense pensstoof met chorizo, morcilla en paprikasaus."
      }
    },
    "composition": [
      [
        "tripe",
        40,
        "offal"
      ],
      [
        "chorizo",
        20,
        "smoked sausage"
      ],
      [
        "morcilla",
        15,
        "blood sausage"
      ],
      [
        "chickpeas",
        15,
        "beans"
      ],
      [
        "smoked-paprika",
        5,
        "paprika depth",
        "seasoning"
      ],
      [
        "tomato-sauce",
        5,
        "sauce",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "tripe",
      "chorizo",
      "smoked paprika"
    ],
    "basicTaste": [
      "savory",
      "smoky",
      "rich"
    ],
    "textureProfile": [
      "gelatinous tripe",
      "soft chickpeas",
      "thick sauce"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "regional-dish",
      "offal"
    ],
    "avoidIfTags": [
      "no-pork",
      "avoid-offal",
      "avoid-heavy-food"
    ],
    "orderVerdict": {
      "en": "Order only if offal and rich stews sound good; skip if chewy tripe is a problem.",
      "zh": "只有能接受内脏和厚重炖菜时才推荐；不喜欢牛肚嚼感则避开。",
      "nl": "Bestel dit alleen als orgaanvlees en rijke stoof aanspreken; sla over bij moeite met pens."
    },
    "confidenceTag": "audited-remaining-batch-040",
    "spiceLevel": 0,
    "weightLevel": 5,
    "acquiredTasteLevel": 4,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/105036-callos-a-la-madrilena.webp",
    "thumbPath": "/assets/dishes/thumb/105036-callos-a-la-madrilena.webp"
  },
  {
    "id": "sepia-a-la-plancha",
    "metadataCode": "105037",
    "imageCode": "105037",
    "cuisineId": "spanish",
    "names": {
      "en": "Sepia a la Plancha",
      "zh": "铁板煎墨鱼",
      "nl": "Sepia a la plancha",
      "local": "Sepia a la plancha"
    },
    "category": "seafood",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Grilled cuttlefish or sepia served with garlic, parsley, olive oil, and lemon.",
      "zh": "煎烤墨鱼配蒜、欧芹、橄榄油和柠檬。",
      "nl": "Gegrilde zeekat met knoflook, peterselie, olijfolie en citroen."
    },
    "cookingProfile": {
      "en": "Expect firm springy seafood with char and a garlicky finish.",
      "zh": "可预期紧实弹牙的海鲜口感、煎烤香和蒜香收尾。",
      "nl": "Verwacht stevige veerkrachtige zeevrucht met grillsmaak en knoflook."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "seafood"
      ],
      "description": {
        "en": "A Spanish grilled cuttlefish plate with garlic parsley oil and lemon.",
        "zh": "西班牙煎烤墨鱼，重点是蒜香欧芹油和柠檬。",
        "nl": "Een Spaanse gegrilde zeekat met knoflook-peterselieolie en citroen."
      }
    },
    "composition": [
      [
        "squid",
        70,
        "cuttlefish body"
      ],
      [
        "olive-oil",
        10,
        "grill finish",
        "seasoning"
      ],
      [
        "garlic",
        10,
        "aromatic"
      ],
      [
        "parsley",
        5,
        "fresh herb",
        "seasoning"
      ],
      [
        "lemon",
        5,
        "acid"
      ]
    ],
    "distinctiveFlavorSources": [
      "grilled cuttlefish",
      "garlic parsley oil",
      "lemon"
    ],
    "basicTaste": [
      "savory",
      "garlicky",
      "briny"
    ],
    "textureProfile": [
      "springy seafood",
      "light char",
      "slick oil"
    ],
    "riskFlags": [
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
      "shellfish-allergy",
      "avoid-garlic"
    ],
    "orderVerdict": {
      "en": "Good for simple grilled seafood; skip if springy squid-like texture is not appealing.",
      "zh": "想吃简单煎烤海鲜时合适；不喜欢墨鱼弹牙口感则避开。",
      "nl": "Goed voor simpele gegrilde zeevrucht; sla over als stevige inktvistextuur niet past."
    },
    "confidenceTag": "audited-remaining-batch-040",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/105037-sepia-a-la-plancha.webp",
    "thumbPath": "/assets/dishes/thumb/105037-sepia-a-la-plancha.webp"
  },
  {
    "id": "navajas-a-la-plancha",
    "metadataCode": "105038",
    "imageCode": "105038",
    "cuisineId": "spanish",
    "names": {
      "en": "Navajas a la Plancha",
      "zh": "铁板煎竹蛏",
      "nl": "Navajas a la plancha",
      "local": "Navajas a la plancha"
    },
    "category": "seafood",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Grilled razor clams in long shells with garlic, parsley, olive oil, and lemon.",
      "zh": "长壳竹蛏煎烤后配蒜、欧芹、橄榄油和柠檬。",
      "nl": "Gegrilde scheermessen in lange schelpen met knoflook, peterselie, olijfolie en citroen."
    },
    "cookingProfile": {
      "en": "Expect briny shellfish with a delicate chew and simple garlic oil.",
      "zh": "贝类咸鲜，口感细嫩略有嚼劲，蒜油调味直接。",
      "nl": "Zilt schelpdier met fijne beet en eenvoudige knoflookolie."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "seafood",
        "regional-dish"
      ],
      "description": {
        "en": "A Spanish razor-clam tapas plate with garlic parsley oil.",
        "zh": "西班牙竹蛏 tapas，重点是长壳贝和蒜香欧芹油。",
        "nl": "Een tapasbord met scheermessen en knoflook-peterselieolie."
      }
    },
    "composition": [
      [
        "clams",
        75,
        "razor clams"
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
        "aromatic"
      ],
      [
        "parsley",
        5,
        "fresh herb",
        "seasoning"
      ],
      [
        "lemon",
        5,
        "acid"
      ]
    ],
    "distinctiveFlavorSources": [
      "razor clams",
      "garlic oil",
      "lemon"
    ],
    "basicTaste": [
      "briny",
      "garlicky",
      "fresh"
    ],
    "textureProfile": [
      "tender shellfish",
      "long shells",
      "light oil"
    ],
    "riskFlags": [
      "contains-shellfish"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "seafood",
      "tapas"
    ],
    "avoidIfTags": [
      "shellfish-allergy"
    ],
    "orderVerdict": {
      "en": "Choose it for clean shellfish flavor; skip with shellfish allergy or if small shellfish portions disappoint you.",
      "zh": "想吃清爽贝类本味时适合；贝类过敏或想要大份主菜则不适合。",
      "nl": "Kies dit voor pure schelpdierensmaak; sla over bij allergie of als je grote porties zoekt."
    },
    "confidenceTag": "audited-remaining-batch-040",
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/105038-navajas-a-la-plancha.webp",
    "thumbPath": "/assets/dishes/thumb/105038-navajas-a-la-plancha.webp"
  },
  {
    "id": "zamburinas",
    "metadataCode": "105039",
    "imageCode": "105039",
    "cuisineId": "spanish",
    "names": {
      "en": "Zamburinas",
      "zh": "西班牙小扇贝",
      "nl": "Zamburinas",
      "local": "Zamburiñas"
    },
    "category": "seafood",
    "cookingMethods": [
      "grilled",
      "baked"
    ],
    "shortDescription": {
      "en": "Small scallops served in their shells, often seared or lightly gratinated with garlic oil.",
      "zh": "小扇贝连壳上桌，常煎烤或轻焗，配蒜香油。",
      "nl": "Kleine schelpen met sint-jakobsschelpen, vaak gebakken of licht gegratineerd met knoflookolie."
    },
    "cookingProfile": {
      "en": "Expect sweet tender shellfish in small rich bites.",
      "zh": "入口是小份鲜甜柔嫩贝肉，油香较集中。",
      "nl": "Verwacht zoete zachte schelpdierhapjes, klein maar rijk."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "seafood",
        "regional-dish"
      ],
      "description": {
        "en": "A Galician-style small scallop tapa, usually served in shells.",
        "zh": "加利西亚风格小扇贝 tapas，通常连壳上桌。",
        "nl": "Een Galicische tapa van kleine sint-jakobsschelpen in de schelp."
      }
    },
    "composition": [
      [
        "scallops",
        75,
        "small scallops"
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
        "aromatic"
      ],
      [
        "parsley",
        5,
        "fresh herb",
        "seasoning"
      ],
      [
        "lemon",
        5,
        "acid"
      ]
    ],
    "distinctiveFlavorSources": [
      "scallops",
      "garlic oil",
      "parsley"
    ],
    "basicTaste": [
      "sweet",
      "briny",
      "savory"
    ],
    "textureProfile": [
      "tender scallop",
      "shell presentation",
      "light gratin"
    ],
    "riskFlags": [
      "contains-shellfish"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "seafood",
      "tapas"
    ],
    "avoidIfTags": [
      "shellfish-allergy"
    ],
    "orderVerdict": {
      "en": "Good for a small seafood tapa; skip if shellfish is unsafe or you want a full main.",
      "zh": "适合想吃小份贝类 tapas；贝类过敏或想要饱腹主菜则避开。",
      "nl": "Goed als kleine zeevruchtentapa; sla over bij schelpdierallergie of als je een hoofdgerecht wilt."
    },
    "confidenceTag": "audited-remaining-batch-040",
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/105039-zamburinas.webp",
    "thumbPath": "/assets/dishes/thumb/105039-zamburinas.webp"
  },
  {
    "id": "marmitako",
    "metadataCode": "105040",
    "imageCode": "105040",
    "cuisineId": "spanish",
    "names": {
      "en": "Marmitako",
      "zh": "巴斯克金枪鱼土豆炖菜",
      "nl": "Marmitako",
      "local": "Marmitako"
    },
    "category": "main",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Tuna and potato stew in a peppery tomato broth.",
      "zh": "金枪鱼和土豆在甜椒番茄汤汁中炖煮。",
      "nl": "Stoof van tonijn en aardappel in paprika-tomatenbouillon."
    },
    "cookingProfile": {
      "en": "Expect soft potatoes and firm tuna chunks in a warm rustic broth.",
      "zh": "可预期柔软土豆、紧实金枪鱼块和温热乡土汤汁。",
      "nl": "Verwacht zachte aardappel en stevige tonijn in warme rustieke bouillon."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "seafood"
      ],
      "description": {
        "en": "A Basque fisherman stew with tuna, potatoes, peppers, and tomato broth.",
        "zh": "巴斯克渔夫炖菜，重点是金枪鱼、土豆、甜椒和番茄汤汁。",
        "nl": "Een Baskische vissersstoof met tonijn, aardappel, paprika en tomatenbouillon."
      }
    },
    "composition": [
      [
        "tuna",
        35,
        "fish"
      ],
      [
        "potato",
        30,
        "stew body"
      ],
      [
        "bell-pepper",
        15,
        "pepper"
      ],
      [
        "tomato-sauce",
        10,
        "broth base",
        "seasoning"
      ],
      [
        "onion",
        5,
        "aromatic"
      ],
      [
        "olive-oil",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "tuna",
      "pepper tomato broth",
      "olive oil"
    ],
    "basicTaste": [
      "savory",
      "brothy",
      "mildly-sweet"
    ],
    "textureProfile": [
      "firm tuna",
      "soft potatoes",
      "warm broth"
    ],
    "riskFlags": [
      "contains-fish"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "seafood",
      "comfort-food"
    ],
    "avoidIfTags": [
      "fish-allergy"
    ],
    "orderVerdict": {
      "en": "A good seafood stew if you want something warm and filling; skip if tuna in stew sounds dry to you.",
      "zh": "想吃温热饱腹海鲜炖菜时适合；若不喜欢炖金枪鱼口感则谨慎。",
      "nl": "Goed als warme vullende visstoof; sla over als tonijn in stoof niet aanspreekt."
    },
    "confidenceTag": "audited-remaining-batch-040",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/105040-marmitako.webp",
    "thumbPath": "/assets/dishes/thumb/105040-marmitako.webp"
  },
  {
    "id": "bacalao-a-la-vizcaina",
    "metadataCode": "105041",
    "imageCode": "105041",
    "cuisineId": "spanish",
    "names": {
      "en": "Bacalao a la Vizcaina",
      "zh": "比斯开红椒酱鳕鱼",
      "nl": "Bacalao a la Vizcaina",
      "local": "Bacalao a la vizcaína"
    },
    "category": "seafood",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Salt cod served in a deep red pepper and tomato-style sauce.",
      "zh": "盐鳕鱼配深红色甜椒番茄风格酱汁。",
      "nl": "Gezouten kabeljauw in een dieprode paprika-tomatensaus."
    },
    "cookingProfile": {
      "en": "The fish is firm and salty, while the sauce is sweet, red, and mellow.",
      "zh": "鱼肉紧实偏咸，酱汁红亮、甜润、温和。",
      "nl": "De vis is stevig en zout, de saus rood, zoet en zacht."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "seafood"
      ],
      "description": {
        "en": "A Basque salt-cod dish defined by red pepper sauce.",
        "zh": "巴斯克盐鳕鱼菜，重点是红椒酱汁。",
        "nl": "Een Baskisch gerecht van gezouten kabeljauw met rode paprikasaus."
      }
    },
    "composition": [
      [
        "salt-cod",
        55,
        "fish"
      ],
      [
        "bell-pepper",
        20,
        "red sauce"
      ],
      [
        "tomato-sauce",
        10,
        "sauce base",
        "seasoning"
      ],
      [
        "onion",
        5,
        "aromatic"
      ],
      [
        "olive-oil",
        5,
        "richness",
        "seasoning"
      ],
      [
        "garlic",
        5,
        "aromatic"
      ]
    ],
    "distinctiveFlavorSources": [
      "salt cod",
      "red pepper sauce",
      "olive oil"
    ],
    "basicTaste": [
      "briny",
      "sweet-savory",
      "mellow"
    ],
    "textureProfile": [
      "firm fish flakes",
      "smooth red sauce",
      "soft vegetables"
    ],
    "riskFlags": [
      "contains-fish"
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
      "avoid-salty-food"
    ],
    "orderVerdict": {
      "en": "Choose it for saucy salt cod; skip if salty preserved fish is not appealing.",
      "zh": "想吃红酱盐鳕鱼时适合；不喜欢偏咸腌鱼则避开。",
      "nl": "Kies dit voor gezouten kabeljauw met saus; sla over als zoute vis niet past."
    },
    "confidenceTag": "audited-remaining-batch-040",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/105041-bacalao-a-la-vizcaina.webp",
    "thumbPath": "/assets/dishes/thumb/105041-bacalao-a-la-vizcaina.webp"
  },
  {
    "id": "chipirones-en-su-tinta",
    "metadataCode": "105042",
    "imageCode": "105042",
    "cuisineId": "spanish",
    "names": {
      "en": "Chipirones en su Tinta",
      "zh": "墨汁小鱿鱼",
      "nl": "Chipirones en su tinta",
      "local": "Chipirones en su tinta"
    },
    "category": "seafood",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Baby squid cooked in glossy black squid ink sauce, often served with rice.",
      "zh": "小鱿鱼用黑色墨汁酱烹制，常配米饭。",
      "nl": "Kleine inktvis in glanzende zwarte inkt saus, vaak met rijst."
    },
    "cookingProfile": {
      "en": "Expect briny, deep seafood flavor and a dark sauce that can look intense.",
      "zh": "可预期咸鲜深海味，黑色酱汁视觉存在感强。",
      "nl": "Verwacht diepe zilte zeesmaak en een opvallend donkere saus."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "seafood",
        "regional-dish"
      ],
      "description": {
        "en": "A Spanish baby squid dish recognized by its black squid-ink sauce.",
        "zh": "西班牙小鱿鱼菜，识别重点是黑色墨汁酱。",
        "nl": "Een Spaans gerecht van kleine pijlinktvis in zwarte inkt saus."
      }
    },
    "composition": [
      [
        "squid",
        55,
        "baby squid"
      ],
      [
        "squid-ink",
        20,
        "black sauce",
        "seasoning"
      ],
      [
        "steamed-rice",
        15,
        "side"
      ],
      [
        "onion",
        5,
        "sauce base"
      ],
      [
        "olive-oil",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "squid ink",
      "baby squid",
      "olive oil"
    ],
    "basicTaste": [
      "briny",
      "savory",
      "deep"
    ],
    "textureProfile": [
      "tender squid",
      "glossy sauce",
      "soft rice"
    ],
    "riskFlags": [
      "contains-shellfish"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "seafood",
      "adventurous"
    ],
    "avoidIfTags": [
      "shellfish-allergy",
      "avoid-dark-seafood-sauce"
    ],
    "orderVerdict": {
      "en": "Good if you enjoy squid and strong seafood cues; skip if black ink sauce feels too intense.",
      "zh": "喜欢鱿鱼和浓海味时值得；若黑色墨汁酱让你抗拒则不推荐。",
      "nl": "Goed als je inktvis en sterke zeesmaak lust; sla over als zwarte inkt te intens klinkt."
    },
    "confidenceTag": "audited-remaining-batch-040",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 3,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/105042-chipirones-en-su-tinta.webp",
    "thumbPath": "/assets/dishes/thumb/105042-chipirones-en-su-tinta.webp"
  },
  {
    "id": "arroz-a-banda",
    "metadataCode": "105043",
    "imageCode": "105043",
    "cuisineId": "spanish",
    "names": {
      "en": "Arroz a Banda",
      "zh": "瓦伦西亚鱼汤海鲜饭",
      "nl": "Arroz a banda",
      "local": "Arroz a banda"
    },
    "category": "rice",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Short-grain rice cooked in seafood or fish stock, often served with aioli.",
      "zh": "短粒米用海鲜或鱼汤煮成，常配蒜蛋黄酱。",
      "nl": "Kortkorrelige rijst gekookt in vis- of zeevruchtenbouillon, vaak met aioli."
    },
    "cookingProfile": {
      "en": "Expect savory fish-stock rice, less shell-heavy than many paellas.",
      "zh": "重点是鱼汤入味的米饭，贝壳堆料通常少于很多海鲜饭。",
      "nl": "Verwacht hartige visbouillonrijst, minder schelprijk dan veel paella."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "seafood"
      ],
      "description": {
        "en": "A Valencian seafood rice cooked in fish stock, usually simpler than showy paella.",
        "zh": "瓦伦西亚鱼汤米饭，通常比展示型海鲜饭更简洁。",
        "nl": "Een Valenciaanse rijst met visbouillon, soberder dan showpaella."
      }
    },
    "composition": [
      [
        "short-grain-rice",
        55,
        "rice base"
      ],
      [
        "broth",
        20,
        "fish stock"
      ],
      [
        "seafood-mix",
        15,
        "seafood pieces"
      ],
      [
        "olive-oil",
        5,
        "cooking fat",
        "seasoning"
      ],
      [
        "garlic",
        5,
        "aioli cue"
      ]
    ],
    "distinctiveFlavorSources": [
      "fish stock",
      "saffron rice",
      "aioli"
    ],
    "basicTaste": [
      "savory",
      "briny",
      "garlicky"
    ],
    "textureProfile": [
      "separate rice grains",
      "light seafood pieces",
      "sauce on side"
    ],
    "riskFlags": [
      "contains-shellfish",
      "contains-fish",
      "contains-egg"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "rice",
      "seafood"
    ],
    "avoidIfTags": [
      "shellfish-allergy",
      "fish-allergy",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "A good order if you want seafood flavor carried by rice, not a shellfish pile.",
      "zh": "想吃鱼汤味米饭而不是满盘带壳海鲜时适合。",
      "nl": "Goed als je zeevruchtensmaak in rijst wilt, geen berg schelpen."
    },
    "confidenceTag": "audited-remaining-batch-040",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/105043-arroz-a-banda.webp",
    "thumbPath": "/assets/dishes/thumb/105043-arroz-a-banda.webp"
  },
  {
    "id": "arroz-del-senyoret",
    "metadataCode": "105044",
    "imageCode": "105044",
    "cuisineId": "spanish",
    "names": {
      "en": "Arroz del Senyoret",
      "zh": "去壳海鲜饭",
      "nl": "Arroz del senyoret",
      "local": "Arroz del senyoret"
    },
    "category": "rice",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Seafood rice with peeled shrimp, squid, and boneless seafood so it is easy to eat.",
      "zh": "米饭配去壳虾、鱿鱼和无骨海鲜，吃起来方便。",
      "nl": "Zeevruchtenrijst met gepelde garnalen, inktvis en graatloze zeevrucht."
    },
    "cookingProfile": {
      "en": "Expect paella-like rice without much shell-cracking work.",
      "zh": "有海鲜饭风味，但基本不需要剥壳。",
      "nl": "Paella-achtige rijst zonder veel pelwerk."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "seafood"
      ],
      "description": {
        "en": "A Valencian peeled seafood rice where the shellfish is ready to eat.",
        "zh": "瓦伦西亚去壳海鲜饭，特点是海鲜已处理好，方便直接吃。",
        "nl": "Een Valenciaanse rijst waarbij de zeevruchten al gepeld zijn."
      }
    },
    "composition": [
      [
        "short-grain-rice",
        55,
        "rice base"
      ],
      [
        "shrimp",
        20,
        "peeled shellfish"
      ],
      [
        "squid",
        15,
        "seafood"
      ],
      [
        "broth",
        5,
        "stock"
      ],
      [
        "saffron",
        5,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "peeled seafood",
      "saffron rice",
      "fish stock"
    ],
    "basicTaste": [
      "savory",
      "briny",
      "aromatic"
    ],
    "textureProfile": [
      "separate rice",
      "tender shrimp",
      "soft squid"
    ],
    "riskFlags": [
      "contains-shellfish",
      "contains-fish"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "rice",
      "seafood",
      "easy-to-eat"
    ],
    "avoidIfTags": [
      "shellfish-allergy",
      "fish-allergy"
    ],
    "orderVerdict": {
      "en": "Choose it if you want seafood rice without messy shells; skip if shellfish is unsafe.",
      "zh": "想吃方便入口的海鲜饭时适合；贝类或虾类过敏者避开。",
      "nl": "Kies dit voor zeevruchtenrijst zonder rommelige schelpen; sla over bij allergie."
    },
    "confidenceTag": "audited-remaining-batch-040",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/105044-arroz-del-senyoret.webp",
    "thumbPath": "/assets/dishes/thumb/105044-arroz-del-senyoret.webp"
  },
  {
    "id": "calcots",
    "metadataCode": "105045",
    "imageCode": "105045",
    "cuisineId": "spanish",
    "names": {
      "en": "Calcots",
      "zh": "加泰罗尼亚烤葱配坚果酱",
      "nl": "Calcots",
      "local": "Calçots"
    },
    "category": "starter",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Charred young onions or leeks served with romesco sauce.",
      "zh": "炭烤嫩葱或小韭葱，配红椒坚果酱。",
      "nl": "Geblakerde jonge uien of prei met romescosaus."
    },
    "cookingProfile": {
      "en": "It is smoky, messy, and sweet-oniony, with nutty sauce for dipping.",
      "zh": "烟熏味明显，葱甜，常蘸坚果红椒酱，吃法较随意。",
      "nl": "Rokerig, zoet-uiig en vaak met nootachtige dip."
    },
    "cuisineRole": {
      "level": "festival",
      "tags": [
        "regional-dish",
        "vegetarian"
      ],
      "description": {
        "en": "A Catalan seasonal grilled onion dish served with romesco sauce.",
        "zh": "加泰罗尼亚季节性烤葱菜，常配 romesco 坚果红椒酱。",
        "nl": "Een Catalaans seizoensgerecht van gegrilde jonge ui met romescosaus."
      }
    },
    "composition": [
      [
        "leek",
        65,
        "grilled onions"
      ],
      [
        "bell-pepper",
        10,
        "romesco base"
      ],
      [
        "almonds",
        10,
        "nutty sauce"
      ],
      [
        "olive-oil",
        10,
        "sauce",
        "seasoning"
      ],
      [
        "garlic",
        5,
        "aromatic"
      ]
    ],
    "distinctiveFlavorSources": [
      "charred onions",
      "romesco sauce",
      "almonds"
    ],
    "basicTaste": [
      "smoky",
      "sweet",
      "nutty"
    ],
    "textureProfile": [
      "soft onion layers",
      "charred skin",
      "thick sauce"
    ],
    "riskFlags": [
      "contains-tree-nut"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "regional-dish",
      "vegetarian"
    ],
    "avoidIfTags": [
      "tree-nut-allergy",
      "avoid-messy-food"
    ],
    "orderVerdict": {
      "en": "Great for a seasonal Catalan vegetable experience; skip if smoky onions or nut sauce do not appeal.",
      "zh": "想体验加泰罗尼亚季节烤葱时很适合；不爱烟熏葱或坚果酱则避开。",
      "nl": "Mooi voor seizoensgroente uit Catalonië; sla over bij rookui of notensaus."
    },
    "confidenceTag": "audited-remaining-batch-040",
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/105045-calcots.webp",
    "thumbPath": "/assets/dishes/thumb/105045-calcots.webp"
  },
  {
    "id": "butifarra",
    "metadataCode": "105046",
    "imageCode": "105046",
    "cuisineId": "spanish",
    "names": {
      "en": "Butifarra",
      "zh": "加泰罗尼亚香肠配白豆",
      "nl": "Butifarra",
      "local": "Botifarra"
    },
    "category": "main",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Grilled Catalan pork sausage, commonly served with white beans and garlic oil.",
      "zh": "烤加泰罗尼亚猪肉香肠，常配白豆和蒜香油。",
      "nl": "Gegrilde Catalaanse varkensworst, vaak met witte bonen en knoflookolie."
    },
    "cookingProfile": {
      "en": "Expect a simple meaty sausage plate with creamy beans.",
      "zh": "可预期直接的肉香肠和绵软白豆。",
      "nl": "Verwacht een eenvoudig vlezig bord met romige bonen."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "regional-dish",
        "classic-dish"
      ],
      "description": {
        "en": "A Catalan sausage often served with white beans.",
        "zh": "加泰罗尼亚香肠菜，常配白豆。",
        "nl": "Een Catalaanse worst die vaak met witte bonen wordt geserveerd."
      }
    },
    "composition": [
      [
        "sausage-global",
        55,
        "pork sausage"
      ],
      [
        "white-beans",
        30,
        "bean side"
      ],
      [
        "garlic",
        5,
        "aromatic"
      ],
      [
        "olive-oil",
        5,
        "finish",
        "seasoning"
      ],
      [
        "parsley",
        5,
        "fresh herb",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "grilled sausage",
      "white beans",
      "garlic oil"
    ],
    "basicTaste": [
      "savory",
      "meaty",
      "mild"
    ],
    "textureProfile": [
      "firm sausage",
      "soft beans",
      "light char"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "meat-main",
      "regional-dish"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "A reliable order for sausage and beans; skip if pork is off the table.",
      "zh": "想吃香肠配豆子的稳妥主菜时适合；不吃猪肉则避开。",
      "nl": "Betrouwbaar voor worst met bonen; sla over bij geen varken."
    },
    "confidenceTag": "audited-remaining-batch-040",
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/105046-butifarra.webp",
    "thumbPath": "/assets/dishes/thumb/105046-butifarra.webp"
  },
  {
    "id": "sobrasada",
    "metadataCode": "105047",
    "imageCode": "105047",
    "cuisineId": "spanish",
    "names": {
      "en": "Sobrasada",
      "zh": "马略卡红椒猪肉酱肠",
      "nl": "Sobrasada",
      "local": "Sobrasada"
    },
    "category": "starter",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Soft spreadable cured pork sausage with paprika, served on toast or bread.",
      "zh": "柔软可涂抹的红椒风干猪肉肠，常配烤面包。",
      "nl": "Zachte smeerbare gedroogde varkensworst met paprika, op toast of brood."
    },
    "cookingProfile": {
      "en": "It is fatty, smoky-red, and spreadable, closer to a rich tapa than a sliced sausage.",
      "zh": "脂香浓、红椒烟熏感明显，是可涂抹 tapas，不像切片香肠。",
      "nl": "Vet, rood en smeerbaar, meer rijke tapa dan plakjes worst."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "tapas"
      ],
      "description": {
        "en": "A Mallorcan spreadable paprika pork sausage, often served on bread.",
        "zh": "马略卡可涂抹红椒猪肉肠，常抹在面包上。",
        "nl": "Een Mallorcaanse smeerbare paprikaworst, vaak op brood."
      }
    },
    "composition": [
      [
        "pork",
        45,
        "cured sausage"
      ],
      [
        "smoked-paprika",
        20,
        "paprika flavor",
        "seasoning"
      ],
      [
        "bread",
        25,
        "toast base"
      ],
      [
        "olive-oil",
        5,
        "finish",
        "seasoning"
      ],
      [
        "honey",
        5,
        "optional sweet pairing"
      ]
    ],
    "distinctiveFlavorSources": [
      "paprika pork",
      "toast",
      "olive oil"
    ],
    "basicTaste": [
      "smoky",
      "savory",
      "rich"
    ],
    "textureProfile": [
      "spreadable sausage",
      "crisp toast",
      "fatty finish"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "tapas",
      "regional-dish"
    ],
    "avoidIfTags": [
      "no-pork",
      "gluten-free",
      "avoid-fatty-food"
    ],
    "orderVerdict": {
      "en": "Try it if rich paprika pork on toast sounds good; skip if fatty cured meat is too much.",
      "zh": "喜欢红椒猪肉酱配烤面包时可试；怕油脂重或不吃猪肉则避开。",
      "nl": "Probeer dit bij rijke paprikaworst op toast; sla over als vet vlees te zwaar is."
    },
    "confidenceTag": "audited-remaining-batch-040",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/105047-sobrasada.webp",
    "thumbPath": "/assets/dishes/thumb/105047-sobrasada.webp"
  },
  {
    "id": "coca-de-recapte",
    "metadataCode": "105048",
    "imageCode": "105048",
    "cuisineId": "spanish",
    "names": {
      "en": "Coca de Recapte",
      "zh": "加泰罗尼亚烤蔬菜咸饼",
      "nl": "Coca de recapte",
      "local": "Coca de recapte"
    },
    "category": "bread",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Thin savory flatbread with roasted peppers, eggplant, onion, and often anchovy or sausage.",
      "zh": "薄咸饼上铺烤甜椒、茄子、洋葱，常加鳀鱼或香肠。",
      "nl": "Dunne hartige plaatkoek met geroosterde paprika, aubergine, ui en vaak ansjovis of worst."
    },
    "cookingProfile": {
      "en": "Expect a crisp-chewy bread base with smoky vegetables.",
      "zh": "底部有薄面饼的脆韧感，上面是烟熏感烤蔬菜。",
      "nl": "Krokant-taai brood met rokerige groente."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish"
      ],
      "description": {
        "en": "A Catalan savory flatbread topped with roasted vegetables and sometimes anchovy or sausage.",
        "zh": "加泰罗尼亚咸味扁面饼，上面常有烤蔬菜，也可能有鳀鱼或香肠。",
        "nl": "Een Catalaanse hartige plaatkoek met geroosterde groente en soms ansjovis of worst."
      }
    },
    "composition": [
      [
        "bread",
        40,
        "flatbread base"
      ],
      [
        "bell-pepper",
        20,
        "roasted topping"
      ],
      [
        "eggplant",
        15,
        "roasted topping"
      ],
      [
        "onion",
        10,
        "sweet aromatic"
      ],
      [
        "anchovies",
        10,
        "salty topping"
      ],
      [
        "olive-oil",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "roasted vegetables",
      "olive oil",
      "anchovy"
    ],
    "basicTaste": [
      "savory",
      "smoky",
      "briny"
    ],
    "textureProfile": [
      "thin bread",
      "soft vegetables",
      "salty topping"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-fish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "regional-dish",
      "tapas"
    ],
    "avoidIfTags": [
      "gluten-free",
      "fish-allergy"
    ],
    "orderVerdict": {
      "en": "Good if you want a savory flatbread with roasted vegetables; skip if anchovy is unwelcome.",
      "zh": "想吃烤蔬菜咸味面饼时适合；不喜欢鳀鱼咸鲜则谨慎。",
      "nl": "Goed voor hartige plaatkoek met groente; sla over als ansjovis niet past."
    },
    "confidenceTag": "audited-remaining-batch-040",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/105048-coca-de-recapte.webp",
    "thumbPath": "/assets/dishes/thumb/105048-coca-de-recapte.webp"
  },
  {
    "id": "empanada-gallega",
    "metadataCode": "105049",
    "imageCode": "105049",
    "cuisineId": "spanish",
    "names": {
      "en": "Empanada Gallega",
      "zh": "加利西亚咸派",
      "nl": "Empanada Gallega",
      "local": "Empanada gallega"
    },
    "category": "bread",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Golden baked savory pie filled with tuna or meat, peppers, onion, and tomato.",
      "zh": "金黄烘烤咸派，内馅常有金枪鱼或肉、甜椒、洋葱和番茄。",
      "nl": "Goudgebakken hartige taart met tonijn of vlees, paprika, ui en tomaat."
    },
    "cookingProfile": {
      "en": "Expect a bready pastry shell and saucy filling, more filling than a small tapa.",
      "zh": "外层是面点皮，内馅带汁，比小 tapas 更有饱腹感。",
      "nl": "Broodachtig deeg met smeuïge vulling, vullender dan kleine tapas."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish"
      ],
      "description": {
        "en": "A Galician savory pie often filled with tuna, peppers, onion, and tomato.",
        "zh": "加利西亚咸派，常以金枪鱼、甜椒、洋葱和番茄为馅。",
        "nl": "Een Galicische hartige pastei, vaak met tonijn, paprika, ui en tomaat."
      }
    },
    "composition": [
      [
        "wheat-flour",
        35,
        "pie dough"
      ],
      [
        "tuna",
        25,
        "fish filling"
      ],
      [
        "bell-pepper",
        15,
        "filling"
      ],
      [
        "onion",
        10,
        "aromatic"
      ],
      [
        "tomato-sauce",
        10,
        "sauce",
        "seasoning"
      ],
      [
        "olive-oil",
        5,
        "richness",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "tuna filling",
      "pepper tomato sofrito",
      "baked crust"
    ],
    "basicTaste": [
      "savory",
      "bready",
      "mild"
    ],
    "textureProfile": [
      "golden crust",
      "soft filling",
      "sliceable pie"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-fish"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "regional-dish",
      "sharing"
    ],
    "avoidIfTags": [
      "gluten-free",
      "fish-allergy"
    ],
    "orderVerdict": {
      "en": "Choose it for a filling savory pie slice; skip if you want something light or gluten-free.",
      "zh": "想吃饱腹咸派切片时适合；想要清淡或无麸质则避开。",
      "nl": "Kies dit voor een vullende hartige punt; sla over als je licht of glutenvrij wilt."
    },
    "confidenceTag": "audited-remaining-batch-040",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/105049-empanada-gallega.webp",
    "thumbPath": "/assets/dishes/thumb/105049-empanada-gallega.webp"
  },
  {
    "id": "lacon-con-grelos",
    "metadataCode": "105050",
    "imageCode": "105050",
    "cuisineId": "spanish",
    "names": {
      "en": "Lacon con Grelos",
      "zh": "加利西亚猪肩配芜菁叶",
      "nl": "Lacon con grelos",
      "local": "Lacón con grelos"
    },
    "category": "main",
    "cookingMethods": [
      "boiled",
      "simmered"
    ],
    "shortDescription": {
      "en": "Cured pork shoulder served with turnip greens, potatoes, and chorizo.",
      "zh": "腌猪肩肉配芜菁叶、土豆和西班牙辣香肠。",
      "nl": "Gepekelde varkensschouder met raapstelen, aardappelen en chorizo."
    },
    "cookingProfile": {
      "en": "Expect salty pork, bitter greens, and boiled potatoes in a hearty plate.",
      "zh": "可预期咸香猪肉、略苦青菜和水煮土豆，整体厚实。",
      "nl": "Zout varkensvlees, licht bittere groente en gekookte aardappel."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish"
      ],
      "description": {
        "en": "A Galician pork shoulder plate with turnip greens, potatoes, and chorizo.",
        "zh": "加利西亚猪肩肉盘，配芜菁叶、土豆和辣香肠。",
        "nl": "Een Galicisch bord met varkensschouder, raapstelen, aardappel en chorizo."
      }
    },
    "composition": [
      [
        "pork",
        45,
        "cured shoulder"
      ],
      [
        "turnip-greens",
        25,
        "greens"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "chorizo",
        10,
        "sausage"
      ]
    ],
    "distinctiveFlavorSources": [
      "cured pork",
      "turnip greens",
      "chorizo"
    ],
    "basicTaste": [
      "salty",
      "savory",
      "earthy"
    ],
    "textureProfile": [
      "tender pork slices",
      "leafy greens",
      "soft potatoes"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "regional-dish",
      "comfort-food"
    ],
    "avoidIfTags": [
      "no-pork",
      "avoid-salty-food"
    ],
    "orderVerdict": {
      "en": "Good for a rustic pork-and-greens main; skip if cured pork is too salty for you.",
      "zh": "想吃乡土猪肉配青菜主菜时适合；怕腌猪肉偏咸则谨慎。",
      "nl": "Goed voor rustiek varken met groente; sla over als gepekeld vlees te zout is."
    },
    "confidenceTag": "audited-remaining-batch-040",
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/105050-lacon-con-grelos.webp",
    "thumbPath": "/assets/dishes/thumb/105050-lacon-con-grelos.webp"
  },
  {
    "id": "oreja-a-la-plancha",
    "metadataCode": "105051",
    "imageCode": "105051",
    "cuisineId": "spanish",
    "names": {
      "en": "Oreja a la Plancha",
      "zh": "铁板煎猪耳",
      "nl": "Oreja a la plancha",
      "local": "Oreja a la plancha"
    },
    "category": "starter",
    "cookingMethods": [
      "grilled",
      "fried"
    ],
    "shortDescription": {
      "en": "Sliced pig ear grilled or pan-fried until chewy with crisp browned edges.",
      "zh": "猪耳切片煎烤，口感有嚼劲，边缘焦脆。",
      "nl": "Plakjes varkensoor gegrild of gebakken tot taai met krokante randjes."
    },
    "cookingProfile": {
      "en": "Expect chewy gelatinous pork texture, not tender steak.",
      "zh": "可预期胶质有嚼劲的猪肉口感，不是嫩牛排。",
      "nl": "Verwacht taaie gelatineuze varkenstextuur, geen malse steak."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "tapas",
        "regional-dish"
      ],
      "description": {
        "en": "A Spanish tapas dish of grilled pig ear with crisp edges.",
        "zh": "西班牙 tapas 猪耳，重点是煎烤后的脆边和胶质嚼感。",
        "nl": "Een Spaanse tapa van gegrild varkensoor met krokante randjes."
      }
    },
    "composition": [
      [
        "pig-ear",
        70,
        "offal"
      ],
      [
        "olive-oil",
        10,
        "griddle fat",
        "seasoning"
      ],
      [
        "garlic",
        10,
        "aromatic"
      ],
      [
        "parsley",
        5,
        "fresh herb",
        "seasoning"
      ],
      [
        "lemon",
        5,
        "acid"
      ]
    ],
    "distinctiveFlavorSources": [
      "grilled pig ear",
      "garlic parsley",
      "lemon"
    ],
    "basicTaste": [
      "savory",
      "garlicky",
      "rich"
    ],
    "textureProfile": [
      "chewy ear",
      "crisp edges",
      "oily finish"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "tapas",
      "adventurous"
    ],
    "avoidIfTags": [
      "no-pork",
      "avoid-offal",
      "avoid-chewy-texture"
    ],
    "orderVerdict": {
      "en": "Order only if chewy offal tapas sounds appealing; skip if gelatinous pork texture is uncomfortable.",
      "zh": "只有能接受有嚼劲内脏类 tapas 时才推荐；不喜欢胶质猪耳则避开。",
      "nl": "Bestel alleen als taaie orgaantapa aanspreekt; sla over bij moeite met varkensoor."
    },
    "confidenceTag": "audited-remaining-batch-040",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 4,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/105051-oreja-a-la-plancha.webp",
    "thumbPath": "/assets/dishes/thumb/105051-oreja-a-la-plancha.webp"
  },
  {
    "id": "txangurro",
    "metadataCode": "105052",
    "imageCode": "105052",
    "cuisineId": "spanish",
    "names": {
      "en": "Txangurro",
      "zh": "巴斯克焗蟹壳",
      "nl": "Txangurro",
      "local": "Txangurro"
    },
    "category": "seafood",
    "cookingMethods": [
      "baked",
      "simmered"
    ],
    "shortDescription": {
      "en": "Cooked crab meat mixed with tomato, onion, and brandy-like depth, served in the shell.",
      "zh": "熟蟹肉拌番茄、洋葱和酒香调味，装在蟹壳里上桌。",
      "nl": "Gekookt krabvlees met tomaat, ui en brandyachtige diepte, in de schaal geserveerd."
    },
    "cookingProfile": {
      "en": "Expect sweet crab meat with a saucy baked top, richer than plain boiled crab.",
      "zh": "蟹肉鲜甜，表层带酱汁焗香，比清煮蟹更浓。",
      "nl": "Zoet krabvlees met sauzige gegratineerde bovenkant, rijker dan gekookte krab."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "seafood"
      ],
      "description": {
        "en": "A Basque stuffed crab dish often served gratinated in the shell.",
        "zh": "巴斯克蟹肉菜，常把蟹肉调味后装回壳中焗烤。",
        "nl": "Een Baskisch krabgerecht, vaak gegratineerd in de schaal."
      }
    },
    "composition": [
      [
        "crab",
        60,
        "crab meat"
      ],
      [
        "tomato-sauce",
        15,
        "sauce base",
        "seasoning"
      ],
      [
        "onion",
        10,
        "aromatic"
      ],
      [
        "wine",
        5,
        "brandy-like depth"
      ],
      [
        "bread",
        5,
        "crumb topping"
      ],
      [
        "olive-oil",
        5,
        "richness",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "crab",
      "tomato onion sofrito",
      "brandy-like depth"
    ],
    "basicTaste": [
      "sweet",
      "savory",
      "briny"
    ],
    "textureProfile": [
      "shredded crab",
      "saucy shell filling",
      "light gratin"
    ],
    "riskFlags": [
      "contains-shellfish",
      "contains-gluten",
      "contains-alcohol"
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
      "gluten-free",
      "avoid-alcohol"
    ],
    "orderVerdict": {
      "en": "A strong pick for crab lovers; skip if shellfish or rich seafood stuffing is an issue.",
      "zh": "喜欢蟹肉时很值得；贝类过敏或不爱浓郁蟹馅则避开。",
      "nl": "Sterk voor krabliefhebbers; sla over bij schelpdierallergie of rijke vulling."
    },
    "confidenceTag": "audited-remaining-batch-040",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/105052-txangurro.webp",
    "thumbPath": "/assets/dishes/thumb/105052-txangurro.webp"
  },
  {
    "id": "kokotxas",
    "metadataCode": "105053",
    "imageCode": "105053",
    "cuisineId": "spanish",
    "names": {
      "en": "Kokotxas",
      "zh": "巴斯克鱼脸颊肉",
      "nl": "Kokotxas",
      "local": "Kokotxas"
    },
    "category": "seafood",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Tender fish cheeks served in glossy garlic olive-oil sauce.",
      "zh": "嫩鱼脸颊肉配蒜香橄榄油乳化酱汁。",
      "nl": "Malse viswangen in glanzende knoflook-olijfoliesaus."
    },
    "cookingProfile": {
      "en": "Expect gelatinous tender fish pieces and a rich emulsified sauce.",
      "zh": "可预期胶质嫩滑的鱼肉小块和浓润乳化酱汁。",
      "nl": "Verwacht gelatineuze malse visstukjes en rijke geëmulgeerde saus."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "seafood"
      ],
      "description": {
        "en": "A Basque delicacy of hake or cod cheeks in pil-pil style sauce.",
        "zh": "巴斯克鱼脸颊肉菜，常用蒜香橄榄油乳化汁。",
        "nl": "Een Baskische delicatesse van heek- of kabeljauwwangen in pil-pilsaus."
      }
    },
    "composition": [
      [
        "fish-cheeks",
        65,
        "fish cheeks"
      ],
      [
        "olive-oil",
        20,
        "pil-pil sauce",
        "seasoning"
      ],
      [
        "garlic",
        5,
        "aromatic"
      ],
      [
        "parsley",
        5,
        "fresh herb",
        "seasoning"
      ],
      [
        "lemon",
        5,
        "acid"
      ]
    ],
    "distinctiveFlavorSources": [
      "fish cheeks",
      "garlic olive oil",
      "parsley"
    ],
    "basicTaste": [
      "savory",
      "garlicky",
      "delicate"
    ],
    "textureProfile": [
      "gelatinous fish",
      "glossy sauce",
      "tender bites"
    ],
    "riskFlags": [
      "contains-fish"
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
      "avoid-gelatinous-texture"
    ],
    "orderVerdict": {
      "en": "Good for diners who enjoy delicate fish textures; skip if gelatinous seafood feels strange.",
      "zh": "适合喜欢细嫩鱼肉口感的人；不习惯胶质海鲜则谨慎。",
      "nl": "Goed voor wie delicate visstructuur waardeert; sla over als gelatineuze zeevrucht vreemd voelt."
    },
    "confidenceTag": "audited-remaining-batch-040",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/105053-kokotxas.webp",
    "thumbPath": "/assets/dishes/thumb/105053-kokotxas.webp"
  },
  {
    "id": "tarta-de-queso-vasca",
    "metadataCode": "105054",
    "imageCode": "105054",
    "cuisineId": "spanish",
    "names": {
      "en": "Basque Cheesecake",
      "zh": "巴斯克焦香芝士蛋糕",
      "nl": "Baskische cheesecake",
      "local": "Tarta de queso vasca"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Crustless cheesecake with a deeply browned top and creamy center.",
      "zh": "无饼底芝士蛋糕，顶部深焦色，中心柔滑。",
      "nl": "Cheesecake zonder bodem met donkere bovenkant en romige kern."
    },
    "cookingProfile": {
      "en": "Expect rich dairy, caramelized bitterness, and a soft custardy middle.",
      "zh": "可预期浓乳香、焦糖微苦和柔软布丁感内心。",
      "nl": "Rijk zuivel, gekaramelliseerde bitterheid en zachte custardkern."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "dessert",
        "classic-dish"
      ],
      "description": {
        "en": "A Basque-style burnt cheesecake with a browned top and soft center.",
        "zh": "巴斯克风格焦香芝士蛋糕，顶部深色，内部柔软。",
        "nl": "Een Baskische cheesecake met gebrande bovenkant en zachte kern."
      }
    },
    "composition": [
      [
        "cream-cheese",
        45,
        "cheese body"
      ],
      [
        "cream",
        25,
        "richness"
      ],
      [
        "egg",
        15,
        "set structure"
      ],
      [
        "sugar",
        10,
        "sweetness"
      ],
      [
        "wheat-flour",
        5,
        "light binder"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream cheese",
      "burnt top",
      "caramelized sugar"
    ],
    "basicTaste": [
      "sweet",
      "creamy",
      "caramelized"
    ],
    "textureProfile": [
      "soft center",
      "browned top",
      "dense slice"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-egg",
      "contains-gluten"
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
      "egg-allergy",
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "A strong dessert pick if you like rich cheesecake; skip if you want something light or dairy-free.",
      "zh": "喜欢浓郁芝士蛋糕时很稳；想要清淡或无乳制品则不适合。",
      "nl": "Sterk dessert als je rijke cheesecake wilt; sla over bij licht of zuivelvrij."
    },
    "confidenceTag": "audited-remaining-batch-040",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/105054-tarta-de-queso-vasca.webp",
    "thumbPath": "/assets/dishes/thumb/105054-tarta-de-queso-vasca.webp"
  },
  {
    "id": "torrijas",
    "metadataCode": "105055",
    "imageCode": "105055",
    "cuisineId": "spanish",
    "names": {
      "en": "Torrijas",
      "zh": "西班牙牛奶浸炸面包",
      "nl": "Torrijas",
      "local": "Torrijas"
    },
    "category": "dessert",
    "cookingMethods": [
      "fried"
    ],
    "shortDescription": {
      "en": "Thick bread slices soaked in milk or wine, fried, and finished with cinnamon sugar or syrup.",
      "zh": "厚面包片用牛奶或酒浸泡后煎炸，撒肉桂糖或淋糖浆。",
      "nl": "Dikke sneetjes brood geweekt in melk of wijn, gebakken en afgewerkt met kaneelsuiker of siroop."
    },
    "cookingProfile": {
      "en": "Expect soft custardy bread with a browned sweet outside.",
      "zh": "内部像布丁般柔软，外层煎至甜香上色。",
      "nl": "Zacht custardachtig brood met zoete bruine buitenkant."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "dessert",
        "festival"
      ],
      "description": {
        "en": "A Spanish milk-soaked fried bread dessert often served with cinnamon and syrup.",
        "zh": "西班牙牛奶浸炸面包甜点，常配肉桂和糖浆。",
        "nl": "Een Spaans dessert van in melk geweekt gebakken brood met kaneel en siroop."
      }
    },
    "composition": [
      [
        "bread",
        45,
        "soaked bread"
      ],
      [
        "milk-solids",
        20,
        "soak"
      ],
      [
        "egg",
        15,
        "coating"
      ],
      [
        "sugar",
        10,
        "sweetness"
      ],
      [
        "cinnamon",
        5,
        "spice",
        "seasoning"
      ],
      [
        "honey",
        5,
        "syrup"
      ]
    ],
    "distinctiveFlavorSources": [
      "cinnamon sugar",
      "milk-soaked bread",
      "honey syrup"
    ],
    "basicTaste": [
      "sweet",
      "warm-spiced",
      "milky"
    ],
    "textureProfile": [
      "soft soaked center",
      "fried edges",
      "sticky syrup"
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
      "dessert",
      "festival"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "Good for a warm sweet bread dessert; skip if soft soaked bread texture is not appealing.",
      "zh": "想吃温热甜面包甜点时适合；不喜欢浸软面包口感则避开。",
      "nl": "Goed voor warm zoet brooddessert; sla over als geweekt brood niet past."
    },
    "confidenceTag": "audited-remaining-batch-040",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/105055-torrijas.webp",
    "thumbPath": "/assets/dishes/thumb/105055-torrijas.webp"
  },
  {
    "id": "leche-frita",
    "metadataCode": "105056",
    "imageCode": "105056",
    "cuisineId": "spanish",
    "names": {
      "en": "Leche Frita",
      "zh": "西班牙炸牛奶",
      "nl": "Leche frita",
      "local": "Leche frita"
    },
    "category": "dessert",
    "cookingMethods": [
      "set",
      "fried"
    ],
    "shortDescription": {
      "en": "Set milk custard cut into squares, fried, and dusted with cinnamon sugar.",
      "zh": "牛奶卡仕达凝固后切方块油炸，再撒肉桂糖。",
      "nl": "Opgestijfde melkcustard in blokjes, gebakken en bestrooid met kaneelsuiker."
    },
    "cookingProfile": {
      "en": "Expect a crisp sweet outside and soft creamy center.",
      "zh": "外层甜脆，中心柔软奶香。",
      "nl": "Krokant zoet buiten, zacht romig binnen."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "dessert"
      ],
      "description": {
        "en": "A Spanish fried milk custard dessert with cinnamon sugar.",
        "zh": "西班牙炸牛奶甜点，常配肉桂糖。",
        "nl": "Een Spaans dessert van gefrituurde melkcustard met kaneelsuiker."
      }
    },
    "composition": [
      [
        "milk-solids",
        40,
        "milk custard"
      ],
      [
        "cornstarch",
        20,
        "set binder"
      ],
      [
        "egg",
        15,
        "coating"
      ],
      [
        "wheat-flour",
        10,
        "coating"
      ],
      [
        "sugar",
        10,
        "sweetness"
      ],
      [
        "cinnamon",
        5,
        "spice",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "milk custard",
      "cinnamon sugar",
      "fried coating"
    ],
    "basicTaste": [
      "sweet",
      "milky",
      "warm-spiced"
    ],
    "textureProfile": [
      "crisp exterior",
      "soft custard center",
      "sugar dusting"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-egg",
      "contains-gluten"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert"
    ],
    "avoidIfTags": [
      "dairy-free",
      "egg-allergy",
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Choose it for creamy fried custard; skip if fried desserts feel too heavy.",
      "zh": "想吃外脆内软奶香甜点时适合；不爱油炸甜品则避开。",
      "nl": "Kies dit voor romige gefrituurde custard; sla over als frituurd dessert te zwaar is."
    },
    "confidenceTag": "audited-remaining-batch-040",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/105056-leche-frita.webp",
    "thumbPath": "/assets/dishes/thumb/105056-leche-frita.webp"
  },
  {
    "id": "natillas",
    "metadataCode": "105057",
    "imageCode": "105057",
    "cuisineId": "spanish",
    "names": {
      "en": "Natillas",
      "zh": "西班牙蛋奶冻",
      "nl": "Natillas",
      "local": "Natillas"
    },
    "category": "dessert",
    "cookingMethods": [
      "stirred",
      "chilled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "Smooth egg custard served chilled with cinnamon and often a biscuit on top.",
      "zh": "顺滑蛋奶冻冷食，撒肉桂，常放一块饼干。",
      "nl": "Gladde eiercustard, gekoeld met kaneel en vaak een koekje."
    },
    "cookingProfile": {
      "en": "Expect a spoonable, mild, creamy dessert.",
      "zh": "可预期温和顺滑、奶香明显的勺食甜品。",
      "nl": "Verwacht een mild romig lepeldessert."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "dessert",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A Spanish custard dessert commonly flavored with cinnamon and topped with a biscuit.",
        "zh": "西班牙蛋奶冻甜品，常有肉桂和饼干。",
        "nl": "Een Spaans custarddessert met kaneel en vaak een koekje."
      }
    },
    "composition": [
      [
        "vanilla-custard",
        55,
        "custard"
      ],
      [
        "egg",
        15,
        "set richness"
      ],
      [
        "milk-solids",
        15,
        "dairy"
      ],
      [
        "maria-biscuits",
        10,
        "biscuit topping"
      ],
      [
        "cinnamon",
        5,
        "spice",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "custard",
      "cinnamon",
      "biscuit"
    ],
    "basicTaste": [
      "sweet",
      "creamy",
      "warm-spiced"
    ],
    "textureProfile": [
      "smooth custard",
      "soft spoonfuls",
      "biscuit topping"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-egg",
      "contains-gluten"
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
      "egg-allergy",
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "A safe gentle dessert if you like custard; skip if you want texture or chocolate intensity.",
      "zh": "喜欢温和蛋奶冻时很稳；想要强口感或巧克力浓味则不适合。",
      "nl": "Veilig en mild als je custard lust; sla over als je textuur of chocolade zoekt."
    },
    "confidenceTag": "audited-remaining-batch-040",
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/105057-natillas.webp",
    "thumbPath": "/assets/dishes/thumb/105057-natillas.webp"
  },
  {
    "id": "tocino-de-cielo",
    "metadataCode": "105058",
    "imageCode": "105058",
    "cuisineId": "spanish",
    "names": {
      "en": "Tocino de Cielo",
      "zh": "西班牙蛋黄金糕布丁",
      "nl": "Tocino de cielo",
      "local": "Tocino de cielo"
    },
    "category": "dessert",
    "cookingMethods": [
      "set",
      "steamed"
    ],
    "shortDescription": {
      "en": "Dense glossy egg-yolk custard with caramel syrup.",
      "zh": "浓密光滑的蛋黄布丁，配焦糖糖浆。",
      "nl": "Dichte glanzende eidooiercustard met karamelsiroop."
    },
    "cookingProfile": {
      "en": "Expect intense sweetness and egg-yolk richness in a small portion.",
      "zh": "小份但甜度和蛋黄浓郁感都很强。",
      "nl": "Klein van portie maar intens zoet en eidooier-rijk."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "dessert"
      ],
      "description": {
        "en": "A very rich Spanish egg-yolk caramel custard.",
        "zh": "非常浓郁的西班牙蛋黄焦糖布丁。",
        "nl": "Een zeer rijke Spaanse eidooier-karamelcustard."
      }
    },
    "composition": [
      [
        "egg",
        45,
        "egg yolk custard"
      ],
      [
        "sugar",
        35,
        "caramel syrup"
      ],
      [
        "fruit-sauce-or-caramel",
        15,
        "caramel finish"
      ],
      [
        "vanilla",
        5,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "egg yolk",
      "caramel",
      "vanilla"
    ],
    "basicTaste": [
      "very-sweet",
      "eggy",
      "caramel"
    ],
    "textureProfile": [
      "dense custard",
      "glossy syrup",
      "smooth set"
    ],
    "riskFlags": [
      "contains-egg"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert"
    ],
    "avoidIfTags": [
      "egg-allergy",
      "avoid-very-sweet"
    ],
    "orderVerdict": {
      "en": "Best for people who love very sweet custards; skip if eggy desserts are too intense.",
      "zh": "适合喜欢高甜蛋奶甜品的人；不爱蛋味重的甜点则避开。",
      "nl": "Voor liefhebbers van zeer zoete custard; sla over als eierige desserts te intens zijn."
    },
    "confidenceTag": "audited-remaining-batch-040",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/105058-tocino-de-cielo.webp",
    "thumbPath": "/assets/dishes/thumb/105058-tocino-de-cielo.webp"
  },
  {
    "id": "ensaimada",
    "metadataCode": "105059",
    "imageCode": "105059",
    "cuisineId": "spanish",
    "names": {
      "en": "Ensaimada",
      "zh": "马略卡螺旋甜面包",
      "nl": "Ensaimada",
      "local": "Ensaïmada"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Large spiral pastry with airy layers and powdered sugar.",
      "zh": "大号螺旋形甜面包，层次松软，撒糖粉。",
      "nl": "Groot spiraalgebak met luchtige lagen en poedersuiker."
    },
    "cookingProfile": {
      "en": "Expect a light flaky-bready pastry, sweeter and airier than plain bread.",
      "zh": "口感介于酥皮和面包之间，比普通面包更甜更轻。",
      "nl": "Licht bladerig-broodachtig, zoeter en luchtiger dan gewoon brood."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "dessert",
        "regional-dish"
      ],
      "description": {
        "en": "A Mallorcan spiral pastry dusted with powdered sugar.",
        "zh": "马略卡螺旋甜面包，表面常撒糖粉。",
        "nl": "Een Mallorcaanse spiraalvormige zoete broodsnack met poedersuiker."
      }
    },
    "composition": [
      [
        "wheat-flour",
        40,
        "dough"
      ],
      [
        "butter",
        25,
        "fat-rich layers"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        10,
        "dough richness"
      ],
      [
        "cream",
        5,
        "optional filling"
      ]
    ],
    "distinctiveFlavorSources": [
      "sweet dough",
      "buttery layers",
      "powdered sugar"
    ],
    "basicTaste": [
      "sweet",
      "buttery",
      "mild"
    ],
    "textureProfile": [
      "spiral pastry",
      "airy layers",
      "soft crumb"
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
      "dessert",
      "bakery"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "Good for a lighter sweet pastry; skip if you want a creamy plated dessert.",
      "zh": "想吃较轻的甜面包酥点时适合；想要盘装奶油甜点则可换别的。",
      "nl": "Goed voor lichter zoet gebak; sla over als je romig dessert wilt."
    },
    "confidenceTag": "audited-remaining-batch-040",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/105059-ensaimada.webp",
    "thumbPath": "/assets/dishes/thumb/105059-ensaimada.webp"
  },
  {
    "id": "queso-manchego",
    "metadataCode": "105060",
    "imageCode": "105060",
    "cuisineId": "spanish",
    "names": {
      "en": "Queso Manchego",
      "zh": "曼切戈奶酪",
      "nl": "Manchego-kaas",
      "local": "Queso manchego"
    },
    "category": "starter",
    "cookingMethods": [
      "assembled"
    ],
    "servingTemperature": "room-temperature",
    "shortDescription": {
      "en": "Firm sheep milk cheese served in wedges or slices, often with quince paste.",
      "zh": "硬质羊奶奶酪切片或切块上桌，常配榅桲果膏。",
      "nl": "Stevige schapenkaas in plakken of punten, vaak met kweepeerpasta."
    },
    "cookingProfile": {
      "en": "Expect nutty salty cheese, firm texture, and sweet fruit paste contrast.",
      "zh": "可预期坚果感咸香奶酪、紧实口感和甜果膏对比。",
      "nl": "Notig-zoute kaas met stevige beet en zoete fruitpasta."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "tapas"
      ],
      "description": {
        "en": "A Spanish sheep-cheese plate often served with quince paste or olives.",
        "zh": "西班牙羊奶硬质奶酪，常配榅桲果膏或橄榄。",
        "nl": "Een Spaanse schapenkaas, vaak met kweepeerpasta of olijven."
      }
    },
    "composition": [
      [
        "manchego-cheese",
        70,
        "cheese"
      ],
      [
        "quince-paste",
        15,
        "sweet pairing"
      ],
      [
        "olives",
        10,
        "briny side"
      ],
      [
        "olive-oil",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "sheep cheese",
      "quince paste",
      "olives"
    ],
    "basicTaste": [
      "salty",
      "nutty",
      "sweet-savory"
    ],
    "textureProfile": [
      "firm cheese slices",
      "dense fruit paste",
      "briny olives"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "tapas",
      "cheese-plate"
    ],
    "avoidIfTags": [
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "A safe tapas choice for cheese lovers; skip if you avoid dairy or want a hot dish.",
      "zh": "喜欢奶酪拼盘时很稳；不吃奶制品或想吃热菜则不适合。",
      "nl": "Veilige tapas voor kaasliefhebbers; sla over bij zuivelvrij of als je warm eten wilt."
    },
    "confidenceTag": "audited-remaining-batch-040",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/105060-queso-manchego.webp",
    "thumbPath": "/assets/dishes/thumb/105060-queso-manchego.webp"
  },
  {
    "id": "frikadellen-german",
    "metadataCode": "106031",
    "cuisineId": "german",
    "names": {
      "en": "Frikadellen",
      "zh": "德式煎肉饼",
      "nl": "Frikadellen",
      "local": "Frikadellen"
    },
    "category": "meat",
    "cookingMethods": [
      "fried"
    ],
    "shortDescription": {
      "en": "Pan-fried German meat patties, often served with mustard, potato salad, or bread.",
      "zh": "平底锅煎的德式肉饼，常配芥末、土豆沙拉或面包。",
      "nl": "Gebakken Duitse gehaktballen/gehaktschijven, vaak met mosterd, aardappelsalade of brood."
    },
    "cookingProfile": {
      "en": "They are browned in a pan, so they have a crust outside and a soft minced-meat center.",
      "zh": "平底锅煎出焦香外层，里面是柔软肉糜口感。",
      "nl": "In de pan gebruind, met korst buiten en zachte gehaktkern."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish",
        "comfort-food"
      ],
      "description": {
        "en": "A common German home-style and pub-style meat patty, distinct from creamy meatball dishes.",
        "zh": "德国常见家常/酒馆风肉饼，和奶油酱肉丸不同。",
        "nl": "Een veelvoorkomende Duitse huiselijke of kroegachtige gehaktschijf, anders dan romige gehaktballetjes."
      }
    },
    "composition": [
      [
        "ground-meat",
        60,
        "patty"
      ],
      [
        "bread",
        15,
        "binder"
      ],
      [
        "egg",
        10,
        "binder"
      ],
      [
        "onion",
        10,
        "aroma"
      ],
      [
        "mustard",
        5,
        "condiment",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "browned ground meat",
      "onion",
      "mustard"
    ],
    "basicTaste": [
      "savory",
      "salty",
      "meaty"
    ],
    "textureProfile": [
      "browned crust",
      "soft minced center",
      "firm bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food",
      "first-timer-friendly"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "A straightforward meat choice; ask whether it is beef, pork, or mixed if that matters.",
      "zh": "是直接好懂的肉类选择；介意牛猪混合时要确认肉源。",
      "nl": "Een rechttoe rechtaan vleeskeuze; vraag naar rund, varken of gemengd als dat uitmaakt."
    },
    "confidenceTag": "audited-german-batch-007",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "hackbraten",
    "metadataCode": "106032",
    "cuisineId": "german",
    "names": {
      "en": "Hackbraten",
      "zh": "德式肉糜烤排",
      "nl": "Hackbraten",
      "local": "Hackbraten"
    },
    "category": "main",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "German-style meatloaf, usually sliced and served with gravy, potatoes, and vegetables.",
      "zh": "德式肉糜烤排，通常切片配肉汁、土豆和蔬菜。",
      "nl": "Duitse gehaktbroodschijf, meestal met jus, aardappelen en groente."
    },
    "cookingProfile": {
      "en": "Expect a tender, compact meat slice with brown gravy rather than a crisp cutlet.",
      "zh": "入口是紧实柔软的肉糜切片和棕色肉汁，不是酥炸肉排。",
      "nl": "Verwacht een malse, compacte plak gehaktbrood met bruine jus, geen krokante schnitzel."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "comfort-food"
      ],
      "description": {
        "en": "A classic German comfort plate recognized by sliced meatloaf and gravy.",
        "zh": "经典德国家常肉类菜，识别重点是肉糜烤排切片和肉汁。",
        "nl": "Een klassieke Duitse comfortmaaltijd met plakjes gehaktbrood en jus."
      }
    },
    "composition": [
      [
        "ground-meat",
        55,
        "meatloaf base"
      ],
      [
        "bread",
        15,
        "binder"
      ],
      [
        "egg",
        10,
        "binder"
      ],
      [
        "onion",
        10,
        "aromatic"
      ],
      [
        "black-pepper",
        5,
        "seasoning",
        "seasoning"
      ],
      [
        "parsley",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "brown gravy",
      "onion",
      "black pepper"
    ],
    "basicTaste": [
      "savory",
      "meaty",
      "mild"
    ],
    "textureProfile": [
      "compact tender meatloaf",
      "saucy surface",
      "soft potato side"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "Choose it for a mild, filling meat-and-gravy plate; skip if you want a crisp or light dish.",
      "zh": "想吃温和饱腹的肉汁肉排时可点；想要清爽或酥脆菜则不适合。",
      "nl": "Kies dit voor een milde, vullende vlees-jusmaaltijd; sla over als je iets lichts of krokants wilt."
    },
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "imageCode": "106032",
    "imagePath": "/assets/dishes/main/106032-hackbraten.webp",
    "thumbPath": "/assets/dishes/thumb/106032-hackbraten.webp",
    "confidenceTag": "audited-remaining-batch-041",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "schupfnudeln",
    "metadataCode": "106033",
    "cuisineId": "german",
    "names": {
      "en": "Schupfnudeln",
      "zh": "德式土豆手指面",
      "nl": "Schupfnudeln",
      "local": "Schupfnudeln"
    },
    "category": "main",
    "cookingMethods": [
      "boiled",
      "fried"
    ],
    "shortDescription": {
      "en": "Finger-shaped German potato noodles, often pan-fried and served with sauerkraut or bacon.",
      "zh": "手指形土豆面团，常煎至微焦，配酸菜或培根。",
      "nl": "Vingervormige aardappelnoedels, vaak gebakken met zuurkool of spek."
    },
    "cookingProfile": {
      "en": "They feel chewy-soft with browned edges, more like potato dumplings than pasta.",
      "zh": "口感软糯带轻微嚼劲，边缘煎香，更像土豆团子而不是意面。",
      "nl": "Ze zijn zacht en licht taai met gebakken randjes, meer aardappeldeeg dan pasta."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "comfort-food"
      ],
      "description": {
        "en": "A southern German and Alpine-style potato noodle dish with a pan-fried cue.",
        "zh": "德国南部和阿尔卑斯地区常见土豆面菜，重点是手指形和煎香表面。",
        "nl": "Een Zuid-Duits en alpien aardappelnoedelgerecht met gebakken herkenning."
      }
    },
    "composition": [
      [
        "potato",
        50,
        "potato dough"
      ],
      [
        "wheat-flour",
        20,
        "structure"
      ],
      [
        "egg",
        10,
        "binder"
      ],
      [
        "sauerkraut",
        10,
        "tangy side"
      ],
      [
        "bacon",
        5,
        "optional savory bits"
      ],
      [
        "parsley",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "fried potato dough",
      "sauerkraut tang",
      "bacon"
    ],
    "basicTaste": [
      "savory",
      "mildly tangy",
      "hearty"
    ],
    "textureProfile": [
      "chewy-soft noodles",
      "browned edges",
      "tangy cabbage"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-allergy",
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Good if you like chewy potato dumplings; check whether the version includes bacon.",
      "zh": "喜欢软糯土豆团子口感时适合；不吃猪肉要确认是否加培根。",
      "nl": "Goed als je zachte aardappeldeeg-noedels lust; vraag of er spek in zit."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "imageCode": "106033",
    "imagePath": "/assets/dishes/main/106033-schupfnudeln.webp",
    "thumbPath": "/assets/dishes/thumb/106033-schupfnudeln.webp",
    "confidenceTag": "audited-remaining-batch-041",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "bratkartoffeln",
    "metadataCode": "106034",
    "cuisineId": "german",
    "names": {
      "en": "Bratkartoffeln",
      "zh": "德式煎土豆",
      "nl": "Bratkartoffeln",
      "local": "Bratkartoffeln"
    },
    "category": "side",
    "cookingMethods": [
      "fried"
    ],
    "shortDescription": {
      "en": "Pan-fried potato slices with browned edges, usually mixed with onion and sometimes bacon.",
      "zh": "切片土豆煎至金黄，常拌洋葱，有时加培根。",
      "nl": "Gebakken aardappelschijfjes met ui en soms spek."
    },
    "cookingProfile": {
      "en": "Expect crisp-edged potatoes with oily, salty comfort rather than a creamy gratin.",
      "zh": "入口是边缘焦香的油润土豆，不是奶油烤土豆。",
      "nl": "Verwacht aardappels met krokante randjes, niet een romige gratin."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "A very common German potato side that can also appear as a simple comfort plate.",
        "zh": "德国菜单上常见土豆配菜，也可作为简单家常盘。",
        "nl": "Een veelvoorkomend Duits aardappelbijgerecht of eenvoudige comfortmaaltijd."
      }
    },
    "composition": [
      [
        "potato",
        65,
        "fried slices"
      ],
      [
        "onion",
        15,
        "aromatic"
      ],
      [
        "bacon",
        10,
        "optional savory bits"
      ],
      [
        "butter",
        5,
        "frying richness"
      ],
      [
        "parsley",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pan-browned potato",
      "onion",
      "bacon"
    ],
    "basicTaste": [
      "savory",
      "salty",
      "hearty"
    ],
    "textureProfile": [
      "crisp edges",
      "soft potato centers",
      "small onion pieces"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "safe-choice",
      "comfort-food"
    ],
    "avoidIfTags": [
      "no-pork",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "A safe hearty potato side; ask about bacon if you avoid pork.",
      "zh": "是稳妥厚实的土豆配菜；不吃猪肉要问是否加培根。",
      "nl": "Een veilige stevige aardappelkeuze; vraag naar spek als je geen varken eet."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "imageCode": "106034",
    "imagePath": "/assets/dishes/main/106034-bratkartoffeln.webp",
    "thumbPath": "/assets/dishes/thumb/106034-bratkartoffeln.webp",
    "confidenceTag": "audited-remaining-batch-041",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "kartoffelknoedel",
    "metadataCode": "106035",
    "cuisineId": "german",
    "names": {
      "en": "Kartoffelknödel",
      "zh": "德式土豆丸子",
      "nl": "Kartoffelknoedel",
      "local": "Kartoffelknödel"
    },
    "category": "side",
    "cookingMethods": [
      "boiled"
    ],
    "shortDescription": {
      "en": "Large soft potato dumplings usually served with roast meat and gravy.",
      "zh": "大颗柔软土豆丸子，常配烤肉和肉汁。",
      "nl": "Grote zachte aardappelknoedels, vaak met gebraad en jus."
    },
    "cookingProfile": {
      "en": "They are filling, soft, and gravy-soaking, closer to dumplings than bread.",
      "zh": "口感饱腹柔软，很吸肉汁，更接近团子而不是面包。",
      "nl": "Ze zijn vullend, zacht en nemen jus op, meer knoedel dan brood."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "A classic German roast side where the dumpling absorbs sauce.",
        "zh": "经典德国烤肉配菜，重点是土豆丸子吸肉汁。",
        "nl": "Een klassiek Duits bijgerecht bij gebraad, bedoeld om jus op te nemen."
      }
    },
    "composition": [
      [
        "potato-dumpling",
        70,
        "dumpling base"
      ],
      [
        "potato",
        15,
        "starchy body"
      ],
      [
        "egg",
        5,
        "binder"
      ],
      [
        "butter",
        5,
        "richness"
      ],
      [
        "parsley",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "potato dumpling",
      "brown gravy",
      "butter"
    ],
    "basicTaste": [
      "mild",
      "savory",
      "starchy"
    ],
    "textureProfile": [
      "soft dense dumpling",
      "smooth potato bite",
      "sauce-soaked surface"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "comfort-food"
    ],
    "avoidIfTags": [
      "egg-allergy",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Good with saucy roasts; skip if you want a crisp or low-carb side.",
      "zh": "配有酱汁的烤肉很合适；想要酥脆或低碳水配菜则不适合。",
      "nl": "Goed bij sauzig gebraad; sla over als je iets krokants of koolhydraatarm wilt."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "imageCode": "106035",
    "imagePath": "/assets/dishes/main/106035-kartoffelknoedel.webp",
    "thumbPath": "/assets/dishes/thumb/106035-kartoffelknoedel.webp",
    "confidenceTag": "audited-remaining-batch-041",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "schweinebraten",
    "metadataCode": "106036",
    "cuisineId": "german",
    "names": {
      "en": "Schweinebraten",
      "zh": "德式烤猪肉",
      "nl": "Schweinebraten",
      "local": "Schweinebraten"
    },
    "category": "main",
    "cookingMethods": [
      "baked",
      "braised"
    ],
    "shortDescription": {
      "en": "German roast pork served in slices with brown gravy, often with dumplings and red cabbage.",
      "zh": "德式烤猪肉切片，配棕色肉汁，常搭土豆丸子和红甘蓝。",
      "nl": "Duits varkensgebraad in plakken met bruine jus, vaak met knoedels en rode kool."
    },
    "cookingProfile": {
      "en": "Expect tender pork and gravy richness, sometimes with a browned fatty edge.",
      "zh": "常见体验是软嫩猪肉和浓郁肉汁，有时带焦香肥边。",
      "nl": "Verwacht mals varkensvlees met rijke jus en soms een gebraden vetrand."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "A classic German roast plate centered on pork, gravy, and dumpling sides.",
        "zh": "经典德国烤肉盘，核心是猪肉、肉汁和丸子配菜。",
        "nl": "Een klassieke Duitse braadschotel met varken, jus en knoedels."
      }
    },
    "composition": [
      [
        "pork",
        60,
        "roast slices"
      ],
      [
        "potato-dumpling",
        15,
        "side"
      ],
      [
        "red-cabbage",
        10,
        "sweet-sour side"
      ],
      [
        "beer",
        5,
        "braising depth",
        "seasoning"
      ],
      [
        "caraway",
        5,
        "warm spice",
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
      "roast pork",
      "brown gravy",
      "caraway"
    ],
    "basicTaste": [
      "savory",
      "rich",
      "mildly sweet-sour"
    ],
    "textureProfile": [
      "tender pork slices",
      "saucy gravy",
      "soft dumpling side"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "classic-dish",
      "comfort-food"
    ],
    "avoidIfTags": [
      "no-pork",
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Choose it for a traditional filling roast plate; skip if you avoid pork or heavy gravy.",
      "zh": "想吃传统饱腹烤肉盘时可点；不吃猪肉或不想吃厚肉汁则避开。",
      "nl": "Kies dit voor een traditionele stevige braadmaaltijd; sla over bij geen varken of zware jus."
    },
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "imageCode": "106036",
    "imagePath": "/assets/dishes/main/106036-schweinebraten.webp",
    "thumbPath": "/assets/dishes/thumb/106036-schweinebraten.webp",
    "confidenceTag": "audited-remaining-batch-041",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "kasseler",
    "metadataCode": "106037",
    "cuisineId": "german",
    "names": {
      "en": "Kasseler",
      "zh": "德式烟熏腌猪肉",
      "nl": "Kasseler",
      "local": "Kasseler"
    },
    "category": "main",
    "cookingMethods": [
      "braised"
    ],
    "shortDescription": {
      "en": "Smoked cured pork loin or chop, usually served with sauerkraut and potatoes.",
      "zh": "烟熏腌制猪里脊或猪排，常配酸菜和土豆。",
      "nl": "Gerookte gepekelde varkensrug of karbonade, vaak met zuurkool en aardappelen."
    },
    "cookingProfile": {
      "en": "It tastes saltier and smokier than plain roast pork, with a ham-like pink interior.",
      "zh": "比普通烤猪肉更咸、更烟熏，肉色常接近火腿的粉红。",
      "nl": "Zouter en rokeriger dan gewoon gebraad, met een hamachtige roze binnenkant."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "A classic Central German smoked pork plate recognized by cured pink slices.",
        "zh": "德国中部经典烟熏猪肉菜，识别重点是粉红腌肉切片。",
        "nl": "Een klassieke Duits gerookte varkensschotel met gepekelde roze plakken."
      }
    },
    "composition": [
      [
        "pork",
        60,
        "smoked cured meat"
      ],
      [
        "sauerkraut",
        20,
        "tangy side"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "mustard",
        5,
        "sharp condiment",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "smoked cured pork",
      "sauerkraut",
      "mustard"
    ],
    "basicTaste": [
      "salty",
      "smoky",
      "savory"
    ],
    "textureProfile": [
      "firm cured pork",
      "soft sauerkraut",
      "tender potatoes"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "classic-dish"
    ],
    "avoidIfTags": [
      "no-pork",
      "avoid-salty-food"
    ],
    "orderVerdict": {
      "en": "Good if you like smoky cured pork; skip if salty ham-like meat is not appealing.",
      "zh": "喜欢烟熏腌猪肉时适合；不爱咸火腿感肉类则谨慎。",
      "nl": "Goed als je gerookt gepekeld varken lust; sla over als zout hamachtig vlees niet past."
    },
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 2,
    "imageCode": "106037",
    "imagePath": "/assets/dishes/main/106037-kasseler.webp",
    "thumbPath": "/assets/dishes/thumb/106037-kasseler.webp",
    "confidenceTag": "audited-remaining-batch-041",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "erbsensuppe",
    "metadataCode": "106038",
    "cuisineId": "german",
    "names": {
      "en": "Erbsensuppe",
      "zh": "德式豌豆浓汤",
      "nl": "Erwtensoep",
      "local": "Erbsensuppe"
    },
    "category": "soup",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Thick split pea soup with vegetables and smoked sausage or pork.",
      "zh": "浓稠豌豆汤，常有蔬菜和烟熏香肠或猪肉。",
      "nl": "Dikke spliterwtensoep met groente en rookworst of varkensvlees."
    },
    "cookingProfile": {
      "en": "Expect a thick, spoon-coating soup that eats like a small meal.",
      "zh": "质地浓稠挂勺，更像一小份主食而不是清汤。",
      "nl": "Verwacht een dikke soep die bijna als maaltijd eet."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "comfort-food"
      ],
      "description": {
        "en": "A wintery German soup recognized by split peas and sausage.",
        "zh": "德国冬季常见浓汤，重点是豌豆和香肠。",
        "nl": "Een winterse Duitse soep herkenbaar aan spliterwten en worst."
      }
    },
    "composition": [
      [
        "peas",
        50,
        "soup base"
      ],
      [
        "sausage",
        20,
        "smoked pork garnish"
      ],
      [
        "potato",
        10,
        "body"
      ],
      [
        "carrot",
        10,
        "vegetable"
      ],
      [
        "leek",
        5,
        "aromatic"
      ],
      [
        "parsley",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "split peas",
      "smoked sausage",
      "vegetable broth"
    ],
    "basicTaste": [
      "savory",
      "smoky",
      "hearty"
    ],
    "textureProfile": [
      "thick soup",
      "soft peas",
      "firm sausage slices"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food",
      "soup"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Choose it for a filling soup; ask if it includes sausage when avoiding pork.",
      "zh": "想要饱腹浓汤时可点；不吃猪肉要问是否有香肠。",
      "nl": "Kies dit voor een vullende soep; vraag naar worst als je geen varken eet."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "imageCode": "106038",
    "imagePath": "/assets/dishes/main/106038-erbsensuppe.webp",
    "thumbPath": "/assets/dishes/thumb/106038-erbsensuppe.webp",
    "confidenceTag": "audited-remaining-batch-041",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "linseneintopf",
    "metadataCode": "106039",
    "cuisineId": "german",
    "names": {
      "en": "Linseneintopf",
      "zh": "德式扁豆炖汤",
      "nl": "Linzenstoof",
      "local": "Linseneintopf"
    },
    "category": "soup",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "A hearty lentil stew with root vegetables and often slices of sausage.",
      "zh": "浓厚扁豆炖汤，常有根茎蔬菜和香肠片。",
      "nl": "Een stevige linzenstoof met wortelgroente en vaak plakjes worst."
    },
    "cookingProfile": {
      "en": "It is earthy and thick, with lentils giving more body than a clear soup.",
      "zh": "味道偏朴实浓厚，扁豆让汤体比清汤更有分量。",
      "nl": "Aards en dik, met meer vulling dan een heldere soep."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "comfort-food"
      ],
      "description": {
        "en": "A common German one-pot lentil dish for a simple filling meal.",
        "zh": "德国常见一锅扁豆菜，适合简单饱腹。",
        "nl": "Een veelvoorkomende Duitse eenpans-linzenmaaltijd."
      }
    },
    "composition": [
      [
        "lentils",
        50,
        "stew base"
      ],
      [
        "sausage",
        15,
        "savory slices"
      ],
      [
        "carrot",
        15,
        "vegetable"
      ],
      [
        "potato",
        10,
        "body"
      ],
      [
        "vinegar",
        5,
        "bright finish",
        "seasoning"
      ],
      [
        "parsley",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "lentils",
      "sausage",
      "vinegar finish"
    ],
    "basicTaste": [
      "savory",
      "earthy",
      "lightly tangy"
    ],
    "textureProfile": [
      "soft lentils",
      "chunky vegetables",
      "sausage slices"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "A practical filling choice if you like lentils; skip if you want a light starter soup.",
      "zh": "喜欢扁豆、想吃饱时实用；想要轻盈前菜汤则不适合。",
      "nl": "Een praktische vullende keuze als je linzen lust; minder geschikt als lichte soep."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "imageCode": "106039",
    "imagePath": "/assets/dishes/main/106039-linseneintopf.webp",
    "thumbPath": "/assets/dishes/thumb/106039-linseneintopf.webp",
    "confidenceTag": "audited-remaining-batch-041",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "gruenkohl-mit-pinkel",
    "metadataCode": "106040",
    "cuisineId": "german",
    "names": {
      "en": "Grünkohl mit Pinkel",
      "zh": "羽衣甘蓝炖香肠",
      "nl": "Boerenkool met Pinkel",
      "local": "Grünkohl mit Pinkel"
    },
    "category": "main",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "North German cooked kale served with Pinkel sausage and potatoes.",
      "zh": "德国北部炖羽衣甘蓝，配 Pinkel 香肠和土豆。",
      "nl": "Noord-Duitse gestoofde boerenkool met Pinkelworst en aardappelen."
    },
    "cookingProfile": {
      "en": "Expect dark soft kale with smoky, fatty sausage and a very wintery feel.",
      "zh": "入口是软炖深绿色菜叶，加烟熏油脂感香肠，冬季感很强。",
      "nl": "Verwacht donkere zachte kool met rokerige vette worst, heel winters."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "classic-dish"
      ],
      "description": {
        "en": "A North German winter dish where kale and Pinkel sausage are the identity.",
        "zh": "德国北部冬季代表菜，核心是羽衣甘蓝和 Pinkel 香肠。",
        "nl": "Een Noord-Duits wintergerecht met boerenkool en Pinkelworst als kern."
      }
    },
    "composition": [
      [
        "kale",
        45,
        "cooked greens"
      ],
      [
        "sausage",
        25,
        "Pinkel sausage"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "mustard",
        5,
        "sharp condiment",
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
      "cooked kale",
      "smoked sausage",
      "mustard"
    ],
    "basicTaste": [
      "savory",
      "smoky",
      "earthy"
    ],
    "textureProfile": [
      "soft greens",
      "firm sausage slices",
      "tender potatoes"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "regional-dish",
      "comfort-food"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Good for a smoky winter comfort plate; skip if soft cooked greens are not your thing.",
      "zh": "适合想吃烟熏冬季家常菜时点；不喜欢软炖绿叶菜则谨慎。",
      "nl": "Goed voor rokerige winterse comfortkost; sla over als zachte kool je niet aanspreekt."
    },
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 2,
    "imageCode": "106040",
    "imagePath": "/assets/dishes/main/106040-gruenkohl-mit-pinkel.webp",
    "thumbPath": "/assets/dishes/thumb/106040-gruenkohl-mit-pinkel.webp",
    "confidenceTag": "audited-remaining-batch-041",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "fischbroetchen",
    "metadataCode": "106041",
    "cuisineId": "german",
    "names": {
      "en": "Fischbrötchen",
      "zh": "德式鱼肉小面包",
      "nl": "Fischbrötchen",
      "local": "Fischbrötchen"
    },
    "category": "sandwich",
    "cookingMethods": [
      "assembled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "A North German fish sandwich, often with herring, onion, pickles, and remoulade.",
      "zh": "德国北部鱼肉小面包，常夹鲱鱼、洋葱、酸黄瓜和蛋黄酱类酱汁。",
      "nl": "Een Noord-Duits visbroodje, vaak met haring, ui, augurk en remoulade."
    },
    "cookingProfile": {
      "en": "It is usually cool, briny, and fresh rather than hot fried fish.",
      "zh": "通常偏冷食，咸鲜清爽，不一定是热炸鱼。",
      "nl": "Meestal koel, zilt en fris, niet per se warme gebakken vis."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "regional-dish"
      ],
      "description": {
        "en": "A coastal North German street-food sandwich recognized by fish in a crusty roll.",
        "zh": "德国北部沿海街头小吃，重点是小面包夹鱼。",
        "nl": "Een kust-Noord-Duits streetfoodbroodje met vis in een krokant broodje."
      }
    },
    "composition": [
      [
        "bread",
        40,
        "roll"
      ],
      [
        "herring",
        35,
        "fish filling"
      ],
      [
        "onion",
        10,
        "sharp garnish"
      ],
      [
        "pickles",
        10,
        "tangy garnish"
      ],
      [
        "remoulade-sauce",
        5,
        "creamy sauce",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "herring",
      "pickles",
      "remoulade"
    ],
    "basicTaste": [
      "briny",
      "tangy",
      "savory"
    ],
    "textureProfile": [
      "crusty roll",
      "silky fish",
      "crisp onion"
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
      "street-food",
      "seafood"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "gluten-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "Great for a quick coastal fish bite; skip if cold briny fish is not appealing.",
      "zh": "想快速尝德国沿海鱼类小吃时很适合；不爱冷咸鱼则避开。",
      "nl": "Mooi voor een snelle kustvis-hap; sla over als koude zilte vis niet past."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 2,
    "imageCode": "106041",
    "imagePath": "/assets/dishes/main/106041-fischbroetchen.webp",
    "thumbPath": "/assets/dishes/thumb/106041-fischbroetchen.webp",
    "confidenceTag": "audited-remaining-batch-041",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "rollmops",
    "metadataCode": "106042",
    "cuisineId": "german",
    "names": {
      "en": "Rollmops",
      "zh": "卷鲱鱼酸黄瓜",
      "nl": "Rollmops",
      "local": "Rollmops"
    },
    "category": "starter",
    "cookingMethods": [
      "assembled",
      "chilled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "Pickled herring fillets rolled around onion or pickle, served cold.",
      "zh": "腌鲱鱼片卷洋葱或酸黄瓜，冷食。",
      "nl": "Ingelegde haringfilets opgerold rond ui of augurk, koud geserveerd."
    },
    "cookingProfile": {
      "en": "Expect a sharp, briny, vinegar-forward bite rather than a mild fish fillet.",
      "zh": "味道咸鲜酸爽、醋感明显，不是温和熟鱼片。",
      "nl": "Verwacht een scherpe zilte azijnhap, geen milde visfilet."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "A classic German pickled fish starter with rolled herring as the visual cue.",
        "zh": "经典德国腌鱼前菜，识别重点是卷起的鲱鱼。",
        "nl": "Een klassieke Duitse ingelegde visstarter met opgerolde haring."
      }
    },
    "composition": [
      [
        "matjes-herring",
        60,
        "pickled fish"
      ],
      [
        "pickles",
        15,
        "filling"
      ],
      [
        "onion",
        15,
        "sharp garnish"
      ],
      [
        "vinegar",
        10,
        "pickling tang",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pickled herring",
      "vinegar",
      "onion"
    ],
    "basicTaste": [
      "briny",
      "sour",
      "sharp"
    ],
    "textureProfile": [
      "silky fish",
      "crisp pickle",
      "cold firm bite"
    ],
    "riskFlags": [
      "contains-fish"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "cold-starter"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "avoid-sour-food"
    ],
    "orderVerdict": {
      "en": "Order only if pickled fish sounds good; it is sharp and acquired-taste.",
      "zh": "只有喜欢腌鱼酸咸味时才建议点；这是比较需要适应的风味。",
      "nl": "Bestel alleen als ingelegde vis je aanspreekt; scherp en wat verworven."
    },
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 3,
    "imageCode": "106042",
    "imagePath": "/assets/dishes/main/106042-rollmops.webp",
    "thumbPath": "/assets/dishes/thumb/106042-rollmops.webp",
    "confidenceTag": "audited-remaining-batch-041",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "heringssalat",
    "metadataCode": "106043",
    "cuisineId": "german",
    "names": {
      "en": "Heringssalat",
      "zh": "德式鲱鱼沙拉",
      "nl": "Haringsalade",
      "local": "Heringssalat"
    },
    "category": "salad",
    "cookingMethods": [
      "assembled",
      "chilled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "Cold herring salad with beetroot, potato, apple, pickles, and a creamy dressing.",
      "zh": "冷鲱鱼沙拉，拌甜菜根、土豆、苹果、酸黄瓜和奶油感酱汁。",
      "nl": "Koude haringsalade met rode biet, aardappel, appel, augurk en romige dressing."
    },
    "cookingProfile": {
      "en": "It is creamy, briny, and slightly sweet-earthy from beetroot.",
      "zh": "口味奶油感、咸鲜，甜菜根带轻微甜土味。",
      "nl": "Romig, zilt en licht zoet-aards door rode biet."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish",
        "seafood"
      ],
      "description": {
        "en": "A German cold salad where herring and beetroot are the main signals.",
        "zh": "德国常见冷沙拉，重点是鲱鱼和甜菜根。",
        "nl": "Een Duitse koude salade met haring en rode biet als herkenning."
      }
    },
    "composition": [
      [
        "matjes-herring",
        35,
        "fish"
      ],
      [
        "beetroot",
        20,
        "earthy vegetable"
      ],
      [
        "potato",
        15,
        "body"
      ],
      [
        "apple",
        10,
        "sweet crunch"
      ],
      [
        "pickles",
        10,
        "tang"
      ],
      [
        "mayonnaise",
        10,
        "creamy dressing"
      ]
    ],
    "distinctiveFlavorSources": [
      "herring",
      "beetroot",
      "creamy dressing"
    ],
    "basicTaste": [
      "briny",
      "creamy",
      "sweet-sour"
    ],
    "textureProfile": [
      "creamy diced salad",
      "firm fish pieces",
      "soft potato"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-egg"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "cold-starter",
      "seafood"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "Good if you like creamy cold fish salads; skip if beetroot or herring is a deal-breaker.",
      "zh": "喜欢奶油感冷鱼沙拉时适合；不爱甜菜根或鲱鱼则避开。",
      "nl": "Goed als je romige koude vissalades lust; sla over bij rode biet of haringaversie."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 2,
    "imageCode": "106043",
    "imagePath": "/assets/dishes/main/106043-heringssalat.webp",
    "thumbPath": "/assets/dishes/thumb/106043-heringssalat.webp",
    "confidenceTag": "audited-remaining-batch-041",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "backfisch",
    "metadataCode": "106044",
    "cuisineId": "german",
    "names": {
      "en": "Backfisch",
      "zh": "德式炸鱼",
      "nl": "Backfisch",
      "local": "Backfisch"
    },
    "category": "main",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "Battered fried fish, often served with remoulade, lemon, and fries or potato salad.",
      "zh": "裹浆油炸鱼，常配酸黄瓜蛋黄酱、柠檬和薯条或土豆沙拉。",
      "nl": "Gefrituurde vis in beslag, vaak met remoulade, citroen en friet of aardappelsalade."
    },
    "cookingProfile": {
      "en": "Expect crisp batter and mild flaky fish inside, similar in feel to fish and chips.",
      "zh": "外层酥脆、内里白鱼柔嫩，体验接近炸鱼薯条。",
      "nl": "Verwacht krokant beslag en milde vlokkige vis, vergelijkbaar met fish and chips."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "seafood"
      ],
      "description": {
        "en": "A German fish-stand classic centered on crisp battered fish.",
        "zh": "德国鱼摊经典菜，核心是酥脆裹浆炸鱼。",
        "nl": "Een Duitse viskraamklassieker met krokante vis in beslag."
      }
    },
    "composition": [
      [
        "fish-fillet",
        55,
        "fried fish"
      ],
      [
        "wheat-flour",
        20,
        "batter"
      ],
      [
        "egg",
        10,
        "batter binder"
      ],
      [
        "fries",
        10,
        "side"
      ],
      [
        "remoulade-sauce",
        5,
        "sauce",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "fried batter",
      "white fish",
      "remoulade"
    ],
    "basicTaste": [
      "savory",
      "crispy",
      "mild"
    ],
    "textureProfile": [
      "crisp coating",
      "flaky fish",
      "creamy sauce"
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
      "street-food",
      "seafood"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "gluten-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "A friendly fried fish choice; skip if you want something light or not oily.",
      "zh": "是好懂的炸鱼选择；想吃清淡或少油时不适合。",
      "nl": "Een toegankelijke gefrituurde viskeuze; sla over als je licht of niet-vet wilt eten."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "imageCode": "106044",
    "imagePath": "/assets/dishes/main/106044-backfisch.webp",
    "thumbPath": "/assets/dishes/thumb/106044-backfisch.webp",
    "confidenceTag": "audited-remaining-batch-041",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "zwiebelrostbraten",
    "metadataCode": "106045",
    "cuisineId": "german",
    "names": {
      "en": "Zwiebelrostbraten",
      "zh": "炸洋葱烤牛肉",
      "nl": "Zwiebelrostbraten",
      "local": "Zwiebelrostbraten"
    },
    "category": "main",
    "cookingMethods": [
      "fried",
      "braised"
    ],
    "shortDescription": {
      "en": "Beef steak or roast with brown gravy and a generous topping of fried onions.",
      "zh": "牛排或烤牛肉配棕色肉汁，上面铺大量炸洋葱。",
      "nl": "Biefstuk of gebraad met bruine jus en veel gebakken ui."
    },
    "cookingProfile": {
      "en": "The fried onion topping gives crunch and sweetness over a rich beef-and-gravy base.",
      "zh": "炸洋葱带来脆感和甜香，底部是浓郁牛肉和肉汁。",
      "nl": "De gebakken ui geeft crunch en zoetheid bovenop rijke rundvleesjus."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "A German and Austrian classic recognized by beef under fried onions.",
        "zh": "德奥经典牛肉菜，识别重点是牛肉上铺炸洋葱。",
        "nl": "Een Duits-Oostenrijkse klassieker met rundvlees onder gebakken ui."
      }
    },
    "composition": [
      [
        "beef-entrecote",
        55,
        "beef steak"
      ],
      [
        "fried-onions",
        20,
        "crisp topping"
      ],
      [
        "egg-noodles",
        15,
        "spaetzle side"
      ],
      [
        "red-wine",
        5,
        "gravy depth",
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
      "fried onions",
      "beef gravy",
      "black pepper"
    ],
    "basicTaste": [
      "savory",
      "rich",
      "sweet onion"
    ],
    "textureProfile": [
      "tender beef",
      "crisp onions",
      "saucy noodles"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-alcohol"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "classic-dish"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "Choose it for a rich beef plate with onion crunch; skip if heavy gravy feels too much.",
      "zh": "想吃浓郁牛肉和炸洋葱脆感时适合；怕厚重肉汁则谨慎。",
      "nl": "Kies dit voor rijke rundvleesjus met uiencrunch; sla over als zware jus te veel is."
    },
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "imageCode": "106045",
    "imagePath": "/assets/dishes/main/106045-zwiebelrostbraten.webp",
    "thumbPath": "/assets/dishes/thumb/106045-zwiebelrostbraten.webp",
    "confidenceTag": "audited-remaining-batch-041",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "jaegerschnitzel",
    "metadataCode": "106046",
    "cuisineId": "german",
    "names": {
      "en": "Jägerschnitzel",
      "zh": "蘑菇汁炸猪排",
      "nl": "Jägerschnitzel",
      "local": "Jägerschnitzel"
    },
    "category": "main",
    "cookingMethods": [
      "fried",
      "sauce-tossed"
    ],
    "shortDescription": {
      "en": "Pork schnitzel served with a mushroom gravy, usually with fries or spätzle.",
      "zh": "猪排炸或煎后配蘑菇肉汁，常搭薯条或蛋面疙瘩。",
      "nl": "Varkensschnitzel met champignonjus, meestal met friet of spätzle."
    },
    "cookingProfile": {
      "en": "Expect a browned schnitzel softened by earthy mushroom sauce.",
      "zh": "炸排外层有焦香，但蘑菇酱会让表面更柔软多汁。",
      "nl": "Verwacht gebakken schnitzel die zachter wordt door aardse champignonsaus."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "A German schnitzel variation where mushroom gravy is the key cue.",
        "zh": "德国炸肉排变体，关键识别是蘑菇肉汁。",
        "nl": "Een Duitse schnitzelvariant waarbij champignonjus de herkenning is."
      }
    },
    "composition": [
      [
        "pork-cutlet",
        55,
        "schnitzel"
      ],
      [
        "mushrooms",
        20,
        "sauce"
      ],
      [
        "egg-noodles",
        15,
        "spaetzle side"
      ],
      [
        "cream",
        5,
        "sauce richness"
      ],
      [
        "black-pepper",
        5,
        "seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "mushroom gravy",
      "fried pork cutlet",
      "black pepper"
    ],
    "basicTaste": [
      "savory",
      "earthy",
      "rich"
    ],
    "textureProfile": [
      "crisp-edged cutlet",
      "soft mushroom sauce",
      "springy spaetzle"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food"
    ],
    "avoidIfTags": [
      "no-pork",
      "gluten-free",
      "egg-allergy",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Good if you want schnitzel plus sauce; skip if you need the coating to stay crisp.",
      "zh": "想吃带酱炸猪排时适合；想保持外皮酥脆则不如点干式炸排。",
      "nl": "Goed als je schnitzel met saus wilt; minder als de korst knapperig moet blijven."
    },
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "imageCode": "106046",
    "imagePath": "/assets/dishes/main/106046-jaegerschnitzel.webp",
    "thumbPath": "/assets/dishes/thumb/106046-jaegerschnitzel.webp",
    "confidenceTag": "audited-remaining-batch-041",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "rahmschnitzel",
    "metadataCode": "106047",
    "cuisineId": "german",
    "names": {
      "en": "Rahmschnitzel",
      "zh": "奶油汁炸猪排",
      "nl": "Rahmschnitzel",
      "local": "Rahmschnitzel"
    },
    "category": "main",
    "cookingMethods": [
      "fried",
      "sauce-tossed"
    ],
    "shortDescription": {
      "en": "Pork schnitzel covered with a creamy sauce, commonly served with spätzle.",
      "zh": "猪排配奶油酱，常搭德国蛋面疙瘩。",
      "nl": "Varkensschnitzel met roomsaus, vaak met spätzle."
    },
    "cookingProfile": {
      "en": "Cream sauce makes it richer and softer than plain crisp schnitzel.",
      "zh": "奶油酱让它比干式炸猪排更浓郁、更柔软。",
      "nl": "Roomsaus maakt het rijker en zachter dan een droge krokante schnitzel."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "A common German schnitzel order for diners who want a creamy sauce.",
        "zh": "德国常见炸肉排点法，适合想要奶油酱的人。",
        "nl": "Een veelvoorkomende Duitse schnitzelkeuze voor wie roomsaus wil."
      }
    },
    "composition": [
      [
        "pork-cutlet",
        55,
        "schnitzel"
      ],
      [
        "cream",
        20,
        "cream sauce"
      ],
      [
        "egg-noodles",
        15,
        "spaetzle side"
      ],
      [
        "butter",
        5,
        "richness"
      ],
      [
        "parsley",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream sauce",
      "fried pork cutlet",
      "butter"
    ],
    "basicTaste": [
      "creamy",
      "savory",
      "mild"
    ],
    "textureProfile": [
      "softened schnitzel",
      "smooth cream sauce",
      "springy spaetzle"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food"
    ],
    "avoidIfTags": [
      "no-pork",
      "gluten-free",
      "egg-allergy",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Choose it for creamy comfort; skip if dairy or heavy sauces are a problem.",
      "zh": "想吃奶油感家常肉排时适合；避乳制品或不想吃厚酱则不适合。",
      "nl": "Kies dit voor romige comfortkost; sla over bij zuivel of zware sauzen."
    },
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "imageCode": "106047",
    "imagePath": "/assets/dishes/main/106047-rahmschnitzel.webp",
    "thumbPath": "/assets/dishes/thumb/106047-rahmschnitzel.webp",
    "confidenceTag": "audited-remaining-batch-041",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "wurstsalat",
    "metadataCode": "106048",
    "cuisineId": "german",
    "names": {
      "en": "Wurstsalat",
      "zh": "德式香肠沙拉",
      "nl": "Wurstsalat",
      "local": "Wurstsalat"
    },
    "category": "salad",
    "cookingMethods": [
      "assembled",
      "chilled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "Cold sliced sausage salad with onion, pickles, and a vinegar dressing.",
      "zh": "冷拌切丝香肠沙拉，配洋葱、酸黄瓜和醋汁。",
      "nl": "Koude worstsalade met ui, augurk en azijndressing."
    },
    "cookingProfile": {
      "en": "It is tangy and salty, more like a cold deli plate than a leafy salad.",
      "zh": "味道酸咸，更像冷肉盘，不是绿叶沙拉。",
      "nl": "Zuur en zout, meer koude vleeswaren dan groene salade."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "A German cold pub salad where sausage strips and vinegar define the dish.",
        "zh": "德国常见冷拌酒馆沙拉，重点是香肠丝和醋汁。",
        "nl": "Een Duitse koude kroegsalade met worstreepjes en azijn."
      }
    },
    "composition": [
      [
        "sausage",
        55,
        "cold sausage strips"
      ],
      [
        "onion",
        15,
        "sharp garnish"
      ],
      [
        "pickles",
        15,
        "tangy crunch"
      ],
      [
        "vinegar",
        10,
        "dressing",
        "seasoning"
      ],
      [
        "parsley",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "cold sausage",
      "vinegar dressing",
      "pickles"
    ],
    "basicTaste": [
      "salty",
      "sour",
      "savory"
    ],
    "textureProfile": [
      "firm sausage strips",
      "crisp onion",
      "juicy pickles"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "cold-starter"
    ],
    "avoidIfTags": [
      "no-pork",
      "avoid-sour-food"
    ],
    "orderVerdict": {
      "en": "Good as a salty cold pub plate; skip if you expect a light vegetable salad.",
      "zh": "适合想吃咸香冷肉小菜时点；如果期待清爽蔬菜沙拉则会失望。",
      "nl": "Goed als zoute koude kroeghap; sla over als je een lichte groentesalade verwacht."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 2,
    "imageCode": "106048",
    "imagePath": "/assets/dishes/main/106048-wurstsalat.webp",
    "thumbPath": "/assets/dishes/thumb/106048-wurstsalat.webp",
    "confidenceTag": "audited-remaining-batch-041",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "obatzda",
    "metadataCode": "106049",
    "cuisineId": "german",
    "names": {
      "en": "Obatzda",
      "zh": "巴伐利亚奶酪抹酱",
      "nl": "Obatzda",
      "local": "Obatzda"
    },
    "category": "cheese",
    "mealRole": "starter-or-side",
    "portionType": "shareable",
    "goodForSharing": true,
    "cookingMethods": [
      "assembled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "Bavarian cheese spread made with soft cheese, butter, paprika, onion, and usually served with pretzel.",
      "zh": "巴伐利亚奶酪抹酱，由软奶酪、黄油、红椒粉和洋葱调成，常配碱水结。",
      "nl": "Beierse kaasspread van zachte kaas, boter, paprika en ui, meestal met pretzel."
    },
    "cookingProfile": {
      "en": "It is not cooked; expect a cool, creamy, slightly pungent spread for bread or pretzel.",
      "zh": "它不是热菜，口感冰凉绵密，带一点成熟奶酪和洋葱的冲味。",
      "nl": "Niet gekookt; koel, romig en licht pittig als spread voor brood of pretzel."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "beer-hall",
        "sharing"
      ],
      "description": {
        "en": "A Bavarian beer-garden starter or snack, especially common with pretzels.",
        "zh": "巴伐利亚啤酒花园常见前菜或小吃，尤其常搭碱水结。",
        "nl": "Een Beierse biergartensnack of starter, vooral met pretzels."
      }
    },
    "composition": [
      [
        "camembert",
        45,
        "cheese base"
      ],
      [
        "butter",
        15,
        "richness"
      ],
      [
        "cream-cheese",
        15,
        "softener"
      ],
      [
        "pretzel-dough",
        15,
        "side"
      ],
      [
        "onion",
        5,
        "aroma"
      ],
      [
        "paprika",
        5,
        "color and spice",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "camembert",
      "paprika",
      "onion"
    ],
    "basicTaste": [
      "creamy",
      "salty",
      "savory",
      "slightly pungent"
    ],
    "textureProfile": [
      "thick spread",
      "soft cheese",
      "chewy pretzel side"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-gluten"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "sharing",
      "beer-hall",
      "vegetarian"
    ],
    "avoidIfTags": [
      "dairy-free",
      "gluten-free",
      "avoids-strong-cheese"
    ],
    "orderVerdict": {
      "en": "A strong shared snack with beer or pretzel; skip if ripe cheese or onion sounds too intense.",
      "zh": "配啤酒或碱水结很合适，适合分享；不喜欢成熟奶酪或洋葱冲味时避开。",
      "nl": "Een sterke deelsnack bij bier of pretzel; sla over als rijpe kaas of ui te heftig klinkt."
    },
    "confidenceTag": "audited-german-batch-007",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "leberknoedelsuppe",
    "metadataCode": "106050",
    "cuisineId": "german",
    "names": {
      "en": "Leberknödelsuppe",
      "zh": "肝丸清汤",
      "nl": "Leverknoedelsoep",
      "local": "Leberknödelsuppe"
    },
    "category": "soup",
    "cookingMethods": [
      "boiled",
      "simmered"
    ],
    "shortDescription": {
      "en": "Clear broth with large savory liver dumplings, usually served as a starter soup.",
      "zh": "清汤里放大颗咸香肝丸，常作为前菜汤。",
      "nl": "Heldere bouillon met grote hartige leverknoedels, meestal als voorgerecht."
    },
    "cookingProfile": {
      "en": "The broth is light, but the liver dumpling itself is dense and strongly savory.",
      "zh": "汤底清，但肝丸本身紧实、肉香和内脏风味明显。",
      "nl": "De bouillon is licht, maar de leverknoedel is stevig en sterk hartig."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "A German and Austrian soup recognized by one large liver dumpling in clear broth.",
        "zh": "德奥常见汤品，识别重点是清汤里的大颗肝丸。",
        "nl": "Een Duits-Oostenrijkse soep met een grote leverknoedel in heldere bouillon."
      }
    },
    "composition": [
      [
        "liver-dumpling",
        45,
        "main dumpling"
      ],
      [
        "beef",
        20,
        "broth base"
      ],
      [
        "bread",
        15,
        "dumpling binder"
      ],
      [
        "egg",
        10,
        "binder"
      ],
      [
        "carrot",
        5,
        "broth vegetable"
      ],
      [
        "parsley",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "liver dumpling",
      "clear beef broth",
      "parsley"
    ],
    "basicTaste": [
      "savory",
      "brothy",
      "mineral-rich"
    ],
    "textureProfile": [
      "clear broth",
      "dense dumpling",
      "soft vegetable slices"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "soup",
      "classic-dish"
    ],
    "avoidIfTags": [
      "offal-averse",
      "gluten-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "A good classic soup if you enjoy liver flavor; skip if offal tastes are difficult for you.",
      "zh": "喜欢肝味和传统清汤时可点；不接受内脏风味则不建议。",
      "nl": "Een goede klassieke soep als je lever lust; sla over als orgaansmaak lastig is."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 3,
    "imageCode": "106050",
    "imagePath": "/assets/dishes/main/106050-leberknoedelsuppe.webp",
    "thumbPath": "/assets/dishes/thumb/106050-leberknoedelsuppe.webp",
    "confidenceTag": "audited-remaining-batch-041",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "bienenstich",
    "metadataCode": "106051",
    "cuisineId": "german",
    "names": {
      "en": "Bienenstich",
      "zh": "蜜蜂蜇蛋糕",
      "nl": "Bienenstich",
      "local": "Bienenstich"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked",
      "layered"
    ],
    "shortDescription": {
      "en": "German yeast cake with vanilla cream filling and a caramelized almond topping.",
      "zh": "德式酵母蛋糕，夹香草奶油，上层是焦糖杏仁。",
      "nl": "Duitse gistcake met vanilleroom en gekaramelliseerde amandeltopping."
    },
    "cookingProfile": {
      "en": "Expect soft cake, creamy filling, and a sticky nutty top.",
      "zh": "口感是柔软蛋糕、奶油夹层和带黏感的坚果顶。",
      "nl": "Verwacht zachte cake, romige vulling en een kleverige nootachtige bovenkant."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "dessert"
      ],
      "description": {
        "en": "A classic German bakery cake identified by cream filling and almond topping.",
        "zh": "经典德式烘焙蛋糕，重点是奶油夹层和杏仁顶。",
        "nl": "Een klassieke Duitse bakkerscake met roomvulling en amandeltop."
      }
    },
    "composition": [
      [
        "wheat-flour",
        35,
        "cake base"
      ],
      [
        "vanilla-custard",
        25,
        "cream filling"
      ],
      [
        "almonds",
        15,
        "topping"
      ],
      [
        "sugar",
        15,
        "caramel sweetness"
      ],
      [
        "butter",
        10,
        "richness"
      ]
    ],
    "distinctiveFlavorSources": [
      "vanilla cream",
      "caramelized almonds",
      "butter"
    ],
    "basicTaste": [
      "sweet",
      "creamy",
      "nutty"
    ],
    "textureProfile": [
      "soft cake",
      "smooth cream",
      "sticky crunchy almond top"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "contains-egg",
      "contains-tree-nut"
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
      "egg-allergy",
      "nut-allergy"
    ],
    "orderVerdict": {
      "en": "Choose it for a creamy nutty cake; skip if almonds or dairy are an issue.",
      "zh": "想吃奶油坚果蛋糕时适合；坚果或乳制品过敏则避开。",
      "nl": "Kies dit voor romige nootcake; sla over bij amandel- of zuivelproblemen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "imageCode": "106051",
    "imagePath": "/assets/dishes/main/106051-bienenstich.webp",
    "thumbPath": "/assets/dishes/thumb/106051-bienenstich.webp",
    "confidenceTag": "audited-remaining-batch-041",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "zwetschgenkuchen",
    "metadataCode": "106052",
    "cuisineId": "german",
    "names": {
      "en": "Zwetschgenkuchen",
      "zh": "德式李子蛋糕",
      "nl": "Pruimentaart",
      "local": "Zwetschgenkuchen"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "German plum cake with rows of purple plums over a yeast or shortcrust base.",
      "zh": "德式李子蛋糕，紫色李子铺在酵母或酥皮底上。",
      "nl": "Duitse pruimentaart met rijen paarse pruimen op gist- of kruimeldeeg."
    },
    "cookingProfile": {
      "en": "It is fruit-forward and lightly tart, less creamy than many cakes.",
      "zh": "果味突出、带轻酸，比奶油蛋糕清爽。",
      "nl": "Fruitig en licht zuur, minder romig dan veel taarten."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "dessert"
      ],
      "description": {
        "en": "A seasonal German bakery cake recognized by plum rows on a flat cake base.",
        "zh": "德式季节烘焙蛋糕，重点是平铺李子和扁平蛋糕底。",
        "nl": "Een seizoensgebonden Duitse bakkerscake met pruimenrijen."
      }
    },
    "composition": [
      [
        "plum-compote",
        40,
        "plum topping"
      ],
      [
        "wheat-flour",
        35,
        "cake base"
      ],
      [
        "sugar",
        10,
        "sweetness"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "cinnamon",
        5,
        "warm spice",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "plums",
      "buttery cake base",
      "cinnamon"
    ],
    "basicTaste": [
      "sweet-tart",
      "fruity",
      "buttery"
    ],
    "textureProfile": [
      "soft cake base",
      "juicy plum topping",
      "light crumb"
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
      "lighter-choice"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Good if you want a fruity cake rather than a creamy dessert.",
      "zh": "想吃水果感蛋糕时适合；想吃奶油厚重甜点则不是首选。",
      "nl": "Goed als je fruitige taart wilt in plaats van een romig dessert."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "imageCode": "106052",
    "imagePath": "/assets/dishes/main/106052-zwetschgenkuchen.webp",
    "thumbPath": "/assets/dishes/thumb/106052-zwetschgenkuchen.webp",
    "confidenceTag": "audited-remaining-batch-041",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "rote-gruetze",
    "metadataCode": "106053",
    "cuisineId": "german",
    "names": {
      "en": "Rote Grütze",
      "zh": "红莓果羹",
      "nl": "Rode grutze",
      "local": "Rote Grütze"
    },
    "category": "dessert",
    "cookingMethods": [
      "simmered",
      "set"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "Red berry pudding or compote, often served with vanilla sauce or cream.",
      "zh": "红莓果羹或果冻状甜品，常配香草酱或奶油。",
      "nl": "Rode bessenpudding of compote, vaak met vanillesaus of room."
    },
    "cookingProfile": {
      "en": "Expect a cool spoon dessert that is tangy-fruity rather than cakey.",
      "zh": "是冷食勺子甜点，酸甜果味明显，不是蛋糕类。",
      "nl": "Een koel lepeldessert, fruitig en friszuur, geen cake."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "dessert"
      ],
      "description": {
        "en": "A northern German red-berry dessert recognized by glossy red compote.",
        "zh": "德国北部经典红莓甜点，识别重点是亮红色果羹。",
        "nl": "Een Noord-Duits bessendessert met glanzende rode compote."
      }
    },
    "composition": [
      [
        "berries",
        55,
        "red berry base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "vanilla-custard",
        15,
        "sauce"
      ],
      [
        "cream",
        5,
        "optional richness"
      ],
      [
        "vanilla",
        5,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "red berries",
      "vanilla sauce",
      "light tartness"
    ],
    "basicTaste": [
      "sweet-tart",
      "fruity",
      "creamy"
    ],
    "textureProfile": [
      "glossy berry compote",
      "soft set",
      "smooth vanilla sauce"
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
      "lighter-choice"
    ],
    "avoidIfTags": [
      "dairy-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "Choose it for a fruity, refreshing dessert; ask about vanilla sauce if avoiding dairy or egg.",
      "zh": "想吃清爽水果甜点时适合；避乳制品或鸡蛋要问香草酱。",
      "nl": "Kies dit voor een fris fruitdessert; vraag naar vanillesaus bij zuivel of ei."
    },
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "imageCode": "106053",
    "imagePath": "/assets/dishes/main/106053-rote-gruetze.webp",
    "thumbPath": "/assets/dishes/thumb/106053-rote-gruetze.webp",
    "confidenceTag": "audited-remaining-batch-041",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "dampfnudel",
    "metadataCode": "106054",
    "cuisineId": "german",
    "names": {
      "en": "Dampfnudel",
      "zh": "德式蒸甜面团",
      "nl": "Dampfnudel",
      "local": "Dampfnudel"
    },
    "category": "dessert",
    "cookingMethods": [
      "steamed"
    ],
    "shortDescription": {
      "en": "A large steamed yeast dumpling, often served with vanilla sauce and plum compote.",
      "zh": "大颗蒸酵母面团，常配香草酱和李子果酱。",
      "nl": "Een grote gestoomde gistknoedel, vaak met vanillesaus en pruimencompote."
    },
    "cookingProfile": {
      "en": "It is soft, bready, and filling, closer to a sweet dumpling than a small pastry.",
      "zh": "口感柔软像面包且很有分量，更像甜面团团子，不是小糕点。",
      "nl": "Zacht, broodachtig en vullend, meer zoete knoedel dan klein gebak."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "dessert"
      ],
      "description": {
        "en": "A southern German sweet dumpling plate recognized by vanilla sauce.",
        "zh": "德国南部常见甜面团菜，重点是大团子和香草酱。",
        "nl": "Een Zuid-Duitse zoete knoedel met vanillesaus als herkenning."
      }
    },
    "composition": [
      [
        "wheat-flour",
        45,
        "yeast dumpling"
      ],
      [
        "vanilla-custard",
        25,
        "sauce"
      ],
      [
        "sugar",
        10,
        "sweetness"
      ],
      [
        "egg",
        10,
        "dough richness"
      ],
      [
        "plum-compote",
        10,
        "fruit side"
      ]
    ],
    "distinctiveFlavorSources": [
      "vanilla sauce",
      "yeast dumpling",
      "plum compote"
    ],
    "basicTaste": [
      "sweet",
      "mild",
      "creamy"
    ],
    "textureProfile": [
      "soft steamed dough",
      "smooth sauce",
      "jammy fruit side"
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
      "dessert",
      "comfort-food"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "Good as a warm filling dessert; skip if you only want a small light sweet.",
      "zh": "适合作为温热饱腹甜点；只想吃轻小甜品时不合适。",
      "nl": "Goed als warm vullend dessert; sla over als je iets kleins en lichts wilt."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "imageCode": "106054",
    "imagePath": "/assets/dishes/main/106054-dampfnudel.webp",
    "thumbPath": "/assets/dishes/thumb/106054-dampfnudel.webp",
    "confidenceTag": "audited-remaining-batch-041",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "berliner-pfannkuchen",
    "metadataCode": "106055",
    "cuisineId": "german",
    "names": {
      "en": "Berliner Pfannkuchen",
      "zh": "德式果酱甜甜圈",
      "nl": "Berliner bol",
      "local": "Berliner Pfannkuchen"
    },
    "category": "dessert",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "A round fried doughnut filled with jam and dusted with sugar.",
      "zh": "圆形油炸甜面团，内有果酱馅，表面撒糖粉。",
      "nl": "Een ronde gefrituurde bol met jamvulling en suiker."
    },
    "cookingProfile": {
      "en": "Expect a fluffy fried doughnut with a sweet jam center.",
      "zh": "口感是蓬松油炸面团，中间有甜果酱。",
      "nl": "Verwacht een luchtige gefrituurde bol met zoete jamvulling."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "dessert"
      ],
      "description": {
        "en": "A German bakery and festival sweet recognized by the jam-filled fried dough.",
        "zh": "德国烘焙店和节庆常见甜点，重点是果酱夹心油炸面团。",
        "nl": "Een Duitse bakkers- en feestklassieker met jamgevulde gefrituurde deegbol."
      }
    },
    "composition": [
      [
        "wheat-flour",
        45,
        "dough"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "fruit-sauce-or-caramel",
        15,
        "jam filling"
      ],
      [
        "egg",
        10,
        "dough richness"
      ],
      [
        "butter",
        10,
        "richness"
      ]
    ],
    "distinctiveFlavorSources": [
      "fried dough",
      "jam filling",
      "powdered sugar"
    ],
    "basicTaste": [
      "sweet",
      "fried",
      "fruity"
    ],
    "textureProfile": [
      "fluffy dough",
      "soft jam center",
      "sugared surface"
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
      "en": "A familiar sweet bakery choice; skip if you want a lighter dessert.",
      "zh": "是好懂的甜面包店点心；想吃轻盈甜品时不适合。",
      "nl": "Een vertrouwde zoete bakkerskeuze; sla over als je iets lichts wilt."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "imageCode": "106055",
    "imagePath": "/assets/dishes/main/106055-berliner-pfannkuchen.webp",
    "thumbPath": "/assets/dishes/thumb/106055-berliner-pfannkuchen.webp",
    "confidenceTag": "audited-remaining-batch-041",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "flammende-herzen",
    "metadataCode": "106056",
    "cuisineId": "german",
    "names": {
      "en": "Flammende Herzen",
      "zh": "心形夹心奶油饼干",
      "nl": "Flammende Herzen",
      "local": "Flammende Herzen"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Heart-shaped piped shortbread cookies, often sandwiched with cream or jam and dipped in chocolate.",
      "zh": "心形挤花酥饼，常夹奶油或果酱，并蘸巧克力。",
      "nl": "Hartvormige spritskoeken, vaak gevuld met room of jam en deels in chocolade gedipt."
    },
    "cookingProfile": {
      "en": "They are crumbly, buttery, and sweet, closer to bakery cookies than cake.",
      "zh": "口感酥松、黄油香和甜味明显，更像烘焙饼干而不是蛋糕。",
      "nl": "Kruimelig, boterig en zoet, meer koek dan cake."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "dessert"
      ],
      "description": {
        "en": "A German bakery cookie recognized by heart shape and chocolate-dipped edges.",
        "zh": "德式烘焙饼干，识别重点是心形和巧克力蘸边。",
        "nl": "Een Duitse bakkerskoek met hartvorm en chocoladerand."
      }
    },
    "composition": [
      [
        "wheat-flour",
        40,
        "cookie base"
      ],
      [
        "butter",
        25,
        "shortbread richness"
      ],
      [
        "sugar",
        15,
        "sweetness"
      ],
      [
        "chocolate",
        15,
        "dipped edge"
      ],
      [
        "vanilla",
        5,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "butter cookie",
      "chocolate",
      "vanilla"
    ],
    "basicTaste": [
      "sweet",
      "buttery",
      "chocolatey"
    ],
    "textureProfile": [
      "crumbly cookie",
      "smooth chocolate edge",
      "soft filling if present"
    ],
    "riskFlags": [
      "contains-gluten",
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
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Good with coffee if you want a buttery cookie; skip if you prefer soft spoon desserts.",
      "zh": "想配咖啡吃黄油饼干时适合；偏好柔软勺子甜点则不是首选。",
      "nl": "Goed bij koffie als je boterkoekjes wilt; minder als je een zacht lepeldessert zoekt."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "imageCode": "106056",
    "imagePath": "/assets/dishes/main/106056-flammende-herzen.webp",
    "thumbPath": "/assets/dishes/thumb/106056-flammende-herzen.webp",
    "confidenceTag": "audited-remaining-batch-041",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "zwiebelkuchen",
    "metadataCode": "106057",
    "cuisineId": "german",
    "names": {
      "en": "Zwiebelkuchen",
      "zh": "德式洋葱咸派",
      "nl": "Uientaart",
      "local": "Zwiebelkuchen"
    },
    "category": "starter",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Savory onion tart with a creamy egg filling, often including bacon.",
      "zh": "咸味洋葱派，常有奶油鸡蛋馅和培根。",
      "nl": "Hartige uientaart met romige eiervulling, vaak met spek."
    },
    "cookingProfile": {
      "en": "Expect sweet-soft onions in a rich custard on a crust, not a pizza.",
      "zh": "入口是甜软洋葱和浓郁蛋奶馅，底部有派皮，不是披萨。",
      "nl": "Verwacht zachte zoete ui in rijke custard op deegbodem, geen pizza."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish"
      ],
      "description": {
        "en": "A German wine-region tart where onions and custard are the main cues.",
        "zh": "德国葡萄酒产区常见咸派，重点是洋葱和蛋奶馅。",
        "nl": "Een Duitse wijnstreektaart met ui en custard als herkenning."
      }
    },
    "composition": [
      [
        "onion",
        40,
        "sweet onion filling"
      ],
      [
        "pastry-crust",
        25,
        "crust"
      ],
      [
        "egg",
        15,
        "custard"
      ],
      [
        "cream",
        10,
        "custard richness"
      ],
      [
        "bacon",
        10,
        "savory bits"
      ]
    ],
    "distinctiveFlavorSources": [
      "soft onion",
      "egg-cream custard",
      "bacon"
    ],
    "basicTaste": [
      "savory",
      "sweet onion",
      "rich"
    ],
    "textureProfile": [
      "tender onion filling",
      "crumbly crust",
      "creamy custard"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy",
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "starter-or-side"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-allergy",
      "dairy-free",
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Good as a rich savory slice; ask about bacon if avoiding pork.",
      "zh": "适合点一块浓郁咸派；不吃猪肉要问是否有培根。",
      "nl": "Goed als rijke hartige punt; vraag naar spek als je geen varken eet."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "imageCode": "106057",
    "imagePath": "/assets/dishes/main/106057-zwiebelkuchen.webp",
    "thumbPath": "/assets/dishes/thumb/106057-zwiebelkuchen.webp",
    "confidenceTag": "audited-remaining-batch-041",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "kartoffelgratin-german",
    "metadataCode": "106058",
    "cuisineId": "german",
    "names": {
      "en": "Kartoffelgratin",
      "zh": "德式奶油烤土豆",
      "nl": "Aardappelgratin",
      "local": "Kartoffelgratin"
    },
    "category": "side",
    "cookingMethods": [
      "baked",
      "layered"
    ],
    "shortDescription": {
      "en": "Layered sliced potatoes baked with cream and cheese until browned.",
      "zh": "土豆切片层叠，和奶油奶酪一起烤至金黄。",
      "nl": "Laagjes aardappelschijfjes gebakken met room en kaas."
    },
    "cookingProfile": {
      "en": "It is creamy, soft, and rich, with a browned top rather than crisp fried potato.",
      "zh": "口感奶油浓郁、柔软，上层烤焦香，不是煎土豆的脆感。",
      "nl": "Romig, zacht en rijk, met bruine bovenkant in plaats van gebakken crunch."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "comfort-food"
      ],
      "description": {
        "en": "A common rich potato side that signals cream and baked layers.",
        "zh": "常见浓郁土豆配菜，重点是奶油和层叠烘烤。",
        "nl": "Een veelvoorkomend rijk aardappelbijgerecht met room en lagen."
      }
    },
    "composition": [
      [
        "potato",
        60,
        "sliced layers"
      ],
      [
        "cream",
        20,
        "sauce"
      ],
      [
        "cheese",
        10,
        "browned topping"
      ],
      [
        "butter",
        5,
        "richness"
      ],
      [
        "nutmeg",
        5,
        "warm dairy aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "baked cheese",
      "nutmeg"
    ],
    "basicTaste": [
      "creamy",
      "savory",
      "mild"
    ],
    "textureProfile": [
      "soft potato layers",
      "creamy sauce",
      "browned top"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "comfort-food"
    ],
    "avoidIfTags": [
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "A rich potato side for comfort; skip if you need something light or dairy-free.",
      "zh": "适合想要浓郁土豆配菜时点；想清淡或避乳制品则不适合。",
      "nl": "Een rijk aardappelbijgerecht; sla over als je licht of zuivelvrij wilt."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "imageCode": "106058",
    "imagePath": "/assets/dishes/main/106058-kartoffelgratin-german.webp",
    "thumbPath": "/assets/dishes/thumb/106058-kartoffelgratin-german.webp",
    "confidenceTag": "audited-remaining-batch-041",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "blaukraut",
    "metadataCode": "106059",
    "cuisineId": "german",
    "names": {
      "en": "Blaukraut",
      "zh": "德式炖红甘蓝",
      "nl": "Rode kool",
      "local": "Blaukraut"
    },
    "category": "side",
    "cookingMethods": [
      "braised"
    ],
    "shortDescription": {
      "en": "Braised red cabbage, often sweet-sour with apple and warm spices.",
      "zh": "炖红甘蓝，常带苹果甜味、酸味和温暖香料。",
      "nl": "Gestoofde rode kool, vaak zoetzuur met appel en warme kruiden."
    },
    "cookingProfile": {
      "en": "Expect soft glossy cabbage with a sweet-sour balance, usually as a roast side.",
      "zh": "口感柔软油亮，甜酸平衡，常作为烤肉配菜。",
      "nl": "Zachte glanzende kool met zoetzuur evenwicht, vaak bij gebraad."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "A classic German roast side recognized by purple-red braised cabbage.",
        "zh": "经典德国烤肉配菜，识别重点是紫红色炖甘蓝。",
        "nl": "Een klassiek Duits bijgerecht bij gebraad met paarsrode gestoofde kool."
      }
    },
    "composition": [
      [
        "red-cabbage",
        65,
        "braised cabbage"
      ],
      [
        "apple",
        15,
        "sweet fruit"
      ],
      [
        "vinegar",
        10,
        "sour balance",
        "seasoning"
      ],
      [
        "sugar",
        5,
        "sweetness"
      ],
      [
        "caraway",
        5,
        "warm spice",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "red cabbage",
      "apple",
      "vinegar"
    ],
    "basicTaste": [
      "sweet-sour",
      "earthy",
      "mild"
    ],
    "textureProfile": [
      "soft shredded cabbage",
      "glossy sauce",
      "small apple pieces"
    ],
    "riskFlags": [],
    "dietaryFlags": [
      "vegan"
    ],
    "goodForTags": [
      "vegetarian",
      "side-dish"
    ],
    "avoidIfTags": [
      "avoid-sour-food"
    ],
    "orderVerdict": {
      "en": "A good side if you like sweet-sour vegetables with roast dishes.",
      "zh": "喜欢烤肉旁边有甜酸蔬菜配菜时很适合。",
      "nl": "Een goed bijgerecht als je zoetzure groente bij gebraad lust."
    },
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "imageCode": "106059",
    "imagePath": "/assets/dishes/main/106059-blaukraut.webp",
    "thumbPath": "/assets/dishes/thumb/106059-blaukraut.webp",
    "confidenceTag": "audited-remaining-batch-041",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "spargel-mit-sauce-hollandaise",
    "metadataCode": "106060",
    "cuisineId": "german",
    "names": {
      "en": "Spargel mit Sauce Hollandaise",
      "zh": "白芦笋配荷兰酱",
      "nl": "Witte asperges met hollandaisesaus",
      "local": "Spargel mit Sauce Hollandaise"
    },
    "category": "main",
    "cookingMethods": [
      "boiled",
      "assembled"
    ],
    "shortDescription": {
      "en": "White asparagus served with hollandaise sauce, potatoes, and often ham.",
      "zh": "白芦笋配荷兰酱、土豆，常搭火腿。",
      "nl": "Witte asperges met hollandaisesaus, aardappelen en vaak ham."
    },
    "cookingProfile": {
      "en": "The asparagus is tender and delicate, while hollandaise adds rich buttery sauce.",
      "zh": "白芦笋柔嫩清淡，荷兰酱带来浓厚黄油感。",
      "nl": "De asperges zijn zacht en delicaat; hollandaise geeft rijke botersaus."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "seasonal"
      ],
      "description": {
        "en": "A German asparagus-season classic identified by white asparagus and hollandaise.",
        "zh": "德国芦笋季经典菜，重点是白芦笋和荷兰酱。",
        "nl": "Een Duitse aspergeseizoensklassieker met witte asperges en hollandaise."
      }
    },
    "composition": [
      [
        "white-asparagus",
        50,
        "main vegetable"
      ],
      [
        "hollandaise-sauce",
        20,
        "rich sauce"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "ham",
        10,
        "optional side"
      ],
      [
        "parsley",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "white asparagus",
      "hollandaise sauce",
      "ham"
    ],
    "basicTaste": [
      "delicate",
      "buttery",
      "savory"
    ],
    "textureProfile": [
      "tender asparagus",
      "smooth buttery sauce",
      "soft potatoes"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-dairy",
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "seasonal-dish",
      "lighter-choice"
    ],
    "avoidIfTags": [
      "egg-allergy",
      "dairy-free",
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Choose it for a seasonal lighter German plate; ask to omit ham if needed.",
      "zh": "想吃季节性、相对清爽的德国菜时适合；不吃猪肉可问能否不加火腿。",
      "nl": "Kies dit voor een seizoensgebonden lichtere Duitse keuze; vraag zonder ham indien nodig."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "imageCode": "106060",
    "imagePath": "/assets/dishes/main/106060-spargel-mit-sauce-hollandaise.webp",
    "thumbPath": "/assets/dishes/thumb/106060-spargel-mit-sauce-hollandaise.webp",
    "confidenceTag": "audited-remaining-batch-041",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "salade-liegeoise",
    "metadataCode": "107031",
    "cuisineId": "belgian",
    "names": {
      "en": "Salade Liégeoise",
      "zh": "列日土豆培根四季豆沙拉",
      "nl": "Luikse salade",
      "local": "Salade liégeoise"
    },
    "category": "salad",
    "cookingMethods": [
      "boiled",
      "assembled"
    ],
    "shortDescription": {
      "en": "Warm Belgian salad of potatoes, green beans, bacon, onion, and vinegar dressing.",
      "zh": "温热比利时沙拉，用土豆、四季豆、培根、洋葱和醋汁拌成。",
      "nl": "Warme Belgische salade met aardappel, sperziebonen, spek, ui en azijndressing."
    },
    "cookingProfile": {
      "en": "It is warmer and heartier than a leafy salad, with bacon and vinegar balancing the potatoes.",
      "zh": "比叶菜沙拉更温热扎实，培根和醋汁平衡土豆厚度。",
      "nl": "Warmer en steviger dan bladsalade, met spek en azijn bij aardappel."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "salad"
      ],
      "description": {
        "en": "A Liège-region warm salad that functions almost like a light main.",
        "zh": "列日地区温沙拉，分量上接近轻主菜。",
        "nl": "Een Luikse warme salade die bijna als lichte hoofdschotel werkt."
      }
    },
    "composition": [
      [
        "potato",
        35,
        "warm base"
      ],
      [
        "green-beans",
        25,
        "vegetable"
      ],
      [
        "bacon",
        20,
        "salty meat"
      ],
      [
        "onion",
        10,
        "aroma"
      ],
      [
        "vinegar",
        10,
        "dressing",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "bacon",
      "vinegar",
      "green-beans"
    ],
    "basicTaste": [
      "savory",
      "tangy",
      "salty"
    ],
    "textureProfile": [
      "soft potatoes",
      "tender beans",
      "crisp bacon"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "regional-dish",
      "lighter-main"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "A good middle ground if you want something lighter than stew but still filling.",
      "zh": "想比炖菜轻一点但仍有饱足感时很合适。",
      "nl": "Goede middenweg als je lichter dan stoofvlees maar toch vullend wilt eten."
    },
    "confidenceTag": "audited-belgian-batch-009",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "flamiche",
    "metadataCode": "107032",
    "cuisineId": "belgian",
    "names": {
      "en": "Flamiche",
      "zh": "比利时韭葱奶酪派",
      "nl": "Flamiche",
      "local": "Flamiche"
    },
    "category": "pastry",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Savory Belgian tart or pie, commonly with leeks, eggs, cream, and cheese.",
      "zh": "比利时咸派，常见韭葱、鸡蛋、奶油和奶酪馅。",
      "nl": "Hartige Belgische taart, vaak met prei, ei, room en kaas."
    },
    "cookingProfile": {
      "en": "It is baked and creamy inside with a pastry edge, similar in feel to a rustic quiche.",
      "zh": "烤制后内馅奶香柔软、边缘酥，感觉接近乡村咸派。",
      "nl": "Gebakken met romige vulling en deegrand, vergelijkbaar met rustieke quiche."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "starter"
      ],
      "description": {
        "en": "A Walloon-style savory tart often served as a starter or light lunch.",
        "zh": "瓦隆风格咸派，常作前菜或轻午餐。",
        "nl": "Een Waalse hartige taart, vaak als starter of lichte lunch."
      }
    },
    "composition": [
      [
        "pastry-crust",
        35,
        "tart shell"
      ],
      [
        "leek",
        25,
        "vegetable filling"
      ],
      [
        "egg",
        15,
        "custard set"
      ],
      [
        "cream",
        15,
        "richness"
      ],
      [
        "cheese",
        10,
        "savory topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "leek",
      "cream",
      "cheese"
    ],
    "basicTaste": [
      "savory",
      "creamy",
      "mildly sweet"
    ],
    "textureProfile": [
      "tender pastry",
      "soft leek filling",
      "creamy center"
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
      "starter",
      "vegetarian"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-allergy",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "A good vegetarian-leaning savory tart; avoid if you dislike leek or creamy quiche textures.",
      "zh": "偏素的咸派选择；不喜欢韭葱或奶油蛋派口感就避开。",
      "nl": "Een goede hartige vegetarische taart; vermijd bij prei- of quiche-afkeer."
    },
    "confidenceTag": "audited-belgian-batch-009",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "tarte-al-djote",
    "metadataCode": "107033",
    "cuisineId": "belgian",
    "names": {
      "en": "Tarte al Djote",
      "zh": "比利时绿叶奶酪咸派",
      "nl": "Tarte al djote",
      "local": "Tarte al djote"
    },
    "category": "starter",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "A savory tart from Nivelles filled with chard or beet greens and local cheese.",
      "zh": "尼韦勒地区咸派，内馅是甜菜叶或莙荙菜和本地奶酪。",
      "nl": "Een hartige taart uit Nijvel met snijbiet of bietengroen en lokale kaas."
    },
    "cookingProfile": {
      "en": "Expect a rich green-cheese filling in a crisp tart crust.",
      "zh": "入口是浓郁绿叶奶酪馅和酥脆派皮。",
      "nl": "Verwacht een rijke groen-kaasvulling in krokant deeg."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish"
      ],
      "description": {
        "en": "A Walloon regional tart recognized by leafy greens and cheese filling.",
        "zh": "瓦隆地区代表性咸派，重点是绿叶菜和奶酪馅。",
        "nl": "Een Waalse streektaart met bladgroen en kaasvulling."
      }
    },
    "composition": [
      [
        "pastry-crust",
        35,
        "tart shell"
      ],
      [
        "chard-greens",
        30,
        "leafy filling"
      ],
      [
        "curd-cheese",
        20,
        "cheese filling"
      ],
      [
        "egg",
        10,
        "binder"
      ],
      [
        "butter",
        5,
        "richness"
      ]
    ],
    "distinctiveFlavorSources": [
      "leafy greens",
      "local cheese",
      "buttery crust"
    ],
    "basicTaste": [
      "savory",
      "creamy",
      "green"
    ],
    "textureProfile": [
      "crisp crust",
      "soft leafy filling",
      "creamy cheese"
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
      "regional-dish",
      "starter"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "Good for a regional savory tart; skip if leafy cheese fillings are not appealing.",
      "zh": "想尝地区咸派时适合；不喜欢绿叶菜奶酪馅则谨慎。",
      "nl": "Goed voor een regionale hartige taart; sla over als bladgroen met kaas niet past."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "imageCode": "107033",
    "imagePath": "/assets/dishes/main/107033-tarte-al-djote.webp",
    "thumbPath": "/assets/dishes/thumb/107033-tarte-al-djote.webp",
    "confidenceTag": "audited-remaining-batch-042",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "potjevleesch",
    "metadataCode": "107034",
    "cuisineId": "belgian",
    "names": {
      "en": "Potjevleesch",
      "zh": "冷肉冻",
      "nl": "Potjevleesch",
      "local": "Potjevleesch"
    },
    "category": "starter",
    "cookingMethods": [
      "set",
      "chilled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "Cold jellied terrine of mixed white meats, often eaten with fries and pickles.",
      "zh": "冷食混合白肉冻，常配薯条和酸黄瓜。",
      "nl": "Koude vleesterrine in gelei, vaak met friet en augurk."
    },
    "cookingProfile": {
      "en": "The meat is firm and cold in clear jelly, not a hot stew.",
      "zh": "肉块在透明肉冻中冷食，质地紧实，不是热炖菜。",
      "nl": "Het vlees is koud en stevig in heldere gelei, geen warme stoof."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish"
      ],
      "description": {
        "en": "A Flemish and northern French regional cold meat dish with visible aspic.",
        "zh": "佛兰德及法国北部地区冷肉菜，重点是透明肉冻。",
        "nl": "Een Vlaams en Noord-Frans koud vleesgerecht met zichtbare aspic."
      }
    },
    "composition": [
      [
        "chicken",
        30,
        "white meat"
      ],
      [
        "pork",
        25,
        "meat pieces"
      ],
      [
        "rabbit",
        20,
        "meat pieces"
      ],
      [
        "gelatin",
        15,
        "aspic"
      ],
      [
        "fries",
        10,
        "side"
      ]
    ],
    "distinctiveFlavorSources": [
      "cold aspic",
      "mixed meats",
      "pickles"
    ],
    "basicTaste": [
      "savory",
      "cool",
      "mildly tangy"
    ],
    "textureProfile": [
      "firm cold meat",
      "wobbly aspic",
      "crisp fries"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "regional-dish",
      "cold-starter"
    ],
    "avoidIfTags": [
      "no-pork",
      "dislikes-aspic"
    ],
    "orderVerdict": {
      "en": "Order if a cold jellied meat terrine sounds interesting; skip if aspic texture is difficult.",
      "zh": "想尝冷肉冻时可点；不适应肉冻口感则避开。",
      "nl": "Bestel als koude vleesgelei je aanspreekt; sla over als aspic lastig is."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 3,
    "imageCode": "107034",
    "imagePath": "/assets/dishes/main/107034-potjevleesch.webp",
    "thumbPath": "/assets/dishes/thumb/107034-potjevleesch.webp",
    "confidenceTag": "audited-remaining-batch-042",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "boudin-blanc",
    "metadataCode": "107035",
    "cuisineId": "belgian",
    "names": {
      "en": "Boudin Blanc",
      "zh": "白香肠",
      "nl": "Witte pens",
      "local": "Boudin blanc"
    },
    "category": "main",
    "cookingMethods": [
      "fried"
    ],
    "shortDescription": {
      "en": "Pale white sausage, usually pan-seared and served with potatoes or apples.",
      "zh": "浅色白香肠，通常煎香，配土豆或苹果。",
      "nl": "Witte worst, meestal gebakken met aardappel of appel."
    },
    "cookingProfile": {
      "en": "It is mild and soft inside, with a browned casing when pan-fried.",
      "zh": "内里温和柔软，外皮煎后微焦。",
      "nl": "Mild en zacht vanbinnen, met gebakken vel."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "A Belgian and French-style white sausage dish recognized by pale sausage links.",
        "zh": "比利时和法国常见白香肠菜，识别重点是浅色香肠。",
        "nl": "Een Belgisch-Franse witte worstschotel met bleke worsten."
      }
    },
    "composition": [
      [
        "sausage",
        60,
        "white sausage"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "apple",
        10,
        "sweet side"
      ],
      [
        "butter",
        5,
        "pan richness"
      ],
      [
        "mustard",
        5,
        "condiment",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "mild white sausage",
      "apple",
      "mustard"
    ],
    "basicTaste": [
      "savory",
      "mild",
      "slightly sweet"
    ],
    "textureProfile": [
      "soft sausage",
      "snappy casing",
      "soft potato"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "classic-dish"
    ],
    "avoidIfTags": [
      "no-pork",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "A mild sausage choice; good if black pudding sounds too strong.",
      "zh": "是温和香肠选择；如果觉得血肠太重，可以选它。",
      "nl": "Een milde worstkeuze; goed als bloedworst te sterk klinkt."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "imageCode": "107035",
    "imagePath": "/assets/dishes/main/107035-boudin-blanc.webp",
    "thumbPath": "/assets/dishes/thumb/107035-boudin-blanc.webp",
    "confidenceTag": "audited-remaining-batch-042",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "boudin-noir",
    "metadataCode": "107036",
    "cuisineId": "belgian",
    "names": {
      "en": "Boudin Noir",
      "zh": "黑血肠",
      "nl": "Bloedworst",
      "local": "Boudin noir"
    },
    "category": "main",
    "cookingMethods": [
      "fried"
    ],
    "shortDescription": {
      "en": "Dark blood sausage, often pan-fried and paired with apple or mashed potatoes.",
      "zh": "深色血肠，常煎香后配苹果或土豆泥。",
      "nl": "Donkere bloedworst, vaak gebakken met appel of puree."
    },
    "cookingProfile": {
      "en": "Expect a soft, rich, iron-like sausage flavor with sweet apple balance.",
      "zh": "风味浓厚，带血肠特有的铁质感，苹果带来甜味平衡。",
      "nl": "Rijk en zacht met typische bloedworstsmaak, vaak in balans met appel."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "A classic Belgian blood sausage plate with a strong acquired-taste cue.",
        "zh": "经典比利时血肠菜，风味明显，需要一定接受度。",
        "nl": "Een klassieke Belgische bloedworstschotel met uitgesproken smaak."
      }
    },
    "composition": [
      [
        "blood-sausage",
        60,
        "black sausage"
      ],
      [
        "apple-sauce",
        20,
        "sweet side"
      ],
      [
        "potato",
        15,
        "mash side"
      ],
      [
        "butter",
        5,
        "pan richness"
      ]
    ],
    "distinctiveFlavorSources": [
      "blood sausage",
      "apple sweetness",
      "pan browning"
    ],
    "basicTaste": [
      "rich",
      "savory",
      "sweet contrast"
    ],
    "textureProfile": [
      "soft dark sausage",
      "creamy mash",
      "smooth apple side"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "classic-dish"
    ],
    "avoidIfTags": [
      "no-pork",
      "offal-averse",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Choose it only if blood sausage sounds appealing; otherwise boudin blanc is safer.",
      "zh": "只有能接受血肠风味时才建议点；否则白香肠更稳。",
      "nl": "Kies dit alleen als bloedworst je aanspreekt; anders is witte pens veiliger."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 3,
    "imageCode": "107036",
    "imagePath": "/assets/dishes/main/107036-boudin-noir.webp",
    "thumbPath": "/assets/dishes/thumb/107036-boudin-noir.webp",
    "confidenceTag": "audited-remaining-batch-042",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "americain-prepare",
    "metadataCode": "107037",
    "cuisineId": "belgian",
    "names": {
      "en": "Americain Prepare",
      "zh": "比利时生牛肉抹酱",
      "nl": "Americain Prepare",
      "local": "Americain Prepare"
    },
    "category": "raw",
    "cookingMethods": [
      "raw"
    ],
    "shortDescription": {
      "en": "Americain Prepare is a common Belgian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "比利时生牛肉抹酱是常见比利时菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Americain Prepare is een veelvoorkomend Belgisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with raw or lightly cured seafood, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现raw or lightly cured seafood，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met raw or lightly cured seafood; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Belgian restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见比利时菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Belgisch restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "raw-white-fish",
        55,
        "main"
      ],
      [
        "lemon",
        15,
        "brightness"
      ],
      [
        "olive-oil",
        10,
        "dressing",
        "seasoning"
      ],
      [
        "cucumber",
        10,
        "freshness"
      ],
      [
        "sea-salt",
        5,
        "seasoning",
        "seasoning"
      ],
      [
        "parsley",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "seafood",
      "lemon",
      "herbs"
    ],
    "basicTaste": [
      "savory",
      "briny"
    ],
    "textureProfile": [
      "delicate raw bite",
      "bright dressing"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-raw-fish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "raw"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "raw-fish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, briny profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、briny的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, briny je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "belgian-spaghetti-bolognese",
    "metadataCode": "107038",
    "cuisineId": "belgian",
    "names": {
      "en": "Belgian Spaghetti Bolognese",
      "zh": "比利时肉酱意面",
      "nl": "Spaghetti bolognese",
      "local": "Spaghetti bolognese"
    },
    "category": "main",
    "cookingMethods": [
      "boiled",
      "sauce-tossed"
    ],
    "shortDescription": {
      "en": "Belgian brasserie-style spaghetti with a generous meat-tomato sauce and grated cheese.",
      "zh": "比利时小餐馆风格意面，肉番茄酱分量足，常撒奶酪。",
      "nl": "Belgische brasserie-spaghetti met ruime vleestomatensaus en geraspte kaas."
    },
    "cookingProfile": {
      "en": "Expect a saucy, familiar pasta plate rather than a delicate Italian version.",
      "zh": "是酱汁多、熟悉感强的意面，不是精致意式版本。",
      "nl": "Verwacht een sauzige vertrouwde pasta, geen verfijnde Italiaanse versie."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "safe-choice"
      ],
      "description": {
        "en": "A common Belgian cafe dish useful as a familiar safe-choice menu item.",
        "zh": "比利时咖啡馆常见菜，适合作为熟悉稳妥选择。",
        "nl": "Een veelvoorkomend Belgisch cafégerecht als veilige bekende keuze."
      }
    },
    "composition": [
      [
        "pasta",
        50,
        "spaghetti"
      ],
      [
        "ground-meat",
        25,
        "meat sauce"
      ],
      [
        "tomato-sauce",
        15,
        "sauce base",
        "seasoning"
      ],
      [
        "cheese",
        5,
        "finish"
      ],
      [
        "black-pepper",
        5,
        "seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "meat tomato sauce",
      "grated cheese",
      "black pepper"
    ],
    "basicTaste": [
      "savory",
      "tomato-rich",
      "mild"
    ],
    "textureProfile": [
      "soft spaghetti",
      "thick meat sauce",
      "grated cheese"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "safe-choice"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "A safe familiar main when you do not want surprises; skip if you want uniquely Belgian flavor.",
      "zh": "不想冒险时是稳妥熟悉主食；想要强比利时特色则不够。",
      "nl": "Een veilige bekende hoofdschotel; minder geschikt als je iets uitgesproken Belgisch wilt."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 0,
    "imageCode": "107038",
    "imagePath": "/assets/dishes/main/107038-belgian-spaghetti-bolognese.webp",
    "thumbPath": "/assets/dishes/thumb/107038-belgian-spaghetti-bolognese.webp",
    "confidenceTag": "audited-remaining-batch-042",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "crevettes-grises-cocktail",
    "metadataCode": "107039",
    "cuisineId": "belgian",
    "names": {
      "en": "Crevettes Grises Cocktail",
      "zh": "灰虾鸡尾酒杯",
      "nl": "Grijze garnalencocktail",
      "local": "Crevettes grises cocktail"
    },
    "category": "starter",
    "cookingMethods": [
      "assembled",
      "chilled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "North Sea grey shrimp served cold with cocktail sauce, lettuce, and lemon.",
      "zh": "北海灰虾冷食，配鸡尾酒酱、生菜和柠檬。",
      "nl": "Noordzeegarnaaltjes koud geserveerd met cocktailsaus, sla en citroen."
    },
    "cookingProfile": {
      "en": "It is cool, creamy, and briny, lighter than fried seafood.",
      "zh": "口感冷、奶油感和咸鲜，比炸海鲜更清爽。",
      "nl": "Koel, romig en zilt, lichter dan gefrituurde zeevruchten."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "seafood"
      ],
      "description": {
        "en": "A Belgian seafood starter centered on small grey shrimp.",
        "zh": "比利时经典海鲜前菜，核心是小灰虾。",
        "nl": "Een Belgische zeevruchtenstarter rond kleine grijze garnalen."
      }
    },
    "composition": [
      [
        "shrimp",
        55,
        "grey shrimp"
      ],
      [
        "mayonnaise",
        20,
        "cocktail sauce"
      ],
      [
        "mixed-vegetables",
        10,
        "lettuce garnish"
      ],
      [
        "lemon",
        10,
        "brightness"
      ],
      [
        "parsley",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "grey shrimp",
      "cocktail sauce",
      "lemon"
    ],
    "basicTaste": [
      "briny",
      "creamy",
      "fresh"
    ],
    "textureProfile": [
      "small firm shrimp",
      "creamy sauce",
      "crisp lettuce"
    ],
    "riskFlags": [
      "contains-shellfish",
      "contains-egg"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "seafood",
      "cold-starter"
    ],
    "avoidIfTags": [
      "shellfish-allergy",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "Good if you like cold creamy shrimp starters; skip with shellfish or egg allergy.",
      "zh": "喜欢冷食奶油感虾前菜时适合；甲壳类或鸡蛋过敏则避开。",
      "nl": "Goed als je koude romige garnalen lust; sla over bij schaal- of ei-allergie."
    },
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "imageCode": "107039",
    "imagePath": "/assets/dishes/main/107039-crevettes-grises-cocktail.webp",
    "thumbPath": "/assets/dishes/thumb/107039-crevettes-grises-cocktail.webp",
    "confidenceTag": "audited-remaining-batch-042",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "cod-with-leeks",
    "metadataCode": "107040",
    "cuisineId": "belgian",
    "names": {
      "en": "Cod with Leeks",
      "zh": "鳕鱼配韭葱",
      "nl": "Kabeljauw met prei",
      "local": "Cabillaud aux poireaux"
    },
    "category": "main",
    "cookingMethods": [
      "simmered",
      "assembled"
    ],
    "shortDescription": {
      "en": "White cod fillet served with soft leeks, often in a light creamy sauce.",
      "zh": "白鳕鱼柳配软韭葱，常带轻奶油酱。",
      "nl": "Kabeljauwfilet met zachte prei, vaak in lichte roomsaus."
    },
    "cookingProfile": {
      "en": "Expect mild flaky fish and sweet leeks, not a fried seafood plate.",
      "zh": "是温和片状白鱼和甜软韭葱，不是炸海鲜盘。",
      "nl": "Milde vlokkige vis met zoete prei, geen gefrituurde visschotel."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "seafood",
        "lighter-choice"
      ],
      "description": {
        "en": "A Belgian-style fish main where cod and leeks are the ordering cues.",
        "zh": "比利时风格鱼类主菜，重点是鳕鱼和韭葱。",
        "nl": "Een Belgische vismaaltijd met kabeljauw en prei als herkenning."
      }
    },
    "composition": [
      [
        "fish-fillet",
        55,
        "cod fillet"
      ],
      [
        "leek",
        25,
        "soft vegetable"
      ],
      [
        "potato",
        10,
        "side"
      ],
      [
        "cream",
        5,
        "light sauce"
      ],
      [
        "parsley",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "cod",
      "sweet leeks",
      "cream sauce"
    ],
    "basicTaste": [
      "mild",
      "savory",
      "lightly creamy"
    ],
    "textureProfile": [
      "flaky fish",
      "soft leeks",
      "smooth sauce"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-dairy"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "lighter-choice",
      "seafood"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "A gentle seafood main; good if you want fish without frying.",
      "zh": "温和鱼类主菜；想吃不油炸的鱼时适合。",
      "nl": "Een zachte vismaaltijd; goed als je vis zonder frituur wilt."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "imageCode": "107040",
    "imagePath": "/assets/dishes/main/107040-cod-with-leeks.webp",
    "thumbPath": "/assets/dishes/thumb/107040-cod-with-leeks.webp",
    "confidenceTag": "audited-remaining-batch-042",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "waterkerssoep",
    "metadataCode": "107041",
    "cuisineId": "belgian",
    "names": {
      "en": "Watercress Soup",
      "zh": "西洋菜汤",
      "nl": "Waterkerssoep",
      "local": "Waterkerssoep"
    },
    "category": "soup",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Smooth green watercress soup, often finished with cream and served as a light starter.",
      "zh": "顺滑绿色西洋菜汤，常以奶油收尾，作为清淡前菜。",
      "nl": "Gladde groene waterkerssoep, vaak afgewerkt met room en als lichte starter geserveerd."
    },
    "cookingProfile": {
      "en": "It is warm, smooth, and gently peppery, with cream softening the watercress bite.",
      "zh": "热汤顺滑，带轻微胡椒般草本味，奶油会柔化西洋菜辛香。",
      "nl": "Warm, glad en licht peperig, met room die de waterkers verzacht."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "soup",
        "starter"
      ],
      "description": {
        "en": "A light Belgian soup option that appears on brasserie and seasonal menus.",
        "zh": "比利时小馆和季节菜单上会出现的清淡汤品。",
        "nl": "Een lichte Belgische soep op brasserie- en seizoensmenu's."
      }
    },
    "composition": [
      [
        "watercress",
        40,
        "green base"
      ],
      [
        "broth",
        25,
        "soup base"
      ],
      [
        "potato",
        15,
        "body"
      ],
      [
        "cream",
        15,
        "finish"
      ],
      [
        "butter",
        5,
        "soft richness"
      ]
    ],
    "distinctiveFlavorSources": [
      "watercress",
      "cream",
      "broth"
    ],
    "basicTaste": [
      "fresh",
      "mildly peppery",
      "creamy"
    ],
    "textureProfile": [
      "smooth soup",
      "light cream",
      "warm bowl"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "starter",
      "lighter-choice"
    ],
    "avoidIfTags": [
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "A lighter starter if you want something green and warm before a heavier main.",
      "zh": "想在厚重主菜前先喝点绿色热汤时很合适。",
      "nl": "Een lichte starter als je iets groens en warms wilt voor een zwaarder hoofdgerecht."
    },
    "confidenceTag": "audited-belgian-batch-009",
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "asperges-op-vlaamse-wijze",
    "metadataCode": "107042",
    "cuisineId": "belgian",
    "names": {
      "en": "Asperges op Vlaamse Wijze",
      "zh": "佛兰德白芦笋",
      "nl": "Asperges op Vlaamse wijze",
      "local": "Asperges op Vlaamse wijze"
    },
    "category": "starter",
    "cookingMethods": [
      "boiled",
      "assembled"
    ],
    "shortDescription": {
      "en": "White asparagus served Flemish-style with chopped egg, melted butter, and parsley.",
      "zh": "白芦笋配切碎鸡蛋、融化黄油和欧芹，是佛兰德风格做法。",
      "nl": "Witte asperges op Vlaamse wijze met gehakt ei, gesmolten boter en peterselie."
    },
    "cookingProfile": {
      "en": "The asparagus is tender and delicate, while egg and butter make it richer than a plain vegetable plate.",
      "zh": "白芦笋细嫩清淡，鸡蛋和黄油让它比普通蔬菜盘更浓润。",
      "nl": "Malse delicate asperges, rijker door ei en boter."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "seasonal",
        "vegetable"
      ],
      "description": {
        "en": "A Flemish spring classic centered on white asparagus season.",
        "zh": "佛兰德春季经典，核心是白芦笋季节。",
        "nl": "Een Vlaamse lenteklassieker rond witte asperges."
      }
    },
    "composition": [
      [
        "white-asparagus",
        55,
        "vegetable"
      ],
      [
        "egg",
        20,
        "chopped topping"
      ],
      [
        "butter",
        15,
        "sauce"
      ],
      [
        "parsley",
        5,
        "fresh herb",
        "seasoning"
      ],
      [
        "potato",
        5,
        "optional side",
        "ingredient",
        "low",
        true
      ]
    ],
    "distinctiveFlavorSources": [
      "white-asparagus",
      "butter",
      "egg"
    ],
    "basicTaste": [
      "delicate",
      "buttery",
      "mild"
    ],
    "textureProfile": [
      "tender asparagus",
      "chopped egg",
      "melted butter"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "seasonal",
      "vegetarian"
    ],
    "avoidIfTags": [
      "egg-allergy",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "A gentle seasonal order if you like white asparagus; it is subtle rather than bold.",
      "zh": "喜欢白芦笋时很适合的季节菜；味道细腻，不是重口。",
      "nl": "Een milde seizoenskeuze als je witte asperges lust; subtiel in plaats van uitgesproken."
    },
    "confidenceTag": "audited-belgian-batch-009",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "hesp-rolletjes",
    "metadataCode": "107043",
    "cuisineId": "belgian",
    "names": {
      "en": "Hesp Rolletjes",
      "zh": "火腿菊苣奶酪卷",
      "nl": "Hespenrolletjes",
      "local": "Hesp rolletjes"
    },
    "category": "main",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Ham rolls wrapped around Belgian endive, baked in creamy cheese sauce.",
      "zh": "火腿包裹比利时菊苣，再用奶酪奶油酱烤制。",
      "nl": "Hamrolletjes rond witloof, gebakken in romige kaassaus."
    },
    "cookingProfile": {
      "en": "Expect bitter-soft endive inside salty ham with a rich cheese sauce.",
      "zh": "内里是微苦柔软菊苣，外层咸香火腿，酱汁浓郁。",
      "nl": "Zacht licht bitter witloof in zoute ham met rijke kaassaus."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "A Belgian home-style classic recognized by ham-wrapped endive and cheese sauce.",
        "zh": "比利时家常经典菜，重点是火腿卷菊苣和奶酪酱。",
        "nl": "Een Belgische thuiskeukenklassieker met witloof in ham en kaassaus."
      }
    },
    "composition": [
      [
        "endive",
        35,
        "wrapped vegetable"
      ],
      [
        "ham",
        30,
        "outer wrap"
      ],
      [
        "cheese",
        15,
        "sauce"
      ],
      [
        "cream",
        15,
        "sauce base"
      ],
      [
        "black-pepper",
        5,
        "seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "Belgian endive",
      "ham",
      "cheese sauce"
    ],
    "basicTaste": [
      "savory",
      "creamy",
      "slightly bitter"
    ],
    "textureProfile": [
      "soft endive",
      "salty ham",
      "browned creamy sauce"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "classic-dish",
      "comfort-food"
    ],
    "avoidIfTags": [
      "no-pork",
      "dairy-free",
      "dislikes-bitter"
    ],
    "orderVerdict": {
      "en": "A rich Belgian comfort dish; skip if endive bitterness or dairy is not for you.",
      "zh": "浓郁比利时家常菜；不爱菊苣苦味或避乳制品则不适合。",
      "nl": "Rijke Belgische comfortkost; sla over bij witloofbitterheid of zuivel."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 2,
    "imageCode": "107043",
    "imagePath": "/assets/dishes/main/107043-hesp-rolletjes.webp",
    "thumbPath": "/assets/dishes/thumb/107043-hesp-rolletjes.webp",
    "confidenceTag": "audited-remaining-batch-042",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "kip-aan-t-spit",
    "metadataCode": "107044",
    "cuisineId": "belgian",
    "names": {
      "en": "Kip aan 't Spit",
      "zh": "烤转炉鸡",
      "nl": "Kip aan 't spit",
      "local": "Kip aan 't spit"
    },
    "category": "main",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Rotisserie-style roast chicken, often sold with fries or salad.",
      "zh": "转炉烤鸡，常配薯条或沙拉。",
      "nl": "Kip van het spit, vaak met friet of salade."
    },
    "cookingProfile": {
      "en": "Expect browned chicken skin and juicy roast meat rather than fried coating.",
      "zh": "重点是焦香鸡皮和多汁烤肉，不是炸鸡外壳。",
      "nl": "Verwacht bruine kippenhuid en sappig gebraad, geen frituurkorst."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "safe-choice"
      ],
      "description": {
        "en": "A common Belgian takeaway and brasserie chicken plate.",
        "zh": "比利时外带店和小餐馆常见鸡肉菜。",
        "nl": "Een veelvoorkomende Belgische afhaal- en brasseriekeuze."
      }
    },
    "composition": [
      [
        "chicken",
        65,
        "roast chicken"
      ],
      [
        "fries",
        20,
        "side"
      ],
      [
        "mixed-vegetables",
        10,
        "salad side"
      ],
      [
        "black-pepper",
        5,
        "seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "roast chicken skin",
      "fries",
      "pepper seasoning"
    ],
    "basicTaste": [
      "savory",
      "roasty",
      "mild"
    ],
    "textureProfile": [
      "crisp browned skin",
      "juicy meat",
      "crisp fries"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "safe-choice"
    ],
    "avoidIfTags": [
      "wants-vegetarian"
    ],
    "orderVerdict": {
      "en": "A very safe familiar main; skip if you want a more distinctive Belgian specialty.",
      "zh": "非常稳妥熟悉的主菜；想尝更有特色的比利时菜则不够。",
      "nl": "Een heel veilige bekende hoofdschotel; minder uniek Belgisch."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 0,
    "imageCode": "107044",
    "imagePath": "/assets/dishes/main/107044-kip-aan-t-spit.webp",
    "thumbPath": "/assets/dishes/thumb/107044-kip-aan-t-spit.webp",
    "confidenceTag": "audited-remaining-batch-042",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "konijn-met-pruimen",
    "metadataCode": "107045",
    "cuisineId": "belgian",
    "names": {
      "en": "Konijn met Pruimen",
      "zh": "梅子炖兔肉",
      "nl": "Konijn met pruimen",
      "local": "Konijn met pruimen"
    },
    "category": "meat",
    "cookingMethods": [
      "braised"
    ],
    "shortDescription": {
      "en": "Rabbit braised with prunes in a dark sweet-savory sauce, often served with potatoes.",
      "zh": "兔肉和梅干一起炖成深色甜咸酱汁，常配土豆。",
      "nl": "Konijn gestoofd met pruimen in donkere zoet-hartige saus, vaak met aardappelen."
    },
    "cookingProfile": {
      "en": "The rabbit stays lean while prunes give the sauce sweetness and depth.",
      "zh": "兔肉本身偏瘦，梅干让酱汁带甜味和深度。",
      "nl": "Konijn blijft mager; pruimen geven zoetheid en diepte aan de saus."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "comfort-food"
      ],
      "description": {
        "en": "A traditional Belgian rabbit stew with a sweeter fruit-sauce profile.",
        "zh": "传统比利时兔肉炖菜，酱汁带水果甜味。",
        "nl": "Een traditionele Belgische konijnstoof met zoeter fruitig sausprofiel."
      }
    },
    "composition": [
      [
        "rabbit",
        55,
        "protein"
      ],
      [
        "plum-compote",
        20,
        "prune sweetness"
      ],
      [
        "onion",
        10,
        "sauce body"
      ],
      [
        "potato",
        10,
        "side"
      ],
      [
        "beer",
        5,
        "sauce depth",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "rabbit",
      "prunes",
      "beer"
    ],
    "basicTaste": [
      "savory",
      "sweet",
      "rich"
    ],
    "textureProfile": [
      "lean tender rabbit",
      "soft prunes",
      "dark sauce"
    ],
    "riskFlags": [
      "contains-alcohol",
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "regional-dish",
      "comfort-food"
    ],
    "avoidIfTags": [
      "avoids-rabbit",
      "avoids-sweet-savory",
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Good if sweet-savory braised meat appeals; avoid if rabbit or prunes sound off-putting.",
      "zh": "喜欢甜咸炖肉会适合；不接受兔肉或梅干就避开。",
      "nl": "Goed bij zoet-hartig stoofvlees; vermijd als konijn of pruimen je tegenstaan."
    },
    "confidenceTag": "audited-belgian-batch-009",
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 3,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "vlaamse-stoofkarbonaden",
    "metadataCode": "107046",
    "cuisineId": "belgian",
    "names": {
      "en": "Vlaamse Stoofkarbonaden",
      "zh": "佛兰德啤酒炖牛肉",
      "nl": "Vlaamse Stoofkarbonaden",
      "local": "Vlaamse Stoofkarbonaden"
    },
    "category": "stew",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Vlaamse Stoofkarbonaden is a common Belgian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "佛兰德啤酒炖牛肉是常见比利时菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Vlaamse Stoofkarbonaden is een veelvoorkomend Belgisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with slow-cooked stew, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现slow-cooked stew，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met slow-cooked stew; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Belgian restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见比利时菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Belgisch restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "beef",
        35,
        "main"
      ],
      [
        "potato",
        20,
        "body"
      ],
      [
        "mixed-vegetables",
        20,
        "body"
      ],
      [
        "broth",
        15,
        "base"
      ],
      [
        "black-pepper",
        5,
        "seasoning",
        "seasoning"
      ],
      [
        "parsley",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "herbs",
      "sauce",
      "savory base"
    ],
    "basicTaste": [
      "savory",
      "hearty"
    ],
    "textureProfile": [
      "soft vegetables",
      "rich broth"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "stew"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, hearty profile sounds appealing.",
      "zh": "如果你想要savory、hearty的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, hearty je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "mattentaart",
    "metadataCode": "107047",
    "cuisineId": "belgian",
    "names": {
      "en": "Mattentaart",
      "zh": "比利时凝乳挞",
      "nl": "Mattentaart",
      "local": "Mattentaart"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Small Belgian puff-pastry tart filled with fresh curd cheese, egg, and sugar.",
      "zh": "小型比利时酥皮挞，内馅是凝乳奶酪、鸡蛋和糖。",
      "nl": "Kleine Belgische bladerdeegtaart met mattenkaas, ei en suiker."
    },
    "cookingProfile": {
      "en": "It is flaky outside with a soft slightly grainy dairy filling, less creamy than custard pie.",
      "zh": "外层酥，内馅柔软略带凝乳颗粒感，比卡仕达塔更朴素。",
      "nl": "Bladerig buiten met zachte licht korrelige zuivelvulling, minder romig dan custardtaart."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "dessert"
      ],
      "description": {
        "en": "A Belgian pastry strongly associated with Geraardsbergen and regional bakeries.",
        "zh": "和 Geraardsbergen 及地区烘焙传统联系紧密的比利时点心。",
        "nl": "Een Belgische taart sterk verbonden met Geraardsbergen en regionale bakkers."
      }
    },
    "composition": [
      [
        "pastry-crust",
        35,
        "puff pastry"
      ],
      [
        "curd-cheese",
        35,
        "filling"
      ],
      [
        "egg",
        15,
        "set"
      ],
      [
        "sugar",
        10,
        "sweetness"
      ],
      [
        "vanilla",
        5,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "curd-cheese",
      "pastry-crust",
      "vanilla"
    ],
    "basicTaste": [
      "sweet",
      "mild",
      "dairy-rich"
    ],
    "textureProfile": [
      "flaky pastry",
      "soft curd filling",
      "lightly grainy center"
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
      "dessert",
      "regional-dish"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "Good if you want a regional pastry; choose rijsttaart if you prefer smoother custard.",
      "zh": "想尝地区点心时适合；更喜欢顺滑布丁馅可选 rijsttaart。",
      "nl": "Goed voor regionale patisserie; kies rijsttaart als je gladdere custard wilt."
    },
    "confidenceTag": "audited-belgian-batch-009",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "lacquemants",
    "metadataCode": "107048",
    "cuisineId": "belgian",
    "names": {
      "en": "Lacquemants",
      "zh": "列日糖浆薄华夫",
      "nl": "Lacquemants",
      "local": "Lacquemants"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Thin Liège fair waffles filled or glazed with sticky orange-brown syrup.",
      "zh": "列日集市常见薄华夫，夹或刷橙棕色黏糖浆。",
      "nl": "Dunne Luikse kermiswafels met kleverige oranjebruine siroop."
    },
    "cookingProfile": {
      "en": "They are thin, sticky, and very sweet, not thick breakfast waffles.",
      "zh": "口感薄、黏、非常甜，不是厚早餐华夫。",
      "nl": "Dun, kleverig en erg zoet, geen dikke ontbijtwafel."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "street-food"
      ],
      "description": {
        "en": "A Liège fair sweet recognized by thin syrupy waffles.",
        "zh": "列日集市甜点，重点是薄华夫和糖浆。",
        "nl": "Een Luikse kermiszoetigheid met dunne siroopwafels."
      }
    },
    "composition": [
      [
        "waffle-batter",
        50,
        "thin waffle"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "fruit-sauce-or-caramel",
        20,
        "syrup filling"
      ],
      [
        "butter",
        10,
        "richness"
      ]
    ],
    "distinctiveFlavorSources": [
      "sticky syrup",
      "thin waffle",
      "butter"
    ],
    "basicTaste": [
      "very sweet",
      "caramel",
      "buttery"
    ],
    "textureProfile": [
      "thin waffle layers",
      "sticky syrup",
      "soft chew"
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
      "street-food"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-allergy",
      "dairy-free",
      "avoid-very-sweet"
    ],
    "orderVerdict": {
      "en": "Choose it for a very sweet fair-style snack; skip if sticky syrup is too much.",
      "zh": "想吃很甜的集市小吃时适合；怕黏甜糖浆则避开。",
      "nl": "Kies dit voor een erg zoete kermissnack; sla over als siroop te veel is."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "imageCode": "107048",
    "imagePath": "/assets/dishes/main/107048-lacquemants.webp",
    "thumbPath": "/assets/dishes/thumb/107048-lacquemants.webp",
    "confidenceTag": "audited-remaining-batch-042",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "cuberdon",
    "metadataCode": "107049",
    "cuisineId": "belgian",
    "names": {
      "en": "Cuberdon",
      "zh": "紫色锥形软糖",
      "nl": "Cuberdon",
      "local": "Cuberdon"
    },
    "category": "dessert",
    "cookingMethods": [
      "set"
    ],
    "shortDescription": {
      "en": "Purple cone-shaped Belgian candy with a firm shell and soft raspberry-like syrup center.",
      "zh": "紫色锥形比利时糖果，外壳较硬，内里是覆盆子风味软糖浆。",
      "nl": "Paarse kegelvormige Belgische snoep met harde buitenkant en zachte framboosachtige kern."
    },
    "cookingProfile": {
      "en": "Expect an intensely sweet candy, not a plated dessert.",
      "zh": "这是甜度很高的糖果，不是盘装甜点。",
      "nl": "Verwacht zeer zoet snoep, geen borddessert."
    },
    "cuisineRole": {
      "level": "signature",
      "tags": [
        "signature-dish",
        "dessert"
      ],
      "description": {
        "en": "A recognizable Belgian confection known for its purple cone shape.",
        "zh": "辨识度很高的比利时糖果，特点是紫色锥形。",
        "nl": "Een herkenbaar Belgisch snoepje met paarse kegelvorm."
      }
    },
    "composition": [
      [
        "sugar",
        65,
        "candy base"
      ],
      [
        "berries",
        20,
        "raspberry-like center"
      ],
      [
        "gelatin",
        10,
        "set shell"
      ],
      [
        "fruit-sauce-or-caramel",
        5,
        "syrup center"
      ]
    ],
    "distinctiveFlavorSources": [
      "raspberry-like syrup",
      "sugar shell"
    ],
    "basicTaste": [
      "very sweet",
      "fruity"
    ],
    "textureProfile": [
      "firm shell",
      "soft syrup center",
      "sticky bite"
    ],
    "riskFlags": [],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert",
      "signature-dish"
    ],
    "avoidIfTags": [
      "avoid-very-sweet"
    ],
    "orderVerdict": {
      "en": "Try it as a Belgian candy curiosity; skip if you dislike very sweet sweets.",
      "zh": "想尝比利时特色糖果时可以；不爱高甜软糖则避开。",
      "nl": "Probeer als Belgisch snoep; sla over als je erg zoet niet lust."
    },
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "imageCode": "107049",
    "imagePath": "/assets/dishes/main/107049-cuberdon.webp",
    "thumbPath": "/assets/dishes/thumb/107049-cuberdon.webp",
    "confidenceTag": "audited-remaining-batch-042",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "merveilleux",
    "metadataCode": "107050",
    "cuisineId": "belgian",
    "names": {
      "en": "Merveilleux",
      "zh": "蛋白霜奶油巧克力甜点",
      "nl": "Merveilleux",
      "local": "Merveilleux"
    },
    "category": "dessert",
    "cookingMethods": [
      "assembled",
      "chilled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "Meringue and whipped cream dessert covered with chocolate shavings.",
      "zh": "蛋白霜和打发奶油组成的甜点，外层裹巧克力碎。",
      "nl": "Dessert van meringue en slagroom bedekt met chocoladeschaafsel."
    },
    "cookingProfile": {
      "en": "It is airy, creamy, and sweet with crisp meringue inside.",
      "zh": "口感轻盈、奶油感强，内部有酥脆蛋白霜。",
      "nl": "Luchtig, romig en zoet met krokante meringue binnenin."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "dessert"
      ],
      "description": {
        "en": "A Belgian and northern French pastry recognized by cream and chocolate shavings.",
        "zh": "比利时和法国北部经典甜点，重点是奶油和巧克力碎。",
        "nl": "Een Belgisch en Noord-Frans gebakje met room en chocoladeschaafsel."
      }
    },
    "composition": [
      [
        "meringue",
        35,
        "crisp layers"
      ],
      [
        "cream",
        35,
        "whipped cream"
      ],
      [
        "chocolate",
        20,
        "shavings"
      ],
      [
        "sugar",
        10,
        "sweetness"
      ]
    ],
    "distinctiveFlavorSources": [
      "meringue",
      "whipped cream",
      "chocolate shavings"
    ],
    "basicTaste": [
      "sweet",
      "creamy",
      "chocolatey"
    ],
    "textureProfile": [
      "airy cream",
      "crisp meringue",
      "soft chilled bite"
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
      "egg-allergy",
      "dairy-free",
      "avoid-very-sweet"
    ],
    "orderVerdict": {
      "en": "Good if you want a light-looking but creamy sweet dessert.",
      "zh": "想吃看起来轻、实际奶油感强的甜点时适合。",
      "nl": "Goed als je een luchtig ogend maar romig dessert wilt."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "imageCode": "107050",
    "imagePath": "/assets/dishes/main/107050-merveilleux.webp",
    "thumbPath": "/assets/dishes/thumb/107050-merveilleux.webp",
    "confidenceTag": "audited-remaining-batch-042",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "miserable-cake",
    "metadataCode": "107051",
    "cuisineId": "belgian",
    "names": {
      "en": "Misérable Cake",
      "zh": "杏仁奶油夹心蛋糕",
      "nl": "Misérabletaart",
      "local": "Misérable"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked",
      "layered"
    ],
    "shortDescription": {
      "en": "Belgian almond sponge cake layered with pale buttercream.",
      "zh": "比利时杏仁海绵蛋糕，中间夹浅色黄油奶油。",
      "nl": "Belgische amandelcake in lagen met lichte botercrème."
    },
    "cookingProfile": {
      "en": "Expect nutty sponge and rich buttercream, more refined than a simple slice cake.",
      "zh": "入口有杏仁蛋糕体和浓郁黄油奶油，比普通蛋糕更精致。",
      "nl": "Nootachtig biscuit en rijke botercrème, verfijnder dan gewone cake."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "dessert"
      ],
      "description": {
        "en": "A Belgian patisserie classic recognized by almond sponge and buttercream layers.",
        "zh": "比利时糕点经典，重点是杏仁蛋糕体和奶油层。",
        "nl": "Een Belgische patisserieklassieker met amandelbiscuit en botercrème."
      }
    },
    "composition": [
      [
        "almonds",
        30,
        "almond sponge"
      ],
      [
        "sponge-cake",
        25,
        "cake layers"
      ],
      [
        "butter",
        20,
        "buttercream"
      ],
      [
        "sugar",
        15,
        "sweetness"
      ],
      [
        "vanilla",
        10,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "almond sponge",
      "buttercream",
      "vanilla"
    ],
    "basicTaste": [
      "sweet",
      "nutty",
      "creamy"
    ],
    "textureProfile": [
      "soft sponge",
      "smooth buttercream",
      "light nutty crumb"
    ],
    "riskFlags": [
      "contains-tree-nut",
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
      "nut-allergy",
      "gluten-free",
      "dairy-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "Choose it for almond and buttercream; skip with nut or dairy concerns.",
      "zh": "喜欢杏仁和黄油奶油时适合；坚果或乳制品问题则避开。",
      "nl": "Kies dit voor amandel en botercrème; sla over bij noten of zuivel."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "imageCode": "107051",
    "imagePath": "/assets/dishes/main/107051-miserable-cake.webp",
    "thumbPath": "/assets/dishes/thumb/107051-miserable-cake.webp",
    "confidenceTag": "audited-remaining-batch-042",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "cougnou",
    "metadataCode": "107052",
    "cuisineId": "belgian",
    "names": {
      "en": "Cougnou",
      "zh": "圣诞甜面包",
      "nl": "Cougnou",
      "local": "Cougnou"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Belgian Christmas brioche-like bread, often shaped like a swaddled baby and dotted with sugar or raisins.",
      "zh": "比利时圣诞甜面包，常做成襁褓婴儿形，带糖粒或葡萄干。",
      "nl": "Belgisch kerstbrood, briocheachtig en vaak met suiker of rozijnen."
    },
    "cookingProfile": {
      "en": "It is soft, bready, and mildly sweet rather than a creamy dessert.",
      "zh": "口感柔软像面包，甜度温和，不是奶油甜点。",
      "nl": "Zacht, broodachtig en mild zoet, geen romig dessert."
    },
    "cuisineRole": {
      "level": "festival",
      "tags": [
        "festival",
        "dessert"
      ],
      "description": {
        "en": "A Belgian Christmas bakery item recognized by its shaped sweet bread form.",
        "zh": "比利时圣诞烘焙甜面包，特点是特殊造型。",
        "nl": "Een Belgisch kerstbrood herkenbaar aan de gevormde zoete broodvorm."
      }
    },
    "composition": [
      [
        "wheat-flour",
        45,
        "sweet bread"
      ],
      [
        "egg",
        15,
        "dough richness"
      ],
      [
        "butter",
        15,
        "richness"
      ],
      [
        "sugar",
        15,
        "sweetness"
      ],
      [
        "raisins",
        10,
        "optional fruit"
      ]
    ],
    "distinctiveFlavorSources": [
      "sweet bread",
      "butter",
      "raisins"
    ],
    "basicTaste": [
      "mildly sweet",
      "buttery",
      "bready"
    ],
    "textureProfile": [
      "soft bread crumb",
      "glossy crust",
      "small raisins"
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
      "festival"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-allergy",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Good as a festive sweet bread; skip if you want a plated dessert.",
      "zh": "适合作为节日甜面包；想吃盘装甜点则不是首选。",
      "nl": "Goed als feestelijk zoet brood; minder als borddessert."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "imageCode": "107052",
    "imagePath": "/assets/dishes/main/107052-cougnou.webp",
    "thumbPath": "/assets/dishes/thumb/107052-cougnou.webp",
    "confidenceTag": "audited-remaining-batch-042",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "cramique",
    "metadataCode": "107053",
    "cuisineId": "belgian",
    "names": {
      "en": "Cramique",
      "zh": "葡萄干甜面包",
      "nl": "Cramique",
      "local": "Cramique"
    },
    "category": "bread",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Soft Belgian raisin bread, usually sliced and eaten with butter.",
      "zh": "柔软比利时葡萄干面包，通常切片配黄油。",
      "nl": "Zacht Belgisch rozijnenbrood, meestal gesneden met boter."
    },
    "cookingProfile": {
      "en": "Expect a tender sweet loaf with raisins, lighter than cake.",
      "zh": "口感是柔软甜面包和葡萄干，比蛋糕更轻。",
      "nl": "Zacht zoet brood met rozijnen, lichter dan cake."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "A common Belgian bakery bread recognized by raisins in a soft loaf.",
        "zh": "比利时常见烘焙面包，重点是柔软面包里的葡萄干。",
        "nl": "Een veelvoorkomend Belgisch bakkersbrood met rozijnen."
      }
    },
    "composition": [
      [
        "wheat-flour",
        50,
        "bread loaf"
      ],
      [
        "raisins",
        20,
        "fruit"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "egg",
        10,
        "dough richness"
      ],
      [
        "sugar",
        10,
        "sweetness"
      ]
    ],
    "distinctiveFlavorSources": [
      "raisins",
      "sweet bread",
      "butter"
    ],
    "basicTaste": [
      "mildly sweet",
      "bready",
      "fruity"
    ],
    "textureProfile": [
      "soft crumb",
      "chewy raisins",
      "light crust"
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
      "breakfast",
      "bakery"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "A gentle bakery choice for breakfast or coffee; not a full dessert plate.",
      "zh": "适合早餐或配咖啡的温和烘焙选择；不是完整甜点盘。",
      "nl": "Een zachte bakkerskeuze bij ontbijt of koffie; geen volledig dessert."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 0,
    "imageCode": "107053",
    "imagePath": "/assets/dishes/main/107053-cramique.webp",
    "thumbPath": "/assets/dishes/thumb/107053-cramique.webp",
    "confidenceTag": "audited-remaining-batch-042",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "suikerbrood-belgian",
    "metadataCode": "107054",
    "cuisineId": "belgian",
    "names": {
      "en": "Belgian Suikerbrood",
      "zh": "比利时糖粒面包",
      "nl": "Belgisch suikerbrood",
      "local": "Suikerbrood"
    },
    "category": "bread",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Sweet bread with pockets of pearl sugar baked through the loaf.",
      "zh": "甜面包里烤入珍珠糖粒，切开可见糖洞。",
      "nl": "Zoet brood met parelsuiker in het kruim."
    },
    "cookingProfile": {
      "en": "It is soft and buttery, with crunchy or sticky sugar pockets.",
      "zh": "面包柔软带黄油香，糖粒有脆感或黏甜感。",
      "nl": "Zacht en boterig, met krokante of kleverige suikerplekjes."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "bakery"
      ],
      "description": {
        "en": "A Belgian bakery bread where pearl sugar is the main cue.",
        "zh": "比利时烘焙面包，核心识别是珍珠糖。",
        "nl": "Een Belgisch bakkersbrood met parelsuiker als herkenning."
      }
    },
    "composition": [
      [
        "wheat-flour",
        45,
        "bread loaf"
      ],
      [
        "sugar",
        25,
        "pearl sugar"
      ],
      [
        "butter",
        15,
        "richness"
      ],
      [
        "egg",
        10,
        "dough richness"
      ],
      [
        "vanilla",
        5,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pearl sugar",
      "butter",
      "sweet bread"
    ],
    "basicTaste": [
      "sweet",
      "buttery",
      "bready"
    ],
    "textureProfile": [
      "soft crumb",
      "sugar pockets",
      "glossy crust"
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
      "bakery",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free",
      "egg-allergy",
      "avoid-very-sweet"
    ],
    "orderVerdict": {
      "en": "Good if you want a sweet bread rather than a pastry cream dessert.",
      "zh": "想吃甜面包而不是奶油糕点时适合。",
      "nl": "Goed als je zoet brood wilt in plaats van roomgebak."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 0,
    "imageCode": "107054",
    "imagePath": "/assets/dishes/main/107054-suikerbrood-belgian.webp",
    "thumbPath": "/assets/dishes/thumb/107054-suikerbrood-belgian.webp",
    "confidenceTag": "audited-remaining-batch-042",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "rijstpap",
    "metadataCode": "107055",
    "cuisineId": "belgian",
    "names": {
      "en": "Rijstpap",
      "zh": "比利时米布丁",
      "nl": "Rijstpap",
      "local": "Rijstpap"
    },
    "category": "dessert",
    "cookingMethods": [
      "simmered"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "Creamy Belgian rice pudding, sometimes yellow from saffron and topped with brown sugar.",
      "zh": "比利时米布丁，常有淡黄色藏红花色泽，可撒红糖。",
      "nl": "Romige Belgische rijstpap, soms geel van saffraan en met bruine suiker."
    },
    "cookingProfile": {
      "en": "Expect visible rice grains in a soft creamy pudding, served cool or room temperature.",
      "zh": "能吃到米粒，整体柔软奶香，常冷食或常温食用。",
      "nl": "Zichtbare rijstkorrels in romige pap, koud of op kamertemperatuur."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "dessert"
      ],
      "description": {
        "en": "A classic Belgian dairy dessert recognized by creamy rice and yellow tint.",
        "zh": "经典比利时乳制甜点，重点是奶香米粒和淡黄色泽。",
        "nl": "Een klassiek Belgisch zuiveldessert met romige rijst en gele tint."
      }
    },
    "composition": [
      [
        "rice-custard",
        55,
        "rice pudding"
      ],
      [
        "cream",
        20,
        "dairy base"
      ],
      [
        "sugar",
        15,
        "sweetness"
      ],
      [
        "saffron",
        5,
        "color aroma",
        "seasoning"
      ],
      [
        "cinnamon",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "creamy rice",
      "saffron tint",
      "brown sugar"
    ],
    "basicTaste": [
      "sweet",
      "creamy",
      "mild"
    ],
    "textureProfile": [
      "soft rice grains",
      "creamy pudding",
      "light sugar crunch"
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
      "classic-dish"
    ],
    "avoidIfTags": [
      "dairy-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "A gentle creamy dessert; skip if rice pudding texture is not your thing.",
      "zh": "温和奶香甜点；不喜欢米布丁口感则避开。",
      "nl": "Een zacht romig dessert; sla over als rijstpaptextuur niet past."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "imageCode": "107055",
    "imagePath": "/assets/dishes/main/107055-rijstpap.webp",
    "thumbPath": "/assets/dishes/thumb/107055-rijstpap.webp",
    "confidenceTag": "audited-remaining-batch-042",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "pistolet",
    "metadataCode": "107056",
    "cuisineId": "belgian",
    "names": {
      "en": "Pistolet",
      "zh": "比利时圆小面包",
      "nl": "Pistolet",
      "local": "Pistolet"
    },
    "category": "bread",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Crisp round Belgian bread roll, often filled with ham, cheese, or spread.",
      "zh": "比利时圆形脆皮小面包，常夹火腿、奶酪或抹酱。",
      "nl": "Krokant rond Belgisch broodje, vaak belegd met ham, kaas of beleg."
    },
    "cookingProfile": {
      "en": "Expect a crusty white roll; the filling matters if it is served as a sandwich.",
      "zh": "重点是白面包脆皮；若做三明治，馅料决定风味。",
      "nl": "Verwacht een krokant wit broodje; beleg bepaalt de smaak."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "bakery"
      ],
      "description": {
        "en": "A common Belgian bakery roll and sandwich base.",
        "zh": "比利时常见面包店小圆包，也是三明治底。",
        "nl": "Een veelvoorkomend Belgisch broodje en sandwichbasis."
      }
    },
    "composition": [
      [
        "bread",
        65,
        "crusty roll"
      ],
      [
        "ham",
        15,
        "possible filling"
      ],
      [
        "cheese",
        10,
        "possible filling"
      ],
      [
        "butter",
        5,
        "spread"
      ],
      [
        "mustard",
        5,
        "optional condiment",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "crusty roll",
      "butter",
      "simple filling"
    ],
    "basicTaste": [
      "bready",
      "mild",
      "savory if filled"
    ],
    "textureProfile": [
      "crisp crust",
      "soft crumb",
      "optional soft filling"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "safe-choice",
      "bakery"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free",
      "no-pork"
    ],
    "orderVerdict": {
      "en": "A simple bread or sandwich choice; check the filling before judging the meal.",
      "zh": "是简单面包或三明治选择；是否值得点主要看夹馅。",
      "nl": "Een eenvoudige brood- of sandwichkeuze; beoordeel vooral het beleg."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 0,
    "imageCode": "107056",
    "imagePath": "/assets/dishes/main/107056-pistolet.webp",
    "thumbPath": "/assets/dishes/thumb/107056-pistolet.webp",
    "confidenceTag": "audited-remaining-batch-042",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "smoutebollen",
    "metadataCode": "107057",
    "cuisineId": "belgian",
    "names": {
      "en": "Smoutebollen",
      "zh": "比利时炸面团球",
      "nl": "Smoutebollen",
      "local": "Smoutebollen"
    },
    "category": "dessert",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "Belgian fairground fried dough balls dusted with powdered sugar.",
      "zh": "比利时集市炸面团球，表面撒大量糖粉。",
      "nl": "Belgische kermisdeegbollen, gefrituurd en met poedersuiker."
    },
    "cookingProfile": {
      "en": "Expect hot fluffy fried dough and lots of powdered sugar.",
      "zh": "入口是热的蓬松油炸面团和大量糖粉。",
      "nl": "Verwacht warme luchtige gefrituurde deegbollen met veel suiker."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "festival"
      ],
      "description": {
        "en": "A Belgian fair snack recognized by small powdered fried dough balls.",
        "zh": "比利时集市小吃，重点是糖粉炸面团球。",
        "nl": "Een Belgische kermissnack met kleine gesuikerde deegbollen."
      }
    },
    "composition": [
      [
        "wheat-flour",
        45,
        "dough"
      ],
      [
        "egg",
        15,
        "dough richness"
      ],
      [
        "sugar",
        20,
        "powdered sugar"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "vanilla",
        10,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "fried dough",
      "powdered sugar",
      "vanilla"
    ],
    "basicTaste": [
      "sweet",
      "fried",
      "mild"
    ],
    "textureProfile": [
      "fluffy center",
      "light crisp outside",
      "powdered sugar surface"
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
      "street-food",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-allergy",
      "dairy-free",
      "avoid-fried-food"
    ],
    "orderVerdict": {
      "en": "Great as a fair-style sweet snack; skip if you want something light.",
      "zh": "适合集市风甜小吃；想清淡则不适合。",
      "nl": "Mooi als kermiszoetigheid; sla over als je iets lichts zoekt."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 0,
    "imageCode": "107057",
    "imagePath": "/assets/dishes/main/107057-smoutebollen.webp",
    "thumbPath": "/assets/dishes/thumb/107057-smoutebollen.webp",
    "confidenceTag": "audited-remaining-batch-042",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "gaufres-de-liege",
    "metadataCode": "107058",
    "cuisineId": "belgian",
    "names": {
      "en": "Gaufre de Liège",
      "zh": "列日华夫",
      "nl": "Luikse wafel",
      "local": "Gaufre de Liège"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Dense chewy Liège waffle with caramelized pearl sugar in the dough.",
      "zh": "列日华夫质地较密、有嚼劲，面团中有焦糖化珍珠糖。",
      "nl": "Dichte Luikse wafel met gekaramelliseerde parelsuiker in het deeg."
    },
    "cookingProfile": {
      "en": "It is richer and chewier than a Brussels waffle, often eaten plain.",
      "zh": "比布鲁塞尔华夫更厚实有嚼劲，常直接吃。",
      "nl": "Rijker en steviger dan Brusselse wafel, vaak zonder topping gegeten."
    },
    "cuisineRole": {
      "level": "signature",
      "tags": [
        "signature-dish",
        "street-food"
      ],
      "description": {
        "en": "A Belgian signature waffle recognized by caramelized pearl sugar and irregular shape.",
        "zh": "比利时代表华夫，重点是珍珠糖和不规则厚实形状。",
        "nl": "Een Belgische signatuurwafel met parelsuiker en onregelmatige vorm."
      }
    },
    "composition": [
      [
        "waffle-batter",
        50,
        "dense waffle"
      ],
      [
        "sugar",
        25,
        "pearl sugar"
      ],
      [
        "butter",
        15,
        "richness"
      ],
      [
        "egg",
        10,
        "dough richness"
      ]
    ],
    "distinctiveFlavorSources": [
      "caramelized pearl sugar",
      "butter",
      "yeasted waffle dough"
    ],
    "basicTaste": [
      "sweet",
      "caramel",
      "buttery"
    ],
    "textureProfile": [
      "chewy dense crumb",
      "crisp sugar bits",
      "sticky edges"
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
      "signature-dish",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-allergy",
      "dairy-free",
      "avoid-very-sweet"
    ],
    "orderVerdict": {
      "en": "Choose it for the iconic caramelized Belgian waffle experience.",
      "zh": "想吃经典焦糖珍珠糖比利时华夫时选它。",
      "nl": "Kies dit voor de iconische gekaramelliseerde Belgische wafel."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 0,
    "imageCode": "107058",
    "imagePath": "/assets/dishes/main/107058-gaufres-de-liege.webp",
    "thumbPath": "/assets/dishes/thumb/107058-gaufres-de-liege.webp",
    "confidenceTag": "audited-remaining-batch-042",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "gaufres-de-bruxelles",
    "metadataCode": "107059",
    "cuisineId": "belgian",
    "names": {
      "en": "Gaufre de Bruxelles",
      "zh": "布鲁塞尔华夫",
      "nl": "Brusselse wafel",
      "local": "Gaufre de Bruxelles"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Light rectangular Brussels waffle with deep pockets, often topped with sugar, cream, or fruit.",
      "zh": "布鲁塞尔华夫呈长方形、格子深，口感较轻，常配糖粉、奶油或水果。",
      "nl": "Lichte rechthoekige Brusselse wafel met diepe vakken, vaak met suiker, room of fruit."
    },
    "cookingProfile": {
      "en": "It is airy and crisp, more topping-friendly than a dense Liège waffle.",
      "zh": "口感轻盈酥脆，比列日华夫更适合加配料。",
      "nl": "Luchtig en krokant, meer geschikt voor toppings dan Luikse wafel."
    },
    "cuisineRole": {
      "level": "signature",
      "tags": [
        "signature-dish",
        "dessert"
      ],
      "description": {
        "en": "A Belgian signature waffle recognized by rectangular deep-grid shape.",
        "zh": "比利时代表华夫，识别重点是长方形深格。",
        "nl": "Een Belgische signatuurwafel met rechthoekig diep raster."
      }
    },
    "composition": [
      [
        "waffle-batter",
        60,
        "light waffle"
      ],
      [
        "sugar",
        15,
        "topping"
      ],
      [
        "cream",
        10,
        "optional topping"
      ],
      [
        "berries",
        10,
        "fruit topping"
      ],
      [
        "butter",
        5,
        "richness"
      ]
    ],
    "distinctiveFlavorSources": [
      "crisp waffle",
      "powdered sugar",
      "cream topping"
    ],
    "basicTaste": [
      "sweet",
      "light",
      "buttery"
    ],
    "textureProfile": [
      "crisp outside",
      "airy inside",
      "deep waffle pockets"
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
      "signature-dish",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-allergy",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Choose it for a lighter Belgian waffle, especially if you want toppings.",
      "zh": "想吃较轻盈、适合加料的比利时华夫时选它。",
      "nl": "Kies dit voor een lichtere Belgische wafel, zeker met toppings."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 0,
    "imageCode": "107059",
    "imagePath": "/assets/dishes/main/107059-gaufres-de-bruxelles.webp",
    "thumbPath": "/assets/dishes/thumb/107059-gaufres-de-bruxelles.webp",
    "confidenceTag": "audited-remaining-batch-042",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "boule-de-berlin-belgian",
    "metadataCode": "107060",
    "cuisineId": "belgian",
    "names": {
      "en": "Belgian Boule de Berlin",
      "zh": "比利时夹心甜甜圈",
      "nl": "Boule de Berlin",
      "local": "Boule de Berlin"
    },
    "category": "dessert",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "Round fried doughnut filled with pastry cream or jam and dusted with sugar.",
      "zh": "圆形油炸甜面团，内有卡仕达或果酱馅，表面撒糖粉。",
      "nl": "Ronde gefrituurde bol met banketbakkersroom of jam en suiker."
    },
    "cookingProfile": {
      "en": "Expect a soft fried doughnut with a sweet creamy or fruity center.",
      "zh": "入口是柔软油炸面团，中间有甜奶油或果酱馅。",
      "nl": "Zachte gefrituurde bol met zoete romige of fruitige vulling."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "dessert",
        "bakery"
      ],
      "description": {
        "en": "A common Belgian bakery doughnut recognized by round filled shape.",
        "zh": "比利时常见烘焙甜点，特点是圆形夹心炸面团。",
        "nl": "Een veelvoorkomende Belgische gevulde deegbol."
      }
    },
    "composition": [
      [
        "wheat-flour",
        45,
        "fried dough"
      ],
      [
        "vanilla-custard",
        25,
        "cream filling"
      ],
      [
        "sugar",
        15,
        "dusting"
      ],
      [
        "egg",
        10,
        "dough richness"
      ],
      [
        "butter",
        5,
        "richness"
      ]
    ],
    "distinctiveFlavorSources": [
      "fried dough",
      "pastry cream",
      "powdered sugar"
    ],
    "basicTaste": [
      "sweet",
      "creamy",
      "fried"
    ],
    "textureProfile": [
      "soft dough",
      "creamy center",
      "sugared surface"
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
      "bakery"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-allergy",
      "dairy-free",
      "avoid-fried-food"
    ],
    "orderVerdict": {
      "en": "A familiar sweet bakery choice; heavier than a small cookie.",
      "zh": "是熟悉的甜面包店选择；比分量小的饼干更厚重。",
      "nl": "Een vertrouwde zoete bakkerskeuze; zwaarder dan een klein koekje."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 0,
    "imageCode": "107060",
    "imagePath": "/assets/dishes/main/107060-boule-de-berlin-belgian.webp",
    "thumbPath": "/assets/dishes/thumb/107060-boule-de-berlin-belgian.webp",
    "confidenceTag": "audited-remaining-batch-042",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "cottage-pie",
    "metadataCode": "123031",
    "imageCode": "123031",
    "cuisineId": "british-irish",
    "names": {
      "en": "Cottage Pie",
      "zh": "英式牛肉土豆派",
      "nl": "Cottage Pie",
      "local": "Cottage Pie"
    },
    "category": "main",
    "mealRole": "main",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "baked",
      "layered"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Cottage Pie is a British beef mince pie topped with mashed potato rather than pastry.",
      "zh": "英式牛肉土豆派通常是英式牛肉末土豆派，上层是土豆泥，不是酥皮。",
      "nl": "Cottage Pie is meestal een Britse gehaktschotel met aardappelpuree bovenop in plaats van deeg."
    },
    "cookingProfile": {
      "en": "Expect soft beef filling under browned mashed potato.",
      "zh": "点餐时可预期牛肉馅柔软，上层土豆泥烤到微焦。",
      "nl": "Verwacht zachte rundvleesvulling onder gebruinde puree."
    },
    "cuisineRole": {
      "level": "signature",
      "tags": [
        "signature-dish"
      ],
      "description": {
        "en": "The ordering cue is soft beef filling under browned mashed potato.",
        "zh": "点餐识别重点是牛肉馅柔软，上层土豆泥烤到微焦。",
        "nl": "Het herkenningspunt is zachte rundvleesvulling onder gebruinde puree."
      }
    },
    "composition": [
      [
        "beef",
        40,
        "protein"
      ],
      [
        "potato",
        40,
        "starch-or-legume"
      ],
      [
        "carrot",
        10,
        "component"
      ],
      [
        "onion",
        5,
        "component"
      ],
      [
        "black-pepper",
        5,
        "distinctive-seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "beef",
      "potato",
      "black-pepper"
    ],
    "basicTaste": [
      "savory",
      "hearty",
      "mild"
    ],
    "textureProfile": [
      "mashed potato top",
      "minced beef filling",
      "browned edges"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [],
    "avoidIfTags": [
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a hearty beef-potato bake; skip if you want a crisp pastry pie.",
      "zh": "想吃牛肉土豆焗菜时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een stevige rund-aardappelovenschotel wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-036",
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/123031-cottage-pie.webp",
    "thumbPath": "/assets/dishes/thumb/123031-cottage-pie.webp"
  },
  {
    "id": "steak-and-kidney-pudding",
    "metadataCode": "123032",
    "imageCode": "123032",
    "cuisineId": "british-irish",
    "names": {
      "en": "Steak and Kidney Pudding",
      "zh": "牛排腰子布丁派",
      "nl": "Steak and Kidney Pudding",
      "local": "Steak and Kidney Pudding"
    },
    "category": "main",
    "mealRole": "main",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "steamed"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Steak and Kidney Pudding is a steamed British pudding filled with beef steak, kidney, and gravy.",
      "zh": "牛排腰子布丁派通常是英式蒸咸布丁，内馅是牛肉、腰子和肉汁。",
      "nl": "Steak and Kidney Pudding is meestal een gestoomde Britse pudding gevuld met rundvlees, niertjes en jus."
    },
    "cookingProfile": {
      "en": "Expect soft dough casing with a strong meat-and-kidney filling.",
      "zh": "点餐时可预期外皮柔软，内馅肉汁浓，腰子味明显。",
      "nl": "Verwacht zachte deegkorst met krachtige vlees-niervulling."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "The ordering cue is soft dough casing with a strong meat-and-kidney filling.",
        "zh": "点餐识别重点是外皮柔软，内馅肉汁浓，腰子味明显。",
        "nl": "Het herkenningspunt is zachte deegkorst met krachtige vlees-niervulling."
      }
    },
    "composition": [
      [
        "beef",
        40,
        "protein"
      ],
      [
        "offal",
        20,
        "protein"
      ],
      [
        "pastry-crust",
        25,
        "base"
      ],
      [
        "broth",
        10,
        "component"
      ],
      [
        "black-pepper",
        5,
        "distinctive-seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "offal",
      "beef",
      "black-pepper"
    ],
    "basicTaste": [
      "savory",
      "rich",
      "offal"
    ],
    "textureProfile": [
      "soft suet-style crust",
      "gravy filling",
      "kidney pieces"
    ],
    "riskFlags": [
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a traditional offal-rich pie-style dish; skip if you dislike kidney or soft steamed pastry.",
      "zh": "想吃传统浓厚内脏肉馅时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een traditioneel nierrijk pasteigerecht wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-036",
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 3,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/123032-steak-and-kidney-pudding.webp",
    "thumbPath": "/assets/dishes/thumb/123032-steak-and-kidney-pudding.webp"
  },
  {
    "cuisineId": "british-irish",
    "confidenceTag": "audited-british-irish-batch-011",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 1,
    "id": "sausage-roll",
    "metadataCode": "123033",
    "names": {
      "en": "Sausage Roll",
      "zh": "英式香肠酥卷",
      "nl": "Sausage roll",
      "local": "Sausage roll"
    },
    "category": "bread",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Seasoned sausage meat wrapped in golden puff pastry.",
      "zh": "调味香肠肉包在金黄酥皮中烘烤。",
      "nl": "Gekruid worstvlees verpakt in goudbruin bladerdeeg."
    },
    "cookingProfile": {
      "en": "It is flaky outside and meaty inside, usually eaten as a snack or quick lunch.",
      "zh": "外层酥松、内里肉馅扎实，常作小吃或快捷午餐。",
      "nl": "Bladerig van buiten en vlezig vanbinnen, vaak als snack of snelle lunch."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "snack",
        "street-food"
      ],
      "description": {
        "en": "A bakery and cafe staple where pastry quality and sausage filling matter.",
        "zh": "烘焙店和咖啡馆常见小食，重点是酥皮和香肠肉馅。",
        "nl": "Een bakkerij- en cafénietje waarbij deeg en worstvulling tellen."
      }
    },
    "composition": [
      [
        "pastry-crust",
        45,
        "puff pastry"
      ],
      [
        "sausage-global",
        40,
        "sausage meat"
      ],
      [
        "egg",
        5,
        "glaze"
      ],
      [
        "mustard",
        5,
        "condiment",
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
      "sausage meat",
      "buttery pastry",
      "mustard"
    ],
    "basicTaste": [
      "savory",
      "salty",
      "buttery"
    ],
    "textureProfile": [
      "flaky pastry",
      "dense sausage filling",
      "crisp edge"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "snack",
      "portable-food"
    ],
    "avoidIfTags": [
      "no-pork",
      "gluten-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "Good as a quick savory snack; heavier than a plain pastry.",
      "zh": "适合作快速咸味小吃；比普通酥皮点心更厚重。",
      "nl": "Goed als snelle hartige snack; zwaarder dan gewoon gebak."
    },
    "weightLevel": 3,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "pork-pie",
    "metadataCode": "123034",
    "imageCode": "123034",
    "cuisineId": "british-irish",
    "names": {
      "en": "Pork Pie",
      "zh": "英式猪肉派",
      "nl": "Pork Pie",
      "local": "Pork Pie"
    },
    "category": "starter",
    "mealRole": "starter-or-side",
    "portionType": "small-plate",
    "goodForSharing": true,
    "cookingMethods": [
      "baked",
      "chilled"
    ],
    "servingTemperature": "cold-or-cool",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Pork Pie is a British cold pork pie with firm meat filling and a jelly layer.",
      "zh": "英式猪肉派通常是英式冷猪肉派，肉馅紧实，常有肉冻层。",
      "nl": "Pork Pie is meestal een Britse koude varkenspastei met stevige vulling en gelei."
    },
    "cookingProfile": {
      "en": "Expect firm pork inside dense pastry, usually eaten cold.",
      "zh": "点餐时可预期厚实酥皮包紧实猪肉，通常冷食。",
      "nl": "Verwacht stevig varkensvlees in dichte korst, meestal koud gegeten."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "The ordering cue is firm pork inside dense pastry, usually eaten cold.",
        "zh": "点餐识别重点是厚实酥皮包紧实猪肉，通常冷食。",
        "nl": "Het herkenningspunt is stevig varkensvlees in dichte korst, meestal koud gegeten."
      }
    },
    "composition": [
      [
        "pork",
        55,
        "protein"
      ],
      [
        "pastry-crust",
        30,
        "base"
      ],
      [
        "soup-gelatin",
        10,
        "component"
      ],
      [
        "black-pepper",
        5,
        "distinctive-seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork",
      "soup-gelatin",
      "black-pepper"
    ],
    "basicTaste": [
      "savory",
      "porky",
      "peppery"
    ],
    "textureProfile": [
      "firm cold pork",
      "hot-water crust",
      "jellied layer"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [],
    "avoidIfTags": [
      "no-pork",
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a cold savory pork pie; skip if you avoid pork or jelly texture.",
      "zh": "想吃冷食咸猪肉派时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een koude hartige varkenspastei wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-036",
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/123034-pork-pie.webp",
    "thumbPath": "/assets/dishes/thumb/123034-pork-pie.webp"
  },
  {
    "id": "bacon-butty",
    "metadataCode": "123035",
    "imageCode": "123035",
    "cuisineId": "british-irish",
    "names": {
      "en": "Bacon Butty",
      "zh": "培根三明治",
      "nl": "Bacon Butty",
      "local": "Bacon Butty"
    },
    "category": "bread",
    "mealRole": "starter-or-side",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "fried",
      "assembled"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Bacon Butty is a simple British bacon sandwich, often on soft bread with butter or sauce.",
      "zh": "培根三明治通常是英式培根三明治，常用软面包夹培根、黄油或酱。",
      "nl": "Bacon Butty is meestal een eenvoudige Britse baconsandwich, vaak op zacht brood met boter of saus."
    },
    "cookingProfile": {
      "en": "Expect salty bacon in soft bread, straightforward and breakfast-like.",
      "zh": "点餐时可预期咸香培根夹软面包，很直接，偏早餐感。",
      "nl": "Verwacht zout spek in zacht brood, eenvoudig en ontbijtachtig."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food"
      ],
      "description": {
        "en": "The ordering cue is salty bacon in soft bread, straightforward and breakfast-like.",
        "zh": "点餐识别重点是咸香培根夹软面包，很直接，偏早餐感。",
        "nl": "Het herkenningspunt is zout spek in zacht brood, eenvoudig en ontbijtachtig."
      }
    },
    "composition": [
      [
        "bread",
        50,
        "base"
      ],
      [
        "bacon",
        40,
        "protein"
      ],
      [
        "butter",
        5,
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
      "bacon",
      "butter"
    ],
    "basicTaste": [
      "salty",
      "smoky",
      "simple"
    ],
    "textureProfile": [
      "soft bread",
      "crisp or chewy bacon",
      "buttery bite"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "sandwich-or-bread"
    ],
    "avoidIfTags": [
      "no-pork",
      "gluten-free",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a salty breakfast sandwich; skip if you avoid pork or greasy breakfast food.",
      "zh": "想吃咸香早餐三明治时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een zoute ontbijtsandwich wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-036",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/123035-bacon-butty.webp",
    "thumbPath": "/assets/dishes/thumb/123035-bacon-butty.webp"
  },
  {
    "id": "chip-butty",
    "metadataCode": "123036",
    "imageCode": "123036",
    "cuisineId": "british-irish",
    "names": {
      "en": "Chip Butty",
      "zh": "薯条三明治",
      "nl": "Chip Butty",
      "local": "Chip Butty"
    },
    "category": "bread",
    "mealRole": "starter-or-side",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "assembled"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Chip Butty is a British sandwich filled with chips or fries.",
      "zh": "薯条三明治通常是英式薯条三明治，用面包夹热薯条。",
      "nl": "Chip Butty is meestal een Britse sandwich gevuld met friet."
    },
    "cookingProfile": {
      "en": "Expect hot fries inside soft buttered bread.",
      "zh": "点餐时可预期热薯条夹在抹黄油的软面包里。",
      "nl": "Verwacht warme friet in zacht beboterde brood."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food"
      ],
      "description": {
        "en": "The ordering cue is hot fries inside soft buttered bread.",
        "zh": "点餐识别重点是热薯条夹在抹黄油的软面包里。",
        "nl": "Het herkenningspunt is warme friet in zacht beboterde brood."
      }
    },
    "composition": [
      [
        "bread",
        45,
        "base"
      ],
      [
        "fries",
        45,
        "component"
      ],
      [
        "butter",
        5,
        "richness"
      ],
      [
        "sea-salt",
        5,
        "distinctive-seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "fries",
      "butter",
      "sea-salt"
    ],
    "basicTaste": [
      "salty",
      "starchy",
      "mild"
    ],
    "textureProfile": [
      "soft bread",
      "hot fries",
      "carb-heavy"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "sandwich-or-bread"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a very starchy comfort sandwich; skip if you want protein or a light meal.",
      "zh": "想吃高碳水安慰感三明治时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een zeer zetmeelrijke comfortsandwich wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-036",
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/123036-chip-butty.webp",
    "thumbPath": "/assets/dishes/thumb/123036-chip-butty.webp"
  },
  {
    "id": "jellied-eels",
    "metadataCode": "123037",
    "imageCode": "123037",
    "cuisineId": "british-irish",
    "names": {
      "en": "Jellied Eels",
      "zh": "伦敦鳗鱼冻",
      "nl": "Jellied Eels",
      "local": "Jellied Eels"
    },
    "category": "starter",
    "mealRole": "starter-or-side",
    "portionType": "small-plate",
    "goodForSharing": true,
    "cookingMethods": [
      "set",
      "chilled"
    ],
    "servingTemperature": "cold-or-cool",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Jellied Eels is a traditional London dish of cooked eel set in savory jelly.",
      "zh": "伦敦鳗鱼冻通常是伦敦传统鳗鱼冻，熟鳗鱼块凝在咸鲜冻里。",
      "nl": "Jellied Eels is meestal een traditioneel Londens gerecht van gekookte paling in hartige gelei."
    },
    "cookingProfile": {
      "en": "Expect cold fish pieces in a jelly texture, sometimes with vinegar.",
      "zh": "点餐时可预期冷食鱼块配肉冻口感，常加醋。",
      "nl": "Verwacht koude visstukjes in gelei, soms met azijn."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish"
      ],
      "description": {
        "en": "The ordering cue is cold fish pieces in a jelly texture, sometimes with vinegar.",
        "zh": "点餐识别重点是冷食鱼块配肉冻口感，常加醋。",
        "nl": "Het herkenningspunt is koude visstukjes in gelei, soms met azijn."
      }
    },
    "composition": [
      [
        "eel",
        60,
        "seafood"
      ],
      [
        "soup-gelatin",
        25,
        "component"
      ],
      [
        "vinegar",
        10,
        "distinctive-seasoning",
        "seasoning"
      ],
      [
        "black-pepper",
        5,
        "distinctive-seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "eel",
      "vinegar",
      "black-pepper"
    ],
    "basicTaste": [
      "briny",
      "gelatinous",
      "mild"
    ],
    "textureProfile": [
      "cold eel pieces",
      "set jelly",
      "soft bones possible"
    ],
    "riskFlags": [
      "contains-fish"
    ],
    "dietaryFlags": [],
    "goodForTags": [],
    "avoidIfTags": [
      "fish-allergy"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a traditional cold eel jelly; skip if you dislike gelatin textures or fishy dishes.",
      "zh": "想尝传统冷鳗鱼冻时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je traditionele koude palinggelei wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-036",
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 3,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/123037-jellied-eels.webp",
    "thumbPath": "/assets/dishes/thumb/123037-jellied-eels.webp"
  },
  {
    "id": "pie-and-mash",
    "metadataCode": "123038",
    "imageCode": "123038",
    "cuisineId": "british-irish",
    "names": {
      "en": "Pie and Mash",
      "zh": "肉派配土豆泥",
      "nl": "Pie and Mash",
      "local": "Pie and Mash"
    },
    "category": "main",
    "mealRole": "main",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "baked",
      "assembled"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Pie and Mash is a London-style meat pie served with mashed potato and parsley liquor sauce.",
      "zh": "肉派配土豆泥通常是伦敦风肉派配土豆泥和欧芹肉汁酱。",
      "nl": "Pie and Mash is meestal een Londense vleespastei met aardappelpuree en peterseliesaus."
    },
    "cookingProfile": {
      "en": "Expect pastry, mash, and mild green parsley sauce.",
      "zh": "点餐时可预期酥皮肉派配土豆泥，绿色欧芹酱味道温和。",
      "nl": "Verwacht pastei, puree en milde groene peterseliesaus."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "The ordering cue is pastry, mash, and mild green parsley sauce.",
        "zh": "点餐识别重点是酥皮肉派配土豆泥，绿色欧芹酱味道温和。",
        "nl": "Het herkenningspunt is pastei, puree en milde groene peterseliesaus."
      }
    },
    "composition": [
      [
        "ground-meat",
        35,
        "protein"
      ],
      [
        "pastry-crust",
        30,
        "base"
      ],
      [
        "potato",
        25,
        "starch-or-legume"
      ],
      [
        "broth",
        5,
        "component"
      ],
      [
        "parsley",
        5,
        "distinctive-seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "ground-meat",
      "potato",
      "parsley"
    ],
    "basicTaste": [
      "savory",
      "mild",
      "hearty"
    ],
    "textureProfile": [
      "meat pie",
      "mashed potato",
      "liquor-style parsley sauce"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a classic pie-and-mash plate; skip if you dislike soft mash or pastry-heavy meals.",
      "zh": "想吃传统肉派土豆泥时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een klassiek pastei-pureebord wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-036",
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/123038-pie-and-mash.webp",
    "thumbPath": "/assets/dishes/thumb/123038-pie-and-mash.webp"
  },
  {
    "id": "welsh-cawl",
    "metadataCode": "123039",
    "imageCode": "123039",
    "cuisineId": "british-irish",
    "names": {
      "en": "Welsh Cawl",
      "zh": "威尔士羊肉蔬菜汤",
      "nl": "Welsh Cawl",
      "local": "Welsh Cawl"
    },
    "category": "soup",
    "mealRole": "main",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "simmered"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Welsh Cawl is a Welsh lamb and vegetable broth or stew.",
      "zh": "威尔士羊肉蔬菜汤通常是威尔士羊肉蔬菜汤炖菜。",
      "nl": "Welsh Cawl is meestal een Welshe bouillonachtige stoof met lam en groente."
    },
    "cookingProfile": {
      "en": "Expect gentle broth with lamb, leek, and root vegetables.",
      "zh": "点餐时可预期汤味温和，有羊肉、韭葱和根茎蔬菜。",
      "nl": "Verwacht milde bouillon met lam, prei en wortelgroenten."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish"
      ],
      "description": {
        "en": "The ordering cue is gentle broth with lamb, leek, and root vegetables.",
        "zh": "点餐识别重点是汤味温和，有羊肉、韭葱和根茎蔬菜。",
        "nl": "Het herkenningspunt is milde bouillon met lam, prei en wortelgroenten."
      }
    },
    "composition": [
      [
        "lamb",
        35,
        "protein"
      ],
      [
        "potato",
        25,
        "starch-or-legume"
      ],
      [
        "leek",
        15,
        "component"
      ],
      [
        "carrot",
        10,
        "component"
      ],
      [
        "broth",
        10,
        "component"
      ],
      [
        "black-pepper",
        5,
        "distinctive-seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "lamb",
      "leek",
      "black-pepper"
    ],
    "basicTaste": [
      "savory",
      "brothy",
      "mild"
    ],
    "textureProfile": [
      "clear stew",
      "root vegetables",
      "tender lamb"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "soup",
      "first-timer-friendly"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Choose it when you want a mild lamb vegetable soup; skip if you dislike lamb broth.",
      "zh": "想喝温和羊肉蔬菜汤时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een milde lams-groentesoep wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-036",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/123039-welsh-cawl.webp",
    "thumbPath": "/assets/dishes/thumb/123039-welsh-cawl.webp"
  },
  {
    "id": "lancashire-hotpot",
    "metadataCode": "123040",
    "imageCode": "123040",
    "cuisineId": "british-irish",
    "names": {
      "en": "Lancashire Hotpot",
      "zh": "兰开夏羊肉土豆锅",
      "nl": "Lancashire Hotpot",
      "local": "Lancashire Hotpot"
    },
    "category": "main",
    "mealRole": "main",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "baked",
      "braised"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Lancashire Hotpot is a northern English lamb casserole topped with sliced potatoes.",
      "zh": "兰开夏羊肉土豆锅通常是英格兰北部羊肉土豆焗炖菜，上面铺土豆片。",
      "nl": "Lancashire Hotpot is meestal een Noord-Engelse lamsstoof met aardappelschijfjes bovenop."
    },
    "cookingProfile": {
      "en": "Expect soft lamb under browned potato slices.",
      "zh": "点餐时可预期羊肉柔软，上层土豆片烤到微焦。",
      "nl": "Verwacht zacht lam onder gebruinde aardappelschijfjes."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish"
      ],
      "description": {
        "en": "The ordering cue is soft lamb under browned potato slices.",
        "zh": "点餐识别重点是羊肉柔软，上层土豆片烤到微焦。",
        "nl": "Het herkenningspunt is zacht lam onder gebruinde aardappelschijfjes."
      }
    },
    "composition": [
      [
        "lamb",
        40,
        "protein"
      ],
      [
        "potato",
        35,
        "starch-or-legume"
      ],
      [
        "onion",
        10,
        "component"
      ],
      [
        "broth",
        10,
        "component"
      ],
      [
        "black-pepper",
        5,
        "distinctive-seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "lamb",
      "potato",
      "black-pepper"
    ],
    "basicTaste": [
      "savory",
      "hearty",
      "mild"
    ],
    "textureProfile": [
      "sliced potato top",
      "braised lamb",
      "casserole texture"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "first-timer-friendly"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Choose it when you want a hearty lamb-potato casserole; skip if you want a light dish or dislike lamb.",
      "zh": "想吃羊肉土豆焗炖菜时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een stevige lam-aardappelovenschotel wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-036",
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/123040-lancashire-hotpot.webp",
    "thumbPath": "/assets/dishes/thumb/123040-lancashire-hotpot.webp"
  },
  {
    "id": "colcannon",
    "metadataCode": "123041",
    "imageCode": "123041",
    "cuisineId": "british-irish",
    "names": {
      "en": "Colcannon",
      "zh": "爱尔兰卷心菜土豆泥",
      "nl": "Colcannon",
      "local": "Colcannon"
    },
    "category": "side",
    "mealRole": "side",
    "portionType": "small-plate",
    "goodForSharing": true,
    "cookingMethods": [
      "boiled",
      "stirred"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Colcannon is Irish mashed potato mixed with cabbage or kale and butter.",
      "zh": "爱尔兰卷心菜土豆泥通常是爱尔兰土豆泥拌卷心菜或羽衣甘蓝和黄油。",
      "nl": "Colcannon is meestal Ierse aardappelpuree met kool of boerenkool en boter."
    },
    "cookingProfile": {
      "en": "Expect soft buttery mash with bits of greens.",
      "zh": "点餐时可预期黄油土豆泥柔软，混有绿色蔬菜。",
      "nl": "Verwacht zachte boterige puree met stukjes groen."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish",
        "side-dish"
      ],
      "description": {
        "en": "The ordering cue is soft buttery mash with bits of greens.",
        "zh": "点餐识别重点是黄油土豆泥柔软，混有绿色蔬菜。",
        "nl": "Het herkenningspunt is zachte boterige puree met stukjes groen."
      }
    },
    "composition": [
      [
        "potato",
        60,
        "starch-or-legume"
      ],
      [
        "cabbage",
        25,
        "component"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "green-onion",
        5,
        "component"
      ]
    ],
    "distinctiveFlavorSources": [
      "potato",
      "cabbage",
      "butter"
    ],
    "basicTaste": [
      "mild",
      "buttery",
      "savory"
    ],
    "textureProfile": [
      "mashed potato",
      "soft greens",
      "creamy side"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "side-dish"
    ],
    "avoidIfTags": [
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a comforting potato side; skip if you avoid dairy or want a main dish.",
      "zh": "想吃土豆泥配菜时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een comfortabele aardappelbijlage wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-036",
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/123041-colcannon.webp",
    "thumbPath": "/assets/dishes/thumb/123041-colcannon.webp"
  },
  {
    "id": "champ",
    "metadataCode": "123042",
    "imageCode": "123042",
    "cuisineId": "british-irish",
    "names": {
      "en": "Champ",
      "zh": "爱尔兰葱香土豆泥",
      "nl": "Champ",
      "local": "Champ"
    },
    "category": "side",
    "mealRole": "side",
    "portionType": "small-plate",
    "goodForSharing": true,
    "cookingMethods": [
      "boiled",
      "stirred"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Champ is Irish mashed potato with scallions, butter, and milk or cream.",
      "zh": "爱尔兰葱香土豆泥通常是爱尔兰葱香土豆泥，加黄油和奶或奶油。",
      "nl": "Champ is meestal Ierse aardappelpuree met lente-ui, boter en melk of room."
    },
    "cookingProfile": {
      "en": "Expect creamy mash with gentle green-onion aroma.",
      "zh": "点餐时可预期土豆泥顺滑，有温和葱香。",
      "nl": "Verwacht romige puree met milde lente-ui geur."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish",
        "side-dish"
      ],
      "description": {
        "en": "The ordering cue is creamy mash with gentle green-onion aroma.",
        "zh": "点餐识别重点是土豆泥顺滑，有温和葱香。",
        "nl": "Het herkenningspunt is romige puree met milde lente-ui geur."
      }
    },
    "composition": [
      [
        "potato",
        70,
        "starch-or-legume"
      ],
      [
        "green-onion",
        15,
        "component"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "cream",
        5,
        "richness"
      ]
    ],
    "distinctiveFlavorSources": [
      "green-onion",
      "butter",
      "cream"
    ],
    "basicTaste": [
      "mild",
      "buttery",
      "oniony"
    ],
    "textureProfile": [
      "mashed potato",
      "green onion flecks",
      "creamy side"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "side-dish"
    ],
    "avoidIfTags": [
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a buttery oniony potato side; skip if you need a dairy-free side.",
      "zh": "想吃黄油葱香土豆泥时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een boterige aardappelbijlage met ui wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-036",
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/123042-champ.webp",
    "thumbPath": "/assets/dishes/thumb/123042-champ.webp"
  },
  {
    "id": "boxty",
    "metadataCode": "123043",
    "imageCode": "123043",
    "cuisineId": "british-irish",
    "names": {
      "en": "Boxty",
      "zh": "爱尔兰土豆煎饼",
      "nl": "Boxty",
      "local": "Boxty"
    },
    "category": "bread",
    "mealRole": "starter-or-side",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "fried"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Boxty is an Irish potato pancake made from grated and mashed potato.",
      "zh": "爱尔兰土豆煎饼通常是爱尔兰土豆煎饼，常混合擦丝土豆和土豆泥。",
      "nl": "Boxty is meestal een Ierse aardappelpannenkoek van geraspte en gepureerde aardappel."
    },
    "cookingProfile": {
      "en": "Expect crisp-edged potato pancake with a soft middle.",
      "zh": "点餐时可预期边缘煎脆，中间柔软有土豆香。",
      "nl": "Verwacht aardappelpannenkoek met krokante rand en zachte kern."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "The ordering cue is crisp-edged potato pancake with a soft middle.",
        "zh": "点餐识别重点是边缘煎脆，中间柔软有土豆香。",
        "nl": "Het herkenningspunt is aardappelpannenkoek met krokante rand en zachte kern."
      }
    },
    "composition": [
      [
        "potato",
        55,
        "starch-or-legume"
      ],
      [
        "wheat-flour",
        20,
        "base"
      ],
      [
        "egg",
        10,
        "component"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "sea-salt",
        5,
        "distinctive-seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "potato",
      "butter",
      "sea-salt"
    ],
    "basicTaste": [
      "mild",
      "starchy",
      "buttery"
    ],
    "textureProfile": [
      "potato pancake",
      "crisp edge",
      "soft center"
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
      "sandwich-or-bread"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-allergy",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a potato pancake side or snack; skip if you avoid gluten or fried starch.",
      "zh": "想吃土豆煎饼时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een aardappelpannenkoek wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-036",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/123043-boxty.webp",
    "thumbPath": "/assets/dishes/thumb/123043-boxty.webp"
  },
  {
    "id": "irish-soda-bread",
    "metadataCode": "123044",
    "imageCode": "123044",
    "cuisineId": "british-irish",
    "names": {
      "en": "Irish Soda Bread",
      "zh": "爱尔兰苏打面包",
      "nl": "Irish Soda Bread",
      "local": "Irish Soda Bread"
    },
    "category": "bread",
    "mealRole": "starter-or-side",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "baked"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Irish Soda Bread is a dense Irish quick bread, usually served sliced with butter or soup.",
      "zh": "爱尔兰苏打面包通常是爱尔兰苏打快手面包，质地扎实，常切片配黄油或汤。",
      "nl": "Irish Soda Bread is meestal een dicht Iers sodabrood, meestal in plakken met boter of soep."
    },
    "cookingProfile": {
      "en": "Expect dense rustic bread rather than a fluffy sweet loaf.",
      "zh": "点餐时可预期是朴实扎实的面包，不是松软甜面包。",
      "nl": "Verwacht compact rustiek brood, geen luchtig zoet brood."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "The ordering cue is dense rustic bread rather than a fluffy sweet loaf.",
        "zh": "点餐识别重点是是朴实扎实的面包，不是松软甜面包。",
        "nl": "Het herkenningspunt is compact rustiek brood, geen luchtig zoet brood."
      }
    },
    "composition": [
      [
        "wheat-flour",
        70,
        "base"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "milk-solids",
        10,
        "richness"
      ],
      [
        "sea-salt",
        5,
        "distinctive-seasoning",
        "seasoning"
      ],
      [
        "sugar",
        5,
        "component"
      ]
    ],
    "distinctiveFlavorSources": [
      "butter",
      "sea-salt"
    ],
    "basicTaste": [
      "mild",
      "bready",
      "slightly tangy"
    ],
    "textureProfile": [
      "dense crumb",
      "rustic crust",
      "sliceable loaf"
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
      "en": "Choose it when you want a rustic bread side; skip if you need gluten-free bread.",
      "zh": "想吃朴实面包配汤时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een rustieke broodbijlage wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-036",
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/123044-irish-soda-bread.webp",
    "thumbPath": "/assets/dishes/thumb/123044-irish-soda-bread.webp"
  },
  {
    "id": "irish-breakfast",
    "metadataCode": "123045",
    "imageCode": "123045",
    "cuisineId": "british-irish",
    "names": {
      "en": "Irish Breakfast",
      "zh": "爱尔兰全早餐",
      "nl": "Irish Breakfast",
      "local": "Irish Breakfast"
    },
    "category": "main",
    "mealRole": "main",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "fried",
      "assembled"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Irish Breakfast is a large cooked breakfast plate with eggs, bacon, sausage, beans, toast, and often black pudding.",
      "zh": "爱尔兰全早餐通常是大份爱尔兰熟早餐盘，有鸡蛋、培根、香肠、豆子、吐司，常含黑布丁。",
      "nl": "Irish Breakfast is meestal een groot warm ontbijt met ei, spek, worst, bonen, toast en vaak black pudding."
    },
    "cookingProfile": {
      "en": "Expect a heavy salty breakfast plate with several meats.",
      "zh": "点餐时可预期分量重，咸香肉类多。",
      "nl": "Verwacht een zwaar zout ontbijtbord met meerdere vleessoorten."
    },
    "cuisineRole": {
      "level": "signature",
      "tags": [
        "signature-dish"
      ],
      "description": {
        "en": "The ordering cue is a heavy salty breakfast plate with several meats.",
        "zh": "点餐识别重点是分量重，咸香肉类多。",
        "nl": "Het herkenningspunt is een zwaar zout ontbijtbord met meerdere vleessoorten."
      }
    },
    "composition": [
      [
        "egg",
        20,
        "component"
      ],
      [
        "sausage",
        20,
        "protein"
      ],
      [
        "bacon",
        20,
        "protein"
      ],
      [
        "baked-beans",
        15,
        "component"
      ],
      [
        "black-pudding",
        15,
        "component"
      ],
      [
        "bread",
        10,
        "base"
      ]
    ],
    "distinctiveFlavorSources": [
      "bacon",
      "black-pudding",
      "baked-beans"
    ],
    "basicTaste": [
      "salty",
      "hearty",
      "fried"
    ],
    "textureProfile": [
      "large breakfast plate",
      "mixed meats",
      "beans and toast"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-egg",
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [],
    "avoidIfTags": [
      "no-pork",
      "egg-allergy",
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a very filling breakfast; skip if you avoid pork, egg, or offal.",
      "zh": "想吃非常饱腹的熟早餐时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een zeer vullend ontbijt wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-036",
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/123045-irish-breakfast.webp",
    "thumbPath": "/assets/dishes/thumb/123045-irish-breakfast.webp"
  },
  {
    "id": "kippers",
    "metadataCode": "123046",
    "imageCode": "123046",
    "cuisineId": "british-irish",
    "names": {
      "en": "Kippers",
      "zh": "烟熏鲱鱼",
      "nl": "Kippers",
      "local": "Kippers"
    },
    "category": "main",
    "mealRole": "main",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "grilled"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Kippers is split smoked herring, often served hot for breakfast.",
      "zh": "烟熏鲱鱼通常是剖开的烟熏鲱鱼，常热食作早餐。",
      "nl": "Kippers is meestal opengesneden gerookte haring, vaak warm bij ontbijt."
    },
    "cookingProfile": {
      "en": "Expect smoky oily fish with a strong aroma.",
      "zh": "点餐时可预期烟熏油脂感鱼肉，气味较明显。",
      "nl": "Verwacht rokerige vette vis met duidelijke geur."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "The ordering cue is smoky oily fish with a strong aroma.",
        "zh": "点餐识别重点是烟熏油脂感鱼肉，气味较明显。",
        "nl": "Het herkenningspunt is rokerige vette vis met duidelijke geur."
      }
    },
    "composition": [
      [
        "herring",
        70,
        "seafood"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "bread",
        10,
        "base"
      ],
      [
        "lemon",
        5,
        "fruit-or-sweetness"
      ],
      [
        "black-pepper",
        5,
        "distinctive-seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "herring",
      "butter",
      "lemon"
    ],
    "basicTaste": [
      "smoky",
      "salty",
      "fishy"
    ],
    "textureProfile": [
      "split smoked fish",
      "oily flakes",
      "breakfast plate"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-dairy",
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [],
    "avoidIfTags": [
      "fish-allergy",
      "dairy-free",
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a smoky fish breakfast; skip if you dislike strong fish aroma.",
      "zh": "想吃烟熏鱼早餐时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een rokerig visontbijt wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-036",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 3,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/123046-kippers.webp",
    "thumbPath": "/assets/dishes/thumb/123046-kippers.webp"
  },
  {
    "id": "kedgeree",
    "metadataCode": "123047",
    "imageCode": "123047",
    "cuisineId": "british-irish",
    "names": {
      "en": "Kedgeree",
      "zh": "英式咖喱熏鱼米饭",
      "nl": "Kedgeree",
      "local": "Kedgeree"
    },
    "category": "rice",
    "mealRole": "main",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "stirred",
      "simmered"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Kedgeree is a British-Indian style rice dish with smoked fish, egg, and curry spices.",
      "zh": "英式咖喱熏鱼米饭通常是英印风米饭，配烟熏鱼、鸡蛋和咖喱香料。",
      "nl": "Kedgeree is meestal een Brits-Indisch rijstgerecht met gerookte vis, ei en kerriekruiden."
    },
    "cookingProfile": {
      "en": "Expect smoked fish through warm-spiced rice.",
      "zh": "点餐时可预期烟熏鱼拌入温暖香料米饭。",
      "nl": "Verwacht gerookte vis door warm gekruide rijst."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "The ordering cue is smoked fish through warm-spiced rice.",
        "zh": "点餐识别重点是烟熏鱼拌入温暖香料米饭。",
        "nl": "Het herkenningspunt is gerookte vis door warm gekruide rijst."
      }
    },
    "composition": [
      [
        "steamed-rice",
        40,
        "starch-or-legume"
      ],
      [
        "smoked-haddock",
        25,
        "seafood"
      ],
      [
        "egg",
        15,
        "component"
      ],
      [
        "curry-masala",
        10,
        "distinctive-seasoning",
        "seasoning"
      ],
      [
        "butter",
        5,
        "richness"
      ],
      [
        "parsley",
        5,
        "distinctive-seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "smoked-haddock",
      "curry-masala",
      "egg"
    ],
    "basicTaste": [
      "smoky",
      "warm-spiced",
      "savory"
    ],
    "textureProfile": [
      "fluffy rice",
      "smoked fish flakes",
      "egg pieces"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "rice"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "egg-allergy",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Choose it when you want spiced smoked-fish rice; skip if you avoid smoked fish or egg.",
      "zh": "想吃咖喱香烟熏鱼饭时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je gekruide rijst met gerookte vis wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-036",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/123047-kedgeree.webp",
    "thumbPath": "/assets/dishes/thumb/123047-kedgeree.webp"
  },
  {
    "id": "coronation-chicken",
    "metadataCode": "123048",
    "imageCode": "123048",
    "cuisineId": "british-irish",
    "names": {
      "en": "Coronation Chicken",
      "zh": "英式咖喱鸡沙拉",
      "nl": "Coronation Chicken",
      "local": "Coronation Chicken"
    },
    "category": "salad",
    "mealRole": "starter-or-side",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "assembled",
      "chilled"
    ],
    "servingTemperature": "cold-or-cool",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Coronation Chicken is cold chicken in a creamy mild curry dressing, often with fruit or nuts.",
      "zh": "英式咖喱鸡沙拉通常是冷鸡肉拌温和咖喱奶油酱，常有果干或坚果。",
      "nl": "Coronation Chicken is meestal koude kip in romige milde kerriedressing, vaak met fruit of noten."
    },
    "cookingProfile": {
      "en": "Expect creamy curry chicken with sweet pieces.",
      "zh": "点餐时可预期奶油咖喱鸡肉带一点甜味配料。",
      "nl": "Verwacht romige kerriekip met zoete stukjes."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "The ordering cue is creamy curry chicken with sweet pieces.",
        "zh": "点餐识别重点是奶油咖喱鸡肉带一点甜味配料。",
        "nl": "Het herkenningspunt is romige kerriekip met zoete stukjes."
      }
    },
    "composition": [
      [
        "chicken",
        45,
        "protein"
      ],
      [
        "mayonnaise",
        20,
        "richness"
      ],
      [
        "curry-masala",
        10,
        "distinctive-seasoning",
        "seasoning"
      ],
      [
        "raisins",
        10,
        "fruit-or-sweetness"
      ],
      [
        "mixed-vegetables",
        10,
        "component"
      ],
      [
        "almonds",
        5,
        "component"
      ]
    ],
    "distinctiveFlavorSources": [
      "curry-masala",
      "mayonnaise",
      "raisins"
    ],
    "basicTaste": [
      "creamy",
      "sweet-savory",
      "mildly spiced"
    ],
    "textureProfile": [
      "cold chicken salad",
      "creamy sauce",
      "sweet bits"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-tree-nut"
    ],
    "dietaryFlags": [],
    "goodForTags": [],
    "avoidIfTags": [
      "egg-allergy",
      "tree-nut-allergy"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a cold creamy curry chicken salad; skip if you dislike mayonnaise or sweet-savory food.",
      "zh": "想吃冷的咖喱鸡肉沙拉时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een koude romige kerriekipsalade wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-036",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/123048-coronation-chicken.webp",
    "thumbPath": "/assets/dishes/thumb/123048-coronation-chicken.webp"
  },
  {
    "id": "gammon-steak",
    "metadataCode": "123049",
    "imageCode": "123049",
    "cuisineId": "british-irish",
    "names": {
      "en": "Gammon Steak",
      "zh": "火腿牛排配菠萝或蛋",
      "nl": "Gammon Steak",
      "local": "Gammon Steak"
    },
    "category": "main",
    "mealRole": "main",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "grilled",
      "fried"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Gammon Steak is a thick cured ham steak, often served with fried egg or pineapple.",
      "zh": "火腿牛排配菠萝或蛋通常是厚切腌火腿排，常配煎蛋或菠萝。",
      "nl": "Gammon Steak is meestal een dikke gepekelde hamsteak, vaak met gebakken ei of ananas."
    },
    "cookingProfile": {
      "en": "Expect salty ham with sweet pineapple or egg richness.",
      "zh": "点餐时可预期火腿咸香，菠萝带甜酸或煎蛋增加浓郁感。",
      "nl": "Verwacht zoute ham met zoete ananas of rijke ei."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "The ordering cue is salty ham with sweet pineapple or egg richness.",
        "zh": "点餐识别重点是火腿咸香，菠萝带甜酸或煎蛋增加浓郁感。",
        "nl": "Het herkenningspunt is zoute ham met zoete ananas of rijke ei."
      }
    },
    "composition": [
      [
        "ham",
        55,
        "protein"
      ],
      [
        "egg",
        15,
        "component"
      ],
      [
        "pineapple",
        15,
        "fruit-or-sweetness"
      ],
      [
        "fries",
        10,
        "component"
      ],
      [
        "mustard",
        5,
        "component",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "ham",
      "pineapple",
      "mustard"
    ],
    "basicTaste": [
      "salty",
      "sweet-savory",
      "meaty"
    ],
    "textureProfile": [
      "thick ham steak",
      "fried egg or pineapple",
      "pub plate"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-egg"
    ],
    "dietaryFlags": [],
    "goodForTags": [],
    "avoidIfTags": [
      "no-pork",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a salty pub-style ham steak; skip if you avoid pork or salty cured meat.",
      "zh": "想吃咸香酒馆风火腿排时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een zoute pub-hamsteak wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-037",
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/123049-gammon-steak.webp",
    "thumbPath": "/assets/dishes/thumb/123049-gammon-steak.webp"
  },
  {
    "id": "cauliflower-cheese",
    "metadataCode": "123050",
    "imageCode": "123050",
    "cuisineId": "british-irish",
    "names": {
      "en": "Cauliflower Cheese",
      "zh": "奶酪焗花椰菜",
      "nl": "Cauliflower Cheese",
      "local": "Cauliflower Cheese"
    },
    "category": "side",
    "mealRole": "side",
    "portionType": "small-plate",
    "goodForSharing": true,
    "cookingMethods": [
      "baked"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Cauliflower Cheese is cauliflower baked in a creamy cheese sauce.",
      "zh": "奶酪焗花椰菜通常是花椰菜裹奶酪白酱焗烤。",
      "nl": "Cauliflower Cheese is meestal bloemkool gebakken in romige kaassaus."
    },
    "cookingProfile": {
      "en": "Expect soft cauliflower under thick melted cheese sauce.",
      "zh": "点餐时可预期花椰菜柔软，外面是厚奶酪酱。",
      "nl": "Verwacht zachte bloemkool onder dikke gesmolten kaassaus."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish",
        "side-dish"
      ],
      "description": {
        "en": "The ordering cue is soft cauliflower under thick melted cheese sauce.",
        "zh": "点餐识别重点是花椰菜柔软，外面是厚奶酪酱。",
        "nl": "Het herkenningspunt is zachte bloemkool onder dikke gesmolten kaassaus."
      }
    },
    "composition": [
      [
        "cauliflower",
        60,
        "component"
      ],
      [
        "cheese",
        25,
        "richness"
      ],
      [
        "bechamel-sauce",
        10,
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
      "cheese",
      "bechamel-sauce",
      "black-pepper"
    ],
    "basicTaste": [
      "creamy",
      "cheesy",
      "mild"
    ],
    "textureProfile": [
      "soft cauliflower",
      "baked cheese sauce",
      "comfort side"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-gluten"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "side-dish"
    ],
    "avoidIfTags": [
      "dairy-free",
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a creamy vegetable side; skip if you avoid dairy or want a lighter vegetable.",
      "zh": "想吃奶酪蔬菜配菜时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een romige groentebijlage wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-037",
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/123050-cauliflower-cheese.webp",
    "thumbPath": "/assets/dishes/thumb/123050-cauliflower-cheese.webp"
  },
  {
    "id": "minted-peas",
    "metadataCode": "123051",
    "imageCode": "123051",
    "cuisineId": "british-irish",
    "names": {
      "en": "Minted Peas",
      "zh": "薄荷豌豆",
      "nl": "Minted Peas",
      "local": "Minted Peas"
    },
    "category": "side",
    "mealRole": "side",
    "portionType": "small-plate",
    "goodForSharing": true,
    "cookingMethods": [
      "boiled",
      "stirred"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Minted Peas is a simple British side of peas seasoned with mint and often butter.",
      "zh": "薄荷豌豆通常是英式薄荷豌豆配菜，豌豆加薄荷，常有黄油。",
      "nl": "Minted Peas is meestal een eenvoudige Britse bijlage van erwtjes met munt en vaak boter."
    },
    "cookingProfile": {
      "en": "Expect a small fresh side, not a full main dish.",
      "zh": "点餐时可预期这是清新小配菜，不是完整主菜。",
      "nl": "Verwacht een kleine frisse bijlage, geen hoofdgerecht."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish",
        "side-dish"
      ],
      "description": {
        "en": "The ordering cue is a small fresh side, not a full main dish.",
        "zh": "点餐识别重点是这是清新小配菜，不是完整主菜。",
        "nl": "Het herkenningspunt is een kleine frisse bijlage, geen hoofdgerecht."
      }
    },
    "composition": [
      [
        "peas",
        75,
        "starch-or-legume"
      ],
      [
        "mint",
        10,
        "distinctive-seasoning",
        "seasoning"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "sea-salt",
        5,
        "distinctive-seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "mint",
      "butter",
      "peas"
    ],
    "basicTaste": [
      "fresh",
      "mild",
      "buttery"
    ],
    "textureProfile": [
      "soft peas",
      "mint aroma",
      "small side"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "side-dish"
    ],
    "avoidIfTags": [
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a fresh green side dish; skip if you need a full meal.",
      "zh": "想要清爽绿色配菜时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een frisse groene bijlage wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-037",
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/123051-minted-peas.webp",
    "thumbPath": "/assets/dishes/thumb/123051-minted-peas.webp"
  },
  {
    "id": "bakewell-tart",
    "metadataCode": "123052",
    "imageCode": "123052",
    "cuisineId": "british-irish",
    "names": {
      "en": "Bakewell Tart",
      "zh": "巴克韦尔杏仁挞",
      "nl": "Bakewell Tart",
      "local": "Bakewell Tart"
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
      "en": "Bakewell Tart is an English tart with almond filling and a jam layer.",
      "zh": "巴克韦尔杏仁挞通常是英式杏仁挞，内有杏仁馅和果酱层。",
      "nl": "Bakewell Tart is meestal een Engelse taart met amandelvulling en jamlaag."
    },
    "cookingProfile": {
      "en": "Expect nutty almond cake texture inside pastry.",
      "zh": "点餐时可预期酥皮里是杏仁蛋糕感馅料和果酱。",
      "nl": "Verwacht nootachtige amandelcake in deeg."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "dessert"
      ],
      "description": {
        "en": "The ordering cue is nutty almond cake texture inside pastry.",
        "zh": "点餐识别重点是酥皮里是杏仁蛋糕感馅料和果酱。",
        "nl": "Het herkenningspunt is nootachtige amandelcake in deeg."
      }
    },
    "composition": [
      [
        "pastry-crust",
        30,
        "base"
      ],
      [
        "almonds",
        25,
        "component"
      ],
      [
        "fruit-sauce-or-caramel",
        20,
        "fruit-or-sweetness"
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
      ]
    ],
    "distinctiveFlavorSources": [
      "almonds",
      "fruit-sauce-or-caramel",
      "butter"
    ],
    "basicTaste": [
      "sweet",
      "almond",
      "jammy"
    ],
    "textureProfile": [
      "crumbly tart",
      "almond filling",
      "jam layer"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy",
      "contains-tree-nut"
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
      "dairy-free",
      "tree-nut-allergy"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a nutty jam tart; skip if you avoid almonds or sweet pastry.",
      "zh": "想吃杏仁果酱挞时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een nootachtige jamtaart wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-037",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/123052-bakewell-tart.webp",
    "thumbPath": "/assets/dishes/thumb/123052-bakewell-tart.webp"
  },
  {
    "id": "victoria-sponge",
    "metadataCode": "123053",
    "imageCode": "123053",
    "cuisineId": "british-irish",
    "names": {
      "en": "Victoria Sponge",
      "zh": "维多利亚海绵蛋糕",
      "nl": "Victoria Sponge",
      "local": "Victoria Sponge"
    },
    "category": "dessert",
    "mealRole": "dessert",
    "portionType": "individual",
    "goodForSharing": true,
    "cookingMethods": [
      "baked",
      "assembled"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Victoria Sponge is a British sponge cake layered with jam and cream or buttercream.",
      "zh": "维多利亚海绵蛋糕通常是英式海绵蛋糕，夹果酱和奶油或黄油霜。",
      "nl": "Victoria Sponge is meestal een Britse cake met jam en room of botercrème ertussen."
    },
    "cookingProfile": {
      "en": "Expect soft cake with a sweet cream-and-jam center.",
      "zh": "点餐时可预期蛋糕体柔软，中间是甜奶油和果酱。",
      "nl": "Verwacht zachte cake met zoete room en jam."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "dessert"
      ],
      "description": {
        "en": "The ordering cue is soft cake with a sweet cream-and-jam center.",
        "zh": "点餐识别重点是蛋糕体柔软，中间是甜奶油和果酱。",
        "nl": "Het herkenningspunt is zachte cake met zoete room en jam."
      }
    },
    "composition": [
      [
        "sponge-cake",
        55,
        "component"
      ],
      [
        "cream",
        20,
        "richness"
      ],
      [
        "fruit-sauce-or-caramel",
        15,
        "fruit-or-sweetness"
      ],
      [
        "sugar",
        10,
        "component"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "fruit-sauce-or-caramel",
      "vanilla"
    ],
    "basicTaste": [
      "sweet",
      "creamy",
      "jammy"
    ],
    "textureProfile": [
      "soft sponge",
      "cream layer",
      "jam filling"
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
      "en": "Choose it when you want a classic cream-and-jam cake; skip if you want a less sweet dessert.",
      "zh": "想吃奶油果酱蛋糕时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een klassieke room-jamcake wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-037",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/123053-victoria-sponge.webp",
    "thumbPath": "/assets/dishes/thumb/123053-victoria-sponge.webp"
  },
  {
    "id": "spotted-dick",
    "metadataCode": "123054",
    "imageCode": "123054",
    "cuisineId": "british-irish",
    "names": {
      "en": "Spotted Dick",
      "zh": "葡萄干蒸布丁",
      "nl": "Spotted Dick",
      "local": "Spotted Dick"
    },
    "category": "dessert",
    "mealRole": "dessert",
    "portionType": "individual",
    "goodForSharing": true,
    "cookingMethods": [
      "steamed"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Spotted Dick is a steamed British suet-style pudding with dried fruit, often served with custard.",
      "zh": "葡萄干蒸布丁通常是英式果干蒸布丁，常配蛋奶酱。",
      "nl": "Spotted Dick is meestal een gestoomde Britse pudding met gedroogd fruit, vaak met custard."
    },
    "cookingProfile": {
      "en": "Expect warm dense pudding with raisins and custard-style richness.",
      "zh": "点餐时可预期热布丁扎实，有葡萄干，适合配蛋奶酱。",
      "nl": "Verwacht warme compacte pudding met rozijnen en custardrijkheid."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "dessert"
      ],
      "description": {
        "en": "The ordering cue is warm dense pudding with raisins and custard-style richness.",
        "zh": "点餐识别重点是热布丁扎实，有葡萄干，适合配蛋奶酱。",
        "nl": "Het herkenningspunt is warme compacte pudding met rozijnen en custardrijkheid."
      }
    },
    "composition": [
      [
        "wheat-flour",
        35,
        "base"
      ],
      [
        "raisins",
        25,
        "fruit-or-sweetness"
      ],
      [
        "butter",
        15,
        "richness"
      ],
      [
        "cream",
        10,
        "richness"
      ],
      [
        "sugar",
        10,
        "component"
      ],
      [
        "nutmeg",
        5,
        "distinctive-seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "raisins",
      "cream",
      "nutmeg"
    ],
    "basicTaste": [
      "sweet",
      "warm-spiced",
      "rich"
    ],
    "textureProfile": [
      "steamed pudding",
      "dried fruit",
      "custard-friendly"
    ],
    "riskFlags": [
      "contains-gluten",
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
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a warm traditional pudding; skip if you dislike raisins or dense puddings.",
      "zh": "想吃传统热布丁时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een warme traditionele pudding wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-037",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/123054-spotted-dick.webp",
    "thumbPath": "/assets/dishes/thumb/123054-spotted-dick.webp"
  },
  {
    "id": "treacle-tart",
    "metadataCode": "123055",
    "imageCode": "123055",
    "cuisineId": "british-irish",
    "names": {
      "en": "Treacle Tart",
      "zh": "糖浆挞",
      "nl": "Treacle Tart",
      "local": "Treacle Tart"
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
      "en": "Treacle Tart is a British syrup tart with breadcrumbs and lemon in a pastry shell.",
      "zh": "糖浆挞通常是英式糖浆挞，派皮里是糖浆、面包屑和柠檬。",
      "nl": "Treacle Tart is meestal een Britse sirooptaart met broodkruim en citroen in deeg."
    },
    "cookingProfile": {
      "en": "Expect sticky syrup filling with a crisp pastry edge.",
      "zh": "点餐时可预期糖浆馅黏甜，派边酥脆。",
      "nl": "Verwacht kleverige siroopvulling met krokante deegrand."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "dessert"
      ],
      "description": {
        "en": "The ordering cue is sticky syrup filling with a crisp pastry edge.",
        "zh": "点餐识别重点是糖浆馅黏甜，派边酥脆。",
        "nl": "Het herkenningspunt is kleverige siroopvulling met krokante deegrand."
      }
    },
    "composition": [
      [
        "pastry-crust",
        35,
        "base"
      ],
      [
        "honey",
        30,
        "distinctive-seasoning"
      ],
      [
        "bread",
        20,
        "base"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "lemon",
        5,
        "fruit-or-sweetness"
      ]
    ],
    "distinctiveFlavorSources": [
      "honey",
      "lemon",
      "butter"
    ],
    "basicTaste": [
      "very sweet",
      "syrupy",
      "buttery"
    ],
    "textureProfile": [
      "sticky filling",
      "pastry shell",
      "crumb body"
    ],
    "riskFlags": [
      "contains-gluten",
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
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a very sweet sticky tart; skip if you prefer tart or light desserts.",
      "zh": "想吃黏甜糖浆挞时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een zeer zoete kleverige taart wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-037",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/123055-treacle-tart.webp",
    "thumbPath": "/assets/dishes/thumb/123055-treacle-tart.webp"
  },
  {
    "id": "banoffee-pie",
    "metadataCode": "123056",
    "imageCode": "123056",
    "cuisineId": "british-irish",
    "names": {
      "en": "Banoffee Pie",
      "zh": "香蕉太妃派",
      "nl": "Banoffee Pie",
      "local": "Banoffee Pie"
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
      "en": "Banoffee Pie is a chilled banana and toffee pie with cream.",
      "zh": "香蕉太妃派通常是冷食香蕉太妃派，配奶油。",
      "nl": "Banoffee Pie is meestal een gekoelde banaan-toffeetaart met room."
    },
    "cookingProfile": {
      "en": "Expect banana sweetness, caramel sauce, and soft cream.",
      "zh": "点餐时可预期香蕉甜味、焦糖酱和柔软奶油很明显。",
      "nl": "Verwacht bananenzoetheid, karamelsaus en zachte room."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "dessert"
      ],
      "description": {
        "en": "The ordering cue is banana sweetness, caramel sauce, and soft cream.",
        "zh": "点餐识别重点是香蕉甜味、焦糖酱和柔软奶油很明显。",
        "nl": "Het herkenningspunt is bananenzoetheid, karamelsaus en zachte room."
      }
    },
    "composition": [
      [
        "pastry-crust",
        25,
        "base"
      ],
      [
        "banana",
        25,
        "fruit-or-sweetness"
      ],
      [
        "toffee-sauce",
        25,
        "fruit-or-sweetness"
      ],
      [
        "cream",
        20,
        "richness"
      ],
      [
        "chocolate",
        5,
        "component"
      ]
    ],
    "distinctiveFlavorSources": [
      "banana",
      "toffee-sauce",
      "cream"
    ],
    "basicTaste": [
      "sweet",
      "caramel",
      "creamy"
    ],
    "textureProfile": [
      "crumb crust",
      "banana slices",
      "soft cream"
    ],
    "riskFlags": [
      "contains-gluten",
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
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a creamy banana-caramel dessert; skip if you dislike caramel or creamy pies.",
      "zh": "想吃香蕉焦糖奶油甜点时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een romig banaan-karameldessert wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-037",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/123056-banoffee-pie.webp",
    "thumbPath": "/assets/dishes/thumb/123056-banoffee-pie.webp"
  },
  {
    "id": "mince-pies",
    "metadataCode": "123057",
    "imageCode": "123057",
    "cuisineId": "british-irish",
    "names": {
      "en": "Mince Pies",
      "zh": "圣诞果干馅饼",
      "nl": "Mince Pies",
      "local": "Mince Pies"
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
      "en": "Mince Pies is small British Christmas pastries filled with spiced dried fruit.",
      "zh": "圣诞果干馅饼通常是英式圣诞小派，馅是香料果干。",
      "nl": "Mince Pies is meestal kleine Britse kerstpasteitjes met gekruid gedroogd fruit."
    },
    "cookingProfile": {
      "en": "Expect crumbly pastry and concentrated spiced fruit.",
      "zh": "点餐时可预期小派皮酥碎，果干香料味集中。",
      "nl": "Verwacht kruimelig deeg en geconcentreerd gekruid fruit."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "dessert"
      ],
      "description": {
        "en": "The ordering cue is crumbly pastry and concentrated spiced fruit.",
        "zh": "点餐识别重点是小派皮酥碎，果干香料味集中。",
        "nl": "Het herkenningspunt is kruimelig deeg en geconcentreerd gekruid fruit."
      }
    },
    "composition": [
      [
        "pastry-crust",
        40,
        "base"
      ],
      [
        "raisins",
        30,
        "fruit-or-sweetness"
      ],
      [
        "apple",
        15,
        "fruit-or-sweetness"
      ],
      [
        "cinnamon",
        10,
        "distinctive-seasoning",
        "seasoning"
      ],
      [
        "butter",
        5,
        "richness"
      ]
    ],
    "distinctiveFlavorSources": [
      "raisins",
      "cinnamon",
      "apple"
    ],
    "basicTaste": [
      "sweet",
      "spiced",
      "fruity"
    ],
    "textureProfile": [
      "small pastry",
      "mincemeat fruit filling",
      "crumbly edge"
    ],
    "riskFlags": [
      "contains-gluten",
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
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a spiced fruit pastry; skip if you dislike raisins or Christmas spices.",
      "zh": "想吃香料果干小派时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een gekruid fruitpasteitje wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-037",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/123057-mince-pies.webp",
    "thumbPath": "/assets/dishes/thumb/123057-mince-pies.webp"
  },
  {
    "id": "christmas-pudding",
    "metadataCode": "123058",
    "imageCode": "123058",
    "cuisineId": "british-irish",
    "names": {
      "en": "Christmas Pudding",
      "zh": "英式圣诞布丁",
      "nl": "Christmas Pudding",
      "local": "Christmas Pudding"
    },
    "category": "dessert",
    "mealRole": "dessert",
    "portionType": "individual",
    "goodForSharing": true,
    "cookingMethods": [
      "steamed"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Christmas Pudding is a dense British steamed Christmas dessert packed with dried fruit and spice.",
      "zh": "英式圣诞布丁通常是英式圣诞蒸布丁，果干和香料很多，质地厚重。",
      "nl": "Christmas Pudding is meestal een dichte Britse kerstpudding vol gedroogd fruit en specerij."
    },
    "cookingProfile": {
      "en": "Expect heavy steamed fruit pudding with warm spice and possible alcohol aroma.",
      "zh": "点餐时可预期蒸布丁厚重，果干和暖香料明显，可能有酒香。",
      "nl": "Verwacht zware gestoomde fruitpudding met warme specerij en mogelijk alcoholgeur."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "dessert"
      ],
      "description": {
        "en": "The ordering cue is heavy steamed fruit pudding with warm spice and possible alcohol aroma.",
        "zh": "点餐识别重点是蒸布丁厚重，果干和暖香料明显，可能有酒香。",
        "nl": "Het herkenningspunt is zware gestoomde fruitpudding met warme specerij en mogelijk alcoholgeur."
      }
    },
    "composition": [
      [
        "raisins",
        45,
        "fruit-or-sweetness"
      ],
      [
        "wheat-flour",
        20,
        "base"
      ],
      [
        "butter",
        15,
        "richness"
      ],
      [
        "egg",
        10,
        "component"
      ],
      [
        "cinnamon",
        5,
        "distinctive-seasoning",
        "seasoning"
      ],
      [
        "red-wine",
        5,
        "distinctive-seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "raisins",
      "cinnamon",
      "red-wine"
    ],
    "basicTaste": [
      "rich",
      "spiced",
      "fruity"
    ],
    "textureProfile": [
      "dense steamed pudding",
      "dried fruit",
      "boozy aroma"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy",
      "contains-alcohol"
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
      "dairy-free",
      "no-alcohol"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a rich festive pudding; skip if you dislike dense fruit cakes or alcohol notes.",
      "zh": "想吃厚重节日布丁时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een rijke feestpudding wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-037",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/123058-christmas-pudding.webp",
    "thumbPath": "/assets/dishes/thumb/123058-christmas-pudding.webp"
  },
  {
    "id": "welsh-cakes",
    "metadataCode": "123059",
    "imageCode": "123059",
    "cuisineId": "british-irish",
    "names": {
      "en": "Welsh Cakes",
      "zh": "威尔士小煎饼",
      "nl": "Welsh Cakes",
      "local": "Welsh Cakes"
    },
    "category": "dessert",
    "mealRole": "dessert",
    "portionType": "individual",
    "goodForSharing": true,
    "cookingMethods": [
      "fried"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Welsh Cakes is small Welsh griddle cakes with dried fruit and sugar.",
      "zh": "威尔士小煎饼通常是威尔士小煎饼，含果干并常撒糖。",
      "nl": "Welsh Cakes is meestal kleine Welshe bakplaatcakejes met gedroogd fruit en suiker."
    },
    "cookingProfile": {
      "en": "Expect soft buttery mini cakes cooked on a griddle.",
      "zh": "点餐时可预期小饼柔软有黄油香，用煎板做成。",
      "nl": "Verwacht zachte boterige cakejes van de bakplaat."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "dessert"
      ],
      "description": {
        "en": "The ordering cue is soft buttery mini cakes cooked on a griddle.",
        "zh": "点餐识别重点是小饼柔软有黄油香，用煎板做成。",
        "nl": "Het herkenningspunt is zachte boterige cakejes van de bakplaat."
      }
    },
    "composition": [
      [
        "wheat-flour",
        40,
        "base"
      ],
      [
        "raisins",
        25,
        "fruit-or-sweetness"
      ],
      [
        "butter",
        15,
        "richness"
      ],
      [
        "sugar",
        15,
        "component"
      ],
      [
        "cinnamon",
        5,
        "distinctive-seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "raisins",
      "butter",
      "cinnamon"
    ],
    "basicTaste": [
      "sweet",
      "buttery",
      "mild-spiced"
    ],
    "textureProfile": [
      "small griddle cake",
      "soft crumb",
      "sugar-dusted"
    ],
    "riskFlags": [
      "contains-gluten",
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
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a small buttery tea snack; skip if you dislike raisins.",
      "zh": "想吃黄油香茶点小饼时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een klein boterig theehapje wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-037",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/123059-welsh-cakes.webp",
    "thumbPath": "/assets/dishes/thumb/123059-welsh-cakes.webp"
  },
  {
    "id": "eccles-cakes",
    "metadataCode": "123060",
    "imageCode": "123060",
    "cuisineId": "british-irish",
    "names": {
      "en": "Eccles Cakes",
      "zh": "果干千层小饼",
      "nl": "Eccles Cakes",
      "local": "Eccles Cakes"
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
      "en": "Eccles Cakes is flaky British pastries filled with spiced currants or raisins.",
      "zh": "果干千层小饼通常是英式千层小酥饼，夹香料葡萄干馅。",
      "nl": "Eccles Cakes is meestal Britse bladerdeegkoekjes gevuld met gekruide krenten of rozijnen."
    },
    "cookingProfile": {
      "en": "Expect flaky pastry around sticky spiced fruit.",
      "zh": "点餐时可预期酥皮层次明显，里面是黏甜香料果干。",
      "nl": "Verwacht bladerdeeg rond kleverig gekruid fruit."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "dessert"
      ],
      "description": {
        "en": "The ordering cue is flaky pastry around sticky spiced fruit.",
        "zh": "点餐识别重点是酥皮层次明显，里面是黏甜香料果干。",
        "nl": "Het herkenningspunt is bladerdeeg rond kleverig gekruid fruit."
      }
    },
    "composition": [
      [
        "puff-pastry",
        40,
        "base"
      ],
      [
        "raisins",
        35,
        "fruit-or-sweetness"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "sugar",
        10,
        "component"
      ],
      [
        "cinnamon",
        5,
        "distinctive-seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "raisins",
      "puff-pastry",
      "cinnamon"
    ],
    "basicTaste": [
      "sweet",
      "spiced",
      "buttery"
    ],
    "textureProfile": [
      "flaky pastry",
      "sticky currant filling",
      "small round cake"
    ],
    "riskFlags": [
      "contains-gluten",
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
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a flaky raisin pastry; skip if you dislike dried fruit fillings.",
      "zh": "想吃酥皮果干小点时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een bladerdeeg-rozijnengebakje wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-037",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium",
    "imagePath": "/assets/dishes/main/123060-eccles-cakes.webp",
    "thumbPath": "/assets/dishes/thumb/123060-eccles-cakes.webp"
  },
  {
    "cuisineId": "portuguese",
    "confidenceTag": "audited-portuguese-batch-012",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 1,
    "id": "bacalhau-a-lagareiro",
    "metadataCode": "125031",
    "names": {
      "en": "Bacalhau a Lagareiro",
      "zh": "橄榄油烤盐鳕鱼",
      "nl": "Bacalhau a lagareiro",
      "local": "Bacalhau à lagareiro"
    },
    "category": "seafood",
    "cookingMethods": [
      "baked"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Roasted salt cod with smashed potatoes, garlic, black olives, and plenty of olive oil.",
      "zh": "烤盐鳕鱼配压扁土豆、蒜、黑橄榄和大量橄榄油。",
      "nl": "Geroosterde gezouten kabeljauw met geplette aardappels, knoflook, zwarte olijven en veel olijfolie."
    },
    "cookingProfile": {
      "en": "It is firmer and oilier than creamy cod bakes, with a clear cod loin texture.",
      "zh": "比奶油焗鳕鱼更结实、更油润，能吃到鳕鱼块本身的质感。",
      "nl": "Steviger en olierijker dan romige kabeljauwschotels, met duidelijke kabeljauwmootstructuur."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "seafood"
      ],
      "description": {
        "en": "A classic roasted cod order where olive oil and garlic define the plate.",
        "zh": "经典烤盐鳕鱼，橄榄油和蒜香是关键。",
        "nl": "Een klassieke geroosterde kabeljauwkeuze waarbij olijfolie en knoflook bepalend zijn."
      }
    },
    "composition": [
      [
        "salt-cod",
        45,
        "cod loin"
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
        "olives",
        5,
        "briny garnish"
      ]
    ],
    "distinctiveFlavorSources": [
      "salt-cod",
      "olive-oil",
      "garlic",
      "black olives"
    ],
    "basicTaste": [
      "salty",
      "garlicky",
      "rich"
    ],
    "textureProfile": [
      "firm cod flakes",
      "soft smashed potatoes",
      "olive-oil gloss"
    ],
    "riskFlags": [
      "contains-fish"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "classic-dish",
      "seafood"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "A strong cod choice if you prefer roasted fish and potatoes over creamy casseroles.",
      "zh": "如果更想吃烤鳕鱼和土豆，而不是奶油焗菜，这道更合适。",
      "nl": "Een sterke kabeljauwkeuze als je geroosterde vis en aardappels wilt in plaats van romige schotels."
    },
    "weightLevel": 3,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "pataniscas-de-bacalhau",
    "metadataCode": "125032",
    "imageCode": "125032",
    "cuisineId": "portuguese",
    "names": {
      "en": "Pataniscas de Bacalhau",
      "zh": "葡式鳕鱼煎饼",
      "nl": "Pataniscas de Bacalhau",
      "local": "Pataniscas de Bacalhau"
    },
    "category": "starter",
    "mealRole": "starter-or-side",
    "portionType": "small-plate",
    "goodForSharing": true,
    "cookingMethods": [
      "fried"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Pataniscas de Bacalhau is Portuguese salt-cod fritters, flatter and softer than many croquettes.",
      "zh": "葡式鳕鱼煎饼通常是葡式咸鳕鱼煎炸小饼，比很多可乐饼更扁更软。",
      "nl": "Pataniscas de Bacalhau is meestal Portugese bakkeljauwbeignets, platter en zachter dan veel kroketten."
    },
    "cookingProfile": {
      "en": "Expect salty cod in a light fried batter.",
      "zh": "点餐时可预期咸鳕鱼夹在轻薄面糊里煎炸。",
      "nl": "Verwacht zoute kabeljauw in licht gefrituurd beslag."
    },
    "cuisineRole": {
      "level": "signature",
      "tags": [
        "signature-dish"
      ],
      "description": {
        "en": "The ordering cue is salty cod in a light fried batter.",
        "zh": "点餐识别重点是咸鳕鱼夹在轻薄面糊里煎炸。",
        "nl": "Het herkenningspunt is zoute kabeljauw in licht gefrituurd beslag."
      }
    },
    "composition": [
      [
        "salt-cod",
        45,
        "seafood"
      ],
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "egg",
        15,
        "component"
      ],
      [
        "onion",
        10,
        "component"
      ],
      [
        "parsley",
        5,
        "distinctive-seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "salt-cod",
      "parsley",
      "onion"
    ],
    "basicTaste": [
      "salty",
      "fishy-savory",
      "fried"
    ],
    "textureProfile": [
      "flat fritters",
      "soft cod pieces",
      "crisp edge"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-gluten",
      "contains-egg"
    ],
    "dietaryFlags": [],
    "goodForTags": [],
    "avoidIfTags": [
      "fish-allergy",
      "gluten-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a salty cod fritter; skip if you avoid fish or fried batter.",
      "zh": "想吃咸鳕鱼炸小饼时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een zoute kabeljauwbeignet wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-037",
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/125032-pataniscas-de-bacalhau.webp",
    "thumbPath": "/assets/dishes/thumb/125032-pataniscas-de-bacalhau.webp"
  },
  {
    "id": "acorda-alentejana",
    "metadataCode": "125033",
    "imageCode": "125033",
    "cuisineId": "portuguese",
    "names": {
      "en": "Acorda Alentejana",
      "zh": "阿连特茹面包蒜汤",
      "nl": "Acorda Alentejana",
      "local": "Acorda Alentejana"
    },
    "category": "soup",
    "mealRole": "main",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "assembled",
      "simmered"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Acorda Alentejana is an Alentejo bread soup with garlic, olive oil, herbs, and poached egg.",
      "zh": "阿连特茹面包蒜汤通常是阿连特茹面包汤，有蒜、橄榄油、香草和水波蛋。",
      "nl": "Acorda Alentejana is meestal een Alentejo-broodsoep met knoflook, olijfolie, kruiden en gepocheerd ei."
    },
    "cookingProfile": {
      "en": "Expect soft bread soaked in garlicky broth with egg.",
      "zh": "点餐时可预期面包泡软在蒜香汤里，配鸡蛋。",
      "nl": "Verwacht zacht brood in knoflookbouillon met ei."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "The ordering cue is soft bread soaked in garlicky broth with egg.",
        "zh": "点餐识别重点是面包泡软在蒜香汤里，配鸡蛋。",
        "nl": "Het herkenningspunt is zacht brood in knoflookbouillon met ei."
      }
    },
    "composition": [
      [
        "bread",
        45,
        "base"
      ],
      [
        "broth",
        25,
        "component"
      ],
      [
        "egg",
        15,
        "component"
      ],
      [
        "garlic",
        10,
        "distinctive-seasoning"
      ],
      [
        "olive-oil",
        5,
        "component"
      ]
    ],
    "distinctiveFlavorSources": [
      "garlic",
      "olive-oil",
      "egg"
    ],
    "basicTaste": [
      "garlicky",
      "brothy",
      "rustic"
    ],
    "textureProfile": [
      "soaked bread",
      "poached egg",
      "olive oil broth"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "soup"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a rustic garlic bread soup; skip if you dislike soggy bread texture.",
      "zh": "想吃乡土蒜香面包汤时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een rustieke knoflook-broodsoep wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-037",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/125033-acorda-alentejana.webp",
    "thumbPath": "/assets/dishes/thumb/125033-acorda-alentejana.webp"
  },
  {
    "id": "arroz-de-polvo",
    "metadataCode": "125034",
    "imageCode": "125034",
    "cuisineId": "portuguese",
    "names": {
      "en": "Arroz de Polvo",
      "zh": "葡式章鱼饭",
      "nl": "Arroz de Polvo",
      "local": "Arroz de Polvo"
    },
    "category": "rice",
    "mealRole": "main",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "simmered"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Arroz de Polvo is Portuguese octopus rice, usually moist and tomato-leaning.",
      "zh": "葡式章鱼饭通常是葡式章鱼饭，通常比较湿润，带番茄味。",
      "nl": "Arroz de Polvo is meestal Portugese octopusrijst, meestal smeuig en tomaatgericht."
    },
    "cookingProfile": {
      "en": "Expect tender octopus pieces in saucy rice.",
      "zh": "点餐时可预期章鱼块柔软，米饭带酱汁。",
      "nl": "Verwacht malse octopusstukjes in smeuige rijst."
    },
    "cuisineRole": {
      "level": "signature",
      "tags": [
        "signature-dish"
      ],
      "description": {
        "en": "The ordering cue is tender octopus pieces in saucy rice.",
        "zh": "点餐识别重点是章鱼块柔软，米饭带酱汁。",
        "nl": "Het herkenningspunt is malse octopusstukjes in smeuige rijst."
      }
    },
    "composition": [
      [
        "octopus",
        40,
        "seafood"
      ],
      [
        "steamed-rice",
        35,
        "starch-or-legume"
      ],
      [
        "tomato-sauce",
        10,
        "component"
      ],
      [
        "onion",
        10,
        "component"
      ],
      [
        "olive-oil",
        5,
        "component"
      ]
    ],
    "distinctiveFlavorSources": [
      "octopus",
      "tomato-sauce",
      "olive-oil"
    ],
    "basicTaste": [
      "seafood-savory",
      "tomato-bright",
      "mild"
    ],
    "textureProfile": [
      "moist rice",
      "tender octopus",
      "saucy grains"
    ],
    "riskFlags": [
      "contains-shellfish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "rice"
    ],
    "avoidIfTags": [
      "shellfish-allergy"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a moist octopus rice dish; skip if you dislike octopus or saucy rice.",
      "zh": "想吃湿润章鱼饭时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een smeuig octopusrijstgerecht wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-037",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 3,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/125034-arroz-de-polvo.webp",
    "thumbPath": "/assets/dishes/thumb/125034-arroz-de-polvo.webp"
  },
  {
    "id": "polvo-guisado",
    "metadataCode": "125035",
    "imageCode": "125035",
    "cuisineId": "portuguese",
    "names": {
      "en": "Polvo Guisado",
      "zh": "葡式炖章鱼",
      "nl": "Polvo Guisado",
      "local": "Polvo Guisado"
    },
    "category": "seafood",
    "mealRole": "main",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "braised"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Polvo Guisado is Portuguese stewed octopus in a tomato and wine style sauce.",
      "zh": "葡式炖章鱼通常是葡式炖章鱼，酱汁常有番茄和葡萄酒风味。",
      "nl": "Polvo Guisado is meestal Portugese gestoofde octopus in tomaat-wijnsaus."
    },
    "cookingProfile": {
      "en": "Expect tender octopus in a deep red sauce.",
      "zh": "点餐时可预期章鱼炖到柔软，酱汁颜色深红。",
      "nl": "Verwacht malse octopus in diepe rode saus."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "The ordering cue is tender octopus in a deep red sauce.",
        "zh": "点餐识别重点是章鱼炖到柔软，酱汁颜色深红。",
        "nl": "Het herkenningspunt is malse octopus in diepe rode saus."
      }
    },
    "composition": [
      [
        "octopus",
        55,
        "seafood"
      ],
      [
        "potato",
        20,
        "starch-or-legume"
      ],
      [
        "tomato-sauce",
        10,
        "component"
      ],
      [
        "red-wine",
        10,
        "distinctive-seasoning",
        "seasoning"
      ],
      [
        "olive-oil",
        5,
        "component"
      ]
    ],
    "distinctiveFlavorSources": [
      "octopus",
      "red-wine",
      "tomato-sauce"
    ],
    "basicTaste": [
      "savory",
      "briny",
      "winey"
    ],
    "textureProfile": [
      "braised octopus",
      "soft potatoes",
      "red sauce"
    ],
    "riskFlags": [
      "contains-shellfish",
      "contains-alcohol"
    ],
    "dietaryFlags": [],
    "goodForTags": [],
    "avoidIfTags": [
      "shellfish-allergy",
      "no-alcohol"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a saucy octopus stew; skip if you avoid alcohol notes or octopus.",
      "zh": "想吃有酱汁的炖章鱼时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een sauzige octopusstoof wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-037",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 3,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/125035-polvo-guisado.webp",
    "thumbPath": "/assets/dishes/thumb/125035-polvo-guisado.webp"
  },
  {
    "cuisineId": "portuguese",
    "confidenceTag": "audited-portuguese-batch-012",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 2,
    "id": "carne-de-porco-a-alentejana",
    "metadataCode": "125036",
    "names": {
      "en": "Carne de Porco a Alentejana",
      "zh": "阿连特茹猪肉蛤蜊",
      "nl": "Carne de porco a Alentejana",
      "local": "Carne de porco à Alentejana"
    },
    "category": "pork",
    "cookingMethods": [
      "fried",
      "simmered"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Portuguese pork cubes with clams, fried potatoes, pickles, garlic, and paprika-rich sauce.",
      "zh": "葡式猪肉块配蛤蜊、炸土豆、腌菜、蒜和红椒香汁。",
      "nl": "Portugese varkensblokjes met venusschelpen, gebakken aardappels, pickles, knoflook en paprikasaus."
    },
    "cookingProfile": {
      "en": "It combines meaty pork with briny clams, so the flavor is richer than a simple pork plate.",
      "zh": "它把猪肉香和蛤蜊鲜味结合，比普通猪肉盘更有层次。",
      "nl": "Combineert vlezig varkensvlees met zilte schelpen, rijker dan een simpel varkensbord."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "regional-dish",
        "classic-dish"
      ],
      "description": {
        "en": "A signature Alentejo-style pork-and-clam dish with a distinctive surf-and-turf profile.",
        "zh": "阿连特茹代表性猪肉蛤蜊菜，海陆组合很有辨识度。",
        "nl": "Een kenmerkend gerecht uit Alentejo met varkensvlees en schelpen, uitgesproken surf-and-turf."
      }
    },
    "composition": [
      [
        "pork",
        40,
        "pork cubes"
      ],
      [
        "clams",
        25,
        "shellfish"
      ],
      [
        "potato",
        20,
        "fried potato cubes"
      ],
      [
        "pickles",
        5,
        "tangy garnish"
      ],
      [
        "garlic",
        5,
        "aroma",
        "seasoning"
      ],
      [
        "paprika",
        5,
        "warm spice",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork juices",
      "clams",
      "garlic",
      "paprika",
      "pickles"
    ],
    "basicTaste": [
      "savory",
      "briny",
      "garlicky"
    ],
    "textureProfile": [
      "tender pork cubes",
      "open clams",
      "fried potatoes"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-shellfish",
      "contains-alcohol"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "regional-dish",
      "comfort-food"
    ],
    "avoidIfTags": [
      "no-pork",
      "shellfish-allergy",
      "no-alcohol"
    ],
    "orderVerdict": {
      "en": "Choose it if pork with clams sounds exciting; avoid if shellfish with meat feels odd to you.",
      "zh": "喜欢猪肉和蛤蜊的海陆组合可以点；如果不接受肉配贝类就要避开。",
      "nl": "Kies dit als varkensvlees met schelpen je aanspreekt; vermijden als die combinatie vreemd voelt."
    },
    "weightLevel": 4,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "rojoes",
    "metadataCode": "125037",
    "imageCode": "125037",
    "cuisineId": "portuguese",
    "names": {
      "en": "Rojoes",
      "zh": "葡式炸炖猪肉块",
      "nl": "Rojoes",
      "local": "Rojoes"
    },
    "category": "main",
    "mealRole": "main",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "fried",
      "braised"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Rojoes is Portuguese pork chunks marinated and cooked with garlic, wine, and paprika.",
      "zh": "葡式炸炖猪肉块通常是葡式猪肉块，用蒜、葡萄酒和红椒粉腌煮。",
      "nl": "Rojoes is meestal Portugese varkensblokjes met knoflook, wijn en paprika."
    },
    "cookingProfile": {
      "en": "Expect browned pork pieces with garlicky wine seasoning.",
      "zh": "点餐时可预期猪肉块煎炖出焦香，蒜和酒香明显。",
      "nl": "Verwacht gebruinde varkensstukjes met knoflook-wijnkruiding."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "The ordering cue is browned pork pieces with garlicky wine seasoning.",
        "zh": "点餐识别重点是猪肉块煎炖出焦香，蒜和酒香明显。",
        "nl": "Het herkenningspunt is gebruinde varkensstukjes met knoflook-wijnkruiding."
      }
    },
    "composition": [
      [
        "pork",
        60,
        "protein"
      ],
      [
        "potato",
        20,
        "starch-or-legume"
      ],
      [
        "red-wine",
        10,
        "distinctive-seasoning",
        "seasoning"
      ],
      [
        "garlic",
        5,
        "distinctive-seasoning",
        "seasoning"
      ],
      [
        "paprika",
        5,
        "distinctive-seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork",
      "garlic",
      "paprika"
    ],
    "basicTaste": [
      "savory",
      "garlicky",
      "rich"
    ],
    "textureProfile": [
      "pork chunks",
      "browned edges",
      "wine-garlic sauce"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-alcohol"
    ],
    "dietaryFlags": [],
    "goodForTags": [],
    "avoidIfTags": [
      "no-pork",
      "no-alcohol"
    ],
    "orderVerdict": {
      "en": "Choose it when you want garlicky Portuguese pork; skip if you avoid pork or alcohol-based marinades.",
      "zh": "想吃蒜香葡式猪肉块时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je Portugees varkensvlees met knoflook wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-037",
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/125037-rojoes.webp",
    "thumbPath": "/assets/dishes/thumb/125037-rojoes.webp"
  },
  {
    "id": "febras",
    "metadataCode": "125038",
    "imageCode": "125038",
    "cuisineId": "portuguese",
    "names": {
      "en": "Febras",
      "zh": "葡式猪排",
      "nl": "Febras",
      "local": "Febras"
    },
    "category": "main",
    "mealRole": "main",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "grilled",
      "fried"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Febras is Portuguese thin pork steaks, usually grilled or pan-fried with garlic.",
      "zh": "葡式猪排通常是葡式薄猪排，通常用蒜香煎或烤。",
      "nl": "Febras is meestal Portugese dunne varkenslapjes, meestal gegrild of gebakken met knoflook."
    },
    "cookingProfile": {
      "en": "Expect simple pork cutlets with garlic and a firm bite.",
      "zh": "点餐时可预期简单猪排有蒜香，口感比炖肉更紧实。",
      "nl": "Verwacht simpele varkenslapjes met knoflook en stevige beet."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "The ordering cue is simple pork cutlets with garlic and a firm bite.",
        "zh": "点餐识别重点是简单猪排有蒜香，口感比炖肉更紧实。",
        "nl": "Het herkenningspunt is simpele varkenslapjes met knoflook en stevige beet."
      }
    },
    "composition": [
      [
        "pork-cutlet",
        65,
        "protein"
      ],
      [
        "fries",
        20,
        "component"
      ],
      [
        "garlic",
        5,
        "distinctive-seasoning",
        "seasoning"
      ],
      [
        "olive-oil",
        5,
        "component"
      ],
      [
        "lemon",
        5,
        "fruit-or-sweetness"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork-cutlet",
      "garlic",
      "lemon"
    ],
    "basicTaste": [
      "savory",
      "garlicky",
      "simple"
    ],
    "textureProfile": [
      "thin pork steaks",
      "grilled or pan-fried",
      "plain plate"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a straightforward pork plate; skip if you want a saucy stew.",
      "zh": "想吃简单猪排时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een eenvoudig varkensgerecht wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-037",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/125038-febras.webp",
    "thumbPath": "/assets/dishes/thumb/125038-febras.webp"
  },
  {
    "id": "entrecosto",
    "metadataCode": "125039",
    "imageCode": "125039",
    "cuisineId": "portuguese",
    "names": {
      "en": "Entrecosto",
      "zh": "葡式猪肋排",
      "nl": "Entrecosto",
      "local": "Entrecosto"
    },
    "category": "main",
    "mealRole": "main",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "grilled",
      "braised"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Entrecosto is Portuguese pork ribs or rib-style cuts, often garlicky and richly seasoned.",
      "zh": "葡式猪肋排通常是葡式猪肋排或肋肉，常有蒜香和浓重调味。",
      "nl": "Entrecosto is meestal Portugese spareribs of ribstuk, vaak knoflookrijk en stevig gekruid."
    },
    "cookingProfile": {
      "en": "Expect fatty pork with browned edges and paprika-garlic seasoning.",
      "zh": "点餐时可预期猪肉脂香明显，边缘焦香，带红椒蒜味。",
      "nl": "Verwacht vetter varkensvlees met gebruinde rand en paprika-knoflook."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "The ordering cue is fatty pork with browned edges and paprika-garlic seasoning.",
        "zh": "点餐识别重点是猪肉脂香明显，边缘焦香，带红椒蒜味。",
        "nl": "Het herkenningspunt is vetter varkensvlees met gebruinde rand en paprika-knoflook."
      }
    },
    "composition": [
      [
        "pork-belly",
        60,
        "protein"
      ],
      [
        "potato",
        20,
        "starch-or-legume"
      ],
      [
        "paprika",
        10,
        "distinctive-seasoning",
        "seasoning"
      ],
      [
        "garlic",
        5,
        "distinctive-seasoning",
        "seasoning"
      ],
      [
        "red-wine",
        5,
        "distinctive-seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork-belly",
      "garlic",
      "paprika"
    ],
    "basicTaste": [
      "savory",
      "fatty",
      "garlicky"
    ],
    "textureProfile": [
      "pork ribs or belly",
      "browned meat",
      "hearty portion"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-alcohol"
    ],
    "dietaryFlags": [],
    "goodForTags": [],
    "avoidIfTags": [
      "no-pork",
      "no-alcohol"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a rich pork rib plate; skip if you avoid fatty pork.",
      "zh": "想吃浓郁猪肋肉时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een rijk varkensribgerecht wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-037",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/125039-entrecosto.webp",
    "thumbPath": "/assets/dishes/thumb/125039-entrecosto.webp"
  },
  {
    "id": "bifinhos-com-cogumelos",
    "metadataCode": "125040",
    "imageCode": "125040",
    "cuisineId": "portuguese",
    "names": {
      "en": "Bifinhos com Cogumelos",
      "zh": "蘑菇酱小牛排",
      "nl": "Bifinhos com Cogumelos",
      "local": "Bifinhos com Cogumelos"
    },
    "category": "main",
    "mealRole": "main",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "fried",
      "simmered"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Bifinhos com Cogumelos is Portuguese-style thin steaks served with mushroom cream sauce.",
      "zh": "蘑菇酱小牛排通常是葡式小牛肉片配蘑菇奶油酱。",
      "nl": "Bifinhos com Cogumelos is meestal Portugese dunne biefstukjes met champignonroomsaus."
    },
    "cookingProfile": {
      "en": "Expect tender meat in a creamy mushroom sauce.",
      "zh": "点餐时可预期肉片柔软，蘑菇奶油酱浓厚。",
      "nl": "Verwacht mals vlees in romige champignonsaus."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "The ordering cue is tender meat in a creamy mushroom sauce.",
        "zh": "点餐识别重点是肉片柔软，蘑菇奶油酱浓厚。",
        "nl": "Het herkenningspunt is mals vlees in romige champignonsaus."
      }
    },
    "composition": [
      [
        "veal-cutlet",
        55,
        "protein"
      ],
      [
        "mushrooms",
        20,
        "component"
      ],
      [
        "cream",
        15,
        "richness"
      ],
      [
        "garlic",
        5,
        "distinctive-seasoning"
      ],
      [
        "black-pepper",
        5,
        "distinctive-seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "mushrooms",
      "cream",
      "black-pepper"
    ],
    "basicTaste": [
      "creamy",
      "savory",
      "mushroomy"
    ],
    "textureProfile": [
      "thin meat slices",
      "mushroom sauce",
      "tender bite"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [],
    "avoidIfTags": [
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a creamy mushroom steak dish; skip if you avoid dairy or mushrooms.",
      "zh": "想吃蘑菇奶油小牛排时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een romig champignon-biefstukgerecht wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-037",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/125040-bifinhos-com-cogumelos.webp",
    "thumbPath": "/assets/dishes/thumb/125040-bifinhos-com-cogumelos.webp"
  },
  {
    "id": "sopa-da-pedra",
    "metadataCode": "125041",
    "imageCode": "125041",
    "cuisineId": "portuguese",
    "names": {
      "en": "Sopa da Pedra",
      "zh": "葡式豆肉浓汤",
      "nl": "Sopa da Pedra",
      "local": "Sopa da Pedra"
    },
    "category": "soup",
    "mealRole": "main",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "simmered"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Sopa da Pedra is a Portuguese bean and pork soup from Almeirim tradition.",
      "zh": "葡式豆肉浓汤通常是葡式豆肉浓汤，传统上与阿尔梅林相关。",
      "nl": "Sopa da Pedra is meestal een Portugese bonen-varkenssoep uit de traditie van Almeirim."
    },
    "cookingProfile": {
      "en": "Expect thick beans with pork and smoky sausage.",
      "zh": "点餐时可预期豆汤浓稠，有猪肉和烟熏香肠。",
      "nl": "Verwacht dikke bonen met varkensvlees en rokerige worst."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish"
      ],
      "description": {
        "en": "The ordering cue is thick beans with pork and smoky sausage.",
        "zh": "点餐识别重点是豆汤浓稠，有猪肉和烟熏香肠。",
        "nl": "Het herkenningspunt is dikke bonen met varkensvlees en rokerige worst."
      }
    },
    "composition": [
      [
        "red-kidney-beans",
        40,
        "starch-or-legume"
      ],
      [
        "pork",
        25,
        "protein"
      ],
      [
        "chourico",
        15,
        "protein"
      ],
      [
        "potato",
        15,
        "starch-or-legume"
      ],
      [
        "broth",
        5,
        "component"
      ]
    ],
    "distinctiveFlavorSources": [
      "red-kidney-beans",
      "chourico",
      "pork"
    ],
    "basicTaste": [
      "hearty",
      "smoky",
      "savory"
    ],
    "textureProfile": [
      "thick bean soup",
      "pork pieces",
      "sausage"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "soup"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a hearty bean-pork soup; skip if you avoid pork or heavy soups.",
      "zh": "想喝厚重豆肉汤时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een stevige bonen-varkenssoep wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-037",
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/125041-sopa-da-pedra.webp",
    "thumbPath": "/assets/dishes/thumb/125041-sopa-da-pedra.webp"
  },
  {
    "id": "canja-de-galinha",
    "metadataCode": "125042",
    "imageCode": "125042",
    "cuisineId": "portuguese",
    "names": {
      "en": "Canja de Galinha",
      "zh": "葡式鸡汤米粥",
      "nl": "Canja de Galinha",
      "local": "Canja de Galinha"
    },
    "category": "soup",
    "mealRole": "main",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "simmered"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Canja de Galinha is Portuguese chicken and rice soup, mild and often comforting.",
      "zh": "葡式鸡汤米粥通常是葡式鸡肉米汤，味道温和，偏家常安慰感。",
      "nl": "Canja de Galinha is meestal Portugese kip-rijstsoep, mild en troostrijk."
    },
    "cookingProfile": {
      "en": "Expect gentle chicken broth with soft rice.",
      "zh": "点餐时可预期鸡汤温和，米粒煮软。",
      "nl": "Verwacht milde kippenbouillon met zachte rijst."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "The ordering cue is gentle chicken broth with soft rice.",
        "zh": "点餐识别重点是鸡汤温和，米粒煮软。",
        "nl": "Het herkenningspunt is milde kippenbouillon met zachte rijst."
      }
    },
    "composition": [
      [
        "chicken",
        35,
        "protein"
      ],
      [
        "short-grain-rice",
        25,
        "starch-or-legume"
      ],
      [
        "broth",
        30,
        "component"
      ],
      [
        "mint",
        5,
        "distinctive-seasoning",
        "seasoning"
      ],
      [
        "lemon",
        5,
        "fruit-or-sweetness"
      ]
    ],
    "distinctiveFlavorSources": [
      "chicken",
      "broth",
      "mint"
    ],
    "basicTaste": [
      "mild",
      "brothy",
      "comforting"
    ],
    "textureProfile": [
      "rice soup",
      "soft chicken",
      "gentle broth"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "soup",
      "first-timer-friendly"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Choose it when you want a mild chicken rice soup; skip if you want strong spice or a heavy main.",
      "zh": "想喝温和鸡肉米汤时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een milde kip-rijstsoep wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-037",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/125042-canja-de-galinha.webp",
    "thumbPath": "/assets/dishes/thumb/125042-canja-de-galinha.webp"
  },
  {
    "id": "feijoada-a-transmontana",
    "metadataCode": "125043",
    "imageCode": "125043",
    "cuisineId": "portuguese",
    "names": {
      "en": "Feijoada a Transmontana",
      "zh": "葡北豆肉炖锅",
      "nl": "Feijoada a Transmontana",
      "local": "Feijoada a Transmontana"
    },
    "category": "main",
    "mealRole": "main",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "simmered"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Feijoada a Transmontana is a northern Portuguese bean stew with several pork cuts and sausage.",
      "zh": "葡北豆肉炖锅通常是葡萄牙北部豆肉炖锅，含多种猪肉和香肠。",
      "nl": "Feijoada a Transmontana is meestal een Noord-Portugese bonenstoof met verschillende varkensdelen en worst."
    },
    "cookingProfile": {
      "en": "Expect thick beans with smoky pork and sausage.",
      "zh": "点餐时可预期豆子厚实，猪肉和香肠有烟熏咸香。",
      "nl": "Verwacht dikke bonen met rokerig varkensvlees en worst."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish"
      ],
      "description": {
        "en": "The ordering cue is thick beans with smoky pork and sausage.",
        "zh": "点餐识别重点是豆子厚实，猪肉和香肠有烟熏咸香。",
        "nl": "Het herkenningspunt is dikke bonen met rokerig varkensvlees en worst."
      }
    },
    "composition": [
      [
        "white-beans",
        35,
        "starch-or-legume"
      ],
      [
        "pork",
        30,
        "protein"
      ],
      [
        "chourico",
        15,
        "protein"
      ],
      [
        "cabbage",
        10,
        "component"
      ],
      [
        "mixed-vegetables",
        5,
        "component"
      ],
      [
        "black-pepper",
        5,
        "distinctive-seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "white-beans",
      "chourico",
      "pork"
    ],
    "basicTaste": [
      "hearty",
      "smoky",
      "savory"
    ],
    "textureProfile": [
      "bean stew",
      "mixed pork cuts",
      "cabbage"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a heavy bean-and-pork stew; skip if you avoid pork or very filling stews.",
      "zh": "想吃厚重豆肉炖锅时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een zware bonen-varkensstoof wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-037",
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/125043-feijoada-a-transmontana.webp",
    "thumbPath": "/assets/dishes/thumb/125043-feijoada-a-transmontana.webp"
  },
  {
    "id": "chanfana",
    "metadataCode": "125044",
    "imageCode": "125044",
    "cuisineId": "portuguese",
    "names": {
      "en": "Chanfana",
      "zh": "红酒炖山羊肉",
      "nl": "Chanfana",
      "local": "Chanfana"
    },
    "category": "main",
    "mealRole": "main",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "braised"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Chanfana is Portuguese goat or old-mutton style braise in red wine and garlic.",
      "zh": "红酒炖山羊肉通常是葡式红酒蒜香山羊肉或浓味羊肉炖菜。",
      "nl": "Chanfana is meestal Portugese geiten- of schapenvleesstoof met rode wijn en knoflook."
    },
    "cookingProfile": {
      "en": "Expect dark wine-braised meat with a stronger gamey character.",
      "zh": "点餐时可预期深色红酒炖肉，肉味比普通羊肉更有野味感。",
      "nl": "Verwacht donker wijn gestoofd vlees met sterkere wildachtige smaak."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish"
      ],
      "description": {
        "en": "The ordering cue is dark wine-braised meat with a stronger gamey character.",
        "zh": "点餐识别重点是深色红酒炖肉，肉味比普通羊肉更有野味感。",
        "nl": "Het herkenningspunt is donker wijn gestoofd vlees met sterkere wildachtige smaak."
      }
    },
    "composition": [
      [
        "lamb",
        60,
        "protein"
      ],
      [
        "red-wine",
        20,
        "distinctive-seasoning",
        "seasoning"
      ],
      [
        "garlic",
        10,
        "distinctive-seasoning",
        "seasoning"
      ],
      [
        "rosemary",
        5,
        "distinctive-seasoning",
        "seasoning"
      ],
      [
        "olive-oil",
        5,
        "component"
      ]
    ],
    "distinctiveFlavorSources": [
      "red-wine",
      "garlic",
      "lamb"
    ],
    "basicTaste": [
      "winey",
      "gamey",
      "savory"
    ],
    "textureProfile": [
      "dark braise",
      "tender goat-style meat",
      "deep sauce"
    ],
    "riskFlags": [
      "contains-alcohol"
    ],
    "dietaryFlags": [],
    "goodForTags": [],
    "avoidIfTags": [
      "no-alcohol"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a deep red-wine goat-style stew; skip if you dislike gamey meat or wine sauce.",
      "zh": "想吃红酒深炖山羊风味肉时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een diepe rodewijn-geitenstoof wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-037",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/125044-chanfana.webp",
    "thumbPath": "/assets/dishes/thumb/125044-chanfana.webp"
  },
  {
    "id": "cabrito-assado",
    "metadataCode": "125045",
    "imageCode": "125045",
    "cuisineId": "portuguese",
    "names": {
      "en": "Cabrito Assado",
      "zh": "烤小山羊",
      "nl": "Cabrito Assado",
      "local": "Cabrito Assado"
    },
    "category": "main",
    "mealRole": "main",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "baked",
      "grilled"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Cabrito Assado is Portuguese roast kid or young goat, usually served with potatoes.",
      "zh": "烤小山羊通常是葡式烤小山羊，通常配土豆。",
      "nl": "Cabrito Assado is meestal Portugees geroosterd jong geitje, meestal met aardappelen."
    },
    "cookingProfile": {
      "en": "Expect roasted tender goat-style meat with herb and garlic aroma.",
      "zh": "点餐时可预期烤肉较嫩，有香草和蒜香。",
      "nl": "Verwacht mals geroosterd geitachtig vlees met kruid- en knoflookgeur."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "The ordering cue is roasted tender goat-style meat with herb and garlic aroma.",
        "zh": "点餐识别重点是烤肉较嫩，有香草和蒜香。",
        "nl": "Het herkenningspunt is mals geroosterd geitachtig vlees met kruid- en knoflookgeur."
      }
    },
    "composition": [
      [
        "lamb",
        60,
        "protein"
      ],
      [
        "potato",
        25,
        "starch-or-legume"
      ],
      [
        "rosemary",
        5,
        "distinctive-seasoning",
        "seasoning"
      ],
      [
        "garlic",
        5,
        "distinctive-seasoning",
        "seasoning"
      ],
      [
        "olive-oil",
        5,
        "component"
      ]
    ],
    "distinctiveFlavorSources": [
      "lamb",
      "garlic",
      "rosemary"
    ],
    "basicTaste": [
      "savory",
      "herbal",
      "roasted"
    ],
    "textureProfile": [
      "roasted young goat-style meat",
      "potato side",
      "herb aroma"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "first-timer-friendly"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Choose it when you want a Portuguese roast meat plate; skip if you dislike lamb or goat-like flavor.",
      "zh": "想吃葡式烤肉配土豆时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een Portugees gebraad met aardappel wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-037",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/125045-cabrito-assado.webp",
    "thumbPath": "/assets/dishes/thumb/125045-cabrito-assado.webp"
  },
  {
    "id": "arroz-de-tamboril",
    "metadataCode": "125046",
    "imageCode": "125046",
    "cuisineId": "portuguese",
    "names": {
      "en": "Arroz de Tamboril",
      "zh": "安康鱼米饭",
      "nl": "Arroz de Tamboril",
      "local": "Arroz de Tamboril"
    },
    "category": "rice",
    "mealRole": "main",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "simmered"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Arroz de Tamboril is Portuguese monkfish-style rice, usually wet and saucy rather than dry.",
      "zh": "安康鱼米饭通常是葡式安康鱼米饭，通常湿润多汁，不是干炒饭。",
      "nl": "Arroz de Tamboril is meestal Portugese zeeduivelrijst, meestal nat en sauzig in plaats van droog."
    },
    "cookingProfile": {
      "en": "Expect brothy tomato rice with firm fish pieces.",
      "zh": "点餐时可预期番茄汤汁米饭配紧实鱼块。",
      "nl": "Verwacht bouillonachtige tomatenrijst met stevige vis."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "The ordering cue is brothy tomato rice with firm fish pieces.",
        "zh": "点餐识别重点是番茄汤汁米饭配紧实鱼块。",
        "nl": "Het herkenningspunt is bouillonachtige tomatenrijst met stevige vis."
      }
    },
    "composition": [
      [
        "fish-fillet",
        35,
        "seafood"
      ],
      [
        "steamed-rice",
        35,
        "starch-or-legume"
      ],
      [
        "shrimp",
        10,
        "seafood"
      ],
      [
        "tomato-sauce",
        10,
        "component"
      ],
      [
        "coriander",
        5,
        "distinctive-seasoning",
        "seasoning"
      ],
      [
        "olive-oil",
        5,
        "component"
      ]
    ],
    "distinctiveFlavorSources": [
      "fish-fillet",
      "tomato-sauce",
      "coriander"
    ],
    "basicTaste": [
      "seafood-savory",
      "tomato-bright",
      "brothy"
    ],
    "textureProfile": [
      "wet rice",
      "firm fish",
      "saucy bowl"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-shellfish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "rice"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "shellfish-allergy"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a wet seafood rice; skip if you prefer dry rice or avoid fish.",
      "zh": "想吃湿润鱼肉米饭时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een nat zeevruchtenrijstgerecht wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-037",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/125046-arroz-de-tamboril.webp",
    "thumbPath": "/assets/dishes/thumb/125046-arroz-de-tamboril.webp"
  },
  {
    "id": "lulas-recheadas",
    "metadataCode": "125047",
    "imageCode": "125047",
    "cuisineId": "portuguese",
    "names": {
      "en": "Lulas Recheadas",
      "zh": "葡式酿鱿鱼",
      "nl": "Lulas Recheadas",
      "local": "Lulas Recheadas"
    },
    "category": "seafood",
    "mealRole": "main",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "braised"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Lulas Recheadas is Portuguese stuffed squid, often filled with meat or rice and cooked in tomato sauce.",
      "zh": "葡式酿鱿鱼通常是葡式酿鱿鱼，常塞肉馅或米饭，再用番茄酱汁炖。",
      "nl": "Lulas Recheadas is meestal Portugese gevulde inktvis, vaak met vlees of rijst en tomatensaus."
    },
    "cookingProfile": {
      "en": "Expect firm squid tubes with a savory filling and sauce.",
      "zh": "点餐时可预期鱿鱼筒有弹性，内馅咸香，配酱汁。",
      "nl": "Verwacht stevige inktvistubes met hartige vulling en saus."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "The ordering cue is firm squid tubes with a savory filling and sauce.",
        "zh": "点餐识别重点是鱿鱼筒有弹性，内馅咸香，配酱汁。",
        "nl": "Het herkenningspunt is stevige inktvistubes met hartige vulling en saus."
      }
    },
    "composition": [
      [
        "squid",
        50,
        "seafood"
      ],
      [
        "ground-meat",
        20,
        "protein"
      ],
      [
        "steamed-rice",
        15,
        "starch-or-legume"
      ],
      [
        "tomato-sauce",
        10,
        "component"
      ],
      [
        "parsley",
        5,
        "distinctive-seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "squid",
      "tomato-sauce",
      "parsley"
    ],
    "basicTaste": [
      "savory",
      "seafood",
      "saucy"
    ],
    "textureProfile": [
      "stuffed squid",
      "firm bite",
      "tomato sauce"
    ],
    "riskFlags": [
      "contains-shellfish"
    ],
    "dietaryFlags": [],
    "goodForTags": [],
    "avoidIfTags": [
      "shellfish-allergy"
    ],
    "orderVerdict": {
      "en": "Choose it when you want saucy stuffed squid; skip if you dislike squid texture.",
      "zh": "想吃带馅炖鱿鱼时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je sauzige gevulde inktvis wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-037",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 3,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/125047-lulas-recheadas.webp",
    "thumbPath": "/assets/dishes/thumb/125047-lulas-recheadas.webp"
  },
  {
    "id": "chocos-fritos",
    "metadataCode": "125048",
    "imageCode": "125048",
    "cuisineId": "portuguese",
    "names": {
      "en": "Chocos Fritos",
      "zh": "葡式炸墨鱼",
      "nl": "Chocos Fritos",
      "local": "Chocos Fritos"
    },
    "category": "seafood",
    "mealRole": "main",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "deep-fried"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Chocos Fritos is Portuguese fried cuttlefish-style pieces, often served with lemon.",
      "zh": "葡式炸墨鱼通常是葡式炸墨鱼或乌贼块，常配柠檬。",
      "nl": "Chocos Fritos is meestal Portugese gefrituurde inktvisachtige stukken, vaak met citroen."
    },
    "cookingProfile": {
      "en": "Expect crisp fried coating and firm seafood chew.",
      "zh": "点餐时可预期外层酥脆，海鲜口感有弹性。",
      "nl": "Verwacht krokant jasje en stevige zeevruchtenbeet."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food"
      ],
      "description": {
        "en": "The ordering cue is crisp fried coating and firm seafood chew.",
        "zh": "点餐识别重点是外层酥脆，海鲜口感有弹性。",
        "nl": "Het herkenningspunt is krokant jasje en stevige zeevruchtenbeet."
      }
    },
    "composition": [
      [
        "squid",
        65,
        "seafood"
      ],
      [
        "wheat-flour",
        15,
        "base"
      ],
      [
        "neutral-frying-oil",
        10,
        "component"
      ],
      [
        "lemon",
        5,
        "fruit-or-sweetness"
      ],
      [
        "sea-salt",
        5,
        "distinctive-seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "squid",
      "lemon",
      "sea-salt"
    ],
    "basicTaste": [
      "salty",
      "fried",
      "seafood"
    ],
    "textureProfile": [
      "fried cuttlefish-style pieces",
      "crisp coating",
      "firm chew"
    ],
    "riskFlags": [
      "contains-shellfish",
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [],
    "avoidIfTags": [
      "shellfish-allergy",
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Choose it when you want fried cuttlefish-style seafood; skip if you avoid fried seafood.",
      "zh": "想吃酥炸墨鱼风味海鲜时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je gefrituurde inktvisachtige zeevrucht wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-037",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/125048-chocos-fritos.webp",
    "thumbPath": "/assets/dishes/thumb/125048-chocos-fritos.webp"
  },
  {
    "id": "caldeirada",
    "metadataCode": "125049",
    "imageCode": "125049",
    "cuisineId": "portuguese",
    "names": {
      "en": "Caldeirada",
      "zh": "葡式鱼锅",
      "nl": "Caldeirada",
      "local": "Caldeirada"
    },
    "category": "seafood",
    "mealRole": "main",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "simmered"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Caldeirada is Portuguese fish stew with potato, tomato, pepper, and olive oil.",
      "zh": "葡式鱼锅通常是葡式鱼锅，含土豆、番茄、甜椒和橄榄油。",
      "nl": "Caldeirada is meestal Portugese visstoof met aardappel, tomaat, paprika en olijfolie."
    },
    "cookingProfile": {
      "en": "Expect rustic fish broth with potatoes soaking up sauce.",
      "zh": "点餐时可预期乡土感鱼汤，土豆会吸收番茄汤汁。",
      "nl": "Verwacht rustieke visbouillon waarin aardappel saus opneemt."
    },
    "cuisineRole": {
      "level": "signature",
      "tags": [
        "signature-dish"
      ],
      "description": {
        "en": "The ordering cue is rustic fish broth with potatoes soaking up sauce.",
        "zh": "点餐识别重点是乡土感鱼汤，土豆会吸收番茄汤汁。",
        "nl": "Het herkenningspunt is rustieke visbouillon waarin aardappel saus opneemt."
      }
    },
    "composition": [
      [
        "fish-fillet",
        40,
        "seafood"
      ],
      [
        "potato",
        25,
        "starch-or-legume"
      ],
      [
        "tomato-sauce",
        15,
        "component"
      ],
      [
        "bell-pepper",
        10,
        "component"
      ],
      [
        "olive-oil",
        5,
        "component"
      ],
      [
        "parsley",
        5,
        "distinctive-seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "fish-fillet",
      "tomato-sauce",
      "olive-oil"
    ],
    "basicTaste": [
      "brothy",
      "seafood-savory",
      "rustic"
    ],
    "textureProfile": [
      "fish stew",
      "potato slices",
      "tomato broth"
    ],
    "riskFlags": [
      "contains-fish"
    ],
    "dietaryFlags": [],
    "goodForTags": [],
    "avoidIfTags": [
      "fish-allergy"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a rustic Portuguese fish stew; skip if you avoid fish or brothy stews.",
      "zh": "想吃葡式鱼肉炖锅时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een rustieke Portugese visstoof wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-037",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/125049-caldeirada.webp",
    "thumbPath": "/assets/dishes/thumb/125049-caldeirada.webp"
  },
  {
    "id": "queijo-da-serra",
    "metadataCode": "125050",
    "cuisineId": "portuguese",
    "names": {
      "en": "Queijo da Serra",
      "zh": "塞拉山软奶酪",
      "nl": "Queijo da Serra",
      "local": "Queijo da Serra"
    },
    "category": "cheese",
    "cookingMethods": [
      "assembled"
    ],
    "servingTemperature": "room-temperature",
    "shortDescription": {
      "en": "Portuguese soft sheep cheese with a creamy center, often eaten with bread or quince paste.",
      "zh": "葡萄牙软质羊奶酪，内心细腻流心，常配面包或榅桲果膏。",
      "nl": "Portugese zachte schapenkaas met romig midden, vaak met brood of kweepeerpasta."
    },
    "cookingProfile": {
      "en": "Expect a rich, salty, creamy cheese course rather than a cooked dish.",
      "zh": "预期是浓郁咸香的奶酪盘，不是热菜。",
      "nl": "Verwacht een rijke zoute romige kaasschotel, geen warm gerecht."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "cheese"
      ],
      "description": {
        "en": "A distinctive Portuguese mountain cheese with a soft spoonable center.",
        "zh": "有代表性的葡萄牙山区奶酪，中心柔软可舀。",
        "nl": "Een kenmerkende Portugese bergkaas met zachte lepelbare kern."
      }
    },
    "composition": [
      [
        "serra-cheese",
        65,
        "soft cheese"
      ],
      [
        "bread",
        20,
        "bread side"
      ],
      [
        "quince-paste",
        10,
        "sweet pairing"
      ],
      [
        "olive-oil",
        5,
        "optional finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "sheep cheese",
      "creamy center",
      "quince paste"
    ],
    "basicTaste": [
      "salty",
      "creamy",
      "slightly tangy"
    ],
    "textureProfile": [
      "soft oozy cheese",
      "crusty bread",
      "firm sweet paste"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-gluten"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "cheese",
      "starter"
    ],
    "avoidIfTags": [
      "dairy-free",
      "gluten-free",
      "dislikes-strong-cheese"
    ],
    "orderVerdict": {
      "en": "Worth ordering if you like rich soft cheeses; skip if dairy or sheep-cheese funk is an issue.",
      "zh": "喜欢浓郁软奶酪时值得点；避乳制品或不爱羊奶酪风味则避开。",
      "nl": "Aanrader voor liefhebbers van rijke zachte kaas; sla over bij zuivel of schapenkaassmaak."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 2,
    "imageCode": "125050",
    "imagePath": "/assets/dishes/main/125050-queijo-da-serra.webp",
    "thumbPath": "/assets/dishes/thumb/125050-queijo-da-serra.webp",
    "confidenceTag": "audited-remaining-batch-044",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "farinheira",
    "metadataCode": "125051",
    "cuisineId": "portuguese",
    "names": {
      "en": "Farinheira",
      "zh": "葡萄牙法里涅拉香肠",
      "nl": "Farinheira",
      "local": "Farinheira"
    },
    "category": "meat",
    "cookingMethods": [
      "fried"
    ],
    "shortDescription": {
      "en": "Portuguese smoked flour-based sausage, often fried and served with eggs or potatoes.",
      "zh": "葡萄牙烟熏面粉香肠，常煎后配鸡蛋或土豆。",
      "nl": "Portugese gerookte bloemworst, vaak gebakken met ei of aardappel."
    },
    "cookingProfile": {
      "en": "It is soft, smoky, and rich, with a crumbly filling rather than a firm meat sausage bite.",
      "zh": "质地柔软、烟熏、浓郁，内馅略松散，不像紧实肉肠。",
      "nl": "Zacht, rokerig en rijk, met kruimelige vulling in plaats van stevige vleesworst."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "regional-dish"
      ],
      "description": {
        "en": "A classic Portuguese enchido with a distinctive flour-and-smoke texture.",
        "zh": "经典葡萄牙腌熏肠类，特点是面粉内馅和烟熏感。",
        "nl": "Een klassieke Portugese enchido met herkenbare bloem- en rooksmaak."
      }
    },
    "composition": [
      [
        "farinheira-sausage",
        50,
        "sausage"
      ],
      [
        "egg",
        25,
        "scrambled egg side"
      ],
      [
        "potato",
        15,
        "fried side"
      ],
      [
        "olive-oil",
        5,
        "frying fat",
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
      "smoked farinheira",
      "egg",
      "olive oil"
    ],
    "basicTaste": [
      "smoky",
      "savory",
      "rich"
    ],
    "textureProfile": [
      "soft sausage filling",
      "creamy eggs",
      "crisp potato edges"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-gluten",
      "contains-egg"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "meat",
      "regional-dish"
    ],
    "avoidIfTags": [
      "pork-free",
      "gluten-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "Good if smoky soft sausage with eggs sounds comforting; avoid if you expect a firm grilled sausage.",
      "zh": "喜欢烟熏软香肠配蛋会适合；想吃紧实烤肠则不一定。",
      "nl": "Goed als zachte rokerige worst met ei je aanspreekt; minder als je stevige worst verwacht."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 2,
    "imageCode": "125051",
    "imagePath": "/assets/dishes/main/125051-farinheira.webp",
    "thumbPath": "/assets/dishes/thumb/125051-farinheira.webp",
    "confidenceTag": "audited-remaining-batch-044",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "morcela-portuguesa",
    "metadataCode": "125052",
    "cuisineId": "portuguese",
    "names": {
      "en": "Morcela Portuguesa",
      "zh": "葡萄牙血肠",
      "nl": "Portugese morcela",
      "local": "Morcela portuguesa"
    },
    "category": "meat",
    "cookingMethods": [
      "fried",
      "grilled"
    ],
    "shortDescription": {
      "en": "Portuguese dark blood sausage, usually sliced and fried or grilled, often served with potatoes or fruit.",
      "zh": "葡萄牙深色血肠，通常切片煎或烤，常配土豆或水果。",
      "nl": "Portugese donkere bloedworst, in plakken gebakken of gegrild, vaak met aardappel of fruit."
    },
    "cookingProfile": {
      "en": "Expect a rich iron-like blood sausage flavor with a soft dense bite.",
      "zh": "预期是血肠特有的浓郁铁质风味和柔密口感。",
      "nl": "Verwacht rijke ijzerachtige bloedworstsmaak met zachte dichte beet."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "acquired-taste"
      ],
      "description": {
        "en": "A traditional Portuguese blood sausage item, distinctive but not for every diner.",
        "zh": "传统葡萄牙血肠，很有特色但不是每个人都适合。",
        "nl": "Een traditionele Portugese bloedworst, uitgesproken maar niet voor iedereen."
      }
    },
    "composition": [
      [
        "blood-sausage",
        60,
        "sausage slices"
      ],
      [
        "potato",
        20,
        "boiled side"
      ],
      [
        "apple",
        10,
        "sweet side"
      ],
      [
        "olive-oil",
        5,
        "frying fat",
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
      "blood sausage",
      "black pepper",
      "apple sweetness"
    ],
    "basicTaste": [
      "savory",
      "iron-rich",
      "slightly sweet"
    ],
    "textureProfile": [
      "dense sausage",
      "soft potato",
      "crisp browned edges"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "regional-dish",
      "meat"
    ],
    "avoidIfTags": [
      "pork-free",
      "avoids-blood-sausage"
    ],
    "orderVerdict": {
      "en": "Choose it only if blood sausage sounds appealing; the flavor is distinctive and rich.",
      "zh": "只有对血肠有兴趣时才建议点，风味很鲜明厚重。",
      "nl": "Kies dit alleen als bloedworst je aanspreekt; de smaak is uitgesproken en rijk."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 4,
    "imageCode": "125052",
    "imagePath": "/assets/dishes/main/125052-morcela-portuguesa.webp",
    "thumbPath": "/assets/dishes/thumb/125052-morcela-portuguesa.webp",
    "confidenceTag": "audited-remaining-batch-044",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "salada-de-polvo",
    "metadataCode": "125053",
    "imageCode": "125053",
    "cuisineId": "portuguese",
    "names": {
      "en": "Salada de Polvo",
      "zh": "葡式章鱼沙拉",
      "nl": "Salada de Polvo",
      "local": "Salada de Polvo"
    },
    "category": "salad",
    "mealRole": "starter-or-side",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "boiled",
      "chilled",
      "assembled"
    ],
    "servingTemperature": "cold-or-cool",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Salada de Polvo is Portuguese cold octopus salad with onion, olive oil, parsley, and vinegar.",
      "zh": "葡式章鱼沙拉通常是葡式冷章鱼沙拉，拌洋葱、橄榄油、欧芹和醋。",
      "nl": "Salada de Polvo is meestal Portugese koude octopussalade met ui, olijfolie, peterselie en azijn."
    },
    "cookingProfile": {
      "en": "Expect cool firm octopus in a sharp olive-oil dressing.",
      "zh": "点餐时可预期冷章鱼有弹性，调味带醋香和橄榄油香。",
      "nl": "Verwacht koele stevige octopus in scherpe olijfolie-dressing."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish"
      ],
      "description": {
        "en": "The ordering cue is cool firm octopus in a sharp olive-oil dressing.",
        "zh": "点餐识别重点是冷章鱼有弹性，调味带醋香和橄榄油香。",
        "nl": "Het herkenningspunt is koele stevige octopus in scherpe olijfolie-dressing."
      }
    },
    "composition": [
      [
        "octopus",
        50,
        "seafood"
      ],
      [
        "onion",
        15,
        "component"
      ],
      [
        "olive-oil",
        15,
        "component"
      ],
      [
        "parsley",
        10,
        "distinctive-seasoning",
        "seasoning"
      ],
      [
        "vinegar",
        10,
        "distinctive-seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "octopus",
      "olive-oil",
      "vinegar"
    ],
    "basicTaste": [
      "briny",
      "fresh",
      "tangy"
    ],
    "textureProfile": [
      "cold octopus",
      "firm chew",
      "vinaigrette"
    ],
    "riskFlags": [
      "contains-shellfish"
    ],
    "dietaryFlags": [],
    "goodForTags": [],
    "avoidIfTags": [
      "shellfish-allergy"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a cold tangy octopus salad; skip if you dislike chilled seafood or chewy octopus.",
      "zh": "想吃冷食酸香章鱼沙拉时可以点；如果不适合这些主料、口感或过敏风险，请谨慎。",
      "nl": "Kies dit als je een koude friszure octopussalade wilt; sla over als allergenen, hoofdstructuur of textuur niet passen."
    },
    "confidenceTag": "audited-world-depth-batch-037",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 3,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high",
    "imagePath": "/assets/dishes/main/125053-salada-de-polvo.webp",
    "thumbPath": "/assets/dishes/thumb/125053-salada-de-polvo.webp"
  },
  {
    "id": "migas-portuguesas",
    "metadataCode": "125054",
    "cuisineId": "portuguese",
    "names": {
      "en": "Migas Portuguesas",
      "zh": "葡萄牙炒面包碎",
      "nl": "Portugese migas",
      "local": "Migas portuguesas"
    },
    "category": "side",
    "cookingMethods": [
      "fried",
      "stirred"
    ],
    "shortDescription": {
      "en": "Portuguese rustic bread-based migas, sautéed with garlic, olive oil, greens, and sometimes pork.",
      "zh": "葡萄牙乡村面包碎菜，用蒜、橄榄油、绿叶菜炒制，有时加猪肉。",
      "nl": "Portugese rustieke broodmigas met knoflook, olijfolie, groen en soms varken."
    },
    "cookingProfile": {
      "en": "It is a hearty crumbly bread side, savory and oily rather than saucy.",
      "zh": "这是扎实的面包碎配菜，咸香油润，不是酱汁菜。",
      "nl": "Een stevige kruimelige broodbasis, hartig en olieachtig, niet sauzig."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "side"
      ],
      "description": {
        "en": "A Portuguese regional side that turns bread into a filling savory plate.",
        "zh": "葡萄牙地区配菜，把面包做成饱足咸味盘。",
        "nl": "Een Portugese streekbijgerecht dat brood tot vullende hartige schotel maakt."
      }
    },
    "composition": [
      [
        "bread",
        45,
        "crumb base"
      ],
      [
        "collard-greens",
        20,
        "greens"
      ],
      [
        "pork",
        15,
        "optional meat"
      ],
      [
        "garlic",
        10,
        "aromatic"
      ],
      [
        "olive-oil",
        10,
        "frying fat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "garlic olive oil",
      "bread crumbs",
      "greens"
    ],
    "basicTaste": [
      "savory",
      "garlicky",
      "earthy"
    ],
    "textureProfile": [
      "crumbly bread",
      "tender greens",
      "crisp edges"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "side",
      "comfort-food"
    ],
    "avoidIfTags": [
      "gluten-free",
      "pork-free",
      "prefers-light-food"
    ],
    "orderVerdict": {
      "en": "Good as a filling rustic side; ask about pork if you need it vegetarian.",
      "zh": "适合作饱足乡村配菜；需要素食时要问是否含猪肉。",
      "nl": "Goed als vullend rustiek bijgerecht; vraag naar varken bij vegetarisch eten."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "imageCode": "125054",
    "imagePath": "/assets/dishes/main/125054-migas-portuguesas.webp",
    "thumbPath": "/assets/dishes/thumb/125054-migas-portuguesas.webp",
    "confidenceTag": "audited-remaining-batch-044",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "broa",
    "metadataCode": "125055",
    "cuisineId": "portuguese",
    "names": {
      "en": "Broa",
      "zh": "葡萄牙玉米面包",
      "nl": "Portugese broa",
      "local": "Broa"
    },
    "category": "bread",
    "cookingMethods": [
      "baked"
    ],
    "servingTemperature": "room-temperature",
    "shortDescription": {
      "en": "Rustic Portuguese corn and wheat bread with a dense yellow crumb and cracked crust.",
      "zh": "葡萄牙乡村玉米小麦面包，黄色面包芯紧实，外壳有裂纹。",
      "nl": "Rustiek Portugees mais-tarwebrood met dichte gele kruim en gebarsten korst."
    },
    "cookingProfile": {
      "en": "Expect a hearty coarse bread, often used with soups, stews, or cheese.",
      "zh": "预期是粗粝扎实的面包，常配汤、炖菜或奶酪。",
      "nl": "Stevig grof brood, vaak bij soep, stoof of kaas."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "bread"
      ],
      "description": {
        "en": "A classic Portuguese bread side, especially in northern and rural meals.",
        "zh": "经典葡萄牙面包配菜，北部和乡村餐中常见。",
        "nl": "Een klassiek Portugees broodbijgerecht, vooral noordelijk en landelijk."
      }
    },
    "composition": [
      [
        "corn",
        40,
        "cornmeal crumb"
      ],
      [
        "wheat-flour",
        35,
        "bread structure"
      ],
      [
        "olive-oil",
        10,
        "richness",
        "seasoning"
      ],
      [
        "sea-salt",
        5,
        "seasoning",
        "seasoning"
      ],
      [
        "bread",
        10,
        "starter dough"
      ]
    ],
    "distinctiveFlavorSources": [
      "cornmeal",
      "crusty bread",
      "olive oil"
    ],
    "basicTaste": [
      "mild",
      "corny",
      "savory"
    ],
    "textureProfile": [
      "dense crumb",
      "cracked crust",
      "coarse bite"
    ],
    "riskFlags": [
      "contains-gluten"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "bread",
      "side"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Useful as a rustic bread side; do not expect a soft fluffy roll.",
      "zh": "适合作乡村面包配菜；不要期待松软小餐包。",
      "nl": "Goed als rustiek broodbijgerecht; verwacht geen zacht luchtig broodje."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "imageCode": "125055",
    "imagePath": "/assets/dishes/main/125055-broa.webp",
    "thumbPath": "/assets/dishes/thumb/125055-broa.webp",
    "confidenceTag": "audited-remaining-batch-044",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "bolas-de-berlim",
    "metadataCode": "125056",
    "cuisineId": "portuguese",
    "names": {
      "en": "Bolas de Berlim",
      "zh": "葡式奶油炸甜包",
      "nl": "Bolas de Berlim",
      "local": "Bolas de Berlim"
    },
    "category": "dessert",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "Portuguese sugar-dusted fried doughnut, usually filled with thick egg custard.",
      "zh": "葡萄牙撒糖油炸甜面包，通常夹浓厚蛋奶馅。",
      "nl": "Portugese gesuikerde gefrituurde bol, meestal gevuld met dikke eiercrème."
    },
    "cookingProfile": {
      "en": "Expect a sweet fried doughnut with a creamy custard center.",
      "zh": "预期是甜油炸面团，中间有顺滑蛋奶馅。",
      "nl": "Zoete gefrituurde bol met romige banketroomvulling."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "dessert"
      ],
      "description": {
        "en": "A widely recognized Portuguese bakery and beach pastry.",
        "zh": "广为人知的葡萄牙烘焙/海滩甜点。",
        "nl": "Een bekende Portugese bakkerij- en strandzoetigheid."
      }
    },
    "composition": [
      [
        "wheat-flour",
        40,
        "fried dough"
      ],
      [
        "vanilla-custard",
        30,
        "custard filling"
      ],
      [
        "sugar",
        15,
        "coating"
      ],
      [
        "egg",
        10,
        "dough and custard"
      ],
      [
        "neutral-frying-oil",
        5,
        "frying"
      ]
    ],
    "distinctiveFlavorSources": [
      "fried dough",
      "egg custard",
      "sugar"
    ],
    "basicTaste": [
      "sweet",
      "creamy",
      "fried"
    ],
    "textureProfile": [
      "soft doughnut",
      "smooth custard",
      "sugary surface"
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
      "bakery"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-allergy",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Choose it for a sweet custard-filled fried pastry; it is not a light dessert.",
      "zh": "想吃奶油夹心油炸甜点时适合；不是清淡甜品。",
      "nl": "Kies dit voor een zoete gefrituurde roomvulling; niet licht."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "imageCode": "125056",
    "imagePath": "/assets/dishes/main/125056-bolas-de-berlim.webp",
    "thumbPath": "/assets/dishes/thumb/125056-bolas-de-berlim.webp",
    "confidenceTag": "audited-remaining-batch-044",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "travesseiros",
    "metadataCode": "125057",
    "cuisineId": "portuguese",
    "names": {
      "en": "Travesseiros",
      "zh": "辛特拉枕头酥",
      "nl": "Travesseiros",
      "local": "Travesseiros"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Sintra pillow-shaped puff pastries filled with almond and egg cream, dusted with sugar.",
      "zh": "辛特拉长枕形酥皮点心，内有杏仁蛋奶馅，表面撒糖。",
      "nl": "Sintra-kussenvormig bladerdeeg met amandel-eicrème en suiker."
    },
    "cookingProfile": {
      "en": "It is flaky outside and sweet almond-creamy inside.",
      "zh": "外层酥，内馅是甜杏仁奶油感。",
      "nl": "Schilferig buiten en zoet amandelromig binnen."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "dessert"
      ],
      "description": {
        "en": "A famous Sintra pastry with a very specific pillow shape.",
        "zh": "辛特拉著名点心，形状是很明确的枕头状。",
        "nl": "Een beroemde Sintra-patisserie met duidelijke kussenvorm."
      }
    },
    "composition": [
      [
        "puff-pastry",
        45,
        "flaky pastry"
      ],
      [
        "almond-paste",
        25,
        "filling"
      ],
      [
        "egg",
        15,
        "custard richness"
      ],
      [
        "sugar",
        10,
        "sweetness"
      ],
      [
        "butter",
        5,
        "pastry richness"
      ]
    ],
    "distinctiveFlavorSources": [
      "almond filling",
      "buttery pastry",
      "powdered sugar"
    ],
    "basicTaste": [
      "sweet",
      "nutty",
      "buttery"
    ],
    "textureProfile": [
      "flaky pastry",
      "soft filling",
      "powdered top"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy",
      "contains-tree-nut"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert",
      "regional-dish"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-allergy",
      "dairy-free",
      "nut-allergy"
    ],
    "orderVerdict": {
      "en": "A good pastry choice if almond filling and flaky layers appeal.",
      "zh": "喜欢杏仁馅和层酥时很适合。",
      "nl": "Een goede keuze bij amandelvulling en bladerige lagen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "imageCode": "125057",
    "imagePath": "/assets/dishes/main/125057-travesseiros.webp",
    "thumbPath": "/assets/dishes/thumb/125057-travesseiros.webp",
    "confidenceTag": "audited-remaining-batch-044",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "pao-de-lo",
    "metadataCode": "125058",
    "cuisineId": "portuguese",
    "names": {
      "en": "Pão de Ló",
      "zh": "葡萄牙海绵蛋糕",
      "nl": "Pão de ló",
      "local": "Pão de Ló"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Portuguese egg-rich sponge cake, sometimes airy and dry, sometimes moist in the center.",
      "zh": "葡萄牙蛋香海绵蛋糕，有的轻盈偏干，有的中心湿润。",
      "nl": "Portugese eierige sponscake, soms luchtig droog, soms vochtig in het midden."
    },
    "cookingProfile": {
      "en": "Expect a simple egg-forward cake rather than a frosted layer cake.",
      "zh": "预期是简单蛋香蛋糕，不是有糖霜夹层的蛋糕。",
      "nl": "Eenvoudige eierige cake, geen geglazuurde laagjescake."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "dessert"
      ],
      "description": {
        "en": "A classic Portuguese celebration and bakery cake with strong egg character.",
        "zh": "经典葡萄牙庆典/烘焙蛋糕，蛋香突出。",
        "nl": "Een klassieke Portugese feest- en bakkerijcake met duidelijke eiersmaak."
      }
    },
    "composition": [
      [
        "sponge-cake",
        50,
        "cake body"
      ],
      [
        "egg",
        25,
        "eggy structure"
      ],
      [
        "sugar",
        15,
        "sweetness"
      ],
      [
        "wheat-flour",
        10,
        "crumb"
      ]
    ],
    "distinctiveFlavorSources": [
      "egg-rich sponge",
      "sugar",
      "light crust"
    ],
    "basicTaste": [
      "sweet",
      "eggy",
      "mild"
    ],
    "textureProfile": [
      "airy sponge",
      "soft crumb",
      "moist center possible"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert",
      "cake"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "Good if you want a simple eggy cake; skip if you need chocolate or cream.",
      "zh": "想吃简单蛋香蛋糕时适合；想要巧克力或奶油则不是首选。",
      "nl": "Goed voor simpele eierige cake; minder voor chocolade of room."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "imageCode": "125058",
    "imagePath": "/assets/dishes/main/125058-pao-de-lo.webp",
    "thumbPath": "/assets/dishes/thumb/125058-pao-de-lo.webp",
    "confidenceTag": "audited-remaining-batch-044",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "toucinho-do-ceu",
    "metadataCode": "125059",
    "cuisineId": "portuguese",
    "names": {
      "en": "Toucinho do Céu",
      "zh": "葡萄牙杏仁蛋黄糕",
      "nl": "Toucinho do céu",
      "local": "Toucinho do Céu"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Dense Portuguese almond and egg-yolk cake, rich, sweet, and often served in small slices.",
      "zh": "密实的葡萄牙杏仁蛋黄糕，浓郁偏甜，常切小块。",
      "nl": "Dichte Portugese amandel-eigeelcake, rijk en zoet, vaak in kleine stukken."
    },
    "cookingProfile": {
      "en": "Expect a rich almond sweet with a moist dense crumb, not a fluffy cake.",
      "zh": "预期是浓郁杏仁甜点，湿润密实，不是蓬松蛋糕。",
      "nl": "Rijke amandelzoetigheid met vochtige dichte kruim, geen luchtige cake."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "dessert"
      ],
      "description": {
        "en": "A traditional convent-style Portuguese sweet built on almonds and egg yolks.",
        "zh": "传统葡萄牙修道院甜点，以杏仁和蛋黄为核心。",
        "nl": "Een traditioneel Portugees kloostergebak op basis van amandel en eigeel."
      }
    },
    "composition": [
      [
        "almonds",
        35,
        "almond base"
      ],
      [
        "egg",
        25,
        "egg-yolk richness"
      ],
      [
        "sugar",
        25,
        "sweetness"
      ],
      [
        "almond-paste",
        10,
        "dense body"
      ],
      [
        "cinnamon",
        5,
        "warm note",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "almond",
      "egg yolk",
      "sugar"
    ],
    "basicTaste": [
      "sweet",
      "nutty",
      "rich"
    ],
    "textureProfile": [
      "dense cake",
      "moist crumb",
      "powdered surface"
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
      "small-sweet"
    ],
    "avoidIfTags": [
      "nut-allergy",
      "egg-allergy",
      "prefers-light-desserts"
    ],
    "orderVerdict": {
      "en": "Best as a small rich sweet if almond and egg-yolk desserts appeal.",
      "zh": "适合想吃小份浓郁杏仁蛋黄甜点时。",
      "nl": "Het beste als kleine rijke zoetigheid bij amandel en eigeel."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "imageCode": "125059",
    "imagePath": "/assets/dishes/main/125059-toucinho-do-ceu.webp",
    "thumbPath": "/assets/dishes/thumb/125059-toucinho-do-ceu.webp",
    "confidenceTag": "audited-remaining-batch-044",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "sericaia",
    "metadataCode": "125060",
    "cuisineId": "portuguese",
    "names": {
      "en": "Sericaia",
      "zh": "葡萄牙肉桂蛋奶甜点",
      "nl": "Sericaia",
      "local": "Sericaia"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Alentejo egg and cinnamon pudding-cake, often served with syrupy plums.",
      "zh": "阿连特茹蛋奶肉桂布丁蛋糕，常配糖浆李子。",
      "nl": "Alentejo eier-kaneelpuddingcake, vaak met pruimen op siroop."
    },
    "cookingProfile": {
      "en": "Expect a soft custardy dessert with cinnamon aroma and a light baked top.",
      "zh": "预期是柔软蛋奶质地，带肉桂香和轻微烘烤表面。",
      "nl": "Zacht custardachtig dessert met kaneelgeur en licht gebakken bovenkant."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "dessert"
      ],
      "description": {
        "en": "A regional Alentejo dessert recognized by cinnamon and plum pairing.",
        "zh": "阿连特茹地区甜点，肉桂和李子搭配很有辨识度。",
        "nl": "Een regionaal Alentejo-dessert met kaneel en pruim."
      }
    },
    "composition": [
      [
        "egg",
        35,
        "custard structure"
      ],
      [
        "cream",
        25,
        "dairy body"
      ],
      [
        "sugar",
        15,
        "sweetness"
      ],
      [
        "plum-compote",
        15,
        "plum side"
      ],
      [
        "cinnamon",
        10,
        "spice",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "cinnamon",
      "egg custard",
      "syrupy plums"
    ],
    "basicTaste": [
      "sweet",
      "creamy",
      "warm-spiced"
    ],
    "textureProfile": [
      "soft pudding-cake",
      "light baked top",
      "jammy plum side"
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
      "regional-dish"
    ],
    "avoidIfTags": [
      "egg-allergy",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Good if you like custardy desserts with cinnamon; lighter than dense almond cakes.",
      "zh": "喜欢肉桂蛋奶甜点时适合，比密实杏仁糕轻一些。",
      "nl": "Goed bij custarddesserts met kaneel; lichter dan dichte amandelcake."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "imageCode": "125060",
    "imagePath": "/assets/dishes/main/125060-sericaia.webp",
    "thumbPath": "/assets/dishes/thumb/125060-sericaia.webp",
    "confidenceTag": "audited-remaining-batch-044",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "flaskpannkaka",
    "metadataCode": "128031",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Fläskpannkaka",
      "zh": "瑞典培根烤煎饼",
      "nl": "Zweedse spekpannenkoek",
      "local": "Fläskpannkaka"
    },
    "category": "main",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Swedish oven pancake with pork or bacon baked into a thick soft slice, usually served with lingonberry jam.",
      "zh": "瑞典烤箱厚煎饼，里面有猪肉或培根丁，常配越橘果酱。",
      "nl": "Zweedse ovenpannenkoek met spek in een dikke zachte plak, vaak met vossenbessenjam."
    },
    "cookingProfile": {
      "en": "Expect a soft eggy pancake with salty pork and a sweet-tart jam contrast.",
      "zh": "口感像柔软蛋香厚煎饼，咸猪肉和酸甜果酱形成对比。",
      "nl": "Verwacht een zachte eierige pannenkoek met zout spek en zoetzure jam."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "comfort-food"
      ],
      "description": {
        "en": "A familiar Swedish home-style lunch plate built around sweet-savory contrast.",
        "zh": "瑞典家常午餐经典，重点是甜咸对比。",
        "nl": "Een bekende Zweedse lunchklassieker met zoet-zout contrast."
      }
    },
    "composition": [
      [
        "pancake-batter",
        50,
        "oven pancake"
      ],
      [
        "bacon",
        20,
        "pork pieces"
      ],
      [
        "egg",
        10,
        "batter richness"
      ],
      [
        "lingonberry-jam",
        15,
        "sweet-tart side"
      ],
      [
        "butter",
        5,
        "richness"
      ]
    ],
    "distinctiveFlavorSources": [
      "bacon",
      "lingonberry jam",
      "eggy pancake"
    ],
    "basicTaste": [
      "savory",
      "sweet-tart",
      "mild"
    ],
    "textureProfile": [
      "soft pancake",
      "chewy pork bits",
      "jammy side"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy",
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food",
      "first-timer-friendly"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-allergy",
      "dairy-free",
      "pork-free"
    ],
    "orderVerdict": {
      "en": "Good if you like a filling sweet-savory pancake; skip if pork or eggy batter is not for you.",
      "zh": "喜欢甜咸厚煎饼会适合；不吃猪肉或不爱蛋香面糊则避开。",
      "nl": "Goed als je een vullende zoet-hartige pannenkoek wilt; sla over bij varkensvlees of eierbeslag."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "imageCode": "128031",
    "imagePath": "/assets/dishes/main/128031-flaskpannkaka.webp",
    "thumbPath": "/assets/dishes/thumb/128031-flaskpannkaka.webp",
    "confidenceTag": "audited-remaining-batch-043",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "isterband",
    "metadataCode": "128032",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Isterband",
      "zh": "瑞典酸烟熏香肠",
      "nl": "Isterband",
      "local": "Isterband"
    },
    "category": "meat",
    "cookingMethods": [
      "fried",
      "grilled"
    ],
    "shortDescription": {
      "en": "Swedish lightly sour smoked sausage, usually served hot with potatoes and pickled beetroot.",
      "zh": "瑞典微酸烟熏香肠，通常热食，配土豆和腌甜菜。",
      "nl": "Zweedse licht zure rookworst, meestal warm met aardappel en ingelegde biet."
    },
    "cookingProfile": {
      "en": "It feels rustic, smoky, fatty, and a little tangy rather than like a mild hot dog.",
      "zh": "风格粗犷、烟熏、油润并带轻酸，不像温和热狗。",
      "nl": "Rustiek, rokerig, vet en licht zuur, niet als een milde hotdog."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "classic-dish"
      ],
      "description": {
        "en": "A southern Swedish sausage plate with a distinctive fermented tang.",
        "zh": "瑞典南部常见香肠菜，特点是轻发酵酸香。",
        "nl": "Een Zuid-Zweedse worstschotel met herkenbare zurige toets."
      }
    },
    "composition": [
      [
        "sausage",
        45,
        "smoked sausage"
      ],
      [
        "potato",
        30,
        "boiled side"
      ],
      [
        "beetroot",
        15,
        "pickled side"
      ],
      [
        "mustard",
        5,
        "sharp condiment",
        "seasoning"
      ],
      [
        "butter",
        5,
        "potato richness"
      ]
    ],
    "distinctiveFlavorSources": [
      "smoked sausage",
      "pickled beetroot",
      "mustard"
    ],
    "basicTaste": [
      "salty",
      "smoky",
      "tangy"
    ],
    "textureProfile": [
      "snappy sausage",
      "soft potatoes",
      "firm beetroot"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "meat",
      "regional-dish"
    ],
    "avoidIfTags": [
      "pork-free",
      "avoids-smoky-food"
    ],
    "orderVerdict": {
      "en": "Choose it for a hearty sausage plate with a slight sour note.",
      "zh": "想吃扎实香肠盘且能接受轻酸味时可点。",
      "nl": "Kies dit voor stevige worst met een licht zure toets."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 2,
    "imageCode": "128032",
    "imagePath": "/assets/dishes/main/128032-isterband.webp",
    "thumbPath": "/assets/dishes/thumb/128032-isterband.webp",
    "confidenceTag": "audited-remaining-batch-043",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "falukorv",
    "metadataCode": "128033",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Falukorv",
      "zh": "瑞典法伦香肠",
      "nl": "Falukorv",
      "local": "Falukorv"
    },
    "category": "meat",
    "cookingMethods": [
      "fried",
      "baked"
    ],
    "shortDescription": {
      "en": "Mild Swedish ring sausage served sliced, often with potatoes, macaroni, tomato, or mustard.",
      "zh": "温和的瑞典环形香肠，常切片配土豆、通心粉、番茄或芥末。",
      "nl": "Milde Zweedse ringworst in plakken, vaak met aardappel, macaroni, tomaat of mosterd."
    },
    "cookingProfile": {
      "en": "Expect a soft, mild, processed-sausage comfort plate rather than a smoky artisanal sausage.",
      "zh": "预期是柔软温和的加工香肠舒适菜，不是强烟熏手工肠。",
      "nl": "Verwacht zachte milde comfortworst, geen sterk gerookte ambachtelijke worst."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-dish",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A common Swedish family-restaurant sausage item and easy entry point.",
        "zh": "瑞典家庭餐厅常见香肠菜，入口友好。",
        "nl": "Een gewone Zweedse familieworst en toegankelijke keuze."
      }
    },
    "composition": [
      [
        "sausage",
        45,
        "sliced sausage"
      ],
      [
        "pasta",
        25,
        "macaroni or side"
      ],
      [
        "cream",
        10,
        "creamy side"
      ],
      [
        "tomato-sauce",
        10,
        "optional bake sauce",
        "seasoning"
      ],
      [
        "mustard",
        5,
        "condiment",
        "seasoning"
      ],
      [
        "butter",
        5,
        "richness"
      ]
    ],
    "distinctiveFlavorSources": [
      "mild sausage",
      "mustard",
      "creamy macaroni"
    ],
    "basicTaste": [
      "savory",
      "mild",
      "slightly sweet"
    ],
    "textureProfile": [
      "soft sausage slices",
      "creamy side",
      "light browning"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-dairy",
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food",
      "safe-choice"
    ],
    "avoidIfTags": [
      "pork-free",
      "dairy-free",
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "A safe mild sausage order, especially if you want something familiar and not intense.",
      "zh": "想点熟悉、温和、不刺激的香肠菜时很稳。",
      "nl": "Een veilige milde worstkeuze als je iets vertrouwds wilt."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "imageCode": "128033",
    "imagePath": "/assets/dishes/main/128033-falukorv.webp",
    "thumbPath": "/assets/dishes/thumb/128033-falukorv.webp",
    "confidenceTag": "audited-remaining-batch-043",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "wallenbergare",
    "metadataCode": "128034",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Wallenbergare",
      "zh": "瑞典小牛肉饼",
      "nl": "Wallenbergare",
      "local": "Wallenbergare"
    },
    "category": "meat",
    "cookingMethods": [
      "fried"
    ],
    "shortDescription": {
      "en": "A delicate Swedish veal patty served with mashed potatoes, peas, browned butter, and lingonberry jam.",
      "zh": "细腻的瑞典小牛肉饼，配土豆泥、豌豆、焦化黄油和越橘果酱。",
      "nl": "Fijne Zweedse kalfsburger met puree, erwten, gebruinde boter en vossenbessenjam."
    },
    "cookingProfile": {
      "en": "It is softer and more refined than a regular burger, with creamy sides and a berry contrast.",
      "zh": "比普通汉堡肉饼更柔软精致，配菜奶香，果酱带对比。",
      "nl": "Zachter en verfijnder dan een gewone burger, met romige bijgerechten en bessencontrast."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "comfort-food"
      ],
      "description": {
        "en": "A classic Swedish bistro plate that balances mild veal, butter, and berries.",
        "zh": "经典瑞典小酒馆菜，平衡小牛肉、黄油和浆果味。",
        "nl": "Een klassieke Zweedse bistroschotel met kalf, boter en bessen."
      }
    },
    "composition": [
      [
        "veal",
        35,
        "veal patty"
      ],
      [
        "potato",
        30,
        "mash"
      ],
      [
        "cream",
        10,
        "patty and mash richness"
      ],
      [
        "egg",
        5,
        "binder"
      ],
      [
        "peas",
        10,
        "side"
      ],
      [
        "lingonberry-jam",
        10,
        "sweet-tart side"
      ]
    ],
    "distinctiveFlavorSources": [
      "veal patty",
      "browned butter",
      "lingonberry jam"
    ],
    "basicTaste": [
      "savory",
      "creamy",
      "sweet-tart"
    ],
    "textureProfile": [
      "tender patty",
      "smooth mash",
      "soft peas"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-egg"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "classic-dish",
      "first-timer-friendly"
    ],
    "avoidIfTags": [
      "dairy-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "A polished, gentle meat choice if you want Nordic comfort without strong flavors.",
      "zh": "想吃温和精致的北欧肉类舒适菜时适合。",
      "nl": "Een verfijnde milde vleeskeuze zonder zware smaken."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "imageCode": "128034",
    "imagePath": "/assets/dishes/main/128034-wallenbergare.webp",
    "thumbPath": "/assets/dishes/thumb/128034-wallenbergare.webp",
    "confidenceTag": "audited-remaining-batch-043",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "cuisineId": "scandinavian",
    "confidenceTag": "audited-scandinavian-batch-013",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 1,
    "id": "stegt-flaesk",
    "metadataCode": "128035",
    "names": {
      "en": "Stegt Flaesk",
      "zh": "丹麦脆煎五花肉",
      "nl": "Stegt flaesk",
      "local": "Stegt flæsk"
    },
    "category": "pork",
    "cookingMethods": [
      "fried"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Crispy fried pork belly slices served with boiled potatoes and parsley sauce.",
      "zh": "脆煎五花肉片配水煮土豆和欧芹奶油酱。",
      "nl": "Krokant gebakken buikspek met gekookte aardappels en peterseliesaus."
    },
    "cookingProfile": {
      "en": "The dish is salty, fatty, and crisp, balanced by mild potatoes and creamy parsley sauce.",
      "zh": "咸香油脂感和脆感明显，由土豆和欧芹奶油酱平衡。",
      "nl": "Zout, vet en krokant, in balans met milde aardappels en romige peterseliesaus."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "comfort-food"
      ],
      "description": {
        "en": "A Danish classic often described as a national comfort dish.",
        "zh": "丹麦经典舒适菜，常被视为代表性家常菜。",
        "nl": "Een Deense klassieker, vaak gezien als nationaal comfortgerecht."
      }
    },
    "composition": [
      [
        "pork-belly",
        45,
        "crispy pork"
      ],
      [
        "potato",
        30,
        "side"
      ],
      [
        "cream",
        15,
        "parsley sauce"
      ],
      [
        "parsley",
        5,
        "sauce herb",
        "seasoning"
      ],
      [
        "butter",
        5,
        "sauce richness"
      ]
    ],
    "distinctiveFlavorSources": [
      "crisp pork belly",
      "parsley sauce",
      "boiled potatoes"
    ],
    "basicTaste": [
      "salty",
      "rich",
      "creamy"
    ],
    "textureProfile": [
      "crispy pork",
      "soft potatoes",
      "smooth sauce"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food"
    ],
    "avoidIfTags": [
      "no-pork",
      "dairy-free",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Order when you want a very classic Danish pork-and-potato plate.",
      "zh": "想吃非常经典的丹麦猪肉土豆盘时适合点。",
      "nl": "Kies dit voor een zeer klassiek Deens spek-en-aardappelbord."
    },
    "weightLevel": 5,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "medisterpolse",
    "metadataCode": "128036",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Medisterpølse",
      "zh": "丹麦煎猪肉香肠",
      "nl": "Medisterworst",
      "local": "Medisterpølse"
    },
    "category": "meat",
    "cookingMethods": [
      "fried",
      "grilled"
    ],
    "shortDescription": {
      "en": "Danish coiled pork sausage, browned and served with potatoes, gravy, and red cabbage.",
      "zh": "丹麦盘卷猪肉香肠，煎至上色，配土豆、肉汁和红卷心菜。",
      "nl": "Deense gekrulde varkensworst met aardappel, jus en rode kool."
    },
    "cookingProfile": {
      "en": "Expect a juicy, fatty sausage plate with sweet-sour cabbage and gravy.",
      "zh": "口感多汁偏油润，红卷心菜酸甜，肉汁浓。",
      "nl": "Sappige vette worst met zoetzure rode kool en jus."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "comfort-food"
      ],
      "description": {
        "en": "A Danish classic sausage plate, especially common in colder-season meals.",
        "zh": "丹麦经典香肠菜，冷季餐桌常见。",
        "nl": "Een klassieke Deense worstschotel, vooral in koudere seizoenen."
      }
    },
    "composition": [
      [
        "sausage",
        45,
        "pork sausage"
      ],
      [
        "potato",
        25,
        "boiled side"
      ],
      [
        "red-cabbage",
        15,
        "sweet-sour side"
      ],
      [
        "broth",
        10,
        "gravy"
      ],
      [
        "black-pepper",
        5,
        "seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork sausage",
      "brown gravy",
      "red cabbage"
    ],
    "basicTaste": [
      "savory",
      "fatty",
      "sweet-sour"
    ],
    "textureProfile": [
      "snappy sausage",
      "soft potato",
      "tender cabbage"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food",
      "meat"
    ],
    "avoidIfTags": [
      "pork-free"
    ],
    "orderVerdict": {
      "en": "Good for a hearty sausage-and-potatoes mood; avoid if pork fat feels too heavy.",
      "zh": "想吃香肠土豆类饱足菜时适合；怕猪肉油脂则避开。",
      "nl": "Goed voor stevige worst met aardappel; vermijd bij zware varkensvetten."
    },
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "imageCode": "128036",
    "imagePath": "/assets/dishes/main/128036-medisterpolse.webp",
    "thumbPath": "/assets/dishes/thumb/128036-medisterpolse.webp",
    "confidenceTag": "audited-remaining-batch-043",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "biksemad",
    "metadataCode": "128037",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Biksemad",
      "zh": "丹麦土豆肉丁煎盘",
      "nl": "Biksemad",
      "local": "Biksemad"
    },
    "category": "main",
    "cookingMethods": [
      "fried"
    ],
    "shortDescription": {
      "en": "Danish hash of fried potatoes, onions, and meat, often topped with a fried egg and pickled beetroot.",
      "zh": "丹麦土豆、洋葱和肉丁煎盘，常加煎蛋和腌甜菜。",
      "nl": "Deense hash van gebakken aardappel, ui en vlees, vaak met spiegelei en biet."
    },
    "cookingProfile": {
      "en": "It is a browned, savory leftover-style skillet plate with a runny egg option.",
      "zh": "是煎香的咸口剩菜风格煎盘，常有流心煎蛋。",
      "nl": "Een hartige opgebakken restjesschotel, vaak met zacht ei."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-dish",
        "comfort-food"
      ],
      "description": {
        "en": "A practical Danish tavern-style plate for a filling casual meal.",
        "zh": "实用的丹麦酒馆风格饱腹简餐。",
        "nl": "Een praktische Deense kroegschotel voor een vullende maaltijd."
      }
    },
    "composition": [
      [
        "potato",
        40,
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
        "fried aromatic"
      ],
      [
        "egg",
        10,
        "fried topping"
      ],
      [
        "beetroot",
        5,
        "pickled side"
      ]
    ],
    "distinctiveFlavorSources": [
      "fried potato",
      "browned meat",
      "pickled beetroot"
    ],
    "basicTaste": [
      "savory",
      "salty",
      "slightly sweet-sour"
    ],
    "textureProfile": [
      "crisp potato edges",
      "chewy meat",
      "runny egg"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food",
      "filling"
    ],
    "avoidIfTags": [
      "egg-allergy",
      "pork-free"
    ],
    "orderVerdict": {
      "en": "Order it when you want a filling, familiar fried potato-and-meat plate.",
      "zh": "想吃熟悉、饱足的土豆肉丁煎盘时可点。",
      "nl": "Bestel dit voor een vertrouwde vullende aardappel-vleesschotel."
    },
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "imageCode": "128037",
    "imagePath": "/assets/dishes/main/128037-biksemad.webp",
    "thumbPath": "/assets/dishes/thumb/128037-biksemad.webp",
    "confidenceTag": "audited-remaining-batch-043",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "rugbrod",
    "metadataCode": "128038",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Rugbrød",
      "zh": "丹麦黑麦面包",
      "nl": "Roggebrood",
      "local": "Rugbrød"
    },
    "category": "bread",
    "cookingMethods": [
      "baked"
    ],
    "servingTemperature": "room-temperature",
    "shortDescription": {
      "en": "Dense Danish dark rye bread, often used as the base for smørrebrød or served with butter.",
      "zh": "丹麦深色黑麦面包，质地扎实，常作开放三明治底或配黄油。",
      "nl": "Dicht Deens roggebrood, basis voor smørrebrød of met boter."
    },
    "cookingProfile": {
      "en": "Expect a dense, tangy, seedy bread rather than a fluffy loaf.",
      "zh": "预期是紧实、微酸、有籽感的面包，不是蓬松白面包。",
      "nl": "Verwacht dicht, licht zuur brood met zaden, geen luchtig brood."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "bread"
      ],
      "description": {
        "en": "A foundational Danish bread and common menu side.",
        "zh": "丹麦饮食基础面包，也是常见配菜。",
        "nl": "Een fundamenteel Deens brood en veelvoorkomend bijgerecht."
      }
    },
    "composition": [
      [
        "rye-bread",
        80,
        "dense bread"
      ],
      [
        "butter",
        10,
        "spread"
      ],
      [
        "sesame-seeds",
        5,
        "seed texture"
      ],
      [
        "sea-salt",
        5,
        "seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "rye tang",
      "butter",
      "toasted seeds"
    ],
    "basicTaste": [
      "earthy",
      "mildly sour",
      "savory"
    ],
    "textureProfile": [
      "dense crumb",
      "chewy slices",
      "firm crust"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "contains-sesame"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "bread",
      "side"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free",
      "sesame-allergy"
    ],
    "orderVerdict": {
      "en": "Useful as a hearty bread side or smørrebrød base, not a light white bread.",
      "zh": "适合作扎实面包配菜或开放三明治底，不是轻白面包。",
      "nl": "Handig als stevig brood of smørrebrød-basis, geen licht witbrood."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "imageCode": "128038",
    "imagePath": "/assets/dishes/main/128038-rugbrod.webp",
    "thumbPath": "/assets/dishes/thumb/128038-rugbrod.webp",
    "confidenceTag": "audited-remaining-batch-043",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "rommegrot",
    "metadataCode": "128039",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Rømmegrøt",
      "zh": "挪威酸奶油粥",
      "nl": "Noorse zure-roompap",
      "local": "Rømmegrøt"
    },
    "category": "main",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Norwegian sour-cream porridge served thick, usually with butter, cinnamon, and sugar.",
      "zh": "挪威酸奶油浓粥，通常配黄油、肉桂和糖。",
      "nl": "Noorse zure-roompap, dik geserveerd met boter, kaneel en suiker."
    },
    "cookingProfile": {
      "en": "It is rich, creamy, and spoonable, closer to a dairy porridge than a grain bowl.",
      "zh": "浓郁奶香、可用勺吃，更像乳制品粥而非谷物碗。",
      "nl": "Rijk, romig en lepelbaar, meer zuivelpap dan graankom."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "comfort-food"
      ],
      "description": {
        "en": "A traditional Norwegian porridge often tied to holidays and rural meals.",
        "zh": "传统挪威粥，常与节日和乡村餐相关。",
        "nl": "Een traditionele Noorse pap, vaak verbonden met feest- en plattelandsmaaltijden."
      }
    },
    "composition": [
      [
        "sour-cream",
        45,
        "porridge base"
      ],
      [
        "wheat-flour",
        20,
        "thickener"
      ],
      [
        "butter",
        15,
        "butter pool"
      ],
      [
        "sugar",
        10,
        "sweetness"
      ],
      [
        "cinnamon",
        10,
        "warm topping",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "sour cream",
      "butter",
      "cinnamon sugar"
    ],
    "basicTaste": [
      "creamy",
      "sweet",
      "slightly tangy"
    ],
    "textureProfile": [
      "thick porridge",
      "glossy butter",
      "smooth spoonfuls"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-gluten"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "comfort-food",
      "regional-dish"
    ],
    "avoidIfTags": [
      "dairy-free",
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Choose it for a very rich creamy comfort bowl; skip if sour cream sounds too heavy.",
      "zh": "想吃非常浓郁奶香舒适粥时适合；怕酸奶油厚重则避开。",
      "nl": "Kies dit voor een zeer rijke romige kom; sla over als zure room te zwaar klinkt."
    },
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 2,
    "imageCode": "128039",
    "imagePath": "/assets/dishes/main/128039-rommegrot.webp",
    "thumbPath": "/assets/dishes/thumb/128039-rommegrot.webp",
    "confidenceTag": "audited-remaining-batch-043",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "cuisineId": "scandinavian",
    "confidenceTag": "audited-scandinavian-batch-013",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 2,
    "id": "raspeballer",
    "metadataCode": "128040",
    "names": {
      "en": "Raspeballer",
      "zh": "挪威土豆团子",
      "nl": "Raspeballer",
      "local": "Raspeballer"
    },
    "category": "potato",
    "cookingMethods": [
      "boiled"
    ],
    "servingTemperature": "hot",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Norwegian potato dumplings served with salted meat, sausage, rutabaga mash, butter, or potatoes.",
      "zh": "挪威土豆团子，常配咸肉、香肠、芜菁泥、黄油或土豆。",
      "nl": "Noorse aardappelknoedels met gezouten vlees, worst, koolraappuree, boter of aardappel."
    },
    "cookingProfile": {
      "en": "Dense and filling, with a plain potato flavor supported by salty sides.",
      "zh": "团子紧实顶饱，土豆味朴素，由咸肉配菜提升风味。",
      "nl": "Dicht en vullend, met eenvoudige aardappelsmaak en zoute bijgerechten."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "regional-dish",
        "comfort-food"
      ],
      "description": {
        "en": "A traditional Norwegian potato dumpling meal with high regional variation.",
        "zh": "传统挪威土豆团子餐，地区变化较多。",
        "nl": "Een traditionele Noorse aardappelknoedelmaaltijd met veel regionale variatie."
      }
    },
    "composition": [
      [
        "potato-dumpling",
        55,
        "dumplings"
      ],
      [
        "pork",
        20,
        "salted meat"
      ],
      [
        "sausage",
        10,
        "side"
      ],
      [
        "turnip",
        10,
        "rutabaga mash"
      ],
      [
        "butter",
        5,
        "serving fat"
      ]
    ],
    "distinctiveFlavorSources": [
      "potato dumpling",
      "salted meat",
      "rutabaga mash"
    ],
    "basicTaste": [
      "mild",
      "salty",
      "hearty"
    ],
    "textureProfile": [
      "dense dumplings",
      "soft mash",
      "salty meat side"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "regional-dish",
      "comfort-food"
    ],
    "avoidIfTags": [
      "no-pork",
      "dairy-free",
      "dislikes-dense-textures"
    ],
    "orderVerdict": {
      "en": "Choose it for a traditional, very filling potato-dumpling plate.",
      "zh": "想吃传统又很顶饱的土豆团子盘时可以点。",
      "nl": "Kies dit voor een traditioneel, zeer vullend aardappelknoedelbord."
    },
    "weightLevel": 5,
    "restaurantVariationLevel": "high"
  },
  {
    "id": "pinnekjott",
    "metadataCode": "128041",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Pinnekjøtt",
      "zh": "挪威盐干羊肋",
      "nl": "Pinnekjøtt",
      "local": "Pinnekjøtt"
    },
    "category": "meat",
    "cookingMethods": [
      "steamed"
    ],
    "shortDescription": {
      "en": "Norwegian salted and dried lamb ribs, steamed and served with potatoes and rutabaga mash.",
      "zh": "挪威盐干羊肋条，蒸熟后配土豆和芜菁泥。",
      "nl": "Noorse gezouten gedroogde lamsribben, gestoomd met aardappel en koolraappuree."
    },
    "cookingProfile": {
      "en": "Expect salty, intensely lamby ribs with soft root-vegetable sides.",
      "zh": "预期是咸香、羊味明显的肋条，配柔软根茎类配菜。",
      "nl": "Verwacht zoute uitgesproken lamsribben met zachte wortelgroentebijgerechten."
    },
    "cuisineRole": {
      "level": "festival",
      "tags": [
        "festival",
        "regional-dish"
      ],
      "description": {
        "en": "A Norwegian Christmas classic with a strong lamb and salt-cure identity.",
        "zh": "挪威圣诞经典，羊肉和盐干风味很突出。",
        "nl": "Een Noorse kerstklassieker met sterke lams- en pekelsmaak."
      }
    },
    "composition": [
      [
        "lamb",
        55,
        "salted ribs"
      ],
      [
        "potato",
        20,
        "boiled side"
      ],
      [
        "turnip",
        15,
        "rutabaga mash"
      ],
      [
        "butter",
        5,
        "mash richness"
      ],
      [
        "black-pepper",
        5,
        "seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "salted lamb",
      "rutabaga mash",
      "pepper"
    ],
    "basicTaste": [
      "salty",
      "savory",
      "gamey"
    ],
    "textureProfile": [
      "fibrous ribs",
      "soft potato",
      "smooth mash"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "meat",
      "festival"
    ],
    "avoidIfTags": [
      "avoids-gamey-meat",
      "low-salt"
    ],
    "orderVerdict": {
      "en": "Best for lamb lovers; it is salty and traditional, not a neutral meat plate.",
      "zh": "适合喜欢羊肉的人；它偏咸且传统，不是中性肉菜。",
      "nl": "Voor lamsliefhebbers; zout en traditioneel, geen neutrale vleesschotel."
    },
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 3,
    "imageCode": "128041",
    "imagePath": "/assets/dishes/main/128041-pinnekjott.webp",
    "thumbPath": "/assets/dishes/thumb/128041-pinnekjott.webp",
    "confidenceTag": "audited-remaining-batch-043",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "ribbe-norwegian",
    "metadataCode": "128042",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Norwegian Ribbe",
      "zh": "挪威脆皮烤猪肋",
      "nl": "Noorse ribbe",
      "local": "Ribbe"
    },
    "category": "meat",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Norwegian roast pork belly or ribs with crisp crackling, potatoes, red cabbage, and gravy.",
      "zh": "挪威烤猪五花或肋肉，带脆皮，配土豆、红卷心菜和肉汁。",
      "nl": "Noorse geroosterde buikspek/ribbe met krokant zwoerd, aardappel, rode kool en jus."
    },
    "cookingProfile": {
      "en": "It is rich and fatty, with the crackling skin as the main texture cue.",
      "zh": "这道菜浓郁偏油，脆皮是最重要的口感信号。",
      "nl": "Rijk en vet, met krokant zwoerd als belangrijkste textuur."
    },
    "cuisineRole": {
      "level": "festival",
      "tags": [
        "festival",
        "classic-dish"
      ],
      "description": {
        "en": "A Norwegian holiday pork centerpiece, especially around Christmas.",
        "zh": "挪威节庆猪肉主菜，尤其常见于圣诞。",
        "nl": "Een Noors feestelijk varkensgerecht, vooral rond kerst."
      }
    },
    "composition": [
      [
        "pork-belly",
        55,
        "roast pork"
      ],
      [
        "potato",
        20,
        "boiled side"
      ],
      [
        "red-cabbage",
        15,
        "sweet-sour side"
      ],
      [
        "broth",
        5,
        "gravy"
      ],
      [
        "black-pepper",
        5,
        "seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "crisp pork crackling",
      "brown gravy",
      "red cabbage"
    ],
    "basicTaste": [
      "savory",
      "fatty",
      "sweet-sour"
    ],
    "textureProfile": [
      "crisp skin",
      "tender fatty pork",
      "soft potato"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "meat",
      "festival"
    ],
    "avoidIfTags": [
      "pork-free",
      "prefers-light-food"
    ],
    "orderVerdict": {
      "en": "Order it for a rich pork roast with crackling; skip if fatty meat feels too heavy.",
      "zh": "想吃浓郁脆皮烤猪肉时适合；怕肥肉厚重则避开。",
      "nl": "Bestel voor rijke varkensribbe met zwoerd; sla over als vet vlees te zwaar is."
    },
    "spiceLevel": 0,
    "weightLevel": 5,
    "acquiredTasteLevel": 1,
    "imageCode": "128042",
    "imagePath": "/assets/dishes/main/128042-ribbe-norwegian.webp",
    "thumbPath": "/assets/dishes/thumb/128042-ribbe-norwegian.webp",
    "confidenceTag": "audited-remaining-batch-043",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "fiskegrateng",
    "metadataCode": "128043",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Fiskegrateng",
      "zh": "挪威奶油鱼焗菜",
      "nl": "Noorse visgratin",
      "local": "Fiskegrateng"
    },
    "category": "seafood",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Norwegian baked fish gratin with white fish, macaroni or sauce, and a golden breadcrumb top.",
      "zh": "挪威白鱼焗菜，常有通心粉或白酱，表面是金黄面包屑。",
      "nl": "Noorse visgratin met witte vis, macaroni of saus en goud kruimellaagje."
    },
    "cookingProfile": {
      "en": "Expect a mild creamy fish casserole rather than a sharp seafood dish.",
      "zh": "预期是温和奶油鱼焗菜，不是强烈海鲜味。",
      "nl": "Verwacht milde romige visgratin, geen scherpe zeevruchtensmaak."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-dish",
        "comfort-food"
      ],
      "description": {
        "en": "A common Norwegian family-style fish dish that is approachable for first-timers.",
        "zh": "挪威常见家庭式鱼菜，对第一次尝试者友好。",
        "nl": "Een gewone Noorse familievisschotel, toegankelijk voor beginners."
      }
    },
    "composition": [
      [
        "fish-fillet",
        40,
        "white fish"
      ],
      [
        "pasta",
        20,
        "macaroni"
      ],
      [
        "bechamel-sauce",
        20,
        "creamy binder"
      ],
      [
        "panko-breadcrumbs",
        10,
        "crisp top"
      ],
      [
        "carrot",
        10,
        "side salad"
      ]
    ],
    "distinctiveFlavorSources": [
      "white fish",
      "creamy sauce",
      "breadcrumb crust"
    ],
    "basicTaste": [
      "creamy",
      "mild",
      "savory"
    ],
    "textureProfile": [
      "soft casserole",
      "flaky fish",
      "crisp top"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-dairy",
      "contains-gluten"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "comfort-food",
      "seafood"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "dairy-free",
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "A gentle fish choice if creamy baked dishes appeal.",
      "zh": "喜欢温和奶油焗菜时，这道鱼菜很稳。",
      "nl": "Een zachte viskeuze als romige ovenschotels je aanspreken."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "imageCode": "128043",
    "imagePath": "/assets/dishes/main/128043-fiskegrateng.webp",
    "thumbPath": "/assets/dishes/thumb/128043-fiskegrateng.webp",
    "confidenceTag": "audited-remaining-batch-043",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "skrei",
    "metadataCode": "128044",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Skrei",
      "zh": "挪威季节鳕鱼",
      "nl": "Skrei",
      "local": "Skrei"
    },
    "category": "seafood",
    "cookingMethods": [
      "boiled",
      "fried"
    ],
    "shortDescription": {
      "en": "Seasonal Norwegian Arctic cod, usually served as a clean white fish plate with potatoes and butter sauce.",
      "zh": "挪威季节性北极鳕鱼，通常做成清爽白鱼主菜，配土豆和黄油汁。",
      "nl": "Seizoensgebonden Noorse kabeljauw, schoon geserveerd met aardappel en botersaus."
    },
    "cookingProfile": {
      "en": "Expect firm, flaky, mild cod where freshness matters more than strong seasoning.",
      "zh": "口感紧实片状、味道温和，重点是新鲜度而非重调味。",
      "nl": "Stevige vlokkige milde kabeljauw waarbij versheid belangrijker is dan sterke kruiden."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "seafood"
      ],
      "description": {
        "en": "A seasonal Nordic cod dish recognized for clean fish texture.",
        "zh": "北欧季节鳕鱼菜，重点是干净的鱼肉质地。",
        "nl": "Een seizoensgebonden Noordse kabeljauwschotel met heldere vistextuur."
      }
    },
    "composition": [
      [
        "fish-fillet",
        55,
        "cod loin"
      ],
      [
        "potato",
        20,
        "boiled side"
      ],
      [
        "carrot",
        10,
        "vegetable side"
      ],
      [
        "butter",
        10,
        "sauce"
      ],
      [
        "dill",
        5,
        "herb",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "fresh cod",
      "butter sauce",
      "dill"
    ],
    "basicTaste": [
      "mild",
      "savory",
      "buttery"
    ],
    "textureProfile": [
      "flaky cod",
      "soft potato",
      "light sauce"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-dairy"
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
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Good if you want a clean mild fish main rather than a saucy seafood dish.",
      "zh": "想吃清爽温和鱼类主菜时适合，不是浓酱海鲜。",
      "nl": "Goed voor een schone milde vismain, niet voor zware saus."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "imageCode": "128044",
    "imagePath": "/assets/dishes/main/128044-skrei.webp",
    "thumbPath": "/assets/dishes/thumb/128044-skrei.webp",
    "confidenceTag": "audited-remaining-batch-043",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "smalahove",
    "metadataCode": "128045",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Smalahove",
      "zh": "挪威羊头菜",
      "nl": "Smalahove",
      "local": "Smalahove"
    },
    "category": "meat",
    "cookingMethods": [
      "steamed",
      "boiled"
    ],
    "shortDescription": {
      "en": "Traditional Norwegian cooked sheep head, usually served with potatoes and rutabaga mash.",
      "zh": "传统挪威熟羊头菜，通常配土豆和芜菁泥。",
      "nl": "Traditionele Noorse gekookte schapenkop, meestal met aardappel en koolraappuree."
    },
    "cookingProfile": {
      "en": "This is a strong acquired-taste dish with offal-like texture and lamb flavor.",
      "zh": "这是明显后天口味菜，带内脏感口感和羊肉味。",
      "nl": "Een uitgesproken acquired-taste gerecht met orgaanachtige textuur en lamsmaak."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "acquired-taste"
      ],
      "description": {
        "en": "A very traditional Norwegian regional dish, more adventurous than everyday comfort food.",
        "zh": "很传统的挪威地区菜，比日常舒适菜更冒险。",
        "nl": "Een zeer traditioneel Noors streekgerecht, avontuurlijker dan dagelijkse kost."
      }
    },
    "composition": [
      [
        "lamb",
        55,
        "sheep head meat"
      ],
      [
        "offal",
        15,
        "head cuts"
      ],
      [
        "potato",
        15,
        "boiled side"
      ],
      [
        "turnip",
        10,
        "rutabaga mash"
      ],
      [
        "black-pepper",
        5,
        "seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "lamb",
      "salted meat",
      "root-vegetable mash"
    ],
    "basicTaste": [
      "savory",
      "gamey",
      "salty"
    ],
    "textureProfile": [
      "soft meat",
      "gelatinous bits",
      "smooth mash"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "regional-dish",
      "adventurous"
    ],
    "avoidIfTags": [
      "avoids-offal",
      "avoids-gamey-meat"
    ],
    "orderVerdict": {
      "en": "Only choose it if you are comfortable with traditional head meat and strong lamb character.",
      "zh": "只有能接受传统羊头肉和明显羊味时才建议点。",
      "nl": "Kies dit alleen als je traditioneel kopvlees en sterke lamsmaak aankunt."
    },
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 5,
    "imageCode": "128045",
    "imagePath": "/assets/dishes/main/128045-smalahove.webp",
    "thumbPath": "/assets/dishes/thumb/128045-smalahove.webp",
    "confidenceTag": "audited-remaining-batch-043",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "blabarsoppa",
    "metadataCode": "128046",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Blåbärssoppa",
      "zh": "瑞典蓝莓汤",
      "nl": "Zweedse bosbessensoep",
      "local": "Blåbärssoppa"
    },
    "category": "dessert",
    "cookingMethods": [
      "simmered"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "Swedish blueberry soup, served warm or chilled as a sweet-tart drinkable or spoonable dessert.",
      "zh": "瑞典蓝莓汤，可温食或冷食，是酸甜可喝也可勺吃的甜品。",
      "nl": "Zweedse bosbessensoep, warm of koud als zoetzuur drink- of lepeldessert."
    },
    "cookingProfile": {
      "en": "Expect a smooth berry soup, lighter than cake but sweeter than fruit juice.",
      "zh": "预期是顺滑莓果汤，比蛋糕轻，但比果汁更甜更稠。",
      "nl": "Verwacht gladde bessensoep, lichter dan cake maar zoeter en dikker dan sap."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "dessert"
      ],
      "description": {
        "en": "A recognizable Swedish berry dessert often associated with winter sports and cafes.",
        "zh": "有辨识度的瑞典莓果甜品，常与冬季运动和咖啡馆相关。",
        "nl": "Een herkenbaar Zweeds bessendessert, vaak gelinkt aan wintersport en cafés."
      }
    },
    "composition": [
      [
        "berries",
        65,
        "blueberry base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "potato-starch",
        5,
        "thickener"
      ],
      [
        "cream",
        5,
        "optional finish"
      ],
      [
        "vanilla",
        5,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "blueberry",
      "light tartness",
      "cream"
    ],
    "basicTaste": [
      "sweet-tart",
      "fruity",
      "mild"
    ],
    "textureProfile": [
      "smooth soup",
      "glossy surface",
      "soft berry body"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "dessert",
      "lighter-choice"
    ],
    "avoidIfTags": [
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "A light fruity dessert choice; ask about cream if avoiding dairy.",
      "zh": "想吃轻盈水果甜品时适合；避乳制品要问是否加奶油。",
      "nl": "Een licht fruitig dessert; vraag naar room bij zuivelvrij."
    },
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "imageCode": "128046",
    "imagePath": "/assets/dishes/main/128046-blabarsoppa.webp",
    "thumbPath": "/assets/dishes/thumb/128046-blabarsoppa.webp",
    "confidenceTag": "audited-remaining-batch-043",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "cuisineId": "scandinavian",
    "confidenceTag": "audited-scandinavian-batch-013",
    "metadataConfidence": 0.82,
    "spiceLevel": 0,
    "acquiredTasteLevel": 1,
    "id": "kladdkaka",
    "metadataCode": "128047",
    "names": {
      "en": "Kladdkaka",
      "zh": "瑞典黏心巧克力蛋糕",
      "nl": "Kladdkaka",
      "local": "Kladdkaka"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "servingTemperature": "room-temperature",
    "rawnessLevel": "fully-cooked",
    "shortDescription": {
      "en": "Swedish sticky chocolate cake with a dense fudgy center, often served with cream or berries.",
      "zh": "瑞典黏心巧克力蛋糕，中心浓密湿润，常配奶油或莓果。",
      "nl": "Zweedse kleverige chocoladetaart met fudgy kern, vaak met room of bessen."
    },
    "cookingProfile": {
      "en": "It is denser and stickier than sponge cake, closer to a soft brownie.",
      "zh": "比海绵蛋糕更浓密黏润，更接近柔软布朗尼。",
      "nl": "Dichter en kleveriger dan biscuit, dichter bij zachte brownie."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "dessert",
        "classic-dish"
      ],
      "description": {
        "en": "A common Swedish cafe dessert for chocolate lovers.",
        "zh": "瑞典咖啡馆常见巧克力甜点。",
        "nl": "Een veelvoorkomend Zweeds cafédessert voor chocoladeliefhebbers."
      }
    },
    "composition": [
      [
        "chocolate",
        35,
        "chocolate body"
      ],
      [
        "wheat-flour",
        20,
        "cake structure"
      ],
      [
        "butter",
        20,
        "richness"
      ],
      [
        "egg",
        15,
        "binder"
      ],
      [
        "sugar",
        10,
        "sweetness"
      ]
    ],
    "distinctiveFlavorSources": [
      "chocolate",
      "butter",
      "fudgy center"
    ],
    "basicTaste": [
      "sweet",
      "chocolatey",
      "rich"
    ],
    "textureProfile": [
      "sticky center",
      "dense crumb",
      "thin top crust"
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
      "chocolate"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-free",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "A strong dessert choice if you want dense chocolate rather than a light cake.",
      "zh": "想吃浓密巧克力甜点而不是轻蛋糕时很适合。",
      "nl": "Een sterke dessertkeuze als je dichte chocolade wilt in plaats van lichte cake."
    },
    "weightLevel": 3,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "kanelsnegle",
    "metadataCode": "128048",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Kanelsnegle",
      "zh": "丹麦肉桂蜗牛卷",
      "nl": "Deense kaneelsnegle",
      "local": "Kanelsnegle"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Danish spiral cinnamon pastry with buttery dough, cinnamon sugar, and often a light icing.",
      "zh": "丹麦螺旋肉桂酥点，有黄油面团、肉桂糖，常带少量糖霜。",
      "nl": "Deens spiraalvormig kaneelgebak met boterdeeg, kaneelsuiker en vaak glazuur."
    },
    "cookingProfile": {
      "en": "Expect a sweet buttery bakery pastry with clear cinnamon aroma.",
      "zh": "预期是黄油香明显的甜烘焙点心，肉桂香突出。",
      "nl": "Verwacht zoet boterig gebak met duidelijke kaneelgeur."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "dessert"
      ],
      "description": {
        "en": "A classic Danish bakery sweet and easy coffee pairing.",
        "zh": "丹麦经典烘焙甜点，适合配咖啡。",
        "nl": "Een klassieke Deense bakkerijzoetigheid bij koffie."
      }
    },
    "composition": [
      [
        "croissant-pastry",
        45,
        "laminated dough"
      ],
      [
        "butter",
        20,
        "richness"
      ],
      [
        "sugar",
        15,
        "sweetness"
      ],
      [
        "cinnamon",
        15,
        "spice",
        "seasoning"
      ],
      [
        "cream",
        5,
        "icing"
      ]
    ],
    "distinctiveFlavorSources": [
      "cinnamon sugar",
      "butter",
      "icing"
    ],
    "basicTaste": [
      "sweet",
      "warm-spiced",
      "buttery"
    ],
    "textureProfile": [
      "flaky pastry",
      "sticky cinnamon swirl",
      "soft center"
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
      "dessert",
      "bakery"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "Good for a sweet cinnamon pastry; not a light or savory snack.",
      "zh": "想吃甜肉桂酥点时适合；不是清淡或咸味小吃。",
      "nl": "Goed voor zoet kaneelgebak; geen lichte of hartige snack."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "imageCode": "128048",
    "imagePath": "/assets/dishes/main/128048-kanelsnegle.webp",
    "thumbPath": "/assets/dishes/thumb/128048-kanelsnegle.webp",
    "confidenceTag": "audited-remaining-batch-043",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "wienerbrod",
    "metadataCode": "128049",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Wienerbrød",
      "zh": "丹麦酥",
      "nl": "Wienerbrød",
      "local": "Wienerbrød"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Danish laminated pastry, often filled with custard, almond, or fruit jam.",
      "zh": "丹麦层酥点心，常有卡仕达、杏仁或果酱馅。",
      "nl": "Deens bladerdeeggebak, vaak met banketroom, amandel of jam."
    },
    "cookingProfile": {
      "en": "It is flaky, buttery, and sweet, closer to a pastry than a bread roll.",
      "zh": "口感酥脆黄油香、偏甜，更像点心而非面包卷。",
      "nl": "Schilferig, boterig en zoet, meer gebak dan broodje."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "dessert"
      ],
      "description": {
        "en": "A flagship Danish bakery item recognized by laminated layers and sweet filling.",
        "zh": "丹麦烘焙代表，重点是层酥和甜馅。",
        "nl": "Een Deens bakkerij-icoon met laagjes en zoete vulling."
      }
    },
    "composition": [
      [
        "puff-pastry",
        50,
        "flaky pastry"
      ],
      [
        "vanilla-custard",
        20,
        "custard filling"
      ],
      [
        "fruit-sauce-or-caramel",
        10,
        "jam"
      ],
      [
        "butter",
        15,
        "lamination richness"
      ],
      [
        "sugar",
        5,
        "glaze"
      ]
    ],
    "distinctiveFlavorSources": [
      "buttery pastry",
      "custard",
      "fruit jam"
    ],
    "basicTaste": [
      "sweet",
      "buttery",
      "creamy"
    ],
    "textureProfile": [
      "flaky layers",
      "soft custard",
      "sticky glaze"
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
      "dessert",
      "bakery"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "A safe bakery choice if you want buttery sweet pastry.",
      "zh": "想吃黄油香甜酥点时是稳妥选择。",
      "nl": "Een veilige bakkerijkeuze voor boterig zoet gebak."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "imageCode": "128049",
    "imagePath": "/assets/dishes/main/128049-wienerbrod.webp",
    "thumbPath": "/assets/dishes/thumb/128049-wienerbrod.webp",
    "confidenceTag": "audited-remaining-batch-043",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "kransekake",
    "metadataCode": "128050",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Kransekake",
      "zh": "北欧杏仁圈塔",
      "nl": "Kransekake",
      "local": "Kransekake"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Scandinavian celebration cake made from stacked almond cookie rings with white icing.",
      "zh": "北欧庆典蛋糕，由一圈圈杏仁饼干叠成塔，并有白色糖霜。",
      "nl": "Scandinavische feesttaart van gestapelde amandelringen met wit glazuur."
    },
    "cookingProfile": {
      "en": "Expect chewy almond sweetness rather than a soft cream cake.",
      "zh": "预期是有嚼劲的杏仁甜味，不是柔软奶油蛋糕。",
      "nl": "Verwacht taaie amandelzoetheid, geen zachte slagroomtaart."
    },
    "cuisineRole": {
      "level": "festival",
      "tags": [
        "festival",
        "dessert"
      ],
      "description": {
        "en": "A festive Nordic cake for weddings, holidays, and special occasions.",
        "zh": "北欧婚礼、节日和庆典常见的节庆蛋糕。",
        "nl": "Een feestelijke Noordse cake voor bruiloften en feestdagen."
      }
    },
    "composition": [
      [
        "almond-paste",
        50,
        "almond ring dough"
      ],
      [
        "almonds",
        15,
        "nut body"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        10,
        "binder"
      ],
      [
        "vanilla",
        5,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "almond paste",
      "sugar icing",
      "vanilla"
    ],
    "basicTaste": [
      "sweet",
      "nutty",
      "mild"
    ],
    "textureProfile": [
      "chewy rings",
      "crisp edges",
      "firm stack"
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
      "festival"
    ],
    "avoidIfTags": [
      "nut-allergy",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "Choose it if almond desserts appeal; avoid with nut allergies.",
      "zh": "喜欢杏仁甜点时适合；坚果过敏需避开。",
      "nl": "Kies dit bij amandeldesserts; vermijd bij notenallergie."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "imageCode": "128050",
    "imagePath": "/assets/dishes/main/128050-kransekake.webp",
    "thumbPath": "/assets/dishes/thumb/128050-kransekake.webp",
    "confidenceTag": "audited-remaining-batch-043",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "lefse",
    "metadataCode": "128051",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Lefse",
      "zh": "挪威土豆软饼",
      "nl": "Lefse",
      "local": "Lefse"
    },
    "category": "bread",
    "cookingMethods": [
      "toasted"
    ],
    "servingTemperature": "room-temperature",
    "shortDescription": {
      "en": "Norwegian soft potato flatbread, often served folded with butter, sugar, and cinnamon.",
      "zh": "挪威土豆软薄饼，常抹黄油、糖和肉桂后折起。",
      "nl": "Noorse zachte aardappelflatbread, vaak met boter, suiker en kaneel."
    },
    "cookingProfile": {
      "en": "It feels like a soft thin flatbread, mildly sweet if served as a snack.",
      "zh": "口感像柔软薄饼，作为小食时常带轻甜味。",
      "nl": "Zacht dun platbrood, licht zoet als snack."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "bread"
      ],
      "description": {
        "en": "A classic Norwegian flatbread that can be a side or sweet snack.",
        "zh": "经典挪威薄饼，可作配菜也可作甜小食。",
        "nl": "Een klassieke Noorse flatbread, als bijgerecht of zoete snack."
      }
    },
    "composition": [
      [
        "potato",
        35,
        "flatbread base"
      ],
      [
        "wheat-flour",
        35,
        "dough"
      ],
      [
        "butter",
        15,
        "spread"
      ],
      [
        "sugar",
        10,
        "sweetness"
      ],
      [
        "cinnamon",
        5,
        "spice",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "potato flatbread",
      "butter",
      "cinnamon sugar"
    ],
    "basicTaste": [
      "mild",
      "sweet",
      "buttery"
    ],
    "textureProfile": [
      "soft flatbread",
      "pliable folds",
      "smooth butter"
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
      "snack"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Good as a soft mild bread or sweet snack; not a full main unless filled.",
      "zh": "适合作柔软温和面饼或甜小食；不夹馅时不是主菜。",
      "nl": "Goed als zachte milde flatbread of zoete snack, geen hoofdgerecht zonder vulling."
    },
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "imageCode": "128051",
    "imagePath": "/assets/dishes/main/128051-lefse.webp",
    "thumbPath": "/assets/dishes/thumb/128051-lefse.webp",
    "confidenceTag": "audited-remaining-batch-043",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "pannukakku",
    "metadataCode": "128052",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Pannukakku",
      "zh": "芬兰烤箱煎饼",
      "nl": "Finse ovenpannenkoek",
      "local": "Pannukakku"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Finnish oven pancake, usually cut into squares and served with jam or berries.",
      "zh": "芬兰烤箱厚煎饼，常切成方块，配果酱或莓果。",
      "nl": "Finse ovenpannenkoek, in stukken met jam of bessen."
    },
    "cookingProfile": {
      "en": "Expect a custardy, eggy pancake slice with a sweet jam side.",
      "zh": "预期是蛋奶感厚煎饼块，配甜果酱。",
      "nl": "Verwacht een custardachtige eierige pannenkoek met jam."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "dessert"
      ],
      "description": {
        "en": "A Finnish home-style pancake dessert or cafe snack.",
        "zh": "芬兰家常煎饼甜点或咖啡馆小食。",
        "nl": "Een Finse huiselijke pannenkoek als dessert of cafésnack."
      }
    },
    "composition": [
      [
        "pancake-batter",
        55,
        "oven pancake"
      ],
      [
        "egg",
        15,
        "custardy structure"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "fruit-sauce-or-caramel",
        15,
        "jam side"
      ],
      [
        "sugar",
        5,
        "sweetness"
      ]
    ],
    "distinctiveFlavorSources": [
      "eggy pancake",
      "berry jam",
      "butter"
    ],
    "basicTaste": [
      "sweet",
      "mild",
      "eggy"
    ],
    "textureProfile": [
      "soft custardy slice",
      "light browned edges",
      "jammy side"
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
      "egg-allergy",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "A friendly sweet pancake choice if you want something simple and comforting.",
      "zh": "想吃简单舒适的甜煎饼时很友好。",
      "nl": "Een toegankelijke zoete pannenkoek als je iets eenvoudigs wilt."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "imageCode": "128052",
    "imagePath": "/assets/dishes/main/128052-pannukakku.webp",
    "thumbPath": "/assets/dishes/thumb/128052-pannukakku.webp",
    "confidenceTag": "audited-remaining-batch-043",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "poronkaristys",
    "metadataCode": "128053",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Poronkäristys",
      "zh": "芬兰炒驯鹿肉",
      "nl": "Gebakken rendiervlees",
      "local": "Poronkäristys"
    },
    "category": "meat",
    "cookingMethods": [
      "fried",
      "simmered"
    ],
    "shortDescription": {
      "en": "Finnish sautéed reindeer slices served with mashed potatoes and lingonberry jam.",
      "zh": "芬兰薄片驯鹿肉炒/炖后配土豆泥和越橘果酱。",
      "nl": "Fins gebakken rendiervlees met aardappelpuree en vossenbessenjam."
    },
    "cookingProfile": {
      "en": "Expect lean, slightly gamey meat with creamy mash and sweet-tart jam.",
      "zh": "预期是偏瘦、轻野味的肉，配奶香土豆泥和酸甜果酱。",
      "nl": "Mager licht wild vlees met romige puree en zoetzure jam."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "meat"
      ],
      "description": {
        "en": "A Lapland-associated dish where reindeer is the main identity.",
        "zh": "与拉普兰相关的代表菜，核心是驯鹿肉。",
        "nl": "Een gerecht uit Lapland waarin rendier centraal staat."
      }
    },
    "composition": [
      [
        "reindeer",
        55,
        "sautéed meat"
      ],
      [
        "potato",
        25,
        "mash"
      ],
      [
        "lingonberry-jam",
        10,
        "sweet-tart side"
      ],
      [
        "butter",
        5,
        "richness"
      ],
      [
        "broth",
        5,
        "light gravy"
      ]
    ],
    "distinctiveFlavorSources": [
      "reindeer",
      "lingonberry",
      "butter gravy"
    ],
    "basicTaste": [
      "savory",
      "gamey",
      "sweet-tart"
    ],
    "textureProfile": [
      "thin meat slices",
      "smooth mash",
      "jammy side"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "regional-dish",
      "meat"
    ],
    "avoidIfTags": [
      "dairy-free",
      "avoids-gamey-meat"
    ],
    "orderVerdict": {
      "en": "Good for trying Nordic game meat; skip if reindeer or gamey flavor feels uncomfortable.",
      "zh": "想尝北欧野味肉时适合；不接受驯鹿或野味感则避开。",
      "nl": "Goed om Noordse wildsmaak te proberen; sla over als rendier ongemakkelijk voelt."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 3,
    "imageCode": "128053",
    "imagePath": "/assets/dishes/main/128053-poronkaristys.webp",
    "thumbPath": "/assets/dishes/thumb/128053-poronkaristys.webp",
    "confidenceTag": "audited-remaining-batch-043",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "karjalanpaisti",
    "metadataCode": "128054",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Karjalanpaisti",
      "zh": "芬兰卡累利阿炖肉",
      "nl": "Karelische stoofpot",
      "local": "Karjalanpaisti"
    },
    "category": "meat",
    "cookingMethods": [
      "braised",
      "simmered"
    ],
    "shortDescription": {
      "en": "Finnish Karelian stew of beef and pork with root vegetables, served simply with potatoes.",
      "zh": "芬兰卡累利阿炖肉，用牛肉和猪肉配根茎蔬菜慢炖，常配土豆。",
      "nl": "Finse Karelische stoofpot van rund en varken met wortelgroenten."
    },
    "cookingProfile": {
      "en": "It is mild, brothy, and meat-forward rather than tomatoey or spicy.",
      "zh": "味道温和、汤汁感明显、肉味为主，不是番茄或辣味炖菜。",
      "nl": "Mild, bouillonachtig en vlezig, niet tomatig of pittig."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "comfort-food"
      ],
      "description": {
        "en": "A Finnish-Karelian comfort stew with straightforward meat and broth flavors.",
        "zh": "芬兰卡累利阿舒适炖菜，重点是肉和清汤香。",
        "nl": "Een Fins-Karelische stoofpot met eenvoudige vlees- en bouillonsmaak."
      }
    },
    "composition": [
      [
        "beef",
        35,
        "stew meat"
      ],
      [
        "pork",
        25,
        "stew meat"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "carrot",
        10,
        "root vegetable"
      ],
      [
        "onion",
        5,
        "aromatic"
      ],
      [
        "broth",
        5,
        "stew liquid"
      ]
    ],
    "distinctiveFlavorSources": [
      "beef and pork",
      "clear broth",
      "root vegetables"
    ],
    "basicTaste": [
      "savory",
      "mild",
      "meaty"
    ],
    "textureProfile": [
      "tender meat chunks",
      "soft vegetables",
      "light broth"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food",
      "meat"
    ],
    "avoidIfTags": [
      "pork-free"
    ],
    "orderVerdict": {
      "en": "A gentle hearty stew if you want meat without heavy spice or cream.",
      "zh": "想吃不辣不奶油的温和肉类炖菜时适合。",
      "nl": "Een milde stevige stoofpot zonder veel kruiden of room."
    },
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "imageCode": "128054",
    "imagePath": "/assets/dishes/main/128054-karjalanpaisti.webp",
    "thumbPath": "/assets/dishes/thumb/128054-karjalanpaisti.webp",
    "confidenceTag": "audited-remaining-batch-043",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "silakkapihvit",
    "metadataCode": "128055",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Silakkapihvit",
      "zh": "芬兰煎鲱鱼排",
      "nl": "Gebakken Oostzeeharing",
      "local": "Silakkapihvit"
    },
    "category": "seafood",
    "cookingMethods": [
      "fried"
    ],
    "shortDescription": {
      "en": "Finnish fried Baltic herring fillets, often served with potatoes, dill, and lemon.",
      "zh": "芬兰煎波罗的海鲱鱼片，常配土豆、莳萝和柠檬。",
      "nl": "Finse gebakken Oostzeeharingfilets met aardappel, dille en citroen."
    },
    "cookingProfile": {
      "en": "Expect small crisp-edged fish fillets with a clear briny herring flavor.",
      "zh": "预期是小片鱼排，边缘煎脆，有明显鲱鱼咸鲜味。",
      "nl": "Kleine knapperige visfilets met duidelijke haringsmaak."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "seafood"
      ],
      "description": {
        "en": "A Finnish everyday fish plate for diners who like small oily fish.",
        "zh": "芬兰日常鱼类菜，适合喜欢小型油脂鱼的人。",
        "nl": "Een Finse dagelijkse visschotel voor liefhebbers van kleine vette vis."
      }
    },
    "composition": [
      [
        "herring",
        55,
        "fried fillets"
      ],
      [
        "potato",
        25,
        "side"
      ],
      [
        "butter",
        10,
        "frying richness"
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
      ]
    ],
    "distinctiveFlavorSources": [
      "fried herring",
      "dill",
      "lemon"
    ],
    "basicTaste": [
      "salty",
      "briny",
      "buttery"
    ],
    "textureProfile": [
      "crisp fish edges",
      "soft potato",
      "flaky fillets"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-dairy"
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
      "dairy-free",
      "avoids-oily-fish"
    ],
    "orderVerdict": {
      "en": "Good if you enjoy small briny fish; skip if herring sounds too strong.",
      "zh": "喜欢咸鲜小鱼时适合；不爱鲱鱼味则避开。",
      "nl": "Goed als je kleine zilte vis lust; sla over als haring te sterk klinkt."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 2,
    "imageCode": "128055",
    "imagePath": "/assets/dishes/main/128055-silakkapihvit.webp",
    "thumbPath": "/assets/dishes/thumb/128055-silakkapihvit.webp",
    "confidenceTag": "audited-remaining-batch-043",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "hernekeitto",
    "metadataCode": "128056",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Hernekeitto",
      "zh": "芬兰豌豆汤",
      "nl": "Finse erwtensoep",
      "local": "Hernekeitto"
    },
    "category": "soup",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Finnish pea soup, usually thick and simple, often with ham or pork and mustard.",
      "zh": "芬兰豌豆汤，通常浓稠朴素，常有火腿或猪肉和芥末。",
      "nl": "Finse erwtensoep, dik en eenvoudig, vaak met ham of varken en mosterd."
    },
    "cookingProfile": {
      "en": "Expect a filling, mild pea soup more earthy than spicy.",
      "zh": "预期是饱腹、温和的豌豆汤，偏豆香土味，不辣。",
      "nl": "Een vullende milde erwtensoep, aards eerder dan pittig."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-dish",
        "comfort-food"
      ],
      "description": {
        "en": "A common Finnish soup and cafeteria-style comfort choice.",
        "zh": "芬兰常见汤品和食堂式舒适选择。",
        "nl": "Een gewone Finse soep en kantineachtige comfortkeuze."
      }
    },
    "composition": [
      [
        "peas",
        45,
        "pea base"
      ],
      [
        "pork",
        20,
        "ham or pork"
      ],
      [
        "broth",
        20,
        "soup liquid"
      ],
      [
        "mustard",
        5,
        "condiment",
        "seasoning"
      ],
      [
        "rye-bread",
        10,
        "bread side"
      ]
    ],
    "distinctiveFlavorSources": [
      "peas",
      "pork",
      "mustard"
    ],
    "basicTaste": [
      "savory",
      "earthy",
      "mild"
    ],
    "textureProfile": [
      "thick soup",
      "soft peas",
      "small meat pieces"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "soup",
      "comfort-food"
    ],
    "avoidIfTags": [
      "pork-free",
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "A filling mild soup; good if pea soup with pork sounds comforting.",
      "zh": "温和饱腹汤；喜欢豌豆汤配猪肉会适合。",
      "nl": "Een vullende milde soep als erwtensoep met varken goed klinkt."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "imageCode": "128056",
    "imagePath": "/assets/dishes/main/128056-hernekeitto.webp",
    "thumbPath": "/assets/dishes/thumb/128056-hernekeitto.webp",
    "confidenceTag": "audited-remaining-batch-043",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "rakmacka",
    "metadataCode": "128057",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Räkmacka",
      "zh": "瑞典虾开放三明治",
      "nl": "Zweedse garnalensandwich",
      "local": "Räkmacka"
    },
    "category": "seafood",
    "cookingMethods": [
      "assembled",
      "chilled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "Swedish open shrimp sandwich with boiled egg, lettuce, mayonnaise, dill, and lemon.",
      "zh": "瑞典开放式虾三明治，配水煮蛋、生菜、蛋黄酱、莳萝和柠檬。",
      "nl": "Zweedse open garnalensandwich met ei, sla, mayonaise, dille en citroen."
    },
    "cookingProfile": {
      "en": "It is cold, fresh, creamy, and seafood-forward, often eaten as lunch.",
      "zh": "冷食、清爽带奶油感，虾味突出，常作午餐。",
      "nl": "Koud, fris, romig en garnalengericht, vaak als lunch."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "seafood"
      ],
      "description": {
        "en": "A Swedish cafe classic and approachable seafood sandwich.",
        "zh": "瑞典咖啡馆经典，容易接受的海鲜三明治。",
        "nl": "Een Zweedse caféklassieker en toegankelijke zeevruchtensandwich."
      }
    },
    "composition": [
      [
        "shrimp",
        45,
        "shrimp topping"
      ],
      [
        "bread",
        20,
        "base"
      ],
      [
        "egg",
        15,
        "boiled egg"
      ],
      [
        "mayonnaise",
        10,
        "creamy sauce"
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
      ]
    ],
    "distinctiveFlavorSources": [
      "shrimp",
      "dill",
      "lemon mayonnaise"
    ],
    "basicTaste": [
      "fresh",
      "creamy",
      "briny"
    ],
    "textureProfile": [
      "tender shrimp",
      "soft egg",
      "crisp lettuce"
    ],
    "riskFlags": [
      "contains-shellfish",
      "contains-egg",
      "contains-gluten"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "seafood",
      "lunch"
    ],
    "avoidIfTags": [
      "shellfish-allergy",
      "egg-allergy",
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "A strong lunch choice if you like cold shrimp and creamy open sandwiches.",
      "zh": "喜欢冷虾和奶油感开放三明治时很适合。",
      "nl": "Een sterke lunchkeuze als je koude garnalen en romige open sandwiches lust."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "imageCode": "128057",
    "imagePath": "/assets/dishes/main/128057-rakmacka.webp",
    "thumbPath": "/assets/dishes/thumb/128057-rakmacka.webp",
    "confidenceTag": "audited-remaining-batch-043",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "silltallrik",
    "metadataCode": "128058",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Silltallrik",
      "zh": "瑞典腌鲱鱼拼盘",
      "nl": "Zweedse haringplank",
      "local": "Silltallrik"
    },
    "category": "seafood",
    "cookingMethods": [
      "chilled",
      "assembled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "Swedish cold herring plate with pickled herring, potatoes, sour cream, onion, and dill.",
      "zh": "瑞典冷食腌鲱鱼拼盘，配土豆、酸奶油、洋葱和莳萝。",
      "nl": "Zweedse koude haringplank met aardappel, zure room, ui en dille."
    },
    "cookingProfile": {
      "en": "Expect briny, tangy fish in small portions with cooling dairy and potatoes.",
      "zh": "预期是咸酸鲱鱼小份拼盘，酸奶油和土豆降低冲击。",
      "nl": "Zilte zurige vis in kleine porties met verkoelende zuivel en aardappel."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "seafood"
      ],
      "description": {
        "en": "A classic Swedish herring plate, often ordered as a starter or buffet item.",
        "zh": "经典瑞典鲱鱼拼盘，常作前菜或自助餐项。",
        "nl": "Een klassieke Zweedse haringplank, vaak starter of buffetitem."
      }
    },
    "composition": [
      [
        "herring",
        45,
        "pickled herring"
      ],
      [
        "potato",
        20,
        "boiled side"
      ],
      [
        "sour-cream",
        15,
        "cooling side"
      ],
      [
        "onion",
        10,
        "sharp garnish"
      ],
      [
        "dill",
        5,
        "herb",
        "seasoning"
      ],
      [
        "rye-bread",
        5,
        "crispbread side"
      ]
    ],
    "distinctiveFlavorSources": [
      "pickled herring",
      "dill",
      "sour cream"
    ],
    "basicTaste": [
      "salty",
      "sour",
      "briny"
    ],
    "textureProfile": [
      "silky herring",
      "soft potato",
      "crisp bread"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-dairy",
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
      "dairy-free",
      "gluten-free",
      "avoids-pickled-fish"
    ],
    "orderVerdict": {
      "en": "Choose it if you like pickled fish; it is not a neutral seafood plate.",
      "zh": "喜欢腌鱼时适合；这不是中性海鲜拼盘。",
      "nl": "Kies dit als je ingelegde vis lust; geen neutrale zeevruchtenschotel."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 3,
    "imageCode": "128058",
    "imagePath": "/assets/dishes/main/128058-silltallrik.webp",
    "thumbPath": "/assets/dishes/thumb/128058-silltallrik.webp",
    "confidenceTag": "audited-remaining-batch-043",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "gravlax-toast",
    "metadataCode": "128059",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Gravlax Toast",
      "zh": "莳萝腌三文鱼吐司",
      "nl": "Gravlax toast",
      "local": "Gravlax toast"
    },
    "category": "seafood",
    "cookingMethods": [
      "assembled",
      "chilled"
    ],
    "servingTemperature": "cold-or-cool",
    "rawnessLevel": "cured-raw",
    "shortDescription": {
      "en": "Toast topped with cured salmon, dill, mustard sauce, lemon, and sometimes capers.",
      "zh": "吐司上铺腌三文鱼、莳萝、芥末酱、柠檬，有时加酸豆。",
      "nl": "Toast met gepekelde zalm, dille, mosterdsaus, citroen en soms kappertjes."
    },
    "cookingProfile": {
      "en": "It gives the silky cured-salmon experience in a smaller toast format.",
      "zh": "以小吐司形式呈现丝滑腌三文鱼体验。",
      "nl": "Geeft de zijdezachte gravlaxervaring in toastvorm."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "seafood"
      ],
      "description": {
        "en": "A Nordic starter that turns gravlax into an easy open-toast order.",
        "zh": "北欧前菜，把 gravlax 做成容易点的开放吐司。",
        "nl": "Een Noordse starter die gravlax toegankelijk maakt als toast."
      }
    },
    "composition": [
      [
        "salmon",
        55,
        "cured salmon"
      ],
      [
        "bread",
        20,
        "toast"
      ],
      [
        "mustard",
        10,
        "mustard sauce",
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
      ],
      [
        "capers",
        5,
        "briny garnish"
      ]
    ],
    "distinctiveFlavorSources": [
      "cured salmon",
      "dill mustard sauce",
      "lemon"
    ],
    "basicTaste": [
      "salty",
      "fresh",
      "sweet-savory"
    ],
    "textureProfile": [
      "silky salmon",
      "crisp toast",
      "creamy sauce"
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
      "starter",
      "seafood"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "avoids-raw-fish",
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "A good starter if you want cured salmon without a large fish plate.",
      "zh": "想吃腌三文鱼但不想点大鱼盘时适合。",
      "nl": "Een goede starter voor gravlax zonder grote visschotel."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "imageCode": "128059",
    "imagePath": "/assets/dishes/main/128059-gravlax-toast.webp",
    "thumbPath": "/assets/dishes/thumb/128059-gravlax-toast.webp",
    "confidenceTag": "audited-remaining-batch-043",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "rabarberpaj",
    "metadataCode": "128060",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Rabarberpaj",
      "zh": "瑞典大黄派",
      "nl": "Rabarbertaart",
      "local": "Rabarberpaj"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Swedish rhubarb crumble pie or tart, usually served warm with vanilla sauce or cream.",
      "zh": "瑞典大黄酥粒派或挞，通常温热上桌，配香草酱或奶油。",
      "nl": "Zweedse rabarbertaart of crumble, vaak warm met vanillesaus of room."
    },
    "cookingProfile": {
      "en": "Expect a sweet-tart fruit dessert with a buttery crumb rather than a cream cake.",
      "zh": "预期是酸甜水果甜品，带黄油酥粒，不是奶油蛋糕。",
      "nl": "Zoetzuur fruitdessert met boterige kruimel, geen roomcake."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "dessert"
      ],
      "description": {
        "en": "A Scandinavian spring-summer dessert recognized by rhubarb tartness.",
        "zh": "北欧春夏甜点，重点是大黄的酸味。",
        "nl": "Een Scandinavisch lente-zomerdessert met rabarberzuur."
      }
    },
    "composition": [
      [
        "rhubarb",
        45,
        "tart filling"
      ],
      [
        "wheat-flour",
        25,
        "crumble or crust"
      ],
      [
        "butter",
        15,
        "crumb richness"
      ],
      [
        "sugar",
        10,
        "sweetness"
      ],
      [
        "vanilla-custard",
        5,
        "sauce"
      ]
    ],
    "distinctiveFlavorSources": [
      "rhubarb tartness",
      "buttery crumble",
      "vanilla sauce"
    ],
    "basicTaste": [
      "sweet-tart",
      "fruity",
      "buttery"
    ],
    "textureProfile": [
      "soft rhubarb",
      "crisp crumble",
      "smooth sauce"
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
      "dessert",
      "lighter-choice"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "Good if you want a tart fruit dessert; skip if you prefer chocolate or cream-heavy sweets.",
      "zh": "想吃酸甜水果甜点时适合；偏好巧克力或厚奶油则不是首选。",
      "nl": "Goed voor een friszuur fruitdessert; minder voor chocolade of zware room."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "imageCode": "128060",
    "imagePath": "/assets/dishes/main/128060-rabarberpaj.webp",
    "thumbPath": "/assets/dishes/thumb/128060-rabarberpaj.webp",
    "confidenceTag": "audited-remaining-batch-043",
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  }
];

export const europeDepthDishes = europeDepthDishConfigs.map((config) => starterDish(config));
