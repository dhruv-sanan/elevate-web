"use client"

import { motion } from "framer-motion"
import { Sparkles, ArrowDown } from "lucide-react"

export function PortfolioHero() {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden bg-white dark:bg-[#0F172A] transition-colors duration-500 pt-28 pb-16 flex flex-col items-center justify-center">
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
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1]"
            >
              Websites That <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 italic pr-2">Bring More Orders</span>
            </motion.h1>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Stop paying 30% commissions. See how local restaurants and cafes are using our 
            commission-free ordering systems to boost direct revenue.
          </motion.p>
        </div>

        {/* 3D Phone Carousel */}
        <motion.div 
          className="mt-20 relative w-full max-w-5xl mx-auto h-[450px] md:h-[600px] flex items-center justify-center perspective-[1200px]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Left Phone */}
          <motion.div 
            className="absolute z-10 w-[240px] md:w-[280px] h-[500px] md:h-[580px] -translate-x-[45%] md:-translate-x-[60%] rotate-y-[15deg] scale-[0.85] md:scale-90"
            style={{ rotateY: 15 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <MockPhone bgClass="bg-orange-50" title="Kathiyawadi Rasoi" badge="Restaurant" />
          </motion.div>

          {/* Right Phone */}
          <motion.div 
            className="absolute z-10 w-[240px] md:w-[280px] h-[500px] md:h-[580px] translate-x-[45%] md:translate-x-[60%] -rotate-y-[15deg] scale-[0.85] md:scale-90"
            style={{ rotateY: -15 }}
            animate={{ y: [10, -10, 10] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
          >
            <MockPhone bgClass="bg-pink-50" title="Mithai Palace" badge="Bakery" />
          </motion.div>

          {/* Center Phone */}
          <motion.div 
            className="absolute z-20 w-[260px] md:w-[300px] h-[540px] md:h-[620px] shadow-2xl rounded-[40px] shadow-emerald-500/20"
            animate={{ y: [-15, 15, -15] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
          >
            <MockPhone bgClass="bg-amber-50" title="The Chai & Crust" badge="Cafe" main />
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="mt-16 flex flex-col items-center gap-2 text-sm text-gray-400 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <span>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-emerald-500"
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function MockPhone({ bgClass, title, badge, main = false }: { bgClass: string, title: string, badge: string, main?: boolean }) {
  return (
    <div className={`w-full h-full bg-gray-900 rounded-[40px] md:rounded-[48px] border-[6px] border-zinc-800 shadow-xl overflow-hidden relative ${main ? 'shadow-2xl' : ''}`}>
      {/* Screen */}
      <div className={`w-full h-full ${bgClass} dark:bg-black overflow-hidden relative flex flex-col`}>
        {/* Status Bar */}
        <div className="flex justify-between items-center px-6 pt-4 text-[10px] font-medium text-black dark:text-white z-20 relative opacity-70">
          <span>9:41</span>
          <div className="flex gap-1">
            <div className="w-4 h-2.5 bg-current rounded-sm" />
            <div className="w-3 h-2.5 bg-current rounded-sm" />
            <div className="w-5 h-2.5 border border-current rounded-sm flex items-center p-[1px]"><div className="w-3.5 h-1.5 bg-current rounded-[1px]" /></div>
          </div>
        </div>

        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[25px] bg-black rounded-full z-30" />

        {/* App Content Fake UI */}
        <div className="flex-1 p-4 pt-8 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="w-8 h-8 rounded-full bg-black/10 dark:bg-white/10" />
            <div className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-[10px] font-bold">{badge}</div>
          </div>
          
          <div className="space-y-2 mt-4">
            <div className="w-3/4 h-6 bg-black/10 dark:bg-white/10 rounded-md" />
            <div className="w-1/2 h-4 bg-black/5 dark:bg-white/5 rounded-md" />
          </div>

          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="aspect-square bg-black/5 dark:bg-white/5 rounded-xl" />
            <div className="aspect-square bg-black/5 dark:bg-white/5 rounded-xl" />
            <div className="aspect-square bg-black/5 dark:bg-white/5 rounded-xl" />
            <div className="aspect-square bg-black/5 dark:bg-white/5 rounded-xl" />
          </div>
          
          <div className="mt-auto mb-4 w-full h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
            <span className="text-white text-sm font-bold">View Menu</span>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-black/20 dark:bg-white/20 rounded-full" />
      </div>
      
      {/* Bezel / Frame Reflections */}
      <div className="absolute inset-0 rounded-[40px] md:rounded-[48px] border border-white/20 pointer-events-none z-40" />
    </div>
  )
}
