const items = [
  ["🤖", "AI Haiku Generator", "Generates haikus from code comments"],
  ["💻", "Terminal Portfolio", "Browse portfolio through a fake terminal UI"],
  ["🕵️", "Deepfake Detection Experiment", "Experimental deepfake classifier prototype"],
  ["📌", "Auto-summarize GitHub PRs", "Weekend script to summarize pull requests"]
];

export default function ExperimentsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-20 pt-32">
      <h1 className="display-section font-display font-extrabold">Experiments</h1>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {items.map(([icon, title, desc]) => (
          <article key={title} className="rounded-2xl border border-black/10 p-5">
            <p className="text-2xl">{icon}</p>
            <h3 className="mt-2 font-display text-2xl font-bold">{title}</h3>
            <p className="mt-2 text-sm text-muted">{desc}</p>
            <button className="mt-4 rounded-full border border-black px-4 py-1 text-sm">Try it</button>
          </article>
        ))}
      </div>
    </main>
  );
}
