import { PROXY_ERROR_MARKER } from "../constants";
import { CopilotError } from "./error";

/**
 * Fails the response stream with the proxy's message when the upstream
 * request dies mid-stream. The SDK's SSE parser drops the comment line that
 * carries it, so the bytes are watched before they reach the parser.
 */
export function watchForProxyError(): TransformStream<Uint8Array, Uint8Array> {
  const decoder = new TextDecoder();
  // Decoded tail of what has passed through, long enough to catch a marker
  // split across two chunks.
  let carry = "";

  return new TransformStream({
    transform(chunk, controller) {
      carry += decoder.decode(chunk, { stream: true });
      const markerIndex = carry.indexOf(PROXY_ERROR_MARKER);

      if (markerIndex === -1) {
        controller.enqueue(chunk);
        carry = carry.slice(-PROXY_ERROR_MARKER.length);
        return;
      }

      // The message runs to the end of the line, which may still be in flight.
      const message = carry.slice(markerIndex + PROXY_ERROR_MARKER.length);
      const lineEnd = message.indexOf("\n");

      if (lineEnd !== -1) {
        controller.error(new CopilotError(message.slice(0, lineEnd).trim()));
      }
    },
    flush(controller) {
      const markerIndex = carry.indexOf(PROXY_ERROR_MARKER);

      if (markerIndex !== -1) {
        controller.error(
          new CopilotError(
            carry.slice(markerIndex + PROXY_ERROR_MARKER.length).trim(),
          ),
        );
      }
    },
  });
}
