import { Send, ArrowRight, Sparkles, Zap, Lock, Phone, Mail } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_MAILTO, CONTACT_PHONES } from "@/config/contacts";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";
import { TELEGRAM_LINK } from "@/config/links";
import { TelegramStepsHint } from "@/components/TelegramStepsHint";

export function CTASection() {
  const { language } = useLanguage();
  const t = translations[language].cta;

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-[#0f0f1a] to-[#0a0a0f] relative overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-full px-6 py-3 border border-cyan-500/20 shadow-lg shadow-cyan-500/10 mb-8">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="text-sm font-medium text-cyan-300">{t.badge}</span>
        </div>

        {/* Main CTA Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
            {t.headline1}
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
            {t.headline2}
          </span>
          <br />
          <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
            {t.headline3}
          </span>
        </h2>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          {t.subheadline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-6 mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex flex-col items-center gap-2">
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#229ED9] to-[#1a8dc4] hover:from-[#1a8dc4] hover:to-[#229ED9] text-white px-10 py-5 rounded-2xl transition-all duration-300 font-bold text-lg shadow-2xl shadow-[#229ED9]/30 hover:shadow-[#229ED9]/60 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#229ED9] to-[#1a8dc4] rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <Send className="w-6 h-6 relative z-10" />
                <span className="relative z-10">{t.button}</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
              <TelegramStepsHint className="text-center max-w-md px-2" />
            </div>
          </div>

          <div className="w-full max-w-xl mx-auto text-center">
            <p className="text-sm text-gray-400 mb-3">{t.contactsHint}</p>
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6">
              {CONTACT_PHONES.map(({ display, tel }) => (
                <a
                  key={tel}
                  href={`tel:${tel}`}
                  className="inline-flex items-center gap-2 text-gray-200 hover:text-cyan-300 transition-colors text-base font-medium"
                >
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" aria-hidden />
                  {display}
                </a>
              ))}
              <a
                href={CONTACT_MAILTO}
                className="inline-flex items-center gap-2 text-gray-200 hover:text-cyan-300 transition-colors text-base font-medium break-all"
              >
                <Mail className="w-4 h-4 text-purple-400 shrink-0" aria-hidden />
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Lock,
              title: t.trust1.title,
              description: t.trust1.description,
              gradient: "from-cyan-500 to-blue-500",
            },
            {
              icon: Zap,
              title: t.trust2.title,
              description: t.trust2.description,
              gradient: "from-purple-500 to-pink-500",
            },
            {
              icon: Sparkles,
              title: t.trust3.title,
              description: t.trust3.description,
              gradient: "from-violet-500 to-purple-500",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="group relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`}
                />
                <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-lg font-bold text-white mb-1">{item.title}</div>
                  <div className="text-sm text-gray-400">{item.description}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Social Proof */}
        {/*
          Соцдоказ (аватарки + "50+ компаній" + рейтинг) прибрано на вимогу.
        */}
      </div>
    </section>
  );
}
