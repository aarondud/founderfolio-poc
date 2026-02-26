import { useRef, useEffect } from 'react';
import useScrollAnimation from './useScrollAnimation';

export const useSectionAnimation = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { registerElement } = useScrollAnimation();

  useEffect(() => {
    registerElement(sectionRef.current);
  }, [registerElement]);

  return { sectionRef };
};
