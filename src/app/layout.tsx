import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { MouseSpotlight } from "@/components/MouseSpotlight";
import { LiveToasts } from "@/components/LiveToasts";
import { EasterEgg } from "@/components/EasterEgg";
import { FloatingChat } from "@/components/FloatingChat";
import { ExitPopup } from "@/components/ExitPopup";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Career Catalyst | Portfolio & Profile Engineers",
  description: "Turn ghosted applications into top-tier interviews with Career Catalyst. ATS-optimized resumes, recruiter-indexed LinkedIn profiles, and high-impact portfolios.",
  openGraph: {
    title: "Career Catalyst",
    description: "Turn ghosted applications into top-tier interviews with Career Catalyst. ATS-optimized resumes, recruiter-indexed LinkedIn profiles, and high-impact portfolios.",
    images: ["/hero-mockup.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Catalyst",
    description: "Turn ghosted applications into top-tier interviews with Career Catalyst.",
    images: ["/hero-mockup.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} antialiased dark scroll-smooth`}>
      <body className="min-h-screen bg-background text-foreground font-sans relative">
        <MouseSpotlight />
        <Navbar />
        {children}
        <LiveToasts />
        <EasterEgg />
        <FloatingChat />
        <ExitPopup />
      </body>
    </html>
  );
}
