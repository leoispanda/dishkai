# DishKAI High-Risk Dish List

This list contains dishes that should not be treated as trusted verified metadata until their listed action is complete.

- Total high-risk or non-keep rows: 32

## By source

- data/internal/dishes/cafe-brunch-depth-dishes.js: 11
- data/internal/dishes/europe-depth-dishes.js: 2
- data/internal/dishes/global-depth-dishes.js: 3
- data/internal/dishes/greek-depth-dishes.js: 15
- data/internal/dishes/world-dishes.js: 1

## Rows

| dishId | metadataCode | cuisineId | sourceFile | riskLevel | auditStatus | notes | recommendedAction |
| --- | --- | --- | --- | --- | --- | --- | --- |
| scrambled-eggs | 123013 | british-irish | data/internal/dishes/cafe-brunch-depth-dishes.js | high | remove | manual quarantine: generic breakfast item; not specific enough for verified cuisine metadata | remove or merge into canonical dish |
| shakshuka | 120013 | middle-eastern | data/internal/dishes/cafe-brunch-depth-dishes.js | high | remove | manual quarantine: real dish but out of the European batch scope; keep as candidate for later regional review | remove or merge into canonical dish |
| french-toast | 122013 | american | data/internal/dishes/cafe-brunch-depth-dishes.js | high | remove | manual quarantine: real item but assigned outside the European batch scope; keep as candidate for later review | remove or merge into canonical dish |
| eggs-benedict | 122014 | american | data/internal/dishes/cafe-brunch-depth-dishes.js | high | remove | manual quarantine: real item but assigned outside the European batch scope; keep as candidate for later review | remove or merge into canonical dish |
| avocado-toast | 122015 | american | data/internal/dishes/cafe-brunch-depth-dishes.js | high | remove | manual quarantine: generic cafe item; not specific enough for verified cuisine metadata | remove or merge into canonical dish |
| granola-bowl | 122016 | american | data/internal/dishes/cafe-brunch-depth-dishes.js | high | remove | manual quarantine: generic cafe breakfast bowl; not specific enough for verified cuisine metadata | remove or merge into canonical dish |
| acai-bowl | 130013 | brazilian | data/internal/dishes/cafe-brunch-depth-dishes.js | high | remove | manual quarantine: real item but out of the European batch scope; keep as candidate for later review | remove or merge into canonical dish |
| club-sandwich | 122017 | american | data/internal/dishes/cafe-brunch-depth-dishes.js | high | remove | manual quarantine: generic international cafe item; not specific enough for verified cuisine metadata | remove or merge into canonical dish |
| bagel-cream-cheese | 122018 | american | data/internal/dishes/cafe-brunch-depth-dishes.js | high | remove | manual quarantine: generic bagel item; not specific enough for verified cuisine metadata | remove or merge into canonical dish |
| smoked-salmon-bagel | 122019 | american | data/internal/dishes/cafe-brunch-depth-dishes.js | high | remove | manual quarantine: generic bagel variant; not specific enough for verified cuisine metadata | remove or merge into canonical dish |
| banana-bread | 122020 | american | data/internal/dishes/cafe-brunch-depth-dishes.js | high | remove | manual quarantine: generic cafe snack; not specific enough for verified cuisine metadata | remove or merge into canonical dish |
| greek-mixed-grill | 104043 | greek | data/internal/dishes/greek-depth-dishes.js | high | remove | manual quarantine: generic platter label; must be rebuilt with safer aliases before verified | remove or merge into canonical dish |
| beef-tenderloin-greek-grill | 104044 | greek | data/internal/dishes/greek-depth-dishes.js | high | remove | manual quarantine: generic grilled protein, not a cuisine-specific verified dish | remove or merge into canonical dish |
| grilled-chicken-fillet-greek | 104045 | greek | data/internal/dishes/greek-depth-dishes.js | high | remove | manual quarantine: generic grilled protein, not a cuisine-specific verified dish | remove or merge into canonical dish |
| grilled-scampi | 104047 | greek | data/internal/dishes/greek-depth-dishes.js | high | remove | No automated metadata/asset flags. Visual semantics still need human spot-check. | remove or merge into canonical dish |
| grilled-salmon-greek | 104048 | greek | data/internal/dishes/greek-depth-dishes.js | high | remove | manual quarantine: generic grilled protein, not a cuisine-specific verified dish | remove or merge into canonical dish |
| seafood-pasta-greek | 104049 | greek | data/internal/dishes/greek-depth-dishes.js | high | remove | manual quarantine: generic restaurant pasta item; likely overbroad alias risk | remove or merge into canonical dish |
| vegetable-pasta-greek | 104050 | greek | data/internal/dishes/greek-depth-dishes.js | high | remove | manual quarantine: generic restaurant pasta item; likely overbroad alias risk | remove or merge into canonical dish |
| vegan-moussaka | 104051 | greek | data/internal/dishes/greek-depth-dishes.js | high | remove | manual quarantine: variant should be reviewed against canonical moussaka before verified | remove or merge into canonical dish |
| vegetarian-souvlaki | 104052 | greek | data/internal/dishes/greek-depth-dishes.js | high | remove | manual quarantine: variant should be reviewed against canonical souvlaki before verified | remove or merge into canonical dish |
| greek-restaurant-sides | 104053 | greek | data/internal/dishes/greek-depth-dishes.js | high | remove | manual quarantine: not a specific dish knowledge card | remove or merge into canonical dish |
| kids-fried-menu-items | 104054 | greek | data/internal/dishes/greek-depth-dishes.js | high | remove | manual quarantine: generic kids menu bucket, not a dish | remove or merge into canonical dish |
| kids-chicken-nuggets | 104055 | greek | data/internal/dishes/greek-depth-dishes.js | high | remove | manual quarantine: generic kids menu item, not verified cuisine metadata | remove or merge into canonical dish |
| fried-meatballs-kids | 104056 | greek | data/internal/dishes/greek-depth-dishes.js | high | remove | manual quarantine: generic kids menu item, not verified cuisine metadata | remove or merge into canonical dish |
| fish-sticks-kids | 104057 | greek | data/internal/dishes/greek-depth-dishes.js | high | remove | manual quarantine: generic kids menu item, not verified cuisine metadata | remove or merge into canonical dish |
| butter-side | 104058 | greek | data/internal/dishes/greek-depth-dishes.js | high | remove | manual quarantine: side condiment, not a dish knowledge card | remove or merge into canonical dish |
| americain-prepare | 107037 | belgian | data/internal/dishes/europe-depth-dishes.js | high | rebuild | source layer is quarantined/untrusted; metadataConfidence 0.72 below 0.78; template-dishkai-explainer; template-common-menu-item; template-coverage-fill; template-order-verdict; template-europe-depth; Chinese localized field contains English placeholder words | quarantine from verified export; rebuild in <=30 dish batch |
| vlaamse-stoofkarbonaden | 107046 | belgian | data/internal/dishes/europe-depth-dishes.js | high | rebuild | source layer is quarantined/untrusted; metadataConfidence 0.72 below 0.78; template-dishkai-explainer; template-common-menu-item; template-coverage-fill; template-order-verdict; template-europe-depth; Chinese localized field contains English placeholder words | quarantine from verified export; rebuild in <=30 dish batch |
| cataplana | 125011 | portuguese | data/internal/dishes/world-dishes.js | high | rebuild | source layer is quarantined/untrusted; metadataConfidence 0.72 below 0.78; template-coverage-fill; template-order-verdict | quarantine from verified export; rebuild in <=30 dish batch |
| grey-shrimp-tomato | 107022 | belgian | data/internal/dishes/global-depth-dishes.js | high | rebuild | source layer is quarantined/untrusted; metadataConfidence 0.74 below 0.78; template-dishkai-explainer; template-common-menu-item; template-coverage-fill; template-order-verdict; Chinese localized field contains English placeholder words | quarantine from verified export; rebuild in <=30 dish batch |
| beef-tartare-belgian | 107030 | belgian | data/internal/dishes/global-depth-dishes.js | high | rebuild | source layer is quarantined/untrusted; metadataConfidence 0.74 below 0.78; template-dishkai-explainer; template-common-menu-item; template-coverage-fill; template-order-verdict; Chinese localized field contains English placeholder words | quarantine from verified export; rebuild in <=30 dish batch |
| makloubeh | 120023 | middle-eastern | data/internal/dishes/global-depth-dishes.js | high | rebuild | source layer is quarantined/untrusted; metadataConfidence 0.74 below 0.78; template-dishkai-explainer; template-coverage-fill; template-order-verdict; Chinese localized field contains English placeholder words | quarantine from verified export; rebuild in <=30 dish batch |
