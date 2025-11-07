import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Eye, EyeOff, User, Lock, Mail, Phone, Sparkles, Gift, Zap, Shield, CheckCircle2, Globe, Trophy } from "lucide-react";
import { useTranslation } from "../contexts/TranslationContext";
import { toast } from "sonner@2.0.3";
import logoImage from "figma:asset/fd51837c19dd599abb8e89b96031a533a4f6f1ce.png";
import promoImage from "figma:asset/60df0b28b0d189b93af7f925ebe027ac34d12bb5.png";
import { FlagIcon } from "./FlagIcon";

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onOpenLiveChat: () => void;
}

export function LoginModal({ open, onOpenChange, onOpenLiveChat }: LoginModalProps) {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [country, setCountry] = useState("MY");
  const { language, setLanguage, t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone: "",
  });

  // Reset to login tab and clear form when modal opens
  useEffect(() => {
    if (open) {
      setActiveTab("login");
      setFormData({
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
        phone: "",
      });
      setErrors({});
      setShowPassword(false);
      setShowConfirmPassword(false);
      setAcceptTerms(false);
    }
  }, [open]);

  const countries = [
    { code: "KH", name: "Cambodia", flag: "🇰🇭" },
    { code: "MY", name: "Malaysia", flag: "🇲🇾" },
    { code: "SG", name: "Singapore", flag: "🇸🇬" },
  ];

  const languages = [
    { code: "EN" as const, name: "English" },
    { code: "ZH" as const, name: "中文" },
    { code: "KM" as const, name: "ខ្មែរ" },
  ];

  const selectedCountry = countries.find(c => c.code === country);
  const selectedLanguage = languages.find(l => l.code === language);

  const handleLanguageChange = (value: string) => {
    setLanguage(value as "EN" | "ZH" | "KM");
  };

  const getPasswordStrength = (password: string) => {
    if (password.length === 0) return { strength: 0, label: "", color: "" };
    if (password.length < 6) return { strength: 25, label: t("weak"), color: "bg-red-500" };
    if (password.length < 10) return { strength: 50, label: t("fair"), color: "bg-orange-500" };
    if (password.length < 12) return { strength: 75, label: t("good"), color: "bg-gold" };
    return { strength: 100, label: t("strong"), color: "bg-green-500" };
  };

  const passwordStrength = activeTab === "register" ? getPasswordStrength(formData.password) : null;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.username) {
      newErrors.username = t("usernameRequired");
    } else if (activeTab === "register" && formData.username.length < 3) {
      newErrors.username = t("usernameMinLength");
    }

    if (!formData.password) {
      newErrors.password = t("passwordRequired");
    } else if (formData.password.length < 6) {
      newErrors.password = t("passwordMinLength");
    }

    if (activeTab === "register") {
      if (!formData.email) {
        newErrors.email = t("emailRequired");
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = t("invalidEmail");
      }

      if (!formData.phone) {
        newErrors.phone = t("phoneRequired");
      }

      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = t("passwordsNotMatch");
      }

      if (!acceptTerms) {
        newErrors.terms = t("acceptTermsRequired");
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    if (activeTab === "login") {
      // Simulate login validation
      const validCredentials = [
        { username: "demo", password: "demo123" },
        { username: "test", password: "test123" },
      ];
      
      const isValid = validCredentials.some(
        cred => (cred.username === formData.username || cred.username === formData.username.toLowerCase()) && 
                 cred.password === formData.password
      );
      
      if (isValid) {
        toast.success(t("loginSuccess"), {
          description: t("welcomeBack"),
          duration: 3000,
        });
        setLoading(false);
        onOpenChange(false);
      } else {
        toast.error(t("loginFailed"), {
          description: t("invalidCredentials"),
          duration: 4000,
        });
        setErrors({ 
          username: " ",
          password: t("invalidCredentials")
        });
        setLoading(false);
      }
    } else {
      // Simulate registration validation
      const existingUsernames = ["demo", "test", "admin", "user"];
      const existingEmails = ["demo@email.com", "test@email.com"];
      
      if (existingUsernames.includes(formData.username.toLowerCase())) {
        toast.error(t("registrationFailed"), {
          description: t("usernameAlreadyExists"),
          duration: 4000,
        });
        setErrors({ username: t("usernameAlreadyExists") });
        setLoading(false);
        return;
      }
      
      if (existingEmails.includes(formData.email.toLowerCase())) {
        toast.error(t("registrationFailed"), {
          description: t("emailAlreadyExists"),
          duration: 4000,
        });
        setErrors({ email: t("emailAlreadyExists") });
        setLoading(false);
        return;
      }
      
      // Registration successful
      toast.success(t("registrationSuccess"), {
        description: t("accountCreatedWelcome"),
        duration: 3000,
      });
      setLoading(false);
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] sm:max-w-[900px] lg:max-w-[1000px] bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 border-2 border-gold p-0 overflow-hidden shadow-2xl shadow-gold/40">
        <DialogTitle className="sr-only">{t("loginToVAM88")}</DialogTitle>
        <DialogDescription className="sr-only">
          {t("loginOrRegister")}
        </DialogDescription>
        
        <div className="flex flex-col md:flex-row min-h-[600px]">
          {/* Left Side - Promotional Banner */}
          <div className="hidden md:flex md:w-[45%] bg-gradient-to-br from-gold-dark via-gold to-gold-light p-8 relative overflow-hidden">
            {/* Decorative background patterns */}
            <div className="absolute inset-0 opacity-25">
              <div className="absolute top-0 left-0 w-96 h-96 bg-black rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-black rounded-full blur-3xl" />
            </div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full w-full">
              <div className="text-center">
                <img 
                  src={logoImage} 
                  alt="VAM88 Logo" 
                  className="h-52 w-auto object-contain mx-auto mb-6 drop-shadow-2xl"
                />
                <h2 className="text-white text-3xl font-bold mb-3">
                  Welcome To VAM88
                </h2>
                <p className="text-white text-lg">
                  Join thousands of winners today
                </p>
              </div>

              {/* Promo Banner Image */}
              <div className="my-4">
                <img 
                  src={promoImage} 
                  alt="1% Daily Cashback Promotion" 
                  className="w-full h-auto object-contain rounded-xl shadow-2xl border-2 border-black/20 scale-110"
                />
              </div>

              {/* Benefits */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-black/10 backdrop-blur-sm p-3 rounded-xl border border-black/20">
                  <div className="bg-black text-gold p-2 rounded-lg">
                    <Gift className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 text-sm">Welcome Bonus</h3>
                    <p className="text-white/90 text-xs">Get up to 100% bonus on first deposit</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-black/10 backdrop-blur-sm p-3 rounded-xl border border-black/20">
                  <div className="bg-black text-gold p-2 rounded-lg">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 text-sm">Daily Rewards</h3>
                    <p className="text-white/90 text-xs">Exclusive promotions every day</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-black/10 backdrop-blur-sm p-3 rounded-xl border border-black/20">
                  <div className="bg-black text-gold p-2 rounded-lg">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 text-sm">Instant Withdrawal</h3>
                    <p className="text-white/90 text-xs">Fast and secure transactions</p>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="flex items-center justify-center gap-3 pt-4">
                <div className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-full">
                  <Shield className="w-4 h-4 text-gold" />
                  <span className="text-gold text-sm font-medium">{t("secure")}</span>
                </div>
                <div className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                  <span className="text-gold text-sm font-medium">{t("trusted")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="flex-1 bg-gray-900 p-6 sm:p-8 lg:p-10 relative">
            {/* Decorative gold accent bar at top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light" />
            
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/20 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 h-full flex flex-col">
              {/* Mobile Logo */}
              <div className="md:hidden flex justify-center mb-6">
                <img 
                  src={logoImage} 
                  alt="VAM88 Logo" 
                  className="h-16 w-auto object-contain"
                />
              </div>

              {/* Language and Country selectors */}
              <div className="flex justify-end gap-2 mb-6">
                <Select value={language} onValueChange={handleLanguageChange}>
                  <SelectTrigger className="w-28 h-9 bg-gray-800 text-white border-2 border-gold/40 hover:border-gold transition-all rounded-lg shadow-sm">
                    <SelectValue>
                      <span className="flex items-center gap-1.5 text-sm font-medium">
                        <Globe className="w-3.5 h-3.5 text-gold" />
                        {selectedLanguage?.name}
                      </span>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gold/60">
                    {languages.map((lang) => (
                      <SelectItem 
                        key={lang.code} 
                        value={lang.code}
                        className="text-white hover:bg-gold/20 focus:bg-gold/20"
                      >
                        {lang.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={country} onValueChange={setCountry}>
                  <SelectTrigger className="w-32 h-9 bg-gray-800 text-white border-2 border-gold/40 hover:border-gold transition-all rounded-lg shadow-sm">
                    <SelectValue>
                      <span className="flex items-center gap-1.5 text-sm font-medium">
                        <FlagIcon country={country as "KH" | "MY" | "SG"} className="w-5 h-3.5" />
                        {selectedCountry?.name}
                      </span>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gold/60">
                    {countries.map((c) => (
                      <SelectItem 
                        key={c.code} 
                        value={c.code}
                        className="text-white hover:bg-gold/20 focus:bg-gold/20"
                      >
                        <div className="flex items-center gap-2">
                          <FlagIcon country={c.code} className="w-5 h-3.5" />
                          <span>{c.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Tabs */}
              <div className="flex gap-1 mb-8 p-1.5 bg-gray-800 rounded-xl border-2 border-gold/30 shadow-md">
                <button
                  onClick={() => setActiveTab("login")}
                  className={`flex-1 py-3.5 rounded-lg transition-all duration-300 relative overflow-hidden ${
                    activeTab === "login"
                      ? "bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black font-bold shadow-lg shadow-gold/40"
                      : "text-gray-400 hover:text-white hover:bg-gray-700 font-semibold"
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <User className="w-4 h-4" />
                    {t("login")}
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab("register")}
                  className={`flex-1 py-3.5 rounded-lg transition-all duration-300 relative overflow-hidden ${
                    activeTab === "register"
                      ? "bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black font-bold shadow-lg shadow-gold/40"
                      : "text-gray-400 hover:text-white hover:bg-gray-700 font-semibold"
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    {t("register")}
                  </span>
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex-1 flex flex-col space-y-4">
                {activeTab === "register" && (
                  <>
                    {/* Phone Input */}
                    <div>
                      <Label htmlFor="phone" className="text-white mb-2 block text-sm font-semibold">
                        {t("phoneNumber")}
                      </Label>
                      <div className={`bg-gray-800/50 rounded-lg px-4 py-3.5 flex items-center gap-3 border-2 transition-all shadow-sm ${
                        errors.phone ? "border-red-500 shadow-red-500/20" : "border-gold/50 focus-within:border-gold focus-within:shadow-md focus-within:shadow-gold/30"
                      }`}>
                        <Phone className="w-5 h-5 text-gold" />
                        <input
                          id="phone"
                          type="tel"
                          placeholder={t("phonePlaceholder")}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-transparent text-white placeholder:text-gray-500 outline-none flex-1 font-medium"
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-red-400 text-sm mt-1.5 flex items-center gap-1 font-medium">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </>
                )}

                {/* Username Input */}
                <div>
                  <Label htmlFor="username" className="text-white mb-2 block text-sm font-semibold">
                    {t("username")}
                  </Label>
                  <div className={`bg-gray-800/50 rounded-lg px-4 py-3.5 flex items-center gap-3 border-2 transition-all shadow-sm ${
                    errors.username ? "border-red-500 shadow-red-500/20" : "border-gold/50 focus-within:border-gold focus-within:shadow-md focus-within:shadow-gold/30"
                  }`}>
                    <User className="w-5 h-5 text-gold" />
                    <input
                      id="username"
                      type="text"
                      placeholder={activeTab === "login" ? t("usernamePlaceholder") : t("usernameRegisterPlaceholder")}
                      value={formData.username}
                      onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                      className="bg-transparent text-white placeholder:text-gray-500 outline-none flex-1 font-medium"
                    />
                  </div>
                  {errors.username && (
                    <p className="text-red-400 text-sm mt-1.5 flex items-center gap-1 font-medium">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.username}
                    </p>
                  )}
                </div>

                {/* Password Input */}
                <div>
                  <Label htmlFor="password" className="text-white mb-2 block text-sm font-semibold">
                    {t("password")}
                  </Label>
                  <div className={`bg-gray-800/50 rounded-lg px-4 py-3.5 flex items-center gap-3 border-2 transition-all shadow-sm ${
                    errors.password ? "border-red-500 shadow-red-500/20" : "border-gold/50 focus-within:border-gold focus-within:shadow-md focus-within:shadow-gold/30"
                  }`}>
                    <Lock className="w-5 h-5 text-gold" />
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder={t("passwordPlaceholder")}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="bg-transparent text-white placeholder:text-gray-500 outline-none flex-1 font-medium"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gold hover:text-gold-light transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-400 text-sm mt-1.5 flex items-center gap-1 font-medium">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.password}
                    </p>
                  )}
                  
                  {/* Password Strength Indicator */}
                  {activeTab === "register" && formData.password && passwordStrength && (
                    <div className="mt-2.5 p-3 bg-gray-800/50 rounded-lg border-2 border-gold/30 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gold text-xs font-semibold">{t("passwordStrength")}</span>
                        <span className={`text-xs font-bold ${
                          passwordStrength.strength === 100 ? "text-green-400" :
                          passwordStrength.strength >= 75 ? "text-gold" :
                          passwordStrength.strength >= 50 ? "text-orange-400" :
                          "text-red-400"
                        }`}>
                          {passwordStrength.label}
                        </span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${passwordStrength.color} transition-all duration-500`}
                          style={{ width: `${passwordStrength.strength}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Confirm Password for Register */}
                {activeTab === "register" && (
                  <div>
                    <Label htmlFor="confirmPassword" className="text-white mb-2 block text-sm font-semibold">
                      {t("confirmPassword")}
                    </Label>
                    <div className={`bg-gray-800/50 rounded-lg px-4 py-3.5 flex items-center gap-3 border-2 transition-all shadow-sm ${
                      errors.confirmPassword ? "border-red-500 shadow-red-500/20" : "border-gold/50 focus-within:border-gold focus-within:shadow-md focus-within:shadow-gold/30"
                    }`}>
                      <Lock className="w-5 h-5 text-gold" />
                      <input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder={t("confirmPasswordPlaceholder")}
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        className="bg-transparent text-white placeholder:text-gray-500 outline-none flex-1 font-medium"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="text-gold hover:text-gold-light transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-red-400 text-sm mt-1.5 flex items-center gap-1 font-medium">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                )}

                {activeTab === "login" ? (
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="remember"
                        checked={remember}
                        onCheckedChange={(checked) => setRemember(checked as boolean)}
                        className="border-gold data-[state=checked]:bg-gold data-[state=checked]:border-gold"
                      />
                      <label htmlFor="remember" className="text-gold cursor-pointer hover:text-gold-light transition-colors text-sm font-medium">
                        {t("rememberMe")}
                      </label>
                    </div>
                    <button 
                      type="button"
                      onClick={onOpenLiveChat}
                      className="text-gold hover:text-gold-light transition-colors text-sm font-semibold"
                    >
                      {t("forgotPassword")}
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-start gap-2.5 p-3.5 bg-gray-800/50 rounded-lg border-2 border-gold/30 shadow-sm">
                      <Checkbox
                        id="terms"
                        checked={acceptTerms}
                        onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                        className="border-gold data-[state=checked]:bg-gold data-[state=checked]:border-gold mt-0.5"
                      />
                      <label htmlFor="terms" className="text-white cursor-pointer text-sm leading-relaxed font-medium">
                        {t("iAgree")}{" "}
                        <a href="#" className="text-gold hover:text-gold-light underline transition-colors font-semibold">
                          {t("termsConditions")}
                        </a>{" "}
                        {t("and")}{" "}
                        <a href="#" className="text-gold hover:text-gold-light underline transition-colors font-semibold">
                          {t("privacyPolicy")}
                        </a>
                      </label>
                    </div>
                    {errors.terms && (
                      <p className="text-red-400 text-sm mt-1.5 flex items-center gap-1 font-medium">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.terms}
                      </p>
                    )}
                  </div>
                )}

                {/* Submit Button */}
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-gold-dark via-gold to-gold-light hover:from-gold-light hover:via-gold hover:to-gold-dark text-white py-4 rounded-lg transition-all duration-300 shadow-xl shadow-gold/40 hover:shadow-2xl hover:shadow-gold/60 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group mt-6 font-bold text-lg border-2 border-gold-dark"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-3 border-black border-t-transparent rounded-full animate-spin" />
                      {t("processing")}
                    </span>
                  ) : (
                    <>
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {activeTab === "login" ? (
                          <>
                            <Zap className="w-5 h-5" />
                            {t("logInNow")}
                          </>
                        ) : (
                          <>
                            <Gift className="w-5 h-5" />
                            {t("createAccount")}
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </>
                  )}
                </button>

                {/* Visitor Mode Button */}
                <div className="mt-4 text-center">
                  <button
                    type="button"
                    onClick={() => {
                      toast.info(t("systemAnnouncement"), {
                        description: t("continueAsVisitor"),
                        duration: 3000,
                      });
                      onOpenChange(false);
                    }}
                    className="text-gold hover:text-gold-light transition-colors text-sm font-semibold flex items-center justify-center gap-2 mx-auto group"
                  >
                    <User className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    {t("continueAsVisitor")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}