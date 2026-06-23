# General Batch 002

- Date: 2026-06-23
- Scope: Extend verified `general` coverage with stable cross-restaurant starters, soups, and sides.
- Batch size: 8 dishes
- Candidate rule: accept only real, specific, high-frequency restaurant items with a stable visual identity and safe exact aliases.
- Metadata action: added eight `general` dish records under metadata codes `100009`-`100016`, with diner-facing composition, flavor, risk, and order-verdict fields.
- Alias action: added 61 safe aliases, including narrow Dutch soup variants from the live unmatched KV signal; removed the old overbroad `roasted potatoes` / `geroosterde aardappels` mapping from `greek-restaurant-sides` so the new verified `general` card owns that dish.
- Image action: generated restaurant-realistic image sources, imported stamped main/thumb WebP assets with matching metadata codes.
- Overview path: `data/internal/audit/rebuild-batches/general-batch-002-candidates-images.png`

## Decision

Accepted all 8 candidates into verified metadata. This batch intentionally avoids broad buckets such as `soup`, `potatoes`, `mushrooms`, `beans`, or `cheese sticks`; aliases stay limited to exact names, safe translations, and narrow descriptive names.

| dishId | metadataCode | cuisineId | metadataConfidence | imageStatus | decision |
|---|---:|---|---:|---|---|
| potato-wedges | 100009 | general | 0.84 | generated and stamped | keep-verified |
| roasted-potatoes | 100010 | general | 0.84 | generated and stamped | keep-verified |
| baked-potato | 100011 | general | 0.84 | generated and stamped | keep-verified |
| tomato-soup | 100012 | general | 0.84 | generated and stamped | keep-verified |
| cream-of-mushroom-soup | 100013 | general | 0.84 | generated and stamped | keep-verified |
| mozzarella-sticks | 100014 | general | 0.84 | generated and stamped | keep-verified |
| garlic-mushrooms | 100015 | general | 0.84 | generated and stamped | keep-verified |
| baked-beans | 100016 | general | 0.84 | generated and stamped | keep-verified |

## Alias Review

Aliases cover canonical English names, Dutch menu names, Chinese translations, and a few narrow descriptive variants. Broad menu words and ambiguous component names were not added because they can overmatch other dishes or restaurant-specific descriptions.

## Verification Notes

- Local `analyzeMenuText` regression: all new English/Dutch aliases matched their expected `general` dish IDs.
- `Soup of the day` stayed unmatched, confirming that the batch did not create a broad soup catch-all.
