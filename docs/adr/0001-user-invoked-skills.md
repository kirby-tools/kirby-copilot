# Skills Are User-Invoked Prompt Presets, Not Agent Skills

The AI ecosystem (Anthropic Agent Skills, agentskills.io) has standardized "skills" as model-invoked capabilities: SKILL.md files whose descriptions the model reads to decide autonomously what to load, with progressive disclosure and optional code execution. Copilot skills deliberately diverge: a skill is three config strings (`id`, `label`, `instructions`) that an editor references explicitly via `@skill://<id>`, concatenated verbatim into the system prompt of a single generation run.

We chose user-invoked over model-invoked because a Panel generation run is one-shot and editor-driven: deterministic, transparent selection beats autonomous selection, and inlining avoids a tool round-trip per run. We also rejected the AI SDK v7 native skill APIs (`uploadSkill` plus provider containers): they require code-execution sandboxes, support only Anthropic/OpenAI, and would push customer-authored instructions through provider-hosted skill uploads – all wrong for a multi-provider, BYO-key CMS plugin that only streams text into fields.

## Consequences

- Skills resolve in every generation run (`resolvePromptContext`), regardless of which surface started it; the typeahead and highlighting exist only in the prompt dialog.
- The model never sees a skill list or the `@skill://` token – only the injected `<skill>` blocks. There is no metadata tier, so nothing needs progressive disclosure.
- A future model-invoked mode (description field plus on-demand loading) stays possible on top of the same config shape, but is out of scope until users show up with skill libraries large enough to justify the round-trip.
