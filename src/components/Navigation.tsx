
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const isMobile = useIsMobile();
  const location = useLocation();

  // Check if we're on the culture page
  const isCulturePage = location.pathname === '/culture';

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
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-bold text-xl">UV Agency</Link>
          
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link 
                  to="/"
                  onClick={() => scrollToSection('home')}
                  className={`font-medium transition-colors hover:text-primary ${
                    activeSection === 'home' && location.pathname === '/' ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/"
                  onClick={() => scrollToSection('work')}
                  className={`font-medium transition-colors hover:text-primary ${
                    activeSection === 'work' && location.pathname === '/' ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  Projects
                </Link>
              </li>
              {/* Only show the Culture link if we're already on the Culture page */}
              {isCulturePage && (
                <li>
                  <Link 
                    to="/culture"
                    className={`font-medium transition-colors hover:text-primary ${
                      location.pathname === '/culture' ? 'text-primary' : 'text-gray-600'
                    }`}
                  >
                    Culture
                  </Link>
                </li>
              )}
              <li>
                <Link 
                  to="/"
                  onClick={() => scrollToSection('contact')}
                  className={`font-medium transition-colors hover:text-primary ${
                    activeSection === 'contact' && location.pathname === '/' ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
