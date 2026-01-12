import type { SharedV3ProviderOptions } from "@ai-sdk/provider";
import type { Output as AIOutput } from "ai";
import type { ReasoningEffort } from "../constants";
import type { OutputFormat } from "../types";
import { useContent, usePanel } from "kirbyuse";
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
import {
  CopilotError,
  createContentContext,
  createHtmlChunking,
  extractTextFromPdf,
  loadAISDK,
  renderTemplate,
  supportsReasoning,
  toReducedBlob,
} from "../utils";
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
  logLevel = 1,
  abortSignal,
}: {
  userPrompt: string;
  systemPrompt?: string;
  output?: AIOutput.Output;
  responseFormat?: OutputFormat;
  files?: File[];
  logLevel?: number;
  abortSignal?: AbortSignal;
}) {
  const logger = useLogger();
  const { model, providerOptions } = await resolveLanguageModel();

  if (import.meta.env.DEV) {
    logLevel = 3;
  }

  const { AISDKError, streamText, smoothStream } = await loadAISDK();

  const { userPromptWithContext, imageByteArrays, pdfByteArrays } =
    await resolveAttachments({
      userPrompt,
      files,
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

  if (!config.provider || !SUPPORTED_PROVIDERS.includes(config.provider)) {
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

  const provider = config.provider;
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
  const proxyFetch = (url: string | URL | Request, options?: RequestInit) =>
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

  const model = api.languageModel(modelId);
  const reasoningEffort: ReasoningEffort = forCompletion
    ? "none"
    : (config.reasoningEffort ?? DEFAULT_REASONING_EFFORT);
  const reasoningConfig = PROVIDER_REASONING_MAP[reasoningEffort];

  // Get reasoning value with model-specific override support
  const reasoningValue = supportsReasoning(modelId)
    ? (reasoningConfig?.[`${provider}:${modelId}`] ??
      reasoningConfig?.[provider])
    : undefined;

  const providerOptions: SharedV3ProviderOptions = {
    // Enable reasoning for Anthropic models
    ...(provider === "anthropic" &&
      reasoningValue && {
        anthropic: {
          thinking: {
            type: "enabled",
            budgetTokens: reasoningValue,
          },
        },
      }),
    // Set reasoning effort for OpenAI models
    ...(provider === "openai" &&
      reasoningValue && {
        openai: {
          reasoningEffort: reasoningValue,
        },
      }),
    // Set thinking level for Google models
    ...(provider === "google" &&
      reasoningValue && {
        google: {
          thinkingConfig: {
            thinkingLevel: reasoningValue,
          },
        },
      }),
    // Note: Mistral magistral models have built-in reasoning with no configurable
    // effort level. Reasoning is always enabled for magistral models and outputs
    // <think> tags automatically.
  };

  // Merge custom provider options (takes precedence)
  if (
    typeof providerConfig.options === "object" &&
    providerConfig.options !== null
  ) {
    providerOptions[provider] = {
      ...providerOptions[provider],
      ...providerConfig.options,
    };
  }

  return {
    model,
    providerOptions:
      Object.keys(providerOptions).length > 0 ? providerOptions : undefined,
  };
}

async function resolveAttachments({
  userPrompt,
  files = [],
}: {
  userPrompt: string;
  files?: File[];
}) {
  const contentContext = createContentContext();
  let userPromptWithContext = renderTemplate(userPrompt, contentContext);

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

function mergeHeaders(...headers: (HeadersInit | undefined)[]) {
  return new Headers(
    headers.filter(Boolean).flatMap((h) => [...new Headers(h)]),
  );
}
