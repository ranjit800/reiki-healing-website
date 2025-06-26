// import React from "react";
// import { FaPhoneAlt } from "react-icons/fa";
// import { BsChatDots } from "react-icons/bs";
// import Link from "next/link";

// const DesktopNavbar = () => {
//   return (
//     <header className="w-full px-8 py-4 shadow-md bg-white flex justify-between items-center  ">
//       {/* Logo */}
//       <div className="text-xl font-bold flex items-center gap-2">
//         <span className="text-2xl text-black">✦</span>
//         <span className="text-black">LOGO</span>
//       </div>

//       {/* Navigation Links */}
//       <nav className="hidden md:flex gap-6 font-medium text-black">
//         <Link href="#">Home</Link>
//         <Link href="#">About</Link>
//         <Link href="#">Services</Link>
//         <Link href="#">Testimonials</Link>
//         <Link href="#">Contact</Link>
//       </nav>

//       {/* Actions */}
//       <div className="flex items-center gap-3">
//         <button className="bg-green-100 text-black font-semibold px-5 py-2 rounded-full hover:bg-green-200 transition">Book an Appointment</button>

//         <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 cursor-pointer">
//           <FaPhoneAlt size={16} />
//         </div>

//         <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 cursor-pointer">
//           <BsChatDots size={18} />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default DesktopNavbar;


import React, { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

const navVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const DesktopNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Handler to call on window scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Call handler right away so state gets updated with initial scroll position
    handleScroll();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`w-full px-8 py-4 flex justify-between items-center transition-colors duration-300 ${
        scrolled
          ? "bg-transparent backdrop-blur-sm shadow-lg border-b border-white/30"
          : "bg-white shadow-md"
      }`}
      style={
        scrolled
          ? {
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
              background: "rgba(255,255,255,0.7)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.10)",
              borderBottom: "1px solid rgba(255,255,255,0.15)",
            }
          : {}
      }
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Logo */}
      <motion.div
        className="text-xl font-bold flex items-center gap-2"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <span className="text-2xl text-black">✦</span>
        <span className="text-black">LOGO</span>
      </motion.div>

      {/* Navigation Links */}
      <motion.nav
        className="hidden md:flex gap-6 font-medium text-black"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        {navLinks.map((link, idx) => (
          <motion.div key={link.label} variants={navItemVariants}>
            <Link href={link.href}>{link.label}</Link>
          </motion.div>
        ))}
      </motion.nav>

      {/* Actions */}
      <motion.div
        className="flex items-center gap-3"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.button
          className="bg-green-100 text-black font-semibold px-5 py-2 rounded-full hover:bg-green-200 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Book an Appointment
        </motion.button>

        <motion.div
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 cursor-pointer"
          whileHover={{ scale: 1.1, backgroundColor: "#e5e7eb" }}
          whileTap={{ scale: 0.95 }}
        >
          <FaPhoneAlt size={16} />
        </motion.div>

        <motion.div
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 cursor-pointer"
          whileHover={{ scale: 1.1, backgroundColor: "#e5e7eb" }}
          whileTap={{ scale: 0.95 }}
        >
          <BsChatDots size={18} />
        </motion.div>
      </motion.div>
    </motion.header>
  );
};

export default DesktopNavbar;
