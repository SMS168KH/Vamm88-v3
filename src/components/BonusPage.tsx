import { BonusTabs } from "./BonusTabs";
import { BonusGrid } from "./BonusGrid";
import { useTranslation } from "../contexts/TranslationContext";
import { Gift, TrendingUp, Clock, Star, Zap } from "lucide-react";

interface BonusPageProps {
  onOpenLogin?: () => void;
}

export function BonusPage({ onOpenLogin }: BonusPageProps) {
  const { t } = useTranslation();
  
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gold/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-gold/5 rounded-full blur-[120px]" />
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, #F4D889 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }} />
        
        {/* Header Content */}
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Decorative Top Line */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/60" />
              <div className="flex gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" style={{ animationDelay: '0ms' }} />
                <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" style={{ animationDelay: '150ms' }} />
                <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" style={{ animationDelay: '300ms' }} />
              </div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/60" />
            </div>

            {/* Main Title */}
            <h1 className="mb-6 relative inline-block">
              <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent relative z-10">
                {t("bonusPageTitle")}
              </span>
              {/* Title Glow Effect */}
              <div className="absolute inset-0 blur-2xl opacity-30 bg-gradient-to-r from-gold via-gold-light to-gold" />
            </h1>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed text-lg mb-8 max-w-3xl mx-auto">
              {t("bonusPageDescription")}
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              {[
                { icon: Gift, text: "Instant Rewards" },
                { icon: Zap, text: "Fast Processing" },
                { icon: Star, text: "VIP Exclusive" }
              ].map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div 
                    key={idx}
                    className="group flex items-center gap-2 bg-black/40 border border-gold/20 rounded-full px-4 py-2 hover:border-gold/50 hover:bg-black/60 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4 text-gold group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-300 text-sm">{badge.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Bottom Divider */}
        <div className="relative mt-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-gold/50" />
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-gold/60" />
                <div className="w-2 h-2 rounded-full bg-gold/60" />
                <div className="w-2 h-2 rounded-full bg-gold/60" />
              </div>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gold/30 to-gold/50" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Filter Tabs */}
          <BonusTabs />
          
          {/* Bonus Grid */}
          <BonusGrid onApply={onOpenLogin} />
        </div>
      </section>
    </main>
  );
}
