# DishKAI AI operations and literacy guide

Date: **11 October 2026**. Audience: anyone operating, developing, reviewing metadata or producing assets on behalf of DishKAI. This guide supports the contextual measures in [current Article 4](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-4); it is not a completed training record or certification. Read the [scope and open issues](ai-act-review.md) before making compliance claims.

## Understand the workflow

Menu input goes to a backend endpoint. AI can extract and normalise names; aliases select internal dish metadata. The verified database supplies stored knowledge, not the restaurant's exact current ingredients. Local generic guidance and unknown-item notes are rules/data; optional AI estimate cards are newly generated and unverified. A successful scan can still contain an OCR or matching error.

Gemini is preferred when configured; OpenAI may be a backup. Workers AI or local parsing may handle text fallback. Private PDC uses its separate Workers AI path. Read actual result provenance when diagnosing a scan rather than assuming every request used the preferred model. Safety refusals must not be bypassed by switching providers.

## Review a menu result

1. Compare the original names and sequence with the menu. Check small text, columns, handwriting, prices and variant/protein words. A long menu may need smaller crops or pasted text; never treat a truncated response as complete.
2. Check ambiguous aliases and cuisine context. Similar spelling is not sufficient to assert that two dishes are equivalent. Preserve the original menu name and leave an uncertain item unmatched rather than forcing a confident match.
3. Separate likely ingredients from confirmed restaurant facts. Sauces, substitutions, shared fryers and preparation can change allergens and dietary suitability. Refer the diner to restaurant staff for confirmation; do not label a dish safe for allergy, pregnancy or medical use based on this tool.
4. Keep generated cards marked as estimates with `verified: false`. Do not promote them into the verified export without the existing metadata/image review process and its evidence.
5. Ensure a food image is labelled as an AI illustration/reference when applicable. It is not a photograph or guarantee of that restaurant's meal.

For failures, record the safe error code, provider/model, timing and request identifier where available. Use those fields to distinguish quota, access, timeout, refusal and incomplete-output issues. Do not put menu contents, images, personal information or credentials into diagnostic logs. A successful test today does not prove the cause of an earlier failure.

## Handle input and optional contributions

Ask users to crop to the menu and avoid faces, receipts, payment details and other personal information. Do not intentionally send special-category personal data or unrelated personal context for menu recognition. Private PDC topics and follow-ups also go to an AI provider and may persist in browser storage; private access does not make those inputs local-only.

The contribution checkbox is optional, starts unchecked and must not block a scan when declined. New collected records contain limited unknown dish fields rather than photos or whole menus. The obvious-personal-data filter is a precaution, not an anonymity guarantee. New KV event records have a 90-day expiry. New writes are declined when a store lacks event storage with individual expiry; legacy compatibility aggregates remain readable without being rewritten or deleted. Legacy data was not cleared by this update.

Do not bulk-delete or export production KV data as a routine test. Obtain the owner's concrete retention/deletion decision before handling legacy records. Browser clearing, backlog deletion and upstream provider retention are separate operations. Account-tier, retention, DPA and transfer terms remain unverified until an operator checks them; do not promise zero provider retention.

## Produce and import assets

Keep the exact original generated file and its provenance. The importer blocks transformation when recognised content-credential markers are found and a supported transformation toolchain is unavailable. This conservative guard does not validate signatures or detect invisible watermarks. Do not remove credentials to bypass it, or attach an old signature to cropped/resized pixels. A derivative needs valid lineage/re-signing through an appropriate toolchain, or a documented decision before publication.

Labels and JSON/DOM origin fields improve transparency but are not evidence that imperceptible marking, signatures or detection work. Obtain and test upstream capabilities before claiming Article 50(2) completion. See the [final Commission Transparency Code](https://ec.europa.eu/newsroom/dae/redirection/document/129555). Do not invent missing human-review dates, names, certificates or asset origins.

## Test and change safely

- Use mocks and wholly synthetic, non-personal menu examples for tests. Do not export the internal database, private PDC inputs or user submissions to a public/live endpoint merely to exercise the API.
- Keep API keys and session secrets in the appropriate server-side secret store. Do not read, print or copy their values into source, browser code, screenshots, chat or logs. Secrets are scoped to their configured project/environment.
- Confirm authorisation before installing dependencies, changing Cloudflare settings, deploying, touching credentials or taking destructive actions. Routine checks should not mutate accounts or production data.
- Check root/public parity, all supported UI languages, original menu order, unmatched behavior, first-exposure labels, contribution decline/opt-in, safe errors and actual fallback origin after relevant changes.
- Reassess scope before enabling currently disabled receipt/image-generation/profile/rating features, adding publication/export modes, changing data collection, or presenting the system for medical or other regulated decisions.

## Contextual exercises and record

Before recording completion, the participant should be able to identify: an OCR omission in a two-column menu; an ambiguous alias that should remain unmatched; an allergen estimate needing restaurant confirmation; a generated card that cannot be called verified; a fallback whose actual provider differs from the preferred setting; and a signed image that cannot be transformed with the current importer.

The following is a **blank template**. No participant, reviewer, completion date or assessed proficiency has been recorded by creating this document. Actual measures can be proportionate to the person's role; no formal certificate or specific individual literacy level is asserted.

| Record field | Entry |
| --- | --- |
| Participant / role | Not recorded |
| Guide version / date read | Not recorded |
| Relevant workflow or tasks | Not recorded |
| Exercises completed and observations | Not recorded |
| Remaining questions / support needed | Not recorded |
| Review or follow-up, if appropriate | Not recorded |
| Completion date / status | Not recorded — completion pending |

Keep completed records without unnecessary personal detail. Update the guide and repeat relevant checks when the provider, intended use, data flow or output markings change.
