"use client";

import { useState, useEffect, useRef } from "react";
import {
    Shield,
    Phone,
    FolderOpen,
    Code,
    Eye,
    GraduationCap,
    Rocket,
    LifeBuoy,
    Clock,
    Zap,
    Check,
    CheckCircle,
    FileText,
    User,
    Image as ImageIcon,
    Palette,
    Type,
    Layout,
    Paintbrush,
    ShoppingCart,
    Video,
    ToggleLeft,
    Percent,
    Bell,
    Gift,
    Headphones,
    Megaphone,
    PartyPopper,
    Infinity,
    TrendingUp,
    Heart,
    Clipboard,
    MessageCircle,
    Calendar,
    ArrowDown,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// --- Types ---
interface StepData {
    id: number;
    label: string;
    title: string;
    icon: React.ElementType;
    duration: string;
    durationClass?: "default" | "success" | "ongoing";
    statusText?: string;
    statusClass?: "working";
    description: string;
    content: React.ReactNode;
}

export function ProcessSection() {
    const [activeStep, setActiveStep] = useState<number>(0);

    return (
        <section className="py-16 md:py-32 px-4 md:px-6 max-w-[1200px] mx-auto relative overflow-hidden">
            {/* PART 1: SECTION HEADER */}
            <div className="section-header text-center mb-16 relative z-10">
                <p className="font-sans text-sm font-semibold tracking-wider uppercase text-[#00d9a3] mb-4">
          // FROM FIRST CALL TO LIVE SITE
                </p>
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.2] text-white mb-6">
                    How We Go From "Hello" to
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00d9a3] to-[#10b981]">
                        "You're Commission-Free"
                    </span>
                </h2>
                <p className="font-sans text-lg leading-[1.7] text-gray-400 max-w-3xl mx-auto mb-8">
                    A proven 14-day process that's taken 127+ Amritsar businesses from
                    Zomato-dependent to fully independent. Zero guesswork. Zero delays.
                </p>

                {/* Reassurance Badge */}
                <div className="inline-flex items-center gap-3 bg-[#00d9a3]/10 border border-[#00d9a3]/30 rounded-full px-6 py-3 font-sans font-medium text-sm text-[#00d9a3]">
                    <Shield className="w-5 h-5" />
                    <span>
                        Your restaurant stays open the entire time—we build in the background
                    </span>
                </div>
            </div>

            {/* PART 2: MAIN TIMELINE */}
            <div className="timeline-container relative max-w-4xl mx-auto px-4">
                {/* Timeline Track */}
                <div
                    className="timeline-track absolute left-[32.5px] sm:left-[46.5px] top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#00d9a3] via-[#00d9a3]/50 to-[#00d9a3]/20"
                    style={{ zIndex: 0 }}
                ></div>

                {/* --- STEP 1: Discovery Call --- */}
                <TimelineStep
                    isActive={activeStep === 0}
                    onClick={() => setActiveStep(0)}
                    stepNumber="Day 1"
                    title="Discovery Call"
                    icon={Phone}
                >
                    <div className="details-header flex flex-wrap gap-4 mb-6">
                        <DurationBadge icon={Clock} text="30-45 minutes" />
                    </div>

                    <p className="font-sans text-base leading-[1.7] text-gray-300 mb-8">
                        We hop on a call (or meet in person if you're in Amritsar). I ask
                        about your business, menu, current pain points, and what you want
                        your website to do.
                    </p>

                    <div className="mb-8">
                        <h4 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-white mb-4">
                            What We'll Discuss:
                        </h4>
                        <ul className="flex flex-col gap-3">
                            <ChecklistItem text="Your business goals (more orders? stop Zomato fees? better bookings?)" />
                            <ChecklistItem text="Current ordering process and where it's breaking" />
                            <ChecklistItem text="Menu structure, pricing, and special categories" />
                            <ChecklistItem text="Branding (colors, logo, vibe you want)" />
                            <ChecklistItem text="Which tier + add-ons make sense for you" />
                        </ul>
                    </div>

                    <div className="flex items-start gap-4 bg-[#00d9a3]/10 border border-[#00d9a3]/30 border-l-[3px] border-l-[#00d9a3] rounded-xl p-5 mb-8">
                        <FileText className="w-5 h-5 text-[#00d9a3] shrink-0 mt-1" />
                        <div>
                            <h5 className="font-[family-name:var(--font-space-grotesk)] text-base font-semibold text-[#00d9a3] mb-2">
                                You'll Receive:
                            </h5>
                            <p className="font-sans text-sm text-gray-300">
                                A simple checklist of everything I need from you (menu, photos,
                                logo, etc.)
                            </p>
                        </div>
                    </div>

                    <RealExample
                        iconColor="text-yellow-400"
                        text='"Simran from Bakeman Cake & Pastry Palace didn&apos;t have professional photos. I told her: &apos;Just click 10-15 pics on your iPhone—good lighting, clean background.&apos; Turned out perfect."'
                    />
                </TimelineStep>

                {/* --- STEP 2: Content Collection --- */}
                <TimelineStep
                    isActive={activeStep === 1}
                    onClick={() => setActiveStep(1)}
                    stepNumber="Day 2-4"
                    title="Content Collection"
                    icon={FolderOpen}
                >
                    <div className="details-header flex flex-wrap gap-4 mb-6">
                        <DurationBadge icon={Clock} text="2-3 days (your pace)" />
                    </div>
                    <p className="font-sans text-base leading-[1.7] text-gray-300 mb-8">
                        You gather the content I need. Don't stress—most clients send
                        everything via WhatsApp in one sitting. I guide you through what
                        works and what doesn't.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <RequirementCard
                            icon={ImageIcon}
                            title="Photos"
                            text="10-20 food/interior shots. iPhone quality is fine. I'll optimize them."
                            tip="💡 Tip: Natural lighting + clean plates = best results"
                        />
                        <RequirementCard
                            icon={FileText}
                            title="Menu & Pricing"
                            text="Send your current menu (even a PDF or photo works). I'll format it beautifully."
                            tip="💡 Tip: If prices change often, mark seasonal items"
                        />
                        <RequirementCard
                            icon={Palette}
                            title="Logo & Colors"
                            text="Your logo file (PNG/JPEG). If you don't have one, I can create a simple text logo."
                            tip="💡 Tip: Send any packaging/signage for color matching"
                        />
                        <RequirementCard
                            icon={Type}
                            title="Business Details"
                            text="Address, phone, hours, social media links. The basics."
                            tip="💡 Tip: I'll write the &quot;About Us&quot; section for you"
                        />
                    </div>
                    <RealExample
                        iconColor="text-yellow-400"
                        text='"Rajveer sent me his entire menu as a WhatsApp voice note while driving. I transcribed it, formatted it, and sent back a preview. He approved in 10 minutes."'
                    />
                </TimelineStep>

                {/* --- STEP 3: Design & Development --- */}
                <TimelineStep
                    isActive={activeStep === 2}
                    onClick={() => setActiveStep(2)}
                    stepNumber="Day 5-10"
                    title="Design & Development"
                    icon={Code}
                >
                    <div className="details-header flex flex-wrap gap-4 mb-6">
                        <DurationBadge icon={Clock} text="5-6 days (my side)" />
                        <StatusBadge icon={Zap} text="I'm Building" type="working" />
                    </div>

                    <p className="font-sans text-base leading-[1.7] text-gray-300 mb-8">
                        This is where the magic happens. You relax, I build. Your restaurant
                        operates normally—nothing changes on your end yet.
                    </p>

                    <div className="mb-8">
                        <h4 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-white mb-4">
                            What I'm Building:
                        </h4>
                        <div className="flex flex-col gap-6">
                            <BuildStage
                                icon={Layout}
                                title="Day 5-6: Structure & Layout"
                                text="Building the foundation—homepage, menu page, about page. Setting up navigation and mobile responsiveness."
                            />
                            <BuildStage
                                icon={Paintbrush}
                                title="Day 7-8: Design & Branding"
                                text="Applying your colors, uploading photos, designing the hero section. Making it look premium but keeping it simple to use."
                            />
                            <BuildStage
                                icon={ShoppingCart}
                                title="Day 9-10: Features & Functionality"
                                text="Adding cart, checkout, WhatsApp integration, payment gateway, admin panel. Testing every button, every flow."
                            />
                        </div>
                    </div>

                    <div className="flex items-start gap-4 bg-blue-500/10 border border-blue-500/30 rounded-xl p-5 mb-8">
                        <Eye className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
                        <div>
                            <h5 className="font-[family-name:var(--font-space-grotesk)] text-base font-semibold text-blue-300 mb-2">
                                Behind the Scenes:
                            </h5>
                            <p className="font-sans text-sm text-gray-300">
                                I'm also setting up SEO (so Google loves you), security (SSL
                                certificate), and speed optimization (3-second load times or
                                less).
                            </p>
                        </div>
                    </div>
                    <RealExample
                        iconColor="text-yellow-400"
                        text='"Built Café Nomad&apos;s entire site in 2.5 days because they had everything ready. Sometimes it takes longer if we&apos;re waiting on payment gateway approval (bank side, not me)."'
                    />
                </TimelineStep>

                {/* --- STEP 4: Preview & Feedback --- */}
                <TimelineStep
                    isActive={activeStep === 3}
                    onClick={() => setActiveStep(3)}
                    stepNumber="Day 11-12"
                    title="Preview & Feedback"
                    icon={Eye}
                >
                    <div className="details-header flex flex-wrap gap-4 mb-6">
                        <DurationBadge icon={Clock} text="4-6 hours (back & forth)" />
                    </div>
                    <p className="font-sans text-base leading-[1.7] text-gray-300 mb-8">
                        I send you a private preview link. You test it on your phone, laptop,
                        iPad. Click everything. Order something fake. See how it feels.
                    </p>

                    <div className="flex flex-col gap-4 mb-8">
                        <FlowItem
                            number={1}
                            title="I Send Preview Link"
                            text='"Here&apos;s your site—pretend you&apos;re a customer and order Butter Chicken. Tell me what feels off."'
                        />
                        <ArrowDown className="w-6 h-6 text-gray-600 mx-auto" />
                        <FlowItem
                            number={2}
                            title="You Test & Send Feedback"
                            text='Screenshot anything you want changed. "Make logo bigger." "Add chole bhature to menu." "Change button color."'
                        />
                        <ArrowDown className="w-6 h-6 text-gray-600 mx-auto" />
                        <FlowItem
                            number={3}
                            title="I Make Changes (Usually Same Day)"
                            text="Most edits take 10-30 minutes. I send updated link. We repeat until you say &quot;Perfect, let's go live.&quot;"
                        />
                    </div>

                    <div className="flex items-start gap-4 bg-black/30 rounded-xl p-5 mb-8">
                        <CheckCircle className="w-5 h-5 text-[#00d9a3] shrink-0 mt-1" />
                        <div>
                            <h5 className="font-[family-name:var(--font-space-grotesk)] text-base font-semibold text-white mb-2">
                                Revision Policy:
                            </h5>
                            <p className="font-sans text-sm text-gray-300">
                                <strong>Tier 1:</strong> 1 round | <strong>Tier 2:</strong> 2
                                rounds | <strong>Tier 3:</strong> 3 rounds. But honestly? Most
                                clients are happy on first preview.
                            </p>
                        </div>
                    </div>
                    <RealExample
                        iconColor="text-yellow-400"
                        text='"Bakeman Cake & Pastry Palace asked for 8 changes. I fixed all of them in 45 minutes. She replied: &apos;Dhruv, this is EXACTLY what I imagined. Go live tonight.&apos;"'
                    />
                </TimelineStep>

                {/* --- STEP 5: Training Session --- */}
                <TimelineStep
                    isActive={activeStep === 4}
                    onClick={() => setActiveStep(4)}
                    stepNumber="Day 13"
                    title="Training Session"
                    icon={GraduationCap}
                >
                    <div className="details-header flex flex-wrap gap-4 mb-6">
                        <DurationBadge icon={Clock} text="15-20 minutes" />
                    </div>
                    <p className="font-sans text-base leading-[1.7] text-gray-300 mb-8">
                        Quick screen-share call (or in-person if you prefer). I show you how
                        to manage your site—so simple, your staff can do it.
                    </p>

                    <div className="flex flex-col gap-4 mb-8">
                        <TrainingModule
                            icon={Video}
                            title="How to Update Menu Items"
                            text="Change prices, add new dishes, mark items as &quot;sold out&quot;—all from your phone in 30 seconds."
                        />
                        <TrainingModule
                            icon={ToggleLeft}
                            title="Store Status Toggle"
                            text="One button to switch between Open/Closed. Perfect for holidays or if you run out of ingredients."
                        />
                        <TrainingModule
                            icon={Percent}
                            title="Create Promo Codes"
                            text="&quot;DIWALI20&quot; for 20% off. &quot;FREEGULABJAMUN&quot; for free dessert. You control discounts."
                        />
                        <TrainingModule
                            icon={Bell}
                            title="Check New Orders"
                            text="Orders show up in your admin panel + WhatsApp. I'll show you how to mark them &quot;preparing&quot; or &quot;delivered.&quot;"
                        />
                    </div>

                    <div className="flex items-start gap-4 bg-[#00d9a3]/10 border border-[#00d9a3]/30 rounded-xl p-5 mb-8">
                        <Gift className="w-5 h-5 text-[#00d9a3] shrink-0 mt-1" />
                        <div>
                            <h5 className="font-[family-name:var(--font-space-grotesk)] text-base font-semibold text-[#00d9a3] mb-2">
                                Bonus: Video Recording
                            </h5>
                            <p className="font-sans text-sm text-gray-300">
                                I record the entire training session and send it to you. Watch
                                it anytime you forget something (or show it to your team).
                            </p>
                        </div>
                    </div>
                    <RealExample
                        iconColor="text-yellow-400"
                        text='"Trained a 67-year-old uncle at Kesar Da Dhaba. He now updates his daily specials every morning from his phone. Zero help needed."'
                    />
                </TimelineStep>

                {/* --- STEP 6: Go Live --- */}
                <TimelineStep
                    isActive={activeStep === 5}
                    onClick={() => setActiveStep(5)}
                    stepNumber="Day 14"
                    title="Go Live! 🚀"
                    icon={Rocket}
                >
                    <div className="details-header flex flex-wrap gap-4 mb-6">
                        <DurationBadge icon={Zap} text="Launch Day" type="success" />
                    </div>
                    <p className="font-sans text-base leading-[1.7] text-gray-300 mb-8">
                        Your site goes live. I flip the switch, and boom—you're officially
                        commission-free. Time to tell the world.
                    </p>

                    <div className="mb-8">
                        <h4 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-white mb-4">
                            Launch Day Checklist:
                        </h4>
                        <div className="flex flex-col gap-3">
                            <LaunchTask text="Site is live and fast (tested)" />
                            <LaunchTask text="Orders flowing to WhatsApp correctly" />
                            <LaunchTask text="Payment gateway working (test order placed)" />
                            <LaunchTask text="Google Maps linked & showing up" />
                            <LaunchTask text="QR codes printed (if applicable)" />
                            <LaunchTask text="Social media announcement ready" />
                        </div>
                    </div>

                    <div className="flex items-start gap-4 bg-black/30 rounded-xl p-5 mb-8">
                        <Headphones className="w-5 h-5 text-[#00d9a3] shrink-0 mt-1" />
                        <div>
                            <h5 className="font-[family-name:var(--font-space-grotesk)] text-base font-semibold text-white mb-2">
                                First Week Support:
                            </h5>
                            <p className="font-sans text-sm text-gray-300">
                                I'm on standby all week. Any glitch, confusion, or "how do
                                I...?" question—WhatsApp me. Response within 1 hour.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 bg-black/30 rounded-xl p-5 mb-8">
                        <Megaphone className="w-5 h-5 text-purple-400 shrink-0 mt-1" />
                        <div>
                            <h5 className="font-[family-name:var(--font-space-grotesk)] text-base font-semibold text-white mb-2">
                                How to Promote Your New Site:
                            </h5>
                            <ul className="list-disc pl-4 space-y-2">
                                <li className="font-sans text-sm text-gray-300">
                                    Post on Instagram/Facebook: "We're now taking direct
                                    orders—no Zomato fees!"
                                </li>
                                <li className="font-sans text-sm text-gray-300">
                                    Put QR codes on tables, menus, delivery bags
                                </li>
                                <li className="font-sans text-sm text-gray-300">
                                    WhatsApp blast to your regulars: "Order direct, get 10% off"
                                </li>
                                <li className="font-sans text-sm text-gray-300">
                                    Update Google My Business with your new website link
                                </li>
                            </ul>
                        </div>
                    </div>

                    <RealExample
                        iconColor="text-yellow-400"
                        success
                        text='"Tamra Restaurant got 47 orders in the first 24 hours. Zero tech issues. Rajveer&apos;s message to me: &apos;Dhruv, this is INSANE. I should&apos;ve done this 2 years ago.&apos;"'
                    />
                </TimelineStep>

                {/* --- STEP 7: Ongoing Support --- */}
                <TimelineStep
                    isActive={activeStep === 6}
                    onClick={() => setActiveStep(6)}
                    stepNumber="Day 15+"
                    title="Ongoing Support"
                    icon={LifeBuoy}
                >
                    <div className="details-header flex flex-wrap gap-4 mb-6">
                        <DurationBadge
                            icon={Infinity}
                            text="Forever (as long as you need)"
                            type="ongoing"
                        />
                    </div>
                    <p className="font-sans text-base leading-[1.7] text-gray-300 mb-8">
                        Your site is live. You're making money. Now what? I'm here if you
                        need me—but most clients rarely do after the first month.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <div className="bg-black/30 border border-white/10 rounded-xl p-6">
                            <h5 className="font-[family-name:var(--font-space-grotesk)] text-base font-bold text-white mb-4">
                                FREE Forever:
                            </h5>
                            <ul className="flex flex-col gap-2">
                                <SupportItem text="Bug fixes (if it's my code)" />
                                <SupportItem text="Security updates" />
                                <SupportItem text="WhatsApp troubleshooting" />
                                <SupportItem text="&quot;How do I...?&quot; questions" />
                            </ul>
                        </div>
                        <div className="bg-[#00d9a3]/10 border border-[#00d9a3]/30 rounded-xl p-6">
                            <h5 className="font-[family-name:var(--font-space-grotesk)] text-base font-bold text-white mb-4">
                                Optional Monthly Plans:
                            </h5>
                            <ul className="flex flex-col gap-2">
                                <SupportItem text="Menu updates (4x/month)" />
                                <SupportItem text="Google Maps growth" />
                                <SupportItem text="Festival banners" />
                                <SupportItem text="Priority support" />
                            </ul>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 bg-violet-500/10 border border-violet-500/30 rounded-xl p-5 mb-8">
                        <TrendingUp className="w-5 h-5 text-[#00d9a3] shrink-0 mt-1" />
                        <div>
                            <h5 className="font-[family-name:var(--font-space-grotesk)] text-base font-semibold text-violet-300 mb-2">
                                Want to Scale?
                            </h5>
                            <p className="font-sans text-sm text-gray-300">
                                Add features later: AI chatbot, loyalty program, second
                                location, mobile app. I'll guide you on what makes sense when.
                            </p>
                        </div>
                    </div>

                    <RealExample
                        iconColor="text-yellow-400"
                        text='"Bakeman Cake & Pastry Palace started with Tier 2. After 3 months, added the &apos;Pocket Waiter&apos; PWA (₹8,000). Repeat orders jumped 30%. They&apos;re now eyeing Tier 3 for a second location."'
                    />
                </TimelineStep>
            </div>

            {/* PART 3: QUICK STATS BAR */}
            <div className="quick-stats-bar grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[auto_1px_auto_1px_auto] gap-8 items-center bg-gradient-to-br from-[#00d9a3]/10 to-[#10b981]/5 border border-[#00d9a3]/20 rounded-3xl p-8 sm:p-12 my-16">
                <div className="quick-stat flex flex-col items-center text-center">
                    <Zap className="w-8 h-8 text-[#00d9a3]" />
                    <p className="font-[family-name:var(--font-space-grotesk)] text-[2.5rem] font-bold text-[#00d9a3] leading-none mt-4 mb-2">
                        14 Days
                    </p>
                    <p className="font-sans text-sm text-gray-400">Average Setup</p>
                </div>
                <div className="hidden lg:block w-[1px] h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                <div className="quick-stat flex flex-col items-center text-center">
                    <Heart className="w-8 h-8 text-[#00d9a3]" />
                    <p className="font-[family-name:var(--font-space-grotesk)] text-[2.5rem] font-bold text-[#00d9a3] leading-none mt-4 mb-2">
                        4.9/5
                    </p>
                    <p className="font-sans text-sm text-gray-400">
                        Client Satisfaction
                    </p>
                </div>
                <div className="hidden lg:block w-[1px] h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                <div className="quick-stat flex flex-col items-center text-center">
                    <Shield className="w-8 h-8 text-[#00d9a3]" />
                    <p className="font-[family-name:var(--font-space-grotesk)] text-[2.5rem] font-bold text-[#00d9a3] leading-none mt-4 mb-2">
                        100%
                    </p>
                    <p className="font-sans text-sm text-gray-400">On-Time Delivery</p>
                </div>
            </div>

            {/* PART 4: WHAT YOU'LL NEED CHECKLIST */}
            <div className="preparation-checklist max-w-4xl mx-auto my-16 bg-black/20 border border-white/10 rounded-3xl p-8 sm:p-12">
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-[2rem] font-bold text-white text-center mb-4">
                    <Clipboard className="inline w-6 h-6 mr-2 mb-1" />
                    What You'll Need to Get Started
                </h3>
                <p className="font-sans text-base text-gray-400 text-center mb-10">
                    Don't stress—90% of clients already have this. The rest takes 10
                    minutes to gather.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <ChecklistItemBox
                        title="Menu & Pricing"
                        text="Your current menu (PDF, Excel, or even a photo works). I'll format it beautifully."
                    />
                    <ChecklistItemBox
                        title="Business Info"
                        text="Name, address, phone, hours, social media links. The basics."
                    />
                    <ChecklistItemBox
                        title="Photos"
                        text="10-20 food/interior shots. iPhone quality works—I optimize everything."
                    />
                    <ChecklistItemBox
                        title="Logo (Optional)"
                        text="If you have one, great. If not, I can create a simple text-based logo for free."
                    />
                </div>
            </div>

            {/* PART 5: START YOUR PROJECT CTA */}
            <div className="final-process-cta max-w-3xl mx-auto my-16">
                <div className="cta-content bg-gradient-to-br from-[#00d9a3]/15 to-[#10b981]/10 border-2 border-[#00d9a3]/30 rounded-3xl p-8 sm:p-16 text-center">
                    <Rocket className="w-16 h-16 text-[#00d9a3] mb-4 mx-auto" />
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-[2.5rem] font-bold text-white mb-6">
                        Ready to Stop Paying Commissions?
                    </h3>
                    <p className="font-sans text-lg leading-[1.7] text-gray-300 mb-10">
                        Let's start with a quick call. I'll show you exactly how this works
                        for YOUR business—no sales pitch, just honest guidance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                        <Link
                            href="https://wa.me/917901919447?text=Hi%20Dhruv,%20I%20want%20to%20start%20my%20commission-free%20website"
                            className="inline-flex items-center gap-3 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white font-sans text-lg font-semibold px-10 py-5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(37,211,102,0.4)]"
                        >
                            <MessageCircle className="w-5 h-5" />
                            WhatsApp: "Let's Start"
                        </Link>
                        <Link
                            href="https://calendly.com/your-link"
                            className="inline-flex items-center gap-3 bg-white/10 border border-white/20 text-white font-sans text-lg font-semibold px-10 py-5 rounded-xl backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:-translate-y-0.5"
                        >
                            <Calendar className="w-5 h-5" />
                            Book Discovery Call
                        </Link>
                    </div>
                    <p className="font-sans text-sm text-gray-400">
                        ✓ 14-day guaranteed setup • ✓ No hidden fees • ✓ Cancel anytime
                    </p>
                </div>
            </div>

            {/* Styles for animation */}
            <style jsx global>{`
        .timeline-step {
          opacity: 0;
          transform: translateX(-20px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .timeline-step.animate-in {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
        </section>
    );
}

// --- Helper Components ---

function TimelineStep({
    isActive,
    onClick,
    stepNumber,
    title,
    icon: Icon,
    children,
}: {
    isActive: boolean;
    onClick: () => void;
    stepNumber: string;
    title: string;
    icon: React.ElementType;
    children: React.ReactNode;
}) {
    const stepRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (stepRef.current) {
            observer.observe(stepRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // continuously pin the active step to the top during transition to avoid it flying off-screen
    useEffect(() => {
        if (isActive && stepRef.current) {
            let animationFrameId: number;
            const startTime = performance.now();
            const duration = 600; // Match CSS transition duration + buffer

            const animate = (currentTime: number) => {
                if (!stepRef.current) return;

                const elapsed = currentTime - startTime;
                if (elapsed > duration) return;

                const rect = stepRef.current.getBoundingClientRect();
                const targetTop = 100; // Desired offset from top
                const currentTop = rect.top;
                const diff = currentTop - targetTop;

                // If the element deviates from target position, correct it immediately
                if (Math.abs(diff) > 1) {
                    window.scrollBy({ top: diff, behavior: "auto" });
                }

                animationFrameId = requestAnimationFrame(animate);
            };

            animationFrameId = requestAnimationFrame(animate);

            return () => {
                if (animationFrameId) cancelAnimationFrame(animationFrameId);
            };
        }
    }, [isActive]);

    return (
        <div
            ref={stepRef}
            className={`timeline-step mb-8 md:mb-12 ${isActive ? "active" : ""} ${isVisible ? "animate-in" : ""
                }`}
        >
            <div
                className="step-marker flex items-center gap-6 cursor-pointer relative z-10 group"
                onClick={onClick}
            >
                <div
                    className={`marker-dot w-9 h-9 sm:w-16 sm:h-16 border-[3px] rounded-full flex items-center justify-center transition-all duration-300 shrink-0 bg-[#0a0a0a] ${isActive
                        ? "bg-gradient-to-br from-[#00d9a3] to-[#10b981] border-[#00d9a3] text-black scale-110 shadow-[0_0_30px_rgba(0,217,163,0.4)]"
                        : "bg-gradient-to-br from-[#00d9a3]/20 to-[#10b981]/10 border-[#00d9a3]/30 text-gray-400 group-hover:scale-110 group-hover:border-[#00d9a3] group-hover:bg-[#00d9a3]/20"
                        }`}
                >
                    <Icon className="w-5 h-5 sm:w-5 sm:h-5" />
                </div>
                <div className="marker-content flex-1">
                    <span className="step-label block font-sans text-sm font-semibold text-[#00d9a3] uppercase tracking-wider mb-1">
                        {stepNumber}
                    </span>
                    <h3 className="step-title font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-[1.75rem] font-bold text-white m-0">
                        {title}
                    </h3>
                </div>
            </div>

            <div
                className={`step-details overflow-hidden transition-[max-height] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive ? "max-h-[5000px]" : "max-h-0"
                    }`}
                style={{ marginLeft: "auto" }} // Handled by responsive classes below
            >
                <div className="mt-6 ml-12 sm:ml-[5.5rem]">
                    <div className="details-card bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-[1.25rem] p-5 sm:p-8">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

function DurationBadge({
    icon: Icon,
    text,
    type = "default",
}: {
    icon: React.ElementType;
    text: string;
    type?: "default" | "success" | "ongoing";
}) {
    return (
        <div
            className={cn(
                "inline-flex items-center gap-2 border rounded-full px-4 py-2 font-sans text-sm",
                type === "default" && "bg-black/30 border-white/10 text-gray-300",
                type === "success" &&
                "bg-[#00d9a3]/20 border-[#00d9a3]/30 text-[#00d9a3]",
                type === "ongoing" &&
                "bg-violet-500/20 border-violet-500/30 text-violet-400"
            )}
        >
            <Icon className="w-4 h-4" />
            <span>{text}</span>
        </div>
    );
}

function StatusBadge({
    icon: Icon,
    text,
    type,
}: {
    icon: React.ElementType;
    text: string;
    type: "working";
}) {
    return (
        <div
            className={cn(
                "inline-flex items-center gap-2 border rounded-full px-4 py-2 font-sans text-sm font-semibold",
                type === "working" &&
                "bg-amber-400/20 border-amber-400/30 text-amber-300"
            )}
        >
            <Icon className="w-4 h-4" />
            <span>{text}</span>
        </div>
    );
}

function ChecklistItem({ text }: { text: string }) {
    return (
        <li className="flex items-start gap-3 font-sans text-sm leading-[1.6] text-gray-300">
            <Check className="w-4 h-4 text-[#00d9a3] mt-1 shrink-0" />
            <span>{text}</span>
        </li>
    );
}

function RealExample({
    iconColor,
    text,
    success,
}: {
    iconColor: string;
    text: string;
    success?: boolean;
}) {
    return (
        <div
            className={cn(
                "flex items-start gap-4 border rounded-xl p-5 mt-8",
                success
                    ? "bg-[#00d9a3]/10 border-[#00d9a3]/30"
                    : "bg-amber-400/10 border-amber-400/30"
            )}
        >
            <User className={cn("w-5 h-5 shrink-0", iconColor)} />
            <div>
                <p
                    className={cn(
                        "font-[family-name:var(--font-space-grotesk)] text-sm font-bold uppercase tracking-wider mb-2",
                        success ? "text-[#00d9a3]" : "text-amber-300"
                    )}
                >
                    Real Example:
                </p>
                <p className="font-sans text-sm leading-[1.6] text-gray-300 italic">
                    {text}
                </p>
            </div>
        </div>
    );
}

function RequirementCard({
    icon: Icon,
    title,
    text,
    tip,
}: {
    icon: React.ElementType;
    title: string;
    text: string;
    tip: string;
}) {
    return (
        <div className="bg-black/30 border border-white/10 rounded-xl p-6">
            <Icon className="w-6 h-6 text-[#00d9a3] mb-3" />
            <h5 className="font-[family-name:var(--font-space-grotesk)] text-base font-semibold text-white mb-3">
                {title}
            </h5>
            <p className="font-sans text-sm leading-[1.6] text-gray-300 mb-3">
                {text}
            </p>
            <span className="block font-sans text-xs text-gray-400 italic pt-2 border-t border-white/10">
                {tip}
            </span>
        </div>
    );
}

function BuildStage({
    icon: Icon,
    title,
    text,
}: {
    icon: React.ElementType;
    title: string;
    text: string;
}) {
    return (
        <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#00d9a3]/10 border border-[#00d9a3]/30 rounded-xl flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-[#00d9a3]" />
            </div>
            <div>
                <h5 className="font-[family-name:var(--font-space-grotesk)] text-base font-semibold text-white mb-2">
                    {title}
                </h5>
                <p className="font-sans text-sm leading-[1.6] text-gray-300">{text}</p>
            </div>
        </div>
    );
}

function FlowItem({
    number,
    title,
    text,
}: {
    number: number;
    title: string;
    text: string;
}) {
    return (
        <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-[#00d9a3] to-[#10b981] text-black rounded-full flex items-center justify-center font-[family-name:var(--font-space-grotesk)] font-bold shrink-0">
                {number}
            </div>
            <div>
                <h5 className="font-[family-name:var(--font-space-grotesk)] text-base font-semibold text-white mb-2">
                    {title}
                </h5>
                <p className="font-sans text-sm leading-[1.6] text-gray-300">{text}</p>
            </div>
        </div>
    );
}

function TrainingModule({
    icon: Icon,
    title,
    text,
}: {
    icon: React.ElementType;
    title: string;
    text: string;
}) {
    return (
        <div className="flex items-start gap-4 bg-black/30 rounded-xl p-4">
            <Icon className="w-6 h-6 text-[#00d9a3] shrink-0" />
            <div>
                <h5 className="font-[family-name:var(--font-space-grotesk)] text-base font-semibold text-white mb-2">
                    {title}
                </h5>
                <p className="font-sans text-sm leading-[1.6] text-gray-300">{text}</p>
            </div>
        </div>
    );
}

function LaunchTask({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3 font-sans text-sm text-[#00d9a3] font-medium">
            <CheckCircle className="w-5 h-5 text-[#00d9a3]" />
            <span>{text}</span>
        </div>
    );
}

function SupportItem({ text }: { text: string }) {
    return (
        <li className="flex items-center gap-2 font-sans text-sm text-gray-300">
            <Check className="w-4 h-4 text-[#00d9a3]" />
            {text}
        </li>
    );
}

function ChecklistItemBox({ title, text }: { title: string; text: string }) {
    return (
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-[#00d9a3]" />
                <h4 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-white">
                    {title}
                </h4>
            </div>
            <p className="font-sans text-sm leading-[1.6] text-gray-300 m-0">
                {text}
            </p>
        </div>
    );
}
