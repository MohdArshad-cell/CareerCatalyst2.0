"use client";

import { motion } from "framer-motion";
import { Star, MessageSquareQuote, ArrowRight } from "lucide-react";
import { TiltCard } from "./TiltCard";

const testimonials = [
  {
    name: "Alex C.",
    role: "Backend Engineer (F1-OPT)",
    outcome: "Hired at Meta",
    quote: (
      <>
        I was stuck in the ATS black hole for 4 months. Within 2 weeks of using the XYZ metrics rewrite and deploying the custom portfolio, I had <span className="text-white font-semibold bg-white/10 px-1.5 py-0.5 rounded">3 recruiter screens</span> and ended up with an <span className="text-emerald-400 font-bold bg-emerald-400/10 px-1.5 py-0.5 rounded border border-emerald-400/20">offer from Meta.</span>
      </>
    ),
  },
  {
    name: "Priya R.",
    role: "Full-Stack Developer",
    outcome: "Hired at Stripe",
    quote: (
      <>
        The LinkedIn optimization completely flipped the dynamic. Instead of cold-applying, <span className="text-white font-semibold bg-white/10 px-1.5 py-0.5 rounded">recruiters started reaching out to me directly.</span> The ROI on this is insane.
      </>
    ),
  },
  {
    name: "David T.",
    role: "Frontend Engineer",
    outcome: "Hired at Netflix",
    quote: (
      <>
        My previous GitHub portfolio was generic. The team helped me frame my projects as <span className="text-white font-semibold bg-white/10 px-1.5 py-0.5 rounded">real business impact,</span> which directly helped me <span className="text-emerald-400 font-bold bg-emerald-400/10 px-1.5 py-0.5 rounded border border-emerald-400/20">pass the hiring manager round.</span>
      </>
    ),
  },
  {
    name: "Sarah M.",
    role: "Data Scientist",
    outcome: "Hired at Amazon",
    quote: (
      <>
        I was applying to hundreds of roles with no response. The resume rewrite emphasized my impact and within days I started passing the <span className="text-emerald-400 font-bold bg-emerald-400/10 px-1.5 py-0.5 rounded border border-emerald-400/20">AWS automated screening.</span>
      </>
    ),
  },
  {
    name: "Kevin H.",
    role: "DevOps Engineer",
    outcome: "Hired at Databricks",
    quote: (
      <>
        The portfolio completely changed how I interviewed. Interviewers were pulling it up on the call and we spent the time discussing my <span className="text-white font-semibold bg-white/10 px-1.5 py-0.5 rounded">system architecture diagrams</span> instead of generic trivia.
      </>
    ),
  }
];

export function Testimonials() {
  return (
    <section className="py-32 bg-black border-y border-white/5 relative overflow-hidden flex flex-col items-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono uppercase tracking-widest mb-8 backdrop-blur-md"
          >
            <MessageSquareQuote className="w-4 h-4 text-accent-400" />
            Wall of Love
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8"
          >
            Don't take our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-primary-400 to-emerald-400 drop-shadow-[0_0_30px_rgba(45,212,191,0.3)]">word for it.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch relative" style={{ perspective: "2000px" }}>
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="h-full flex flex-col"
            >
              <TiltCard
                className="group relative rounded-3xl p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-4 bg-zinc-950/50 border border-white/10 hover:border-white/20 shadow-2xl flex flex-col justify-between h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-accent-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />
                
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent-500 text-accent-500" />
                    ))}
                  </div>
                  <p className="text-zinc-300 text-lg leading-relaxed font-light mb-8">&quot;{t.quote}&quot;</p>
                </div>

                <div className="border-t border-white/10 pt-6 mt-auto flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 font-bold border border-zinc-700 shadow-inner">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-sm text-zinc-500 mb-1">{t.role}</div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-accent-400">{t.outcome}</div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a href="#" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors font-mono text-sm uppercase tracking-widest border-b border-zinc-700 hover:border-white pb-1 group">
            View All Success Stories <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
