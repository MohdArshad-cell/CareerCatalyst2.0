"use client";

import { motion } from "framer-motion";

const companies = [
  "Google", "Meta", "Stripe", "Amazon", "Netflix", "Apple", "Uber", "Airbnb", "ByteDance", "Databricks"
];

export function Marquee() {
  return (
    <div className="w-full bg-black/40 border-y border-white/5 py-6 overflow-hidden flex items-center relative z-20">
      <div className="absolute left-0 w-16 md:w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 w-16 md:w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex items-center gap-4 px-6 md:px-12 z-20 shrink-0 border-r border-white/10 mr-8">
        <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest whitespace-nowrap">Engineers placed at</span>
      </div>

      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          }}
          className="flex items-center gap-16 md:gap-24 whitespace-nowrap"
        >
          {[...companies, ...companies].map((company, index) => (
            <span key={index} className="text-xl md:text-3xl font-bold text-zinc-600 hover:text-white hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-300 tracking-tight cursor-default">
              {company}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
