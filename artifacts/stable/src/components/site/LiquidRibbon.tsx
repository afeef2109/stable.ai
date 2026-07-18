import { useEffect, useRef } from "react";

export function LiquidRibbon() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    const ribbons = [
      { amp: 0.18, freq: 1.1, phase: 0,    speed: 0.0028, width: 0.22, alpha: 0.18, color: "#EF4444" },
      { amp: 0.14, freq: 0.9, phase: 1.8,   speed: 0.0022, width: 0.16, alpha: 0.13, color: "#F97316" },
      { amp: 0.20, freq: 1.4, phase: 3.5,   speed: 0.0034, width: 0.12, alpha: 0.10, color: "#EF4444" },
      { amp: 0.10, freq: 0.7, phase: 2.2,   speed: 0.0018, width: 0.26, alpha: 0.09, color: "#EAB308" },
      { amp: 0.16, freq: 1.6, phase: 5.0,   speed: 0.0040, width: 0.10, alpha: 0.12, color: "#F97316" },
      { amp: 0.12, freq: 1.2, phase: 4.1,   speed: 0.0025, width: 0.18, alpha: 0.08, color: "#EF4444" },
    ];

    const draw = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;

      ctx.clearRect(0, 0, W, H);

      for (const r of ribbons) {
        const midY = H * 0.5;
        const ampPx = H * r.amp;
        const halfW = H * r.width * 0.5;
        const steps = Math.ceil(W / 2);

        ctx.beginPath();

        // Top edge of ribbon (forward)
        for (let i = 0; i <= steps; i++) {
          const x = (i / steps) * W;
          const progress = i / steps;
          const wave =
            Math.sin(progress * Math.PI * 2 * r.freq + t * r.speed * 1000 + r.phase) * ampPx +
            Math.sin(progress * Math.PI * 3 * r.freq + t * r.speed * 700 + r.phase + 1) * ampPx * 0.3;
          const y = midY + wave - halfW;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        // Bottom edge of ribbon (backward)
        for (let i = steps; i >= 0; i--) {
          const x = (i / steps) * W;
          const progress = i / steps;
          const wave =
            Math.sin(progress * Math.PI * 2 * r.freq + t * r.speed * 1000 + r.phase) * ampPx +
            Math.sin(progress * Math.PI * 3 * r.freq + t * r.speed * 700 + r.phase + 1) * ampPx * 0.3;
          const y = midY + wave + halfW;
          ctx.lineTo(x, y);
        }

        ctx.closePath();

        // Gradient fill along the ribbon
        const grad = ctx.createLinearGradient(0, 0, W, 0);
        grad.addColorStop(0, r.color + "00");
        grad.addColorStop(0.2, r.color + Math.round(r.alpha * 255).toString(16).padStart(2, "0"));
        grad.addColorStop(0.5, r.color + Math.round(r.alpha * 1.6 * 255).toString(16).padStart(2, "0"));
        grad.addColorStop(0.8, r.color + Math.round(r.alpha * 255).toString(16).padStart(2, "0"));
        grad.addColorStop(1, r.color + "00");

        ctx.fillStyle = grad;
        ctx.fill();
      }

      t += 1;
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{ display: "block" }}
    />
  );
}
