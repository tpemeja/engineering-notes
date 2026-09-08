import type { CollectionEntry } from 'astro:content';

export const PHASE_STATUSES = ['planned', 'in-progress', 'done'] as const;

export type PhaseStatus = (typeof PHASE_STATUSES)[number];

export const PHASE_STATUS_LABELS: Record<PhaseStatus, string> = {
  planned: 'Planned',
  'in-progress': 'In progress',
  done: 'Done',
};

export interface PhaseStats {
  total: number;
  done: number;
}

// Phases live in the MDX body as <Phase status="..."> rather than in frontmatter,
// so the only way to count them ahead of render is to read the raw source.
const PHASE_STATUS_ATTR = /<Phase\b[^>]*?\bstatus=["']([a-z-]+)["']/gs;

export function getPhaseStats(project: CollectionEntry<'projects'>): PhaseStats {
  const statuses = [...(project.body ?? '').matchAll(PHASE_STATUS_ATTR)].map(([, status]) => status);

  // Projects not yet migrated to <Phase> still declare their phases in frontmatter.
  if (statuses.length === 0) {
    const legacy = project.data.phases ?? [];
    return { total: legacy.length, done: legacy.filter((phase) => phase.status === 'done').length };
  }

  return { total: statuses.length, done: statuses.filter((status) => status === 'done').length };
}
