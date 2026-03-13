import { usePanel } from "kirbyuse";
import { usePromptDialogState } from "../composables";

export async function openPromptDialog<T = unknown>(
  props: Record<string, unknown> = {},
) {
  return new Promise<T | undefined>((resolve) => {
    const panel = usePanel();
    let result: T | undefined;

    // Reset global state for a fresh dialog session
    const { reset } = usePromptDialogState();
    reset((props.userPrompt as string) || "");

    panel.dialog.open({
      component: "k-copilot-prompt-dialog",
      props,
      on: {
        close: () => {
          setTimeout(() => {
            resolve(result);
          }, 25);
        },
        submit: (event: T) => {
          result = event;
          panel.dialog.close();
        },
      },
    });
  });
}
