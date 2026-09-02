"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Tag } from "lucide-react";
import { TiltCard } from "./TiltCard";

const oneTimeTiers = [
  {
    name: "ATS Resume Overhaul",
    price: "$19",
    roi: "< cost of one DoorDash order",
    description: "Perfect for candidates who just need to beat the filters.",
    features: [
      "Full bullet point rewrite (XYZ format)",
      "LaTeX source code + PDF",
      "48h turnaround",
      "1 revision round"
    ],
    highlighted: false,
    cta: "Get ATS Resume",
    billingCycle: "/one-time"
  },
  {
    name: "Job Hunt Accelerator",
    price: "$49",
    roi: "< 0.05% of a typical senior salary",
    description: "The sweet spot. Complete profile overhaul for maximum visibility.",
    features: [
      "ATS Resume Overhaul (Everything in Tier 1)",
      "Complete LinkedIn Profile Revamp",
      "Custom Cover Letter Framework",
      "Keyword Strategy Guide"
    ],
    highlighted: true,
    cta: "Start the Accelerator",
    billingCycle: "/one-time"
  },
  {
    name: "Full Career Stack",
    price: "$99",
    roi: "< 0.1% of a typical senior salary",
    description: "The ultimate package. A complete digital professional footprint.",
    features: [
      "Resume + LinkedIn + Cover Letter",
      "Custom Deployed Web Portfolio",
      "Premium Design & Architecture",
      "Custom Domain setup guide"
    ],
    highlighted: false,
    cta: "Get the Full Stack",
    billingCycle: "/one-time"
  }
];

const monthlyTiers = [
  {
    name: "Interview Prep Lite",
    price: "$49",
    roi: "< cost of one LeetCode premium",
    description: "Monthly access to our private community and ATS scanner.",
    features: [
      "Unlimited ATS Scans",
      "Private Discord Community",
      "Weekly Group Q&A",
      "Resume Templates"
    ],
    highlighted: false,
    cta: "Subscribe Monthly",
    billingCycle: "/month"
  },
  {
    name: "1-on-1 Mentorship",
    price: "$199",
    roi: "High-impact career coaching",
    description: "Direct mentorship to guide you through the entire high-stakes hiring process.",
    features: [
      "Everything in Lite",
      "2x Monthly 1-on-1 Strategy Calls",
      "Mock Interviews (Behavioral & Tech)",
      "Direct Slack Access to Mentors"
    ],
    highlighted: true,
    cta: "Apply for Mentorship",
    billingCycle: "/month"
  },
  {
    name: "Done-For-You Placements",
    price: "$499",
    roi: "We apply for you",
    description: "The ultimate white-glove service. We source, filter, and apply for you.",
    features: [
      "Everything in Mentorship",
      "50x High-Quality Applications/mo",
      "Custom Outreach to Recruiters",
      "Salary Negotiation Support"
    ],
    highlighted: false,
    cta: "Join Waitlist",
    billingCycle: "/month"
  }
];

