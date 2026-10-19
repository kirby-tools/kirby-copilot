# Copilot Is Its Own OAuth Server

claude.ai and ChatGPT connect to an MCP server only through OAuth or without any authentication, and Kirby has no bearer-token login of its own. So Copilot is the OAuth 2.1 authorization server for its agents, inside Kirby: the user signs in through the Panel's own login, two-factor challenge included, approves the connection request on the consent view, and every request then runs as that user through `$kirby->impersonate()`. An agent identifies its client through a Client ID Metadata Document, whose HTTPS host the consent view can show; an agent without one, like Cursor, registers through stateless dynamic client registration, where the `client_id` carries its own registration and Copilot keeps no client list. The protocol and the authorization server are written against the MCP specification by hand, without an MCP SDK.

## Considered Options

- **Personal tokens pasted into the agent's config** – ChatGPT refuses static tokens, claude.ai shares them across an organization, and they would be a second credential type that never expires.
- **An external identity provider** – a second system to run for each site.
- **HMAC-signed access tokens** – the connection is read on every request anyway, to catch a revocation or a role change, so a signature saves no lookup and adds a secret to keep out of git.
- **The `mcp/sdk` package** – about 16 dependencies and a 0.x API for the protocol, which is the small half, and no authorization server, which is the large one.

## Consequences

- The endpoints are Kirby API routes with `auth: false`, the one seam that returns a raw response without Kirby's session in Kirby 5 and 6. The MCP URL therefore lives under the API slug, and `api: false` turns Agents off.
- The discovery documents sit under `/.well-known/` at the domain root. A host that answers that path itself, or a site installed in a subfolder, needs a server rule that passes them to Kirby.
- The protected resource metadata is also served at the bare `/.well-known/oauth-protected-resource`, since agents that miss the `WWW-Authenticate` hint probe the root. Another plugin on the same site can't serve its own metadata there while Agents are on.
- A dynamically registered client can't be blocked as a whole, since there is no registration to delete; its connections are revoked one by one.
- Every approved connection request becomes a new connection, even when the user already has one of the same client: Claude Code connects every install under one client ID, so replacing it would sign the user's other machines out.
- An agent sees every tool the user's role makes available, not just those of its connection's permissions. A call that needs a permission the connection lacks, where the role makes it available, answers 403 `insufficient_scope`, so the agent can send a new connection request. For a verified client, the consent view starts from the permissions of the user's most recently active connection of that client and marks the requested one unticked; an unverified client starts from the defaults, since anyone can claim its id. The agent's earlier connection stays in the Agents view until it ends or the user revokes it.
- Copilot doesn't rate-limit agents, as Kirby doesn't rate-limit its API: a connection may do no more than its user may in the Panel, and the client metadata fetch anyone can trigger stays bounded by its timeout, size cap, and refusal of private networks. Floods are the host's to stop.
- Redirect URIs may use an app scheme like `cursor://`, although MCP asks for localhost or HTTPS, since native agents like Cursor receive the code through one.
- Without an SDK, changes to the MCP authorization spec are Copilot's to follow.
