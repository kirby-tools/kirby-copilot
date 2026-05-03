/* eslint-disable test/prefer-lowercase-title */
import type { ProviderConfig } from "../../../src/panel/types";
import { describe, expect, it } from "vitest";
import { resolveProviderOptions } from "../../../src/panel/utils/reasoning";

const baseConfig: ProviderConfig = { hasApiKey: true };

describe("resolveProviderOptions", () => {
  describe("Anthropic", () => {
    it("emits manual extended thinking with budget tokens for Haiku 4.5", () => {
      const result = resolveProviderOptions({
        provider: "anthropic",
        providerConfig: baseConfig,
        modelId: "claude-haiku-4-5",
        reasoningEffort: "high",
      });

      expect(result?.anthropic).toEqual({
        thinking: { type: "enabled", budgetTokens: 12000 },
      });
    });

    it.each([
      { model: "claude-opus-4-6", effort: "medium" },
      { model: "claude-sonnet-4-6", effort: "high" },
    ] as const)(
      "emits adaptive thinking for $model at effort $effort",
      ({ model, effort }) => {
        const result = resolveProviderOptions({
          provider: "anthropic",
          providerConfig: baseConfig,
          modelId: model,
          reasoningEffort: effort,
        });

        expect(result?.anthropic).toMatchObject({
          thinking: { type: "adaptive" },
          effort,
        });
      },
    );

    it.each([
      { model: "claude-haiku-4-5", description: "manual-thinking model" },
      { model: "claude-opus-4-7", description: "adaptive-thinking model" },
    ])("returns undefined for $description at effort `none`", ({ model }) => {
      const result = resolveProviderOptions({
        provider: "anthropic",
        providerConfig: baseConfig,
        modelId: model,
        reasoningEffort: "none",
      });

      expect(result).toBeUndefined();
    });

    it("returns undefined for pre-Claude-4 models", () => {
      const result = resolveProviderOptions({
        provider: "anthropic",
        providerConfig: baseConfig,
        modelId: "claude-3-5-sonnet",
        reasoningEffort: "high",
      });

      expect(result).toBeUndefined();
    });
  });

  describe("Google", () => {
    it("uses model-specific override for Gemini 3 Flash at effort `none`", () => {
      const result = resolveProviderOptions({
        provider: "google",
        providerConfig: baseConfig,
        modelId: "gemini-3-flash-preview",
        reasoningEffort: "none",
      });

      expect(result?.google).toEqual({
        thinkingConfig: { thinkingLevel: "minimal" },
      });
    });

    it.each(["gemini-2.5-pro", "gemini-2.5-flash"])(
      "returns undefined for %s (uses thinkingBudget, not thinkingLevel)",
      (model) => {
        const result = resolveProviderOptions({
          provider: "google",
          providerConfig: baseConfig,
          modelId: model,
          reasoningEffort: "medium",
        });

        expect(result).toBeUndefined();
      },
    );
  });

  describe("Mistral", () => {
    it.each([
      { effort: "none", expected: "none" },
      { effort: "low", expected: "high" },
      { effort: "medium", expected: "high" },
      { effort: "high", expected: "high" },
    ] as const)("folds $effort effort to $expected", ({ effort, expected }) => {
      const result = resolveProviderOptions({
        provider: "mistral",
        providerConfig: baseConfig,
        modelId: "mistral-small-latest",
        reasoningEffort: effort,
      });

      expect(result?.mistral).toEqual({ reasoningEffort: expected });
    });

    it.each(["mistral-medium-latest", "mistral-large-latest"])(
      "returns undefined for %s (only Small 4 / magistral honor reasoning_effort)",
      (model) => {
        const result = resolveProviderOptions({
          provider: "mistral",
          providerConfig: baseConfig,
          modelId: model,
          reasoningEffort: "high",
        });

        expect(result).toBeUndefined();
      },
    );
  });

  describe("OpenAI", () => {
    it("returns undefined for non-reasoning models", () => {
      const result = resolveProviderOptions({
        provider: "openai",
        providerConfig: baseConfig,
        modelId: "gpt-4o-mini",
        reasoningEffort: "medium",
      });

      expect(result).toBeUndefined();
    });

    it("applies reasoning for provider-namespaced model IDs", () => {
      const result = resolveProviderOptions({
        provider: "openai",
        providerConfig: baseConfig,
        modelId: "openai/gpt-5.4-mini",
        reasoningEffort: "medium",
      });

      expect(result?.openai?.reasoningEffort).toBe("medium");
    });

    it("returns undefined for cross-provider namespaced models", () => {
      const result = resolveProviderOptions({
        provider: "openai",
        providerConfig: baseConfig,
        modelId: "google-ai-studio/gemini-2.5-flash",
        reasoningEffort: "medium",
      });

      expect(result).toBeUndefined();
    });

    it("returns undefined for namespaced non-reasoning models", () => {
      const result = resolveProviderOptions({
        provider: "openai",
        providerConfig: baseConfig,
        modelId: "openai/gpt-4o-mini",
        reasoningEffort: "medium",
      });

      expect(result).toBeUndefined();
    });
  });

  describe("custom options", () => {
    it("merges options from providerConfig into provider key", () => {
      const result = resolveProviderOptions({
        provider: "openai",
        providerConfig: {
          ...baseConfig,
          options: { parallelToolCalls: false, strictJsonSchema: true },
        },
        modelId: "gpt-5",
        reasoningEffort: "low",
      });

      expect(result?.openai).toEqual(
        expect.objectContaining({
          parallelToolCalls: false,
          strictJsonSchema: true,
        }),
      );
    });

    it("custom options override built-in defaults", () => {
      const result = resolveProviderOptions({
        provider: "openai",
        providerConfig: {
          ...baseConfig,
          options: { reasoningEffort: "high" },
        },
        modelId: "gpt-5",
        reasoningEffort: "low",
      });

      expect(result?.openai?.reasoningEffort).toBe("high");
    });

    it("forwards explicit reasoning override for cross-provider gateways", () => {
      const result = resolveProviderOptions({
        provider: "openai",
        providerConfig: {
          ...baseConfig,
          options: { reasoningEffort: "high" },
        },
        modelId: "google-ai-studio/gemini-2.5-flash",
        reasoningEffort: "medium",
      });

      expect(result?.openai?.reasoningEffort).toBe("high");
    });
  });
});
