import { describe, expect, it } from "vitest";
import { createHtmlChunking } from "../../../src/panel/utils/html-chunking";

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

    it("buffers an undecided < or </ at end of input", () => {
      expect(createHtmlChunking()("<")).toBeNull();
      // Releasing `<` here would strand `/b>` in the stream as literal text.
      expect(createHtmlChunking()("</")).toBeNull();
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
      expect(extractChunks("<input><p>x</p>")[0]).toBe("<input>");
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

    it("releases an orphan closing tag as its own chunk", () => {
      expect(extractChunks("</p>text")[0]).toBe("</p>");
    });

    it("releases an empty element as one chunk", () => {
      expect(extractChunks("<span></span>text")[0]).toBe("<span></span>");
    });

    it("releases an element whose opening tag carries attributes", () => {
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

    it("releases nested elements of different names as one chunk", () => {
      expect(extractChunks("<ul><li>item</li></ul>x")[0]).toBe(
        "<ul><li>item</li></ul>",
      );
    });

    it("ignores an inner tag that merely starts with the same name", () => {
      expect(extractChunks("<b>x<br></b>y")[0]).toBe("<b>x<br></b>");
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

    it("splits mixed text, elements, and newlines into separate chunks", () => {
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
