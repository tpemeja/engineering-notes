# Engineering Notebook

A public "build in public" engineering notebook — projects, a weekly
journal, and evergreen technical notes — built with Astro, TypeScript,
Tailwind CSS, and MDX content collections.

## Project structure

```
src/
├── content.config.ts     # Zod schemas for all content collections
├── content/
│   ├── projects/          # One .mdx per project
│   ├── journal/            # One .mdx per weekly entry
│   ├── notes/               # One .mdx per evergreen note
│   └── pages/                # about / resume / now (MDX prose pages)
├── data/                    # site.ts (identity/nav config), reading-list.ts
├── components/
│   ├── layout/                # header, footer, nav, skip link
│   ├── ui/                     # theme toggle, tag/status badges, search
│   ├── content/                 # cards, callout, related content, timeline
│   └── seo/                      # SEOHead
├── layouts/                  # Base / Page / Project / Journal / Note layouts
├── lib/                       # dates, tags, collections, GitHub activity
└── pages/                     # file-based routes
```

Every project/journal/note is a single `.mdx` file — duplicate the
`example-*` file in each collection to add a real entry, and delete the
`example-*` file once you have real content in that collection.

## Before you publish

This scaffold intentionally ships with **templates, not fake content** —
a few things need your real information before this is a real site:

- `src/data/site.ts` — your name, GitHub username, email, socials.
- `src/content/pages/about.mdx`, `resume.mdx`, `now.mdx` — replace the
  bracketed placeholders with your actual background/experience.
- `public/resume.pdf` — the resume page links to this path; add a real
  PDF there.
- `src/data/reading-list.ts` — replace the single template entry.
- `src/content.config.ts`'s `NOTE_CATEGORIES` — add/remove categories as
  needed.

## Commands

| Command         | Action                                              |
| :--------------- | :--------------------------------------------------- |
| `pnpm install`    | Install dependencies                                  |
| `pnpm dev`        | Start the dev server at `localhost:4321`              |
| `pnpm build`      | Build to `./dist/` and generate the Pagefind search index |
| `pnpm preview`    | Preview the production build locally                  |
| `pnpm check`      | Type-check the project (`astro check`)                |

Note: search (Pagefind) only works against a production build — in `pnpm dev`
the search box will tell you to run `pnpm build` first.

## Deployment (Cloudflare Pages, Git-connected)

This repo is connected directly to a Cloudflare Pages project (**Workers &
Pages → engineering-notes → Settings → Builds**) — no GitHub Actions
involved. Cloudflare builds and deploys automatically on every push to
`main`, using:

- **Framework preset**: Astro
- **Build command**: `npm run build` (runs `astro build && pagefind --site dist`
  either way — the command string doesn't have to match the package manager;
  Cloudflare detects pnpm from `pnpm-lock.yaml` for the install step)
- **Build output directory**: `dist`

The custom domain (`engineering.kaseovo.com`) is attached under the Pages
project's **Custom domains** tab — a one-time manual step, not part of the
build. `astro.config.mjs`'s `site` field is already set to match; update it
if the domain changes.

No repository secrets are needed for deployment. `pnpm-workspace.yaml`'s
`allowBuilds: esbuild: true` is still required though — it approves
esbuild's (a transitive Vite dependency) install script, which pnpm 10+
blocks by default; without it, Cloudflare's own `pnpm install` step fails
the same way local installs did before that was added.

## Diagrams

There's no Mermaid/diagram-as-code rendering wired up (it would require
either a headless-Chromium build step or shipping a client-side JS
bundle — both felt disproportionate for a personal site). Instead, export
diagrams as SVG/PNG (Excalidraw, Mermaid Live Editor, draw.io, …), save
them under `src/assets/`, and embed them in an MDX body with:

```mdx
import { Image } from 'astro:assets';
import diagram from '../../assets/your-diagram.svg';

<Image src={diagram} alt="Describe the diagram" />
```
