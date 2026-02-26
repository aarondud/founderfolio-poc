import React from "react";
import { ChartBar } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
} from "recharts";
import { CHART_DATA, CONTENT, MONTH_NAMES } from "@/lib";
import { SECTION_IDS } from "@/lib/sections";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";
import { ChartTooltip } from "@/components/ui/chart-tooltip";
import { Tag } from "../ui/tag";
import { CardContent } from "../ui/card";
import { Card } from "../ui/card";

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    dataKey: string;
  }>;
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    const dataPoint = CHART_DATA.find((item) => item.month === label);

    return (
      <ChartTooltip className="max-w-xs">
        <p className="font-semibold">
          {MONTH_NAMES[label as keyof typeof MONTH_NAMES] || label}
        </p>
        {dataPoint?.highlight && dataPoint.highlight.length > 0 && (
          <div className="mt-2">
            {dataPoint.highlight.map((highlight, index) => (
              <p key={index} className="text-sm text-[#E2FB6C] font-medium">
                {highlight}
              </p>
            ))}
          </div>
        )}
        {dataPoint?.note && (
          <p className="text-sm italic mt-2 text-white/80">{dataPoint.note}</p>
        )}
      </ChartTooltip>
    );
  }

  return null;
};

export const Analysis: React.FC = () => {
  const { sectionRef, isInView } = useSectionAnimation();

  return (
    <section
      id={SECTION_IDS.ANALYSIS}
      ref={sectionRef}
      className="relative overflow-hidden text-white container-section slide-up"
    >
      <div className="absolute inset-0 bg-primary">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at center, rgba(0, 72, 56, 0) 0%, #004838 90%),
              linear-gradient(to right, #E2FB6C 1px, transparent 1px),
              linear-gradient(to bottom, #E2FB6C 1px, transparent 1px)
            `,
            backgroundSize: "auto, 80px 80px, 80px 80px",
            opacity: 0.1,
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Tag icon={ChartBar} text="Analysis" variant="white" />

        <div className="mb-0 p-0">
          <h2 className="section-title text-white">
            {CONTENT.analysis.header}
          </h2>
          <p className="text-xl mb-4 text-white max-w-4xl mx-auto">
            {CONTENT.analysis.sub}
          </p>
        </div>

        {/* Chart and Callout Container */}
        <div className="w-full mx-auto">
          {/* Line Chart */}
          <div className="w-full min-w-0">
            <div className="transition-opacity duration-1000">
              <ResponsiveContainer width="100%" height={400}>
                <LineChart
                  data={CHART_DATA}
                  margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                >
                  <XAxis
                    dataKey="month"
                    tick={{ fill: "#FFFFFF" }}
                    stroke="#E2FB6C"
                    strokeWidth={2}
                    scale="point"
                    padding={{ left: 10, right: 10 }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#E2FB6C"
                    strokeWidth={3}
                    dot={false}
                    activeDot={{
                      r: 8,
                      fill: "#E2FB6C",
                      stroke: "#E2FB6C",
                      strokeWidth: 2,
                    }}
                    animationDuration={2000}
                    isAnimationActive={isInView}
                  />
                  {CHART_DATA.filter(
                    (data) => data.highlight && data.highlight.length > 0,
                  ).map((data, index) => (
                    <ReferenceDot
                      key={index}
                      x={data.month}
                      y={data.value}
                      r={6}
                      fill="#E2FB6C"
                      stroke="#primary"
                      strokeWidth={2}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Callout Card */}
          <div className="mt-12 max-w-xs md:max-w-5xl mx-auto">
            <Card className="bg-accent/10 border border-accent/20 backdrop-blur-sm">
              <CardContent className="p-4 md:p-8 text-center text-lg md:text-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                  <div className="text-center">
                    <h4 className="text-4xl md:text-6xl font-medium text-white mb-2">
                      312
                    </h4>
                    <p className="text-white text-md md:text-lg">
                      Active deals in pipeline
                    </p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-4xl md:text-6xl font-medium mb-2 text-white">
                      24
                    </h4>
                    <p className="text-white text-md md:text-lg">
                      Investments this year
                    </p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-4xl md:text-6xl font-medium mb-2 text-white">
                      $48M
                    </h4>
                    <p className="text-white text-md md:text-lg">
                      Capital deployed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
