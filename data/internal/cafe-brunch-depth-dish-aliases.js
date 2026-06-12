export const cafeBrunchDepthDishAliases = [
  ...aliases("scrambled-eggs", ["scrambled eggs", "scrambled egg", "roerei", "炒蛋", "soft scrambled eggs"]),
  ...aliases("omelette", ["omelette", "omelet", "omelet natural", "omelet kaas", "omelet ham kaas", "煎蛋卷", "omelet met kaas"]),
  ...aliases("shakshuka", ["shakshuka", "shakshouka", "chakchouka", "番茄炖蛋", "eggs in tomato sauce"]),
  ...aliases("french-toast", ["french toast", "wentelteefjes", "eggy bread", "法式吐司", "pain perdu"]),
  ...aliases("eggs-benedict", ["eggs benedict", "egg benedict", "benedict eggs", "班尼迪克蛋", "eggs benny"]),
  ...aliases("avocado-toast", ["avocado toast", "avocado on toast", "avocadotoast", "avo toast", "牛油果吐司"]),
  ...aliases("granola-bowl", ["granola bowl", "yogurt granola", "yoghurt granola", "granola yoghurt", "格兰诺拉酸奶碗"]),
  ...aliases("acai-bowl", ["açaí bowl", "acai bowl", "acaibowl", "açaíbowl", "巴西莓碗"]),
  ...aliases("croissant", ["croissant", "butter croissant", "croissant naturel", "可颂"]),
  ...aliases("pain-au-chocolat", ["pain au chocolat", "chocoladebroodje", "chocolate croissant", "巧克力可颂"]),
  ...aliases("club-sandwich", ["club sandwich", "clubsandwich", "chicken club", "总汇三明治"]),
  ...aliases("bagel-cream-cheese", ["bagel with cream cheese", "bagel cream cheese", "bagel roomkaas", "奶油奶酪贝果"]),
  ...aliases("smoked-salmon-bagel", ["smoked salmon bagel", "salmon bagel", "bagel smoked salmon", "bagel gerookte zalm", "烟熏三文鱼贝果"]),
  ...aliases("tosti", ["tosti", "tosti kaas", "tosti ham kaas", "toastie", "grilled cheese sandwich", "荷式烤火腿奶酪三明治"]),
  ...aliases("uitsmijter", ["uitsmijter", "uitsmijter ham kaas", "uitsmijter kaas", "uitsmijter ham", "荷式煎蛋开放三明治"]),
  ...aliases("broodje-gezond", ["broodje gezond", "gezond broodje", "broodje kaas ham ei", "荷式健康三明治"]),
  ...aliases("croque-madame", ["croque madame", "croque-madame", "法式火腿奶酪煎蛋三明治"]),
  ...aliases("quiche", ["quiche", "quiche slice", "quiche vegetarisch", "法式咸派"]),
  ...aliases("banana-bread", ["banana bread", "bananenbrood", "香蕉蛋糕", "banana cake"]),
];

function aliases(dishId, names) {
  return names.map((alias, index) => ({
    alias,
    dishId,
    language: "menu",
    matchType: index === 0 ? "canonical" : "menu-variant",
    confidence: index === 0 ? 1 : 0.94,
  }));
}
