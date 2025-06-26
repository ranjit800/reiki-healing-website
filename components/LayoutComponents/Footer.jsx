"use client";

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <footer
      className="relative text-white pt-12 pb-6 px-4"
      style={{
        background:
          "linear-gradient(120deg, rgba(94,53,102,0.85) 0%, rgba(255,182,193,0.7) 100%)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.25)",
        border: "1px solid rgba(255,255,255,0.15)",
        overflow: "hidden",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 bg-white/10 rounded-2xl p-6 backdrop-blur-md border border-white/10 shadow-xl">
        {/* Brand */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left text-[#5e3566] hover:text-[#e7b5d6] transition-colors duration-200 cursor-pointer">
            PeacefulPath
          </h2>
          <p className="text-sm text-[#f8e1f4] hover:text-white transition-colors duration-200 cursor-pointer">
            Empowering your healing journey with Reiki, sound therapy, and transformational coaching. Align your mind, body, and soul.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4 text-[#e7b5d6] hover:text-white transition-colors duration-200 cursor-pointer">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-[#f8e1f4]">
            {["Home", "About", "Services", "Testimonials", "Contact"].map((item, index) => (
              <li key={index}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors duration-200 cursor-pointer">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4 text-[#e7b5d6] hover:text-white transition-colors duration-200 cursor-pointer">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm text-[#f8e1f4]">
            {["Reiki Healing", "Crystal Therapy", "Sound Healing", "Life Coaching", "Meditation Retreats"].map((service, index) => (
              <li key={index} className="hover:text-white transition-colors duration-200 cursor-pointer">
                {service}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={fadeUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4 text-[#e7b5d6] hover:text-white transition-colors duration-200 cursor-pointer">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm text-[#f8e1f4]">
            <li className="flex items-center gap-2 md:justify-start justify-center hover:text-white transition-colors duration-200 cursor-pointer">
              <FaPhoneAlt className="text-[#fff]" /> +91 80018 01496
            </li>
            <li className="flex items-center gap-2 md:justify-start justify-center hover:text-white transition-colors duration-200 cursor-pointer">
              <FaEnvelope className="text-[#fff]" /> info@peacefulpath.com
            </li>
          </ul>

          <div className="flex items-center gap-4 mt-6 justify-center md:justify-start">
            {[FaFacebookF, FaInstagram, FaYoutube].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="hover:text-[#ffb6c1] text-xl transition-colors duration-200 cursor-pointer"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        variants={fadeUp}
        custom={4}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-10 border-t border-[#e7b5d6]/40 pt-4 text-center text-sm text-[#f8e1f4] hover:text-white transition-colors duration-200 cursor-pointer"
      >
        © {new Date().getFullYear()} PeacefulPath Wellness. All rights reserved.
      </motion.div>

      
    </footer>
  );
}
