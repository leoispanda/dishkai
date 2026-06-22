# Real Menu Miss Batch 045

Date: 2026-06-22

## Scope

- Source: Cloudflare `DISHKAI_UNMATCHED_DISHES` KV review, prefix `dishkai:unmatched-dishes:v1:event:`.
- Online backlog observed before the batch: 14 events, 123 raw unmatched/AI-generated item sightings, 98 unique not-yet-verified menu items.
- Candidate rule: accept only real, specific, reusable restaurant dishes that improve ordering decisions. Do not promote generic proteins, sides, condiments, menu buckets, restaurant-specific specials, or aliases already covered by verified metadata.
- Batch size: 12 verified dishes, under the 30-dish maximum.

## Accepted Verified Dishes

| # | metadataCode | dishId | cuisine | decision | image action | notes |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 108031 | pad-prik-kaeng | thai | keep-verified | generated/code-stamped | Real Thai red curry paste stir-fry; concrete spicy wok profile. |
| 2 | 108032 | pad-pong-karee | thai | keep-verified | generated/code-stamped | Real Thai yellow curry powder seafood/egg stir-fry; shellfish, egg, dairy, fish sauce risks modeled. |
| 3 | 109031 | teriyaki-salmon | japanese | keep-verified | generated/code-stamped | Real salmon teriyaki variant, distinct from existing teriyaki chicken. |
| 4 | 105061 | mojama | spanish | keep-verified | generated/code-stamped | Real Spanish salt-cured tuna tapas; strong salty fish guidance. |
| 5 | 105062 | pan-de-cristal | spanish | keep-verified | generated/code-stamped | Specific Spanish crystal bread side; accepted because it appears as a standalone tapas menu item. |
| 6 | 103061 | ravioles-gratin | french | keep-verified | generated/code-stamped | Real French ravioles gratin; creamy cheese/nut risk and texture explained. |
| 7 | 103062 | onglet-de-boeuf | french | keep-verified | generated/code-stamped | French bistro hanger steak; rawness/texture expectation modeled. |
| 8 | 103063 | andouillette | french | keep-verified | generated/code-stamped | Strong offal sausage; high acquired-taste warning is explicit. |
| 9 | 103064 | tete-de-veau | french | keep-verified | generated/code-stamped | Traditional calf's head dish; gelatinous/offal expectation is explicit. |
| 10 | 103065 | truite-grenobloise | french | keep-verified | generated/code-stamped | Distinct caper-lemon-butter trout preparation; added reusable `capers` seasoning. |
| 11 | 103066 | truite-aux-amandes | french | keep-verified | generated/code-stamped | Almond trout preparation; nut risk and texture are explicit. |
| 12 | 103067 | moelleux-au-chocolat | french | keep-verified | generated/code-stamped | Warm molten chocolate dessert; distinct from existing mousse au chocolat. |

## Alias Actions

New dish aliases were added for exact menu spellings and translations from the online backlog. Safe aliases were also added to existing verified dishes:

- `cilbir`: `cilbir (turkish eggs)`, `turkish eggs`, `çılbır eggs`
- `bbq-ribs`: `spareribs`, `smokey spareribs`, `smoky spareribs`
- `sticky-toffee-pudding`: `sticky date cake`, `sticky date pudding`
- `jamon-iberico`: `pata negra`, `bellota`, `jamon de bellota`, `jamón de bellota`, `iberico bellota ham`

Broad aliases intentionally not added: bare `ribs`, broad `pasta`, generic `salad`, generic `fries`, generic `mussels`, generic steak cuts without cuisine-specific preparation.

## Rejected / Deferred Online Items

Kept out of verified:

- Generic proteins or preparations: filet mignon, ribeye, flank steak, lamb fillet, lamb chops, chicken skewer, prawns, sole fillet, grilled chicken, roast chicken, pork tenderloin variants, surf & turf.
- Sides and buckets: fries, sweet potato fries, loaded fries, salads, grilled vegetables, sweet potato mash, corn on the cob, applesauce, onion chutney, drinks, desserts, starters, broodje menu, broodje.
- Restaurant-specific descriptions: chef special pasta, mussels with nduja/fennel/Pernod, celeriac steak with Thai basil/chipotle peanuts, blackened eggplant with tahini yogurt/chili oil/date, snicker toffee, KFC chicken or cauliflower bun, naan tandoori chicken, schiacciata mortadella variant.
- Cuisine areas not yet reviewed in this batch: bokit, accra, coconut pie, murçon and other regional long-tail items.

## Image Review

- Image source archive: `data/internal/audit/rebuild-batches/real-menu-miss-batch-045-image-sources/`
- Final contact sheet: `data/internal/audit/rebuild-batches/real-menu-miss-batch-045-final-images.png`
- Manual review result: accepted. Each image clearly matches the dish semantics and has the correct visible metadataCode stamp.

## Verification

Passed:

- `node --check data/internal/dishes/real-menu-miss-dishes.js`
- `node --check data/internal/real-menu-miss-dish-aliases.js`
- `node --check data/internal/index.js`
- `node --check data/internal/seasonings.js`
- `node --check scripts/audit-verified-dishes.mjs`
- `node scripts/validate-metadata.mjs`
- `node scripts/check-dish-assets.mjs`
- `node scripts/audit-verified-dishes.mjs`
- Image overview page counts: every generated overview page has at most 30 `<figure class="card">` entries.

Result after audit:

- Verified dishes: 1101
- Verified aliases: 3116
- Verified referenced main assets: 1101
- Verified referenced thumb assets: 1101
- Quarantined/generated rows remain excluded unless separately reviewed.
