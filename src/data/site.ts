export const site = {
  title: 'Engineering Notes - Tanguy PEMEJA',
  tagline: 'A public engineering notebook',
  description:
    'Projects, journal entries, and technical notes documented in public — what I\'m building, what I\'m learning, and the decisions along the way.',
  url: 'https://engineering.kaseovo.com',
  author: 'Tanguy PEMEJA',
  githubUser: 'tpemeja',
  githubRepo: 'engineering-notes',
  socials: {
    github: 'https://github.com/tpemeja',
    email: 'tanguy.pemeja@gmail.com',
  },
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Journal', href: '/journal/' },
  { label: 'Notes', href: '/notes/' },
  { label: 'Now', href: '/now/' },
  { label: 'About', href: '/about/' },
  { label: 'Resume', href: '/resume/' },
  { label: 'Contact', href: '/contact/' },
] as const;
