# indian-depth-batch-025

- Batch size: 6
- Scope: final Indian global-depth rows needed to complete the 30-dish verified Indian target.
- Candidate rule: accepted only rows with clear menu identity and useful ordering semantics. Bare `prawn curry` and `fish curry` aliases were removed because they can overmatch non-Indian menus.
- Metadata action: replaced template text with dish-specific composition, flavor, texture, risk flags, order verdict, and confidence values above the verified threshold.
- Ingredient action: added reusable Indian batter/dessert objects plus global neutral frying oil so vada and pakora are not modeled as wheat-and-egg fried templates.
- Image action: old quarantined depth images were rejected. All 6 accepted rows received generated replacement images, local metadataCode stamping, and main/thumb WebP output.
- Image overview: data/internal/audit/rebuild-batches/indian-depth-batch-025-final-images.png
- Decision: these 6 rows enter `auditedGeneratedDishIds`; Indian verified coverage reaches 30. Other high-risk global-depth rows remain quarantined.

| # | code | dishId | cuisine | name | category | risk flags | distinctive flavor sources | decision |
|---|---|---|---|---|---|---|---|---|
| 1 | 115024 | prawn-curry-indian | indian | Indian Prawn Curry | curry | contains-shellfish, can-be-spicy | prawn sweetness, coconut or tomato curry sauce, curry leaves and mustard seed tempering | verified metadata + generated image |
| 2 | 115025 | fish-curry-indian | indian | Indian Fish Curry | curry | contains-fish, can-be-spicy | flaky fish, tamarind tang, coconut or tomato masala | verified metadata + generated image |
| 3 | 115027 | idli | indian | Idli | starter | can-be-spicy | soft fermented rice-lentil batter, sambar, coconut chutney | verified metadata + generated image |
| 4 | 115028 | vada | indian | Vada | fried-snack | can-be-spicy | fried lentil batter, coconut chutney, sambar | verified metadata + generated image |
| 5 | 115029 | pakora | indian | Pakora | fried-snack | can-be-spicy | chickpea-flour batter, fried vegetable filling, mint or tamarind chutney | verified metadata + generated image |
| 6 | 115030 | kulfi | indian | Kulfi | dessert | contains-dairy, contains-tree-nut | reduced milk density, cardamom, pistachio or saffron | verified metadata + generated image |
