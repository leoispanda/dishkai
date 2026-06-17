# DishKAI Coverage Roadmap

DishKAI should feel useful in real restaurants, not only in demo menus. Real-world coverage needs two layers.

## Layer 1: Verified DishKAI metadata

Verified metadata is the source of truth. It should be curated for high-frequency dishes and reusable ingredients, seasonings, risk flags, aliases, and cooking profiles.

Current verified starter database:

- 461 dishes
- 27 cuisines
- 1567 aliases

Recent depth progress:

- Greek coverage is deepened to 58 verified dishes.
- Spanish coverage is deepened to 30 verified dishes, with visual-reference assets through metadataCode 105030.

Next verified coverage targets:

1. 150 dishes: deepen current 9 cuisines to around 15-20 dishes each.
2. 300 dishes: add common restaurant cuisines Leo and Cindy are likely to meet in Europe, including Indian, Vietnamese, Indonesian, Malaysian, Mexican, Spanish, Greek, Turkish, Middle Eastern, and American.
3. 500+ dishes: add regional variants and common menu aliases, not just canonical names.

Verified metadata should stay concise and ordering-focused. Do not turn cards into recipes.

## Layer 2: AI fallback for unmatched dishes

AI fallback is for practical coverage when a dish is not in verified metadata yet. It must remain temporary and clearly labeled:

- matchStatus: ai-generated
- metadataSource: ai-fallback
- verified: false

AI fallback should never be saved as verified metadata without manual review.

## Coverage principle

The goal is not to claim that DishKAI has verified knowledge for every possible restaurant dish. The goal is:

- verified cards for high-frequency dishes
- useful AI estimates for long-tail menu items
- clear labeling so Leo and Cindy can trust what is verified and what is estimated
