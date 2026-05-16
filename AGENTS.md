# DishKAI Agent Instructions

## Project Goal

DishKAI is a visual menu understanding tool.

Its core product goal is:

Turn unfamiliar menu names into visual, clickable Dish Knowledge Cards that help users quickly understand what a dish is, what it contains, how it tastes, and whether it is worth ordering.

DishKAI is not a generic recipe website, restaurant review app, recipe database, or image gallery.

The MVP should focus on:

- paste menu text
- choose original menu language
- choose familiar target language
- match dish names through aliases
- retrieve internal metadata
- generate a visual clickable menu
- open Dish Knowledge Cards

Do not prioritize user login, payment, restaurant maps, social sharing, full recipe instructions, complex profile systems, or large history systems at the current stage.

## Core Product Flow

Default product flow:

1. User uploads a menu image OR enters/pastes menu text.
2. User selects original menu language and familiar target language.
3. Image input is converted to menu text by the backend when vision/OCR support is available.
4. DishKAI extracts likely dish names and preserves original menu order.
5. DishKAI matches menu names through dish aliases.
6. DishKAI retrieves internal metadata.
7. DishKAI generates a clickable visual menu.
8. Each dish card shows image, original name, familiar language name, composition, flavor, watch-outs, and order verdict.

Keep the product focused on fast ordering decisions.

Both input modes converge into one internal pipeline:

menu input -> menu text -> dish name extraction -> alias matching -> metadata retrieval -> visual clickable menu -> Dish Knowledge Card

The frontend must call internal API endpoints, not Cloudflare Workers AI directly.

Backend API endpoints:

- POST /api/analyze-menu-text
- POST /api/analyze-menu-image

Cloudflare backend AI should be called only from Pages Functions / Workers through the AI binding, using env.AI.run(...) or context.env.AI.run(...) depending on the active project structure.

AI should mainly extract and normalize menu items. Verified DishKAI metadata remains the source of truth for dish knowledge.

The image endpoint should reuse the text endpoint logic after OCR/vision extraction. If vision support or AI binding is unavailable, return a graceful JSON error and suggest pasting menu text.

For local Wrangler development, Workers AI may need an AI binding such as:

```bash
wrangler pages dev public --ai AI
```

## Metadata Is Core

The most important asset of DishKAI is its internal metadata.

Do not hardcode dish explanations directly into UI components.

Use structured metadata and reusable IDs.

Core metadata layers:

- cuisineRegions
- cuisines
- ingredients
- seasonings
- tasteTags
- cookingMethods
- riskFlags
- dishAliases
- dishes

Core relationship:

- alias -> dishId
- dish -> cuisineId
- dish -> ingredientIds / seasoningIds
- ingredient / seasoning -> allergens / taste / texture / dietary flags

Ingredient and seasoning metadata should be defined once and reused across dishes.

Each dish should only define how ingredients and seasonings are used in that dish:

- role
- estimatedPercent
- amountLevel
- flavorImpact
- optional
- displayPriority

## Metadata Code System

Every important metadata object should be traceable through a stable internal metadataCode.

Use this 6-digit format:

TCCNNN

Where:

- T = object type
- CC = cuisine/category group
- NNN = sequence number

Object type codes:

- 1 = dish
- 2 = ingredient
- 3 = seasoning
- 4 = cuisine
- 5 = taste tag
- 6 = risk flag
- 7 = cooking method

Cuisine/category group codes:

- 00 = global/common
- 01 = Italian
- 02 = Dutch
- 03 = French
- 04 = Greek
- 05 = Spanish
- 06 = German
- 07 = Belgian
- 08 = Thai
- 09 = Japanese
- 10 = Korean
- 11 = Chinese
- 12 = Southeast Asian general
- 13 = Mediterranean general
- 14 = Western/Central European general

metadataCode rules:

- metadataCode should be stable once assigned.
- Do not use random numbers.
- Do not reuse the same metadataCode for different objects.
- Do not change existing metadataCode casually after images are generated.
- imageCode should match metadataCode for dish images unless a future reason requires separation.

For generated dish images, the small identification code printed on the image should match the dish metadataCode.

Example:

- Image shows code: 101001
- metadataCode: 101001
- dish id: carbonara

Raw generated image files may be stored as:

```text
/assets/dishes/italian/raw/101001.png
```

Final optimized website files should still use dish id names:

```text
/assets/dishes/italian/carbonara.webp
/assets/dishes/italian/carbonara-thumb.webp
```

Codex may later create a safe image import helper that maps:

