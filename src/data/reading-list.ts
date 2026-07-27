export interface ReadingListEntry {
  title: string;
  author: string;
  url?: string;
  status: 'reading' | 'finished' | 'want-to-read';
  dateAdded: string;
  tags?: string[];
  notes?: string;
}

export const readingList: ReadingListEntry[] = [
  {
    title: 'The DevOps Handbook',
    author: 'Gene Kim, Patrick Debois, John Willis, Jez Humble',
    status: 'reading',
    dateAdded: '2026-07-27',
    tags: ['DevOps', 'Engineering Culture'],
  },
  {
    title: 'The Phoenix Project',
    author: 'Gene Kim, Kevin Behr, George Spafford',
    status: 'finished',
    dateAdded: '2026-07-27',
    tags: ['DevOps', 'Fiction'],
  },
];
