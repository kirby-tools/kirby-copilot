import type { PluginContextResponse } from "../types";
import { registerPluginAssets } from "kirbyuse";
import { PLUGIN_CONTEXT_API_ROUTE } from "../constants";

export type {
  CompletionConfig,
  PluginConfig,
  PluginContextResponse,
  ProviderConfig,
} from "../types";

let context: PluginContextResponse | undefined;
let pendingPromise: Promise<PluginContextResponse> | undefined;

export function usePluginContext() {
  if (context) return Promise.resolve(context);
  if (pendingPromise) return pendingPromise;

  pendingPromise = window.panel.api
    .get(PLUGIN_CONTEXT_API_ROUTE)
    .then((response: PluginContextResponse) => {
      registerPluginAssets(response.assets);
      context = response;
      pendingPromise = undefined;
      return context;
    });

  return pendingPromise;
}
