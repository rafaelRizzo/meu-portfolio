"use client"

import { Badge } from "@/components/ui/badge";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { SiAsterisk } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandMysql } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiN8N } from "react-icons/si";
import { TfiGithub } from "react-icons/tfi";
import { FaDocker } from "react-icons/fa6";
import { FaLinux } from "react-icons/fa6";

import Link from "next/link";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { RainbowButton } from "@/components/magicui/rainbow-button";
import { Safari } from "@/components/magicui/safari";

type ProjectCardProps = {
    url: string;
    imageSrc: string;
    projectLink: string;
    repoLink?: string;
    repo_indisponivel?: boolean,
    title?: string,
    description?: string,
}

const ProjectCard = ({ url, imageSrc, projectLink, repoLink = "", repo_indisponivel = false, title = "", description = "" }: ProjectCardProps) => {
    return (
        <div className="space-y-3">
            <div className="relative">
                <div className="grid grid-cols-1 gap-1 mb-1">
                    <span>{title}</span>
                    <span className="text-muted-foreground">{description}</span>
                </div>
                <Safari
                    className="size-full object-cover object-center"
                    url={url}
                    imageSrc={imageSrc}
                />
            </div>

            <div className="grid grid-cols-2 gap-2">
                <Link
                    href={projectLink}
                    target="_blank"
                    className="px-5 py-2 flex items-center justify-center gap-1 rounded-md
                    bg-zinc-950 hover:bg-zinc-900 text-zinc-50 shadow
                    dark:bg-zinc-100 dark:hover:bg-zinc-200 dark:text-zinc-950"
                >
                    <ExternalLink size={14} />
                    <span>Ver projeto</span>
                </Link>

                {repo_indisponivel ? (
                    <div
                        className="px-5 py-2 flex items-center justify-center gap-1 border rounded-sm cursor-not-allowed
                        border-transparent bg-transparent text-zinc-600
                        dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-600"
                    >
                        <FaGithub size={14} />
                        <span>Indisponível</span>
                    </div>
                ) : (
                    <Link
                        href={repoLink}
                        target="_blank"
                        className="px-5 py-2 flex items-center justify-center gap-1 border rounded-sm
                        hover:bg-zinc-2 00 text-zinc-950
                        dark:border-zinc-800 dark:hover:bg-zinc-800 dark:text-zinc-100"
                    >
                        <FaGithub size={14} />
                        <span>Repositório</span>
                    </Link>
                )}
            </div>
        </div>
    )
}

