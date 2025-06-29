"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import sessionImg from "../../public/images/reikiImg/bookingImg.png";
import Button from "../CommonComponent/Button";
import Bg from "../../public/images/sectionBg02.png"

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
    <section className="relative py-24 px-4 md:px-8">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src={Bg} alt="Background" fill className="object-cover" priority={false} />
      </div>
      
      <div className="container mx-auto flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-xl min-h-[600px] relative z-10">
        {/* Left Image - w-2/5 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-2/5 relative h-[300px] lg:h-auto"
        >
          <Image src={sessionImg} alt="Session" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" priority />
        </motion.div>

        {/* Right Form - w-3/5 */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full lg:w-3/5 bg-[#5e3566]/90 text-white p-6 md:p-10 flex items-center">
          <div className="w-full">
            {/* Header */}
            <motion.div variants={fadeUp} custom={0} className="text-center mb-8">
              <div className="text-2xl sm:text-3xl mb-2">📿</div>
              <h2 className="text-2xl sm:text-3xl font-semibold">Book your Session</h2>
              <p className="text-sm mt-2">Your life is waiting. Fast, long-lasting relief is nearby.</p>
            </motion.div>

            {/* Form */}
            <form className="space-y-4">
              <motion.input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-full bg-transparent border border-white placeholder-white text-white focus:outline-none text-sm"
                variants={fadeUp}
                custom={1}
              />

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.input
                  type="text"
                  placeholder="Your Phone"
                  className="w-full px-4 py-2 rounded-full bg-transparent border border-white placeholder-white text-white text-sm"
                  variants={fadeUp}
                  custom={2}
                />
                <motion.input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-full bg-transparent border border-white placeholder-white text-white text-sm"
                  variants={fadeUp}
                  custom={3}
                />
              </div>

              <motion.select className="w-full px-4 py-2 rounded-full bg-transparent border border-white text-white text-sm" variants={fadeUp} custom={4}>
                <option className="text-black">Choose a Treatment</option>
                <option className="text-black">Reiki Healing</option>
                <option className="text-black">Sound Therapy</option>
                <option className="text-black">Life Coaching</option>
              </motion.select>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.input type="date" className="w-full px-4 py-2 rounded-full bg-transparent border border-white text-white text-sm" variants={fadeUp} custom={5} />
                <motion.select className="w-full px-4 py-2 rounded-full bg-transparent border border-white text-white text-sm" variants={fadeUp} custom={6}>
                  <option className="text-black">08</option>
                  <option className="text-black">09</option>
                  <option className="text-black">10</option>
                </motion.select>
                <motion.select className="w-full px-4 py-2 rounded-full bg-transparent border border-white text-white text-sm" variants={fadeUp} custom={7}>
                  <option className="text-black">30</option>
                  <option className="text-black">45</option>
                </motion.select>
              </div>

              <div className="flex justify-center">
                <Button
                  text="BOOK ONLINE"
                  bgColor="bg-[#551a43]"
                  textColor="text-white"
                  hoverBgColor="hover:bg-opacity-80"
                  className="w-5/6 py-2 mt-3 font-semibold text-sm"
                  onClick={(e) => {
                    e.preventDefault(); /* handle submit here if needed */
                  }}
                />
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookSession;
