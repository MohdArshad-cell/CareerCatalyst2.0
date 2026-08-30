"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const lines = [
  "> Initializing ATS optimization...",
  "> Injecting keywords: React, Node...",
  "> Re-formatting to LaTeX standard...",
  "> Deploying Next.js portfolio...",
  "> Status: Hired at Top Tech!"
];

export function Terminal() {
  const [currentLine, setCurrentLine] = useState(0);
  const [text, setText] = useState("");
  
  useEffect(() => {
    if (currentLine >= lines.length) return;
    
    let timeout: NodeJS.Timeout;
    const targetText = lines[currentLine];
    
    if (text.length < targetText.length) {
      timeout = setTimeout(() => {
        setText(targetText.slice(0, text.length + 1));
      }, Math.random() * 40 + 20); // Typing speed
    } else {
      timeout = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
        setText("");
      }, 1200); // Pause before next line
    }
    
    return () => clearTimeout(timeout);
  }, [text, currentLine]);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      className="absolute -top-12 -right-24 z-40 hidden xl:flex flex-col w-72 bg-zinc-950/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
    >
      {/* Header */}
      <div className="h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <div className="text-[10px] text-zinc-500 font-mono ml-auto">bash - 80x24</div>
      </div>
      
      {/* Body */}
      <div className="p-4 font-mono text-xs leading-relaxed min-h-[140px] flex flex-col justify-end">
        {lines.slice(0, currentLine).map((l, i) => (
          <div key={i} className="text-zinc-400 mb-1">{l}</div>
        ))}
        {currentLine < lines.length && (
          <div className="text-emerald-400">
            {text}<span className="animate-pulse">_</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
