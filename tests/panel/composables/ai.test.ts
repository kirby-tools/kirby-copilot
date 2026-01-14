import type { PluginConfig } from "../../../src/panel/types";
import { simulateReadableStream } from "ai";
import { MockLanguageModelV3 } from "ai/test";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  resolveAttachments,
  resolveLanguageModel,
  useStreamText,
} from "../../../src/panel/composables/ai";
import { CopilotError } from "../../../src/panel/utils/error";

vi.mock("kirbyuse", () => ({
  usePanel: () => ({
    api: { endpoint: "/api", csrf: "test-csrf" },
    view: { title: "Test Page" },
  }),
  useContent: () => ({
    currentContent: { value: { title: "Test", body: "Content" } },
  }),
}));

vi.mock("../../../src/panel/utils/image", () => ({
  toReducedBlob: (file: File) => Promise.resolve(file),
}));

const mockStreamText = vi.fn();
const mockSmoothStream = vi.fn((_options: { chunking: unknown }) => vi.fn());

const createMockProvider = () => ({
  languageModel: () =>
    new MockLanguageModelV3({
      doStream: async () => ({
        stream: simulateReadableStream({ chunks: [] }),
      }),
    }),
});

const mockCreateOpenAI = vi.fn(createMockProvider);
const mockCreateAnthropic = vi.fn(createMockProvider);
const mockCreateGoogle = vi.fn(createMockProvider);
const mockCreateMistral = vi.fn(createMockProvider);

vi.mock("../../../src/panel/utils/ai", () => ({
  loadAISDK: () =>
    Promise.resolve({
      streamText: mockStreamText,
      smoothStream: mockSmoothStream,
      AISDKError: { isInstance: () => false },
      createOpenAI: mockCreateOpenAI,
      createAnthropic: mockCreateAnthropic,
      createGoogleGenerativeAI: mockCreateGoogle,
      createMistral: mockCreateMistral,
    }),
}));

let mockPluginConfig: Pick<
  PluginConfig,
  "provider" | "providers" | "reasoningEffort"
> = {
  provider: "openai",
  providers: {
    openai: { model: "gpt-5-nano", hasApiKey: true },
  },
};

vi.mock("../../../src/panel/composables/plugin", () => ({
  usePluginContext: () => Promise.resolve({ config: mockPluginConfig }),
}));

vi.mock("../../../src/panel/composables/logger", () => ({
  useLogger: () => ({
    info: vi.fn(),
    error: vi.fn(),
    warn: vi.fn(),
  }),
}));

