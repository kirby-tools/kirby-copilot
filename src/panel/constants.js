export const PLUGIN_CONTEXT_API_ROUTE = "__copilot__/context";
export const PLUGIN_MODEL_FIELDS_API_ROUTE = "__copilot__/model-fields";
export const PLUGIN_FIELDSETS_API_ROUTE = "__copilot__/fieldsets";

/// keep-sorted
export const SUPPORTED_PROVIDERS = ["anthropic", "google", "mistral", "openai"];

// Provider-specific reasoning configuration per effort level with mode-specific overrides
export const PROVIDER_REASONING_MAP = {
  none: {
    anthropic: undefined,
    openai: "none",
    "openai:gpt-5-mini": "minimal", // GPT-5-mini also allows `minimal`
    google: "low",
    "google:gemini-3-flash-preview": "minimal", // Gemini 3 Flash Preview also supports `minimal`
    "google:gemini-3-flash": "minimal", // Future-proofing for Gemini 3 Flash
  },
  low: { anthropic: 8_000, openai: "low", google: "low" },
  medium: {
    anthropic: 16_000,
    openai: "medium",
    google: "medium",
    "google:gemini-3-pro-preview": "high", // Gemini 3 Pro only supports `low` or `high`
    "google:gemini-3-pro": "high", // Future-proofing for Gemini 3 Pro
  },
  high: { anthropic: 32_000, openai: "high", google: "high" },
};

// Default reasoning effort level
export const DEFAULT_REASONING_EFFORT = "low";

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

/**
 * Maximum total size for PDF files in bytes (50 MB)
 *
 * @remarks
 * If exceeded, fall back to text extraction
 */
export const PDF_SIZE_LIMIT = 50 * 1024 * 1024;

export const LOG_LEVELS = ["error", "warn", "info", "debug"];
export const DEFAULT_LOG_LEVEL = "warn";
export const STORAGE_KEY_PREFIX = "kirby$copilot$";

/// keep-sorted
export const FIELD_TYPE_RESPONSE_FORMAT = {
  list: "rich-text",
  markdown: "markdown", // Community plugin field type
  textarea: "markdown",
  writer: "rich-text",
};

export const DEFAULT_SYSTEM_PROMPT = `
You are a content assistant.

When <response_format> is provided, format your response as:
- "text": Plain text only, no formatting syntax.
- "markdown": Raw Markdown, no code fence wrappers.
- "rich-text": Use double newlines to separate paragraphs. For inline formatting, use HTML tags (<strong>, <em>, <code>, <a href="...">, etc.). Do NOT wrap paragraphs in <p> tags.

When <selection> is provided, use it as context for your response. If <selection> contains formatting, preserve similar formatting in your response.
`;
