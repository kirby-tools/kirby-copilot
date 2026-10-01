import { describe, expect, it } from "vitest";
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

  it.each([
    ["pt_BR", "há 3 horas"],
    ["sr@latin", "pre 3 sata"],
  ])("formats in the %s translation", (translationCode, expected) => {
    expect(formatRelativeTime(secondsAgo(3 * 3600), now, translationCode)).toBe(
      expected,
    );
  });

  it("falls back to English for a code Intl rejects", () => {
    expect(formatRelativeTime(secondsAgo(3 * 3600), now, "x")).toBe(
      "3 hours ago",
    );
  });
});

describe("checkAgentsSetup", () => {
  const mcpUrl = "https://example.com/api/copilot/mcp";
  const challenge =
    'Bearer resource_metadata="https://example.com/.well-known/oauth-protected-resource/api/copilot/mcp", scope="content:read content:prepare"';
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
      "https://example.com/.well-known/oauth-protected-resource": () =>
        Response.json(resourceMetadata),
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

  it("reports each .well-known URL the host answers itself", async () => {
    const { fetch } = createSite({
      "https://example.com/.well-known/oauth-protected-resource": () =>
        new Response("<h1>Not Found</h1>", { status: 404 }),
      "https://example.com/.well-known/oauth-authorization-server": () =>
        new Response("<html></html>", { status: 200 }),
    });

    expect(
      await checkAgentsSetup({ mcpUrl, pageProtocol: "https:", fetch }),
    ).toEqual([
      {
        type: "wellKnown",
        url: "https://example.com/.well-known/oauth-protected-resource",
      },
      {
        type: "wellKnown",
        url: "https://example.com/.well-known/oauth-authorization-server",
      },
    ]);
  });

  it("looks up the metadata of an issuer with a path below the domain root", async () => {
    const { fetch } = createSite({
      "https://example.com/.well-known/oauth-protected-resource/api/copilot/mcp":
        () =>
          Response.json({
            ...resourceMetadata,
            authorization_servers: ["https://example.com/site"],
          }),
      "https://example.com/.well-known/oauth-authorization-server/site": () =>
        Response.json({ issuer: "https://example.com/site" }),
    });

    expect(
      await checkAgentsSetup({ mcpUrl, pageProtocol: "https:", fetch }),
    ).toEqual([]);
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
