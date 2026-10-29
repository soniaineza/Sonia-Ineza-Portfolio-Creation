import { education, roles } from '../content/profile'
import { Eyebrow } from '../components/ui'
import { useMeta } from '../components/useMeta'

export function Experience() {
  useMeta('/experience')
  const visible = roles.filter((r) => r.visibility === 'public')
  return (
    <div className="mx-auto max-w-page px-6 pt-16 md:pt-24">
      <Eyebrow>Experience</Eyebrow>
      <h1 className="mt-5 font-display text-4xl font-normal tracking-tight md:text-5xl">Roles and education</h1>

      <ol className="mt-12 border-l border-line">
        {visible.map((r) => (
          <li key={r.org} className="relative pb-10 pl-8">
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-ink" aria-hidden />
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-mute">{r.kind}{r.dates ? ` · ${r.dates}` : ''}</p>
            <h2 className="mt-1 font-display text-2xl font-normal">{r.org}</h2>
            <p className="text-mute">{r.focus}</p>
            {r.summary && <p className="mt-2 max-w-xl">{r.summary}</p>}
          </li>
        ))}
      </ol>

      <h2 className="mt-16 font-display text-3xl font-normal">Education</h2>
      <ul className="mt-6 divide-y divide-line border-y border-line">
        {education.map((e) => (
          <li key={e.school} className="flex flex-wrap items-baseline justify-between gap-2 py-5">
            <div>
              <p className="font-display text-xl font-normal">{e.school}</p>
              <p className="text-mute">{e.detail}</p>
            </div>
            {e.current && <span className="font-mono text-xs text-clay">Current</span>}
          </li>
        ))}
      </ul>
    </div>
  )
}
