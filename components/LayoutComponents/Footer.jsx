"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
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
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left text-[#5e3566] hover:text-[#e7b5d6] transition-colors duration-200 cursor-pointer">
            PeacefulPath
          </h2>
          <p className="text-sm text-[#f8e1f4] hover:text-white transition-colors duration-200 cursor-pointer">
            Empowering your healing journey with Reiki, sound therapy, and transformational coaching. Align your mind, body, and soul.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4 text-[#e7b5d6] hover:text-white transition-colors duration-200 cursor-pointer">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-[#f8e1f4]">
            <li>
              <a href="#home" className="hover:text-white transition-colors duration-200 cursor-pointer">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition-colors duration-200 cursor-pointer">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition-colors duration-200 cursor-pointer">
                Services
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-white transition-colors duration-200 cursor-pointer">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors duration-200 cursor-pointer">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4 text-[#e7b5d6] hover:text-white transition-colors duration-200 cursor-pointer">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm text-[#f8e1f4]">
            <li className="hover:text-white transition-colors duration-200 cursor-pointer">Reiki Healing</li>
            <li className="hover:text-white transition-colors duration-200 cursor-pointer">Crystal Therapy</li>
            <li className="hover:text-white transition-colors duration-200 cursor-pointer">Sound Healing</li>
            <li className="hover:text-white transition-colors duration-200 cursor-pointer">Life Coaching</li>
            <li className="hover:text-white transition-colors duration-200 cursor-pointer">Meditation Retreats</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center md:text-left">
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
            <a href="#" className="hover:text-[#ffb6c1] text-xl transition-colors duration-200 cursor-pointer">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#ffb6c1] text-xl transition-colors duration-200 cursor-pointer">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#ffb6c1] text-xl transition-colors duration-200 cursor-pointer">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-[#e7b5d6]/40 pt-4 text-center text-sm text-[#f8e1f4] hover:text-white transition-colors duration-200 cursor-pointer">
        © {new Date().getFullYear()} PeacefulPath Wellness. All rights reserved.
      </div>
    </footer>
  );
}
