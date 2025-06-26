"use client";

import React from "react";
import Image from "next/image";
import Button from "../CommonComponent/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import cardImg1 from "@/public/images/TherapiesImg/img1.png";
import cardImg2 from "@/public/images/TherapiesImg/img2.png";
import cardImg3 from "@/public/images/TherapiesImg/img3.png";
import cardImg4 from "@/public/images/TherapiesImg/img4.png";

const therapies = [
  {
    title: "Reiki Healing",
    desc: "Gentle energy healing for relaxation and stress reduction.",
    img: cardImg1,
  },
  {
    title: "Crystal Healing",
    desc: "Harnessing crystal energies for balance and well-being.",
    img: cardImg2,
  },
  {
    title: "Sound Healing",
    desc: "Therapeutic sound vibrations for deep relaxation and healing.",
    img: cardImg3,
  },
  {
    title: "Aromatherapy",
    desc: "Using essential oils to enhance emotional and physical health.",
    img: cardImg4,
  },
  {
    title: "Massage Therapy",
    desc: "Relieve tension and promote wellness with expert massage.",
    img: cardImg4,
  },
  {
    title: "Energy Cleansing",
    desc: "Clear stagnant energy and restore positive flow.",
    img: cardImg4,
  },
];

const TherapiesSection = () => {
  return (
    <section className="py-16 md:py-0 mb-6 bg-white">
      <div className="container mx-auto px-4">
        {/* 👇 Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
            List of Therapies
          </h2>
          <p className="text-[#4a4a4a] underline cursor-pointer">
            Holistic & Natural Approaches to Healing
          </p>
        </motion.div>

        {/* Swiper Section */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".custom-swiper-pagination",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {therapies.map((therapy, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-full h-56 relative">
                    <Image src={therapy.img} alt={therapy.title} fill className="object-cover" />
                  </div>
                  <div className="p-5 flex flex-col justify-between h-[220px]">
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-[#2d2d2d]">{therapy.title}</h3>
                      <p className="text-sm text-gray-600">{therapy.desc}</p>
                    </div>
                    <div className="mt-6">
                      <Button
                        text="Explore"
                        bgColor="bg-green-100"
                        textColor="text-black"
                        hoverBgColor="hover:bg-green-200"
                        className="w-full"
                      />
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Swiper Pagination */}
          <div className="custom-swiper-pagination flex justify-center mt-8" />
        </div>
      </div>
    </section>
  );
};

export default TherapiesSection;
