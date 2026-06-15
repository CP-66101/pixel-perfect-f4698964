import { Reveal } from "./Reveal";

const items = [
  {
    icon: "🇵🇰",
    title: "Pakistani Company",
    body: "Spar Type Pvt Ltd is registered in Pakistan. Local support, local understanding.",
  },
  {
    icon: "📞",
    title: "WhatsApp Support",
    body: "Real humans on WhatsApp — not a ticket system. We respond within a few hours.",
  },
  {
    icon: "🔒",
    title: "Your Data, Always Yours",
    body: "Your business data belongs to you. No lock-in, no hidden exports.",
  },
];

export function TrustStrip() {
  return (
    <section className="section-pad bg-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-3">
        {items.map((t, i) => (
          <Reveal key={t.title} delay={i * 0.08}>
            <div className="flex flex-col">
              <div className="text-3xl">{t.icon}</div>
              <h3 className="mt-4 font-display text-[20px] font-bold text-navy">{t.title}</h3>
              <span className="gold-rule mt-3" />
              <p className="mt-3 text-[15px] leading-relaxed text-slate-ink">{t.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}