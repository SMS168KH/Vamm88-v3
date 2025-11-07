import { DollarSign, Handshake, ArrowLeftRight, Shield, Award, Star } from "lucide-react";
import { useTranslation } from "../contexts/TranslationContext";

export function TrustSection() {
  const { t } = useTranslation();

  const guarantees = [
    {
      icon: DollarSign,
      title: t("strongFinancial"),
      subtitle: t("cashOutPayout"),
      description: t("strongFinancialDesc"),
    },
    {
      icon: Handshake,
      title: t("reliableOperations"),
      subtitle: "",
      description: t("reliableOperationsDesc"),
    },
    {
      icon: ArrowLeftRight,
      title: t("efficientDeposit"),
      subtitle: "",
      description: t("efficientDepositDesc"),
    },
    {
      icon: Shield,
      title: t("personalDataSecurity"),
      subtitle: t("neverLeak"),
      description: t("personalDataSecurityDesc"),
    },
    {
      icon: Award,
      title: t("legallyRegistered"),
      subtitle: t("onlineGamingLicense"),
      description: t("legallyRegisteredDesc"),
    },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-black">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-gold/5" />
      
      {/* Radial glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Banner - Legal Safe Professional */}
        <div className="flex justify-center mb-12">
          <div className="relative inline-flex items-center gap-3 px-10 py-3 bg-gradient-gold-horizontal rounded-full shadow-xl shadow-gold/20 overflow-hidden group">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer" />
            <Star className="w-5 h-5 text-black" />
            <span className="relative text-black tracking-widest uppercase">
              {t("legalSafeProfessional")}
            </span>
            <Star className="w-5 h-5 text-black" />
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-6">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-light">
            {t("vam88RatedBest")}
          </h2>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-black to-dark-elevated border border-gold/20 rounded-2xl p-8 backdrop-blur-sm shadow-2xl shadow-gold/10">
            <p className="text-gray-300 leading-relaxed mb-4">
              {t("vam88Description1")}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {t("vam88Description2")}
            </p>
          </div>
        </div>

        {/* Five Guarantees Banner */}
        <div className="flex justify-center mb-16">
          <div className="relative inline-block">
            {/* Glow behind */}
            <div className="absolute inset-0 bg-gold/30 blur-2xl" />
            
            {/* Main banner */}
            <div className="relative px-16 py-4 bg-gradient-gold-horizontal clip-ribbon shadow-2xl shadow-gold/40">
              <span className="text-black tracking-[0.3em] uppercase">
                {t("fiveGuarantees")}
              </span>
              
              {/* Top highlight */}
              <div className="absolute top-0 left-8 right-8 h-px bg-white/40" />
            </div>
            
            {/* Ribbon tails */}
            <div className="absolute left-0 top-full w-0 h-0 border-t-[20px] border-t-gold-darker border-r-[15px] border-r-transparent" />
            <div className="absolute right-0 top-full w-0 h-0 border-t-[20px] border-t-gold-darker border-l-[15px] border-l-transparent" />
          </div>
        </div>

        {/* Guarantees Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Hover glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-b from-gold/50 to-gold-dark/50 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
                
                {/* Card */}
                <div className="relative h-full bg-black border-2 border-gold-darker hover:border-gold rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl shadow-gold/20 transition-all duration-500 group-hover:-translate-y-2">
                  {/* Top gold bar */}
                  <div className="h-1.5 bg-gradient-gold-horizontal" />
                  
                  {/* Icon section */}
                  <div className="pt-8 pb-6 flex justify-center">
                    <div className="relative">
                      {/* Icon background circle */}
                      <div className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center shadow-lg ring-4 ring-gold/20 group-hover:ring-gold/50 transition-all duration-500 group-hover:scale-110">
                        <Icon className="w-10 h-10 text-black" strokeWidth={2.5} />
                      </div>
                      
                      {/* Subtle glow */}
                      <div className="absolute inset-0 rounded-full bg-gold blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-6 pb-8">
                    <h3 className="text-white text-center mb-2 leading-tight">
                      {guarantee.title}
                    </h3>
                    {guarantee.subtitle && (
                      <p className="text-gold text-center mb-4 leading-tight">
                        {guarantee.subtitle}
                      </p>
                    )}
                    <div className="w-12 h-0.5 bg-gradient-to-r from-gold to-gold-dark mx-auto mb-4 rounded-full" />
                    <p className="text-gray-300 leading-relaxed text-center text-sm">
                      {guarantee.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-20 flex items-center justify-center gap-3">
          <div className="h-px w-32 bg-gradient-to-r from-transparent to-gold/50" />
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
          </div>
          <div className="h-px w-32 bg-gradient-to-l from-transparent to-gold/50" />
        </div>
      </div>
    </section>
  );
}