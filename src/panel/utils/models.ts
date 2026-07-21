/**
 * Splits a possibly gateway-prefixed model id into its parts.
 *
 * @remarks
 * Some gateways (Vercel AI Gateway, Cloudflare AI Gateway `/compat`) require
 * `{provider}/{model}` ids. The returned `prefix` never carries a trailing
 * slash so it can be compared directly with a provider name; concatenation
 * sites add the slash explicitly.
 */
export function parseGatewayPrefix(modelId: string) {
  const index = modelId.indexOf("/");

  if (index <= 0) {
    return { prefix: "", nativeModelId: modelId };
  }

  return {
    prefix: modelId.slice(0, index),
    nativeModelId: modelId.slice(index + 1),
  };
}
