---
name: project-page
description: Author or edit a project page on this site. Use when adding a project under src/content/projects, writing or reworking a phase, or migrating an old-style project to the phase ledger.
---

# Project pages

A project page is **recruiter-first**. Someone skimming for sixty seconds gets what it is, why it was hard, how you worked, and what shipped, without expanding anything. Depth sits one click below that, never in front of it.

The page is **looked at** before it is read. Prefer anything with shape over a paragraph: a screenshot, a diagram, a table, a list. Prose is the fallback for what genuinely resists structure, not the default container for everything you know.

## Page shape

`##` sections, in this order:

1. **Overview**: what the thing is. Two short paragraphs at most.
2. **Problem**: three to five bullets, each a real constraint that shaped the design.
3. **Approach**: how you worked, and the one rule the codebase follows throughout. This is the most hireable paragraph on the page, which is why it sits above the phases instead of below them.
4. **What I built**: the `<PhaseLedger>`.
5. **Tech stack**: `<TechStack notes={frontmatter.technologyNotes} />`.
6. **Future improvements**: known gaps, not a roadmap.

Frontmatter carries `title`, `description`, `status`, `startDate`, optional `endDate`, `technologies`, `technologyNotes`, `githubUrl`, `highlights`, `relatedNotesSlugs`, `order`. It carries no phase data and no `progress`.

## Highlights

`highlights` is the strip `ProjectLayout` renders under the header, above Overview: the three or four things a recruiter should leave with if they read nothing else.

```yaml
highlights:
  - headline: '+38.7 pts/deal'
    detail: 'Monte Carlo policy improvement over the best hand-written rule, the largest gain on the ladder.'
  - headline: 'Fix merged upstream'
    detail: "Found and fixed a seeding bug in OpenSpiel's Python ISMCTS."
    href: 'https://github.com/google-deepmind/open_spiel/pull/1584'
```

- **Three or four**, never more (the schema caps it at four).
- **`headline` is the claim**, at most 28 characters: a number with its unit, or a short distinction ("Published on PyPI", "In real use"). **`detail` backs it**, one sentence under 140 characters.
- **Each is a result or a distinction, not a feature.** Apply the Result test: "Deterministic mocks" earns a card because it is a guarantee a user can rely on; "Has a settings page" does not.
- **Pick different kinds.** A strong set mixes a measured result, an outside signal (merged upstream, published, used by a real person), and what was hard. Four numbers from one phase is one highlight repeated.
- **Only what the page or repo proves.** Every figure must appear in the body or trace to a record; a highlight is the page's best evidence brought forward, never a new claim.
- `href` is optional: link to the proof (a merged PR, a note, a package page) when there is one to point at. Never invent a URL.

## Phases

A phase is **a unit of work with a result**: something that started, ended, and moved a demonstrable thing.

Phases live in the body, never in frontmatter:

```mdx
<Phase
  id="request-validation"
  title="Request validation"
  status="done"
  goal="Reject a malformed request the way the real endpoint would, before any real implementation exists to reject it."
  outcome="A malformed request gets FastAPI's own 422, without ever resolving the route's Depends(...)."
>

Approach prose, then the one hero visual.

</Phase>
```

`status` is `planned`, `in-progress`, or `done`. `id` is the deep-link anchor, so it is stable once published: journal entries reference it through `projectPhaseId`.

Collapsed rows **are** the ledger, so `outcome` does double duty: the row's headline and the phase's result. State it once, in the prop, and let the body carry only goal and approach.

### The Result test

Write `outcome` first. A phase whose result resists a single line is not a phase: merge it into a neighbour, or delete it. A feature note with nothing measurable behind it fails this test even when it names a real feature.

### Budgets

| Field | Budget |
|---|---|
| `goal` | one or two sentences, ~60 words |
| `outcome` | one line, under ~110 characters |
| approach (children) | ~150 words **of prose** |

Visuals do not count against the approach budget. Replacing a paragraph with a diagram or a list is always a win, so the budget bites on text only.

### Show it, do not write it

Every phase carries at least one visual, and a phase that ends up as a block of text needs a reason why nothing in it could be shown. Reach down this list and stop at the first form the content supports:

