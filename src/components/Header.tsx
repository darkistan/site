import { useState } from "react";
import { Send, Cloud, Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";
import { TELEGRAM_LINK } from "@/config/links";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const languages = ["UA", "RU", "EN"] as const;
  const t = translations[language].nav;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Cloud className="w-7 h-7 text-white" />
              </div>
            </div>
            <div>
              <div className="text-xl font-bold text-white">CloudIT</div>
              <div className="text-xs text-cyan-400">Next Gen</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#services"
              className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium"
            >
              {t.services}
            </a>
            <a
              href="#benefits"
              className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium"
            >
              {t.benefits}
            </a>
            <a
              href="#process"
              className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium"
            >
              {t.process}
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium"
            >
              {t.contacts}
            </a>
          </nav>

          {/* Right side - Language Switcher & Telegram */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-sm rounded-lg p-1 border border-white/10">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                    language === lang
                      ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/30"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Telegram Button */}
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-[#229ED9] to-[#1a8dc4] hover:shadow-lg hover:shadow-[#229ED9]/50 text-white px-5 py-2.5 rounded-lg transition-all duration-200 font-medium text-sm"
            >
              <Send className="w-4 h-4" />
              <span>{t.telegram}</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/5 space-y-4">
            <a
              href="#services"
              className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.services}
            </a>
            <a
              href="#benefits"
              className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.benefits}
            </a>
            <a
              href="#process"
              className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.process}
            </a>
            <a
              href="#contact"
              className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.contacts}
            </a>

            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-2 pt-4 border-t border-white/5">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    language === lang
                      ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                      : "bg-white/5 text-gray-400"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Mobile Telegram Button */}
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#229ED9] to-[#1a8dc4] text-white px-5 py-3 rounded-lg transition-all duration-200 font-medium text-sm"
            >
              <Send className="w-4 h-4" />
              <span>{t.telegram}</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
