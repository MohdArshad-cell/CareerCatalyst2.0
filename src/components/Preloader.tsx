"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const terminalLines = [
  "INITIALIZING SYSTEM... [OK]",
  "LOADING ENGINEERING PORTFOLIOS... [OK]",
  "BYPASSING ATS PARSERS... [OK]",
  "ESTABLISHING RECRUITER CONNECTIONS... [OK]",
  "SYSTEM READY."
];

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    // Sequence the terminal lines
    const interval = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev < terminalLines.length - 1) return prev + 1;
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "auto";
        }, 800); // Wait 800ms after last line before fading out
        return prev;
      });
    }, 200);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-black flex flex-col justify-end p-8 md:p-12 font-mono"
        >
          <div className="max-w-3xl flex flex-col gap-2">
            {terminalLines.slice(0, currentLine + 1).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`text-sm md:text-base ${i === terminalLines.length - 1 ? "text-primary-400 font-bold" : "text-zinc-500"}`}
              >
                <span className="text-emerald-500 mr-2">{">"}</span> {line}
              </motion.div>
            ))}
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-3 h-5 bg-primary-400 mt-2"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
