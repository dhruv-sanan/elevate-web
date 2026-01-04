"use client"

import { useEffect, useRef } from "react"
import {
    ShoppingCart,
    QrCode,
    TrendingUp,
    LayoutDashboard,
    MessageCircle,
    Search,
    Sparkles,
    Bot,
    Check,
    Star,
    Zap,
    Type,
    ArrowRight
} from "lucide-react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

export function FeaturesSection() {
    return (
        <section className="relative w-full py-24 md:py-32 px-6 bg-background overflow-hidden">
            {/* Background continuation from hero if needed, but styling handled by grid cards mostly */}

            <div className="max-w-[1400px] mx-auto">
                {/* SECTION HEADER */}
                <div className="text-center mb-16 md:mb-24">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-inter text-sm md:text-base text-[#00d9a3] font-medium tracking-wide uppercase mb-4"
                    >
                        // THE SYSTEM
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-space-grotesk text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground"
                    >
                        Everything You Need to <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-[#00d9a3] to-emerald-400 bg-clip-text text-transparent">
                            Own Your Orders
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="font-inter text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                    >
                        No commissions. No middlemen. Just direct revenue—while Zomato watches from the sidelines.
                    </motion.p>
                </div>

                {/* BENTO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto">

                    {/* CARD 1: COMMISSION-FREE ORDERING (LARGE) */}
                    <FeatureCard
                        className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2"
                        number="01"
                        delay={0.1}
                    >
                        <div className="bg-[#00d9a3]/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                            <ShoppingCart className="w-10 h-10 text-[#00d9a3]" />
                        </div>
                        <h3 className="font-space-grotesk text-3xl md:text-4xl font-bold mb-4 text-foreground">
                            Zero Commission Ordering
                        </h3>
                        <p className="font-inter text-muted-foreground text-lg leading-relaxed mb-8">
                            Stop paying Zomato 40% per order. Customers order directly from your menu—WhatsApp confirms instantly. You keep 100% revenue.
                        </p>

                        {/* Savings Visual */}
                        <div className="space-y-4 w-full max-w-lg">
                            <div className="space-y-1">
                                <span className="text-sm font-medium text-red-400">With Zomato:</span>
                                <div className="h-12 bg-red-500/10 border border-red-500/20 rounded-lg relative overflow-hidden">
                                    <div className="absolute left-0 top-0 h-full w-[60%] bg-red-500/80"></div>
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-red-500">
                                        -40% gone
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <span className="text-sm font-medium text-[#00d9a3]">With ElevateWeb:</span>
                                <div className="h-12 bg-[#00d9a3]/10 border border-[#00d9a3]/20 rounded-lg relative overflow-hidden">
                                    <motion.div
                                        initial={{ width: "0%" }}
                                        whileInView={{ width: "100%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                                        className="absolute left-0 top-0 h-full bg-[#00d9a3]"
                                    ></motion.div>
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-foreground z-10">
                                        100% yours
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-8">
                            {["Add-to-Cart", "Checkout", "UPI/Card", "WhatsApp Auto-Confirm"].map((tag) => (
                                <span key={tag} className="px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-xs text-muted-foreground">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </FeatureCard>

                    {/* CARD 2: QR TABLE ORDERING (SMALL) */}
                    <FeatureCard
                        className="col-span-1 md:col-span-1 row-span-1"
                        number="02"
                        delay={0.2}
                    >
                        <div className="bg-[#00d9a3]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                            <QrCode className="w-6 h-6 text-[#00d9a3]" />
                        </div>
                        <h3 className="font-space-grotesk text-xl font-bold mb-3 text-foreground">
                            QR Table Ordering
                        </h3>
                        <p className="font-inter text-muted-foreground text-sm leading-relaxed mb-6">
                            Customers scan, order, pay—no waiter needed. Faster service. Higher tips.
                        </p>
                        <div className="flex justify-center mt-auto">
                            <div className="relative w-24 h-24 bg-foreground/5 border border-[#00d9a3]/30 rounded-xl flex items-center justify-center overflow-hidden">
                                <motion.div
                                    animate={{ top: ["0%", "100%", "0%"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="absolute left-0 right-0 h-0.5 bg-[#00d9a3] shadow-[0_0_10px_#00d9a3]"
                                />
                                <QrCode className="w-16 h-16 text-[#00d9a3]/50" />
                            </div>
                        </div>
                    </FeatureCard>

                    {/* CARD 3: SMART UPSELLING (SMALL) */}
                    <FeatureCard
                        className="col-span-1 md:col-span-1 row-span-1"
                        number="03"
                        delay={0.3}
                    >
                        <div className="bg-[#00d9a3]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                            <TrendingUp className="w-6 h-6 text-[#00d9a3]" />
                        </div>
                        <h3 className="font-space-grotesk text-xl font-bold mb-3 text-foreground">
                            Smart Upselling
                        </h3>
                        <p className="font-inter text-muted-foreground text-sm leading-relaxed mb-4">
                            &quot;Add Gulab Jamun for ₹40?&quot; Automatic suggestions increase order value by 20%.
                        </p>
                        <div className="mt-auto bg-foreground/5 border border-foreground/10 rounded-lg p-3 text-xs">
                            <p className="text-muted-foreground mb-2">🍛 Butter Chicken added</p>
                            <div className="bg-[#00d9a3]/10 border border-[#00d9a3]/30 rounded p-2">
                                <p className="text-[#00d9a3] font-semibold">💡 Add Garlic Naan? +₹40</p>
                            </div>
                        </div>
                    </FeatureCard>

                    {/* CARD 4: ADMIN DASHBOARD (WIDE) */}
                    <FeatureCard
                        className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1"
                        number="04"
                        delay={0.4}
                    >
                        <div className="flex flex-col md:flex-row gap-6 h-full">
                            <div className="flex-1">
                                <div className="bg-[#00d9a3]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                                    <LayoutDashboard className="w-6 h-6 text-[#00d9a3]" />
                                </div>
                                <h3 className="font-space-grotesk text-2xl font-bold mb-3 text-foreground">
                                    Admin Dashboard
                                </h3>
                                <p className="font-inter text-muted-foreground text-base leading-relaxed mb-4">
                                    Update menu, toggle Open/Closed, add promo codes, track orders—all from your phone. No calling a developer.
                                </p>
                                <div className="space-y-2">
                                    {["Update prices in 30 seconds", "Add daily specials instantly", "Create discount codes"].map((item) => (
                                        <div key={item} className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-[#00d9a3]" />
                                            <span className="text-sm text-muted-foreground">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="hidden md:flex items-center justify-center">
                                <div className="w-32 h-48 bg-gray-900 rounded-xl border-4 border-gray-800 p-2 relative overflow-hidden shadow-xl">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-800 rounded-b-lg"></div>
                                    <div className="h-full flex flex-col gap-2 pt-4">
                                        <div className="bg-[#00d9a3]/20 p-2 rounded">
                                            <div className="w-4 h-4 bg-[#00d9a3] rounded mb-1"></div>
                                            <div className="w-12 h-2 bg-white/20 rounded"></div>
                                        </div>
                                        <div className="bg-white/5 p-2 rounded flex-1"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FeatureCard>

                    {/* CARD 5: WHATSAPP AUTO-CONFIRM (TALL) */}
                    <FeatureCard
                        className="col-span-1 md:col-span-1 row-span-1 lg:row-span-2"
                        number="05"
                        delay={0.5}
                    >
                        <div className="bg-[#00d9a3]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                            <MessageCircle className="w-6 h-6 text-[#00d9a3]" />
                        </div>
                        <h3 className="font-space-grotesk text-xl font-bold mb-3 text-foreground">
                            WhatsApp Auto-Confirm
                        </h3>
                        <p className="font-inter text-muted-foreground text-sm leading-relaxed mb-6">
                            Order placed → WhatsApp message sent → Customer relaxes. Zero manual work.
                        </p>

                        <div className="space-y-3 mb-6">
                            <div className="bg-[#00d9a3]/10 border border-[#00d9a3]/20 rounded-2xl rounded-tl-none p-4">
                                <p className="text-xs text-[#00d9a3] font-semibold mb-2">Tamra Restaurant</p>
                                <p className="text-xs text-foreground/80 leading-relaxed">
                                    ✅ Order confirmed!<br />
                                    Order #2847<br />
                                    2x Butter Chicken<br />
                                    Total: ₹680<br /><br />
                                    Delivery in 30 mins 🚀
                                </p>
                                <p className="text-[10px] text-muted-foreground mt-2 text-right">2:47 PM ✓✓</p>
                            </div>
                            <div className="bg-foreground/5 border border-foreground/10 rounded-2xl rounded-tr-none p-4 ml-8">
                                <p className="text-xs text-foreground/80">Thank you! 🙏</p>
                                <p className="text-[10px] text-muted-foreground mt-2 text-right">2:48 PM ✓</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mt-auto">
                            <div className="bg-foreground/5 rounded-lg p-3 text-center">
                                <p className="text-xl font-bold text-[#00d9a3]">2s</p>
                                <p className="text-[10px] text-muted-foreground">Confirm Time</p>
                            </div>
                            <div className="bg-foreground/5 rounded-lg p-3 text-center">
                                <p className="text-xl font-bold text-[#00d9a3]">0</p>
                                <p className="text-[10px] text-muted-foreground">Manual Work</p>
                            </div>
                        </div>
                    </FeatureCard>

                    {/* CARD 6: SEO & GOOGLE RANKING (WIDE) */}
                    <FeatureCard
                        className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1"
                        number="06"
                        delay={0.6}
                    >
                        <div className="flex flex-col md:flex-row gap-6 h-full">
                            <div className="flex-1">
                                <div className="bg-[#00d9a3]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                                    <Search className="w-6 h-6 text-[#00d9a3]" />
                                </div>
                                <h3 className="font-space-grotesk text-2xl font-bold mb-3 text-foreground">
                                    Google SEO Domination
                                </h3>
                                <p className="font-inter text-muted-foreground text-base leading-relaxed mb-4">
                                    Built to rank #1 for &quot;Best Restaurant in Amritsar&quot;. More Google visibility = more customers.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {["restaurants in Amritsar", "best bakery near me", "hotels near Golden Temple"].map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-xs text-muted-foreground italic">
                                            &quot;{tag}&quot;
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="hidden lg:block w-72 bg-foreground/5 border border-foreground/10 rounded-xl p-4 self-center">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-green-500"></div>
                                    <div>
                                        <p className="text-xs font-semibold text-foreground">Tamra Restaurant</p>
                                        <p className="text-[10px] text-muted-foreground">www.punjabirasoi.in</p>
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                                    Authentic Punjabi cuisine in Amritsar.
                                </p>
                                <div className="flex items-center gap-1">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                                    <span className="text-[10px] text-muted-foreground ml-1">4.9 (847)</span>
                                </div>
                            </div>
                        </div>
                    </FeatureCard>

                    {/* CARD 7: 3D HERO & ANIMATIONS (TALL) */}
                    <FeatureCard
                        className="col-span-1 md:col-span-1 row-span-1 lg:row-span-2 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30 hover:border-purple-500/50"
                        number="07"
                        delay={0.7}
                    >
                        <div className="bg-purple-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                            <Sparkles className="w-6 h-6 text-purple-400" />
                        </div>
                        <h3 className="font-space-grotesk text-xl font-bold mb-3 text-foreground">
                            3D &quot;Edible Luxury&quot;
                        </h3>
                        <p className="font-inter text-muted-foreground text-sm leading-relaxed mb-6">
                            Interactive 3D dishes that spin, glow, and make NRIs say &quot;Wow&quot;.
                        </p>

                        <div className="h-40 bg-black/20 rounded-xl relative overflow-hidden flex items-center justify-center mb-6">
                            <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 blur-xl opacity-60 animate-pulse"></div>
                            <motion.div
                                animate={{ rotate: [12, -12, 12], translateY: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 z-10"
                            />
                            <p className="absolute bottom-2 text-[10px] text-white/50">3D Demo</p>
                        </div>

                        <div className="mt-auto space-y-2">
                            {["Smooth animations", "Premium feel", "Higher conversions"].map(benefit => (
                                <div key={benefit} className="flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-purple-400" />
                                    <span className="text-xs text-muted-foreground">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </FeatureCard>

                    {/* CARD 8: AI CHATBOT (WIDE) */}
                    <FeatureCard
                        className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/30 hover:border-blue-500/50"
                        number="08"
                        delay={0.8}
                    >
                        <div className="flex flex-col md:flex-row gap-6 h-full">
                            <div className="flex-1">
                                <div className="bg-blue-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                                    <Bot className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="font-space-grotesk text-2xl font-bold mb-3 text-foreground">
                                    AI Concierge + Multi-Lang
                                </h3>
                                <p className="font-inter text-muted-foreground text-base leading-relaxed mb-4">
                                    24/7 AI chatbot answers &quot;What should I eat?&quot; in English & Punjabi. Never miss an inquiry.
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-background/20 rounded p-2 border border-blue-500/20">
                                        <p className="text-xs font-semibold text-blue-400">AI Recommendations</p>
                                        <p className="text-[10px] text-muted-foreground">&quot;Suggest veg options&quot;</p>
                                    </div>
                                    <div className="bg-background/20 rounded p-2 border border-blue-500/20">
                                        <p className="text-xs font-semibold text-blue-400">Multi-Language</p>
                                        <p className="text-[10px] text-muted-foreground">English / ਪੰਜਾਬੀ</p>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden md:flex flex-col w-56 bg-background/40 border border-white/10 rounded-xl p-3 h-full max-h-48 relative">
                                <div className="flex items-center gap-2 border-b border-white/10 pb-2 mb-2">
                                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                                        <Bot className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-xs font-bold">AI Concierge</span>
                                </div>
                                <div className="space-y-2 text-[10px] flex-1">
                                    <div className="bg-blue-500/20 p-2 rounded-lg rounded-tl-none self-start">
                                        👋 Welcome! Hungry?
                                    </div>
                                    <div className="bg-white/10 p-2 rounded-lg rounded-tr-none self-end ml-auto w-fit">
                                        Vegetarian options?
                                    </div>
                                </div>
                                <div className="mt-2 text-xs text-muted-foreground bg-white/5 rounded-full px-2 py-1 flex items-center gap-1">
                                    <Type className="w-3 h-3" /> Type...
                                </div>
                            </div>
                        </div>
                    </FeatureCard>
                </div>
            </div>
        </section>
    )
}

function FeatureCard({ children, className, number, delay }: { children: React.ReactNode, className?: string, number: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={cn(
                "relative group overflow-hidden rounded-3xl p-6 md:p-8 transition-all duration-300",
                "bg-white/5 dark:bg-white/5 backdrop-blur-2xl border border-white/10 dark:border-white/10",
                "hover:-translate-y-1 hover:border-[#00d9a3]/50 hover:shadow-[0_0_40px_rgba(0,217,163,0.1)]",
                className
            )}
        >
            <span className="absolute top-4 right-4 text-6xl font-bold text-foreground/5 font-space-grotesk select-none z-0">
                {number}
            </span>
            <div className="relative z-10 h-full flex flex-col">
                {children}
            </div>
        </motion.div>
    )
}
