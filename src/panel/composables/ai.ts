import type { OpenAIProvider } from "@ai-sdk/openai";
import type {
  LanguageModelV3,
  SharedV3ProviderOptions,
} from "@ai-sdk/provider";
import type { Output as OutputNamespace } from "ai";
import type { LogLevel } from "kirbyuse";
import type { ModelProvider, ReasoningEffort } from "../constants";
import type { OutputFormat, PluginConfig, ProviderConfig } from "../types";
import { useContent, usePanel } from "kirbyuse";
import { isObject, template } from "utilful";
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
import { loadAISDK } from "../utils/ai";
import {
  createContentContext,
  createReferencePageContent,
} from "../utils/content";
import { CopilotError } from "../utils/error";
import { createHtmlChunking } from "../utils/html-chunking";
import { toReducedBlob } from "../utils/image";
import {
  parseGatewayPrefix,
  supportsReasoning,
  usesLegacyExtendedThinking,
} from "../utils/models";
import { extractTextFromPdf } from "../utils/pdf";
import { normalizePlaceholders } from "../utils/template";
import { useLogger } from "./logger";
import { extractPageRefIds } from "./pages";
import { usePluginContext } from "./plugin";
import {
  extractSkillRefIds,
  stripSkillRefTokens,
  useSkills,
} from "./skills";

const DEFAULT_PLAYGROUND_MODEL_PROVIDER = "google";
const PLAYGROUND_PROVIDER_MODEL_MAP: Record<string, string> = {
  openai: "openaimodel",
  google: "googlemodel",
  anthropic: "anthropicmodel",
};

// Non-Anthropic reasoning-option shapes (Anthropic has its own resolver)
const REASONING_SHAPERS = {
  openai: (value: string | number) => ({ reasoningEffort: value }),
  mistral: (value: string | number) => ({ reasoningEffort: value }),
  google: (value: string | number) => ({
    thinkingConfig: { thinkingLevel: value },
  }),
} as const satisfies Partial<
  Record<ModelProvider, (value: string | number) => Record<string, unknown>>
>;

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
  model: injectedModel,
  providerOptions: injectedProviderOptions,
}: {
  userPrompt: string;
  systemPrompt?: string;
  output?: OutputNamespace.Output;
  responseFormat?: OutputFormat;
  files?: File[];
  logLevel?: LogLevel;
  abortSignal?: AbortSignal;
  /** Inject a language model directly (useful for testing). */
  model?: LanguageModelV3;
  /** Inject provider options directly (useful for testing). */
  providerOptions?: SharedV3ProviderOptions;
}) {
  const logger = useLogger();

  const { model, providerOptions } = injectedModel
    ? { model: injectedModel, providerOptions: injectedProviderOptions }
    : await resolveLanguageModel();

  if (import.meta.env.DEV) {
    logLevel = 3;
  }

  const { AISDKError, streamText, smoothStream } = await loadAISDK();

  const {
    userPromptWithContext,
    systemPromptWithContext,
    imageByteArrays,
    pdfByteArrays,
  } = await resolvePromptContext({
    userPrompt,
    systemPrompt,
    files,
  });

  if (logLevel > 1) {
    logger.info("System prompt:", systemPromptWithContext);
    logger.info("User prompt:", userPromptWithContext);
  }

  const hasFiles = imageByteArrays.length > 0 || pdfByteArrays.length > 0;

  return streamText({
    model,
    providerOptions,
    output,
    system: systemPromptWithContext || undefined,
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
  const { config } = await usePluginContext();

  const { provider, providerConfig, isPlayground } = resolveProviderSelection(
    config,
    forCompletion,
  );
  const api = await createProviderClient({
    provider,
    providerConfig,
    isPlayground,
    panel,
  });
  const modelId = resolveModelId({ provider, providerConfig, forCompletion });

  // Support for OpenAI-compatible gateways (e.g. Cloudflare AI Gateway)
  // that don't support `/v1/responses`
  const model =
    provider === "openai" && providerConfig.api === "chat"
      ? (api as OpenAIProvider).chat(modelId)
      : api.languageModel(modelId);
  const reasoningEffort: ReasoningEffort = forCompletion
    ? "none"
    : (config.reasoningEffort ?? DEFAULT_REASONING_EFFORT);
  const providerOptions = resolveProviderOptions({
    provider,
    providerConfig,
    modelId,
    reasoningEffort,
  });

  return {
    model,
    providerOptions,
  };
}

/**
 * Assembles the final system and user prompts plus any file attachments
 * that the AI SDK call needs.
 *
 * @remarks
 * Applies four transformations in order:
 * 1. Renders `{field}` placeholders against the current Panel content.
 * 2. Extracts `@skill://id` tokens from the user prompt, resolves them into
 *    `<skill>` blocks on the system prompt, then strips the tokens so they
 *    never reach the model.
 * 3. Extracts `@page://id` tokens from the rendered user prompt and appends
 *    `<reference_page>` blocks fetched via the Panel API. Tokens are left in
 *    place so the model can correlate them with the appended blocks.
 * 4. Splits attached files into images and PDFs, inlining oversized PDFs as
 *    extracted text so they still reach models that reject large binaries.
 */
export async function resolvePromptContext({
  systemPrompt,
  userPrompt,
  files = [],
}: {
  systemPrompt?: string;
  userPrompt: string;
  files?: File[];
}) {
  const contentContext = createContentContext();
  let userPromptWithContext = template(
    normalizePlaceholders(userPrompt),
    contentContext,
  );

  const skillBlocks = useSkills()
    .getActiveSkills(extractSkillRefIds(userPromptWithContext))
    .map(
      (skill) =>
        `<skill name="${escapeXmlAttr(skill.label)}">\n${skill.instructions}\n</skill>`,
    );

  const systemPromptWithContext =
    [systemPrompt, ...skillBlocks].filter(Boolean).join("\n\n") || undefined;

  userPromptWithContext = stripSkillRefTokens(userPromptWithContext).trim();

  const uniquePageIds = [...new Set(extractPageRefIds(userPromptWithContext))];
  if (uniquePageIds.length > 0) {
    const panel = usePanel();

    const referencedPages = await Promise.all(
      uniquePageIds.map(async (requestedPageId) => ({
        requestedPageId,
        page: (await panel.api.pages.get(panel.api.pages.id(requestedPageId), {
          select: ["id", "title", "content"],
        })) as { id: string; title: string; content: Record<string, unknown> },
      })),
    );

    const pageContextBlocks = referencedPages
      .map(
        ({ requestedPageId, page }) =>
          `<reference_page id="${requestedPageId}">\n${JSON.stringify(createReferencePageContent(page))}\n</reference_page>`,
      )
      .join("\n\n");

    userPromptWithContext += `\n\n${pageContextBlocks}`;
  }

  const images = files.filter((file) => file.type.startsWith("image/"));
  const pdfs = files.filter((file) => file.type === "application/pdf");

  const totalPdfSize = pdfs.reduce((sum, pdf) => sum + pdf.size, 0);
  const hasNativePdfSupport = totalPdfSize <= PDF_SIZE_LIMIT;

  // Providers reject PDFs above the native-attachment cap; extract text
  // client-side so the content still reaches the model
  if (!hasNativePdfSupport && pdfs.length > 0) {
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
      const reducedBlob = await toReducedBlob(file, { maxDimension: 2048 });
      const arrayBuffer = await reducedBlob.arrayBuffer();
      return new Uint8Array(arrayBuffer);
    }),
  );

  const pdfByteArrays = hasNativePdfSupport
    ? await Promise.all(
        pdfs.map(async (file) => {
          const arrayBuffer = await file.arrayBuffer();
          return new Uint8Array(arrayBuffer);
        }),
      )
    : [];

  return {
    systemPromptWithContext,
    userPromptWithContext,
    imageByteArrays,
    pdfByteArrays,
  };
}

