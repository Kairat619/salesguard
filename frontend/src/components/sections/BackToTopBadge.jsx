import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { ChevronUp } from 'lucide-react';

const BackToTopBadge = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 bg-primary hover:bg-primary/80 text-primary-foreground rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      aria-label="Back to top"
    >
      <ChevronUp className="h-4 w-4" />
    </button>
  );
};

export default BackToTopBadge;