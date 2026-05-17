# DishKAI

DishKAI is a lightweight visual menu understanding tool. It turns unfamiliar menu names into visual, clickable Dish Knowledge Cards for fast ordering decisions.

## Local development

```bash
npm run dev
```

Open http://127.0.0.1:3000.

The local Node server supports the same starter text-analysis pipeline as the Pages Function fallback:

- `POST /api/analyze-menu-text`
- `POST /api/analyze-menu-image`

Text input works with starter metadata. Image analysis returns a graceful fallback until Cloudflare Workers AI vision/OCR support is wired.

## Cloudflare Pages

Deploy the `public` directory. Root files and `public/` copies are kept synchronized for Pages deployment.

Cloudflare Pages Functions live under `functions/api/` and call Workers AI from the backend through the `AI` binding when available.

Current API endpoints:

- `POST /api/analyze-menu-text`
- `POST /api/analyze-menu-image`
- `POST /api/pdc-round`

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
