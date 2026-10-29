import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { getProject } from '../content/projects'
import { Eyebrow, Frame, Stack, StatusBadge } from '../components/ui'
import { useMeta } from '../components/useMeta'
import { NotFound } from './NotFound'

const Block = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="grid gap-4 border-t border-line py-9 md:grid-cols-12 md:gap-10">
    <h2 className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-mute md:col-span-3">{title}</h2>
    <div className="max-w-2xl space-y-3 leading-relaxed md:col-span-9">{children}</div>
  </section>
)

const List = ({ items }: { items: string[] }) => (
  <ul className="space-y-2">
    {items.map((i) => (
      <li key={i} className="flex gap-3">
        <span className="mt-3 h-px w-3 shrink-0 bg-mute" aria-hidden />
        <span>{i}</span>
      </li>
    ))}
  </ul>
)

export function CaseStudy() {
  const { slug } = useParams()
  const p = slug ? getProject(slug) : undefined
  useMeta(p ? p.title : 'Not found', p ? p.tagline : 'This project could not be found.')
  if (!p) return <NotFound />

  const related = (p.related ?? []).map(getProject).filter(Boolean)

  return (
    <article className="mx-auto max-w-page px-6 pt-12">
      <Link to="/work" className="inline-flex items-center gap-2 text-sm text-mute hover:text-clay">
        <ArrowLeft size={15} aria-hidden /> All work
      </Link>
      <header className="mt-8">
        <Eyebrow>{p.category}</Eyebrow>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-normal leading-tight tracking-tight md:text-5xl">{p.title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mute">{p.tagline}</p>
        <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
          <StatusBadge status={p.status} />
          <span className="text-mute">{p.kind}</span>
          {p.liveUrl && (
            <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-clay underline-offset-4 hover:underline">
              Live site <ArrowUpRight size={15} aria-hidden />
            </a>
          )}
          {p.repoUrl && (
            <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-clay underline-offset-4 hover:underline">
              Source code <ArrowUpRight size={15} aria-hidden />
            </a>
          )}
        </div>
      </header>

      {p.images?.map((img) => (
        <figure key={img.src} className="mt-10">
          <Frame src={img.src} alt={img.alt} position={img.position} eager ratio={p.slug === 'duhahe-rwanda-market' ? 'aspect-[9/8]' : 'aspect-[16/9]'} className={p.slug === 'duhahe-rwanda-market' ? 'max-w-xl' : ''} />
          {img.caption && <figcaption className="mt-3 text-sm text-mute">{img.caption}</figcaption>}
        </figure>
      ))}

      <div className="mt-12">
        <Block title="Status"><p>{p.statusNote}</p></Block>
        <Block title="Problem"><p>{p.problem}</p>{p.users && <p className="text-mute">{p.users}</p>}</Block>
        <Block title="My role">
          <p className="font-medium">{p.role}</p>
          {p.contribution.length > 0 && <List items={p.contribution} />}
        </Block>
        <Block title="Solution"><List items={p.solution} /></Block>
        {p.architecture && <Block title="Architecture"><List items={p.architecture} /></Block>}
        {p.decisions && (
          <Block title="Decisions">
            {p.decisions.map((d) => (
              <div key={d.title}>
                <h3 className="font-display text-lg">{d.title}</h3>
                <p className="text-mute">{d.body}</p>
              </div>
            ))}
          </Block>
        )}
        {p.limitations && <Block title="Not built yet"><List items={p.limitations} /></Block>}
        {p.stack.length > 0 && (
          <Block title="Stack"><Stack items={p.stack} /></Block>
        )}
      </div>

      {related.length > 0 && (
        <section className="mt-6 border-t border-line pt-9">
          <h2 className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-mute">Related work</h2>
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
            {related.map((r) => (
              <li key={r!.id}><Link to={`/work/${r!.slug}`} className="font-display text-xl font-normal hover:text-clay">{r!.title}</Link></li>
            ))}
          </ul>
        </section>
      )}
    </article>
  )
}
