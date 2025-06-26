import React from "react";
import Image from "next/image";
import Profile1 from "@/public/images/profile.avif";

const testimonials = [
  {
    name: "Cynthia",
    session: "Reiki Healing Session",
    text: "My Reiki session was incredibly calming and transformative. I felt emotional blocks release and energy shift, leaving me lighter, balanced, and more connected to myself. It brought clarity and peace that stayed with me long after. Highly recommend!",
    stars: 5,
    image: Profile1,
  },
  {
    name: "Mike",
    session: "Life Coaching Session",
    text: "My life coaching session was eye-opening and empowering. I gained clarity on my goals and identified blocks that were holding me back. The guidance was compassionate yet transformative. Truly a life-changing experience!",
    stars: 5,
    image: Profile1,
  },
  {
    name: "Sophia",
    session: "Chakra Balancing Session",
    text: "The chakra balancing session was an incredible experience. I could feel the energy shifts as blockages were released, leaving me feeling lighter and more aligned. Truly transformative and renewing.",
    stars: 5,
    image: Profile1,
  },
  {
    name: "Mason",
    session: "Sound Healing Session",
    text: "The sound healing session was deeply relaxing and transformative. Vibrations washed over me, releasing tension and bringing peace. A truly magical experience! 💖",
    stars: 5,
  },
  {
    name: "Mary",
    session: "Meditation Retreat",
    text: "The meditation retreat was incredible. Peaceful settings and guided practices brought deep clarity. I felt renewed, centered, and inspired. Highly recommend it!",
    stars: 5,
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-white py-16 px-4 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Real People. Real Results</h2>
        <p className="text-[#4a4a4a] underline mb-12 cursor-pointer">More than 250 five-star reviews on Google</p>

        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-gray-50 hover:shadow-lg transition-shadow p-6 rounded-xl text-left border">
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
            </div>
          ))}

          {/* Video Testimonial Card */}
          <div className="relative overflow-hidden rounded-xl bg-black aspect-video">
            {/* 👉 Use YouTube embed OR replace with <video> tag below */}
            {/* <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/JEoxUG898qY?si=cgWEIlK8Y0o3iyov"
              title="Testimonial Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe> */}

            {/* Optional: For self-hosted video */}
            <video  autoPlay muted loop playsInline className="w-full h-full object-cover rounded-xl" src="/videos/testimonial.mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
