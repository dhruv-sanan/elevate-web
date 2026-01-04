"use client";

import { Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CalendlyWidget() {
    return (
        <section className="max-w-4xl mx-auto px-6 py-20 md:py-32">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl overflow-hidden"
            >
                <div className="p-8 md:p-12 text-center border-b border-black/5 dark:border-white/10">
                    <p className="font-inter text-sm font-semibold tracking-wider uppercase text-[#00d9a3] mb-4">
                        // BOOK A CALL
                    </p>
                    <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold mb-4">
                        Not Ready to Commit? Let's Talk First
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                        Book a free 15-minute call. We'll discuss your business, show you demos, and explain how we can help you go commission-free.
                    </p>
                </div>

                <div className="p-8 md:p-12 bg-white dark:bg-[#0a0a0a] flex flex-col items-center">
                    {/* Fallback button since inline widget might need script loading which can be tricky in Next.js without resizing issues */}
                    <a
                        href="https://calendly.com/dhruvsanan2001/free-website-demo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-4 p-8 md:p-12 border-2 border-dashed border-black/10 dark:border-white/10 rounded-2xl hover:border-[#00d9a3] hover:bg-[#00d9a3]/5 transition-all duration-300 w-full max-w-lg cursor-pointer"
                    >
                        <div className="w-16 h-16 bg-[#00d9a3]/10 text-[#00d9a3] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Calendar className="w-8 h-8" />
                        </div>
                        <div className="text-center space-y-2">
                            <h3 className="font-bold text-xl">Schedule Discovery Call</h3>
                            <p className="text-sm text-muted-foreground">Select a time that works for you on Calendly</p>
                        </div>
                        <span className="inline-flex items-center gap-2 font-bold text-[#00d9a3] mt-2 group-hover:gap-3 transition-all">
                            Book a Free Call <ArrowRight className="w-5 h-5" />
                        </span>
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
