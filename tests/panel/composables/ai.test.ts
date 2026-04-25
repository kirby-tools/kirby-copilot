import type { PluginConfig } from "../../../src/panel/types";
import { simulateReadableStream } from "ai";
import { MockLanguageModelV3 } from "ai/test";
import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  resolveLanguageModel,
  resolvePromptContext,
  useStreamText,
} from "../../../src/panel/composables/ai";
import { useSkills } from "../../../src/panel/composables/skills";
import { CopilotError } from "../../../src/panel/utils/error";

const mockPagesGet = vi.fn();

vi.mock("kirbyuse", async () => {
  const { baseKirbyuseMock } = await import("../helpers/mock-kirbyuse");
  return {
    ...baseKirbyuseMock(),
    usePanel: () => ({
      api: {
        endpoint: "/api",
        csrf: "test-csrf",
        pages: {
          get: mockPagesGet,
          id: (id: string) => id.replaceAll("/", "+"),
        },
      },
      view: { title: "Test Page" },
    }),
    useContent: () => ({
      currentContent: { value: { title: "Test", body: "Content" } },
    }),
  };
});

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
  chat: () =>
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

const mockUsePluginContext = vi.fn();

vi.mock("../../../src/panel/composables/plugin", () => ({
  usePluginContext: () => mockUsePluginContext(),
}));

type PluginConfigSubset = Pick<
  PluginConfig,
  "provider" | "providers" | "reasoningEffort"
>;

function createPluginConfig(
  overrides?: Partial<PluginConfigSubset>,
): Promise<{ config: PluginConfigSubset }> {
  return Promise.resolve({
    config: {
      provider: overrides?.provider ?? "openai",
      reasoningEffort: overrides?.reasoningEffort,
      providers: {
        openai: { model: "gpt-5.4-nano", hasApiKey: true },
        ...overrides?.providers,
      },
    },
  });
}

vi.mock("../../../src/panel/composables/logger", () => ({
  useLogger: () => ({
    info: vi.fn(),
    error: vi.fn(),
    warn: vi.fn(),
  }),
}));

beforeEach(() => {
  vi.clearAllMocks();
  useSkills().setConfigSkills([]);
  mockUsePluginContext.mockReturnValue(createPluginConfig());
});

