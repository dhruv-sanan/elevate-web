"use client";

import { MessageCircle, Phone, Mail, MapPin, Copy, ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ContactCards() {
    return (
        <div className="flex flex-col gap-6 w-full">
            {/* 1. WhatsApp Card (Primary) */}
            <WhatsAppCard />

            {/* 2. Phone Card */}
            <ContactCard
                icon={Phone}
                title="Call Us"
                subtitle="Mon-Sat, 9 AM - 8 PM IST"
                index={1}
            >
                <ContactDetail label="Dhruv (Tech)" value="+91 79019 19447" link="tel:+917901919447" />
                <ContactDetail label="Ghanishth (Biz)" value="+91 79736 34588" link="tel:+917973634588" />
            </ContactCard>

            {/* 3. Email Card */}
            <ContactCard
                icon={Mail}
                title="Email Us"
                subtitle="For detailed proposals"
                index={2}
            >
                <ContactDetail label="Dhruv" value="dhruvsanan01@gmail.com" link="mailto:dhruvsanan01@gmail.com" />
                <ContactDetail label="Ghanishth" value="gugamehra464@gmail.com" link="mailto:gugamehra464@gmail.com" />
            </ContactCard>

            {/* 4. Location Card */}
            <LocationCard />
        </div>
    );
}

function WhatsAppCard() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="group relative bg-gradient-to-br from-[#00d9a3]/10 to-[#10b981]/5 border-2 border-[#00d9a3]/30 rounded-2xl p-6 hover:border-[#00d9a3] transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,217,163,0.15)]"
        >
            <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-[#00d9a3] rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-[#00d9a3]/30 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-8 h-8 text-black animate-pulse" />
                </div>
                <div>
                    <h3 className="font-space-grotesk text-xl font-bold text-foreground">WhatsApp Us (Fastest!)</h3>
                    <p className="text-sm text-muted-foreground">Usually respond in &lt; 5 minutes</p>
                </div>
            </div>

            <div className="space-y-3">
                <a
                    href="https://wa.me/917901919447?text=Hi%20Dhruv!%20I'm%20interested%20in%20a%20commission-free%20website%20for%20my%20business."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-[#00d9a3]/20 border border-transparent hover:border-[#00d9a3]/50 transition-all group/btn"
                >
                    <div className="flex flex-col">
                        <span className="font-semibold text-sm">Chat with Dhruv →</span>
                        <span className="text-xs text-muted-foreground">Tech & Pricing</span>
                    </div>
                    <MessageCircle className="w-5 h-5 text-[#00d9a3] group-hover/btn:scale-110 transition-transform" />
                </a>

                <a
                    href="https://wa.me/917973634588?text=Hi%20Ghanishth!%20I'd%20like%20to%20discuss%20a%20website%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-[#00d9a3]/20 border border-transparent hover:border-[#00d9a3]/50 transition-all group/btn"
                >
                    <div className="flex flex-col">
                        <span className="font-semibold text-sm">Chat with Ghanishth →</span>
                        <span className="text-xs text-muted-foreground">Business & Marketing</span>
                    </div>
                    <MessageCircle className="w-5 h-5 text-[#00d9a3] group-hover/btn:scale-110 transition-transform" />
                </a>
            </div>
        </motion.div>
    )
}

function ContactCard({ icon: Icon, title, subtitle, children, index }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white dark:bg-slate-800/40 border border-black/5 dark:border-white/10 rounded-2xl p-6 hover:border-black/10 dark:hover:border-white/20 transition-all hover:translate-x-1"
        >
            <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-black/5 dark:bg-white/5 rounded-xl flex items-center justify-center text-foreground">
                    <Icon className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="font-bold text-foreground">{title}</h3>
                    <p className="text-xs text-muted-foreground">{subtitle}</p>
                </div>
            </div>
            <div className="space-y-4">
                {children}
            </div>
        </motion.div>
    )
}

function ContactDetail({ label, value, link }: any) {
    const [copied, setCopied] = useState(false);

    const handleCopy = (e: any) => {
        e.preventDefault();
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex items-center justify-between group">
            <div className="flex flex-col">
                <a href={link} className="font-space-grotesk font-semibold text-lg hover:text-[#00d9a3] transition-colors">
                    {value}
                </a>
                <span className="text-xs text-muted-foreground">{label}</span>
            </div>
            <button
                onClick={handleCopy}
                className="p-2 text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-all"
                title="Copy"
            >
                {copied ? <span className="text-xs text-green-500 font-bold">Copied!</span> : <Copy className="w-4 h-4" />}
            </button>
        </div>
    )
}

function LocationCard() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white dark:bg-slate-800/40 border border-black/5 dark:border-white/10 rounded-2xl p-6 hover:border-black/10 dark:hover:border-white/20 transition-all hover:translate-x-1"
        >
            <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-black/5 dark:bg-white/5 rounded-xl flex items-center justify-center text-foreground">
                    <MapPin className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="font-bold text-foreground">Visit Our Studio</h3>
                    <p className="text-xs text-muted-foreground">Based in Amritsar, Punjab</p>
                </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
                Serving all of Punjab & North India remotely.
            </p>
            <button
                onClick={() => document.getElementById('map-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-[#00d9a3] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
            >
                View on Maps <ArrowRight className="w-4 h-4" />
            </button>
        </motion.div>
    )
}
