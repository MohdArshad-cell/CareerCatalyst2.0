"use client";

import { motion } from "framer-motion";
import { AlertCircle, FileX, SearchX, Code } from "lucide-react";

const painPoints = [
  {
    icon: AlertCircle,
    title: "The Ghosting Epidemic",
    description: (
      <>
        Applied to <span className="text-white font-semibold bg-white/10 px-1.5 py-0.5 rounded">300+ jobs</span> and heard nothing back?
      </>
    ),
  },
  {
    icon: FileX,
    title: "ATS Black Hole",
    description: (
      <>
        Resume getting <span className="text-red-400 font-semibold bg-red-400/10 px-1.5 py-0.5 rounded border border-red-400/20">filtered out by Workday/Taleo</span> ATS parsers?
      </>
    ),
  },
  {
    icon: SearchX,
    title: "Invisible Profile",
    description: (
      <>
        LinkedIn profile getting <span className="text-red-400 font-semibold bg-red-400/10 px-1.5 py-0.5 rounded border border-red-400/20">0 recruiter search</span> impressions?
      </>
    ),
  },
  {
    icon: Code,
    title: "Generic Portfolio",
    description: (
      <>
        Generic GitHub projects that don't demonstrate <span className="text-white font-semibold bg-white/10 px-1.5 py-0.5 rounded">real system design</span> or business impact?
      </>
    ),
  },
];

export function Problem() {
  return (
    <section className="py-32 bg-black border-y border-white/5 relative overflow-hidden flex flex-col items-center">
      {/* Red Glowing Orb Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono uppercase tracking-widest mb-8 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            The Reality
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 leading-[1.1]"
          >
            You're Not Getting Ghosted Because <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 drop-shadow-[0_0_30px_rgba(248,113,113,0.3)]">You're Not Good Enough.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed font-light mb-12"
          >
            If you are an ambitious professional, the generic advice doesn't work for you anymore. Your application is failing at the algorithm layer.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-2xl mx-auto bg-red-950/20 border border-red-500/20 rounded-2xl p-6 backdrop-blur-sm flex items-center justify-center gap-4 mb-8"
          >
            <div className="text-red-400 font-bold text-4xl">75%</div>
            <div className="text-zinc-300 text-left text-sm md:text-base leading-snug">
              of professional resumes are <span className="font-bold text-white">rejected by ATS</span> before a human recruiter ever sees them.
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-zinc-950/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:-translate-y-2 hover:border-red-500/30 transition-all duration-500 shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center mb-8 border border-red-500/20 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(248,113,113,0.1)]">
                    <Icon className="w-7 h-7 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">{point.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{point.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
