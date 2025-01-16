import { useEffect, useState } from 'react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
        </div>
      </div>
    </section>
  );
};

export default Hero;