"use client";

import { motion } from "framer-motion";

export function GoogleMap() {
    return (
        <section id="map-section" className="w-full h-[300px] md:h-[400px] mt-20 relative">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108846.10303867086!2d74.79354087812497!3d31.6335198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa569e7355%3A0x8fbd263103a38861!2sAmritsar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1709664654890!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ElevateWeb Location"
                    className="w-full h-full"
                />
            </motion.div>
        </section>
    );
}
