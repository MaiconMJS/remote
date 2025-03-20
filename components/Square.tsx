"use client";

import useMoveSquare from "@/hooks/useMoveSquare";

const Square = () => {
  const { position } = useMoveSquare();

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-white">
      <section
        className="w-50 h-50 bg-blue-500 rounded-lg shadow-lg transition-transform"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      ></section>
    </main>
  );
};

export default Square;
