import { describe, expect, it } from "vitest";
import {
  buildUserPrompt,
  supportsReasoning,
} from "../../../src/panel/utils/models";

describe("supportsReasoning", () => {
  // eslint-disable-next-line test/prefer-lowercase-title
  describe("OpenAI models", () => {
    it.each([
      "gpt-5",
      "gpt-5-mini",
      "gpt-5-nano",
      "gpt-5.1",
      "gpt-5.2",
      "gpt-5-turbo",
    ])("returns true for %s", (model) => {
      expect(supportsReasoning(model)).toBe(true);
    });

    it.each(["gpt-4", "gpt-4o", "gpt-4o-mini", "gpt-4-turbo", "gpt-3.5-turbo"])(
      "returns false for %s",
      (model) => {
        expect(supportsReasoning(model)).toBe(false);
      },
    );
  });

  // eslint-disable-next-line test/prefer-lowercase-title
  describe("Google models", () => {
    it.each([
      "gemini-2.5-pro",
      "gemini-2.5-flash",
      "gemini-2.5-pro-preview",
      "gemini-3",
      "gemini-3-pro",
      "gemini-3-flash",
    ])("returns true for %s", (model) => {
      expect(supportsReasoning(model)).toBe(true);
    });

    it.each([
      "gemini-1.5-pro",
      "gemini-1.5-flash",
      "gemini-2.0-flash",
      "gemini-pro",
    ])("returns false for %s", (model) => {
      expect(supportsReasoning(model)).toBe(false);
    });
  });

  // eslint-disable-next-line test/prefer-lowercase-title
  describe("Anthropic models", () => {
    it.each([
      "claude-sonnet-4",
      "claude-opus-4",
      "claude-haiku-4-5",
      "claude-sonnet-4-20250514",
    ])("returns true for %s", (model) => {
      expect(supportsReasoning(model)).toBe(true);
    });

    it.each([
      "claude-3-opus",
      "claude-3-sonnet",
      "claude-3-haiku",
      "claude-3-5-sonnet",
      "claude-3-5-haiku",
      "claude-2",
    ])("returns false for %s", (model) => {
      expect(supportsReasoning(model)).toBe(false);
    });
  });

  // eslint-disable-next-line test/prefer-lowercase-title
  describe("Mistral models", () => {
    it.each(["magistral", "magistral-medium", "magistral-large"])(
      "returns true for %s",
      (model) => {
        expect(supportsReasoning(model)).toBe(true);
      },
    );

    it.each(["mistral-large", "mistral-small", "mistral-nemo", "codestral"])(
      "returns false for %s",
      (model) => {
        expect(supportsReasoning(model)).toBe(false);
      },
    );
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

describe("buildUserPrompt", () => {
  it("returns prompt only when no options provided", () => {
    expect(buildUserPrompt("Hello world")).toBe("Hello world");
  });

  it("returns prompt only when options are empty", () => {
    expect(buildUserPrompt("Hello world", {})).toBe("Hello world");
  });

  it("prepends response format when provided", () => {
    const result = buildUserPrompt("Write something", {
      responseFormat: "markdown",
    });
    expect(result).toBe(
      "<response_format>markdown</response_format>\n\nWrite something",
    );
  });

  it("prepends selection when provided", () => {
    const result = buildUserPrompt("Edit this", {
      selection: "selected text",
    });
    expect(result).toBe(
      "<selection>\nselected text\n</selection>\n\nEdit this",
    );
  });

  it("includes both response format and selection in correct order", () => {
    const result = buildUserPrompt("Process this", {
      responseFormat: "rich-text",
      selection: "some content",
    });
    expect(result).toBe(
      "<response_format>rich-text</response_format>\n\n<selection>\nsome content\n</selection>\n\nProcess this",
    );
  });

  it("filters out falsy values", () => {
    const result = buildUserPrompt("Prompt", {
      responseFormat: undefined,
      selection: "",
    });
    expect(result).toBe("Prompt");
  });
});
