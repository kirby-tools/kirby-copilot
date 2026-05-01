import { describe, expect, it } from "vitest";
import {
  getAnthropicThinkingMode,
  parseGatewayPrefix,
  supportsReasoning,
} from "../../../src/panel/utils/models";

describe("supportsReasoning", () => {
  // eslint-disable-next-line test/prefer-lowercase-title
  describe("OpenAI models", () => {
    it.each(["gpt-5", "gpt-5.4-mini"])("returns true for %s", (model) => {
      expect(supportsReasoning(model)).toBe(true);
    });

    it.each(["gpt-4o", "gpt-4-turbo", "gpt-o4-mini"])(
      "returns false for %s",
      (model) => {
        expect(supportsReasoning(model)).toBe(false);
      },
    );
  });

  // eslint-disable-next-line test/prefer-lowercase-title
  describe("Google models", () => {
    it.each(["gemini-3.1-pro", "gemini-3-flash", "gemini-3-pro-preview"])(
      "returns true for %s",
      (model) => {
        expect(supportsReasoning(model)).toBe(true);
      },
    );

    it.each([
      "gemini-2.0-flash",
      // 2.5 uses `thinkingBudget` (not `thinkingLevel`); SDK default is used
      "gemini-2.5-pro",
      "gemini-2.5-flash",
    ])("returns false for %s", (model) => {
      expect(supportsReasoning(model)).toBe(false);
    });
  });

  // eslint-disable-next-line test/prefer-lowercase-title
  describe("Anthropic models", () => {
    it.each([
      "claude-opus-4",
      "claude-sonnet-4-6",
      "claude-haiku-4-5",
      "claude-mythos-preview",
    ])("returns true for %s", (model) => {
      expect(supportsReasoning(model)).toBe(true);
    });

    it.each(["claude-3-5-sonnet", "claude-3-5-haiku"])(
      "returns false for %s",
      (model) => {
        expect(supportsReasoning(model)).toBe(false);
      },
    );
  });

  // eslint-disable-next-line test/prefer-lowercase-title
  describe("Mistral models", () => {
    it.each([
      "mistral-small-latest",
      "magistral-small-2507",
      "magistral-medium-2507",
    ])("returns true for %s", (model) => {
      expect(supportsReasoning(model)).toBe(true);
    });

    it.each([
      // Only Small 4 and `magistral-*` honor `reasoning_effort`;
      // `medium`/`large` silently ignore it
      "mistral-medium-2508",
      "mistral-large-latest",
      "mistral-nemo",
      "codestral",
      "ministral-8b-latest",
    ])("returns false for %s", (model) => {
      expect(supportsReasoning(model)).toBe(false);
    });
  });

  describe("edge cases", () => {
    it("returns false for empty string", () => {
      expect(supportsReasoning("")).toBe(false);
    });

    it("is case-sensitive", () => {
      expect(supportsReasoning("GPT-5")).toBe(false);
      expect(supportsReasoning("Claude-Sonnet-4")).toBe(false);
    });
  });
});

describe("getAnthropicThinkingMode", () => {
  it.each([
    "claude-opus-4-6",
    "claude-opus-4-7",
    "claude-sonnet-4-6",
    "claude-mythos-preview",
    // Forward-compat: future Haiku adaptive variant
    "claude-haiku-4-6",
    // Forward-compat: two-digit minor versions
    "claude-opus-4-10",
    "claude-sonnet-5",
  ])("returns `adaptive` for %s", (model) => {
    expect(getAnthropicThinkingMode(model)).toBe("adaptive");
  });

  it.each([
    "claude-opus-4",
    "claude-opus-4-1",
    "claude-opus-4-5-20251101",
    "claude-sonnet-4-20250514",
    "claude-haiku-4-5",
    "claude-haiku-4-5-20251001",
  ])("returns `manual` for %s (needs budget_tokens)", (model) => {
    expect(getAnthropicThinkingMode(model)).toBe("manual");
  });

  it.each(["claude-3-5-sonnet", "claude-3-5-haiku", "gpt-5"])(
    "returns `none` for %s",
    (model) => {
      expect(getAnthropicThinkingMode(model)).toBe("none");
    },
  );
});

describe("parseGatewayPrefix", () => {
  it("returns empty prefix and full id for bare model ids", () => {
    expect(parseGatewayPrefix("gpt-5.4-nano")).toEqual({
      prefix: "",
      nativeModelId: "gpt-5.4-nano",
    });
  });

  it("splits on the first slash", () => {
    expect(parseGatewayPrefix("openai/gpt-5.4")).toEqual({
      prefix: "openai",
      nativeModelId: "gpt-5.4",
    });
  });

  it("returns prefix without trailing slash", () => {
    expect(
      parseGatewayPrefix("google-ai-studio/gemini-3-flash-preview"),
    ).toEqual({
      prefix: "google-ai-studio",
      nativeModelId: "gemini-3-flash-preview",
    });
  });

  it("treats leading slash as no prefix", () => {
    expect(parseGatewayPrefix("/weird")).toEqual({
      prefix: "",
      nativeModelId: "/weird",
    });
  });

  it("only splits on the first slash", () => {
    expect(parseGatewayPrefix("openai/my/custom-id")).toEqual({
      prefix: "openai",
      nativeModelId: "my/custom-id",
    });
  });

  it("returns empty prefix for empty string", () => {
    expect(parseGatewayPrefix("")).toEqual({
      prefix: "",
      nativeModelId: "",
    });
  });
});
