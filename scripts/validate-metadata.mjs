import { dishAliasResolutionPolicy, metadata } from "../data/internal/index.js";

function duplicates(items, key) {
  const counts = new Map();
  for (const item of items) {
    const value = item[key];
    if (!value) continue;
    counts.set(value, (counts.get(value) || 0) + 1);
  }
  return [...counts].filter(([, count]) => count > 1).map(([value, count]) => `${value} (${count})`);
}

function fail(label, values) {
  if (!values.length) return false;
  console.error(`
${label}:`);
  values.slice(0, 50).forEach((value) => console.error(`- ${value}`));
  if (values.length > 50) console.error(`...and ${values.length - 50} more`);
  return true;
}

function normalizeAlias(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFKC")
    .replace(/[()[\]{}.,;:!?'\"]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function aliasGroups(aliases) {
  const groups = new Map();
  for (const alias of aliases) {
    const normalized = normalizeAlias(alias.alias);
    if (!groups.has(normalized)) groups.set(normalized, []);
    groups.get(normalized).push(alias);
  }
  return groups;
}

const ingredientIds = new Set(metadata.ingredients.map((item) => item.id));
const seasoningIds = new Set(metadata.seasonings.map((item) => item.id));
const cuisineIds = new Set(metadata.cuisines.map((item) => item.id));
const cookingMethodIds = new Set(metadata.cookingMethods.map((item) => item.id));
const riskFlagIds = new Set(metadata.riskFlags.map((item) => item.id));
const dishIds = new Set(metadata.dishes.map((item) => item.id));

const badComponents = [];
const badCuisines = [];
const badMethods = [];
const badRiskFlags = [];
const badAliases = [];
const badLocalizedFields = [];
const aliasConflicts = [];
const duplicateNormalizedAliases = [];
const badAliasPolicy = [];

for (const dish of metadata.dishes) {
  if (!cuisineIds.has(dish.cuisineId)) badCuisines.push(`${dish.id}: ${dish.cuisineId}`);
  for (const method of dish.cookingMethods || []) {
    if (!cookingMethodIds.has(method)) badMethods.push(`${dish.id}: ${method}`);
  }
  for (const riskFlag of dish.riskFlags || []) {
    if (!riskFlagIds.has(riskFlag)) badRiskFlags.push(`${dish.id}: ${riskFlag}`);
  }
  for (const component of dish.composition || []) {
    const valid = component.itemType === "seasoning" ? seasoningIds.has(component.itemId) : ingredientIds.has(component.itemId);
    if (!valid) badComponents.push(`${dish.id}: ${component.itemType || "ingredient"}:${component.itemId}`);
  }
  for (const field of ["names", "shortDescription", "cookingProfile", "orderVerdict", "visualDisclaimer"]) {
    const value = dish[field];
    if (!value?.en || !value?.zh || !value?.nl) badLocalizedFields.push(`${dish.id}: ${field}`);
  }
}

for (const alias of metadata.dishAliases) {
  if (!dishIds.has(alias.dishId)) badAliases.push(`${alias.alias} -> ${alias.dishId}`);
}

const normalizedAliasGroups = aliasGroups(metadata.dishAliases);
for (const [normalizedAlias, aliases] of normalizedAliasGroups) {
  const dishIdsForAlias = [...new Set(aliases.map((alias) => alias.dishId))];
  if (dishIdsForAlias.length > 1) aliasConflicts.push(`${normalizedAlias}: ${dishIdsForAlias.join(", ")}`);
  if (aliases.length > 1 && dishIdsForAlias.length === 1) {
    duplicateNormalizedAliases.push(`${normalizedAlias} -> ${dishIdsForAlias[0]} (${aliases.length})`);
  }
}

for (const [alias, expectedDishId] of Object.entries(dishAliasResolutionPolicy.preferredDishIds)) {
  const exported = normalizedAliasGroups.get(normalizeAlias(alias)) || [];
  const exportedDishIds = [...new Set(exported.map((item) => item.dishId))];
  if (exportedDishIds.length !== 1 || exportedDishIds[0] !== expectedDishId) {
    badAliasPolicy.push(`${alias}: expected ${expectedDishId}, exported ${exportedDishIds.join(", ") || "none"}`);
  }
}

for (const alias of dishAliasResolutionPolicy.quarantinedAliases) {
  const exported = normalizedAliasGroups.get(normalizeAlias(alias)) || [];
  if (exported.length) badAliasPolicy.push(`${alias}: must remain quarantined`);
}

const byCuisine = metadata.dishes.reduce((acc, dish) => {
  acc[dish.cuisineId] = (acc[dish.cuisineId] || 0) + 1;
  return acc;
}, {});

const failures = [
  fail("Duplicate dish ids", duplicates(metadata.dishes, "id")),
  fail("Duplicate dish metadataCodes", duplicates(metadata.dishes, "metadataCode")),
  fail("Invalid dish cuisines", badCuisines),
  fail("Invalid cooking methods", badMethods),
  fail("Invalid risk flags", badRiskFlags),
  fail("Invalid composition references", badComponents),
  fail("Aliases pointing to missing dishes", badAliases),
  fail("Normalized aliases pointing to multiple dishes", aliasConflicts),
  fail("Duplicate normalized aliases for the same dish", duplicateNormalizedAliases),
  fail("Invalid alias resolution policy", badAliasPolicy),
  fail("Missing localized dish fields", badLocalizedFields),
];

console.log(JSON.stringify({
  totalDishes: metadata.dishes.length,
  totalAliases: metadata.dishAliases.length,
  byCuisine,
}, null, 2));

if (failures.some(Boolean)) process.exit(1);
