"use client"

import { useState, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { PortfolioItem } from "./portfolioData"
import { Star, TrendingUp, IndianRupee } from "lucide-react"

interface RestaurantCardProps {
  item: PortfolioItem;
  index: number;
}

export function RestaurantCard({ item, index }: RestaurantCardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none)").matches)
  }, [])

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isTouch) return
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    if (isTouch) return
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ perspective: 1200 }}
      className="w-full h-full"
    >
      <motion.div
        className="relative group w-full h-full rounded-2xl md:rounded-3xl glass-card overflow-hidden cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: isTouch ? 0 : rotateX,
          rotateY: isTouch ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: isTouch ? 1 : 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Glow behind card on hover */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${item.color} blur-2xl -z-10`} />

        <div className="p-4 md:p-8 flex flex-col h-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl md:rounded-3xl">

          {/* Desktop Layout is Column. Mobile Layout is Row on Top, then details. */}
          <div className="flex flex-row md:flex-col gap-4 md:gap-0 h-full">

            {/* Image (Left on mobile, Top on desktop) */}
            <div
              className="relative w-[100px] h-[100px] md:w-full md:h-[200px] rounded-xl md:rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 shrink-0 border border-gray-200 dark:border-gray-700 shadow-inner md:mb-6"
              style={{ transform: isTouch ? "none" : "translateZ(50px)" }}
            >
              <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className={`absolute inset-0 opacity-30 bg-gradient-to-tr ${item.color} mix-blend-overlay pointer-events-none`} />
            </div>

            {/* Content (Right on mobile, Bottom on desktop) */}
            <div className="flex flex-col flex-1 min-w-0">
              {/* Header */}
              <div className="flex justify-between items-start mb-2 md:mb-6" style={{ transform: isTouch ? "none" : "translateZ(30px)" }}>
                <div className="w-full">
                  <div className="flex justify-between items-center w-full">
                    <h3 className="text-sm md:text-2xl font-bold text-gray-900 dark:text-white mb-0.5 md:mb-1 truncate pr-2">{item.name}</h3>
                    <div className={`hidden md:block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${item.color} shadow-lg shrink-0`}>
                      {item.category}
                    </div>
                  </div>
                  <p className="text-[10px] md:text-sm text-gray-600 dark:text-gray-400 truncate">{item.city} <span className="inline md:inline">• {item.category}</span></p>
                </div>
              </div>

              {/* Mobile Only: Metrics in a tight row */}
              <div className="flex md:hidden flex-wrap items-center gap-2 mb-2">
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-emerald-500" />
                  <span className="text-xs font-bold text-gray-900 dark:text-white">{item.metrics.ordersIncrease}</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                <div className="flex items-center gap-1">
                  <IndianRupee className="w-3 h-3 text-emerald-500" />
                  <span className="text-xs font-bold text-gray-900 dark:text-white">{item.metrics.revenueIncrease}</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-500" />
                  <span className="text-xs font-bold text-gray-900 dark:text-white">{item.metrics.rating}</span>
                </div>
              </div>

              {/* Desktop Only: Metrics Grid */}
              <div className="hidden md:grid grid-cols-3 gap-3 mb-6" style={{ transform: isTouch ? "none" : "translateZ(20px)" }}>
                <div className="flex flex-col items-center p-3 rounded-xl bg-gray-50 dark:bg-white/5">
                  <TrendingUp className="w-5 h-5 text-emerald-500 mb-1" />
                  <span className="text-sm font-bold text-gray-900 dark:text-white">{item.metrics.ordersIncrease}</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider">Orders</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-xl bg-gray-50 dark:bg-white/5">
                  <IndianRupee className="w-5 h-5 text-emerald-500 mb-1" />
                  <span className="text-sm font-bold text-gray-900 dark:text-white">{item.metrics.revenueIncrease}</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider">Revenue</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-xl bg-gray-50 dark:bg-white/5">
                  <Star className="w-5 h-5 text-amber-500 mb-1" />
                  <span className="text-sm font-bold text-gray-900 dark:text-white">{item.metrics.rating}</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider">Rating</span>
                </div>
              </div>

              {/* Testimonial Snippet */}
              <div className="mt-auto italic text-[11px] md:text-sm text-gray-600 dark:text-gray-400 border-l-2 border-emerald-500 pl-2 md:pl-3 py-0.5 md:py-1 mb-3 md:mb-4 line-clamp-2 md:line-clamp-none" style={{ transform: isTouch ? "none" : "translateZ(10px)" }}>
                "{item.testimonial.quote.substring(0, 80)}..."
              </div>


            </div>
          </div>

        </div>
      </motion.div>
    </motion.div>
  )
}
