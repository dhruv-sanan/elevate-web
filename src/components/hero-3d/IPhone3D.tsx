"use client"

import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion"
import { useRef, useState } from "react"
import { Coffee, ShoppingCart, Star, Plus, Check } from "lucide-react"

export function IPhone3D() {
    const ref = useRef<HTMLDivElement>(null)

    // 3D Rotation Animation Helpers
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 20 })
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 20 })

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = ref.current?.getBoundingClientRect()
        if (rect) {
            const width = rect.width
            const height = rect.height
            const mouseXRelative = e.clientX - rect.left
            const mouseYRelative = e.clientY - rect.top
            mouseX.set(mouseXRelative / width - 0.5)
            mouseY.set(mouseYRelative / height - 0.5)
        }
    }

    const handleMouseLeave = () => {
        mouseX.set(0)
        mouseY.set(0)
    }

    return (
        <motion.div
            ref={ref}
            className="relative w-[300px] h-[600px] md:w-[320px] md:h-[650px] perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d"
            }}
        >
            <motion.div
                className="w-full h-full relative"
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
            >
                {/* 3D Phone Body */}
                <div className="absolute inset-0 bg-gray-900 rounded-[55px] border-[8px] border-zinc-800 shadow-2xl overflow-hidden transform-gpu"
                    style={{ transform: "translateZ(0)" }}
                >
                    {/* Screen Content */}
                    <div className="w-full h-full bg-white dark:bg-black overflow-hidden relative">

                        {/* Status Bar */}
                        <div className="flex justify-between items-center px-6 pt-4 text-xs font-medium text-black dark:text-white z-20 relative">
                            <span>9:41</span>
                            <div className="flex gap-1.5">
                                <SignalIcon />
                                <WifiIcon />
                                <BatteryIcon />
                            </div>
                        </div>

                        {/* Dynamic Island Area */}
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-black rounded-full z-30 transition-all duration-300 hover:w-[180px] hover:h-[40px] flex items-center justify-center group cursor-pointer">
                            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-4 h-4 rounded-full bg-amber-500 animate-pulse" />
                                <span className="text-[10px] text-white font-medium whitespace-nowrap">Order Preparing...</span>
                            </div>
                        </div>

                        {/* App Header */}
                        <div className="pt-2 px-4 pb-4">
                            <div className="flex justify-between items-center mt-6 mb-4">
                                <button className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
                                    <ChevronLeftIcon />
                                </button>
                                <h3 className="text-xl font-bold dark:text-white">Menu</h3>
                                <button className="p-2 text-orange-500 hover:bg-orange-50 rounded-full transition-colors relative">
                                    <ShoppingCart size={20} />
                                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white" />
                                </button>
                            </div>
                        </div>

                        {/* Scrollable Content */}
                        <div className="h-full overflow-y-auto pb-32 px-4 scrollbar-hide">

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Morning Brew</h4>
                                <p className="text-xs text-gray-400 mb-4">Start your day right.</p>

                                <div className="space-y-3">
                                    <MenuItem
                                        name="Caramel Latte"
                                        desc="Oat milk • Extra foam"
                                        price="₹350"
                                        img="☕️"
                                        color="bg-amber-100"
                                    />
                                    <MenuItem
                                        name="Avo Toast"
                                        desc="Sourdough • Poached Egg"
                                        price="₹550"
                                        img="🥑"
                                        color="bg-green-100"
                                    />
                                    <MenuItem
                                        name="Berry Bowl"
                                        desc="Fresh fruits • Granola"
                                        price="₹450"
                                        img="🫐"
                                        color="bg-purple-100"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="mt-6"
                            >
                                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Sweet Treats</h4>
                                <div className="space-y-3">
                                    <MenuItem
                                        name="Croissant"
                                        desc="Butter • Flaky"
                                        price="₹250"
                                        img="🥐"
                                        color="bg-orange-50"
                                    />
                                </div>
                            </motion.div>

                        </div>

                        {/* Bottom Action Button (Floating on phone) */}
                        <div className="absolute bottom-6 left-4 right-4 z-20">
                            <button className="w-full bg-slate-800 text-white font-medium py-4 rounded-2xl shadow-lg shadow-slate-300 dark:shadow-black active:scale-95 transition-transform flex items-center justify-center gap-2">
                                <span>Checkout • ₹1250</span>
                            </button>
                            <div className="h-1 w-1/3 bg-black/20 dark:bg-white/20 mx-auto rounded-full mt-3" />
                        </div>
                    </div>
                </div>

                {/* Bezel / Frame Reflections */}
                <div className="absolute inset-0 rounded-[55px] border-[2px] border-white/20 pointer-events-none z-40" />

                {/* Side Buttons */}
                <div className="absolute top-24 -left-[10px] w-[4px] h-[35px] bg-zinc-700 rounded-l-md transform-gpu rotate-y-90" />
                <div className="absolute top-40 -left-[10px] w-[4px] h-[60px] bg-zinc-700 rounded-l-md transform-gpu rotate-y-90" />
                <div className="absolute top-40 -right-[10px] w-[4px] h-[90px] bg-zinc-700 rounded-r-md transform-gpu rotate-y-90" />

            </motion.div>

            {/* Ambient Floating Elements around Phone */}
            <FloatingBadge icon={<Coffee size={18} />} text="The Café Vibe" x={240} y={40} delay={0.5} />
            <FloatingBadge icon={<Star size={18} />} text="4.9 Rating" x={-40} y={300} delay={0.7} />
            <FloatingBadge icon={<ShoppingCart size={18} />} text="Fast Order" x={250} y={500} delay={0.9} />

        </motion.div>
    )
}

