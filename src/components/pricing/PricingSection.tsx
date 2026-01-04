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
    Camera,
    Loader2,
    ChevronDown,
    Info
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { SavingsCalculator } from "./SavingsCalculator"
import { OrderSummaryBar } from "./OrderSummaryBar"
import { selectPlan, addToPackage } from "@/app/actions"
import { useState } from "react"

// Define data outside component to avoid re-creation on render (or use useMemo)
const MAINTENANCE_PLANS = [
    { id: 0, name: "The Chowkidar", price: 3000 },
    { id: 1, name: "The Digital Manager", price: 5000 },
    { id: 2, name: "The Business Partner", price: 7000 }
];

const ADDONS = [
    {
        id: "addon-0",
        name: "The \"Reputation Guard\"",
        icon: Shield,
        problem: "Bad Google reviews hurting your business?",
        solution: "Review Filter System",
        description: "Automated message after dining. If 5★ → Google Maps. If 1-3★ → Private feedback form. Stop public complaints.",
        setupFee: 4000,
        monthlyFee: 1000,
        results: "Increase 5-star reviews by 200%"
    },
    {
        id: "addon-1",
        name: "The \"Pocket Waiter\"",
        icon: Smartphone,
        problem: "Want an app without ₹5L investment?",
        solution: "Progressive Web App (PWA)",
        description: "\"Install App\" prompt. Web visitors see full experience. App users skip straight to menu. Lives on home screen forever.",
        setupFee: 8000,
        monthlyFee: 0,
        results: "30% faster repeat orders"
    },
    {
        id: "addon-2",
        name: "The \"NRI Concierge\"",
        icon: Bot,
        problem: "Missing wedding inquiries at 3 AM?",
        solution: "AI Chatbot (24/7)",
        description: "Answers capacity, veg/non-veg options, booking dates—even when you're asleep. Perfect for NRI clients.",
        setupFee: 10000,
        monthlyFee: 0,
        results: "Never miss a lead"
    },
    {
        id: "addon-3",
        name: "The WhatsApp Business Suite",
        icon: MessageSquare,
        problem: "Can't reply to 100 WhatsApp messages daily?",
        solution: "Auto-Reply + Broadcast Engine",
        description: "24/7 auto-replies. \"Menu Pusher\" sends website link. Marketing blasts to 500+ customers with one click.",
        setupFee: 8000,
        monthlyFee: 0,
        monthlyFeeDisplay: "Message costs",
        results: "Orders within 15 mins of broadcast"
    },
    {
        id: "addon-4",
        name: "The \"Zomato-to-Direct\" Hijack",
        icon: Swords,
        problem: "Losing 30% of every order to delivery apps?",
        solution: "Printable QR Hijack Cards",
        description: "We design & print high-conversion QR cards to put inside your delivery bags. Convert Swiggy & Zomato users to Direct Orders. Includes 500 Premium Cards + Custom Branded Tapes.",
        setupFee: 5000,
        monthlyFee: 0,
        results: "Steal your customers from Swiggy & Zomato"
    },
    {
        id: "addon-5",
        name: "The \"Viral Cravings\" Pack",
        icon: Camera,
        problem: "Food photos looking dull & unappetizing?",
        solution: "Pro Photography & Reels",
        description: "Professional Food Photography & Reels. We shoot, edit, and post it on social media. Includes 1 Extended Photo Shoot of Menu Items.",
        setupFee: 5000,
        monthlyFee: 10000,
        results: "Make them hungry & order"
    },
];

