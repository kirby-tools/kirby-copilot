import type { OpenAIProvider } from "@ai-sdk/openai";
import type {
  LanguageModelV3,
  SharedV3ProviderOptions,
} from "@ai-sdk/provider";
import type { Output as OutputNamespace } from "ai";
import type { LogLevel } from "kirbyuse";
import type { ModelProvider, ReasoningEffort } from "../constants";
import type { OutputFormat, ProviderConfig } from "../types";
import { useContent, usePanel } from "kirbyuse";
import { isObject, template } from "utilful";
import {
  DEFAULT_COMPLETION_MODELS,
  DEFAULT_REASONING_EFFORT,
  PDF_SIZE_LIMIT,
  PLUGIN_PROXY_API_ROUTE,
  PROVIDER_REASONING_MAP,
  PROXY_API_KEY_MARKER,
  STORAGE_KEY_PREFIX,
  SUPPORTED_PROVIDERS,
} from "../constants";
import { loadAISDK } from "../utils/ai";
import {
  createContentContext,
  createReferencePageContent,
} from "../utils/content";
import { CopilotError } from "../utils/error";
import { toReducedBlob } from "../utils/image";
import { createHtmlChunking, supportsReasoning } from "../utils/models";
import { extractTextFromPdf } from "../utils/pdf";
import { normalizePlaceholders } from "../utils/template";
import { useLogger } from "./logger";
import { usePluginContext } from "./plugin";

const DEFAULT_PLAYGROUND_MODEL_PROVIDER = "google";
const PLAYGROUND_PROVIDER_MODEL_MAP: Record<string, string> = {
  openai: "openaimodel",
  google: "googlemodel",
  anthropic: "anthropicmodel",
};

/**
 * Streams text from an AI provider using the configured model.
 */
export async function useStreamText({
  userPrompt,
  systemPrompt,
  output,
  responseFormat,
  files = [],
  pageIds = [],
  logLevel = 1,
  abortSignal,
  model: injectedModel,
  providerOptions: injectedProviderOptions,
}: {
  userPrompt: string;
  systemPrompt?: string;
  output?: OutputNamespace.Output;
  responseFormat?: OutputFormat;
  files?: File[];
  pageIds?: string[];
  logLevel?: LogLevel;
  abortSignal?: AbortSignal;
  /** Inject a language model directly (useful for testing). */
  model?: LanguageModelV3;
  /** Inject provider options directly (useful for testing). */
  providerOptions?: SharedV3ProviderOptions;
}) {
  const logger = useLogger();

  const { model, providerOptions } = injectedModel
    ? { model: injectedModel, providerOptions: injectedProviderOptions }
    : await resolveLanguageModel();

  if (import.meta.env.DEV) {
    logLevel = 3;
  }

  const { AISDKError, streamText, smoothStream } = await loadAISDK();

  const { userPromptWithContext, imageByteArrays, pdfByteArrays } =
    await resolvePromptContext({
      userPrompt,
      files,
      pageIds,
    });

  if (logLevel > 1) {
    logger.info("System prompt:", systemPrompt);
    logger.info("User prompt:", userPromptWithContext);
  }

  const hasFiles = imageByteArrays.length > 0 || pdfByteArrays.length > 0;

  return streamText({
    model,
    providerOptions,
    output,
    system: systemPrompt || undefined,
    ...(hasFiles
      ? {
          messages: [
            {
              role: "user" as const,
              content: [
                { type: "text" as const, text: userPromptWithContext },
                ...imageByteArrays.map((image) => ({
                  type: "image" as const,
                  image,
                })),
                ...pdfByteArrays.map((data) => ({
                  type: "file" as const,
                  data,
                  mediaType: "application/pdf" as const,
                })),
              ],
            },
          ],
        }
      : {
          prompt: userPromptWithContext,
        }),
    ...(!output && {
      experimental_transform: smoothStream({
        chunking:
          responseFormat === "rich-text" ? createHtmlChunking() : "line",
      }),
    }),
    abortSignal,
    onError({ error }) {
      if (AISDKError.isInstance(error)) {
        throw error;
      }

      console.error("Unexpected error during text streaming:", error);
    },
  });
}

/**
 * Resolves the language model and provider options for the configured AI provider.
 */
