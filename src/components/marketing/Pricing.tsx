import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { CheckIcon } from "./Icons";

type Cycle = "monthly" | "annual";

const features = {
  starter: [
    "Single branch, up to 3 users",
    "Core modules: bookings, inventory, billing",
    "Sales reports",
    "WhatsApp support",
    "Self-guided setup",
    "FBR-ready data structure",
  ],
  growth: [
    "Multi-branch, unlimited users",
    "All vertical modules unlocked",
    "Advanced analytics & custom reports",
    "2-week guided setup included",
    "Priority WhatsApp support",
    "FBR-ready integration hooks",
    "Staff management & scheduling",
    "Custom branding on invoices",
  ],
};

export function Pricing() {
  const [cycle, setCycle] = useState<Cycle>("monthly");

  const starterPrice = cycle === "monthly" ? "PKR 1,000" : "PKR 10,000";
  const starterOld = cycle === "monthly" ? "PKR 2,000" : "PKR 24,000";
  const unit = cycle === "monthly" ? "/month" : "/year";
  const starterSave = cycle === "annual" ? "Saves PKR 14,000" : null;

  const growthPrice = cycle === "monthly" ? "PKR 4,000" : "PKR 40,000";
  const growthOld = cycle === "monthly" ? "PKR 7,000" : "PKR 84,000";
  const growthSave = cycle === "annual" ? "Saves PKR 44,000" : null;

  return (
    <section id="pricing" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="eyebrow">Shafaff pricing — koi chhupa hua charge nahi</div>
          <h2 className="mt-4 font-display text-[28px] font-bold leading-tight text-navy md:text-[34px]">
            Simple pricing. Pakistani businesses ke liye.
          </h2>
          <span className="gold-rule mx-auto mt-6" />
        </Reveal>

        <div className="mt-10 flex justify-center">
          <div
            className="relative flex items-center p-1"
            style={{
              backgroundColor: "var(--spartype-cream)",
              border: "1px solid var(--spartype-border)",
              borderRadius: 4,
            }}
          >
            {(["monthly", "annual"] as Cycle[]).map((c) => {
              const on = cycle === c;
              return (
                <button
                  key={c}
                  onClick={() => setCycle(c)}
                  className="relative z-10 px-5 py-2 text-[14px] font-semibold capitalize transition-colors"
                  style={{ color: on ? "white" : "var(--spartype-slate)" }}
                >
                  {on && (
                    <motion.span
                      layoutId="pricingPill"
                      className="absolute inset-0 -z-10"
                      style={{ backgroundColor: "var(--spartype-navy)", borderRadius: 4 }}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {c}
                  {c === "annual" && (
                    <span
                      className="ml-2 px-2 py-[2px] text-[10px] font-bold uppercase tracking-wider"
                      style={{
                        backgroundColor: "var(--spartype-gold)",
                        color: "var(--spartype-navy)",
                        borderRadius: 4,
                      }}
                    >
                      Save 2 mo
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal>
            <article
              className="relative h-full border p-8"
              style={{
                backgroundColor: "var(--spartype-cream)",
                borderColor: "var(--spartype-navy)",
                borderRadius: 4,
              }}
            >
              <div
                className="absolute right-6 top-6 px-2 py-1 text-[10px] font-bold uppercase tracking-wider"
                style={{ backgroundColor: "var(--spartype-gold)", color: "var(--spartype-navy)", borderRadius: 4 }}
              >
                Founding member rate
              </div>
              <div className="text-[13px] font-semibold uppercase tracking-widest text-navy">Starter</div>
              <div className="mt-5 flex items-baseline gap-3">
                <span className="font-display text-[42px] font-bold text-navy">{starterPrice}</span>
                <span className="text-[14px] text-slate-ink">{unit}</span>
              </div>
              <div className="mt-1 text-[14px] text-slate-ink">
                <span className="line-through">{starterOld}</span>
                {starterSave && <span className="ml-2 text-[color:var(--spartype-success)]">{starterSave}</span>}
              </div>
              <p className="mt-4 text-[14px] text-slate-ink">For businesses just getting started</p>
              <ul className="mt-7 space-y-3">
                {features.starter.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14px] text-charcoal">
                    <CheckIcon className="mt-[3px] h-4 w-4 text-[color:var(--spartype-gold)]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/signup?plan=starter"
                className="mt-8 inline-flex w-full items-center justify-center px-6 py-3 text-[14px] font-semibold transition-colors hover:bg-[color:var(--spartype-navy)] hover:text-white"
                style={{
                  border: "1px solid var(--spartype-navy)",
                  color: "var(--spartype-navy)",
                  borderRadius: 4,
                  backgroundColor: "transparent",
                }}
              >
                Starter se shuru karein →
              </a>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article
              className="relative h-full border-2 p-8"
              style={{
                backgroundColor: "var(--spartype-navy)",
                borderColor: "var(--spartype-gold)",
                borderRadius: 4,
                color: "white",
              }}
            >
              <div
                className="absolute right-6 top-6 px-2 py-1 text-[10px] font-bold uppercase tracking-wider"
                style={{ backgroundColor: "var(--spartype-gold)", color: "var(--spartype-navy)", borderRadius: 4 }}
              >
                Most popular
              </div>
              <div className="text-[13px] font-semibold uppercase tracking-widest text-[color:var(--spartype-gold)]">Growth</div>
              <div className="mt-5 flex items-baseline gap-3">
                <span className="font-display text-[42px] font-bold text-white">{growthPrice}</span>
                <span className="text-[14px] text-white/70">{unit}</span>
              </div>
              <div className="mt-1 text-[14px] text-white/70">
                <span className="line-through">{growthOld}</span>
                {growthSave && <span className="ml-2 text-[color:var(--spartype-gold-soft)]">{growthSave}</span>}
              </div>
              <p className="mt-4 text-[14px] text-white/70">For businesses serious about scaling</p>
              <ul className="mt-7 space-y-3">
                {features.growth.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14px] text-white/90">
                    <CheckIcon className="mt-[3px] h-4 w-4 text-[color:var(--spartype-gold)]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="/signup?plan=growth" className="btn-gold mt-8" style={{ width: "100%" }}>
                Growth plan lein →
              </a>
            </article>
          </Reveal>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-[14px] text-slate-ink">
          A one-time setup fee of PKR 5,000 (Starter) or PKR 10,000–15,000 (Growth) applies and is
          fully credited against your first months of subscription. Discussed after signup.
        </p>
        <p className="mt-4 text-center text-[13px] font-semibold text-[color:var(--spartype-gold)]">
          ⚡ Founding member rates available for the first 50 clients only. Price increases once capacity is reached.
        </p>
      </div>
    </section>
  );
}