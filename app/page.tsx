import { HeroSection } from "@/components/sections/hero-section";
import { TopNav } from "@/components/sections/top-nav";
import { AboutSection } from "@/components/sections/about-section";
import { WebGpuShowcase } from "@/components/sections/webgpu-showcase";
import { TechnologyStackSection } from "@/components/sections/technology-stack";
import { ArchitectureSection } from "@/components/sections/architecture-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CallToActionSection } from "@/components/sections/call-to-action";
import { SiteFooter } from "@/components/sections/site-footer";

export default function HomePage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh-gradient opacity-80 blur-3xl" />
      <TopNav />
      <main className="relative z-10 flex flex-col gap-8 pb-32 pt-12">
        <HeroSection />
        <AboutSection />
        <WebGpuShowcase />
        <TechnologyStackSection />
        <ArchitectureSection />
        <FAQSection />
        <CallToActionSection />
      </main>
      <SiteFooter />
    </div>
  );
}
