import { cuisineRegions } from "./cuisine-regions.js";
import { cuisines } from "./cuisines.js";
import { metadataCodeSystem } from "./metadata-codes.js";
import { ingredients } from "./ingredients.js";
import { seasonings } from "./seasonings.js";
import { tasteTags } from "./taste-tags.js";
import { cookingMethods } from "./cooking-methods.js";
import { riskFlags } from "./risk-flags.js";
import { dishAliases as baseDishAliases } from "./dish-aliases.js";
import { expandedDishAliases } from "./expanded-dish-aliases.js";
import { cafeBrunchDepthDishAliases } from "./cafe-brunch-depth-dish-aliases.js";
import { europeDepthDishAliases } from "./europe-depth-dish-aliases.js";
import { greekDepthDishAliases } from "./greek-depth-dish-aliases.js";
import { globalDepthDishAliases } from "./global-depth-dish-aliases.js";
import { worldDishAliases } from "./world-dish-aliases.js";
import { belgianDishes } from "./dishes/belgian.js";
import { chineseDishes } from "./dishes/chinese.js";
import { dutchDishes } from "./dishes/dutch.js";
import { frenchDishes } from "./dishes/french.js";
import { germanDishes } from "./dishes/german.js";
import { cafeBrunchDepthDishes } from "./dishes/cafe-brunch-depth-dishes.js";
import { europeDepthDishes } from "./dishes/europe-depth-dishes.js";
import { greekDepthDishes } from "./dishes/greek-depth-dishes.js";
import { globalDepthDishes } from "./dishes/global-depth-dishes.js";
import { italianDishes } from "./dishes/italian.js";
import { expandedDishes } from "./dishes/expanded-dishes.js";
import { worldDishes } from "./dishes/world-dishes.js";
import { japaneseDishes } from "./dishes/japanese.js";
import { koreanDishes } from "./dishes/korean.js";
import { thaiDishes } from "./dishes/thai.js";

const trustedCandidateDishAliases = [
  ...baseDishAliases,
  ...cafeBrunchDepthDishAliases,
  ...greekDepthDishAliases,
];

const generatedCandidateDishAliases = [
  ...expandedDishAliases,
  ...europeDepthDishAliases,
  ...globalDepthDishAliases,
  ...worldDishAliases,
];

