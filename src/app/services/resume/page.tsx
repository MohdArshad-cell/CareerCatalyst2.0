"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const ATSScanner = dynamic(() => import("@/components/ATSScanner").then(mod => mod.ATSScanner));
const Footer = dynamic(() => import("@/components/Footer").then(mod => mod.Footer));

export default function ResumeServicePage() {
  return (
    <main className="min-h-screen bg-background relative z-10 overflow-x-hidden pt-24 md:pt-32">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none z-0" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 mb-24">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            <span className="text-sm font-medium text-zinc-300 tracking-wide uppercase">Core Deliverable</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            ATS Resume <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Overhaul</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed">
            We rebuild your resume in single-column LaTeX, stripping away unparseable designs and injecting a data-driven XYZ bullet point framework that parsers love.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-8">
            <div className="bg-black/50 border border-white/10 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-4">Why standard resumes fail</h3>
              <p className="text-zinc-400 leading-relaxed">
                Most templates use tables, columns, or complex formatting that ATS parsers like Workday and Greenhouse cannot read. If they can't parse your data, your score drops, and you get auto-rejected.
              </p>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/20 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-4">Our LaTeX Architecture</h3>
              <p className="text-zinc-400 leading-relaxed">
                We write your resume in plain-text LaTeX. It compiles perfectly into a PDF that retains 100% data integrity when scraped by ATS bots.
              </p>
              <ul className="space-y-3 mt-6">
                {["Single-column parseable layout", "XYZ format bullet points", "Keyword injection matrix", "PDF & Source Code delivered"].map((item, i) => (
                  <li key={i} className="flex gap-3 items-center text-sm text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <span className="text-xs font-mono text-zinc-500">LaTeX Source Code</span>
            </div>
            <pre className="font-mono text-xs text-blue-300 overflow-x-auto leading-relaxed pt-8 pb-4">
{`\\documentclass[letterpaper,11pt]{article}
\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}

\\begin{document}
\\section{Experience}
  \\resumeSubheading
    {Senior Software Engineer}{San Francisco, CA}
    {Tech Corp Inc.}{Jan 2021 -- Present}
    \\resumeItemListStart
      \\resumeItem{Engineered a high-throughput React/Node.js telemetry dashboard, reducing data latency by 45\\% and serving 10k+ concurrent enterprise users.}
    \\resumeItemListEnd
\\end{document}`}
            </pre>
          </div>
        </div>

        <ATSScanner />

        <div className="mt-24 text-center">
          <a 
            href="/pricing"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg rounded-full transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] group"
          >
            Get Your ATS Resume
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
