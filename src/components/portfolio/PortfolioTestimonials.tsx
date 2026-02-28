"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { portfolioData } from "./portfolioData"
import { Star, Quote } from "lucide-react"

export function PortfolioTestimonials() {
  const [isPaused, setIsPaused] = useState(false)

  const TestimonialCard = ({ item }: { item: typeof portfolioData[0] }) => (
    <div className="w-[320px] md:w-[450px] min-h-[250px] bg-white dark:bg-slate-900 border border-gray-100 dark:border-white/5 shadow-xl rounded-3xl p-8 flex flex-col relative group hover:border-emerald-500/30 transition-colors select-none">
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 blur-3xl rounded-full transition-opacity duration-500 pointer-events-none`} />

      <Quote className="w-10 h-10 text-emerald-100 dark:text-emerald-900/50 mb-6" />

      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>

      <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed mb-8 flex-grow">
        "{item.testimonial.quote}"
      </p>

      <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100 dark:border-gray-800">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-bold text-lg shadow-inner">
          {item.testimonial.owner.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white">{item.testimonial.owner}</h4>
          <p className="text-sm text-emerald-600 dark:text-emerald-400">{item.name}, {item.city}</p>
        </div>
      </div>
    </div>
  )

  const marqueeStyle = {
    animation: "marquee 40s linear infinite",
    animationPlayState: isPaused ? "paused" as const : "running" as const,
  }

  return (
    <section className="py-24 bg-white dark:bg-[#0F172A] overflow-hidden relative">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0%); }
          to { transform: translateX(-100%); }
        }
      `}</style>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Don't Just Take Our <span className="text-emerald-500 italic">Word For It</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-400"
            >
              Hear directly from restaurant and cafe owners who transformed their digital presence.
            </motion.p>
          </div>
        </div>
      </div>

      <div
        className="flex overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={() => setIsPaused(true)}
        onMouseUp={() => setIsPaused(false)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div
          style={marqueeStyle}
          className="flex gap-6 md:gap-8 w-max shrink-0 pr-6 md:pr-8 pb-8"
        >
          {portfolioData.map((item, index) => (
            <TestimonialCard key={`first-${item.id}-${index}`} item={item} />
          ))}
        </div>

        <div
          style={marqueeStyle}
          className="flex gap-6 md:gap-8 w-max shrink-0 pr-6 md:pr-8 pb-8"
          aria-hidden="true"
        >
          {portfolioData.map((item, index) => (
            <TestimonialCard key={`second-${item.id}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
