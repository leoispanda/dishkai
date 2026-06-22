# Remaining Batch 044 Portuguese Greek Duplicate Audit

Date: 2026-06-22

- Batch size: 14
- Accepted rows: 12
- Rejected rows: 2
- Scope: Greek, Portuguese, and duplicate edge-case rows from the remaining rebuild queue.
- Candidate rule: accepted only real, named menu dishes with clear ordering semantics; duplicate transliterations, broad category names, and unsafe aliases stayed quarantined or were narrowed.
- Metadata action: replaced generated/template text with dish-specific composition, flavor, texture, risk flags, cuisine role, and diner-facing order verdicts.
- Image action: old candidate sheets were manually reviewed; accepted rows use restaurant-realistic final images with visible metadataCode stamps and matching main/thumb WebP assets.
- Final image overview: data/internal/audit/rebuild-batches/remaining-batch-044-portuguese-greek-duplicate-final-images.png
- Source PNG copies: data/internal/audit/rebuild-batches/remaining-batch-044-portuguese-greek-duplicate-image-sources/
- Decision: 12 rows passed. Cataplana and makloubeh remained quarantined under prior duplicate decisions.

| # | code | dishId | cuisine | name | risk flags | distinctive flavor sources | verified decision |
|---|---|---|---|---|---|---|---|
| 1 | 104060 | gigantes-plaki | greek | Gigantes Plaki | reviewed | tomato sauce, olive oil, soft giant beans | accepted |
| 2 | 125050 | queijo-da-serra | portuguese | Queijo da Serra | contains-dairy, contains-gluten | sheep cheese, creamy center, quince paste | accepted |
| 3 | 125051 | farinheira | portuguese | Farinheira | contains-pork, contains-gluten, contains-egg | smoked farinheira, egg, olive oil | accepted |
| 4 | 125052 | morcela-portuguesa | portuguese | Morcela Portuguesa | contains-pork | blood sausage, black pepper, apple sweetness | accepted |
| 5 | 125054 | migas-portuguesas | portuguese | Migas Portuguesas | contains-gluten, contains-pork | garlic olive oil, bread crumbs, greens | accepted |
| 6 | 125055 | broa | portuguese | Broa | contains-gluten | cornmeal, crusty bread, olive oil | accepted |
| 7 | 125056 | bolas-de-berlim | portuguese | Bolas de Berlim | contains-gluten, contains-egg, contains-dairy | fried dough, egg custard, sugar | accepted |
| 8 | 125057 | travesseiros | portuguese | Travesseiros | contains-gluten, contains-egg, contains-dairy, contains-tree-nut | almond filling, buttery pastry, powdered sugar | accepted |
| 9 | 125058 | pao-de-lo | portuguese | Pao de Lo | contains-gluten, contains-egg | egg-rich sponge, sugar, light crust | accepted |
| 10 | 125059 | toucinho-do-ceu | portuguese | Toucinho do Ceu | contains-tree-nut, contains-egg | almond, egg yolk, sugar | accepted |
| 11 | 125060 | sericaia | portuguese | Sericaia | contains-egg, contains-dairy | cinnamon, egg custard, syrupy plums | accepted |
| 12 | 125025 | ervilhas-com-ovos | portuguese | Ervilhas com Ovos | contains-egg, contains-pork | peas, poached egg, tomato onion sauce | accepted |

Rejected / remapped rows:

| dishId | decision |
|---|---|
| cataplana | rejected as broad/overlapping with verified cataplana-de-marisco and prior audit decision |
| makloubeh | rejected as duplicate transliteration already mapped to verified maqluba |
