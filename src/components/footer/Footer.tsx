"use client"

import {
    Sparkles,
    MessageCircle,
    Calendar,
    Zap,
    Instagram,
    Linkedin,
    Github,
    Phone,
    Mail,
    MapPin,
    Clock,
    Heart,
    Code,
    ArrowUp
} from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <footer className={cn(
            "relative w-full border-t",
            "bg-gradient-to-t from-gray-100 via-white to-white/50 border-gray-200", // Light
            "dark:bg-gradient-to-t dark:from-black dark:via-gray-900 dark:to-gray-900/50 dark:border-white/10" // Dark
        )}>
            {/* TIER 1: MAIN CTA SECTION */}
            <div className="w-full border-b border-gray-200 dark:border-white/10">
                <div className="container max-w-5xl mx-auto px-6 py-20 text-center">
                    <p className="flex items-center justify-center gap-2 font-inter text-sm md:text-base text-[#00d9a3] font-medium tracking-wide uppercase mb-4">
                        <Sparkles className="w-4 h-4" />
                        STOP LOSING 40% TO ZOMATO
                    </p>

                    <h2 className="font-space-grotesk text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
                        Ready to Keep 100% of <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-[#00d9a3] to-emerald-400 bg-clip-text text-transparent">
                            Your Revenue?
                        </span>
                    </h2>

                    <p className="font-inter text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
                        Book a 15-minute call. I&apos;ll show you exactly how much you&apos;re losing—
                        and how my system can save you ₹70,000+ per month.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
                        {/* Primary: WhatsApp */}
                        <a
                            href="https://wa.me/919876543210?text=Hi%20Dhruv,%20I%20want%20to%20stop%20paying%20Zomato%20commission"
                            className="relative group flex items-center gap-3 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white font-inter font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(37,211,102,0.4)]"
                        >
                            <MessageCircle className="w-5 h-5" />
                            WhatsApp Me Now
                            <span className="absolute top-3 right-3 w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_#4ade80]" />
                        </a>

                        {/* Secondary: Book Call */}
                        <a
                            href="#"
                            className="flex items-center gap-3 bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 text-foreground font-inter font-semibold px-8 py-4 rounded-xl text-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5"
                        >
                            <Calendar className="w-5 h-5" />
                            Book 15-Min Call
                        </a>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        {[
                            { value: "₹70K+", label: "Avg Monthly Savings" },
                            { value: "7 Days", label: "Setup Time" },
                            { value: "100%", label: "Revenue Kept" }
                        ].map((stat) => (
                            <div key={stat.label} className="text-center min-w-[120px]">
                                <p className="font-space-grotesk text-3xl md:text-4xl font-bold text-[#00d9a3] mb-1">
                                    {stat.value}
                                </p>
                                <p className="font-inter text-sm text-muted-foreground">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* TIER 2: NAVIGATION & INFO GRID */}
            <div className="w-full bg-foreground/5 bg-opacity-50 dark:bg-black/20">
                <div className="container max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                        {/* Column 1: Brand */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="flex items-center gap-2 font-space-grotesk text-2xl font-bold text-foreground mb-2">
                                    <Zap className="w-6 h-6 text-[#00d9a3]" />
                                    ElevateWeb
                                </h3>
                                <p className="font-inter text-sm text-muted-foreground">
                                    Amritsar&apos;s #1 Web Studio for Restaurants, Cafés & Hotels
                                </p>
                            </div>

                            <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                                I build commission-free ordering systems that help food & hospitality
                                businesses keep 100% of their revenue—no Zomato, no middlemen.
                            </p>

                            <div className="flex gap-4">
                                {[
                                    { icon: Instagram, label: "Instagram" },
                                    { icon: Linkedin, label: "LinkedIn" },
                                    { icon: MessageCircle, label: "WhatsApp" },
                                    { icon: Github, label: "GitHub" }
                                ].map((social) => (
                                    <a
                                        key={social.label}
                                        href="#"
                                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-foreground/5 border border-foreground/10 text-muted-foreground hover:bg-[#00d9a3] hover:border-[#00d9a3] hover:text-black transition-all duration-300 hover:-translate-y-1"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>

                            {/* Newsletter Signup */}
                            <div className="pt-6">
                                <h5 className="font-inter text-sm font-semibold text-foreground mb-3">
                                    Free Marketing Tips
                                </h5>
                                <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                                    <input
                                        type="email"
                                        placeholder="your@email.com"
                                        className="flex-1 bg-background/50 border border-foreground/10 rounded-lg px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#00d9a3] transition-colors"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-[#00d9a3] hover:bg-[#00c291] text-black font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                                <p className="text-xs text-muted-foreground mt-2">
                                    1 email/month. No spam. Unsubscribe anytime.
                                </p>
                            </div>
                        </div>

                        {/* Column 2: Services */}
                        <div>
                            <h4 className="font-space-grotesk text-base font-semibold text-foreground uppercase tracking-wide mb-6">
                                Services
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    "Smart Visiting Card",
                                    "Commission Killer System",
                                    "Brand Domination Package",
                                    "Power Add-Ons",
                                    "Social Media Marketing",
                                    "Monthly Maintenance"
                                ].map((link) => (
                                    <li key={link}>
                                        <a href="#" className="font-inter text-sm text-muted-foreground hover:text-[#00d9a3] hover:translate-x-1 transition-all duration-200 inline-block">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Industries */}
                        <div>
                            <h4 className="font-space-grotesk text-base font-semibold text-foreground uppercase tracking-wide mb-6">
                                Who I Work With
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    "Restaurants",
                                    "Cafés",
                                    "Bakeries",
                                    "Hotels & Homestays",
                                    "Cloud Kitchens",
                                    "Wholesalers & Exporters"
                                ].map((link) => (
                                    <li key={link}>
                                        <a href="#" className="font-inter text-sm text-muted-foreground hover:text-[#00d9a3] hover:translate-x-1 transition-all duration-200 inline-block">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 4: Contact */}
                        <div>
                            <h4 className="font-space-grotesk text-base font-semibold text-foreground uppercase tracking-wide mb-6">
                                Get In Touch
                            </h4>
                            <div className="space-y-6">
                                {[
                                    { icon: Phone, label: "Call / WhatsApp", value: "+91 98765 43210", href: "tel:+919876543210" },
                                    { icon: Mail, label: "Email", value: "dhruv@elevateweb.in", href: "mailto:dhruv@elevateweb.in" },
                                    { icon: MapPin, label: "Based In", value: "Amritsar, Punjab", href: null },
                                    { icon: Clock, label: "Available", value: "Mon-Sat, 9 AM - 8 PM", href: null }
                                ].map((item) => (
                                    <div key={item.label} className="group flex gap-4">
                                        <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-[#00d9a3]/10 border border-[#00d9a3]/20 text-[#00d9a3] group-hover:bg-[#00d9a3] group-hover:text-black transition-colors duration-300">
                                            <item.icon className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="font-inter text-xs text-muted-foreground mb-0.5">{item.label}</p>
                                            {item.href ? (
                                                <a href={item.href} className="font-inter text-sm font-medium text-foreground hover:text-[#00d9a3] transition-colors">
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="font-inter text-sm font-medium text-foreground">
                                                    {item.value}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* TIER 3: BOTTOM BAR */}
            <div className="w-full border-t border-gray-200 dark:border-white/10 bg-foreground/5 bg-opacity-80 dark:bg-black/40">
                <div className="container max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                        <p className="font-inter text-sm text-muted-foreground text-center md:text-left">
                            © {new Date().getFullYear()} ElevateWeb. Built with
                            <Heart className="inline w-4 h-4 mx-1 text-red-500 fill-red-500" />
                            in Amritsar.
                        </p>

                        <div className="flex gap-6 text-sm text-muted-foreground overflow-x-auto max-w-full">
                            <a href="#" className="hover:text-[#00d9a3] transition-colors whitespace-nowrap">Privacy Policy</a>
                            <a href="#" className="hover:text-[#00d9a3] transition-colors whitespace-nowrap">Terms of Service</a>
                            <a href="#" className="hover:text-[#00d9a3] transition-colors whitespace-nowrap">Refund Policy</a>
                        </div>

                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 text-xs text-muted-foreground">
                            <Code className="w-3 h-3" />
                            <span>Built with Next.js + Tailwind</span>
                        </div>

                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-[#00d9a3] hover:bg-[#00c291] text-black shadow-lg shadow-[#00d9a3]/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#00d9a3] focus:ring-offset-2 dark:focus:ring-offset-gray-900 group"
                aria-label="Back to top"
            >
                <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
        </footer>
    )
}
