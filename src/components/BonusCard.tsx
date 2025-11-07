import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTranslation } from "../contexts/TranslationContext";
import { Calendar, Crown, Sparkles, ArrowRight } from "lucide-react";

interface BonusCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  dateRange: string;
  badge?: string;
  isVIP?: boolean;
  onApply?: () => void;
}

export function BonusCard({
  title,
  subtitle,
  description,
  image,
  dateRange,
  badge,
  isVIP,
  onApply,
}: BonusCardProps) {
  const { t } = useTranslation();
  
  return (
    <div className="group relative">
      {/* Outer Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 via-gold-dark/20 to-gold/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />
      
      {/* Main Card */}
      <div className="relative bg-black border-2 border-gray-800 group-hover:border-gold/40 rounded-2xl overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-gold/20">
        {/* Luxury Border Frame */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Image Section - Enhanced Size */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-gray-900 to-black">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
          />
          
          {/* Gradient Overlay - Lighter for better photo visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
          
          {/* Animated Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
          
          {/* Top Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-start justify-between z-10">
            {/* Badge */}
            {badge && (
              <div className="relative">
                <div className="absolute inset-0 bg-red-500/50 blur-md rounded-full" />
                <div className="relative flex items-center gap-1.5 bg-gradient-to-r from-red-600 to-red-700 backdrop-blur-sm text-white px-4 py-2 rounded-full shadow-lg">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  <span className="tracking-wide">{badge}</span>
                </div>
              </div>
            )}
            
            {/* VIP Indicator */}
            {isVIP && (
              <div className="relative">
                <div className="absolute inset-0 bg-gold/50 blur-md rounded-full" />
                <div className="relative flex items-center gap-1.5 bg-gradient-to-r from-[#E6C75F] to-[#C9A961] text-black px-4 py-2 rounded-full shadow-lg">
                  <Crown className="w-4 h-4" />
                  <span className="tracking-wide">VIP</span>
                </div>
              </div>
            )}
          </div>
          
          {/* Corner Decorations */}
          <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-gold/50 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-gold/50 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-gold/50 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-gold/50 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        {/* Info Section */}
        <div className="relative p-6 md:p-10 space-y-5 bg-gradient-to-b from-black to-gray-950">
          {/* Gold accent line */}
          <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          
          {/* Title */}
          <div className="space-y-2">
            <h3 className="text-white text-xl md:text-2xl leading-tight group-hover:text-gold-light transition-colors duration-300">{title}</h3>
            <p className="text-gray-400 text-base md:text-lg">{subtitle}</p>
          </div>
          
          {/* Divider */}
          <div className="flex items-center gap-2">
            <div className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
            <div className="h-px flex-1 bg-gradient-to-l from-gold/40 to-transparent" />
          </div>
          
          {/* Date Range */}
          <div className="flex items-center gap-3 text-gray-400 text-base md:text-lg">
            <div className="p-2.5 bg-gold/10 rounded-lg border border-gold/20">
              <Calendar className="w-5 h-5 text-gold" />
            </div>
            <span>{dateRange}</span>
          </div>
          
          {/* Apply Button */}
          <button 
            onClick={onApply}
            className="group/btn relative w-full bg-gradient-to-r from-[#E6C75F] via-[#F4D889] to-[#C9A961] hover:from-[#F4D889] hover:via-[#E6C75F] hover:to-[#F4D889] text-black py-4 md:py-5 rounded-xl transition-all duration-500 hover:shadow-xl hover:shadow-gold/40 overflow-hidden"
          >
            {/* Button shine effect */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_250%] group-hover/btn:animate-shimmer" />
            
            {/* Button content */}
            <span className="relative flex items-center justify-center gap-2 text-lg md:text-xl">
              <span className="tracking-wider">{t("apply")}</span>
              <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform duration-500" />
            </span>
          </button>
        </div>
        
        {/* Bottom Border Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      {/* Outer Corner Decorations */}
      <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-gold/30 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-gold/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-gold/30 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-gold/30 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
