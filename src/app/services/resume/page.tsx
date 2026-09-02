"use client";

"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, FileText, Code2, Target, Crosshair, ArrowLeft, X } from "lucide-react";
import Link from "next/link";

const ATSScanner = dynamic(() => import("@/components/ATSScanner").then(mod => mod.ATSScanner));
const Footer = dynamic(() => import("@/components/Footer").then(mod => mod.Footer));

export default function ResumeServicePage() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-background relative z-10 overflow-x-hidden pt-24 md:pt-32">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none z-0" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 mb-24">
        <Link href="/services" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-12 mt-4 font-medium group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </Link>
        
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

        {/* Templates Showcase Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Elite LaTeX Templates</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Our templates are battle-tested across thousands of FAANG applications. They are designed to be 100% machine-readable while remaining visually dense and professional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-950 border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-colors group flex flex-col justify-between">
              <div onClick={() => setLightboxImage("/resumes/elegant_preview.png")} className="bg-zinc-900/50 rounded-xl overflow-hidden mb-6 border border-white/5 block cursor-pointer">
                <img src="/resumes/elegant_preview.png" alt="Elegant Resume Template" className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity hover:scale-105 duration-500" />
              </div>
              <h3 className="text-xl font-bold text-white text-center">Elegant Template</h3>
            </div>
            
            <div className="bg-zinc-950 border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-colors group flex flex-col justify-between">
              <div onClick={() => setLightboxImage("/resumes/modern_line_preview.png")} className="bg-zinc-900/50 rounded-xl overflow-hidden mb-6 border border-white/5 block cursor-pointer">
                <img src="/resumes/modern_line_preview.png" alt="Modern Line Resume Template" className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity hover:scale-105 duration-500" />
              </div>
              <h3 className="text-xl font-bold text-white text-center">Modern Line Template</h3>
            </div>

            <div className="bg-zinc-950 border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-colors group flex flex-col justify-between">
              <div onClick={() => setLightboxImage("/resumes/one_column_preview.png")} className="bg-zinc-900/50 rounded-xl overflow-hidden mb-6 border border-white/5 block cursor-pointer">
                <img src="/resumes/one_column_preview.png" alt="One Column Resume Template" className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity hover:scale-105 duration-500" />
              </div>
              <h3 className="text-xl font-bold text-white text-center">One Column Template</h3>
            </div>

            <div className="bg-zinc-950 border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-colors group flex flex-col justify-between">
              <div onClick={() => setLightboxImage("/resumes/professional_preview.png")} className="bg-zinc-900/50 rounded-xl overflow-hidden mb-6 border border-white/5 block cursor-pointer">
                <img src="/resumes/professional_preview.png" alt="Professional Resume Template" className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity hover:scale-105 duration-500" />
              </div>
              <h3 className="text-xl font-bold text-white text-center">Professional Template</h3>
            </div>
          </div>
        </div>

        {/* How We Optimize Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">How We Engineer Your Resume</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              We don't just "proofread". We completely tear down your experience and rebuild it using algorithmic parsing strategies.
            </p>
          </div>

          <div className="space-y-6">
            {/* Bullet Point Optimization */}
            <div className="bg-black/40 border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">The XYZ Bullet Point Framework</h3>
              </div>
              <p className="text-zinc-400 mb-8 max-w-3xl leading-relaxed">
                Google recruiters read a resume in 6 seconds. If your bullets start with "Responsible for..." you've already lost. We rewrite every single bullet point into the strict XYZ format: <strong className="text-white">Accomplished [X] as measured by [Y], by doing [Z].</strong>
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-500/5 border border-red-500/10 rounded-2xl p-6 relative">
                  <span className="absolute top-0 right-0 bg-red-500/20 text-red-400 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">BEFORE (WEAK)</span>
                  <p className="text-zinc-300 italic mt-4">
                    "Responsible for rewriting the frontend of the main web application to make it faster and easier to maintain."
                  </p>
                </div>
                <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6 relative">
                  <span className="absolute top-0 right-0 bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">AFTER (XYZ FORMAT)</span>
                  <p className="text-zinc-200 mt-4 leading-relaxed">
                    "Engineered a high-throughput React dashboard migration (<strong className="text-emerald-400">Z</strong>), reducing Largest Contentful Paint by 45% (<strong className="text-emerald-400">Y</strong>) and increasing user retention for 10k+ enterprise clients (<strong className="text-emerald-400">X</strong>)."
                  </p>
                </div>
              </div>
            </div>

            {/* Section Breakdown */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/40 border border-white/10 rounded-3xl p-8">
                 <div className="flex items-center gap-3 mb-4">
                  <Code2 className="w-6 h-6 text-indigo-400" />
                  <h3 className="text-xl font-bold text-white">Hard-Skill Keyword Injection</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  ATS parsers assign you a match score based on hard skills (e.g., Python, Kubernetes). We extract the exact keywords from your target job descriptions and seamlessly weave them into your Experience and Projects sections to guarantee a 90%+ parse score.
                </p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-3xl p-8">
                 <div className="flex items-center gap-3 mb-4">
                  <Crosshair className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">Section Prioritization</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Depending on your experience level, the order of your sections dictates your success. New grads need Education and Projects at the top. Seniors need Impact and Experience highlighted immediately. We structure the hierarchy to hide weaknesses and emphasize strengths.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* LaTeX Code Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-8">
            <div className="bg-black/50 border border-white/10 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-4">Why we write in LaTeX</h3>
              <p className="text-zinc-400 leading-relaxed">
                Canva and Word templates use tables, invisible columns, and complex formatting that ATS parsers like Workday and Greenhouse cannot read. If they can't parse your data, your score drops to 0, and you get auto-rejected.
              </p>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/20 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-4">The Technical Advantage</h3>
              <p className="text-zinc-400 leading-relaxed">
                We write your resume in plain-text LaTeX. It compiles perfectly into a PDF that retains 100% data integrity when scraped by ATS bots.
              </p>
              <ul className="space-y-3 mt-6">
                {["Single-column parseable layout", "Guaranteed Workday Autofill", "No text-garbling or missed dates", "Source Code delivered to you"].map((item, i) => (
                  <li key={i} className="flex gap-3 items-center text-sm text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <span className="text-xs font-mono text-zinc-500 flex items-center gap-2"><FileText className="w-3 h-3"/> LaTeX Source Code</span>
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
      \\resumeItem{Engineered a high-throughput React dashboard migration, reducing Largest Contentful Paint by 45\\% and increasing user retention for 10k+ enterprise clients.}
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

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-5xl flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Controls */}
              <div className="w-full flex justify-between items-center mb-4">
                <button 
                  onClick={() => setLightboxImage(null)}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white transition-all backdrop-blur-md"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="font-medium text-sm">Back to Page</span>
                </button>
                <button 
                  onClick={() => setLightboxImage(null)}
                  className="p-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white transition-all backdrop-blur-md"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Image Container - Constrained to viewport height */}
              <div className="relative w-full flex justify-center bg-zinc-900/50 rounded-2xl p-2 border border-white/10 shadow-2xl">
                <img 
                  src={lightboxImage} 
                  alt="Template Preview Fullscreen" 
                  className="max-w-full max-h-[75vh] object-contain rounded-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
