"use client";

import React, { useRef, MouseEvent } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { CheckCircle2, ArrowRight, FileText, Search, LayoutTemplate, Star, Zap, Code2, LineChart, Target } from "lucide-react";
import dynamic from "next/dynamic";

import { Problem } from "@/components/Problem";
import { Services } from "@/components/Services";

const ATSScanner = dynamic(() => import("@/components/ATSScanner").then(mod => mod.ATSScanner));
const ResumeSlider = dynamic(() => import("@/components/ResumeSlider").then(mod => mod.ResumeSlider));
const Process = dynamic(() => import("@/components/Process").then(mod => mod.Process));
const SalaryGraph = dynamic(() => import("@/components/SalaryGraph").then(mod => mod.SalaryGraph));
const Pricing = dynamic(() => import("@/components/Pricing").then(mod => mod.Pricing));
const FAQ = dynamic(() => import("@/components/FAQ").then(mod => mod.FAQ));
const Footer = dynamic(() => import("@/components/Footer").then(mod => mod.Footer));

export default function ServicesPage() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 300]);

  // 3D Tilt Logic for Portfolio
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 40 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current || shouldReduceMotion) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    
    mouseX.set(clientX);
    mouseY.set(clientY);
    x.set(clientX / width - 0.5);
    y.set(clientY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <main className="min-h-screen bg-background relative z-10 overflow-x-hidden">
      <Problem />
      <Services />
      <div className="pt-24 md:pt-32 relative">
        {/* Dynamic Background Parallax Orbs */}
      <motion.div style={{ y: yParallax }} className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[800px] opacity-20 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 via-accent-500/30 to-emerald-500/30 blur-[120px] rounded-full mix-blend-screen animate-[pulse_4s_ease-in-out_infinite]" />
      </motion.div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 pb-32">
        <div className="text-center mb-32 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
          >
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
            <span className="text-sm font-medium text-zinc-300 tracking-wide uppercase">Deep Dive</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight text-white drop-shadow-2xl"
          >
            Precision-Engineered <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-emerald-400 drop-shadow-[0_0_30px_rgba(45,212,191,0.2)]">Deliverables</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-3xl mx-auto font-light"
          >
            Go behind the scenes. See exactly how we engineer your career assets to dominate the ATS and bypass the competition.
          </motion.p>
        </div>

        {/* Global Connecting Line */}
        <div className="absolute left-[24px] md:left-[50px] top-[400px] bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary-500/20 to-transparent hidden md:block" />

        <div className="space-y-32 md:space-y-40">
          {/* Service 1: Resume Scanning */}
          <section className="flex flex-col md:flex-row gap-12 items-center relative">
            {/* Connector Node */}
            <div className="absolute left-[-29px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] hidden md:block z-20" />
            
            <div className="flex-1 space-y-6 md:pl-16">
              <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.15)] relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-400/20 animate-[shimmer_2s_infinite]" />
                <FileText className="w-8 h-8 text-blue-400 relative z-10" />
              </div>
              <h2 className="text-4xl font-bold text-white tracking-tight">ATS Resume Overhaul</h2>
              <p className="text-lg text-zinc-400 leading-relaxed font-light">
                We rebuild your resume in single-column LaTeX, stripping away unparseable designs and injecting a data-driven XYZ bullet point framework that parsers love.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Single-column ATS-native LaTeX formatting", 
                  "XYZ Framework impact translation", 
                  "Hard tech stack keyword injection", 
                  "Quantifiable metric extraction"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-start group"
                  >
                    <CheckCircle2 className="w-6 h-6 shrink-0 text-blue-500/50 group-hover:text-blue-400 transition-colors duration-300 shadow-[0_0_10px_rgba(59,130,246,0)] group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] rounded-full" />
                    <span className="text-zinc-300 group-hover:text-white transition-colors">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="flex-1 w-full relative">
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: shouldReduceMotion ? 0 : [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 z-20 bg-blue-500/10 border border-blue-500/30 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
              >
                <Zap className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-bold text-blue-100 uppercase tracking-wider">99% ATS Match</span>
              </motion.div>

              <div className="absolute inset-0 bg-blue-600/20 blur-[80px] rounded-full pointer-events-none" />
              <div className="relative bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 font-mono text-sm overflow-hidden shadow-2xl">
                
                {/* Laser Scan Line Animation */}
                <motion.div 
                  className="absolute left-0 right-0 h-[2px] bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,1)] z-30"
                  animate={shouldReduceMotion ? { top: "50%", opacity: 0.2 } : { top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                <div className="space-y-6">
                  <div className="relative">
                    <div className="text-red-400/50 line-through mb-2 flex items-start gap-3">
                      <span className="text-red-500/30 font-bold">-</span>
                      <span>Built a dashboard for users using React and Node.</span>
                    </div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-emerald-400 flex items-start gap-3 bg-emerald-500/5 border border-emerald-500/20 p-4 rounded-xl relative overflow-hidden"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500" />
                      <span className="text-emerald-500 font-bold">+</span>
                      <span>
                        Engineered a high-throughput <span className="bg-emerald-500/20 text-white px-1 rounded">React/Node.js</span> telemetry dashboard, reducing data latency by <span className="bg-emerald-500/20 text-white px-1 rounded">45%</span> and serving <span className="bg-emerald-500/20 text-white px-1 rounded">10k+</span> concurrent enterprise users.
                      </span>
                    </motion.div>
                  </div>
                  
                  <div className="relative">
                    <div className="text-red-400/50 line-through mb-2 flex items-start gap-3">
                      <span className="text-red-500/30 font-bold">-</span>
                      <span>Fixed bugs in the database to make it faster.</span>
                    </div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="text-emerald-400 flex items-start gap-3 bg-emerald-500/5 border border-emerald-500/20 p-4 rounded-xl relative overflow-hidden"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500" />
                      <span className="text-emerald-500 font-bold">+</span>
                      <span>
                        Optimized <span className="bg-emerald-500/20 text-white px-1 rounded">PostgreSQL</span> indexing and query execution plans, resulting in a <span className="bg-emerald-500/20 text-white px-1 rounded">3x</span> improvement in API response times for reporting endpoints.
                      </span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Proof for ATS Resume */}
          <div className="w-full relative z-20">
            <ATSScanner />
          </div>

          {/* Service 2: LinkedIn SEO */}
          <section className="flex flex-col md:flex-row-reverse gap-12 items-center relative">
            <div className="absolute right-[-29px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.8)] hidden md:block z-20" />
            
            <div className="flex-1 space-y-6 md:pr-16">
              <div className="w-16 h-16 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.15)] relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-400/20 animate-[shimmer_2.5s_infinite]" />
                <Search className="w-8 h-8 text-indigo-400 relative z-10" />
              </div>
              <h2 className="text-4xl font-bold text-white tracking-tight">LinkedIn Profile SEO</h2>
              <p className="text-lg text-zinc-400 leading-relaxed font-light">
                We re-index your LinkedIn profile for recruiter search queries, optimizing your headline, summary, and experience sections to trigger algorithmic matches.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Algorithm-optimized headline formula", 
                  "Leadership & impact-driven summary", 
                  "Strategic featured section curation", 
                  "Skill endorsement mapping"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-start group"
                  >
                    <CheckCircle2 className="w-6 h-6 shrink-0 text-indigo-500/50 group-hover:text-indigo-400 transition-colors duration-300 shadow-[0_0_10px_rgba(99,102,241,0)] group-hover:shadow-[0_0_10px_rgba(99,102,241,0.5)] rounded-full" />
                    <span className="text-zinc-300 group-hover:text-white transition-colors">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="flex-1 w-full relative">
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: shouldReduceMotion ? 0 : [0, 10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -left-8 z-20 bg-indigo-500/10 border border-indigo-500/30 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(99,102,241,0.2)]"
              >
                <Target className="w-4 h-4 text-indigo-400" />
                <span className="text-sm font-bold text-indigo-100 uppercase tracking-wider">Top 1% Search Rank</span>
              </motion.div>

              <div className="absolute inset-0 bg-indigo-600/20 blur-[80px] rounded-full pointer-events-none" />
              <div className="relative bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                
                {/* Header Section */}
                <div className="flex items-center gap-6 mb-8 pb-8 border-b border-white/10">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-primary-600 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                  >
                    <Star className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="h-6 w-48 bg-zinc-800 rounded-md mb-3" 
                    />
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="h-4 w-full max-w-[280px] bg-indigo-500/20 border border-indigo-500/30 rounded-md" 
                    />
                  </div>
                </div>

                {/* Keyword Pills Animation */}
                <div className="space-y-4">
                  <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Indexed Keywords</div>
                  <div className="flex flex-wrap gap-2 font-mono text-xs">
                    {["React", "System Architecture", "AWS", "Node.js", "GraphQL", "TypeScript", "Microservices"].map((skill, i) => (
                      <motion.span 
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + (i * 0.1) }}
                        className="px-3 py-1.5 bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 rounded-lg shadow-[0_0_10px_rgba(99,102,241,0.1)]"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Service 3: Dev Portfolio */}
          <section className="flex flex-col md:flex-row gap-12 items-center relative">
            <div className="absolute left-[-29px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)] hidden md:block z-20" />
            
            <div className="flex-1 space-y-6 md:pl-16 relative z-30">
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.15)] relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-400/20 animate-[shimmer_3s_infinite]" />
                <LayoutTemplate className="w-8 h-8 text-emerald-400 relative z-10" />
              </div>
              <h2 className="text-4xl font-bold text-white tracking-tight">Modern Dev Portfolio</h2>
              <p className="text-lg text-zinc-400 leading-relaxed font-light">
                A blazingly fast Next.js and Tailwind CSS portfolio. Complete with 3D elements, interactive project demos, and a custom domain architecture breakdown.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Next.js App Router codebase", 
                  "Tailwind CSS + Framer Motion animations", 
                  "100/100 Lighthouse performance", 
                  "Vercel deployment & custom domain routing"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-start group"
                  >
                    <CheckCircle2 className="w-6 h-6 shrink-0 text-emerald-500/50 group-hover:text-emerald-400 transition-colors duration-300 shadow-[0_0_10px_rgba(16,185,129,0)] group-hover:shadow-[0_0_10px_rgba(16,185,129,0.5)] rounded-full" />
                    <span className="text-zinc-300 group-hover:text-white transition-colors">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="flex-1 w-full relative perspective-[2000px] z-20">
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: shouldReduceMotion ? 0 : [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 right-4 z-30 bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.2)] pointer-events-none"
              >
                <LineChart className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-bold text-emerald-100 uppercase tracking-wider">100/100 Lighthouse</span>
              </motion.div>

              <div className="absolute inset-0 bg-emerald-600/20 blur-[80px] rounded-full pointer-events-none" />
              
              {/* 3D Tilt Card */}
              <motion.div 
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ 
                  rotateX, 
                  rotateY, 
                  transformStyle: "preserve-3d" 
                }}
                className="relative bg-zinc-950/90 backdrop-blur-2xl border border-emerald-500/30 rounded-3xl p-3 shadow-2xl cursor-crosshair"
              >
                {/* 3D Floating Element overlay */}
                <div style={{ transform: "translateZ(40px)" }} className="absolute -top-4 -left-4 bg-emerald-500 p-3 rounded-2xl shadow-[0_10px_30px_rgba(16,185,129,0.5)] z-20">
                  <Code2 className="w-6 h-6 text-black" />
                </div>

                <div className="h-64 bg-zinc-900 rounded-2xl overflow-hidden relative" style={{ transform: "translateZ(20px)" }}>
                  {/* Fake Mac Toolbar */}
                  <div className="absolute top-0 w-full h-10 bg-zinc-950/80 backdrop-blur-md flex items-center px-4 gap-2 border-b border-white/5 z-10">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                    <div className="ml-4 w-48 h-5 bg-zinc-800 rounded-md border border-white/5 mx-auto flex items-center justify-center">
                      <span className="text-[10px] text-zinc-500 font-mono">portfolio.dev</span>
                    </div>
                  </div>
                  
                  {/* Fake Hero Image inside mockup */}
                  <div className="mt-10 px-8 py-8 relative h-full">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="w-1/2 h-8 bg-gradient-to-r from-emerald-400 to-primary-400 rounded-lg mb-4" 
                    />
                    <motion.div 
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="w-3/4 h-4 bg-zinc-800/80 rounded mb-2" 
                    />
                    <motion.div 
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="w-2/3 h-4 bg-zinc-800/80 rounded" 
                    />
                    
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="mt-8 flex gap-4"
                    >
                      <div className="w-24 h-8 bg-emerald-500/20 border border-emerald-500/50 rounded-full" />
                      <div className="w-24 h-8 bg-white/5 border border-white/10 rounded-full" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Interactive Proof for Dev Portfolio */}
          <div className="w-full relative z-20">
            <ResumeSlider />
          </div>
        </div>

      </div>
      </div>
      
      <Process />
      <SalaryGraph />
      <Pricing />
      <FAQ />

      <Footer />
    </main>
  );
}
