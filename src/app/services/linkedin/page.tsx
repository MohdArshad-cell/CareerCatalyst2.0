"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Star } from "lucide-react";

const Footer = dynamic(() => import("@/components/Footer").then(mod => mod.Footer));

export default function LinkedinServicePage() {
  return (
    <main className="min-h-screen bg-background relative z-10 overflow-x-hidden pt-24 md:pt-32">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-indigo-900/10 blur-[150px] rounded-full pointer-events-none z-0" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 mb-24">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
            <span className="text-sm font-medium text-zinc-300 tracking-wide uppercase">Core Deliverable</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            LinkedIn Profile <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">SEO</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed">
            We re-index your LinkedIn profile for recruiter search queries, optimizing your headline, summary, and experience sections to trigger algorithmic matches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-indigo-600/5 pointer-events-none" />
            
            {/* Mock LinkedIn Profile */}
            <div className="flex items-center gap-6 mb-8 pb-8 border-b border-white/10 relative z-10">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-primary-600 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-lg font-bold text-white mb-1">Alex Engineer</div>
                <div className="text-sm text-indigo-400 font-medium">Senior Frontend Engineer | React & Next.js | Ex-Amazon</div>
                <div className="text-xs text-zinc-500 mt-1">San Francisco Bay Area</div>
              </div>
            </div>

            <div className="space-y-4 relative z-10">
              <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Algorithm-Indexed Keywords</div>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {["React", "System Architecture", "AWS", "Node.js", "GraphQL", "TypeScript", "Microservices"].map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-black/50 border border-white/10 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-4">The Recruiter Dashboard</h3>
              <p className="text-zinc-400 leading-relaxed">
                Recruiters use LinkedIn Recruiter Pro to search for candidates using strict Boolean queries. If your profile doesn't have the exact keywords they search for, you won't even appear in their results.
              </p>
            </div>
            <div className="bg-indigo-500/10 border border-indigo-500/20 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-4">Our Optimization Strategy</h3>
              <p className="text-zinc-400 leading-relaxed">
                We rewrite your entire profile to rank at the top of these searches.
              </p>
              <ul className="space-y-3 mt-6">
                {["Headline keyword stuffing (tastefully)", "Impact-driven About section", "Project taglines & Feature linking", "Skill endorsement mapping"].map((item, i) => (
                  <li key={i} className="flex gap-3 items-center text-sm text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <a 
            href="/pricing"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-lg rounded-full transition-all shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:shadow-[0_0_50px_rgba(99,102,241,0.5)] group"
          >
            Optimize Your LinkedIn
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
