# DishKAI Coverage Roadmap

DishKAI should feel useful in real restaurants, not only in demo menus. Real-world coverage needs two layers.

## Layer 1: Verified DishKAI metadata

Verified metadata is the source of truth. It should be curated for high-frequency dishes and reusable ingredients, seasonings, risk flags, aliases, and cooking profiles.

Current verified starter database:

- 838 dishes
- 27 cuisines
- 2553 aliases

Recent depth progress:

- All registered cuisines now have at least 30 verified dishes with visual-reference assets.
- Greek remains the deepest cuisine at 58 verified dishes.
- Spanish is at 30 verified dishes, and the global 30 pass brought every other registered cuisine to 30.

Next verified coverage targets:

1. Quality-audit the new global depth cards, especially high-risk items and dishes with strong restaurant variation.
2. Use the central unmatched-dish backlog and real menu misses to prioritize the next verified batches.
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
