import { usePanel } from "kirbyuse";
import { loadAISDK } from "./ai";

/**
 * Custom error class for Copilot-specific errors.
 *
 * @extends Error
 */
export class CopilotError extends Error {}

/**
 * Handles errors from AI stream operations.
 *
 * @param {Error} error - The error to handle
 */
export async function handleStreamError(error) {
  const panel = usePanel();
  const { AISDKError } = await loadAISDK();

  if (error instanceof CopilotError || AISDKError.isInstance(error)) {
    let message = error.message;

    if (message.includes("levels of nesting exceeds limit")) {
      message =
        "The fields generation exceeds OpenAI's architectural constraints for nested data structures. This is a known limitation of OpenAI's API. Please use Google Gemini or Anthropic Claude instead, which support complex schemas.";
    }

    console.error(error);
    panel.notification.error(message);
    return;
  }

  console.error(error);
  panel.notification.error(
    panel.t("johannschopplich.copilot.notification.error"),
  );
}
