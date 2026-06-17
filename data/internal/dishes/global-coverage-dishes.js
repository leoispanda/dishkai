import { starterDish } from "./starter-dish.js";

const cuisineCopy = {
  thai: ["Thai", "泰国菜", "Thais", ["fish-sauce", "lime", "chili"]],
  japanese: ["Japanese", "日本菜", "Japans", ["soy-sauce", "miso", "sea-salt"]],
  korean: ["Korean", "韩国菜", "Koreaans", ["gochujang", "sesame-oil", "soy-sauce"]],
  chinese: ["Chinese", "中国菜", "Chinees", ["soy-sauce", "doubanjiang", "sichuan-pepper"]],
  italian: ["Italian", "意大利菜", "Italiaans", ["olive-oil", "garlic", "basil"]],
  french: ["French", "法餐", "Frans", ["butter", "red-wine", "parsley"]],
  german: ["German", "德国菜", "Duits", ["mustard", "beer", "black-pepper"]],
  dutch: ["Dutch", "荷兰菜", "Nederlands", ["mustard", "sea-salt", "black-pepper"]],
  belgian: ["Belgian", "比利时菜", "Belgisch", ["beer", "mustard", "parsley"]],
  greek: ["Greek", "希腊菜", "Grieks", ["olive-oil", "oregano", "mint"]],
  spanish: ["Spanish", "西班牙菜", "Spaans", ["olive-oil", "smoked-paprika", "saffron"]],
  indian: ["Indian", "印度菜", "Indiaas", ["garam-masala", "turmeric", "cardamom"]],
  vietnamese: ["Vietnamese", "越南菜", "Vietnamees", ["fish-sauce", "lime", "lemongrass"]],
  indonesian: ["Indonesian", "印尼菜", "Indonesisch", ["coconut-curry", "chili", "soy-sauce"]],
  "malaysian-singaporean": ["Malaysian & Singaporean", "马来/新加坡菜", "Maleis en Singaporees", ["coconut-curry", "lemongrass", "chili"]],
  turkish: ["Turkish", "土耳其菜", "Turks", ["cumin", "mint", "paprika"]],
  "middle-eastern": ["Middle Eastern", "中东菜", "Midden-Oosters", ["tahini", "cumin", "parsley"]],
  mexican: ["Mexican", "墨西哥菜", "Mexicaans", ["salsa", "chili", "cumin"]],
  american: ["American", "美国菜", "Amerikaans", ["mustard", "paprika", "black-pepper"]],
  "british-irish": ["British & Irish", "英式/爱尔兰菜", "Brits en Iers", ["mustard", "black-pepper", "parsley"]],
  moroccan: ["Moroccan", "摩洛哥菜", "Marokkaans", ["harissa", "cumin", "cinnamon"]],
  portuguese: ["Portuguese", "葡萄牙菜", "Portugees", ["olive-oil", "peri-peri", "parsley"]],
  surinamese: ["Surinamese", "苏里南菜", "Surinaams", ["chili", "cumin", "coconut-curry"]],
  ethiopian: ["Ethiopian", "埃塞俄比亚菜", "Ethiopisch", ["chili", "cumin", "turmeric"]],
  scandinavian: ["Scandinavian", "北欧菜", "Scandinavisch", ["dill", "mustard", "sea-salt"]],
  peruvian: ["Peruvian", "秘鲁菜", "Peruaans", ["lime", "chili", "coriander"]],
  brazilian: ["Brazilian", "巴西菜", "Braziliaans", ["lime", "cumin", "garlic"]],
};

const imageSlugs = {
  "rabarbergrød": "rabarbergrod",
};

