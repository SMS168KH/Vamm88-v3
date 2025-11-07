import { useTranslation } from "../contexts/TranslationContext";
import { Gamepad2, Clock } from "lucide-react";

export function SlotsPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-black py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Centered Content */}
        <div className="text-center space-y-8">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gold/30 blur-2xl rounded-full" />
              <div className="relative w-24 h-24 bg-gradient-to-br from-gold via-gold-light to-gold rounded-2xl flex items-center justify-center shadow-2xl shadow-gold/40">
                <Gamepad2 className="w-12 h-12 text-black" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-white bg-gradient-to-r from-white via-gold-light to-white bg-clip-text text-transparent">
            {t("slotGames")}
          </h1>

          {/* Coming Soon Message */}
          <div className="bg-gradient-to-br from-gray-900/50 to-black border border-gold/20 rounded-2xl p-8 md:p-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-gold" />
              <p className="text-gold tracking-wider uppercase text-sm">Coming Soon</p>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
              {t("slotGamesComingSoon")}
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="flex items-center justify-center gap-4 pt-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-gold/50" />
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-gold/60" />
              <div className="w-2 h-2 rounded-full bg-gold/60" />
              <div className="w-2 h-2 rounded-full bg-gold/60" />
            </div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold/50" />
          </div>
        </div>
      </div>
    </main>
  );
}