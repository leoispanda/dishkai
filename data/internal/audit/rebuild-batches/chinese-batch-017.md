# Chinese Batch 017 Audit

Date: 2026-06-19

Scope: 25 Chinese dishes restored or corrected from previously untrusted generated layers after dish-by-dish metadata, alias, and image review.

Result: 25 keep-verified. Metadata was rebuilt with Chinese-specific reusable ingredients/seasonings, concrete estimated composition, diner-facing flavor/texture guidance, and confidence values above the verified threshold. 12 expanded-layer images were accepted after manual contact-sheet review; 13 global-depth images were replaced because the candidate sheet showed duplicate or semantically wrong images. The 5 base Chinese core images were also code-stamped so all 30 Chinese verified dish images now show the matching 111xxx metadataCode.

Image overviews:
- data/internal/audit/rebuild-batches/chinese-batch-017-candidates-images.png
- data/internal/audit/rebuild-batches/chinese-batch-017-final-images.png
- data/internal/audit/rebuild-batches/chinese-batch-017-all-verified-images.png

Image source map:
- data/internal/audit/rebuild-batches/chinese-batch-017-image-source-map.json

Alias decision: selected Chinese aliases are exact dish names, translated names, local Chinese names, or common menu romanizations. No broad generic aliases such as plain `dumplings`, `fried rice`, `noodles`, `soup`, `pancake`, `pork`, or `fish` were added to the verified export for this batch.

Correction decisions:
- `hainanese-wonton-noodles` was corrected to `wonton-noodles` because the dish metadata, alias set, and replacement image describe Cantonese-style wonton noodles, not a Hainanese dish.
- `shumai-dim-sum` was not restored because it duplicates `siu-mai`. Code 111030 was reassigned to `scallion-pancake` to fill the Chinese 30-dish target with a distinct high-frequency menu item.

