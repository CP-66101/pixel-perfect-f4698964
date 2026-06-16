import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Sign Up — Spartype" },
      { name: "description", content: "Apna Spartype account banayein. Setup in 2 weeks." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: SignupPage,
});

function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4" style={{ background: "var(--spartype-cream)" }}>
      <div className="max-w-md w-full text-center bg-white p-10" style={{ border: "1px solid rgba(27,43,75,0.12)", borderRadius: 4 }}>
        <h1 className="font-serif text-3xl mb-3" style={{ color: "var(--spartype-navy)" }}>
          Sign Up — Coming Soon
        </h1>
        <p className="text-sm mb-6" style={{ color: "rgba(27,43,75,0.7)" }}>
          Hum signup wizard build kar rahe hain. Jald hi launch hoga.
          Abhi ke liye hamein contact karein.
        </p>
        <div className="flex flex-col gap-3">
          <a href="mailto:hello@spartype.com" className="btn-gold">Contact Sales</a>
          <Link to="/" className="text-sm underline underline-offset-4" style={{ color: "var(--spartype-navy)" }}>
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}