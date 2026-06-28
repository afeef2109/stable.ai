export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={className}
      style={{
        fontFamily: "var(--font-sans)",
        fontWeight: 700,
        letterSpacing: "0.08em",
        fontSize: "inherit",
        background: "var(--gradient-primary)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        display: "inline-block",
      }}
    >
      STABLE
    </span>
  );
}
