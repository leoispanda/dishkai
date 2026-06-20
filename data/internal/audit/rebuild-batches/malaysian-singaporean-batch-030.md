# malaysian-singaporean-batch-030

- Batch size: 18
- Scope: Malaysian/Singaporean `global-depth` rows `118013` through `118030`, reviewed to complete the 30-dish verified target after the first 12 world-layer rows.
- Candidate rule: accepted only specific Malaysian or Singaporean restaurant/menu dishes with clear identity. Broad curry/noodle/dessert buckets were not added.
- Metadata action: replaced generated/template content with dish-specific composition, flavor sources, texture, risk flags, order verdicts, and confidence values above the verified threshold.
- Ingredient action: added reusable Malaysian/Singaporean ingredient objects for tofu puffs, fish head, spiced fish paste, popiah wrapper, jicama, steamed radish cake, steamed kuih lapis cake, and black glutinous rice.
- Seasoning action: added reusable Malaysian/Singaporean seasoning objects for shrimp paste, laksa spice paste, rendang spice paste, and pandan.
- Alias action: added safe spelling/menu variants such as `mi rebus`, `Penang asam laksa`, `wan tan mee`, `kari kepala ikan`, `otah`, `chai tow kuay`, and `bubur pulut hitam`; avoided broad bare aliases such as `laksa` or `rendang`.
- Image action: the old Malaysian/Singaporean candidate sheet was rejected because rows after `118012` visually reused unrelated dishes. All 18 accepted rows received generated restaurant-realistic replacement images, local metadataCode stamping, and main/thumb WebP output.
- Image overview: data/internal/audit/rebuild-batches/malaysian-singaporean-batch-030-final-images.png
- Decision: these 18 rows enter `auditedGeneratedDishIds`; Malaysian/Singaporean verified coverage reaches 30. Other below-30 world cuisines remain the next priority.

| # | code | dishId | category | risk flags | distinctive flavor sources | decision |
|---|---|---|---|---|---|---|
| 1 | 118013 | mee-rebus | noodle | contains-gluten, contains-egg, contains-soy, can-be-spicy | sweet-potato, tamarind, palm-sugar, chili | verified metadata + generated image |
| 2 | 118014 | mee-siam | noodle | contains-egg, contains-soy, contains-shellfish, can-be-spicy | tamarind, shrimp-paste, lime, chili | verified metadata + generated image |
| 3 | 118015 | mee-goreng-mamak | noodle | contains-gluten, contains-egg, contains-soy, can-be-spicy | soy-sauce, tomato-sauce, chili, tofu | verified metadata + generated image |
| 4 | 118016 | curry-laksa | soup | contains-shellfish, contains-fish, contains-soy, contains-egg, contains-gluten, can-be-spicy | laksa-paste, coconut-milk, shrimp, tofu-puffs | verified metadata + generated image |
| 5 | 118017 | asam-laksa | soup | contains-fish, contains-shellfish, can-be-spicy | tamarind, mackerel, shrimp-paste, pineapple | verified metadata + generated image |
| 6 | 118018 | mee-pok | noodle | contains-gluten, contains-egg, contains-pork, contains-fish, contains-soy, can-be-spicy | vinegar, soy-sauce, minced-pork, fish-cake | verified metadata + generated image |
| 7 | 118019 | wantan-mee | noodle | contains-gluten, contains-egg, contains-pork, contains-soy | char-siu-pork, char-siu-glaze, soy-sauce, wonton-wrapper | verified metadata + generated image |
| 8 | 118020 | fish-head-curry | curry | contains-fish, can-be-spicy | fish-head, coconut-curry, curry-leaves, okra | verified metadata + generated image |
| 9 | 118021 | beef-rendang-malaysian | curry | can-be-spicy | rendang-spice-paste, coconut-milk, toasted-coconut, lemongrass | verified metadata + generated image |
| 10 | 118022 | ayam-masak-merah | meat | can-be-spicy | tomato-sauce, chili, curry-leaves, coconut-milk | verified metadata + generated image |
| 11 | 118023 | otak-otak | starter | contains-fish, contains-egg, can-be-spicy | spiced-fish-paste, lemongrass, kaffir-lime-leaf, chili | verified metadata + generated image |
| 12 | 118024 | popiah | starter | contains-gluten, contains-soy, contains-egg, contains-peanut, can-be-spicy | jicama, hoisin-sauce, peanuts, chili | verified metadata + generated image |
| 13 | 118025 | rojak | salad | contains-shellfish, contains-peanut, contains-soy, contains-gluten | shrimp-paste, tamarind, palm-sugar, peanuts | verified metadata + generated image |
| 14 | 118026 | tauhu-goreng | fried-snack | contains-soy, contains-peanut, can-be-spicy | satay-sauce, tofu, peanuts, chili | verified metadata + generated image |
| 15 | 118027 | carrot-cake-singapore | starter | contains-egg, contains-soy, can-be-spicy | radish-cake, egg, soy-sauce, chili | verified metadata + generated image |
| 16 | 118028 | ondeh-ondeh | dessert | none | pandan, palm-sugar, grated-coconut | verified metadata + generated image |
| 17 | 118029 | kuih-lapis | dessert | none | coconut-milk, pandan, sugar | verified metadata + generated image |
| 18 | 118030 | pulut-hitam | dessert | none | black-glutinous-rice, coconut-milk, palm-sugar, pandan | verified metadata + generated image |
