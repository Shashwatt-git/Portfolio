import Link from "next/link";

export default function BlogCard({ post }: { post: { title: string; slug: string; date: string; tags: string[]; excerpt: string; readingTime: string } }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block rounded-2xl border border-black/10 p-5 transition hover:shadow-lg">
      <h3 className="font-display text-2xl font-bold">{post.title}</h3>
      <p className="mt-1 text-xs text-muted">{post.date} · {post.readingTime}</p>
      <p className="mt-3 text-sm text-text/80">{post.excerpt}</p>
      <p className="mt-3 text-xs text-muted">{post.tags.join(" · ")}</p>
    </Link>
  );
}
