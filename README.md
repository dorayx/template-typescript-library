# _opinionated_ TypeScript Library Template

This template is opinionated, and it is not meant to be a one-size-fits-all solution.
It is meant to be a starting point for my personal projects to bootstrap development, as I like to create minimal viable products from time to time.

## User Cases

- ❌ TypeScript Application _(use [dorayx/template-typescript-app](https://github.com/dorayx/template-typescript-app) instead)_
- ✅ TypeScript Library
- ❌ UI Component Library

## Features

- ✅ TypeScript v5
- ✅ Vite + Vitest
- ✅ Linters
- ✅ Code Generator
- ✅ Semantic Release
- ✅ GitHub Actions
- ❌ Monorepo

## Tooling

This template is configured with the following tools:

**Compiler & Bundler**

- [TypeScript](https://www.typescriptlang.org/) _(v5)_
- [ts-patch](https://github.com/nonara/ts-patch): Patch typescript to allow custom transformers (plugins) during build
  - [typescript-transform-paths](https://github.com/LeDDGroup/typescript-transform-paths): Transform compiled source module resolution paths using TypeScript's paths config

**Package Manager**

- [Yarn](https://yarnpkg.com/) _(v3)_
  - Doc: [Zero-installs](https://yarnpkg.com/features/caching#zero-installs)

**Testing**

- [Vite](https://vitejs.dev/) _(v4)_
  - Plugin: [vite-tsconfig-paths](https://www.npmjs.com/package/vite-tsconfig-paths)
- [Vitest](https://vitest.dev/)
  - Convention: Unit tests for user cases are stored in the `tests/units` directory
  - Convention: Unit tests for individual functions are placed in `*.test.ts` files alongside their respective source files
  - Convention: The file `tests/setup.ts` is executed before each test file
  - Convention: The `tests/tsconfig.json` file configures TypeScript for testing
- GitHub Action: `.github/workflows/test.yml`

**Linters**

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Commitlint](https://commitlint.js.org/#/)
- [Husky](https://typicode.github.io/husky/#/)
- [LintStaged](https://github.com/okonet/lint-staged)

**Code Generator**

- [Plop](https://plopjs.com/): A micro-generator framework that makes it easy for an entire team to create files with a level of uniformity

**Publish**

- [semantic-release](https://semantic-release.gitbook.io/): Fully automated version management and package publishing
  - GitHub Action: `.github/workflows/release-package.yml`
  - Env Variables: `NPM_TOKEN` is required to publish a package to the npm registry
  - Additional Plugin: [semantic-release-yarn](https://github.com/hongaar/semantic-release-yarn)
  - Additional Plugin: [@semantic-release/changelog](https://github.com/semantic-release/changelog)

## Development Conventions

### Branches

- `main`: Used for stable features & production releases
- `dev`: Used for features under development
- `next`: Used for experimental features
