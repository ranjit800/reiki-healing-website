"use client";

import React from "react";
import Image from "next/image";
import sessionImg from "../../public/images/reikiImg/hero2.webp"; // replace with your actual image

const BookSession = () => {
  return (
    <section className="bg-[#FAEFE8] py-8 px-2 sm:py-12 sm:px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden shadow-lg">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 h-56 sm:h-72 md:h-96 lg:h-auto relative min-h-[220px]">
          <Image
            src={sessionImg}
            alt="Reiki session"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-1/2 bg-[#5e3566] text-white p-4 sm:p-6 md:p-10 flex items-center">
          <div className="w-full">
            <div className="text-center mb-6 sm:mb-8">
              <div className="text-2xl sm:text-3xl mb-2">📿</div> {/* Optional icon */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Book your Session</h2>
              <p className="text-xs sm:text-sm mt-2">Your life is waiting. Fast, long-lasting relief is nearby.</p>
            </div>

            <form className="space-y-3 sm:space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 sm:px-4 py-2 rounded-full bg-transparent border border-white placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base"
              />
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="w-full px-3 sm:px-4 py-2 rounded-full bg-transparent border border-white placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-3 sm:px-4 py-2 rounded-full bg-transparent border border-white placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base"
                />
              </div>
              <select
                className="w-full px-3 sm:px-4 py-2 rounded-full bg-transparent border border-white text-white focus:outline-none text-sm sm:text-base"
              >
                <option className="text-black">Choose a Treatment</option>
                <option className="text-black">Reiki Healing</option>
                <option className="text-black">Sound Therapy</option>
                <option className="text-black">Life Coaching</option>
              </select>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="relative w-full">
                  <input
                    type="date"
                    className="w-full px-3 sm:px-4 py-2 rounded-full bg-transparent border border-white text-white focus:outline-none text-sm sm:text-base"
                  />
                </div>
                <select className="w-full px-3 sm:px-4 py-2 rounded-full bg-transparent border border-white text-white focus:outline-none text-sm sm:text-base">
                  <option className="text-black">08</option>
                  <option className="text-black">09</option>
                  <option className="text-black">10</option>
                </select>
                <select className="w-full px-3 sm:px-4 py-2 rounded-full bg-transparent border border-white text-white focus:outline-none text-sm sm:text-base">
                  <option className="text-black">30</option>
                  <option className="text-black">45</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-2 mt-3 sm:mt-4 rounded-full bg-white text-[#5e3566] font-semibold hover:bg-[#f0f0f0] transition text-sm sm:text-base"
              >
                BOOK ONLINE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSession;
