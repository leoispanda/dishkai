# World Layer Batch 021 Audit

Scope: Mexican, American, and Moroccan set.

- Batch size: 30 dishes.
- Source layer: `data/internal/dishes/world-dishes.js`, previously quarantined generated metadata.
- Metadata action: replaced template/low-confidence objects with audited dish-specific composition, flavor, texture, risk, and ordering guidance.
- Alias action: used existing exact/translated world aliases only after the dish IDs were allowlisted; Mexican ceviche was narrowed to `mexican ceviche` to avoid future cross-cuisine ceviche collisions.
- Image action: accepted existing images after human contact-sheet review, then code-stamped main and thumb assets with exact metadataCode.
- Human image review: final overview checked manually; all 30 accepted for visual dish semantics and code visibility.

Final image overview:

![world-layer-batch-021 final images](/Users/leoyang/Documents/dishkai/data/internal/audit/rebuild-batches/world-layer-batch-021-final-images.png)

| # | code | dishId | cuisine | display name | image decision | verified decision | review notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 121007 | chiles-rellenos | mexican | Chiles Rellenos | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 2 | 121008 | pozole | mexican | Pozole | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 3 | 121009 | tamales | mexican | Tamales | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 4 | 121010 | mole-poblano | mexican | Mole Poblano | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 5 | 121011 | ceviche-mexican | mexican | Ceviche | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 6 | 121012 | flan | mexican | Flan | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 7 | 122001 | burger | american | Burger | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 8 | 122002 | bbq-ribs | american | BBQ Ribs | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 9 | 122003 | mac-and-cheese | american | Mac and Cheese | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 10 | 122004 | fried-chicken-american | american | Fried Chicken | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 11 | 122005 | caesar-salad | american | Caesar Salad | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 12 | 122006 | clam-chowder | american | Clam Chowder | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 13 | 122007 | buffalo-wings | american | Buffalo Wings | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 14 | 122008 | pancakes | american | Pancakes | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 15 | 122009 | hot-dog | american | Hot Dog | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 16 | 122010 | apple-pie | american | Apple Pie | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 17 | 122011 | cobb-salad | american | Cobb Salad | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 18 | 122012 | lobster-roll | american | Lobster Roll | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 19 | 124001 | tagine-lamb | moroccan | Lamb Tagine | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 20 | 124002 | chicken-tagine | moroccan | Chicken Tagine | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 21 | 124003 | couscous-royal | moroccan | Couscous Royal | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 22 | 124004 | harira | moroccan | Harira | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 23 | 124005 | pastilla | moroccan | Pastilla | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 24 | 124006 | zaalouk | moroccan | Zaalouk | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 25 | 124007 | kefta-tagine | moroccan | Kefta Tagine | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 26 | 124008 | moroccan-briouat | moroccan | Briouat | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 27 | 124009 | mechoui | moroccan | Mechoui | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 28 | 124010 | moroccan-salad | moroccan | Moroccan Salad | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 29 | 124011 | seffa | moroccan | Seffa | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 30 | 124012 | mint-tea-dessert | moroccan | Mint Tea Sweets | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
