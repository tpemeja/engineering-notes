import { getCollection, type CollectionEntry } from 'astro:content';
import { milestones } from '../data/milestones';

const isProd = import.meta.env.PROD;

export async function getPublishedProjects(): Promise<CollectionEntry<'projects'>[]> {
  const entries = await getCollection('projects');
  return entries.sort((a, b) => {
    if (a.data.order !== b.data.order) return b.data.order - a.data.order;
    return b.data.startDate.valueOf() - a.data.startDate.valueOf();
  });
}

export async function getPublishedNotes(): Promise<CollectionEntry<'notes'>[]> {
  const entries = await getCollection('notes', ({ data }) => !isProd || data.status !== 'draft');
  return entries.sort((a, b) => b.data.lastUpdated.valueOf() - a.data.lastUpdated.valueOf());
}

export interface ActivityEntry {
  date: Date;
  kind: 'started' | 'shipped' | 'merged' | 'noted';
  text: string;
  detail?: string;
  href: string;
}

export async function getRecentActivity(limit: number): Promise<ActivityEntry[]> {
  const [projects, notes] = await Promise.all([getPublishedProjects(), getPublishedNotes()]);

  const entries: ActivityEntry[] = [
    ...projects.map((entry) => ({
      date: entry.data.startDate,
      kind: 'started' as const,
      text: entry.data.title,
      detail: entry.data.tagline,
      href: `/projects/${entry.id}/`,
    })),
    ...notes.map((entry) => ({
      date: entry.data.lastUpdated,
      kind: 'noted' as const,
      text: entry.data.title,
      href: `/notes/${entry.id}/`,
    })),
    ...milestones.map((m) => ({ ...m, date: new Date(m.date) })),
  ];

  return entries.sort((a, b) => b.date.valueOf() - a.date.valueOf()).slice(0, limit);
}
