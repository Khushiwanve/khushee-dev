import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  name: string;
  description: string;
  tech: string[];
  category: "Full Stack" | "Frontend" | "API";
  accent: string;
  glyph: string;
};

const projects: Project[] = [
  {
    name: "JobHunt-App",
    description: "Job search platform with JWT authentication, dynamic job listings, and filtering by role, location, and salary.",
    tech: ["React.js", "REST APIs", "JWT"],
    category: "Full Stack",
    accent: "from-violet-500/30 to-fuchsia-500/30",
    glyph: "JH",
  },
  {
    name: "Movie Rating & Review",
    description: "Movie discovery platform with real-time search, filtering, async API integration, and responsive UI.",
    tech: ["JavaScript", "TMDb API"],
    category: "API",
    accent: "from-indigo-500/30 to-cyan-500/30",
    glyph: "MR",
  },
  {
    name: "KRISHI-MITRA",
    description: "Agriculture-focused platform with product listings, category filters, and dynamic data rendering.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    accent: "from-emerald-500/30 to-teal-500/30",
    glyph: "KM",
  },
];

const filters = ["All", "Full Stack", "Frontend", "API"] as const;

export function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = projects.filter((p) => active === "All" || p.category === active);

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader tag="Projects" title="Featured work" subtitle="A selection of things I've built recently." />
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-4 py-1.5 font-mono text-xs transition-all ${
                  active === f
                    ? "bg-gradient-brand text-white"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <article key={p.name} className="glass group relative flex flex-col overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:bg-[oklch(1_0_0/0.06)]">
              <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${p.accent}`}>
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-bold text-white/80 drop-shadow-lg">{p.glyph}</span>
                </div>
                <div className="absolute top-3 left-3 rounded-full glass-strong px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-foreground/80">
                  {p.category}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-2">
                  <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full glass px-3 py-2 text-xs font-medium hover:bg-white/10">
                    <Github className="h-3.5 w-3.5" /> Code
                  </a>
                  <a href="#" className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-gradient-brand px-3 py-2 text-xs font-medium text-white">
                    <ExternalLink className="h-3.5 w-3.5" /> Live
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
