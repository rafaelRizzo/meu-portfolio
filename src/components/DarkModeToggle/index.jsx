"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function DarkModeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // UseEffect para definir que o componente foi montado
    React.useEffect(() => {
        setMounted(true)
    }, [])

    // Evite renderizar antes do componente estar montado
    if (!mounted) return null

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <div onClick={toggleTheme} className="cursor-pointer p-2">
            {theme === "dark" ? (
                <Sun className="h-6 w-6" />
            ) : (
                <Moon className="h-6 w-6" />
            )}
        </div>
    )
}
