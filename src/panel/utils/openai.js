import { openai, streamText } from "modelfusion";
import { template } from "../utils/template.js";
import { dataUriToBase64, fileToDataUri } from "./upload.js";
// import { loadPdfAsText } from "../utils/pdf.js";

export async function streamTextGeneration({
  userPrompt = "",
  systemPrompt,
  context,
  files = [],
  config = {},
  run,
}) {
  const api = openai.Api({
    apiKey: config.providers?.OpenAI?.apiKey,
  });

  const userPromptWithContext = template(userPrompt, context);

  const images = files.filter((file) => file.type.startsWith("image/"));
  // const pdfs = files.filter((file) => file.type === "application/pdf")

  // Extract PDF pages as text
  // const pdfTexts = await Promise.all(pdfs.map(loadPdfAsText));

  if (images.length > 0) {
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
      model: config.model.vision,
      temperature: config.temperature,
      maxGenerationTokens: config.maxGenerationTokens,
    });

    return await streamText({
      model,
      prompt: [
        ...(systemPrompt ? [openai.ChatMessage.system(systemPrompt)] : []),
        openai.ChatMessage.user([
          { type: "text", text: userPromptWithContext },
          ...serializedImages.map((image) => ({
            type: "image",
            base64Image: image.data,
            mimeType: image.mimeType,
          })),
        ]),
      ],
      run,
    });
  }

  const model = openai.ChatTextGenerator({
    api,
    model: config.model.default,
    temperature: config.temperature,
    maxGenerationTokens: config.maxGenerationTokens,
  });

  return await streamText({
    model,
    prompt: [
      ...(systemPrompt ? [openai.ChatMessage.system(systemPrompt)] : []),
      openai.ChatMessage.user(userPromptWithContext),
    ],
    run,
  });
}
