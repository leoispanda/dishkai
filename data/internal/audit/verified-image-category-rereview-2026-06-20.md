# Verified Image and Category Re-review - 2026-06-20

Scope: current verified export after reverting schematic image batches.

Reviewed:

- 588 verified dishes after correction
- 27 cuisines
- 20 temporary verified-image contact sheets covering the pre-correction 589-dish export
- Generated audit image overviews under `data/internal/audit/image-overviews/`
- Cuisine and category distribution from `metadata.dishes`

Image findings:

| dishId | metadataCode | cuisineId | decision | reason |
| --- | --- | --- | --- | --- |
| ensaladilla-rusa | 105016 | spanish | moved to rebuild / replace-image | Existing image reads closer to a tuna and green-bean composed salad than Spanish creamy potato-mayonnaise salad. It should not stay verified until a replacement-quality image is available. |

Category and cuisine findings:

- No broad cuisine/category reassignment was made in this pass.
- `chicken-tikka-masala-british` remains British-Irish because it represents the British curry-house dish, not the base South Asian dish.
- Dutch-Indonesian dishes already in verified remain Dutch where the metadata explicitly describes Dutch-Indonesian restaurant usage.
- Spanish verified coverage is temporarily 29/30 after removing `ensaladilla-rusa`; the target should be restored only with a clearly matching replacement image.

Current result:

- Verified export: 588 dishes / 1830 aliases
- High-risk quarantine: 496 rebuild / 26 remove
- Verified image asset check: 588 checked / 0 failures
