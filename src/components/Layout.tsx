import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { profile } from '../content/profile'

const nav = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]

export function Layout() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
    window.scrollTo(0, 0)
  }, [pathname])

  const link = ({ isActive }: { isActive: boolean }) =>
    `text-[0.8125rem] transition-colors hover:text-clay ${isActive ? 'text-clay' : 'text-ink'}`

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper">
        Skip to content
      </a>
      <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-page items-center justify-between px-6">
          <Link to="/" className="text-[0.9375rem] font-medium tracking-tight">
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
        {open && (
          <nav id="mobile-nav" aria-label="Mobile" className="absolute inset-x-0 top-full flex flex-col border-b border-line bg-paper px-6 pb-6 pt-2 md:hidden">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) => `border-b border-line py-4 font-display text-2xl ${isActive ? 'text-clay' : ''}`}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>
      <main id="main">
        <Outlet />
      </main>
      <footer className="mt-32 border-t border-line">
        <div className="mx-auto flex max-w-page flex-col gap-3 px-6 py-8 text-[0.8125rem] text-mute md:flex-row md:justify-between">
          <p>Sonia Ineza · {profile.location}</p>
          <p className="flex gap-6">
            <a className="hover:text-clay" href={`mailto:${profile.email}`}>Email</a>
            <a className="hover:text-clay" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="hover:text-clay" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
        </div>
      </footer>
    </>
  )
}
