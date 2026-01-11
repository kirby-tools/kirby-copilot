import { usePanel } from "kirbyuse";

export async function openPromptDialog<T = unknown>(
  props: Record<string, unknown> = {},
) {
  return new Promise<T | undefined>((resolve) => {
    const panel = usePanel();
    let result: T | undefined;

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
