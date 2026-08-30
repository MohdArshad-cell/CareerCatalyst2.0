"use client";

import { motion } from "framer-motion";
import { Upload, Code2, Rocket, Workflow } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "1. Submit Details",
    description: <>Upload your existing resume, GitHub/projects, and target roles via a <span className="text-white font-semibold bg-white/10 px-1.5 py-0.5 rounded">simple, frictionless form.</span></>
  },
  {
    icon: Code2,
    title: "2. Optimization & Engineering",
    description: <>We rewrite your metrics into the XYZ format, build the <span className="text-primary-400 font-semibold bg-primary-400/10 px-1.5 py-0.5 rounded border border-primary-400/20">LaTeX file</span>, and optimize your LinkedIn keywords.</>
  },
  {
    icon: Rocket,
    title: "3. Delivery & Revisions",
    description: <>Receive your ready-to-apply assets within <span className="text-accent-400 font-semibold bg-accent-400/10 px-1.5 py-0.5 rounded border border-accent-400/20">48 hours</span>, along with full support for any necessary edits.</>
  }
];

export function Process() {
  return (
    <section className="py-32 bg-black border-y border-white/5 relative overflow-hidden flex flex-col items-center">
      {/* Background Glowing Beam */}
      <div className="absolute top-[60%] left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent hidden lg:block -translate-y-1/2 shadow-[0_0_30px_rgba(99,102,241,0.5)]" />
      <div className="absolute top-[60%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent hidden lg:block -translate-y-1/2" />
      
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono uppercase tracking-widest mb-8 backdrop-blur-md"
          >
            <Workflow className="w-4 h-4 text-primary-400" />
            How It Works
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 leading-[1.1]"
          >
            From Submission to Interview-Ready in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-emerald-400 drop-shadow-[0_0_30px_rgba(45,212,191,0.3)]">48 Hours</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light"
          >
            We handle the engineering of your profile so you can focus on interview prep.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 xl:gap-12 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center hover:-translate-y-4 transition-all duration-500 shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />
                
                <div className="w-24 h-24 mx-auto bg-black rounded-2xl flex items-center justify-center mb-10 shadow-[0_0_40px_rgba(99,102,241,0.2)] border border-primary-500/30 relative z-10 group-hover:scale-110 group-hover:border-primary-500/60 group-hover:shadow-[0_0_60px_rgba(99,102,241,0.4)] transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-transparent rounded-2xl" />
                  <Icon className="w-10 h-10 text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-primary-300 transition-colors">{step.title}</h3>
                <p className="text-zinc-400 leading-relaxed font-light">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
