# World Depth Batch 033 Audit

Date: 2026-06-21

- Batch size: 30
- Scope: The remaining 12 Moroccan rows plus 18 Ethiopian rows, completing Ethiopian to 30 verified dishes.
- Candidate rule: accepted only real, named restaurant dishes with useful ordering semantics; generic buckets and duplicate transliterations stayed quarantined.
- Metadata action: replaced generated/template text with dish-specific composition, distinctive flavor sources, texture, risk flags, and diner-facing order verdicts.
- Image action: existing quarantined images were rejected after contact-sheet review because they were mostly shifted, duplicated, or semantically wrong. All accepted rows received restaurant-realistic generated replacement images, local metadataCode stamping, and matching main/thumb WebP assets.
- Existing image evidence: data/internal/audit/rebuild-batches/world-depth-batch-033-existing-images.png
- Final image overview: data/internal/audit/rebuild-batches/world-depth-batch-033-final-images.png
- Source PNG copies: data/internal/audit/rebuild-batches/world-depth-batch-033-image-sources/
- Alias decision: Existing exact/translated aliases were kept. The batch avoids adding broad generic aliases for stews, tibs, salads, porridge, bread, or drinks.
- Decision: these 30 rows enter verified export where applicable through audited allowlist or trusted shakshuka unquarantine; failed duplicate makloubeh remains out as an independent dish.

