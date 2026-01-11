import { describe, expect, it } from "vitest";
import { createHtmlChunking } from "../../src/panel/utils/models";

describe("createHtmlChunking", () => {
  describe("plain text", () => {
    it("returns null for empty buffer", () => {
      expect(createHtmlChunking()("")).toBeNull();
    });

    it("releases text before special characters", () => {
      expect(extractChunks("Hello <strong>world</strong>")[0]).toBe("Hello ");
      expect(extractChunks("Hello\nworld")[0]).toBe("Hello");
    });

    it("releases entire buffer when no tags or newlines", () => {
      expect(extractChunks("Hello, world!")).toEqual(["Hello, world!"]);
    });

    it("treats invalid tag-like text as plain text", () => {
      expect(extractChunks("<123>text")).toEqual(["<", "123>text"]);
      expect(extractChunks("a < b")).toEqual(["a ", "<", " b"]);
      expect(extractChunks("</123>x")).toEqual(["<", "/123>x"]);
    });

    it("buffers lone < at end of input", () => {
      expect(createHtmlChunking()("<")).toBeNull();
    });
  });

  describe("newlines", () => {
    it("releases consecutive newlines as one chunk", () => {
      expect(extractChunks("\n\n\nText")).toEqual(["\n\n\n", "Text"]);
    });

    it("splits text at newlines", () => {
      expect(extractChunks("First\nSecond")).toEqual(["First", "\n", "Second"]);
    });
  });

  describe("void elements", () => {
    it("releases void and self-closing elements immediately", () => {
      expect(extractChunks("<br>text")[0]).toBe("<br>");
      expect(extractChunks("<img src='x' />text")[0]).toBe("<img src='x' />");
      expect(extractChunks("<hr><br>")[0]).toBe("<hr>");
    });
  });

  describe("paired elements", () => {
    it("buffers until closing tag is found", () => {
      const detectChunk = createHtmlChunking();
      expect(detectChunk("<p>Incomplete")).toBeNull();
      expect(detectChunk("<p>Complete</p>")).toBe("<p>Complete</p>");
    });

    it("releases complete elements", () => {
      expect(extractChunks("<strong>bold</strong> text")).toEqual([
        "<strong>bold</strong>",
        " text",
      ]);
    });

    it("handles orphan closing tags", () => {
      expect(extractChunks("</p>text")[0]).toBe("</p>");
    });

    it("handles empty elements", () => {
      expect(extractChunks("<span></span>text")[0]).toBe("<span></span>");
    });

    it("handles elements with attributes", () => {
      expect(extractChunks('<a href="x" class="y">text</a>rest')[0]).toBe(
        '<a href="x" class="y">text</a>',
      );
    });
  });

  describe("nested elements", () => {
    it("tracks depth for same-name elements", () => {
      expect(extractChunks("<div><div><div>x</div></div></div>y")[0]).toBe(
        "<div><div><div>x</div></div></div>",
      );
    });

    it("handles different nested elements", () => {
      expect(extractChunks("<ul><li>item</li></ul>x")[0]).toBe(
        "<ul><li>item</li></ul>",
      );
    });
  });

  describe("streaming behavior", () => {
    it("buffers incomplete tags", () => {
      const detectChunk = createHtmlChunking();
      expect(detectChunk("<stron")).toBeNull();
      expect(detectChunk("<strong>text")).toBeNull();
      expect(detectChunk("<strong>text</strong>")).toBe(
        "<strong>text</strong>",
      );
    });

    it("processes mixed content", () => {
      expect(extractChunks("Text <em>x</em>\n<p>y</p>")).toEqual([
        "Text ",
        "<em>x</em>",
        "\n",
        "<p>y</p>",
      ]);
    });
  });
});

function extractChunks(input: string) {
  const detectChunk = createHtmlChunking();
  const chunks: string[] = [];
  let buffer = input;

  while (buffer) {
    const chunk = detectChunk(buffer);
    if (chunk == null) break;
    chunks.push(chunk);
    buffer = buffer.slice(chunk.length);
  }

  return chunks;
}
