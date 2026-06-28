export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src="/stable-logo-nobg.png"
      alt="STABLE"
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
}
