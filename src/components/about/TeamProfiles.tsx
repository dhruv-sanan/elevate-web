"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, MessageCircle, Calendar } from "lucide-react";

export function TeamProfiles() {
    return (
        <section className="w-full py-24 px-6 md:px-12 bg-background">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* DHRUV */}
                <TeamCard
                    image="/Dhruv_Sanan.png"
                    name="Dhruv Sanan"
                    role="Co-Founder & Tech Lead"
                    quote="I build the systems that make commission-free ordering possible."
                    handles={[
                        "Full-Stack Development (Next.js, AI)",
                        "WhatsApp API Integration",
                        "3D Experiences & Animations",
                        "Pricing & Project Delivery",
                        "Tech Support & Troubleshooting"
                    ]}
                    email="dhruvsanan01@gmail.com"
                    phone="+91 79019 19447"
                    whatsapp="https://wa.me/917901919447"
                    delay={0}
                />

                {/* GHANISHTH */}
                <TeamCard
                    image="/Ghanishth_Mehra.jpg"
                    name="Ghanishth Mehra"
                    role="Co-Founder & Client Success"
                    quote="I make sure every client gets more orders, better reviews, and zero stress."
                    handles={[
                        "Client Discovery & Onboarding",
                        "Marketing Strategy & SEO",
                        "Local Business Partnerships",
                        "Content & Social Media",
                        "Ongoing Support & Training"
                    ]}
                    email="gugamehra464@gmail.com"
                    phone="+91 79736 34588"
                    whatsapp="https://wa.me/917973634588"
                    delay={0.2}
                />

            </div>
        </section>
    );
}

function TeamCard({ image, name, role, quote, handles, email, phone, whatsapp, delay }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, rotateY: 20 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay }}
            className="flex flex-col h-full bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
        >
            {/* Header */}
            <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-full border-4 border-[#00d9a3] overflow-hidden relative shadow-lg">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 96px, 128px"
                        priority
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgIBAwUBAAAAAAAAAAAAAQIDBAAFESEGEhMxQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABoRAAICAwAAAAAAAAAAAAAAAAECABEDITH/2gAMAwEAAhEDEEEAP//aAIUNq0NjpyXQhBgrzR4YfS2z45/cYyRIhbIxGJMr2tn/2Q=="
                    />
                </div>
                <div>
                    <h3 className="font-space-grotesk text-2xl font-bold">{name}</h3>
                    <p className="text-[#00d9a3] font-medium text-sm md:text-base">{role}</p>
                </div>
            </div>

            {/* Quote */}
            <blockquote className="font-space-grotesk text-xl font-medium italic text-muted-foreground mb-8 border-l-2 border-[#00d9a3]/50 pl-4">
                "{quote}"
            </blockquote>

            {/* List */}
            <div className="mb-8 grow">
                <h4 className="font-bold mb-4 uppercase text-xs tracking-wider text-muted-foreground">What I Handle</h4>
                <ul className="space-y-3">
                    {handles.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-sm md:text-base text-foreground/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00d9a3] mt-2 shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 pt-8 border-t border-black/5 dark:border-white/5">
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-[#00d9a3] transition-colors w-fit">
                        <Mail className="w-4 h-4" /> {email}
                    </a>
                    <a href={`tel:${phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:text-[#00d9a3] transition-colors w-fit">
                        <Phone className="w-4 h-4" /> {phone}
                    </a>
                </div>

                <div className="flex gap-4 pt-2">
                    <a
                        href={whatsapp}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-[#00d9a3] text-[#00d9a3] font-bold hover:bg-[#00d9a3] hover:text-black transition-all"
                    >
                        <MessageCircle className="w-4 h-4" /> WhatsApp
                    </a>

                </div>
            </div>
        </motion.div>
    )
}