const ListOfTecnologies = () => {
    return (
        <div className="flex flex-wrap gap-2 my-5">
            <Badge
                variant="secondary"
                className="bg-orange-600/15 dark:bg-orange-600/5 border dark:border-orange-600/10 text-orange-700 dark:text-orange-500"
            >
                <SiAsterisk />
                <span>ASTERISK</span>
            </Badge>
            <Badge
                variant="secondary"
                className="bg-green-600/15 dark:bg-green-600/5 border dark:border-green-600/10 text-green-700 dark:text-green-500"
            >
                <IoLogoNodejs />
                <span>NODE.JS</span>
            </Badge>
            <Badge
                variant="secondary"
                className="bg-blue-600/15 dark:bg-blue-600/5 border dark:border-blue-600/10 text-blue-700 dark:text-blue-500"
            >
                <BiLogoTypescript />
                <span>TYPESCRIPT</span>
            </Badge>

            <Badge
                variant="secondary"
                className="bg-zinc-600/15 dark:bg-zinc-600/5 border dark:border-zinc-600/10 text-zinc-700 dark:text-zinc-500"
            >
                <RiNextjsFill />
                <span>NEXT.JS</span>
            </Badge>
            <Badge
                variant="secondary"
                className="bg-teal-600/15 dark:bg-teal-600/5 border dark:border-teal-600/10 text-teal-700 dark:text-teal-500"
            >
                <BiLogoTailwindCss />
                <span>TAILWIND</span>
            </Badge>
            <Badge
                variant="secondary"
                className="bg-indigo-600/15 dark:bg-indigo-600/5 border dark:border-indigo-600/10 text-indigo-700 dark:text-indigo-500"
            >
                <TbBrandMysql />
                <span>MYSQL</span>
            </Badge>
            <Badge
                variant="secondary"
                className="bg-sky-600/15 dark:bg-sky-600/5 border dark:border-sky-600/10 text-sky-700 dark:text-sky-500"
            >
                <BiLogoPostgresql />
                <span>POSTGRES</span>
            </Badge>
            <Badge
                variant="secondary"
                className="bg-rose-600/15 dark:bg-rose-600/5 border dark:border-rose-600/10 text-rose-700 dark:text-rose-500"
            >
                <SiN8N />
                <span>N8N</span>
            </Badge>
            <Badge
                variant="secondary"
                className="bg-stone-600/15 dark:bg-stone-600/5 border dark:border-stone-600/10 text-stone-700 dark:text-stone-500"
            >
                <TfiGithub />
                <span>GITHUB</span>
            </Badge>
            <Badge
                variant="secondary"
                className="bg-cyan-600/15 dark:bg-cyan-600/5 border dark:border-cyan-600/10 text-cyan-700 dark:text-cyan-500"
            >
                <FaDocker />
                <span>DOCKER</span>
            </Badge>
            <Badge
                variant="secondary"
                className="bg-fuchsia-600/15 dark:bg-fuchsia-600/5 border dark:border-fuchsia-600/10 text-fuchsia-700 dark:text-fuchsia-500"
            >
                <FaLinux />
                <span>LINUX</span>
            </Badge>
        </div>
    )
}

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

