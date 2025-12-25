import { DOMParser } from "prosemirror-model";
import { generateAndInsertText } from "./shared";

const copilot = {
  get button() {
    return {
      icon: "sparkling",
      label: "Copilot Prompt",
    };
  },

  commands(context) {
    return () => this._openPromptDialog(context);
  },

  keys(context) {
    return {
      "Mod-.": () => this._openPromptDialog(context),
    };
  },

  get name() {
    return "copilot";
  },

  _insertText(tr, text, cursorPosition, context) {
    const position = cursorPosition;

    // Handle double newline as paragraph break
    if (text === "\n\n") {
      const node = this.editor.options.inline
        ? [
            context.schema.nodes.hardBreak.create(),
            context.schema.nodes.hardBreak.create(),
          ]
        : context.schema.nodes.paragraph.create();
      tr = tr.replaceWith(position, position, node);
      return { tr, newPosition: position + 2 };
    }

    // Handle single newline as hard break
    if (text === "\n") {
      tr = tr.replaceWith(
        position,
        position,
        context.schema.nodes.hardBreak.create(),
      );
      return { tr, newPosition: position + 1 };
    }

    // Check if text contains HTML (complete elements from chunking)
    if (text.includes("<")) {
      try {
        // Match Kirby's pattern: https://github.com/getkirby/kirby/blob/42cd286dab62d87a331e53abfe103e4fba118dd6/panel/src/components/Forms/Writer/Editor.js#L100
        const htmlString = `<div>${text}</div>`;
        const element = new window.DOMParser().parseFromString(
          htmlString,
          "text/html",
        ).body.firstElementChild;

        const parser = DOMParser.fromSchema(context.schema);
        const slice = parser.parseSlice(element);

        const sizeBefore = tr.doc.content.size;
        tr = tr.replaceRange(position, position, slice);
        const sizeAfter = tr.doc.content.size;
        return { tr, newPosition: position + (sizeAfter - sizeBefore) };
      } catch (error) {
        console.error("Failed to parse HTML:", error);
        // Fall through to plain text insertion
      }
    }

    tr = tr.setStoredMarks([]).insertText(text, position);
    return { tr, newPosition: position + text.length };
  },

  _openPromptDialog(context) {
    const { state } = this.editor;
    const { from, to } = state.selection;

    // Get HTML-formatted selection and normalize to rich-text format
    let selection = "";
    if (from !== to) {
      const fragment = state.doc.slice(from, to).content;
      selection = normalizeHtmlToRichText(this.editor.getHTML(fragment));
    }

    let cursorPosition;
    let hasDeletedSelection = false;
    let isFirstInsertion = true;

    const appendText = (text) => {
      const { state, view } = this.editor;

      if (isFirstInsertion) {
        cursorPosition = state.selection.to;
        isFirstInsertion = false;
      }

      const { tr: newTr, newPosition } = this._insertText(
        state.tr,
        text,
        cursorPosition,
        context,
      );

      cursorPosition = newPosition;
      view.dispatch(newTr);
    };

    const replaceText = (text) => {
      const { state, view } = this.editor;
      let tr = state.tr;

      // Only delete the selection on the first call
      if (!hasDeletedSelection) {
        const isFullSelection = isEntireDocumentSelected(state);
        const { from, to } = state.selection;
        tr = tr.deleteRange(from, to);
        // Required for ProseMirror's 1-based position system
        cursorPosition = isFullSelection ? 1 : from;
        hasDeletedSelection = true;
      }

      const { tr: newTr, newPosition } = this._insertText(
        tr,
        text,
        cursorPosition,
        context,
      );
      cursorPosition = newPosition;
      view.dispatch(newTr);
    };

    generateAndInsertText(selection, {
      responseFormat: "rich-text",
      replaceText,
      appendText,
    });
  },
};

export const writerMarks = {
  copilot,
};

function isEntireDocumentSelected(state) {
  const { from, to } = state.selection;
  return from <= 1 && to >= state.doc.content.size - 1;
}

/**
 * Converts HTML with `<p>` and `<br>` tags to rich-text format (newlines for breaks).
 */
function normalizeHtmlToRichText(html) {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>\s*<p>/gi, "\n\n")
    .replace(/^<p>|<\/p>$/gi, "");
}
