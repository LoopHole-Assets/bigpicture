"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { PlaceholderImage } from "./placeholder-image";
import { RevealLine, Reveal } from "./reveal";
import { services, type Service } from "@/lib/site-data";

const ease = [0.22, 1, 0.36, 1] as const;

export function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="relative bg-background px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-8 flex items-end justify-between md:mb-10">
          <span className="text-eyebrow text-muted-foreground">03 — Services</span>
          <span className="text-eyebrow text-muted-foreground">{services.length.toString().padStart(2, "0")} CAPABILITIES</span>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <h2 className="font-semibold tracking-tightest text-foreground">
              <RevealLine delay={0}>
                <span className="text-display">Everything</span>
              </RevealLine>
              <RevealLine delay={0.1}>
                <span className="text-display">Your Brand</span>
              </RevealLine>
              <RevealLine delay={0.2}>
                <span className="text-display">
                  Needs<span className="text-accent">.</span>
                </span>
              </RevealLine>
            </h2>
          </div>

          <div className="flex flex-col justify-end gap-6 lg:col-span-5">
            <Reveal delay={0.2}>
              <p className="max-w-sm text-pretty text-muted-foreground md:text-lg">
                One creative partner for design, digital, video, marketing and
                print.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Service list */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Desktop: list + preview */}
          <div className="hidden lg:col-span-7 lg:block">
            <ServiceListDesktop
              active={active}
              setActive={setActive}
            />
          </div>

          {/* Visual preview (desktop) */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <AnimatePresence mode="wait">
                {active !== null && (
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3, ease }}
                  >
                    <PlaceholderImage
                      src={services[active].image}
                      alt={`${services[active].title} preview`}
                      label={services[active].title}
                      caption={`Service ${services[active].number}`}
                      seed={active}
                      contain={services[active].title === "Custom Solutions"}
                      className="aspect-[4/5] w-full"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Default state — show first service */}
              {active === null && (
                <PlaceholderImage
                  src={services[0].image}
                  alt={`${services[0].title} preview`}
                  label={services[0].title}
                  caption={`Service ${services[0].number}`}
                  seed={0}
                  className="aspect-[4/5] w-full"
                />
              )}
            </div>
          </div>

          {/* Mobile: accordion */}
          <div className="lg:hidden">
            <ServiceListMobile />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

function ServiceListDesktop({
  active,
  setActive,
}: {
  active: number | null;
  setActive: (n: number | null) => void;
}) {
  return (
    <ul
      className="border-t border-border"
      onMouseLeave={() => setActive(null)}
    >
      {services.map((s, i) => (
        <ServiceRow
          key={s.number}
          service={s}
          index={i}
          isActive={active === i}
          onHover={() => setActive(i)}
        />
      ))}
    </ul>
  );
}

function ServiceRow({
  service,
  index,
  isActive,
  onHover,
}: {
  service: Service;
  index: number;
  isActive: boolean;
  onHover: () => void;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.24), ease }}
      onMouseEnter={onHover}
      className={cn(
        "group relative cursor-pointer border-b border-border transition-colors duration-300",
        isActive ? "bg-foreground/[0.02]" : ""
      )}
    >
      <div className="flex items-baseline justify-between gap-6 py-5">
        <div className="flex items-baseline gap-6">
          <span
            className={cn(
              "text-eyebrow transition-colors duration-300",
              isActive ? "text-accent" : "text-muted-foreground"
            )}
          >
            {service.number}
          </span>
          <h3
            className={cn(
              "font-medium tracking-tightest transition-transform duration-300",
              isActive ? "translate-x-1 text-accent" : "text-foreground"
            )}
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1 }}
          >
            {service.title}
          </h3>
        </div>
        <div className="flex items-center gap-6">
          <span
            className={cn(
              "max-w-xs text-sm transition-opacity duration-300",
              isActive ? "opacity-100" : "opacity-0"
            )}
          >
            {service.description}
          </span>
          <span
            className={cn(
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
              isActive
                ? "rotate-45 border-accent bg-accent text-accent-foreground"
                : "border-border text-foreground"
            )}
          >
            <Plus className="h-5 w-5" />
          </span>
        </div>
      </div>

      {/* Tag row revealed on hover */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            className="overflow-hidden"
          >
            <div className="flex flex-wrap items-center gap-2 pb-6 pl-16">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 text-eyebrow text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}

/* -------------------------------------------------------------------------- */

function ServiceListMobile() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="border-t border-border">
      {services.map((s, i) => (
        <li key={s.number} className="border-b border-border">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 py-5 text-left"
          >
            <div className="flex items-baseline gap-4">
              <span className="text-eyebrow text-muted-foreground">{s.number}</span>
              <h3
                className="font-medium tracking-tightest text-foreground"
                style={{ fontSize: "clamp(1.5rem, 6vw, 2.25rem)", lineHeight: 1 }}
              >
                {s.title}
              </h3>
            </div>
            <span
              className={cn(
                "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                open === i
                  ? "rotate-45 border-accent bg-accent text-accent-foreground"
                  : "border-border text-foreground"
              )}
            >
              <Plus className="h-5 w-5" />
            </span>
          </button>

          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease }}
                className="overflow-hidden"
              >
                <div className="pb-6 pl-12">
                  <p className="text-muted-foreground">{s.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-3 py-1.5 text-eyebrow text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </li>
      ))}
    </ul>
  );
}
