import { useMemo } from "react";

export function Particles({ count = 28 }: { count?: number }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 10,
        hue: Math.random() > 0.5 ? "#EF4444" : "#F04A30",
      })),
    [count],
  );
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d) => (
        <span
          key={d.id}
          className="absolute rounded-full"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            background: d.hue,
            boxShadow: `0 0 ${d.size * 4}px ${d.hue}`,
            opacity: 0.35,
            animation: `float-slow ${d.duration}s ease-in-out ${d.delay}s infinite, pulse-glow ${d.duration * 0.6}s ease-in-out ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
