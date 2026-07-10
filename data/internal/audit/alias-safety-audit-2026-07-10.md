# Alias Safety Audit — 2026-07-10

## Scope

- Verified dishes remained at 1155.
- Runtime aliases changed from 3531 source rows to 3368 normalized, conflict-free aliases.
- No dish metadata or image asset was promoted or replaced.

## Decisions

- Exact cross-dish aliases now require one explicit canonical owner in `dishAliasResolutionPolicy`.
- Generic translations that cannot safely identify one cuisine-specific dish are quarantined: `血肠`, `葡萄叶米卷`, and `酿辣椒`.
- Case-only and duplicate-source aliases for the same dish are exported once because matching is already normalized.
- Partial menu matching prefers the longest alias first, then confidence, so specific names such as `chocolate croissant`, `garnaalkroketten`, and `broodje kroket` beat shorter contained aliases.

## Representative ownership fixes

| Alias | Verified owner |
| --- | --- |
| nasi goreng | nasi-goreng |
| Hainanese Chicken Rice / 海南鸡饭 | hainanese-chicken-rice |
| acai bowl / açaí bowl | acai-bowl |
| Uitsmijter Ham Kaas | uitsmijter-ham-kaas |
| mixed grill | mixed-grill |
| 云吞面 | wonton-noodles |
| 越南烤肉米粉 | bun-thit-nuong |
| 土耳其红扁豆汤 | mercimek-corbasi |
| 炸香蕉 | pisang-goreng |

## Verification gate

- `scripts/validate-metadata.mjs` now rejects normalized alias duplicates, cross-dish conflicts, and policy drift.
- `scripts/check-menu-matching.mjs` covers exact ownership, longest contained-alias matching, and quarantined generic aliases.
