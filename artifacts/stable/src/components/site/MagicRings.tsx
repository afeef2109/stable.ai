import logoAsset from "@/assets/stable-logo.png.asset.json";

export function MagicRings() {
  return (
    <div className="relative mx-auto flex h-[420px] w-[420px] items-center justify-center sm:h-[520px] sm:w-[520px]">
      {/* Outer rotating gradient ring */}
      <div
        className="absolute inset-0 rounded-full opacity-60"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, #F97316 60deg, transparent 120deg, #EAB308 200deg, transparent 260deg, #F97316 320deg, transparent 360deg)",
          animation: "ring-spin 18s linear infinite",
          mask: "radial-gradient(circle, transparent 58%, black 58.5%, black 60%, transparent 60.5%)",
          WebkitMask:
            "radial-gradient(circle, transparent 58%, black 58.5%, black 60%, transparent 60.5%)",
        }}
      />
      {/* Middle ring */}
      <div
        className="absolute inset-10 rounded-full opacity-70"
        style={{
          background:
            "conic-gradient(from 180deg, transparent 0deg, #EAB308 90deg, transparent 180deg, #F97316 270deg, transparent 360deg)",
          animation: "ring-spin 12s linear infinite reverse",
          mask: "radial-gradient(circle, transparent 62%, black 62.5%, black 64%, transparent 64.5%)",
          WebkitMask:
            "radial-gradient(circle, transparent 62%, black 62.5%, black 64%, transparent 64.5%)",
        }}
      />
      {/* Inner thin ring */}
      <div
        className="absolute inset-20 rounded-full border border-white/10"
        style={{ animation: "ring-spin 30s linear infinite" }}
      >
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316] shadow-[0_0_12px_#F97316]" />
        <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 translate-x-1/2 rounded-full bg-[#EAB308] shadow-[0_0_12px_#EAB308]" />
      </div>
      {/* Glow core */}
      <div
        aria-hidden
        className="absolute inset-24 rounded-full opacity-50 blur-2xl"
        style={{ background: "radial-gradient(circle, #F97316 0%, transparent 70%)" }}
      />
      {/* Logo */}
      <div className="glass-strong relative z-10 flex h-44 w-44 items-center justify-center rounded-full p-6 sm:h-56 sm:w-56">
        <img
          src={logoAsset.url}
          alt="STABLE"
          className="h-auto w-full object-contain"
          style={{ filter: "drop-shadow(0 0 24px rgba(249,115,22,0.5))" }}
        />
      </div>
    </div>
  );
}
