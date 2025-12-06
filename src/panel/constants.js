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
You are a content assistant.

When <response_format> is provided, format your response as:
- "text": Plain text only, no formatting syntax.
- "markdown": Raw Markdown, no code fence wrappers.
- "HTML": Only body-level tags (<p>, <h2>, <ul>, <a>, etc.), no <html>/<body>.

When <selected_text> is provided, use it as context for your response.
`;
