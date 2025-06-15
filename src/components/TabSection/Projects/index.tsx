import { Safari } from "@/components/magicui/safari";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { FaGithub } from "react-icons/fa6";

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
                    rel="noopener noreferrer"
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
                        rel="noopener noreferrer"
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

export const Projects = () => {
    return (
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
                        imageSrc="/conecta-sst.webp"
                        projectLink="https://connectsst-ivpg.vercel.app/"
                        repo_indisponivel={true}
                        title="ConectaSST"
                        description="Landing page para o evento ConectaSST."
                    />
                    <ProjectCard
                        url="phonevox.com.br"
                        imageSrc="/phonevox.webp"
                        projectLink="https://phonevox.com.br"
                        repo_indisponivel={true}
                        title="Phonevox Group"
                        description="Site da Phonevox Group."
                    />
                    <ProjectCard
                        url="faq.phonevox.com.br"
                        imageSrc="/faq-phonevox.webp"
                        projectLink="https://faq.phonevox.com.br"
                        repo_indisponivel={true}
                        title="FAQ Issabel PBX"
                        description="FAQ para o PBX Issabel, auxiliando a comunidade open source em dúvidas frequentes."
                    />
                    <ProjectCard
                        url="chama-la.rafael-rizzo.com"
                        imageSrc="/chama-la.webp"
                        projectLink="https://chama-la.rafael-rizzo.com"
                        repoLink="https://github.com/rafaelRizzo/chama-la-nextjs"
                        title="Chama lá"
                        description="Site de iniciar conversa no whatsapp sem precisar adicionar o número no contato."
                    />
                    <ProjectCard
                        url="https://chihiro.rafael-rizzo.com"
                        imageSrc="/a-viagem-de-chihiro.webp"
                        projectLink="https://chihiro.rafael-rizzo.com"
                        repoLink="https://github.com/rafaelRizzo/chihiro-nextjs"
                        title="A viagem de Chihiro"
                        description="Site para o filme A Viagem de Chihiro."
                    />
                    <ProjectCard
                        url="loopstudios.rafael-rizzo.com"
                        imageSrc="/loopstudios.webp"
                        projectLink="https://loopstudios.rafael-rizzo.com"
                        repoLink="https://github.com/rafaelRizzo/LoopstudiosFrontEndMentor"
                        title="Loopstudios"
                        description="Landing page para uma empresa fictícia de VR e AR."
                    />
                    <ProjectCard
                        url="landing-next-level.rafael-rizzo.com"
                        imageSrc="/landing-next-level.webp"
                        projectLink="https://landing-next-level.rafael-rizzo.com"
                        repoLink="https://github.com/rafaelRizzo/landing-design-next-level"
                        title="Landing Page Next Level"
                        description="Seguindo o layout de uma designer no Figma."
                    />

                </div>

            </CardContent>
        </Card>
    )
}