import { useState, useEffect } from 'react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-md' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center">
          <a href="#" className="flex items-center">
            <img 
              src="/lovable-uploads/3de03002-3246-4965-b7e8-9780a09a46af.png" 
              alt="UV.Agency Logo" 
              className="h-16 w-auto transition-transform duration-300 hover:scale-105"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;