"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import img1 from "../../public/images/reikiImage/reiki1.webp";
import img2 from "../../public/images/reikiImage/reiki2.webp";
import flowerIcon from "../../public/images/reikiImg/flower4.png";
import Button from "../CommonComponent/Button";
import elem from "../../public/images/elem3.png";
import Bg from "../../public/images/sectionBg.png";

// Animation for fade/slide
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const HealingCoursesSection = () => {
  const flowerScrollRef = useRef(null);

  // Scroll tracking for flower rotation
  const { scrollYProgress } = useScroll({
    target: flowerScrollRef,
    offset: ["start end", "end start"], // From entering to leaving the viewport
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section className="relative md:py-4 py-10 md:px-8">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src={Bg} alt="Background" fill className="object-cover" priority={false} />
      </div>
      
      {/* Decorative elem3.png in center bottom */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-10 pointer-events-none">
        <Image src={elem} alt="" className="w-24 h-24 md:w-32 md:h-32 object-contain" priority={false} />
      </div>
      
      <div className="max-w-7xl container mx-auto flex flex-col md:gap-0 gap-5 items-center relative z-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
          {/* Text */}
          <motion.div className="flex-1 px-6 md:px-0" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <p className="uppercase tracking-wide text-xs text-[#9c8a8a] mb-2">Reiki Level 1 Course</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#551a43] mb-6 leading-tight">Holistic Healing Through Reiki Energy</h2>
            <p className="text-gray-700 mb-4">
              Discover the transformative power of Reiki in our Level 1 Course. Learn to harmonize mind, body, and soul while promoting emotional balance, physical health, and
              mental clarity.
            </p>
            <p className="text-gray-700 mb-6">
              This course will teach you to clear energy blockages and restore life-force energy, empowering you to bring healing and harmony into your daily life.
            </p>
            <Button text="I WANT TO LEARN REIKI!" bgColor="bg-[#551a43]" textColor="text-white" hoverBgColor="bg-[#3e0f32]" />
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative lg:translate-y-20 w-[300px] h-[420px] md:w-[500px] md:h-[70vh] overflow-hidden rounded-[20px_20px_20px_160px] bg-white shadow-2xl "
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image src={img1} alt="Reiki healing" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* 🌸 Rotating Flower */}
        <motion.div ref={flowerScrollRef} style={{ rotate }} className="flex justify-center md:py-20 md:mb-10 mb-0 py-0 lg:mb-0 lg:py-0">
          <Image src={flowerIcon} alt="Flower icon" width={90} height={90} className="opacity-100" />
        </motion.div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
          {/* Image */}
          <motion.div
            className="relative md:-translate-y-20 w-[300px] h-[420px] md:w-[500px] md:h-[70vh] overflow-hidden rounded-[20px_160px_20px_20px] bg-white shadow-2xl"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image src={img2} alt="Meditation" className="w-full h-full object-cover" />
          </motion.div>

          {/* Text */}
          <motion.div className="flex-1 px-6 md:px-0" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={1}>
            <p className="uppercase tracking-wide text-xs text-[#9c8a8a] mb-2">Life Coaching Course</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2c3e50] mb-6 leading-tight">Create a Life That Inspires You</h2>
            <p className="text-gray-700 mb-4">
              Step into your fullest potential with our Transformational Life Coaching course. Heal, grow, and make meaningful changes to align with the highest vision of yourself.
            </p>
            <p className="text-gray-700 mb-6">
              Let go of overwhelm, break through limiting beliefs, and overcome the barriers holding you back from achieving freedom, success, abundance, and love.
            </p>
            <Button text="I'M READY FOR GROWTH" bgColor="bg-[#551a43]" textColor="text-white" hoverBgColor="hover:bg-opacity-80" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HealingCoursesSection;
