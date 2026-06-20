# Verified Image and Category Re-review - 2026-06-20

Scope: current verified export after reverting schematic image batches.

Reviewed:

- 588 verified dishes after the initial quarantine correction; 589 after the `ensaladilla-rusa` replacement was accepted
- 27 cuisines
- 20 temporary verified-image contact sheets covering the pre-correction 589-dish export
- Generated audit image overviews under `data/internal/audit/image-overviews/`
- Cuisine and category distribution from `metadata.dishes`

Image findings:

| dishId | metadataCode | cuisineId | decision | reason |
| --- | --- | --- | --- | --- |
| ensaladilla-rusa | 105016 | spanish | replaced and restored | Existing image read closer to a tuna and green-bean composed salad than Spanish creamy potato-mayonnaise salad. It was first moved to rebuild / replace-image, then restored only after a replacement image clearly showed creamy potato-mayonnaise salad with tuna, egg, peas, olives, and red pepper. |

Category and cuisine findings:

- No broad cuisine/category reassignment was made in this pass.
- `chicken-tikka-masala-british` remains British-Irish because it represents the British curry-house dish, not the base South Asian dish.
- Dutch-Indonesian dishes already in verified remain Dutch where the metadata explicitly describes Dutch-Indonesian restaurant usage.
- Spanish verified coverage is restored to 30/30 after replacing `ensaladilla-rusa`.

Current result:

- Verified export after replacement: 589 dishes / 1834 aliases
- High-risk quarantine after replacement: 495 rebuild / 26 remove
- Verified image asset check after replacement: 589 checked / 0 failures
