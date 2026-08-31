"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { CheckCircle2, Zap } from "lucide-react";

import { recentNotifications as notifications } from "@/data/constants";

export function LiveToasts() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const showRandomToast = () => {
      const randomIdx = Math.floor(Math.random() * notifications.length);
      setActive(randomIdx);
      
      setTimeout(() => {
        setActive(null);
      }, 5000); // Show for 5 seconds
    };

    // Initial delay before first toast
    const initialTimeout = setTimeout(() => {
      showRandomToast();
      
      // Then loop every 15-30 seconds
      const interval = setInterval(() => {
        showRandomToast();
      }, Math.random() * 15000 + 15000);
      
      return () => clearInterval(interval);
    }, 10000);
    
    return () => clearTimeout(initialTimeout);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-50 pointer-events-none">
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-4 flex items-center gap-4 max-w-sm"
          >
            {(() => {
              const Icon = notifications[active].icon;
              return (
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                  <Icon className={`w-5 h-5 ${notifications[active].color}`} />
                </div>
              );
            })()}
            <div>
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1">Recent Activity</div>
              <div className="text-sm text-zinc-200 font-medium">{notifications[active].text}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
