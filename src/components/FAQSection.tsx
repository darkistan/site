import { ChevronDown, HelpCircle, Send } from "lucide-react";
import { useId, useMemo, useState } from "react";
import { TELEGRAM_LINK } from "@/config/links";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

type FaqItem = { q: string; a: string };

export function FAQSection() {
  const { language } = useLanguage();
  const t = translations[language].faq;
  const sectionId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = useMemo(
    () => t.items.map((item) => ({ q: item.q, a: item.a })),
    [t.items],
  );

  return (
    <section id="faq" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-5 py-2 border border-white/10 mb-5">
            <HelpCircle className="w-4 h-4 text-cyan-300" />
            <span className="text-sm font-semibold text-cyan-200">FAQ</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>
        </div>

        <div className="space-y-4">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            const contentId = `${sectionId}-item-${idx}`;

            return (
              <div
                key={item.q}
                className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => setOpenIndex((cur) => (cur === idx ? null : idx))}
                >
                  <span className="text-white font-semibold text-lg">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-gray-300 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  id={contentId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-gray-300 leading-relaxed whitespace-pre-line">
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">{t.final.title}</h3>
          <p className="text-gray-300 mb-6">{t.final.text}</p>
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#229ED9] to-[#1a8dc4] hover:from-[#1a8dc4] hover:to-[#229ED9] text-white px-8 py-4 rounded-2xl transition-all duration-300 font-bold shadow-2xl shadow-[#229ED9]/30 hover:shadow-[#229ED9]/60 hover:scale-[1.02]"
          >
            <Send className="w-5 h-5" />
            <span>{t.final.button}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

