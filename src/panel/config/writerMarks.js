import { generateAndInsertText } from "./shared";

const MARKDOWN_SYNTAX_MAP = {
  "***": ["bold", "italic"],
  "**": ["bold"],
  "*": ["italic"],
  "`": ["code"],
};

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

  _insertText(tr, text, cursorPosition, transactionContext, context) {
    let position = cursorPosition;
    const segments = text.split(/(\n\n?|\*{1,3}|`{1,3})/);

    for (const segment of segments) {
      // Skip empty segments from split
      if (!segment || segment.length === 0) {
        continue;
      }

      if (segment === "\n\n") {
        // Insert paragraph break (block-level) or two hard breaks (inline mode)
        const nodes = this.editor.options.inline
          ? [
              context.schema.nodes.hardBreak.create(),
              context.schema.nodes.hardBreak.create(),
            ]
          : context.schema.nodes.paragraph.create();

        tr = tr.replaceWith(position, position, nodes);
        position += this.editor.options.inline ? 2 : 1;
        transactionContext.lastSegment = segment;
      } else if (segment === "\n") {
        // Insert single hard break
        tr = tr.replaceWith(
          position,
          position,
          context.schema.nodes.hardBreak.create(),
        );
        position += 1;
        transactionContext.lastSegment = segment;
      } else {
        // Handle markdown syntax markers (bold, italic, code)
        const isMarkdownSyntax = segment in MARKDOWN_SYNTAX_MAP;

        // Check if we're closing an active mark by looking for the same syntax
        const isClosingActiveMark =
          isMarkdownSyntax &&
          [...transactionContext.activeMarks].some((mark) => {
            // Find which syntax corresponds to this mark
            for (const [syntax, markNames] of Object.entries(
              MARKDOWN_SYNTAX_MAP,
            )) {
              if (syntax === segment && markNames.includes(mark.type.name)) {
                return true;
              }
            }
            return false;
          });

        if (
          isMarkdownSyntax &&
          (!transactionContext.lastSegment.includes(segment) ||
            isClosingActiveMark)
        ) {
          for (const markName of MARKDOWN_SYNTAX_MAP[segment]) {
            tr = toggleMark(tr, markName, transactionContext, context);
          }
          transactionContext.lastSegment = segment;
          continue; // Don't insert the markdown syntax as text
        }

        // Insert regular text
        tr = tr.insertText(segment, position);
        position += segment.length;
        transactionContext.lastSegment = segment;
      }
    }

    return { tr, newPosition: position };
  },

  _openPromptDialog(context) {
    const { state } = this.editor;
    const { from, to } = state.selection;
    const textSelection = state.doc.textBetween(from, to);
    const transactionContext = {
      activeMarks: new Set(),
      lastSegment: "",
    };

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
        transactionContext,
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
        transactionContext,
        context,
      );
      cursorPosition = newPosition;
      view.dispatch(newTr);
    };

    generateAndInsertText(textSelection, {
      responseFormat: "text",
      replaceText,
      appendText,
    });
  },
};

export const writerMarks = {
  copilot,
};

function toggleMark(tr, type, transactionContext, { schema }) {
  if (
    [...transactionContext.activeMarks].some((mark) => mark.type.name === type)
  ) {
    transactionContext.activeMarks.delete(type);
    const activeMarks = [...transactionContext.activeMarks].filter(
      (mark) => mark.type.name !== type,
    );
    return tr.setStoredMarks(activeMarks);
  } else {
    const mark = schema.marks[type].create();
    transactionContext.activeMarks.add(mark);
    return tr.addStoredMark(mark);
  }
}

function isEntireDocumentSelected(state) {
  const docSize = state.doc.content.size;
  const { from, to } = state.selection;
  return from === 0 && to === docSize;
}