export function PricingSection() {
    const [selectedMaintenanceId, setSelectedMaintenanceId] = useState<number | null>(1) // Default to "The Manager"
    const [selectedAddonIds, setSelectedAddonIds] = useState<Set<string>>(new Set())
    const [viewingAddon, setViewingAddon] = useState<typeof ADDONS[0] | null>(null)

    const toggleAddon = (id: string) => {
        const newSet = new Set(selectedAddonIds)
        if (newSet.has(id)) {
            newSet.delete(id)
        } else {
            newSet.add(id)
        }
        setSelectedAddonIds(newSet)
    }

    const selectedMaintenancePlan = selectedMaintenanceId !== null ? MAINTENANCE_PLANS.find(p => p.id === selectedMaintenanceId) : null
    const selectedAddonsList = ADDONS.filter(a => selectedAddonIds.has(a.id))

    return (
        <section className="relative w-full pb-12 md:pb-16 bg-background overflow-hidden">
            <SavingsCalculator />
            <div className="max-w-[1400px] mx-auto px-6 pt-24 md:pt-32">

                {/* SECTION HEADER */}
                <div className="text-center mb-6 md:mb-16">
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
                </div>

                {/* MAIN PRICING GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6 lg:items-start">

                    <PricingCard
                        index={0}
                        tierName="Smart Visiting Card"
                        bestFor="Small Cafés & Startups"
                        originalPrice="40,000"
                        currentPrice="25,000"
                        savings="37"
                        features={[
                            "Beautiful Digital Menu Display",
                            "Full menu with photos & descriptions",
                            "Mobile-responsive design",
                            "WhatsApp & Call buttons",
                            "Google Maps integration",
                            "Basic SEO setup",
                            "Fast loading speed",
                            "1 revision round"
                        ]}
                    />

                    {/* STANDARD TIER */}
                    <PricingCard
                        index={1}
                        featured
                        tierName="The Commission Killer"
                        bestFor="Growing Restaurants & Cafés"
                        originalPrice="80,000"
                        currentPrice="40,000"
                        savings="50"
                        features={[
                            "✨ EVERYTHING IN DIGITAL MENU PLUS:",
                            "Commission-Free Online Ordering",
                            "Add to Cart + Checkout system",
                            "Basic Admin Dashboard",
                            "Update menu prices yourself",
                            "Add/remove items anytime",
                            "Order history tracking",
                            "Promo codes & discounts",
                            "Store open/closed toggle",
                            "Custom delivery radius",
                            "2 revision rounds"
                        ]}
                    />

                    {/* PREMIUM TIER */}
                    <PricingCard
                        index={2}
                        premium
                        tierName="Brand Powerhouse"
                        bestFor="Established Restaurants & Hotels"
                        originalPrice="1,00,000"
                        currentPrice="60,000"
                        savings="40"
                        features={[
                            "🚀 EVERYTHING IN ORDER MANAGER PLUS:",
                            "Automated Payment Collection",
                            "UPI + Card payment gateway",
                            "WhatsApp Order Notifications",
                            "Premium Analytics Dashboard",
                            "Sales reports & insights",
                            "Customer behavior tracking",
                            "Best-selling items reports",
                            "Advanced menu management",
                            "Variant management (sizes/combos)",
                            "Priority support (24hr response)",
                            "3 revision rounds"
                        ]}
                    />

                </div>

                {/* MONTHLY MAINTENANCE SECTION */}
                <div className="mt-8 md:mt-16 pt-8 md:pt-16 border-t border-foreground/10">
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
                            planName="The Chowkidar"
                            bestFor="Small Local Shops"
                            price="3,000"
                            features={[
                                { included: true, text: "\"24/7 Pehra\" (Never Down)", tooltip: "Your website never goes down. If it does, I fix it before you even notice." },
                                { included: true, text: "\"Lock & Key\" (Firewall)", tooltip: "High-level security (Firewall) so no one can hack your site." },
                                { included: true, text: "Digital Zameen (Hosting)", tooltip: "High-speed server optimized for up to 5,000 visitors/month." },
                                { included: true, text: "\"Sarkaari Thappa\" (SSL)", tooltip: "The \"Green Lock\" on the browser that tells customers your site is safe and official." },
                                { included: true, text: "Daily Safekeeping", tooltip: "I take a backup of your site every night. If anything breaks, we click a button and it’s back." },
                                { included: false, text: "Menu Updates" },
                                { included: false, text: "Google Ranking" },
                                { included: false, text: "Festival Banners" }
                            ]}
                            isSelected={selectedMaintenanceId === 0}
                            onSelect={() => setSelectedMaintenanceId(0)}
                        />
                        <MaintenanceCard
                            index={1}
                            recommended
                            planName="The Digital Manager"
                            bestFor="Ask for: Restaurants & Bakeries"
                            price="5,000"
                            features={[
                                { included: true, text: "\"24/7 Pehra\" (Never Down)", tooltip: "Your website never goes down. If it does, I fix it before you even notice." },
                                { included: true, text: "\"Lock & Key\" (Firewall)", tooltip: "High-level security (Firewall) so no one can hack your site." },
                                { included: true, text: "Digital Zameen (Hosting)", tooltip: "High-speed server optimized for up to 5,000 visitors/month." },
                                { included: true, text: "Daily Safekeeping & SSL", tooltip: "Daily Backups + Secure \"Green Lock\" so your site is always safe." },
                                { included: true, text: "Menu Updates (4x/Month)", tooltip: "Just WhatsApp me a photo of your new menu or hand-written prices (e.g., Amritsari Kulcha price change), and I’ll update the site in 2 hours." },
                                { included: true, text: "Google Ranking", tooltip: "I ensure that when tourists search \"Best food near me,\" your name shows up higher." },
                                { included: true, text: "WhatsApp Support", tooltip: "No tickets or emails. Just message me on WhatsApp, and it's done." },
                                { included: false, text: "Festival Banners" }
                            ]}
                            isSelected={selectedMaintenanceId === 1}
                            onSelect={() => setSelectedMaintenanceId(1)}
                        />
                        <MaintenanceCard
                            index={2}
                            planName="The Business Partner"
                            bestFor="Hotels & Large Banquets"
                            price="8,000"
                            features={[
                                { included: true, text: "\"24/7 Pehra\" & Security", tooltip: "Complete protection: Never goes down, Firewall security, and 24/7 monitoring." },
                                { included: true, text: "Daily Safekeeping & SSL", tooltip: "Daily Backups + Secure \"Green Lock\" so your site is always safe." },
                                { included: true, text: "Digital Zameen (Hosting)", tooltip: "High-speed server optimized for up to 5,000 visitors/month." },
                                { included: true, text: "Unlimited Menu Updates", tooltip: "Change your room rates or banquet packages as many times as you want." },
                                { included: true, text: "Amritsar Google Ranking", tooltip: "I ensure that when tourists search \"Best food near me,\" your name shows up higher." },
                                { included: true, text: "Priority VIP Service", tooltip: "Your requests go to the top of my list." },
                                { included: true, text: "Festival Banners", tooltip: "I design and put up custom banners for Lohri, Baisakhi, Diwali, and Gurpurab automatically." },
                                { included: true, text: "Monthly Growth Report", tooltip: "I’ll tell you exactly how many people called you or clicked \"Get Directions\" from your site." }
                            ]}
                            isSelected={selectedMaintenanceId === 2}
                            onSelect={() => setSelectedMaintenanceId(2)}
                        />
                    </div>
                </div>

                {/* POWER ADD-ONS SECTION */}
                <div className="mt-8 md:mt-16 pt-8 md:pt-16 border-t border-foreground/10">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ADDONS.map((addon, index) => (
                            <AddonCard
                                key={addon.id}
                                index={index}
                                {...addon}
                                isSelected={selectedAddonIds.has(addon.id)}
                                onToggle={() => toggleAddon(addon.id)}
                                onViewDetails={() => setViewingAddon(addon)}
                            />
                        ))}
                    </div>
                </div>

                <AnimatePresence>
                    {viewingAddon && (
                        <AddonModal
                            addon={viewingAddon}
                            isOpen={!!viewingAddon}
                            onClose={() => setViewingAddon(null)}
                            isSelected={selectedAddonIds.has(viewingAddon.id)}
                            onToggle={() => toggleAddon(viewingAddon.id)}
                        />
                    )}
                </AnimatePresence>

                <OrderSummaryBar
                    maintenancePlanName={selectedMaintenancePlan?.name || ""}
                    maintenancePrice={selectedMaintenancePlan?.price || 0}
                    selectedAddons={selectedAddonsList}
                    selectedBaseTierPrice={0} // Not tracking base tier yet
                />

                {/* FINAL CTA SECTION */}
                <div className="py-16">
                    <div className="bg-gradient-to-br from-[#00d9a3]/10 to-emerald-500/5 border-2 border-[#00d9a3] rounded-3xl p-8 md:p-10 text-center max-w-4xl mx-auto">
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
                            <a
                                href="https://calendly.com/dhruvsanan2001/free-website-demo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 text-foreground font-inter font-semibold px-8 py-4 rounded-xl text-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1"
                            >
                                <Calendar className="w-5 h-5" />
                                Book a Free Call
                            </a>
                        </div>
                        <p className="font-inter text-sm text-muted-foreground">
                            ✓ No pressure • ✓ Free audit • ✓ Honest advice
                        </p>
                    </div>
                </div>

            </div>
        </section >
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
                Set up in 14 days • Minimal monthly fees
            </p>
        </motion.div>
    )
}

