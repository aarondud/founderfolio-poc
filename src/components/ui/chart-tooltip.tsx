import React from "react";

interface ChartTooltipProps {
  children: React.ReactNode;
  className?: string;
}

export const ChartTooltip: React.FC<ChartTooltipProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div className={`bg-header p-4 rounded-lg shadow-lg border ${className}`}>
      {children}
    </div>
  );
};
