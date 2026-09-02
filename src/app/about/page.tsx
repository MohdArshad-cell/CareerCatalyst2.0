"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Terminal, Code2, Users, Target, ArrowRight } from "lucide-react";

const Footer = dynamic(() => import("@/components/Footer").then(mod => mod.Footer));

const stats = [
  { label: "Professionals Placed", value: "100+", icon: Users },
  { label: "Interview Rate Increase", value: "300%", icon: Target },
  { label: "Resumes Overhauled", value: "1M+", icon: Code2 },
  { label: "ATS Systems Cracked", value: "50+", icon: Terminal },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background relative z-10 overflow-x-hidden pt-24 md:pt-32">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-primary-900/10 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-40 right-[-10%] w-[500px] h-[500px] bg-accent-900/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <section className="py-16 md:py-24 relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-24 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono uppercase tracking-widest mb-8 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            Our Story
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8 leading-[1.1]"
          >
            We got tired of seeing <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">brilliant professionals</span> rejected by <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-emerald-400">mindless algorithms.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed font-light"
          >
            So we reverse-engineered the hiring system to give you the exact assets that force recruiters to pay attention.
          </motion.p>
        </div>

        {/* Narrative Split */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-[2rem] blur-2xl" />
            <div className="relative bg-black/50 border border-white/10 p-8 md:p-12 rounded-[2rem] backdrop-blur-xl">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 mb-8">
                <Terminal className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">The System is Broken.</h3>
              <div className="space-y-6 text-zinc-400 leading-relaxed font-light text-lg">
                <p>
                  We are former industry insiders—hiring managers, recruiters, and professionals who have sat on the other side of the table at top-tier companies.
                </p>
                <p>
                  Every day, we watched Applicant Tracking Systems (ATS) automatically trash resumes from incredibly talented candidates simply because they used a two-column PDF format, or lacked the exact boolean keywords the recruiter typed into LinkedIn.
                </p>
                <p className="text-white font-medium">
                  The hiring process isn't a meritocracy anymore. It's a search engine optimization game.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="pl-6 border-l-2 border-primary-500/30">
              <h4 className="text-xl font-bold text-white mb-3">We built the cheat code.</h4>
              <p className="text-zinc-400 leading-relaxed">
                We founded Career Catalyst to level the playing field. We don't just give you generic career advice. We re-engineer your profile, compile your LaTeX, and restructure your digital presence.
              </p>
            </div>
            <div className="pl-6 border-l-2 border-accent-500/30">
              <h4 className="text-xl font-bold text-white mb-3">Global Career Focus</h4>
              <p className="text-zinc-400 leading-relaxed">
                We specialize in helping professionals bypass intense industry gatekeeping across the global job market by making their profiles undeniable.
              </p>
            </div>
            <div className="pl-6 border-l-2 border-emerald-500/30">
              <h4 className="text-xl font-bold text-white mb-3">No fluffy advice. Just results.</h4>
              <p className="text-zinc-400 leading-relaxed">
                If you are ready to stop getting ghosted and start taking interviews, we are ready to build the digital infrastructure that gets you there.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center relative overflow-hidden group hover:border-primary-500/30 hover:bg-white/10 transition-colors"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-primary-500/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity" />
                <Icon className="w-8 h-8 text-primary-400 mb-6" />
                <div className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">{stat.value}</div>
                <div className="text-sm font-mono text-zinc-500 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-[3rem] p-12 md:p-20 text-center overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15)_0%,transparent_70%)] pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight relative z-10">Let's rewrite your narrative.</h2>
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light relative z-10">
            Reach out directly on WhatsApp to discuss your career goals. We'll tell you exactly what you need to change to start getting interviews today.
          </p>
          <a 
            href="https://wa.me/917887096421?text=Hi,%20I'm%20ready%20to%20transform%20my%20career%20assets." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary-600 hover:bg-primary-500 text-white font-bold text-lg rounded-full transition-all shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:shadow-[0_0_50px_rgba(99,102,241,0.5)] hover:-translate-y-1 relative z-10 group"
          >
            Chat with our Founders
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </section>

      <Footer />
    </main>
  );
}