const auditedGeneratedDishIds = new Set([
  "cacio-e-pepe",
  "amatriciana",
  "bolognese",
  "spaghetti-vongole",
  "burrata",
  "arancini",
  "calamari-fritti",
  "carpaccio",
  "polenta",
  "saltimbocca",
  "cannoli",
  "gelato",
  "prosciutto-e-melone",
  "vitello-tonnato",
  "affogato",
  "duck-confit",
  "steak-frites",
  "escargots",
  "french-onion-soup",
  "salade-nicoise",
  "croque-monsieur",
  "cassoulet",
  "steak-tartare",
  "bouillabaisse",
  "sole-meuniere",
  "tarte-tatin",
  "crepes",
  "moules-marinieres",
  "blanquette-de-veau",
  "gratin-dauphinois",
  "tartiflette",
  "foie-gras",
  "madeleines",
  "profiteroles",
  "paris-brest",
  "currywurst",
  "rouladen",
  "schweinshaxe",
  "kaesespaetzle",
  "kartoffelsalat",
  "maultaschen",
  "weisswurst",
  "leberkaese",
  "flammkuchen",
  "koenigsberger-klopse",
  "apfelstrudel",
  "black-forest-cake",
  "goulash-german",
  "eisbein",
  "kartoffelpuffer",
  "sauerkraut",
  "red-cabbage-german",
  "matjes-herring",
  "labskaus",
  "zanderfilet",
  "germknoedel",
  "kaiserschmarrn",
  "kartoffelsuppe",
  "frikadellen-german",
  "obatzda",
  "kroket",
  "patat",
  "kapsalon",
  "pannenkoeken",
  "uitsmijter",
  "appeltaart",
  "kibbeling",
  "frikandel",
  "stroopwafel",
  "sate",
  "rijsttafel",
  "hachee",
  "hutspot",
  "zuurkoolstamppot",
  "andijviestamppot",
  "nasi-goreng-dutch",
  "bami-goreng-dutch",
  "loempia",
  "oliebol",
  "tompouce",
  "kaassouffle",
  "saucijzenbroodje",
  "lekkerbekje",
  "vol-au-vent",
  "shrimp-croquettes",
  "stoemp",
  "tomate-crevette",
  "anguilles-au-vert",
  "filet-americain",
  "boulets-liegeois",
  "lapin-a-la-gueuze",
  "belgian-fries",
  "cheese-croquettes",
  "dame-blanche",
  "speculoos",
  "mitraillette",
  "solettes-meuniere",
  "bloedworst",
  "jambon-dardenne",
  "boulets-sauce-tomate",
  "crepe-mikado",
  "rijsttaart",
  "salade-liegeoise",
  "flamiche",
  "asperges-op-vlaamse-wijze",
  "konijn-met-pruimen",
  "mattentaart",
  "waterkerssoep",
  "paella",
  "tortilla-espanola",
  "patatas-bravas",
  "croquetas",
  "jamon-iberico",
  "gambas-al-ajillo",
  "gazpacho",
  "pulpo-a-la-gallega",
  "pan-con-tomate",
  "churros",
  "crema-catalana",
  "fabada",
  "albondigas",
  "pimientos-de-padron",
  "boquerones-en-vinagre",
  "ensaladilla-rusa",
  "salmorejo",
  "calamares-a-la-romana",
  "fideua",
  "arroz-negro",
  "bacalao-al-pil-pil",
  "merluza-a-la-vasca",
  "pollo-al-ajillo",
  "rabo-de-toro",
  "carrillada",
  "cocido-madrileno",
  "huevos-rotos",
  "tarta-de-santiago",
  "spanish-flan",
  "bocadillo-de-calamares",
  "fish-and-chips",
  "shepherds-pie",
  "bangers-and-mash",
  "full-english-breakfast",
  "steak-and-ale-pie",
  "irish-stew",
  "cornish-pasty",
  "scotch-egg",
  "ploughmans-lunch",
  "beef-wellington",
  "sticky-toffee-pudding",
  "scones",
  "toad-in-the-hole",
  "yorkshire-pudding",
  "sunday-roast",
  "roast-beef",
  "chicken-tikka-masala-british",
  "welsh-rarebit",
  "bubble-and-squeak",
  "mushy-peas",
  "pea-and-ham-soup",
  "cock-a-leekie",
  "cullen-skink",
  "haggis",
  "black-pudding",
  "trifle",
  "eton-mess",
  "bread-and-butter-pudding",
  "crumpets",
  "sausage-roll",
  "bacalhau-a-bras",
  "pastel-de-nata",
  "francesinha",
  "caldo-verde",
  "piri-piri-chicken",
  "ameijoas-a-bulhao-pato",
  "arroz-de-marisco",
  "bitoque",
  "polvo-a-lagareiro",
  "bifana",
  "queijadas",
  "bacalhau-com-natas",
  "bacalhau-a-gomes-de-sa",
  "bacalhau-espiritual",
  "sardinhas-assadas",
  "dourada-grelhada",
  "cataplana-de-marisco",
  "feijoada-portuguesa",
  "cozido-a-portuguesa",
  "leitao-assado",
  "alheira",
  "prego",
  "arroz-de-pato",
  "peixinhos-da-horta",
  "bolinhos-de-bacalhau",
  "arroz-doce",
  "serradura",
  "bolo-de-bolacha",
  "bacalhau-a-lagareiro",
  "carne-de-porco-a-alentejana",
]);

export {
  cuisineRegions,
  cuisines,
  metadataCodeSystem,
  ingredients,
  seasonings,
  tasteTags,
  cookingMethods,
  riskFlags,
};

const trustedCandidateDishes = [
  ...thaiDishes,
  ...japaneseDishes,
  ...koreanDishes,
  ...chineseDishes,
  ...italianDishes,
  ...frenchDishes,
  ...germanDishes,
  ...dutchDishes,
  ...belgianDishes,
  ...cafeBrunchDepthDishes,
  ...greekDepthDishes,
];

const generatedCandidateDishes = [
  ...expandedDishes,
  ...europeDepthDishes,
  ...worldDishes,
  ...globalDepthDishes,
];

