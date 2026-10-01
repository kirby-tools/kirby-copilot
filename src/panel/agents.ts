import type { PluginFunction } from "vue";
import { usePluginContext } from "./composables/plugin";
import { PLUGIN_AGENTS_LAST_WRITE_API_ROUTE } from "./constants";

/**
 * Reloads an open content view once an agent changed its model, when the
 * editor returns to the tab. A stale view would save its whole form again
 * with the next keystroke and overwrite the agent's changes.
 */
export const reloadAfterAgentWrites: PluginFunction<any> = () => {
  // Returning to a tab fires both events.
  let pendingCheck: Promise<void> | undefined;

  function check() {
    pendingCheck ??= reloadIfWritten().finally(() => {
      pendingCheck = undefined;
    });
  }

  window.addEventListener("focus", check);
  document.addEventListener("visibilitychange", check);
};

async function reloadIfWritten() {
  const panel = window.panel;
  const { lock } = panel.view.props;

  if (
    document.visibilityState !== "visible" ||
    !lock ||
    !panel.view.timestamp ||
    panel.content.isProcessing
  ) {
    return;
  }

  try {
    const { config } = await usePluginContext();
    if (!config.agents) return;

    const { writtenAt } = await panel.api.get<{ writtenAt: number | null }>(
      PLUGIN_AGENTS_LAST_WRITE_API_ROUTE,
      { model: panel.view.path, language: panel.language.code ?? undefined },
      undefined,
      true,
    );

    // Both timestamps are server time in milliseconds.
    if (writtenAt !== null && writtenAt > panel.view.timestamp) {
      await panel.view.reload();
      panel.notification.info(
        panel.t("johannschopplich.copilot.agents.reloaded"),
      );
    }
  } catch {
    // The next focus checks again.
  }
}
