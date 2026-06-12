# DishKAI

DishKAI is a public beta menu understanding assistant, with private internal tools still reserved for Leo & Cindy.

It turns unfamiliar menu names into visual, clickable Dish Knowledge Cards for fast ordering decisions.

## Local development

```bash
npm run dev
```

Open http://127.0.0.1:3000.

The local Node server supports the same starter text-analysis pipeline as the Pages Function fallback:

- `POST /api/analyze-menu-text`
- `POST /api/analyze-menu-image`

Text input works with starter metadata. Image analysis uses the server-side OpenAI key to read menu photos, then reuses the same verified DishKAI metadata and alias-matching pipeline as pasted text.


## Metadata coverage

DishKAI's internal verified metadata currently includes 443 dishes and 1476 aliases across Thai, Japanese, Korean, Chinese, Italian, French, German, Dutch, Belgian, Greek, Spanish, Indian, Vietnamese, Indonesian, Malaysian/Singaporean, Turkish, Middle Eastern, Mexican, American, British/Irish, Moroccan, Portuguese, Surinamese, Ethiopian, Scandinavian, Peruvian, and Brazilian cuisine coverage. Greek coverage now includes 58 verified dishes, including deeper Dutch/European Greek restaurant grill, seafood, pasta, vegetarian, side, and kids-menu coverage. Common European café/brunch menu items are covered inside existing cuisine categories instead of adding new cuisines.

Validate metadata integrity with:

```bash
npm run validate:metadata
```

## Cloudflare Pages

Deploy the `public` directory. Root files and `public/` copies are kept synchronized for Pages deployment.

Cloudflare Pages Functions live under `functions/api/` and call AI providers only from the backend. Menu extraction prefers OpenAI when `DISHKAI_AI_API_KEY` is configured, then falls back to the Cloudflare Workers AI `AI` binding when available.

Required Cloudflare secrets:

- `DISHKAI_PRIVATE_ACCESS_CODE`: private access code for Leo/Cindy. Do not hardcode this in frontend code.
- `DISHKAI_SESSION_SECRET`: strong random session signing secret for the `dishkai_session` httpOnly cookie.
- `DISHKAI_AI_API_KEY`: OpenAI API key used server-side for higher-quality menu extraction and optional unmatched-dish estimates.

Optional Cloudflare variables:

- `DISHKAI_AI_MODEL`: OpenAI model for menu AI. Defaults to `gpt-5.4-mini`. `OPENAI_MODEL` is also accepted as a compatibility alias.
- `DISHKAI_AI_VISION_MODEL`: optional OpenAI model override for menu photo reading. Defaults to `DISHKAI_AI_MODEL`.
- `DISHKAI_AI_IMAGE_DETAIL`: optional image-detail setting for OpenAI menu photo reading. Defaults to `original` for better OCR on photographed menus; use `high`, `auto`, or `low` only when cost/latency matters more than recognition quality.
- `DISHKAI_ENABLE_AI_FALLBACK`: set to `true` only when unmatched menu items should receive temporary, unverified AI estimate cards.

Optional Cloudflare bindings:

- `DISHKAI_UNMATCHED_DISHES`: KV namespace binding used to collect unmatched and AI-estimated dish names from all public users. This stores structured dish names/examples only, not uploaded images or full menu text. If the binding is missing, menu analysis still works but the central backlog is not persisted.

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

- Public menu recognition is available without private login; first-time users first see a standalone disclaimer/privacy-risk confirmation step, then enter the menu tool.
- Private access codes are verified server-side only for internal tools such as PDC and administrative actions.
- Sessions use a signed `HttpOnly; Secure; SameSite=Lax` cookie.
- Private POST APIs reject cross-origin browser requests when an unexpected `Origin` header is present.
- Expensive/private APIs include best-effort per-IP rate limiting.
- JSON API request bodies are size-limited before parsing to reduce accidental memory/cost abuse.
- DishKAI should not permanently store uploaded menu images by default.
- Uploaded menu images should be processed temporarily.
- Store only structured dish data after Leo/Cindy manually confirms.
- Users are warned not to upload images containing faces, payment details, addresses, phone numbers, or other personal/sensitive information.
- AI dish images must be labeled: “AI-generated preview. For inspiration only. Actual dish may look different.”
- If temporary scan records are introduced later, keep `/api/clear-recent-scans` able to clear them.
- The local Node dev server serves static files from `public/` only, so source files and local configuration are not exposed by static routes.
- DishKAI currently does not enforce a shared daily public quota; the footer only gives a simple approximate API-cost note for AI scans.
- The private access-code panel is hidden from the normal public app page. Internal testing can reveal it with `?internal=1`, while backend private APIs remain protected.

For local Wrangler testing, Workers AI may require:

```bash
wrangler pages dev public --ai AI
```

## Personal PDC Council Room V1.5

DishKAI now hosts an internal Personal PDC Council Room as a technical test environment. This is a general personal decision system, not a DishKAI-specific food council.

The PDC room:

- outputs Chinese by default
- lets Leo choose Product Council or Personal PDC Council
- uses role cards with short traits, tags, and expandable detail profiles
- supports independent speaking and automatic round-robin grouping as the main path
- keeps older modes such as `quick_mode`, `preset_team_debate`, `custom_team_debate`, and `hybrid_debate` compatible in the backend
- uses Cloudflare Workers AI through the backend `AI` binding
- does not use OpenAI API, login, database storage, voting, elimination, or PK
- supports user intervention through follow-up rounds using `previous_summary`

Future V2 ideas include likes, elimination, PK, and persistent meeting state.

The main PDC flow is council-first: choose Product Council or Personal PDC Council, select role cards, inspect role details, then choose independent speaking or automatic grouping. Automatic grouping uses a simple round-robin assignment and can turn 9 selected roles into any valid group count, such as 5 groups. Settings are saved in localStorage under `personalPdcCustomGroups`; no database is used.
