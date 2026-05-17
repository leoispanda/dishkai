# DishKAI Memory

DishKAI is a visual menu understanding tool.

Core positioning:
DishKAI helps users quickly understand unfamiliar menu names and decide what is worth ordering.

Current MVP direction:

- DishKAI supports two input modes: menu image upload and pasted/typed menu text.
- Text input is the fast path; image upload is the real restaurant path.
- User selects output language only. DishKAI detects the original menu language automatically.
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
- Added structured metadataCode system using TCCNNN.
- Italian dish codes use 101001 to 101015.
- Dish image codes should match metadataCode.
- Raw generated images may be named by metadataCode and later converted to dish-id filenames.
- Added cookingProfile support as a concise diner-facing preparation style.
- CookingProfile must not become recipe instructions.
- DishKAI should preserve the main focus: fast menu understanding and ordering decisions.
- DishKAI homepage was simplified to focus on one action: upload menu image or paste menu text, choose output language, and generate a compact ordered menu list.
- The result list should preserve original menu order and avoid large images.
- Detailed images and metadata appear only after tapping a dish.
- Added Personal PDC Council Room V1.5 as a general personal decision system hosted inside DishKAI for technical testing.
- DishKAI is the host/test environment; the PDC is not a DishKAI-specific food council.
- PDC output is Chinese by default and supports quick_mode, team_debate, select_agents, and full_council.
- PDC defaults to team_debate to reduce AI calls while covering activation, experience, and judgment perspectives.
- PDC uses Cloudflare Workers AI through the backend AI binding, not OpenAI API.
- PDC does not use a database, login, voting, elimination, or PK in V1.5.
- PDC supports user intervention by sending previous_summary instead of full conversation history.
- Future PDC V2 can add likes, elimination, PK, and persistent meeting state.

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
