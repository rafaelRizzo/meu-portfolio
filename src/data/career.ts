export type Experience = {
  title: string
  company: string
  period: string
  description: string
}

export const career: Experience[] = [
  {
    title: "Desenvolvedor Full Stack Pleno",
    company: "Phonevox Group",
    period: "2023 - Presente",
    description:
      "Desenvolvimento de APIs REST usando Node.js e Next.js, sistemas de atendimento e integrações com ERPs (IXCSoft, SGP), Telegram, Discord e automações via n8n. Criação de dashboards, automações e soluções em Asterisk para otimizar processos. Destaque para um CRM personalizado que centralizou o atendimento, aumentando agilidade, padronização e precisão nas cobranças, reduzindo erros e elevando a eficiência operacional.",
  },
  {
    title: "Suporte VOIP",
    company: "Phonevox Group",
    period: "2022 - 2023",
    description:
      "Atendimento especializado em VOIP (telefonia IP) e suporte a servidores em nuvem e locais. Criação de fluxos automatizados que melhoraram a eficiência no atendimento.",
  },
  {
    title: "Atendente Call Center",
    company: "Phonevox Group",
    period: "2021 - 2022",
    description:
      "Suporte helpdesk, atendimento via chat e telefone, focando na resolução rápida de problemas e satisfação do cliente.",
  },
  {
    title: "T.I",
    company: "Lan House Sky Net",
    period: "2016 - 2021",
    description: "Manutenção de computadores e redes, garantindo a operação contínua.",
  },
]
