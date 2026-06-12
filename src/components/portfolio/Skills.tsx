import { SectionHeader } from "./SectionHeader";
import { Code, Layout, Server, Database } from "lucide-react";

const groups = [
  { icon: Code, title: "Languages", items: ["Java", "JavaScript", "Python", "C++"] },
  { icon: Layout, title: "Frontend", items: ["React.js", "HTML5", "CSS3", "Bootstrap"] },
  { icon: Server, title: "Backend", items: ["Java", "REST APIs"] },
  { icon: Database, title: "Database & Tools", items: ["SQL", "Git", "GitHub", "Vercel"] },
];

const strengths = [
  "Frontend Development",
  "React.js Development",
  "REST API Integration",
  "Java Programming",
  "Problem Solving",
  "UI/UX Focus",
  "Responsive Web Design",
  "Continuous Learning",
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader tag="Skills" title="Tech stack & tools" subtitle="The technologies I use to build modern web experiences." />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <div key={g.title} className="glass group relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1">
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity group-hover:opacity-30" />
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-white">
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-4 text-lg font-semibold">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs text-foreground/90 transition-colors hover:border-[oklch(0.72_0.2_300/0.5)] hover:bg-[oklch(0.72_0.2_300/0.15)]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical strengths */}
        <div className="mt-12">
          <h3 className="mb-5 font-mono text-sm text-primary">{"<TechnicalStrengths/>"}</h3>
          <div className="flex flex-wrap gap-3">
            {strengths.map((s) => (
              <span key={s} className="glass rounded-full px-4 py-2 text-sm transition-all hover:bg-gradient-brand hover:text-white">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
