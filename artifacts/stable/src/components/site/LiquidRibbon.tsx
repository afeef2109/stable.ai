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
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const lines = [
      { y: 0.38, amp: 0.06, freq: 0.9,  phase: 0,   speed: 0.0008, color: "#EF4444", alpha: 0.13 },
      { y: 0.45, amp: 0.05, freq: 1.1,  phase: 2.1, speed: 0.0010, color: "#F97316", alpha: 0.09 },
      { y: 0.52, amp: 0.07, freq: 0.75, phase: 4.3, speed: 0.0007, color: "#EF4444", alpha: 0.10 },
      { y: 0.60, amp: 0.04, freq: 1.3,  phase: 1.5, speed: 0.0012, color: "#EAB308", alpha: 0.07 },
      { y: 0.30, amp: 0.05, freq: 1.0,  phase: 3.0, speed: 0.0009, color: "#F97316", alpha: 0.08 },
    ];

    const draw = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);

      for (const l of lines) {
        const steps = W;
        ctx.beginPath();
        for (let i = 0; i <= steps; i++) {
          const x = (i / steps) * W;
          const p = i / steps;
          const y =
            H * l.y +
            Math.sin(p * Math.PI * 2 * l.freq + t * l.speed * 1000 + l.phase) * H * l.amp +
            Math.sin(p * Math.PI * 4 * l.freq + t * l.speed * 600 + l.phase + 1.2) * H * l.amp * 0.25;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        const grad = ctx.createLinearGradient(0, 0, W, 0);
        grad.addColorStop(0,   l.color + "00");
        grad.addColorStop(0.15, l.color + Math.round(l.alpha * 255).toString(16).padStart(2, "0"));
        grad.addColorStop(0.5,  l.color + Math.round(l.alpha * 1.5 * 255).toString(16).padStart(2, "0"));
        grad.addColorStop(0.85, l.color + Math.round(l.alpha * 255).toString(16).padStart(2, "0"));
        grad.addColorStop(1,   l.color + "00");

        ctx.strokeStyle = grad;
        ctx.lineWidth = H * 0.003;
        ctx.stroke();
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

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />;
}
