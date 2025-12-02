export const PLUGIN_CONTEXT_API_ROUTE = "__copilot__/context";
export const PLUGIN_MODEL_FIELDS_API_ROUTE = "__copilot__/model-fields";
export const PLUGIN_FIELDSETS_API_ROUTE = "__copilot__/fieldsets";

/// keep-sorted
export const SUPPORTED_PROVIDERS = ["anthropic", "google", "mistral", "openai"];
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
  list: "HTML",
  markdown: "markdown", // Community plugin field type
  textarea: "markdown",
  writer: "HTML",
};

export const DEFAULT_SYSTEM_PROMPT = `
You are an AI assistant integrated into the Kirby CMS Panel. Your primary task is to help users generate content for various field types within the CMS. You must provide relevant and helpful content based on the user's question and the specified field type, while considering any provided context.

Consider the user context if provided:
- If selected_text is provided, use it as context for the user's question.

Format your response according to the specified response_format if provided:
1. If response_format is "text", provide your response in plain text without any Markdown or HTML syntax.
2. If response_format is "HTML", format your response using HTML syntax. Only include the content that would go inside the <body> element. Use appropriate HTML tags to structure your response, including <h2> or <h3> tags for section headings.
3. If response_format is "markdown", format your response using Markdown syntax. Do not use backticks or any other wrapping characters around your response.
`;
