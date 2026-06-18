import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { metadata } from "../data/internal/index.js";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const failures = [];

async function exists(webPath) {
  try {
    const stat = await fs.stat(path.join(rootDir, "public", webPath.replace(/^\//, "")));
    return stat.isFile();
  } catch {
    return false;
  }
}

function codeMatches(dish, webPath) {
  return path.basename(webPath || "").startsWith(`${dish.metadataCode}-`);
}

for (const dish of metadata.dishes) {
  if (!(await exists(dish.imagePath))) failures.push(`${dish.id}: missing main image ${dish.imagePath}`);
  if (!(await exists(dish.thumbPath))) failures.push(`${dish.id}: missing thumb image ${dish.thumbPath}`);
  if (!codeMatches(dish, dish.imagePath)) failures.push(`${dish.id}: main image filename does not start with ${dish.metadataCode}-`);
  if (!codeMatches(dish, dish.thumbPath)) failures.push(`${dish.id}: thumb image filename does not start with ${dish.metadataCode}-`);
  if (dish.imageCode !== dish.metadataCode) failures.push(`${dish.id}: imageCode ${dish.imageCode} differs from metadataCode ${dish.metadataCode}`);
}

console.log(
  JSON.stringify(
    {
      verifiedDishesChecked: metadata.dishes.length,
      failures: failures.length,
    },
    null,
    2,
  ),
);

if (failures.length) {
  console.error("\nDish asset failures:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}
