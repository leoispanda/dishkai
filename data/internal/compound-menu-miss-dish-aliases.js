export const compoundMenuMissDishAliases = [
  ...aliases("schiacciata-mortadella-stracciatella", [
    ["schiacciata mortadella e stracciatella", "canonical", 1],
    ["schiacciata mortadella stracciatella", "spelling-variant", 0.98],
    ["schiacciata with mortadella and stracciatella", "translated-name", 0.96],
    ["意式扁面包夹熟火腿和奶酪", "translated-name", 0.94],
  ]),
  ...aliases("oeuf-en-cocotte", [
    ["oeuf en cocotte", "canonical", 1],
    ["oeufs en cocotte", "plural-variant", 0.98],
    ["eggs en cocotte", "translated-name", 0.95],
    ["baked eggs in cocotte", "descriptive-name", 0.94],
    ["法式小盅烤蛋", "translated-name", 0.94],
  ]),
  ...aliases("poulet-aux-ecrevisses", [
    ["poulet aux écrevisses", "canonical", 1],
    ["poulet aux ecrevisses", "spelling-variant", 0.99],
    ["chicken with crayfish", "translated-name", 0.96],
    ["chicken crayfish sauce", "descriptive-name", 0.94],
    ["法式小龙虾奶油鸡", "translated-name", 0.94],
  ]),
  ...aliases("poulet-aux-morilles", [
    ["poulet aux morilles", "canonical", 1],
    ["chicken with morel sauce", "translated-name", 0.96],
    ["chicken with morels", "translated-name", 0.95],
    ["chicken morel cream sauce", "descriptive-name", 0.94],
    ["法式羊肚菌奶油鸡", "translated-name", 0.94],
  ]),
  ...aliases("aceitunas-rellenas-de-anchoas", [
    ["aceitunas rellenas de anchoas", "canonical", 1],
    ["anchovy-stuffed olives", "translated-name", 0.97],
    ["anchovy stuffed olives", "spelling-variant", 0.97],
    ["olives stuffed with anchovies", "translated-name", 0.96],
    ["西班牙鳀鱼夹心橄榄", "translated-name", 0.94],
  ]),
  ...aliases("sardinas-en-aceite", [
    ["sardinas en aceite", "canonical", 1],
    ["sardines in oil", "translated-name", 0.96],
    ["sardines in olive oil", "translated-name", 0.96],
    ["spanish sardines in oil", "descriptive-name", 0.94],
    ["西班牙橄榄油沙丁鱼", "translated-name", 0.94],
  ]),
  ...aliases("tandoori-chicken-naan", [
    ["tandoori chicken naan", "canonical", 1],
    ["naan tandoori chicken", "word-order-variant", 0.96],
    ["tandoori chicken naan wrap", "descriptive-name", 0.95],
    ["naan with tandoori chicken", "translated-name", 0.95],
    ["印度烤鸡烤饼卷", "translated-name", 0.94],
  ]),
  ...aliases("blackened-eggplant-tahini", [
    ["blackened eggplant tahini", "canonical", 1],
    ["blackened eggplant with tahini", "descriptive-name", 0.97],
    ["blackened aubergine tahini", "translated-name", 0.96],
    ["blackened aubergine with tahini", "translated-name", 0.96],
    ["中东烤茄子芝麻酱", "translated-name", 0.94],
  ]),
  ...aliases("poke-bowl", [
    ["poke bowl", "canonical", 1],
    ["poké bowl", "spelling-variant", 1],
    ["salmon poke bowl", "protein-variant", 0.95],
    ["tuna poke bowl", "protein-variant", 0.95],
    ["夏威夷生鱼饭碗", "translated-name", 0.94],
  ]),
];

function aliases(dishId, rows) {
  return rows.map(([alias, matchType, confidence]) => ({
    alias,
    dishId,
    language: "menu",
    matchType,
    confidence,
  }));
}
