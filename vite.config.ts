import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { allRoutes, DEFAULT_SITE_URL, HOME_TITLE } from './src/content/seo'

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

/**
 * After the build, write one HTML file per route with its own title, description, canonical
 * and Open Graph tags, plus sitemap.xml and robots.txt. Static hosts serve these files directly,
 * so link previews and crawlers see route-specific metadata without running JavaScript.
 */
function seoPrerender(): Plugin {
  const site = (process.env.SITE_URL || process.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, '')
  let outDir = 'dist'
  return {
    name: 'seo-prerender',
    apply: 'build',
    configResolved(c) {
      outDir = c.build.outDir
    },
    closeBundle() {
      const base = readFileSync(join(outDir, 'index.html'), 'utf8')
      const stripped = base
        .replace(/<title>[\s\S]*?<\/title>\s*/i, '')
        .replace(/<meta\s+(name="description"|property="og:(title|description|url|image|image:alt|site_name)"|name="twitter:[a-z:]+")[^>]*>\s*/gi, '')
      const render = (title: string, description: string, path: string) => {
        const url = site + (path === '/' ? '/' : path)
        const image = `${site}/og.png`
        const tags = [
          `<title>${esc(title)}</title>`,
          `<meta name="description" content="${esc(description)}" />`,
          `<link rel="canonical" href="${esc(url)}" />`,
          `<meta property="og:type" content="${path.startsWith('/work/') ? 'article' : 'website'}" />`,
          `<meta property="og:site_name" content="Sonia Ineza" />`,
          `<meta property="og:title" content="${esc(title)}" />`,
          `<meta property="og:description" content="${esc(description)}" />`,
          `<meta property="og:url" content="${esc(url)}" />`,
          `<meta property="og:image" content="${esc(image)}" />`,
          `<meta property="og:image:width" content="1200" />`,
          `<meta property="og:image:height" content="630" />`,
          `<meta property="og:image:alt" content="Sonia Ineza, software engineer and product builder" />`,
          `<meta name="twitter:card" content="summary_large_image" />`,
          `<meta name="twitter:title" content="${esc(title)}" />`,
          `<meta name="twitter:description" content="${esc(description)}" />`,
          `<meta name="twitter:image" content="${esc(image)}" />`,
        ]
        return stripped.replace('</head>', `    ${tags.join('\n    ')}\n  </head>`)
      }
      for (const r of allRoutes) {
        const html = render(r.title, r.description, r.path)
        if (r.path === '/') {
          writeFileSync(join(outDir, 'index.html'), html)
        } else {
          const dir = join(outDir, ...r.path.split('/').filter(Boolean))
          mkdirSync(dir, { recursive: true })
          writeFileSync(join(dir, 'index.html'), html)
        }
      }
      const urls = allRoutes.map((r) => `  <url><loc>${site}${r.path === '/' ? '/' : r.path}</loc></url>`).join('\n')
      writeFileSync(
        join(outDir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      )
      writeFileSync(join(outDir, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap.xml\n`)
      console.log(`seo-prerender: ${allRoutes.length} routes, canonical origin ${site} (${HOME_TITLE})`)
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), seoPrerender()],
})
