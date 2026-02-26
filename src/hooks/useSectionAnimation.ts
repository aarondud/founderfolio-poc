import { useRef, useEffect, useState } from 'react';
import useScrollAnimation from './useScrollAnimation';

export const useSectionAnimation = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const { registerElement } = useScrollAnimation();

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    registerElement(element);

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const inView = rect.top <= window.innerHeight - 150 && rect.bottom >= 0;
      setIsInView(inView);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [registerElement]);

  return { sectionRef, isInView };
};
