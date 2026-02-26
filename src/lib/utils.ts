import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to check if element is in viewport
export const isInViewport = (element: HTMLElement, offset = 150) => {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= window.innerHeight - offset &&
    rect.bottom >= 0
  );
};
