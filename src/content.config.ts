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
] as const;

export const PHASE_STATUSES = ['planned', 'in-progress', 'done'] as const;

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      status: z.enum(['active', 'paused', 'completed']),
      startDate: z.coerce.date(),
      endDate: z.coerce.date().optional(),
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
      coverImage: image().optional(),
      order: z.number().default(0),
      progress: z.number().min(0).max(100).optional(),
    }),
});

const journal = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    period: z.string(),
    tags: z.array(z.string()).default([]),
    summary: z.string(),
    relatedProjectSlug: reference('projects').optional(),
    projectPhaseId: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(NOTE_CATEGORIES),
    tags: z.array(z.string()).default([]),
    lastUpdated: z.coerce.date(),
    status: z.enum(['evergreen', 'draft']),
    relatedNotes: z.array(reference('notes')).default([]),
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

export const collections = { projects, journal, notes, pages };
