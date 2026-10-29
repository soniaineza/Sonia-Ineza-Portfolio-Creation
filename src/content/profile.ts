import type { Role, SkillGroup } from './types'

export const profile = {
  name: 'Sonia Ineza',
  location: 'Kigali, Rwanda',
  email: 'inezasonia124@gmail.com',
  github: 'https://github.com/soniaineza',
  linkedin: 'https://linkedin.com/in/soniaineza',
  positioning: 'I build software products, from the first idea to something people can use.',
  intro:
    'Software engineering student at AUCA in Kigali. I work across web, mobile and AI tools, and I like the part of a project where a rough idea becomes a system that runs.',
  siteUrl: 'https://my-portifolio-chi-eight.vercel.app',
}

// Dates are omitted until confirmed. Roles with visibility 'draft' are not shown.
export const roles: Role[] = [
  { org: 'Bittwok', focus: 'Full-stack development', kind: 'Employment', visibility: 'public' },
  { org: 'Horison Holdings', focus: 'Full-stack development', kind: 'Employment', visibility: 'public' },
  { org: 'Global Connection', focus: 'Frontend development', kind: 'Employment', visibility: 'public' },
  { org: 'Codingal', focus: 'Internship', kind: 'Internship', visibility: 'public' },
  {
    org: 'Freelance',
    focus: 'Software development for clients',
    kind: 'Freelance',
    summary:
      'Client work includes a grocery marketplace, a records tool for a finance professional and a programme website.',
    visibility: 'public',
  },
  { org: 'Imbuto Foundation', focus: 'To be confirmed', kind: 'Employment', visibility: 'draft' },
]

export const education = [
  { school: 'Adventist University of Central Africa (AUCA)', detail: 'Software Engineering', current: true },
  {
    school: 'École Secondaire Technique de Gisenyi',
    detail: 'Level 5 TVET Certificate in Software Development',
    current: false,
  },
]

export const skills: SkillGroup[] = [
  {
    area: 'Frontend',
    items: [
      { name: 'React', usedIn: 'Kora AI, Duhahe admin, Archymedes Desktop' },
      { name: 'Next.js', usedIn: 'InzuLink' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'Vue.js', usedIn: 'a game for a college unit' },
    ],
  },
  {
    area: 'Backend',
    items: [
      { name: 'Node.js and Express', usedIn: 'Duhahe API, Citizen Register, Ishyiga' },
      { name: 'Python', usedIn: 'many practice and coursework repositories' },
      { name: 'PHP and Laravel' },
    ],
  },
  {
    area: 'Mobile and desktop',
    items: [
      { name: 'React Native with Expo', usedIn: 'Duhahe mobile app' },
      { name: 'Electron', usedIn: 'Archymedes Desktop' },
      { name: 'Flutter' },
    ],
  },
  {
    area: 'Databases',
    items: [
      { name: 'PostgreSQL', usedIn: 'Citizen Register, InzuLink via Prisma' },
      { name: 'SQLite', usedIn: 'Ishyiga' },
      { name: 'Supabase and Neon' },
    ],
  },
  {
    area: 'AI and developer tooling',
    items: [
      { name: 'Agent tooling and provider APIs', usedIn: 'Archymedes Desktop' },
      { name: 'Git, GitHub Actions, Vitest', usedIn: 'Archymedes Desktop' },
      { name: 'Vercel deployment' },
    ],
  },
]
