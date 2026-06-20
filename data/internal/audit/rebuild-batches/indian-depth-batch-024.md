# indian-depth-batch-024

- Batch size: 12
- Scope: Indian global-depth dishes with strong menu frequency and clear dish identity.
- Candidate rule: only items with precise, non-generic dish identity were accepted. Bare seafood curry variants were left quarantined because their aliases can overmatch across cuisines.
- Metadata action: replaced template coverage text with dish-specific composition, flavor, texture, risk flags, order verdict, and confidence values above the verified threshold.
- Alias action: existing canonical and translated aliases were accepted for this batch; no broad generic aliases were introduced.
- Image action: old depth images were rejected because the contact sheets showed repeated or wrong dish semantics. All 12 accepted rows received generated replacement images, local metadataCode stamping, and main/thumb WebP output.
- Image overview: data/internal/audit/rebuild-batches/indian-depth-batch-024-final-images.png
- Decision: only these 12 rows enter `auditedGeneratedDishIds`; remaining Indian depth rows stay quarantined until image and metadata review.

| # | code | dishId | cuisine | name | category | risk flags | distinctive flavor sources | decision |
|---|---|---|---|---|---|---|---|---|
| 1 | 115013 | paneer-tikka | indian | Paneer Tikka | starter | contains-dairy, can-be-spicy | charred paneer, yogurt-spice marinade, mint chutney | verified metadata + generated image |
| 2 | 115014 | aloo-gobi | indian | Aloo Gobi | curry | can-be-spicy | turmeric, cumin, tomato-onion masala | verified metadata + generated image |
| 3 | 115015 | saag-paneer | indian | Saag Paneer | curry | contains-dairy, can-be-spicy | spinach greens, paneer, fenugreek | verified metadata + generated image |
| 4 | 115016 | malai-kofta | indian | Malai Kofta | curry | contains-dairy, contains-tree-nut | cashew cream, soft kofta dumplings, tomato-masala sauce | verified metadata + generated image |
| 5 | 115017 | rajma | indian | Rajma | curry | can-be-spicy | red kidney beans, tomato-onion masala, cumin | verified metadata + generated image |
| 6 | 115018 | dal-tadka | indian | Dal Tadka | curry | contains-dairy, can-be-spicy | lentil softness, mustard seed tadka, garlic and cumin | verified metadata + generated image |
| 7 | 115019 | korma | indian | Korma | curry | contains-dairy, contains-tree-nut | cream and yogurt, cashew body, cardamom warmth | verified metadata + generated image |
| 8 | 115020 | madras-curry | indian | Madras Curry | curry | can-be-spicy | Madras masala, red chili heat, curry leaves | verified metadata + generated image |
| 9 | 115021 | jalfrezi | indian | Jalfrezi | curry | can-be-spicy | sliced peppers, tomato-chili masala, semi-dry texture | verified metadata + generated image |
| 10 | 115022 | bhuna | indian | Bhuna | curry | can-be-spicy | fried onion masala, reduced tomato spice, concentrated curry coating | verified metadata + generated image |
| 11 | 115023 | dhansak | indian | Dhansak | curry | can-be-spicy | lentil-thickened sauce, tamarind tang, warm curry spices | verified metadata + generated image |
| 12 | 115026 | dosa | indian | Dosa | bread | can-be-spicy | crisp rice-lentil batter, sambar, coconut chutney | verified metadata + generated image |