describe("useStreamText", () => {
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

      const call = mockSmoothStream.mock.calls[0]?.[0];
      expect(typeof call?.chunking).toBe("function");
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

  describe("structured output mode", () => {
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
  describe("completion model selection", () => {
    it("returns a model instance for valid config", async () => {
      const result = await resolveLanguageModel();

      expect(result).toHaveProperty("model");
      expect(mockCreateOpenAI).toHaveBeenCalled();
    });

    it.each([
      {
        name: "uses explicit completionModel",
        openai: {
          model: "gpt-5.4-nano",
          completionModel: "gpt-5.4-mini",
          hasApiKey: true,
        },
        expected: "gpt-5.4-mini",
      },
      {
        name: "falls back to default completion model when not configured",
        openai: undefined,
        expected: "gpt-5.4-nano",
      },
      {
        name: "applies gateway prefix from model to default fallback",
        openai: { model: "openai/gpt-5.4", hasApiKey: true },
        expected: "openai/gpt-5.4-nano",
      },
      {
        name: "explicit completionModel wins over gateway-prefix derivation",
        openai: {
          model: "openai/gpt-5.4",
          completionModel: "google-ai-studio/gemini-3-flash-preview",
          hasApiKey: true,
        },
        expected: "google-ai-studio/gemini-3-flash-preview",
      },
    ])("completion model resolution: $name", async ({ openai, expected }) => {
      let resolvedModelId: string | undefined;
      mockCreateOpenAI.mockReturnValue({
        languageModel: (...args: unknown[]) => {
          resolvedModelId = args[0] as string;
          return createMockModel();
        },
        chat: () => createMockModel(),
      });

      if (openai) {
        mockUsePluginContext.mockReturnValue(
          createPluginConfig({ providers: { openai } }),
        );
      }

      await resolveLanguageModel({ forCompletion: true });

      expect(resolvedModelId).toBe(expected);
    });

    it("throws when default completion model would cross gateway provider boundaries", async () => {
      mockUsePluginContext.mockReturnValue(
        createPluginConfig({
          providers: {
            openai: {
              model: "google-ai-studio/gemini-2.5-flash",
              hasApiKey: true,
              api: "chat",
            },
          },
        }),
      );

      const error = await resolveLanguageModel({ forCompletion: true }).catch(
        (e) => e,
      );

      expect(error).toBeInstanceOf(CopilotError);
      expect(error.message).toMatch(/completionModel/);
    });
  });

  describe("provider selection", () => {
    it.each([
      ["openai", mockCreateOpenAI, "gpt-5.4-nano"],
      ["anthropic", mockCreateAnthropic, "claude-haiku-4-5-20251001"],
      ["google", mockCreateGoogle, "gemini-3-flash-preview"],
      ["mistral", mockCreateMistral, "mistral-small-latest"],
    ] as const)(
      "creates %s provider when configured",
      async (provider, mockFn, model) => {
        mockUsePluginContext.mockReturnValue(
          createPluginConfig({
            provider,
            providers: { [provider]: { model, hasApiKey: true } },
          }),
        );

        await resolveLanguageModel();

        expect(mockFn).toHaveBeenCalled();
      },
    );
  });

  describe("custom provider options", () => {
    it("maps Anthropic reasoning effort to thinking budget (legacy)", async () => {
      mockUsePluginContext.mockReturnValue(
        createPluginConfig({
          provider: "anthropic",
          reasoningEffort: "high",
          providers: {
            anthropic: {
              model: "claude-haiku-4-5-20251001",
              hasApiKey: true,
            },
          },
        }),
      );

      const { providerOptions } = await resolveLanguageModel();

      expect(providerOptions?.anthropic).toEqual({
        thinking: {
          type: "enabled",
          budgetTokens: 32000,
        },
      });
    });

    it("forces `display: omitted` on Opus 4.7 to skip unrendered reasoning text", async () => {
      mockUsePluginContext.mockReturnValue(
        createPluginConfig({
          provider: "anthropic",
          reasoningEffort: "low",
          providers: {
            anthropic: { model: "claude-opus-4-7", hasApiKey: true },
          },
        }),
      );

      const { providerOptions } = await resolveLanguageModel();

      expect(providerOptions?.anthropic).toEqual({
        thinking: { type: "adaptive", display: "omitted" },
        effort: "low",
      });
    });

    it.each([
      ["claude-opus-4-6", "medium"],
      ["claude-sonnet-4-6", "high"],
    ] as const)(
      "emits adaptive thinking for %s at effort %s",
      async (model, effort) => {
        mockUsePluginContext.mockReturnValue(
          createPluginConfig({
            provider: "anthropic",
            reasoningEffort: effort,
            providers: { anthropic: { model, hasApiKey: true } },
          }),
        );

        const { providerOptions } = await resolveLanguageModel();

        expect(providerOptions?.anthropic).toMatchObject({
          thinking: { type: "adaptive" },
          effort,
        });
      },
    );

    it("uses model-specific Google reasoning overrides", async () => {
      mockUsePluginContext.mockReturnValue(
        createPluginConfig({
          provider: "google",
          reasoningEffort: "none",
          providers: {
            google: {
              model: "gemini-3-flash-preview",
              hasApiKey: true,
            },
          },
        }),
      );

      const { providerOptions } = await resolveLanguageModel();

      expect(providerOptions?.google).toEqual({
        thinkingConfig: {
          thinkingLevel: "minimal",
        },
      });
    });

    it.each(["gemini-2.5-pro", "gemini-2.5-flash"])(
      "omits reasoning for %s (uses thinkingBudget, not thinkingLevel)",
      async (model) => {
        mockUsePluginContext.mockReturnValue(
          createPluginConfig({
            provider: "google",
            reasoningEffort: "medium",
            providers: { google: { model, hasApiKey: true } },
          }),
        );

        const { providerOptions } = await resolveLanguageModel();

        expect(providerOptions).toBeUndefined();
      },
    );

    it.each(["mistral-medium-latest", "mistral-large-latest"])(
      "omits reasoning for %s (only Small 4 and magistral honor reasoning_effort)",
      async (model) => {
        mockUsePluginContext.mockReturnValue(
          createPluginConfig({
            provider: "mistral",
            reasoningEffort: "high",
            providers: { mistral: { model, hasApiKey: true } },
          }),
        );

        const { providerOptions } = await resolveLanguageModel();

        expect(providerOptions).toBeUndefined();
      },
    );

    it("merges custom options from providerConfig", async () => {
      const customOptions = {
        parallelToolCalls: false,
        strictJsonSchema: true,
      };
      mockUsePluginContext.mockReturnValue(
        createPluginConfig({
          providers: {
            openai: { model: "gpt-5", hasApiKey: true, options: customOptions },
          },
        }),
      );

      const { providerOptions } = await resolveLanguageModel();

      expect(providerOptions?.openai).toEqual(
        expect.objectContaining(customOptions),
      );
    });

    it("custom options take precedence over defaults", async () => {
      mockUsePluginContext.mockReturnValue(
        createPluginConfig({
          providers: {
            openai: {
              model: "gpt-5",
              hasApiKey: true,
              options: { reasoningEffort: "high" },
            },
          },
        }),
      );

      const { providerOptions } = await resolveLanguageModel();

      expect(providerOptions?.openai?.reasoningEffort).toBe("high");
    });

    it("applies reasoning for provider-namespaced model IDs", async () => {
      mockUsePluginContext.mockReturnValue(
        createPluginConfig({
          reasoningEffort: "medium",
          providers: {
            openai: {
              model: "openai/gpt-5.4-mini",
              hasApiKey: true,
              api: "chat",
            },
          },
        }),
      );

      const { providerOptions } = await resolveLanguageModel();

      expect(providerOptions?.openai?.reasoningEffort).toBe("medium");
    });

    it("forwards explicit reasoning overrides via options for cross-provider gateways", async () => {
      mockUsePluginContext.mockReturnValue(
        createPluginConfig({
          reasoningEffort: "medium",
          providers: {
            openai: {
              model: "google-ai-studio/gemini-2.5-flash",
              hasApiKey: true,
              api: "chat",
              options: { reasoningEffort: "high" },
            },
          },
        }),
      );

      const { providerOptions } = await resolveLanguageModel();

      expect(providerOptions?.openai?.reasoningEffort).toBe("high");
    });

    it.each([
      { effort: "none", expected: "none" },
      { effort: "low", expected: "high" },
      { effort: "medium", expected: "high" },
      { effort: "high", expected: "high" },
    ] as const)(
      "folds Mistral $effort effort to $expected",
      async ({ effort, expected }) => {
        mockUsePluginContext.mockReturnValue(
          createPluginConfig({
            provider: "mistral",
            reasoningEffort: effort,
            providers: {
              mistral: {
                model: "mistral-small-latest",
                hasApiKey: true,
              },
            },
          }),
        );

        const { providerOptions } = await resolveLanguageModel();

        expect(providerOptions?.mistral).toEqual({ reasoningEffort: expected });
      },
    );

    const undefinedProviderOptionsCases: ReadonlyArray<{
      name: string;
      config: Partial<PluginConfigSubset>;
    }> = [
      {
        name: "adaptive model at effort `none`",
        config: {
          provider: "anthropic",
          reasoningEffort: "none",
          providers: {
            anthropic: { model: "claude-opus-4-7", hasApiKey: true },
          },
        },
      },
      {
        name: "model without reasoning support",
        config: {
          providers: {
            openai: { model: "gpt-4o-mini", hasApiKey: true },
          },
        },
      },
      {
        name: "cross-provider namespaced model ID",
        config: {
          reasoningEffort: "medium",
          providers: {
            openai: {
              model: "google-ai-studio/gemini-2.5-flash",
              hasApiKey: true,
              api: "chat",
            },
          },
        },
      },
      {
        name: "namespaced non-reasoning model",
        config: {
          reasoningEffort: "medium",
          providers: {
            openai: {
              model: "openai/gpt-4o-mini",
              hasApiKey: true,
              api: "chat",
            },
          },
        },
      },
    ];

    it.each(undefinedProviderOptionsCases)(
      "providerOptions is undefined: $name",
      async ({ config }) => {
        mockUsePluginContext.mockReturnValue(createPluginConfig(config));

        const { providerOptions } = await resolveLanguageModel();

        expect(providerOptions).toBeUndefined();
      },
    );
  });

  // eslint-disable-next-line test/prefer-lowercase-title
  describe("OpenAI API variant", () => {
    it("uses chat() when providers.openai.api is 'chat'", async () => {
      const chatSpy = vi.fn(() => createMockModel());
      const languageModelSpy = vi.fn(() => createMockModel());
      mockCreateOpenAI.mockReturnValue({
        languageModel: languageModelSpy,
        chat: chatSpy,
      });

      mockUsePluginContext.mockReturnValue(
        createPluginConfig({
          providers: {
            openai: {
              model: "gpt-5.4-nano",
              hasApiKey: true,
              api: "chat",
            },
          },
        }),
      );

      await resolveLanguageModel();

      expect(chatSpy).toHaveBeenCalledWith("gpt-5.4-nano");
      expect(languageModelSpy).not.toHaveBeenCalled();
    });
  });

  describe("error handling", () => {
    it("throws CopilotError for unsupported provider", async () => {
      mockUsePluginContext.mockReturnValue(
        createPluginConfig({ provider: "invalid-provider" }),
      );

      const error = await resolveLanguageModel().catch((e) => e);

      expect(error).toBeInstanceOf(CopilotError);
      expect(error.message).toMatch(/Unsupported provider/);
    });

    it("throws CopilotError when API key is missing", async () => {
      mockUsePluginContext.mockReturnValue(
        createPluginConfig({
          providers: { openai: { model: "gpt-5.4-nano", hasApiKey: false } },
        }),
      );

      const error = await resolveLanguageModel().catch((e) => e);

      expect(error).toBeInstanceOf(CopilotError);
      expect(error.message).toMatch(/Missing API key/);
    });

    it("throws CopilotError with provider name when model is not configured", async () => {
      mockUsePluginContext.mockReturnValue(
        createPluginConfig({
          providers: { openai: { model: undefined, hasApiKey: true } },
        }),
      );

      const error = await resolveLanguageModel().catch((e) => e);

      expect(error).toBeInstanceOf(CopilotError);
      expect(error.message).toMatch(/Missing.*model/);
      expect(error.message).toMatch(/openai/);
    });
  });
});

describe("resolvePromptContext", () => {
  beforeEach(() => {
    mockPagesGet.mockReset();
  });

  describe("prompt processing", () => {
    it("returns the user prompt unchanged when no template variables", async () => {
      const { userPromptWithContext } = await resolvePromptContext({
        userPrompt: "Simple prompt without variables",
      });

      expect(userPromptWithContext).toBe("Simple prompt without variables");
    });

    it("renders template variables in user prompt", async () => {
      const { userPromptWithContext } = await resolvePromptContext({
        userPrompt: "Page title: {title}",
      });

      expect(userPromptWithContext).toContain("Test");
    });
  });

  describe("image processing", () => {
    it("converts images to byte arrays", async () => {
      const imageFile = new File(["image-data"], "test.png", {
        type: "image/png",
      });

      const { imageByteArrays } = await resolvePromptContext({
        userPrompt: "Test",
        files: [imageFile],
      });

      expect(imageByteArrays).toHaveLength(1);
      expect(imageByteArrays[0]).toBeInstanceOf(Uint8Array);
    });

    it("filters out non-image files from imageByteArrays", async () => {
      const files = [
        new File(["img"], "test.png", { type: "image/png" }),
        new File(["text"], "doc.txt", { type: "text/plain" }),
      ];

      const { imageByteArrays } = await resolvePromptContext({
        userPrompt: "Test",
        files,
      });

      expect(imageByteArrays).toHaveLength(1);
    });
  });

  describe("page IDs", () => {
    it("appends reference_page blocks with fetched page content", async () => {
      mockPagesGet.mockResolvedValue({
        title: "About",
        content: { headline: "About Us", body: "We are great" },
      });

      const { userPromptWithContext } = await resolvePromptContext({
        userPrompt: "Summarize @page://about",
      });

      expect(userPromptWithContext).toMatchInlineSnapshot(`
        "Summarize @page://about

        <reference_page id="about">
        {"title":"About","headline":"About Us","body":"We are great"}
        </reference_page>"
      `);
    });

  });

  describe("mixed file handling", () => {
    it("separates images and PDFs correctly", async () => {
      const files = [
        new File(["img"], "test.png", { type: "image/png" }),
        new File(["pdf"], "doc.pdf", { type: "application/pdf" }),
      ];

      const { imageByteArrays, pdfByteArrays } = await resolvePromptContext({
        userPrompt: "Test",
        files,
      });

      expect(imageByteArrays).toHaveLength(1);
      expect(pdfByteArrays).toHaveLength(1);
    });
  });

  describe("skills", () => {
    beforeEach(() => {
      useSkills().setConfigSkills([
        {
          id: "brand-voice",
          label: "Brand Voice",
          instructions: "Write casually.",
        },
        {
          id: "be-brief",
          label: "Be Brief",
          instructions: "Cut every unnecessary word.",
        },
      ]);
    });

    it("wraps tokens found in the prompt with the human label as attribute", async () => {
      const { systemPromptWithContext } = await resolvePromptContext({
        userPrompt: "Write a headline @skill://brand-voice",
        systemPrompt: "You are a writer.",
      });

      expect(systemPromptWithContext).toContain(
        `<skill name="Brand Voice">\nWrite casually.\n</skill>`,
      );
    });

    it("escapes quotes, ampersands, and angle brackets in the label attribute", async () => {
      useSkills().setConfigSkills([
        {
          id: "tricky",
          label: `Wörter & "Sätze" <case>`,
          instructions: "Do things.",
        },
      ]);

      const { systemPromptWithContext } = await resolvePromptContext({
        userPrompt: "Write @skill://tricky",
      });

      expect(systemPromptWithContext).toContain(
        `<skill name="Wörter &amp; &quot;Sätze&quot; &lt;case&gt;">\nDo things.\n</skill>`,
      );
    });

    it("strips `@skill://id` tokens from the user prompt", async () => {
      const { userPromptWithContext } = await resolvePromptContext({
        userPrompt: "Write a headline @skill://brand-voice about Kirby.",
      });

      expect(userPromptWithContext).toBe("Write a headline about Kirby.");
    });

    it.each([
      {
        position: "inline (trailing whitespace)",
        userPrompt: "Foo @skill://brand-voice @skill://be-brief bar",
      },
      {
        position: "start and end of prompt",
        userPrompt: "@skill://brand-voice Foo bar @skill://be-brief",
      },
    ])(
      "collapses stripped tokens $position to `Foo bar`",
      async ({ userPrompt }) => {
        const { userPromptWithContext } = await resolvePromptContext({
          userPrompt,
        });

        expect(userPromptWithContext).toBe("Foo bar");
      },
    );

    it("strips only horizontal whitespace after the token, leaving newlines", async () => {
      const { userPromptWithContext } = await resolvePromptContext({
        userPrompt: "First line\n@skill://brand-voice\nSecond line",
      });

      expect(userPromptWithContext).toBe("First line\n\nSecond line");
    });

    it("joins multiple skill blocks with the system prompt using blank lines", async () => {
      const { systemPromptWithContext } = await resolvePromptContext({
        userPrompt: "@skill://brand-voice @skill://be-brief write a headline",
        systemPrompt: "You are a writer.",
      });

      expect(systemPromptWithContext).toBe(
        [
          "You are a writer.",
          `<skill name="Brand Voice">\nWrite casually.\n</skill>`,
          `<skill name="Be Brief">\nCut every unnecessary word.\n</skill>`,
        ].join("\n\n"),
      );
    });

    it("returns skill blocks as system prompt when no base prompt is set", async () => {
      const { systemPromptWithContext } = await resolvePromptContext({
        userPrompt: "Write @skill://brand-voice",
      });

      expect(systemPromptWithContext).toBe(
        `<skill name="Brand Voice">\nWrite casually.\n</skill>`,
      );
    });

    it("strips unknown token ids from the user prompt and drops them from the system prompt", async () => {
      useSkills().setConfigSkills([]);

      const { systemPromptWithContext, userPromptWithContext } =
        await resolvePromptContext({
          userPrompt: "Write @skill://typo something",
        });

      expect(systemPromptWithContext).toBeUndefined();
      expect(userPromptWithContext).toBe("Write something");
    });

    it("returns undefined systemPrompt when no tokens and no base prompt", async () => {
      const { systemPromptWithContext } = await resolvePromptContext({
        userPrompt: "Write a headline",
      });

      expect(systemPromptWithContext).toBeUndefined();
    });

    it("passes the base system prompt through unchanged when no tokens match", async () => {
      const { systemPromptWithContext } = await resolvePromptContext({
        userPrompt: "Write a headline",
        systemPrompt: "You are a writer.",
      });

      expect(systemPromptWithContext).toBe("You are a writer.");
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
