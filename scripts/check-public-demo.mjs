import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { createHash } from "node:crypto";
import { runInNewContext } from "node:vm";
import { metadata } from "../data/internal/index.js";
import { isPublicLoginRequest } from "../functions/_shared/site-access.js";

const root = new URL("../", import.meta.url);
const script = await readFile(new URL("demo-data.js", root), "utf8");
assert.equal(script, await readFile(new URL("public/demo-data.js", root), "utf8"));
// The isolated runtime has no fetch, document, imports or private app bindings.
const demo = runInNewContext(`${script}\nJSON.stringify(DISHKAI_DEMO_DISHES)`, {}, { timeout: 1000 });
const dishes = JSON.parse(demo);
const sourcePaths = {
  carbonara: "assets/dishes/main/101001-carbonara.webp",
  "margherita-pizza": "assets/dishes/main/101002-margherita-pizza.webp",
  tiramisu: "assets/dishes/main/101006-tiramisu.webp",
};
const keys = ["id", "originalName", "names", "shortDescription", "orderVerdict", "taste", "composition", "watchOut", "imagePath", "visualDisclaimer"].sort();
assert.deepEqual(dishes.map((dish) => dish.id), Object.keys(sourcePaths));
const filenames = dishes.map((dish) => `${dish.id}.webp`).sort();
for (const directory of ["assets/demo/", "public/assets/demo/"]) {
  assert.deepEqual((await readdir(new URL(directory, root))).sort(), filenames, "Expose only three deliberately selected image assets.");
}
const digest = (bytes) => createHash("sha256").update(bytes).digest("hex");
for (const dish of dishes) {
  assert.deepEqual(Object.keys(dish).sort(), keys, "Never export private metadata fields into demo data.");
  const stored = metadata.dishes.find((record) => record.id === dish.id);
  assert.ok(stored, "Every demo dish must remain present in the verified export.");
  assert.equal(dish.orderVerdict.en, stored.orderVerdict.en);
  for (const lang of ["zh", "en", "nl"]) {
    assert.equal(dish.names[lang], stored.names[lang]);
    assert.equal(dish.shortDescription[lang], stored.shortDescription[lang]);
    assert.ok(dish.orderVerdict[lang].length > 10);
    assert.ok(dish.taste[lang].length >= 3);
    assert.ok(dish.watchOut[lang].length > 20);
    assert.equal(dish.composition[lang].reduce((sum, part) => sum + part.percent, 0), 100);
    assert.ok(dish.composition[lang].every((part) => part.label && part.percent > 0 && part.percent % 5 === 0));
    assert.equal(dish.visualDisclaimer[lang].includes(lang === "en" ? "AI-generated" : "AI"), true);
    assert.equal(dish.visualDisclaimer[lang].includes(lang === "zh" ? "估算" : lang === "en" ? "Estimated" : "geschat"), true);
  }
  assert.equal(dish.imagePath, `/assets/demo/${dish.id}.webp`);
  const rootImage = await readFile(new URL(dish.imagePath.slice(1), root));
  const publicImage = await readFile(new URL(`public${dish.imagePath}`, root));
  const sourceImage = await readFile(new URL(`public/${sourcePaths[dish.id]}`, root));
  assert.equal(digest(rootImage), digest(sourceImage), "Retain existing image bytes and embedded provenance unchanged.");
  assert.equal(digest(publicImage), digest(sourceImage));
  assert.equal(isPublicLoginRequest(new Request(`https://dishkai.test${dish.imagePath}`)), true);
  assert.equal(isPublicLoginRequest(new Request(`https://dishkai.test/${sourcePaths[dish.id]}`)), false, "Publishing a demo copy must not unprotect the original image namespace.");
}
console.log("Public demo checks passed: three verified static examples, complete translations, no private fields, exact image bytes and bounded image access.");