| # | code | dishId | cuisine | name | risk flags | distinctive flavor sources | image decision | verified decision |
|---|---|---|---|---|---|---|---|---|
| 1 | 124019 | maakouda | moroccan | Maakouda | contains-egg, can-be-spicy | potato, cumin, parsley, harissa | generated replacement/code-stamped | verified metadata + generated image |
| 2 | 124020 | batbout | moroccan | Batbout | contains-gluten, contains-fish, contains-egg, can-be-spicy | bread, tuna, olives, harissa | generated replacement/code-stamped | verified metadata + generated image |
| 3 | 124021 | msemen | moroccan | Msemen | contains-gluten, contains-dairy | wheat-flour, butter, honey | generated replacement/code-stamped | verified metadata + generated image |
| 4 | 124022 | baghrir | moroccan | Baghrir | contains-gluten, contains-dairy | semolina, butter, honey | generated replacement/code-stamped | verified metadata + generated image |
| 5 | 124023 | khobz | moroccan | Khobz | contains-gluten | bread, wheat-flour, sea-salt | generated replacement/code-stamped | verified metadata + generated image |
| 6 | 124024 | sardines-chermoula | moroccan | Sardines Chermoula | contains-fish | sardines, garlic, lemon, cumin | generated replacement/code-stamped | verified metadata + generated image |
| 7 | 124025 | fish-tagine | moroccan | Fish Tagine | contains-fish | fish-fillet, olives, lemon, cumin | generated replacement/code-stamped | verified metadata + generated image |
| 8 | 124026 | chicken-bastilla | moroccan | Chicken Bastilla | contains-gluten, contains-tree-nut, contains-egg | chicken, almonds, cinnamon, sugar | generated replacement/code-stamped | verified metadata + generated image |
| 9 | 124027 | almond-briouat | moroccan | Almond Briouat | contains-gluten, contains-tree-nut, contains-sesame | almond-paste, honey, sesame-seeds, cinnamon | generated replacement/code-stamped | verified metadata + generated image |
| 10 | 124028 | chebakia | moroccan | Chebakia | contains-gluten, contains-sesame | honey, sesame-seeds, cinnamon | generated replacement/code-stamped | verified metadata + generated image |
| 11 | 124029 | mhancha | moroccan | Mhancha | contains-gluten, contains-tree-nut | almond-paste, honey, cinnamon | generated replacement/code-stamped | verified metadata + generated image |
| 12 | 124030 | sellou | moroccan | Sellou | contains-gluten, contains-tree-nut, contains-sesame, contains-dairy | almonds, sesame-seeds, honey, cinnamon | generated replacement/code-stamped | verified metadata + generated image |
| 13 | 127013 | key-wat | ethiopian | Key Wat | can-be-spicy, contains-dairy | berbere, niter-kibbeh, beef, injera | generated replacement/code-stamped | verified metadata + generated image |
| 14 | 127014 | alicha-wat | ethiopian | Alicha Wat | contains-dairy | turmeric, niter-kibbeh, potato, injera | generated replacement/code-stamped | verified metadata + generated image |
| 15 | 127015 | minchet-abish | ethiopian | Minchet Abish | can-be-spicy, contains-egg, contains-dairy | berbere, ground-meat, niter-kibbeh, egg | generated replacement/code-stamped | verified metadata + generated image |
| 16 | 127016 | dulet | ethiopian | Dulet | can-be-spicy, contains-dairy | offal, mitmita, niter-kibbeh, green-onion | generated replacement/code-stamped | verified metadata + generated image |
| 17 | 127017 | derek-tibs | ethiopian | Derek Tibs | contains-dairy, can-be-spicy | beef, niter-kibbeh, rosemary, onion | generated replacement/code-stamped | verified metadata + generated image |
| 18 | 127018 | shekla-tibs | ethiopian | Shekla Tibs | contains-dairy, can-be-spicy | lamb, niter-kibbeh, onion, bell-pepper | generated replacement/code-stamped | verified metadata + generated image |
| 19 | 127019 | zigni | ethiopian | Zigni | can-be-spicy, contains-egg | berbere, beef, injera, egg | generated replacement/code-stamped | verified metadata + generated image |
| 20 | 127020 | atkilt-wat | ethiopian | Atkilt Wat | none | turmeric, cabbage, potato, carrot | generated replacement/code-stamped | verified metadata + generated image |
| 21 | 127021 | azifa | ethiopian | Azifa | can-be-spicy | lentils, lemon, chili, parsley | generated replacement/code-stamped | verified metadata + generated image |
| 22 | 127022 | timatim-salata | ethiopian | Timatim Salata | can-be-spicy | tomato, lemon, chili, onion | generated replacement/code-stamped | verified metadata + generated image |
| 23 | 127023 | ayib | ethiopian | Ayib | contains-dairy | ayib-cheese, collard-greens, sea-salt | generated replacement/code-stamped | verified metadata + generated image |
| 24 | 127024 | chechebsa | ethiopian | Chechebsa | contains-gluten, contains-dairy, can-be-spicy | berbere, niter-kibbeh, bread, honey | generated replacement/code-stamped | verified metadata + generated image |
| 25 | 127025 | genfo | ethiopian | Genfo | contains-gluten, contains-dairy, can-be-spicy | niter-kibbeh, berbere, semolina | generated replacement/code-stamped | verified metadata + generated image |
| 26 | 127026 | kinche | ethiopian | Kinche | contains-gluten, contains-dairy | cracked-wheat, niter-kibbeh, yogurt | generated replacement/code-stamped | verified metadata + generated image |
| 27 | 127027 | firfir-injera | ethiopian | Injera Firfir | contains-dairy, can-be-spicy | injera, berbere, niter-kibbeh, onion | generated replacement/code-stamped | verified metadata + generated image |
| 28 | 127028 | shimbra-assa | ethiopian | Shimbra Assa | can-be-spicy | chickpea-flour-batter, berbere, tomato-sauce, injera | generated replacement/code-stamped | verified metadata + generated image |
| 29 | 127029 | spris | ethiopian | Spris | none | mango, avocado, banana, berries | generated replacement/code-stamped | verified metadata + generated image |
| 30 | 127030 | ambasha | ethiopian | Ambasha | contains-gluten, contains-dairy | wheat-flour, honey, cardamom, butter | generated replacement/code-stamped | verified metadata + generated image |
