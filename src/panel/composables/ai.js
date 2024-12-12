import { loadPluginModule, useContent } from "kirbyuse";
import { STORAGE_KEY_PREFIX, SUPPORTED_PROVIDERS } from "../constants";
import { loadPdfAsText } from "../utils/pdf";
import { renderTemplate } from "../utils/template";
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
  if (__PLAYGROUND__) {
    config = JSON.parse(JSON.stringify(config));
    config.providers[config.provider].model =
      useContent().currentContent.value.gptmodel;
  }

  if (import.meta.env.DEV) {
    logLevel = 3;
  }

  if (!config.provider || !SUPPORTED_PROVIDERS.includes(config.provider)) {
    throw new Error(
      `Unsupported provider "${config.provider}" in the "johannschopplich.copilot.provider" global configuration.`,
    );
  }

  for (const field of ["apiKey", "model"]) {
    if (!config.providers?.[config.provider]?.[field]) {
      throw new Error(
        `Missing "${field}" property in the "johannschopplich.copilot.providers.${config.provider}" global configuration.`,
      );
    }
  }

  const { createAnthropic, createMistral, createOpenAI, streamText } =
    await loadPluginModule("ai");

  const provider = config.provider;
  const providerConfig = config.providers[provider];

  const createProvider = {
    mistral: createMistral,
    openai: createOpenAI,
    anthropic: createAnthropic,
  }[provider];
  const api = createProvider({
    baseUrl: providerConfig.baseUrl || undefined,
    // eslint-disable-next-line no-undef
    apiKey: __PLAYGROUND__
      ? sessionStorage.getItem(`${STORAGE_KEY_PREFIX}apiKey`)
      : providerConfig.apiKey,
  });

  const images = files.filter((file) => file.type.startsWith("image/"));
  const pdfs = files.filter((file) => file.type === "application/pdf");

  const contentContext = createContentContext();
  let userPromptWithContext = renderTemplate(userPrompt, contentContext);

  // Extract PDF pages as text
  if (pdfs.length > 0) {
    const pdfTexts = await Promise.all(pdfs.map(loadPdfAsText));
    userPromptWithContext += `\n\n${pdfTexts
      .map(
        (value, index) =>
          `<pdf_document_page_${index + 1}>\n${value}\n</pdf_document_page_${index + 1}>`,
      )
      .join("\n\n")}`;
  }

  if (logLevel > 1) {
    logger.info("System prompt:", systemPrompt);
    logger.info("User prompt with context:", userPromptWithContext);
  }

  if (provider === "openai" && images.length > 0) {
    const serializedImages = await Promise.all(
      images.map(async (blob) => {
        const arrayBuffer = await blob.arrayBuffer();
        return {
          data: new Uint8Array(arrayBuffer),
          mimeType: blob.type,
        };
      }),
    );

    return streamText({
      model: api.chat(providerConfig.model),
      temperature: config.temperature,
      maxTokens: config.maxGenerationTokens,
      system: systemPrompt || undefined,
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: userPromptWithContext },
            ...serializedImages.map((image) => ({
              type: "image",
              image: image.data,
              // mimeType: image.mimeType,
            })),
          ],
        },
      ],
      abortSignal,
    });
  }

  return streamText({
    model: api.chat(providerConfig.model),
    temperature: config.temperature,
    maxTokens: config.maxGenerationTokens,
    system: systemPrompt || undefined,
    prompt: userPromptWithContext,
    abortSignal,
  });
}
