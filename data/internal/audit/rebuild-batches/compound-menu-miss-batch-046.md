# Compound Menu Miss Batch 046

Date: 2026-06-22

## Scope

- Source: continuation of the centralized real-menu miss backlog, focused on compound or assembled dishes that can become stable DishKAI knowledge cards.
- Candidate rule: accept only real, reusable compound dishes where the menu name reliably describes a recognizable preparation. Do not preserve one restaurant's garnish stack as canonical metadata.
- Batch size: 9 verified dishes, under the 30-dish maximum.

## Accepted Verified Dishes

| # | metadataCode | dishId | cuisine | decision | image action | notes |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 101061 | schiacciata-mortadella-stracciatella | italian | keep-verified | generated/code-stamped | Modern Italian filled schiacciata; distinct from generic sandwich or focaccia. |
| 2 | 103068 | oeuf-en-cocotte | french | keep-verified | generated/code-stamped | Classic French baked egg; egg/dairy/gluten risks and soft texture modeled. |
| 3 | 103069 | poulet-aux-ecrevisses | french | keep-verified | generated/code-stamped | French chicken with crayfish sauce; shellfish risk is explicit. |
| 4 | 103070 | poulet-aux-morilles | french | keep-verified | generated/code-stamped | French chicken with morel cream sauce; earthy cream-sauce expectation modeled. |
| 5 | 105063 | aceitunas-rellenas-de-anchoas | spanish | keep-verified | generated/code-stamped | Anchovy-stuffed olives; accepted because fish risk is hidden in a small tapas item. |
| 6 | 105064 | sardinas-en-aceite | spanish | keep-verified | generated/code-stamped | Preserved sardines in oil; distinct from grilled sardines or anchovies. |
| 7 | 115031 | tandoori-chicken-naan | indian | keep-verified | generated/code-stamped | Modern Indian wrap format; distinct from separate naan or tandoori chicken plate. |
| 8 | 120032 | blackened-eggplant-tahini | middle-eastern | keep-verified | generated/code-stamped | Charred eggplant with tahini; modeled as whole/halved vegetable starter, not baba ganoush dip. |
| 9 | 122031 | poke-bowl | american | keep-verified | generated/code-stamped | Hawaiian-American raw fish rice bowl; raw-fish, soy/gluten, and sesame risks modeled. |

## Alias Actions

Added exact or safe descriptive aliases for the 9 accepted dishes. Intentionally avoided broad aliases such as bare `sandwich`, `naan`, `eggplant`, `olives`, `sardines`, or `poke` without `bowl`.

## Rejected / Deferred Compound Items

Still kept out of verified:

- Overly generic proteins or sauce plates: pork tenderloin variants, lamb fillet variants, surf and turf, ribeye, filet mignon, grilled chicken, crispy chicken.
- Generic side or bucket items: fries, loaded fries, salads, green salad, grilled vegetables, cheese selection, cheese plate, dessert, starter, drink.
- Restaurant-specific composites where the stable dish boundary is unclear: KFC chicken or cauliflower bun, Lebanese salad bowl, celeriac steak with house garnish stack, mussels with nduja/fennel/Pernod.
- Long-tail regional items that need their own future cuisine review: bokit, accra, coconut pie, murçon.

## Image Review

- Image source archive: `data/internal/audit/rebuild-batches/compound-menu-miss-batch-046-image-sources/`
- Candidate manifest: `data/internal/audit/rebuild-batches/compound-menu-miss-batch-046-candidates.json`
- Final contact sheet: `data/internal/audit/rebuild-batches/compound-menu-miss-batch-046-final-images.png`
- Manual review result: accepted. Each image clearly matches the dish semantics and has the correct visible metadataCode stamp.

## Verification

Passed:

- `node --check data/internal/dishes/compound-menu-miss-dishes.js`
- `node --check data/internal/compound-menu-miss-dish-aliases.js`
- `node --check data/internal/index.js`
- `node --check data/internal/ingredients.js`
- `node --check functions/_shared/menu-analysis.js`
- `node --check scripts/audit-verified-dishes.mjs`
- `node scripts/validate-metadata.mjs`
- `node scripts/check-dish-assets.mjs`
- `node scripts/audit-verified-dishes.mjs`
- Local `analyzeMenuText` regression: all 9 new aliases matched; `Chef Special Pasta` stayed unmatched.

Result after audit:

- Verified dishes: 1110
- Verified aliases: 3160
- Verified referenced main assets: 1110
- Verified referenced thumb assets: 1110
- Quarantined/generated rows remain excluded unless separately reviewed.
