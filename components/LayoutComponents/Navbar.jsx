"use client";
import { FaPhoneAlt } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import Link from "next/link";
import Button from "../CommonComponent/Button";

export default function Navbar() {
  return (
    <header className=" bg-white shadow-md w-full  py-4 ">
     <div className="container mx-auto flex justify-between items-center">
       {/* Logo */}
      <div className="text-xl font-bold flex items-center gap-2">
        <span className="text-2xl text-black">✦</span>
        <span className="text-black">LOGO</span>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex gap-6 font-medium text-black">
        <Link href="#">Home</Link>
        <Link href="#">About</Link>
        <Link href="#">Services</Link>
        <Link href="#">Testimonials</Link>
        <Link href="#">Contact</Link>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <Button text="Book an Appointment" bgColor="bg-green-100" textColor="text-black" hoverBgColor="hover:bg-green-200" />

        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 cursor-pointer">
          <FaPhoneAlt size={16} />
        </div>

        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 cursor-pointer">
          <BsChatDots size={18} />
        </div>
      </div>
     </div>
    </header>
  );
}
