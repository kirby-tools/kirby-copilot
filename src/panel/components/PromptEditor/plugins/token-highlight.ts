import type { EditorState } from "prosemirror-state";
import { Plugin } from "prosemirror-state";
import { Decoration, DecorationSet } from "prosemirror-view";
import { createPageRefTokenRegex } from "../../../composables/pages";
import { createSkillRefTokenRegex } from "../../../composables/skills";

const PLACEHOLDER_TOKEN_REGEX_SOURCE = String.raw`\{[^}]+\}`;

interface TokenHighlightPattern {
  className: string | ((match: RegExpMatchArray) => string);
  createRegex: () => RegExp;
}

const STATIC_TOKEN_HIGHLIGHT_PATTERNS: readonly TokenHighlightPattern[] = [
  {
    className: "k-copilot-token-placeholder",
    createRegex: () => new RegExp(PLACEHOLDER_TOKEN_REGEX_SOURCE, "g"),
  },
  {
    className: "k-copilot-token-page-ref",
    createRegex: createPageRefTokenRegex,
  },
];

export function tokenHighlightPlugin({
  skills,
}: {
  skills: {
    has: (id: string) => boolean;
  };
}) {
  const patterns: readonly TokenHighlightPattern[] = [
    ...STATIC_TOKEN_HIGHLIGHT_PATTERNS,
    {
      className: (match) =>
        skills.has(match[1] ?? "")
          ? "k-copilot-token-skill-ref"
          : "k-copilot-token-skill-ref-unknown",
      createRegex: createSkillRefTokenRegex,
    },
  ];

  return new Plugin({
    props: {
      decorations(state) {
        return buildDecorations(state, patterns);
      },
    },
  });
}

function buildDecorations(
  state: EditorState,
  patterns: readonly TokenHighlightPattern[],
): DecorationSet {
  const decorations: Decoration[] = [];

  state.doc.descendants((node, pos) => {
    if (!node.isText || !node.text) return;

    for (const pattern of patterns) {
      for (const match of node.text.matchAll(pattern.createRegex())) {
        const className =
          typeof pattern.className === "function"
            ? pattern.className(match)
            : pattern.className;

        decorations.push(
          Decoration.inline(
            pos + match.index!,
            pos + match.index! + match[0].length,
            { class: className },
          ),
        );
      }
    }
  });

  return DecorationSet.create(state.doc, decorations);
}
