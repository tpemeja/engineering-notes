// The short timeline on the home page. The full story, with what I did in
// each role, is on the resume page (src/content/pages/resume.mdx).
export interface Role {
  role: string;
  company: string;
  location: string;
  dates: string;
}

export const experience: Role[] = [
  {
    role: 'Senior Backend Developer',
    company: 'EDGEMATRIX Inc.',
    location: 'Tokyo, Japan',
    dates: '2024 – now',
  },
  {
    role: 'Cybersecurity Engineer',
    company: 'TEHTRIS Japan',
    location: 'Tokyo, Japan',
    dates: '2022 – 2024',
  },
  {
    role: 'R&D Cybersecurity Consultant',
    company: 'TEHTRIS',
    location: 'Pessac, France',
    dates: '2021 – 2022',
  },
  {
    role: 'Machine Learning Intern',
    company: 'INRIA',
    location: 'Bordeaux, France',
    dates: '2021',
  },
];
