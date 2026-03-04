export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-20 pt-32">
      <div className="fixed left-0 top-0 h-1 w-1/3 bg-text" />
      <article className="prose max-w-none">
        <h1 className="font-display text-5xl font-extrabold capitalize">{params.slug.replaceAll("-", " ")}</h1>
        <p>Markdown rendered content placeholder.</p>
      </article>
      <aside className="mt-10 rounded-2xl border border-black/10 p-4 text-sm">Table of contents placeholder</aside>
    </main>
  );
}
