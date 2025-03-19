"use client";

import useMoveSquare from "@/util/useMoveSquare";

const HomePageComponent = () => {
  const { position, startMoving, stopMoving } = useMoveSquare();

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
