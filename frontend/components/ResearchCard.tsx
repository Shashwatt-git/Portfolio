export default function ResearchCard({ title, summary }: { title: string; summary: string }) {
  return (
    <article className="rounded-2xl border border-black/10 p-5">
      <h3 className="font-display text-xl font-bold">{title}</h3>
      <p className="mt-2 text-sm text-muted">{summary}</p>
    </article>
  );
}
