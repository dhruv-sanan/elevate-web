"use client"

import { useTheme } from "@/components/theme-provider"
import { motion, AnimatePresence } from "framer-motion"
import { Coffee, Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function CafeVibeToggle() {
    const { theme, toggleTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const isDark = theme === "dark"

    return (
        <motion.button
            className="group relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-md border border-stone-200 dark:border-white/10 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 z-50 cursor-pointer overflow-hidden"
            onClick={toggleTheme}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
        >
            {/* Background Gradient Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-100/50 to-amber-100/50 dark:from-indigo-900/30 dark:to-purple-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Icon Switcher */}
            <div className="relative w-6 h-6">
                <AnimatePresence mode="wait">
                    {isDark ? (
                        <motion.div
                            key="dark"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0 flex items-center justify-center text-amber-300"
                        >
                            <Moon className="w-5 h-5 fill-current" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="light"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0 flex items-center justify-center text-orange-600"
                        >
                            <Coffee className="w-5 h-5" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Text Label */}
            <span className="relative font-medium text-sm text-stone-800 dark:text-stone-200 tracking-wide group-hover:text-orange-600 dark:group-hover:text-amber-300 transition-colors">
                {isDark ? "Evening Vibe" : "Café Vibe"}
            </span>

            {/* Sparkle Effect */}
            <motion.div
                className="absolute -right-1 -top-1"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
                {/* <Sparkles className="w-3 h-3 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" /> */}
            </motion.div>
        </motion.button>
    )
}
