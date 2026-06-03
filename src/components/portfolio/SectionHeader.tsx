export function SectionHeader({ tag, title, subtitle }: { tag: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-sm text-[oklch(0.78_0.18_320)]">{`<${tag}/>`}</p>
      <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
