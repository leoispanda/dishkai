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

export const dishes = trustedCandidateDishes.filter(clearsVerifiedGate);
const verifiedDishIds = new Set(dishes.map((dish) => dish.id));

export const quarantinedDishes = [
  ...trustedCandidateDishes.filter((dish) => !verifiedDishIds.has(dish.id)),
  ...generatedCandidateDishes,
];

export const dishAliases = trustedCandidateDishAliases.filter((alias) => verifiedDishIds.has(alias.dishId));

export const quarantinedDishAliases = [
  ...trustedCandidateDishAliases.filter((alias) => !verifiedDishIds.has(alias.dishId)),
  ...generatedCandidateDishAliases,
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
