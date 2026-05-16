# DishKAI Memory

DishKAI is a visual menu understanding tool.

Core positioning:
DishKAI helps users quickly understand unfamiliar menu names and decide what is worth ordering.

Current MVP direction:

- DishKAI supports two input modes: menu image upload and pasted/typed menu text.
- Text input is the fast path; image upload is the real restaurant path.
- User selects original menu language and familiar target language.
- DishKAI turns the menu into a clickable visual menu.
- Each item opens a Dish Knowledge Card.

Both inputs converge into one pipeline:
menu text -> AI extraction -> alias matching -> metadata retrieval -> visual clickable menu -> Dish Knowledge Card.

Core output:
Dish Knowledge Card.

Dish Card should show:

- visual reference image
- original menu name
- familiar language name
- order verdict
- short description
- estimated composition
- basic taste
- distinctive flavor sources
- texture
- watch out / allergens / dietary notes
- visual disclaimer

Important product principle:
DishKAI should give fast ordering conclusions first, then deeper food knowledge if the user opens a card.

Metadata is the core asset:
DishKAI should not rely only on live AI generation.
It should build an internal reusable metadata system.

Internal metadata layers:

- cuisineRegions
- cuisines
- dishes
- dishAliases
- ingredients
- seasonings
- tasteTags
- cookingMethods
- riskFlags

Key architecture:

- Ingredients and seasonings are reusable global objects.
- Dishes reference ingredients and seasonings by ID.
- Each dish defines the percentage, role, optionality, flavor impact, and display priority of each component.
- Dish aliases are separate from dish metadata.
- Alias records point to dishId.
- Images are visual references only.
- Use thumbPath for grid cards and imagePath for full cards.
- Use lazy loading and avoid loading all images at once.
- DishKAI now uses Cloudflare backend AI for menu analysis.
- Text input calls /api/analyze-menu-text.
- Image upload calls /api/analyze-menu-image.
- Workers AI should be called from backend functions through the AI binding.
- Metadata remains the source of truth.
- AI fallback results must be marked unverified.
- Original menu order must be preserved one-to-one.
- Recommendations may be separate, but must not reorder the main menu list.
- Each item should keep orderIndex and originalName.
- Compact icon tags should be shown on menu cards where useful.
- Added cuisineRole metadata to distinguish cuisine-level representative dishes from restaurant-specific house specials.
- cuisineRole supports levels like signature, classic, common, regional, street-food, festival, modern, and niche.
- houseSpecial should only be used when a menu explicitly marks an item as a restaurant special.
- MapKAI may be inspected only as technical reference for Cloudflare AI patterns, but must not be modified from DishKAI tasks.

Composition rule:
Use approximate 5% composition blocks.
Do not present composition as exact recipe data.
Small but powerful seasonings should be shown as distinctive flavor sources.

Cuisine classification:
Global cuisine regions should include:

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

French, German, Dutch, and Belgian cuisines belong under western-central-europe.

Approval workflow:
At the start of each new task, Codex should ask Leo whether approval checkpoints are needed.
If Leo says no approval is needed, Codex may directly modify files inside the DishKAI project, run checks, commit, and push.
Codex must not modify files outside the DishKAI project.
Codex must still ask before destructive operations, editing secrets, changing Cloudflare settings, changing database schema, installing dependencies, or changing project direction significantly.
