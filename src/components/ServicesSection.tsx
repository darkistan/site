import { Cloud, Server, Network, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function ServicesSection() {
  const { language } = useLanguage();
  const t = translations[language].services;

  const services = [
    {
      icon: Cloud,
      title: t.card1.title,
      description: t.card1.description,
      gradient: "from-cyan-500 to-blue-500",
      size: "large", // Will span more in bento grid
    },
    {
      icon: Server,
      title: t.card2.title,
      description: t.card2.description,
      gradient: "from-purple-500 to-pink-500",
      size: "medium",
    },
    {
      icon: Network,
      title: t.card3.title,
      description: t.card3.description,
      gradient: "from-blue-500 to-cyan-500",
      size: "medium",
    },
    {
      icon: Shield,
      title: t.card4.title,
      description: t.card4.description,
      gradient: "from-violet-500 to-purple-500",
      size: "large",
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-cyan-400 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20">
              {t.badge}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLarge = service.size === "large";

            return (
              <div
                key={index}
                className={`group relative ${
                  isLarge ? "lg:col-span-2" : "lg:col-span-1"
                } ${index === 0 ? "md:row-span-2" : ""}`}
              >
                {/* Glow effect on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500`}
                />

                {/* Glass card */}
                <div
                  className={`relative h-full bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 group-hover:scale-[1.02] ${
                    isLarge ? "min-h-[300px]" : "min-h-[250px]"
                  } flex flex-col justify-between`}
                >
                  {/* Icon with gradient background */}
                  <div>
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed">{service.description}</p>
                  </div>

                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-20 h-20 opacity-5">
                    <Icon className="w-full h-full text-white" />
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${service.gradient} rounded-full transition-all duration-500`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <p className="text-gray-300 mb-4">{t.ctaQuestion}</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors group"
            >
              <span>{t.cta}</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
