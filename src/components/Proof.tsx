"use client";

import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import { ArrowRight, TrendingUp, Monitor, Zap } from "lucide-react";
import { useEffect, useRef } from "react";

function Counter({ from, to, suffix }: { from: number, to: number, suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  
  const display = useTransform(springValue, (current) => Math.round(current) + suffix);

  useEffect(() => {
    if (isInView) {
      motionValue.set(to);
    }
  }, [isInView, motionValue, to]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export function Proof() {
  return (
    <section id="proof" className="py-32 bg-black border-y border-white/5 relative overflow-hidden">
      {/* Advanced Futuristic Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono uppercase tracking-widest mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]"
          >
            <Zap className="w-4 h-4 text-accent-400" />
            Performance Metrics
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8"
          >
            The Difference is in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-emerald-400 drop-shadow-[0_0_40px_rgba(45,212,191,0.4)]">Data.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Real transformations that turn zero callbacks into multiple interview loops.
          </motion.p>
        </div>

        <div className="space-y-20 lg:space-y-40">
          
          {/* Snapshot 1: Resume Bullet Point */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">1. The Resume Metric Rewrite</h3>
              <p className="text-xl text-zinc-400 mb-8 font-light leading-relaxed">We convert passive duties into high-impact engineering achievements using the XYZ framework.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative perspective-[1000px]"
            >
              <div className="bg-white/5 border border-red-500/30 rounded-t-3xl p-8 relative overflow-hidden backdrop-blur-md">
                <div className="absolute top-0 right-0 px-4 py-1.5 bg-red-500/20 text-red-400 text-xs font-bold rounded-bl-2xl border-b border-l border-red-500/30">BEFORE</div>
                <p className="text-zinc-500 font-mono text-sm leading-relaxed mt-2">
                  "Worked on backend APIs using Java and Spring Boot for an e-commerce site."
                </p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-zinc-950 rounded-full border border-white/10 flex items-center justify-center z-10 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                <ArrowRight className="w-5 h-5 text-white rotate-90 lg:rotate-0" />
              </div>
              <div className="bg-primary-900/20 border border-primary-500/40 rounded-b-3xl p-8 relative overflow-hidden backdrop-blur-md shadow-[0_20px_60px_rgba(99,102,241,0.2)]">
                <div className="absolute top-0 right-0 px-4 py-1.5 bg-primary-500/20 text-primary-400 text-xs font-bold rounded-bl-2xl border-b border-l border-primary-500/40">AFTER (XYZ Framework)</div>
                <p className="text-white font-mono text-sm leading-relaxed mt-2">
                  "Architected <span className="text-primary-400 font-bold bg-primary-500/20 px-1 rounded">12+ RESTful microservices</span> using Spring Boot & Redis, reducing peak checkout latency by <span className="text-accent-400 font-bold bg-accent-500/20 px-1 rounded">35%</span> across <span className="text-primary-400 font-bold bg-primary-500/20 px-1 rounded">50k+ daily transactions</span>."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Snapshot 2: LinkedIn Visibility */}
          <div className="grid lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:order-2"
            >
              <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">2. LinkedIn Recruiter Visibility</h3>
              <p className="text-xl text-zinc-400 mb-8 font-light leading-relaxed">By injecting high-value keywords and restructuring your summary, we trigger the LinkedIn Recruiter algorithm to find you.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-zinc-950/50 backdrop-blur-xl border border-white/10 rounded-3xl p-10 lg:order-1 shadow-2xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-500/10 rounded-2xl flex items-center justify-center border border-accent-500/20">
                    <TrendingUp className="w-6 h-6 text-accent-400" />
                  </div>
                  <span className="text-white font-bold text-xl tracking-tight">Search Appearances</span>
                </div>
                <div className="text-accent-400 text-sm font-bold bg-accent-500/10 border border-accent-500/20 px-4 py-2 rounded-full self-start sm:self-auto">
                  +<Counter from={0} to={420} suffix="% this week" />
                </div>
              </div>
              <div className="h-48 flex items-end gap-3 justify-between">
                {[20, 35, 25, 45, 80, 120, 280].map((height, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ height: "0%" }}
                    whileInView={{ height: `${(height/280)*100}%` }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.8, type: "spring" }}
                    viewport={{ once: true }}
                    className="w-full bg-gradient-to-t from-primary-600/10 to-primary-500/30 rounded-t-lg relative group hover:from-primary-600/30 hover:to-primary-400/50 transition-colors border-t border-l border-r border-primary-500/20"
                  >
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs font-bold text-white bg-zinc-800 px-3 py-1.5 rounded transition-opacity border border-white/10 shadow-xl">
                      {height}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 flex justify-between text-sm text-zinc-500 font-mono">
                <span>Week 1</span>
                <span>Week 7 (Post-Optimization)</span>
              </div>
            </motion.div>
          </div>

          {/* Snapshot 3: Portfolio UI */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">3. The Conversion-Optimized Portfolio</h3>
              <p className="text-xl text-zinc-400 mb-8 font-light leading-relaxed">A fast-loading, responsive Next.js portfolio that proves your engineering capability instantly to hiring managers.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.8)]"
            >
              <div className="h-10 bg-zinc-900/50 flex items-center px-6 gap-2 border-b border-white/5 backdrop-blur-md">
                <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_5px_rgba(234,179,8,0.5)]" />
                <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
                <div className="mx-auto bg-black/50 px-8 py-1.5 rounded text-xs text-zinc-500 flex items-center gap-2 border border-white/5 font-mono">
                  <Monitor className="w-3 h-3 text-primary-400" /> portfolio.dev
                </div>
              </div>
              <div className="p-10 bg-black relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 blur-[80px] rounded-full pointer-events-none" />
                
                <div className="flex justify-between items-center mb-16 relative z-10">
                  <div className="text-white font-bold tracking-tight text-xl">JD.</div>
                  <div className="flex gap-6 text-sm text-zinc-400 font-medium">
                    <span className="hover:text-white transition-colors cursor-pointer">Projects</span>
                    <span className="hover:text-white transition-colors cursor-pointer">Experience</span>
                    <span className="hover:text-white transition-colors cursor-pointer">Contact</span>
                  </div>
                </div>
                <div className="max-w-md relative z-10 pb-8">
                  <div className="text-5xl font-bold text-white mb-6 leading-[1.1] tracking-tight">Full-Stack Engineer.</div>
                  <div className="h-2 w-16 bg-gradient-to-r from-accent-400 to-primary-500 mb-8 rounded-full shadow-[0_0_15px_rgba(45,212,191,0.5)]" />
                  
                  <div className="mt-8 bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-md hover:bg-white/10 transition-colors cursor-pointer group">
                    <div className="flex justify-between items-start mb-3">
                      <div className="font-bold text-white text-base group-hover:text-primary-400 transition-colors">Fintech Analytics Dashboard</div>
                      <div className="flex gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]"></span>
                      </div>
                    </div>
                    <p className="text-sm text-zinc-400 mb-4 line-clamp-2 leading-relaxed">Built a high-performance analytics dashboard processing 1M+ daily transactions using React, Tailwind, and WebSockets.</p>
                    <div className="flex gap-2">
                      <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-primary-500/20 text-primary-400 rounded border border-primary-500/30">React</span>
                      <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-white/10 text-zinc-300 rounded border border-white/10">TypeScript</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
