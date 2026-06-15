import logoAsset from "@/assets/spartype-logo.png.asset.json";

export function SpartypeLogo({
  variant = "dark",
  className = "h-9",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  // Original logo is dark; invert for use on dark backgrounds.
  const style =
    variant === "light"
      ? { filter: "brightness(0) invert(1)" }
      : undefined;
  return (
    <img
      src={logoAsset.url}
      alt="Spartype"
      className={className}
      style={style}
      width={240}
      height={64}
    />
  );
}