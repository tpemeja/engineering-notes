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

export async function getPublishedJournalEntries(): Promise<CollectionEntry<'journal'>[]> {
  const entries = await getCollection('journal', ({ data }) => !isProd || !data.draft);
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getJournalEntriesForProject(
  projectSlug: string
): Promise<CollectionEntry<'journal'>[]> {
  const entries = await getPublishedJournalEntries();
  return entries.filter((entry) => entry.data.relatedProjectSlug?.id === projectSlug);
}

export async function getJournalEntriesForPhase(
  projectSlug: string,
  phaseId: string
): Promise<CollectionEntry<'journal'>[]> {
  const entries = await getPublishedJournalEntries();
  return entries
    .filter((entry) => entry.data.relatedProjectSlug?.id === projectSlug && entry.data.projectPhaseId === phaseId)
    .sort((a, b) => a.data.date.valueOf() - b.data.date.valueOf());
}

export async function getPublishedNotes(): Promise<CollectionEntry<'notes'>[]> {
  const entries = await getCollection('notes', ({ data }) => !isProd || data.status !== 'draft');
  return entries.sort((a, b) => b.data.lastUpdated.valueOf() - a.data.lastUpdated.valueOf());
}

export interface ActivityEntry {
  date: Date;
  kind: 'started' | 'shipped' | 'merged' | 'wrote' | 'noted';
  text: string;
  detail?: string;
  href: string;
}

export async function getRecentActivity(limit: number): Promise<ActivityEntry[]> {
  const [projects, journal, notes] = await Promise.all([
    getPublishedProjects(),
    getPublishedJournalEntries(),
    getPublishedNotes(),
  ]);

  const entries: ActivityEntry[] = [
    ...projects.map((entry) => ({
      date: entry.data.startDate,
      kind: 'started' as const,
      text: entry.data.title,
      detail: entry.data.tagline,
      href: `/projects/${entry.id}/`,
    })),
    ...journal.map((entry) => ({
      date: entry.data.date,
      kind: 'wrote' as const,
      text: entry.data.title,
      href: `/journal/${entry.id}/`,
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