const ModeToggle = () => {
    const { setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const isDark = resolvedTheme === "dark"

    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark")
    }

    return (
        <Button variant="ghost" size="icon" onClick={toggleTheme} className="cursor-pointer">
            {isDark ? (
                <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
            ) : (
                <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}

export default function Home() {
    return (
        <div className="max-w-2xl mx-auto p-5 font-mono">

            <main>
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-lg">./rafael rizzo</h1>
                        <h2 className="text-sm text-muted-foreground">full-stack developer</h2>
                    </div>
                    <ModeToggle />
                </div>

                <ListOfTecnologies />

            </main>

            <section className="mt-4">
                <div className="flex w-full flex-col gap-6">
                    <Tabs defaultValue="about">
                        <TabsList className="w-full dark:bg-zinc-900">
                            <TabsTrigger value="about">Sobre</TabsTrigger>
                            <TabsTrigger value="projects">Projetos</TabsTrigger>
                            <TabsTrigger value="career">Carreira</TabsTrigger>
                        </TabsList>
                        <TabsContent value="about">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Sobre</CardTitle>
                                    <CardDescription>
                                        Um pouco sobre mim
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="grid gap-6 text-xs">
                                    <p>8 anos de experiência e 4 anos de mercado, atuando desde os 17 anos.</p>
                                    <p>Expecialista em desenvolvimento de sistemas web, landing pages, API RESTful, automações e muito mais.</p>
                                    <p>Minha missão: fazer o difícil parecer simples.</p>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="projects">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Projetos</CardTitle>
                                    <CardDescription>
                                        Alguns dos meus projetos
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="grid gap-6 text-xs">
                                    <div className="grid grid-cols-1 space-y-5">
                                        <ProjectCard
                                            url="connectsst-ivpg.vercel.app"
                                            imageSrc="/conecta-sst.png"
                                            projectLink="https://connectsst-ivpg.vercel.app/"
                                            repo_indisponivel={true}
                                            title="ConectaSST"
                                            description="Landing page para o evento ConectaSST."
                                        />
                                        <ProjectCard
                                            url="phonevox.com.br"
                                            imageSrc="/phonevox.png"
                                            projectLink="https://phonevox.com.br"
                                            repo_indisponivel={true}
                                            title="Phonevox Group"
                                            description="Site da Phonevox Group."
                                        />
                                        <ProjectCard
                                            url="faq.phonevox.com.br"
                                            imageSrc="/faq-phonevox.png"
                                            projectLink="https://faq.phonevox.com.br"
                                            repo_indisponivel={true}
                                            title="FAQ Issabel PBX"
                                            description="FAQ para o PBX Issabel, auxiliando a comunidade open source em dúvidas frequentes."
                                        />
                                        <ProjectCard
                                            url="chama-la.rafael-rizzo.com"
                                            imageSrc="/chama-la.png"
                                            projectLink="https://chama-la.rafael-rizzo.com"
                                            repoLink="https://github.com/rafaelRizzo/chama-la-nextjs"
                                            title="Chama lá"
                                            description="Site de iniciar conversa no whatsapp sem precisar adicionar o número no contato."
                                        />
                                        <ProjectCard
                                            url="https://chihiro.rafael-rizzo.com"
                                            imageSrc="/a-viagem-de-chihiro.png"
                                            projectLink="https://chihiro.rafael-rizzo.com"
                                            repoLink="https://github.com/rafaelRizzo/chihiro-nextjs"
                                            title="A viagem de Chihiro"
                                            description="Site para o filme A Viagem de Chihiro."
                                        />
                                        <ProjectCard
                                            url="loopstudios.rafael-rizzo.com"
                                            imageSrc="/loopstudios.png"
                                            projectLink="https://loopstudios.rafael-rizzo.com"
                                            repoLink="https://github.com/rafaelRizzo/LoopstudiosFrontEndMentor"
                                            title="Loopstudios"
                                            description="Landing page para uma empresa fictícia de VR e AR."
                                        />
                                        <ProjectCard
                                            url="landing-next-level.rafael-rizzo.com"
                                            imageSrc="/landing-next-level.png"
                                            projectLink="https://landing-next-level.rafael-rizzo.com"
                                            repoLink="https://github.com/rafaelRizzo/landing-design-next-level"
                                            title="Landing Page Next Level"
                                            description="Seguindo o layout de uma designer no Figma."
                                        />

                                    </div>

                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="career">
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
                        </TabsContent>
                    </Tabs>
                </div>

            </section>

            <section className="mt-4">
                <div className="flex items-center justify-center">
                    <Link href="https://www.linkedin.com/in/rafael-rizzo-breschi-b02547216/" target="_blank">
                        <RainbowButton className="mx-auto">Entrar em contato</RainbowButton>
                    </Link>
                </div>
            </section>

            <footer className="mt-4">
                <ul className="flex item-center justify-center gap-1 text-muted-foreground">
                    <li>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="https://www.instagram.com/rafael_breschi"
                                    target="_blank"
                                >
                                    <div
                                        className="p-2 dark:hover:bg-zinc-900  rounded-sm cursor-pointer"
                                    >
                                        <BiLogoInstagramAlt />
                                    </div>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Instagram</p>
                            </TooltipContent>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="https://github.com/rafaelRizzo"
                                    target="_blank"
                                    className="cursor-pointer"
                                >
                                    <div
                                        className="p-2 dark:hover:bg-zinc-900  rounded-sm cursor-pointer"
                                    >
                                        <TfiGithub />
                                    </div>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Github</p>
                            </TooltipContent>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="https://www.linkedin.com/in/rafael-rizzo-breschi-b02547216/"
                                    target="_blank"
                                    className="cursor-pointer"
                                >
                                    <div
                                        className="p-2 dark:hover:bg-zinc-900  rounded-sm cursor-pointer"
                                    >
                                        <FaLinkedin />
                                    </div>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Linkedin</p>
                            </TooltipContent>
                        </Tooltip>
                    </li>
                </ul>

                <i className="text-xs text-center flex w-full items-center justify-center">© 2025 Rafael Rizzo. Todos os direitos reservados.</i>
            </footer>

        </div>
    );
}
