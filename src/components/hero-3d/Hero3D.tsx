"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { CafeVibeToggle } from "./CafeVibeToggle"
import { IPhone3D } from "./IPhone3D"

export function Hero3D() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden bg-orange-50/50 dark:bg-zinc-950 transition-colors duration-500">

            {/* Background Ambient Gradients */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-orange-100/40 to-transparent dark:from-indigo-950/20 dark:to-transparent pointer-events-none" />
            <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-orange-200/30 dark:bg-purple-900/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-100/30 dark:bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 pt-24 min-h-screen flex flex-col lg:flex-row items-center relative z-10">

                {/* Left Content */}
                <div className="w-full lg:w-1/2 flex flex-col items-start gap-8 z-20">

                    {/* Top Tag */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-4"
                    >
                        <CafeVibeToggle />
                        <span className="hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 dark:bg-white/5 border border-amber-200/50 dark:border-white/10 text-xs font-bold text-amber-700 dark:text-amber-300 uppercase tracking-wider backdrop-blur-sm">
                            <Sparkles size={12} />
                            Amritsar's Digital Partner
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <div className="space-y-2">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1]"
                        >
                            Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 italic pr-2">Digital</span> <br />
                            Experiences for <br />
                            Cafés & Bakeries.
                        </motion.h1>
                    </div>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed"
                    >
                        Turn casual visitors into loyal regulars with a stunning digital menu and seamless ordering experience.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex items-center gap-4 pt-4"
                    >
                        <button className="group relative px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 active:scale-95 flex items-center gap-2">
                            See Demos
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="absolute bottom-10 left-4 md:left-6 text-sm text-gray-400 font-medium flex flex-col items-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                    >
                        <span>Scroll to discover the real power</span>
                        <motion.div
                            animate={{ y: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="text-orange-500"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5" /></svg>
                        </motion.div>
                    </motion.div>

                </div>

                {/* Right Visual (3D Phone) */}
                <div className="w-full lg:w-1/2 h-[600px] lg:h-auto flex items-center justify-center relative pointer-events-none lg:pointer-events-auto mt-10 lg:mt-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{
                            duration: 1,
                            type: "spring",
                            bounce: 0.2
                        }}
                    >
                        <IPhone3D />
                    </motion.div>

                    {/* Decorative Blurs behind phone */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-200/20 dark:bg-orange-500/10 rounded-full blur-3xl -z-10" />
                </div>

            </div>
        </section>
    )
}
