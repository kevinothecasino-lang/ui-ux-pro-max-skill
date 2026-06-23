"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Subtle animated white/gray glow blobs that drift slowly behind content,
 * adding depth to the matte-black field without ever reading as "color".
 * Static (no oscillation) when reduced motion is requested.
 */
export function AmbientBlobs() {
  const reduce = useReducedMotion();

  const blobs = [
    { className: "left-[-10%] top-[-10%] h-[40rem] w-[40rem]", o: 0.07, dur: 22, dx: 40, dy: 30 },
    { className: "right-[-15%] top-[20%] h-[32rem] w-[32rem]", o: 0.05, dur: 28, dx: -50, dy: 40 },
    { className: "left-[20%] bottom-[-15%] h-[36rem] w-[36rem]", o: 0.04, dur: 26, dx: 30, dy: -40 },
  ];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[110px] ${b.className}`}
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)",
            opacity: b.o,
          }}
          animate={
            reduce
              ? undefined
              : { x: [0, b.dx, 0], y: [0, b.dy, 0] }
          }
          transition={{
            duration: b.dur,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
