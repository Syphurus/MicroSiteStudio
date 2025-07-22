"use client";

import SimpleHero from "@/components/sections/SimpleHero";
import CleanAbout from "@/components/sections/CleanAbout";
import CleanServices from "@/components/sections/CleanServices";
import CleanPortfolio from "@/components/sections/CleanPortfolio";
import CleanPricing from "@/components/sections/CleanPricing";
import CleanContact from "@/components/sections/CleanContact";
import CleanFooter from "@/components/sections/CleanFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <SimpleHero />
      <CleanAbout />
      <CleanServices />
      <CleanPortfolio />
      <CleanPricing />
      <CleanContact />
      <CleanFooter />
    </main>
  );
}
