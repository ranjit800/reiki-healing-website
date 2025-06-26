import React from "react";
import Image from "next/image";
import img1 from "../../public/images/reikiImage/reiki1.webp";
import img2 from "../../public/images/reikiImage/reiki2.webp";
import flowerIcon from "../../public/images/reikiImg/flower.png";
import Button from "../CommonComponent/Button";

const HealingCoursesSection = () => {
  return (
    <section className="bg-[#fdf7f5] py-20 md:px-8">
      <div className="max-w-7xl container mx-auto flex flex-col gap-2 items-center">

        {/* ⬆️ Top Left & Right */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
          {/* 🔹 Top Left (Text) */}
          <div className="flex-1">
            <p className="uppercase tracking-wide text-xs text-[#9c8a8a] mb-2">
              Reiki Level 1 Course
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#551a43] mb-6 leading-tight">
              Holistic Healing Through Reiki Energy
            </h2>
            <p className="text-gray-700 mb-4">
              Discover the transformative power of Reiki in our Level 1 Course. Learn to harmonize mind, body, and soul while promoting emotional balance, physical health, and mental clarity.
            </p>
            <p className="text-gray-700 mb-6">
              This course will teach you to clear energy blockages and restore life-force energy, empowering you to bring healing and harmony into your daily life.
            </p>
            {/* <button className="bg-[#551a43] text-white px-6 py-2 rounded-full text-sm hover:bg-[#3e0f32] transition">
              I WANT TO LEARN REIKI!
            </button> */}
            <Button text=" I WANT TO LEARN REIKI!" bgColor="bg-[#551a43]" textColor="text-white" hoverBgColor="bg-[#3e0f32]"/>
          </div>

          {/* 🔹 Top Right (Image) */}
          {/* <div className="flex-1 rounded-tr-[80px] overflow-hidden h-[70vh] rounded-2xl"> */}
          <div className="relative w-[300px] h-[420px] md:w-[500px] md:h-[80vh] overflow-hidden rounded-[20px_20px_20px_160px] bg-white shadow-lg translate-y-6">
            <Image
              src={img1}
              alt="Reiki healing"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 🌸 Center Flower */}
        <div className="flex justify-center">
          <Image
            src={flowerIcon}
            alt="Flower icon"
            width={80}
            height={80}
            className="opacity-70"
          />
        </div>

        {/* ⬇️ Bottom Left & Right */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
          {/* 🔸 Bottom Left (Image) */}
          {/* <div className="flex-1 rounded-bl-[80px] overflow-hidden h-[70vh] rounded-2xl"> */}
          <div className="relative w-[300px] h-[420px] md:w-[500px] md:h-[80vh] overflow-hidden rounded-[20px_160px_20px_20px] bg-white shadow-lg translate-y-6">
            <Image
              src={img2}
              alt="Meditation"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 🔸 Bottom Right (Text) */}
          <div className="flex-1">
            <p className="uppercase tracking-wide text-xs text-[#9c8a8a] mb-2">
              Life Coaching Course
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2c3e50] mb-6 leading-tight">
              Create a Life That Inspires You
            </h2>
            <p className="text-gray-700 mb-4">
              Step into your fullest potential with our Transformational Life Coaching course. Heal, grow, and make meaningful changes to align with the highest vision of yourself.
            </p>
            <p className="text-gray-700 mb-6">
              Let go of overwhelm, break through limiting beliefs, and overcome the barriers holding you back from achieving freedom, success, abundance, and love.
            </p>
            {/* <button className="bg-[#2c3e50] text-white px-6 py-2 rounded-full text-sm hover:bg-[#1a252f] transition">
              I'M READY FOR GROWTH
            </button> */}
                        <Button text=" I'M READY FOR GROWTH" bgColor="bg-[#2c3e50]" textColor="text-white" hoverBgColor="bg-[#1a252f]"/>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HealingCoursesSection;
