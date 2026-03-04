import Link from "next/link";

export type Project = {
  title: string;
  slug: string;
  description: string;
  stack: string[];
  gradient: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition hover:scale-[1.02] hover:shadow-xl">
      <div className={`relative h-56 w-full bg-gradient-to-r ${project.gradient}`}>
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 text-white opacity-0 transition group-hover:bg-black/40 group-hover:opacity-100">
          <Link href={`/projects/${project.slug}`}>View Case Study →</Link>
        </div>
      </div>
      <div className="space-y-3 p-5">
        <h3 className="font-display text-2xl font-bold">{project.title}</h3>
        <p className="text-sm text-muted">{project.description}</p>
        <ul className="flex flex-wrap gap-2 text-xs">
          {project.stack.map((item) => (
            <li key={item} className="rounded-full border border-black/20 px-2 py-1">{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
