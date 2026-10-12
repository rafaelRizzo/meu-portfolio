import type { ReactNode } from "react"
import {
  SiAsterisk,
  SiClaude,
  SiDrizzle,
  SiFastify,
  SiMongodb,
  SiN8N,
  SiNginx,
  SiPrisma,
  SiRabbitmq,
  SiScalar,
  SiTraefikproxy,
  SiVite,
} from "react-icons/si"
import { IoLogoNodejs } from "react-icons/io5"
import { RiNextjsFill } from "react-icons/ri"
import { BiLogoTailwindCss, BiLogoPostgresql } from "react-icons/bi"
import { TbBrandMysql } from "react-icons/tb"
import { TfiGithub } from "react-icons/tfi"
import { FaDocker, FaLinux } from "react-icons/fa6"

export type Tech = {
  label: string
  icon: ReactNode
  /**
   * Classes completas (o Tailwind precisa enxergar cada uma literalmente).
   * Light: fundo suave, sem borda. Dark: fundo e borda na mesma cor sólida (--tint a 10% sobre o fundo, ver header.tsx).
   */
  className: string
}

export const stack: Tech[] = [
  {
    label: "ASTERISK",
    icon: <SiAsterisk />,
    className:
      "bg-amber-600/15 text-amber-700 dark:[--tint:var(--color-amber-600)] dark:text-amber-400",
  },
  {
    label: "CLAUDE CODE",
    icon: <SiClaude />,
    className:
      "bg-orange-600/15 text-orange-700 dark:[--tint:var(--color-orange-600)] dark:text-orange-400",
  },
  {
    label: "DOCKER",
    icon: <FaDocker />,
    className:
      "bg-blue-600/15 text-blue-700 dark:[--tint:var(--color-blue-600)] dark:text-blue-400",
  },
  {
    label: "DRIZZLE",
    icon: <SiDrizzle />,
    className:
      "bg-lime-600/15 text-lime-700 dark:[--tint:var(--color-lime-600)] dark:text-lime-400",
  },
  {
    label: "FASTIFY",
    icon: <SiFastify />,
    className:
      "bg-slate-600/15 text-slate-700 dark:[--tint:var(--color-slate-600)] dark:text-slate-400",
  },
  {
    label: "GITHUB",
    icon: <TfiGithub />,
    className:
      "bg-violet-600/15 text-violet-700 dark:[--tint:var(--color-violet-600)] dark:text-violet-400",
  },
  {
    label: "LINUX",
    icon: <FaLinux />,
    className:
      "bg-stone-600/15 text-stone-700 dark:[--tint:var(--color-stone-600)] dark:text-stone-400",
  },
  {
    label: "MONGODB",
    icon: <SiMongodb />,
    className:
      "bg-teal-600/15 text-teal-700 dark:[--tint:var(--color-teal-600)] dark:text-teal-400",
  },
  {
    label: "MYSQL",
    icon: <TbBrandMysql />,
    className:
      "bg-fuchsia-600/15 text-fuchsia-700 dark:[--tint:var(--color-fuchsia-600)] dark:text-fuchsia-400",
  },
  {
    label: "N8N",
    icon: <SiN8N />,
    className:
      "bg-rose-600/15 text-rose-700 dark:[--tint:var(--color-rose-600)] dark:text-rose-400",
  },
  {
    label: "NEXT.JS",
    icon: <RiNextjsFill />,
    className:
      "bg-zinc-600/15 text-zinc-700 dark:[--tint:var(--color-zinc-600)] dark:text-zinc-400",
  },
  {
    label: "NGINX",
    icon: <SiNginx />,
    className:
      "bg-emerald-600/15 text-emerald-700 dark:[--tint:var(--color-emerald-600)] dark:text-emerald-400",
  },
  {
    label: "NODE.JS",
    icon: <IoLogoNodejs />,
    className:
      "bg-green-600/15 text-green-700 dark:[--tint:var(--color-green-600)] dark:text-green-400",
  },
  {
    label: "POSTGRES",
    icon: <BiLogoPostgresql />,
    className:
      "bg-indigo-600/15 text-indigo-700 dark:[--tint:var(--color-indigo-600)] dark:text-indigo-400",
  },
  {
    label: "PRISMA",
    icon: <SiPrisma />,
    className:
      "bg-pink-600/15 text-pink-700 dark:[--tint:var(--color-pink-600)] dark:text-pink-400",
  },
  {
    label: "RABBITMQ",
    icon: <SiRabbitmq />,
    className:
      "bg-red-600/15 text-red-700 dark:[--tint:var(--color-red-600)] dark:text-red-400",
  },
  {
    label: "SCALAR",
    icon: <SiScalar />,
    className:
      "bg-yellow-600/15 text-yellow-700 dark:[--tint:var(--color-yellow-600)] dark:text-yellow-400",
  },
  {
    label: "TAILWIND",
    icon: <BiLogoTailwindCss />,
    className:
      "bg-sky-600/15 text-sky-700 dark:[--tint:var(--color-sky-600)] dark:text-sky-400",
  },
  {
    label: "TRAEFIK",
    icon: <SiTraefikproxy />,
    className:
      "bg-cyan-600/15 text-cyan-700 dark:[--tint:var(--color-cyan-600)] dark:text-cyan-400",
  },
  {
    label: "VITE",
    icon: <SiVite />,
    className:
      "bg-purple-600/15 text-purple-700 dark:[--tint:var(--color-purple-600)] dark:text-purple-400",
  },
]
