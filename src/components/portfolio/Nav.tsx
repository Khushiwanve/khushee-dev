import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "AboutMe" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = "home";
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= 120) current = l.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed left-0 right-0 top-4 z-50 flex justify-center px-4 transition-all ${scrolled ? "top-2" : "top-4"}`}>
      <nav className="glass-strong flex w-full max-w-5xl items-center justify-between gap-4 rounded-full px-3 py-2 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6)]">
        <a href="#home" className="flex items-center gap-2 pl-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-brand font-mono text-sm font-bold text-[oklch(0.16_0.025_280)]">
            KW
          </span>
        </a>
        <ul className="hidden items-center gap-1 font-mono text-sm md:flex">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`relative flex items-center gap-2 rounded-full px-4 py-1.5 transition-colors ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand shadow-[0_0_8px_oklch(0.72_0.2_300)]" />
                  )}
                  <span>{"</"}{l.label}{">"}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <a
          href="/Khushi_Wanve_Resume.pdf"
          download
          className="rounded-full bg-gradient-brand px-4 py-2 text-xs font-medium text-[oklch(0.16_0.025_280)] transition-transform hover:scale-105"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
