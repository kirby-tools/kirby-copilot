import { resolveLanguageModel, useStreamText } from "./composables/ai";
import { usePluginContext } from "./composables/plugin";

/**
 * API surface for other plugins, registered as
 * `panel.plugins.thirdParty.copilot`.
 *
 * @remarks
 * Pinned by `tests/fixtures/copilot-seam-contract.json`, which is mirrored in
 * Kirby Content Translator – update both when the contract changes.
 */
export const copilotThirdPartyApi = {
  apiVersion: 2,
  resolvePluginContext: usePluginContext,
  streamText: (options: Omit<Parameters<typeof useStreamText>[0], "output">) =>
    useStreamText(options),
  resolveLanguageModel,
};
