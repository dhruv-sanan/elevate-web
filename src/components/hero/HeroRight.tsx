"use client"

import { useState, useEffect } from "react"
import { Calculator, MessageCircle, TrendingUp, Star } from "lucide-react"
import { useCountUp } from "@/hooks/useCountUp"
import { useCalculator } from "@/context/CalculatorContext"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const orders = [
    { dish: "Butter Chicken x2", price: "₹680", time: "2 mins ago" },
    { dish: "Panner Tikka Pizza", price: "₹420", time: "5 mins ago" },
    { dish: "Masala Dosa x3", price: "₹270", time: "8 mins ago" },
    { dish: "Chocolate Cake 1kg", price: "₹850", time: "12 mins ago" },
    { dish: "Room Booking #2847", price: "₹3,200", time: "15 mins ago" }
]

export function HeroRight() {
    const [currentOrderIndex, setCurrentOrderIndex] = useState(0)
    const { orders: contextOrders, setOrders, aov, setAov, savings } = useCalculator()

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

    // Derived values for display
    const revenue = contextOrders * aov
    const commission = revenue * 0.30 // 30% commission? Earlier file said 30% (0.4) but plan said 30%. User prompt says 30%. HeroLeft says 30%. Consistency?
    // User requested: "based on 30% commition rate". I will use 0.30.
    // However, existing text says "Commission (30%)". I should update text to 30% or match logic.
    // User prompt specifically said: "show live calculations based on 30% commition rate".
    // I will use 0.3, and label it "Commission (30%)".

    const netZomato = revenue - (revenue * 0.30)

    // Note: The context `savings` is calculated as `revenue * 0.30`. So I can just use `savings` for the loss/savings amount.

    const getBubble = (offset: number) => {
        const order = orders[(currentOrderIndex + offset) % orders.length]
        return (
            <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-[#00d9a3] shrink-0" />
                <div>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">New Order</p>
                    <p className="text-xs text-gray-400">{order.dish}</p>
                    <p className="text-sm font-semibold text-[#00d9a3]">{order.price}</p>
                    <p className="text-xs text-gray-500">{order.time}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 lg:gap-2 py-12 lg:py-0">

            {/* UPPER GROUP: CALCULATOR + BUBBLES */}
            <div className="relative w-full max-w-md">

                {/* PRIMARY: SAVINGS CALCULATOR CARD */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                    className="glass-card relative z-20 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 md:p-8 w-full shadow-[rgba(0,_0,_0,_0.17)_0px_-23px_25px_0px_inset,_rgba(0,_0,_0,_0.15)_0px_-36px_30px_0px_inset,_rgba(0,_0,_0,_0.1)_0px_-79px_40px_0px_inset]"
                >
                    {/* Header */}
                    <div className="border-b border-white/10 pb-4 flex justify-between items-center mb-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Monthly Savings</h3>
                        <Calculator className="text-gray-400 w-6 h-6" />
                    </div>

                    {/* Inputs with Sliders */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-black/5 dark:bg-white/5 rounded-lg p-3 text-center">
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Orders/Month</p>
                            <input
                                type="number"
                                value={contextOrders}
                                onChange={(e) => setOrders(Number(e.target.value))}
                                className="w-full text-center bg-transparent font-bold text-gray-900 dark:text-white border-none outline-none p-0 text-xl"
                            />
                            <input
                                type="range"
                                min="0" max="2000"
                                value={contextOrders}
                                onChange={(e) => setOrders(Number(e.target.value))}
                                className="w-full h-1 mt-2 bg-gray-300 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#00d9a3]"
                            />
                        </div>
                        <div className="bg-black/5 dark:bg-white/5 rounded-lg p-3 text-center">
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Avg Order</p>
                            <div className="flex items-center justify-center">
                                <span className="font-bold text-gray-900 dark:text-white text-xl">₹</span>
                                <input
                                    type="number"
                                    value={aov}
                                    onChange={(e) => setAov(Number(e.target.value))}
                                    className="w-16 text-center bg-transparent font-bold text-gray-900 dark:text-white border-none outline-none p-0 text-xl"
                                />
                            </div>
                            <input
                                type="range"
                                min="100" max="5000" step="50"
                                value={aov}
                                onChange={(e) => setAov(Number(e.target.value))}
                                className="w-full h-1 mt-2 bg-gray-300 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#00d9a3]"
                            />
                        </div>
                    </div>

                    {/* Comparison */}
                    <div className="space-y-4 text-sm font-medium">
                        {/* With Zomato */}
                        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 md:p-4 text-gray-700 dark:text-gray-300">
                            <div className="flex justify-between mb-1">
                                <span>Revenue:</span>
                                <span>₹{revenue.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between mb-1 text-red-500 dark:text-red-400">
                                <span>Commission (30%):</span>
                                <span>-₹{savings.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between py-1 border-t border-red-500/20 mt-2 font-bold">
                                <span>You Get:</span>
                                <span>₹{(revenue - savings).toLocaleString()}</span>
                            </div>
                        </div>

                        {/* With ElevateWeb */}
                        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3 md:p-4 text-gray-700 dark:text-gray-300">
                            <div className="flex justify-between mb-1">
                                <span>Revenue:</span>
                                <span>₹{revenue.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between mb-1 text-[#00d9a3]">
                                <span>Commission:</span>
                                <span>₹0</span>
                            </div>
                            <div className="flex justify-between py-1 border-t border-emerald-500/20 mt-2 font-bold text-gray-900 dark:text-white">
                                <span>You Keep:</span>
                                <span>₹{revenue.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>

                    {/* Savings Highlight */}
                    <div className="bg-gradient-to-r from-[#00d9a3]/20 to-emerald-500/20 border-2 border-[#00d9a3] rounded-xl p-4 md:p-6 mt-6 text-center transform hover:scale-105 transition-transform duration-300">
                        <p className="text-sm font-semibold tracking-wider text-gray-500 dark:text-gray-400 uppercase mb-1">You Save</p>
                        <p className="text-4xl md:text-5xl font-bold text-[#00d9a3] mb-1">₹{savings.toLocaleString()}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-300">per month</p>
                    </div>
                </motion.div>

                {/* SECONDARY: LIVE ORDER BUBBLES - Anchored to this wrapper */}
                <Bubble position="middle-left" delay={1.5}>
                    {getBubble(1)}
                </Bubble>
                <Bubble position="bottom-right" delay={1.8}>
                    {getBubble(2)}
                </Bubble>
            </div>

            {/* TERTIARY: STATS TICKER - Now in Flow */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="hidden md:flex gap-8 justify-center items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4 shadow-xl z-20 whitespace-nowrap"
            >
                <StatItem icon={<TrendingUp className="text-[#00d9a3]" />} value={`+${statsOrders}`} label="Orders Today" />
                <StatItem icon={<TrendingUp className="text-[#00d9a3]" />} value={`₹${statsRevenue.toLocaleString()}`} label="Revenue" />
                <StatItem icon={<Star className="text-yellow-400" />} value="4.8" label="Rating" color="text-yellow-400" />
            </motion.div>

        </div>
    )
}

function Metric({ label, value }: { label: string, value: string | number }) {
    return (
        <div className="bg-black/5 dark:bg-white/5 rounded-lg p-3 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{label}</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">{value}</p>
        </div>
    )
}

function Bubble({ children, position, delay }: { children: React.ReactNode, position: string, delay: number }) {
    const posClasses = {
        "top-left": "-top-20 -right-40 hidden md:block",
        "middle-left": "top-1/2 -left-48 -translate-y-1/2 hidden lg:block", // Fully clear on desktop
        "bottom-right": "-bottom-5 -right-24 hidden md:block"
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.5,
                delay,
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
            className={cn(
                "absolute bg-white/90 dark:bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-lg w-[200px] z-30", // Increased z-index
                posClasses[position as keyof typeof posClasses]
            )}
        >
            {children}
        </motion.div>
    )
}

function StatItem({ icon, value, label, color = "text-[#00d9a3]" }: { icon: React.ReactNode, value: string, label: string, color?: string }) {
    return (
        <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 [&>svg]:w-full [&>svg]:h-full">{icon}</div>
                <p className={cn("text-2xl font-bold", color)}>{value}</p>
            </div>
            <p className="text-xs text-gray-500">{label}</p>
        </div>
    )
}
