"use client";

import { motion } from "framer-motion";
import { RevealLine, Reveal } from "./reveal";
import { principles } from "@/lib/site-data";

const ease = [0.22, 1, 0.36, 1] as const;

export function WhyBigPicture() {
  return (
    <section className="relative bg-background px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-8 flex items-end justify-between md:mb-10">
          <span className="text-eyebrow text-muted-foreground">04 — Why BigPicture</span>
          <span className="text-eyebrow text-muted-foreground">{principles.length.toString().padStart(2, "0")} PRINCIPLES</span>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <h2 className="font-semibold tracking-tightest text-foreground">
              <RevealLine delay={0}>
                <span className="text-display">More Than</span>
              </RevealLine>
              <RevealLine delay={0.1}>
                <span className="text-display">
                  Design<span className="text-accent">.</span>
                </span>
              </RevealLine>
            </h2>
          </div>

          <div className="flex items-end lg:col-span-5">
            <Reveal delay={0.2}>
              <p className="max-w-sm text-pretty text-muted-foreground md:text-lg">
                We don't create visuals just to make things look good. We
                create work with purpose — work that communicates, connects and
                creates impact.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Principles — editorial 2-col grid */}
        <div className="mt-10 grid grid-cols-1 gap-px border-t border-border bg-border sm:grid-cols-2 md:mt-12">
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08, ease }}
              className="group relative bg-background p-6 md:p-8"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-eyebrow text-muted-foreground">{p.number}</span>
                <span className="h-2 w-2 rounded-full bg-accent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <h3
                className="mt-6 font-medium tracking-tightest text-foreground transition-transform duration-300 group-hover:-translate-y-0.5"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", lineHeight: 1 }}
              >
                {p.title}
              </h3>
              <p className="mt-3 max-w-md text-pretty text-muted-foreground">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
