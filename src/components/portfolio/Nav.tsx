import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Work" },
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
        if (el && el.getBoundingClientRect().top <= 140) current = l.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500 ${scrolled ? "top-3" : "top-6"}`}>
      <nav className={`flex w-full max-w-5xl items-center justify-between gap-4 rounded-full px-3 py-2 transition-all duration-500 ${scrolled ? "glass-strong shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]" : "glass"}`}>
        <a href="#home" className="flex items-center gap-3 pl-3">
          <span className="font-display text-xl italic tracking-tight">Khushi<span className="text-primary">.</span></span>
        </a>
        <ul className="hidden items-center gap-1 text-[13px] md:flex">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`relative flex items-center gap-2 rounded-full px-4 py-1.5 transition-colors ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {isActive && (
                    <span className="h-1 w-1 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
                  )}
                  <span>{l.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <a
          href="/Khushi_Wanve_Resume.pdf"
          download
          className="rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition-all hover:bg-white/90"
        >
          Résumé
        </a>
      </nav>
    </header>
  );
}
