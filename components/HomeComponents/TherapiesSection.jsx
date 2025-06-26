"use client";

import React from "react";
import Image from "next/image";
import Button from "../CommonComponent/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import cardImg1 from "@/public/images/TherapiesImg/img1.png";
import cardImg2 from "@/public/images/TherapiesImg/img2.png";
import cardImg3 from "@/public/images/TherapiesImg/img3.png";
import cardImg4 from "@/public/images/TherapiesImg/img4.png";

// Use imported images in therapies array
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
    title: "Aromatherapy",
    desc: "Using essential oils to enhance emotional and physical health.",
    img: cardImg4,
  },
  {
    title: "Aromatherapy",
    desc: "Using essential oils to enhance emotional and physical health.",
    img: cardImg4,
  },
  {
    title: "Aromatherapy",
    desc: "Using essential oils to enhance emotional and physical health.",
    img: cardImg4,
  },
];

const TherapiesSection = () => {
  return (
    <section className="py-16 md:py-0 mb-6 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">List of Therapies</h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {therapies.map((therapy, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="w-full h-56 relative">
                  <Image src={therapy.img} alt={therapy.title} fill className="object-cover" />
                </div>
                <div className="p-5 flex flex-col justify-between h-[220px]">
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-[#2d2d2d]">{therapy.title}</h3>
                    <p className="text-sm text-gray-600">{therapy.desc}</p>
                  </div>
                  <div className="mt-6">
                    <Button text="Explore" bgColor="bg-green-100" textColor="text-black" hoverBgColor="hover:bg-green-200" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TherapiesSection;
