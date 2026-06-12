import { SectionHeader } from "./SectionHeader";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Raisoni Group of Institutes",
    period: "2024 – 2026 (Pursuing)",
  },
  {
    degree: "Bachelor of Science in Information Technology (B.Sc IT)",
    school: "Shreemati Nathibai Damodar Thackersey Women's University (SNDT)",
    period: "2021 – 2024 · CGPA 8.55",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "Pt Bachharaj Vyas College of Science",
    period: "79.39%",
  },
];

const certs = [
  "React Certification — HackerRank",
  "Full Stack Development Internship Certificate",
  "Web Development Certification (HTML & CSS)",
];

export function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader tag="Education" title="Education & certifications" />
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            {education.map((e) => (
              <div key={e.degree} className="glass flex gap-4 rounded-2xl p-5 transition-all hover:-translate-y-0.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{e.degree}</h3>
                  <p className="text-sm text-primary">{e.school}</p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">{e.period}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="glass-strong rounded-2xl p-6">
            <div className="mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Certifications</h3>
            </div>
            <ul className="space-y-3">
              {certs.map((c) => (
                <li key={c} className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-3 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
