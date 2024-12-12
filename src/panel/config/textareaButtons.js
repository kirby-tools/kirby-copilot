import { generateAndInsertText } from "./shared";

export const textareaButtons = {
  copilot: {
    icon: "sparkling",
    label: "Copilot Prompt",
    click() {
      const insertFn = (text) => this.command("insert", () => text);
      generateAndInsertText(insertFn);
    },
    shortcut: ".",
  },
};
