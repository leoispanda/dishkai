# Real Menu Miss Batch 047

Date: 2026-06-22

## Scope

- Source: continuation of centralized `DISHKAI_UNMATCHED_DISHES` real-menu miss backlog.
- Candidate rule: promote only stable, reusable dishes or restaurant-format cards that have a recognizable ordering meaning across venues.
- Batch size: 8 verified dishes, under the 30-dish maximum.

## Accepted Verified Dishes

| # | metadataCode | dishId | cuisine | decision | image action | notes |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 104061 | bekri-mezes | greek | keep-verified | generated/code-stamped | Greek taverna pork meze with winey tomato-pepper sauce; pork and alcohol risks modeled. |
| 2 | 104062 | arnaki-tigania | greek | keep-verified | generated/code-stamped | Greek lamb tigania; distinct from grilled lamb chops, kebab, or generic lamb fillet. |
| 3 | 103071 | fromage-blanc-dessert | french | keep-verified | generated/code-stamped | Common French dairy dessert; accepted as a stable card for `fromage blanc` menus. |
| 4 | 103072 | religieuse | french | keep-verified | generated/code-stamped | Classic French cream-filled choux pastry; dairy, egg, and gluten risks explicit. |
| 5 | 103073 | tarte-amandine | french | keep-verified | generated/code-stamped | Classic almond tart; tree-nut risk is central to ordering decision. |
| 6 | 103074 | cafe-gourmand | french | keep-verified | generated/code-stamped | Common French coffee + mini-dessert format; marked high restaurant variation. |
| 7 | 103075 | chocolat-liegeois | french | keep-verified | generated/code-stamped | Brasserie chocolate dessert glass; distinct from hot chocolate or cake. |
| 8 | 103076 | cafe-liegeois | french | keep-verified | generated/code-stamped | Brasserie coffee dessert glass; distinct from plain coffee. |

## Alias Actions

- Added exact and safe aliases for the 8 accepted dishes, including accent/no-accent French forms and Greek/English menu variants.
- Added safe aliases to existing verified `plateau-de-fromages` for `assiette de fromages`, `cheese platter`, `cheese plate`, and the full real menu cheese description.
- Kept `sticky date cake` mapped to existing `sticky-toffee-pudding` from batch 045.
- Did not restore broad bare `cheesecake` as a global alias because cross-cuisine overmatching remains likely.

## Rejected / Deferred Items

Still kept out of verified:

- Generic or restaurant-specific proteins: lamb fillet, beef tenderloin, pork tenderloin, Filetto Athina, Filetto Aphrodite, Kotopoulo a la creme.
- Drink and beverage lines: mineral water, orange juice, ouzo, coffee-only lines, wine/beer items.
- Broad or one-off desserts: white chocolate dessert, fruit and sorbet plate, ice cream sundae, snicker toffee.
- Modern restaurant compositions needing separate evidence: mussels with nduja/Pernod/fennel, celeriac steak with house garnish stack.

## Image Review

- Image source archive: `data/internal/audit/rebuild-batches/real-menu-miss-batch-047-image-sources/`
- Candidate manifest: `data/internal/audit/rebuild-batches/real-menu-miss-batch-047-candidates.json`
- Final contact sheet: `data/internal/audit/rebuild-batches/real-menu-miss-batch-047-final-images.png`
- Manual review result: accepted. Each image clearly matches the dish semantics and has the correct visible metadataCode stamp.

## Verification

Passed:

- `node --check data/internal/dishes/real-menu-miss-dishes.js`
- `node --check data/internal/real-menu-miss-dish-aliases.js`
- `node scripts/validate-metadata.mjs`
- `node scripts/check-dish-assets.mjs`
- `node scripts/audit-verified-dishes.mjs`
- Local `analyzeMenuText` regression: all 8 new dish aliases plus the `plateau-de-fromages` alias fix matched; `Chef Special Pasta` stayed unmatched.

Result after audit:

- Verified dishes: 1118
- Verified aliases: 3219
- Verified referenced main assets: 1118
- Verified referenced thumb assets: 1118
- Quarantined/generated rows remain excluded unless separately reviewed.
