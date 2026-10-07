export const PHASE_STATUSES = ['planned', 'in-progress', 'done'] as const;

export type PhaseStatus = (typeof PHASE_STATUSES)[number];

export const PHASE_STATUS_LABELS: Record<PhaseStatus, string> = {
  planned: 'Planned',
  'in-progress': 'In progress',
  done: 'Done',
};
