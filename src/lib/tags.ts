import { getPublishedJournalEntries, getPublishedNotes, getPublishedProjects } from './collections';

export interface TaggedEntry {
  title: string;
  description: string;
  href: string;
  date: Date;
  kind: 'project' | 'journal' | 'note';
}

export function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

interface TagBucket {
  label: string;
  entries: TaggedEntry[];
}

async function buildTagBuckets(): Promise<Map<string, TagBucket>> {
  const [projects, journal, notes] = await Promise.all([
    getPublishedProjects(),
    getPublishedJournalEntries(),
    getPublishedNotes(),
  ]);

  const buckets = new Map<string, TagBucket>();

  const add = (tag: string, entry: TaggedEntry) => {
    const slug = slugifyTag(tag);
    if (!slug) return;
    const bucket = buckets.get(slug) ?? { label: tag, entries: [] };
    bucket.entries.push(entry);
    buckets.set(slug, bucket);
  };

  for (const entry of projects) {
    const tagged: TaggedEntry = {
      title: entry.data.title,
      description: entry.data.description,
      href: `/projects/${entry.id}/`,
      date: entry.data.startDate,
      kind: 'project',
    };
    for (const tech of entry.data.technologies) add(tech, tagged);
  }

  for (const entry of journal) {
    const tagged: TaggedEntry = {
      title: entry.data.title,
      description: entry.data.summary,
      href: `/journal/${entry.id}/`,
      date: entry.data.date,
      kind: 'journal',
    };
    for (const tag of entry.data.tags) add(tag, tagged);
  }

  for (const entry of notes) {
    const tagged: TaggedEntry = {
      title: entry.data.title,
      description: entry.data.category,
      href: `/notes/${entry.id}/`,
      date: entry.data.lastUpdated,
      kind: 'note',
    };
    for (const tag of entry.data.tags) add(tag, tagged);
  }

  return buckets;
}

export interface TagSummary {
  slug: string;
  label: string;
  count: number;
}

export async function getAllTags(): Promise<TagSummary[]> {
  const buckets = await buildTagBuckets();
  return Array.from(buckets.entries())
    .map(([slug, bucket]) => ({ slug, label: bucket.label, count: bucket.entries.length }))
    .sort((a, b) => a.label.localeCompare(b.label));
}

export async function getEntriesForTag(tagSlug: string): Promise<{ label: string; entries: TaggedEntry[] } | null> {
  const buckets = await buildTagBuckets();
  const bucket = buckets.get(tagSlug);
  if (!bucket) return null;
  return {
    label: bucket.label,
    entries: bucket.entries.sort((a, b) => b.date.valueOf() - a.date.valueOf()),
  };
}
