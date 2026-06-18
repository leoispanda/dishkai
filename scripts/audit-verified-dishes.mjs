import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { metadata } from "../data/internal/index.js";
import { dishAliases as baseDishAliases } from "../data/internal/dish-aliases.js";
import { expandedDishAliases } from "../data/internal/expanded-dish-aliases.js";
import { cafeBrunchDepthDishAliases } from "../data/internal/cafe-brunch-depth-dish-aliases.js";
import { europeDepthDishAliases } from "../data/internal/europe-depth-dish-aliases.js";
import { greekDepthDishAliases } from "../data/internal/greek-depth-dish-aliases.js";
import { globalDepthDishAliases } from "../data/internal/global-depth-dish-aliases.js";
import { worldDishAliases } from "../data/internal/world-dish-aliases.js";
import { belgianDishes } from "../data/internal/dishes/belgian.js";
import { chineseDishes } from "../data/internal/dishes/chinese.js";
import { dutchDishes } from "../data/internal/dishes/dutch.js";
import { frenchDishes } from "../data/internal/dishes/french.js";
import { germanDishes } from "../data/internal/dishes/german.js";
import { cafeBrunchDepthDishes } from "../data/internal/dishes/cafe-brunch-depth-dishes.js";
import { europeDepthDishes } from "../data/internal/dishes/europe-depth-dishes.js";
import { greekDepthDishes } from "../data/internal/dishes/greek-depth-dishes.js";
import { globalDepthDishes } from "../data/internal/dishes/global-depth-dishes.js";
import { italianDishes } from "../data/internal/dishes/italian.js";
import { expandedDishes } from "../data/internal/dishes/expanded-dishes.js";
import { worldDishes } from "../data/internal/dishes/world-dishes.js";
import { japaneseDishes } from "../data/internal/dishes/japanese.js";
import { koreanDishes } from "../data/internal/dishes/korean.js";
import { thaiDishes } from "../data/internal/dishes/thai.js";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const auditDir = path.join(rootDir, "data/internal/audit");
const overviewDir = path.join(auditDir, "image-overviews");
const verifiedDishIds = new Set(metadata.dishes.map((dish) => dish.id));

const dishSources = [
  source("data/internal/dishes/thai.js", "base-core", thaiDishes),
  source("data/internal/dishes/japanese.js", "base-core", japaneseDishes),
  source("data/internal/dishes/korean.js", "base-core", koreanDishes),
  source("data/internal/dishes/chinese.js", "base-core", chineseDishes),
  source("data/internal/dishes/italian.js", "base-core", italianDishes),
  source("data/internal/dishes/french.js", "base-core", frenchDishes),
  source("data/internal/dishes/german.js", "base-core", germanDishes),
  source("data/internal/dishes/dutch.js", "base-core", dutchDishes),
  source("data/internal/dishes/belgian.js", "base-core", belgianDishes),
  source("data/internal/dishes/cafe-brunch-depth-dishes.js", "trusted-depth", cafeBrunchDepthDishes),
  source("data/internal/dishes/greek-depth-dishes.js", "trusted-depth", greekDepthDishes),
  source("data/internal/dishes/expanded-dishes.js", "quarantined-generated", expandedDishes, true),
  source("data/internal/dishes/europe-depth-dishes.js", "quarantined-generated", europeDepthDishes, true),
  source("data/internal/dishes/world-dishes.js", "quarantined-generated", worldDishes, true),
  source("data/internal/dishes/global-depth-dishes.js", "quarantined-generated", globalDepthDishes, true),
];

const aliasSources = [
  aliasSource("data/internal/dish-aliases.js", "base-core", baseDishAliases),
  aliasSource("data/internal/cafe-brunch-depth-dish-aliases.js", "trusted-depth", cafeBrunchDepthDishAliases),
  aliasSource("data/internal/greek-depth-dish-aliases.js", "trusted-depth", greekDepthDishAliases),
  aliasSource("data/internal/expanded-dish-aliases.js", "quarantined-generated", expandedDishAliases, true),
  aliasSource("data/internal/europe-depth-dish-aliases.js", "quarantined-generated", europeDepthDishAliases, true),
  aliasSource("data/internal/world-dish-aliases.js", "quarantined-generated", worldDishAliases, true),
  aliasSource("data/internal/global-depth-dish-aliases.js", "quarantined-generated", globalDepthDishAliases, true),
];

