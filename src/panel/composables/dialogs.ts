import type { PromptTemplate } from "./templates";
import { useDialog, usePanel } from "kirbyuse";
import { usePromptTemplates } from "./templates";

export function useTemplateDialogs() {
  const panel = usePanel();
  const { openFieldsDialog } = useDialog();
  const { templates, addTemplate, setTemplates } = usePromptTemplates();

  async function openSaveTemplateDialog(currentPrompt: string) {
    const result = await openFieldsDialog<{ name: string }>({
      fields: {
        name: {
          label: panel.t("johannschopplich.copilot.template.name"),
          type: "text",
          required: true,
          autofocus: true,
        },
      },
      value: {
        name: "",
      },
    });

    if (result?.name) {
      addTemplate(result.name, currentPrompt);
    }
  }

  async function openEditTemplatesDialog() {
    const result = await openFieldsDialog<{
      templates: Pick<PromptTemplate, "name" | "prompt">[];
    }>({
      size: "huge",
      fields: {
        templates: {
          label: panel.t("johannschopplich.copilot.templates"),
          type: "structure",
          empty: panel.t("johannschopplich.copilot.template.empty"),
          columns: {
            name: {
              label: panel.t("johannschopplich.copilot.template.name"),
              width: "1/3",
            },
            prompt: {
              label: panel.t("johannschopplich.copilot.prompt.label"),
              width: "2/3",
            },
          },
          fields: {
            name: {
              label: panel.t("johannschopplich.copilot.template.name"),
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
          name: template.name,
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
