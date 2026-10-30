import type {
  CopilotFieldLabels,
  InsertOption,
  PromptDialogLabels,
  Translate,
} from "../types";

export function createFieldLabels(t: Translate): CopilotFieldLabels {
  return {
    generate: t("johannschopplich.copilot.generate"),
    stop: t("johannschopplich.copilot.stop"),
    undo: t("johannschopplich.copilot.undo"),
    prompt: t("johannschopplich.copilot.prompt.label"),
    context: t("johannschopplich.copilot.context"),
    placeholder: t("johannschopplich.copilot.prompt.placeholder"),
    reset: t("johannschopplich.copilot.context.reset"),
    selectFiles: t("johannschopplich.copilot.files.select"),
    clearFiles: t("johannschopplich.copilot.delete"),
  };
}

export function createPromptDialogLabels(t: Translate): PromptDialogLabels {
  return {
    preview: t("johannschopplich.copilot.preview"),
    selectFiles: t("johannschopplich.copilot.files.select"),
    clearFiles: t("johannschopplich.copilot.delete"),
    insert: t("johannschopplich.copilot.fieldPicker.insert"),
    search: t("johannschopplich.copilot.fieldPicker.search"),
    selectPages: t("johannschopplich.copilot.pages.select"),
    notFound: t("johannschopplich.copilot.fieldPicker.notFound"),
    templates: t("johannschopplich.copilot.templates"),
    saveTemplate: t("johannschopplich.copilot.template.saveAs"),
    editTemplates: t("johannschopplich.copilot.template.edit"),
    noTemplates: t("johannschopplich.copilot.template.empty"),
    history: t("johannschopplich.copilot.history"),
    fields: t("johannschopplich.copilot.fields"),
    generate: t("johannschopplich.copilot.generate"),
  };
}

export function createInsertOptions(t: Translate): InsertOption[] {
  return [
    { value: "replace", text: t("johannschopplich.copilot.replace") },
    { value: "append", text: t("johannschopplich.copilot.append") },
  ];
}
