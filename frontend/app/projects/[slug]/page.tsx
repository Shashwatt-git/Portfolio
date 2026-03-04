import Link from "next/link";

export default function ProjectCaseStudyPage({ params }: { params: { slug: string } }) {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-20 pt-32">
      <div className="h-72 rounded-3xl bg-gradient-to-r from-[#111] to-[#333]" />
      <h1 className="mt-8 font-display text-5xl font-extrabold capitalize">{params.slug.replaceAll("-", " ")}</h1>
      <p className="mt-4 text-muted">Overview, problem, solution, architecture, and outcomes.</p>
      <div className="mt-6 flex gap-3">
        <a href="#" className="rounded-full border border-black px-4 py-2 text-sm">GitHub ↗</a>
        <a href="#" className="rounded-full border border-black px-4 py-2 text-sm">Live Demo ↗</a>
      </div>
      <h2 className="mt-14 font-display text-3xl font-bold">Related projects</h2>
      <Link href="/projects" className="mt-3 inline-block text-sm underline">Back to projects</Link>
    </main>
  );
}
