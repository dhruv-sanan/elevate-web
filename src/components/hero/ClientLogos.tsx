"use client"

import { cn } from "@/lib/utils"

const clients = [
    "Tamra Restaurant",
    "Golden Fork Café",
    "Bakeman Cake & Pastry Palace",
    "Heritage Hotel",
    "Amritsari Kulcha Hub",
    "Café Nomad"
]

import { motion } from "framer-motion"

export function ClientLogos() {
    return (
        <div className="w-full overflow-hidden bg-white/5 backdrop-blur-xl border-y border-white/10 py-6 relative z-10">
            {/* Gradient masks for smooth fade effect at edges */}
            <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

            <motion.div
                className="flex gap-8 md:gap-12 w-max"
                animate={{ x: ["0%", "-33.33%"] }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            >
                {/* Original */}
                {clients.map((client, i) => (
                    <LogoItem key={`orig-${i}`} name={client} />
                ))}
                {/* Duplicate */}
                {clients.map((client, i) => (
                    <LogoItem key={`dup-${i}`} name={client} />
                ))}
                {/* Triplicate (for safety on wide screens) */}
                {clients.map((client, i) => (
                    <LogoItem key={`trip-${i}`} name={client} />
                ))}
            </motion.div>
        </div>
    )
}

function LogoItem({ name }: { name: string }) {
    return (
        <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer">
            <span className="text-lg sm:text-xl md:text-2xl font-bold font-space-grotesk whitespace-nowrap text-gray-400 hover:text-[#00d9a3] px-2 md:px-0">
                {name}
            </span>
        </div>
    )
}
