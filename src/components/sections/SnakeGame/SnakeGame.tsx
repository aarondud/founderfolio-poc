import React, { useRef, useState, useEffect, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Gamepad2 } from "lucide-react";
import { GameCanvas } from "./GameCanvas";
import { GameControls } from "./GameControls";
import { GameOverScreen } from "./GameOverScreen";
import { GameState, Position } from "./types";
import { COMBINED_FRUITS, CONTENT } from "@/lib";
import { SECTION_IDS } from "@/lib/sections";
import { Tag } from "@/components/ui/tag";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const INITIAL_SPEED = 150;

// Card dimensions (fixed for mobile and desktop)
const CARD_WIDTH = 768; // max-w-3xl (48rem at 16px/rem)
const CARD_HEIGHT_DESKTOP = 600; // Fixed height for desktop
const CARD_HEIGHT_MOBILE = 700; // Taller for mobile
const CARD_PADDING = 24 * 2; // p-6 = 24px on each side

// Minimum cell size to ensure visibility
const MIN_CELL_SIZE = 40; // Updated to 40 as preferred

// SVG for the Gamepad2 icon with spacing
const gamepadSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <g transform="translate(16, 16)">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#004838" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.1">
      <path d="M6 12H12M9 9V15"/>
      <path d="M15 12H15.01M18 12H18.01M15 9H15.01M15 15H15.01"/>
      <path d="M2 6H22V18H2Z"/>
    </svg>
  </g>
