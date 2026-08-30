import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Problem } from "@/components/Problem";
import { Services } from "@/components/Services";
import { Proof } from "@/components/Proof";

import dynamic from "next/dynamic";

const ATSScanner = dynamic(() => import("@/components/ATSScanner").then(mod => mod.ATSScanner));
const ResumeSlider = dynamic(() => import("@/components/ResumeSlider").then(mod => mod.ResumeSlider));
const Testimonials = dynamic(() => import("@/components/Testimonials").then(mod => mod.Testimonials));
const SalaryGraph = dynamic(() => import("@/components/SalaryGraph").then(mod => mod.SalaryGraph));
const Pricing = dynamic(() => import("@/components/Pricing").then(mod => mod.Pricing));
const Process = dynamic(() => import("@/components/Process").then(mod => mod.Process));
const FAQ = dynamic(() => import("@/components/FAQ").then(mod => mod.FAQ));
const Footer = dynamic(() => import("@/components/Footer").then(mod => mod.Footer));

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative z-10 overflow-x-hidden">
      <Hero />
      <Marquee />
      <Problem />
      <Services />
      <Proof />
      <ATSScanner />
      <ResumeSlider />
      <Testimonials />
      <SalaryGraph />
      <Pricing />
      <Process />
      <FAQ />
      <Footer />
    </main>
  );
}
