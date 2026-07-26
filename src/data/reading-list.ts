export interface ReadingListEntry {
  title: string;
  author: string;
  url?: string;
  status: 'reading' | 'finished' | 'want-to-read';
  dateAdded: string;
  tags?: string[];
  notes?: string;
}

// Template — replace with what you're actually reading.
export const readingList: ReadingListEntry[] = [
  {
    title: '[Book Title]',
    author: '[Author Name]',
    status: 'reading',
    dateAdded: '2026-01-01',
    tags: ['Add', 'Tags'],
    notes: '[Optional: why this book, or what you\'re getting out of it.]',
  },
];
