"use client";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import Button from "../CommonComponent/Button";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Testimonials", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <header className="bg-white shadow-md w-full py-4 z-30 sticky top-0 left-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold flex items-center gap-2">
          <span className="text-2xl text-black">✦</span>
          <span className="text-black">LOGO</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex gap-6 font-medium text-black">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            text="Book an Appointment"
            bgColor="bg-green-100"
            textColor="text-black"
            hoverBgColor="hover:bg-green-200"
          />

          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 cursor-pointer">
            <FaPhoneAlt size={16} />
          </div>

          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 cursor-pointer">
            <BsChatDots size={18} />
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200"
          aria-label="Open menu"
          onClick={() => setDrawerOpen(true)}
        >
          <HiMenu size={24} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-40">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-40"
            onClick={() => setDrawerOpen(false)}
          ></div>
          {/* Drawer */}
          <div className="absolute top-0 right-0 w-4/5 max-w-xs h-full bg-white shadow-lg flex flex-col p-6 animate-slide-in">
            <div className="flex items-center justify-between mb-8">
              <div className="text-xl font-bold flex items-center gap-2">
                <span className="text-2xl text-black">✦</span>
                <span className="text-black">LOGO</span>
              </div>
              <button
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
                aria-label="Close menu"
                onClick={() => setDrawerOpen(false)}
              >
                <HiX size={28} />
              </button>
            </div>
            <nav className="flex flex-col gap-6 font-medium text-black">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setDrawerOpen(false)}
                  className="text-lg"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-4">
              <Button
                text="Book an Appointment"
                bgColor="bg-green-100"
                textColor="text-black"
                hoverBgColor="hover:bg-green-200"
                className="w-full"
              />
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 cursor-pointer">
                  <FaPhoneAlt size={16} />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 cursor-pointer">
                  <BsChatDots size={18} />
                </div>
              </div>
            </div>
          </div>
          <style jsx global>{`
            @keyframes slide-in {
              from {
                transform: translateX(100%);
              }
              to {
                transform: translateX(0);
              }
            }
            .animate-slide-in {
              animation: slide-in 0.25s cubic-bezier(0.4, 0, 0.2, 1);
            }
          `}</style>
        </div>
      )}
    </header>
  );
}
