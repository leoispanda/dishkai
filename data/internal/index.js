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
import { europe120DepthDishAliases } from "./europe-120-depth-dish-aliases.js";
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
import { europe120DepthDishes } from "./dishes/europe-120-depth-dishes.js";
import { europeDepthDishes } from "./dishes/europe-depth-dishes.js";
import { greekDepthDishes } from "./dishes/greek-depth-dishes.js";
import { globalDepthDishes } from "./dishes/global-depth-dishes.js";
import { italianDishes } from "./dishes/italian.js";
import { expandedDishes } from "./dishes/expanded-dishes.js";
import { worldDishes } from "./dishes/world-dishes.js";
import { japaneseDishes } from "./dishes/japanese.js";
import { koreanDishes } from "./dishes/korean.js";
import { thaiDishes } from "./dishes/thai.js";

export const dishAliases = [
  ...baseDishAliases,
  ...expandedDishAliases,
  ...cafeBrunchDepthDishAliases,
  ...europe120DepthDishAliases,
  ...europeDepthDishAliases,
  ...greekDepthDishAliases,
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

export const dishes = [
  ...thaiDishes,
  ...japaneseDishes,
  ...koreanDishes,
  ...chineseDishes,
  ...italianDishes,
  ...frenchDishes,
  ...germanDishes,
  ...dutchDishes,
  ...belgianDishes,
  ...expandedDishes,
  ...cafeBrunchDepthDishes,
  ...europe120DepthDishes,
  ...europeDepthDishes,
  ...worldDishes,
  ...greekDepthDishes,
  ...globalDepthDishes,
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
