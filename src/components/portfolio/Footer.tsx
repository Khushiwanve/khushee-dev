export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted-foreground md:flex-row">
        <p className="font-mono">© {new Date().getFullYear()} Khushi Wanve · Built with React</p>
        <p className="font-mono text-xs">Crafted with care in Nagpur, India.</p>
      </div>
    </footer>
  );
}
