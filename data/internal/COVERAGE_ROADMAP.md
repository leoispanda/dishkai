# DishKAI Coverage Roadmap

DishKAI should feel useful in real restaurants, not only in demo menus. Real-world coverage needs two layers.

## Layer 1: Verified DishKAI metadata

Verified metadata is the source of truth. It should be curated for high-frequency dishes and reusable ingredients, seasonings, risk flags, aliases, and cooking profiles.

Current verified starter database:

- 589 verified dishes
- 27 cuisines
- 1834 verified aliases

Recent depth progress:

- Generated expansion layers were quarantined after strict audit; verified counts only reflect rows rebuilt through manual <=30-dish batches.
- All registered European cuisines remain at least 30 verified dishes after strict audit.
- World Layer Batches 018-021 and World Truth Batches 022-023 brought verified coverage to 589 dishes / 1834 aliases.
- Global Truth Batches 024-033 were reverted because their abstract deterministic schematic images were too crude to identify dishes at a glance. Those rows need replacement-quality, clearly recognizable images before they can return to verified.

Next verified coverage targets:

1. Rebuild quarantined global-depth cuisines in <=30-dish batches only when replacement-quality images are available.
2. Prioritize real-menu misses and cuisines below 30 verified dishes, but do not accept abstract schematic/cartoon plate renders as verified images.
3. Re-audit European depth only when real menu misses justify going beyond 30.

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
