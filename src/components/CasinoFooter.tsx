import { useTranslation } from "../contexts/TranslationContext";
import { Shield, Mail, Phone, Clock, CreditCard, Smartphone, Headphones, Star, Facebook, Instagram, Youtube } from "lucide-react";
import { Send } from "lucide-react";

export function CasinoFooter() {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-black border-t border-gold-darker/30 mt-auto overflow-hidden">
      {/* Premium top border with gradient */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
      
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(244, 216, 137, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(230, 199, 95, 0.12) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(201, 169, 97, 0.08) 0%, transparent 60%),
          repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(244, 216, 137, 0.04) 60px, rgba(244, 216, 137, 0.04) 62px),
          repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(230, 199, 95, 0.04) 60px, rgba(230, 199, 95, 0.04) 62px)
        `,
      }} />
      
      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 max-w-7xl py-12">
        <div className="text-center mb-12">
          <p className="text-gray-400">{t("footerTagline")}</p>
          <p className="text-gray-500 text-sm mt-2">{t("licensedOperator")}</p>
        </div>

        {/* Premium divider */}
        <div className="relative h-[1px] bg-gradient-to-r from-transparent via-gold-darker/50 to-transparent mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Quick Links */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[1px] w-8 bg-gradient-to-r from-gold to-transparent" />
              <h3 className="text-gold-light tracking-wide">{t("quickLinks")}</h3>
            </div>
            <ul className="space-y-3">
              {[
                { label: t("home"), href: "#" },
                { label: t("liveCasino"), href: "#" },
                { label: t("slots"), href: "#" },
                { label: t("sports"), href: "#" },
                { label: t("bonus"), href: "#" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="group flex items-center gap-2 text-gray-400 hover:text-gold transition-all duration-300 text-sm">
                    <span className="w-1.5 h-1.5 bg-gold-darker group-hover:bg-gold rounded-full transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[1px] w-8 bg-gradient-to-r from-gold to-transparent" />
              <h3 className="text-gold-light tracking-wide">{t("support")}</h3>
            </div>
            <ul className="space-y-4">
              <li className="group flex items-center gap-3 text-gray-400 hover:text-gold transition-colors text-sm cursor-pointer">
                <div className="w-8 h-8 bg-gradient-to-br from-gray-900 to-black border border-gold-darker/50 rounded-lg flex items-center justify-center group-hover:border-gold/50 transition-colors">
                  <Mail className="w-4 h-4 text-gold" />
                </div>
                <span>support@vam88.net</span>
              </li>
              <li className="group flex items-center gap-3 text-gray-400 hover:text-gold transition-colors text-sm cursor-pointer">
                <div className="w-8 h-8 bg-gradient-to-br from-gray-900 to-black border border-gold-darker/50 rounded-lg flex items-center justify-center group-hover:border-gold/50 transition-colors">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <span>+60 123 456 789</span>
              </li>
              <li className="group flex items-center gap-3 text-gray-400 hover:text-gold transition-colors text-sm cursor-pointer">
                <div className="w-8 h-8 bg-gradient-to-br from-gray-900 to-black border border-gold-darker/50 rounded-lg flex items-center justify-center group-hover:border-gold/50 transition-colors">
                  <Clock className="w-4 h-4 text-gold" />
                </div>
                <span>{t("support247")}</span>
              </li>
            </ul>
          </div>

          {/* Security */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[1px] w-8 bg-gradient-to-r from-gold to-transparent" />
              <h3 className="text-gold-light tracking-wide">{t("security")}</h3>
            </div>
            <div className="space-y-4">
              <div className="group flex items-center gap-3 text-gray-400 text-sm">
                <div className="w-8 h-8 bg-gradient-to-br from-gray-900 to-black border border-gold-darker/50 rounded-lg flex items-center justify-center group-hover:border-gold/50 transition-colors">
                  <Shield className="w-4 h-4 text-gold" />
                </div>
                <span>{t("sslEncrypted")}</span>
              </div>
              <div className="group flex items-center gap-3 text-gray-400 text-sm">
                <div className="w-8 h-8 bg-gradient-to-br from-gray-900 to-black border border-gold-darker/50 rounded-lg flex items-center justify-center group-hover:border-gold/50 transition-colors">
                  <Shield className="w-4 h-4 text-gold" />
                </div>
                <span>{t("licensedRegulated")}</span>
              </div>
              <div className="group flex items-center gap-3 text-gray-400 text-sm">
                <div className="w-8 h-8 bg-gradient-to-br from-gray-900 to-black border border-gold-darker/50 rounded-lg flex items-center justify-center group-hover:border-gold/50 transition-colors">
                  <Shield className="w-4 h-4 text-gold" />
                </div>
                <span>{t("responsibleGaming")}</span>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[1px] w-8 bg-gradient-to-r from-gold to-transparent" />
              <h3 className="text-gold-light tracking-wide">Payment Methods</h3>
            </div>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <div className="w-14 h-10 bg-gradient-to-br from-gray-900 to-black border border-gold-darker/50 rounded-lg flex items-center justify-center hover:border-gold/50 transition-colors group cursor-pointer">
                  <CreditCard className="w-6 h-6 text-gold-darker group-hover:text-gold transition-colors" />
                </div>
                <div className="w-14 h-10 bg-gradient-to-br from-gray-900 to-black border border-gold-darker/50 rounded-lg flex items-center justify-center hover:border-gold/50 transition-colors group cursor-pointer">
                  <Smartphone className="w-6 h-6 text-gold-darker group-hover:text-gold transition-colors" />
                </div>
                <div className="w-14 h-10 bg-gradient-to-br from-gray-900 to-black border border-gold-darker/50 rounded-lg flex items-center justify-center hover:border-gold/50 transition-colors group cursor-pointer">
                  <CreditCard className="w-6 h-6 text-gold-darker group-hover:text-gold transition-colors" />
                </div>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                Secure payments with instant deposits & fast withdrawals
              </p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="relative mb-12">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gold-darker/50 to-transparent mb-8" />
          <div className="flex justify-center items-center gap-4">
            {[
              { icon: Facebook, label: "Facebook" },
              { icon: Send, label: "Telegram" },
              { icon: Instagram, label: "Instagram" },
              { icon: Youtube, label: "Youtube" },
            ].map((social, idx) => (
              <a
                key={idx}
                href="#"
                className="group relative w-12 h-12 bg-gradient-to-br from-gray-900 to-black border border-gold-darker/50 rounded-full flex items-center justify-center hover:border-gold/50 transition-all duration-300 hover:-translate-y-1"
                aria-label={social.label}
              >
                <div className="absolute inset-0 bg-gradient-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur" />
                <social.icon className="relative w-5 h-5 text-gold-darker group-hover:text-gold transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gold-darker/30 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4 py-6 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2025 VAM88. {t("allRightsReserved")}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-gray-500 hover:text-gold transition-colors text-sm relative group">
                {t("termsConditions")}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-300" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gold transition-colors text-sm relative group">
                {t("privacyPolicy")}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-300" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gold transition-colors text-sm relative group">
                {t("responsibleGaming")}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}