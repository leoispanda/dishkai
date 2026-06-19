# World Layer Batch 020 Audit

Scope: Turkish, Middle Eastern, and Mexican opening set.

- Batch size: 30 dishes.
- Source layer: `data/internal/dishes/world-dishes.js`, previously quarantined generated metadata.
- Metadata action: replaced template/low-confidence objects with audited dish-specific composition, flavor, texture, risk, and ordering guidance.
- Alias action: used existing exact/translated world aliases only after the dish IDs were allowlisted; Turkish and Middle Eastern baklava aliases were narrowed to qualified names to avoid colliding with Greek `baklava`.
- Image action: accepted existing images after human contact-sheet review, then code-stamped main and thumb assets with exact metadataCode.
- Human image review: final overview checked manually; all 30 accepted for visual dish semantics and code visibility.

Final image overview:

![world-layer-batch-020 final images](/Users/leoyang/Documents/dishkai/data/internal/audit/rebuild-batches/world-layer-batch-020-final-images.png)

| # | code | dishId | cuisine | display name | image decision | verified decision | review notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 119001 | doner-kebab | turkish | Döner Kebab | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 2 | 119002 | adana-kebab | turkish | Adana Kebab | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 3 | 119003 | lahmacun | turkish | Lahmacun | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 4 | 119004 | pide | turkish | Pide | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 5 | 119005 | menemen | turkish | Menemen | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 6 | 119006 | manti | turkish | Manti | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 7 | 119007 | imam-bayildi | turkish | Imam Bayildi | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 8 | 119008 | mercimek-corbasi | turkish | Mercimek Çorbası | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 9 | 119009 | borek | turkish | Börek | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 10 | 119010 | kofte | turkish | Köfte | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 11 | 119011 | baklava-turkish | turkish | Baklava | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 12 | 119012 | kunefe | turkish | Künefe | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 13 | 120001 | hummus | middle-eastern | Hummus | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 14 | 120002 | falafel | middle-eastern | Falafel | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 15 | 120003 | shawarma | middle-eastern | Shawarma | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 16 | 120004 | tabbouleh | middle-eastern | Tabbouleh | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 17 | 120005 | fattoush | middle-eastern | Fattoush | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 18 | 120006 | baba-ganoush | middle-eastern | Baba Ganoush | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 19 | 120007 | kibbeh | middle-eastern | Kibbeh | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 20 | 120008 | kofta | middle-eastern | Kofta | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 21 | 120009 | mansaf | middle-eastern | Mansaf | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 22 | 120010 | mujadara | middle-eastern | Mujadara | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 23 | 120011 | baklava-middle-eastern | middle-eastern | Baklava | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 24 | 120012 | labneh | middle-eastern | Labneh | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 25 | 121001 | tacos | mexican | Tacos | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 26 | 121002 | quesadilla | mexican | Quesadilla | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 27 | 121003 | enchiladas | mexican | Enchiladas | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 28 | 121004 | burrito | mexican | Burrito | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 29 | 121005 | guacamole | mexican | Guacamole | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 30 | 121006 | nachos | mexican | Nachos | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
