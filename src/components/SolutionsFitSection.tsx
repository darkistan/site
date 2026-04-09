import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function SolutionsFitSection() {
  const { language } = useLanguage();
  const t = translations[language].solutionsFit;

  return (
    <section
      id="solutions-fit"
      className="py-20 bg-gradient-to-b from-[#0f0f1a] to-[#0a0a0f] relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10">
            <ul className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              {t.items.map((text) => (
                <li key={text} className="flex gap-3">
                  <div className="mt-0.5 shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-cyan-300" />
                  </div>
                  <p className="text-gray-300 leading-relaxed">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

