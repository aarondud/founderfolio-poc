import { useEffect, useRef } from 'react';
import { isInViewport } from '@/lib/utils';

const useScrollAnimation = () => {
  const elementsRef = useRef<Set<HTMLElement>>(new Set());

  const registerElement = (element: HTMLElement | null) => {
    if (element && !elementsRef.current.has(element)) {
      elementsRef.current.add(element);
    }
  };

  useEffect(() => {
    const elements = elementsRef.current;
    
    const handleScroll = () => {
      elements.forEach((element) => {
        if (isInViewport(element)) {
          element.classList.add('in-view');
        }
      });
    };
    
    // Check on initial load
    window.setTimeout(handleScroll, 100);
    
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { registerElement };
};

export default useScrollAnimation;