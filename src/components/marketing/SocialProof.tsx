export function SocialProof() {
  return (
    <div
      className="bg-cream border-y"
      style={{ borderColor: "var(--spartype-border)" }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-center sm:px-8 md:flex-row md:text-left">
        <p className="text-[14px] text-slate-ink">
          Trusted by growing businesses in{" "}
          <span className="font-semibold text-navy">Lahore</span>,{" "}
          <span className="font-semibold text-navy">Karachi</span>,{" "}
          <span className="font-semibold text-navy">Islamabad</span>, and{" "}
          <span className="font-semibold text-navy">Rawalpindi</span>
        </p>
        <div className="flex items-center gap-4 text-[14px]">
          <span className="tracking-widest text-[color:var(--spartype-gold)]">★★★★★</span>
          <span className="text-slate-ink">50+ founding clients onboarded</span>
        </div>
      </div>
    </div>
  );
}