const categoryProfiles = {
  rice: {
    method: "stir-fried",
    composition: [["steamed-rice", 50, "base"], ["mixed-vegetables", 20, "body"], ["chicken", 15, "protein"], ["soy-sauce", 10, "seasoning", "seasoning"], ["green-onion", 5, "finish"]],
    taste: ["savory", "umami"],
    texture: ["soft rice", "mixed toppings"],
    risks: [],
    verdict: "Good when you want a familiar, filling rice plate with moderate restaurant variation.",
    zhVerdict: "想吃稳妥、有饱腹感的米饭类菜品时可以考虑。",
    nlVerdict: "Goed als je een vertrouwd en vullend rijstgerecht wilt.",
  },
  noodle: {
    method: "stir-fried",
    composition: [["wheat-noodles", 45, "base"], ["mixed-vegetables", 20, "body"], ["chicken", 20, "protein"], ["soy-sauce", 10, "seasoning", "seasoning"], ["green-onion", 5, "finish"]],
    taste: ["savory", "umami"],
    texture: ["springy noodles", "glossy sauce"],
    risks: ["contains-gluten"],
    verdict: "Good if you want a noodle dish; check sauce richness and spice level.",
    zhVerdict: "想吃面类主食时适合，建议留意酱汁厚度和辣度。",
    nlVerdict: "Goed als je noedels wilt; let op sausdikte en pittigheid.",
  },
  soup: {
    method: "simmered",
    composition: [["broth", 45, "base"], ["mixed-vegetables", 25, "body"], ["chicken", 15, "protein"], ["sea-salt", 10, "seasoning", "seasoning"], ["parsley", 5, "finish", "seasoning"]],
    taste: ["savory", "mild"],
    texture: ["brothy", "soft pieces"],
    risks: [],
    verdict: "Good when you want something warm and easier to share or start with.",
    zhVerdict: "想要热乎、相对容易入口的汤类时可以考虑。",
    nlVerdict: "Goed als je iets warms en toegankelijk wilt.",
  },
  curry: {
    method: "simmered",
    composition: [["steamed-rice", 35, "base"], ["chicken", 25, "protein"], ["mixed-vegetables", 20, "body"], ["coconut-curry", 15, "sauce-base", "seasoning"], ["chili", 5, "heat", "seasoning"]],
    taste: ["savory", "spiced", "creamy"],
    texture: ["saucy", "soft rice"],
    risks: [],
    verdict: "Order if you want a saucy, aromatic dish; ask about heat level.",
    zhVerdict: "想吃有酱汁和香料感的菜时适合，建议确认辣度。",
    nlVerdict: "Bestel dit als je iets sausigs en aromatisch wilt; vraag naar pittigheid.",
  },
  meat: {
    method: "grilled",
    composition: [["sliced-meat", 45, "main"], ["potato", 20, "side"], ["mixed-vegetables", 20, "side"], ["black-pepper", 10, "seasoning", "seasoning"], ["sea-salt", 5, "seasoning", "seasoning"]],
    taste: ["savory", "rich"],
    texture: ["tender meat", "browned edges"],
    risks: [],
    verdict: "A solid choice if you want a meat-forward main; check the cut and sauce.",
    zhVerdict: "想吃肉类主菜时可以考虑，建议看清肉的部位和酱汁。",
    nlVerdict: "Een stevige keuze voor een vleesgericht hoofdgerecht.",
  },
  seafood: {
    method: "grilled",
    composition: [["fish-fillet", 45, "main"], ["steamed-rice", 20, "base"], ["mixed-vegetables", 20, "side"], ["olive-oil", 10, "finish", "seasoning"], ["lemon", 5, "finish"]],
    taste: ["savory", "fresh"],
    texture: ["flaky fish", "light sauce"],
    risks: ["contains-fish"],
    verdict: "Good for a lighter protein choice; confirm shellfish or raw elements if sensitive.",
    zhVerdict: "想吃相对轻的蛋白质主菜时适合，过敏者需确认海鲜细节。",
    nlVerdict: "Goed voor een lichter eiwitgerecht; controleer zeevruchten bij allergie.",
  },
  vegetable: {
    method: "simmered",
    composition: [["mixed-vegetables", 40, "body"], ["tomato", 20, "sauce-base"], ["eggplant-global", 20, "body"], ["olive-oil", 15, "richness", "seasoning"], ["garlic", 5, "aroma", "seasoning"]],
    taste: ["savory", "mild", "herbal"],
    texture: ["soft vegetables", "saucy body"],
    risks: [],
    verdict: "Good when you want a vegetable-led dish; ask whether it is fully vegetarian.",
    zhVerdict: "想吃蔬菜为主的菜时适合，但最好确认是否完全素食。",
    nlVerdict: "Goed als je iets met groenten wilt; vraag of het volledig vegetarisch is.",
  },
  bread: {
    method: "assembled",
    composition: [["bread", 40, "base"], ["ground-meat", 25, "filling"], ["mixed-vegetables", 20, "body"], ["yogurt", 10, "sauce"], ["garlic", 5, "aroma", "seasoning"]],
    taste: ["savory", "tangy"],
    texture: ["bready", "filled"],
    risks: ["contains-gluten", "contains-dairy"],
    verdict: "Good for a casual, handheld or shareable item; check sauce and filling.",
    zhVerdict: "适合想吃轻便、有馅料或可分享菜品的时候。",
    nlVerdict: "Goed voor iets informeels, gevuld of deelbaar.",
  },
  dessert: {
    method: "baked",
    composition: [["sugar", 30, "sweetness"], ["cream", 25, "richness"], ["chocolate", 20, "flavor"], ["berries", 15, "topping"], ["vanilla", 10, "aroma", "seasoning"]],
    taste: ["sweet", "rich"],
    texture: ["soft", "creamy or crisp"],
    risks: ["contains-dairy"],
    verdict: "Best when you want a sweet finish; check if it is creamy, fried, or pastry-heavy.",
    zhVerdict: "适合作为甜点收尾，建议留意是否偏奶油、油炸或酥皮。",
    nlVerdict: "Goed als zoete afsluiter; let op room, frituur of bladerdeeg.",
  },
  starter: {
    method: "assembled",
    composition: [["mixed-vegetables", 35, "body"], ["bread", 25, "base"], ["yogurt", 20, "sauce"], ["olive-oil", 15, "finish", "seasoning"], ["garlic", 5, "aroma", "seasoning"]],
    taste: ["savory", "fresh"],
    texture: ["small bites", "saucy or crisp"],
    risks: ["contains-gluten", "contains-dairy"],
    verdict: "Useful as a starter or sharing item; check portion size before ordering too many.",
    zhVerdict: "适合作为前菜或分享小食，建议先确认分量。",
    nlVerdict: "Geschikt als voorgerecht of deelgerecht; check de portie.",
  },
  salad: {
    method: "assembled",
    composition: [["mixed-vegetables", 45, "base"], ["cucumber", 20, "freshness"], ["tomato", 20, "body"], ["olive-oil", 10, "dressing", "seasoning"], ["lemon", 5, "finish"]],
    taste: ["fresh", "mild", "tangy"],
    texture: ["crisp vegetables", "light dressing"],
    risks: [],
    verdict: "Good for a lighter choice; ask about cheese, meat, or creamy dressing.",
    zhVerdict: "想吃清爽一些时适合，建议确认是否含奶酪、肉或厚酱。",
    nlVerdict: "Goed voor iets lichters; vraag naar kaas, vlees of romige dressing.",
  },
  dumpling: {
    method: "steamed",
    composition: [["dumpling-wrapper", 45, "wrapper"], ["minced-pork", 25, "filling"], ["mixed-vegetables", 15, "filling"], ["soy-sauce", 10, "dip", "seasoning"], ["sesame-oil", 5, "aroma", "seasoning"]],
    taste: ["savory", "umami"],
    texture: ["soft wrapper", "juicy filling"],
    risks: ["contains-gluten", "contains-soy", "contains-pork"],
    verdict: "Good as a shareable bite; check filling if avoiding pork or gluten.",
    zhVerdict: "适合分享点几份，忌猪肉或麸质者需要确认馅料。",
    nlVerdict: "Goed om te delen; controleer de vulling bij varkensvlees of gluten.",
  },
  "fried-snack": {
    method: "deep-fried",
    composition: [["potato", 30, "base"], ["fried-chicken", 25, "protein"], ["tempura-batter", 25, "coating"], ["sea-salt", 10, "seasoning", "seasoning"], ["black-pepper", 10, "seasoning", "seasoning"]],
    taste: ["savory", "rich"],
    texture: ["crisp exterior", "soft center"],
    risks: ["contains-gluten", "contains-egg"],
    verdict: "Good if you want something crisp and snackable; it will usually feel heavier.",
    zhVerdict: "想吃酥脆小食时适合，但通常会偏厚重。",
    nlVerdict: "Goed voor iets knapperigs; meestal wat zwaarder.",
  },
  sandwich: {
    method: "assembled",
    composition: [["bread", 40, "base"], ["chicken", 25, "protein"], ["mixed-vegetables", 20, "filling"], ["cheese", 10, "richness"], ["mustard", 5, "seasoning", "seasoning"]],
    taste: ["savory", "mild"],
    texture: ["bready", "layered filling"],
    risks: ["contains-gluten", "contains-dairy"],
    verdict: "Good for a quick meal; check whether it is toasted, saucy, or very large.",
    zhVerdict: "适合快速吃一餐，建议确认是否烤过、酱多不多、分量多大。",
    nlVerdict: "Goed voor een snelle maaltijd; check of hij getoast, sauzig of groot is.",
  },
  stew: {
    method: "braised",
    composition: [["beef", 35, "protein"], ["potato", 25, "body"], ["mushrooms", 20, "body"], ["red-wine", 15, "sauce-base", "seasoning"], ["black-pepper", 5, "seasoning", "seasoning"]],
    taste: ["savory", "rich"],
    texture: ["tender pieces", "deep sauce"],
    risks: ["contains-alcohol"],
    verdict: "Good if you want something warm, saucy, and hearty.",
    zhVerdict: "想吃热乎、有酱汁、偏扎实的菜时适合。",
    nlVerdict: "Goed als je iets warms, sausigs en stevigs wilt.",
  },
};

