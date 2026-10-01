# Copilot Is Its Own OAuth Server

claude.ai and ChatGPT connect to an MCP server only through OAuth or without any authentication, and Kirby has no bearer-token login of its own. So Copilot is the OAuth 2.1 authorization server for its agents, inside Kirby: the user signs in through the Panel's own login, with 2FA and passkeys, approves the connection on a consent view, and every request then runs as that user through `$kirby->impersonate()`. Clients identify through Client ID Metadata Documents, whose HTTPS host is an identity Copilot can show; clients without one, like Cursor, register through stateless dynamic client registration, where the `client_id` carries its own registration and Copilot keeps no client list. The protocol and the authorization server are written against the MCP specification by hand, without an MCP SDK.

## Considered Options

- **Personal tokens pasted into the agent's config** – ChatGPT refuses static tokens, claude.ai shares them across an organization, and they would be a second credential type that never expires.
- **An external identity provider** – a second system to run for each site.
- **HMAC-signed access tokens** – the connection is read on every request anyway, to catch a revocation or a role change, so a signature saves no lookup and adds a secret to keep out of git. Tokens are opaque, and only their SHA-256 hashes are stored, next to the user's account.
- **The `mcp/sdk` package** – about 16 dependencies and a 0.x API for the protocol, which is the small half, and no authorization server, which is the large one.

## Consequences

- The endpoints are Kirby API routes with `auth: false`, the one seam that returns a raw response without Kirby's session in Kirby 5 and 6. The MCP URL therefore lives under the API slug, and `api: false` turns Agents off.
- The discovery documents sit under `/.well-known/` at the site root. A host that blocks that path, or a site installed in a subfolder, can't connect agents.
- A dynamically registered client can't be blocked as a whole, since there is no registration to delete; its connections are revoked one by one.
- Copilot follows changes to the MCP authorization profile itself.
