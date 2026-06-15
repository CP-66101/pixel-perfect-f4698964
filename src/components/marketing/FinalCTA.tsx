import { Reveal } from "./Reveal";
import { WarriorWatermark } from "./WarriorWatermark";

export function FinalCTA() {
  return (
    <section className="section-pad relative overflow-hidden bg-navy text-white">
      <WarriorWatermark
        className="left-1/2 top-1/2 h-[140%] w-auto -translate-x-1/2 -translate-y-1/2"
        opacity={0.05}
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <div className="eyebrow">Limited founding spots</div>
          <h2
            className="mt-5 font-display font-bold leading-tight text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 2.625rem)" }}
          >
            Aaj hi apni jagah secure karein.
          </h2>
          <span className="gold-rule mx-auto mt-6" />
          <p className="mx-auto mt-7 max-w-xl text-[16px] leading-relaxed text-white/70">
            Founding member spots are limited. Sign up in minutes, and our team will reach out within 24 hours to begin your setup.
          </p>
          <div className="mt-9">
            <a href="/signup" className="btn-gold" style={{ padding: "1rem 2rem", fontSize: "1rem" }}>
              Abhi Sign Up Karein — Free Se Shuru →
            </a>
          </div>
          <p className="mt-6 text-[13px] text-white/40">
            Already have an account?{" "}
            <a href="/login" className="underline underline-offset-4 hover:text-white">
              Log in →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}