const groups = [
  ["thai", "08", 18, [
    ["miang-kham", "Miang Kham", "泰式叶包小吃", "starter"], ["yam-nua", "Yam Nua", "泰式牛肉沙拉", "salad"], ["pla-rad-prik", "Pla Rad Prik", "泰式辣酱鱼", "seafood"], ["hoy-tod", "Hoy Tod", "泰式蚵仔煎", "fried-snack"], ["moo-ping", "Moo Ping", "泰式烤猪肉串", "meat"], ["gai-yang", "Gai Yang", "泰式烤鸡", "meat"], ["nam-tok-moo", "Nam Tok Moo", "泰式瀑布猪肉沙拉", "salad"], ["khanom-jeen-nam-ya", "Khanom Jeen Nam Ya", "泰式咖喱米线", "noodle"], ["gaeng-pa", "Gaeng Pa", "泰式森林咖喱", "curry"], ["chu-chee-curry", "Chu Chee Curry", "泰式浓咖喱", "curry"], ["kai-med-mamuang", "Kai Med Mamuang", "泰式腰果鸡", "meat"], ["tod-man-pla", "Tod Man Pla", "泰式鱼饼", "fried-snack"], ["yum-woon-sen", "Yum Woon Sen", "泰式粉丝沙拉", "salad"], ["sai-ua", "Sai Ua", "泰北香肠", "meat"], ["khao-moo-daeng", "Khao Moo Daeng", "泰式叉烧饭", "rice"],
  ]],
  ["japanese", "09", 18, [
    ["onigiri", "Onigiri", "日式饭团", "rice"], ["donburi", "Donburi", "日式盖饭", "rice"], ["oyakodon", "Oyakodon", "亲子丼", "rice"], ["katsudon", "Katsudon", "炸猪排丼", "rice"], ["gyudon", "Gyudon", "牛丼", "rice"], ["unagi-don", "Unagi Don", "鳗鱼饭", "seafood"], ["shabu-shabu", "Shabu Shabu", "日式涮锅", "meat"], ["sukiyaki", "Sukiyaki", "寿喜烧", "stew"], ["omurice", "Omurice", "蛋包饭", "rice"], ["yakisoba", "Yakisoba", "日式炒面", "noodle"], ["chawanmushi", "Chawanmushi", "茶碗蒸", "starter"], ["agedashi-tofu", "Agedashi Tofu", "日式炸豆腐", "starter"], ["tamagoyaki", "Tamagoyaki", "玉子烧", "starter"], ["nabeyaki-udon", "Nabeyaki Udon", "锅烧乌冬", "noodle"], ["zaru-soba", "Zaru Soba", "冷荞麦面", "noodle"],
  ]],
  ["korean", "10", 18, [
    ["samgyetang", "Samgyetang", "参鸡汤", "soup"], ["dak-galbi", "Dak Galbi", "韩式辣炒鸡", "meat"], ["kimchi-jeon", "Kimchi Jeon", "泡菜煎饼", "fried-snack"], ["haemul-jjigae", "Haemul Jjigae", "韩式海鲜锅", "seafood"], ["seolleongtang", "Seolleongtang", "牛骨汤", "soup"], ["galbitang", "Galbitang", "牛排骨汤", "soup"], ["yukgaejang", "Yukgaejang", "辣牛肉汤", "soup"], ["jjolmyeon", "Jjolmyeon", "韩式拌冷面", "noodle"], ["bibim-guksu", "Bibim Guksu", "韩式辣拌面", "noodle"], ["kongguksu", "Kongguksu", "豆浆冷面", "noodle"], ["jokbal", "Jokbal", "韩式猪蹄", "meat"], ["bindaetteok", "Bindaetteok", "绿豆煎饼", "fried-snack"], ["gyeran-jjim", "Gyeran Jjim", "韩式蒸蛋", "starter"], ["odeng", "Odeng", "韩式鱼糕", "starter"], ["dakgangjeong", "Dakgangjeong", "韩式甜辣炸鸡", "fried-snack"],
  ]],
  ["chinese", "11", 18, [
    ["hong-shao-rou", "Hong Shao Rou", "红烧肉", "stew"], ["guo-bao-rou", "Guo Bao Rou", "锅包肉", "fried-snack"], ["zhajiangmian", "Zhajiangmian", "炸酱面", "noodle"], ["biang-biang-mian", "Biang Biang Mian", "biangbiang 面", "noodle"], ["siu-mai", "Siu Mai", "烧卖", "dumpling"], ["har-gow", "Har Gow", "虾饺", "dumpling"], ["congee", "Congee", "粥", "rice"], ["roast-goose", "Roast Goose", "烧鹅", "meat"], ["beef-noodle-soup", "Beef Noodle Soup", "牛肉面", "noodle"], ["scallion-pancake", "Scallion Pancake", "葱油饼", "fried-snack"], ["egg-fried-rice", "Egg Fried Rice", "蛋炒饭", "rice"], ["steamed-fish-chinese", "Chinese Steamed Fish", "清蒸鱼", "seafood"], ["yu-xiang-rou-si", "Yu Xiang Rou Si", "鱼香肉丝", "meat"], ["hot-and-sour-soup", "Hot and Sour Soup", "酸辣汤", "soup"], ["claypot-rice", "Claypot Rice", "煲仔饭", "rice"],
  ]],
  ["italian", "01", 28, [
    ["pasta-puttanesca", "Pasta Puttanesca", "普塔内斯卡意面", "noodle"], ["pasta-arrabbiata", "Pasta Arrabbiata", "香辣番茄意面", "noodle"], ["orecchiette-cime-di-rapa", "Orecchiette con Cime di Rapa", "猫耳朵菜心意面", "noodle"], ["spaghetti-alla-nerano", "Spaghetti alla Nerano", "内拉诺西葫芦意面", "noodle"], ["pasta-alla-norma", "Pasta alla Norma", "西西里茄子意面", "noodle"], ["vitello-tonnato", "Vitello Tonnato", "金枪鱼酱小牛肉", "meat"], ["ribollita", "Ribollita", "托斯卡纳蔬菜面包汤", "soup"], ["pappa-al-pomodoro", "Pappa al Pomodoro", "番茄面包汤", "soup"], ["bistecca-alla-fiorentina", "Bistecca alla Fiorentina", "佛罗伦萨牛排", "meat"], ["porchetta", "Porchetta", "意式香草烤猪肉", "meat"], ["fritto-misto", "Fritto Misto", "意式混合炸物", "fried-snack"], ["suppli", "Suppli", "意式炸饭团", "fried-snack"], ["panelle", "Panelle", "西西里鹰嘴豆炸饼", "fried-snack"], ["sfogliatella", "Sfogliatella", "意式贝壳酥", "dessert"], ["zeppole", "Zeppole", "意式炸甜甜圈", "dessert"],
  ]],
  ["french", "03", 23, [
    ["blanquette-de-veau", "Blanquette de Veau", "法式白汁炖小牛肉", "stew"], ["pot-au-feu", "Pot-au-Feu", "法式清炖牛肉蔬菜", "stew"], ["hachis-parmentier", "Hachis Parmentier", "法式肉末土豆泥焗菜", "stew"], ["tartiflette", "Tartiflette", "法式土豆培根奶酪焗菜", "stew"], ["aligot", "Aligot", "奶酪土豆泥", "vegetable"], ["gougeres", "Gougeres", "法式奶酪泡芙", "starter"], ["pissaladiere", "Pissaladiere", "尼斯洋葱咸派", "bread"], ["chicken-chasseur", "Chicken Chasseur", "猎人酱鸡", "stew"], ["quenelles", "Quenelles", "法式鱼肉丸", "seafood"], ["brandade-de-morue", "Brandade de Morue", "盐鳕鱼泥", "seafood"], ["mouclade", "Mouclade", "法式奶油贻贝", "seafood"], ["galette-bretonne", "Galette Bretonne", "布列塔尼荞麦饼", "bread"], ["ile-flottante", "Ile Flottante", "漂浮岛甜点", "dessert"], ["clafoutis", "Clafoutis", "法式水果布丁蛋糕", "dessert"], ["mille-feuille", "Mille-Feuille", "拿破仑酥", "dessert"],
  ]],
  ["german", "06", 18, [
    ["leberknoedel", "Leberknoedel", "德国肝丸汤", "soup"], ["zwiebelrostbraten", "Zwiebelrostbraten", "洋葱烤牛排", "meat"], ["himmel-und-erde", "Himmel und Erde", "苹果土豆血肠菜", "meat"], ["gruene-sosse", "Gruene Sosse", "法兰克福绿酱", "starter"], ["kassler", "Kassler", "烟熏猪排", "meat"], ["eisbein", "Eisbein", "德国猪肘", "meat"], ["reibekuchen", "Reibekuchen", "德式土豆饼", "fried-snack"], ["sauerbraten-rheinischer", "Rheinischer Sauerbraten", "莱茵酸味炖牛肉", "stew"], ["matjes-broetchen", "Matjes Broetchen", "鲱鱼三明治", "sandwich"], ["kartoffelpuffer", "Kartoffelpuffer", "土豆煎饼", "fried-snack"], ["obatzda", "Obatzda", "巴伐利亚奶酪酱", "starter"], ["knodel", "Knoedel", "德式面包丸子", "starter"], ["senfeier", "Senfeier", "芥末酱鸡蛋", "vegetable"], ["leberwurst-brot", "Leberwurst Brot", "肝肠面包", "sandwich"], ["bienenstich", "Bienenstich", "蜂蜇蛋糕", "dessert"],
  ]],
  ["dutch", "02", 21, [
    ["hutspot", "Hutspot", "胡萝卜洋葱土豆泥", "stew"], ["zuurkoolstamppot", "Zuurkoolstamppot", "酸菜土豆泥", "stew"], ["kaassouffle", "Kaassouffle", "荷兰炸奶酪酥", "fried-snack"], ["slavink", "Slavink", "培根肉卷", "meat"], ["gehaktbal", "Gehaktbal", "荷兰肉丸", "meat"], ["huzarensalade", "Huzarensalade", "荷兰土豆沙拉", "salad"], ["saucijzenbroodje", "Saucijzenbroodje", "荷兰香肠酥皮卷", "bread"], ["worstenbroodje", "Worstenbroodje", "香肠面包卷", "bread"], ["tompouce", "Tompouce", "荷兰粉色千层酥", "dessert"], ["vla", "Vla", "荷兰奶冻", "dessert"], ["balkenbrij", "Balkenbrij", "荷兰杂碎肉糕", "meat"], ["wentelteefjes", "Wentelteefjes", "荷兰煎吐司", "dessert"], ["krentenbol", "Krentenbol", "葡萄干面包", "bread"], ["rookworst-broodje", "Rookworst Broodje", "烟熏香肠面包", "sandwich"], ["asperges-met-ham", "Asperges met Ham", "火腿芦笋", "vegetable"],
  ]],
  ["belgian", "07", 18, [
    ["mitraillette", "Mitraillette", "比利时薯条肉排三明治", "sandwich"], ["asperges-op-vlaamse-wijze", "Asperges op Vlaamse Wijze", "佛兰德芦笋", "vegetable"], ["salade-liegeoise", "Salade Liegeoise", "列日沙拉", "salad"], ["jambon-d-ardenne", "Jambon d'Ardenne", "阿登火腿", "starter"], ["cuberdon", "Cuberdon", "比利时紫锥糖", "dessert"], ["mattentaart", "Mattentaart", "比利时奶酪小挞", "dessert"], ["boulet-sauce-lapin", "Boulet Sauce Lapin", "列日甜酸酱肉丸", "meat"], ["stoemp-saucisse", "Stoemp Saucisse", "蔬菜土豆泥香肠", "stew"], ["crevette-grise-toast", "Crevette Grise Toast", "灰虾吐司", "seafood"], ["paling-in-t-groen", "Paling in 't Groen", "绿酱鳗鱼", "seafood"], ["americain-prepare", "Americain Prepare", "比利时调味生牛肉", "starter"], ["tarte-au-riz", "Tarte au Riz", "比利时米布丁派", "dessert"], ["couque-de-dinant", "Couque de Dinant", "迪南硬饼", "dessert"], ["boudin-blanc", "Boudin Blanc", "白香肠", "meat"], ["lapin-aux-pruneaux", "Lapin aux Pruneaux", "李子炖兔肉", "stew"],
  ]],
  ["greek", "04", 59, [
    ["magiritsa", "Magiritsa", "希腊复活节羊杂汤", "soup"], ["kokoretsi", "Kokoretsi", "希腊烤羊杂卷", "meat"], ["patsas", "Patsas", "希腊肚汤", "soup"], ["tiropita", "Tiropita", "希腊奶酪派", "bread"], ["koulouri", "Koulouri", "希腊芝麻面包圈", "bread"], ["dakos", "Dakos", "克里特番茄面包沙拉", "salad"], ["apaki", "Apaki", "克里特烟熏猪肉", "meat"], ["sfakiani-pita", "Sfakiani Pita", "克里特蜂蜜奶酪饼", "dessert"], ["giouvetsi", "Giouvetsi", "希腊番茄肉焗米粒面", "stew"], ["kotopoulo-lemonato", "Kotopoulo Lemonato", "希腊柠檬鸡", "meat"], ["psarosoupa", "Psarosoupa", "希腊鱼汤", "seafood"], ["marides", "Marides", "炸小鱼", "fried-snack"], ["tyropitakia", "Tyropitakia", "希腊小奶酪派", "fried-snack"], ["ladopita", "Ladopita", "希腊橄榄油甜饼", "dessert"], ["moustalevria", "Moustalevria", "葡萄汁布丁", "dessert"],
  ]],
  ["spanish", "05", 13, [
    ["cocido-madrileno", "Cocido Madrileno", "马德里炖菜", "stew"], ["callos-a-la-madrilena", "Callos a la Madrilena", "马德里牛肚", "stew"], ["pisto", "Pisto", "西班牙炖蔬菜", "vegetable"], ["salmorejo", "Salmorejo", "西班牙冷番茄汤", "soup"], ["boquerones", "Boquerones", "西班牙小银鱼", "seafood"], ["bacalao-al-pil-pil", "Bacalao al Pil Pil", "巴斯克鳕鱼", "seafood"], ["albondigas-spanish", "Spanish Albondigas", "西班牙肉丸", "meat"], ["empanada-gallega", "Empanada Gallega", "加利西亚馅饼", "bread"], ["fideua", "Fideua", "西班牙海鲜短面", "noodle"], ["migas", "Migas", "西班牙炒面包屑", "fried-snack"], ["chistorra", "Chistorra", "西班牙细香肠", "meat"], ["tarta-de-santiago", "Tarta de Santiago", "圣地亚哥杏仁蛋糕", "dessert"], ["flan-de-huevo", "Flan de Huevo", "西班牙鸡蛋布丁", "dessert"], ["ensaladilla-rusa", "Ensaladilla Rusa", "西式土豆沙拉", "salad"], ["pan-con-jamon", "Pan con Jamon", "火腿番茄面包", "sandwich"],
  ]],
  ["indian", "15", 13, [
    ["masala-dosa", "Masala Dosa", "印度土豆香料薄饼", "bread"], ["idli", "Idli", "印度蒸米糕", "starter"], ["vada", "Vada", "印度炸豆饼", "fried-snack"], ["pav-bhaji", "Pav Bhaji", "印度蔬菜咖喱面包", "bread"], ["pani-puri", "Pani Puri", "印度空心脆球", "starter"], ["aloo-gobi", "Aloo Gobi", "土豆花菜咖喱", "vegetable"], ["saag-paneer", "Saag Paneer", "菠菜奶酪咖喱", "curry"], ["dal-tadka", "Dal Tadka", "印度黄豆汤", "soup"], ["fish-curry-indian", "Indian Fish Curry", "印度鱼咖喱", "seafood"], ["lamb-korma", "Lamb Korma", "印度奶香羊肉咖喱", "curry"], ["keema-matar", "Keema Matar", "印度肉末豌豆", "meat"], ["prawn-masala", "Prawn Masala", "印度香料虾", "seafood"], ["kulfi", "Kulfi", "印度冰淇淋", "dessert"], ["jalebi", "Jalebi", "印度糖浆炸圈", "dessert"], ["poha", "Poha", "印度扁米早餐", "rice"],
  ]],
  ["vietnamese", "16", 13, [
    ["banh-cuon", "Banh Cuon", "越南蒸米卷", "starter"], ["bun-thit-nuong", "Bun Thit Nuong", "越式烤肉米粉", "noodle"], ["bun-rieu", "Bun Rieu", "越式蟹番茄粉汤", "noodle"], ["mi-quang", "Mi Quang", "广南面", "noodle"], ["banh-canh", "Banh Canh", "越南粗粉汤", "noodle"], ["ca-kho-to", "Ca Kho To", "越式砂锅鱼", "seafood"], ["thit-kho", "Thit Kho", "越式焦糖卤肉", "stew"], ["com-ga", "Com Ga", "越式鸡饭", "rice"], ["bo-kho", "Bo Kho", "越式牛腩汤", "stew"], ["cha-ca-la-vong", "Cha Ca La Vong", "河内香草鱼", "seafood"], ["nem-nuong", "Nem Nuong", "越式烤猪肉卷", "meat"], ["banh-khot", "Banh Khot", "越式迷你煎饼", "fried-snack"], ["banh-bo", "Banh Bo", "越式蜂窝糕", "dessert"], ["che-ba-mau", "Che Ba Mau", "越式三色甜品", "dessert"], ["goi-ga", "Goi Ga", "越式鸡丝沙拉", "salad"],
  ]],
  ["indonesian", "17", 13, [
    ["soto-betawi", "Soto Betawi", "雅加达牛肉椰奶汤", "soup"], ["rawon", "Rawon", "印尼黑牛肉汤", "soup"], ["gudeg", "Gudeg", "日惹菠萝蜜炖菜", "stew"], ["ayam-goreng", "Ayam Goreng", "印尼炸鸡", "fried-snack"], ["opor-ayam", "Opor Ayam", "椰奶炖鸡", "curry"], ["sayur-lodeh", "Sayur Lodeh", "印尼椰奶蔬菜", "vegetable"], ["ketoprak", "Ketoprak", "印尼豆腐粉丝花生酱", "salad"], ["pecel", "Pecel", "印尼花生酱蔬菜", "salad"], ["martabak-telur", "Martabak Telur", "印尼鸡蛋煎饼", "fried-snack"], ["martabak-manis", "Martabak Manis", "印尼甜厚饼", "dessert"], ["lontong-sayur", "Lontong Sayur", "椰奶蔬菜米糕", "rice"], ["mie-ayam", "Mie Ayam", "印尼鸡肉面", "noodle"], ["pempek", "Pempek", "印尼鱼饼", "seafood"], ["siomay-bandung", "Siomay Bandung", "万隆鱼肉烧卖", "dumpling"], ["klepon", "Klepon", "椰丝糯米球", "dessert"],
  ]],
  ["malaysian-singaporean", "18", 13, [
    ["mee-siam", "Mee Siam", "马来酸辣米粉", "noodle"], ["curry-laksa", "Curry Laksa", "咖喱叻沙", "noodle"], ["mee-rebus", "Mee Rebus", "马来卤面", "noodle"], ["rojak", "Rojak", "马来拌水果蔬菜", "salad"], ["otak-otak", "Otak-Otak", "香料鱼糕", "seafood"], ["ayam-masak-merah", "Ayam Masak Merah", "红酱鸡", "meat"], ["beef-rendang-malaysian", "Malaysian Beef Rendang", "马来仁当牛肉", "stew"], ["mee-pok", "Mee Pok", "新加坡薄面", "noodle"], ["fish-head-curry", "Fish Head Curry", "鱼头咖喱", "seafood"], ["popiah", "Popiah", "薄饼卷", "starter"], ["kueh-pie-tee", "Kueh Pie Tee", "杯仔薄饼", "starter"], ["mee-hoon-kueh", "Mee Hoon Kueh", "手撕面片汤", "noodle"], ["chwee-kueh", "Chwee Kueh", "水粿", "starter"], ["ondeh-ondeh", "Ondeh Ondeh", "椰丝糯米球", "dessert"], ["kueh-lapis", "Kueh Lapis", "千层糕", "dessert"],
  ]],
  ["turkish", "19", 13, [
    ["iskender-kebab", "Iskender Kebab", "伊斯肯德尔烤肉", "meat"], ["adana-durum", "Adana Durum", "阿达纳烤肉卷", "sandwich"], ["hunkar-begendi", "Hunkar Begendi", "苏丹茄泥炖肉", "stew"], ["karniyarik", "Karniyarik", "土耳其酿茄子", "vegetable"], ["lahana-sarmasi", "Lahana Sarmasi", "卷心菜肉米卷", "stew"], ["yaprak-sarma", "Yaprak Sarma", "葡萄叶米卷", "starter"], ["ezogelin-corbasi", "Ezogelin Corbasi", "土耳其红扁豆汤", "soup"], ["cilbir", "Cilbir", "酸奶水波蛋", "starter"], ["sucuklu-yumurta", "Sucuklu Yumurta", "土耳其香肠煎蛋", "meat"], ["gozleme", "Gozleme", "土耳其馅饼", "bread"], ["sigara-boregi", "Sigara Boregi", "奶酪卷酥", "fried-snack"], ["midye-dolma", "Midye Dolma", "酿贻贝", "seafood"], ["balik-ekmek", "Balik Ekmek", "鱼三明治", "sandwich"], ["sutlac", "Sutlac", "土耳其米布丁", "dessert"], ["lokma", "Lokma", "糖浆炸面球", "dessert"],
  ]],
  ["middle-eastern", "20", 14, [
    ["mutabbal", "Mutabbal", "中东茄子芝麻酱", "starter"], ["labneh-balls", "Labneh Balls", "中东酸奶奶酪球", "starter"], ["manakish-zaatar", "Manakish Zaatar", "扎塔尔烤饼", "bread"], ["lahm-bi-ajin", "Lahm bi Ajin", "中东肉馅薄饼", "bread"], ["musakhan", "Musakhan", "巴勒斯坦洋葱鸡", "meat"], ["maqluba", "Maqluba", "倒扣饭", "rice"], ["freekeh-chicken", "Freekeh Chicken", "青麦鸡肉饭", "rice"], ["molokhia", "Molokhia", "锦葵叶汤", "soup"], ["sayadieh", "Sayadieh", "中东鱼饭", "seafood"], ["samkeh-harra", "Samkeh Harra", "辣味烤鱼", "seafood"], ["warak-enab", "Warak Enab", "葡萄叶卷", "starter"], ["fatteh", "Fatteh", "酸奶脆饼鹰嘴豆", "starter"], ["umm-ali", "Umm Ali", "埃及面包布丁", "dessert"], ["basbousa", "Basbousa", "中东粗麦甜糕", "dessert"], ["muhammara", "Muhammara", "核桃红椒酱", "starter"],
  ]],
  ["mexican", "21", 13, [
    ["sopes", "Sopes", "墨西哥厚玉米饼", "starter"], ["gorditas", "Gorditas", "墨西哥夹馅玉米饼", "bread"], ["tostadas", "Tostadas", "墨西哥脆玉米饼", "fried-snack"], ["torta-mexicana", "Torta Mexicana", "墨西哥三明治", "sandwich"], ["birria-tacos", "Birria Tacos", "比利亚炖肉玉米卷", "meat"], ["barbacoa", "Barbacoa", "墨西哥慢烤肉", "meat"], ["cochinita-pibil", "Cochinita Pibil", "尤卡坦胭脂猪肉", "stew"], ["chilaquiles", "Chilaquiles", "墨西哥酱汁玉米片", "fried-snack"], ["huevos-rancheros", "Huevos Rancheros", "牧场鸡蛋", "rice"], ["sopa-de-lima", "Sopa de Lima", "青柠鸡汤", "soup"], ["elote", "Elote", "墨西哥街头玉米", "starter"], ["esquites", "Esquites", "杯装玉米粒", "starter"], ["arroz-rojo", "Arroz Rojo", "墨西哥红米饭", "rice"], ["camarones-a-la-diabla", "Camarones a la Diabla", "魔鬼辣虾", "seafood"], ["tres-leches-cake", "Tres Leches Cake", "三奶蛋糕", "dessert"],
  ]],
  ["american", "22", 21, [
    ["pulled-pork-sandwich", "Pulled Pork Sandwich", "美式手撕猪肉三明治", "sandwich"], ["philly-cheesesteak", "Philly Cheesesteak", "费城芝士牛肉三明治", "sandwich"], ["sloppy-joe", "Sloppy Joe", "美式肉酱汉堡", "sandwich"], ["chicken-and-waffles", "Chicken and Waffles", "炸鸡华夫饼", "fried-snack"], ["meatloaf", "Meatloaf", "美式肉糕", "meat"], ["pot-roast", "Pot Roast", "美式炖牛肉", "stew"], ["jambalaya", "Jambalaya", "什锦香料饭", "rice"], ["gumbo", "Gumbo", "秋葵浓汤", "soup"], ["shrimp-and-grits", "Shrimp and Grits", "虾配玉米糊", "seafood"], ["crab-cakes", "Crab Cakes", "蟹肉饼", "seafood"], ["chili-con-carne", "Chili con Carne", "美式辣肉豆炖菜", "stew"], ["cornbread", "Cornbread", "玉米面包", "bread"], ["coleslaw", "Coleslaw", "卷心菜沙拉", "salad"], ["key-lime-pie", "Key Lime Pie", "青柠派", "dessert"], ["brownie", "Brownie", "布朗尼", "dessert"],
  ]],
  ["british-irish", "23", 14, [
    ["toad-in-the-hole", "Toad in the Hole", "约克郡布丁香肠", "meat"], ["steak-and-kidney-pie", "Steak and Kidney Pie", "牛排腰子派", "stew"], ["cottage-pie", "Cottage Pie", "牛肉土豆泥派", "stew"], ["bubble-and-squeak", "Bubble and Squeak", "煎土豆卷心菜饼", "fried-snack"], ["welsh-rarebit", "Welsh Rarebit", "威尔士奶酪吐司", "bread"], ["jacket-potato", "Jacket Potato", "英式烤土豆", "vegetable"], ["black-pudding", "Black Pudding", "黑布丁血肠", "meat"], ["kedgeree", "Kedgeree", "英式咖喱鱼饭", "rice"], ["cock-a-leekie", "Cock-a-Leekie", "苏格兰鸡葱汤", "soup"], ["cullen-skink", "Cullen Skink", "苏格兰烟熏鱼汤", "seafood"], ["welsh-cawl", "Welsh Cawl", "威尔士羊肉汤", "soup"], ["rarebit-toastie", "Rarebit Toastie", "奶酪烤三明治", "sandwich"], ["eton-mess", "Eton Mess", "伊顿麦斯甜点", "dessert"], ["bread-and-butter-pudding", "Bread and Butter Pudding", "面包黄油布丁", "dessert"], ["treacle-tart", "Treacle Tart", "糖浆挞", "dessert"],
  ]],
  ["moroccan", "24", 13, [
    ["zaalouk-salad", "Zaalouk Salad", "摩洛哥茄子沙拉", "salad"], ["bissara", "Bissara", "摩洛哥蚕豆汤", "soup"], ["rfissa", "Rfissa", "摩洛哥鸡肉扁豆薄饼", "stew"], ["tanjiya", "Tanjiya", "马拉喀什慢炖肉", "stew"], ["msemen", "Msemen", "摩洛哥方形煎饼", "bread"], ["baghrir", "Baghrir", "千孔薄饼", "bread"], ["khobz", "Khobz", "摩洛哥面包", "bread"], ["sardine-kefta", "Sardine Kefta", "沙丁鱼丸", "seafood"], ["briouat-kefta", "Briouat Kefta", "摩洛哥肉馅酥角", "fried-snack"], ["chermoula-fish", "Chermoula Fish", "香草腌烤鱼", "seafood"], ["lamb-prune-tagine", "Lamb Prune Tagine", "羊肉西梅塔吉锅", "stew"], ["chicken-preserved-lemon", "Chicken with Preserved Lemon", "腌柠檬鸡", "stew"], ["sellou", "Sellou", "摩洛哥芝麻坚果甜点", "dessert"], ["chebakia", "Chebakia", "蜂蜜芝麻花形甜点", "dessert"], ["moroccan-omelette", "Moroccan Omelette", "摩洛哥番茄煎蛋", "starter"],
  ]],
  ["portuguese", "25", 13, [
    ["bacalhau-com-natas", "Bacalhau com Natas", "奶油鳕鱼焗菜", "seafood"], ["bacalhau-a-gomes-de-sa", "Bacalhau a Gomes de Sa", "葡式土豆鳕鱼", "seafood"], ["bacalhau-a-lagareiro", "Bacalhau a Lagareiro", "橄榄油烤鳕鱼", "seafood"], ["sardinhas-assadas", "Sardinhas Assadas", "烤沙丁鱼", "seafood"], ["arroz-de-pato", "Arroz de Pato", "葡式鸭饭", "rice"], ["cozido-a-portuguesa", "Cozido a Portuguesa", "葡式杂肉炖菜", "stew"], ["feijoada-transmontana", "Feijoada Transmontana", "葡式豆炖肉", "stew"], ["alheira", "Alheira", "葡式香肠", "meat"], ["frango-assado", "Frango Assado", "葡式烤鸡", "meat"], ["sopa-da-pedra", "Sopa da Pedra", "葡式石头汤", "soup"], ["arroz-de-tamboril", "Arroz de Tamboril", "葡式鮟鱇鱼饭", "seafood"], ["bola-de-berlim", "Bola de Berlim", "葡式夹心甜甜圈", "dessert"], ["serradura", "Serradura", "木糠布丁", "dessert"], ["salada-de-polvo", "Salada de Polvo", "葡式章鱼沙拉", "salad"], ["prego", "Prego", "葡式牛排三明治", "sandwich"],
  ]],
  ["surinamese", "26", 13, [
    ["herheri", "Herheri", "苏里南根茎拼盘", "vegetable"], ["moksi-alesi", "Moksi Alesi", "苏里南混合饭", "rice"], ["bruine-bonen-met-rijst", "Bruine Bonen met Rijst", "红豆饭", "rice"], ["pastei-surinamese", "Surinamese Pastei", "苏里南鸡肉派", "stew"], ["pitjel", "Pitjel", "苏里南花生酱蔬菜", "salad"], ["goedangan", "Goedangan", "椰丝拌蔬菜", "salad"], ["pom-broodje", "Broodje Pom", "鸡肉薯蓣三明治", "sandwich"], ["bakkeljauw-rijst", "Bakkeljauw Rijst", "咸鱼饭", "seafood"], ["kip-ketjap", "Kip Ketjap", "甜酱油鸡", "meat"], ["doksa", "Doksa", "苏里南鸭肉", "meat"], ["sate-ku-batata", "Sate ku Batata", "沙爹配土豆", "meat"], ["cassave-soep", "Cassave Soep", "木薯汤", "soup"], ["fiadoe", "Fiadoe", "苏里南甜面包", "dessert"], ["maizena-koekjes", "Maizena Koekjes", "玉米淀粉饼干", "dessert"], ["bara-bakkeljauw", "Bara Bakkeljauw", "炸豆饼配咸鱼", "fried-snack"],
  ]],
  ["ethiopian", "27", 13, [
    ["doro-alicha", "Doro Alicha", "埃塞温和鸡肉炖菜", "stew"], ["atkilt-wat", "Atkilt Wat", "埃塞蔬菜炖菜", "vegetable"], ["azifa", "Azifa", "埃塞扁豆沙拉", "salad"], ["timatim-salata", "Timatim Salata", "埃塞番茄沙拉", "salad"], ["dulet", "Dulet", "埃塞香料内脏", "meat"], ["zigni", "Zigni", "厄立特里亚辣炖肉", "stew"], ["fitfit", "Fitfit", "英吉拉拌菜", "bread"], ["chechebsa", "Chechebsa", "埃塞撕饼早餐", "bread"], ["genfo", "Genfo", "埃塞麦粥", "rice"], ["kinche", "Kinche", "埃塞碎麦粥", "rice"], ["asa-tibs-fish", "Asa Tibs Fish", "埃塞煎鱼块", "seafood"], ["ye-beg-tibs", "Ye Beg Tibs", "埃塞羊肉炒块", "meat"], ["key-sir", "Key Sir", "埃塞甜菜土豆", "vegetable"], ["baklava-ethiopian-style", "Ethiopian Baklava", "埃塞风味坚果甜点", "dessert"], ["spris", "Spris", "埃塞水果分层饮品", "dessert"],
  ]],
  ["scandinavian", "28", 13, [
    ["raggmunk", "Raggmunk", "瑞典土豆煎饼", "fried-snack"], ["janssons-frestelse", "Janssons Frestelse", "瑞典鳀鱼土豆焗菜", "stew"], ["kalops", "Kalops", "瑞典炖牛肉", "stew"], ["pea-soup-pancakes", "Pea Soup and Pancakes", "豌豆汤配薄饼", "soup"], ["fiskefrikadeller", "Fiskefrikadeller", "丹麦鱼饼", "seafood"], ["frikadeller", "Frikadeller", "丹麦肉丸", "meat"], ["stegt-flaesk", "Stegt Flaesk", "丹麦脆猪肉", "meat"], ["karjalanpiirakka", "Karjalanpiirakka", "卡累利阿派", "bread"], ["lohikeitto", "Lohikeitto", "芬兰三文鱼汤", "seafood"], ["kroppkakor", "Kroppkakor", "瑞典土豆肉丸", "dumpling"], ["lefse", "Lefse", "挪威土豆薄饼", "bread"], ["lapskaus", "Lapskaus", "挪威炖菜", "stew"], ["rabarbergrød", "Rabarbergrod", "北欧大黄甜羹", "dessert"], ["semla", "Semla", "瑞典奶油杏仁包", "dessert"], ["ostkaka", "Ostkaka", "瑞典奶酪蛋糕", "dessert"],
  ]],
  ["peruvian", "29", 13, [
    ["arroz-con-mariscos", "Arroz con Mariscos", "秘鲁海鲜饭", "rice"], ["seco-de-res", "Seco de Res", "香菜炖牛肉", "stew"], ["carapulcra", "Carapulcra", "秘鲁干土豆炖肉", "stew"], ["tacu-tacu", "Tacu Tacu", "秘鲁豆饭煎饼", "rice"], ["jalea", "Jalea", "秘鲁炸海鲜", "seafood"], ["causa-limena-chicken", "Causa Limena Chicken", "鸡肉黄土豆泥冷盘", "starter"], ["papa-rellena", "Papa Rellena", "秘鲁炸酿土豆", "fried-snack"], ["ocopa", "Ocopa", "秘鲁香草花生土豆", "starter"], ["sopa-criolla", "Sopa Criolla", "秘鲁牛肉面汤", "soup"], ["chupe-de-camarones", "Chupe de Camarones", "秘鲁虾浓汤", "seafood"], ["juane", "Juane", "秘鲁叶包饭", "rice"], ["arroz-tapado", "Arroz Tapado", "秘鲁夹层牛肉饭", "rice"], ["mazamorra-morada", "Mazamorra Morada", "紫玉米甜羹", "dessert"], ["alfajores-peruvian", "Peruvian Alfajores", "秘鲁牛奶焦糖夹心饼", "dessert"], ["causa-de-atun", "Causa de Atun", "金枪鱼黄土豆冷盘", "starter"],
  ]],
  ["brazilian", "30", 14, [
    ["escondidinho", "Escondidinho", "巴西木薯泥焗肉", "stew"], ["galinhada", "Galinhada", "巴西鸡肉饭", "rice"], ["arroz-carreteiro", "Arroz Carreteiro", "巴西牛肉饭", "rice"], ["tutu-de-feijao", "Tutu de Feijao", "巴西豆泥", "vegetable"], ["caldinho-de-feijao", "Caldinho de Feijao", "巴西豆汤", "soup"], ["frango-a-passarinho", "Frango a Passarinho", "巴西蒜香炸鸡块", "fried-snack"], ["bolinho-de-bacalhau", "Bolinho de Bacalhau", "鳕鱼球", "fried-snack"], ["empada", "Empada", "巴西小馅饼", "bread"], ["pastel-de-feira", "Pastel de Feira", "巴西市集炸馅饼", "fried-snack"], ["carne-de-sol", "Carne de Sol", "巴西晒干牛肉", "meat"], ["xinxim-de-galinha", "Xinxim de Galinha", "巴伊亚花生鸡", "stew"], ["caldeirada", "Caldeirada", "巴西海鲜炖锅", "seafood"], ["salpicao", "Salpicao", "巴西鸡肉沙拉", "salad"], ["romeu-e-julieta", "Romeu e Julieta", "奶酪番石榴甜点", "dessert"], ["canjica", "Canjica", "巴西甜玉米粥", "dessert"],
  ]],
];