describe("useStreamText", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    resetPluginConfig();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  describe("prompt handling", () => {
    it("passes system and user prompts to streamText", async () => {
      mockStreamText.mockResolvedValue({ textStream: null });

      await useStreamText({
        userPrompt: "Hello",
        systemPrompt: "Be helpful",
      });

      expect(mockStreamText).toHaveBeenCalledWith(
        expect.objectContaining({
          system: "Be helpful",
          prompt: "Hello",
        }),
      );
    });

    it("omits system prompt when not provided", async () => {
      mockStreamText.mockResolvedValue({ textStream: null });

      await useStreamText({ userPrompt: "Hello" });

      const call = mockStreamText.mock.calls[0]?.[0];
      expect(call?.system).toBeUndefined();
    });
  });

  describe("model injection", () => {
    it("uses injected model instead of resolving from config", async () => {
      mockStreamText.mockResolvedValue({ textStream: null });
      const injectedModel = createMockModel();

      await useStreamText({
        userPrompt: "Test",
        model: injectedModel,
      });

      expect(mockStreamText).toHaveBeenCalledWith(
        expect.objectContaining({ model: injectedModel }),
      );
      expect(mockCreateOpenAI).not.toHaveBeenCalled();
    });

    it("uses injected providerOptions when model is injected", async () => {
      mockStreamText.mockResolvedValue({ textStream: null });
      const customOptions = { openai: { reasoningEffort: "high" } };

      await useStreamText({
        userPrompt: "Test",
        model: createMockModel(),
        providerOptions: customOptions,
      });

      expect(mockStreamText).toHaveBeenCalledWith(
        expect.objectContaining({ providerOptions: customOptions }),
      );
    });
  });

  describe("response format chunking", () => {
    it("uses HTML chunking transform for rich-text format", async () => {
      mockStreamText.mockResolvedValue({ textStream: null });

      await useStreamText({
        userPrompt: "Test",
        responseFormat: "rich-text",
      });

      expect(mockSmoothStream).toHaveBeenCalled();
      const call = mockSmoothStream.mock.calls[0]?.[0];
      expect(call?.chunking).not.toBe("line");
    });

    it("uses line chunking for text format", async () => {
      mockStreamText.mockResolvedValue({ textStream: null });

      await useStreamText({
        userPrompt: "Test",
        responseFormat: "text",
      });

      expect(mockSmoothStream).toHaveBeenCalledWith(
        expect.objectContaining({ chunking: "line" }),
      );
    });

    it("uses line chunking when no responseFormat is specified", async () => {
      mockStreamText.mockResolvedValue({ textStream: null });

      await useStreamText({ userPrompt: "Test" });

      expect(mockSmoothStream).toHaveBeenCalledWith(
        expect.objectContaining({ chunking: "line" }),
      );
    });
  });

  describe("output parameter", () => {
    it("disables smoothStream transform when output is provided", async () => {
      mockStreamText.mockResolvedValue({ textStream: null });
      const mockOutput = { type: "object" };

      await useStreamText({
        userPrompt: "Test",
        output: mockOutput as never,
      });

      expect(mockSmoothStream).not.toHaveBeenCalled();
      expect(mockStreamText).toHaveBeenCalledWith(
        expect.objectContaining({ output: mockOutput }),
      );
    });

    it("applies smoothStream transform when output is not provided", async () => {
      mockStreamText.mockResolvedValue({ textStream: null });

      await useStreamText({ userPrompt: "Test" });

      expect(mockSmoothStream).toHaveBeenCalled();
    });
  });

  describe("file attachments", () => {
    it("includes image attachments in messages array", async () => {
      mockStreamText.mockResolvedValue({ textStream: null });
      const imageFile = new File(["test"], "test.png", { type: "image/png" });

      await useStreamText({
        userPrompt: "Describe this",
        files: [imageFile],
      });

      expect(mockStreamText).toHaveBeenCalledWith(
        expect.objectContaining({
          messages: expect.arrayContaining([
            expect.objectContaining({
              role: "user",
              content: expect.arrayContaining([
                expect.objectContaining({ type: "text" }),
                expect.objectContaining({ type: "image" }),
              ]),
            }),
          ]),
        }),
      );
    });

    it("uses simple prompt when no files are attached", async () => {
      mockStreamText.mockResolvedValue({ textStream: null });

      await useStreamText({ userPrompt: "Hello" });

      const call = mockStreamText.mock.calls[0]?.[0];
      expect(call?.prompt).toBe("Hello");
      expect(call?.messages).toBeUndefined();
    });
  });

  describe("abort signal", () => {
    it("passes abort signal through to streamText", async () => {
      mockStreamText.mockResolvedValue({ textStream: null });
      const controller = new AbortController();

      await useStreamText({
        userPrompt: "Test",
        abortSignal: controller.signal,
      });

      expect(mockStreamText).toHaveBeenCalledWith(
        expect.objectContaining({ abortSignal: controller.signal }),
      );
    });
  });
});

