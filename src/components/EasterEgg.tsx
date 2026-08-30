"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function EasterEgg() {
  const [activated, setActivated] = useState(false);
  
  useEffect(() => {
    let input = "";
    const secret = "hireme";
    
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if pressing a modifier key to not interrupt actual typing
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      
      // Only append normal keys
      if (e.key.length === 1) {
        input += e.key.toLowerCase();
        if (input.length > secret.length) {
          input = input.slice(input.length - secret.length);
        }
        if (input === secret) {
          setActivated(true);
          input = ""; // Reset
        }
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {activated && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
        >
          {/* Falling Matrix Code Simulation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 text-green-500 font-mono text-xs flex flex-wrap gap-2 p-4">
            {[...Array(500)].map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: [0, 1, 0], y: 1000 }}
                transition={{ duration: Math.random() * 2 + 1, repeat: Infinity, delay: Math.random() * 2 }}
              >
                {Math.random() > 0.5 ? "1" : "0"}
              </motion.span>
            ))}
          </div>

          <motion.div 
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            className="relative bg-zinc-950 border border-green-500/30 p-8 md:p-12 rounded-3xl text-center shadow-[0_0_100px_rgba(34,197,94,0.2)] max-w-lg w-full"
          >
            <div className="text-green-400 font-mono text-sm tracking-widest uppercase mb-4 animate-pulse">
              System Override Initiated
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              You found the secret.
            </h2>
            <p className="text-zinc-400 mb-8">
              Engineers who know how to inspect code and find hidden easter eggs deserve to be hired at top tech companies. 
            </p>
            <div className="bg-green-500/10 border border-green-500/20 p-6 rounded-xl mb-8">
              <div className="text-xs text-green-500 font-mono uppercase tracking-widest mb-2">Apply this code at checkout</div>
              <div className="text-3xl md:text-4xl font-bold text-green-400 tracking-widest">HACKER10</div>
            </div>
            <button 
              onClick={() => setActivated(false)}
              className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors w-full sm:w-auto"
            >
              Return to Matrix
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
