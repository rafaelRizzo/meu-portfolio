import React from 'react';
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';
import Link from 'next/link';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

// Dados de exemplo para os projetos
const projects = [
    {
        id: 1,
        title: "Phonevox group",
        description: "Landing page para a Phonevox Group, uma empresa de telecomunicações.",
        imageUrl: "/projects/phonevox-group.webp",
        projectUrl: "https://phonevox.com.br",
        githubUrl: "https://github.com/rafaelRizzo/phonevox-group-landing-page",
    },
    {
        id: 2,
        title: "Issabel PBX - FAQ",
        description: "FAQ estilo acordeon para tirar dúvidas sobre configurações e problemas comuns na utilização de um PABX open-source.",
        imageUrl: "/projects/faq.webp",
        projectUrl: "https://faq.phonevox.com.br",
        githubUrl: "anonymous", // No momento ainda estou migrando esse projeto para minha conta pessoal pois foi uma iniciativa própria (mesmo que não reconhecida internamente pela empresa, pelo menos continua ajudando clientes e o N1 do setor, não espere que caridade dê dinheiro...)
    },
    {
        id: 3,
        title: "Chihiro - Landing Page",
        description: "Homenagem a um filme deslumbrante que assisti, A Viagem de Chihiro.",
        imageUrl: "/projects/chihiro.webp",
        projectUrl: "https://chihiro.rafael-rizzo.com",
        githubUrl: "https://github.com/rafaelRizzo/chihiro-nextjs",
    },
    {
        id: 4,
        title: "Iniciador de conversa Whatsapp",
        description: "Todos precisamos chamar clientes ou pessoas mas não queremos adiciona-los em nossos contatos, essa solução serve justamente para isso.",
        imageUrl: "/projects/chama-la.webp",
        projectUrl: "https://chama-la.rafael-rizzo.com",
        githubUrl: "https://github.com/rafaelRizzo/chama-la-nextjs",
    },
    {
        id: 5,
        title: "Loopstudios - VR e AR",
        description: "Projeto de landing page para uma loja fictícia sobre realidade virtual e aumentada.",
        imageUrl: "/projects/loopstudios.webp",
        projectUrl: "https://loopstudios.rafael-rizzo.com",
        githubUrl: "https://github.com/rafaelRizzo/LoopstudiosFrontEndMentor",
    },
    {
        id: 6,
        title: "Player de música",
        description: "Projeto pessoal de um player de música marcante.",
        imageUrl: "/projects/player-de-musica.webp",
        projectUrl: "https://player.rafael-rizzo.com",
        githubUrl: "https://github.com/rafaelRizzo/player-music-nextjs",
    },
    {
        id: 7,
        title: "KI Delicia - Sorveteria",
        description: "Projeto pessoal para uma loja de sorvete fictícia.",
        imageUrl: "/projects/sorvete.webp",
        projectUrl: "https://sorveteria.rafael-rizzo.com",
        githubUrl: "https://github.com/rafaelRizzo/projetoSorveteriaWeb",
    },
    {
        id: 8,
        title: "Caravan - Agência de viagens",
        description: "Projeto para uma agência de viagens fictícia.",
        imageUrl: "/projects/caravan.webp",
        projectUrl: "https://caravan.rafael-rizzo.com",
        githubUrl: "https://github.com/rafaelRizzo/projetoCaravan",
    },
    {
        id: 9,
        title: "Clone do Google",
        description: "Projeto de desafio, testando habilidades de replicação, um dos primeiros.",
        imageUrl: "/projects/clone-google.webp",
        projectUrl: "https://clone-google.rafael-rizzo.com",
        githubUrl: "https://github.com/rafaelRizzo/clone-google",
    },
    {
        id: 10,
        title: "Landing Page Next Level Design",
        description: "Seguindo o layout de uma designer no Figma.",
        imageUrl: "/projects/landing-next-level.webp",
        projectUrl: "https://landing-next-level.rafael-rizzo.com",
        githubUrl: "https://github.com/rafaelRizzo/landing-design-next-level",
    }
]

export default function Projects() {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <Card key={project.id} className="flex flex-col dark:border-zinc-50/10 shadow">
                        <CardHeader>
                            <Image
                                src={project.imageUrl}
                                alt={project.title}
                                width={800}
                                height={600}
                                className="w-full h-48 object-cover rounded-t-lg aspect-square"
                                loading='lazy'
                            />
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button asChild>
                                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Ver projeto
                                </a>
                            </Button>
                            {project.githubUrl != "anonymous" ? (
                                <Link href={project.githubUrl} target='_blank'>
                                    <Button variant="outline">
                                        <span className='flex'>
                                            <GitHubLogoIcon className="mr-2 h-4 w-4" />
                                            Repostório
                                        </span>
                                    </Button>
                                </Link>
                            ) : (
                                <Button variant="outline" disabled>
                                    <span className='flex'>
                                        <GitHubLogoIcon className="mr-2 h-4 w-4" />
                                        Repostório indisponível
                                    </span>
                                </Button>
                            )
                            }
                        </CardFooter>
                    </Card>

                ))}


            </div>
        </div>
    )
}