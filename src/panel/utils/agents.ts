const VISIBLE_LABEL_COUNT = 2;

// The server answers a token it doesn't know with `invalid_token`, which proves that the header arrived.
const PROBE_TOKEN = "kca_probe";

// Chrome leaves a request pending on a basic-auth challenge, and the tab's
// later requests to the site too.
const REQUEST_TIMEOUT_MS = 10_000;

const RELATIVE_TIME_UNITS: [Intl.RelativeTimeFormatUnit, number][] = [
  ["year", 365 * 86400],
  ["month", 30 * 86400],
  ["week", 7 * 86400],
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
];

/**
 * Joins the first labels and counts the rest, so a table cell stays short.
 */
export function summarizeLabels(
  labels: string[],
  formatHiddenCount: (count: number) => string,
) {
  const visible = labels.slice(0, VISIBLE_LABEL_COUNT);
  const hiddenCount = labels.length - visible.length;

  return [
    ...visible,
    ...(hiddenCount > 0 ? [formatHiddenCount(hiddenCount)] : []),
  ].join(", ");
}

/**
 * Formats a past Unix timestamp in seconds relative to `now` in milliseconds,
 * in the largest whole unit, in the language of a Panel translation code.
 */
export function formatRelativeTime(
  timestamp: number,
  now: number,
  translationCode: string,
) {
  const format = createRelativeTimeFormat(translationCode);
  const elapsed = now / 1000 - timestamp;

  for (const [unit, seconds] of RELATIVE_TIME_UNITS) {
    if (elapsed >= seconds) {
      return format.format(-Math.floor(elapsed / seconds), unit);
    }
  }

  return format.format(0, "second");
}

export type AgentsSetupProblem =
  | { type: "insecure" }
  | { type: "unreachable"; url: string }
  | { type: "authorizationHeader" }
  | { type: "wellKnown"; url: string }
  | { type: "subfolder"; url: string; folder: string };

/**
 * Probes the URLs an agent requests before it connects, from the browser,
 * since many hosts block a server's requests to itself.
 */
export async function checkAgentsSetup({
  mcpUrl,
  pageProtocol,
  fetch = globalThis.fetch,
}: {
  mcpUrl: string;
  pageProtocol: string;
  fetch?: typeof globalThis.fetch;
}): Promise<AgentsSetupProblem[]> {
  // Behind a proxy that terminates HTTPS, Kirby builds http URLs unless its `url` option says otherwise, and the browser then blocks every probe as mixed content.
  if (pageProtocol === "https:" && mcpUrl.startsWith("http:")) {
    return [{ type: "insecure" }];
  }

  const probeResponse = await probe(mcpUrl, fetch);

  // A site that doesn't answer the probe leaves the `.well-known` requests waiting too.
  if (!probeResponse) {
    return [{ type: "unreachable", url: mcpUrl }];
  }

  const problems: AgentsSetupProblem[] = [];
  const { origin, pathname } = new URL(mcpUrl);
  const challenge =
    probeResponse.status === 401
      ? probeResponse.headers.get("WWW-Authenticate")
      : null;

  if (!challenge?.includes("resource_metadata=")) {
    problems.push({ type: "unreachable", url: mcpUrl });
  } else if (!challenge.includes('error="invalid_token"')) {
    problems.push({ type: "authorizationHeader" });
  }

  const hintedUrl = challenge?.match(/resource_metadata="([^"]+)"/)?.[1];
  // Kirby serves the hinted document below its own folder, so the folder is
  // the path in front of `/.well-known/`.
  const folder = hintedUrl
    ? new URL(hintedUrl).pathname.split("/.well-known/")[0]!
    : "";
  const reportUnloadable = (url: string) => {
    problems.push(
      folder && !new URL(url).pathname.startsWith(`${folder}/`)
        ? { type: "subfolder", url, folder }
        : { type: "wellKnown", url },
    );
  };

  const resourceMetadataUrl =
    hintedUrl ?? `${origin}/.well-known/oauth-protected-resource${pathname}`;
  const resourceMetadata = await fetchJson(resourceMetadataUrl, fetch);
  let issuer: string | undefined;

  if (resourceMetadata?.resource === mcpUrl) {
    issuer = resourceMetadata.authorization_servers?.[0];
  } else {
    reportUnloadable(resourceMetadataUrl);
  }

  // RFC 8414 puts the well-known segment before an issuer's path.
  const issuerUrl = new URL(issuer ?? origin);
  const authorizationServerMetadataUrl = `${issuerUrl.origin}/.well-known/oauth-authorization-server${issuerUrl.pathname.replace(/\/$/, "")}`;
  const authorizationServerMetadata = await fetchJson(
    authorizationServerMetadataUrl,
    fetch,
  );

  if (authorizationServerMetadata?.issuer !== (issuer ?? origin)) {
    reportUnloadable(authorizationServerMetadataUrl);
  }

  return problems;
}

function createRelativeTimeFormat(translationCode: string) {
  // Kirby's codes such as `pt_BR` and `sr@latin` aren't BCP 47 tags.
  return new Intl.RelativeTimeFormat(
    translationCode.replace("_", "-").replace("@latin", "-Latn"),
    { numeric: "auto" },
  );
}

async function probe(mcpUrl: string, fetch: typeof globalThis.fetch) {
  try {
    return await fetch(mcpUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${PROBE_TOKEN}`,
        "Content-Type": "application/json",
        Accept: "application/json, text/event-stream",
      },
      body: "{}",
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });
  } catch {
    return undefined;
  }
}

async function fetchJson(url: string, fetch: typeof globalThis.fetch) {
  try {
    const response = await fetch(url, {
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });
    return response.ok ? await response.json() : undefined;
  } catch {
    return undefined;
  }
}