export const globalCoverageDishConfigs = groups.flatMap(([cuisineId, groupCode, startNumber, rows]) => {
  const [cuisineEn, cuisineZh, cuisineNl, flavorSources] = cuisineCopy[cuisineId];
  return rows.map(([id, en, zh, category], index) => {
    const profile = categoryProfiles[category] || categoryProfiles.meat;
    const metadataCode = `1${groupCode}${String(startNumber + index).padStart(3, "0")}`;
    return {
      id,
      imageSlug: imageSlugs[id],
      metadataCode,
      cuisineId,
      names: { en, zh, nl: en, local: en },
      category,
      cookingMethods: [profile.method],
      shortDescription: {
        en: `${en} is a recognizable ${cuisineEn} ${categoryLabel(category)}. This DishKAI card gives fast ordering context while restaurant versions may vary.`,
        zh: `${zh} 是常见${cuisineZh}菜单菜品，用于快速判断类型、口味和点餐风险。`,
        nl: `${en} is een herkenbaar ${cuisineNl} gerecht voor snelle bestelcontext; restaurantversies kunnen verschillen.`,
      },
      cookingProfile: {
        en: `Usually served as a ${categoryLabel(category)} with ${profile.texture[0]}, so focus on sauce, filling, and portion style when ordering.`,
        zh: `通常作为${categoryZh(category)}上桌，点餐时重点看酱汁、馅料和分量。`,
        nl: `Meestal geserveerd als ${categoryLabel(category)} met ${profile.texture[0]}; let op saus, vulling en portie.`,
      },
      cuisineRole: {
        level: "common",
        tags: ["starter-verified", "common-menu-item"],
        description: {
          en: "A verified starter-database dish added to broaden DishKAI recognition for common restaurant menus.",
          zh: "为扩大 DishKAI 常见餐厅菜单识别覆盖而加入的已校对初始数据库菜品。",
          nl: "Een geverifieerd startdatabasegerecht voor bredere DishKAI-herkenning op veelvoorkomende restaurantmenu's.",
        },
      },
      composition: profile.composition,
      distinctiveFlavorSources: flavorSources,
      basicTaste: profile.taste,
      textureProfile: profile.texture,
      riskFlags: profile.risks,
      dietaryFlags: category === "vegetable" || category === "salad" ? ["often-vegetarian"] : [],
      goodForTags: ["starter-verified", "common-menu-item"],
      avoidIfTags: profile.risks.map((flag) => `${flag.replace("contains-", "")}-allergy`),
      orderVerdict: {
        en: profile.verdict,
        zh: profile.zhVerdict,
        nl: profile.nlVerdict,
      },
      spiceLevel: spiceLevel(cuisineId, category),
      weightLevel: weightLevel(category),
      acquiredTasteLevel: ["starter", "seafood", "stew"].includes(category) ? 2 : 1,
      metadataConfidence: 0.72,
      restaurantVariationLevel: "medium-high",
      confidenceTag: "starter-metadata",
    };
  });
});

