# DishKAI EU AI Act review

Review date: **11 October 2026**. Scope: the current public menu tool, its stored dish illustrations, optional generated estimate cards, unmatched-dish backlog, and private PDC room. This is a documented engineering and operational assessment, not a legal certification. Account settings, contracts, staff training, the production KV contents, and the operator's legal identity were not inspected or verified.

## Current legal basis

Use the [27 July 2026 consolidated AI Act](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R1689-20260727), including enacted [Regulation (EU) 2026/1744](https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng). The Digital Omnibus is adopted law, not merely a proposal.

Article 50 generally applies from 2 August 2026. Article 111(4) allows generative systems placed on the market before that date until 2 December 2026 to meet Article 50(2). Evidence of DishKAI's launch and whether the October Gemini integration constitutes the same system is still needed before relying on that transition. It does not postpone visible-disclosure duties. High-risk implementation dates were also amended, but those dates do not exempt this product from applicable transparency duties.

## Intended use and roles

DishKAI helps diners understand menu names and decide what to ask or order. AI reads or normalises menu input; aliases select internal metadata; compact results retain menu order. Ingredient percentages and ordering advice are estimates, not restaurant-specific recipes or allergen guarantees.

The operator likely acts as a downstream **AI-system provider** for an application offered under the DishKAI name and as a **deployer** when using another AI system to create published illustrations. Using an upstream API does not remove the application's own duties. DishKAI does not currently train or place a general-purpose AI model on the market. See [Article 3 definitions](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-3).

| Function | Current boundary | Assessment |
| --- | --- | --- |
| Public menu text/photo analysis | Gemini/OpenAI backend extraction; Workers AI or local parsing where available; stored metadata matching | AI-assisted menu understanding. Faithful extraction must be distinguished from newly invented information. |
| Optional estimate cards | Enabled only by the backend fallback setting; temporary, unverified | Generated text, not verified knowledge or a restaurant guarantee. |
| Stored dish images | AI illustrations imported into website assets | Illustrative references; must not imply photographs of the user's restaurant meal. |
| Private PDC | Workers AI generates responses to topics and follow-up interventions; summaries also use rules | Genuine interactive AI. Private access alone does not establish an exemption for professional/internal use. |
| Receipt analysis, live image generation, profile/rating writes | Endpoints currently return disabled responses | No active capability to certify. Reassess before enabling. |

For the present intended use, no Annex I regulated-product/safety-component or Annex III decision use case was identified. This is therefore an assessment **outside the high-risk categories**, not an Article 6(3) exemption for an Annex III system. High-risk registration, CE conformity, mandatory high-risk logs and a fundamental-rights impact assessment are not indicated for this menu utility. Review again before medical/clinical use, recruitment, eligibility decisions or other regulated uses are introduced. See [Article 6](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-6).

## Applicable transparency and literacy

Article 50(1) concerns direct interaction; the Commission distinguishes genuine two-way exchanges from background processing or one-way automated responses. The PDC room clearly supports user-directed exchanges. The menu form has a narrower scope requiring a case-specific assessment; its explicit AI notice is retained regardless. Information must be clear, accessible and available at first interaction/exposure. See [Commission Article 50 FAQ](https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act).

The same FAQ states that content generated before 2 August 2026 does not need retrospective labelling. Creation-date evidence has not been verified for every legacy asset; clearer labels are retained as a practical transparency measure.

