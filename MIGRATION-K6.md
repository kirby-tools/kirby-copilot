# Kirby 6 Migration Checklist

Everything in this plugin that only works because the Panel still runs Vue 2 or
still ships a Kirby 5 alias. Each entry names the site, what breaks, and what to
put there instead. Nothing here can be fixed ahead of the Vue 3 switch – the
spellings that survive both versions have already been changed in place.

Read top to bottom while migrating, then delete the file.

## Vue 3

- **`slot="options"`** – `Sections/Copilot.vue:343`. Vue 2 slot syntax; Vue 3
  ignores it, so the section header loses its licensing buttons. Replace with
  `<template #options v-if="licenseStatus !== undefined">`.
- **`.native` modifiers** – `ViewButtons/CopilotButton.vue:241,242` and
  `Dialogs/Prompt.vue:384,385,386`. Vue 3 drops the modifier, and the click
  guard that keeps the placeholder dropdown open goes with it. Dropping
  `.native` alone is not enough on `k-search-input`: Kirby's input mixin sets
  `inheritAttrs: false` and neither `StringInput` nor `SearchInput` forwards
  `$attrs`, so the listener never reaches the DOM. Move the guard onto the
  wrapping `.k-copilot-dropdown-content-search` element.

## Renamed Panel Components

- **`k-dropdown-content`** – `Ui/ContentDropdown.vue:30,44`. Kirby 6 keeps the
  tag only as a deprecated alias of `Dropdown.vue`. Rename to `<k-dropdown>`;
  the `open`/`close`/`toggle` methods and the `align-x`, `navigate` and `theme`
  props are unchanged.
- **`k-pages-dialog`** – `Dialogs/Prompt.vue:213`. Deprecated in favour of
  `k-page-picker-dialog`, which takes a `payload` and refreshes through
  `this.$refs.dialog.refresh({ parent })` rather than an `endpoint` plus a
  `parent` data field. Remap `endpoint` and `item` onto that contract.
- **`k-text` `html` prop** – `Sections/Copilot.vue:525`. Deprecated in favour of
  `text`, which is `@since 6.0.0`. A bare switch renders the help HTML escaped,
  because Kirby 6's `v-safe-html` only renders raw for `HtmlString` instances
  and `help` is a plain string off a JSON response (`Sections/Copilot.vue:152`).
  The backend has to mark the value trusted at the same time.

## Version Branches

- **`isKirby5()`** – `legacy.ts:8`, `Sections/Copilot.vue:62,488`,
  `Dialogs/Prompt.vue:52,338`. Kirby 6 is the Vue 3 break, so every branch goes
  with the migration.

## Visual

- **Placeholder preview background** – `Dialogs/Prompt.vue:311` paints the
  `<details>` with `--panel-color-back`. Kirby 6's `Dialog.vue` sets
  `--dialog-color-back: var(--panel-color-back)`, so the panel and the dialog
  behind it become the same colour and the preview stops reading as a surface.
  Pick a token that still contrasts against the dialog.
