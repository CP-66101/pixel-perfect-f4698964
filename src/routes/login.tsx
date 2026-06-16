import { createFileRoute, Link } from "@tanstack/react-router";

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
  return (
    <main className="min-h-screen flex items-center justify-center px-4" style={{ background: "var(--spartype-cream)" }}>
      <div className="max-w-md w-full text-center bg-white p-10" style={{ border: "1px solid rgba(27,43,75,0.12)", borderRadius: 4 }}>
        <h1 className="font-serif text-3xl mb-3" style={{ color: "var(--spartype-navy)" }}>
          Log In — Coming Soon
        </h1>
        <p className="text-sm mb-6" style={{ color: "rgba(27,43,75,0.7)" }}>
          Account login Phase 2 mein available hoga.
        </p>
        <div className="flex flex-col gap-3">
          <Link to="/signup" className="btn-gold">Sign Up Instead</Link>
          <Link to="/" className="text-sm underline underline-offset-4" style={{ color: "var(--spartype-navy)" }}>
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}