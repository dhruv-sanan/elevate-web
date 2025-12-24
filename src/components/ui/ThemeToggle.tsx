"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="fixed top-8 right-8 z-50 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-3 hover:scale-110 transition-all cursor-pointer"
            aria-label="Toggle Theme"
        >
            {theme === "dark" ? (
                <Sun className="w-6 h-6 text-yellow-400" />
            ) : (
                <Moon className="w-6 h-6 text-gray-700" />
            )}
        </button>
    )
}
