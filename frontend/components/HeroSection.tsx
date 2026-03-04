import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-end px-6 pb-12 pt-28">
      <div className="max-w-5xl">
        <h1 className="display-hero font-display font-extrabold">Shashwat Chandel</h1>
        <p className="mt-4 text-lg text-muted">AI • Backend • Security</p>
        <p className="mt-6 max-w-2xl text-xl font-light text-text/90">
          Building autonomous AI systems, security tooling, and open source software.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <Link href="/projects" className="rounded-full border border-text px-5 py-2.5">View Projects</Link>
          <a href="https://github.com/Shashwatt-git" className="rounded-full border border-text px-5 py-2.5">GitHub ↗</a>
          <a href="#" className="rounded-full border border-text px-5 py-2.5">Resume ↗</a>
        </div>
      </div>
      <span className="absolute bottom-12 right-6 text-xs tracking-widest text-muted">Scroll ↘</span>
    </section>
  );
}
