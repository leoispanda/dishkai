# World Depth Batch 032 Audit

Date: 2026-06-21

- Batch size: 30
- Scope: 6 Middle Eastern rows, 18 Mexican rows, and the first 6 Moroccan rows.
- Candidate rule: accepted only real, named restaurant dishes with useful ordering semantics; generic buckets and duplicate transliterations stayed quarantined.
- Metadata action: replaced generated/template text with dish-specific composition, distinctive flavor sources, texture, risk flags, and diner-facing order verdicts.
- Image action: existing quarantined images were rejected after contact-sheet review because they were mostly shifted, duplicated, or semantically wrong. All accepted rows received restaurant-realistic generated replacement images, local metadataCode stamping, and matching main/thumb WebP assets.
- Existing image evidence: data/internal/audit/rebuild-batches/world-depth-batch-032-existing-images.png
- Final image overview: data/internal/audit/rebuild-batches/world-depth-batch-032-final-images.png
- Source PNG copies: data/internal/audit/rebuild-batches/world-depth-batch-032-image-sources/
- Alias decision: Existing exact/translated aliases were kept. No broad generic aliases such as bare curry, soup, meat, or salad were added.
- Decision: these 30 rows enter verified export where applicable through audited allowlist or trusted shakshuka unquarantine; failed duplicate makloubeh remains out as an independent dish.

