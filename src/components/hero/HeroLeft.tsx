"use client"

import { Sparkles, Eye, Calendar, Check, TrendingUp, MessageCircle, Star } from "lucide-react"
import { motion, Variants, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { useCalculator } from "@/context/CalculatorContext"
import { useCountUp } from "@/hooks/useCountUp"

const orders = [
    { dish: "Butter Chicken x2 + Garlic Naan x4", price: "₹1,040", time: "2 mins ago" }, // Combo value
    { dish: "Paneer Tikka Pizza (Large)", price: "₹550", time: "5 mins ago" },
    { dish: "Masala Dosa x3", price: "₹420", time: "8 mins ago" }, // Adjusted for premium pricing
    { dish: "Chocolate Cake 1kg", price: "₹950", time: "12 mins ago" },
    { dish: "Dimsum Platter (12 pcs)", price: "₹1,250", time: "15 mins ago" },
    { dish: "Gujarati Thali x2", price: "₹480", time: "18 mins ago" },
    { dish: "Dal Makhani + Jeera Rice", price: "₹520", time: "22 mins ago" },
    { dish: "Mutton Rogan Josh", price: "₹650", time: "25 mins ago" },
    { dish: "Veg Hakka Noodles + Chilli Paneer", price: "₹580", time: "30 mins ago" },
    { dish: "Tandoori Chicken (Full)", price: "₹720", time: "35 mins ago" },
    { dish: "Cold Coffee with Ice Cream x2", price: "₹360", time: "40 mins ago" },
    { dish: "Margherita Pizza (Medium)", price: "₹380", time: "45 mins ago" },
    { dish: "Jalebi (Portion of 2) x4", price: "₹320", time: "50 mins ago" },
    { dish: "Fresh Lime Soda x3", price: "₹240", time: "55 mins ago" },
    { dish: "Classic Veg Burger + Fries Combo", price: "₹290", time: "1 hour ago" }
]

export function HeroLeft() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Faster stagger
                delayChildren: 0.1,   // Faster start
                duration: 0.5
            }
        }
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.215, 0.610, 0.355, 1.000] // cubic-bezier for smooth pop
            }
        }
    }

    const { savings } = useCalculator()
    const [displaySavings, setDisplaySavings] = useState(0)
    const [currentOrderIndex, setCurrentOrderIndex] = useState(0)

    // Cycle orders
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentOrderIndex((prev) => (prev + 1) % orders.length)
        }, 6000)
        return () => clearInterval(interval)
    }, [])

    // Stats Ticker
    const statsOrders = useCountUp(12, 1500, 1.4)
    const statsRevenue = useCountUp(8450, 1500, 1.6)

    useEffect(() => {
        let start = 0
        const duration = 1500
        const end = savings * 12 // Using yearly savings or monthly? "You save ₹75,000/mo" - wait, savings is monthly or yearly?
        // Let's check CalculatorContext. monthlyRevenue = orders * aov; commission = monthlyRevenue * COMMISSION_RATE; setSavings(commission).
        // So savings is monthly.
        const target = savings

        incrementCounter()

        function incrementCounter() {
            if (target === 0) return
            const increment = target / (duration / 16)
            const timer = setInterval(() => {
                start += increment
                if (start >= target) {
                    setDisplaySavings(target)
                    clearInterval(timer)
                } else {
                    setDisplaySavings(Math.floor(start))
                }
            }, 16)
            return () => clearInterval(timer)
        }
    }, [savings])

    const scrollToCalculator = () => {
        const el = document.getElementById('hero-calculator')
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 100
            window.scrollTo({ top: y, behavior: 'smooth' })
        }
    }

    return (
        <motion.div
            className="flex flex-col items-start gap-4 md:gap-5 max-w-2xl relative z-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* 01. EYEBROW TEXT */}
            <motion.div
                variants={itemVariants}
                className="flex items-center gap-2 text-base md:text-lg text-[#00d9a3] font-medium tracking-wide uppercase"
            >
                <Sparkles className="w-4 h-4" />
                <span>For Restaurants • Cafés • Hotels in India</span>
            </motion.div>

            {/* 02. HERO HEADLINE */}
            <motion.h1
                variants={itemVariants}
                className="font-space-grotesk text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground"
            >
                <span className="block dark:hidden">
                    Stop Paying <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">30% Commission</span> to Delivery Apps.
                    <br />
                    Keep <span className="bg-gradient-to-r from-[#00d9a3] to-emerald-400 bg-clip-text text-transparent">100% Revenue.</span>
                </span>
                <span className="hidden dark:block">
                    Stop Paying <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">30% Commission</span> to Delivery Apps.
                    <br />
                    Keep <span className="bg-gradient-to-r from-[#00d9a3] to-emerald-400 bg-clip-text text-transparent">100% Revenue.</span>
                </span>
            </motion.h1>

            {/* MOBILE ONLY INLINE ORDER NOTIFICATION */}
            <motion.div variants={itemVariants} className="md:hidden w-full relative overflow-hidden flex items-center bg-white/5 backdrop-blur-md border border-[#00d9a3]/20 dark:bg-black/20 rounded-xl mt-6 mb-2 p-0 shadow-[0_0_15px_rgba(0,217,163,0.1)]">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentOrderIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="flex items-center gap-3 w-full px-4 py-3"
                    >
                        <div className="bg-[#00d9a3]/20 p-2 rounded-full">
                            <MessageCircle className="w-5 h-5 text-[#00d9a3] shrink-0" />
                        </div>
                        <div className="flex-1 flex justify-between items-center">
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-wider text-white font-bold mb-0.5">Just ordered</span>
                                <span className="text-sm font-semibold text-gray-400 truncate">{orders[currentOrderIndex].dish}</span>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-sm font-bold text-[#00d9a3]">{orders[currentOrderIndex].price}</span>
                                <span className="text-[10px] text-gray-500">{orders[currentOrderIndex].time}</span>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </motion.div>

            {/* 03. SUBHEADLINE */}
            <motion.p
                variants={itemVariants}
                className="font-inter text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl"
            >
                Not a brochure website. We build full ordering web apps for restaurants that bring repeat customers, reduce commission, and increase profit — without technical headache.
            </motion.p>

            {/* 04. CTA BUTTONS */}
            <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-0 md:mt-2"
            >
                <a
                    href="https://yummin.vercel.app/menu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#00d9a3] hover:bg-[#00c291] text-black font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,217,163,0.5)] cursor-pointer"
                >
                    <Eye className="w-5 h-5" />
                    See Live Demo
                </a>

                <a
                    href="https://calendly.com/dhruvsanan2001/free-website-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-black/10 dark:border-white/20 text-gray-900 dark:text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                    <Calendar className="w-5 h-5" />
                    Book a Free Call
                </a>
            </motion.div>

            {/* MOBILE ONLY SAVINGS PREVIEW CARD */}
            <motion.div
                variants={itemVariants}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToCalculator}
                className="flex md:hidden items-center justify-between w-full bg-white/5 backdrop-blur-md border border-[#00d9a3]/20 dark:bg-black/20 rounded-xl px-4 py-3 mt-4 shadow-[0_0_15px_rgba(0,217,163,0.15)] animate-pulse cursor-pointer"
            >
                <div className="flex items-center gap-3">
                    <div className="bg-[#00d9a3]/20 p-2 rounded-lg text-[#00d9a3]">
                        <TrendingUp className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wide">You save</span>
                        <span className="font-space-grotesk font-bold text-[#00d9a3] text-sm">₹{displaySavings.toLocaleString('en-IN')}/mo</span>
                    </div>
                </div>
                <div className="text-xs font-bold text-black px-4 py-2 bg-[#00d9a3] rounded-lg shadow-[0_0_10px_rgba(0,217,163,0.3)]">
                    See How
                </div>
            </motion.div>

            {/* MOBILE ONLY STATS TICKER */}
            <motion.div
                variants={itemVariants}
                className="flex md:hidden items-center gap-6 overflow-x-auto w-full bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 dark:bg-black/20 rounded-xl px-4 py-1 mt-4 shadow-sm [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
                <div className="flex items-center gap-2.5 whitespace-nowrap shrink-0">
                    <div className="bg-[#00d9a3]/10 p-1.5 rounded-lg">
                        <TrendingUp className="w-4 h-4 text-[#00d9a3]" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[15px] font-bold text-gray-900 dark:text-white leading-none">+{statsOrders}</span>
                        <span className="text-[10px] text-gray-500 uppercase font-medium tracking-wide mt-1">Orders Today</span>
                    </div>
                </div>

                <div className="w-[1px] h-8 bg-gray-200 dark:bg-white/10 shrink-0" />

                <div className="flex items-center gap-2.5 whitespace-nowrap shrink-0">
                    <div className="bg-[#00d9a3]/10 p-1.5 rounded-lg">
                        <TrendingUp className="w-4 h-4 text-[#00d9a3]" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[15px] font-bold text-gray-900 dark:text-white leading-none">₹{statsRevenue.toLocaleString()}</span>
                        <span className="text-[10px] text-gray-500 uppercase font-medium tracking-wide mt-1">Revenue</span>
                    </div>
                </div>

                <div className="w-[1px] h-8 bg-gray-200 dark:bg-white/10 shrink-0" />

                <div className="flex items-center gap-2.5 whitespace-nowrap shrink-0 pr-2">
                    <div className="bg-yellow-400/10 p-1.5 rounded-lg">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[15px] font-bold text-gray-900 dark:text-white leading-none">4.8</span>
                        <span className="text-[10px] text-gray-500 uppercase font-medium tracking-wide mt-1">Rating</span>
                    </div>
                </div>
            </motion.div>

            {/* 05. TRUST INDICATORS */}
            <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 md:gap-6 text-sm text-gray-500 mt-2 md:mt-6"
            >
                {["Set up in 14 days", "Minimal monthly fees"].map((text) => (
                    <div key={text} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#00d9a3]" />
                        <span>{text}</span>
                    </div>
                ))}
            </motion.div>
        </motion.div>
    )
}
