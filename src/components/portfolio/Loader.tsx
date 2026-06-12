import { useEffect, useState } from "react";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 900);
    return () => clearTimeout(t);
  }, []);
  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-background transition-opacity duration-500 ${show ? "opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-brand opacity-50 blur-2xl" />
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-brand font-mono text-xl font-bold text-white">
          KW
        </div>
        <div className="mt-4 text-center font-mono text-xs text-muted-foreground">loading…</div>
      </div>
    </div>
  );
}
