import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { CheckIcon } from "./Icons";

type Vertical = {
  key: string;
  emoji: string;
  label: string;
  features: string[];
  mockTitle: string;
  mockRows: { label: string; value: string; tag?: string }[];
};

const verticals: Vertical[] = [
  {
    key: "restaurant",
    emoji: "🍽",
    label: "Restaurant",
    features: [
      "Table & reservation management",
      "Daily order tracking",
      "Staff shifts",
      "Inventory & supplier records",
      "Sales reports",
      "FBR-ready invoice records",
      "WhatsApp order notifications",
    ],
    mockTitle: "Today's Service",
    mockRows: [
      { label: "Table 04 — Khan", value: "PKR 4,200", tag: "Paid" },
      { label: "Table 11 — Walk-in", value: "PKR 2,650", tag: "Open" },
      { label: "Table 02 — Ahmed", value: "PKR 8,900", tag: "Bill out" },
      { label: "Takeaway #218", value: "PKR 1,450", tag: "Ready" },
    ],
  },
  {
    key: "retail",
    emoji: "🏪",
    label: "Retail & Pharmacy",
    features: [
      "Product inventory with low-stock alerts",
      "Multi-branch sync",
      "POS billing",
      "Supplier management",
      "Daily/monthly sales reports",
      "FBR-ready transaction records",
      "Customer ledger",
    ],
    mockTitle: "Inventory — Low Stock",
    mockRows: [
      { label: "Panadol Extra 500mg", value: "12 left", tag: "Reorder" },
      { label: "Augmentin 625", value: "4 left", tag: "Critical" },
      { label: "Brufen 400mg", value: "28 left", tag: "OK" },
      { label: "Disprin", value: "0", tag: "Out" },
    ],
  },
  {
    key: "school",
    emoji: "🎓",
    label: "School & Academy",
    features: [
      "Student admissions & profiles",
      "Fee collection & receipts",
      "Attendance tracking",
      "Timetable management",
      "Parent notifications",
      "Monthly fee reports",
      "FBR-ready billing",
    ],
    mockTitle: "June Fee Collection",
    mockRows: [
      { label: "Class 9 — Section A", value: "32 / 34", tag: "Pending 2" },
      { label: "Class 8 — Section B", value: "28 / 28", tag: "Done" },
      { label: "Class 6 — Section C", value: "25 / 30", tag: "Pending 5" },
      { label: "Hostel — Block 2", value: "18 / 20", tag: "Pending 2" },
    ],
  },
  {
    key: "clinic",
    emoji: "🏥",
    label: "Clinic & Hospital",
    features: [
      "Patient registration & records",
      "Appointment scheduling",
      "Doctor availability management",
      "Billing & receipts",
      "Staff scheduling",
      "Daily patient reports",
      "FBR-ready invoicing",
    ],
    mockTitle: "Today's Appointments",
    mockRows: [
      { label: "10:00 — Dr. Asma", value: "Aleena R.", tag: "Checked in" },
      { label: "10:30 — Dr. Faisal", value: "Bilal A.", tag: "Waiting" },
      { label: "11:00 — Dr. Asma", value: "Sara N.", tag: "Confirmed" },
      { label: "11:30 — Dr. Faisal", value: "Imran K.", tag: "Confirmed" },
    ],
  },
];

export function Verticals() {
  const [active, setActive] = useState(verticals[0].key);
  const current = verticals.find((v) => v.key === active)!;

  return (
    <section className="section-pad bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="eyebrow">Built for your business</div>
          <h2 className="mt-4 font-display text-[28px] font-bold leading-tight text-navy md:text-[34px]">
            Aapka kaam kya hai?
          </h2>
          <p className="mt-4 text-[16px] text-slate-ink">
            Spartype is built specifically for four types of Pakistani businesses.
          </p>
          <span className="gold-rule mx-auto mt-6" />
        </Reveal>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {verticals.map((v) => {
            const on = active === v.key;
            return (
              <button
                key={v.key}
                onClick={() => setActive(v.key)}
                className="flex items-center gap-2 px-5 py-3 text-[14px] font-semibold transition-all"
                style={{
                  borderRadius: 4,
                  backgroundColor: on ? "var(--spartype-navy)" : "white",
                  color: on ? "white" : "var(--spartype-navy)",
                  border: `1px solid ${on ? "var(--spartype-navy)" : "var(--spartype-border)"}`,
                }}
              >
                <span>{v.emoji}</span>
                <span>{v.label}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.key}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="mt-12 grid gap-10 md:grid-cols-2 md:items-center"
          >
            <div>
              <h3 className="font-display text-[24px] font-bold text-navy">
                Built for {current.label.toLowerCase()}.
              </h3>
              <ul className="mt-6 space-y-3">
                {current.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[15px] text-charcoal">
                    <CheckIcon className="mt-1 h-4 w-4 text-[color:var(--spartype-gold)]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="border p-5"
              style={{
                backgroundColor: "white",
                borderColor: "var(--spartype-border)",
                borderRadius: 4,
                boxShadow: "0 20px 50px -25px rgba(27,43,75,0.25)",
              }}
            >
              <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: "var(--spartype-border)" }}>
                <span className="text-[12px] font-semibold uppercase tracking-widest text-slate-ink">
                  {current.mockTitle}
                </span>
                <span className="text-[12px] text-[color:var(--spartype-gold)]">Live</span>
              </div>
              <ul className="mt-3 divide-y" style={{ borderColor: "var(--spartype-border)" }}>
                {current.mockRows.map((r) => (
                  <li key={r.label} className="flex items-center justify-between py-3">
                    <div className="text-[14px] text-charcoal">{r.label}</div>
                    <div className="flex items-center gap-3">
                      <span className="text-[14px] font-semibold text-navy">{r.value}</span>
                      {r.tag && (
                        <span
                          className="px-2 py-1 text-[11px] font-semibold"
                          style={{
                            borderRadius: 4,
                            backgroundColor: "color-mix(in oklab, var(--spartype-gold) 18%, transparent)",
                            color: "var(--spartype-navy)",
                          }}
                        >
                          {r.tag}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}