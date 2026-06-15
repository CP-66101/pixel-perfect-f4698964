import { Reveal } from "./Reveal";

const items = [
  {
    quote:
      "Pehle hamare restaurant mein roz ka hisaab manually hota tha aur mahine ke end pe numbers kabhi match nahi karte the. Spartype ne pehle hafte mein hi yeh problem solve kar di. Ab mujhe kisi se poochna nahi parta — sab screen pe hai.",
    name: "Usman Tariq",
    role: "Owner, Fusion Table Restaurant, Lahore",
  },
  {
    quote:
      "Hum teen branches pe ek saath inventory track nahi kar sakte the. Ek branch mein stock khatam hota tha aur humein pata hi nahi chalta tha. Spartype ka dashboard sab ek jagah dikha deta hai. Team ne setup bhi khud kar ke diya — bahut acha experience tha.",
    name: "Raheela Siddiqui",
    role: "Manager, MedPlus Pharmacy, Karachi",
  },
  {
    quote:
      "School ki fees manually collect karna aur receipts banana ek nightmare tha. Ab parents ko automatically receipt milti hai aur main monthly report ek click mein nikal leta hoon. FBR compliance ke liye bhi tayar hain ab.",
    name: "Asif Mahmood",
    role: "Principal, Bright Futures Academy, Islamabad",
  },
];

export function Testimonials() {
  return (
    <section className="section-pad bg-navy text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="eyebrow">From founding clients</div>
          <h2 className="mt-4 font-display text-[28px] font-bold leading-tight text-white md:text-[34px]">
            Jo pehle join kar chuke hain — unki baat sunein.
          </h2>
          <span className="gold-rule mx-auto mt-6" />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <article
                className="h-full border-l-[3px] p-7"
                style={{
                  borderColor: "var(--spartype-gold)",
                  backgroundColor: "var(--spartype-navy-deep)",
                  borderRadius: 4,
                  color: "var(--spartype-cream)",
                }}
              >
                <p className="text-[15px] leading-relaxed italic">"{t.quote}"</p>
                <div className="mt-6 border-t pt-4" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                  <div className="font-display text-[16px] font-bold text-white">{t.name}</div>
                  <div className="text-[13px] text-white/60">{t.role}</div>
                  <div className="mt-2 tracking-widest text-[color:var(--spartype-gold)]">★★★★★</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}