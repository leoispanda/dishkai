import fs from "node:fs/promises";
import path from "node:path";

const [, , targetFile, configFile] = process.argv;

if (!targetFile || !configFile) {
  console.error("Usage: node scripts/replace-starter-dish-configs.mjs <target-file> <configs-json>");
  process.exit(1);
}

const source = await fs.readFile(targetFile, "utf8");
const configs = JSON.parse(await fs.readFile(configFile, "utf8"));
const replacements = new Map(configs.map((config) => [config.id, config]));
const seen = new Set();
let output = "";
let cursor = 0;

while (cursor < source.length) {
  const markerIndex = source.indexOf("starterDish({", cursor);
  if (markerIndex === -1) {
    output += source.slice(cursor);
    break;
  }

  const objectStart = source.indexOf("{", markerIndex);
  const objectEnd = findMatchingBrace(source, objectStart);
  const closeParen = findCloseParen(source, objectEnd);
  const rawObject = source.slice(objectStart, objectEnd + 1);
  const config = JSON.parse(rawObject);
  const replacement = replacements.get(config.id);

  output += source.slice(cursor, markerIndex);
  if (replacement) {
    const indent = lineIndent(source, markerIndex);
    output += formatStarterDish(replacement, indent);
    seen.add(config.id);
  } else {
    output += source.slice(markerIndex, closeParen + 1);
  }

  cursor = closeParen + 1;
}

const missing = [...replacements.keys()].filter((id) => !seen.has(id));
if (missing.length) {
  console.error(`Missing dish blocks: ${missing.join(", ")}`);
  process.exit(1);
}

await fs.writeFile(targetFile, output);
console.log(`Updated ${seen.size} starterDish blocks in ${path.relative(process.cwd(), targetFile)}`);

function findMatchingBrace(text, start) {
  let depth = 0;
  let quote = null;
  let escaped = false;

  for (let index = start; index < text.length; index += 1) {
    const char = text[index];
    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        quote = null;
      }
      continue;
    }
    if (char === '"' || char === "'") {
      quote = char;
      continue;
    }
    if (char === "{") depth += 1;
    if (char === "}") {
      depth -= 1;
      if (depth === 0) return index;
    }
  }

  throw new Error(`No matching brace from index ${start}`);
}

function findCloseParen(text, objectEnd) {
  let index = objectEnd + 1;
  while (/\s/.test(text[index])) index += 1;
  if (text[index] !== ")") throw new Error(`Expected ')' after starterDish object at index ${objectEnd}`);
  return index;
}

function lineIndent(text, index) {
  const lineStart = text.lastIndexOf("\n", index) + 1;
  return text.slice(lineStart, index).match(/^\s*/)?.[0] || "";
}

function formatStarterDish(config, indent) {
  const json = JSON.stringify(config, null, 2)
    .split("\n")
    .map((line, index) => (index === 0 ? line : `${indent}${line}`))
    .join("\n");
  return `starterDish(${json})`;
}
