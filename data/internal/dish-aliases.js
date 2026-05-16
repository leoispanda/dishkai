export const dishAliases = [
  { alias: "pad thai", dishId: "pad-thai", language: "en", matchType: "canonical", confidence: 1 },
  { alias: "phad thai", dishId: "pad-thai", language: "en", matchType: "spelling-variant", confidence: 0.95 },
  { alias: "thai stir-fried noodles", dishId: "pad-thai", language: "en", matchType: "descriptive", confidence: 0.9 },
  { alias: "thai fried noodles", dishId: "pad-thai", language: "en", matchType: "descriptive", confidence: 0.88 },
  { alias: "泰式炒河粉", dishId: "pad-thai", language: "zh", matchType: "translated-name", confidence: 1 },
  { alias: "泰式虾仁炒河粉", dishId: "pad-thai", language: "zh", matchType: "protein-variant", confidence: 0.94, variant: "shrimp" },
  { alias: "ผัดไทย", dishId: "pad-thai", language: "th", matchType: "local-name", confidence: 1 },
  { alias: "ผัดไทยกุ้ง", dishId: "pad-thai", language: "th", matchType: "protein-variant", confidence: 0.94, variant: "shrimp" },
];
