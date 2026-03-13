import { baseKeymap } from "prosemirror-commands";
import { history, redo, undo } from "prosemirror-history";
import { keymap } from "prosemirror-keymap";
import { Schema } from "prosemirror-model";
import { Slice } from "prosemirror-model";
import { EditorState, Plugin } from "prosemirror-state";
import { Decoration, DecorationSet } from "prosemirror-view";

const PAGE_REF_TOKEN_REGEX_SOURCE = String.raw`@page://([\w\-/]+)`;
const PLACEHOLDER_TOKEN_REGEX_SOURCE = String.raw`\{[^}]+\}`;

const TOKEN_HIGHLIGHT_PATTERNS = [
  {
    className: "k-copilot-token-placeholder",
    createRegex: () => new RegExp(PLACEHOLDER_TOKEN_REGEX_SOURCE, "g"),
  },
  {
    className: "k-copilot-token-page-ref",
    createRegex: createPageRefTokenRegex,
  },
] as const;

export const schema = new Schema({
  nodes: {
    doc: { content: "block+" },
    paragraph: {
      content: "inline*",
      group: "block",
      toDOM: () => ["p", 0] as const,
      parseDOM: [{ tag: "p" }],
    },
    text: { group: "inline" },
  },
});

export function createPageRefTokenRegex() {
  return new RegExp(PAGE_REF_TOKEN_REGEX_SOURCE, "g");
}

export function extractPageRefIds(text: string) {
  return Array.from(
    text.matchAll(createPageRefTokenRegex()),
    ([, pageId]) => pageId,
  );
}

export function createEditorPlugins({
  onSubmit,
  onKeydown,
  placeholder,
}: {
  onSubmit: () => void;
  onKeydown: (event: KeyboardEvent) => void;
  placeholder: ReturnType<typeof createPlaceholderPlugin>;
}) {
  return [
    // Forward Ctrl/Cmd+Enter to parent
    keymap({
      "Mod-Enter": () => {
        onSubmit();
        return true;
      },
    }),
    // Forward arrow keys to parent for history navigation
    new Plugin({
      props: {
        handleKeyDown(view, event) {
          const { head } = view.state.selection;
          if (event.key === "ArrowUp" && head <= 1) {
            onKeydown(event);
          } else if (
            event.key === "ArrowDown" &&
            head >= view.state.doc.content.size - 1
          ) {
            onKeydown(event);
          }
          return false;
        },
      },
    }),
    // Force plain-text paste to avoid HTML artifacts from clipboard
    new Plugin({
      props: {
        clipboardTextParser(text) {
          return new Slice(createDocFromText(text).content, 0, 0);
        },
      },
    }),
    history(),
    keymap({ "Mod-z": undo, "Mod-y": redo, "Mod-Shift-z": redo }),
    tokenHighlightPlugin(),
    placeholder.plugin,
    keymap(baseKeymap),
  ];
}

export function createDocFromText(text: string) {
  if (!text) {
    return schema.node("doc", null, [schema.node("paragraph")]);
  }

  const paragraphs = text
    .split("\n")
    .map((line) =>
      schema.node("paragraph", null, line ? [schema.text(line)] : []),
    );

  return schema.node("doc", null, paragraphs);
}

export function getPlainText(state: EditorState): string {
  return state.doc.textBetween(0, state.doc.content.size, "\n");
}

export function createPlaceholderPlugin(initialText: string) {
  let placeholderText = initialText;

  const plugin = new Plugin({
    props: {
      decorations(state) {
        if (state.doc.textContent.length > 0) return DecorationSet.empty;

        return DecorationSet.create(state.doc, [
          Decoration.widget(1, () => {
            const span = document.createElement("span");
            span.className = "k-copilot-prompt-placeholder";
            span.textContent = placeholderText;
            return span;
          }),
        ]);
      },
    },
  });

  return {
    plugin,
    setPlaceholder(text: string) {
      placeholderText = text;
    },
  };
}

function tokenHighlightPlugin() {
  return new Plugin({
    props: {
      decorations(state) {
        return buildDecorations(state);
      },
    },
  });
}

function buildDecorations(state: EditorState): DecorationSet {
  const decorations: Decoration[] = [];

  state.doc.descendants((node, pos) => {
    if (!node.isText || !node.text) return;

    for (const pattern of TOKEN_HIGHLIGHT_PATTERNS) {
      const regex = pattern.createRegex();
      let match: RegExpExecArray | null;

      while ((match = regex.exec(node.text)) !== null) {
        decorations.push(
          Decoration.inline(
            pos + match.index,
            pos + match.index + match[0].length,
            { class: pattern.className },
          ),
        );
      }
    }
  });

  return DecorationSet.create(state.doc, decorations);
}
