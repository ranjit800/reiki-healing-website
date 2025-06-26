"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import heroImg from "../../public/images/reikiImg/healer5.webp"; // your image path
import background from "../../public/images/booking-bg/bg4.svg";
import elem from "../../public/images/elem2.png";
import Button from "../CommonComponent/Button";

const HealingJourneySection = () => {
  return (
    <section
      className="bg-[#f3d8cf] py-20 px-4 md:px-10 relative"
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Image with animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-[20px_160px_20px_20px] overflow-hidden max-w-md md:max-w-xl w-full shadow-2xl"
        >
          <Image src={heroImg} alt="Reiki Master" className="object-cover w-full h-full" />
        </motion.div>

        {/* Right Content with animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-medium text-[#2c3e50] mb-6">Honour Your Healing Journey</h2>
          <p className="text-gray-700 mb-4">
            With over 15 years of experience as a Reiki Master Teacher and Transformational Life Coach, Celeste Ray creates a compassionate space for healing, supporting you as you
            explore new possibilities.
          </p>
          <p className="text-gray-700 mb-8">
            Whether through life coaching, Reiki training, or healing sessions, Celeste guides you with compassion, helping you embrace your true potential.
          </p>

          <Button text="Book an Appointment" bgColor="bg-[#3d5a5a]" textColor="text-white" hoverBgColor="hover:bg-[#2f4747]" />
        </motion.div>
      </div>
      {/* Decorative elem image in bottom right corner */}
      <div className="absolute bottom-0 right-0 z-10 pointer-events-none">
        <Image src={elem} alt="" className="w-32 h-32 md:w-48 md:h-48 object-contain" priority={false} />
      </div>
    </section>
  );
};

export default HealingJourneySection;
