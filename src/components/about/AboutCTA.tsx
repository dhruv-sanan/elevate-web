"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export function AboutCTA() {
    return (
        <section className="w-full py-24 px-6 bg-gradient-to-br from-background to-[#00d9a3]/5">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-space-grotesk text-4xl md:text-5xl font-bold mb-6"
                >
                    Ready to Own Your Customers?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
                >
                    Book a 15-minute call with Ghanishth, or jump straight to WhatsApp. We'll show you exactly how we can help—no pressure, no sales pitch.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href="https://calendly.com/dhruvsanan2001/free-website-demo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 rounded-xl bg-[#00d9a3] hover:bg-[#00c291] text-black font-bold text-lg transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[#00d9a3]/20 flex items-center justify-center gap-2"
                    >
                        Book a Free Call <ArrowRight className="w-5 h-5" />
                    </a>
                    <a
                        href="https://wa.me/917973634588?text=Hi%20Ghanishth!%20I'd%20like%20to%20discuss%20a%20project."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 rounded-xl border-2 border-slate-200 dark:border-white/10 hover:border-[#00d9a3] hover:text-[#00d9a3] font-bold text-lg transition-all flex items-center justify-center gap-2"
                    >
                        Chat on WhatsApp <MessageCircle className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
