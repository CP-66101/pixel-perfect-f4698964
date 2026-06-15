import warrior from "@/assets/warrior-watermark.png";

export function WarriorWatermark({
  className = "",
  opacity = 0.04,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <img
      src={warrior}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className={`pointer-events-none select-none absolute ${className}`}
      style={{ opacity, filter: "brightness(0) invert(1)" }}
    />
  );
}