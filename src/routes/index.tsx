import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/marketing/Nav";
import { Hero } from "@/components/marketing/Hero";
import { SocialProof } from "@/components/marketing/SocialProof";
import { PainPoints } from "@/components/marketing/PainPoints";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { Verticals } from "@/components/marketing/Verticals";
import { Pricing } from "@/components/marketing/Pricing";
import { Testimonials } from "@/components/marketing/Testimonials";
import { TrustStrip } from "@/components/marketing/TrustStrip";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { Footer } from "@/components/marketing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Spartype — Business management software for Pakistani SMEs" },
      {
        name: "description",
        content:
          "Spartype helps Pakistani restaurants, retail, schools and clinics run on one organized, FBR-ready system. Setup in 2 weeks. From PKR 1,000/month.",
      },
      { property: "og:title", content: "Spartype — Apna business, organized." },
      {
        property: "og:description",
        content:
          "Vertical SaaS for Pakistani SMEs. Restaurants, retail, schools, clinics. FBR-ready. Setup in 2 weeks.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-cream">
      <Nav />
      <Hero />
      <SocialProof />
      <PainPoints />
      <HowItWorks />
      <Verticals />
      <Pricing />
      <Testimonials />
      <TrustStrip />
      <FinalCTA />
      <Footer />
    </main>
  );
}
