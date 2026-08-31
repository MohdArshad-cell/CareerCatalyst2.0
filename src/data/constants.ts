import { CheckCircle2, Zap } from "lucide-react";

export const atsStandardLogs = [
  { text: "Scanning standard_resume.pdf...", type: "info", delay: 500 },
  { text: "[WARN] Unreadable column layout detected.", type: "warn", delay: 1200 },
  { text: "[ERROR] Keyword 'React' not parsed.", type: "error", delay: 2000 },
  { text: "[ERROR] Keyword 'Next.js' not parsed.", type: "error", delay: 2800 },
  { text: "Calculating ATS Match Score...", type: "info", delay: 3500 },
  { text: "RESULT: 12% Match. Auto-Rejecting.", type: "error", delay: 4500 },
];

export const atsOptimizedLogs = [
  { text: "Scanning us_tech_optimized_resume.tex...", type: "info", delay: 500 },
  { text: "[SUCCESS] Single-column LaTeX layout verified.", type: "success", delay: 1200 },
  { text: "[SUCCESS] Parsed keyword 'React' (4 matches).", type: "success", delay: 1800 },
  { text: "[SUCCESS] Parsed keyword 'Next.js' (3 matches).", type: "success", delay: 2400 },
  { text: "Calculating ATS Match Score...", type: "info", delay: 3200 },
  { text: "RESULT: 98% Match. Forwarding to Recruiter.", type: "success", delay: 4200 },
];

export const terminalLines = [
  "> Initializing ATS optimization...",
  "> Injecting keywords: React, Node...",
  "> Re-formatting to LaTeX standard...",
  "> Deploying Next.js portfolio...",
  "> Status: Hired at Top Tech!"
];

export const recentNotifications = [
  { text: "Sarah J. just landed a role at Stripe!", icon: Zap, color: "text-indigo-400" },
  { text: "David M. passed the ATS screening at Google.", icon: CheckCircle2, color: "text-emerald-400" },
  { text: "Michael T. secured an interview at Meta.", icon: Zap, color: "text-blue-400" },
  { text: "Emily R. got hired at Netflix.", icon: Zap, color: "text-red-400" },
  { text: "James K. just optimized their portfolio.", icon: CheckCircle2, color: "text-accent-400" },
];
