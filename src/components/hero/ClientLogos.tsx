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
            <motion.div
                className="flex gap-12 w-max"
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
            <span className="text-xl md:text-2xl font-bold font-space-grotesk whitespace-nowrap text-gray-400 hover:text-[#00d9a3]">
                {name}
            </span>
        </div>
    )
}
