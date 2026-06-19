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
- Public footer should not show the approximate AI API cost note unless explicitly requested. Do not use guilt-framed donation language.
- Private tools require server-side access-code verification through `DISHKAI_PRIVATE_ACCESS_CODE` and a signed httpOnly session cookie using `DISHKAI_SESSION_SECRET`.
- Upload, recognition, PDC, image generation, and database-write APIs should be protected server-side and rate limited.
- Uploaded menu images should not be permanently stored by default; process temporarily and store only structured dish data after Leo/Cindy manually confirms.
- Menu upload UI must warn against images containing faces, payment details, addresses, phone numbers, or other personal/sensitive information.
- AI dish image previews must show: “AI-generated preview. For inspiration only. Actual dish may look different.”
- If temporary scan records are introduced, keep a clear recent scans admin action.
- Default pasted menu sample now uses verified French dishes: Boeuf Bourguignon, Coq au Vin, and Ratatouille.
- Leo confirmed future normal DishKAI repository tasks should proceed directly with local edits, checks, commit, and push unless they cross the explicit safety boundaries.

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

- DishKAI v0.2.6 opened the core menu recognition flow to public beta without a shared daily quota. Text/photo menu analysis no longer requires private login, but same-origin checks and per-IP short-window rate limits remain. PDC and internal/private actions stay behind Leo/Cindy private access.

- DishKAI v0.2.7 changed the unmatched-dish backlog to background-only collection. Unmatched and AI-generated items are still saved locally under `dishkai-unmatched-dish-backlog-v1`, but the public visual menu no longer renders the Coverage Backlog panel, copy action, clear action, or "saved for later" status text. Future batch-generation tooling should expose this only through a private/admin path.

- DishKAI v0.2.8 moved unmatched-dish collection out of browser localStorage and into backend/cloud collection. Text/photo analysis endpoints now record unmatched and AI-generated items server-side through the `DISHKAI_UNMATCHED_DISHES` KV binding when configured; local development writes the same structured backlog to ignored `data/private/unmatched-dish-backlog.json`. Public UI still does not show the backlog. Leo can review/clear the central backlog through private `GET`/`DELETE /api/unmatched-dishes`.

- DishKAI v0.2.9 removed the private access-code panel from the default public start experience. The first public action is now the disclaimer/privacy-risk acknowledgement inside the menu form. The private panel is still available for internal testing with `?internal=1`, and backend private APIs remain protected.

- DishKAI v0.2.10 changed public onboarding to a real two-step flow. First-time users see only the standalone disclaimer/privacy-risk gate; after checking the acceptance box and clicking "Enter DishKAI", the full menu tool appears. The acceptance remains stored locally for return visits.

- DishKAI v0.2.11 removed guilt-framed API-cost wording from the hero. The public app now places a small footer note with approximate API cost only: usually within a few cents per AI scan depending on menu length and image size.

- DishKAI v0.2.12 added language selection to the first disclaimer step. The three gate buttons set `dishkai-ui-lang`; entering the app keeps the UI and output language select defaulted to that language.

- DishKAI v0.2.13 added dish thumbnails to matched visual-menu list rows. The small thumbnail uses `card.thumbPath` with `card.imagePath` fallback to hint that tapping opens a larger image/detail card.

- DishKAI v0.2.14 refreshed the public UI with an Apple-inspired glass interface: near-white luminous background, frosted panels, finer borders, softer shadows, sage primary actions, tighter app-shell spacing, glass result rows, and refined dish detail cards. Keep future UI changes compatible with the two-step legal gate and synchronized root/public files.

- DishKAI v0.2.15 refined the primary button away from the saturated green gradient. Primary actions now use a restrained dark glass treatment with subtle highlight, fine border, and softer shadow to better match the premium glass UI.

- DishKAI v0.2.16 added the orange cloche sparkle logo as a project SVG asset at `/assets/brand/dishkai-cloche-logo.svg`. The topbar brand mark and favicon now use this logo, with root/public asset copies kept in sync.

