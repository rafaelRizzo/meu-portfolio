import { motion } from "motion/react"

import { BlurFade } from "@/components/magicui/blur-fade"
import { career } from "@/data/career"
import { cn } from "@/lib/utils"

export function Career() {
  return (
    <ol className="relative">
      <motion.span
        aria-hidden
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-border absolute top-2 bottom-2 left-[4.5px] w-px origin-top"
      />

      {career.map((item, i) => (
        <li key={`${item.company}-${item.title}`} className="relative pb-10 pl-8 last:pb-0">
          <span
            aria-hidden
            className={cn(
              "absolute top-[7px] left-0 size-2.5 rounded-full border",
              i === 0 ? "bg-foreground border-foreground" : "bg-background border-muted-foreground/50",
            )}
          />
          <BlurFade delay={i * 0.08} className="space-y-1">
            <p className="text-muted-foreground text-xs">{item.period}</p>
            <h3 className="text-base font-semibold tracking-tight">{item.title}</h3>
            <p className="text-sm">{item.company}</p>
            <p className="text-muted-foreground pt-1 text-sm leading-relaxed">{item.description}</p>
          </BlurFade>
        </li>
      ))}
    </ol>
  )
}
