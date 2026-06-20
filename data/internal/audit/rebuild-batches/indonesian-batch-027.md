# indonesian-batch-027

- Batch size: 6
- Scope: final Indonesian global-depth rows needed to complete the 30-dish verified Indonesian target.
- Candidate rule: accepted only specific high-frequency Indonesian dishes with clear menu identity. No generic rice, noodle, curry, snack, or dessert bucket was added.
- Metadata action: replaced generated/template-style content with dish-specific composition, flavor, texture, risk flags, order verdict, and confidence values above the verified threshold.
- Ingredient action: added reusable Indonesian ingredient objects for siomay dumplings, martabak wrappers, martabak manis pancake base, klepon rice balls, cendol jelly, and grated coconut.
- Image action: old quarantined candidate images were rejected after contact-sheet review because all six were semantic duplicates of other Indonesian dishes. All 6 accepted rows received generated replacement images, local metadataCode stamping, and main/thumb WebP output.
- Image overview: data/internal/audit/rebuild-batches/indonesian-batch-027-final-images.png
- Decision: these 6 rows enter `auditedGeneratedDishIds`; Indonesian verified coverage reaches 30. Other high-risk rows remain quarantined.

| # | code | dishId | cuisine | name | category | risk flags | distinctive flavor sources | decision |
|---|---|---|---|---|---|---|---|
| 1 | 117025 | siomay-bandung | indonesian | Siomay Bandung | starter | contains-fish, contains-peanut, contains-soy, contains-egg | fish dumpling, peanut sauce, steamed sides | verified metadata + generated image |
| 2 | 117026 | martabak-telur | indonesian | Martabak Telur | fried-snack | contains-gluten, contains-egg | crisp fried wrapper, egg filling, minced meat and scallion | verified metadata + generated image |
| 3 | 117027 | martabak-manis | indonesian | Martabak Manis | dessert | contains-gluten, contains-egg, contains-dairy, contains-peanut | condensed milk, chocolate sprinkles, peanut and cheese filling | verified metadata + generated image |
| 4 | 117028 | klepon | indonesian | Klepon | dessert | none | pandan aroma, palm sugar burst, grated coconut | verified metadata + generated image |
| 5 | 117029 | es-cendol | indonesian | Es Cendol | dessert | none | coconut milk, palm sugar syrup, pandan cendol jelly | verified metadata + generated image |
| 6 | 117030 | sambal-goreng-kentang | indonesian | Sambal Goreng Kentang | side | can-be-spicy | sambal chili paste, fried potato, fried shallots | verified metadata + generated image |
