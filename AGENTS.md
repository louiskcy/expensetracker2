# AGENTS.md

This file provides guidance to the AI agent when working with code in this repository.

## Architecture
- Pure client-side React app — no backend, no API, no router. All state lives in `useState` in App.jsx.
- Transaction IDs are generated with `Date.now()`.
- CSS is global (App.css / index.css), not CSS modules.

## Data model
- `amount` must be a `number` (not a string). Use `Number()` when reading form inputs.
- `type` is `"income"` or `"expense"`.
- Categories are defined once in App.jsx: `["food", "housing", "utilities", "transport", "entertainment", "salary", "other"]`.

## Lint
- `no-unused-vars` ignores uppercase identifiers (`^[A-Z_]`).
