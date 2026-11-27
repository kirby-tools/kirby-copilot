# Copilot Ships No Page Factory

A page factory would fill a model's fields from PHP: a `generateFields($model, $prompt, $fieldNames)` that derives a response format from the blueprint, runs it through the PHP `Client`, and saves the values, plus a CLI command and recipes that fill many pages in one batch. It looks one method away – `FieldDigest` already describes a model's fields with a format hint per type, for the agent tools – but Copilot doesn't ship it.

Its buyers would be developers, and a developer who wants many pages filled has a coding agent work directly on Kirby's flat-file content. Copilot is built for the editor: a generation run that fills several fields starts from the view button in the Panel, one model at a time, with its response format built from the form's fields there.

## Consequences

- The PHP `Client` stays a provider client – messages in, text or JSON out. A plugin that needs model-aware generation builds it on top, as Content Translator does for its batch translations.
- An agent fills pages through Copilot one tool call per model, under the review gate of ADR `0002-agents-prepare-editors-publish.md`.
