"use client";

import { useState, useRef } from "react";

const HomePageComponent = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const squareSize = 50; // Tamanho do quadrado

  const startMoving = (direction: string) => {
    if (intervalRef.current) return; // Evita múltiplos intervalos

    intervalRef.current = setInterval(() => {
      setPosition((prev) => {
        // Obtendo os limites da tela
        const maxX = window.innerWidth / 2 - squareSize; // Metade da largura menos o tamanho do quadrado
        const maxY = window.innerHeight / 2 - squareSize; // Metade da altura menos o tamanho do quadrado

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
    }, 50);
  };

  const stopMoving = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-white gap-4">
      <section
        className="w-50 h-50 bg-blue-500 rounded-lg shadow-lg transition-transform"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      ></section>
      <div className="flex flex-col items-center gap-4">
        <button
          className="px-4 py-4 bg-gray-800 text-white rounded shadow"
          onMouseDown={() => startMoving("up")}
          onMouseUp={stopMoving}
          onMouseLeave={stopMoving}
        >
          UP
        </button>
        <div className="flex gap-2">
          <button
            className="px-4 py-4 bg-gray-800 text-white rounded shadow"
            onMouseDown={() => startMoving("left")}
            onMouseUp={stopMoving}
            onMouseLeave={stopMoving}
          >
            LEFT
          </button>
          <button
            className="px-4 py-4 bg-gray-800 text-white rounded shadow"
            onMouseDown={() => startMoving("right")}
            onMouseUp={stopMoving}
            onMouseLeave={stopMoving}
          >
            RIGHT
          </button>
        </div>
        <button
          className="px-4 py-4 bg-gray-800 text-white rounded shadow"
          onMouseDown={() => startMoving("down")}
          onMouseUp={stopMoving}
          onMouseLeave={stopMoving}
        >
          DOWN
        </button>
      </div>
    </main>
  );
};

export default HomePageComponent;
