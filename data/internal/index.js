import { cuisineRegions } from "./cuisine-regions.js";
import { cuisines } from "./cuisines.js";
import { metadataCodeSystem } from "./metadata-codes.js";
import { ingredients } from "./ingredients.js";
import { seasonings } from "./seasonings.js";
import { tasteTags } from "./taste-tags.js";
import { cookingMethods } from "./cooking-methods.js";
import { riskFlags } from "./risk-flags.js";
import { dishAliases } from "./dish-aliases.js";
import { italianDishes } from "./dishes/italian.js";
import { thaiDishes } from "./dishes/thai.js";

export {
  cuisineRegions,
  cuisines,
  metadataCodeSystem,
  ingredients,
  seasonings,
  tasteTags,
  cookingMethods,
  riskFlags,
  dishAliases,
};

export const dishes = [...thaiDishes, ...italianDishes];

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