const templatePatterns = [
  ["template-dishkai-explainer", /DishKAI explains it by taste/i],
  ["template-common-menu-item", /\bcommon [A-Za-z-]+ menu item\b/i],
  ["template-coverage-fill", /bring this cuisine|verified DishKAI references|verified references per cuisine|restaurant coverage|broader restaurant coverage/i],
  ["template-order-verdict", /Order if this .* profile sounds appealing|if you accept this kind of flavor and risk|\u5982\u679c\u4f60\u63a5\u53d7\u8fd9\u7c7b\u53e3\u5473\u548c\u98ce\u9669/i],
  ["template-europe-depth", /European depth pass|\u6b27\u6d32\u83dc\u7cfb\u6df1\u5ea6\u8865\u5168/i],
];

const zhEnglishPattern = /\b(?:savory|rich|mild|saucy|pasta|small bites|tender meat|springy noodles|soft rice|noodle|rice|glossy sauce|profile)\b/i;

const genericAliasLabels = new Set([
  "mixed grill",
  "grill mix",
  "ceviche",
  "baklava",
  "curry",
  "soup",
  "salad",
  "fried rice",
  "noodles",
  "dumplings",
  "hot pot",
  "satay",
  "kebab",
  "grilled fish",
  "seafood pasta",
]);

const knownBadComponents = new Map([
  ["affogato", ["wheat-flour", "egg", "potato", "pasta", "mixed-vegetables"]],
  ["vitello-tonnato", ["chicken", "potato", "mixed-vegetables"]],
  ["prosciutto-e-melone", ["potato", "mixed-vegetables", "parsley"]],
  ["moussaka", ["steamed-rice"]],
  ["souvlaki", ["steamed-rice"]],
]);

const manuallyQuarantinedDishReasons = new Map([
  ["greek-mixed-grill", "generic platter label; must be rebuilt with safer aliases before verified"],
  ["beef-tenderloin-greek-grill", "generic grilled protein, not a cuisine-specific verified dish"],
  ["grilled-chicken-fillet-greek", "generic grilled protein, not a cuisine-specific verified dish"],
  ["grilled-scampi", "generic grilled seafood item; image and metadata need manual dish-specific review"],
  ["grilled-salmon-greek", "generic grilled protein, not a cuisine-specific verified dish"],
  ["seafood-pasta-greek", "generic restaurant pasta item; likely overbroad alias risk"],
  ["vegetable-pasta-greek", "generic restaurant pasta item; likely overbroad alias risk"],
  ["vegan-moussaka", "variant should be reviewed against canonical moussaka before verified"],
  ["vegetarian-souvlaki", "variant should be reviewed against canonical souvlaki before verified"],
  ["greek-restaurant-sides", "not a specific dish knowledge card"],
  ["kids-fried-menu-items", "generic kids menu bucket, not a dish"],
  ["kids-chicken-nuggets", "generic kids menu item, not verified cuisine metadata"],
  ["fried-meatballs-kids", "generic kids menu item, not verified cuisine metadata"],
  ["fish-sticks-kids", "generic kids menu item, not verified cuisine metadata"],
  ["butter-side", "side condiment, not a dish knowledge card"],
  ["scrambled-eggs", "generic breakfast item; not specific enough for verified cuisine metadata"],
  ["shakshuka", "real dish but out of the European batch scope; keep as candidate for later regional review"],
  ["french-toast", "real item but assigned outside the European batch scope; keep as candidate for later review"],
  ["eggs-benedict", "real item but assigned outside the European batch scope; keep as candidate for later review"],
  ["avocado-toast", "generic cafe item; not specific enough for verified cuisine metadata"],
  ["granola-bowl", "generic cafe breakfast bowl; not specific enough for verified cuisine metadata"],
  ["acai-bowl", "real item but out of the European batch scope; keep as candidate for later review"],
  ["club-sandwich", "generic international cafe item; not specific enough for verified cuisine metadata"],
  ["bagel-cream-cheese", "generic bagel item; not specific enough for verified cuisine metadata"],
  ["smoked-salmon-bagel", "generic bagel variant; not specific enough for verified cuisine metadata"],
  ["banana-bread", "generic cafe snack; not specific enough for verified cuisine metadata"],
]);

function source(sourceFile, layer, dishes, highRisk = false) {
  return { sourceFile, layer, dishes, highRisk };
}

