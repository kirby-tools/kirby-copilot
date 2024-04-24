import { STORAGE_KEY_PREFIX } from "../constants";
import { getModule } from "../utils/assets";
import { renderTemplate } from "../utils/template";
import { loadPdfAsText } from "../utils/pdf";
import { useLogger } from "./logger";

export async function useStreamText({
  userPrompt,
  systemPrompt,
  context,
  files,
  config,
  logLevel,
  abortSignal,
}) {
  const logger = useLogger();

  if (import.meta.env.DEV) {
    logLevel = 3;
  }

  const { createMistral, createOpenAI, experimental_streamText } =
    await getModule("ai");

  const provider = config.provider;
  const providerConfig = config.providers[provider];

  const createProvider = {
    mistral: createMistral,
    openai: createOpenAI,
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

  let userPromptWithContext = renderTemplate(userPrompt, context);

  // Extract PDF pages as text
  if (pdfs.length > 0) {
    const pdfTexts = await Promise.all(pdfs.map(loadPdfAsText));
    const pdfContext = `Additional context from the following PDF documents has been processed and made available to you. Include the information from these documents as applicable.\n\n${pdfTexts
      .map((value, index) => `PDF document ${index + 1}: ${value}`)
      .join("\n\n")}`;

    userPromptWithContext += `\n\n${pdfContext}`;
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

    return experimental_streamText({
      model: api.chat(providerConfig.model),
      temperature: config.temperature,
      maxTokens: config.maxGenerationTokens,
      system: systemPrompt,
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

  return experimental_streamText({
    model: api.chat(providerConfig.model),
    temperature: config.temperature,
    maxTokens: config.maxGenerationTokens,
    system: systemPrompt,
    prompt: userPromptWithContext,
    abortSignal,
  });
}
