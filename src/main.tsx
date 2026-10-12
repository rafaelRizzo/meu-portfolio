import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { MotionConfig } from "motion/react"

import "./index.css"
import App from "./App"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { trackInputModality } from "@/lib/input-modality"

trackInputModality()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <TooltipProvider>
          <App />
        </TooltipProvider>
      </MotionConfig>
    </ThemeProvider>
  </StrictMode>,
)
