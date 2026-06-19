# DishKAI Coverage Roadmap

DishKAI should feel useful in real restaurants, not only in demo menus. Real-world coverage needs two layers.

## Layer 1: Verified DishKAI metadata

Verified metadata is the source of truth. It should be curated for high-frequency dishes and reusable ingredients, seasonings, risk flags, aliases, and cooking profiles.

Current verified starter database:

- 769 verified dishes
- 27 cuisines
- 2280 verified aliases

Recent depth progress:

- Generated expansion layers were quarantined after strict audit; verified counts only reflect rows rebuilt through manual <=30-dish batches.
- All registered European cuisines remain at least 30 verified dishes after strict audit.
- Indian, Vietnamese, Indonesian, Malaysian/Singaporean, and Turkish now have 30 verified dishes each after Global Truth Batches 024-028.
- Global Truth Batches 029-033 rebuilt 90 verified dishes across Mexican, Moroccan, Surinamese, Peruvian, Brazilian, and Middle Eastern coverage, with old shifted global-depth images rejected and replaced after contact-sheet review.
- Mexican, Moroccan, and Peruvian now have 30 verified dishes. Surinamese and Brazilian have 29 each, and Middle Eastern now has 13.

Next verified coverage targets:

1. Continue rebuilding quarantined global-depth cuisines in <=30-dish batches, prioritizing Middle Eastern, American, Ethiopian, Surinamese, Brazilian, or real-menu misses.
2. Use semantic replacement images or generated clean images only after contact-sheet review; do not reuse shifted global-depth assets.
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