metadataCode -> dish id -> final image filename

Example:

101001.png -> carbonara.webp
101001.png -> carbonara-thumb.webp

Do not create that helper unless it is simple and safe, or unless explicitly requested.

## Internal Knowledge Database

DishKAI has an internal knowledge database.

This internal database can be detailed, but users should only see clean, helpful outputs.

Do not expose internal implementation fields directly in the UI, such as:

- id
- displayPriority
- metadataConfidence
- restaurantVariationLevel
- flavorImpact
- internal schema notes

These fields may be used to generate the user-facing card, but should not appear raw.

Suggested internal data structure:

```text
/data/internal/
├── cuisine-regions.js
├── cuisines.js
├── ingredients.js
├── seasonings.js
├── taste-tags.js
├── cooking-methods.js
├── risk-flags.js
├── dish-aliases.js
└── dishes/
    ├── thai.js
    ├── japanese.js
    ├── korean.js
    ├── chinese.js
    ├── italian.js
    ├── french.js
    ├── german.js
    ├── dutch.js
    └── belgian.js
```

## Global Cuisine Classification

Use this high-level cuisine region tree as the internal global classification base:

- east-asia
- southeast-asia
- south-asia
- middle-east-north-africa
- mediterranean-europe
- western-central-europe
- northern-europe
- eastern-europe-balkans
- latin-america
- north-america
- sub-saharan-africa
- oceania-pacific
- global-fusion

French, German, Dutch, and Belgian cuisines belong under:

western-central-europe

## Dish Metadata Standard

A dish should generally include:

- id
- metadataCode
- imageCode
- cuisineId
- names
- aliases handled separately through dishAliases
- category
- mealRole
- portionType
- goodForSharing
- cookingMethods
- servingTemperature
- rawnessLevel
- shortDescription
- cookingProfile
- composition
- distinctiveFlavorSources
- tasteProfile
- textureProfile
- riskFlags
- dietaryFlags
- goodForTags
- avoidIfTags
- orderVerdict
- confidenceTag
- spiceLevel
- weightLevel
- acquiredTasteLevel
- metadataConfidence
- restaurantVariationLevel
- imagePath
- thumbPath
- visualDisclaimer

## Cooking Profile Rule

DishKAI explains how a dish feels and what to expect when ordering, not how to cook it.

Cooking metadata should support ordering understanding, not recipe instruction.

Do not add:

- step-by-step recipes
- measurements
- cooking times
- kitchen instructions
- detailed cooking procedures

Each dish may include:

- cookingMethods: [...]
- cookingProfile: { en, zh, nl }

The cookingProfile should be one short sentence from a diner's perspective.

It should help users understand:

- preparation style
- texture
- richness
- temperature
- serving expectation

The Dish Knowledge Card may show a compact section:

- How it is usually prepared
- method tags
- one-sentence cookingProfile

For Chinese:

常见做法风格

This section should support ordering understanding and must not become the main content.

## Composition Rule

Use estimated composition in 5% blocks where possible.

This is not an exact recipe. It is an approximate visual explanation.

Low-percentage but high-impact seasonings should be shown under distinctive flavor sources.

Example:

- rice noodles 45%
- shrimp 15%
- egg 10%
- bean sprouts 10%
- sauce base 10%
- peanuts 5%
- lime and herbs 5%

Distinctive flavor sources:

- fish sauce
- tamarind
- lime
- chili

Always include a disclaimer when needed:

"Estimated composition. Actual recipe may vary by restaurant."

## Ingredient and Seasoning Reuse Rule

Ingredient and seasoning objects are global reusable knowledge objects.

A dish should not duplicate the full explanation of an ingredient or seasoning.

A dish should reference ingredient or seasoning IDs and define only dish-specific usage, such as:

- itemId
- itemType
- role
- estimatedPercent
- amountLevel
- flavorImpact
- optional
- displayPriority

Example:

Ingredient metadata defines egg once.

Different dishes can use egg differently:

- Pad Thai: egg as main, 10%
- Carbonara: egg as sauce-base, 15%
- Bibimbap: egg as topping, 10%
- Omelette: egg as base, 70%

## Seasoning and Flavor Rule

Seasonings should distinguish between:

1. Basic taste
2. Distinctive flavor

Basic taste examples:

- salty
- sweet
- sour
- spicy
- umami
- bitter
- creamy
- oily
- mild

Distinctive flavor examples:

