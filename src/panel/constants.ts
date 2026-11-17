export const PLUGIN_CONTEXT_API_ROUTE = "__copilot__/context";
export const PLUGIN_BUTTON_OPTIONS_API_ROUTE = "__copilot__/button-options";
export const PLUGIN_MODEL_FIELDS_API_ROUTE = "__copilot__/model-fields";
export const PLUGIN_FIELDSETS_API_ROUTE = "__copilot__/fieldsets";
export const PLUGIN_PROXY_API_ROUTE = "__copilot__/proxy";
export const PLUGIN_AGENTS_CONSENT_API_ROUTE = "__copilot__/agents/consent";
export const PLUGIN_AGENTS_LAST_WRITE_API_ROUTE =
  "__copilot__/agents/last-write";

// Marker replaced by the PHP proxy with the real API key.
export const PROXY_API_KEY_MARKER = "__KIRBY_COPILOT_PROXY__";

// Marker that opens the SSE comment line the PHP proxy appends when the
// upstream request fails after the response has started streaming.
export const PROXY_ERROR_MARKER = "__KIRBY_COPILOT_PROXY_ERROR__";

export const STORAGE_KEY_PREFIX = "kirby$copilot$";

export const LOG_LEVELS = ["error", "warn", "info", "debug"] as const;
export type LogLevel = (typeof LOG_LEVELS)[number];
export const DEFAULT_LOG_LEVEL: LogLevel = "warn";

export interface ProviderDefinition {
  /** AI SDK factory on the lazy-loaded module that instantiates the provider client. */
  factory:
    "createAnthropic" | "createGoogle" | "createMistral" | "createOpenAI";
  defaultCompletionModel: string;
  /**
   * Content field in the playground blueprint that holds the selected model.
   * Providers without one are deliberately not exposed in the playground.
   */
  playgroundModelField?: string;
}

export const PROVIDER_REGISTRY = {
  anthropic: {
    factory: "createAnthropic",
    defaultCompletionModel: "claude-sonnet-5",
    playgroundModelField: "anthropicmodel",
  },
  google: {
    factory: "createGoogle",
    defaultCompletionModel: "gemini-3.5-flash-lite",
    playgroundModelField: "googlemodel",
  },
  mistral: {
    factory: "createMistral",
    defaultCompletionModel: "mistral-small-latest",
  },
  openai: {
    factory: "createOpenAI",
    defaultCompletionModel: "gpt-5.6-luna",
    playgroundModelField: "openaimodel",
  },
} as const satisfies Record<string, ProviderDefinition>;

export type ModelProvider = keyof typeof PROVIDER_REGISTRY;
export const SUPPORTED_PROVIDERS = Object.keys(
  PROVIDER_REGISTRY,
) as ModelProvider[];

export const REASONING_EFFORTS = [
  "provider-default",
  "none",
  "minimal",
  "low",
  "medium",
  "high",
  "xhigh",
] as const;
export type ReasoningEffort = (typeof REASONING_EFFORTS)[number];

export const DEFAULT_REASONING_EFFORT: ReasoningEffort = "low";

export const DEFAULT_SYSTEM_PROMPT = `
You are a content assistant.

When <response_format> is provided, format your response as:
- "text": Plain text only, no formatting syntax.
- "markdown": Raw Markdown, no code fence wrappers.
- "rich-text": Use double newlines to separate paragraphs. For inline formatting, use HTML tags (<strong>, <em>, <code>, <a href="...">, etc.). Do NOT wrap paragraphs in <p> tags.

When <selection> is provided, use it as context for your response. Preserve any formatting (bold, italic, links, etc.) present in the selection unless the task explicitly requires different formatting.

When <reference_page> is provided, use it as reference material. Draw on its structure, style, or content as instructed by the user.
`;

export const SUGGESTION_PREFIX_LENGTH = 4000;
export const SUGGESTION_SUFFIX_LENGTH = 500;
export const SUGGESTION_ERROR_COOLDOWN_MS = 30_000;

export const SUGGESTION_SYSTEM_PROMPT = `
You are a writing assistant providing inline autocompletions.

RULES:
- Output ONLY the continuation text, NEVER repeat input
- Keep completions brief (1-2 sentences max)
- Match the existing tone and style
- No explanations or meta-commentary

FORMAT:
- If given <prefix> and <suffix> tags, insert text that bridges them naturally
- Otherwise, continue the text directly

EXAMPLE:
Input: "The quick brown fox"
Output: " jumps over the lazy dog."
`;

/// keep-sorted
export const SUPPORTED_IMAGE_MIME_TYPES = [
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/webp",
];

/// keep-sorted
export const SUPPORTED_FILE_MIME_TYPES = [
  ...SUPPORTED_IMAGE_MIME_TYPES,
  "application/pdf",
];
