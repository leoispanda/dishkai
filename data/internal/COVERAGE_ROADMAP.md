# DishKAI Coverage Roadmap

DishKAI should feel useful in real restaurants, not only in demo menus. Real-world coverage needs two layers.

## Layer 1: Verified DishKAI metadata

Verified metadata is the source of truth. It should be curated for high-frequency dishes and reusable ingredients, seasonings, risk flags, aliases, and cooking profiles.

Current verified starter database:

- 931 verified dishes
- 27 cuisines
- 2713 verified aliases

Recent depth progress:

- Generated expansion layers were quarantined after strict audit; verified counts only reflect rows rebuilt through manual <=30-dish batches.
- Registered European cuisines remain at least 30 verified dishes after the `ensaladilla-rusa` replacement restored Spanish to 30.
- World Layer Batches 018-021 and World Truth Batches 022-023 brought verified coverage to 589 dishes / 1834 aliases.
- A 2026-06-20 image re-review removed `ensaladilla-rusa` from verified because its image was misleading; a replacement-quality image restored current verified coverage to 589 dishes / 1834 aliases.
- Global Truth Batches 024-033 were reverted because their abstract deterministic schematic images were too crude to identify dishes at a glance. Those rows need replacement-quality, clearly recognizable images before they can return to verified.
- Southeast Asia and Indonesian depth work restored Vietnamese and Indonesian to 30 verified dishes each. Indonesian Batch 027 completed the final six Indonesian rows after replacing all six duplicate/mismatched candidate images.
- Italian Batch 028 re-audited the optional European depth layer for Italian rows `101031`-`101060`, replacing all 30 mismatched candidate images with restaurant-realistic generated assets and rebuilding dish-specific metadata. Italian verified coverage is now 60 dishes.
- French Batch 029 re-audited French rows `103031`-`103060`, replacing all 30 mismatched candidate images with restaurant-realistic generated assets and rebuilding dish-specific metadata. French verified coverage is now 60 dishes.
- Malaysian/Singaporean Batch 030 rebuilt rows `118013`-`118030`, replacing all mismatched candidate images with restaurant-realistic generated assets and rebuilding dish-specific metadata. Malaysian/Singaporean verified coverage is now 30 dishes.
- World Depth Batches 031-033 rebuilt 90 rows across Turkish, Middle Eastern, Mexican, Moroccan, and Ethiopian coverage. Existing candidate images were rejected as shifted/mismatched, all accepted rows received restaurant-realistic generated replacements with visible metadataCode stamps, and `makloubeh` was kept out as a duplicate transliteration of `maqluba` while `kunafa` became the independent replacement. These five cuisines now have 30 verified dishes each.
- World Depth Batches 034-037 rebuilt 120 rows across American, Surinamese, Peruvian, Brazilian, British-Irish, and Portuguese coverage. American, Surinamese, Peruvian, and Brazilian now each have 30 verified dishes; British-Irish and Portuguese gained optional reviewed depth. Eight existing American cafe/brunch images were accepted, the other 112 rows received restaurant-realistic generated replacement images with visible metadataCode stamps, and cross-cuisine-prone aliases such as bare `cheesecake`, `cha siu`, `kip sate`, `tapioca`, and `alfajores` were narrowed.

Next verified coverage targets:

1. Keep rebuilding quarantined rows only in <=30-dish batches when replacement-quality images are available.
2. Prioritize real-menu misses now that every registered cuisine has at least 30 verified dishes.
3. Re-audit optional depth only when it helps real ordering coverage. Italian and French are reviewed to 60; British-Irish and Portuguese have partial reviewed depth; other depth rows remain quarantined until strict review.

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
