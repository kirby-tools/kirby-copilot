export const PLUGIN_CONTEXT_API_ROUTE = "__copilot__/context";
export const PLUGIN_MODEL_FIELDS_API_ROUTE = "__copilot__/model-fields";
export const PLUGIN_FIELDSETS_API_ROUTE = "__copilot__/fieldsets";
export const PLUGIN_PROXY_API_ROUTE = "__copilot__/proxy";

/// keep-sorted
export const SUPPORTED_PROVIDERS = ["anthropic", "google", "mistral", "openai"];

// Provider-specific reasoning configuration per effort level with mode-specific overrides
export const PROVIDER_REASONING_MAP = {
  none: {
    anthropic: undefined,
    openai: "none",
    "openai:gpt-5": "minimal", // GPT-5 does not support `none`
    "openai:gpt-5-mini": "minimal", // GPT-5-mini does not support `none`
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
export const DEFAULT_COMPLETION_MODELS = {
  anthropic: "claude-haiku-4-5-20251001",
  google: "gemini-3-flash-preview",
  mistral: "mistral-small-latest",
  openai: "gpt-5-nano",
};

export const COMPLETION_MAX_TOKENS = 100;
export const COMPLETION_PREFIX_LENGTH = 4000;
export const COMPLETION_SUFFIX_LENGTH = 500;

export const DEFAULT_SYSTEM_PROMPT = `
You are a content assistant.

When <response_format> is provided, format your response as:
- "text": Plain text only, no formatting syntax.
- "markdown": Raw Markdown, no code fence wrappers.
- "rich-text": Use double newlines to separate paragraphs. For inline formatting, use HTML tags (<strong>, <em>, <code>, <a href="...">, etc.). Do NOT wrap paragraphs in <p> tags.

When <selection> is provided, use it as context for your response. Preserve any formatting (bold, italic, links, etc.) present in the selection unless the task explicitly requires different formatting.
`;

export const COMPLETION_SYSTEM_PROMPT = `
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
