# Kirby Copilot

Commercial Kirby CMS plugin for AI-assisted content generation in the Kirby Panel.

Use the terms from `GLOSSARY.md`. Decisions are in `docs/adr/`.

## Commands

```bash
composer test          # PHPUnit
composer csfix         # php-cs-fixer, lives in tools/phpcs/vendor/bin/, not vendor/bin/
pnpm run test --run    # Vitest
pnpm run test:types    # vue-tsc
pnpm run lint          # ESLint
```

## Conventions

- `__PLAYGROUND__` is a build-time constant defined in `kirbyup.config.js`.
- `src/panel/site.ts` feeds kirby.tools' Panel mocks.
- Test methods are snake_case with no `test` prefix, marked `#[Test]`; data providers are camelCase.

## Search Hints

- `useStreamText` – main AI streaming composable
- `PLUGIN_PROXY_API_ROUTE` – AI proxy endpoint constant