function aliasSource(sourceFile, layer, aliases, highRisk = false) {
  return { sourceFile, layer, aliases, highRisk };
}

function flattenDishSources() {
  return dishSources.flatMap((item) =>
    item.dishes.map((dish) => ({
      ...dish,
      sourceFile: item.sourceFile,
      layer: item.layer,
      sourceHighRisk: item.highRisk,
      verifiedExported: verifiedDishIds.has(dish.id),
    })),
  );
}

function flattenAliasSources() {
  return aliasSources.flatMap((item) =>
    item.aliases.map((alias) => ({
      ...alias,
      sourceFile: item.sourceFile,
      layer: item.layer,
      sourceHighRisk: item.highRisk,
      verifiedExported: metadata.dishAliases.some((verifiedAlias) => verifiedAlias.alias === alias.alias && verifiedAlias.dishId === alias.dishId),
    })),
  );
}

function textBlob(dish) {
  return [
    dish.names?.en,
    dish.names?.zh,
    dish.names?.nl,
    dish.names?.local,
    dish.shortDescription?.en,
    dish.shortDescription?.zh,
    dish.shortDescription?.nl,
    dish.cookingProfile?.en,
    dish.cookingProfile?.zh,
    dish.cookingProfile?.nl,
    dish.cuisineRole?.description?.en,
    dish.cuisineRole?.description?.zh,
    dish.cuisineRole?.description?.nl,
    dish.orderVerdict?.en,
    dish.orderVerdict?.zh,
    dish.orderVerdict?.nl,
  ]
    .filter(Boolean)
    .join(" ");
}

function compositionSignature(dish) {
  return (dish.composition || [])
    .map((component) => `${component.itemType || "ingredient"}:${component.itemId}:${component.estimatedPercent}:${component.role}`)
    .join("|");
}