function MenuItem({ name, desc, price, img, color }: { name: string, desc: string, price: string, img: string, color: string }) {
    return (
        <div className="flex gap-4 p-3 rounded-2xl bg-gray-50 hover:bg-gray-100 dark:bg-zinc-900/50 dark:hover:bg-zinc-800 transition-colors group">
            <div className={`w-16 h-16 ${color} rounded-xl flex items-center justify-center text-2xl shadow-sm`}>
                {img}
            </div>
            <div className="flex-1 flex flex-col justify-center">
                <h5 className="font-bold text-gray-900 dark:text-white">{name}</h5>
                <p className="text-xs text-gray-500 line-clamp-1">{desc}</p>
                <div className="flex justify-between items-center mt-1">
                    <span className="text-sm font-semibold text-orange-600">{price}</span>
                    <button className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Plus size={14} />
                    </button>
                </div>
            </div>
        </div>
    )
}

function FloatingBadge({ icon, text, x, y, delay }: { icon: any, text: string, x: number, y: number, delay: number }) {
    return (
        <motion.div
            className="absolute z-50 bg-white dark:bg-zinc-800 px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2 border border-gray-100 dark:border-zinc-700 text-xs font-bold text-gray-800 dark:text-white pointer-events-none"
            initial={{ opacity: 0, scale: 0, x, y }}
            animate={{ opacity: 1, scale: 1, y: y + 10 }}
            transition={{
                delay,
                type: "spring",
                y: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2
                }
            }}
        >
            <span className="text-orange-500">{icon}</span>
            {/* Only show icon mainly to keep it clean, text on hover or larger screens? For now simple icon badge style */}
            {/* For this specific design, sometimes just icon + little dot looks better, but user asked for Menu interactive inside. Let's keep it simple. */}
            {/* Re-reading prompt: "Floating stats for social proof". Let's show text if needed or just minimal. */}
        </motion.div>
    )
}

// Simple Icon Helpers
const SignalIcon = () => (
    <svg width="14" height="10" viewBox="0 0 16 12" fill="currentColor">
        <path d="M1 10h2v2H1v-2zm4-3h2v5H5V7zm4-3h2v8H9V4zm4-4h2v12h-2V0z" />
    </svg>
)
const WifiIcon = () => (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M8 0c2.76 0 5 .89 7 2.5L8 12 1 2.5C3 0.89 5.24 0 8 0z" />
    </svg>
)
const BatteryIcon = () => (
    <svg width="20" height="10" viewBox="0 0 24 12" fill="currentColor">
        <rect x="1" y="1" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="3" y="3" width="14" height="6" rx="1" fill="currentColor" />
        <path d="M22 4h1v4h-1V4z" fill="currentColor" />
    </svg>
)
const ChevronLeftIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 18l-6-6 6-6" />
    </svg>
)
