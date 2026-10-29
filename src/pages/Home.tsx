import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { featuredProjects } from '../content/projects'
import { profile } from '../content/profile'
import { Eyebrow, Frame, Reveal, Stack, StatusBadge } from '../components/ui'
import { useMeta } from '../components/useMeta'

// Subtle variation on one 12-column grid: [image columns, text columns, image first?]
const layouts = [
  { img: 'md:col-span-12', txt: 'md:col-span-12', wide: true },
  { img: 'md:col-span-8 md:col-start-5', txt: 'md:col-span-4 md:col-start-1 md:row-start-1', wide: false },
  { img: 'md:col-span-7', txt: 'md:col-span-4 md:col-start-9', wide: false },
]

export function Home() {
  useMeta(null, 'Sonia Ineza is a software engineering student at AUCA in Kigali, building web, mobile and AI-enabled products.')

  return (
    <>
      <section className="mx-auto grid max-w-page items-center gap-12 px-6 pb-24 pt-16 md:grid-cols-12 md:pb-32 md:pt-28">
        <div className="md:col-span-7">
          <Eyebrow>Software engineer · Kigali</Eyebrow>
          <h1 className="mt-6 max-w-[16ch] font-display text-[2.5rem] font-normal leading-[1.08] tracking-tight md:text-[3.5rem]">
            I build software products, from first idea to working system.
          </h1>
          <p className="mt-6 max-w-md leading-relaxed text-mute">{profile.intro}</p>
          <div className="mt-10 flex items-center gap-8 text-sm">
            <Link to="/work" className="group inline-flex items-center gap-2 bg-ink px-6 py-3 text-paper transition-colors hover:bg-clay">
              Explore my work
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>
            <Link to="/contact" className="text-mute underline-offset-4 transition-colors hover:text-clay hover:underline">
              Contact me
            </Link>
          </div>
        </div>
        <div className="md:col-span-4 md:col-start-9">
          <img
            src="/sonia.jpg"
            alt="Portrait of Sonia Ineza"
            width={1254}
            height={1254}
            className="aspect-square w-full max-w-sm object-cover md:max-w-none"
          />
        </div>
      </section>

      <section className="mx-auto max-w-page px-6" aria-labelledby="work-heading">
        <div className="flex items-baseline justify-between border-t border-line pt-5">
          <h2 id="work-heading" className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-mute">
            Selected work
          </h2>
          <Link to="/work" className="text-[0.8125rem] hover:text-clay">All work</Link>
        </div>

        <div className="mt-14 space-y-28 md:space-y-36">
          {featuredProjects.map((p, i) => {
            const l = layouts[i % layouts.length]
            const img = p.images![0]
            return (
              <Reveal key={p.id}>
                <article className="grid items-end gap-8 md:grid-cols-12 md:gap-x-10">
                  <Link
                    to={`/work/${p.slug}`}
                    aria-label={`${p.title}: read the case study`}
                    className={`group block ${l.img}`}
                  >
                    <Frame
                      src={img.src}
                      alt={img.alt}
                      position={img.position}
                      eager
                      ratio={p.slug === 'duhahe-rwanda-market' ? 'aspect-[9/8]' : l.wide ? 'aspect-[1200/630]' : 'aspect-[16/10]'}
                    />
                  </Link>
                  <div className={l.txt}>
                    <StatusBadge status={p.status} />
                    <h3 className="mt-3 font-display text-3xl font-normal tracking-tight">{p.title}</h3>
                    <p className="mt-3 max-w-md leading-relaxed text-mute">{p.tagline}</p>
                    <p className="mt-4 text-sm">
                      <span className="text-mute">Role · </span>
                      {p.role}
                    </p>
                    <div className="mt-4"><Stack items={p.stack.slice(0, 4)} /></div>
                    <div className="mt-6 flex items-center gap-6 text-sm">
                      <Link to={`/work/${p.slug}`} className="inline-flex items-center gap-1.5 text-clay hover:underline underline-offset-4">
                        Case study <ArrowRight size={14} aria-hidden />
                      </Link>
                      {p.liveUrl && (
                        <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-mute hover:text-clay">
                          Live <ArrowUpRight size={14} aria-hidden />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="mx-auto mt-36 max-w-page px-6">
        <div className="grid gap-6 border-t border-line pt-10 md:grid-cols-12">
          <p className="max-w-lg font-display text-2xl leading-snug md:col-span-8 md:text-3xl">
            Open to opportunities, collaborations and freelance work.
          </p>
          <p className="md:col-span-4 md:text-right">
            <a href={`mailto:${profile.email}`} className="text-clay underline-offset-4 hover:underline">
              {profile.email}
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
