
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { Button } from './ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isMobile = useIsMobile();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id: string) => {
    // If we're on the home page, scroll to the section
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 100,
          behavior: 'smooth'
        });
      }
      setActiveSection(id);
    }
    setIsOpen(false);
  };

  // Update active section based on scroll position
  useEffect(() => {
    if (location.pathname !== '/') {
      return; // Only track scroll on home page
    }
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      const sections = ['home', 'work', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        
        const offsetTop = element.offsetTop - 150;
        const offsetBottom = offsetTop + element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <>
      {/* Toggle Button */}
      <div className="fixed top-6 right-6 z-50">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={toggleMenu}
          className="rounded-full bg-white/80 backdrop-blur-sm border-none shadow-md hover:bg-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Navigation Menu */}
      <div 
        className={`fixed inset-0 bg-black/90 backdrop-blur-sm z-40 transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col justify-center items-center h-full">
          <nav>
            <ul className="space-y-6 text-center">
              <li>
                <Link 
                  to="/"
                  onClick={() => {
                    scrollToSection('home');
                    setIsOpen(false);
                  }}
                  className={`text-3xl font-bold transition-colors hover:text-primary ${
                    activeSection === 'home' && location.pathname === '/' ? 'text-primary' : 'text-white'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/"
                  onClick={() => {
                    scrollToSection('work');
                    setIsOpen(false);
                  }}
                  className={`text-3xl font-bold transition-colors hover:text-primary ${
                    activeSection === 'work' && location.pathname === '/' ? 'text-primary' : 'text-white'
                  }`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="/culture"
                  onClick={() => setIsOpen(false)}
                  className={`text-3xl font-bold transition-colors hover:text-primary ${
                    location.pathname === '/culture' ? 'text-primary' : 'text-white'
                  }`}
                >
                  Culture
                </Link>
              </li>
              <li>
                <Link 
                  to="/"
                  onClick={() => {
                    scrollToSection('contact');
                    setIsOpen(false);
                  }}
                  className={`text-3xl font-bold transition-colors hover:text-primary ${
                    activeSection === 'contact' && location.pathname === '/' ? 'text-primary' : 'text-white'
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Indicator dots for desktop */}
      {!isMobile && !isOpen && location.pathname === '/' && (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden md:block">
          <div className="flex flex-col space-y-4">
            <Button 
              variant="outline" 
              size="icon" 
              className={`rounded-full w-3 h-3 p-0 ${
                activeSection === 'home' ? 'bg-primary border-primary' : 'bg-white/50 border-white/50'
              }`}
              onClick={() => scrollToSection('home')}
            />
            <Button 
              variant="outline" 
              size="icon" 
              className={`rounded-full w-3 h-3 p-0 ${
                activeSection === 'work' ? 'bg-primary border-primary' : 'bg-white/50 border-white/50'
              }`}
              onClick={() => scrollToSection('work')}
            />
            <Button 
              variant="outline" 
              size="icon" 
              className={`rounded-full w-3 h-3 p-0 ${
                activeSection === 'contact' ? 'bg-primary border-primary' : 'bg-white/50 border-white/50'
              }`}
              onClick={() => scrollToSection('contact')}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
