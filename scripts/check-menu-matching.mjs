import { analyzeMenuText } from "../functions/_shared/menu-analysis.js";

const cases = [
  ["nasi goreng", "nasi-goreng"],
  ["Hainanese Chicken Rice", "hainanese-chicken-rice"],
  ["pannenkoeken", "pannenkoeken"],
  ["appeltaart", "appeltaart"],
  ["acai bowl", "acai-bowl"],
  ["Uitsmijter Ham Kaas", "uitsmijter-ham-kaas"],
  ["mixed grill", "mixed-grill"],
  ["云吞面", "wonton-noodles"],
  ["越南烤肉米粉", "bun-thit-nuong"],
  ["土耳其红扁豆汤", "mercimek-corbasi"],
  ["炸香蕉", "pisang-goreng"],
  ["Homemade chocolate croissant", "pain-au-chocolat"],
  ["Traditional garnaalkroketten", "shrimp-croquettes"],
  ["Classic Broodje Kroket", "broodje-kroket"],
  ["血肠", null],
  ["葡萄叶米卷", null],
  ["酿辣椒", null],
];

const result = await analyzeMenuText({
  menuText: cases.map(([menuName]) => menuName).join("\n"),
  sourceLanguage: "auto",
  targetLanguage: "en",
  env: {},
});

const failures = cases.flatMap(([menuName, expectedDishId], index) => {
  const item = result.items[index];
  if (!item) return [`${menuName}: missing result row`];
  if (expectedDishId === null && item.matchedDishId) {
    return [`${menuName}: expected no verified dish, got ${item.matchedDishId}`];
  }
  if (expectedDishId !== null && item.matchedDishId !== expectedDishId) {
    return [`${menuName}: expected ${expectedDishId}, got ${item.matchedDishId || item.matchStatus}`];
  }
  return [];
});

console.log(JSON.stringify({
  casesChecked: cases.length,
  failures: failures.length,
}, null, 2));

if (failures.length) {
  console.error("\nMenu matching regressions:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
