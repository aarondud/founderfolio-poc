import React, {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
  useRef,
} from "react";
import {
  X,
  TrendingUp,
  Flame,
  Star,
  Zap,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { MARKET_LOCATIONS } from "@/lib";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Graticule,
} from "react-simple-maps";
import { geoEqualEarth } from "d3-geo";

type Position = { mapX: number; mapY: number };

interface WorldMapProps {
  tooltipContent: React.ReactNode | null;
  setTooltipContent: (content: React.ReactNode | null) => void;
  tooltipPosition: Position | null;
  setTooltipPosition: (position: Position | null) => void;
  onMarkerInteraction?: (markerName: string) => void;
  isMobile: boolean;
  isInView: boolean;
  activeMarker: string | null;
  setActiveMarker: (marker: string | null) => void;
}

const WorldMap = forwardRef<
  { handleMarkerInteraction: (markerName: string) => void },
  WorldMapProps
>(function WorldMap(
  {
    tooltipContent,
    setTooltipContent,
    tooltipPosition,
    setTooltipPosition,
    onMarkerInteraction,
    isMobile,
    isInView,
    setActiveMarker,
  }: WorldMapProps,
  ref,
) {
  // Add ref and state for map container
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [mapDimensions, setMapDimensions] = useState({ width: 0, height: 0 });
  const [isTooltipHovered, setIsTooltipHovered] = useState(false);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [pinsAnimated, setPinsAnimated] = useState(false);

  // Trigger pin animations when section comes into view
  useEffect(() => {
    if (isInView && !pinsAnimated) {
      const timer = setTimeout(() => {
        setPinsAnimated(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isInView, pinsAnimated]);

  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (mapContainerRef.current) {
        setMapDimensions({
          width: mapContainerRef.current.clientWidth,
          height: mapContainerRef.current.clientHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Store country opacities in ref (mutable, but persists across renders)
  const countryOpacitiesRef = useRef<{ [key: string]: number }>({});
  const getOpacity = (rsmKey: string) => {
    if (!countryOpacitiesRef.current[rsmKey]) {
      countryOpacitiesRef.current[rsmKey] = 0.1 + Math.random() * 0.7;
    }
    return countryOpacitiesRef.current[rsmKey];
  };

  const handleMarkerInteraction = (markerName: string) => {
    const marker = MARKET_LOCATIONS.find((m) => m.name === markerName);

    if (!marker || !mapContainerRef.current) return;

    // Clear any pending hide timeout and reset hover state
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    setIsTooltipHovered(false);
    setActiveMarker(markerName);
    onMarkerInteraction?.(markerName);

    // Set tooltip content
    setTooltipContent(
      <div className="w-64 space-y-4 p-3 bg-card rounded-lg shadow-md relative shadow-black/40">
        <div className="flex items-center justify-between mb-2">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src={marker.image}
              alt={marker.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-header font-semibold text-lg flex-grow text-center">
            {marker.displayName || marker.name}
          </h3>
          {isMobile && (
            <button
              className="p-1 stroke-header text-header hover:text-primary transition-colors"
              style={{ background: "none", border: "none" }}
              onClick={() => {
                setTooltipContent(null);
                setTooltipPosition(null);
                setActiveMarker(null);
              }}
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        <p className="text-[#333F3C] italic text-sm mb-2">{marker.quote}</p>
        <div className="flex justify-between items-center">
          <span
            className={`font-bold ${
              marker.priority === "High Priority"
                ? "text-primary"
                : marker.priority === "Medium Priority"
                  ? "text-priority-medium"
                  : marker.priority === "Low Priority"
                    ? "text-priority-low"
                    : marker.priority === "Headquarters"
                      ? "text-primary"
                      : "text-header"
            }`}
          >
            {marker.priority}
          </span>
          <div className="flex items-center gap-2">
            {marker.sentiment === "Hot Market" && (
              <Flame className="w-4 h-4 fill-market-hot text-market-hot" />
            )}
            {marker.sentiment === "Emerging" && (
              <Zap className="w-4 h-4 fill-primary text-primary" />
            )}
            {marker.sentiment === "Growing" && (
              <TrendingUp className="w-4 h-4 fill-market-growing text-market-growing" />
            )}
            {marker.sentiment === "Strong" && (
              <Star className="w-4 h-4 fill-[#8B5CF6] text-[#8B5CF6]" />
            )}
            {marker.sentiment === "Headquarters" && (
              <Star className="w-4 h-4 fill-primary text-primary" />
            )}
            {marker.sentiment === "Established" && (
              <ShieldCheck className="w-4 h-4 text-teal-700" />
            )}
            {marker.sentiment === "Expansion" && (
              <ArrowUpRight className="w-4 h-4 fill-blue-500 text-blue-500" />
            )}
            <span
              className={`font-bold text-sm ${
                marker.sentiment === "Hot Market"
                  ? "text-market-hot"
                  : marker.sentiment === "Emerging"
                    ? "text-primary"
                    : marker.sentiment === "Growing"
                      ? "text-market-growing"
                      : marker.sentiment === "Strong"
                        ? "text-violet-500"
                        : marker.sentiment === "Established"
                          ? "text-teal-700"
                          : marker.sentiment === "Headquarters"
                            ? "text-primary"
                            : "text-[#3B82F6]"
              }`}
            >
              {marker.sentiment}
            </span>
          </div>
        </div>
      </div>,
    );

    // Set tooltip position using new approach
    if (isMobile) {
      // Center in map for mobile
      setTooltipPosition({
        mapX: mapDimensions.width / 2,
        mapY: mapDimensions.height / 2,
      });
    } else {
      // Create a projection with the same configuration as the map
      const projection = geoEqualEarth()
        .scale(200)
        .center([0, 0])
        .translate([mapDimensions.width / 2, mapDimensions.height / 2]);

      // Project the marker coordinates
      const [x, y] = projection([
        marker.markerPosition.x,
        marker.markerPosition.y,
      ]) || [0, 0];

      // Apply the tooltip offset
      const offsetX = marker.tooltipOffset?.x || 0;
      const offsetY = marker.tooltipOffset?.y || 0;

      // Calculate final position
      const finalX = x + offsetX;
      const finalY = y + offsetY;

      // Ensure the tooltip stays within the map container bounds
      const tooltipWidth = 256; // w-64 = 16rem = 256px
      const tooltipHeight = 200; // Approximate height

      const boundedX = Math.min(
        Math.max(finalX, tooltipWidth / 2),
        mapDimensions.width - tooltipWidth / 2,
      );
      const boundedY = Math.min(
        Math.max(finalY, tooltipHeight / 2),
        mapDimensions.height - tooltipHeight / 2,
      );

      setTooltipPosition({
        mapX: boundedX,
        mapY: boundedY,
      });
    }
  };

  const handleMouseLeave = () => {
    if (isMobile) return;

    // Add small delay to allow tooltip's onMouseEnter to fire
    hideTimeoutRef.current = setTimeout(() => {
      if (!isTooltipHovered) {
        setTooltipContent(null);
        setTooltipPosition(null);
        setActiveMarker(null);
      }
    }, 100);
  };

  useImperativeHandle(ref, () => ({
    handleMarkerInteraction,
  }));

  return (
    <div
      ref={mapContainerRef}
      className="w-full h-auto relative world-map-container"
      style={{ aspectRatio: "16/9" }}
    >
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{
          scale: 200,
          center: [0, 0],
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Graticule stroke="#EBEDE8" strokeWidth={0.5} opacity={1} />
        <Geographies geography="/world-110m.json">
          {({ geographies }) =>
            geographies.map((geo) => {
              if (!getOpacity(geo.rsmKey)) {
                getOpacity(geo.rsmKey);
              }
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#004838"
                  stroke="card"
                  strokeWidth={0.5}
                  style={{
                    default: {
                      fill: "primary",
                      stroke: "card",
                      strokeWidth: 0.5,
                      outline: "none",
                      opacity: getOpacity(geo.rsmKey),
                    },
                    hover: {
                      fill: "primary",
                      stroke: "card",
                      strokeWidth: 0.5,
                      outline: "none",
                      opacity: 0.8,
                    },
                    pressed: {
                      fill: "primary",
                      stroke: "card",
                      strokeWidth: 0.5,
                      outline: "none",
                      opacity: getOpacity(geo.rsmKey),
                    },
                  }}
                  onClick={(e) => e.stopPropagation()}
                />
              );
            })
          }
        </Geographies>
        {MARKET_LOCATIONS.map((marker, index) => {
          const pinSize = isMobile ? 40 : 30;
          const pinDimension = pinSize * 2;
          const clipRadius = pinSize - 4;
          const delay = pinsAnimated ? index * 100 : 0;
          return (
            <Marker
              key={marker.name}
              coordinates={[marker.markerPosition.x, marker.markerPosition.y]}
              onMouseEnter={() => handleMarkerInteraction(marker.name)}
              onMouseLeave={handleMouseLeave}
              onTouchStart={() => handleMarkerInteraction(marker.name)}
            >
              <g
                transform={`translate(-${pinSize}, -${pinSize})`}
                style={{
                  cursor: "pointer",
                  opacity: pinsAnimated ? 1 : 0,
                  transform: `translate(-${pinSize}px, -${pinSize}px) scale(${pinsAnimated ? 1 : 0}) translateZ(0)`,
                  transformOrigin: `${pinSize}px ${pinSize}px`,
                  transition: `opacity 0.3s ease-out ${delay}ms, transform 0.3s ease-out ${delay}ms`,
                }}
              >
                <circle
                  cx={String(pinSize)}
                  cy={String(pinSize)}
                  r={String(pinSize)}
                  fill="white"
                  stroke="primary"
                  strokeWidth="2"
                />
                {"image" in marker && (
                  <image
                    href={marker.image}
                    x="0"
                    y="0"
                    width={String(pinDimension)}
                    height={String(pinDimension)}
                    preserveAspectRatio="xMidYMid slice"
                    clipPath={`circle(${clipRadius}px at ${pinSize}px ${pinSize}px)`}
                  />
                )}
              </g>
            </Marker>
          );
        })}
      </ComposableMap>

      {/* Render tooltip directly in the map container */}
      {tooltipContent && tooltipPosition && (
        <div
          onMouseEnter={() => {
            if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
            setIsTooltipHovered(true);
          }}
          onMouseLeave={() => {
            setIsTooltipHovered(false);
            if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
            setTooltipContent(null);
            setTooltipPosition(null);
            setActiveMarker(null);
          }}
          className="absolute z-50"
          style={{
            left: `${tooltipPosition.mapX}px`,
            top: `${tooltipPosition.mapY}px`,
            transform: "translate(-50%, -50%)",
            maxWidth: "min(280px, 90%)",
          }}
        >
          {tooltipContent}
        </div>
      )}
    </div>
  );
});

export default WorldMap;
