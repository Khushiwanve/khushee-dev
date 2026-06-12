export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="font-display text-3xl italic tracking-tight">Khushi Wanve<span className="text-primary">.</span></p>
            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">Full Stack Developer · Nagpur, India</p>
          </div>
          <div className="flex flex-col items-start gap-2 md:items-end">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">© {new Date().getFullYear()} — All rights reserved</p>
            <p className="text-xs text-muted-foreground/70">Crafted with care.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
