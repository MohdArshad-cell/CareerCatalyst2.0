"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Calendar, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer id="booking" className="pt-24 pb-12 bg-black border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-primary-600/10 blur-[100px] pointer-events-none" />

      <div className="w-full mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        
        {/* Massive Pre-Footer CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-900/40 to-black border border-primary-500/30 rounded-[2.5rem] p-12 md:p-16 text-center max-w-5xl mx-auto mb-24 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-primary-500/10 blur-[100px] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Stop Getting Ghosted.</h2>
            <p className="text-xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Select a package today and let us transform your digital footprint to bypass ATS filters and secure top-tier interviews.
            </p>
            <a href="/#pricing" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-primary-600 hover:bg-primary-500 text-white font-bold text-lg rounded-2xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] hover:-translate-y-1">
              Select Your Package
            </a>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          
          {/* Booking Form / Lead Capture */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Get Your Free Profile Audit</h3>
            <p className="text-zinc-400 mb-8">Submit your current resume and target roles. We'll get back to you within 24 hours.</p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-zinc-400 font-medium">Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-zinc-400 font-medium">Email / WhatsApp</label>
                  <input type="text" placeholder="john@example.com" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-zinc-400 font-medium">Target Role & Level</label>
                <input type="text" placeholder="e.g. SDE II, Backend Engineer" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-zinc-400 font-medium">Current Resume Link (Google Drive / DropBox)</label>
                <input type="url" placeholder="https://..." className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" />
              </div>
              <button type="submit" className="w-full py-4 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)] mt-4">
                Request Free Audit
              </button>
              <p className="text-xs text-zinc-500 text-center mt-4 pt-2">We never share your data. Period.</p>
            </form>
          </motion.div>

          {/* Direct Contact & Payment Badges */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Ready to transform your applications?</h3>
            <p className="text-zinc-400 mb-8 font-light">Join <span className="text-white font-bold">100+ engineers</span> who stopped getting ghosted and landed their dream roles.</p>
            
            <div className="space-y-6 mb-12">
              <a href="#" className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-primary-500/20 group-hover:border-primary-500/50 transition-colors">
                  <Calendar className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <div className="font-semibold text-lg">Schedule a Call via Calendly</div>
                  <div className="text-sm text-zinc-500">Pick a 15-min slot that works for you.</div>
                </div>
              </a>
              
              <a href="mailto:hello@careercatalyst.com" className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-primary-500/20 group-hover:border-primary-500/50 transition-colors">
                  <Mail className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <div className="font-semibold text-lg">hello@careercatalyst.com</div>
                  <div className="text-sm text-zinc-500">Direct email support.</div>
                </div>
              </a>
            </div>

            <div>
              <p className="text-sm text-zinc-500 mb-4 font-medium uppercase tracking-wider">Trusted Payment Partners</p>
              <div className="flex gap-4">
                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white font-bold text-sm">Stripe</div>
                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white font-bold text-sm">PayPal</div>
                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white font-bold text-sm">Razorpay</div>
              </div>
            </div>
          </motion.div>

        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-zinc-500 text-sm">
            <span>© {new Date().getFullYear()} Career Catalyst. All rights reserved.</span>
            <a href="/services" className="hover:text-white transition-colors">Services Details</a>
          </div>
          <div className="flex items-center gap-4 text-zinc-500">
            <a href="#" className="hover:text-white transition-colors"><Globe className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
