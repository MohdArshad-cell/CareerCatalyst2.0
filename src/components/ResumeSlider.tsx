"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function ResumeSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  
  // Create a motion value for the drag handle (0 to 100%)
  const position = useMotionValue(50);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        setContainerWidth(entries[0].contentRect.width);
      }
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const handleDrag = (e: any, info: any) => {
    if (!containerWidth || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Calculate percentage based on pointer position relative to container
    const x = info.point.x - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    position.set(percentage);
  };

  const clipPath = useTransform(position, (p) => `inset(0 ${100 - p}% 0 0)`);
  const leftPosition = useTransform(position, (p) => `${p}%`);

  return (
    <section className="py-24 relative overflow-hidden bg-zinc-950 border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            The Difference is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Night and Day</span>
          </h2>
          <p className="text-lg text-zinc-400">
            Drag the slider to see how we transform a standard, messy Word document into a high-impact, ATS-optimized engineering resume.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div 
            ref={containerRef}
            className="relative w-full aspect-[3/4] md:aspect-[4/3] rounded-3xl overflow-hidden cursor-ew-resize shadow-[0_0_50px_rgba(99,102,241,0.1)] border border-white/10 select-none bg-zinc-900"
          >
            {/* Base Image (Bad Resume) */}
            <div className="absolute inset-0 w-full h-full">
              <Image 
                src="/bad_resume.jpg" 
                alt="Unoptimized Resume" 
                fill 
                className="object-cover object-top opacity-50 grayscale"
                draggable={false}
              />
              <div className="absolute top-6 right-6 flex flex-col items-end gap-1">
                <div className="bg-red-500/80 text-white text-xs font-bold px-4 py-2 rounded-full backdrop-blur-md shadow-lg border border-white/10">
                  Ghosted
                </div>
                <div className="bg-black/60 backdrop-blur-md text-zinc-300 text-xs px-3 py-1 rounded-full border border-white/5">
                  Your Current Resume
                </div>
              </div>
            </div>

            {/* Top Image (Good Resume, clipped) */}
            <motion.div 
              className="absolute inset-0 w-full h-full z-10"
              style={{ clipPath }}
            >
              <Image 
                src="/good_resume.jpg" 
                alt="Optimized Resume" 
                fill 
                className="object-cover object-top"
                draggable={false}
              />
              <div className="absolute top-6 left-6 flex flex-col items-start gap-1">
                <div className="bg-emerald-500/90 text-white text-xs font-bold px-4 py-2 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.5)] border border-white/20">
                  Hired
                </div>
                <div className="bg-black/60 backdrop-blur-md text-zinc-300 text-xs px-3 py-1 rounded-full border border-white/5">
                  After Career Catalyst
                </div>
              </div>
            </motion.div>

            {/* Slider Handle */}
            <motion.div 
              className="absolute top-0 bottom-0 w-1 bg-white/80 z-20 shadow-[0_0_15px_rgba(255,255,255,0.8)]"
              style={{ left: leftPosition, x: "-50%" }}
              drag="x"
              dragConstraints={containerRef}
              dragElastic={0}
              dragMomentum={false}
              onDrag={handleDrag}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-zinc-900 pointer-events-none">
                <MoveHorizontal className="w-6 h-6 text-zinc-900" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
