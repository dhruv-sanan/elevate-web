"use client"

import { motion } from "framer-motion"
import { ArrowRight, MessageCircle, Calendar, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function PortfolioCTA() {
  const trustBadges = [
    "Zero Upfront Cost Option",
    "Live in 14 Days",
    "Free 30-min Consultation"
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-[#0F172A]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 lg:p-20 relative overflow-hidden bg-emerald-900 shadow-2xl"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay z-0" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-30 z-0" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-500 rounded-full blur-3xl opacity-30 z-0" />

          {/* Animated Border */}
          <div className="absolute inset-0 border-2 border-emerald-500/20 rounded-[2rem] md:rounded-[3rem] animate-pulse pointer-events-none z-10" />

          <div className="relative z-20 flex flex-col items-center text-center">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
            >
              Want These Results For <br className="hidden md:block" />
              <span className="text-emerald-300 italic">Your Restaurant?</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-emerald-100/80 text-lg md:text-xl max-w-2xl mb-10"
            >
              Stop paying 30% to aggregators. Let's build your direct ordering system and keep your profits where they belong.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a 
                href="https://wa.me/917901919447?text=Hi!%20I%20saw%20your%20portfolio.%20I%20want%20to%20build%20a%20web%20app%20for%20my%20restaurant."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-2xl font-bold text-lg shadow-lg shadow-emerald-500/30 transition-all duration-300 active:scale-95 flex items-center justify-center gap-3 overflow-hidden"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                <MessageCircle size={20} className="relative z-10" />
                <span className="relative z-10">Chat on WhatsApp</span>
              </a>

              <Link 
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-bold text-lg backdrop-blur-sm border border-white/10 transition-all duration-300 active:scale-95 flex items-center justify-center gap-3"
              >
                <Calendar size={20} />
                Book Consultation
                <ArrowRight size={18} className="ml-1" />
              </Link>
            </motion.div>

            <motion.div 
              className="flex flex-wrap justify-center gap-4 md:gap-8 mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {trustBadges.map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-emerald-200/80 text-sm font-medium">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  {badge}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
