export const cookingMethods = [
  method("boiled", "700001", "boiled", "水煮", "gekookt", "Cooked in hot water; usually softer and lighter than fried food.", "在热水中煮熟，通常比油炸更柔软、更轻。", "Gegaard in heet water; meestal zachter en lichter dan gefrituurd eten.", "softens", "low", "lighter"),
  method("baked", "700002", "baked", "烘烤", "gebakken", "Cooked with dry oven heat; often gives browned edges or a firmer crust.", "用烤箱干热烘烤，常带焦香边缘或更成型的外层。", "Gegaard met droge ovenwarmte; geeft vaak gebruinde randen of een stevigere korst.", "firms or crisps", "medium", "medium"),
  method("layered", "700003", "layered", "层叠", "gelaagd", "Built in layers, so bites can feel rich and integrated.", "层层叠放，入口通常更融合、更浓郁。", "In lagen opgebouwd, waardoor happen rijk en samenhangend aanvoelen.", "soft layered", "medium", "richer"),
  method("sauce-tossed", "700004", "sauce-tossed", "拌酱", "met saus gemengd", "Mixed with sauce so the surface feels coated and glossy.", "与酱汁拌合，表面通常有包裹感和油润感。", "Gemengd met saus, waardoor het oppervlak bedekt en glanzend aanvoelt.", "coated", "medium", "medium"),
  method("simmered", "700005", "simmered", "慢煮", "gesudderd", "Gently cooked in liquid; usually warm, soft, and brothy or saucy.", "在液体中慢煮，通常温热、柔软，带汤感或酱汁感。", "Zacht gegaard in vloeistof; meestal warm, zacht en bouillonachtig of sauzig.", "softens", "low", "medium"),
  method("stirred", "700006", "stirred", "搅拌", "geroerd", "Frequently stirred for a creamy or evenly mixed texture.", "持续搅拌，通常带来顺滑或均匀融合的质地。", "Vaak geroerd voor een romige of gelijkmatig gemengde textuur.", "creamy", "medium", "richer"),
  method("assembled", "700007", "assembled", "组合", "samengesteld", "Fresh items are put together rather than heavily cooked.", "新鲜食材直接组合，通常不会重度加热。", "Verse onderdelen worden samengesteld in plaats van zwaar gegaard.", "fresh", "low", "lighter"),
  method("chilled", "700008", "chilled", "冷藏", "gekoeld", "Served cold or set in the fridge; often smooth, firm, or refreshing.", "冷藏后食用，常见顺滑、定型或清爽的感觉。", "Koud geserveerd of opgesteven in de koelkast; vaak glad, stevig of verfrissend.", "sets or cools", "low", "lighter"),
  method("raw", "700009", "raw", "生食", "rauw", "Not cooked; expect fresh temperature and direct ingredient texture.", "不加热，通常保留清爽温度和食材本身质地。", "Niet gegaard; verwacht een frisse temperatuur en directe ingredienttextuur.", "fresh", "low", "lighter"),
  method("toasted", "700010", "toasted", "烤脆", "geroosterd", "Dry heat makes the surface crisp and aromatic.", "干热让表面变脆并带香气。", "Droge hitte maakt het oppervlak knapperig en aromatisch.", "crisps", "low", "lighter"),
  method("braised", "700011", "braised", "炖煮", "gestoofd", "Slow cooked with moisture until tender and saucy.", "带水分慢炖至软烂，通常有明显酱汁感。", "Langzaam gegaard met vocht tot het mals en sauzig is.", "tender", "medium", "richer"),
  method("set", "700012", "set", "凝固定型", "opgesteven", "Soft ingredients are gently firmed into a smooth shape.", "柔软食材凝固定型，形成顺滑的成品。", "Zachte ingredienten worden stevig genoeg gemaakt tot een gladde vorm.", "smooth set", "medium", "richer"),
  method("stir-fried", "700013", "stir-fried", "快炒", "geroerbakt", "Quickly cooked in a hot pan; usually glossy, savory, and lightly oily.", "热锅快速翻炒，通常油润、咸香、带锅气。", "Snel gegaard in een hete pan; meestal glanzend, hartig en licht olieachtig.", "glossy", "medium", "medium"),
  method("fried", "700014", "fried", "煎炸", "gebakken", "Cooked in oil; expect a browned, richer surface.", "用油煎或炸，通常表面更香、更厚重。", "Gegaard in olie; verwacht een bruiner en rijker oppervlak.", "crisps", "high", "richer"),
  method("deep-fried", "700015", "deep-fried", "油炸", "gefrituurd", "Cooked in hot oil until crisp; usually heavier than boiled or steamed food.", "在热油中炸至酥脆，通常比水煮或蒸制更厚重。", "Gegaard in hete olie tot knapperig; meestal zwaarder dan gekookt of gestoomd eten.", "crisps", "high", "richer"),
  method("steamed", "700016", "steamed", "蒸", "gestoomd", "Cooked with steam; often soft, moist, and lighter.", "用蒸汽加热，常见柔软、多汁、相对清淡。", "Gegaard met stoom; vaak zacht, vochtig en lichter.", "softens", "low", "lighter"),
  method("grilled", "700017", "grilled", "烤制", "gegrild", "Cooked over direct heat; often smoky, browned, or lightly charred.", "直接高温烤制，通常带烟熏感、焦香或轻微炭烤感。", "Gegaard boven directe hitte; vaak rokerig, gebruind of licht geschroeid.", "firms", "medium", "medium"),
];

function method(id, metadataCode, en, zh, nl, enMeaning, zhMeaning, nlMeaning, textureImpact, oilLevelImpact, lightnessImpact) {
  return {
    id,
    metadataCode,
    names: { en, zh, nl },
    userMeaning: { en: enMeaning, zh: zhMeaning, nl: nlMeaning },
    textureImpact,
    oilLevelImpact,
    lightnessImpact,
  };
}
