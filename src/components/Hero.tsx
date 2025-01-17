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
    { name: "Google", logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png" },
    { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/512px-Meta_Platforms_Inc._logo.svg.png" },
    { name: "Apple", logo: "https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg" },
    { name: "Microsoft", logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" },
    { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" },
    { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/1920px-Tesla_Motors.svg.png" },
    { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/1920px-Intel_logo_%282006-2020%29.svg.png" },
    { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/1920px-Adobe_Corporate_Logo.png" },
    { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1920px-Salesforce.com_logo.svg.png" }
  ];

  const plugin = Autoplay({ 
    delay: 3000,
    stopOnInteraction: false,
    stopOnMouseEnter: false,
  });

  return (
    <section className="hero-section min-h-screen pt-16 flex items-center justify-center relative overflow-hidden">
      <div className="slider-thumb"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <img 
            src="/lovable-uploads/3de03002-3246-4965-b7e8-9780a09a46af.png" 
            alt="UV.Agency Logo" 
            className="h-32 w-auto mx-auto mb-16 transition-transform duration-300 hover:scale-105"
          />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white">
            The integrated<br />marketing agency
          </h1>
          <p className="hidden sm:block text-lg md:text-xl text-white/90 mb-12 max-w-[600px] mx-auto">
            Driving business growth through creativity,<br />media, and phygital innovation
          </p>
          <a 
            href="#work"
            className="inline-block bg-white text-[#1A1F2C] px-8 py-4 rounded-[100px] hover:bg-gray-100 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Curated work
          </a>

          {/* Client Logos Carousel */}
          <div className="mt-20">
            <p className="text-white/60 text-sm uppercase tracking-wider mb-8">Trusted by leading brands worldwide</p>
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