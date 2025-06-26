import React from "react";
import Image from "next/image";
import heroImg from "../../public/images/reikiImg/healer5.webp"; // your image path

const HealingJourneySection = () => {
  return (
    <section className="bg-[#f3d8cf] py-20 px-4 md:px-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Image with rounded corner */}
        <div className="rounded-[20px_160px_20px_20px] overflow-hidden max-w-md md:max-w-xl w-full">
          <Image
            src={heroImg}
            alt="Reiki Master"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-medium text-[#2c3e50] mb-6">
            Honour Your Healing Journey
          </h2>
          <p className="text-gray-700 mb-4">
            With over 15 years of experience as a Reiki Master Teacher and Transformational Life Coach, Celeste Ray creates a compassionate space for healing, supporting you as you explore new possibilities.
          </p>
          <p className="text-gray-700 mb-8">
            Whether through life coaching, Reiki training, or healing sessions, Celeste guides you with compassion, helping you embrace your true potential.
          </p>
          <button className="bg-[#3d5a5a] text-white px-6 py-2 rounded-full text-sm hover:bg-[#2f4747] transition">
            MORE ABOUT ME
          </button>
        </div>
      </div>
    </section>
  );
};

export default HealingJourneySection;
