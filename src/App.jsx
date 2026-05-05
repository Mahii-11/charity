import { Causes } from "./components/Causes";
import { DonationSection } from "./components/DonationSection";
import { Hero } from "./components/Hero";
import { ImpactStats } from "./components/ImpactStats";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen font-body text-slate-800 bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero/>
        <ImpactStats />
        <DonationSection />
        <Causes />
       
      </main>

    </div>
  )
}
