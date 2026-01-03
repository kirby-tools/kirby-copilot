import { loadPluginModule } from "kirbyuse";

/**
 * Loads the AI SDK module with all provider factories and utilities.
 *
 * @returns {Promise<typeof import("ai") & typeof import("@ai-sdk/anthropic") & typeof import("@ai-sdk/google") & typeof import("@ai-sdk/mistral") & typeof import("@ai-sdk/openai")>} The AI SDK module exports
 */
export function loadAISDK() {
  return loadPluginModule("ai");
}
