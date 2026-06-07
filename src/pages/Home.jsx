import { useEffect } from "react";
import { useLocation } from "react-router";

import { Hero } from "../components/Hero";
import { ImpactStats } from "../components/ImpactStats";
import { DonationSection } from "../components/DonationSection";
import { Causes } from "../components/Causes";
import { StorySection } from "../components/StorySection";
import { Transparency } from "../components/Transparency";
import { CallToAction } from "../components/CallToAction";
import DonationImpactStoriesSliderSection from "../components/DonationImpactStoriesSliderSection";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");

      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 200);
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <ImpactStats />
      <DonationSection />
      <Causes />
      <StorySection />
      <DonationImpactStoriesSliderSection />
      <Transparency />
      <CallToAction />
    </main>
  );
}