import { registerPluginAssets } from "kirbyuse";
import { PLUGIN_CONTEXT_API_ROUTE } from "../constants";

let context;
let pendingPromise;

export function usePluginContext() {
  if (context) return context;
  if (pendingPromise) return pendingPromise;

  pendingPromise = window.panel.api
    .get(PLUGIN_CONTEXT_API_ROUTE)
    .then(({ config, assets }) => {
      registerPluginAssets(assets);
      context = { config, assets };
      pendingPromise = undefined;
      return context;
    });

  return pendingPromise;
}
