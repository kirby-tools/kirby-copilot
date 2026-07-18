import type { Transaction } from "prosemirror-state";
import type { EditorView } from "prosemirror-view";
import { EditorState } from "prosemirror-state";
import { describe, expect, it, vi } from "vitest";
import {
  createDocFromText,
  getPlainText,
} from "../../../../../src/panel/components/PromptEditor/editor";
import {
  commitSkillSuggestion,
  createSkillSuggestPlugin,
} from "../../../../../src/panel/components/PromptEditor/plugins/skill-suggest";

vi.mock("kirbyuse", async () => {
  const { baseKirbyuseMock } = await import("../../../helpers/mock-kirbyuse");
  return baseKirbyuseMock();
});

function createHeadlessEditor() {
  let state = EditorState.create({
    doc: createDocFromText(""),
    plugins: [
      createSkillSuggestPlugin({
        onStateChange: () => {},
        onCommit: () => {},
        getOptionCount: () => 1,
      }),
    ],
  });

  const view = {
    get state() {
      return state;
    },
    dispatch(tr: Transaction) {
      state = state.apply(tr);
    },
    focus() {},
  } as unknown as EditorView;

  return {
    view,
    getText: () => getPlainText(view.state),
    type(text: string) {
      view.dispatch(view.state.tr.insertText(text));
    },
  };
}

describe("commitSkillSuggestion", () => {
  it("replaces the typed trigger with the skill token plus a trailing space, matching the page picker's insertion", () => {
    const editor = createHeadlessEditor();
    editor.type("Write a headline @skill://br");

    commitSkillSuggestion(editor.view, "brand-voice");

    expect(editor.getText()).toBe("Write a headline @skill://brand-voice ");
  });
});