describe("resolveLanguageModel", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    resetPluginConfig();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  describe("model resolution", () => {
    it("returns a model instance for valid config", async () => {
      const result = await resolveLanguageModel();

      expect(result).toHaveProperty("model");
      expect(mockCreateOpenAI).toHaveBeenCalled();
    });

    it("uses completionModel when forCompletion is true", async () => {
      mockPluginConfig.providers.openai!.completionModel = "gpt-5-mini";

      const result = await resolveLanguageModel({ forCompletion: true });

      expect(result).toHaveProperty("model");
      expect(mockCreateOpenAI).toHaveBeenCalled();
    });

    it("falls back to default completion model when not configured", async () => {
      const result = await resolveLanguageModel({ forCompletion: true });

      expect(result).toHaveProperty("model");
    });
  });

  describe("provider selection", () => {
    it.each([
      ["openai", mockCreateOpenAI, "gpt-5-nano"],
      ["anthropic", mockCreateAnthropic, "claude-haiku-4-5-20251001"],
      ["google", mockCreateGoogle, "gemini-3-flash-preview"],
      ["mistral", mockCreateMistral, "mistral-small-latest"],
    ] as const)(
      "creates %s provider when configured",
      async (provider, mockFn, model) => {
        mockPluginConfig = {
          provider,
          providers: {
            [provider]: { model, hasApiKey: true },
          },
        };

        await resolveLanguageModel();

        expect(mockFn).toHaveBeenCalled();
      },
    );
  });

  describe("custom provider options", () => {
    it("merges custom options from providerConfig", async () => {
      const customOptions = { temperature: 0.5, maxTokens: 1000 };
      mockPluginConfig.providers.openai = {
        model: "gpt-5",
        hasApiKey: true,
        options: customOptions,
      };

      const { providerOptions } = await resolveLanguageModel();

      expect(providerOptions?.openai).toEqual(
        expect.objectContaining(customOptions),
      );
    });

    it("custom options take precedence over defaults", async () => {
      mockPluginConfig.providers.openai = {
        model: "gpt-5",
        hasApiKey: true,
        options: { reasoningEffort: "high" },
      };

      const { providerOptions } = await resolveLanguageModel();

      expect(providerOptions?.openai?.reasoningEffort).toBe("high");
    });
  });

  describe("error handling", () => {
    it("throws CopilotError for unsupported provider", async () => {
      mockPluginConfig.provider = "invalid-provider";

      await expect(resolveLanguageModel()).rejects.toThrow(CopilotError);
      await expect(resolveLanguageModel()).rejects.toThrow(
        /Unsupported provider/,
      );
    });

    it("throws CopilotError when API key is missing", async () => {
      mockPluginConfig.providers.openai!.hasApiKey = false;

      await expect(resolveLanguageModel()).rejects.toThrow(CopilotError);
      await expect(resolveLanguageModel()).rejects.toThrow(/Missing API key/);
    });

    it("throws CopilotError when model is not configured", async () => {
      mockPluginConfig.providers.openai!.model = undefined;

      await expect(resolveLanguageModel()).rejects.toThrow(CopilotError);
      await expect(resolveLanguageModel()).rejects.toThrow(/Missing.*model/);
    });

    it("includes provider name in error message for missing model", async () => {
      mockPluginConfig.providers.openai!.model = undefined;

      await expect(resolveLanguageModel()).rejects.toThrow(/openai/);
    });
  });
});

