export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />
      {/* floating orbs */}
      <div className="absolute -top-32 left-1/4 h-[420px] w-[420px] rounded-full bg-[oklch(0.6_0.25_300/0.25)] blur-[120px] animate-pulse-glow" />
      <div className="absolute top-1/2 -right-32 h-[480px] w-[480px] rounded-full bg-[oklch(0.6_0.25_330/0.18)] blur-[140px] animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[oklch(0.6_0.25_260/0.2)] blur-[140px] animate-pulse-glow" />
    </div>
  );
}