export async function resolveLanguageModel({
  forCompletion = false,
}: {
  forCompletion?: boolean;
} = {}) {
  const panel = usePanel();
  let { config } = await usePluginContext();

  const isPlayground =
    __PLAYGROUND__ && !window.location.hostname.includes("localhost");

  if (!forCompletion && isPlayground) {
    config = JSON.parse(JSON.stringify(config));
    const { currentContent } = useContent();

    const selectedProvider =
      currentContent.value.modelprovider || DEFAULT_PLAYGROUND_MODEL_PROVIDER;
    config.provider = selectedProvider;

    const modelField = PLAYGROUND_PROVIDER_MODEL_MAP[selectedProvider];
    const selectedModel = modelField
      ? currentContent.value[modelField]
      : undefined;

    if (selectedModel) {
      config.providers[selectedProvider] ??= {};
      config.providers[selectedProvider]!.model = selectedModel;
    }
  }

  if (
    !config.provider ||
    !SUPPORTED_PROVIDERS.includes(config.provider as ModelProvider)
  ) {
    throw new CopilotError(
      `Unsupported provider "${config.provider}". Supported providers: ${SUPPORTED_PROVIDERS.join(", ")}. Check "johannschopplich.copilot.provider" in your Kirby config.`,
    );
  }

  const {
    createAnthropic,
    createGoogleGenerativeAI,
    createMistral,
    createOpenAI,
  } = await loadAISDK();

  const provider = config.provider as ModelProvider;
  const providerConfig = config.providers[provider] ?? {};

  /// keep-sorted
  const createProvider = {
    anthropic: createAnthropic,
    google: createGoogleGenerativeAI,
    mistral: createMistral,
    openai: createOpenAI,
  }[provider]!;

  // Validate API key is configured on the server when using proxy
  if (!isPlayground && !providerConfig.hasApiKey) {
    throw new CopilotError(
      `Missing API key for the "${provider}" provider. Add "apiKey" to "johannschopplich.copilot.providers.${provider}" in your Kirby config.`,
    );
  }

  // Create custom fetch that routes through PHP proxy
  const proxyFetch: typeof globalThis.fetch = (url, options) =>
    fetch(
      `${panel.api.endpoint}/${PLUGIN_PROXY_API_ROUTE}?provider=${provider}`,
      {
        ...options,
        credentials: "same-origin",
        headers: mergeHeaders(options?.headers, {
          "X-CSRF": panel.api.csrf,
          "X-Proxy-Target": String(url),
        }),
      },
    );

  const api = createProvider({
    baseURL: providerConfig.baseUrl || undefined,
    apiKey: !isPlayground
      ? PROXY_API_KEY_MARKER
      : (sessionStorage.getItem(`${STORAGE_KEY_PREFIX}apiKey`) ?? undefined),
    fetch: !isPlayground ? proxyFetch : undefined,
    ...(provider === "anthropic" && !isPlayground
      ? { headers: { "anthropic-dangerous-direct-browser-access": "true" } }
      : undefined),
  });

  // Model selection (different for completion)
  const modelId = forCompletion
    ? providerConfig.completionModel ||
      DEFAULT_COMPLETION_MODELS[
        provider as keyof typeof DEFAULT_COMPLETION_MODELS
      ]
    : providerConfig.model;

  if (!modelId) {
    throw new CopilotError(
      `Missing ${forCompletion ? "completionModel" : "model"} for the "${provider}" provider. Add it to "johannschopplich.copilot.providers.${provider}" in your Kirby config.`,
    );
  }

  // Support for OpenAI-compatible gateways (e.g. Cloudflare AI Gateway)
  // that don't support `/v1/responses`
  const model =
    provider === "openai" && providerConfig.api === "chat"
      ? (api as OpenAIProvider).chat(modelId)
      : api.languageModel(modelId);
  const reasoningEffort: ReasoningEffort = forCompletion
    ? "none"
    : (config.reasoningEffort ?? DEFAULT_REASONING_EFFORT);
  const providerOptions = resolveProviderOptions({
    provider,
    providerConfig,
    modelId,
    reasoningEffort,
  });

  return {
    model,
    providerOptions,
  };
}