/**
 * Applies playground overrides and validates the provider selection.
 */
function resolveProviderSelection(
  config: PluginConfig,
  forCompletion: boolean,
) {
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

  if (
    !config.provider ||
    !SUPPORTED_PROVIDERS.includes(config.provider as ModelProvider)
  ) {
    throw new CopilotError(
      `Unsupported provider "${config.provider}". Supported providers: ${SUPPORTED_PROVIDERS.join(", ")}. Check "johannschopplich.copilot.provider" in your Kirby config.`,
    );
  }

  const provider = config.provider as ModelProvider;
  const providerConfig = config.providers[provider] ?? {};

  return { provider, providerConfig, isPlayground };
}

/**
 * Instantiates an AI SDK provider client, wiring the PHP proxy fetch when
 * running in the Panel and the session-stored key in playground mode.
 */
async function createProviderClient({
  provider,
  providerConfig,
  isPlayground,
  panel,
}: {
  provider: ModelProvider;
  providerConfig: ProviderConfig;
  isPlayground: boolean;
  panel: ReturnType<typeof usePanel>;
}) {
  const {
    createAnthropic,
    createGoogleGenerativeAI,
    createMistral,
    createOpenAI,
  } = await loadAISDK();

  /// keep-sorted
  const createProvider = {
    anthropic: createAnthropic,
    google: createGoogleGenerativeAI,
    mistral: createMistral,
    openai: createOpenAI,
  }[provider];

  if (!isPlayground && !providerConfig.hasApiKey) {
    throw new CopilotError(
      `Missing API key for the "${provider}" provider. Add "apiKey" to "johannschopplich.copilot.providers.${provider}" in your Kirby config.`,
    );
  }

  const proxyFetch: typeof globalThis.fetch = (url, options) =>
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

  return createProvider({
    baseURL: providerConfig.baseUrl || undefined,
    apiKey: !isPlayground
      ? PROXY_API_KEY_MARKER
      : (sessionStorage.getItem(`${STORAGE_KEY_PREFIX}apiKey`) ?? undefined),
    fetch: !isPlayground ? proxyFetch : undefined,
    ...(provider === "anthropic" && isPlayground
      ? { headers: { "anthropic-dangerous-direct-browser-access": "true" } }
      : undefined),
  });
}

