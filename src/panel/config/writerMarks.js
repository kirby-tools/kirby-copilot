import { generateAndInsertText } from "./shared";

export const writerMarks = {
  copilot: {
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

    _insertText(tr, text, startPosition, { schema }) {
      let position = startPosition;
      const parts = text.split(/(\n\n?)/);

      for (const part of parts) {
        if (part === "\n\n") {
          tr = tr.replaceWith(
            position,
            position,
            this.editor.options.inline
              ? [
                  schema.nodes.hardBreak.create(),
                  schema.nodes.hardBreak.create(),
                ]
              : schema.nodes.paragraph.create(),
          );
          position += 2;
        } else if (part === "\n") {
          tr = tr.replaceWith(
            position,
            position,
            schema.nodes.hardBreak.create(),
          );
          position += 1;
        } else if (part.length > 0) {
          tr = tr.insertText(part, position);
          position += part.length;
        }
      }

      return { tr, newPosition: position };
    },

    _openPromptDialog(context) {
      const { state } = this.editor;
      const { from, to } = state.tr.selection;
      const selection = state.doc.textBetween(from, to);
      let currentPosition = to;
      let hasDeletedSelection = false;

      const appendText = (text) => {
        const { state, view } = this.editor;
        const tr = state.tr;
        const { tr: newTr, newPosition } = this._insertText(
          tr,
          text,
          currentPosition,
          context,
        );
        currentPosition = newPosition;
        view.dispatch(newTr);
      };

      const replaceText = (text) => {
        const { state, view } = this.editor;
        let tr = state.tr;

        // Only delete the selection on the first call
        if (!hasDeletedSelection) {
          const isFullSelection = isEntireDocumentSelected(state);
          const { from, to } = tr.selection;
          tr = tr.deleteRange(from, to);
          // Required for ProseMirror's 1-based position system
          currentPosition = isFullSelection ? 1 : from;
          hasDeletedSelection = true;
        }

        const { tr: newTr, newPosition } = this._insertText(
          tr,
          text,
          currentPosition,
          context,
        );
        currentPosition = newPosition;
        view.dispatch(newTr);
      };

      generateAndInsertText(selection, {
        responseFormat: "text",
        replaceText,
        appendText,
      });
    },
  },
};

function isEntireDocumentSelected(state) {
  const docSize = state.doc.content.size;
  const { from, to } = state.selection;
  return from === 0 && to === docSize;
}
