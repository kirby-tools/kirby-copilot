export const PLUGIN_CONTEXT_API_ROUTE = "__copilot__/context";
export const PLUGIN_MODEL_FIELDS_API_ROUTE = "__copilot__/model-fields";
export const PLUGIN_FIELDSETS_API_ROUTE = "__copilot__/fieldsets";
export const PLUGIN_PROXY_API_ROUTE = "__copilot__/proxy";

// Marker replaced by the PHP proxy with the real API key
export const PROXY_API_KEY_MARKER = "__KIRBY_COPILOT_PROXY__";

export const STORAGE_KEY_PREFIX = "kirby$copilot$";

export const LOG_LEVELS = ["error", "warn", "info", "debug"] as const;
export type LogLevel = (typeof LOG_LEVELS)[number];
export const DEFAULT_LOG_LEVEL: LogLevel = "warn";

/// keep-sorted
export const SUPPORTED_PROVIDERS = ["anthropic", "google", "mistral", "openai"];
export type ModelProvider = (typeof SUPPORTED_PROVIDERS)[number];

// Universal reasoning efforts used across all providers
export const REASONING_EFFORTS = ["none", "low", "medium", "high"] as const;
export type ReasoningEffort = (typeof REASONING_EFFORTS)[number];

// Default reasoning effort level
export const DEFAULT_REASONING_EFFORT: ReasoningEffort = "low";

/**
 * Unified reasoning configuration per effort level.
 *
 * @remarks
 * Use `provider:model` keys for model-specific overrides.
 */
export const PROVIDER_REASONING_MAP: Record<
  ReasoningEffort,
  Partial<
    Record<
      ModelProvider | `${ModelProvider}:${string}`,
      string | number | undefined
    >
  >
