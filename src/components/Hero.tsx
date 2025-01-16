import { useEffect, useState } from 'react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            We Create Digital Experiences
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            A digital agency focused on crafting unique and engaging web solutions
          </p>
          <a 
            href="#contact"
            className="inline-block bg-black text-white px-8 py-4 rounded-full hover:bg-gray-900 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
      
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100/50" />
      </div>
    </section>
  );
};

export default Hero;