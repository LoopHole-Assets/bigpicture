"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { RevealLine, Reveal } from "./reveal";
import { partners, type Partner } from "@/lib/site-data";

const ease = [0.22, 1, 0.36, 1] as const;

export function Partners() {
  return (
    <section className="relative bg-background px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-8 flex items-end justify-between md:mb-10">
          <span className="inline-flex items-center gap-3 text-eyebrow text-muted-foreground">
            <img src="/logo.svg.jpg" alt="" aria-hidden="true" className="h-6 w-6" />
            06 — Technology Partner
          </span>
          <span className="text-eyebrow text-muted-foreground">SOFTWARE / SAAS</span>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <h2 className="font-semibold tracking-tightest text-foreground">
              <RevealLine delay={0}>
                <span className="text-display">Big Ideas.</span>
              </RevealLine>
              <RevealLine delay={0.1}>
                <span className="text-display">
                  Bigger Systems<span className="text-accent">.</span>
                </span>
              </RevealLine>
            </h2>
          </div>

          <div className="flex items-end lg:col-span-5">
            <Reveal delay={0.2}>
              <p className="max-w-sm text-pretty text-muted-foreground md:text-lg">
                BigPicture Graphics partners with Loophole Infotech to make
                enterprise-grade software and SaaS tools more accessible to
                growing businesses.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-10 md:mt-12">
          {partners.map((p, i) => (
            <PartnerCard key={p.id} partner={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerCard({ partner, index }: { partner: Partner; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.05, 0.3), ease }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 md:p-10"
    >
      <a
        href={partner.website ?? "#"}
        target={partner.website?.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        onClick={(e) => {
          if (!partner.website || partner.website === "#") e.preventDefault();
        }}
        className="flex h-full flex-col justify-between"
      >
        <div className="flex min-h-16 items-start justify-between">
          {partner.logo ? (
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="h-16 w-16 rounded-xl object-contain opacity-90 transition-all duration-500 group-hover:scale-105"
            />
          ) : (
            <LogoPlaceholder name={partner.name} />
          )}
          <ArrowUpRight className="h-5 w-5 -translate-x-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
        </div>

        <div className="mt-8">
          <h3 className="font-medium leading-tight tracking-tight text-foreground">
            {partner.name}
          </h3>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {partner.description}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 text-eyebrow text-foreground">
            View website
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </a>
    </motion.div>
  );
}

function LogoPlaceholder({ name }: { name: string }) {
  // Procedural placeholder logo — abstract monogram
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return <span className="text-display text-foreground">{initials}</span>;
}
