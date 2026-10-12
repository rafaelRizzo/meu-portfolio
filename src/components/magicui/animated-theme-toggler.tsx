import { useRef } from "react"
import { flushSync } from "react-dom"
import { Moon, Sun } from "lucide-react"

import { useTheme } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

type AnimatedThemeTogglerProps = React.ComponentProps<"button"> & {
  /** Duração da revelação circular, em ms. */
  duration?: number
}

export function AnimatedThemeToggler({ className, duration = 450, ...props }: AnimatedThemeTogglerProps) {
  const { theme, toggleTheme } = useTheme()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const isDark = theme === "dark"

  const handleClick = async () => {
    const button = buttonRef.current
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (!button || reduceMotion || !document.startViewTransition) {
      toggleTheme()
      return
    }

    const transition = document.startViewTransition(() => {
      flushSync(toggleTheme)
    })
    await transition.ready

    const { top, left, width, height } = button.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const radius = Math.hypot(Math.max(left, window.innerWidth - left), Math.max(top, window.innerHeight - top))

    document.documentElement.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
      { duration, easing: "ease-in-out", pseudoElement: "::view-transition-new(root)" },
    )
  }

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={handleClick}
      aria-label="Alternar tema"
      className={cn(
        "text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:ring-ring/50 inline-flex size-9 cursor-pointer items-center justify-center rounded-md transition-colors outline-none focus-visible:ring-[3px]",
        className,
      )}
      {...props}
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  )
}
