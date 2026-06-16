import { Link } from "@tanstack/react-router";
import { SpartypeLogo } from "./SpartypeLogo";
import { useAuth } from "@/lib/useAuth";

export function Nav() {
  const { user, loading } = useAuth();
  return (
    <header className="sticky top-0 z-50 bg-navy text-white" style={{ height: 64 }}>
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#hero" className="flex items-center" aria-label="Spartype home">
          <SpartypeLogo variant="light" className="h-7" />
        </a>
        <nav className="flex items-center gap-6 sm:gap-8">
          <a href="#pricing" className="hidden text-[14px] text-white/70 hover:text-white transition-colors md:inline">Pricing</a>
          <a href="#how" className="hidden text-[14px] text-white/70 hover:text-white transition-colors md:inline">How It Works</a>
          {loading ? null : user ? (
            <Link to="/dashboard" className="btn-gold" style={{ padding: "0.55rem 1.1rem", fontSize: 14 }}>
              Dashboard →
            </Link>
          ) : (
            <>
              <Link to="/login" className="hidden sm:inline text-[14px] text-white/70 hover:text-white transition-colors">Log in</Link>
              <Link to="/signup" className="btn-gold" style={{ padding: "0.55rem 1.1rem", fontSize: 14 }}>
                Shuru Karein →
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}