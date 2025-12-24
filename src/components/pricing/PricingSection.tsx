"use client"

import {
    Calculator,
    Star,
    Check,
    X,
    ArrowRight,
    Shield,
    Smartphone,
    Bot,
    MessageSquare,
    AlertCircle,
    TrendingUp,
    Plus,
    MessageCircle,
    Calendar,
    Swords,
    Camera
} from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function PricingSection() {
    return (
        <section className="relative w-full py-24 md:py-32 px-6 bg-background overflow-hidden">
            <div className="max-w-[1400px] mx-auto">

                {/* SECTION HEADER */}
                <div className="text-center mb-16 md:mb-24">
                    <p className="font-inter text-sm md:text-base text-[#00d9a3] font-medium tracking-wide uppercase mb-4">
                        // TRANSPARENT PRICING
                    </p>
                    <h2 className="font-space-grotesk text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
                        Stop Paying Commissions.
                        <br />
                        <span className="bg-gradient-to-r from-[#00d9a3] to-emerald-400 bg-clip-text text-transparent">
                            Start Keeping 100%
                        </span>
                    </h2>
                    <p className="font-inter text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                        One-time setup. Optional monthly support. No hidden fees.
                        No contracts. Just results.
                    </p>
                    <button className="inline-flex items-center gap-2 bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 text-foreground font-semibold px-6 py-3 rounded-xl text-base transition-all duration-300 hover:scale-105 cursor-pointer">
                        <Calculator className="w-5 h-5" />
                        Calculate Your Savings
                    </button>
                </div>

                {/* MAIN PRICING GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 lg:items-start">

                    {/* TIER 1: SMART VISITING CARD */}
                    <PricingCard
                        index={0}
                        tierName="Smart Visiting Card"
                        bestFor="Consultants, Wholesalers, Exporters"
                        originalPrice="25,000"
                        currentPrice="15,000"
                        savings="40"
                        features={[
                            "Digital Showcase: Display top 20 products/services",
                            "One-Click Contact: WhatsApp & Call buttons",
                            "Google Maps integration",
                            "Premium responsive design",
                            "Mobile-optimized layout",
                            "Fast loading speed",
                            "Basic SEO setup",
                            "1 revision round included"
                        ]}
                    />

                    {/* TIER 2: COMMISSION KILLER (POPULAR) */}
                    <PricingCard
                        index={1}
                        featured
                        tierName="The Commission Killer"
                        bestFor="Restaurants, Cafés, Bakeries"
                        originalPrice="55,000"
                        currentPrice="30,000"
                        savings="45"
                        features={[
                            "✨ EVERYTHING IN TIER 1 PLUS:",
                            "Commission-Free Ordering System",
                            "Full Menu + Add-to-Cart + Checkout",
                            "Admin Dashboard (update menu yourself)",
                            "Online Payments: UPI/Card integration",
                            "WhatsApp Auto-Confirmation",
                            "Promo Codes & Discounts",
                            "Store Status Toggle (Open/Closed)",
                            "Smart Upselling Logic",
                            "Social Media Sync (Instagram auto-feed)",
                            "Daily Specials Panel",
                            "Google Reviews Integration",
                            "2 revision rounds included"
                        ]}
                    />

                    {/* TIER 3: BRAND DOMINATION */}
                    <PricingCard
                        index={2}
                        premium
                        tierName="Brand Domination"
                        bestFor="Hotels, Large Exporters, Premium Brands"
                        originalPrice="85,000"
                        currentPrice="55,000"
                        savings="35"
                        features={[
                            "🚀 EVERYTHING IN TIER 2 PLUS:",
                            "\"Edible Luxury\" 3D Experience",
                            "Interactive 3D visuals that wow NRIs",
                            "Multi-Language Support (English & Punjabi)",
                            "SEO Supremacy Package",
                            "Corporate Copywriting (we write everything)",
                            "Premium Animations & Micro-interactions",
                            "Room Booking System (for hotels)",
                            "Direct Booking Engine (no OTA commissions)",
                            "Multilingual AI Concierge",
                            "Local Attractions Guide",
                            "Advanced Analytics Dashboard",
                            "Priority Support (24-hour response)",
                            "3 revision rounds included"
                        ]}
                    />

                </div>

                {/* MONTHLY MAINTENANCE SECTION */}
                <div className="mt-24 pt-16 border-t border-foreground/10">
                    <div className="flex items-center gap-4 mb-12 justify-center">
                        <div className="h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent flex-1 max-w-[100px]"></div>
                        <span className="font-inter text-xs font-semibold text-muted-foreground tracking-widest uppercase">OPTIONAL MONTHLY SUPPORT</span>
                        <div className="h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent flex-1 max-w-[100px]"></div>
                    </div>

                    <h3 className="font-space-grotesk text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
                        Choose Your Monthly Support Level
                    </h3>
                    <p className="font-inter text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        Keep your site fast, secure, and updated—or manage it yourself. Your choice.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <MaintenanceCard
                            index={0}
                            planName="The Security Guard"
                            bestFor="Small Shops & DIY Owners"
                            price="1,500"
                            features={[
                                { included: true, text: "High-Speed Server Hosting" },
                                { included: true, text: "Daily Backups & Firewall" },
                                { included: true, text: "SSL Certificate (HTTPS)" },
                                { included: true, text: "99.9% Uptime Guarantee" },
                                { included: false, text: "Menu/Price Updates" },
                                { included: false, text: "Google Maps Growth" },
                                { included: false, text: "Festival Banners" }
                            ]}
                        />
                        <MaintenanceCard
                            index={1}
                            recommended
                            planName="The Manager"
                            bestFor="Restaurants & Cafés"
                            price="3,500"
                            features={[
                                { included: true, text: "High-Speed Server Hosting" },
                                { included: true, text: "Daily Backups & Firewall" },
                                { included: true, text: "SSL Certificate (HTTPS)" },
                                { included: true, text: "99.9% Uptime Guarantee" },
                                { included: true, text: "We Update Menu 4x/Month" },
                                { included: true, text: "Basic Google Maps Ranker" },
                                { included: false, text: "Festival Banners" }
                            ]}
                        />
                        <MaintenanceCard
                            index={2}
                            planName="The Partner"
                            bestFor="Large Hotels & Banquets"
                            price="8,000"
                            features={[
                                { included: true, text: "High-Speed Server Hosting" },
                                { included: true, text: "Daily Backups & Firewall" },
                                { included: true, text: "SSL Certificate (HTTPS)" },
                                { included: true, text: "99.9% Uptime Guarantee" },
                                { included: true, text: "Unlimited Priority Updates" },
                                { included: true, text: "Pro Google Maps Ranker" },
                                { included: true, text: "Custom Festival Banners" }
                            ]}
                        />
                    </div>
                </div>

                {/* POWER ADD-ONS SECTION */}
                <div className="mt-24 pt-16 border-t border-foreground/10">
                    <div className="flex items-center gap-4 mb-12 justify-center">
                        <div className="h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent flex-1 max-w-[100px]"></div>
                        <span className="font-inter text-xs font-semibold text-muted-foreground tracking-widest uppercase">POWER ADD-ONS</span>
                        <div className="h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent flex-1 max-w-[100px]"></div>
                    </div>

                    <h3 className="font-space-grotesk text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
                        Specialized Tools for Specific Needs
                    </h3>
                    <p className="font-inter text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        Add these to any package above. One-time setup—solve specific problems fast.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <AddonCard
                            index={0}
                            name="The &quot;Reputation Guard&quot;"
                            icon={Shield}
                            problem="Bad Google reviews hurting your business?"
                            solution="Review Filter System"
                            description="Automated message after dining. If 5★ → Google Maps. If 1-3★ → Private feedback form. Stop public complaints."
                            setupFee="4,000"
                            monthlyFee="1,000"
                            results="Increase 5-star reviews by 200%"
                        />
                        <AddonCard
                            index={1}
                            name="The &quot;Pocket Waiter&quot;"
                            icon={Smartphone}
                            problem="Want an app without ₹5L investment?"
                            solution="Progressive Web App (PWA)"
                            description="&quot;Install App&quot; prompt. Web visitors see full experience. App users skip straight to menu. Lives on home screen forever."
                            setupFee="8,000"
                            results="30% faster repeat orders"
                        />
                        <AddonCard
                            index={2}
                            name="The &quot;NRI Concierge&quot;"
                            icon={Bot}
                            problem="Missing wedding inquiries at 3 AM?"
                            solution="AI Chatbot (24/7)"
                            description="Answers capacity, veg/non-veg options, booking dates—even when you're asleep. Perfect for NRI clients."
                            setupFee="10,000"
                            results="Never miss a lead"
                        />
                        <AddonCard
                            index={3}
                            name="The WhatsApp Business Suite"
                            icon={MessageSquare}
                            problem="Can't reply to 100 WhatsApp messages daily?"
                            solution="Auto-Reply + Broadcast Engine"
                            description="24/7 auto-replies. &quot;Menu Pusher&quot; sends website link. Marketing blasts to 500+ customers with one click."
                            setupFee="8,000"
                            monthlyFee="Message costs"
                            results="Orders within 15 mins of broadcast"
                        />
                        <AddonCard
                            index={4}
                            name="The &quot;Customer Hijack&quot; Kit"
                            icon={Swords}
                            problem="Losing 30% to Zomato on every order?"
                            solution="Printable QR Hijack Cards"
                            description="We design & print QR cards to put inside your delivery bags. Convert Swiggy users to Direct Orders. Includes 500 Premium Cards + Bag Seal Stickers."
                            setupFee="5,000"
                            results="Steal customers from Zomato"
                        />
                        <AddonCard
                            index={5}
                            name="The &quot;Viral Cravings&quot; Pack"
                            icon={Camera}
                            problem="Food photos looking dull & unappetizing?"
                            solution="Pro Photography & Reels"
                            description="Professional Food Photography & Reels. We shoot, edit, and run ads to people within 3km. Includes 1 Photo Shoot + Ad Setup."
                            setupFee="15,000"
                            results="Make them hungry & order"
                        />
                    </div>
                </div>

                {/* FINAL CTA SECTION */}
                <div className="mt-24 py-16">
                    <div className="bg-gradient-to-br from-[#00d9a3]/10 to-emerald-500/5 border-2 border-[#00d9a3] rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
                        <h3 className="font-space-grotesk text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Still Paying Zomato 40%?
                        </h3>
                        <p className="font-inter text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
                            Let&apos;s calculate exactly how much you&apos;re losing—and show you the system
                            that&apos;ll help you keep every rupee.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                            <a href="#" className="flex items-center gap-3 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white font-inter font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/30">
                                <MessageCircle className="w-5 h-5" />
                                WhatsApp: &quot;I&apos;m Ready&quot;
                            </a>
                            <a href="#" className="flex items-center gap-3 bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 text-foreground font-inter font-semibold px-8 py-4 rounded-xl text-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1">
                                <Calendar className="w-5 h-5" />
                                Book Free Consultation
                            </a>
                        </div>
                        <p className="font-inter text-sm text-muted-foreground">
                            ✓ No pressure • ✓ Free audit • ✓ Honest advice
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

function PricingCard({ tierName, bestFor, originalPrice, currentPrice, savings, features, featured = false, premium = false, index = 0 }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
                "relative bg-black/[0.02] dark:bg-white/5 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-3xl p-8 md:p-10 flex flex-col transition-all duration-300 hover:-translate-y-2",
                featured && "border-2 border-[#00d9a3] dark:border-[#00d9a3] bg-gradient-to-br from-[#00d9a3]/5 to-emerald-500/5 dark:from-[#00d9a3]/10 dark:to-emerald-500/5 shadow-[0_0_60px_rgba(0,217,163,0.1)] lg:scale-105 z-10",
                premium && "border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-pink-500/5 hover:border-purple-500/50 hover:shadow-[0_0_60px_rgba(168,85,247,0.1)]"
            )}
        >
            {featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00d9a3] to-emerald-500 text-black font-inter text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg shadow-emerald-500/20 whitespace-nowrap">
                    <Star className="w-3 h-3 fill-black" />
                    BEST VALUE
                </div>
            )}

            <h3 className="font-space-grotesk text-2xl md:text-3xl font-bold text-foreground mb-2">
                {tierName}
            </h3>
            <p className="font-inter text-sm text-muted-foreground mb-8">
                {bestFor}
            </p>

            <div className="flex items-center gap-3 mb-2">
                <span className="font-inter text-lg text-muted-foreground line-through">₹{originalPrice}</span>
                <span className="bg-red-500/10 text-red-500 text-[10px] font-bold px-2 py-1 rounded bg-opacity-20 border border-red-500/20">SAVE {savings}%</span>
            </div>
            <div className="flex items-baseline gap-1 mb-2">
                <span className="font-space-grotesk text-2xl font-semibold text-foreground">₹</span>
                <span className="font-space-grotesk text-5xl md:text-6xl font-bold text-foreground leading-none">{currentPrice}</span>
                <span className="font-inter text-sm text-muted-foreground ml-1">one-time</span>
            </div>
            <p className="font-inter text-sm text-yellow-500/90 font-medium mb-8 flex items-center gap-2">
                🔥 Launch Offer - Limited Time
            </p>

            <div className="flex-1">
                <p className="font-space-grotesk text-xs font-bold text-foreground uppercase tracking-wider mb-4">What You Get:</p>
                <ul className="space-y-3 mb-8">
                    {features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <Check className={cn(
                                "w-5 h-5 flex-shrink-0 mt-0.5",
                                featured ? "text-[#00d9a3]" : premium ? "text-purple-400" : "text-muted-foreground"
                            )} />
                            <span className={feature.startsWith("✨") || feature.startsWith("🚀") ? "font-bold text-foreground" : ""}>
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <button className={cn(
                "w-full flex items-center justify-center gap-2 py-4 rounded-xl font-inter font-semibold text-base transition-all duration-300",
                featured
                    ? "bg-gradient-to-br from-[#00d9a3] to-emerald-500 text-black hover:shadow-lg hover:shadow-emerald-500/20"
                    : premium
                        ? "bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 border border-purple-500/30"
                        : "bg-white/10 hover:bg-white/20 text-foreground border border-white/20"
            )}>
                Get Started
                <ArrowRight className="w-5 h-5" />
            </button>
            <p className="font-inter text-xs text-muted-foreground text-center mt-4">
                Setup in 7 days • No monthly fees
            </p>
        </motion.div>
    )
}

