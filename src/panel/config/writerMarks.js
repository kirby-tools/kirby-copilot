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
      let currentPos = to;

      const appendText = (text) => {
        const { tr } = this.editor.state;
        tr.insertText(text, currentPos);
        this.editor.view.dispatch(tr);
        currentPos += text.length;
      };

      const replaceText = (text) => {
        const { tr } = this.editor.state;
        const transaction = tr.insertText(text);
        this.editor.view.dispatch(transaction);
      };

      generateAndInsertText(selection, { replaceText, appendText });
    },
  },
};