const manuallyQuarantinedDishIds = new Set([
  "greek-mixed-grill",
  "beef-tenderloin-greek-grill",
  "grilled-chicken-fillet-greek",
  "grilled-scampi",
  "grilled-salmon-greek",
  "seafood-pasta-greek",
  "vegetable-pasta-greek",
  "vegan-moussaka",
  "vegetarian-souvlaki",
  "greek-restaurant-sides",
  "kids-fried-menu-items",
  "kids-chicken-nuggets",
  "fried-meatballs-kids",
  "fish-sticks-kids",
  "butter-side",
  "scrambled-eggs",
  "shakshuka",
  "french-toast",
  "eggs-benedict",
  "avocado-toast",
  "granola-bowl",
  "acai-bowl",
  "club-sandwich",
  "bagel-cream-cheese",
  "smoked-salmon-bagel",
  "banana-bread",
]);

function metadataText(dish) {
  return [
    dish.shortDescription?.en,
    dish.shortDescription?.zh,
    dish.shortDescription?.nl,
    dish.cookingProfile?.en,
    dish.cookingProfile?.zh,
    dish.cookingProfile?.nl,
    dish.cuisineRole?.description?.en,
    dish.cuisineRole?.description?.zh,
    dish.cuisineRole?.description?.nl,
    dish.orderVerdict?.en,
    dish.orderVerdict?.zh,
    dish.orderVerdict?.nl,
  ]
    .filter(Boolean)
    .join(" ");
}

function clearsVerifiedGate(dish) {
  if (manuallyQuarantinedDishIds.has(dish.id)) return false;
  if ((dish.metadataConfidence ?? 0) < 0.78) return false;
  const text = metadataText(dish);
  if (/DishKAI explains it by taste/i.test(text)) return false;
  if (/\bcommon [A-Za-z-]+ menu item\b/i.test(text)) return false;
  if (/bring this cuisine|verified DishKAI references|verified references per cuisine|restaurant coverage|broader restaurant coverage/i.test(text)) return false;
  if (/Order if this .* profile sounds appealing|if you accept this kind of flavor and risk|\u5982\u679c\u4f60\u63a5\u53d7\u8fd9\u7c7b\u53e3\u5473\u548c\u98ce\u9669/i.test(text)) return false;
  if (/European depth pass|\u6b27\u6d32\u83dc\u7cfb\u6df1\u5ea6\u8865\u5168/i.test(text)) return false;
  if (/\b(?:savory|rich|mild|saucy|pasta|small bites|tender meat|springy noodles|soft rice|noodle|rice|glossy sauce|profile)\b/i.test(dish.shortDescription?.zh || "")) return false;
  if (/\b(?:savory|rich|mild|saucy|pasta|small bites|tender meat|springy noodles|soft rice|noodle|rice|glossy sauce|profile)\b/i.test(dish.cookingProfile?.zh || "")) return false;
  if (/\b(?:savory|rich|mild|saucy|pasta|small bites|tender meat|springy noodles|soft rice|noodle|rice|glossy sauce|profile)\b/i.test(dish.orderVerdict?.zh || "")) return false;
  return true;
}

const reviewedGeneratedDishes = generatedCandidateDishes.filter((dish) => auditedGeneratedDishIds.has(dish.id));

export const dishes = [
  ...trustedCandidateDishes,
  ...reviewedGeneratedDishes,
].filter(clearsVerifiedGate);
const verifiedDishIds = new Set(dishes.map((dish) => dish.id));

export const quarantinedDishes = [
  ...trustedCandidateDishes.filter((dish) => !verifiedDishIds.has(dish.id)),
  ...generatedCandidateDishes.filter((dish) => !verifiedDishIds.has(dish.id)),
];

export const dishAliases = [
  ...trustedCandidateDishAliases,
  ...generatedCandidateDishAliases.filter((alias) => auditedGeneratedDishIds.has(alias.dishId)),
].filter((alias) => verifiedDishIds.has(alias.dishId));

const verifiedDishAliasKeys = new Set(dishAliases.map(aliasKey));

export const quarantinedDishAliases = [
  ...trustedCandidateDishAliases.filter((alias) => !verifiedDishAliasKeys.has(aliasKey(alias))),
  ...generatedCandidateDishAliases.filter((alias) => !verifiedDishAliasKeys.has(aliasKey(alias))),
];

export const metadata = {
  cuisineRegions,
  cuisines,
  metadataCodeSystem,
  ingredients,
  seasonings,
  tasteTags,
  cookingMethods,
  riskFlags,
  dishAliases,
  dishes,
};

function aliasKey(alias) {
  return `${alias.alias}\u0000${alias.dishId}`;
}
