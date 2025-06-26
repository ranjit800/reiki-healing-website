"use client";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <>
      {/* Desktop Navbar: visible on md and up */}
      <div className="hidden md:block sticky top-0 left-0 z-50">
        <DesktopNavbar />
      </div>
      {/* Mobile Navbar: visible below md */}
      <div className="block md:hidden sticky top-0 left-0 z-50">
        <MobileNavbar />
      </div>
    </>
  );
}