export const globalCoverageDishes = globalCoverageDishConfigs.map((config) => starterDish(config));

function categoryLabel(category) {
  return {
    rice: "rice dish",
    noodle: "noodle dish",
    soup: "soup",
    curry: "curry or saucy dish",
    meat: "meat main",
    seafood: "seafood dish",
    vegetable: "vegetable-led dish",
    bread: "bread or pastry item",
    dessert: "dessert",
    starter: "starter or small plate",
    salad: "salad",
    dumpling: "dumpling",
    "fried-snack": "fried snack",
    sandwich: "sandwich",
    stew: "stew",
  }[category] || "menu item";
}

function categoryZh(category) {
  return {
    rice: "米饭类",
    noodle: "面类",
    soup: "汤类",
    curry: "咖喱或酱汁类",
    meat: "肉类主菜",
    seafood: "海鲜类",
    vegetable: "蔬菜类",
    bread: "面包或酥皮类",
    dessert: "甜点",
    starter: "前菜或小食",
    salad: "沙拉",
    dumpling: "饺子/点心类",
    "fried-snack": "炸物小食",
    sandwich: "三明治类",
    stew: "炖菜",
  }[category] || "菜单菜品";
}

function spiceLevel(cuisineId, category) {
  if (["curry"].includes(category)) return 3;
  if (["thai", "korean", "chinese", "indian", "mexican", "moroccan", "peruvian"].includes(cuisineId)) return 2;
  if (["fried-snack", "dessert", "salad"].includes(category)) return 0;
  return 1;
}

function weightLevel(category) {
  if (["stew", "meat", "curry", "fried-snack"].includes(category)) return 4;
  if (["rice", "noodle", "bread", "sandwich", "dessert"].includes(category)) return 3;
  if (["salad", "soup", "starter", "vegetable", "seafood"].includes(category)) return 2;
  return 3;
}
