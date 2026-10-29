import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { publicProjects } from '../content/projects'
import { Eyebrow, Stack, StatusBadge } from '../components/ui'
import { useMeta } from '../components/useMeta'
import type { ProjectKind } from '../content/types'

const kinds: ('All' | ProjectKind)[] = ['All', 'Client project', 'Personal build', 'Collaboration', 'Coursework']

export function Work() {
  useMeta('/work')
  const [kind, setKind] = useState<(typeof kinds)[number]>('All')
  const list = useMemo(() => publicProjects.filter((p) => kind === 'All' || p.kind === kind), [kind])
  const present = kinds.filter((k) => k === 'All' || publicProjects.some((p) => p.kind === k))

  return (
    <div className="mx-auto max-w-page px-6 pt-16 md:pt-24">
      <Eyebrow>Work</Eyebrow>
      <h1 className="mt-5 max-w-xl font-display text-4xl font-normal leading-tight tracking-tight md:text-5xl">
        Projects, with their real status.
      </h1>

      <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-sm" role="group" aria-label="Filter projects by type">
        {present.map((k) => (
          <button
            key={k}
            onClick={() => setKind(k)}
            aria-pressed={kind === k}
            className={`underline-offset-8 transition-colors hover:text-clay ${kind === k ? 'text-ink underline decoration-clay' : 'text-mute'}`}
          >
            {k}
          </button>
        ))}
      </div>

      <ul className="mt-6 border-t border-line">
        {list.map((p) => (
          <li key={p.id} className="border-b border-line">
            <Link
              to={`/work/${p.slug}`}
              className="grid gap-3 py-7 transition-colors hover:text-clay md:grid-cols-12 md:items-baseline md:gap-x-10"
            >
              <div className="md:col-span-4">
                <h2 className="font-display text-2xl font-normal">{p.title}</h2>
                <p className="mt-1 font-mono text-xs text-mute">{p.category}</p>
              </div>
              <div className="md:col-span-5">
                <p className="text-mute">{p.tagline}</p>
                <div className="mt-3"><Stack items={p.stack.slice(0, 4)} /></div>
              </div>
              <div className="md:col-span-3 md:text-right"><StatusBadge status={p.status} /></div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
