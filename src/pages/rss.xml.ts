import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPublishedJournalEntries } from '../lib/collections';
import { site } from '../data/site';

export async function GET(context: APIContext) {
  const entries = await getPublishedJournalEntries();

  return rss({
    title: `${site.title} — Journal`,
    description: 'Weekly engineering journal entries.',
    site: context.site!,
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.summary,
      pubDate: entry.data.date,
      link: `/journal/${entry.id}/`,
    })),
  });
}
