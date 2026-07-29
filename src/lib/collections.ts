import { getCollection, type CollectionEntry } from 'astro:content';

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

export interface TimelineEntry {
  date: Date;
  title: string;
  description: string;
  href: string;
  kind: 'project' | 'journal';
}

export async function getTimeline(): Promise<TimelineEntry[]> {
  const [projects, journal] = await Promise.all([getPublishedProjects(), getPublishedJournalEntries()]);

  const projectEntries: TimelineEntry[] = projects.map((entry) => ({
    date: entry.data.startDate,
    title: entry.data.title,
    description: entry.data.description,
    href: `/projects/${entry.id}/`,
    kind: 'project',
  }));

  const journalEntries: TimelineEntry[] = journal.map((entry) => ({
    date: entry.data.date,
    title: entry.data.title,
    description: entry.data.summary,
    href: `/journal/${entry.id}/`,
    kind: 'journal',
  }));

  return [...projectEntries, ...journalEntries].sort((a, b) => b.date.valueOf() - a.date.valueOf());
}
