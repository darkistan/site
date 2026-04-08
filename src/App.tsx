import { BenefitsSection } from "@/components/BenefitsSection";
import { ClientsSection } from "@/components/ClientsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesSection } from "@/components/ServicesSection";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0a0a0f]">
        <Header />
        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
        <ProcessSection />
        <ClientsSection />
        <CTASection />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
