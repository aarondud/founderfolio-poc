import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  ArrowUp, 
  ArrowDown, 
  ArrowLeft, 
  ArrowRight, 
  Pause, 
  Play, 
  Volume2, 
  VolumeX, 
  X 
} from 'lucide-react';
import { GameControlsProps } from './types';

export const GameControls: React.FC<GameControlsProps> = ({
  onMoveUp,
  onMoveDown,
  onMoveLeft,
  onMoveRight,
  onTogglePause,
  onToggleMute,
  onReset,
  isPaused,
  isMuted,
}) => {
  return (
    <>
      {/* Top controls */}
      <div className="absolute top-2 right-2 z-10 flex space-x-2">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onToggleMute}
          className="bg-card/80 h-8 w-8"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onTogglePause}
          className="bg-card/80 h-8 w-8"
          aria-label={isPaused ? 'Resume' : 'Pause'}
        >
          {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onReset}
          className="bg-card/80 h-8 w-8"
          aria-label="Reset"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      {/* Mobile controls - only shown on small screens */}
      <div className="md:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onMoveUp}
            className="mb-2 bg-card/80"
            aria-label="Move up"
          >
            <ArrowUp className="h-6 w-6" />
          </Button>
          <div className="flex space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onMoveLeft}
              className="bg-card/80"
              aria-label="Move left"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onMoveDown}
              className="bg-card/80"
              aria-label="Move down"
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onMoveRight}
              className="bg-card/80"
              aria-label="Move right"
            >
              <ArrowRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};