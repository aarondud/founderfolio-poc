// components/ui/profile-card.tsx
import React from "react";
import { User } from "lucide-react";
import { cn } from "@/lib/cn";

interface ProfileCardProps {
  name: string;
  title?: string;
  quote: string;
  image?: string;
  useIcon?: boolean;
  imagePosition?: "left" | "right";
  className?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  quote,
  image,
  useIcon = false,
  imagePosition = "left",
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col bg-card rounded-xl shadow-md p-5",
        "w-full",
        className,
      )}
    >
      {/* Top Section - Image + Name */}
      <div
        className={`flex ${
          imagePosition === "right" ? "flex-row-reverse" : ""
        } mb-4`}
      >
        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-primary flex items-center justify-center">
          {useIcon ? (
            <User className="w-10 h-10 text-accent" />
          ) : (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
              draggable={false}
            />
          )}
        </div>
        <div
          className={cn(
            "flex-1",
            imagePosition === "left" ? "ml-4" : "mr-4",
            "flex flex-col justify-center",
          )}
        >
          <h4 className="text-lg font-semibold text-center">{name}</h4>
          {title && <p className="text-sm text-primary text-center">{title}</p>}
        </div>
      </div>

      {/* Bottom Section - Quote */}
      <p className="text-left italic text-muted-foreground whitespace-normal text-center">
        {quote}
      </p>
    </div>
  );
};
