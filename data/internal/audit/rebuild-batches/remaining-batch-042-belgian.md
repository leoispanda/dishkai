# Remaining Batch 042 Belgian Audit

Date: 2026-06-22

- Batch size: 30
- Accepted rows: 26
- Rejected rows: 4
- Scope: 30 Belgian optional-depth rows from the remaining rebuild queue.
- Candidate rule: accepted only real, named menu dishes with clear ordering semantics; duplicate transliterations, broad category names, and unsafe aliases stayed quarantined or were narrowed.
- Metadata action: replaced generated/template text with dish-specific composition, flavor, texture, risk flags, cuisine role, and diner-facing order verdicts.
- Image action: old candidate sheets were manually reviewed; accepted rows use restaurant-realistic final images with visible metadataCode stamps and matching main/thumb WebP assets.
- Final image overview: data/internal/audit/rebuild-batches/remaining-batch-042-belgian-final-images.png
- Source PNG copies: data/internal/audit/rebuild-batches/remaining-batch-042-belgian-image-sources/
- Decision: 26 rows passed. Four duplicate/unsafe rows stayed quarantined; safe aliases were narrowed to canonical verified targets.

| # | code | dishId | cuisine | name | risk flags | distinctive flavor sources | verified decision |
|---|---|---|---|---|---|---|---|
| 1 | 107033 | tarte-al-djote | belgian | Tarte al Djote | contains-gluten, contains-dairy, contains-egg | leafy greens, local cheese, buttery crust | accepted |
| 2 | 107034 | potjevleesch | belgian | Potjevleesch | contains-pork | cold aspic, mixed meats, pickles | accepted |
| 3 | 107035 | boudin-blanc | belgian | Boudin Blanc | contains-pork, contains-dairy | mild white sausage, apple, mustard | accepted |
| 4 | 107036 | boudin-noir | belgian | Boudin Noir | contains-pork, contains-dairy | blood sausage, apple sweetness, pan browning | accepted |
| 5 | 107038 | belgian-spaghetti-bolognese | belgian | Belgian Spaghetti Bolognese | contains-gluten, contains-dairy | meat tomato sauce, grated cheese, black pepper | accepted |
| 6 | 107039 | crevettes-grises-cocktail | belgian | Crevettes Grises Cocktail | contains-shellfish, contains-egg | grey shrimp, cocktail sauce, lemon | accepted |
| 7 | 107040 | cod-with-leeks | belgian | Cod with Leeks | contains-fish, contains-dairy | cod, sweet leeks, cream sauce | accepted |
| 8 | 107043 | hesp-rolletjes | belgian | Hesp Rolletjes | contains-pork, contains-dairy | Belgian endive, ham, cheese sauce | accepted |
| 9 | 107044 | kip-aan-t-spit | belgian | Kip aan t Spit | reviewed | roast chicken skin, fries, pepper seasoning | accepted |
| 10 | 107048 | lacquemants | belgian | Lacquemants | contains-gluten, contains-egg, contains-dairy | sticky syrup, thin waffle, butter | accepted |
| 11 | 107049 | cuberdon | belgian | Cuberdon | reviewed | raspberry-like syrup, sugar shell | accepted |
| 12 | 107050 | merveilleux | belgian | Merveilleux | contains-egg, contains-dairy | meringue, whipped cream, chocolate shavings | accepted |
| 13 | 107051 | miserable-cake | belgian | Miserable Cake | contains-tree-nut, contains-gluten, contains-dairy, contains-egg | almond sponge, buttercream, vanilla | accepted |
| 14 | 107052 | cougnou | belgian | Cougnou | contains-gluten, contains-egg, contains-dairy | sweet bread, butter, raisins | accepted |
| 15 | 107053 | cramique | belgian | Cramique | contains-gluten, contains-dairy, contains-egg | raisins, sweet bread, butter | accepted |
| 16 | 107054 | suikerbrood-belgian | belgian | Belgian Suikerbrood | contains-gluten, contains-dairy, contains-egg | pearl sugar, butter, sweet bread | accepted |
| 17 | 107055 | rijstpap | belgian | Rijstpap | contains-dairy, contains-egg | creamy rice, saffron tint, brown sugar | accepted |
| 18 | 107056 | pistolet | belgian | Pistolet | contains-gluten, contains-dairy, contains-pork | crusty roll, butter, simple filling | accepted |
| 19 | 107057 | smoutebollen | belgian | Smoutebollen | contains-gluten, contains-egg, contains-dairy | fried dough, powdered sugar, vanilla | accepted |
| 20 | 107058 | gaufres-de-liege | belgian | Gaufres de Liege | contains-gluten, contains-egg, contains-dairy | caramelized pearl sugar, butter, yeasted waffle dough | accepted |
| 21 | 107059 | gaufres-de-bruxelles | belgian | Gaufres de Bruxelles | contains-gluten, contains-egg, contains-dairy | crisp waffle, powdered sugar, cream topping | accepted |
| 22 | 107060 | boule-de-berlin-belgian | belgian | Belgian Boule de Berlin | contains-gluten, contains-egg, contains-dairy | fried dough, pastry cream, powdered sugar | accepted |
| 23 | 107019 | stoofvlees | belgian | Stoofvlees | contains-alcohol, contains-gluten | beer gravy, slow-braised beef, fries | accepted |
| 24 | 107020 | paling-in-t-groen | belgian | Paling in het Groen | contains-fish | eel, green herb sauce, garlic | accepted |
| 25 | 107028 | sirop-de-liege-dessert | belgian | Sirop de Liège Dessert | contains-dairy, contains-gluten | apple-pear syrup, cheese pairing, bread | accepted |
| 26 | 107029 | belgian-endive-salad | belgian | Belgian Endive Salad | contains-egg, contains-tree-nut | Belgian endive, apple, creamy vinaigrette | accepted |

Rejected / remapped rows:

| dishId | decision |
|---|---|
| americain-prepare | duplicate of verified filet-americain; narrow aliases remapped to filet-americain |
| grey-shrimp-tomato | duplicate of verified tomate-crevette; narrow aliases remapped to tomate-crevette |
| vlaamse-stoofkarbonaden | duplicate of accepted/verified stoofvlees; narrow menu alias remapped |
| beef-tartare-belgian | unsafe broad duplicate around steak tartare/filet americain; kept out of verified export |
