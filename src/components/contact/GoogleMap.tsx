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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54004881418!2d76.93aboreel!3d28.4594965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1709664654890!5m2!1sen!2sin"
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
