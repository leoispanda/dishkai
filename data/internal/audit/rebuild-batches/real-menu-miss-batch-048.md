# Real Menu Miss Batch 048

Date: 2026-06-22

## Scope

- Source: continuation of centralized `DISHKAI_UNMATCHED_DISHES` backlog plus quarantine/alias review.
- Candidate rule: promote only stable items that fit an existing DishKAI cuisine without creating a misleading cuisine assignment.
- Batch size: 2 verified dishes, under the 30-dish maximum.

## Accepted Verified Dishes

| # | metadataCode | dishId | cuisine | decision | image action | notes |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 105065 | almendras-fritas | spanish | keep-verified | generated/code-stamped | Spanish tapas/bar snack; accepted because tree-nut risk and snack portion are useful ordering signals. |
| 2 | 103077 | murcon-aux-ravioles | french | keep-verified | generated/code-stamped | Regional French sausage with ravioles; accepted as a narrow regional dish, not a generic sausage card. |

## Alias Actions

- Added exact and safe aliases for `almendras-fritas` and `murcon-aux-ravioles`.
- Added explicit Belgian tartare aliases to existing verified `filet-americain` rather than creating duplicate `beef-tartare-belgian`.
- Confirmed existing alias mappings already cover `Grey Shrimp Tomato` -> `tomate-crevette`, `Americain Prepare` -> `filet-americain`, and `Vlaamse Stoofkarbonaden` -> `stoofvlees`.

## Rejected / Deferred Items

Still kept out of verified:

- `Bokit`, `Accra`, and `Coconut pie`: stable Caribbean/French-Caribbean candidates, but current DishKAI cuisine taxonomy has no Caribbean/French-Caribbean cuisine. Do not force them into French or Surinamese without a taxonomy decision.
- Generic proteins and sides: lamb chops, sole fillet, coleslaw, corn on the cob, chicken satay, and similar broad menu items. These may need universal cards or safer context-aware aliases, not new verified dish records.
- Restaurant-specific garnish stacks and drink/alcohol lines remain fallback/universal territory.

## Image Review

- Image source archive: `data/internal/audit/rebuild-batches/real-menu-miss-batch-048-image-sources/`
- Candidate manifest: `data/internal/audit/rebuild-batches/real-menu-miss-batch-048-candidates.json`
- Final contact sheet: `data/internal/audit/rebuild-batches/real-menu-miss-batch-048-final-images.png`
- Manual review result: accepted. Both images match dish semantics and have the correct visible metadataCode stamp.

## Verification

Passed:

- `node --check data/internal/dishes/real-menu-miss-dishes.js`
- `node --check data/internal/real-menu-miss-dish-aliases.js`
- `node scripts/validate-metadata.mjs`
- `node scripts/check-dish-assets.mjs`
- `node scripts/audit-verified-dishes.mjs`
- Local `analyzeMenuText` regression: new dishes matched; Belgian tartare remapped to `filet-americain`; Bokit stayed unmatched.

Result after audit:

- Verified dishes: 1120
- Verified aliases: 3238
- Verified referenced main assets: 1120
- Verified referenced thumb assets: 1120
- Quarantined/generated rows remain excluded unless separately reviewed.
