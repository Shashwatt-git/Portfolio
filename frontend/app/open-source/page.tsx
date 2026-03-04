import ActivityCalendar from "react-activity-calendar";
import GithubCard from "@/components/GithubCard";

const pinned = [
  { name: "AURA", description: "Autonomous multi-modal agent", language: "Python", stars: 0, forks: 0 },
  { name: "CodeSentinel", description: "AI vulnerability analyzer", language: "Python", stars: 0, forks: 0 }
];

const prs = [
  { repo: "ArduPilot", title: "Fence Re-enable Fix", status: "Merged", link: "#" },
  { repo: "ArduPilot", title: "Parameter documentation update", status: "Merged", link: "#" }
];

export default function OpenSourcePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-20 pt-32">
      <h1 className="display-section font-display font-extrabold">Open Source</h1>
      <section className="mt-8 overflow-auto rounded-2xl border border-black/10 p-4">
        <ActivityCalendar data={[]} />
      </section>
      <section className="mt-8 grid gap-4 md:grid-cols-2">
        {prs.map((pr) => <article key={pr.title} className="rounded-2xl border border-black/10 p-5"><p className="text-xs text-muted">{pr.repo}</p><h3 className="font-display text-xl">{pr.title}</h3><p className="mt-2 text-sm">{pr.status}</p></article>)}
      </section>
      <section className="mt-8 grid gap-4 md:grid-cols-2">
        {pinned.map((repo) => <GithubCard key={repo.name} repo={repo} />)}
      </section>
    </main>
  );
}
