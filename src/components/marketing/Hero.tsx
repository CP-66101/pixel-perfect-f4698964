import { motion, type Variants } from "framer-motion";
import { WarriorWatermark } from "./WarriorWatermark";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" },
  }),
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-navy text-white"
    >
      <WarriorWatermark
        className="left-1/2 top-1/2 h-[120%] w-auto -translate-x-1/2 -translate-y-1/2"
        opacity={0.04}
      />
      {/* Subtle gold radial */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-20 h-[460px] w-[460px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--spartype-gold) 14%, transparent), transparent 70%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-5 lg:gap-10 lg:py-28">
        <div className="lg:col-span-3">
          <motion.div custom={0} initial="hidden" animate="show" variants={fadeUp} className="eyebrow">
            Pakistan ke businesses ke liye banaya gaya
          </motion.div>
          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-6 font-display font-bold leading-[1.05] text-white"
            style={{ fontSize: "clamp(2rem, 5.2vw, 3.5rem)" }}
          >
            Apna business —
            <br />
            <span className="relative inline-block">
              organized, professional,
              <span
                aria-hidden
                className="absolute -bottom-2 left-0 right-0 h-[3px]"
                style={{ backgroundColor: "var(--spartype-gold)" }}
              />
            </span>
            <br />
            aur easy.
          </motion.h1>
          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-7 max-w-[480px] text-[18px] leading-relaxed text-white/70"
          >
            A complete management system for your restaurant, shop, school, or clinic. Set up in 2 weeks. Starts from PKR 1,000/month.
          </motion.p>
          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a href="/signup" className="btn-gold">Abhi Sign Up Karein</a>
            <a href="#pricing" className="btn-outline-gold">Pricing Dekhein</a>
          </motion.div>
          <motion.p
            custom={4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-6 text-[13px] text-white/50"
          >
            🔒  No credit card required  ·  Setup in 2 weeks  ·  Cancel anytime
          </motion.p>
        </div>
        <motion.div
          custom={5}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="lg:col-span-2"
        >
          <DashboardMock />
        </motion.div>
      </div>
    </section>
  );
}

function DashboardMock() {
  const stats = [
    { label: "Today's Revenue", value: "PKR 84,500", delta: "+12%" },
    { label: "Active Staff", value: "12 / 14", delta: "On shift" },
    { label: "Inventory Alerts", value: "3", delta: "Low stock" },
    { label: "Pending Invoices", value: "7", delta: "Due today" },
  ];
  return (
    <div
      className="relative rounded-[4px] border border-white/10 p-4 shadow-2xl"
      style={{
        backgroundColor: "#0F1D30",
        boxShadow:
          "0 30px 60px -20px rgba(0,0,0,0.55), 0 0 0 1px rgba(201,168,76,0.18), 0 0 60px -10px rgba(201,168,76,0.18)",
      }}
    >
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ backgroundColor: "var(--spartype-gold)" }}
          />
          <span className="font-display text-[15px] tracking-wide text-white">SPARTYPE</span>
        </div>
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-[4px] border border-white/8 p-3"
            style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
          >
            <div
              className="mb-2 h-[2px] w-8"
              style={{ backgroundColor: "var(--spartype-gold)" }}
            />
            <div className="text-[11px] uppercase tracking-wide text-white/50">{s.label}</div>
            <div className="mt-1 font-display text-[18px] font-semibold text-white">{s.value}</div>
            <div className="text-[11px] text-white/40">{s.delta}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-[4px] border border-white/8 p-3" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-wide text-white/50">Weekly Sales</span>
          <span className="text-[11px] text-[color:var(--spartype-gold)]">+18%</span>
        </div>
        <svg viewBox="0 0 240 60" className="h-14 w-full">
          <polyline
            fill="none"
            stroke="var(--spartype-gold)"
            strokeWidth="1.5"
            points="0,45 30,38 60,42 90,28 120,30 150,18 180,22 210,10 240,14"
          />
          <polyline
            fill="url(#g)"
            stroke="none"
            points="0,45 30,38 60,42 90,28 120,30 150,18 180,22 210,10 240,14 240,60 0,60"
            opacity="0.25"
          />
          <defs>
            <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="var(--spartype-gold)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="var(--spartype-gold)" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}