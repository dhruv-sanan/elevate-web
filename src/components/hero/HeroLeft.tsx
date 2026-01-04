"use client"

import { Sparkles, Eye, Calendar, Check } from "lucide-react"
import { motion, Variants } from "framer-motion"

export function HeroLeft() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Faster stagger
                delayChildren: 0.1,   // Faster start
                duration: 0.5
            }
        }
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.215, 0.610, 0.355, 1.000] // cubic-bezier for smooth pop
            }
        }
    }

    return (
        <motion.div
            className="flex flex-col items-start gap-6 max-w-2xl relative z-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* 01. EYEBROW TEXT */}
            <motion.div
                variants={itemVariants}
                className="flex items-center gap-2 text-sm md:text-base text-[#00d9a3] font-medium tracking-wide uppercase"
            >
                <Sparkles className="w-4 h-4" />
                <span>For Restaurants • Cafés • Hotels in Amritsar</span>
            </motion.div>

            {/* 02. HERO HEADLINE */}
            <motion.h1
                variants={itemVariants}
                className="font-space-grotesk text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground"
            >
                <span className="block dark:hidden">
                    Stop Paying <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">40% Commission</span> to Zomato.
                    <br />
                    Keep <span className="bg-gradient-to-r from-[#00d9a3] to-emerald-400 bg-clip-text text-transparent">100% Revenue.</span>
                </span>
                <span className="hidden dark:block">
                    Stop Paying <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">40% Commission</span> to Zomato.
                    <br />
                    Keep <span className="bg-gradient-to-r from-[#00d9a3] to-emerald-400 bg-clip-text text-transparent">100% Revenue.</span>
                </span>
            </motion.h1>

            {/* 03. SUBHEADLINE */}
            <motion.p
                variants={itemVariants}
                className="font-inter text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl"
            >
                We build premium websites with direct ordering, WhatsApp automation,
                and AI chatbots—helping restaurants, cafés, and hotels in Amritsar
                own their customer relationships and keep 100% of their revenue.
            </motion.p>

            {/* 04. CTA BUTTONS */}
            <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2"
            >
                <a
                    href="https://yummin.vercel.app/menu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#00d9a3] hover:bg-[#00c291] text-black font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,217,163,0.5)] cursor-pointer"
                >
                    <Eye className="w-5 h-5" />
                    See Live Demo
                </a>

                <a
                    href="https://calendly.com/dhruvsanan2001/free-website-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-black/10 dark:border-white/20 text-gray-900 dark:text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                    <Calendar className="w-5 h-5" />
                    Book a Free Call
                </a>
            </motion.div>

            {/* 05. TRUST INDICATORS */}
            <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-6 text-sm text-gray-500 mt-6"
            >
                {["Set up in 14 days", "Minimal monthly fees", "Amritsar-based support"].map((text) => (
                    <div key={text} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#00d9a3]" />
                        <span>{text}</span>
                    </div>
                ))}
            </motion.div>
        </motion.div>
    )
}
