import type { PromptContext } from "../types";
import { ref } from "kirbyuse";
import { createGlobalState } from "./state";

export const usePromptDialogState = createGlobalState(() => {
  const prompt = ref("");
  const files = ref<File[]>([]);
  const selectedFieldNames = ref<string[]>([]);
  const insertOption = ref<NonNullable<PromptContext["insertMode"]>>("replace");

  function reset(initialPrompt = "") {
    prompt.value = initialPrompt;
    files.value = [];
    resetSelection();
  }

  function resetSelection() {
    selectedFieldNames.value = [];
    insertOption.value = "replace";
  }

  return {
    prompt,
    files,
    selectedFieldNames,
    insertOption,
    reset,
    resetSelection,
  };
});
