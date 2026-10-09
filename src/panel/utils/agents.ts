const VISIBLE_LABEL_COUNT = 2;

// The server answers a token it doesn't know with `invalid_token`, which proves that the header arrived.
const PROBE_TOKEN = "kca_probe";

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
  const elapsed = Math.max(0, now / 1000 - timestamp);

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
  | { type: "wellKnown"; url: string };

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
  // Behind a proxy that doesn't forward the scheme, Kirby builds http URLs.
  // The browser then blocks every probe as mixed content.
  if (pageProtocol === "https:" && mcpUrl.startsWith("http:")) {
    return [{ type: "insecure" }];
  }

  const problems: AgentsSetupProblem[] = [];
  const { origin, pathname } = new URL(mcpUrl);

  const challenge = await probeChallenge(mcpUrl, fetch);

  if (!challenge?.includes("resource_metadata=")) {
    problems.push({ type: "unreachable", url: mcpUrl });
  } else if (!challenge.includes('error="invalid_token"')) {
    problems.push({ type: "authorizationHeader" });
  }

  const resourceMetadataUrls = [
    challenge?.match(/resource_metadata="([^"]+)"/)?.[1] ??
      `${origin}/.well-known/oauth-protected-resource${pathname}`,
    `${origin}/.well-known/oauth-protected-resource`,
  ];
  let issuer: string | undefined;

  for (const url of resourceMetadataUrls) {
    const metadata = await fetchJson(url, fetch);

    if (metadata?.resource === mcpUrl) {
      issuer ??= metadata.authorization_servers?.[0];
    } else {
      problems.push({ type: "wellKnown", url });
    }
  }

  // RFC 8414 puts the well-known segment before an issuer's path.
  const issuerUrl = new URL(issuer ?? origin);
  const authorizationServerMetadataUrl = `${issuerUrl.origin}/.well-known/oauth-authorization-server${issuerUrl.pathname.replace(/\/$/, "")}`;
  const authorizationServerMetadata = await fetchJson(
    authorizationServerMetadataUrl,
    fetch,
  );

  if (authorizationServerMetadata?.issuer !== (issuer ?? origin)) {
    problems.push({ type: "wellKnown", url: authorizationServerMetadataUrl });
  }

  return problems;
}

function createRelativeTimeFormat(translationCode: string) {
  // Kirby's codes such as `pt_BR` and `sr@latin` aren't BCP 47 tags.
  const locale =
    translationCode === "sr@latin"
      ? "sr-Latn"
      : translationCode.replace("_", "-");

  try {
    return new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  } catch {
    return new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  }
}

async function probeChallenge(mcpUrl: string, fetch: typeof globalThis.fetch) {
  try {
    const response = await fetch(mcpUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${PROBE_TOKEN}`,
        "Content-Type": "application/json",
        Accept: "application/json, text/event-stream",
      },
      body: "{}",
    });

    return response.status === 401
      ? response.headers.get("WWW-Authenticate")
      : null;
  } catch {
    return null;
  }
}

async function fetchJson(url: string, fetch: typeof globalThis.fetch) {
  try {
    const response = await fetch(url);
    return response.ok ? await response.json() : undefined;
  } catch {
    return undefined;
  }
}
