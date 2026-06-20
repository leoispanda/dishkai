# french-batch-029

- Batch size: 30
- Scope: French `europe-depth` rows `103031` through `103060`, reviewed as the next optional European 30-dish depth continuation after Italian Batch 028.
- Candidate rule: accepted only specific French restaurant/menu dishes with clear identity. Broad menu-family rows stayed out unless the user-facing metadata explains the variation and ordering watch-out.
- Metadata action: replaced generated/template content with dish-specific composition, flavor sources, texture, risk flags, order verdicts, and confidence values above the verified threshold.
- Ingredient action: added reusable French ingredient objects for frisée, buckwheat galette, chickpea pancake, Alpine cheeses, frog legs, charcuterie items, crème anglaise, puff pastry, lemon curd, orange caramel sauce, pike quenelle, duck breast, and beef entrecôte.
- Alias action: added safe French spelling/accent variants and precise menu names such as `Entrecôte à la bordelaise`, `Planche de charcuterie`, `Île flottante`, `Soufflé au fromage`, and `Crêpes Suzette`; no broad single-word aliases were added for ambiguous terms.
- Image action: the old French candidate sheet was rejected because many rows visually depicted unrelated French classics. All 30 accepted rows received generated restaurant-realistic replacement images, local metadataCode stamping, and main/thumb WebP output.
- Image overview: data/internal/audit/rebuild-batches/french-batch-029-final-images.png
- Decision: these 30 rows enter `auditedGeneratedDishIds`; French verified coverage reaches 60. Other European depth rows remain quarantined until separate strict review batches.

| # | code | dishId | category | risk flags | distinctive flavor sources | decision |
|---|---|---|---|---|---|---|
| 1 | 103031 | salade-lyonnaise | salad | contains-egg, contains-gluten, contains-pork | bacon lardons, runny egg yolk, mustard vinaigrette | verified metadata + generated image |
| 2 | 103032 | galette-complete | crepe | contains-egg, contains-dairy, contains-pork | buckwheat galette, ham and melted cheese, egg yolk | verified metadata + generated image |
| 3 | 103033 | pissaladiere | bread | contains-gluten, contains-fish | caramelized onions, anchovies, black olives | verified metadata + generated image |
| 4 | 103034 | socca | bread | none | chickpea batter, olive oil, black pepper | verified metadata + generated image |
| 5 | 103035 | brandade-de-morue | fish | contains-fish, contains-dairy | salt cod, garlic, olive-oil creaminess | verified metadata + generated image |
| 6 | 103036 | aligot | potato | contains-dairy | melted mountain cheese, buttery potato, garlic | verified metadata + generated image |
| 7 | 103037 | raclette | cheese | contains-dairy, contains-pork, contains-gluten | melted raclette cheese, cornichons, cured meats | verified metadata + generated image |
| 8 | 103038 | fondue-savoyarde | cheese | contains-dairy, contains-gluten, contains-alcohol | melted Alpine cheese, wine, garlic | verified metadata + generated image |
| 9 | 103039 | tartare-de-saumon | raw-seafood | contains-raw-fish, contains-fish | raw salmon, lemon, olive oil | verified metadata + generated image |
| 10 | 103040 | magret-de-canard | meat | contains-alcohol | seared duck fat, pink duck breast, wine sauce | verified metadata + generated image |
| 11 | 103041 | entrecote-bordelaise | meat | contains-alcohol, contains-dairy | beef entrecôte, red-wine Bordelaise sauce, shallot aroma | verified metadata + generated image |
| 12 | 103042 | poulet-basquaise | meat | none | sweet peppers, tomato sauce, paprika | verified metadata + generated image |
| 13 | 103043 | pot-au-feu | stew | none | beef broth, root vegetables, mustard side | verified metadata + generated image |
| 14 | 103044 | navarin-dagneau | stew | none | braised lamb, spring vegetables, herb finish | verified metadata + generated image |
| 15 | 103045 | quenelles | fish | contains-fish, contains-dairy, contains-egg, contains-gluten | pike quenelle, cream sauce, butter | verified metadata + generated image |
| 16 | 103046 | cuisses-de-grenouille | meat | contains-dairy | frog legs, garlic-parsley butter, lemon | verified metadata + generated image |
| 17 | 103047 | pate-de-campagne | starter | contains-pork, contains-gluten | country pâté, cornichons, mustard | verified metadata + generated image |
| 18 | 103048 | rillettes | starter | contains-pork, contains-gluten | slow-cooked pork, fat-rich spread, cornichons | verified metadata + generated image |
| 19 | 103049 | terrine | starter | contains-gluten | set terrine slice, pickles, mustard | verified metadata + generated image |
| 20 | 103050 | plateau-de-fromages | cheese | contains-dairy, contains-gluten, contains-tree-nut | assorted French cheeses, bread, sweet or nut side | verified metadata + generated image |
| 21 | 103051 | charcuterie-board-french | starter | contains-pork, contains-gluten | cured meats, pâté and rillettes, mustard and cornichons | verified metadata + generated image |
| 22 | 103052 | ile-flottante | dessert | contains-egg, contains-dairy, contains-tree-nut | airy meringue, vanilla custard, caramel | verified metadata + generated image |
| 23 | 103053 | clafoutis | dessert | contains-egg, contains-dairy, contains-gluten | cherries, egg custard, light batter | verified metadata + generated image |
| 24 | 103054 | mille-feuille | dessert | contains-gluten, contains-dairy, contains-egg | puff pastry, vanilla pastry cream, powdered sugar or glaze | verified metadata + generated image |
| 25 | 103055 | eclair | dessert | contains-gluten, contains-egg, contains-dairy | choux pastry, cream filling, chocolate glaze | verified metadata + generated image |
| 26 | 103056 | macaron | dessert | contains-tree-nut, contains-egg, contains-dairy | almond meringue, buttercream or ganache, flavored filling | verified metadata + generated image |
| 27 | 103057 | tarte-au-citron | dessert | contains-gluten, contains-egg, contains-dairy | lemon curd, buttery tart shell, optional meringue | verified metadata + generated image |
| 28 | 103058 | mousse-au-chocolat | dessert | contains-dairy, contains-egg | dark chocolate, whipped cream texture, cocoa depth | verified metadata + generated image |
| 29 | 103059 | souffle-au-fromage | cheese | contains-egg, contains-dairy, contains-gluten | baked cheese, egg lift, béchamel base | verified metadata + generated image |
| 30 | 103060 | crepes-suzette | dessert | contains-gluten, contains-egg, contains-dairy, contains-alcohol | orange-butter sauce, caramel, orange liqueur aroma | verified metadata + generated image |
