export const generalDishAliases = [
  ...aliases("coleslaw", [
    ["coleslaw", "canonical", 1],
    ["cole slaw", "spelling-variant", 0.98],
    ["creamy coleslaw", "descriptive-name", 0.94],
    ["koolsla", "translated-name", 0.96],
    ["koolsalade", "translated-name", 0.94],
    ["凉拌卷心菜", "translated-name", 0.94],
    ["卷心菜沙拉", "translated-name", 0.93],
  ]),
  ...aliases("corn-on-the-cob", [
    ["corn on the cob", "canonical", 1],
    ["corn cob", "descriptive-name", 0.94],
    ["buttered corn on the cob", "descriptive-name", 0.94],
    ["grilled corn on the cob", "descriptive-name", 0.94],
    ["maiskolf", "translated-name", 0.96],
    ["mais kolf", "spelling-variant", 0.94],
    ["玉米棒", "translated-name", 0.94],
    ["烤玉米棒", "translated-name", 0.92],
  ]),
  ...aliases("garlic-bread", [
    ["garlic bread", "canonical", 1],
    ["garlic baguette", "descriptive-name", 0.95],
    ["garlic toast", "descriptive-name", 0.94],
    ["knoflookbrood", "translated-name", 0.96],
    ["pain à l'ail", "translated-name", 0.95],
    ["pain a l'ail", "spelling-variant", 0.95],
    ["蒜香面包", "translated-name", 0.94],
    ["蒜蓉面包", "translated-name", 0.94],
  ]),
  ...aliases("onion-rings", [
    ["onion rings", "canonical", 1],
    ["fried onion rings", "descriptive-name", 0.96],
    ["crispy onion rings", "descriptive-name", 0.94],
    ["uienringen", "translated-name", 0.96],
    ["gefrituurde uienringen", "translated-name", 0.94],
    ["洋葱圈", "translated-name", 0.94],
  ]),
  ...aliases("mashed-potatoes", [
    ["mashed potatoes", "canonical", 1],
    ["mashed potato", "spelling-variant", 0.98],
    ["potato mash", "word-order-variant", 0.94],
    ["aardappelpuree", "translated-name", 0.96],
    ["purée de pommes de terre", "translated-name", 0.95],
    ["puree de pommes de terre", "spelling-variant", 0.95],
    ["土豆泥", "translated-name", 0.94],
  ]),
  ...aliases("mixed-vegetables", [
    ["mixed vegetables", "canonical", 1],
    ["seasonal vegetables", "descriptive-name", 0.9],
    ["steamed mixed vegetables", "descriptive-name", 0.94],
    ["gemengde groenten", "translated-name", 0.96],
    ["groentenmix", "translated-name", 0.94],
    ["混合蔬菜", "translated-name", 0.94],
    ["时蔬", "translated-name", 0.9],
  ]),
  ...aliases("grilled-vegetables", [
    ["grilled vegetables", "canonical", 1],
    ["grilled veg", "spelling-variant", 0.92],
    ["chargrilled vegetables", "descriptive-name", 0.94],
    ["gegrilde groenten", "translated-name", 0.96],
    ["légumes grillés", "translated-name", 0.95],
    ["legumes grilles", "spelling-variant", 0.95],
    ["烤蔬菜", "translated-name", 0.94],
  ]),
  ...aliases("side-rice", [
    ["side rice", "canonical", 1],
    ["plain rice", "descriptive-name", 0.96],
    ["white rice", "descriptive-name", 0.96],
    ["steamed rice", "descriptive-name", 0.96],
    ["witte rijst", "translated-name", 0.96],
    ["gestoomde rijst", "translated-name", 0.96],
    ["白饭", "translated-name", 0.94],
    ["米饭", "translated-name", 0.92],
  ]),
];

function aliases(dishId, rows) {
  return rows.map(([alias, matchType, confidence]) => ({
    alias,
    dishId,
    language: inferLanguage(alias),
    matchType,
    confidence,
  }));
}

function inferLanguage(alias) {
  if (/[\u4e00-\u9fff]/.test(alias)) return "zh";
  if (/[àéèêëïîôöûüç]/i.test(alias)) return "fr";
  if (/\b(koolsla|koolsalade|maiskolf|knoflookbrood|uienringen|aardappelpuree|gemengde|groenten|groentenmix|witte|rijst|gestoomde)\b/i.test(alias)) return "nl";
  return "en";
}
