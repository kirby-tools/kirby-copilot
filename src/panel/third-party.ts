import { resolveLanguageModel, useStreamText } from "./composables/ai";
import { usePluginContext } from "./composables/plugin";
import { loadAISDK } from "./utils/ai";

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
  streamText: useStreamText,
  resolveLanguageModel,
  // TODO: Drop `loadAISDK` and the raw `output` option from the third-party seam in v4 – consumers pass `outputSchema` since apiVersion 2; add a composer conflict floor for kirby-content-translator < 3.12.0 alongside
  loadAISDK,
};
