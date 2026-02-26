import React from "react";
import { LucideIcon } from "lucide-react";

interface TagProps {
  icon: LucideIcon;
  text: string;
  variant?: "default" | "white";
}

export const Tag: React.FC<TagProps> = ({
  icon: Icon,
  text,
  variant = "default",
}) => {
  const getTagClasses = () => {
    const baseClasses =
      "inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-colors duration-300";
    const variantClasses =
      variant === "white"
        ? "bg-none border-white text-white stroke-white"
        : "bg-none border-[#004838] text-primary stroke-[3px]";

    return `${baseClasses} ${variantClasses}`;
  };

  return (
    <div className="flex justify-center mb-8">
      <div className={getTagClasses()}>
        <Icon className="h-4 w-4" />
        <span className="text-sm font-bold uppercase tracking-wider">
          {text}
        </span>
      </div>
    </div>
  );
};
