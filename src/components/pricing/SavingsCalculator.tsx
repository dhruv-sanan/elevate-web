"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calculator, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCalculator } from "@/context/CalculatorContext"

export function SavingsCalculator() {
    const { orders, setOrders, aov, setAov, savings } = useCalculator()
    const [isMinimized, setIsMinimized] = useState(false)

    return (
        <>
            {/* Desktop Floating Island */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="flex fixed top-20 left-1/2 -translate-x-1/2 z-40 flex-col items-center w-full max-w-[95vw] md:w-auto"
            >
                <div className={cn(
                    "backdrop-blur-xl bg-black/80 border border-white/10 shadow-2xl transition-all duration-300 overflow-hidden",
                    isMinimized ? "rounded-full px-6 py-3 cursor-pointer hover:bg-black/90" : "rounded-3xl p-4 md:p-6 w-full md:w-[900px]"
                )}>
                    {isMinimized ? (
                        <div onClick={() => setIsMinimized(false)} className="flex items-center gap-4">
                            <div className="bg-red-500/20 p-2 rounded-full text-red-500">
                                <Calculator className="w-5 h-5" />
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-sm text-gray-400">Delivery Apps takes:</span>
                                <span className="font-space-grotesk font-bold text-white text-lg">₹{(savings * 12).toLocaleString('en-IN')}/yr</span>
                            </div>
                            <ChevronDown className="w-4 h-4 text-gray-500" />
                        </div>
                    ) : (
                        <div className="flex flex-col gap-4 md:gap-6">
                            {/* Header Row */}
                            <div className="flex items-center justify-between border-b border-white/5 pb-3 md:pb-4">
                                <div className="flex items-center gap-3">
                                    <div className="bg-[#00d9a3]/10 p-2.5 rounded-xl text-[#00d9a3]">
                                        <Calculator className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-space-grotesk font-bold text-white text-xl">Savings Calculator</h3>
                                        <p className="text-xs text-gray-400">See what you lose @ 30% commission</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsMinimized(true)}
                                    className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
                                >
                                    <ChevronUp className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Calculator Body */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                                {/* Inputs */}
                                <div className="space-y-4 md:space-y-6">
                                    <div className="space-y-2 md:space-y-3">
                                        <div className="flex justify-between items-center bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                                            <span className="text-sm text-gray-400">Monthly Orders</span>
                                            <input
                                                type="number"
                                                value={orders}
                                                onChange={(e) => setOrders(Number(e.target.value))}
                                                className="bg-transparent font-space-grotesk font-bold text-white text-lg text-right w-24 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                            />
                                        </div>
                                        <input
                                            type="range"
                                            min="0"
                                            max="1000"
                                            value={orders}
                                            onChange={(e) => setOrders(parseInt(e.target.value))}
                                            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#00d9a3] hover:accent-[#00c291] transition-all"
                                        />
                                        <div className="flex justify-between text-[10px] text-gray-500 px-1">
                                            <span>0</span>
                                            <span>1000+</span>
                                        </div>
                                    </div>

                                    <div className="space-y-2 md:space-y-3">
                                        <div className="flex justify-between items-center bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                                            <span className="text-sm text-gray-400">Avg Order Value</span>
                                            <div className="flex items-center">
                                                <span className="font-space-grotesk font-bold text-white text-lg mr-1">₹</span>
                                                <input
                                                    type="number"
                                                    value={aov}
                                                    onChange={(e) => setAov(Number(e.target.value))}
                                                    className="bg-transparent font-space-grotesk font-bold text-white text-lg text-right w-20 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                                />
                                            </div>
                                        </div>
                                        <input
                                            type="range"
                                            min="100"
                                            max="2000"
                                            step="50"
                                            value={aov}
                                            onChange={(e) => setAov(parseInt(e.target.value))}
                                            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#00d9a3] hover:accent-[#00c291] transition-all"
                                        />
                                        <div className="flex justify-between text-[10px] text-gray-500 px-1">
                                            <span>₹100</span>
                                            <span>₹2000+</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Results */}
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-3 md:gap-4 h-full">
                                        <div className="bg-white/5 border border-white/10 rounded-2xl p-3 md:p-4 flex flex-col justify-between">
                                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Monthly Loss</span>
                                            <div>
                                                <p className="font-space-grotesk font-bold text-red-500 text-2xl">-₹{savings.toLocaleString('en-IN')}</p>
                                                <p className="text-[10px] text-gray-500">to Delivery Apps @ 30%</p>
                                            </div>
                                        </div>
                                        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-3 md:p-4 flex flex-col justify-between relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/20 blur-2xl rounded-full translate-x-10 -translate-y-10"></div>
                                            <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">Yearly Loss</span>
                                            <div>
                                                <p className="font-space-grotesk font-bold text-red-500 text-3xl">-₹{(savings * 12).toLocaleString('en-IN')}</p>
                                                <p className="text-[10px] text-red-400/60">Money burnt per year</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>


        </>
    )
}
