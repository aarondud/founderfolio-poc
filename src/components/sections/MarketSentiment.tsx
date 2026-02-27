import React, { useState, useEffect } from "react";
import { MessageSquareQuote, ChevronLeft, ChevronRight, User } from "lucide-react";
import { MARKET_ANALYSIS, KEYNOTE_ANALYSIS, CONTENT } from "@/lib";
import { SECTION_IDS } from "@/lib/sections";
import { Tag } from "@/components/ui/tag";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";

export const MarketSentiment: React.FC = () => {
  const { sectionRef } = useSectionAnimation();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section
      id={SECTION_IDS.MARKET_SENTIMENT}
      ref={sectionRef}
      className="container-section slide-up"
    >
      <Tag icon={MessageSquareQuote} text="MARKET SENTIMENT" />

      {/* Keynote Quote */}
      <div className="flex flex-col items-center">
        <h1 className="text-7xl">"</h1>
        <div className="relative w-full md:w-4/5">
          <h2 className="section-title text-center text-3xl italic">
            {CONTENT.sentiment.header}
          </h2>
        </div>
        <div className="flex justify-center items-center mt-4 -space-x-4">
          <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-primary flex-shrink-0 z-10 bg-primary flex items-center justify-center">
            <User className="w-10 h-10 text-accent" />
          </div>
          <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-primary flex-shrink-0 bg-white flex items-center justify-center p-2">
            <img
              src={KEYNOTE_ANALYSIS.logo}
              alt={KEYNOTE_ANALYSIS.name}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="mt-4 flex-1 min-w-0 text-center">
          <p className="font-semibold text-primary truncate text-xl">
            {KEYNOTE_ANALYSIS.name}
          </p>
          <p className="text-md text-muted-foreground">
            {KEYNOTE_ANALYSIS.title}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 xl:gap-6 overflow-visible">
            <Button
              variant="outline"
              size="icon"
              className="hidden xl:flex h-12 w-12 bg-header hover:bg-header/90 border-header text-white hover:text-white shrink-0"
              onClick={() => api?.scrollPrev()}
              disabled={!api?.canScrollPrev()}
            >
              <ChevronLeft className="h-6 w-6 text-accent" />
            </Button>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              setApi={setApi}
              className="flex-1 min-w-0"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {MARKET_ANALYSIS.map((analysis, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 basis-full md:basis-1/2 pt-16 md:pt-20"
                  >
                    <TestimonialCard
                      name={analysis.name}
                      title={analysis.title}
                      quote={analysis.quote}
                      useIcon={true}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <Button
              variant="outline"
              size="icon"
              className="hidden xl:flex h-12 w-12 bg-header hover:bg-header/90 border-header text-white hover:text-white shrink-0"
              onClick={() => api?.scrollNext()}
              disabled={!api?.canScrollNext()}
            >
              <ChevronRight className="h-6 w-6 text-accent" />
            </Button>
        </div>

        {/* Mobile navigation dots */}
        <div className="flex justify-center space-x-2 mt-8 xl:hidden">
          {MARKET_ANALYSIS.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === current ? "bg-primary" : "bg-primary/30"
              }`}
            />
          ))}
        </div>
    </section>
  );
};
