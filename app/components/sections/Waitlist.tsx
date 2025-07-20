"use client";

import dynamic from "next/dynamic";
import React, { useRef, useEffect, useState } from "react";
import type p5 from "p5";

// Load p5 only on the client side
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

const GlowingDots = () => {
  const dotSpacing = 20;
  const dotSize = 3;
  const dots = useRef<{ x: number; y: number }[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  // Measure container size once on mount
  useEffect(() => {
    if (containerRef.current) {
      setCanvasSize({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    }
  }, []);

  const setup = (p5: p5, canvasParentRef: Element) => {
    const { width, height } = canvasSize;
    const cnv = p5.createCanvas(width, height);
    cnv.parent(canvasParentRef);
    p5.noStroke();

    const cols = Math.floor(width / dotSpacing);
    const rows = Math.floor(height / dotSpacing);

    dots.current = [];
    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        dots.current.push({ x: x * dotSpacing, y: y * dotSpacing });
      }
    }
  };

  const draw = (p5: p5) => {
    p5.background("#1a1a1a");

    for (const dot of dots.current) {
      const d = p5.dist(p5.mouseX, p5.mouseY, dot.x, dot.y);
      const maxDist = 100;
      const scale = p5.map(d, 0, maxDist, 1.8, 0.5, true);
      const alpha = p5.map(d, 0, maxDist, 255, 100, true);

      p5.fill(255, alpha);
      p5.circle(dot.x, dot.y, dotSize * scale);
    }
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none"
    >
      {canvasSize.width > 0 && canvasSize.height > 0 && (
        <Sketch setup={setup} draw={draw} />
      )}
    </div>
  );
};

const Waitlist = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <GlowingDots />
      <div className="relative z-10 text-white text-center">
        <h2 className="text-3xl font-bold">Join the Waitlist</h2>
        <p className="mt-2 text-lg">
          Be the first to access the next big thing.
        </p>
      </div>
    </div>
  );
};

export default Waitlist;
