import { useState } from "react";
import { CasinoHeader } from "./components/CasinoHeader";
import { HomePage } from "./components/HomePage";
import { BonusPage } from "./components/BonusPage";
import { AppPage } from "./components/AppPage";
import { SlotsPage } from "./components/SlotsPage";
import { ComingSoonPage } from "./components/ComingSoonPage";
import { LiveChat } from "./components/LiveChat";
import { CasinoFooter } from "./components/CasinoFooter";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner@2.0.3";
import { TranslationProvider, useTranslation } from "./contexts/TranslationContext";
import { MonitorPlay, Trophy, Grid3x3 } from "lucide-react";
import "./styles/globals.css";
import "./styles/colors.css";

function AppContent() {
  const [activePage, setActivePage] = useState("home");
  const [loginOpen, setLoginOpen] = useState(false);
  const [liveChatOpen, setLiveChatOpen] = useState(false);
  const { t } = useTranslation();

  const handleOpenLogin = () => {
    toast.warning(t("systemAnnouncement"), {
      description: t("pleaseLoginFirst"),
      duration: 3000,
    });
    setTimeout(() => {
      setLoginOpen(true);
    }, 500);
  };

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <HomePage onOpenLogin={handleOpenLogin} onNavigate={setActivePage} />;
      case "bonus":
        return <BonusPage onOpenLogin={handleOpenLogin} />;
      case "live":
        return <ComingSoonPage icon={MonitorPlay} titleKey="liveCasino" descriptionKey="liveCasinoComingSoon" />;
      case "slots":
        return <SlotsPage />;
      case "sports":
        return <ComingSoonPage icon={Trophy} titleKey="sportsBetting" descriptionKey="sportsBettingComingSoon" />;
      case "chess":
        return <ComingSoonPage icon={Grid3x3} titleKey="chessGames" descriptionKey="chessGamesComingSoon" />;
      case "app":
        return <AppPage />;
      default:
        return <HomePage onOpenLogin={handleOpenLogin} onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <CasinoHeader 
        activePage={activePage} 
        onNavigate={setActivePage}
        loginOpen={loginOpen}
        onLoginOpenChange={setLoginOpen}
        onOpenLiveChat={() => {
          setLoginOpen(false);
          setLiveChatOpen(true);
        }}
      />
      <div className="flex-1">
        {renderPage()}
      </div>
      <CasinoFooter />
      <LiveChat isOpen={liveChatOpen} onOpenChange={setLiveChatOpen} />
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: '#1a1a1a',
            border: '2px solid #C9A961',
            color: '#ffffff',
          },
          className: 'casino-toast',
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <TranslationProvider>
      <AppContent />
    </TranslationProvider>
  );
}