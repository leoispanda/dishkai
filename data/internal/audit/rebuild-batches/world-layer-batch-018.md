# World Layer Batch 018 Audit

Scope: Greek, Indian, and Vietnamese opening set.

- Batch size: 30 dishes.
- Source layer: `data/internal/dishes/world-dishes.js`, previously quarantined generated metadata.
- Metadata action: replaced template/low-confidence objects with audited dish-specific composition, flavor, texture, risk, and ordering guidance.
- Alias action: used existing exact/translated world aliases only after the dish IDs were allowlisted; no generic isolated aliases were added in this batch.
- Image action: accepted existing images after human contact-sheet review, then code-stamped main and thumb assets with exact metadataCode.
- Human image review: final overview checked manually; all 30 accepted for visual dish semantics and code visibility.

Final image overview:

![world-layer-batch-018 final images](/Users/leoyang/Documents/dishkai/data/internal/audit/rebuild-batches/world-layer-batch-018-final-images.png)

| # | code | dishId | cuisine | display name | image decision | verified decision | review notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 104001 | moussaka | greek | Moussaka | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 2 | 104002 | souvlaki | greek | Souvlaki | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 3 | 104003 | gyros | greek | Gyros | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 4 | 104004 | greek-salad | greek | Greek Salad | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 5 | 104005 | spanakopita | greek | Spanakopita | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 6 | 104006 | tzatziki | greek | Tzatziki | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 7 | 104007 | dolmades | greek | Dolmades | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 8 | 104008 | pastitsio | greek | Pastitsio | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 9 | 104009 | kleftiko | greek | Kleftiko | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 10 | 104010 | saganaki | greek | Saganaki | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 11 | 104011 | baklava | greek | Baklava | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 12 | 104012 | loukoumades | greek | Loukoumades | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 13 | 115001 | butter-chicken | indian | Butter Chicken | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 14 | 115002 | chicken-tikka-masala | indian | Chicken Tikka Masala | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 15 | 115003 | biryani | indian | Biryani | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 16 | 115004 | palak-paneer | indian | Palak Paneer | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 17 | 115005 | dal-makhani | indian | Dal Makhani | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 18 | 115006 | chana-masala | indian | Chana Masala | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 19 | 115007 | samosa | indian | Samosa | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 20 | 115008 | naan | indian | Naan | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 21 | 115009 | tandoori-chicken | indian | Tandoori Chicken | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 22 | 115010 | vindaloo | indian | Vindaloo | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 23 | 115011 | rogan-josh | indian | Rogan Josh | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 24 | 115012 | gulab-jamun | indian | Gulab Jamun | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 25 | 116001 | pho-bo | vietnamese | Phở Bò | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 26 | 116002 | pho-ga | vietnamese | Phở Gà | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 27 | 116003 | banh-mi | vietnamese | Bánh Mì | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 28 | 116004 | goi-cuon | vietnamese | Gỏi Cuốn | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 29 | 116005 | cha-gio | vietnamese | Chả Giò | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
| 30 | 116006 | bun-cha | vietnamese | Bún Chả | accepted-existing/code-stamped | verified | Image matches dish semantics in final overview; main/thumb share the same source image and visible metadataCode. |
