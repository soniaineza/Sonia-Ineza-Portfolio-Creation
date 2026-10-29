import { useEffect } from 'react'
import { metaFor } from '../content/seo'

function setContent(selector: string, value: string) {
  document.head.querySelector(selector)?.setAttribute('content', value)
}

/**
 * Keeps the head in step with the current route during client-side navigation.
 * The first load already carries the right tags (prerendered at build time); this covers later navigation.
 * The origin is read from the prerendered canonical tag so previews never point at the wrong domain.
 */
export function useMeta(path: string) {
  useEffect(() => {
    const m = metaFor(path)
    document.title = m.title
    setContent('meta[name="description"]', m.description)
    setContent('meta[property="og:title"]', m.title)
    setContent('meta[property="og:description"]', m.description)
    setContent('meta[name="twitter:title"]', m.title)
    setContent('meta[name="twitter:description"]', m.description)
    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (canonical) {
      try {
        const url = new URL(path, canonical.href).href
        canonical.href = url
        setContent('meta[property="og:url"]', url)
      } catch {
        /* keep the prerendered value */
      }
    }
  }, [path])
}
