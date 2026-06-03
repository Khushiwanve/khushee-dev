import { SectionHeader } from "./SectionHeader";
import { Code2, Layers, Rocket, Heart } from "lucide-react";

const traits = [
  { icon: Code2, title: "Clean Code", desc: "Maintainable, readable, well-architected." },
  { icon: Layers, title: "Full Stack", desc: "Comfortable across the React + Java stack." },
  { icon: Rocket, title: "Performance", desc: "Fast, responsive, accessible by default." },
  { icon: Heart, title: "User-First", desc: "Thoughtful interactions and polished UI." },
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader tag="AboutMe" title="About me" />
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              I'm a <span className="text-foreground font-medium">Software Developer</span> with hands-on experience in React, Java, JavaScript, and REST APIs. I enjoy turning complex problems into elegant, scalable interfaces that real people love using.
            </p>
            <p>
              I have a strong frontend foundation and growing backend expertise — comfortable shipping end-to-end features, debugging across the stack, and collaborating with teams through Git/GitHub workflows.
            </p>
            <p>
              Currently pursuing my <span className="text-foreground font-medium">MCA</span> while building projects that sharpen my craft and prepare me for high-impact engineering roles.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {traits.map((t) => (
              <div key={t.title} className="glass group relative overflow-hidden rounded-2xl p-5 transition-all hover:-translate-y-1 hover:bg-[oklch(1_0_0/0.07)]">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-[oklch(0.16_0.025_280)]">
                  <t.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">{t.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
