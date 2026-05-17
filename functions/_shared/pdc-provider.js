export const DEFAULT_CF_MODEL = "@cf/meta/llama-3.1-8b-instruct";
export const DEFAULT_PROVIDER = "cloudflare_workers_ai";

export class MissingAiBindingError extends Error {
  constructor() {
    super("未检测到 Cloudflare Workers AI binding。请在 Cloudflare Pages 中配置 AI binding，名称为 AI。");
    this.code = "AI_BINDING_MISSING";
  }
}

export async function callLLM({ systemPrompt, userPrompt, env, model = DEFAULT_CF_MODEL }) {
  if (!env?.AI) throw new MissingAiBindingError();

  const prompt = `${systemPrompt.trim()}\n\n${userPrompt.trim()}`;
  const result = await env.AI.run(model, {
    prompt,
    temperature: 0.35,
    max_tokens: 900,
  });

  return extractText(result);
}

export function parseJsonFromLLM(rawText) {
  const text = extractText(rawText).trim();
  try {
    return JSON.parse(text);
  } catch {
    const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
    if (fenced) return JSON.parse(fenced[1]);

    const firstObject = text.indexOf("{");
    const lastObject = text.lastIndexOf("}");
    if (firstObject >= 0 && lastObject > firstObject) {
      return JSON.parse(text.slice(firstObject, lastObject + 1));
    }

    throw new Error("JSON parse failed");
  }
}

function extractText(value) {
  if (typeof value === "string") return value;
  if (typeof value?.response === "string") return value.response;
  if (typeof value?.result === "string") return value.result;
  if (typeof value?.text === "string") return value.text;
  return JSON.stringify(value || "");
}
