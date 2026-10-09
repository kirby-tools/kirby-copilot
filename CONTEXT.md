# Kirby Copilot

AI-assisted content generation inside the Kirby Panel: users prompt an AI provider and the result lands in Panel fields, either as streamed text or as structured field values; agents outside the Panel work on the same content through MCP.

## Language

### Prompting

**Prompt template**:
A saved, reusable prompt, optionally multilingual.
_Avoid_: preset

**Editor prompt**:
A prompt an editor sends from the Panel – typed, predefined in a blueprint, or from a prompt template.
_Avoid_: editor's own prompt, user prompt (the message role)

**Placeholder**:
A marker in an editor prompt that stands for a field's current value.
_Avoid_: template variable

**Reference token**:
A token in an editor prompt that stands for a skill or a page.
_Avoid_: mention, tag, trigger token

**Skill**:
A reusable instruction block an editor pulls into a run through a reference token in an editor prompt; the model never invokes it on its own.
_Avoid_: agent skill (model-invoked in agent frameworks)

**Selection**:
The text an editor has selected in a field, sent as is next to an editor prompt.

**Prompt context**:
Everything assembled around a prompt before a run: system prompt, skills, referenced pages, selection, attached files, response format.
_Avoid_: payload, request context

### Generation

**Generation run**:
One AI generation, from the submitted prompt to its output landing in the Panel. It can be aborted.
_Avoid_: generation job, stream, request

**Sink**:
The place a generation run's output lands: streamed text in a field, or field values saved at the end.
_Avoid_: target, callback, handler

**Inline suggestion**:
Ghost text the writer field proposes while an editor types. Unlike a generation run, it fails silently and shows no loading state.
_Avoid_: inline completion, autocomplete

### Providers

**Provider**:
An AI vendor whose models the plugin can run.
_Avoid_: model vendor, backend

**Proxy**:
The server-side pass-through that forwards Panel AI requests to the configured provider, guarding the API key and the allowed upstream hosts.
_Avoid_: gateway (see AI gateway), relay

**AI gateway**:
A service that routes requests to several providers' models; a model name then carries its provider as a prefix, like `anthropic/…`.

**Reasoning effort**:
How much the model reasons before it answers, set in one vocabulary for every provider.
_Avoid_: thinking budget, thinking level

### Interop

**Third-party seam**:
The versioned API Copilot exposes to other plugins. Only plain data crosses it, never AI SDK values, and a prompt sent through it reaches the model as is.
_Avoid_: public API, bridge, integration

### Agents

**Agent**:
An AI application outside the Panel, such as Claude, ChatGPT, or Cursor, that works on site content through the MCP URL as the Kirby user who connected it.
_Avoid_: MCP client, bot, assistant

**Client**:
The identity an agent presents when it connects: verified when its id is the HTTPS URL of a metadata document, whose host the Panel shows; unverified when the agent named itself.
_Avoid_: registration

**Connection request**:
An agent's request to connect to the site, which a user approves or declines on the consent view.
_Avoid_: authorization request (OAuth's word for it)

**Consent view**:
The Panel view where a user approves an agent's connection request and picks its connection permissions.

**Connection**:
One agent's standing authorization to act as one Kirby user with a chosen set of connection permissions, until it is revoked or ends.
_Avoid_: grant, app, integration, token

**Connection permission**:
What a connection may do – Read content, Prepare changes, Publish changes, or Delete content – picked when connecting, changeable by its user, and capped by the user's Kirby role.
_Avoid_: scope (OAuth's word for it), access

**MCP URL**:
The one address of a site that a user enters in their agent to connect it.
_Avoid_: endpoint, server URL

**Agent write**:
A change an agent makes to one model's content in one language – preparing, discarding, or publishing changes – that starts from what it last read.

**Unsaved changes**:
A model's edited content in one language that is not published yet.
_Avoid_: changes version

**Published content**:
What visitors see.
