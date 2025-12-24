"use client"

import { useState, useRef, useEffect } from "react"
import {
    Layout,
    DollarSign,
    Wrench,
    Sparkles,
    Headphones,
    Plus,
    Minus,
    Calculator,
    CheckCircle,
    Zap,
    Clock,
    Smartphone,
    Video,
    MessageCircle,
    ThumbsUp,
    TrendingUp,
    ArrowRight,
    ArrowDown,
    Check,
    Star,
    Shield,
    Lock,
    Info,
    Heart,
    MapPin,
    HelpCircle,
    Phone
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export function FAQSection() {
    const [activeCategory, setActiveCategory] = useState("all")
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const faqData = [
        {
            id: 0,
            category: "pricing",
            question: "How much does it really cost? Any hidden fees?",
            answer: (
                <>
                    <p className="mb-6 font-inter text-base text-gray-300 leading-relaxed">
                        <strong className="text-white">Zero hidden fees.</strong> Here&apos;s the exact breakdown:
                    </p>

                    <div className="flex flex-col gap-4 mb-6">
                        <div className="bg-black/20 border border-white/10 rounded-xl p-4">
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-space-grotesk text-base font-semibold text-white">One-Time Setup</span>
                                <span className="font-space-grotesk text-xl font-bold text-[#00d9a3]">₹15,000 - ₹55,000</span>
                            </div>
                            <p className="text-sm text-gray-400">
                                Depends on your tier (Smart Visiting Card, Commission Killer, or Brand Domination).
                                This is a <strong className="text-white">one-time payment</strong>—no recurring charges.
                            </p>
                        </div>

                        <div className="bg-black/20 border border-white/10 rounded-xl p-4">
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-space-grotesk text-base font-semibold text-white">Monthly Maintenance (Optional)</span>
                                <span className="font-space-grotesk text-xl font-bold text-[#00d9a3]">₹1,500 - ₹8,000</span>
                            </div>
                            <p className="text-sm text-gray-400">
                                Only if you want me to handle hosting, updates, and SEO. You can skip this
                                and manage it yourself—or add it later.
                            </p>
                        </div>

                        <div className="bg-[#00d9a3]/10 border border-[#00d9a3]/30 rounded-xl p-4 flex gap-4">
                            <CheckCircle className="w-5 h-5 text-[#00d9a3] shrink-0 mt-1" />
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-space-grotesk text-base font-semibold text-white">What&apos;s NOT Included</span>
                                </div>
                                <p className="text-sm text-gray-400">
                                    No commissions. No per-order fees. No "platform charges."
                                    You keep <strong className="text-white">100% of every rupee</strong> you make.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 bg-[#00d9a3]/10 border border-[#00d9a3]/30 border-l-[3px] border-l-[#00d9a3] rounded-lg p-4 mt-6">
                        <Calculator className="w-5 h-5 text-[#00d9a3] shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-300">
                            <strong className="text-white">ROI Example:</strong> If you&apos;re paying Zomato ₹70,000/month in commissions,
                            my Tier 2 system (₹30,000 one-time) pays for itself in <strong className="text-white">2 weeks</strong>.
                        </p>
                    </div>
                </>
            )
        },
        {
            id: 1,
            category: "setup",
            question: "How long does setup take? Will my restaurant be offline?",
            answer: (
                <>
                    <p className="mb-6 font-inter text-base text-gray-300 leading-relaxed">
                        <strong className="text-white">Average: 7 days from payment to live site.</strong> Your restaurant stays open—
                        we build everything in the background.
                    </p>

                    <div className="relative pl-8 mb-6 flex flex-col gap-6 before:content-[''] before:absolute before:left-[11px] before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-[#00d9a3] before:to-[#00d9a3]/20">
                        {[
                            { day: "Day 1-2", title: "Discovery Call", desc: "We discuss your menu, branding, photos. I send you a checklist of what I need (logo, menu items, pricing)." },
                            { day: "Day 3-5", title: "Build & Design", desc: "I build the site. You keep running your restaurant normally—nothing changes on your end yet." },
                            { day: "Day 6", title: "Your Review", desc: "I send you a preview link. You test it, request changes. Usually takes 1-2 revision rounds." },
                            { day: "Day 7", title: "Go Live", desc: "Site goes live. I train you (or your staff) on how to use the admin panel. You&apos;re commission-free from day 1." },
                        ].map((item, i) => (
                            <div key={i} className="relative">
                                <div className="absolute -left-12 top-0 w-12 font-space-grotesk text-xs font-bold text-[#00d9a3] text-center">
                                    <span className="block mb-1">{item.day}</span>
                                </div>
                                <div className="absolute -left-[27px] top-[2px] w-3 h-3 bg-[#00d9a3] rounded-full shadow-[0_0_0_4px_rgba(0,217,163,0.2)]" />
                                <div className="ml-1">
                                    <h5 className="font-space-grotesk text-base font-semibold text-white mb-1">{item.title}</h5>
                                    <p className="text-sm text-gray-400">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-start gap-3 bg-[#00d9a3]/10 border border-[#00d9a3]/30 border-l-[3px] border-l-[#00d9a3] rounded-lg p-4 mt-6">
                        <Zap className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-300">
                            <strong className="text-white">Fastest client:</strong> Café Nomad went live in 4 days because
                            they had all their content ready upfront.
                        </p>
                    </div>
                </>
            )
        },
        {
            id: 2,
            category: "features",
            question: "I'm not tech-savvy. Can I actually manage this myself?",
            answer: (
                <>
                    <p className="mb-6 font-inter text-base text-gray-300 leading-relaxed">
                        <strong className="text-white">Yes—it&apos;s designed for restaurant owners, not developers.</strong>
                        If you can send a WhatsApp message, you can update your menu.
                    </p>

                    <div className="flex flex-col gap-4 mb-6">
                        {[
                            { icon: Smartphone, title: "Admin Panel = WhatsApp Simple", desc: 'Log in from your phone. Click "Edit Menu." Change price. Click "Save." Done. No coding, no calling me every time.' },
                            { icon: Video, title: "Video Training Included", desc: "I record a 10-minute walkthrough video showing you how to update menu, add items, toggle Open/Closed, create promo codes." },
                            { icon: MessageCircle, title: "WhatsApp Support Anytime", desc: "Stuck? WhatsApp me a screenshot. I'll guide you through it. Most issues are solved in 2 minutes." },
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 bg-black/20 rounded-xl p-4">
                                <div className="w-12 h-12 bg-[#00d9a3]/10 border border-[#00d9a3]/30 rounded-lg flex items-center justify-center shrink-0 text-[#00d9a3]">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h5 className="font-space-grotesk text-base font-semibold text-white mb-1">{item.title}</h5>
                                    <p className="text-sm text-gray-400">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-start gap-3 bg-[#00d9a3]/15 border border-[#00d9a3]/40 border-l-[3px] border-l-[#00d9a3] rounded-lg p-4 mt-6">
                        <ThumbsUp className="w-5 h-5 text-[#00d9a3] shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-300">
                            <strong className="text-white">Real example:</strong> 67-year-old uncle at Kesar Da Dhaba updates
                            his daily specials every morning from his phone. Zero technical knowledge.
                        </p>
                    </div>
                </>
            )
        },
        {
            id: 3,
            category: "overview",
            question: "What if customers still want to use Zomato/Swiggy?",
            answer: (
                <>
                    <p className="mb-6 font-inter text-base text-gray-300 leading-relaxed">
                        <strong className="text-white">Keep Zomato if you want—but push direct orders first.</strong>
                        Here&apos;s the smart strategy:
                    </p>

                    <div className="flex flex-col gap-4 mb-6">
                        {[
                            { id: 1, title: "QR Codes on Every Table", desc: '"Scan to Order—No Waiting, No Service Charge." Customers order directly from your site. You save 40% per order.' },
                            { id: 2, title: "Incentivize Direct Orders", desc: "Offer a 10% discount for direct orders. You're still saving 30% (since Zomato charges 40%). Customers feel rewarded." },
                            { id: 3, title: "WhatsApp Blast Your Regulars", desc: 'Use the WhatsApp Business Suite add-on to send "Order direct and get free dessert" promotions. Converts 60%+ of regulars.' },
                            { id: 4, title: "Phase Out Zomato Gradually", desc: "Month 1: 70% Zomato, 30% direct. Month 3: 50/50. Month 6: 80% direct. You're in control of the transition speed." },
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00d9a3] to-[#10b981] text-black font-space-grotesk text-sm font-bold flex items-center justify-center shrink-0">
                                    {item.id}
                                </div>
                                <div>
                                    <h5 className="font-space-grotesk text-base font-semibold text-white mb-1">{item.title}</h5>
                                    <p className="text-sm text-gray-400">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-start gap-3 bg-[#00d9a3]/10 border border-[#00d9a3]/30 border-l-[3px] border-l-[#00d9a3] rounded-lg p-4 mt-6">
                        <TrendingUp className="w-5 h-5 text-[#00d9a3] shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-300">
                            <strong className="text-white">Real data:</strong> Punjabi Rasoi kept Zomato for delivery but
                            pushed dine-in orders through their site. Result: Saved ₹45,000/month.
                        </p>
                    </div>
                </>
            )
        },
        {
            id: 4,
            category: "pricing",
            question: "Do I own the website? What if I want to switch developers later?",
            answer: (
                <>
                    <p className="mb-6 font-inter text-base text-gray-300 leading-relaxed">
                        <strong className="text-white">Yes, you own everything. 100%.</strong> No lock-in, no hostage situations.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        {[
                            { icon: CheckCircle, title: "Your Domain", desc: "yourrestaurant.in is registered in your name. You control it." },
                            { icon: CheckCircle, title: "Your Code", desc: "I give you full access to all files. Want to hire someone else? They can take over anytime." },
                            { icon: CheckCircle, title: "Your Data", desc: "Customer emails, order history—it's all yours. Export it whenever you want." },
                        ].map((item, i) => (
                            <div key={i} className="bg-black/20 border border-white/10 rounded-xl p-6 text-center">
                                <item.icon className="w-8 h-8 text-[#00d9a3] mx-auto mb-3" />
                                <h5 className="font-space-grotesk text-base font-semibold text-white mb-2">{item.title}</h5>
                                <p className="text-sm text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-start gap-3 bg-[#00d9a3]/10 border border-[#00d9a3]/30 border-l-[3px] border-l-[#00d9a3] rounded-lg p-4 mt-6">
                        <Shield className="w-5 h-5 text-[#00d9a3] shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-300">
                            <strong className="text-white">My philosophy:</strong> I build trust, not dependencies.
                            If you&apos;re not happy, you&apos;re free to leave—no questions asked.
                        </p>
                    </div>
                </>
            )
        },
        {
            id: 5,
            category: "pricing",
            question: "How do online payments work? Is it safe?",
            answer: (
                <>
                    <p className="mb-6 font-inter text-base text-gray-300 leading-relaxed">
                        <strong className="text-white">100% safe. I integrate RazorPay or PayU—</strong>same gateways
                        used by Amazon, Flipkart, and yes, even Zomato.
                    </p>

                    <div className="flex flex-row overflow-x-auto pb-4 mb-6 gap-4 items-center">
                        {[
                            { step: 1, text: "Customer orders Butter Chicken on your site" },
                            { step: 2, text: 'Clicks "Pay Now" → RazorPay secure page opens' },
                            { step: 3, text: "Pays via UPI/Card (encrypted, bank-level security)" },
                            { step: 4, text: "Money goes directly to YOUR bank account" }
                        ].map((item, i, arr) => (
                            <div key={i} className="flex items-center">
                                <div className="flex flex-col items-center text-center min-w-[150px] gap-2">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00d9a3] to-[#10b981] text-black font-space-grotesk font-bold flex items-center justify-center mb-1">
                                        {item.step}
                                    </div>
                                    <p className="text-sm text-gray-300">{item.text}</p>
                                </div>
                                {i < arr.length - 1 && <ArrowRight className="w-6 h-6 text-gray-600 hidden md:block mx-2 shrink-0" />}
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4 mb-6">
                        {[
                            { icon: Shield, text: "PCI-DSS Compliant" },
                            { icon: Lock, text: "256-bit SSL Encryption" },
                            { icon: CheckCircle, text: "RBI Approved Gateway" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 bg-[#00d9a3]/10 border border-[#00d9a3]/30 text-[#00d9a3] px-4 py-2 rounded-full text-sm font-medium">
                                <item.icon className="w-5 h-5" />
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-start gap-3 bg-[#00d9a3]/10 border border-[#00d9a3]/30 border-l-[3px] border-l-[#00d9a3] rounded-lg p-4 mt-6">
                        <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-300">
                            <strong className="text-white">Important:</strong> I never see or touch customer payment details.
                            Everything is handled by the payment gateway—same security as your bank app.
                        </p>
                    </div>
                </>
            )
        },
        {
            id: 6,
            category: "support",
            question: "What happens if something breaks? Do you fix it for free?",
            answer: (
                <>
                    <p className="mb-6 font-inter text-base text-gray-300 leading-relaxed">
                        <strong className="text-white">Depends on what broke and when.</strong> Here&apos;s the honest breakdown:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div className="bg-[#00d9a3]/10 border border-[#00d9a3]/30 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <CheckCircle className="w-6 h-6 text-[#00d9a3]" />
                                <h5 className="font-space-grotesk text-base font-bold text-white">FREE (Always)</h5>
                            </div>
                            <ul className="space-y-2">
                                {[
                                    "Bugs caused by my code (first 30 days guaranteed)",
                                    "Security updates & critical patches",
                                    "SSL certificate renewals",
                                    "Basic troubleshooting via WhatsApp"
                                ].map((item, i) => (
                                    <li key={i} className="relative pl-6 text-sm text-gray-300 before:content-['•'] before:absolute before:left-0 before:text-[#00d9a3]">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-black/20 border border-white/10 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Wrench className="w-6 h-6 text-yellow-400" />
                                <h5 className="font-space-grotesk text-base font-bold text-white">PAID (Optional Maintenance Plans)</h5>
                            </div>
                            <ul className="space-y-2">
                                {[
                                    "Menu updates (₹3,500/month plan includes 4x updates)",
                                    "Design changes (\"Make my logo bigger\")",
                                    "New feature additions after launch",
                                    "Server crashes (if you're self-hosting)"
                                ].map((item, i) => (
                                    <li key={i} className="relative pl-6 text-sm text-gray-300 before:content-['•'] before:absolute before:left-0 before:text-[#00d9a3]">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 bg-[#00d9a3]/10 border border-[#00d9a3]/30 border-l-[3px] border-l-[#00d9a3] rounded-lg p-4 mt-6">
                        <Zap className="w-5 h-5 text-[#00d9a3] shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-300">
                            <strong className="text-white">Pro tip:</strong> The ₹3,500/month "Manager" plan covers 90% of
                            issues most restaurants face. But it's optional—you decide if it's worth it.
                        </p>
                    </div>
                </>
            )
        },
        {
            id: 7,
            category: "features",
            question: "Can you help with Google rankings? I want to show up when people search \"best restaurant Amritsar.\"",
            answer: (
                <>
                    <p className="mb-6 font-inter text-base text-gray-300 leading-relaxed">
                        <strong className="text-white">Yes—SEO is built into every site.</strong> Here&apos;s what I do:
                    </p>

                    <div className="flex flex-col gap-6 mb-6">
                        <div>
                            <h5 className="font-space-grotesk text-base font-semibold text-white mb-3">✅ Included in All Packages</h5>
                            <ul className="space-y-2">
                                {[
                                    "Google My Business optimization",
                                    "Local keywords (\"restaurants near Golden Temple\")",
                                    "Fast loading speed (Google loves this)",
                                    "Mobile-friendly design",
                                    "Schema markup (helps Google understand your menu)"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                        <Check className="w-4 h-4 text-[#00d9a3]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h5 className="font-space-grotesk text-base font-semibold text-white mb-3">🚀 Advanced (Tier 3 + Monthly Plans)</h5>
                            <ul className="space-y-2">
                                {[
                                    "Weekly Google Maps posts",
                                    "Review automation (get more 5-star reviews)",
                                    "Competitor analysis",
                                    "Monthly SEO reports"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                        <Star className="w-4 h-4 text-yellow-400" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 bg-[#00d9a3]/10 border border-[#00d9a3]/30 border-l-[3px] border-l-[#00d9a3] rounded-lg p-4 mt-6">
                        <TrendingUp className="w-5 h-5 text-[#00d9a3] shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-300">
                            <strong className="text-white">Real result:</strong> Kesar Da Dhaba ranked #3 for "best dhaba Amritsar"
                            in 6 weeks. Organic traffic increased 180%.
                        </p>
                    </div>
                </>
            )
        },
        {
            id: 8,
            category: "pricing",
            question: "I have a small budget. Can I start with Tier 1 and upgrade later?",
            answer: (
                <>
                    <p className="mb-6 font-inter text-base text-gray-300 leading-relaxed">
                        <strong className="text-white">Absolutely—that&apos;s the smart way to do it.</strong> Here&apos;s how upgrades work:
                    </p>

                    <div className="flex flex-col gap-6 mb-6">
                        <div className="bg-black/20 border border-white/10 rounded-xl p-6 relative">
                            <div className="absolute -top-3 left-6 bg-gradient-to-br from-[#00d9a3] to-[#10b981] text-black font-inter text-xs font-bold px-3 py-1 rounded-full tracking-wider">
                                START
                            </div>
                            <h5 className="font-space-grotesk text-lg font-semibold text-white mb-2">Tier 1: Smart Visiting Card (₹15,000)</h5>
                            <p className="text-sm text-gray-400">Perfect for wholesalers, consultants, or if you're just testing the waters.
                                Get a professional digital presence, WhatsApp button, Google Maps.</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <ArrowDown className="w-6 h-6 text-[#00d9a3]" />
                            <span className="text-xs text-gray-500 italic">When ready...</span>
                        </div>

                        <div className="bg-black/20 border border-white/10 rounded-xl p-6 relative">
                            <div className="absolute -top-3 left-6 bg-gradient-to-br from-[#00d9a3] to-[#10b981] text-black font-inter text-xs font-bold px-3 py-1 rounded-full tracking-wider">
                                UPGRADE
                            </div>
                            <h5 className="font-space-grotesk text-lg font-semibold text-white mb-2">Tier 2: Commission Killer (Pay Difference Only)</h5>
                            <p className="text-sm text-gray-400">You already paid ₹15,000. Tier 2 costs ₹30,000. So you pay ₹15,000 more—
                                not the full ₹30,000. I add ordering, WhatsApp automation, admin panel.</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <ArrowDown className="w-6 h-6 text-[#00d9a3]" />
                            <span className="text-xs text-gray-500 italic">If you scale big...</span>
                        </div>

                        <div className="bg-black/20 border border-white/10 rounded-xl p-6 relative">
                            <div className="absolute -top-3 left-6 bg-gradient-to-br from-[#00d9a3] to-[#10b981] text-black font-inter text-xs font-bold px-3 py-1 rounded-full tracking-wider">
                                PREMIUM
                            </div>
                            <h5 className="font-space-grotesk text-lg font-semibold text-white mb-2">Tier 3: Brand Domination</h5>
                            <p className="text-sm text-gray-400">Same logic—pay only the difference (₹25,000 more). Get 3D visuals,
                                multilingual, AI chatbot, SEO supremacy.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 bg-[#00d9a3]/15 border border-[#00d9a3]/40 border-l-[3px] border-l-[#00d9a3] rounded-lg p-4 mt-6">
                        <Heart className="w-5 h-5 text-[#00d9a3] shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-300">
                            <strong className="text-white">My promise:</strong> Your original investment always counts toward
                            upgrades. No "start from scratch" nonsense.
                        </p>
                    </div>
                </>
            )
        },
        {
            id: 9,
            category: "support",
            question: "Why should I trust you over a big agency?",
            answer: (
                <>
                    <p className="mb-6 font-inter text-base text-gray-300 leading-relaxed">
                        <strong className="text-white">Fair question. Here&apos;s my honest answer:</strong>
                    </p>

                    <div className="flex flex-col gap-2 mb-6">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-white/5 p-3 rounded-t-lg font-space-grotesk font-bold text-white max-sm:hidden">
                            <div></div>
                            <div>Big Agency</div>
                            <div className="bg-[#00d9a3]/10 border border-[#00d9a3]/30 text-white font-medium p-1 rounded">Me (Dhruv)</div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-black/20 border border-white/10 p-3 rounded-lg items-center">
                            <div className="font-semibold text-white">Response Time</div>
                            <div className="text-sm text-gray-300">2-3 days (ticket system)</div>
                            <div className="bg-[#00d9a3]/10 border border-[#00d9a3]/30 p-2 rounded flex items-center gap-2 text-white font-medium text-sm">
                                <CheckCircle className="w-4 h-4 text-[#00d9a3]" />
                                2 hours (WhatsApp me directly)
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-black/20 border border-white/10 p-3 rounded-lg items-center">
                            <div className="font-semibold text-white">Who Builds It</div>
                            <div className="text-sm text-gray-300">Junior developer (outsourced)</div>
                            <div className="bg-[#00d9a3]/10 border border-[#00d9a3]/30 p-2 rounded flex items-center gap-2 text-white font-medium text-sm">
                                <CheckCircle className="w-4 h-4 text-[#00d9a3]" />
                                I build it myself (10+ years experience)
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-black/20 border border-white/10 p-3 rounded-lg items-center">
                            <div className="font-semibold text-white">Price</div>
                            <div className="text-sm text-gray-300">₹80,000 - ₹2,00,000</div>
                            <div className="bg-[#00d9a3]/10 border border-[#00d9a3]/30 p-2 rounded flex items-center gap-2 text-white font-medium text-sm">
                                <CheckCircle className="w-4 h-4 text-[#00d9a3]" />
                                ₹15,000 - ₹55,000 (transparent)
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-black/20 border border-white/10 p-3 rounded-lg items-center">
                            <div className="font-semibold text-white">Hidden Fees</div>
                            <div className="text-sm text-gray-300">Monthly "management" charges</div>
                            <div className="bg-[#00d9a3]/10 border border-[#00d9a3]/30 p-2 rounded flex items-center gap-2 text-white font-medium text-sm">
                                <CheckCircle className="w-4 h-4 text-[#00d9a3]" />
                                Zero (optional maintenance only)
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-black/20 border border-white/10 p-3 rounded-lg items-center">
                            <div className="font-semibold text-white">Local Understanding</div>
                            <div className="text-sm text-gray-300">Generic templates</div>
                            <div className="bg-[#00d9a3]/10 border border-[#00d9a3]/30 p-2 rounded flex items-center gap-2 text-white font-medium text-sm">
                                <CheckCircle className="w-4 h-4 text-[#00d9a3]" />
                                I know Amritsar food scene personally
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 bg-[#00d9a3]/10 border border-[#00d9a3]/30 border-l-[3px] border-l-[#00d9a3] rounded-lg p-4 mt-6">
                        <MapPin className="w-5 h-5 text-[#00d9a3] shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-300">
                            <strong className="text-white">Bottom line:</strong> I&apos;m Amritsar-based, always reachable, and I eat
                            at your restaurants. Big agencies? They&apos;re in Bangalore building cookie-cutter sites.
                        </p>
                    </div>
                </>
            )
        }
    ]

    const filteredFAQs =
        activeCategory === "all"
            ? faqData
            : faqData.filter((faq) => faq.category === activeCategory)

    // Trigger animations on mount
    useEffect(() => {
        const items = document.querySelectorAll(".faq-item")
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add("opacity-100", "translate-y-0")
                            entry.target.classList.remove("opacity-0", "translate-y-[20px]")
                        }, index * 100)
                    }
                })
            },
            { threshold: 0.2 }
        )

        items.forEach((item) => observer.observe(item))

        return () => observer.disconnect()
    }, [filteredFAQs])

    return (
        <section className="bg-background py-24 md:py-32 px-6 overflow-hidden">
            <div className="max-w-[1200px] mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <p className="font-inter text-sm font-semibold tracking-wider uppercase text-[#00d9a3] mb-4">
            // GOT QUESTIONS?
                    </p>
                    <h2 className="font-space-grotesk text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
                        Everything You Need to Know About
                        <br />
                        <span className="bg-gradient-to-r from-[#00d9a3] to-[#10b981] bg-clip-text text-transparent">
                            Going Commission-Free
                        </span>
                    </h2>
                    <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Real questions from Amritsar restaurant owners—answered honestly.
                    </p>
                </div>

                {/* Category Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {[
                        { id: "all", label: "All Questions", icon: Layout },
                        { id: "pricing", label: "Pricing & Payment", icon: DollarSign },
                        { id: "setup", label: "Setup & Timeline", icon: Wrench },
                        { id: "features", label: "Features & Tech", icon: Sparkles },
                        { id: "support", label: "Support & Maintenance", icon: Headphones },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => {
                                setActiveCategory(tab.id)
                                setOpenIndex(null)
                            }}
                            className={cn(
                                "flex items-center gap-2 px-5 py-3 rounded-full font-inter text-sm font-medium border transition-all duration-300",
                                activeCategory === tab.id
                                    ? "bg-gradient-to-br from-[#00d9a3]/20 to-[#10b981]/10 border-[#00d9a3] text-[#00d9a3]"
                                    : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20 hover:text-white"
                            )}
                        >
                            <tab.icon className="w-4 h-4" />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-4xl mx-auto flex flex-col gap-4">
                    <AnimatePresence mode="wait">
                        {filteredFAQs.map((faq, index) => (
                            <motion.div
                                key={faq.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className={cn(
                                    "faq-item opacity-0 translate-y-[20px] transition-all duration-500 ease-out border rounded-2xl overflow-hidden",
                                    openIndex === index
                                        ? "bg-gradient-to-br from-[#00d9a3]/5 to-[#10b981]/5 border-[#00d9a3]/30"
                                        : "bg-white/[0.03] border-white/10 hover:border-white/20"
                                )}
                            >
                                <button
                                    className="w-full flex items-center gap-4 p-6 text-left"
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                >
                                    <span
                                        className={cn(
                                            "font-space-grotesk text-2xl font-bold shrink-0",
                                            openIndex === index ? "text-[#00d9a3]" : "text-[#00d9a3]/50"
                                        )}
                                    >
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <span className="font-space-grotesk text-lg md:text-xl font-bold text-white flex-1 leading-snug">
                                        {faq.question}
                                    </span>
                                    <div
                                        className={cn(
                                            "w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300",
                                            openIndex === index ? "bg-[#00d9a3]/20 text-[#00d9a3]" : "bg-white/10 text-gray-400"
                                        )}
                                    >
                                        {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                    </div>
                                </button>

                                <div
                                    className={cn(
                                        "overflow-hidden transition-[max-height] duration-500 ease-in-out",
                                        openIndex === index ? "max-h-[3000px]" : "max-h-0"
                                    )}
                                >
                                    <div className="px-6 pb-6 pl-[4.5rem] max-sm:pl-6">
                                        {faq.answer}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* CTA Section */}
                <div className="mt-16 pt-16 border-t border-white/10">
                    <div className="max-w-2xl mx-auto bg-gradient-to-br from-[#00d9a3]/10 to-[#10b981]/5 border-2 border-[#00d9a3]/30 rounded-3xl p-8 md:p-12 text-center">
                        <HelpCircle className="w-16 h-16 text-[#00d9a3] mx-auto mb-6" />
                        <h3 className="font-space-grotesk text-3xl font-bold text-white mb-4">Still Have Questions?</h3>
                        <p className="font-inter text-lg text-gray-300 mb-8 leading-relaxed">
                            I&apos;m just one WhatsApp message away. Ask me anything—I&apos;ll respond within 2 hours
                            (usually way faster).
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-inter text-lg font-semibold px-8 py-4 rounded-xl hover:translate-y-[-2px] hover:shadow-[0_10px_40px_rgba(37,211,102,0.4)] transition-all duration-300"
                            >
                                <MessageCircle className="w-5 h-5" />
                                WhatsApp: "I have a question"
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center gap-3 bg-white/10 border border-white/20 text-white font-inter text-lg font-semibold px-8 py-4 rounded-xl hover:bg-white/15 hover:translate-y-[-2px] backdrop-blur-md transition-all duration-300"
                            >
                                <Phone className="w-5 h-5" />
                                Book Free Call
                            </a>
                        </div>
                        <p className="font-inter text-sm text-gray-400 italic">
                            No sales pressure. Just honest answers from someone who actually builds the sites.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
