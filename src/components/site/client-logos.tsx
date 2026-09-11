"use client";

import { clients } from "@/lib/site-data";

/**
 * Animated "Trusted By" logo strip.
 * Logos scroll horizontally continuously, pause on hover.
 * Uses pure CSS animation for performance.
 */
export function ClientLogos() {
  // Duplicate the list so the animation loops seamlessly
  const items = [...clients, ...clients];

  return (
    <section className="relative border-y border-border bg-background py-10 md:py-12">
      <div className="mx-auto mb-6 max-w-[1600px] px-5 text-center md:px-10">
        <span className="inline-flex items-center gap-2 text-eyebrow text-muted-foreground">
          <img src="/logo.svg.jpg" alt="" aria-hidden="true" className="h-5 w-5" />
          Trusted By
        </span>
      </div>

      <div className="relative overflow-hidden">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent md:w-40" />

        {/* Scrolling track */}
        <div className="flex w-max animate-logo-scroll items-center">
          {items.map((c, i) => (
            <div
              key={`${c.id}-${i}`}
              className="flex shrink-0 items-center justify-center px-8 md:px-14"
            >
              {c.logo ? (
                <img
                  src={c.logo}
                  alt={`${c.name} logo`}
                  className="max-h-12 w-auto object-contain opacity-50 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 md:max-h-14"
                />
              ) : (
                <span className="whitespace-nowrap text-xl font-medium tracking-tight text-muted-foreground/60 transition-colors duration-500 hover:text-foreground md:text-2xl">
                  {c.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
