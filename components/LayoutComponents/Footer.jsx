"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#3b1f2b] text-white pt-12 pb-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left">PeacefulPath</h2>
          <p className="text-sm text-gray-300">
            Empowering your healing journey with Reiki, sound therapy, and transformational coaching. Align your mind, body, and soul.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Reiki Healing</li>
            <li>Crystal Therapy</li>
            <li>Sound Healing</li>
            <li>Life Coaching</li>
            <li>Meditation Retreats</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center md:text-left"> 
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-300 ">
            <li className="flex items-center gap-2 md:justify-start justify-center">
              <FaPhoneAlt className="text-white" /> +91 80018 01496
            </li>
            <li className="flex items-center gap-2 md:justify-start justify-center">
              <FaEnvelope className="text-white" /> info@peacefulpath.com
            </li>
          </ul>

          <div className="flex items-center gap-4 mt-6">
            <a href="#" className="hover:text-pink-200 text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-pink-200 text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-pink-200 text-xl">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} PeacefulPath Wellness. All rights reserved.
      </div>
    </footer>
  );
}
