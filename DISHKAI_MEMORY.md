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
- DishKAI is now public beta for core menu recognition, while PDC and internal/private actions remain Leo/Cindy-only.
- Public homepage should state that AI scans cost Leo a small API fee and invite happy users to buy Leo coffee someday.
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

- Real restaurant coverage should use two layers: verified DishKAI metadata for high-frequency dishes, plus AI fallback cards for unmatched menu items. AI fallback must remain temporary, unverified, and clearly labeled as metadataSource: ai-fallback.

- AI fallback is disabled by default and should only run when `DISHKAI_ENABLE_AI_FALLBACK` is explicitly set to `true`; without that flag, unmatched dishes remain clearly marked as not yet in the starter database.

- DishKAI menu AI now prefers OpenAI when `DISHKAI_AI_API_KEY` is configured. The model defaults to `gpt-5.4-mini`, can be overridden with `DISHKAI_AI_MODEL`, and accepts `OPENAI_MODEL` as a compatibility alias; Workers AI remains a fallback.

- Expanded DishKAI verified metadata coverage with a V1 high-frequency restaurant layer for the existing registered cuisines. Risk display now infers common allergens/dietary watch-outs from composition, and verified dish cards use visual-reference wording instead of AI-preview wording.

- Added world restaurant coverage V1: 18 additional cuisines and 216 more verified high-frequency dishes, bringing the internal database to 379 dishes and 1086 aliases. Core metadata remains repo-versioned; R2 is still only for images/uploads, not dish knowledge.

- Security hardening pass: private POST APIs now reject unexpected cross-origin browser requests, JSON API bodies are size-limited before parsing, the local Node server only serves static files from `public/`, logout clears local PDC private discussion cache, dish image paths are allowlisted to `/assets/dishes/`, and `.gitignore` covers common local secret files such as `.env.*` and `.dev.vars`.

- Menu photo upload is now wired to OpenAI vision through `DISHKAI_AI_API_KEY`. `/api/analyze-menu-image` accepts a temporary multipart image upload, validates type/size, asks OpenAI to extract ordered menu items, then reuses the same verified metadata and alias matching pipeline as pasted text. `DISHKAI_AI_VISION_MODEL` can override the image-reading model; otherwise it follows `DISHKAI_AI_MODEL`.

- Direction update: keep the current cuisine set and deepen high-frequency European restaurant coverage instead of adding low-frequency new cuisines. Added Greek Depth Pass V1 with 30 additional verified Greek dishes, bringing Greek coverage to 42 dishes and the full database to 409 verified dishes / 1276 aliases.

- Added café/brunch depth coverage inside existing cuisines, not as a new cuisine group. High-frequency European café and hotel breakfast menu items now include scrambled eggs, omelette, shakshuka, french toast, eggs benedict, avocado toast, granola bowl, açaí bowl, croissant, pain au chocolat, club sandwich, bagel variants, tosti, broodje gezond, croque madame, quiche, and banana bread. The full database is now 427 verified dishes / 1365 aliases.

- Updated GPT menu recognition strategy: OpenAI menu extraction now uses strict JSON schema responses, menu photo requests default to `DISHKAI_AI_IMAGE_DETAIL=original`, image prompts explicitly handle European café/brunch/bistro menus, and image OCR falls back from returned `menuText` to local line splitting if the model returns an empty `items` array. Keep `DISHKAI_AI_VISION_MODEL` available for a stronger vision model than the default mini text model when photo OCR quality matters.

- Added Dutch/European Greek restaurant menu depth coverage after testing a real Greek restaurant photo. New verified items include Greek mixed grill / restaurant-named grill platters, ossenhaas, grilled chicken fillet, lavraki, grilled scampi, solomos, seafood pasta, vegetable/tomato pasta, vegan moussaka, vegetarian souvlaki, common Greek restaurant sides, chicken nuggets, fried meatballs, fish sticks, and butter side. This fixed the tested 32-line Dutch Greek menu from 9/32 matched to 32/32 matched, with vegan moussaka and vegetarian souvlaki no longer falling through to meat metadata. Full database is now 443 verified dishes / 1475 aliases, with Greek at 58 dishes.

- Added generated visual-reference assets for all 58 verified Greek dishes. Greek dish metadata now follows the dish image convention `/assets/dishes/main/{metadataCode}-{dishId}.webp` and `/assets/dishes/thumb/{metadataCode}-{dishId}.webp`, with 800x800 main images and 320x320 thumbnails.

- Added generated visual-reference assets for every verified DishKAI dish. All 443 dishes now have `/assets/dishes/main/{metadataCode}-{dishId}.webp` and `/assets/dishes/thumb/{metadataCode}-{dishId}.webp`; `starterDish` defaults to this naming convention, so new verified dishes should get matching image files before being marked ready. Placeholder image usage should now be 0 for verified dishes.

- Menu matching now first extracts/uses short real-dish candidates (`canonicalCandidate` / `matchCandidates`) before metadata alias lookup, so restaurant lines like `Caprese | pomodori | mozzarella...` can match verified Caprese while broad ingredient lines like plain `Salmon` do not incorrectly match unrelated dishes. Current alias count is 1476.

- Versioning rule: for future deliverable DishKAI changes, update the visible app version in both root `script.js` and `public/script.js`, keep `package.json` version aligned, and explicitly tell Leo the new version number in the final response.

- DishKAI v0.2.3 fixed the private session controls: locked users no longer see session-only private actions, and unlocked users get a persistent topbar Lock button even after the private access panel hides. Remember to verify both locked and unlocked browser states when changing private access UI.

- DishKAI v0.2.4 added a local unmatched-dish backlog. Each successful text/photo menu analysis saves `matchStatus: "unmatched"` items to `localStorage` with deduping, seen counts, timestamps, candidate/category hints, and original examples. The visual menu now shows a Coverage Backlog panel with copy and clear actions so Leo can collect real missing dishes for batch metadata updates later. This is intentionally local-only for now: no database, no Cloudflare storage, no uploaded image persistence.

- DishKAI v0.2.5 added explicit frontend cache busting after Leo saw an old `v0.2.2` app version in the browser after a push. `index.html` and `public/index.html` now reference `styles.css?v=0.2.5` and `script.js?v=0.2.5`, and `public/_headers` requires revalidation for core frontend files. Future version bumps must update these query versions too.

- DishKAI v0.2.6 opened the core menu recognition flow to public beta without a shared daily quota. Text/photo menu analysis no longer requires private login, but same-origin checks and per-IP short-window rate limits remain. PDC and internal/private actions stay behind Leo/Cindy private access. The homepage now tells users AI scans cost Leo a small API fee and asks happy users to buy him coffee someday.

- DishKAI v0.2.7 changed the unmatched-dish backlog to background-only collection. Unmatched and AI-generated items are still saved locally under `dishkai-unmatched-dish-backlog-v1`, but the public visual menu no longer renders the Coverage Backlog panel, copy action, clear action, or "saved for later" status text. Future batch-generation tooling should expose this only through a private/admin path.
