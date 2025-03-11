
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const navigationItems = [
  { id: 'hero', label: 'Inicio' },
  { id: 'work', label: 'Proyectos' },
  { id: 'about', label: 'Nosotros' },
  { id: 'contact', label: 'Contacto' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight / 3) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Floating Menu Button */}
      <Button
        variant="secondary"
        size="icon"
        className="fixed bottom-8 left-8 z-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-custom-teal hover:bg-custom-teal/90 text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Navigation Overlay */}
      <div className={cn(
        "fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        <div className={cn(
          "fixed bottom-24 left-8 z-50 bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-4 transition-all duration-300",
          isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          <ul className="space-y-3">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "w-full text-left px-4 py-2 rounded-md transition-colors flex items-center space-x-2",
                    activeSection === item.id 
                      ? "bg-custom-teal/20 text-custom-teal font-medium" 
                      : "hover:bg-gray-100"
                  )}
                >
                  <span className={cn(
                    "w-2 h-2 rounded-full",
                    activeSection === item.id ? "bg-custom-teal" : "bg-gray-300"
                  )}></span>
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Section Indicators (visible only on desktop) */}
      {!isMobile && (
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-30">
          <ul className="space-y-4">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="group flex items-center gap-2"
                  aria-label={`Ir a ${item.label}`}
                >
                  <span className={cn(
                    "block w-3 h-3 rounded-full transition-all duration-300",
                    activeSection === item.id 
                      ? "bg-custom-teal w-4 h-4" 
                      : "bg-gray-300 group-hover:bg-gray-400"
                  )}></span>
                  <span className={cn(
                    "text-sm opacity-0 group-hover:opacity-100 transition-opacity",
                    activeSection === item.id ? "text-custom-teal" : "text-gray-600"
                  )}>
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navigation;
