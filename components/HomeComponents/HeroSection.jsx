"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import heroImg from "@/public/images/heroBackground.svg";
import heroImg from "@/public/images/newBg.png";


import Button from "../CommonComponent/Button";

const HeroSection = () => {
  return (
    <section
      className="h-auto md:[height:calc(100vh-5px)] relative"
      style={{
        background: `linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 70%, #fff 70%, #fff 100%)`,
      }}
    >
      {/* Background video for top 70% */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "78%",
          zIndex: 0,
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src="/videos/bg-video2.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between container mx-auto">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2 text-center lg:text-left md:mt-0 mt-7"
        >
          <h1 className="font-gotu text-4xl lg:text-5xl font-semibold text-primary leading-tight">
            Heal, grow and <br /> thrive with Reiki and <br /> Life Coaching
          </h1>

          <p className="mt-6 text-[#1a1919] text-base max-w-lg mx-auto lg:mx-0 px-6 md:px-0">
            I believe in working with your body to restore balance without the
            need for harsh or painful manipulation.
          </p>

          {/* CTA Section with vertical separator */}
          <div className=" mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-10">
            <Button
              text="Book an Appointment"
              textColor="text-white"
              hoverBgColor="hover:bg-opacity-80"
              className="font-gotu"
            />

            {/* Vertical Divider */}
            <div className="hidden sm:block h-12 w-px bg-gray-300"></div>

            <div className="text-sm text-[#3b1f2b] font-medium text-center sm:text-left">
              <p className="uppercase text-xs tracking-widest mb-1 text-center">
                Give us a call:
              </p>
              <p className="text-lg font-semibold">+ 1800 180 149</p>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2 mb-12 lg:mb-0 flex justify-end"
        >
          <div className="relative w-[300px] h-[420px] md:w-[500px] md:h-[600px] overflow-hidden rounded-[300px_300px_20px_20px] bg-transparent  shadow-md translate-y-10">
            <Image
              src={heroImg}
              alt="Meditating woman"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