- fish-sauce-umami
- gochujang-fermented-sweet-spicy
- doubanjiang-fermented-chili-bean
- sichuan-pepper-numbing
- lemongrass-citrusy-aromatic
- tamarind-sweet-sour-tang
- miso-fermented-umami
- cumin-smoky-earthy

Display both when useful:

- Basic taste: sweet, sour, savory, mildly spicy
- Distinctive flavor: tamarind tang, fish sauce umami, peanut aroma

## Alias Rule

Dish names and aliases should be maintained separately from dish knowledge.

A dish can have:

- canonical name
- local language name
- English name
- Chinese name
- Dutch name
- spelling variants
- romanization variants
- descriptive names
- protein variants
- restaurant menu variants

Alias records should point to a stable dishId.

Do not duplicate full dish metadata for aliases.

Example alias object:

```js
{
  alias: "phad thai",
  dishId: "pad-thai",
  language: "en",
  matchType: "spelling-variant",
  confidence: 0.95
}
```

If a real menu name includes a variant, preserve the original menu name and map it to the base dish.

Example:

Original menu name:
ผัดไทยกุ้ง

Matched dish:
pad-thai

Variant:
shrimp

Display:
ผัดไทยกุ้ง
Pad Thai with shrimp
泰式虾仁炒河粉

## Menu Order Rule

Menu result order must follow the original menu order.

Do not reorder menu items based on recommendation.

Recommendations can appear in a separate summary section, but the visual menu grid/list must preserve the original sequence.

Each extracted menu item must keep:

- orderIndex
- originalName
- cleanName or normalizedName
- matchedDishId
- matchStatus

Unmatched items must still be shown in their original position with a friendly message such as:

"This dish is not in the starter database yet."

## AI Fallback Rule

If a dish is not found in metadata, a backend AI fallback may generate a temporary structured card.

AI fallback results must be clearly marked:

- matchStatus: "ai-generated"
- metadataSource: "ai-fallback"
- verified: false

The UI should show:

"AI-generated estimate. Not yet verified in DishKAI database."

Do not present AI fallback as verified metadata and do not save it permanently unless a reviewed cache system exists.

## Dish Card Standard

A Dish Knowledge Card should prioritize decision-making.

Default display order:

1. Dish image
2. Original menu name
3. Familiar language name
4. Order verdict
5. Short description
6. Estimated composition
7. Basic taste
8. Distinctive flavor sources
9. Texture
10. Watch out / allergens / dietary risks
11. Visual disclaimer

Use concise, user-friendly wording.

Do not turn DishKAI into a long encyclopedia.

## Visual Menu Card Standard

Dish grid cards should show compact icon tags where useful:

- order verdict
- dish type
- key taste
- major allergens / watch-outs
- dietary fit
- cuisine role

Use a centralized iconTags mapping instead of hardcoding icons in each card.

Useful icon tag IDs include:

- signature-dish
- classic-dish
- street-food
- regional-dish
- first-timer-friendly
- internationally-known
- safe-choice
- noodle
- rice
- soup
- curry
- contains-peanut
- contains-egg
- contains-shellfish
- contains-dairy
- spicy
- tangy
- sweet
- creamy

## cuisineRole Rule

Dish metadata may include cuisineRole to describe whether a dish is generally representative within its cuisine.

Supported cuisineRole.level values:

- signature
- classic
- common
- regional
- street-food
- festival
- modern
- niche

Important distinction:

- cuisineRole means the dish is generally representative within a cuisine.
- houseSpecial or restaurantSpecial means the restaurant itself marks this item as a house special, chef recommendation, popular item, signature set, or recommended item.

Do not confuse cuisineRole with restaurant-specific houseSpecial.

Only use houseSpecial / restaurantSpecial when the original menu explicitly marks an item as:

- house special
- chef recommendation
- popular item
- signature set
- recommended by restaurant

## Image Rule

Images are visual references only.

Use:

- thumbPath for menu grid cards
- imagePath for full dish card

Images should be lazy-loaded where possible.

Do not load all dish images on initial page load.

Always include or preserve:

"Visual reference only. Actual dish may vary by restaurant."

## Performance Rule

Metadata should be modular.

Avoid loading all global data and all images at once.

Prefer:

- split data by cuisine
- lazy-load images
- load only needed dish data
- use thumbnails in grids
- load full images only when a dish is opened

## Global Update Rule

When modifying any metadata structure, field name, dish schema, ingredient schema, seasoning schema, alias logic, or card display logic, do not update only one isolated file.

Always check and update all related files globally.

This includes:

- data files
- matching logic
- render logic
- UI labels
- sample data
- documentation
- tests or validation helpers if present

