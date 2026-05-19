import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const move = (e) => {
      el.style.background = `radial-gradient(
        400px at ${e.clientX}px ${e.clientY}px,
        rgba(245,184,0,0.15),
        transparent 80%
      )`;
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
