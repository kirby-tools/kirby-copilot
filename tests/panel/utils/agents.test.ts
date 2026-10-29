import { afterEach, describe, expect, it, vi } from "vitest";
import {
  checkAgentsSetup,
  formatRelativeTime,
  summarizeLabels,
} from "../../../src/panel/utils/agents";

describe("summarizeLabels", () => {
  const formatHiddenCount = (count: number) => `+${count} more`;

  it("lists the visible labels in full", () => {
    expect(
      summarizeLabels(["Read content", "Prepare changes"], formatHiddenCount),
    ).toBe("Read content, Prepare changes");
  });

  it("counts the labels beyond the visible ones", () => {
    expect(
      summarizeLabels(
        [
          "Read content",
          "Prepare changes",
          "Publish changes",
          "Delete content",
        ],
        formatHiddenCount,
      ),
    ).toBe("Read content, Prepare changes, +2 more");
  });
});

describe("formatRelativeTime", () => {
  const now = Date.UTC(2026, 9, 1, 12, 0, 0);
  const secondsAgo = (seconds: number) => now / 1000 - seconds;

  it("says now within the first minute", () => {
    expect(formatRelativeTime(secondsAgo(30), now, "en")).toBe("now");
  });

  it.each([
    [5 * 60, "5 minutes ago"],
    [3 * 3600, "3 hours ago"],
    [86400, "yesterday"],
    [40 * 86400, "last month"],
  ])("formats %i seconds in the largest whole unit", (seconds, expected) => {
    expect(formatRelativeTime(secondsAgo(seconds), now, "en")).toBe(expected);
  });

  it("formats in the sr@latin translation", () => {
    expect(formatRelativeTime(secondsAgo(3 * 3600), now, "sr@latin")).toBe(
      "pre 3 sata",
    );
  });
});

