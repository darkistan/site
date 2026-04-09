import { BenefitsSection } from "@/components/BenefitsSection";
import { ClientsSection } from "@/components/ClientsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SolutionsFitSection } from "@/components/SolutionsFitSection";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0a0a0f]">
        <Header />
        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
        <SolutionsFitSection />
        <ProcessSection />
        <ClientsSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
