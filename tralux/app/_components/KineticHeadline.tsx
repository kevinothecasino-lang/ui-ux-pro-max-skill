"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Word-by-word reveal for hero headlines (kinetic typography).
 * Words rise + fade in sequence; with reduced motion the whole line
 * is shown immediately with no transform.
 */
export function KineticHeadline({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.08 } },
  };

  const word: Variants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: "0.5em" },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.8, ease: EASE },
    },
  };

  return (
    <motion.h1
      className={className}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span variants={word} className="inline-block">
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
}
