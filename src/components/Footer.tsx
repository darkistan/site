import { MapPin, Clock, Send, Cloud, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";
import { CONTACT_MAILTO, CONTACT_EMAIL, CONTACT_PHONES } from "@/config/contacts";
import { TELEGRAM_LINK } from "@/config/links";

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;
  const nav = translations[language].nav;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0f] border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 group">
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
            <p className="text-sm text-gray-400 leading-relaxed">{t.tagline}</p>
            {/* Social links */}
            <div className="flex gap-3">
              {[
                {
                  icon: Send,
                  href: TELEGRAM_LINK,
                  color: "from-[#229ED9] to-[#1a8dc4]",
                },
                {
                  icon: Mail,
                  href: CONTACT_MAILTO,
                  color: "from-purple-500 to-cyan-500",
                },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-lg blur-lg opacity-0 group-hover:opacity-75 transition-opacity`}
                    />
                    <div
                      className={`relative w-10 h-10 bg-gradient-to-br ${social.color} rounded-lg flex items-center justify-center hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">{t.navigation}</h3>
            <ul className="space-y-3">
              {[
                { label: nav.services, href: "#services" },
                { label: nav.benefits, href: "#benefits" },
                { label: nav.process, href: "#process" },
                { label: nav.contacts, href: "#contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">{t.servicesTitle}</h3>
            <ul className="space-y-3">
              {[
                t.servicesList.cloud,
                t.servicesList.servers,
                t.servicesList.network,
                t.servicesList.support,
                t.servicesList.accounting,
              ].map((service, idx) => (
                <li key={idx}>
                  <span className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-purple-500 rounded-full" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">{t.contacts}</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">{t.location}</div>
                  <div className="text-gray-400 text-xs">{t.locationDesc}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm">
                <Clock className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">{t.schedule}</div>
                  <div className="text-cyan-400 text-xs font-semibold">{t.support}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm">
                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  {CONTACT_PHONES.map(({ display, tel }) => (
                    <a
                      key={tel}
                      href={`tel:${tel}`}
                      className="text-white font-medium hover:text-cyan-300 transition-colors"
                    >
                      {display}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href={CONTACT_MAILTO}
                    className="text-white font-medium hover:text-cyan-300 transition-colors"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>© {currentYear} CloudIT Next Gen</span>
              <span className="hidden md:inline">•</span>
              <span className="text-cyan-400">{t.rights}</span>
            </div>

            <div className="flex items-center gap-6 text-sm">
              <a
                href="/privacy.html"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                {t.privacy}
              </a>
              <a href="/terms.html" className="text-gray-400 hover:text-cyan-400 transition-colors">
                {t.terms}
              </a>
            </div>
          </div>
        </div>

        {/* Made with badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl rounded-full px-4 py-2 border border-white/10">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-gray-400">
              {t.since} <span className="text-cyan-400 font-semibold">2019</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
