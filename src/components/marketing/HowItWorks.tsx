import { Reveal } from "./Reveal";
import { WarriorWatermark } from "./WarriorWatermark";

const steps = [
  {
    n: "01",
    title: "Sign Up in Minutes",
    body: "Create your account, choose your plan, and tell us about your business. No paperwork, no calls needed to get started.",
  },
  {
    n: "02",
    title: "We Build It For You",
    body: "Within 2 weeks, our team configures your complete management system — branded, set up to your workflow, and your staff trained on it.",
  },
  {
    n: "03",
    title: "Run Your Business Smarter",
    body: "Manage everything — bookings, inventory, billing, staff, and reports — from any device. We're on WhatsApp whenever you need us.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="section-pad relative overflow-hidden bg-navy text-white">
      <WarriorWatermark
        className="-right-20 top-1/2 h-[110%] w-auto -translate-y-1/2"
        opacity={0.03}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="eyebrow">How it works</div>
          <h2 className="mt-4 font-display text-[28px] font-bold leading-tight text-white md:text-[34px]">
            Teen asaan steps mein — aur aap ready hain.
          </h2>
          <span className="gold-rule mx-auto mt-6" />
        </Reveal>
        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="relative">
                <span
                  aria-hidden
                  className="absolute -top-6 left-0 font-display font-bold leading-none"
                  style={{
                    fontSize: 80,
                    color: "var(--spartype-gold)",
                    opacity: 0.18,
                  }}
                >
                  {s.n}
                </span>
                <div className="relative pt-10">
                  <div className="text-[13px] font-semibold uppercase tracking-widest text-[color:var(--spartype-gold)]">
                    Step {Number(s.n)}
                  </div>
                  <h3 className="mt-3 font-display text-[22px] font-bold text-white">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/70">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}