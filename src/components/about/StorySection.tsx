"use client";

import { motion } from "framer-motion";

export function StorySection() {
    return (
        <section className="w-full py-24 px-6 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5">
            <div className="max-w-3xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-space-grotesk text-3xl md:text-4xl font-bold mb-12 text-center"
                >
                    Why We Built ElevateWeb
                </motion.h2>

                <div className="space-y-8 font-inter text-lg md:text-xl leading-relaxed text-muted-foreground">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        We've watched too many incredible Amritsar restaurants struggle. Places serving authentic Punjabi food, making customers happy—but <strong className="text-foreground">losing 40% of every order to Delivery Partners.</strong>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-background border-l-4 border-[#00d9a3] pl-6 py-2 my-8 italic text-foreground text-xl md:text-2xl font-medium"
                    >
                        "These businesses didn't need another aggregator. They needed their own digital presence."
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        When we saw a family-run dhaba paying ₹60,000/month in commissions, something clicked. They needed a website that takes orders, sends WhatsApp confirmations, and puts them in control.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        So we built ElevateWeb. Not as a generic web agency, but as Punjab's hospitality-focused tech partner. We speak your language (literally—Punjabi, Hindi, English). We understand your business. And we're obsessed with one goal: <strong className="text-[#00d9a3] font-semibold">helping you keep every rupee you earn.</strong>
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