- DishKAI v0.2.17 changed the brand lockup to match the shared reference format: rounded white app icon plus `Dish` wordmark with orange `KAI`. The cloche SVG was simplified for a cleaner app-icon look.

- DishKAI v0.2.18 unified the logo orange and interface accent color by setting `--terra` to the same orange used by `KAI`. The product eyebrow copy now reads "Dish Knowledge with AI".
- DishKAI v0.2.19 added a compact footer About block with the public contact address `hello@dishkai.com`, while keeping the approximate AI API cost note in the footer.
- DishKAI v0.2.20 redesigned the public footer into a premium glass card layout with clearer brand/version grouping, a separated About/contact area, a pill-style contact link, and responsive single-column behavior on smaller screens.
- DishKAI v0.2.21 removed the approximate AI API cost note from the public footer.
- DishKAI v0.2.22 tightened the public footer layout and moved the disclaimer into a native expandable footer section.
- DishKAI v0.2.23 merged the footer disclaimer into the contact/info area as a compact native details link, following the Turnpo footer pattern instead of a separate full-width disclosure row.
- DishKAI v0.2.24 aligned the footer disclaimer trigger at the same height as Contact by making it a sibling footer column, matching the Turnpo-style same-row disclosure layout.
- DishKAI v0.2.25 unified footer contact and disclaimer controls with matching orange pill styling and orange focus rings, removing the browser-default blue focus outline.
- DishKAI v0.2.26 added a footer stats row showing stored visit count and successful menu-use count. These counters are browser-local unless a future backend analytics store is added.
- The Cloudflare Pages KV binding for centralized unmatched-dish collection is configured in `wrangler.toml` as `DISHKAI_UNMATCHED_DISHES` pointing to the `dishkai_unmatched_dishes` namespace ID `6500a1ef77664ca0a9c8be2ee9fdd13d`.
- Expansion Loop Spanish Depth Pass V1 added 18 verified Spanish dishes, bringing Spanish coverage to 30 dishes and the full database to 461 verified dishes / 1567 aliases. New Spanish assets use `/assets/dishes/main/{metadataCode}-{dishId}.webp` and matching thumbs through 105030; `spanish-flan` intentionally avoids reusing the existing generic Mexican `flan` dish id.

- Expansion Loop Global 30 Pass V1 added 377 verified dishes and matching visual-reference assets, bringing every registered cuisine to at least 30 dishes and the full database to 838 verified dishes / 2553 aliases. New data lives in `global-depth-dishes.js` and `global-depth-dish-aliases.js`; keep internal IDs and image paths ASCII while preserving non-ASCII local names and aliases for display/matching.

- Expansion Loop Europe 60 Pass V1 added 272 verified dishes and matching visual-reference assets, bringing Italian, Dutch, French, Greek, Spanish, German, Belgian, British-Irish, Portuguese, and Scandinavian coverage to 60 dishes each. The full database is now 1110 verified dishes / 3097 aliases. New data lives in `europe-depth-dishes.js` and `europe-depth-dish-aliases.js`; continue keeping IDs and image paths ASCII.

- Verified database audit Thai Batch 014 restored 25 audited Thai dishes from quarantined generated layers, bringing Thai coverage to 30 and the verified export to 346 dishes / 1132 aliases. Metadata was rebuilt with Thai-specific reusable ingredients/seasonings and concrete diner-facing composition/flavor guidance. 13 existing Thai images were accepted after contact-sheet review; 12 duplicate/mismatched global-depth images were replaced with generated clean dish images, then locally stamped with exact metadataCode and exported as matching main/thumb WebP assets. Continue with Japanese, Korean, or Chinese core batches next rather than reintroducing any high-risk rows without audit.

