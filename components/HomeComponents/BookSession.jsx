"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import sessionImg from "../../public/images/reikiImg/hero2.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const BookSession = () => {
  return (
    <section className="bg-[#FAEFE8] py-8 px-2 sm:py-12 sm:px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden shadow-lg">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 h-56 sm:h-72 md:h-96 lg:h-auto relative min-h-[220px]"
        >
          <Image
            src={sessionImg}
            alt="Reiki session"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </motion.div>

        {/* Right Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:w-1/2 bg-[#5e3566] text-white p-4 sm:p-6 md:p-10 flex items-center"
        >
          <div className="w-full">
            {/* Header */}
            <motion.div
              variants={fadeUp}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-6 sm:mb-8"
            >
              <div className="text-2xl sm:text-3xl mb-2">📿</div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Book your Session</h2>
              <p className="text-xs sm:text-sm mt-2">Your life is waiting. Fast, long-lasting relief is nearby.</p>
            </motion.div>

            {/* Form */}
            <form className="space-y-3 sm:space-y-4">
              {/* Name */}
              <motion.input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-full bg-transparent border border-white placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base"
                variants={fadeUp}
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />

              {/* Phone & Email */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <motion.input
                  type="text"
                  placeholder="Your Phone"
                  className="w-full px-4 py-2 rounded-full bg-transparent border border-white placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base"
                  variants={fadeUp}
                  custom={2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                />
                <motion.input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-full bg-transparent border border-white placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base"
                  variants={fadeUp}
                  custom={3}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                />
              </div>

              {/* Treatment Dropdown */}
              <motion.select
                className="w-full px-4 py-2 rounded-full bg-transparent border border-white text-white focus:outline-none text-sm sm:text-base"
                variants={fadeUp}
                custom={4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <option className="text-black">Choose a Treatment</option>
                <option className="text-black">Reiki Healing</option>
                <option className="text-black">Sound Therapy</option>
                <option className="text-black">Life Coaching</option>
              </motion.select>

              {/* Date & Time */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <motion.input
                  type="date"
                  className="w-full px-4 py-2 rounded-full bg-transparent border border-white text-white focus:outline-none text-sm sm:text-base"
                  variants={fadeUp}
                  custom={5}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                />
                <motion.select
                  className="w-full px-4 py-2 rounded-full bg-transparent border border-white text-white focus:outline-none text-sm sm:text-base"
                  variants={fadeUp}
                  custom={6}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <option className="text-black">08</option>
                  <option className="text-black">09</option>
                  <option className="text-black">10</option>
                </motion.select>
                <motion.select
                  className="w-full px-4 py-2 rounded-full bg-transparent border border-white text-white focus:outline-none text-sm sm:text-base"
                  variants={fadeUp}
                  custom={7}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <option className="text-black">30</option>
                  <option className="text-black">45</option>
                </motion.select>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-2 mt-3 sm:mt-4 rounded-full bg-white text-[#5e3566] font-semibold hover:bg-[#f0f0f0] transition text-sm sm:text-base"
                variants={fadeUp}
                custom={8}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                BOOK ONLINE
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookSession;
