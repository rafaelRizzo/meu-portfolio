import { projectsData } from "@/app/data/projectsData";
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
    repo_indisponivel?: boolean;
    title?: string;
    description?: string;
};

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
            hover:bg-zinc-200 text-zinc-950
            dark:border-zinc-800 dark:hover:bg-zinc-800 dark:text-zinc-100"
                    >
                        <FaGithub size={14} />
                        <span>Repositório</span>
                    </Link>
                )}
            </div>
        </div>
    );
};

export const Projects = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Projetos</CardTitle>
                <CardDescription>Alguns dos meus projetos</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6 text-xs">
                <div className="grid grid-cols-1 space-y-5">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};
