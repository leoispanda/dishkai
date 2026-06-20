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
    "cuisineId": "dutch",
    "names": {
      "en": "Boerenkoolstamppot",
      "zh": "羽衣甘蓝土豆泥配香肠",
      "nl": "Boerenkoolstamppot",
      "local": "Boerenkoolstamppot"
    },
    "category": "potato",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Boerenkoolstamppot is a common Dutch menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "羽衣甘蓝土豆泥配香肠是常见荷兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Boerenkoolstamppot is een veelvoorkomend Nederlands menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with potato dish, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现potato dish，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met potato dish; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Dutch restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见荷兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Nederlands restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "potato",
        55,
        "base"
      ],
      [
        "cream",
        15,
        "richness"
      ],
      [
        "cheese",
        10,
        "richness"
      ],
      [
        "butter",
        10,
        "richness"
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
      "soft potato",
      "browned or creamy edges"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "potato"
    ],
    "avoidIfTags": [
      "dairy-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, hearty profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、hearty的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, hearty je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "hete-bliksem",
    "metadataCode": "102033",
    "cuisineId": "dutch",
    "names": {
      "en": "Hete Bliksem",
      "zh": "苹果土豆泥",
      "nl": "Hete Bliksem",
      "local": "Hete Bliksem"
    },
    "category": "potato",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Hete Bliksem is a common Dutch menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "苹果土豆泥是常见荷兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Hete Bliksem is een veelvoorkomend Nederlands menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with potato dish, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现potato dish，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met potato dish; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Dutch restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见荷兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Nederlands restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "potato",
        55,
        "base"
      ],
      [
        "cream",
        15,
        "richness"
      ],
      [
        "cheese",
        10,
        "richness"
      ],
      [
        "butter",
        10,
        "richness"
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
      "soft potato",
      "browned or creamy edges"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "potato"
    ],
    "avoidIfTags": [
      "dairy-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, hearty profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、hearty的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, hearty je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "kapucijners-met-spek",
    "metadataCode": "102034",
    "cuisineId": "dutch",
    "names": {
      "en": "Kapucijners met Spek",
      "zh": "荷兰豌豆培根",
      "nl": "Kapucijners met Spek",
      "local": "Kapucijners met Spek"
    },
    "category": "pork",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Kapucijners met Spek is a common Dutch menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "荷兰豌豆培根是常见荷兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Kapucijners met Spek is een veelvoorkomend Nederlands menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with pork or cured meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现pork or cured meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met pork or cured meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Dutch restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见荷兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Nederlands restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "pork",
        50,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "cabbage",
        10,
        "body"
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
      ],
      [
        "parsley",
        10,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork",
      "pepper",
      "browned edges"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "savory meat",
      "browned edges"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "pork"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "draadjesvlees",
    "metadataCode": "102035",
    "cuisineId": "dutch",
    "names": {
      "en": "Draadjesvlees",
      "zh": "荷兰慢炖牛肉丝",
      "nl": "Draadjesvlees",
      "local": "Draadjesvlees"
    },
    "category": "stew",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Draadjesvlees is a common Dutch menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "荷兰慢炖牛肉丝是常见荷兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Draadjesvlees is een veelvoorkomend Nederlands menu-item, beschreven voor snelle bestelkeuzes."
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
        "en": "A likely Dutch restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见荷兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Nederlands restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
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
    "id": "gehaktbal",
    "metadataCode": "102036",
    "cuisineId": "dutch",
    "names": {
      "en": "Gehaktbal",
      "zh": "荷兰肉丸",
      "nl": "Gehaktbal",
      "local": "Gehaktbal"
    },
    "category": "meat",
    "cookingMethods": [
      "braised"
    ],
    "shortDescription": {
      "en": "Gehaktbal is a common Dutch menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "荷兰肉丸是常见荷兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Gehaktbal is een veelvoorkomend Nederlands menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with tender meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现tender meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met tender meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Dutch restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见荷兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Nederlands restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "beef",
        45,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "mixed-vegetables",
        15,
        "body"
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
      "herbs",
      "sauce",
      "savory base"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "tender meat",
      "saucy or browned edges"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "meat"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "slavink",
    "metadataCode": "102037",
    "cuisineId": "dutch",
    "names": {
      "en": "Slavink",
      "zh": "培根包肉卷",
      "nl": "Slavink",
      "local": "Slavink"
    },
    "category": "pork",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Slavink is a common Dutch menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "培根包肉卷是常见荷兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Slavink is een veelvoorkomend Nederlands menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with pork or cured meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现pork or cured meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met pork or cured meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Dutch restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见荷兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Nederlands restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "pork",
        50,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "cabbage",
        10,
        "body"
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
      ],
      [
        "parsley",
        10,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork",
      "pepper",
      "browned edges"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "savory meat",
      "browned edges"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "pork"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "rookworst",
    "metadataCode": "102038",
    "cuisineId": "dutch",
    "names": {
      "en": "Rookworst",
      "zh": "荷兰烟熏香肠",
      "nl": "Rookworst",
      "local": "Rookworst"
    },
    "category": "pork",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Rookworst is a common Dutch menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "荷兰烟熏香肠是常见荷兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Rookworst is een veelvoorkomend Nederlands menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with pork or cured meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现pork or cured meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met pork or cured meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Dutch restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见荷兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Nederlands restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "pork",
        50,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "cabbage",
        10,
        "body"
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
      ],
      [
        "parsley",
        10,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork",
      "pepper",
      "browned edges"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "savory meat",
      "browned edges"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "pork"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
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
    "cuisineId": "dutch",
    "names": {
      "en": "Mosselen Naturel",
      "zh": "荷兰清煮贻贝",
      "nl": "Mosselen Naturel",
      "local": "Mosselen Naturel"
    },
    "category": "seafood",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Mosselen Naturel is a common Dutch menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "荷兰清煮贻贝是常见荷兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Mosselen Naturel is een veelvoorkomend Nederlands menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fish or seafood, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fish or seafood，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fish or seafood; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Dutch restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见荷兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Nederlands restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "fish-fillet",
        40,
        "main"
      ],
      [
        "mussels",
        20,
        "seafood"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "lemon",
        10,
        "brightness"
      ],
      [
        "olive-oil",
        10,
        "finish",
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
      "tender seafood",
      "bright savory finish"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-shellfish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "seafood"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "shellfish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, briny profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、briny的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, briny je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "asperges-met-ham-en-ei",
    "metadataCode": "102041",
    "cuisineId": "dutch",
    "names": {
      "en": "Asperges met Ham en Ei",
      "zh": "白芦笋火腿鸡蛋",
      "nl": "Asperges met Ham en Ei",
      "local": "Asperges met Ham en Ei"
    },
    "category": "starter",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Asperges met Ham en Ei is a common Dutch menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "白芦笋火腿鸡蛋是常见荷兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Asperges met Ham en Ei is een veelvoorkomend Nederlands menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with small starter, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现small starter，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met small starter; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Dutch restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见荷兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Nederlands restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "bread",
        30,
        "base"
      ],
      [
        "cheese",
        20,
        "richness"
      ],
      [
        "mixed-vegetables",
        20,
        "body"
      ],
      [
        "ham",
        15,
        "main"
      ],
      [
        "olive-oil",
        10,
        "finish",
        "seasoning"
      ],
      [
        "herbs",
        5,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "herbs",
      "sauce",
      "savory base"
    ],
    "basicTaste": [
      "savory",
      "mild"
    ],
    "textureProfile": [
      "small bites",
      "savory finish"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "starter"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "broodje-bal",
    "metadataCode": "102042",
    "cuisineId": "dutch",
    "names": {
      "en": "Broodje Bal",
      "zh": "荷兰肉丸三明治",
      "nl": "Broodje Bal",
      "local": "Broodje Bal"
    },
    "category": "meat",
    "cookingMethods": [
      "braised"
    ],
    "shortDescription": {
      "en": "Broodje Bal is a common Dutch menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "荷兰肉丸三明治是常见荷兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Broodje Bal is een veelvoorkomend Nederlands menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with tender meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现tender meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met tender meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Dutch restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见荷兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Nederlands restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "beef",
        45,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "mixed-vegetables",
        15,
        "body"
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
      "herbs",
      "sauce",
      "savory base"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "tender meat",
      "saucy or browned edges"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "meat"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "broodje-haring",
    "metadataCode": "102043",
    "cuisineId": "dutch",
    "names": {
      "en": "Broodje Haring",
      "zh": "生鲱鱼三明治",
      "nl": "Broodje Haring",
      "local": "Broodje Haring"
    },
    "category": "fish",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Broodje Haring is a common Dutch menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "生鲱鱼三明治是常见荷兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Broodje Haring is een veelvoorkomend Nederlands menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fish, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fish，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fish; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Dutch restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见荷兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Nederlands restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "fish-fillet",
        60,
        "main"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "mixed-vegetables",
        10,
        "body"
      ],
      [
        "lemon",
        5,
        "brightness"
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
      "mild"
    ],
    "textureProfile": [
      "tender fish",
      "light flaky bite"
    ],
    "riskFlags": [
      "contains-fish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "fish"
    ],
    "avoidIfTags": [
      "fish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "broodje-kroket",
    "metadataCode": "102044",
    "cuisineId": "dutch",
    "names": {
      "en": "Broodje Kroket",
      "zh": "炸肉卷三明治",
      "nl": "Broodje Kroket",
      "local": "Broodje Kroket"
    },
    "category": "fried",
    "cookingMethods": [
      "fried"
    ],
    "shortDescription": {
      "en": "Broodje Kroket is a common Dutch menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "炸肉卷三明治是常见荷兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Broodje Kroket is een veelvoorkomend Nederlands menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fried snack or main, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fried snack or main，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fried snack or main; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Dutch restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见荷兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Nederlands restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "coating"
      ],
      [
        "potato",
        25,
        "body"
      ],
      [
        "fish-fillet",
        20,
        "main"
      ],
      [
        "egg",
        10,
        "binder"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "sea-salt",
        10,
        "seasoning",
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
      "rich"
    ],
    "textureProfile": [
      "crisp outside",
      "soft center"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-fish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "fried"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "broodje-shoarma",
    "metadataCode": "102045",
    "cuisineId": "dutch",
    "names": {
      "en": "Broodje Shoarma",
      "zh": "荷式沙威玛面包",
      "nl": "Broodje Shoarma",
      "local": "Broodje Shoarma"
    },
    "category": "meat",
    "cookingMethods": [
      "braised"
    ],
    "shortDescription": {
      "en": "Broodje Shoarma is a common Dutch menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "荷式沙威玛面包是常见荷兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Broodje Shoarma is een veelvoorkomend Nederlands menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with tender meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现tender meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met tender meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Dutch restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见荷兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Nederlands restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "beef",
        45,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "mixed-vegetables",
        15,
        "body"
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
      "herbs",
      "sauce",
      "savory base"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "tender meat",
      "saucy or browned edges"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "meat"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "uitsmijter-ham-kaas",
    "metadataCode": "102046",
    "cuisineId": "dutch",
    "names": {
      "en": "Uitsmijter Ham Kaas",
      "zh": "火腿奶酪煎蛋吐司",
      "nl": "Uitsmijter Ham Kaas",
      "local": "Uitsmijter Ham Kaas"
    },
    "category": "starter",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Uitsmijter Ham Kaas is a common Dutch menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "火腿奶酪煎蛋吐司是常见荷兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Uitsmijter Ham Kaas is een veelvoorkomend Nederlands menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with small starter, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现small starter，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met small starter; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Dutch restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见荷兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Nederlands restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "bread",
        30,
        "base"
      ],
      [
        "cheese",
        20,
        "richness"
      ],
      [
        "mixed-vegetables",
        20,
        "body"
      ],
      [
        "ham",
        15,
        "main"
      ],
      [
        "olive-oil",
        10,
        "finish",
        "seasoning"
      ],
      [
        "herbs",
        5,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "herbs",
      "sauce",
      "savory base"
    ],
    "basicTaste": [
      "savory",
      "mild"
    ],
    "textureProfile": [
      "small bites",
      "savory finish"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "starter"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "huzarensalade",
    "metadataCode": "102047",
    "cuisineId": "dutch",
    "names": {
      "en": "Huzarensalade",
      "zh": "荷兰土豆肉丁沙拉",
      "nl": "Huzarensalade",
      "local": "Huzarensalade"
    },
    "category": "salad",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Huzarensalade is a common Dutch menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "荷兰土豆肉丁沙拉是常见荷兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Huzarensalade is een veelvoorkomend Nederlands menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fresh salad, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fresh salad，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fresh salad; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Dutch restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见荷兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Nederlands restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "mixed-vegetables",
        45,
        "base"
      ],
      [
        "tomato",
        15,
        "body"
      ],
      [
        "cheese",
        15,
        "richness"
      ],
      [
        "olive-oil",
        10,
        "dressing",
        "seasoning"
      ],
      [
        "vinegar",
        10,
        "dressing",
        "seasoning"
      ],
      [
        "herbs",
        5,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "herbs",
      "sauce",
      "savory base"
    ],
    "basicTaste": [
      "savory",
      "fresh"
    ],
    "textureProfile": [
      "crisp vegetables",
      "bright dressing"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "salad"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, fresh profile sounds appealing.",
      "zh": "如果你想要savory、fresh的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, fresh je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "zalmsalade",
    "metadataCode": "102048",
    "cuisineId": "dutch",
    "names": {
      "en": "Zalmsalade",
      "zh": "荷兰三文鱼沙拉",
      "nl": "Zalmsalade",
      "local": "Zalmsalade"
    },
    "category": "salad",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Zalmsalade is a common Dutch menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "荷兰三文鱼沙拉是常见荷兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Zalmsalade is een veelvoorkomend Nederlands menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fresh salad, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fresh salad，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fresh salad; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Dutch restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见荷兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Nederlands restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "mixed-vegetables",
        45,
        "base"
      ],
      [
        "tomato",
        15,
        "body"
      ],
      [
        "cheese",
        15,
        "richness"
      ],
      [
        "olive-oil",
        10,
        "dressing",
        "seasoning"
      ],
      [
        "vinegar",
        10,
        "dressing",
        "seasoning"
      ],
      [
        "herbs",
        5,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "herbs",
      "sauce",
      "savory base"
    ],
    "basicTaste": [
      "savory",
      "fresh"
    ],
    "textureProfile": [
      "crisp vegetables",
      "bright dressing"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "salad"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, fresh profile sounds appealing.",
      "zh": "如果你想要savory、fresh的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, fresh je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "eierbal",
    "metadataCode": "102049",
    "cuisineId": "dutch",
    "names": {
      "en": "Eierbal",
      "zh": "荷兰炸蛋球",
      "nl": "Eierbal",
      "local": "Eierbal"
    },
    "category": "fried",
    "cookingMethods": [
      "fried"
    ],
    "shortDescription": {
      "en": "Eierbal is a common Dutch menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "荷兰炸蛋球是常见荷兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Eierbal is een veelvoorkomend Nederlands menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fried snack or main, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fried snack or main，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fried snack or main; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Dutch restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见荷兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Nederlands restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "coating"
      ],
      [
        "potato",
        25,
        "body"
      ],
      [
        "fish-fillet",
        20,
        "main"
      ],
      [
        "egg",
        10,
        "binder"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "sea-salt",
        10,
        "seasoning",
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
      "rich"
    ],
    "textureProfile": [
      "crisp outside",
      "soft center"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-fish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "fried"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
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
      "en": "Appelflap is a common Dutch menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "荷兰苹果酥角是常见荷兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Appelflap is een veelvoorkomend Nederlands menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Dutch restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见荷兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Nederlands restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
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
      "en": "Boterkoek is a common Dutch menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "荷兰黄油蛋糕是常见荷兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Boterkoek is een veelvoorkomend Nederlands menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Dutch restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见荷兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Nederlands restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "speculaas",
    "metadataCode": "102055",
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
      "en": "Speculaas is a common Dutch menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "荷兰香料饼干是常见荷兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Speculaas is een veelvoorkomend Nederlands menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Dutch restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见荷兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Nederlands restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "ontbijtkoek",
    "metadataCode": "102056",
    "cuisineId": "dutch",
    "names": {
      "en": "Ontbijtkoek",
      "zh": "荷兰早餐香料蛋糕",
      "nl": "Ontbijtkoek",
      "local": "Ontbijtkoek"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Ontbijtkoek is a common Dutch menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "荷兰早餐香料蛋糕是常见荷兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Ontbijtkoek is een veelvoorkomend Nederlands menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Dutch restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见荷兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Nederlands restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "beschuit-met-muisjes",
    "metadataCode": "102057",
    "cuisineId": "dutch",
    "names": {
      "en": "Beschuit met Muisjes",
      "zh": "荷兰糖粒脆面包",
      "nl": "Beschuit met Muisjes",
      "local": "Beschuit met Muisjes"
    },
    "category": "bread",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Beschuit met Muisjes is a common Dutch menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "荷兰糖粒脆面包是常见荷兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Beschuit met Muisjes is een veelvoorkomend Nederlands menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with baked bread or pastry, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现baked bread or pastry，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met baked bread or pastry; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Dutch restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见荷兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Nederlands restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "bread",
        45,
        "base"
      ],
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "cheese",
        15,
        "filling"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "sea-salt",
        5,
        "seasoning",
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
      "mild"
    ],
    "textureProfile": [
      "soft bread",
      "crisp edges"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "bread"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "vlaflip",
    "metadataCode": "102058",
    "cuisineId": "dutch",
    "names": {
      "en": "Vlaflip",
      "zh": "荷兰酸奶奶冻甜品",
      "nl": "Vlaflip",
      "local": "Vlaflip"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Vlaflip is a common Dutch menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "荷兰酸奶奶冻甜品是常见荷兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Vlaflip is een veelvoorkomend Nederlands menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Dutch restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见荷兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Nederlands restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "griesmeelpudding",
    "metadataCode": "102059",
    "cuisineId": "dutch",
    "names": {
      "en": "Griesmeelpudding",
      "zh": "荷兰粗麦粉布丁",
      "nl": "Griesmeelpudding",
      "local": "Griesmeelpudding"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Griesmeelpudding is a common Dutch menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "荷兰粗麦粉布丁是常见荷兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Griesmeelpudding is een veelvoorkomend Nederlands menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Dutch restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见荷兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Nederlands restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "hangop",
    "metadataCode": "102060",
    "cuisineId": "dutch",
    "names": {
      "en": "Hangop",
      "zh": "荷兰滤酸奶甜品",
      "nl": "Hangop",
      "local": "Hangop"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Hangop is a common Dutch menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "荷兰滤酸奶甜品是常见荷兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Hangop is een veelvoorkomend Nederlands menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Dutch restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见荷兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Nederlands restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "jodenkoek",
    "metadataCode": "102061",
    "cuisineId": "dutch",
    "names": {
      "en": "Jodenkoek",
      "zh": "荷兰黄油圆饼",
      "nl": "Jodenkoek",
      "local": "Jodenkoek"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Jodenkoek is a common Dutch menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "荷兰黄油圆饼是常见荷兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Jodenkoek is een veelvoorkomend Nederlands menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Dutch restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见荷兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Nederlands restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
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
      "nl": "Tiropita",
      "local": "Tiropita"
    },
    "category": "pastry",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Tiropita is a common Greek menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "希腊奶酪派是常见希腊菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Tiropita is een veelvoorkomend Grieks menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with savory pastry, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现savory pastry，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met savory pastry; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Greek restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见希腊菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Grieks restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "pastry-crust",
        40,
        "base"
      ],
      [
        "cheese",
        20,
        "filling"
      ],
      [
        "egg",
        15,
        "binder"
      ],
      [
        "mixed-vegetables",
        10,
        "body"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "black-pepper",
        5,
        "seasoning",
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
      "buttery"
    ],
    "textureProfile": [
      "flaky pastry",
      "soft filling"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "contains-egg"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "pastry"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this savory, buttery profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、buttery的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, buttery je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "gigantes-plaki",
    "metadataCode": "104060",
    "cuisineId": "greek",
    "names": {
      "en": "Gigantes Plaki",
      "zh": "番茄烤大白豆",
      "nl": "Gigantes Plaki",
      "local": "Gigantes Plaki"
    },
    "category": "stew",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Gigantes Plaki is a common Greek menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "番茄烤大白豆是常见希腊菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Gigantes Plaki is een veelvoorkomend Grieks menu-item, beschreven voor snelle bestelkeuzes."
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
        "en": "A likely Greek restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见希腊菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Grieks restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
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
    "id": "escalivada",
    "metadataCode": "105031",
    "cuisineId": "spanish",
    "names": {
      "en": "Escalivada",
      "zh": "加泰罗尼亚烤蔬菜",
      "nl": "Escalivada",
      "local": "Escalivada"
    },
    "category": "salad",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Escalivada is a common Spanish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "加泰罗尼亚烤蔬菜是常见西班牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Escalivada is een veelvoorkomend Spaans menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fresh salad, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fresh salad，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fresh salad; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Spanish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见西班牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Spaans restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "mixed-vegetables",
        45,
        "base"
      ],
      [
        "tomato",
        15,
        "body"
      ],
      [
        "cheese",
        15,
        "richness"
      ],
      [
        "olive-oil",
        10,
        "dressing",
        "seasoning"
      ],
      [
        "vinegar",
        10,
        "dressing",
        "seasoning"
      ],
      [
        "herbs",
        5,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "herbs",
      "sauce",
      "savory base"
    ],
    "basicTaste": [
      "savory",
      "fresh"
    ],
    "textureProfile": [
      "crisp vegetables",
      "bright dressing"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "salad"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, fresh profile sounds appealing.",
      "zh": "如果你想要savory、fresh的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, fresh je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "esqueixada",
    "metadataCode": "105032",
    "cuisineId": "spanish",
    "names": {
      "en": "Esqueixada",
      "zh": "加泰罗尼亚鳕鱼沙拉",
      "nl": "Esqueixada",
      "local": "Esqueixada"
    },
    "category": "fish",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Esqueixada is a common Spanish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "加泰罗尼亚鳕鱼沙拉是常见西班牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Esqueixada is een veelvoorkomend Spaans menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fish, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fish，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fish; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Spanish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见西班牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Spaans restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "fish-fillet",
        60,
        "main"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "mixed-vegetables",
        10,
        "body"
      ],
      [
        "lemon",
        5,
        "brightness"
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
      "mild"
    ],
    "textureProfile": [
      "tender fish",
      "light flaky bite"
    ],
    "riskFlags": [
      "contains-fish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "fish"
    ],
    "avoidIfTags": [
      "fish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "pisto",
    "metadataCode": "105033",
    "cuisineId": "spanish",
    "names": {
      "en": "Pisto",
      "zh": "西班牙番茄蔬菜炖菜",
      "nl": "Pisto",
      "local": "Pisto"
    },
    "category": "stew",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Pisto is a common Spanish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "西班牙番茄蔬菜炖菜是常见西班牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Pisto is een veelvoorkomend Spaans menu-item, beschreven voor snelle bestelkeuzes."
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
        "en": "A likely Spanish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见西班牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Spaans restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
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
    "id": "pipirrana",
    "metadataCode": "105034",
    "cuisineId": "spanish",
    "names": {
      "en": "Pipirrana",
      "zh": "安达卢西亚番茄椒丁沙拉",
      "nl": "Pipirrana",
      "local": "Pipirrana"
    },
    "category": "salad",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Pipirrana is a common Spanish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "安达卢西亚番茄椒丁沙拉是常见西班牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Pipirrana is een veelvoorkomend Spaans menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fresh salad, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fresh salad，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fresh salad; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Spanish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见西班牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Spaans restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "mixed-vegetables",
        45,
        "base"
      ],
      [
        "tomato",
        15,
        "body"
      ],
      [
        "cheese",
        15,
        "richness"
      ],
      [
        "olive-oil",
        10,
        "dressing",
        "seasoning"
      ],
      [
        "vinegar",
        10,
        "dressing",
        "seasoning"
      ],
      [
        "herbs",
        5,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "herbs",
      "sauce",
      "savory base"
    ],
    "basicTaste": [
      "savory",
      "fresh"
    ],
    "textureProfile": [
      "crisp vegetables",
      "bright dressing"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "salad"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, fresh profile sounds appealing.",
      "zh": "如果你想要savory、fresh的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, fresh je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "migas",
    "metadataCode": "105035",
    "cuisineId": "spanish",
    "names": {
      "en": "Migas",
      "zh": "西班牙炒面包屑",
      "nl": "Migas",
      "local": "Migas"
    },
    "category": "bread",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Migas is a common Spanish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "西班牙炒面包屑是常见西班牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Migas is een veelvoorkomend Spaans menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with baked bread or pastry, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现baked bread or pastry，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met baked bread or pastry; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Spanish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见西班牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Spaans restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "bread",
        45,
        "base"
      ],
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "cheese",
        15,
        "filling"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "sea-salt",
        5,
        "seasoning",
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
      "mild"
    ],
    "textureProfile": [
      "soft bread",
      "crisp edges"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "bread"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "callos-a-la-madrilena",
    "metadataCode": "105036",
    "cuisineId": "spanish",
    "names": {
      "en": "Callos a la Madrilena",
      "zh": "马德里炖牛肚",
      "nl": "Callos a la Madrilena",
      "local": "Callos a la Madrilena"
    },
    "category": "stew",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Callos a la Madrilena is a common Spanish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "马德里炖牛肚是常见西班牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Callos a la Madrilena is een veelvoorkomend Spaans menu-item, beschreven voor snelle bestelkeuzes."
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
        "en": "A likely Spanish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见西班牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Spaans restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
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
    "id": "sepia-a-la-plancha",
    "metadataCode": "105037",
    "cuisineId": "spanish",
    "names": {
      "en": "Sepia a la Plancha",
      "zh": "铁板墨鱼",
      "nl": "Sepia a la Plancha",
      "local": "Sepia a la Plancha"
    },
    "category": "seafood",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Sepia a la Plancha is a common Spanish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "铁板墨鱼是常见西班牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Sepia a la Plancha is een veelvoorkomend Spaans menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fish or seafood, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fish or seafood，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fish or seafood; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Spanish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见西班牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Spaans restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "fish-fillet",
        40,
        "main"
      ],
      [
        "mussels",
        20,
        "seafood"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "lemon",
        10,
        "brightness"
      ],
      [
        "olive-oil",
        10,
        "finish",
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
      "tender seafood",
      "bright savory finish"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-shellfish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "seafood"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "shellfish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, briny profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、briny的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, briny je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "navajas-a-la-plancha",
    "metadataCode": "105038",
    "cuisineId": "spanish",
    "names": {
      "en": "Navajas a la Plancha",
      "zh": "铁板竹蛏",
      "nl": "Navajas a la Plancha",
      "local": "Navajas a la Plancha"
    },
    "category": "seafood",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Navajas a la Plancha is a common Spanish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "铁板竹蛏是常见西班牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Navajas a la Plancha is een veelvoorkomend Spaans menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fish or seafood, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fish or seafood，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fish or seafood; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Spanish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见西班牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Spaans restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "fish-fillet",
        40,
        "main"
      ],
      [
        "mussels",
        20,
        "seafood"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "lemon",
        10,
        "brightness"
      ],
      [
        "olive-oil",
        10,
        "finish",
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
      "tender seafood",
      "bright savory finish"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-shellfish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "seafood"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "shellfish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, briny profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、briny的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, briny je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "zamburinas",
    "metadataCode": "105039",
    "cuisineId": "spanish",
    "names": {
      "en": "Zamburinas",
      "zh": "西班牙小扇贝",
      "nl": "Zamburinas",
      "local": "Zamburinas"
    },
    "category": "seafood",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Zamburinas is a common Spanish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "西班牙小扇贝是常见西班牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Zamburinas is een veelvoorkomend Spaans menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fish or seafood, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fish or seafood，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fish or seafood; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Spanish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见西班牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Spaans restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "fish-fillet",
        40,
        "main"
      ],
      [
        "mussels",
        20,
        "seafood"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "lemon",
        10,
        "brightness"
      ],
      [
        "olive-oil",
        10,
        "finish",
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
      "tender seafood",
      "bright savory finish"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-shellfish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "seafood"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "shellfish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, briny profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、briny的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, briny je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "marmitako",
    "metadataCode": "105040",
    "cuisineId": "spanish",
    "names": {
      "en": "Marmitako",
      "zh": "巴斯克金枪鱼土豆炖锅",
      "nl": "Marmitako",
      "local": "Marmitako"
    },
    "category": "fish",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Marmitako is a common Spanish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "巴斯克金枪鱼土豆炖锅是常见西班牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Marmitako is een veelvoorkomend Spaans menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fish, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fish，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fish; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Spanish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见西班牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Spaans restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "fish-fillet",
        60,
        "main"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "mixed-vegetables",
        10,
        "body"
      ],
      [
        "lemon",
        5,
        "brightness"
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
      "mild"
    ],
    "textureProfile": [
      "tender fish",
      "light flaky bite"
    ],
    "riskFlags": [
      "contains-fish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "fish"
    ],
    "avoidIfTags": [
      "fish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "bacalao-a-la-vizcaina",
    "metadataCode": "105041",
    "cuisineId": "spanish",
    "names": {
      "en": "Bacalao a la Vizcaina",
      "zh": "巴斯克红椒鳕鱼",
      "nl": "Bacalao a la Vizcaina",
      "local": "Bacalao a la Vizcaina"
    },
    "category": "fish",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Bacalao a la Vizcaina is a common Spanish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "巴斯克红椒鳕鱼是常见西班牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Bacalao a la Vizcaina is een veelvoorkomend Spaans menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fish, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fish，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fish; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Spanish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见西班牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Spaans restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "fish-fillet",
        60,
        "main"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "mixed-vegetables",
        10,
        "body"
      ],
      [
        "lemon",
        5,
        "brightness"
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
      "mild"
    ],
    "textureProfile": [
      "tender fish",
      "light flaky bite"
    ],
    "riskFlags": [
      "contains-fish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "fish"
    ],
    "avoidIfTags": [
      "fish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "chipirones-en-su-tinta",
    "metadataCode": "105042",
    "cuisineId": "spanish",
    "names": {
      "en": "Chipirones en su Tinta",
      "zh": "墨汁小鱿鱼",
      "nl": "Chipirones en su Tinta",
      "local": "Chipirones en su Tinta"
    },
    "category": "seafood",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Chipirones en su Tinta is a common Spanish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "墨汁小鱿鱼是常见西班牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Chipirones en su Tinta is een veelvoorkomend Spaans menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fish or seafood, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fish or seafood，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fish or seafood; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Spanish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见西班牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Spaans restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "fish-fillet",
        40,
        "main"
      ],
      [
        "mussels",
        20,
        "seafood"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "lemon",
        10,
        "brightness"
      ],
      [
        "olive-oil",
        10,
        "finish",
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
      "tender seafood",
      "bright savory finish"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-shellfish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "seafood"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "shellfish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, briny profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、briny的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, briny je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "arroz-a-banda",
    "metadataCode": "105043",
    "cuisineId": "spanish",
    "names": {
      "en": "Arroz a Banda",
      "zh": "海鲜高汤米饭",
      "nl": "Arroz a Banda",
      "local": "Arroz a Banda"
    },
    "category": "seafood",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Arroz a Banda is a common Spanish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "海鲜高汤米饭是常见西班牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Arroz a Banda is een veelvoorkomend Spaans menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fish or seafood, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fish or seafood，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fish or seafood; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Spanish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见西班牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Spaans restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "fish-fillet",
        40,
        "main"
      ],
      [
        "mussels",
        20,
        "seafood"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "lemon",
        10,
        "brightness"
      ],
      [
        "olive-oil",
        10,
        "finish",
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
      "tender seafood",
      "bright savory finish"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-shellfish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "seafood"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "shellfish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, briny profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、briny的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, briny je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "arroz-del-senyoret",
    "metadataCode": "105044",
    "cuisineId": "spanish",
    "names": {
      "en": "Arroz del Senyoret",
      "zh": "去壳海鲜饭",
      "nl": "Arroz del Senyoret",
      "local": "Arroz del Senyoret"
    },
    "category": "seafood",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Arroz del Senyoret is a common Spanish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "去壳海鲜饭是常见西班牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Arroz del Senyoret is een veelvoorkomend Spaans menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fish or seafood, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fish or seafood，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fish or seafood; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Spanish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见西班牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Spaans restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "fish-fillet",
        40,
        "main"
      ],
      [
        "mussels",
        20,
        "seafood"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "lemon",
        10,
        "brightness"
      ],
      [
        "olive-oil",
        10,
        "finish",
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
      "tender seafood",
      "bright savory finish"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-shellfish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "seafood"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "shellfish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, briny profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、briny的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, briny je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "calcots",
    "metadataCode": "105045",
    "cuisineId": "spanish",
    "names": {
      "en": "Calcots",
      "zh": "加泰烤葱",
      "nl": "Calcots",
      "local": "Calcots"
    },
    "category": "starter",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Calcots is a common Spanish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "加泰烤葱是常见西班牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Calcots is een veelvoorkomend Spaans menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with small starter, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现small starter，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met small starter; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Spanish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见西班牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Spaans restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "bread",
        30,
        "base"
      ],
      [
        "cheese",
        20,
        "richness"
      ],
      [
        "mixed-vegetables",
        20,
        "body"
      ],
      [
        "ham",
        15,
        "main"
      ],
      [
        "olive-oil",
        10,
        "finish",
        "seasoning"
      ],
      [
        "herbs",
        5,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "herbs",
      "sauce",
      "savory base"
    ],
    "basicTaste": [
      "savory",
      "mild"
    ],
    "textureProfile": [
      "small bites",
      "savory finish"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "starter"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "butifarra",
    "metadataCode": "105046",
    "cuisineId": "spanish",
    "names": {
      "en": "Butifarra",
      "zh": "加泰罗尼亚香肠",
      "nl": "Butifarra",
      "local": "Butifarra"
    },
    "category": "pork",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Butifarra is a common Spanish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "加泰罗尼亚香肠是常见西班牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Butifarra is een veelvoorkomend Spaans menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with pork or cured meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现pork or cured meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met pork or cured meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Spanish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见西班牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Spaans restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "pork",
        50,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "cabbage",
        10,
        "body"
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
      ],
      [
        "parsley",
        10,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork",
      "pepper",
      "browned edges"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "savory meat",
      "browned edges"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "pork"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "sobrasada",
    "metadataCode": "105047",
    "cuisineId": "spanish",
    "names": {
      "en": "Sobrasada",
      "zh": "马略卡辣味猪肉肠酱",
      "nl": "Sobrasada",
      "local": "Sobrasada"
    },
    "category": "pork",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Sobrasada is a common Spanish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "马略卡辣味猪肉肠酱是常见西班牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Sobrasada is een veelvoorkomend Spaans menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with pork or cured meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现pork or cured meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met pork or cured meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Spanish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见西班牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Spaans restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "pork",
        50,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "cabbage",
        10,
        "body"
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
      ],
      [
        "parsley",
        10,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork",
      "pepper",
      "browned edges"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "savory meat",
      "browned edges"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "pork"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "coca-de-recapte",
    "metadataCode": "105048",
    "cuisineId": "spanish",
    "names": {
      "en": "Coca de Recapte",
      "zh": "加泰咸烤饼",
      "nl": "Coca de Recapte",
      "local": "Coca de Recapte"
    },
    "category": "bread",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Coca de Recapte is a common Spanish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "加泰咸烤饼是常见西班牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Coca de Recapte is een veelvoorkomend Spaans menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with baked bread or pastry, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现baked bread or pastry，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met baked bread or pastry; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Spanish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见西班牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Spaans restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "bread",
        45,
        "base"
      ],
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "cheese",
        15,
        "filling"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "sea-salt",
        5,
        "seasoning",
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
      "mild"
    ],
    "textureProfile": [
      "soft bread",
      "crisp edges"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "bread"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "empanada-gallega",
    "metadataCode": "105049",
    "cuisineId": "spanish",
    "names": {
      "en": "Empanada Gallega",
      "zh": "加利西亚馅饼",
      "nl": "Empanada Gallega",
      "local": "Empanada Gallega"
    },
    "category": "pastry",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Empanada Gallega is a common Spanish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "加利西亚馅饼是常见西班牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Empanada Gallega is een veelvoorkomend Spaans menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with savory pastry, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现savory pastry，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met savory pastry; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Spanish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见西班牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Spaans restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "pastry-crust",
        40,
        "base"
      ],
      [
        "cheese",
        20,
        "filling"
      ],
      [
        "egg",
        15,
        "binder"
      ],
      [
        "mixed-vegetables",
        10,
        "body"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "black-pepper",
        5,
        "seasoning",
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
      "buttery"
    ],
    "textureProfile": [
      "flaky pastry",
      "soft filling"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "contains-egg"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "pastry"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this savory, buttery profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、buttery的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, buttery je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "lacon-con-grelos",
    "metadataCode": "105050",
    "cuisineId": "spanish",
    "names": {
      "en": "Lacon con Grelos",
      "zh": "加利西亚猪肩配芜菁叶",
      "nl": "Lacon con Grelos",
      "local": "Lacon con Grelos"
    },
    "category": "pork",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Lacon con Grelos is a common Spanish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "加利西亚猪肩配芜菁叶是常见西班牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Lacon con Grelos is een veelvoorkomend Spaans menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with pork or cured meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现pork or cured meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met pork or cured meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Spanish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见西班牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Spaans restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "pork",
        50,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "cabbage",
        10,
        "body"
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
      ],
      [
        "parsley",
        10,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork",
      "pepper",
      "browned edges"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "savory meat",
      "browned edges"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "pork"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "oreja-a-la-plancha",
    "metadataCode": "105051",
    "cuisineId": "spanish",
    "names": {
      "en": "Oreja a la Plancha",
      "zh": "铁板猪耳",
      "nl": "Oreja a la Plancha",
      "local": "Oreja a la Plancha"
    },
    "category": "pork",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Oreja a la Plancha is a common Spanish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "铁板猪耳是常见西班牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Oreja a la Plancha is een veelvoorkomend Spaans menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with pork or cured meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现pork or cured meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met pork or cured meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Spanish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见西班牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Spaans restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "pork",
        50,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "cabbage",
        10,
        "body"
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
      ],
      [
        "parsley",
        10,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork",
      "pepper",
      "browned edges"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "savory meat",
      "browned edges"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "pork"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "txangurro",
    "metadataCode": "105052",
    "cuisineId": "spanish",
    "names": {
      "en": "Txangurro",
      "zh": "巴斯克蟹肉盅",
      "nl": "Txangurro",
      "local": "Txangurro"
    },
    "category": "seafood",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Txangurro is a common Spanish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "巴斯克蟹肉盅是常见西班牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Txangurro is een veelvoorkomend Spaans menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fish or seafood, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fish or seafood，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fish or seafood; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Spanish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见西班牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Spaans restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "fish-fillet",
        40,
        "main"
      ],
      [
        "mussels",
        20,
        "seafood"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "lemon",
        10,
        "brightness"
      ],
      [
        "olive-oil",
        10,
        "finish",
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
      "tender seafood",
      "bright savory finish"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-shellfish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "seafood"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "shellfish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, briny profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、briny的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, briny je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "kokotxas",
    "metadataCode": "105053",
    "cuisineId": "spanish",
    "names": {
      "en": "Kokotxas",
      "zh": "巴斯克鱼颊",
      "nl": "Kokotxas",
      "local": "Kokotxas"
    },
    "category": "fish",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Kokotxas is a common Spanish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "巴斯克鱼颊是常见西班牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Kokotxas is een veelvoorkomend Spaans menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fish, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fish，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fish; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Spanish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见西班牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Spaans restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "fish-fillet",
        60,
        "main"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "mixed-vegetables",
        10,
        "body"
      ],
      [
        "lemon",
        5,
        "brightness"
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
      "mild"
    ],
    "textureProfile": [
      "tender fish",
      "light flaky bite"
    ],
    "riskFlags": [
      "contains-fish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "fish"
    ],
    "avoidIfTags": [
      "fish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "tarta-de-queso-vasca",
    "metadataCode": "105054",
    "cuisineId": "spanish",
    "names": {
      "en": "Basque Cheesecake",
      "zh": "巴斯克芝士蛋糕",
      "nl": "Basque Cheesecake",
      "local": "Basque Cheesecake"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Basque Cheesecake is a common Spanish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "巴斯克芝士蛋糕是常见西班牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Basque Cheesecake is een veelvoorkomend Spaans menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Spanish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见西班牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Spaans restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "torrijas",
    "metadataCode": "105055",
    "cuisineId": "spanish",
    "names": {
      "en": "Torrijas",
      "zh": "西班牙炸牛奶吐司",
      "nl": "Torrijas",
      "local": "Torrijas"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Torrijas is a common Spanish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "西班牙炸牛奶吐司是常见西班牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Torrijas is een veelvoorkomend Spaans menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Spanish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见西班牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Spaans restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "leche-frita",
    "metadataCode": "105056",
    "cuisineId": "spanish",
    "names": {
      "en": "Leche Frita",
      "zh": "西班牙炸牛奶",
      "nl": "Leche Frita",
      "local": "Leche Frita"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Leche Frita is a common Spanish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "西班牙炸牛奶是常见西班牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Leche Frita is een veelvoorkomend Spaans menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Spanish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见西班牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Spaans restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "natillas",
    "metadataCode": "105057",
    "cuisineId": "spanish",
    "names": {
      "en": "Natillas",
      "zh": "西班牙蛋奶甜品",
      "nl": "Natillas",
      "local": "Natillas"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Natillas is a common Spanish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "西班牙蛋奶甜品是常见西班牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Natillas is een veelvoorkomend Spaans menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Spanish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见西班牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Spaans restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "tocino-de-cielo",
    "metadataCode": "105058",
    "cuisineId": "spanish",
    "names": {
      "en": "Tocino de Cielo",
      "zh": "西班牙蛋黄焦糖布丁",
      "nl": "Tocino de Cielo",
      "local": "Tocino de Cielo"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Tocino de Cielo is a common Spanish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "西班牙蛋黄焦糖布丁是常见西班牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Tocino de Cielo is een veelvoorkomend Spaans menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Spanish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见西班牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Spaans restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "ensaimada",
    "metadataCode": "105059",
    "cuisineId": "spanish",
    "names": {
      "en": "Ensaimada",
      "zh": "马略卡螺旋甜面包",
      "nl": "Ensaimada",
      "local": "Ensaimada"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Ensaimada is a common Spanish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "马略卡螺旋甜面包是常见西班牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Ensaimada is een veelvoorkomend Spaans menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Spanish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见西班牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Spaans restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "queso-manchego",
    "metadataCode": "105060",
    "cuisineId": "spanish",
    "names": {
      "en": "Queso Manchego",
      "zh": "曼切戈奶酪",
      "nl": "Queso Manchego",
      "local": "Queso Manchego"
    },
    "category": "cheese",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Queso Manchego is a common Spanish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "曼切戈奶酪是常见西班牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Queso Manchego is een veelvoorkomend Spaans menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with cheese-focused dish, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现cheese-focused dish，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met cheese-focused dish; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Spanish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见西班牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Spaans restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "cheese",
        45,
        "main"
      ],
      [
        "bread",
        20,
        "base"
      ],
      [
        "mixed-vegetables",
        15,
        "body"
      ],
      [
        "olive-oil",
        10,
        "finish",
        "seasoning"
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
      "cheese",
      "cream",
      "pepper"
    ],
    "basicTaste": [
      "savory",
      "creamy"
    ],
    "textureProfile": [
      "creamy or firm cheese",
      "savory finish"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "cheese"
    ],
    "avoidIfTags": [
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Order if this savory, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
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
      "zh": "德式肉卷",
      "nl": "Hackbraten",
      "local": "Hackbraten"
    },
    "category": "meat",
    "cookingMethods": [
      "braised"
    ],
    "shortDescription": {
      "en": "Hackbraten is a common German menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "德式肉卷是常见德国菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Hackbraten is een veelvoorkomend Duits menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with tender meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现tender meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met tender meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely German restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见德国菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Duits restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "beef",
        45,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "mixed-vegetables",
        15,
        "body"
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
      "herbs",
      "sauce",
      "savory base"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "tender meat",
      "saucy or browned edges"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "meat"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
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
    "category": "potato",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Schupfnudeln is a common German menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "德式土豆手指面是常见德国菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Schupfnudeln is een veelvoorkomend Duits menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with potato dish, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现potato dish，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met potato dish; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely German restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见德国菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Duits restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "potato",
        55,
        "base"
      ],
      [
        "cream",
        15,
        "richness"
      ],
      [
        "cheese",
        10,
        "richness"
      ],
      [
        "butter",
        10,
        "richness"
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
      "soft potato",
      "browned or creamy edges"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "potato"
    ],
    "avoidIfTags": [
      "dairy-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, hearty profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、hearty的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, hearty je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
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
    "category": "potato",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Bratkartoffeln is a common German menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "德式煎土豆是常见德国菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Bratkartoffeln is een veelvoorkomend Duits menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with potato dish, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现potato dish，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met potato dish; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely German restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见德国菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Duits restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "potato",
        55,
        "base"
      ],
      [
        "cream",
        15,
        "richness"
      ],
      [
        "cheese",
        10,
        "richness"
      ],
      [
        "butter",
        10,
        "richness"
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
      "soft potato",
      "browned or creamy edges"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "potato"
    ],
    "avoidIfTags": [
      "dairy-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, hearty profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、hearty的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, hearty je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "kartoffelknoedel",
    "metadataCode": "106035",
    "cuisineId": "german",
    "names": {
      "en": "Kartoffelknoedel",
      "zh": "德式土豆丸子",
      "nl": "Kartoffelknoedel",
      "local": "Kartoffelknoedel"
    },
    "category": "potato",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Kartoffelknoedel is a common German menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "德式土豆丸子是常见德国菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Kartoffelknoedel is een veelvoorkomend Duits menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with potato dish, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现potato dish，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met potato dish; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely German restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见德国菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Duits restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "potato",
        55,
        "base"
      ],
      [
        "cream",
        15,
        "richness"
      ],
      [
        "cheese",
        10,
        "richness"
      ],
      [
        "butter",
        10,
        "richness"
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
      "soft potato",
      "browned or creamy edges"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "potato"
    ],
    "avoidIfTags": [
      "dairy-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, hearty profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、hearty的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, hearty je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
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
    "category": "pork",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Schweinebraten is a common German menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "德式烤猪肉是常见德国菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Schweinebraten is een veelvoorkomend Duits menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with pork or cured meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现pork or cured meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met pork or cured meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely German restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见德国菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Duits restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "pork",
        50,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "cabbage",
        10,
        "body"
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
      ],
      [
        "parsley",
        10,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork",
      "pepper",
      "browned edges"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "savory meat",
      "browned edges"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "pork"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "kasseler",
    "metadataCode": "106037",
    "cuisineId": "german",
    "names": {
      "en": "Kasseler",
      "zh": "德式烟熏猪排",
      "nl": "Kasseler",
      "local": "Kasseler"
    },
    "category": "pork",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Kasseler is a common German menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "德式烟熏猪排是常见德国菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Kasseler is een veelvoorkomend Duits menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with pork or cured meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现pork or cured meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met pork or cured meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely German restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见德国菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Duits restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "pork",
        50,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "cabbage",
        10,
        "body"
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
      ],
      [
        "parsley",
        10,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork",
      "pepper",
      "browned edges"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "savory meat",
      "browned edges"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "pork"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "erbsensuppe",
    "metadataCode": "106038",
    "cuisineId": "german",
    "names": {
      "en": "Erbsensuppe",
      "zh": "德式豌豆汤",
      "nl": "Erbsensuppe",
      "local": "Erbsensuppe"
    },
    "category": "soup",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Erbsensuppe is a common German menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "德式豌豆汤是常见德国菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Erbsensuppe is een veelvoorkomend Duits menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with warm soup, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现warm soup，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met warm soup; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely German restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见德国菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Duits restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "broth",
        35,
        "base"
      ],
      [
        "mixed-vegetables",
        25,
        "body"
      ],
      [
        "potato",
        15,
        "body"
      ],
      [
        "cream",
        10,
        "richness"
      ],
      [
        "black-pepper",
        5,
        "seasoning",
        "seasoning"
      ],
      [
        "parsley",
        10,
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
      "warming"
    ],
    "textureProfile": [
      "brothy or creamy",
      "soft bite"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "soup"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, warming profile sounds appealing.",
      "zh": "如果你想要savory、warming的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, warming je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "linseneintopf",
    "metadataCode": "106039",
    "cuisineId": "german",
    "names": {
      "en": "Linseneintopf",
      "zh": "德式扁豆炖汤",
      "nl": "Linseneintopf",
      "local": "Linseneintopf"
    },
    "category": "stew",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Linseneintopf is a common German menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "德式扁豆炖汤是常见德国菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Linseneintopf is een veelvoorkomend Duits menu-item, beschreven voor snelle bestelkeuzes."
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
        "en": "A likely German restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见德国菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Duits restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
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
    "id": "gruenkohl-mit-pinkel",
    "metadataCode": "106040",
    "cuisineId": "german",
    "names": {
      "en": "Gruenkohl mit Pinkel",
      "zh": "羽衣甘蓝配烟熏香肠",
      "nl": "Gruenkohl mit Pinkel",
      "local": "Gruenkohl mit Pinkel"
    },
    "category": "pork",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Gruenkohl mit Pinkel is a common German menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "羽衣甘蓝配烟熏香肠是常见德国菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Gruenkohl mit Pinkel is een veelvoorkomend Duits menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with pork or cured meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现pork or cured meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met pork or cured meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely German restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见德国菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Duits restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "pork",
        50,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "cabbage",
        10,
        "body"
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
      ],
      [
        "parsley",
        10,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork",
      "pepper",
      "browned edges"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "savory meat",
      "browned edges"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "pork"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "fischbroetchen",
    "metadataCode": "106041",
    "cuisineId": "german",
    "names": {
      "en": "Fischbroetchen",
      "zh": "德式鱼三明治",
      "nl": "Fischbroetchen",
      "local": "Fischbroetchen"
    },
    "category": "fish",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Fischbroetchen is a common German menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "德式鱼三明治是常见德国菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Fischbroetchen is een veelvoorkomend Duits menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fish, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fish，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fish; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely German restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见德国菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Duits restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "fish-fillet",
        60,
        "main"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "mixed-vegetables",
        10,
        "body"
      ],
      [
        "lemon",
        5,
        "brightness"
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
      "mild"
    ],
    "textureProfile": [
      "tender fish",
      "light flaky bite"
    ],
    "riskFlags": [
      "contains-fish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "fish"
    ],
    "avoidIfTags": [
      "fish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "rollmops",
    "metadataCode": "106042",
    "cuisineId": "german",
    "names": {
      "en": "Rollmops",
      "zh": "腌鲱鱼卷",
      "nl": "Rollmops",
      "local": "Rollmops"
    },
    "category": "fish",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Rollmops is a common German menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "腌鲱鱼卷是常见德国菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Rollmops is een veelvoorkomend Duits menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fish, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fish，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fish; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely German restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见德国菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Duits restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "fish-fillet",
        60,
        "main"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "mixed-vegetables",
        10,
        "body"
      ],
      [
        "lemon",
        5,
        "brightness"
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
      "mild"
    ],
    "textureProfile": [
      "tender fish",
      "light flaky bite"
    ],
    "riskFlags": [
      "contains-fish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "fish"
    ],
    "avoidIfTags": [
      "fish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "heringssalat",
    "metadataCode": "106043",
    "cuisineId": "german",
    "names": {
      "en": "Heringssalat",
      "zh": "德式鲱鱼沙拉",
      "nl": "Heringssalat",
      "local": "Heringssalat"
    },
    "category": "salad",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Heringssalat is a common German menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "德式鲱鱼沙拉是常见德国菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Heringssalat is een veelvoorkomend Duits menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fresh salad, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fresh salad，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fresh salad; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely German restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见德国菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Duits restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "mixed-vegetables",
        45,
        "base"
      ],
      [
        "tomato",
        15,
        "body"
      ],
      [
        "cheese",
        15,
        "richness"
      ],
      [
        "olive-oil",
        10,
        "dressing",
        "seasoning"
      ],
      [
        "vinegar",
        10,
        "dressing",
        "seasoning"
      ],
      [
        "herbs",
        5,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "herbs",
      "sauce",
      "savory base"
    ],
    "basicTaste": [
      "savory",
      "fresh"
    ],
    "textureProfile": [
      "crisp vegetables",
      "bright dressing"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "salad"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, fresh profile sounds appealing.",
      "zh": "如果你想要savory、fresh的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, fresh je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
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
    "category": "fried",
    "cookingMethods": [
      "fried"
    ],
    "shortDescription": {
      "en": "Backfisch is a common German menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "德式炸鱼是常见德国菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Backfisch is een veelvoorkomend Duits menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fried snack or main, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fried snack or main，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fried snack or main; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely German restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见德国菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Duits restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "coating"
      ],
      [
        "potato",
        25,
        "body"
      ],
      [
        "fish-fillet",
        20,
        "main"
      ],
      [
        "egg",
        10,
        "binder"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "sea-salt",
        10,
        "seasoning",
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
      "rich"
    ],
    "textureProfile": [
      "crisp outside",
      "soft center"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-fish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "fried"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "zwiebelrostbraten",
    "metadataCode": "106045",
    "cuisineId": "german",
    "names": {
      "en": "Zwiebelrostbraten",
      "zh": "洋葱煎牛排",
      "nl": "Zwiebelrostbraten",
      "local": "Zwiebelrostbraten"
    },
    "category": "meat",
    "cookingMethods": [
      "braised"
    ],
    "shortDescription": {
      "en": "Zwiebelrostbraten is a common German menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "洋葱煎牛排是常见德国菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Zwiebelrostbraten is een veelvoorkomend Duits menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with tender meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现tender meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met tender meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely German restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见德国菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Duits restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "beef",
        45,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "mixed-vegetables",
        15,
        "body"
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
      "herbs",
      "sauce",
      "savory base"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "tender meat",
      "saucy or browned edges"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "meat"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "jaegerschnitzel",
    "metadataCode": "106046",
    "cuisineId": "german",
    "names": {
      "en": "Jaegerschnitzel",
      "zh": "蘑菇酱炸肉排",
      "nl": "Jaegerschnitzel",
      "local": "Jaegerschnitzel"
    },
    "category": "fried",
    "cookingMethods": [
      "fried"
    ],
    "shortDescription": {
      "en": "Jaegerschnitzel is a common German menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "蘑菇酱炸肉排是常见德国菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Jaegerschnitzel is een veelvoorkomend Duits menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fried snack or main, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fried snack or main，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fried snack or main; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely German restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见德国菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Duits restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "coating"
      ],
      [
        "potato",
        25,
        "body"
      ],
      [
        "fish-fillet",
        20,
        "main"
      ],
      [
        "egg",
        10,
        "binder"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "sea-salt",
        10,
        "seasoning",
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
      "rich"
    ],
    "textureProfile": [
      "crisp outside",
      "soft center"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-fish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "fried"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "rahmschnitzel",
    "metadataCode": "106047",
    "cuisineId": "german",
    "names": {
      "en": "Rahmschnitzel",
      "zh": "奶油酱炸肉排",
      "nl": "Rahmschnitzel",
      "local": "Rahmschnitzel"
    },
    "category": "fried",
    "cookingMethods": [
      "fried"
    ],
    "shortDescription": {
      "en": "Rahmschnitzel is a common German menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "奶油酱炸肉排是常见德国菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Rahmschnitzel is een veelvoorkomend Duits menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fried snack or main, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fried snack or main，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fried snack or main; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely German restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见德国菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Duits restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "coating"
      ],
      [
        "potato",
        25,
        "body"
      ],
      [
        "fish-fillet",
        20,
        "main"
      ],
      [
        "egg",
        10,
        "binder"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "sea-salt",
        10,
        "seasoning",
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
      "rich"
    ],
    "textureProfile": [
      "crisp outside",
      "soft center"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-fish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "fried"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
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
      "assembled"
    ],
    "shortDescription": {
      "en": "Wurstsalat is a common German menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "德式香肠沙拉是常见德国菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Wurstsalat is een veelvoorkomend Duits menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fresh salad, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fresh salad，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fresh salad; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely German restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见德国菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Duits restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "mixed-vegetables",
        45,
        "base"
      ],
      [
        "tomato",
        15,
        "body"
      ],
      [
        "cheese",
        15,
        "richness"
      ],
      [
        "olive-oil",
        10,
        "dressing",
        "seasoning"
      ],
      [
        "vinegar",
        10,
        "dressing",
        "seasoning"
      ],
      [
        "herbs",
        5,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "herbs",
      "sauce",
      "savory base"
    ],
    "basicTaste": [
      "savory",
      "fresh"
    ],
    "textureProfile": [
      "crisp vegetables",
      "bright dressing"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "salad"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, fresh profile sounds appealing.",
      "zh": "如果你想要savory、fresh的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, fresh je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
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
      "en": "Leberknoedelsuppe",
      "zh": "肝丸汤",
      "nl": "Leberknoedelsuppe",
      "local": "Leberknoedelsuppe"
    },
    "category": "soup",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Leberknoedelsuppe is a common German menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "肝丸汤是常见德国菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Leberknoedelsuppe is een veelvoorkomend Duits menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with warm soup, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现warm soup，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met warm soup; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely German restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见德国菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Duits restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "broth",
        35,
        "base"
      ],
      [
        "mixed-vegetables",
        25,
        "body"
      ],
      [
        "potato",
        15,
        "body"
      ],
      [
        "cream",
        10,
        "richness"
      ],
      [
        "black-pepper",
        5,
        "seasoning",
        "seasoning"
      ],
      [
        "parsley",
        10,
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
      "warming"
    ],
    "textureProfile": [
      "brothy or creamy",
      "soft bite"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "soup"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, warming profile sounds appealing.",
      "zh": "如果你想要savory、warming的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, warming je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "bienenstich",
    "metadataCode": "106051",
    "cuisineId": "german",
    "names": {
      "en": "Bienenstich",
      "zh": "蜂刺蛋糕",
      "nl": "Bienenstich",
      "local": "Bienenstich"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Bienenstich is a common German menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "蜂刺蛋糕是常见德国菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Bienenstich is een veelvoorkomend Duits menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely German restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见德国菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Duits restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "zwetschgenkuchen",
    "metadataCode": "106052",
    "cuisineId": "german",
    "names": {
      "en": "Zwetschgenkuchen",
      "zh": "李子蛋糕",
      "nl": "Zwetschgenkuchen",
      "local": "Zwetschgenkuchen"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Zwetschgenkuchen is a common German menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "李子蛋糕是常见德国菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Zwetschgenkuchen is een veelvoorkomend Duits menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely German restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见德国菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Duits restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "rote-gruetze",
    "metadataCode": "106053",
    "cuisineId": "german",
    "names": {
      "en": "Rote Gruetze",
      "zh": "红果羹",
      "nl": "Rote Gruetze",
      "local": "Rote Gruetze"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Rote Gruetze is a common German menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "红果羹是常见德国菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Rote Gruetze is een veelvoorkomend Duits menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely German restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见德国菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Duits restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "dampfnudel",
    "metadataCode": "106054",
    "cuisineId": "german",
    "names": {
      "en": "Dampfnudel",
      "zh": "德式蒸甜面包",
      "nl": "Dampfnudel",
      "local": "Dampfnudel"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Dampfnudel is a common German menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "德式蒸甜面包是常见德国菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Dampfnudel is een veelvoorkomend Duits menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely German restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见德国菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Duits restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "berliner-pfannkuchen",
    "metadataCode": "106055",
    "cuisineId": "german",
    "names": {
      "en": "Berliner Pfannkuchen",
      "zh": "德式果酱甜甜圈",
      "nl": "Berliner Pfannkuchen",
      "local": "Berliner Pfannkuchen"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Berliner Pfannkuchen is a common German menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "德式果酱甜甜圈是常见德国菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Berliner Pfannkuchen is een veelvoorkomend Duits menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely German restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见德国菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Duits restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "flammende-herzen",
    "metadataCode": "106056",
    "cuisineId": "german",
    "names": {
      "en": "Flammende Herzen",
      "zh": "德式心形夹心饼",
      "nl": "Flammende Herzen",
      "local": "Flammende Herzen"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Flammende Herzen is a common German menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "德式心形夹心饼是常见德国菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Flammende Herzen is een veelvoorkomend Duits menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely German restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见德国菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Duits restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "zwiebelkuchen",
    "metadataCode": "106057",
    "cuisineId": "german",
    "names": {
      "en": "Zwiebelkuchen",
      "zh": "德式洋葱咸派",
      "nl": "Zwiebelkuchen",
      "local": "Zwiebelkuchen"
    },
    "category": "pastry",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Zwiebelkuchen is a common German menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "德式洋葱咸派是常见德国菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Zwiebelkuchen is een veelvoorkomend Duits menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with savory pastry, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现savory pastry，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met savory pastry; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely German restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见德国菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Duits restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "pastry-crust",
        40,
        "base"
      ],
      [
        "cheese",
        20,
        "filling"
      ],
      [
        "egg",
        15,
        "binder"
      ],
      [
        "mixed-vegetables",
        10,
        "body"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "black-pepper",
        5,
        "seasoning",
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
      "buttery"
    ],
    "textureProfile": [
      "flaky pastry",
      "soft filling"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "contains-egg"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "pastry"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this savory, buttery profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、buttery的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, buttery je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "kartoffelgratin-german",
    "metadataCode": "106058",
    "cuisineId": "german",
    "names": {
      "en": "Kartoffelgratin",
      "zh": "德式奶油焗土豆",
      "nl": "Kartoffelgratin",
      "local": "Kartoffelgratin"
    },
    "category": "potato",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Kartoffelgratin is a common German menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "德式奶油焗土豆是常见德国菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Kartoffelgratin is een veelvoorkomend Duits menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with potato dish, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现potato dish，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met potato dish; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely German restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见德国菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Duits restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "potato",
        55,
        "base"
      ],
      [
        "cream",
        15,
        "richness"
      ],
      [
        "cheese",
        10,
        "richness"
      ],
      [
        "butter",
        10,
        "richness"
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
      "soft potato",
      "browned or creamy edges"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "potato"
    ],
    "avoidIfTags": [
      "dairy-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, hearty profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、hearty的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, hearty je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "blaukraut",
    "metadataCode": "106059",
    "cuisineId": "german",
    "names": {
      "en": "Blaukraut",
      "zh": "德式红卷心菜",
      "nl": "Blaukraut",
      "local": "Blaukraut"
    },
    "category": "potato",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Blaukraut is a common German menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "德式红卷心菜是常见德国菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Blaukraut is een veelvoorkomend Duits menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with potato dish, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现potato dish，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met potato dish; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely German restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见德国菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Duits restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "potato",
        55,
        "base"
      ],
      [
        "cream",
        15,
        "richness"
      ],
      [
        "cheese",
        10,
        "richness"
      ],
      [
        "butter",
        10,
        "richness"
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
      "soft potato",
      "browned or creamy edges"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "potato"
    ],
    "avoidIfTags": [
      "dairy-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, hearty profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、hearty的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, hearty je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "spargel-mit-sauce-hollandaise",
    "metadataCode": "106060",
    "cuisineId": "german",
    "names": {
      "en": "Spargel mit Sauce Hollandaise",
      "zh": "白芦笋配荷兰酱",
      "nl": "Spargel mit Sauce Hollandaise",
      "local": "Spargel mit Sauce Hollandaise"
    },
    "category": "starter",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Spargel mit Sauce Hollandaise is a common German menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "白芦笋配荷兰酱是常见德国菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Spargel mit Sauce Hollandaise is een veelvoorkomend Duits menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with small starter, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现small starter，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met small starter; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely German restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见德国菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Duits restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "bread",
        30,
        "base"
      ],
      [
        "cheese",
        20,
        "richness"
      ],
      [
        "mixed-vegetables",
        20,
        "body"
      ],
      [
        "ham",
        15,
        "main"
      ],
      [
        "olive-oil",
        10,
        "finish",
        "seasoning"
      ],
      [
        "herbs",
        5,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "herbs",
      "sauce",
      "savory base"
    ],
    "basicTaste": [
      "savory",
      "mild"
    ],
    "textureProfile": [
      "small bites",
      "savory finish"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "starter"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
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
      "zh": "尼韦勒奶酪甜菜派",
      "nl": "Tarte al Djote",
      "local": "Tarte al Djote"
    },
    "category": "pastry",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Tarte al Djote is a common Belgian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "尼韦勒奶酪甜菜派是常见比利时菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Tarte al Djote is een veelvoorkomend Belgisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with savory pastry, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现savory pastry，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met savory pastry; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
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
        "pastry-crust",
        40,
        "base"
      ],
      [
        "cheese",
        20,
        "filling"
      ],
      [
        "egg",
        15,
        "binder"
      ],
      [
        "mixed-vegetables",
        10,
        "body"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "black-pepper",
        5,
        "seasoning",
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
      "buttery"
    ],
    "textureProfile": [
      "flaky pastry",
      "soft filling"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "contains-egg"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "pastry"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this savory, buttery profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、buttery的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, buttery je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "potjevleesch",
    "metadataCode": "107034",
    "cuisineId": "belgian",
    "names": {
      "en": "Potjevleesch",
      "zh": "冷肉冻罐",
      "nl": "Potjevleesch",
      "local": "Potjevleesch"
    },
    "category": "starter",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Potjevleesch is a common Belgian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "冷肉冻罐是常见比利时菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Potjevleesch is een veelvoorkomend Belgisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with small starter, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现small starter，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met small starter; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
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
        "bread",
        30,
        "base"
      ],
      [
        "cheese",
        20,
        "richness"
      ],
      [
        "mixed-vegetables",
        20,
        "body"
      ],
      [
        "ham",
        15,
        "main"
      ],
      [
        "olive-oil",
        10,
        "finish",
        "seasoning"
      ],
      [
        "herbs",
        5,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "herbs",
      "sauce",
      "savory base"
    ],
    "basicTaste": [
      "savory",
      "mild"
    ],
    "textureProfile": [
      "small bites",
      "savory finish"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "starter"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "boudin-blanc",
    "metadataCode": "107035",
    "cuisineId": "belgian",
    "names": {
      "en": "Boudin Blanc",
      "zh": "白香肠",
      "nl": "Boudin Blanc",
      "local": "Boudin Blanc"
    },
    "category": "pork",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Boudin Blanc is a common Belgian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "白香肠是常见比利时菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Boudin Blanc is een veelvoorkomend Belgisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with pork or cured meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现pork or cured meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met pork or cured meat; rijkdom, saus en portiegrootte bepalen de ervaring."
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
        "pork",
        50,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "cabbage",
        10,
        "body"
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
      ],
      [
        "parsley",
        10,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork",
      "pepper",
      "browned edges"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "savory meat",
      "browned edges"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "pork"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "boudin-noir",
    "metadataCode": "107036",
    "cuisineId": "belgian",
    "names": {
      "en": "Boudin Noir",
      "zh": "血肠",
      "nl": "Boudin Noir",
      "local": "Boudin Noir"
    },
    "category": "pork",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Boudin Noir is a common Belgian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "血肠是常见比利时菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Boudin Noir is een veelvoorkomend Belgisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with pork or cured meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现pork or cured meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met pork or cured meat; rijkdom, saus en portiegrootte bepalen de ervaring."
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
        "pork",
        50,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "cabbage",
        10,
        "body"
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
      ],
      [
        "parsley",
        10,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork",
      "pepper",
      "browned edges"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "savory meat",
      "browned edges"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "pork"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
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
      "nl": "Belgian Spaghetti Bolognese",
      "local": "Belgian Spaghetti Bolognese"
    },
    "category": "pasta",
    "cookingMethods": [
      "sauce-tossed"
    ],
    "shortDescription": {
      "en": "Belgian Spaghetti Bolognese is a common Belgian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "比利时肉酱意面是常见比利时菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Belgian Spaghetti Bolognese is een veelvoorkomend Belgisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with saucy pasta, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现saucy pasta，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met saucy pasta; rijkdom, saus en portiegrootte bepalen de ervaring."
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
        "pasta",
        45,
        "base"
      ],
      [
        "tomato-sauce",
        20,
        "sauce",
        "seasoning"
      ],
      [
        "cheese",
        10,
        "richness"
      ],
      [
        "mixed-vegetables",
        10,
        "body"
      ],
      [
        "olive-oil",
        10,
        "finish",
        "seasoning"
      ],
      [
        "herbs",
        5,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "herbs",
      "sauce",
      "savory base"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "tender pasta",
      "saucy finish"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "pasta"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "crevettes-grises-cocktail",
    "metadataCode": "107039",
    "cuisineId": "belgian",
    "names": {
      "en": "Crevettes Grises Cocktail",
      "zh": "灰虾鸡尾酒",
      "nl": "Crevettes Grises Cocktail",
      "local": "Crevettes Grises Cocktail"
    },
    "category": "seafood",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Crevettes Grises Cocktail is a common Belgian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "灰虾鸡尾酒是常见比利时菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Crevettes Grises Cocktail is een veelvoorkomend Belgisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fish or seafood, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fish or seafood，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fish or seafood; rijkdom, saus en portiegrootte bepalen de ervaring."
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
        "fish-fillet",
        40,
        "main"
      ],
      [
        "mussels",
        20,
        "seafood"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "lemon",
        10,
        "brightness"
      ],
      [
        "olive-oil",
        10,
        "finish",
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
      "tender seafood",
      "bright savory finish"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-shellfish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "seafood"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "shellfish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, briny profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、briny的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, briny je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "cod-with-leeks",
    "metadataCode": "107040",
    "cuisineId": "belgian",
    "names": {
      "en": "Cod with Leeks",
      "zh": "韭葱鳕鱼",
      "nl": "Cod with Leeks",
      "local": "Cod with Leeks"
    },
    "category": "fish",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Cod with Leeks is a common Belgian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "韭葱鳕鱼是常见比利时菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Cod with Leeks is een veelvoorkomend Belgisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fish, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fish，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fish; rijkdom, saus en portiegrootte bepalen de ervaring."
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
        "fish-fillet",
        60,
        "main"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "mixed-vegetables",
        10,
        "body"
      ],
      [
        "lemon",
        5,
        "brightness"
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
      "mild"
    ],
    "textureProfile": [
      "tender fish",
      "light flaky bite"
    ],
    "riskFlags": [
      "contains-fish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "fish"
    ],
    "avoidIfTags": [
      "fish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
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
      "zh": "火腿卷菊苣",
      "nl": "Hesp Rolletjes",
      "local": "Hesp Rolletjes"
    },
    "category": "pork",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Hesp Rolletjes is a common Belgian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "火腿卷菊苣是常见比利时菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Hesp Rolletjes is een veelvoorkomend Belgisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with pork or cured meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现pork or cured meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met pork or cured meat; rijkdom, saus en portiegrootte bepalen de ervaring."
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
        "pork",
        50,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "cabbage",
        10,
        "body"
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
      ],
      [
        "parsley",
        10,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork",
      "pepper",
      "browned edges"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "savory meat",
      "browned edges"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "pork"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "kip-aan-t-spit",
    "metadataCode": "107044",
    "cuisineId": "belgian",
    "names": {
      "en": "Kip aan t Spit",
      "zh": "比利时烤鸡",
      "nl": "Kip aan t Spit",
      "local": "Kip aan t Spit"
    },
    "category": "chicken",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Kip aan t Spit is a common Belgian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "比利时烤鸡是常见比利时菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Kip aan t Spit is een veelvoorkomend Belgisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with chicken, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现chicken，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met chicken; rijkdom, saus en portiegrootte bepalen de ervaring."
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
        "chicken",
        55,
        "main"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "mixed-vegetables",
        15,
        "body"
      ],
      [
        "cream",
        5,
        "sauce"
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
      "mild"
    ],
    "textureProfile": [
      "tender chicken",
      "savory finish"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "chicken"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
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
      "zh": "列日糖浆薄饼",
      "nl": "Lacquemants",
      "local": "Lacquemants"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Lacquemants is a common Belgian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "列日糖浆薄饼是常见比利时菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Lacquemants is een veelvoorkomend Belgisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
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
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "cuberdon",
    "metadataCode": "107049",
    "cuisineId": "belgian",
    "names": {
      "en": "Cuberdon",
      "zh": "比利时覆盆子糖锥",
      "nl": "Cuberdon",
      "local": "Cuberdon"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Cuberdon is a common Belgian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "比利时覆盆子糖锥是常见比利时菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Cuberdon is een veelvoorkomend Belgisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
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
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "merveilleux",
    "metadataCode": "107050",
    "cuisineId": "belgian",
    "names": {
      "en": "Merveilleux",
      "zh": "蛋白霜奶油甜点",
      "nl": "Merveilleux",
      "local": "Merveilleux"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Merveilleux is a common Belgian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "蛋白霜奶油甜点是常见比利时菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Merveilleux is een veelvoorkomend Belgisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
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
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "miserable-cake",
    "metadataCode": "107051",
    "cuisineId": "belgian",
    "names": {
      "en": "Miserable Cake",
      "zh": "比利时杏仁奶油蛋糕",
      "nl": "Miserable Cake",
      "local": "Miserable Cake"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Miserable Cake is a common Belgian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "比利时杏仁奶油蛋糕是常见比利时菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Miserable Cake is een veelvoorkomend Belgisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
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
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "cougnou",
    "metadataCode": "107052",
    "cuisineId": "belgian",
    "names": {
      "en": "Cougnou",
      "zh": "比利时圣诞奶油面包",
      "nl": "Cougnou",
      "local": "Cougnou"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Cougnou is a common Belgian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "比利时圣诞奶油面包是常见比利时菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Cougnou is een veelvoorkomend Belgisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
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
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "cramique",
    "metadataCode": "107053",
    "cuisineId": "belgian",
    "names": {
      "en": "Cramique",
      "zh": "葡萄干奶油面包",
      "nl": "Cramique",
      "local": "Cramique"
    },
    "category": "bread",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Cramique is a common Belgian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "葡萄干奶油面包是常见比利时菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Cramique is een veelvoorkomend Belgisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with baked bread or pastry, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现baked bread or pastry，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met baked bread or pastry; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
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
        "bread",
        45,
        "base"
      ],
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "cheese",
        15,
        "filling"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "sea-salt",
        5,
        "seasoning",
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
      "mild"
    ],
    "textureProfile": [
      "soft bread",
      "crisp edges"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "bread"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "suikerbrood-belgian",
    "metadataCode": "107054",
    "cuisineId": "belgian",
    "names": {
      "en": "Belgian Suikerbrood",
      "zh": "比利时糖面包",
      "nl": "Belgian Suikerbrood",
      "local": "Belgian Suikerbrood"
    },
    "category": "bread",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Belgian Suikerbrood is a common Belgian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "比利时糖面包是常见比利时菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Belgian Suikerbrood is een veelvoorkomend Belgisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with baked bread or pastry, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现baked bread or pastry，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met baked bread or pastry; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
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
        "bread",
        45,
        "base"
      ],
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "cheese",
        15,
        "filling"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "sea-salt",
        5,
        "seasoning",
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
      "mild"
    ],
    "textureProfile": [
      "soft bread",
      "crisp edges"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "bread"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
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
      "baked"
    ],
    "shortDescription": {
      "en": "Rijstpap is a common Belgian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "比利时米布丁是常见比利时菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Rijstpap is een veelvoorkomend Belgisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
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
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "pistolet",
    "metadataCode": "107056",
    "cuisineId": "belgian",
    "names": {
      "en": "Pistolet",
      "zh": "比利时小圆面包",
      "nl": "Pistolet",
      "local": "Pistolet"
    },
    "category": "bread",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Pistolet is a common Belgian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "比利时小圆面包是常见比利时菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Pistolet is een veelvoorkomend Belgisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with baked bread or pastry, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现baked bread or pastry，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met baked bread or pastry; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
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
        "bread",
        45,
        "base"
      ],
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "cheese",
        15,
        "filling"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "sea-salt",
        5,
        "seasoning",
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
      "mild"
    ],
    "textureProfile": [
      "soft bread",
      "crisp edges"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "bread"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "smoutebollen",
    "metadataCode": "107057",
    "cuisineId": "belgian",
    "names": {
      "en": "Smoutebollen",
      "zh": "比利时油炸甜球",
      "nl": "Smoutebollen",
      "local": "Smoutebollen"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Smoutebollen is a common Belgian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "比利时油炸甜球是常见比利时菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Smoutebollen is een veelvoorkomend Belgisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
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
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "gaufres-de-liege",
    "metadataCode": "107058",
    "cuisineId": "belgian",
    "names": {
      "en": "Gaufres de Liege",
      "zh": "列日华夫",
      "nl": "Gaufres de Liege",
      "local": "Gaufres de Liege"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Gaufres de Liege is a common Belgian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "列日华夫是常见比利时菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Gaufres de Liege is een veelvoorkomend Belgisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
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
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "gaufres-de-bruxelles",
    "metadataCode": "107059",
    "cuisineId": "belgian",
    "names": {
      "en": "Gaufres de Bruxelles",
      "zh": "布鲁塞尔华夫",
      "nl": "Gaufres de Bruxelles",
      "local": "Gaufres de Bruxelles"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Gaufres de Bruxelles is a common Belgian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "布鲁塞尔华夫是常见比利时菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Gaufres de Bruxelles is een veelvoorkomend Belgisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
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
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "boule-de-berlin-belgian",
    "metadataCode": "107060",
    "cuisineId": "belgian",
    "names": {
      "en": "Belgian Boule de Berlin",
      "zh": "比利时柏林球",
      "nl": "Belgian Boule de Berlin",
      "local": "Belgian Boule de Berlin"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Belgian Boule de Berlin is a common Belgian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "比利时柏林球是常见比利时菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Belgian Boule de Berlin is een veelvoorkomend Belgisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
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
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "cottage-pie",
    "metadataCode": "123031",
    "cuisineId": "british-irish",
    "names": {
      "en": "Cottage Pie",
      "zh": "英式牛肉土豆派",
      "nl": "Cottage Pie",
      "local": "Cottage Pie"
    },
    "category": "meat",
    "cookingMethods": [
      "braised"
    ],
    "shortDescription": {
      "en": "Cottage Pie is a common British & Irish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "英式牛肉土豆派是常见英式/爱尔兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Cottage Pie is een veelvoorkomend Brits-Iers menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with tender meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现tender meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met tender meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely British & Irish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见英式/爱尔兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Brits-Iers restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "beef",
        45,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "mixed-vegetables",
        15,
        "body"
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
      "herbs",
      "sauce",
      "savory base"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "tender meat",
      "saucy or browned edges"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "meat"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "steak-and-kidney-pudding",
    "metadataCode": "123032",
    "cuisineId": "british-irish",
    "names": {
      "en": "Steak and Kidney Pudding",
      "zh": "牛排腰子布丁派",
      "nl": "Steak and Kidney Pudding",
      "local": "Steak and Kidney Pudding"
    },
    "category": "meat",
    "cookingMethods": [
      "braised"
    ],
    "shortDescription": {
      "en": "Steak and Kidney Pudding is a common British & Irish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "牛排腰子布丁派是常见英式/爱尔兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Steak and Kidney Pudding is een veelvoorkomend Brits-Iers menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with tender meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现tender meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met tender meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely British & Irish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见英式/爱尔兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Brits-Iers restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "beef",
        45,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "mixed-vegetables",
        15,
        "body"
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
      "herbs",
      "sauce",
      "savory base"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "tender meat",
      "saucy or browned edges"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "meat"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
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
    "cuisineId": "british-irish",
    "names": {
      "en": "Pork Pie",
      "zh": "英式猪肉派",
      "nl": "Pork Pie",
      "local": "Pork Pie"
    },
    "category": "pork",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Pork Pie is a common British & Irish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "英式猪肉派是常见英式/爱尔兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Pork Pie is een veelvoorkomend Brits-Iers menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with pork or cured meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现pork or cured meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met pork or cured meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely British & Irish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见英式/爱尔兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Brits-Iers restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "pork",
        50,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "cabbage",
        10,
        "body"
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
      ],
      [
        "parsley",
        10,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork",
      "pepper",
      "browned edges"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "savory meat",
      "browned edges"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "pork"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "bacon-butty",
    "metadataCode": "123035",
    "cuisineId": "british-irish",
    "names": {
      "en": "Bacon Butty",
      "zh": "培根三明治",
      "nl": "Bacon Butty",
      "local": "Bacon Butty"
    },
    "category": "pork",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Bacon Butty is a common British & Irish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "培根三明治是常见英式/爱尔兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Bacon Butty is een veelvoorkomend Brits-Iers menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with pork or cured meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现pork or cured meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met pork or cured meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely British & Irish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见英式/爱尔兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Brits-Iers restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "pork",
        50,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "cabbage",
        10,
        "body"
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
      ],
      [
        "parsley",
        10,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork",
      "pepper",
      "browned edges"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "savory meat",
      "browned edges"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "pork"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "chip-butty",
    "metadataCode": "123036",
    "cuisineId": "british-irish",
    "names": {
      "en": "Chip Butty",
      "zh": "薯条三明治",
      "nl": "Chip Butty",
      "local": "Chip Butty"
    },
    "category": "bread",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Chip Butty is a common British & Irish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "薯条三明治是常见英式/爱尔兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Chip Butty is een veelvoorkomend Brits-Iers menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with baked bread or pastry, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现baked bread or pastry，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met baked bread or pastry; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely British & Irish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见英式/爱尔兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Brits-Iers restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "bread",
        45,
        "base"
      ],
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "cheese",
        15,
        "filling"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "sea-salt",
        5,
        "seasoning",
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
      "mild"
    ],
    "textureProfile": [
      "soft bread",
      "crisp edges"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "bread"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "jellied-eels",
    "metadataCode": "123037",
    "cuisineId": "british-irish",
    "names": {
      "en": "Jellied Eels",
      "zh": "伦敦鳗鱼冻",
      "nl": "Jellied Eels",
      "local": "Jellied Eels"
    },
    "category": "fish",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Jellied Eels is a common British & Irish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "伦敦鳗鱼冻是常见英式/爱尔兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Jellied Eels is een veelvoorkomend Brits-Iers menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fish, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fish，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fish; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely British & Irish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见英式/爱尔兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Brits-Iers restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "fish-fillet",
        60,
        "main"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "mixed-vegetables",
        10,
        "body"
      ],
      [
        "lemon",
        5,
        "brightness"
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
      "mild"
    ],
    "textureProfile": [
      "tender fish",
      "light flaky bite"
    ],
    "riskFlags": [
      "contains-fish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "fish"
    ],
    "avoidIfTags": [
      "fish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "pie-and-mash",
    "metadataCode": "123038",
    "cuisineId": "british-irish",
    "names": {
      "en": "Pie and Mash",
      "zh": "肉派配土豆泥",
      "nl": "Pie and Mash",
      "local": "Pie and Mash"
    },
    "category": "meat",
    "cookingMethods": [
      "braised"
    ],
    "shortDescription": {
      "en": "Pie and Mash is a common British & Irish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "肉派配土豆泥是常见英式/爱尔兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Pie and Mash is een veelvoorkomend Brits-Iers menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with tender meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现tender meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met tender meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely British & Irish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见英式/爱尔兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Brits-Iers restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "beef",
        45,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "mixed-vegetables",
        15,
        "body"
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
      "herbs",
      "sauce",
      "savory base"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "tender meat",
      "saucy or browned edges"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "meat"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "welsh-cawl",
    "metadataCode": "123039",
    "cuisineId": "british-irish",
    "names": {
      "en": "Welsh Cawl",
      "zh": "威尔士羊肉蔬菜汤",
      "nl": "Welsh Cawl",
      "local": "Welsh Cawl"
    },
    "category": "stew",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Welsh Cawl is a common British & Irish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "威尔士羊肉蔬菜汤是常见英式/爱尔兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Welsh Cawl is een veelvoorkomend Brits-Iers menu-item, beschreven voor snelle bestelkeuzes."
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
        "en": "A likely British & Irish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见英式/爱尔兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Brits-Iers restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
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
    "id": "lancashire-hotpot",
    "metadataCode": "123040",
    "cuisineId": "british-irish",
    "names": {
      "en": "Lancashire Hotpot",
      "zh": "兰开夏羊肉土豆锅",
      "nl": "Lancashire Hotpot",
      "local": "Lancashire Hotpot"
    },
    "category": "stew",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Lancashire Hotpot is a common British & Irish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "兰开夏羊肉土豆锅是常见英式/爱尔兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Lancashire Hotpot is een veelvoorkomend Brits-Iers menu-item, beschreven voor snelle bestelkeuzes."
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
        "en": "A likely British & Irish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见英式/爱尔兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Brits-Iers restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
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
    "id": "colcannon",
    "metadataCode": "123041",
    "cuisineId": "british-irish",
    "names": {
      "en": "Colcannon",
      "zh": "爱尔兰卷心菜土豆泥",
      "nl": "Colcannon",
      "local": "Colcannon"
    },
    "category": "potato",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Colcannon is a common British & Irish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "爱尔兰卷心菜土豆泥是常见英式/爱尔兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Colcannon is een veelvoorkomend Brits-Iers menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with potato dish, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现potato dish，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met potato dish; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely British & Irish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见英式/爱尔兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Brits-Iers restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "potato",
        55,
        "base"
      ],
      [
        "cream",
        15,
        "richness"
      ],
      [
        "cheese",
        10,
        "richness"
      ],
      [
        "butter",
        10,
        "richness"
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
      "soft potato",
      "browned or creamy edges"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "potato"
    ],
    "avoidIfTags": [
      "dairy-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, hearty profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、hearty的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, hearty je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "champ",
    "metadataCode": "123042",
    "cuisineId": "british-irish",
    "names": {
      "en": "Champ",
      "zh": "爱尔兰葱香土豆泥",
      "nl": "Champ",
      "local": "Champ"
    },
    "category": "potato",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Champ is a common British & Irish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "爱尔兰葱香土豆泥是常见英式/爱尔兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Champ is een veelvoorkomend Brits-Iers menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with potato dish, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现potato dish，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met potato dish; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely British & Irish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见英式/爱尔兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Brits-Iers restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "potato",
        55,
        "base"
      ],
      [
        "cream",
        15,
        "richness"
      ],
      [
        "cheese",
        10,
        "richness"
      ],
      [
        "butter",
        10,
        "richness"
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
      "soft potato",
      "browned or creamy edges"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "potato"
    ],
    "avoidIfTags": [
      "dairy-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, hearty profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、hearty的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, hearty je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "boxty",
    "metadataCode": "123043",
    "cuisineId": "british-irish",
    "names": {
      "en": "Boxty",
      "zh": "爱尔兰土豆煎饼",
      "nl": "Boxty",
      "local": "Boxty"
    },
    "category": "potato",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Boxty is a common British & Irish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "爱尔兰土豆煎饼是常见英式/爱尔兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Boxty is een veelvoorkomend Brits-Iers menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with potato dish, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现potato dish，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met potato dish; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely British & Irish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见英式/爱尔兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Brits-Iers restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "potato",
        55,
        "base"
      ],
      [
        "cream",
        15,
        "richness"
      ],
      [
        "cheese",
        10,
        "richness"
      ],
      [
        "butter",
        10,
        "richness"
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
      "soft potato",
      "browned or creamy edges"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "potato"
    ],
    "avoidIfTags": [
      "dairy-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, hearty profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、hearty的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, hearty je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "irish-soda-bread",
    "metadataCode": "123044",
    "cuisineId": "british-irish",
    "names": {
      "en": "Irish Soda Bread",
      "zh": "爱尔兰苏打面包",
      "nl": "Irish Soda Bread",
      "local": "Irish Soda Bread"
    },
    "category": "bread",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Irish Soda Bread is a common British & Irish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "爱尔兰苏打面包是常见英式/爱尔兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Irish Soda Bread is een veelvoorkomend Brits-Iers menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with baked bread or pastry, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现baked bread or pastry，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met baked bread or pastry; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely British & Irish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见英式/爱尔兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Brits-Iers restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "bread",
        45,
        "base"
      ],
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "cheese",
        15,
        "filling"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "sea-salt",
        5,
        "seasoning",
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
      "mild"
    ],
    "textureProfile": [
      "soft bread",
      "crisp edges"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "bread"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "irish-breakfast",
    "metadataCode": "123045",
    "cuisineId": "british-irish",
    "names": {
      "en": "Irish Breakfast",
      "zh": "爱尔兰全早餐",
      "nl": "Irish Breakfast",
      "local": "Irish Breakfast"
    },
    "category": "pork",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Irish Breakfast is a common British & Irish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "爱尔兰全早餐是常见英式/爱尔兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Irish Breakfast is een veelvoorkomend Brits-Iers menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with pork or cured meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现pork or cured meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met pork or cured meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely British & Irish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见英式/爱尔兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Brits-Iers restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "pork",
        50,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "cabbage",
        10,
        "body"
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
      ],
      [
        "parsley",
        10,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork",
      "pepper",
      "browned edges"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "savory meat",
      "browned edges"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "pork"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "kippers",
    "metadataCode": "123046",
    "cuisineId": "british-irish",
    "names": {
      "en": "Kippers",
      "zh": "烟熏鲱鱼",
      "nl": "Kippers",
      "local": "Kippers"
    },
    "category": "fish",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Kippers is a common British & Irish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "烟熏鲱鱼是常见英式/爱尔兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Kippers is een veelvoorkomend Brits-Iers menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fish, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fish，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fish; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely British & Irish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见英式/爱尔兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Brits-Iers restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "fish-fillet",
        60,
        "main"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "mixed-vegetables",
        10,
        "body"
      ],
      [
        "lemon",
        5,
        "brightness"
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
      "mild"
    ],
    "textureProfile": [
      "tender fish",
      "light flaky bite"
    ],
    "riskFlags": [
      "contains-fish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "fish"
    ],
    "avoidIfTags": [
      "fish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "kedgeree",
    "metadataCode": "123047",
    "cuisineId": "british-irish",
    "names": {
      "en": "Kedgeree",
      "zh": "英式咖喱熏鱼米饭",
      "nl": "Kedgeree",
      "local": "Kedgeree"
    },
    "category": "fish",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Kedgeree is a common British & Irish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "英式咖喱熏鱼米饭是常见英式/爱尔兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Kedgeree is een veelvoorkomend Brits-Iers menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fish, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fish，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fish; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely British & Irish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见英式/爱尔兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Brits-Iers restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "fish-fillet",
        60,
        "main"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "mixed-vegetables",
        10,
        "body"
      ],
      [
        "lemon",
        5,
        "brightness"
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
      "mild"
    ],
    "textureProfile": [
      "tender fish",
      "light flaky bite"
    ],
    "riskFlags": [
      "contains-fish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "fish"
    ],
    "avoidIfTags": [
      "fish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "coronation-chicken",
    "metadataCode": "123048",
    "cuisineId": "british-irish",
    "names": {
      "en": "Coronation Chicken",
      "zh": "英式咖喱鸡沙拉",
      "nl": "Coronation Chicken",
      "local": "Coronation Chicken"
    },
    "category": "chicken",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Coronation Chicken is a common British & Irish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "英式咖喱鸡沙拉是常见英式/爱尔兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Coronation Chicken is een veelvoorkomend Brits-Iers menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with chicken, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现chicken，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met chicken; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely British & Irish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见英式/爱尔兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Brits-Iers restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "chicken",
        55,
        "main"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "mixed-vegetables",
        15,
        "body"
      ],
      [
        "cream",
        5,
        "sauce"
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
      "mild"
    ],
    "textureProfile": [
      "tender chicken",
      "savory finish"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "chicken"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "gammon-steak",
    "metadataCode": "123049",
    "cuisineId": "british-irish",
    "names": {
      "en": "Gammon Steak",
      "zh": "火腿牛排配菠萝或蛋",
      "nl": "Gammon Steak",
      "local": "Gammon Steak"
    },
    "category": "pork",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Gammon Steak is a common British & Irish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "火腿牛排配菠萝或蛋是常见英式/爱尔兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Gammon Steak is een veelvoorkomend Brits-Iers menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with pork or cured meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现pork or cured meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met pork or cured meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely British & Irish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见英式/爱尔兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Brits-Iers restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "pork",
        50,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "cabbage",
        10,
        "body"
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
      ],
      [
        "parsley",
        10,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork",
      "pepper",
      "browned edges"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "savory meat",
      "browned edges"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "pork"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "cauliflower-cheese",
    "metadataCode": "123050",
    "cuisineId": "british-irish",
    "names": {
      "en": "Cauliflower Cheese",
      "zh": "奶酪焗花椰菜",
      "nl": "Cauliflower Cheese",
      "local": "Cauliflower Cheese"
    },
    "category": "cheese",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Cauliflower Cheese is a common British & Irish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "奶酪焗花椰菜是常见英式/爱尔兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Cauliflower Cheese is een veelvoorkomend Brits-Iers menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with cheese-focused dish, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现cheese-focused dish，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met cheese-focused dish; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely British & Irish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见英式/爱尔兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Brits-Iers restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "cheese",
        45,
        "main"
      ],
      [
        "bread",
        20,
        "base"
      ],
      [
        "mixed-vegetables",
        15,
        "body"
      ],
      [
        "olive-oil",
        10,
        "finish",
        "seasoning"
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
      "cheese",
      "cream",
      "pepper"
    ],
    "basicTaste": [
      "savory",
      "creamy"
    ],
    "textureProfile": [
      "creamy or firm cheese",
      "savory finish"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "cheese"
    ],
    "avoidIfTags": [
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Order if this savory, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "minted-peas",
    "metadataCode": "123051",
    "cuisineId": "british-irish",
    "names": {
      "en": "Minted Peas",
      "zh": "薄荷豌豆",
      "nl": "Minted Peas",
      "local": "Minted Peas"
    },
    "category": "starter",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Minted Peas is a common British & Irish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "薄荷豌豆是常见英式/爱尔兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Minted Peas is een veelvoorkomend Brits-Iers menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with small starter, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现small starter，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met small starter; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely British & Irish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见英式/爱尔兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Brits-Iers restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "bread",
        30,
        "base"
      ],
      [
        "cheese",
        20,
        "richness"
      ],
      [
        "mixed-vegetables",
        20,
        "body"
      ],
      [
        "ham",
        15,
        "main"
      ],
      [
        "olive-oil",
        10,
        "finish",
        "seasoning"
      ],
      [
        "herbs",
        5,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "herbs",
      "sauce",
      "savory base"
    ],
    "basicTaste": [
      "savory",
      "mild"
    ],
    "textureProfile": [
      "small bites",
      "savory finish"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "starter"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "bakewell-tart",
    "metadataCode": "123052",
    "cuisineId": "british-irish",
    "names": {
      "en": "Bakewell Tart",
      "zh": "巴克韦尔杏仁挞",
      "nl": "Bakewell Tart",
      "local": "Bakewell Tart"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Bakewell Tart is a common British & Irish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "巴克韦尔杏仁挞是常见英式/爱尔兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Bakewell Tart is een veelvoorkomend Brits-Iers menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely British & Irish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见英式/爱尔兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Brits-Iers restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "victoria-sponge",
    "metadataCode": "123053",
    "cuisineId": "british-irish",
    "names": {
      "en": "Victoria Sponge",
      "zh": "维多利亚海绵蛋糕",
      "nl": "Victoria Sponge",
      "local": "Victoria Sponge"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Victoria Sponge is a common British & Irish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "维多利亚海绵蛋糕是常见英式/爱尔兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Victoria Sponge is een veelvoorkomend Brits-Iers menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely British & Irish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见英式/爱尔兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Brits-Iers restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "spotted-dick",
    "metadataCode": "123054",
    "cuisineId": "british-irish",
    "names": {
      "en": "Spotted Dick",
      "zh": "葡萄干蒸布丁",
      "nl": "Spotted Dick",
      "local": "Spotted Dick"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Spotted Dick is a common British & Irish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "葡萄干蒸布丁是常见英式/爱尔兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Spotted Dick is een veelvoorkomend Brits-Iers menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely British & Irish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见英式/爱尔兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Brits-Iers restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "treacle-tart",
    "metadataCode": "123055",
    "cuisineId": "british-irish",
    "names": {
      "en": "Treacle Tart",
      "zh": "糖浆挞",
      "nl": "Treacle Tart",
      "local": "Treacle Tart"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Treacle Tart is a common British & Irish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "糖浆挞是常见英式/爱尔兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Treacle Tart is een veelvoorkomend Brits-Iers menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely British & Irish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见英式/爱尔兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Brits-Iers restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "banoffee-pie",
    "metadataCode": "123056",
    "cuisineId": "british-irish",
    "names": {
      "en": "Banoffee Pie",
      "zh": "香蕉太妃派",
      "nl": "Banoffee Pie",
      "local": "Banoffee Pie"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Banoffee Pie is a common British & Irish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "香蕉太妃派是常见英式/爱尔兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Banoffee Pie is een veelvoorkomend Brits-Iers menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely British & Irish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见英式/爱尔兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Brits-Iers restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "mince-pies",
    "metadataCode": "123057",
    "cuisineId": "british-irish",
    "names": {
      "en": "Mince Pies",
      "zh": "圣诞果干馅饼",
      "nl": "Mince Pies",
      "local": "Mince Pies"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Mince Pies is a common British & Irish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "圣诞果干馅饼是常见英式/爱尔兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Mince Pies is een veelvoorkomend Brits-Iers menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely British & Irish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见英式/爱尔兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Brits-Iers restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "christmas-pudding",
    "metadataCode": "123058",
    "cuisineId": "british-irish",
    "names": {
      "en": "Christmas Pudding",
      "zh": "英式圣诞布丁",
      "nl": "Christmas Pudding",
      "local": "Christmas Pudding"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Christmas Pudding is a common British & Irish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "英式圣诞布丁是常见英式/爱尔兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Christmas Pudding is een veelvoorkomend Brits-Iers menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely British & Irish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见英式/爱尔兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Brits-Iers restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "welsh-cakes",
    "metadataCode": "123059",
    "cuisineId": "british-irish",
    "names": {
      "en": "Welsh Cakes",
      "zh": "威尔士小煎饼",
      "nl": "Welsh Cakes",
      "local": "Welsh Cakes"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Welsh Cakes is a common British & Irish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "威尔士小煎饼是常见英式/爱尔兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Welsh Cakes is een veelvoorkomend Brits-Iers menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely British & Irish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见英式/爱尔兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Brits-Iers restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "eccles-cakes",
    "metadataCode": "123060",
    "cuisineId": "british-irish",
    "names": {
      "en": "Eccles Cakes",
      "zh": "果干千层小饼",
      "nl": "Eccles Cakes",
      "local": "Eccles Cakes"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Eccles Cakes is a common British & Irish menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "果干千层小饼是常见英式/爱尔兰菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Eccles Cakes is een veelvoorkomend Brits-Iers menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely British & Irish restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见英式/爱尔兰菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Brits-Iers restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
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
    "cuisineId": "portuguese",
    "names": {
      "en": "Pataniscas de Bacalhau",
      "zh": "葡式鳕鱼煎饼",
      "nl": "Pataniscas de Bacalhau",
      "local": "Pataniscas de Bacalhau"
    },
    "category": "fried",
    "cookingMethods": [
      "fried"
    ],
    "shortDescription": {
      "en": "Pataniscas de Bacalhau is a common Portuguese menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "葡式鳕鱼煎饼是常见葡萄牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Pataniscas de Bacalhau is een veelvoorkomend Portugees menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fried snack or main, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fried snack or main，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fried snack or main; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Portuguese restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见葡萄牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Portugees restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "coating"
      ],
      [
        "potato",
        25,
        "body"
      ],
      [
        "fish-fillet",
        20,
        "main"
      ],
      [
        "egg",
        10,
        "binder"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "sea-salt",
        10,
        "seasoning",
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
      "rich"
    ],
    "textureProfile": [
      "crisp outside",
      "soft center"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-fish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "fried"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "acorda-alentejana",
    "metadataCode": "125033",
    "cuisineId": "portuguese",
    "names": {
      "en": "Acorda Alentejana",
      "zh": "阿连特茹面包蒜汤",
      "nl": "Acorda Alentejana",
      "local": "Acorda Alentejana"
    },
    "category": "soup",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Acorda Alentejana is a common Portuguese menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "阿连特茹面包蒜汤是常见葡萄牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Acorda Alentejana is een veelvoorkomend Portugees menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with warm soup, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现warm soup，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met warm soup; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Portuguese restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见葡萄牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Portugees restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "broth",
        35,
        "base"
      ],
      [
        "mixed-vegetables",
        25,
        "body"
      ],
      [
        "potato",
        15,
        "body"
      ],
      [
        "cream",
        10,
        "richness"
      ],
      [
        "black-pepper",
        5,
        "seasoning",
        "seasoning"
      ],
      [
        "parsley",
        10,
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
      "warming"
    ],
    "textureProfile": [
      "brothy or creamy",
      "soft bite"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "soup"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, warming profile sounds appealing.",
      "zh": "如果你想要savory、warming的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, warming je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "arroz-de-polvo",
    "metadataCode": "125034",
    "cuisineId": "portuguese",
    "names": {
      "en": "Arroz de Polvo",
      "zh": "葡式章鱼饭",
      "nl": "Arroz de Polvo",
      "local": "Arroz de Polvo"
    },
    "category": "seafood",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Arroz de Polvo is a common Portuguese menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "葡式章鱼饭是常见葡萄牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Arroz de Polvo is een veelvoorkomend Portugees menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fish or seafood, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fish or seafood，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fish or seafood; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Portuguese restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见葡萄牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Portugees restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "fish-fillet",
        40,
        "main"
      ],
      [
        "mussels",
        20,
        "seafood"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "lemon",
        10,
        "brightness"
      ],
      [
        "olive-oil",
        10,
        "finish",
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
      "tender seafood",
      "bright savory finish"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-shellfish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "seafood"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "shellfish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, briny profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、briny的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, briny je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "polvo-guisado",
    "metadataCode": "125035",
    "cuisineId": "portuguese",
    "names": {
      "en": "Polvo Guisado",
      "zh": "葡式炖章鱼",
      "nl": "Polvo Guisado",
      "local": "Polvo Guisado"
    },
    "category": "seafood",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Polvo Guisado is a common Portuguese menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "葡式炖章鱼是常见葡萄牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Polvo Guisado is een veelvoorkomend Portugees menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fish or seafood, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fish or seafood，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fish or seafood; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Portuguese restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见葡萄牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Portugees restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "fish-fillet",
        40,
        "main"
      ],
      [
        "mussels",
        20,
        "seafood"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "lemon",
        10,
        "brightness"
      ],
      [
        "olive-oil",
        10,
        "finish",
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
      "tender seafood",
      "bright savory finish"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-shellfish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "seafood"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "shellfish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, briny profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、briny的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, briny je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
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
    "cuisineId": "portuguese",
    "names": {
      "en": "Rojoes",
      "zh": "葡式炸炖猪肉块",
      "nl": "Rojoes",
      "local": "Rojoes"
    },
    "category": "pork",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Rojoes is a common Portuguese menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "葡式炸炖猪肉块是常见葡萄牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Rojoes is een veelvoorkomend Portugees menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with pork or cured meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现pork or cured meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met pork or cured meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Portuguese restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见葡萄牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Portugees restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "pork",
        50,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "cabbage",
        10,
        "body"
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
      ],
      [
        "parsley",
        10,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork",
      "pepper",
      "browned edges"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "savory meat",
      "browned edges"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "pork"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "febras",
    "metadataCode": "125038",
    "cuisineId": "portuguese",
    "names": {
      "en": "Febras",
      "zh": "葡式猪排",
      "nl": "Febras",
      "local": "Febras"
    },
    "category": "pork",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Febras is a common Portuguese menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "葡式猪排是常见葡萄牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Febras is een veelvoorkomend Portugees menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with pork or cured meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现pork or cured meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met pork or cured meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Portuguese restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见葡萄牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Portugees restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "pork",
        50,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "cabbage",
        10,
        "body"
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
      ],
      [
        "parsley",
        10,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork",
      "pepper",
      "browned edges"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "savory meat",
      "browned edges"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "pork"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "entrecosto",
    "metadataCode": "125039",
    "cuisineId": "portuguese",
    "names": {
      "en": "Entrecosto",
      "zh": "葡式猪肋排",
      "nl": "Entrecosto",
      "local": "Entrecosto"
    },
    "category": "pork",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Entrecosto is a common Portuguese menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "葡式猪肋排是常见葡萄牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Entrecosto is een veelvoorkomend Portugees menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with pork or cured meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现pork or cured meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met pork or cured meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Portuguese restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见葡萄牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Portugees restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "pork",
        50,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "cabbage",
        10,
        "body"
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
      ],
      [
        "parsley",
        10,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork",
      "pepper",
      "browned edges"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "savory meat",
      "browned edges"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "pork"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "bifinhos-com-cogumelos",
    "metadataCode": "125040",
    "cuisineId": "portuguese",
    "names": {
      "en": "Bifinhos com Cogumelos",
      "zh": "蘑菇酱小牛排",
      "nl": "Bifinhos com Cogumelos",
      "local": "Bifinhos com Cogumelos"
    },
    "category": "meat",
    "cookingMethods": [
      "braised"
    ],
    "shortDescription": {
      "en": "Bifinhos com Cogumelos is a common Portuguese menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "蘑菇酱小牛排是常见葡萄牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Bifinhos com Cogumelos is een veelvoorkomend Portugees menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with tender meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现tender meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met tender meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Portuguese restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见葡萄牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Portugees restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "beef",
        45,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "mixed-vegetables",
        15,
        "body"
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
      "herbs",
      "sauce",
      "savory base"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "tender meat",
      "saucy or browned edges"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "meat"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "sopa-da-pedra",
    "metadataCode": "125041",
    "cuisineId": "portuguese",
    "names": {
      "en": "Sopa da Pedra",
      "zh": "葡式豆肉浓汤",
      "nl": "Sopa da Pedra",
      "local": "Sopa da Pedra"
    },
    "category": "soup",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Sopa da Pedra is a common Portuguese menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "葡式豆肉浓汤是常见葡萄牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Sopa da Pedra is een veelvoorkomend Portugees menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with warm soup, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现warm soup，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met warm soup; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Portuguese restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见葡萄牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Portugees restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "broth",
        35,
        "base"
      ],
      [
        "mixed-vegetables",
        25,
        "body"
      ],
      [
        "potato",
        15,
        "body"
      ],
      [
        "cream",
        10,
        "richness"
      ],
      [
        "black-pepper",
        5,
        "seasoning",
        "seasoning"
      ],
      [
        "parsley",
        10,
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
      "warming"
    ],
    "textureProfile": [
      "brothy or creamy",
      "soft bite"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "soup"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, warming profile sounds appealing.",
      "zh": "如果你想要savory、warming的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, warming je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "canja-de-galinha",
    "metadataCode": "125042",
    "cuisineId": "portuguese",
    "names": {
      "en": "Canja de Galinha",
      "zh": "葡式鸡汤米粥",
      "nl": "Canja de Galinha",
      "local": "Canja de Galinha"
    },
    "category": "soup",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Canja de Galinha is a common Portuguese menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "葡式鸡汤米粥是常见葡萄牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Canja de Galinha is een veelvoorkomend Portugees menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with warm soup, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现warm soup，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met warm soup; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Portuguese restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见葡萄牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Portugees restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "broth",
        35,
        "base"
      ],
      [
        "mixed-vegetables",
        25,
        "body"
      ],
      [
        "potato",
        15,
        "body"
      ],
      [
        "cream",
        10,
        "richness"
      ],
      [
        "black-pepper",
        5,
        "seasoning",
        "seasoning"
      ],
      [
        "parsley",
        10,
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
      "warming"
    ],
    "textureProfile": [
      "brothy or creamy",
      "soft bite"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "soup"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, warming profile sounds appealing.",
      "zh": "如果你想要savory、warming的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, warming je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "feijoada-a-transmontana",
    "metadataCode": "125043",
    "cuisineId": "portuguese",
    "names": {
      "en": "Feijoada a Transmontana",
      "zh": "葡北豆肉炖锅",
      "nl": "Feijoada a Transmontana",
      "local": "Feijoada a Transmontana"
    },
    "category": "stew",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Feijoada a Transmontana is a common Portuguese menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "葡北豆肉炖锅是常见葡萄牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Feijoada a Transmontana is een veelvoorkomend Portugees menu-item, beschreven voor snelle bestelkeuzes."
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
        "en": "A likely Portuguese restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见葡萄牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Portugees restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
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
    "id": "chanfana",
    "metadataCode": "125044",
    "cuisineId": "portuguese",
    "names": {
      "en": "Chanfana",
      "zh": "红酒炖山羊肉",
      "nl": "Chanfana",
      "local": "Chanfana"
    },
    "category": "stew",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Chanfana is a common Portuguese menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "红酒炖山羊肉是常见葡萄牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Chanfana is een veelvoorkomend Portugees menu-item, beschreven voor snelle bestelkeuzes."
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
        "en": "A likely Portuguese restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见葡萄牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Portugees restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
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
    "id": "cabrito-assado",
    "metadataCode": "125045",
    "cuisineId": "portuguese",
    "names": {
      "en": "Cabrito Assado",
      "zh": "烤小山羊",
      "nl": "Cabrito Assado",
      "local": "Cabrito Assado"
    },
    "category": "meat",
    "cookingMethods": [
      "braised"
    ],
    "shortDescription": {
      "en": "Cabrito Assado is a common Portuguese menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "烤小山羊是常见葡萄牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Cabrito Assado is een veelvoorkomend Portugees menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with tender meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现tender meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met tender meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Portuguese restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见葡萄牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Portugees restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "beef",
        45,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "mixed-vegetables",
        15,
        "body"
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
      "herbs",
      "sauce",
      "savory base"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "tender meat",
      "saucy or browned edges"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "meat"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "arroz-de-tamboril",
    "metadataCode": "125046",
    "cuisineId": "portuguese",
    "names": {
      "en": "Arroz de Tamboril",
      "zh": "安康鱼米饭",
      "nl": "Arroz de Tamboril",
      "local": "Arroz de Tamboril"
    },
    "category": "fish",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Arroz de Tamboril is a common Portuguese menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "安康鱼米饭是常见葡萄牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Arroz de Tamboril is een veelvoorkomend Portugees menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fish, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fish，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fish; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Portuguese restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见葡萄牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Portugees restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "fish-fillet",
        60,
        "main"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "mixed-vegetables",
        10,
        "body"
      ],
      [
        "lemon",
        5,
        "brightness"
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
      "mild"
    ],
    "textureProfile": [
      "tender fish",
      "light flaky bite"
    ],
    "riskFlags": [
      "contains-fish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "fish"
    ],
    "avoidIfTags": [
      "fish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "lulas-recheadas",
    "metadataCode": "125047",
    "cuisineId": "portuguese",
    "names": {
      "en": "Lulas Recheadas",
      "zh": "葡式酿鱿鱼",
      "nl": "Lulas Recheadas",
      "local": "Lulas Recheadas"
    },
    "category": "seafood",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Lulas Recheadas is a common Portuguese menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "葡式酿鱿鱼是常见葡萄牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Lulas Recheadas is een veelvoorkomend Portugees menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fish or seafood, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fish or seafood，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fish or seafood; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Portuguese restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见葡萄牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Portugees restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "fish-fillet",
        40,
        "main"
      ],
      [
        "mussels",
        20,
        "seafood"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "lemon",
        10,
        "brightness"
      ],
      [
        "olive-oil",
        10,
        "finish",
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
      "tender seafood",
      "bright savory finish"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-shellfish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "seafood"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "shellfish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, briny profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、briny的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, briny je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "chocos-fritos",
    "metadataCode": "125048",
    "cuisineId": "portuguese",
    "names": {
      "en": "Chocos Fritos",
      "zh": "葡式炸墨鱼",
      "nl": "Chocos Fritos",
      "local": "Chocos Fritos"
    },
    "category": "fried",
    "cookingMethods": [
      "fried"
    ],
    "shortDescription": {
      "en": "Chocos Fritos is a common Portuguese menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "葡式炸墨鱼是常见葡萄牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Chocos Fritos is een veelvoorkomend Portugees menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fried snack or main, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fried snack or main，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fried snack or main; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Portuguese restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见葡萄牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Portugees restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "coating"
      ],
      [
        "potato",
        25,
        "body"
      ],
      [
        "fish-fillet",
        20,
        "main"
      ],
      [
        "egg",
        10,
        "binder"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "sea-salt",
        10,
        "seasoning",
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
      "rich"
    ],
    "textureProfile": [
      "crisp outside",
      "soft center"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-fish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "fried"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "caldeirada",
    "metadataCode": "125049",
    "cuisineId": "portuguese",
    "names": {
      "en": "Caldeirada",
      "zh": "葡式鱼锅",
      "nl": "Caldeirada",
      "local": "Caldeirada"
    },
    "category": "fish",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Caldeirada is a common Portuguese menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "葡式鱼锅是常见葡萄牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Caldeirada is een veelvoorkomend Portugees menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fish, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fish，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fish; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Portuguese restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见葡萄牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Portugees restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "fish-fillet",
        60,
        "main"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "mixed-vegetables",
        10,
        "body"
      ],
      [
        "lemon",
        5,
        "brightness"
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
      "mild"
    ],
    "textureProfile": [
      "tender fish",
      "light flaky bite"
    ],
    "riskFlags": [
      "contains-fish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "fish"
    ],
    "avoidIfTags": [
      "fish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "queijo-da-serra",
    "metadataCode": "125050",
    "cuisineId": "portuguese",
    "names": {
      "en": "Queijo da Serra",
      "zh": "塞拉软奶酪",
      "nl": "Queijo da Serra",
      "local": "Queijo da Serra"
    },
    "category": "cheese",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Queijo da Serra is a common Portuguese menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "塞拉软奶酪是常见葡萄牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Queijo da Serra is een veelvoorkomend Portugees menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with cheese-focused dish, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现cheese-focused dish，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met cheese-focused dish; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Portuguese restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见葡萄牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Portugees restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "cheese",
        45,
        "main"
      ],
      [
        "bread",
        20,
        "base"
      ],
      [
        "mixed-vegetables",
        15,
        "body"
      ],
      [
        "olive-oil",
        10,
        "finish",
        "seasoning"
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
      "cheese",
      "cream",
      "pepper"
    ],
    "basicTaste": [
      "savory",
      "creamy"
    ],
    "textureProfile": [
      "creamy or firm cheese",
      "savory finish"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "cheese"
    ],
    "avoidIfTags": [
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Order if this savory, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "farinheira",
    "metadataCode": "125051",
    "cuisineId": "portuguese",
    "names": {
      "en": "Farinheira",
      "zh": "葡式面粉香肠",
      "nl": "Farinheira",
      "local": "Farinheira"
    },
    "category": "pork",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Farinheira is a common Portuguese menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "葡式面粉香肠是常见葡萄牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Farinheira is een veelvoorkomend Portugees menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with pork or cured meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现pork or cured meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met pork or cured meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Portuguese restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见葡萄牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Portugees restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "pork",
        50,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "cabbage",
        10,
        "body"
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
      ],
      [
        "parsley",
        10,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork",
      "pepper",
      "browned edges"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "savory meat",
      "browned edges"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "pork"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "morcela-portuguesa",
    "metadataCode": "125052",
    "cuisineId": "portuguese",
    "names": {
      "en": "Morcela Portuguesa",
      "zh": "葡式血肠",
      "nl": "Morcela Portuguesa",
      "local": "Morcela Portuguesa"
    },
    "category": "pork",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Morcela Portuguesa is a common Portuguese menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "葡式血肠是常见葡萄牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Morcela Portuguesa is een veelvoorkomend Portugees menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with pork or cured meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现pork or cured meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met pork or cured meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Portuguese restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见葡萄牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Portugees restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "pork",
        50,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "cabbage",
        10,
        "body"
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
      ],
      [
        "parsley",
        10,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork",
      "pepper",
      "browned edges"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "savory meat",
      "browned edges"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "pork"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "salada-de-polvo",
    "metadataCode": "125053",
    "cuisineId": "portuguese",
    "names": {
      "en": "Salada de Polvo",
      "zh": "葡式章鱼沙拉",
      "nl": "Salada de Polvo",
      "local": "Salada de Polvo"
    },
    "category": "seafood",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Salada de Polvo is a common Portuguese menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "葡式章鱼沙拉是常见葡萄牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Salada de Polvo is een veelvoorkomend Portugees menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fish or seafood, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fish or seafood，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fish or seafood; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Portuguese restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见葡萄牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Portugees restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "fish-fillet",
        40,
        "main"
      ],
      [
        "mussels",
        20,
        "seafood"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "lemon",
        10,
        "brightness"
      ],
      [
        "olive-oil",
        10,
        "finish",
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
      "tender seafood",
      "bright savory finish"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-shellfish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "seafood"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "shellfish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, briny profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、briny的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, briny je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "migas-portuguesas",
    "metadataCode": "125054",
    "cuisineId": "portuguese",
    "names": {
      "en": "Migas Portuguesas",
      "zh": "葡式面包碎配菜",
      "nl": "Migas Portuguesas",
      "local": "Migas Portuguesas"
    },
    "category": "bread",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Migas Portuguesas is a common Portuguese menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "葡式面包碎配菜是常见葡萄牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Migas Portuguesas is een veelvoorkomend Portugees menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with baked bread or pastry, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现baked bread or pastry，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met baked bread or pastry; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Portuguese restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见葡萄牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Portugees restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "bread",
        45,
        "base"
      ],
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "cheese",
        15,
        "filling"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "sea-salt",
        5,
        "seasoning",
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
      "mild"
    ],
    "textureProfile": [
      "soft bread",
      "crisp edges"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "bread"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "broa",
    "metadataCode": "125055",
    "cuisineId": "portuguese",
    "names": {
      "en": "Broa",
      "zh": "葡式玉米面包",
      "nl": "Broa",
      "local": "Broa"
    },
    "category": "bread",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Broa is a common Portuguese menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "葡式玉米面包是常见葡萄牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Broa is een veelvoorkomend Portugees menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with baked bread or pastry, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现baked bread or pastry，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met baked bread or pastry; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Portuguese restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见葡萄牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Portugees restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "bread",
        45,
        "base"
      ],
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "cheese",
        15,
        "filling"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "sea-salt",
        5,
        "seasoning",
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
      "mild"
    ],
    "textureProfile": [
      "soft bread",
      "crisp edges"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "bread"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "bolas-de-berlim",
    "metadataCode": "125056",
    "cuisineId": "portuguese",
    "names": {
      "en": "Bolas de Berlim",
      "zh": "葡式柏林甜甜圈",
      "nl": "Bolas de Berlim",
      "local": "Bolas de Berlim"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Bolas de Berlim is a common Portuguese menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "葡式柏林甜甜圈是常见葡萄牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Bolas de Berlim is een veelvoorkomend Portugees menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Portuguese restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见葡萄牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Portugees restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "travesseiros",
    "metadataCode": "125057",
    "cuisineId": "portuguese",
    "names": {
      "en": "Travesseiros",
      "zh": "辛特拉杏仁枕头酥",
      "nl": "Travesseiros",
      "local": "Travesseiros"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Travesseiros is a common Portuguese menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "辛特拉杏仁枕头酥是常见葡萄牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Travesseiros is een veelvoorkomend Portugees menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Portuguese restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见葡萄牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Portugees restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "pao-de-lo",
    "metadataCode": "125058",
    "cuisineId": "portuguese",
    "names": {
      "en": "Pao de Lo",
      "zh": "葡式海绵蛋糕",
      "nl": "Pao de Lo",
      "local": "Pao de Lo"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Pao de Lo is a common Portuguese menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "葡式海绵蛋糕是常见葡萄牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Pao de Lo is een veelvoorkomend Portugees menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Portuguese restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见葡萄牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Portugees restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "toucinho-do-ceu",
    "metadataCode": "125059",
    "cuisineId": "portuguese",
    "names": {
      "en": "Toucinho do Ceu",
      "zh": "杏仁蛋黄蛋糕",
      "nl": "Toucinho do Ceu",
      "local": "Toucinho do Ceu"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Toucinho do Ceu is a common Portuguese menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "杏仁蛋黄蛋糕是常见葡萄牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Toucinho do Ceu is een veelvoorkomend Portugees menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Portuguese restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见葡萄牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Portugees restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "sericaia",
    "metadataCode": "125060",
    "cuisineId": "portuguese",
    "names": {
      "en": "Sericaia",
      "zh": "阿连特茹蛋奶甜品",
      "nl": "Sericaia",
      "local": "Sericaia"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Sericaia is a common Portuguese menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "阿连特茹蛋奶甜品是常见葡萄牙菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Sericaia is een veelvoorkomend Portugees menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Portuguese restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见葡萄牙菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Portugees restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "flaskpannkaka",
    "metadataCode": "128031",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Flaskpannkaka",
      "zh": "瑞典培根烤煎饼",
      "nl": "Flaskpannkaka",
      "local": "Flaskpannkaka"
    },
    "category": "pork",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Flaskpannkaka is a common Scandinavian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "瑞典培根烤煎饼是常见北欧菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Flaskpannkaka is een veelvoorkomend Scandinavisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with pork or cured meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现pork or cured meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met pork or cured meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Scandinavian restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见北欧菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Scandinavisch restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "pork",
        50,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "cabbage",
        10,
        "body"
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
      ],
      [
        "parsley",
        10,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork",
      "pepper",
      "browned edges"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "savory meat",
      "browned edges"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "pork"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "isterband",
    "metadataCode": "128032",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Isterband",
      "zh": "瑞典烟熏香肠",
      "nl": "Isterband",
      "local": "Isterband"
    },
    "category": "pork",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Isterband is a common Scandinavian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "瑞典烟熏香肠是常见北欧菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Isterband is een veelvoorkomend Scandinavisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with pork or cured meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现pork or cured meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met pork or cured meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Scandinavian restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见北欧菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Scandinavisch restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "pork",
        50,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "cabbage",
        10,
        "body"
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
      ],
      [
        "parsley",
        10,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork",
      "pepper",
      "browned edges"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "savory meat",
      "browned edges"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "pork"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
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
    "category": "pork",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Falukorv is a common Scandinavian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "瑞典法伦香肠是常见北欧菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Falukorv is een veelvoorkomend Scandinavisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with pork or cured meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现pork or cured meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met pork or cured meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Scandinavian restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见北欧菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Scandinavisch restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "pork",
        50,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "cabbage",
        10,
        "body"
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
      ],
      [
        "parsley",
        10,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork",
      "pepper",
      "browned edges"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "savory meat",
      "browned edges"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "pork"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
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
      "braised"
    ],
    "shortDescription": {
      "en": "Wallenbergare is a common Scandinavian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "瑞典小牛肉饼是常见北欧菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Wallenbergare is een veelvoorkomend Scandinavisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with tender meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现tender meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met tender meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Scandinavian restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见北欧菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Scandinavisch restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "beef",
        45,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "mixed-vegetables",
        15,
        "body"
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
      "herbs",
      "sauce",
      "savory base"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "tender meat",
      "saucy or browned edges"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "meat"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
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
      "en": "Medisterpolse",
      "zh": "丹麦香肠",
      "nl": "Medisterpolse",
      "local": "Medisterpolse"
    },
    "category": "pork",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Medisterpolse is a common Scandinavian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "丹麦香肠是常见北欧菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Medisterpolse is een veelvoorkomend Scandinavisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with pork or cured meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现pork or cured meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met pork or cured meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Scandinavian restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见北欧菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Scandinavisch restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "pork",
        50,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "cabbage",
        10,
        "body"
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
      ],
      [
        "parsley",
        10,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork",
      "pepper",
      "browned edges"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "savory meat",
      "browned edges"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "pork"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "biksemad",
    "metadataCode": "128037",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Biksemad",
      "zh": "丹麦土豆肉丁锅",
      "nl": "Biksemad",
      "local": "Biksemad"
    },
    "category": "meat",
    "cookingMethods": [
      "braised"
    ],
    "shortDescription": {
      "en": "Biksemad is a common Scandinavian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "丹麦土豆肉丁锅是常见北欧菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Biksemad is een veelvoorkomend Scandinavisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with tender meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现tender meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met tender meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Scandinavian restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见北欧菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Scandinavisch restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "beef",
        45,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "mixed-vegetables",
        15,
        "body"
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
      "herbs",
      "sauce",
      "savory base"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "tender meat",
      "saucy or browned edges"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "meat"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "rugbrod",
    "metadataCode": "128038",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Rugbrod",
      "zh": "丹麦黑麦面包",
      "nl": "Rugbrod",
      "local": "Rugbrod"
    },
    "category": "bread",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Rugbrod is a common Scandinavian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "丹麦黑麦面包是常见北欧菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Rugbrod is een veelvoorkomend Scandinavisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with baked bread or pastry, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现baked bread or pastry，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met baked bread or pastry; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Scandinavian restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见北欧菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Scandinavisch restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "bread",
        45,
        "base"
      ],
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "cheese",
        15,
        "filling"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "sea-salt",
        5,
        "seasoning",
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
      "mild"
    ],
    "textureProfile": [
      "soft bread",
      "crisp edges"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "bread"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "rommegrot",
    "metadataCode": "128039",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Rommegrot",
      "zh": "挪威酸奶油粥",
      "nl": "Rommegrot",
      "local": "Rommegrot"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Rommegrot is a common Scandinavian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "挪威酸奶油粥是常见北欧菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Rommegrot is een veelvoorkomend Scandinavisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Scandinavian restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见北欧菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Scandinavisch restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
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
      "en": "Pinnekjott",
      "zh": "挪威风干羊排",
      "nl": "Pinnekjott",
      "local": "Pinnekjott"
    },
    "category": "meat",
    "cookingMethods": [
      "braised"
    ],
    "shortDescription": {
      "en": "Pinnekjott is a common Scandinavian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "挪威风干羊排是常见北欧菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Pinnekjott is een veelvoorkomend Scandinavisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with tender meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现tender meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met tender meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Scandinavian restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见北欧菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Scandinavisch restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "beef",
        45,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "mixed-vegetables",
        15,
        "body"
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
      "herbs",
      "sauce",
      "savory base"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "tender meat",
      "saucy or browned edges"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "meat"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "ribbe-norwegian",
    "metadataCode": "128042",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Norwegian Ribbe",
      "zh": "挪威脆皮烤猪肋",
      "nl": "Norwegian Ribbe",
      "local": "Norwegian Ribbe"
    },
    "category": "pork",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Norwegian Ribbe is a common Scandinavian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "挪威脆皮烤猪肋是常见北欧菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Norwegian Ribbe is een veelvoorkomend Scandinavisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with pork or cured meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现pork or cured meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met pork or cured meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Scandinavian restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见北欧菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Scandinavisch restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "pork",
        50,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "cabbage",
        10,
        "body"
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
      ],
      [
        "parsley",
        10,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork",
      "pepper",
      "browned edges"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "savory meat",
      "browned edges"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "pork"
    ],
    "avoidIfTags": [
      "no-pork"
    ],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "fiskegrateng",
    "metadataCode": "128043",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Fiskegrateng",
      "zh": "挪威鱼肉焗烤",
      "nl": "Fiskegrateng",
      "local": "Fiskegrateng"
    },
    "category": "fish",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Fiskegrateng is a common Scandinavian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "挪威鱼肉焗烤是常见北欧菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Fiskegrateng is een veelvoorkomend Scandinavisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fish, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fish，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fish; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Scandinavian restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见北欧菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Scandinavisch restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "fish-fillet",
        60,
        "main"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "mixed-vegetables",
        10,
        "body"
      ],
      [
        "lemon",
        5,
        "brightness"
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
      "mild"
    ],
    "textureProfile": [
      "tender fish",
      "light flaky bite"
    ],
    "riskFlags": [
      "contains-fish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "fish"
    ],
    "avoidIfTags": [
      "fish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "skrei",
    "metadataCode": "128044",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Skrei",
      "zh": "挪威冬鳕",
      "nl": "Skrei",
      "local": "Skrei"
    },
    "category": "fish",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Skrei is a common Scandinavian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "挪威冬鳕是常见北欧菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Skrei is een veelvoorkomend Scandinavisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fish, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fish，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fish; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Scandinavian restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见北欧菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Scandinavisch restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "fish-fillet",
        60,
        "main"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "mixed-vegetables",
        10,
        "body"
      ],
      [
        "lemon",
        5,
        "brightness"
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
      "mild"
    ],
    "textureProfile": [
      "tender fish",
      "light flaky bite"
    ],
    "riskFlags": [
      "contains-fish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "fish"
    ],
    "avoidIfTags": [
      "fish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "smalahove",
    "metadataCode": "128045",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Smalahove",
      "zh": "挪威羊头",
      "nl": "Smalahove",
      "local": "Smalahove"
    },
    "category": "meat",
    "cookingMethods": [
      "braised"
    ],
    "shortDescription": {
      "en": "Smalahove is a common Scandinavian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "挪威羊头是常见北欧菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Smalahove is een veelvoorkomend Scandinavisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with tender meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现tender meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met tender meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Scandinavian restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见北欧菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Scandinavisch restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "beef",
        45,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "mixed-vegetables",
        15,
        "body"
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
      "herbs",
      "sauce",
      "savory base"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "tender meat",
      "saucy or browned edges"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "meat"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "blabarsoppa",
    "metadataCode": "128046",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Blabarsoppa",
      "zh": "瑞典蓝莓汤",
      "nl": "Blabarsoppa",
      "local": "Blabarsoppa"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Blabarsoppa is a common Scandinavian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "瑞典蓝莓汤是常见北欧菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Blabarsoppa is een veelvoorkomend Scandinavisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Scandinavian restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见北欧菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Scandinavisch restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
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
      "zh": "丹麦肉桂卷",
      "nl": "Kanelsnegle",
      "local": "Kanelsnegle"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Kanelsnegle is a common Scandinavian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "丹麦肉桂卷是常见北欧菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Kanelsnegle is een veelvoorkomend Scandinavisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Scandinavian restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见北欧菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Scandinavisch restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "wienerbrod",
    "metadataCode": "128049",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Wienerbrod",
      "zh": "丹麦酥皮点心",
      "nl": "Wienerbrod",
      "local": "Wienerbrod"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Wienerbrod is a common Scandinavian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "丹麦酥皮点心是常见北欧菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Wienerbrod is een veelvoorkomend Scandinavisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Scandinavian restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见北欧菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Scandinavisch restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "kransekake",
    "metadataCode": "128050",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Kransekake",
      "zh": "挪威杏仁圈塔",
      "nl": "Kransekake",
      "local": "Kransekake"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Kransekake is a common Scandinavian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "挪威杏仁圈塔是常见北欧菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Kransekake is een veelvoorkomend Scandinavisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Scandinavian restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见北欧菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Scandinavisch restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "lefse",
    "metadataCode": "128051",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Lefse",
      "zh": "挪威土豆薄饼",
      "nl": "Lefse",
      "local": "Lefse"
    },
    "category": "bread",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Lefse is a common Scandinavian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "挪威土豆薄饼是常见北欧菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Lefse is een veelvoorkomend Scandinavisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with baked bread or pastry, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现baked bread or pastry，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met baked bread or pastry; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Scandinavian restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见北欧菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Scandinavisch restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "bread",
        45,
        "base"
      ],
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "cheese",
        15,
        "filling"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "sea-salt",
        5,
        "seasoning",
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
      "mild"
    ],
    "textureProfile": [
      "soft bread",
      "crisp edges"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "bread"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "pannukakku",
    "metadataCode": "128052",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Pannukakku",
      "zh": "芬兰烤煎饼",
      "nl": "Pannukakku",
      "local": "Pannukakku"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Pannukakku is a common Scandinavian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "芬兰烤煎饼是常见北欧菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Pannukakku is een veelvoorkomend Scandinavisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Scandinavian restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见北欧菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Scandinavisch restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "poronkaristys",
    "metadataCode": "128053",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Poronkaristys",
      "zh": "芬兰炒驯鹿肉",
      "nl": "Poronkaristys",
      "local": "Poronkaristys"
    },
    "category": "meat",
    "cookingMethods": [
      "braised"
    ],
    "shortDescription": {
      "en": "Poronkaristys is a common Scandinavian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "芬兰炒驯鹿肉是常见北欧菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Poronkaristys is een veelvoorkomend Scandinavisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with tender meat, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现tender meat，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met tender meat; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Scandinavian restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见北欧菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Scandinavisch restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "beef",
        45,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "mixed-vegetables",
        15,
        "body"
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
      "herbs",
      "sauce",
      "savory base"
    ],
    "basicTaste": [
      "savory",
      "rich"
    ],
    "textureProfile": [
      "tender meat",
      "saucy or browned edges"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "meat"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, rich profile sounds appealing.",
      "zh": "如果你想要savory、rich的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, rich je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "karjalanpaisti",
    "metadataCode": "128054",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Karjalanpaisti",
      "zh": "卡累利阿炖肉",
      "nl": "Karjalanpaisti",
      "local": "Karjalanpaisti"
    },
    "category": "stew",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Karjalanpaisti is a common Scandinavian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "卡累利阿炖肉是常见北欧菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Karjalanpaisti is een veelvoorkomend Scandinavisch menu-item, beschreven voor snelle bestelkeuzes."
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
        "en": "A likely Scandinavian restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见北欧菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Scandinavisch restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
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
    "id": "silakkapihvit",
    "metadataCode": "128055",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Silakkapihvit",
      "zh": "芬兰煎鲱鱼排",
      "nl": "Silakkapihvit",
      "local": "Silakkapihvit"
    },
    "category": "fish",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Silakkapihvit is a common Scandinavian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "芬兰煎鲱鱼排是常见北欧菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Silakkapihvit is een veelvoorkomend Scandinavisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fish, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fish，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fish; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Scandinavian restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见北欧菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Scandinavisch restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "fish-fillet",
        60,
        "main"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "mixed-vegetables",
        10,
        "body"
      ],
      [
        "lemon",
        5,
        "brightness"
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
      "mild"
    ],
    "textureProfile": [
      "tender fish",
      "light flaky bite"
    ],
    "riskFlags": [
      "contains-fish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "fish"
    ],
    "avoidIfTags": [
      "fish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "hernekeitto",
    "metadataCode": "128056",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Hernekeitto",
      "zh": "芬兰豌豆汤",
      "nl": "Hernekeitto",
      "local": "Hernekeitto"
    },
    "category": "soup",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Hernekeitto is a common Scandinavian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "芬兰豌豆汤是常见北欧菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Hernekeitto is een veelvoorkomend Scandinavisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with warm soup, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现warm soup，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met warm soup; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Scandinavian restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见北欧菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Scandinavisch restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "broth",
        35,
        "base"
      ],
      [
        "mixed-vegetables",
        25,
        "body"
      ],
      [
        "potato",
        15,
        "body"
      ],
      [
        "cream",
        10,
        "richness"
      ],
      [
        "black-pepper",
        5,
        "seasoning",
        "seasoning"
      ],
      [
        "parsley",
        10,
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
      "warming"
    ],
    "textureProfile": [
      "brothy or creamy",
      "soft bite"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "soup"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Order if this savory, warming profile sounds appealing.",
      "zh": "如果你想要savory、warming的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, warming je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "rakmacka",
    "metadataCode": "128057",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Rakmacka",
      "zh": "瑞典虾仁开放三明治",
      "nl": "Rakmacka",
      "local": "Rakmacka"
    },
    "category": "seafood",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Rakmacka is a common Scandinavian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "瑞典虾仁开放三明治是常见北欧菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Rakmacka is een veelvoorkomend Scandinavisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fish or seafood, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fish or seafood，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fish or seafood; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Scandinavian restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见北欧菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Scandinavisch restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "fish-fillet",
        40,
        "main"
      ],
      [
        "mussels",
        20,
        "seafood"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "lemon",
        10,
        "brightness"
      ],
      [
        "olive-oil",
        10,
        "finish",
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
      "tender seafood",
      "bright savory finish"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-shellfish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "seafood"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "shellfish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, briny profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、briny的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, briny je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "silltallrik",
    "metadataCode": "128058",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Silltallrik",
      "zh": "北欧鲱鱼拼盘",
      "nl": "Silltallrik",
      "local": "Silltallrik"
    },
    "category": "fish",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Silltallrik is a common Scandinavian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "北欧鲱鱼拼盘是常见北欧菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Silltallrik is een veelvoorkomend Scandinavisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fish, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fish，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fish; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Scandinavian restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见北欧菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Scandinavisch restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "fish-fillet",
        60,
        "main"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "mixed-vegetables",
        10,
        "body"
      ],
      [
        "lemon",
        5,
        "brightness"
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
      "mild"
    ],
    "textureProfile": [
      "tender fish",
      "light flaky bite"
    ],
    "riskFlags": [
      "contains-fish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "fish"
    ],
    "avoidIfTags": [
      "fish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "gravlax-toast",
    "metadataCode": "128059",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Gravlax Toast",
      "zh": "腌三文鱼吐司",
      "nl": "Gravlax Toast",
      "local": "Gravlax Toast"
    },
    "category": "fish",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Gravlax Toast is a common Scandinavian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "腌三文鱼吐司是常见北欧菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Gravlax Toast is een veelvoorkomend Scandinavisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with fish, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现fish，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met fish; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Scandinavian restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见北欧菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Scandinavisch restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "fish-fillet",
        60,
        "main"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "mixed-vegetables",
        10,
        "body"
      ],
      [
        "lemon",
        5,
        "brightness"
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
      "mild"
    ],
    "textureProfile": [
      "tender fish",
      "light flaky bite"
    ],
    "riskFlags": [
      "contains-fish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "fish"
    ],
    "avoidIfTags": [
      "fish-allergy"
    ],
    "orderVerdict": {
      "en": "Order if this savory, mild profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要savory、mild的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van savory, mild je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  },
  {
    "id": "rabarberpaj",
    "metadataCode": "128060",
    "cuisineId": "scandinavian",
    "names": {
      "en": "Rabarberpaj",
      "zh": "瑞典大黄派",
      "nl": "Rabarberpaj",
      "local": "Rabarberpaj"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Rabarberpaj is a common Scandinavian menu item; DishKAI explains it by taste, texture, portion feel, and ordering watch-outs rather than recipe steps.",
      "zh": "瑞典大黄派是常见北欧菜菜单菜品，重点帮助判断它是什么、口味如何、是否适合点。",
      "nl": "Rabarberpaj is een veelvoorkomend Scandinavisch menu-item, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served with sweet dessert, so the ordering experience depends on richness, sauce, and portion size.",
      "zh": "常见做法风格会呈现sweet dessert，点餐时主要看浓郁度、酱汁和分量。",
      "nl": "Meestal met sweet dessert; rijkdom, saus en portiegrootte bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "europe-depth"
      ],
      "description": {
        "en": "A likely Scandinavian restaurant-menu item added for the European depth pass toward 60 verified DishKAI references per cuisine.",
        "zh": "欧洲菜系深度补全中加入的常见北欧菜餐厅菜单菜品，用于将该菜系补到 60 道 verified references。",
        "nl": "Een waarschijnlijk Scandinavisch restaurantmenu-item voor de Europese verdiepingsronde naar 60 geverifieerde DishKAI-referenties per keuken."
      }
    },
    "composition": [
      [
        "wheat-flour",
        25,
        "base"
      ],
      [
        "sugar",
        20,
        "sweetness"
      ],
      [
        "egg",
        15,
        "structure"
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
        "fruit-sauce-or-caramel",
        15,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "sugar",
      "baked pastry"
    ],
    "basicTaste": [
      "sweet",
      "creamy"
    ],
    "textureProfile": [
      "sweet dessert",
      "soft or crisp bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "europe-depth",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Order if this sweet, creamy profile sounds appealing; check allergens or diet limits if that matters.",
      "zh": "如果你想要sweet、creamy的口味，可以考虑点；有饮食限制时先确认配料。",
      "nl": "Bestel dit als dit profiel van sweet, creamy je aanspreekt; check ingrediënten bij dieetwensen."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.72,
    "restaurantVariationLevel": "medium"
  }
];

export const europeDepthDishes = europeDepthDishConfigs.map((config) => starterDish(config));
