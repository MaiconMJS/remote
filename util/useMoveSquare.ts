"use client";

import { useState, useRef } from "react";

const useMoveSquare = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const squareSize = 50;

  const startMoving = (direction: string, time: number = 50) => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setPosition((prev) => {
        const maxX = window.innerWidth / 2 - squareSize;
        const maxY = window.innerHeight / 2 - squareSize;

        let newX = prev.x;
        let newY = prev.y;

        switch (direction) {
          case "up":
            newY = Math.max(prev.y - 30, -maxY + 150);
            break;
          case "down":
            newY = Math.min(prev.y + 30, maxY + 55);
            break;
          case "left":
            newX = Math.max(prev.x - 30, -maxX + 50);
            break;
          case "right":
            newX = Math.min(prev.x + 30, maxX - 50);
            break;
        }
        return { x: newX, y: newY };
      });
    }, time);
  };

  const stopMoving = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return { position, startMoving, stopMoving };
};

export default useMoveSquare;
