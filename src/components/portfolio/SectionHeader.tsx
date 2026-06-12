export function SectionHeader({ tag, title, subtitle }: { tag: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-16 max-w-3xl">
      <div className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
        <span className="h-px w-8 bg-primary/60" />
        {tag}
      </div>
      <h2 className="font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
