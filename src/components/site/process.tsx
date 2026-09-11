"use client";

import { RevealLine, Reveal } from "./reveal";
import { processSteps } from "@/lib/site-data";

export function Process() {
  return (
    <section
      id="process"
      className="relative bg-foreground px-5 py-16 text-background md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-8 flex items-end justify-between md:mb-10">
          <span className="text-eyebrow text-background/60">05 — Our Process</span>
          <span className="text-eyebrow text-background/60">
            {processSteps.length.toString().padStart(2, "0")} STEPS
          </span>
        </div>

        <h2 className="font-semibold tracking-tightest">
          <RevealLine delay={0}>
            <span className="text-display">From Idea</span>
          </RevealLine>
          <RevealLine delay={0.1}>
            <span className="text-display">
              To <span className="text-accent">Impact.</span>
            </span>
          </RevealLine>
        </h2>

        {/* Process steps — clean vertical timeline */}
        <div className="mt-8 md:mt-10">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={Math.min(i * 0.06, 0.3)}>
              <div className="grid grid-cols-1 gap-4 border-t border-background/15 py-6 md:grid-cols-12 md:gap-8 md:py-8">
                <div className="md:col-span-2">
                  <span
                    className="font-medium tracking-tightest text-accent"
                    style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 0.9 }}
                  >
                    {step.number}
                  </span>
                </div>
                <div className="md:col-span-5">
                  <h3
                    className="font-medium tracking-tightest"
                    style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1 }}
                  >
                    {step.title}
                  </h3>
                </div>
                <div className="md:col-span-5">
                  <p className="max-w-md text-pretty text-background/70 md:text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
