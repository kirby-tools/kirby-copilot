import type { DecorationSet } from "prosemirror-view";
import { EditorState } from "prosemirror-state";
import { describe, expect, it, vi } from "vitest";
import { createDocFromText } from "../../../../../src/panel/components/PromptEditor/editor";
import { tokenHighlightPlugin } from "../../../../../src/panel/components/PromptEditor/plugins/token-highlight";

vi.mock("kirbyuse", async () => {
  const { baseKirbyuseMock } = await import("../../../helpers/mock-kirbyuse");
  return baseKirbyuseMock();
});

describe("tokenHighlightPlugin", () => {
  it("highlights only placeholders made of word characters", () => {
    const plugin = tokenHighlightPlugin({ skills: new Set() });
    const state = EditorState.create({
      doc: createDocFromText('Summarize {title}, not {foo bar} or {"a":1}'),
      plugins: [plugin],
    });

    const decorations = plugin.props.decorations!.call(
      plugin,
      state,
    ) as DecorationSet;
    const highlightedTokens = decorations
      .find()
      .map(({ from, to }) => state.doc.textBetween(from, to));

    expect(highlightedTokens).toEqual(["{title}"]);
  });
});
