export type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

export interface Position {
  x: number;
  y: number;
}

export interface ScoreCount {
  [country: string]: number;
}

export interface GameState {
  snake: Position[];
  fruit: Position;
  fruitType: string;
  fruitImage: string; // Added fruitImage field
  direction: Direction;
  nextDirection: Direction;
  score: number;
  scoreCount: ScoreCount;
  gameOver: boolean;
  isPaused: boolean;
  isMuted: boolean;
}

export interface GameProps {
  cellSize?: number;
  gridSize?: number;
  initialSpeed?: number;
}

export interface GameControlsProps {
  onMoveUp: () => void;
  onMoveDown: () => void;
  onMoveLeft: () => void;
  onMoveRight: () => void;
  onTogglePause: () => void;
  onToggleMute: () => void;
  onReset: () => void;
  isPaused: boolean;
  isMuted: boolean;
}

export interface GameOverScreenProps {
  score: number;
  scoreCount: ScoreCount;
  onRestart: () => void;
  onCancel: () => void;
}
