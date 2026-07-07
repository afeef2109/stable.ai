import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Disable on touch/pointer-coarse devices (phones, tablets)
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let tx = -500, ty = -500, cx = -500, cy = -500;
    // Start off-screen so it doesn't cause overflow before first mouse move
    el.style.transform = `translate3d(-600px, -600px, 0)`;
    el.style.opacity = "0";
    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      el.style.opacity = "0.6";
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const tick = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      el.style.transform = `translate3d(${cx - 250}px, ${cy - 250}px, 0)`;
      if (Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 h-[500px] w-[500px] rounded-full mix-blend-screen"
      style={{
        opacity: 0,
        transform: "translate3d(-600px, -600px, 0)",
        background: "radial-gradient(circle, rgba(249,115,22,0.18) 0%, rgba(234,179,8,0.06) 35%, transparent 70%)",
        filter: "blur(20px)",
      }}
    />
  );
}
