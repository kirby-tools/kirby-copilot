import { loadPluginModule, useContent, usePanel } from "kirbyuse";
import {
  DEFAULT_COMPLETION_MODELS,
  DEFAULT_REASONING_EFFORT,
  PDF_SIZE_LIMIT,
  PLUGIN_PROXY_API_ROUTE,
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

const PLAYGROUND_PROVIDER_MODEL_MAP = {
  openai: "openaimodel",
  google: "googlemodel",
  anthropic: "anthropicmodel",
};

const DEFAULT_PLAYGROUND_MODEL_PROVIDER = "google";

/**
 * Streams text from an AI provider using the configured model.
 *
 * @param {object} options - Text streaming configuration
 * @param {string} options.userPrompt - The prompt text to send to the AI model
 * @param {string} [options.systemPrompt] - System instructions for the AI
 * @param {import("ai").Output} [options.output] - Output schema for structured object/array responses
 * @param {string} [options.responseFormat] - Response format: `text`, `markdown`, or `rich-text`
 * @param {File[]} [options.files] - File attachments (images or PDF documents)
 * @param {number} [options.logLevel] - Logging verbosity: 0 (error), 1 (warn), 2 (info), 3 (debug)
 * @param {AbortSignal} [options.abortSignal] - Signal to abort the streaming request
 * @returns {Promise<ReturnType<typeof import("ai").streamText>>} A streamable response with `textStream` and other properties
 */
export async function useStreamText({
  userPrompt,
  systemPrompt,
  output,
  responseFormat,
  files = [],
  logLevel = 1,
  abortSignal,
}) {
  const logger = useLogger();
  const { model, providerOptions } = await resolveLanguageModel();

  if (import.meta.env.DEV) {
    logLevel = 3;
  }

  const { AISDKError, streamText, smoothStream } = await loadPluginModule("ai");

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
    },
  });
}

/**
 * Resolves the language model and provider options for the configured AI provider.
 *
 * @param {object} [options]
 * @param {boolean} [options.forCompletion] - Whether to use a fast, lightweight model for inline text completions instead of the main model configured for generation tasks
 * @returns {Promise<{model: import("@ai-sdk/provider").LanguageModelV3, providerOptions?: Record<string, any>}>} The resolved language model instance and optional provider-specific options
 */
