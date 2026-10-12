import { motion } from "motion/react"

import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler"
import { BlurFade } from "@/components/magicui/blur-fade"
import { Badge } from "@/components/ui/badge"
import { profile } from "@/data/profile"
import { stack } from "@/data/stack"
import { cn } from "@/lib/utils"

export function Header() {
  return (
    <header className="space-y-6">
      <BlurFade className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">./{profile.name}</h1>
          <p className="text-muted-foreground mt-1 text-sm">{profile.role}</p>
        </div>
        <AnimatedThemeToggler />
      </BlurFade>

      <ul className="flex flex-wrap gap-2" aria-label="Stack">
        {stack.map((tech, i) => (
          <motion.li
            key={tech.label}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.03, duration: 0.3, ease: "easeOut" }}
          >
            <Badge
              className={cn(
                "border dark:border-(--badge-solid) dark:bg-(--badge-solid) dark:[--badge-solid:color-mix(in_oklab,var(--tint)_10%,var(--background))]",
                tech.className,
              )}
            >
              {tech.icon}
              <span>{tech.label}</span>
            </Badge>
          </motion.li>
        ))}
      </ul>
    </header>
  )
}
