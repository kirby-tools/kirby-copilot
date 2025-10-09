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

    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i];

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
      } else if (segment.length > 0) {
        const isMarkdownSyntax = segment in MARKDOWN_SYNTAX_MAP;

        if (isMarkdownSyntax) {
          const nextSegment = i < segments.length - 1 ? segments[i + 1] : "";
          const isClosingMark = isClosingActiveMark(
            segment,
            transactionContext.activeMarks,
          );
          const shouldFormat =
            isClosingMark || shouldApplyMarkdownFormat(segment, nextSegment);

          if (
            shouldFormat &&
            !transactionContext.lastSegment.includes(segment)
          ) {
            for (const markName of MARKDOWN_SYNTAX_MAP[segment]) {
              tr = toggleMark(tr, markName, transactionContext, context);
            }
            transactionContext.lastSegment = segment;
            continue; // Don't insert the markdown syntax as text
          }
        }

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

function isEntireDocumentSelected(state) {
  const docSize = state.doc.content.size;
  const { from, to } = state.selection;
  return from === 0 && to === docSize;
}

function toggleMark(tr, type, transactionContext, { schema }) {
  const markType = schema.marks[type];
  if (!markType) return tr;

  // Check if this mark type is currently active
  const activeMark = [...transactionContext.activeMarks].find(
    (mark) => mark.type.name === type,
  );

  if (activeMark) {
    // Deactivate: remove from active marks and clear stored marks
    transactionContext.activeMarks.delete(activeMark);
    const remainingMarks = [...transactionContext.activeMarks];
    return tr.setStoredMarks(remainingMarks);
  } else {
    // Activate: add to active marks
    const mark = markType.create();
    transactionContext.activeMarks.add(mark);
    return tr.addStoredMark(mark);
  }
}

function isClosingActiveMark(segment, activeMarks) {
  return [...activeMarks].some((mark) => {
    for (const [syntax, markNames] of Object.entries(MARKDOWN_SYNTAX_MAP)) {
      if (syntax === segment && markNames.includes(mark.type.name)) {
        return true;
      }
    }

    return false;
  });
}

function shouldApplyMarkdownFormat(segment, nextSegment) {
  // Backticks are always code formatting
  if (segment.startsWith("`")) {
    return true;
  }

  // For asterisks: check if followed by space (list marker) or non-space (formatting)
  if (segment.startsWith("*")) {
    // If next segment starts with space(s), it's a list marker
    // Examples: `* item`, `*   item`
    if (/^\s/.test(nextSegment)) {
      return false; // Don't process as markdown (treat as literal list marker)
    }
    // If next segment is non-empty and starts with non-space, it's formatting
    // Examples: `*text`, `**text`
    return nextSegment.length > 0 && /\S/.test(nextSegment);
  }

  return false;
}
