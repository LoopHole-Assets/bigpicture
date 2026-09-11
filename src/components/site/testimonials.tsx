"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { RevealLine } from "./reveal";
import { testimonials } from "@/lib/site-data";

const ease = [0.22, 1, 0.36, 1] as const;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className="relative bg-background px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-8 flex items-end justify-between md:mb-10">
          <span className="inline-flex items-center gap-3 text-eyebrow text-muted-foreground">
            <img src="/logo.svg.jpg" alt="" aria-hidden="true" className="h-6 w-6" />
            07 — Client Stories
          </span>
          <span className="text-eyebrow text-muted-foreground">
            {(index + 1).toString().padStart(2, "0")} / {testimonials.length.toString().padStart(2, "0")}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <h2 className="font-semibold tracking-tightest text-foreground">
              <RevealLine delay={0}>
                <span className="text-display">Words</span>
              </RevealLine>
              <RevealLine delay={0.1}>
                <span className="text-display">From The</span>
              </RevealLine>
              <RevealLine delay={0.2}>
                <span className="text-display">
                  Other Side<span className="text-accent">.</span>
                </span>
              </RevealLine>
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="relative min-h-[390px] md:min-h-[340px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease }}
                  className="flex h-full flex-col gap-6"
                >
                  {/* Quote */}
                  <blockquote
                    className="max-w-4xl font-serif italic text-foreground"
                    style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)", lineHeight: 1.2, letterSpacing: "-0.02em" }}
                  >
                    <span className="text-accent">“</span>
                    {active.quote}
                    <span className="text-accent">”</span>
                  </blockquote>

                  {/* Footer — name + logo + photo */}
                  <div className="mt-auto flex items-center gap-4 border-t border-border pt-5">
                    {active.photo ? (
                      <img
                        src={active.photo}
                        alt={active.name}
                        className="h-14 w-14 rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border text-eyebrow text-muted-foreground">
                        {active.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="font-medium tracking-tight text-foreground">
                        {active.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {active.position}
                        {active.company ? ` — ${active.company}` : ""}
                      </p>
                    </div>
                    {active.logo ? (
                      <img
                        src={active.logo}
                        alt={`${active.company} logo`}
                        className="h-8 w-auto object-contain opacity-60 grayscale"
                      />
                    ) : null}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="mt-6 flex items-center gap-4">
              <button
                onClick={prev}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background md:h-11 md:w-11"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background md:h-11 md:w-11"
                aria-label="Next testimonial"
              >
                <ArrowRight className="h-5 w-5" />
              </button>

              {/* Progress dots */}
              <div className="ml-4 flex items-center gap-3">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className="group relative h-3 w-3 rounded-full"
                    aria-label={`Go to testimonial ${i + 1}`}
                  >
                    <span
                      className={`absolute inset-0 rounded-full transition-all duration-500 ${
                        i === index ? "bg-accent scale-125" : "bg-border group-hover:bg-muted-foreground"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
