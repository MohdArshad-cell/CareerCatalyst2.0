import { getBlogPosts } from "@/lib/blog";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, BookOpen } from "lucide-react";

const Footer = dynamic(() => import("@/components/Footer").then(mod => mod.Footer));

export default function BlogIndex() {
  const posts = getBlogPosts();

  return (
    <main className="min-h-screen bg-background relative z-10 overflow-x-hidden pt-24 md:pt-32 flex flex-col items-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-primary-900/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="w-full mx-auto px-6 md:px-12 max-w-5xl relative z-10 mb-32">
        
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono uppercase tracking-widest mb-8 backdrop-blur-md">
            <BookOpen className="w-4 h-4 text-primary-400" />
            Resource Hub
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Engineering Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-emerald-400 drop-shadow-[0_0_30px_rgba(45,212,191,0.3)]">Insights</span>
          </h1>
          
          <p className="text-lg text-zinc-400 max-w-2xl text-center font-light mb-10">
            Learn exactly how ATS systems work, how recruiters search on LinkedIn, and how to engineer a portfolio that guarantees interviews.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-primary-500/50 hover:bg-zinc-900/80 transition-all duration-300">
              <div className="p-8 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-400 bg-primary-900/30 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-zinc-500 font-mono">
                    {post.readTime}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-zinc-400 leading-relaxed mb-8 flex-grow">
                  {post.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                  <span className="text-sm text-zinc-500">
                    {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-colors">
                    <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
