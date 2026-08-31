import { getBlogPosts, getBlogPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowLeft } from "lucide-react";

const Footer = dynamic(() => import("@/components/Footer").then(mod => mod.Footer));

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background relative z-10 overflow-x-hidden pt-24 md:pt-32 flex flex-col items-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-primary-900/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <article className="w-full mx-auto px-6 md:px-12 max-w-4xl relative z-10 mb-32">
        
        {/* Back Link */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-12 group">
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-colors border border-white/10 group-hover:border-primary-500">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          </div>
          <span className="font-mono text-sm uppercase tracking-widest">Back to Hub</span>
        </Link>

        {/* Post Header */}
        <header className="mb-16 pb-16 border-b border-white/10 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-400 bg-primary-900/30 px-3 py-1 rounded-full border border-primary-500/20">
              {post.metadata.category}
            </span>
            <span className="text-xs text-zinc-500 font-mono">
              {post.metadata.readTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
            {post.metadata.title}
          </h1>

          <div className="flex items-center justify-center gap-4 text-zinc-400">
            <span className="font-medium text-white">{post.metadata.author}</span>
            <span className="w-1 h-1 rounded-full bg-zinc-700" />
            <span>{new Date(post.metadata.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
          </div>
        </header>

        {/* Markdown Content rendered via Tailwind Typography */}
        <div className="prose prose-invert prose-lg md:prose-xl max-w-none prose-headings:font-bold prose-a:text-primary-400 hover:prose-a:text-primary-300 prose-img:rounded-2xl prose-hr:border-white/10 prose-blockquote:border-l-primary-500 prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic">
          <MDXRemote source={post.content} />
        </div>

        {/* Post Footer CTA */}
        <div className="mt-24 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-white/10 text-center overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.1)_0%,transparent_70%)] pointer-events-none" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to stop guessing and start interviewing?</h3>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Our team will completely re-engineer your resume, portfolio, and LinkedIn to bypass the ATS and attract recruiters on autopilot.
          </p>
          <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-bold transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]">
            Explore Our Services
          </Link>
        </div>

      </article>

      <Footer />
    </main>
  );
}