function MaintenanceCard({ planName, bestFor, price, features, recommended = false, index = 0 }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className={cn(
                "relative bg-black/[0.02] dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl p-8 transition-all duration-300",
                recommended && "border-2 border-[#00d9a3] bg-gradient-to-br from-[#00d9a3]/5 to-emerald-500/5"
            )}
        >
            {recommended && (
                <div className="absolute -top-2.5 right-6 bg-[#00d9a3] text-black text-[10px] font-bold px-3 py-1 rounded-sm tracking-wide">
                    RECOMMENDED
                </div>
            )}
            <h4 className="font-space-grotesk text-2xl font-bold text-foreground mb-1">{planName}</h4>
            <p className="font-inter text-sm text-muted-foreground mb-6">{bestFor}</p>

            <div className="flex items-baseline gap-1 mb-8">
                <span className="text-xl font-semibold text-foreground">₹</span>
                <span className="font-space-grotesk text-4xl font-bold text-foreground">{price}</span>
                <span className="text-sm text-muted-foreground">/month</span>
            </div>

            <ul className="space-y-3 mb-8">
                {features.map((f: any, i: number) => (
                    <li key={i} className={cn("flex items-start gap-3 text-sm", f.included ? "text-muted-foreground" : "text-muted-foreground/50 line-through")}>
                        {f.included ? <Check className="w-4 h-4 text-[#00d9a3] mt-0.5" /> : <X className="w-4 h-4 mt-0.5" />}
                        {f.text}
                    </li>
                ))}
            </ul>

            <button className={cn(
                "w-full py-3 rounded-lg font-inter font-semibold text-sm transition-all",
                recommended
                    ? "bg-[#00d9a3] hover:bg-[#00c291] text-black"
                    : "bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-foreground"
            )}>
                Select Plan
            </button>
        </motion.div>
    )
}

