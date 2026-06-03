import { SectionHeader } from "./SectionHeader";
import { Briefcase } from "lucide-react";

const items = [
  {
    role: "Full Stack Development Intern",
    company: "Arc Technologies & Institutions",
    location: "Nagpur",
    period: "Oct 2024 – Jul 2025",
    points: [
      "Built frontend applications using React.js",
      "Integrated REST APIs across multiple features",
      "Improved debugging and deployment workflows",
      "Worked with Git, GitHub, and Vercel for shipping",
    ],
  },
  {
    role: "Java Developer Intern",
    company: "Global Education",
    location: "Nagpur",
    period: "Jan 2024 – May 2024",
    points: [
      "Developed Java applications using OOP principles",
      "Worked with multithreading concepts",
      "Optimized application performance",
      "Collaborated on software solutions in a team",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader tag="Experience" title="Where I've worked" />

        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[oklch(0.72_0.2_300/0.6)] via-[oklch(0.7_0.18_260/0.4)] to-transparent md:left-1/2" />
          <div className="space-y-10">
            {items.map((item, i) => (
              <div key={i} className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="absolute left-4 top-6 -translate-x-1/2 md:left-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-brand blur-md opacity-70" />
                    <div className="relative flex h-4 w-4 items-center justify-center rounded-full bg-gradient-brand" />
                  </div>
                </div>
                <div className={`pl-12 md:pl-0 ${i % 2 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="glass-strong rounded-2xl p-6 transition-all hover:-translate-y-1">
                    <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 font-mono text-xs text-muted-foreground">
                      <Briefcase className="h-3 w-3" />
                      {item.period}
                    </div>
                    <h3 className="text-xl font-semibold">{item.role}</h3>
                    <p className="text-sm text-[oklch(0.78_0.18_320)]">
                      {item.company} · {item.location}
                    </p>
                    <ul className={`mt-4 space-y-2 text-sm text-muted-foreground ${i % 2 ? "md:list-none" : ""}`}>
                      {item.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-[oklch(0.78_0.18_320)]" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