export async function resolveLanguageModel({ forCompletion = false } = {}) {
  const panel = usePanel();
  let { config } = await usePluginContext();

  const isPlayground = // eslint-disable-next-line no-undef
    __PLAYGROUND__ && !window.location.hostname.includes("localhost");

  if (!forCompletion && isPlayground) {
    config = JSON.parse(JSON.stringify(config));
    const { currentContent } = useContent();

    const selectedProvider =
      currentContent.value.modelprovider || DEFAULT_PLAYGROUND_MODEL_PROVIDER;
    config.provider = selectedProvider;

    const modelField = PLAYGROUND_PROVIDER_MODEL_MAP[selectedProvider];
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

  const {
    createAnthropic,
    createGoogleGenerativeAI,
    createMistral,
    createOpenAI,
  } = await loadPluginModule("ai");

  const provider = config.provider;
  const providerConfig = config.providers[provider] ?? {};

  /// keep-sorted
  const createProvider = {
    anthropic: createAnthropic,
    google: createGoogleGenerativeAI,
    mistral: createMistral,
    openai: createOpenAI,
  }[provider];

  // Validate API key is configured on the server when using proxy
  if (!isPlayground && !providerConfig.hasApiKey) {
    throw new CopilotError(
      `Missing "apiKey" property in the "johannschopplich.copilot.providers.${provider}" global configuration.`,
    );
  }

  // Create custom fetch that routes through PHP proxy
  const proxyFetch = (url, options) =>
    fetch(
      `${panel.api.endpoint}/${PLUGIN_PROXY_API_ROUTE}?provider=${provider}`,
      {
        ...options,
        credentials: "same-origin",
        headers: {
          ...options.headers,
          "X-CSRF": panel.api.csrf,
          "X-Proxy-Target": url,
        },
      },
    );

  const api = createProvider({
    baseUrl: providerConfig.baseUrl || undefined,
    apiKey: !isPlayground
      ? "__KIRBY_COPILOT_PROXY__"
      : sessionStorage.getItem(`${STORAGE_KEY_PREFIX}apiKey`),
    fetch: !isPlayground ? proxyFetch : undefined,
    ...(provider === "anthropic" && !isPlayground
      ? { headers: { "anthropic-dangerous-direct-browser-access": "true" } }
      : undefined),
  });

  // Model selection (different for completion)
  const modelId = forCompletion
    ? providerConfig.completionModel || DEFAULT_COMPLETION_MODELS[provider]
    : providerConfig.model;

  if (!modelId) {
    throw new CopilotError(
      `Missing ${forCompletion ? '"completionModel"' : '"model"'} property in the "johannschopplich.copilot.providers.${provider}" global configuration.`,
    );
  }

  const model = api.languageModel(modelId);
  const reasoningEffort = forCompletion
    ? "none"
    : (config.reasoningEffort ?? DEFAULT_REASONING_EFFORT);
  const reasoningConfig = PROVIDER_REASONING_MAP[reasoningEffort];

  // Get reasoning value with model-specific override support
  const reasoningValue = supportsReasoning(modelId)
    ? (reasoningConfig?.[`${provider}:${modelId}`] ??
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

/**
 * Creates a chunk detector for rich-text streaming that buffers complete HTML elements.
 *
 * Combines "line" chunking behavior (newlines as separate chunks) with HTML-aware
 * buffering to ensure tags are never split mid-stream. Handles nested elements
 * of the same type (e.g., `<ol><ol>...</ol></ol>`).
 *
 * @returns {import("ai").ChunkDetector} A function that returns complete chunks or `null` to buffer more
 */
function createHtmlChunking() {
  return (buffer) => {
    if (!buffer) return null;

    const tagIndex = buffer.indexOf("<");
    const newlineIndex = buffer.indexOf("\n");

    // No special characters - release entire buffer as plain text
    if (tagIndex === -1 && newlineIndex === -1) {
      return buffer;
    }

    // Find which special character comes first
    const firstSpecialIndex =
      tagIndex === -1
        ? newlineIndex
        : newlineIndex === -1
          ? tagIndex
          : Math.min(tagIndex, newlineIndex);

    // Plain text before special character - release it
    if (firstSpecialIndex > 0) {
      return buffer.slice(0, firstSpecialIndex);
    }

    // Newline at start - release consecutive newlines as one chunk
    if (firstSpecialIndex === newlineIndex) {
      return buffer.match(/^\n+/)[0];
    }

    // HTML tag at start - parse and return complete tag
    return parseHtmlElement(buffer);
  };
}

const HTML_VOID_ELEMENTS = new Set(["br", "hr", "img", "wbr"]);

/**
 * Parses a complete HTML element from the start of the buffer.
 *
 * @param {string} buffer - The text buffer starting with `<`
 * @returns {string | null} The complete element, or `null` if incomplete
 */
function parseHtmlElement(buffer) {
  // Closing tag - return it immediately
  if (buffer.startsWith("</")) {
    const closeEnd = buffer.indexOf(">");
    return closeEnd === -1 ? null : buffer.slice(0, closeEnd + 1);
  }

  // Opening tag - extract tag name and attributes
  const tagMatch = buffer.match(/^<([a-z][a-z0-9-]*)(?:\s[^>]*)?(\/?)>/i);
  if (!tagMatch) return null;

  const [fullMatch, tagName, selfClosing] = tagMatch;
  const tagLower = tagName.toLowerCase();

  // Self-closing syntax (`/>`) or void element
  if (selfClosing || HTML_VOID_ELEMENTS.has(tagLower)) {
    return fullMatch;
  }

  // Find the matching closing tag (handles nested same-name elements)
  return findMatchingCloseTag(buffer, tagLower, fullMatch.length);
}

/**
 * Finds the matching closing tag for an element, handling nested same-name tags.
 *
 * @remarks
 * For `<ol><li>item</li></ol>`, only `<ol>` depth is tracked - inner `<li>` tags
 * don't affect the search. For `<ol><ol>nested</ol></ol>`, depth tracking ensures
 * the correct outer `</ol>` is matched.
 *
 * @param {string} buffer - The full buffer
 * @param {string} tagName - The lowercase tag name to match
 * @param {number} startPosition - Position after the opening tag
 * @returns {string | null} The complete element, or `null` if closing tag not found
 */
function findMatchingCloseTag(buffer, tagName, startPosition) {
  const lowerBuffer = buffer.toLowerCase();
  const openPattern = `<${tagName}`;
  const closePattern = `</${tagName}>`;

  let depth = 1;
  let pos = startPosition;

  while (depth > 0) {
    const nextOpen = lowerBuffer.indexOf(openPattern, pos);
    const nextClose = lowerBuffer.indexOf(closePattern, pos);

    // Closing tag not yet in buffer
    if (nextClose === -1) return null;

    // Nested opening tag found before closing tag - increase depth
    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth++;
      pos = nextOpen + openPattern.length;
    } else {
      depth--;
      if (depth === 0) {
        return buffer.slice(0, nextClose + closePattern.length);
      }
      pos = nextClose + closePattern.length;
    }
  }

  return null;
}