/**
 * Resolves the effective model id, honoring gateway prefixes and completion fallbacks.
 */
function resolveModelId({
  provider,
  providerConfig,
  forCompletion,
}: {
  provider: ModelProvider;
  providerConfig: ProviderConfig;
  forCompletion: boolean;
}): string {
  const { prefix } = parseGatewayPrefix(providerConfig.model ?? "");

  // Cross-provider gateway prefix: require explicit `completionModel` rather
  // than derive a 404 (e.g. `google-ai-studio/gpt-5.4-nano`)
  if (
    forCompletion &&
    !providerConfig.completionModel &&
    prefix &&
    prefix !== provider
  ) {
    throw new CopilotError(
      `Cannot derive a default completionModel for the "${provider}" provider with gateway-prefixed model "${providerConfig.model}". Set "completionModel" explicitly in "johannschopplich.copilot.providers.${provider}" in your Kirby config.`,
    );
  }

  // Keep the default-completion fallback on the same gateway as the primary model
  const defaultCompletion =
    DEFAULT_COMPLETION_MODELS[
      provider as keyof typeof DEFAULT_COMPLETION_MODELS
    ];
  const gatewayPrefix = prefix ? `${prefix}/` : "";
  const modelId = forCompletion
    ? providerConfig.completionModel || gatewayPrefix + defaultCompletion
    : providerConfig.model;

  if (!modelId) {
    throw new CopilotError(
      `Missing ${forCompletion ? "completionModel" : "model"} for the "${provider}" provider. Add it to "johannschopplich.copilot.providers.${provider}" in your Kirby config.`,
    );
  }

  return modelId;
}

function resolveProviderOptions({
  provider,
  providerConfig,
  modelId,
  reasoningEffort,
}: {
  provider: ModelProvider;
  providerConfig: ProviderConfig;
  modelId: string;
  reasoningEffort: ReasoningEffort;
}) {
  const anthropicReasoning =
    provider === "anthropic"
      ? resolveAnthropicReasoning(modelId, reasoningEffort)
      : undefined;
  const reasoningValue =
    provider === "anthropic"
      ? undefined
      : resolveProviderReasoning({ provider, modelId, reasoningEffort });

  const shape =
    reasoningValue !== undefined && provider !== "anthropic"
      ? REASONING_SHAPERS[provider]?.(reasoningValue)
      : undefined;

  const providerOptions: SharedV3ProviderOptions = {
    ...(anthropicReasoning && { anthropic: anthropicReasoning }),
    ...(shape && { [provider]: shape }),
  };

  if (isObject(providerConfig.options)) {
    providerOptions[provider] = {
      ...providerOptions[provider],
      ...providerConfig.options,
    };
  }

  return Object.keys(providerOptions).length > 0 ? providerOptions : undefined;
}

function resolveAnthropicReasoning(
  modelId: string,
  reasoningEffort: ReasoningEffort,
) {
  // Cross-provider prefix: compat shims typically drop the outer SDK's
  // reasoning shape. Override via `providers.anthropic.options` if needed.
  const { prefix, nativeModelId } = parseGatewayPrefix(modelId);
  if (prefix && prefix !== "anthropic") return;

  if (!supportsReasoning(nativeModelId)) return;
  if (reasoningEffort === "none") return;

  // 4.0/4.1/4.5 need manual budget tokens; everything else uses adaptive thinking with `effort`
  if (usesLegacyExtendedThinking(nativeModelId)) {
    const budgetTokens = PROVIDER_REASONING_MAP[reasoningEffort]?.anthropic;
    if (typeof budgetTokens !== "number") return;
    return { thinking: { type: "enabled" as const, budgetTokens } };
  }

  return {
    thinking: {
      type: "adaptive" as const,
      // Skip reasoning text the Panel doesn't render (default: `"summarized"`)
      display: "omitted" as const,
    },
    effort: reasoningEffort,
  };
}

function resolveProviderReasoning({
  provider,
  modelId,
  reasoningEffort,
}: {
  provider: ModelProvider;
  modelId: string;
  reasoningEffort: ReasoningEffort;
}) {
  // Cross-provider prefix: compat shims typically drop the outer SDK's
  // reasoning shape. Override via `providers.<provider>.options` if needed.
  const { prefix, nativeModelId } = parseGatewayPrefix(modelId);
  if (prefix && prefix !== provider) return;

  if (!supportsReasoning(nativeModelId)) return;

  const reasoningConfig = PROVIDER_REASONING_MAP[reasoningEffort];

  return (
    reasoningConfig?.[`${provider}:${nativeModelId}`] ??
    reasoningConfig?.[provider]
  );
}

function mergeHeaders(...headers: (HeadersInit | undefined)[]) {
  return new Headers(
    headers.filter(Boolean).flatMap((h) => [...new Headers(h)]),
  );
}

/** Escapes the chars that would break a double-quoted XML attribute. */
function escapeXmlAttr(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
