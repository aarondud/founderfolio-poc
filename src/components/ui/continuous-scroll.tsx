// components/ui/continuous-scroll.tsx
import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "./scroll-area";

interface ContinuousScrollProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
  className?: string;
  isPaused?: boolean;
}

export const ContinuousScroll: React.FC<ContinuousScrollProps> = ({
  children,
  direction = "left",
  speed = 50,
  className,
  isPaused = false,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const content = contentRef.current;

    if (!scrollContainer || !content) return;

    // Double the content for seamless looping
    const clone = content.cloneNode(true) as HTMLElement;
    scrollContainer.appendChild(clone);

    const contentWidth = content.offsetWidth;
    const duration = (contentWidth / speed) * 1000;

    scrollContainer.style.setProperty("--scroll-duration", `${duration}ms`);
    scrollContainer.style.setProperty(
      "--scroll-direction",
      direction === "left" ? "normal" : "reverse"
    );

    return () => {
      if (scrollContainer.contains(clone)) {
        scrollContainer.removeChild(clone);
      }
    };
  }, [direction, speed, children]); // Added children to dependencies

  return (
    <ScrollArea className="relative overflow-hidden">
      <div
        ref={scrollRef}
        className={cn(
          "flex w-max animate-scroll",
          isPaused ? "animation-paused" : "",
          className
        )}
        style={{
          animationDuration: "var(--scroll-duration)",
          animationDirection: "var(--scroll-direction)",
        }}
      >
        <div ref={contentRef} className="flex">
          {children}
        </div>
      </div>
    </ScrollArea>
  );
};
