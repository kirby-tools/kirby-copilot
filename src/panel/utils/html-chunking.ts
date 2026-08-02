import type { ChunkDetector } from "ai";

const HTML_VOID_ELEMENTS = new Set(["br", "hr", "img", "wbr"]);

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

    if (tagIndex === -1 && newlineIndex === -1) {
      return buffer;
    }

    const firstSpecialIndex =
      tagIndex === -1
        ? newlineIndex
        : newlineIndex === -1
          ? tagIndex
          : Math.min(tagIndex, newlineIndex);

    if (firstSpecialIndex > 0) {
      return buffer.slice(0, firstSpecialIndex);
    }

    // Release a newline run as a single chunk so paragraph breaks stay intact
    if (firstSpecialIndex === newlineIndex) {
      return buffer.match(/^\n+/)![0];
    }

    return parseHtmlElement(buffer);
  };
}

function parseHtmlElement(buffer: string): string | null {
  // Tag-like text that is not a tag (e.g. `<123>`, `<>`) – release `<` as plain text
  if (!/^<\/?[a-z]/i.test(buffer)) {
    return buffer.length > 1 ? "<" : null;
  }

  if (buffer.startsWith("</")) {
    const closeEnd = buffer.indexOf(">");
    return closeEnd === -1 ? null : buffer.slice(0, closeEnd + 1);
  }

  const tagMatch = buffer.match(/^<([a-z][a-z0-9-]*)(?:\s[^>]*)?(\/?)>/i);
  if (!tagMatch) return null;

  const [fullMatch, tagName, selfClosing] = tagMatch;
  const tagLower = tagName!.toLowerCase();

  if (selfClosing || HTML_VOID_ELEMENTS.has(tagLower)) {
    return fullMatch;
  }

  return findMatchingCloseTag(buffer, tagLower, fullMatch.length);
}

/**
 * Finds the matching closing tag for an element, handling nested same-name tags.
 *
 * @remarks
 * For `<ol><li>item</li></ol>`, only `<ol>` depth is tracked – inner `<li>` tags
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

    // Wait for more input rather than emitting a half element
    if (nextClose === -1) return null;

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
