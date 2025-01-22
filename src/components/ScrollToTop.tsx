import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  console.log('ScrollToTop visibility:', isVisible);

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      variant="secondary"
      size="icon"
      className="fixed bottom-8 right-8 z-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-custom-teal hover:bg-custom-teal/90 text-white"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
};

export default ScrollToTop;