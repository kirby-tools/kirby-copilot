import { loadPluginModule, useContent } from "kirbyuse";
import {
  DEFAULT_REASONING_EFFORT,
  PDF_SIZE_LIMIT,
  PROVIDER_REASONING_MAP,
  STORAGE_KEY_PREFIX,
  SUPPORTED_PROVIDERS,
} from "../constants";
import { CopilotError } from "../utils/error";
import { extractTextFromPdf } from "../utils/pdf";
import { renderTemplate } from "../utils/template";
import { toReducedBlob } from "../utils/upload";
import { createContentContext } from "./content";
import { useLogger } from "./logger";
import { usePluginContext } from "./plugin";

const PROVIDER_MODEL_MAP = {
  openai: "openaimodel",
  google: "googlemodel",
  anthropic: "anthropicmodel",
};

/**
 * @returns {Promise<ReturnType<typeof import("ai").streamText>>} A streamable text response from the AI provider.
 */
export async function useStreamText({
  userPrompt,
  systemPrompt,
  output,
  files = [],
  logLevel = 1,
  abortSignal,
}) {
  const logger = useLogger();
  const { model, providerOptions } = await resolveLanguageModel();

  if (import.meta.env.DEV) {
    logLevel = 3;
  }

  const { AISDKError, APICallError, streamText, smoothStream } =
    await loadPluginModule("ai");

  const { userPromptWithContext, imageByteArrays, pdfByteArrays } =
    await resolveAttachments({
      userPrompt,
      files,
    });

  if (logLevel > 1) {
    logger.info("System prompt:", systemPrompt);
    logger.info("User prompt with context:", userPromptWithContext);
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
              role: "user",
              content: [
                { type: "text", text: userPromptWithContext },
                ...imageByteArrays.map((image) => ({
                  type: "image",
                  image,
                })),
                ...pdfByteArrays.map((data) => ({
                  type: "file",
                  data,
                  mediaType: "application/pdf",
                })),
              ],
            },
          ],
        }
      : {
          prompt: userPromptWithContext,
        }),
    ...(!output && {
      experimental_transform: smoothStream({ chunking: "line" }),
    }),
    abortSignal,
    onError({ error }) {
      if (AISDKError.isInstance(error) || APICallError.isInstance(error)) {
        throw error;
      }
    },
  });
}

async function resolveLanguageModel() {
  let { config } = await usePluginContext();

  // eslint-disable-next-line no-undef
  if (__PLAYGROUND__ && !window.location.hostname.includes("localhost")) {
    config = JSON.parse(JSON.stringify(config));
    const { currentContent } = useContent();

    const selectedProvider = currentContent.value.modelprovider || "openai";
    config.provider = selectedProvider;

    const modelField = PROVIDER_MODEL_MAP[selectedProvider];
    const selectedModel = currentContent.value[modelField];

    if (selectedModel) {
      config.providers[selectedProvider] ??= {};
      config.providers[selectedProvider].model = selectedModel;
    }
  }

  if (!config.provider || !SUPPORTED_PROVIDERS.includes(config.provider)) {
    throw new CopilotError(
      `Unsupported provider "${config.provider}" in the "johannschopplich.copilot.provider" global configuration.`,
    );
  }

  // eslint-disable-next-line no-undef
  if (!__PLAYGROUND__) {
    for (const field of ["apiKey", "model"]) {
      if (!config.providers?.[config.provider]?.[field]) {
        throw new CopilotError(
          `Missing "${field}" property in the "johannschopplich.copilot.providers.${config.provider}" global configuration.`,
        );
      }
    }
  }

  const {
    createAnthropic,
    createGoogleGenerativeAI,
    createMistral,
    createOpenAI,
  } = await loadPluginModule("ai");

  const provider = config.provider;
  const providerConfig = config.providers[provider];

  /// keep-sorted
  const createProvider = {
    anthropic: createAnthropic,
    google: createGoogleGenerativeAI,
    mistral: createMistral,
    openai: createOpenAI,
  }[provider];

  const api = createProvider({
    baseUrl: providerConfig.baseUrl || undefined,
    apiKey:
      // eslint-disable-next-line no-undef
      __PLAYGROUND__ && !window.location.hostname.includes("localhost")
        ? sessionStorage.getItem(`${STORAGE_KEY_PREFIX}apiKey`)
        : providerConfig.apiKey,
    ...(provider === "anthropic"
      ? {
          headers: { "anthropic-dangerous-direct-browser-access": "true" },
        }
      : undefined),
  });

  const model = api.languageModel(providerConfig.model);
  const reasoningEffort = config.reasoningEffort ?? DEFAULT_REASONING_EFFORT;
  const reasoningConfig = PROVIDER_REASONING_MAP[reasoningEffort];

  // Get reasoning value with model-specific override support
  const modelName = providerConfig.model;
  const reasoningValue = supportsReasoning(modelName)
    ? (reasoningConfig?.[`${provider}:${modelName}`] ??
      reasoningConfig?.[provider])
    : undefined;

  const providerOptions = {
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

async function resolveAttachments({ userPrompt, files = [] }) {
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
      const reducedBlob = await toReducedBlob(file, 2048);
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

function supportsReasoning(modelName) {
  return (
    modelName.startsWith("gpt-5") ||
    modelName.startsWith("gemini-3-") ||
    /^claude-.*?-4/.test(modelName)
  );
}
