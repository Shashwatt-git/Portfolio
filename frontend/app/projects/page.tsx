import ProjectCard, { type Project } from "@/components/ProjectCard";

const projects: Project[] = [
  {
    title: "AURA — Autonomous Multi-Modal AI Agent",
    slug: "aura",
    description: "Handles complex tasks across web, code, and data.",
    stack: ["Python", "LangGraph", "CrewAI", "FastAPI"],
    gradient: "from-[#1a1a2e] to-[#16213e]"
  },
  {
    title: "CodeSentinel — AI Code Security Analyzer",
    slug: "codesentinel",
    description: "Detects OWASP Top 10 style vulnerabilities.",
    stack: ["Python", "Transformers", "FastAPI", "React"],
    gradient: "from-[#0f2027] to-[#203a43]"
  },
  {
    title: "VibeTest — AI Website Testing Framework",
    slug: "vibetest",
    description: "Autonomous E2E testing from natural language instructions.",
    stack: ["Python", "Playwright", "LangChain", "GPT-4"],
    gradient: "from-[#134e5e] to-[#71b280]"
  },
  {
    title: "ThreatSentry — LLM Security Tool",
    slug: "threatsentry",
    description: "Detects prompt injection, jailbreaks, and adversarial inputs.",
    stack: ["Python", "FastAPI", "ML", "LangChain"],
    gradient: "from-[#232526] to-[#414345]"
  }
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-20 pt-32">
      <h1 className="display-section font-display font-extrabold">Projects</h1>
      <section className="mt-8 rounded-3xl bg-dark px-6 py-8 text-white">
        <p className="font-display text-2xl">AI • Backend • Security Engineering</p>
        <p className="mt-2 text-sm text-white/80">Building production-grade systems with thoughtful architecture.</p>
      </section>
      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </section>
    </main>
  );
}
