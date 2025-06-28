"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Button from "../CommonComponent/Button";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Mobile Navbar */}
      <header className="w-full flex justify-between items-center px-4 py-4 bg-white shadow-md sticky top-0 z-40 lg:hidden">
        <Link href="/">
          <div className="text-xl font-bold flex items-center gap-2">
            <span className="text-2xl text-black">✦</span>
            <span className="text-black">LOGO</span>
          </div>
        </Link>

        <button onClick={() => setIsOpen(true)} className="text-3xl text-black">
          <HiMenu />
        </button>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-2xl transform rounded-tr-2xl ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center px-4 py-4 bg-[#61a4b1] rounded-tr-2xl">
          <div className="text-xl font-bold flex items-center gap-2">
            <span className="text-2xl text-white">✦</span>
            <span className="text-white">LOGO</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white text-2xl">
            <HiX />
          </button>
        </div>

        <nav className="flex flex-col gap-5 px-6 pt-6 font-semibold text-gray-900">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/services" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link href="/testimonials" onClick={() => setIsOpen(false)}>
            Testimonials
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>

          <Button
            text="Book an Appointment"
            bgColor="bg-[#551a43]"
            textColor="text-white"
            hoverBgColor="hover:bg-opacity-80"
            className="mt-4 px-4 py-2"
            onClick={() => setIsOpen(false)}
          />
        </nav>

        <div className="px-6 pt-10 flex gap-4">
          <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200">
            <FaFacebookF />
          </a>
          <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200">
            <FaInstagram />
          </a>
          <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200">
            <FaTwitter />
          </a>
        </div>
      </aside>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setIsOpen(false)} />}
    </>
  );
};

export default MobileNavbar;