Before finishing, search the repository for old field names or outdated assumptions.

Examples:

- If ingredients becomes composition, update all references.
- If imagePath or thumbPath changes, update render logic and sample data.
- If a dish component schema changes, update all dish files using that schema.
- If alias matching changes, update both dish-aliases and the menu parsing logic.
- If multilingual fields change, update UI language selectors and fallback behavior.

## MapKAI Reference Boundary

MapKAI may be inspected only as a technical reference for Cloudflare Pages Functions, Workers AI binding, env.AI.run(...), context.env.AI, wrangler.toml AI binding, and /functions/api endpoint patterns.

Do not modify MapKAI files from DishKAI tasks.

Do not copy MapKAI product logic, MapKAI-specific data, quiz logic, learning map logic, founder/admin logic, visitor counters, or contact-message systems into DishKAI.

## Local Autonomy Rule

For the current stage of DishKAI, Codex may work autonomously inside the DishKAI project directory.

Codex may directly:

- read files inside this repository
- edit files inside this repository
- create new files inside this repository
- reorganize project-internal files when needed
- update metadata, UI, matching logic, and documentation
- update AGENTS.md and DISHKAI_MEMORY.md when relevant
- run safe local checks
- synchronize related project files globally

Codex does not need to ask for confirmation for normal local changes inside this DishKAI repository, after Leo has said no approval is needed for the task.

Strict boundaries:

- Do not edit, move, or delete files outside this DishKAI project directory.
- Do not delete large parts of the project without explicit approval.
- Do not edit system files, personal files, desktop files, downloads, documents outside this repo, or files from other projects.
- Do not modify MapKAI files from this project.
- Do not touch secrets, tokens, credentials, .env files, or private keys unless explicitly requested.
- Do not push, deploy, or change Cloudflare settings unless explicitly requested for the task.
- Do not install new dependencies unless explicitly requested.
- Do not perform destructive commands such as rm -rf unless explicitly requested.

If a task can be completed safely within the DishKAI project directory, proceed without asking after no-approval mode is confirmed.

If a task requires action outside the project directory, stop and ask first.

## Approval Mode Rule

At the start of each new task, ask Leo:

"Do you want approval checkpoints for this task, or should I proceed directly?"

If Leo says approval is needed:

- first explain the plan
- wait for explicit approval before editing
- after editing, report changed files and verification results
- do not push unless Leo explicitly says push

If Leo says approval is not needed, or says "no approval needed", "不用 approve", "直接改并 push":

- proceed directly with local edits inside the DishKAI project directory
- apply the Global Update Rule
- update all relevant files
- update DISHKAI_MEMORY.md after meaningful changes
- run safe local checks if available
- commit the changes with a clear message
- push the commit to the current remote branch

Even in no-approval mode, still ask before:

- editing files outside the DishKAI project directory
- deleting large parts of the project
- changing Cloudflare settings
- changing database schema
- editing secrets, tokens, credentials, .env files, or private keys
- installing dependencies
- performing destructive commands
- changing project direction significantly

中文规则：
每次任务开始时先问 Leo 是否需要 approve。
如果 Leo 说“不用 approve / no approval needed / 直接改并 push”，则可以在 DishKAI 项目内部直接修改、检查、commit、push。
如果 Leo 说“需要 approve”，则必须先说明方案并等待确认。

## Code Change Discipline

Before editing:

1. Inspect the current file structure.
2. Understand existing naming conventions.
3. Check whether root files and public files both exist.
4. Avoid large refactors unless explicitly requested.

During editing:

1. Touch only relevant files.
2. Keep changes modular.
3. Prefer adding structured data and helpers over hardcoding.
4. Preserve existing working behavior unless the task requires changing it.

After editing:

1. Search for old field names.
2. Verify related UI still works.
3. Report changed files.
4. Report what was verified.
5. Report commit and push status.

## Sync Rule

If the project has both root files and public files, keep them synchronized when relevant.

For example, if changing:

- index.html
- script.js
- styles.css

also check whether corresponding files exist under:

- public/index.html
- public/script.js
- public/styles.css

Do not let root and public versions drift.

## Memory Rule

When a meaningful product or architecture decision is made, append a short note to DISHKAI_MEMORY.md.

Use concise notes:

- what changed
- why it changed
- what should be remembered next time

## Product Style

DishKAI should feel:

- clean
- warm
- premium
- calm
- practical
- fast
- food-aware

Avoid:

- childish tone
- overly academic explanations
- heavy recipe-site feeling
- generic AI hype
- long blocks of text
