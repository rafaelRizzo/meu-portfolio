import { BiLogoInstagramAlt } from "react-icons/bi"
import { FaLinkedin } from "react-icons/fa6"
import { TfiGithub } from "react-icons/tfi"

import { BlurFade } from "@/components/magicui/blur-fade"
import { RainbowButton } from "@/components/magicui/rainbow-button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { profile } from "@/data/profile"

const icons = {
  Instagram: BiLogoInstagramAlt,
  Github: TfiGithub,
  Linkedin: FaLinkedin,
} as const

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-6 border-t pt-10">
      <BlurFade inView>
        <RainbowButton asChild>
          <a href={profile.contactUrl} target="_blank" rel="noopener noreferrer">
            Entrar em contato
          </a>
        </RainbowButton>
      </BlurFade>

      <ul className="text-muted-foreground flex items-center gap-1">
        {profile.socials.map(({ label, href }) => {
          const Icon = icons[label]
          return (
            <li key={label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="hover:bg-accent hover:text-foreground block rounded-md p-2 transition-colors"
                  >
                    <Icon className="size-4" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>{label}</TooltipContent>
              </Tooltip>
            </li>
          )
        })}
      </ul>

      <p className="text-muted-foreground text-xs italic">
        © {new Date().getFullYear()} Rafael Rizzo. Todos os direitos reservados.
      </p>
    </footer>
  )
}
