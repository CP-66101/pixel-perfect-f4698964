import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/useAuth";
import { SpartypeLogo } from "@/components/marketing/SpartypeLogo";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Spartype" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: DashboardPage,
});

type Profile = {
  full_name: string;
  business_name: string;
  vertical: string;
  plan: string;
  onboarding_complete: boolean;
};

function DashboardPage() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [profileLoading, setProfileLoading] = useState(true);

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/login" });
  }, [loading, user, navigate]);

  useEffect(() => {
    if (!user) return;
    supabase
      .from("profiles")
      .select("full_name,business_name,vertical,plan,onboarding_complete")
      .eq("id", user.id)
      .maybeSingle()
      .then(({ data }) => {
        setProfile(data as Profile | null);
        setProfileLoading(false);
      });
  }, [user]);

  async function handleLogout() {
    await supabase.auth.signOut();
    toast.success("Logged out");
    navigate({ to: "/" });
  }

  if (loading || !user) {
    return <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--spartype-cream)" }}>Loading...</div>;
  }

  return (
    <main className="min-h-screen" style={{ background: "var(--spartype-cream)" }}>
      <header className="bg-navy text-white" style={{ height: 64 }}>
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link to="/" aria-label="Spartype home"><SpartypeLogo variant="light" className="h-7" /></Link>
          <div className="flex items-center gap-5">
            <span className="hidden sm:inline text-sm text-white/70">{user.email}</span>
            <button onClick={handleLogout} className="text-sm text-white/80 hover:text-white">Log out</button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
        <h1 className="font-serif text-4xl mb-2" style={{ color: "var(--spartype-navy)" }}>
          As-salamu alaykum{profile?.full_name ? `, ${profile.full_name.split(" ")[0]}` : ""}
        </h1>
        <p className="text-base mb-10" style={{ color: "rgba(27,43,75,0.7)" }}>
          Aap ka Spartype dashboard. Modules abhi build ho rahe hain — hum jald hi onboard karein ge.
        </p>

        {profileLoading ? (
          <div className="bg-white p-8" style={{ border: "1px solid rgba(27,43,75,0.12)", borderRadius: 4 }}>
            Loading profile...
          </div>
        ) : profile ? (
          <div className="grid gap-6 md:grid-cols-2">
            <Card title="Business">
              <Row label="Name" value={profile.business_name} />
              <Row label="Vertical" value={cap(profile.vertical)} />
              <Row label="Plan" value={cap(profile.plan)} />
            </Card>
            <Card title="Onboarding">
              <p className="text-sm mb-4" style={{ color: "rgba(27,43,75,0.7)" }}>
                Status: <strong>{profile.onboarding_complete ? "Complete ✓" : "In progress"}</strong>
              </p>
              <p className="text-sm" style={{ color: "rgba(27,43,75,0.6)" }}>
                Hamari team 24 ghante mein aap se rabta karegi taake setup shuru kiya ja sake.
              </p>
            </Card>
          </div>
        ) : (
          <Card title="Profile setup">
            <p className="text-sm mb-4" style={{ color: "rgba(27,43,75,0.7)" }}>
              Hum ne abhi tak aap ka business profile complete nahin kiya. Kuch detail add karein.
            </p>
            <Link to="/signup" className="btn-gold inline-block">Complete profile</Link>
          </Card>
        )}
      </div>
    </main>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white p-8" style={{ border: "1px solid rgba(27,43,75,0.12)", borderRadius: 4 }}>
      <h2 className="font-serif text-xl mb-4" style={{ color: "var(--spartype-navy)" }}>{title}</h2>
      {children}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-2 text-sm" style={{ borderBottom: "1px solid rgba(27,43,75,0.08)" }}>
      <span style={{ color: "rgba(27,43,75,0.6)" }}>{label}</span>
      <span style={{ color: "var(--spartype-navy)" }} className="font-medium">{value}</span>
    </div>
  );
}

function cap(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}