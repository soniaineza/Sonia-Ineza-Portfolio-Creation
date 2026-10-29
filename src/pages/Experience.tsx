import { education, roles } from '../content/profile'
import { Eyebrow, Reveal } from '../components/ui'
import { useMeta } from '../components/useMeta'

export function Experience() {
  useMeta('/experience')
  const visible = roles.filter((r) => r.visibility === 'public')
  return (
    <div className="mx-auto max-w-page px-6 pt-16 md:pt-24">
      <Eyebrow>Experience</Eyebrow>
      <h1 className="mt-5 font-display text-4xl font-normal tracking-tight md:text-5xl">Roles and education</h1>

      {/* Timeline: the kind and duration sit in a fixed left column, the rail and dots line up with it. */}
      <ol className="mt-14 border-t border-line">
        {visible.map((r, i) => (
          <li key={r.org} className="border-b border-line">
            <Reveal delay={Math.min(i, 4) * 60}>
              <div className="group relative grid gap-2 py-8 transition-colors duration-300 hover:bg-card md:grid-cols-12 md:gap-x-10 md:px-4">
                <span
                  aria-hidden
                  className="absolute left-0 top-0 hidden h-full w-px origin-top scale-y-0 bg-clay transition-transform duration-500 group-hover:scale-y-100 md:block"
                />
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-mute md:col-span-3 md:pt-2">
                  {r.kind}
                  {r.dates && <span className="block normal-case tracking-normal text-ink">{r.dates}</span>}
                </p>
                <div className="md:col-span-9">
                  <h2 className="font-display text-2xl font-normal transition-transform duration-300 group-hover:translate-x-1">{r.org}</h2>
                  <p className="text-mute">{r.focus}</p>
                  {r.summary && <p className="mt-3 max-w-xl leading-relaxed">{r.summary}</p>}
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal className="mt-20">
        <h2 className="font-display text-3xl font-normal">Education</h2>
        <ul className="mt-6 border-t border-line">
          {education.map((e) => (
            <li key={e.school} className="group grid gap-2 border-b border-line py-6 transition-colors duration-300 hover:bg-card md:grid-cols-12 md:gap-x-10 md:px-4">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-mute md:col-span-3 md:pt-1">
                {e.current ? <span className="text-clay">Current</span> : 'Earlier'}
              </p>
              <div className="md:col-span-9">
                <p className="font-display text-xl font-normal transition-transform duration-300 group-hover:translate-x-1">{e.school}</p>
                <p className="text-mute">{e.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  )
}
