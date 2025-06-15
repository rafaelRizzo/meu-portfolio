import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"



type ExperienceCardProps = {
    title: string;
    company: string;
    period: string;
    description: string;
}

const timelineData: ExperienceCardProps[] = [
    {
        title: "Desenvolvedor Full Stack Pleno",
        company: "Phonevox Group",
        period: "2023 - Presente",
        description: "Desenvolvimento de APIs REST usando Node.js e Next.js, sistemas de atendimento e integrações com ERPs (IXCSoft, SGP), Telegram, Discord e automações via n8n. Criação de dashboards, automações e soluções em Asterisk para otimizar processos. Destaque para um CRM personalizado que centralizou o atendimento, aumentando agilidade, padronização e precisão nas cobranças, reduzindo erros e elevando a eficiência operacional."
    },
    {
        title: "Suporte VOIP",
        company: "Phonevox Group",
        period: "2022 - 2023",
        description: "Atendimento especializado em VOIP (telefonia IP) e suporte a servidores em nuvem e locais. Criação de fluxos automatizados que melhoraram a eficiência no atendimento."
    },
    {
        title: "Atendente Call Center",
        company: "Phonevox Group",
        period: "2021 - 2022",
        description: "Suporte helpdesk, atendimento via chat e telefone, focando na resolução rápida de problemas e satisfação do cliente."
    },
    {
        title: "T.I",
        company: "Lan House Sky Net",
        period: "2016 - 2021",
        description: "Manutenção de computadores e redes, garantindo a operação contínua."
    }
]

const Experiences = () => {
    return (
        <div className="relative border-l-2 border-zinc-700/10 dark:border-zinc-50/10 ml-3">
            {timelineData.map((item, index) => (
                <div key={index} className="mb-8 ml-8">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-200 dark:bg-purple-800 rounded-full -left-3 ring-8 ring-purple-100 dark:ring-purple-950">
                        <svg className="w-2.5 h-2.5 text-purple-600 dark:text-purple-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <Card className={`dark:border-zinc-50/10 transition-all ${index === 0 ? "border-purple-300 dark:border-purple-800" : ''}`}>
                        <CardContent className="p-5">
                            <h3 className="flex items-center mb-1 text-md font-semibold text-zinc-900 dark:text-zinc-100">{item.title}</h3>
                            <h4 className="block mb-2 text-sm font-normal leading-none text-zinc-400">{item.company}</h4>
                            <time className="block mb-2 text-sm font-normal leading-none text-zinc-400">{item.period}</time>
                            <p className="mb-4 font-normal text-zinc-500 text-sm">{item.description}</p>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
    )
}
export const Career = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Carreira</CardTitle>
                <CardDescription>
                    Minha jornada como profissional
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
                <Experiences />
            </CardContent>
        </Card>
    )
}