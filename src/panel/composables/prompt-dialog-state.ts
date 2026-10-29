import type { PromptContext } from "../types";
import { createGlobalState } from "kirbyuse";
import { ref } from "vue";

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
