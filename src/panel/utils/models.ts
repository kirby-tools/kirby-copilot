import type { ChunkDetector } from "ai";
import type { OutputFormat } from "../types";

const HTML_VOID_ELEMENTS = new Set(["br", "hr", "img", "wbr"]);

/**
 * Builds a user prompt with output format and optional selection context.
 */
export function buildUserPrompt(
  prompt: string,
  {
    responseFormat,
    selection,
  }: {
    responseFormat?: OutputFormat;
    selection?: string;
  } = {},
) {
  return [
    responseFormat && `<response_format>${responseFormat}</response_format>`,
    selection && `<selection>\n${selection}\n</selection>`,
    prompt,
  ]
    .filter(Boolean)
    .join("\n\n");
}

/**
 * Extracts the native model ID from a gateway-prefixed identifier.
 *
 * @remarks
 * Some gateways (Vercel AI Gateway, Cloudflare AI Gateway `/compat`) require
 * `{provider}/{model}` model IDs. Returns the part after the first slash so
 * reasoning detection and config lookups see the upstream-native name.
 */
export function extractNativeModelId(modelId: string): string {
  const index = modelId.indexOf("/");
  return index === -1 ? modelId : modelId.slice(index + 1);
}

/**
 * Checks if a model exposes a configurable reasoning/thinking knob.
 *
 * @remarks
 * Gemini 2.5 is excluded: it uses numeric `thinkingBudget` instead of the
 * `thinkingLevel` enum, and emitting an incompatible shape is worse than
 * the SDK default. Mistral excludes `medium`/`large`: only Small 4 and
 * `magistral-*` honor `reasoning_effort`; the rest silently ignore it.
 */
export function supportsReasoning(modelName: string) {
  return (
    // OpenAI: GPT-5 family (gpt-5, gpt-5-mini/nano, gpt-5.1/.2/.4)
    modelName.startsWith("gpt-5") ||
    // Google: Gemini 3+ exposes `thinkingLevel`
    modelName.startsWith("gemini-3") ||
    // Anthropic: Claude 4+ and Mythos
    /^claude-(?:opus|sonnet|haiku)-\d/.test(modelName) ||
    modelName.startsWith("claude-mythos-") ||
    // Mistral: Small 4 (`mistral-small-latest`) and `magistral-*` only
    modelName.startsWith("mistral-small") ||
    modelName.startsWith("magistral-")
  );
}

/**
 * Checks if a Claude model requires the legacy `{type: "enabled", budget_tokens: N}`
 * shape instead of adaptive thinking.
 *
 * @remarks
 * Adaptive thinking landed with Opus 4.6 / Sonnet 4.6; Opus 4.7 rejects
 * `type: "enabled"` outright. This matcher covers 4.0 (bare and dated),
 * 4.1, and 4.5; everything else falls through to adaptive.
 */
export function usesLegacyExtendedThinking(modelName: string) {
  return /^claude-(?:opus|sonnet|haiku)-4(?:-(?:[0-5](?:-\d{8})?|\d{8}))?$/.test(
    modelName,
  );
}

/**
 * Creates a chunk detector for rich-text streaming that buffers complete HTML elements.
 *
 * @remarks
 * Combines "line" chunking behavior (newlines as separate chunks) with HTML-aware
 * buffering to ensure tags are never split mid-stream. Handles nested elements
 * of the same type (e.g., `<ol><ol>...</ol></ol>`).
 */
export function createHtmlChunking(): ChunkDetector {
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
      return buffer.match(/^\n+/)![0];
    }

    // HTML tag at start - parse and return complete tag
    return parseHtmlElement(buffer);
  };
}

/**
 * Parses a complete HTML element from the start of the buffer.
 */
function parseHtmlElement(buffer: string): string | null {
  // Invalid tag-like text (e.g. `<123>`, `<>`) - release `<` as plain text
  if (!/^<\/?[a-z]/i.test(buffer)) {
    return buffer.length > 1 ? "<" : null;
  }

  // Closing tag - return it immediately
  if (buffer.startsWith("</")) {
    const closeEnd = buffer.indexOf(">");
    return closeEnd === -1 ? null : buffer.slice(0, closeEnd + 1);
  }

  // Opening tag - extract tag name and attributes
  const tagMatch = buffer.match(/^<([a-z][a-z0-9-]*)(?:\s[^>]*)?(\/?)>/i);
  if (!tagMatch) return null;

  const [fullMatch, tagName, selfClosing] = tagMatch;
  const tagLower = tagName!.toLowerCase();

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
 */
function findMatchingCloseTag(
  buffer: string,
  tagName: string,
  startPosition: number,
): string | null {
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