export async function resolvePromptContext({
  userPrompt,
  files = [],
  pageIds = [],
}: {
  userPrompt: string;
  files?: File[];
  pageIds?: string[];
}) {
  const contentContext = createContentContext();
  let userPromptWithContext = template(
    normalizePlaceholders(userPrompt),
    contentContext,
  );

  // Fetch referenced pages and append their content
  const uniquePageIds = [...new Set(pageIds)];
  if (uniquePageIds.length > 0) {
    const panel = usePanel();

    const referencedPages = await Promise.all(
      uniquePageIds.map(async (requestedPageId) => ({
        requestedPageId,
        page: (await panel.api.pages.get(panel.api.pages.id(requestedPageId), {
          select: ["id", "title", "content"],
        })) as { id: string; title: string; content: Record<string, unknown> },
      })),
    );

    const pageContextBlocks = referencedPages
      .map(
        ({ requestedPageId, page }) =>
          `<reference_page id="${requestedPageId}">\n${JSON.stringify(createReferencePageContent(page))}\n</reference_page>`,
      )
      .join("\n\n");

    userPromptWithContext += `\n\n${pageContextBlocks}`;
  }

  const images = files.filter((file) => file.type.startsWith("image/"));
  const pdfs = files.filter((file) => file.type === "application/pdf");

  // Calculate total PDF size
  const totalPdfSize = pdfs.reduce((sum, pdf) => sum + pdf.size, 0);
  const hasNativePdfSupport = totalPdfSize <= PDF_SIZE_LIMIT;

  // If PDFs exceed size limit, fall back to text extraction
  if (!hasNativePdfSupport && pdfs.length > 0) {
    const pdfTexts = await Promise.all(pdfs.map(extractTextFromPdf));
    userPromptWithContext += `\n\n${pdfTexts
      .map(
        (value, index) =>
          `<pdf_document_${index + 1}>\n${value}\n</pdf_document_${index + 1}>`,
      )
      .join("\n\n")}`;
  }

  // Convert images to byte arrays
  const imageByteArrays = await Promise.all(
    images.map(async (file) => {
      const reducedBlob = await toReducedBlob(file, { maxDimension: 2048 });
      const arrayBuffer = await reducedBlob.arrayBuffer();
      return new Uint8Array(arrayBuffer);
    }),
  );

  // Convert PDFs to byte arrays if under size limit
  const pdfByteArrays = hasNativePdfSupport
    ? await Promise.all(
        pdfs.map(async (file) => {
          const arrayBuffer = await file.arrayBuffer();
          return new Uint8Array(arrayBuffer);
        }),
      )
    : [];

  return {
    userPromptWithContext,
    imageByteArrays,
    pdfByteArrays,
  };
}

function resolveProviderOptions({
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
  const reasoningValue = resolveReasoningValue({
    provider,
    modelId,
    reasoningEffort,
  });

  const providerOptions: SharedV3ProviderOptions = {
    ...(provider === "anthropic" &&
      reasoningValue && {
        anthropic: {
          thinking: {
            type: "enabled",
            budgetTokens: reasoningValue,
          },
        },
      }),
    ...(provider === "openai" &&
      reasoningValue && {
        openai: {
          reasoningEffort: reasoningValue,
        },
      }),
    ...(provider === "google" &&
      reasoningValue && {
        google: {
          thinkingConfig: {
            thinkingLevel: reasoningValue,
          },
        },
      }),
  };

  if (isObject(providerConfig.options)) {
    providerOptions[provider] = {
      ...providerOptions[provider],
      ...providerConfig.options,
    };
  }

  return Object.keys(providerOptions).length > 0 ? providerOptions : undefined;
}

function resolveReasoningValue({
  provider,
  modelId,
  reasoningEffort,
}: {
  provider: ModelProvider;
  modelId: string;
  reasoningEffort: ReasoningEffort;
}) {
  if (!supportsReasoning(modelId)) return;

  const reasoningConfig = PROVIDER_REASONING_MAP[reasoningEffort];

  return (
    reasoningConfig?.[`${provider}:${modelId}`] ?? reasoningConfig?.[provider]
  );
}

function mergeHeaders(...headers: (HeadersInit | undefined)[]) {
  return new Headers(
    headers.filter(Boolean).flatMap((h) => [...new Headers(h)]),
  );
}
