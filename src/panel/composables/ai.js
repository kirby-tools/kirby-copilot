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
  let { config } = await usePluginContext();

  // eslint-disable-next-line no-undef
  if (__PLAYGROUND__ && !window.location.hostname.includes("localhost")) {
    config = JSON.parse(JSON.stringify(config));
    config.providers[config.provider].model =
      useContent().currentContent.value.gptmodel;
  }

  if (import.meta.env.DEV) {
    logLevel = 3;
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
    AISDKError,
    APICallError,
    createAnthropic,
    createMistral,
    createOpenAI,
    streamText,
  } = await loadPluginModule("ai");

  const provider = config.provider;
  const providerConfig = config.providers[provider];

  const createProvider = {
    mistral: createMistral,
    openai: createOpenAI,
    anthropic: createAnthropic,
  }[provider];
  const api = createProvider({
    baseUrl: providerConfig.baseUrl || undefined,
    apiKey:
      // eslint-disable-next-line no-undef
      __PLAYGROUND__ && !window.location.hostname.includes("localhost")
        ? sessionStorage.getItem(`${STORAGE_KEY_PREFIX}apiKey`)
        : providerConfig.apiKey,
  });

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

  if (logLevel > 1) {
    logger.info("System prompt:", systemPrompt);
    logger.info("User prompt with context:", userPromptWithContext);
  }

  if (images.length > 0) {
    if (providerConfig.model === "o3-mini") {
      throw new CopilotError(
        `OpenAI's "o3-mini" model does not support images. Please use a different model, such as "gpt-4o".`,
      );
    }

    const imageByteArrays = await Promise.all(
      images.map(async (file) => {
        const reducedBlob = await toReducedBlob(file, 2048);
        const arrayBuffer = await reducedBlob.arrayBuffer();
        return new Uint8Array(arrayBuffer);
      }),
    );

    return streamText({
      model: api.languageModel(providerConfig.model),
      temperature: config.temperature,
      system: systemPrompt || undefined,
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
      abortSignal,
      onError({ error }) {
        if (AISDKError.isInstance(error) || APICallError.isInstance(error)) {
          throw error;
        }
      },
    });
  }

  return streamText({
    model: api.languageModel(providerConfig.model),
    temperature: config.temperature,
    system: systemPrompt || undefined,
    prompt: userPromptWithContext,
    abortSignal,
    onError({ error }) {
      if (AISDKError.isInstance(error) || APICallError.isInstance(error)) {
        throw error;
      }
    },
  });
}
