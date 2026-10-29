import { ArrowRight } from 'lucide-react'
import { profile } from '../content/profile'
import { Eyebrow, External, Reveal } from '../components/ui'
import { useMeta } from '../components/useMeta'

export function Contact() {
  useMeta('/contact')
  const rows = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { label: 'GitHub', value: 'github.com/soniaineza', href: profile.github },
    ...(profile.linkedin ? [{ label: 'LinkedIn', value: 'LinkedIn profile', href: profile.linkedin }] : []),
  ]
  return (
    <div className="mx-auto max-w-page px-6 pt-16 md:pt-24">
      <Eyebrow>Contact</Eyebrow>
      <h1 className="mt-5 max-w-2xl font-display text-4xl font-normal leading-tight tracking-tight md:text-5xl">
        Let us talk about what you are building.
      </h1>
      <p className="mt-5 max-w-xl text-mute">
        I am open to opportunities, collaborations, freelance work and product ideas. Email is the fastest way to reach me.
      </p>
      <ul className="mt-12 border-t border-line">
        {rows.map((r, i) => {
          const external = r.href.startsWith('http')
          return (
            <li key={r.label} className="border-b border-line">
              <Reveal delay={i * 70}>
                <a
                  href={r.href}
                  className="group flex flex-wrap items-baseline justify-between gap-2 py-6 transition-colors duration-300 hover:bg-card hover:text-clay focus-visible:bg-card md:px-3"
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-mute">{r.label}</span>
                  <span className="inline-flex items-center gap-3 font-display text-2xl font-normal md:text-3xl">
                    {external ? <External>{r.value}</External> : r.value}
                    {!external && <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden />}
                  </span>
                </a>
              </Reveal>
            </li>
          )
        })}
      </ul>
      <p className="mt-6 text-sm text-mute">Based in {profile.location}.</p>
    </div>
  )
}
