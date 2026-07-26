// Fill in `author`, `githubUser`, and `socials.github` with your real
// values — `githubUser` in particular is used to fetch live activity
// (see src/lib/github.ts), so a wrong username will just fetch nothing.
export const site = {
  title: 'Kaseovo',
  tagline: 'A public engineering notebook',
  description:
    'Projects, journal entries, and technical notes documented in public — what I\'m building, what I\'m learning, and the decisions along the way.',
  url: 'https://engineering.kaseovo.com',
  author: '[Your Name]',
  githubUser: 'your-github-username',
  githubRepo: 'engineering-notes',
  socials: {
    github: 'https://github.com/your-github-username',
    email: 'your-email@example.com',
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