| Dish ID | Code | Source | Audit Status | Image Status | Notes |
| --- | --- | --- | --- | --- | --- |
| kung-pao-chicken | 111006 | expanded | keep-verified | accepted-existing/code-stamped | Real Sichuan-derived chicken dish; metadata rebuilt around diced chicken, peanuts, chili, sweet-savory sauce, and peanut/spice watch-outs. Existing image clearly shows Kung Pao chicken. |
| sweet-and-sour-pork | 111007 | expanded | keep-verified | accepted-existing/code-stamped | Real sweet-sour pork dish; metadata rebuilt with fried pork, sweet-sour sauce, pineapple/pepper variation, and pork/fried-food guidance. Existing image clearly shows glazed pork pieces. |
| dan-dan-noodles | 111008 | expanded | keep-verified | accepted-existing/code-stamped | Real Sichuan noodle dish; metadata rebuilt with wheat noodles, minced pork, chili oil, Sichuan pepper, sesame/peanut caveats, and spice guidance. Existing image clearly shows sauced noodles with topping. |
| wonton-soup | 111009 | expanded | keep-verified | accepted-existing/code-stamped | Real wonton soup; metadata rebuilt with clear broth, wonton wrappers, pork/shrimp filling variation, sesame aroma, and mild soup ordering cues. Existing image clearly shows wontons in broth. |
| jiaozi | 111010 | expanded | keep-verified | accepted-existing/code-stamped | Real Chinese dumpling; metadata rebuilt with wheat wrapper, pork/cabbage filling, vinegar/soy dip, and boiled-vs-pan-fried texture distinction. Existing image clearly shows dumplings. |
| yangzhou-fried-rice | 111011 | expanded | keep-verified | accepted-existing/code-stamped | Real fried rice dish; metadata rebuilt with rice, egg, shrimp, char siu/ham-style pork, vegetables, and shellfish/pork/egg watch-outs. Existing image clearly shows mixed fried rice. |
| char-siu | 111012 | expanded | keep-verified | accepted-existing/code-stamped | Real Cantonese barbecue pork; metadata rebuilt with char siu pork, sweet glaze, hoisin/Shaoxing flavor cues, and pork/soy/gluten watch-outs. Existing image clearly shows sliced glazed pork. |
| spring-rolls | 111013 | expanded | keep-verified | accepted-existing/code-stamped | Real fried roll starter; metadata rebuilt with crisp wrapper, vegetable filling, optional pork/shrimp, and filling variation warning. Existing image clearly shows spring rolls. |
| beef-chow-fun | 111014 | expanded | keep-verified | accepted-existing/code-stamped | Real Cantonese wide-noodle stir-fry; metadata rebuilt with wide rice noodles, beef, bean sprouts, soy/oyster sauce, and wok-smoky texture. Existing image clearly shows beef chow fun. |
| salt-pepper-squid | 111015 | expanded | keep-verified | accepted-existing/code-stamped | Real fried squid dish; metadata rebuilt with squid, light starch coating, salt/pepper/chili, and shellfish/spice watch-outs. Existing image clearly shows fried squid pieces. |
| twice-cooked-pork | 111016 | expanded | keep-verified | accepted-existing/code-stamped | Real Sichuan pork belly dish; metadata rebuilt with pork belly, doubanjiang, vegetables, and rich fermented chili guidance. Existing image clearly shows sliced pork stir-fry. |
| sichuan-boiled-fish | 111017 | expanded | keep-verified | accepted-existing/code-stamped | Real Sichuan fish dish; metadata rebuilt with fish fillets, red chili oil broth, Sichuan pepper, bean sprouts, and high-spice/oil guidance. Existing image clearly shows fish in red broth. |
| hainanese-chicken-chinese | 111018 | global-depth | keep-verified | accepted-replacement | Real Hainanese chicken rice reference for Chinese/Hainanese menu contexts; metadata rebuilt with poached chicken, chicken rice, cucumber, chili, and ginger-scallion sauce. Previous image duplicated wonton soup; replacement clearly shows chicken rice. |
| lo-mein | 111019 | global-depth | keep-verified | accepted-replacement | Real sauced wheat noodle dish; metadata rebuilt with soft noodles, vegetables, soy/sesame sauce, and protein variation. Previous image duplicated spring rolls; replacement clearly shows lo mein. |
| egg-fried-rice | 111020 | global-depth | keep-verified | accepted-replacement | Real simple fried rice; metadata rebuilt with rice, egg, vegetables, scallion, and soy/egg watch-outs. Previous image duplicated jiaozi; replacement clearly shows egg fried rice. |
| hot-and-sour-soup | 111021 | global-depth | keep-verified | accepted-replacement | Real hot-and-sour soup; metadata rebuilt with tofu, egg ribbons, bamboo shoots, wood ear, black vinegar, and pepper warmth. Previous image duplicated twice-cooked pork; replacement clearly shows soup. |
| char-siu-bao | 111022 | global-depth | keep-verified | accepted-replacement | Real Cantonese pork bun; metadata rebuilt with steamed bun dough, saucy char siu filling, and gluten/pork/soy watch-outs. Previous image resembled soup dumplings; replacement clearly shows split char siu bao. |
| siu-mai | 111023 | global-depth | keep-verified | accepted-replacement | Real dim sum dumpling; metadata rebuilt with pork/shrimp filling, open wrapper, egg/soy/sesame caveats, and distinction from har gow. Previous image duplicated Sichuan boiled fish; replacement clearly shows siu mai. |
| har-gow | 111024 | global-depth | keep-verified | accepted-replacement | Real translucent shrimp dumpling; metadata rebuilt with shrimp, har gow wrapper, bamboo shoot crunch, and shellfish watch-out. Previous image duplicated Peking duck; replacement clearly shows har gow. |
| congee | 111025 | global-depth | keep-verified | accepted-replacement | Real rice porridge; metadata rebuilt with congee base, scallion, optional chicken/egg, sesame aroma, and topping variation guidance. Previous image duplicated beef chow fun; replacement clearly shows congee. |
| wonton-noodles | 111026 | global-depth | keep-verified | accepted-replacement/renamed | Real wonton noodle soup; old id `hainanese-wonton-noodles` was corrected to `wonton-noodles`. Metadata rebuilt with egg noodles, clear broth, wontons, shrimp/pork filling variation, and mild soup cues. Previous image duplicated mapo tofu; replacement clearly shows wonton noodles. |
| cumin-lamb | 111027 | global-depth | keep-verified | accepted-replacement | Real cumin lamb stir-fry; metadata rebuilt with lamb, cumin, chili, coriander, and assertive spice guidance. Previous image duplicated dan dan noodles; replacement clearly shows dry cumin lamb stir-fry. |
| tomato-egg | 111028 | global-depth | keep-verified | accepted-replacement | Real tomato egg stir-fry; metadata rebuilt with soft egg, tomato sauce, scallion, and mild home-style ordering cues. Previous image duplicated char siu; replacement clearly shows tomato and egg. |
| yu-xiang-eggplant | 111029 | global-depth | keep-verified | accepted-replacement | Real fish-fragrant eggplant; metadata rebuilt with eggplant, doubanjiang, vinegar, garlic, optional pork, and saucy/oily texture guidance. Previous image duplicated sweet-and-sour pork; replacement clearly shows saucy eggplant. |
| scallion-pancake | 111030 | replacement | keep-verified | accepted-replacement/new-source | Real Chinese scallion pancake added to replace duplicate `shumai-dim-sum`; metadata rebuilt with layered wheat dough, scallions, sesame oil, and crisp-chewy texture. Replacement image clearly shows sliced scallion pancake. |
