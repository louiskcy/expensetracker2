---
name: deploy
description: Deploy the project to staging. Runs tests, builds the production bundle, and pushes to the staging area. Use when deploying, shipping, or pushing to staging.
---

# Deploy

Deploy the expense-tracker app to the staging area. This skill runs quality checks, builds the production bundle, and pushes to the staging branch.

## Workflow

### 1. Run quality checks

Run the linter to catch issues before building:

```bash
npm run lint
```

If a `test` script is available in `package.json`, run tests first:

```bash
npm run test
```

Fix any lint errors or test failures before proceeding.

### 2. Build the production bundle

```bash
npm run build
```

The build outputs to the `dist/` directory. Verify the build succeeds with no errors.

### 3. Push to staging

Push the latest `main` branch to the `staging` branch:

```bash
git push origin main:staging
```

If the staging branch already exists and has diverged, use a force push only after confirming with the user:

```bash
git push origin main:staging --force
```

## Requirements

- All lint rules must pass before deploying
- The production build must complete without errors
- The staging branch should reflect the latest `main` code

## Notes

- This project is a pure client-side React app (Vite). The `dist/` directory is gitignored and contains the static build output.
- The build step validates that the app compiles correctly — the staging server is expected to run its own build from the pushed source.
