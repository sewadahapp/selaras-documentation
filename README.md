# Selaras Documentation Starter

A Nuxt 4.6 documentation starter using [Selaras](https://selarasui.my.id/) and the [`@sewadah/selaras-docs`](https://www.npmjs.com/package/@sewadah/selaras-docs) Nuxt layer. The layer provides the responsive documentation shell, Nuxt Content integration, local search, dark mode, and default styling. The starter includes a reusable homepage hero, product guides, a sample API reference, and practical content examples.

## Quick start

Scaffold a project from this template:

```sh
npm create nuxt@latest -- -t github:sewadahapp/selaras-documentation
```

Install dependencies with your package manager and start Nuxt:

```sh
npm install
npm run dev
```

Open `http://localhost:3000`. The project also works with pnpm, Yarn, and Bun. Bun is used by the repository's CI workflow; `package.json` does not pin a package manager.

## What's included

- Nuxt Content-backed Markdown pages with nested content organization.
- Selaras Docs responsive shell, local page search, keyboard shortcut, and dark mode.
- A standalone landing page with split and centered hero variants, customizable previews, and Selaras `SButton` calls to action.
- Example onboarding guides, API reference, request/response samples, and content patterns.
- Selaras callouts and code groups demonstrated in realistic documentation pages.
- GitHub Actions checks and a GitHub Pages deployment workflow.

The sample pages use generic project and API examples. Replace them with your own guides and reference material. Selaras supplies the reusable UI patterns; the docs layer supplies the shell, search, and color mode.

## Customize

- Configure the site name, description, browser title, favicon, header links, search, color mode, sidebar, table of contents, and footer in `app/app.config.ts`.
- Edit the standalone homepage hero copy, variant, CTA routes, and link cards in `app/pages/index.vue`; the reusable hero components live in `app/components/`.
- Add, rename, and organize guide and reference pages under `content/`; frontmatter supplies page titles and descriptions.
- Set `selarasDocs.site.url` for canonical links and add `selarasDocs.repository.url` to enable page edit and issue links.
- Extend the layer's app by adding standard Nuxt `pages/`, `components/`, or `assets/` files.

See `content/guide/getting-started.md`, `content/guide/writing-content.md`, `content/guide/homepage-heroes.md`, and `content/reference/api.md` for examples.

## Commands

```sh
npm run dev        # Start the development server
npm run lint       # Run ESLint
npm run typecheck  # Check Nuxt and Vue types
npm run build      # Build the server application
npm run generate   # Generate a static site
npm run preview    # Preview the production build
```

Use your package manager's equivalent `run` syntax for these scripts. The CI workflow uses Bun to run lint, typecheck, and build; local development can use any supported package manager.

## Deploy

The GitHub Actions workflow publishes static output to GitHub Pages when `main` is updated. Set **Settings → Pages → Build and deployment → Source** to **GitHub Actions** in the repository. The workflow configures the project base path for GitHub Pages. Remove or disable `.github/workflows/deploy-pages.yml` if you prefer another host.

For other static hosts, run `npm run generate` and deploy `.output/public`. For a Node server, run `npm run build` and serve `.output/server/index.mjs`.

MIT licensed. See [LICENSE](LICENSE).
