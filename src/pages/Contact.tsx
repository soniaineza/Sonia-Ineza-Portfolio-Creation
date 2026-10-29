import { profile } from '../content/profile'
import { Eyebrow } from '../components/ui'
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
      <h1 className="mt-5 max-w-2xl font-display text-4xl font-normal leading-tight tracking-tight md:text-5xl">Let us talk about what you are building.</h1>
      <p className="mt-5 max-w-xl text-mute">
        I am open to opportunities, collaborations, freelance work and product ideas. Email is the fastest way to reach me.
      </p>
      <ul className="mt-12 divide-y divide-line border-y border-line">
        {rows.map((r) => (
          <li key={r.label}>
            <a
              href={r.href}
              className="flex flex-wrap items-baseline justify-between gap-2 py-6 transition-colors hover:text-clay"
              {...(r.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-mute">{r.label}</span>
              <span className="font-display text-2xl font-normal md:text-3xl">{r.value}</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-mute">Based in {profile.location}.</p>
    </div>
  )
}
