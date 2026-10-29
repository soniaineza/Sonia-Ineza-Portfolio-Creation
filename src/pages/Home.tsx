import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { featuredProjects, getProject } from '../content/projects'
import { profile, roles } from '../content/profile'
import { Eyebrow, Reveal, SectionLabel, StatusBadge } from '../components/ui'
import { ProjectCard } from '../components/ProjectCard'
import { useMeta } from '../components/useMeta'

const delay = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties

// Projects in progress that do not yet have screenshots; shown as quiet list rows.
const inProgress = ['orion', 'argus-1', 'inkingi-rescue', 'kimu-transport']
  .map((slug) => getProject(slug))
  .flatMap((p) => p ?? [])

export function Home() {
  useMeta('/')

  return (
    <>
      <section className="mx-auto grid max-w-page items-center gap-14 px-6 pb-24 pt-14 md:grid-cols-12 md:gap-x-10 md:pb-32 md:pt-24">
        <div className="md:col-span-7">
          <div className="rise flex items-center gap-3" style={delay(0)}>
            <span className="ping relative h-1.5 w-1.5 rounded-full bg-clay" aria-hidden />
            <Eyebrow>Software engineer · Kigali</Eyebrow>
          </div>
          <h1 className="mt-6 font-display text-[2rem] font-normal leading-[1.1] tracking-tight sm:text-[2.5rem] md:text-[3.25rem]">
            <span className="line"><span style={delay(120)}>I build software</span></span>
            <span className="line"><span style={delay(220)}>products, from first</span></span>
            <span className="line"><span style={delay(320)}>idea to working system.</span></span>
          </h1>
          <p className="rise mt-6 max-w-md leading-relaxed text-mute" style={delay(500)}>
            {profile.intro}
          </p>
          <div className="rise mt-10 flex items-center gap-8 text-sm" style={delay(640)}>
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 bg-ink px-6 py-3 text-paper transition duration-200 hover:bg-clay active:scale-[0.97]"
            >
              Explore my work
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-1.5 text-mute transition-colors hover:text-clay active:opacity-70"
            >
              Contact me
              <ArrowRight size={14} className="-translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100" aria-hidden />
            </Link>
          </div>
        </div>

        <figure className="rise md:col-span-4 md:col-start-9" style={delay(300)}>
          <div className="group relative">
            {/* Soft backing block and an offset hairline that drifts a few pixels on hover. */}
            <div aria-hidden className="absolute -left-5 -top-5 h-2/3 w-2/3 bg-card" />
            <div
              aria-hidden
              className="absolute -bottom-3 -right-3 h-full w-full border border-clay/50 transition-transform duration-500 ease-out group-hover:translate-x-1.5 group-hover:translate-y-1.5"
            />
            <div className="relative overflow-hidden bg-card shadow-[0_20px_40px_-30px_rgba(22,20,15,0.5)] transition-shadow duration-500 group-hover:shadow-[0_28px_50px_-28px_rgba(22,20,15,0.55)]">
              <img
                src="/sonia.jpg"
                alt="Portrait of Sonia Ineza"
                width={1254}
                height={1254}
                fetchPriority="high"
                className="aspect-[5/4] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] md:aspect-[4/5]"
                style={{ objectPosition: '45% 15%' }}
              />
            </div>
          </div>
          <figcaption className="mt-8 flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-mute">
            <span className="h-px w-6 bg-clay" aria-hidden />
            Building products in Kigali
          </figcaption>
        </figure>
      </section>

      <section className="mx-auto max-w-page px-6" aria-label="Selected work">
        <SectionLabel num="01" title="Selected work" to="/work" action="All work" />
        <Reveal delay={80}>
          <p className="mt-8 max-w-xl font-display text-2xl leading-snug md:text-[1.75rem]">
            Products across web, mobile and developer tooling, from client systems in Rwanda to an AI coding agent.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.id} delay={i === 0 ? 0 : (i - 1) * 90} className={i === 0 ? 'md:col-span-2' : ''}>
              <ProjectCard project={p} index={i} wide={i === 0} />
            </Reveal>
          ))}
        </div>

        {inProgress.length > 0 && (
          <Reveal className="mt-16">
            <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-mute">Also in progress</h3>
            <ul className="mt-4 border-t border-line">
              {inProgress.map((p) => (
                <li key={p.id} className="border-b border-line">
                  <Link
                    to={`/work/${p.slug}`}
                    className="group grid items-baseline gap-2 py-5 transition-colors duration-300 hover:bg-card focus-visible:bg-card md:grid-cols-12 md:gap-x-8 md:px-3"
                  >
                    <span className="font-display text-xl transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1 md:col-span-3">
                      {p.title}
                    </span>
                    <span className="text-sm text-mute md:col-span-6">{p.category}</span>
                    <span className="flex items-center justify-between gap-4 md:col-span-3 md:justify-end">
                      <StatusBadge status={p.status} />
                      <ArrowRight size={15} className="text-clay transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1" aria-hidden />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </section>

      <section className="mx-auto mt-32 max-w-page px-6" aria-label="Experience">
        <SectionLabel num="02" title="Experience" to="/experience" action="Full experience" />
        <ul className="mt-6 border-t border-line">
          {roles
            .filter((r) => r.visibility === 'public')
            .map((r, i) => (
              <li key={r.org} className="border-b border-line">
                <Reveal delay={i * 60}>
                  <div className="group grid items-baseline gap-1 py-5 transition-colors duration-300 hover:bg-card md:grid-cols-12 md:gap-x-8 md:px-3">
                    <span className="font-display text-xl transition-transform duration-300 group-hover:translate-x-1 md:col-span-5">{r.org}</span>
                    <span className="text-sm text-mute md:col-span-4">{r.focus}</span>
                    <span className="font-mono text-xs text-mute md:col-span-3 md:text-right">{r.dates ?? r.kind}</span>
                  </div>
                </Reveal>
              </li>
            ))}
        </ul>
      </section>

      <section className="mx-auto mt-32 max-w-page px-6" aria-label="Contact">
        <SectionLabel num="03" title="Contact" />
        <Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-12">
            <p className="max-w-lg font-display text-2xl leading-snug md:col-span-8 md:text-3xl">
              Open to opportunities, collaborations and freelance work.
            </p>
            <p className="md:col-span-4 md:text-right">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 text-clay underline-offset-4 hover:underline"
              >
                {profile.email}
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </a>
            </p>
          </div>
        </Reveal>
      </section>
    </>
  )
}
