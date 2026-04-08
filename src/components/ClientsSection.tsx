import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";
import { Award } from "lucide-react";

// Import client logos
import machtzLogo from "@/assets/clients/machtz.png";
import worcraftLogo from "@/assets/clients/worcraft.png";
import dniproLogo from "@/assets/clients/dnipro.png";
import logoFour from "@/assets/clients/client4.png";
import consolaLogo from "@/assets/clients/consola.png";
import agroLogo from "@/assets/clients/agro.png";

const clients = [
  { id: 1, logo: machtzLogo, name: "Mächtz" },
  { id: 2, logo: worcraftLogo, name: "Worcraft" },
  { id: 3, logo: dniproLogo, name: "Дніпро Абразив" },
  { id: 4, logo: logoFour, name: "Client 4" },
  { id: 5, logo: consolaLogo, name: "Consola" },
  { id: 6, logo: agroLogo, name: "Агро-Спектр" },
];

export function ClientsSection() {
  const { language } = useLanguage();
  const t = translations[language].clients;

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-full px-6 py-3 border border-cyan-500/20 shadow-lg shadow-cyan-500/10 mb-6">
            <Award className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">{t.badge}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {clients.map((client, index) => (
            <div
              key={client.id}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Glass card */}
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-500 group-hover:scale-105 h-40 sm:h-44 flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center p-3">
                  {/* White background behind logo for better visibility */}
                  <div className="absolute inset-0 bg-white rounded-2xl opacity-0 group-hover:opacity-95 transition-opacity duration-300" />

                  {/* Logo */}
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="relative z-10 w-auto h-auto max-h-20 sm:max-h-24 max-w-[180px] sm:max-w-[220px] object-contain transition-all duration-300 group-hover:scale-110"
                    style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.1))" }}
                  />
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
