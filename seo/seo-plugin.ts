import type { Plugin } from "vite"

import { career } from "../src/data/career.ts"
import { profile } from "../src/data/profile.ts"
import { projects } from "../src/data/projects.ts"
import { site } from "../src/data/site.ts"

const escapeHtml = (value: string) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;")

const abs = (path: string) => new URL(path, site.url).toString()
const personId = `${site.url}/#person`
const websiteId = `${site.url}/#website`
const [intro, mission] = profile.summary
const sameAs = profile.socials.map((social) => social.href)

/** Dados estruturados (schema.org) para buscadores e IAs: pessoa, site, página de perfil e projetos. */
function jsonLd() {
  const startYear = (period: string) => period.match(/\d{4}/)?.[0]

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: site.name,
        alternateName: "Rafael Rizzo Breschi",
        url: site.url,
        image: abs(site.ogImage),
        description: site.description,
        jobTitle: "Desenvolvedor Full Stack",
        worksFor: { "@type": "Organization", name: site.employer },
        knowsAbout: site.technologies,
        knowsLanguage: "pt-BR",
        sameAs,
        hasOccupation: career.map((job) => ({
          "@type": "Role",
          roleName: job.title,
          startDate: startYear(job.period),
          description: job.description,
          memberOf: { "@type": "Organization", name: job.company },
        })),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: site.url,
        name: site.name,
        description: site.description,
        inLanguage: site.locale,
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${site.url}/#profile`,
        url: site.url,
        name: site.title,
        description: site.description,
        inLanguage: site.locale,
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
        primaryImageOfPage: { "@type": "ImageObject", url: abs(site.ogImage) },
        dateModified: new Date().toISOString(),
      },
      {
        "@type": "ItemList",
        "@id": `${site.url}/#projects`,
        name: "Projetos de Rafael Rizzo",
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": project.repoLink ? "SoftwareSourceCode" : "CreativeWork",
            name: project.title,
            description: project.description,
            url: project.projectLink,
            ...(project.repoLink && { codeRepository: project.repoLink }),
            ...(project.image && { image: abs(project.image) }),
            author: { "@id": personId },
          },
        })),
      },
    ],
  }
}

