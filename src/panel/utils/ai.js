import { mistral, openai, streamText } from "modelfusion";
import { template } from "../utils/template";
import { STORAGE_KEY_PREFIX } from "./config";
import { dataUriToBase64, fileToDataUri } from "./upload";
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
  // eslint-disable-next-line no-undef
  const apiKey = __PLAYGROUND__
    ? sessionStorage.getItem(`${STORAGE_KEY_PREFIX}apiKey`)
    : config.providers[provider].apiKey;

  const facade = modelProviders[provider];
  const api = facade.Api({ apiKey });
  const userPromptWithContext = template(userPrompt, context);

  const images = files.filter((file) => file.type.startsWith("image/"));
  // const pdfs = files.filter((file) => file.type === "application/pdf")

  // Extract PDF pages as text
  // const pdfTexts = await Promise.all(pdfs.map(loadPdfAsText));

  if (provider === "openai" && images.length > 0) {
    // Convert images to base64
    const serializedImages = await Promise.all(
      images.map(async (blob) => {
        const { dataUri, mimeType } = await fileToDataUri(blob);
        return {
          data: dataUriToBase64(dataUri),
          mimeType,
        };
      }),
    );

    const model = openai.ChatTextGenerator({
      api,
      model: config.providers.openai.model.vision,
      temperature: config.temperature,
      ...(config.maxGenerationTokens
        ? { maxGenerationTokens: config.maxGenerationTokens }
        : {}),
    });

    return await streamText({
      model,
      prompt: [
        ...(systemPrompt ? [openai.ChatMessage.system(systemPrompt)] : []),
        openai.ChatMessage.user([
          { type: "text", text: userPromptWithContext },
          ...serializedImages.map((image) => ({
            type: "image",
            image: image.data,
            mimeType: image.mimeType,
          })),
        ]),
      ],
      run,
    });
  }

  const model = facade.ChatTextGenerator({
    api,
    model:
      provider === "openai"
        ? config.providers.openai.model.default
        : config.providers[provider].model,
    temperature: config.temperature,
    ...(config.maxGenerationTokens
      ? { maxGenerationTokens: config.maxGenerationTokens }
      : {}),
  });

  return await streamText({
    model,
    prompt: [
      ...(systemPrompt
        ? [
            {
              role: "system",
              content: systemPrompt,
            },
          ]
        : []),
      {
        role: "user",
        content: userPromptWithContext,
      },
    ],
    run,
  });
}
