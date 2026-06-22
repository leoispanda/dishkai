# DishKAI Coverage Roadmap

DishKAI should feel useful in real restaurants, not only in demo menus. Real-world coverage needs two layers.

## Layer 1: Verified DishKAI metadata

Verified metadata is the source of truth. It should be curated for high-frequency dishes and reusable ingredients, seasonings, risk flags, aliases, and cooking profiles.

Current verified starter database:

- 1110 verified dishes
- 27 cuisines
- 3160 verified aliases

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
- Remaining European Depth Batches 039-044 rebuilt 158 additional rows across Dutch, Spanish, German, Belgian, Scandinavian, Greek, and Portuguese coverage. Dutch, Spanish, German, and Scandinavian now have 60 verified dishes; Belgian is 56 after duplicate rejection, Portuguese is 59, and Greek is 45. `cataplana` and `makloubeh` stayed quarantined under prior duplicate decisions, and Belgian duplicate aliases were narrowed to canonical verified targets.
- Real Menu Miss Batch 045 reviewed the centralized unmatched/AI-generated KV backlog snapshot and accepted 12 real, reusable restaurant dishes plus safe alias fixes. Generic proteins, sides, menu buckets, and restaurant-specific specials stayed unverified/fallback-only. Verified export is now 1101 dishes / 3116 aliases.
- Compound Menu Miss Batch 046 accepted 9 stable compound or assembled dishes from the remaining real-menu miss backlog: Italian schiacciata, French baked egg and sauced chicken preparations, Spanish preserved tapas, Indian tandoori chicken naan, Middle Eastern blackened eggplant with tahini, and American/Hawaiian poke bowl. Bare generic aliases and restaurant-specific garnish stacks stayed out. Verified export is now 1110 dishes / 3160 aliases.

Next verified coverage targets:

1. Keep rebuilding quarantined rows only in <=30-dish batches when replacement-quality images are available.
2. Keep processing central real-menu misses in strict <=30-dish batches; promote only stable reusable dishes and add aliases for already covered verified dishes before creating new dish cards.
3. Re-audit optional depth only when it helps real ordering coverage. Italian, French, German, Dutch, Spanish, and Scandinavian are reviewed to 60; Belgian, British-Irish, Portuguese, and Greek have partial reviewed depth because duplicate or unsafe rows stayed quarantined.

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
