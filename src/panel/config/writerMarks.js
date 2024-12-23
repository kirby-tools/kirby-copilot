import { generateAndInsertText } from "./shared";

const MARKDOWN_SYNTAX_MAP = {
  "**": "bold",
  "`": "code",
};

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

    _insertText(tr, text, cursorPosition, selectionContext, context) {
      const { schema } = context;
      let position = cursorPosition;
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
          const textParts = part.split(/(\*\*|```|`)/);

          for (const part of textParts) {
            if (part in MARKDOWN_SYNTAX_MAP) {
              tr = toggleMark(
                tr,
                MARKDOWN_SYNTAX_MAP[part],
                selectionContext,
                context,
              );
              continue;
            } else if (part.length === 0) {
              continue;
            }

            tr = tr.insertText(part, position);
            position += part.length;
          }
        }
      }

      return { tr, newPosition: position };
    },

    _openPromptDialog(context) {
      const { state } = this.editor;
      const { from, to } = state.selection;
      const selection = state.doc.textBetween(from, to);
      const selectionContext = {
        activeMarks: new Set(),
      };
      let cursorPosition = to;
      let hasDeletedSelection = false;

      const appendText = (text) => {
        const { state, view } = this.editor;
        const tr = state.tr;
        const { tr: newTr, newPosition } = this._insertText(
          tr,
          text,
          cursorPosition,
          selectionContext,
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
          selectionContext,
          context,
        );
        cursorPosition = newPosition;
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

function toggleMark(tr, type, selectionContext, { schema }) {
  if (selectionContext.activeMarks.has(type)) {
    tr = tr.removeStoredMark(schema.marks[type]);
    selectionContext.activeMarks.delete(type);
  } else {
    const mark = schema.marks[type].create();
    tr = tr.addStoredMark(mark);
    selectionContext.activeMarks.add(type);
  }

  return tr;
}
