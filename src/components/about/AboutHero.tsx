"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import Image from "next/image";

export function AboutHero() {
    return (
        <section className="relative w-full pt-32 pb-20 px-6 overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">

                {/* LEFT: TEXT */}
                <div className="flex-1 space-y-8 text-center lg:text-left">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="font-inter text-sm font-semibold tracking-wider uppercase text-[#00d9a3]"
                    >
                        // ABOUT ELEVATEWEB
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="font-space-grotesk text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                    >
                        We're Dhruv <br className="hidden lg:block" />& Ghanishth. <br />
                        We Help Amritsar's Restaurants <br className="hidden lg:block" />
                        <span className="text-[#00d9a3]">Stop Paying Zomato.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-inter text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0"
                    >
                        Two developers, one mission: Give Punjab's hospitality businesses the tools to own their customers and keep 100% of their revenue. No commissions. No middlemen. Just direct orders, bookings, and growth.
                    </motion.p>

                    {/* STATS */}
                    <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-8 sm:gap-12 pt-4">
                        <StatItem end={127} suffix="+" label="Businesses Served" />
                        <StatItem end={7} suffix=" Days" label="Average Setup" />
                        <StatItem end={2.5} suffix="Cr+" label="Saved in Commissions" decimals={1} prefix="₹" />
                    </div>
                </div>

                {/* RIGHT: IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 w-full max-w-lg lg:max-w-none relative"
                >
                    {/* Placeholder for combined image or individual/fallback if no combined image exists */}
                    <div className="aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                        <Image
                            src="/Dhruv_Sanan.png"
                            alt="Dhruv & Ghanishth"
                            fill
                            className="object-cover"
                        />
                        {/* 
                           NOTE: Since user provided two individual images but asked for a 'Team Photo', 
                           I'm using Dhruv's here just as a placeholder or assuming maybe they want a collage.
                           Ideally we'd composite them or have a single team photo. 
                           For now, let's try to show both in a split if possible or just one main "hero" shot if available.
                           Since user said "Team photo: Professional photo of you two... OR Split image", 
                           let's try a split image layout using CSS grid inside this container.
                        */}
                        <div className="hidden absolute inset-0 md:grid grid-cols-2 h-full">
                            <div className="relative h-full">
                                <Image src="/Dhruv_Sanan.png" alt="Dhruv Sanan" fill className="object-cover" />
                            </div>
                            <div className="relative h-full">
                                <Image src="/Ghanishth_Mehra.jpg" alt="Ghanishth Mehra" fill className="object-cover" />
                            </div>
                        </div>
                        {/* Mobile stacked fallback or single visible */}
                        <div className="md:hidden absolute inset-0">
                            <Image src="/Dhruv_Sanan.png" alt="Team" fill className="object-cover" />
                        </div>
                    </div>
                    {/* Floating Badge */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6, type: "spring" }}
                        className="absolute -bottom-6 -left-6 lg:-left-10 bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-xl border border-black/5"
                    >
                        <p className="font-bold text-lg">Amritsar 📍</p>
                        <p className="text-sm text-muted-foreground">Born & Raised</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

function StatItem({ end, suffix = "", label, decimals = 0, prefix = "" }: any) {
    return (
        <div className="text-center lg:text-left">
            <h3 className="font-space-grotesk text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                {prefix}
                <CountUp end={end} duration={2.5} decimals={decimals} enableScrollSpy scrollSpyOnce />
                {suffix}
            </h3>
            <p className="text-sm text-muted-foreground uppercase tracking-wide font-medium mt-1">{label}</p>
        </div>
    )
}