describe("resolveAttachments", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("prompt processing", () => {
    it("returns the user prompt unchanged when no template variables", async () => {
      const { userPromptWithContext } = await resolveAttachments({
        userPrompt: "Simple prompt without variables",
      });

      expect(userPromptWithContext).toBe("Simple prompt without variables");
    });

    it("renders template variables in user prompt", async () => {
      const { userPromptWithContext } = await resolveAttachments({
        userPrompt: "Page title: {title}",
      });

      expect(userPromptWithContext).toContain("Page title:");
    });
  });

  describe("image processing", () => {
    it("converts images to byte arrays", async () => {
      const imageFile = new File(["image-data"], "test.png", {
        type: "image/png",
      });

      const { imageByteArrays } = await resolveAttachments({
        userPrompt: "Test",
        files: [imageFile],
      });

      expect(imageByteArrays).toHaveLength(1);
      expect(imageByteArrays[0]).toBeInstanceOf(Uint8Array);
    });

    it("handles multiple images", async () => {
      const files = [
        new File(["img1"], "a.png", { type: "image/png" }),
        new File(["img2"], "b.jpg", { type: "image/jpeg" }),
        new File(["img3"], "c.webp", { type: "image/webp" }),
      ];

      const { imageByteArrays } = await resolveAttachments({
        userPrompt: "Test",
        files,
      });

      expect(imageByteArrays).toHaveLength(3);
    });

    it("filters out non-image files from imageByteArrays", async () => {
      const files = [
        new File(["img"], "test.png", { type: "image/png" }),
        new File(["text"], "doc.txt", { type: "text/plain" }),
      ];

      const { imageByteArrays } = await resolveAttachments({
        userPrompt: "Test",
        files,
      });

      expect(imageByteArrays).toHaveLength(1);
    });
  });

  describe("mixed file handling", () => {
    it("returns empty arrays when no files provided", async () => {
      const result = await resolveAttachments({ userPrompt: "Test" });

      expect(result.imageByteArrays).toHaveLength(0);
      expect(result.pdfByteArrays).toHaveLength(0);
    });

    it("separates images and PDFs correctly", async () => {
      const files = [
        new File(["img"], "test.png", { type: "image/png" }),
        new File(["pdf"], "doc.pdf", { type: "application/pdf" }),
      ];

      const { imageByteArrays, pdfByteArrays } = await resolveAttachments({
        userPrompt: "Test",
        files,
      });

      expect(imageByteArrays).toHaveLength(1);
      expect(pdfByteArrays).toHaveLength(1);
    });
  });
});

// eslint-disable-next-line test/prefer-lowercase-title
describe("AI SDK Test Utilities", () => {
  describe("mockLanguageModelV3", () => {
    it("creates valid v3 model specification", () => {
      const model = new MockLanguageModelV3({
        doGenerate: async () => ({
          content: [{ type: "text", text: "Hello" }],
          finishReason: { unified: "stop", raw: undefined },
          usage: {
            inputTokens: {
              total: 5,
              noCache: 5,
              cacheRead: undefined,
              cacheWrite: undefined,
            },
            outputTokens: { total: 10, text: 10, reasoning: undefined },
          },
          warnings: [],
        }),
      });

      expect(model.specificationVersion).toBe("v3");
    });
  });

  describe("simulateReadableStream", () => {
    it("creates consumable stream with text deltas", async () => {
      const stream = simulateReadableStream({
        chunks: [
          { type: "text-start", id: "1" },
          { type: "text-delta", id: "1", delta: "A" },
          { type: "text-delta", id: "1", delta: "B" },
          { type: "text-end", id: "1" },
          {
            type: "finish",
            finishReason: { unified: "stop", raw: undefined },
            logprobs: undefined,
            usage: {
              inputTokens: {
                total: 1,
                noCache: 1,
                cacheRead: undefined,
                cacheWrite: undefined,
              },
              outputTokens: { total: 2, text: 2, reasoning: undefined },
            },
          },
        ],
      });

      const chunks: string[] = [];
      const reader = stream.getReader();
      let result = await reader.read();

      while (!result.done) {
        if (result.value.type === "text-delta") {
          chunks.push(result.value.delta!);
        }
        result = await reader.read();
      }

      expect(chunks).toEqual(["A", "B"]);
    });
  });
});

function createMockModel() {
  return new MockLanguageModelV3({
    doStream: async () => ({
      stream: simulateReadableStream({ chunks: [] }),
    }),
  });
}

function resetPluginConfig() {
  mockPluginConfig = {
    provider: "openai",
    providers: {
      openai: { model: "gpt-5-nano", hasApiKey: true },
    },
  };
}
