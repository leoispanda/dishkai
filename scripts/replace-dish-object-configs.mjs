import fs from "node:fs/promises";
import path from "node:path";

const [, , targetFile, configFile] = process.argv;

if (!targetFile || !configFile) {
  console.error("Usage: node scripts/replace-dish-object-configs.mjs <target-file> <configs-json>");
  process.exit(1);
}

const source = await fs.readFile(targetFile, "utf8");
const configs = JSON.parse(await fs.readFile(configFile, "utf8"));
let output = source;
const seen = [];

for (const config of configs) {
  const targetId = config.targetId || config.id;
  const idMarker = `"id": "${targetId}"`;
  let idIndex = output.indexOf(idMarker);
  if (idIndex === -1) {
    idIndex = output.search(new RegExp(`\\bid\\s*:\\s*"${escapeRegExp(targetId)}"`));
  }
  if (idIndex === -1) {
    continue;
  }

  const objectStart = findObjectStart(output, idIndex);
  const objectEnd = findMatchingBrace(output, objectStart);
  const indent = lineIndent(output, objectStart);
  const { targetId: _targetId, ...replacementConfig } = config;
  const replacement = formatObject(replacementConfig, indent);

  output = `${output.slice(0, objectStart)}${replacement}${output.slice(objectEnd + 1)}`;
  seen.push(targetId);
}

const missing = configs.map((config) => config.targetId || config.id).filter((id) => !seen.includes(id));
if (missing.length) {
  console.error(`Missing dish blocks: ${missing.join(", ")}`);
  process.exit(1);
}

await fs.writeFile(targetFile, output);
console.log(`Updated ${seen.length} dish object blocks in ${path.relative(process.cwd(), targetFile)}`);

function findObjectStart(text, index) {
  for (let cursor = index; cursor >= 0; cursor -= 1) {
    if (text[cursor] === "{") {
      return cursor;
    }
  }
  throw new Error(`No object start before index ${index}`);
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
    if (char === "\"" || char === "'") {
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

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
