export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div className="absolute -top-40 left-1/3 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[140px] animate-pulse-glow" />
      <div className="absolute top-1/2 -right-40 h-[520px] w-[520px] rounded-full bg-primary/10 blur-[160px] animate-pulse-glow" />
      <div className="absolute bottom-0 -left-20 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[160px] animate-pulse-glow" />
    </div>
  );
}
