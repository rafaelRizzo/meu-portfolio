import { motion, type HTMLMotionProps } from "motion/react"

type BlurFadeProps = Omit<HTMLMotionProps<"div">, "initial" | "animate" | "whileInView"> & {
  /** Atraso em segundos. */
  delay?: number
  duration?: number
  /** Deslocamento vertical inicial em px. */
  offset?: number
  blur?: string
  /** Anima ao entrar na viewport em vez de ao montar. */
  inView?: boolean
}

export function BlurFade({
  children,
  delay = 0,
  duration = 0.4,
  offset = 8,
  blur = "6px",
  inView = false,
  ...props
}: BlurFadeProps) {
  const hidden = { opacity: 0, y: offset, filter: `blur(${blur})` }
  const visible = { opacity: 1, y: 0, filter: "blur(0px)" }

  return (
    <motion.div
      initial={hidden}
      {...(inView
        ? { whileInView: visible, viewport: { once: true, margin: "-60px" } }
        : { animate: visible })}
      transition={{ delay, duration, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
