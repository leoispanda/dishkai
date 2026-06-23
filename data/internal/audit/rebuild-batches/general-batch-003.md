# General Batch 003

- Date: 2026-06-23
- Scope: Extend verified `general` coverage for high-frequency cross-restaurant mains, salads, breakfast/dessert items, and desserts that should not fall back to AI or overbroad universal estimates.
- Batch size: 10 dishes
- Candidate rule: accept only specific dish names with a stable visual identity, safe aliases, and clear diner-facing ordering value across restaurant types.
- Metadata action: added ten `general` dish records under metadata codes `100025`-`100034`, with composition, preparation-style expectations, taste, texture, risk, and order verdicts.
- Alias action: added 87 safe aliases; promoted exact `grilled salmon`, `zalm`, `solomos`, `mixed grill`, `roast chicken`, `side salad`, and `cheesecake`-style menu terms from broad fallback behavior into verified metadata.
- Fallback cleanup: narrowed `universal-salad`, `universal-grilled-chicken`, and `universal-dessert` so verified exact dishes are preferred; narrowed Greek aliases so plain `grilled salmon`, `zalm`, and `mixed grill` no longer map to Greek-specific cards without Greek context.
- Image action: generated restaurant-realistic image sources, imported stamped main/thumb WebP assets with matching metadata codes.
- Overview path: `data/internal/audit/rebuild-batches/general-batch-003-candidates-images.png`

## Decision

Accepted all 10 candidates into verified metadata. This batch intentionally leaves broad words such as `salad`, `cake`, `dessert`, and `grilled chicken` in the universal layer, while promoting exact, common dishes with enough stable meaning to answer confidently.

| dishId | metadataCode | cuisineId | metadataConfidence | imageStatus | decision |
|---|---:|---|---:|---|---|
| waffles | 100025 | general | 0.84 | generated and stamped | keep-verified |
| grilled-salmon | 100026 | general | 0.84 | generated and stamped | keep-verified |
| mixed-grill | 100027 | general | 0.84 | generated and stamped | keep-verified |
| tuna-salad | 100028 | general | 0.84 | generated and stamped | keep-verified |
| chicken-wings | 100029 | general | 0.84 | generated and stamped | keep-verified |
| roast-chicken | 100030 | general | 0.84 | generated and stamped | keep-verified |
| side-salad | 100031 | general | 0.84 | generated and stamped | keep-verified |
| fruit-salad | 100032 | general | 0.84 | generated and stamped | keep-verified |
| cheesecake | 100033 | general | 0.84 | generated and stamped | keep-verified |
| chocolate-cake | 100034 | general | 0.84 | generated and stamped | keep-verified |

## Alias Review

Aliases cover canonical English names, common Dutch menu names, Chinese translations, and narrow descriptive variants. The batch avoids known more-specific verified names such as `belgian waffle`, `stroopwafel`, `New York cheesecake`, and `American cheesecake`, which should continue to resolve to their cuisine-specific cards.

## Verification Notes

- Source-image contact sheet was visually reviewed before import; image sequence and dish identities matched metadata codes.
- Expected matcher behavior: exact new aliases resolve to `general`; broad `salad`, `dessert`, and `grilled chicken` remain universal. Cuisine-specific verified aliases such as `Belgian waffle` and `New York cheesecake` remain on their existing specific cards.
