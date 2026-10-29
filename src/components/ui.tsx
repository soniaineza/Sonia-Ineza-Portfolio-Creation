import React, { useEffect, useRef } from 'react'
import type { ProjectStatus } from '../content/types'

export function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      el.classList.add('in')
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add('in')
          io.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  )
}

/** Small mono label. Neutral colour: the accent is reserved for links and "live". */
export const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-mute">{children}</p>
)

const statusLabel: Record<ProjectStatus, string> = {
  live: 'Live',
  'working-prototype': 'Working prototype',
  'active-development': 'In development',
  coursework: 'Coursework',
}

/** Filled accent dot means the product is live; everything else is a hollow ring. */
export const StatusBadge = ({ status }: { status: ProjectStatus }) => (
  <span className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-mute">
    <span
      className={`h-1.5 w-1.5 rounded-full ${status === 'live' ? 'bg-clay' : 'border border-mute'}`}
      aria-hidden
    />
    {statusLabel[status]}
  </span>
)

export const Stack = ({ items }: { items: string[] }) => (
  <p className="font-mono text-xs leading-relaxed text-mute">{items.join(' · ')}</p>
)

/** A screenshot presented plainly: hairline border, fixed ratio so nothing shifts on load. */
export function Frame({
  src,
  alt,
  position = 'center top',
  className = '',
  ratio = 'aspect-[16/10]',
  eager = false,
}: {
  src: string
  alt: string
  position?: string
  className?: string
  ratio?: string
  eager?: boolean
}) {
  return (
    <figure className={`overflow-hidden border border-line bg-card ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.015] ${ratio}`}
        style={{ objectPosition: position }}
      />
    </figure>
  )
}
