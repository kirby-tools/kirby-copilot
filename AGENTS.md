# Kirby Copilot

Commercial Kirby CMS plugin for AI-assisted content generation in the Kirby Panel.

## Tech Stack

- Panel: Vue 2.7 with Composition API (`<script setup>`, composables)
- Build: kirbyup (Vite-based bundler for Kirby Panel plugins)
- Vue utilities: kirbyuse (provides `usePanel`, `useSection`, `useContent`, etc.)
- Styles: Tailwind CSS (prefixed with `kai-`)
- AI: Vercel AI SDK (bundled in `assets/` for runtime loading)
- PHP: Kirby 4/5 compatible

## Commands

- `pnpm run test --run` - run Vitest tests
- `pnpm run test:types` - typecheck

## Entry Points

- Plugin ID: `johannschopplich/copilot`
- PHP bootstrap: `index.php` (registers sections, API routes)
- Panel entry: `src/panel/index.ts` (registers Vue components via `window.panel.plugin()`)
- API routes: `src/extensions/api.php`
- Local dev: `playground/` (self-contained Kirby installation)

## Architecture

Panel extensions are registered in `src/panel/index.ts`:

- `sections`: Custom Panel sections (Copilot)
- `viewButtons`: Header copilot button
- `components`: Dialog components (k-copilot-prompt-dialog)
- `textareaButtons`: Textarea field integration
- `writerMarks`: Writer field ProseMirror marks
- `thirdParty.copilot`: Public API for external plugins
- `icons`, `use`: Icons and Kirby 4 compatibility mixins

PHP extensions in `src/extensions/`:

- `api.php`: REST endpoints and AI proxy
- `sections.php`: Section blueprints and props
- `translations.php`: i18n strings

## Search Hints

- `window.panel.plugin("johannschopplich/copilot"` - Panel registration
- `textareaButtons:` / `writerMarks:` - editor field integrations
- `PLUGIN_PROXY_API_ROUTE` - AI proxy endpoint constant
- `useStreamText` - main AI streaming composable
