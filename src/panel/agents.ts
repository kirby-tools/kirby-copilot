import type { Panel, PanelContentVersions } from "kirby-types";
import type { PluginFunction } from "vue";
import { watch } from "kirbyuse";
import { usePluginContext } from "./composables/plugin";
import { PLUGIN_AGENTS_LAST_WRITE_API_ROUTE } from "./constants";

const CHECK_INTERVAL_MS = 10_000;

export const guardAgentWrites: PluginFunction<any> = () => {
  // Plugins install before `window.panel` is the Panel.
  queueMicrotask(() => {
    const panel = window.panel;

    whenAgentsEnabled(panel, () => {
      keepAgentWrites(panel);
      reloadOnAgentWrites(panel);
    });
  });
};

/**
 * The login view can't load the plugin context and the Panel logs in without
 * a page load, so each view load asks again until the context answers.
 */
export function whenAgentsEnabled(panel: Panel, guard: () => void) {
  let hasAnswer = false;

  watch(
    () => panel.view.timestamp,
    async () => {
      if (hasAnswer) return;

      const context = await usePluginContext().catch(() => undefined);
      if (!context || hasAnswer) return;

      hasAnswer = true;
      if (context.config.agents) guard();
    },
    { immediate: true },
  );
}

export function keepAgentWrites(panel: Panel) {
  const { content } = panel;
  // Each field's value as JSON, as far as the view knows the server holds it.
  let savedValues: Map<string, string> | undefined;

  watch(
    () => panel.view.props.versions as PanelContentVersions | undefined,
    (versions) => {
      savedValues = versions
        ? new Map(
            Object.entries(versions.changes).map(([field, value]) => [
              field,
              JSON.stringify(value),
            ]),
          )
        : undefined;
    },
    // A save after a reload must already compare with the reloaded content.
    { immediate: true, flush: "sync" },
  );

  const request = content.request;
  content.request = async (method = "save", values = {}, env) => {
    const knownValues = savedValues;
    if (method !== "save" || !knownValues || !content.isCurrent(env)) {
      return request.call(content, method, values, env);
    }

    // The server takes the other fields from the content it holds.
    const changedValues = Object.fromEntries(
      Object.entries(values).filter(
        ([field, value]) => knownValues.get(field) !== JSON.stringify(value),
      ),
    );
    const response = await request.call(content, method, changedValues, env);

    for (const [field, value] of Object.entries(changedValues)) {
      knownValues.set(field, JSON.stringify(value));
    }

    return response;
  };

  for (const action of ["publish", "discard"] as const) {
    const run = content[action] as (...args: unknown[]) => Promise<void>;
    content[action] = async (...args: unknown[]) => {
      if (await hasAgentWritten(panel).catch(() => false)) {
        await reloadView(panel);
        // The reload closes the discard confirmation, and its overlay reports
        // the close a task later, which would also close the error dialog.
        await new Promise((resolve) => setTimeout(resolve));
        throw new Error(
          panel.t("johannschopplich.copilot.agents.reloaded.instead"),
        );
      }

      return run.apply(content, args);
    };
  }
}

function reloadOnAgentWrites(panel: Panel) {
  // Returning to a tab fires both events.
  let pendingCheck: Promise<void> | undefined;

  function check() {
    pendingCheck ??= reloadIfWritten(panel).finally(() => {
      pendingCheck = undefined;
    });
  }

  window.addEventListener("focus", check);
  document.addEventListener("visibilitychange", check);
  setInterval(check, CHECK_INTERVAL_MS);
}

async function reloadIfWritten(panel: Panel) {
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
    if (await hasAgentWritten(panel)) {
      await reloadView(panel);
      panel.notification.info(
        panel.t("johannschopplich.copilot.agents.reloaded"),
      );
    }
  } catch {
    // The next check tries again.
  }
}

async function hasAgentWritten(panel: Panel) {
  const { writtenAt } = await panel.api.get<{ writtenAt: number | null }>(
    PLUGIN_AGENTS_LAST_WRITE_API_ROUTE,
    { model: panel.view.path, language: panel.language.code ?? undefined },
    undefined,
    true,
  );

  // Both timestamps are server time in milliseconds.
  return writtenAt !== null && writtenAt > (panel.view.timestamp ?? 0);
}

/**
 * Saves what the editor typed so far, then reloads the view.
 */
async function reloadView(panel: Panel) {
  await panel.content.update();
  await panel.view.reload();
  // A save queued while the view reloaded still holds the form from before.
  panel.content.cancelSaving();
}