- Verified database audit Japanese Batch 015 restored 25 audited Japanese dishes from quarantined generated layers, bringing Japanese coverage to 30 and the verified export to 371 dishes / 1214 aliases. Metadata was rebuilt with Japanese-specific reusable ingredients/seasonings and concrete ordering guidance, including raw-fish, soy/gluten, fish-dashi, pork, egg, shellfish, dairy, and dessert sugar watch-outs. 12 existing Japanese images were accepted and code-stamped; 13 mismatched duplicate global-depth images were replaced with generated clean dish images, then locally stamped with exact metadataCode and exported as matching main/thumb WebP assets. The 5 base Japanese images were also code-stamped so all verified Japanese dish images now visibly match their 109xxx metadataCode.

- Verified Dish Database Audit 2026-06-18 supersedes the previous expansion-count notes: generated expansion layers are no longer trusted verified metadata. `expanded-dishes.js`, `world-dishes.js`, `global-depth-dishes.js`, `europe-depth-dishes.js`, and their aliases are quarantined from `metadata.dishes` / `metadata.dishAliases` until rebuilt in <=30-dish review batches. Current verified export is intentionally reduced to 47 dishes / 233 aliases after confidence, template-language, alias, and asset checks.

- Core Batch 001 restored 30 high-frequency foundation dishes from `fix-metadata` after metadata review and contact-sheet image review: Thai 4, Japanese 5, Korean 5, Chinese 5, French 5, German 5, and Dutch bitterballen. These now carry `confidenceTag: audited-core-batch-001` and `metadataConfidence: 0.82`; current verified export is 77 dishes / 341 aliases, with 27 `fix-metadata` rows still waiting for the next batch.

- Core Batch 002 reviewed the remaining 27 `fix-metadata` candidates. It restored 16 specific European menu items (Dutch/Belgian foundations plus selected French/Dutch café items) with `confidenceTag: audited-core-batch-002` and `metadataConfidence: 0.82`, and kept 11 generic/non-European brunch candidates out of verified. Current verified export is 93 dishes / 405 aliases; automated `fix-metadata` is now cleared, leaving generated/quarantined layers for rebuild.

- Italian Batch 003 restored 12 audited generated Italian dishes through an explicit allowlist in `data/internal/index.js`, after rewriting template metadata and reviewing the contact-sheet images. `prosciutto-e-melone`, `vitello-tonnato`, and `affogato` stayed out of verified because their images depict other dishes. Current verified export is 105 dishes / 443 aliases; Italian coverage is 27/30, so the next Italian step needs three replacement-quality images plus rebuilt metadata before hitting the 30 target.

- Italian Batch 004 replaced the rejected images for `prosciutto-e-melone`, `vitello-tonnato`, and `affogato`, rebuilt their metadata, and restored them through the audited generated allowlist. Italian is now at the 30/30 European target with 108 verified dishes / 450 aliases overall; continue the same strict image+metadata review pattern for French, German, Dutch, and Belgian depth.

- French Batch 005 restored 12 audited French classics from `expanded-dishes.js` after metadata rebuild and contact-sheet image review. Eight global-depth French candidates (`moules-marinieres`, `blanquette-de-veau`, `gratin-dauphinois`, `tartiflette`, `foie-gras`, `madeleines`, `profiteroles`, `paris-brest`) stayed out because their images were semantically wrong. Current verified export is 120 dishes / 488 aliases; French is 22/30 and needs those eight replacement-image rebuilds next.

- French Batch 006 replaced the eight rejected French images, rebuilt their metadata, and restored them through the audited generated allowlist. French is now at the 30/30 European target with 128 verified dishes / 505 aliases overall. Continue with German, Dutch, and Belgian depth first, then audit Spanish/British-Irish/Portuguese/Scandinavian as registered European cuisines rather than restoring old generated layers wholesale.

- German Batch 007 rebuilt 25 German candidates after contact-sheet review, accepted 12 existing matched images, replaced 13 semantically wrong images, and restored the batch through the audited generated allowlist. German is now at the 30/30 European target with 153 verified dishes / 577 aliases overall. `rinderroulade` remains quarantined as a duplicate/variant of `rouladen`; `lebkuchen` remains quarantined as seasonal and unnecessary for the 30-dish verified target. Continue with Dutch and Belgian next.

