# DishKAI

DishKAI is a personally operated public beta menu understanding website for exploring AI application development, with private internal tools still reserved for Leo & Cindy. Questions, feedback and privacy requests can be sent to hello@dishkai.com.

It turns unfamiliar menu names into visual, clickable Dish Knowledge Cards for fast ordering decisions.

## Local development

```bash
npm run dev
```

Open http://127.0.0.1:3000.

The local Node server supports the same starter text-analysis pipeline as the Pages Function fallback:

- `POST /api/analyze-menu-text`
- `POST /api/analyze-menu-image`

Text input works with starter metadata. Image analysis uses a server-side Gemini or OpenAI key to read menu photos, then reuses the same verified DishKAI metadata and alias-matching pipeline as pasted text.


## Metadata coverage

DishKAI's internal verified metadata currently includes 1155 dishes and 3368 normalized, conflict-free aliases across 28 registered cuisine groups. Every registered cuisine has at least 30 verified dishes after strict re-audit; optional depth remains available only where rows passed the same dish-specific metadata and image gate. Generated expansion layers remain quarantined unless a row is restored through a documented <=30-dish review batch.

Validate metadata integrity with:

```bash
npm run validate:metadata
npm run check:menu-matching
npm run check:dish-assets
```

## Cloudflare Pages

Deploy the `public` directory. Root files and `public/` copies are kept synchronized for Pages deployment.

Cloudflare Pages Functions live under `functions/api/` and call AI providers only from the backend. With the default `auto` provider setting, menu extraction prefers Gemini when its key is configured, with OpenAI as a backup when its key is also configured. Without a Gemini key, the existing OpenAI behavior remains available. Text extraction can fall back to the Cloudflare Workers AI `AI` binding and then local parsing; photo extraction needs a configured Gemini or OpenAI key.

Required Cloudflare secrets:

- `DISHKAI_PRIVATE_ACCESS_CODE`: private access code for Leo/Cindy. Do not hardcode this in frontend code.
- `DISHKAI_SESSION_SECRET`: strong random session signing secret for the `dishkai_session` httpOnly cookie.

AI secrets (at least one is needed for photo analysis):

- `DISHKAI_GEMINI_API_KEY`: Gemini API key used only by the backend. `GEMINI_API_KEY` is accepted as an alias.
- `DISHKAI_AI_API_KEY`: existing OpenAI API key, used as the backup when both providers are configured, or as the primary provider when no Gemini key is configured.

Optional Cloudflare variables:

