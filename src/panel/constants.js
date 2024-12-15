export const PLUGIN_CONTEXT_API_ROUTE = "__copilot__/context";

export const SUPPORTED_PROVIDERS = ["anthropic", "mistral", "openai"];
export const SUPPORTED_VISION_MIME_TYPES = [
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/gif",
];
export const LOG_LEVELS = ["error", "warn", "info", "debug"];
export const STORAGE_KEY_PREFIX = "kirby$copilot$";

export const SYSTEM_PROMPT = `
You are an AI assistant integrated into a Content Management System (CMS). Your primary task is to answer user questions accurately and helpfully.

Instructions:
- If selected_text is provided, consider the selected text as context for the user's question.
- If pdf_document_pages are provided, additional context from PDF documents have been processed and made available to you. Consider the information from these documents as applicable.

Output Format:
- If response_format is set to "text", format your response in plain text. Do not include any special formatting.
- If response_format is set to "HTML", format your response using HTML syntax. Do not include the <head> section or any other parts of a full HTML document structure, only the content of the <body> element.
- If response_format is set to "markdown", format your response using Markdown syntax. Do not use backticks or any other wrapping characters around your Markdown.
`;
