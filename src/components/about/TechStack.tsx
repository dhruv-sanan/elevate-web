"use client";

import { motion } from "framer-motion";
import {
    Atom,
    Database,
    Palette,
    Box,
    Wind,
    Smartphone,
    Server,
    Zap
} from "lucide-react";

export function TechStack() {
    const tech = [
        { icon: Atom, name: "Next.js 14" },
        { icon: Box, name: "React" },
        { icon: Wind, name: "Tailwind CSS" },
        { icon: Box, name: "Three.js" },
        { icon: Zap, name: "Framer Motion" },
        { icon: Smartphone, name: "WhatsApp API" },
        { icon: Database, name: "Supabase" },
        { icon: Server, name: "Vercel" },
    ];

    return (
        <section className="w-full py-24 px-6 bg-[#0f172a] text-white">
            <div className="max-w-6xl mx-auto text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-[#00d9a3] font-semibold tracking-wider text-sm md:text-base uppercase mb-4"
                >
                    // BUILT WITH CUTTING-EDGE TECH
                </motion.p>
                <h2 className="font-space-grotesk text-3xl md:text-5xl font-bold mb-6">
                    The Tools That Power Your Web App
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto mb-16 text-lg">
                    We don't use WordPress templates. Every web app is custom-built with modern technologies for speed, security, and scalability.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {tech.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center gap-4 group"
                        >
                            <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-[#00d9a3] group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                                <item.icon className="w-10 h-10" />
                            </div>
                            <span className="font-space-grotesk font-semibold text-lg text-slate-300 group-hover:text-white transition-colors">{item.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
