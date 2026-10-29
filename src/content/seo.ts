import { publicProjects } from './projects'

/** Used when SITE_URL is not provided at build time: the portfolio's current Vercel production domain. */
export const DEFAULT_SITE_URL = 'https://my-portifolio-chi-eight.vercel.app'

export const SITE_NAME = 'Sonia Ineza'
export const HOME_TITLE = 'Sonia Ineza · Software engineer and product builder'

export interface RouteMeta {
  path: string
  title: string
  description: string
}

const clip = (text: string, max = 158) => (text.length <= max ? text : text.slice(0, max - 1).replace(/\s+\S*$/, '') + '…')

/** Single source of truth for per-route metadata, used by the pages and by the build-time prerender. */
export const staticRoutes: RouteMeta[] = [
  {
    path: '/',
    title: HOME_TITLE,
    description:
      'Sonia Ineza is a software engineering student at AUCA in Kigali, building web, mobile and AI-enabled products.',
  },
  {
    path: '/work',
    title: `Work · ${SITE_NAME}`,
    description:
      'Projects by Sonia Ineza: marketplaces, developer tools, dashboards and client systems, with an honest status for each.',
  },
  {
    path: '/about',
    title: `About · ${SITE_NAME}`,
    description:
      'About Sonia Ineza: a software engineering student at AUCA building products across web, mobile and AI tooling.',
  },
  {
    path: '/experience',
    title: `Experience · ${SITE_NAME}`,
    description:
      'Roles and education: full-stack and frontend development, an internship, freelance work and software engineering at AUCA.',
  },
  {
    path: '/contact',
    title: `Contact · ${SITE_NAME}`,
    description: 'Contact Sonia Ineza about opportunities, collaborations, freelance work or a product idea.',
  },
]

export const projectRoutes: RouteMeta[] = publicProjects.map((p) => ({
  path: `/work/${p.slug}`,
  title: `${p.title} · ${SITE_NAME}`,
  description: clip(p.tagline),
}))

export const allRoutes: RouteMeta[] = [...staticRoutes, ...projectRoutes]

export const notFoundMeta: RouteMeta = {
  path: '/404',
  title: `Page not found · ${SITE_NAME}`,
  description: 'This page does not exist.',
}

export const metaFor = (path: string): RouteMeta => allRoutes.find((r) => r.path === path) ?? notFoundMeta
