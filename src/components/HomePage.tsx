import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Gift, Trophy, Crown, Zap, Shield, Users, TrendingUp, Star, ArrowRight } from "lucide-react";
import { useTranslation } from "../contexts/TranslationContext";
import { TrustSection } from "./TrustSection";
import { WelcomeBanner } from "./WelcomeBanner";
import { HotGamesCarousel } from "./HotGamesCarousel";

interface HomePageProps {
  onOpenLogin?: () => void;
  onNavigate?: (page: string) => void;
}

export function HomePage({ onOpenLogin, onNavigate }: HomePageProps) {
  const { t } = useTranslation();
  
  return (
    <main className="min-h-screen bg-black">
      {/* Welcome Banner with Hot Games Carousel */}
      <WelcomeBanner onNavigate={onNavigate} />

      {/* Statistics Section - New */}
      <section className="bg-black py-16 md:py-20 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: "500K+", label: "Active Players", icon: Users },
              { number: "98%", label: "Payout Rate", icon: TrendingUp },
              { number: "24/7", label: "Support", icon: Shield },
              { number: "4.9★", label: "User Rating", icon: Star }
            ].map((stat, idx) => (
              <div key={idx} className="group relative">
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-gold/30 to-gold-dark/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
                
                {/* Card */}
                <div className="relative bg-gradient-to-br from-black to-gray-900 border border-gold/20 group-hover:border-gold/60 rounded-2xl p-6 md:p-8 text-center transition-all duration-500 group-hover:-translate-y-1">
                  <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-500" />
                  <div className="text-white mb-2 tracking-tight">{stat.number}</div>
                  <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="relative py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-gold/50" />
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-gold/60 animate-pulse" style={{ animationDuration: '2s' }} />
              <div className="w-2 h-2 rounded-full bg-gold/60 animate-pulse" style={{ animationDuration: '2s', animationDelay: '0.3s' }} />
              <div className="w-2 h-2 rounded-full bg-gold/60 animate-pulse" style={{ animationDuration: '2s', animationDelay: '0.6s' }} />
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gold/30 to-gold/50" />
          </div>
        </div>
      </div>

      {/* Why Choose Us - Enhanced */}
      <section className="bg-black py-16 md:py-24 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, #F4D889 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gold/10 to-gold-dark/10 border border-gold/30 rounded-full px-6 py-2 mb-6">
              <Trophy className="w-5 h-5 text-gold" />
              <span className="text-gold tracking-wider uppercase text-sm">Premium Experience</span>
            </div>
            <h2 className="text-white mb-4 bg-gradient-to-r from-white via-gold-light to-white bg-clip-text text-transparent">{t("whyChooseVAM88")}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Experience the ultimate online casino with industry-leading features and unmatched service</p>
          </div>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { 
                icon: Shield, 
                title: t("licensedSecure"), 
                desc: t("licensedSecureDesc"), 
                gradient: "from-emerald-500/20 to-emerald-900/10",
                iconBg: "from-emerald-500 to-emerald-700",
                borderColor: "emerald-500/30"
              },
              { 
                icon: Gift, 
                title: t("bestBonuses"), 
                desc: t("bestBonusesDesc"), 
                gradient: "from-gold-dark/20 to-gold-darker/10",
                iconBg: "from-gold to-gold-dark",
                borderColor: "gold/30"
              },
              { 
                icon: Zap, 
                title: t("fastPayouts"), 
                desc: t("fastPayoutsDesc"), 
                gradient: "from-blue-500/20 to-blue-900/10",
                iconBg: "from-blue-500 to-blue-700",
                borderColor: "blue-500/30"
              },
              { 
                icon: Crown, 
                title: t("vipProgram"), 
                desc: t("vipProgramDesc"), 
                gradient: "from-purple-500/20 to-purple-900/10",
                iconBg: "from-purple-500 to-purple-700",
                borderColor: "purple-500/30"
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="group relative">
                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`} />
                  
                  {/* Card */}
                  <div className={`relative h-full bg-gradient-to-br ${feature.gradient} border border-${feature.borderColor} group-hover:border-gold/50 rounded-2xl p-8 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl`} style={{
                    backgroundColor: 'rgba(15, 15, 15, 0.95)',
                    backgroundImage: `linear-gradient(135deg, rgba(244, 216, 137, 0.08) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(230, 199, 95, 0.08) 100%)`,
                    backdropFilter: 'blur(10px)',
                    boxShadow: 'inset 0 1px 0 0 rgba(244, 216, 137, 0.1), 0 4px 20px rgba(0, 0, 0, 0.5)'
                  }}>
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.iconBg} rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                        {/* Icon glow */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.iconBg} rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity`} />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-white mb-3 text-center leading-tight">{feature.title}</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-gold to-gold-dark rounded-full mx-auto mb-4" />
                    <p className="text-gray-300 text-center text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate?.("bonus")}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold via-gold-light to-gold rounded-full transition-all duration-500 hover:shadow-2xl hover:shadow-gold/50 hover:scale-105"
            >
              <span className="text-black tracking-wider">Explore All Bonuses</span>
              <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform duration-500" />
            </button>
          </div>
        </div>
      </section>

      {/* Trust & Guarantees Section */}
      <TrustSection />
    </main>
  );
}