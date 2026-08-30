"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Details", href: "/services" },
    { name: "Proof", href: "/#proof" },
    { name: "Pricing", href: "/#pricing" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-emerald-500 origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
        <header 
          className={`transition-all duration-500 rounded-2xl border ${
            isScrolled 
              ? "bg-black/60 backdrop-blur-xl border-white/10 shadow-[0_0_30px_rgba(99,102,241,0.15)] py-3 px-6 w-full max-w-4xl" 
              : "bg-black/20 backdrop-blur-md border-transparent py-4 px-6 w-full max-w-5xl"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="font-bold text-lg tracking-tight text-white flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-400 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                <span className="text-black font-black text-xs">CC</span>
              </div>
              <span className="hidden sm:block font-mono text-sm uppercase tracking-widest text-zinc-300">Career Catalyst</span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 bg-white/5 px-6 py-2 rounded-full border border-white/5 relative">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-xs uppercase tracking-widest font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <a href="/#pricing" className="relative hidden md:block px-6 py-2.5 bg-primary-600/20 text-primary-400 border border-primary-500/50 text-xs uppercase tracking-widest font-bold rounded-full hover:bg-primary-600 hover:text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all overflow-hidden group">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] z-0" />
              <div className="absolute inset-0 rounded-full border border-primary-500/50 animate-[ping_3s_ease-in-out_infinite] opacity-30 pointer-events-none" />
            </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white bg-white/10 p-2 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 overflow-hidden border-t border-white/10 bg-black/50 backdrop-blur-xl rounded-b-2xl mx-[-1.5rem] px-6"
            >
              <div className="flex flex-col gap-2 py-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href="/#pricing" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full px-5 py-3 bg-primary-600/20 text-primary-400 border border-primary-500/50 text-center font-bold font-mono text-sm uppercase tracking-widest rounded-lg mt-2"
                >
                  Get Started
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </div>
    </>
  );
}
