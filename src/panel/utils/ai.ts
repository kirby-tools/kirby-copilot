import { loadPluginModule } from "kirbyuse";

export type AISDKModule = typeof import("@ai-sdk/anthropic") &
  typeof import("@ai-sdk/google") &
  typeof import("@ai-sdk/mistral") &
  typeof import("@ai-sdk/openai") &
  typeof import("ai");

/** Loads the AI SDK module with provider factories and utilities. */
export function loadAISDK(): Promise<AISDKModule> {
  return loadPluginModule("ai");
}
