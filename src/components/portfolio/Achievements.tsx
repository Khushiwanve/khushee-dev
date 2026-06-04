import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 3, suffix: "+", label: "Major Projects" },
  { value: 2, suffix: "", label: "Internships" },
  { value: 3, suffix: "+", label: "Certifications" },
  { value: 1, suffix: "", label: "React Developer", isText: "React" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const dur = 1200; const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setVal(Math.round(p * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{val}{suffix}</span>;
}

export function Achievements() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="glass-strong grid grid-cols-2 gap-px overflow-hidden rounded-3xl md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-[oklch(0.18_0.03_280)] p-8 text-center">
              <div className="text-4xl font-bold md:text-5xl">
                <span className="text-gradient">
                  {s.isText ? s.isText : <Counter target={s.value} suffix={s.suffix} />}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
