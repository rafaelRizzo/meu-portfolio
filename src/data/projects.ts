export type TerminalLine = { type: "cmd" | "out"; text: string }

export type Screenshot = {
  label: string
  /** Arquivo em `public/projects/`. */
  image: string
  size: readonly [width: number, height: number]
}

export type Project = {
  title: string
  description: string
  /** Texto exibido na barra do navegador. */
  url: string
  projectLink: string
  /** Sem `repoLink` o repositório é privado. */
  repoLink?: string
  /** Arquivo em `public/projects/`. */
  image?: string
  /** Dimensões reais da imagem (evita corte e layout shift). */
  size?: readonly [width: number, height: number]
  /** Rótulo da imagem principal, usado só quando há `more`. */
  imageLabel?: string
  /** Outras telas, alternáveis abaixo da imagem principal. */
  more?: readonly Screenshot[]
  /** Quando existe, substitui a imagem por um terminal animado. */
  terminal?: readonly TerminalLine[]
}

const img = (file: string) => `/projects/${file}`
const HD = [2048, 1200] as const
const HD16x9 = [1920, 1080] as const

export const projects: Project[] = [
  {
    title: "Dynamic Lite",
    description: "Dynamic Island para macOS que vive no notch e vira player do Spotify. Tauri, Rust e React.",
    url: "github.com/rafaelRizzo/dynamic-lite",
    image: img("dynamic-lite.webp"),
    size: [2352, 514],
    projectLink: "https://github.com/rafaelRizzo/dynamic-lite",
    repoLink: "https://github.com/rafaelRizzo/dynamic-lite",
  },
  {
    title: "Eco",
    description:
      "Controle de gastos pessoais: cartões e faturas, parcelas, assinaturas, lembretes e carteira de investimentos. Bun, Fastify e React.",
    url: "eco.rafael-rizzo.com",
    image: img("eco-painel.webp"),
    size: [1905, 1080],
    imageLabel: "Painel",
    more: [{ label: "Login", image: img("eco.webp"), size: HD16x9 }],
    projectLink: "https://eco.rafael-rizzo.com",
    repoLink: "https://github.com/rafaelRizzo/eco",
  },
  {
    title: "Log Tracer PSQL",
    description: "Coletor de logs com PostgreSQL e TimescaleDB, dashboard, API e ingestão em lote.",
    url: "log-tracer.rafael-rizzo.com",
    image: img("log-tracer-psql.webp"),
    size: [2932, 1448],
    projectLink: "https://log-tracer.rafael-rizzo.com",
    repoLink: "https://github.com/rafaelRizzo/log-tracer-psql",
  },
  {
    title: "Manage FW",
    description: "Firewall custom com nftables e Fail2Ban, whitelist de IPs via CLI.",
    url: "github.com/rafaelRizzo/manage-fw",
    projectLink: "https://github.com/rafaelRizzo/manage-fw",
    repoLink: "https://github.com/rafaelRizzo/manage-fw",
    terminal: [
      { type: "cmd", text: "manage-fw add 203.0.113.42 8443" },
      { type: "out", text: "✔ whitelist: 203.0.113.42 -> porta 8443" },
      { type: "cmd", text: "manage-fw list" },
      { type: "out", text: "8443  203.0.113.42/32  ACCEPT" },
      { type: "out", text: "22    0.0.0.0/0        ACCEPT (ssh sempre liberado)" },
      { type: "cmd", text: "manage-fw reload" },
      { type: "out", text: "✔ nftables + fail2ban recarregados" },
    ],
  },
  {
    title: "Stock Lan",
    description: "Sistema de gestão de estoque: matéria-prima, produtos acabados, vendas e relatórios.",
    url: "github.com/rafaelRizzo/stock-lan",
    image: img("stock-lan.webp"),
    size: [2940, 1838],
    projectLink: "https://github.com/rafaelRizzo/stock-lan",
    repoLink: "https://github.com/rafaelRizzo/stock-lan",
  },
  {
    title: "ConectaSST",
    description: "Landing page para o evento ConectaSST.",
    url: "connectsst-ivpg.vercel.app",
    image: img("conecta-sst.webp"),
    size: HD,
    projectLink: "https://connectsst-ivpg.vercel.app/",
  },
  {
    title: "Cards JSON",
    description: "Scripts para gerar copia e cola.",
    url: "cards.rafael-rizzo.com",
    image: img("cards-json.webp"),
    size: HD,
    projectLink: "https://cards.rafael-rizzo.com/",
  },
  {
    title: "FAQ Issabel PBX",
    description: "FAQ para o PBX Issabel, auxiliando a comunidade open source em dúvidas frequentes.",
    url: "faq.phonevox.com.br",
    image: img("faq-phonevox.webp"),
    size: HD,
    projectLink: "https://faq.phonevox.com.br",
  },
  {
    title: "Chama lá",
    description: "Site de iniciar conversa no whatsapp sem precisar adicionar o número no contato.",
    url: "chama-la.rafael-rizzo.com",
    image: img("chama-la.webp"),
    size: HD,
    projectLink: "https://chama-la.rafael-rizzo.com",
    repoLink: "https://github.com/rafaelRizzo/chama-la-nextjs",
  },
  {
    title: "A viagem de Chihiro",
    description: "Site para o filme A Viagem de Chihiro.",
    url: "chihiro.rafael-rizzo.com",
    image: img("a-viagem-de-chihiro.webp"),
    size: HD,
    projectLink: "https://chihiro.rafael-rizzo.com",
    repoLink: "https://github.com/rafaelRizzo/chihiro-nextjs",
  },
  {
    title: "Loopstudios",
    description: "Landing page para uma empresa fictícia de VR e AR.",
    url: "loopstudios.rafael-rizzo.com",
    image: img("loopstudios.webp"),
    size: HD,
    projectLink: "https://loopstudios.rafael-rizzo.com",
    repoLink: "https://github.com/rafaelRizzo/LoopstudiosFrontEndMentor",
  },
  {
    title: "Landing Page Next Level",
    description: "Seguindo o layout de uma designer no Figma.",
    url: "landing-next-level.rafael-rizzo.com",
    image: img("landing-next-level.webp"),
    size: HD,
    projectLink: "https://landing-next-level.rafael-rizzo.com",
    repoLink: "https://github.com/rafaelRizzo/landing-design-next-level",
  },
]
