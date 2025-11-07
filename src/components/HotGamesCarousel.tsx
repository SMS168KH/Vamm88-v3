import { useTranslation } from "../contexts/TranslationContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "./ui/carousel";

interface HotGamesCarouselProps {
  onNavigate?: (page: string) => void;
}

interface GameCategory {
  id: string;
  nameKey: string;
  imageUrl: string;
  route: string;
}

export function HotGamesCarousel({ onNavigate }: HotGamesCarouselProps) {
  const { t } = useTranslation();

  const gameCategories: GameCategory[] = [
    {
      id: "jdb",
      nameKey: "jdbSlot",
      imageUrl: "https://images.unsplash.com/photo-1566563255308-753861417000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGNhc2lubyUyMGdhbWV8ZW58MXx8fHwxNzYyNTA2MjU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      route: "slots"
    },
    {
      id: "evo",
      nameKey: "evoCasino",
      imageUrl: "https://images.unsplash.com/photo-1633629544357-14223c9837d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwY2FzaW5vJTIwZGVhbGVyJTIwZ2FtZXxlbnwxfHx8fDE3NjI1MjUyNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      route: "live"
    },
    {
      id: "microgaming",
      nameKey: "microgaming",
      imageUrl: "https://images.unsplash.com/photo-1618304925090-b68a8c744cbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNpbm8lMjBjYXJkcyUyMGJsYWNramFja3xlbnwxfHx8fDE3NjI1MjUyNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      route: "slots"
    },
    {
      id: "cmd",
      nameKey: "cmdSports",
      imageUrl: "https://images.unsplash.com/photo-1714865212999-a9817814b080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBiZXR0aW5nJTIwc2NyZWVufGVufDF8fHx8MTc2MjUyNTI3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      route: "sports"
    },
    {
      id: "gr",
      nameKey: "grSlots",
      imageUrl: "https://images.unsplash.com/photo-1627831389670-d20f5a01c536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3VsZXR0ZSUyMHdoZWVsJTIwY2FzaW5vfGVufDF8fHx8MTc2MjQ5OTQyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      route: "slots"
    },
    {
      id: "pragmatic",
      nameKey: "pragmaticPlay",
      imageUrl: "https://images.unsplash.com/photo-1719228159189-148c8c45e634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlciUyMGNoaXBzJTIwY2FzaW5vfGVufDF8fHx8MTc2MjQ5NzY3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      route: "slots"
    }
  ];

  return (
    <section className="relative">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 
            className="text-gold inline-block relative"
            style={{
              background: 'linear-gradient(90deg, #F4D889 0%, #FFE5A0 50%, #F4D889 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {t("hotGames")}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-3" />
        </div>

        {/* Carousel */}
        <div className="relative px-8 md:px-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {[...gameCategories, ...gameCategories].map((game, index) => (
                <CarouselItem 
                  key={`${game.id}-${index}`} 
                  className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6"
                >
                  <button
                    onClick={() => onNavigate?.(game.route)}
                    className="block w-full outline-none focus:outline-none"
                  >
                    {/* Card Container */}
                    <div className="relative">
                      {/* Card */}
                      <div className="relative bg-gradient-to-br from-gray-900 to-black border-2 border-gold/20 rounded-2xl overflow-hidden">
                        {/* Image Container */}
                        <div className="aspect-square overflow-hidden relative">
                          <img
                            src={game.imageUrl}
                            alt={t(game.nameKey as any)}
                            className="w-full h-full object-cover"
                          />
                          {/* Overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60" />
                        </div>

                        {/* Game Name */}
                        <div className="p-3 md:p-4 bg-gradient-to-b from-black to-gray-900">
                          <p className="text-gold text-center truncate">
                            {t(game.nameKey as any)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom Navigation Buttons */}
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/80 border border-gold/30 shadow-lg -ml-5">
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gold" />
            </CarouselPrevious>
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/80 border border-gold/30 shadow-lg -mr-5">
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gold" />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
