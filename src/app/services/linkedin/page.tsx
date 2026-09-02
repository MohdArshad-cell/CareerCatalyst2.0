"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Star, ArrowLeft, TrendingUp, Search, ShieldCheck } from "lucide-react";
import Link from "next/link";

const Footer = dynamic(() => import("@/components/Footer").then(mod => mod.Footer));

export default function LinkedinServicePage() {
  const [isOptimized, setIsOptimized] = useState(true);

  return (
    <main className="min-h-screen bg-background relative z-10 overflow-x-hidden pt-24 md:pt-32">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-indigo-900/10 blur-[150px] rounded-full pointer-events-none z-0" />
      
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
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
            <span className="text-sm font-medium text-zinc-300 tracking-wide uppercase">Core Deliverable</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            LinkedIn Profile <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">SEO</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed">
            We re-index your LinkedIn profile for recruiter search queries, optimizing your headline, summary, and experience sections to trigger algorithmic matches.
          </p>
        </div>

        {/* Option 1: Interactive "Before & After" Profile Reveal */}
        <div className="mb-24">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">See the Transformation</h2>
            <p className="text-zinc-400">Toggle between a standard profile and a recruiter-magnet profile.</p>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="bg-zinc-900/50 p-1.5 rounded-full border border-white/10 inline-flex">
              <button 
                onClick={() => setIsOptimized(false)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${!isOptimized ? 'bg-zinc-800 text-white shadow-lg' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                Before Optimization
              </button>
              <button 
                onClick={() => setIsOptimized(true)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${isOptimized ? 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                After Optimization
              </button>
            </div>
          </div>

          <motion.div 
            layout
            className={`relative bg-zinc-950/80 backdrop-blur-xl border ${isOptimized ? 'border-indigo-500/50 shadow-[0_0_40px_rgba(99,102,241,0.15)]' : 'border-white/10 shadow-xl'} rounded-3xl p-8 overflow-hidden transition-colors duration-500 max-w-3xl mx-auto`}
          >
            {isOptimized && <div className="absolute inset-0 bg-indigo-600/5 pointer-events-none" />}
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6 pb-6 border-b border-white/10 relative z-10">
              <div className={`w-24 h-24 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${isOptimized ? 'bg-gradient-to-br from-indigo-500 to-purple-600 shadow-[0_0_20px_rgba(99,102,241,0.4)]' : 'bg-zinc-800'}`}>
                <Star className={`w-10 h-10 ${isOptimized ? 'text-white' : 'text-zinc-600'}`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div className="text-2xl font-bold text-white mb-1">Alex Engineer</div>
                  {isOptimized && <ShieldCheck className="w-5 h-5 text-indigo-400" />}
                </div>
                
                <motion.div 
                  key={isOptimized ? "after-title" : "before-title"}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-lg font-medium mb-2 ${isOptimized ? 'text-indigo-400' : 'text-zinc-400'}`}
                >
                  {isOptimized 
                    ? "Senior Frontend Engineer | React, TypeScript, Next.js | Scaled Web Apps to 1M+ Users" 
                    : "Software Engineer at XYZ"}
                </motion.div>
                
                <div className="text-sm text-zinc-500">San Francisco Bay Area · {isOptimized ? '500+ connections' : '150 connections'}</div>
              </div>
            </div>

            <div className="space-y-4 relative z-10 min-h-[120px]">
              <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-3">About</div>
              <motion.div 
                key={isOptimized ? "after-about" : "before-about"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-zinc-300 text-sm leading-relaxed"
              >
                {isOptimized ? (
                  <p>Product-focused Senior Frontend Engineer with 6+ years of experience building scalable web applications. Expert in <strong>React ecosystem (Next.js, Redux, TypeScript)</strong> and modern cloud architecture. Led a team of 4 engineers to migrate legacy monolithic architecture to microservices, improving page load speed by 40% and boosting conversion rates.</p>
                ) : (
                  <p>I am a software developer with experience in coding web applications. I like working in teams and learning new technologies. Always looking for new opportunities.</p>
                )}
              </motion.div>
            </div>

            {isOptimized && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-6 pt-6 border-t border-white/10"
              >
                <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Algorithm-Indexed Keywords</div>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {["React", "System Architecture", "AWS", "Node.js", "GraphQL", "TypeScript", "Microservices"].map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 rounded-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Option 4: The "Recruiter Heatmap" Visualization */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-white mb-6">The Recruiter Dashboard View</h3>
              <p className="text-zinc-400 leading-relaxed mb-6 text-lg">
                Recruiters use LinkedIn Recruiter Pro to search for candidates using strict Boolean queries. If your profile doesn't have the exact keywords they search for, you won't appear in their results.
              </p>
              <ul className="space-y-4">
                {[
                  "Headline keyword stuffing (tastefully)",
                  "Impact-driven About section",
                  "Project taglines & Feature linking",
                  "Skill endorsement mapping"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center text-zinc-300">
                    <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-indigo-400" /> 
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="bg-[#1D2226] border border-white/5 rounded-xl shadow-2xl overflow-hidden font-sans">
                {/* Mock LinkedIn Recruiter Header */}
                <div className="bg-[#000000] px-4 py-3 flex items-center gap-4 border-b border-white/10">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-white text-xs">IN</div>
                  <div className="flex-1 bg-white/10 rounded overflow-hidden flex items-center px-3 py-1.5">
                    <Search className="w-4 h-4 text-white/50 mr-2" />
                    <span className="text-white/80 text-sm">"React" AND "AWS" AND "TypeScript"</span>
                  </div>
                </div>
                
                {/* Mock Search Result */}
                <div className="p-5">
                  <div className="flex gap-4">
                    <div className="w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center shrink-0 border-2 border-green-500 relative">
                      <Star className="w-6 h-6 text-white" />
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#1D2226] rounded-full"></div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-white font-semibold hover:underline cursor-pointer">Alex Engineer</h4>
                        <span className="text-xs px-2 py-0.5 bg-yellow-500/20 text-yellow-500 rounded">Open to work</span>
                      </div>
                      <p className="text-zinc-300 text-sm mt-1">
                        Senior Frontend Engineer | <span className="bg-yellow-500/30 text-yellow-200 px-1 rounded">React</span>, <span className="bg-yellow-500/30 text-yellow-200 px-1 rounded">TypeScript</span>, Next.js | Scaled Web Apps
                      </p>
                      <p className="text-zinc-500 text-xs mt-1">San Francisco Bay Area</p>
                      
                      <div className="mt-3 text-xs text-zinc-400">
                        <span className="text-zinc-300 font-medium">Past:</span> Software Engineer at Amazon · Experience with <span className="bg-yellow-500/30 text-yellow-200 px-1 rounded">AWS</span> Cloud...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Option 2: Search Appearance "Spike" Graph 📈 */}
        <div className="mb-24 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/20 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="max-w-2xl mx-auto relative z-10">
            <TrendingUp className="w-12 h-12 text-indigo-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">Proven SEO Results</h3>
            <p className="text-zinc-400 mb-10">
              Our clients typically see a 300%+ increase in recruiter reachouts and search appearances within the first two weeks of optimization.
            </p>
            
            {/* Animated Graph Illustration */}
            <div className="h-48 flex items-end justify-center gap-2 md:gap-4 border-b border-l border-white/20 pb-0 pl-4 pt-8">
              {[2, 3, 2, 4, 3, 5, 12, 18, 15, 24, 32].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height * 3}%` }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: i * 0.1, type: "spring" }}
                  className={`w-6 md:w-10 rounded-t-sm ${i > 5 ? 'bg-gradient-to-t from-indigo-600 to-purple-400 shadow-[0_0_15px_rgba(99,102,241,0.5)]' : 'bg-white/10'}`}
                >
                  {i === 6 && (
                    <div className="absolute -top-10 -ml-12 w-32 text-center text-xs text-indigo-300 font-bold hidden md:block">
                      Optimization Applied
                      <div className="w-0.5 h-6 bg-indigo-500/50 mx-auto mt-1" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-zinc-500 px-4">
              <span>Week 1</span>
              <span>Week 2</span>
              <span>Week 3</span>
              <span>Week 4</span>
            </div>
          </div>
        </div>

        {/* Option 3: LinkedIn Banner Design Showcase */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Premium Banner Designs</h2>
            <p className="text-zinc-400">Included in the service: A custom, professionally designed LinkedIn cover photo that instantly establishes authority.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "The Executive", desc: "Clean, corporate, authoritative.", gradient: "from-slate-800 to-zinc-900" },
              { title: "The Tech Lead", desc: "Code aesthetics, modern, sharp.", gradient: "from-indigo-900 to-slate-900" },
              { title: "The Creator", desc: "Bold, personal brand focused.", gradient: "from-purple-900 to-indigo-900" }
            ].map((banner, i) => (
              <div key={i} className="bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden group">
                <div className={`h-32 bg-gradient-to-r ${banner.gradient} relative overflow-hidden flex items-center justify-center`}>
                  {/* Abstract shapes for banner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12 blur-xl" />
                  
                  <div className="text-white/20 font-bold tracking-widest uppercase text-sm">
                    {banner.title}
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-bold text-white mb-1">{banner.title}</h4>
                  <p className="text-sm text-zinc-400">{banner.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Option 5: Fix the Call-to-Action (WhatsApp) */}
        <div className="text-center bg-zinc-900/50 border border-white/10 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to rank at the top?</h2>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
            Stop missing out on high-paying opportunities because recruiters can't find you. Let's optimize your profile today.
          </p>
          <a 
            href="https://wa.me/917887096421?text=Hi,%20I'm%20interested%20in%20the%20LinkedIn%20Optimization%20service"
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