function MaintenanceCard({ planName, bestFor, price, features, recommended = false, index = 0, isSelected, onSelect }: any) {
    const [isLoading, setIsLoading] = useState(false)
    const [status, setStatus] = useState<string | null>(null)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className={cn(
                "relative bg-black/[0.02] dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl p-8 transition-all duration-300",
                (isSelected || recommended) && "border-2 border-[#00d9a3] bg-gradient-to-br from-[#00d9a3]/5 to-emerald-500/5",
                isSelected && "shadow-[0_0_40px_rgba(0,217,163,0.15)] ring-1 ring-[#00d9a3]/50"
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
                        {f.included ? <Check className="w-4 h-4 text-[#00d9a3] mt-0.5 shrink-0" /> : <X className="w-4 h-4 mt-0.5 shrink-0" />}
                        <span className="flex items-center gap-1.5">
                            {f.text}
                            {f.tooltip && (
                                <div className="group relative inline-flex items-center justify-center">
                                    <Info className="w-3.5 h-3.5 text-muted-foreground/70 hover:text-[#00d9a3] cursor-help transition-colors" />
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-neutral-900/95 backdrop-blur-md border border-white/10 rounded-xl text-center shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                                        <p className="text-xs text-white leading-relaxed font-inter">
                                            {f.tooltip}
                                        </p>
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-neutral-900/95"></div>
                                    </div>
                                </div>
                            )}
                        </span>
                    </li>
                ))}
            </ul>

            <button
                onClick={async () => {
                    setIsLoading(true);
                    setStatus("Selecting...");
                    await selectPlan(planName);
                    onSelect(); // Trigger parent update
                    setStatus("Selected!");
                    setIsLoading(false);
                    setTimeout(() => {
                        setStatus(null);
                    }, 1000);
                }}
                disabled={isLoading || isSelected}
                className={cn(
                    "w-full py-3 rounded-lg font-inter font-semibold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                    (isSelected || recommended)
                        ? "bg-[#00d9a3] hover:bg-[#00c291] text-black"
                        : "bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-foreground"
                )}>
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                {isSelected ? "Current Selection" : (status || "Select Plan")}
            </button>
        </motion.div>
    )
}

