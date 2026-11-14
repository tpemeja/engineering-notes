import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const NOTE_CATEGORIES = [
  'C++',
  'Reinforcement Learning',
  'Kubernetes',
  'AWS',
  'FastAPI',
  'OpenSpiel',
  'System Design',
  'MCP',
  'APIs',
  'Algorithms',
] as const;

export const PROJECT_CATEGORIES = [
  'Social media automation',
  'Voice AI',
  'FastAPI & OpenAPI tooling',
  'Reinforcement learning experiments',
] as const;

export const PHASE_STATUSES = ['planned', 'in-progress', 'done'] as const;

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tagline: z.string().max(80).optional(),
    category: z.enum(PROJECT_CATEGORIES),
    active: z.boolean().default(false),
    startDate: z.coerce.date(),
    technologies: z.array(z.string()).default([]),
    technologyNotes: z
      .array(
        z.object({
          name: z.string(),
          context: z.string(),
        })
      )
      .default([]),
    githubUrl: z.url().optional(),
    websiteUrl: z.url().optional(),
    highlights: z
      .array(
        z.object({
          headline: z.string().max(28),
          detail: z.string().max(140),
          href: z.string().optional(),
        })
      )
      .max(4)
      .default([]),
    phases: z
      .array(
        z.object({
          id: z.string(),
          status: z.enum(PHASE_STATUSES),
          summary: z.string(),
        })
      )
      .default([]),
    relatedNotesSlugs: z.array(reference('notes')).default([]),
    // The card image on /projects/ and the home page: a 16:10 image under
    // public/, usually public/images/projects/<slug>/cover.webp.
    cover: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    order: z.number().default(0),
    progress: z.number().min(0).max(100).optional(),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    // One or two sentences: the note's list entry and its page description.
    summary: z.string(),
    category: z.enum(NOTE_CATEGORIES),
    tags: z.array(z.string()).default([]),
    lastUpdated: z.coerce.date(),
    status: z.enum(['evergreen', 'draft']),
    relatedNotes: z.array(reference('notes')).default([]),
  }),
});

// A case study of one employer, listed on /experience/ and the home page and
// linked from the resume. Same header and prose as a project page, but no
// phases or highlights: the body is the role's own write-up.
const experience = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/experience' }),
  schema: z.object({
    // The page's h1, e.g. "Senior Backend Developer, EDGEMATRIX".
    title: z.string(),
    // The intro paragraph under the title, also the meta description.
    description: z.string(),
    // What the cards show: the employer, and the role or roles held there.
    company: z.string(),
    role: z.string(),
    location: z.string(),
    // Shown as written ("May 2024 to present"); startDate only sorts.
    dates: z.string(),
    startDate: z.coerce.date(),
    // The Stack section, in groups. Every item is also a tag, so it links to
    // the projects and notes that use the same technology.
    stack: z
      .array(
        z.object({
          group: z.string(),
          items: z.array(z.string()),
        })
      )
      .default([]),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updatedDate: z.coerce.date().optional(),
    pdfUrl: z.string().optional(),
  }),
});

export const collections = { projects, notes, experience, pages };
