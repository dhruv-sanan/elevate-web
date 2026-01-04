"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle } from "lucide-react";

export function IdealClient() {
    return (
        <section className="w-full py-24 px-6 bg-background overflow-hidden">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

                {/* 1. NOT A FIT (Red) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="border border-red-500/20 bg-red-500/5 dark:bg-red-900/10 rounded-3xl p-8 md:p-12 hover:border-red-500/40 transition-colors"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <XCircle className="w-12 h-12 text-red-500" />
                        <h3 className="font-space-grotesk text-2xl md:text-3xl font-bold text-red-600 dark:text-red-400">
                            We're NOT the Right Fit If...
                        </h3>
                    </div>
                    <ul className="space-y-8">
                        <ClientPoint
                            title="You're looking for a ₹5,000 template website"
                            desc="Fiverr exists for a reason. We build custom systems that generate ROI, not disposable websites."
                            isGood={false}
                        />
                        <ClientPoint
                            title="You want it done in 2 days"
                            desc="Quality takes time. If you need instant, use a template builder."
                            isGood={false}
                        />
                        <ClientPoint
                            title="You want us to 'just make it pretty'"
                            desc="We're strategists, not decorators. Beauty without business results is worthless."
                            isGood={false}
                        />
                    </ul>
                </motion.div>

                {/* 2. BUILT FOR YOU (Green) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="border border-[#10b981]/20 bg-[#10b981]/5 dark:bg-[#10b981]/10 rounded-3xl p-8 md:p-12 hover:border-[#10b981]/40 transition-colors relative"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <CheckCircle className="w-12 h-12 text-[#10b981]" />
                        <h3 className="font-space-grotesk text-2xl md:text-3xl font-bold text-[#10b981]">
                            We're Built for You If...
                        </h3>
                    </div>
                    <ul className="space-y-8">
                        <ClientPoint
                            title="You're a serious owner ready to scale"
                            desc="You've been running for 2+ years. You have regulars. You're ready to go from 'good local spot' to 'Amritsar institution.'"
                            isGood={true}
                        />
                        <ClientPoint
                            title="You want to stop losing money to Zomato"
                            desc="You're tired of 40% commissions eating your profits. You want to own your customers."
                            isGood={true}
                        />
                        <ClientPoint
                            title="You value quality and understand ROI"
                            desc="You see your website as an investment that pays for itself in saved commissions within 2-3 months."
                            isGood={true}
                        />
                    </ul>
                </motion.div>

            </div>
        </section>
    );
}

function ClientPoint({ title, desc, isGood }: { title: string, desc: string, isGood: boolean }) {
    return (
        <li className="flex flex-col gap-2">
            <h4 className={`font-space-grotesk font-bold text-lg ${isGood ? 'text-foreground' : 'text-foreground'}`}>
                {title}
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
                → {desc}
            </p>
        </li>
    )
}
