"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, MessageCircleQuestion, Search, ArrowRight } from "lucide-react";
import Link from "next/link";

type Category = "All" | "General & Eligibility" | "The Process" | "Pricing & Guarantees";

const faqs: { question: string; answer: string; category: Category }[] = [
  // General & Eligibility
  {
    question: "Who is this service designed for?",
    answer: "Our service is tailored specifically for ambitious professionals who are struggling to get past the initial resume screen at top-tier companies.",
    category: "General & Eligibility"
  },
  {
    question: "What if I have 0 years of professional experience?",
    answer: "That is perfectly fine. We focus on building a killer portfolio, open-source contributions, and highlighting academic/personal projects using our XYZ data-driven framework to bypass the experience filter.",
    category: "General & Eligibility"
  },
  {
    question: "Do you guarantee I will get a job?",
    answer: "We guarantee a massive increase in your interview rate (top of funnel). However, we cannot guarantee you will pass the technical whiteboard rounds or behavioral interviews—that part is up to you. We get you in the door; you close the deal.",
    category: "General & Eligibility"
  },
  {
    question: "What if I'm not located in the US?",
    answer: "We help clients globally secure roles in their target countries. Our strategies apply universally to the modern hiring landscape and recruiter search patterns.",
    category: "General & Eligibility"
  },
  
  // The Process
  {
    question: "How long does the overhaul process take?",
    answer: "The complete overhaul typically takes 3-5 business days after you submit your initial background details via our deep-dive onboarding form.",
    category: "The Process"
  },
  {
    question: "Do you write cover letters as well?",
    answer: "Yes, our premium packages include an optimized, ATS-beating cover letter template that you can easily tailor for each specific application.",
    category: "The Process"
  },
  {
    question: "How exactly do you optimize my LinkedIn profile?",
    answer: "We re-index your LinkedIn profile for recruiter search queries. We optimize your headline, summary, and experience sections with algorithmic keywords so you rank in the top 1% when recruiters search for your skill set.",
    category: "The Process"
  },
  {
    question: "Will my resume pass Workday and Greenhouse parsers?",
    answer: "Absolutely. We strictly use single-column LaTeX templates designed exclusively to parse cleanly without tables, complex columns, or graphics that break ATS parsers.",
    category: "The Process"
  },

  // Pricing & Guarantees
  {
    question: "Do you offer refunds if I change my mind?",
    answer: "Due to the highly customized, manual labor involved in re-engineering your career assets, we do not offer refunds once work has begun. However, we include revision rounds to ensure you are 100% satisfied with the final deliverables.",
    category: "Pricing & Guarantees"
  },
  {
    question: "Is this a one-time fee or a recurring subscription?",
    answer: "This is a one-time fee. You pay once and own the customized LaTeX source code, portfolio repository, and LinkedIn strategies for life.",
    category: "Pricing & Guarantees"
  },
  {
    question: "Do you offer payment plans?",
    answer: "Currently, we only accept full payment upfront to begin the overhaul process. We accept all major credit cards via Stripe.",
    category: "Pricing & Guarantees"
  }
];

const categories: Category[] = ["All", "General & Eligibility", "The Process", "Pricing & Guarantees"];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="faq" className="py-24 relative overflow-hidden flex flex-col items-center">
      {/* Background radial fade */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-primary-900/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="w-full mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono uppercase tracking-widest mb-8 backdrop-blur-md"
          >
            <MessageCircleQuestion className="w-4 h-4 text-primary-400" />
            Knowledge Base
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
          >
            How can we <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-emerald-400 drop-shadow-[0_0_30px_rgba(45,212,191,0.3)]">help you?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-400 max-w-2xl text-center font-light mb-10"
          >
            Everything you need to know about our process, pricing, and guarantees.
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative w-full max-w-2xl"
          >
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-zinc-500" />
            </div>
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setOpenIndex(null); // Close accordion on search
              }}
              className="block w-full pl-16 pr-6 py-5 bg-zinc-900/50 border border-white/10 rounded-2xl text-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all shadow-[0_0_30px_rgba(0,0,0,0.5)]"
            />
          </motion.div>
        </div>

        {/* Category Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setOpenIndex(null); // Reset open accordion on tab switch
              }}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === category 
                  ? "bg-primary-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] scale-105" 
                  : "bg-white/5 text-zinc-400 border border-white/10 hover:bg-white/10 hover:text-zinc-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4 min-h-[400px]">
          <AnimatePresence>
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const globalIndex = faqs.indexOf(faq);
                return (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className={`border rounded-2xl overflow-hidden backdrop-blur-md transition-colors duration-300 ${
                      openIndex === globalIndex ? "bg-zinc-900 border-primary-500/30 shadow-[0_0_30px_rgba(99,102,241,0.1)]" : "bg-black/40 border-white/5 hover:border-white/20 hover:bg-zinc-900/50"
                    }`}
                  >
                    <button
                      className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
                      onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                    >
                      <span className={`font-bold text-lg md:text-xl transition-colors pr-8 ${openIndex === globalIndex ? "text-primary-300" : "text-white"}`}>{faq.question}</span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIndex === globalIndex ? "bg-primary-500/20" : "bg-white/5"}`}>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openIndex === globalIndex ? "rotate-180 text-primary-400" : "text-zinc-400"}`} />
                      </div>
                    </button>
                    
                    <div 
                      className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                        openIndex === globalIndex ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-zinc-400 text-base md:text-lg leading-relaxed border-t border-white/5 pt-6 font-light">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 text-zinc-500"
              >
                No questions found matching "{searchQuery}".
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CTA Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-white/10 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.1)_0%,transparent_70%)] pointer-events-none" />
          
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Didn't find what you were looking for?</h3>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Our team is ready to answer any specific questions you have about our process, your unique situation, or our pricing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/pricing" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-bold transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]">
              View Pricing
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://wa.me/917887096421?text=Hi,%20I%20have%20a%20question%20about%20Career%20Catalyst%20services." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-bold transition-all">
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
