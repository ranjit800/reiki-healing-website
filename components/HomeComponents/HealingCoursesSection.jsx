"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import img1 from "../../public/images/reikiImage/reiki1.webp";
import img2 from "../../public/images/reikiImage/reiki2.webp";
import flowerIcon from "../../public/images/reikiImg/flower.png";
import Button from "../CommonComponent/Button";

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
    <section className="bg-[#fdf7f5] py-20 md:px-8">
      <div className="max-w-7xl container mx-auto flex flex-col gap-20 items-center">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
          {/* Text */}
          <motion.div
            className="flex-1 px-6 md:px-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="uppercase tracking-wide text-xs text-[#9c8a8a] mb-2">
              Reiki Level 1 Course
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#551a43] mb-6 leading-tight">
              Holistic Healing Through Reiki Energy
            </h2>
            <p className="text-gray-700 mb-4">
              Discover the transformative power of Reiki in our Level 1 Course.
              Learn to harmonize mind, body, and soul while promoting emotional
              balance, physical health, and mental clarity.
            </p>
            <p className="text-gray-700 mb-6">
              This course will teach you to clear energy blockages and restore
              life-force energy, empowering you to bring healing and harmony
              into your daily life.
            </p>
            <Button
              text="I WANT TO LEARN REIKI!"
              bgColor="bg-[#551a43]"
              textColor="text-white"
              hoverBgColor="bg-[#3e0f32]"
            />
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative w-[300px] h-[420px] md:w-[500px] md:h-[80vh] overflow-hidden rounded-[20px_20px_20px_160px] bg-white shadow-2xl"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src={img1}
              alt="Reiki healing"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* 🌸 Rotating Flower */}
        <motion.div
          ref={flowerScrollRef}
          style={{ rotate }}
          className="flex justify-center"
        >
          <Image
            src={flowerIcon}
            alt="Flower icon"
            width={80}
            height={80}
            className="opacity-70"
          />
        </motion.div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
          {/* Image */}
          <motion.div
            className="relative w-[300px] h-[420px] md:w-[500px] md:h-[80vh] overflow-hidden rounded-[20px_160px_20px_20px] bg-white shadow-2xl"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src={img2}
              alt="Meditation"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="flex-1 px-6 md:px-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={1}
          >
            <p className="uppercase tracking-wide text-xs text-[#9c8a8a] mb-2">
              Life Coaching Course
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2c3e50] mb-6 leading-tight">
              Create a Life That Inspires You
            </h2>
            <p className="text-gray-700 mb-4">
              Step into your fullest potential with our Transformational Life
              Coaching course. Heal, grow, and make meaningful changes to align
              with the highest vision of yourself.
            </p>
            <p className="text-gray-700 mb-6">
              Let go of overwhelm, break through limiting beliefs, and overcome
              the barriers holding you back from achieving freedom, success,
              abundance, and love.
            </p>
            <Button
              text="I'M READY FOR GROWTH"
              bgColor="bg-[#2c3e50]"
              textColor="text-white"
              hoverBgColor="bg-[#1a252f]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HealingCoursesSection;
