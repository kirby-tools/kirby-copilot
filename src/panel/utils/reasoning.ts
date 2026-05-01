import type { SharedV3ProviderOptions } from "@ai-sdk/provider";
import type { ModelProvider, ReasoningEffort } from "../constants";
import type { ProviderConfig } from "../types";
import { isObject } from "utilful";
import {
  getAnthropicThinkingMode,
  parseGatewayPrefix,
  supportsReasoning,
} from "./models";

/**
 * Where the universal `ReasoningEffort` vocabulary diverges from a provider's
 * own enum. Entry absent ⇒ pass the user's effort string through as-is.
 *
 * @remarks
 * Use `provider:model` keys for model-specific overrides.
 */
const PROVIDER_REASONING_OVERRIDES: Partial<
  Record<
    ReasoningEffort,
    Partial<Record<ModelProvider | `${ModelProvider}:${string}`, string>>
  >
> = {
  none: {
    // Anthropic intentionally absent: effort `none` short-circuits in
    // `resolveAnthropicReasoning` so we omit `thinking` entirely instead of
    // coercing to a minimum effort.
    "openai:gpt-5": "minimal", // GPT-5 does not support `none`
    "openai:gpt-5-mini": "minimal", // GPT-5-mini does not support `none`
    "openai:gpt-5-nano": "minimal", // GPT-5-nano does not support `none`
    google: "low", // Google rejects `none`; `low` is the minimum
    "google:gemini-3-flash-preview": "minimal", // Gemini 3 Flash also supports `minimal`
  },
  low: {
    mistral: "high", // Mistral only exposes `high`/`none`
  },
  medium: {
    "google:gemini-3-pro-preview": "high", // Gemini 3 Pro only supports `low`/`high`
    mistral: "high",
  },
};

/**
 * `budget_tokens` per effort level for Anthropic models that require manual
 * extended thinking (Opus 4.0-4.5, Sonnet 4.0-4.5, Haiku 4.5).
 *
 * @remarks
 * Sized for short content-editing tasks (rewrites, summarization). Anthropic
 * stops thinking once the model has a confident answer, so these are ceilings,
 * not expected spend. Floor is the API minimum (1024).
 */
const ANTHROPIC_MANUAL_BUDGET_TOKENS: Record<
  Exclude<ReasoningEffort, "none">,
  number
> = {
  low: 1024,
  medium: 4_000,
  high: 12_000,
};

// Non-Anthropic reasoning-option shapes (Anthropic has its own resolver)
const REASONING_SHAPERS = {
  openai: (value: string | number) => ({ reasoningEffort: value }),
  mistral: (value: string | number) => ({ reasoningEffort: value }),
  google: (value: string | number) => ({
    thinkingConfig: { thinkingLevel: value },
  }),
} as const satisfies Partial<
  Record<ModelProvider, (value: string | number) => Record<string, unknown>>
>;

/**
 * Builds the `providerOptions` object passed to the AI SDK, combining
 * provider-specific reasoning shape with any caller-supplied overrides
 * from `providers.<provider>.options`.
 */
export function resolveProviderOptions({
  provider,
  providerConfig,
  modelId,
  reasoningEffort,
}: {
  provider: ModelProvider;
  providerConfig: ProviderConfig;
  modelId: string;
  reasoningEffort: ReasoningEffort;
}) {
  const anthropicReasoning =
    provider === "anthropic"
      ? resolveAnthropicReasoning(modelId, reasoningEffort)
      : undefined;
  const reasoningValue =
    provider === "anthropic"
      ? undefined
      : resolveProviderReasoning({ provider, modelId, reasoningEffort });

  const shape =
    reasoningValue !== undefined && provider !== "anthropic"
      ? REASONING_SHAPERS[provider]?.(reasoningValue)
      : undefined;

  const providerOptions: SharedV3ProviderOptions = {
    ...(anthropicReasoning && { anthropic: anthropicReasoning }),
    ...(shape && { [provider]: shape }),
  };

  if (isObject(providerConfig.options)) {
    providerOptions[provider] = {
      ...providerOptions[provider],
      ...providerConfig.options,
    };
  }

  return Object.keys(providerOptions).length > 0 ? providerOptions : undefined;
}

function resolveAnthropicReasoning(
  modelId: string,
  reasoningEffort: ReasoningEffort,
) {
  // Cross-provider prefix: compat shims typically drop the outer SDK's
  // reasoning shape. Override via `providers.anthropic.options` if needed.
  const { prefix, nativeModelId } = parseGatewayPrefix(modelId);
  if (prefix && prefix !== "anthropic") return;

  const mode = getAnthropicThinkingMode(nativeModelId);
  if (mode === "none") return;
  // Effort `none` ⇒ no thinking at all. Omit the `thinking` block entirely
  // rather than coercing to a minimum: adaptive without `effort` defaults to
  // `high`, and the override map has no semantic for "off".
  if (reasoningEffort === "none") return;

  if (mode === "manual") {
    return {
      thinking: {
        type: "enabled" as const,
        budgetTokens: ANTHROPIC_MANUAL_BUDGET_TOKENS[reasoningEffort],
      },
    };
  }

  return {
    thinking: {
      type: "adaptive" as const,
      // Skip reasoning text the Panel doesn't render (default: `"summarized"`)
      display: "omitted" as const,
    },
    effort: resolveProviderEffort("anthropic", nativeModelId, reasoningEffort),
  };
}

function resolveProviderReasoning({
  provider,
  modelId,
  reasoningEffort,
}: {
  provider: ModelProvider;
  modelId: string;
  reasoningEffort: ReasoningEffort;
}) {
  // Cross-provider prefix: compat shims typically drop the outer SDK's
  // reasoning shape. Override via `providers.<provider>.options` if needed.
  const { prefix, nativeModelId } = parseGatewayPrefix(modelId);
  if (prefix && prefix !== provider) return;

  if (!supportsReasoning(nativeModelId)) return;

  return resolveProviderEffort(provider, nativeModelId, reasoningEffort);
}

function resolveProviderEffort(
  provider: ModelProvider,
  nativeModelId: string,
  effort: ReasoningEffort,
) {
  const overrides = PROVIDER_REASONING_OVERRIDES[effort];

  return (
    overrides?.[`${provider}:${nativeModelId}`] ??
    overrides?.[provider] ??
    effort
  );
}