describe("checkAgentsSetup", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  const mcpUrl = "https://example.com/api/copilot/mcp";
  const challenge =
    'Bearer resource_metadata="https://example.com/.well-known/oauth-protected-resource/api/copilot/mcp"';
  const resourceMetadata = {
    resource: mcpUrl,
    authorization_servers: ["https://example.com"],
  };

  function createSite(overrides: Record<string, () => Response> = {}) {
    const responses: Record<string, () => Response> = {
      [mcpUrl]: () =>
        new Response(null, {
          status: 401,
          headers: {
            "WWW-Authenticate": `${challenge}, error="invalid_token"`,
          },
        }),
      "https://example.com/.well-known/oauth-protected-resource/api/copilot/mcp":
        () => Response.json(resourceMetadata),
      "https://example.com/.well-known/oauth-authorization-server": () =>
        Response.json({ issuer: "https://example.com" }),
      ...overrides,
    };
    const requests: { url: string; init?: RequestInit }[] = [];

    const fetch = async (url: string | URL | Request, init?: RequestInit) => {
      requests.push({ url: String(url), init });
      const response = responses[String(url)];
      if (!response) throw new TypeError("Failed to fetch");
      return response();
    };

    return { fetch, requests };
  }

  it("finds no problem on a site that passes the bearer token through", async () => {
    const { fetch, requests } = createSite();

    expect(
      await checkAgentsSetup({ mcpUrl, pageProtocol: "https:", fetch }),
    ).toEqual([]);
    expect(requests[0]!.init?.headers).toMatchObject({
      Authorization: "Bearer kca_probe",
    });
  });

  it("reports an Authorization header the server strips", async () => {
    const { fetch } = createSite({
      [mcpUrl]: () =>
        new Response(null, {
          status: 401,
          headers: { "WWW-Authenticate": challenge },
        }),
    });

    expect(
      await checkAgentsSetup({ mcpUrl, pageProtocol: "https:", fetch }),
    ).toEqual([{ type: "authorizationHeader" }]);
  });

  it("reports an MCP URL that doesn't ask for a login", async () => {
    const { fetch } = createSite({
      [mcpUrl]: () => new Response("Forbidden", { status: 403 }),
    });

    expect(
      await checkAgentsSetup({ mcpUrl, pageProtocol: "https:", fetch }),
    ).toEqual([{ type: "unreachable", url: mcpUrl }]);
  });

  it("reports a site that never answers", async () => {
    const timeout = new AbortController();
    vi.spyOn(AbortSignal, "timeout").mockReturnValue(timeout.signal);
    const fetch = (_url: string | URL | Request, init?: RequestInit) =>
      new Promise<Response>((_, reject) => {
        if (init?.signal?.aborted) reject(init.signal.reason);
        init?.signal?.addEventListener("abort", () =>
          reject(init.signal!.reason),
        );
      });

    const problems = checkAgentsSetup({
      mcpUrl,
      pageProtocol: "https:",
      fetch,
    });
    timeout.abort();

    expect(await problems).toEqual([{ type: "unreachable", url: mcpUrl }]);
  });

  it("reports each .well-known URL a server rule keeps from Kirby", async () => {
    const { fetch } = createSite({
      "https://example.com/.well-known/oauth-protected-resource/api/copilot/mcp":
        () => new Response("<h1>Not Found</h1>", { status: 404 }),
      "https://example.com/.well-known/oauth-authorization-server": () =>
        new Response("<html></html>", { status: 200 }),
    });

    expect(
      await checkAgentsSetup({ mcpUrl, pageProtocol: "https:", fetch }),
    ).toEqual([
      {
        type: "wellKnown",
        url: "https://example.com/.well-known/oauth-protected-resource/api/copilot/mcp",
      },
      {
        type: "wellKnown",
        url: "https://example.com/.well-known/oauth-authorization-server",
      },
    ]);
  });

  it("looks up the metadata of an issuer with a path below the domain root", async () => {
    const subfolderMcpUrl = "https://example.com/site/api/copilot/mcp";
    const resourceMetadataUrl =
      "https://example.com/site/.well-known/oauth-protected-resource/site/api/copilot/mcp";
    const subfolderResourceMetadata = {
      resource: subfolderMcpUrl,
      authorization_servers: ["https://example.com/site"],
    };
    const { fetch } = createSite({
      [subfolderMcpUrl]: () =>
        new Response(null, {
          status: 401,
          headers: {
            "WWW-Authenticate": `Bearer resource_metadata="${resourceMetadataUrl}", error="invalid_token"`,
          },
        }),
      [resourceMetadataUrl]: () => Response.json(subfolderResourceMetadata),
      "https://example.com/.well-known/oauth-authorization-server/site": () =>
        Response.json({ issuer: "https://example.com/site" }),
    });

    expect(
      await checkAgentsSetup({
        mcpUrl: subfolderMcpUrl,
        pageProtocol: "https:",
        fetch,
      }),
    ).toEqual([]);
  });

  it("reports a .well-known URL inside the subfolder that a server rule keeps from Kirby", async () => {
    const subfolderMcpUrl = "https://example.com/site/api/copilot/mcp";
    const resourceMetadataUrl =
      "https://example.com/site/.well-known/oauth-protected-resource/site/api/copilot/mcp";
    const { fetch } = createSite({
      [subfolderMcpUrl]: () =>
        new Response(null, {
          status: 401,
          headers: {
            "WWW-Authenticate": `Bearer resource_metadata="${resourceMetadataUrl}", error="invalid_token"`,
          },
        }),
      [resourceMetadataUrl]: () =>
        new Response("<h1>Forbidden</h1>", { status: 403 }),
    });

    const problems = await checkAgentsSetup({
      mcpUrl: subfolderMcpUrl,
      pageProtocol: "https:",
      fetch,
    });

    expect(problems).toContainEqual({
      type: "wellKnown",
      url: resourceMetadataUrl,
    });
  });

  it("reports the domain-root URL a subfolder install doesn't pass to Kirby", async () => {
    const subfolderMcpUrl = "https://example.com/site/api/copilot/mcp";
    const resourceMetadataUrl =
      "https://example.com/site/.well-known/oauth-protected-resource/site/api/copilot/mcp";
    const { fetch } = createSite({
      [subfolderMcpUrl]: () =>
        new Response(null, {
          status: 401,
          headers: {
            "WWW-Authenticate": `Bearer resource_metadata="${resourceMetadataUrl}", error="invalid_token"`,
          },
        }),
      [resourceMetadataUrl]: () =>
        Response.json({
          resource: subfolderMcpUrl,
          authorization_servers: ["https://example.com/site"],
        }),
    });

    expect(
      await checkAgentsSetup({
        mcpUrl: subfolderMcpUrl,
        pageProtocol: "https:",
        fetch,
      }),
    ).toEqual([
      {
        type: "subfolder",
        url: "https://example.com/.well-known/oauth-authorization-server/site",
        folder: "/site",
      },
    ]);
  });

  it("reports only an MCP URL with http while the Panel runs on https", async () => {
    const { fetch, requests } = createSite();

    expect(
      await checkAgentsSetup({
        mcpUrl: "http://example.com/api/copilot/mcp",
        pageProtocol: "https:",
        fetch,
      }),
    ).toEqual([{ type: "insecure" }]);
    expect(requests).toEqual([]);
  });
});