- Dutch Batch 008 rebuilt 23 Dutch candidates after contact-sheet review, accepted 12 existing matched images, replaced 11 semantically wrong images, and restored the batch through the audited generated allowlist. Dutch is now at the 30/30 European target with 176 verified dishes / 642 aliases overall. Dutch-Indonesian staples were kept only where they are common Dutch menu items and explicitly described as Dutch-Indonesian; continue with Belgian next.

- Belgian Batch 009 rebuilt 25 Belgian candidates after contact-sheet review, accepted 10 existing matched images, replaced 15 semantically wrong or ambiguous images, removed the generic `Frieten` alias from `belgian-fries`, and restored the batch through the audited generated allowlist. Belgian is now at the 30/30 European target with 201 verified dishes / 713 aliases overall. Duplicate generated candidates such as `stoofvlees`, `paling-in-t-groen`, `grey-shrimp-tomato`, and `beef-tartare-belgian` remain quarantined because canonical equivalents are already covered.

- Spanish Batch 010 rebuilt 30 Spanish candidates from `world-dishes.js` after contact-sheet review, accepted 22 existing matched images, replaced 8 semantically wrong or ambiguous images, narrowed generic aliases such as `russian salad`, `fried calamari`, `black rice`, `garlic chicken`, `pork cheek`, `caramel custard`, and `squid sandwich`, and restored the batch through the audited generated allowlist. Spanish is now at the 30/30 European target with 231 verified dishes / 818 aliases overall. Keep the same conservative alias rule for British-Irish, Portuguese, and Scandinavian batches.

- British-Irish Batch 011 rebuilt 30 candidates from `world-dishes.js`, `global-depth-dishes.js`, and `europe-depth-dishes.js` after metadata review and contact-sheet image review, accepted 12 existing matched images, replaced 18 semantically wrong duplicate images, removed the generic British `chicken tikka masala` alias to avoid conflict with the South Asian dish, and restored the batch through the audited generated allowlist. British-Irish is now at the 30/30 European target; continue with Portuguese and Scandinavian next.

- Portuguese Batch 012 rebuilt 30 candidates from `world-dishes.js`, `global-depth-dishes.js`, and `europe-depth-dishes.js` after metadata review and contact-sheet image review, accepted 11 existing matched images, replaced 19 semantically wrong or ambiguous duplicate images, kept selected aliases because they were exact Portuguese dish names or explicit translations, and restored the batch through the audited generated allowlist. Portuguese is now at the 30/30 European target; Scandinavian is the remaining European target batch.

- Scandinavian Batch 013 rebuilt 30 candidates from `world-dishes.js`, `global-depth-dishes.js`, and `europe-depth-dishes.js` after metadata review and contact-sheet image review, accepted 11 existing matched images, replaced 19 semantically wrong duplicate images, kept selected aliases because they were exact Nordic dish names or explicit translations, and restored the batch through the audited generated allowlist. All registered European cuisines are now at least 30 verified dishes under the strict audit gate.

- Verified database audit Korean Batch 016 restored 25 audited Korean dishes from quarantined generated layers, bringing Korean coverage to 30 and the verified export to 396 dishes / 1303 aliases. Metadata was rebuilt with Korean-specific reusable ingredients/seasonings and concrete ordering guidance, including fermented soybean/chili, soy/gluten, egg, seafood, pork, beef, processed-meat, dairy, fish, and dessert sugar watch-outs. 11 existing Korean images were accepted and code-stamped; `samgyeopsal` plus 13 global-depth Korean images were replaced with clean dish-matching generated images, then locally stamped with exact 110xxx metadataCode and exported as matching main/thumb WebP assets. Continue with Chinese next rather than reintroducing any high-risk rows without audit.
