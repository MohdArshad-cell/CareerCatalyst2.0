"use client";

import { motion } from "framer-motion";
import { DollarSign } from "lucide-react";

export function SalaryGraph() {
  return (
    <section className="py-16 md:py-24 relative bg-zinc-950 border-b border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            The Cost of <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Being Ghosted</span>
          </h2>
          <p className="text-lg text-zinc-400">
            Every month you spend applying with an unoptimized resume is lost salary. Here is the typical 5-year financial trajectory.
          </p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto bg-black border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse" />
              <div>
                <div className="text-white font-bold">Optimized Professional</div>
                <div className="text-zinc-500 text-sm font-mono mt-1">Hired quickly, scales to $250k</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 rounded-full bg-red-500/50" />
              <div>
                <div className="text-white font-bold">Standard Resume</div>
                <div className="text-zinc-500 text-sm font-mono mt-1">Struggles to pass ATS screens</div>
              </div>
            </div>
          </div>

          <div className="relative h-[300px] w-full mt-8">
            {/* Y Axis Labels */}
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs font-mono text-zinc-500 h-full pb-8">
              <span>$250k+</span>
              <span>$150k</span>
              <span>$50k</span>
              <span>$0</span>
            </div>

            {/* X Axis Labels */}
            <div className="absolute left-16 right-0 bottom-0 flex justify-between text-xs font-mono text-zinc-500">
              <span>Year 1</span>
              <span>Year 2</span>
              <span>Year 3</span>
              <span>Year 4</span>
              <span>Year 5</span>
            </div>

            {/* Grid Lines */}
            <div className="absolute left-16 right-0 top-2 bottom-8 flex flex-col justify-between pointer-events-none">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-full h-px bg-white/5" />
              ))}
            </div>

            {/* SVG Graph */}
            <div className="absolute left-16 right-0 top-2 bottom-8">
              <svg viewBox="0 0 800 268" className="w-full h-full overflow-visible preserve-3d">
                
                {/* Red Line (Ghosted) */}
                <motion.path
                  d="M 0 268 C 300 268, 500 200, 800 193"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="8 8"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                />

                {/* Emerald Line (Optimized) */}
                <motion.path
                  d="M 0 268 C 100 107, 300 107, 800 0"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="5"
                  strokeLinecap="round"
                  style={{ filter: "drop-shadow(0 0 12px rgba(16,185,129,0.6))" }}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                />
                
                {/* Endpoint Dot */}
                <motion.circle
                  cx="800"
                  cy="0"
                  r="6"
                  fill="#10b981"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 2.5, type: "spring" }}
                />
              </svg>

              {/* Point of divergence annotation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.0 }}
                className="absolute left-[5%] md:left-[30%] top-[40%] flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-accent-400 animate-ping shadow-[0_0_10px_rgba(45,212,191,1)] hidden md:block" />
                <div className="bg-black/90 backdrop-blur-md border border-accent-500/50 text-white font-medium text-[10px] md:text-xs px-2 md:px-3 py-1 md:py-1.5 rounded-lg shadow-2xl relative md:-left-3 md:-top-6 whitespace-normal md:whitespace-nowrap max-w-[120px] md:max-w-none text-center md:text-left">
                  Optimization gap widens here
                  <div className="hidden md:block absolute w-2 h-2 bg-black border-r border-b border-accent-500/50 rotate-45 -bottom-[5px] left-4" />
                </div>
              </motion.div>
            </div>
            
            {/* Callout box at the end */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 2.7 }}
              className="absolute right-0 -top-8 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3 md:px-4 py-1 md:py-2 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            >
              <DollarSign className="w-3 h-3 md:w-4 md:h-4" />
              Top Tier TC Reached
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
