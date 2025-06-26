"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Profile1 from "@/public/images/profile.avif";
import background from "../../public/images/booking-bg/background2.svg";

// Testimonials data
const testimonials = [
  {
    name: "Cynthia",
    session: "Reiki Healing Session",
    text: "My Reiki session was incredibly calming and transformative...",
    stars: 5,
    image: Profile1,
  },
  {
    name: "Mike",
    session: "Life Coaching Session",
    text: "My life coaching session was eye-opening and empowering...",
    stars: 5,
    image: Profile1,
  },
  {
    name: "Sophia",
    session: "Chakra Balancing Session",
    text: "The chakra balancing session was an incredible experience...",
    stars: 5,
    image: Profile1,
  },
  {
    name: "Mason",
    session: "Sound Healing Session",
    text: "The sound healing session was deeply relaxing and transformative...",
    stars: 5,
  },
  {
    name: "Mary",
    session: "Meditation Retreat",
    text: "The meditation retreat was incredible. Peaceful settings...",
    stars: 5,
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const TestimonialSection = () => {
  return (
    // <section className="bg-white py-16 px-4 lg:px-8">
    <section
      className="py-16 px-4 lg:px-8"
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-800 mb-2"
        >
          Real People. Real Results
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[#4a4a4a] underline mb-12 cursor-pointer"
        >
          More than 250 five-star reviews on Google
        </motion.p>

        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-gray-50 hover:shadow-lg transition-shadow p-6 rounded-xl text-left border"
            >
              <div className="text-purple-600 mb-3">
                {Array.from({ length: item.stars }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">{item.text}</p>
              <div className="flex items-center gap-2 mt-4">
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover w-10 h-10"
                  />
                )}
                <span className="text-sm text-gray-600">
                  {item.name} on {item.session}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Video testimonial */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-xl bg-black aspect-video"
          >
            {/* Use either iframe or <video> tag */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover rounded-xl"
              src="/videos/testimonial.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
