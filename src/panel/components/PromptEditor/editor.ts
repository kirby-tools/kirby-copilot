import type { EditorState } from "prosemirror-state";
import type { SkillSuggestHandlers } from "./plugins/skill-suggest";
import { baseKeymap } from "prosemirror-commands";
import { history, redo, undo } from "prosemirror-history";
import { keymap } from "prosemirror-keymap";
import { Schema, Slice } from "prosemirror-model";
import { Plugin } from "prosemirror-state";
import { Decoration, DecorationSet } from "prosemirror-view";
import { createSkillSuggestPlugin } from "./plugins/skill-suggest";
import { tokenHighlightPlugin } from "./plugins/token-highlight";

const schema = new Schema({
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

export function createEditorPlugins({
  onSubmit,
  onKeydown,
  placeholder,
  skills,
}: {
  onSubmit: () => void;
  onKeydown: (event: KeyboardEvent) => void;
  placeholder: ReturnType<typeof createPlaceholderPlugin>;
  skills: {
    has: (id: string) => boolean;
    suggest?: SkillSuggestHandlers;
  };
}) {
  return [
    // Forward Ctrl/Cmd+Enter to parent
    keymap({
      "Mod-Enter": () => {
        onSubmit();
        return true;
      },
    }),
    // `@skill://` suggestion plugin – needs to run before the base keymap
    // to capture keys for dropdown navigation
    ...(skills.suggest ? [createSkillSuggestPlugin(skills.suggest)] : []),
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
    tokenHighlightPlugin({ skills }),
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

        const firstChild = state.doc.firstChild;
        if (!firstChild) return DecorationSet.empty;

        // Use a node decoration with CSS `::before` instead of a widget
        // decoration. Chrome's caret positioning breaks when an
        // absolutely-positioned widget span is the only child of an
        // empty contenteditable paragraph.
        return DecorationSet.create(state.doc, [
          Decoration.node(0, firstChild.nodeSize, {
            class: "k-copilot-prompt-has-placeholder",
            "data-placeholder": placeholderText,
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
