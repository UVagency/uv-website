import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

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
    delay: 3000, // Increased delay for smoother transitions
    stopOnInteraction: false,
    stopOnMouseEnter: false, // Prevents stopping on mouse hover
  });

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Polygon Background Effect */}
      <div className="absolute inset-0 opacity-50">
        <div className="w-full h-full" style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='pattern' width='40' height='40' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='scale(2)'%3E%3Cpath d='M20 0 L40 20 L20 40 L0 20 Z' fill='%23fff' fill-opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23pattern)'/%3E%3C/svg%3E')",
          backgroundSize: "cover"
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-white/80 text-lg md:text-xl mb-4 tracking-wide">
            WE'RE UNITED VISIONS
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white">
            The integrated<br />marketing agency
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            We partner with businesses to boost growth by blending creation, media, and phygital experiences for real results
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
                dragFree: true,
                containScroll: false,
                slidesToScroll: 2,
                duration: 50,
              }}
              plugins={[plugin]}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                {clientLogos.map((client, index) => (
                  <CarouselItem key={index} className="basis-1/6 md:basis-1/6">
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
