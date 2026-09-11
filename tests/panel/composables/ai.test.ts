import type { PluginConfig } from "../../../src/panel/types";
import { simulateReadableStream } from "ai";
import { MockLanguageModelV4 } from "ai/test";
import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  resolveEditorPrompt,
  resolveLanguageModel,
  resolvePromptContext,
  useStreamText,
} from "../../../src/panel/composables/ai";
import { CopilotError } from "../../../src/panel/utils/error";

const mockPagesGet = vi.fn();
const defaultContent = { title: "Test", body: "Content" };
let mockCurrentContent: Record<string, unknown> = defaultContent;

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
      currentContent: { value: mockCurrentContent },
    }),
  };
});

vi.mock("../../../src/panel/utils/image", () => ({
  toReducedBlob: (file: File) => Promise.resolve(file),
}));

const mockStreamText = vi.fn();
const mockSmoothStream = vi.fn((_options: { chunking: unknown }) => vi.fn());
const mockOutputObject = vi.fn();

const createMockProvider = () => ({
  languageModel: () =>
    new MockLanguageModelV4({
      doStream: async () => ({
        stream: simulateReadableStream({ chunks: [] }),
      }),
    }),
  chat: () =>
    new MockLanguageModelV4({
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
      Output: { object: mockOutputObject },
      AISDKError: { isInstance: () => false },
      createOpenAI: mockCreateOpenAI,
      createAnthropic: mockCreateAnthropic,
      createGoogle: mockCreateGoogle,
      createMistral: mockCreateMistral,
    }),
}));

const mockUsePluginContext = vi.fn();

vi.mock("../../../src/panel/composables/plugin", () => ({
  usePluginContext: () => mockUsePluginContext(),
}));

type PluginConfigSubset = Pick<
  PluginConfig,
  "provider" | "providers" | "reasoningEffort" | "skills"
>;

function createPluginConfig(
  overrides?: Partial<PluginConfigSubset>,
): Promise<{ config: PluginConfigSubset }> {
  return Promise.resolve({
    config: {
      provider: overrides?.provider ?? "openai",
      reasoningEffort: overrides?.reasoningEffort,
      skills: overrides?.skills,
      providers: {
        openai: { model: "gpt-5.4-nano", hasApiKey: true },
        ...overrides?.providers,
      },
    },
  });
}

const mockLogger = { info: vi.fn(), error: vi.fn(), warn: vi.fn() };

vi.mock("../../../src/panel/composables/logger", () => ({
  useLogger: () => mockLogger,
}));

beforeEach(() => {
  vi.clearAllMocks();
  mockCurrentContent = defaultContent;
  mockUsePluginContext.mockReturnValue(createPluginConfig());
});

