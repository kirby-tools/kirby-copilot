import { generateAndInsertText } from "./shared";

export const textareaButtons = {
  copilot: {
    icon: "sparkling",
    label: "Copilot Prompt",
    click() {
      let currentSelection = "";

      // Extract current selection
      this.command("insert", (input, selection) => {
        currentSelection = selection;
        return selection;
      });

      const insertFn = (text) => this.command("insert", () => text);

      generateAndInsertText(currentSelection, { insertFn });
    },
    shortcut: ".",
  },
};
