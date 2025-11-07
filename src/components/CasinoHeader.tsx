import { useState } from "react";
import { LoginModal } from "./LoginModal";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useTranslation } from "../contexts/TranslationContext";
import { Home, Tv, Gamepad2, Trophy, Puzzle, Gift, Smartphone, User, Globe } from "lucide-react";
import { FlagIcon } from "./FlagIcon";
import { motion } from "motion/react";
import logoImage from "figma:asset/fd51837c19dd599abb8e89b96031a533a4f6f1ce.png";

interface CasinoHeaderProps {
  activePage: string;
  onNavigate: (page: string) => void;
  loginOpen: boolean;
  onLoginOpenChange: (open: boolean) => void;
  onOpenLiveChat: () => void;
}

export function CasinoHeader({ activePage, onNavigate, loginOpen, onLoginOpenChange, onOpenLiveChat }: CasinoHeaderProps) {
  const [selectedCountry, setSelectedCountry] = useState("MY");
  const { language, setLanguage, t } = useTranslation();
  const selectedLanguage = language;

  const countries = [
    { code: "KH" as const, name: "Cambodia" },
    { code: "MY" as const, name: "Malaysia" },
    { code: "SG" as const, name: "Singapore" },
  ];

  const languages = [
    { code: "EN" as const, name: "English" },
    { code: "ZH" as const, name: "中文" },
    { code: "KM" as const, name: "ខ្មែរ" },
  ];

  const currentCountry = countries.find(c => c.code === selectedCountry) || countries[1];
  const currentLanguage = languages.find(l => l.code === selectedLanguage) || languages[0];

  const handleLanguageChange = (value: string) => {
    setLanguage(value as "EN" | "ZH" | "KM");
  };

  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-black border-b border-gray-800">
        <div className="container mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Left side - Promotional text */}
            <div className="flex items-center gap-6">
              {/* Welcome Bonus Badge with premium typography */}
              <div 
                className="flex items-center gap-2.5 text-gold bg-gold/10 px-4 py-2 rounded-full border border-gold/30 shadow-lg shadow-gold/20"
                style={{
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                }}
              >
                <span 
                  className="uppercase tracking-wider font-extrabold drop-shadow-md"
                  style={{
                    letterSpacing: '0.12em',
                    textShadow: '0 2px 8px rgba(230, 199, 95, 0.6), 0 0 20px rgba(244, 216, 137, 0.3)',
                    fontSize: '0.95rem',
                    fontWeight: 900
                  }}
                >
                  {t("welcomeBonus")}
                </span>
              </div>
              
              {/* Scrolling announcements with enhanced typography */}
              <div className="hidden md:block relative overflow-hidden max-w-md">
                <motion.div 
                  className="flex items-center gap-8 text-gray-400 whitespace-nowrap"
                  style={{
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                  }}
                  animate={{
                    x: [0, -450]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear"
                  }}
                >
                  <span 
                    className="uppercase tracking-wide font-semibold inline-block"
                    style={{
                      letterSpacing: '0.06em',
                      fontSize: '0.8125rem',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    ✨ {t("newSlots")} • 👑 {t("vipRewards")} • 💰 {t("dailyCashback")}
                  </span>
                  <span className="font-bold text-gold/40">•</span>
                  <span 
                    className="uppercase tracking-wide font-semibold"
                    style={{
                      letterSpacing: '0.06em',
                      fontSize: '0.8125rem',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    ✨ {t("newSlots")} • 👑 {t("vipRewards")} • 💰 {t("dailyCashback")}
                  </span>
                  <span className="font-bold text-gold/40">•</span>
                  <span 
                    className="uppercase tracking-wide font-semibold"
                    style={{
                      letterSpacing: '0.06em',
                      fontSize: '0.8125rem',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    ✨ {t("newSlots")} • 👑 {t("vipRewards")} • 💰 {t("dailyCashback")}
                  </span>
                </motion.div>
              </div>
            </div>
            
            {/* Right side - Controls */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => onLoginOpenChange(true)}
                className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/5"
              >
                <User className="w-4 h-4" />
                <span className="text-sm">{t("loginRegister")}</span>
              </button>
              
              <div className="h-4 w-px bg-gray-800" />
              
              {/* Language selector */}
              <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
                <SelectTrigger className="w-auto bg-transparent text-gray-400 hover:text-white border-0 h-auto py-0 px-2 gap-2 text-sm transition-colors">
                  <SelectValue>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      <span>{currentLanguage.name}</span>
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border border-gray-800">
                  {languages.map((language) => (
                    <SelectItem key={language.code} value={language.code} className="text-gray-300 focus:text-white focus:bg-gray-800 cursor-pointer">
                      {language.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {/* Country selector */}
              <Select value={selectedCountry} onValueChange={handleCountryChange}>
                <SelectTrigger className="w-auto bg-gradient-to-r from-[#E6C75F] to-[#C9A961] text-black border-0 h-auto py-2 px-4 gap-2 rounded-full text-sm transition-all duration-300 hover:shadow-lg hover:shadow-gold/20">
                  <SelectValue>
                    <div className="flex items-center gap-2">
                      <FlagIcon 
                        country={currentCountry.code} 
                        className="w-5 h-3.5 rounded-sm"
                      />
                      <span>{currentCountry.name}</span>
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border border-gray-800">
                  {countries.map((country) => (
                    <SelectItem key={country.code} value={country.code} className="text-gray-300 focus:text-white focus:bg-gray-800 cursor-pointer">
                      <div className="flex items-center gap-2">
                        <FlagIcon 
                          country={country.code} 
                          className="w-5 h-3.5 rounded-sm"
                        />
                        <span>{country.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="relative bg-gradient-to-r from-[#E6C75F] via-[#F4D889] to-[#C9A961] sticky top-0 z-50 shadow-2xl shadow-black/30">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
        
        {/* Bottom shadow/border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/30 to-transparent" />
        
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between h-20">
            {/* Logo with enhanced styling */}
            <button 
              onClick={() => onNavigate("home")} 
              className="group relative flex items-center transition-all duration-500 hover:scale-105"
            >
              {/* Logo glow effect */}
              <div className="absolute inset-0 bg-black/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <img 
                src={logoImage} 
                alt="VAM88 Casino"
                className="relative h-40 w-auto object-contain transition-all duration-500 group-hover:brightness-110"
                style={{ imageRendering: 'high-quality' }}
              />
            </button>
            
            {/* Navigation with premium typography */}
            <nav className="hidden lg:flex items-center gap-2">
              {[
                { id: "home", labelKey: "home" as const, icon: Home },
                { id: "live", labelKey: "live" as const, icon: Tv },
                { id: "slots", labelKey: "slots" as const, icon: Gamepad2 },
                { id: "sports", labelKey: "sports" as const, icon: Trophy },
                { id: "chess", labelKey: "chess" as const, icon: Puzzle },
                { id: "bonus", labelKey: "bonus" as const, icon: Gift },
                { id: "app", labelKey: "app" as const, icon: Smartphone },
              ].map((item) => {
                const Icon = item.icon;
                const isActive = activePage === item.id;
                
                return (
                  <button 
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`group relative flex items-center gap-2.5 px-5 py-3 rounded-xl transition-all duration-500 overflow-hidden ${
                      isActive 
                        ? "bg-black/25 text-black shadow-lg scale-105" 
                        : "text-black/70 hover:text-black hover:bg-black/15 hover:scale-105"
                    }`}
                    style={{
                      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                    }}
                  >
                    {/* Active indicator bar */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/40 rounded-full" />
                    )}
                    
                    {/* Hover shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                    
                    {/* Icon with animation */}
                    <Icon className={`relative w-5 h-5 transition-all duration-500 ${
                      isActive ? "scale-110 drop-shadow-md" : "group-hover:scale-110 group-hover:rotate-12"
                    }`} strokeWidth={2.5} />
                    
                    {/* Text with premium typography */}
                    <span 
                      className={`relative uppercase tracking-wider transition-all duration-500 ${
                        isActive ? "font-bold drop-shadow-sm" : "font-semibold"
                      }`}
                      style={{
                        letterSpacing: '0.1em',
                        textShadow: isActive ? '0 1px 2px rgba(0,0,0,0.15)' : 'none'
                      }}
                    >
                      {t(item.labelKey)}
                    </span>
                  </button>
                );
              })}
            </nav>
            
            {/* Enhanced mobile menu button */}
            <button className="group lg:hidden relative p-3 rounded-xl text-black hover:bg-black/15 transition-all duration-500 overflow-hidden hover:scale-110">
              {/* Hover shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              
              {/* Menu icon with animation */}
              <svg className="relative w-6 h-6 transition-transform duration-500 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2.5} 
                  d="M4 6h16M4 12h16M4 18h16"
                  className="transition-all duration-300"
                />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Decorative dots pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </header>
      
      <LoginModal open={loginOpen} onOpenChange={onLoginOpenChange} onOpenLiveChat={onOpenLiveChat} />
    </>
  );
}
