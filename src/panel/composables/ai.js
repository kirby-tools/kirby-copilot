import { loadPluginModule, useContent } from "kirbyuse";
import { STORAGE_KEY_PREFIX, SUPPORTED_PROVIDERS } from "../constants";
import { CopilotError } from "../utils/error";
import { extractTextFromPdf } from "../utils/pdf";
import { renderTemplate } from "../utils/template";
import { toReducedBlob } from "../utils/upload";
import { createContentContext } from "./content";
import { useLogger } from "./logger";
import { usePluginContext } from "./plugin";

export async function useStreamText({
  userPrompt,
  systemPrompt,
  files = [],
  logLevel = 1,
  abortSignal,
}) {
  const logger = useLogger();
  const { config } = await usePluginContext();
  const languageModel = await resolveLanguageModel();

  if (import.meta.env.DEV) {
    logLevel = 3;
  }

  const { AISDKError, APICallError, streamText, smoothStream } =
    await loadPluginModule("ai");
  const { userPromptWithContext, imageByteArrays } = await resolveAttachments({
    userPrompt,
    files,
  });

  if (logLevel > 1) {
    logger.info("System prompt:", systemPrompt);
    logger.info("User prompt with context:", userPromptWithContext);
  }

  return streamText({
    model: languageModel,
    temperature: config.temperature,
    system: systemPrompt || undefined,
    ...(imageByteArrays.length > 0
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
              ],
            },
          ],
        }
      : {
          prompt: userPromptWithContext,
        }),
    experimental_transform: smoothStream({
      chunking: "line",
    }),
    abortSignal,
    onError({ error }) {
      if (AISDKError.isInstance(error) || APICallError.isInstance(error)) {
        throw error;
      }
    },
  });
}

export async function useStreamObject({
  userPrompt,
  systemPrompt,
  schema,
  output = "object",
  files = [],
  logLevel = 1,
  abortSignal,
}) {
  const logger = useLogger();
  const { config } = await usePluginContext();
  const languageModel = await resolveLanguageModel();

  if (import.meta.env.DEV) {
    logLevel = 3;
  }

  const { AISDKError, APICallError, streamObject } =
    await loadPluginModule("ai");

  const { userPromptWithContext, imageByteArrays } = await resolveAttachments({
    userPrompt,
    files,
  });

  if (logLevel > 1) {
    logger.info("System prompt:", systemPrompt);
    logger.info("User prompt with context:", userPromptWithContext);
  }

  return streamObject({
    model: languageModel,
    temperature: config.temperature,
    schema,
    output,
    // system: systemPrompt || undefined,
    ...(imageByteArrays.length > 0
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
              ],
            },
          ],
        }
      : {
          prompt: userPromptWithContext,
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
    const currentContent = useContent().currentContent.value;

    const selectedProvider = currentContent.modelprovider || "openai";
    config.provider = selectedProvider;

    const modelFieldMap = {
      openai: "openaimodel",
      google: "googlemodel",
      anthropic: "anthropicmodel",
    };

    const modelField = modelFieldMap[selectedProvider];
    const selectedModel = currentContent[modelField];

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

  for (const field of ["apiKey", "model"]) {
    if (!config.providers?.[config.provider]?.[field]) {
      throw new CopilotError(
        `Missing "${field}" property in the "johannschopplich.copilot.providers.${config.provider}" global configuration.`,
      );
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
  });

  return api.languageModel(providerConfig.model);
}

async function resolveAttachments({ userPrompt, files = [] }) {
  const contentContext = createContentContext();
  let userPromptWithContext = renderTemplate(userPrompt, contentContext);

  const images = files.filter((file) => file.type.startsWith("image/"));
  const pdfs = files.filter((file) => file.type === "application/pdf");

  if (pdfs.length > 0) {
    const pdfTexts = await Promise.all(pdfs.map(extractTextFromPdf));
    userPromptWithContext += `\n\n${pdfTexts
      .map(
        (value, index) =>
          `<pdf_document_${index + 1}>\n${value}\n</pdf_document_${index + 1}>`,
      )
      .join("\n\n")}`;
  }

  const imageByteArrays = await Promise.all(
    images.map(async (file) => {
      const reducedBlob = await toReducedBlob(file, 2048);
      const arrayBuffer = await reducedBlob.arrayBuffer();
      return new Uint8Array(arrayBuffer);
    }),
  );

  return {
    userPromptWithContext,
    imageByteArrays,
  };
}
