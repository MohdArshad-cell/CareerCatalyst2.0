"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingChat() {
  return (
    <motion.a
      href="mailto:hello@careercatalyst.com"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full shadow-[0_10px_40px_rgba(99,102,241,0.5)] hover:shadow-[0_10px_60px_rgba(99,102,241,0.8)] hover:-translate-y-1 transition-all group"
    >
      <div className="absolute inset-0 rounded-full border border-white/30" />
      <div className="absolute inset-[-4px] bg-primary-500/20 rounded-full animate-ping pointer-events-none" />
      <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
    </motion.a>
  );
}