function headTags() {
  const image = abs(site.ogImage)
  const [width, height] = [1200, 630]
  const meta = (attrs: Record<string, string>) =>
    `<meta ${Object.entries(attrs)
      .map(([key, value]) => `${key}="${escapeHtml(value)}"`)
      .join(" ")} />`

  return [
    `<title>${escapeHtml(site.title)}</title>`,
    meta({ name: "description", content: site.description }),
    meta({ name: "keywords", content: site.keywords.join(", ") }),
    meta({ name: "author", content: site.name }),
    meta({ name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" }),
    meta({ name: "color-scheme", content: "dark light" }),
    `<meta name="theme-color" content="#09090b" media="(prefers-color-scheme: dark)" />`,
    `<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />`,
    `<link rel="canonical" href="${site.url}/" />`,
    `<link rel="alternate" hreflang="${site.locale}" href="${site.url}/" />`,
    `<link rel="alternate" hreflang="x-default" href="${site.url}/" />`,
    `<link rel="alternate" type="text/plain" href="/llms.txt" title="llms.txt" />`,
    `<link rel="sitemap" type="application/xml" href="/sitemap.xml" />`,
    `<link rel="icon" href="/favicon/favicon.ico" sizes="any" />`,
    `<link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />`,
    meta({ property: "og:type", content: "profile" }),
    meta({ property: "og:locale", content: site.locale.replace("-", "_") }),
    meta({ property: "og:url", content: `${site.url}/` }),
    meta({ property: "og:site_name", content: `Portfólio de ${site.name}` }),
    meta({ property: "og:title", content: site.shortTitle }),
    meta({ property: "og:description", content: site.description }),
    meta({ property: "og:image", content: image }),
    meta({ property: "og:image:type", content: "image/png" }),
    meta({ property: "og:image:width", content: String(width) }),
    meta({ property: "og:image:height", content: String(height) }),
    meta({ property: "og:image:alt", content: site.ogImageAlt }),
    meta({ property: "profile:first_name", content: "Rafael" }),
    meta({ property: "profile:last_name", content: "Rizzo" }),
    meta({ name: "twitter:card", content: "summary_large_image" }),
    meta({ name: "twitter:title", content: site.shortTitle }),
    meta({ name: "twitter:description", content: site.description }),
    meta({ name: "twitter:image", content: image }),
    meta({ name: "twitter:image:alt", content: site.ogImageAlt }),
    `<script type="application/ld+json">${JSON.stringify(jsonLd()).replaceAll("<", "\\u003c")}</script>`,
    // Conteúdo pré-renderizado fica invisível enquanto o React não monta; sem JS, aparece.
    `<style>[data-prerender]{visibility:hidden}</style>`,
    `<noscript><style>[data-prerender]{visibility:visible}</style></noscript>`,
  ].join("\n    ")
}

/**
 * HTML semântico com todo o conteúdo do site. O app é uma SPA (abas), então sem isso o HTML bruto
 * chega vazio para crawlers e LLMs que não executam JavaScript. O React substitui o conteúdo ao montar.
 */
function prerender() {
  const link = (href: string, label: string) => `<a href="${escapeHtml(href)}">${escapeHtml(label)}</a>`

  const projectItems = projects
    .map(
      (project) => `
        <li>
          <h3>${link(project.projectLink, project.title)}</h3>
          <p>${escapeHtml(project.description)}</p>
          <p>${project.repoLink ? `Código: ${link(project.repoLink, project.repoLink)}` : "Repositório privado."}</p>
        </li>`,
    )
    .join("")

  const careerItems = career
    .map(
      (job) => `
        <li>
          <h3>${escapeHtml(job.title)} · ${escapeHtml(job.company)}</h3>
          <p><time>${escapeHtml(job.period)}</time></p>
          <p>${escapeHtml(job.description)}</p>
        </li>`,
    )
    .join("")

  return `<div data-prerender>
      <header>
        <h1>${site.name}</h1>
        <p>Desenvolvedor Full Stack (full-stack developer)</p>
      </header>
      <main>
        <section>
          <h2>Sobre</h2>
          <p>${escapeHtml(intro)}</p>
          <p>${escapeHtml(mission)}</p>
          <p>Atuando desde ${profile.startedWorkingYear} e no mercado de tecnologia desde ${profile.marketYear}.</p>
        </section>
        <section>
          <h2>Tecnologias</h2>
          <ul>${site.technologies.map((tech) => `<li>${escapeHtml(tech)}</li>`).join("")}</ul>
        </section>
        <section>
          <h2>Projetos</h2>
          <ul>${projectItems}</ul>
        </section>
        <section>
          <h2>Carreira</h2>
          <ul>${careerItems}</ul>
        </section>
      </main>
      <footer>
        <h2>Contato</h2>
        <ul>${profile.socials.map((social) => `<li>${link(social.href, social.label)}</li>`).join("")}</ul>
      </footer>
    </div>`
}

/** llms.txt (llmstxt.org): resumo em markdown para LLMs; `full` inclui carreira e descrições completas. */
function llmsTxt(full: boolean) {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `${intro} ${mission}`,
    "",
    `Atuando desde ${profile.startedWorkingYear}, no mercado desde ${profile.marketYear}. Site: ${site.url}`,
    "",
    "## Tecnologias",
    "",
    site.technologies.join(", ") + ".",
    "",
    "## Projetos",
    "",
    ...projects.map(
      (project) =>
        `- [${project.title}](${project.projectLink}): ${project.description}${project.repoLink ? ` Código: ${project.repoLink}` : ""}`,
    ),
    "",
  ]

  if (full) {
    lines.push(
      "## Carreira",
      "",
      ...career.flatMap((job) => [`### ${job.title}, ${job.company} (${job.period})`, "", job.description, ""]),
    )
  }

  lines.push("## Contato e perfis", "", ...profile.socials.map((social) => `- [${social.label}](${social.href})`), "")
  if (!full) lines.push("## Optional", "", `- [Versão completa](${site.url}/llms-full.txt): carreira e detalhes`, "")

  return lines.join("\n")
}

function sitemap() {
  const today = new Date().toISOString().slice(0, 10)
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${site.url}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="${site.locale}" href="${site.url}/" />
  </url>
</urlset>
`
}

const generatedFiles = () => ({
  "llms.txt": { type: "text/plain; charset=utf-8", source: llmsTxt(false) },
  "llms-full.txt": { type: "text/plain; charset=utf-8", source: llmsTxt(true) },
  "sitemap.xml": { type: "application/xml; charset=utf-8", source: sitemap() },
})

export function seoPlugin(): Plugin {
  return {
    name: "seo",
    transformIndexHtml(html) {
      return html.replace("<!--seo:head-->", headTags()).replace("<!--seo:root-->", prerender())
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const name = req.url?.split("?")[0].slice(1) ?? ""
        const file = generatedFiles()[name as keyof ReturnType<typeof generatedFiles>]
        if (!file) return next()
        res.setHeader("Content-Type", file.type)
        res.end(file.source)
      })
    },
    generateBundle() {
      for (const [fileName, { source }] of Object.entries(generatedFiles())) {
        this.emitFile({ type: "asset", fileName, source })
      }
    },
  }
}