function assetPath(webPath) {
  if (!webPath || webPath.startsWith("data:")) return null;
  return path.join(rootDir, "public", webPath.replace(/^\//, ""));
}

async function fileExists(webPath) {
  const resolved = assetPath(webPath);
  if (!resolved) return false;
  try {
    const stat = await fs.stat(resolved);
    return stat.isFile();
  } catch {
    return false;
  }
}

function codePrefixMatches(dish, webPath) {
  if (!webPath || !dish.metadataCode) return false;
  return path.basename(webPath).startsWith(`${dish.metadataCode}-`);
}

function collectDishReasons(dish, duplicateIds, duplicateCodes, repeatedCompositions) {
  const reasons = [];
  const blob = textBlob(dish);
  if (manuallyQuarantinedDishReasons.has(dish.id)) reasons.push(`manual quarantine: ${manuallyQuarantinedDishReasons.get(dish.id)}`);
  if (dish.sourceHighRisk) reasons.push("source layer is quarantined/untrusted");
  if (duplicateIds.has(dish.id)) reasons.push("duplicate dish id");
  if (duplicateCodes.has(dish.metadataCode)) reasons.push("duplicate metadataCode");
  if ((dish.metadataConfidence ?? 0) < 0.78) reasons.push(`metadataConfidence ${dish.metadataConfidence ?? "missing"} below 0.78`);
  for (const [label, pattern] of templatePatterns) {
    if (pattern.test(blob)) reasons.push(label);
  }
  if (
    zhEnglishPattern.test(dish.shortDescription?.zh || "") ||
    zhEnglishPattern.test(dish.cookingProfile?.zh || "") ||
    zhEnglishPattern.test(dish.orderVerdict?.zh || "")
  ) {
    reasons.push("Chinese localized field contains English placeholder words");
  }
  const signature = compositionSignature(dish);
  if (signature && repeatedCompositions.get(signature) > 4) {
    reasons.push(`composition pattern reused ${repeatedCompositions.get(signature)} times`);
  }
  const badComponents = knownBadComponents.get(dish.id) || [];
  const dishComponentIds = new Set((dish.composition || []).map((item) => item.itemId));
  for (const componentId of badComponents) {
    if (dishComponentIds.has(componentId)) reasons.push(`implausible component for dish: ${componentId}`);
  }
  if (dish.imageCode && dish.metadataCode && dish.imageCode !== dish.metadataCode) reasons.push("imageCode differs from metadataCode");
  if (dish.imagePath && !codePrefixMatches(dish, dish.imagePath)) reasons.push("main image filename code does not match metadataCode");
  if (dish.thumbPath && !codePrefixMatches(dish, dish.thumbPath)) reasons.push("thumb image filename code does not match metadataCode");
  return reasons;
}

function statusFor(dish, reasons, mainExists, thumbExists) {
  const assetReasons = [];
  if (!mainExists) assetReasons.push("missing main image asset");
  if (!thumbExists) assetReasons.push("missing thumb image asset");
  const metadataReasons = reasons.filter((reason) => !reason.includes("image") && !reason.includes("asset"));
  if (manuallyQuarantinedDishReasons.has(dish.id)) return ["remove", [...metadataReasons, ...assetReasons]];
  if (dish.sourceHighRisk) return ["rebuild", [...metadataReasons, ...assetReasons]];
  if (metadataReasons.length && assetReasons.length) return ["rebuild", [...metadataReasons, ...assetReasons]];
  if (metadataReasons.length) return ["fix-metadata", metadataReasons];
  if (assetReasons.length || reasons.some((reason) => reason.includes("image"))) return ["replace-image", [...assetReasons, ...reasons.filter((reason) => reason.includes("image"))]];
  return ["keep-verified", []];
}

function riskLevel(status, dish) {
  if (dish.sourceHighRisk || status === "rebuild" || status === "remove") return "high";
  if (status === "fix-metadata" || status === "replace-image") return "medium";
  return "low";
}

function recommendedAction(status, dish) {
  if (dish.sourceHighRisk) return "quarantine from verified export; rebuild in <=30 dish batch";
  if (status === "keep-verified") return "retain in verified export; schedule visual spot-check";
  if (status === "replace-image") return "replace or manually approve image before verified";
  if (status === "fix-metadata") return "repair metadata before verified expansion";
  if (status === "remove") return "remove or merge into canonical dish";
  return "manual review";
}

function summarize(rows, key) {
  return rows.reduce((acc, row) => {
    const value = typeof key === "function" ? key(row) : row[key];
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

function markdownTable(headers, rows) {
  return [
    `| ${headers.join(" | ")} |`,
    `| ${headers.map(() => "---").join(" | ")} |`,
    ...rows.map((row) => `| ${row.map((value) => escapeCell(value)).join(" | ")} |`),
  ].join("\n");
}

function escapeCell(value) {
  return String(value ?? "")
    .replaceAll("|", "\\|")
    .replaceAll("\n", " ")
    .trim();
}

function formatJsonSummary(object) {
  return Object.entries(object)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `- ${key}: ${value}`)
    .join("\n");
}

function displayName(dish) {
  return dish.names?.en || dish.names?.canonical || dish.id;
}

async function buildAuditRows() {
  const allDishes = flattenDishSources();
  const idCounts = countValues(allDishes.map((dish) => dish.id));
  const codeCounts = countValues(allDishes.map((dish) => dish.metadataCode));
  const duplicateIds = valuesAbove(idCounts, 1);
  const duplicateCodes = valuesAbove(codeCounts, 1);
  const compositionCounts = countValues(allDishes.map(compositionSignature).filter(Boolean));

  return Promise.all(
    allDishes.map(async (dish) => {
      const mainExists = await fileExists(dish.imagePath);
      const thumbExists = await fileExists(dish.thumbPath);
      const reasons = collectDishReasons(dish, duplicateIds, duplicateCodes, compositionCounts);
      const [auditStatus, finalReasons] = statusFor(dish, reasons, mainExists, thumbExists);
      return {
        dish,
        dishId: dish.id,
        metadataCode: dish.metadataCode,
        cuisineId: dish.cuisineId,
        sourceFile: dish.sourceFile,
        imagePath: dish.imagePath,
        thumbPath: dish.thumbPath,
        mainExists,
        thumbExists,
        riskLevel: riskLevel(auditStatus, dish),
        auditStatus,
        notes: finalReasons.length ? finalReasons.join("; ") : "No automated metadata/asset flags. Visual semantics still need human spot-check.",
        recommendedAction: recommendedAction(auditStatus, dish),
      };
    }),
  );
}

function countValues(values) {
  const counts = new Map();
  for (const value of values) counts.set(value, (counts.get(value) || 0) + 1);
  return counts;
}

function valuesAbove(counts, threshold) {
  return new Set([...counts].filter(([, count]) => count > threshold).map(([value]) => value));
}

function buildAliasRows(allRows) {
  const knownDishIds = new Set(allRows.map((row) => row.dishId));
  return flattenAliasSources().map((alias) => {
    const normalized = String(alias.alias || "").trim().toLowerCase();
    const issues = [];
    if (alias.sourceHighRisk) issues.push("alias source is quarantined/untrusted");
    if (!knownDishIds.has(alias.dishId)) issues.push("alias points to missing dish");
    if (genericAliasLabels.has(normalized)) issues.push("generic alias may overmatch menus");
    if ((alias.confidence ?? 0) >= 0.94 && genericAliasLabels.has(normalized)) issues.push("generic alias has high confidence");
    return {
      alias: alias.alias,
      dishId: alias.dishId,
      sourceFile: alias.sourceFile,
      confidence: alias.confidence,
      status: issues.length ? "review" : "keep",
      notes: issues.join("; ") || "No automated alias flags.",
    };
  });
}

async function buildAssetSummary(verifiedRows) {
  const mainFiles = await listFiles(path.join(rootDir, "public/assets/dishes/main"));
  const thumbFiles = await listFiles(path.join(rootDir, "public/assets/dishes/thumb"));
  const verifiedMainBasenames = new Set(verifiedRows.map((row) => path.basename(row.imagePath || "")).filter(Boolean));
  const verifiedThumbBasenames = new Set(verifiedRows.map((row) => path.basename(row.thumbPath || "")).filter(Boolean));
  return {
    totalMainAssets: mainFiles.length,
    totalThumbAssets: thumbFiles.length,
    verifiedMainAssetsReferenced: [...verifiedMainBasenames].filter((file) => mainFiles.includes(file)).length,
    verifiedThumbAssetsReferenced: [...verifiedThumbBasenames].filter((file) => thumbFiles.includes(file)).length,
    quarantinedOrUnreferencedMainAssets: mainFiles.filter((file) => !verifiedMainBasenames.has(file)).length,
    quarantinedOrUnreferencedThumbAssets: thumbFiles.filter((file) => !verifiedThumbBasenames.has(file)).length,
  };
}

async function listFiles(dir) {
  try {
    return (await fs.readdir(dir)).filter((file) => !file.startsWith("."));
  } catch {
    return [];
  }
}

function buildDishListDoc() {
  const byCuisine = new Map();
  for (const dish of metadata.dishes) {
    if (!byCuisine.has(dish.cuisineId)) byCuisine.set(dish.cuisineId, []);
    byCuisine.get(dish.cuisineId).push(dish);
  }
  const lines = [
    "# DishKAI Verified Dish List",
    "",
    "Generated from data/internal/index.js after the verified database quarantine audit.",
    "",
    `- Total verified dishes: ${metadata.dishes.length}`,
    `- Total aliases: ${metadata.dishAliases.length}`,
    `- Total cuisines: ${byCuisine.size}`,
    "- Quarantined generated layers are excluded from this verified list until batch rebuild.",
    "",
  ];

  for (const [cuisineId, dishes] of [...byCuisine.entries()].sort(([a], [b]) => a.localeCompare(b))) {
    lines.push(`## ${titleCase(cuisineId)} (${cuisineId}) - ${dishes.length}`, "");
    dishes.forEach((dish, index) => {
      const names = [dish.names?.en, dish.names?.zh, dish.names?.local].filter(Boolean).join(" / ");
      lines.push(
        `${index + 1}. ${dish.metadataCode} - \`${dish.id}\` - ${names}`,
      );
    });
    lines.push("");
  }
  return lines.join("\n").trimEnd() + "\n";
}

function buildImageCodeListDoc() {
  const lines = [
    "# DishKAI Dish Image Code List",
    "",
    "Generated from data/internal/index.js after the verified database quarantine audit.",
    "",
    "| code | dishId | cuisine | en | zh | imagePath | thumbPath | status | prompt |",
    "|---|---|---|---|---|---|---|---|---|",
  ];
  for (const dish of [...metadata.dishes].sort((a, b) => String(a.metadataCode).localeCompare(String(b.metadataCode)))) {
    lines.push(
      `| ${dish.metadataCode} | ${dish.id} | ${dish.cuisineId} | ${escapeCell(dish.names?.en)} | ${escapeCell(dish.names?.zh)} | ${dish.imagePath} | ${dish.thumbPath} | verified export / needs visual spot-check | ${escapeCell(
        `${dish.names?.en || dish.id} visual reference, ${dish.cuisineId} restaurant dish, code ${dish.metadataCode}.`,
      )} |`,
    );
  }
  return lines.join("\n") + "\n";
}

function titleCase(value) {
  return String(value)
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function batchRows(rows, size = 30) {
  const batches = [];
  for (let index = 0; index < rows.length; index += size) batches.push(rows.slice(index, index + size));
  return batches;
}

async function writeOverviewFiles(rows) {
  await fs.mkdir(overviewDir, { recursive: true });
  const batches = batchRows(rows, 30);
  const links = [];
  for (let index = 0; index < batches.length; index += 1) {
    const batchNumber = String(index + 1).padStart(3, "0");
    const filename = `batch-${batchNumber}.html`;
    const filepath = path.join(overviewDir, filename);
    const batch = batches[index];
    const cards = batch
      .map((row) => {
        const imagePath = row.imagePath || "/assets/dishes/placeholders/dish-placeholder.svg";
        return `<figure class="card ${row.auditStatus}">
  <img src="../../../..${imagePath}" loading="lazy" alt="${escapeHtml(row.dishId)}">
  <figcaption>
    <strong>${escapeHtml(row.metadataCode)} ${escapeHtml(row.dishId)}</strong>
    <span>${escapeHtml(displayName(row.dish))}</span>
    <span>${escapeHtml(row.auditStatus)} | ${escapeHtml(row.sourceFile.replace("data/internal/dishes/", ""))}</span>
  </figcaption>
</figure>`;
      })
      .join("\n");
    const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>DishKAI audit image overview ${batchNumber}</title>
  <style>
    body { margin: 24px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; color: #25211d; background: #faf8f3; }
    h1 { font-size: 20px; margin: 0 0 16px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 12px; }
    .card { margin: 0; padding: 8px; border: 1px solid #ddd4c7; border-radius: 6px; background: #fffdf8; }
    .card img { display: block; width: 100%; aspect-ratio: 1 / 1; object-fit: cover; border-radius: 4px; background: #efe7dc; }
    figcaption { display: grid; gap: 3px; margin-top: 7px; font-size: 11px; line-height: 1.25; }
    figcaption span { color: #6b6258; overflow-wrap: anywhere; }
    .rebuild { border-color: #d28d72; background: #fff8f4; }
    .fix-metadata, .replace-image { border-color: #c8a84d; background: #fffaf0; }
    .keep-verified { border-color: #98b58a; }
  </style>
</head>
<body>
  <h1>DishKAI audit image overview batch ${batchNumber} (${batch.length} dishes)</h1>
  <div class="grid">
${cards}
  </div>
</body>
</html>
`;
    await fs.writeFile(filepath, html);
    links.push(`- Batch ${batchNumber}: [image overview](data/internal/audit/image-overviews/${filename})`);
  }
  return links;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function buildFullReport(rows, aliasRows, assetSummary, overviewLinks) {
  const statusSummary = summarize(rows, "auditStatus");
  const sourceSummary = summarize(rows, "sourceFile");
  const riskSummary = summarize(rows, "riskLevel");
  const exportedRows = rows.filter((row) => row.dish.verifiedExported);
  const quarantinedRows = rows.filter((row) => row.dish.sourceHighRisk);
  const lines = [
    "# DishKAI Full Audit Report",
    "",
    `Generated: ${new Date().toISOString().slice(0, 10)}`,
    "",
    "## Executive summary",
    "",
    `- Raw dish records reviewed from source files: ${rows.length}`,
    `- Current verified export after quarantine: ${metadata.dishes.length} dishes, ${metadata.dishAliases.length} aliases`,
    `- Generated high-risk dishes quarantined from verified export: ${quarantinedRows.length}`,
    `- Verified export rows with automated keep-verified status: ${exportedRows.filter((row) => row.auditStatus === "keep-verified").length}`,
    `- Verified export rows requiring metadata/image follow-up: ${exportedRows.filter((row) => row.auditStatus !== "keep-verified").length}`,
    "",
    "The audit found systemic template language, low confidence values, repeated compositions, and placeholder localized text in the generated expansion layers. Those layers are no longer part of `metadata.dishes` or `metadata.dishAliases` and must be rebuilt in review batches of at most 30 dishes before returning to verified status.",
    "",
    "## Status counts",
    "",
    formatJsonSummary(statusSummary),
    "",
    "## Risk counts",
    "",
    formatJsonSummary(riskSummary),
    "",
    "## Source counts",
    "",
    formatJsonSummary(sourceSummary),
    "",
    "## Image asset check",
    "",
    formatJsonSummary(assetSummary),
    "",
    "Quarantined/unreferenced assets were intentionally left in place. They are not deleted because they may be reused only after semantic image review and metadata rebuild.",
    "",
    "## Alias audit summary",
    "",
    `- Raw aliases reviewed: ${aliasRows.length}`,
    `- Aliases in verified export: ${metadata.dishAliases.length}`,
    `- Alias rows flagged for review: ${aliasRows.filter((row) => row.status === "review").length}`,
    "",
    markdownTable(
      ["alias", "dishId", "sourceFile", "confidence", "status", "notes"],
      aliasRows.filter((row) => row.status === "review").slice(0, 200).map((row) => [row.alias, row.dishId, row.sourceFile, row.confidence, row.status, row.notes]),
    ),
    "",
    "## Image overviews",
    "",
    "Each overview page contains at most 30 dishes and uses small thumbnails from the current asset folders.",
    "",
    overviewLinks.join("\n"),
    "",
    "## Batch audit tables",
    "",
  ];

  const batches = batchRows(rows, 30);
  batches.forEach((batch, index) => {
    const batchNumber = String(index + 1).padStart(3, "0");
    lines.push(`### Batch ${batchNumber}`, "");
    lines.push(
      markdownTable(
        ["dishId", "metadataCode", "cuisineId", "sourceFile", "imagePath", "riskLevel", "auditStatus", "notes", "recommendedAction"],
        batch.map((row) => [
          row.dishId,
          row.metadataCode,
          row.cuisineId,
          row.sourceFile,
          row.imagePath,
          row.riskLevel,
          row.auditStatus,
          row.notes,
          row.recommendedAction,
        ]),
      ),
    );
    lines.push("");
  });
  return lines.join("\n").trimEnd() + "\n";
}

function buildHighRiskReport(rows) {
  const highRiskRows = rows.filter((row) => row.riskLevel === "high" || row.auditStatus !== "keep-verified");
  const bySource = summarize(highRiskRows, "sourceFile");
  const lines = [
    "# DishKAI High-Risk Dish List",
    "",
    "This list contains dishes that should not be treated as trusted verified metadata until their listed action is complete.",
    "",
    `- Total high-risk or non-keep rows: ${highRiskRows.length}`,
    "",
    "## By source",
    "",
    formatJsonSummary(bySource),
    "",
    "## Rows",
    "",
    markdownTable(
      ["dishId", "metadataCode", "cuisineId", "sourceFile", "riskLevel", "auditStatus", "notes", "recommendedAction"],
      highRiskRows.map((row) => [row.dishId, row.metadataCode, row.cuisineId, row.sourceFile, row.riskLevel, row.auditStatus, row.notes, row.recommendedAction]),
    ),
  ];
  return lines.join("\n").trimEnd() + "\n";
}

async function main() {
  await fs.mkdir(auditDir, { recursive: true });
  const rows = await buildAuditRows();
  const aliasRows = buildAliasRows(rows);
  const verifiedRows = rows.filter((row) => row.dish.verifiedExported);
  const assetSummary = await buildAssetSummary(verifiedRows);
  const overviewLinks = await writeOverviewFiles(rows);
  await fs.writeFile(path.join(rootDir, "DISHKAI_FULL_AUDIT_REPORT.md"), buildFullReport(rows, aliasRows, assetSummary, overviewLinks));
  await fs.writeFile(path.join(rootDir, "DISHKAI_HIGH_RISK_DISHES.md"), buildHighRiskReport(rows));
  await fs.writeFile(path.join(rootDir, "DISHKAI_DISH_LIST.md"), buildDishListDoc());
  await fs.writeFile(path.join(rootDir, "data/internal/DISH_IMAGE_CODE_LIST.md"), buildImageCodeListDoc());
  console.log(
    JSON.stringify(
      {
        rawDishesReviewed: rows.length,
        verifiedDishesExported: metadata.dishes.length,
        verifiedAliasesExported: metadata.dishAliases.length,
        auditStatus: summarize(rows, "auditStatus"),
        riskLevel: summarize(rows, "riskLevel"),
        assetSummary,
        overviewBatches: overviewLinks.length,
      },
      null,
      2,
    ),
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
