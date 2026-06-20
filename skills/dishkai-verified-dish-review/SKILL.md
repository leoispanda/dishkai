---
name: dishkai-verified-dish-review
description: Strict workflow for auditing, rebuilding, and promoting DishKAI dish metadata batches into the verified export. Use when continuing the DishKAI verified dish database audit, reviewing quarantined generated dishes, rebuilding dish metadata, validating dish aliases and image assets, creating at-most-30-dish audit batches, updating audit reports and memory, or deciding whether a dish should remain quarantined instead of verified.
---

# DishKAI Verified Dish Review

## Purpose

Audit DishKAI dish metadata with the same strict gate used for the verified database rebuild.

The goal is trust, not raw count. Promote a dish only when its metadata, aliases, and images are specific enough to help a diner decide whether to order it. If unsure, keep it quarantined.

## First Moves

1. Read the repo instructions in `AGENTS.md` and obey the approval/push mode there.
2. Inspect current state before editing:
   - `git status --short --branch`
   - `git log --oneline -5`
   - `node scripts/validate-metadata.mjs`
   - `node scripts/check-dish-assets.mjs`
   - `node scripts/audit-verified-dishes.mjs`
3. If `node` is not on PATH, use the bundled Codex workspace Node path.
4. Identify the next batch from `metadata.dishes`, `quarantinedDishes`, audit reports, and cuisine counts. Do not rely on stale prose counts when validators disagree.

## Verification Gate

A dish may enter verified only when all are true:

- The dish is real, specific, and useful for restaurant ordering.
- The batch has at most 30 dishes.
- `metadataConfidence >= 0.78`, preferably `0.82+` after manual audit.
- Metadata is dish-specific, not template text.
- `composition`, `distinctiveFlavorSources`, `textureProfile`, `riskFlags`, and `orderVerdict` are concrete.
- Ingredient and seasoning IDs reuse global metadata where possible.
- Aliases are exact or safe variants. Remove generic aliases that can overmatch other cuisines or menu lines.
- The served main image and thumb image semantically match the dish.
- The image filename starts with the dish `metadataCode`.
- `imageCode === metadataCode`.
- The visible image stamp/code matches `metadataCode` when images are generated or replaced.

Do not promote:

- generic protein/menu buckets;
- restaurant-specific labels unless the menu explicitly marks them;
- kids-menu buckets, condiments, sides pretending to be dish cards;
- duplicated variants already covered by a safer canonical dish;
- dishes with mismatched, abstract, schematic, or duplicate images;
- generated/template metadata with placeholders, coverage-fill language, or English words inside Chinese fields.

## Batch Workflow

1. Choose a bounded candidate set.
   - Prefer cuisines below target coverage or real-menu misses.
   - For European depth, remember the core 30-dish coverage may already be complete; extra Europe 60 rows are optional and still require full review.

2. Build a candidate manifest under `data/internal/audit/rebuild-batches/`.
   - Include `dishId`, `metadataCode`, `cuisineId`, `sourceFile`, `name`, `imagePath`, and `thumbPath`.
   - Create or reuse a contact sheet for candidate image review.

3. Review candidate images manually.
   - Use `scripts/create-dish-contact-sheet.py` for current assets.
   - Accept existing images only when they clearly match the dish.
   - If images are wrong, generate or replace them, then stamp exact metadata codes and export both main/thumb WebP.
   - If image generation is needed, use the available image generation skill/tool and keep project-bound final assets inside the repo.

4. Rewrite metadata.
   - Prefer replacing whole dish objects through existing helpers:
     - `scripts/replace-dish-object-configs.mjs`
     - `scripts/replace-dish-config-array-items.mjs`
     - `scripts/replace-starter-dish-configs.mjs`
   - Add reusable ingredients or seasonings only when existing IDs cannot represent the dish truthfully.
   - Keep cooking guidance diner-facing; never add recipe steps.

5. Review aliases.
   - Keep canonical names, local spellings, translations, and safe menu variants.
   - Remove or narrow generic aliases such as broad "curry", "soup", "salad", "fried rice", "mixed grill", "seafood pasta", or cross-cuisine names unless scoped safely.

6. Promote only accepted IDs.
   - Add accepted generated IDs to `auditedGeneratedDishIds` in `data/internal/index.js`.
   - Do not add a whole source layer back into verified.
   - Leave rejected rows in quarantine.

7. Update audit artifacts.
   - Add a batch report markdown file with batch size, scope, candidate rule, metadata action, image action, overview path, decision, and a compact audit table.
   - Update or regenerate central reports via `scripts/audit-verified-dishes.mjs`.
   - Update `DISHKAI_MEMORY.md` after meaningful product/architecture/database decisions.
   - Update roadmap prose when counts or priorities change.

## Required Checks

Run these before commit:

```bash
node --check data/internal/index.js
node --check data/internal/dishes/<changed-file>.js
node --check data/internal/ingredients.js
node --check data/internal/seasonings.js
node scripts/validate-metadata.mjs
node scripts/check-dish-assets.mjs
node scripts/audit-verified-dishes.mjs
git diff --check
git diff --cached --check
```

Also check overview batches stay within 30 dishes. Count the generated `data/internal/audit/image-overviews/*.html` pages by their `<figure class="card ...">` entries, not by a guessed class name.

## Git Discipline

- Stage only files related to the current batch.
- Do not stage unrelated untracked files such as local `.codex/`, local logos, screenshots, post images, or stale candidate files from other batches.
- Commit with a clear batch message, for example `Complete audited Indonesian dish target`.
- Push only when the current DishKAI task mode allows it.

## Final Report Shape

Report:

- batch completed and whether it was pushed;
- new verified dish / alias counts;
- cuisine count changes;
- remaining quarantine counts;
- key files, especially batch report and final image overview;
- validators run and their results;
- commit hash and branch;
- any untracked files intentionally left untouched.
