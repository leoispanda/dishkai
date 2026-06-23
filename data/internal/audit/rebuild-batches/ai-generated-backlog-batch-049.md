# AI Generated Backlog Batch 049

- Date: 2026-06-23
- Scope: Continue the live `DISHKAI_UNMATCHED_DISHES` AI-generated backlog review after filtering items that were already covered by verified aliases or universal fallback.
- Batch size: 9 verified dishes
- Candidate rule: accept only real, specific, reusable restaurant items with a stable visual identity; keep broad proteins, menu buckets, and taxonomy-dependent Caribbean items out of verified.
- Metadata action: added eight reviewed `general` dish records under `100017`-`100024`, one Spanish tapas record under `105066`, and four reusable dessert ingredients (`ice-cream`, `sorbet`, `whipped-cream`, `mixed-fruit`).
- Alias action: added safe exact aliases for the new dishes plus targeted fixes for existing verified dishes (`cilbir`, `satay-ayam`, `fried-chicken-american`, `plateau-de-fromages`, `pan-con-tomate`). Added universal exact aliases/cards for broad items such as `cheesecake`, `beef tenderloin`, `pork tenderloin`, and `lamb fillet`.
- Image action: generated restaurant-realistic image sources, archived the raw PNGs, and imported stamped main/thumb WebP assets with matching metadata codes.
- Overview path: `data/internal/audit/rebuild-batches/ai-generated-backlog-batch-049-candidates-images.png`

## Decision

Accepted all 9 verified candidates. The batch intentionally leaves `broodje menu`, `broodje`, `starter`, bare `pasta`, broad peppers, onion chutney, bokit, accra, and coconut pie unverified until DishKAI has a safer dish boundary or cuisine taxonomy decision.

| dishId | metadataCode | cuisineId | metadataConfidence | imageStatus | decision |
|---|---:|---|---:|---|---|
| chorizo-tapas | 105066 | spanish | 0.84 | generated and stamped | keep-verified |
| smoothie-bowl | 100017 | general | 0.84 | generated and stamped | keep-verified |
| ice-cream-sundae | 100018 | general | 0.84 | generated and stamped | keep-verified |
| fruit-sorbet-plate | 100019 | general | 0.84 | generated and stamped | keep-verified |
| applesauce-side | 100020 | general | 0.84 | generated and stamped | keep-verified |
| chicken-skewer | 100021 | general | 0.84 | generated and stamped | keep-verified |
| chicken-fillet-mushroom-sauce | 100022 | general | 0.84 | generated and stamped | keep-verified |
| lamb-chops | 100023 | general | 0.84 | generated and stamped | keep-verified |
| sole-fillet | 100024 | general | 0.84 | generated and stamped | keep-verified |

## Alias And Fallback Review

- `cilbir`, `chicken satay`, `crispy chicken`, `cheese selection`, `selectie van 5 kazen`, and `tomato bread` now route to existing verified dish records instead of creating duplicates.
- `cheesecake`, `white chocolate dessert`, `beef tenderloin`, `pork tenderloin`, and `lamb fillet` stay broad guidance through universal cards, not verified metadata.
- `tomate`, `quesos`, `starter`, `pasta`, and `broodje menu` stayed out because they are menu words or category labels that would overmatch.

## Verification Notes

- Contact-sheet visual review passed for all 9 code-stamped images.
- `node scripts/validate-metadata.mjs` after metadata edit: 1145 verified dishes, 3444 aliases, `general` 24, `spanish` 66.
- Local `analyzeMenuText` regression: all 9 new candidates matched verified dish IDs; targeted aliases matched existing verified dish IDs; `cheesecake`, `beef tenderloin`, `pork tenderloin`, and `lamb fillet` matched universal cards; `Broodje Menu` and `Chef Special Pasta` stayed unmatched.
