import React, { useRef, useState } from "react";
import { CONTENT } from "@/lib";
import { SECTION_IDS } from "@/lib/sections";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Tag } from "@/components/ui/tag";
import WorldMap from "@/components/world-map/WorldMap";
import { CircleDollarSign } from "lucide-react";

type Position = { mapX: number; mapY: number };

export const Portfolio: React.FC = () => {
  const { sectionRef, isInView } = useSectionAnimation();
  const isMobile = useMediaQuery("(max-width: 767px)");

  const [tooltipContent, setTooltipContent] = useState<React.ReactNode | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<Position | null>(null);
  const [activeMarker, setActiveMarker] = useState<string | null>(null);
  const mapRef = useRef<{
    handleMarkerInteraction: (markerName: string) => void;
  }>(null);

  return (
    <section
      id={SECTION_IDS.PORTFOLIO}
      ref={sectionRef}
      className="container-section slide-up"
    >
      <Tag icon={CircleDollarSign} text={CONTENT.portfolio.tag} />
      <h2 className="section-title">{CONTENT.portfolio.header}</h2>
      <p className="text-lg mb-4 max-w-6xl mx-auto">{CONTENT.portfolio.sub}</p>

      <div className="relative mb-12 w-full mx-auto">
        <div className="w-full">
          <WorldMap
            ref={mapRef}
            tooltipContent={tooltipContent}
            tooltipPosition={tooltipPosition}
            setTooltipContent={setTooltipContent}
            setTooltipPosition={setTooltipPosition}
            isMobile={isMobile}
            isInView={isInView}
            activeMarker={activeMarker}
            setActiveMarker={setActiveMarker}
          />
        </div>
      </div>

      <p className="text-lg mb-4 max-w-6xl mx-auto">{CONTENT.portfolio.body}</p>
    </section>
  );
};
