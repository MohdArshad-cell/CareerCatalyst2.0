"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle2, ChevronRight, Lock } from "lucide-react";

export function MiniATSLeadMagnet() {
  const [inputText, setInputText] = useState("");
  const [status, setStatus] = useState<"idle" | "scanning" | "done">("idle");
  const [scanStep, setScanStep] = useState(0);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const mockSteps = [
    "Analyzing semantic structure...",
    "Extracting weak action verbs...",
    "Injecting quantifiable metrics...",
    "Mapping to XYZ format...",
    "Finalizing ATS compatibility..."
  ];

  const handleOptimize = () => {
    if (!inputText.trim()) return;
    setStatus("scanning");
    setScanStep(0);

    // Simulate scanning progress
    mockSteps.forEach((_, idx) => {
      setTimeout(() => {
        setScanStep(idx + 1);
        if (idx === mockSteps.length - 1) {
          setTimeout(() => setStatus("done"), 600);
        }
      }, (idx + 1) * 800);
    });
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    // In reality, send email to backend here
  };

  return (
    <section id="audit" className="py-24 relative overflow-hidden bg-black border-y border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Try the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Mini-ATS Optimizer</span>
          </h2>
          <p className="text-lg text-zinc-400">
            Paste a weak resume bullet point below, and watch our ATS simulator rewrite it into a high-impact XYZ format.
          </p>
        </div>

        <div className="bg-zinc-950/50 backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-3xl shadow-2xl">
          <AnimatePresence mode="wait">
            {status === "idle" && (
              <motion.div
                key="idle"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col gap-6"
              >
                <div className="relative">
                  <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="e.g., Helped fix issues in the project and improved performance..."
                    className="w-full bg-black/50 border border-white/10 rounded-2xl p-6 text-zinc-300 placeholder:text-zinc-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all resize-none min-h-[120px]"
                  />
                  <div className="absolute bottom-4 right-4 text-xs font-mono text-zinc-600">
                    {inputText.length} chars
                  </div>
                </div>
                
                <button
                  onClick={handleOptimize}
                  disabled={!inputText.trim()}
                  className="w-full py-4 bg-primary-600 hover:bg-primary-500 disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(99,102,241,0.2)] disabled:shadow-none uppercase tracking-widest text-sm"
                >
                  <Sparkles className="w-5 h-5" />
                  Optimize Bullet Point
                </button>
              </motion.div>
            )}

            {status === "scanning" && (
              <motion.div
                key="scanning"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="bg-black border border-zinc-800 rounded-2xl p-6 h-[200px] flex flex-col justify-center"
              >
                <div className="font-mono text-sm text-zinc-500 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                  SYSTEM_OPTIMIZING...
                </div>
                <div className="space-y-2">
                  {mockSteps.slice(0, scanStep).map((step, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="font-mono text-xs md:text-sm text-emerald-400 flex items-center gap-2"
                    >
                      <ChevronRight className="w-4 h-4" />
                      {step}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {status === "done" && (
              <motion.div
                key="done"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-8"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Before */}
                  <div className="bg-black/40 border border-red-900/30 rounded-2xl p-6 relative">
                    <div className="absolute top-0 right-8 -translate-y-1/2 bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                      Before (12% Match)
                    </div>
                    <p className="text-zinc-500 text-sm mt-2">
                      "{inputText}"
                    </p>
                  </div>
                  
                  {/* After */}
                  <div className="bg-emerald-950/20 border border-emerald-900/50 rounded-2xl p-6 relative shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                    <div className="absolute top-0 right-8 -translate-y-1/2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> After (98% Match)
                    </div>
                    <p className="text-zinc-200 text-sm font-medium leading-relaxed mt-2">
                      "Resolved 50+ high-priority issues, reducing error rate by 15% and improving overall user retention across 10,000+ active sessions."
                    </p>
                  </div>
                </div>

                <div className="w-full h-px bg-white/10" />

                <div className="bg-primary-950/30 border border-primary-900/50 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Want the full cheat sheet?</h3>
                    <p className="text-zinc-400 text-sm max-w-sm">
                      Get 50+ plug-and-play XYZ bullet points for diverse professional roles delivered straight to your inbox.
                    </p>
                  </div>
                  
                  <div className="w-full md:w-auto flex-shrink-0">
                    {!submitted ? (
                      <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
                        <input
                          type="email"
                          required
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="bg-black border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary-500 w-full md:w-64"
                        />
                        <button
                          type="submit"
                          className="bg-white text-black font-bold rounded-xl px-6 py-3 hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto whitespace-nowrap"
                        >
                          Send Templates <ArrowRight className="w-4 h-4" />
                        </button>
                      </form>
                    ) : (
                      <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-6 py-3 rounded-xl flex items-center justify-center gap-2 font-bold w-full md:w-auto">
                        <CheckCircle2 className="w-5 h-5" />
                        Sent to your inbox!
                      </div>
                    )}
                  </div>
                </div>
                
                <button
                  onClick={() => {
                    setStatus("idle");
                    setInputText("");
                    setScanStep(0);
                  }}
                  className="text-zinc-500 hover:text-white text-sm transition-colors text-center font-mono mt-4"
                >
                  [ Try another bullet point ]
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
