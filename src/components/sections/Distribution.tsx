import React, { useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { CONTENT, HEATMAP_DATA, HEATMAP_COLORS } from "@/lib";
import { SECTION_IDS } from "@/lib/sections";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";
import { ChartTooltip } from "@/components/ui/chart-tooltip";
import { Tag } from "../ui/tag";
import { Card } from "../ui/card";
import { Treemap, ResponsiveContainer, Tooltip } from "recharts";

interface TooltipProps {
  active?: boolean;
  payload?: Array<{ payload: { name: string; deployed: string; companies: number; notes: string; lead: string | null } }>;
}

interface CustomizedContentProps {
  depth?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  ticker?: string;
  color?: string;
  notes?: string;
}

// Custom tooltip component
const CustomTooltip = ({ active, payload }: TooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <ChartTooltip className="max-w-[200px]">
        <p className="font-semibold text-white text-lg mb-2 border-b border-white/20 pb-2">
          {data.name}
        </p>
        <div className="space-y-1 text-sm">
          <div className="flex justify-between gap-4">
            <span className="text-white/60">Deployed</span>
            <span className="text-[#E2FB6C] font-medium">{data.deployed}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-white/60">Companies</span>
            <span className="text-white font-medium">{data.companies}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-white/60">Status</span>
            <span className="text-white font-medium">{data.notes}</span>
          </div>
          {data.lead && (
            <div className="flex justify-between gap-4">
              <span className="text-white/60">Lead</span>
              <span className="text-white font-medium">{data.lead}</span>
            </div>
          )}
        </div>
      </ChartTooltip>
    );
  }
  return null;
};

// Helper to get color from HEATMAP_COLORS
const getHeatmapColor = (colorKey?: string) => {
  if (!colorKey) return "#004838";
  const found = HEATMAP_COLORS.find((c) => c.key === colorKey);
  return found ? found.color : "#004838";
};

// Custom treemap content
const CustomizedContent = (props: CustomizedContentProps) => {
  const { depth = 0, x = 0, y = 0, width = 0, height = 0, ticker, color } = props;

  const fillColor = getHeatmapColor(color);

  // Dynamic font sizes and spacing
  const base = Math.min(width, height);
  const tickerFontSize = Math.max(Math.min(Math.floor(base * 0.28), 48), 12);

  return (
    <g>
      {/* Background rectangle for the entire treemap area */}
      {depth === 0 && (
        <rect x={x} y={y} width={width} height={height} fill="#EBEDE8" />
      )}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={8}
        ry={8}
        style={{
          fill: fillColor,
          stroke: "#EBEDE8",
          strokeWidth: 2 / (depth + 1e-10),
          strokeOpacity: 1 / (depth + 1e-10),
        }}
      />
      {depth === 1 ? (
        <text
          x={x + width / 2}
          y={y + height / 2}
          textAnchor="middle"
          fill="#EBEDE8"
          fontSize={tickerFontSize}
          fontWeight="bold"
          alignmentBaseline="middle"
          style={{ dominantBaseline: "middle" }}
        >
          {ticker}
        </text>
      ) : null}
    </g>
  );
};

const TreemapAndText: React.FC<{ isInView: boolean }> = ({ isInView }) => {
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
    }
  }, [isInView]);

  const shouldAnimate = isInView && !hasAnimated.current;

  return (
    <div className="flex flex-col md:flex-row gap-0 md:gap-12 items-center md:items-stretch">
      {/* Treemap Column */}
      <div className="w-full md:flex-1 flex flex-col justify-center items-center">
        <div className="w-full max-w-xs md:max-w-lg aspect-square bg-card text-card-foreground rounded-lg mx-auto">
          <ResponsiveContainer width="100%" height="100%">
            <Treemap
              data={HEATMAP_DATA}
            dataKey="size"
            aspectRatio={1}
            stroke="#EBEDE8"
            fill="#004838"
            content={<CustomizedContent />}
            isAnimationActive={shouldAnimate}
          >
            <Tooltip
              content={<CustomTooltip />}
              isAnimationActive={false}
            />
          </Treemap>
        </ResponsiveContainer>
      </div>
      {/* Color Legend always under treemap */}
      <div className="flex justify-center gap-6 text-sm flex-wrap mb-4 mt-6">
        {HEATMAP_COLORS.map(({ label, color, key }) => (
          <div className="flex items-center gap-2" key={key}>
            <div
              className="w-3 h-3 rounded"
              style={{ background: color }}
            ></div>
            <span className="text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>
    </div>
    {/* Stats Column */}
    <div className="w-full md:flex-1 flex flex-col justify-center items-center mt-6 md:mt-0">
      <div className="text-center mb-12 max-w-xl mx-auto">
        <p className="text-lg leading-relaxed">
          We track 11 markets globally, from established tech hubs to emerging startup ecosystems. Our distributed approach gives us early access to opportunities across regions.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        <div className="bg-primary rounded-lg p-4 text-center">
          <p className="text-3xl font-bold text-white">11</p>
          <p className="text-sm text-white mt-1">Markets Covered</p>
        </div>
        <div className="bg-primary rounded-lg p-4 text-center">
          <p className="text-3xl font-bold text-white">19</p>
          <p className="text-sm text-white mt-1">Portfolio Companies</p>
        </div>
        <div className="bg-primary rounded-lg p-4 text-center">
          <p className="text-3xl font-bold text-white">$48M</p>
          <p className="text-sm text-white mt-1">Capital Deployed</p>
        </div>
        <div className="bg-primary rounded-lg p-4 text-center">
          <p className="text-3xl font-bold text-white">5</p>
          <p className="text-sm text-white mt-1">Team Markets</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export const Distribution: React.FC = () => {
  const { sectionRef, isInView } = useSectionAnimation();

  return (
    <section
      id={SECTION_IDS.DISTRIBUTION}
      ref={sectionRef}
      className="container-section slide-up"
    >
      {/* Section Tag */}
      <Tag icon={Globe} text={CONTENT.distribution.tag} />
      <h2 className="section-title">{CONTENT.distribution.header}</h2>
      <p className="text-xl mb-8 text-muted-foreground max-w-5xl mx-auto">
        {CONTENT.distribution.sub}
      </p>
      <Card className="bg-card p-4 md:p-8 max-w-6xl mx-auto my-8">
        <TreemapAndText isInView={isInView} />
      </Card>
    </section>
  );
};
