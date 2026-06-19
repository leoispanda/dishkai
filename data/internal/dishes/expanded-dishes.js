import { starterDish } from "./starter-dish.js";

export const expandedDishes = [
  starterDish({
    "id": "pad-see-ew",
    "metadataCode": "108006",
    "cuisineId": "thai",
    "names": {
      "en": "Pad See Ew",
      "zh": "泰式酱油炒河粉",
      "nl": "Pad see ew",
      "local": "ผัดซีอิ๊ว"
    },
    "category": "noodle",
    "cookingMethods": [
      "stir-fried"
    ],
    "shortDescription": {
      "en": "Wide rice noodles stir-fried with dark soy seasoning, egg, Chinese broccoli, and usually chicken, pork, or beef.",
      "zh": "宽河粉用深色酱油快炒，常配鸡蛋、芥蓝和鸡肉、猪肉或牛肉。",
      "nl": "Brede rijstnoedels geroerbakt met donkere sojasaus, ei, Chinese broccoli en meestal kip, varken of rund."
    },
    "cookingProfile": {
      "en": "Cooked fast in a hot wok, so the noodles feel smoky, glossy, and chewy rather than saucy.",
      "zh": "热锅快炒上桌，河粉通常带锅气、油润、有嚼感，而不是很多汤汁。",
      "nl": "Snel uit de wok, waardoor de noedels rokerig, glanzend en stevig aanvoelen."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "first-timer-friendly",
        "noodle"
      ],
      "description": {
        "en": "A classic Thai wok-noodle order for diners who want savory soy flavor rather than sweet-sour Pad Thai.",
        "zh": "经典泰式锅炒河粉，适合想要咸香酱油风味、不想吃酸甜 Pad Thai 的人。",
        "nl": "Een klassieke Thaise woknoedel voor wie hartige sojasmaak wil in plaats van zoetzure Pad Thai."
      }
    },
    "composition": [
      [
        "rice-noodles",
        45,
        "base"
      ],
      [
        "beef",
        15,
        "protein"
      ],
      [
        "egg",
        10,
        "main"
      ],
      [
        "chinese-broccoli",
        15,
        "vegetable"
      ],
      [
        "soy-sauce",
        10,
        "dark wok seasoning",
        "seasoning"
      ],
      [
        "garlic",
        5,
        "aromatic",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "soy-sauce",
      "garlic"
    ],
    "basicTaste": [
      "savory",
      "umami",
      "mildly-sweet",
      "lightly-smoky"
    ],
    "textureProfile": [
      "chewy wide noodles",
      "glossy wok coating",
      "tender greens"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-soy",
      "contains-gluten"
    ],
    "dietaryFlags": [
      "protein-varies-by-restaurant"
    ],
    "goodForTags": [
      "first-timer-friendly",
      "noodle-lover",
      "safe-choice"
    ],
    "avoidIfTags": [
      "egg-allergy",
      "soy-allergy",
      "gluten-allergy"
    ],
    "orderVerdict": {
      "en": "A steady choice if you want mild Thai wok noodles with deep soy flavor and little heat.",
      "zh": "想吃不太辣、酱油咸香、锅气明显的泰式炒河粉时很稳。",
      "nl": "Een stabiele keuze als je milde Thaise woknoedels met diepe sojasmaak wilt."
    },
    "spiceLevel": 1,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "pad-kra-pao",
    "metadataCode": "108007",
    "cuisineId": "thai",
    "names": {
      "en": "Pad Kra Pao",
      "zh": "泰式打抛肉饭",
      "nl": "Pad kra pao",
      "local": "ผัดกะเพรา"
    },
    "category": "rice",
    "cookingMethods": [
      "stir-fried"
    ],
    "shortDescription": {
      "en": "Spicy holy-basil stir-fry, often minced pork or chicken, served over rice and commonly topped with a fried egg.",
      "zh": "用圣罗勒、辣椒和蒜快炒肉末，盖在米饭上，常加一颗煎蛋。",
      "nl": "Pittige roerbak met heilige basilicum, vaak gehakt varken of kip, op rijst en vaak met gebakken ei."
    },
    "cookingProfile": {
      "en": "A hot wok keeps it punchy and aromatic, with dry stir-fry juices soaking into the rice.",
      "zh": "热锅快炒让香气和辣味集中，肉汁会渗进米饭里。",
      "nl": "Door de hete wok blijft het krachtig en aromatisch, met hartige sappen in de rijst."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "rice",
        "spicy"
      ],
      "description": {
        "en": "A classic everyday Thai rice plate where holy basil and chili are the point.",
        "zh": "经典泰式日常盖饭，重点是圣罗勒香气和辣椒冲击。",
        "nl": "Een klassieke Thaise rijstschotel waarin basilicum en chili centraal staan."
      }
    },
    "composition": [
      [
        "steamed-rice",
        45,
        "base"
      ],
      [
        "minced-pork",
        25,
        "protein"
      ],
      [
        "egg",
        10,
        "fried topping"
      ],
      [
        "holy-basil",
        5,
        "signature aroma",
        "seasoning"
      ],
      [
        "fish-sauce",
        5,
        "salty umami",
        "seasoning"
      ],
      [
        "chili",
        5,
        "heat",
        "seasoning"
      ],
      [
        "garlic",
        5,
        "aromatic",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "holy-basil",
      "chili",
      "fish-sauce",
      "garlic"
    ],
    "basicTaste": [
      "savory",
      "spicy",
      "umami",
      "herbal"
    ],
    "textureProfile": [
      "soft rice",
      "juicy minced meat",
      "crisp fried egg edges"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-fish-sauce",
      "contains-pork",
      "can-be-spicy"
    ],
    "dietaryFlags": [
      "protein-varies-by-restaurant"
    ],
    "goodForTags": [
      "rice",
      "classic-dish",
      "spicy"
    ],
    "avoidIfTags": [
      "spice-sensitive",
      "egg-allergy",
      "pork-avoidant",
      "fish-allergy"
    ],
    "orderVerdict": {
      "en": "Order it when you want a bold Thai rice plate; ask for mild if chili heat worries you.",
      "zh": "想吃香辣下饭的泰式盖饭时可以点；怕辣就提前要求少辣。",
      "nl": "Bestel dit voor een krachtige Thaise rijstschotel; vraag mild als je gevoelig bent voor chili."
    },
    "spiceLevel": 3,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "khao-pad",
    "metadataCode": "108008",
    "cuisineId": "thai",
    "names": {
      "en": "Khao Pad",
      "zh": "泰式炒饭",
      "nl": "Khao pad",
      "local": "ข้าวผัด"
    },
    "category": "rice",
    "cookingMethods": [
      "stir-fried"
    ],
    "shortDescription": {
      "en": "Thai fried rice with egg, a light fish-sauce or soy seasoning, vegetables, lime, and usually shrimp, chicken, or crab.",
      "zh": "泰式炒饭常有鸡蛋、蔬菜、青柠和鱼露或酱油调味，蛋白可能是虾、鸡肉或蟹肉。",
      "nl": "Thaise gebakken rijst met ei, lichte vissaus- of sojasmaak, groenten, limoen en vaak garnaal, kip of krab."
    },
    "cookingProfile": {
      "en": "The rice is wok-fried so grains stay separate, lightly oily, and brightened by lime at the table.",
      "zh": "米饭热锅快炒，颗粒分明、微油润，上桌后常用青柠提味。",
      "nl": "De rijst wordt gewokt, blijft korrelig en licht olieachtig, met limoen voor frisheid."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "rice",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A common Thai restaurant comfort order, milder than many curries and salads.",
        "zh": "常见泰餐舒适型主食，通常比许多咖喱和沙拉更温和。",
        "nl": "Een veelvoorkomende Thaise comfortkeuze, meestal milder dan curry's en salades."
      }
    },
    "composition": [
      [
        "steamed-rice",
        50,
        "base"
      ],
      [
        "shrimp",
        15,
        "protein"
      ],
      [
        "egg",
        15,
        "main"
      ],
      [
        "mixed-vegetables",
        10,
        "vegetable"
      ],
      [
        "fish-sauce",
        5,
        "savory seasoning",
        "seasoning"
      ],
      [
        "lime",
        5,
        "fresh finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "fish-sauce",
      "lime"
    ],
    "basicTaste": [
      "savory",
      "mild",
      "lightly-sweet",
      "fresh"
    ],
    "textureProfile": [
      "separate rice grains",
      "soft egg",
      "juicy protein"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-shellfish",
      "contains-fish-sauce"
    ],
    "dietaryFlags": [
      "protein-varies-by-restaurant"
    ],
    "goodForTags": [
      "safe-choice",
      "rice",
      "first-timer-friendly"
    ],
    "avoidIfTags": [
      "egg-allergy",
      "shellfish-allergy",
      "fish-allergy"
    ],
    "orderVerdict": {
      "en": "A safe Thai pick when you want something familiar, filling, and not very spicy.",
      "zh": "想吃熟悉、管饱、不太辣的泰餐时，这是安全选择。",
      "nl": "Een veilige Thaise keuze als je iets herkenbaars, vullends en weinig pittigs wilt."
    },
    "spiceLevel": 1,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "tom-kha-gai",
    "metadataCode": "108009",
    "cuisineId": "thai",
    "names": {
      "en": "Tom Kha Gai",
      "zh": "泰式椰奶鸡汤",
      "nl": "Tom kha gai",
      "local": "ต้มข่าไก่"
    },
    "category": "soup",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "A creamy hot Thai chicken soup with coconut milk, lime, fish sauce, mushrooms, and lemongrass-style aromatics.",
      "zh": "温热椰奶鸡汤，常有青柠酸味、鱼露鲜味、蘑菇和香茅类香气。",
      "nl": "Romige warme Thaise kippensoep met kokosmelk, limoen, vissaus, paddenstoelen en citroengrasachtige aroma's."
    },
    "cookingProfile": {
      "en": "Gently simmered and served hot, it feels creamy, aromatic, and sour-salty rather than heavy.",
      "zh": "温和煮热后上桌，口感椰香顺滑，酸咸开胃，不算特别厚重。",
      "nl": "Zacht gesudderd en warm geserveerd: romig, geurig en zuur-zout zonder erg zwaar te zijn."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "soup"
      ],
      "description": {
        "en": "A classic Thai coconut soup, useful when Tom Yum sounds too sharp or spicy.",
        "zh": "经典泰式椰奶汤，适合觉得冬阴功太酸辣时选择。",
        "nl": "Een klassieke Thaise kokossoep, handig als Tom Yum te scherp of pittig klinkt."
      }
    },
    "composition": [
      [
        "coconut-milk",
        35,
        "creamy soup base",
        "seasoning"
      ],
      [
        "chicken",
        25,
        "protein"
      ],
      [
        "mushrooms",
        15,
        "body"
      ],
      [
        "lime",
        10,
        "sour finish"
      ],
      [
        "fish-sauce",
        5,
        "salty umami",
        "seasoning"
      ],
      [
        "lemongrass",
        5,
        "aroma",
        "seasoning"
      ],
      [
        "chili",
        5,
        "gentle heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "coconut-milk",
      "lime",
      "fish-sauce",
      "lemongrass"
    ],
    "basicTaste": [
      "creamy",
      "sour",
      "salty",
      "mildly-spicy"
    ],
    "textureProfile": [
      "creamy broth",
      "tender chicken",
      "soft mushrooms"
    ],
    "riskFlags": [
      "contains-fish-sauce",
      "can-be-spicy"
    ],
    "dietaryFlags": [
      "contains-animal-seasoning-by-default"
    ],
    "goodForTags": [
      "soup",
      "creamy"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "spice-sensitive"
    ],
    "orderVerdict": {
      "en": "Good if you want Thai aromatics in a softer, coconut-creamy soup instead of a sharp clear broth.",
      "zh": "想要泰式香料感，但更偏椰奶柔和汤底时适合点。",
      "nl": "Goed als je Thaise aroma's wilt in een zachtere, romige kokossoep."
    },
    "spiceLevel": 2,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "red-curry",
    "metadataCode": "108010",
    "cuisineId": "thai",
    "names": {
      "en": "Thai Red Curry",
      "zh": "泰式红咖喱",
      "nl": "Thaise rode curry",
      "local": "แกงเผ็ด"
    },
    "category": "curry",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Coconut-based Thai curry with red curry paste, protein, vegetables, basil or lime leaf, and medium chili heat.",
      "zh": "椰奶红咖喱，常配肉类或豆腐、蔬菜、罗勒或青柠叶，辣度通常中等。",
      "nl": "Thaise kokos-curry met rode currypasta, proteïne, groenten, basilicum of limoenblad en middelmatige pit."
    },
    "cookingProfile": {
      "en": "Simmered as a saucy curry, it arrives creamy and aromatic with oil separating slightly on top.",
      "zh": "以咖喱汁煮成，上桌时椰香浓郁，表面可能有一点红油。",
      "nl": "Gesudderd als sausrijke curry: romig, aromatisch en soms met wat rode olie bovenop."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "curry",
        "spicy"
      ],
      "description": {
        "en": "A classic Thai curry for diners who want richer coconut sauce and more chili than green curry may suggest.",
        "zh": "经典泰式咖喱，适合想要椰奶浓郁和明显辣椒香的人。",
        "nl": "Een klassieke Thaise curry voor wie romige kokossaus en duidelijke chili wil."
      }
    },
    "composition": [
      [
        "coconut-milk",
        35,
        "sauce base",
        "seasoning"
      ],
      [
        "chicken",
        20,
        "protein"
      ],
      [
        "mixed-vegetables",
        20,
        "vegetable body"
      ],
      [
        "red-curry-paste",
        15,
        "signature paste",
        "seasoning"
      ],
      [
        "fish-sauce",
        5,
        "salty umami",
        "seasoning"
      ],
      [
        "kaffir-lime-leaf",
        5,
        "citrus aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "red-curry-paste",
      "coconut-milk",
      "kaffir-lime-leaf",
      "fish-sauce"
    ],
    "basicTaste": [
      "creamy",
      "spicy",
      "savory",
      "aromatic"
    ],
    "textureProfile": [
      "creamy sauce",
      "tender protein",
      "soft vegetables"
    ],
    "riskFlags": [
      "contains-fish-sauce",
      "can-be-spicy"
    ],
    "dietaryFlags": [
      "protein-varies-by-restaurant",
      "contains-animal-seasoning-by-default"
    ],
    "goodForTags": [
      "curry",
      "spicy",
      "creamy"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "spice-sensitive"
    ],
    "orderVerdict": {
      "en": "Choose it for a creamy, aromatic curry with noticeable chili heat; ask mild if needed.",
      "zh": "想吃椰奶浓郁、香料感强、辣味明显的咖喱时适合点；怕辣请要求少辣。",
      "nl": "Kies dit voor een romige, aromatische curry met duidelijke pit; vraag mild indien nodig."
    },
    "spiceLevel": 3,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high"
  }),
  starterDish({
    "id": "panang-curry",
    "metadataCode": "108011",
    "cuisineId": "thai",
    "names": {
      "en": "Panang Curry",
      "zh": "帕能咖喱",
      "nl": "Panang curry",
      "local": "พะแนง"
    },
    "category": "curry",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "A thick, rich Thai coconut curry, often with beef or chicken, panang paste, peanut notes, and lime leaf aroma.",
      "zh": "浓稠椰奶咖喱，常配牛肉或鸡肉，有帕能咖喱酱、花生感和青柠叶香。",
      "nl": "Een dikke, rijke Thaise kokoscurry, vaak met rund of kip, panangpasta, pindatoetsen en limoenblad."
    },
    "cookingProfile": {
      "en": "Reduced until thicker than many Thai curries, so it feels rich, clingy, and sauce-forward.",
      "zh": "通常收得比普通泰式咖喱更浓，口感厚、挂汁明显。",
      "nl": "Dikker ingekookt dan veel Thaise curry's, dus rijk en stevig aan de saus."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "curry",
        "creamy"
      ],
      "description": {
        "en": "A classic Thai curry for diners who prefer a thicker, slightly nutty sauce.",
        "zh": "经典泰式咖喱，适合偏好浓稠、略带坚果感酱汁的人。",
        "nl": "Een klassieke Thaise curry voor wie een dikkere, licht nootachtige saus wil."
      }
    },
    "composition": [
      [
        "coconut-milk",
        35,
        "thick sauce base",
        "seasoning"
      ],
      [
        "beef",
        25,
        "protein"
      ],
      [
        "panang-curry-paste",
        20,
        "signature paste",
        "seasoning"
      ],
      [
        "peanuts",
        5,
        "nutty body"
      ],
      [
        "fish-sauce",
        5,
        "salty umami",
        "seasoning"
      ],
      [
        "kaffir-lime-leaf",
        5,
        "citrus aroma",
        "seasoning"
      ],
      [
        "chili",
        5,
        "heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "panang-curry-paste",
      "coconut-milk",
      "peanuts",
      "kaffir-lime-leaf"
    ],
    "basicTaste": [
      "creamy",
      "savory",
      "mildly-sweet",
      "spicy"
    ],
    "textureProfile": [
      "thick curry sauce",
      "tender meat",
      "slight nutty body"
    ],
    "riskFlags": [
      "contains-peanut",
      "contains-fish-sauce",
      "can-be-spicy"
    ],
    "dietaryFlags": [
      "protein-varies-by-restaurant",
      "contains-animal-seasoning-by-default"
    ],
    "goodForTags": [
      "curry",
      "creamy"
    ],
    "avoidIfTags": [
      "peanut-allergy",
      "fish-allergy",
      "spice-sensitive"
    ],
    "orderVerdict": {
      "en": "A strong pick if you want a richer curry; avoid it with peanut concerns.",
      "zh": "想吃更浓厚的泰式咖喱时很适合；花生过敏者不要点。",
      "nl": "Sterk als je een rijkere curry wilt; vermijden bij pinda-allergie."
    },
    "spiceLevel": 2,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "yellow-curry",
    "metadataCode": "108012",
    "cuisineId": "thai",
    "names": {
      "en": "Thai Yellow Curry",
      "zh": "泰式黄咖喱",
      "nl": "Thaise gele curry",
      "local": "แกงกะหรี่"
    },
    "category": "curry",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "A milder Thai coconut curry with yellow curry paste, potato, onion-style sweetness, and usually chicken.",
      "zh": "相对温和的泰式椰奶黄咖喱，常有土豆、微甜香气和鸡肉。",
      "nl": "Een mildere Thaise kokoscurry met gele currypasta, aardappel, lichte zoetheid en vaak kip."
    },
    "cookingProfile": {
      "en": "Simmered until potatoes soften, giving the curry a comforting, thicker feel.",
      "zh": "土豆煮软后让咖喱更有家常厚度和饱足感。",
      "nl": "Gesudderd tot de aardappel zacht is, waardoor de curry troostrijker en voller voelt."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "curry",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A common Thai curry that is usually gentler and more comforting than red or green curry.",
        "zh": "常见泰式咖喱，通常比红咖喱或绿咖喱更温和、更家常。",
        "nl": "Een veelvoorkomende Thaise curry, meestal zachter en huiselijker dan rode of groene curry."
      }
    },
    "composition": [
      [
        "coconut-milk",
        35,
        "sauce base",
        "seasoning"
      ],
      [
        "chicken",
        20,
        "protein"
      ],
      [
        "potato",
        20,
        "starchy body"
      ],
      [
        "yellow-curry-paste",
        15,
        "signature paste",
        "seasoning"
      ],
      [
        "fish-sauce",
        5,
        "salty umami",
        "seasoning"
      ],
      [
        "palm-sugar",
        5,
        "gentle sweetness",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "yellow-curry-paste",
      "coconut-milk",
      "palm-sugar",
      "fish-sauce"
    ],
    "basicTaste": [
      "creamy",
      "mildly-spicy",
      "savory",
      "slightly-sweet"
    ],
    "textureProfile": [
      "soft potato",
      "creamy sauce",
      "tender chicken"
    ],
    "riskFlags": [
      "contains-fish-sauce"
    ],
    "dietaryFlags": [
      "protein-varies-by-restaurant",
      "contains-animal-seasoning-by-default"
    ],
    "goodForTags": [
      "curry",
      "first-timer-friendly",
      "safe-choice"
    ],
    "avoidIfTags": [
      "fish-allergy"
    ],
    "orderVerdict": {
      "en": "A good curry choice when you want coconut richness with lower heat and potato comfort.",
      "zh": "想吃椰奶咖喱但不想太辣、也想要土豆饱足感时很适合。",
      "nl": "Goed als je kokoscurry wilt met minder pit en zachte aardappel."
    },
    "spiceLevel": 1,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "larb",
    "metadataCode": "108013",
    "cuisineId": "thai",
    "names": {
      "en": "Larb",
      "zh": "泰式酸辣肉末沙拉",
      "nl": "Larb",
      "local": "ลาบ"
    },
    "category": "salad",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "A minced meat salad dressed with lime, fish sauce, chili, herbs, and toasted rice powder.",
      "zh": "肉末用青柠、鱼露、辣椒、香草和烤米粉拌成的酸辣沙拉。",
      "nl": "Een gehaktsalade met limoen, vissaus, chili, kruiden en geroosterd rijstpoeder."
    },
    "cookingProfile": {
      "en": "Usually served warm or room temperature, with dry, bright dressing rather than a creamy sauce.",
      "zh": "多为温热或常温上桌，调味清爽干拌，不是奶油型酱汁。",
      "nl": "Meestal warm of op kamertemperatuur, met frisse droge dressing in plaats van romige saus."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "regional-dish",
        "spicy"
      ],
      "description": {
        "en": "A classic Lao-Isan style salad widely found on Thai menus, especially when sour-spicy dishes are offered.",
        "zh": "老挝/泰东北风格经典沙拉，在泰餐菜单中很常见，酸辣感明显。",
        "nl": "Een klassieke Lao/Isan-achtige salade die vaak op Thaise menu's staat, zuur en pittig."
      }
    },
    "composition": [
      [
        "minced-pork",
        45,
        "protein"
      ],
      [
        "lime",
        15,
        "sour dressing"
      ],
      [
        "fish-sauce",
        10,
        "salty umami",
        "seasoning"
      ],
      [
        "roasted-rice-powder",
        10,
        "toasty texture",
        "seasoning"
      ],
      [
        "green-onion",
        10,
        "fresh aromatics"
      ],
      [
        "mint",
        5,
        "herbal lift",
        "seasoning"
      ],
      [
        "chili",
        5,
        "heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "lime",
      "fish-sauce",
      "roasted-rice-powder",
      "mint",
      "chili"
    ],
    "basicTaste": [
      "sour",
      "spicy",
      "salty",
      "herbal",
      "umami"
    ],
    "textureProfile": [
      "loose minced meat",
      "toasty grainy coating",
      "fresh herbs"
    ],
    "riskFlags": [
      "contains-fish-sauce",
      "contains-pork",
      "can-be-spicy"
    ],
    "dietaryFlags": [
      "protein-varies-by-restaurant"
    ],
    "goodForTags": [
      "spicy",
      "tangy",
      "regional-dish"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "pork-avoidant",
      "spice-sensitive"
    ],
    "orderVerdict": {
      "en": "Great if you want bright sour-spicy flavor; skip it if you prefer mild or saucy dishes.",
      "zh": "喜欢酸辣清爽、香草感强的菜可以点；想吃温和或多汁酱菜则不适合。",
      "nl": "Mooi als je fris zuur-pittig wilt; minder geschikt als je mild of sausachtig zoekt."
    },
    "spiceLevel": 3,
    "weightLevel": 2,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "thai-satay",
    "metadataCode": "108014",
    "cuisineId": "thai",
    "names": {
      "en": "Thai Satay",
      "zh": "泰式沙爹串",
      "nl": "Thaise saté",
      "local": "สะเต๊ะ"
    },
    "category": "grilled-skewer",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Grilled marinated skewers, usually chicken or pork, served with peanut satay sauce and cucumber relish.",
      "zh": "腌制肉串烤熟后配花生沙爹酱和黄瓜小菜，常见为鸡肉或猪肉。",
      "nl": "Gegrilde gemarineerde spiesjes, meestal kip of varken, met pindasaus en komkommerrelish."
    },
    "cookingProfile": {
      "en": "Charred quickly over heat, so the meat is smoky while the peanut sauce adds sweetness and richness.",
      "zh": "肉串快速烤出焦香，花生酱带来甜咸和浓郁感。",
      "nl": "Snel gegrild voor rokerigheid, terwijl de pindasaus zoetheid en rijkdom geeft."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A familiar Thai street-food and appetizer format, useful for sharing or starting a meal.",
        "zh": "常见泰式街头小吃和开胃菜形式，适合分享或作为前菜。",
        "nl": "Een herkenbare Thaise streetfood- en voorgerechtvorm, handig om te delen."
      }
    },
    "composition": [
      [
        "chicken",
        55,
        "skewered protein"
      ],
      [
        "satay-sauce",
        25,
        "peanut dipping sauce",
        "seasoning"
      ],
      [
        "cucumber",
        10,
        "relish"
      ],
      [
        "peanuts",
        5,
        "nutty garnish"
      ],
      [
        "turmeric",
        5,
        "warm marinade",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "satay-sauce",
      "peanuts",
      "turmeric",
      "chili"
    ],
    "basicTaste": [
      "savory",
      "sweet",
      "nutty",
      "mildly-spicy"
    ],
    "textureProfile": [
      "grilled edges",
      "tender meat",
      "creamy peanut sauce"
    ],
    "riskFlags": [
      "contains-peanut"
    ],
    "dietaryFlags": [
      "protein-varies-by-restaurant"
    ],
    "goodForTags": [
      "street-food",
      "first-timer-friendly",
      "safe-choice"
    ],
    "avoidIfTags": [
      "peanut-allergy"
    ],
    "orderVerdict": {
      "en": "Easy to like if peanuts are fine; good as a shared starter or simple grilled order.",
      "zh": "能吃花生的话很容易接受，适合作为分享前菜或简单烤肉串。",
      "nl": "Makkelijk lekker als pinda geen probleem is; goed als deelbaar voorgerecht."
    },
    "spiceLevel": 1,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "mango-sticky-rice",
    "metadataCode": "108015",
    "cuisineId": "thai",
    "names": {
      "en": "Mango Sticky Rice",
      "zh": "芒果糯米饭",
      "nl": "Mango sticky rice",
      "local": "ข้าวเหนียวมะม่วง"
    },
    "category": "dessert",
    "cookingMethods": [
      "steamed",
      "assembled"
    ],
    "shortDescription": {
      "en": "Sweet sticky rice with ripe mango and coconut milk, usually served as a cool or room-temperature Thai dessert.",
      "zh": "甜糯米饭配熟芒果和椰奶，常作为冷或常温泰式甜点。",
      "nl": "Zoete kleefrijst met rijpe mango en kokosmelk, meestal koel of op kamertemperatuur geserveerd."
    },
    "cookingProfile": {
      "en": "Steamed sticky rice is soaked with sweet coconut milk, so the dessert feels chewy, creamy, and fruity.",
      "zh": "蒸熟糯米吸收甜椰奶，口感软糯、椰香、带芒果果香。",
      "nl": "Gestoomde kleefrijst neemt zoete kokosmelk op: kleverig, romig en fruitig."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "dessert",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A classic Thai dessert and one of the easiest sweet dishes for first-time diners.",
        "zh": "经典泰式甜点，对第一次吃泰餐甜品的人很友好。",
        "nl": "Een klassiek Thais dessert en een makkelijke zoete keuze voor beginners."
      }
    },
    "composition": [
      [
        "sticky-rice",
        45,
        "base"
      ],
      [
        "mango",
        30,
        "fruit"
      ],
      [
        "coconut-milk",
        15,
        "sweet coconut sauce",
        "seasoning"
      ],
      [
        "palm-sugar",
        5,
        "sweetener",
        "seasoning"
      ],
      [
        "sea-salt",
        5,
        "salt balance",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "mango",
      "coconut-milk",
      "palm-sugar"
    ],
    "basicTaste": [
      "sweet",
      "creamy",
      "fruity",
      "mild"
    ],
    "textureProfile": [
      "sticky rice",
      "soft mango",
      "creamy coconut sauce"
    ],
    "riskFlags": [],
    "dietaryFlags": [
      "usually-vegetarian"
    ],
    "goodForTags": [
      "dessert",
      "first-timer-friendly",
      "sweet"
    ],
    "avoidIfTags": [
      "not-for-low-sugar"
    ],
    "orderVerdict": {
      "en": "A reliable dessert if you want sweet coconut and mango rather than something fried or chocolatey.",
      "zh": "想吃椰香和芒果味甜点，而不是油炸或巧克力甜点时很稳。",
      "nl": "Een betrouwbare dessertkeuze als je kokos en mango wilt in plaats van gefrituurd of chocolade."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.86,
    "restaurantVariationLevel": "low"
  }),
  starterDish({
    "id": "khao-soi",
    "metadataCode": "108016",
    "cuisineId": "thai",
    "names": {
      "en": "Khao Soi",
      "zh": "泰北咖喱鸡面",
      "nl": "Khao soi",
      "local": "ข้าวซอย"
    },
    "category": "noodle-soup",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Northern Thai coconut curry noodle soup, often with chicken, soft noodles, crisp noodle garnish, lime, and pickled sides.",
      "zh": "泰北椰奶咖喱面，常配鸡肉、软面、炸脆面、青柠和腌菜。",
      "nl": "Noord-Thaise kokos-currynoedelsoep, vaak met kip, zachte noedels, krokante noedels, limoen en ingelegde garnituur."
    },
    "cookingProfile": {
      "en": "Served as a rich bowl, it combines creamy curry broth with soft noodles and crunchy garnish.",
      "zh": "以浓郁汤面形式上桌，椰奶咖喱汤、软面和脆面形成对比。",
      "nl": "Een rijke kom met romige currybouillon, zachte noedels en knapperige garnering."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "noodle",
        "curry"
      ],
      "description": {
        "en": "A northern Thai classic, especially useful to recognize on menus that go beyond basic curries.",
        "zh": "泰北经典菜，在比基础咖喱更深入的泰餐菜单上很值得识别。",
        "nl": "Een Noord-Thaise klassieker, vooral nuttig op menu's die verder gaan dan basiscurry's."
      }
    },
    "composition": [
      [
        "wheat-noodles",
        40,
        "noodle base"
      ],
      [
        "chicken",
        20,
        "protein"
      ],
      [
        "coconut-milk",
        20,
        "curry broth",
        "seasoning"
      ],
      [
        "yellow-curry-paste",
        10,
        "warm curry base",
        "seasoning"
      ],
      [
        "chili",
        5,
        "heat",
        "seasoning"
      ],
      [
        "lime",
        5,
        "fresh finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "coconut-milk",
      "yellow-curry-paste",
      "chili",
      "lime"
    ],
    "basicTaste": [
      "creamy",
      "savory",
      "mildly-spicy",
      "aromatic"
    ],
    "textureProfile": [
      "soft noodles",
      "creamy broth",
      "crunchy garnish"
    ],
    "riskFlags": [
      "contains-gluten",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "regional-dish",
      "noodle-lover",
      "curry"
    ],
    "avoidIfTags": [
      "gluten-allergy",
      "spice-sensitive"
    ],
    "orderVerdict": {
      "en": "Order it if you want a memorable Thai noodle bowl that is richer than clear soup.",
      "zh": "想吃比清汤面更浓郁、更有记忆点的泰式面时可以点。",
      "nl": "Bestel dit als je een rijkere Thaise noedelkom wilt dan heldere soep."
    },
    "spiceLevel": 2,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "drunken-noodles",
    "metadataCode": "108017",
    "cuisineId": "thai",
    "names": {
      "en": "Drunken Noodles",
      "zh": "泰式醉面",
      "nl": "Drunken noodles",
      "local": "ผัดขี้เมา"
    },
    "category": "noodle",
    "cookingMethods": [
      "stir-fried"
    ],
    "shortDescription": {
      "en": "Spicy wok-fried wide noodles with basil, chili, vegetables, and usually chicken, pork, beef, or seafood.",
      "zh": "辣味宽河粉快炒，常有罗勒、辣椒、蔬菜和鸡肉、猪肉、牛肉或海鲜。",
      "nl": "Pittig gewokte brede noedels met basilicum, chili, groenten en vaak kip, varken, rund of zeevruchten."
    },
    "cookingProfile": {
      "en": "A hot wok gives glossy noodles and bold chili-basil aroma, usually stronger than Pad See Ew.",
      "zh": "热锅快炒带来油润河粉和强烈辣椒罗勒香，通常比 Pad See Ew 更冲。",
      "nl": "De hete wok geeft glanzende noedels en sterke chili-basilicumaroma's, meestal krachtiger dan Pad See Ew."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic",
        "noodle",
        "spicy"
      ],
      "description": {
        "en": "A popular Thai wok-noodle dish for diners who want more chili and basil impact.",
        "zh": "受欢迎的泰式炒河粉，适合想要更强辣味和罗勒香的人。",
        "nl": "Een populaire Thaise woknoedel voor wie meer chili en basilicum wil."
      }
    },
    "composition": [
      [
        "rice-noodles",
        45,
        "wide noodle base"
      ],
      [
        "chicken",
        20,
        "protein"
      ],
      [
        "mixed-vegetables",
        15,
        "vegetables"
      ],
      [
        "soy-sauce",
        10,
        "wok seasoning",
        "seasoning"
      ],
      [
        "holy-basil",
        5,
        "signature aroma",
        "seasoning"
      ],
      [
        "chili",
        5,
        "heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "holy-basil",
      "chili",
      "soy-sauce",
      "garlic"
    ],
    "basicTaste": [
      "savory",
      "spicy",
      "herbal",
      "umami"
    ],
    "textureProfile": [
      "chewy wide noodles",
      "glossy sauce coating",
      "crisp vegetables"
    ],
    "riskFlags": [
      "contains-soy",
      "contains-gluten",
      "can-be-spicy"
    ],
    "dietaryFlags": [
      "protein-varies-by-restaurant"
    ],
    "goodForTags": [
      "noodle-lover",
      "spicy"
    ],
    "avoidIfTags": [
      "spice-sensitive",
      "soy-allergy",
      "gluten-allergy"
    ],
    "orderVerdict": {
      "en": "Pick this over Pad See Ew when you want a spicier, more aromatic noodle plate.",
      "zh": "想要比酱油炒河粉更辣、更香草冲击的面食时选它。",
      "nl": "Kies dit boven Pad See Ew als je pittigere, aromatischere noedels wilt."
    },
    "spiceLevel": 3,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "sashimi",
    "metadataCode": "109006",
    "cuisineId": "japanese",
    "names": {
      "en": "Sashimi",
      "zh": "刺身",
      "nl": "Sashimi",
      "local": "刺身"
    },
    "category": "seafood",
    "cookingMethods": [
      "assembled",
      "raw"
    ],
    "servingTemperature": "cold-or-cool",
    "rawnessLevel": "raw",
    "shortDescription": {
      "en": "Slices of raw fish served without rice, usually with soy sauce, wasabi, and shredded daikon.",
      "zh": "不配寿司饭的生鱼片，通常搭配酱油、芥末和萝卜丝，重点是鱼的新鲜度和口感。",
      "nl": "Plakjes rauwe vis zonder rijst, meestal met sojasaus, wasabi en fijngesneden daikon."
    },
    "cookingProfile": {
      "en": "Served cool and uncooked, so it feels clean, delicate, and very dependent on fish quality.",
      "zh": "冷食且不加热，口感清爽细腻，非常依赖鱼肉品质。",
      "nl": "Koel en rauw geserveerd; schoon, delicaat en sterk afhankelijk van de viskwaliteit."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "raw-seafood"
      ],
      "description": {
        "en": "A recognizable Japanese menu item with specific ordering cues for texture, sauce, portion feel, and common allergens.",
        "zh": "有明确日料点餐语境的菜品，可帮助判断口感、酱汁、分量和常见过敏风险。",
        "nl": "Een herkenbaar Japans menu-item met concrete bestelinformatie over textuur, saus, portiegevoel en allergenen."
      }
    },
    "composition": [
      [
        "raw-fish",
        80,
        "main"
      ],
      [
        "daikon",
        10,
        "garnish"
      ],
      [
        "soy-sauce",
        5,
        "dip",
        "seasoning"
      ],
      [
        "wasabi",
        5,
        "sharp heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "raw-fish",
      "wasabi",
      "soy-sauce"
    ],
    "basicTaste": [
      "clean",
      "briny",
      "umami",
      "mildly-sharp"
    ],
    "textureProfile": [
      "silky raw fish",
      "cool temperature",
      "crisp daikon garnish"
    ],
    "riskFlags": [
      "contains-raw-fish",
      "contains-fish",
      "contains-soy"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "classic-dish",
      "lighter-choice",
      "seafood-lover"
    ],
    "avoidIfTags": [
      "raw-fish-avoidant",
      "fish-allergy",
      "soy-allergy"
    ],
    "orderVerdict": {
      "en": "Best for diners who actively want raw fish; choose sushi or grilled fish if raw texture worries you.",
      "zh": "适合明确想吃生鱼的人；如果担心生食口感，选寿司熟食款或烤鱼更稳。",
      "nl": "Voor wie bewust rauwe vis wil; kies sushi met gegaarde topping of gegrilde vis als rauwe textuur spannend is."
    },
    "spiceLevel": 1,
    "weightLevel": 1,
    "acquiredTasteLevel": 3,
    "metadataConfidence": 0.85,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "gyoza",
    "metadataCode": "109007",
    "cuisineId": "japanese",
    "names": {
      "en": "Gyoza",
      "zh": "日式煎饺",
      "nl": "Gyoza",
      "local": "餃子"
    },
    "category": "dumpling",
    "cookingMethods": [
      "fried",
      "steamed"
    ],
    "shortDescription": {
      "en": "Japanese dumplings, often pork and cabbage inside a thin wrapper, pan-fried with a crisp bottom and served with dipping sauce.",
      "zh": "薄皮饺子，常见内馅是猪肉和卷心菜，底部煎脆，配酱油醋类蘸汁。",
      "nl": "Japanse dumplings, vaak met varken en kool, in een dun vel en gebakken met een krokante onderkant."
    },
    "cookingProfile": {
      "en": "Usually steamed then browned in a pan, giving a soft top, crisp base, and juicy filling.",
      "zh": "通常先焖后煎，顶部柔软、底部脆，内馅多汁。",
      "nl": "Meestal gestoomd en daarna gebakken: zachte bovenkant, krokante bodem en sappige vulling."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "first-timer-friendly",
        "shareable"
      ],
      "description": {
        "en": "A recognizable Japanese menu item with specific ordering cues for texture, sauce, portion feel, and common allergens.",
        "zh": "有明确日料点餐语境的菜品，可帮助判断口感、酱汁、分量和常见过敏风险。",
        "nl": "Een herkenbaar Japans menu-item met concrete bestelinformatie over textuur, saus, portiegevoel en allergenen."
      }
    },
    "composition": [
      [
        "dumpling-wrapper",
        40,
        "wrapper"
      ],
      [
        "minced-pork",
        25,
        "filling"
      ],
      [
        "cabbage",
        15,
        "filling"
      ],
      [
        "green-onion",
        5,
        "filling"
      ],
      [
        "soy-sauce",
        10,
        "dip",
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
      "soy-sauce",
      "sesame-oil",
      "minced-pork"
    ],
    "basicTaste": [
      "savory",
      "umami",
      "lightly-nutty"
    ],
    "textureProfile": [
      "crisp browned base",
      "soft wrapper",
      "juicy filling"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-pork",
      "contains-soy",
      "contains-sesame"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "shareable",
      "first-timer-friendly",
      "starter"
    ],
    "avoidIfTags": [
      "pork-avoidant",
      "gluten-allergy",
      "soy-allergy",
      "sesame-allergy"
    ],
    "orderVerdict": {
      "en": "A reliable sharing side if pork, wheat, soy, and sesame are fine for you.",
      "zh": "想点一份稳妥小食很合适；避猪肉、麸质、大豆或芝麻的人要先确认。",
      "nl": "Een betrouwbare deelbare side als varken, tarwe, soja en sesam voor jou oké zijn."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "yakitori",
    "metadataCode": "109008",
    "cuisineId": "japanese",
    "names": {
      "en": "Yakitori",
      "zh": "日式烤鸡串",
      "nl": "Yakitori",
      "local": "焼き鳥"
    },
    "category": "starter",
    "cookingMethods": [
      "grilled"
    ],
    "goodForSharing": true,
    "shortDescription": {
      "en": "Small grilled chicken skewers seasoned with salt or sweet-savory tare sauce.",
      "zh": "小份炭烤或明火烤鸡串，常见调味是盐烤或甜咸酱汁。",
      "nl": "Kleine gegrilde kipspiesen met zout of zoet-hartige tare-saus."
    },
    "cookingProfile": {
      "en": "Grilled quickly over direct heat, so the best versions taste smoky with lightly charred edges.",
      "zh": "直接高温烤制，好的版本会有轻微焦香和烟熏感。",
      "nl": "Kort boven directe hitte gegrild, met rokerige smaak en licht geschroeide randjes."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "street-food",
        "shareable"
      ],
      "description": {
        "en": "A recognizable Japanese menu item with specific ordering cues for texture, sauce, portion feel, and common allergens.",
        "zh": "有明确日料点餐语境的菜品，可帮助判断口感、酱汁、分量和常见过敏风险。",
        "nl": "Een herkenbaar Japans menu-item met concrete bestelinformatie over textuur, saus, portiegevoel en allergenen."
      }
    },
    "composition": [
      [
        "chicken",
        75,
        "skewered protein"
      ],
      [
        "tare-sauce",
        15,
        "glaze",
        "seasoning"
      ],
      [
        "green-onion",
        5,
        "aromatic skewer element"
      ],
      [
        "sea-salt",
        5,
        "seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "tare-sauce",
      "grilled chicken",
      "sea-salt"
    ],
    "basicTaste": [
      "savory",
      "lightly-sweet",
      "smoky"
    ],
    "textureProfile": [
      "small skewered bites",
      "charred edges",
      "tender chicken"
    ],
    "riskFlags": [
      "contains-soy",
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "shareable",
      "street-food",
      "classic-dish"
    ],
    "avoidIfTags": [
      "soy-allergy",
      "gluten-allergy",
      "no-chicken"
    ],
    "orderVerdict": {
      "en": "Good when you want a light grilled small plate; ask salt-only if sweet tare sauce is not your thing.",
      "zh": "想吃轻量烤物小盘时很适合；不喜欢甜咸酱可问是否能盐烤。",
      "nl": "Goed voor een lichte gegrilde kleine hap; vraag om zout-only als zoete tare je minder ligt."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "udon",
    "metadataCode": "109009",
    "cuisineId": "japanese",
    "names": {
      "en": "Udon",
      "zh": "乌冬面",
      "nl": "Udon",
      "local": "うどん"
    },
    "category": "noodle",
    "cookingMethods": [
      "boiled",
      "simmered"
    ],
    "shortDescription": {
      "en": "Thick wheat noodles usually served in hot dashi-based broth or a light sauce, with simple toppings.",
      "zh": "粗小麦面条，常见为热高汤面或清淡拌汁面，配葱、鱼板或天妇罗等简单配料。",
      "nl": "Dikke tarwenoedels, meestal in warme dashi-bouillon of lichte saus met eenvoudige toppings."
    },
    "cookingProfile": {
      "en": "The noodles are boiled and served soft-chewy, often in a warm broth that keeps the dish gentle and filling.",
      "zh": "面条水煮后软中带弹，常泡在热汤里，整体温和又有饱腹感。",
      "nl": "De noedels worden gekookt en zacht-taai geserveerd, vaak in warme bouillon."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "noodle",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A recognizable Japanese menu item with specific ordering cues for texture, sauce, portion feel, and common allergens.",
        "zh": "有明确日料点餐语境的菜品，可帮助判断口感、酱汁、分量和常见过敏风险。",
        "nl": "Een herkenbaar Japans menu-item met concrete bestelinformatie over textuur, saus, portiegevoel en allergenen."
      }
    },
    "composition": [
      [
        "udon-noodles",
        50,
        "base"
      ],
      [
        "dashi-broth",
        30,
        "broth"
      ],
      [
        "fish-cake",
        5,
        "topping"
      ],
      [
        "green-onion",
        5,
        "finish"
      ],
      [
        "soy-sauce",
        5,
        "broth seasoning",
        "seasoning"
      ],
      [
        "seaweed",
        5,
        "garnish"
      ]
    ],
    "distinctiveFlavorSources": [
      "dashi-broth",
      "soy-sauce",
      "green-onion"
    ],
    "basicTaste": [
      "mild",
      "savory",
      "umami"
    ],
    "textureProfile": [
      "thick chewy noodles",
      "warm light broth",
      "soft toppings"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-fish",
      "contains-soy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "noodle-lover",
      "first-timer-friendly",
      "comforting"
    ],
    "avoidIfTags": [
      "gluten-allergy",
      "fish-allergy",
      "soy-allergy"
    ],
    "orderVerdict": {
      "en": "A gentle noodle choice when you want something warm and filling without much spice.",
      "zh": "想吃温热、温和、不辣又有饱腹感的面食时很稳。",
      "nl": "Een milde noedelkeuze als je iets warms en vullends zonder veel pit wilt."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "soba",
    "metadataCode": "109010",
    "cuisineId": "japanese",
    "names": {
      "en": "Soba",
      "zh": "荞麦面",
      "nl": "Soba",
      "local": "そば"
    },
    "category": "noodle",
    "cookingMethods": [
      "boiled",
      "chilled"
    ],
    "servingTemperature": "hot-or-cold",
    "shortDescription": {
      "en": "Buckwheat-style noodles served chilled with dipping sauce or warm in broth; many versions still contain wheat.",
      "zh": "荞麦风味面，可冷食蘸汁或热汤上桌；很多店的面仍含小麦。",
      "nl": "Boekweitachtige noedels, koud met dipsaus of warm in bouillon; vaak zit er toch tarwe in."
    },
    "cookingProfile": {
      "en": "Boiled noodles are rinsed for a firm, clean bite when cold, or served softer in warm broth.",
      "zh": "冷荞麦面会冲洗后更紧实清爽，热汤版本则更柔软。",
      "nl": "Gekookte noedels worden koud afgespoeld voor een stevige beet, of zachter in warme bouillon geserveerd."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "noodle",
        "lighter-choice"
      ],
      "description": {
        "en": "A recognizable Japanese menu item with specific ordering cues for texture, sauce, portion feel, and common allergens.",
        "zh": "有明确日料点餐语境的菜品，可帮助判断口感、酱汁、分量和常见过敏风险。",
        "nl": "Een herkenbaar Japans menu-item met concrete bestelinformatie over textuur, saus, portiegevoel en allergenen."
      }
    },
    "composition": [
      [
        "soba-noodles",
        60,
        "base"
      ],
      [
        "mentsuyu",
        25,
        "dip or broth seasoning",
        "seasoning"
      ],
      [
        "green-onion",
        5,
        "garnish"
      ],
      [
        "seaweed",
        5,
        "garnish"
      ],
      [
        "wasabi",
        5,
        "optional sharpness",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "soba-noodles",
      "mentsuyu",
      "wasabi"
    ],
    "basicTaste": [
      "savory",
      "nutty",
      "umami",
      "mildly-sharp"
    ],
    "textureProfile": [
      "firm noodles when cold",
      "clean dipping sauce",
      "light finish"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-fish",
      "contains-soy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "lighter-choice",
      "noodle-lover"
    ],
    "avoidIfTags": [
      "gluten-allergy",
      "fish-allergy",
      "soy-allergy"
    ],
    "orderVerdict": {
      "en": "Good for a lighter noodle order, but do not assume it is gluten-free unless the restaurant confirms.",
      "zh": "想吃清爽面食时合适，但不要默认无麸质，需让餐厅确认。",
      "nl": "Goed als lichtere noedelkeuze, maar ga niet uit van glutenvrij zonder bevestiging."
    },
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "teriyaki-chicken",
    "metadataCode": "109011",
    "cuisineId": "japanese",
    "names": {
      "en": "Teriyaki Chicken",
      "zh": "照烧鸡",
      "nl": "Teriyaki kip",
      "local": "照り焼きチキン"
    },
    "category": "rice",
    "cookingMethods": [
      "grilled",
      "fried"
    ],
    "shortDescription": {
      "en": "Chicken glazed with sweet-savory soy-based teriyaki sauce, often served with rice or vegetables.",
      "zh": "鸡肉裹照烧酱，味道偏甜咸酱油风，常配米饭或蔬菜。",
      "nl": "Kip met zoet-hartige sojagebaseerde teriyakisaus, vaak met rijst of groenten."
    },
    "cookingProfile": {
      "en": "Chicken is grilled or pan-seared then glazed, so the surface is glossy and sweeter than plain grilled chicken.",
      "zh": "鸡肉煎烤后刷酱，表面油亮，甜咸感比普通烤鸡明显。",
      "nl": "Kip wordt gegrild of gebakken en geglaceerd, met een glanzend en zoeter oppervlak."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "safe-choice",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A recognizable Japanese menu item with specific ordering cues for texture, sauce, portion feel, and common allergens.",
        "zh": "有明确日料点餐语境的菜品，可帮助判断口感、酱汁、分量和常见过敏风险。",
        "nl": "Een herkenbaar Japans menu-item met concrete bestelinformatie over textuur, saus, portiegevoel en allergenen."
      }
    },
    "composition": [
      [
        "chicken",
        55,
        "main"
      ],
      [
        "steamed-rice",
        25,
        "base"
      ],
      [
        "teriyaki-sauce",
        15,
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
      "teriyaki-sauce",
      "soy-sauce",
      "sesame-oil"
    ],
    "basicTaste": [
      "sweet",
      "savory",
      "umami"
    ],
    "textureProfile": [
      "glossy glaze",
      "tender chicken",
      "soft rice"
    ],
    "riskFlags": [
      "contains-soy",
      "contains-gluten",
      "contains-sesame"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "safe-choice",
      "first-timer-friendly"
    ],
    "avoidIfTags": [
      "soy-allergy",
      "gluten-allergy",
      "sesame-allergy"
    ],
    "orderVerdict": {
      "en": "A familiar, low-spice order if you like sweet soy glaze; skip it if you dislike sweet sauces.",
      "zh": "喜欢甜咸酱油汁、又不想吃辣时很稳；不爱甜酱的人可避开。",
      "nl": "Een vertrouwde milde keuze als je zoete sojaglazuur lekker vindt; minder goed als je zoete sauzen mijdt."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "karaage",
    "metadataCode": "109012",
    "cuisineId": "japanese",
    "names": {
      "en": "Karaage",
      "zh": "日式炸鸡",
      "nl": "Karaage",
      "local": "唐揚げ"
    },
    "category": "fried-snack",
    "cookingMethods": [
      "deep-fried"
    ],
    "goodForSharing": true,
    "shortDescription": {
      "en": "Japanese fried chicken pieces, usually soy-marinated and fried with a crisp potato-starch coating.",
      "zh": "日式炸鸡块，常用酱油风味腌制，再裹粉炸到外脆内多汁。",
      "nl": "Japanse gefrituurde kipstukjes, vaak sojagemarineerd en krokant door aardappelzetmeel."
    },
    "cookingProfile": {
      "en": "Deep-fried in small pieces, so it eats as juicy, salty bites rather than a large breaded cutlet.",
      "zh": "小块油炸，入口是多汁咸香的炸鸡块，不是整片厚炸排。",
      "nl": "In kleine stukken gefrituurd: sappige, zoute hapjes in plaats van een grote schnitzel."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "street-food",
        "shareable"
      ],
      "description": {
        "en": "A recognizable Japanese menu item with specific ordering cues for texture, sauce, portion feel, and common allergens.",
        "zh": "有明确日料点餐语境的菜品，可帮助判断口感、酱汁、分量和常见过敏风险。",
        "nl": "Een herkenbaar Japans menu-item met concrete bestelinformatie over textuur, saus, portiegevoel en allergenen."
      }
    },
    "composition": [
      [
        "chicken",
        65,
        "main"
      ],
      [
        "potato-starch",
        15,
        "crisp coating"
      ],
      [
        "soy-sauce",
        10,
        "marinade",
        "seasoning"
      ],
      [
        "garlic",
        5,
        "marinade aroma",
        "seasoning"
      ],
      [
        "lemon",
        5,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "soy-sauce",
      "garlic",
      "lemon"
    ],
    "basicTaste": [
      "savory",
      "salty",
      "lightly-garlicky"
    ],
    "textureProfile": [
      "crisp coating",
      "juicy chicken",
      "small bite-size pieces"
    ],
    "riskFlags": [
      "contains-soy",
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "shareable",
      "fried-snack",
      "street-food"
    ],
    "avoidIfTags": [
      "soy-allergy",
      "gluten-allergy",
      "fried-food-avoidant"
    ],
    "orderVerdict": {
      "en": "Great as a crisp side or snack; it is heavier than it looks because the pieces are fried.",
      "zh": "适合当酥脆小食或配菜；因为是油炸，实际会比看起来更厚重。",
      "nl": "Lekker als krokante snack of side; zwaarder dan het lijkt door het frituren."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "tonkatsu",
    "metadataCode": "109013",
    "cuisineId": "japanese",
    "names": {
      "en": "Tonkatsu",
      "zh": "日式炸猪排",
      "nl": "Tonkatsu",
      "local": "とんかつ"
    },
    "category": "fried-snack",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "Breaded fried pork cutlet, usually sliced and served with shredded cabbage and sweet-savory tonkatsu sauce.",
      "zh": "裹面包糠油炸的猪排，通常切片，配卷心菜丝和甜咸猪排酱。",
      "nl": "Gepaneerde gefrituurde varkenskotelet, meestal gesneden met kool en zoet-hartige tonkatsusaus."
    },
    "cookingProfile": {
      "en": "The panko crust makes it crisp outside and meaty inside, with sauce added at the table or on the plate.",
      "zh": "面包糠外层酥脆，内部是厚实猪肉，酱汁通常上桌后蘸或淋。",
      "nl": "De panko-korst is krokant, binnenin blijft het vlezig; saus komt erbij of erover."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "fried"
      ],
      "description": {
        "en": "A recognizable Japanese menu item with specific ordering cues for texture, sauce, portion feel, and common allergens.",
        "zh": "有明确日料点餐语境的菜品，可帮助判断口感、酱汁、分量和常见过敏风险。",
        "nl": "Een herkenbaar Japans menu-item met concrete bestelinformatie over textuur, saus, portiegevoel en allergenen."
      }
    },
    "composition": [
      [
        "pork-cutlet",
        55,
        "main"
      ],
      [
        "panko-breadcrumbs",
        20,
        "crisp coating"
      ],
      [
        "cabbage",
        15,
        "side"
      ],
      [
        "tonkatsu-sauce",
        10,
        "sauce",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "panko-breadcrumbs",
      "tonkatsu-sauce",
      "pork-cutlet"
    ],
    "basicTaste": [
      "savory",
      "sweet-sauce",
      "fried"
    ],
    "textureProfile": [
      "crisp crumb coating",
      "firm pork cutlet",
      "fresh shredded cabbage"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-gluten",
      "contains-egg"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "fried-food",
      "hearty-main"
    ],
    "avoidIfTags": [
      "pork-avoidant",
      "gluten-allergy",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "Choose it for a hearty crispy pork main; it is not a light order.",
      "zh": "想吃厚实酥脆猪排时适合；这不是清淡选择。",
      "nl": "Kies dit voor een stevige krokante varkensmaaltijd; het is geen lichte keuze."
    },
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "low"
  }),
  starterDish({
    "id": "okonomiyaki",
    "metadataCode": "109014",
    "cuisineId": "japanese",
    "names": {
      "en": "Okonomiyaki",
      "zh": "大阪烧",
      "nl": "Okonomiyaki",
      "local": "お好み焼き"
    },
    "category": "starter",
    "cookingMethods": [
      "fried"
    ],
    "goodForSharing": true,
    "shortDescription": {
      "en": "Savory cabbage pancake cooked on a griddle, topped with sweet sauce, mayonnaise, seaweed, and bonito flakes.",
      "zh": "铁板煎的咸味卷心菜面糊饼，常加甜酱、美乃滋、海苔粉和柴鱼片。",
      "nl": "Hartige koolpannenkoek van de bakplaat, met zoete saus, mayo, zeewier en bonitovlokken."
    },
    "cookingProfile": {
      "en": "Cooked as a thick griddle pancake, so bites are soft inside, browned outside, and sauce-heavy on top.",
      "zh": "厚饼状铁板煎制，内部柔软、外层微焦，上层酱汁存在感强。",
      "nl": "Als dikke bakplaatpannenkoek: zacht vanbinnen, gebruind vanbuiten en rijk belegd met saus."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "street-food",
        "shareable",
        "regional-dish"
      ],
      "description": {
        "en": "A recognizable Japanese menu item with specific ordering cues for texture, sauce, portion feel, and common allergens.",
        "zh": "有明确日料点餐语境的菜品，可帮助判断口感、酱汁、分量和常见过敏风险。",
        "nl": "Een herkenbaar Japans menu-item met concrete bestelinformatie over textuur, saus, portiegevoel en allergenen."
      }
    },
    "composition": [
      [
        "cabbage",
        35,
        "main vegetable"
      ],
      [
        "wheat-flour",
        15,
        "batter"
      ],
      [
        "egg",
        10,
        "binder"
      ],
      [
        "pork",
        15,
        "common topping"
      ],
      [
        "okonomiyaki-sauce",
        10,
        "sauce",
        "seasoning"
      ],
      [
        "mayonnaise",
        5,
        "creamy topping"
      ],
      [
        "bonito-flakes",
        5,
        "fish garnish"
      ],
      [
        "seaweed",
        5,
        "garnish"
      ]
    ],
    "distinctiveFlavorSources": [
      "okonomiyaki-sauce",
      "mayonnaise",
      "bonito-flakes"
    ],
    "basicTaste": [
      "savory",
      "sweet-sauce",
      "umami",
      "creamy"
    ],
    "textureProfile": [
      "soft thick pancake",
      "crisp browned surface",
      "saucy topping"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-gluten",
      "contains-fish",
      "contains-pork"
    ],
    "dietaryFlags": [
      "toppings-vary-by-restaurant"
    ],
    "goodForTags": [
      "shareable",
      "street-food",
      "regional-dish"
    ],
    "avoidIfTags": [
      "egg-allergy",
      "gluten-allergy",
      "fish-allergy",
      "pork-avoidant"
    ],
    "orderVerdict": {
      "en": "Fun to share if you want saucy, rich street-food texture; check toppings because pork and seafood vary.",
      "zh": "想吃酱汁浓、口感丰富的街头小吃时适合分享；猪肉和海鲜配料需确认。",
      "nl": "Leuk om te delen als je saucy streetfood wilt; check toppings omdat varken en zeevruchten verschillen."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high"
  }),
  starterDish({
    "id": "takoyaki",
    "metadataCode": "109015",
    "cuisineId": "japanese",
    "names": {
      "en": "Takoyaki",
      "zh": "章鱼烧",
      "nl": "Takoyaki",
      "local": "たこ焼き"
    },
    "category": "fried-snack",
    "cookingMethods": [
      "fried"
    ],
    "goodForSharing": true,
    "shortDescription": {
      "en": "Round griddle-cooked batter balls with octopus inside, usually topped with sauce, mayonnaise, bonito flakes, and seaweed.",
      "zh": "圆形面糊小球，里面有章鱼块，通常加酱汁、美乃滋、柴鱼片和海苔粉。",
      "nl": "Ronde beslagballetjes van de bakplaat met octopus, saus, mayo, bonitovlokken en zeewier."
    },
    "cookingProfile": {
      "en": "Cooked in round molds, so the outside is browned while the center stays very soft and hot.",
      "zh": "模具中煎制，外层微焦，内部通常非常软且烫口。",
      "nl": "In ronde vormen gebakken: buiten gebruind, binnen heel zacht en heet."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "shareable"
      ],
      "description": {
        "en": "A recognizable Japanese menu item with specific ordering cues for texture, sauce, portion feel, and common allergens.",
        "zh": "有明确日料点餐语境的菜品，可帮助判断口感、酱汁、分量和常见过敏风险。",
        "nl": "Een herkenbaar Japans menu-item met concrete bestelinformatie over textuur, saus, portiegevoel en allergenen."
      }
    },
    "composition": [
      [
        "wheat-flour",
        35,
        "batter"
      ],
      [
        "octopus",
        15,
        "filling"
      ],
      [
        "egg",
        10,
        "binder"
      ],
      [
        "dashi-broth",
        10,
        "batter liquid"
      ],
      [
        "takoyaki-sauce",
        10,
        "sauce",
        "seasoning"
      ],
      [
        "mayonnaise",
        5,
        "creamy topping"
      ],
      [
        "bonito-flakes",
        5,
        "fish garnish"
      ],
      [
        "seaweed",
        5,
        "garnish"
      ],
      [
        "pickled-ginger",
        5,
        "bright bits"
      ]
    ],
    "distinctiveFlavorSources": [
      "octopus",
      "takoyaki-sauce",
      "bonito-flakes"
    ],
    "basicTaste": [
      "savory",
      "sweet-sauce",
      "umami",
      "creamy"
    ],
    "textureProfile": [
      "soft molten center",
      "lightly browned outside",
      "saucy topping"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-fish",
      "contains-shellfish"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "street-food",
      "shareable",
      "snack"
    ],
    "avoidIfTags": [
      "shellfish-allergy",
      "fish-allergy",
      "egg-allergy",
      "gluten-allergy"
    ],
    "orderVerdict": {
      "en": "Good as a snack if octopus and very soft hot centers sound appealing.",
      "zh": "能接受章鱼和非常软烫的内馅时很适合作小吃。",
      "nl": "Lekker als snack als octopus en een heel zachte hete binnenkant je aanspreken."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "chirashi",
    "metadataCode": "109016",
    "cuisineId": "japanese",
    "names": {
      "en": "Chirashi Sushi",
      "zh": "散寿司饭",
      "nl": "Chirashi sushi",
      "local": "ちらし寿司"
    },
    "category": "rice",
    "cookingMethods": [
      "assembled",
      "raw"
    ],
    "servingTemperature": "cold-or-cool",
    "rawnessLevel": "raw-or-cooked-variant",
    "shortDescription": {
      "en": "A bowl or box of sushi rice topped with assorted raw fish, egg, seaweed, and garnishes.",
      "zh": "寿司饭上铺多种生鱼片、蛋、海苔和配菜，像一碗展开的寿司。",
      "nl": "Een kom of box sushirijst met verschillende rauwe vis, ei, zeewier en garnituren."
    },
    "cookingProfile": {
      "en": "Assembled cool like sushi, but served as a fuller rice bowl rather than individual pieces.",
      "zh": "像寿司一样冷食组合，但以饭碗形式上桌，比单片寿司更有饱腹感。",
      "nl": "Koel samengesteld zoals sushi, maar als vollere rijstkom in plaats van losse stukken."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "raw-seafood",
        "rice"
      ],
      "description": {
        "en": "A recognizable Japanese menu item with specific ordering cues for texture, sauce, portion feel, and common allergens.",
        "zh": "有明确日料点餐语境的菜品，可帮助判断口感、酱汁、分量和常见过敏风险。",
        "nl": "Een herkenbaar Japans menu-item met concrete bestelinformatie over textuur, saus, portiegevoel en allergenen."
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
        35,
        "topping"
      ],
      [
        "egg",
        10,
        "topping"
      ],
      [
        "seaweed",
        5,
        "garnish"
      ],
      [
        "wasabi",
        5,
        "optional sharpness",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "raw-fish",
      "sushi-rice",
      "wasabi"
    ],
    "basicTaste": [
      "clean",
      "umami",
      "mildly-sour",
      "briny"
    ],
    "textureProfile": [
      "sticky seasoned rice",
      "silky fish",
      "cool mixed toppings"
    ],
    "riskFlags": [
      "contains-raw-fish",
      "contains-fish",
      "contains-egg"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "rice",
      "seafood-lover"
    ],
    "avoidIfTags": [
      "raw-fish-avoidant",
      "fish-allergy",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "A good fuller option for raw-fish lovers who want rice, not just sashimi.",
      "zh": "适合想吃生鱼又想有米饭饱腹感的人，比刺身更像正餐。",
      "nl": "Een vollere keuze voor liefhebbers van rauwe vis die rijst erbij willen."
    },
    "spiceLevel": 1,
    "weightLevel": 2,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "edamame",
    "metadataCode": "109017",
    "cuisineId": "japanese",
    "names": {
      "en": "Edamame",
      "zh": "毛豆",
      "nl": "Edamame",
      "local": "枝豆"
    },
    "category": "starter",
    "cookingMethods": [
      "boiled"
    ],
    "servingTemperature": "hot-or-cold",
    "goodForSharing": true,
    "shortDescription": {
      "en": "Young soybeans in the pod, usually boiled or steamed and sprinkled with salt.",
      "zh": "带豆荚的年轻大豆，通常水煮或蒸熟后撒盐，作为小食或配菜。",
      "nl": "Jonge sojabonen in de peul, meestal gekookt of gestoomd en met zout bestrooid."
    },
    "cookingProfile": {
      "en": "Served as pods you squeeze for the beans, so it is simple, salty, and snack-like rather than saucy.",
      "zh": "通常挤出豆荚里的豆子吃，简单咸香，是零食感小菜而不是酱汁菜。",
      "nl": "Geserveerd als peulen waar je de boontjes uit drukt: simpel, zout en snackachtig."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "starter",
        "vegan-friendly",
        "shareable"
      ],
      "description": {
        "en": "A recognizable Japanese menu item with specific ordering cues for texture, sauce, portion feel, and common allergens.",
        "zh": "有明确日料点餐语境的菜品，可帮助判断口感、酱汁、分量和常见过敏风险。",
        "nl": "Een herkenbaar Japans menu-item met concrete bestelinformatie over textuur, saus, portiegevoel en allergenen."
      }
    },
    "composition": [
      [
        "edamame-beans",
        90,
        "main"
      ],
      [
        "sea-salt",
        10,
        "seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "edamame-beans",
      "sea-salt"
    ],
    "basicTaste": [
      "salty",
      "mild",
      "green"
    ],
    "textureProfile": [
      "firm beans",
      "salty pods",
      "light snack"
    ],
    "riskFlags": [
      "contains-soy"
    ],
    "dietaryFlags": [
      "vegan"
    ],
    "goodForTags": [
      "vegan-friendly",
      "shareable",
      "lighter-choice"
    ],
    "avoidIfTags": [
      "soy-allergy"
    ],
    "orderVerdict": {
      "en": "A safe light starter if soy is okay; it is more of a snack than a main dish.",
      "zh": "不避大豆的话是很稳的清淡前菜；它更像小食，不是主菜。",
      "nl": "Een lichte veilige starter als soja oké is; meer snack dan hoofdgerecht."
    },
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.85,
    "restaurantVariationLevel": "low"
  }),
  starterDish({
    "id": "japchae",
    "metadataCode": "110006",
    "cuisineId": "korean",
    "names": {
      "en": "Japchae",
      "zh": "韩式杂菜粉丝",
      "nl": "Japchae",
      "local": "잡채"
    },
    "category": "noodle",
    "cookingMethods": [
      "stir-fried"
    ],
    "servingTemperature": "warm-or-room-temperature",
    "shortDescription": {
      "en": "Stir-fried sweet potato glass noodles with vegetables, sesame oil, soy seasoning, and often beef.",
      "zh": "红薯粉条与蔬菜、芝麻油和酱油调味拌炒，常加牛肉，口感滑弹。",
      "nl": "Geroerbakte zoete-aardappelglasnoedels met groenten, sesamolie, soja en vaak rundvlees."
    },
    "cookingProfile": {
      "en": "The glass noodles are tossed until glossy, so it feels slippery, lightly sweet, and springy rather than soupy.",
      "zh": "粉条拌炒到油亮，入口滑弹微甜，不是汤面。",
      "nl": "De glasnoedels worden glanzend gemengd: glad, lichtzoet en veerkrachtig, niet soepig."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "noodle",
        "shareable"
      ],
      "description": {
        "en": "A Korean menu item rebuilt with concrete ordering cues for sauce, texture, heat, portion feel, and common watch-outs.",
        "zh": "按韩餐点餐场景重建的菜品信息，重点说明酱汁、口感、辣度、分量和常见风险。",
        "nl": "Een Koreaans menu-item met concrete bestelinformatie over saus, textuur, pit, portiegevoel en aandachtspunten."
      }
    },
    "composition": [
      [
        "sweet-potato-noodles",
        50,
        "base"
      ],
      [
        "mixed-vegetables",
        20,
        "body"
      ],
      [
        "beef",
        10,
        "common protein"
      ],
      [
        "soy-sauce",
        10,
        "seasoning",
        "seasoning"
      ],
      [
        "sesame-oil",
        10,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "sesame-oil",
      "soy-sauce",
      "sweet-potato-noodles"
    ],
    "basicTaste": [
      "savory",
      "mildly-sweet",
      "nutty"
    ],
    "textureProfile": [
      "slippery springy noodles",
      "glossy coating",
      "soft vegetables"
    ],
    "riskFlags": [
      "contains-soy",
      "contains-gluten",
      "contains-sesame"
    ],
    "dietaryFlags": [
      "protein-varies-by-restaurant"
    ],
    "goodForTags": [
      "shareable",
      "noodle-lover",
      "mild-flavor"
    ],
    "avoidIfTags": [
      "soy-allergy",
      "gluten-allergy",
      "sesame-allergy"
    ],
    "orderVerdict": {
      "en": "A mild, shareable noodle side if you want sesame-soy flavor without much heat.",
      "zh": "想吃不太辣、芝麻酱油香、适合分享的粉丝菜时很稳。",
      "nl": "Een milde deelbare noedel-side met sesam-sojasmaak en weinig pit."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "samgyeopsal",
    "metadataCode": "110007",
    "cuisineId": "korean",
    "names": {
      "en": "Samgyeopsal",
      "zh": "韩式烤五花肉",
      "nl": "Samgyeopsal",
      "local": "삼겹살"
    },
    "category": "meat",
    "cookingMethods": [
      "grilled"
    ],
    "goodForSharing": true,
    "shortDescription": {
      "en": "Thick pork belly slices grilled at the table, usually wrapped in lettuce or perilla with garlic and ssamjang.",
      "zh": "厚切五花肉在桌边烤熟，常用生菜或紫苏叶包着蒜片和包饭酱一起吃。",
      "nl": "Dikke plakken buikspek aan tafel gegrild, vaak gewikkeld in sla of perilla met knoflook en ssamjang."
    },
    "cookingProfile": {
      "en": "Grilled on a tabletop plate, so the edges get crisp while the center stays fatty and rich.",
      "zh": "桌边烤盘加热，边缘会焦脆，中间肥润厚重。",
      "nl": "Aan tafel gegrild: randjes worden krokant, binnenin blijft het vet en rijk."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "bbq",
        "shareable"
      ],
      "description": {
        "en": "A Korean menu item rebuilt with concrete ordering cues for sauce, texture, heat, portion feel, and common watch-outs.",
        "zh": "按韩餐点餐场景重建的菜品信息，重点说明酱汁、口感、辣度、分量和常见风险。",
        "nl": "Een Koreaans menu-item met concrete bestelinformatie over saus, textuur, pit, portiegevoel en aandachtspunten."
      }
    },
    "composition": [
      [
        "pork-belly",
        60,
        "main"
      ],
      [
        "perilla-leaves",
        10,
        "wrap"
      ],
      [
        "cabbage",
        10,
        "lettuce-style wrap"
      ],
      [
        "ssamjang",
        10,
        "dip",
        "seasoning"
      ],
      [
        "garlic",
        5,
        "aroma",
        "seasoning"
      ],
      [
        "kimchi",
        5,
        "side"
      ]
    ],
    "distinctiveFlavorSources": [
      "pork-belly",
      "ssamjang",
      "garlic"
    ],
    "basicTaste": [
      "savory",
      "fatty",
      "smoky",
      "salty"
    ],
    "textureProfile": [
      "crisp grilled edges",
      "fatty pork belly",
      "fresh wraps"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-soy",
      "contains-sesame"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "shareable",
      "bbq",
      "meat-lover"
    ],
    "avoidIfTags": [
      "pork-avoidant",
      "soy-allergy",
      "sesame-allergy",
      "low-fat-preference"
    ],
    "orderVerdict": {
      "en": "Best for a shared BBQ meal when rich pork belly sounds good; not a light dish.",
      "zh": "适合想吃共享烤肉、能接受肥润五花肉的人；这不是清淡选择。",
      "nl": "Ideaal voor gedeelde BBQ als rijk buikspek goed klinkt; geen lichte keuze."
    },
    "spiceLevel": 1,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "galbi",
    "metadataCode": "110008",
    "cuisineId": "korean",
    "names": {
      "en": "Galbi",
      "zh": "韩式烤牛小排",
      "nl": "Galbi",
      "local": "갈비"
    },
    "category": "meat",
    "cookingMethods": [
      "grilled"
    ],
    "goodForSharing": true,
    "shortDescription": {
      "en": "Marinated beef short ribs grilled until smoky, tender, and sweet-savory.",
      "zh": "牛小排用甜咸酱油风味腌制后烤制，肉香浓、边缘微焦。",
      "nl": "Gemarineerde rundershortribs, gegrild tot rokerig, mals en zoet-hartig."
    },
    "cookingProfile": {
      "en": "The marinade caramelizes on the grill, giving charred edges and a sweeter profile than plain steak.",
      "zh": "腌汁在烤架上焦糖化，形成焦香边缘，比普通牛排更甜咸。",
      "nl": "De marinade karamelliseert op de grill, met geschroeide randjes en meer zoetheid dan gewone steak."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "bbq",
        "shareable"
      ],
      "description": {
        "en": "A Korean menu item rebuilt with concrete ordering cues for sauce, texture, heat, portion feel, and common watch-outs.",
        "zh": "按韩餐点餐场景重建的菜品信息，重点说明酱汁、口感、辣度、分量和常见风险。",
        "nl": "Een Koreaans menu-item met concrete bestelinformatie over saus, textuur, pit, portiegevoel en aandachtspunten."
      }
    },
    "composition": [
      [
        "beef-short-ribs",
        70,
        "main"
      ],
      [
        "soy-sauce",
        10,
        "marinade",
        "seasoning"
      ],
      [
        "sesame-oil",
        5,
        "aroma",
        "seasoning"
      ],
      [
        "garlic",
        5,
        "marinade aroma",
        "seasoning"
      ],
      [
        "green-onion",
        5,
        "garnish"
      ],
      [
        "steamed-rice",
        5,
        "side"
      ]
    ],
    "distinctiveFlavorSources": [
      "beef-short-ribs",
      "soy-sauce",
      "sesame-oil"
    ],
    "basicTaste": [
      "sweet",
      "savory",
      "smoky",
      "umami"
    ],
    "textureProfile": [
      "tender rib meat",
      "charred edges",
      "glossy marinade"
    ],
    "riskFlags": [
      "contains-soy",
      "contains-gluten",
      "contains-sesame"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "bbq",
      "shareable",
      "meat-lover"
    ],
    "avoidIfTags": [
      "soy-allergy",
      "gluten-allergy",
      "sesame-allergy"
    ],
    "orderVerdict": {
      "en": "A strong BBQ choice if you want sweet-savory beef ribs rather than spicy stew.",
      "zh": "想吃甜咸烤牛小排而不是辣汤锅时很适合。",
      "nl": "Een sterke BBQ-keuze als je zoet-hartige runderribs wilt in plaats van pittige stoof."
    },
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "kimchi-fried-rice",
    "metadataCode": "110009",
    "cuisineId": "korean",
    "names": {
      "en": "Kimchi Fried Rice",
      "zh": "泡菜炒饭",
      "nl": "Kimchi gebakken rijst",
      "local": "김치볶음밥"
    },
    "category": "rice",
    "cookingMethods": [
      "stir-fried"
    ],
    "shortDescription": {
      "en": "Fried rice with chopped kimchi, gochujang or kimchi juice, often topped with a fried egg.",
      "zh": "用切碎泡菜、泡菜汁或辣酱炒饭，常加煎蛋，酸辣咸香。",
      "nl": "Gebakken rijst met gehakte kimchi, kimchisap of gochujang, vaak met gebakken ei."
    },
    "cookingProfile": {
      "en": "Stir-fried until the rice is coated and slightly dry, so it feels tangy, spicy, and filling.",
      "zh": "米饭炒到被泡菜汁包裹且略干爽，酸辣、咸香、饱腹。",
      "nl": "Geroerbakt tot de rijst bedekt en iets droog is: zuur, pittig en vullend."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "rice",
        "comforting"
      ],
      "description": {
        "en": "A Korean menu item rebuilt with concrete ordering cues for sauce, texture, heat, portion feel, and common watch-outs.",
        "zh": "按韩餐点餐场景重建的菜品信息，重点说明酱汁、口感、辣度、分量和常见风险。",
        "nl": "Een Koreaans menu-item met concrete bestelinformatie over saus, textuur, pit, portiegevoel en aandachtspunten."
      }
    },
    "composition": [
      [
        "steamed-rice",
        50,
        "base"
      ],
      [
        "kimchi",
        25,
        "flavor base"
      ],
      [
        "egg",
        10,
        "fried topping"
      ],
      [
        "gochujang",
        10,
        "heat and color",
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
      "kimchi",
      "gochujang",
      "sesame-oil"
    ],
    "basicTaste": [
      "sour",
      "spicy",
      "savory",
      "umami"
    ],
    "textureProfile": [
      "separate fried rice grains",
      "soft kimchi pieces",
      "runny or set egg topping"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-soy",
      "contains-sesame",
      "can-be-spicy"
    ],
    "dietaryFlags": [
      "protein-varies-by-restaurant"
    ],
    "goodForTags": [
      "rice",
      "comforting",
      "filling"
    ],
    "avoidIfTags": [
      "egg-allergy",
      "soy-allergy",
      "sesame-allergy",
      "spice-sensitive"
    ],
    "orderVerdict": {
      "en": "Good when you want a filling rice dish with sour-spicy kimchi flavor.",
      "zh": "想吃饱腹、酸辣泡菜味明显的饭类时很适合。",
      "nl": "Goed als je een vullende rijstschotel met zuur-pittige kimchismaak wilt."
    },
    "spiceLevel": 2,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "sundubu-jjigae",
    "metadataCode": "110010",
    "cuisineId": "korean",
    "names": {
      "en": "Sundubu-jjigae",
      "zh": "韩式嫩豆腐锅",
      "nl": "Sundubu-jjigae",
      "local": "순두부찌개"
    },
    "category": "soup",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Spicy soft tofu stew served bubbling hot, often with egg, seafood, pork, or beef.",
      "zh": "滚烫上桌的辣嫩豆腐锅，常加鸡蛋、海鲜、猪肉或牛肉。",
      "nl": "Pittige zachte-tofustoof, kokend heet geserveerd, vaak met ei, zeevruchten, varken of rund."
    },
    "cookingProfile": {
      "en": "Served in a hot stone bowl, so the tofu is silky and the broth stays bubbling at the table.",
      "zh": "石锅滚烫上桌，嫩豆腐滑软，汤汁在桌上仍会冒泡。",
      "nl": "In hete stenen kom; de tofu is zijdezacht en de bouillon blijft borrelen."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "spicy",
        "soup"
      ],
      "description": {
        "en": "A Korean menu item rebuilt with concrete ordering cues for sauce, texture, heat, portion feel, and common watch-outs.",
        "zh": "按韩餐点餐场景重建的菜品信息，重点说明酱汁、口感、辣度、分量和常见风险。",
        "nl": "Een Koreaans menu-item met concrete bestelinformatie over saus, textuur, pit, portiegevoel en aandachtspunten."
      }
    },
    "composition": [
      [
        "tofu",
        45,
        "main"
      ],
      [
        "broth",
        25,
        "soup base"
      ],
      [
        "egg",
        10,
        "topping"
      ],
      [
        "seafood-mix",
        10,
        "common protein"
      ],
      [
        "gochugaru",
        5,
        "chili warmth",
        "seasoning"
      ],
      [
        "gochujang",
        5,
        "depth",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "tofu",
      "gochugaru",
      "seafood-mix"
    ],
    "basicTaste": [
      "spicy",
      "savory",
      "umami"
    ],
    "textureProfile": [
      "silky soft tofu",
      "bubbling hot broth",
      "soft egg"
    ],
    "riskFlags": [
      "contains-soy",
      "contains-egg",
      "contains-shellfish",
      "contains-fish",
      "can-be-spicy"
    ],
    "dietaryFlags": [
      "protein-varies-by-restaurant"
    ],
    "goodForTags": [
      "soup",
      "spicy",
      "comforting"
    ],
    "avoidIfTags": [
      "soy-allergy",
      "egg-allergy",
      "shellfish-allergy",
      "fish-allergy",
      "spice-sensitive"
    ],
    "orderVerdict": {
      "en": "A warming spicy stew if you like silky tofu; ask about seafood if allergies matter.",
      "zh": "喜欢嫩豆腐和热辣汤锅时很适合；有海鲜过敏要先确认。",
      "nl": "Een verwarmende pittige stoof als je zijdezachte tofu wilt; vraag naar zeevruchten bij allergie."
    },
    "spiceLevel": 3,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high"
  }),
  starterDish({
    "id": "doenjang-jjigae",
    "metadataCode": "110011",
    "cuisineId": "korean",
    "names": {
      "en": "Doenjang-jjigae",
      "zh": "韩式大酱汤",
      "nl": "Doenjang-jjigae",
      "local": "된장찌개"
    },
    "category": "soup",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Soybean-paste stew with tofu, vegetables, and sometimes beef, seafood, or clams.",
      "zh": "以韩式大酱为底的汤锅，常有豆腐、蔬菜，也可能加牛肉、海鲜或蛤蜊。",
      "nl": "Stoofsoep met Koreaanse sojabonenpasta, tofu, groenten en soms rund, zeevruchten of schelpen."
    },
    "cookingProfile": {
      "en": "The paste makes the broth earthy and salty, less sweet and less red than gochujang stews.",
      "zh": "大酱让汤底有发酵豆香和咸鲜感，通常不如辣酱锅甜红。",
      "nl": "De pasta maakt de bouillon aards en zout, minder zoet en rood dan gochujangstoof."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "soup"
      ],
      "description": {
        "en": "A Korean menu item rebuilt with concrete ordering cues for sauce, texture, heat, portion feel, and common watch-outs.",
        "zh": "按韩餐点餐场景重建的菜品信息，重点说明酱汁、口感、辣度、分量和常见风险。",
        "nl": "Een Koreaans menu-item met concrete bestelinformatie over saus, textuur, pit, portiegevoel en aandachtspunten."
      }
    },
    "composition": [
      [
        "broth",
        35,
        "soup base"
      ],
      [
        "tofu",
        25,
        "body"
      ],
      [
        "mixed-vegetables",
        20,
        "body"
      ],
      [
        "doenjang",
        15,
        "fermented base",
        "seasoning"
      ],
      [
        "green-onion",
        5,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "doenjang",
      "tofu"
    ],
    "basicTaste": [
      "salty",
      "earthy",
      "umami",
      "savory"
    ],
    "textureProfile": [
      "hot broth",
      "soft tofu",
      "tender vegetables"
    ],
    "riskFlags": [
      "contains-soy"
    ],
    "dietaryFlags": [
      "protein-varies-by-restaurant"
    ],
    "goodForTags": [
      "soup",
      "fermented-flavor",
      "comforting"
    ],
    "avoidIfTags": [
      "soy-allergy",
      "fermented-flavor-avoidant"
    ],
    "orderVerdict": {
      "en": "Choose it for fermented soybean depth rather than bright chili heat.",
      "zh": "想要发酵豆香和咸鲜汤感时适合，不是主打鲜红辣味。",
      "nl": "Kies dit voor gefermenteerde sojadiepte, niet voor felle chilihitte."
    },
    "spiceLevel": 1,
    "weightLevel": 2,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "jajangmyeon",
    "metadataCode": "110012",
    "cuisineId": "korean",
    "names": {
      "en": "Jajangmyeon",
      "zh": "韩式炸酱面",
      "nl": "Jajangmyeon",
      "local": "짜장면"
    },
    "category": "noodle",
    "cookingMethods": [
      "sauce-tossed"
    ],
    "shortDescription": {
      "en": "Korean-Chinese wheat noodles topped with thick black bean sauce, onion, and usually pork.",
      "zh": "韩式中餐黑豆酱拌面，粗小麦面配浓稠春酱、洋葱，常含猪肉。",
      "nl": "Koreaans-Chinese tarwenoedels met dikke zwartebonensaus, ui en meestal varkensvlees."
    },
    "cookingProfile": {
      "en": "The sauce is ladled over boiled noodles and mixed before eating, so it feels thick, glossy, and mildly sweet.",
      "zh": "煮好的面上盖黑豆酱，吃前拌匀，口感浓稠油亮、微甜咸。",
      "nl": "Saus over gekookte noedels, gemengd voor het eten: dik, glanzend en lichtzoet."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "noodle",
        "korean-chinese"
      ],
      "description": {
        "en": "A Korean menu item rebuilt with concrete ordering cues for sauce, texture, heat, portion feel, and common watch-outs.",
        "zh": "按韩餐点餐场景重建的菜品信息，重点说明酱汁、口感、辣度、分量和常见风险。",
        "nl": "Een Koreaans menu-item met concrete bestelinformatie over saus, textuur, pit, portiegevoel en aandachtspunten."
      }
    },
    "composition": [
      [
        "wheat-noodles",
        55,
        "base"
      ],
      [
        "chunjang",
        25,
        "black bean sauce",
        "seasoning"
      ],
      [
        "pork",
        10,
        "common protein"
      ],
      [
        "onion",
        5,
        "sauce body"
      ],
      [
        "cucumber",
        5,
        "fresh garnish"
      ]
    ],
    "distinctiveFlavorSources": [
      "chunjang",
      "onion"
    ],
    "basicTaste": [
      "savory",
      "slightly-sweet",
      "earthy"
    ],
    "textureProfile": [
      "thick black sauce",
      "chewy noodles",
      "soft onion pieces"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-soy",
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "noodle-lover",
      "mild-flavor",
      "comforting"
    ],
    "avoidIfTags": [
      "gluten-allergy",
      "soy-allergy",
      "pork-avoidant"
    ],
    "orderVerdict": {
      "en": "A mild saucy noodle order; pick something else if you want bright spicy Korean flavors.",
      "zh": "这是温和浓酱拌面；如果想吃鲜明辣味韩餐，可以选别的。",
      "nl": "Een milde sauzige noedelkeuze; kies iets anders als je felle Koreaanse pit wilt."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "naengmyeon",
    "metadataCode": "110013",
    "cuisineId": "korean",
    "names": {
      "en": "Naengmyeon",
      "zh": "韩式冷面",
      "nl": "Naengmyeon",
      "local": "냉면"
    },
    "category": "noodle",
    "cookingMethods": [
      "boiled",
      "chilled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "Cold chewy noodles, often in icy tangy broth with cucumber, pear, beef slices, and boiled egg.",
      "zh": "冷食筋道面，常在冰凉酸鲜汤里，配黄瓜、梨、牛肉片和水煮蛋。",
      "nl": "Koude taaie noedels, vaak in ijskoude zure bouillon met komkommer, peer, rund en ei."
    },
    "cookingProfile": {
      "en": "Noodles are cooked then chilled, so the dish feels refreshing, slippery, and firmer than hot noodle soup.",
      "zh": "面煮熟后冷却上桌，清爽滑弹，比热汤面更筋道。",
      "nl": "Noedels worden gekookt en gekoeld: verfrissend, glad en steviger dan warme noedelsoep."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "cold-noodle"
      ],
      "description": {
        "en": "A Korean menu item rebuilt with concrete ordering cues for sauce, texture, heat, portion feel, and common watch-outs.",
        "zh": "按韩餐点餐场景重建的菜品信息，重点说明酱汁、口感、辣度、分量和常见风险。",
        "nl": "Een Koreaans menu-item met concrete bestelinformatie over saus, textuur, pit, portiegevoel en aandachtspunten."
      }
    },
    "composition": [
      [
        "naengmyeon-noodles",
        55,
        "base"
      ],
      [
        "cold-naengmyeon-broth",
        25,
        "cold broth",
        "seasoning"
      ],
      [
        "egg",
        5,
        "topping"
      ],
      [
        "cucumber",
        5,
        "fresh garnish"
      ],
      [
        "beef",
        5,
        "topping"
      ],
      [
        "vinegar",
        5,
        "table seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "cold-naengmyeon-broth",
      "vinegar",
      "naengmyeon-noodles"
    ],
    "basicTaste": [
      "cold",
      "sour",
      "savory",
      "refreshing"
    ],
    "textureProfile": [
      "chewy cold noodles",
      "icy broth",
      "crisp garnish"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "cold-noodle",
      "lighter-choice",
      "summer-food"
    ],
    "avoidIfTags": [
      "gluten-allergy",
      "egg-allergy",
      "cold-food-avoidant"
    ],
    "orderVerdict": {
      "en": "Best when you want a cold, tangy noodle bowl; it can feel unusual if you expected hot soup.",
      "zh": "想吃冰凉酸爽面时很适合；如果预期热汤面，可能会觉得反差大。",
      "nl": "Goed als je koude friszure noedels wilt; opvallend anders als je warme soep verwacht."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "mandu",
    "metadataCode": "110014",
    "cuisineId": "korean",
    "names": {
      "en": "Mandu",
      "zh": "韩式饺子",
      "nl": "Mandu",
      "local": "만두"
    },
    "category": "dumpling",
    "cookingMethods": [
      "steamed",
      "fried"
    ],
    "goodForSharing": true,
    "shortDescription": {
      "en": "Korean dumplings with meat, tofu, kimchi, or vegetable filling, served steamed, boiled, or pan-fried.",
      "zh": "韩式饺子，内馅可能是肉、豆腐、泡菜或蔬菜，可蒸、煮或煎。",
      "nl": "Koreaanse dumplings met vlees, tofu, kimchi of groente, gestoomd, gekookt of gebakken."
    },
    "cookingProfile": {
      "en": "Preparation changes the texture: steamed is soft, pan-fried has a crisp bottom, boiled is lighter.",
      "zh": "做法决定口感：蒸的柔软、煎的底部脆、煮的更清淡。",
      "nl": "Bereiding bepaalt textuur: gestoomd zacht, gebakken krokante bodem, gekookt lichter."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "dumpling",
        "shareable"
      ],
      "description": {
        "en": "A Korean menu item rebuilt with concrete ordering cues for sauce, texture, heat, portion feel, and common watch-outs.",
        "zh": "按韩餐点餐场景重建的菜品信息，重点说明酱汁、口感、辣度、分量和常见风险。",
        "nl": "Een Koreaans menu-item met concrete bestelinformatie over saus, textuur, pit, portiegevoel en aandachtspunten."
      }
    },
    "composition": [
      [
        "dumpling-wrapper",
        45,
        "wrapper"
      ],
      [
        "minced-pork",
        20,
        "common filling"
      ],
      [
        "tofu",
        10,
        "filling"
      ],
      [
        "kimchi",
        10,
        "optional filling"
      ],
      [
        "soy-sauce",
        10,
        "dip",
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
      "soy-sauce",
      "sesame-oil",
      "kimchi"
    ],
    "basicTaste": [
      "savory",
      "umami",
      "mildly-tangy"
    ],
    "textureProfile": [
      "soft wrapper",
      "juicy filling",
      "optional crisp bottom"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-soy",
      "contains-sesame",
      "contains-pork"
    ],
    "dietaryFlags": [
      "filling-varies-by-restaurant"
    ],
    "goodForTags": [
      "shareable",
      "starter",
      "first-timer-friendly"
    ],
    "avoidIfTags": [
      "gluten-allergy",
      "soy-allergy",
      "sesame-allergy",
      "pork-avoidant"
    ],
    "orderVerdict": {
      "en": "A dependable shared starter; check filling if you avoid pork or kimchi.",
      "zh": "很稳的共享前菜；避猪肉或泡菜的人要确认内馅。",
      "nl": "Een betrouwbare deelstarter; check vulling als je varken of kimchi mijdt."
    },
    "spiceLevel": 1,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high"
  }),
  starterDish({
    "id": "bossam",
    "metadataCode": "110015",
    "cuisineId": "korean",
    "names": {
      "en": "Bossam",
      "zh": "韩式包肉",
      "nl": "Bossam",
      "local": "보쌈"
    },
    "category": "meat",
    "cookingMethods": [
      "boiled"
    ],
    "goodForSharing": true,
    "shortDescription": {
      "en": "Tender boiled pork slices served with cabbage or lettuce wraps, kimchi, garlic, and ssamjang.",
      "zh": "水煮或卤煮猪肉切片，配白菜/生菜包、泡菜、蒜片和包饭酱。",
      "nl": "Malse gekookte varkensplakken met kool- of slawraps, kimchi, knoflook en ssamjang."
    },
    "cookingProfile": {
      "en": "The pork is boiled rather than grilled, so it feels softer and cleaner than samgyeopsal.",
      "zh": "猪肉是煮熟切片，不是烤的；比烤五花肉更柔软、油烟感更少。",
      "nl": "Het varken is gekookt, niet gegrild; zachter en schoner dan samgyeopsal."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "shareable"
      ],
      "description": {
        "en": "A Korean menu item rebuilt with concrete ordering cues for sauce, texture, heat, portion feel, and common watch-outs.",
        "zh": "按韩餐点餐场景重建的菜品信息，重点说明酱汁、口感、辣度、分量和常见风险。",
        "nl": "Een Koreaans menu-item met concrete bestelinformatie over saus, textuur, pit, portiegevoel en aandachtspunten."
      }
    },
    "composition": [
      [
        "pork-belly",
        55,
        "boiled pork"
      ],
      [
        "cabbage",
        15,
        "wrap"
      ],
      [
        "kimchi",
        15,
        "side"
      ],
      [
        "ssamjang",
        10,
        "dip",
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
      "pork-belly",
      "kimchi",
      "ssamjang"
    ],
    "basicTaste": [
      "savory",
      "fatty",
      "tangy",
      "salty"
    ],
    "textureProfile": [
      "soft pork slices",
      "fresh wraps",
      "crunchy kimchi"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-soy",
      "contains-sesame"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "shareable",
      "meat-lover",
      "less-smoky-than-bbq"
    ],
    "avoidIfTags": [
      "pork-avoidant",
      "soy-allergy",
      "sesame-allergy"
    ],
    "orderVerdict": {
      "en": "Choose bossam over samgyeopsal if you want soft wrapped pork without grill smoke.",
      "zh": "想吃包肉但不想要烤肉烟熏感时，bossam 比烤五花肉更合适。",
      "nl": "Kies bossam boven samgyeopsal als je zachte wraps met varken wilt zonder grillsmaak."
    },
    "spiceLevel": 1,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "haemul-pajeon",
    "metadataCode": "110016",
    "cuisineId": "korean",
    "names": {
      "en": "Haemul Pajeon",
      "zh": "韩式海鲜葱饼",
      "nl": "Haemul pajeon",
      "local": "해물파전"
    },
    "category": "starter",
    "cookingMethods": [
      "fried"
    ],
    "goodForSharing": true,
    "shortDescription": {
      "en": "Savory Korean pancake with green onions and mixed seafood, usually served with soy dipping sauce.",
      "zh": "韩式咸煎饼，里面有大量葱和混合海鲜，常配酱油蘸汁。",
      "nl": "Hartige Koreaanse pannenkoek met bosui en zeevruchten, meestal met sojadip."
    },
    "cookingProfile": {
      "en": "Pan-fried into a large pancake, so edges are crisp while the center stays tender and seafood-studded.",
      "zh": "煎成大饼状，边缘酥脆，中间柔软并有海鲜颗粒。",
      "nl": "Als grote pannenkoek gebakken: krokante rand, zachte kern met zeevruchten."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "shareable",
        "seafood"
      ],
      "description": {
        "en": "A Korean menu item rebuilt with concrete ordering cues for sauce, texture, heat, portion feel, and common watch-outs.",
        "zh": "按韩餐点餐场景重建的菜品信息，重点说明酱汁、口感、辣度、分量和常见风险。",
        "nl": "Een Koreaans menu-item met concrete bestelinformatie over saus, textuur, pit, portiegevoel en aandachtspunten."
      }
    },
    "composition": [
      [
        "wheat-flour",
        35,
        "batter"
      ],
      [
        "green-onion",
        25,
        "main vegetable"
      ],
      [
        "seafood-mix",
        20,
        "seafood"
      ],
      [
        "egg",
        10,
        "binder"
      ],
      [
        "soy-sauce",
        10,
        "dip",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "green-onion",
      "seafood-mix",
      "soy-sauce"
    ],
    "basicTaste": [
      "savory",
      "briny",
      "mild"
    ],
    "textureProfile": [
      "crisp pancake edges",
      "soft center",
      "tender seafood pieces"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-shellfish",
      "contains-fish",
      "contains-soy"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "shareable",
      "starter",
      "seafood-lover"
    ],
    "avoidIfTags": [
      "shellfish-allergy",
      "fish-allergy",
      "gluten-allergy",
      "egg-allergy",
      "soy-allergy"
    ],
    "orderVerdict": {
      "en": "A good sharing pancake if seafood is welcome; not safe for shellfish allergies.",
      "zh": "适合喜欢海鲜的人分享；甲壳类或鱼类过敏者不适合。",
      "nl": "Een goede deelpannenkoek als zeevruchten welkom zijn; niet veilig bij schaaldierallergie."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "kimbap",
    "metadataCode": "110017",
    "cuisineId": "korean",
    "names": {
      "en": "Kimbap",
      "zh": "韩式紫菜包饭",
      "nl": "Kimbap",
      "local": "김밥"
    },
    "category": "rice",
    "cookingMethods": [
      "assembled"
    ],
    "servingTemperature": "room-temperature-or-cool",
    "goodForSharing": true,
    "shortDescription": {
      "en": "Seaweed rice rolls filled with vegetables, egg, pickles, and often ham, tuna, beef, or fish cake.",
      "zh": "海苔包米饭卷，内馅常有蔬菜、蛋、腌菜，也可能有火腿、金枪鱼、牛肉或鱼饼。",
      "nl": "Zeewierrijstrollen met groenten, ei, pickles en vaak ham, tonijn, rund of viscake."
    },
    "cookingProfile": {
      "en": "Assembled and sliced, so it is compact, mild, and less vinegary than sushi for many diners.",
      "zh": "卷好后切片上桌，口味温和紧实，对很多人来说比寿司醋味更弱。",
      "nl": "Samengesteld en gesneden: compact, mild en voor velen minder azijnig dan sushi."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "rice",
        "shareable",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A Korean menu item rebuilt with concrete ordering cues for sauce, texture, heat, portion feel, and common watch-outs.",
        "zh": "按韩餐点餐场景重建的菜品信息，重点说明酱汁、口感、辣度、分量和常见风险。",
        "nl": "Een Koreaans menu-item met concrete bestelinformatie over saus, textuur, pit, portiegevoel en aandachtspunten."
      }
    },
    "composition": [
      [
        "steamed-rice",
        45,
        "base"
      ],
      [
        "seaweed",
        15,
        "wrap"
      ],
      [
        "mixed-vegetables",
        15,
        "filling"
      ],
      [
        "egg",
        10,
        "filling"
      ],
      [
        "fish-cake",
        10,
        "common filling"
      ],
      [
        "sesame-oil",
        5,
        "rice aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "seaweed",
      "sesame-oil",
      "pickles"
    ],
    "basicTaste": [
      "mild",
      "savory",
      "nutty"
    ],
    "textureProfile": [
      "compact rice roll",
      "crisp vegetables",
      "soft sliced pieces"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-fish",
      "contains-sesame"
    ],
    "dietaryFlags": [
      "filling-varies-by-restaurant"
    ],
    "goodForTags": [
      "shareable",
      "first-timer-friendly",
      "snack"
    ],
    "avoidIfTags": [
      "egg-allergy",
      "fish-allergy",
      "sesame-allergy"
    ],
    "orderVerdict": {
      "en": "A mild snack or shared plate; check fillings because tuna, ham, beef, egg, or fish cake are common.",
      "zh": "适合当温和小食或分享盘；内馅常有鱼、火腿、牛肉、蛋或鱼饼，要看清。",
      "nl": "Een milde snack of deelhap; check vulling door tonijn, ham, rund, ei of viscake."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.84,
    "restaurantVariationLevel": "high"
  }),
  starterDish({
    "id": "kung-pao-chicken",
    "metadataCode": "111006",
    "cuisineId": "chinese",
    "names": {
      "en": "Kung Pao Chicken",
      "zh": "宫保鸡丁",
      "nl": "Kung pao kip",
      "local": "宫保鸡丁"
    },
    "category": "rice",
    "cookingMethods": [
      "stir-fried"
    ],
    "shortDescription": {
      "en": "Stir-fried chicken with peanuts, chili, and sweet-savory sauce.",
      "zh": "宫保鸡丁 是常见中国菜菜单菜品，重点适合用来判断口味、分量和点餐风险。",
      "nl": "Kung pao kip is een veelvoorkomend gerecht in de chinees keuken, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served as a rice with a soft rice, mixed toppings feel.",
      "zh": "通常以rice形式上桌，重点体验是soft rice。",
      "nl": "Meestal geserveerd als rice met een soft rice gevoel."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "lighter-choice"
      ],
      "description": {
        "en": "A high-frequency Chinese menu item added for broader restaurant coverage.",
        "zh": "为提升餐厅菜单覆盖率加入的高频中国菜菜品。",
        "nl": "Een vaak voorkomend chinees menu-item voor bredere restaurantdekking."
      }
    },
    "composition": [
      [
        "steamed-rice",
        55,
        "base"
      ],
      [
        "mixed-vegetables",
        20,
        "body"
      ],
      [
        "egg",
        10,
        "topping"
      ],
      [
        "soy-sauce",
        10,
        "seasoning",
        "seasoning"
      ],
      [
        "green-onion",
        5,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "soy-sauce",
      "doubanjiang",
      "sichuan-pepper"
    ],
    "basicTaste": [
      "savory",
      "mild"
    ],
    "textureProfile": [
      "soft rice",
      "mixed toppings"
    ],
    "riskFlags": [
      "contains-peanut",
      "contains-soy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "common-menu-item",
      "lighter-choice"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "A good pick if peanuts and mild heat are okay.",
      "zh": "如果你接受这类口味和风险，宫保鸡丁 是可以优先考虑的选择。",
      "nl": "Een goede keuze als je deze smaak en risico’s prima vindt."
    },
    "spiceLevel": 2,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.74,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "sweet-and-sour-pork",
    "metadataCode": "111007",
    "cuisineId": "chinese",
    "names": {
      "en": "Sweet and Sour Pork",
      "zh": "咕咾肉",
      "nl": "Zoetzure varkensvlees",
      "local": "咕咾肉"
    },
    "category": "meat",
    "cookingMethods": [
      "braised"
    ],
    "shortDescription": {
      "en": "Crisp pork pieces in bright sweet-sour sauce, often with peppers or pineapple.",
      "zh": "咕咾肉 是常见中国菜菜单菜品，重点适合用来判断口味、分量和点餐风险。",
      "nl": "Zoetzure varkensvlees is een veelvoorkomend gerecht in de chinees keuken, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served as a meat with a tender meat, rich sauce feel.",
      "zh": "通常以meat形式上桌，重点体验是tender meat。",
      "nl": "Meestal geserveerd als meat met een tender meat gevoel."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A high-frequency Chinese menu item added for broader restaurant coverage.",
        "zh": "为提升餐厅菜单覆盖率加入的高频中国菜菜品。",
        "nl": "Een vaak voorkomend chinees menu-item voor bredere restaurantdekking."
      }
    },
    "composition": [
      [
        "beef",
        55,
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
        "side"
      ],
      [
        "butter",
        5,
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
      "soy-sauce",
      "doubanjiang",
      "sichuan-pepper"
    ],
    "basicTaste": [
      "savory",
      "rich",
      "umami"
    ],
    "textureProfile": [
      "tender meat",
      "rich sauce"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "common-menu-item",
      "first-timer-friendly"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Familiar and sweet; avoid if you do not eat pork or fried food.",
      "zh": "如果你接受这类口味和风险，咕咾肉 是可以优先考虑的选择。",
      "nl": "Een goede keuze als je deze smaak en risico’s prima vindt."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.74,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "dan-dan-noodles",
    "metadataCode": "111008",
    "cuisineId": "chinese",
    "names": {
      "en": "Dan Dan Noodles",
      "zh": "担担面",
      "nl": "Dan dan noedels",
      "local": "担担面"
    },
    "category": "noodle",
    "cookingMethods": [
      "stir-fried"
    ],
    "shortDescription": {
      "en": "Noodles with chili oil, sesame or peanut richness, and minced pork in many versions.",
      "zh": "担担面 是常见中国菜菜单菜品，重点适合用来判断口味、分量和点餐风险。",
      "nl": "Dan dan noedels is een veelvoorkomend gerecht in de chinees keuken, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served as a noodle with a springy noodles, glossy sauce feel.",
      "zh": "通常以noodle形式上桌，重点体验是springy noodles。",
      "nl": "Meestal geserveerd als noodle met een springy noodles gevoel."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item"
      ],
      "description": {
        "en": "A high-frequency Chinese menu item added for broader restaurant coverage.",
        "zh": "为提升餐厅菜单覆盖率加入的高频中国菜菜品。",
        "nl": "Een vaak voorkomend chinees menu-item voor bredere restaurantdekking."
      }
    },
    "composition": [
      [
        "wheat-noodles",
        45,
        "base"
      ],
      [
        "mixed-vegetables",
        20,
        "body"
      ],
      [
        "chicken",
        20,
        "protein"
      ],
      [
        "soy-sauce",
        10,
        "seasoning",
        "seasoning"
      ],
      [
        "green-onion",
        5,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "soy-sauce",
      "doubanjiang",
      "sichuan-pepper"
    ],
    "basicTaste": [
      "savory",
      "umami"
    ],
    "textureProfile": [
      "springy noodles",
      "glossy sauce"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-pork",
      "contains-peanut",
      "contains-soy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "common-menu-item"
    ],
    "avoidIfTags": [
      "spice-sensitive"
    ],
    "orderVerdict": {
      "en": "Order if you want spicy, nutty, savory noodles; check peanut and pork.",
      "zh": "如果你接受这类口味和风险，担担面 是可以优先考虑的选择。",
      "nl": "Een goede keuze als je deze smaak en risico’s prima vindt."
    },
    "spiceLevel": 4,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.74,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "wonton-soup",
    "metadataCode": "111009",
    "cuisineId": "chinese",
    "names": {
      "en": "Wonton Soup",
      "zh": "馄饨汤",
      "nl": "Wontonsoep",
      "local": "馄饨汤"
    },
    "category": "soup",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Dumplings in clear broth, usually with pork or shrimp filling.",
      "zh": "馄饨汤 是常见中国菜菜单菜品，重点适合用来判断口味、分量和点餐风险。",
      "nl": "Wontonsoep is een veelvoorkomend gerecht in de chinees keuken, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served as a soup with a hot broth, soft pieces feel.",
      "zh": "通常以soup形式上桌，重点体验是hot broth。",
      "nl": "Meestal geserveerd als soup met een hot broth gevoel."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A high-frequency Chinese menu item added for broader restaurant coverage.",
        "zh": "为提升餐厅菜单覆盖率加入的高频中国菜菜品。",
        "nl": "Een vaak voorkomend chinees menu-item voor bredere restaurantdekking."
      }
    },
    "composition": [
      [
        "broth",
        45,
        "soup-base"
      ],
      [
        "mixed-vegetables",
        20,
        "body"
      ],
      [
        "chicken",
        20,
        "protein"
      ],
      [
        "green-onion",
        5,
        "finish"
      ],
      [
        "soy-sauce",
        10,
        "seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "soy-sauce",
      "doubanjiang",
      "sichuan-pepper"
    ],
    "basicTaste": [
      "savory",
      "brothy"
    ],
    "textureProfile": [
      "hot broth",
      "soft pieces"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "common-menu-item",
      "first-timer-friendly",
      "lighter-choice"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "A gentler soup choice, but filling may include pork or shellfish.",
      "zh": "如果你接受这类口味和风险，馄饨汤 是可以优先考虑的选择。",
      "nl": "Een goede keuze als je deze smaak en risico’s prima vindt."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.74,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "jiaozi",
    "metadataCode": "111010",
    "cuisineId": "chinese",
    "names": {
      "en": "Jiaozi Dumplings",
      "zh": "饺子",
      "nl": "Jiaozi dumplings",
      "local": "饺子"
    },
    "category": "dumpling",
    "cookingMethods": [
      "steamed"
    ],
    "shortDescription": {
      "en": "Chinese dumplings boiled, steamed, or pan-fried with meat or vegetable filling.",
      "zh": "饺子 是常见中国菜菜单菜品，重点适合用来判断口味、分量和点餐风险。",
      "nl": "Jiaozi dumplings is een veelvoorkomend gerecht in de chinees keuken, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served as a dumpling with a soft wrapper, juicy filling feel.",
      "zh": "通常以dumpling形式上桌，重点体验是soft wrapper。",
      "nl": "Meestal geserveerd als dumpling met een soft wrapper gevoel."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A high-frequency Chinese menu item added for broader restaurant coverage.",
        "zh": "为提升餐厅菜单覆盖率加入的高频中国菜菜品。",
        "nl": "Een vaak voorkomend chinees menu-item voor bredere restaurantdekking."
      }
    },
    "composition": [
      [
        "dumpling-wrapper",
        45,
        "wrapper"
      ],
      [
        "minced-pork",
        25,
        "filling"
      ],
      [
        "mixed-vegetables",
        15,
        "filling"
      ],
      [
        "soy-sauce",
        10,
        "dip",
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
      "soy-sauce",
      "doubanjiang",
      "sichuan-pepper"
    ],
    "basicTaste": [
      "savory",
      "umami"
    ],
    "textureProfile": [
      "soft wrapper",
      "juicy filling"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "common-menu-item",
      "first-timer-friendly",
      "lighter-choice"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Good sharing dish; filling and cooking style matter most.",
      "zh": "如果你接受这类口味和风险，饺子 是可以优先考虑的选择。",
      "nl": "Een goede keuze als je deze smaak en risico’s prima vindt."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.74,
    "restaurantVariationLevel": "high"
  }),
  starterDish({
    "id": "yangzhou-fried-rice",
    "metadataCode": "111011",
    "cuisineId": "chinese",
    "names": {
      "en": "Yangzhou Fried Rice",
      "zh": "扬州炒饭",
      "nl": "Yangzhou gebakken rijst",
      "local": "扬州炒饭"
    },
    "category": "rice",
    "cookingMethods": [
      "stir-fried"
    ],
    "shortDescription": {
      "en": "Fried rice with egg, vegetables, and usually shrimp or ham-style meat.",
      "zh": "扬州炒饭 是常见中国菜菜单菜品，重点适合用来判断口味、分量和点餐风险。",
      "nl": "Yangzhou gebakken rijst is een veelvoorkomend gerecht in de chinees keuken, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served as a rice with a soft rice, mixed toppings feel.",
      "zh": "通常以rice形式上桌，重点体验是soft rice。",
      "nl": "Meestal geserveerd als rice met een soft rice gevoel."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "common-menu-item",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A high-frequency Chinese menu item added for broader restaurant coverage.",
        "zh": "为提升餐厅菜单覆盖率加入的高频中国菜菜品。",
        "nl": "Een vaak voorkomend chinees menu-item voor bredere restaurantdekking."
      }
    },
    "composition": [
      [
        "steamed-rice",
        55,
        "base"
      ],
      [
        "mixed-vegetables",
        20,
        "body"
      ],
      [
        "egg",
        10,
        "topping"
      ],
      [
        "soy-sauce",
        10,
        "seasoning",
        "seasoning"
      ],
      [
        "green-onion",
        5,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "soy-sauce",
      "doubanjiang",
      "sichuan-pepper"
    ],
    "basicTaste": [
      "savory",
      "mild"
    ],
    "textureProfile": [
      "soft rice",
      "mixed toppings"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-shellfish",
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "common-menu-item",
      "first-timer-friendly",
      "lighter-choice"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "A familiar rice order; check shrimp and pork if needed.",
      "zh": "如果你接受这类口味和风险，扬州炒饭 是可以优先考虑的选择。",
      "nl": "Een goede keuze als je deze smaak en risico’s prima vindt."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.74,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "char-siu",
    "metadataCode": "111012",
    "cuisineId": "chinese",
    "names": {
      "en": "Char Siu",
      "zh": "叉烧",
      "nl": "Char siu",
      "local": "叉烧"
    },
    "category": "meat",
    "cookingMethods": [
      "braised"
    ],
    "shortDescription": {
      "en": "Cantonese roast pork with a sweet, glossy, savory glaze.",
      "zh": "叉烧 是常见中国菜菜单菜品，重点适合用来判断口味、分量和点餐风险。",
      "nl": "Char siu is een veelvoorkomend gerecht in de chinees keuken, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served as a meat with a tender meat, rich sauce feel.",
      "zh": "通常以meat形式上桌，重点体验是tender meat。",
      "nl": "Meestal geserveerd als meat met een tender meat gevoel."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A high-frequency Chinese menu item added for broader restaurant coverage.",
        "zh": "为提升餐厅菜单覆盖率加入的高频中国菜菜品。",
        "nl": "Een vaak voorkomend chinees menu-item voor bredere restaurantdekking."
      }
    },
    "composition": [
      [
        "beef",
        55,
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
        "side"
      ],
      [
        "butter",
        5,
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
      "soy-sauce",
      "doubanjiang",
      "sichuan-pepper"
    ],
    "basicTaste": [
      "savory",
      "rich",
      "umami"
    ],
    "textureProfile": [
      "tender meat",
      "rich sauce"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "common-menu-item",
      "first-timer-friendly"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Great if you want sweet-savory pork; not suitable for no-pork diets.",
      "zh": "如果你接受这类口味和风险，叉烧 是可以优先考虑的选择。",
      "nl": "Een goede keuze als je deze smaak en risico’s prima vindt."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.74,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "spring-rolls",
    "metadataCode": "111013",
    "cuisineId": "chinese",
    "names": {
      "en": "Spring Rolls",
      "zh": "春卷",
      "nl": "Loempia’s",
      "local": "春卷"
    },
    "category": "fried-snack",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "Crisp rolls filled with vegetables, meat, or shrimp depending on the restaurant.",
      "zh": "春卷 是常见中国菜菜单菜品，重点适合用来判断口味、分量和点餐风险。",
      "nl": "Loempia’s is een veelvoorkomend gerecht in de chinees keuken, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served as a fried snack with a crisp outside, savory center feel.",
      "zh": "通常以fried-snack形式上桌，重点体验是crisp outside。",
      "nl": "Meestal geserveerd als fried snack met een crisp outside gevoel."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A high-frequency Chinese menu item added for broader restaurant coverage.",
        "zh": "为提升餐厅菜单覆盖率加入的高频中国菜菜品。",
        "nl": "Een vaak voorkomend chinees menu-item voor bredere restaurantdekking."
      }
    },
    "composition": [
      [
        "fried-chicken",
        45,
        "main"
      ],
      [
        "wheat-flour",
        25,
        "coating"
      ],
      [
        "egg",
        10,
        "binder"
      ],
      [
        "mustard",
        10,
        "dip",
        "seasoning"
      ],
      [
        "fries",
        10,
        "side"
      ]
    ],
    "distinctiveFlavorSources": [
      "soy-sauce",
      "doubanjiang",
      "sichuan-pepper"
    ],
    "basicTaste": [
      "savory",
      "salty"
    ],
    "textureProfile": [
      "crisp outside",
      "savory center"
    ],
    "riskFlags": [
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "common-menu-item",
      "first-timer-friendly",
      "lighter-choice"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Easy starter, but ask about filling if avoiding meat or shellfish.",
      "zh": "如果你接受这类口味和风险，春卷 是可以优先考虑的选择。",
      "nl": "Een goede keuze als je deze smaak en risico’s prima vindt."
    },
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.74,
    "restaurantVariationLevel": "high"
  }),
  starterDish({
    "id": "beef-chow-fun",
    "metadataCode": "111014",
    "cuisineId": "chinese",
    "names": {
      "en": "Beef Chow Fun",
      "zh": "干炒牛河",
      "nl": "Beef chow fun",
      "local": "干炒牛河"
    },
    "category": "noodle",
    "cookingMethods": [
      "stir-fried"
    ],
    "shortDescription": {
      "en": "Wide rice noodles stir-fried with beef, soy sauce, and wok aroma.",
      "zh": "干炒牛河 是常见中国菜菜单菜品，重点适合用来判断口味、分量和点餐风险。",
      "nl": "Beef chow fun is een veelvoorkomend gerecht in de chinees keuken, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served as a noodle with a springy noodles, glossy sauce feel.",
      "zh": "通常以noodle形式上桌，重点体验是springy noodles。",
      "nl": "Meestal geserveerd als noodle met een springy noodles gevoel."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A high-frequency Chinese menu item added for broader restaurant coverage.",
        "zh": "为提升餐厅菜单覆盖率加入的高频中国菜菜品。",
        "nl": "Een vaak voorkomend chinees menu-item voor bredere restaurantdekking."
      }
    },
    "composition": [
      [
        "wheat-noodles",
        45,
        "base"
      ],
      [
        "mixed-vegetables",
        20,
        "body"
      ],
      [
        "chicken",
        20,
        "protein"
      ],
      [
        "soy-sauce",
        10,
        "seasoning",
        "seasoning"
      ],
      [
        "green-onion",
        5,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "soy-sauce",
      "doubanjiang",
      "sichuan-pepper"
    ],
    "basicTaste": [
      "savory",
      "umami"
    ],
    "textureProfile": [
      "springy noodles",
      "glossy sauce"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-soy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "common-menu-item",
      "first-timer-friendly"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "A strong Cantonese noodle choice if you like beef and smoky wok flavor.",
      "zh": "如果你接受这类口味和风险，干炒牛河 是可以优先考虑的选择。",
      "nl": "Een goede keuze als je deze smaak en risico’s prima vindt."
    },
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.74,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "salt-pepper-squid",
    "metadataCode": "111015",
    "cuisineId": "chinese",
    "names": {
      "en": "Salt and Pepper Squid",
      "zh": "椒盐鱿鱼",
      "nl": "Zout-peper inktvis",
      "local": "椒盐鱿鱼"
    },
    "category": "seafood",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Fried squid with salt, pepper, chili, and garlic-style aromatics.",
      "zh": "椒盐鱿鱼 是常见中国菜菜单菜品，重点适合用来判断口味、分量和点餐风险。",
      "nl": "Zout-peper inktvis is een veelvoorkomend gerecht in de chinees keuken, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served as a seafood with a tender seafood, fresh finish feel.",
      "zh": "通常以seafood形式上桌，重点体验是tender seafood。",
      "nl": "Meestal geserveerd als seafood met een tender seafood gevoel."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item"
      ],
      "description": {
        "en": "A high-frequency Chinese menu item added for broader restaurant coverage.",
        "zh": "为提升餐厅菜单覆盖率加入的高频中国菜菜品。",
        "nl": "Een vaak voorkomend chinees menu-item voor bredere restaurantdekking."
      }
    },
    "composition": [
      [
        "raw-fish",
        45,
        "main"
      ],
      [
        "mixed-vegetables",
        20,
        "side"
      ],
      [
        "steamed-rice",
        20,
        "base"
      ],
      [
        "lemon",
        10,
        "finish"
      ],
      [
        "olive-oil",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "soy-sauce",
      "doubanjiang",
      "sichuan-pepper"
    ],
    "basicTaste": [
      "briny",
      "fresh",
      "savory"
    ],
    "textureProfile": [
      "tender seafood",
      "fresh finish"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "common-menu-item"
    ],
    "avoidIfTags": [],
    "orderVerdict": {
      "en": "Good crispy seafood starter if shellfish/seafood is fine.",
      "zh": "如果你接受这类口味和风险，椒盐鱿鱼 是可以优先考虑的选择。",
      "nl": "Een goede keuze als je deze smaak en risico’s prima vindt."
    },
    "spiceLevel": 2,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.74,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "twice-cooked-pork",
    "metadataCode": "111016",
    "cuisineId": "chinese",
    "names": {
      "en": "Twice-Cooked Pork",
      "zh": "回锅肉",
      "nl": "Dubbelgebakken varkensvlees",
      "local": "回锅肉"
    },
    "category": "meat",
    "cookingMethods": [
      "braised"
    ],
    "shortDescription": {
      "en": "Sichuan pork slices stir-fried with fermented chili bean paste and vegetables.",
      "zh": "回锅肉 是常见中国菜菜单菜品，重点适合用来判断口味、分量和点餐风险。",
      "nl": "Dubbelgebakken varkensvlees is een veelvoorkomend gerecht in de chinees keuken, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served as a meat with a tender meat, rich sauce feel.",
      "zh": "通常以meat形式上桌，重点体验是tender meat。",
      "nl": "Meestal geserveerd als meat met een tender meat gevoel."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item"
      ],
      "description": {
        "en": "A high-frequency Chinese menu item added for broader restaurant coverage.",
        "zh": "为提升餐厅菜单覆盖率加入的高频中国菜菜品。",
        "nl": "Een vaak voorkomend chinees menu-item voor bredere restaurantdekking."
      }
    },
    "composition": [
      [
        "beef",
        55,
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
        "side"
      ],
      [
        "butter",
        5,
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
      "soy-sauce",
      "doubanjiang",
      "sichuan-pepper"
    ],
    "basicTaste": [
      "savory",
      "rich",
      "umami"
    ],
    "textureProfile": [
      "tender meat",
      "rich sauce"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-soy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "common-menu-item"
    ],
    "avoidIfTags": [
      "spice-sensitive"
    ],
    "orderVerdict": {
      "en": "Bold, savory, and pork-heavy; good for spicy-food fans.",
      "zh": "如果你接受这类口味和风险，回锅肉 是可以优先考虑的选择。",
      "nl": "Een goede keuze als je deze smaak en risico’s prima vindt."
    },
    "spiceLevel": 3,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.74,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "sichuan-boiled-fish",
    "metadataCode": "111017",
    "cuisineId": "chinese",
    "names": {
      "en": "Sichuan Boiled Fish",
      "zh": "水煮鱼",
      "nl": "Sichuan gekookte vis",
      "local": "水煮鱼"
    },
    "category": "seafood",
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "Fish served in chili oil broth with Sichuan pepper numbing aroma.",
      "zh": "水煮鱼 是常见中国菜菜单菜品，重点适合用来判断口味、分量和点餐风险。",
      "nl": "Sichuan gekookte vis is een veelvoorkomend gerecht in de chinees keuken, beschreven voor snelle bestelkeuzes."
    },
    "cookingProfile": {
      "en": "Usually served as a seafood with a tender seafood, fresh finish feel.",
      "zh": "通常以seafood形式上桌，重点体验是tender seafood。",
      "nl": "Meestal geserveerd als seafood met een tender seafood gevoel."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "common-menu-item"
      ],
      "description": {
        "en": "A high-frequency Chinese menu item added for broader restaurant coverage.",
        "zh": "为提升餐厅菜单覆盖率加入的高频中国菜菜品。",
        "nl": "Een vaak voorkomend chinees menu-item voor bredere restaurantdekking."
      }
    },
    "composition": [
      [
        "raw-fish",
        45,
        "main"
      ],
      [
        "mixed-vegetables",
        20,
        "side"
      ],
      [
        "steamed-rice",
        20,
        "base"
      ],
      [
        "lemon",
        10,
        "finish"
      ],
      [
        "olive-oil",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "soy-sauce",
      "doubanjiang",
      "sichuan-pepper"
    ],
    "basicTaste": [
      "briny",
      "fresh",
      "savory"
    ],
    "textureProfile": [
      "tender seafood",
      "fresh finish"
    ],
    "riskFlags": [
      "contains-fish",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "common-menu-item"
    ],
    "avoidIfTags": [
      "spice-sensitive",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Order only if you want serious spice, oil, and numbing heat.",
      "zh": "如果你接受这类口味和风险，水煮鱼 是可以优先考虑的选择。",
      "nl": "Een goede keuze als je deze smaak en risico’s prima vindt."
    },
    "spiceLevel": 5,
    "weightLevel": 4,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.74,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "cacio-e-pepe",
    "metadataCode": "101016",
    "cuisineId": "italian",
    "names": {
      "en": "Cacio e Pepe",
      "zh": "奶酪黑胡椒意面",
      "nl": "Cacio e pepe",
      "local": "Cacio e pepe"
    },
    "category": "pasta",
    "cookingMethods": [
      "boiled",
      "sauce-tossed"
    ],
    "shortDescription": {
      "en": "Roman pasta built around pecorino cheese, black pepper, and pasta water, with a creamy feel but no cream in the classic version.",
      "zh": "罗马经典意面，核心是佩科里诺奶酪和黑胡椒，口感咸香浓郁，传统做法不靠奶油。",
      "nl": "Romeinse pasta met pecorino, zwarte peper en pastawater; romig van gevoel, maar klassiek zonder room."
    },
    "cookingProfile": {
      "en": "Served hot and glossy, with firm pasta coated in a salty cheese-and-pepper sauce.",
      "zh": "热食上桌，面条有嚼劲，表面裹着咸香的奶酪黑胡椒酱。",
      "nl": "Warm geserveerd, met stevige pasta in een zoute kaas-pepersaus."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "regional-dish",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A Roman pasta classic that is useful for recognizing simple, cheese-forward Italian orders.",
        "zh": "罗马代表性意面，适合识别以奶酪和黑胡椒为主的简洁意式点单。",
        "nl": "Een Romeinse pastaklassieker voor het herkennen van eenvoudige, kaasgerichte Italiaanse bestellingen."
      }
    },
    "composition": [
      [
        "spaghetti",
        65,
        "base"
      ],
      [
        "pecorino",
        20,
        "sauce-base"
      ],
      [
        "parmesan",
        5,
        "finish"
      ],
      [
        "black-pepper",
        5,
        "seasoning",
        "seasoning"
      ],
      [
        "olive-oil",
        5,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "pecorino",
      "black-pepper"
    ],
    "basicTaste": [
      "salty",
      "savory",
      "peppery",
      "creamy"
    ],
    "textureProfile": [
      "firm pasta",
      "silky cheese coating",
      "pepper grain bite"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "classic-dish",
      "first-timer-friendly",
      "creamy"
    ],
    "avoidIfTags": [
      "dairy-free",
      "gluten-free",
      "wants-tomato-sauce"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a simple but rich cheese-and-pepper pasta; skip if you need a light or dairy-free plate.",
      "zh": "想要简单但浓郁的奶酪黑胡椒意面时很合适；忌乳制品或想吃清淡口味时不推荐。",
      "nl": "Kies dit voor een eenvoudige maar rijke kaas-peperpasta; minder geschikt als je licht of zuivelvrij wilt eten."
    },
    "confidenceTag": "audited-italian-batch-003",
    "spiceLevel": 1,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium",
    "commonVariations": [
      {
        "label": {
          "en": "classic Roman",
          "zh": "罗马经典",
          "nl": "klassiek Romeins"
        },
        "note": {
          "en": "Pecorino Romano, black pepper, and pasta water; cream is a restaurant variation.",
          "zh": "经典版本是佩科里诺、黑胡椒和煮面水；加奶油属于餐厅变化。",
          "nl": "Met pecorino romano, zwarte peper en pastawater; room is een restaurantvariant."
        }
      }
    ]
  }),
  starterDish({
    "id": "amatriciana",
    "metadataCode": "101017",
    "cuisineId": "italian",
    "names": {
      "en": "Amatriciana",
      "zh": "阿马特里恰纳意面",
      "nl": "Amatriciana",
      "local": "Amatriciana"
    },
    "category": "pasta",
    "cookingMethods": [
      "boiled",
      "sauce-tossed"
    ],
    "shortDescription": {
      "en": "Central Italian tomato pasta with guanciale or pancetta, pecorino, and a lightly spicy cured-pork depth.",
      "zh": "中部意大利风格的番茄意面，常用风干猪颊肉或培根、佩科里诺和少量辣味。",
      "nl": "Midden-Italiaanse tomatenpasta met guanciale of pancetta, pecorino en een licht pittige varkenssmaak."
    },
    "cookingProfile": {
      "en": "Served hot with tomato sauce clinging to the pasta and small salty pieces of cured pork.",
      "zh": "热食上桌，番茄酱汁包裹面条，并有咸香的风干猪肉小块。",
      "nl": "Warm geserveerd, met tomatensaus rond de pasta en zoute stukjes gedroogd varkensvlees."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "regional-dish"
      ],
      "description": {
        "en": "A Lazio-area pasta classic for diners who want tomato sauce with pork richness.",
        "zh": "拉齐奥一带的经典意面，适合想要番茄酱汁和猪肉咸香的点单。",
        "nl": "Een pastaklassieker uit de regio Lazio voor wie tomatensaus met varkensrijkdom wil."
      }
    },
    "composition": [
      [
        "spaghetti",
        55,
        "base"
      ],
      [
        "tomato-sauce",
        20,
        "sauce-base"
      ],
      [
        "guanciale-or-pancetta",
        15,
        "protein"
      ],
      [
        "pecorino",
        5,
        "finish"
      ],
      [
        "chili",
        3,
        "heat",
        "seasoning"
      ],
      [
        "black-pepper",
        2,
        "seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "guanciale-or-pancetta",
      "pecorino",
      "chili"
    ],
    "basicTaste": [
      "savory",
      "salty",
      "tomato-tangy",
      "mildly-spicy"
    ],
    "textureProfile": [
      "firm pasta",
      "coated tomato sauce",
      "chewy cured pork"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "contains-pork",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "classic-dish",
      "spicy",
      "pasta"
    ],
    "avoidIfTags": [
      "no-pork",
      "dairy-free",
      "gluten-free",
      "spice-sensitive"
    ],
    "orderVerdict": {
      "en": "A good pick if you want tomato pasta with porky salt and a little heat; not suitable for pork-free orders.",
      "zh": "想吃带猪肉咸香和轻微辣感的番茄意面时很合适；不吃猪肉时应避开。",
      "nl": "Goed als je tomatenpasta met zoute varkenssmaak en lichte pit wilt; niet geschikt zonder varkensvlees."
    },
    "confidenceTag": "audited-italian-batch-003",
    "spiceLevel": 1,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "bolognese",
    "metadataCode": "101018",
    "cuisineId": "italian",
    "names": {
      "en": "Bolognese",
      "zh": "博洛尼亚肉酱面",
      "nl": "Bolognese",
      "local": "Bolognese"
    },
    "category": "pasta",
    "cookingMethods": [
      "simmered",
      "boiled",
      "sauce-tossed"
    ],
    "shortDescription": {
      "en": "Pasta with a slow-simmered meat ragù, usually more meaty and less bright than tomato-only sauce.",
      "zh": "搭配慢炖肉酱的意面，肉香明显，通常比单纯番茄酱更厚重。",
      "nl": "Pasta met langzaam gestoofde vleessaus, meestal vlezig en minder fris dan alleen tomatensaus."
    },
    "cookingProfile": {
      "en": "Served hot as a hearty pasta where the meat sauce is the main source of body.",
      "zh": "热食上桌，分量感主要来自浓厚肉酱，整体偏饱足。",
      "nl": "Warm geserveerd als stevige pasta waarbij de vleessaus voor de meeste vulling zorgt."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "first-timer-friendly",
        "internationally-known"
      ],
      "description": {
        "en": "A widely recognized Italian-style meat-sauce pasta useful as a safe ordering reference.",
        "zh": "识别度很高的意式肉酱意面，可作为稳妥点单参考。",
        "nl": "Een breed herkenbare Italiaanse vleessauspasta, handig als veilige bestelreferentie."
      }
    },
    "composition": [
      [
        "pasta",
        45,
        "base"
      ],
      [
        "meat-ragu",
        35,
        "sauce-base"
      ],
      [
        "tomato-sauce",
        10,
        "sauce-base"
      ],
      [
        "parmesan",
        5,
        "finish"
      ],
      [
        "onion",
        5,
        "aroma"
      ]
    ],
    "distinctiveFlavorSources": [
      "meat-ragu",
      "parmesan",
      "tomato-sauce"
    ],
    "basicTaste": [
      "savory",
      "umami",
      "rich"
    ],
    "textureProfile": [
      "firm pasta",
      "thick meat sauce",
      "grated cheese finish"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "safe-choice",
      "first-timer-friendly",
      "internationally-known"
    ],
    "avoidIfTags": [
      "vegetarian",
      "dairy-free",
      "gluten-free",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "A safe, filling choice if you want meat sauce; ask about the meat mix if pork or beef matters.",
      "zh": "想吃肉酱和饱足感时是稳妥选择；若在意猪肉或牛肉，需要询问肉酱组成。",
      "nl": "Een veilige, vullende keuze voor vleessaus; vraag naar de vleesmix als varken of rund belangrijk is."
    },
    "confidenceTag": "audited-italian-batch-003",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "high"
  }),
  starterDish({
    "id": "spaghetti-vongole",
    "metadataCode": "101019",
    "cuisineId": "italian",
    "names": {
      "en": "Spaghetti alle Vongole",
      "zh": "蛤蜊意面",
      "nl": "Spaghetti vongole",
      "local": "Spaghetti alle vongole"
    },
    "category": "pasta",
    "cookingMethods": [
      "boiled",
      "sauce-tossed"
    ],
    "shortDescription": {
      "en": "Spaghetti with clams, garlic, olive oil, and often white wine, usually briny rather than creamy.",
      "zh": "蛤蜊、蒜、橄榄油和常见白葡萄酒风味的意面，重点是海味鲜咸而不是奶油感。",
      "nl": "Spaghetti met venusschelpen, knoflook, olijfolie en vaak witte wijn; eerder zilte zee dan romig."
    },
    "cookingProfile": {
      "en": "Served hot with a light glossy sauce and whole clams visible on the plate.",
      "zh": "热食上桌，酱汁轻薄油润，盘中通常能直接看到带壳蛤蜊。",
      "nl": "Warm geserveerd met een lichte glanzende saus en zichtbare schelpen op het bord."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "regional-dish"
      ],
      "description": {
        "en": "A coastal Italian pasta reference for briny seafood orders.",
        "zh": "沿海意大利常见的海鲜意面参考，适合识别鲜咸贝类点单。",
        "nl": "Een kust-Italiaanse pastareferentie voor ziltige zeevruchtenbestellingen."
      }
    },
    "composition": [
      [
        "spaghetti",
        55,
        "base"
      ],
      [
        "clams",
        25,
        "seafood"
      ],
      [
        "wine",
        10,
        "sauce-base"
      ],
      [
        "garlic",
        5,
        "aroma"
      ],
      [
        "olive-oil",
        5,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "clams",
      "garlic",
      "wine",
      "olive-oil"
    ],
    "basicTaste": [
      "briny",
      "savory",
      "garlicky",
      "light"
    ],
    "textureProfile": [
      "firm spaghetti",
      "tender clams",
      "light glossy sauce"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-shellfish",
      "contains-alcohol"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "regional-dish",
      "lighter-choice",
      "seafood"
    ],
    "avoidIfTags": [
      "shellfish-allergy",
      "gluten-free",
      "no-alcohol"
    ],
    "orderVerdict": {
      "en": "Great for seafood pasta without heavy cream; avoid if shellfish or wine-based sauces are a concern.",
      "zh": "想吃不厚重的海鲜意面时很合适；贝类过敏或避免酒类酱汁时不推荐。",
      "nl": "Sterk voor zeevruchtenpasta zonder zware room; vermijd dit bij schelpdierallergie of wijnsaus."
    },
    "confidenceTag": "audited-italian-batch-003",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "burrata",
    "metadataCode": "101020",
    "cuisineId": "italian",
    "names": {
      "en": "Burrata",
      "zh": "布拉塔奶酪",
      "nl": "Burrata",
      "local": "Burrata"
    },
    "category": "starter",
    "cookingMethods": [
      "assembled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "Fresh mozzarella-style cheese with a creamy center, often served with tomato, greens, olive oil, or bread.",
      "zh": "外层类似新鲜马苏里拉、中心奶香浓稠的奶酪，常配番茄、叶菜、橄榄油或面包。",
      "nl": "Verse mozzarella-achtige kaas met een romige kern, vaak met tomaat, groen, olijfolie of brood."
    },
    "cookingProfile": {
      "en": "Usually served cool and assembled, so the main experience is milky creaminess against fresh sides.",
      "zh": "通常冷食或微凉上桌，重点是奶香流心和清爽配菜的对比。",
      "nl": "Meestal koel en samengesteld geserveerd, met romigheid tegenover frisse garnituren."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A familiar Italian starter for diners who want a fresh cheese plate rather than a cooked main.",
        "zh": "常见意式前菜，适合想点新鲜奶酪而不是热主菜的场景。",
        "nl": "Een herkenbaar Italiaans voorgerecht voor wie verse kaas wil in plaats van een warm hoofdgerecht."
      }
    },
    "composition": [
      [
        "mozzarella",
        45,
        "outer-cheese"
      ],
      [
        "cream",
        20,
        "center"
      ],
      [
        "tomato",
        20,
        "fresh-side"
      ],
      [
        "bread",
        10,
        "side"
      ],
      [
        "olive-oil",
        5,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "mozzarella",
      "olive-oil"
    ],
    "basicTaste": [
      "milky",
      "mild",
      "fresh",
      "creamy"
    ],
    "textureProfile": [
      "soft cheese skin",
      "creamy center",
      "juicy tomato"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-gluten"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "first-timer-friendly",
      "creamy",
      "lighter-choice"
    ],
    "avoidIfTags": [
      "dairy-free",
      "gluten-free-if-served-with-bread",
      "wants-hot-food"
    ],
    "orderVerdict": {
      "en": "Order it as a fresh, creamy starter; skip if you want something hot, crisp, or dairy-free.",
      "zh": "适合作为清爽但奶香浓的前菜；想吃热菜、脆口菜或忌乳制品时不适合。",
      "nl": "Bestel dit als fris en romig voorgerecht; minder geschikt als je warm, krokant of zuivelvrij wilt."
    },
    "confidenceTag": "audited-italian-batch-003",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "arancini",
    "metadataCode": "101021",
    "cuisineId": "italian",
    "names": {
      "en": "Arancini",
      "zh": "西西里炸饭团",
      "nl": "Arancini",
      "local": "Arancini"
    },
    "category": "fried-snack",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "Sicilian fried rice balls with a crisp coating and a filling such as ragù, cheese, peas, or tomato.",
      "zh": "西西里炸饭团，外层酥脆，里面常见米饭、肉酱、奶酪、豌豆或番茄馅。",
      "nl": "Siciliaanse gefrituurde rijstballen met krokante buitenkant en vulling zoals ragu, kaas, erwten of tomaat."
    },
    "cookingProfile": {
      "en": "Served hot as a filling snack, with a crisp shell and a soft rice center.",
      "zh": "热食上桌，外壳酥脆，中心是柔软米饭和馅料，饱腹感较强。",
      "nl": "Warm geserveerd als vullende snack, met krokante korst en zachte rijstvulling."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "regional-dish",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A Sicilian street-food classic that often appears as a snack or starter.",
        "zh": "西西里街头小吃代表，菜单上常作为小食或前菜出现。",
        "nl": "Een Siciliaanse streetfoodklassieker die vaak als snack of voorgerecht opduikt."
      }
    },
    "composition": [
      [
        "arborio-rice",
        45,
        "base"
      ],
      [
        "meat-ragu",
        20,
        "filling"
      ],
      [
        "cheese",
        15,
        "filling"
      ],
      [
        "wheat-flour",
        10,
        "coating"
      ],
      [
        "egg",
        5,
        "binder"
      ],
      [
        "tomato-sauce",
        5,
        "filling"
      ]
    ],
    "distinctiveFlavorSources": [
      "meat-ragu",
      "cheese",
      "tomato-sauce"
    ],
    "basicTaste": [
      "savory",
      "fried",
      "mild"
    ],
    "textureProfile": [
      "crisp crumb",
      "soft rice",
      "melty filling"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "contains-egg",
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "street-food",
      "first-timer-friendly",
      "small-bites"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free",
      "egg-allergy",
      "no-pork",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Good for sharing or a snack, but check the filling if meat, pork, or dairy matters.",
      "zh": "适合分享或当小食；如果在意肉类、猪肉或乳制品，需要先确认内馅。",
      "nl": "Goed om te delen of als snack, maar vraag naar de vulling bij vlees, varken of zuivel."
    },
    "confidenceTag": "audited-italian-batch-003",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "high"
  }),
  starterDish({
    "id": "calamari-fritti",
    "metadataCode": "101022",
    "cuisineId": "italian",
    "names": {
      "en": "Calamari Fritti",
      "zh": "炸鱿鱼圈",
      "nl": "Gefrituurde calamari",
      "local": "Calamari fritti"
    },
    "category": "seafood",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "Fried squid pieces or rings, usually served with lemon and sometimes aioli or a simple dip.",
      "zh": "炸鱿鱼块或鱿鱼圈，通常配柠檬，有时配蒜味蘸酱或简单酱料。",
      "nl": "Gefrituurde inktvisringen of stukjes, meestal met citroen en soms aioli of een simpele dip."
    },
    "cookingProfile": {
      "en": "Served hot with a crisp coating and springy squid inside; best eaten right away.",
      "zh": "热食上桌，外层酥脆，里面是有弹性的鱿鱼，趁热吃口感最好。",
      "nl": "Warm geserveerd met krokante korst en veerkrachtige inktvis; het lekkerst direct aan tafel."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A familiar Italian seafood starter for diners who want something crisp and briny.",
        "zh": "常见意式海鲜前菜，适合想要酥脆口感和轻微海味的点单。",
        "nl": "Een herkenbaar Italiaans zeevruchtenvoorgerecht voor iets krokants en licht zilts."
      }
    },
    "composition": [
      [
        "squid",
        60,
        "seafood"
      ],
      [
        "wheat-flour",
        20,
        "coating"
      ],
      [
        "lemon",
        10,
        "finish"
      ],
      [
        "egg",
        5,
        "binder"
      ],
      [
        "olive-oil",
        5,
        "frying-medium"
      ]
    ],
    "distinctiveFlavorSources": [
      "squid",
      "lemon",
      "olive-oil"
    ],
    "basicTaste": [
      "savory",
      "briny",
      "fried",
      "citrusy"
    ],
    "textureProfile": [
      "crisp coating",
      "springy squid",
      "lemony finish"
    ],
    "riskFlags": [
      "contains-shellfish",
      "contains-gluten",
      "contains-egg"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "first-timer-friendly",
      "seafood",
      "small-bites"
    ],
    "avoidIfTags": [
      "shellfish-allergy",
      "gluten-free",
      "egg-allergy",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "A classic fried seafood starter; avoid if you dislike chewy seafood or need gluten-free food.",
      "zh": "经典炸海鲜前菜；不喜欢有嚼劲的海鲜或需要无麸质时不推荐。",
      "nl": "Een klassiek gefrituurd zeevruchtengerecht; vermijd dit bij taaie zeevruchten of glutenvrij eten."
    },
    "confidenceTag": "audited-italian-batch-003",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "carpaccio",
    "metadataCode": "101023",
    "cuisineId": "italian",
    "names": {
      "en": "Carpaccio",
      "zh": "生牛肉薄片",
      "nl": "Carpaccio",
      "local": "Carpaccio"
    },
    "category": "starter",
    "cookingMethods": [
      "raw",
      "assembled"
    ],
    "servingTemperature": "cold-or-cool",
    "rawnessLevel": "raw",
    "shortDescription": {
      "en": "Very thin raw beef slices, commonly served with olive oil, lemon, parmesan, capers, or greens.",
      "zh": "极薄的生牛肉片，常配橄榄油、柠檬、帕玛森、酸豆或叶菜。",
      "nl": "Zeer dunne rauwe rundvleesplakjes, vaak met olijfolie, citroen, Parmezaan, kappertjes of groen."
    },
    "cookingProfile": {
      "en": "Served cool and uncooked, so expect a delicate, silky texture rather than seared meat.",
      "zh": "冷食且不加热，口感细薄柔滑，不是煎烤肉的质地。",
      "nl": "Koel en rauw geserveerd, met een fijne, zijdezachte textuur in plaats van gebakken vlees."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "regional-dish"
      ],
      "description": {
        "en": "An Italian raw starter reference where comfort with uncooked beef is the key ordering question.",
        "zh": "意式生食前菜参考，点单关键是能否接受生牛肉。",
        "nl": "Een Italiaanse rauwe voorgerechtreferentie waarbij comfort met rauw rundvlees centraal staat."
      }
    },
    "composition": [
      [
        "beef",
        60,
        "raw-slices"
      ],
      [
        "parmesan",
        15,
        "finish"
      ],
      [
        "olive-oil",
        10,
        "finish"
      ],
      [
        "lemon",
        10,
        "acid"
      ],
      [
        "herbs",
        5,
        "fresh-garnish"
      ]
    ],
    "distinctiveFlavorSources": [
      "raw-beef",
      "parmesan",
      "olive-oil",
      "lemon"
    ],
    "basicTaste": [
      "savory",
      "fresh",
      "light",
      "umami"
    ],
    "textureProfile": [
      "silky raw slices",
      "thin bite",
      "fresh garnish"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "classic-dish",
      "lighter-choice"
    ],
    "avoidIfTags": [
      "raw-food-avoidant",
      "pregnant-or-immunocompromised",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Order only if raw beef is comfortable for you; it is light, delicate, and not a hot meat dish.",
      "zh": "只有能接受生牛肉时才建议点；它清爽细薄，不是热的肉类主菜。",
      "nl": "Bestel dit alleen als rauw rundvlees prettig voelt; het is licht en fijn, geen warm vleesgerecht."
    },
    "confidenceTag": "audited-italian-batch-003",
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "polenta",
    "metadataCode": "101024",
    "cuisineId": "italian",
    "names": {
      "en": "Polenta",
      "zh": "玉米粥",
      "nl": "Polenta",
      "local": "Polenta"
    },
    "category": "vegetable-main",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Northern Italian cornmeal dish served soft, creamy, grilled, or topped with cheese, mushrooms, or sauce.",
      "zh": "意大利北部常见的玉米粉菜，可做成柔软浓稠状，也可搭配奶酪、蘑菇或酱汁。",
      "nl": "Noord-Italiaans maismeelgerecht, zacht en romig of gegrild, vaak met kaas, paddenstoelen of saus."
    },
    "cookingProfile": {
      "en": "Usually served warm and spoonable, with toppings deciding whether it feels light or rich.",
      "zh": "通常温热上桌，质地柔软可舀，轻重程度主要取决于配料和酱汁。",
      "nl": "Meestal warm en lepelbaar, waarbij toppings bepalen of het licht of rijk aanvoelt."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A northern Italian comfort staple useful as a non-pasta reference.",
        "zh": "意大利北部常见主食型菜品，可作为非意面类点单参考。",
        "nl": "Een Noord-Italiaanse comfortbasis, handig als referentie buiten pasta om."
      }
    },
    "composition": [
      [
        "corn",
        60,
        "base"
      ],
      [
        "cheese",
        15,
        "richness"
      ],
      [
        "mushrooms",
        10,
        "topping"
      ],
      [
        "butter",
        10,
        "finish"
      ],
      [
        "tomato-sauce",
        5,
        "sauce"
      ]
    ],
    "distinctiveFlavorSources": [
      "corn",
      "cheese",
      "butter"
    ],
    "basicTaste": [
      "mild",
      "savory",
      "creamy",
      "corn-sweet"
    ],
    "textureProfile": [
      "soft porridge",
      "smooth body",
      "optional topping bite"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "regional-dish",
      "first-timer-friendly",
      "comfort-food"
    ],
    "avoidIfTags": [
      "dairy-free",
      "wants-crisp-texture"
    ],
    "orderVerdict": {
      "en": "A comforting alternative to pasta; ask about toppings if you need it vegetarian, dairy-free, or lighter.",
      "zh": "可作为意面之外的温和饱腹选择；如需素食、无乳或清淡，要确认配料。",
      "nl": "Een troostrijk alternatief voor pasta; vraag naar toppings bij vegetarisch, zuivelvrij of lichter eten."
    },
    "confidenceTag": "audited-italian-batch-003",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "high"
  }),
  starterDish({
    "id": "saltimbocca",
    "metadataCode": "101025",
    "cuisineId": "italian",
    "names": {
      "en": "Saltimbocca",
      "zh": "鼠尾草火腿小牛肉",
      "nl": "Saltimbocca",
      "local": "Saltimbocca"
    },
    "category": "meat",
    "cookingMethods": [
      "fried"
    ],
    "shortDescription": {
      "en": "Thin veal cutlets with prosciutto and sage, usually pan-cooked with butter and wine.",
      "zh": "薄小牛肉片配意式风干火腿和鼠尾草，常用黄油和葡萄酒煎成咸香酱汁。",
      "nl": "Dunne kalfslapjes met prosciutto en salie, meestal in pan gebakken met boter en wijn."
    },
    "cookingProfile": {
      "en": "Served hot as a compact meat main, tender and salty with a buttery pan sauce.",
      "zh": "热食上桌，是紧凑型肉类主菜，口感嫩，咸香，并带黄油锅底酱汁。",
      "nl": "Warm geserveerd als compacte vleesmaaltijd, mals en zout met boterige pansaus."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "regional-dish"
      ],
      "description": {
        "en": "A Roman-style meat classic where veal, prosciutto, and sage define the order.",
        "zh": "罗马风格肉类经典，关键特征是小牛肉、风干火腿和鼠尾草。",
        "nl": "Een Romeinse vleesklassieker waarin kalfsvlees, prosciutto en salie de bestelling bepalen."
      }
    },
    "composition": [
      [
        "veal-cutlet",
        50,
        "main"
      ],
      [
        "prosciutto",
        20,
        "cured-pork-layer"
      ],
      [
        "wine",
        15,
        "pan-sauce"
      ],
      [
        "butter",
        10,
        "sauce-richness"
      ],
      [
        "sage",
        5,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "prosciutto",
      "sage",
      "wine",
      "butter"
    ],
    "basicTaste": [
      "savory",
      "salty",
      "buttery",
      "herbal"
    ],
    "textureProfile": [
      "tender veal",
      "silky cured ham",
      "glossy pan sauce"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-dairy",
      "contains-alcohol"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "classic-dish",
      "regional-dish",
      "meat"
    ],
    "avoidIfTags": [
      "no-pork",
      "dairy-free",
      "no-alcohol",
      "wants-large-portion"
    ],
    "orderVerdict": {
      "en": "Choose it for a salty, aromatic meat main; avoid if pork, butter, or wine-based sauces are off limits.",
      "zh": "想吃咸香、有鼠尾草香气的肉类主菜时适合；忌猪肉、黄油或酒类酱汁时不推荐。",
      "nl": "Kies dit voor een zoute, aromatische vleesmaaltijd; vermijd bij varken, boter of wijnsaus."
    },
    "confidenceTag": "audited-italian-batch-003",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "cannoli",
    "metadataCode": "101026",
    "cuisineId": "italian",
    "names": {
      "en": "Cannoli",
      "zh": "西西里奶油卷",
      "nl": "Cannoli",
      "local": "Cannoli"
    },
    "category": "dessert",
    "cookingMethods": [
      "deep-fried",
      "chilled"
    ],
    "shortDescription": {
      "en": "Sicilian crisp pastry tubes filled with sweet ricotta cream, often finished with chocolate, pistachio, or citrus.",
      "zh": "西西里甜点，酥脆管状外壳内填甜乳清奶酪馅，常点缀巧克力、开心果或柑橘香气。",
      "nl": "Siciliaanse krokante deegrolletjes met zoete ricottavulling, vaak met chocolade, pistache of citrus."
    },
    "cookingProfile": {
      "en": "Served cool or room-temperature, with a crisp shell against a dense creamy filling.",
      "zh": "通常冷食或常温上桌，重点是酥脆外壳和浓稠奶酪馅的对比。",
      "nl": "Koel of op kamertemperatuur geserveerd, met krokant deeg tegenover dichte romige vulling."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "regional-dish"
      ],
      "description": {
        "en": "A Sicilian dessert classic useful for recognizing pastry-plus-ricotta orders.",
        "zh": "西西里经典甜点，适合识别酥皮加乳清奶酪馅的甜品。",
        "nl": "Een Siciliaanse dessertklassieker voor het herkennen van deeg met ricottavulling."
      }
    },
    "composition": [
      [
        "ricotta",
        45,
        "filling"
      ],
      [
        "wheat-flour",
        25,
        "pastry-shell"
      ],
      [
        "sugar",
        15,
        "sweetener"
      ],
      [
        "cream",
        10,
        "filling-richness"
      ],
      [
        "cocoa",
        5,
        "finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "ricotta",
      "cocoa",
      "sugar"
    ],
    "basicTaste": [
      "sweet",
      "creamy",
      "mildly-tangy"
    ],
    "textureProfile": [
      "crisp pastry",
      "dense cream",
      "sweet filling"
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
      "classic-dish",
      "dessert",
      "creamy"
    ],
    "avoidIfTags": [
      "dairy-free",
      "gluten-free",
      "egg-allergy",
      "wants-light-dessert"
    ],
    "orderVerdict": {
      "en": "Good when you want a richer dessert with crunch and cream; check nuts if the garnish matters.",
      "zh": "想吃酥脆加奶酪馅的浓郁甜点时很合适；若在意坚果，需要确认表面装饰。",
      "nl": "Goed voor een rijk dessert met crunch en room; vraag naar noten als garnering belangrijk is."
    },
    "confidenceTag": "audited-italian-batch-003",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "gelato",
    "metadataCode": "101027",
    "cuisineId": "italian",
    "names": {
      "en": "Gelato",
      "zh": "意式冰淇淋",
      "nl": "Gelato",
      "local": "Gelato"
    },
    "category": "dessert",
    "cookingMethods": [
      "chilled"
    ],
    "shortDescription": {
      "en": "Italian frozen dessert, usually dense, smooth, and flavor-driven, with less airy texture than many ice creams.",
      "zh": "意式冷冻甜点，通常质地细密顺滑，风味突出，比许多普通冰淇淋空气感更少。",
      "nl": "Italiaans bevroren dessert, meestal dicht, glad en smaakgericht, minder luchtig dan veel ijs."
    },
    "cookingProfile": {
      "en": "Served cold in scoops; the main decision is flavor and dairy comfort rather than portion size.",
      "zh": "以冰冷球状上桌，点单重点通常是口味选择和能否接受乳制品。",
      "nl": "Koud in bolletjes geserveerd; de keuze draait vooral om smaak en zuivelcomfort."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "internationally-known",
        "first-timer-friendly"
      ],
      "description": {
        "en": "An internationally recognized Italian dessert reference for dense frozen sweets.",
        "zh": "国际识别度很高的意式甜点，可作为细密冷冻甜品参考。",
        "nl": "Een internationaal herkenbare Italiaanse dessertreferentie voor dicht bevroren zoet."
      }
    },
    "composition": [
      [
        "cream",
        45,
        "base"
      ],
      [
        "sugar",
        25,
        "sweetener"
      ],
      [
        "egg",
        10,
        "custard-base"
      ],
      [
        "fruit-sauce-or-caramel",
        10,
        "flavor"
      ],
      [
        "vanilla",
        10,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "vanilla",
      "fruit-sauce-or-caramel"
    ],
    "basicTaste": [
      "sweet",
      "creamy",
      "cold",
      "smooth"
    ],
    "textureProfile": [
      "dense scoop",
      "smooth melt",
      "cold finish"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-egg"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "safe-choice",
      "dessert",
      "first-timer-friendly"
    ],
    "avoidIfTags": [
      "dairy-free",
      "egg-allergy",
      "very-cold-dessert"
    ],
    "orderVerdict": {
      "en": "A safe dessert when you want something cold and smooth; check the specific flavor for nuts, chocolate, or alcohol.",
      "zh": "想吃冰冷顺滑甜点时很稳妥；具体口味可能含坚果、巧克力或酒，需要按口味确认。",
      "nl": "Een veilige keuze voor iets kouds en glads; controleer per smaak op noten, chocolade of alcohol."
    },
    "confidenceTag": "audited-italian-batch-003",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "high"
  }),
  starterDish({
    "id": "duck-confit",
    "metadataCode": "103006",
    "cuisineId": "french",
    "names": {
      "en": "Duck Confit",
      "zh": "油封鸭腿",
      "nl": "Confit de canard",
      "local": "Confit de canard"
    },
    "category": "meat",
    "cookingMethods": [
      "braised",
      "fried"
    ],
    "shortDescription": {
      "en": "Duck leg preserved and slow-cooked in its own fat, usually served tender inside with crisped skin.",
      "zh": "鸭腿以鸭脂低温慢熟保存，常见口感是内部软嫩、外皮煎到酥香。",
      "nl": "Eendenbout langzaam gegaard in eigen vet, meestal mals vanbinnen met krokant gemaakte huid."
    },
    "cookingProfile": {
      "en": "Served hot as a rich meat main, often with potatoes or greens rather than a heavy sauce.",
      "zh": "热食上桌，是偏浓郁的肉类主菜，常配土豆或绿叶菜，不一定有很多酱汁。",
      "nl": "Warm geserveerd als rijk vleesgerecht, vaak met aardappel of groen en niet per se veel saus."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "regional-dish"
      ],
      "description": {
        "en": "A southwest French classic where duck fat, tenderness, and crisp skin define the order.",
        "zh": "法国西南部经典菜，识别关键是鸭脂、软嫩鸭肉和酥皮。",
        "nl": "Een Zuidwest-Franse klassieker waarbij eendenvet, mals vlees en krokante huid centraal staan."
      }
    },
    "composition": [
      [
        "duck",
        60,
        "main"
      ],
      [
        "potato",
        20,
        "side"
      ],
      [
        "duck-fat",
        10,
        "cooking-fat"
      ],
      [
        "butter",
        5,
        "finish"
      ],
      [
        "herbs",
        5,
        "aroma"
      ]
    ],
    "distinctiveFlavorSources": [
      "duck-fat",
      "duck",
      "herbs"
    ],
    "basicTaste": [
      "savory",
      "rich",
      "salty"
    ],
    "textureProfile": [
      "crisp skin",
      "tender duck",
      "soft potato"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "classic-dish",
      "regional-dish",
      "meat"
    ],
    "avoidIfTags": [
      "wants-light-food",
      "no-duck"
    ],
    "orderVerdict": {
      "en": "Choose it for rich, tender duck with crisp skin; skip if you want a light plate.",
      "zh": "想吃浓郁软嫩、表皮酥香的鸭腿时很合适；想吃清淡菜时不推荐。",
      "nl": "Kies dit voor rijke, malse eend met krokante huid; minder geschikt als je licht wilt eten."
    },
    "confidenceTag": "audited-french-batch-005",
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "steak-frites",
    "metadataCode": "103007",
    "cuisineId": "french",
    "names": {
      "en": "Steak Frites",
      "zh": "牛排薯条",
      "nl": "Steak frites",
      "local": "Steak frites"
    },
    "category": "meat",
    "cookingMethods": [
      "grilled",
      "fried"
    ],
    "shortDescription": {
      "en": "French bistro steak served with fries, often with butter, pepper, or a separate sauce.",
      "zh": "法式小酒馆常见的牛排配薯条，常有黄油、黑胡椒或另配酱汁。",
      "nl": "Franse bistrosteak met friet, vaak met boter, peper of een losse saus."
    },
    "cookingProfile": {
      "en": "Served hot and straightforward: seared steak plus crisp fries, with doneness and sauce deciding the experience.",
      "zh": "热食上桌，结构直接：煎烤牛排加酥脆薯条，熟度和酱汁决定体验。",
      "nl": "Warm en direct geserveerd: gebakken steak met krokante friet; gaarheid en saus bepalen de ervaring."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "first-timer-friendly",
        "safe-choice"
      ],
      "description": {
        "en": "A common French bistro order and a useful safe-choice reference.",
        "zh": "常见法式小酒馆点单，也是较稳妥的肉类参考。",
        "nl": "Een veelvoorkomende Franse bistrobestelling en nuttige veilige referentie."
      }
    },
    "composition": [
      [
        "beef",
        55,
        "steak"
      ],
      [
        "fries",
        30,
        "side"
      ],
      [
        "butter",
        5,
        "finish"
      ],
      [
        "black-pepper",
        5,
        "seasoning",
        "seasoning"
      ],
      [
        "herbs",
        5,
        "garnish"
      ]
    ],
    "distinctiveFlavorSources": [
      "beef",
      "butter",
      "black-pepper"
    ],
    "basicTaste": [
      "savory",
      "salty",
      "meaty"
    ],
    "textureProfile": [
      "seared steak",
      "crisp fries",
      "juicy center"
    ],
    "riskFlags": [
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "safe-choice",
      "first-timer-friendly",
      "meat"
    ],
    "avoidIfTags": [
      "vegetarian",
      "dairy-free-if-buttered"
    ],
    "orderVerdict": {
      "en": "A straightforward choice if you want steak and fries; ask for doneness and sauce.",
      "zh": "想吃牛排薯条时很稳妥；建议确认牛排熟度和配酱。",
      "nl": "Een eenvoudige keuze voor steak met friet; vraag naar gaarheid en saus."
    },
    "confidenceTag": "audited-french-batch-005",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "escargots",
    "metadataCode": "103008",
    "cuisineId": "french",
    "names": {
      "en": "Escargots",
      "zh": "法式焗蜗牛",
      "nl": "Escargots",
      "local": "Escargots"
    },
    "category": "starter",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Snails served hot in garlic-herb butter, often in shells or a special escargot dish.",
      "zh": "蜗牛配蒜香香草黄油热食，常装在壳中或专用烤盘里。",
      "nl": "Slakken warm geserveerd in knoflook-kruidenboter, vaak in schelpen of een escargotschaal."
    },
    "cookingProfile": {
      "en": "Served hot and buttery; the texture is tender-chewy while the garlic butter carries most of the flavor.",
      "zh": "热食且黄油感明显，蜗牛口感柔韧，风味主要来自蒜香黄油。",
      "nl": "Warm en boterig; de textuur is mals-taai en de knoflookboter draagt de smaak."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "acquired-taste"
      ],
      "description": {
        "en": "A classic French starter where comfort with snails is the main decision point.",
        "zh": "经典法式前菜，点单关键是能否接受蜗牛口感。",
        "nl": "Een klassiek Frans voorgerecht waarbij comfort met slakken de hoofdvraag is."
      }
    },
    "composition": [
      [
        "snails",
        55,
        "main"
      ],
      [
        "butter",
        20,
        "sauce"
      ],
      [
        "garlic",
        10,
        "aroma"
      ],
      [
        "herbs",
        10,
        "aroma"
      ],
      [
        "bread",
        5,
        "optional-side"
      ]
    ],
    "distinctiveFlavorSources": [
      "garlic",
      "butter",
      "herbs"
    ],
    "basicTaste": [
      "savory",
      "garlicky",
      "buttery"
    ],
    "textureProfile": [
      "tender-chewy snails",
      "melted herb butter"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-shellfish",
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "classic-dish",
      "regional-dish"
    ],
    "avoidIfTags": [
      "snail-averse",
      "dairy-free",
      "shellfish-allergy"
    ],
    "orderVerdict": {
      "en": "Try it if garlic butter sounds good and you are comfortable with a chewy snail texture.",
      "zh": "喜欢蒜香黄油且能接受蜗牛柔韧口感时可以尝试。",
      "nl": "Probeer dit als knoflookboter goed klinkt en een taaie slakkentextuur geen probleem is."
    },
    "confidenceTag": "audited-french-batch-005",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 3,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "low"
  }),
  starterDish({
    "id": "french-onion-soup",
    "metadataCode": "103009",
    "cuisineId": "french",
    "names": {
      "en": "French Onion Soup",
      "zh": "法式洋葱汤",
      "nl": "Franse uiensoep",
      "local": "Soupe à l’oignon"
    },
    "category": "soup",
    "cookingMethods": [
      "simmered",
      "baked"
    ],
    "shortDescription": {
      "en": "Deep onion broth topped with bread and melted cheese, usually served very hot.",
      "zh": "浓郁洋葱汤，上面常盖面包和融化奶酪，通常滚热上桌。",
      "nl": "Diepe uiensoep met brood en gesmolten kaas erbovenop, meestal zeer warm geserveerd."
    },
    "cookingProfile": {
      "en": "The broth is savory and sweet from onions, with a heavy cheese-and-bread top.",
      "zh": "汤底有洋葱带来的咸甜深度，上层面包和奶酪让整体更厚重。",
      "nl": "De bouillon is hartig en zoet van ui, met een zware kaas-broodlaag."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A French bistro soup classic and an easy menu-recognition item.",
        "zh": "法式小酒馆经典汤品，菜单识别度很高。",
        "nl": "Een Franse bistrosoepklassieker en makkelijk herkenbaar op menu's."
      }
    },
    "composition": [
      [
        "onion",
        45,
        "base"
      ],
      [
        "broth",
        25,
        "soup-base"
      ],
      [
        "bread",
        15,
        "topping"
      ],
      [
        "cheese",
        10,
        "melted-top"
      ],
      [
        "butter",
        5,
        "richness"
      ]
    ],
    "distinctiveFlavorSources": [
      "onion",
      "cheese",
      "butter"
    ],
    "basicTaste": [
      "savory",
      "sweet-onion",
      "rich"
    ],
    "textureProfile": [
      "hot broth",
      "soft onions",
      "melted cheese top"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "classic-dish",
      "first-timer-friendly",
      "soup"
    ],
    "avoidIfTags": [
      "dairy-free",
      "gluten-free",
      "wants-light-soup"
    ],
    "orderVerdict": {
      "en": "Comforting and recognizable, but heavier than a clear soup because of bread and cheese.",
      "zh": "暖胃且好识别，但因为面包和奶酪，比清汤更厚重。",
      "nl": "Troostrijk en herkenbaar, maar zwaarder dan heldere soep door brood en kaas."
    },
    "confidenceTag": "audited-french-batch-005",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "salade-nicoise",
    "metadataCode": "103010",
    "cuisineId": "french",
    "names": {
      "en": "Salade Niçoise",
      "zh": "尼斯沙拉",
      "nl": "Salade niçoise",
      "local": "Salade niçoise"
    },
    "category": "salad",
    "cookingMethods": [
      "assembled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "A composed salad with tuna, egg, green beans, olives, tomato, and vinaigrette-style dressing.",
      "zh": "组合式沙拉，常有金枪鱼、鸡蛋、四季豆、橄榄、番茄和油醋汁。",
      "nl": "Samengestelde salade met tonijn, ei, sperziebonen, olijven, tomaat en vinaigrette."
    },
    "cookingProfile": {
      "en": "Served cool as a light meal salad, with protein from tuna and egg rather than cheese or meat.",
      "zh": "冷食上桌，可作轻主餐，蛋白质主要来自金枪鱼和鸡蛋。",
      "nl": "Koel geserveerd als lichte maaltijdsalade, met eiwit uit tonijn en ei."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "regional-dish",
        "lighter-choice"
      ],
      "description": {
        "en": "A southern French salad classic for diners who want a lighter but complete plate.",
        "zh": "南法经典沙拉，适合想要清爽但有完整分量的点单。",
        "nl": "Een Zuid-Franse saladeklassieker voor een lichtere maar volledige maaltijd."
      }
    },
    "composition": [
      [
        "mixed-vegetables",
        30,
        "base"
      ],
      [
        "tuna",
        20,
        "protein"
      ],
      [
        "egg",
        15,
        "protein"
      ],
      [
        "green-beans",
        15,
        "vegetable"
      ],
      [
        "olives",
        10,
        "briny-garnish"
      ],
      [
        "tomato",
        10,
        "freshness"
      ]
    ],
    "distinctiveFlavorSources": [
      "tuna",
      "olives",
      "vinegar"
    ],
    "basicTaste": [
      "fresh",
      "savory",
      "briny",
      "tangy"
    ],
    "textureProfile": [
      "cool vegetables",
      "firm tuna",
      "soft egg"
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
      "regional-dish",
      "salad"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "egg-allergy",
      "wants-hot-food"
    ],
    "orderVerdict": {
      "en": "Good as a lighter meal if tuna and egg are welcome; not a plain side salad.",
      "zh": "如果能接受金枪鱼和鸡蛋，它是较清爽的一餐；不是普通配菜沙拉。",
      "nl": "Goed als lichtere maaltijd als tonijn en ei welkom zijn; geen gewone bijsalade."
    },
    "confidenceTag": "audited-french-batch-005",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "high"
  }),
  starterDish({
    "id": "croque-monsieur",
    "metadataCode": "103011",
    "cuisineId": "french",
    "names": {
      "en": "Croque Monsieur",
      "zh": "法式火腿奶酪三明治",
      "nl": "Croque monsieur",
      "local": "Croque monsieur"
    },
    "category": "bread",
    "cookingMethods": [
      "toasted",
      "baked"
    ],
    "shortDescription": {
      "en": "Hot French ham-and-cheese sandwich, often topped or filled with béchamel for extra richness.",
      "zh": "热的法式火腿奶酪三明治，常加白酱让口感更浓郁。",
      "nl": "Warme Franse ham-kaastosti, vaak met bechamel voor extra rijkdom."
    },
    "cookingProfile": {
      "en": "Served hot and browned, with melted cheese, salty ham, and a crisp bread edge.",
      "zh": "热食上桌，表面烤到上色，有融化奶酪、咸火腿和酥脆面包边。",
      "nl": "Warm en gebruind geserveerd, met gesmolten kaas, zoute ham en krokante broodrand."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A French café classic useful for recognizing rich hot sandwich orders.",
        "zh": "法式咖啡馆经典，适合识别浓郁热三明治类点单。",
        "nl": "Een Franse cafeklassieker voor rijke warme sandwichbestellingen."
      }
    },
    "composition": [
      [
        "bread",
        35,
        "base"
      ],
      [
        "ham",
        25,
        "filling"
      ],
      [
        "cheese",
        20,
        "melted-cheese"
      ],
      [
        "bechamel-sauce",
        15,
        "sauce"
      ],
      [
        "butter",
        5,
        "browning"
      ]
    ],
    "distinctiveFlavorSources": [
      "ham",
      "cheese",
      "bechamel-sauce"
    ],
    "basicTaste": [
      "salty",
      "creamy",
      "savory"
    ],
    "textureProfile": [
      "crisp bread",
      "melted cheese",
      "soft sauce"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-pork",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "first-timer-friendly",
      "classic-dish",
      "comfort-food"
    ],
    "avoidIfTags": [
      "no-pork",
      "dairy-free",
      "gluten-free",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "A rich comfort choice for ham and melted cheese; avoid if pork, dairy, or gluten is off limits.",
      "zh": "想吃火腿和融化奶酪的热三明治时很合适；忌猪肉、乳制品或麸质时不推荐。",
      "nl": "Een rijke comfortkeuze voor ham en gesmolten kaas; vermijd bij varken, zuivel of gluten."
    },
    "confidenceTag": "audited-french-batch-005",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "cassoulet",
    "metadataCode": "103012",
    "cuisineId": "french",
    "names": {
      "en": "Cassoulet",
      "zh": "法式豆焖肉",
      "nl": "Cassoulet",
      "local": "Cassoulet"
    },
    "category": "meat",
    "cookingMethods": [
      "simmered",
      "braised"
    ],
    "shortDescription": {
      "en": "Hearty southwest French bean stew with duck, sausage, pork, or other meats depending on region.",
      "zh": "法国西南部浓厚豆类炖菜，常见鸭肉、香肠、猪肉或其他肉类组合。",
      "nl": "Stevige Zuidwest-Franse bonenstoof met eend, worst, varken of ander vlees per regio."
    },
    "cookingProfile": {
      "en": "Served hot and very filling, with soft beans and deeply savory meat pieces.",
      "zh": "热食上桌，分量很足，豆子软糯，肉类咸香浓厚。",
      "nl": "Warm en zeer vullend, met zachte bonen en hartige stukken vlees."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "classic-dish"
      ],
      "description": {
        "en": "A southwest French regional classic for diners looking for a rustic, filling stew.",
        "zh": "法国西南部区域经典，适合想吃乡村风、饱腹炖菜的人。",
        "nl": "Een Zuidwest-Franse regioklassieker voor een rustieke, vullende stoof."
      }
    },
    "composition": [
      [
        "white-beans",
        35,
        "base"
      ],
      [
        "duck",
        25,
        "meat"
      ],
      [
        "sausage-global",
        20,
        "meat"
      ],
      [
        "pork",
        10,
        "meat"
      ],
      [
        "broth",
        10,
        "stew-base"
      ]
    ],
    "distinctiveFlavorSources": [
      "duck",
      "sausage-global",
      "white-beans"
    ],
    "basicTaste": [
      "savory",
      "rich",
      "hearty"
    ],
    "textureProfile": [
      "soft beans",
      "tender meat",
      "thick stew"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "regional-dish",
      "comfort-food",
      "meat"
    ],
    "avoidIfTags": [
      "no-pork",
      "wants-light-food",
      "vegetarian"
    ],
    "orderVerdict": {
      "en": "Order when you want a rustic, very filling stew; not a light bistro plate.",
      "zh": "想吃乡村风、非常饱腹的炖菜时适合；不是清淡小酒馆菜。",
      "nl": "Bestel dit voor een rustieke, zeer vullende stoof; geen lichte bistroschotel."
    },
    "confidenceTag": "audited-french-batch-005",
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "high"
  }),
  starterDish({
    "id": "steak-tartare",
    "metadataCode": "103013",
    "cuisineId": "french",
    "names": {
      "en": "Steak Tartare",
      "zh": "生牛肉塔塔",
      "nl": "Steak tartare",
      "local": "Steak tartare"
    },
    "category": "meat",
    "cookingMethods": [
      "raw",
      "assembled"
    ],
    "servingTemperature": "cold-or-cool",
    "rawnessLevel": "raw",
    "shortDescription": {
      "en": "Raw minced or finely chopped beef seasoned with capers, onion, mustard-style sharpness, and often egg yolk.",
      "zh": "生牛肉末或细切牛肉，常以酸豆、洋葱、芥末风味调味，并常配生蛋黄。",
      "nl": "Rauw gehakt of fijn gesneden rundvlees met kappertjes, ui, mosterdachtige scherpte en vaak eidooier."
    },
    "cookingProfile": {
      "en": "Served cold and uncooked, so the key decision is comfort with raw beef and egg yolk.",
      "zh": "冷食且不加热，点单关键是能否接受生牛肉和生蛋黄。",
      "nl": "Koud en rauw geserveerd; de hoofdvraag is comfort met rauw rund en eidooier."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "acquired-taste"
      ],
      "description": {
        "en": "A French bistro raw-beef classic that needs clear ordering caution.",
        "zh": "法式小酒馆生牛肉经典，需要明确提示生食风险。",
        "nl": "Een Franse bistroklassieker van rauw rund waarbij duidelijke waarschuwing nodig is."
      }
    },
    "composition": [
      [
        "beef",
        65,
        "raw-beef"
      ],
      [
        "egg",
        10,
        "yolk"
      ],
      [
        "capers",
        10,
        "briny-seasoning"
      ],
      [
        "onion",
        10,
        "aroma"
      ],
      [
        "fries",
        5,
        "side"
      ]
    ],
    "distinctiveFlavorSources": [
      "raw-beef",
      "capers",
      "egg-yolk"
    ],
    "basicTaste": [
      "savory",
      "briny",
      "raw-meat"
    ],
    "textureProfile": [
      "soft raw beef",
      "rich yolk",
      "crisp side garnish"
    ],
    "riskFlags": [
      "contains-egg"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "classic-dish",
      "acquired-taste"
    ],
    "avoidIfTags": [
      "raw-food-avoidant",
      "pregnant-or-immunocompromised",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "Only order if raw beef and egg yolk are comfortable for you; this is not a cooked steak.",
      "zh": "只有能接受生牛肉和生蛋黄时才建议点；它不是熟牛排。",
      "nl": "Bestel dit alleen als rauw rund en eidooier prettig voelen; dit is geen gebakken steak."
    },
    "confidenceTag": "audited-french-batch-005",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 3,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "bouillabaisse",
    "metadataCode": "103014",
    "cuisineId": "french",
    "names": {
      "en": "Bouillabaisse",
      "zh": "马赛鱼汤",
      "nl": "Bouillabaisse",
      "local": "Bouillabaisse"
    },
    "category": "soup",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Provençal seafood soup or stew with fish, shellfish, tomato, broth, and saffron-style aromatics.",
      "zh": "普罗旺斯海鲜汤或炖菜，常有鱼、贝类、番茄、高汤和藏红花香气。",
      "nl": "Provençaalse zeevruchtensoep of stoof met vis, schelpdieren, tomaat, bouillon en saffraanaroma."
    },
    "cookingProfile": {
      "en": "Served hot and brothy, with seafood pieces in an aromatic orange-red broth.",
      "zh": "热食上桌，汤感明显，海鲜块浸在香料感橙红汤底里。",
      "nl": "Warm en bouillonachtig, met zeevruchten in een aromatische oranjerode bouillon."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "classic-dish"
      ],
      "description": {
        "en": "A Marseille and Provence seafood classic for diners who want a briny soup.",
        "zh": "马赛和普罗旺斯海鲜经典，适合想要鲜咸汤类菜的人。",
        "nl": "Een zeevruchtenklassieker uit Marseille en Provence voor wie een ziltige soep wil."
      }
    },
    "composition": [
      [
        "broth",
        35,
        "soup-base"
      ],
      [
        "fish-fillet",
        25,
        "seafood"
      ],
      [
        "mussels",
        15,
        "shellfish"
      ],
      [
        "shrimp",
        10,
        "shellfish"
      ],
      [
        "tomato",
        10,
        "body"
      ],
      [
        "saffron",
        5,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "saffron",
      "fish-fillet",
      "mussels"
    ],
    "basicTaste": [
      "briny",
      "savory",
      "aromatic"
    ],
    "textureProfile": [
      "hot broth",
      "tender seafood",
      "soft tomato base"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-shellfish"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "regional-dish",
      "seafood",
      "soup"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "shellfish-allergy",
      "wants-non-seafood"
    ],
    "orderVerdict": {
      "en": "Great if you want a seafood soup; avoid if fish or shellfish is a concern.",
      "zh": "想吃海鲜汤时很合适；鱼类或贝类过敏时应避开。",
      "nl": "Sterk als je zeevruchtensoep wilt; vermijd bij vis- of schelpdierallergie."
    },
    "confidenceTag": "audited-french-batch-005",
    "spiceLevel": 1,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "sole-meuniere",
    "metadataCode": "103015",
    "cuisineId": "french",
    "names": {
      "en": "Sole Meunière",
      "zh": "黄油煎鳎鱼",
      "nl": "Sole meunière",
      "local": "Sole meunière"
    },
    "category": "seafood",
    "cookingMethods": [
      "fried"
    ],
    "shortDescription": {
      "en": "Delicate flatfish lightly floured and pan-cooked with brown butter, lemon, and parsley.",
      "zh": "细嫩扁鱼薄薄裹粉后煎制，配焦化黄油、柠檬和欧芹。",
      "nl": "Fijne platvis licht bebloemd en in de pan gebakken met bruine boter, citroen en peterselie."
    },
    "cookingProfile": {
      "en": "Served hot as a refined fish main with buttery lemon sauce rather than heavy spice.",
      "zh": "热食上桌，是细致的鱼类主菜，重点是黄油柠檬香，不靠重香料。",
      "nl": "Warm geserveerd als verfijnd visgerecht met boter-citroensaus, niet zwaar gekruid."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A French fish classic that signals a simple butter-lemon preparation.",
        "zh": "法式鱼类经典，识别点是简洁的黄油柠檬做法。",
        "nl": "Een Franse visklassieker met eenvoudige boter-citroenbereiding."
      }
    },
    "composition": [
      [
        "fish-fillet",
        60,
        "main"
      ],
      [
        "butter",
        15,
        "sauce"
      ],
      [
        "lemon",
        10,
        "finish"
      ],
      [
        "wheat-flour",
        10,
        "light-coating"
      ],
      [
        "parsley",
        5,
        "herb",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "butter",
      "lemon",
      "parsley"
    ],
    "basicTaste": [
      "savory",
      "buttery",
      "lemony"
    ],
    "textureProfile": [
      "tender fish",
      "light browned surface",
      "buttery sauce"
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
      "classic-dish",
      "seafood",
      "first-timer-friendly"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "dairy-free",
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Good if you want gentle fish with butter and lemon; ask about bones if that matters.",
      "zh": "想吃温和鱼肉配黄油柠檬时很适合；在意鱼刺可先询问。",
      "nl": "Goed voor zachte vis met boter en citroen; vraag naar graten als dat belangrijk is."
    },
    "confidenceTag": "audited-french-batch-005",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "tarte-tatin",
    "metadataCode": "103016",
    "cuisineId": "french",
    "names": {
      "en": "Tarte Tatin",
      "zh": "反烤苹果塔",
      "nl": "Tarte tatin",
      "local": "Tarte tatin"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Upside-down caramelized apple tart, usually buttery, glossy, and served warm or room-temperature.",
      "zh": "反烤焦糖苹果塔，通常黄油香明显，苹果表面油亮，可温热或常温上桌。",
      "nl": "Omgekeerde gekaramelliseerde appeltaart, meestal boterig, glanzend en warm of op kamertemperatuur."
    },
    "cookingProfile": {
      "en": "The fruit is caramelized under pastry, giving soft apples and a sticky buttery top.",
      "zh": "苹果在酥皮下焦糖化，形成柔软苹果和黏润黄油焦糖表层。",
      "nl": "Het fruit karamelliseert onder deeg, met zachte appel en kleverige boterkaramel bovenop."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "dessert"
      ],
      "description": {
        "en": "A French dessert classic for caramelized fruit and pastry.",
        "zh": "法式经典甜点，重点是焦糖水果和酥皮。",
        "nl": "Een Franse dessertklassieker rond gekaramelliseerd fruit en deeg."
      }
    },
    "composition": [
      [
        "apple",
        45,
        "fruit"
      ],
      [
        "pastry-crust",
        25,
        "base"
      ],
      [
        "sugar",
        15,
        "caramel"
      ],
      [
        "butter",
        10,
        "caramel-richness"
      ],
      [
        "vanilla",
        5,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "apple",
      "caramelized-sugar",
      "butter"
    ],
    "basicTaste": [
      "sweet",
      "caramel",
      "buttery",
      "fruity"
    ],
    "textureProfile": [
      "soft caramelized apple",
      "crisp pastry edge",
      "sticky glaze"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-gluten"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "classic-dish",
      "dessert"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free",
      "wants-light-dessert"
    ],
    "orderVerdict": {
      "en": "A strong dessert choice if you like caramelized apple and buttery pastry.",
      "zh": "喜欢焦糖苹果和黄油酥皮时很适合。",
      "nl": "Een sterke dessertkeuze als je gekaramelliseerde appel en boterig deeg wilt."
    },
    "confidenceTag": "audited-french-batch-005",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "crepes",
    "metadataCode": "103017",
    "cuisineId": "french",
    "names": {
      "en": "Crêpes",
      "zh": "法式薄饼",
      "nl": "Crêpes",
      "local": "Crêpes"
    },
    "category": "dessert",
    "cookingMethods": [
      "fried"
    ],
    "shortDescription": {
      "en": "Very thin French pancakes served sweet or savory, often folded with sugar, fruit, chocolate, or cream.",
      "zh": "非常薄的法式薄饼，可甜可咸，常折叠后配糖、水果、巧克力或奶油。",
      "nl": "Zeer dunne Franse pannenkoeken, zoet of hartig, vaak gevouwen met suiker, fruit, chocolade of room."
    },
    "cookingProfile": {
      "en": "Served warm or room-temperature, soft and flexible rather than fluffy like thick pancakes.",
      "zh": "温热或常温上桌，口感柔软可折，不像厚松饼那样蓬松。",
      "nl": "Warm of op kamertemperatuur, zacht en vouwbaar in plaats van luchtig zoals dikke pannenkoeken."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A widely recognized French crêperie item with many fillings.",
        "zh": "识别度很高的法式薄饼店菜品，馅料变化很多。",
        "nl": "Een breed herkenbaar Frans crêperiegerecht met veel vullingen."
      }
    },
    "composition": [
      [
        "crepe-batter",
        55,
        "base"
      ],
      [
        "fruit-sauce-or-caramel",
        15,
        "filling"
      ],
      [
        "sugar",
        15,
        "sweetener"
      ],
      [
        "butter",
        10,
        "pan-richness"
      ],
      [
        "cream",
        5,
        "optional-finish"
      ]
    ],
    "distinctiveFlavorSources": [
      "butter",
      "sugar",
      "fruit-sauce-or-caramel"
    ],
    "basicTaste": [
      "sweet",
      "buttery",
      "mild"
    ],
    "textureProfile": [
      "thin soft pancake",
      "folded layers",
      "saucy filling"
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
      "first-timer-friendly",
      "dessert",
      "classic-dish"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-allergy",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "A safe dessert or snack if you like thin pancakes; filling choice controls sweetness and richness.",
      "zh": "喜欢薄饼时是稳妥甜点或小食；甜度和浓郁度主要看馅料。",
      "nl": "Een veilige dessert- of snackkeuze als je dunne pannenkoeken wilt; vulling bepaalt zoetheid en rijkdom."
    },
    "confidenceTag": "audited-french-batch-005",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "high"
  }),
  starterDish({
    "id": "currywurst",
    "metadataCode": "106006",
    "cuisineId": "german",
    "names": {
      "en": "Currywurst",
      "zh": "咖喱香肠",
      "nl": "Currywurst",
      "local": "Currywurst"
    },
    "category": "street-food",
    "mealRole": "starter-or-main",
    "portionType": "individual",
    "goodForSharing": false,
    "cookingMethods": [
      "fried"
    ],
    "shortDescription": {
      "en": "Sliced German sausage covered with curry-spiced ketchup, often served with fries.",
      "zh": "切片德式香肠淋咖喱番茄酱，常和薯条一起上桌。",
      "nl": "Gesneden Duitse worst met curryketchup, vaak geserveerd met friet."
    },
    "cookingProfile": {
      "en": "The sausage is browned then sauced, so the bite is snappy, salty, sweet-tangy, and casual.",
      "zh": "香肠先煎烤上色再淋酱，口感弹脆，咸香中带甜酸咖喱味。",
      "nl": "De worst wordt gebakken en met saus bedekt: stevig, zoutig, zoetzuur en informeel."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "classic-dish",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A Berlin-associated German street-food classic, common on casual menus and snack stands.",
        "zh": "带有柏林街头小吃代表性的德国经典，常见于休闲菜单和小吃摊。",
        "nl": "Een met Berlijn verbonden Duitse streetfoodklassieker, vaak op snack- en informele menu's."
      }
    },
    "composition": [
      [
        "sausage",
        45,
        "protein"
      ],
      [
        "curry-ketchup",
        25,
        "sauce",
        "seasoning"
      ],
      [
        "fries",
        20,
        "side"
      ],
      [
        "paprika",
        5,
        "seasoning",
        "seasoning"
      ],
      [
        "mustard",
        5,
        "optional condiment",
        "seasoning",
        "high",
        true
      ]
    ],
    "distinctiveFlavorSources": [
      "curry-ketchup",
      "paprika",
      "sausage"
    ],
    "basicTaste": [
      "savory",
      "sweet",
      "tangy",
      "mildly spicy"
    ],
    "textureProfile": [
      "snappy sausage",
      "glossy sauce",
      "crisp fries"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "street-food",
      "first-timer-friendly",
      "safe-choice"
    ],
    "avoidIfTags": [
      "no-pork",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Order it for a casual, salty-sweet sausage plate; skip it if you want something light or no pork.",
      "zh": "想吃轻松直接的咸甜香肠很适合；想要清淡或不吃猪肉时避开。",
      "nl": "Kies dit voor een simpele zout-zoete worstmaaltijd; vermijd bij lichte trek of geen varkensvlees."
    },
    "confidenceTag": "audited-german-batch-007",
    "spiceLevel": 1,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "rouladen",
    "metadataCode": "106007",
    "cuisineId": "german",
    "names": {
      "en": "Rouladen",
      "zh": "德式牛肉卷",
      "nl": "Rouladen",
      "local": "Rouladen"
    },
    "category": "meat",
    "cookingMethods": [
      "braised"
    ],
    "shortDescription": {
      "en": "Thin beef rolls filled with mustard, onion, bacon, and pickle, braised in dark gravy.",
      "zh": "薄牛肉片卷入芥末、洋葱、培根和酸黄瓜，再用深色肉汁炖软。",
      "nl": "Dunne rundvleesrollen gevuld met mosterd, ui, spek en augurk, gestoofd in donkere jus."
    },
    "cookingProfile": {
      "en": "It is slow-braised, so expect tender beef, a savory filling, and gravy rather than crisp edges.",
      "zh": "慢炖后牛肉软嫩，内馅咸香，重点是肉汁而不是酥脆口感。",
      "nl": "Lang gestoofd: mals rundvlees, hartige vulling en jus in plaats van krokante randjes."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "regional-dish"
      ],
      "description": {
        "en": "A classic German Sunday-style meat dish; `Rinderroulade` is treated as the same dish family here.",
        "zh": "德国经典周末肉类主菜；这里把 Rinderroulade 视为同一菜品族。",
        "nl": "Een klassieke Duitse zondagsachtige vleesschotel; Rinderroulade valt hier onder dezelfde familie."
      }
    },
    "composition": [
      [
        "beef",
        50,
        "roll wrapper"
      ],
      [
        "bacon",
        10,
        "filling"
      ],
      [
        "onion",
        10,
        "filling"
      ],
      [
        "mustard",
        10,
        "filling",
        "seasoning"
      ],
      [
        "red-cabbage",
        10,
        "side"
      ],
      [
        "potato",
        10,
        "side"
      ]
    ],
    "distinctiveFlavorSources": [
      "mustard",
      "bacon",
      "braised gravy"
    ],
    "basicTaste": [
      "savory",
      "rich",
      "tangy"
    ],
    "textureProfile": [
      "tender rolled beef",
      "soft filling",
      "dark gravy"
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
      "no-pork",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Good for a hearty beef-and-gravy main; not a quick or light choice.",
      "zh": "适合想吃扎实牛肉和肉汁主菜时点；不属于轻快清淡型。",
      "nl": "Goed voor een stevige rundvlees-en-jus hoofdschotel; niet snel of licht."
    },
    "confidenceTag": "audited-german-batch-007",
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "schweinshaxe",
    "metadataCode": "106008",
    "cuisineId": "german",
    "names": {
      "en": "Schweinshaxe",
      "zh": "德国烤猪肘",
      "nl": "Schweinshaxe",
      "local": "Schweinshaxe"
    },
    "category": "pork",
    "goodForSharing": true,
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Roasted pork knuckle with crisp crackling, usually served with sauerkraut or potato dumplings.",
      "zh": "烤猪肘外皮酥脆，常配德国酸菜或土豆丸子。",
      "nl": "Geroosterde varkensschenkel met krokante korst, vaak met zuurkool of aardappelknödel."
    },
    "cookingProfile": {
      "en": "The skin is roasted hard while the meat stays rich and fatty, making it one of the heaviest German mains.",
      "zh": "外皮烤得脆硬，里面肉质浓厚偏肥，是很有分量的德国主菜。",
      "nl": "De huid wordt hard krokant geroosterd terwijl het vlees rijk en vet blijft."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "regional-dish"
      ],
      "description": {
        "en": "A Bavarian-style pork knuckle classic, distinct from softer boiled Eisbein.",
        "zh": "偏巴伐利亚风格的经典猪肘，和更软的水煮/腌制 Eisbein 区分。",
        "nl": "Een Beiers aandoende varkensschenkelklassieker, anders dan zachter gekookte Eisbein."
      }
    },
    "composition": [
      [
        "pork",
        65,
        "main"
      ],
      [
        "sauerkraut",
        15,
        "side"
      ],
      [
        "potato",
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
        "beer",
        5,
        "braising or roasting note",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "crisp pork skin",
      "mustard",
      "sauerkraut"
    ],
    "basicTaste": [
      "savory",
      "salty",
      "rich"
    ],
    "textureProfile": [
      "crackling skin",
      "fatty tender pork",
      "tangy side"
    ],
    "riskFlags": [
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "sharing",
      "classic-dish"
    ],
    "avoidIfTags": [
      "no-pork",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Choose it when you want a heavy pork feast; it is often large enough to share.",
      "zh": "想吃厚重猪肉大菜时很合适；很多餐厅的分量足够分享。",
      "nl": "Kies dit voor een stevige varkensmaaltijd; vaak groot genoeg om te delen."
    },
    "confidenceTag": "audited-german-batch-007",
    "spiceLevel": 0,
    "weightLevel": 5,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "kaesespaetzle",
    "metadataCode": "106009",
    "cuisineId": "german",
    "names": {
      "en": "Käsespätzle",
      "zh": "奶酪面疙瘩",
      "nl": "Käsespätzle",
      "local": "Käsespätzle"
    },
    "category": "noodle",
    "cookingMethods": [
      "boiled",
      "sauce-tossed"
    ],
    "shortDescription": {
      "en": "Soft egg noodles mixed with melted cheese and topped with fried onions.",
      "zh": "软弹鸡蛋面疙瘩拌入融化奶酪，再撒炸洋葱。",
      "nl": "Zachte eiernoedels met gesmolten kaas en gebakken uitjes."
    },
    "cookingProfile": {
      "en": "It eats like German mac and cheese: soft, stretchy, creamy, and filling.",
      "zh": "吃起来像德式奶酪通心粉，柔软、拉丝、奶香重且饱腹。",
      "nl": "Het eet als Duitse mac and cheese: zacht, draderig, romig en vullend."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "comfort-food",
        "vegetarian"
      ],
      "description": {
        "en": "A southern German and Alpine comfort dish built around Spätzle and cheese.",
        "zh": "德国南部和阿尔卑斯地区常见的舒适主食，以面疙瘩和奶酪为核心。",
        "nl": "Een Zuid-Duits en Alpenachtig comfortgerecht met Spätzle en kaas."
      }
    },
    "composition": [
      [
        "egg-noodles",
        55,
        "base"
      ],
      [
        "cheese",
        25,
        "sauce"
      ],
      [
        "fried-onions",
        10,
        "topping"
      ],
      [
        "butter",
        5,
        "richness"
      ],
      [
        "nutmeg",
        5,
        "warm aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "cheese",
      "fried-onions",
      "nutmeg"
    ],
    "basicTaste": [
      "savory",
      "creamy",
      "rich"
    ],
    "textureProfile": [
      "soft noodles",
      "melted cheese",
      "crisp onions"
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
      "comfort-food",
      "vegetarian"
    ],
    "avoidIfTags": [
      "dairy-free",
      "gluten-free",
      "egg-allergy",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "A strong pick for cheese lovers; too rich if you want a fresh or light plate.",
      "zh": "喜欢奶酪主食时很稳；想吃清爽轻食时不适合。",
      "nl": "Sterk voor kaasliefhebbers; te rijk als je iets fris of licht zoekt."
    },
    "confidenceTag": "audited-german-batch-007",
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "kartoffelsalat",
    "metadataCode": "106010",
    "cuisineId": "german",
    "names": {
      "en": "Kartoffelsalat",
      "zh": "德式土豆沙拉",
      "nl": "Kartoffelsalat",
      "local": "Kartoffelsalat"
    },
    "category": "salad",
    "mealRole": "side",
    "portionType": "side",
    "goodForSharing": true,
    "cookingMethods": [
      "assembled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "German potato salad, usually vinegar-broth based in the south or creamier in some regions.",
      "zh": "德式土豆沙拉，南部常见醋和高汤风格，有些地区会更 creamy。",
      "nl": "Duitse aardappelsalade, vaak azijn-bouillonachtig in het zuiden of romiger per regio."
    },
    "cookingProfile": {
      "en": "It is a cool or room-temperature side, with soft potato slices and a tangy dressing.",
      "zh": "通常冷食或常温上桌，土豆片柔软，调味带酸香。",
      "nl": "Een koud of lauw bijgerecht met zachte aardappelschijfjes en frisse dressing."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "classic-dish",
        "side"
      ],
      "description": {
        "en": "A very common German side, especially with sausage, schnitzel, and picnic-style plates.",
        "zh": "非常常见的德国配菜，常搭香肠、炸肉排或冷盘。",
        "nl": "Een veelvoorkomend Duits bijgerecht bij worst, schnitzel en koude schotels."
      }
    },
    "composition": [
      [
        "potato",
        70,
        "base"
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
      ],
      [
        "mustard",
        5,
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
      "vinegar",
      "mustard",
      "parsley"
    ],
    "basicTaste": [
      "tangy",
      "savory",
      "mild"
    ],
    "textureProfile": [
      "soft potato slices",
      "light dressing",
      "cool finish"
    ],
    "riskFlags": [],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "side",
      "first-timer-friendly"
    ],
    "avoidIfTags": [
      "avoids-vinegar"
    ],
    "orderVerdict": {
      "en": "Useful as a lighter side next to meat; ask if it contains bacon or mayonnaise.",
      "zh": "配肉类时能减轻厚重感；不吃培根或蛋黄酱时建议确认。",
      "nl": "Handig als lichter bijgerecht naast vlees; vraag of er spek of mayonaise in zit."
    },
    "confidenceTag": "audited-german-batch-007",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "high"
  }),
  starterDish({
    "id": "maultaschen",
    "metadataCode": "106011",
    "cuisineId": "german",
    "names": {
      "en": "Maultaschen",
      "zh": "德式大馄饨",
      "nl": "Maultaschen",
      "local": "Maultaschen"
    },
    "category": "dumpling",
    "cookingMethods": [
      "boiled"
    ],
    "shortDescription": {
      "en": "Large Swabian pasta pockets filled with meat, spinach, bread, and herbs.",
      "zh": "施瓦本地区的大号面皮馅包，常包肉、菠菜、面包和香草。",
      "nl": "Grote Zwabische pastabuidels gevuld met vlees, spinazie, brood en kruiden."
    },
    "cookingProfile": {
      "en": "They are usually boiled in broth or sliced and fried, so the wrapper is soft and the filling is hearty.",
      "zh": "常见做法是汤中煮熟或切片煎香，面皮柔软，内馅扎实。",
      "nl": "Meestal gekookt in bouillon of in plakken gebakken, met zachte buitenkant en stevige vulling."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "comfort-food"
      ],
      "description": {
        "en": "A Swabian regional classic that appears on many southern German menus.",
        "zh": "施瓦本地区经典，在德国南部菜单上很常见。",
        "nl": "Een Zwabische klassieker die op veel Zuid-Duitse menu's staat."
      }
    },
    "composition": [
      [
        "dumpling-wrapper",
        40,
        "wrapper"
      ],
      [
        "minced-pork",
        25,
        "filling"
      ],
      [
        "spinach",
        15,
        "filling"
      ],
      [
        "bread",
        10,
        "binder"
      ],
      [
        "onion",
        5,
        "aroma"
      ],
      [
        "parsley",
        5,
        "herb",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "spinach",
      "minced-pork",
      "parsley"
    ],
    "basicTaste": [
      "savory",
      "herbal",
      "mild"
    ],
    "textureProfile": [
      "soft pasta wrapper",
      "dense filling",
      "brothy or pan-fried edges"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-pork",
      "contains-egg"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "regional-dish",
      "comfort-food"
    ],
    "avoidIfTags": [
      "no-pork",
      "gluten-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "A hearty dumpling-like main; check the filling if you need vegetarian or no-pork food.",
      "zh": "像大馄饨一样扎实；吃素或不吃猪肉时要确认馅料。",
      "nl": "Een stevige dumplingachtige keuze; check de vulling bij vegetarisch of geen varkensvlees."
    },
    "confidenceTag": "audited-german-batch-007",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "weisswurst",
    "metadataCode": "106012",
    "cuisineId": "german",
    "names": {
      "en": "Weisswurst",
      "zh": "巴伐利亚白香肠",
      "nl": "Weisswurst",
      "local": "Weißwurst"
    },
    "category": "sausage",
    "cookingMethods": [
      "boiled"
    ],
    "shortDescription": {
      "en": "Mild Bavarian white sausage, traditionally served warm with sweet mustard and a pretzel.",
      "zh": "温和的巴伐利亚白香肠，传统上配甜芥末和碱水结。",
      "nl": "Milde Beierse witte worst, traditioneel warm met zoete mosterd en een pretzel."
    },
    "cookingProfile": {
      "en": "It is gently heated rather than browned, so the texture is soft, pale, and delicate.",
      "zh": "它通常温热而不是煎到上色，口感柔软、颜色浅、味道温和。",
      "nl": "Zacht verwarmd in plaats van bruin gebakken: zacht, bleek en mild."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "classic-dish"
      ],
      "description": {
        "en": "A Bavarian breakfast and beer-hall classic, strongly tied to Munich food culture.",
        "zh": "巴伐利亚早餐和啤酒馆经典，和慕尼黑饮食文化关系很强。",
        "nl": "Een Beierse ontbijt- en bierhalklassieker, sterk verbonden met München."
      }
    },
    "composition": [
      [
        "sausage",
        60,
        "protein"
      ],
      [
        "pretzel-dough",
        20,
        "side"
      ],
      [
        "mustard",
        15,
        "sweet mustard condiment",
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
      "mild veal-pork sausage",
      "sweet mustard",
      "pretzel"
    ],
    "basicTaste": [
      "mild",
      "savory",
      "slightly sweet"
    ],
    "textureProfile": [
      "soft sausage",
      "smooth casing",
      "chewy pretzel"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "regional-dish",
      "first-timer-friendly"
    ],
    "avoidIfTags": [
      "no-pork",
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "A gentle sausage choice if you like mild flavors; not the browned, smoky bratwurst style.",
      "zh": "适合想吃温和香肠时点；它不是煎烤上色的烟熏型香肠。",
      "nl": "Een zachte worstkeuze voor milde smaken; niet de bruine, rokerige bratwurststijl."
    },
    "confidenceTag": "audited-german-batch-007",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "leberkaese",
    "metadataCode": "106013",
    "cuisineId": "german",
    "names": {
      "en": "Leberkäse",
      "zh": "德式肉糜烤片",
      "nl": "Leberkäse",
      "local": "Leberkäse"
    },
    "category": "pork",
    "cookingMethods": [
      "baked",
      "fried"
    ],
    "shortDescription": {
      "en": "A baked, loaf-like German meat slice, often served warm with mustard, bread, or a fried egg.",
      "zh": "类似肉糜烤成的德式厚肉片，常温热上桌，配芥末、面包或煎蛋。",
      "nl": "Een gebakken Duitse vleesplak uit een soort vleesbrood, vaak warm met mosterd, brood of ei."
    },
    "cookingProfile": {
      "en": "The slice is firm and salty, closer to a hot deli meat than a whole cut of pork.",
      "zh": "口感紧实偏咸，更像热的熟肉片，不是整块猪排。",
      "nl": "Stevig en zoutig, meer warme vleeswaar dan een heel stuk varkensvlees."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "regional-dish",
        "street-food"
      ],
      "description": {
        "en": "A common Bavarian and Austrian-style snack or casual plate; often seen in bakeries and beer halls.",
        "zh": "常见于巴伐利亚和奥地利风格的小吃或简餐，也常见于面包店和啤酒馆。",
        "nl": "Een Beiers/Oostenrijks aandoende snack of simpele maaltijd, vaak bij bakkers en bierhallen."
      }
    },
    "composition": [
      [
        "leberkaese",
        60,
        "main"
      ],
      [
        "egg",
        15,
        "topping",
        "ingredient",
        "medium",
        true
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
      ],
      [
        "bread",
        5,
        "side"
      ]
    ],
    "distinctiveFlavorSources": [
      "leberkaese",
      "mustard",
      "fried egg"
    ],
    "basicTaste": [
      "salty",
      "savory",
      "rich"
    ],
    "textureProfile": [
      "firm meat slice",
      "browned surface",
      "soft egg if served"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-egg",
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "street-food",
      "quick-meal"
    ],
    "avoidIfTags": [
      "no-pork",
      "avoids-processed-meat"
    ],
    "orderVerdict": {
      "en": "Good if you want a salty, filling meat snack; avoid if processed meat is not appealing.",
      "zh": "想吃咸香、顶饱的肉类小吃时适合；介意加工肉时不推荐。",
      "nl": "Goed voor een zoute, vullende vleessnack; minder geschikt als bewerkt vlees je niet ligt."
    },
    "confidenceTag": "audited-german-batch-007",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "flammkuchen",
    "metadataCode": "106014",
    "cuisineId": "german",
    "names": {
      "en": "Flammkuchen",
      "zh": "德式薄饼",
      "nl": "Flammkuchen",
      "local": "Flammkuchen"
    },
    "category": "flatbread",
    "goodForSharing": true,
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Very thin flatbread topped with cream, onion, and bacon or lardons.",
      "zh": "很薄的烤饼，上面铺奶油、洋葱和培根粒。",
      "nl": "Zeer dun platbrood met room, ui en spekjes."
    },
    "cookingProfile": {
      "en": "It is baked thin and crisp, so it feels lighter than pizza but still creamy and salty.",
      "zh": "薄烤后边缘酥脆，比披萨轻一些，但奶油和培根让味道咸香。",
      "nl": "Dun en krokant gebakken: lichter dan pizza, maar romig en zoutig."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "sharing"
      ],
      "description": {
        "en": "An Alsace and southwest German-style flatbread common as a shared starter or light meal.",
        "zh": "阿尔萨斯和德国西南部风格薄饼，常作为分享前菜或轻主食。",
        "nl": "Een Elzasser en Zuidwest-Duitse platbroodstijl, vaak gedeeld of als lichte maaltijd."
      }
    },
    "composition": [
      [
        "pizza-dough",
        45,
        "thin base"
      ],
      [
        "cream",
        25,
        "sauce"
      ],
      [
        "bacon",
        15,
        "topping"
      ],
      [
        "onion",
        10,
        "topping"
      ],
      [
        "black-pepper",
        5,
        "finish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "cream",
      "bacon",
      "onion"
    ],
    "basicTaste": [
      "savory",
      "creamy",
      "salty"
    ],
    "textureProfile": [
      "thin crisp base",
      "creamy topping",
      "soft onion"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "sharing",
      "first-timer-friendly"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free",
      "no-pork"
    ],
    "orderVerdict": {
      "en": "A good shared starter if you want something crisp, creamy, and salty.",
      "zh": "想分享一份薄脆、奶香、咸香的小食时很合适。",
      "nl": "Een goed gedeeld voorgerecht als je iets krokants, romigs en zoutigs wilt."
    },
    "confidenceTag": "audited-german-batch-007",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "koenigsberger-klopse",
    "metadataCode": "106015",
    "cuisineId": "german",
    "names": {
      "en": "Königsberger Klopse",
      "zh": "酸豆奶油肉丸",
      "nl": "Königsberger Klopse",
      "local": "Königsberger Klopse"
    },
    "category": "meat",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "German meatballs served in a pale creamy caper sauce, usually with potatoes.",
      "zh": "德式肉丸配浅色酸豆奶油酱，通常搭土豆。",
      "nl": "Duitse gehaktballen in lichte romige kappertjessaus, meestal met aardappelen."
    },
    "cookingProfile": {
      "en": "The meatballs are poached or simmered, so they are soft and mild with a tangy sauce.",
      "zh": "肉丸通常水煮或慢煮，口感柔软温和，酱汁带酸豆的酸香。",
      "nl": "De gehaktballen worden gepocheerd of zacht gekookt: zacht en mild met frisse saus."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "comfort-food"
      ],
      "description": {
        "en": "A classic German meatball dish known for its caper cream sauce.",
        "zh": "以酸豆奶油酱为特色的德国经典肉丸菜。",
        "nl": "Een klassieke Duitse gehaktballenschotel bekend om de kappertjesroomsaus."
      }
    },
    "composition": [
      [
        "ground-meat",
        45,
        "meatballs"
      ],
      [
        "bechamel-sauce",
        25,
        "cream sauce"
      ],
      [
        "potato",
        15,
        "side"
      ],
      [
        "capers",
        10,
        "tangy accent"
      ],
      [
        "egg",
        5,
        "binder"
      ]
    ],
    "distinctiveFlavorSources": [
      "capers",
      "cream sauce",
      "ground-meat"
    ],
    "basicTaste": [
      "savory",
      "creamy",
      "tangy"
    ],
    "textureProfile": [
      "soft meatballs",
      "smooth sauce",
      "tender potatoes"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-dairy",
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food",
      "classic-dish"
    ],
    "avoidIfTags": [
      "dairy-free",
      "egg-allergy",
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Choose it for soft meatballs and a tangy cream sauce, not for crisp or grilled textures.",
      "zh": "适合想吃软嫩肉丸和酸香奶油酱时点；不是煎烤酥脆型。",
      "nl": "Kies dit voor zachte gehaktballen en frisse roomsaus, niet voor krokante grilltextuur."
    },
    "confidenceTag": "audited-german-batch-007",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "apfelstrudel",
    "metadataCode": "106016",
    "cuisineId": "german",
    "names": {
      "en": "Apfelstrudel",
      "zh": "苹果卷",
      "nl": "Apfelstrudel",
      "local": "Apfelstrudel"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Thin pastry wrapped around warm apple filling, often served with vanilla sauce or cream.",
      "zh": "薄酥皮包裹温热苹果馅，常配香草酱或奶油。",
      "nl": "Dun deeg rond warme appelvulling, vaak met vanillesaus of room."
    },
    "cookingProfile": {
      "en": "The pastry is light and flaky while the apple filling is soft, sweet, and cinnamon-warm.",
      "zh": "外层酥皮轻薄，苹果馅柔软甜香，常带肉桂暖香。",
      "nl": "Het deeg is licht en bladerig, met zachte zoete appel en warme kaneeltonen."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "dessert"
      ],
      "description": {
        "en": "An Alpine dessert classic common across German-speaking menus.",
        "zh": "德语区菜单上常见的阿尔卑斯甜点经典。",
        "nl": "Een Alpenklassieker die vaak op Duitstalige dessertmenu's staat."
      }
    },
    "composition": [
      [
        "apple",
        45,
        "filling"
      ],
      [
        "pastry-crust",
        25,
        "wrapper"
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
      ],
      [
        "cream",
        5,
        "sauce or side"
      ]
    ],
    "distinctiveFlavorSources": [
      "apple",
      "cinnamon",
      "vanilla or cream sauce"
    ],
    "basicTaste": [
      "sweet",
      "fruity",
      "buttery"
    ],
    "textureProfile": [
      "flaky pastry",
      "soft apple filling",
      "smooth sauce"
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
      "first-timer-friendly"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "A safe dessert if you want warm fruit and pastry rather than chocolate.",
      "zh": "想吃温热水果和酥皮甜点时很稳，不是巧克力型甜点。",
      "nl": "Een veilige dessertkeuze voor warm fruit en deeg in plaats van chocolade."
    },
    "confidenceTag": "audited-german-batch-007",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "black-forest-cake",
    "metadataCode": "106017",
    "cuisineId": "german",
    "names": {
      "en": "Black Forest Cake",
      "zh": "黑森林蛋糕",
      "nl": "Schwarzwälder kersentaart",
      "local": "Schwarzwälder Kirschtorte"
    },
    "category": "dessert",
    "cookingMethods": [
      "layered",
      "chilled"
    ],
    "shortDescription": {
      "en": "Layered chocolate cake with whipped cream and cherries, sometimes flavored with cherry liqueur.",
      "zh": "巧克力蛋糕层夹打发奶油和樱桃，有些版本会带樱桃酒香。",
      "nl": "Laagjescake van chocolade, slagroom en kersen, soms met kersenlikeur."
    },
    "cookingProfile": {
      "en": "It is served cool and creamy, with soft cake layers and bright cherry sweetness.",
      "zh": "通常冷藏后上桌，奶油感明显，蛋糕层柔软，樱桃带清亮甜酸。",
      "nl": "Koel en romig geserveerd, met zachte cakelagen en frisse kersensmaak."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "dessert",
        "internationally-known"
      ],
      "description": {
        "en": "A highly recognizable German cake associated with the Black Forest region.",
        "zh": "和黑森林地区相关、国际辨识度很高的德国蛋糕。",
        "nl": "Een zeer herkenbare Duitse taart verbonden met het Zwarte Woud."
      }
    },
    "composition": [
      [
        "chocolate",
        30,
        "cake"
      ],
      [
        "cream",
        30,
        "filling"
      ],
      [
        "cherries",
        20,
        "fruit"
      ],
      [
        "wheat-flour",
        10,
        "cake base"
      ],
      [
        "sugar",
        5,
        "sweetness"
      ],
      [
        "cocoa",
        5,
        "bitter note",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "cherries",
      "cream",
      "cocoa"
    ],
    "basicTaste": [
      "sweet",
      "creamy",
      "fruity",
      "chocolatey"
    ],
    "textureProfile": [
      "soft cake layers",
      "whipped cream",
      "juicy cherries"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy",
      "contains-egg",
      "contains-alcohol"
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
      "gluten-free",
      "egg-allergy",
      "avoids-alcohol"
    ],
    "orderVerdict": {
      "en": "Choose it for cream, cherry, and chocolate; ask about liqueur if avoiding alcohol.",
      "zh": "想吃奶油、樱桃和巧克力组合时适合；避酒精时要确认是否含樱桃酒。",
      "nl": "Kies dit voor room, kers en chocolade; vraag naar likeur als je alcohol vermijdt."
    },
    "confidenceTag": "audited-german-batch-007",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "kroket",
    "metadataCode": "102006",
    "cuisineId": "dutch",
    "names": {
      "en": "Kroket",
      "zh": "荷兰炸肉卷",
      "nl": "Kroket",
      "local": "Kroket"
    },
    "category": "fried-snack",
    "mealRole": "starter-or-side",
    "portionType": "individual",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "A crisp fried Dutch croquette with hot ragout filling, usually eaten with mustard or in bread.",
      "zh": "荷兰炸肉卷，外壳酥脆，里面是热的浓稠肉酱，常配芥末或夹面包。",
      "nl": "Een krokante gefrituurde kroket met hete ragoutvulling, meestal met mosterd of op brood."
    },
    "cookingProfile": {
      "en": "It has a crunchy shell and very hot creamy center, so it feels heavier than a simple snack.",
      "zh": "外壳酥脆，内馅很烫且浓稠，比普通小吃更有分量。",
      "nl": "Krokante korst en zeer hete romige kern, dus zwaarder dan een simpele snack."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "street-food"
      ],
      "description": {
        "en": "A Dutch snack-bar staple and close relative of bitterballen.",
        "zh": "荷兰小吃店经典，和 bitterballen 属于同一肉酱炸物家族。",
        "nl": "Een Nederlandse snackbar-klassieker en verwant aan bitterballen."
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
      "beef-ragout",
      "mustard"
    ],
    "basicTaste": [
      "savory",
      "creamy",
      "salty"
    ],
    "textureProfile": [
      "crisp shell",
      "hot creamy filling"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "street-food",
      "first-timer-friendly"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-allergy",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "A safe Dutch snack choice; bite carefully because the filling can be very hot.",
      "zh": "很稳的荷兰小吃选择；内馅很烫，吃的时候小心。",
      "nl": "Een veilige Nederlandse snackkeuze; voorzichtig happen door de hete vulling."
    },
    "confidenceTag": "audited-dutch-batch-008",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "patat",
    "metadataCode": "102007",
    "cuisineId": "dutch",
    "names": {
      "en": "Patat",
      "zh": "荷兰薯条",
      "nl": "Patat",
      "local": "Patat"
    },
    "category": "fried-snack",
    "mealRole": "side",
    "portionType": "side",
    "goodForSharing": true,
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "Dutch fries, usually thick-cut and served with mayonnaise or snack-bar sauces.",
      "zh": "荷兰薯条，通常偏粗，常配蛋黄酱或小吃店酱料。",
      "nl": "Nederlandse friet, meestal dikker gesneden en geserveerd met mayo of snackbarsaus."
    },
    "cookingProfile": {
      "en": "Expect crisp edges, fluffy potato, and a sauce-heavy snack-bar feel.",
      "zh": "外缘酥脆、内部松软，整体是酱料感很强的小吃店风格。",
      "nl": "Krokante randjes, zachte aardappel en een snackbargevoel met saus."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "street-food",
        "side"
      ],
      "description": {
        "en": "A basic Dutch snack-bar side, often ordered with fried snacks.",
        "zh": "荷兰小吃店基础配菜，常和炸物一起点。",
        "nl": "Een basisbijgerecht uit de Nederlandse snackbar, vaak bij gefrituurde snacks."
      }
    },
    "composition": [
      [
        "fries",
        75,
        "base"
      ],
      [
        "mayonnaise",
        10,
        "sauce"
      ],
      [
        "mustard",
        5,
        "optional sauce",
        "seasoning",
        "high",
        true
      ],
      [
        "curry-ketchup",
        10,
        "optional sauce",
        "seasoning",
        "high",
        true
      ]
    ],
    "distinctiveFlavorSources": [
      "fries",
      "mayonnaise-style sauce"
    ],
    "basicTaste": [
      "salty",
      "savory",
      "mild"
    ],
    "textureProfile": [
      "crisp edges",
      "fluffy potato",
      "creamy dip"
    ],
    "riskFlags": [
      "contains-egg"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "side",
      "street-food",
      "sharing"
    ],
    "avoidIfTags": [
      "wants-light-food",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "Good as a side or snack; sauce choice changes the heaviness quickly.",
      "zh": "适合作配菜或小吃；酱料会很快增加厚重感。",
      "nl": "Goed als bijgerecht of snack; de saus maakt het snel zwaarder."
    },
    "confidenceTag": "audited-dutch-batch-008",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "kapsalon",
    "metadataCode": "102008",
    "cuisineId": "dutch",
    "names": {
      "en": "Kapsalon",
      "zh": "荷兰卡普萨龙薯条盒",
      "nl": "Kapsalon",
      "local": "Kapsalon"
    },
    "category": "street-food",
    "cookingMethods": [
      "fried",
      "baked"
    ],
    "shortDescription": {
      "en": "Loaded fries topped with shawarma meat, melted cheese, salad, garlic sauce, and sambal.",
      "zh": "薯条上铺沙威玛肉、融化奶酪、沙拉、蒜味酱和参巴辣酱。",
      "nl": "Friet met shoarmavlees, gesmolten kaas, salade, knoflooksaus en sambal."
    },
    "cookingProfile": {
      "en": "It is hot, layered, saucy, and very filling, with fresh salad only as a small contrast.",
      "zh": "热、层次多、酱料重、很顶饱，生菜只是小小平衡。",
      "nl": "Warm, gelaagd, sauzig en zeer vullend, met salade als kleine frisse tegenhanger."
    },
    "cuisineRole": {
      "level": "modern",
      "tags": [
        "street-food",
        "modern"
      ],
      "description": {
        "en": "A modern Dutch snack-bar icon associated with Rotterdam and late-night eating.",
        "zh": "现代荷兰小吃店代表，常和鹿特丹及夜宵联系在一起。",
        "nl": "Een moderne Nederlandse snackbar-icoon, verbonden met Rotterdam en late trek."
      }
    },
    "composition": [
      [
        "fries",
        35,
        "base"
      ],
      [
        "shawarma-meat",
        25,
        "protein"
      ],
      [
        "cheese",
        15,
        "melted topping"
      ],
      [
        "garlic-sauce",
        10,
        "sauce"
      ],
      [
        "mixed-vegetables",
        10,
        "salad"
      ],
      [
        "sambal",
        5,
        "heat",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "shawarma-meat",
      "garlic-sauce",
      "sambal"
    ],
    "basicTaste": [
      "savory",
      "creamy",
      "salty",
      "spicy"
    ],
    "textureProfile": [
      "soft loaded fries",
      "melted cheese",
      "fresh salad crunch"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-gluten",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "street-food",
      "late-night"
    ],
    "avoidIfTags": [
      "dairy-free",
      "wants-light-food",
      "avoids-spicy"
    ],
    "orderVerdict": {
      "en": "Order it for a heavy late-night comfort box; avoid if you want a neat or light meal.",
      "zh": "想吃厚重夜宵盒饭时很适合；想吃清爽或精致餐时避开。",
      "nl": "Kies dit voor zware late-night comfort; vermijd bij licht of netjes eten."
    },
    "confidenceTag": "audited-dutch-batch-008",
    "spiceLevel": 2,
    "weightLevel": 5,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "pannenkoeken",
    "metadataCode": "102009",
    "cuisineId": "dutch",
    "names": {
      "en": "Pannenkoeken",
      "zh": "荷兰大煎饼",
      "nl": "Pannenkoeken",
      "local": "Pannenkoeken"
    },
    "category": "pancake",
    "goodForSharing": true,
    "cookingMethods": [
      "fried"
    ],
    "shortDescription": {
      "en": "Large Dutch pancakes, thinner than American pancakes and often served sweet or savory.",
      "zh": "荷兰大煎饼，比美式松饼薄，可做甜口或咸口。",
      "nl": "Grote Nederlandse pannenkoeken, dunner dan American pancakes, zoet of hartig."
    },
    "cookingProfile": {
      "en": "They are pan-cooked wide and thin, so toppings define whether the dish feels like dessert or a meal.",
      "zh": "宽而薄地煎成，最终像甜点还是正餐主要看配料。",
      "nl": "Breed en dun gebakken; toppings bepalen of het dessert of maaltijd wordt."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "family-friendly"
      ],
      "description": {
        "en": "A Dutch pancake-house staple, common for casual meals with many toppings.",
        "zh": "荷兰煎饼屋常见主打，适合休闲餐和多种配料。",
        "nl": "Een klassieker van pannenkoekenhuizen, met veel toppings."
      }
    },
    "composition": [
      [
        "pancake-batter",
        70,
        "base"
      ],
      [
        "butter",
        10,
        "cooking richness"
      ],
      [
        "sugar",
        10,
        "sweet topping",
        "ingredient",
        "medium",
        true
      ],
      [
        "bacon",
        10,
        "savory topping",
        "ingredient",
        "medium",
        true
      ]
    ],
    "distinctiveFlavorSources": [
      "pancake-batter",
      "butter",
      "sweet or savory toppings"
    ],
    "basicTaste": [
      "mild",
      "buttery",
      "sweet-or-savory"
    ],
    "textureProfile": [
      "thin pancake",
      "soft center",
      "light browned surface"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy",
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "first-timer-friendly",
      "family-friendly"
    ],
    "avoidIfTags": [
      "gluten-free",
      "egg-allergy",
      "dairy-free",
      "no-pork"
    ],
    "orderVerdict": {
      "en": "A flexible safe choice; check toppings because sweet and bacon versions feel very different.",
      "zh": "很灵活稳妥；要看配料，甜口和培根咸口差异很大。",
      "nl": "Een flexibele veilige keuze; let op toppings, zoet en spek verschillen sterk."
    },
    "confidenceTag": "audited-dutch-batch-008",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "high"
  }),
  starterDish({
    "id": "uitsmijter",
    "metadataCode": "102010",
    "cuisineId": "dutch",
    "names": {
      "en": "Uitsmijter",
      "zh": "荷兰煎蛋开放三明治",
      "nl": "Uitsmijter",
      "local": "Uitsmijter"
    },
    "category": "lunch",
    "cookingMethods": [
      "fried",
      "assembled"
    ],
    "shortDescription": {
      "en": "Open-faced bread topped with fried eggs, usually with ham and/or cheese.",
      "zh": "开放式面包上放煎蛋，通常还会有火腿和/或奶酪。",
      "nl": "Open boterhammen met gebakken eieren, meestal met ham en/of kaas."
    },
    "cookingProfile": {
      "en": "It is simple café food: warm eggs over bread, filling but not saucy.",
      "zh": "这是简单咖啡馆午餐，热煎蛋盖在面包上，顶饱但不多汁。",
      "nl": "Eenvoudige cafélunch: warme eieren op brood, vullend maar niet sauzig."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "lunch",
        "cafe"
      ],
      "description": {
        "en": "A common Dutch lunch-café dish, especially on simple daytime menus.",
        "zh": "荷兰午餐咖啡馆常见菜，尤其常见于白天简餐菜单。",
        "nl": "Een veelvoorkomende Nederlandse lunchcafékeuze."
      }
    },
    "composition": [
      [
        "bread",
        35,
        "base"
      ],
      [
        "egg",
        35,
        "topping"
      ],
      [
        "ham",
        15,
        "protein"
      ],
      [
        "cheese",
        10,
        "optional topping",
        "ingredient",
        "medium",
        true
      ],
      [
        "butter",
        5,
        "cooking richness"
      ]
    ],
    "distinctiveFlavorSources": [
      "fried egg",
      "ham",
      "bread"
    ],
    "basicTaste": [
      "savory",
      "mild",
      "eggy"
    ],
    "textureProfile": [
      "runny or firm yolk",
      "soft bread",
      "salty ham"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-egg",
      "contains-dairy",
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "lunch",
      "first-timer-friendly"
    ],
    "avoidIfTags": [
      "egg-allergy",
      "gluten-free",
      "no-pork"
    ],
    "orderVerdict": {
      "en": "A straightforward lunch if eggs sound good; confirm ham/cheese if you have restrictions.",
      "zh": "想吃鸡蛋午餐时很直接；有饮食限制时确认是否有火腿和奶酪。",
      "nl": "Een duidelijke lunch als eieren goed klinken; check ham/kaas bij dieetwensen."
    },
    "confidenceTag": "audited-dutch-batch-008",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "appeltaart",
    "metadataCode": "102011",
    "cuisineId": "dutch",
    "names": {
      "en": "Appeltaart",
      "zh": "荷兰苹果派",
      "nl": "Appeltaart",
      "local": "Appeltaart"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Dutch apple pie with a thick crust, cinnamon apple filling, and often whipped cream.",
      "zh": "荷兰苹果派，厚派皮包肉桂苹果馅，常配打发奶油。",
      "nl": "Nederlandse appeltaart met dikke korst, kaneelappelvulling en vaak slagroom."
    },
    "cookingProfile": {
      "en": "It is more rustic and chunky than a thin tart, with warm spice and soft apples.",
      "zh": "比薄塔更厚实质朴，苹果块柔软，肉桂暖香明显。",
      "nl": "Steviger en rustieker dan een dunne taart, met warme specerij en zachte appel."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "dessert"
      ],
      "description": {
        "en": "A Dutch café dessert classic, often ordered with coffee.",
        "zh": "荷兰咖啡馆经典甜点，常和咖啡一起点。",
        "nl": "Een Nederlandse caféklassieker, vaak bij koffie."
      }
    },
    "composition": [
      [
        "apple",
        45,
        "filling"
      ],
      [
        "pastry-crust",
        30,
        "crust"
      ],
      [
        "sugar",
        10,
        "sweetness"
      ],
      [
        "raisins",
        5,
        "filling",
        "ingredient",
        "medium",
        true
      ],
      [
        "cinnamon",
        5,
        "warm spice",
        "seasoning"
      ],
      [
        "cream",
        5,
        "optional side",
        "ingredient",
        "medium",
        true
      ]
    ],
    "distinctiveFlavorSources": [
      "apple",
      "cinnamon",
      "buttery crust"
    ],
    "basicTaste": [
      "sweet",
      "fruity",
      "warm-spiced"
    ],
    "textureProfile": [
      "chunky apples",
      "crumbly crust",
      "soft cream"
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
      "first-timer-friendly"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "A safe café dessert if you want fruit and cinnamon rather than chocolate.",
      "zh": "想吃水果和肉桂风味而不是巧克力时，这个甜点很稳。",
      "nl": "Een veilige cafédessertkeuze voor fruit en kaneel in plaats van chocolade."
    },
    "confidenceTag": "audited-dutch-batch-008",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "kibbeling",
    "metadataCode": "102012",
    "cuisineId": "dutch",
    "names": {
      "en": "Kibbeling",
      "zh": "荷兰炸鱼块",
      "nl": "Kibbeling",
      "local": "Kibbeling"
    },
    "category": "seafood",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "Battered fried white fish chunks, usually served with garlic sauce, remoulade, or ravigotte.",
      "zh": "裹面糊炸的白鱼块，常配蒜味酱、酸黄瓜蛋黄酱或荷兰鱼酱。",
      "nl": "Gefrituurde stukjes witte vis in beslag, vaak met knoflooksaus, remoulade of ravigotte."
    },
    "cookingProfile": {
      "en": "Small pieces fry crisp outside while the fish stays flaky and moist inside.",
      "zh": "小鱼块外层酥脆，里面鱼肉细嫩多汁。",
      "nl": "Kleine stukjes worden krokant, met vlokkige sappige vis binnenin."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "seafood",
        "street-food"
      ],
      "description": {
        "en": "A Dutch fish-shop snack, usually eaten casually rather than as a plated main.",
        "zh": "荷兰鱼店常见小吃，通常是休闲小食而不是精致主菜。",
        "nl": "Een Nederlandse vishandelsnack, meestal informeel gegeten."
      }
    },
    "composition": [
      [
        "fish-fillet",
        60,
        "fish"
      ],
      [
        "tempura-batter",
        25,
        "batter"
      ],
      [
        "remoulade-sauce",
        10,
        "dip",
        "seasoning"
      ],
      [
        "lemon",
        5,
        "finish"
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
      "creamy"
    ],
    "textureProfile": [
      "crisp batter",
      "flaky fish",
      "creamy dip"
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
      "street-food"
    ],
    "avoidIfTags": [
      "avoids-fish",
      "gluten-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "A friendly fried fish snack; choose lekkerbekje instead if you want one larger fillet.",
      "zh": "很亲民的炸鱼小吃；想吃整块大鱼排则选 lekkerbekje。",
      "nl": "Een toegankelijke gebakken vissnack; kies lekkerbekje voor één grotere filet."
    },
    "confidenceTag": "audited-dutch-batch-008",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "frikandel",
    "metadataCode": "102013",
    "cuisineId": "dutch",
    "names": {
      "en": "Frikandel",
      "zh": "荷兰炸肉肠",
      "nl": "Frikandel",
      "local": "Frikandel"
    },
    "category": "fried-snack",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "A long deep-fried Dutch minced-meat snack, often served plain or as frikandel speciaal with sauces and onion.",
      "zh": "长条形荷兰炸肉肠，可原味，也常做成加酱和洋葱的 speciaal。",
      "nl": "Een lange gefrituurde gehaktsnack, naturel of als frikandel speciaal met sauzen en ui."
    },
    "cookingProfile": {
      "en": "It is soft and processed rather than snappy like bratwurst, with sauce doing much of the flavor work.",
      "zh": "口感柔软偏加工肉，不像德式香肠那样弹脆，风味很依赖酱料。",
      "nl": "Zacht en bewerkt, niet knappend als bratwurst; saus bepaalt veel smaak."
    },
    "cuisineRole": {
      "level": "street-food",
      "tags": [
        "street-food",
        "classic-dish"
      ],
      "description": {
        "en": "A Dutch snack-bar icon, especially in `speciaal` form.",
        "zh": "荷兰小吃店代表，尤其常见 speciaal 加酱版本。",
        "nl": "Een Nederlandse snackbaricoon, vooral als speciaal."
      }
    },
    "composition": [
      [
        "frikandel",
        65,
        "main"
      ],
      [
        "curry-ketchup",
        15,
        "sauce",
        "seasoning"
      ],
      [
        "mayonnaise",
        10,
        "sauce"
      ],
      [
        "onion",
        10,
        "topping"
      ]
    ],
    "distinctiveFlavorSources": [
      "frikandel",
      "curry-ketchup",
      "onion"
    ],
    "basicTaste": [
      "savory",
      "salty",
      "sweet-tangy"
    ],
    "textureProfile": [
      "soft sausage",
      "glossy sauce",
      "crisp onion"
    ],
    "riskFlags": [
      "contains-pork",
      "contains-egg"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "street-food",
      "quick-meal"
    ],
    "avoidIfTags": [
      "no-pork",
      "avoids-processed-meat"
    ],
    "orderVerdict": {
      "en": "A very Dutch snack-bar order; skip it if processed meat or sweet sauces do not appeal.",
      "zh": "很荷兰小吃店的点法；不喜欢加工肉或甜口酱时避开。",
      "nl": "Een echte snackbarbestelling; sla over bij bewerkt vlees of zoete sauzen."
    },
    "confidenceTag": "audited-dutch-batch-008",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "stroopwafel",
    "metadataCode": "102014",
    "cuisineId": "dutch",
    "names": {
      "en": "Stroopwafel",
      "zh": "荷兰焦糖糖浆华夫饼",
      "nl": "Stroopwafel",
      "local": "Stroopwafel"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Thin waffle cookies sandwiched around sticky caramel syrup.",
      "zh": "薄华夫饼夹黏稠焦糖糖浆，是荷兰经典甜点小吃。",
      "nl": "Dunne wafels met plakkerige karamelsiroop ertussen."
    },
    "cookingProfile": {
      "en": "It is chewy and sticky rather than fluffy, especially when warmed over coffee.",
      "zh": "口感偏韧和黏，不是蓬松型，放在咖啡上温热后更软。",
      "nl": "Taai en plakkerig, niet luchtig, zeker warm boven koffie."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "dessert"
      ],
      "description": {
        "en": "An internationally known Dutch sweet snack.",
        "zh": "国际辨识度很高的荷兰甜点小吃。",
        "nl": "Een internationaal bekende Nederlandse zoete snack."
      }
    },
    "composition": [
      [
        "stroopwafel",
        85,
        "base"
      ],
      [
        "sugar",
        10,
        "caramel sweetness"
      ],
      [
        "cinnamon",
        5,
        "warm spice",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "caramel syrup",
      "thin waffle",
      "cinnamon"
    ],
    "basicTaste": [
      "sweet",
      "caramel",
      "buttery"
    ],
    "textureProfile": [
      "thin waffle",
      "sticky syrup center",
      "chewy bite"
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
      "first-timer-friendly"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "A safe sweet snack with coffee; very sugary for a full dessert.",
      "zh": "配咖啡很稳的小甜点；作为完整甜点会偏甜。",
      "nl": "Een veilige zoete snack bij koffie; erg zoet als vol dessert."
    },
    "confidenceTag": "audited-dutch-batch-008",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "low"
  }),
  starterDish({
    "id": "sate",
    "metadataCode": "102015",
    "cuisineId": "dutch",
    "names": {
      "en": "Saté",
      "zh": "荷兰印尼沙嗲",
      "nl": "Saté",
      "local": "Saté"
    },
    "category": "meat",
    "cookingMethods": [
      "grilled"
    ],
    "shortDescription": {
      "en": "Dutch-Indonesian grilled meat skewers served with peanut satay sauce.",
      "zh": "荷兰印尼风烤肉串，通常配花生沙嗲酱。",
      "nl": "Nederlands-Indonesische vleesspiesjes met pindasaus."
    },
    "cookingProfile": {
      "en": "The meat is grilled and the peanut sauce makes it sweet, nutty, and filling.",
      "zh": "肉串烤制，花生酱让整体甜香、坚果味明显且有饱腹感。",
      "nl": "Het vlees is gegrild en de pindasaus maakt het zoet, nootachtig en vullend."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "dutch-indonesian",
        "classic-dish"
      ],
      "description": {
        "en": "A Dutch-Indonesian menu staple in cafés, snack bars, and eetcafés.",
        "zh": "荷兰印尼融合菜单常见菜，咖啡馆和小吃店都常见。",
        "nl": "Een Nederlands-Indonesische menuklassieker in cafés, snackbars en eetcafés."
      }
    },
    "composition": [
      [
        "chicken",
        55,
        "skewers"
      ],
      [
        "satay-sauce",
        25,
        "sauce",
        "seasoning"
      ],
      [
        "steamed-rice",
        10,
        "side"
      ],
      [
        "prawn-crackers",
        5,
        "crisp side",
        "ingredient",
        "medium",
        true
      ],
      [
        "sambal",
        5,
        "heat",
        "seasoning",
        "high",
        true
      ]
    ],
    "distinctiveFlavorSources": [
      "satay-sauce",
      "grilled meat",
      "sambal"
    ],
    "basicTaste": [
      "savory",
      "nutty",
      "sweet",
      "mildly spicy"
    ],
    "textureProfile": [
      "grilled meat",
      "thick peanut sauce",
      "crisp crackers"
    ],
    "riskFlags": [
      "contains-peanut",
      "contains-shellfish",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "dutch-indonesian",
      "comfort-food"
    ],
    "avoidIfTags": [
      "peanut-allergy",
      "avoids-spicy"
    ],
    "orderVerdict": {
      "en": "Great if peanut sauce sounds good; avoid with peanut allergy or if you want a light plate.",
      "zh": "喜欢花生酱肉串时很适合；花生过敏或想吃清淡时避开。",
      "nl": "Goed als pindasaus aantrekkelijk klinkt; vermijd bij pinda-allergie of lichte trek."
    },
    "confidenceTag": "audited-dutch-batch-008",
    "spiceLevel": 1,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "rijsttafel",
    "metadataCode": "102016",
    "cuisineId": "dutch",
    "names": {
      "en": "Rijsttafel",
      "zh": "荷兰印尼米饭拼盘",
      "nl": "Rijsttafel",
      "local": "Rijsttafel"
    },
    "category": "shared-set",
    "portionType": "shareable",
    "goodForSharing": true,
    "cookingMethods": [
      "assembled"
    ],
    "shortDescription": {
      "en": "A Dutch-Indonesian rice table with many small dishes around rice.",
      "zh": "荷兰印尼米饭拼盘，以米饭为中心，搭配多种小菜。",
      "nl": "Een Nederlands-Indonesische rijsttafel met veel kleine gerechten rond rijst."
    },
    "cookingProfile": {
      "en": "It is a shared spread, so expect variety, sauces, and several spice levels rather than one single dish.",
      "zh": "这是分享式组合餐，会有多种小菜和酱料，辣度也可能不一。",
      "nl": "Een gedeelde spread met variatie, sauzen en verschillende pittigheden."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "dutch-indonesian",
        "sharing"
      ],
      "description": {
        "en": "A Dutch colonial-era Indonesian dining format still common in Dutch-Indonesian restaurants.",
        "zh": "荷兰印尼餐厅常见的印尼菜组合形式，带有殖民时代饮食背景。",
        "nl": "Een Indonesische eetvorm uit koloniale context, nog veel gezien in Nederlands-Indonesische restaurants."
      }
    },
    "composition": [
      [
        "steamed-rice",
        25,
        "base"
      ],
      [
        "chicken",
        20,
        "one of several dishes"
      ],
      [
        "beef",
        15,
        "one of several dishes"
      ],
      [
        "mixed-vegetables",
        15,
        "vegetable dishes"
      ],
      [
        "satay-sauce",
        10,
        "sauce",
        "seasoning"
      ],
      [
        "sambal",
        5,
        "chili condiment",
        "seasoning"
      ],
      [
        "prawn-crackers",
        10,
        "crisp side"
      ]
    ],
    "distinctiveFlavorSources": [
      "satay-sauce",
      "sambal",
      "ketjap-manis"
    ],
    "basicTaste": [
      "savory",
      "sweet",
      "spicy",
      "varied"
    ],
    "textureProfile": [
      "multiple small dishes",
      "soft rice",
      "crisp crackers"
    ],
    "riskFlags": [
      "contains-peanut",
      "contains-shellfish",
      "contains-soy",
      "can-be-spicy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "sharing",
      "dutch-indonesian"
    ],
    "avoidIfTags": [
      "peanut-allergy",
      "avoids-spicy",
      "wants-simple-dish"
    ],
    "orderVerdict": {
      "en": "Best when sharing and exploring; less ideal if you need one predictable, allergen-simple dish.",
      "zh": "适合分享和尝试多种味道；如果需要单一、过敏风险简单的菜则不理想。",
      "nl": "Het best om te delen en te ontdekken; minder handig bij één voorspelbaar allergenarm gerecht."
    },
    "confidenceTag": "audited-dutch-batch-008",
    "spiceLevel": 2,
    "weightLevel": 4,
    "acquiredTasteLevel": 2,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "high"
  }),
  starterDish({
    "id": "hachee",
    "metadataCode": "102017",
    "cuisineId": "dutch",
    "names": {
      "en": "Hachee",
      "zh": "荷兰洋葱炖牛肉",
      "nl": "Hachee",
      "local": "Hachee"
    },
    "category": "meat",
    "cookingMethods": [
      "braised"
    ],
    "shortDescription": {
      "en": "Dutch beef and onion stew with a sweet-sour brown gravy, often served with potatoes or red cabbage.",
      "zh": "荷兰洋葱炖牛肉，深色肉汁带酸甜味，常配土豆或红甘蓝。",
      "nl": "Nederlandse rund-ui stoof met zoetzure bruine jus, vaak met aardappel of rode kool."
    },
    "cookingProfile": {
      "en": "It is slow-braised, giving tender beef and soft onions in a gravy-like sauce.",
      "zh": "慢炖让牛肉软嫩，洋葱融进肉汁，整体酱汁感明显。",
      "nl": "Lang gestoofd, met mals rund en zachte ui in jusachtige saus."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "comfort-food"
      ],
      "description": {
        "en": "A Dutch home-style stew, especially common in colder months.",
        "zh": "荷兰家常炖菜，冷天尤其常见。",
        "nl": "Een Nederlandse huiselijke stoof, vooral in koude maanden."
      }
    },
    "composition": [
      [
        "beef",
        55,
        "main"
      ],
      [
        "onion",
        25,
        "sauce body"
      ],
      [
        "vinegar",
        5,
        "sweet-sour balance",
        "seasoning"
      ],
      [
        "red-cabbage",
        10,
        "side"
      ],
      [
        "black-pepper",
        5,
        "seasoning",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "onion",
      "vinegar",
      "braised beef"
    ],
    "basicTaste": [
      "savory",
      "rich",
      "sweet-sour"
    ],
    "textureProfile": [
      "tender beef",
      "soft onions",
      "thick gravy"
    ],
    "riskFlags": [],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food",
      "classic-dish"
    ],
    "avoidIfTags": [
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Good for a tender beef stew; choose this over fried snacks if you want a real main.",
      "zh": "想吃软烂牛肉炖菜时适合；想要真正主菜时比炸小吃更合适。",
      "nl": "Goed voor malse rundstoof; kies dit boven snacks als je een echte hoofdschotel wilt."
    },
    "confidenceTag": "audited-dutch-batch-008",
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "vol-au-vent",
    "metadataCode": "107006",
    "cuisineId": "belgian",
    "names": {
      "en": "Vol-au-vent",
      "zh": "比利时奶油鸡酥盒",
      "nl": "Vol-au-vent",
      "local": "Vol-au-vent"
    },
    "category": "meat",
    "cookingMethods": [
      "baked",
      "simmered"
    ],
    "shortDescription": {
      "en": "A puff-pastry case filled with creamy chicken and mushroom ragout, often served with fries.",
      "zh": "酥皮壳里装奶油鸡肉蘑菇浓酱，常配薯条。",
      "nl": "Een bladerdeegkuipje gevuld met romige kip-champignonragout, vaak met friet."
    },
    "cookingProfile": {
      "en": "Expect flaky pastry around a hot creamy filling, so it feels richer than a simple chicken stew.",
      "zh": "外层酥皮、内馅热而奶香，比普通鸡肉炖菜更厚重。",
      "nl": "Bladerdeeg rond warme romige vulling; rijker dan een simpele kipstoof."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "comfort-food"
      ],
      "description": {
        "en": "A Belgian brasserie classic for creamy pastry-and-ragout comfort.",
        "zh": "比利时小馆经典，重点是酥皮和奶油浓酱的组合。",
        "nl": "Een Belgische brasserieklassieker met bladerdeeg en romige ragout."
      }
    },
    "composition": [
      [
        "pastry-crust",
        35,
        "puff pastry case"
      ],
      [
        "chicken",
        30,
        "ragout protein"
      ],
      [
        "cream",
        15,
        "sauce richness"
      ],
      [
        "mushrooms",
        10,
        "ragout body"
      ],
      [
        "broth",
        10,
        "sauce base"
      ]
    ],
    "distinctiveFlavorSources": [
      "pastry-crust",
      "cream",
      "mushrooms"
    ],
    "basicTaste": [
      "savory",
      "creamy",
      "buttery"
    ],
    "textureProfile": [
      "flaky pastry",
      "creamy ragout",
      "tender chicken"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-dairy"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food",
      "classic-dish"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Choose it for creamy comfort and pastry; skip if you want something light or crisp all the way through.",
      "zh": "想吃奶油浓酱和酥皮时适合；想吃清爽轻食时避开。",
      "nl": "Kies dit voor romig comfort en bladerdeeg; minder geschikt als je licht wilt eten."
    },
    "confidenceTag": "audited-belgian-batch-009",
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "shrimp-croquettes",
    "metadataCode": "107007",
    "cuisineId": "belgian",
    "names": {
      "en": "Shrimp Croquettes",
      "zh": "比利时灰虾可乐饼",
      "nl": "Garnaalkroketten",
      "local": "Garnaalkroketten"
    },
    "category": "fried-snack",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "Golden croquettes filled with creamy grey-shrimp ragout, usually served with lemon and parsley.",
      "zh": "金黄炸可乐饼，里面是奶油灰虾浓馅，常配柠檬和欧芹。",
      "nl": "Gouden kroketten met romige grijze-garnalenragout, meestal met citroen en peterselie."
    },
    "cookingProfile": {
      "en": "The outside is crisp while the filling is hot, creamy, and briny from shrimp.",
      "zh": "外壳酥脆，内馅很烫，奶香中带灰虾咸鲜。",
      "nl": "Krokant buiten, heet en romig vanbinnen met zilte garnalensmaak."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "seafood"
      ],
      "description": {
        "en": "A common Belgian seafood starter, especially on brasserie and coast menus.",
        "zh": "常见比利时海鲜前菜，在小馆和海岸菜单上很常见。",
        "nl": "Een Belgische zeevruchtenklassieker, vooral in brasseries en aan de kust."
      }
    },
    "composition": [
      [
        "shrimp",
        35,
        "filling"
      ],
      [
        "bechamel-sauce",
        30,
        "creamy binder"
      ],
      [
        "bread",
        20,
        "crumb coating"
      ],
      [
        "egg",
        10,
        "coating"
      ],
      [
        "parsley",
        5,
        "fresh garnish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "grey shrimp",
      "bechamel-sauce",
      "parsley"
    ],
    "basicTaste": [
      "briny",
      "creamy",
      "savory"
    ],
    "textureProfile": [
      "crisp coating",
      "hot creamy filling",
      "small shrimp pieces"
    ],
    "riskFlags": [
      "contains-shellfish",
      "contains-gluten",
      "contains-dairy",
      "contains-egg"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "seafood",
      "classic-dish"
    ],
    "avoidIfTags": [
      "shellfish-allergy",
      "gluten-free",
      "dairy-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "A strong Belgian starter if you like shellfish; the filling is rich and very hot.",
      "zh": "喜欢虾类的话很适合作比利时前菜；内馅浓郁而且很烫。",
      "nl": "Een sterke Belgische starter als je garnalen lust; de vulling is rijk en heet."
    },
    "confidenceTag": "audited-belgian-batch-009",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "stoemp",
    "metadataCode": "107008",
    "cuisineId": "belgian",
    "names": {
      "en": "Stoemp",
      "zh": "比利时蔬菜土豆泥",
      "nl": "Stoemp",
      "local": "Stoemp"
    },
    "category": "vegetable-main",
    "cookingMethods": [
      "boiled"
    ],
    "shortDescription": {
      "en": "Belgian mashed potatoes mixed with vegetables, often served with sausage, bacon, or meatballs.",
      "zh": "比利时土豆蔬菜泥，常配香肠、培根或肉丸。",
      "nl": "Belgische aardappelpuree met groenten, vaak met worst, spek of gehaktballen."
    },
    "cookingProfile": {
      "en": "It is soft, warm, and filling; the vegetable mix decides whether it tastes sweet, earthy, or bitter.",
      "zh": "口感柔软热乎且顶饱，蔬菜决定它偏甜、泥土味还是微苦。",
      "nl": "Zacht, warm en vullend; de groenten bepalen of het zoet, aards of bitter smaakt."
    },
    "cuisineRole": {
      "level": "common",
      "tags": [
        "comfort-food",
        "side"
      ],
      "description": {
        "en": "A common Belgian comfort side or main base, related to Dutch stamppot but used broadly on Belgian menus.",
        "zh": "常见比利时家常配菜或主食底，和荷兰 stamppot 相近但在比利时菜单上很常见。",
        "nl": "Een Belgische comfortbasis, verwant aan stamppot maar breed gebruikt op Belgische menu's."
      }
    },
    "composition": [
      [
        "potato",
        55,
        "mash base"
      ],
      [
        "mixed-vegetables",
        25,
        "vegetable mix"
      ],
      [
        "butter",
        10,
        "richness"
      ],
      [
        "sausage",
        10,
        "common side",
        "ingredient",
        "medium",
        true
      ]
    ],
    "distinctiveFlavorSources": [
      "potato",
      "vegetable mix",
      "butter"
    ],
    "basicTaste": [
      "mild",
      "savory",
      "buttery"
    ],
    "textureProfile": [
      "soft mash",
      "vegetable bits",
      "warm serving"
    ],
    "riskFlags": [
      "contains-dairy",
      "contains-pork"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food",
      "classic-dish"
    ],
    "avoidIfTags": [
      "dairy-free",
      "no-pork",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "Good as a gentle Belgian comfort dish; ask about sausage or bacon if avoiding pork.",
      "zh": "适合想吃温和比利时家常味；避猪肉时要确认是否配香肠或培根。",
      "nl": "Goed voor mild Belgisch comfort; vraag naar worst of spek als je varkensvlees vermijdt."
    },
    "confidenceTag": "audited-belgian-batch-009",
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "high"
  }),
  starterDish({
    "id": "tomate-crevette",
    "metadataCode": "107009",
    "cuisineId": "belgian",
    "names": {
      "en": "Tomate Crevette",
      "zh": "番茄灰虾沙拉",
      "nl": "Tomaat-garnaal",
      "local": "Tomate crevette"
    },
    "category": "starter",
    "cookingMethods": [
      "assembled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "A hollowed tomato filled with grey shrimp bound in mayonnaise, usually served cold as a starter.",
      "zh": "掏空番茄中填入拌蛋黄酱的灰虾，通常冷食作前菜。",
      "nl": "Een uitgeholde tomaat gevuld met grijze garnalen in mayonaise, koud als voorgerecht."
    },
    "cookingProfile": {
      "en": "It is cool, juicy, and creamy, with the shrimp giving a clean briny bite.",
      "zh": "冷食、多汁、带蛋黄酱奶滑感，灰虾提供清爽咸鲜。",
      "nl": "Koel, sappig en romig, met zilte beet van grijze garnalen."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "seafood"
      ],
      "description": {
        "en": "A recognizable Belgian cold seafood starter built around tomato and grey shrimp.",
        "zh": "典型比利时冷海鲜前菜，核心是番茄和灰虾。",
        "nl": "Een herkenbaar Belgisch koud zeevruchtenvoorgerecht met tomaat en grijze garnalen."
      }
    },
    "composition": [
      [
        "tomato",
        40,
        "shell and freshness"
      ],
      [
        "shrimp",
        35,
        "seafood filling"
      ],
      [
        "mayonnaise",
        15,
        "binder"
      ],
      [
        "mixed-vegetables",
        5,
        "salad side",
        "ingredient",
        "low",
        true
      ],
      [
        "parsley",
        5,
        "fresh garnish",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "grey shrimp",
      "tomato",
      "mayonnaise"
    ],
    "basicTaste": [
      "briny",
      "fresh",
      "creamy"
    ],
    "textureProfile": [
      "juicy tomato",
      "small firm shrimp",
      "creamy filling"
    ],
    "riskFlags": [
      "contains-shellfish",
      "contains-egg"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "seafood",
      "starter"
    ],
    "avoidIfTags": [
      "shellfish-allergy",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "A lighter Belgian seafood starter; avoid if mayonnaise or shellfish is not your thing.",
      "zh": "较清爽的比利时海鲜前菜；不喜欢蛋黄酱或虾类就避开。",
      "nl": "Een lichtere Belgische zeevruchtenstarter; vermijd bij mayonaise- of garnalenafkeer."
    },
    "confidenceTag": "audited-belgian-batch-009",
    "spiceLevel": 0,
    "weightLevel": 2,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "anguilles-au-vert",
    "metadataCode": "107010",
    "cuisineId": "belgian",
    "names": {
      "en": "Eel in Green Sauce",
      "zh": "绿酱鳗鱼",
      "nl": "Paling in het groen",
      "local": "Anguilles au vert"
    },
    "category": "seafood",
    "cookingMethods": [
      "simmered"
    ],
    "shortDescription": {
      "en": "Eel pieces served in a vivid green herb sauce, a traditional Belgian fish dish.",
      "zh": "鳗鱼块配鲜绿色香草酱，是传统比利时鱼类菜。",
      "nl": "Stukken paling in een felgroene kruidensaus, een traditioneel Belgisch visgerecht."
    },
    "cookingProfile": {
      "en": "The eel is soft and rich while the herb sauce makes it grassy, fresh, and slightly tangy.",
      "zh": "鳗鱼柔软偏丰腴，绿色香草酱带清草香和微酸感。",
      "nl": "Paling is zacht en rijk; de kruidensaus maakt het fris, groen en licht zuur."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "seafood"
      ],
      "description": {
        "en": "A regional Belgian eel dish; distinctive but more acquired than shrimp or mussels.",
        "zh": "地区性比利时鳗鱼菜，比虾和贻贝更有接受门槛。",
        "nl": "Een regionaal Belgisch palinggerecht; uitgesprokener dan garnalen of mosselen."
      }
    },
    "composition": [
      [
        "eel",
        55,
        "fish"
      ],
      [
        "herbs",
        20,
        "green sauce body"
      ],
      [
        "butter",
        10,
        "sauce richness"
      ],
      [
        "lemon",
        5,
        "fresh acidity"
      ],
      [
        "parsley",
        10,
        "green herb",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "eel",
      "parsley",
      "green herbs"
    ],
    "basicTaste": [
      "herbal",
      "briny",
      "rich"
    ],
    "textureProfile": [
      "soft eel",
      "herb sauce",
      "warm serving"
    ],
    "riskFlags": [
      "contains-fish",
      "contains-dairy"
    ],
    "dietaryFlags": [
      "pescatarian"
    ],
    "goodForTags": [
      "regional-dish",
      "seafood"
    ],
    "avoidIfTags": [
      "fish-allergy",
      "dairy-free",
      "prefers-mild-fish"
    ],
    "orderVerdict": {
      "en": "Order if you like oily fish and herb sauce; it is less beginner-friendly than mussels.",
      "zh": "喜欢油脂感鱼肉和香草酱时可点；比贻贝更不适合初尝者。",
      "nl": "Kies dit als je vette vis en kruidensaus lust; minder toegankelijk dan mosselen."
    },
    "confidenceTag": "audited-belgian-batch-009",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 3,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "filet-americain",
    "metadataCode": "107011",
    "cuisineId": "belgian",
    "names": {
      "en": "Filet Américain",
      "zh": "比利时生牛肉酱",
      "nl": "Filet americain",
      "local": "Filet américain"
    },
    "category": "meat",
    "cookingMethods": [
      "assembled"
    ],
    "servingTemperature": "cold-or-cool",
    "rawnessLevel": "raw",
    "shortDescription": {
      "en": "Seasoned raw minced beef spread or tartare-style preparation, usually served with toast, fries, or salad.",
      "zh": "调味生牛肉碎/肉酱，可像塔塔一样配吐司、薯条或沙拉。",
      "nl": "Gekruid rauw rundvlees als spread of tartaar, vaak met toast, friet of salade."
    },
    "cookingProfile": {
      "en": "It is served raw and cool, with a soft spreadable texture and sharp seasoning.",
      "zh": "冷食生牛肉，质地柔软可抹，调味通常带酸香和辛香。",
      "nl": "Rauw en koel geserveerd, zacht smeerbaar met pittige kruiding."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "raw"
      ],
      "description": {
        "en": "A Belgian raw-beef classic; useful to distinguish from cooked burgers or steak.",
        "zh": "比利时经典生牛肉菜，点餐时要和熟汉堡/牛排区分。",
        "nl": "Een Belgische klassieker met rauw rund, duidelijk anders dan burger of steak."
      }
    },
    "composition": [
      [
        "beef",
        65,
        "raw minced beef"
      ],
      [
        "egg",
        10,
        "binder",
        "ingredient",
        "medium",
        true
      ],
      [
        "mustard",
        10,
        "sharp seasoning",
        "seasoning"
      ],
      [
        "capers",
        5,
        "briny seasoning"
      ],
      [
        "bread",
        10,
        "toast side",
        "ingredient",
        "medium",
        true
      ]
    ],
    "distinctiveFlavorSources": [
      "raw beef",
      "mustard",
      "capers"
    ],
    "basicTaste": [
      "savory",
      "tangy",
      "peppery"
    ],
    "textureProfile": [
      "soft raw beef",
      "spreadable",
      "crisp toast"
    ],
    "riskFlags": [
      "contains-egg",
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "classic-dish",
      "raw-food"
    ],
    "avoidIfTags": [
      "avoids-raw-meat",
      "pregnant",
      "egg-allergy",
      "gluten-free"
    ],
    "orderVerdict": {
      "en": "Only order if raw seasoned beef sounds appealing; it is not a cooked American-style dish.",
      "zh": "只有能接受调味生牛肉时再点；这不是熟的美式菜。",
      "nl": "Alleen bestellen als rauw gekruid rund goed klinkt; dit is geen gaar Amerikaans gerecht."
    },
    "confidenceTag": "audited-belgian-batch-009",
    "spiceLevel": 1,
    "weightLevel": 3,
    "acquiredTasteLevel": 3,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "boulets-liegeois",
    "metadataCode": "107012",
    "cuisineId": "belgian",
    "names": {
      "en": "Boulets Liégeois",
      "zh": "列日肉丸",
      "nl": "Luikse gehaktballen",
      "local": "Boulets à la liégeoise"
    },
    "category": "meat",
    "cookingMethods": [
      "braised"
    ],
    "shortDescription": {
      "en": "Belgian meatballs in a sweet-savory Liège sauce, commonly served with fries.",
      "zh": "比利时肉丸配列日风格甜咸酱汁，常配薯条。",
      "nl": "Belgische gehaktballen in zoet-hartige Luikse saus, vaak met friet."
    },
    "cookingProfile": {
      "en": "The meatballs are tender and saucy, with a dark sweet onion-and-syrup style gravy.",
      "zh": "肉丸软嫩多汁，深色酱汁带洋葱和糖浆般甜咸味。",
      "nl": "Malse gehaktballen met donkere zoet-hartige uiensaus."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "comfort-food"
      ],
      "description": {
        "en": "A Liège-region Belgian comfort dish often found in brasseries.",
        "zh": "列日地区比利时家常菜，常见于小馆菜单。",
        "nl": "Een Luikse Belgische comfortklassieker in brasseries."
      }
    },
    "composition": [
      [
        "ground-meat",
        45,
        "meatballs"
      ],
      [
        "onion",
        20,
        "sauce body"
      ],
      [
        "fries",
        20,
        "side"
      ],
      [
        "beer",
        10,
        "sauce depth",
        "seasoning"
      ],
      [
        "mustard",
        5,
        "sharp balance",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "onion gravy",
      "beer",
      "mustard"
    ],
    "basicTaste": [
      "savory",
      "sweet",
      "rich"
    ],
    "textureProfile": [
      "tender meatballs",
      "glossy sauce",
      "crisp fries"
    ],
    "riskFlags": [
      "contains-gluten",
      "contains-alcohol"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "comfort-food",
      "regional-dish"
    ],
    "avoidIfTags": [
      "gluten-free",
      "avoids-alcohol",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "A hearty Belgian comfort order; choose tomato meatballs instead if you dislike sweet brown sauce.",
      "zh": "厚实的比利时家常选择；不喜欢甜咸深色酱可选番茄肉丸。",
      "nl": "Stevig Belgisch comfort; kies tomatensaus als je zoete bruine saus niet wilt."
    },
    "confidenceTag": "audited-belgian-batch-009",
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "lapin-a-la-gueuze",
    "metadataCode": "107013",
    "cuisineId": "belgian",
    "names": {
      "en": "Rabbit with Gueuze",
      "zh": "啤酒炖兔",
      "nl": "Konijn met geuze",
      "local": "Lapin à la gueuze"
    },
    "category": "meat",
    "cookingMethods": [
      "braised"
    ],
    "shortDescription": {
      "en": "Rabbit braised in gueuze beer sauce, often with onions, herbs, and a slightly sour-malty finish.",
      "zh": "兔肉用 gueuze 啤酒炖煮，常有洋葱、香草和微酸麦芽味。",
      "nl": "Konijn gestoofd in geuze, vaak met ui, kruiden en licht zuur-moutige saus."
    },
    "cookingProfile": {
      "en": "Rabbit is leaner than chicken, so the beer sauce carries much of the richness and tang.",
      "zh": "兔肉比鸡肉更瘦，厚重感和微酸味主要来自啤酒酱汁。",
      "nl": "Konijn is magerder dan kip; de geuzesaus geeft rijkdom en fris zuur."
    },
    "cuisineRole": {
      "level": "regional",
      "tags": [
        "regional-dish",
        "beer-cuisine"
      ],
      "description": {
        "en": "A Belgian beer-braised rabbit dish for diners comfortable with game-like meats.",
        "zh": "比利时啤酒炖兔，适合能接受兔肉/野味感的人。",
        "nl": "Een Belgisch bierstoofgerecht met konijn voor wie wildachtiger vlees lust."
      }
    },
    "composition": [
      [
        "rabbit",
        55,
        "protein"
      ],
      [
        "beer",
        20,
        "gueuze sauce",
        "seasoning"
      ],
      [
        "onion",
        10,
        "sauce body"
      ],
      [
        "mushrooms",
        10,
        "earthy body",
        "ingredient",
        "medium",
        true
      ],
      [
        "parsley",
        5,
        "fresh herb",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "rabbit",
      "gueuze beer",
      "onion"
    ],
    "basicTaste": [
      "savory",
      "malty",
      "slightly sour"
    ],
    "textureProfile": [
      "lean tender meat",
      "braising sauce",
      "soft onions"
    ],
    "riskFlags": [
      "contains-alcohol",
      "contains-gluten"
    ],
    "dietaryFlags": [],
    "goodForTags": [
      "regional-dish",
      "beer-cuisine"
    ],
    "avoidIfTags": [
      "avoids-alcohol",
      "gluten-free",
      "avoids-rabbit"
    ],
    "orderVerdict": {
      "en": "Order if rabbit and beer sauce sound interesting; avoid if you prefer familiar chicken texture.",
      "zh": "想尝兔肉和啤酒酱汁时可点；只想要熟悉鸡肉口感时避开。",
      "nl": "Kies dit als konijn en biersaus interessant klinken; vermijd bij voorkeur voor kiptextuur."
    },
    "confidenceTag": "audited-belgian-batch-009",
    "spiceLevel": 0,
    "weightLevel": 4,
    "acquiredTasteLevel": 3,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "belgian-fries",
    "metadataCode": "107014",
    "cuisineId": "belgian",
    "names": {
      "en": "Belgian Fries",
      "zh": "比利时薯条",
      "nl": "Belgische frieten",
      "local": "Frieten"
    },
    "category": "fried-snack",
    "mealRole": "side",
    "portionType": "side",
    "goodForSharing": true,
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "Thick Belgian-style fries, usually served with mayonnaise or a choice of frituur sauces.",
      "zh": "比利时风格粗薯条，通常配蛋黄酱或炸物店酱料。",
      "nl": "Dikke Belgische frieten, meestal met mayonaise of frituursaus naar keuze."
    },
    "cookingProfile": {
      "en": "They should be crisp outside and fluffy inside, with sauce deciding how heavy they feel.",
      "zh": "理想状态是外脆内松，酱料会决定整体厚重感。",
      "nl": "Krokant buiten en luchtig binnen; de saus bepaalt hoe zwaar het wordt."
    },
    "cuisineRole": {
      "level": "signature",
      "tags": [
        "classic-dish",
        "street-food"
      ],
      "description": {
        "en": "A Belgian frituur staple and common side for mussels, meatballs, and sandwiches.",
        "zh": "比利时炸物店基础小吃，也是贻贝、肉丸和三明治常见配菜。",
        "nl": "Een frituurklassieker en vaak bij mosselen, balletjes en broodjes."
      }
    },
    "composition": [
      [
        "fries",
        80,
        "potato base"
      ],
      [
        "mayonnaise",
        10,
        "classic sauce"
      ],
      [
        "curry-ketchup",
        5,
        "optional sauce",
        "seasoning",
        "high",
        true
      ],
      [
        "mustard",
        5,
        "optional sauce",
        "seasoning",
        "high",
        true
      ]
    ],
    "distinctiveFlavorSources": [
      "fries",
      "mayonnaise"
    ],
    "basicTaste": [
      "salty",
      "savory",
      "mild"
    ],
    "textureProfile": [
      "crisp outside",
      "fluffy potato",
      "creamy dip"
    ],
    "riskFlags": [
      "contains-egg"
    ],
    "dietaryFlags": [
      "vegetarian"
    ],
    "goodForTags": [
      "street-food",
      "side",
      "sharing"
    ],
    "avoidIfTags": [
      "egg-allergy",
      "wants-light-food"
    ],
    "orderVerdict": {
      "en": "A safe side or snack; choose sauce carefully if you want to keep it lighter.",
      "zh": "作为配菜或小吃很稳；想轻一点就少选厚酱。",
      "nl": "Een veilige snack of side; kies saus bewust als je het lichter wilt houden."
    },
    "confidenceTag": "audited-belgian-batch-009",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "cheese-croquettes",
    "metadataCode": "107015",
    "cuisineId": "belgian",
    "names": {
      "en": "Cheese Croquettes",
      "zh": "比利时奶酪可乐饼",
      "nl": "Kaaskroketten",
      "local": "Croquettes au fromage"
    },
    "category": "fried-snack",
    "cookingMethods": [
      "deep-fried"
    ],
    "shortDescription": {
      "en": "Crisp fried croquettes filled with thick melted cheese or cheese béchamel.",
      "zh": "外壳酥脆，里面是浓稠融化奶酪或奶酪白酱。",
      "nl": "Krokante kroketten gevuld met dikke gesmolten kaas of kaasbechamel."
    },
    "cookingProfile": {
      "en": "They are hot, crisp, and very dairy-rich, with a stretchy or creamy center.",
      "zh": "热、酥、奶味很重，内馅可能拉丝或呈浓稠奶酪酱。",
      "nl": "Heet, krokant en erg kaasrijk, met draderige of romige kern."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "classic-dish",
        "starter"
      ],
      "description": {
        "en": "A Belgian brasserie starter for diners who want a vegetarian fried option.",
        "zh": "比利时小馆常见前菜，适合想要素食炸物的人。",
        "nl": "Een Belgische brasseriesnack voor wie vegetarisch gefrituurd wil."
      }
    },
    "composition": [
      [
        "cheese",
        45,
        "filling"
      ],
      [
        "bechamel-sauce",
        25,
        "creamy binder"
      ],
      [
        "bread",
        20,
        "crumb coating"
      ],
      [
        "egg",
        10,
        "coating"
      ]
    ],
    "distinctiveFlavorSources": [
      "cheese",
      "bechamel-sauce"
    ],
    "basicTaste": [
      "savory",
      "creamy",
      "salty"
    ],
    "textureProfile": [
      "crisp shell",
      "melted center",
      "hot filling"
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
      "starter",
      "vegetarian"
    ],
    "avoidIfTags": [
      "dairy-free",
      "gluten-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "A strong pick for cheese lovers; too rich if you dislike heavy dairy.",
      "zh": "喜欢奶酪会很适合；不爱厚重乳制品就避开。",
      "nl": "Sterk voor kaasliefhebbers; te rijk als je zware zuivel niet wilt."
    },
    "confidenceTag": "audited-belgian-batch-009",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "medium"
  }),
  starterDish({
    "id": "dame-blanche",
    "metadataCode": "107016",
    "cuisineId": "belgian",
    "names": {
      "en": "Dame Blanche",
      "zh": "香草冰淇淋巧克力酱",
      "nl": "Dame blanche",
      "local": "Dame blanche"
    },
    "category": "dessert",
    "cookingMethods": [
      "assembled"
    ],
    "servingTemperature": "cold-or-cool",
    "shortDescription": {
      "en": "Vanilla ice cream served with warm chocolate sauce and often whipped cream.",
      "zh": "香草冰淇淋配热巧克力酱，常加打发奶油。",
      "nl": "Vanille-ijs met warme chocoladesaus en vaak slagroom."
    },
    "cookingProfile": {
      "en": "It is a cold-hot dessert: cold vanilla ice cream under warm glossy chocolate sauce.",
      "zh": "冷热对比明显：冷香草冰淇淋上浇热巧克力酱。",
      "nl": "Een koud-warm dessert: vanille-ijs onder warme glanzende chocoladesaus."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "dessert",
        "first-timer-friendly"
      ],
      "description": {
        "en": "A common Belgian brasserie dessert that is familiar but still very Belgian on menus.",
        "zh": "常见比利时小馆甜点，熟悉但在比利时菜单上很典型。",
        "nl": "Een gewone Belgische brasseriedessert, herkenbaar maar typisch op menu's."
      }
    },
    "composition": [
      [
        "vanilla-gelato",
        55,
        "ice cream"
      ],
      [
        "chocolate",
        25,
        "warm sauce"
      ],
      [
        "cream",
        15,
        "whipped topping"
      ],
      [
        "vanilla",
        5,
        "aroma",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "vanilla ice cream",
      "warm chocolate sauce"
    ],
    "basicTaste": [
      "sweet",
      "creamy",
      "chocolatey"
    ],
    "textureProfile": [
      "cold ice cream",
      "warm sauce",
      "soft cream"
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
      "first-timer-friendly"
    ],
    "avoidIfTags": [
      "dairy-free",
      "egg-allergy"
    ],
    "orderVerdict": {
      "en": "A safe dessert if you want vanilla and chocolate rather than pastry.",
      "zh": "想吃香草和巧克力、不想吃糕点时很稳。",
      "nl": "Een veilige dessertkeuze voor vanille en chocolade in plaats van gebak."
    },
    "confidenceTag": "audited-belgian-batch-009",
    "spiceLevel": 0,
    "weightLevel": 3,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "low"
  }),
  starterDish({
    "id": "speculoos",
    "metadataCode": "107017",
    "cuisineId": "belgian",
    "names": {
      "en": "Speculoos",
      "zh": "比利时焦糖香料饼干",
      "nl": "Speculoos",
      "local": "Speculoos"
    },
    "category": "dessert",
    "cookingMethods": [
      "baked"
    ],
    "shortDescription": {
      "en": "Crisp caramelized spiced biscuits, often served with coffee or used in desserts.",
      "zh": "酥脆焦糖化香料饼干，常配咖啡或用于甜点。",
      "nl": "Krokante gekaramelliseerde kruidkoekjes, vaak bij koffie of in desserts."
    },
    "cookingProfile": {
      "en": "It is dry, crisp, and spice-forward rather than creamy or cake-like.",
      "zh": "口感干爽酥脆，香料味明显，不是奶油或蛋糕型甜点。",
      "nl": "Droog, krokant en kruidig, niet romig of cakeachtig."
    },
    "cuisineRole": {
      "level": "classic",
      "tags": [
        "dessert",
        "coffee-pairing"
      ],
      "description": {
        "en": "A Belgian biscuit classic that often appears as a small sweet or dessert component.",
        "zh": "比利时经典饼干，常作为咖啡小甜点或甜点元素出现。",
        "nl": "Een Belgische koekjesklassieker, vaak bij koffie of als dessertcomponent."
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
        "caramel sweetness"
      ],
      [
        "butter",
        15,
        "richness"
      ],
      [
        "speculaas-spice",
        10,
        "warm spice",
        "seasoning"
      ],
      [
        "cinnamon",
        5,
        "spice",
        "seasoning"
      ]
    ],
    "distinctiveFlavorSources": [
      "speculaas-spice",
      "caramelized sugar",
      "cinnamon"
    ],
    "basicTaste": [
      "sweet",
      "spiced",
      "caramel-like"
    ],
    "textureProfile": [
      "crisp biscuit",
      "dry snap",
      "crumbly bite"
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
      "coffee-pairing"
    ],
    "avoidIfTags": [
      "gluten-free",
      "dairy-free"
    ],
    "orderVerdict": {
      "en": "Good as a small sweet with coffee; choose another dessert if you want something creamy.",
      "zh": "适合配咖啡的小甜食；想吃奶油甜点时选别的。",
      "nl": "Goed als klein zoet bij koffie; kies iets anders als je romig dessert wilt."
    },
    "confidenceTag": "audited-belgian-batch-009",
    "spiceLevel": 0,
    "weightLevel": 1,
    "acquiredTasteLevel": 1,
    "metadataConfidence": 0.82,
    "restaurantVariationLevel": "low"
  }),
];
