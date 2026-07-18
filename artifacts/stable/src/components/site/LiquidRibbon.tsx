import { useEffect, useRef } from "react";

export function LiquidRibbon() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let frame = 0;

    const setSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    };

    const ro = new ResizeObserver(() => setSize());
    ro.observe(canvas);
    setSize();

    const waves = [
      { yCtr: 0.42, amp: 0.09, freq: 0.8,  phase: 0.0, speed: 0.007, color: [239, 68,  68],  alpha: 0.35 },
      { yCtr: 0.52, amp: 0.07, freq: 1.0,  phase: 2.0, speed: 0.005, color: [249, 115, 22],  alpha: 0.28 },
      { yCtr: 0.35, amp: 0.06, freq: 1.2,  phase: 4.0, speed: 0.009, color: [239, 68,  68],  alpha: 0.22 },
      { yCtr: 0.62, amp: 0.08, freq: 0.7,  phase: 1.0, speed: 0.006, color: [234, 179, 8],   alpha: 0.20 },
      { yCtr: 0.48, amp: 0.05, freq: 1.5,  phase: 3.0, speed: 0.010, color: [249, 115, 22],  alpha: 0.18 },
    ];

    const draw = () => {
      const W = canvas.clientWidth;
      const H = canvas.clientHeight;
      if (!W || !H) { animId = requestAnimationFrame(draw); return; }

      ctx.clearRect(0, 0, W, H);

      const t = frame * 0.016;

      for (const w of waves) {
        const pts: [number, number][] = [];
        const steps = Math.ceil(W / 1.5);

        for (let i = 0; i <= steps; i++) {
          const x = (i / steps) * W;
          const p = i / steps;
          const y =
            H * w.yCtr +
            Math.sin(p * Math.PI * 2 * w.freq + t * w.speed * 60 + w.phase) * H * w.amp +
            Math.sin(p * Math.PI * 3.7 * w.freq + t * w.speed * 40 + w.phase + 1.3) * H * w.amp * 0.3;
          pts.push([x, y]);
        }

        const grad = ctx.createLinearGradient(0, 0, W, 0);
        const [r, g, b] = w.color;
        grad.addColorStop(0,    `rgba(${r},${g},${b},0)`);
        grad.addColorStop(0.15, `rgba(${r},${g},${b},${w.alpha})`);
        grad.addColorStop(0.5,  `rgba(${r},${g},${b},${w.alpha * 1.6})`);
        grad.addColorStop(0.85, `rgba(${r},${g},${b},${w.alpha})`);
        grad.addColorStop(1,    `rgba(${r},${g},${b},0)`);

        ctx.beginPath();
        ctx.moveTo(pts[0][0], pts[0][1]);
        for (let i = 1; i < pts.length - 1; i++) {
          const mx = (pts[i][0] + pts[i + 1][0]) / 2;
          const my = (pts[i][1] + pts[i + 1][1]) / 2;
          ctx.quadraticCurveTo(pts[i][0], pts[i][1], mx, my);
        }
        ctx.strokeStyle = grad;
        ctx.lineWidth = Math.max(1.5, H * 0.004);
        ctx.lineJoin = "round";
        ctx.stroke();
      }

      frame++;
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
    />
  );
}
