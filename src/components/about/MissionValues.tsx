"use client";

import { motion } from "framer-motion";
import { Target, Gem, Handshake } from "lucide-react";

export function MissionValues() {
    return (
        <section className="w-full py-24 px-6 bg-black/5 dark:bg-white/5">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                <ValueCard
                    icon={Target}
                    title="Our Mission"
                    description="Eliminate commission dependency for Punjab's hospitality industry. Every restaurant, café, and hotel should own their customer relationships—not rent them from aggregators."
                    delay={0}
                />

                <ValueCard
                    icon={Gem}
                    title="Quality Over Quantity"
                    description="We turn away 60% of inquiries. Not because we're arrogant—because bad-fit clients waste your time and ours. We only work with serious owners ready to invest in their digital future."
                    delay={0.1}
                />

                <ValueCard
                    icon={Handshake}
                    title="Transparent Pricing"
                    description="No hidden fees. No surprise charges. No 'contact us for quote' nonsense. You know exactly what you're paying from day one—because that's how business should work."
                    delay={0.2}
                />

            </div>
        </section>
    );
}

function ValueCard({ icon: Icon, title, description, delay }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="flex flex-col items-center text-center p-8 rounded-2xl bg-background border border-black/5 dark:border-white/5 group hover:border-[#00d9a3]/30 hover:-translate-y-2 transition-all duration-300"
        >
            <div className="w-16 h-16 rounded-2xl bg-[#00d9a3]/10 flex items-center justify-center text-[#00d9a3] mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-8 h-8" />
            </div>
            <h3 className="font-space-grotesk text-2xl font-bold mb-4">{title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{description}</p>
        </motion.div>
    )
}
