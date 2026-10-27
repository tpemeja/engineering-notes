// Moments worth a line on the Now page that no project or note records by its
// own date. Started projects and notes are picked up from their collections;
// add here only what happened to them later.
export interface Milestone {
  date: string;
  kind: 'shipped' | 'merged';
  text: string;
  detail?: string;
  href: string;
}

export const milestones: Milestone[] = [
  {
    date: '2026-10-18',
    kind: 'shipped',
    text: 'Submitted Kataribe to the AI Builder Cup 2026',
    detail: "Google Cloud's hackathon; judging runs until Nov 6",
    href: '/projects/kataribe/',
  },
  {
    date: '2026-08-25',
    kind: 'merged',
    text: 'First open-source PR merged: open_spiel#1584',
    detail: "A seeding fix for OpenSpiel's Python ISMCTS, found while building Belote AI",
    href: 'https://github.com/google-deepmind/open_spiel/pull/1584',
  },
];
