"use client";

import { useState } from "react";
import { User, Phone, Mail, Store, MessageSquare, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        businessType: "Restaurant",
        message: "",
        contactMethod: "whatsapp"
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (formData.name.trim().length < 2) newErrors.name = "Name must be at least 2 characters";

        // Simple Indian phone validation regex (starts with 6-9 and has 10 digits)
        const phoneRegex = /^[6-9]\d{9}$/;
        // Allow spaces/dashes but strip them for check
        const cleanPhone = formData.phone.replace(/[\s-]/g, '');
        if (!phoneRegex.test(cleanPhone)) newErrors.phone = "Please enter a valid 10-digit Indian number";

        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error on change
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // For now, fallback to WhatsApp redirect as requested if "backend" fails (or is mocked)
        // Constructing WhatsApp message
        const text = `Hi, I'm ${formData.name} from ${formData.businessType}.%0A%0APhone: ${formData.phone}%0AEmail: ${formData.email || 'N/A'}%0A%0AMessage: ${formData.message}`;

        // In a real app we'd try an API first. Here we just show success state.
        setIsSubmitting(false);
        setIsSuccess(true);

        // Reset after 3 seconds
        setTimeout(() => {
            setIsSuccess(false);
            setFormData({
                name: "",
                phone: "",
                email: "",
                businessType: "Restaurant",
                message: "",
                contactMethod: "whatsapp"
            });
            // Redirect to WhatsApp as fallback/action
            window.open(`https://wa.me/917901919447?text=${text}`, '_blank');
        }, 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-slate-800/60 backdrop-blur-md rounded-[2rem] p-8 md:p-10 shadow-xl border border-black/5 dark:border-white/10"
        >
            <form onSubmit={handleSubmit} className="space-y-6">

                {/* NAME */}
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className={cn(
                                "w-full bg-black/5 dark:bg-black/20 border rounded-xl py-3 pl-12 pr-4 outline-none transition-all focus:ring-2 focus:ring-[#00d9a3]/50",
                                errors.name ? "border-red-500 focus:border-red-500" : "border-transparent focus:border-[#00d9a3]"
                            )}
                        />
                    </div>
                    <AnimatePresence>
                        {errors.name && (
                            <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-red-500 text-xs pl-1">
                                {errors.name}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>

                {/* PHONE */}
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                        Phone <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 XXXXX XXXXX"
                            className={cn(
                                "w-full bg-black/5 dark:bg-black/20 border rounded-xl py-3 pl-12 pr-4 outline-none transition-all focus:ring-2 focus:ring-[#00d9a3]/50",
                                errors.phone ? "border-red-500 focus:border-red-500" : "border-transparent focus:border-[#00d9a3]"
                            )}
                        />
                    </div>
                    <p className="text-xs text-muted-foreground pl-1">We'll reply via WhatsApp</p>
                    <AnimatePresence>
                        {errors.phone && (
                            <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-red-500 text-xs pl-1">
                                {errors.phone}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>

                {/* EMAIL */}
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                        Email <span className="text-xs text-muted-foreground font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className={cn(
                                "w-full bg-black/5 dark:bg-black/20 border rounded-xl py-3 pl-12 pr-4 outline-none transition-all focus:ring-2 focus:ring-[#00d9a3]/50",
                                errors.email ? "border-red-500 focus:border-red-500" : "border-transparent focus:border-[#00d9a3]"
                            )}
                        />
                    </div>
                </div>

                {/* BUSINESS TYPE */}
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                        Business Type <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <Store className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <select
                            name="businessType"
                            value={formData.businessType}
                            onChange={handleChange}
                            className="w-full bg-black/5 dark:bg-black/20 border border-transparent rounded-xl py-3 pl-12 pr-4 outline-none transition-all focus:ring-2 focus:ring-[#00d9a3]/50 focus:border-[#00d9a3] appearance-none"
                        >
                            <option>Restaurant</option>
                            <option>Café</option>
                            <option>Hotel/Homestay</option>
                            <option>Bakery</option>
                            <option>Cloud Kitchen</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>

                {/* MESSAGE */}
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                        Message <span className="text-xs text-muted-foreground font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            maxLength={500}
                            placeholder="Tell us about your business and what you need..."
                            className="w-full bg-black/5 dark:bg-black/20 border border-transparent rounded-xl py-3 pl-12 pr-4 outline-none transition-all focus:ring-2 focus:ring-[#00d9a3]/50 focus:border-[#00d9a3] resize-none"
                        />
                    </div>
                </div>

                {/* PREFERRED METHOD */}
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Preferred Contact Method</label>
                    <div className="flex flex-wrap gap-4">
                        {['whatsapp', 'phone', 'email'].map((method) => (
                            <label key={method} className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="contactMethod"
                                    value={method}
                                    checked={formData.contactMethod === method}
                                    onChange={handleChange}
                                    className="accent-[#00d9a3] w-4 h-4"
                                />
                                <span className="text-sm capitalize">{method === 'whatsapp' ? 'WhatsApp' : method}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                        "w-full py-4 rounded-xl font-bold text-black text-lg transition-all duration-300 flex items-center justify-center gap-2",
                        isSuccess ? "bg-green-500 hover:bg-green-600" : "bg-[#00d9a3] hover:bg-[#00c291] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#00d9a3]/20",
                        isSubmitting && "opacity-80 cursor-wait"
                    )}
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                        </>
                    ) : isSuccess ? (
                        <>
                            <CheckCircle className="w-5 h-5" />
                            Message Sent!
                        </>
                    ) : (
                        "Send Message →"
                    )}
                </button>

            </form>
        </motion.div>
    );
}
