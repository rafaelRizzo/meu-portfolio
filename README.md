# Portfólio de Rafael Rizzo

Site: https://rafael-rizzo.com

Vite + React 19 + TypeScript, Tailwind v4, shadcn/ui, Motion e Magic UI. Dark mode por padrão, com troca animada de tema.

## Rodando

```bash
pnpm install
pnpm dev       # http://localhost:5173
pnpm build     # tsc + vite build (gera dist/)
pnpm preview   # serve o build
pnpm lint
```

## Onde editar

| O quê | Onde |
|---|---|
| Nome, resumo, redes sociais | `src/data/profile.ts` |
| Carreira | `src/data/career.ts` |
| Projetos (imagens em `public/projects/`) | `src/data/projects.ts` |
| Badges de tecnologia (com ícone) | `src/data/stack.tsx` |
| Título, descrição, keywords, tecnologias para SEO | `src/data/site.ts` |

## SEO e descoberta por IA

O `seo/seo-plugin.ts` roda no build e gera, a partir dos arquivos de `src/data/`:

- meta tags, Open Graph, Twitter Card e JSON-LD (schema.org) no `<head>`;
- o conteúdo completo da página em HTML (pré-renderizado), para crawlers que não executam JavaScript;
- `llms.txt`, `llms-full.txt` e `sitemap.xml`.

O `public/robots.txt` libera explicitamente os crawlers de IA. A imagem de compartilhamento é `public/og-image.png` (1200×630).

## Deploy

Vercel. O `packageManager` do `package.json` fixa a versão do pnpm, e o `vercel.json` define cache e cabeçalhos de segurança.
