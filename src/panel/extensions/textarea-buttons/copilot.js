import { generateAndInsertText } from "../shared";

export const copilot = {
  icon: "sparkling",
  label: "Copilot",
  shortcut: ".",

  click() {
    let currentSelection = "";

    // Extract current selection
    this.command("insert", (input, selection) => {
      currentSelection = selection;
      return selection;
    });

    let isFirstInsertion = true;
    const appendText = (text) => {
      this.command("insert", (input, selection) => {
        if (isFirstInsertion) {
          isFirstInsertion = false;
          // Concatenating space is handled by the generator function
          return selection + text;
        }

        return text;
      });
    };

    const replaceText = (text) => {
      this.command("insert", () => text);
    };

    generateAndInsertText(currentSelection, {
      responseFormat: "markdown",
      appendText,
      replaceText,
    });
  },
};
