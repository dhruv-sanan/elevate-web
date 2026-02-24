"use client"

import { useState, useEffect, Fragment } from "react"
import {
    TrendingUp,
    Users,
    Star,
    Zap,
    Play,
    CheckCircle,
    Clock,
    ArrowUp,
    MessageSquare,
    Quote,
    ChevronLeft,
    ChevronRight,
    BarChart3,
    ArrowRight,
    Sparkles,
    Percent,
    Globe,
    Cake,
    Shield,
    MapPin,
    Award
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export function TestimonialsSection() {
    return (
        <section className="relative w-full py-12 md:py-16 px-6 bg-background overflow-hidden border-t border-white/5">
            <div className="max-w-[1400px] mx-auto">
                <SectionHeader />
                {/* <StatsBar />
                <VideoTestimonials />
                <WrittenTestimonials /> */}
                <ResultsSection />
                <TrustBadgesRow />
            </div>
        </section>
    )
}

function SectionHeader() {
    return (
        <div className="text-center mb-12">
            <p className="font-inter text-sm font-semibold tracking-wider uppercase text-[#00d9a3] mb-4">
                // REAL RESULTS FROM AMRITSAR
            </p>
            <h2 className="font-space-grotesk text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
                They Stopped Paying Commissions.
                <br />
                <span className="bg-gradient-to-r from-[#00d9a3] to-[#10b981] bg-clip-text text-transparent">
                    Here&apos;s What Happened.
                </span>
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Local restaurants, cafés, and hotels who took control of their orders—
                and never looked back at Delivery Apps.
            </p>
        </div>
    )
}

function StatsBar() {
    return (
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[auto_1px_auto_1px_auto_1px_auto] gap-8 items-center bg-gradient-to-br from-[#00d9a3]/10 to-[#10b981]/5 border border-[#00d9a3]/20 rounded-3xl p-8 md:p-12 mb-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00d9a3]/10 to-transparent w-full h-full animate-[shimmer_3s_infinite] -translate-x-full" />

            <StatItem
                icon={TrendingUp}
                number="₹84L+"
                label="Saved in Commissions"
                sublabel="Across all clients (2024)"
            />
            <div className="hidden lg:block w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

            <StatItem
                icon={Users}
                number="127+"
                label="Active Clients"
                sublabel="Restaurants & Hotels"
            />
            <div className="hidden lg:block w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

            <StatItem
                icon={Star}
                number="4.9/5"
                label="Client Satisfaction"
                sublabel="From Google Reviews"
            />
            <div className="hidden lg:block w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

            <StatItem
                icon={Zap}
                number="7 Days"
                label="Avg Setup Time"
                sublabel="From chat to live site"
            />
        </div>
    )
}

function StatItem({ icon: Icon, number, label, sublabel }: any) {
    return (
        <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#00d9a3]/10 border border-[#00d9a3]/30 rounded-2xl flex items-center justify-center mb-4 text-[#00d9a3]">
                <Icon className="w-8 h-8" />
            </div>
            <p className="font-space-grotesk text-4xl md:text-5xl font-bold text-[#00d9a3] mb-2 leading-none">
                {number}
            </p>
            <p className="font-inter text-base font-semibold text-foreground mb-1">
                {label}
            </p>
            <p className="font-inter text-sm text-muted-foreground">
                {sublabel}
            </p>
        </div>
    )
}

function VideoTestimonials() {
    return (
        <div className="mt-16 mb-24">
            <div className="text-center mb-12">
                <h3 className="font-space-grotesk text-3xl font-bold text-foreground flex items-center justify-center gap-2 mb-3">
                    <Play className="w-6 h-6" />
                    Video Testimonials
                </h3>
                <p className="font-inter text-base text-muted-foreground">
                    Hear directly from Amritsar restaurant owners who made the switch
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <VideoCard
                    thumbnail="/testimonials/thumbnail-1.jpg"
                    duration="2:34"
                    avatar="/clients/avatar-1.jpg"
                    name="Rajveer Singh"
                    business="Tamra Restaurant, Amritsar"
                    quote="We were paying ₹45,000/month to Delivery Apps. Now? Zero. Dhruv's system paid for itself in 6 weeks."
                    stats={[
                        { icon: ArrowUp, text: "₹5.4L saved/year" },
                        { icon: Clock, text: "Setup in 5 days" }
                    ]}
                />
                <VideoCard
                    thumbnail="/testimonials/thumbnail-2.jpg"
                    duration="3:12"
                    avatar="/clients/avatar-2.jpg"
                    name="Simran Kaur"
                    business="Bakeman Cake & Pastry Palace"
                    quote="The custom cake orders tripled. WhatsApp automation is a game-changer. Best investment we made."
                    stats={[
                        { icon: TrendingUp, text: "3x more orders" },
                        { icon: Star, text: "4.9★ rating", iconClass: "text-yellow-400" }
                    ]}
                />
                <VideoCard
                    thumbnail="/testimonials/thumbnail-3.jpg"
                    duration="4:05"
                    avatar="/clients/avatar-3.jpg"
                    name="Harpreet Singh"
                    business="Heritage Hotel, Amritsar"
                    quote="OTAs were taking 25%. Now we have direct bookings. The AI concierge answers NRI queries at 3 AM."
                    stats={[
                        { icon: Percent, text: "60% direct bookings" },
                        { icon: Globe, text: "NRI-friendly" }
                    ]}
                />
            </div>
        </div>
    )
}

function VideoCard({ thumbnail, duration, avatar, name, business, quote, stats }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="group bg-black/[0.02] dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-[1.25rem] overflow-hidden transition-all duration-300 hover:border-[#00d9a3]/30 hover:shadow-[0_10px_40px_rgba(0,217,163,0.1)]"
        >
            <div className="relative aspect-video bg-black/50 overflow-hidden">
                {/* Visual placeholder for thumbnail */}
                <div className="absolute inset-0 bg-neutral-800" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
                    <button className="w-20 h-20 bg-[#00d9a3] hover:bg-[#00c291] rounded-full flex items-center justify-center text-black transition-all hover:scale-110">
                        <Play className="w-8 h-8 fill-black translate-x-1" />
                    </button>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md text-white text-xs font-bold px-2 py-1 rounded">
                    {duration}
                </div>
            </div>

            <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full border-2 border-[#00d9a3]/30 bg-neutral-200 overflow-hidden shrink-0">
                        {/* Placeholder for avatar */}
                        <div className="w-full h-full bg-neutral-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h4 className="font-space-grotesk text-base font-bold text-foreground truncate">{name}</h4>
                        <p className="font-inter text-sm text-muted-foreground truncate">{business}</p>
                    </div>
                    <CheckCircle className="w-5 h-5 text-[#00d9a3] shrink-0" />
                </div>

                <p className="font-inter text-sm italic text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    &quot;{quote}&quot;
                </p>

                <div className="flex flex-wrap gap-4">
                    {stats.map((stat: any, i: number) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                            <stat.icon className={cn("w-4 h-4 text-[#00d9a3]", stat.iconClass)} />
                            <span>{stat.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

function WrittenTestimonials() {
    const [activeIndex, setActiveIndex] = useState(0)
    const testimonials = [
        {
            text: "I was skeptical about leaving Delivery Apps, but Dhruv showed me the math: ₹70,000/month in commissions. Now I keep every rupee. The WhatsApp ordering system is so smooth—customers love it. Setup took 14 days. ROI in 4 weeks.",
            name: "Amrit Kaur",
            business: "Kesar Da Dhaba, Amritsar",
            time: "3 months ago",
            stats: { icon: TrendingUp, text: "₹2.1L saved" },
            avatar: "/clients/avatar-4.jpg"
        },
        {
            text: "The QR table ordering changed everything. No more waiters running around with pens. Customers scan, order, pay—done. Kitchen gets orders instantly. Tips increased by 30% because service is faster. Dhruv even trained my staff for free. Total professional.",
            name: "Gurpreet Singh",
            business: "Café Nomad, Amritsar",
            time: "1 month ago",
            stats: { icon: Users, text: "30% faster service" },
            avatar: "/clients/avatar-5.jpg"
        },
        {
            text: "We're a small bakery. The custom cake inquiry form is genius—customers describe exactly what they want, upload photos, pick flavors. We get WhatsApp notifications instantly. No more 'Sorry, I forgot your order' moments. Bookings increased 3x during Diwali.",
            name: "Neha Sharma",
            business: "Cake Studio, Amritsar",
            time: "2 weeks ago",
            stats: { icon: Cake, text: "3x bookings" },
            avatar: "/clients/avatar-6.jpg"
        }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [testimonials.length])

    return (
        <div className="mt-24 mb-24">
            <div className="text-center mb-12">
                <h3 className="font-space-grotesk text-3xl font-bold text-foreground flex items-center justify-center gap-2">
                    <MessageSquare className="w-6 h-6" />
                    What Clients Are Saying
                </h3>
            </div>

            <div className="relative max-w-4xl mx-auto px-4 md:px-12">
                <button
                    onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-[#00d9a3]/10 hover:border-[#00d9a3] hover:text-[#00d9a3] flex items-center justify-center transition-all z-10 hidden md:flex"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <div className="relative overflow-hidden min-h-[400px] md:min-h-[350px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            className="bg-gradient-to-br from-black/[0.02] to-transparent dark:from-white/5 dark:to-white/[0.02] border border-black/5 dark:border-white/10 rounded-3xl p-8 md:p-12"
                        >
                            <Quote className="absolute top-6 right-8 w-16 h-16 text-[#00d9a3]/10" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <p className="font-inter text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 relative z-10">
                                &quot;{testimonials[activeIndex].text}&quot;
                            </p>

                            <div className="flex flex-wrap items-center justify-between gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full border-2 border-[#00d9a3]/30 bg-neutral-200 overflow-hidden">
                                        <div className="w-full h-full bg-neutral-300" />
                                    </div>
                                    <div>
                                        <h4 className="font-space-grotesk text-lg font-bold text-foreground">{testimonials[activeIndex].name}</h4>
                                        <p className="font-inter text-sm text-muted-foreground">{testimonials[activeIndex].business}</p>
                                        <p className="font-inter text-xs text-muted-foreground/60">{testimonials[activeIndex].time}</p>
                                    </div>
                                </div>

                                <StatBadge icon={testimonials[activeIndex].stats.icon} text={testimonials[activeIndex].stats.text} />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <button
                    onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-[#00d9a3]/10 hover:border-[#00d9a3] hover:text-[#00d9a3] flex items-center justify-center transition-all z-10 hidden md:flex"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={cn(
                                "w-2 h-2 rounded-full transition-all duration-300",
                                i === activeIndex ? "w-8 bg-[#00d9a3]" : "bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40"
                            )}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

function ResultsSection() {
    return (
        <div className="mt-24 mb-24">
            <div className="text-center mb-16">
                <h3 className="font-space-grotesk text-3xl font-bold text-foreground flex items-center justify-center gap-2 mb-3">
                    <BarChart3 className="w-6 h-6" />
                    Real Numbers, Real Impact
                </h3>
                <p className="font-inter text-lg text-muted-foreground">
                    Month-over-month results after switching to commission-free ordering
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[75rem] mx-auto">
                <ResultCard
                    name="Tamra Restaurant"
                    details="Restaurant • 50 seats"
                    before={{
                        label: "With Delivery Apps (Before)",
                        orders: "847",
                        revenue: "₹2,95,000",
                        commission: "-₹1,18,000",
                        net: "₹1,77,000"
                    }}
                    after={{
                        label: "With ElevateWeb (After)",
                        orders: "1,023",
                        ordersGrowth: "+21%",
                        revenue: "₹3,58,000",
                        revenueGrowth: "+21%",
                        commission: "₹0",
                        net: "₹3,58,000"
                    }}
                    footer={{
                        icon: Sparkles,
                        text: "SAVED ₹1,81,000 MORE/MONTH",
                        timeframe: "Results after 3 months"
                    }}
                />

                <ResultCard
                    name="Bakeman Cake & Pastry Palace"
                    details="Bakery • Custom Cakes"
                    before={{
                        label: "Manual Orders (Before)",
                        orders: "124",
                        metric2Label: "Avg Order Value",
                        metric2Value: "₹850",
                        revenue: "₹1,05,400",
                        lossLabel: "Missed Orders (est.)",
                        lossValue: "~₹40,000"
                    }}
                    after={{
                        label: "With Auto System (After)",
                        orders: "378",
                        ordersGrowth: "+205%",
                        metric2Label: "Avg Order Value",
                        metric2Value: "₹920",
                        metric2Growth: "+8%",
                        revenue: "₹3,47,760",
                        successLabel: "Zero Missed Orders",
                        successValue: "100% captured"
                    }}
                    footer={{
                        icon: TrendingUp,
                        text: "₹2,42,360 MORE REVENUE/MONTH",
                        timeframe: "Results after 2 months"
                    }}
                    variant="bakery"
                />
            </div>
        </div>
    )
}

function ResultCard({ name, details, before, after, footer, variant = "standard" }: any) {
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="group bg-gradient-to-br from-black/[0.02] to-transparent dark:from-white/5 dark:to-white/[0.02] border border-black/5 dark:border-white/10 rounded-3xl p-8 hover:border-[#00d9a3]/30 transition-all duration-300"
        >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-8 pb-6 border-b border-black/5 dark:border-white/10">
                <div>
                    <h4 className="font-space-grotesk text-2xl font-bold text-foreground mb-1">{name}</h4>
                    <p className="font-inter text-sm text-muted-foreground">{details}</p>
                </div>
            </div>

            <div className="relative">
                <div className="md:hidden text-[10px] uppercase tracking-wider text-muted-foreground font-semibold text-center mb-4 flex items-center justify-center gap-2">
                    <ChevronLeft className="w-3 h-3" />
                    Swipe to compare
                    <ChevronRight className="w-3 h-3" />
                </div>
                
                <div 
                    className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-[1fr_auto_1fr] gap-6 items-center pb-4 md:pb-0 scrollbar-hide"
                    onScroll={(e) => {
                        const target = e.currentTarget;
                        const scrollLeft = target.scrollLeft;
                        const width = target.clientWidth;
                        setActiveSlide(scrollLeft > width / 2 ? 1 : 0);
                    }}
                >
                    {/* Before */}
                    <div className="space-y-4 min-w-full snap-center md:min-w-0">
                        <p className="font-inter text-xs font-bold uppercase tracking-wider text-muted-foreground">{before.label}</p>
                        <Metric label="Monthly Orders" value={before.orders} />
                        {variant === "standard" ? (
                            <>
                                <Metric label="Revenue" value={before.revenue} />
                                <Metric label="Commission (30%)" value={before.commission} isLoss />
                                <TotalMetric label="YOU KEPT" value={before.net} isLoss />
                            </>
                        ) : (
                            <>
                                <Metric label={before.metric2Label} value={before.metric2Value} />
                                <Metric label="Revenue" value={before.revenue} />
                                <Metric label={before.lossLabel} value={before.lossValue} isLoss />
                            </>
                        )}
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:flex justify-center">
                        <ArrowRight className="w-8 h-8 text-[#00d9a3]" />
                    </div>

                    {/* After */}
                    <div className="space-y-4 min-w-full snap-center md:min-w-0">
                        <p className="font-inter text-xs font-bold uppercase tracking-wider text-[#00d9a3]">{after.label}</p>
                        <Metric label="Monthly Orders" value={after.orders} growth={after.ordersGrowth} />
                        {variant === "standard" ? (
                            <>
                                <Metric label="Revenue" value={after.revenue} growth={after.revenueGrowth} />
                                <Metric label="Commission" value={after.commission} isSuccess />
                                <TotalMetric label="YOU KEEP" value={after.net} isSuccess />
                            </>
                        ) : (
                            <>
                                <Metric label={after.metric2Label} value={after.metric2Value} growth={after.metric2Growth} />
                                <Metric label="Revenue" value={after.revenue} />
                                <Metric label={after.successLabel} value={after.successValue} isSuccess />
                            </>
                        )}
                    </div>
                </div>

                {/* Dot Indicators (Mobile Only) */}
                <div className="flex md:hidden justify-center gap-2 mt-4">
                    <div className={cn("w-2 h-2 rounded-full transition-all duration-300", activeSlide === 0 ? "w-6 bg-[#00d9a3]" : "bg-black/20 dark:bg-white/20")} />
                    <div className={cn("w-2 h-2 rounded-full transition-all duration-300", activeSlide === 1 ? "w-6 bg-[#00d9a3]" : "bg-black/20 dark:bg-white/20")} />
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00d9a3] to-[#10b981] text-black font-bold text-xs px-4 py-2 rounded-full uppercase tracking-wide">
                    <footer.icon className="w-4 h-4" />
                    {footer.text}
                </div>
                <p className="font-inter text-xs text-muted-foreground">{footer.timeframe}</p>
            </div>
        </motion.div>
    )
}

function Metric({ label, value, growth, isLoss, isSuccess }: any) {
    return (
        <div className={cn(
            "p-3 rounded-lg border",
            isLoss ? "bg-red-500/10 border-red-500/20" : isSuccess ? "bg-[#00d9a3]/10 border-[#00d9a3]/20" : "bg-black/5 dark:bg-black/20 border-transparent"
        )}>
            <p className="font-inter text-xs text-muted-foreground mb-1">{label}</p>
            <div className="flex items-baseline gap-2">
                <p className={cn(
                    "font-space-grotesk text-lg font-bold",
                    isLoss ? "text-red-500" : isSuccess ? "text-[#00d9a3]" : "text-foreground"
                )}>
                    {value}
                </p>
                {growth && (
                    <span className="text-[10px] font-bold bg-[#00d9a3]/10 text-[#00d9a3] px-1.5 py-0.5 rounded">
                        {growth}
                    </span>
                )}
            </div>
        </div>
    )
}

function TotalMetric({ label, value, isLoss, isSuccess }: any) {
    return (
        <div className={cn(
            "p-4 rounded-xl border mt-2",
            isLoss ? "bg-red-500/5 border-red-500/30" : "bg-[#00d9a3]/10 border-[#00d9a3]/30"
        )}>
            <p className="font-inter text-xs font-bold mb-1 opacity-80">{label}</p>
            <p className={cn(
                "font-space-grotesk text-2xl font-bold",
                isLoss ? "text-red-500" : "text-[#00d9a3]"
            )}>
                {value}
            </p>
        </div>
    )
}

function TrustBadgesRow() {
    const badges = [
        { icon: Shield, title: "100% Secure", subtitle: "SSL Encrypted" },
        { icon: Zap, title: "14-Day Setup", subtitle: "Guaranteed" },
        { icon: Clock, title: "24/7 Support", subtitle: "WhatsApp & Call" },
        { icon: MapPin, title: "Amritsar-Based", subtitle: "Local Support" },
        { icon: Award, title: "No Contracts", subtitle: "Cancel Anytime" },
    ]

    return (
        <div className="mt-24 pt-12 border-t border-black/5 dark:border-white/10">
            <p className="text-center font-inter text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-12">
                Trusted by Amritsar&apos;s Best
            </p>

            <div className="relative flex flex-nowrap overflow-x-auto gap-8 items-center px-4 md:grid md:grid-cols-2 lg:grid-cols-[auto_1px_auto_1px_auto_1px_auto_1px_auto] md:justify-items-center snap-x snap-mandatory">
                {badges.map((badge, i) => (
                    <Fragment key={i}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center text-center group min-w-[160px] snap-center"
                        >
                            <div className="w-16 h-16 bg-[#00d9a3]/5 border border-[#00d9a3]/20 rounded-2xl flex items-center justify-center mb-4 text-[#00d9a3] group-hover:scale-110 transition-transform duration-300">
                                <badge.icon className="w-8 h-8" />
                            </div>
                            <h5 className="font-space-grotesk text-base font-bold text-foreground mb-1">{badge.title}</h5>
                            <p className="font-inter text-sm text-muted-foreground">{badge.subtitle}</p>
                        </motion.div>
                        {i < badges.length - 1 && (
                            <div className="hidden lg:block w-px h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                        )}
                    </Fragment>
                ))}
            </div>
        </div>
    )
}

function StatBadge({ icon: Icon, text }: any) {
    return (
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d9a3]/10 border border-[#00d9a3]/20 text-[#00d9a3] font-semibold text-sm">
            <Icon className="w-4 h-4" />
            <span>{text}</span>
        </div>
    )
}
