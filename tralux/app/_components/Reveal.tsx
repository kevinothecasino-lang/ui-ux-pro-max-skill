"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

type RevealProps = {
  children: ReactNode;
  /** Slide-in direction. */
  from?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
};

/**
 * Scroll-triggered fade/slide reveal. Fires once when ~20% in view.
 * Honors prefers-reduced-motion: content renders fully visible, no transform.
 */
export function Reveal({
  children,
  from = "up",
  delay = 0,
  className,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();

  const offset = 24;
  const hidden =
    from === "up"
      ? { opacity: 0, y: offset }
      : from === "down"
        ? { opacity: 0, y: -offset }
        : from === "left"
          ? { opacity: 0, x: offset }
          : from === "right"
            ? { opacity: 0, x: -offset }
            : { opacity: 0 };

  const variants: Variants = {
    hidden: reduce ? { opacity: 1 } : hidden,
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: reduce ? 0 : 0.7, ease: EASE, delay: reduce ? 0 : delay },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </MotionTag>
  );
}
