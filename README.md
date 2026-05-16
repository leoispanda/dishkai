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

For local Wrangler testing, Workers AI may require:

```bash
wrangler pages dev public --ai AI
```
