export default function Footer() {
  return (
    <footer className="border-t border-black/10 px-6 py-10 text-sm text-muted">
      <div className="mx-auto flex max-w-6xl justify-between">
        <p>© {new Date().getFullYear()} Shashwat Chandel</p>
        <p>Built with Next.js + FastAPI</p>
      </div>
    </footer>
  );
}
