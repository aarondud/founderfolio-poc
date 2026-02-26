import React from "react";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { GAME_OVER_MESSAGES } from "@/lib";
import { GameOverScreenProps } from "./types";

interface ExtendedGameOverScreenProps extends GameOverScreenProps {
  onCancel: () => void; // Add onCancel prop
}

export const GameOverScreen: React.FC<ExtendedGameOverScreenProps> = ({
  score,
  scoreCount,
  onRestart,
  onCancel,
}) => {
  const message =
    GAME_OVER_MESSAGES.find((msg) => score >= msg.min && score <= msg.max)
      ?.message || "Game Over!";

  return (
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-20 rounded-lg">
      <Card className="w-11/12 max-w-md relative">
        <CardContent className="p-6">
          <button
            onClick={onCancel} // Use onCancel instead of reload
            className="absolute top-2 right-2 text-2xl font-bold text-foreground hover:text-muted-foreground"
          >
            <X className="h-6 w-6" />
          </button>
          <h3 className="text-2xl font-bold text-center mb-2">Runway Depleted.</h3>
          <p className="text-lg text-center text-muted-foreground mb-6">
            {message}
          </p>

          <div className="mb-6">
            <div className="flex justify-between font-semibold text-lg mb-2">
              <span>Final Score:</span>
              <span>{score}</span>
            </div>

            <div className="border-t border-border pt-2">
              <h4 className="font-medium mb-2">Deals Closed:</h4>
              <ul className="space-y-1">
                {Object.entries(scoreCount).map(([country, count]) => (
                  <li key={country} className="flex justify-between">
                    <span>{country}:</span>
                    <span>{count}</span>
                  </li>
                ))}
                {Object.keys(scoreCount).length === 0 && (
                  <li className="text-muted-foreground text-sm italic">
                    No portfolio companies acquired.
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="flex justify-center">
            <Button className="text-accent" onClick={onRestart}>
              <Play className="mr-2 h-4 w-4" />
              Play Again
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
