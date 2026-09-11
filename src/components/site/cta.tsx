"use client";

import { ArrowUpRight } from "lucide-react";
import { RevealLine, Reveal } from "./reveal";
import { socialLinks } from "@/lib/site-data";

interface CTAProps {
  onStartProject: () => void;
}

export function CTA({ onStartProject }: CTAProps) {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background px-5 py-16 md:px-10 md:py-24"
    >
      {/* Subtle background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 grid grid-cols-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-foreground" />
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-[1600px]">
        <div className="mb-6 flex items-end justify-between">
          <span className="text-eyebrow text-muted-foreground">Let's Talk</span>
          <span className="text-eyebrow text-muted-foreground">NEPAL 🇳🇵 / WORLDWIDE</span>
        </div>

        <h2 className="font-semibold tracking-tightest text-foreground">
          <RevealLine delay={0}>
            <span className="text-display">Have An</span>
          </RevealLine>
          <RevealLine delay={0.1}>
            <span className="text-display">
              Idea<span className="text-accent">?</span>
            </span>
          </RevealLine>
          <RevealLine delay={0.25}>
            <span className="text-display mt-4 block">Let's Make</span>
          </RevealLine>
          <RevealLine delay={0.35}>
            <span className="text-display">
              It <span className="text-accent">Big.</span>
            </span>
          </RevealLine>
        </h2>

        <div className="mt-8 flex flex-col gap-6 border-t border-border pt-6 md:flex-row md:items-end md:justify-between">
          <Reveal delay={0.4}>
            <p className="max-w-md text-pretty text-muted-foreground md:text-lg">
              Tell us what you're building, launching or imagining. We'll help
              turn it into something people remember.
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                onClick={onStartProject}
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-eyebrow text-background transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-eyebrow transition-colors duration-300 hover:border-foreground"
              >
                Instagram
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
