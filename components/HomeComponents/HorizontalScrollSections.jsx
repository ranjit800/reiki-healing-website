"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HealingJourneySection from "./HealingJourneySection";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollSections = () => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".panel");
    const totalScrollWidth = wrapperRef.current.scrollWidth;

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + totalScrollWidth,
      },
    });

    return () => ScrollTrigger.kill();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      <div
        ref={wrapperRef}
        className="flex w-max h-screen"
      >
        <div className="panel w-screen h-screen flex-shrink-0">
          <HealingJourneySection />
        </div>
        <div className="panel w-screen h-screen flex-shrink-0">
          <HealingJourneySection />
        </div>
        <div className="panel w-screen h-screen flex-shrink-0">
          <HealingJourneySection />
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollSections;
