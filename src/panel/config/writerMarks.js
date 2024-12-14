import { generateAndInsertText } from "./shared";

export const writerMarks = {
  copilot: {
    get button() {
      return {
        icon: "sparkling",
        label: "Copilot Prompt",
      };
    },

    commands() {
      return () => this._openPromptDialog();
    },

    keys() {
      return {
        "Mod-.": () => this._openPromptDialog(),
      };
    },

    get name() {
      return "copilot";
    },

    _openPromptDialog() {
      const { state } = this.editor;
      const { from, to } = state.tr.selection;
      const selection = state.doc.textBetween(from, to);

      const insertFn = (text) => this.editor.insertText(text);

      generateAndInsertText(selection, { insertFn });
    },
  },
};