- `DISHKAI_AI_PROVIDER`: `auto` (default), `gemini`, or `openai`. An explicit selection requires that provider's key; a missing selected key returns a configuration error for photos and local parsing for text.
- `DISHKAI_AI_PROVIDER_FALLBACK`: defaults to `true`; set to `false` to disable switching to another AI provider after a failure. Text can still use local parsing. Safety refusals never switch providers.
- `DISHKAI_GEMINI_MODEL`: defaults to `gemini-3.8-flash`, which supports image input and structured JSON output. See [Google's model documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash).
- `DISHKAI_GEMINI_VISION_MODEL`: optional Gemini model override for menu photos; defaults to `DISHKAI_GEMINI_MODEL`.
- `DISHKAI_AI_MODEL`: OpenAI model for menu AI. Defaults to `gpt-5.4-mini`. `OPENAI_MODEL` is also accepted as a compatibility alias.
- `DISHKAI_AI_VISION_MODEL`: optional OpenAI model override for menu photo reading. Defaults to `DISHKAI_AI_MODEL`.
- `DISHKAI_AI_IMAGE_DETAIL`: optional image-detail setting for OpenAI menu photo reading. Defaults to `original` for better OCR on photographed menus; use `high`, `auto`, or `low` only when cost/latency matters more than recognition quality.
- `DISHKAI_ENABLE_AI_FALLBACK`: set to `true` only when unmatched menu items should receive temporary, unverified AI estimate cards.

To activate Gemini, add the original key as an encrypted `DISHKAI_GEMINI_API_KEY` secret in **DishKAI's production environment**, then create a deployment that includes it. A secret stored in MapKAI is scoped to that project and is not automatically available to DishKAI; saved secret values cannot be read back from the dashboard. See [Cloudflare's bindings documentation](https://developers.cloudflare.com/pages/functions/bindings/). Do not put keys in source files, frontend code, chat, logs, or `wrangler.toml`. Reusing a compatible Google key shares that Google project's quota and billing.

Gemini uses the native [generateContent REST API](https://ai.google.dev/api/generate-content), an `x-goog-api-key` header, inline image bytes, and structured JSON output. The response reports the actual extraction provider/model, including any OpenAI backup. Dish knowledge still comes from verified DishKAI metadata; optional generated cards remain unverified. The separate private PDC tool keeps its existing Workers AI binding.

Optional Cloudflare bindings:

- `DISHKAI_UNMATCHED_DISHES`: KV namespace binding for **optional** unknown/AI-estimated dish-name contributions. The form starts unchecked; JSON APIs require `contributeUnknownDishes: true` and photo FormData requires the literal string `"true"`. Declining does not block analysis. New KV event records expire after 90 days and contain limited dish/language/source fields, with obvious personal-data filtering. Photos and full menus are not stored for contributions. Filtering does not guarantee anonymity. The production binding is configured in `wrangler.toml`; absent bindings do not prevent analysis. New contributions are declined if the store lacks event storage with individual expiry, including the compatibility local aggregate store. Legacy aggregate data remains readable by private tools, without rewriting or deleting it; historical retention requires an owner decision.

Current API endpoints:

- `POST /api/private-login`
- `GET /api/private-status`
- `POST /api/private-logout`
- `POST /api/analyze-menu-text`
- `POST /api/analyze-menu-image`
- `POST /api/pdc-round`
- `POST /api/analyze-menu`
- `GET /api/unmatched-dishes` (private)
- `DELETE /api/unmatched-dishes` (private)
- `POST /api/save-profile`
- `POST /api/analyze-receipt`
- `POST /api/save-rating`
- `POST /api/generate-dish-image`
- `POST /api/clear-recent-scans`

Privacy and misuse protections:

- Public menu recognition is available without private login; first-time users choose a language and acknowledge menu-reference/safety limits before entering the tool. This acknowledgment is not general consent or a waiver of statutory rights. Optional contributions use a separate unchecked choice.
- Private access codes are verified server-side only for internal tools such as PDC and administrative actions.
- Sessions use a signed `HttpOnly; Secure; SameSite=Lax` cookie.
- Private POST APIs reject cross-origin browser requests when an unexpected `Origin` header is present.
- Expensive/private APIs include best-effort per-IP rate limiting.
- JSON API request bodies are size-limited before parsing to reduce accidental memory/cost abuse.
- Application code does not persist uploaded menu images or full menu text. Inputs are sent to configured AI services for processing; provider terms, account tier, retention, logs, regions, DPA and transfer arrangements require operator verification. No promise of zero upstream retention is made.
- New unknown-dish contributions are opt-in and limited as described above; legacy backlog records still require owner review.
- Users are warned not to upload images containing faces, payment details, addresses, phone numbers, or other personal/sensitive information.
- AI dish illustrations are labelled at first thumbnail exposure and on the full image. They are visual references, not restaurant photographs. The image importer retains exact source bytes and origin/hashes, and blocks transformation when recognised content-credential markers are found. This conservative guard does not validate signatures or detect invisible watermarks, and does not certify robust machine marking or mark preservation.
- Card/response provenance distinguishes stored knowledge, stored guidance, generated estimates and missing metadata. Ingredient percentages are estimates; restaurant confirmation is needed for allergens, substitutions and cross-contact.
- The private browser PDC state expires after seven days (also on reads and before continuation); old records without expiry are removed from browser state. The clear-local-data action clears browser state and does not erase cloud contributions or AI-provider records.
- The local Node dev server serves static files from `public/` only, so source files and local configuration are not exposed by static routes.
- DishKAI currently does not enforce a shared daily public quota; the footer only gives a simple approximate API-cost note for AI scans.
- The private access-code panel is hidden from the normal public app page. Internal testing can reveal it with `?internal=1`, while backend private APIs remain protected.
- Public page loads do not call private-session or PDC endpoints unless an internal URL is explicitly opened.
- Menu image request bodies are stream-bounded before multipart parsing; the accepted upload formats are JPEG, PNG, WebP, and GIF.

For local Wrangler testing, Workers AI may require:

```bash
wrangler pages dev public --ai AI
```

### Menu scan reliability

- Image extraction permits up to 12,000 output tokens; text extraction scales its budget with the menu line count, up to the same limit. This is an output ceiling, not a fixed token charge. A length-limited response is rejected with `AI_OUTPUT_TRUNCATED` so an incomplete menu is never silently presented as complete.
- Gemini and OpenAI requests use a 45-second attempt deadline including response-body reading. Temporary rate-limit, server, or transport failures may retry once per provider. Extraction and provider failover share a 60-second total budget; optional estimate cards have a separate 60-second budget. `Retry-After` and Gemini `RetryInfo` are respected; delays above two seconds skip the retry. Quota/billing, authentication, invalid requests, refusals, and timeouts are not retried on the same provider. Another configured provider may be used within the remaining budget, except after a safety refusal or when provider fallback is disabled.
- The menu form prevents duplicate submissions and always releases its busy state. A 125-second browser deadline covers extraction and the optional unmatched-dish AI fallback. Connection failures and backend errors have English, Chinese, and Dutch guidance.
- After compression, the browser checks accepted formats and the 8 MB limit before uploading. HEIC must be converted if the browser cannot decode it into JPEG. Gemini accepts JPEG, PNG, and WebP; a direct GIF request uses OpenAI when backup is allowed, otherwise asks for conversion to JPEG. Uploaded images remain temporary and are sent inline, without using Gemini's persistent Files API.
- Backend logs contain error codes, model, timing, and provider request IDs where available, without API keys, images, menu text, or raw provider error bodies. To investigate an intermittent failure, check the response code and the corresponding Cloudflare Function log; a working scan today cannot establish yesterday's failure cause.
- Offline regressions: `npm run check:menu-ai`, `npm run check:menu-gemini`, `npm run check:menu-upload-frontend`, and `npm run check:menu-matching`. These use synthetic fixtures and no real credentials.

## AI transparency and operations

The public `/ai-transparency` page explains actual menu/PDC capabilities, AI providers, content origin, limits and data handling in English, Chinese and Dutch. The [EU AI Act review](docs/ai-act-review.md) uses the current adopted law and records the assessed roles, applicable transparency issues and unresolved evidence. The [operations and literacy guide](docs/ai-operations.md) contains practical exercises and an uncompleted training record template; writing it is not proof that staff training occurred.

Run `npm run check:ai-transparency` and `npm run check:image-provenance` for the new synthetic source, disclosure, opt-in, retention and guarded-import checks. Personal operation, the AI application exploration purpose and the contact email are owner-confirmed. The separate GDPR controller-identification assessment, provider contracts/processing settings, legacy retention and robust Article 50(2) marking/detection remain open. See the [operator identity follow-up](docs/ai-act-review.md#operator-identity-follow-up): Article 50 does not impose a general personal-name/home-address publication rule on this menu utility, but an email alone is not evidence of complete GDPR information. UI badges and declared JSON/DOM provenance are useful controls, not a full compliance certification.

## Personal PDC Council Room V1.5

DishKAI now hosts an internal Personal PDC Council Room as a technical test environment. This is a general personal decision system, not a DishKAI-specific food council.

The PDC room:

- outputs Chinese by default
- lets Leo choose Product Council or Personal PDC Council
- uses role cards with short traits, tags, and expandable detail profiles
- supports independent speaking and automatic round-robin grouping as the main path
- keeps older modes such as `quick_mode`, `preset_team_debate`, `custom_team_debate`, and `hybrid_debate` compatible in the backend
- uses Cloudflare Workers AI through the backend `AI` binding
- presents fictional AI role perspectives, not real experts; identifies AI responses, local fallback templates and rule-based summaries separately
- does not use the menu's Gemini/OpenAI path, database storage, voting, elimination, or PK; private access is checked server-side
- supports user intervention through follow-up rounds using `previous_summary`

Future V2 ideas include likes, elimination, PK, and persistent meeting state.

The main PDC flow is council-first: choose Product Council or Personal PDC Council, select role cards, inspect role details, then choose independent speaking or automatic grouping. Automatic grouping uses a simple round-robin assignment and can turn 9 selected roles into any valid group count, such as 5 groups. Settings are saved in localStorage under `personalPdcCustomGroups`; no database is used.
