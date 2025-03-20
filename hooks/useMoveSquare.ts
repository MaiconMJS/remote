"use client";

import { useState, useEffect } from "react";

const urlWebsocket = process.env.NEXT_PUBLIC_WS_URL || "ws://localhost:3001";

const useMoveSquare = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState<string | null>(null);

  useEffect(() => {
    const socket = new WebSocket(urlWebsocket);

    socket.onmessage = (event) => {
      const newDirection = event.data.trim();
      console.log("Direção via WebSocket:", newDirection);
      setDirection(newDirection);
    };

    return () => socket.close();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        if (direction === "stop") {
          return prev;
        }
        const speed = 30;
        const squareSize = 50;
        const maxX = window.innerWidth / 2 - squareSize;
        const maxY = window.innerHeight / 2 - squareSize;

        let newX = prev.x;
        let newY = prev.y;

        switch (direction) {
          case "up":
            newY = Math.max(prev.y - speed, -maxY + squareSize);
            break;
          case "down":
            newY = Math.min(prev.y + speed, maxY - squareSize);
            break;
          case "left":
            newX = Math.max(prev.x - speed, -maxX + squareSize);
            break;
          case "right":
            newX = Math.min(prev.x + speed, maxX - squareSize);
            break;
        }
        return { x: newX, y: newY };
      });
    }, 50);

    return () => clearInterval(interval);
  }, [direction]);

  return { position };
};

export default useMoveSquare;
