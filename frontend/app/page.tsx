codex/initialize-project-structure-for-portfolio-site-idr9tw
import DemoWidget from "@/components/DemoWidget";
import HeroSection from "@/components/HeroSection";
import ProjectCard, { type Project } from "@/components/ProjectCard";
import ScatterText from "@/components/ScatterText";
import Timeline from "@/components/Timeline";

const featured: Project[] = [
  {
    title: "AURA — Autonomous Multi-Modal AI Agent",
    slug: "aura",
    description: "Multi-modal autonomous AI agent using LangGraph and CrewAI.",
    stack: ["Python", "LangGraph", "CrewAI", "FastAPI"],
    gradient: "from-[#1a1a2e] to-[#16213e]"
  },
  {
    title: "CodeSentinel — AI Code Security Analyzer",
    slug: "codesentinel",
    description: "Transformer-based vulnerability detection focused on OWASP risks.",
    stack: ["Python", "Transformers", "FastAPI", "React"],
    gradient: "from-[#0f2027] to-[#203a43]"
  },
  {
    title: "VibeTest — AI Website Testing Framework",
    slug: "vibetest",
    description: "Natural-language driven autonomous website testing workflows.",
    stack: ["Python", "Playwright", "LangChain", "GPT-4"],
    gradient: "from-[#134e5e] to-[#71b280]"
  }
];

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ScatterText />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="display-section font-display font-extrabold">Featured Projects</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featured.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>
      <DemoWidget />
      <Timeline />
    </main>
  );

export default function HomePage() {
  return <main />;
  main
}
