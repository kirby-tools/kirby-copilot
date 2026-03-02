import { loadPluginModule } from "kirbyuse";
import { usePluginContext } from "../composables/plugin";

export type AISDKModule = typeof import("@ai-sdk/anthropic") &
  typeof import("@ai-sdk/google") &
  typeof import("@ai-sdk/mistral") &
  typeof import("@ai-sdk/openai") &
  typeof import("ai");

/** Loads the AI SDK module with provider factories and utilities. */
export async function loadAISDK(): Promise<AISDKModule> {
  // Ensure plugin assets are registered before loading modules.
  // This is necessary when `loadAISDK` is called (e.g. by Content Translator)
  // before any Copilot UI has rendered.
  await usePluginContext();
  return await loadPluginModule("ai");
}
