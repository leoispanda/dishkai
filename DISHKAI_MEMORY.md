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
- PDC output is Chinese by default.
- PDC main UI lets Leo choose Product Council or Personal PDC Council, then choose role cards and either independent speaking or automatic grouping.
- PDC uses Cloudflare Workers AI through the backend AI binding, not OpenAI API.
- PDC does not use a database, login, voting, elimination, or PK in V1.5.
- PDC supports user intervention by sending previous_summary instead of full conversation history.
- Future PDC V2 can add likes, elimination, PK, and persistent meeting state.
- PDC now supports automatic round-robin grouping as the main path, with older modes such as quick_mode, preset_team_debate, custom_team_debate, and hybrid_debate kept compatible in the backend.
- Custom grouping settings are saved locally under personalPdcCustomGroups, with no database.
- Backend keeps old team_debate input compatible by mapping it to preset_team_debate and now returns participants as the primary output schema.
- PDC main flow is now council-first: choose Product Council or Personal PDC Council, select role cards, inspect role details, then choose independent speaking or automatic grouping.
- Automatic grouping uses simple round-robin assignment with user-selected group count; fixed three-team templates are no longer the main UI path.
- DishKAI is now explicitly documented and presented as a private food memory and menu assistant for Leo & Cindy, not a public service.
- Public homepage must state that DishKAI is private and not a public service.
- Private tools require server-side access-code verification through `DISHKAI_PRIVATE_ACCESS_CODE` and a signed httpOnly session cookie using `DISHKAI_SESSION_SECRET`.
- Upload, recognition, PDC, image generation, and database-write APIs should be protected server-side and rate limited.
- Uploaded menu images should not be permanently stored by default; process temporarily and store only structured dish data after Leo/Cindy manually confirms.
- Menu upload UI must warn against images containing faces, payment details, addresses, phone numbers, or other personal/sensitive information.
- AI dish image previews must show: “AI-generated preview. For inspiration only. Actual dish may look different.”
- If temporary scan records are introduced, keep a clear recent scans admin action.

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

- Added starter metadata coverage for every currently registered cuisine: Thai, Japanese, Korean, Chinese, Italian, French, German, Dutch, and Belgian. New non-Italian dish images use the shared placeholder until approved generated images are imported.
