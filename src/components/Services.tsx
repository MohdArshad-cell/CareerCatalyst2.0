"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FileText, Search, LayoutTemplate, CheckCircle2, ArrowUpRight } from "lucide-react";
import React, { MouseEvent, useRef } from "react";

const services = [
  {
    icon: FileText,
    title: "High-Impact ATS Resume Overhaul",
    price: "$19",
    glowColor: "rgba(59, 130, 246, 0.15)", // blue-500
    iconColor: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    features: [
      { label: "Format", desc: <>Industry-standard <span className="text-blue-400 font-semibold bg-blue-400/10 px-1.5 py-0.5 rounded border border-blue-400/20">single-column LaTeX</span> / clean formatting.</> },
      { label: "Content", desc: <>Action-Verb + Context + <span className="text-white font-semibold bg-white/10 px-1.5 py-0.5 rounded">Metric (XYZ Framework).</span></> },
      { label: "Optimization", desc: <>Hard tech stack mapping matching <span className="text-blue-400 font-semibold bg-blue-400/10 px-1.5 py-0.5 rounded border border-blue-400/20">current US job descriptions.</span></> },
    ]
  },
  {
    icon: Search,
    title: "LinkedIn Profile SEO & Positioning",
    price: "$39",
    glowColor: "rgba(99, 102, 241, 0.15)", // indigo-500
    iconColor: "text-indigo-400",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/20",
    features: [
      { label: "Headline & Summary", desc: <><span className="text-indigo-400 font-semibold bg-indigo-400/10 px-1.5 py-0.5 rounded border border-indigo-400/20">High-ranking search keywords</span> for US technical recruiters.</> },
      { label: "Experience", desc: <>Bullet points tailored to show <span className="text-white font-semibold bg-white/10 px-1.5 py-0.5 rounded">leadership and engineering depth.</span></> },
      { label: "Featured Section", desc: <>Best projects and <span className="text-indigo-400 font-semibold bg-indigo-400/10 px-1.5 py-0.5 rounded border border-indigo-400/20">proof-of-work highlight.</span></> },
    ]
  },
  {
    icon: LayoutTemplate,
    title: "Fast-Loading Modern Developer Portfolio",
    price: "$69",
    glowColor: "rgba(16, 185, 129, 0.15)", // emerald-500
    iconColor: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    features: [
      { label: "Tech Stack", desc: <>Modern responsive UI <span className="text-emerald-400 font-semibold bg-emerald-400/10 px-1.5 py-0.5 rounded border border-emerald-400/20">(Next.js / Tailwind CSS).</span></> },
      { label: "Content", desc: <>Interactive demos, live links, and <span className="text-white font-semibold bg-white/10 px-1.5 py-0.5 rounded">GitHub architecture breakdown.</span></> },
      { label: "Conversion", desc: <><span className="text-emerald-400 font-semibold bg-emerald-400/10 px-1.5 py-0.5 rounded border border-emerald-400/20">Direct Calendly/email</span> contact integration.</> },
    ]
  }
];

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 40 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    mouseX.set(clientX);
    mouseY.set(clientY);

    const xPct = clientX / width - 0.5;
    const yPct = clientY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = service.icon;

  return (
    <motion.a
      href="/services#pricing"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="block group relative rounded-[2rem] bg-zinc-950 p-8 flex flex-col border border-white/5 hover:border-white/10 transition-colors duration-300 shadow-xl"
    >
      {/* Dynamic Hover Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              ${service.glowColor},
              transparent 80%
            )
          `,
        }}
      />

      {/* Floating Content wrapper for 3D effect */}
      <div style={{ transform: "translateZ(30px)" }} className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between mb-8">
          <div className={`w-14 h-14 ${service.bgColor} ${service.borderColor} border rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
            <Icon className={`w-7 h-7 ${service.iconColor}`} />
          </div>
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-6 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-colors duration-300">
          {service.title}
        </h3>

        <ul className="space-y-4 mt-auto">
          {service.features.map((feature, fIndex) => (
            <motion.li
              key={fIndex}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + fIndex * 0.05, duration: 0.3 }}
              className="flex gap-4 group/item items-start"
            >
              <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${service.iconColor} opacity-50 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all duration-300`} />
              <div>
                <strong className="block text-zinc-200 text-sm mb-0.5 group-hover/item:text-white transition-colors duration-300">
                  {feature.label}
                </strong>
                <span className="text-zinc-400 text-sm leading-relaxed block">
                  {feature.desc}
                </span>
              </div>
            </motion.li>
          ))}
        </ul>

        <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between group-hover:border-white/10 transition-colors duration-300">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest group-hover:text-zinc-400 transition-colors">Starting at</span>
          <span className="text-xl font-bold text-white tracking-tight">{service.price}</span>
        </div>
      </div>
    </motion.a>
  );
}

export function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden bg-black">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-indigo-500/30 to-emerald-500/30 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-sm font-medium text-zinc-300 tracking-wide uppercase">Core Architecture</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8 tracking-tight"
          >
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-emerald-400">3-Pillar Framework</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-400 leading-relaxed"
          >
            Three precision-engineered deliverables. One unstoppable job seeker.
          </motion.p>
        </div>

        {/* Use perspective to enable 3D transform children */}
        <div className="grid lg:grid-cols-3 gap-8" style={{ perspective: "2000px" }}>
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
