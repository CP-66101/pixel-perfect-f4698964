import { createFileRoute, Link, useNavigate, useSearch } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { SpartypeLogo } from "@/components/marketing/SpartypeLogo";

const searchSchema = z.object({
  plan: z.enum(["starter", "growth", "enterprise"]).optional(),
});

export const Route = createFileRoute("/signup")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Sign Up — Spartype" },
      { name: "description", content: "Apna Spartype account banayein. Setup in 2 weeks." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: SignupPage,
});

type Vertical = "restaurant" | "retail" | "school" | "clinic" | "other";
type Plan = "starter" | "growth" | "enterprise";

const verticals: { value: Vertical; label: string }[] = [
  { value: "restaurant", label: "Restaurant / Cafe" },
  { value: "retail", label: "Retail / Shop" },
  { value: "school", label: "School / Academy" },
  { value: "clinic", label: "Clinic / Pharmacy" },
  { value: "other", label: "Koi aur" },
];

const plans: { value: Plan; label: string; price: string }[] = [
  { value: "starter", label: "Starter", price: "PKR 1,000/mo" },
  { value: "growth", label: "Growth", price: "PKR 3,500/mo" },
  { value: "enterprise", label: "Enterprise", price: "Custom" },
];

function SignupPage() {
  const navigate = useNavigate();
  const search = useSearch({ from: "/signup" });
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    businessName: "",
    vertical: "restaurant" as Vertical,
    phone: "",
    city: "",
    plan: (search.plan ?? "starter") as Plan,
    billingCycle: "monthly" as "monthly" | "annual",
  });

  const update = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const next = () => setStep((s) => Math.min(5, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  async function handleGoogle() {
    setSubmitting(true);
    const res = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin + "/dashboard",
    });
    if (res.error) {
      toast.error("Google sign-in failed. Phir try karein.");
      setSubmitting(false);
      return;
    }
    if (res.redirected) return;
    navigate({ to: "/dashboard" });
  }

  async function handleSubmit() {
    setSubmitting(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
          emailRedirectTo: `${window.location.origin}/dashboard`,
          data: { full_name: form.fullName },
        },
      });
      if (error) throw error;
      const uid = data.user?.id;
      if (!uid) throw new Error("Account banane mein masla hua.");

      const { error: pErr } = await supabase.from("profiles").insert({
        id: uid,
        full_name: form.fullName,
        email: form.email,
        phone: form.phone || null,
        city: form.city || null,
        business_name: form.businessName,
        vertical: form.vertical,
        plan: form.plan,
        billing_cycle: form.billingCycle,
      });
      if (pErr) throw pErr;

      toast.success("Account ban gaya! Welcome to Spartype.");
      navigate({ to: "/dashboard" });
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Kuch ghalat ho gaya.";
      toast.error(msg);
    } finally {
      setSubmitting(false);
    }
  }

  const canContinue = (() => {
    if (step === 1) return form.fullName.length > 1 && /^\S+@\S+\.\S+$/.test(form.email) && form.password.length >= 8;
    if (step === 2) return form.businessName.trim().length > 1;
    if (step === 3) return !!form.vertical;
    if (step === 4) return form.phone.length >= 7;
    return true;
  })();

  return (
    <main className="min-h-screen" style={{ background: "var(--spartype-cream)" }}>
      <header className="bg-navy text-white" style={{ height: 64 }}>
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link to="/" aria-label="Spartype home"><SpartypeLogo variant="light" className="h-7" /></Link>
          <Link to="/login" className="text-sm text-white/80 hover:text-white">Already a member? Log in</Link>
        </div>
      </header>

      <div className="mx-auto max-w-2xl px-5 py-12 sm:px-8">
        <Stepper step={step} />

        <div className="mt-8 bg-white p-8 sm:p-10" style={{ border: "1px solid rgba(27,43,75,0.12)", borderRadius: 4 }}>
          {step === 1 && (
            <Step title="Apna account banayein" subtitle="Hum sirf email aur password se shuru karein ge.">
              <button
                type="button"
                onClick={handleGoogle}
                disabled={submitting}
                className="w-full flex items-center justify-center gap-3 border px-4 py-3 text-sm font-medium hover:bg-gray-50 disabled:opacity-50"
                style={{ borderColor: "rgba(27,43,75,0.2)", borderRadius: 4, color: "var(--spartype-navy)" }}
              >
                <GoogleIcon /> Continue with Google
              </button>
              <Divider />
              <Field label="Full name" value={form.fullName} onChange={(v) => update("fullName", v)} placeholder="Ahmad Khan" />
              <Field label="Email" type="email" value={form.email} onChange={(v) => update("email", v)} placeholder="ahmad@example.com" />
              <Field label="Password" type="password" value={form.password} onChange={(v) => update("password", v)} placeholder="Kam az kam 8 characters" hint="Aap ka password leaked password databases ke against check hoga." />
            </Step>
          )}

          {step === 2 && (
            <Step title="Business details" subtitle="Aap ka business kis naam se chalta hai?">
              <Field label="Business name" value={form.businessName} onChange={(v) => update("businessName", v)} placeholder="Khan Biryani House" />
            </Step>
          )}

          {step === 3 && (
            <Step title="Aap ka vertical kya hai?" subtitle="Ek select karein — hum specific tools dikhayein ge.">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {verticals.map((v) => (
                  <button
                    key={v.value}
                    type="button"
                    onClick={() => update("vertical", v.value)}
                    className="text-left px-4 py-4 transition-all"
                    style={{
                      border: form.vertical === v.value ? "2px solid var(--spartype-gold)" : "1px solid rgba(27,43,75,0.15)",
                      background: form.vertical === v.value ? "rgba(201,168,76,0.08)" : "white",
                      borderRadius: 4,
                      color: "var(--spartype-navy)",
                    }}
                  >
                    <span className="font-medium">{v.label}</span>
                  </button>
                ))}
              </div>
            </Step>
          )}

          {step === 4 && (
            <Step title="Contact info" subtitle="Hamari onboarding team aap se rabta karegi.">
              <Field label="Phone (WhatsApp)" value={form.phone} onChange={(v) => update("phone", v)} placeholder="+92 300 1234567" />
              <Field label="City" value={form.city} onChange={(v) => update("city", v)} placeholder="Lahore" />
            </Step>
          )}

          {step === 5 && (
            <Step title="Plan select karein" subtitle="Aap baad mein plan change kar saktay hain.">
              <div className="space-y-3 mt-2">
                {plans.map((p) => (
                  <button
                    key={p.value}
                    type="button"
                    onClick={() => update("plan", p.value)}
                    className="w-full flex items-center justify-between px-4 py-4 text-left"
                    style={{
                      border: form.plan === p.value ? "2px solid var(--spartype-gold)" : "1px solid rgba(27,43,75,0.15)",
                      background: form.plan === p.value ? "rgba(201,168,76,0.08)" : "white",
                      borderRadius: 4,
                      color: "var(--spartype-navy)",
                    }}
                  >
                    <span className="font-medium">{p.label}</span>
                    <span className="text-sm" style={{ color: "rgba(27,43,75,0.7)" }}>{p.price}</span>
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-4">
                <label className="text-sm" style={{ color: "var(--spartype-navy)" }}>Billing:</label>
                <select
                  value={form.billingCycle}
                  onChange={(e) => update("billingCycle", e.target.value as "monthly" | "annual")}
                  className="border px-3 py-2 text-sm"
                  style={{ borderColor: "rgba(27,43,75,0.2)", borderRadius: 4 }}
                >
                  <option value="monthly">Monthly</option>
                  <option value="annual">Annual (save 2 months)</option>
                </select>
              </div>
            </Step>
          )}

          <div className="mt-8 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={back}
              disabled={step === 1 || submitting}
              className="text-sm underline underline-offset-4 disabled:opacity-30"
              style={{ color: "var(--spartype-navy)" }}
            >
              ← Back
            </button>
            {step < 5 ? (
              <button
                type="button"
                onClick={next}
                disabled={!canContinue}
                className="btn-gold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue →
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitting}
                className="btn-gold disabled:opacity-50"
              >
                {submitting ? "Banaya ja raha hai..." : "Create account"}
              </button>
            )}
          </div>
        </div>

        <p className="mt-6 text-center text-xs" style={{ color: "rgba(27,43,75,0.6)" }}>
          By signing up, you agree to Spartype's Terms of Service and Privacy Policy.
        </p>
      </div>
    </main>
  );
}

function Stepper({ step }: { step: number }) {
  const labels = ["Account", "Business", "Vertical", "Contact", "Plan"];
  return (
    <div className="flex items-center gap-2">
      {labels.map((l, i) => {
        const n = i + 1;
        const active = step === n;
        const done = step > n;
        return (
          <div key={l} className="flex items-center gap-2 flex-1">
            <div
              className="flex h-7 w-7 items-center justify-center text-xs font-semibold"
              style={{
                borderRadius: 4,
                background: done ? "var(--spartype-navy)" : active ? "var(--spartype-gold)" : "white",
                color: done || active ? "white" : "var(--spartype-navy)",
                border: !done && !active ? "1px solid rgba(27,43,75,0.2)" : "none",
              }}
            >
              {done ? "✓" : n}
            </div>
            <span className="hidden sm:inline text-xs font-medium" style={{ color: active ? "var(--spartype-navy)" : "rgba(27,43,75,0.5)" }}>{l}</span>
            {i < labels.length - 1 && <div className="flex-1 h-px" style={{ background: "rgba(27,43,75,0.15)" }} />}
          </div>
        );
      })}
    </div>
  );
}

function Step({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div>
      <h1 className="font-serif text-2xl sm:text-3xl mb-2" style={{ color: "var(--spartype-navy)" }}>{title}</h1>
      <p className="text-sm mb-6" style={{ color: "rgba(27,43,75,0.7)" }}>{subtitle}</p>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  hint?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--spartype-navy)" }}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2.5 text-sm focus:outline-none focus:ring-2"
        style={{
          border: "1px solid rgba(27,43,75,0.2)",
          borderRadius: 4,
          color: "var(--spartype-navy)",
        }}
      />
      {hint && <p className="mt-1 text-xs" style={{ color: "rgba(27,43,75,0.55)" }}>{hint}</p>}
    </div>
  );
}

