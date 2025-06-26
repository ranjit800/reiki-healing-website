

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/LayoutComponents/Navbar";
import Footer from "@/components/LayoutComponents/Footer";
import SmoothScroll from "@/components/SmoothScroll"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Reiki Healer",
  description: "Experience holistic healing and personal growth with Reiki, sound therapy, and transformational coaching.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <SmoothScroll />
        <Navbar/>
       <main>{children}</main>
       <Footer/>
      </body>
    </html>
  );
}
