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
    { name: "Ball", logo: "/client-logos/ball.svg" },
    { name: "Chancaca", logo: "/client-logos/chancaca.svg" },
    { name: "Edusoft", logo: "/client-logos/edusoft.svg" },
    { name: "Heineken", logo: "/client-logos/heineken.svg" },
    { name: "Igenix", logo: "/client-logos/igenix.svg" },
    { name: "Little Caesars", logo: "/client-logos/littlecaesars.svg", className: "scale-[1.75]" },
    { name: "Melecmetal", logo: "/client-logos/melecmetal.svg" },
    { name: "Pepsico", logo: "/client-logos/pepsico.svg" },
    { name: "Philips", logo: "/client-logos/philips.svg" },
    { name: "Royal Canin", logo: "/client-logos/royalcanin.svg" }
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
            className="inline-block bg-white text-[#1A1F2C] px-8 py-4 rounded-[100px] hover:bg-custom-teal hover:text-white transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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
                        className={`h-12 w-auto mx-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity ${client.className || ''}`}
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