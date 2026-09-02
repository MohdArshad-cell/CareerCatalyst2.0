"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ArrowLeft, Code2, Layout, Zap, Search, Eye, Monitor } from "lucide-react";
import Link from "next/link";

const Footer = dynamic(() => import("@/components/Footer").then(mod => mod.Footer));

export default function PortfolioServicePage() {
  const [isCoded, setIsCoded] = useState(true);

  return (
    <main className="min-h-screen bg-background relative z-10 overflow-x-hidden pt-24 md:pt-32">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-emerald-900/10 blur-[150px] rounded-full pointer-events-none z-0" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 mb-24">
        <Link href="/services" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-12 mt-4 font-medium group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </Link>

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
            <span className="text-sm font-medium text-zinc-300 tracking-wide uppercase">Core Deliverable</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Modern Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Portfolio</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed">
            A blazingly fast Next.js and Tailwind CSS portfolio. Complete with 3D elements, interactive project demos, and a custom domain architecture breakdown.
          </p>
        </div>

        {/* Option 1: Code vs Drag and Drop */}
        <div className="mb-24">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Wix is a Red Flag 🚩</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              If you are applying for a software engineering role, your portfolio *is* a technical interview. Using a drag-and-drop builder tells hiring managers you can't code a real web application.
            </p>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="bg-zinc-900/50 p-1.5 rounded-full border border-white/10 inline-flex">
              <button 
                onClick={() => setIsCoded(false)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${!isCoded ? 'bg-zinc-800 text-white shadow-lg' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                Template Builder (Bad)
              </button>
              <button 
                onClick={() => setIsCoded(true)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${isCoded ? 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                Next.js Code (Good)
              </button>
            </div>
          </div>

          <motion.div 
            layout
            className={`relative border ${isCoded ? 'bg-zinc-950/80 border-emerald-500/50 shadow-[0_0_40px_rgba(16,185,129,0.15)]' : 'bg-white border-zinc-300 shadow-xl'} rounded-3xl p-1 overflow-hidden transition-colors duration-500 max-w-4xl mx-auto h-[400px] flex flex-col`}
          >
            {/* Browser Header */}
            <div className={`h-10 flex items-center px-4 gap-2 border-b ${isCoded ? 'bg-zinc-900 border-white/10' : 'bg-zinc-100 border-zinc-200'} shrink-0`}>
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className={`ml-4 text-xs font-mono px-3 py-1 rounded-md ${isCoded ? 'bg-black/50 text-emerald-400' : 'bg-white text-zinc-500 border border-zinc-200'}`}>
                {isCoded ? 'localhost:3000' : 'my-site-123.wixsite.com'}
              </div>
            </div>

            {/* Content Area */}
            <div className={`flex-1 overflow-hidden relative ${isCoded ? 'bg-[#0a0a0a]' : 'bg-zinc-50'}`}>
              {isCoded ? (
                <div className="p-8 h-full flex flex-col justify-center items-center relative">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent pointer-events-none" />
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center z-10"
                  >
                    <div className="text-emerald-400 font-mono text-sm mb-4">{"<Portfolio />"}</div>
                    <h3 className="text-4xl font-bold text-white mb-4 tracking-tight">John Developer</h3>
                    <p className="text-zinc-400 max-w-md mx-auto mb-8 font-light">Building digital products, brands, and experience with modern web technologies.</p>
                    <div className="flex gap-4 justify-center">
                      <div className="px-6 py-2 rounded-full bg-white text-black font-semibold text-sm">View Work</div>
                      <div className="px-6 py-2 rounded-full border border-white/20 text-white font-semibold text-sm">Contact</div>
                    </div>
                  </motion.div>
                </div>
              ) : (
                <div className="p-8 h-full flex flex-col items-center">
                  <div className="w-full h-12 bg-white shadow-sm flex items-center justify-between px-6 mb-8 border border-zinc-200">
                    <div className="text-xl font-serif text-zinc-800">My Website</div>
                    <div className="flex gap-4 text-sm text-zinc-500">
                      <span>Home</span>
                      <span>About</span>
                      <span>Services</span>
                    </div>
                  </div>
                  <div className="w-32 h-32 bg-zinc-200 rounded-full mb-6 border-4 border-white shadow-md" />
                  <h3 className="text-2xl text-zinc-800 font-serif mb-2">Hello, I am John.</h3>
                  <p className="text-zinc-500 mb-6">Welcome to my page.</p>
                  <div className="px-8 py-3 bg-zinc-800 text-white rounded">Button</div>
                  
                  {/* Fake builder UI overlay */}
                  <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-dashed border-blue-400 pointer-events-none flex items-center justify-center">
                    <div className="bg-blue-500 text-white text-xs px-2 py-1 absolute -top-3 left-4">Header Section</div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Option 2: Animated Lighthouse Score Dashboard */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Built for Performance</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Our Next.js portfolios are engineered to hit perfect Lighthouse scores. Fast load times prove you understand modern web performance metrics.
            </p>
          </div>
          
          <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
              {[
                { label: "Performance", value: 100 },
                { label: "Accessibility", value: 100 },
                { label: "Best Practices", value: 100 },
                { label: "SEO", value: 100 }
              ].map((metric, i) => (
                <div key={i} className="flex flex-col items-center justify-center">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4">
                    {/* Background Circle */}
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                      {/* Animated Progress Circle */}
                      <motion.circle 
                        cx="50" 
                        cy="50" 
                        r="45" 
                        fill="none" 
                        stroke="#10B981" 
                        strokeWidth="8"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: "0 283" }}
                        whileInView={{ strokeDasharray: "283 283" }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1 + (i * 0.2) }}
                        className="text-2xl md:text-3xl font-bold text-emerald-400 font-mono"
                      >
                        {metric.value}
                      </motion.span>
                    </div>
                  </div>
                  <span className="text-zinc-300 font-medium tracking-wide text-sm md:text-base text-center">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Option 3: Interactive Tech Stack Visualizer */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">The Modern Stack</h3>
              <p className="text-zinc-400 leading-relaxed mb-8">
                We build your bespoke web application using the industry-standard React stack. It proves you understand component-driven architecture, deployment pipelines, and responsive design.
              </p>
              <ul className="space-y-4">
                {[
                  { title: "Next.js App Router", icon: Layout },
                  { title: "React & TypeScript", icon: Code2 },
                  { title: "Tailwind CSS & Framer Motion", icon: Zap },
                  { title: "Vercel CI/CD Deployment", icon: Monitor }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center text-zinc-300">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="font-medium">{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative h-[400px] flex items-center justify-center bg-black/40 border border-white/10 rounded-3xl overflow-hidden group perspective-1000">
              <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Floating Tech Badges */}
              <motion.div 
                animate={{ y: [0, -15, 0] }} 
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-16 left-16 px-4 py-2 bg-black border border-white/20 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center gap-2 rotate-[-5deg]"
              >
                <div className="w-3 h-3 rounded-full bg-blue-400" />
                <span className="text-white font-bold text-sm tracking-widest">REACT</span>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 15, 0] }} 
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-12 px-4 py-2 bg-black border border-white/20 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center gap-2 rotate-[8deg]"
              >
                <div className="w-3 h-3 rounded-full bg-sky-400" />
                <span className="text-white font-bold text-sm tracking-widest">TAILWIND</span>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-24 right-12 px-4 py-2 bg-black border border-white/20 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center gap-2 rotate-[12deg]"
              >
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="text-white font-bold text-sm tracking-widest">JS / TS</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0] }} 
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-16 right-16 px-4 py-2 bg-black border border-white/20 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center gap-2 rotate-[-10deg]"
              >
                <div className="w-3 h-3 bg-white" />
                <span className="text-white font-bold text-sm tracking-widest">NEXT.JS</span>
              </motion.div>

              {/* Central Core */}
              <div className="w-32 h-32 rounded-full border border-emerald-500/30 flex items-center justify-center relative shadow-[0_0_50px_rgba(16,185,129,0.2)]">
                <div className="absolute inset-0 rounded-full border-t-2 border-emerald-400 animate-spin" style={{ animationDuration: '3s' }} />
                <div className="absolute inset-2 rounded-full border-b-2 border-teal-400 animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
                <Code2 className="w-12 h-12 text-emerald-400 relative z-10" />
              </div>
            </div>
          </div>
        </div>

        {/* Option 4: Project Case Study Preview */}
        <div className="mb-24">
           <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">We Present Your Code Properly</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              A GitHub link isn't enough. We design mini "Case Studies" for your top projects, breaking down the architecture and business impact so recruiters instantly understand your value.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-zinc-950 border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
             {/* Mock Project Layout */}
             <div className="flex flex-col md:flex-row gap-8">
               <div className="w-full md:w-1/3 space-y-6">
                 <div className="w-full aspect-video bg-zinc-900 rounded-lg border border-white/5 flex items-center justify-center">
                    <Monitor className="w-8 h-8 text-zinc-600" />
                 </div>
                 <div>
                   <h4 className="text-white font-bold text-xl mb-2">E-Commerce Microservices</h4>
                   <p className="text-zinc-500 text-sm">Full-stack platform built with scalable architecture.</p>
                 </div>
                 <div className="flex flex-wrap gap-2">
                   {["React", "Node.js", "Docker", "AWS"].map(t => (
                     <span key={t} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-zinc-300">{t}</span>
                   ))}
                 </div>
               </div>
               
               <div className="w-full md:w-2/3 space-y-6 flex flex-col justify-center">
                 <div className="space-y-2">
                    <div className="text-xs font-bold text-emerald-500 tracking-widest uppercase">The Architecture</div>
                    <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-emerald-500/50 rounded-full" />
                    </div>
                    <p className="text-sm text-zinc-400">Decoupled frontend from backend using RESTful APIs, Containerized with Docker and deployed via ECS.</p>
                 </div>
                 
                 <div className="space-y-2">
                    <div className="text-xs font-bold text-blue-500 tracking-widest uppercase">The Impact</div>
                    <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-blue-500/50 rounded-full" />
                    </div>
                    <p className="text-sm text-zinc-400">Reduced deployment time by 40% and handled 10,000+ concurrent users during peak traffic with 99.9% uptime.</p>
                 </div>

                 <div className="pt-4 flex gap-4">
                    <div className="flex items-center gap-2 text-sm text-emerald-400 cursor-not-allowed">
                      <Eye className="w-4 h-4" /> Live Demo
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-400 cursor-not-allowed">
                      <Code2 className="w-4 h-4" /> Source Code
                    </div>
                 </div>
               </div>
             </div>
          </div>
        </div>

        {/* Option 5: Standardize WhatsApp CTA */}
        <div className="text-center bg-zinc-900/50 border border-white/10 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to deploy?</h2>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
            Stop relying on templates. Let's build a custom portfolio that proves you are a top-tier software engineer.
          </p>
          <a 
            href="https://wa.me/917887096421?text=Hi,%20I'm%20interested%20in%20the%20Portfolio%20Development%20service"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-lg rounded-full transition-all shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_50px_rgba(37,211,102,0.5)] group"
          >
            Message on WhatsApp
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
