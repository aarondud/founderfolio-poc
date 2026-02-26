import React from "react";
import { User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  title: string;
  quote: string;
  image?: string;
  useIcon?: boolean;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  title,
  quote,
  image,
  useIcon = false,
  className,
}) => {
  return (
    <div className="relative w-full">
      {/* Image positioned half in/half out of card - responsive sizing */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden flex-shrink-0 bg-primary flex items-center justify-center">
          {useIcon ? (
            <User className="w-14 h-14 md:w-16 md:h-16 text-accent" />
          ) : (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>

      <Card
        className={cn(
          "w-full h-[320px] md:h-[300px] max-w-sm md:max-w-none mx-auto bg-card transform transition-all duration-300 pt-10 md:pt-12",
          className,
        )}
      >
        <CardContent className="p-4 md:p-8 pt-6 md:pt-8 h-full flex flex-col items-center text-center justify-between">
          {/* Name and Title */}
          <div className="mb-4 md:mb-6">
            <p className="font-bold text-primary text-lg md:text-xl mb-1">
              {name}
            </p>
            <p className="text-sm md:text-lg text-muted-foreground">{title}</p>
          </div>

          {/* Quote with quotation marks */}
          <div className="flex-grow flex items-center px-2 md:px-6">
            <p className="text-base md:text-lg italic text-muted-foreground whitespace-normal break-words leading-relaxed text-center">
              "{quote}"
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