function AddonCard({ name, icon: Icon, results, setupFee, index = 0, isSelected, onToggle, onViewDetails }: any) {
    const [isLoading, setIsLoading] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={onViewDetails}
            className={cn(
                "group relative cursor-pointer bg-gradient-to-br from-black/[0.02] to-transparent dark:from-white/5 dark:border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1",
                isSelected
                    ? "border-2 border-[#00d9a3] bg-gradient-to-br from-[#00d9a3]/10 to-transparent shadow-[0_10px_40px_rgba(0,217,163,0.1)]"
                    : "border border-black/5 hover:border-[#00d9a3] hover:shadow-[0_10px_40px_rgba(0,217,163,0.05)]"
            )}
        >
            <div className="flex items-start justify-between gap-4 mb-4">
                <div className={cn(
                    "w-12 h-12 flex items-center justify-center rounded-xl border transition-colors",
                    isSelected ? "bg-[#00d9a3] text-black border-[#00d9a3]" : "bg-[#00d9a3]/10 border border-[#00d9a3]/20 text-[#00d9a3]"
                )}>
                    <Icon className="w-6 h-6" />
                </div>
                {isSelected && (
                    <div className="bg-[#00d9a3] text-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">
                        Added
                    </div>
                )}
            </div>

            <h4 className="font-space-grotesk text-xl font-bold text-foreground mb-2 leading-tight">{name}</h4>

            <p className="text-xs text-muted-foreground flex items-center gap-2 mb-6">
                <TrendingUp className="w-3 h-3 text-[#00d9a3]" />
                {results}
            </p>

            <div className="flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Setup Fee</span>
                    <span className="font-space-grotesk text-lg font-bold text-foreground">₹{setupFee.toLocaleString()}</span>
                </div>

                <button
                    onClick={async (e) => {
                        e.stopPropagation();
                        if (!isSelected) {
                            setIsLoading(true);
                            await addToPackage(name);
                            onToggle();
                            setIsLoading(false);
                        } else {
                            onToggle();
                        }
                    }}
                    disabled={isLoading}
                    className={cn(
                        "h-12 px-6 rounded-xl font-bold text-base transition-all flex items-center gap-2 shadow-lg",
                        isSelected
                            ? "bg-[#00d9a3]/10 text-[#00d9a3] hover:bg-red-500/10 hover:text-red-500 shadow-none"
                            : "bg-[#00d9a3] text-black hover:bg-[#00c291] hover:-translate-y-1 shadow-[#00d9a3]/20"
                    )}
                >
                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : (
                        isSelected ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />
                    )}
                    {isSelected ? (isHovered ? "Remove" : "Added") : "Add"}
                </button>
            </div>
        </motion.div>
    )
}

