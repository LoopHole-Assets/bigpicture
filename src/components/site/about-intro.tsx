"use client";

import { ArrowUpRight } from "lucide-react";
import { PlaceholderImage } from "./placeholder-image";
import { RevealLine, Reveal } from "./reveal";

export function AboutIntro() {
  return (
    <section
      id="about-intro"
      className="relative mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24"
    >
      {/* Eyebrow */}
      <div className="mb-8 flex items-center justify-between md:mb-12">
        <span className="text-eyebrow text-muted-foreground">01 — About BigPicture</span>
        <span className="text-eyebrow text-muted-foreground">NEPAL 🇳🇵</span>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
        {/* Heading — takes 7 cols */}
        <div className="lg:col-span-7">
          <h2 className="font-semibold tracking-tightest text-foreground">
            <RevealLine delay={0}>
              <span className="text-display">Big Ideas</span>
            </RevealLine>
            <RevealLine delay={0.1}>
              <span className="text-display">Deserve</span>
            </RevealLine>
            <RevealLine delay={0.2}>
              <span className="text-display">A Bigger</span>
            </RevealLine>
            <RevealLine delay={0.3}>
              <span className="text-display">
                Picture<span className="text-accent">.</span>
              </span>
            </RevealLine>
          </h2>
        </div>

        {/* Right column — copy + visual */}
        <div className="flex flex-col gap-6 lg:col-span-5">
          <Reveal delay={0.2}>
            <p className="max-w-md text-pretty text-base text-muted-foreground md:text-lg">
              BigPicture Graphics is a Nepal-based creative and digital
              solutions studio helping businesses turn ideas into meaningful
              visual experiences. From branding and design to digital
              marketing, websites, video and print, we bring everything
              together under one roof.
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <a
              href="#about"
              className="group inline-flex items-center gap-2 text-eyebrow text-foreground"
            >
              <span className="hover-underline">More about us</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>

          {/* Visual */}
          <Reveal delay={0.45}>
            <div className="relative">
              <PlaceholderImage
                src="/images/graphic-design-3.jpg"
                alt="BigPicture Graphics design work"
                tone="graphite"
                label="The Studio"
                caption="Behind the work"
                seed={9}
                className="aspect-[16/10] w-full"
              />
              <div className="absolute -bottom-6 -left-6 hidden h-24 w-24 items-center justify-center rounded-full bg-accent text-accent-foreground md:flex">
                <span className="text-eyebrow text-center leading-tight">
                  ONE
                  <br />
                  STUDIO
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
