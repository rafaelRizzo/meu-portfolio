
import { SiAsterisk, SiFastify, SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandMysql } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiN8N } from "react-icons/si";
import { TfiGithub } from "react-icons/tfi";
import { FaDocker } from "react-icons/fa6";
import { FaLinux } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";

export const ListOfTecnologies = () => {
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
                className="bg-amber-600/15 dark:bg-amber-600/5 border dark:border-amber-600/10 text-amber-700 dark:text-amber-500"
            >
                <SiFastify />
                <span>Fastify</span>
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
                className="bg-blue-600/15 dark:bg-blue-600/5 border dark:border-blue-600/10 text-blue-700 dark:text-blue-500"
            >
                <BiLogoTailwindCss />
                <span>TAILWIND</span>
            </Badge>
            <Badge
                variant="secondary"
                className="bg-teal-600/15 dark:bg-teal-600/5 border dark:border-teal-600/10 text-teal-700 dark:text-teal-500"
            >
                <SiMongodb />
                <span>MongoDB</span>
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
                className="bg-cyan-600/15 dark:bg-cyan-600/5 border dark:border-cyan-600/10 text-cyan-700 dark:text-cyan-500"
            >
                <FaDocker />
                <span>DOCKER</span>
            </Badge>
            <Badge
                variant="secondary"
                className="bg-violet-600/15 dark:bg-violet-600/5 border dark:border-violet-600/10 text-violet-700 dark:text-violet-500"
            >
                <TfiGithub />
                <span>GITHUB</span>
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