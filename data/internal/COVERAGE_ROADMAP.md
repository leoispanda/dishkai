# DishKAI Coverage Roadmap

DishKAI should feel useful in real restaurants, not only in demo menus. Real-world coverage needs three layers.

## Layer 1: Verified DishKAI metadata

Verified metadata is the source of truth. It should be curated for high-frequency dishes and reusable ingredients, seasonings, risk flags, aliases, and cooking profiles.

Current verified starter database:

- 1128 verified dishes
- 28 cuisines
- 3296 verified aliases

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
- Real Menu Miss Batch 047 accepted 8 stable Greek/French real-menu misses: `bekri-mezes`, `arnaki-tigania`, `fromage-blanc-dessert`, `religieuse`, `tarte-amandine`, `cafe-gourmand`, `chocolat-liegeois`, and `cafe-liegeois`. It also mapped `cheese platter` / `cheese plate` / `assiette de fromages` to existing `plateau-de-fromages`. Generic proteins, drinks, and one-off dessert names stayed out. Verified export is now 1118 dishes / 3219 aliases.
- Real Menu Miss Batch 048 accepted 2 stable items from the remaining backlog: Spanish `almendras-fritas` and French regional `murcon-aux-ravioles`. It also remapped explicit Belgian tartare aliases to existing `filet-americain` instead of creating duplicate `beef-tartare-belgian`. Bokit, Accra, and Coconut pie stayed deferred until DishKAI has an appropriate Caribbean/French-Caribbean cuisine taxonomy. Verified export is now 1120 dishes / 3238 aliases.
- General Batch 001 added a new verified `general` cuisine for stable cross-restaurant dishes and sides that are more specific than universal fallback cards: `coleslaw`, `corn-on-the-cob`, `garlic-bread`, `onion-rings`, `mashed-potatoes`, `mixed-vegetables`, `grilled-vegetables`, and `side-rice`. It uses group `00` dish metadata codes (`100001`-`100008`) with generated restaurant-realistic code-stamped assets. Verified export is now 1128 dishes / 3296 aliases across 28 cuisines.

Next verified coverage targets:

1. Keep rebuilding quarantined rows only in <=30-dish batches when replacement-quality images are available.
2. Keep processing central real-menu misses in strict <=30-dish batches; promote only stable reusable dishes and add aliases for already covered verified dishes before creating new dish cards.
3. Re-audit optional depth only when it helps real ordering coverage. Italian, French, German, Dutch, Spanish, and Scandinavian are reviewed to 60; Belgian, British-Irish, Portuguese, and Greek have partial reviewed depth because duplicate or unsafe rows stayed quarantined.

Verified metadata should stay concise and ordering-focused. Do not turn cards into recipes.

## Layer 2: Universal generic ordering cards

Universal generic cards cover broad high-frequency menu words that appear in many restaurants but are not stable enough to become verified dish records, such as fries, salad, steak/ribeye, grilled chicken, prawns/shrimp, dessert, and drinks.

The verified `general` cuisine is separate from this layer. General dishes are specific reviewed menu items with image assets and stable metadata; universal cards remain broad guidance only.

They reduce avoidable unmatched results while preserving the verified database boundary:

- matchStatus: universal
- metadataSource: universal-generic
- verified: false

Universal cards should not be saved to the unmatched KV backlog and should not be promoted to verified dishes unless a future task turns a specific, stable dish into a reviewed verified record.

## Layer 3: AI fallback for unmatched dishes

AI fallback is for practical coverage when a dish is not in verified metadata yet. It must remain temporary and clearly labeled:

- matchStatus: ai-generated
- metadataSource: ai-fallback
- verified: false

AI fallback should never be saved as verified metadata without manual review.

## Coverage principle

The goal is not to claim that DishKAI has verified knowledge for every possible restaurant dish. The goal is:

- verified cards for high-frequency dishes
- universal guidance for broad restaurant-common menu terms
- useful AI estimates for long-tail menu items
- clear labeling so Leo and Cindy can trust what is verified and what is estimated
