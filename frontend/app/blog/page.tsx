import BlogCard from "@/components/BlogCard";

const posts = [
  { title: "My first ArduPilot PR — contributing to open source autopilot", slug: "first-ardupilot-pr", date: "2025-01-10", tags: ["GSoC", "Open Source"], readingTime: "5 min", excerpt: "What I learned shipping my first PR." },
  { title: "How I built CodeSentinel — transformer-based vulnerability detection", slug: "how-i-built-codesentinel", date: "2025-02-14", tags: ["AI", "Security"], readingTime: "7 min", excerpt: "Architecture and tradeoffs behind the analyzer." },
  { title: "Understanding LangGraph for multi-agent systems", slug: "understanding-langgraph", date: "2025-03-01", tags: ["AI"], readingTime: "6 min", excerpt: "A practical guide to agent orchestration." },
  { title: "GSoC 2025 Daily Log — Week 1", slug: "gsoc-2025-week-1", date: "2025-05-20", tags: ["GSoC"], readingTime: "4 min", excerpt: "Progress updates from week one." }
];

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-20 pt-32">
      <h1 className="display-section font-display font-extrabold">Blog</h1>
      <div className="mt-10 grid gap-5">
        {posts.map((post) => <BlogCard key={post.slug} post={post} />)}
      </div>
    </main>
  );
}
