import type { TextareaButton, TextareaToolbarContext } from "kirby-types";
import { streamTextToField } from "../shared";

export const copilot: TextareaButton = {
  icon: "sparkling",
  label: "Copilot",
  shortcut: ".",

  click(this: TextareaToolbarContext) {
    let currentSelection = "";

    // Extract current selection
    this.command("insert", (input: any, selection: string) => {
      currentSelection = selection;
      return selection;
    });

    let isFirstInsertion = true;
    const appendText = (text: string) => {
      this.command("insert", (input: any, selection: string) => {
        if (isFirstInsertion) {
          isFirstInsertion = false;
          // Concatenating space is handled by the generator function
          return selection + text;
        }

        return text;
      });
    };

    const replaceText = (text: string) => {
      this.command("insert", () => text);
    };

    streamTextToField(currentSelection, {
      responseFormat: "markdown",
      appendText,
      replaceText,
    });
  },
};
