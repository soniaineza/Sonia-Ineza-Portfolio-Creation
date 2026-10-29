import { Link } from 'react-router-dom'
import { skills } from '../content/profile'
import { Eyebrow } from '../components/ui'
import { useMeta } from '../components/useMeta'

export function About() {
  useMeta('/about')
  return (
    <div className="mx-auto max-w-page px-6 pt-16 md:pt-24">
      <Eyebrow>About</Eyebrow>
      <div className="mt-5 grid gap-12 md:grid-cols-12">
      <div className="md:col-span-7">
      <h1 className="max-w-xl font-display text-4xl font-normal leading-tight tracking-tight md:text-5xl">I like turning an idea into something that runs.</h1>

      <div className="mt-10 max-w-xl space-y-5 leading-relaxed">
        <p>
          I am a software engineering student at the Adventist University of Central Africa in Kigali. Most of what I know I learned by building: marketplaces, dashboards, internal tools for people who are not technical, and a desktop client for an AI coding agent.
        </p>
        <p>
          I care about the whole path from the first conversation about a problem to a deployed system, including the unglamorous parts like translations, stock levels and what happens when a payment fails. My projects are in English, Kinyarwanda, French and sometimes Kiswahili because the people using them are.
        </p>
        <p>
          I want to work on products that solve practical problems for real users, with a team that ships.
        </p>
      </div>
      </div>
      <div className="md:col-span-4 md:col-start-9">
        <img src="/sonia.jpg" alt="Portrait of Sonia Ineza" width={1254} height={1254} loading="lazy" className="aspect-square w-full max-w-sm object-cover md:max-w-none" />
      </div>
      </div>

      <h2 className="mt-24 font-display text-3xl font-normal">What I use, and where</h2>
      <p className="mt-2 max-w-xl text-mute">Skills are grouped by use. Where a project shows the skill, it is named.</p>
      <div className="mt-8 grid gap-x-12 gap-y-10 md:grid-cols-2">
        {skills.map((g) => (
          <section key={g.area}>
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-mute">{g.area}</h3>
            <ul className="mt-3 divide-y divide-line border-y border-line">
              {g.items.map((i) => (
                <li key={i.name} className="py-3">
                  <span className="font-medium">{i.name}</span>
                  {i.level && <span className="ml-2 font-mono text-xs text-mute">{i.level}</span>}
                  {i.usedIn && <span className="block text-sm text-mute">Used in {i.usedIn}</span>}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <p className="mt-10"><Link to="/work" className="text-clay underline-offset-4 hover:underline">See the projects behind this list</Link></p>
    </div>
  )
}