| # | code | dishId | cuisine | name | risk flags | distinctive flavor sources | image decision | verified decision |
|---|---|---|---|---|---|---|---|---|
| 1 | 120025 | mixed-grill-middle-eastern | middle-eastern | Middle Eastern Mixed Grill | contains-gluten | lamb, ground-meat, garlic, charred edges | generated replacement/code-stamped | verified metadata + generated image |
| 2 | 120026 | shish-taouk | middle-eastern | Shish Taouk | contains-dairy, contains-gluten | chicken, garlic, yogurt, lemon | generated replacement/code-stamped | verified metadata + generated image |
| 3 | 120027 | batata-harra | middle-eastern | Batata Harra | can-be-spicy | chili, garlic, coriander, lemon | generated replacement/code-stamped | verified metadata + generated image |
| 4 | 120028 | muhammara | middle-eastern | Muhammara | contains-tree-nut, contains-gluten, can-be-spicy | bell-pepper, walnuts, olive-oil, chili | generated replacement/code-stamped | verified metadata + generated image |
| 5 | 120029 | umm-ali | middle-eastern | Umm Ali | contains-gluten, contains-dairy, contains-tree-nut | milk-solids, puff-pastry, almonds, raisins | generated replacement/code-stamped | verified metadata + generated image |
| 6 | 120030 | basbousa | middle-eastern | Basbousa | contains-gluten, contains-dairy, contains-tree-nut | semolina, sugar, almonds, coconut-milk | generated replacement/code-stamped | verified metadata + generated image |
| 7 | 121013 | fajitas | mexican | Fajitas | contains-gluten, can-be-spicy | bell-pepper, salsa, lime, charred edges | generated replacement/code-stamped | verified metadata + generated image |
| 8 | 121014 | tostadas | mexican | Tostadas | contains-dairy, can-be-spicy | salsa, black-beans, sour-cream, cheese | generated replacement/code-stamped | verified metadata + generated image |
| 9 | 121015 | sopes | mexican | Sopes | contains-dairy, can-be-spicy | corn, black-beans, salsa, cheese | generated replacement/code-stamped | verified metadata + generated image |
| 10 | 121016 | gorditas | mexican | Gorditas | contains-dairy, can-be-spicy | corn, ground-meat, black-beans, salsa | generated replacement/code-stamped | verified metadata + generated image |
| 11 | 121017 | elote | mexican | Elote | contains-dairy, can-be-spicy | corn, sour-cream, chili, lime | generated replacement/code-stamped | verified metadata + generated image |
| 12 | 121018 | esquites | mexican | Esquites | contains-dairy, can-be-spicy | corn, sour-cream, chili, lime | generated replacement/code-stamped | verified metadata + generated image |
| 13 | 121019 | chilaquiles | mexican | Chilaquiles | contains-egg, contains-dairy, can-be-spicy | salsa, corn-tortilla-chips, egg, sour-cream | generated replacement/code-stamped | verified metadata + generated image |
| 14 | 121020 | huevos-rancheros | mexican | Huevos Rancheros | contains-egg, contains-dairy, can-be-spicy | egg, tomato-sauce, black-beans, avocado | generated replacement/code-stamped | verified metadata + generated image |
| 15 | 121021 | birria | mexican | Birria | contains-gluten, can-be-spicy | beef, chili, lime, tomato-sauce | generated replacement/code-stamped | verified metadata + generated image |
| 16 | 121022 | birria-tacos | mexican | Birria Tacos | contains-gluten, contains-dairy, can-be-spicy | beef, chili, cheese, lime | generated replacement/code-stamped | verified metadata + generated image |
| 17 | 121023 | barbacoa | mexican | Barbacoa | contains-gluten, can-be-spicy | beef, salsa, lime, coriander | generated replacement/code-stamped | verified metadata + generated image |
| 18 | 121024 | carnitas | mexican | Carnitas | contains-pork, contains-gluten, can-be-spicy | pork, salsa, lime, browned edges | generated replacement/code-stamped | verified metadata + generated image |
| 19 | 121025 | al-pastor | mexican | Tacos al Pastor | contains-pork, contains-gluten, can-be-spicy | pork, pineapple, chili, lime | generated replacement/code-stamped | verified metadata + generated image |
| 20 | 121026 | cochinita-pibil | mexican | Cochinita Pibil | contains-pork, contains-gluten, can-be-spicy | pork, lime, onion, chili | generated replacement/code-stamped | verified metadata + generated image |
| 21 | 121027 | sopa-de-lima | mexican | Sopa de Lima | none | lime, chicken, corn-tortilla-chips, avocado | generated replacement/code-stamped | verified metadata + generated image |
| 22 | 121028 | aguachile | mexican | Aguachile | contains-shellfish, can-be-spicy | shrimp, lime, chili, cucumber | generated replacement/code-stamped | verified metadata + generated image |
| 23 | 121029 | tres-leches-cake | mexican | Tres Leches Cake | contains-gluten, contains-dairy, contains-egg | milk-solids, cream, vanilla, berries | generated replacement/code-stamped | verified metadata + generated image |
| 24 | 121030 | arroz-con-leche-mexican | mexican | Mexican Arroz con Leche | contains-dairy | milk-solids, cinnamon, raisins, sugar | generated replacement/code-stamped | verified metadata + generated image |
| 25 | 124013 | lamb-brochettes | moroccan | Lamb Brochettes | contains-gluten | lamb, cumin, paprika, lemon | generated replacement/code-stamped | verified metadata + generated image |
| 26 | 124014 | kefta-brochettes | moroccan | Kefta Brochettes | contains-gluten | ground-meat, cumin, paprika, parsley | generated replacement/code-stamped | verified metadata + generated image |
| 27 | 124015 | rfissa | moroccan | Rfissa | contains-gluten, contains-dairy | fenugreek, chicken, lentils, niter-kibbeh | generated replacement/code-stamped | verified metadata + generated image |
| 28 | 124016 | tanjia | moroccan | Tanjia | none | lamb, garlic, saffron, lemon | generated replacement/code-stamped | verified metadata + generated image |
| 29 | 124017 | bissara | moroccan | Bissara | can-be-spicy | fava-beans, olive-oil, cumin, paprika | generated replacement/code-stamped | verified metadata + generated image |
| 30 | 124018 | loubia | moroccan | Loubia | can-be-spicy | white-beans, tomato-sauce, garlic, cumin | generated replacement/code-stamped | verified metadata + generated image |
