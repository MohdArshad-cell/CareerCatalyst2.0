import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Proof } from "@/components/Proof";

import dynamic from "next/dynamic";

const MiniATSLeadMagnet = dynamic(() => import("@/components/MiniATSLeadMagnet").then(mod => mod.MiniATSLeadMagnet));
const Testimonials = dynamic(() => import("@/components/Testimonials").then(mod => mod.Testimonials));
const Footer = dynamic(() => import("@/components/Footer").then(mod => mod.Footer));

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative z-10 overflow-x-hidden">
      <Hero />
      <Marquee />
      <Proof />
      <MiniATSLeadMagnet />
      <Testimonials />
      <Footer />
    </main>
  );
}
