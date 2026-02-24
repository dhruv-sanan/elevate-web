"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { PortfolioItem } from "./portfolioData"
import { ExternalLink, Star, TrendingUp, IndianRupee } from "lucide-react"

interface RestaurantCardProps {
  item: PortfolioItem;
  index: number;
}

export function RestaurantCard({ item, index }: RestaurantCardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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
      className="w-full"
    >
      <motion.div
        className="relative group w-full rounded-3xl glass-card overflow-hidden cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Glow behind card on hover */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${item.color} blur-2xl -z-10`} />
        
        <div className="p-4 md:p-8 flex flex-col h-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl md:rounded-3xl">
          
          {/* Header */}
          <div className="flex justify-between items-start mb-4 md:mb-6" style={{ transform: "translateZ(30px)" }}>
            <div className="w-full">
              <div className="flex justify-between items-center w-full">
                <h3 className="text-base md:text-2xl font-bold text-gray-900 dark:text-white mb-1 truncate pr-2">{item.name}</h3>
                <div className={`hidden md:block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${item.color} shadow-lg shrink-0`}>
                  {item.category}
                </div>
              </div>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 truncate">{item.city} <span className="hidden md:inline">• {item.category}</span></p>
            </div>
          </div>

          {/* Mobile Accent Bar (replaces phone mockup on mobile) */}
          <div className="md:hidden w-full h-1.5 rounded-full mb-4 bg-gradient-to-r" style={{ transform: "translateZ(10px)" }}>
            <div className={`w-full h-full rounded-full bg-gradient-to-r ${item.color} opacity-80`} />
          </div>

          {/* Mini Phone Visual */}
          <div className="hidden md:flex relative w-full h-[200px] mb-6 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 items-center justify-center border border-gray-200 dark:border-gray-700" style={{ transform: "translateZ(50px)" }}>
            <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${item.color}`} />
            
            {/* Fake Mockup UI */}
            <div className="w-[120px] h-[240px] bg-black rounded-[20px] border-4 border-zinc-800 translate-y-8 flex flex-col shadow-2xl relative overflow-hidden">
               <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[40px] h-[12px] bg-black rounded-full z-20" />
               <div className="w-full h-24 bg-zinc-900 relative">
                  <div className={`absolute bottom-0 w-full h-1/2 bg-gradient-to-t ${item.color} opacity-40`} />
               </div>
               <div className="p-2 space-y-2">
                 <div className="w-16 h-3 bg-white/20 rounded-md" />
                 <div className="flex gap-1">
                   <div className="w-8 h-8 bg-white/10 rounded-md" />
                   <div className="w-8 h-8 bg-white/10 rounded-md" />
                 </div>
               </div>
            </div>
            
            <a 
              href={item.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 backdrop-blur-sm transition-all duration-300"
            >
              <span className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-bold text-sm shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                View Demo <ExternalLink size={14} />
              </span>
            </a>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 mb-4 md:mb-6" style={{ transform: "translateZ(20px)" }}>
            <div className="flex flex-col items-center p-2 md:p-3 rounded-xl bg-gray-50 dark:bg-white/5">
              <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-emerald-500 mb-1" />
              <span className="text-xs md:text-sm font-bold text-gray-900 dark:text-white">{item.metrics.ordersIncrease}</span>
              <span className="hidden md:block text-[10px] text-gray-500 uppercase tracking-wider">Orders</span>
            </div>
            <div className="hidden md:flex flex-col items-center p-3 rounded-xl bg-gray-50 dark:bg-white/5">
              <IndianRupee className="w-5 h-5 text-emerald-500 mb-1" />
              <span className="text-sm font-bold text-gray-900 dark:text-white">{item.metrics.revenueIncrease}</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-wider">Revenue</span>
            </div>
            <div className="flex flex-col items-center p-2 md:p-3 rounded-xl bg-gray-50 dark:bg-white/5">
              <Star className="w-4 h-4 md:w-5 md:h-5 text-amber-500 mb-1" />
              <span className="text-xs md:text-sm font-bold text-gray-900 dark:text-white">{item.metrics.rating}</span>
              <span className="hidden md:block text-[10px] text-gray-500 uppercase tracking-wider">Rating</span>
            </div>
          </div>

          {/* Mobile View Button */}
          <div className="md:hidden mt-auto pt-2" style={{ transform: "translateZ(10px)" }}>
            <a 
              href={item.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-2 bg-gray-100 dark:bg-white/10 rounded-xl text-xs font-bold text-gray-900 dark:text-white gap-1 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
            >
              View <ExternalLink size={12} />
            </a>
          </div>

          {/* Testimonial Snippet */}
          <div className="hidden md:block mt-auto italic text-sm text-gray-600 dark:text-gray-400 border-l-2 border-emerald-500 pl-3 py-1" style={{ transform: "translateZ(10px)" }}>
            "{item.testimonial.quote.substring(0, 80)}..."
          </div>

        </div>
      </motion.div>
    </motion.div>
  )
}
