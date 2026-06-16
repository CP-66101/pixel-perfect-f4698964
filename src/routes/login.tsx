import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { SpartypeLogo } from "@/components/marketing/SpartypeLogo";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Log In — Spartype" },
      { name: "description", content: "Apne Spartype account mein log in karein." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Welcome back!");
    navigate({ to: "/dashboard" });
  }

  async function handleGoogle() {
    setBusy(true);
    const res = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin + "/dashboard",
    });
    if (res.error) {
      toast.error("Google sign-in failed.");
      setBusy(false);
      return;
    }
    if (res.redirected) return;
    navigate({ to: "/dashboard" });
  }

  return (
    <main className="min-h-screen" style={{ background: "var(--spartype-cream)" }}>
      <header className="bg-navy text-white" style={{ height: 64 }}>
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link to="/" aria-label="Spartype home"><SpartypeLogo variant="light" className="h-7" /></Link>
          <Link to="/signup" className="text-sm text-white/80 hover:text-white">Need an account? Sign up</Link>
        </div>
      </header>

      <div className="mx-auto max-w-md px-5 py-16 sm:px-8">
        <div className="bg-white p-8 sm:p-10" style={{ border: "1px solid rgba(27,43,75,0.12)", borderRadius: 4 }}>
          <h1 className="font-serif text-3xl mb-2" style={{ color: "var(--spartype-navy)" }}>Welcome back</h1>
          <p className="text-sm mb-6" style={{ color: "rgba(27,43,75,0.7)" }}>Apne business dashboard mein log in karein.</p>

          <button
            type="button"
            onClick={handleGoogle}
            disabled={busy}
            className="w-full flex items-center justify-center gap-3 border px-4 py-3 text-sm font-medium hover:bg-gray-50 disabled:opacity-50"
            style={{ borderColor: "rgba(27,43,75,0.2)", borderRadius: 4, color: "var(--spartype-navy)" }}
          >
            <GoogleIcon /> Continue with Google
          </button>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px" style={{ background: "rgba(27,43,75,0.15)" }} />
            <span className="text-xs" style={{ color: "rgba(27,43,75,0.5)" }}>OR</span>
            <div className="flex-1 h-px" style={{ background: "rgba(27,43,75,0.15)" }} />
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--spartype-navy)" }}>Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2.5 text-sm"
                style={{ border: "1px solid rgba(27,43,75,0.2)", borderRadius: 4, color: "var(--spartype-navy)" }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--spartype-navy)" }}>Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2.5 text-sm"
                style={{ border: "1px solid rgba(27,43,75,0.2)", borderRadius: 4, color: "var(--spartype-navy)" }}
              />
            </div>
            <button type="submit" disabled={busy} className="btn-gold w-full disabled:opacity-50">
              {busy ? "Logging in..." : "Log in"}
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-sm" style={{ color: "rgba(27,43,75,0.7)" }}>
          Don't have an account?{" "}
          <Link to="/signup" className="underline underline-offset-4" style={{ color: "var(--spartype-navy)" }}>Sign up</Link>
        </p>
      </div>
    </main>
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