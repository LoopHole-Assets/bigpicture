"use client";

import { marqueeItems } from "@/lib/site-data";

/**
 * Infinite scrolling services marquee.
 * Large editorial typography with diamond separators.
 * Continuous, slow, premium feel.
 */
export function Marquee() {
  // Duplicate items for seamless loop
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <section
      aria-label="Services marquee"
      className="border-y border-border bg-foreground py-4 text-background md:py-5"
    >
      <div className="relative overflow-hidden">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-foreground to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-foreground to-transparent md:w-40" />

        <div className="flex w-max animate-marquee items-center">
          {items.map((item, i) => (
            <div key={i} className="flex items-center">
              <span
                className="px-6 font-medium tracking-tight text-background md:px-10"
                style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)" }}
              >
                {item}
              </span>
              <Diamond />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Diamond() {
  return (
    <span
      className="flex h-2.5 w-2.5 rotate-45 bg-accent md:h-3 md:w-3"
      aria-hidden
    />
  );
}
