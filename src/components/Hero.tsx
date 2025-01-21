import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setMounted(true);
  }, []);

  const clientLogos = [
    { name: "Coca Cola", logo: "/client-logos/coca-cola.png" },
    { name: "Unilever", logo: "/client-logos/unilever.png" },
    { name: "Nestle", logo: "/client-logos/nestle.png" },
    { name: "Pepsico", logo: "/client-logos/pepsico.png" },
    { name: "Colun", logo: "/client-logos/colun.png" },
    { name: "Watts", logo: "/client-logos/watts.png" },
    { name: "Carozzi", logo: "/client-logos/carozzi.png" },
    { name: "Cencosud", logo: "/client-logos/cencosud.png" },
    { name: "Falabella", logo: "/client-logos/falabella.png" },
    { name: "Ripley", logo: "/client-logos/ripley.png" },
    { name: "Paris", logo: "/client-logos/paris.png" },
    { name: "Jumbo", logo: "/client-logos/jumbo.png" }
  ];

  const plugin = Autoplay({ 
    delay: 3000,
    stopOnInteraction: false,
    stopOnMouseEnter: false,
  });

  return (
    <section className="hero-section min-h-screen pt-16 pb-10 flex items-center justify-center relative overflow-hidden">
      <div className="slider-thumb"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <img 
            src="/lovable-uploads/3de03002-3246-4965-b7e8-9780a09a46af.png" 
            alt="UV.Agency Logo" 
            className="h-32 w-auto mx-auto mb-10 transition-transform duration-300 hover:scale-105"
          />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-10 text-white">
            The integrated<br />marketing agency
          </h1>
          <p className="hidden sm:block text-lg md:text-xl text-white/90 mb-16 max-w-[600px] mx-auto">
            Driving business growth through creativity,<br />media, and phygital innovation
          </p>
          <a 
            href="#work"
            className="inline-block bg-white text-[#1A1F2C] px-8 py-4 rounded-[100px] hover:bg-gray-100 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Curated work
          </a>

          {/* Client Logos Carousel */}
          <div className="mt-14">
            <p className="text-white/60 text-sm uppercase tracking-wider mb-6">Trusted by leading brands worldwide</p>
            <Carousel
              opts={{
                align: "center",
                loop: true,
                skipSnaps: false,
                dragFree: !isMobile,
                containScroll: false,
                slidesToScroll: isMobile ? 1 : 2,
                duration: 50,
              }}
              plugins={[plugin]}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                {clientLogos.map((client, index) => (
                  <CarouselItem key={index} className={isMobile ? "basis-full" : "basis-1/6 md:basis-1/6"}>
                    <div className="p-4">
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className="h-8 w-auto mx-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;