"use client";

import React from "react";
import Image from "next/image";
import Button from "../CommonComponent/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import cardImg1 from "@/public/images/TherapiesImg/img1.png";
import cardImg2 from "@/public/images/TherapiesImg/img2.png";
import cardImg3 from "@/public/images/TherapiesImg/img3.png";
import cardImg4 from "@/public/images/TherapiesImg/img4.png";

const therapies = [
  {
    title: "Reiki Healing",
    desc: "Gentle energy healing for relaxation and stress reduction.",
    longDesc: "Experience deep relaxation and stress relief through gentle energy healing. Reiki promotes emotional balance, reduces anxiety, and enhances your natural...",
    img: cardImg1,
  },
  {
    title: "Crystal Healing",
    desc: "Harnessing crystal energies for balance and well-being.",
    longDesc: "Discover the powerful healing properties of crystals to restore balance in your life. Each crystal carries unique energies that can help with emotional healing...",
    img: cardImg2,
  },
  {
    title: "Sound Healing",
    desc: "Therapeutic sound vibrations for deep relaxation and healing.",
    longDesc: "Immerse yourself in therapeutic sound vibrations that promote deep relaxation and healing. Using singing bowls, tuning forks, and other instruments...",
    img: cardImg3,
  },
  {
    title: "Aromatherapy",
    desc: "Using essential oils to enhance emotional and physical health.",
    longDesc: "Enhance your emotional and physical well-being through the therapeutic use of essential oils. Our custom blends target specific concerns like stress...",
    img: cardImg4,
  },
  {
    title: "Massage Therapy",
    desc: "Relieve tension and promote wellness with expert massage.",
    longDesc: "Experience therapeutic massage techniques designed to relieve muscle tension, improve circulation, and promote overall wellness...",
    img: cardImg4,
  },
  {
    title: "Energy Cleansing",
    desc: "Clear stagnant energy and restore positive flow.",
    longDesc: "Clear stagnant energy and restore positive flow throughout your energy field. This powerful technique removes negative energy, emotional blockages...",
    img: cardImg4,
  },
];

const TherapiesSection = () => {
  return (
    <section className="pt-16 md:py-0 md:mb-6 bg-white">
      <div className="container mx-auto px-4">
        {/* 👇 Animated Header */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-semibold text-primary  mb-2 ">List of Therapies</h2>
          <p className="text-[#4a4a4a]  cursor-pointer ">Holistic & Natural Approaches to Healing</p>
        </motion.div>

        {/* Swiper Section */}
        <div className="relative pb-8">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3.7 },
            }}
          >
            {therapies.map((therapy, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#FAEFE8] rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-4"
                >
                  <div className="w-full h-56 relative">
                    <Image src={therapy.img} alt={therapy.title} fill className="object-cover" />
                  </div>
                  <div className="p-5 flex flex-col justify-between h-[260px]">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-[#2d2d2d]">{therapy.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{therapy.desc}</p>
                      <p className="text-xs text-gray-500 leading-relaxed text-center">{therapy.longDesc}</p>
                    </div>
                    <div className="mt-4">
                      <Button text="Explore"  textColor="text-white" hoverBgColor="hover:bg-opacity-80" className="w-full" />
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TherapiesSection;
