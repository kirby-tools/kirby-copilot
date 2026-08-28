import { loadPluginModule } from "kirbyuse";
import { usePluginContext } from "../composables/plugin";

export type AISDKModule = typeof import("@ai-sdk/anthropic") &
  typeof import("@ai-sdk/google") &
  typeof import("@ai-sdk/mistral") &
  typeof import("@ai-sdk/openai") &
  typeof import("ai");

let sdk: AISDKModule | undefined;

export async function loadAISDK(): Promise<AISDKModule> {
  // Ensure plugin assets are registered before loading modules.
  // This is necessary when `loadAISDK` is called (e.g. by Content Translator)
  // before any Copilot UI has rendered.
  await usePluginContext();
  sdk ??= withTelemetryDisabled(await loadPluginModule<AISDKModule>("ai"));
  return sdk;
}

/**
 * Hands out a `streamText` that always runs with telemetry off.
 *
 * The Panel has nowhere to send telemetry, and enabling it makes `streamText`
 * derive a promise from the run's usage for its tracing channel. In a browser
 * the SDK returns without ever attaching a handler to that promise, so a failed
 * run leaves an unhandled rejection behind, which Kirby turns into a modal
 * error dialog. With `isEnabled` false the SDK builds an empty telemetry
 * dispatcher and skips the derived promise entirely.
 *
 * The guard belongs here rather than at each call site because `loadAISDK` is
 * the only way into the SDK, including for third-party consumers reaching it
 * through the seam.
 */
function withTelemetryDisabled(sdkModule: AISDKModule): AISDKModule {
  return {
    ...sdkModule,
    // An explicit `telemetry` outranks a caller's `experimental_telemetry`,
    // which the SDK only reads as a default for it.
    streamText: (options) =>
      sdkModule.streamText({ ...options, telemetry: { isEnabled: false } }),
  };
}
