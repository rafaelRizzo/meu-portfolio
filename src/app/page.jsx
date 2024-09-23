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

export default function Home() {
    const { theme } = useTheme();
    const [currentTheme, setCurrentTheme] = useState("");

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

                <h2 className="text-3xl font-semibold drop-shadow relative">Dev Full Stack</h2>


                <div className="absolute left-0 right-0 bottom-0 flex items-center justify-center p-5 text-4xl animate-bounce">
                    <MdOutlineKeyboardDoubleArrowDown />
                </div>

            </main>

            <section className={`max-w-5xl mx-auto px-5 my-20`}>
                <h3 className="text-center font-semibold text-4xl mb-5">Sobre</h3>
                <span className="text-muted-foreground -mt-5 mb-10 flex items-center justify-center">
                    Por onde tudo começou
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2">

                    <div className="about-img flex items-center justify-center md:justify-start">
                        <Image src={"/men.png"} width={280} height={400} className="drop-shadow" />
                    </div>

                    <div className="flex items-center tracking-wide text-lg">
                        <p className="text-center">Fascinado por como a tecnologia resolve problemas, ao longo do tempo me aperfeiçoei em transformar desafios em oportunidades. Sou um desenvolvedor Full Stack, combinando habilidades para criar aplicações que são ao mesmo tempo elegantes e funcionais!</p>
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
        </>
    );
}
