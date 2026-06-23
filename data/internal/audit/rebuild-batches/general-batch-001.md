# General Batch 001

- Date: 2026-06-23
- Scope: Add a small verified `general` cuisine for stable cross-restaurant dishes and sides.
- Batch size: 8 dishes
- Candidate rule: accept only real, specific, high-frequency restaurant items that are more specific than universal fallback cards and do not belong more truthfully to an existing cuisine.
- Metadata action: added `general` cuisine, eight dish records, and safe exact aliases.
- Image action: generated restaurant-realistic image sources, imported stamped main/thumb WebP assets with matching metadata codes.
- Overview path: `data/internal/audit/rebuild-batches/general-batch-001-candidates-images.png`

## Decision

Accepted all 8 candidates into verified metadata. This batch intentionally does not include broad buckets such as `salad`, `steak`, `dessert`, `drink`, `lamb chops`, or `sole fillet`; those remain universal or future context-aware coverage. Caribbean/French-Caribbean items such as Bokit and Accra remain deferred to a separate taxonomy decision.

| dishId | metadataCode | cuisineId | metadataConfidence | imageStatus | decision |
|---|---:|---|---:|---|---|
| coleslaw | 100001 | general | 0.84 | generated and stamped | keep-verified |
| corn-on-the-cob | 100002 | general | 0.84 | generated and stamped | keep-verified |
| garlic-bread | 100003 | general | 0.84 | generated and stamped | keep-verified |
| onion-rings | 100004 | general | 0.84 | generated and stamped | keep-verified |
| mashed-potatoes | 100005 | general | 0.84 | generated and stamped | keep-verified |
| mixed-vegetables | 100006 | general | 0.84 | generated and stamped | keep-verified |
| grilled-vegetables | 100007 | general | 0.84 | generated and stamped | keep-verified |
| side-rice | 100008 | general | 0.84 | generated and stamped | keep-verified |

## Alias Review

Aliases are limited to exact names, safe translations, and narrow descriptive names. Broad terms such as `vegetables`, `rice`, `bread`, `slaw`, `puree`, and `onion` were not added because they can overmatch menu descriptions or other dishes.
