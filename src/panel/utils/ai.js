import { mistral, openai, streamText } from "modelfusion";
import { template } from "../utils/template";
import { STORAGE_KEY_PREFIX } from "./config";
// import { loadPdfAsText } from "../utils/pdf";

const modelProviders = {
  mistral,
  openai,
};

export async function streamTextGeneration({
  userPrompt = "",
  systemPrompt,
  context,
  files = [],
  config = {},
  run,
}) {
  const provider = config.provider;
  const providerConfig = config.providers[provider];
  // eslint-disable-next-line no-undef
  const apiKey = __PLAYGROUND__
    ? sessionStorage.getItem(`${STORAGE_KEY_PREFIX}apiKey`)
    : providerConfig.apiKey;

  const facade = modelProviders[provider];
  const api = facade.Api({ apiKey });
  const userPromptWithContext = template(userPrompt, context);

  const images = files.filter((file) => file.type.startsWith("image/"));
  // const pdfs = files.filter((file) => file.type === "application/pdf")

  // Extract PDF pages as text
  // const pdfTexts = await Promise.all(pdfs.map(loadPdfAsText));

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

    const model = openai
      .ChatTextGenerator({
        api,
        model: config.providers.openai.model.vision,
        temperature: config.temperature,
        ...(config.maxGenerationTokens
          ? { maxGenerationTokens: config.maxGenerationTokens }
          : {}),
      })
      .withInstructionPrompt();

    return await streamText({
      model,
      prompt: {
        system: systemPrompt,
        instruction: [
          { type: "text", text: userPromptWithContext },
          ...serializedImages.map((image) => ({
            type: "image",
            image: image.data,
            mimeType: image.mimeType,
          })),
        ],
      },
      run,
    });
  }

  const model = facade
    .ChatTextGenerator({
      api,
      model:
        provider === "openai"
          ? providerConfig.model.default
          : providerConfig.model,
      temperature: config.temperature,
      ...(config.maxGenerationTokens
        ? { maxGenerationTokens: config.maxGenerationTokens }
        : {}),
    })
    .withInstructionPrompt();

  return await streamText({
    model,
    prompt: {
      system: systemPrompt,
      instruction: userPromptWithContext,
    },
    run,
  });
}
