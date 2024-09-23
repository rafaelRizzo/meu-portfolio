"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

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
        <div onClick={toggleTheme} aria-label={`Ativar modo ${theme === "dark" ? "claro" : "escuro"}`} className="cursor-pointer border border-zinc-50/40 hover:bg-zinc-50/10 rounded-full transition-all p-1 shadow">
            {theme === "dark" ? (
                <Sun className="h-5 w-5 drop-shadow" />
            ) : (
                <Moon className="h-5 w-5 drop-shadow" />
            )}
        </div>
    )
}