function AddonCard({ name, icon: Icon, problem, solution, description, setupFee, monthlyFee, results, index = 0 }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="flex flex-col gap-6 bg-gradient-to-br from-black/[0.02] to-transparent dark:from-white/5 dark:to-transparent border border-black/5 dark:border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-[#00d9a3] hover:shadow-[0_10px_40px_rgba(0,217,163,0.05)]"
        >
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#00d9a3]/10 border border-[#00d9a3]/20 text-[#00d9a3]">
                    <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-space-grotesk text-xl font-bold text-foreground flex-1">{name}</h4>
            </div>

            <div className="flex items-start gap-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                <AlertCircle className="w-4 h-4 text-yellow-500 mt-0.5" />
                <p className="font-inter text-sm text-yellow-500 font-medium">{problem}</p>
            </div>

            <div className="bg-[#00d9a3]/5 border-l-2 border-[#00d9a3] rounded-r p-3">
                <p className="font-inter text-xs text-muted-foreground uppercase tracking-wide mb-1">Solution:</p>
                <p className="font-space-grotesk text-lg font-semibold text-[#00d9a3]">{solution}</p>
            </div>

            <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                {description}
            </p>

            <div className="flex gap-8 bg-black/20 rounded-lg p-4">
                <div>
                    <p className="font-inter text-xs text-muted-foreground">Setup:</p>
                    <p className="font-space-grotesk text-xl font-bold text-foreground">₹{setupFee}</p>
                </div>
                {monthlyFee && (
                    <div>
                        <p className="font-inter text-xs text-muted-foreground">Monthly:</p>
                        <p className="font-space-grotesk text-xl font-bold text-foreground">₹{monthlyFee}</p>
                    </div>
                )}
            </div>

            <div className="flex items-center gap-2 text-[#00d9a3] font-inter text-sm font-medium">
                <TrendingUp className="w-4 h-4" />
                {results}
            </div>

            <button className="w-full flex items-center justify-center gap-2 py-3 bg-[#00d9a3]/10 hover:bg-[#00d9a3]/20 border border-[#00d9a3]/20 text-[#00d9a3] font-semibold rounded-lg transition-all">
                Add to Package
                <Plus className="w-4 h-4" />
            </button>
        </motion.div>
    )
}
