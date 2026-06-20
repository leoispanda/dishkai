# southeast-asia-depth-batch-026

- Batch size: 30
- Scope: Vietnamese and Indonesian global-depth rows with clear menu identity and useful ordering semantics.
- Candidate rule: accepted only specific dish families, not generic noodle, soup, curry, rice, salad, or dessert buckets.
- Metadata action: replaced generated/template-style content with dish-specific composition, flavor, texture, risk flags, order verdict, and confidence values above the verified threshold.
- Ingredient/seasoning action: added reusable Vietnamese and Indonesian ingredients/seasonings needed for truthful composition instead of using broad stand-ins.
- Image action: old quarantined depth images were rejected after contact-sheet review because they were mostly repeated or semantically wrong. All 30 accepted rows received generated replacement images, local metadataCode stamping, and matching main/thumb WebP output.
- Image overview: data/internal/audit/rebuild-batches/southeast-asia-depth-batch-026-final-images.png
- Decision: these 30 rows enter `auditedGeneratedDishIds`; Vietnamese verified coverage reaches 30 and Indonesian reaches 24. Other high-risk global-depth rows remain quarantined.

| # | code | dishId | cuisine | name | category | risk flags | distinctive flavor sources | decision |
|---|---|---|---|---|---|---|---|---|
| 1 | 116013 | bun-thit-nuong | vietnamese | Bún Thịt Nướng | noodle | contains-pork, contains-peanut, contains-fish-sauce | lemongrass grilled pork, nước chấm, peanut crunch | verified metadata + generated image |
| 2 | 116014 | bun-rieu | vietnamese | Bún Riêu | soup | contains-shellfish, contains-egg, contains-soy, contains-fish-sauce, can-be-spicy | tomato broth, crab-and-egg curds, fresh herbs | verified metadata + generated image |
| 3 | 116015 | bun-mam | vietnamese | Bún Mắm | soup | contains-fish, contains-shellfish, contains-fish-sauce, can-be-spicy | fermented fish broth, seafood, fresh herbs | verified metadata + generated image |
| 4 | 116016 | mi-quang | vietnamese | Mì Quảng | noodle | contains-shellfish, contains-peanut, contains-fish-sauce | turmeric noodles, peanuts, rice cracker | verified metadata + generated image |
| 5 | 116017 | hu-tieu | vietnamese | Hủ Tiếu | soup | contains-pork, contains-shellfish, contains-fish | clear broth, fried garlic aroma, mixed pork and seafood | verified metadata + generated image |
| 6 | 116018 | banh-cuon | vietnamese | Bánh Cuốn | starter | contains-pork, contains-fish-sauce | silky rice sheets, fried shallots, nước chấm | verified metadata + generated image |
| 7 | 116019 | banh-khot | vietnamese | Bánh Khọt | starter | contains-shellfish, contains-fish-sauce | coconut rice batter, shrimp topping, nước chấm | verified metadata + generated image |
| 8 | 116020 | banh-beo | vietnamese | Bánh Bèo | starter | contains-shellfish, contains-fish-sauce, can-be-spicy | steamed rice cakes, dried shrimp, fish-sauce dip | verified metadata + generated image |
| 9 | 116021 | bo-kho | vietnamese | Bò Kho | meat | can-be-spicy, contains-gluten | lemongrass, braised beef, red-orange broth | verified metadata + generated image |
| 10 | 116022 | ga-nuong | vietnamese | Gà Nướng | meat | contains-fish-sauce, can-be-spicy | lemongrass marinade, charred chicken, nước chấm | verified metadata + generated image |
| 11 | 116023 | ca-kho-to | vietnamese | Cá Kho Tộ | seafood | contains-fish, contains-fish-sauce, can-be-spicy | caramel fish sauce, black pepper, clay-pot braise | verified metadata + generated image |
| 12 | 116024 | canh-chua | vietnamese | Canh Chua | soup | contains-fish | tamarind sourness, pineapple, fish broth | verified metadata + generated image |
| 13 | 116025 | goi-ga | vietnamese | Gỏi Gà | salad | contains-peanut, contains-fish-sauce | fish-sauce lime dressing, fresh herbs, peanut crunch | verified metadata + generated image |
| 14 | 116026 | nom-hoa-chuoi | vietnamese | Nộm Hoa Chuối | salad | contains-peanut, contains-shellfish, contains-fish-sauce | banana blossom, lime fish-sauce dressing, peanut crunch | verified metadata + generated image |
| 15 | 116027 | cha-ca-la-vong | vietnamese | Chả Cá Lã Vọng | seafood | contains-fish, contains-peanut, contains-fish-sauce | turmeric, dill, fried fish | verified metadata + generated image |
| 16 | 116028 | xoi-man | vietnamese | Xôi Mặn | rice | contains-pork, contains-egg, can-be-spicy | sticky rice, pork sausage, fried shallots | verified metadata + generated image |
| 17 | 116029 | banh-flan-vietnamese | vietnamese | Vietnamese Bánh Flan | dessert | contains-egg, contains-dairy | caramel, egg custard, condensed milk | verified metadata + generated image |
| 18 | 116030 | che-ba-mau | vietnamese | Chè Ba Màu | dessert | none | coconut milk, pandan jelly, sweet beans | verified metadata + generated image |
| 19 | 117013 | ayam-goreng | indonesian | Ayam Goreng | fried-snack | can-be-spicy | turmeric marinade, fried chicken skin, sambal | verified metadata + generated image |
| 20 | 117014 | ayam-bakar | indonesian | Ayam Bakar | meat | contains-soy, contains-gluten, can-be-spicy | kecap manis glaze, charred chicken, sambal | verified metadata + generated image |
| 21 | 117015 | gulai | indonesian | Gulai | curry | can-be-spicy | coconut milk, bumbu kuning, turmeric warmth | verified metadata + generated image |
| 22 | 117016 | opor-ayam | indonesian | Opor Ayam | curry | contains-egg | coconut milk, gentle spice paste, fried shallots | verified metadata + generated image |
| 23 | 117017 | rawon | indonesian | Rawon | soup | can-be-spicy | keluak black broth, beef, bean sprouts | verified metadata + generated image |
| 24 | 117018 | sayur-lodeh | indonesian | Sayur Lodeh | soup | contains-soy, can-be-spicy | coconut milk, bumbu kuning, vegetable sweetness | verified metadata + generated image |
| 25 | 117019 | pecel | indonesian | Pecel | salad | contains-peanut, can-be-spicy | spicy peanut sauce, blanched vegetables, crisp cracker | verified metadata + generated image |
| 26 | 117020 | ketoprak | indonesian | Ketoprak | salad | contains-peanut, contains-soy | peanut sauce, tofu, lontong rice cake | verified metadata + generated image |
| 27 | 117021 | lontong-sayur | indonesian | Lontong Sayur | rice | contains-soy, contains-egg, can-be-spicy | lontong rice cake, coconut vegetable curry, sambal | verified metadata + generated image |
| 28 | 117022 | nasi-uduk | indonesian | Nasi Uduk | rice | contains-egg, contains-peanut, contains-shellfish, can-be-spicy | coconut rice, sambal, mixed toppings | verified metadata + generated image |
| 29 | 117023 | bubur-ayam | indonesian | Bubur Ayam | soup | contains-gluten, contains-egg, contains-soy | soft rice porridge, shredded chicken, fried shallots | verified metadata + generated image |
| 30 | 117024 | pempek | indonesian | Pempek | fried-snack | contains-fish, contains-gluten, contains-egg, can-be-spicy | chewy fish cake, cuko sauce, tapioca bounce | verified metadata + generated image |
