"use client"

import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, ArrowRight } from "lucide-react"

interface OrderSummaryBarProps {
    maintenancePlanName: string
    maintenancePrice: number
    selectedAddons: Array<{ name: string; setupFee: number; monthlyFee: number }>
    selectedBaseTierPrice: number // Assuming we might track this later, but for now it might be 0 or fixed if not selecting base tier
}

export function OrderSummaryBar({ maintenancePlanName, maintenancePrice, selectedAddons, selectedBaseTierPrice = 0 }: OrderSummaryBarProps) {

    const totalOneTime = selectedBaseTierPrice + selectedAddons.reduce((acc, curr) => acc + curr.setupFee, 0)
    const totalMonthly = maintenancePrice + selectedAddons.reduce((acc, curr) => acc + curr.monthlyFee, 0)

    const hasSelections = maintenancePlanName || selectedAddons.length > 0;

    const generateWhatsAppLink = () => {
        let text = `Hi, I'm interested in:`
        if (maintenancePlanName) text += `\n\n📌 Maintenance Plan: ${maintenancePlanName} (₹${maintenancePrice}/mo)`
        if (selectedAddons.length > 0) {
            text += `\n\n➕ Add-ons:`
            selectedAddons.forEach(addon => {
                text += `\n- ${addon.name} (Set up: ₹${addon.setupFee}, Monthly: ₹${addon.monthlyFee})`
            })
        }
        text += `\n\n💰 *Total Monthly:* ₹${totalMonthly}`
        text += `\n💰 *Total Setup:* ₹${totalOneTime}`
        text += `\n\nLet's discuss!`

        return `https://wa.me/917901919447?text=${encodeURIComponent(text)}`
    }

    return (
        <AnimatePresence>
            {hasSelections && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 right-0 z-50 bg-[#111] border-t border-white/10 p-4 md:p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
                >
                    <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex-1 w-full md:w-auto">
                            <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider font-semibold">Your Package Summary</p>
                            <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-400 text-sm">One-Time Set up:</span>
                                    <span className="font-space-grotesk font-bold text-white text-xl">₹{totalOneTime.toLocaleString()}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-400 text-sm">Monthly:</span>
                                    <span className="font-space-grotesk font-bold text-[#00d9a3] text-xl">₹{totalMonthly.toLocaleString()}</span>
                                    <span className="text-xs text-gray-500">(Maintenance + Add-ons)</span>
                                </div>
                            </div>
                        </div>

                        <a
                            href={generateWhatsAppLink()}
                            className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#00d9a3] hover:bg-[#00c291] text-black font-bold py-3 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(0,217,163,0.3)] hover:-translate-y-1"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Contact Now
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
