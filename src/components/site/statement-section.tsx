"use client";

import { RevealLine } from "./reveal";

/**
 * Dramatic full-screen statement section.
 * Minimal — large editorial type centered on a dark ground.
 * Lines reveal subtly on scroll-in. No scroll-jacking, no parallax.
 */
export function StatementSection() {
  return (
    <section className="relative flex min-h-[80svh] items-center justify-center overflow-hidden bg-foreground px-5 py-20 text-background md:px-10 md:py-24">
      <div className="mx-auto max-w-[1400px] text-center">
        <h2 className="font-semibold tracking-tightest">
          <RevealLine delay={0}>
            <span className="text-display">Good Design</span>
          </RevealLine>
          <RevealLine delay={0.1}>
            <span className="text-display text-background/50">Gets Attention.</span>
          </RevealLine>
          <div className="my-4 md:my-8" />
          <RevealLine delay={0.2}>
            <span className="text-display">Great Design</span>
          </RevealLine>
          <RevealLine delay={0.3}>
            <span className="text-display text-accent">Gets Remembered.</span>
          </RevealLine>
        </h2>
      </div>

      {/* Bottom hairline */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-background/20" />
    </section>
  );
}
