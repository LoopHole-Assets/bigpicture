"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { showcaseCards, type ShowcaseCard } from "@/lib/site-data";
import { PlaceholderImage } from "./placeholder-image";
import { RevealLine } from "./reveal";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Experimental visual section — static art installation.
 * No mouse parallax. Cards simply fade in on scroll.
 * The composition carries the visual interest, not motion.
 */
export function CreativeShowcase() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Very subtle vertical drift on the whole group — barely perceptible.
  const y = useTransform(scrollYProgress, [0, 1], ["-2%", "2%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-foreground py-16 text-background md:py-24"
    >
      {/* Heading */}
      <div className="mx-auto mb-10 max-w-[1600px] px-5 md:px-10">
        <h2 className="font-semibold tracking-tightest">
          <div className="grid grid-cols-2 gap-x-6 md:grid-cols-3">
            <RevealLine delay={0}>
              <span className="text-display">Design.</span>
            </RevealLine>
            <RevealLine delay={0.05}>
              <span className="text-display">Digital.</span>
            </RevealLine>
            <RevealLine delay={0.1}>
              <span className="text-display hidden md:block">Video.</span>
            </RevealLine>
            <RevealLine delay={0.15}>
              <span className="text-display">Print.</span>
            </RevealLine>
            <RevealLine delay={0.2}>
              <span className="text-display col-span-2 md:col-span-1">Everything</span>
            </RevealLine>
            <RevealLine delay={0.25}>
              <span className="text-display text-accent">In Between.</span>
            </RevealLine>
          </div>
        </h2>
      </div>

      {/* Bounded project grid */}
      <motion.div
        style={{ y }}
        className="mx-auto grid max-w-[1600px] grid-cols-2 gap-3 px-5 md:grid-cols-4 md:gap-5 md:px-10"
      >
        {showcaseCards.map((card, i) => (
          <ShowcaseCard key={card.id} card={card} index={i} />
        ))}
      </motion.div>

      {/* Caption */}
      <div className="mx-auto mt-8 max-w-[1600px] px-5 text-center md:px-10">
        <p className="text-eyebrow text-background/40">
          AN INSTALLATION OF IDEAS — BIGPICTURE GRAPHICS
        </p>
      </div>
    </section>
  );
}

function ShowcaseCard({
  card,
  index,
}: {
  card: ShowcaseCard;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease }}
    >
      <div className="overflow-hidden shadow-[0_25px_60px_-30px_rgba(0,0,0,0.7)] transition-transform duration-500 hover:-translate-y-1">
        <PlaceholderImage
          src={card.image}
          alt={`${card.label} project image`}
          tone={card.tone}
          label={card.label}
          caption={card.caption}
          seed={index + 10}
          className="aspect-[4/5] w-full"
        />
      </div>
    </motion.div>
  );
}
