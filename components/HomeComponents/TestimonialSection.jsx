"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Profile1 from "@/public/images/profile2.png";
import Button from "@/components/CommonComponent/Button";

const testimonials = [
  {
    name: "Cynthia",
    session: "Reiki Healing Session",
    text: "My Reiki session was incredibly calming and transformative. The gentle energy work helped me release deep-seated tension I didn't even realize I was carrying. The practitioner's intuitive approach and the peaceful environment created a truly healing experience. I left feeling lighter, more balanced, and with a renewed sense of inner peace that has continued to grow in the days since my session. The combination of energy clearing and spiritual guidance provided me with tools I continue to use daily.",
    stars: 5,
    image: Profile1,
  },
  {
    name: "Mike",
    session: "Life Coaching Session",
    text: "My life coaching session was eye-opening and empowering. The coach helped me identify limiting beliefs that were holding me back from achieving my goals. Through thoughtful questioning and practical strategies, I gained clarity on my priorities and developed a concrete action plan. The session provided me with tools and insights that I continue to use daily to make positive changes in my life. The personalized approach and ongoing support have been invaluable to my personal growth journey.",
    stars: 5,
    image: Profile1,
  },
  {
    isVideo: true,
    videoSrc: "/videos/testimonial2.mp4",
  },
  {
    name: "Sophia",
    session: "Chakra Balancing Session",
    text: "The chakra balancing session was an incredible experience that went far beyond my expectations. The practitioner's deep understanding of energy work was evident from the moment we began. Through a combination of gentle touch, visualization techniques, and energy clearing, I felt each chakra being realigned and harmonized. The session helped me release emotional blockages I had been carrying for years, and I experienced a profound sense of inner peace and clarity that lasted for weeks afterward.",
    stars: 5,
    image: Profile1,
  },
  {
    name: "Mason",
    session: "Sound Healing Session",
    text: "The sound healing session was deeply relaxing and transformative. The combination of singing bowls, tuning forks, and other instruments created a symphony of healing vibrations that resonated throughout my entire being. I felt the sound waves penetrating deep into my cells, releasing tension and promoting healing on multiple levels. The experience was both meditative and therapeutic, leaving me with a profound sense of calm and well-being that I hadn't experienced in years.",
    stars: 5,
    image: Profile1,
  },
  {
    name: "Mary",
    session: "Meditation Retreat",
    text: "The meditation retreat was absolutely incredible. The peaceful settings and serene atmosphere created the perfect environment for deep inner reflection and spiritual growth. The guided sessions helped me find clarity and inner peace that I've been searching for. The retreat exceeded all my expectations and left me feeling renewed and centered. The combination of group meditation, individual practice time, and nature walks provided a comprehensive experience that deepened my understanding of mindfulness and its benefits.",
    stars: 5,
    image: Profile1,
  },
  {
    isVideo: true,
    videoSrc: "/videos/testimonial.mp4",
  },
  {
    name: "Harry",
    session: "Reiki Healing Workshop",
    text: "The Reiki healing workshop was an amazing experience that exceeded all my expectations. The instructor was incredibly knowledgeable and created a supportive learning environment. I learned not only the techniques of Reiki but also gained a deeper understanding of energy healing principles. The hands-on practice sessions were invaluable, and I felt confident in my abilities by the end of the workshop. The experience was both educational and transformative, and I've been able to use these skills to help myself and others.",
    stars: 5,
    image: Profile1,
  },
  
  {
    name: "Amanda",
    session: "Reiki Healing Course",
    text: "The Reiki healing course was truly transformative and life-changing. The comprehensive curriculum covered everything from basic energy principles to advanced healing techniques. The instructor's expertise and passion for teaching made complex concepts accessible and engaging. Through the course, I not only learned practical healing skills but also developed a deeper connection to my own spiritual nature. The certification process was thorough and meaningful, and I now feel confident in my ability to provide healing to others.",
    stars: 5,
    image: Profile1,
  }
  
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const TestimonialSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const ySpring = useSpring(translateY, { damping: 20, stiffness: 100 });

  return (
    <section className="py-16 px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold text-[#3b1f2b] mb-3"
        >
          Real People. Real Results
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[#4a4a4a] text-sm md:text-base mb-12 cursor-pointer"
        >
          More than 250 five-star reviews on Google
        </motion.p>

        {/* Grid with scroll tracking */}
        <div ref={containerRef} className="grid md:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((item, idx) => {
            const isMiddleColumn = idx % 3 === 1;

            if (item.isVideo) {
              return (
                <motion.div
                  key={`video-${idx}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden rounded-[20px] bg-black aspect-video h-full w-full"
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover rounded-[20px]"
                    src={item.videoSrc}
                  >
                    Your browser does not support the video tag.
                  </video>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="bg-[#f9f6f4] rounded-[20px] flex flex-col items-center px-6 py-8 text-center min-h-[400px] justify-between"
                style={isMiddleColumn ? { y: ySpring } : {}}
              >
                <div className="flex flex-col items-center">
                  <div className="text-[#783766] text-xl mb-4">
                    {Array.from({ length: item.stars }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>

                  <p className="text-[#333] text-sm leading-relaxed mb-6">{item.text}</p>
                </div>

                {item.image && (
                  <div className="flex flex-col items-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover mb-1 h-10 w-10"
                    />
                    <p className="text-sm text-[#333]">
                      {item.name} on {item.session}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Button
            text="View More Reviews"
            textColor="text-white"
            hoverBgColor="hover:bg-opacity-80"
            className="font-gotu"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
