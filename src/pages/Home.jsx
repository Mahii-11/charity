
import { Hero } from "../components/Hero";
import { ImpactStats } from "../components/ImpactStats";
import { DonationSection } from "../components/DonationSection";
import { Causes } from "../components/Causes";



export default function Home() {
  return (
     <main>
      <Hero />
      <ImpactStats />
      <DonationSection />
      <Causes />
    </main>
  )
}
