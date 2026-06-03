import { Download, Mail, Github, Linkedin, ArrowRight, Sparkles } from "lucide-react";

const stack = ["React", "Java", "JavaScript", "Python", "REST APIs", "SQL", "Git", "Vercel"];

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-32 pb-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 font-mono text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for opportunities
            </div>

            <div className="space-y-2">
              <p className="font-mono text-lg text-muted-foreground md:text-xl">
                <span className="text-[oklch(0.78_0.18_320)]">Namaste()</span>; I'm
              </p>
              <h1 className="text-5xl font-bold tracking-tight md:text-7xl lg:text-[5.5rem] lg:leading-[1.05]">
                <span className="text-gradient">Khushi Wanve.</span>
              </h1>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                I design &amp; code for web.
              </h2>
            </div>

            <div className="max-w-xl space-y-3 text-muted-foreground">
              <p className="text-base md:text-lg">
                Full Stack Developer · React Developer · MCA Student
              </p>
              <p>
                Building modern, scalable, and user-focused web experiences through clean code and thoughtful design.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/Khushi_Wanve_Resume.pdf"
                download
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-[oklch(0.16_0.025_280)] transition-transform hover:scale-[1.03]"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium transition-colors hover:bg-[oklch(1_0_0/0.08)]"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <SocialIcon href="https://github.com/" label="GitHub"><Github className="h-4 w-4" /></SocialIcon>
              <SocialIcon href="https://linkedin.com/in/khusheewanve" label="LinkedIn"><Linkedin className="h-4 w-4" /></SocialIcon>
              <SocialIcon href="mailto:khushiwanve2004@gmail.com" label="Email"><Mail className="h-4 w-4" /></SocialIcon>
            </div>
          </div>

          {/* Avatar card */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-brand opacity-40 blur-2xl" />
            <div className="glass-strong relative overflow-hidden rounded-3xl p-6">
              <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                </div>
                <span>~/khushi.dev</span>
              </div>

              <div className="relative mx-auto my-6 h-44 w-44 animate-float">
                <div className="absolute inset-0 rounded-full bg-gradient-brand blur-2xl opacity-60" />
                <div className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-brand text-6xl font-bold text-[oklch(0.16_0.025_280)] shadow-2xl">
                  KW
                </div>
                <Sparkles className="absolute -right-2 top-2 h-6 w-6 text-[oklch(0.78_0.18_320)] animate-pulse" />
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div className="text-muted-foreground">
                  <span className="text-[oklch(0.78_0.18_320)]">const</span>{" "}
                  <span className="text-[oklch(0.8_0.15_200)]">developer</span> = {"{"}
                </div>
                <div className="pl-4 text-muted-foreground">
                  role: <span className="text-[oklch(0.85_0.12_140)]">"Full Stack"</span>,
                </div>
                <div className="pl-4 text-muted-foreground">
                  loves: <span className="text-[oklch(0.85_0.12_140)]">"clean code"</span>,
                </div>
                <div className="pl-4 text-muted-foreground">
                  location: <span className="text-[oklch(0.85_0.12_140)]">"Nagpur, IN"</span>,
                </div>
                <div className="text-muted-foreground">{"};"}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative mt-16 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
          <div className="flex gap-3 animate-marquee whitespace-nowrap">
            {[...stack, ...stack, ...stack].map((s, i) => (
              <span key={i} className="rounded-full glass px-5 py-2 font-mono text-sm text-muted-foreground">
                {s}
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
      className="flex h-10 w-10 items-center justify-center rounded-full glass text-muted-foreground transition-all hover:scale-110 hover:bg-gradient-brand hover:text-[oklch(0.16_0.025_280)]"
    >
      {children}
    </a>
  );
}
