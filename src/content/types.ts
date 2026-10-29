export type ProjectStatus =
  | 'live'
  | 'working-prototype'
  | 'active-development'
  | 'coursework'

export type ProjectKind = 'Personal build' | 'Client project' | 'Collaboration' | 'Coursework'

export interface ProjectImage {
  src: string
  alt: string
  caption?: string
  /** CSS object-position for cropped previews, e.g. "left top" */
  position?: string
}

export interface Project {
  id: string
  slug: string
  title: string
  tagline: string
  category: string
  kind: ProjectKind
  status: ProjectStatus
  /** Plain-language sentence about what state it is really in. */
  statusNote: string
  featured: boolean
  /** 'draft' projects are never rendered or routed. */
  visibility: 'public' | 'draft'
  role: string
  contribution: string[]
  problem: string
  users?: string
  solution: string[]
  architecture?: string[]
  decisions?: { title: string; body: string }[]
  /** Honest limits and what is not built yet. */
  limitations?: string[]
  stack: string[]
  images?: ProjectImage[]
  liveUrl?: string
  repoUrl?: string
  related?: string[]
}

export interface Role {
  org: string
  focus: string
  kind: 'Employment' | 'Internship' | 'Freelance'
  summary?: string
  dates?: string
  visibility: 'public' | 'draft'
}

export interface SkillGroup {
  area: string
  items: { name: string; usedIn?: string }[]
}
