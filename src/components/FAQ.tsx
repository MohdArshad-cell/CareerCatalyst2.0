"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

const faqs = [
  {
    question: "Will my resume pass ATS parsers like Workday and Greenhouse?",
    answer: "Yes, we use standard single-column LaTeX templates designed strictly to parse cleanly without tables, complex columns, or graphics that break parsers."
  },
  {
    question: "Do you use generic AI/ChatGPT templates?",
    answer: "No. Every bullet point is manually refactored using engineering-specific metrics and the Google XYZ framework to ensure authenticity and impact."
  },
  {
    question: "What is the turnaround time?",
    answer: "48 hours from receiving your complete background details via our onboarding form."
  },
  {
    question: "Can I see a sample of your work before paying?",
    answer: "Absolutely. We provide anonymized samples of our optimized LaTeX resumes and Next.js portfolios upon request. Just shoot us an email."
  },
  {
    question: "Do you offer refunds if I don't get interviews?",
    answer: "We guarantee an increase in your ATS match score and LinkedIn search appearances. If you don't see a measurable improvement in recruiter visibility within 60 days, we'll rewrite your assets for free."
  },
  {
    question: "What if I'm not in the US yet?",
    answer: "Our service is heavily tailored for the US job market, targeting US recruiter search patterns and formatting expectations. We can help you prepare your profile before you arrive."
  },
  {
    question: "Do you help with interview prep too?",
    answer: "We focus exclusively on the top of the funnel: getting you the interview. For interview prep, we can recommend specialized engineering prep services."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 relative overflow-hidden flex flex-col items-center">
      {/* Background radial fade */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full mx-auto px-6 md:px-12 max-w-4xl relative z-10">
        <div className="text-center mb-24 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono uppercase tracking-widest mb-8 backdrop-blur-md"
          >
            <MessageCircleQuestion className="w-4 h-4 text-primary-400" />
            Common Questions
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
          >
            Every Question, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-emerald-400 drop-shadow-[0_0_30px_rgba(45,212,191,0.3)]">Answered.</span>
          </motion.h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border rounded-3xl overflow-hidden backdrop-blur-md transition-colors duration-300 ${
                openIndex === index ? "bg-zinc-950/80 border-primary-500/30 shadow-[0_0_30px_rgba(99,102,241,0.1)]" : "bg-white/5 border-white/10 hover:border-white/20"
              }`}
            >
              <button
                className="w-full px-8 py-8 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-bold text-xl transition-colors ${openIndex === index ? "text-primary-300" : "text-white"}`}>{faq.question}</span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIndex === index ? "bg-primary-500/20" : "bg-white/5"}`}>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-primary-400" : "text-zinc-400"}`} />
                </div>
              </button>
              
              <div 
                className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-64 pb-8 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-zinc-400 text-lg leading-relaxed border-t border-white/5 pt-6 font-light">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a href="mailto:hello@careercatalyst.com" className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-bold transition-all border border-white/10 hover:border-white/20 hover:-translate-y-1">
            <MessageCircleQuestion className="w-5 h-5 text-accent-400" />
            Still have questions? Chat with us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