function Divider() {
  return (
    <div className="flex items-center gap-3 my-4">
      <div className="flex-1 h-px" style={{ background: "rgba(27,43,75,0.15)" }} />
      <span className="text-xs" style={{ color: "rgba(27,43,75,0.5)" }}>OR</span>
      <div className="flex-1 h-px" style={{ background: "rgba(27,43,75,0.15)" }} />
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
      <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84c-.21 1.13-.84 2.08-1.78 2.72v2.26h2.88c1.69-1.55 2.66-3.84 2.66-6.62z"/>
      <path fill="#34A853" d="M9 18c2.4 0 4.42-.8 5.89-2.16l-2.88-2.26c-.8.54-1.82.86-3.01.86-2.31 0-4.27-1.56-4.97-3.66H1.06v2.3A9 9 0 0 0 9 18z"/>
      <path fill="#FBBC05" d="M4.03 10.78A5.4 5.4 0 0 1 3.74 9c0-.62.11-1.22.29-1.78V4.92H1.06A8.98 8.98 0 0 0 0 9c0 1.45.35 2.82.96 4.04l3.07-2.26z"/>
      <path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.43 1.34l2.56-2.56C13.42.88 11.4 0 9 0A9 9 0 0 0 1.06 4.92l3.07 2.3C4.73 5.13 6.69 3.58 9 3.58z"/>
    </svg>
  );
}