export function SplineHero() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          mixBlendMode: "screen",
          opacity: 0.85,
        }}
        src="/hero-ribbon.mp4"
      />
    </div>
  );
}
