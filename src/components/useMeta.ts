import { useEffect } from 'react'

const BASE = 'Sonia Ineza'

function setTag(selector: string, value: string) {
  document.head.querySelector(selector)?.setAttribute('content', value)
}

/** Per-route title, description and share metadata for the client-rendered site. */
export function useMeta(title: string | null, description: string) {
  useEffect(() => {
    const full = title ? `${title} · ${BASE}` : `${BASE} · Software engineer and product builder`
    document.title = full
    setTag('meta[name="description"]', description)
    setTag('meta[property="og:title"]', full)
    setTag('meta[property="og:description"]', description)
    setTag('meta[property="og:url"]', window.location.href)
  }, [title, description])
}
