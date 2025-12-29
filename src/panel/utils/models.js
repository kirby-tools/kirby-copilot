/**
 * Checks if a model supports reasoning/thinking capabilities.
 *
 * @param {string} modelName - The model identifier to check
 * @returns {boolean} Whether the model supports reasoning
 */
export function supportsReasoning(modelName) {
  return (
    // OpenAI: GPT-5 series (gpt-5, gpt-5-mini, gpt-5-nano, gpt-5.1, gpt-5.2, etc.)
    // and o-series reasoning models (o1, o3, o3-mini, o4-mini)
    modelName.startsWith("gpt-5") ||
    /^o[134]-/.test(modelName) ||
    modelName === "o1" ||
    modelName === "o3" ||
    // Google: Gemini 2.5+ supports thinking (2.5 Pro, 2.5 Flash, 3 Pro, 3 Flash)
    modelName.startsWith("gemini-2.5") ||
    modelName.startsWith("gemini-3") ||
    // Anthropic: Claude 4+ supports extended thinking (claude-sonnet-4, claude-opus-4, claude-haiku-4-5, etc.)
    /^claude-[^-]+-4/.test(modelName) ||
    // Mistral: Magistral models are reasoning models
    modelName.startsWith("magistral")
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
export function createHtmlChunking() {
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