describe("useStreamText", () => {
  describe("prompt", () => {
    it("passes system and user prompts to streamText", async () => {
      mockStreamText.mockResolvedValue({ textStream: null });

      await useStreamText({
        userPrompt: "Hello",
        systemPrompt: "Be helpful",
      });

      expect(mockStreamText).toHaveBeenCalledWith(
        expect.objectContaining({
          instructions: "Be helpful",
          prompt: "Hello",
        }),
      );
    });

    it("omits system prompt when not provided", async () => {
      mockStreamText.mockResolvedValue({ textStream: null });

      await useStreamText({ userPrompt: "Hello" });

      const call = mockStreamText.mock.calls[0]?.[0];
      expect(call?.instructions).toBeUndefined();
    });

    it("sends userPrompt as is, even with a responseFormat", async () => {
      mockStreamText.mockResolvedValue({ textStream: null });

      await useStreamText({
        userPrompt: "Summarize {title} @page://about @skill://brand-voice",
        responseFormat: "markdown",
      });

      expect(mockStreamText).toHaveBeenCalledWith(
        expect.objectContaining({
          prompt: "Summarize {title} @page://about @skill://brand-voice",
        }),
      );
    });
  });

  describe("reasoning", () => {
    it("passes the resolved reasoning effort through to streamText", async () => {
      mockStreamText.mockResolvedValue({ textStream: null });
      mockUsePluginContext.mockReturnValue(
        createPluginConfig({ reasoningEffort: "medium" }),
      );

      await useStreamText({ userPrompt: "Hello" });

      expect(mockStreamText).toHaveBeenCalledWith(
        expect.objectContaining({ reasoning: "medium" }),
      );
    });
  });

  describe("explicit model override", () => {
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

    it("builds structured output from a plain outputSchema for third-party callers", async () => {
      mockStreamText.mockResolvedValue({ textStream: null });
      const schema = { type: "object" };
      const builtOutput = { responseFormat: "json" };
      mockOutputObject.mockReturnValue(builtOutput);

      await useStreamText({
        userPrompt: "Test",
        outputSchema: schema as never,
      });

      expect(mockOutputObject).toHaveBeenCalledWith({ schema });
      expect(mockSmoothStream).not.toHaveBeenCalled();
      expect(mockStreamText).toHaveBeenCalledWith(
        expect.objectContaining({ output: builtOutput }),
      );
    });
  });

  describe("provider warnings", () => {
    it("logs warnings the SDK emits when settings are coerced or unsupported", async () => {
      const warnings = [{ type: "unsupported", feature: "reasoning" }];
      mockStreamText.mockResolvedValue({
        textStream: null,
        warnings: Promise.resolve(warnings),
      });

      await useStreamText({ userPrompt: "Hello" });

      await vi.waitFor(() => {
        expect(mockLogger.warn).toHaveBeenCalledWith(
          expect.stringContaining("warnings"),
          warnings,
        );
      });
    });

    it("stays silent when the SDK reports no warnings", async () => {
      mockStreamText.mockResolvedValue({
        textStream: null,
        warnings: Promise.resolve([]),
      });

      await useStreamText({ userPrompt: "Hello" });
      await Promise.resolve();

      expect(mockLogger.warn).not.toHaveBeenCalled();
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
                expect.objectContaining({ type: "file", mediaType: "image" }),
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
          completionModel: "google-ai-studio/gemini-3.5-flash",
          hasApiKey: true,
        },
        expected: "google-ai-studio/gemini-3.5-flash",
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

  describe("provider resolution", () => {
    it.each([
      ["openai", mockCreateOpenAI, "gpt-5.4-nano"],
      ["anthropic", mockCreateAnthropic, "claude-haiku-4-5"],
      ["google", mockCreateGoogle, "gemini-3.5-flash"],
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

  describe("reasoning and provider options", () => {
    it("passes the configured effort as top-level reasoning without provider-specific shapes", async () => {
      mockUsePluginContext.mockReturnValue(
        createPluginConfig({
          provider: "anthropic",
          reasoningEffort: "high",
          providers: {
            anthropic: {
              model: "claude-haiku-4-5",
              hasApiKey: true,
            },
          },
        }),
      );

      const { reasoning, providerOptions } = await resolveLanguageModel();

      expect(reasoning).toBe("high");
      expect(providerOptions).toBeUndefined();
    });

    it("applies the default effort and disables reasoning for completions", async () => {
      const { reasoning } = await resolveLanguageModel();
      const { reasoning: completionReasoning } = await resolveLanguageModel({
        forCompletion: true,
      });

      expect(reasoning).toBe("low");
      expect(completionReasoning).toBe("none");
    });

    it("keeps providerConfig.options as the providerOptions escape hatch", async () => {
      mockUsePluginContext.mockReturnValue(
        createPluginConfig({
          providers: {
            openai: {
              model: "gpt-5",
              hasApiKey: true,
              options: { parallelToolCalls: false },
            },
          },
        }),
      );

      const { providerOptions } = await resolveLanguageModel();

      expect(providerOptions?.openai).toEqual({ parallelToolCalls: false });
    });
  });

  // eslint-disable-next-line test/prefer-lowercase-title
  describe("OpenAI API variant", () => {
    it("uses chat() when providers.openai.api is `chat`", async () => {
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

  describe("upstream failure handling", () => {
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

  it("sorts images into imageByteArrays and PDFs into pdfByteArrays", async () => {
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

describe("resolveEditorPrompt", () => {
  beforeEach(() => {
    mockPagesGet.mockReset();
  });

  describe("placeholders", () => {
    it("returns the user prompt unchanged when no template variables", async () => {
      const { userPrompt } = await resolveEditorPrompt({
        userPrompt: "Simple prompt without variables",
      });

      expect(userPrompt).toBe("Simple prompt without variables");
    });

    it("renders template variables in user prompt", async () => {
      const { userPrompt } = await resolveEditorPrompt({
        userPrompt: "Page title: {title}",
      });

      expect(userPrompt).toBe("Page title: Test Page");
    });

    it("resolves {Title} like {title}", async () => {
      const { userPrompt } = await resolveEditorPrompt({
        userPrompt: "Page title: {Title}",
      });

      expect(userPrompt).toBe("Page title: Test Page");
    });

    it("lowercases an unmatched {Name} to {name}", async () => {
      const { userPrompt } = await resolveEditorPrompt({
        userPrompt: "Greet {Name}",
      });

      expect(userPrompt).toBe("Greet {name}");
    });

    it("keeps a placeholder without a matching field in braces", async () => {
      const { userPrompt } = await resolveEditorPrompt({
        userPrompt: "Use {0}, {count} and {{x}} for {title}",
      });

      expect(userPrompt).toBe("Use {0}, {count} and {{x}} for Test Page");
    });
  });

  describe("selection and response format", () => {
    it("prepends responseFormat as a <response_format> block", async () => {
      const { userPrompt } = await resolveEditorPrompt({
        userPrompt: "Write something",
        responseFormat: "markdown",
      });

      expect(userPrompt).toBe(
        "<response_format>markdown</response_format>\n\nWrite something",
      );
    });

    it("prepends the selection as a <selection> block", async () => {
      const { userPrompt } = await resolveEditorPrompt({
        userPrompt: "Edit this",
        selection: "selected text",
      });

      expect(userPrompt).toBe(
        "<selection>\nselected text\n</selection>\n\nEdit this",
      );
    });

    it("leaves out an empty selection", async () => {
      const { userPrompt } = await resolveEditorPrompt({
        userPrompt: "Edit this",
        selection: "",
      });

      expect(userPrompt).toBe("Edit this");
    });
  });

  describe("resolution scope", () => {
    const literalText =
      "Use {0} and {count} for {{x}}, {Name}, @page://about and @skill://brand-voice.";

    beforeEach(() => {
      mockUsePluginContext.mockReturnValue(
        createPluginConfig({
          skills: [
            {
              id: "brand-voice",
              label: "Brand Voice",
              instructions: "Write casually.",
            },
          ],
        }),
      );
    });

    it("keeps the selection as is next to the resolved prompt", async () => {
      const { systemPrompt, userPrompt } = await resolveEditorPrompt({
        userPrompt: "Improve the text for {title}",
        selection: literalText,
        responseFormat: "text",
      });

      expect(userPrompt).toBe(
        `<response_format>text</response_format>\n\n<selection>\n${literalText}\n</selection>\n\nImprove the text for Test Page`,
      );
      expect(systemPrompt).toBeUndefined();
      expect(mockPagesGet).not.toHaveBeenCalled();
    });

    it("resolves no reference token or placeholder inside a placeholder's value", async () => {
      mockCurrentContent = { body: literalText };

      const { systemPrompt, userPrompt } = await resolveEditorPrompt({
        userPrompt: "Summarize {body}",
      });

      expect(userPrompt).toBe(`Summarize ${literalText}`);
      expect(systemPrompt).toBeUndefined();
      expect(mockPagesGet).not.toHaveBeenCalled();
    });
  });

  describe("page references", () => {
    it("appends reference_page blocks with fetched page content", async () => {
      mockPagesGet.mockResolvedValue({
        title: "About",
        content: { headline: "About Us", body: "We are great" },
      });

      const { userPrompt } = await resolveEditorPrompt({
        userPrompt: "Summarize @page://about",
      });

      expect(userPrompt).toMatchInlineSnapshot(`
        "Summarize @page://about

        <reference_page id="about">
        {"title":"About","headline":"About Us","body":"We are great"}
        </reference_page>"
      `);
    });

    it("warns about an unreadable reference and leaves it out of the context", async () => {
      mockPagesGet.mockRejectedValue(new Error("Not found"));

      const { userPrompt } = await resolveEditorPrompt({
        userPrompt: "Summarize @page://gone",
      });

      expect(userPrompt).toBe("Summarize @page://gone");
      expect(mockLogger.warn).toHaveBeenCalledWith(
        expect.stringContaining("gone"),
      );
    });

    it("does not warn when every reference resolves", async () => {
      mockPagesGet.mockResolvedValue({ title: "About", content: {} });

      await resolveEditorPrompt({ userPrompt: "Summarize @page://about" });

      expect(mockLogger.warn).not.toHaveBeenCalled();
    });
  });

  describe("skills", () => {
    beforeEach(() => {
      mockUsePluginContext.mockReturnValue(
        createPluginConfig({
          skills: [
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
          ],
        }),
      );
    });

    it("wraps tokens found in the prompt with the human label as attribute", async () => {
      const { systemPrompt } = await resolveEditorPrompt({
        userPrompt: "Write a headline @skill://brand-voice",
        systemPrompt: "You are a writer.",
      });

      expect(systemPrompt).toContain(
        `<skill name="Brand Voice">\nWrite casually.\n</skill>`,
      );
    });

    it("escapes quotes, ampersands, and angle brackets in the label attribute", async () => {
      mockUsePluginContext.mockReturnValue(
        createPluginConfig({
          skills: [
            {
              id: "tricky",
              label: `Wörter & "Sätze" <case>`,
              instructions: "Do things.",
            },
          ],
        }),
      );

      const { systemPrompt } = await resolveEditorPrompt({
        userPrompt: "Write @skill://tricky",
      });

      expect(systemPrompt).toContain(
        `<skill name="Wörter &amp; &quot;Sätze&quot; &lt;case&gt;">\nDo things.\n</skill>`,
      );
    });

    it("strips @skill://id tokens from the user prompt", async () => {
      const { userPrompt } = await resolveEditorPrompt({
        userPrompt: "Write a headline @skill://brand-voice about Kirby.",
      });

      expect(userPrompt).toBe("Write a headline about Kirby.");
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
      "collapses stripped tokens $position to Foo bar",
      async ({ userPrompt: prompt }) => {
        const { userPrompt } = await resolveEditorPrompt({
          userPrompt: prompt,
        });

        expect(userPrompt).toBe("Foo bar");
      },
    );

    it("strips only horizontal whitespace after the token, leaving newlines", async () => {
      const { userPrompt } = await resolveEditorPrompt({
        userPrompt: "First line\n@skill://brand-voice\nSecond line",
      });

      expect(userPrompt).toBe("First line\n\nSecond line");
    });

    it("joins multiple skill blocks with the system prompt using blank lines", async () => {
      const { systemPrompt } = await resolveEditorPrompt({
        userPrompt: "@skill://brand-voice @skill://be-brief write a headline",
        systemPrompt: "You are a writer.",
      });

      expect(systemPrompt).toBe(
        [
          "You are a writer.",
          `<skill name="Brand Voice">\nWrite casually.\n</skill>`,
          `<skill name="Be Brief">\nCut every unnecessary word.\n</skill>`,
        ].join("\n\n"),
      );
    });

    it("returns skill blocks as system prompt when no base prompt is set", async () => {
      const { systemPrompt } = await resolveEditorPrompt({
        userPrompt: "Write @skill://brand-voice",
      });

      expect(systemPrompt).toBe(
        `<skill name="Brand Voice">\nWrite casually.\n</skill>`,
      );
    });

    it("strips skill tokens while retaining page tokens when both share a prompt", async () => {
      mockPagesGet.mockResolvedValue({
        title: "About",
        content: { body: "We are great" },
      });

      const { systemPrompt, userPrompt } = await resolveEditorPrompt({
        userPrompt: "@skill://brand-voice Summarize @page://about",
      });

      expect(systemPrompt).toBe(
        `<skill name="Brand Voice">\nWrite casually.\n</skill>`,
      );
      expect(userPrompt).toBe(
        `Summarize @page://about\n\n<reference_page id="about">\n{"title":"About","body":"We are great"}\n</reference_page>`,
      );
    });

    it("strips unknown token ids from the user prompt and drops them from the system prompt", async () => {
      mockUsePluginContext.mockReturnValue(createPluginConfig());

      const { systemPrompt, userPrompt } = await resolveEditorPrompt({
        userPrompt: "Write @skill://typo something",
      });

      expect(systemPrompt).toBeUndefined();
      expect(userPrompt).toBe("Write something");
    });

    it("dedupes unknown token ids into a single warning", async () => {
      await resolveEditorPrompt({
        userPrompt: "Write @skill://typo @skill://typo @skill://gone",
      });

      expect(mockLogger.warn).toHaveBeenCalledTimes(1);
      expect(mockLogger.warn).toHaveBeenCalledWith(
        expect.stringContaining("typo, gone"),
      );
    });

    it("does not warn when every token id is configured", async () => {
      await resolveEditorPrompt({
        userPrompt: "Write @skill://brand-voice something",
      });

      expect(mockLogger.warn).not.toHaveBeenCalled();
    });

    it("returns undefined systemPrompt when no tokens and no base prompt", async () => {
      const { systemPrompt } = await resolveEditorPrompt({
        userPrompt: "Write a headline",
      });

      expect(systemPrompt).toBeUndefined();
    });

    it("passes the base system prompt through unchanged when no tokens match", async () => {
      const { systemPrompt } = await resolveEditorPrompt({
        userPrompt: "Write a headline",
        systemPrompt: "You are a writer.",
      });

      expect(systemPrompt).toBe("You are a writer.");
    });
  });
});

function createMockModel() {
  return new MockLanguageModelV4({
    doStream: async () => ({
      stream: simulateReadableStream({ chunks: [] }),
    }),
  });
}
