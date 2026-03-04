import ResearchCard from "@/components/ResearchCard";

export default function ResearchPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-20 pt-32">
      <h1 className="font-display text-5xl font-extrabold">Hybrid Metaheuristic Optimization Algorithm</h1>
      <p className="mt-2 text-sm text-muted">Springer Nature — AI & ML Volume — 2026</p>
      <p className="mt-6 text-text/90">Abstract placeholder for the published research and methodology summary.</p>
      <ul className="mt-6 list-disc space-y-2 pl-6 text-sm text-text/90">
        <li>Hybrid optimization pipeline for complex search spaces.</li>
        <li>Benchmark comparison against baseline heuristic methods.</li>
        <li>Reproducible implementation and experiments.</li>
      </ul>
      <div className="mt-8 flex gap-3">
        <a href="#" className="rounded-full border border-black px-4 py-2 text-sm">Read Paper ↗</a>
        <a href="#" className="rounded-full border border-black px-4 py-2 text-sm">GitHub Implementation ↗</a>
      </div>
      <h2 className="mt-14 font-display text-3xl font-bold">Future Research</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <ResearchCard title="Adaptive attack-resistant optimization" summary="Exploring robust objective perturbation." />
        <ResearchCard title="Low-resource training strategy" summary="Investigating fast convergence methods." />
      </div>
    </main>
  );
}
