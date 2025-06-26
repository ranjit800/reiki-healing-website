import React from "react";
import Image from "next/image";
import heroImg from "@/public/images/HeroImg.jpg"; // Replace with your actual image path
import Button from "../CommonComponent/Button";

const HeroSection = () => {
  return (
    <section
      className=" h-auto md:[height:calc(100vh-5px)]"
      style={{
        backgroundImage: "linear-gradient(to bottom, #FAEFE8 65%, white 35%)",
      }}
    >
        {/* Content */}
        <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between container mx-auto">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left ">
            <h1 className="text-4xl lg:text-5xl font-semibold text-[#3b1f2b] leading-snug">
              Heal, grow and <br /> thrive with Reiki and <br /> Life Coaching
            </h1>

            <p className="mt-6 text-[#4a4a4a] text-base max-w-lg mx-auto lg:mx-0">
              I believe in working with your body to restore balance without the need for harsh or painful manipulation.
            </p>

            {/* CTA Section with vertical separator */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-10">
              <Button text="Book an Appointment" bgColor="bg-green-100" textColor="text-black" hoverBgColor="hover:bg-green-200" />

              {/* Vertical Divider for desktop */}
              <div className="hidden sm:block h-12 w-px bg-gray-300"></div>

              <div className="text-sm text-[#3b1f2b] font-medium text-center sm:text-left">
                <p className="uppercase text-xs tracking-widest mb-1 text-center">Give us a call:</p>
                <p className="text-lg font-semibold">+ 1800 180 149</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 flex justify-end ">
            <div className="relative w-[300px] h-[420px] md:w-[400px] md:h-[550px] overflow-hidden rounded-[160px_160px_10px_10px] bg-white shadow-lg translate-y-6">
              <Image src={heroImg} alt="Meditating woman" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default HeroSection; 