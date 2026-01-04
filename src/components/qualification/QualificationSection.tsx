"use client"

import {
    X,
    CheckCircle,
    XCircle,
    Check,
    AlertTriangle,
    Sparkles,
    MessageCircle,
    Calendar,
    Shield,
} from "lucide-react"
import { motion } from "framer-motion"

export function QualificationSection() {
    return (
        <section className="relative w-full py-24 md:py-32 px-6 overflow-hidden bg-background">
            {/* Background Gradients & Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/60 border-y border-white/5" />

            {/* Shimmer Effect Overlay */}
            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-[#00d9a3]/5 to-transparent animate-shimmer" />
            </div>

            <style jsx global>{`
                @keyframes shimmer {
                    0% { left: -100%; }
                    100% { left: 200%; }
                }
                .animate-shimmer {
                    animation: shimmer 8s infinite linear;
                }
                @keyframes border-pulse {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-border-pulse {
                    background-size: 300% 300%;
                    animation: border-pulse 3s ease infinite;
                }
            `}</style>

            <div className="relative max-w-[1400px] mx-auto z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-[#00d9a3] font-semibold tracking-[0.05em] uppercase mb-4 text-sm font-inter">
                        // STRAIGHT TALK
                    </p>
                    <h2 className="text-4xl md:text-6xl font-bold leading-[1.2] text-white mb-6 font-space-grotesk">
                        We Prioritize Quality Over Quantity.
                        <br />
                        <span className="bg-gradient-to-r from-[#00d9a3] to-[#10b981] bg-clip-text text-transparent">
                            Here's Who We Work With.
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto font-inter">
                        We turn away 60% of inquiries. Not because we're arrogant—because bad-fit
                        clients waste your time and mine. Let's be honest upfront.
                    </p>
                </motion.div>

                {/* Comparison Container */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 max-w-[75rem] mx-auto">

                    {/* LEFT: Not a Fit (Rejection Card) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="group relative p-8 md:p-12 rounded-3xl border-2 border-red-500/30 bg-gradient-to-br from-red-500/10 to-red-900/5 transition-all duration-500 hover:-translate-y-2 hover:border-red-500/50 hover:shadow-[0_20px_60px_rgba(239,68,68,0.2)]"
                    >
                        {/* Hover Gradient Overlay */}
                        <div className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(239,68,68,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="relative z-10 flex flex-col gap-8 h-full">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 bg-red-500/20 border-2 border-red-500/40 text-red-400">
                                    <X className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white font-space-grotesk">
                                    We're NOT the Right Fit If...
                                </h3>
                            </div>

                            <p className="text-gray-300 text-base leading-relaxed font-inter">
                                These are red flags. If this sounds like you, we'll both be frustrated.
                                Save us both the headache.
                            </p>

                            <div className="flex flex-col gap-6 flex-1">
                                {[
                                    {
                                        title: "You're looking for a cheap ₹5,000 template",
                                        desc: "Fiverr exists for a reason. We build custom systems that generate ROI, not disposable websites that look like everyone else's."
                                    },
                                    {
                                        title: "You think Instagram is the only marketing you need",
                                        desc: "Social media is rented land. You own your website. If your entire business lives on Meta's algorithm, you're one policy change away from zero revenue."
                                    },
                                    {
                                        title: "You're happy paying 30-40% commissions forever",
                                        desc: "If you're comfortable giving Zomato ₹70,000/month while complaining about \"tough times,\" we can't help each other. This is for owners who do the math."
                                    },
                                    {
                                        title: "You view a website as an expense, not an investment",
                                        desc: "\"₹35,000 is too much\" but you're okay losing ₹70,000/month to commissions? If you can't see the ROI in owning your customer relationships, this won't work."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-black/20 hover:bg-black/40 hover:translate-x-2 transition-all duration-300">
                                        <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-red-500/15 border border-red-500/30 text-red-400">
                                            <XCircle className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-2 font-space-grotesk leading-snug">
                                                {item.title}
                                            </h4>
                                            <p className="text-gray-400 text-sm leading-relaxed font-inter">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center gap-3 p-5 rounded-xl bg-red-500/15 border border-red-500/30 text-red-400 font-medium text-sm font-inter mt-auto">
                                <AlertTriangle className="w-5 h-5 shrink-0" />
                                <p>If you nodded at any of these, hire someone else. We mean that respectfully.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT: Perfect Fit (Acceptance Card) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="group relative p-8 md:p-12 rounded-3xl border-2 border-[#00d9a3]/40 bg-gradient-to-br from-[#00d9a3]/15 to-[#10b981]/10 transition-all duration-500 hover:-translate-y-2 hover:border-[#00d9a3]/60 hover:shadow-[0_20px_60px_rgba(0,217,163,0.3)]"
                    >
                        {/* Hover Gradient Overlay */}
                        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(0,217,163,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="relative z-10 flex flex-col gap-8 h-full">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 bg-[#00d9a3]/20 border-2 border-[#00d9a3]/40 text-[#00d9a3]">
                                    <CheckCircle className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white font-space-grotesk">
                                    We're Built for You If...
                                </h3>
                            </div>

                            <p className="text-gray-300 text-base leading-relaxed font-inter">
                                This is who we love working with. Serious owners who understand business,
                                not just "vibes."
                            </p>

                            <div className="flex flex-col gap-6 flex-1">
                                {[
                                    {
                                        title: "You're a serious owner ready to scale your brand",
                                        desc: "You've been running for 2+ years. You have regulars. You know your numbers. You're ready to go from \"good local spot\" to \"Amritsar institution.\""
                                    },
                                    {
                                        title: "You want full control over your customer data",
                                        desc: "You understand that customer emails, order history, and preferences are YOURS—not Zomato's. You're building an asset, not renting attention."
                                    },
                                    {
                                        title: "You understand that \"premium\" allows higher prices",
                                        desc: "You know a professional website makes customers pay 20% more without blinking. Presentation = perceived value. Amateur sites attract cheap customers."
                                    },
                                    {
                                        title: "You want a Digital Partner, not just a freelancer",
                                        desc: "You're not looking for \"build and disappear.\" You want someone who understands your business, suggests improvements, and grows with you."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-black/20 hover:bg-black/40 hover:translate-x-2 transition-all duration-300">
                                        <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-[#00d9a3]/15 border border-[#00d9a3]/30 text-[#00d9a3]">
                                            <Check className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-2 font-space-grotesk leading-snug">
                                                {item.title}
                                            </h4>
                                            <p className="text-gray-400 text-sm leading-relaxed font-inter">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center gap-3 p-5 rounded-xl bg-[#00d9a3]/15 border border-[#00d9a3]/30 text-[#00d9a3] font-medium text-sm font-inter mt-auto">
                                <Sparkles className="w-5 h-5 shrink-0" />
                                <p>If you said "YES" to 3 or more, we're going to work great together.</p>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Qualifying CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-[#00d9a3] via-transparent to-[#10b981] animate-border-pulse">
                        <div className="relative rounded-[22px] bg-gradient-to-br from-[#00d9a3]/20 to-[#10b981]/15 border border-[#00d9a3]/40 p-8 md:p-12 text-center text-white overflow-hidden">

                            <h3 className="text-3xl font-bold font-space-grotesk mb-4">
                                Still Reading? You're Probably a Fit.
                            </h3>
                            <p className="text-gray-300 text-lg mb-8 font-inter max-w-2xl mx-auto">
                                Cheap clients left after reading "₹35,000." You're still here because you
                                understand the difference between cost and value. Let's talk.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                                <a
                                    href="https://wa.me/917901919447?text=I'm%20a%20Serious%20Owner"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative inline-flex items-center gap-3 bg-gradient-to-br from-[#00d9a3] to-[#10b981] text-black text-lg font-bold py-4 px-8 rounded-xl overflow-hidden hover:translate-y-[-2px] hover:shadow-[0_10px_40px_rgba(0,217,163,0.5)] transition-all duration-300"
                                >
                                    <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-white/30 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:w-[300px] group-hover:h-[300px] transition-all duration-500" />
                                    <MessageCircle className="w-5 h-5 relative z-10" />
                                    <span className="relative z-10">WhatsApp: "I'm a Serious Owner"</span>
                                </a>

                                <a
                                    href="https://calendly.com/dhruvsanan2001/free-website-demo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-white/10 border border-white/20 text-white text-lg font-semibold py-4 px-8 rounded-xl backdrop-blur-md hover:bg-white/15 hover:translate-y-[-2px] transition-all duration-300"
                                >
                                    <Calendar className="w-5 h-5" />
                                    <span>Book a Free Call</span>
                                </a>
                            </div>

                            <p className="text-[#00d9a3] text-sm font-medium flex items-center justify-center gap-2">
                                <Shield className="w-4 h-4 shrink-0" />
                                <span className="text-left">We only take 3-4 new clients per month. If we're a fit, let's lock in your spot.</span>
                            </p>

                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
