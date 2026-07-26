import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';
import { site } from '../../data/site';

const [projects, journal, notes] = await Promise.all([
  getCollection('projects'),
  getCollection('journal'),
  getCollection('notes'),
]);

const pages = {
  default: { title: site.title, description: site.description },
  ...Object.fromEntries(projects.map((entry) => [`projects/${entry.id}`, entry.data])),
  ...Object.fromEntries(journal.map((entry) => [`journal/${entry.id}`, { title: entry.data.title, description: entry.data.summary }])),
  ...Object.fromEntries(notes.map((entry) => [`notes/${entry.id}`, { title: entry.data.title, description: `${entry.data.category} — ${site.title}` }])),
};

export const { getStaticPaths, GET } = await OGImageRoute({
  pages,
  getImageOptions: (_path, page: { title: string; description?: string }) => ({
    title: page.title,
    description: page.description ?? site.tagline,
    bgGradient: [[11, 14, 20]],
    border: { color: [29, 78, 216], width: 4, side: 'block-start' },
    padding: 64,
    font: {
      title: { size: 56, color: [228, 231, 236] },
      description: { size: 30, color: [145, 153, 168] },
    },
  }),
});
