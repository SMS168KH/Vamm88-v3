import { MessageCircle, X } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { useTranslation } from "../contexts/TranslationContext";

interface LiveChatProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LiveChat({ isOpen, onOpenChange }: LiveChatProps) {
  const { t } = useTranslation();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <Card className="w-80 mb-4 bg-white shadow-2xl">
          <div className="bg-gradient-gold-horizontal p-4 flex items-center justify-between rounded-t-lg">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span>👩</span>
              </div>
              <div>
                <div className="text-black">{t("liveSupport")}</div>
                <div className="text-black/70">{t("online")}</div>
              </div>
            </div>
            <button onClick={() => onOpenChange(false)} className="text-black hover:text-black/70">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4 h-64 overflow-y-auto bg-gray-50">
            <div className="bg-white rounded-lg p-3 mb-3 shadow-sm">
              <p className="text-gray-700">{t("liveChatWelcome")}</p>
            </div>
          </div>
          <div className="p-4 border-t">
            <input
              type="text"
              placeholder={t("enterMessage")}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
        </Card>
      )}
      
      <button
        onClick={() => onOpenChange(!isOpen)}
        className="bg-gradient-gold hover:bg-gradient-gold-reverse text-black w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}