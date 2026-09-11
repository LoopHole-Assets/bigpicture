"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PlaceholderImage } from "./placeholder-image";
import { RevealLine, Reveal } from "./reveal";
import {
  portfolio,
  portfolioCategories,
  type PortfolioItem,
} from "@/lib/site-data";
import { useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Portfolio() {
  const [active, setActive] = useState<(typeof portfolioCategories)[number]>("All");

  const filtered = portfolio.filter(
    (p) => active === "All" || p.category === active
  );

  return (
    <section id="work" className="relative bg-background px-5 py-16 md:px-10 md:py-24">
      {/* Header */}
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-8 flex items-end justify-between md:mb-10">
          <span className="inline-flex items-center gap-3 text-eyebrow text-muted-foreground">
            <img src="/logo.svg.jpg" alt="" aria-hidden="true" className="h-6 w-6" />
            02 — Selected Work
          </span>
          <span className="text-eyebrow text-muted-foreground">
            {filtered.length.toString().padStart(2, "0")} / {portfolio.length.toString().padStart(2, "0")}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <h2 className="font-semibold tracking-tightest text-foreground">
              <RevealLine delay={0}>
                <span className="text-display">Work That</span>
              </RevealLine>
              <RevealLine delay={0.1}>
                <span className="text-display">
                  Speaks<span className="text-accent">.</span>
                </span>
              </RevealLine>
            </h2>
          </div>

          <div className="flex flex-col justify-end gap-6 lg:col-span-5">
            <Reveal delay={0.2}>
              <p className="max-w-sm text-pretty text-muted-foreground md:text-lg">
                A selection of creative work created for brands, businesses
                and ideas.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Category filter */}
        <Reveal delay={0.3}>
          <div className="mt-8 flex items-center gap-2 overflow-x-auto border-t border-border pt-4 md:mt-10">
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2.5 text-eyebrow transition-all",
                  active === cat
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Masonry grid */}
      <div className="mx-auto mt-8 max-w-[1600px] md:mt-10">
        <motion.div layout className="grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <PortfolioCard
                key={item.id}
                item={item}
                index={i}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
}

function PortfolioCard({ item, index }: PortfolioCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.5, ease, delay: Math.min(index * 0.04, 0.24) }}
      className="group relative min-w-0"
    >
      <a
        href={item.link ?? "#"}
        className="block h-full w-full"
        onClick={(e) => {
          if (!item.link) e.preventDefault();
        }}
      >
        {/* Image */}
        <div
          className={cn(
            "relative aspect-[4/3] w-full overflow-hidden bg-surface"
          )}
        >
          <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.03]">
            <PlaceholderImage
              src={item.image}
              alt={`${item.title} — ${item.client}`}
              className="h-full w-full"
            />
          </div>

          {/* Hover overlay */}
          <div className="pointer-events-none absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100">
            <div className="p-5 text-background">
              <span className="block text-eyebrow opacity-80">
                Project {item.id.replace("p", "").padStart(2, "0")}
              </span>
            </div>
            <div className="p-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </div>
        </div>

        {/* Caption row */}
        <div className="mt-4 flex min-h-[4.25rem] items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="font-medium leading-tight tracking-tight text-foreground">
              {item.title}
            </h3>
            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{item.client}</p>
          </div>
          <div className="shrink-0 text-right">
            <span className="block text-eyebrow text-muted-foreground">
              {item.category}
            </span>
            <span className="mt-1 block text-eyebrow text-muted-foreground">
              {item.year}
            </span>
          </div>
        </div>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </a>
    </motion.article>
  );
}
