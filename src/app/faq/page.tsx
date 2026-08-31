import dynamic from "next/dynamic";

const FAQ = dynamic(() => import("@/components/FAQ").then(mod => mod.FAQ));
const Footer = dynamic(() => import("@/components/Footer").then(mod => mod.Footer));

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background relative z-10 overflow-x-hidden pt-24 md:pt-32">
      <FAQ />
      <Footer />
    </main>
  );
}
