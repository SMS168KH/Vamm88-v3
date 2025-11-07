import { BonusCard } from "./BonusCard";
import birthdayBonusImage from "figma:asset/76ef2ff4e15efa94fdbd55c1af29e3c04bc7cffb.png";
import vipUpgradeImage from "figma:asset/0cb8bb6ff8d664d24830188ae2376563ad928e27.png";
import baccaratImage from "figma:asset/bf0d427c538350aeb34456c1ccceb9f15d3e9536.png";
import cashbackImage from "figma:asset/60df0b28b0d189b93af7f925ebe027ac34d12bb5.png";

interface BonusGridProps {
  onApply?: () => void;
}

export function BonusGrid({ onApply }: BonusGridProps) {
  const bonuses = [
    // Long-term promotion
    {
      id: 2,
      title: "BIRTHDAY",
      subtitle: "生日红利",
      description: "Birthday Bonus 1888🎁",
      image: birthdayBonusImage,
      dateRange: "2025-01-01~2030-11-30",
      badge: "生日红利",
    },
    
    // Short-term promotions
    {
      id: 1,
      title: "CASHBACK",
      subtitle: "1% Daily Cashback",
      description: "Cashback! Unlimited cashback",
      image: cashbackImage,
      dateRange: "2025-01-01~2025-12-31",
    },
    {
      id: 3,
      title: "VIP UPGRADE REWARDS",
      subtitle: "VIP升级奖励",
      description: "Upgrade Rewards",
      image: vipUpgradeImage,
      dateRange: "2025-01-01~2025-06-30",
      isVIP: true,
    },
    {
      id: 4,
      title: "MY LIVE BACCARAT",
      subtitle: "8 Lost 9 GET REBATE 10%",
      description: "Live Baccarat Special Rebate",
      image: baccaratImage,
      dateRange: "2025-01-01~2025-03-31",
      badge: "HOT",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
      {bonuses.map((bonus) => (
        <BonusCard key={bonus.id} {...bonus} onApply={onApply} />
      ))}
    </div>
  );
}