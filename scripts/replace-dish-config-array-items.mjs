import fs from "node:fs/promises";
import path from "node:path";

const [, , targetFile, configFile] = process.argv;

if (!targetFile || !configFile) {
  console.error("Usage: node scripts/replace-dish-config-array-items.mjs <target-file> <configs-json>");
  process.exit(1);
}

const source = await fs.readFile(targetFile, "utf8");
const configs = JSON.parse(await fs.readFile(configFile, "utf8"));
const replacements = new Map(configs.map((config) => [config.id, config]));
const seen = new Set();
let output = "";
let cursor = 0;

while (cursor < source.length) {
  const objectStart = source.indexOf("{", cursor);
  if (objectStart === -1) {
    output += source.slice(cursor);
    break;
  }

  const objectEnd = findMatchingBrace(source, objectStart);
  const rawObject = source.slice(objectStart, objectEnd + 1);
  const parsed = parseJsonObject(rawObject);
  const replacement = parsed?.id ? replacements.get(parsed.id) : null;

  output += source.slice(cursor, objectStart);
  if (replacement) {
    const indent = lineIndent(source, objectStart);
    output += formatObject(replacement, indent);
    seen.add(parsed.id);
    cursor = objectEnd + 1;
  } else {
    output += source[objectStart];
    cursor = objectStart + 1;
  }
}

const missing = [...replacements.keys()].filter((id) => !seen.has(id));
if (missing.length) {
  console.error(`Missing config objects: ${missing.join(", ")}`);
  process.exit(1);
}

await fs.writeFile(targetFile, output);
console.log(`Updated ${seen.size} config objects in ${path.relative(process.cwd(), targetFile)}`);

function parseJsonObject(rawObject) {
  try {
    return JSON.parse(rawObject);
  } catch {
    return null;
  }
}

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

function lineIndent(text, index) {
  const lineStart = text.lastIndexOf("\n", index) + 1;
  return text.slice(lineStart, index).match(/^\s*/)?.[0] || "";
}

function formatObject(config, indent) {
  return JSON.stringify(config, null, 2)
    .split("\n")
    .map((line, index) => (index === 0 ? line : `${indent}${line}`))
    .join("\n");
}
