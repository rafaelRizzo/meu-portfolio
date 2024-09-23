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

// Dados de exemplo para os projetos
const projects = [
    {
        id: 1,
        title: "FAQ - Issabel PBX",
        description: "FAQ estilo acordeon para tirar dúvidas sobre configurações e problemas comuns na utilização de um PABX open-source.",
        imageUrl: "/projects/faq.png",
        projectUrl: "https://faq.phonevox.com.br",
        githubUrl: "https://github.com",
    },
    {
        id: 2,
        title: "Chihiro - Landing Page",
        description: "Homenagem a um filme deslumbrante que assisti, A Viagem de Chihiro.",
        imageUrl: "/projects/chihiro.png",
        projectUrl: "https://chihiro.rafael-rizzo.com",
        githubUrl: "https://github.com",
    },
    {
        id: 3,
        title: "Iniciador de conversa Whatsapp",
        description: "Todos precisamos chamar clientes ou pessoas mas não queremos adiciona-los em nossos contatos, essa solução serve justamente para isso.",
        imageUrl: "/projects/chama-la.png",
        projectUrl: "https://chama-la.rafael-rizzo.com",
        githubUrl: "https://github.com",
    },
    {
        id: 4,
        title: "Loopstudios - VR e AR",
        description: "Projeto de landing page para uma loja fictícia sobre realidade virtual e aumentada.",
        imageUrl: "/projects/loopstudios.png",
        projectUrl: "https://loopstudios.rafael-rizzo.com",
        githubUrl: "https://github.com",
    },
    {
        id: 5,
        title: "Player de música",
        description: "Projeto pessoal de um player de música marcante.",
        imageUrl: "/projects/player-de-musica.png",
        projectUrl: "https://player.rafael-rizzo.com",
        githubUrl: "https://github.com",
    },
    {
        id: 6,
        title: "KI Delicia - Sorveteria",
        description: "Projeto pessoal para uma loja de sorvete fictícia.",
        imageUrl: "/projects/sorvete.png",
        projectUrl: "https://sorveteria.rafael-rizzo.com",
        githubUrl: "https://github.com",
    },
    {
        id: 7,
        title: "Caravan - Agência de viagens",
        description: "Projeto para uma agência de viagens fictícia.",
        imageUrl: "/projects/caravan.png",
        projectUrl: "https://caravan.rafael-rizzo.com",
        githubUrl: "https://github.com",
    },
    {
        id: 8,
        title: "Clone do Google",
        description: "Projeto de desafio, testando habilidades de replicação, um dos primeiros.",
        imageUrl: "/projects/clone-google.png",
        projectUrl: "https://clone-google.rafael-rizzo.com",
        githubUrl: "https://github.com",
    },

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
                            />
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button asChild variant="outline">
                                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Ver projeto
                                </a>
                            </Button>
                            <Button variant="outline" disabled>
                                {/* <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-4 w-4" />
                                    Source Code
                                </a> */}

                                <span className='flex'>
                                    <Github className="mr-2 h-4 w-4" />
                                    Em breve...
                                </span>
                            </Button>
                        </CardFooter>
                    </Card>

                ))}

                <div className="text-center bg-blue-600 text-zinc-50 dark:bg-blue-600 rounded-lg text-xs px-3 py-3">
                    <span>Alguns projetos não podem ser divulgados por motivos contratuais.</span>
                </div>
                <div className="text-center bg-blue-600 text-zinc-50 dark:bg-blue-600 rounded-lg text-xs px-3 py-3">
                    <span>Em breve mais projetos...</span>
                </div>
            </div>
        </div>
    )
}