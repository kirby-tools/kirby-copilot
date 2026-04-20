import type { OutputFormat } from "../types";

/**
 * Builds a user prompt with output format and optional selection context.
 */
export function buildUserPrompt(
  prompt: string,
  {
    responseFormat,
    selection,
  }: {
    responseFormat?: OutputFormat;
    selection?: string;
  } = {},
) {
  return [
    responseFormat && `<response_format>${responseFormat}</response_format>`,
    selection && `<selection>\n${selection}\n</selection>`,
    prompt,
  ]
    .filter(Boolean)
    .join("\n\n");
}

/**
 * Splits a possibly gateway-prefixed model id into its parts.
 *
 * @remarks
 * Some gateways (Vercel AI Gateway, Cloudflare AI Gateway `/compat`) require
 * `{provider}/{model}` ids. The returned `prefix` never carries a trailing
 * slash so it can be compared directly with a provider name; concatenation
 * sites add the slash explicitly.
 */
export function parseGatewayPrefix(modelId: string) {
  const index = modelId.indexOf("/");

  if (index <= 0) {
    return { prefix: "", nativeModelId: modelId };
  }

  return {
    prefix: modelId.slice(0, index),
    nativeModelId: modelId.slice(index + 1),
  };
}

/**
 * Checks if a model exposes a configurable reasoning/thinking knob.
 *
 * @remarks
 * Gemini 2.5 is excluded: it uses numeric `thinkingBudget` instead of the
 * `thinkingLevel` enum, and emitting an incompatible shape is worse than
 * the SDK default. Mistral excludes `medium`/`large`: only Small 4 and
 * `magistral-*` honor `reasoning_effort`; the rest silently ignore it.
 */
export function supportsReasoning(modelName: string) {
  return (
    // OpenAI: GPT-5 family (gpt-5, gpt-5-mini/nano, gpt-5.1/.2/.4)
    modelName.startsWith("gpt-5") ||
    // Google: Gemini 3+ exposes `thinkingLevel`
    modelName.startsWith("gemini-3") ||
    // Anthropic: Claude 4+ and Mythos
    /^claude-(?:opus|sonnet|haiku)-\d/.test(modelName) ||
    modelName.startsWith("claude-mythos-") ||
    // Mistral: Small 4 (`mistral-small-latest`) and `magistral-*` only
    modelName.startsWith("mistral-small") ||
    modelName.startsWith("magistral-")
  );
}

/**
 * Checks if a Claude model requires the legacy `{type: "enabled", budget_tokens: N}`
 * shape instead of adaptive thinking.
 *
 * @remarks
 * Adaptive thinking landed with Opus 4.6 / Sonnet 4.6; Opus 4.7 rejects
 * `type: "enabled"` outright. This matcher covers 4.0 (bare and dated),
 * 4.1, and 4.5; everything else falls through to adaptive.
 */
export function usesLegacyExtendedThinking(modelName: string) {
  return /^claude-(?:opus|sonnet|haiku)-4(?:-(?:[0-5](?:-\d{8})?|\d{8}))?$/.test(
    modelName,
  );
}
