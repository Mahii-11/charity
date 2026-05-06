
import { Hero } from "../components/Hero";
import { ImpactStats } from "../components/ImpactStats";
import { DonationSection } from "../components/DonationSection";
import { Causes } from "../components/Causes";
import { StorySection } from "../components/StorySection";
import { Transparency } from "../components/Transparency";
import { CallToAction } from "../components/CallToAction";



export default function Home() {
  return (
     <main>
      <Hero />
      <ImpactStats />
      <DonationSection />
      <Causes />
      <StorySection />
      <Transparency />
      <CallToAction />
    </main>
  )
}
