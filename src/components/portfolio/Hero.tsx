import { Download, Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const stack = ["React", "TypeScript", "Java", "Python", "REST APIs", "SQL", "Node.js", "Git", "Vercel", "Tailwind"];

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-36 pb-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-10 animate-fade-up">
            <div className="inline-flex items-center gap-2.5 rounded-full glass px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Available for select projects · 2026
            </div>

            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                Khushi Wanve
              </p>
              <h1 className="font-display text-[clamp(3.5rem,9vw,8rem)] leading-[0.95] tracking-tight">
                <span className="text-gradient block">Designing</span>
                <span className="block">
                  <em className="font-display italic text-gradient-brand">considered</em>
                  <span className="text-gradient"> software.</span>
                </span>
              </h1>
            </div>

            <div className="max-w-xl space-y-4">
              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                A full-stack developer crafting refined, performant web experiences —
                where engineering precision meets editorial taste.
              </p>
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground/70">
                React · TypeScript · Java · REST APIs
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/Khushi_Wanve_Resume.pdf"
                download
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-all hover:bg-white/90"
              >
                <Download className="h-4 w-4" />
                Download Résumé
              </a>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium transition-all hover:bg-white/[0.06]"
              >
                Selected Work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-3 py-3.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                Get in touch
              </a>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <SocialIcon href="https://github.com/" label="GitHub"><Github className="h-4 w-4" /></SocialIcon>
              <SocialIcon href="https://linkedin.com/in/khusheewanve" label="LinkedIn"><Linkedin className="h-4 w-4" /></SocialIcon>
              <SocialIcon href="mailto:khushiwanve2004@gmail.com" label="Email"><Mail className="h-4 w-4" /></SocialIcon>
            </div>
          </div>

          {/* Editorial card */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-2 rounded-[2rem] bg-primary/20 blur-3xl opacity-60" />
            <div className="glass-strong relative overflow-hidden rounded-[2rem] p-8">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                <span>Portfolio</span>
                <span>MMXXVI</span>
              </div>

              <div className="relative mx-auto my-10 h-48 w-48 animate-float">
                <div className="absolute inset-0 rounded-full bg-gradient-brand blur-3xl opacity-50" />
                <div className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-brand font-display text-7xl italic text-white shadow-2xl">
                  Kw
                </div>
              </div>

              <div className="space-y-4 border-t border-white/5 pt-6">
                <div className="flex justify-between text-xs">
                  <span className="uppercase tracking-[0.2em] text-muted-foreground">Role</span>
                  <span className="text-foreground">Full Stack Developer</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="uppercase tracking-[0.2em] text-muted-foreground">Based</span>
                  <span className="text-foreground">Nagpur, India</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="uppercase tracking-[0.2em] text-muted-foreground">Studying</span>
                  <span className="text-foreground">MCA</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="uppercase tracking-[0.2em] text-muted-foreground">Status</span>
                  <span className="text-emerald-400">Open to work</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative mt-24 overflow-hidden border-y border-white/5 py-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...stack, ...stack, ...stack].map((s, i) => (
              <span key={i} className="font-display text-2xl italic text-muted-foreground/60">
                {s} <span className="ml-12 text-primary/40">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="flex h-11 w-11 items-center justify-center rounded-full glass text-muted-foreground transition-all hover:scale-105 hover:bg-white hover:text-black"
    >
      {children}
    </a>
  );
}