</svg>
`;

// Convert SVG to base64 for background-image
const gamepadBase64 = `data:image/svg+xml;base64,${btoa(gamepadSvg)}`;

export const SnakeGame: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(() => {
    const fruitData =
      COMBINED_FRUITS[Math.floor(Math.random() * COMBINED_FRUITS.length)];
    return {
      snake: [{ x: 5, y: 5 }],
      fruit: { x: 5, y: 5 }, // Temporary, will be overwritten by generateFruit
      fruitType: fruitData.name,
      fruitImage: fruitData.image,
      direction: "RIGHT",
      nextDirection: "RIGHT",
      score: 0,
      scoreCount: {},
      gameOver: false,
      isPaused: false,
      isMuted: false,
    };
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const speedRef = useRef<number>(INITIAL_SPEED);
  const { sectionRef } = useSectionAnimation();
  const gameCardRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const gameOverAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/corporate-music.mp3");
    gameOverAudioRef.current = new Audio("/game-over.mp3");
  }, []);

  const isMobile = useMediaQuery("(max-width: 767px)");

  const cardWidth = useMemo(
    () => Math.min(window.innerWidth, CARD_WIDTH) - CARD_PADDING,
    []
  );
  const cardHeight = useMemo(
    () => (isMobile ? CARD_HEIGHT_MOBILE : CARD_HEIGHT_DESKTOP) - CARD_PADDING,
    [isMobile]
  );

  const { gridWidth, gridHeight, cellSize, canvasHeight } = useMemo(() => {
    const maxCellsHorizontal = Math.floor(cardWidth / MIN_CELL_SIZE);
    const maxCellsVertical = Math.floor(cardHeight / MIN_CELL_SIZE);

    const gridWidth = Math.max(5, maxCellsHorizontal);
    let gridHeight = Math.max(5, maxCellsVertical);

    const calculatedCellSize = cardWidth / gridWidth;
    const verticalCellSize = cardHeight / gridHeight;
    const finalCellSize = Math.min(calculatedCellSize, verticalCellSize);

    let canvasHeight = gridHeight * finalCellSize;
    if (canvasHeight > cardHeight) {
      gridHeight = Math.max(5, Math.floor(cardHeight / finalCellSize));
      canvasHeight = gridHeight * finalCellSize;
    }

    return {
      gridWidth,
      gridHeight,
      cellSize: finalCellSize,
      canvasHeight,
    };
  }, [cardWidth, cardHeight]);

  const generateFruit = (
    snake: Position[]
  ): { position: Position; type: string; image: string } => {
    let newFruitPos: { position: Position; type: string; image: string };
    const fruitData =
      COMBINED_FRUITS[Math.floor(Math.random() * COMBINED_FRUITS.length)];
    let attempts = 0;
    const maxAttempts = gridWidth * gridHeight;

    do {
      newFruitPos = {
        position: {
          x: Math.floor(Math.random() * gridWidth),
          y: Math.floor(Math.random() * (gridHeight - 1)) + 1,
        },
        type: fruitData.name,
        image: fruitData.image,
      };
      attempts++;
      if (attempts > maxAttempts) {
        console.warn(
          "Could not find a free position for fruit after max attempts."
        );
        break;
      }
    } while (
      snake.some(
        (segment) =>
          segment.x === newFruitPos.position.x &&
          segment.y === newFruitPos.position.y
      )
    );

    return newFruitPos;
  };

  const moveSnake = () => {
    setGameState((prev) => {
      const {
        snake,
        nextDirection,
        fruit,
        fruitType,
        fruitImage,
        score,
        scoreCount,
      } = prev;
      const head = { ...snake[0] };

      switch (nextDirection) {
        case "UP":
          head.y -= 1;
          break;
        case "DOWN":
          head.y += 1;
          break;
        case "LEFT":
          head.x -= 1;
          break;
        case "RIGHT":
          head.x += 1;
          break;
      }

      if (
        head.x < 0 ||
        head.x >= gridWidth ||
        head.y < 0 ||
        head.y >= gridHeight ||
        snake.some((seg, i) => i > 0 && seg.x === head.x && seg.y === head.y)
      ) {
        if (!isMuted && gameOverAudioRef.current) {
          gameOverAudioRef.current.play();
        }
        return { ...prev, gameOver: true };
      }

      const newSnake = [head, ...snake];
      let newFruit = fruit;
      let newFruitType = fruitType;
      let newFruitImage = fruitImage;
      let newScore = score;
      const newScoreCount = { ...scoreCount };

      if (head.x === fruit.x && head.y === fruit.y) {
        const { position, type, image } = generateFruit(newSnake); // Use newSnake
        newFruit = position;
        newFruitType = type;
        newFruitImage = image;
        newScore += 1;
        newScoreCount[fruitType] = (newScoreCount[fruitType] || 0) + 1;
        speedRef.current = Math.max(50, speedRef.current - 2);
      } else {
        newSnake.pop();
      }

      return {
        ...prev,
        snake: newSnake,
        direction: nextDirection,
        fruit: newFruit,
        fruitType: newFruitType,
        fruitImage: newFruitImage,
        score: newScore,
        scoreCount: newScoreCount,
      };
    });
  };

  useEffect(() => {
    if (!audioRef.current) return;
    if (!isPlaying || gameState.gameOver) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else if (!isMuted && !gameState.isPaused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, gameState.gameOver, isMuted, gameState.isPaused]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.loop = true;
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  useEffect(() => {
    if (!isPlaying || gameState.gameOver) return;

    let lastTime = performance.now();
    let frameId: number;

    const loop = (currentTime: number) => {
      if (gameState.isPaused) {
        lastTime = currentTime;
        frameId = requestAnimationFrame(loop);
        return;
      }

      const delta = currentTime - lastTime;
      if (delta > speedRef.current) {
        moveSnake();
        lastTime = currentTime - (delta % speedRef.current);
      }
      frameId = requestAnimationFrame(loop);
    };

    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, [
    isPlaying,
    gameState.gameOver,
    gameState.isPaused,
    gridWidth,
    gridHeight,
  ]);

  const startGame = () => {
    const { position, type, image } = generateFruit([{ x: 5, y: 5 }]); // Pass initial snake
    setGameState({
      snake: [{ x: 5, y: 5 }],
      fruit: position,
      fruitType: type,
      fruitImage: image,
      direction: "DOWN",
      nextDirection: "DOWN",
      score: 0,
      scoreCount: {},
      gameOver: false,
      isPaused: false,
      isMuted,
    });
    speedRef.current = INITIAL_SPEED;
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      if (!isMuted) {
        audioRef.current.play();
      }
    }
    setTimeout(() => {
      if (gameCardRef.current) {
        gameCardRef.current.focus();
      }
    }, 100);
  };

  const resetGame = () => {
    setIsPlaying(false);
    setIsMuted(false);
    if (gameCardRef.current) {
      gameCardRef.current.blur();
    }
  };

  const togglePause = () => {
    setGameState((prev) => ({ ...prev, isPaused: !prev.isPaused }));
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    setGameState((prev) => ({ ...prev, isMuted: !prev.isMuted }));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isPlaying || gameState.gameOver) return;

      switch (e.key) {
        case "ArrowUp":
          if (gameState.direction !== "DOWN") {
            setGameState((prev) => ({ ...prev, nextDirection: "UP" }));
          }
          e.preventDefault();
          break;
        case "ArrowDown":
          if (gameState.direction !== "UP") {
            setGameState((prev) => ({ ...prev, nextDirection: "DOWN" }));
          }
          e.preventDefault();
          break;
        case "ArrowLeft":
          if (gameState.direction !== "RIGHT") {
            setGameState((prev) => ({ ...prev, nextDirection: "LEFT" }));
          }
          e.preventDefault();
          break;
        case "ArrowRight":
          if (gameState.direction !== "LEFT") {
            setGameState((prev) => ({ ...prev, nextDirection: "RIGHT" }));
          }
          e.preventDefault();
          break;
        case " ":
          togglePause();
          e.preventDefault();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPlaying, gameState.direction, gameState.gameOver]);

  return (
    <section
      id={SECTION_IDS.SIMULATOR}
      ref={sectionRef}
      className="container-section slide-up bg-muted/30"
    >
      <Card
        className="bg-transparent border-primary/10 pt-12 pb-12 rounded-xl w-full"
        style={{
          backgroundImage: `url(${gamepadBase64})`,
          backgroundRepeat: "repeat",
          backgroundSize: "6vw 6vw",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-center mb-8">
          <Tag icon={Gamepad2} text="Market Simulator" />
        </div>
        <div className="flex flex-col justify-center mb-8 w-4/5 md:w-4/5 mx-auto">
          <h2 className="section-title">{CONTENT.simulator.header}</h2>
          <p className="text-xl font-bold m-4 max-w-5xl mx-auto">
            {CONTENT.simulator.sub}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card
            ref={gameCardRef}
            tabIndex={0}
            className="p-6 bg-transparent border-transparent shadow-none transform transition-all duration-300 w-full focus:outline-none"
            style={{
              height: isMobile ? CARD_HEIGHT_MOBILE : CARD_HEIGHT_DESKTOP,
            }}
          >
            <div className="relative rounded-lg h-full flex flex-col">
              {!isPlaying ? (
                <div className="flex flex-col items-center justify-center h-full bg-muted/50 rounded-lg">
                  <Button
                    size="lg"
                    onClick={startGame}
                    className="text-lg px-8 py-6 text-white  bg-primary text-accent font-bold hover:bg-[#003428]"
                  >
                    <Play className="mr-2 h-5 w-5 " />
                    Begin Deal Flow
                  </Button>
                </div>
              ) : (
                <>
                  <div className="absolute top-2 left-2 z-10 bg-card/80 px-3 py-1 rounded-md text-sm font-bold">
                    Score: {gameState.score}
                  </div>
                  <div
                    className="w-full overflow-hidden rounded-lg"
                    style={{ height: canvasHeight }}
                  >
                    <GameCanvas
                      snake={gameState.snake}
                      fruit={gameState.fruit}
                      fruitType={gameState.fruitType}
                      fruitImage={gameState.fruitImage}
                      cellSize={cellSize}
                      gridSize={gridWidth}
                      gridHeight={gridHeight}
                    />
                  </div>
                  {gameState.gameOver ? (
                    <GameOverScreen
                      score={gameState.score}
                      scoreCount={gameState.scoreCount}
                      onRestart={startGame}
                      onCancel={resetGame}
                    />
                  ) : (
                    <div className="mt-4">
                      <GameControls
                        onMoveUp={() =>
                          setGameState((prev) => ({
                            ...prev,
                            nextDirection: "UP",
                          }))
                        }
                        onMoveDown={() =>
                          setGameState((prev) => ({
                            ...prev,
                            nextDirection: "DOWN",
                          }))
                        }
                        onMoveLeft={() =>
                          setGameState((prev) => ({
                            ...prev,
                            nextDirection: "LEFT",
                          }))
                        }
                        onMoveRight={() =>
                          setGameState((prev) => ({
                            ...prev,
                            nextDirection: "RIGHT",
                          }))
                        }
                        onTogglePause={togglePause}
                        onToggleMute={toggleMute}
                        onReset={resetGame}
                        isPaused={gameState.isPaused}
                        isMuted={isMuted}
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          </Card>
        </div>
      </Card>
    </section>
  );
};
