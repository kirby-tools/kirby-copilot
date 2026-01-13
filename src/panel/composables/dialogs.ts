import type { PromptTemplateInput } from "../types";
import { useDialog, usePanel } from "kirbyuse";
import { usePromptTemplates } from "./templates";

export function useTemplateDialogs() {
  const panel = usePanel();
  const { openFieldsDialog } = useDialog();
  const { templates, addTemplate, setTemplates } = usePromptTemplates();

  async function openSaveTemplateDialog(currentPrompt: string) {
    const result = await openFieldsDialog<{ label: string }>({
      fields: {
        label: {
          label: panel.t("johannschopplich.copilot.template.label"),
          type: "text",
          required: true,
          autofocus: true,
        },
      },
      value: {
        label: "",
      },
    });

    if (result?.label) {
      addTemplate(result.label, currentPrompt);
    }
  }

  async function openEditTemplatesDialog() {
    const result = await openFieldsDialog<{
      templates: PromptTemplateInput[];
    }>({
      size: "huge",
      fields: {
        templates: {
          label: panel.t("johannschopplich.copilot.templates"),
          type: "structure",
          empty: panel.t("johannschopplich.copilot.template.empty"),
          columns: {
            label: {
              label: panel.t("johannschopplich.copilot.template.label"),
              width: "1/3",
            },
            prompt: {
              label: panel.t("johannschopplich.copilot.prompt.label"),
              width: "2/3",
            },
          },
          fields: {
            label: {
              label: panel.t("johannschopplich.copilot.template.label"),
              type: "text",
              required: true,
            },
            prompt: {
              label: panel.t("johannschopplich.copilot.prompt.label"),
              type: "textarea",
              required: true,
            },
          },
        },
      },
      value: {
        templates: templates.value.map((template) => ({
          label: template.label,
          prompt: template.prompt,
        })),
      },
    });

    if (result?.templates) {
      setTemplates(result.templates);
    }
  }

  return {
    openSaveTemplateDialog,
    openEditTemplatesDialog,
  };
}
