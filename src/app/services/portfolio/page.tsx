"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const ResumeSlider = dynamic(() => import("@/components/ResumeSlider").then(mod => mod.ResumeSlider));
const Footer = dynamic(() => import("@/components/Footer").then(mod => mod.Footer));

export default function PortfolioServicePage() {
  return (
    <main className="min-h-screen bg-background relative z-10 overflow-x-hidden pt-24 md:pt-32">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-emerald-900/10 blur-[150px] rounded-full pointer-events-none z-0" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 mb-24">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
            <span className="text-sm font-medium text-zinc-300 tracking-wide uppercase">Core Deliverable</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Modern Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Portfolio</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed">
            A blazingly fast Next.js and Tailwind CSS portfolio. Complete with 3D elements, interactive project demos, and a custom domain architecture breakdown.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-8">
            <div className="bg-black/50 border border-white/10 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-4">Why Wix/Squarespace is a red flag</h3>
              <p className="text-zinc-400 leading-relaxed">
                If you are applying for a software engineering role, your portfolio *is* a technical interview. Using a drag-and-drop builder tells hiring managers you can't code a real web application.
              </p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-4">Our Architecture</h3>
              <p className="text-zinc-400 leading-relaxed">
                We build you a bespoke web application using the modern React stack. It proves you understand component-driven architecture, deployment pipelines, and responsive design.
              </p>
              <ul className="space-y-3 mt-6">
                {["Next.js App Router", "Tailwind CSS & Framer Motion", "100/100 Lighthouse Performance", "Vercel CI/CD Deployment"].map((item, i) => (
                  <li key={i} className="flex gap-3 items-center text-sm text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full h-full relative min-h-[400px]">
             <ResumeSlider />
          </div>
        </div>

        <div className="mt-24 text-center">
          <a 
            href="/pricing"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg rounded-full transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] group"
          >
            Deploy Your Portfolio
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
