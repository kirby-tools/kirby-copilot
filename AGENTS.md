# Kirby Copilot

Commercial Kirby CMS plugin for AI-assisted content generation in the Kirby Panel.

## Commands

- `composer test` – PHPUnit
- `composer csfix` – php-cs-fixer, which lives in `tools/phpcs/vendor/bin/`, not `vendor/bin/`
- `pnpm run test --run` – Vitest
- `pnpm run test:types` – typecheck
- `pnpm run lint` – ESLint

## Conventions

- `CONTEXT.md` carries the domain vocabulary – generation run, sink, inline completion, prompt context. Read it before naming anything new.
- `__PLAYGROUND__` is a build-time constant from `kirbyup.config.js`, declared to TypeScript in `src/env.d.ts`.
- Test methods are snake_case with no `test` prefix, marked `#[Test]`; data providers are camelCase.

## Search Hints

- `window.panel.plugin("johannschopplich/copilot"` – Panel registration
- `Kirby::plugin(` – PHP plugin registration
- `useStreamText` – main AI streaming composable
- `PLUGIN_PROXY_API_ROUTE` – AI proxy endpoint constant
- `textareaButtons:` / `writerMarks:` – editor field integrations
