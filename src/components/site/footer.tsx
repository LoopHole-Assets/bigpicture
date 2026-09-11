"use client";

import { ArrowUpRight } from "lucide-react";
import { navLinks, socialLinks, contactInfo } from "@/lib/site-data";
import { RevealLine } from "./reveal";

interface FooterProps {
  onStartProject: () => void;
}

const serviceLinks = [
  "Branding",
  "Graphic Design",
  "Video",
  "Digital Marketing",
  "Web Development",
  "Printing",
];

export function Footer({ onStartProject }: FooterProps) {
  return (
    <footer className="relative bg-foreground text-background">
      <div className="mx-auto max-w-[1600px] px-5 py-12 md:px-10 md:py-16">
        {/* Big CTA */}
        <div className="flex flex-col items-start justify-between gap-8 border-b border-background/15 pb-10 md:flex-row md:items-end">
          <div>
            <span className="text-eyebrow text-background/60">Ready when you are</span>
            <h2 className="mt-4 font-semibold tracking-tightest">
              <RevealLine delay={0}>
                <span className="text-display">Start a project</span>
              </RevealLine>
            </h2>
          </div>
          <button
            onClick={onStartProject}
            className="group inline-flex items-center gap-2 rounded-full bg-background px-7 py-4 text-eyebrow text-foreground transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
          >
            Let's begin
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-6 py-10 md:grid-cols-4 md:gap-8">
          <FooterCol title="Navigation">
            {navLinks.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Services">
            {serviceLinks.map((s) => (
              <FooterLink key={s} href="#services">
                {s}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Social">
            {Object.entries(socialLinks).map(([k, v]) => (
              <FooterLink key={k} href={v} external>
                {k}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Studio">
            <p className="text-sm text-background/60">
              Creative &amp; Digital Studio
              <br />
              {contactInfo.address}
            </p>
            <p className="mt-4 text-sm text-background/60">
              Nepal <span className="text-accent">🇳🇵</span> / Working worldwide
            </p>
            <a
              href={`mailto:${contactInfo.email}`}
              className="mt-4 block text-sm text-background/80 transition-colors hover:text-accent"
            >
              {contactInfo.email}
            </a>
            <div className="mt-2 flex flex-col gap-1 text-sm text-background/60">
              {contactInfo.phoneNumbers.map((phone) => (
                <a key={phone} href={`tel:${phone}`} className="hover:text-accent">
                  {phone}
                </a>
              ))}
            </div>
          </FooterCol>
        </div>

        {/* Large logo wordmark */}
        <div className="overflow-hidden border-t border-background/15 pt-8">
          <img src="/logo.svg.jpg" alt="" aria-hidden="true" className="mb-5 h-8 w-8" />
          <h3
            className="whitespace-nowrap font-semibold leading-none tracking-[-0.07em]"
            style={{ fontSize: "clamp(2.75rem, 14vw, 13rem)" }}
          >
            BIGPI<span className="text-accent">C</span>TURE
            <span className="text-accent">®</span>
          </h3>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-background/15 pt-6 md:flex-row md:items-center">
          <span className="text-eyebrow text-background/60">
            © 2026 BigPicture Graphics. All rights reserved.
          </span>
          <span className="text-eyebrow text-background/60">
            Made with big ideas.
          </span>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-eyebrow text-background/40">{title}</h4>
      <div className="mt-3 flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group inline-flex items-center gap-1.5 py-1 text-pretty text-background/80 transition-colors duration-300 hover:text-accent"
    >
      <span className="hover-underline">{children}</span>
    </a>
  );
}
