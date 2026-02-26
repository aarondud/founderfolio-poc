import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";

export const DemoPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 pb-16">
      <div
        className={`text-center mb-12 opacity-0 ${isLoaded ? "animate-fadeSlideUp" : ""}`}
      >
        <Tag icon={Info} text="DEMO PAGE" />
      </div>

      <div
        className={`bg-card rounded-xl shadow-lg p-8 md:p-12 opacity-0 ${isLoaded ? "animate-fadeSlideUp delay-200" : ""}`}
      >
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-6">
            <Info className="w-10 h-10 text-accent" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-header mb-4">
            Proof of Concept
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            This page serves as a temporary routing hub for external links,
            documents, and resources related to the FounderFolio platform. This
            is currently a{" "}
            <span className="font-semibold">
              proof-of-concept demonstration
            </span>{" "}
            showcasing a fictional startup seeking Series A investment. All data
            shown is <span className="font-semibold">fictional</span> and for
            demonstration purposes only.
          </p>

          <Button
            onClick={() => navigate("/")}
            className="bg-primary text-accent hover:bg-[#003428] px-8 py-6 text-lg"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
