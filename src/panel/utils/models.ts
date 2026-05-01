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
 * Resolves which thinking shape a Claude model expects.
 *
 * @remarks
 * - `adaptive` – Opus 4.6+, Sonnet 4.6+, Mythos. Use
 *   `thinking: {type: "adaptive"}` plus the `effort` parameter.
 * - `manual` – Opus 4.0-4.5, Sonnet 4.0-4.5, Haiku 4.5. Use
 *   `thinking: {type: "enabled", budget_tokens: N}`. Opus 4.7 rejects this.
 * - `none` – pre-Claude-4 and any model not in the above ranges.
 */
export function getAnthropicThinkingMode(
  modelName: string,
): "adaptive" | "manual" | "none" {
  if (modelName.startsWith("claude-mythos-")) return "adaptive";
  // Opus 4.6+, Sonnet 4.6+, Haiku 4.6+ (Haiku has no adaptive variant yet)
  if (
    /^claude-(?:opus|sonnet|haiku)-(?:[5-9]|[1-9]\d|4-(?:[6-9]|[1-9]\d))(?:-|$)/.test(
      modelName,
    )
  )
    return "adaptive";

  // Opus 4.0-4.5, Sonnet 4.0-4.5, Haiku 4.5 – manual extended thinking
  if (
    /^claude-(?:opus|sonnet|haiku)-4(?:-(?:[0-5](?:-\d{8})?|\d{8}))?$/.test(
      modelName,
    )
  )
    return "manual";

  return "none";
}
