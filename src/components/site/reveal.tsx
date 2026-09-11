"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Stagger children by this many seconds. */
  stagger?: number;
  once?: boolean;
  as?: "div" | "span" | "p" | "h1" | "h2" | "h3";
}

/**
 * Scroll-triggered reveal — subtle fade + 24px upward movement.
 * Single, calm transition. No bouncing, no spinning, no large movements.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  stagger = 0,
  once = true,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as] as typeof motion.div;

  if (stagger > 0) {
    const container: Variants = {
      hidden: {},
      visible: {
        transition: { staggerChildren: stagger, delayChildren: delay },
      },
    };
    const item: Variants = {
      hidden: { opacity: 0, y: 24 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      },
    };
    return (
      <MotionTag
        className={className}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-60px" }}
      >
        {Array.isArray(children) ? (
          children.map((child, i) => (
            <motion.div key={i} variants={item}>
              {child}
            </motion.div>
          ))
        ) : (
          <motion.div variants={item}>{children}</motion.div>
        )}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

/* -------------------------------------------------------------------------- */

interface RevealLineProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

/**
 * Clip-masked line reveal — text rises into view from behind a mask.
 * Subtle, premium. Use for large display headings, one line at a time.
 */
export function RevealLine({ children, className, delay = 0, once = true }: RevealLineProps) {
  return (
    <span className="reveal-mask block">
      <motion.span
        className={cn("block", className)}
        initial={false}
        animate={{ y: "0%" }}
        viewport={{ once, margin: "-60px" }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}