function AddonModal({ addon, isOpen, onClose, isSelected, onToggle }: any) {
    const [isLoading, setIsLoading] = useState(false)

    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground bg-white/5 rounded-full transition-colors z-10"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="p-8 md:p-10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-[#00d9a3]/10 text-[#00d9a3] rounded-2xl flex items-center justify-center border border-[#00d9a3]/20">
                            <addon.icon className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="font-space-grotesk text-2xl md:text-3xl font-bold text-white mb-2">{addon.name}</h3>
                            <div className="flex items-center gap-2 text-[#00d9a3] text-sm font-medium">
                                <TrendingUp className="w-4 h-4" />
                                {addon.results}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                            <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-red-500 font-bold text-sm uppercase tracking-wide mb-1">The Problem</h4>
                                <p className="text-gray-400 text-sm">{addon.problem}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 rounded-xl bg-[#00d9a3]/5 border border-[#00d9a3]/10">
                            <Check className="w-5 h-5 text-[#00d9a3] shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-[#00d9a3] font-bold text-sm uppercase tracking-wide mb-1">Our Solution</h4>
                                <p className="text-white text-lg font-space-grotesk font-semibold mb-2">{addon.solution}</p>
                                <p className="text-gray-400 text-sm leading-relaxed">{addon.description}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 my-6">
                            <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">One-Time Setup</p>
                                <p className="text-2xl font-bold text-white font-space-grotesk">₹{addon.setupFee.toLocaleString()}</p>
                            </div>
                            <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Monthly Cost</p>
                                <p className="text-2xl font-bold text-white font-space-grotesk">
                                    {addon.monthlyFee > 0 ? `₹${addon.monthlyFee.toLocaleString()}` : (addon.monthlyFeeDisplay || "Free")}
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={async () => {
                                if (!isSelected) {
                                    setIsLoading(true);
                                    await addToPackage(addon.name);
                                    onToggle();
                                    setIsLoading(false);
                                    onClose();
                                } else {
                                    onToggle();
                                }
                            }}
                            className={cn(
                                "w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all",
                                isSelected
                                    ? "bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/20"
                                    : "bg-[#00d9a3] text-black hover:bg-[#00c291] shadow-lg shadow-[#00d9a3]/20"
                            )}
                        >
                            {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
                            {isSelected ? (
                                <>
                                    <X className="w-5 h-5" />
                                    Remove from Package
                                </>
                            ) : (
                                <>
                                    <Plus className="w-5 h-5" />
                                    Add to Package - ₹{addon.setupFee.toLocaleString()}
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}