Article 50(2) requires marking and detectability for synthetic content, with exceptions for standard editing and non-substantial semantic changes. Faithful OCR, format conversion and translation may fall within those exceptions; invented dish descriptions, recommendations and substantive summaries do not automatically do so. Realistic food images require contextual assessment for misleading authenticity under Article 50(4); not every illustration is a deepfake. Public-interest text publication also requires an assessment of purpose and meaningful editorial responsibility, rather than assuming every private scan is such a publication. See the [final Commission guidelines](https://ec.europa.eu/newsroom/dae/redirection/document/131215), particularly sections 3, 4 and 6.

Current [Article 4](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-4) requires measures supporting the development of staff/contractor AI literacy in context. It does not require guaranteeing an individual's proficiency level. The accompanying [operator guide](ai-operations.md) is a support measure; actual reading, exercises and completion have not been recorded.

## Findings and changes in this revision

The implementation items below describe the coordinated update. Local checks and release evidence must confirm them before an operator treats them as deployed controls.

| Finding | Update or control | Status / practical limit |
| --- | --- | --- |
| Transparency copy described recipes, nutrition and cooking instructions that the menu product does not provide | Replace with menu extraction, dish knowledge, ordering uncertainty and actual provider/data flow | Included in this revision; test all three languages and root/public copies. |
| Stored content, generated estimates and AI menu extraction were not explained consistently | Distinguish database content, local rules, extracted menu input and unverified generated text; retain actual provider/model information | Included in this revision. `verified` is an internal database status, not regulatory approval or restaurant confirmation. |
| A thumbnail could expose an AI illustration before its card disclosure | Show image-origin disclosure at first exposure; retain the visual-reference limitation | Included in this revision; labels must remain perceivable and accessible. |
| A short "Safe" taste-familiarity tag could imply food/allergy safety | Display it as "Familiar flavors" in every supported language, preserving the internal tag ID | Included in this revision; restaurant confirmation and cross-contact notices still apply. |
| API/DOM provenance was incomplete | Add structured provenance and visible labels for the relevant output parts | Included in this revision as baseline transparency. Plain JSON/DOM fields do **not** demonstrate robust Article 50(2) compliance. |
| The image importer re-encoded sources and could discard provenance | Archive the original bytes and block transformation when recognised content-credential markers are found | Included in this revision as a conservative guard, not signature validation or invisible-watermark detection. Existing assets are not thereby re-signed or retroactively certified. |
| Unknown names were collected automatically, and privacy wording implied a broader absence of storage | Make new contribution optional and unchecked by default; minimise contributed fields, filter obvious personal data, and add 90-day TTL to new writes | Included in this revision. Filtering is not proof of anonymity or a complete lawful-basis assessment. |
| Existing KV records may predate consent/minimisation/TTL changes | No bulk deletion or retrospective modification performed | Open: inspect under owner authorisation and decide deletion, redaction, retention and any access-request handling. |
| No project-specific literacy completion evidence | Add a practical guide and an uncompleted record template | Guide included; actual participation and completion remain open. |

## Marking evidence still required

The [final voluntary Transparency Code](https://ec.europa.eu/newsroom/dae/redirection/document/129555), measures 1.1–1.2, describes signed metadata, imperceptible watermarking where applicable, detection and preservation of recognisable upstream marks. It is not compulsory to sign the Code, but alternative measures need adequate evidence. Existing provenance fields, hashes and UI labels alone are not a substitute for robust marking/detection. Never copy an original cryptographic signature onto changed pixels and present it as valid.

The remaining work is to obtain provider-specific marking/detection evidence, identify supported content formats, assess short versus longer text, test transformations and exports, and document an appropriate interoperable solution. No new signing key, paid toolchain, dependency or provider contract was established in this review. The launch-date transition assessment also remains open.

## Operational and privacy matters still open

These are related operational/GDPR matters, not duties invented under the AI Act. Article 2 preserves other applicable privacy and consumer law.

- Confirm the legal operator/controller identity and a working contact channel before publishing that information. No identity has been inferred from the repository's personal names.
- Verify Google, OpenAI and Cloudflare account terms, billing/service tier, prompt use, provider retention, processing regions, transfers, relevant DPA terms and the actual production fallback configuration. An inline request and absence of application image storage do not mean upstream providers retain nothing.
- Confirm the legal basis and user-information requirements for analysis and optional contributions. A disclaimer checkbox is not a general privacy waiver, and the contribution opt-in is not proof that all processing is lawful.
- New KV event records expire 90 days after writing. Stores without event storage and individual expiry decline new contributions; legacy compatibility aggregates remain readable by private tools without rewriting or deleting them. Production store behavior and legacy records still need an operator review. This review did not access production data.
- Browser state includes language/disclaimer preferences, counters and private PDC state/settings. Clearing local state does not delete Cloudflare backlog entries or upstream service records. Check platform logs and retention independently; application error logs intentionally omit uploaded content and keys.
- Confirm meaningful human-review evidence before applying a human-reviewed label. Stored/prepared content and database inclusion alone do not prove the Article 50(4) editorial exception.

The scope should be revisited after a provider/model change, a new publication/export mode, new stored fields, or a change to the product's intended use. Maintain release checks, asset-origin records and completed operational records without adding unnecessary prompt or image retention.
