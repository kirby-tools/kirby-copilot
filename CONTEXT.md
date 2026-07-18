# Kirby Copilot

AI-assisted content generation inside the Kirby Panel: users prompt an AI provider and the result lands in Panel fields, either as streamed text or as structured field values.

## Language

### Generation

**Generation run**:
One AI generation from "prompt context known" to final insertion or persistence. Owns the lifecycle: abort, loading state, error surfacing, success notification.
_Avoid_: generation job, stream, request

**Sink**:
The place a generation run's output lands. Delta sinks consume incremental text; snapshot sinks consume cumulative partial objects and persist once at the end.
_Avoid_: target, callback, handler

**Inline completion**:
The ghost-text autocomplete inside the writer field. Deliberately not a generation run – it fails silently, aborts on document changes, and shows no Panel loading state.
_Avoid_: suggestion (overloaded with skill-suggest), autocomplete

**Prompt context**:
Everything assembled around the user's prompt before a run: system prompt, skills, referenced pages, attached files, response format.
_Avoid_: payload, request context

### Prompting

**Skill**:
A reusable instruction block the user references from the prompt editor via a trigger token.

**Prompt template**:
A saved, reusable prompt, optionally multilingual.
_Avoid_: preset

**Reference token**:
An inline token in the prompt that stands for something to resolve later – a skill or a page.
_Avoid_: mention, tag

### Proxy

**Proxy**:
The server-side pass-through that forwards Panel AI requests to the configured provider, guarding the API key and the allowed upstream hosts.
_Avoid_: gateway (reserved for cross-provider model prefixes), relay

**Proxy transport**:
The streaming HTTP leg of the proxy: carries a fully shaped request upstream and emits the response to the client as it arrives.
_Avoid_: HTTP client, cURL wrapper

**Provider**:
An AI vendor the plugin can talk to (OpenAI, Anthropic, Google, Mistral).
_Avoid_: model vendor, backend

**Provider registry**:
The single owner of provider knowledge, one per language. PHP: the provider name set, per-provider default models, default upstream hosts, and API key resolution. Panel: the SDK factory, default completion model, and playground exposure per provider.
_Avoid_: provider config, provider map

**Gateway prefix**:
A provider-qualifying prefix on a model name (e.g. `anthropic/…`) used when a request crosses provider boundaries through an AI gateway.
