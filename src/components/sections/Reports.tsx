import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SECTION_IDS } from "@/lib/sections";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";
import { ExternalLink } from "lucide-react";

export const Reports: React.FC = () => {
  const { sectionRef } = useSectionAnimation();
  const navigate = useNavigate();

  return (
    <section id={SECTION_IDS.REPORTS} ref={sectionRef}>
      <div className="bg-primary text-white p-8 pt-12 pb-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-left text-white">
          Discover the full scale
          <br /> of{" "}
          <span className="underline decoration-accent decoration-4 font-bold">
            FounderFolio's
          </span>{" "}
          potential.
        </h2>
        <div className="flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              className="text-lg px-8 py-7 bg-white text-primary border-none hover:bg-white/90 transition-colors duration-200 flex items-center gap-2 whitespace-nowrap"
              onClick={() => navigate("/demo")}
            >
              Pitch Deck
              <ExternalLink className="w-5 h-5" />
            </Button>
          <Button
            size="lg"
            className="text-lg px-8 py-7 bg-accent text-primary border-none hover:bg-accent/90 transition-colors duration-200 flex items-center gap-2 whitespace-nowrap"
            onClick={() => navigate("/demo")}
          >
            Investor Deck
            <ExternalLink className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
