import { usePanel } from "kirbyuse";
import { usePromptDialogState } from "../composables";

export async function openPromptDialog<T = unknown>(
  props: Record<string, unknown> = {},
) {
  return new Promise<T | undefined>((resolve) => {
    const panel = usePanel();
    let result: T | undefined;

    const { reset, resetSelection } = usePromptDialogState();
    const seed = props.userPrompt as string | undefined;

    // A caller's own prompt outranks the draft, which otherwise survives a
    // dismissal so that a stray click outside the dialog costs nothing.
    if (seed) reset(seed);
    else resetSelection();

    panel.dialog.open({
      component: "k-copilot-prompt-dialog",
      props,
      on: {
        close: () => {
          if (result !== undefined) reset();

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
