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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-cyan-600 focus:px-4 focus:py-3 focus:text-white focus:outline-none focus:ring-2 focus:ring-cyan-300"
        >
          До основного вмісту
        </a>
        <Header />
        <main id="main-content">
          <HeroSection />
          <ServicesSection />
          <BenefitsSection />
          <SolutionsFitSection />
          <ProcessSection />
          <ClientsSection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
