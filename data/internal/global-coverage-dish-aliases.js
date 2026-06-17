import { globalCoverageDishConfigs } from "./dishes/global-coverage-dishes.js";

export const globalCoverageDishAliases = globalCoverageDishConfigs.flatMap((dish) => {
  const aliases = [
    alias(dish.names.en, dish.id, "canonical", 1),
    alias(dish.names.en.toLowerCase(), dish.id, "case-variant", 0.99),
    alias(dish.id.replaceAll("-", " "), dish.id, "slug-variant", 0.94),
    alias(dish.names.zh, dish.id, "translated-name", 0.92),
  ];

  if (dish.names.local && dish.names.local !== dish.names.en) {
    aliases.push(alias(dish.names.local, dish.id, "local-name", 0.96));
  }

  return uniqueAliases(aliases);
});

function alias(value, dishId, matchType, confidence) {
  return {
    alias: value,
    dishId,
    language: "menu",
    matchType,
    confidence,
  };
}

function uniqueAliases(aliases) {
  const seen = new Set();
  return aliases.filter((item) => {
    const key = `${item.alias.toLowerCase()}|${item.dishId}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
