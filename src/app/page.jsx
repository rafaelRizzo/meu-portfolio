"use client"

import Image from "next/image";

import { useTheme } from "next-themes"
import { useEffect, useState } from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { SiAsterisk } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { FaPhp } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { FaLinux } from "react-icons/fa6";
import { DiNginx } from "react-icons/di";
import { SiGrafana } from "react-icons/si";
import { TbBrandGithub } from "react-icons/tb";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import Link from "next/link";

import { FaInstagram } from "react-icons/fa";
import { FaSteamSymbol } from "react-icons/fa6";
import { RiDiscordLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";

import { useInView } from 'react-intersection-observer';
import { Separator } from "@/components/ui/separator";

export default function Home() {
    const { theme } = useTheme();
    const [currentTheme, setCurrentTheme] = useState("");
    const { ref, inView } = useInView({
        triggerOnce: true, // Garante que a animação ou estilo só acontece uma vez
        threshold: 0.5, // 50% do elemento precisa estar visível
    });
    useEffect(() => {
        if (theme) {
            setCurrentTheme(theme);
        }
    }, [theme]);

    return (
        <>
            <main className={`container-main flex flex-col items-center justify-center text-center ${currentTheme === 'light' ? 'img-light' : 'img-dark'} text-zinc-50 relative`}>

                <div className="absolute top-5 right-5 z-50">
                    <DarkModeToggle />
                </div>

                <h1 className="flex flex-col items-center justify-center font-bold text-6xl md:text-8xl drop-shadow relative">
                    <span>Rafael Rizzo</span>
                    <Image src={"/effect-1.png"} width={200} height={50} className="max-w-20 md:max-w-full invert absolute -top-10 md:-top-24 right-7 flex items-center justify-center mx-auto" />
                </h1>

                <h2 className="text-2xl md:text-3xl font-semibold drop-shadow relative">Dev Full Stack</h2>


                <div className="absolute left-0 right-0 bottom-0 flex items-center justify-center p-5 text-4xl animate-bounce">
                    <Link href="#sobre">
                        <MdOutlineKeyboardDoubleArrowDown />
                    </Link>
                </div>

            </main>

            <div id="sobre"></div>

            <section className={`max-w-5xl mx-auto px-5 my-20`}>
                <h3 className="text-center font-semibold text-4xl mb-5">Sobre</h3>
                <span className="text-muted-foreground -mt-5 mb-10 flex items-center justify-center">
                    Por onde tudo começou
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2">

                    <div className="about-img flex items-center justify-center md:justify-start relative select-none mb-5 md:mb-0">
                        <Image
                            src="/dots.png"
                            width={400}
                            height={50}
                            ref={ref}
                            className={`dots absolute mx-auto top-0 md:-top-10 left-0 md:-left-44 right-0
                            ${inView ? 'view' : ''} max-w-56 md:max-w-full`}
                        />
                        <Image
                            src={"/men.png"}
                            width={280}
                            height={400}
                            className="max-w-52 md:max-w-full drop-shadow"
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center tracking-wide text-lg text-start">
                        <p>Sou um <span className={`bg-violet-500/25 dark:bg-violet-700/75 px-1`}>Desenvolvedor Full Stack</span> que curte criar apps bonitos e funcionais.</p>
                        <p>Gosto de ver a tecnologia resolvendo problemas e, com o tempo, aprendi a transformar desafios em oportunidades.</p>
                    </div>

                </div>

            </section>

            <section className={`max-w-5xl mx-auto px-5 my-20`}>
                <h3 className="text-center font-semibold text-4xl mb-5">Stack</h3>
                <span className="text-muted-foreground -mt-5 mb-10 flex items-center justify-center">
                    Tecnologias que uso no meu ambiente de trabalho
                </span>

                <div className="flex flex-wrap gap-4 justify-center">
                    <div className="bg-orange-100 text-orange-600 dark:bg-orange-700/20 border-orange-100 dark:border dark:border-orange-700/40 dark:text-orange-200 py-2 px-4 rounded-full flex items-center space-x-2">
                        <SiAsterisk className="text-3xl" />
                        <span>Asterisk</span>
                    </div>
                    <div className="bg-gray-100 text-gray-800 dark:bg-gray-700/20 border-gray-100 dark:border dark:border-gray-700/40 dark:text-gray-300 py-2 px-4 rounded-full flex items-center space-x-2">
                        <RiNextjsLine className="text-3xl" />
                        <span>Next.js</span>
                    </div>
                    <div className="bg-green-100 text-green-600 dark:bg-green-700/20 border-green-100 dark:border dark:border-green-700/40 dark:text-green-200 py-2 px-4 rounded-full flex items-center space-x-2">
                        <RiNodejsLine className="text-3xl" />
                        <span>Node.js</span>
                    </div>
                    <div className="bg-indigo-100 text-indigo-600 dark:bg-indigo-700/20 border-indigo-100 dark:border dark:border-indigo-700/40 dark:text-indigo-200 py-2 px-4 rounded-full flex items-center space-x-2">
                        <FaPhp className="text-3xl" />
                        <span>PHP</span>
                    </div>
                    <div className="bg-green-100 text-green-700 dark:bg-green-800/20 border-green-100 dark:border dark:border-green-800/40 dark:text-green-300 py-2 px-4 rounded-full flex items-center space-x-2">
                        <DiNginx className="text-3xl" />
                        <span>Nginx</span>
                    </div>
                    <div className="bg-teal-100 text-teal-600 dark:bg-teal-700/20 border-teal-100 dark:border dark:border-teal-700/40 dark:text-teal-200 py-2 px-4 rounded-full flex items-center space-x-2">
                        <GrMysql className="text-3xl" />
                        <span>MySQL</span>
                    </div>
                    <div className="bg-neutral-100 text-neutral-800 dark:bg-neutral-700/20 border-neutral-100 dark:border dark:border-neutral-700/40 dark:text-neutral-200 py-2 px-4 rounded-full flex items-center space-x-2">
                        <FaLinux className="text-3xl" />
                        <span>Linux</span>
                    </div>
                    <div className="bg-green-100 text-green-700 dark:bg-green-800/20 border-green-100 dark:border dark:border-green-800/40 dark:text-green-300 py-2 px-4 rounded-full flex items-center space-x-2">
                        <SiMongodb className="text-3xl" />
                        <span>MongoDB</span>
                    </div>
                    <div className="bg-amber-100 text-amber-600 dark:bg-amber-700/20 border-amber-100 dark:border dark:border-amber-700/40 dark:text-amber-200 py-2 px-4 rounded-full flex items-center space-x-2">
                        <SiGrafana className="text-3xl" />
                        <span>Grafana</span>
                    </div>
                    <div className="bg-zinc-100 text-zinc-600 dark:bg-zinc-700/20 border-zinc-100 dark:border dark:border-zinc-700/40 dark:text-zinc-200 py-2 px-4 rounded-full flex items-center space-x-2">
                        <TbBrandGithub className="text-3xl" />
                        <span>GitHub</span>
                    </div>

                </div>


            </section>

            <section className={`max-w-5xl mx-auto px-5 my-20`}>
                <h3 className="text-center font-semibold text-4xl mb-5">Carreira</h3>
                <span className="text-muted-foreground -mt-5 mb-10 flex items-center justify-center">
                    Uma breve descrição da minha jornada
                </span>

                <Experiences />
            </section>

            <section className={`max-w-5xl mx-auto px-5 my-20 relative`}>
                <h3 className="text-center font-semibold text-4xl mb-5">Projetos</h3>
                <span className="text-muted-foreground -mt-5 mb-10 flex items-center justify-center">
                    Desenvolvimentos ao longo da minha jornada
                </span>

                <Image src={"/stars.png"} width={200} height={50} className="max-w-10 md:max-w-24 absolute top-20 md:top-10 right-0 md:-right-10 -z-10 dark:invert" />
                <Projects />
            </section>

            <footer className={`max-w-5xl mx-auto px-5 my-10 flex flex-col`}>

                <div className="min-h-32 flex flex-col border dark:bg-zinc-900 rounded-lg p-5 gap-5 shadow">
                    <ul className="flex items-center justify-center min-h-12 max-h-12 gap-2">
                        <li className="flex items-center justify-center">
                            <Link href="https://www.linkedin.com/in/rafael-rizzo-breschi-b02547216/" target="_blank" className="p-2.5 border dark:border-zinc-800 dark:bg-zinc-950 hover:bg-zinc-700/5 dark:hover:bg-zinc-50/5 text-zinc-600 dark:text-zinc-300 rounded-lg">
                                <FaLinkedinIn />
                                <span className="sr-only">Linkedin</span>
                            </Link>
                        </li>
                        <li className="flex items-center justify-center">
                            <Link href="https://www.instagram.com/rafael_breschi/" target="_blank" className="p-2.5 border dark:border-zinc-800 dark:bg-zinc-950 hover:bg-zinc-700/5 dark:hover:bg-zinc-50/5 text-zinc-600 dark:text-zinc-300 rounded-lg">
                                <FaInstagram />
                                <span className="sr-only">Instagram</span>
                            </Link>
                        </li>
                        <li className="flex items-center justify-center">
                            <Link href="https://steamcommunity.com/id/perfilRzz/" target="_blank" className="p-2.5 border dark:border-zinc-800 dark:bg-zinc-950 hover:bg-zinc-700/5 dark:hover:bg-zinc-50/5 text-zinc-600 dark:text-zinc-300 rounded-lg">
                                <FaSteamSymbol />
                                <span className="sr-only">Steam</span>
                            </Link>
                        </li>
                        {/* <li className="flex items-center justify-center">
                            <Link href="/" target="_blank" className="p-2.5 border dark:border-zinc-800 dark:bg-zinc-950 hover:bg-zinc-700/5 dark:hover:bg-zinc-50/5 text-zinc-600 dark:text-zinc-300 rounded-lg">
                                <RiDiscordLine />
                                <span className="sr-only">Discord</span>
                            </Link>
                        </li> */}
                        <li className="flex items-center justify-center">
                            <Link href="https://github.com/rafaelRizzo" target="_blank" className="p-2.5 border dark:border-zinc-800 dark:bg-zinc-950 hover:bg-zinc-700/5 dark:hover:bg-zinc-50/5 text-zinc-600 dark:text-zinc-300 rounded-lg">
                                <TbBrandGithub />
                                <span className="sr-only">Github</span>
                            </Link>
                        </li>

                    </ul>

                    <Separator />

                    <div className="flex items-center justify-center min-h-6 max-h-6">
                        <span className="text-sm font-thin italic text-center text-muted-foreground">&copy; Rafael Rizzo ~ 2024</span>
                    </div>
                </div>

            </footer>
        </>
    );
}
