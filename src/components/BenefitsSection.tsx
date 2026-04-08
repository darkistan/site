import { DollarSign, Clock, Users, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function BenefitsSection() {
  const { language } = useLanguage();
  const t = translations[language].benefits;

  const benefits = [
    {
      icon: DollarSign,
      title: t.card1.title,
      description: t.card1.description,
      stat: t.card1.stat,
      color: "cyan",
    },
    {
      icon: Clock,
      title: t.card2.title,
      description: t.card2.description,
      stat: t.card2.stat,
      color: "purple",
    },
    {
      icon: Users,
      title: t.card3.title,
      description: t.card3.description,
      stat: t.card3.stat,
      color: "blue",
    },
  ];

  return (
    <section
      id="benefits"
      className="py-24 bg-gradient-to-b from-[#0a0a0f] to-[#0f0f1a] relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-purple-400 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">
              {t.badge}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Comparison Grid - Data-driven layout */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div key={index} className="group relative">
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-${benefit.color}-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Glass card */}
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 h-full flex flex-col">
                  {/* Icon & Stat Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br from-${benefit.color}-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div
                      className={`bg-${benefit.color}-500/10 border border-${benefit.color}-500/30 rounded-full px-3 py-1`}
                    >
                      <span className={`text-xs font-semibold text-${benefit.color}-400`}>
                        {benefit.stat}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                  </div>

                  {/* Progress indicator */}
                  <div className="mt-6">
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-${benefit.color}-500 to-purple-500 rounded-full transition-all duration-1000 ease-out group-hover:w-full`}
                        style={{ width: "0%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Chart */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left - In-house */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <h4 className="text-xl font-bold text-white">{t.comparison.inhouse}</h4>
              </div>

              <div className="space-y-3">
                {[
                  { label: t.comparison.salary, value: "100%" },
                  {
                    label: t.comparison.availability,
                    value:
                      "40 " +
                      (language === "EN"
                        ? "hrs/week"
                        : language === "RU"
                          ? "ч/нед"
                          : "год/тиждень"),
                  },
                  { label: t.comparison.expertise, value: t.comparison.specialist },
                  {
                    label: t.comparison.vacation,
                    value:
                      "~30 " +
                      (language === "EN"
                        ? "days/year"
                        : language === "RU"
                          ? "дней/год"
                          : "днів/рік"),
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between bg-red-500/5 rounded-xl p-4 border border-red-500/10"
                  >
                    <span className="text-gray-400 text-sm">{item.label}</span>
                    <span className="text-red-400 font-semibold text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Outsourcing */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <h4 className="text-xl font-bold text-white">{t.comparison.outsourcing}</h4>
              </div>

              <div className="space-y-3">
                {[
                  {
                    label: t.comparison.payment,
                    value: (language === "EN" ? "From" : language === "RU" ? "От" : "Від") + " 40%",
                  },
                  { label: t.comparison.availability, value: "24/7/365 (за домовленістю)" },
                  { label: t.comparison.expertise, value: t.comparison.team },
                  {
                    label: t.comparison.vacation,
                    value:
                      "0 " + (language === "EN" ? "days" : language === "RU" ? "дней" : "днів"),
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between bg-green-500/5 rounded-xl p-4 border border-green-500/10"
                  >
                    <span className="text-gray-400 text-sm">{item.label}</span>
                    <span className="text-green-400 font-semibold text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom metric */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="flex items-center justify-center gap-4">
              <TrendingUp className="w-8 h-8 text-green-400" />
              <div>
                <div className="text-2xl font-bold text-white">{t.comparison.savings}</div>
                <div className="text-sm text-gray-400">{t.comparison.savingsDesc}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
