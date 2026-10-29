import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { profile } from '../content/profile'
import { External } from './ui'

const nav = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]

// A thin underline grows from the left on hover and focus, and stays on the current page.
const underline =
  "relative after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-clay after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100"

export function Layout() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const link = ({ isActive }: { isActive: boolean }) =>
    `${underline} text-[0.8125rem] transition-colors hover:text-clay ${isActive ? 'text-clay after:scale-x-100' : 'text-ink'}`

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper">
        Skip to content
      </a>
      <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-page items-center justify-between px-6">
          <Link to="/" className="group inline-flex items-center gap-2 text-[0.9375rem] font-medium tracking-tight">
            <span className="h-1.5 w-1.5 rounded-full bg-clay transition-transform duration-300 group-hover:scale-150" aria-hidden />
            Sonia Ineza
          </Link>
          <nav aria-label="Main" className="hidden gap-8 md:flex">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} className={link}>
                {n.label}
              </NavLink>
            ))}
          </nav>
          <button
            className="-mr-2 p-2 md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <div className="h-px bg-line" />
        {/* Stays mounted so it can fade and slide; invisible when closed so it is out of the tab order. */}
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className={`absolute inset-x-0 top-full flex flex-col border-b border-line bg-paper px-6 pb-6 pt-2 transition-[opacity,transform,visibility] duration-300 md:hidden ${
            open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
          }`}
        >
          {nav.map((n, i) => (
            <NavLink
              key={n.to}
              to={n.to}
              style={{ transitionDelay: open ? `${60 + i * 50}ms` : '0ms' }}
              className={({ isActive }) =>
                `border-b border-line py-4 font-display text-2xl transition-[opacity,transform,color] duration-300 ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                } ${isActive ? 'text-clay' : ''}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main id="main">
        {/* Keyed by route so each page eases in. Entrance only: nothing waits on an exit animation. */}
        <div key={pathname} className="page-in">
          <Outlet />
        </div>
      </main>
      <footer className="mt-32 border-t border-line">
        <div className="mx-auto flex max-w-page flex-col gap-3 px-6 py-8 text-[0.8125rem] text-mute md:flex-row md:justify-between">
          <p>Sonia Ineza · {profile.location}</p>
          <p className="flex gap-6">
            <a className="transition-colors hover:text-clay" href={`mailto:${profile.email}`}>Email</a>
            <a className="transition-colors hover:text-clay" href={profile.github} target="_blank" rel="noopener noreferrer">
              <External>GitHub</External>
            </a>
            {profile.linkedin && (
              <a className="transition-colors hover:text-clay" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                <External>LinkedIn</External>
              </a>
            )}
          </p>
        </div>
      </footer>
    </>
  )
}
