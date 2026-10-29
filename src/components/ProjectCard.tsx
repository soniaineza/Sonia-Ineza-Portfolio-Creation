import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Project } from '../content/types'
import { Stack, StatusBadge } from './ui'

/** One card style for every featured project. The whole card is a single link, so keyboard focus mirrors hover. */
export function ProjectCard({ project: p, index, wide = false }: { project: Project; index: number; wide?: boolean }) {
  const img = p.images?.[0]
  return (
    <Link
      to={`/work/${p.slug}`}
      aria-label={`${p.title}: view project`}
      className={`group flex h-full border border-line bg-paper/60 transition duration-300 hover:-translate-y-1 hover:border-ink/40 hover:bg-card focus-visible:-translate-y-1 focus-visible:border-ink/40 focus-visible:bg-card ${
        wide ? 'flex-col md:flex-row' : 'flex-col'
      }`}
    >
      {img && (
        <div className={`overflow-hidden border-line bg-card ${wide ? 'border-b md:w-7/12 md:border-b-0 md:border-r' : 'border-b'}`}>
          <img
            src={img.src}
            alt={img.alt}
            width={1200}
            height={wide ? 630 : 750}
            loading="eager"
            decoding="async"
            className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] group-focus-visible:scale-[1.03] ${
              wide ? 'aspect-[1200/630] md:aspect-auto md:min-h-[22rem]' : 'aspect-[16/10]'
            }`}
            style={{ objectPosition: img.cardPosition ?? img.position }}
          />
        </div>
      )}
      <div className={`flex flex-1 flex-col p-6 md:p-8 ${wide ? 'md:w-5/12' : ''}`}>
        <div className="flex items-center justify-between">
          <span className="font-mono text-[0.7rem] tracking-[0.16em] text-mute">{String(index + 1).padStart(2, '0')}</span>
          <StatusBadge status={p.status} />
        </div>
        <h3 className="mt-5 font-display text-2xl font-normal tracking-tight md:text-3xl">{p.title}</h3>
        <p className="mt-3 leading-relaxed text-mute">{p.tagline}</p>
        <div className="mt-5">
          <Stack items={p.stack.slice(0, 4)} />
        </div>
        <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm text-clay">
          View project
          <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5" aria-hidden />
        </span>
      </div>
    </Link>
  )
}
