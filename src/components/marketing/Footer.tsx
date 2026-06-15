import { SpartypeLogo } from "./SpartypeLogo";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <SpartypeLogo variant="light" className="h-8" />
          <p className="mt-5 max-w-xs text-[14px] leading-relaxed">
            Pakistan ke liye. Pakistani businesses ke liye.
          </p>
          <p className="mt-6 text-[12px] text-white/40">
            © 2026 Spar Type Pvt Ltd. All rights reserved.
          </p>
        </div>
        <div>
          <div className="text-[12px] font-semibold uppercase tracking-widest text-[color:var(--spartype-gold)]">
            Navigate
          </div>
          <ul className="mt-5 space-y-3 text-[14px]">
            <li><a href="#hero" className="hover:text-white">Home</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="#how" className="hover:text-white">How It Works</a></li>
            <li><a href="/signup" className="hover:text-white">Sign Up</a></li>
            <li><a href="/login" className="hover:text-white">Log In</a></li>
          </ul>
        </div>
        <div>
          <div className="text-[12px] font-semibold uppercase tracking-widest text-[color:var(--spartype-gold)]">
            Contact
          </div>
          <ul className="mt-5 space-y-3 text-[14px]">
            <li>
              <a href="mailto:signup@spartype.com" className="hover:text-white">
                signup@spartype.com
              </a>
            </li>
            <li>WhatsApp: <span className="text-white/50">[Coming soon]</span></li>
            <li>Rawalpindi, Pakistan</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}