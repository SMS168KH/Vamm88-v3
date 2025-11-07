import { useState } from "react";
import { useTranslation } from "../contexts/TranslationContext";
import { Sparkles, Gamepad2, Trophy, Crown } from "lucide-react";

export function BonusTabs() {
  const [activeTab, setActiveTab] = useState("all");
  const { t } = useTranslation();

  const tabs = [
    { id: "all", label: t("allBonuses"), icon: Sparkles },
    { id: "casino", label: t("casinoBonuses"), icon: Gamepad2 },
    { id: "sports", label: t("sportsBonuses"), icon: Trophy },
    { id: "vip", label: t("vipBonuses"), icon: Crown },
  ];

  return (
    <div className="mb-16">
      {/* Tabs Container */}
      <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group relative px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-500 ${
                isActive
                  ? "bg-gradient-to-r from-[#E6C75F] to-[#C9A961] text-black shadow-xl shadow-gold/30 scale-105"
                  : "bg-gradient-to-br from-gray-900/50 to-black/50 text-gray-400 hover:text-white border border-gray-800 hover:border-gold/40 hover:scale-105"
              }`}
            >
              {/* Active glow effect */}
              {isActive && (
                <div className="absolute -inset-1 bg-gradient-to-r from-gold/40 to-gold-dark/40 rounded-full blur-lg animate-pulse" />
              )}
              
              {/* Content */}
              <span className="relative flex items-center gap-2">
                <Icon className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-500 ${
                  isActive ? "scale-110" : "group-hover:scale-110"
                }`} />
                <span className="tracking-wide">{tab.label}</span>
              </span>
              
              {/* Shine effect on active */}
              {isActive && (
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer rounded-full" />
              )}
            </button>
          );
        })}
      </div>
      
      {/* Decorative underline */}
      <div className="mt-8 flex items-center justify-center">
        <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </div>
    </div>
  );
}
