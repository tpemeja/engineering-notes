export const site = {
  title: 'Tanguy PEMEJA',
  tagline: 'A public engineering notebook',
  description:
    "Projects and technical notes documented in public: what I'm building, what I'm learning, and the decisions along the way.",
  url: 'https://engineering.kaseovo.com',
  author: 'Tanguy PEMEJA',
  githubUser: 'tpemeja',
  githubRepo: 'engineering-notes',
  socials: {
    github: 'https://github.com/tpemeja',
    linkedin: 'https://www.linkedin.com/in/tanguy-pemeja',
    email: 'tanguy.pemeja@gmail.com',
  },
} as const;

// What the home page says about me before anything else.
export const profile = {
  role: 'Senior Backend & Platform Engineer',
  location: 'Based in Japan, relocating to Singapore',
  pitch:
    'I build backend APIs, cloud infrastructure and the tools around them, with five years in cybersecurity and IoT. Outside work I ship whole products end to end, and write up how each one was built.',
  // Shown in order under "Selected work"; every other project is one click away.
  featuredProjects: ['kataribe', 'fastspec', 'belote-ai', 'instagram-agent'],
  proof: [
    {
      headline: '5 years',
      detail: 'Backend APIs and distributed systems in cybersecurity and IoT',
      href: '/resume/',
    },
    {
      headline: 'AWS Certified',
      detail: 'Solutions Architect, Associate',
      href: 'https://www.credly.com/badges/e2b1face-b59d-4d85-92cb-a7ed1c60cfcd',
    },
    {
      headline: 'Merged upstream',
      detail: "A seeding fix in Google DeepMind's OpenSpiel",
      href: 'https://github.com/google-deepmind/open_spiel/pull/1584',
    },
    {
      headline: 'Published on PyPI',
      detail: 'FastMock, a FastAPI mocking middleware',
      href: '/projects/fastmock/',
    },
  ],
} as const;

export const nav = [
  { label: 'Projects', href: '/projects/' },
  { label: 'Notes', href: '/notes/' },
  { label: 'Now', href: '/now/' },
  { label: 'About', href: '/about/' },
  { label: 'Resume', href: '/resume/' },
  { label: 'Contact', href: '/contact/' },
] as const;
