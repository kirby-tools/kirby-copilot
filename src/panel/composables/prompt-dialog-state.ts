import { ref } from "kirbyuse";
import { createGlobalState } from "./state";

export const usePromptDialogState = createGlobalState(() => {
  const prompt = ref("");
  const files = ref<File[]>([]);
  const selectedFieldNames = ref<string[]>([]);
  const insertOption = ref("replace");

  function reset(initialPrompt = "") {
    prompt.value = initialPrompt;
    files.value = [];
    selectedFieldNames.value = [];
    insertOption.value = "replace";
  }

  return {
    prompt,
    files,
    selectedFieldNames,
    insertOption,
    reset,
  };
});
