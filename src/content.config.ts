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

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      status: z.enum(['active', 'paused', 'completed']),
      startDate: z.coerce.date(),
      endDate: z.coerce.date().optional(),
      overview: z.string(),
      problem: z.string(),
      solution: z.string(),
      architecture: z.string().optional(),
      technologies: z.array(z.string()).default([]),
      lessonsLearned: z.string(),
      futureImprovements: z.string(),
      githubUrl: z.url().optional(),
      relatedJournalSlugs: z.array(reference('journal')).default([]),
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
