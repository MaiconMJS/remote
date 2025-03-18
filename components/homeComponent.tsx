"use client";

import { useState } from "react";

const HomePageComponent = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveSquare = (direction: string) => {
    setPosition((prev) => {
      switch (direction) {
        case "up":
          return { ...prev, y: prev.y - 20 };
        case "down":
          return { ...prev, y: prev.y + 20 };
        case "left":
          return { ...prev, x: prev.x - 20 };
        case "right":
          return { ...prev, x: prev.x + 20 };
        default:
          return prev;
      }
    });
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
          onClick={() => moveSquare("up")}
        >
          UP
        </button>
        <div className="flex gap-2">
          <button
            className="px-4 py-4 bg-gray-800 text-white rounded shadow"
            onClick={() => moveSquare("left")}
          >
            LEFT
          </button>
          <button
            className="px-4 py-4 bg-gray-800 text-white rounded shadow"
            onClick={() => moveSquare("right")}
          >
            RIGHT
          </button>
        </div>
        <button
          className="px-4 py-4 bg-gray-800 text-white rounded shadow"
          onClick={() => moveSquare("down")}
        >
          DOWN
        </button>
      </div>
    </main>
  );
};

export default HomePageComponent;
