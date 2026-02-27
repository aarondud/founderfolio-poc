import React, { useRef, useEffect, useState } from "react";
import { Position } from "./types";
import { FOUNDER_FOLIO_LOGO } from "@/lib";

interface GameCanvasProps {
  snake: Position[];
  fruit: Position;
  fruitType: string;
  fruitImage: string;
  cellSize: number;
  gridSize: number;
  gridHeight: number;
}

// Invert the FounderFolio logo colors only for the SnakeGame snake head:
// original: background #004838, text #E2FB6C
// inverted: background #E2FB6C, text #004838
const INVERTED_FOUNDER_FOLIO_LOGO = FOUNDER_FOLIO_LOGO.replace(
  "/004838/E2FB6C",
  "/E2FB6C/004838",
);

export const GameCanvas: React.FC<GameCanvasProps> = ({
  snake,
  fruit,
  fruitType,
  fruitImage,
  cellSize,
  gridSize,
  gridHeight,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasWidth = cellSize * gridSize;
  const canvasHeight = cellSize * gridHeight;

  const [snakeHeadImage, setSnakeHeadImage] = useState<HTMLImageElement | null>(
    null,
  );

  // Load snake head image
  useEffect(() => {
    const img = new Image();
    img.src = INVERTED_FOUNDER_FOLIO_LOGO;
    img.onload = () => setSnakeHeadImage(img);
    img.onerror = () =>
      console.error(
        "Failed to load snake head image:",
        INVERTED_FOUNDER_FOLIO_LOGO,
      );
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // Draw background with gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, canvasHeight);
    gradient.addColorStop(0, "#004838");
    gradient.addColorStop(1, "#003628");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Draw checkerboard pattern
    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridHeight; y++) {
        if ((x + y) % 2 === 0) {
          ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
          ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
        }
      }
    }

    // Draw grid lines (less prominent)
    ctx.strokeStyle = "rgba(235, 237, 232, 0.3)"; // #EBEDE8 with reduced opacity
    ctx.lineWidth = 1;

    for (let i = 0; i <= gridSize; i++) {
      ctx.beginPath();
      ctx.moveTo(i * cellSize, 0);
      ctx.lineTo(i * cellSize, canvasHeight);
      ctx.stroke();
    }

    for (let i = 0; i <= gridHeight; i++) {
      ctx.beginPath();
      ctx.moveTo(0, i * cellSize);
      ctx.lineTo(canvasWidth, i * cellSize);
      ctx.stroke();
    }

    // Draw snake
    snake.forEach((segment, index) => {
      const x = segment.x * cellSize;
      const y = segment.y * cellSize;

      if (index === 0) {
        ctx.save();
        ctx.beginPath();
        ctx.roundRect(x + 2, y + 2, cellSize - 4, cellSize - 4, 8);
        ctx.clip();
        if (snakeHeadImage) {
          ctx.drawImage(snakeHeadImage, x, y, cellSize, cellSize);
        } else {
          // Snake head with gradient
          const headGradient = ctx.createLinearGradient(
            x,
            y,
            x + cellSize,
            y + cellSize,
          );
          headGradient.addColorStop(0, "#E2FB6C");
          headGradient.addColorStop(1, "#C8E05A");
          ctx.fillStyle = headGradient;
          ctx.fill();
          ctx.fillStyle = "white";
          const eyeSize = cellSize / 5;
          ctx.fillRect(
            x + cellSize / 4 - eyeSize / 2,
            y + cellSize / 3,
            eyeSize,
            eyeSize,
          );
          ctx.fillRect(
            x + (3 * cellSize) / 4 - eyeSize / 2,
            y + cellSize / 3,
            eyeSize,
            eyeSize,
          );
        }
        ctx.restore();
      } else {
        // Snake body with gradient
        const bodyGradient = ctx.createLinearGradient(x, y, x, y + cellSize);
        bodyGradient.addColorStop(0, "#BEFC58");
        bodyGradient.addColorStop(1, "#9AD73F");
        ctx.fillStyle = bodyGradient;
        ctx.beginPath();
        ctx.roundRect(x + 2, y + 2, cellSize - 4, cellSize - 4, 8);
        ctx.fill();
      }
    });

    // Reset canvas state before drawing fruit
    ctx.globalAlpha = 1;
    ctx.shadowColor = "transparent";
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

    // Draw fruit
    const fruitX = fruit.x * cellSize;
    const fruitY = fruit.y * cellSize;
    const centerX = fruitX + cellSize / 2;
    const centerY = fruitY + cellSize / 2;

    if (fruitImage) {
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#FFFFFF";
      ctx.font = `${Math.floor(cellSize * 0.7)}px sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(fruitImage, centerX, centerY);
    }
  }, [
    snake,
    fruit,
    fruitType,
    fruitImage,
    cellSize,
    gridSize,
    gridHeight,
    canvasWidth,
    canvasHeight,
    snakeHeadImage,
  ]);

  return (
    <canvas
      ref={canvasRef}
      width={canvasWidth}
      height={canvasHeight}
      className="border border-border rounded-lg w-full h-full"
    />
  );
};
