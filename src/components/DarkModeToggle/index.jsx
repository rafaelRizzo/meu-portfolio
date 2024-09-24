"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "../ui/button"

export function DarkModeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // Define que o componente foi montado
    React.useEffect(() => {
        setMounted(true)
    }, [])

    // Evite renderizar antes do componente estar montado
    if (!mounted) return null

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <Button
            onClick={toggleTheme}
            aria-label={`Ativar modo ${theme === "dark" ? "claro" : "escuro"}`}
            className="cursor-pointer border max-w-10 min-w-10 max-h-10 min-h-10
            bg-zinc-950/5 hover:bg-zinc-950/10 border-zinc-950/30 text-zinc-800  
            dark:bg-zinc-50/10 dark:hover:bg-zinc-50/15 dark:border-zinc-50/35 dark:text-zinc-200  
        rounded-full transition-all p-1 shadow">
            {theme === "dark" ? (
                <Sun className="h-5 w-5 drop-shadow" />
            ) : (
                <Moon className="h-5 w-5 drop-shadow" />
            )}
        </Button>
    )
}
