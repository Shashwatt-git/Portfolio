export default function GithubCard({ repo }: { repo: { name: string; description: string; language: string; stars: number; forks: number } }) {
  return (
    <article className="rounded-2xl border border-black/10 p-5">
      <h3 className="font-display text-xl font-bold">{repo.name}</h3>
      <p className="mt-2 text-sm text-muted">{repo.description}</p>
      <p className="mt-3 text-xs">● {repo.language} · ★ {repo.stars} · Forks {repo.forks}</p>
    </article>
  );
}
