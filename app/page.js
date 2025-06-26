
"use client"

import BookSession from "@/components/HomeComponents/BookSession";
import HealingCoursesSection from "@/components/HomeComponents/HealingCoursesSection";
 import HealingJourneySection from "@/components/HomeComponents/HealingJourneySection";
import HeroSection from "@/components/HomeComponents/HeroSection";
// import HorizontalScrollSections from "@/components/HomeComponents/HorizontalScrollSections";
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
   {/* <HorizontalScrollSections/> */}
   <BookSession/>
   </>
  );
};

export default page;
