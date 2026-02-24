"use client"

import { motion } from "framer-motion"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

const stats = [
  {
    id: 1,
    value: 3200,
    prefix: "",
    suffix: "+",
    label: "Orders Processed",
    description: "Commission-free direct orders"
  },
  {
    id: 2,
    value: 28,
    prefix: "₹",
    suffix: "L+",
    decimals: 1,
    label: "Revenue Generated",
    description: "Saved from aggregator fees"
  },
  {
    id: 3,
    value: 10,
    prefix: "",
    suffix: "+",
    label: "Restaurants Powered",
    description: "Across North India"
  },
  {
    id: 4,
    value: 4.7,
    prefix: "",
    suffix: "",
    decimals: 1,
    label: "Avg Google Rating",
    description: "Driven by automated reviews"
  }
]

export function ImpactNumbers() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px"
  })

  return (
    <section className="py-24 relative overflow-hidden bg-slate-900 dark:bg-black">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            The Numbers Speak For <span className="text-emerald-400 italic">Themselves</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
            Real results for real businesses. We don't just build websites; we build revenue engines.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              className="flex flex-col items-center text-center p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 mb-2 font-space-grotesk tracking-tight">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    decimals={stat.decimals || 0}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                ) : (
                  "0"
                )}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{stat.label}</h3>
              <p className="text-sm text-slate-400">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
