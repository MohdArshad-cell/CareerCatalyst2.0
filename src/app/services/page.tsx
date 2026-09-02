"use client";

import dynamic from "next/dynamic";
import { Problem } from "@/components/Problem";
import { Services } from "@/components/Services";

const Process = dynamic(() => import("@/components/Process").then(mod => mod.Process));
const Footer = dynamic(() => import("@/components/Footer").then(mod => mod.Footer));

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background relative z-10 overflow-x-hidden pt-24 md:pt-32">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-primary-900/10 blur-[150px] rounded-full pointer-events-none z-0" />
      
      <div className="relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12 px-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-emerald-400">Services</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light">
            We build the exact assets you need to bypass the ATS and dominate the tech job market.
          </p>
        </div>
        
        {/* We reuse the beautiful 3-pillar cards, which now link to detail pages */}
        <div className="-mt-16">
          <Services hideHeading={true} />
        </div>
      </div>

      <Process />
      <Footer />
    </main>
  );
}
