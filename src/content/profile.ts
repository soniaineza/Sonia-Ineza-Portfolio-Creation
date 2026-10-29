import type { Role, SkillGroup } from './types'

export const profile = {
  name: 'Sonia Ineza',
  location: 'Kigali, Rwanda',
  email: 'inezasonia124@gmail.com',
  github: 'https://github.com/soniaineza',
  // LinkedIn is intentionally unset until a verified URL is confirmed.
  linkedin: undefined as string | undefined,
  positioning: 'I build software products, from the first idea to something people can use.',
  intro:
    'Software engineering student at AUCA in Kigali. I work across web, mobile and AI tools, and I like the part of a project where a rough idea becomes a system that runs.',
}

// Calendar dates are omitted until confirmed. Roles with visibility 'draft' are not shown.
export const roles: Role[] = [
  {
    org: 'Bittowk Technologies',
    focus: 'Full-stack developer',
    kind: 'Employment',
    dates: '8 months',
    summary: 'Built and maintained frontend and backend systems, developed REST APIs and worked on features and debugging.',
    visibility: 'public',
  },
  { org: 'Horison Holdings', focus: 'Full-stack development', kind: 'Employment', visibility: 'public' },
  { org: 'Global Connection', focus: 'Frontend development', kind: 'Employment', visibility: 'public' },
  {
    org: 'Codingal',
    focus: 'Intern',
    kind: 'Internship',
    summary: 'Project-based coding assignments that built programming and problem-solving fundamentals.',
    visibility: 'public',
  },
  {
    org: 'Freelance',
    focus: 'Software development for clients',
    kind: 'Freelance',
    summary:
      'Client work includes a grocery marketplace, a records tool for a finance professional and a programme website.',
    visibility: 'public',
  },
  {
    org: 'Imbuto Foundation',
    focus: 'Contributor',
    kind: 'Volunteer',
    summary: 'Took part in tech-related initiatives and collaborative projects.',
    visibility: 'public',
  },
]

export const education = [
  {
    school: 'Adventist University of Central Africa (AUCA)',
    detail: 'BSc Software Engineering, expected 2030',
    current: true,
  },
  {
    school: 'École Secondaire Technique de Gisenyi',
    detail: 'Level 5 TVET Certificate in Software Development',
    current: false,
  },
]

// `level` is shown only where my own résumé states one.
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
      { name: 'Python', level: 'Strong', usedIn: 'many practice and coursework repositories' },
      { name: 'Node.js and Express', usedIn: 'Duhahe API, Citizen Register, Ishyiga, Kimu Transport' },
      { name: 'JavaScript', level: 'Intermediate' },
      { name: 'PHP and Laravel' },
      { name: 'Java and C++', level: 'Basic' },
    ],
  },
  {
    area: 'Mobile and desktop',
    items: [
      { name: 'React Native with Expo', usedIn: 'Duhahe, Inkingi Rescue, Kimu Transport' },
      { name: 'Electron', usedIn: 'Archymedes Desktop' },
      { name: 'Flutter' },
      { name: 'Android with Kotlin', level: 'Basic' },
    ],
  },
  {
    area: 'Databases',
    items: [
      { name: 'PostgreSQL', usedIn: 'Citizen Register, InzuLink via Prisma, Kimu Transport' },
      { name: 'SQLite', usedIn: 'Ishyiga' },
      { name: 'MySQL and MongoDB' },
      { name: 'Supabase and Neon' },
    ],
  },
  {
    area: 'AI and developer tooling',
    items: [
      { name: 'Agent tooling and provider APIs', usedIn: 'Archymedes Desktop' },
      { name: 'Git, GitHub Actions, Vitest', usedIn: 'Archymedes Desktop' },
      { name: 'Figma' },
      { name: 'Docker', level: 'Basic' },
      { name: 'Vercel deployment' },
    ],
  },
]
