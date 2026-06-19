# Korean Batch 016 Audit

Date: 2026-06-19

Scope: 25 Korean dishes restored from previously untrusted generated layers after dish-by-dish metadata, alias, and image review.

Result: 25 keep-verified. Metadata was rebuilt with Korean-specific reusable ingredients/seasonings, concrete estimated composition, diner-facing flavor/texture guidance, and confidence values above the verified threshold. 11 existing images were accepted after manual contact-sheet review; 14 mismatched or duplicate-risk images were replaced, code-stamped, and re-reviewed. The 5 base Korean core images were also code-stamped so all 30 Korean verified dish images now show the matching 110xxx metadataCode.

Image overviews:
- data/internal/audit/rebuild-batches/korean-batch-016-candidates-images.png
- data/internal/audit/rebuild-batches/korean-batch-016-final-images.png

Image source map:
- data/internal/audit/rebuild-batches/korean-batch-016-image-source-map.json

Alias decision: selected Korean aliases are exact dish names, translated names, local Hangul names, or common romanization variants. No broad generic aliases such as plain `stew`, `noodles`, `soup`, `dumplings`, `fried rice`, or `pancake` were added to the verified export for this batch. Existing local aliases were kept only where they directly name the dish family shown in the metadata.

| Dish ID | Code | Source | Audit Status | Image Status | Notes |
| --- | --- | --- | --- | --- | --- |
| japchae | 110006 | expanded | keep-verified | accepted-existing/code-stamped | Real sweet-potato glass noodle dish; metadata rebuilt around dangmyeon, vegetables, sesame-soy seasoning, beef variation, and springy noodle texture. Existing image clearly shows glossy mixed glass noodles. |
| samgyeopsal | 110007 | expanded | keep-verified | accepted-replacement | Real Korean pork belly barbecue; metadata rebuilt with grilled pork belly, lettuce wraps, garlic, ssamjang, and table-grill expectation. Previous image was too close to bossam; replacement clearly shows pork belly grilling with banchan. |
| galbi | 110008 | expanded | keep-verified | accepted-existing/code-stamped | Real marinated short rib dish; metadata rebuilt with beef short ribs, soy-garlic marinade, grill char, and sweet-savory richness. Existing image clearly shows grilled ribs. |
| kimchi-fried-rice | 110009 | expanded | keep-verified | accepted-existing/code-stamped | Real kimchi rice dish; metadata rebuilt with rice, kimchi, egg, gochujang/gochugaru warmth, and pantry-style comfort guidance. Existing image clearly shows red fried rice with egg. |
| sundubu-jjigae | 110010 | expanded | keep-verified | accepted-existing/code-stamped | Real soft tofu stew; metadata rebuilt with soft tofu, spicy broth, egg/seafood variation, and bubbling hot-stew texture. Existing image clearly shows red tofu stew. |
| doenjang-jjigae | 110011 | expanded | keep-verified | accepted-existing/code-stamped | Real soybean paste stew; metadata rebuilt with doenjang, tofu, vegetables, anchovy/seafood stock caveat, and earthy fermented flavor. Existing image is somewhat red but still clearly tofu stew and acceptable. |
| jajangmyeon | 110012 | expanded | keep-verified | accepted-existing/code-stamped | Real Korean-Chinese black bean noodle dish; metadata rebuilt with wheat noodles, chunjang sauce, pork/vegetables, and rich savory-sweet sauce texture. Existing image clearly shows dark sauced noodles. |
| naengmyeon | 110013 | expanded | keep-verified | accepted-existing/code-stamped | Real cold buckwheat-style noodle soup; metadata rebuilt with chilled broth, chewy noodles, beef/egg garnish, vinegar/mustard adjustment, and cold serving expectation. Existing image clearly shows cold noodles in broth. |
| mandu | 110014 | expanded | keep-verified | accepted-existing/code-stamped | Real Korean dumpling family; metadata rebuilt with wrapper, pork/vegetable filling, pan-fried or steamed variation, and soy-sesame dip. Existing image clearly shows dumplings. |
| bossam | 110015 | expanded | keep-verified | accepted-existing/code-stamped | Real boiled pork wrap dish; metadata rebuilt with sliced pork, napa/lettuce wraps, kimchi, ssamjang, and sharing guidance. Existing image clearly shows sliced pork with wraps/kimchi. |
| haemul-pajeon | 110016 | expanded | keep-verified | accepted-existing/code-stamped | Real seafood scallion pancake; metadata rebuilt with scallions, seafood, batter, soy dip, and crisp-edge/soft-center texture. Existing image clearly shows pancake pieces. |
| kimbap | 110017 | expanded | keep-verified | accepted-existing/code-stamped | Real seaweed rice roll; metadata rebuilt with rice, gim, egg, pickled radish, vegetable/protein fillings, and snack-light meal guidance. Existing image clearly shows sliced rolls. |
| dak-galbi | 110018 | global-depth | keep-verified | accepted-replacement | Real spicy stir-fried chicken dish; metadata rebuilt with chicken, cabbage, sweet potato, rice cakes, gochujang/gochugaru sauce, and tabletop stir-fry expectation. Previous image was duplicate-risk; replacement clearly shows red chicken stir-fry. |
| galbitang | 110019 | global-depth | keep-verified | accepted-replacement | Real clear short rib soup; metadata rebuilt with beef short ribs, clear broth, radish, glass noodles, and mild nourishing profile. Previous image was duplicate-risk; replacement clearly shows clear rib soup. |
| seolleongtang | 110020 | global-depth | keep-verified | accepted-replacement | Real milky ox-bone soup; metadata rebuilt with beef bone broth, sliced beef, noodles/rice variation, scallion, and mild self-seasoning expectation. Previous image was duplicate-risk; replacement clearly shows pale beef soup. |
| yukgaejang | 110021 | global-depth | keep-verified | accepted-replacement | Real spicy shredded beef soup; metadata rebuilt with beef, fernbrake/vegetables, gochugaru oil, scallion, and hearty spicy broth. Previous image was duplicate-risk; replacement clearly shows red shredded beef soup. |
| budae-jjigae | 110022 | global-depth | keep-verified | accepted-replacement | Real army-base stew; metadata rebuilt with luncheon meat, sausage, kimchi, ramen, beans, cheese variation, and processed-meat watch-outs. Previous image was duplicate-risk; replacement clearly shows mixed stew with ramen and sausage. |
| jjolmyeon | 110023 | global-depth | keep-verified | accepted-replacement | Real chewy spicy cold noodle dish; metadata rebuilt with thick chewy noodles, vegetables, egg, cho-gochujang, and spicy-sweet-tangy profile. Previous image was duplicate-risk; replacement clearly shows mixed spicy noodles with vegetables. |
| bibim-naengmyeon | 110024 | global-depth | keep-verified | accepted-replacement | Real spicy mixed cold naengmyeon; metadata rebuilt with thin cold noodles, spicy sauce, cucumber, pear/egg garnish, and less-brothy expectation. Previous image was duplicate-risk; replacement clearly shows cold red mixed noodles. |
| dakgangjeong | 110025 | global-depth | keep-verified | accepted-replacement | Real crispy glazed chicken; metadata rebuilt with fried chicken, soy-garlic or sweet-spicy glaze, nuts/sesame variation, and sticky-crisp texture. Previous image was duplicate-risk; replacement clearly shows glossy bite-size fried chicken. |
| godeungeo-gui | 110026 | global-depth | keep-verified | accepted-replacement | Real grilled mackerel; metadata rebuilt with mackerel, salt, lemon/radish garnish, fish bones/strong aroma, and simple grilled profile. Previous image was duplicate-risk; replacement clearly shows grilled fish. |
| ojingeo-bokkeum | 110027 | global-depth | keep-verified | accepted-replacement | Real spicy stir-fried squid; metadata rebuilt with squid, onion/cabbage, gochujang/gochugaru sauce, and chewy seafood texture. Previous image was duplicate-risk; replacement clearly shows red squid stir-fry. |
| gyeran-jjim | 110028 | global-depth | keep-verified | accepted-replacement | Real steamed egg custard; metadata rebuilt with egg, stock, scallion, sesame, and soft hot custard texture. Previous image was duplicate-risk; replacement clearly shows steamed egg in a bowl. |
| hotteok | 110029 | global-depth | keep-verified | accepted-replacement | Real sweet filled pancake; metadata rebuilt with dough, brown sugar, cinnamon/nut filling, fried exterior, and dessert/snack role. Previous image was duplicate-risk; replacement clearly shows filled pancakes. |
| bingsu | 110030 | global-depth | keep-verified | accepted-replacement | Real shaved ice dessert; metadata rebuilt with shaved ice, condensed milk, red bean/fruit variation, and cold milky texture. Previous image was duplicate-risk; replacement clearly shows shaved ice dessert. |
