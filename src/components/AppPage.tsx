import { Smartphone, Download, PlayCircle, Apple, MonitorSmartphone } from "lucide-react";
import { useTranslation } from "../contexts/TranslationContext";

export function AppPage() {
  const { t } = useTranslation();

  const installationGuides = [
    { 
      icon: Apple, 
      text: t("addToHomeScreenIOS"),
      gradient: "from-gray-500/20 to-gray-700/10"
    },
    { 
      icon: MonitorSmartphone, 
      text: t("addToHomeScreenAndroid"),
      gradient: "from-green-500/20 to-green-700/10"
    },
    { 
      icon: Apple, 
      text: t("downloadIOSApp"),
      gradient: "from-blue-500/20 to-blue-700/10"
    },
    { 
      icon: MonitorSmartphone, 
      text: t("downloadAndroidApp"),
      gradient: "from-emerald-500/20 to-emerald-700/10"
    },
  ];

  const videoTutorials = [
    { text: t("addToHomeScreenIOSVideo") },
    { text: t("addToHomeScreenAndroidVideo") },
    { text: t("iosAppDownloadVideo") },
    { text: t("androidAppDownloadVideo") },
  ];

  return (
    <main className="min-h-screen bg-black py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        {/* Installation Guides Section */}
        <div className="mb-20">
          <h2 className="text-white text-center mb-12 bg-gradient-to-r from-white to-gold-light bg-clip-text text-transparent">
            Installation Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {installationGuides.map((guide, index) => {
              const Icon = guide.icon;
              return (
                <div key={index} className="group relative">
                  <div className={`absolute -inset-1 bg-gradient-to-br ${guide.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500`} />
                  
                  <button className={`relative w-full bg-gradient-to-br ${guide.gradient} border border-gray-800 group-hover:border-gold/40 rounded-2xl p-8 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl`}>
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold-dark/10 rounded-xl border border-gold/20 group-hover:border-gold/40 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                        <Icon className="w-8 h-8 text-gold transition-all duration-500" />
                      </div>
                      <p className="text-white text-sm text-center leading-snug">
                        {guide.text}
                      </p>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Video Tutorials Section */}
        <div className="mb-20">
          <h2 className="text-white text-center mb-12 bg-gradient-to-r from-white to-gold-light bg-clip-text text-transparent">
            Video Tutorials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {videoTutorials.map((video, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gold/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500" />
                
                <button className="relative w-full rounded-2xl overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-gold/30">
                  <div className="bg-gradient-to-br from-[#E6C75F] via-[#F4D889] to-[#C9A961] p-8 min-h-[200px] flex flex-col items-center justify-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-black/10 blur-xl rounded-full" />
                      <div className="relative w-16 h-16 rounded-full bg-black/20 group-hover:bg-black/30 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                        <PlayCircle className="w-8 h-8 text-black" />
                      </div>
                    </div>
                    <p className="text-black text-sm text-center leading-snug px-2">
                      {video.text}
                    </p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Download Info Section */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 to-gold-dark/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
          
          <div className="relative bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 group-hover:border-gold/40 rounded-2xl p-8 md:p-12 transition-all duration-500">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-gold/30 blur-xl rounded-full" />
                  <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-xl shadow-gold/30">
                    <Download className="w-10 h-10 text-black" />
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-white mb-4">
                  Download VAM88 Mobile App
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Get the best mobile gaming experience with our native apps for iOS and Android. 
                  Enjoy faster loading times, smoother gameplay, and exclusive mobile bonuses!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
