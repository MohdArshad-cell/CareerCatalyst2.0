import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { Proof } from "@/components/Proof";

import dynamic from "next/dynamic";

const ATSScanner = dynamic(() => import("@/components/ATSScanner").then(mod => mod.ATSScanner));
const MiniATSLeadMagnet = dynamic(() => import("@/components/MiniATSLeadMagnet").then(mod => mod.MiniATSLeadMagnet));
const ResumeSlider = dynamic(() => import("@/components/ResumeSlider").then(mod => mod.ResumeSlider));
const Testimonials = dynamic(() => import("@/components/Testimonials").then(mod => mod.Testimonials));
const Footer = dynamic(() => import("@/components/Footer").then(mod => mod.Footer));

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative z-10 overflow-x-hidden">
      <Hero />
      <Marquee />
      <Services />
      <Proof />
      <ATSScanner />
      <MiniATSLeadMagnet />
      <ResumeSlider />
      <Testimonials />
      <Footer />
    </main>
  );
}
