"use client";

import { motion } from "framer-motion";

export function ContactHero() {
    return (
        <section className="relative w-full py-24 md:py-32 px-6 flex flex-col items-center text-center bg-background">
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="font-inter text-sm font-semibold tracking-wider uppercase text-[#00d9a3] mb-6"
            >
                // GET IN TOUCH
            </motion.p>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-space-grotesk text-4xl md:text-6xl font-bold leading-tight text-foreground mb-6 max-w-4xl"
            >
                Let's Turn Your Customers Into <br className="hidden md:block" />
                <span className="text-[#00d9a3]">YOUR Customers</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-inter text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8"
            >
                Ready to stop paying 40% commission? Book a free 15-minute discovery call or drop us a message on WhatsApp. We respond in under 5 minutes.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex items-center gap-2 font-inter text-sm text-muted-foreground/80 bg-black/5 dark:bg-white/5 py-2 px-4 rounded-full border border-black/5 dark:border-white/10"
            >
                <span>📍 Based in Amritsar</span>
                <span className="w-1 h-1 rounded-full bg-current opacity-50" />
                <span>🕐 Available Mon-Sat, 9 AM - 8 PM IST</span>
            </motion.div>
        </section>
    );
}
