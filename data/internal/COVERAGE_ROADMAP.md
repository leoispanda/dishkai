# DishKAI Coverage Roadmap

DishKAI should feel useful in real restaurants, not only in demo menus. Real-world coverage needs two layers.

## Layer 1: Verified DishKAI metadata

Verified metadata is the source of truth. It should be curated for high-frequency dishes and reusable ingredients, seasonings, risk flags, aliases, and cooking profiles.

Current verified starter database:

- 1710 dishes
- 27 cuisines
- 4297 aliases

Recent depth progress:

- All registered cuisines now have at least 30 verified dishes with visual-reference assets.
- European restaurant coverage has been deepened to 120 verified dishes each for Italian, Dutch, French, Greek, Spanish, German, Belgian, British-Irish, Portuguese, and Scandinavian.
- Non-European registered cuisines remain at 30 verified dishes unless real menu misses indicate a higher-priority depth pass.

Next verified coverage targets:

1. Quality-audit the European 120 pass, especially high-variation generic restaurant-menu dishes, raw seafood, pork-heavy dishes, and mixed platters.
2. Use the central unmatched-dish backlog and real menu misses to prioritize whether non-European cuisines should receive the next 60/90/120 depth pass.
3. Add new cuisines only when real restaurant menus show repeated unmet demand.

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