> = {
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

export const DEFAULT_SYSTEM_PROMPT = `
You are a content assistant.

When <response_format> is provided, format your response as:
- "text": Plain text only, no formatting syntax.
- "markdown": Raw Markdown, no code fence wrappers.
- "rich-text": Use double newlines to separate paragraphs. For inline formatting, use HTML tags (<strong>, <em>, <code>, <a href="...">, etc.). Do NOT wrap paragraphs in <p> tags.

When <selection> is provided, use it as context for your response. Preserve any formatting (bold, italic, links, etc.) present in the selection unless the task explicitly requires different formatting.
`;

/// keep-sorted
export const DEFAULT_COMPLETION_MODELS = {
  anthropic: "claude-haiku-4-5-20251001",
  google: "gemini-3-flash-preview",
  mistral: "mistral-small-latest",
  openai: "gpt-5-nano",
};

export const COMPLETION_PREFIX_LENGTH = 4000;
export const COMPLETION_SUFFIX_LENGTH = 500;

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

export const PROMPT_FORMATTING_INSTRUCTIONS: Record<string, string> = {
  en: "IMPORTANT: Preserve all formatting (bold, italic, links, code, headings, lists, etc.) exactly as in the original.",
  de: "WICHTIG: Bewahre alle Formatierungen (fett, kursiv, Links, Code, Überschriften, Listen usw.) exakt wie im Original.",
  fr: "IMPORTANT : Conservez toutes les mises en forme (gras, italique, liens, code, titres, listes, etc.) exactement comme dans l'original.",
  nl: "BELANGRIJK: Behoud alle opmaak (vet, cursief, links, code, koppen, lijsten, enz.) exact zoals in het origineel.",
};

export const DEFAULT_PROMPT_TEMPLATES: Record<
  string,
  { label: string; prompt: string }[]
> = {
  en: [
    {
      label: "Fix Grammar & Spelling",
      prompt: `Fix all spelling and grammar errors in the given text. ${PROMPT_FORMATTING_INSTRUCTIONS.en} Only output the corrected text, nothing else.`,
    },
    {
      label: "Make Concise",
      prompt: `Make the given text more concise by removing unnecessary words while keeping the meaning intact. ${PROMPT_FORMATTING_INSTRUCTIONS.en} Only output the reduced text, nothing else.`,
    },
    {
      label: "Simplify",
      prompt: `Simplify the given text to make it easier to understand, using simpler words and shorter sentences. ${PROMPT_FORMATTING_INSTRUCTIONS.en} Only output the simplified text, nothing else.`,
    },
    {
      label: "Extend",
      prompt: `Extend the given text with more details, examples, or explanations while maintaining the same style and tone. ${PROMPT_FORMATTING_INSTRUCTIONS.en} Only output the extended text, nothing else.`,
    },
    {
      label: "Summarize",
      prompt:
        "Summarize the given text concisely while keeping the key points. Only output the summary, nothing else.",
    },
  ],
  de: [
    {
      label: "Grammatik & Rechtschreibung korrigieren",
      prompt: `Korrigiere alle Rechtschreib- und Grammatikfehler im gegebenen Text. ${PROMPT_FORMATTING_INSTRUCTIONS.de} Gib nur den korrigierten Text aus, sonst nichts.`,
    },
    {
      label: "Kürzen",
      prompt: `Mache den gegebenen Text prägnanter, indem du unnötige Wörter entfernst, aber die Bedeutung beibehältst. ${PROMPT_FORMATTING_INSTRUCTIONS.de} Gib nur den gekürzten Text aus, sonst nichts.`,
    },
    {
      label: "Vereinfachen",
      prompt: `Vereinfache den gegebenen Text, um ihn verständlicher zu machen, indem du einfachere Wörter und kürzere Sätze verwendest. ${PROMPT_FORMATTING_INSTRUCTIONS.de} Gib nur den vereinfachten Text aus, sonst nichts.`,
    },
    {
      label: "Erweitern",
      prompt: `Erweitere den gegebenen Text mit mehr Details, Beispielen oder Erklärungen, während du den gleichen Stil und Ton beibehältst. ${PROMPT_FORMATTING_INSTRUCTIONS.de} Gib nur den erweiterten Text aus, sonst nichts.`,
    },
    {
      label: "Zusammenfassen",
      prompt:
        "Fasse den gegebenen Text prägnant zusammen und behalte dabei die wichtigsten Punkte bei. Gib nur die Zusammenfassung aus, sonst nichts.",
    },
  ],
  fr: [
    {
      label: "Corriger grammaire et orthographe",
      prompt: `Corrigez toutes les erreurs d'orthographe et de grammaire dans le texte donné. ${PROMPT_FORMATTING_INSTRUCTIONS.fr} N'affichez que le texte corrigé, rien d'autre.`,
    },
    {
      label: "Rendre concis",
      prompt: `Rendez le texte donné plus concis en supprimant les mots inutiles tout en conservant le sens. ${PROMPT_FORMATTING_INSTRUCTIONS.fr} N'affichez que le texte réduit, rien d'autre.`,
    },
    {
      label: "Simplifier",
      prompt: `Simplifiez le texte donné pour le rendre plus facile à comprendre, en utilisant des mots plus simples et des phrases plus courtes. ${PROMPT_FORMATTING_INSTRUCTIONS.fr} N'affichez que le texte simplifié, rien d'autre.`,
    },
    {
      label: "Développer",
      prompt: `Développez le texte donné avec plus de détails, d'exemples ou d'explications tout en conservant le même style et le même ton. ${PROMPT_FORMATTING_INSTRUCTIONS.fr} N'affichez que le texte développé, rien d'autre.`,
    },
    {
      label: "Résumer",
      prompt:
        "Résumez le texte donné de manière concise tout en conservant les points clés. N'affichez que le résumé, rien d'autre.",
    },
  ],
  nl: [
    {
      label: "Grammatica & spelling corrigeren",
      prompt: `Corrigeer alle spelling- en grammaticafouten in de gegeven tekst. ${PROMPT_FORMATTING_INSTRUCTIONS.nl} Geef alleen de gecorrigeerde tekst weer, niets anders.`,
    },
    {
      label: "Beknopter maken",
      prompt: `Maak de gegeven tekst beknopter door onnodige woorden te verwijderen terwijl de betekenis behouden blijft. ${PROMPT_FORMATTING_INSTRUCTIONS.nl} Geef alleen de verkorte tekst weer, niets anders.`,
    },
    {
      label: "Vereenvoudigen",
      prompt: `Vereenvoudig de gegeven tekst om deze gemakkelijker te begrijpen, door eenvoudigere woorden en kortere zinnen te gebruiken. ${PROMPT_FORMATTING_INSTRUCTIONS.nl} Geef alleen de vereenvoudigde tekst weer, niets anders.`,
    },
    {
      label: "Uitbreiden",
      prompt: `Breid de gegeven tekst uit met meer details, voorbeelden of uitleg terwijl dezelfde stijl en toon behouden blijven. ${PROMPT_FORMATTING_INSTRUCTIONS.nl} Geef alleen de uitgebreide tekst weer, niets anders.`,
    },
    {
      label: "Samenvatten",
      prompt:
        "Vat de gegeven tekst beknopt samen terwijl de belangrijkste punten behouden blijven. Geef alleen de samenvatting weer, niets anders.",
    },
  ],
};