export function Pricing() {
  const [isMonthly, setIsMonthly] = useState(false);
  const activeTiers = isMonthly ? monthlyTiers : oneTimeTiers;

  return (
    <section id="pricing" className="py-16 md:py-32 relative overflow-hidden flex flex-col items-center">
      {/* Background Glowing Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono uppercase tracking-widest mb-8 backdrop-blur-md"
          >
            <Tag className="w-4 h-4 text-primary-400" />
            Investment
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-bold tracking-tight text-white mb-6 md:mb-8"
          >
            Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-emerald-400 drop-shadow-[0_0_30px_rgba(45,212,191,0.3)]">Pricing Packages</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light mb-12"
          >
            No ambiguous pricing. Simple, flat-rate tiers designed for maximum ROI.
          </motion.p>

          {/* Dynamic Pricing Toggle UI */}
          <div className="flex items-center bg-zinc-900/80 border border-white/10 rounded-full p-1.5 relative z-20 backdrop-blur-xl shadow-2xl">
            <button
              onClick={() => setIsMonthly(false)}
              className={`relative px-8 py-3 text-sm font-bold tracking-widest uppercase rounded-full transition-colors z-10 ${!isMonthly ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}
            >
              One-Time
              {!isMonthly && (
                <motion.div
                  layoutId="pricing-toggle"
                  className="absolute inset-0 bg-primary-600 rounded-full -z-10 shadow-[0_0_20px_rgba(99,102,241,0.5)]"
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                />
              )}
            </button>
            <button
              onClick={() => setIsMonthly(true)}
              className={`relative px-8 py-3 text-sm font-bold tracking-widest uppercase rounded-full transition-colors z-10 ${isMonthly ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}
            >
              Monthly Mentorship
              {isMonthly && (
                <motion.div
                  layoutId="pricing-toggle"
                  className="absolute inset-0 bg-primary-600 rounded-full -z-10 shadow-[0_0_20px_rgba(99,102,241,0.5)]"
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                />
              )}
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch relative" style={{ perspective: "2000px" }}>
          {activeTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="h-full flex flex-col"
            >
              <TiltCard
                className={`group relative rounded-3xl p-10 backdrop-blur-xl transition-all duration-500 h-full flex flex-col hover:-translate-y-4 ${tier.highlighted
                  ? "md:-translate-y-4 shadow-[0_0_50px_rgba(99,102,241,0.3)] hover:shadow-[0_0_80px_rgba(99,102,241,0.5)] z-10"
                  : "bg-zinc-950/50 border border-white/10 hover:border-white/20 shadow-2xl"
                  }`}
              >
                {tier.highlighted && (
                  <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(99,102,241,1)_360deg)] animate-[spin_3s_linear_infinite]" />
                    <div className="absolute inset-[2px] bg-zinc-950 rounded-[22px]" />
                  </div>
                )}

                <div className="relative z-10 flex flex-col h-full">
                  {tier.highlighted && (
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-1.5 rounded-full text-xs font-bold tracking-widest shadow-[0_0_20px_rgba(99,102,241,0.5)] uppercase border border-white/20 whitespace-nowrap">
                      BEST VALUE
                    </div>
                  )}

                  <div className="mb-8 mt-2">
                    <h3 className="text-2xl font-bold text-white mb-3">{tier.name}</h3>
                    <p className="text-zinc-400 text-sm h-12 leading-relaxed font-light">{tier.description}</p>
                  </div>

                  <div className="mb-2 flex items-baseline gap-2">
                    <span className="text-6xl font-bold text-white tracking-tight">{tier.price}</span>
                    <span className="text-zinc-500 font-mono text-sm">{tier.billingCycle}</span>
                  </div>

                  <div className="mb-10 text-emerald-400 font-mono text-xs font-medium bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded w-fit">
                    {tier.roi}
                  </div>

                  <ul className="space-y-5 mb-10 flex-grow">
                    {tier.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex gap-4 items-start">
                        <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${tier.highlighted ? "text-primary-400 drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]" : "text-accent-500 opacity-80"}`} />
                        <span className="text-zinc-300 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/917887096421?text=${encodeURIComponent(`Hi, I'm interested in the ${tier.name} package.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full mt-auto py-5 rounded-2xl font-bold transition-all flex items-center justify-center uppercase tracking-widest text-sm relative overflow-hidden ${tier.highlighted
                      ? "bg-primary-600/20 text-primary-300 hover:text-white border border-primary-500/50 hover:bg-primary-600 shadow-[0_0_30px_rgba(99,102,241,0.2)]"
                      : "bg-white/5 text-zinc-300 hover:text-white border border-white/10 hover:bg-white/10 hover:border-white/20"
                      }`}
                  >
                    {tier.highlighted && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                    )}
                    {tier.cta}
                  </a>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
            <span className="text-red-400 text-sm font-bold tracking-widest uppercase">Only 5 spots left this week</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
