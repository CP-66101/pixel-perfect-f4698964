import { Reveal } from "./Reveal";
import { NotebookTangledIcon, ClockQuestionIcon, FbrDocIcon } from "./Icons";

const cards = [
  {
    Icon: NotebookTangledIcon,
    title: "Hisaab mein confusion?",
    body: "Manual billing, lost receipts, and cash you can't account for at month end. When things don't add up, you spend hours finding out why.",
  },
  {
    Icon: ClockQuestionIcon,
    title: "Staff ka pata nahi chalata?",
    body: "No visibility on attendance, task completion, or daily sales performance. You find out what went wrong only after the damage is done.",
  },
  {
    Icon: FbrDocIcon,
    title: "FBR ka pressure badh raha hai?",
    body: "SRO 288 of 2026 has brought restaurants, schools, clinics, and shops directly into mandatory e-invoicing scope. The deadline is coming — most businesses aren't ready.",
  },
];

export function PainPoints() {
  return (
    <section className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="eyebrow">Kya yeh aapki kahani hai?</div>
          <h2 className="mt-4 font-display text-[28px] font-bold leading-tight text-navy md:text-[32px]">
            Hum jaante hain — yeh mushkilein aapko roz rokti hain.
          </h2>
          <span className="gold-rule mx-auto mt-6" />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <article
                className="h-full border-l-[3px] p-7"
                style={{
                  borderColor: "var(--spartype-navy)",
                  backgroundColor: "var(--spartype-cream)",
                  borderRadius: 4,
                }}
              >
                <c.Icon className="h-9 w-9 text-navy" />
                <h3 className="mt-5 font-display text-[22px] font-bold italic text-navy">
                  {c.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-ink">{c.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}