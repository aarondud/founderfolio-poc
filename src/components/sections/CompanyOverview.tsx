import React from "react";
import { BriefcaseBusiness } from "lucide-react";
import {
  CONTENT,
  CAROUSEL_IMAGES_ROW1,
  CAROUSEL_IMAGES_ROW2,
  CAROUSEL_IMAGES_ROW3,
  FOUNDER_FOLIO_LOGO,
} from "@/lib";
import { SECTION_IDS } from "@/lib/sections";
import { Tag } from "@/components/ui/tag";
import { Card, CardContent } from "@/components/ui/card";
import { ContinuousScroll } from "../ui/continuous-scroll";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";

export const CompanyOverview: React.FC = () => {
  const { sectionRef } = useSectionAnimation();

  return (
    <section
      id={SECTION_IDS.COMPANY_OVERVIEW}
      className="relative overflow-hidden text-white container-section slide-up"
      ref={sectionRef}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-header">
        <Tag icon={BriefcaseBusiness} text={CONTENT.overview.tag} />
        <div className="text-center mb-12 ">
          <h2 className="text-3xl md:text-4xl font-semibold text-header mb-6">
            {CONTENT.overview.header}
          </h2>
          <p className="text-xl max-w-5xl mx-auto">{CONTENT.overview.sub}</p>
          <div
            className="text-xl max-w-4xl md:max-w-xl mx-auto py-6 underline cursor-pointer hover:text-primary transition-colors duration-200"
            onClick={() => {
              document.getElementById("executives")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            {CONTENT.overview.body.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>

        <div className="relative w-full h-full">
          <div className="space-y-4">
            {[
              {
                direction: "left" as const,
                speed: 21,
                images: CAROUSEL_IMAGES_ROW1,
              },
              {
                direction: "right" as const,
                speed: 21,
                images: CAROUSEL_IMAGES_ROW2,
              },
              {
                direction: "left" as const,
                speed: 17,
                images: CAROUSEL_IMAGES_ROW3,
              },
            ].map(({ direction, speed, images }, rowIndex) => (
              <div key={rowIndex} className="relative">
                <div className="absolute inset-y-0 left-0 w-2 sm:w-2 md:w-2 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-2 sm:w-2 md:w-2 bg-gradient-to-l from-background to-transparent z-10" />
                <ContinuousScroll direction={direction} speed={speed}>
                  <div className="flex items-center">
                    {images.map((image, index) => (
                      <Card
                        key={`row${rowIndex}-${index}`}
                        className="w-[100px] sm:w-[100px] md:w-[125px] aspect-square bg-transparent rounded-xl overflow-hidden shadow-none mx-2"
                      >
                        <CardContent className="p-0 h-full w-full">
                          <img
                            src={image}
                            alt={`carousel-${index}`}
                            className="w-full h-full object-cover"
                            draggable={false}
                          />
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </ContinuousScroll>
              </div>
            ))}
          </div>

          {/* Radial gradient fade border */}
          <div
            className=" inset-0 rounded-full pointer-events-none
               absolute z-20
      left-1/2 top-1/2
      -translate-x-1/2 -translate-y-1/2
      flex items-center justify-center
      md:h-[50%] md:w-[50%] 
      h-[50%] w-[50%]
      max-w-xs max-h-xs
      md:max-w-md md:max-h-md
      overflow-hidden
      "
            style={{
              background: `
        radial-gradient(
          circle,
          rgba(245, 247, 247, 0) 5%,
          rgba(248, 249, 249, 0.15) 1%,
          rgba(243, 246, 246, 0.8) 1%
        )
      `,
              filter: "blur(48px)",
              zIndex: 1,
            }}
          />
          <div
            className="
      absolute z-20
      left-1/2 top-1/2
      -translate-x-1/2 -translate-y-1/2
      flex items-center justify-center
      md:h-[45%] md:w-[45%] 
      h-[45%] w-[45%]
      max-w-xs max-h-xs
      md:max-w-md md:max-h-md
      overflow-hidden
      pointer-events-none
    "
            //
            style={{ aspectRatio: 1 }}
          >
            <img
              src={FOUNDER_FOLIO_LOGO}
              alt="FounderFolio Icon"
              className="h-full rounded-full z-20"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
