import dynamic from "next/dynamic";

const SalaryGraph = dynamic(() => import("@/components/SalaryGraph").then(mod => mod.SalaryGraph));
const Pricing = dynamic(() => import("@/components/Pricing").then(mod => mod.Pricing));
const Footer = dynamic(() => import("@/components/Footer").then(mod => mod.Footer));

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background relative z-10 overflow-x-hidden pt-24 md:pt-32">
      <SalaryGraph />
      <Pricing />
      <Footer />
    </main>
  );
}
