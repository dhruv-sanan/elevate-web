"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Eye, Calendar } from "lucide-react"
import Link from "next/link"

const demoScreenshots = [
  {
    id: "restaurant",
    industry: "Restaurant",
    name: "Kathiyawadi Rasoi",
    imageSrc: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    stat: "+230%",
    statLabel: "More Orders"
  },
  {
    id: "cafe",
    industry: "Cafe",
    name: "The Chai & Crust",
    imageSrc: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
    stat: "₹0",
    statLabel: "Commission"
  },
  {
    id: "bakery",
    industry: "Bakery",
    name: "Mithai Palace",
    imageSrc: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800",
    stat: "500+",
    statLabel: "Pre-orders"
  },
  {
    id: "hotel",
    industry: "Hotel",
    name: "Rann Heritage",
    imageSrc: "/ram-heritage.png",
    stat: "4.9★",
    statLabel: "Rating"
  }
]

export function PortfolioHero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActiveIndex((current) => (current + 1) % demoScreenshots.length)
    }, 4000)
  }

  useEffect(() => {
    startInterval()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const handlePillClick = (index: number) => {
    setActiveIndex(index)
    startInterval()
  }

  const currentDemo = demoScreenshots[activeIndex]

  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden bg-white dark:bg-[#0F172A] transition-colors duration-500 pt-24 md:pt-28 pb-16 flex flex-col items-center justify-center">
      {/* Background Ambient Gradients */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-emerald-100/40 to-transparent dark:from-emerald-950/20 dark:to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-emerald-200/30 dark:bg-emerald-900/20 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-teal-200/30 dark:bg-teal-900/20 rounded-full blur-3xl pointer-events-none translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Top Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800/50 text-sm font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider backdrop-blur-sm">
              <Sparkles size={14} />
              Our Portfolio
            </span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1]"
            >
              Web Apps That <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 italic pr-2">Bring More Orders</span>
            </motion.h1>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Stop paying 30% commissions. See how local businesses are using our
            commission-free ordering systems to boost direct revenue.
          </motion.p>
        </div>

        {/* 3D Phone Showcase */}
        <div className="mt-10 md:mt-16 max-w-5xl mx-auto flex flex-col items-center gap-6 md:gap-8">

          {/* Phone Frame */}
          <motion.div
            className="relative w-[260px] md:w-[320px] h-[540px] md:h-[660px] shrink-0 shadow-2xl rounded-[40px] md:rounded-[48px] shadow-emerald-500/20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <DemoPhone currentDemo={currentDemo} />
          </motion.div>

          {/* Industry Pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 md:gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {demoScreenshots.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => handlePillClick(index)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeIndex === index
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 scale-105"
                  : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10"
                  }`}
              >
                {demo.industry}
              </button>
            ))}
          </motion.div>

          {/* Current Stat Chip */}
          <motion.div
            className="h-14" // Fixed height to prevent layout shift
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentDemo.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm"
              >
                <span className="text-2xl font-bold text-emerald-500">{currentDemo.stat}</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider">{currentDemo.statLabel}</span>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a
              href="https://yummin.vercel.app/menu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] cursor-pointer"
            >
              <Eye className="w-5 h-5" />
              See Live Demo
            </a>

            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <Calendar className="w-5 h-5" />
              Book a Free Call
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

function DemoPhone({ currentDemo }: { currentDemo: typeof demoScreenshots[0] }) {
  return (
    <div className="w-full h-full bg-gray-900 rounded-[40px] md:rounded-[48px] border-[6px] border-zinc-800 shadow-xl overflow-hidden relative">
      {/* Screen */}
      <div className="w-full h-full bg-black overflow-hidden relative flex flex-col">

        {/* Status Bar */}
        <div className="flex justify-between items-center px-6 pt-4 text-[10px] font-medium text-white z-30 relative drop-shadow-md">
          <span>9:41</span>
          <div className="flex gap-1">
            <div className="w-4 h-2.5 bg-current rounded-sm" />
            <div className="w-3 h-2.5 bg-current rounded-sm" />
            <div className="w-5 h-2.5 border border-current rounded-sm flex items-center p-[1px]"><div className="w-3.5 h-1.5 bg-current rounded-[1px]" /></div>
          </div>
        </div>

        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[25px] bg-black rounded-full z-40" />

        {/* Image Content with Crossfade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDemo.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-10"
          >
            <img
              src={currentDemo.imageSrc}
              alt={currentDemo.industry}
              className="w-full h-full object-cover"
            />
            {/* Top gradient for status bar visibility */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/60 to-transparent" />
            {/* Bottom gradient for UI visibility */}
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* App Content Fake UI Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-5 z-20 flex flex-col gap-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={`ui-${currentDemo.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col gap-1"
            >
              <span className="text-white/80 text-xs font-semibold uppercase tracking-wider">{currentDemo.industry}</span>
              <span className="text-white text-xl font-bold">{currentDemo.name}</span>
            </motion.div>
          </AnimatePresence>

          <div className="w-full h-12 bg-emerald-500 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/20 active:scale-95 transition-transform cursor-pointer">
            <span className="text-white text-sm font-bold">View Menu</span>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white/50 rounded-full z-30" />
      </div>

      {/* Bezel / Frame Reflections */}
      <div className="absolute inset-0 rounded-[40px] md:rounded-[48px] border border-white/20 pointer-events-none z-50" />
    </div>
  )
}
