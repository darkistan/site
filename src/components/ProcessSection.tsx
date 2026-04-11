import { Send, Search, CloudUpload, Headphones, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";
import { TELEGRAM_LINK } from "@/config/links";
import { TelegramStepsHint } from "@/components/TelegramStepsHint";

export function ProcessSection() {
  const { language } = useLanguage();
  const t = translations[language].process;

  const steps = [
    {
      number: 1,
      icon: Send,
      title: t.step1.title,
      description: t.step1.description,
      color: "cyan",
    },
    {
      number: 2,
      icon: Search,
      title: t.step2.title,
      description: t.step2.description,
      color: "blue",
    },
    {
      number: 3,
      icon: CloudUpload,
      title: t.step3.title,
      description: t.step3.description,
      color: "purple",
    },
    {
      number: 4,
      icon: Headphones,
      title: t.step4.title,
      description: t.step4.description,
      color: "violet",
    },
  ];

  return (
    <section id="process" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-cyan-400 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20">
              {t.badge}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Connection line - Desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-violet-500 opacity-50 blur-sm" />
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isCompleted = true; // For demo purposes

              return (
                <div key={index} className="relative group">
                  {/* Timeline connector dot - Desktop */}
                  <div className="hidden lg:flex absolute -top-1 left-1/2 -translate-x-1/2 items-center justify-center z-20">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br from-${step.color}-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-${step.color}-500/50 border-4 border-[#0a0a0f]`}
                    >
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        {isCompleted ? (
                          <Check className="w-4 h-4 text-cyan-500" />
                        ) : (
                          <span className="text-xs font-bold text-gray-800">{step.number}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Step Card */}
                  <div className="relative mt-16 lg:mt-20">
                    {/* Glow effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-${step.color}-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Glass card */}
                    <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 group-hover:scale-105">
                      {/* Mobile number badge */}
                      <div className="lg:hidden absolute -top-4 -left-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br from-${step.color}-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg`}
                        >
                          <span className="text-white font-bold">{step.number}</span>
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="mb-4">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br from-${step.color}-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-${step.color}-500/30`}
                        >
                          <Icon className={`w-8 h-8 text-${step.color}-400`} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-gray-500">
                            {t.step} {step.number}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white">{step.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                      </div>

                      {/* Progress bar */}
                      <div className="mt-6 h-1 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-${step.color}-500 to-purple-500 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: isCompleted ? "100%" : "0%" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Arrow connector for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 -right-4 z-10">
                      <svg
                        className="w-8 h-8 text-purple-500/50"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Info Card */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-violet-500/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{t.timeline}</div>
                  <div className="text-gray-400 text-sm">{t.timelineDesc}</div>
                </div>
              </div>

              <div className="flex flex-col items-end sm:items-center gap-2">
                <a
                  href={TELEGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/50 whitespace-nowrap"
                >
                  <Send className="w-5 h-5" />
                  <span>{t.startNow}</span>
                </a>
                <TelegramStepsHint className="text-right sm:text-center max-w-xs" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
