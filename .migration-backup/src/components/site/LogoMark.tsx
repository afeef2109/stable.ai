import logoAsset from "@/assets/stable-logo.png.asset.json";

export function LogoMark({ className }: { className?: string }) {
  return <img src={logoAsset.url} alt="STABLE" className={className} />;
}
