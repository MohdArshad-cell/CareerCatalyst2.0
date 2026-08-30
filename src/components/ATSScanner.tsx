"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, RotateCcw, AlertTriangle, CheckCircle2 } from "lucide-react";

const standardLogs = [
  { text: "Scanning standard_resume.pdf...", type: "info", delay: 500 },
  { text: "[WARN] Unreadable column layout detected.", type: "warn", delay: 1200 },
  { text: "[ERROR] Keyword 'React' not parsed.", type: "error", delay: 2000 },
  { text: "[ERROR] Keyword 'Next.js' not parsed.", type: "error", delay: 2800 },
  { text: "Calculating ATS Match Score...", type: "info", delay: 3500 },
  { text: "RESULT: 12% Match. Auto-Rejecting.", type: "error", delay: 4500 },
];

const optimizedLogs = [
  { text: "Scanning us_tech_optimized_resume.tex...", type: "info", delay: 500 },
  { text: "[SUCCESS] Single-column LaTeX layout verified.", type: "success", delay: 1200 },
  { text: "[SUCCESS] Parsed keyword 'React' (4 matches).", type: "success", delay: 1800 },
  { text: "[SUCCESS] Parsed keyword 'Next.js' (3 matches).", type: "success", delay: 2400 },
  { text: "Calculating ATS Match Score...", type: "info", delay: 3200 },
  { text: "RESULT: 98% Match. Forwarding to Recruiter.", type: "success", delay: 4200 },
];

export function ATSScanner() {
  const [isScanning, setIsScanning] = useState(false);
  const [standardIndex, setStandardIndex] = useState(0);
  const [optimizedIndex, setOptimizedIndex] = useState(0);

  const startScan = () => {
    setIsScanning(true);
    setStandardIndex(0);
    setOptimizedIndex(0);

    standardLogs.forEach((log, idx) => {
      setTimeout(() => setStandardIndex(idx + 1), log.delay);
    });

    optimizedLogs.forEach((log, idx) => {
      setTimeout(() => setOptimizedIndex(idx + 1), log.delay);
    });
  };

  const resetScan = () => {
    setIsScanning(false);
    setStandardIndex(0);
    setOptimizedIndex(0);
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-zinc-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            The Invisible Enemy: <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">The ATS</span>
          </h2>
          <p className="text-lg text-zinc-400">
            75% of resumes are rejected by Applicant Tracking Systems before a human ever sees them. See how a standard resume performs against our optimized format.
          </p>
        </div>

        <div className="flex flex-col items-center mb-12">
          {!isScanning ? (
            <button 
              onClick={startScan}
              className="flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-bold transition-all shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_50px_rgba(99,102,241,0.6)] hover:-translate-y-1"
            >
              <Play className="w-5 h-5 fill-current" />
              Simulate ATS Scan
            </button>
          ) : (
            <button 
              onClick={resetScan}
              className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-zinc-300 rounded-full font-bold transition-all border border-white/10"
            >
              <RotateCcw className="w-5 h-5" />
              Reset Simulation
            </button>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Standard Resume Terminal */}
          <div className="bg-black border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col relative group">
            <div className="bg-zinc-900 border-b border-zinc-800 p-4 flex items-center justify-between">
              <div className="text-xs font-mono text-zinc-400">Standard Word Resume</div>
              <AlertTriangle className="w-4 h-4 text-red-500" />
            </div>
            <div className="p-6 font-mono text-sm leading-loose h-72 overflow-y-auto">
              {standardLogs.slice(0, standardIndex).map((log, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  key={i} 
                  className={`
                    ${log.type === "error" ? "text-red-400" : ""}
                    ${log.type === "warn" ? "text-yellow-400" : ""}
                    ${log.type === "info" ? "text-zinc-500" : ""}
                  `}
                >
                  {log.text}
                </motion.div>
              ))}
              {isScanning && standardIndex < standardLogs.length && (
                <div className="text-zinc-600 animate-pulse mt-2">Processing...</div>
              )}
            </div>
            {standardIndex === standardLogs.length && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center z-20"
              >
                <div className="text-red-500 font-bold text-5xl md:text-8xl tracking-tighter mb-4 drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]">12%</div>
                <div className="text-white font-mono uppercase tracking-widest text-xs md:text-sm bg-red-500/20 border border-red-500/30 px-4 py-1.5 rounded-full">Auto-Rejected</div>
              </motion.div>
            )}
          </div>

          {/* Optimized Resume Terminal */}
          <div className="bg-black border border-emerald-900/50 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.15)] flex flex-col relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 to-transparent pointer-events-none" />
            <div className="bg-zinc-900 border-b border-emerald-900/30 p-4 flex items-center justify-between relative z-10">
              <div className="text-xs font-mono text-emerald-400">Career Catalyst Format</div>
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="p-6 font-mono text-sm leading-loose h-72 overflow-y-auto relative z-10">
              {optimizedLogs.slice(0, optimizedIndex).map((log, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  key={i} 
                  className={`
                    ${log.type === "success" ? "text-emerald-400 font-medium" : ""}
                    ${log.type === "info" ? "text-zinc-500" : ""}
                  `}
                >
                  {log.text}
                </motion.div>
              ))}
              {isScanning && optimizedIndex < optimizedLogs.length && (
                <div className="text-emerald-900 animate-pulse mt-2">Processing...</div>
              )}
            </div>
            {optimizedIndex === optimizedLogs.length && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center z-20"
              >
                <div className="text-emerald-400 font-bold text-5xl md:text-8xl tracking-tighter mb-4 drop-shadow-[0_0_30px_rgba(52,211,153,0.5)]">98%</div>
                <div className="text-white font-mono uppercase tracking-widest text-xs md:text-sm bg-emerald-500/20 border border-emerald-500/30 px-4 py-1.5 rounded-full">Top Candidate</div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Subtle CTA */}
        {standardIndex === standardLogs.length && optimizedIndex === optimizedLogs.length && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 text-center"
          >
            <a href="#pricing" className="text-zinc-400 hover:text-white transition-colors border-b border-zinc-700 hover:border-white pb-1 font-medium inline-flex items-center gap-2">
              Don't let your resume be the one on the left
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
