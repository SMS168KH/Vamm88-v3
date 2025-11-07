import { useState } from "react";
import { motion } from "motion/react";
import { Loader2 } from "lucide-react";
import bannerImage from "figma:asset/594c2baa102a616fd8bf07f0e4fe0bc6f6f54ebc.png";
import vipUpgradeBannerImage from "figma:asset/ad50426d4fc12035e932a5b4c8931f9f44014252.png";
import { HotGamesCarousel } from "./HotGamesCarousel";

interface WelcomeBannerProps {
  onNavigate?: (page: string) => void;
}

export function WelcomeBanner({ onNavigate }: WelcomeBannerProps) {
  const [loading, setLoading] = useState(false);
  
  const handleBannerClick = () => {
    setLoading(true);
    // Simulate loading before navigation
    setTimeout(() => {
      onNavigate?.("bonus");
      setLoading(false);
    }, 800);
  };
  
  const BannerCard = ({ imageUrl, alt }: { imageUrl: string; alt: string }) => (
    <button 
      onClick={handleBannerClick}
      className="relative group w-full cursor-pointer"
    >
      {/* Animated Outer Gold Glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-gold-dark via-gold to-gold-dark rounded-3xl opacity-60 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500 animate-pulse" />
      
      {/* Secondary Glow Layer */}
      <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent rounded-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
      
      {/* Inner Border Frame */}
      <div className="relative bg-gradient-to-br from-gold/10 via-black to-gold/10 rounded-2xl p-1 shadow-2xl">
        <div className="relative bg-gradient-to-br from-gold/30 via-gold/5 to-gold/30 rounded-xl p-[3px]">
          {/* Banner Image Container */}
          <div className="relative overflow-hidden rounded-xl bg-black shadow-inner">
            {/* Main Banner Image */}
            <img 
              src={imageUrl} 
              alt={alt}
              className="w-full h-auto min-h-[300px] md:min-h-[400px] lg:min-h-[500px] object-cover object-center transition-all duration-700 group-hover:scale-[1.02] group-hover:brightness-110"
            />
            
            {/* Subtle Gradient Overlay */}
            <motion.div 
              className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent, rgba(0,0,0,0.2))'
              }}
              animate={{
                background: [
                  'linear-gradient(to top, rgba(0,0,0,0.4), transparent 40%, rgba(0,0,0,0.2))',
                  'linear-gradient(to top, rgba(0,0,0,0.3), transparent 50%, rgba(0,0,0,0.3))',
                  'linear-gradient(to top, rgba(0,0,0,0.4), transparent 40%, rgba(0,0,0,0.2))',
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Top Shimmer Effect */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent animate-pulse" />
            
            {/* Bottom Shimmer Effect */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent animate-pulse" />
            
            {/* Floating Sparkles Animation */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold rounded-full opacity-60 animate-ping" style={{ animationDuration: '3s' }} />
            <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-gold rounded-full opacity-60 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
            <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-gold rounded-full opacity-60 animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }} />
            
            {/* Loading Overlay */}
            {loading && (
              <div className="absolute inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-10 animate-in fade-in duration-300">
                <div className="flex flex-col items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gold/30 blur-xl rounded-full animate-pulse"></div>
                    <Loader2 className="w-16 h-16 text-gold animate-spin relative z-10" />
                  </div>
                  <div className="text-center space-y-2">
                    <p className="text-gold tracking-wider">Loading Bonuses...</p>
                    <div className="flex gap-1 justify-center">
                      <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                      <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Enhanced Corner Decorations */}
      <div className="absolute -top-3 -left-3 w-8 h-8 md:w-10 md:h-10 border-t-[3px] border-l-[3px] border-gold rounded-tl-xl opacity-80 group-hover:opacity-100 transition-opacity" />
      <div className="absolute -top-3 -right-3 w-8 h-8 md:w-10 md:h-10 border-t-[3px] border-r-[3px] border-gold rounded-tr-xl opacity-80 group-hover:opacity-100 transition-opacity" />
      <div className="absolute -bottom-3 -left-3 w-8 h-8 md:w-10 md:h-10 border-b-[3px] border-l-[3px] border-gold rounded-bl-xl opacity-80 group-hover:opacity-100 transition-opacity" />
      <div className="absolute -bottom-3 -right-3 w-8 h-8 md:w-10 md:h-10 border-b-[3px] border-r-[3px] border-gold rounded-br-xl opacity-80 group-hover:opacity-100 transition-opacity" />
      
      {/* Inner Corner Accents */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-gold/50 rounded-tl-lg" />
      <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-gold/50 rounded-tr-lg" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-gold/50 rounded-bl-lg" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-gold/50 rounded-br-lg" />
    </button>
  );
  
  return (
    <section className="relative w-full bg-black pt-4 pb-8 md:pt-6 md:pb-12">
      <div className="container mx-auto px-3 md:px-6 max-w-[1600px]">
        {/* Main Sportsbook Welcome Banner */}
        <BannerCard 
          imageUrl={bannerImage}
          alt="VAM88 Sportsbook Welcome Bonus - Click to view all bonuses"
        />
        
        {/* VIP Upgrade Rewards Banner */}
        <div className="mt-8 md:mt-12">
          <BannerCard 
            imageUrl={vipUpgradeBannerImage}
            alt="VAM88 VIP Upgrade Rewards - Click to view all bonuses"
          />
        </div>
      </div>
      
      {/* Hot Games Carousel - Positioned in Banner Section */}
      <div className="mt-8 md:mt-12">
        <HotGamesCarousel onNavigate={onNavigate} />
      </div>
      
      {/* Enhanced Bottom Separator with Glow */}
      <div className="mt-8 md:mt-12 relative">
        <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent blur-sm" />
      </div>
    </section>
  );
}