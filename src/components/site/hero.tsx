"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { PlaceholderImage } from "./placeholder-image";

interface HeroProps {
  onStartProject: () => void;
}

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero({ onStartProject }: HeroProps) {
  const ref = useRef<HTMLElement>(null);

  // Subtle scroll fade — content gently fades and lifts as user scrolls past hero.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[88svh] w-full overflow-hidden bg-background md:min-h-[100svh]"
    >
      {/* Background grid lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-y-0 left-[16.66%] w-px bg-foreground" />
        <div className="absolute inset-y-0 left-[33.33%] w-px bg-foreground" />
        <div className="absolute inset-y-0 left-[50%] w-px bg-foreground" />
        <div className="absolute inset-y-0 left-[66.66%] w-px bg-foreground" />
        <div className="absolute inset-y-0 left-[83.33%] w-px bg-foreground" />
      </div>

      {/* Static art-directed composition — no mouse parallax, just clean layering */}
      <div className="pointer-events-none absolute inset-0">
        {/* Background — large offset image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
          className="absolute right-[5%] top-[18%] hidden h-[40vh] w-[28vw] lg:block"
        >
          <PlaceholderImage
            src="/images/hero-branding.png"
            alt="Branding mockup placeholder"
            tone="vermilion"
            label="Himalayan Roastery"
            caption="Branding"
            seed={1}
            className="aspect-[3/4] w-full shadow-[0_30px_80px_-30px_rgba(0,0,0,0.4)]"
          />
        </motion.div>

        {/* Front layer — small ink card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease }}
          className="absolute bottom-[14%] right-[18%] hidden h-[20vh] w-[16vw] lg:block"
        >
          <PlaceholderImage
            src="/images/hero-web.jpeg"
            alt="Website interface placeholder"
            tone="ink"
            label="Kathmandu Sound"
            caption="Web"
            seed={5}
            className="aspect-[4/3] w-full shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)]"
          />
        </motion.div>

        {/* Static geometric accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.0, ease }}
          className="absolute right-[28%] top-[14%] hidden lg:block"
        >
          <div className="h-24 w-24 rounded-full border-2 border-accent" />
        </motion.div>
      </div>

      {/* Main hero content */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 mx-auto flex min-h-[88svh] max-w-[1600px] flex-col justify-between px-5 pb-6 pt-20 md:min-h-[100svh] md:px-10 md:pb-8 md:pt-24"
      >
        {/* Top eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="flex items-center justify-between"
        >
          <span className="text-eyebrow text-muted-foreground">
            Creative &amp; Digital Studio — Nepal <span className="text-accent">🇳🇵</span>
          </span>
          <span className="hidden text-eyebrow text-muted-foreground md:block">
            EST. NEPAL / WORKING WORLDWIDE
          </span>
        </motion.div>

        {/* Hero headline */}
        <div className="flex flex-col">
          <h1 className="font-semibold tracking-tightest text-foreground">
            <RevealHeroLine delay={0.4}>
              <span className="text-hero">From Ideas</span>
            </RevealHeroLine>
            <RevealHeroLine delay={0.55}>
              <span className="text-hero">
                To <span className="text-accent">Impact.</span>
              </span>
            </RevealHeroLine>
          </h1>

          {/* Supporting line + CTAs */}
          <div className="mt-6 flex flex-col gap-4 md:mt-10 md:flex-row md:items-end md:justify-between">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85, ease }}
              className="max-w-md text-pretty text-base text-muted-foreground md:text-lg"
            >
              BigPicture Graphics combines design, technology, storytelling and
              strategy to help businesses create brands people remember.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.95, ease }}
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <button
                onClick={onStartProject}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-4 text-eyebrow text-background transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-4 text-eyebrow transition-colors duration-300 hover:border-foreground"
              >
                Explore our work
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar — meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.15, ease }}
          className="mt-6 flex items-end justify-between border-t border-border pt-4 md:mt-0"
        >
          <div className="hidden text-eyebrow text-muted-foreground md:block">
            The Big Move for Your Brand&apos;s Picture.
          </div>
          <div className="flex items-center gap-6 text-eyebrow text-muted-foreground">
            <span className="hidden sm:block">SCROLL ↓</span>
            <span>© 2026</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function RevealHeroLine({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="reveal-mask block">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}
