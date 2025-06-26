
"use client"

import HealingCoursesSection from "@/components/HomeComponents/HealingCoursesSection";
import HealingJourneySection from "@/components/HomeComponents/HealingJourneySection";
import HeroSection from "@/components/HomeComponents/HeroSection";
import TestimonialSection from "@/components/HomeComponents/TestimonialSection";
import TherapiesSection from "@/components/HomeComponents/TherapiesSection";

const page = () => {
  return (
   <>
   <HeroSection/>
   <TherapiesSection/>
   <TestimonialSection/>
   <HealingCoursesSection />
   <HealingJourneySection/>
   </>
  );
};

export default page;