1. **Screenshot**, for anything with a UI. Always beats describing the UI.
2. **Diagram**, for a flow, a structure, or a model.
3. **Table or chart**, for choices, comparisons, and measured results.
4. **List**, for anything enumerable. A paragraph that says "A, and also B, and also C" is a list wearing a paragraph.
5. **Prose**, for the connective tissue the first four cannot carry.

The limit is redundancy, not count. Several visuals are right when each proves something different; what to cut is the third chart making the same point as the first, or a paragraph restating the table beside it. Route the surplus per *Where cut material goes*.

Alongside the visuals, at most one `<Callout>` per phase.

**The components:**

- `Screenshot`: any UI. A project with an interface should show it in most phases.
- `BranchDiagram`: one input splitting into paths that rejoin.
- `ObjectDiagram` / `NetworkDiagram`: a structure, or a model's layers.
- `DecisionTable`: the choices that shaped the design, with what was rejected and why. The default when a phase is about judgement.
- `ConfidenceIntervalChart`, `WinTieLossBar`, `SweepChart`, `PercentBars`: measured results.
- `Callout`: `lesson` for something transferable you got wrong, `decision` for a choice needing more room than a table row, `warning` for a trap in someone else's system.

### Where cut material goes

- **Experiment logs, extra charts, parameter sweeps** go to the project's own repo. Name the path in prose the way `insta-insight` points at its `SETUP.md`.
- **Transferable lessons** get promoted to `src/content/notes/` and wired through `relatedNotesSlugs`. A lesson that would teach someone who never touches this project belongs there rather than deleted.

## Prose rules

- **Never use an em dash.** Use a comma, semicolon, colon, or parentheses. Number ranges take hyphens (`3.10-3.13`).
- **Never narrate version or release history.** No "As of 0.2.0", no "the initial commit is from June 2024, picked back up two years later". Describe the project as it stands now.
- Write what a thing *is* and *does*, in present tense.

## Code blocks

Fenced blocks are syntax-highlighted by Shiki, dual-themed in `astro.config.mjs` and styled in `global.css`. Tag the language (` ```python `).

Write only code you can verify against a real source. When the project's repo is not on this machine, keep the snippet to library code you can confirm and describe the project's own API in prose, rather than inventing a signature that looks authoritative and is wrong.

## Journal entries

Journal entries surface at page level through `relatedProjectSlug`, rendered by `RelatedContent`. Keep them out of phase bodies: they are reflections about the project, not evidence for one phase's result.

## Before calling it done

- Three or four `highlights`, each a result or distinction backed by the body, with headlines of 28 characters or fewer.
- Every `<Phase>` carries all five props, and every `outcome` states a result rather than a description of activity.
- Every phase carries at least one visual, and no paragraph runs longer than about four lines where a list or a diagram would do.
- `grep -n "—" <file>` on the file returns nothing.
- No version numbers narrating history.
- `pnpm build` and `pnpm check` both clean.
- Read the rendered page at `/projects/<slug>` and check the ledger rows read well collapsed. Those one-liners are the only thing a recruiter is guaranteed to read.

## Migrating an old-style page

Pages still on the old model have a `phases:` array in frontmatter, a `## Phases` section, `<PhaseCarousel>`, and `### Title |#id|` headings.

1. Apply the Result test to every existing phase before touching prose. Merge and delete first, so you never compress a phase you were about to cut.
2. Move each surviving phase into a `<Phase>`, turning its frontmatter `summary` into a one-line `outcome` and writing the `goal` it never had.
3. Convert what prose you can into lists, tables, or diagrams, then cut redundant visuals and all but one callout, routing the surplus per *Where cut material goes*. Text shrinks; visuals stay unless two make the same point.
4. Delete `phases:` and `progress:` from frontmatter, swap the `PhaseCarousel` import for `PhaseLedger` and `Phase`, rename `## Phases` to `## What I built`, and move `## Approach` above it.
5. Report every merge, deletion, and cut so the choices can be reversed. These are editorial calls about someone else's work: propose them, do not quietly make them.
