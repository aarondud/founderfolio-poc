import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MARKET_LOCATIONS, HERO_IMAGES } from "@/lib/constants";

// Reusable Floating Image with Arrow Component
interface FloatingImageWithArrowProps {
  imageUrl: string;
  altText: string;
  positionClass: string;
  arrowDirection: "north-east" | "south-east" | "south-west" | "north-west";
  animationDelayClass: string;
  isLoaded: boolean;
  className?: string;
}

const FloatingImageWithArrow: React.FC<FloatingImageWithArrowProps> = ({
  imageUrl,
  altText,
  positionClass,
  arrowDirection,
  animationDelayClass,
  isLoaded,
  className = "",
}) => {
  const arrowRotation = {
    "north-east": "rotate-0",
    "south-east": "rotate-90",
    "south-west": "rotate-180",
    "north-west": "-rotate-90",
  };

  const arrowPosition = {
    top: "top-16",
    bottom: "bottom-16",
    left: "left-16",
    right: "right-16",
  };

  // Determine arrow positioning based on direction, keeping it inside
  const verticalPos = arrowDirection.includes("north") ? "bottom" : "top";
  const horizontalPos = arrowDirection.includes("east") ? "left" : "right";

  return (
    <div
      className={`absolute ${positionClass} opacity-0 ${className} ${
        isLoaded ? `animate-scaleIn ${animationDelayClass}` : ""
      } z-10`}
    >
      <div className="relative">
        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white">
          <img
            src={imageUrl}
            alt={altText}
            className="w-full h-full object-cover"
          />
        </div>
        <ArrowUpRight
          className={`absolute ${arrowPosition[verticalPos]} ${arrowPosition[horizontalPos]} h-12 w-12 text-[#073127] transform ${arrowRotation[arrowDirection]}`}
        />
      </div>
    </div>
  );
};

// Define an interface for floating images
interface FloatingImage {
  brand: string;
  logo: string;
  positionClass: string;
  arrowDirection: "north-east" | "south-east" | "south-west" | "north-west";
  animationDelayClass: string;
}

export const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Trigger animations on initial load
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const floatingImages: FloatingImage[] = [
    {
      brand: HERO_IMAGES[0].brand,
      logo: HERO_IMAGES[0].logo,
      positionClass: "top-5 left-5 md:top-5 md:left-5 lg:top-12 lg:left-12",
      arrowDirection: "south-east",
      animationDelayClass: "delay-500",
    },
    {
      brand: HERO_IMAGES[1].brand,
      logo: HERO_IMAGES[1].logo,
      positionClass: "top-8 right-8 md:top-8 md:right-8 lg:top-10 lg:right-12",
      arrowDirection: "south-west",
      animationDelayClass: "delay-600",
    },
    {
      brand: HERO_IMAGES[2].brand,
      logo: HERO_IMAGES[2].logo,
      positionClass:
        "bottom-6 left-6 md:bottom-6 md:left-6 lg:bottom-20 lg:left-16",
      arrowDirection: "north-east",
      animationDelayClass: "delay-700",
    },
    {
      brand: HERO_IMAGES[3].brand,
      logo: HERO_IMAGES[3].logo,
      positionClass:
        "bottom-4 right-4 md:bottom-4 md:right-4 lg:bottom-28 lg:right-32",
      arrowDirection: "north-west",
      animationDelayClass: "delay-800",
    },
  ];

  return (
    <section className="relative h-screen md:min-h-[calc(100vh-64px)] pt-16 md:pt-24 pb-8 md:pb-16 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[#EBEDE8] grid-pattern-large"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
        {/* Main Content Area */}
        <div className="relative flex-1 flex flex-col items-center justify-center md:min-h-[70vh]">
          {/* Floating Images Container - Hidden on mobile */}
          <div className="absolute inset-0 pointer-events-none hidden md:block z-10">
            {floatingImages.map((item, index) => (
              <FloatingImageWithArrow
                key={index}
                imageUrl={item.logo}
                altText={item.brand}
                positionClass={item.positionClass}
                arrowDirection={item.arrowDirection}
                animationDelayClass={item.animationDelayClass}
                isLoaded={isLoaded}
              />
            ))}
          </div>

          {/* Main Text Content */}
          <div className="text-center max-w-4xl mx-auto relative z-20">
            <h1
              className={`text-5xl md:text-7xl font-bold mb-6 text-[#073127] opacity-0 ${
                isLoaded ? "animate-fadeSlideUp" : ""
              }`}
            >
              Monitor and invest in{" "}
              <span className="relative">
                FounderFolio's
                <span className="absolute bottom-0 left-0 w-full h-2 bg-[#E2FB6C] -z-10"></span>
              </span>{" "}
              growth potential.
            </h1>
            <p
              className={`text-xl md:text-2xl text-[#333F3C] max-w-3xl mx-auto mb-12 opacity-0 ${
                isLoaded ? "animate-fadeSlideUp delay-200" : ""
              }`}
            >
              Your premier platform for real-time analytics, market insights,
              and comprehensive tracking of startup performance.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center opacity-0 ${
                isLoaded ? "animate-fadeSlideUp delay-400" : ""
              }`}
            >
              <Button
                size="lg"
                className="text-lg px-8 py-7 bg-primary text-accent hover:bg-[#003428]"
                onClick={() => {
                  document.getElementById("company-overview")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Meet the Team
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-7 hover:bg-white/90"
                onClick={() => {
                  document.getElementById("simulator")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Market Simulator
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div
          className={`mt-4 md:mt-16 pt-2 md:pt-8 opacity-0 ${
            isLoaded ? "animate-fadeSlideUp delay-600" : ""
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-xl font-bold text-[#333F3C]">
              More than 5+
              <br /> markets tracked
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {MARKET_LOCATIONS.slice(0, 5).map((prospect, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden grayscale">
                    <img
                      src={prospect.image}
                      alt={prospect.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xl font-bold text-[#333F3C]/70 hidden md:block">
                    {prospect.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
