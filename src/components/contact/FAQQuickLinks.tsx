"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, DollarSign, Clock, Wrench, HelpCircle } from "lucide-react";

export function FAQQuickLinks() {
    const links = [
        { icon: DollarSign, text: "How much does it cost?", href: "/pricing" },
        { icon: Clock, text: "How long does setup take?", href: "/timeline" },
        { icon: HelpCircle, text: "Can I manage it myself?", href: "/#faq" },
    ];

    return (
        <section className="max-w-5xl mx-auto px-6 pb-24 md:pb-32">
            <h3 className="text-center font-space-grotesk text-2xl font-bold mb-10 text-muted-foreground">
                Common Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {links.map((link, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Link
                            href={link.href}
                            className="flex items-center justify-between p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-transparent hover:border-[#00d9a3] hover:shadow-lg hover:shadow-[#00d9a3]/10 transition-all group"
                        >
                            <div className="flex items-center gap-3">
                                <link.icon className="w-5 h-5 text-[#00d9a3]" />
                                <span className="text-sm font-medium">{link.text}</span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-[#00d9a3] group-hover:translate-x-1 transition-all" />
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
